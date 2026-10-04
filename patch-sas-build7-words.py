#!/usr/bin/env python3
"""Set a Stone build 7, the words (John, Oct 4: "a little better description on the Stone of Help" and the teaching purpose
of the stones "should be in the explanation of the work we do"): under each scene, what the stone was; then the frame line
carries why the stone has three lines and why it asks him. What These Stones Mean build 5 gets the one sentence in its lede."""
import os
here = os.path.dirname(os.path.abspath(__file__))
def patch(path, pairs):
    s = open(os.path.join(here, path), encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) == 1, (path, a[:60])
        s = s.replace(a, b)
    open(os.path.join(here, path), 'w', encoding='utf-8').write(s)
patch('sas-body.html', [
  ('.ew-root .sas-frame{font:400 16px/1.55 var(--e-sans);color:var(--e-ink);margin:0 0 26px}',
   '.ew-root .sas-frame{font:400 16px/1.55 var(--e-sans);color:var(--e-ink);margin:0 0 26px}\n.ew-root .sas-what{font:400 16px/1.55 var(--e-sans);color:var(--e-ink);margin:-8px 0 22px}'),
  ('<b>Joshua 4:21&ndash;24</b></p>\n',
   '<b>Joshua 4:21&ndash;24</b></p>\n<p class="sas-what">Twelve stones at Gilgal, one for each tribe, set where a child would see them and ask. The stones were set so the question would be asked. The answer was the story: the river stopped, and Israel crossed on dry ground.</p>\n'),
  ('<b>1 Samuel 7:12</b></p>\n',
   '<b>1 Samuel 7:12</b></p>\n<p class="sas-what">Ebenezer means stone of help. Israel had wandered from the LORD for years. At Mizpah they came back, confessed, and the Philistines attacked while they prayed. The LORD answered. Samuel set the stone on the same ground where Israel had lost before, and named it for help they had not earned.</p>\n'),
  ('<p class="sas-frame">Two stones. One remembers a crossing. One remembers help. Yours can be either.</p>',
   '<p class="sas-frame">Two stones. One remembers a crossing. One remembers help. Both were set to be asked about. That is why your stone has three lines &mdash; who it is for, what the LORD has done, what it means &mdash; and why, three months from now, it asks you.</p>'),
])
patch('stones-body.html', [
  ('Each one says what God did, in the man&rsquo;s own words. Read them.', 'Each one says what God did, in the man&rsquo;s own words. They were set so the question would be asked. Read them.'),
])
patch('test-sas-v1.js', [
  ('t("the line under the two scenes, John\'s words", d.querySelector(".sas-frame").textContent === "Two stones. One remembers a crossing. One remembers help. Yours can be either.");',
   't("build 7: under each scene, what the stone was — set to be asked, the stone of help on the ground of the loss; the frame line says why three lines and why it asks him", (() => { const w = [...d.querySelectorAll(".sas-what")].map(e => e.textContent); return w.length === 2 && /^Twelve stones at Gilgal, one for each tribe, set where a child would see them and ask\\. The stones were set so the question would be asked\\./.test(w[0]) && /^Ebenezer means stone of help\\./.test(w[1]) && /same ground where Israel had lost before, and named it for help they had not earned\\.$/.test(w[1]) && d.querySelector(".sas-what").previousElementSibling.classList.contains("ew-quote") && d.querySelector(".sas-frame").textContent === "Two stones. One remembers a crossing. One remembers help. Both were set to be asked about. That is why your stone has three lines — who it is for, what the LORD has done, what it means — and why, three months from now, it asks you."; })());'),
])
patch('test-stones-v1.js', [
  ('in the man’s own words. Read them.', 'in the man’s own words. They were set so the question would be asked. Read them.'),
])
print('words in')
