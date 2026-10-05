#!/usr/bin/env python3
"""Repin stone.js to John's v2.4 commit (usage: python3 repin-v24.py <commit>). Made from repin-v23.py. story.js stays at 18.6/26d4940 unless the
file changed — it did not, so STORY_COMMIT is left alone. Verifies the local stone.js is v2.3, computes its SRI, writes
ew-ids.json, pins pages/start-v27.html (the only page with the commit written in), bumps the Set a Stone and Ending Well
headers (build 7, v4.3: stone.js v2.3 — his name or no name), moves the tests' pinned commit, rebuilds, and runs every suite."""
import sys, os, json, hashlib, base64, re, subprocess
commit = sys.argv[1].strip()
assert re.fullmatch(r'[0-9a-f]{40}', commit), 'full 40-char commit, please'
here = os.path.dirname(os.path.abspath(__file__)); os.chdir(here)
stone = open('stone.js', 'rb').read()
assert b'AP-STONE-v2.4' in stone and b'version: "2.4"' in stone, 'stone.js here is not v2.4'
sri = 'sha384-' + base64.b64encode(hashlib.sha384(stone).digest()).decode()
print('stone.js', len(stone), 'bytes · sha256', hashlib.sha256(stone).hexdigest(), '·', sri)
ids = json.load(open('ew-ids.json')); old = ids['STONE_COMMIT']; old_sri = ids['STONE_SRI']
ids['STONE_COMMIT'] = commit; ids['STONE_SRI'] = sri
json.dump(ids, open('ew-ids.json', 'w'), indent=1); open('ew-ids.json', 'a').write('\n')
def sub(path, pairs):
    s = open(path, encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) >= 1, (path, a[:60])
        s = s.replace(a, b)
    open(path, 'w', encoding='utf-8').write(s)
sub('pages/start-v27.html', [('ancient-path@' + old + '/stone.js", STONE_SRI = "' + old_sri + '"', 'ancient-path@' + commit + '/stone.js", STONE_SRI = "' + sri + '"')])
sub('sas-body.html', [('<!-- AP-SAS-v1 · build 7 (4 Oct 2026: in and back', '<!-- AP-SAS-v1 · build 8 (4 Oct 2026: stone.js v2.4 — the return has its ground) (build 7, 4 Oct 2026: in and back')])
sub('ew-body.html', [('<!-- AP-EW-v4 (v4.3, 4 Oct 2026:', '<!-- AP-EW-v4 (v4.4, 4 Oct 2026: stone.js v2.4 — the return has its ground) (v4.3, 4 Oct 2026:')])
sub('stones-body.html', [('<!-- AP-STONES-v1 · build 5 (4 Oct 2026:', '<!-- AP-STONES-v1 · build 6 (4 Oct 2026: stone.js v2.4) (build 5, 4 Oct 2026:')])
for t in ['test-sas-v1.js', 'test-stones-v1.js']:
    sub(t, [('ancient-path@' + old + '/stone.js', 'ancient-path@' + commit + '/stone.js')])
for b in ['build-sas.py', 'build-ew.py', 'build-stones.py']:
    print(subprocess.run(['python3', b], capture_output=True, text=True).stdout.strip())
s = open('pages/start-v27.html', encoding='utf-8').read().encode('utf-8')
print('pages/start-v27.html', len(s), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(s.rstrip(b'\n')).hexdigest())
fails = []
for t in ['test-stone-v2.js', 'test-sas-v1.js', 'test-stones-v1.js', 'test-ew-v4.js', 'test-start-v27.js', 'test-story-v186.js', 'test-story-v185.js', 'test-voice-v183.js']:
    r = subprocess.run(['node', t], capture_output=True, text=True); last = (r.stdout.strip().splitlines() or [''])[-1]
    print(t, '→', last); fails += [t] if r.returncode else []
print('FAILED: ' + ', '.join(fails) if fails else 'every suite passed')
