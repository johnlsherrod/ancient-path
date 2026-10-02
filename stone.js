/* ==========================================================================
   AP-STONE-v1 (2 Oct 2026) — the stone.

   Joshua 4: the men carried stones out of the riverbed and set them where
   they would be seen, so that when someone asked "What do those stones
   mean to you?" the answer was the story told again.

   One place every man's stones live, whatever set them: one line, the
   date, and where it came from. "Set a stone" is one action any piece can
   offer. His page shows his stones, newest first. Nothing here writes a
   word for him: a stone is a line he tapped or typed.

   Rides on story.js (APStory.latest, APStory._submit, APStory.signedIn,
   APStory.track). Load it after story.js. A page configures it once:

       APStone.config({ unit: "...", blocks: { whole: "...", json: "...", history: "..." } });

   The Stones form in the storage course holds three Paragraph questions:
   whole = the stone line, json = this stone's record, history = every
   stone as a JSON array of {id, when, text, answers:{text, from, piece,
   pieceTitle}} — the same shape story.js keeps for pieces, so his page
   reads it with APStory.historyFor.
   ========================================================================== */
(function (window, document) {
  "use strict";
  if (window.APStone) { return; }

  var CFG = null;

  function story() { return window.APStory || null; }
  function cfgOk() { return !!(CFG && CFG.unit && CFG.blocks && CFG.blocks.whole && CFG.blocks.json && CFG.blocks.history); }
  function newId() { return String(Date.now()) + "-" + Math.random().toString(36).slice(2, 8); }
  function parseList(raw) {
    if (!raw) { return []; }
    var v; try { v = JSON.parse(raw); } catch (e) { return []; }
    return Array.isArray(v) ? v.filter(function (e) { return e && typeof e === "object" && typeof e.text === "string"; }) : [];
  }
  function clean(t) { return String(t || "").replace(/\s+/g, " ").trim(); }

  /* Every stone he has set, newest first. [] when none, or when he is not signed in. */
  function list() {
    var S = story();
    if (!S || !cfgOk() || !S.signedIn()) { return window.Promise.resolve([]); }
    return S.latest(CFG.unit).then(function (latest) {
      var raw = (latest && latest.answers) || {};
      var l = parseList(raw[CFG.blocks.history]);
      l.sort(function (a, b) { return String(b.when || "").localeCompare(String(a.when || "")); });
      return l;
    }).catch(function () { return []; });
  }

  /* Set a stone. opts: { text, from (the piece's form slug), piece (that
     piece's entry id, if it has one), pieceTitle }. A second set for the
     same piece entry replaces the first — a man who changes his mind
     before he leaves has one stone, not two. Resolves to the entry. */
  function set(opts) {
    var S = story();
    opts = opts || {};
    var text = clean(opts.text);
    if (!S || !cfgOk()) { return window.Promise.reject(new Error("stone: not configured")); }
    if (!text) { return window.Promise.reject(new Error("stone: nothing to set")); }
    if (!S.signedIn()) { return window.Promise.reject(new Error("stone: not signed in")); }
    return S.latest(CFG.unit).then(function (latest) {
      var raw = (latest && latest.answers) || {};
      var l = parseList(raw[CFG.blocks.history]);
      var answers = { text: text, from: String(opts.from || ""), piece: String(opts.piece || ""), pieceTitle: String(opts.pieceTitle || "") };
      var entry = null, i;
      if (answers.piece) {
        for (i = 0; i < l.length; i++) {
          if (l[i].answers && l[i].answers.piece === answers.piece) { entry = l[i]; break; }
        }
      }
      if (entry) { entry.text = text; entry.answers = answers; entry.when = new Date().toISOString(); }
      else { entry = { id: newId(), when: new Date().toISOString(), text: text, answers: answers }; l.push(entry); }
      return S._submit(CFG.unit, [
        { blockId: CFG.blocks.whole, value: text },
        { blockId: CFG.blocks.json, value: JSON.stringify(answers) },
        { blockId: CFG.blocks.history, value: JSON.stringify(l) }
      ]).then(function () {
        try { S.track("stone_set", answers.from || "stone"); } catch (e) {}
        return entry;
      });
    });
  }

  function monthYear(iso) {
    try { return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" }); } catch (e) { return ""; }
  }

  /* Draw his stones into a host element. Each stone: his line (serif),
     then a quiet line "Month Year · from <piece>". Nothing to tap, nothing
     counted. opts.empty is the one line shown when he has none. Returns
     the promise of the list, so a page can hide the card when it is empty. */
  function render(host, opts) {
    opts = opts || {};
    if (!host) { return window.Promise.resolve([]); }
    return list().then(function (l) {
      host.innerHTML = "";
      if (!l.length) {
        if (opts.empty) { var e = document.createElement("p"); e.className = "ap-stone-empty"; e.textContent = opts.empty; host.appendChild(e); }
        return l;
      }
      l.forEach(function (st) {
        var w = document.createElement("div"); w.className = "ap-stone";
        var t = document.createElement("p"); t.className = "ap-stone-text"; t.textContent = st.text;
        var m = document.createElement("p"); m.className = "ap-stone-meta";
        var from = st.answers && st.answers.pieceTitle ? " · from " + st.answers.pieceTitle : "";
        m.textContent = monthYear(st.when) + from;
        w.appendChild(t); w.appendChild(m); host.appendChild(w);
      });
      return l;
    });
  }

  window.APStone = {
    version: "1",
    config: function (c) { CFG = c || null; return cfgOk(); },
    configured: cfgOk,
    set: set,
    list: list,
    render: render,
    _parse: parseList
  };
})(window, document);
