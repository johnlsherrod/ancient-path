#!/usr/bin/env python3
"""stone.js v2.6 — the return asks by name (John, Oct 4: "They should know what it means today… How has faithfulness (a name
of a stone) changed in your life these last three months"; then: "the stone won't change his life… their relationship with
God will. It's a reminder not an idol."). The word on his third line is the stone's name, as Samuel's was Help. On the day a
return is due the question is "You named this stone ‹name›. What has the LORD done in you since?" (no name on the stone →
the question alone). A kept answer is headed "What the LORD has done since"."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'stone.js'); s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, a[:70]
    s = s.replace(a, b)
rep('   AP-STONE-v2.5 (4 Oct 2026) — the stone, kept whole.\n\n',
    '''   AP-STONE-v2.6 (4 Oct 2026) — the stone, kept whole.

   v2.6 — the return asks by name (John, Oct 4). The word on his third line is the stone's name, as Samuel's was Help;
     on the day a return is due the question reads "You named this stone ‹name›. What has the LORD done in you since?"
     — the stone reminds, the LORD does the changing ("a reminder, not an idol"). A kept answer is headed "What the
     LORD has done since". A stone with no third line gets the question alone.

''')
rep('''  var RETURN_LEAD = "Three months on. Come back to the\\u00a0stone.";''',
    '''  var RETURN_LEAD = "Three months on. Come back to the\\u00a0stone.";
  var RETURN_ASK = "What has the LORD done in you\\u00a0since?";
  var RETURN_HEAD = "What the LORD has done since";''')
rep('''  function wholeText(st) { return lines(st).join("\\n"); }''',
    '''  function wholeText(st) { return lines(st).join("\\n"); }
  /* v2.6 — the stone's name: the word on his third line, without the stem, to the first full stop, at most eight words */
  function stoneName(st) {
    var m = String((st && st.meaning) || "").trim(); if (!m) { return ""; }
    if (m.toLowerCase().indexOf(STEM_MEANS.toLowerCase()) === 0) { m = m.slice(STEM_MEANS.length); }
    m = m.replace(/^[\\s:,\\-–—]+/, "").split(/[.!?]/)[0].trim().replace(/[,;:]$/, "");
    var w = m.split(/\\s+/).filter(Boolean); if (w.length > 8) { w = w.slice(0, 8); }
    return w.join(" ");
  }
  function returnQuestion(st) { var n = stoneName(st); return n ? "You named this stone " + n + ". " + RETURN_ASK : RETURN_ASK; }''')
rep('q.appendChild(el("p", "ap-stone-return-when", longDate(r.when) + " · What it means to me now"));',
    'q.appendChild(el("p", "ap-stone-return-when", longDate(r.when) + " · " + RETURN_HEAD));')
rep('var lab = el("label", "ap-stone-ask-q", "What does it mean to you now?"); lab.setAttribute("for", "apStoneAsk" + st.id);',
    'var lab = el("label", "ap-stone-ask-q", returnQuestion(st)); lab.setAttribute("for", "apStoneAsk" + st.id);')
rep('ta.setAttribute("aria-label", "What does this stone mean to you now?");', 'ta.setAttribute("aria-label", returnQuestion(st));')
rep('" · What it means to me now: " + st.returns[st.returns.length - 1].text;', '" · " + RETURN_HEAD + ": " + st.returns[st.returns.length - 1].text;')
rep('    version: "2.5",', '    version: "2.6",')
rep('    lines: lines,', '    lines: lines,\n    stoneName: stoneName,\n    returnQuestion: returnQuestion,')
open(p, 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('stone.js', len(b), 'bytes · sha256', hashlib.sha256(b).hexdigest())
