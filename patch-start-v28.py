#!/usr/bin/env python3
"""Your Page v28 from v27 (pages/start-v27.html → pages/start-v28.html): stone.js v2.4 — the return has its ground. The two
new lines above the question (.ap-stone-ask-lead, .ap-stone-ask-ground) styled in the pile; the Remembrance Stones note says
the return is a walk back to the stone. The engine pin is already v2.4 in start-v27.html (repin-v24.py)."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(here, 'pages', 'start-v27.html'), encoding='utf-8').read()
s = src
def rep(a, b):
    global s
    assert s.count(a) == 1, a[:70]
    s = s.replace(a, b)
rep('<!-- AP-HOME-v27 (v27, 4 Oct:', '<!-- AP-HOME-v28 (v28, 4 Oct: stone.js v2.5 — on the day a return is due the stone says "Three months on. Come back to the stone." and the Gilgal line above its question; the Remembrance Stones note says so) (v27, 4 Oct:')
rep('        .ap-home .ap-card .ap-stone-ask-q, .ap-home .ap-pile .ap-stone-ask-q {',
    '        .ap-home .ap-pile .ap-stone-ask-lead { font: 600 15.5px/1.4 var(--ap-serif) !important; color: var(--ap-navy) !important; margin: 0 0 4px; }\n        .ap-home .ap-pile .ap-stone-ask-ground { font: 400 14px/1.55 var(--ap-sans) !important; color: var(--ap-quiet) !important; margin: 0 0 10px; }\n        .ap-home .ap-card .ap-stone-ask-q, .ap-home .ap-pile .ap-stone-ask-q {')
rep('Every stone you have set, newest first. When a return is due, its question waits here.',
    'Every stone you have set, newest first. Three months on, each one asks you to come back.')
assert 'ancient-path@92ffd2060a02d2d560de1ad7941e0a4be0703d86/stone.js' in s
open(os.path.join(here, 'pages', 'start-v28.html'), 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('pages/start-v28.html', len(b), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(b.rstrip(b'\n')).hexdigest())
