#!/usr/bin/env python3
"""Build set-a-stone.html from sas-body.html + the house stylesheet (ew-css.txt). Ids and pins come from ew-ids.json
(STORY_COMMIT/SRI, STONE_COMMIT/SRI, the Stones form, REVIEW_SCRIPT). Every placeholder must occur exactly once."""
import json, os, re, hashlib
here = os.path.dirname(os.path.abspath(__file__))
css = open(os.path.join(here, 'ew-css.txt')).read().strip().split('\n')
assert css[0] == '<style>' and css[-1] == '</style>'
css = '\n'.join(css[1:-1])
body = open(os.path.join(here, 'sas-body.html')).read()
assert body.count('{{CSS}}') == 1
out = body.replace('{{CSS}}', css)
ids = json.load(open(os.path.join(here, 'ew-ids.json')))
for k, v in ids.items():
    tok = '{{' + k + '}}'; n = out.count(tok)
    if n == 0: continue
    assert n == 1, (k, n)
    out = out.replace(tok, v)
left = re.findall(r'\{\{[A-Z_]+\}\}', out)
if left: print('placeholders left:', sorted(set(left)))
dest = os.path.join(here, 'set-a-stone.html')
open(dest, 'w').write(out)
raw = out.rstrip('\n').encode('utf-8')
print(dest, len(out.encode('utf-8')), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(raw).hexdigest())
