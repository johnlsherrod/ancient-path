#!/usr/bin/env python3
"""stone.js v2.4 — the return has its ground (John, Oct 4: "the spiritual remedy is to return to Gilgal (root meaning: to
roll or circle) — to revisit the foundation, roll away the accumulated shame… and renew the Kingdom"; "Gilgal is common for
Joshua and Samuel"). On the day a return is due, above "What does it mean to you now?": "Three months on. Come back to the
stone." and the Gilgal line. Nothing else moves."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'stone.js'); s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, a[:70]
    s = s.replace(a, b)
rep('   AP-STONE-v2.3 (4 Oct 2026) — the stone, kept whole.\n\n',
    '''   AP-STONE-v2.4 (4 Oct 2026) — the stone, kept whole.

   v2.4 — the return has its ground (John, Oct 4): on the day a return is due, above "What does it mean to you now?"
     stand "Three months on. Come back to the stone." and the Gilgal line — Joshua set the stones there the day Israel
     came in and the LORD rolled their shame away on that ground; Samuel went back there to renew the kingdom; in and
     back meet on the same ground. Two new lines, .ap-stone-ask-lead and .ap-stone-ask-ground; a page styles them.

''')
rep('  var MONTHS_TO_RETURN = 3;   /* the first return, three months on (John, Oct 1) */',
    '''  var MONTHS_TO_RETURN = 3;   /* the first return, three months on (John, Oct 1) */
  /* v2.4 — what stands above the question on the day it is due (John, Oct 4: return to Gilgal) */
  var RETURN_LEAD = "Three months on. Come back to the stone.";
  var RETURN_GROUND = "Gilgal means to roll. Joshua set the stones there the day Israel came in, and the LORD rolled their shame away on that ground. Samuel went back there to renew the kingdom. In and back meet on the same ground.";''')
rep('''      var ask = el("div", "ap-stone-ask");
      var lab = el("label", "ap-stone-ask-q", "What does it mean to you now?");''',
    '''      var ask = el("div", "ap-stone-ask");
      ask.appendChild(el("p", "ap-stone-ask-lead", RETURN_LEAD));
      ask.appendChild(el("p", "ap-stone-ask-ground", RETURN_GROUND));
      var lab = el("label", "ap-stone-ask-q", "What does it mean to you now?");''')
rep('    version: "2.3",', '    version: "2.4",')
open(p, 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('stone.js', len(b), 'bytes · sha256', hashlib.sha256(b).hexdigest())
