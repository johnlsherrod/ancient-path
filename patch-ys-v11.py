#!/usr/bin/env python3
"""The Your Story hub v11 from v10 (pages/your-story-v10.html → pages/your-story-v11.html), John, Oct 5: "What should be the
first thing a man sees? I think Set a Stone." One door: the What These Stones Mean card comes off the hub (the reading room
is reached from Set a Stone's foot, the pile on Your Page, and Read their stories); the Set a Stone card stays."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(here, 'pages', 'your-story-v10.html'), encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:70]); s = s.replace(a, b)
rep('<!-- AP-YS-v10 (v10, 5 Oct:', '<!-- AP-YS-v11 (v11, 5 Oct, John: one door — the What These Stones Mean card comes off the hub; Set a Stone is the stones card, and the reading room sits behind it) (v10, 5 Oct:')
rep('''                        <a class="aph-card" href="/stones">
                            <p class="aph-card-k">Remembrance Stones</p>
                            <p class="aph-card-t">What These Stones Mean</p>
                            <p class="aph-card-open"><em>What do those stones mean to you?</em></p>
                            <p class="aph-card-d">Men who walked this path set these stones where others can see them. Each one says what God did, in the man’s own words. Read them. Every one of them points to the Rock. When you are ready, set your own.</p>
                            <p class="aph-card-m">Every stone set where others can see it · his name or none</p>
                            <span class="aph-card-go">Read them<i>→</i></span>
                        </a>
''', '')
assert 'href="/stones"' not in s
open(os.path.join(here, 'pages', 'your-story-v11.html'), 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('pages/your-story-v11.html', len(b), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(b.rstrip(b'\n')).hexdigest())
