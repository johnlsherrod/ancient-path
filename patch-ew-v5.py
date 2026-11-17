#!/usr/bin/env python3
"""Ending Well v5 (17 Nov 2026): one source, two doors.
Reads ending-well-v4.8.html (the live Week 12 unit's page file) and writes
  ending-well-v5.html         data-mode="cohort" data-door="course"  (the Week 12 unit in Breaking Free)
  ending-well-v5-public.html  data-mode="solo"   data-door="public"  (the site page /ending-well)
Every needle must match exactly once; a miss stops the build."""
import re, sys, json, subprocess, hashlib

SRC = open("ending-well-v4.8.html", encoding="utf-8").read()
s = SRC

def rep(old, new, count=1):
    global s
    n = s.count(old)
    if n != count:
        print("NEEDLE x%d (want %d): %s" % (n, count, old[:110].replace("\n", "\\n")))
        sys.exit(1)
    s = s.replace(old, new)

story_sri = "sha384-" + subprocess.run("openssl dgst -sha384 -binary story.js | openssl base64 -A", shell=True, capture_output=True, text=True).stdout.strip()
STORY_COMMIT = "8f1abcc5e2cd47b36d27087bd7f85bd9b97b6ce7"

# ---- header --------------------------------------------------------------
rep("<!-- AP-EW-v4 (v4.8, 13 Oct 2026:",
    "<!-- AP-EW-v5 (v5, 17 Nov 2026: Ending Well on the Your Story page, ruled Nov 17 — one page file, two doors: data-door=\"course\" is the Week 12 unit, data-door=\"public\" is the site page /ending-well (the \"on your own\" setting built Oct 2 is the public page). One record: both doors write the same form and the same unit, so a man's Ending Well shows once on Your Page. "
    "The three open review rows closed in the same pass: repinned from story.js 19.1 to 20.4 (the Nov 14 save rule — kept from the first word, Stop for now, no save decision; 20.2's a save never takes a piece away); the rows are the engine's own — the way back is named for where it goes (Back to Week 12 in the course, Back to Your Story on the public page, Back to the part before on every other step), Edit is one quiet link in the finish row and a tap on any line of his words goes to the box it came from, the page's second Edit and its free-text editor are gone; the parts are named by what is on them (The men, Then and now, Seen and answered); a stone means \"a discipline kept\" (Daniel 6:10); held, sawme, takein and smallstep each carry a scene that does what the help line asks. "
    "John's rulings, Nov 17: the public door's Where I started lines are rewritten for a reader with no earlier chapters (Week 12 keeps its own); the stone's example is \"Do the next right thing.\" at both doors, with \"This stone is for my son, for when he asks.\" and \"What this stone means to me is a discipline kept: I do the next right thing.\" — his own stone line stays on his page. "
    "The public door leaves out Breaking Free, Week numbers, twelve weeks and the Week 2 lament line; the meta carries the door so Your Page opens the piece at the door he came in by. story.js 20.4 pinned at 8f1abcc, stone.js 2.9 at 816b4b0) (v4.8, 13 Oct 2026:")

# ---- root, top, eyebrow --------------------------------------------------
rep('<div class="ew-root" id="ewRoot" data-mode="cohort">',
    '<div class="ew-root" id="ewRoot" data-mode="cohort" data-door="course" data-build="AP-EW-v5">')
rep('<p class="ew-top-nav"><a class="ew-page-link" href="/start" target="_top">&larr; Your page</a></p>\n<p class="ew-eyebrow">Breaking Free · Ending Well</p>',
    '<p class="ew-eyebrow" id="ewEyebrow">Breaking Free · Ending Well</p>')

# ---- the rows ------------------------------------------------------------
rep('id="ewSaveNow">Save and stop for now</button>', 'id="ewSaveNow">Stop for now</button>')
rep('<p class="ew-note">Read it out loud once. Then save it, so it is waiting on your page with the men who can read it when you offer it.</p>',
    '<p class="ew-note">Read it out loud once. It is kept on your page, and other men can read it only when you offer it.</p>')
rep('    <textarea class="ew-editor" id="ewEditor" aria-label="Your story, to change"></textarea>\n', '')
rep('    <button type="button" class="ew-btn ew-btn-ghost" id="ewWords">Edit</button>\n', '')
rep('<button type="button" class="ew-btn ew-btn-ghost" id="ewEdit">Back to the questions</button>',
    '<button type="button" class="ew-btn ew-btn-ghost" id="ewEdit">Edit</button>')

# ---- css -----------------------------------------------------------------
rep("</style>",
    ".ew-root #ewBack::before{content:\"\\2190\\00a0\"}\n"
    ".ew-root .aps-row button{min-height:44px}.ew-root .ew-word{min-height:44px;display:inline-flex;align-items:center;padding:0 14px}.ew-root .ew-eyebrow,.ew-root .ew-panel-head{color:#8A6A32}\n"
    "@media (max-width:620px){.ew-root .aps-row.aps-step{gap:8px}.ew-root .aps-row.aps-step > button{white-space:normal;line-height:1.25 !important}.ew-root .aps-row.aps-step > #ewBack{order:1 !important;flex:1 1 46%}.ew-root .aps-row.aps-step > #ewNext{order:2 !important;flex:1 1 48%}.ew-root .aps-row.aps-step > #ewSaveNow{order:3 !important;flex:1 1 100%}}\n"
    "</style>")

# ---- the words: names by what is on them, a discipline kept ---------------
rep('{ w: "a new discipline", where:', '{ w: "a discipline kept", where:')
rep('ex: "What this stone means to me is a new discipline: I do the next right thing."',
    'ex: "What this stone means to me is a discipline kept: I do the next right thing."')

rep('{ title: "The Doorway", frame:', '{ title: "The men", frame:')
rep('{ title: "Between the lines", frame: "Two of your lines. What happened between them?",',
    '{ title: "Then and now", frame: "Two of your lines. What happened between them?",')
rep('{ title: "Between the lines", frame: "Two more pairs of your lines. What happened between each?",',
    '{ title: "Seen and answered", frame: "Two more pairs of your lines. What happened between each?",')

# the course words the public door leaves out (public overrides, applied after solo)
rep('solo: { frame: "Week 12 says “look for, pray for, and actively seek relationship and community with other men.” This is written to them, before you have met them." },',
    'solo: { frame: "Week 12 says “look for, pray for, and actively seek relationship and community with other men.” This is written to them, before you have met them." },\n'
    '      public: { frame: "This is written to the men you will walk with, before you have met them." },')
rep('ex: "To the men I will walk with, I am tired and hopeful. You haven’t heard any of this yet. Here it is." } },',
    'ex: "To the men I will walk with, I am tired and hopeful. You haven’t heard any of this yet. Here it is." },\n'
    '          public: { prompt: "It is done. Start with the men you will walk with. One word for what you feel toward them now — the row has some — then why, in a few words." } },')

# Where I started — John's words, ruled Nov 17 (public door only)
rep('lead: "I was asked where I was in the first week, what I told myself, and what nobody knew.",\n      slots: [',
    'lead: "I was asked where I was in the first week, what I told myself, and what nobody knew.",\n'
    '      public: { frame: "Start where it began. Three lines, and a picture anyone could see.", lead: "I was asked where I was the day it began, what I told myself, and what nobody knew." },\n      slots: [')
rep('ex: "When I started, I was sitting in the truck in the driveway, not ready to go in the house." },',
    'ex: "When I started, I was sitting in the truck in the driveway, not ready to go in the house.",\n'
    '          public: { prompt: "Go back to the day it began — the first meeting, the first session, the first week. Where were you: the place, the time of day, what was going on around you? A picture, not a label." } },')
rep('ex: "What I told myself was that I had it handled." },',
    'ex: "What I told myself was that I had it handled.",\n'
    '          public: { prompt: "Now the sentence you were living on back then — the one you said to yourself to get through the day. “I’ve got it handled.” “Nobody needs to know.” Short." } },')

rep('ex: "What came in through my eyes and ears was a screen at midnight and voices telling me I was the only one." },',
    'ex: "What came in through my eyes and ears was a screen at midnight and voices telling me I was the only one.",\n'
    '          public: { prompt: "Everything that reached you through your eyes and ears — any sound, sight, smell, or touch you control. What was coming in?" } },')
rep('rowNote: "From Richard Foster’s Celebration of Discipline. Walk With Me teaches all twelve." },',
    'rowNote: "From Richard Foster’s Celebration of Discipline. Walk With Me teaches all twelve.", public: { rowNote: "From Richard Foster’s Celebration of Discipline." } },')

rep('lead: "I was asked what I noticed with nobody watching, what I expected, what happened instead, what I asked him for, and what he did." },',
    'lead: "I was asked what I noticed with nobody watching, what I expected, what happened instead, what I asked him for, and what he did." },\n'
    '      public: { frame: "If it is still quiet and the struggle is still here, say that. It is not failure. This takes years, not weeks, and God’s answer may be as small as a stretch kept with nobody watching." },')
rep('ex: "Nobody was watching, and what I noticed was that I kept opening the book on the days I wanted to quit." } },',
    'ex: "Nobody was watching, and what I noticed was that I kept opening the book on the days I wanted to quit." },\n'
    '          public: { prompt: "A stretch with no room and no men. What did you notice about yourself that nobody else was there to see? One picture." } },')
rep('ex: "What God did was keep me at it for twelve weeks with nobody watching." } }',
    'ex: "What God did was keep me at it for twelve weeks with nobody watching." },\n'
    '          public: { prompt: "Say what he did, not what you did. For some men it is this: a stretch kept with nobody watching, and what got named in it. If nothing has moved yet, say that — it is true, and it belongs here.", ex: "What God did was keep me at it, day after day, with nobody watching." } }')

rep('ex: "What I will ask of you is to ask me the question, even when I say I’m fine." } },',
    'ex: "What I will ask of you is to ask me the question, even when I say I’m fine." },\n'
    '          public: { prompt: "It is done. What will you need from the men you find?" } },')
rep('solo: { ex: "I will answer it by reading this again, that day.", words: ["reading this again", "a text to one man", "coffee with one man", "a meeting"] } }',
    'solo: { ex: "I will answer it by reading this again, that day.", words: ["reading this again", "a text to one man", "coffee with one man", "a meeting"] },\n'
    '          public: { prompt: "“The days are not the achievement. Whatever you did that made the days is the achievement. Find it, name it out loud, and do it again.” Pick one, or write your own." } }')
# held: a scene a man could see or count
rep('ex: "I’ll know it has held when it is still happening four weeks from now." },',
    'ex: "I’ll know it has held when I have read a chapter before my phone four mornings a week, four weeks in a row." },')

# ---- the door ------------------------------------------------------------
rep('  /* The running example (cohort setting):',
    '''  /* v5 · the door. data-door="course" is the Week 12 unit; "public" is the site page /ending-well. A public override (p.public / s.public) is applied after the setting's own, so the public door leaves out Breaking Free, the week numbers and the twelve weeks, and carries the Where I started lines John ruled on Nov 17 for a reader with no earlier chapters. */
  var DOOR = ($("ewRoot") && $("ewRoot").getAttribute("data-door")) === "public" ? "public" : "course";
  window.ewDoor = DOOR;
  if (DOOR === "public") {
    var eb = $("ewEyebrow"); if (eb) eb.textContent = "Ending Well";
    var ld = $("ewLede"); if (ld) ld.textContent = "How a thing ends decides what you carry into what comes next. Before you close this stretch, say what is different, what it cost, what you saw along the way, what God did, and what you are taking with you \\u2014 in your own words, one line at a time. Each line starts for you; you finish it.";
    PARTS.forEach(function (p) {
      if (p.public) { for (var k in p.public) { if (Object.prototype.hasOwnProperty.call(p.public, k)) p[k] = p.public[k]; } }
      p.slots.forEach(function (s) { if (s.public) { for (var k2 in s.public) { if (Object.prototype.hasOwnProperty.call(s.public, k2)) s[k2] = s.public[k2]; } } });
    });
  }
  var HOME = DOOR === "public"
    ? { label: "Back to Your Story", href: "/your-story" }
    : { label: "Back to Week 12", href: "/path-player?courseid=student-course&unit=6a85e26976044c8e4e077716Unit" };
  window.ewNavigate = function (href) { try { window.top.location.href = href; } catch (e) { window.location.href = href; } };
  /* The running example (cohort setting):''')

# John's own lines stay as the running example only where his line does what the help line asks;
# the four that asked for a scene (sawme, takein, smallstep) and the stone's three lines come out
removed = 0
for key in ["sawme", "takein", "smallstep", "stone", "stonefor", "meaning"]:
    m = re.search(r'^    ' + key + r': "[^\n]*",\n', s, re.M)
    if not m:
        print("JOHN line missing:", key); sys.exit(1)
    s = s[:m.start()] + s[m.end():]
    removed += 1
rep("(eighteen of twenty-seven)", "(twelve of twenty-seven after the Nov 17 pass: sawme, takein, smallstep and the stone's three lines carry the scene the help line asks for, never his realization)")

rep('var TAIL = "Written at the end of Breaking Free.";',
    'var TAIL = DOOR === "public" ? "Written at the end of a walk." : "Written at the end of Breaking Free.";\n  window.ewTail = TAIL;')
rep('return apKeepsake(JsPDF, "BREAKING FREE", TITLE, "at the end of Breaking Free", author, apBody(poemText()));',
    'return apKeepsake(JsPDF, DOOR === "public" ? "ENDING WELL" : "BREAKING FREE", TITLE, DOOR === "public" ? "at the end of a walk" : "at the end of Breaking Free", author, apBody(poemText()));')
rep('var m = { step: cur, finished: finished && !stopped };', 'var m = { step: cur, finished: finished && !stopped, door: DOOR };')

# ---- the way back, named for where it goes -------------------------------
rep('    back.disabled = cur === 0;\n',
    '    back.disabled = false; back.textContent = backLabel(cur);\n')
rep('  function written() {',
    '''  /* v5 · the way back names where it goes: Back to Week 12 (course) or Back to Your Story (public) from the first step, then Back to the part before */
  function lowerFirst(t) { t = String(t || ""); return t.charAt(0).toLowerCase() + t.slice(1); }
  function backLabel(i) { return i > 0 ? "Back to " + lowerFirst(PARTS[i - 1].title) : HOME.label; }
  function partOfField(id) { var at = -1; PARTS.forEach(function (p, pi) { p.slots.forEach(function (s) { if ("ew_" + s.key === id) at = pi; }); }); return at; }
  /* a tap on a line of his words goes to the box it came from: the finished view is put away first, then the engine walks to the box */
  window.ewWrapBring = function (inst) {
    var ob = inst.bring;
    inst.bring = function (best, cb) { try { if (finished && best && best.id) { var at = partOfField(best.id); if (at >= 0) show(at, true); } } catch (e) {} return ob.call(this, best, cb); };
  };
  function written() {''')
rep('  back.addEventListener("click", function () { show(cur - 1); });',
    '  back.addEventListener("click", function () { if (cur === 0) { window.ewNavigate(HOME.href); } else { show(cur - 1); } });')

# ---- one Edit: the free-text editor and the second Edit are gone ----------
rep('  function finish(force) {\n    closeEditor();\n', '  function finish(force) {\n')
rep('$("ewEdit").addEventListener("click", function () { closeEditor(); show(0); });', '$("ewEdit").addEventListener("click", function () { show(0); });')
a = s.index('  var editorEl = $("ewEditor"), wordsBtn = $("ewWords");')
endmark = 'edited = (t && t !== core()) ? t : null; writeMeta(); });\n'
b = s.index(endmark, a) + len(endmark)
s = s[:a] + s[b:]

# ---- the config ----------------------------------------------------------
rep('/* AP-EW-CONFIG-v2 — the shared save (story.js v18.5) and the stone (stone.js v2), both pinned by commit and integrity hash. */',
    '/* AP-EW-CONFIG-v3 — the shared save (story.js v20.4) and the stone (stone.js v2.9), both pinned by commit and integrity hash. */')
rep('ancient-path@be6150468483fee716043e100c6ef0810219fc3e/story.js";', 'ancient-path@%s/story.js";' % STORY_COMMIT)
rep('var SRI = "sha384-+FMb4B+b8fmR02nOLqxvv0bvZRVeiAcYVggIdEMB4V3oZ1Mcsj9t7y9A43Asnw7I";', 'var SRI = "%s";' % story_sri)
rep('    pageLabel: "Go to your page",\n    tail: "Written at the end of Breaking Free.",',
    '    pageLabel: "Go to Your Page",\n    tail: window.ewTail || "Written at the end of Breaking Free.",')
rep('    noteBefore: "Saving puts this on your page, where you can read it and change it whenever you want.",\n', '')
rep('    window.ewInstance = inst;\n', '    window.ewInstance = inst;\n    if (typeof window.ewWrapBring === "function") window.ewWrapBring(inst);\n')
rep('if (typeof window.ewShowLament === "function") window.ewShowLament(LAMENT.unit, LAMENT.vow);',
    'if (window.ewDoor !== "public" && typeof window.ewShowLament === "function") window.ewShowLament(LAMENT.unit, LAMENT.vow);')


# ---- the progress line leaves the finished view --------------------------
rep('    partsEl.style.display = ""; nav.style.display = ""; nav.classList.remove("ew-off");',
    '    showProgress(true);\n    partsEl.style.display = ""; nav.style.display = ""; nav.classList.remove("ew-off");')
rep('    partsEl.style.display = "none"; nav.style.display = "none"; nav.classList.add("ew-off");',
    '    showProgress(false);\n    partsEl.style.display = "none"; nav.style.display = "none"; nav.classList.add("ew-off");')
rep('  function written() {',
    '  /* the part count and the bar belong to the questions; the finished view does not carry them */\n  function showProgress(on) { var q = document.querySelectorAll(".ew-root .ew-progress, .ew-root .ew-track"); for (var i = 0; i < q.length; i++) { q[i].style.display = on ? "" : "none"; } }\n  function written() {')

open("ending-well-v5.html", "w", encoding="utf-8").write(s)
pub = s.replace('data-mode="cohort" data-door="course"', 'data-mode="solo" data-door="public"', 1)
assert pub != s
# the page as first served (and as a crawler reads it) already carries the public words, not Breaking Free's
for a, b in [('<p class="ew-eyebrow" id="ewEyebrow">Breaking Free · Ending Well</p>', '<p class="ew-eyebrow" id="ewEyebrow">Ending Well</p>'),
             ('Twelve weeks of Breaking Free are ending. Before you close it, say what', 'Before you close this stretch, say what')]:
    assert pub.count(a) == 1, a
    pub = pub.replace(a, b)
open("ending-well-v5-public.html", "w", encoding="utf-8").write(pub)
for f in ["ending-well-v5.html", "ending-well-v5-public.html"]:
    b = open(f, "rb").read()
    print(f, len(b), "bytes, sha256", hashlib.sha256(b.rstrip(b"\n")).hexdigest())
print("JOHN lines removed:", removed)
