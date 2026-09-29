/* ==========================================================================
   AP-STORY-MODULE-v15
   Ancient Path — the Chronicle: the shared save and the story assistant.

   v15 (28 Sept 2026) — "Now that it's written". The five questions that
     sat on Where I'm From and Write a Lament as a section of their own
     (how do you feel, now that it's written · where do you feel it ·
     which line surprised you · if someone read only one line · how much
     of this had you said out loud) now come from the engine, in the
     finish, after Read it back and the walk and before Save, so every
     piece has them. One at a time, a tap moves him on, Back and Skip on
     every card, his answers read back at the end; for him, not saved
     with the piece. The feeling words are The Word for It, and only
     that list (APStory.wordForIt). The two pages' own section and its
     preamble come off in their configs.

   v14 (28 Sept 2026) — the walk. Everything to look at is one numbered
     list in the order it comes in his piece; "Walk through them" takes him
     to each line's box in turn with a card under it (which one, the part
     he is in, the line, the question, one opening), Next carries him on,
     stepping to another part when it is there; a changed line reads
     "Changed."; at the end, the count, Read it again, Save. "A reader",
     never "a stranger", wherever a man reads it.

   v13 (28 Sept 2026) — one button on a poem. Read it back does it all:
     what a stranger hears · what still needs a look (the checks, each with
     Go to this line) · any real person named. Check it is gone from the
     poem pages; the Road keeps its own four.

   v12 (28 Sept 2026) — the assistant moves a man toward finishing (John):
     each button says what it does, beside it; every note and every person
     it names carries "Go to this line", which brings the box those words
     came from on screen and opens it (stepping there on a stepped page),
     and once he has changed that line the item reads "Changed." with
     "Check it again" offered; "Real people named" lists only a person who
     could be recognized (a name, or a role plus something private or wrong)
     and never a brand, product, place or public figure — the second reader
     now checks the people list as it checks the notes.

   v11 (28 Sept 2026) — what John saw on Where I'm From after the first save:
     the rows get a cushion left and right (18px; the finish 20px); the
     results box takes the whole width so nothing sits beside it; Go to your
     page is dressed in the page's own dark-button colors inline, so a page
     rule for quiet links cannot paint its words over; the eighteen-and-older
     line at the top comes down and the tick box shows only if Save is
     pressed before it is ticked (John, 17 Sept: said once is enough); an
     answer from Claude that comes back empty or unreadable is asked for
     once more before he is told.

   v10 (28 Sept 2026) — less on the page, a better writing experience
   (John's ruling on what matters to a man after he saves, in order):
     1 that it was saved: "Saved to your page · 2:14 pm." first, with
       2 what is left ("4 of 7 parts written" or "Finished") under it;
       the Save button goes quiet and Go to your page is the dark button;
     3 support: the Story assistant line and its two buttons;
     4 his draft, above the row; 5 the way out; 6 the quiet things.
     Nothing else below the finish: cfg.closing folds a page's own
     closing sections (where this came from, the example, the collection
     line) into one collapsed line ABOVE the writing, gone once he has
     written. The step row is one group with even gaps, and Save carries
     the same weight as Back.

   v9 (28 Sept 2026) — John's first walk of Check it on Where I'm From:
     - the step row (Back · Save · Next) is pinned to the foot of the
       screen ONLY on a page that shows one step at a time; a page that
       stacks every step on one long page keeps it in flow, so it never
       floats over the next section.
     - the finish is a clear path in three tiers with room between them:
       have it read (Check it · Read it back, results right under them),
       keep it (Save · Your page), then the quiet things (Back · Edit ·
       Print · Save image · Copy) as small links. The finish row is not
       pinned.
     - pressing Check it or Read it back turns that button into
       "Reading…", disables both until the answer is back, and the
       results appear under the buttons and scroll into view.

   v8 (28 Sept 2026) — one engine. The Story assistant that lived in
   road.js (the house document, the four asks and their second reads,
   the relay to Claude, the page-side guards) now lives HERE, once, as
   APStory.assistant, and road.js calls it. A piece plugs in with a
   profile ({kind: "story" | "poem"}); a poem, a lament or a prayer gets
   Check it and Read it back in its finish row from cfg.assistant, and
   nothing in them changes a word he wrote. The relay address can be set
   for any page with window.AP_READER (a string) or turned off (false);
   AP_ROAD.reader still governs the Road pages. A page that runs without
   this file (the published walk-through) must inline it before road.js.

   v7 (27 Sept 2026) — the fix pass from the Story Hub QA sweep, one rule
   for every piece that loads this file:
     - ONE ROW. The page's step row and its finish row are put in the one
       order every piece keeps — Back or Edit · Download · Copy or Print ·
       Save · the next step · Your page — and the row stays at the foot of
       the screen on a phone, so Save is never off to the right or a scroll
       away. The page's own "Save and stop for now" becomes plain "Save".
     - NO "LEAVE THIS PAGE?" BOX. What he types is held on this device as
       he types (a day) and put back and saved when he returns, unless a
       newer save exists on the site. APStory.safe() is true while words
       are held, so a page's own guard stands down on its own.
     - THE WAY BACK opens in the full window when the piece runs inside a
       course player's frame (Here I Am, The Man Who Crossed).

   v6 (13 Sept 2026) — more than one finished piece:
     - a man can write a piece again and keep the one he already has. Every
       FINISHED save (not a "Save and stop for now") now also writes an
       entry into cfg.lw.blocks.history — an array of {id, when, text,
       answers} — instead of history living only as the one thing
       LearnWorlds calls the "latest submission."
     - cfg.lw.blocks.history is OPT IN, one form at a time: a form without
       it behaves exactly as v5 (nothing changes until the block exists and
       is added to that form's config). Read the entry-point comment above
       Story.prototype.save for how a save decides finished vs. not.
     - a page starts a new piece (rather than continuing the one that was
       open) by calling `instance.startNew()` before he begins writing
       again — normally wired to a "Write another" control the page adds
       near "Open it" on his personal page, or directly on the piece.
     - opening one specific saved piece (rather than always the newest) is
       `?open=<entryId>` instead of the existing `?open=1`; `?open=1`
       keeps meaning exactly what it always has — the latest.
     - APStory.historyFor(unit, historyBlockId) is a standalone read for a
       page (like /start) that lists saved pieces without mounting the
       full writing form for each one.

   v5 (7 Sept 2026) — the way back:
     - the link to his page ("Your page") is drawn beside the buttons as
       soon as a signed-in man opens any writing page, not only after a
       new save. A man arriving from his page to read a saved piece (and a
       man inside a course, where there is no site menu) always has the
       way back in front of him.

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
  var STASH_TTL = 30 * 60 * 1000;   /* a Save he pressed while signed out: half an hour, then it is stale */
  var HELD_TTL  = 24 * 60 * 60 * 1000; /* v7: words he typed and did not save: a day */
  /* v15 · The Word for It: the house list of feeling words, heavy to light (John, 17 Sept: "our branded version of feeling
     words"; 25 Sept: the nine were too few). The ONLY feeling words any piece offers; road.js carries the same list. */
  var WORD_FOR_IT = ["ashamed", "exposed", "afraid", "angry", "sad", "alone", "numb", "tired", "stuck", "restless", "convicted", "sorry", "tender", "relieved", "seen", "hopeful", "grateful", "steady", "free", "glad"];
  /* where a feeling sits: the house list of places in the body (Where Are You? and the Road use the same seven) */
  var BODY_PLACES = ["chest", "gut", "throat", "shoulders", "hands", "jaw", "nowhere yet"];

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
     1b. HISTORY — keeping more than one finished piece
     ------------------------------------------------------------------
     Everything here reads and writes ONE extra LearnWorlds question,
     cfg.lw.blocks.history, as a JSON array of finished pieces:
       [{ id, when, text, answers }, ...]
     `id` is when he saved it (a millisecond timestamp, as a string — it
     only has to be unique and to sort). `text` is the finished piece as
     the form itself assembles it (this.document(answers)), stored ready
     to show, so a page listing saved pieces (like /start) never has to
     re-derive the words from raw answers. `answers` is kept too, so the
     piece can be opened back into the live form for further editing.

     A form with no cfg.lw.blocks.history configured never touches any of
     this — save() below checks for the block before doing any of it, so
     adding history to a form is exactly one line in its config, nothing
     else about the form has to change.
     ====================================================================== */
  function parseHistoryList(raw) {
    if (!raw) { return []; }
    var v;
    try { v = JSON.parse(raw); } catch (e) { return []; }
    if (Array.isArray(v)) { return v.filter(function (e) { return e && typeof e === "object"; }); }
    return [];   /* a stray non-array value is treated as "no history yet", never thrown */
  }

  /* Was THIS save a finished piece, or a "Save and stop for now"? Three
     shapes, because the forms grew that way (see the audit, 13 Sept):
       - a dedicated meta block (Your Next Step, A Lament): read it raw.
       - meta folded in as an ordinary field (Where I'm From): it rides
         inside the same JSON blob as every other answer.
       - no meta concept at all (Asked of Me, Here I Am, The Man Who
         Crossed — one screen, nothing to "stop for now" in the middle
         of): every save is a finished save.
     A meta value that exists but will not parse counts as NOT finished —
     safer to leave a questionable save out of history than to add a
     broken entry to it. */
  function readMeta(cfg, rawByBlockId, answers) {
    var raw = null;
    if (cfg.lw.blocks.meta) { raw = rawByBlockId[cfg.lw.blocks.meta]; }
    else if (typeof answers.meta === "string") { raw = answers.meta; }
    else { return null; }   /* no meta concept on this form */
    try { return JSON.parse(raw); } catch (e) { return { finished: false }; }
  }

  function isFinishedSave(cfg, rawByBlockId, answers) {
    var meta = readMeta(cfg, rawByBlockId, answers);
    return meta === null ? true : !!meta.finished;
  }

  /* Build the updated history array for one save. `openId`, when set, is
     the entry THIS sitting has already been updating — matched and
     replaced in place rather than appended again. */
  function newEntryId() {
    /* Date.now() alone collides when two fresh entries are created inside
       the same millisecond (measured: it happens) — the suffix is what
       actually makes this unique. */
    return String(Date.now()) + "-" + Math.random().toString(36).slice(2, 8);
  }

  function mergeHistory(list, entryAnswers, text, openId) {
    var id = openId || newEntryId();
    var entry = { id: id, when: new Date().toISOString(), text: text, answers: entryAnswers };
    var out = list.slice(), i, replaced = false;
    for (i = 0; i < out.length; i++) {
      if (out[i] && out[i].id === id) { out[i] = entry; replaced = true; break; }
    }
    if (!replaced) { out.push(entry); }
    return { list: out, id: id };
  }

  /* ======================================================================
     2. THE STASH — words waiting on sign-in
     ------------------------------------------------------------------
     Sign-in reloads the page (or lands him elsewhere first). The words
     must survive that. This is NOT a draft and NOT a save: it lives for
     half an hour, only to finish a Save he already pressed, and is wiped
     the moment that save lands or he starts over.
     ====================================================================== */
  function stashSet(form, answers, press) {
    try { window.localStorage.setItem(STASH_KEY + ":" + form, JSON.stringify({ t: Date.now(), a: answers, press: !!press })); } catch (e) {}
  }
  /* v7: {t, a, press} — press is a Save he pressed while signed out; otherwise it is what he typed */
  function stashRaw(form) {
    try {
      var raw = window.localStorage.getItem(STASH_KEY + ":" + form);
      if (!raw) { return null; }
      var v = JSON.parse(raw);
      if (!v || !v.a || (Date.now() - (v.t || 0)) > (v.press ? STASH_TTL : HELD_TTL)) { stashClear(form); return null; }
      return v;
    } catch (e) { return null; }
  }
  function stashGet(form) { var v = stashRaw(form); return v ? v.a : null; }
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
  function inFrame() { try { return window.top !== window.self; } catch (e) { return true; } }

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
    /* v6: which history entry THIS sitting is updating — null means the
       next finished save starts a NEW entry rather than replacing one. */
    this.openEntryId = null;
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

  /* v10: where he stands: how many of the piece's parts carry words, and whether the page calls it finished */
  Story.prototype.progress = function () {
    var a = this.answers(), written = 0, total = 0, meta = null;
    for (var i = 0; i < this.cfg.fields.length; i++) {
      var f = this.cfg.fields[i]; if (f.key === "meta") { continue; }
      var node = $(f.id); if (node && node.type === "hidden") { continue; }
      total++; if ((a[f.key] || "").trim()) { written++; }
    }
    if (typeof a.meta === "string") { try { meta = JSON.parse(a.meta); } catch (e) { meta = null; } }
    var finished = meta && typeof meta.finished === "boolean" ? meta.finished : (total > 0 && written === total);
    return { written: written, total: total, finished: !!finished };
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
  Story.prototype.toBlocks = function (answers, extraBlock) {
    var lw = this.cfg.lw, out = [];
    for (var i = 0; i < this.cfg.fields.length; i++) {
      var f = this.cfg.fields[i];
      if (lw.blocks[f.key]) { out.push({ blockId: lw.blocks[f.key], value: answers[f.key] || "" }); }
    }
    if (lw.blocks.whole) { out.push({ blockId: lw.blocks.whole, value: this.document(answers) }); }
    /* v4: one question can hold every answer as JSON, so a form with many
       small fields needs two questions in LearnWorlds, not thirty. */
    if (lw.blocks.json) { out.push({ blockId: lw.blocks.json, value: JSON.stringify(answers) }); }
    /* v6: the history array, when this form keeps one — computed by the
       caller (save()) before toBlocks is called, just carried across. */
    if (extraBlock) { out.push(extraBlock); }
    return out;
  };

  /* ---------------------------------------------------------------- save
     v6: when cfg.lw.blocks.history exists, a FINISHED save also grows
     that array (§1b) — one extra read before the submit, to fetch
     whatever history already exists so this save can add to it rather
     than clobber it. A form without the block skips that read entirely
     and this is byte-for-byte the v5 save. */
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
      stashSet(this.cfg.form, answers, true);
      ui.signingIn();
      this.openSignIn(ui);
      return;
    }

    this.busy = true;
    ui.working();
    var slow = window.setTimeout(function () { ui.stillWorking(); }, SLOW_AT);

    var historyBlock = this.cfg.lw.blocks.history;
    var readFirst = historyBlock
      ? lwLatest(this.cfg.lw.unit).then(function (latest) { return (latest && latest.answers) || {}; })
      : window.Promise.resolve(null);

    readFirst
      .then(function (rawByBlockId) {
        var extraBlock = null, newEntryId = null;
        if (rawByBlockId) {
          if (isFinishedSave(self.cfg, rawByBlockId, answers)) {
            var priorList = parseHistoryList(rawByBlockId[historyBlock]);
            var entryAnswers = {};
            for (var k in answers) { if (k !== "meta") { entryAnswers[k] = answers[k]; } }
            var merged = mergeHistory(priorList, entryAnswers, self.document(answers), self.openEntryId);
            extraBlock = { blockId: historyBlock, value: JSON.stringify(merged.list) };
            newEntryId = merged.id;
          } else {
            /* Stopping early: carry whatever history already exists
               through unchanged. Do not touch openEntryId either — he is
               still mid-sitting on the same piece. */
            extraBlock = { blockId: historyBlock, value: rawByBlockId[historyBlock] || JSON.stringify([]) };
          }
        }
        return lwSubmit(self.cfg.lw.unit, self.toBlocks(answers, extraBlock)).then(function (sub) {
          return { sub: sub, newEntryId: newEntryId };
        });
      })
      .then(function (result) {
        window.clearTimeout(slow);
        self.busy = false;
        self.saved = result.sub;
        self.savedAnswers = JSON.stringify(answers);
        if (result.newEntryId) { self.openEntryId = result.newEntryId; }
        stashClear(self.cfg.form);
        /* "Saved" is set ONLY here — when LearnWorlds has said submitted. */
        ui.done(result.sub);
      })
      .catch(function (err) {
        window.clearTimeout(slow);
        self.busy = false;
        var why = (err && err.serviceError) ? err.message : "The connection dropped.";
        ui.fail("It did not save. " + why + " Your words are still here — nothing has been lost. Try again, or copy them before you close the page.");
      });
  };

  /* Start a new piece rather than continuing the one that was open. A
     page wires this to a "Write another" control (normally on his
     personal page, beside "Open it") BEFORE it blanks the fields for
     him — this is what tells the next Save to add a new history entry
     instead of replacing the one he had open. */
  Story.prototype.startNew = function () {
    this.openEntryId = null;
    this.saved = null;
    this.savedAnswers = null;
    var blank = {}, i;
    for (i = 0; i < this.cfg.fields.length; i++) { blank[this.cfg.fields[i].key] = ""; }
    this.fill(blank);
    if (typeof this.cfg.onStartNew === "function") { try { this.cfg.onStartNew(); } catch (e) {} }
  };

  /* Open ONE specific saved piece from history — used for `?open=<id>`,
     as opposed to `?open=1` which still means "the latest" via
     restoreLatest() below, unchanged from v5. */
  Story.prototype.restoreEntry = function (entryId) {
    var self = this;
    var historyBlock = this.cfg.lw.blocks.history;
    if (!historyBlock) { return window.Promise.resolve(null); }
    var untouched = interactEpoch;
    return lwLatest(this.cfg.lw.unit).then(function (latest) {
      var raw = (latest && latest.answers) || {};
      var list = parseHistoryList(raw[historyBlock]);
      var entry = null, i;
      for (i = 0; i < list.length; i++) { if (list[i] && list[i].id === entryId) { entry = list[i]; break; } }
      if (!entry) { return null; }
      self.fill(entry.answers || {});
      self.openEntryId = entry.id;
      onArrival(function () { seekTo(self.host(), {}); }, untouched);
      return entry;
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
      /* v6: opening "the latest" this way is opening the newest history
         entry too, when this form keeps one — so a save right after
         updates it instead of quietly starting a second entry. */
      if (blocks.history && typeof latest.answers[blocks.history] === "string") {
        var hist = parseHistoryList(latest.answers[blocks.history]);
        if (hist.length) { self.openEntryId = hist[hist.length - 1].id; }
      }
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
        /* v10: after a save the first things he reads are that it is saved and what is left; the Save button goes quiet and the way out is the dark button */
        if (cfg.primaryClass) { btn.classList.remove(cfg.primaryClass); }
        if (cfg.ghostClass) { btn.classList.add(cfg.ghostClass); }
        var pr = self.progress(), when = "";
        try { when = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).toLowerCase(); } catch (e) {}
        note.innerHTML = "";
        var l1 = el("b", "aps-saved", "Saved to your page" + (when ? " \u00b7 " + when : "") + ".");
        var l2 = el("span", "aps-left", pr.finished ? "Finished. It is on your page." : pr.written + " of " + pr.total + " " + (cfg.parts || "parts") + " written. Save keeps your place.");
        note.appendChild(l1); note.appendChild(l2);
        note.classList.add("aps-status");
        row.appendChild(note); note.style.order = "5";
        self.renderSaved(panel);
        /* let him save again after he edits */
        var rearm = function (e) {
          /* v15: a tap or a word in "Now that it's written" is not a change to the piece */
          var tg = e && e.target; if (tg && self._fieldIds && !(tg.id && self._fieldIds[tg.id])) { return; }
          btn.disabled = false; btn.textContent = "Save";
          if (cfg.ghostClass) { btn.classList.remove(cfg.ghostClass); }
          if (cfg.primaryClass) { btn.classList.add(cfg.primaryClass); }
          note.classList.remove("aps-status"); note.innerHTML = ""; note.textContent = cfg.noteBefore || ""; note.style.order = "";
          row.parentNode.insertBefore(note, row.nextSibling);
          self.renderSaved(panel);
          document.removeEventListener("input", rearm, true);
        };
        document.addEventListener("input", rearm, true);
      },
      fail: function (msg) { btn.disabled = false; btn.textContent = "Save"; note.textContent = msg; }
    };

    btn.addEventListener("click", function () { self.save(ui); });

    row.appendChild(btn);
    this.mountEditAll(row);
    this.mountAssistant(row);   /* v8 */
    this.mountAfter(row);       /* v15 */
    row.parentNode.insertBefore(note, row.nextSibling);
    note.parentNode.insertBefore(panel, note.nextSibling);
    this.renderSaved(panel);   /* v5: the way back, from the start, when he is signed in */
    this.holdTyping();         /* v7 */
    this.oneRow();             /* v7 */
    this.foldClosing();        /* v10 */
    return true;
  };

  /* ======================================================================
     8d. v10 — NOTHING BELOW THE FINISH BUT HIS PIECE AND THE FOOT
     ------------------------------------------------------------------
     cfg.closing names the page's own sections that sat after the finish
     (where this came from, the example poem, the collection line, the
     way back to the poetry pages). They fold into one collapsed line
     above the writing — an example is a model before he writes — and
     once he has written a line they are gone from the page.
     ====================================================================== */
  Story.prototype.foldClosing = function () {
    var cfg = this.cfg, self = this, sels = cfg.closing;
    if (!sels || !sels.length || $("apsAbout")) { return false; }
    var found = [];
    for (var i = 0; i < sels.length; i++) { var list = document.querySelectorAll(sels[i]); for (var j = 0; j < list.length; j++) { found.push(list[j]); } }
    if (!found.length) { return false; }
    var f0 = $(cfg.fields[0] && cfg.fields[0].id), root = document.querySelector(cfg.root);
    if (!f0 || !root) { return false; }
    var host = f0; while (host.parentElement && host.parentElement !== root) { host = host.parentElement; }
    if (host.parentElement !== root) { return false; }
    var d = el("details", "aps-about", ""); d.id = "apsAbout";
    var sm = el("summary", "", cfg.closingLabel || "About this piece, and an example"); d.appendChild(sm);
    var box = el("div", "", ""); d.appendChild(box);
    for (var k = 0; k < found.length; k++) { box.appendChild(found[k]); }
    root.insertBefore(d, host);
    var tuck = function () { var a = self.answers(); for (var key in a) { if (key !== "meta" && (a[key] || "").trim()) { d.hidden = true; return; } } d.hidden = false; };
    tuck();
    document.addEventListener("input", function (e) { var t = e.target; if (t && t.id && self._fieldIds && self._fieldIds[t.id]) { tuck(); } }, true);
    return true;
  };

  /* ======================================================================
     8b. v7 — WHAT HE TYPES IS HELD, SO NO PAGE NEEDS A "LEAVE?" BOX
     ====================================================================== */
  Story.prototype.holdTyping = function () {
    var self = this, timer = null, ids = {};
    for (var i = 0; i < this.cfg.fields.length; i++) { ids[this.cfg.fields[i].id] = true; }
    this._fieldIds = ids;
    document.addEventListener("input", function (e) {
      var t = e.target; if (!t || !t.id || !ids[t.id]) { return; }
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        var a = self.answers();
        if (self.savedAnswers && JSON.stringify(a) === self.savedAnswers) { stashClear(self.cfg.form); return; }
        if (self.document(a)) { stashSet(self.cfg.form, a, false); }
      }, 700);
    }, true);
  };

  /* ======================================================================
     8c. v7 — ONE ROW, ONE ORDER · v9 — A CLEAR PATH AT THE FINISH
     ------------------------------------------------------------------
     The page keeps its own buttons and handlers. This only puts them in
     the house order and keeps the right row in view.

     THE STEP ROW (Back · Save · Next) is pinned to the foot of the screen
     only on a page that shows one step at a time. A page that stacks all
     its steps on one long page (Where I'm From, Write a Lament) keeps the
     row in flow at the foot of the form, or it floats over the next
     section and looks like it belongs there (John, Sept 28).

     THE FINISH ROW is never pinned; it is the end of the piece. It reads
     as three tiers with room between them, in the order a man acts:
       tier 1  have it read     Check it · Read it back  (+ results under)
       tier 2  keep it          Save · Your page
       tier 3  the quiet things Back · Edit · Print · Save image · Copy,
                                as small links, not buttons
     ====================================================================== */
  var ORDER = [[/^(back|edit|cancel|go back|change the words|done editing)/i, 1], [/^(download|save image)/i, 2], [/^(copy|print)/i, 3], [/^(check it|read it back|reading)/i, 8], [/^(save|saving|still saving|saved)$/i, 4], [/^save and stop/i, 4]];
  function slotFor(node) {
    if (node.tagName === "A") { return 6; }
    if (node.tagName !== "BUTTON") { return 7; }
    var t = (node.textContent || "").replace(/\s+/g, " ").trim();
    for (var i = 0; i < ORDER.length; i++) { if (ORDER[i][0].test(t)) { return ORDER[i][1]; } }
    return 5;
  }
  /* the finish: slot → tier order. 5 saved + what's left (after a save) · 8 the ⓘ line · 10 Read it back · 15 break · 16 results and the walk · 17 Now that it's written (v15) · 20 Save · 21 Your page · 25 break · 30 the quiet things */
  function finishOrder(node, slot) {
    if (node.classList.contains("aps-status")) { return 5; }
    if (node.classList.contains("aps-assist")) { return 8; }
    if (node.classList.contains("aps-act")) { return 10; }
    if (node.classList.contains("aps-read")) { return 16; }
    if (node.classList.contains("aps-after")) { return 17; }
    if (node.classList.contains("aps-break")) { return node.getAttribute("data-at") === "a" ? 15 : 25; }
    if (slot === 8) { return 10; }
    if (slot === 4) { return 20; }
    if (slot === 6) { return 21; }
    return 30;
  }
  function breakEl(at) { var b = el("span", "aps-break", ""); b.setAttribute("data-at", at); b.setAttribute("aria-hidden", "true"); return b; }
  function arrange(row, finish) {
    if (!row) { return; }
    row.classList.add("aps-row");
    if (finish) {
      row.classList.add("aps-finish");
      if (!row.querySelector('.aps-break[data-at="a"]')) { row.appendChild(breakEl("a")); row.appendChild(breakEl("b")); }
    }
    for (var i = 0; i < row.children.length; i++) {
      var c = row.children[i];
      if (c.tagName === "BUTTON" && /^save and stop/i.test((c.textContent || "").trim())) { c.textContent = "Save"; }
      if (c.tagName === "SPAN" && !(c.textContent || "").trim() && !c.id && !c.classList.contains("aps-break")) { c.style.display = "none"; }   /* a spacer that pushed Save to the far right */
      var slot = slotFor(c);
      if (finish) {
        var o = finishOrder(c, slot);
        c.style.order = String(o);
        if (o === 30 && c.tagName === "BUTTON") { c.classList.add("aps-quiet"); }
      } else {
        c.style.order = String(slot === 8 ? 3 : slot);
      }
    }
    if (!finish) {
      row.classList.add("aps-step");
      var back = null, save = null;
      for (var j = 0; j < row.children.length; j++) { var k = row.children[j]; if (k.tagName !== "BUTTON") { continue; } var sl = slotFor(k); if (sl === 1 && !back) { back = k; } if (sl === 4 && !save) { save = k; } }
      if (back && save && save.className !== back.className) { save.className = back.className; }   /* v10: Save carries the same weight as Back, never greyed */
    }
  }
  /* a page that shows every field at once is stacked; one that shows a few at a time is stepped */
  Story.prototype.stacked = function () {
    var total = 0, shown = 0;
    for (var i = 0; i < this.cfg.fields.length; i++) {
      var node = $(this.cfg.fields[i].id); if (!node) { continue; }
      total++;
      var r = node.getBoundingClientRect(), cs = window.getComputedStyle(node);
      if (cs.display !== "none" && cs.visibility !== "hidden" && r.height > 0) { shown++; }
    }
    return total > 3 && shown >= total * 0.8;
  };
  Story.prototype.oneRow = function () {
    var cfg = this.cfg, self = this;
    if (!$("aps-row-css")) {
      var st = el("style"); st.id = "aps-row-css";
      st.textContent = ".aps-row{display:flex!important;flex-wrap:wrap;gap:12px 14px;align-items:center;background:#fff;padding:16px 18px;border-top:1px solid #E5DCC8}" +
        ".aps-row.aps-pin{position:sticky;bottom:0;z-index:3}" +
        ".aps-row .aps-page-link{margin-left:auto}" +
        ".aps-row .aps-break{flex:1 1 100%;height:0;margin:0;padding:0}" +
        ".aps-row.aps-finish{padding:22px 20px 16px;gap:14px 16px}" +
        ".aps-row.aps-finish .aps-assist{flex:1 1 100%;margin:0 0 2px}" +
        ".aps-row.aps-finish .aps-read{flex:1 1 100%;width:100%;max-width:none;margin:0}.aps-row.aps-finish .aps-read > *{max-width:62ch}" +
        ".aps-row.aps-finish .aps-read[hidden]{display:none!important}" +
        ".aps-row.aps-finish .aps-after{flex:1 1 100%;width:100%;max-width:none;margin:0}.aps-row.aps-finish .aps-after > *{max-width:62ch}" +
        ".aps-row.aps-finish > .aps-break[data-at=\"b\"]{height:1px;background:#E5DCC8;margin:10px 0 2px}" +
        ".aps-row.aps-finish > .aps-quiet{background:none!important;border:0!important;box-shadow:none!important;padding:0!important;min-height:0!important;height:auto!important;font-size:14px!important;font-weight:400!important;color:#6B6358!important;text-decoration:underline;text-underline-offset:3px;cursor:pointer;margin-right:6px}" +
        ".aps-row.aps-finish > .aps-quiet:hover{color:#1F2A44!important}" +
        ".aps-row.aps-finish > .aps-page-link{margin-left:0;font-size:15px}" +
        ".aps-row > button[disabled]{opacity:.7;cursor:progress}" +
        ".aps-row.aps-step{justify-content:flex-start;gap:12px}.aps-row.aps-step > *{margin-left:0!important;margin-right:0!important}" +
        ".aps-row.aps-finish .aps-status{flex:1 1 100%;margin:0 0 4px;font-size:16px;line-height:1.5}.aps-row.aps-finish .aps-status .aps-saved{display:block;color:#1F2A44}.aps-row.aps-finish .aps-status .aps-left{display:block;color:#6B6358;font-size:15px}" +
        ".aps-row.aps-finish > .aps-page-btn{text-decoration:none!important;display:inline-block}.aps-row.aps-finish > button[disabled].aps-quiet{opacity:1}" +
        /* v11: the eighteen-and-older line at the top comes down (John, 17 Sept); the tick box shows only if Save is pressed before it is ticked */
        ".ap-age-line{display:none!important}.ap-age:not(.is-blocked){display:none!important}" +
        ".aps-about{margin:0 0 22px}.aps-about summary{cursor:pointer;color:#8C6A3F;font-size:14.5px;text-decoration:underline;text-underline-offset:3px;list-style:none}.aps-about summary::-webkit-details-marker{display:none}.aps-about[hidden]{display:none!important}.aps-about > div{margin-top:12px;border-left:3px solid #C9A227;padding-left:14px}" +
        "@media (max-width:620px){.aps-row.aps-step > button{flex:1 1 0}}" +
        "@media (max-width:620px){.aps-row>button{flex:1 1 auto}.aps-row .aps-page-link{flex:1 1 100%;text-align:center;margin:4px 0 0}.aps-row.aps-finish > .aps-quiet{flex:0 1 auto}.aps-row.aps-finish > .aps-page-link{flex:0 1 auto;text-align:left;margin:0}}" +
        "@media print{.aps-row{position:static}}";
      document.head.appendChild(st);
    }
    /* the step row is wherever the page keeps its Next: pages name navHost "…Off" to keep holdPlace quiet, so find the row itself */
    var root = document.querySelector(cfg.root) || document, stepRow = null;
    Array.prototype.forEach.call(root.querySelectorAll("button"), function (b) {
      if (!stepRow && /^(save and stop|next)\b/i.test((b.textContent || "").trim()) && b.parentNode !== document.querySelector(cfg.actionsRow)) { stepRow = b.parentNode; }
    });
    var finishRow = document.querySelector(cfg.actionsRow);
    arrange(finishRow, true);
    arrange(stepRow, false);
    /* v9: pin the step row to the foot of the screen only when the page shows one step at a time */
    if (stepRow) { if (this.stacked()) { stepRow.classList.remove("aps-pin"); } else { stepRow.classList.add("aps-pin"); } }
    /* a page may redraw its row's words as it steps; keep the order after any press in it */
    if (finishRow) { finishRow.addEventListener("click", function () { window.setTimeout(function () { arrange(finishRow, true); }, 0); }); }
    if (stepRow) { stepRow.addEventListener("click", function () { window.setTimeout(function () { arrange(stepRow, false); }, 0); }); }
    /* the way back sits in the row, not under it */
    var panel = $("apsPanel"), rowA = finishRow;
    if (panel && rowA) {
      var move = function () { var a = panel.querySelector("a"); if (a && a.parentNode !== rowA) { rowA.appendChild(a); arrange(rowA, true); } };
      move(); self._moveLink = move;
    }
    /* v9: the ⓘ line and the results live inside the finish row, in their tiers */
    var how = document.querySelector(".aps-assist"), out = $("apsRead");
    if (rowA && how && how.parentNode !== rowA) { rowA.appendChild(how); }
    if (rowA && out && out.parentNode !== rowA) { rowA.appendChild(out); }
    if (rowA) { arrange(rowA, true); }
  };

  /* v12: from a note to the box it came from. A page builds a line out of one or more boxes ("From " + prod1 +
     " and " + prod2 + "."), so the box is the one whose words sit inside the quoted line; the longest wins. On a page
     that shows one step at a time the step row's own Back/Next carry him there. Nothing here changes a word. */
  Story.prototype.goToLine = function (quote) { var box = this.findBox(quote); if (!box) { return false; } this.bring(box); return true; };
  Story.prototype.findBox = function (quote) {
    var cfg = this.cfg, q = String(quote || "").toLowerCase(), boxes = [], best = null, bestAt = -1, bestLen = 0;
    for (var i = 0; i < cfg.fields.length; i++) {
      var f = cfg.fields[i]; if (f.key === "meta") { continue; }
      var node = $(f.id); if (!node || node.type === "hidden") { continue; }
      boxes.push(node);
      var v = String(node.value || "").trim(), at = v.length >= 2 ? q.indexOf(v.toLowerCase()) : -1;
      /* the box whose words come first in the line wins; the same start, the longer */
      if (at >= 0 && (best === null || at < bestAt || (at === bestAt && v.length > bestLen))) { best = node; bestAt = at; bestLen = v.length; }
    }
    if (!best) {   /* no box sits whole inside the line: the box that shares the most words with it */
      var qw = {}; (q.match(/[a-z\u2019']{3,}/g) || []).forEach(function (w) { qw[w] = 1; });
      var bestHits = 0;
      boxes.forEach(function (node) { var hits = 0; (String(node.value || "").toLowerCase().match(/[a-z\u2019']{3,}/g) || []).forEach(function (w) { if (qw[w]) { hits++; } }); if (hits > bestHits) { best = node; bestHits = hits; } });
    }
    return best;
  };
  Story.prototype.boxes = function () {
    var cfg = this.cfg, boxes = [];
    for (var i = 0; i < cfg.fields.length; i++) { var f = cfg.fields[i]; if (f.key === "meta") { continue; } var node = $(f.id); if (node && node.type !== "hidden") { boxes.push(node); } }
    return boxes;
  };
  /* bring a box on screen and open it; on a page that shows one step at a time the step row's own Back/Next carry him there; then cb(box) */
  Story.prototype.bring = function (best, cb) {
    var boxes = this.boxes();
    var visible = function (n) { var r = n.getBoundingClientRect(); return r.height > 0 && r.width > 0; };
    var land = function () {
      try { best.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {}
      try { best.focus({ preventScroll: true }); } catch (e) { try { best.focus(); } catch (e2) {} }
      try { if (best.setSelectionRange && best.value) { best.setSelectionRange(0, best.value.length); } } catch (e) {}
      best.classList.add("aps-here"); window.setTimeout(function () { best.classList.remove("aps-here"); }, 2500);
      if (typeof cb === "function") { cb(best); }
    };
    var walk = function (tries) {
      if (visible(best) || tries <= 0) { land(); return; }
      var idx = boxes.indexOf(best), seen = -1;
      for (var k = 0; k < boxes.length; k++) { if (visible(boxes[k])) { seen = k; break; } }
      var want = seen >= 0 && idx < seen ? /^(back)/i : /^(next|finish)/i, btn = null;
      Array.prototype.forEach.call(document.querySelectorAll(".aps-row button"), function (b) { if (!btn && want.test((b.textContent || "").trim()) && visible(b)) { btn = b; } });
      if (!btn) { land(); return; }
      btn.click(); window.setTimeout(function () { walk(tries - 1); }, 120);
    };
    walk(14);
  };
  /* the name of the part a box sits in: the nearest heading above it inside its own section */
  Story.prototype.partOf = function (box) {
    var root = document.querySelector(this.cfg.root) || document.body, e = box.parentElement;
    while (e && e !== root) {
      var hs = e.querySelectorAll("h1,h2,h3,h4,[class*='title']");
      for (var i = 0; i < hs.length; i++) { var h = hs[i]; if (!h.contains(box) && (h.compareDocumentPosition(box) & 4)) { var t = (h.textContent || "").replace(/\s+/g, " ").trim(); if (t) { return t.slice(0, 60); } } }
      e = e.parentElement;
    }
    return "";
  };

  /* v11: a page may style ".aps-page-link" as a quiet underlined link with !important; once it is the dark button
     the words must read. Copy the look of the page's own dark button onto it, inline and important. */
  Story.prototype.dressLink = function (a) {
    var cfg = this.cfg, from = cfg.primaryClass ? document.querySelector("button." + cfg.primaryClass) : null, cs = null;
    try { cs = from ? window.getComputedStyle(from) : null; } catch (e) { cs = null; }
    var put = function (k, v) { try { a.style.setProperty(k, v, "important"); } catch (e) {} };
    put("color", cs && cs.color ? cs.color : "#fff");
    put("text-decoration", "none");
    if (cs) {
      if (cs.fontFamily) { put("font-family", cs.fontFamily); }
      if (cs.fontSize) { put("font-size", cs.fontSize); }
      if (cs.fontWeight) { put("font-weight", cs.fontWeight); }
      if (cs.lineHeight) { put("line-height", cs.lineHeight); }
      if (cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)") { put("background-color", cs.backgroundColor); }
      if (cs.padding) { put("padding", cs.padding); }
      if (cs.borderRadius) { put("border-radius", cs.borderRadius); }
    }
    put("display", "inline-block");
    put("box-sizing", "border-box");
  };

  /* A quiet link to his page, if the page has told us where: drawn for any
     signed-in man from the start (v5), and after a save for everyone. */
  Story.prototype.renderSaved = function (panel) {
    panel.innerHTML = "";
    var old = document.querySelector(this.cfg.actionsRow + " .aps-page-link"); if (old) { old.parentNode.removeChild(old); }
    if (!this.cfg.pagePath) { return; }
    if (!this.saved && !signedIn()) { return; }
    var a = el("a", "aps-page-link" + (this.saved ? " " + (this.cfg.buttonClass || "") + " " + (this.cfg.primaryClass || "") + " aps-page-btn" : ""), this.saved ? (this.cfg.pageLabel || "Go to your page") : (this.cfg.pageLinkLabel || "Your page"));
    a.href = this.cfg.pagePath;
    if (inFrame()) { a.target = "_top"; }   /* v7: from inside a course frame his page opens in the full window */
    if (this.saved) { this.dressLink(a); }   /* v11: the page's own link rules must not paint the button's words over */
    panel.appendChild(a);
    if (this._moveLink) { this._moveLink(); }
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
    var held = stashRaw(this.cfg.form), pending = held ? held.a : null;
    if (pending && held.press) {
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
    /* v7: words he typed and did not save come back — and are saved — unless
       he has saved something newer since, here or on another device. */
    if (pending) {
      if (!signedIn()) { this.fill(pending); return; }
      lwLatest(this.cfg.lw.unit).then(function (latest) {
        var when = latest && latest.when ? Date.parse(latest.when) : 0;
        if (when && when > held.t) { stashClear(self.cfg.form); self.afterMount(); return; }
        self.fill(pending);
        self.save(self.ui, pending);
      }).catch(function () { self.fill(pending); });
      return;
    }

    /* 2. Arriving from his page: ?open=1 still means "the latest", exactly
          as always. ?open=<id> (v6) means one specific saved piece — his
          page links to a particular history entry instead of always the
          newest one. */
    var openMatch = /[?&]open=([^&]+)/.exec(window.location.search);
    if (openMatch && signedIn()) {
      var openVal = decodeURIComponent(openMatch[1]);
      var restored = (openVal === "1" || !this.cfg.lw.blocks.history)
        ? this.restoreLatest()
        : this.restoreEntry(openVal);
      restored.catch(function () {
        var note = $("apsNote");
        if (note) { note.textContent = "Your saved piece could not be opened just now. Try again from your page."; }
      });
    }
  };

  /* ======================================================================
     9b. v8 — THE STORY ASSISTANT, SHARED (moved here from road.js v32)
     ------------------------------------------------------------------
     One engine (John, Sept 27): the functional capability under every
     piece is written once, here, and a piece plugs its prompts into it
     with a short profile. What lives here: the house document (what a
     first reader is and may never do), the four asks and their second
     reads, the relay to Claude, and the page-side guards no instruction
     can be trusted with. road.js calls these; a poem or a prayer gets
     the two it may have (Check it · Read it back) from mountAssistant.

     A profile says which piece this is:
       { kind: "story" | "poem",     story: chapters of prose (default)
         unit: "sentence" | "line",  what a quote must be one whole of
         name: "Where I'm From",     the piece's name, for the reader
         checks: [...] }             which checks run (poem: fewer)
     ====================================================================== */
  var ASSIST = (function () {
    var HOUSE_HEAD = "You are \"a first reader\" for Ancient Path Biblical Coaching. ";
    var HOUSE_STORY = "A man has finished a formation course and is turning his own short answers into a story he may one day offer as testimony.";
    var HOUSE_POEM = "A man has written a short piece in his own words on the site — a poem, a lament or a prayer — that he may one day offer as testimony.";
    var HOUSE_BODY = [
      " You read the way a good listener in a men's group listens: you say what you heard, you ask one curious question at a time, you give no advice, you do not interpret him, and you never tell him what he is or what he feels.",
      "",
      "THE STORY STAYS HIS. Every fact, name, time, place and event comes from him. You never supply one, not even a small one (\"that spring\", \"years later\", \"at thirty\").",
      "",
      "A JOINING WORD IS A CLAIM ABOUT HIS LIFE. \"So\", \"because\", \"the same way\", \"ever since\", \"then\", \"by then\" each say that one thing caused, resembled or followed another. Never propose or imply such a link unless his own words already state it. When two sentences sit side by side and you cannot tell whether they are connected, ask him. Never bridge them for him.",
      "",
      "THE CHECKS. Read the whole story for context, then run these on the part you are given:",
      "0. exposes: a real person other than the writer who can be recognized (a name, or a role plus details) AND who is said to have done wrong, or whose private matter is told (an affair, an illness, a debt, a sin, a diagnosis). A person who is only mentioned is not exposed. Quote the sentence, leave \"question\" as an empty string and give no options: the page asks him, in its own fixed words, whether to keep it, change how the person is described, or remove it.",
      "1. belongs: a sentence about something different from the sentences around it. To find these, first say to yourself in two or three words what EACH sentence is about (work, money, his father, his son…). A sentence whose subject appears nowhere else in the part is a candidate even when it sounds like it fits the mood. Ask whether it is connected, and how, or where it belongs. Do not invent the connection, and do not skip this check because the sentences share a feeling.",
      "2. link: a joining word or phrase in his text that claims a cause, a likeness or an order his words do not support.",
      "3. half-said: something pointed at but never said (\"what my father said\", \"what happens in the car\", \"the thing I hid\"). A reader is left outside. For this check give exactly ONE option: the sentence opening that would let him say it in his own voice (\"What he said was…\", \"What happens in the car is…\"). The page adds his other two choices itself (say what it cost without repeating it; take the sentence out) and writes the question, so leave \"question\" as an empty string for this check.",
      "4. disagree: two statements that cannot both be true as written: who knew, who said what to whom, what came first, how long, how many. For every sentence about saying, hearing, telling or knowing, work out who was there and who therefore already knows; a thing said TO him is a thing the speaker knows he heard.",
      "5. stranger: a person, place or event that a reader who was not there cannot follow at its first mention.",
      "6. gap: a place where cause, cost or change is missing: what happened, what it cost him, what he did, what changed. Ask about HIM: what he did, felt, wanted, feared or chose.",
      "",
      "LIMITS. Never ask for more about what another person did wrong, or how he found it out; the story is about him, so ask what he did, felt, wanted or chose. Never ask for the details of harm done to him. Never ask him to write out a sin he has confessed or means to confess; ask what he did with it, what it cost, or who knows. If the text suggests that he or anyone else is in danger now, return no notes and set \"stop\" to true.",
      "",
      "QUESTIONS. One sentence. Plain words, second person. No church language, and never the word \"brother\". A question that contains its own answer is not a question. When a question is the one the whole story turns on, ask it and offer NO options: it is his to find.",
      "OPTIONS. Up to three sentence openings in his voice that he finishes himself, each ending with \"…\". They carry no facts: no names, numbers, times, places or events that are not already in his text."
    ].join("\n");
    var HOUSE_POEM_RULES = "\n\nTHIS IS A POEM, A LAMENT OR A PRAYER. Its line breaks are his. A line need not be a full sentence, and a plain or rough line is his voice, not a fault: never suggest smoother wording, and never judge it as writing. Where these rules say \"sentence\", read \"line\".";

    var ALL_CHECKS = ["exposes", "belongs", "link", "half-said", "disagree", "stranger", "gap"];
    var POEM_CHECKS = ["exposes", "half-said", "disagree", "stranger"];
    var KIND = {
      "exposes": "A real person is named", "belongs": "Does this belong here?", "link": "A joining word that claims something", "half-said": "Half-said",
      "disagree": "These don’t agree", "stranger": "A reader hasn’t met this yet", "gap": "Something is missing here"
    };
    var HALF_Q = "A reader is left outside here. You can say it, say what it cost you without repeating it, or remove the sentence.";
    var EXPOSE_Q = "This names a real person, and someone who knows them could recognize them here. They may read this one day. Keep it, change how they are described, or remove the sentence.";
    var HOUSE_OPENINGS = ["What happened next was…", "While that was going on, …", "Around the same time, …"];

    function prof(p) { p = p || {}; var poem = p.kind === "poem"; return { kind: poem ? "poem" : "story", unit: p.unit || (poem ? "line" : "sentence"), name: p.name || "", checks: p.checks || (poem ? POEM_CHECKS : ALL_CHECKS) }; }
    function house(p) { p = prof(p); return HOUSE_HEAD + (p.kind === "poem" ? HOUSE_POEM : HOUSE_STORY) + HOUSE_BODY + (p.kind === "poem" ? HOUSE_POEM_RULES : ""); }
    function unitOf(p) { return prof(p).unit; }

    function askNotes(p) {
      var u = unitOf(p), checks = prof(p).checks.join("|");
      return [
        "YOUR TASK NOW: read the part marked PART TO READ and return notes on it.",
        "Reply with only a JSON object of this shape:",
        "{\"stop\": false, \"subjects\": [{\"starts\": \"first three words of the " + u + "\", \"about\": \"two or three words\"}], \"notes\": [{\"check\": \"" + checks + "\", \"quote\": \"one " + u + " copied character for character from the part\", \"question\": \"…\", \"options\": [\"…\"]}]}",
        "List \"subjects\" for every " + u + " in the part first; it is your working, and the page does not show it. Then at most four notes, the most important first. Importance runs in this order: exposes, disagree, link, belongs, half-said, then stranger and gap. Report every \"exposes\" you find, up to four, before anything else. He can ask again after he has worked on these. If the part already reads well, return fewer, or none. Each \"quote\" must be one whole " + u + " copied exactly from PART TO READ, so the page can find it." + (checks.indexOf("|") > 0 && prof(p).checks.length < ALL_CHECKS.length ? " Run only these checks: " + prof(p).checks.join(", ") + "." : "")
      ].join("\n");
    }
    var ASK_CHECK_NOTES = [
      "You are the second reader. You did not write these notes. Your job is to try to break each one, using the rules above.",
      "Reject a note if: its quote is not in the part; it tells him something about himself instead of asking; it asserts or implies a connection he did not state; it asks for the details of harm done to him or for a confession to be written out; its question contains its own answer; any option carries a fact that is not in his text; it is advice; it uses church language or the word \"brother\"; it asks for more about another person's wrongdoing; it marks as \"exposes\" a person who is only mentioned and not accused or made private; or it is simply wrong about what the text says (for example, it claims a contradiction that is not one).",
      "Reply with only a JSON object: {\"verdicts\": [{\"i\": 0, \"keep\": true, \"why\": \"a few words\"}]} with one verdict per note, in order."
    ].join("\n");
    var ASK_SMOOTH = [
      "YOUR TASK NOW: smooth the part marked PART TO READ so it reads clearly and flows. This is for clarity and flow, nothing else.",
      "You may: fix grammar, tense agreement and punctuation; split or join sentences; remove a repeated word; move a sentence only if no meaning changes.",
      "You may not: add any fact, detail, name, time or feeling; add a joining word that claims cause, likeness or order unless his own words already state that connection; change what he means; make it sound like a writer instead of like him. Keep his words. If the part already reads well, return it unchanged.",
      "Keep his paragraph breaks.",
      "Reply with only a JSON object: {\"stop\": false, \"text\": \"the whole part, smoothed\", \"changed\": [\"a few words on each change you made\"]}. If the text suggests that he or anyone else is in danger now, set \"stop\" to true and return an empty \"text\"."
    ].join("\n");
    var ASK_CHECK_SMOOTH = [
      "You are the second reader. You did not write the smoothed version. Compare it with his original and try to break it.",
      "Reject it if: it adds any fact, detail, name, time or feeling he did not write; it adds or keeps a joining word that claims a cause, likeness or order his words do not support; two statements in it cannot both be true; his meaning changed anywhere; or it no longer sounds like the same man.",
      "Reply with only a JSON object: {\"ok\": true, \"problems\": [\"exact words at fault, and why\"]}"
    ].join("\n");
    function askHeard(p) {
      var u = unitOf(p);
      return [
        "YOUR TASK NOW: read the whole story and return three things.",
        "\"heard\": at most sixty words, beginning \"A reader will hear\". Do not retell the story " + u + " by " + u + ". Say what a stranger would take this story to be about, what is different between its first " + u + " and its last, and the one thing a stranger still could not tell. Report only what is on the page. No praise, no verdict, no advice, no interpretation, and nothing about what he is.",
        "\"open\": anything from the " + (prof(p).kind === "poem" ? "" : "six ") + "checks that still stands anywhere in the story, at most four, the most important first, each with \"check\", the exact " + u + " copied character for character, and one question. For half-said give \"options\": [one " + u + " opening in his voice] and leave the question empty; for exposes leave the question empty and give no options." + (prof(p).checks.length < ALL_CHECKS.length ? " Run only these checks: " + prof(p).checks.join(", ") + "." : ""),
        "\"people\": every real person other than the writer who could be recognized from the page: someone given a name, or a role plus details that would let a person who knows the writer know who is meant AND about whom the page says something private or wrong. A brand, product, company, food, drink, animal, place or public figure is not a person (Folgers is coffee). A relative or friend mentioned only by role with nothing private or wrong said about them is not listed. Each with the way the story names them and the first " + u + " they appear in, copied exactly. If none, an empty list.",
        "Reply with only a JSON object: {\"stop\": false, \"heard\": \"…\", \"open\": [{\"check\": \"…\", \"quote\": \"…\", \"question\": \"…\"}], \"people\": [{\"who\": \"…\", \"quote\": \"…\"}]}"
      ].join("\n");
    }
    var ASK_CHECK_HEARD = [
      "You are the second reader. You did not write this read-back. Try to break it.",
      "Reject the \"heard\" text if it says anything that is not on the page, praises or judges him, gives advice, interprets him, or says what he is. Reject an \"open\" item on the same grounds as any note: a quote not in the story, a question that tells instead of asks, an implied connection he did not state, a request for details of harm or a written confession, or a plain misreading.",
      "Reject a \"people\" item if it is not a person at all (a brand, product, company, food, drink, animal, place or public figure), or a person mentioned only by role with nothing private or wrong said about them, or a quote not in the story.",
      "Reply with only a JSON object: {\"heardOk\": true, \"heardWhy\": \"a few words\", \"verdicts\": [{\"i\": 0, \"keep\": true, \"why\": \"a few words\"}], \"people\": [{\"i\": 0, \"keep\": true, \"why\": \"a few words\"}]} with one verdict per open item and one per people item, in order."
    ].join("\n");
    var ASK_GAPS = [
      "YOUR TASK NOW: his sentences below are set side by side. That is a list, not yet a story. A story lives in what happened BETWEEN the sentences. For each gap between one numbered sentence and the next, write the one question whose answer, in his words, would carry a reader across.",
      "A good gap question: names what each of the two sentences is about, using his own words; asks how he got from the one to the other; and leaves room for the honest answer that they are not connected. Prefer a question whose answer is something that HAPPENED (a day, a place, something said or done, how long it took) over a question whose answer is an idea or a feeling word. Never state or hint at the connection yourself. The LIMITS and the rules for QUESTIONS and OPTIONS above all apply.",
      "Where he has already written something between two sentences, read it: if it carries a reader across, ask what is still missing from it, or return an empty question for that gap.",
      "Give two or three openings for each gap. His answer will sit between the two sentences, so every opening must lead a reader INTO the second sentence. Do not offer an opening that says the two are separate: the page gives him his own button for that (\"They are separate. Start a new paragraph here\"), and a sentence that comments on both lines reads backwards when it sits between them.",
      "Reply with only a JSON object: {\"stop\": false, \"gaps\": [{\"before\": 1, \"question\": \"…\", \"openings\": [\"…\"]}]} where \"before\" is the number of the sentence the gap comes before. One entry for every gap, in order."
    ].join("\n");
    var ASK_CHECK_GAPS = [
      "You are the second reader. You did not write these gap questions. Try to break each one, using the rules above.",
      "Reject a question if: it states, hints at or assumes the connection between the two sentences; it tells him something about himself; it asks for the details of harm done to him or for a confession to be written out; it contains its own answer; it misreads either sentence; it is advice; it uses church language or the word \"brother\"; or any opening carries a fact that is not in his text.",
      "Reply with only a JSON object: {\"verdicts\": [{\"i\": 0, \"keep\": true, \"why\": \"a few words\"}]} with one verdict per question, in order."
    ].join("\n");

    /* ---------- page-side guards: what no instruction can be trusted with ---------- */
    var SMALL = ("a an and the but or nor so yet for of to in on at by with from as is was were be been being am are it its this that these those there here he him his she her they them their we us our you your i me my mine not no never ever still even only also just then than when while where who whom whose which what how why if because since until after before into onto over under up down out off about again more most less very too had has have having do does did done would could should will can may might must").split(" ");
    function words(s) { return (String(s).toLowerCase().match(/[a-z’']+/g) || []).map(function (w) { return w.replace(/[’']s$/, "").replace(/[’']/g, ""); }); }
    function stem(w) { return w.replace(/(ing|ed|es|s|ly)$/, ""); }
    /* every word in a suggestion must already be his, or be one of the small words of the language */
    function added(original, suggestion) {
      var have = {}; words(original).forEach(function (w) { have[w] = 1; have[stem(w)] = 1; });
      var out = [];
      words(suggestion).forEach(function (w) { if (!have[w] && !have[stem(w)] && SMALL.indexOf(w) < 0 && out.indexOf(w) < 0) out.push(w); });
      return out;
    }
    /* an option may not carry a name or a number that is not already in his text */
    function optionClean(opt, text) {
      var t = String(opt), body = t.replace(/^[^A-Za-z]*[A-Za-z’']+/, "");
      var caps = body.match(/\b[A-Z][a-z]+/g) || [], ok = true;
      caps.forEach(function (c) { if (c !== "I" && c !== "God" && text.indexOf(c) < 0) ok = false; });
      if (/\d/.test(t)) ok = false;
      return ok;
    }
    function has(text, quote) { return !!(quote && text.indexOf(quote) >= 0); }

    /* ---------- the relay: the key stays in the relay, never on a page ---------- */
    var READER_URL = "https://script.google.com/macros/s/AKfycbwhyhcluoAKYVxUoKW6UnoN8Iab80DHLq_2snfTKu9i1gwSCkvBcH41HtNKFdlvGgkp/exec";
    function relayURL() {
      var c = window.AP_ROAD;
      if (c && c.reader === false) { return ""; }
      if (c && typeof c.reader === "string" && c.reader) { return c.reader; }
      var g = window.AP_READER;
      if (g === false) { return ""; }
      if (typeof g === "string" && g) { return g; }
      return READER_URL;
    }
    function canRead() { return !!(window.claude && window.claude.use) || !!relayURL(); }
    function relay(url) {
      var once = function (input, sig) {
        var who = ""; try { who = window.localStorage.getItem("apStoryOwner") || ""; } catch (e) {}
        return window.fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ input: String(input || "").slice(0, 60000), id: who }), signal: sig, credentials: "omit" })
          .then(function (r) { return r.json(); }, function (e) { throw (e && e.name === "AbortError") ? e : { code: "network" }; })
          .then(function (r) { if (!r || r.ok !== true) { throw { code: (r && r.error) || "network" }; } return r.data; });
      };
      return { json: function (input, opts) {
        var sig = opts && opts.signal;
        /* v11: an answer that came back empty or unreadable is asked for once more before he is told */
        return once(input, sig).then(null, function (e) {
          if (e && (e.code === "invalid_json" || e.code === "empty_completion") && !(sig && sig.aborted)) { return once(input, sig); }
          throw e;
        });
      } };
    }
    function reader() {
      if (window.claude && window.claude.use) { return window.claude.use("sample"); }
      var u = relayURL(); return window.Promise.resolve(u ? relay(u) : null);
    }
    function copyFor(e) {
      var c = e && e.code;
      if (c === "cancelled" || (e && e.name === "AbortError")) { return ""; }
      if (c === "no_reader") { return "Claude can’t be reached in this view."; }
      if (c === "not_granted" || c === "sampling_disabled" || c === "not_declared" || c === "capability_disabled" || c === "capability_removed") { return "Claude isn’t allowed in this view. Your story is still here, and still yours to work on."; }
      if (c === "rate_limited") { return "Claude is busy, or you have reached your limit for now. Try again later."; }
      if (c === "session_expired") { return "You have been signed out. Sign in again, then ask."; }
      if (c === "refused") { return "Claude would not read this part as it is written."; }
      if (c === "invalid_json" || c === "empty_completion") { return "The answer came back unreadable, so it was thrown away. You can ask again."; }
      return "Claude could not be reached just now. You can ask again.";
    }
    function withReader() { return reader().then(function (s) { if (!s) { throw { code: "no_reader" }; } return s; }); }
    function step(o, m) { if (o && typeof o.onStep === "function") { try { o.onStep(m); } catch (e) {} } }

    /* ---------- the four asks, each with its second read ---------- */
    /* notes: o = { whole, name, text, profile, signal, onStep } → {stop:true} | {notes:[...], dropped} */
    function notes(o) {
      var H = house(o.profile), checks = prof(o.profile).checks;
      return withReader().then(function (sample) {
        var input = H + "\n\nTHE WHOLE STORY SO FAR:\n" + o.whole + "\n\nPART TO READ: [" + o.name + "]\n" + o.text + "\n\n" + askNotes(o.profile);
        return sample.json(input, { signal: o.signal, cache: false }).then(function (r) {
          if (r && r.stop) { return { stop: true }; }
          var ns = ((r && r.notes) || []).filter(function (n) { return n && KIND[n.check] && checks.indexOf(n.check) >= 0 && (n.question || n.check === "half-said" || n.check === "exposes") && has(o.text, n.quote); }).slice(0, 4);
          ns.forEach(function (n) { if (n.check === "exposes") { n.question = EXPOSE_Q; n.options = []; } });
          ns.forEach(function (n) { if (n.check === "half-said") { n.question = HALF_Q; n.options = [String((n.options || [])[0] || "What happened was…"), "I won’t repeat it here. What it cost me was…", "Remove this sentence"]; } });
          if (!ns.length) { return { notes: [], dropped: 0 }; }
          step(o, "Checking its own notes…");
          var check = H + "\n\nTHE WHOLE STORY SO FAR:\n" + o.whole + "\n\nPART THE NOTES ARE ABOUT: [" + o.name + "]\n" + o.text + "\n\nTHE NOTES:\n" + JSON.stringify(ns) + "\n\n" + ASK_CHECK_NOTES;
          return sample.json(check, { signal: o.signal, cache: false }).then(function (v) {
            var keep = {}; ((v && v.verdicts) || []).forEach(function (x) { if (x && x.keep === true) { keep[x.i] = 1; } });
            var dropped = 0;
            ns = ns.filter(function (n, k) { if (!keep[k]) { dropped++; return false; } return true; });
            ns.forEach(function (n) { n.label = KIND[n.check]; n.options = (n.options || []).filter(function (x) { return n.check === "half-said" || optionClean(x, o.text); }).slice(0, 3); n.answer = ""; });
            return { notes: ns, dropped: dropped };
          });
        });
      });
    }
    /* gaps: o = { whole, name, numbered, count, all, profile, signal, onStep } → {stop} | {bad:true} | {gaps:[{before, question, openings}], dropped} */
    function gaps(o) {
      var H = house(o.profile);
      return withReader().then(function (sample) {
        var input = H + "\n\nTHE WHOLE STORY SO FAR:\n" + o.whole + "\n\nHIS SENTENCES IN [" + o.name + "], NUMBERED:\n" + o.numbered + "\n\n" + ASK_GAPS;
        return sample.json(input, { signal: o.signal, cache: false }).then(function (r) {
          if (r && r.stop) { return { stop: true }; }
          var gs = ((r && r.gaps) || []).filter(function (g) { return g && String(g.question || "").trim() && g.before >= 2 && g.before <= o.count; });
          if (!gs.length) { return { bad: true }; }
          step(o, "Checking its own questions…");
          var check = H + "\n\nHIS SENTENCES IN [" + o.name + "], NUMBERED:\n" + o.numbered + "\n\nTHE GAP QUESTIONS:\n" + JSON.stringify(gs) + "\n\n" + ASK_CHECK_GAPS;
          return sample.json(check, { signal: o.signal, cache: false }).then(function (v) {
            var keep = {}, dropped = 0, out = []; ((v && v.verdicts) || []).forEach(function (x) { if (x && x.keep === true) { keep[x.i] = 1; } });
            gs.forEach(function (g, n) {
              if (!keep[n]) { dropped++; return; }
              out.push({ before: g.before, question: String(g.question), openings: (g.openings || []).filter(function (x) { return optionClean(x, o.all || o.whole); }).slice(0, 3) });
            });
            return { gaps: out, dropped: dropped };
          });
        });
      });
    }
    /* smooth: o = { whole, name, text, profile, signal, onStep } → {stop} | {thrown} | {text, changed} */
    function smooth(o) {
      var H = house(o.profile);
      return withReader().then(function (sample) {
        var input = H + "\n\nTHE WHOLE STORY SO FAR:\n" + o.whole + "\n\nPART TO READ: [" + o.name + "]\n" + o.text + "\n\n" + ASK_SMOOTH;
        return sample.json(input, { signal: o.signal, cache: false }).then(function (r) {
          if (r && r.stop) { return { stop: true }; }
          var text = r && typeof r.text === "string" ? r.text.trim() : "";
          if (!text) { return { thrown: "The answer came back unreadable, so it was thrown away." }; }
          if (text === o.text.trim()) { return { thrown: "Read. Not a word needs to change." }; }
          var extra = added(o.text, text);
          if (extra.length) { return { thrown: "The suggestion used words you did not write (" + extra.slice(0, 6).join(", ") + "), so it was thrown away. Nothing was changed." }; }
          step(o, "Checking its own suggestion…");
          var check = H + "\n\nHIS ORIGINAL:\n" + o.text + "\n\nTHE SMOOTHED VERSION:\n" + text + "\n\n" + ASK_CHECK_SMOOTH;
          return sample.json(check, { signal: o.signal, cache: false }).then(function (v) {
            if (v && v.ok === true) { return { text: text, changed: (r.changed || []).slice(0, 6) }; }
            return { thrown: "A second read found a problem with the suggestion" + (v && v.problems && v.problems[0] ? " (" + String(v.problems[0]).slice(0, 160) + ")" : "") + ", so it was thrown away. Nothing was changed." };
          });
        });
      });
    }
    /* heard: o = { story, about, profile, signal, onStep } → {stop} | {heard:{about, beside, text, open, people}} */
    function heard(o) {
      var H = house(o.profile), about = String(o.about || "").trim(), story = o.story;
      return withReader().then(function (sample) {
        var input = H + "\n\nTHE WHOLE STORY:\n" + story + (about ? "\n\nHE SAYS THE STORY IS ABOUT: " + about + "\nAdd a fourth key, \"beside\": one sentence that sets what he says it is about beside what a stranger would take it to be about, without judging either and without advice." : "") + "\n\n" + askHeard(o.profile);
        return sample.json(input, { signal: o.signal, cache: false }).then(function (r) {
          if (r && r.stop) { return { stop: true }; }
          var checks = prof(o.profile).checks;
          var open = ((r && r.open) || []).filter(function (n) { return n && KIND[n.check] && checks.indexOf(n.check) >= 0 && (n.question || n.check === "half-said" || n.check === "exposes") && has(story, n.quote); }).slice(0, 4);
          open.forEach(function (n) { if (n.check === "exposes") { n.question = EXPOSE_Q; n.options = []; } });
          open.forEach(function (n) { if (n.check === "half-said") { n.question = HALF_Q; n.options = [String((n.options || [])[0] || "What happened was…"), "I won’t repeat it here. What it cost me was…", "Remove this sentence"]; } });
          var people = ((r && r.people) || []).filter(function (n) { return n && n.who && has(story, n.quote); });
          step(o, "Checking its own reading…");
          var check = H + "\n\nTHE WHOLE STORY:\n" + story + "\n\nTHE READ-BACK:\n" + JSON.stringify({ heard: String(r.heard || "") + (about && r.beside ? " " + r.beside : ""), open: open, people: people }) + "\n\n" + ASK_CHECK_HEARD;
          return sample.json(check, { signal: o.signal, cache: false }).then(function (v) {
            var keep = {}; ((v && v.verdicts) || []).forEach(function (x) { if (x && x.keep === true) { keep[x.i] = 1; } });
            /* v12: a person is listed only when the second reader agrees he is a person who could be recognized (Folgers is coffee) */
            var pk = {}; ((v && v.people) || []).forEach(function (x) { if (x && x.keep === true) { pk[x.i] = 1; } });
            open.forEach(function (n) { n.label = KIND[n.check] || ""; });
            return { heard: { about: about, beside: v && v.heardOk === true && about ? String(r.beside || "") : "", text: v && v.heardOk === true ? String(r.heard || "") : "", open: open.filter(function (n, k) { return keep[k]; }), people: people.filter(function (n, k) { return pk[k]; }) } };
          });
        });
      });
    }

    /* the circled i text: every sentence is something the page enforces */
    function howText(p) {
      p = prof(p);
      if (p.kind === "poem") { return "How the story assistant helps. Claude, an AI, reads the whole piece once and comes back with three things: what a reader would hear in it, any line that is still half-said or names a real person who could be recognized, and a walk to each of those lines, one at a time, in the order they come in your piece. It never adds a fact, a name, a time or a feeling. It never changes a word: what you wrote stays as you wrote it, and any change is yours to make. Nothing is sent until you press the button. Ancient Path reads only what you choose to publish."; }
      return "How the story assistant helps. Claude, an AI, reads what you wrote and does four things: asks better questions about your own lines, checks a part for what is half-said or for a real person named, smooths a part for clarity and flow, and reads the whole story back the way a reader would hear it. It never adds a fact, a name, a time or a feeling. It never changes what you mean. Every suggestion sits beside your original, and nothing changes until you press Use this. If a suggestion uses a word you did not write, the page throws it away. Nothing is sent until you press a button. Ancient Path reads only what you choose to publish.";
    }

    return {
      version: "1",
      profile: prof, house: house, howText: howText,
      canRead: canRead, relayURL: relayURL, reader: reader, copyFor: copyFor,
      notes: notes, gaps: gaps, smooth: smooth, heard: heard,
      added: added, optionClean: optionClean, has: has, words: words,
      KIND: KIND, HALF_Q: HALF_Q, EXPOSE_Q: EXPOSE_Q, HOUSE_OPENINGS: HOUSE_OPENINGS,
      prompts: function (p) { return { HOUSE: house(p), ASK_NOTES: askNotes(p), ASK_CHECK_NOTES: ASK_CHECK_NOTES, ASK_SMOOTH: ASK_SMOOTH, ASK_CHECK_SMOOTH: ASK_CHECK_SMOOTH, ASK_HEARD: askHeard(p), ASK_GAPS: ASK_GAPS, ASK_CHECK_GAPS: ASK_CHECK_GAPS, ASK_CHECK_HEARD: ASK_CHECK_HEARD }; }
    };
  })();

  /* ======================================================================
     9c. v8 — CHECK IT · READ IT BACK ON A POEM, A LAMENT OR A PRAYER
     ------------------------------------------------------------------
     cfg.assistant = { kind: "poem", name: "Where I'm From" } gives a piece
     the two buttons a poem may have (never Smooth it: its roughness is
     his voice; never Better questions: the stems already are the
     questions). Nothing here changes a word he wrote: a note shows him
     the line and one question, and the change is his to make in his
     own words above. Mounted into the finish row beside Save.
     ====================================================================== */
  Story.prototype.mountAssistant = function (row) {
    var self = this, cfg = this.cfg, p = cfg.assistant;
    if (!p || $("apsHeard")) { return false; }
    if (!ASSIST.canRead()) { return false; }
    var profile = ASSIST.profile(typeof p === "object" ? p : { kind: "poem" });
    if (!profile.name) { profile.name = cfg.title || cfg.form || ""; }
    var busy = null;

    var out = el("div", "aps-read", ""); out.id = "apsRead"; out.hidden = true;
    var how = el("details", "aps-assist", "");
    how.innerHTML = '<summary><span class="aps-assist-name">Story assistant</span> <span class="aps-info" aria-hidden="true">i</span> <span class="aps-how">How it helps</span></summary><p></p>';
    how.querySelector("p").textContent = ASSIST.howText(profile);

    function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
    function show(html) { out.innerHTML = html; out.hidden = !html; if (html) { try { out.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {} } }
    var pressed = null, idle = {};
    function working(on) {
      [hear].forEach(function (b) { if (on) { idle[b.id] = b.textContent; b.disabled = true; } else { b.disabled = false; if (idle[b.id]) { b.textContent = idle[b.id]; } } });
      if (on && pressed) { pressed.textContent = "Reading…"; pressed.setAttribute("aria-busy", "true"); }
      if (!on) { [hear].forEach(function (b) { b.removeAttribute("aria-busy"); }); pressed = null; }
    }
    function status(msg) { show(msg ? '<p class="aps-busy"><span class="aps-dot" aria-hidden="true"></span>' + esc(msg) + ' <button type="button" class="aps-stop">Stop</button></p>' : ""); var s = out.querySelector(".aps-stop"); if (s) { s.addEventListener("click", function () { if (busy) { busy.abort(); } busy = null; working(false); show(""); }); } }
    function text() { return self.document(); }
    function begin(btn, msg) { if (!text()) { show('<p class="aps-note">There is nothing written yet. Write something first.</p>'); return null; } pressed = btn; working(true); busy = new AbortController(); status(msg); return busy.signal; }
    function stopBox() { return '<p class="aps-note">If you or anyone else is in danger right now, call 911, or 988 to talk to someone. And tell one man you trust today.</p>'; }
    /* v12: everything shown carries the way back to its box: "Go to this line" opens the box the words came from,
       and once he has changed that line the item reads "Changed." — the page moves him toward finishing, never leaves him at a verdict */
    /* v14 (John, 28 Sept): "a navigation sequence through them that is logical and easy to follow… moving from one
       part of the story to the next". Everything to look at is ONE list in the order it comes in his piece (not by
       importance), numbered; "Walk through them" takes him to the first line's box and sets a small card under it —
       which one this is, the part he is in, the line, the question, one opening in his voice — and Next carries him
       to the next, stepping to another part when it is there and saying so. A line he changes reads "Changed."; at
       the end he is back at the finish with the count, Read it again and Save. "Go to this line" on any item starts
       the walk there. */
    var shown = [], walk = null, guide = null;
    function items(h) {
      var doc = text(), list = [];
      h.open.forEach(function (n) { list.push({ quote: n.quote, kind: n.label || ASSIST.KIND[n.check] || "", question: n.question, help: (n.check === "half-said" && n.options && n.options[0]) ? "One way to say it, in your voice: " + n.options[0] : "", done: false }); });
      h.people.forEach(function (x) { list.push({ quote: x.quote, kind: "A real person is named", question: x.who + " is named here, and could recognize this one day. Keep it, change how they are described, or take the line out.", help: "", done: false }); });
      list.forEach(function (it) { it.at = doc.indexOf(it.quote); if (it.at < 0) { it.at = 1e9; } });
      list.sort(function (a, b) { return a.at - b.at; });
      return list;
    }
    function itemHTML(it, i) { return '<article class="aps-noteitem" data-note="' + i + '"><div class="aps-kind"><span class="aps-num">' + (i + 1) + '</span> ' + esc(it.kind) + '</div><p class="aps-quoted">' + esc(it.quote) + '</p><p class="aps-ask">' + esc(it.question) + '</p>' + (it.help ? '<p class="aps-help">' + esc(it.help) + '</p>' : "") + '<p class="aps-help aps-way"><button type="button" class="aps-goto" data-i="' + i + '">Go to this line</button></p></article>'; }
    function listHTML() { return '<p class="aps-kind">' + shown.length + (shown.length === 1 ? " thing" : " things") + ' to look at, in the order they come</p><p class="aps-note aps-walkrow"><button type="button" class="aps-walk">Walk through them</button> <span>One at a time. Change a line or leave it, then Next.</span></p>' + shown.map(itemHTML).join(""); }
    function endGuide() { if (guide && guide.parentNode) { guide.parentNode.removeChild(guide); } guide = null; }
    function markDone(i) {
      var it = shown[i]; if (!it || it.done) { return; }
      it.done = true;
      var item = out.querySelector('[data-note="' + i + '"]');
      if (item) { item.classList.add("is-done"); var g = item.querySelector(".aps-goto"); if (g) { g.parentNode.replaceChild(el("span", "aps-done", "Changed."), g); } }
      if (guide && walk && walk.i === i) { var st = guide.querySelector(".aps-guide-state"); if (st) { st.textContent = "Changed."; st.classList.add("aps-done"); } }
      if (!out.querySelector(".aps-again")) { var p = el("p", "aps-note", ""); var a = el("button", "aps-again", "Read it again"); a.type = "button"; p.appendChild(a); out.appendChild(p); }
    }
    function showGuide(box, i) {
      endGuide();
      var it = shown[i], n = shown.length, part = self.partOf(box), last = i + 1 >= n;
      guide = el("div", "aps-guide", ""); guide.id = "apsGuide";
      var top = el("div", "aps-guide-top", ""); top.innerHTML = '<b>' + (i + 1) + ' of ' + n + '</b> \u00b7 ' + esc(it.kind) + (part ? ' \u00b7 <span class="aps-guide-part">' + esc(part) + '</span>' : ""); guide.appendChild(top);
      var q = el("p", "aps-quoted", it.quote); guide.appendChild(q);
      var ask = el("p", "aps-ask", it.question); guide.appendChild(ask);
      if (it.help) { guide.appendChild(el("p", "aps-help", it.help)); }
      var rowEl = el("div", "aps-guide-row", "");
      var next = el("button", (cfg.buttonClass || "") + " " + (cfg.primaryClass || "") + " aps-guide-next", last ? "Finish" : "Next"); next.type = "button";
      next.addEventListener("click", function () { stepWalk(); });
      rowEl.appendChild(next);
      var stt = el("span", "aps-guide-state", it.done ? "Changed." : "Change it here if you want to, or leave it."); if (it.done) { stt.classList.add("aps-done"); }
      rowEl.appendChild(stt);
      var quit = el("button", "aps-guide-quit", "Stop here"); quit.type = "button"; quit.addEventListener("click", function () { finishWalk(true); });
      rowEl.appendChild(quit);
      guide.appendChild(rowEl);
      box.parentNode.insertBefore(guide, box.nextSibling);
    }
    function stepWalk() {
      if (!walk) { return; }
      walk.i++;
      while (walk.i < shown.length && !self.findBox(shown[walk.i].quote)) { walk.i++; }
      if (walk.i >= shown.length) { finishWalk(false); return; }
      var i = walk.i, box = self.findBox(shown[i].quote);
      self.bring(box, function (b) { if (walk && walk.i === i) { showGuide(b, i); } });
    }
    function startWalk(from) { endGuide(); walk = { i: (from || 0) - 1 }; stepWalk(); }
    function finishWalk(early) {
      endGuide(); walk = null;
      var changed = 0; shown.forEach(function (it) { if (it.done) { changed++; } });
      var old = out.querySelector(".aps-walked"); if (old) { old.parentNode.removeChild(old); }
      var onward = $("apsAfter") && $("apsAfter").querySelector(".aps-after-open") ? " Next: Now that it\u2019s written, below." : "";
      var p = el("p", "aps-note aps-walked", (early ? "Stopped. " : "Walked through " + shown.length + ". ") + (changed ? changed + " changed." : "Nothing changed.") + (changed ? " Save keeps it." : "") + onward);
      var wr = out.querySelector(".aps-walkrow"); if (wr) { wr.parentNode.insertBefore(p, wr.nextSibling); } else { out.appendChild(p); }
      try { row.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {}
    }
    out.addEventListener("click", function (e) {
      var c = e.target && e.target.closest ? e.target.closest : null; if (!c) { return; }
      var g = e.target.closest(".aps-goto"); if (g) { startWalk(+g.getAttribute("data-i")); return; }
      if (e.target.closest(".aps-walk")) { startWalk(0); return; }
      if (e.target.closest(".aps-again")) { endGuide(); walk = null; hear.click(); }
    });
    document.addEventListener("input", function (e) {
      var t = e.target; if (!t || !t.id || !self._fieldIds || !self._fieldIds[t.id] || out.hidden) { return; }
      var doc = text();
      shown.forEach(function (it, i) { if (!it.done && !ASSIST.has(doc, it.quote)) { markDone(i); } });
    }, true);

    /* v13: one button (John, 28 Sept: "is there really a need for both buttons?"). One press, one answer, in the
       order a writer needs it: what a stranger hears · what still needs a look, each with the way back to its line ·
       any real person named. The checks Check it ran are the "open" items of this one read. */
    var hear = el("button", (cfg.buttonClass || "") + " " + (cfg.ghostClass || ""), "Read it back"); hear.id = "apsHeard"; hear.type = "button";
    hear.addEventListener("click", function () {
      var sig = begin(hear, "Reading the whole piece…"); if (!sig) { return; }
      ASSIST.heard({ story: text(), about: "", profile: profile, signal: sig, onStep: status }).then(function (r) {
        busy = null; working(false);
        if (r.stop) { show(stopBox()); return; }
        var h = r.heard, html = "";
        html += h.text ? '<p class="aps-heard">' + esc(h.text) + '</p>' : '<p class="aps-note">The read-back did not hold up to a second read, so it was thrown away. You can ask again.</p>';
        endGuide(); walk = null; shown = items(h);
        if (shown.length) { html += listHTML(); }
        else if (h.text) { html += '<p class="aps-note">Nothing to raise. You can ask again after you change something.</p>'; }
        show(html);
      }).catch(function (e) { busy = null; working(false); show(ASSIST.copyFor(e) ? '<p class="aps-note">' + esc(ASSIST.copyFor(e)) + '</p>' : ""); });
    });

    if (!$("aps-read-css")) {
      var st = el("style"); st.id = "aps-read-css";
      st.textContent = ".aps-read{max-width:62ch;margin:14px 0 0;font-size:16px;line-height:1.5}.aps-read .aps-busy{font-family:inherit;color:#1F2A44;display:flex;align-items:center;gap:10px;margin:0}.aps-read .aps-dot{width:10px;height:10px;border-radius:50%;background:#C9A227;animation:aps-pulse 1s ease-in-out infinite}@keyframes aps-pulse{0%,100%{opacity:.3}50%{opacity:1}}.aps-read .aps-stop{margin-left:10px;font:inherit;font-size:14px;background:none;border:0;padding:0;text-decoration:underline;cursor:pointer;color:#8C6A3F}.aps-read .aps-note{margin:0}.aps-read .aps-noteitem{border:1px solid #E5DCC8;border-left:3px solid #C9A227;background:#FBF7EF;padding:14px 16px;margin:14px 0}.aps-read .aps-kind{font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8C6A3F;margin:14px 0 4px}.aps-read .aps-noteitem .aps-kind{margin-top:0}.aps-read .aps-quoted{border-left:3px solid #C9A227;padding-left:12px;color:#6B6358;margin:6px 0;white-space:pre-wrap}.aps-read .aps-ask{color:#1F2A44;font-weight:600;margin:6px 0}.aps-read .aps-help{font-size:14.5px;color:#6B6358;margin:4px 0 0}.aps-read .aps-heard{border-left:3px solid #C9A227;padding-left:12px;margin:8px 0}.aps-read .aps-people{margin:6px 0;padding-left:1.2em}" +
        ".aps-row.aps-finish > .aps-act{flex:1 1 100%;display:flex;align-items:center;gap:14px;margin:0}.aps-act-what{font-size:14.5px;line-height:1.4;color:#6B6358;max-width:52ch}.aps-row.aps-finish > .aps-act > button{flex:0 0 auto;order:0}" +
        ".aps-read .aps-way{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.aps-goto,.aps-again{font:inherit;font-size:14px;font-weight:600;color:#1F2A44;background:#fff;border:1px solid #C9A227;border-radius:2px;padding:6px 12px;cursor:pointer}.aps-goto:hover,.aps-again:hover{background:#FBF7EF}.aps-read .is-done{opacity:.55}.aps-read .aps-done{color:#8C6A3F;font-weight:600}.aps-here{outline:2px solid #C9A227!important;outline-offset:2px}" +
        ".aps-read .aps-num{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;border-radius:50%;background:#C9A227;color:#1F2A44;font-size:12px;font-weight:700;letter-spacing:0;margin-right:6px}.aps-read .aps-walkrow{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:6px 0 4px}.aps-read .aps-walkrow span{font-size:14.5px;color:#6B6358}.aps-walk{font:inherit;font-size:14px;font-weight:700;color:#fff;background:#1F2A44;border:1px solid #1F2A44;border-radius:2px;padding:10px 18px;cursor:pointer}.aps-walk:hover{background:#2B3856}" +
        ".aps-guide{margin:10px 0 14px;border:1px solid #E5DCC8;border-left:3px solid #C9A227;background:#FBF7EF;padding:12px 16px;font-size:15.5px;line-height:1.5;max-width:62ch}.aps-guide .aps-guide-top{font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8C6A3F;margin:0 0 6px}.aps-guide .aps-guide-top b{color:#1F2A44}.aps-guide .aps-guide-part{color:#1F2A44}.aps-guide .aps-quoted{border-left:3px solid #C9A227;padding-left:12px;color:#6B6358;margin:6px 0;white-space:pre-wrap}.aps-guide .aps-ask{color:#1F2A44;font-weight:600;margin:6px 0}.aps-guide .aps-help{font-size:14.5px;color:#6B6358;margin:4px 0 0}.aps-guide .aps-guide-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:12px 0 0}.aps-guide .aps-guide-state{font-size:14.5px;color:#6B6358}.aps-guide .aps-guide-state.aps-done{color:#8C6A3F;font-weight:600}.aps-guide .aps-guide-quit{font:inherit;font-size:14px;background:none;border:0;padding:0;text-decoration:underline;cursor:pointer;color:#8C6A3F;margin-left:auto}" +
        "@media (max-width:620px){.aps-row.aps-finish > .aps-act{flex-wrap:wrap;gap:8px 14px}}" +
        ".aps-assist{margin:10px 0 0}.aps-assist summary{display:inline-flex;align-items:center;gap:8px;color:#6B6358;font-size:14px;cursor:pointer;list-style:none}.aps-assist summary::-webkit-details-marker{display:none}.aps-assist .aps-assist-name{font-weight:700;color:#1F2A44}.aps-assist .aps-info{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;border:1.5px solid #8C6A3F;color:#8C6A3F;font-family:Georgia,serif;font-style:italic;font-size:12px;font-weight:700;line-height:1}.aps-assist .aps-how{color:#8C6A3F;text-decoration:underline}.aps-assist p{margin:10px 0 0;max-width:62ch;font-size:15.5px;line-height:1.5;border:1px solid #E5DCC8;border-left:3px solid #C9A227;background:#FBF7EF;padding:12px 16px}";
      document.head.appendChild(st);
    }
    /* v12: each button says what it does, beside it, so a man knows before he presses (John, 28 Sept: "it's not clear what check it does or read it back") */
    function act(btn, what) { var w = el("div", "aps-act", ""); btn.style.order = ""; w.appendChild(btn); w.appendChild(el("span", "aps-act-what", what)); return w; }
    row.appendChild(act(hear, "Tells you what a reader would hear, what still needs a look, and any real person named \u2014 then walks you to each line."));
    row.appendChild(how); row.appendChild(out);   /* v9: the ⓘ line and the results are tiers of the finish row; oneRow orders them */
    return true;
  };

  /* ======================================================================
     9d. v15 — NOW THAT IT'S WRITTEN
     ------------------------------------------------------------------
     The five questions that sat on Where I'm From and Write a Lament as
     a section of their own ("One more thing, if you want to") now come
     from the engine, in the finish, after Read it back and the walk and
     before Save, so every piece has them: how do you feel, now that it's
     written (The Word for It, or his own word) · where do you feel it ·
     which line surprised you · if someone read only one line · how much
     of this had you said out loud. One at a time; a tap moves him on;
     Back and Skip on every card; at the end his answers read back in one
     short block, and Save is the next thing under it. They are for him
     and are not saved with the piece. Nothing here needs Claude.
       cfg.after: true   on any page, with or without an assistant
       cfg.after: false  off; otherwise on for every poem-kind piece
     ====================================================================== */
  var AFTER_BODY_HINT = "In your body, right now. It will feel odd the first time \u2014 most men skip it. Do not. A feeling you can point to is one you can name, and a feeling you can name stops running you.";
  var AFTER_SAID = ["none of it", "a little of it", "some of it", "most of it", "all of it"];
  Story.prototype.mountAfter = function (row) {
    var self = this, cfg = this.cfg;
    if ($("apsAfter")) { return false; }
    var poem = !!cfg.assistant && ASSIST.profile(typeof cfg.assistant === "object" ? cfg.assistant : { kind: "poem" }).kind === "poem";
    if (!(cfg.after === true || (cfg.after !== false && poem))) { return false; }
    var wrap = el("div", "aps-after", ""); wrap.id = "apsAfter";
    var a = null, i = 0, wasDone = false;
    function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
    function lines() {
      var tail = cfg.tail ? String(cfg.tail).replace(/\s+/g, " ").trim() : "", out = [];
      self.document().split(/\n+/).forEach(function (l) { l = l.trim(); if (l && l.replace(/\s+/g, " ") !== tail) { out.push(l); } });
      return out;
    }
    function short(l) { return l.length > 120 ? l.slice(0, 117).replace(/\s+\S*$/, "") + "\u2026" : l; }
    var QS = [
      { key: "feel", ask: "How do you feel, now that it\u2019s written?", taps: function () { return WORD_FOR_IT; }, own: true },
      { key: "body", ask: "Where do you feel it?", hint: AFTER_BODY_HINT, taps: function () { return BODY_PLACES; } },
      { key: "surprised", ask: "Which line surprised you?", hint: "Tap one of your own.", taps: lines, line: true },
      { key: "one", ask: "If someone read only one line, which do you want it to be?", hint: "Tap one of your own.", taps: lines, line: true },
      { key: "said", ask: "Before today, how much of this had you said out loud to anyone?", scale: true }
    ];
    function fresh() { return { feel: "", own: "", body: "", surprised: "", one: "", said: 0 }; }
    function clear() { wrap.innerHTML = ""; }
    function offer(note) {
      clear();
      var p = el("p", "aps-note aps-after-row", "");
      var b = el("button", "aps-after-open", wasDone ? "Go through them again" : "Now that it\u2019s written"); b.type = "button";
      b.addEventListener("click", open);
      p.appendChild(b);
      p.appendChild(el("span", "aps-after-what", "Five questions about what you just wrote. Most of them are one tap, and you can skip any."));
      wrap.appendChild(p);
      if (note) { wrap.appendChild(el("p", "aps-note", note)); }
    }
    function open() {
      if (!self.document()) { offer("There is nothing written yet. Write something first."); return; }
      a = fresh(); i = 0; draw();
    }
    function pick(q, v) { a[q.key] = v; }
    function draw() {
      clear();
      var q = QS[i], card = el("div", "aps-after-card", "");
      var top = el("div", "aps-guide-top", ""); top.innerHTML = "<b>" + (i + 1) + " of " + QS.length + "</b>"; card.appendChild(top);
      card.appendChild(el("p", "aps-ask", q.ask));
      if (q.hint) { card.appendChild(el("p", "aps-help", q.hint)); }
      var own = null;
      if (q.scale) {
        var dots = el("div", "aps-dots", ""); dots.setAttribute("role", "group");
        for (var n = 1; n <= 5; n++) {
          (function (n) {
            var d = el("button", "aps-dot" + (a.said === n ? " on" : ""), String(n)); d.type = "button"; d.setAttribute("aria-pressed", a.said === n ? "true" : "false");
            d.addEventListener("click", function () { pick(q, n); step(1); });
            dots.appendChild(d);
          })(n);
        }
        card.appendChild(dots);
        var ends = el("div", "aps-ends", ""); ends.appendChild(el("span", "", "None of it")); ends.appendChild(el("span", "", "All of it")); card.appendChild(ends);
      } else {
        var taps = el("div", "aps-taps", ""), list = q.taps();
        if (!list.length) { card.appendChild(el("p", "aps-help", "Nothing to tap yet.")); }
        list.forEach(function (w) {
          var b = el("button", "aps-tap" + (q.line ? " aps-tap-line" : ""), q.line ? short(w) : w); b.type = "button";
          b.setAttribute("aria-pressed", a[q.key] === w ? "true" : "false");
          b.addEventListener("click", function () { pick(q, w); step(1); });
          taps.appendChild(b);
        });
        card.appendChild(taps);
        if (q.own) {
          var lab = el("label", "aps-help aps-own-label", "Or your own word"); own = el("input", "aps-own", ""); own.type = "text"; own.value = a.own || ""; own.setAttribute("maxlength", "40"); own.id = "apsOwnWord"; lab.setAttribute("for", own.id);
          own.addEventListener("input", function () { a.own = own.value.trim(); });
          own.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); step(1); } });
          card.appendChild(lab); card.appendChild(own);
        }
      }
      var rowEl = el("div", "aps-guide-row", "");
      if (i > 0) { var back = el("button", "aps-after-back", "Back"); back.type = "button"; back.addEventListener("click", function () { step(-1); }); rowEl.appendChild(back); }
      var next = el("button", (cfg.buttonClass || "") + " " + (cfg.primaryClass || "") + " aps-after-next", i + 1 >= QS.length ? "Finish" : "Next"); next.type = "button";
      next.addEventListener("click", function () { step(1); });
      rowEl.appendChild(next);
      var skip = el("button", "aps-after-skip", "Skip"); skip.type = "button";
      skip.addEventListener("click", function () { a[q.key] = q.scale ? 0 : ""; if (q.own) { a.own = ""; } step(1); });
      rowEl.appendChild(skip);
      card.appendChild(rowEl);
      wrap.appendChild(card);
      try { card.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
    }
    function step(by) {
      i += by;
      if (i < 0) { i = 0; }
      if (i >= QS.length) { finish(); return; }
      draw();
    }
    function finish() {
      wasDone = true;
      clear();
      var box = el("div", "aps-after-done", "");
      box.appendChild(el("p", "aps-kind", "That\u2019s everything."));
      var sum = [];
      var feel = [a.feel, a.own].filter(function (x) { return x; }).join(" \u2014 ");
      if (feel) { sum.push(["How you feel", feel]); }
      if (a.body) { sum.push(["Where", a.body]); }
      if (a.surprised) { sum.push(["The line that surprised you", "\u201c" + a.surprised + "\u201d"]); }
      if (a.one) { sum.push(["The one line", "\u201c" + a.one + "\u201d"]); }
      if (a.said) { sum.push(["Said out loud before today", AFTER_SAID[a.said - 1]]); }
      if (sum.length) {
        var p = el("p", "aps-after-sum", "");
        p.innerHTML = sum.map(function (r) { return "<span class=\"aps-after-k\">" + esc(r[0]) + ":</span> " + esc(r[1]); }).join("<br>");
        box.appendChild(p);
      } else { box.appendChild(el("p", "aps-help", "You skipped them all. That is allowed.")); }
      box.appendChild(el("p", "aps-note", "These are for you. They are not saved with the piece."));
      wrap.appendChild(box);
      offerAgain();
      try { box.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
    }
    function offerAgain() {
      var p = el("p", "aps-note aps-after-row", "");
      var b = el("button", "aps-after-open", "Go through them again"); b.type = "button";
      b.addEventListener("click", open);
      p.appendChild(b);
      wrap.appendChild(p);
    }
    if (!$("aps-after-css")) {
      var st = el("style"); st.id = "aps-after-css";
      st.textContent = ".aps-after{font-size:16px;line-height:1.5}.aps-after .aps-note{margin:0}.aps-after .aps-after-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:0}.aps-after .aps-after-what{font-size:14.5px;color:#6B6358;max-width:52ch}" +
        ".aps-after-open{font:inherit;font-size:14px;font-weight:700;color:#1F2A44;background:#fff;border:1px solid #C9A227;border-radius:2px;padding:10px 18px;cursor:pointer}.aps-after-open:hover{background:#FBF7EF}" +
        ".aps-after-card,.aps-after-done{border:1px solid #E5DCC8;border-left:3px solid #C9A227;background:#FBF7EF;padding:12px 16px;margin:0 0 10px;font-size:15.5px;line-height:1.5}.aps-after .aps-guide-top{font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8C6A3F;margin:0 0 6px}.aps-after .aps-guide-top b{color:#1F2A44}.aps-after .aps-ask{color:#1F2A44;font-weight:600;margin:6px 0}.aps-after .aps-help{font-size:14.5px;color:#6B6358;margin:4px 0 8px}.aps-after .aps-kind{font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8C6A3F;margin:0 0 6px}" +
        ".aps-after .aps-taps{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}.aps-tap{font:inherit;font-size:14.5px;color:#1F2A44;background:#fff;border:1px solid #C9A227;border-radius:2px;padding:7px 12px;cursor:pointer;text-align:left}.aps-tap:hover{background:#F3EBDA}.aps-tap[aria-pressed=\"true\"]{background:#1F2A44;color:#fff;border-color:#1F2A44}.aps-tap-line{flex:1 1 100%;white-space:pre-wrap;line-height:1.4}" +
        ".aps-after .aps-own-label{display:block;margin:10px 0 4px}.aps-own{font:inherit;font-size:15px;padding:8px 10px;border:1px solid #E5DCC8;border-radius:2px;width:100%;max-width:32ch;background:#fff}" +
        ".aps-after .aps-dots{display:flex;gap:8px;margin:8px 0 4px}.aps-after .aps-dot{width:42px;height:42px;border-radius:50%;font:inherit;font-size:15px;font-weight:600;color:#1F2A44;background:#fff;border:1px solid #C9A227;cursor:pointer}.aps-after .aps-dot:hover{background:#F3EBDA}.aps-after .aps-dot.on,.aps-after .aps-dot[aria-pressed=\"true\"]{background:#1F2A44;color:#fff;border-color:#1F2A44}.aps-after .aps-ends{display:flex;justify-content:space-between;width:242px;max-width:100%;font-size:13px;color:#6B6358}" +
        ".aps-after .aps-guide-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:12px 0 0}.aps-after-back,.aps-after-skip{font:inherit;font-size:14px;background:none;border:0;padding:0;text-decoration:underline;text-underline-offset:3px;cursor:pointer;color:#8C6A3F}.aps-after-skip{margin-left:auto}" +
        ".aps-after-sum{margin:6px 0 10px;white-space:normal}.aps-after-k{color:#8C6A3F;font-weight:600}";
      document.head.appendChild(st);
    }
    offer();
    row.appendChild(wrap);
    return true;
  };

  /* ======================================================================
     10. THE PUBLIC DOOR
     ====================================================================== */
  window.APStory = {
    version: "15",
    assistant: ASSIST,
    wordForIt: WORD_FOR_IT.slice(),   /* v15: The Word for It, the only feeling words any piece offers */

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

    /* v6: a page like /start lists saved pieces for several forms without
       mounting the writing form for each one — this is that read alone.
       Resolves to [] for a form with no history block yet, same as an
       empty history. */
    historyFor: function (unit, historyBlockId) {
      if (!historyBlockId) { return window.Promise.resolve([]); }
      return lwLatest(unit).then(function (latest) {
        var raw = (latest && latest.answers) || {};
        return parseHistoryList(raw[historyBlockId]);
      });
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