#!/usr/bin/env python3
"""Your Page v31 from v30 (pages/start-v30.html → pages/start-v31.html), 5 Oct 2026: stone.js v2.9 — on a due stone the next
return is his to set (two taps above Save, "three months" or "a year", in the tap style Set a Stone uses); story.js v18.8
(a man's voice). The pins move in repin-v25.py once John's commit is back."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(here, 'pages', 'start-v30.html'), encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a))
    s = s.replace(a, b)
rep("<!-- AP-HOME-v30 (v30, 5 Oct, John's walk of v29:", "<!-- AP-HOME-v31 (v31, 5 Oct: stone.js v2.9 — on a due stone the next return is his to set, three months or a year, two taps above Save; story.js v18.8 — a man's voice) (v30, 5 Oct, John's walk of v29:")
rep('        .ap-home .ap-card .ap-stone-ask-row, .ap-home .ap-pile .ap-stone-ask-row { margin: 8px 0 0; }',
    '        .ap-home .ap-card .ap-stone-ask-next, .ap-home .ap-pile .ap-stone-ask-next { margin: 10px 0 0; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }\n'
    '        .ap-home .ap-card .ap-stone-ask-next-lead, .ap-home .ap-pile .ap-stone-ask-next-lead { font: 600 14px/1.4 var(--ap-sans) !important; color: var(--ap-navy) !important; margin: 0 2px 0 0; }\n'
    '        .ap-home .ap-card .ap-stone-ask-when, .ap-home .ap-pile .ap-stone-ask-when { font: 400 14px/1 var(--ap-sans) !important; padding: 7px 11px; border: 1px solid var(--ap-rule); border-radius: 2px; background: #fff; color: var(--ap-navy) !important; cursor: pointer; }\n'
    '        .ap-home .ap-card .ap-stone-ask-when:hover, .ap-home .ap-pile .ap-stone-ask-when:hover, .ap-home .ap-card .ap-stone-ask-when:focus, .ap-home .ap-pile .ap-stone-ask-when:focus { border-color: var(--ap-bronze); outline: none; }\n'
    '        .ap-home .ap-card .ap-stone-ask-when.is-on, .ap-home .ap-pile .ap-stone-ask-when.is-on { border-color: var(--ap-navy); box-shadow: inset 3px 0 0 var(--ap-bronze); }\n'
    '        .ap-home .ap-card .ap-stone-ask-row, .ap-home .ap-pile .ap-stone-ask-row { margin: 8px 0 0; }')
open(os.path.join(here, 'pages', 'start-v31.html'), 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('pages/start-v31.html', len(b), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(b.rstrip(b'\n')).hexdigest())
