#!/usr/bin/env python3
"""Set a Stone build 12 (John's walk of build 11, 5 Oct): (1) "don't add to the biblical text. we don't know the stones stood
in a ring" — the Gilgal sentence no longer describes the stones; the audit found one more: the Jordan stones were never
named, so "Both were named" goes; (2) the prose runs the full column again (the 54ch cap left half the column empty under
a full-width quote)."""
import os
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'sas-body.html'); s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a))
    s = s.replace(a, b)
rep("<!-- AP-SAS-v1 · build 11 (5 Oct 2026, John's walk of Your Page v29:",
    "<!-- AP-SAS-v1 · build 12 (5 Oct 2026, John's walk of build 11: nothing added to the text — the Gilgal sentence no longer describes the stones (we are not told they stood in a ring) and the Jordan stones were never named, so \"Both were named\" goes; the prose runs the full column; story.js v18.8 — a man's voice; stone.js v2.9) (build 11 (5 Oct 2026, John's walk of Your Page v29:")
rep('Gilgal means a circle. The stones stood in a ring, and the LORD stood in the midst of them &mdash; with them as they went in, with them when they would need him to step in. Immanuel, God with us.',
    'Gilgal means a circle. The LORD was with his people &mdash; with them as they went in, with them when they would need him to step in. Immanuel, God with us.')
rep('Neither stone was set from a place of strength. Both were named, and both were set to be asked about.',
    'Neither stone was set from a place of strength, and both were set to be asked about.')
rep('.ew-root .sas-frame{font:400 16px/1.65 var(--e-sans);color:var(--e-ink);margin:0 0 26px;max-width:54ch}\n.ew-root .sas-what{font:400 16px/1.65 var(--e-sans);color:var(--e-ink);margin:-8px 0 22px;max-width:54ch}',
    '.ew-root .sas-frame{font:400 16px/1.65 var(--e-sans);color:var(--e-ink);margin:0 0 26px}\n.ew-root .sas-what{font:400 16px/1.65 var(--e-sans);color:var(--e-ink);margin:-8px 0 22px}')
rep('border-left:2px solid var(--e-bronze);max-width:54ch}\n.ew-root .sas-return-ex{max-width:54ch}', 'border-left:2px solid var(--e-bronze)}')
open(p, 'w', encoding='utf-8').write(s)
t = os.path.join(here, 'test-sas-v1.js'); u = open(t, encoding='utf-8').read()
for a, b in [('/Gilgal means a circle\\. The stones stood in a ring, and the LORD stood in the midst of them — with them as they went in, with them when they would need him to step in\\. Immanuel, God with us\\./', '/Gilgal means a circle\\. The LORD was with his people — with them as they went in, with them when they would need him to step in\\. Immanuel, God with us\\./ .test(w[0]) && !/ring|midst/.test(w[0]) && !/Both were named/.test(d.querySelectorAll(".sas-frame")[0].textContent) && /'),
             ('Neither stone was set from a place of strength. Both were named, and both were set to be asked about."', 'Neither stone was set from a place of strength, and both were set to be asked about."')]:
    assert u.count(a) == 1, a[:60]
    u = u.replace(a, b)
open(t, 'w', encoding='utf-8').write(u)
print('build 12 in the source')
