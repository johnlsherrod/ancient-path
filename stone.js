/* ==========================================================================
   AP-STONE-v2.1 (4 Oct 2026) — the stone, kept whole.

   v2.1 — the record survives LearnWorlds: a stored answer loses "}}" (measured 3 Oct, see story.js v18.6), so every
     value written here puts a space between two braces in a row, and a list already cut short is mended on read.

   v2 — John's rulings of Oct 3: the stone is three lines, not one. Every
     stone keeps who it is for, what the LORD has done ("Till now, the LORD
     has…" — or, from Ending Well, the line he tapped), and what it means to
     him; the date it was set; the day the site asks him back ("What does it
     mean to you now?", three months on, then once a year); every dated
     answer he gives; and, when he has set it where others can see it, the
     review id and how his name shows. One record, every surface reads it:
     the Set a Stone page, Ending Well's last step, his page ("Your stones"),
     and the public page What These Stones Mean.
     A stone set before v2 has only the line, the date and where it came
     from. It is read as a whole stone — the other fields stay empty,
     nothing is invented, and his page shows it as it always has.
     The offer ("Set it where others can see it") rides the same review
     sheet and the same two reviewers as every published piece; "Take it
     back" removes it the same day; only agreed stones leave storage.

   v1 (2 Oct 2026) — Joshua 4: the men carried stones out of the riverbed
   and set them where they would be seen, so that when someone asked "What
   do those stones mean to you?" the answer was the story told again.

   Rides on story.js (APStory.latest, APStory._submit, APStory.signedIn,
   APStory.track). Load it after story.js. A page configures it once:

       APStone.config({ unit: "...", blocks: { whole: "...", json: "...", history: "..." }, script: "https://script.google.com/…/exec" });

   The Stones form in the storage course holds three Paragraph questions:
   whole = the stone's lines as text, json = this stone's record, history =
   every stone as a JSON array of {id, when, text, answers} — the same shape
   story.js keeps for pieces, so a page built on story.js with this form as
   its lw block (Set a Stone) writes the same list this file reads.
   ========================================================================== */
(function (window, document) {
  "use strict";
  if (window.APStone) { return; }

  var CFG = null;
  var STEM_FOR = "This stone is for";
  var STEM_MEANS = "What this stone means to me is";
  var STEM_TILL = "Till now, the LORD has";   /* Set a Stone's own line; Ending Well's stone is a line of its own */
  var MONTHS_TO_RETURN = 3;   /* the first return, three months on (John, Oct 1) */

  function story() { return window.APStory || null; }
  function cfgOk() { return !!(CFG && CFG.unit && CFG.blocks && CFG.blocks.whole && CFG.blocks.json && CFG.blocks.history); }
  function newId() { return String(Date.now()) + "-" + Math.random().toString(36).slice(2, 8); }
  function clean(t) { return String(t || "").replace(/\s+/g, " ").trim(); }
  function lwJSON(v) { return JSON.stringify(v).replace(/\}(?=\})/g, "} ").replace(/\{(?=\{)/g, "{ "); }
  function mendList(raw) {
    var s = String(raw || "").trim();
    if (!s || s.charAt(0) !== "[" || s.charAt(s.length - 1) !== "]") { return null; }
    var opens = (s.match(/\{/g) || []).length, closes = (s.match(/\}/g) || []).length;
    if (opens <= closes) { return null; }
    var fixed = s.slice(0, -1); while (opens-- > closes) { fixed += "}"; } fixed += "]";
    try { var v = JSON.parse(fixed); return Array.isArray(v) ? v : null; } catch (e) { return null; }
  }
  function parseList(raw) {
    if (!raw) { return []; }
    var v; try { v = JSON.parse(raw); } catch (e) { v = mendList(raw); if (!v) { return []; } }
    return Array.isArray(v) ? v.filter(function (e) { return e && typeof e === "object"; }) : [];
  }
  function parseReturns(raw) {
    if (!raw) { return []; }
    if (Array.isArray(raw)) { return raw; }
    var v; try { v = JSON.parse(raw); } catch (e) { return []; }
    return Array.isArray(v) ? v.filter(function (r) { return r && typeof r.text === "string" && r.text.trim(); }) : [];
  }

  /* ---- dates ---- */
  function addMonths(iso, months) {
    var d = iso ? new Date(iso) : new Date();
    if (isNaN(d.getTime())) { d = new Date(); }
    var m = d.getMonth() + months, y = d.getFullYear() + Math.floor(m / 12); m = ((m % 12) + 12) % 12;
    var day = Math.min(d.getDate(), new Date(y, m + 1, 0).getDate());
    return new Date(y, m, day, 12, 0, 0, 0);
  }
  function dayISO(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function longDate(v) {
    try { var d = v instanceof Date ? v : new Date(v); if (isNaN(d.getTime())) { return ""; } return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); } catch (e) { return ""; }
  }
  function monthYear(v) {
    try { var d = v instanceof Date ? v : new Date(v); if (isNaN(d.getTime())) { return ""; } return d.toLocaleDateString("en-US", { month: "long", year: "numeric" }); } catch (e) { return ""; }
  }
  /* the first return is three months after the stone was set; after an answer, a year on */
  function firstReturn(whenISO) { return dayISO(addMonths(whenISO, MONTHS_TO_RETURN)); }
  function nextReturn(fromISO) { return dayISO(addMonths(fromISO, 12)); }
  function isDue(st, today) {
    if (!st || !st.returnAt) { return false; }
    var t = today ? dayISO(today instanceof Date ? today : new Date(today)) : dayISO(new Date());
    return String(st.returnAt) <= t;
  }

  /* ---- the record ----
     A raw history entry (v1 or v2, from this file or from story.js) becomes
     one plain stone. Missing fields stay empty strings; nothing is invented. */
  /* a line keeps its opening words: the Set a Stone page stores what he
     typed after the grey words (story.js keeps field values as typed), so
     the stem is put back here; a line that already carries it is left alone */
  function withStem(stem, t) { t = clean(t); if (!t) { return ""; } return t.toLowerCase().indexOf(stem.toLowerCase()) === 0 ? t : stem + " " + t; }
  function normalize(e) {
    var a = (e && e.answers && typeof e.answers === "object") ? e.answers : {};
    var from = String(a.from || "");
    var text = clean(typeof a.text === "string" && a.text ? a.text : e.text);
    if (!text) { return null; }
    if (from === "set-a-stone") { text = withStem(STEM_TILL, text); }
    var when = String(e.when || "");
    var st = {
      id: String(e.id || ""),
      when: when,
      text: text,
      stonefor: withStem(STEM_FOR, a.stonefor),
      meaning: withStem(STEM_MEANS, a.meaning),
      from: String(a.from || ""),
      piece: String(a.piece || ""),
      pieceTitle: String(a.pieceTitle || ""),
      returnAt: String(a.returnAt || "") || (when ? firstReturn(when) : ""),
      returns: parseReturns(a.returns),
      rid: String(a.rid || ""),
      shown: String(a.shown || "")
    };
    return st;
  }
  /* the stone as stored: the entry shape story.js keeps */
  function toEntry(st, existing) {
    var answers = {
      text: st.text, stonefor: st.stonefor || "", meaning: st.meaning || "",
      from: st.from || "", piece: st.piece || "", pieceTitle: st.pieceTitle || "",
      returnAt: st.returnAt || "", returns: JSON.stringify(st.returns || []),
      rid: st.rid || "", shown: st.shown || ""
    };
    var entry = existing || { id: st.id || newId(), when: st.when || new Date().toISOString() };
    entry.text = st.text; entry.answers = answers;
    if (!entry.when) { entry.when = new Date().toISOString(); }
    return entry;
  }
  /* the three lines, in order, as a reader meets them; a v1 stone has one */
  function lines(st) {
    var out = [];
    if (st.stonefor) { out.push(st.stonefor); }
    out.push(st.text);
    if (st.meaning) { out.push(st.meaning); }
    return out;
  }
  function wholeText(st) { return lines(st).join("\n"); }

  /* ---- reading ---- */
  function rawList() {
    var S = story();
    if (!S || !cfgOk() || !S.signedIn()) { return window.Promise.resolve({ raw: {}, list: [] }); }
    return S.latest(CFG.unit).then(function (latest) {
      var raw = (latest && latest.answers) || {};
      return { raw: raw, list: parseList(raw[CFG.blocks.history]) };
    }).catch(function () { return { raw: {}, list: [] }; });
  }
  /* Every stone he has set, newest first. [] when none, or when he is not signed in. */
  function list() {
    return rawList().then(function (r) {
      var out = [];
      r.list.forEach(function (e) { var st = normalize(e); if (st) { out.push(st); } });
      out.sort(function (a, b) { return String(b.when || "").localeCompare(String(a.when || "")); });
      return out;
    });
  }
  /* write the whole list back; `latestSt` fills whole and json */
  function writeList(entries, latestSt) {
    var S = story();
    return S._submit(CFG.unit, [
      { blockId: CFG.blocks.whole, value: wholeText(latestSt) },
      { blockId: CFG.blocks.json, value: lwJSON(toEntry(latestSt).answers) },
      { blockId: CFG.blocks.history, value: lwJSON(entries) }
    ]);
  }

  /* ---- setting ----
     opts: { text, stonefor, meaning, from (the piece's form slug), piece
     (that piece's entry id, if it has one), pieceTitle }. A second set for
     the same piece entry replaces the first — a man who changes his mind
     before he leaves has one stone, not two. Resolves to the stone. */
  function set(opts) {
    var S = story();
    opts = opts || {};
    var text = clean(opts.text);
    if (!S || !cfgOk()) { return window.Promise.reject(new Error("stone: not configured")); }
    if (!text) { return window.Promise.reject(new Error("stone: nothing to set")); }
    if (!S.signedIn()) { return window.Promise.reject(new Error("stone: not signed in")); }
    return rawList().then(function (r) {
      var l = r.list, existing = null, i, piece = String(opts.piece || "");
      if (piece) {
        for (i = 0; i < l.length; i++) { if (l[i].answers && l[i].answers.piece === piece) { existing = l[i]; break; } }
      }
      var prev = existing ? normalize(existing) : null;
      var st = {
        id: existing ? existing.id : newId(),
        when: new Date().toISOString(),
        text: text,
        stonefor: clean(opts.stonefor),
        meaning: clean(opts.meaning),
        from: String(opts.from || ""),
        piece: piece,
        pieceTitle: String(opts.pieceTitle || ""),
        returnAt: "",
        returns: prev ? prev.returns : [],
        rid: prev ? prev.rid : "",
        shown: prev ? prev.shown : ""
      };
      st.returnAt = firstReturn(st.when);
      var entry = toEntry(st, existing);
      if (!existing) { l.push(entry); }
      return writeList(l, st).then(function () {
        try { S.track("stone_set", st.from || "stone"); } catch (e) {}
        return st;
      });
    });
  }

  /* update one stone's record in place: fn(st) edits and returns it */
  function update(id, fn) {
    var S = story();
    if (!S || !cfgOk()) { return window.Promise.reject(new Error("stone: not configured")); }
    if (!S.signedIn()) { return window.Promise.reject(new Error("stone: not signed in")); }
    return rawList().then(function (r) {
      var l = r.list, i, hit = -1;
      for (i = 0; i < l.length; i++) { if (String(l[i].id) === String(id)) { hit = i; break; } }
      if (hit < 0) { throw new Error("stone: not found"); }
      var st = normalize(l[hit]);
      if (!st) { throw new Error("stone: not found"); }
      st = fn(st) || st;
      l[hit] = toEntry(st, l[hit]);
      return writeList(l, st).then(function () { return st; });
    });
  }

  /* The return: his dated answer to "What does it mean to you now?" The
     next return is a year on from today. */
  function answer(id, text) {
    text = clean(text);
    if (!text) { return window.Promise.reject(new Error("stone: nothing to say")); }
    return update(id, function (st) {
      var now = new Date().toISOString();
      st.returns = (st.returns || []).concat([{ when: now, text: text }]);
      st.returnAt = nextReturn(now);
      return st;
    }).then(function (st) { try { story().track("stone_return", st.from || "stone"); } catch (e) {} return st; });
  }

  /* ---- the offer: set it where others can see it ----
     The same sheet, the same reviewers and the same gate as every published
     piece. The sheet is told the three lines, how his name shows, and a
     unit of "stone<id>" so each stone stands on its own in the status read. */
  function hexOf(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join(""); }
  function fnv(s, seed) { var h = seed >>> 0; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return ("00000000" + h.toString(16)).slice(-8); }
  function whoFor(id) {
    var s = "ap:" + id;
    if (window.crypto && window.crypto.subtle && window.TextEncoder) {
      try { return window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)).then(hexOf).catch(function () { return fnv(s, 2166136261) + fnv(s, 84696351); }); } catch (e) {}
    }
    return window.Promise.resolve(fnv(s, 2166136261) + fnv(s, 84696351));
  }
  function getJSON(path) {
    return window.fetch(path, { credentials: "include", headers: { "Accept": "application/json" } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  }
  var _author = null;
  function authorInfo() {
    if (_author) { return window.Promise.resolve(_author); }
    return getJSON("/api/user_stats").then(function (j) {
      var me = (j && j.me) || {};
      var a = { id: me.id || me._id || me.user_id || "", name: ((me.first_name || "") + " " + (me.last_name || "")).trim() || me.username || "", email: me.email || me.user_email || "" };
      if (a.id && a.email) { _author = a; return a; }
      return getJSON("/api/user/me").then(function (m) {
        var u = (m && m.user) || m || {};
        if (!a.id) { a.id = u.id || u._id || ""; }
        if (!a.email) { a.email = u.email || u.user_email || ""; }
        if (!a.name) { a.name = ((u.first_name || "") + " " + (u.last_name || "")).trim() || u.username || ""; }
        _author = a; return a;
      });
    });
  }
  function whoAmI() { return authorInfo().then(function (a) { return a.id ? whoFor(String(a.id)) : ""; }); }
  function unitFor(st) { return "stone" + String(st.id || "").replace(/[^A-Za-z0-9]/g, ""); }
  function titleFor(st) { return "Stone " + String(st.id || ""); }
  function send(o) {
    return window.fetch(CFG.script, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(o), credentials: "omit" })
      .then(function (r) { return r.json(); })
      .then(function (r) { if (!r || r.ok !== true) { throw { code: (r && r.error) || "failed" }; } return r; });
  }
  /* offer(st, { shown: "first" | "none" }) → the stone, with rid and shown kept on it */
  function offer(st, opts) {
    opts = opts || {};
    if (!CFG || !CFG.script) { return window.Promise.reject({ code: "no_script" }); }
    var shown = opts.shown === "first" ? "first" : "none";
    return window.Promise.all([authorInfo(), whoAmI()]).then(function (res) {
      var a = res[0], who = res[1];
      if (!who) { throw { code: "no_who" }; }
      return send({ op: "offer", who: who, key: "stone", unit: unitFor(st), name: a.name || "", attribution: shown === "first" ? "First name" : "No name",
                    title: titleFor(st), from: st.pieceTitle || "Set a Stone", email: a.email || "", testimony: wholeText(st), consent: "yes" });
    }).then(function (r) {
      return update(st.id, function (s) { s.rid = String(r.rid || ""); s.shown = shown; return s; });
    }).then(function (s) { try { story().track("stone_offer", s.from || "stone"); } catch (e) {} return s; });
  }
  /* take it back: the sheet row is withdrawn (or taken down), the record forgets the rid */
  function withdraw(st) {
    if (!CFG || !CFG.script) { return window.Promise.reject({ code: "no_script" }); }
    if (!st.rid) { return window.Promise.resolve(st); }
    return whoAmI().then(function (who) { return send({ op: "withdraw", who: who, rid: st.rid }); })
      .then(function () { return update(st.id, function (s) { s.rid = ""; s.shown = ""; return s; }); });
  }
  /* where each of his stones stands with the sheet: { "<stone id>": "offered" | "published" | "taken down" | "kept" } */
  function status() {
    if (!CFG || !CFG.script) { return window.Promise.resolve({}); }
    return whoAmI().then(function (who) {
      if (!who) { return {}; }
      return window.fetch(CFG.script + "?status=" + encodeURIComponent(who), { credentials: "omit", cache: "no-store" })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          var m = {};
          ((j && j.pieces) || []).forEach(function (p) { if (p && p.unit && /^stone/.test(p.unit)) { m[p.unit] = { state: p.state || "kept", rid: p.rid || "" }; } });
          return m;
        }).catch(function () { return {}; });
    });
  }

  /* ---- the public list: every stone that has been set where others can see it ----
     Read from the published feed (JSONP, so any page can read it). Each: the
     lines, the month, the name to show (or none). Newest first; where a stone
     was offered twice (a return line added), the newest wins. */
  function parseFeed(j) {
    var byTitle = {}, order = [];
    ((j && j.pieces) || []).forEach(function (p) {
      if (!p || !/^Stone /.test(String(p.title || ""))) { return; }
      var st = { title: String(p.title), name: String(p.name || ""), from: String(p.from || ""), at: String(p.at || ""), lines: String(p.piece || "").split(/\r?\n/).map(clean).filter(Boolean) };
      if (!st.lines.length) { return; }
      if (!byTitle[st.title]) { order.push(st.title); byTitle[st.title] = st; }
      else if (String(st.at) > String(byTitle[st.title].at)) { byTitle[st.title] = st; }
    });
    var out = order.map(function (t) { return byTitle[t]; });
    out.sort(function (a, b) { return String(b.at).localeCompare(String(a.at)); });
    return out;
  }
  function published(cb) {
    if (!CFG || !CFG.script) { return window.Promise.resolve([]); }
    return new window.Promise(function (resolve) {
      var name = "apStonesFeed" + String(Date.now()).slice(-6) + Math.floor(Math.random() * 1000);
      var done = false, s = document.createElement("script");
      function finish(list) { if (done) { return; } done = true; try { delete window[name]; } catch (e) { window[name] = undefined; } if (s.parentNode) { s.parentNode.removeChild(s); } resolve(list); }
      window[name] = function (j) { finish(parseFeed(j)); };
      s.src = CFG.script + "?feed=published&callback=" + name + "&_=" + Date.now();
      s.async = true;
      s.addEventListener("error", function () { finish([]); });
      window.setTimeout(function () { finish([]); }, 15000);
      document.head.appendChild(s);
    }).then(function (l) { if (typeof cb === "function") { cb(l); } return l; });
  }

  /* ---- drawing ----
     render(host, opts): his stones into a host element, newest first. Each
     stone: his lines (serif), then a quiet line "Month Day, Year · for …
     · from <piece>"; his dated answers under it; when the return is due, one
     box "What does it mean to you now?" with Save; the offer line. Nothing
     counted. opts.empty is the one line shown when he has none. Returns the
     promise of the list, so a page can hide the card when it is empty.
     opts.offer: false hides the offer line (a page that has no script). */
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) { n.className = cls; } if (text != null) { n.textContent = text; } return n; }
  function metaLine(st) {
    var parts = [];
    var d = longDate(st.when); if (d) { parts.push(d); }
    if (st.pieceTitle) { parts.push("from " + st.pieceTitle); }
    return parts.join(" · ");
  }
  function drawStone(st, opts, states) {
    var w = el("div", "ap-stone"); w.setAttribute("data-stone", st.id);
    var ls = lines(st);
    ls.forEach(function (t, i) { var p = el("p", "ap-stone-text" + (i === 1 || ls.length === 1 ? " ap-stone-main" : "")); p.textContent = t; w.appendChild(p); });
    w.appendChild(el("p", "ap-stone-meta", metaLine(st)));
    (st.returns || []).forEach(function (r) {
      var q = el("div", "ap-stone-return");
      q.appendChild(el("p", "ap-stone-return-when", longDate(r.when) + " · What it means to me now"));
      q.appendChild(el("p", "ap-stone-return-text", r.text));
      w.appendChild(q);
    });
    if (opts.ask !== false && isDue(st, opts.today)) {
      var ask = el("div", "ap-stone-ask");
      var lab = el("label", "ap-stone-ask-q", "What does it mean to you now?"); lab.setAttribute("for", "apStoneAsk" + st.id);
      var ta = el("textarea", "ap-stone-ask-box"); ta.id = "apStoneAsk" + st.id; ta.rows = 3; ta.setAttribute("aria-label", "What does this stone mean to you now?");
      var row = el("div", "ap-stone-ask-row");
      var btn = el("button", (opts.buttonClass || "") + " ap-stone-ask-save", "Save"); btn.type = "button";
      var note = el("p", "ap-stone-ask-note", "");
      row.appendChild(btn);
      ask.appendChild(lab); ask.appendChild(ta); ask.appendChild(row); ask.appendChild(note);
      btn.addEventListener("click", function () {
        var t = clean(ta.value); if (!t) { note.textContent = "Say it in a few words, then Save."; return; }
        btn.disabled = true; note.textContent = "Saving…";
        answer(st.id, t).then(function (s) {
          note.textContent = "Saved. We will ask again on " + longDate(s.returnAt + "T12:00:00") + ".";
          ask.parentNode.replaceChild(drawStone(s, opts, states), w);
          if (s.rid && opts.offer !== false) { offerReturnLine(s, w, opts); }
        }).catch(function () { btn.disabled = false; note.textContent = "It did not save. Your words are still here — try again."; });
      });
      w.appendChild(ask);
    }
    if (opts.offer !== false && CFG && CFG.script) { w.appendChild(offerLine(st, opts, states)); }
    return w;
  }
  /* the offer line under a stone: Set it where others can see it → how your name shows → Set it; or where it stands + Take it back */
  function offerLine(st, opts, states) {
    var box = el("div", "ap-stone-offer");
    var state = (states && states[unitFor(st)] && states[unitFor(st)].state) || (st.rid ? "offered" : "");
    if (state === "published" || state === "offered") {
      box.appendChild(el("p", "ap-stone-offer-state", state === "published" ? "Where others can see it." : "Offered. Read by our team before it goes up."));
      var back = el("button", "ap-stone-offer-back", "Take it back"); back.type = "button";
      back.addEventListener("click", function () {
        back.disabled = true;
        withdraw(st).then(function () { box.innerHTML = ""; box.appendChild(el("p", "ap-stone-offer-state", "Taken back. It is yours alone again.")); })
          .catch(function () { back.disabled = false; });
      });
      box.appendChild(back);
      return box;
    }
    var open = el("button", "ap-stone-offer-open", "Set it where others can see it"); open.type = "button";
    var panel = el("div", "ap-stone-offer-panel"); panel.style.display = "none";
    panel.appendChild(el("p", "ap-stone-offer-what", "Your three lines, your first name or no name, and the month. Nothing else. You can take it back any time."));
    var choice = el("div", "ap-stone-offer-choice");
    var idA = "apStoneFirst" + st.id, idB = "apStoneNone" + st.id;
    function radio(id, val, label, checked) {
      var l = el("label", "ap-stone-offer-radio"); var r = document.createElement("input"); r.type = "radio"; r.name = "apStoneShown" + st.id; r.value = val; r.id = id; r.checked = !!checked;
      l.appendChild(r); l.appendChild(document.createTextNode(" " + label)); return l;
    }
    choice.appendChild(radio(idA, "first", "First name", false));
    choice.appendChild(radio(idB, "none", "No name", true));
    panel.appendChild(choice);
    var go = el("button", (opts.buttonClass || "") + " ap-stone-offer-go", "Set it"); go.type = "button";
    var note = el("p", "ap-stone-offer-note", "");
    panel.appendChild(go); panel.appendChild(note);
    open.addEventListener("click", function () { panel.style.display = panel.style.display === "none" ? "" : "none"; });
    go.addEventListener("click", function () {
      var shown = document.getElementById(idA) && document.getElementById(idA).checked ? "first" : "none";
      go.disabled = true; note.textContent = "Offering…";
      offer(st, { shown: shown }).then(function (s) {
        box.innerHTML = ""; box.appendChild(offerLine(s, opts, { }));
        var p = box.querySelector(".ap-stone-offer-state"); if (p) { p.textContent = "Offered. Read by our team before it goes up."; }
      }).catch(function (e) {
        go.disabled = false;
        note.textContent = (e && e.code === "no_who") ? "We couldn’t tell who you are just now. Sign out, sign in, and try again." : "It did not go through. Nothing was sent — try again.";
      });
    });
    box.appendChild(open); box.appendChild(panel);
    return box;
  }
  /* after a return answer on a stone others can see: ask once, default no */
  function offerReturnLine(st, host, opts) {
    var box = el("div", "ap-stone-offer ap-stone-offer-return");
    box.appendChild(el("p", "ap-stone-offer-what", "Add this line where others can see it?"));
    var yes = el("button", "ap-stone-offer-open", "Yes, add it"); yes.type = "button";
    var no = el("button", "ap-stone-offer-back", "No"); no.type = "button";
    var note = el("p", "ap-stone-offer-note", "");
    yes.addEventListener("click", function () {
      yes.disabled = true; no.disabled = true; note.textContent = "Offering…";
      var text = wholeText(st) + "\n" + longDate(st.returns[st.returns.length - 1].when) + " · What it means to me now: " + st.returns[st.returns.length - 1].text;
      window.Promise.all([authorInfo(), whoAmI()]).then(function (res) {
        var a = res[0], who = res[1]; if (!who) { throw { code: "no_who" }; }
        return send({ op: "offer", who: who, key: "stone", unit: unitFor(st), name: a.name || "", attribution: st.shown === "first" ? "First name" : "No name",
                      title: titleFor(st), from: st.pieceTitle || "Set a Stone", email: a.email || "", testimony: text, consent: "yes" });
      }).then(function (r) { return update(st.id, function (s) { s.rid = String(r.rid || s.rid || ""); return s; }); })
        .then(function () { note.textContent = "Offered. Read by our team before it goes up."; })
        .catch(function () { yes.disabled = false; no.disabled = false; note.textContent = "It did not go through. Nothing was sent — try again."; });
    });
    no.addEventListener("click", function () { if (box.parentNode) { box.parentNode.removeChild(box); } });
    box.appendChild(yes); box.appendChild(no); box.appendChild(note);
    var target = host.querySelector(".ap-stone-ask") || host;
    (host.parentNode ? host : target).appendChild(box);
  }
  /* one stone's offer line into a host (a piece page after Save) */
  function offerUI(host, st, opts) {
    if (!host || !st) { return; }
    host.innerHTML = "";
    if (!CFG || !CFG.script) { return; }
    host.appendChild(offerLine(st, opts || {}, {}));
  }
  function render(host, opts) {
    opts = opts || {};
    if (!host) { return window.Promise.resolve([]); }
    var statesP = (opts.offer !== false && CFG && CFG.script) ? status() : window.Promise.resolve({});
    return window.Promise.all([list(), statesP]).then(function (res) {
      var l = res[0], states = res[1];
      host.innerHTML = "";
      if (!l.length) {
        if (opts.empty) { host.appendChild(el("p", "ap-stone-empty", opts.empty)); }
        return l;
      }
      l.forEach(function (st) { host.appendChild(drawStone(st, opts, states)); });
      return l;
    });
  }
  /* the public page's stones into a host: lines (serif), then "Month Year · Name" or "Month Year" */
  function renderPublished(host, opts) {
    opts = opts || {};
    if (!host) { return window.Promise.resolve([]); }
    return published().then(function (l) {
      host.innerHTML = "";
      var shown = opts.limit ? l.slice(0, opts.limit) : l;
      if (!shown.length) { if (opts.empty) { host.appendChild(el("p", "ap-stone-empty", opts.empty)); } return l; }
      shown.forEach(function (st) {
        var w = el("div", "ap-stone ap-stone-public");
        st.lines.forEach(function (t, i) { var p = el("p", "ap-stone-text" + (i === 1 || st.lines.length === 1 ? " ap-stone-main" : "")); p.textContent = t; w.appendChild(p); });
        w.appendChild(el("p", "ap-stone-meta", [monthYear(st.at), st.name].filter(Boolean).join(" · ")));
        host.appendChild(w);
      });
      return l;
    });
  }

  window.APStone = {
    version: "2.1",
    config: function (c) { CFG = c || null; return cfgOk(); },
    configured: cfgOk,
    set: set,
    list: list,
    answer: answer,
    offer: offer,
    withdraw: withdraw,
    status: status,
    published: published,
    render: render,
    renderPublished: renderPublished,
    offerUI: offerUI,
    lines: lines,
    wholeText: wholeText,
    isDue: isDue,
    firstReturn: firstReturn,
    nextReturn: nextReturn,
    longDate: longDate,
    stems: { stonefor: STEM_FOR, text: STEM_TILL, meaning: STEM_MEANS },
    _normalize: normalize,
    _toEntry: toEntry,
    _parse: parseList,
    _unitFor: unitFor,
    _parseFeed: parseFeed
  };
})(window, document);
