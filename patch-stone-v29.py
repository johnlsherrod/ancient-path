#!/usr/bin/env python3
"""stone.js v2.8 -> v2.9 (5 Oct 2026, John: "don't add to the biblical text. we don't know the stones stood in a ring").
The return's ground line loses "stood in the midst of them" — Joshua 4 does not say it. Now: "the LORD was with them".
Nothing else changes. Updates the three suites that carry the line or the version."""
import pathlib, shutil, re
root = pathlib.Path(__file__).parent
src = root / "stone.js"
shutil.copy(src, root / "stone-v2.8.js")
s = src.read_text(encoding="utf-8")

def sub1(old, new, where):
    assert where.count(old) == 1, (old[:60], where.count(old))
    return where.replace(old, new)

s = sub1('AP-STONE-v2.8 (5 Oct 2026) — the stone, kept whole.\n',
         'AP-STONE-v2.9 (5 Oct 2026) — the stone, kept whole.\n\n'
         '   v2.9 — nothing added to the biblical text (John, Oct 5: "we don\'t know the stones stood in a ring"). The return\'s\n'
         '     ground line said the LORD "stood in the midst of them"; Joshua 4 does not say it. It now says "the LORD was with\n'
         '     them", which the text does say (Joshua 1:9, 3:7). Nothing else changes.\n', s)
s = sub1('var RETURN_GROUND = "Gilgal means a circle. Joshua set the stones there the day Israel came in, and the LORD stood in the midst of them. Samuel went back there to renew the kingdom. In and back meet on the same\\u00a0ground.";',
         'var RETURN_GROUND = "Gilgal means a circle. Joshua set the stones there the day Israel came in, and the LORD was with them. Samuel went back there to renew the kingdom. In and back meet on the same\\u00a0ground.";', s)
s = sub1('     circle. Joshua set the stones there the day Israel came in, and the LORD stood in the midst of them. Samuel went\n     back there to renew the kingdom. In and back meet on the same ground."\n',
         '     circle. Joshua set the stones there the day Israel came in, and the LORD [was with them — v2.9]. Samuel went\n     back there to renew the kingdom. In and back meet on the same ground."\n', s)
s = sub1('version: "2.8",', 'version: "2.9",', s)
code = s.split("*/", 1)[1]   # the header note may quote the old words; the code may not
assert "midst" not in code and not re.search(r"\bring\b", code)
src.write_text(s, encoding="utf-8")

# tests
p = root / "test-stone-v2.js"; t = p.read_text(encoding="utf-8")
t = sub1('and the LORD stood in the midst of them. Samuel', 'and the LORD was with them. Samuel', t)
t = t.replace('"2.8"', '"2.9"').replace("AP-STONE-v2\\.8", "AP-STONE-v2\\.9")
p.write_text(t, encoding="utf-8")
p = root / "test-story-v186.js"; t = p.read_text(encoding="utf-8")
t = sub1("AP-STONE-v2\\.8", "AP-STONE-v2\\.9", t)
p.write_text(t, encoding="utf-8")
print("stone.js v2.9 cut; tests moved")
