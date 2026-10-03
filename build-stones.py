#!/usr/bin/env python3
"""Build stones.html from stones-body.html + the house stylesheet (ew-css.txt). Ids and pins come from ew-ids.json
(STORY_COMMIT/SRI, STONE_COMMIT/SRI, the Stones form, REVIEW_SCRIPT). Every placeholder must occur exactly once."""
import json, os, re, hashlib
here = os.path.dirname(os.path.abspath(__file__))
out = open(os.path.join(here, 'stones-body.html')).read()
ids = json.load(open(os.path.join(here, 'ew-ids.json')))
for k, v in ids.items():
    tok = '{{' + k + '}}'; n = out.count(tok)
    if n == 0: continue
    assert n == 1, (k, n)
    out = out.replace(tok, v)
left = re.findall(r'\{\{[A-Z_]+\}\}', out)
if left: print('placeholders left:', sorted(set(left)))
dest = os.path.join(here, 'stones.html')
open(dest, 'w').write(out)
raw = out.rstrip('\n').encode('utf-8')
print(dest, len(out.encode('utf-8')), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(raw).hexdigest())
# the band: the same file, two words changed — the newest three stones and "All the stones", for the Breaking Free page
assert out.count('data-limit="" data-band=""') == 1
band = out.replace('data-limit="" data-band=""', 'data-limit="3" data-band="1"')
dest2 = os.path.join(here, 'stones-band.html')
open(dest2, 'w').write(band)
raw2 = band.rstrip('\n').encode('utf-8')
print(dest2, len(band.encode('utf-8')), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(raw2).hexdigest())
