#!/usr/bin/env python3
"""stones build 5 (John, Oct 4): the navy box had three links in different colors and sizes — redone as one line and one
button. The foot line says "his name or none" (the choice is now full name or no name, stone.js v2.3)."""
import os
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'stones-body.html')
s = open(p).read()
def rep(a, b):
    global s
    assert s.count(a) == 1, a[:60]
    s = s.replace(a, b)
rep('<!-- AP-STONES-v1 · build 4 (4 Oct 2026:',
    '<!-- AP-STONES-v1 · build 5 (4 Oct 2026: the navy box is one line and one button, not three links; the foot line says "his name or none" — stone.js v2.3) (build 4, 4 Oct 2026:')
rep('''.aps-root .aps-you{display:block;margin:26px 0 0;padding:22px 24px;background:var(--s-navy);color:#F3EDE3;text-decoration:none;border-radius:2px}
.aps-root .aps-you .aps-you-k{font:600 12px/1.4 var(--s-sans);letter-spacing:.18em;text-transform:uppercase;color:var(--s-bronze);margin:0 0 6px}
.aps-root .aps-you .aps-you-t{font:600 22px/1.3 var(--s-serif);color:#F3EDE3;margin:0 0 4px}
.aps-root .aps-you .aps-you-go{font:600 15px/1.4 var(--s-sans);color:#F3EDE3;margin:0;text-decoration:underline;text-underline-offset:3px}
.aps-root .aps-you:hover{background:#2C3B5E}''',
'''.aps-root .aps-you{margin:30px 0 0;padding:22px 0 0;border-top:1px solid var(--s-rule)}
.aps-root .aps-you .aps-you-t{font:400 19px/1.5 var(--s-serif);color:var(--s-navy);margin:0 0 14px}
.aps-root .aps-you .aps-you-go{display:inline-block;font:600 15px/1.2 var(--s-sans);color:#F3EDE3;background:var(--s-navy);padding:13px 22px;border-radius:2px;text-decoration:none}
.aps-root .aps-you .aps-you-go:hover{background:#2C3B5E;color:#F3EDE3}''')
rep('''<a class="aps-you" href="/set-a-stone">
  <p class="aps-you-k">Your stone</p>
  <p class="aps-you-t">What has the LORD done?</p>
  <p class="aps-you-go">Set your own &rarr;</p>
</a>''',
'''<div class="aps-you">
  <p class="aps-you-t">What has the LORD done? Set a stone of your own.</p>
  <a class="aps-you-go" href="/set-a-stone">Set a stone</a>
</div>''')
rep('with his first name or none.', 'with his name or none.')
open(p, 'w').write(s)
print('stones-body.html patched to build 5')
