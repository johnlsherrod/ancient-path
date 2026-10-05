#!/usr/bin/env python3
"""Set a Stone build 13 (5 Oct 2026, John: Set a Stone is the door; What These Stones Mean is the reading room behind it).
The foot line gains "What These Stones Mean →" beside "← Your Story", so the reading room is reached from the piece —
the top menu and the hub now lead to Set a Stone only."""
import pathlib
root = pathlib.Path(__file__).parent
def sub1(old, new, where):
    assert where.count(old) == 1, (old[:70], where.count(old)); return where.replace(old, new)
p = root / "sas-body.html"; s = p.read_text(encoding="utf-8")
s = sub1("<!-- AP-SAS-v1 · build 12 (", "<!-- AP-SAS-v1 · build 13 (5 Oct 2026, John: one door — the foot links What These Stones Mean → beside ← Your Story; the menu and the hub lead here) (build 12 (", s)
s = sub1('.ew-root .sas-back a{color:var(--e-bronze) !important;text-decoration:none !important;font-weight:600 !important}',
         '.ew-root .sas-back a{color:var(--e-bronze) !important;text-decoration:none !important;font-weight:600 !important}\n.ew-root .sas-back a+a{margin-left:18px}', s)
s = sub1('<p class="sas-back"><a href="/your-story" target="_top">&larr; Your Story</a></p>',
         '<p class="sas-back"><a href="/your-story" target="_top">&larr; Your Story</a><a href="/stones" target="_top">What These Stones Mean &rarr;</a></p>', s)
p.write_text(s, encoding="utf-8")
p = root / "test-sas-v1.js"; t = p.read_text(encoding="utf-8")
t = sub1('d.querySelector(".sas-safe").textContent === "Nothing you write here reaches us unless you choose to save it with us. Everything else stays on your device.");',
         'd.querySelector(".sas-safe").textContent === "Nothing you write here reaches us unless you choose to save it with us. Everything else stays on your device.");\n    t("build 13: the foot leads to the reading room — ← Your Story, then What These Stones Mean → (/stones); the two apart", (() => { const as = [...d.querySelectorAll(".sas-back a")]; return as.length === 2 && as[0].getAttribute("href") === "/your-story" && as[1].getAttribute("href") === "/stones" && as[1].textContent === "What These Stones Mean →" && /\\.ew-root \\.sas-back a\\+a\\{margin-left:18px\\}/.test(page) && /AP-SAS-v1 · build 13 \\(/.test(page); })());', t)
p.write_text(t, encoding="utf-8")
print("build 13 patched")
