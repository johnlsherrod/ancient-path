#!/usr/bin/env python3
"""Set a Stone build 5 and Ending Well v4.1 (4 Oct 2026), John's walk of build 4 in the holding course:
- "For example" replaces "John wrote" (Ending Well's own form; "some won't know me… they may think this is from the gospel of John")
- a scripture reference never breaks across lines ("24" stood alone on a line)
- the page read "cluttered and very busy": one-sentence help lines; the naming-well sentence and "Pick one to see where
  it comes from" move under their pick lists; the voice note leaves the writing box; the example is one quiet line
- the lede, for clarity: "In three lines, mark what God has done. Your stone is kept on your page, and three months
  from now you will be asked what it means."
- Save with the "Till now" line empty says what the stone needs and puts him in that box (it answered "nothing written")
- the dates on the stone — on screen the moment Save lands, in print and in Copy: "Set on <date>." and "On <date>, ask
  yourself what it means to you." (John: "add the date and time and calculate the follow up so there is some value")
- the "Set on your page…" line comes from the page itself; the offer attaches when the record reads back (retried)
- Ending Well: the meaning line's help line as ruled; the scene reference never breaks
Every needle matches exactly once."""
import os
here = os.path.dirname(os.path.abspath(__file__))
def patch(name, pairs):
    p = os.path.join(here, name); s = open(p, encoding='utf-8').read()
    for old, new in pairs:
        assert s.count(old) == 1, (name, s.count(old), old[:90]); s = s.replace(old, new)
    open(p, 'w', encoding='utf-8').write(s); print('patched', name)

patch('sas-body.html', [
  ('<!-- AP-SAS-v1 · build 4 (3 Oct 2026:',
   '<!-- AP-SAS-v1 · build 5 (4 Oct 2026, John\'s walk of build 4: "For example" instead of "John wrote"; a reference never breaks across lines; one-sentence help lines, the voice note out of the box, the page less busy; the lede for clarity; Save without the Till-now line says what the stone needs; the dates on the stone on screen, in print and in Copy; the after-save line from the page itself, the offer attached when the record reads; stone.js v2.1 and story.js v18.6 — the record survives LearnWorlds) (build 4, 3 Oct 2026:'),
  # styles
  ('.ew-root .ew-quote b{font-style:normal;font-weight:600;color:var(--e-quiet);font-family:var(--e-sans);font-size:13px;letter-spacing:.04em}',
   '.ew-root .ew-quote b{font-style:normal;font-weight:600;color:var(--e-quiet);font-family:var(--e-sans);font-size:13px;letter-spacing:.04em;white-space:nowrap}'),
  ('.ew-root .sas-ex{font:italic 400 15px/1.5 var(--e-serif);color:var(--e-quiet);margin:6px 0 0}',
   '.ew-root .sas-ex{font:italic 400 14.5px/1.5 var(--e-serif);color:var(--e-quiet);margin:8px 0 0}\n.ew-root .sas-row-note{font:400 14px/1.5 var(--e-sans);color:var(--e-quiet);margin:8px 0 0}\n.ew-root .sas-slot .aps-voice-note{margin:6px 0 0;font-size:13px}\n.ew-root .sas-dates{margin:10px 0 0;font:400 15px/1.5 var(--e-sans);color:var(--e-ink);white-space:pre-line}'),
  # the lede
  ('<p class="ew-lede">Three lines that mark what God has done, set where you will find them again. A stone is set to be found — by you, and by whoever asks.</p>',
   '<p class="ew-lede">In three lines, mark what God has done. Your stone is kept on your page, and three months from now you will be asked what it means.</p>'),
  # the stone panel: the dates under the three lines
  ('  <p class="sas-after" id="sasAfter" style="display:none"></p>',
   '  <p class="sas-dates" id="sasDates" style="display:none"></p>\n  <p class="sas-after" id="sasAfter" style="display:none"></p>'),
  # one-sentence help lines; the second sentence goes under the pick list
  ('prompt: "Who will find this one day and ask? Pick one, or write your own. Naming well is a skill — name the one this is for, and you will name other things well too.", ex: "This stone is for those who chose the same path.", words: STONE_FOR }',
   'prompt: "Who will find this one day and ask?", rowNote: "Pick one, or write your own. Naming well is a skill — name the one this is for, and you will name other things well too.", ex: "This stone is for those who chose the same path.", words: STONE_FOR }'),
  ('prompt: "The answer you give when someone asks what this stone means. Pick one to see where it comes from, or write your own.", ex: "What this stone means to me is surrender.',
   'prompt: "The answer you give when someone asks what this stone means.", rowNote: "Pick one to see where it comes from, or write your own.", ex: "What this stone means to me is surrender.'),
  # build(): the row note, the example label
  ('        wrap.appendChild(row);\n        if (s.where) { var wh = document.createElement("p"); wh.className = "sas-where"; wh.id = "sasWhere_" + s.key; wh.textContent = ""; wrap.appendChild(wh); }\n      }\n      var ex = document.createElement("p"); ex.className = "sas-ex"; var b = document.createElement("b"); b.textContent = "John wrote"; ex.appendChild(b); ex.appendChild(document.createTextNode(s.ex)); wrap.appendChild(ex);',
   '        wrap.appendChild(row);\n        if (s.rowNote) { var rn = document.createElement("p"); rn.className = "sas-row-note"; rn.textContent = s.rowNote; wrap.appendChild(rn); }\n        if (s.where) { var wh = document.createElement("p"); wh.className = "sas-where"; wh.id = "sasWhere_" + s.key; wh.textContent = ""; wrap.appendChild(wh); }\n      }\n      var ex = document.createElement("p"); ex.className = "sas-ex"; var b = document.createElement("b"); b.textContent = "For example"; ex.appendChild(b); ex.appendChild(document.createTextNode(s.ex)); wrap.appendChild(ex);'),
  # the dates: on screen once set, in Copy; document_ unchanged for the record (three lines, nothing of ours)
  ('  window.sasDocument = document_;\n  function returnDay() {',
   '  window.sasDocument = document_;\n  /* the dates, once the stone is set: the day it was set and the day the site asks him back — for the screen, print and Copy */\n  var setAt = "";\n  function longDay(iso) { try { var d = new Date(iso); return isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); } catch (e) { return ""; } }\n  function dateLines() {\n    if (!setAt) return "";\n    var r = val("returnAt"); return "Set on " + longDay(setAt) + "." + (r ? "\\nOn " + longDay(r + "T12:00:00") + ", ask yourself what it means to you." : "");\n  }\n  function showDates() { var p = $("sasDates"), t = dateLines(); if (!p) return; p.textContent = t; p.style.display = t ? "" : "none"; }\n  window.sasSetAt = function (iso) { setAt = iso || new Date().toISOString(); showDates(); };\n  function returnDay() {'),
  ('    var t = document_(); if (!t) return;\n    var done = function () { $("sasCopy").textContent = "Copied";',
   '    var t = document_(); if (!t) return; if (dateLines()) t += "\\n\\n" + dateLines();\n    var done = function () { $("sasCopy").textContent = "Copied";'),
  # after a save: the line from the page itself, then the record (retried) for the offer
  ('  window.sasAfterSave = function (inst) {\n    var after = $("sasAfter"), offer = $("sasOffer");\n    if (!window.APStone || !window.APStone.configured()) return;\n    var id = inst && inst.openEntryId;\n    window.APStone.list().then(function (l) {\n      var st = null; l.forEach(function (s) { if (!st && (!id || s.id === id)) st = s; });\n      if (!st) return;\n      after.style.display = "";\n      after.textContent = "Set on your page. On " + window.APStone.longDate(st.returnAt + "T12:00:00") + " we will ask you what it means to you.";\n      if (typeof window.APStone.offerUI === "function") { window.APStone.offerUI(offer, st, { buttonClass: "ew-btn ew-btn-primary" }); }\n    }).catch(function () {});\n  };',
   '  window.sasAfterSave = function (inst) {\n    var after = $("sasAfter"), offer = $("sasOffer");\n    if (!val("text")) return;   /* a save with no stone line is not a stone */\n    window.sasSetAt(new Date().toISOString());\n    var r = val("returnAt");\n    after.style.display = ""; after.textContent = "Set on your page." + (r ? " On " + longDay(r + "T12:00:00") + " we will ask you what it means to you." : "");\n    if (!window.APStone || !window.APStone.configured()) return;\n    /* the offer needs the record; the site can take a moment to hand it back, so it is asked for up to four times */\n    var id = inst && inst.openEntryId, tries = 0, waits = [400, 1500, 4000, 8000];\n    function look() {\n      window.APStone.list().then(function (l) {\n        var st = null; l.forEach(function (s) { if (!st && (!id || s.id === id)) st = s; });\n        if (!st) { if (tries < waits.length) { window.setTimeout(look, waits[tries++]); } return; }\n        if (typeof window.APStone.offerUI === "function") { window.APStone.offerUI(offer, st, { buttonClass: "ew-btn ew-btn-primary" }); }\n      }).catch(function () { if (tries < waits.length) { window.setTimeout(look, waits[tries++]); } });\n    }\n    look();\n  };'),
  # Save without the stone line: say what the stone needs, go to that box
  ('  function watchSaves(inst) {\n    if (!inst || typeof inst.save !== "function") return;\n    var orig = inst.save;\n    inst.save = function (ui, answers) {',
   '  function watchSaves(inst) {\n    if (!inst || typeof inst.save !== "function") return;\n    var orig = inst.save;\n    inst.save = function (ui, answers) {\n      if (!val("text")) {\n        if (ui && typeof ui.fail === "function") { ui.fail("The “Till now, the LORD has” line is the stone. Write it, then save."); }\n        var box = $("sas_text"); if (box) { try { box.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {} try { box.focus({ preventScroll: true }); } catch (e2) {} }\n        return;\n      }'),
  # the voice note leaves the writing box
  ('  function start() {\n    if (!window.APStory) { offline(); return; }\n    var inst = window.APStory.init(CONFIG);\n    if (!inst) { offline(); return; }',
   '  /* the engine puts its one voice note inside the first writing box; here it sits under the box instead */\n  function moveVoiceNote() {\n    Array.prototype.forEach.call(document.querySelectorAll(".sas-slot .ew-line .aps-voice-note"), function (n) {\n      var line = n.closest(".ew-line"); if (line && line.parentNode) { line.parentNode.insertBefore(n, line.nextSibling); }\n    });\n  }\n  try { new MutationObserver(moveVoiceNote).observe(document.getElementById("sasSlots"), { childList: true, subtree: true }); } catch (e) {}\n  function start() {\n    if (!window.APStory) { offline(); return; }\n    var inst = window.APStory.init(CONFIG);\n    if (!inst) { offline(); return; }\n    moveVoiceNote();'),
])

patch('ew-body.html', [
  ('<!-- AP-EW-v4 (v4, 3 Oct 2026:',
   '<!-- AP-EW-v4 (v4.1, 4 Oct 2026: the meaning line\'s help line as ruled — "The answer you give when someone asks what this stone means."; a scene reference never breaks across lines; stone.js v2.1 and story.js v18.6, the record survives LearnWorlds) (v4, 3 Oct 2026:'),
  ('{ key: "meaning", stem: "What this stone means to me is", prompt: "Pick one to see where it comes from, or write your own.",',
   '{ key: "meaning", stem: "What this stone means to me is", prompt: "The answer you give when someone asks what this stone means.", rowNote: "Pick one to see where it comes from, or write your own.",'),
  ('    if (p.scene) { var sc = document.createElement("p"); sc.className = "ew-part-scene"; sc.textContent = p.scene; wrap.appendChild(sc); }',
   '    if (p.scene) { var sc = document.createElement("p"); sc.className = "ew-part-scene"; var di = p.scene.lastIndexOf(" — "); if (di > 0) { sc.textContent = p.scene.slice(0, di + 3); var ref = document.createElement("span"); ref.style.whiteSpace = "nowrap"; ref.textContent = p.scene.slice(di + 3); sc.appendChild(ref); } else { sc.textContent = p.scene; } wrap.appendChild(sc); }'),
])
