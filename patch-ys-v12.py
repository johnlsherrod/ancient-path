#!/usr/bin/env python3
"""The Your Story hub v12 from v11 (pages/your-story-v11.html → pages/your-story-v12.html), 5 Oct 2026. Sonnet's read and a
render here: Read their stories is the "In Their Own Words" section on this hub, and it already reads the Published list —
a published stone appears there as a card and opens in the reader. But the engine titles an offered stone "Stone <id>"
and sends its name as the first line of the text, so the card read "Stone b1 / Help This stone is for my son…" and the
reader showed one run-together paragraph. v12: a published piece whose title is that record label is a stone — its short
first line (one to four words, not one of the stone's own stems) is the name; the name is the title on the card and in
the reader; the lines read under it, each its own paragraph in the reader; with no name, the title is "A stone"."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(here, 'pages', 'your-story-v11.html'), encoding='utf-8').read()
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (s.count(a), a[:70]); s = s.replace(a, b)
rep('<!-- AP-YS-v11 (v11, 5 Oct,', '<!-- AP-YS-v12 (v12, 5 Oct: a published stone reads as a stone in In Their Own Words and in the reader — its name is the title, its lines under it; "A stone" when it has no name) (v11, 5 Oct,')
helper = '''            /* v12: a published stone — the engine titles it "Stone <id>" and puts its name on the first line */
            function stoneOf(it) {
                var title = ("" + ((it && it.title) || "")).trim();
                if (!/^Stone [A-Za-z0-9_-]+$/.test(title)) return null;
                var lines = ("" + ((it && it.piece) || "")).split(NL).map(function(l) { return l.trim(); }).filter(Boolean);
                var first = lines[0] || "", stem = /^(This stone is for|The LORD has|Till now|What this stone means|What God did)\\b/i;
                var named = first && first.split(" ").length <= 4 && !stem.test(first) && lines.length > 1;
                return { name: named ? first : "", lines: named ? lines.slice(1) : lines };
            }
'''
# the cards (the first script): title and excerpt
rep('''            function safeId(x) {
                return ("" + (x || "")).replace(/[^A-Za-z0-9_-]/g, "");
            }
            window.apItowRender = function(data) {''',
helper + '''            function safeId(x) {
                return ("" + (x || "")).replace(/[^A-Za-z0-9_-]/g, "");
            }
            window.apItowRender = function(data) {''')
rep('''                        var title = ("" + (it.title || "")).trim() || "A testimony";
                        var card = document.createElement("a");''',
'''                        var title = ("" + (it.title || "")).trim() || "A testimony";
                        var st = stoneOf(it), text = it.piece;
                        if (st) { title = st.name || "A stone"; text = st.lines.join(NL); }
                        var card = document.createElement("a");''')
rep("'<blockquote>' + excerpt(it.piece) + '</blockquote>'", "'<blockquote>' + excerpt(text) + '</blockquote>'")
# the reader (the second script): heading and paragraphs
rep('''            function safeId(x) {
                return ("" + (x || "")).replace(/[^A-Za-z0-9_-]/g, "");
            }

            function hideAll() {''',
helper + '''            function safeId(x) {
                return ("" + (x || "")).replace(/[^A-Za-z0-9_-]/g, "");
            }

            function hideAll() {''')
rep('''                    title = ("" + (it.title || "")).trim() || "A testimony";
                var sec = document.createElement("section");
                sec.className = "itow-piece";
                sec.innerHTML = '<div class="itow-body itow-flow">' + paras(it.piece).map(function(p) {''',
'''                    title = ("" + (it.title || "")).trim() || "A testimony";
                var st = stoneOf(it), ps = st ? st.lines : paras(it.piece);
                if (st) title = st.name || "A stone";
                var sec = document.createElement("section");
                sec.className = "itow-piece";
                sec.innerHTML = '<div class="itow-body itow-flow">' + ps.map(function(p) {''')
assert s.count('function stoneOf(it)') == 2
open(os.path.join(here, 'pages', 'your-story-v12.html'), 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('pages/your-story-v12.html', len(b), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(b.rstrip(b'\n')).hexdigest())
