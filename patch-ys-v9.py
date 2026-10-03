#!/usr/bin/env python3
"""The Your Story hub v9 from v8 (pages/your-story.html): two cards on the shelf — Set a Stone (the piece) and What These Stones Mean (the public page) — John, Oct 3. The sub-line counts six paths. Every needle must match exactly once."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(here, 'pages', 'your-story.html')).read()
out = src.replace('<!-- AP-YS-v8 (v8, 29 Sept:', '<!-- AP-YS-v9 (v9, 3 Oct: two cards on the shelf — Set a Stone, the stone of remembrance a man writes in three lines, and What These Stones Mean, the stones men have set where others can see them) (v8, 29 Sept:')
assert src.count('<!-- AP-YS-v8 (v8, 29 Sept:') == 1
def rep(old, new):
    global out
    assert out.count(old) == 1, (out.count(old), old[:80]); out = out.replace(old, new)
rep('<p class="aph-sub">Five paths, one life. Two poems, a prayer, a conversation, and the piece you write at the end of a course.',
    '<p class="aph-sub">Six paths, one life. Two poems, a prayer, a conversation, a stone, and the piece you write at the end of a course.')
rep('''                            <span class="aph-card-go">Place it<i>→</i></span>
                        </a>
                    </div>
                </section>''',
'''                            <span class="aph-card-go">Place it<i>→</i></span>
                        </a>
                        <a class="aph-card" href="/set-a-stone">
                            <p class="aph-card-k">The stone</p>
                            <p class="aph-card-t">Set a Stone</p>
                            <p class="aph-card-open"><em>Till now the LORD has helped us.</em></p>
                            <p class="aph-card-d">Samuel set a stone and named it. Set yours: who it is for, what the LORD has done, and what it means to you. Three months on, we ask you what it means to you then.</p>
                            <p class="aph-card-m">Three lines · five minutes · set where you will find it again</p>
                            <span class="aph-card-go">Set it<i>→</i></span>
                        </a>
                        <a class="aph-card" href="/stones">
                            <p class="aph-card-k">Stones of remembrance</p>
                            <p class="aph-card-t">What These Stones Mean</p>
                            <p class="aph-card-open"><em>What do those stones mean to you?</em></p>
                            <p class="aph-card-d">Men who walked this path set these stones where others can see them. Each one says what God did, in the man’s own words. Read them. When you are ready, set your own.</p>
                            <p class="aph-card-m">Every stone set where others can see it · first name or none</p>
                            <span class="aph-card-go">Read them<i>→</i></span>
                        </a>
                    </div>
                </section>''')
if out.startswith('<div class="learnworlds-main-text'):
    first = out.split('\n', 1)[0]
    assert 'lw-element-selected' not in first, 'strip the builder mark first'
dest = os.path.join(here, 'pages', 'your-story-v9.html')
open(dest, 'w').write(out)
raw = out.rstrip('\n').encode('utf-8')
print(dest, len(out.encode('utf-8')), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(raw).hexdigest())
