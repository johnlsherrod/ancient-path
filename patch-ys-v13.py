#!/usr/bin/env python3
"""The Your Story hub v13 from v12 (pages/your-story-v12.html → pages/your-story-v13.html), 10 Oct 2026 — the Read door
(John's Oct 9 ruling, Option A). The "More to read" shelf (four articles below the two halves) moves to the new /read
page, so it comes off the hub along with its styles; the loop line loses "the next man" (John's Sept 29 rule) and now
says plainly that other men read it here. Nothing else on the hub changes: the two halves, the loader, the reader,
AP-AGE-GATE and the crisis line are untouched."""
import os, hashlib, re
here = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(here, 'your-story-v12.html'), encoding='utf-8').read()
orig = s
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (s.count(a), a[:70]); s = s.replace(a, b)

rep('<!-- AP-YS-v12 (v12, 5 Oct:',
    '<!-- AP-YS-v13 (v13, 10 Oct: the four-article shelf moves to /read, the Read door; the loop line says other men benefit from your work) (v12, 5 Oct:')

# 1. the shelf styles — the whole block from the comment to the loop-line comment
start = s.index('        /* ---- More to read: the quiet shelf ---- */')
end = s.index('        /* ---- loop line + foot ---- */')
assert 0 < end - start < 2000
s = s[:start] + s[end:]

# 2. the two phone/tablet rules for the shelf grid
rep('''

            .aph .aph-shelf-grid {
                grid-template-columns: 1fr 1fr;
            }
''', '')
rep('''
            .aph .aph-shelf-grid {
                grid-template-columns: 1fr;
            }
''', '')

# 3. the shelf itself (its aph-wide holder had nothing else in it)
start = s.index('        <div class="aph-wide">\n            <div class="aph-shelf">')
end = s.index('        <p class="aph-loop">')
block = s[start:end]
assert block.count('<a class="aph-card"') == 4 and 'More to read' in block and block.count('</div>') == 3, block.count('</div>')
s = s[:start] + s[end:]

# 4. the loop line — on the hub AND at the foot of every story page (the reader carries the same sentence)
rep('<b>offer it</b> — and the next man who walks this road reads it here.',
    '<b>offer it</b> — and other men benefit from your work.', 2)

assert 'aph-shelf' not in s and 'More to read' not in s and 'next man' not in s
out = os.path.join(here, 'your-story-v13.html')
open(out, 'w', encoding='utf-8').write(s)
print('v12', len(orig), 'v13', len(s), 'sha256', hashlib.sha256(s.encode('utf-8')).hexdigest()[:12])
