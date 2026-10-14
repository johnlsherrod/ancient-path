#!/usr/bin/env python3
"""Known by Jesus section 13 / Do Hard Things section 18 — one build (Oct 14, 2026).
Derives Here I Am v13 and Your Next Step v7 (KBJ) / v8 (DHT) from the served sources by exact string replacement.
Every replacement asserts the old text occurs exactly once."""
import hashlib, pathlib, sys

SRC = pathlib.Path("/home/claude/ap/src")
OUT = pathlib.Path("/home/claude/ap/out"); OUT.mkdir(exist_ok=True)

KEEP = '<strong>Nothing you write here reaches us unless you choose to save it with us.</strong> Everything else stays on your device.'
WS_HIA = "https://lwfiles.mycourse.app/69ff74fa031fcc8033475300-public/publicFiles/Here_I_Am_worksheet.pdf"

def rep(s, old, new, n=1):
    c = s.count(old)
    assert c == n, f"expected {n} occurrence(s), found {c}: {old[:80]!r}"
    return s.replace(old, new)

def sha(s): return hashlib.sha256(s.encode("utf-8")).hexdigest()

# ---------------------------------------------------------------- Here I Am v13
h = (SRC / "here-i-am-v12-source.txt").read_text(encoding="utf-8")
assert h.startswith("<!-- AP-HIA-KBJ-v12 (")
h = rep(h, "<!-- AP-HIA-KBJ-v12 (",
        "<!-- AP-HIA-KBJ-v13 (v13, 14 Oct 2026: the Before You Begin unit is gone and its framing is the opening of this page — John's copy, Ayeka to the table, with the worksheet link under it as a small line; the privacy line moves to the foot under the writing, above the 988 line, in the house words (first sentence bold, nothing after it) and the old second paragraph is gone; the example naming Luis now says a man in my group, and that prompt asks by role, not name) (")
# the opening: two paragraphs of John's copy, then the worksheet line
old_open = ('<p class="arc-lede">The course opened with the oldest question there is: <em>Ayeka</em> &mdash; where are you? Twenty-seven lines, five parts. Each line starts for you; you finish it in your own words. What comes out the other side is your answer as a poem &mdash; from the tower you built to the table you sit at now.</p>\n'
            '<p class="arc-safe">Nothing here is graded, and nothing leaves this page unless you press Save. Finish each line the way you would say it &mdash; a few words or a whole sentence, whichever is true. You can stop at any part and come back.</p>\n')
new_open = ('<p class="arc-lede">In the opening pages of the Bible, God&rsquo;s first question to a hiding Adam was not an accusation. It was <em>Ayeka</em> &mdash; where are you? Known by Jesus is one path into answering it, not the whole of it. The mirror, the slower walk, the table: each one worked on the same hiding Adam knew, and shaped how you would answer.</p>\n'
            '<p class="arc-lede">Here I Am is where you give your answer. Twenty-seven lines, five parts. Each line starts for you; you finish it in your own words. What comes out the other side is your answer as a poem &mdash; from the tower you built to the table you sit at now.</p>\n'
            '<p class="arc-paper">Prefer paper? <a href="' + WS_HIA + '" target="_blank" rel="noopener">Print the worksheet</a>.</p>\n')
h = rep(h, old_open, new_open)
# styles: the old grey bar rule goes; the paper line and the foot pair come in
h = rep(h, ".arc-safe{font:400 15px/1.5 var(--a-sans);color:var(--a-quiet);margin:0 0 26px;padding-left:12px;border-left:2px solid var(--a-bronze)}\n",
           ".arc-paper{font:400 14px/1.5 var(--a-sans);color:var(--a-quiet);margin:6px 0 26px}\n.arc-paper a{color:var(--a-navy)}\n")
h = rep(h, ".arc-foot a{color:var(--a-navy)}\n",
           ".arc-foot a{color:var(--a-navy)}\n.arc-foot.arc-keep{margin-bottom:0}\n.arc-foot.arc-keep + .arc-foot{margin-top:10px;padding-top:0;border-top:0}\n")
# the foot: the house line first, directly above the 988 line
h = rep(h, '<p class="arc-foot"><strong>If something in this stirred',
           '<p class="arc-foot arc-keep">' + KEEP + '</p>\n<p class="arc-foot"><strong>If something in this stirred')
# Luis → a man in my group; the prompt asks by role
h = rep(h, 'prompt: "The first person you let know you, and where.", stem: "The first one I let know me was", ex: "The first one I let know me was Luis, on a Thursday, in a room of eight men."',
           'prompt: "The first person you let know you, and where. By role, not name — a friend, a brother, a man in your group.", stem: "The first one I let know me was", ex: "The first one I let know me was a man in my group, on a Thursday, in a room of eight men."')
# the static count under the title said 25 before the script runs; the poem has 27 lines
h = rep(h, '<span id="arcCount">0 of 25 written</span>', '<span id="arcCount">0 of 27 written</span>')
assert h.count("Luis") == 1 and "arc-safe" not in h and "graded" not in h
assert h.count(KEEP) == 1 and h.count("Nothing you write here") == 1
assert h.count("G-VKPN74MHRZ") == 0
(OUT / "arc-kbj-v13.html").write_text(h, encoding="utf-8")

# ---------------------------------------------------------------- Your Next Step v7 (KBJ) / v8 (DHT)
def next_step(src_name, out_name, old_marker, new_marker, note):
    n = (SRC / src_name).read_text(encoding="utf-8")
    assert n.startswith(old_marker)
    n = rep(n, old_marker, new_marker + " (" + note + ") (")
    n = rep(n, '<p class="nxs-safe">Nothing here is graded, and nothing leaves this page unless you press Save. Saving puts it on your page, beside anything else you have written.</p>\n', "")
    n = rep(n, ".nxs-safe{font:400 15px/1.5 var(--n-sans);color:var(--n-quiet);margin:0 0 26px;padding-left:12px;border-left:2px solid var(--n-bronze)}\n", "")
    # the anchor line now sits directly under the lede: give it the room the grey bar used to leave
    n = rep(n, ".nxs-anchor{font:italic 400 17px/1.5 var(--n-serif);color:var(--n-navy);margin:0 0 22px}",
               ".nxs-anchor{font:italic 400 17px/1.5 var(--n-serif);color:var(--n-navy);margin:14px 0 22px}")
    n = rep(n, '<span id="nxsStepLabel">Part 1 of 6</span>', '<span id="nxsStepLabel">1 of 6</span>')
    n = rep(n, 'lbl.textContent = "Part " + (cur + 1) + " of " + STEPS.length;', 'lbl.textContent = (cur + 1) + " of " + STEPS.length;')
    n = rep(n, ".nxs-foot a{color:var(--n-navy)}\n",
               ".nxs-foot a{color:var(--n-navy)}\n.nxs-foot.nxs-keep{margin-bottom:0}\n.nxs-foot.nxs-keep + .nxs-foot{margin-top:10px;padding-top:0;border-top:0}\n")
    n = rep(n, '<p class="nxs-foot"><strong>If something in this stirred',
               '<p class="nxs-foot nxs-keep">' + KEEP + '</p>\n<p class="nxs-foot"><strong>If something in this stirred')
    # the story assistant row, as Here I Am v12 carries it (kind poem = Read it back + the circled i); unit sentence because these are answers, not lines
    n = rep(n, '    root: ".nxs-root",\n', '    assistant: { kind: "poem", unit: "sentence", name: "Your Next Step" },\n    root: ".nxs-root",\n')
    assert "nxs-safe" not in n and "graded" not in n and '"Part "' not in n
    assert n.count(KEEP) == 1 and n.count("G-VKPN74MHRZ") == 0
    (OUT / out_name).write_text(n, encoding="utf-8")
    return n

NOTE_K = "v7, 14 Oct 2026: the progress label reads 1 of 6, not Part 1 of 6; the privacy line moves to the foot under the writing, above the 988 line, in the house words (first sentence bold, nothing after it) and the old second paragraph is gone; the story assistant row (Read it back with its circled i) comes in as Here I Am v12 carries it"
NOTE_D = NOTE_K.replace("v7, 14 Oct", "v8, 14 Oct")
nk = next_step("next-step-kbj-v6-source.txt", "nxs-kbj-v7.html", "<!-- AP-NEXTSTEP-KBJ-v6 (", "<!-- AP-NEXTSTEP-KBJ-v7", NOTE_K)
nd = next_step("next-step-dht-v7-source.txt", "nxs-dht-v8.html", "<!-- AP-NEXTSTEP-DHT-v7 (", "<!-- AP-NEXTSTEP-DHT-v8", NOTE_D)

for f in sorted(OUT.glob("*.html")):
    t = f.read_text(encoding="utf-8")
    print(f"{f.name:18} chars={len(t):6} sha256={sha(t)}")
