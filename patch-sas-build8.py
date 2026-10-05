#!/usr/bin/env python3
"""Set a Stone build 8, the narrative (John's walk of build 7, Oct 4): the two scenes named — Possession of the Promise (in)
and Divine Intervention (back); what God promised needed God to keep, by bringing them in and by bringing them back (grace,
not mercy only); Gilgal defined on the writing page to set up the return; the third line is the stone's name, as Samuel's was
Help; the return asks what the LORD has done since — "the stone won't change his life… their relationship with God will.
It's a reminder not an idol"; the example of the return on the page; the blank verse line hidden until a word is tapped
(the spacing John saw under the meaning line and under the LORD line)."""
import os
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'sas-body.html'); s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, a[:70]
    s = s.replace(a, b)
rep('<!-- AP-SAS-v1 · build 8 (4 Oct 2026: stone.js v2.5 — the return has its ground)',
    '<!-- AP-SAS-v1 · build 8 (4 Oct 2026, John\'s walk of build 7: the two scenes named — Possession of the Promise (in), Divine Intervention (back) — and the line through them, what God promised God kept; Gilgal defined to set up the return; the third line is the stone\'s name, as Samuel\'s was Help; the return asks what the LORD has done since — the stone is a reminder, not an idol; the example of the return; the blank verse line hidden until a word is tapped; stone.js v2.6 — the return asks by name)')
# styles: the scene label; the verse line hidden while empty
rep('.ew-root .sas-where{font:italic 400 14px/1.5 var(--e-serif);color:var(--e-quiet);margin:8px 0 0;min-height:1.5em}',
    '.ew-root .sas-where{font:italic 400 14px/1.5 var(--e-serif);color:var(--e-quiet);margin:8px 0 0}\n.ew-root .sas-where:empty{display:none}\n.ew-root .sas-scene-k{font:600 12px/1.4 var(--e-sans);letter-spacing:.18em;text-transform:uppercase;color:var(--e-bronze);margin:0 0 8px}\n.ew-root .sas-return-ex{font:400 15px/1.55 var(--e-sans);color:var(--e-quiet);margin:-10px 0 26px;padding:12px 14px;background:var(--e-paper);border:1px solid var(--e-rule)}\n.ew-root .sas-return-ex i{color:var(--e-ink)}')
# the lede
rep('<p class="ew-lede">In three lines, mark what God has done. Your stone is kept on your page, and three months from now you will be asked what it means.</p>',
    '<p class="ew-lede">In three lines, mark what God has done and name the stone. It is kept on your page, and three months from now it asks you to look again: what has the LORD done since?</p>')
# the scenes, named
rep('<p class="ew-quote">When your children ask their fathers',
    '<p class="sas-scene-k">Possession of the promise &middot; In</p>\n<p class="ew-quote">When your children ask their fathers')
rep('<p class="sas-what">Twelve stones, lifted from the riverbed where the priests had stood, carried to Gilgal and set where a child would see them and ask. The stones were set so the question would be asked. The answer was the story: the river stopped, and Israel crossed on dry ground. God brought them in &mdash; from forty years in the wilderness, into a land they had never set foot in.</p>',
    '<p class="sas-what">God promised Abraham a land and a people. Generations later Israel stood at the river, and the promise needed God himself to keep it: the water stopped, and they crossed on dry ground. Twelve stones, lifted from the riverbed where the priests had stood, were carried to Gilgal and set where a child would see them and ask. Gilgal means to roll &mdash; on that ground the LORD rolled their shame away. The stones were set so the question would be asked, and the answer was the story. God brought them in: from forty years in the wilderness, into a land they had never set foot in.</p>')
rep('<p class="ew-quote">Then Samuel took a stone',
    '<p class="sas-scene-k">Divine intervention &middot; Back</p>\n<p class="ew-quote">Then Samuel took a stone')
rep('<p class="sas-what">Ebenezer means stone of help. Israel had wandered from the LORD for years. At Mizpah they came back, confessed, and the Philistines attacked while they prayed. The LORD answered. Samuel set the stone on the same ground where Israel had lost before, and named it for help they had not earned. God brought them back &mdash; from twenty years of idols, to the LORD they had left.</p>',
    '<p class="sas-what">Israel had the land and broke the covenant. For twenty years they chased other gods, and they lost the Ark. At Mizpah they came back and confessed, and the Philistines attacked while they prayed. God did not only hold back what they deserved; he fought for them. Samuel set a stone on the ground of the old loss and named it Ebenezer, stone of help &mdash; help they had not earned. God brought them back: from twenty years of idols, to the LORD they had left.</p>')
# the frame and the example of the return
rep('<p class="sas-frame">Two stones. One remembers a crossing: God brought us in. One remembers help: God brought us back. In is the first time; back is the return. Neither was set from a place of strength: one was lifted from the riverbed, the other set on the ground of an old loss. Both were set to be asked about. That is why your stone has three lines &mdash; who it is for, what the LORD has done, what it means &mdash; and why, three months from now, <span style="white-space:nowrap">it asks you.</span></p>',
    '<p class="sas-frame">Two stones, one line through them: what God promised, God kept &mdash; by bringing them in, and by bringing them back when they had broken it. Neither was set from a place of strength. Both were named, and both were set to be asked about. The stone does not change you; it reminds you who does. What about you? Can you stand on his promises and accept that, at times, he will step in for you? That is why your stone has three lines &mdash; who it is for, what the LORD has done, and the name you give it &mdash; and why, three months from now, it asks you to <span style="white-space:nowrap">look again.</span></p>\n<p class="sas-return-ex">Three months on, the stone asks. For example: <i>&ldquo;You named this stone surrender. What has the LORD done in you since?&rdquo;</i> &mdash; <i>&ldquo;He keeps showing me the fight I pick back up, and he keeps taking it out of my&nbsp;hands.&rdquo;</i></p>')
# the third line: the name
rep('prompt: "The answer you give when someone asks what this stone means.", rowNote: "Pick one to see where it comes from, or write your own."',
    'prompt: "The answer you give when someone asks what this stone means — its name. Samuel named his Help.", rowNote: "Pick a name to see where it comes from, or give your own."')
open(p, 'w', encoding='utf-8').write(s)
# tests
t = os.path.join(here, 'test-sas-v1.js'); u = open(t, encoding='utf-8').read()
def rept(a, b):
    global u
    assert u.count(a) == 1, ('test', a[:70])
    u = u.replace(a, b)
rept('/^Twelve stones, lifted from the riverbed where the priests had stood, carried to Gilgal and set where a child would see them and ask\\. The stones were set so the question would be asked\\./',
     '/^God promised Abraham a land and a people\\. Generations later Israel stood at the river, and the promise needed God himself to keep it/')
rept('/^Ebenezer means stone of help\\./', '/^Israel had the land and broke the covenant\\./')
rept('/named it for help they had not earned\\. God brought them back — from twenty years of idols, to the LORD they had left\\.$/',
     '/named it Ebenezer, stone of help — help they had not earned\\. God brought them back: from twenty years of idols, to the LORD they had left\\.$/')
rept('d.querySelector(".sas-what").previousElementSibling.classList.contains("ew-quote") && d.querySelector(".sas-frame").textContent === "Two stones. One remembers a crossing: God brought us in. One remembers help: God brought us back. In is the first time; back is the return. Neither was set from a place of strength: one was lifted from the riverbed, the other set on the ground of an old loss. Both were set to be asked about. That is why your stone has three lines — who it is for, what the LORD has done, what it means — and why, three months from now, it asks you."',
     'd.querySelector(".sas-what").previousElementSibling.classList.contains("ew-quote") && d.querySelector(".sas-frame").textContent === "Two stones, one line through them: what God promised, God kept — by bringing them in, and by bringing them back when they had broken it. Neither was set from a place of strength. Both were named, and both were set to be asked about. The stone does not change you; it reminds you who does. What about you? Can you stand on his promises and accept that, at times, he will step in for you? That is why your stone has three lines — who it is for, what the LORD has done, and the name you give it — and why, three months from now, it asks you to look again." && [...d.querySelectorAll(".sas-scene-k")].map(e => e.textContent).join("|") === "Possession of the promise · In|Divine intervention · Back" && /Gilgal means to roll — on that ground the LORD rolled their shame away\\./.test(w[0]) && /^Three months on, the stone asks\\. For example: “You named this stone surrender\\. What has the LORD done in you since\\?” — “He keeps showing me/.test(d.querySelector(".sas-return-ex").textContent) && /\\.sas-where:empty\\{display:none\\}/.test(page)')
rept('d.querySelector(".ew-lede").textContent === "In three lines, mark what God has done. Your stone is kept on your page, and three months from now you will be asked what it means."',
     'd.querySelector(".ew-lede").textContent === "In three lines, mark what God has done and name the stone. It is kept on your page, and three months from now it asks you to look again: what has the LORD done since?"')
rept('/The answer you give when someone asks what this stone means', '/The answer you give when someone asks what this stone means — its name\\. Samuel named his Help\\./.test(d.querySelectorAll(".ew-slot-prompt")[2].textContent) && /The answer you give when someone asks what this stone means')
rept('/The answer you give when someone asks what this stone means\\./.test(page) && /Pick one to see where it comes from, or write your own\\./.test(page)', '/The answer you give when someone asks what this stone means — its name\\. Samuel named his Help\\./.test(page) && /Pick a name to see where it comes from, or give your own\\./.test(page)')
rept('d.querySelectorAll(".sas-slot")[2].querySelector(".sas-row-note").textContent === "Pick one to see where it comes from, or write your own."', 'd.querySelectorAll(".sas-slot")[2].querySelector(".sas-row-note").textContent === "Pick a name to see where it comes from, or give your own."')
open(t, 'w', encoding='utf-8').write(u)
print('build 8 narrative in')
