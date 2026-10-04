#!/usr/bin/env python3
"""Set a Stone build 7, in and back (John, Oct 4: "God brought you in from… God brought you back from… being clear what the
difference is between in and back. we need to create context to help tell this story" — "the context matters and helps the
man tell their story"): the two scene paragraphs end with what God brought Israel in from and back from; the frame line says
in is the first time, back is the return; the help line asks which is his; two taps under the LORD line start his line
("brought me in from" / "brought me back from") and each shows its context when tapped, like the meanings do."""
import os
here = os.path.dirname(os.path.abspath(__file__))
def patch(path, pairs):
    s = open(os.path.join(here, path), encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) == 1, (path, a[:70])
        s = s.replace(a, b)
    open(os.path.join(here, path), 'w', encoding='utf-8').write(s)
patch('sas-body.html', [
  ('<!-- AP-SAS-v1 · build 7 (4 Oct 2026: under each scene',
   '<!-- AP-SAS-v1 · build 7 (4 Oct 2026: in and back — what God brought Israel in from and back from under each scene, "In is the first time; back is the return" in the frame, the help line asks which is his, and two taps under the LORD line start his line with their context; under each scene'),
  ('The answer was the story: the river stopped, and Israel crossed on dry ground.</p>',
   'The answer was the story: the river stopped, and Israel crossed on dry ground. God brought them in &mdash; from forty years in the wilderness, into a land they had never set foot in.</p>'),
  ('and named it for help they had not earned.</p>',
   'and named it for help they had not earned. God brought them back &mdash; from twenty years of idols, to the LORD they had left.</p>'),
  ('<p class="sas-frame">Two stones. One remembers a crossing. One remembers help. Neither was set from a place of strength:',
   '<p class="sas-frame">Two stones. One remembers a crossing: God brought us in. One remembers help: God brought us back. In is the first time; back is the return. Neither was set from a place of strength:'),
  ('prompt: "A stone is a marker on the path. Have you had a miracle crossing? Say what you could not get through and how he brought you over. Or maybe you only need to remember: where were you, and how has God helped you?", ex:',
   'prompt: "A stone is a marker on the path. Did God bring you in — from a place you could not leave on your own, into a life you did not have? Say what you crossed and how he brought you over. Or did God bring you back — from wandering, to what you had and lost? Say where you were, and how he helped you.", rowNote: "Pick the one that is yours, or write your own.", words: IN_BACK.map(function (m) { return m.w; }), where: IN_BACK, start: true, ex:'),
  ('  /* the three lines. ex = John\'s own stone',
   '  /* in and back (John, Oct 4): the two openers for the LORD line, each with its context — in is the first time, back is the return */\n  var IN_BACK = [\n    { w: "brought me in from", where: "In is the first time. A life you could not leave on your own, into one you never had — the first sober year, the first men you let see you, the first time you knew you were a son." },\n    { w: "brought me back from", where: "Back is the return. What you had and lost — a marriage, a faith, a calling, a son — and he brought you back to it." }\n  ];\n  /* the three lines. ex = John\'s own stone'),
  ('b.addEventListener("click", function () { setVal(s.key, w); inp.focus(); paintRow(s.key); showWhere(s, w); });',
   'b.addEventListener("click", function () { setVal(s.key, s.start ? w + " " : w); inp.focus(); try { if (s.start) { inp.setSelectionRange(inp.value.length, inp.value.length); } } catch (e) {} paintRow(s.key); showWhere(s, w); });'),
  ('Array.prototype.forEach.call(row.querySelectorAll(".ew-word"), function (b) { b.classList.toggle("is-on", !!v && v === b.textContent.toLowerCase()); });',
   'var st = SLOTS.filter(function (s) { return s.key === key; })[0], start = !!(st && st.start);\n    Array.prototype.forEach.call(row.querySelectorAll(".ew-word"), function (b) { var w = b.textContent.toLowerCase(); b.classList.toggle("is-on", !!v && (start ? v.indexOf(w) === 0 : v === w)); });'),
])
patch('test-sas-v1.js', [
  ('/same ground where Israel had lost before, and named it for help they had not earned\\.$/', '/named it for help they had not earned\\. God brought them back — from twenty years of idols, to the LORD they had left\\.$/'),
  ('"Two stones. One remembers a crossing. One remembers help. Neither was set from a place of strength:', '"Two stones. One remembers a crossing: God brought us in. One remembers help: God brought us back. In is the first time; back is the return. Neither was set from a place of strength:'),
  ('t("build 7: the The-LORD-has help line — the marker on the path, John\'s two doors, and in each the question of where he was", d.querySelectorAll(".ew-slot-prompt")[1].textContent === "A stone is a marker on the path. Have you had a miracle crossing? Say what you could not get through and how he brought you over. Or maybe you only need to remember: where were you, and how has God helped you?");',
   't("build 7: the The-LORD-has help line — the marker on the path, then in or back, each with where he was", d.querySelectorAll(".ew-slot-prompt")[1].textContent === "A stone is a marker on the path. Did God bring you in — from a place you could not leave on your own, into a life you did not have? Say what you crossed and how he brought you over. Or did God bring you back — from wandering, to what you had and lost? Say where you were, and how he helped you.");\n    t("build 7: two taps under the LORD line start his line — in or back — and show their context; the line keeps growing after the tap", (() => { const ws = [...d.querySelectorAll(\'.ew-words[data-for="text"] .ew-word\')]; if (ws.length !== 2 || ws[0].textContent !== "brought me in from" || ws[1].textContent !== "brought me back from") return false; ws[1].click(); const v = d.getElementById("sas_text").value; const wh = d.getElementById("sasWhere_text").textContent; if (v !== "brought me back from " || !/^brought me back from — Back is the return\\./.test(wh) || !ws[1].classList.contains("is-on")) return false; d.getElementById("sas_text").value = "brought me back from the far country."; d.getElementById("sas_text").dispatchEvent(new d.defaultView.Event("input", { bubbles: true })); const ok = ws[1].classList.contains("is-on") && /Back is the return/.test(d.getElementById("sasWhere_text").textContent) && d.querySelector(".sas-stone").textContent.indexOf("The LORD has brought me back from the far country.") >= 0; d.getElementById("sas_text").value = ""; d.getElementById("sas_text").dispatchEvent(new d.defaultView.Event("input", { bubbles: true })); return ok && d.querySelector(\'.ew-words[data-for="text"]\').nextElementSibling.textContent === "Pick the one that is yours, or write your own."; })());'),
])
print('in and back in')
