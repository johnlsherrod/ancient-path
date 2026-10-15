#!/usr/bin/env python3
"""Do Hard Things section 18 (In Your Own Words) — one build, Oct 14, 2026.
Derives The Man Who Crossed v13 (AP-ARC-DHT-v13) from the live v12 source (read from the served unit, sha256 ae6021f8…00ae)
by exact string replacement, on the Known by Jesus section 13 pattern (Here I Am v13.1). Every replacement asserts the old
text occurs exactly once."""
import hashlib, pathlib

SRC = pathlib.Path("/home/claude/ap/src")
OUT = pathlib.Path("/home/claude/ap/out"); OUT.mkdir(exist_ok=True)

KEEP = '<strong>Nothing you write here reaches us unless you choose to save it with us.</strong> Everything else stays on your device.'
WS = "https://lwfiles.mycourse.app/69ff74fa031fcc8033475300-public/publicFiles/2-The_Man_Who_Crossed_worksheet.pdf"

def rep(s, old, new, n=1):
    c = s.count(old)
    assert c == n, f"expected {n} occurrence(s), found {c}: {old[:80]!r}"
    return s.replace(old, new)

def sha(s): return hashlib.sha256(s.encode("utf-8")).hexdigest()

h = (SRC / "arc-dht-v12-source.txt").read_text(encoding="utf-8")
assert sha(h) == "ae6021f8a9ead4d2951c260712d01a99c9fc4f953a7e6048b3d38a7db02200ae", "the source is not the live v12"
assert h.startswith("<!-- AP-ARC-DHT-v12 (")

h = rep(h, "<!-- AP-ARC-DHT-v12 (",
        "<!-- AP-ARC-DHT-v13 (v13, 14 Oct 2026, John's rulings: the Before You Begin unit is gone and its framing is the opening of this page — one path not the whole, the first storm before the walk on water, twelve parts of preparation, then what the crossing built and cost; the guidance line is one short line under it (short is better, write what you could point at); the worksheet link under that as a small line; the privacy line moves to the foot under the writing, above the 988 line, in the house words (first sentence bold, nothing after it) and the old grey bar sentences gone; examples by role, never name (the two first names out), and the two prompts that asked for names ask by role; the step row (Back · Next · Save and stop for now) leaves the screen at the finish with the same force the engine's row rule uses; the progress label reads 1 of 5; the Hand line quotes Who Stayed back in lowercase when the answer starts with an ordinary word, so a role reads mid-line and a name keeps its capital) (")

# the opening: two paragraphs, the guidance line, the worksheet line
old_open = ('<p class="arc-lede">Twenty-five answers, five parts. Each line starts for you and leaves a gap; you fill it in a few words. What comes out the other side is your crossing as a poem &mdash; from the shore you stood on to the table you sit at now. Where I&rsquo;m From asks where you came from. This asks what you did.</p>\n'
            '<p class="arc-safe">Short is better. The shortest true answer usually lands hardest, and there is always a next gap. Write what you could point at &mdash; a place, a person, something someone said, what your body did. If you think in ideas, give each idea one picture. Nothing here is graded, and nothing leaves this page unless you press Save. You can stop at any part and come back.</p>\n')
new_open = ('<p class="arc-lede">Do Hard Things was one path into the work you have been doing, not the whole of it. Before Peter walked on water there was another storm: the disciples afraid, Jesus asleep, until they woke Him and He spoke to the wind and the waves. That storm taught them who He was, and it is what let Peter, in the next one, hear &ldquo;Come&rdquo; and step out of the boat. Twelve parts worked the same way: not one act of strength, but lesson after lesson, each one Christ used to prepare you for what came next.</p>\n'
            '<p class="arc-lede">The Man Who Crossed is where you name what that preparation built, and what the last hard thing &mdash; the crossing &mdash; cost. Twenty-five lines, five parts. Each line starts for you; you finish it in your own words. What comes out the other side is your crossing as a poem &mdash; from the shore you stood on to the table you sit at now. Where I&rsquo;m From asks where you came from. This asks what you did.</p>\n'
            '<p class="arc-guide">Short is better. Write what you could point at &mdash; a place, a person, something someone said, what your body did. One picture per idea.</p>\n'
            '<p class="arc-paper">Prefer paper? <a href="' + WS + '" target="_blank" rel="noopener">Print the worksheet</a>.</p>\n')
h = rep(h, old_open, new_open)

# styles: the grey bar rule goes; the guide line, the paper line and the foot pair come in
h = rep(h, ".arc-safe{font:400 15px/1.5 var(--a-sans);color:var(--a-quiet);margin:0 0 26px;padding-left:12px;border-left:2px solid var(--a-bronze)}\n",
           ".arc-guide{font:400 15px/1.5 var(--a-sans);color:var(--a-quiet);margin:4px 0 0}\n.arc-paper{font:400 14px/1.5 var(--a-sans);color:var(--a-quiet);margin:6px 0 26px}\n.arc-paper a{color:var(--a-navy)}\n")
h = rep(h, ".arc-foot a{color:var(--a-navy)}\n",
           ".arc-foot a{color:var(--a-navy)}\n.arc-foot.arc-keep{margin-bottom:0}\n.arc-foot.arc-keep + .arc-foot{margin-top:10px;padding-top:0;border-top:0}\n")

# the foot: the house line first, directly above the 988 line
h = rep(h, '<p class="arc-foot"><strong>If something in this stirred',
           '<p class="arc-foot arc-keep">' + KEEP + '</p>\n<p class="arc-foot"><strong>If something in this stirred')

# examples by role, never name; the two prompts that asked for names ask by role
h = rep(h, 'prompt: "The man, or the people, who stayed in the room when you could not fix yourself.", stem: "", shape: "___ stayed in the room.", ex: "Dan stayed in the room." },',
           'prompt: "The man, or the people, who stayed in the room when you could not fix yourself. By role, not name \\u2014 a friend, a man from your group.", stem: "", shape: "___ stayed in the room.", ex: "A man from my group stayed in the room." },')
h = rep(h, 'prompt: "The men who walked this with you. Names, if you can.", stem: "", shape: "___ walked it with me.", ex: "Dan and Luis walked it with me." },',
           'prompt: "The men who walked this with you. By role, not name \\u2014 a friend, the men in your group.", stem: "", shape: "___ walked it with me.", ex: "Two men from my group walked it with me." },')
h = rep(h, 'ex: "I reach down to the guy at work whose marriage is coming apart, the way Dan reached for me." },',
           'ex: "I reach down to the guy at work whose marriage is coming apart, the way a man from my group reached for me." },')

# the step row leaves the screen at the finish (the engine's row rule is display:flex!important); the label reads 1 of 5
h = rep(h, 'partsEl.style.display = ""; nav.style.display = ""; gateEl.style.display = ""; draftPanel.style.display = "";',
           'partsEl.style.display = ""; nav.style.removeProperty("display"); gateEl.style.display = ""; draftPanel.style.display = "";')
h = rep(h, 'partsEl.style.display = "none"; nav.style.display = "none"; gateEl.style.display = "none"; draftPanel.style.display = "none";',
           'partsEl.style.display = "none"; nav.style.setProperty("display", "none", "important"); gateEl.style.display = "none"; draftPanel.style.display = "none";')
h = rep(h, '<span id="arcPartLabel">Part 1 of 5</span>', '<span id="arcPartLabel">1 of 5</span>')
h = rep(h, 'lbl.textContent = "Part " + (cur + 1) + " of " + PARTS.length;', 'lbl.textContent = (cur + 1) + " of " + PARTS.length;')

# the Hand line quotes Who Stayed back; an answer by role starts with an ordinary word (A man from my group) and must read lowercase mid-line, a name keeps its capital
h = rep(h, 'if (ln.tail.echo) { var e = strip(clean(g(ln.tail.echo))); if (words(e) > (ln.tail.max || 99)) e = ln.tail.fallback || e; out += ln.tail.text + e + ln.tail.then; }',
           'if (ln.tail.echo) { var e = uncap(strip(clean(g(ln.tail.echo)))); if (words(e) > (ln.tail.max || 99)) e = ln.tail.fallback || e; out += ln.tail.text + e + ln.tail.then; }')
h = rep(h, 'function words(t) { return clean(t).split(" ").filter(Boolean).length; }',
           'function words(t) { return clean(t).split(" ").filter(Boolean).length; }\nfunction uncap(t) { var f = t.split(" ")[0].toLowerCase(); return /^(a|an|the|my|our|some|one|two|three|four|five|several|men|guys|friends|brothers|people)$/.test(f) ? t.charAt(0).toLowerCase() + t.slice(1) : t; }')

assert "Dan" not in h and "Luis" not in h and "arc-safe" not in h and "graded" not in h and "leaves this page" not in h
assert 'nav.style.display' not in h and '"Part "' not in h and "Names, if you can" not in h
assert h.count(KEEP) == 1 and h.count("Nothing you write here") == 1 and h.count("G-VKPN74MHRZ") == 0
assert "{{" not in h
(OUT / "arc-dht-v13.html").write_text(h, encoding="utf-8")
t = (OUT / "arc-dht-v13.html").read_text(encoding="utf-8")
print(f"arc-dht-v13.html chars={len(t)} bytes={len(t.encode('utf-8'))} sha256={sha(t)}")
