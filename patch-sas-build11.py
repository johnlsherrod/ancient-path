#!/usr/bin/env python3
"""Set a Stone build 11 and What These Stones Mean build 9 — the house pattern (John's walk of Your Page v29, 5 Oct: "the
remembrance stone formatting is different from write a lament, where i'm from, etc. need consistency"; "navigation from the
top menu to remembrance stone and back to the story page is awkward"). Both pages take the navy band of the shelf pieces
(eyebrow · title · lede), the lament page's prose measure, and the house foot ("← Your Story" to the hub, "Report a bug").
Set a Stone loses "← Your Page" at the top (the engine's Go to Your Page after Save is the way). Edit: a link to a
particular stone (?open=<id>) loads it and Save updates it; only ?open=1 (the latest) is dropped, so the handoff and the
plain page still start empty."""
import os
here = os.path.dirname(os.path.abspath(__file__))
BAND_BG = '''#1B2A3A url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='600' viewBox='0 0 1600 600'><g fill='none' stroke='%23B8945F' stroke-width='1.4' opacity='0.15'><path d='M-50 460 C 250 380, 450 500, 760 420 S 1300 320, 1680 400'/><path d='M-50 500 C 250 430, 480 540, 800 470 S 1320 380, 1680 450'/><path d='M-50 420 C 280 330, 520 460, 820 370 S 1280 270, 1680 350'/><path d='M-50 540 C 300 500, 520 580, 840 520 S 1340 440, 1680 510'/><path d='M-50 380 C 300 300, 560 420, 880 330 S 1300 240, 1680 310'/></g><g fill='%23B8945F' opacity='0.20'><circle cx='760' cy='420' r='4'/></g></svg>") 50% 100%/cover no-repeat'''
def patch(path, pairs):
    s = open(os.path.join(here, path), encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) == 1, (path, a[:70], s.count(a))
        s = s.replace(a, b)
    open(os.path.join(here, path), 'w', encoding='utf-8').write(s)
patch('sas-body.html', [
  ("<!-- AP-SAS-v1 · build 10 (5 Oct 2026, John's walk of build 9:",
   "<!-- AP-SAS-v1 · build 11 (5 Oct 2026, John's walk of Your Page v29: the house pattern — the navy band (Before you begin · Set a Stone · the lede), the lament page's prose measure, the house foot (← Your Story, Report a bug); no ← Your Page at the top; Edit — ?open=<id> loads one stone and Save updates it, only ?open=1 is dropped) (build 10 (5 Oct 2026, John's walk of build 9:"),
  # the band and the prose measure
  ('.ew-root .sas-frame{font:400 16px/1.55 var(--e-sans);color:var(--e-ink);margin:0 0 26px}\n.ew-root .sas-what{font:400 16px/1.55 var(--e-sans);color:var(--e-ink);margin:-8px 0 22px}',
   '''.ew-root .sas-frame{font:400 16px/1.65 var(--e-sans);color:var(--e-ink);margin:0 0 26px;max-width:54ch}
.ew-root .sas-what{font:400 16px/1.65 var(--e-sans);color:var(--e-ink);margin:-8px 0 22px;max-width:54ch}
/* AP-BAND-v1 — the shelf's front door, as on Write a Lament, Where I Am From and What Kind of Light (build 11) */
.ew-root .sas-band{position:relative;width:100vw;margin:-28px 0 36px calc(50% - 50vw);background:''' + BAND_BG + '''}
.ew-root .sas-band,.ew-root .sas-band *{text-align:center}
.ew-root .sas-band-in{max-width:720px;margin:0 auto;padding:64px 24px}
.ew-root .sas-band-eyebrow{font:600 13px/1.65 var(--e-sans) !important;letter-spacing:3px !important;text-transform:uppercase !important;color:var(--e-bronze) !important;margin:0 0 10px;max-width:none}
.ew-root .sas-band-t{font:600 44px/1.15 var(--e-serif) !important;color:#F3EDE3 !important;letter-spacing:-0.01em !important;margin:0;max-width:none}
.ew-root .sas-band-lede{font:400 19px/1.6 var(--e-sans) !important;color:#B7AFA4 !important;margin:14px auto 0;max-width:600px}
@media (max-width:640px){.ew-root .sas-band-in{padding:48px 20px}.ew-root .sas-band-t{font-size:34px !important}.ew-root .sas-band-lede{font-size:17px !important}}
.ew-root .sas-back{margin:30px 0 0;font:600 15px/1.4 var(--e-sans)}
.ew-root .sas-back a{color:var(--e-bronze) !important;text-decoration:none !important;font-weight:600 !important}'''),
  ('@media print{.ew-root .ew-top-nav,.ew-root .ew-safe,.ew-root .sas-safe,', '@media print{.ew-root .sas-band,.ew-root .sas-back,.ew-root .ew-safe,.ew-root .sas-safe,'),
  # the top: the band in place of ← Your Page, the eyebrow, the title and the lede
  ('<p class="ew-top-nav"><a class="ew-page-link" href="/start" target="_top">&larr; Your Page</a></p>\n<p class="ew-eyebrow">Your Story · A stone of remembrance</p>\n<h1 class="ew-h1">Set a Stone</h1>\n<p class="ew-lede">Three months from now you will be asked one question: what has the LORD done since? Set the stone today &mdash; who it is for, what he has done, its name &mdash; and the question will be waiting with your own words under it. That is the work: seeing the ground you have covered, and who covered it <span style="white-space:nowrap">with you.</span></p>',
   '<div class="sas-band"><div class="sas-band-in">\n<p class="sas-band-eyebrow">Before you begin</p>\n<h1 class="sas-band-t">Set a Stone</h1>\n<p class="sas-band-lede">Three months from now you will be asked one question: what has the LORD done since? Set the stone today &mdash; who it is for, what he has done, its name &mdash; and the question will be waiting with your own words under it. That is the work: seeing the ground you have covered, and who covered it <span style="white-space:nowrap">with you.</span></p>\n</div></div>'),
  # the foot: ← Your Story, Report a bug
  ('<p class="ew-foot"><strong>If something in this stirred more than you expected:</strong> the 988 Suicide &amp; Crisis Lifeline is there any hour, by call or text. In immediate danger, call 911. <strong>We make mistakes.</strong> If something on this page is broken or wrong, <a href="/contact" target="_top">tell us</a>.</p>',
   '<p class="sas-back"><a href="/your-story" target="_top">&larr; Your Story</a></p>\n<p class="ew-foot"><strong>If something in this stirred more than you expected:</strong> the 988 Suicide &amp; Crisis Lifeline is there any hour, by call or text. In immediate danger, call 911. <strong>We make mistakes.</strong> Sometimes it is in the site we build. If you find one, please send us the information &mdash; a screen print is great, or just a description. Thank you. <a href="https://form.jotform.com/262466498821065" target="_blank" rel="noopener" data-ap-bug="">Report a bug</a></p>'),
  # Edit: keep ?open=<id>, drop only ?open=1
  ('  /* a stone is never continued: ?open=1 (the handoff, Open it) must not load the last stone into the boxes, where a Save would overwrite it */\n  try { if (/[?&]open=/.test(window.location.search)) { var q = window.location.search.replace(/([?&])open=[^&]*&?/, "$1").replace(/[?&]$/, ""); window.history.replaceState(null, "", window.location.pathname + q + window.location.hash); } } catch (e) {}',
   '  /* a stone is never "continued": ?open=1 (the handoff, "the latest") must not load the last stone into the boxes, where a Save would overwrite it — it is dropped before the engine looks. ?open=<id> is Edit: that one stone is loaded and Save updates it (build 11). */\n  try { if (/[?&]open=1(&|$)/.test(window.location.search)) { var q = window.location.search.replace(/([?&])open=1(&|$)/, "$1").replace(/[?&]$/, ""); window.history.replaceState(null, "", window.location.pathname + q + window.location.hash); } } catch (e) {}'),
])
patch('stones-body.html', [
  ("<!-- AP-STONES-v1 · build 8 (5 Oct 2026: a stone's name heads it — stone.js v2.7; story.js v18.7)",
   "<!-- AP-STONES-v1 · build 9 (5 Oct 2026, John: the house pattern — the navy band (Read them · What These Stones Mean · the lede) and the house foot, ← Your Story and Report a bug) (build 8 (5 Oct 2026: a stone's name heads it — stone.js v2.7; story.js v18.7)"),
  ('.aps-root .aps-eyebrow{font:600 12px/1.4 var(--s-sans);letter-spacing:.22em;text-transform:uppercase;color:var(--s-bronze);margin:0 0 10px}\n.aps-root .aps-h1{font:600 36px/1.15 var(--s-serif);color:var(--s-navy);margin:0 0 14px}\n.aps-root .aps-lede{font:400 18px/1.55 var(--s-sans);color:var(--s-ink);margin:0 0 26px}',
   '''.aps-root .aps-band{position:relative;width:100vw;margin:0 0 36px calc(50% - 50vw);background:''' + BAND_BG + '''}
.aps-root .aps-band,.aps-root .aps-band *{text-align:center}
.aps-root .aps-band-in{max-width:720px;margin:0 auto;padding:64px 24px}
.aps-root .aps-band-eyebrow{font:600 13px/1.65 var(--s-sans) !important;letter-spacing:3px !important;text-transform:uppercase !important;color:var(--s-bronze) !important;margin:0 0 10px}
.aps-root .aps-band-t{font:600 44px/1.15 var(--s-serif) !important;color:#F3EDE3 !important;letter-spacing:-0.01em !important;margin:0}
.aps-root .aps-band-lede{font:400 19px/1.6 var(--s-sans) !important;color:#B7AFA4 !important;margin:14px auto 0;max-width:600px}
@media (max-width:640px){.aps-root .aps-band-in{padding:48px 20px}.aps-root .aps-band-t{font-size:34px !important}.aps-root .aps-band-lede{font-size:17px !important}}
.aps-root .aps-back{margin:30px 0 0;font:600 15px/1.4 var(--s-sans)}
.aps-root .aps-back a{color:var(--s-bronze) !important;text-decoration:none !important;font-weight:600 !important}'''),
  ('.aps-root[data-band="1"] .aps-h1{font-size:26px;margin-bottom:8px}\n.aps-root[data-band="1"] .aps-lede{font-size:16px;margin-bottom:18px}\n.aps-root[data-band="1"] .aps-quote,.aps-root[data-band="1"] .aps-you,.aps-root[data-band="1"] .aps-foot{display:none}',
   '.aps-root[data-band="1"] .aps-band{display:none}\n.aps-root[data-band="1"] .aps-band-h{display:block;font:600 26px/1.2 var(--s-serif);color:var(--s-navy);margin:0 0 8px}\n.aps-root[data-band="1"] .aps-band-l{display:block;font:400 16px/1.55 var(--s-sans);color:var(--s-ink);margin:0 0 18px}\n.aps-root .aps-band-h,.aps-root .aps-band-l{display:none}\n.aps-root[data-band="1"] .aps-quote,.aps-root[data-band="1"] .aps-you,.aps-root[data-band="1"] .aps-foot,.aps-root[data-band="1"] .aps-back{display:none}'),
  ('<p class="aps-eyebrow">Your Story · Stones of remembrance</p>\n<h1 class="aps-h1">What These Stones Mean</h1>\n<p class="aps-lede">Men who walked this path set these stones. Each one says what God did, in the man&rsquo;s own words. They were set so the question would be asked. Read them. Every one of them points to the Rock. When you are ready, set your own.</p>',
   '<div class="aps-band"><div class="aps-band-in">\n<p class="aps-band-eyebrow">Read them</p>\n<h1 class="aps-band-t">What These Stones Mean</h1>\n<p class="aps-band-lede">Men who walked this path set these stones. Each one says what God did, in the man&rsquo;s own words. They were set so the question would be asked. Every one of them points to the Rock. When you are ready, set your own.</p>\n</div></div>\n<h2 class="aps-band-h">What These Stones Mean</h2>\n<p class="aps-band-l">The newest stones men have set where others can see them.</p>'),
  ('<p class="aps-foot">Every stone here was set by the man who wrote it, where others can see it, with his name or none. He can take it back any time. <a href="/your-story">Your Story</a></p>',
   '<p class="aps-back"><a href="/your-story">&larr; Your Story</a></p>\n<p class="aps-foot">Every stone here was set by the man who wrote it, where others can see it, with his name or none. He can take it back any time. <strong>We make mistakes.</strong> If you find one, please <a href="https://form.jotform.com/262466498821065" target="_blank" rel="noopener" data-ap-bug="">report a bug</a>.</p>'),
])
patch('sas-body.html', [('.ew-root .ew-quote{font:italic 400 16px/1.55 var(--e-serif);color:var(--e-ink);margin:0 0 14px;padding:10px 14px;border-left:2px solid var(--e-bronze)}', '.ew-root .ew-quote{font:italic 400 16px/1.55 var(--e-serif);color:var(--e-ink);margin:0 0 14px;padding:10px 14px;border-left:2px solid var(--e-bronze);max-width:54ch}\n.ew-root .sas-return-ex{max-width:54ch}')])
print('build 11 / stones 9 in the sources')
