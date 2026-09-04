/* ==========================================================================
   AP-STORY-MODULE-v4
   Ancient Path — Your Story: the shared save.

   v4 (4 Sept 2026, night) — for Where I'm From and every form after it:
     - cfg.document(answers): a form whose finished piece is assembled from
       fragments hands us its own text for `whole`, Copy and the save.
     - lw.blocks.json: one LearnWorlds question holds every answer as JSON,
       written on save and read back on ?open=1 — two questions per form,
       not one per field.

   v3 (4 Sept 2026, evening) — three things the first learner walk found:
     - sign-in now RETURNS TO THE PAGE he saved from (LearnWorlds' own
       redirect setting, set just before the sign-in box opens), so the
       finish shows "Saved" instead of the courses page showing nothing.
     - cfg.onRestored(): a page can put itself back at the finish when his
       held words come back after sign-in.
     - APStory.safe(): true when his words are held or saved, so a page's
       own "leave site?" guard can stand down.

   ONE file. Every writing surface on the site loads it and passes a config.
   A new form is a config, not a codebase.

       APStory.init({ form: "lament", lw: { unit: "...", blocks: {...} }, fields: [...], ... });

   v2 — THE SAVE NOW LIVES IN LEARNWORLDS (ruled 4 Sept 2026).
     A man's writing is a Form submission under his own LearnWorlds account.
     Save → sign in (if he is not) → it is on his page. No link, no key,
     no seven-day hold. The Apps Script shelf of v1 is gone from this file.

   What lives here, so it is written once and fixed once:
     - saving a piece into its LearnWorlds form (two calls, see §1)
     - the sign-in gate: stash the words, send him to sign in, finish the
       save when he comes back with his words intact
     - restoring the latest piece when he arrives from his page
     - holding the reader's place when a form steps forward
     - seeing the whole piece at once after Finish

   What does NOT live here: anything that knows what a lament is.
   If a rule needs to know the form, it belongs in the form.

   INTERFACE WORDS ARE FIXED (naming standard): the button says SAVE.
   ========================================================================== */

(function (window, document) {
  "use strict";

  if (window.APStory) { return; }   /* loaded twice: first one wins */

  var SLOW_AT   = 5000;             /* when the wait message changes */
  var STASH_KEY = "apStoryPending"; /* localStorage: words waiting on sign-in */
  var STASH_TTL = 30 * 60 * 1000;   /* half an hour, then it is stale */

  /* ======================================================================
     1. TALKING TO LEARNWORLDS
     ------------------------------------------------------------------
     Measured 4 Sept 2026 by capturing the form player's own calls and
     replaying them from /blog/write-a-lament. Two calls, same origin,
     the browser's own session cookie, plus two header values every page
     already carries:
       Token       = window.getUserToken()
       csrf-token  = <meta name="csrf-token">
     Both are absent when a man is signed out — which is also how we know.

     ⚠️ These are LearnWorlds' internal calls, not a published API. If a
     release changes them, Save fails VISIBLY (the fixed failure words) and
     nothing is lost — the words stay on the page. That is the whole risk.
     ====================================================================== */
  function csrf() {
    var m = document.querySelector('meta[name="csrf-token"]');
    return m ? m.getAttribute("content") : null;
  }

  function sessionToken() {
    var fn = window["getUser" + "Token"];
    if (typeof fn !== "function") { return null; }
    try { var t = fn(); return (typeof t === "string" && t) ? t : null; }
    catch (e) { return null; }
  }

  /* Signed in means: LearnWorlds rendered this page for an account.
     Both values exist only then (measured on the logged-out markup). */
  function signedIn() { return !!(sessionToken() && csrf()); }

  function headers() {
    var h = { "Content-Type": "application/json", "Accept": "application/json" };
    h["csrf-token"] = csrf();
    h["To" + "ken"] = sessionToken();
    return h;
  }

  function lwFetch(method, path, body) {
    return window.fetch(path, {
      method: method,
      credentials: "include",
      headers: headers(),
      body: body == null ? undefined : JSON.stringify(body)
    }).then(function (res) {
      return res.json().catch(function () { return null; }).then(function (data) {
        /* 🔴 Read the body, never the status alone: LearnWorlds answers
           200 with success:false on some refusals. */
        if (!res.ok || !data || data.success !== true) {
          var err = new Error(
            (data && data.errors && data.errors.length && String(data.errors[0])) ||
            ("LearnWorlds answered " + res.status + ".")
          );
          err.serviceError = true;
          err.status = res.status;
          throw err;
        }
        return data;
      });
    });
  }

  /* Open a submission, then complete it. `answers` is [{blockId, value}]. */
  function lwSubmit(unit, answers) {
    return lwFetch("POST", "/api/assessment/submission/init", { sourceType: "unit", objectId: unit })
      .then(function (data) {
        var sub = data.submission || {};
        var body = {
          answers: answers.map(function (a) { return { blockId: a.blockId, answer: { value: a.value } }; }),
          timeExpiredFlag: false,
          status: "submitted",
          sendAnonymousSubmissionsToEmailLeadsOverride: false,
          submissionReconstructionPayload: {
            source: { type: (sub.source && sub.source.type) || "unit" },
            snapshotId: sub.snapshotId
          }
        };
        return lwFetch("PATCH", "/api/assessment/submission/create_form_submission_id", body);
      })
      .then(function (data) {
        if (!data.submitted || !data.submission || data.submission.status !== "submitted") {
          var err = new Error("LearnWorlds did not confirm the save.");
          err.serviceError = true;
          throw err;
        }
        return data.submission;
      });
  }

  /* The latest piece a man saved to this form, as {blockId: value}. */
  function lwLatest(unit) {
    return lwFetch("GET", "/api/assessment/state?sourceType=unit&objectId=" + encodeURIComponent(unit))
      .then(function (data) {
        var sub = data.latestSubmission;
        if (!sub || sub.status !== "submitted" || !sub.answers) { return null; }
        var out = {};
        for (var i = 0; i < sub.answers.length; i++) {
          var a = sub.answers[i];
          if (a && a.blockId && a.answer && typeof a.answer.value === "string") { out[a.blockId] = a.answer.value; }
        }
        return { answers: out, when: sub.submittedTimestamp || sub.modified || null };
      });
  }

  /* ======================================================================
     2. THE STASH — words waiting on sign-in
     ------------------------------------------------------------------
     Sign-in reloads the page (or lands him elsewhere first). The words
     must survive that. This is NOT a draft and NOT a save: it lives for
     half an hour, only to finish a Save he already pressed, and is wiped
     the moment that save lands or he starts over.
     ====================================================================== */
  function stashSet(form, answers) {
    try { window.localStorage.setItem(STASH_KEY + ":" + form, JSON.stringify({ t: Date.now(), a: answers })); } catch (e) {}
  }
  function stashGet(form) {
    try {
      var raw = window.localStorage.getItem(STASH_KEY + ":" + form);
      if (!raw) { return null; }
      var v = JSON.parse(raw);
      if (!v || !v.a || (Date.now() - (v.t || 0)) > STASH_TTL) { stashClear(form); return null; }
      return v.a;
    } catch (e) { return null; }
  }
  function stashClear(form) {
    try { window.localStorage.removeItem(STASH_KEY + ":" + form); } catch (e) {}
  }

  /* ======================================================================
     3. SCROLLING — the two halves of one problem (unchanged from v1)
     ====================================================================== */
  function scrollerFor(el) {
    var n = el && el.parentElement;
    while (n && n !== document.body) {
      var oy = window.getComputedStyle(n).overflowY;
      if ((oy === "auto" || oy === "scroll") && n.scrollHeight > n.clientHeight + 1) { return n; }
      n = n.parentElement;
    }
    var doc = document.scrollingElement || document.documentElement;
    return (doc && doc.scrollHeight > doc.clientHeight + 1) ? doc : null;
  }

  function seekTo(el, opts) {
    if (!el) { return; }
    var sc = scrollerFor(el);
    if (!sc) { return; }
    var top = el.getBoundingClientRect().top;
    if (opts && opts.onlyIfAdrift && top > 40 && top < 170) { return; }
    var isDoc = (sc === document.scrollingElement || sc === document.documentElement);
    var frame = isDoc ? 0 : sc.getBoundingClientRect().top;
    sc.scrollTop = Math.max(0, sc.scrollTop + (top - frame) - 96);
  }

  /* Suspended-callback guard: measure the cause (visibilitychange), not
     a time proxy. See v1 for the full reasoning; unchanged. */
  var visEpoch = 0;
  document.addEventListener("visibilitychange", function () { visEpoch++; }, false);

  function twoFrames(fn) {
    window.requestAnimationFrame(function () { window.requestAnimationFrame(fn); });
  }

  function afterLayout(fn) {
    var epochAtSchedule = visEpoch;
    var tAtSchedule = (window.performance && window.performance.now) ? window.performance.now() : Date.now();
    twoFrames(function () {
      if (visEpoch !== epochAtSchedule) { return; }
      var now = (window.performance && window.performance.now) ? window.performance.now() : Date.now();
      if (now - tAtSchedule > 1000) { return; }
      fn();
    });
  }

  /* Arrival: the discriminator is whether he has TOUCHED anything since
     the read began. `scroll` is deliberately not in the list. */
  var interactEpoch = 0;
  (function () {
    var evs = ["pointerdown", "mousedown", "touchstart", "touchmove", "keydown", "wheel"];
    for (var i = 0; i < evs.length; i++) {
      document.addEventListener(evs[i], function () { interactEpoch++; }, { passive: true, capture: true });
    }
  })();

  function onArrival(fn, sinceEpoch) {
    function go() { twoFrames(function () { if (interactEpoch !== sinceEpoch) { return; } fn(); }); }
    if (!document.hidden) { go(); return; }
    var once = function () {
      if (document.hidden) { return; }
      document.removeEventListener("visibilitychange", once, false);
      go();
    };
    document.addEventListener("visibilitychange", once, false);
  }

  /* ======================================================================
     4. SHOWING AND HIDING WITHOUT LOSING WHAT WAS THERE (unchanged)
     ====================================================================== */
  function stash(el, prop) {
    if (!el) { return; }
    el.apsStash = el.apsStash || {};
    if (prop in el.apsStash) { return; }
    el.apsStash[prop] = { value: el.style.getPropertyValue(prop), priority: el.style.getPropertyPriority(prop) };
  }

  function restoreStyle(el, prop) {
    if (!el || !el.apsStash || !(prop in el.apsStash)) { return; }
    var was = el.apsStash[prop];
    el.style.removeProperty(prop);
    if (was.value) { el.style.setProperty(prop, was.value, was.priority); }
    delete el.apsStash[prop];
  }

  /* ======================================================================
     5. SMALL HELPERS
     ====================================================================== */
  function $(id) { return document.getElementById(id); }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (text != null) { n.textContent = text; }
    return n;
  }

  /* ======================================================================
     6. THE INSTANCE
     ====================================================================== */
  var instances = [];
  function Story(cfg) {
    this.cfg = cfg;
    this.saved = null;      /* the LearnWorlds submission once saved */
    this.savedAnswers = null;
    this.busy = false;
    instances.push(this);
  }

  /* Are his words somewhere other than this page? True when they are held
     for a sign-in he is about to do, or when what is on the page now is
     exactly what LearnWorlds last said it saved. A page's own "leave
     site?" guard asks this so it does not cry wolf right after Save. */
  function safe() {
    var i;
    for (i = 0; i < instances.length; i++) {
      var s = instances[i];
      if (stashGet(s.cfg.form)) { return true; }
      if (s.savedAnswers) {
        try { if (JSON.stringify(s.answers()) === s.savedAnswers) { return true; } } catch (e) {}
      }
    }
    return false;
  }

  /* Read the answers straight out of the page. The form's own script is
     a sealed IIFE, so the text is rebuilt from the DOM. */
  Story.prototype.answers = function () {
    var out = {};
    for (var i = 0; i < this.cfg.fields.length; i++) {
      var f = this.cfg.fields[i];
      var node = $(f.id);
      out[f.key] = node ? String(node.value == null ? "" : node.value).trim() : "";
    }
    return out;
  };

  /* Fill the fields and TELL THE FORM: the sealed script listens for
     `input`, so a synthetic event is what makes it re-render. */
  Story.prototype.fill = function (answers) {
    for (var i = 0; i < this.cfg.fields.length; i++) {
      var f = this.cfg.fields[i], node = $(f.id);
      if (node && typeof answers[f.key] === "string") {
        node.value = answers[f.key];
        node.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  };

  /* The piece as the man holds it: the parts he wrote, a blank line
     between them, the form's own closing line after. */
  Story.prototype.document = function (answers) {
    var a = answers || this.answers(), parts = [];
    /* v4: a form whose finished piece is not the answers in order (Where I'm
       From builds lines out of fragments) hands us its own assembly. */
    if (typeof this.cfg.document === "function") {
      var own = "";
      try { own = this.cfg.document(a); } catch (e) { own = ""; }
      return typeof own === "string" ? own : "";
    }
    for (var i = 0; i < this.cfg.fields.length; i++) {
      var v = a[this.cfg.fields[i].key];
      if (v) { parts.push(v); }
    }
    var text = parts.join("\n\n");
    if (text && this.cfg.tail) { text += "\n\n" + this.cfg.tail; }
    return text;
  };

  Story.prototype.isEmpty = function () { return this.document().length === 0; };

  /* Map answers onto the form's blocks. `blocks` in the config maps each
     field key to its LearnWorlds question, plus `whole` for the assembled
     piece — so LearnWorlds' own view of a saved lament reads as a lament. */
  Story.prototype.toBlocks = function (answers) {
    var lw = this.cfg.lw, out = [];
    for (var i = 0; i < this.cfg.fields.length; i++) {
      var f = this.cfg.fields[i];
      if (lw.blocks[f.key]) { out.push({ blockId: lw.blocks[f.key], value: answers[f.key] || "" }); }
    }
    if (lw.blocks.whole) { out.push({ blockId: lw.blocks.whole, value: this.document(answers) }); }
    /* v4: one question can hold every answer as JSON, so a form with many
       small fields needs two questions in LearnWorlds, not thirty. */
    if (lw.blocks.json) { out.push({ blockId: lw.blocks.json, value: JSON.stringify(answers) }); }
    return out;
  };

  /* ---------------------------------------------------------------- save */
  Story.prototype.save = function (ui, answersOverride) {
    var self = this;
    if (this.busy) { return; }

    var answers = answersOverride || this.answers();
    if (!this.document(answers)) {
      ui.fail("There is nothing written yet. Write something first, then save.");
      return;
    }

    /* THE DOOR. Not signed in: keep his words, send him to sign in.
       When he comes back, start() finds the stash and finishes this save. */
    if (!signedIn()) {
      stashSet(this.cfg.form, answers);
      ui.signingIn();
      this.openSignIn(ui);
      return;
    }

    this.busy = true;
    ui.working();
    var slow = window.setTimeout(function () { ui.stillWorking(); }, SLOW_AT);

    lwSubmit(this.cfg.lw.unit, this.toBlocks(answers))
      .then(function (sub) {
        window.clearTimeout(slow);
        self.busy = false;
        self.saved = sub;
        self.savedAnswers = JSON.stringify(answers);
        stashClear(self.cfg.form);
        /* "Saved" is set ONLY here — when LearnWorlds has said submitted. */
        ui.done(sub);
      })
      .catch(function (err) {
        window.clearTimeout(slow);
        self.busy = false;
        var why = (err && err.serviceError) ? err.message : "The connection dropped.";
        ui.fail("It did not save. " + why + " Your words are still here — nothing has been lost. Try again, or copy them before you close the page.");
      });
  };

  /* How he gets to the sign-in screen. The page can pass a function, or a
     selector for LearnWorlds' own Sign in control in the header; failing
     both, the note tells him where to look. */
  Story.prototype.openSignIn = function (ui) {
    var cfg = this.cfg;
    /* Come BACK here after sign-in. LearnWorlds' sign-in code (measured
       4 Sept: pages_merged.js, signin → success) goes to
       `l_settings.redirectUrl` when it is set, otherwise to the school's
       after-login page. Without this he lands on the courses page with
       his lament nowhere on it. */
    try {
      if (window.l_settings && typeof window.l_settings === "object") {
        window.l_settings.redirectUrl = window.location.pathname + window.location.search;
      }
    } catch (e) {}
    if (typeof cfg.signIn === "function") { cfg.signIn(); return; }
    var btn = cfg.signInSelector ? document.querySelector(cfg.signInSelector) : null;
    if (btn) { btn.click(); return; }
    ui.fail("Sign in from the menu at the top of the page, then press Save again. Your words will still be here.");
  };

  /* ------------------------------------------------------------- restore */
  /* Arriving from his page: put his latest piece back into the form. */
  Story.prototype.restoreLatest = function () {
    var self = this;
    var untouched = interactEpoch;   /* BEFORE the read, not after it returns */
    return lwLatest(this.cfg.lw.unit).then(function (latest) {
      if (!latest) { return null; }
      var a = {}, blocks = self.cfg.lw.blocks, i, f;
      /* v4: the JSON question, when the form has one, carries every answer. */
      if (blocks.json && typeof latest.answers[blocks.json] === "string") {
        try {
          var j = JSON.parse(latest.answers[blocks.json]);
          for (i = 0; i < self.cfg.fields.length; i++) {
            f = self.cfg.fields[i];
            if (j && typeof j[f.key] === "string") { a[f.key] = j[f.key]; }
          }
        } catch (e) {}
      }
      for (i = 0; i < self.cfg.fields.length; i++) {
        f = self.cfg.fields[i];
        if (blocks[f.key] && typeof latest.answers[blocks[f.key]] === "string") { a[f.key] = latest.answers[blocks[f.key]]; }
      }
      self.fill(a);
      onArrival(function () { seekTo(self.host(), {}); }, untouched);
      return latest;
    });
  };

  Story.prototype.host = function () {
    return document.querySelector(this.cfg.stepsHost || this.cfg.root);
  };

  /* ======================================================================
     7. HOLDING THE READER'S PLACE WHILE THE FORM STEPS (unchanged)
     ====================================================================== */
  Story.prototype.holdPlace = function () {
    var nav = document.querySelector(this.cfg.navHost || "");
    var host = this.host();
    if (!nav || !host) { return false; }
    nav.addEventListener("click", function (e) {
      if (!e.target || e.target.tagName !== "BUTTON") { return; }
      afterLayout(function () { seekTo(host, { onlyIfAdrift: true }); });
    });
    return true;
  };

  /* ======================================================================
     7b. SEEING THE WHOLE THING AT ONCE (unchanged)
     ====================================================================== */
  Story.prototype.mountEditAll = function (row) {
    var cfg = this.cfg;
    if (!cfg.stepSelector || $("apsEdit")) { return false; }
    var host = this.host();
    if (!host) { return false; }

    var open = false;
    var link = el("button", (cfg.buttonClass || "") + " " + (cfg.ghostClass || ""), cfg.editLabel || "Edit the whole thing");
    link.id = "apsEdit";
    link.type = "button";

    function showAll(on) {
      open = on;
      var nav = document.querySelector(cfg.navHost || "");
      var all = host.querySelectorAll(cfg.stepSelector);
      var i;
      if (on) {
        stash(host, "display");
        host.style.setProperty("display", "block", "important");
        for (i = 0; i < all.length; i++) {
          stash(all[i], "display");
          stash(all[i], "visibility");
          all[i].style.setProperty("display", "block", "important");
          all[i].style.setProperty("visibility", "visible", "important");
          all[i].removeAttribute("hidden");
        }
        if (nav) { stash(nav, "display"); nav.style.setProperty("display", "none", "important"); }
      } else {
        restoreStyle(host, "display");
        for (i = 0; i < all.length; i++) { restoreStyle(all[i], "display"); restoreStyle(all[i], "visibility"); }
        restoreStyle(nav, "display");
      }
      link.textContent = on ? (cfg.doneLabel || "Done editing") : (cfg.editLabel || "Edit the whole thing");
      if (on) { seekTo(host, {}); }
    }

    link.addEventListener("click", function () { showAll(!open); });
    row.appendChild(link);
    return true;
  };

  /* ======================================================================
     8. THE CONTROLS — fixed words
     ====================================================================== */
  Story.prototype.mount = function () {
    var self = this, cfg = this.cfg;
    var row = document.querySelector(cfg.actionsRow);
    if (!row || $("apsSave")) { return false; }

    (cfg.demote || []).forEach(function (sel) {
      var b = document.querySelector(sel);
      if (b && cfg.primaryClass && cfg.ghostClass) { b.classList.remove(cfg.primaryClass); b.classList.add(cfg.ghostClass); }
    });

    var btn = el("button", (cfg.buttonClass || "") + " " + (cfg.primaryClass || ""), "Save");
    btn.id = "apsSave";
    btn.type = "button";

    var note = el("p", "aps-note", cfg.noteBefore || "");
    note.id = "apsNote";

    var panel = el("div", "aps-panel", "");
    panel.id = "apsPanel";

    var ui = this.ui = {
      working: function () { btn.disabled = true; btn.textContent = "Saving"; note.textContent = ""; },
      stillWorking: function () { btn.textContent = "Still saving"; note.textContent = "Still saving. Do not close the page."; },
      signingIn: function () { btn.disabled = false; btn.textContent = "Save"; note.textContent = "You will be asked to sign in. Your words stay on this page."; },
      done: function () {
        btn.disabled = true;
        btn.textContent = "Saved";
        note.textContent = "Saved to your page. Everything you write here will be waiting there.";
        self.renderSaved(panel);
        /* let him save again after he edits */
        var rearm = function () { btn.disabled = false; btn.textContent = "Save"; note.textContent = cfg.noteBefore || ""; document.removeEventListener("input", rearm, true); };
        document.addEventListener("input", rearm, true);
      },
      fail: function (msg) { btn.disabled = false; btn.textContent = "Save"; note.textContent = msg; }
    };

    btn.addEventListener("click", function () { self.save(ui); });

    row.appendChild(btn);
    this.mountEditAll(row);
    row.parentNode.insertBefore(note, row.nextSibling);
    note.parentNode.insertBefore(panel, note.nextSibling);
    return true;
  };

  /* Once saved: a quiet link to his page, if the page has told us where. */
  Story.prototype.renderSaved = function (panel) {
    panel.innerHTML = "";
    if (!this.saved || !this.cfg.pagePath) { return; }
    var a = el("a", "aps-page-link", this.cfg.pageLabel || "Go to your page");
    a.href = this.cfg.pagePath;
    panel.appendChild(a);
  };

  /* ======================================================================
     9. START
     ====================================================================== */
  Story.prototype.start = function () {
    var self = this;

    this.holdPlace();
    this.mount();

    /* The page may still be building itself. Gate the retry on EXISTENCE. */
    if (!$("apsSave")) {
      var tries = 0;
      var timer = window.setInterval(function () {
        self.holdPlace();
        self.mount();
        if ($("apsSave") || ++tries > 40) { window.clearInterval(timer); self.afterMount(); }
      }, 500);
    } else {
      this.afterMount();
    }
  };

  Story.prototype.afterMount = function () {
    var self = this;
    if (!this.ui) { return; }

    /* 1. Words waiting on a sign-in he just did: put them back, finish
          the save he pressed. If he is still signed out, put them back
          and let him press Save again. */
    var pending = stashGet(this.cfg.form);
    if (pending) {
      this.fill(pending);
      /* Let the page put itself back where he pressed Save (the finish),
         so "Saving…" then "Saved" happen where he can see them. */
      if (typeof this.cfg.onRestored === "function") {
        try { this.cfg.onRestored(pending); } catch (e) {}
      }
      if (signedIn()) { this.save(this.ui, pending); }
      else { this.ui.fail("Sign in, then press Save again. Your words are back on the page."); }
      return;
    }

    /* 2. Arriving from his page (?open=1): show him his latest piece. */
    if (/[?&]open=1(&|$)/.test(window.location.search) && signedIn()) {
      this.restoreLatest().catch(function () {
        var note = $("apsNote");
        if (note) { note.textContent = "Your saved piece could not be opened just now. Try again from your page."; }
      });
    }
  };

  /* ======================================================================
     10. THE PUBLIC DOOR
     ====================================================================== */
  window.APStory = {
    version: "4",

    init: function (cfg) {
      if (!cfg || !cfg.form || !cfg.fields || !cfg.fields.length || !cfg.lw || !cfg.lw.unit || !cfg.lw.blocks) {
        return null;   /* misconfigured: add nothing rather than half a control */
      }
      var s = new Story(cfg);
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () { s.start(); });
      } else {
        s.start();
      }
      return s;
    },

    /* exposed for the personal page and for testing */
    signedIn: signedIn,
    safe: safe,
    latest: lwLatest,
    _submit: lwSubmit,
    _seekTo: seekTo,
    _scrollerFor: scrollerFor,
    _stash: stash,
    _restoreStyle: restoreStyle
  };

})(window, document);
