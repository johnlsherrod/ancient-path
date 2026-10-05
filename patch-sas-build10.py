#!/usr/bin/env python3
"""Set a Stone build 10 — John's walk of build 9 (5 Oct 2026), fourteen items in one pass:
 1 the lede opens on the benefit · 2 the safety line moves to the foot, under Save · 3 Gilgal is the circle, God with us ·
 4 Ebenezer was a name before it was a stone; the name of the loss became the name of the help — the work we do in story ·
 5 the line becomes the circle (as the mountains surround Jerusalem) · 6 the stone has a name: its own short box after the
 three lines, a short list, nothing guessed; the meaning line is the meaning again · 7 the finished stone told as a story:
 the name as its heading, the three lines, "Set on … · asks you on …" · 8 the dates come from the record the engine wrote ·
 9 a stone page always starts empty (?open=1 is dropped — the handoff and Open it no longer load the last stone into the
 boxes, where a Save overwrote it) · 12/13 Print is a clean sheet of the stone alone (a new window: name, lines, dates, the
 Ancient Path line) and Copy carries the same. Engines: stone.js v2.7 (the name), story.js v18.7 (a better voice)."""
import os
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'sas-body.html'); s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a))
    s = s.replace(a, b)
rep('<!-- AP-SAS-v1 · build 9 (5 Oct 2026, John: the Rock · Jesus',
    '<!-- AP-SAS-v1 · build 10 (5 Oct 2026, John\'s walk of build 9: the lede opens on the benefit; the safety line sits at the foot under Save; Gilgal is the circle, God with us; Ebenezer was the name of the loss before it was the name of the help — the work we do in story; one circle around the two stones; the stone has a name — its own box after the three lines, Samuel named his Help; the finished stone told as a story with its name over it and "Set on · asks you on" from the record; a stone page always starts empty; Print is a clean sheet of the stone alone; stone.js v2.7, story.js v18.7) (build 9 (5 Oct 2026, John: the Rock · Jesus')
# styles
rep('.ew-root .sas-dates{margin:10px 0 0;font:400 15px/1.5 var(--e-sans);color:var(--e-ink);white-space:pre-line}',
    '.ew-root .sas-dates{margin:10px 0 0;font:400 15px/1.5 var(--e-sans);color:var(--e-ink);white-space:pre-line}\n.ew-root .sas-stone-name{font:600 22px/1.3 var(--e-serif);color:var(--e-navy);margin:0 0 8px}\n.ew-root .sas-safe{font:400 14px/1.5 var(--e-sans);color:var(--e-quiet);margin:26px 0 0;padding-left:12px;border-left:2px solid var(--e-rule)}\n.ew-root .sas-slot.sas-slot-name .ew-rest{text-indent:0 !important}')
rep('@media print{.ew-root .ew-top-nav,.ew-root .ew-safe,', '@media print{.ew-root .ew-top-nav,.ew-root .ew-safe,.ew-root .sas-safe,')
# 1 the lede; 2 the safety line to the foot
rep('<p class="ew-lede">In three lines, mark what God has done and name the stone. It is kept on your page, and three months from now it asks you to look again: what has the LORD done since?</p>\n<p class="ew-safe">Nothing you write here reaches us unless you choose to save it with us. Everything else stays on your device.</p>',
    '<p class="ew-lede">Three months from now you will be asked one question: what has the LORD done since? Set the stone today &mdash; who it is for, what he has done, its name &mdash; and the question will be waiting with your own words under it. That is the work: seeing the ground you have covered, and who covered it <span style="white-space:nowrap">with you.</span></p>')
rep('<p class="ew-foot"><strong>If something in this stirred',
    '<p class="sas-safe">Nothing you write here reaches us unless you choose to save it with us. Everything else stays on your device.</p>\n\n<p class="ew-foot"><strong>If something in this stirred')
# 3 Gilgal, the circle
rep('Gilgal means to roll &mdash; on that ground the LORD rolled their shame away.',
    'Gilgal means a circle. The stones stood in a ring, and the LORD stood in the midst of them &mdash; with them as they went in, with them when they would need him to step in. Immanuel, God with us.')
# 4 Ebenezer, the name of the loss
rep('<p class="sas-what">Israel had the land and broke the covenant. For twenty years they chased other gods, and they lost the Ark. At Mizpah they came back and confessed, and the Philistines attacked while they prayed. God did not only hold back what they deserved; he fought for them. Samuel set a stone on the ground of the old loss and named it Ebenezer, stone of help &mdash; help they had not earned. God brought them back: from twenty years of idols, to the LORD they had left.</p>',
    '<p class="sas-what">Israel had the land and broke the covenant. For twenty years they chased other gods, and they lost the Ark at a place already called Ebenezer. At Mizpah they came back and confessed, and the Philistines attacked while they prayed. God did not only hold back what they deserved; he fought for them. Then Samuel set a stone on that same ground and gave it the same name: Ebenezer, stone of help &mdash; help they had not earned. The name of the loss became the name of the help. That is the work we do together in story: the hurt is named, and the name becomes testimony. God brought them back: from twenty years of idols, to the LORD they had left.</p>')
# 5 the circle
rep('<p class="sas-frame">Two stones, one line through them: what God promised, God kept &mdash; by bringing them in, and by bringing them back when they had broken it. Neither was set from a place of strength. Both were named, and both were set to be asked about.</p>',
    '<p class="sas-frame">Two stones, and one circle around them: as the mountains surround Jerusalem, the LORD surrounds his people &mdash; going in, and coming back. Neither stone was set from a place of strength. Both were named, and both were set to be asked about.</p>')
rep('That is why your stone has three lines &mdash; who it is for, what the LORD has done, and the name you give it &mdash; and why, three months from now, it asks you to <span style="white-space:nowrap">look again.</span>',
    'That is why your stone has three lines and a name &mdash; and why, three months from now, it asks you to <span style="white-space:nowrap">look again.</span>')
# 6 the name box; the meaning line is the meaning again
rep('''  /* the three lines. ex = John's own stone''', '''  /* the stone's name (John, Oct 5): one word, or two, as Samuel named his Help */
  var NAMES = ["Help", "Crossing", "Surrender", "Rescue", "Hope", "Faith", "Discipline", "Love", "Sacrifice", "Home"];
  /* the three lines. ex = John's own stone''')
rep('prompt: "The answer you give when someone asks what this stone means — its name. Samuel named his Help.", rowNote: "Pick a name to see where it comes from, or give your own."',
    'prompt: "The answer you give when someone asks what this stone means.", rowNote: "Pick one to see where it comes from, or write your own."')
rep('''words: MEANS.map(function (m) { return m.w; }), where: MEANS }
  ];''', '''words: MEANS.map(function (m) { return m.w; }), where: MEANS },
    { key: "name", title: "Name this stone", stem: "", prompt: "One word, or two. Samuel named his Help.", rowNote: "Tap one, or write your own.", ex: "Crossing", words: NAMES, noLine: true }
  ];''')
rep('''      var wrap = document.createElement("div"); wrap.className = "sas-slot";
      var name = document.createElement("p"); name.className = "ew-slot-name"; name.textContent = s.stem + " …"; wrap.appendChild(name);''',
'''      var wrap = document.createElement("div"); wrap.className = "sas-slot" + (s.noLine ? " sas-slot-name" : "");
      var name = document.createElement("p"); name.className = "ew-slot-name"; name.textContent = s.title || (s.stem + " …"); wrap.appendChild(name);''')
rep('''      var stem = document.createElement("span"); stem.className = "ew-stem"; stem.textContent = s.stem; line.appendChild(stem);
      var inp = document.createElement("textarea"); inp.className = "ew-rest"; inp.id = "sas_" + s.key; inp.rows = 1; inp.placeholder = "…"; inp.setAttribute("aria-label", s.stem + " …");''',
'''      if (s.stem) { var stem = document.createElement("span"); stem.className = "ew-stem"; stem.textContent = s.stem; line.appendChild(stem); }
      var inp = document.createElement("textarea"); inp.className = "ew-rest"; inp.id = "sas_" + s.key; inp.rows = 1; inp.placeholder = "…"; inp.setAttribute("aria-label", s.title || (s.stem + " …"));''')
rep('''    SLOTS.forEach(function (s) { var l = lineFor(s, g(s.key)); if (l) out.push(l); });
    return out;''', '''    SLOTS.forEach(function (s) { if (s.noLine) return; var l = lineFor(s, g(s.key)); if (l) out.push(l); });
    return out;''')
# 7/8 the finished stone: name over it, the dates from the record
rep('''  <p class="sas-stone is-empty" id="sasStone">Your three lines will gather here as you write.</p>''',
    '''  <p class="sas-stone-name" id="sasStoneName" style="display:none"></p>
  <p class="sas-stone is-empty" id="sasStone">Your three lines will gather here as you write.</p>''')
rep('''  var setAt = "";''', '''  var setAt = "", askAt = "";''')
rep('''  function dateLines() {
    if (!setAt) return "";
    var r = val("returnAt"); return "Set on " + longDay(setAt) + "." + (r ? "\\nOn " + longDay(r + "T12:00:00") + ", ask yourself what it means to you." : "");
  }''', '''  function dateLines() {
    if (!setAt) return "";
    var r = askAt || val("returnAt"); return "Set on " + longDay(setAt) + (r ? " \\u00b7 asks you on " + longDay(r + "T12:00:00") + "." : ".");
  }''')
rep('''  window.sasSetAt = function (iso) { setAt = iso || new Date().toISOString(); showDates(); };''',
    '''  window.sasSetAt = function (iso, ask) { setAt = iso || new Date().toISOString(); if (ask) { askAt = ask; } showDates(); };''')
rep('''  function render() {
    var p = $("sasStone"), ls = lines();''', '''  function render() {
    var p = $("sasStone"), ls = lines(), nm = $("sasStoneName");
    if (nm) { nm.textContent = val("name"); nm.style.display = val("name") ? "" : "none"; }''')
rep('''        if (!st) { if (tries < waits.length) { window.setTimeout(look, waits[tries++]); } return; }
        if (typeof window.APStone.offerUI === "function")''', '''        if (!st) { if (tries < waits.length) { window.setTimeout(look, waits[tries++]); } return; }
        window.sasSetAt(st.when, st.returnAt);   /* the dates as the record has them */
        if (typeof window.APStone.offerUI === "function")''')
# 12/13 Copy and Print: the stone alone
rep('''    var t = document_(); if (!t) return; if (dateLines()) t += "\\n\\n" + dateLines();
    var done = function ()''', '''    var t = sheetText(); if (!t) return;
    var done = function ()''')
rep('''  $("sasPrint").addEventListener("click", function () { try { window.print(); } catch (e) {} });''',
'''  /* the stone alone: its name, its lines, its dates, and the Ancient Path line — for Copy and for the printed sheet */
  function sheetText() { var t = document_(); if (!t) return ""; return (val("name") ? val("name") + "\\n" : "") + t + (dateLines() ? "\\n\\n" + dateLines() : ""); }
  function escapeHtml(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\\"": "&quot;" }[c]; }); }
  function sheetHtml() {
    var ls = lines().map(function (l) { return "<p class=\\"l\\">" + escapeHtml(l) + "</p>"; }).join("");
    return "<!doctype html><html lang=\\"en\\"><head><meta charset=\\"utf-8\\"><title>Set a Stone</title><style>body{margin:0;padding:48px 56px;font:400 18px/1.55 Georgia,'Times New Roman',serif;color:#2B3040;max-width:640px}.k{font:600 12px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#B8945F;margin:0 0 18px}.n{font:600 28px/1.25 Georgia,serif;color:#1F2A44;margin:0 0 14px}.l{margin:0 0 10px;color:#1F2A44}.d{font:400 14px/1.5 Arial,Helvetica,sans-serif;color:#6B7280;margin:22px 0 0}.f{font:400 12px/1.5 Arial,Helvetica,sans-serif;color:#6B7280;margin:40px 0 0;padding-top:12px;border-top:1px solid #E2DCD1}@page{margin:18mm}</style></head><body><p class=\\"k\\">A stone of remembrance</p>" + (val("name") ? "<p class=\\"n\\">" + escapeHtml(val("name")) + "</p>" : "") + ls + (dateLines() ? "<p class=\\"d\\">" + escapeHtml(dateLines()) + "</p>" : "") + "<p class=\\"f\\">Ancient Path Biblical Coaching \\u00b7 ancientpathcoaching.com/set-a-stone</p></body></html>";
  }
  $("sasPrint").addEventListener("click", function () {
    if (!document_()) return;
    var w = null; try { w = window.open("", "_blank"); } catch (e) { w = null; }
    if (!w) { try { window.print(); } catch (e2) {} return; }
    w.document.open(); w.document.write(sheetHtml()); w.document.close();
    try { w.focus(); } catch (e3) {}
    window.setTimeout(function () { try { w.print(); } catch (e4) {} }, 250);
  });''')
# 9 a stone page always starts empty
rep('''  function start() {
    if (!window.APStory) { offline(); return; }''', '''  /* a stone is never continued: ?open=1 (the handoff, Open it) must not load the last stone into the boxes, where a Save would overwrite it */
  try { if (/[?&]open=/.test(window.location.search)) { var q = window.location.search.replace(/([?&])open=[^&]*&?/, "$1").replace(/[?&]$/, ""); window.history.replaceState(null, "", window.location.pathname + q + window.location.hash); } } catch (e) {}
  function start() {
    if (!window.APStory) { offline(); return; }''')
open(p, 'w', encoding='utf-8').write(s)
print('build 10 in the source')
