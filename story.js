/* ==========================================================================
   AP-STORY-MODULE-v18.6

   v18.6 (4 Oct 2026) — the record kept whole. LearnWorlds drops "}}" from a stored open-ended answer (measured 3 Oct
     on the Stones form: every history list came back exactly two characters short, the two closing braces at its
     end, while the answers JSON, which ends in one brace, came back whole). Every JSON value the engine stores is now
     written with a space between two braces in a row (lwJSON), and a list already cut short is mended on read
     (mendList). Nothing else changes.
   v18.5 (3 Oct 2026) — the finish, simple (John, Oct 3: "keep it simple, easy, flowing, contextual, and story
     oriented"; the finish read as an afterthought and its three help lines sat at three indents). Save is first and
     alone; Edit joins the quiet line; every note about the piece ("Saving puts this on your page", "There is nothing
     written yet", "Saved to your page") sits ABOVE the row, where a man reads it before he acts; the three help lines
     (Read it back · Five questions · Hear it) each stand full width, the label on its own line and the words under it
     at one indent, on a phone too; the page is named "Your Page" wherever a link or button names it. And on a phone,
     "Read it to me" goes above the whole line even when the step is not showing yet (a hidden step measured as
     nothing, so the row landed between the pinned opening words and the box).

   v18.4 (30 Sept 2026) — the stem test no longer needs the stem to sit over the box sideways: What Kind of Light pins "To" / "am I" beside its box, at the
     same height, and the row was still landing on it. Any pinned text that shares the box's height now keeps the row above the whole line.
   v18.3 (30 Sept 2026) — "Read it to me" on a phone, where a box carries its own sentence stem (Asked of Me: "I came from" is
     pinned over the top-left of its box): the row now goes ABOVE that whole line, never between the stem and the box, so the two no
     longer print on top of each other.
   v18.2 (30 Sept 2026) — phone spacing: "Read it to me" on a phone no longer sits on the last line of the question above it. It gets
     room above and below and a full-size tap target (it was 17px tall and pulled up by a negative margin).
   v18.1 (29 Sept 2026) — one Edit (the engine's "Edit the whole thing" is no longer
     mounted: Edit and "Tap any line to change it" cover it); the quiet line
     (Read it back · Hear it · Five questions) sits below Go to your page, on its
     own line above the rule, so the two dark buttons are never interrupted.
   v18 (29 Sept 2026) — the finish, reshaped. Under his piece: "Tap any
     line to change it" — a tap takes him to that line's box (and on a
     phone, to that question). Then one row: Edit · Save. Then one quiet
     line: Read it back · Hear it · Five questions (the five taps' button
     now says what it does; "Now that it's written" stays their heading).
     Then Your page. Print and Copy stay small at the foot. After a save,
     "Saved to your page. Finished." is the first line and Edit is still
     right there. John, Sept 29: "after saving I'm presented a screen that
     offers read it back, hear it, now that it's written… what if I want
     to edit what I'm reading?"

   v17.1 (29 Sept 2026) — one listener per page, one stretch of speech per tap, no
     keyboard raised: the second question's tap now works on a phone.
   v17 (29 Sept 2026) — Speak it, phone-first, and the handoff. On every
     piece, decided by what the device can do: Tap and talk by every box
     (the device turns his voice into words; nothing recorded, nothing
     sent to us), Read it to me under every question, Hear it at the
     finish (the device reads his piece back), and on a phone one
     question fills the screen with Next question · Back · Show all
     questions. On a laptop or desk, "Continue on your phone": the page
     saves what he has and shows a square code that opens the piece where
     he left off (his page, inside the course player). See 9e and 9f.
   Ancient Path — the Chronicle: the shared save and the story assistant.

   v16 (29 Sept 2026) — the count. Every piece now tells Analytics three
     things, and nothing else: story_start (the first words typed into a
     fresh piece on this device), story_save (a save the site confirmed),
     story_finish (a confirmed save of a finished piece). Each carries
     only the piece's key (cfg.form). No text, no name, no answer ever
     leaves the page this way. APStory.track is the one sender, so
     road.js reports the same three for The Road and Where Are You?.
     The Friday count reads these four numbers — starts, finishes,
     saves, offers — from Analytics.

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

  /* v16 · the count. One sender for every piece: an event name and the
     piece's key, nothing of what he wrote. Silent when Analytics is not
     on the page. Returns whether anything was sent (for the tests). */
  function track(name, piece, extra) {
    try {
      var p = { piece: String(piece || "") };
      if (extra) { for (var k in extra) { if (Object.prototype.hasOwnProperty.call(extra, k)) { p[k] = extra[k]; } } }
      if (typeof window.gtag === "function") { window.gtag("event", name, p); return true; }
    } catch (e) {}
    return false;
  }

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
  /* v18.6: LearnWorlds drops "}}" from a stored open-ended answer (measured 3 Oct 2026 on the Stones form: every
     history list came back exactly two characters short — the two closing braces at its end — while the answers
     JSON, which ends in one brace, came back whole). JSON allows whitespace between tokens, so every value stored
     from here is written with a space between two braces in a row; nothing of a man's own text changes unless he
     typed two braces together, and then a space goes between them. */
  function lwJSON(v) { return JSON.stringify(v).replace(/\}(?=\})/g, "} ").replace(/\{(?=\{)/g, "{ "); }
  /* a list stored before v18.6 and cut short: the missing closing braces go back before the final bracket */
  function mendList(raw) {
    var s = String(raw || "").trim();
    if (!s || s.charAt(0) !== "[" || s.charAt(s.length - 1) !== "]") { return null; }
    var opens = (s.match(/\{/g) || []).length, closes = (s.match(/\}/g) || []).length;
    if (opens <= closes) { return null; }
    var fixed = s.slice(0, -1); while (opens-- > closes) { fixed += "}"; } fixed += "]";
    try { var v = JSON.parse(fixed); return Array.isArray(v) ? v : null; } catch (e) { return null; }
  }
  function parseHistoryList(raw) {
    if (!raw) { return []; }
    var v;
    try { v = JSON.parse(raw); } catch (e) { v = mendList(raw); if (!v) { return []; } }
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
  Story.prototype.progress = function (answersGiven) {
    var a = answersGiven || this.answers(), written = 0, total = 0, meta = null;
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
    if (lw.blocks.json) { out.push({ blockId: lw.blocks.json, value: lwJSON(answers) }); }
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
            extraBlock = { blockId: historyBlock, value: lwJSON(merged.list) };
            newEntryId = merged.id;
          } else {
            /* Stopping early: carry whatever history already exists
               through unchanged. Do not touch openEntryId either — he is
               still mid-sitting on the same piece. */
            extraBlock = { blockId: historyBlock, value: lwJSON(parseHistoryList(rawByBlockId[historyBlock])) };
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
        /* v16 · the count: a confirmed save, and a finished piece once per page */
        track("story_save", self.cfg.form);
        if (self.progress(answers).finished && !self._finishSent) { self._finishSent = true; track("story_finish", self.cfg.form); }
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
    this._opened = true;   /* v16: opening a saved piece is not a start */
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
    this._opened = true;   /* v16: opening a saved piece is not a start */
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
          row.parentNode.insertBefore(note, row);
          self.renderSaved(panel);
          document.removeEventListener("input", rearm, true);
        };
        document.addEventListener("input", rearm, true);
      },
      fail: function (msg) { btn.disabled = false; btn.textContent = "Save"; note.textContent = msg; }
    };

    btn.addEventListener("click", function () { self.save(ui); });

    row.appendChild(btn);
    /* v18.1: mountEditAll is no longer called — one Edit (John, 29 Sept) */
    this.mountAssistant(row);   /* v8 */
    this.mountAfter(row);       /* v15 */
    row.parentNode.insertBefore(note, row);   /* v18.5: every note about the piece sits above the row */
    row.parentNode.insertBefore(panel, row.nextSibling);
    this.renderSaved(panel);   /* v5: the way back, from the start, when he is signed in */
    this.holdTyping();         /* v7 */
    this.mountVoice();         /* v17 · before oneRow, so Hear it takes its tier */
    this.oneRow();             /* v7 */
    this.foldClosing();        /* v10 */
    this.oneQuestion();        /* v17 */
    this.mountHandoff();       /* v17 */
    this.mountTapLines();      /* v18 */
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
      /* v16 · the count: the first words into a piece that was not opened from a save and had nothing held on this device */
      if (!self._startSent && !self._opened) { self._startSent = true; track("story_start", self.cfg.form); }
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
  /* the finish, v18.5: 5 saved + what's left · 7 Save · 10 break · 21 Your Page · 22 break · 23 the help lines (Read it back · Five questions · Hear it), each full width · 24 the ⓘ line, results and the five cards · 25 rule · 30 the quiet things (Edit · Back · Download · Copy · Continue on your phone) */
  function finishOrder(node, slot) {
    if (node.classList.contains("aps-status")) { return 5; }
    if (node.classList.contains("aps-edit-main")) { return 29; }   /* v18.5: Edit leads the quiet line */
    if (node.classList.contains("aps-assist")) { return 24; }
    if (node.classList.contains("aps-act")) { return 23; }
    if (node.classList.contains("aps-read")) { return 24; }
    if (node.classList.contains("aps-after")) { return 23; }
    if (node.classList.contains("aps-break")) { var at = node.getAttribute("data-at"); return at === "a" ? 10 : at === "c" ? 22 : 25; }
    if (slot === 8) { return 23; }
    if (slot === 4) { return 7; }
    if (slot === 6) { return 21; }
    return 30;
  }
  function breakEl(at) { var b = el("span", "aps-break", ""); b.setAttribute("data-at", at); b.setAttribute("aria-hidden", "true"); return b; }
  function arrange(row, finish) {
    if (!row) { return; }
    row.classList.add("aps-row");
    if (finish) {
      row.classList.add("aps-finish");
      if (!row.querySelector('.aps-break[data-at="a"]')) { row.appendChild(breakEl("a")); row.appendChild(breakEl("c")); row.appendChild(breakEl("b")); }
    }
    if (finish && !row.querySelector(".aps-edit-main")) {
      /* v18: the first of the page's own Back / Edit controls (never the engine's Edit the whole thing) is the Edit button, beside Save */
      var saveBtn = null, editBtn = null;
      for (var e0 = 0; e0 < row.children.length; e0++) { var cb = row.children[e0]; if (cb.tagName !== "BUTTON") { continue; } var sl0 = slotFor(cb); if (sl0 === 4 && !saveBtn) { saveBtn = cb; } if (sl0 === 1 && !editBtn && cb.id !== "apsEdit") { editBtn = cb; } }
      if (editBtn) { editBtn.classList.add("aps-edit-main"); editBtn.setAttribute("data-aps-label", editBtn.textContent); editBtn.textContent = "Edit"; editBtn.classList.add("aps-quiet"); }   /* v18.5: Edit is a quiet link, after Save */
    }
    for (var i = 0; i < row.children.length; i++) {
      var c = row.children[i];
      if (c.tagName === "BUTTON" && /^save and stop/i.test((c.textContent || "").trim())) { c.textContent = "Save"; }
      if (c.tagName === "SPAN" && !(c.textContent || "").trim() && !c.id && !c.classList.contains("aps-break")) { c.style.display = "none"; }   /* a spacer that pushed Save to the far right */
      var slot = slotFor(c);
      if (finish) {
        var o = finishOrder(c, slot);
        c.style.order = String(o);
        if (o >= 29 && c.tagName === "BUTTON") { c.classList.add("aps-quiet"); }
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
        ".aps-row.aps-finish > .aps-break[data-at=\"c\"]{margin-top:6px}" +
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
        /* v18: the quiet line: Read it back, Hear it, Five questions read as links, not buttons; on a phone the words beside them come off */
        ".aps-row.aps-finish > .aps-act{flex:1 1 100%;display:flex;flex-direction:column;align-items:flex-start;gap:3px;margin:0}.aps-row.aps-finish .aps-act-what{font-size:14px;line-height:1.45;color:#6B6358;max-width:52ch}.aps-row.aps-finish > .aps-act > button{flex:0 0 auto;order:0}" +
        ".aps-row.aps-finish > .aps-act > button,.aps-row.aps-finish .aps-after .aps-after-open{background:none!important;border:0!important;box-shadow:none!important;padding:0!important;min-height:0!important;height:auto!important;font-size:15px!important;font-weight:600!important;color:#8C6A3F!important;text-decoration:underline;text-underline-offset:3px;cursor:pointer;border-radius:0!important;width:auto!important}" +
        ".aps-row.aps-finish > .aps-act > button:hover,.aps-row.aps-finish .aps-after .aps-after-open:hover{color:#1F2A44!important}" +
        ".aps-row.aps-finish .aps-after{flex:1 1 100%;width:100%;margin:0}.aps-row.aps-finish .aps-after .aps-after-row{margin:0;display:flex;flex-direction:column;align-items:flex-start;gap:3px}.aps-row.aps-finish .aps-after .aps-after-what{font-size:14px;line-height:1.45;color:#6B6358;max-width:52ch}.aps-row.aps-finish .aps-after > .aps-after-card,.aps-row.aps-finish .aps-after > .aps-after-done,.aps-row.aps-finish .aps-after > .aps-note:not(.aps-after-row){flex:1 1 100%}" +
        "@media (max-width:620px){.aps-row.aps-finish > .aps-act{flex:1 1 100%}}" +
        ".aps-row.aps-finish > .aps-edit-main{order:29}" +
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
    var self = this, boxes = this.boxes();
    var visible = function (n) { var r = n.getBoundingClientRect(); return r.height > 0 && r.width > 0; };
    var land = function () {
      try { if (self._oneQuestion && self._oneQuestion.show) { self._oneQuestion.show(best); } } catch (e) {}
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
    var a = el("a", "aps-page-link" + (this.saved ? " " + (this.cfg.buttonClass || "") + " " + (this.cfg.primaryClass || "") + " aps-page-btn" : ""), String(this.saved ? (this.cfg.pageLabel || "Go to Your Page") : (this.cfg.pageLinkLabel || "Your Page")).replace(/your page/i, "Your Page"));   /* v18.5: the page is named Your Page */
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
    if (pending) { this._opened = true; }   /* v16: words held on this device were started before */
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
      var onward = $("apsAfter") && $("apsAfter").querySelector(".aps-after-open") ? " Next: the five questions, below." : "";
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
        ".aps-row.aps-finish > .aps-act{flex:1 1 100%;display:flex;flex-direction:column;align-items:flex-start;gap:3px;margin:0}.aps-act-what{font-size:14px;line-height:1.45;color:#6B6358;max-width:52ch}.aps-row.aps-finish > .aps-act > button{flex:0 0 auto;order:0}" +
        ".aps-read .aps-way{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.aps-goto,.aps-again{font:inherit;font-size:14px;font-weight:600;color:#1F2A44;background:#fff;border:1px solid #C9A227;border-radius:2px;padding:6px 12px;cursor:pointer}.aps-goto:hover,.aps-again:hover{background:#FBF7EF}.aps-read .is-done{opacity:.55}.aps-read .aps-done{color:#8C6A3F;font-weight:600}.aps-here{outline:2px solid #C9A227!important;outline-offset:2px}" +
        ".aps-read .aps-num{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;border-radius:50%;background:#C9A227;color:#1F2A44;font-size:12px;font-weight:700;letter-spacing:0;margin-right:6px}.aps-read .aps-walkrow{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:6px 0 4px}.aps-read .aps-walkrow span{font-size:14.5px;color:#6B6358}.aps-walk{font:inherit;font-size:14px;font-weight:700;color:#fff;background:#1F2A44;border:1px solid #1F2A44;border-radius:2px;padding:10px 18px;cursor:pointer}.aps-walk:hover{background:#2B3856}" +
        ".aps-guide{margin:10px 0 14px;border:1px solid #E5DCC8;border-left:3px solid #C9A227;background:#FBF7EF;padding:12px 16px;font-size:15.5px;line-height:1.5;max-width:62ch}.aps-guide .aps-guide-top{font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8C6A3F;margin:0 0 6px}.aps-guide .aps-guide-top b{color:#1F2A44}.aps-guide .aps-guide-part{color:#1F2A44}.aps-guide .aps-quoted{border-left:3px solid #C9A227;padding-left:12px;color:#6B6358;margin:6px 0;white-space:pre-wrap}.aps-guide .aps-ask{color:#1F2A44;font-weight:600;margin:6px 0}.aps-guide .aps-help{font-size:14.5px;color:#6B6358;margin:4px 0 0}.aps-guide .aps-guide-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:12px 0 0}.aps-guide .aps-guide-state{font-size:14.5px;color:#6B6358}.aps-guide .aps-guide-state.aps-done{color:#8C6A3F;font-weight:600}.aps-guide .aps-guide-quit{font:inherit;font-size:14px;background:none;border:0;padding:0;text-decoration:underline;cursor:pointer;color:#8C6A3F;margin-left:auto}" +
        "@media (max-width:620px){.aps-row.aps-finish > .aps-act{gap:3px}}" +
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
      var b = el("button", "aps-after-open", wasDone ? "Go through them again" : "Five questions"); b.type = "button";
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
  /* ======================================================================
     9e. v17 — SPEAK IT (phone-first)
     ------------------------------------------------------------------
     John, Sept 29: "tell your story" should be true with the phone in his
     hand. Four things, on every piece, decided by what the device can do,
     never by what it is called:
       Tap and talk    a microphone by every box; the device turns his
                       voice into words that land in the box; he edits.
       Read it to me   the device reads the question aloud.
       Hear it         at the finish, the device reads his piece back in a
                       plain voice (the nearest thing to Read it back
                       without a reader).
       One question    on a phone, one question fills the screen with its
                       own Back · Next question; "Show all questions" ends it.
     Nothing is recorded and nothing goes to Ancient Path: the browser's
     own speech services do the listening and the speaking. A device that
     cannot listen never shows the microphone; one that cannot speak never
     shows Read it to me or Hear it. A microphone the man refuses is taken
     off the page for that visit.
     ====================================================================== */
  var VOICE = (function () {
    var denied = false, speaking = null;
    function SR() { return window.SpeechRecognition || window.webkitSpeechRecognition || null; }
    function TTS() { return (window.speechSynthesis && window.SpeechSynthesisUtterance) ? window.speechSynthesis : null; }
    /* a finger, not a mouse: the browser's own word on its main pointer (a touch laptop with a mouse is a desk; a tablet is a phone-sized hand) */
    function touch() {
      try {
        if (window.matchMedia) { return window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches; }
        return (navigator.maxTouchPoints || 0) > 0;
      } catch (e) { return false; }
    }
    function phone() { return touch() && window.innerWidth <= 640; }
    /* speak one text; the same button stops it; returns false when the device cannot speak */
    function say(text, onEnd) {
      var s = TTS(); if (!s) { return false; }
      stop();
      var u = new window.SpeechSynthesisUtterance(String(text || ""));
      u.lang = document.documentElement.lang || "en-US"; u.rate = 0.95;
      u.onend = function () { if (speaking === u) { speaking = null; } if (onEnd) { onEnd(); } };
      u.onerror = u.onend;
      speaking = u;
      try { s.speak(u); } catch (e) { speaking = null; if (onEnd) { onEnd(); } return false; }
      return true;
    }
    function stop() { var s = TTS(); if (s) { try { s.cancel(); } catch (e) {} } speaking = null; }
    return { SR: SR, TTS: TTS, touch: touch, phone: phone, say: say, stop: stop,
      denied: function (v) { if (v !== undefined) { denied = !!v; } return denied; } };
  })();


  /* the voice controls for a set of boxes: Tap and talk beside each, Read it to me under its question, the note once per page.
     Used by the engine for a piece's own boxes and by road.js for the boxes it draws (APStory.voice.attach). */
  var VOICE_CSS_DONE = false, VOICE_NOTE_DONE = false, VOICE_LIVE = null;
  /* v17.1 · ONE listener per page. The first cut made a new listener on every tap, and a phone (Safari above all) will not start a
     second one while the first is still winding down — so the second question's tap did nothing. Now one listener is made once,
     a tap points it at that box, a pause or a second tap ends it, and a tap on another box waits for the first to end before it
     starts. It listens for one stretch of speech at a time (no "continuous" mode: phones cut it off unpredictably), and it never
     raises the keyboard. John, Sept 29: "lots of pop ups and things happening between the phone and webpage". */
  var LISTEN = (function () {
    var rec = null, btn = null, land = null, on = false, want = null, ending = false;
    function reset(b) { if (b) { b.classList.remove("is-on"); b.textContent = "Tap and talk"; } }
    function make() {
      var SR = VOICE.SR(); if (!SR) { return null; }
      var r = new SR();
      r.lang = document.documentElement.lang || "en-US"; r.continuous = false; r.interimResults = false; r.maxAlternatives = 1;
      r.onresult = function (ev) {
        var out = "";
        for (var k = ev.resultIndex || 0; k < ev.results.length; k++) { if (ev.results[k].isFinal) { out += (out ? " " : "") + (ev.results[k][0].transcript || ""); } }
        if (land) { land(out); }
      };
      r.onerror = function (ev) {
        var why = ev && ev.error;
        if (why === "not-allowed" || why === "service-not-allowed") {
          VOICE.denied(true); finish();
          Array.prototype.forEach.call(document.querySelectorAll(".aps-voice .aps-talk"), function (b) { b.parentNode.removeChild(b); });
          Array.prototype.forEach.call(document.querySelectorAll(".aps-voice-note"), function (n) { n.parentNode.removeChild(n); });
          return;
        }
        finish();
      };
      r.onend = finish;
      return r;
    }
    function finish() {
      on = false; ending = false; reset(btn); btn = null; land = null; VOICE_LIVE = null;
      if (want) { var w = want; want = null; window.setTimeout(function () { start(w.b, w.l); }, 150); }
    }
    function start(b, l) {
      if (!rec) { rec = make(); if (!rec) { return; } }
      btn = b; land = l; on = true; VOICE_LIVE = b;
      b.classList.add("is-on"); b.textContent = "Listening\u2026";
      try { rec.start(); } catch (e) { /* a phone still winding the last one down: try once more shortly */ window.setTimeout(function () { try { rec.start(); } catch (e2) { finish(); } }, 250); }
    }
    function stop() { if (!on || ending) { return; } ending = true; try { rec.stop(); } catch (e) { finish(); } }
    function toggle(b, l) {
      if (on && btn === b) { stop(); return; }
      if (on) { want = { b: b, l: l }; stop(); return; }
      start(b, l);
    }
    return { toggle: toggle, stop: stop, listening: function () { return on; } };
  })();
  function voiceCSS() {
    if (VOICE_CSS_DONE || $("aps-voice-css")) { VOICE_CSS_DONE = true; return; }
    VOICE_CSS_DONE = true;
    var st = el("style"); st.id = "aps-voice-css";
    st.textContent = ".aps-voice{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;margin:6px 0 10px}" +
      ".aps-voice button{font:inherit;font-size:14px;line-height:1.2;background:#fff;border:1px solid #C9A227;color:#1F2A44;border-radius:999px;padding:7px 14px;cursor:pointer;min-height:0;height:auto;width:auto;box-shadow:none;text-transform:none;letter-spacing:normal}" +
      ".aps-voice button.aps-talk{padding-left:32px;position:relative}.aps-voice button.aps-talk::before{content:\"\";position:absolute;left:12px;top:50%;width:10px;height:10px;margin-top:-5px;border-radius:50%;background:#C9A227}" +
      ".aps-voice button.aps-talk.is-on{background:#1F2A44;color:#fff;border-color:#1F2A44}.aps-voice button.aps-talk.is-on::before{background:#F3EDE3;animation:aps-pulse 1s ease-in-out infinite}" +
      "@keyframes aps-pulse{0%,100%{opacity:.3}50%{opacity:1}}" +
      ".aps-voice button.is-on{background:#1F2A44;color:#fff;border-color:#1F2A44}" +
      ".aps-voice.aps-touch button{font-size:16px;padding:12px 18px;min-height:44px}.aps-voice.aps-touch button.aps-talk{padding-left:40px}.aps-voice.aps-touch button.aps-talk::before{left:16px}" +
      ".aps-voice-note{flex:1 1 100%;font-size:13.5px;line-height:1.45;color:#6B6358;margin:0}" +
      ".aps-voice button.aps-readq{background:none;border:0;padding:0;border-radius:0;font-size:13.5px;color:#8C6A3F;text-decoration:underline;text-underline-offset:3px;min-height:0}.aps-voice.aps-touch button.aps-readq{font-size:14px;padding:0;min-height:0}.aps-voice button.aps-readq.is-on{background:none;color:#1F2A44;border:0}" +
      ".aps-voice-q{margin:2px 0 2px}.aps-voice-q button.aps-readq{font-size:15px!important;padding:11px 0!important;min-height:44px!important;display:inline-flex;align-items:center}" +
      ".aps-voice.aps-touch{flex-direction:column;align-items:stretch;gap:10px}.aps-voice.aps-touch button.aps-talk{width:100%;text-align:center;font-size:17px;padding:14px 18px 14px 40px}" +
      ".aps-hear.aps-act > button{font:inherit}" +
      ".aps-one .aps-q-off{display:none!important}.aps-q-row{display:flex;flex-direction:column;gap:10px;margin:4px 0 22px}" +
      ".aps-q-row button.aps-q-next{font:inherit;font-size:17px;min-height:48px;padding:12px 18px;border-radius:8px;border:1px solid #1F2A44;background:#1F2A44;color:#fff;cursor:pointer;width:100%}" +
      ".aps-q-row .aps-q-line{font-size:13.5px;color:#6B6358;display:flex;gap:10px;align-items:center;flex-wrap:wrap}.aps-q-row .aps-q-line button{font:inherit;font-size:13.5px;color:#8C6A3F;background:none;border:0;padding:0;text-decoration:underline;text-underline-offset:3px;cursor:pointer;min-height:0}.aps-q-row .aps-q-line .aps-dot{color:#B7AFA4}";
    document.head.appendChild(st);
  }
  /* the words a box asks, when no page hook says: its label, else the nearest text above it */
  function askOf(node) {
    var clean = function (x) { return String(x || "").replace(/\s+/g, " ").trim(); };
    var lab = node.id ? document.querySelector('label[for="' + node.id + '"]') : null;
    if (lab && clean(lab.textContent).length >= 3) { return clean(lab.textContent).slice(0, 300); }
    var e = node, depth = 0;
    while (e && depth < 4) {
      var p = e.previousElementSibling;
      while (p) {
        if (!/^(INPUT|TEXTAREA|BUTTON|SELECT|SCRIPT|STYLE)$/.test(p.tagName) && !p.querySelector("input,textarea,button") && !p.classList.contains("aps-voice") && !p.classList.contains("aps-voice-q")) {
          var t = clean(p.textContent); if (t.length >= 3) { return t.slice(0, 300); }
        }
        p = p.previousElementSibling;
      }
      e = e.parentElement; depth++;
    }
    return "";
  }
  VOICE.attach = function (nodes, askFn) {
    var SR = VOICE.SR(), TTS = VOICE.TTS();
    if (!SR && !TTS) { return 0; }
    voiceCSS();
    var touch = VOICE.touch(), done = 0;
    if (nodes && nodes.nodeType === 1) { nodes = nodes.querySelectorAll("textarea,input[type=text],input:not([type])"); }
    Array.prototype.forEach.call(nodes || [], function (node) {
      if (!node || node.type === "hidden" || node.readOnly || node.disabled || node.hidden) { return; }
      if (node.getAttribute("data-aps-voice")) { return; }
      node.setAttribute("data-aps-voice", "1");
      var row = el("div", "aps-voice" + (touch ? " aps-touch" : ""), "");
      var ask = ""; try { ask = (askFn && askFn(node)) || askOf(node); } catch (e) { ask = askOf(node); }
      if (TTS && ask) {
        var rb = el("button", "aps-readq", "Read it to me"); rb.type = "button";
        rb.addEventListener("click", function () {
          if (rb.classList.contains("is-on")) { VOICE.stop(); rb.classList.remove("is-on"); rb.textContent = "Read it to me"; return; }
          Array.prototype.forEach.call(document.querySelectorAll(".aps-readq.is-on"), function (b) { b.classList.remove("is-on"); b.textContent = "Read it to me"; });
          rb.classList.add("is-on"); rb.textContent = "Stop";
          VOICE.say(ask, function () { rb.classList.remove("is-on"); rb.textContent = "Read it to me"; });
        });
        if (touch) {
          var rq = el("div", "aps-voice aps-voice-q", ""); rq.appendChild(rb);
          /* v18.3: a box whose line carries a pinned sentence stem (a sibling placed over the box) keeps the row above the whole line */
          var anchor = node;
          try {
            var sib = node.previousElementSibling;
            while (sib) {
              var pos = window.getComputedStyle(sib).position;
              if ((pos === "absolute" || pos === "fixed") && String(sib.textContent || "").replace(/\s+/g, "").length > 0) {
                var sr = sib.getBoundingClientRect(), nr = node.getBoundingClientRect();
                /* v18.5: a step that is not showing yet measures as nothing; a pinned, non-empty sibling is a stem whether or not it can be measured */
                var measurable = sr.width > 0 && sr.height > 0;
                if (!measurable || (sr.top < nr.bottom && sr.bottom > nr.top)) { anchor = node.parentNode; break; }
              }
              sib = sib.previousElementSibling;
            }
          } catch (e) {}
          anchor.parentNode.insertBefore(rq, anchor);
        }
        else { row.appendChild(rb); }
      }
      if (SR && !VOICE.denied()) {
        var tb = el("button", "aps-talk", "Tap and talk"); tb.type = "button";
        var land = function (text) {
          text = String(text || "").trim(); if (!text) { return; }
          var v = String(node.value || ""), tail = v.replace(/\s+$/, "");
          if (!tail || /[.!?]$/.test(tail)) { text = text.charAt(0).toUpperCase() + text.slice(1); }
          if (node.tagName === "TEXTAREA" && !/[.!?,;:]$/.test(text)) { text += "."; }
          node.value = tail + (tail ? " " : "") + text;
          node.dispatchEvent(new window.Event("input", { bubbles: true }));
        };
        /* v17.1 · one listener for the whole page (LISTEN): a tap starts it for this box, a pause or a second tap ends it; no keyboard is raised */
        tb.addEventListener("click", function () { LISTEN.toggle(tb, land); });
        row.appendChild(tb);
      }
      if (!row.children.length) { return; }
      if (!VOICE_NOTE_DONE && SR && !VOICE.denied()) {
        VOICE_NOTE_DONE = true;
        row.appendChild(el("p", "aps-voice-note", (touch ? "Your phone" : "Your computer") + " turns your voice into words. Nothing is recorded, and nothing is sent to us."));
      }
      node.parentNode.insertBefore(row, node.nextSibling); done++;
    });
    return done;
  };
  if (!VOICE._hidden) {
    VOICE._hidden = true;
    document.addEventListener("visibilitychange", function () { if (document.hidden) { VOICE.stop(); LISTEN.stop(); } });
  }

  Story.prototype.askFor = function (node) {
    var cfg = this.cfg;
    if (typeof cfg.askFor === "function") { try { var t0 = cfg.askFor(node.id); if (t0) { return String(t0); } } catch (e) {} }
    return askOf(node);
  };

  /* ======================================================================
     9g. v18 — TAP ANY LINE TO CHANGE IT
     ------------------------------------------------------------------
     The finished piece the page shows is the way back into it: a tap on a
     line takes him to that line's box (v12's goToLine), and on a phone to
     that question. The page names its piece with cfg.pieceSelector; else
     the engine finds the smallest element whose words hold the first line
     of the piece. A one-line hint sits under it. The page may redraw its
     piece at any time, so the hint is kept in place by a short watch and
     the tap is caught on the root, never on the piece itself.
     ====================================================================== */
  Story.prototype.findPiece = function () {
    var cfg = this.cfg, root = document.querySelector(cfg.root) || document.body;
    if (cfg.pieceSelector) { return document.querySelector(cfg.pieceSelector); }
    var doc = this.document(); if (!doc) { return null; }
    var lines = doc.split("\n").map(function (l) { return l.replace(/\s+/g, " ").trim(); }).filter(function (l) { return l.length >= 4; });
    if (!lines.length) { return null; }
    /* the piece holds its first line and its last: the smallest such element (a single line's own element holds only one) */
    var first = lines[0].toLowerCase(), last = lines[lines.length - 1].toLowerCase();
    var best = null, all = root.querySelectorAll("p,div,blockquote,pre,section,article");
    for (var i = 0; i < all.length; i++) {
      var e = all[i]; if (e.querySelector("input,textarea,button,select")) { continue; }
      if (e.classList.contains("aps-read") || e.classList.contains("aps-after") || e.classList.contains("aps-row")) { continue; }
      var t = (e.textContent || "").replace(/\s+/g, " ").toLowerCase();
      if (t.indexOf(first) < 0 || t.indexOf(last) < 0) { continue; }
      var r = e.getBoundingClientRect(); if (!(r.height > 0) && e.style.display !== "") { continue; }
      if (!best || (e.textContent || "").length <= (best.textContent || "").length) { best = e; }   /* the same words deeper in wins: the piece, not the panel around it */
    }
    return best;
  };
  Story.prototype.mountTapLines = function () {
    var self = this, cfg = this.cfg, root = document.querySelector(cfg.root) || document.body;
    if (cfg.tapLines === false || this._tapLines) { return false; }
    this._tapLines = true;
    if (!$("aps-tap-css")) { var st = el("style"); st.id = "aps-tap-css"; st.textContent = ".aps-tap-hint{font-size:14px;line-height:1.4;color:#6B6358;margin:8px 0 0}.aps-can-tap{cursor:pointer}.aps-can-tap:hover{outline:1px dashed #C9A227;outline-offset:6px}"; document.head.appendChild(st); }
    var lineAt = function (x, y, piece) {
      var node = null, off = 0;
      try { if (document.caretPositionFromPoint) { var cp = document.caretPositionFromPoint(x, y); if (cp) { node = cp.offsetNode; off = cp.offset; } } else if (document.caretRangeFromPoint) { var cr = document.caretRangeFromPoint(x, y); if (cr) { node = cr.startContainer; off = cr.startOffset; } } } catch (e) {}
      if (!node || !piece.contains(node)) { return ""; }
      var text = node.nodeType === 3 ? node.nodeValue : (node.textContent || "");
      if (/\n/.test(text)) { var upto = text.slice(0, off), ln = upto.split("\n").length - 1; text = text.split("\n")[ln] || ""; }
      else if (node.nodeType !== 3) { text = (node.textContent || "").split("\n")[0]; }
      return String(text).replace(/\s+/g, " ").trim();
    };
    var dress = function () {
      var piece = self.findPiece(); if (!piece) { return; }
      if (piece.classList.contains("aps-can-tap")) { return; }
      piece.classList.add("aps-can-tap");
      var hint = el("p", "aps-tap-hint", "Tap any line to change it.");
      piece.parentNode.insertBefore(hint, piece.nextSibling);
    };
    root.addEventListener("click", function (e) {
      var piece = self.findPiece(); if (!piece || !e.target || !piece.contains(e.target)) { return; }
      var line = lineAt(e.clientX, e.clientY, piece);
      if (!line && e.target !== piece) { line = (e.target.textContent || "").split("\n")[0].trim(); }
      if (!line) { return; }
      self.goToLine(line);
    });
    var n = 0, iv = window.setInterval(function () { dress(); if (++n > 20) { window.clearInterval(iv); } }, 1200);
    dress();
    return true;
  };

  Story.prototype.mountVoice = function () {
    var self = this, cfg = this.cfg, TTS = VOICE.TTS();
    if (cfg.voice === false || (!VOICE.SR() && !TTS)) { return false; }
    VOICE.attach(this.boxes(), function (node) { return self.askFor(node); });
    /* Hear it: the finish reads his piece back */
    var actionsRow = document.querySelector(cfg.actionsRow);
    if (TTS && actionsRow && !$("apsHear")) {
      voiceCSS();
      var hb = el("button", (cfg.buttonClass || "") + " " + (cfg.ghostClass || ""), "Hear it"); hb.id = "apsHear"; hb.type = "button";
      var wrap = el("div", "aps-act aps-hear", ""); wrap.appendChild(hb); wrap.appendChild(el("span", "aps-act-what", "Reads your piece back to you in a plain voice. Nothing is sent."));
      hb.addEventListener("click", function () {
        if (hb.classList.contains("is-on")) { VOICE.stop(); hb.classList.remove("is-on"); hb.textContent = "Hear it"; return; }
        var text = self.document();
        if (!text) { wrap.querySelector(".aps-act-what").textContent = "There is nothing written yet. Write something first, then hear it."; return; }
        hb.classList.add("is-on"); hb.textContent = "Stop";
        VOICE.say(text.replace(/\n{2,}/g, ". ").replace(/\n/g, ", "), function () { hb.classList.remove("is-on"); hb.textContent = "Hear it"; });
      });
      actionsRow.appendChild(wrap);
    }
    return true;
  };

  /* one question fills the screen: a phone shows one box at a time inside the page's own step, with its own Back · Next question */
  Story.prototype.oneQuestion = function () {
    var self = this, cfg = this.cfg;
    if (cfg.oneAtATime === false || !VOICE.phone()) { return false; }
    var root = document.querySelector(cfg.root) || document.body;
    var boxes = this.boxes(); if (boxes.length < 3) { return false; }
    var isField = {}; boxes.forEach(function (b) { isField[b.id] = true; });
    var countFields = function (e) { var n = 0, q = e.querySelectorAll("input,textarea"); for (var i = 0; i < q.length; i++) { if (isField[q[i].id]) { n++; } } return n; };
    /* a box's own container: the highest ancestor that holds no other box */
    var groups = [], seen = [];
    boxes.forEach(function (b) {
      var e = b;
      while (e.parentElement && e.parentElement !== root && countFields(e.parentElement) === 1) { e = e.parentElement; }
      if (seen.indexOf(e) < 0) { seen.push(e); groups.push({ box: e, first: b }); }
    });
    if (groups.length < 3) { return false; }
    var on = true, rowEl = null;
    var visible = function (g) { var e = g.box; while (e && e !== root) { var cs = window.getComputedStyle(e); if (cs.display === "none" || cs.visibility === "hidden") { return false; } e = e.parentElement; } return true; };
    var paint = function (want) {
      if (rowEl && rowEl.parentNode) { rowEl.parentNode.removeChild(rowEl); rowEl = null; }
      groups.forEach(function (g) { g.box.classList.remove("aps-q-off"); });
      if (!on) { root.classList.remove("aps-one"); return; }
      var here = groups.filter(visible); if (here.length < 2) { root.classList.remove("aps-one"); return; }
      var cur = want && here.indexOf(want) >= 0 ? want : null;
      if (!cur) { for (var i = 0; i < here.length; i++) { if (!String(here[i].first.value || "").trim()) { cur = here[i]; break; } } }
      if (!cur) { cur = here[0]; }
      root.classList.add("aps-one");
      here.forEach(function (g) { if (g !== cur) { g.box.classList.add("aps-q-off"); } });
      var at = here.indexOf(cur);
      rowEl = el("div", "aps-q-row", "");
      if (at < here.length - 1) { var next = el("button", "aps-q-next", "Next question"); next.type = "button"; next.addEventListener("click", function () { paint(here[at + 1]); }); rowEl.appendChild(next); }
      var line = el("div", "aps-q-line", ""); line.appendChild(el("span", "aps-q-count", (at + 1) + " of " + here.length));
      if (at > 0) { line.appendChild(el("span", "aps-dot", "\u00b7")); var back = el("button", "aps-q-back", "Back"); back.type = "button"; back.addEventListener("click", function () { paint(here[at - 1]); }); line.appendChild(back); }
      line.appendChild(el("span", "aps-dot", "\u00b7")); var all = el("button", "aps-q-all", "Show all questions"); all.type = "button"; all.addEventListener("click", function () { on = false; paint(null); }); line.appendChild(all);
      rowEl.appendChild(line);
      cur.box.parentNode.insertBefore(rowEl, cur.box.nextSibling);
      try { cur.first.scrollIntoView({ block: "center" }); } catch (e) {}
    };
    paint(null);
    /* the page's own steps change underneath (its Back and Next): when the set of visible boxes changes, paint again */
    var sig = function () { return groups.map(function (g) { return visible(g) ? "1" : "0"; }).join(""); }, last = sig();
    var tick = window.setInterval(function () { if (!on) { window.clearInterval(tick); return; } var now = sig(); if (now !== last) { last = now; paint(null); } }, 350);
    this._oneQuestion = { off: function () { on = false; paint(null); }, groups: groups, show: function (node) { if (!on) { return; } for (var i = 0; i < groups.length; i++) { if (groups[i].box === node || groups[i].box.contains(node)) { paint(groups[i]); return; } } } };
    return true;
  };

  /* ======================================================================
     9f. v17 — CONTINUE ON YOUR PHONE
     ------------------------------------------------------------------
     John, Sept 29: the handoff between devices has to be seamless. It
     rides on Save, not on the device: the page saves what he has (the
     sign-in door first, if needed), then shows a square code and the same
     link in words. The phone opens the piece where he left off; the code
     carries the page and "open where I left off", never his words. Shown
     only on a device without touch (a laptop or desk): a phone has
     nothing to scan with. Inside the course player the link is his page,
     whose Open it knows the way; a site page opens itself with ?open=1.
     The square code is drawn here (Kazuhiko Arase's MIT encoder, inlined
     so the page loads nothing from anywhere).
     ====================================================================== */
  var QR = (function () {
    var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1})},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(o*r,n*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)};
    return qrcode;
  })();
  function handoffLink() {
    var p = window.location.pathname || "/";
    if (/path-player/.test(p) || /courseid=/.test(window.location.search)) { return window.location.origin + "/start"; }
    return window.location.origin + p.replace(/\/$/, "") + "?open=1";
  }
  function qrSVG(text, size) {
    var q = QR(0, "M"); q.addData(text); q.make();
    var n = q.getModuleCount(), cell = size / (n + 8), d = "";
    for (var r = 0; r < n; r++) { for (var c = 0; c < n; c++) { if (q.isDark(r, c)) { d += "M" + ((c + 4) * cell).toFixed(2) + " " + ((r + 4) * cell).toFixed(2) + "h" + cell.toFixed(2) + "v" + cell.toFixed(2) + "h-" + cell.toFixed(2) + "z"; } } }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size + '" role="img" aria-label="A square code that opens this piece on your phone"><rect width="' + size + '" height="' + size + '" fill="#fff"/><path d="' + d + '" fill="#1F2A44"/></svg>';
  }
  function handoffCSS() {
    if (!$("aps-handoff-css")) {
      var st = el("style"); st.id = "aps-handoff-css";
      st.textContent = ".aps-row > .aps-handoff-link{background:none!important;border:0!important;padding:0!important;min-height:0!important;height:auto!important;font-size:14px!important;font-weight:400!important;color:#6B6358!important;text-decoration:underline;text-underline-offset:3px;cursor:pointer;box-shadow:none!important}.aps-row > .aps-handoff-link:hover{color:#1F2A44!important}" +
        ".aps-handoff{flex:1 1 100%;display:flex;gap:18px;align-items:flex-start;border:1px solid #E5DCC8;border-left:3px solid #C9A227;background:#FBF7EF;padding:14px 16px;margin:4px 0 0;font-size:15px;line-height:1.5;color:#2B3040}.aps-handoff[hidden]{display:none!important}.aps-handoff svg{flex:0 0 auto;border:1px solid #E5DCC8}.aps-handoff p{margin:0 0 8px}.aps-handoff .aps-handoff-url{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13.5px;word-break:break-all;color:#1F2A44}.aps-handoff .aps-handoff-done{font:inherit;font-size:14px;color:#8C6A3F;background:none;border:0;padding:0;text-decoration:underline;text-underline-offset:3px;cursor:pointer}";
      document.head.appendChild(st);
    }
  }
  function handoffBoxHTML(link) {
    return qrSVG(link, 132) + '<div><p><b>Point your phone’s camera at this.</b> It opens this piece where you left off. Sign in once on the phone, and the microphone is there.</p><p class="aps-handoff-url">' + link.replace(/^https?:\/\/(www\.)?/, "") + '</p><button type="button" class="aps-handoff-done">Done</button></div>';
  }
  Story.prototype.mountHandoff = function () {
    var self = this, cfg = this.cfg;
    if (cfg.handoff === false || VOICE.touch()) { return false; }
    var rows = document.querySelectorAll(".aps-row");
    if (!rows.length) { return false; }
    handoffCSS();
    var link = handoffLink();
    for (var i = 0; i < rows.length; i++) {
      (function (row) {
        if (row.querySelector(".aps-handoff-link")) { return; }
        var a = el("button", "aps-handoff-link", "Continue on your phone"); a.type = "button"; a.style.order = "30";
        var box = el("div", "aps-handoff", ""); box.hidden = true; box.style.order = "31";
        var show = function () {
          box.innerHTML = handoffBoxHTML(link);
          box.hidden = false;
          box.querySelector(".aps-handoff-done").addEventListener("click", function () { box.hidden = true; });
        };
        a.addEventListener("click", function () {
          if (!box.hidden) { box.hidden = true; return; }
          var a2 = JSON.stringify(self.answers());
          if (!self.document() || (self.savedAnswers && self.savedAnswers === a2)) { show(); return; }   /* nothing to save, or saved already: straight to the code */
          if (!signedIn()) { self.save(self.ui); return; }   /* the sign-in door; on his return he presses this again */
          self.save(self.ui);
          var tries = 0, t = window.setInterval(function () {
            if (self.savedAnswers === a2) { window.clearInterval(t); show(); }
            else if (++tries > 100 || (!self.busy && self.savedAnswers !== a2 && tries > 3)) { window.clearInterval(t); }
          }, 300);
        });
        row.appendChild(a); row.appendChild(box);
      })(rows[i]);
    }
    return true;
  };

  window.APStory = {
    version: "18.6",
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
    track: track,   /* v16: the one sender for the count */
    voice: VOICE, handoffLink: handoffLink, qrSVG: qrSVG, handoffCSS: handoffCSS, handoffBoxHTML: handoffBoxHTML,   /* v17 */
    safe: safe,
    latest: lwLatest,
    _submit: lwSubmit,
    _seekTo: seekTo,
    _scrollerFor: scrollerFor,
    _stash: stash,
    _restoreStyle: restoreStyle
  };

})(window, document);