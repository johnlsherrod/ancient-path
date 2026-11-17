#!/usr/bin/env python3
"""Your Page v37.16 (17 Nov 2026): the Ending Well card opens the piece at the door he came in by.
Built on the newest repo copy, pages/start-v37.15.html (the live /start was not read for this build; its foot is checked after install)."""
import sys, hashlib
s = open("pages/start-v37.15.html", encoding="utf-8").read()
def rep(old, new, count=1):
    global s
    n = s.count(old)
    if n != count:
        print("NEEDLE x%d (want %d): %s" % (n, count, old[:100].replace("\n", "\\n"))); sys.exit(1)
    s = s.replace(old, new)
rep("<!-- AP-HOME-v37.15 (v37.15, Nov 14, 2026,",
    "<!-- AP-HOME-v37.16 (v37.16, Nov 17, 2026, with Ending Well v5 and the Your Story page: one record, either way in — Ending Well has its own public page at /ending-well, and the card here opens the piece at the door he came in by (the saved meta carries door: course or public): Pick up where you left off, Your words and Write another go to /ending-well for a man who wrote it there and to the Breaking Free player for a man who wrote it in Week 12; the card's kind line reads Endings for the public door and Breaking Free for the course; the piece's step count is eight, as the piece is; an offered story from the public door is attributed to Ancient Path, never to a course he did not take. Nothing else changed; the stylesheets are untouched, so the stamped rule counts stand) (v37.15, Nov 14, 2026,")
rep('Your Page · AP-HOME-v37.15</p>', 'Your Page · AP-HOME-v37.16</p>')
rep('var BUILD = "AP-HOME-v37.15";', 'var BUILD = "AP-HOME-v37.16";')
rep('                    parts: 6,\n                    partWord: "part",\n                    page: "/ebook/ebook6ac01a803708b7aebd0eef32-6ac01a80a3155",',
    '                    parts: 8,\n                    partWord: "part",\n                    page: "/ebook/ebook6ac01a803708b7aebd0eef32-6ac01a80a3155",')
rep('            window.apSurfaces = SURFACES;\n            window.apPileAt = "stones";',
    '            window.apSurfaces = SURFACES;\n            var DOORS = {}; /* v37.16: the door each piece was written at (Ending Well: course or public), read from its saved meta */\n            window.apPileAt = "stones";')
rep('                        step: meta && typeof meta.step === "number" ? meta.step + 1 : null,\n                        first: firstLines,',
    '                        step: meta && typeof meta.step === "number" ? meta.step + 1 : null,\n                        door: (DOORS[key] = meta && meta.door ? String(meta.door) : ""),\n                        first: firstLines,')
rep('            function paint(st) {',
    '            /* v37.16: where a piece opens. Ending Well has two doors and one record: the public page for a man who wrote it there, the Breaking Free player for a man who wrote it in Week 12 */\n            function pageOf(key, st) {\n                var s = SURFACES[key];\n                return (key === "ew" && st && st.door === "public") ? "/ending-well" : s.page;\n            }\n\n            function paint(st) {')
rep('                var open = s.page + (s.page.indexOf("?") >= 0 ? "&open=1" : "?open=1");',
    '                var base = pageOf(st.key, st);\n                var open = base + (base.indexOf("?") >= 0 ? "&open=1" : "?open=1");\n                var kindEl = card.querySelector(".ap-card-kind");\n                if (kindEl && st.key === "ew") {\n                    kindEl.textContent = st.door === "public" ? "Endings" : "Breaking Free";\n                }')
rep("(s.once ? \"\" : '<a class=\"ap-btn ap-btn-ghost\" href=\"' + s.page + '\">Write another</a>')",
    "(s.once ? \"\" : '<a class=\"ap-btn ap-btn-ghost\" href=\"' + base + '\">Write another</a>')")
rep('                    p.href = s.page + (s.page.indexOf("?") >= 0 ? "&open=1" : "?open=1");',
    '                    var pb = pageOf(inProg.key, inProg);\n                    p.href = pb + (pb.indexOf("?") >= 0 ? "&open=1" : "?open=1");')
rep('                    l.href = SURFACES[inProg.key].page + (SURFACES[inProg.key].page.indexOf("?") >= 0 ? "&open=1" : "?open=1");',
    '                    l.href = pb + (pb.indexOf("?") >= 0 ? "&open=1" : "?open=1");')
rep('                                from: s.from,\n                                email: a.email || "",',
    '                                from: (DOORS[key] === "public" ? "Ancient Path" : s.from),\n                                email: a.email || "",')
open("pages/start-v37.16.html", "w", encoding="utf-8").write(s)
b = open("pages/start-v37.16.html", "rb").read()
print("pages/start-v37.16.html", len(b), "bytes, sha256", hashlib.sha256(b.rstrip(b"\n")).hexdigest())
