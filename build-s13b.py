#!/usr/bin/env python3
"""Section 13 build, second cut (Oct 14, 2026, John: "can you finish this now?"):
Here I Am v13.1, Your Next Step KBJ v7.1 / DHT v8.1 — the step row leaves the screen at the finish (hidden with the
same force the engine's row rule uses), and Here I Am's progress label reads 1 of 5. Derived from the first cut by exact replacement."""
import hashlib, pathlib

OUT = pathlib.Path("/home/claude/ap/out")

def rep(s, old, new, n=1):
    c = s.count(old); assert c == n, f"expected {n}, found {c}: {old[:90]!r}"
    return s.replace(old, new)
def sha(s): return hashlib.sha256(s.encode("utf-8")).hexdigest()

# Here I Am
h = (OUT / "arc-kbj-v13.html").read_text(encoding="utf-8")
h = rep(h, "<!-- AP-HIA-KBJ-v13 (",
        "<!-- AP-HIA-KBJ-v13.1 (v13.1, 14 Oct 2026: the step row (Back · Save · Next · Continue on your phone) leaves the screen at the finish — the engine's row rule (display:flex!important) had been beating the page's hide, so the hide now carries the same force; the progress label reads 1 of 5, not Part 1 of 5) (")
h = rep(h, 'partsEl.style.display = ""; nav.style.display = ""; gateEl.style.display = ""; draftPanel.style.display = "";',
           'partsEl.style.display = ""; nav.style.removeProperty("display"); gateEl.style.display = ""; draftPanel.style.display = "";')
h = rep(h, 'partsEl.style.display = "none"; nav.style.display = "none"; gateEl.style.display = "none"; draftPanel.style.display = "none";',
           'partsEl.style.display = "none"; nav.style.setProperty("display", "none", "important"); gateEl.style.display = "none"; draftPanel.style.display = "none";')
h = rep(h, '<span id="arcPartLabel">Part 1 of 5</span>', '<span id="arcPartLabel">1 of 5</span>')
h = rep(h, 'lbl.textContent = "Part " + (cur + 1) + " of " + PARTS.length;', 'lbl.textContent = (cur + 1) + " of " + PARTS.length;')
assert 'nav.style.display' not in h and '"Part "' not in h
(OUT / "arc-kbj-v13.1.html").write_text(h, encoding="utf-8")

# Your Next Step, both courses
for src, dst, old, new in [("nxs-kbj-v7.html", "nxs-kbj-v7.1.html", "<!-- AP-NEXTSTEP-KBJ-v7 (", "<!-- AP-NEXTSTEP-KBJ-v7.1 (v7.1, 14 Oct 2026: the step row (Back · Save · Next · Continue on your phone) leaves the screen at the finish — the engine's row rule (display:flex!important) had been beating the page's hide, so the hide now carries the same force) ("),
                           ("nxs-dht-v8.html", "nxs-dht-v8.1.html", "<!-- AP-NEXTSTEP-DHT-v8 (", "<!-- AP-NEXTSTEP-DHT-v8.1 (v8.1, 14 Oct 2026: the step row (Back · Save · Next · Continue on your phone) leaves the screen at the finish — the engine's row rule (display:flex!important) had been beating the page's hide, so the hide now carries the same force) (")]:
    n = (OUT / src).read_text(encoding="utf-8")
    n = rep(n, old, new)
    n = rep(n, 'stepsEl.style.display = ""; nav.style.display = "";', 'stepsEl.style.display = ""; nav.style.removeProperty("display");')
    n = rep(n, 'stepsEl.style.display = "none"; nav.style.display = "none";', 'stepsEl.style.display = "none"; nav.style.setProperty("display", "none", "important");')
    assert 'nav.style.display' not in n
    (OUT / dst).write_text(n, encoding="utf-8")

for f in ["arc-kbj-v13.1.html", "nxs-kbj-v7.1.html", "nxs-dht-v8.1.html"]:
    t = (OUT / f).read_text(encoding="utf-8"); print(f"{f:20} chars={len(t):6} sha256={sha(t)}")
