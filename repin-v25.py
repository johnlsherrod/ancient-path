#!/usr/bin/env python3
"""Repin BOTH engines to John's commit (usage: python3 repin-v25.py <commit>) — stone.js v2.9 and story.js v18.8 travel in one
push. Verifies the local files are those versions, computes both SRIs, writes ew-ids.json, pins pages/start-v31.html (the
one page with the commits written in), bumps the headers of Ending Well (v4.7) and What These Stones Mean (build 10) — Set
a Stone build 12 and Your Page v31 already carry theirs — moves the tests' pinned commit, rebuilds, runs every suite."""
import sys, os, json, hashlib, base64, re, subprocess
commit = sys.argv[1].strip()
assert re.fullmatch(r'[0-9a-f]{40}', commit), 'full 40-char commit, please'
here = os.path.dirname(os.path.abspath(__file__)); os.chdir(here)
stone = open('stone.js', 'rb').read(); story = open('story.js', 'rb').read()
assert b'AP-STONE-v2.9' in stone and b'version: "2.9"' in stone, 'stone.js here is not v2.9'
assert b'AP-STORY-MODULE-v18.8' in story, 'story.js here is not v18.8'
def sri(b): return 'sha384-' + base64.b64encode(hashlib.sha384(b).digest()).decode()
stone_sri, story_sri = sri(stone), sri(story)
print('stone.js', len(stone), 'bytes · sha256', hashlib.sha256(stone).hexdigest(), '·', stone_sri)
print('story.js', len(story), 'bytes · sha256', hashlib.sha256(story).hexdigest(), '·', story_sri)
ids = json.load(open('ew-ids.json'))
old_stone, old_stone_sri, old_story, old_story_sri = ids['STONE_COMMIT'], ids['STONE_SRI'], ids['STORY_COMMIT'], ids['STORY_SRI']
ids['STONE_COMMIT'] = commit; ids['STONE_SRI'] = stone_sri; ids['STORY_COMMIT'] = commit; ids['STORY_SRI'] = story_sri
json.dump(ids, open('ew-ids.json', 'w'), indent=1); open('ew-ids.json', 'a').write('\n')
def sub(path, pairs):
    s = open(path, encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) == 1, (path, a[:60], s.count(a))
        s = s.replace(a, b)
    open(path, 'w', encoding='utf-8').write(s)
sub('pages/start-v31.html', [
    ('ancient-path@' + old_story + '/story.js", STORY_SRI = "' + old_story_sri + '"', 'ancient-path@' + commit + '/story.js", STORY_SRI = "' + story_sri + '"'),
    ('ancient-path@' + old_stone + '/stone.js", STONE_SRI = "' + old_stone_sri + '"', 'ancient-path@' + commit + '/stone.js", STONE_SRI = "' + stone_sri + '"')])
sub('ew-body.html', [('<!-- AP-EW-v4 (v4.6, 5 Oct 2026:', '<!-- AP-EW-v4 (v4.7, 5 Oct 2026: stone.js v2.9 — nothing added to the biblical text, the next return is his to set; story.js v18.8 — a man\'s voice) (v4.6, 5 Oct 2026:')])
sub('stones-body.html', [('<!-- AP-STONES-v1 · build 9 (5 Oct 2026,', '<!-- AP-STONES-v1 · build 10 (5 Oct 2026: stone.js v2.9; story.js v18.8) (build 9 (5 Oct 2026,')])
for t in ['test-sas-v1.js', 'test-stones-v1.js']:
    sub(t, [('ancient-path@' + old_stone + '/stone.js', 'ancient-path@' + commit + '/stone.js')])
sub('test-stones-v1.js', [('AP-STONES-v1 · build 9/', 'AP-STONES-v1 · build 10/')])
for b in ['build-sas.py', 'build-ew.py', 'build-stones.py']:
    print(subprocess.run(['python3', b], capture_output=True, text=True).stdout.strip())
s = open('pages/start-v31.html', encoding='utf-8').read().encode('utf-8')
print('pages/start-v31.html', len(s), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(s.rstrip(b'\n')).hexdigest())
fails = []
for t in ['test-stone-v2.js', 'test-sas-v1.js', 'test-stones-v1.js', 'test-ew-v4.js', 'test-start-v31.js', 'test-story-v186.js', 'test-story-v187.js', 'test-story-v188.js', 'test-voice-v183.js']:
    r = subprocess.run(['node', t], capture_output=True, text=True); last = (r.stdout.strip().splitlines() or [''])[-1]
    print(t, '→', last); fails += [t] if r.returncode else []
print('FAILED: ' + ', '.join(fails) if fails else 'every suite passed')
