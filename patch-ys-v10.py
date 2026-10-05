#!/usr/bin/env python3
"""The Your Story hub v10 from v9 (pages/your-story-v9.html → pages/your-story-v10.html), John, Oct 5: "when will we add
Remembrance Stones to the Your Story navigation?" — both stone cards carry the label "Remembrance Stones"; the Set a Stone
card says what the piece now does (name the stone; three months on it asks what the LORD has done since); the What These
Stones Mean card gains "Every one of them points to the Rock." and says "his name or none" (stone.js v2.3+)."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(here, 'pages', 'your-story-v9.html'), encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:70])
    s = s.replace(a, b)
rep('<!-- AP-YS-v9 (v9, 3 Oct:', '<!-- AP-YS-v10 (v10, 5 Oct: both stone cards are labelled "Remembrance Stones"; the Set a Stone card says name the stone and that three months on it asks what the LORD has done since; the What These Stones Mean card says every one points to the Rock, his name or none) (v9, 3 Oct:')
rep('<p class="aph-card-k">The stone</p>', '<p class="aph-card-k">Remembrance Stones</p>')
rep('Samuel set a stone and named it. Set yours: who it is for, what the LORD has done, and what it means to you. Three months on, we ask you what it means to you then.',
    'Samuel set a stone and named it. Set yours: who it is for, what the LORD has done, and the name you give it. Three months on, it asks you to look again: what has the LORD done since?')
rep('<p class="aph-card-k">Stones of remembrance</p>', '<p class="aph-card-k">Remembrance Stones</p>')
rep('Each one says what God did, in the man’s own words. Read them. When you are ready, set your own.</p>',
    'Each one says what God did, in the man’s own words. Read them. Every one of them points to the Rock. When you are ready, set your own.</p>')
rep('Every stone set where others can see it · first name or none', 'Every stone set where others can see it · his name or none')
open(os.path.join(here, 'pages', 'your-story-v10.html'), 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('pages/your-story-v10.html', len(b), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(b.rstrip(b'\n')).hexdigest())
