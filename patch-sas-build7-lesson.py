#!/usr/bin/env python3
"""Set a Stone build 7, the lesson (John, Oct 4: "how do we engage the learner in a crossing and the help we didn't deserve"):
neither stone was set from a place of strength — the Jordan stones were lifted from the riverbed, Ebenezer set on the ground
of an old loss — so the piece asks the man where he was. One question in each door of the help line; John's new example
line under it; the two stones' own meanings in the list; the riverbed in the Joshua paragraph and one sentence in the frame."""
import os
here = os.path.dirname(os.path.abspath(__file__))
OLD_EX = "helped me see the men on the path with me, and that the battle has already been fought and won."
NEW_EX = "given me a new heart, one of flesh and not of stone. He has given me eyes to see and ears to hear the encouragement the community gives. All promises the Scriptures make, and I have the privilege of walking them out."
def patch(path, pairs):
    s = open(os.path.join(here, path), encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) >= 1, (path, a[:60])
        s = s.replace(a, b)
    open(os.path.join(here, path), 'w', encoding='utf-8').write(s)
patch('sas-body.html', [
  ('<!-- AP-SAS-v1 · build 7 (4 Oct 2026: stone.js v2.3 — the offer is his name or no name)',
   '<!-- AP-SAS-v1 · build 7 (4 Oct 2026: under each scene, what the stone was and that neither was set from a place of strength; the help line asks where he was; John\'s new example; the two stones\' own meanings in the list; stone.js v2.3 — the offer is his name or no name)'),
  ('Say what you crossed and how he brought you over. Or maybe you only need to remember: how has God helped you?',
   'Say what you could not get through and how he brought you over. Or maybe you only need to remember: where were you, and how has God helped you?'),
  ('ex: "The LORD has ' + OLD_EX + '"', 'ex: "The LORD has ' + NEW_EX + '"'),
  ('    { w: "a rescue", where: "Samuel’s stone — “Till now the LORD has helped us.” 1 Samuel 7:12" },\n',
   '    { w: "a rescue", where: "Samuel’s stone — “Till now the LORD has helped us.” 1 Samuel 7:12" },\n    { w: "a crossing I could not make alone", where: "“The LORD your God dried up the waters of the Jordan for you until you passed over.” Joshua 4:23" },\n    { w: "help I did not earn", where: "“We have sinned against the LORD.” … and the LORD thundered. 1 Samuel 7:6, 10" },\n'),
  ('Twelve stones at Gilgal, one for each tribe, set where a child would see them and ask.',
   'Twelve stones, lifted from the riverbed where the priests had stood, carried to Gilgal and set where a child would see them and ask.'),
  ('Two stones. One remembers a crossing. One remembers help. Both were set to be asked about.',
   'Two stones. One remembers a crossing. One remembers help. Neither was set from a place of strength: one was lifted from the riverbed, the other set on the ground of an old loss. Both were set to be asked about.'),
  ('and why, three months from now, it asks you.</p>', 'and why, three months from now, <span style="white-space:nowrap">it asks you.</span></p>'),
])
patch('test-sas-v1.js', [
  (OLD_EX, NEW_EX),
  ('/^Twelve stones at Gilgal, one for each tribe, set where a child would see them and ask\\. The stones were set so the question would be asked\\./',
   '/^Twelve stones, lifted from the riverbed where the priests had stood, carried to Gilgal and set where a child would see them and ask\\. The stones were set so the question would be asked\\./'),
  ('One remembers help. Both were set to be asked about. That is why', 'One remembers help. Neither was set from a place of strength: one was lifted from the riverbed, the other set on the ground of an old loss. Both were set to be asked about. That is why'),
  ('t("build 6: the The-LORD-has help line — the marker on the path, then John\'s two doors", d.querySelectorAll(".ew-slot-prompt")[1].textContent === "A stone is a marker on the path. Have you had a miracle crossing? Say what you crossed and how he brought you over. Or maybe you only need to remember: how has God helped you?");',
   't("build 7: the The-LORD-has help line — the marker on the path, John\'s two doors, and in each the question of where he was", d.querySelectorAll(".ew-slot-prompt")[1].textContent === "A stone is a marker on the path. Have you had a miracle crossing? Say what you could not get through and how he brought you over. Or maybe you only need to remember: where were you, and how has God helped you?");'),
  ('t("what it means: six meanings", d.querySelectorAll(\'.ew-words[data-for="meaning"] .ew-word\').length === 6 && [...d.querySelectorAll(\'.ew-words[data-for="meaning"] .ew-word\')].map(b => b.textContent).join("|") === "a rescue|a new discipline|',
   't("what it means: eight meanings — the two stones\' own beside Samuel\'s", d.querySelectorAll(\'.ew-words[data-for="meaning"] .ew-word\').length === 8 && [...d.querySelectorAll(\'.ew-words[data-for="meaning"] .ew-word\')].map(b => b.textContent).join("|") === "a rescue|a crossing I could not make alone|help I did not earn|a new discipline|'),
])
print('lesson in')
