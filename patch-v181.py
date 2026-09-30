#!/usr/bin/env python3
# story.js v18 -> v18.1 (29 Sept 2026). John, on the v18 finish: "in the ui there are two edit buttons. necessary? the five questions
# and hear it are between the blue buttons interrupting the flow."
#   1. one Edit: the engine's own "Edit the whole thing" button is no longer mounted (Edit and "Tap any line to change it" cover it).
#   2. the quiet line (Read it back · Hear it · Five questions, and what they show) moves below Go to your page, on its own line,
#      above the rule; Print · Copy stay under the rule.
import re, sys
p = "story.js"
s = open(p, encoding="utf-8").read()

def rep(old, new, n=1):
    global s
    c = s.count(old)
    if c != n:
        sys.exit("expected %d, found %d: %r" % (n, c, old[:90]))
    s = s.replace(old, new)

rep("   AP-STORY-MODULE-v18\n", "   AP-STORY-MODULE-v18.1\n")
rep("   v18 (29 Sept 2026) — the finish, reshaped.",
    "   v18.1 (29 Sept 2026) — one Edit (the engine's \"Edit the whole thing\" is no longer\n"
    "     mounted: Edit and \"Tap any line to change it\" cover it); the quiet line\n"
    "     (Read it back · Hear it · Five questions) sits below Go to your page, on its\n"
    "     own line above the rule, so the two dark buttons are never interrupted.\n"
    "   v18 (29 Sept 2026) — the finish, reshaped.")

# 1. one Edit
rep("    this.mountEditAll(row);\n", "    /* v18.1: mountEditAll is no longer called — one Edit (John, 29 Sept) */\n")

# 2. the quiet line below Your page: 21 Your page · 22 break · 23 the quiet line · 24 what it shows · 25 rule · 30 quiet things
rep("  /* the finish, v18: 5 saved + what's left · 6 Edit · 7 Save · 10 break · 11 the ⓘ line · 12 the quiet line (Read it back · Hear it · Five questions) · 16 results and the walk · 17 the five cards · 21 Your page · 25 break · 30 the quiet things (Print · Copy · Save image · Edit the whole thing) */",
    "  /* the finish, v18.1: 5 saved + what's left · 6 Edit · 7 Save · 10 break · 21 Your page · 22 break · 23 the quiet line (Read it back · Hear it · Five questions) · 24 the ⓘ line, results and the five cards · 25 rule · 30 the quiet things (Print · Copy · Save image) */")
rep('    if (node.classList.contains("aps-assist")) { return 11; }\n', '    if (node.classList.contains("aps-assist")) { return 24; }\n')
rep('    if (node.classList.contains("aps-act")) { return 12; }\n', '    if (node.classList.contains("aps-act")) { return 23; }\n')
rep('    if (node.classList.contains("aps-read")) { return 16; }\n', '    if (node.classList.contains("aps-read")) { return 24; }\n')
rep('    if (node.classList.contains("aps-after")) { return 12; }\n', '    if (node.classList.contains("aps-after")) { return 23; }\n')
rep('    if (node.classList.contains("aps-break")) { return node.getAttribute("data-at") === "a" ? 10 : 25; }\n',
    '    if (node.classList.contains("aps-break")) { var at = node.getAttribute("data-at"); return at === "a" ? 10 : at === "c" ? 22 : 25; }\n')
rep('    if (slot === 8) { return 12; }\n', '    if (slot === 8) { return 23; }\n')
rep("""      if (!row.querySelector('.aps-break[data-at="a"]')) { row.appendChild(breakEl("a")); row.appendChild(breakEl("b")); }\n""",
    """      if (!row.querySelector('.aps-break[data-at="a"]')) { row.appendChild(breakEl("a")); row.appendChild(breakEl("c")); row.appendChild(breakEl("b")); }\n""")
# the quiet line gets a little air above it, under Your page
rep('        ".aps-row.aps-finish > .aps-break[data-at=\\"b\\"]{height:1px;background:#E5DCC8;margin:10px 0 2px}" +\n',
    '        ".aps-row.aps-finish > .aps-break[data-at=\\"b\\"]{height:1px;background:#E5DCC8;margin:10px 0 2px}" +\n'
    '        ".aps-row.aps-finish > .aps-break[data-at=\\"c\\"]{margin-top:6px}" +\n')

rep('version: "18"', 'version: "18.1"')
open(p, "w", encoding="utf-8").write(s)
print("ok", len(s.encode("utf-8")))
