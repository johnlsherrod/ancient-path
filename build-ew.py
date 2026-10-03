#!/usr/bin/env python3
"""Build ending-well-v1.html from ew-body.html + the stylesheet derived from the Man Who Crossed page.
Ids and pins come from ew-ids.json when present; otherwise the placeholders stay (the jsdom proof
fills them with test values). Every placeholder must occur exactly once except where noted."""
import json, os, re, sys, hashlib, base64
here = os.path.dirname(os.path.abspath(__file__))
root = here if os.path.exists(os.path.join(here, 'story.js')) else os.path.join(here, 'ancient-path')   # run from the repo root, or from the folder above it
css = open(os.path.join(here, 'ew-css.txt')).read().strip().split('\n')
assert css[0] == '<style>' and css[-1] == '</style>', css[:1] + css[-1:]
css = '\n'.join(css[1:-1])
body = open(os.path.join(here, 'ew-body.html')).read()
assert body.count('{{CSS}}') == 1
out = body.replace('{{CSS}}', css)
ids_path = os.path.join(here, 'ew-ids.json')
ids = json.load(open(ids_path)) if os.path.exists(ids_path) else {}
for k, v in ids.items():
    tok = '{{' + k + '}}'
    n = out.count(tok)
    if n == 0:
        continue   # an id for another file (Your Page's placeholders live in the same json)
    assert n == 1, (k, n)
    out = out.replace(tok, v)
left = re.findall(r'\{\{[A-Z_]+\}\}', out)
if left:
    print('placeholders left:', sorted(set(left)))
dest = os.path.join(root, 'ending-well-v4.html')
open(dest, 'w').write(out)
raw = out.rstrip('\n').encode('utf-8')
print(dest, len(out.encode('utf-8')), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(raw).hexdigest())
