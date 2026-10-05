#!/usr/bin/env python3
"""Set a Stone build 9 and stones build 7 — the Rock (John, Oct 5: "we need to tie back the promised possession and divine
intervention (rocks) with the higher calling of Jesus as our rock"). A third named scene, The Rock · Jesus, after the two
stones: 1 Corinthians 10:4 and the paragraph; the frame line splits around it ("What about you?" moves after the Rock).
What These Stones Mean: one sentence in the lede, "Every one of them points to the Rock."
Note: a stray task installed these words straight from the editor on 5 Oct (its marker text is reproduced here so the
sources match the live pages); this script makes the same build from the sources, which is where builds come from."""
import os
here = os.path.dirname(os.path.abspath(__file__))
def patch(path, pairs):
    s = open(os.path.join(here, path), encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) == 1, (path, a[:70])
        s = s.replace(a, b)
    open(os.path.join(here, path), 'w', encoding='utf-8').write(s)
patch('sas-body.html', [
  ("<!-- AP-SAS-v1 · build 8 (4 Oct 2026, John's walk of build 7:",
   "<!-- AP-SAS-v1 · build 9 (5 Oct 2026, John: the Rock · Jesus placed after the two scenes — 1 Corinthians 10:4, and the stones point past themselves; the line through the two stones stands where it was, \"What about you?\" moves after the Rock) (build 8 (4 Oct 2026, John's walk of build 7:"),
  ('<p class="sas-frame">Two stones, one line through them: what God promised, God kept &mdash; by bringing them in, and by bringing them back when they had broken it. Neither was set from a place of strength. Both were named, and both were set to be asked about. The stone does not change you; it reminds you who does. What about you? Can you stand on his promises and accept that, at times, he will step in for you? That is why your stone has three lines &mdash; who it is for, what the LORD has done, and the name you give it &mdash; and why, three months from now, it asks you to <span style="white-space:nowrap">look again.</span></p>',
   '<p class="sas-frame">Two stones, one line through them: what God promised, God kept &mdash; by bringing them in, and by bringing them back when they had broken it. Neither was set from a place of strength. Both were named, and both were set to be asked about.</p>\n\n<p class="sas-scene-k">The Rock &middot; Jesus</p>\n<p class="ew-quote">&hellip;they drank from the spiritual Rock that followed them, and the Rock was Christ. <b>1 Corinthians 10:4</b></p>\n<p class="sas-what">The stones point past themselves. The Rock that gave Israel water in the wilderness, the rock of David&rsquo;s salvation, the stone the builders rejected that became the cornerstone &mdash; Scripture names him. Gilgal and Ebenezer were set by men on the ground. The Rock was laid by God. The stones remember what he did; the Rock is who did it. Build on him &mdash; hear his words and do them &mdash; and when the floods come, the house stands. The stone does not change you; it reminds you who does.</p>\n\n<p class="sas-frame">What about you? Can you stand on his promises and accept that, at times, he will step in for you? That is why your stone has three lines &mdash; who it is for, what the LORD has done, and the name you give it &mdash; and why, three months from now, it asks you to <span style="white-space:nowrap">look again.</span></p>'),
])
patch('stones-body.html', [
  ('<!-- AP-STONES-v1 · build 6 (4 Oct 2026: stone.js v2.6 — the return has its ground and asks by name)',
   '<!-- AP-STONES-v1 · build 7 (5 Oct 2026, John: one sentence added to the lede — "Every one of them points to the Rock.") (build 6 (4 Oct 2026: stone.js v2.6 — the return has its ground and asks by name)'),
  ('They were set so the question would be asked. Read them. When you are ready, set your own.',
   'They were set so the question would be asked. Read them. Every one of them points to the Rock. When you are ready, set your own.'),
])
print('build 9 / stones 7 in the sources')
