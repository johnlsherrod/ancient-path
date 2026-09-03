/* ==========================================================================
   AP-STORY-MODULE-v1
   Ancient Path — Your Story: the shared save.

   ONE file. Every writing surface on the site loads it and passes a config.
   A new form is a config, not a codebase.

       APStory.init({ form: "lament", fields: [...], ... });

   What lives here, so it is written once and fixed once:
     - saving, restoring, deleting a piece
     - the honest wait (the service takes seven to eleven seconds)
     - holding the reader's place when a form steps forward
     - seeking to the work when a reader arrives on a saved link
     - remembering which shelf a man's pieces belong to

   What does NOT live here: anything that knows what a lament is.
   If a rule needs to know the form, it belongs in the form.

   INTERFACE WORDS ARE FIXED (naming standard): the button says SAVE.
   "keep" is the SERVICE's word for the call and stays as it is on the wire.
   ========================================================================== */

(function (window, document) {
  "use strict";

  if (window.APStory) { return; }   /* loaded twice: first one wins */

  /* ----------------------------------------------------------------------
     The service. ONE address, in ONE place, for every form on the site.
     A versioned redeploy that issues a new URL is changed here and nowhere
     else — that is the whole reason this is not typed per page.
     ---------------------------------------------------------------------- */
  var ENDPOINT = "https://script.google.com/macros/s/AKfycbwVBKx_iE3p-BFyOhqFuxs54AqdsrPlyihXmM31uhSYZZHAgGquf-Dg0cb2y6kxP_I0/exec";

  var OWNER_KEY = "apStoryOwner";   /* localStorage: which shelf is his */
  var SLOW_AT   = 5000;             /* when the wait message changes */

  /* ======================================================================
     1. TALKING TO THE SERVICE
     ====================================================================== */

  /* 🔴 THE CORS TRAP. The body is JSON but the declared type MUST be
     text/plain. Anything else makes the browser send a preflight, Apps
     Script does not answer preflights, and the call dies before it ever
     reaches doPost. This is the single most likely thing to break a new
     wiring. Do not "fix" it to application/json. */
  function call(action, payload) {
    var body = { action: action };
    for (var k in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, k)) { body[k] = payload[k]; }
    }
    return window.fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body)
    })
    .then(function (res) { return res.json(); })
    /* 🔴 EVERY failure comes back as a healthy HTTP 200 carrying ok:false.
       A page that checks only whether the request succeeded reports a
       silent success on every error the service can raise. Read the body. */
    .then(function (data) {
      if (!data || data.ok !== true) {
        var err = new Error((data && data.error) || "The save did not complete.");
        err.serviceError = true;
        throw err;
      }
      return data.data;
    });
  }

  /* ======================================================================
     2. WHOSE SHELF IS THIS
     ------------------------------------------------------------------
     THE SEAM. Today identity is a random owner id this browser remembers,
     so a man has a shelf before he has ever signed in. When sign-in lands,
     ONLY this function changes — it returns the account id instead, and
     the claim call rewrites the old owner to it. Nothing else in the file
     knows the difference. Keep it that way.
     ====================================================================== */
  function ownerId() {
    try { return window.localStorage.getItem(OWNER_KEY) || null; }
    catch (e) { return null; }     /* private mode, blocked storage */
  }

  function rememberOwner(id) {
    if (!id) { return; }
    try { window.localStorage.setItem(OWNER_KEY, id); } catch (e) {}
  }

  /* ======================================================================
     3. SCROLLING — the two halves of one problem
     ====================================================================== */

  /* This page does NOT scroll the window. It scrolls an inner container.
     Anything aimed at window.scrollTo moves nothing, and the browser's own
     jump-to-top wins. Find the element that actually scrolls. */
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

  /* Put `el` a comfortable distance below the top of whatever scrolls.
     Shared deliberately: holding place while stepping and seeking to the
     work on arrival are the same operation pointed at different moments. */
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

  /* 🔴 THE SUSPENDED-CALLBACK GUARD.
     The scroll runs inside a double requestAnimationFrame — one frame for
     the form's own re-render, one for layout. A phone can background the
     tab BETWEEN the schedule and the drain (screen lock does it on a timer,
     with no deliberate act at all). The frames are then suspended, and the
     callback fires whenever the man comes back — yanking the page under him
     minutes later.

     Measure the CAUSE, not a proxy for it: count visibilitychange events,
     capture the count at schedule, bail if it moved.

     ⚠️ DO NOT replace this with an elapsed-time threshold in the hundreds
     of milliseconds. The gap here is dominated by main-thread jank — the
     step handler re-renders inside it — and 200-600ms on a cheap Android is
     unremarkable. A 250ms bail would silently disable this on exactly the
     device it was written for, and look identical to it never working.
     The one-second backstop below exists only for suspension modes that
     fire no visibilitychange at all; jank cannot reach it. */
  var visEpoch = 0;
  document.addEventListener("visibilitychange", function () { visEpoch++; }, false);

  /* Two frames and nothing else: one for the form's re-render, one for layout. */
  function twoFrames(fn) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(fn);
    });
  }

  /* For a scroll the reader CAUSED and is watching. Late is wrong here:
     he pressed a button, looked away, and a minute later the page moves
     under him. Bail. */
  function afterLayout(fn) {
    var epochAtSchedule = visEpoch;
    var tAtSchedule = (window.performance && window.performance.now)
      ? window.performance.now() : Date.now();
    twoFrames(function () {
      if (visEpoch !== epochAtSchedule) { return; }   /* tab went away and came back */
      var now = (window.performance && window.performance.now)
        ? window.performance.now() : Date.now();
      if (now - tAtSchedule > 1000) { return; }       /* backstop, jank-proof */
      fn();
    });
  }

  /* 🔴 THE OPPOSITE CASE, and it is why these are two functions.
     Arriving on a saved link is NOT a gesture — it runs on page load, after
     a read call that takes three seconds or more. A man who opens his link
     in a background tab has not looked at the page yet, so arriving "late"
     is not late at all: it is the first thing he will ever see.

     Guarding this one the way we guard stepping would bail every time the
     tab was backgrounded during the read — and leave him at the masthead,
     which is exactly the defect the arrival seek exists to fix.

     So: if the tab is hidden, WAIT for it, then seek. Never bail. */
  function whenVisible(fn) {
    if (!document.hidden) { twoFrames(fn); return; }
    var once = function () {
      if (document.hidden) { return; }
      document.removeEventListener("visibilitychange", once, false);
      twoFrames(fn);
    };
    document.addEventListener("visibilitychange", once, false);
  }

  /* ======================================================================
     4. SHOWING AND HIDING WITHOUT LOSING WHAT WAS THERE
     ------------------------------------------------------------------
     ⚠️ el.style.setProperty(prop, "", "important") REMOVES a declaration,
     it does not restore one. Guessing a restore value is how a hidden nav
     came back visible. Stash the real value first, put the real value back.
     ====================================================================== */
  function stash(el, prop) {
    if (!el) { return; }
    el.apsStash = el.apsStash || {};
    if (prop in el.apsStash) { return; }
    el.apsStash[prop] = {
      value: el.style.getPropertyValue(prop),
      priority: el.style.getPropertyPriority(prop)
    };
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
  function Story(cfg) {
    this.cfg = cfg;
    this.saved = null;      /* {owner, id, key} once saved */
    this.busy = false;
  }

  /* Read the answers straight out of the page.
     The form's own script is a sealed IIFE — nothing of it is reachable
     from outside — so the text is rebuilt from the DOM, never by calling
     the form's own assembler. */
  Story.prototype.answers = function () {
    var out = {};
    for (var i = 0; i < this.cfg.fields.length; i++) {
      var f = this.cfg.fields[i];
      var node = $(f.id);
      out[f.key] = node ? String(node.value == null ? "" : node.value).trim() : "";
    }
    return out;
  };

  /* The piece as the man holds it. Empty answers are skipped, the parts are
     separated by a blank line, and the form's own closing line is appended
     — so the piece in the shelf matches the piece he copied. */
  Story.prototype.document = function () {
    var a = this.answers(), parts = [];
    for (var i = 0; i < this.cfg.fields.length; i++) {
      var v = a[this.cfg.fields[i].key];
      if (v) { parts.push(v); }
    }
    var text = parts.join("\n\n");
    if (text && this.cfg.tail) { text += "\n\n" + this.cfg.tail; }
    return text;
  };

  Story.prototype.isEmpty = function () { return this.document().length === 0; };

  /* ---------------------------------------------------------------- save */
  Story.prototype.save = function (ui) {
    var self = this;
    if (this.busy) { return; }

    if (this.isEmpty()) {
      ui.fail("There is nothing written yet. Write something first, then save.");
      return;
    }

    this.busy = true;
    ui.working();

    /* The wait is real and it is long. Say so rather than pretending. */
    var slow = window.setTimeout(function () { ui.stillWorking(); }, SLOW_AT);

    var payload = {
      form: this.cfg.form,
      document: this.document(),
      answers: this.answers()
    };
    var owner = ownerId();
    if (owner) { payload.owner = owner; }   /* so a second piece joins the first */

    var action = this.saved ? "revise" : "keep";
    if (this.saved) {
      payload.owner = this.saved.owner;
      payload.id = this.saved.id;
      payload.key = this.saved.key;
    }

    call(action, payload)
      .then(function (data) {
        window.clearTimeout(slow);
        self.busy = false;
        self.saved = {
          owner: data.owner || (self.saved && self.saved.owner),
          id: data.id || (self.saved && self.saved.id),
          key: data.key || (self.saved && self.saved.key)
        };
        rememberOwner(self.saved.owner);
        /* "Saved" is set ONLY here — never optimistically, never on a
           status code, only when the service has said ok:true. */
        ui.done(self.saved);
      })
      .catch(function (err) {
        window.clearTimeout(slow);
        self.busy = false;
        ui.fail(err && err.serviceError
          ? err.message
          : "That did not save. Your words are still on this page — nothing has been lost.");
      });
  };

  /* ------------------------------------------------------------- restore */
  /* Arriving on a saved link. Fill the fields, then TELL THE FORM: the
     sealed script listens for `input`, so a synthetic event is what makes
     it update its own state and re-render. Filling values alone is invisible
     to it. */
  Story.prototype.restore = function (owner, id, key) {
    var self = this;
    return call("read", { owner: owner, id: id, key: key }).then(function (rec) {
      var a = (rec && rec.answers) || {};
      for (var i = 0; i < self.cfg.fields.length; i++) {
        var f = self.cfg.fields[i], node = $(f.id);
        if (node && typeof a[f.key] === "string") {
          node.value = a[f.key];
          node.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
      self.saved = { owner: owner, id: id, key: key };
      rememberOwner(owner);

      /* 🔴 THE ARRIVAL FIX. Restoring the words while leaving the reader at
         the masthead shows him nothing and reads as a broken link. Go to
         the work. Unconditional — he arrived FOR this, so there is no
         "already comfortable" case the way there is when stepping. */
      whenVisible(function () { seekTo(self.host(), {}); });
      return rec;
    });
  };

  /* -------------------------------------------------------------- delete */
  Story.prototype.remove = function () {
    if (!this.saved) { return Promise.resolve(); }
    var s = this.saved, self = this;
    return call("remove", { owner: s.owner, id: s.id, key: s.key })
      .then(function (r) { self.saved = null; return r; });
  };

  Story.prototype.host = function () {
    return document.querySelector(this.cfg.stepsHost || this.cfg.root);
  };

  /* ======================================================================
     7. HOLDING THE READER'S PLACE WHILE THE FORM STEPS
     ====================================================================== */
  Story.prototype.holdPlace = function () {
    var self = this;
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
     7b. SEEING THE WHOLE THING AT ONCE
     ------------------------------------------------------------------
     A stepped form asks one question at a time on purpose. But once a man
     has finished, making him walk back through nine steps to change one
     line is a punishment for having finished. This opens every step at
     once for editing, and closes back to exactly the state it found.

     ⚠️ It must restore, not guess. The form's own script sets inline
     display:none on the steps and the nav when it finishes; putting back
     a value we invented is how a hidden nav came back visible. Hence
     stash/restoreStyle rather than setting "" or "block".
     ====================================================================== */
  Story.prototype.mountEditAll = function (row) {
    var self = this, cfg = this.cfg;
    if (!cfg.stepSelector || $("apsEdit")) { return false; }

    var host = this.host();
    if (!host) { return false; }

    var open = false;
    var link = el("button", (cfg.buttonClass || "") + " " + (cfg.ghostClass || ""),
      cfg.editLabel || "Edit the whole thing");
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
        if (nav) {
          stash(nav, "display");
          nav.style.setProperty("display", "none", "important");
        }
      } else {
        restoreStyle(host, "display");
        for (i = 0; i < all.length; i++) {
          restoreStyle(all[i], "display");
          restoreStyle(all[i], "visibility");
        }
        restoreStyle(nav, "display");
      }

      link.textContent = on
        ? (cfg.doneLabel || "Done editing")
        : (cfg.editLabel || "Edit the whole thing");

      /* Opening moves a lot of page. Put the reader on the work, not
         wherever the reflow left him. Synchronous — this is a direct
         response to his click, nothing is re-rendering behind us. */
      if (on) { seekTo(host, {}); }
    }

    link.addEventListener("click", function () { showAll(!open); });
    row.appendChild(link);
    return true;
  };

  /* ======================================================================
     8. THE CONTROLS
     ------------------------------------------------------------------
     Fixed words. SAVE, COPY, DELETE — a learner's vocabulary, not ours.
     Nothing here says "keep" to a reader.
     ====================================================================== */
  Story.prototype.mount = function () {
    var self = this, cfg = this.cfg;
    var row = document.querySelector(cfg.actionsRow);
    if (!row || $("apsSave")) { return false; }

    /* The form's own primary button is demoted at RUN TIME rather than by
       editing the page's markup — saving is the primary act now. */
    (cfg.demote || []).forEach(function (sel) {
      var b = document.querySelector(sel);
      if (b && cfg.primaryClass && cfg.ghostClass) {
        b.classList.remove(cfg.primaryClass);
        b.classList.add(cfg.ghostClass);
      }
    });

    var btn = el("button", (cfg.buttonClass || "") + " " + (cfg.primaryClass || ""), "Save");
    btn.id = "apsSave";
    btn.type = "button";

    var note = el("p", "aps-note", "");
    note.id = "apsNote";

    var panel = el("div", "aps-panel", "");
    panel.id = "apsPanel";

    var ui = {
      working: function () {
        btn.disabled = true;
        btn.textContent = "Saving your work";
        note.textContent = "";
      },
      stillWorking: function () {
        btn.textContent = "Still saving";
        note.textContent = "This can take up to fifteen seconds. Do not close the page.";
      },
      done: function () {
        btn.textContent = "Saved";
        note.textContent = "Your work is saved. You can close this page.";
        self.renderSaved(panel);
      },
      fail: function (msg) {
        btn.disabled = false;
        btn.textContent = "Save";
        note.textContent = msg;
      }
    };

    btn.addEventListener("click", function () { self.save(ui); });

    row.appendChild(btn);
    this.mountEditAll(row);
    row.parentNode.insertBefore(note, row.nextSibling);
    note.parentNode.insertBefore(panel, note.nextSibling);
    return true;
  };

  /* What a man sees once it is saved. Deliberately small: this is the
     placeholder the personal page replaces. When sign-in lands, this
     becomes "It is on your page" and a link to it. */
  Story.prototype.renderSaved = function (panel) {
    var self = this;
    panel.innerHTML = "";
    if (!this.saved) { return; }

    var del = el("button", (this.cfg.buttonClass || "") + " " + (this.cfg.ghostClass || ""), "Delete this");
    del.type = "button";
    del.id = "apsDelete";
    del.addEventListener("click", function () {
      if (!window.confirm("Delete this saved copy? Your words stay on this page, but the saved copy is gone for good.")) { return; }
      del.disabled = true;
      del.textContent = "Deleting";
      self.remove()
        .then(function () { panel.innerHTML = ""; })
        .catch(function () {
          del.disabled = false;
          del.textContent = "Delete this";
        });
    });
    panel.appendChild(del);
  };

  /* ======================================================================
     9. START
     ====================================================================== */
  Story.prototype.start = function () {
    var self = this;

    this.holdPlace();
    this.mount();

    /* The page may still be building itself. Gate the retry on EXISTENCE,
       never on a return value — these functions return false both when they
       cannot run and when they are already done, so "returned false" fires
       on the success path too and would abandon the retry immediately. */
    if (!$("apsSave")) {
      var tries = 0;
      var timer = window.setInterval(function () {
        self.holdPlace();
        self.mount();
        if ($("apsSave") || ++tries > 40) { window.clearInterval(timer); }
      }, 500);
    }

    /* ?k=<owner>.<id>.<key> — a link with nothing at the other end is the
       false promise this whole design exists to avoid. */
    var m = /[?&]k=([0-9a-f]{32})\.([0-9a-f]{32})\.([0-9a-f]{64})/.exec(window.location.search);
    if (m) {
      this.restore(m[1], m[2], m[3]).catch(function () {
        var note = $("apsNote");
        if (note) { note.textContent = "That link did not open anything. Check it was copied in full."; }
      });
    }
  };

  /* ======================================================================
     10. THE PUBLIC DOOR
     ====================================================================== */
  window.APStory = {
    version: "1",

    init: function (cfg) {
      if (!cfg || !cfg.form || !cfg.fields || !cfg.fields.length) {
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
    _call: call,
    _owner: ownerId,
    _seekTo: seekTo,
    _scrollerFor: scrollerFor,
    _stash: stash,
    _restoreStyle: restoreStyle
  };

})(window, document);
