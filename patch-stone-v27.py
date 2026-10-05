#!/usr/bin/env python3
"""stone.js v2.7 — the stone has a name (John, Oct 5: a name box after the three lines, one word or two, as Samuel named his
Help). The record carries `name`; stoneName(st) is the name when there is one (the old reading of the third line stays
for stones set before v2.7); the name heads the stone wherever it is drawn (.ap-stone-name — his page, the public page)
and the return asks by it. An offered stone carries its name as its first line; the public page reads a four-line
testimony as name + three lines."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'stone.js'); s = open(p, encoding='utf-8').read()
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (a[:70], s.count(a))
    s = s.replace(a, b)
rep('   AP-STONE-v2.6 (4 Oct 2026) — the stone, kept whole.\n\n',
    '''   AP-STONE-v2.7 (5 Oct 2026) — the stone, kept whole.

   v2.7 — the stone has a name (John, Oct 5). The record carries name; stoneName() is the name when there is one (a
     stone set before v2.7 keeps the old reading of its third line); the name heads the stone wherever it is drawn
     (.ap-stone-name) and the return asks by it. An offered stone carries its name as its first line, and the public
     page reads a short first line that is not one of the stone's own lines as the name.

''')
rep('''      stonefor: withStem(STEM_FOR, a.stonefor),
      meaning: withStem(STEM_MEANS, a.meaning),
      from: String(a.from || ""),
      piece: String(a.piece || ""),''',
'''      stonefor: withStem(STEM_FOR, a.stonefor),
      meaning: withStem(STEM_MEANS, a.meaning),
      name: clean(a.name),
      from: String(a.from || ""),
      piece: String(a.piece || ""),''')
rep('''      text: st.text, stonefor: st.stonefor || "", meaning: st.meaning || "",
      from: st.from || "",''',
'''      text: st.text, stonefor: st.stonefor || "", meaning: st.meaning || "", name: st.name || "",
      from: st.from || "",''')
rep('''        meaning: clean(opts.meaning),
        from: String(opts.from || ""),
        piece: piece,''',
'''        meaning: clean(opts.meaning),
        name: clean(opts.name),
        from: String(opts.from || ""),
        piece: piece,''')
rep('''  function stoneName(st) {
    var m = String((st && st.meaning) || "").trim(); if (!m) { return ""; }''',
'''  function stoneName(st) {
    if (st && st.name) { return String(st.name).trim(); }
    var m = String((st && st.meaning) || "").trim(); if (!m) { return ""; }''')
# the name heads the stone on his page
rep('''    var w = el("div", "ap-stone"); w.setAttribute("data-stone", st.id);
    var ls = lines(st);''',
'''    var w = el("div", "ap-stone"); w.setAttribute("data-stone", st.id);
    if (st.name) { w.appendChild(el("p", "ap-stone-name", st.name)); }
    var ls = lines(st);''')
# the offered text carries the name first
rep('testimony: wholeText(st), consent: "yes" });', 'testimony: (st.name ? st.name + "\\n" : "") + wholeText(st), consent: "yes" });')
# the public page: four lines = name + three
rep('''      var st = { title: String(p.title), name: String(p.name || ""), from: String(p.from || ""), at: String(p.at || ""), lines: String(p.piece || "").split(/\\r?\\n/).map(clean).filter(Boolean) };
      if (!st.lines.length) { return; }''',
'''      var st = { title: String(p.title), name: String(p.name || ""), from: String(p.from || ""), at: String(p.at || ""), lines: String(p.piece || "").split(/\\r?\\n/).map(clean).filter(Boolean), stoneName: "" };
      if (!st.lines.length) { return; }
      /* v2.7: a named stone is offered with its name first — a short first line that is not one of the stone\'s own lines */\n      if (st.lines.length >= 2 && st.lines[0].split(/\\s+/).length <= 4 && !/^(this stone is for|the lord has|till now|what this stone means|what god did)/i.test(st.lines[0])) { st.stoneName = st.lines[0]; st.lines = st.lines.slice(1); }''')
rep('''        var w = el("div", "ap-stone ap-stone-public");
        st.lines.forEach(''',
'''        var w = el("div", "ap-stone ap-stone-public");
        if (st.stoneName) { w.appendChild(el("p", "ap-stone-name", st.stoneName)); }
        st.lines.forEach(''')
rep('    version: "2.6",', '    version: "2.7",')
open(p, 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('stone.js', len(b), 'bytes · sha256', hashlib.sha256(b).hexdigest())
