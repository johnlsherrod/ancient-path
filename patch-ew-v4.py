#!/usr/bin/env python3
"""Ending Well v4 from v3 (ew-body.html in place, then build-ew.py → ending-well-v4.html): the stone kept whole.
John, Oct 3: every stone has three lines, and Ending Well's stone is offered the same way as Set a Stone's.
- a third line on the stone step, "What this stone means to me is", with the six meanings and where each comes from
- the stone goes to the record with who it is for and what it means (stone.js v2 set with stonefor + meaning)
- after Save, the stone box carries "Set it where others can see it" (stone.js v2 offerUI)
- the finished story's "The stone I set" carries the meaning line; the count is 28
Every needle must match exactly once."""
import os, re
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'ew-body.html')
out = open(p).read()
assert out.startswith('<!-- AP-EW-v3 (v3, 3 Oct 2026:'), out[:40]

def rep(old, new, n=1):
    global out
    assert out.count(old) == n, (out.count(old), old[:90])
    out = out.replace(old, new)

rep('<!-- AP-EW-v3 (v3, 3 Oct 2026:',
    '<!-- AP-EW-v4 (v4, 3 Oct 2026: the stone kept whole — a third line on the stone, "What this stone means to me is", with the meanings and where each comes from in Scripture; the stone goes to his page with who it is for and what it means; after Save the stone box offers "Set it where others can see it", first name or no name, the same offer Set a Stone makes; the finished story carries the meaning line; 28 lines) (v3, 3 Oct 2026:')

# the meanings, after the roles
rep('''  var STONE_FOR = ["my son", "my daughter", "my wife", "a friend", "a man I walk with", "my group", "the man I was", "myself, a year from now", "someone who will ask one day"];''',
    '''  var STONE_FOR = ["my son", "my daughter", "my wife", "a friend", "a man I walk with", "my group", "the man I was", "myself, a year from now", "someone who will ask one day"];
  /* what a stone can mean — John's five (Oct 2) and Samuel's, each with the place in Scripture it comes from (ESV) */
  var MEANS = [
    { w: "a rescue", where: "Samuel’s stone — “Till now the LORD has helped us.” 1 Samuel 7:12" },
    { w: "a new discipline", where: "Daniel, on his knees three times a day, as he had done before. Daniel 6:10" },
    { w: "more hope", where: "“But this I call to mind, and therefore I have hope.” Lamentations 3:21" },
    { w: "growth in faith", where: "“I believe; help my unbelief!” Mark 9:24" },
    { w: "capacity to love", where: "“We love because he first loved us.” 1 John 4:19" },
    { w: "a sacrifice", where: "Abraham named the place “The LORD will provide.” Genesis 22:14" }
  ];''')

# the third line on the stone step
rep('''        { key: "stonefor", stem: "This stone is for", prompt: "Naming well is a skill. Name the one this is for, and you will name other things well too.", ex: "This stone is for my son, for when he asks.", words: STONE_FOR }
      ] }''',
    '''        { key: "stonefor", stem: "This stone is for", prompt: "Naming well is a skill. Name the one this is for, and you will name other things well too.", ex: "This stone is for my son, for when he asks.", words: STONE_FOR },
        { key: "meaning", stem: "What this stone means to me is", prompt: "Pick one to see where it comes from, or write your own.", ex: "What this stone means to me is a new discipline: I do the next right thing.", words: MEANS.map(function (m) { return m.w; }), where: MEANS }
      ] }''')

# John's example for the meaning line (his to confirm — a stand-in until he writes it)
rep('''    stonefor: "This stone is for those who chose the same path.",''',
    '''    stonefor: "This stone is for those who chose the same path.",
    meaning: "What this stone means to me is a new discipline: surrender, every day.",''')

# the where-line under the meanings row, and its update on tap or typing
rep('''      if (s.words) { box.appendChild(wordRow(s, inp)); if (s.rowNote) { var rn = document.createElement("p"); rn.className = "ew-row-note"; rn.textContent = s.rowNote; box.appendChild(rn); } }
      wrap.appendChild(box);
      inp.addEventListener("input", function () { grow(inp); edited = null; if (s.own && val("stone")) { stonePick = null; paintStonePick(); } render(); });''',
    '''      if (s.words) { box.appendChild(wordRow(s, inp)); if (s.rowNote) { var rn = document.createElement("p"); rn.className = "ew-row-note"; rn.textContent = s.rowNote; box.appendChild(rn); } if (s.where) { var wh = document.createElement("p"); wh.className = "ew-row-note"; wh.id = "ewWhere_" + s.key; wh.textContent = ""; box.appendChild(wh); } }
      wrap.appendChild(box);
      inp.addEventListener("input", function () { grow(inp); edited = null; if (s.own && val("stone")) { stonePick = null; paintStonePick(); } if (s.where) showWhere(s); render(); });''')
rep('''  function stoneFor(A) {''',
    '''  /* v4: under the meanings row, where the picked meaning comes from */
  function showWhere(s) {
    var p = $("ewWhere_" + s.key); if (!p) return;
    var v = val(s.key).toLowerCase(), hit = null;
    s.where.forEach(function (m) { if (v && v.indexOf(m.w) === 0) hit = m; });
    p.textContent = hit ? hit.w + " — " + hit.where : "";
  }
  function stoneMeaning(A) { var a = A || {}; var v = a.meaning != null ? String(a.meaning) : val("meaning"); var s = ALL.filter(function (x) { return x.key === "meaning"; })[0]; return s ? lineFor(s, v) : ""; }
  window.ewStoneFor = function () { return stoneFor(); }; window.ewStoneMeaning = function () { return stoneMeaning(); };
  function stoneFor(A) {''')

# the finished text, the finished view, the stone box: the meaning line after who it is for
rep('''var sn = stoneText(A); if (sn) { out += "\\n\\nThe stone I set\\n" + sn; var sf = stoneFor(A); if (sf) out += "\\n" + sf; } return out; }''',
    '''var sn = stoneText(A); if (sn) { out += "\\n\\nThe stone I set\\n" + sn; var sf = stoneFor(A); if (sf) out += "\\n" + sf; var sm = stoneMeaning(A); if (sm) out += "\\n" + sm; } return out; }''')
rep('''sp.textContent = sn + (stoneFor() ? "\\n" + stoneFor() : ""); host.appendChild(sp); }''',
    '''sp.textContent = sn + (stoneFor() ? "\\n" + stoneFor() : "") + (stoneMeaning() ? "\\n" + stoneMeaning() : ""); host.appendChild(sp); }''')
rep('''$("ewStoneText").textContent = sn + (stoneFor() ? "\\n" + stoneFor() : "");''',
    '''$("ewStoneText").textContent = sn + (stoneFor() ? "\\n" + stoneFor() : "") + (stoneMeaning() ? "\\n" + stoneMeaning() : "");''')

# the count
rep('<span id="ewCount">0 of 27 written</span>', '<span id="ewCount">0 of 28 written</span>')

# the stone box: a place for the offer, and the offer's styles
rep('''      <p class="ew-stone-note" id="ewStoneNote" style="white-space:pre-line">It is set on your page when you save.</p>
    </div>''',
    '''      <p class="ew-stone-note" id="ewStoneNote" style="white-space:pre-line">It is set on your page when you save.</p>
      <div class="ew-stone-offer" id="ewStoneOffer"></div>
    </div>''')
rep('''.ew-stone-note{font:400 14px/1.5 var(--e-sans);color:var(--e-quiet);margin:6px 0 0}''',
    '''.ew-stone-note{font:400 14px/1.5 var(--e-sans);color:var(--e-quiet);margin:6px 0 0}
.ew-stone-offer{margin:12px 0 0}
.ew-root .ap-stone-offer-open,.ew-root .ap-stone-offer-back{font:600 15px/1.4 var(--e-sans) !important;color:#8C6A3F !important;background:none !important;border:0 !important;padding:0 !important;text-decoration:underline;text-underline-offset:3px;cursor:pointer}
.ew-root .ap-stone-offer-open:hover,.ew-root .ap-stone-offer-back:hover{color:var(--e-navy) !important}
.ew-root .ap-stone-offer-panel{margin:10px 0 0;padding:12px 14px;border:1px solid var(--e-rule);background:#fff}
.ew-root .ap-stone-offer-what,.ew-root .ap-stone-offer-state,.ew-root .ap-stone-offer-note{font:400 15px/1.5 var(--e-sans);color:var(--e-quiet);margin:0 0 8px}
.ew-root .ap-stone-offer-state{color:var(--e-ink)}
.ew-root .ap-stone-offer-choice{display:flex;gap:18px;margin:0 0 12px}
.ew-root .ap-stone-offer-radio{font:400 15px/1.4 var(--e-sans);color:var(--e-ink);display:inline-flex;align-items:center;gap:6px;cursor:pointer}
.ew-root .ap-stone-offer-radio input{display:inline-block !important;appearance:auto;-webkit-appearance:radio;width:16px;height:16px;margin:0;accent-color:var(--e-navy)}
.ew-root .ap-stone-offer-go{margin:0 12px 0 0}''')

# the set: the whole stone to the record; then the offer
rep('''              window.APStone.set({ text: text, from: "ending-well", piece: inst.openEntryId || "", pieceTitle: "Ending Well" })
                .then(function () { if (typeof window.ewStoneSet === "function") window.ewStoneSet(); if (note) note.textContent = "Set on your page. On " + (typeof window.ewReturnDate === "function" ? window.ewReturnDate() : "the day three months from now") + " we will ask you what it means to you."; })''',
    '''              window.APStone.set({ text: text, stonefor: typeof window.ewStoneFor === "function" ? window.ewStoneFor() : "", meaning: typeof window.ewStoneMeaning === "function" ? window.ewStoneMeaning() : "", from: "ending-well", piece: inst.openEntryId || "", pieceTitle: "Ending Well" })
                .then(function (st) {
                  if (typeof window.ewStoneSet === "function") window.ewStoneSet();
                  if (note) note.textContent = "Set on your page. On " + (typeof window.ewReturnDate === "function" ? window.ewReturnDate() : "the day three months from now") + " we will ask you what it means to you.";
                  var oh = document.getElementById("ewStoneOffer");
                  if (oh && st && typeof window.APStone.offerUI === "function") window.APStone.offerUI(oh, st, { buttonClass: "ew-btn ew-btn-primary" });
                })''')

# the config: stone.js v2 reaches the review sheet
rep('''  var STONES = { unit: "{{STONES_UNIT}}", blocks: { whole: "{{STONES_WHOLE}}", json: "{{STONES_JSON}}", history: "{{STONES_HISTORY}}" } };''',
    '''  var STONES = { unit: "{{STONES_UNIT}}", blocks: { whole: "{{STONES_WHOLE}}", json: "{{STONES_JSON}}", history: "{{STONES_HISTORY}}" }, script: "{{REVIEW_SCRIPT}}" };''')
rep('''  /* AP-EW-CONFIG-v1 — the shared save (story.js v18.4) and the stone (stone.js v1), both pinned by commit and integrity hash. */''',
    '''  /* AP-EW-CONFIG-v2 — the shared save (story.js v18.5) and the stone (stone.js v2), both pinned by commit and integrity hash. */''')

open(p, 'w').write(out)
print('ew-body.html patched to v4')
