#!/usr/bin/env python3
"""stone.js v2.2 and Set a Stone build 6 (4 Oct 2026): the stem "Till now, the LORD has" becomes "To this point, the LORD has"
(John, on his walk: "struggling with the language prompt 'till now' — it's hard for me to connect to the context… I hear 'to this
point' or 'at this marker on the path'"). The marker goes in the help line. A line stored under the old stem reads back under the
new one. Every needle matches once."""
import os
here = os.path.dirname(os.path.abspath(__file__))
def patch(name, pairs):
    p = os.path.join(here, name); s = open(p, encoding='utf-8').read()
    for old, new in pairs:
        assert s.count(old) == 1, (name, s.count(old), old[:90]); s = s.replace(old, new)
    open(p, 'w', encoding='utf-8').write(s); print('patched', name, len(s.encode('utf-8')), 'bytes')
OLD = 'Till now, the LORD has'; NEW = 'To this point, the LORD has'
patch('stone.js', [
  ('   AP-STONE-v2.1 (4 Oct 2026) — the stone, kept whole.\n',
   '   AP-STONE-v2.2 (4 Oct 2026) — the stone, kept whole.\n\n   v2.2 — the stem on Set a Stone\'s own line is "To this point, the LORD has" (John, Oct 4: "till now" was hard to\n     connect to; "to this point", the marker on the path). A line kept under the old stem reads back under the new one.\n'),
  ('  var STEM_TILL = "Till now, the LORD has";   /* Set a Stone\'s own line; Ending Well\'s stone is a line of its own */',
   '  var STEM_TILL = "To this point, the LORD has";   /* Set a Stone\'s own line; Ending Well\'s stone is a line of its own */\n  var STEM_TILL_OLD = "Till now, the LORD has";   /* the stem before v2.2; a line kept under it reads back under the new one */'),
  ('    if (from === "set-a-stone") { text = withStem(STEM_TILL, text); }',
   '    if (from === "set-a-stone") { if (text.toLowerCase().indexOf(STEM_TILL_OLD.toLowerCase()) === 0) { text = clean(text.slice(STEM_TILL_OLD.length)); } text = withStem(STEM_TILL, text); }'),
  ('    version: "2.1",', '    version: "2.2",'),
])
patch('sas-body.html', [
  ('<!-- AP-SAS-v1 · build 5 (4 Oct 2026, John\'s walk of build 4:',
   '<!-- AP-SAS-v1 · build 6 (4 Oct 2026: the stem is "To this point, the LORD has", the marker on the path in its help line; stone.js v2.2) (build 5, 4 Oct 2026, John\'s walk of build 4:'),
  ('{ key: "text", stem: "Till now, the LORD has", prompt: "Have you had a miracle crossing? Say what you crossed and how he brought you over. Or maybe you only need to remember: how has God helped you?", ex: "Till now, the LORD has helped me see the men on the path with me, and that the battle has already been fought and won."',
   '{ key: "text", stem: "To this point, the LORD has", prompt: "A stone is a marker on the path. Have you had a miracle crossing? Say what you crossed and how he brought you over. Or maybe you only need to remember: how has God helped you?", ex: "To this point, the LORD has helped me see the men on the path with me, and that the battle has already been fought and won."'),
  ('ui.fail("The “Till now, the LORD has” line is the stone. Write it, then save.");',
   'ui.fail("The “To this point, the LORD has” line is the stone. Write it, then save.");'),
])
