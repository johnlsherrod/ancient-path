#!/usr/bin/env python3
"""v27, second pass (the picture): the pile section was missing the card's rules for the offer line, its panel, the radios and
Set another — so they drew as bare browser buttons and a blue link — and every stone drew two rules (the stone's top rule
plus the pile's bottom rule)."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'pages', 'start-v27.html')
s = open(p).read()
def rep(a, b):
    global s
    assert s.count(a) == 1, a[:70]
    s = s.replace(a, b)
rep('.ap-home .ap-pile .ap-stone { flex: none; padding: 0 0 18px; margin: 0 0 18px; border-bottom: 1px solid var(--ap-rule); }',
    '.ap-home .ap-pile .ap-stone { flex: none; padding: 0 0 18px; margin: 0 0 18px; border-top: 0; border-bottom: 1px solid var(--ap-rule); }')
for sel in ['.ap-stone-offer-open, .ap-home .ap-card .ap-stone-offer-back {', '.ap-stone-offer-open:hover, .ap-home .ap-card .ap-stone-offer-back:hover {',
            '.ap-stone-offer-panel {', '.ap-stone-offer-choice {', '.ap-stone-offer-radio {', '.ap-stone-offer-radio input {', '.ap-stone-another {']:
    a = '        .ap-home .ap-card ' + sel
    first = sel.split(',')[0].split(' {')[0]
    second = sel.replace('.ap-home .ap-card ', '.ap-home .ap-pile ')
    rep(a, '        .ap-home .ap-card ' + sel.replace(' {', ', .ap-home .ap-pile ' + second.replace(' {', '') if ',' in sel else ', .ap-home .ap-pile ' + first + ' {'))
for a, b in [('.ap-home .ap-pile .ap-stone-offer-back font: 600', '.ap-home .ap-pile .ap-stone-offer-back { font: 600'), ('.ap-home .ap-pile .ap-stone-offer-back:hover color: var', '.ap-home .ap-pile .ap-stone-offer-back:hover { color: var')]:
    rep(a, b)
open(p, 'w').write(s)
raw = s.rstrip('\n').encode('utf-8')
print(len(s.encode('utf-8')), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(raw).hexdigest())
