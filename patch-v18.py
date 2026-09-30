# story.js v18 — the finish, reshaped (John, Sept 29: "what if I want to edit what I'm reading?"). Runs on the v17.1 story.js.
import hashlib, base64
s = open('story.js').read()
def rep(old, new, n=1):
    global s
    assert s.count(old) == n, ('count', s.count(old), old[:90])
    s = s.replace(old, new)

rep('   AP-STORY-MODULE-v17.1\n', '''   AP-STORY-MODULE-v18

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
''')

# ---- the tiers ----
rep('''  /* the finish: slot → tier order. 5 saved + what's left (after a save) · 8 the ⓘ line · 10 Read it back · 15 break · 16 results and the walk · 17 Now that it's written (v15) · 20 Save · 21 Your page · 25 break · 30 the quiet things */
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
  }''',
'''  /* the finish, v18: 5 saved + what's left · 6 Edit · 7 Save · 10 break · 11 the ⓘ line · 12 the quiet line (Read it back · Hear it · Five questions) · 16 results and the walk · 17 the five cards · 21 Your page · 25 break · 30 the quiet things (Print · Copy · Save image · Edit the whole thing) */
  function finishOrder(node, slot) {
    if (node.classList.contains("aps-status")) { return 5; }
    if (node.classList.contains("aps-edit-main")) { return 6; }
    if (node.classList.contains("aps-assist")) { return 11; }
    if (node.classList.contains("aps-act")) { return 12; }
    if (node.classList.contains("aps-read")) { return 16; }
    if (node.classList.contains("aps-after")) { return 12; }
    if (node.classList.contains("aps-break")) { return node.getAttribute("data-at") === "a" ? 10 : 25; }
    if (slot === 8) { return 12; }
    if (slot === 4) { return 7; }
    if (slot === 6) { return 21; }
    return 30;
  }''')

# Edit: the page's own way back to its questions becomes the button beside Save, in Save's clothes; other back/edit controls stay quiet
rep('''    for (var i = 0; i < row.children.length; i++) {
      var c = row.children[i];
      if (c.tagName === "BUTTON" && /^save and stop/i.test((c.textContent || "").trim())) { c.textContent = "Save"; }''',
'''    if (finish && !row.querySelector(".aps-edit-main")) {
      /* v18: the first of the page's own Back / Edit controls (never the engine's Edit the whole thing) is the Edit button, beside Save */
      var saveBtn = null, editBtn = null;
      for (var e0 = 0; e0 < row.children.length; e0++) { var cb = row.children[e0]; if (cb.tagName !== "BUTTON") { continue; } var sl0 = slotFor(cb); if (sl0 === 4 && !saveBtn) { saveBtn = cb; } if (sl0 === 1 && !editBtn && cb.id !== "apsEdit") { editBtn = cb; } }
      if (editBtn) { editBtn.classList.add("aps-edit-main"); editBtn.setAttribute("data-aps-label", editBtn.textContent); editBtn.textContent = "Edit"; if (saveBtn) { editBtn.className = saveBtn.className + " aps-edit-main"; } }
    }
    for (var i = 0; i < row.children.length; i++) {
      var c = row.children[i];
      if (c.tagName === "BUTTON" && /^save and stop/i.test((c.textContent || "").trim())) { c.textContent = "Save"; }''')

# the reading tools sit on one quiet line: their buttons as quiet links, their "what" text only on a desk
# the quiet line's look lives in oneRow's style, which every page gets (the assistant's block only comes with a reader)
rep('''        "@media print{.aps-row{position:static}}";''',
'''        /* v18: the quiet line: Read it back, Hear it, Five questions read as links, not buttons; on a phone the words beside them come off */
        ".aps-row.aps-finish > .aps-act{flex:0 1 auto;display:flex;align-items:center;gap:10px;margin:0 18px 0 0}.aps-row.aps-finish .aps-act-what{font-size:13.5px;line-height:1.4;color:#6B6358;max-width:40ch}.aps-row.aps-finish > .aps-act > button{flex:0 0 auto;order:0}" +
        ".aps-row.aps-finish > .aps-act > button,.aps-row.aps-finish .aps-after .aps-after-open{background:none!important;border:0!important;box-shadow:none!important;padding:0!important;min-height:0!important;height:auto!important;font-size:15px!important;font-weight:600!important;color:#8C6A3F!important;text-decoration:underline;text-underline-offset:3px;cursor:pointer;border-radius:0!important;width:auto!important}" +
        ".aps-row.aps-finish > .aps-act > button:hover,.aps-row.aps-finish .aps-after .aps-after-open:hover{color:#1F2A44!important}" +
        ".aps-row.aps-finish .aps-after{flex:0 1 auto;width:auto;margin:0}.aps-row.aps-finish .aps-after .aps-after-row{margin:0;display:flex;align-items:center;gap:10px;flex-wrap:wrap}.aps-row.aps-finish .aps-after .aps-after-what{font-size:13.5px;color:#6B6358;max-width:40ch}.aps-row.aps-finish .aps-after > .aps-after-card,.aps-row.aps-finish .aps-after > .aps-after-done,.aps-row.aps-finish .aps-after > .aps-note:not(.aps-after-row){flex:1 1 100%}" +
        "@media (max-width:620px){.aps-row.aps-finish .aps-act-what,.aps-row.aps-finish .aps-after .aps-after-what{display:none}.aps-row.aps-finish > .aps-act{margin-right:14px;flex:0 1 auto}}" +
        ".aps-row.aps-finish > .aps-edit-main{order:6}" +
        "@media print{.aps-row{position:static}}";''')

# Five questions: the button says what it does
rep('''      var b = el("button", "aps-after-open", wasDone ? "Go through them again" : "Now that it\\u2019s written"); b.type = "button";''',
    '''      var b = el("button", "aps-after-open", wasDone ? "Go through them again" : "Five questions"); b.type = "button";''')
rep('''      var onward = $("apsAfter") && $("apsAfter").querySelector(".aps-after-open") ? " Next: Now that it\\u2019s written, below." : "";''',
    '''      var onward = $("apsAfter") && $("apsAfter").querySelector(".aps-after-open") ? " Next: the five questions, below." : "";''')

# on a phone, going to a line's box opens that question
rep('''    var land = function () {
      try { best.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {}''',
'''    var land = function () {
      try { if (self._oneQuestion && self._oneQuestion.show) { self._oneQuestion.show(best); } } catch (e) {}
      try { best.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {}''')
rep('''  Story.prototype.bring = function (best, cb) {
    var boxes = this.boxes();''', '''  Story.prototype.bring = function (best, cb) {
    var self = this, boxes = this.boxes();''')
rep('''    this._oneQuestion = { off: function () { on = false; paint(null); }, groups: groups };''',
    '''    this._oneQuestion = { off: function () { on = false; paint(null); }, groups: groups, show: function (node) { if (!on) { return; } for (var i = 0; i < groups.length; i++) { if (groups[i].box === node || groups[i].box.contains(node)) { paint(groups[i]); return; } } } };''')

# Tap any line to change it
rep('''  Story.prototype.mountVoice = function () {''',
'''  /* ======================================================================
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
    var lines = doc.split("\\n").map(function (l) { return l.replace(/\\s+/g, " ").trim(); }).filter(function (l) { return l.length >= 4; });
    if (!lines.length) { return null; }
    /* the piece holds its first line and its last: the smallest such element (a single line's own element holds only one) */
    var first = lines[0].toLowerCase(), last = lines[lines.length - 1].toLowerCase();
    var best = null, all = root.querySelectorAll("p,div,blockquote,pre,section,article");
    for (var i = 0; i < all.length; i++) {
      var e = all[i]; if (e.querySelector("input,textarea,button,select")) { continue; }
      if (e.classList.contains("aps-read") || e.classList.contains("aps-after") || e.classList.contains("aps-row")) { continue; }
      var t = (e.textContent || "").replace(/\\s+/g, " ").toLowerCase();
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
      if (/\\n/.test(text)) { var upto = text.slice(0, off), ln = upto.split("\\n").length - 1; text = text.split("\\n")[ln] || ""; }
      else if (node.nodeType !== 3) { text = (node.textContent || "").split("\\n")[0]; }
      return String(text).replace(/\\s+/g, " ").trim();
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
      if (!line && e.target !== piece) { line = (e.target.textContent || "").split("\\n")[0].trim(); }
      if (!line) { return; }
      self.goToLine(line);
    });
    var n = 0, iv = window.setInterval(function () { dress(); if (++n > 20) { window.clearInterval(iv); } }, 1200);
    dress();
    return true;
  };

  Story.prototype.mountVoice = function () {''')
rep('''    this.holdTyping();         /* v7 */
    this.oneRow();             /* v7 */
    this.foldClosing();        /* v10 */
    this.mountVoice();         /* v17 */
    this.oneQuestion();        /* v17 */
    this.mountHandoff();       /* v17 */
    return true;
  };''', '''    this.holdTyping();         /* v7 */
    this.mountVoice();         /* v17 · before oneRow, so Hear it takes its tier */
    this.oneRow();             /* v7 */
    this.foldClosing();        /* v10 */
    this.oneQuestion();        /* v17 */
    this.mountHandoff();       /* v17 */
    this.mountTapLines();      /* v18 */
    return true;
  };''')
rep('    version: "17.1",\n', '    version: "18",\n')
open('story.js', 'w').write(s)
b = open('story.js', 'rb').read()
print('story.js', len(b), 'bytes', 'sha384-' + base64.b64encode(hashlib.sha384(b).digest()).decode())
