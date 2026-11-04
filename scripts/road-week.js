/* AP-HISROAD road.js build 11.3 — Your Page, install 2 of 3: the Readings view (design 8.10). Served by the Research reader script (ResearchReader.gs build 12.5, ?file=road.js).
   11.3 (Nov 3, 2026; built to the mockup v8.10 John ruled, https://claude.ai/artifact/DRFs8n4ZCVisfvEhhiLSYP; the mockup's words are the copy; built on the live 11.2.2 and Research reader 12.4.2 read through the Google Drive connector). 1. Readings joins the menu and the tabs (This Week, Readings, Story, Path; #readings). The reading moves here from the piece sheet: every "Read it" opens Readings. 2. Each reading carries its story, where to listen from, how we read it, One Thing to Do, Carry This Question, and one tap (Helped or Skip); after Helped, one optional question at a time (Keep a line, What did it touch?, Where did it show up?), and after Skip, three reasons (Too long, Not for me, Not now). 3. What Has Helped is drawn from his real taps only: Where It Points (Lean into, Keep doing with Keep it), Lines You've Kept, Practices That Held. 4. Reading Rhythm is time, not pieces: About 20 minutes, About 40 minutes, An hour (the older paces carry over); Set Your Rhythm shows first until he has chosen; Which course leads? when he walks two. 5. "We have additional articles we think you would appreciate if time allows" with Ask for more, shown only when another reading is ready. 6. Who We Read opens from How it's chosen. 7. The check-in no longer asks whether the reading helped; it shows what he answered on Readings, or one tap to Readings (one act, one place). 8. Settings no longer carries a second rhythm: the amount he reads is set on Readings only. Not built, and listed in the handoff: Watch for, the pattern sentence, Bring it Wednesday, Reading From Here, Rhythm's second Ask for more.
   Stays on the live layer until install 3: Story and its pieces, stones and offers (story.js). Moves to our own platform as it is: the whole script and every row it writes (served from the repo).
   Counts taken before this card: the script parses; the stylesheets are assembled as the page assembles them; Chromium accepted 170 (hisroad) + 316 (apg) rules, the same as the CSS parser (11.2.2: 170 + 297; none removed, 19 added); the machine checks (check810 adapted to this build) ran 96 views (12 reading situations × This Week, Readings, Story and Path × 390 and 1440 wide, every panel and reveal open) and 3,669 checks with none failing (no sideways scroll, the right column never longer than the left, every tap 44 pixels or more, no panel title over one line and a half, no banned word, no panel empty, no script error); jobs.js adapted ran 21 press-count jobs at both widths, all within their counts. The live page has no dark theme, so light and dark were not both run.
   Prior build, kept for the record: 11.2.2 — Your Page, install 1 of 3: the shell (the band with the witness line, the menu, Settings with "The guidepost" share row), This Week with Coming Weeks, Path with The Path Ahead, and the guideposts as action. Served by the Research reader script (ResearchReader.gs build 12.4, ?file=road.js).
   11.2.2 (Nov 3, 2026, the band measures where the page set the room again once the page and fonts settle, so it reaches both screen edges; no rule changes). 11.2.1 (Nov 3, 2026, the band's words start where the menu's do, measured from the column's own left edge, not the container's width; still 297 rules). 11.2 (Nov 3, 2026; built to the mockup v8.10 John ruled, https://claude.ai/artifact/DRFs8n4ZCVisfvEhhiLSYP; the mockup's words are the copy; built on the live 11.1.2 read through the Google Drive connector). 1. The page owns its frame: the dark band (the view's name, one line of context, who walks with him with Write to him), the menu on a computer (Your Rooms only when there is more than one), the tabs on a phone, panels (AP-PANEL 1), the course in its card (AP-CARD 1), sheets that say "← Back to <view>". 2. This Week: Next Step, Walking With You, The Week Ahead, and at the side Coming Weeks (the next three weeks from the Weeks tab, the open night from the January Forecast sheet, "Add your Wednesday nights" builds a calendar file) and the Guidepost. 3. Path: The Path Ahead (labeled stops he can tap; it opens on the next stop ahead), What's Next, Courses, Walk With Another Man; the side holds the guideposts, his witness and the doors. 4. The guidepost as an act: Signs You're Here, Is this where you are? (That's me · Not now), One Practice (Use it: the check-in carries it), A Reading on It (from the Guideposts tab; hidden when blank), Talk With a Coach, Why this helps; sharing it with his witness is his, in Settings, off to start. 5. The Week 7 witness invitation is asked of a man in a room too. Every answer is saved in the record's shape (a Road row or a Learners column).
   Stays on the live layer until installs 2 and 3: the reading (every "Read it" opens it where 11.1.2 has it), the check-in, Story and its pieces, stones and offers (story.js). Moves to our own platform as it is: the whole script and every row it writes (served from the repo). Rebuilt there: the sign-in (the site's person) and the Front Desk page check.
   Counts taken before this card: the script parses; the stylesheets are assembled as the page assembles them; Chromium accepted 170 (hisroad) + 297 (apg) rules, the same as the CSS parser (11.1.2: 170; none removed, 297 added); check810 adapted to this build ran 144 views (18 moments × This Week and Path × 390 and 1440px × light and dark, every panel open) with 0 fails; jobs.js adapted ran 6 jobs at both widths, every one within its limit (the Reading-helped job belongs to install 2 and is skipped); the page's own check was shown to fire when short. Said plainly. (a) Letters read from the Notes tab, which is empty, so every letter line draws its empty state; no sample ships. (b) The open night is read from the January Forecast sheet, Events tab (Dec 3, 2026), and shows only while it is ahead; its "Hear about it" link is left out (no page exists). (c) Text notice stays hidden. (d) "Use it" writes the practice row the check-in reads (ckPractices now carries the guidepost practice), so it does something; the guidepost share to his witness is off to start. (e) Witness wording: the witness reads "he said he's at", the man's preview reads "you said you're at"; the leader's name is not in the record, so a room man sees "your group's leader". (f) The check-in sentence is adapted to the live four-step check-in; the check-in, piece sheet and Story still close with Close (the live layer, until install 3). (g) road_between is on the server only; the client does not call it yet. (h) The calendar file uses a 2-hour length. (i) The leader's own page has no live data shape and is not drawn. (j) The Readings row is dropped from the welcome copy (Readings joins in install 2); no total-minutes figure and no "Chapter N" wording. (k) The server (Research reader 12.4, built on the live 12.3 so Your Growth 4.1.1 is untouched) adds road_gp, road_gpuse, road_write, road_between, the v11 gp/ahead/event shapes and a Guideposts tab; the Week 7 witness invitation is allowed for a man in a room in the second half. Earlier builds' notes are in build 11.1.2's road.js. The page block on /start holds <div id="apRoad4"></div> and this script's tag. */
(function () {
  "use strict";
  var host = document.getElementById("apRoad4");
  if (!host || host.getAttribute("data-hisroad")) return;
  host.setAttribute("data-hisroad", "11.3");
  var BUILD = "11.3";
  /* the stamped rule count of this script's stylesheet, taken before the file card (AP-SHIP 1); the page counts what the browser accepted against it */
  var RULES = { hisroad: 170, apg: 316 };
  var DESK_URL = "https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec";
  var ROAD_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split("?")[0] : ""; return /script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(u) ? u : ""; })();
  var CACHE = "ap_hisroad_v4";
  /* AP-SHIP 1: the shared blocks (AP-PANEL 1, AP-CARD 1, AP-SHAPES 1.1) are carried byte for byte from growth.js 4.0.1; the 8.10 parts follow them */
  var PANEL_CSS = ".ap-home .ap-panel{--ap-g:28px;display:block;margin:0 0 18px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-top:3px solid var(--ap-bronze,#B8945F);border-radius:6px;box-sizing:border-box}.ap-home .ap-panel.ap-first{margin-top:44px}.ap-home h2.ap-panel-h{margin:0 !important;padding:0 !important;border:0 !important;font:inherit !important;background:none !important}.ap-home .ap-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;width:100%;box-sizing:border-box;margin:0;padding:20px var(--ap-g) 18px;background:none;border:0;border-radius:0;text-align:left;cursor:pointer;color:inherit}.ap-home .ap-panel-head:focus-visible{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:-4px}.ap-home .ap-panel-text{display:block;min-width:0;flex:1 1 auto}.ap-home .ap-panel-title{display:block;font:400 26px/1.2 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}.ap-home .ap-panel-note{display:block;font:400 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:6px 0 0}.ap-home .ap-panel-ctl{flex:none;font:600 14px/1 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:4px 0 3px;margin-top:6px;white-space:nowrap}.ap-home .ap-panel-body{padding:0 var(--ap-g) 26px}.ap-home .ap-panel.shut .ap-panel-body{display:none}.ap-home .ap-panel.shut .ap-panel-head{padding-bottom:20px}.ap-home button.ap-rev.ap-rev{display:inline-block;font:400 15px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;background:none;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:0 0 1px;margin:0;cursor:pointer;white-space:nowrap}.ap-home button.ap-rev.ap-rev:hover{color:var(--ap-navy,#1F2A44) !important;border-bottom-color:var(--ap-bronze,#B8945F)}@media (max-width:600px){.ap-home .ap-panel{--ap-g:18px;margin-left:-4px;margin-right:-4px}.ap-home .ap-panel.ap-first{margin-top:36px}.ap-home .ap-panel-title{font-size:24px !important}}";
  var CARD_CSS = ".ap-home .ap-courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin:0;padding:0}\n.ap-home a.ap-ccard{display:flex;flex-direction:column;background:#fff;border:1px solid var(--ap-rule);border-radius:6px;overflow:hidden;text-decoration:none !important;color:inherit !important;transition:border-color .2s ease,box-shadow .2s ease}\n.ap-home a.ap-ccard:hover{border-color:var(--ap-bronze);box-shadow:0 6px 18px rgba(31,42,68,.08)}\n.ap-home a.ap-ccard:focus-visible{outline:2px solid var(--ap-bronze);outline-offset:2px}\n.ap-home .ap-ccard-img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:var(--ap-rule)}\n.ap-home .ap-ccard-body{display:flex;flex-direction:column;flex:1 1 auto;padding:18px 20px 20px}\n.ap-home .ap-ccard-name{font:400 24px/1.2 var(--ap-serif) !important;color:var(--ap-navy) !important;margin:0}\n.ap-home .ap-ccard-line{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-ink) !important;margin:8px 0 0}\n.ap-home .ap-ccard-sub{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet) !important;margin:4px 0 0}\n.ap-home .ap-ccard-way{align-self:flex-start;margin-top:auto;padding-top:18px}\n.ap-home .ap-ccard-way span{font:600 15px/1.4 var(--ap-sans) !important;color:var(--ap-navy) !important;border-bottom:1px solid var(--ap-bronze);padding-bottom:1px}\n.ap-home .ap-ccard-way span::after{content:\"\\2192\";padding-left:6px}\n.ap-home a.ap-ccard:hover .ap-ccard-way span{color:var(--ap-bronze) !important}\n.ap-home .ap-nw{display:inline-block}\n@media (max-width:600px){.ap-home .ap-courses{grid-template-columns:1fr;gap:16px}.ap-home .ap-ccard-body{padding:16px 18px 18px}.ap-home .ap-ccard-name{font-size:22px !important}}";
  var APG_CSS = "@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');" +
  /* AP-SHAPES 1.1: the three shapes of an ask (Find, Answer, Walk) and the weight rule; one source, shapes.css, carried by every room script */
  ".apg .ap-find{position:relative;max-width:34em;margin:0 0 18px}.apg .ap-find input{width:100%;box-sizing:border-box;font:400 16px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--ink,#2B3040) !important;background:#fff;border:0;border-bottom:1px solid var(--rule,#E2DCD1);border-radius:0;padding:8px 0 8px 28px;outline:none}.apg .ap-find input:focus{border-bottom-color:var(--navy,#1F2A44)}.apg .ap-find::before{content:\"\";position:absolute;left:2px;top:11px;width:12px;height:12px;border:1.5px solid var(--quiet,#6B7280);border-radius:50%}.apg .ap-find::after{content:\"\";position:absolute;left:13px;top:23px;width:7px;height:1.5px;background:var(--quiet,#6B7280);transform:rotate(45deg);transform-origin:left center}.apg .ap-find input::placeholder{color:var(--quiet,#6B7280)}.apg .ap-answer{margin:0 0 18px;max-width:40em}.apg .ap-answer .ap-answer-q{font:400 20px/1.4 var(--serif,'Source Serif 4',serif) !important;color:var(--navy,#1F2A44) !important;margin:0 0 10px;text-wrap:balance}.apg .ap-answer .ap-answer-lead{font:400 15px/1.5 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--quiet,#6B7280) !important;margin:-4px 0 10px}.apg .ap-answer input,.apg .ap-answer textarea{display:block;width:100%;box-sizing:border-box;font:400 17px/1.5 var(--serif,'Source Serif 4',serif) !important;color:var(--ink,#2B3040) !important;background:var(--paper,#FBF9F5);border:1px solid var(--rule,#E2DCD1);border-left:3px solid var(--bronze,#B8945F);border-radius:4px;padding:12px 14px;outline:none;resize:vertical}.apg .ap-answer input{min-height:0}.apg .ap-answer textarea{min-height:96px}.apg .ap-answer input:focus,.apg .ap-answer textarea:focus{border-color:var(--navy,#1F2A44);border-left-color:var(--bronze,#B8945F)}.apg .ap-answer input::placeholder,.apg .ap-answer textarea::placeholder{color:var(--quiet,#6B7280);font-style:italic}.apg .ap-answer .ap-answer-act{display:flex;align-items:center;gap:14px;margin:10px 0 0}.apg .ap-answer .ap-answer-state{font:400 14px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--quiet,#6B7280) !important;margin:8px 0 0;min-height:1.4em}.apg .ap-answer .ap-answer-state.kept{color:var(--bronze,#B8945F) !important}.apg .ap-answer .ap-answer-state.kept::before{content:\"\\2713\\00a0\"}.apg .ap-walk{display:inline-block;font:600 15px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--navy,#1F2A44) !important;background:none;border:0;border-bottom:1px solid var(--bronze,#B8945F);padding:0 0 1px;margin:0;cursor:pointer;text-decoration:none !important;text-align:left}.apg .ap-walk:hover{border-bottom-color:var(--navy,#1F2A44)}.apg .ap-walk .ap-walk-arrow{display:inline-block;margin-left:6px;color:var(--bronze,#B8945F)}.apg .ap-walk+.ap-walk{margin-left:18px}.apg .ap-walk.quiet{font-weight:400 !important;color:var(--quiet,#6B7280) !important;border-bottom-color:var(--rule,#E2DCD1)}.apg a.btn.p,.apg a.btn.g{background:none !important;color:var(--navy,#1F2A44) !important;border:0 !important;border-bottom:1px solid var(--bronze,#B8945F) !important;border-radius:0 !important;padding:0 0 1px !important;font:600 15px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;box-shadow:none !important;display:inline-block}.apg a.btn.p::after,.apg a.btn.g::after{content:\"\\00a0\\2192\";color:var(--bronze,#B8945F)}.apg a.btn.p+.ap-btn,.apg .ap-walk+a.btn.p,.apg a.btn.p+.ap-walk{margin-left:18px}@media (prefers-reduced-motion: reduce){.ap-walk,.ap-answer input,.ap-answer textarea{transition:none}}.apg .ap-find input[type=search]{min-height:0 !important;padding:8px 0 8px 28px !important;border:0 !important;border-bottom:1px solid var(--rule) !important;border-radius:0 !important;background:#fff !important}.apg .ap-find input[type=search]:focus{border-bottom-color:var(--navy) !important}.apg .ap-answer textarea,.apg .ap-answer input[type=text]{border:1px solid var(--rule) !important;border-left:3px solid var(--bronze) !important;border-radius:4px !important;background:var(--paper) !important;padding:12px 14px !important}.apg .ap-answer textarea:focus,.apg .ap-answer input[type=text]:focus{border-color:var(--navy) !important;border-left-color:var(--bronze) !important}.apg .ap-walk .ap-walk-arrow{margin-left:6px}.apg a.btn.p::after,.apg a.btn.g::after{content:\" \\2192\"}" +
  PANEL_CSS + CARD_CSS +
  '.apg.ap-home{--paper:#FBF9F5;--sand:#F3EDE3;--card:#FFFFFF;--navy:#1F2A44;--ink:#2B3040;--quiet:#5E6573;--rule:#E2DCD1;--edge:#8C8170;--hover:rgba(184,148,95,.06);--bronze:#B8945F;--bronze-ink:#77592E;--band:#1F2A44;--band-fg:#F3EDE3;--band-quiet:#D8D0C4;--band-k:#D9B97F;--band-line:rgba(255,255,255,.14);--btn:#1F2A44;--btn-fg:#FBF9F5;--tap:44px;--ease:cubic-bezier(.2,.7,.2,1);--g:18px;--bar:84px;--serif:\'Source Serif 4\',Georgia,\'Times New Roman\',serif;--sans:\'Source Sans 3\',\'Segoe UI\',Arial,sans-serif;--ap-serif:var(--serif);--ap-sans:var(--sans);--ap-navy:var(--navy);--ap-ink:var(--ink);--ap-quiet:var(--quiet);--ap-rule:var(--rule);--ap-bronze:var(--bronze);--ap-paper:var(--paper);display:block;position:relative;background:var(--paper);color:var(--ink);font:400 16px/1.5 var(--sans);-webkit-font-smoothing:antialiased;text-align:left}' +
  '.apg.ap-home .ap-panel{background:var(--card)}' +
  '#apRoad4 .apg *{box-sizing:border-box}' +
  '#apRoad4 .apg p{margin:0;text-wrap:pretty}' +
  '#apRoad4 .apg h1,#apRoad4 .apg h2,#apRoad4 .apg h3{text-wrap:balance}' +
  '#apRoad4 .apg button{font:inherit;color:inherit}' +
  '#apRoad4 .apg a{color:inherit}' +
  '#apRoad4 .apg :focus-visible{outline:3px solid var(--navy);outline-offset:2px;border-radius:6px}' +
  '#apRoad4 .apg .band :focus-visible{outline-color:#F3EDE3}' +
  '#apRoad4 .apg .nw{display:inline-block}' +
  '#apRoad4 .apg .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}' +
  '#apRoad4 .apg .band{background:var(--band);color:var(--band-fg);width:var(--bleed-w,100%);margin-left:var(--bleed-l,0)}' +
  '#apRoad4 .apg .topbar{padding:8px 16px 0}' +
  '#apRoad4 .apg .kr{display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:44px}' +
  '#apRoad4 .apg .k{font:600 12px var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--band-k)}' +
  '#apRoad4 .apg .kr-r{display:flex;align-items:center;gap:14px}' +
  '#apRoad4 .apg .tb{min-height:var(--tap);min-width:var(--tap);padding:0;background:none;border:0;color:var(--band-k);font:600 13px var(--sans);cursor:pointer;white-space:nowrap}' +
  '#apRoad4 .apg .tabs{position:sticky;top:var(--bar);z-index:6;display:flex;background:var(--paper);border-bottom:1px solid var(--rule);overflow-x:auto;scrollbar-width:none}' +
  '#apRoad4 .apg .tabs::-webkit-scrollbar{display:none}' +
  '#apRoad4 .apg .tab{flex:1 0 auto;min-height:48px;background:none;border:0;border-bottom:3px solid transparent;color:var(--quiet);font:600 14px var(--sans);cursor:pointer;padding:0 10px;white-space:nowrap}' +
  '#apRoad4 .apg .tab[aria-selected="true"]{color:var(--navy);border-bottom-color:var(--bronze-ink)}' +
  '#apRoad4 .apg .hero{padding:4px 18px 20px;border-bottom:1px solid var(--band-line);min-height:118px}' +
  '#apRoad4 .apg .hero .hk{display:none}' +
  '#apRoad4 .apg .hero h1{margin:0;font:400 28px/1.15 var(--serif);color:var(--band-fg);padding:0;border:0}' +
  '#apRoad4 .apg .hero .where{margin-top:6px;font:400 16px/1.45 var(--serif);color:var(--band-quiet)}' +
  '#apRoad4 .apg .hero h1:focus{outline:none}' +
  '#apRoad4 .apg .pcnav{display:none}' +
  '#apRoad4 .apg .mlab{margin:0 0 6px 15px;font:600 12px var(--sans);letter-spacing:.1em;text-transform:uppercase;color:var(--quiet)}' +
  '#apRoad4 .apg .mi{display:block;width:100%;min-height:var(--tap);text-align:left;padding:9px 12px;margin:0 0 2px;border:0;border-left:3px solid transparent;border-radius:0 6px 6px 0;background:none;cursor:pointer;font:inherit;color:var(--ink);text-decoration:none}' +
  '#apRoad4 .apg .mi b{display:block;font:600 16px/1.3 var(--sans);color:var(--navy)}' +
  '#apRoad4 .apg .mi span{display:block;font-size:14px;line-height:1.35;color:var(--quiet)}' +
  '#apRoad4 .apg .mi.here{cursor:default}' +
  '#apRoad4 .apg .mgroup .mv{padding-left:24px}' +
  '#apRoad4 .apg .mgroup{margin:0 0 10px;padding-bottom:2px}' +
  '#apRoad4 .apg .mgroup .here{padding-bottom:4px}' +
  '#apRoad4 .apg .mi[aria-current="page"]{border-left-color:var(--bronze-ink);background:var(--sand)}' +
  '#apRoad4 .apg .mfoot{margin-top:14px;padding-top:12px;border-top:1px solid var(--rule)}' +
  '#apRoad4 .apg .view{padding:16px 16px 48px}' +
  '#apRoad4 .apg .cols2{display:block}' +
  '#apRoad4 .apg .side{margin-top:18px}' +
  '#apRoad4 .apg .mainc .ap-panel:last-child,#apRoad4 .apg .side .ap-panel:last-child{margin-bottom:0}' +
  '#apRoad4 .apg .ap-panel-note .np{display:block;margin-left:-14px}' +
  '#apRoad4 .apg .ap-panel-note .nn{display:inline-block;position:relative;padding-left:14px}' +
  '#apRoad4 .apg .ap-panel-note .nn+.nn:before{content:"\\00b7";position:absolute;left:4px}' +
  '#apRoad4 .apg .t{font:400 20px/1.35 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .t.claim{font-size:20px}' +
  '#apRoad4 .apg .s{margin-top:8px;font-size:16px}' +
  '#apRoad4 .apg .help{margin-top:8px;font-size:14px;color:var(--quiet)}' +
  '#apRoad4 .apg .who{margin-top:6px;font-size:14px;color:var(--quiet)}' +
  '#apRoad4 .apg .lk{margin:0;font:600 12px var(--sans);letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .walk{display:inline-block;min-height:var(--tap);padding:11px 0;line-height:22px;background:none;border:0;font:600 16px var(--sans);color:var(--navy);cursor:pointer;text-decoration:none;text-align:left}' +
  '#apRoad4 .apg .walk .u{border-bottom:1px solid var(--bronze);padding-bottom:1px}' +
  '#apRoad4 .apg .walk .ar{color:var(--bronze-ink)}' +
  '#apRoad4 .apg .walks{display:flex;flex-wrap:wrap;gap:0 22px;margin-top:6px}' +
  '#apRoad4 .apg .rev{display:inline-flex;align-items:center;gap:4px;min-height:var(--tap);padding:0;background:none;border:0;font:400 14px var(--sans);color:var(--quiet);cursor:pointer}' +
  '#apRoad4 .apg .rev span{border-bottom:1px solid var(--edge)}' +
  '#apRoad4 .apg .revs{display:flex;flex-direction:column;align-items:flex-start;margin-top:4px}' +
  '#apRoad4 .apg .revs .more{align-self:stretch}' +
  '#apRoad4 .apg .more{display:none;padding-bottom:6px}' +
  '#apRoad4 .apg .more.open{display:block}' +
  '#apRoad4 .apg .btn{display:block;width:100%;min-height:48px;margin-top:14px;border:0;border-radius:6px;background:var(--btn);color:var(--btn-fg);font:600 16px var(--sans);cursor:pointer}' +
  '#apRoad4 .apg .btn.line{background:none;border:1px solid var(--navy);color:var(--navy);width:auto;padding:0 22px;display:inline-block;min-height:var(--tap)}' +
  '#apRoad4 .apg .btn[disabled]{opacity:.6;cursor:default}' +
  '#apRoad4 .apg .kept{margin-top:10px;font-size:16px;color:var(--quiet)}' +
  '#apRoad4 .apg .kept b{color:var(--navy);font-weight:600}' +
  '#apRoad4 .apg .verse{font:italic 400 18px/1.5 var(--serif);color:var(--navy);margin-bottom:12px}' +
  '#apRoad4 .apg .verse span{display:block;margin-top:2px;font:600 12px var(--sans);font-style:normal;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .ruled{margin-top:12px;padding:2px 0 2px 14px;border-left:3px solid var(--bronze)}' +
  '#apRoad4 .apg .ruled p.lk{margin-bottom:2px}' +
  '#apRoad4 .apg .ruled p{font-size:16px}' +
  '#apRoad4 .apg .ruled p.serif{font:400 18px/1.45 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .q{margin:10px 0 0;padding:0 0 0 14px;border-left:3px solid var(--bronze);font:italic 400 18px/1.5 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .qm{display:inline-flex;align-items:center;min-height:var(--tap);margin:0 0 0 17px;font:600 14px var(--sans);color:var(--bronze-ink);text-decoration:none}' +
  '#apRoad4 .apg .qm span{border-bottom:1px solid var(--bronze)}' +
  '#apRoad4 .apg .part{margin-top:18px;padding-top:14px;border-top:1px solid var(--rule)}' +
  '#apRoad4 .apg .pts{margin:6px 0 0;padding-left:20px;font-size:16px}' +
  '#apRoad4 .apg .pts li{margin-top:6px}' +
  '#apRoad4 .apg .choices{display:grid;gap:8px;margin-top:12px}' +
  '#apRoad4 .apg .choices.two{grid-template-columns:1fr 1fr}' +
  '#apRoad4 .apg .choice{min-height:var(--tap);padding:10px 12px;border:1px solid var(--edge);border-radius:6px;background:var(--card);font-size:16px;color:var(--ink);cursor:pointer;text-align:center;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap}' +
  '#apRoad4 .apg .choice.left{justify-content:flex-start;text-align:left}' +
  '#apRoad4 .apg .choice[aria-pressed="true"]{border:2px solid var(--bronze-ink);background:var(--sand);color:var(--navy);font-weight:600}' +
  '#apRoad4 .apg .choice[aria-pressed="true"]:before{content:"\\2713";color:var(--bronze-ink)}' +
  '#apRoad4 .apg textarea,#apRoad4 .apg input[type=text],#apRoad4 .apg input[type=search],#apRoad4 .apg input[type=tel],#apRoad4 .apg input[type=email]{display:block;width:100%;margin-top:10px;padding:12px;border:1px solid var(--edge);border-radius:6px;background:var(--paper);font:16px/1.5 var(--sans);color:var(--ink)}' +
  '#apRoad4 .apg textarea{min-height:84px;resize:vertical}' +
  '#apRoad4 .apg textarea::placeholder,#apRoad4 .apg input::placeholder{color:var(--quiet);opacity:1}' +
  '#apRoad4 .apg .findrow{display:flex;gap:10px;align-items:stretch}' +
  '#apRoad4 .apg .findrow .find{flex:1}' +
  '#apRoad4 .apg .find{position:relative;display:flex;align-items:center;border:1px solid var(--edge);border-radius:6px;background:var(--paper)}' +
  '#apRoad4 .apg .find input{border:0;background:none;flex:1 1 auto;min-width:0;padding-left:38px;margin-top:0}' +
  '#apRoad4 .apg .find input:focus{outline:none}' +
  '#apRoad4 .apg .find:focus-within{outline:2px solid var(--bronze);outline-offset:1px}' +
  '#apRoad4 .apg .find svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:16px;height:16px;fill:none;stroke:var(--quiet);stroke-width:2}' +
  '#apRoad4 .apg .find .fchip{flex:none;min-height:var(--tap);margin:0 4px 0 0;padding:0 12px;border:1px solid var(--edge);border-radius:6px;background:var(--card);font:600 14px var(--sans);color:var(--navy);cursor:pointer;white-space:nowrap}' +
  '#apRoad4 .apg .find .fchip[aria-pressed="true"]{border:2px solid var(--bronze-ink);background:var(--sand)}' +
  '#apRoad4 .apg .find .fchip[aria-pressed="true"]:before{content:"\\2713\\00a0";color:var(--bronze-ink)}' +
  '#apRoad4 .apg a.btn.line{display:inline-flex}' +
  '#apRoad4 .apg a.btn{display:flex;align-items:center;justify-content:center;text-decoration:none}' +
  '#apRoad4 .apg .rows{margin-top:4px}' +
  '#apRoad4 .apg .prow{display:grid;grid-template-columns:1fr;gap:4px 18px;align-items:center;width:100%;margin:0;padding:24px 0 26px;border:0;border-top:1px solid var(--rule);background:none;text-align:left;cursor:pointer;color:inherit;font:inherit}' +
  '#apRoad4 .apg .rows .prow:first-child{border-top:0;padding-top:0}' +
  '#apRoad4 .apg .ap-panel-body>.rows:first-child{margin-top:8px}' +
  '#apRoad4 .apg .ap-panel-body>.rows:last-child .prow:last-child{padding-bottom:10px}' +
  '#apRoad4 .apg .prow .lab{grid-column:1;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .prow .nm{grid-column:1;font:400 20px/1.35 var(--serif);color:var(--navy);max-width:62ch}' +
  '#apRoad4 .apg .prow .st{grid-column:1;font-size:14px;color:var(--quiet)}' +
  '#apRoad4 .apg .prow .go{grid-column:1;margin-top:6px;font:600 16px var(--sans);color:var(--navy);white-space:nowrap}' +
  '#apRoad4 .apg .prow .go span{border-bottom:1px solid var(--bronze)}' +
  '#apRoad4 .apg .st .nw{white-space:nowrap}' +
  '#apRoad4 .apg .st .nv{white-space:normal}' +
  '#apRoad4 .apg .mark{display:grid;gap:2px;padding:16px 0;border-top:1px solid var(--rule)}' +
  '#apRoad4 .apg .mark:first-of-type{border-top:0;padding-top:4px}' +
  '#apRoad4 .apg .mark .lab{font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .mark p{font:400 18px/1.45 var(--serif);color:var(--ink);max-width:62ch}' +
  '#apRoad4 .apg .lane{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:10px 0;border-top:1px solid var(--rule)}' +
  '#apRoad4 .apg .lane:first-child{border-top:0}' +
  '#apRoad4 .apg .lane b{display:block;font:600 14px var(--sans);color:var(--navy)}' +
  '#apRoad4 .apg .lane span{display:block;font-size:14px;color:var(--quiet)}' +
  '#apRoad4 .apg .lane .rev{min-height:var(--tap);font-size:14px;flex:none}' +
  '#apRoad4 .apg .lane .rev[aria-pressed="true"] span{border-bottom-color:var(--bronze-ink);color:var(--navy)}' +
  '#apRoad4 .apg .vl{list-style:none;margin:2px 0 10px;padding:0}' +
  '#apRoad4 .apg .vl li{padding:9px 0;border-top:1px solid var(--rule);font-size:16px;line-height:1.4;color:var(--ink)}' +
  '#apRoad4 .apg .vl li:first-child{border-top:0}' +
  '#apRoad4 .apg .vl li span{display:block;font-size:14px;color:var(--quiet)}' +
  '#apRoad4 .apg .vlanes .rev{min-height:var(--tap)}' +
  '#apRoad4 .apg .sheet{position:fixed;left:0;right:0;top:0;bottom:0;z-index:100000;display:flex;flex-direction:column;background:var(--paper);color:var(--ink);transform:translateY(100%);transition:transform .38s var(--ease);visibility:hidden;font:400 16px/1.5 var(--sans)}' +
  '#apRoad4 .apg .sheet.open{transform:none;visibility:visible}' +
  '#apRoad4 .apg .sheet:focus{outline:none}' +
  '#apRoad4 .apg .dimmer{display:none}' +
  '#apRoad4 .apg .ohead{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;border-bottom:1px solid var(--rule)}' +
  '#apRoad4 .apg .ohead .lk{font-size:12px}' +
  '#apRoad4 .apg .obody{flex:1;overflow-y:auto;padding:16px 20px 28px}' +
  '#apRoad4 .apg .toast{position:fixed;left:16px;right:16px;bottom:18px;z-index:100001;background:var(--navy);color:var(--paper);border-radius:6px;padding:12px 14px;font-size:14px;opacity:0;transform:translateY(10px);transition:opacity .3s var(--ease),transform .3s var(--ease);pointer-events:none}' +
  '#apRoad4 .apg .toast.in{opacity:1;transform:none}' +
  '#apRoad4 .apg .gate{max-width:560px;margin:0 auto;padding:40px 18px 64px}' +
  '#apRoad4 .apg .gate h2{font:400 28px/1.2 var(--serif);color:var(--navy);margin:0 0 12px}' +
  '#apRoad4 .apg .gate .err{color:#9A3B2F;font-size:15px;margin-top:8px}' +
  '#apRoad4 .apg .gate label{display:block;font-weight:600;margin:14px 0 4px}' +
  '#apRoad4 .apg .gate .btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:6px}' +
  '#apRoad4 .apg .gate .btn{width:auto;padding:0 22px}' +
  '#apRoad4 .apg .gate .btn.q2{background:none;color:var(--quiet);font-weight:400}' +
  '#apRoad4 .apg .flash{padding:24px 18px;font-size:16px}' +
  '#apRoad4 .apg .pfoot{margin:10px 0 36px;padding:0 4px;font-size:13px;line-height:1.5;color:var(--quiet)}' +
  '@media (hover:hover){' +
  '#apRoad4 .apg .prow:hover{background:var(--hover);box-shadow:0 0 0 0 transparent,-12px 0 0 var(--hover),12px 0 0 var(--hover)}' +
  '#apRoad4 .apg .mi:not(.here):not([aria-current="page"]):hover{background:var(--hover)}' +
  '#apRoad4 .apg .walk:hover .u{border-bottom-color:var(--navy)}' +
  '#apRoad4 .apg .choice:hover{border-color:var(--bronze)}' +
  '#apRoad4 .apg .tab:hover{color:var(--navy)}' +
  '}' +
  '@media (min-width:900px){' +
  '#apRoad4 .apg .topbar,#apRoad4 .apg .tabs{display:none}' +
  '#apRoad4 .apg .hero{padding:26px max(28px,calc((100% - 1180px)/2 + 28px)) 24px;min-height:136px}' +
  '#apRoad4 .apg .hero .hk{display:block;margin-bottom:10px}' +
  '#apRoad4 .apg .hero h1{font-size:34px}' +
  '#apRoad4 .apg .hero .where{font-size:18px;max-width:780px}' +
  '#apRoad4 .apg .pcwrap{display:grid;grid-template-columns:220px minmax(0,1fr);gap:32px;max-width:1180px;margin:0 auto;padding:28px 28px 56px;align-items:start;--g:28px}' +
  '#apRoad4 .apg .pcnav{display:block;position:sticky;top:calc(var(--bar) + 20px)}' +
  '#apRoad4 .apg .view{padding:0}' +
  '#apRoad4 .apg .cols2{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:24px;align-items:start}' +
  '#apRoad4 .apg .side{margin-top:0}' +
  '#apRoad4 .apg .prow{grid-template-columns:minmax(0,1fr) auto;padding:30px 0 32px}' +
  '#apRoad4 .apg .prow .go{grid-column:2;grid-row:1/4;margin-top:0}' +
  '#apRoad4 .apg .sheet{top:70px;bottom:auto;left:50%;right:auto;width:680px;margin-left:-340px;max-height:calc(100% - 100px);max-height:calc(100vh - 100px);border-radius:8px;box-shadow:0 24px 60px rgba(16,21,31,.35);transform:translateY(16px);opacity:0}' +
  '#apRoad4 .apg .sheet.open{transform:none;opacity:1}' +
  '#apRoad4 .apg .toast{left:50%;right:auto;width:460px;margin-left:-230px;bottom:28px}' +
  '#apRoad4 .apg .dimmer.on{display:block;position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999;background:rgba(16,21,31,.42)}' +
  '}' +
  '@media (max-width:599px){' +
  '#apRoad4 .apg .choices.three{grid-template-columns:1fr}' +
  '}' +
  '@media (min-width:900px){.apg.ap-home .ap-panel-title{font-size:26px !important}}' +
  '/* the 8.10 parts: Walking With You, Coming Weeks, The Path Ahead, the guidepost page, the witness line in the band */' +
  '#apRoad4 .apg .story{font:400 18px/1.6 var(--serif);color:var(--ink);margin-top:10px}' +
  '#apRoad4 .apg .wrow{display:grid;grid-template-columns:28px minmax(0,1fr);gap:12px;padding:14px 0;border-top:1px solid var(--rule);align-items:start}' +
  '#apRoad4 .apg .wrow:first-child{border-top:0;padding-top:4px}' +
  '#apRoad4 .apg .ring{width:24px;height:24px;border-radius:50%;border:2px solid var(--edge);margin-top:2px}' +
  '#apRoad4 .apg .ring.done{background:var(--bronze);border-color:var(--bronze)}' +
  '#apRoad4 .apg .wrow .lab{display:block;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .wrow .nm{display:block;font:400 18px/1.35 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .wrow small{display:block;font-size:14px;color:var(--quiet)}' +
  '#apRoad4 .apg .person{display:flex;align-items:center;gap:12px}' +
  '#apRoad4 .apg .sroad .wrow:first-child{padding-top:8px}' +
  '#apRoad4 .apg .gpl{margin-top:4px}' +
  '#apRoad4 .apg .gprow{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 14px;align-items:center;width:100%;min-height:var(--tap);padding:12px 0;border:0;border-top:1px solid var(--rule);background:none;text-align:left;cursor:pointer;color:inherit;font:inherit}' +
  '#apRoad4 .apg .gprow:first-child{border-top:0}' +
  '#apRoad4 .apg .gprow .gpn{font:400 18px/1.3 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .gprow .gpn i{font:italic 400 14px var(--serif);color:var(--bronze-ink);margin-left:8px}' +
  '#apRoad4 .apg .gprow .gps{grid-column:1;font-size:14px;color:var(--quiet)}' +
  '#apRoad4 .apg .gprow .ar{grid-column:2;grid-row:1/3;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .gprow.now{background:var(--sand);box-shadow:-12px 0 0 var(--sand),12px 0 0 var(--sand)}' +
  '#apRoad4 .apg .srows p{margin:12px 0 0;font-size:16px;line-height:1.45;max-width:62ch}' +
  '#apRoad4 .apg .srows .rm{display:block;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .since{display:flex;flex-wrap:wrap;align-items:center;gap:0 18px;padding:4px 16px;background:var(--sand);border-bottom:1px solid var(--rule);font-size:15px;color:var(--ink)}' +
  '#apRoad4 .apg .since p{padding:10px 0}' +
  '#apRoad4 .apg .ckq{display:block;margin-top:6px;font:400 24px/1.25 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .paper{background:#FFFDF8;color:#2B3040;border:1px solid var(--rule);border-radius:4px;padding:22px;font:400 17px/1.6 var(--serif);box-shadow:0 1px 4px rgba(0,0,0,.06)}' +
  '#apRoad4 .apg .paper p+p{margin-top:12px}' +
  '#apRoad4 .apg .paper .sig{font-style:italic;color:#5E6573}' +
  '#apRoad4 .apg .stone .story{margin-top:4px}' +
  '#apRoad4 .apg .vlead{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 24px;padding:14px 16px 2px}' +
  '#apRoad4 .apg .vlead p{flex:1 1 380px;max-width:66ch;font:italic 400 18px/1.5 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .seg{display:flex;gap:8px}' +
  '#apRoad4 .apg .seg .choice{min-width:100px}' +
  '#apRoad4 .apg .srows .help{display:block;margin-top:2px}' +
  '#apRoad4 .apg .nx{padding:18px 0;border-top:1px solid var(--rule)}' +
  '#apRoad4 .apg .nx:first-child{border-top:0;padding-top:4px}' +
  '#apRoad4 .apg .nxn{font:400 20px/1.3 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .vref{display:block;margin-top:4px;font:600 13px/1.4 var(--sans);font-style:normal;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .bwit{display:flex;flex-wrap:wrap;align-items:center;gap:0 18px;margin-top:12px;padding-top:6px;border-top:1px solid var(--band-line)}' +
  '#apRoad4 .apg .bwit p{padding:6px 0;font:400 15px/1.45 var(--sans);color:var(--band-quiet)}' +
  '#apRoad4 .apg .bwit b{color:var(--band-fg);font-weight:600}' +
  '#apRoad4 .apg .bwit .walks{margin-top:0;gap:0 18px}' +
  '#apRoad4 .apg .bwit .walk{color:var(--band-fg)}' +
  '#apRoad4 .apg .bwit .walk .u{border-bottom-color:var(--band-k)}' +
  '#apRoad4 .apg .bwit .walk .ar{color:var(--band-k)}' +
  '#apRoad4 .apg .t.sm{font-size:18px}' +
  '#apRoad4 .apg .habit{margin-top:10px;padding:2px 0 2px 14px;border-left:3px solid var(--bronze);font:400 18px/1.45 var(--serif);color:var(--navy);max-width:62ch}' +
  '#apRoad4 .apg .choices.roles{grid-template-columns:repeat(auto-fill,minmax(110px,1fr))}' +
  '#apRoad4 .apg .lt{margin-top:14px}' +
  '#apRoad4 .apg .gpnow{margin-top:14px;padding-top:12px;border-top:1px solid var(--rule)}' +
  '#apRoad4 .apg .gpnow .t{margin-top:2px}' +
  '#apRoad4 .apg .crows{margin-top:14px}' +
  '#apRoad4 .apg .crow{padding:16px 0;border-top:1px solid var(--rule)}' +
  '#apRoad4 .apg .nx1 .nx{padding-top:4px}' +
  '#apRoad4 .apg .ahead{margin-top:8px}' +
  '#apRoad4 .apg .pa{list-style:none;margin:8px 0 0;padding:0;display:grid}' +
  '#apRoad4 .apg .pa li{position:relative;min-width:0}' +
  '#apRoad4 .apg .pa li:not(:last-child):before{content:"";position:absolute;left:15px;top:36px;bottom:-6px;border-left:2px solid var(--rule)}' +
  '#apRoad4 .apg .pas{position:relative;display:grid;grid-template-columns:32px minmax(0,1fr);column-gap:12px;align-items:start;width:100%;min-height:var(--tap);padding:8px 0;border:0;border-radius:6px;background:none;text-align:left;cursor:pointer;color:inherit;font:inherit}' +
  '#apRoad4 .apg .pad{grid-row:1/3;width:24px;height:24px;margin:2px 4px;border-radius:50%;border:2px solid var(--edge);background:var(--card);position:relative;z-index:1}' +
  '#apRoad4 .apg .pas.now .pad{background:var(--bronze);border-color:var(--bronze)}' +
  '#apRoad4 .apg .pas.done .pad{background:var(--sand);border-color:var(--bronze-ink)}' +
  '#apRoad4 .apg .pas.done .pad:after{content:"✓";position:absolute;inset:0;display:grid;place-items:center;font:600 13px/1 var(--sans);color:var(--bronze-ink)}' +
  '#apRoad4 .apg .pal{font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .pan{font:400 18px/1.3 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .pas[aria-pressed="true"] .pan{text-decoration:underline;text-decoration-color:var(--bronze);text-decoration-thickness:2px;text-underline-offset:5px}' +
  '#apRoad4 .apg .pas[aria-pressed="true"] .pad{box-shadow:0 0 0 3px var(--card),0 0 0 5px var(--bronze-ink)}' +
  '#apRoad4 .apg .pdet{margin-top:12px;padding-top:14px;border-top:1px solid var(--rule);max-width:62ch}' +
  '#apRoad4 .apg .pdet:focus{outline:none}' +
  '#apRoad4 .apg .cms{margin-top:0}' +
  '#apRoad4 .apg .cms .cmr:first-child{border-top:0;padding-top:4px}' +
  '#apRoad4 .apg .cmr .lab{display:block;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .cmr .nxn{margin-top:2px}' +
  '#apRoad4 .apg .cqq{margin-top:6px;font:400 18px/1.45 var(--serif);color:var(--navy);max-width:62ch}' +
  '#apRoad4 .apg .klines{display:grid;gap:8px;margin-top:10px}' +
  '#apRoad4 .apg .kline{display:block;width:100%;min-height:var(--tap);padding:10px 14px;border:1px dashed var(--edge);border-radius:6px;background:var(--card);text-align:left;font:400 17px/1.45 var(--serif);color:var(--ink);cursor:pointer}' +
  '#apRoad4 .apg .kline:hover{border-color:var(--bronze);border-style:solid}' +
  '#apRoad4 .apg .pts3{display:grid;margin-top:8px}' +
  '#apRoad4 .apg .pt{padding:12px 0;border-top:1px solid var(--rule)}' +
  '#apRoad4 .apg .pt:first-child{border-top:0;padding-top:4px}' +
  '#apRoad4 .apg .pt .lab{font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +
  '#apRoad4 .apg .ptv{margin-top:2px;font:400 20px/1.35 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .lkq{text-transform:none;letter-spacing:0;font:italic 400 14px var(--serif);color:var(--quiet)}' +
  '#apRoad4 .apg .mark .cq{font:italic 400 17px/1.45 var(--serif);color:var(--navy)}' +
  '#apRoad4 .apg .mark .klm{display:flex;flex-wrap:wrap;gap:2px 16px;margin-top:4px;font:400 14px/1.45 var(--sans);color:var(--quiet)}' +
  '#apRoad4 .apg .klm b{color:var(--ink);font-weight:600}' +
  '#apRoad4 .apg .mark .lab i{font:italic 400 14px var(--serif);text-transform:none;letter-spacing:0;color:var(--quiet);margin-left:6px}' +
  '#apRoad4 .apg .mark small{font-size:14px;color:var(--quiet)}' +
  '#apRoad4 .apg p.cqq,#apRoad4 .apg p.ptv{color:#1F2A44 !important;font-family:\'Source Serif 4\', Georgia, \'Times New Roman\', serif !important}' +
  '#apRoad4 .apg p.klm{color:#5E6573 !important;font-family:\'Source Sans 3\', \'Segoe UI\', Arial, sans-serif !important}' +
  '@media (min-width:600px){#apRoad4 .apg .choices.three{grid-template-columns:1fr 1fr 1fr}}' +
  '@media (min-width:900px){#apRoad4 .apg .pt{display:grid;grid-template-columns:110px minmax(0,1fr) auto;gap:0 18px;align-items:baseline}#apRoad4 .apg .pt .walks{justify-content:flex-end}}' +
  '#apRoad4 .apg .pav{box-shadow:0 0 0 1px var(--edge);width:44px;height:44px;border-radius:50%;background:var(--band);color:#F3EDE3;display:grid;place-items:center;font:400 20px var(--serif)}' +
  '#apRoad4 .apg #apgTop{display:contents}' +
  '#apRoad4 .apg.ap-home{max-width:none;margin:0;padding:0}' +
  '#apRoad4 .apg .since .walk{min-height:var(--tap)}' +
  '#apRoad4 .apg p.lk{color:#77592E !important;font-family:\'Source Sans 3\', \'Segoe UI\', Arial, sans-serif !important}' +
  '#apRoad4 .apg .bwit p{color:#D8D0C4 !important;font-family:\'Source Sans 3\', \'Segoe UI\', Arial, sans-serif !important}' +
  '#apRoad4 .apg p.where{color:#D8D0C4 !important;font-family:\'Source Serif 4\', Georgia, \'Times New Roman\', serif !important}' +
  '#apRoad4 .apg h1{color:#F3EDE3 !important;font-family:\'Source Serif 4\', Georgia, \'Times New Roman\', serif !important}' +
  '#apRoad4 .apg p.t,#apRoad4 .apg p.verse,#apRoad4 .apg p.nxn,#apRoad4 .apg p.ckq,#apRoad4 .apg p.t.sm,#apRoad4 .apg p.habit,#apRoad4 .apg p.serif,#apRoad4 .apg .vlead p{color:#1F2A44 !important;font-family:\'Source Serif 4\', Georgia, \'Times New Roman\', serif !important}' +
  '#apRoad4 .apg p.mlab,#apRoad4 .apg p.help,#apRoad4 .apg p.pfoot,#apRoad4 .apg p.ap-ccard-sub,#apRoad4 .apg p.kept{color:#5E6573 !important;font-family:\'Source Sans 3\', \'Segoe UI\', Arial, sans-serif !important}' +
  '#apRoad4 .apg p.sig{color:#5E6573 !important;font-family:\'Source Serif 4\', Georgia, \'Times New Roman\', serif !important}' +
  '@media (hover:hover){#apRoad4 .apg .gprow:hover{background:var(--hover)}#apRoad4 .apg .pas:hover .pan{color:var(--bronze-ink)}}' +
  '@media (max-width:420px){#apRoad4 .apg.ap-home .ap-panel-title{font-size:20px !important}}' +
  '@media (min-width:900px){#apRoad4 .apg .since{padding:4px max(28px,calc((100% - 1180px)/2 + 28px))}#apRoad4 .apg .vlead{padding:22px max(28px,calc((100% - 1180px)/2 + 28px)) 0}#apRoad4 .apg .bwit p{font-size:16px}#apRoad4 .apg .pa{grid-template-columns:repeat(var(--n),minmax(0,1fr));margin-top:12px}#apRoad4 .apg .pas{grid-template-columns:1fr;justify-items:start;row-gap:4px;padding:0 10px 6px 0}#apRoad4 .apg .pad{grid-row:auto;margin:0 0 6px}#apRoad4 .apg .pa li:not(:last-child):before{left:24px;right:0;top:12px;bottom:auto;border-left:0;border-top:2px solid var(--rule)}#apRoad4 .apg .pan{font-size:17px}#apRoad4 .apg .hero{padding-left:var(--hero-pad,28px);padding-right:var(--hero-pad,28px)}}' +
  '@media (prefers-reduced-motion:reduce){.apg.ap-home *,.apg.ap-home *:before,.apg.ap-home *:after{transition:none !important;animation:none !important;scroll-behavior:auto !important}}';
  
  var data = null, me = null;
  var reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function nb(s) { return String(s || "").replace(/ (\S+)$/, " $1"); }
  function smart(s) { return String(s || "").replace(/(\w)'(\w)/g, "$1’$2").replace(/'/g, "’"); }
  function lc1(s) { s = String(s || ""); return s.charAt(0).toLowerCase() + s.slice(1); }
  /* Title Case for a label the server hands over (house rule: every heading a man reads) */
  var SMALLW = { a: 1, an: 1, and: 1, as: 1, at: 1, but: 1, by: 1, for: 1, from: 1, in: 1, into: 1, nor: 1, of: 1, on: 1, or: 1, the: 1, to: 1, up: 1, with: 1 };
  function tc(s) { return String(s || "").replace(/[A-Za-z’']+/g, function (w, i, all) { var l = w.toLowerCase(); return i > 0 && SMALLW[l] && !/[:·]\s*$/.test(all.slice(0, i)) ? l : w.charAt(0).toUpperCase() + w.slice(1); }); }
  function uc1(s) { s = String(s || ""); return s.charAt(0).toUpperCase() + s.slice(1); }
  function $(sel, root) { return (root || host).querySelector(sel); }
  function $$(sel, root) { return [].slice.call((root || host).querySelectorAll(sel)); }

  /* the stylesheet goes in once, just before the section (AP-SHIP 1: the page counts what the browser accepted against RULES) */
  (function () {
    if (document.getElementById("apHisRoadStyle")) return;
    var st = document.createElement("style"); st.id = "apHisRoadStyle"; st.setAttribute("data-ap-sheet", "hisroad");
    st.textContent = [
      ".ap-home .av{--paper:#FBF9F5;--sand:#F3EDE3;--card:#FFFFFF;--navy:#1F2A44;--ink:#2B3040;--quiet:#5E6573;--rule:#E2DCD1;--bronze:#B8945F;--bronze-ink:#8A6A3B;--glow:#E9C98F;--mark:#7F8692;--serif:'Source Serif 4',Georgia,serif;--sans:'Source Sans 3','Segoe UI',Arial,sans-serif;--r1:6px;--r2:10px;--r3:14px;--tap:44px;--ease:cubic-bezier(.2,.7,.2,1);display:block;color:var(--ink) !important;font:400 16px/1.5 var(--sans) !important;text-align:left}",
      ".ap-home .av *,.ap-home .av *:before,.ap-home .av *:after{box-sizing:border-box}",
      ".ap-home .av p{margin:0;text-wrap:pretty}",
      ".ap-home .av button{appearance:none;-webkit-appearance:none;background:none;border:0;margin:0;padding:0;text-transform:none;letter-spacing:normal;box-shadow:none;cursor:pointer;text-align:left;border-radius:0;line-height:1.3}",
      ".ap-home .av a{color:inherit !important}",
      ".ap-home .av .av-main{position:relative}",
      ".ap-home .av .av-main[inert]{pointer-events:none}",
      ".ap-home .av .av-view{max-width:720px;padding:16px 0 40px}",
      ".ap-home .av .av-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",
      ".ap-home .av :focus-visible{outline:3px solid var(--bronze);outline-offset:2px;border-radius:4px}",
      ".ap-home .av .av-vlead{font:italic 400 16.5px/1.4 var(--serif) !important;color:var(--quiet) !important;padding:0 2px 12px}",
      ".ap-home .av .av-vlead .av-ref{font:600 12.5px/1.3 var(--sans) !important;font-style:normal;color:var(--bronze-ink) !important;white-space:nowrap;margin-left:2px}",
      ".ap-home .av .av-last{font-size:15px;color:var(--quiet) !important;padding:2px 2px 12px}",
      ".ap-home .av .av-last b{color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-card{background:var(--card);border:1px solid var(--rule);border-radius:var(--r2);padding:16px;margin-top:12px}",
      ".ap-home .av .av-card.av-first{margin-top:0;border-top:3px solid var(--bronze)}",
      ".ap-home .av .av-lk{font:600 11.5px/1.3 var(--sans) !important;letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink) !important}",
      ".ap-home .av .av-t{margin-top:4px;font:400 19px/1.3 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-s{margin-top:6px;font-size:15px}",
      ".ap-home .av .av-help{margin-top:6px;font-size:13.5px;color:var(--quiet) !important}",
      ".ap-home .av .av-walk{display:inline-flex;align-items:center;gap:4px;min-height:var(--tap);padding:0;font:600 15px/1.3 var(--sans) !important;color:var(--navy) !important;text-decoration:none !important}",
      ".ap-home .av .av-walk .av-u{border-bottom:1px solid var(--bronze);padding-bottom:1px}",
      ".ap-home .av .av-walk .av-ar{color:var(--bronze-ink) !important}",
      ".ap-home .av .av-carry{margin-top:10px;border-left:3px solid var(--bronze);background:var(--sand);padding:10px 12px;border-radius:0 var(--r1) var(--r1) 0}",
      ".ap-home .av .av-carry .av-lk{font-size:11px}",
      ".ap-home .av .av-carry p+p{margin-top:2px;font:400 16.5px/1.4 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-try{margin-top:10px;font-size:15px}",
      ".ap-home .av .av-try b{color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-more{overflow:hidden;max-height:0;visibility:hidden;transition:max-height .35s var(--ease)}",
      ".ap-home .av .av-more.av-open{max-height:900px;visibility:visible}",
      ".ap-home .av .av-list{background:var(--card);border:1px solid var(--rule);border-radius:var(--r3);overflow:hidden}",
      ".ap-home .av .av-hd{display:flex;justify-content:space-between;align-items:baseline;padding:14px 16px 6px}",
      ".ap-home .av .av-hd b{font:400 19px/1.3 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-hd span{font-size:13.5px;color:var(--quiet) !important}",
      ".ap-home .av .av-row{display:grid;grid-template-columns:28px 1fr auto;gap:12px;align-items:center;width:100%;min-height:64px;padding:12px 16px;border-top:1px solid var(--rule);text-align:left;color:var(--ink) !important}",
      ".ap-home .av .av-hd+.av-row{border-top:0}",
      ".ap-home .av .av-row.av-still{cursor:default}",
      ".ap-home .av .av-ring{width:24px;height:24px;border-radius:50%;border:2px solid var(--mark);position:relative;transition:background .3s var(--ease),border-color .3s var(--ease)}",
      ".ap-home .av .av-row.av-done .av-ring{background:var(--bronze);border-color:var(--bronze)}",
      ".ap-home .av .av-row.av-done .av-ring:after{content:\"\";position:absolute;left:7px;top:3px;width:6px;height:11px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}",
      ".ap-home .av .av-ly{display:block;font:600 11px/1.3 var(--sans) !important;letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink) !important}",
      ".ap-home .av .av-tt{display:block;font-size:15.5px;color:var(--ink) !important;margin-top:1px}",
      ".ap-home .av .av-row small{display:block;font-size:13px;color:var(--quiet) !important;margin-top:1px}",
      ".ap-home .av .av-row.av-done .av-tt{color:var(--quiet) !important}",
      ".ap-home .av .av-go{font:600 14px/1.3 var(--sans) !important;color:var(--navy) !important;border-bottom:1px solid var(--bronze);white-space:nowrap}",
      ".ap-home .av .av-row.av-done .av-go{border-bottom:0;color:var(--quiet) !important;font-weight:400}",
      ".ap-home .av .av-row.av-pop .av-ring{animation:av-pop .5s var(--ease)}",
      "@keyframes av-pop{0%{transform:scale(1)}40%{transform:scale(1.25)}100%{transform:scale(1)}}",
      ".ap-home .av .av-letterc{background:#FFFDF8;border:1px solid var(--rule);border-left:4px solid var(--bronze);border-radius:var(--r2);padding:16px;margin-bottom:12px}",
      ".ap-home .av .av-ceremony{background:var(--navy);color:#F3EDE3 !important;border-radius:var(--r3);padding:20px;margin-bottom:12px}",
      ".ap-home .av .av-ceremony .av-lk{color:#D9B97F !important}",
      ".ap-home .av .av-ceremony .av-t{color:#F3EDE3 !important;font-size:22px}",
      ".ap-home .av .av-ceremony .av-s{color:#D8D0C4 !important}",
      ".ap-home .av .av-ceremony .av-walk{color:#F3EDE3 !important}",
      ".ap-home .av .av-answer textarea{display:block;width:100%;min-height:96px;margin-top:10px;padding:12px;border:1px solid var(--rule);border-radius:var(--r1);background:var(--paper);font:16px/1.5 var(--sans) !important;color:var(--ink) !important;resize:vertical}",
      ".ap-home .av .av-btn{display:block;width:100%;min-height:48px;margin-top:12px;border-radius:8px;background:var(--navy);color:var(--paper) !important;font:600 15.5px/1.3 var(--sans) !important;text-align:center}",
      ".ap-home .av .av-btn[disabled]{opacity:.55;cursor:default}",
      ".ap-home .av .av-kept{margin-top:8px;font-size:14px;color:var(--quiet) !important;min-height:20px}",
      ".ap-home .av .av-kept b{color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-choices{display:grid;gap:8px;margin-top:12px}",
      ".ap-home .av .av-choices.av-two{grid-template-columns:1fr 1fr}",
      ".ap-home .av .av-choices.av-three{grid-template-columns:1fr 1fr 1fr}",
      ".ap-home .av .av-choice{min-height:var(--tap);padding:10px 12px;border:1px solid var(--rule);border-radius:8px;background:var(--card);font-size:15px;color:var(--ink) !important;text-align:left;display:flex;align-items:center;justify-content:flex-start;gap:6px}",
      ".ap-home .av .av-choice.av-left{justify-content:flex-start;text-align:left}",
      ".ap-home .av .av-choice[aria-pressed=\"true\"],.ap-home .av .av-choice[aria-checked=\"true\"]{border:2px solid var(--bronze);background:var(--sand);color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-choice[aria-pressed=\"true\"]:before,.ap-home .av .av-choice[aria-checked=\"true\"]:before{content:\"\\2713\";color:var(--bronze-ink) !important}",
      ".ap-home .av .av-choice svg{width:16px;height:16px;flex:none;fill:currentColor}",
      ".ap-home .av .av-words{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}",
      ".ap-home .av .av-word{min-height:var(--tap);padding:6px 14px;border:1px solid var(--rule);border-radius:999px;background:var(--card);font-size:14.5px;color:var(--ink) !important}",
      ".ap-home .av .av-word[aria-pressed=\"true\"]{border:2px solid var(--bronze);background:var(--sand);color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-ov{position:fixed;inset:0;background:var(--paper);z-index:2147483000;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .38s var(--ease);visibility:hidden;overscroll-behavior:contain}",
      ".ap-home .av .av-ov.av-open{transform:none;visibility:visible}",
      ".ap-home .av .av-scrim{position:fixed;inset:0;background:rgba(16,21,31,.45);z-index:2147482999;opacity:0;visibility:hidden;transition:opacity .3s var(--ease)}",
      ".ap-home .av .av-scrim.av-on{opacity:1;visibility:visible}",
      ".ap-home .av .av-ohead{display:flex;justify-content:space-between;align-items:center;padding:14px 16px 6px 20px}",
      ".ap-home .av .av-close{min-height:var(--tap);min-width:var(--tap);font:600 14px/1.3 var(--sans) !important;color:var(--navy) !important;text-align:center}",
      ".ap-home .av .av-obody{flex:1;overflow-y:auto;padding:4px 20px 24px;overscroll-behavior:contain}",
      ".ap-home .av .av-ofoot{padding:12px 20px 20px;border-top:1px solid var(--rule);background:var(--paper)}",
      ".ap-home .av .av-bar{display:flex;gap:6px}",
      ".ap-home .av .av-bar i{flex:1;height:4px;border-radius:2px;background:var(--rule);transition:background .3s var(--ease)}",
      ".ap-home .av .av-bar i.av-on{background:var(--bronze)}",
      ".ap-home .av .av-q{font:400 25px/1.25 var(--serif) !important;color:var(--navy) !important;margin-top:6px}",
      ".ap-home .av .av-sub{font:600 12px/1.3 var(--sans) !important;letter-spacing:.07em;text-transform:uppercase;color:var(--quiet) !important;margin-top:16px}",
      ".ap-home .av .av-give{background:var(--sand);border-radius:var(--r2);padding:14px;margin-top:12px;opacity:0;transform:translateY(8px);transition:opacity .45s var(--ease),transform .45s var(--ease)}",
      ".ap-home .av .av-give.av-in{opacity:1;transform:none}",
      ".ap-home .av .av-give p+p{margin-top:4px;font-size:15px}",
      ".ap-home .av .av-links{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:4px 24px}",
      ".ap-home .av .av-quote{margin-top:12px;font:400 20px/1.45 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-src{margin-top:8px;font-size:13.5px;color:var(--quiet) !important}",
      ".ap-home .av .av-said{margin-top:10px;padding-top:10px;border-top:1px solid var(--rule)}",
      ".ap-home .av .av-said p+p{margin-top:6px}",
      ".ap-home .av .av-paper{background:#FFFDF8;color:#2B3040 !important;border:1px solid var(--rule);border-radius:4px;padding:22px;margin-top:12px;font:400 17px/1.6 var(--serif) !important;box-shadow:0 1px 4px rgba(0,0,0,.06)}",
      ".ap-home .av .av-paper p+p{margin-top:12px}",
      ".ap-home .av .av-paper .av-sig{font-style:italic;color:#5E6573 !important}",
      ".ap-home .av .av-seg2{display:flex;gap:8px;margin-top:4px}",
      ".ap-home .av .av-seg2 button{min-height:var(--tap);padding:6px 16px;border-radius:999px;border:1px solid var(--rule);background:var(--card);font:600 14px/1.3 var(--sans) !important;color:var(--navy) !important}",
      ".ap-home .av .av-seg2 button[aria-pressed=\"true\"]{border:2px solid var(--bronze);background:var(--sand)}",
      ".ap-home .av .av-room{border-top:3px solid var(--bronze)}",
      ".ap-home .av .av-room .av-t{font-size:17.5px}",
      ".ap-home .av .av-rw{font:600 12px/1.3 var(--sans) !important;color:var(--quiet) !important;margin-top:2px}",
      ".ap-home .av .av-line{margin-top:10px;font-size:15px}",
      ".ap-home .av .av-line.av-mine{font-family:var(--serif) !important;font-style:italic;font-size:16px}",
      ".ap-home .av .av-line.av-new{animation:av-newline 1.6s var(--ease)}",
      "@keyframes av-newline{0%{background:#FFE9BE}100%{background:transparent}}",
      ".ap-home .av .av-line small{display:block;font:400 12.5px/1.4 var(--sans) !important;font-style:normal;color:var(--quiet) !important}",
      ".ap-home .av .av-shelf .av-it{border-top:1px solid var(--rule)}",
      ".ap-home .av .av-shelf .av-it:first-child{border-top:0}",
      ".ap-home .av .av-shelf .av-itb{display:flex;justify-content:space-between;gap:12px;align-items:center;width:100%;min-height:52px;text-align:left;color:var(--ink) !important;font-size:15px}",
      ".ap-home .av .av-shelf em{font-style:normal;font-size:13px;color:var(--quiet) !important;text-align:right}",
      ".ap-home .av .av-slot{padding:0 0 12px}",
      ".ap-home .av .av-slot[hidden]{display:none}",
      ".ap-home .av .av-vol{display:grid;grid-template-columns:110px 1fr;gap:14px;align-items:center;margin-top:10px}",
      ".ap-home .av .av-cover{background:var(--navy);color:#F3EDE3 !important;border-radius:4px;padding:12px 10px;height:140px;display:flex;flex-direction:column;box-shadow:0 2px 6px rgba(0,0,0,.18)}",
      ".ap-home .av .av-cover .av-ck{font:600 8.5px/1.3 var(--sans) !important;letter-spacing:.1em;text-transform:uppercase;color:#D9B97F !important}",
      ".ap-home .av .av-cover .av-ct{margin-top:6px;font:400 15px/1.15 var(--serif) !important}",
      ".ap-home .av .av-cover .av-cv{margin-top:auto;font:italic 400 9px/1.35 var(--serif) !important;color:#E8E0D2 !important}",
      ".ap-home .av .av-course{display:flex;justify-content:space-between;align-items:center;gap:10px;min-height:52px;border-top:1px solid var(--rule)}",
      ".ap-home .av .av-course:first-of-type{border-top:0}",
      ".ap-home .av .av-course b{font:400 16.5px/1.3 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-course span{font-size:14px;color:var(--quiet) !important;text-align:right}",
      ".ap-home .av a.av-course{text-decoration:none !important;color:inherit !important}",
      ".ap-home .av .av-gp{border-top:1px solid var(--rule)}",
      ".ap-home .av .av-gp:first-of-type{border-top:0}",
      ".ap-home .av .av-gp>button{width:100%;min-height:52px;display:flex;justify-content:space-between;align-items:center;padding:6px 0;text-align:left;color:var(--ink) !important}",
      ".ap-home .av .av-gp b{font:400 16px/1.3 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-one{font-size:13.5px;color:var(--quiet) !important}",
      ".ap-home .av .av-gp .av-body{font-size:14.5px;padding:0 0 12px}",
      ".ap-home .av .av-doors{display:flex;flex-wrap:wrap;gap:0 18px;margin-top:12px;padding-top:4px;border-top:1px solid var(--rule)}",
      ".ap-home .av .av-toggle{display:flex;justify-content:space-between;align-items:center;min-height:52px;border-top:1px solid var(--rule);gap:12px}",
      ".ap-home .av .av-toggle:first-of-type{border-top:0}",
      ".ap-home .av .av-sw{width:56px;height:44px;min-height:44px;min-width:56px;position:relative;flex:none;background:none}",
      ".ap-home .av .av-sw:before{content:\"\";position:absolute;left:3px;top:7px;width:50px;height:30px;border-radius:999px;background:var(--rule)}",
      ".ap-home .av .av-sw:after{content:\"\";position:absolute;top:10px;left:6px;width:24px;height:24px;border-radius:50%;background:#fff;transition:transform .2s var(--ease);box-shadow:0 1px 2px rgba(0,0,0,.2)}",
      ".ap-home .av .av-sw[aria-checked=\"true\"]:before{background:var(--bronze)}",
      ".ap-home .av .av-sw[aria-checked=\"true\"]:after{transform:translateX(20px)}",
      ".ap-home .av .av-field{display:flex;flex-direction:column;gap:4px;margin-top:10px;font:600 13px/1.3 var(--sans) !important;color:var(--ink) !important}",
      ".ap-home .av .av-field input{min-height:var(--tap);padding:8px 10px;border:1px solid var(--rule);border-radius:var(--r1);font:16px/1.3 var(--sans) !important;background:var(--card);color:var(--ink) !important}",
      ".ap-home .av .av-toast{position:fixed;left:16px;right:16px;bottom:18px;z-index:2147483200;max-width:440px;margin:0 auto;background:var(--navy);color:var(--paper) !important;border-radius:10px;padding:12px 14px;font-size:14.5px;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .3s var(--ease),transform .3s var(--ease);pointer-events:none}",
      ".ap-home .av .av-toast.av-in{opacity:1;visibility:visible;transform:none}",
      ".ap-home .av .av-verse{margin-top:10px;font:italic 400 17px/1.5 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-verse span{display:block;margin-top:2px;font:600 12.5px/1.3 var(--sans) !important;font-style:normal;color:var(--bronze-ink) !important}",
      ".ap-home .av .av-news{margin-bottom:12px;padding:12px 14px;border-radius:var(--r2);background:var(--sand);font-size:15px}",
      ".ap-home .av .av-news a{font-weight:600;color:var(--navy) !important;margin-left:8px;border-bottom:1px solid var(--bronze);white-space:nowrap}",
      ".ap-home .av .av-ctxt{margin-top:8px;display:flex;flex-direction:column;gap:6px}",
      ".ap-home .av .av-ctxt a{font-weight:600;color:var(--navy) !important;border-bottom:1px solid var(--bronze);align-self:flex-start;min-height:var(--tap);display:inline-flex;align-items:center}",
      ".ap-home .av .av-quo{margin-top:10px;padding-left:12px;border-left:3px solid var(--rule);font:italic 400 16px/1.5 var(--serif) !important}",
      ".ap-home .av .av-quo small{display:block;font:400 12.5px/1.4 var(--sans) !important;font-style:normal;color:var(--quiet) !important}",
      "@media (min-width:900px){.ap-home .av .av-ov{inset:auto;top:50%;left:50%;width:640px;max-width:calc(100vw - 48px);height:auto;max-height:calc(100vh - 64px);border-radius:14px;border:1px solid var(--rule);box-shadow:0 24px 64px rgba(16,21,31,.28);transform:translate(-50%,-46%);opacity:0;transition:transform .3s var(--ease),opacity .25s var(--ease),visibility 0s linear .3s}.ap-home .av .av-ov.av-open{transform:translate(-50%,-50%);opacity:1;transition:transform .3s var(--ease),opacity .25s var(--ease),visibility 0s}.ap-home .av .av-obody{flex:0 1 auto;min-height:0}.ap-home .av .av-ofoot{border-radius:0 0 14px 14px}}",
      ".ap-home .av .av-row:not(.av-still):hover{background:var(--sand)}",
      ".ap-home .av .av-btn:hover{filter:brightness(1.12)}",
      ".ap-home .av .av-walk:hover .av-u{border-bottom-color:var(--bronze-ink);border-bottom-width:2px}",
      ".ap-home .av .av-shelf .av-itb:hover,.ap-home .av .av-gp>button:hover,.ap-home .av .av-course:hover{background:var(--sand)}",
      ".ap-home .av .av-choice:hover{border-color:var(--bronze);background:var(--sand)}",
      ".ap-home .av .av-word:hover{border-color:var(--bronze);background:var(--sand)}",
      ".ap-home .av .av-seg2 button:hover{border-color:var(--bronze);background:var(--sand)}",
      ".ap-home .av .av-close:hover{color:var(--bronze-ink) !important;text-decoration:underline !important}",
      ".ap-home .av .av-news a:hover,.ap-home .av .av-ctxt a:hover{color:var(--bronze-ink) !important;border-bottom-color:var(--bronze-ink)}",
      ".ap-home .av .av-row:focus-visible,.ap-home .av .av-itb:focus-visible,.ap-home .av .av-gp>button:focus-visible{outline-offset:-3px}",
      ".ap-home .ap-band button.ap-tab:hover{color:#FFFFFF !important;background:rgba(255,255,255,.09)}",
      ".ap-home .ap-band button.ap-set:hover{color:#FFFFFF !important;text-decoration:underline !important}",
      "@media (max-width:420px){.ap-home .av .av-choices.av-three{grid-template-columns:1fr}.ap-home .av .av-q{font-size:23px}}",
      "@media (prefers-reduced-motion:reduce){.ap-home .av *,.ap-home .av *:before,.ap-home .av *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}",
      ".ap-home #apBand.ap-slim{position:static !important}",
      ".ap-home #apBand.ap-slim .ap-eyebrow,.ap-home #apBand.ap-slim .ap-hello,.ap-home #apBand.ap-slim .ap-where,.ap-home #apBand.ap-slim .ap-nextrow{display:block !important}",
      ".ap-home #apBand.ap-slim .ap-nm{display:none !important}",
      ".ap-home #apBand .ap-bandw{width:100%}",
      ".ap-home #apBand .ap-tabs{justify-content:flex-start;gap:28px}",
      ".ap-home #apBand button.ap-tab{flex:0 0 auto;position:relative;padding:0;white-space:nowrap;min-width:44px}",
      ".ap-home #apBand button.ap-tab:before{content:\"\";position:absolute;left:-12px;right:-12px;top:0;bottom:0}",
      ".ap-home #apBand .ap-band-in>.apg-row{margin:0 0 14px;padding-top:0;border-top:0;border-bottom:1px solid rgba(243,237,227,.14)}"
    ].join("");
    host.parentNode.insertBefore(st, host);
  })();

  /* ───────────── the page's own pieces, as the page already read them (ap:states, ap:stones, ap:courses) ───────────── */
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  function dparts(iso) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || "")); return m ? { y: +m[1], m: +m[2], d: +m[3] } : null; }
  function wdName(iso) { var p = dparts(iso); return p ? DAYS[new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay()] : ""; }
  function states() { var r = window.apStates; return r && r.length ? r : []; }
  function stateOf(key) { var s = states().filter(function (x) { return x && x.key === key; })[0]; return s && s.status && s.status !== "none" ? s : null; }
  function surfaces() { return window.apSurfaces || {}; }
  function shelf() { return document.getElementById("apShelf"); }
  function cardNode(key) { return document.querySelector('.ap-card[data-story="' + key + '"]'); }
  function cardShown(n) { return !!n && n.style.display !== "none"; }
  function titleOf(n) { var t = n.querySelector(".ap-card-title"); return t ? String(t.textContent || "").trim() : ""; }
  function norm(s) { return String(s || "").toLowerCase().replace(/^\s*write\s+(?:an?\s+|your\s+)?/, "").replace(/^\s*your\s+/, "").replace(/[^a-z0-9]+/g, " ").trim(); }
  function cardFor(name) {
    var n = norm(name); if (!n) return null;
    var keys = Object.keys(surfaces()), i, c, t;
    for (i = 0; i < keys.length; i++) { c = cardNode(keys[i]); if (c && norm(titleOf(c)) === n) return c; }
    for (i = 0; i < keys.length; i++) { c = cardNode(keys[i]); t = c ? norm(titleOf(c)) : ""; if (t.length > 3 && (t.indexOf(n) >= 0 || n.indexOf(t) >= 0)) return c; }
    return null;
  }
  function cardHref(c) { var a = c && c.querySelector(".ap-card-actions a"); return a ? String(a.getAttribute("href") || "") : ""; }
  function firstSentence(s) { s = String(s || "").replace(/\s+/g, " ").trim(); var m = /^[^.?!]*[.?!]/.exec(s); return m ? m[0] : s; }
  function writeName(t) {
    t = String(t || ""); var m = /^write\s+(?:an?|your)\s+(.+)$/i.exec(t);
    if (m) return "Write your " + m[1].toLowerCase();
    return /^write\s/i.test(t) ? t : "Write " + t;
  }
  function numOf(v) { var n = parseInt(v, 10); return isNaN(n) ? 0 : n; }
  /* the course's own card on the page (its link), else the courses door; no course is named here */
  function courseHref(name) {
    var n = norm(name), cards = document.querySelectorAll(".ap-card.ap-course, a.ap-ccard"), i, t, a;
    for (i = 0; i < cards.length; i++) {
      t = cards[i].querySelector(".ap-card-title, .ap-ccard-name"); a = cards[i].tagName === "A" ? cards[i] : cards[i].querySelector("a[href]");
      if (t && a && norm(t.textContent) === n) return a.getAttribute("href") || "";
    }
    return "/courses";
  }

  /* the story work the course has introduced by this week that he has not finished (the Course map's piece column, up to his week); the server's band names it */
  function writeList(d) {
    var b = (d && d.band) || {}, out = [], seen = {};
    if (!window.apStates || !window.apStates.length) return out;
    var W = window.apWeek || {};
    var list = b.writes && b.writes.length ? b.writes : ((!b.course && W.pieces) || []).map(function (p) { return { piece: p.name, address: p.href, unit: p.week }; });
    list.forEach(function (w) {
      var card = cardFor(w.piece), key = card ? card.getAttribute("data-story") : "", st = key ? stateOf(key) : null;
      var title = card ? titleOf(card) : String(w.piece || ""); if (!title || seen[norm(title)]) return; seen[norm(title)] = 1;
      out.push({ title: title, href: w.address || cardHref(card), unit: numOf(w.unit), finished: !!(st && st.status === "finished"), begun: !!st, key: key });
    });
    return out;
  }

  /* ───────────── words lifted from the ruled prototype (Oct 31); nothing here is invented ───────────── */
  var WORDS = ["ashamed", "exposed", "afraid", "angry", "sad", "hurt", "alone", "numb"];
  var MORE_WORDS = ["lonely", "overwhelmed", "guilty", "anxious", "tired", "tender", "relieved", "seen", "hopeful", "grateful", "steady", "free", "glad"];
  var NEED_FB = {
    afraid: "Afraid often asks for safety. Think of one safe person, and let him know where you are this week.",
    ashamed: "Ashamed often asks to be known and still welcomed. Tell one man one true thing this week.",
    exposed: "Exposed often asks for covering. Choose who sees your story, and let it be someone who stays.",
    angry: "Angry often asks for something to be made right. Name what was wrong before you decide what to do.",
    sad: "Sad often asks for comfort. Let someone sit with you instead of fixing it.",
    hurt: "Hurt often asks for care. Say where it hurts to someone who can hear it.",
    alone: "Alone often asks for connection. One call this week is enough to start.",
    numb: "Numb often asks for a gentle way back into your body. Feet on the floor, and breathe out slower than you breathe in."
  };
  var PATHS = [["view", "The view is good", '<path d="M2 16 L8 7 L11 11 L14 6 L18 16 Z"/>'], ["footing", "Good footing", '<rect x="3" y="11" width="14" height="5" rx="1.5"/>'],
    ["steep", "Steep", '<path d="M3 16 L17 4 V16 Z"/>'], ["lost", "Lost the trail", '<circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 8 a2.4 2.4 0 1 1 3 2.3 V12" fill="none" stroke="currentColor" stroke-width="1.8"/>']];
  var PATHWORD = { view: "the view good", footing: "good footing", steep: "the path steep", lost: "that you lost the trail" };
  var GROUPWORD = { view: "the view good", footing: "good footing", steep: "the path steep", lost: "the trail lost" };
  var HOW = { most: "Kept. That’s a pathway forming.", some: "Kept. Some days counts. Pathways take time to form; keep going.", notyet: "Kept. We understand shifting priorities. We’re here to encourage the next right choice toward the healthy pathway you’ve identified. Choose it next." };
  var WHENS = [["morning", "Each morning"], ["pull", "When the pull comes"], ["bed", "Before bed"]];
  /* what each rhythm does, said back to him (it sets how many readings he is handed; reminders themselves are not sent yet) */
  var SHARES = [["path", "The path and the word"], ["piece", "Whether the piece helped"], ["practice", "How your practice went"], ["words", "Your own words"], ["guidepost", "The guidepost"]];
  var LEADS = { week: "Stand where you are, look, and take the next step.", house: "", path: "" };
  var ROOMS = [["did", "", "What You Did"], ["saw", "", "What You Saw"], ["know", "", "What You Know Now"]]; /* the three parts of Your Story; the keys are the server's */
  var TABWORD = { week: "This Week", house: "Your Story", path: "Your Path" };
  var TABWHERE = { house: "The road you’ve walked, in your own words.", path: "Ask for the good way, and walk in it." };
  var DANGER = "Call 911, or call or text 988 to reach the Suicide and Crisis Lifeline.";
  var SAFE = "What you write here goes to our team, and a person reads it within __REVIEW__, before anything else happens with it. It stays with our team, with one exception: if we believe you or someone else is in danger, we will act on that, and we will tell you we are doing it. For men eighteen and older.";
  var WHO_CARRIED_HELP = "Drawn from what the group said together, never from one man’s words.";
  var WITNESS_SENT = "Kept. We’ll send your invitation with what a witness does, and tell you when they say yes. Until then, our team walks with you.";
  var WROLES = [["mentor", "A mentor"], ["coach", "A coach"], ["friend", "A trusted friend"], ["pastor", "A pastor"], ["relative", "A relative"]];
  var PAGES = { stones: "/set-a-stone", story: "/your-story", team: "/begin", profile: "/profile" };
  var OPEN_COURSES = [["Breaking Free", "student-course"], ["Known by Jesus", "i-want-you-to-know-me"], ["Do Hard Things", "do-hard-things"], ["Walk With Me", "walk-with-me"]];

  var WAYMARKS = [{"n":1,"name":"The Watchpost","one":"Notice before you react.","stuck":"We react before we notice. A craving or a trigger shows up and we are already acting on it.","sounds":"Sounds like: “I don’t know what happened. It just happened.”","is_":"The mind has a center (the hub) and a ring of passing urges, feelings and thoughts (the rim). When we live on the rim, whatever comes up runs us. We can learn to stand at the hub and watch it pass.","scripture":"Habakkuk takes his stand at a watchpost and looks out (Habakkuk 2:1). David talks to his own soul instead of obeying it (Psalm 42:5). God tells Cain that sin is crouching at the door, “but you must rule over it” (Genesis 4:7).","applied":"","ask":"Slow it down. What did you feel in your body right before?","helps":"The Five Questions · The Wheel","carry":"Slow it down. What did you feel in your body right before?","try":"The Five Questions: before you react, notice what your body feels, the picture in your mind, the feeling, the thought, and what you want to do."},
    {"n":2,"name":"From the Ground Up","one":"Body first.","stuck":"We go numb, check out, or get flooded. Either we feel nothing, or the feeling is so big we cannot think.","sounds":"Sounds like: “I went somewhere else.” “My body took over.”","is_":"Signals rise from the body and brainstem, and the thinking part at the front of the brain can steady them only when that line is open. Trauma cuts the line. The body has to settle before the mind can help.","scripture":"Elijah, worn out and afraid, is fed and sleeps before God speaks to him (1 Kings 19:5–8). “I have calmed and quieted my soul” (Psalm 131:2).","applied":"","ask":"Are you here with me, or somewhere else? What would help you land?","helps":"Feet on the Floor · The Long Exhale · The Body Check","carry":"Where do you feel stress in your body right now? Is it loud, quiet, or gone?","try":"Feet on the Floor: feet on the floor, seat in the chair. Name three things you can see and say where you are and what day it is."},
    {"n":3,"name":"The Word for It","one":"Say what you feel.","stuck":"We feel it and cannot say it, or we can explain it for an hour and never feel it. Either speechless or only explaining.","sounds":"Sounds like: “I don’t have words.” “I know exactly why I did it.” (and nothing changes)","is_":"Raw feeling and images live mostly on the right side of the brain. Language and logic live mostly on the left. Healing needs both sides talking. Putting an exact word on a feeling turns its volume down.","scripture":"Adam names each animal, putting the right word on what he sees (Genesis 2:19–20). The psalmist Asaph, too troubled to speak (Psalm 77:4), still writes a psalm. David found that silence wasted his bones (Psalm 32:3–5).","applied":"","ask":"If this feeling had one word, what would it be? Is there a more exact one?","helps":"Name It to Tame It · Borrowed Vessels","carry":"If this feeling had one word, what would it be? Is there a more exact one?","try":"Name It to Tame It: put one exact word on the feeling and say it out loud."},
    {"n":4,"name":"Past Tense","one":"It happened. It is over.","stuck":"An old hurt still lives in the body as if it were happening now. We react to today with yesterday’s fear and cannot say why.","sounds":"Sounds like: “I know it’s not a big deal, but my body says I’m in danger.”","is_":"Some memories are stored in the body with no “then” stamped on them, so they feel like the present. Healing moves them into plain history: that happened, it is over, and I am here. A memory can be rewritten when we recall it and meet something it did not expect.","scripture":"After crossing the Jordan, Israel sets up stones, so a memory has a place and a date (Joshua 4:6–7). Peter denies Jesus at a charcoal fire and is restored by Jesus at another one (John 18:18; John 21:9). Same smell, new ending.","applied":"","ask":"How old do you feel right now?","helps":"The Feeling Bridge · The Surprise · Set a Stone","carry":"How old do you feel right now?","try":"The Feeling Bridge: notice where the feeling sits and when you first remember it. Go slowly, and with someone safe."},
    {"n":5,"name":"The Whole Story","one":"Pain included, and it makes sense.","stuck":"Our life reads as a list of failures or a blur of fragments. “I am broken” becomes the title of the whole book.","sounds":"Sounds like: “That’s just who I am.”","is_":"Research on attachment finds that a coherent account of our own life, pain included, is one of the strongest predictors that a person’s own children will be securely attached (able to trust and stay close to others). The goal is not a happy story. It is a true one that holds together.","scripture":"Joseph, speaking to the brothers who sold him, holds the harm and the good in one sentence: “You meant evil against me, but God meant it for good” (Genesis 50:20). “Let the redeemed of the LORD say so” (Psalm 107:2).","applied":"","ask":"Which part of your story do you tell fastest? Which part do you skip?","helps":"Four Ways to Read a Life · The Seven-Stage Journey","carry":"If your story had a title right now, what would it be? What do you want it to be?","try":"Four Ways to Read a Life: start with what happened, the plain facts."},
    {"n":6,"name":"One Heart","one":"Every part gets a seat.","stuck":"We feel like several different people: the one who performs, the one who sins in private, the child who is still afraid. They do not talk to each other, and we are ashamed of each.","sounds":"Sounds like: “I don’t know who I really am.”","is_":"The mind holds many states, such as roles, moods and ages. That is normal. The trouble comes when they are walled off. Healing does not erase any of them. It brings them to one table so a steady self (the calm center that can listen to every part) can lead.","scripture":"Paul describes it: “I do not understand my own actions” (Romans 7:15). David prays, “unite my heart to fear your name” (Psalm 86:11).","applied":"","ask":"Who takes over when you are under pressure? What is that part protecting?","helps":"Name the Survivors · A Seat for Every Part","carry":"Who takes over when you are under pressure? What is that part protecting?","try":"Name the Survivors: which one showed up this week, the Performer, the Loner, the Achiever or the Pleaser?"},
    {"n":7,"name":"The Old Vows","one":"Then is not now.","stuck":"We still live by promises we made to stay safe, often as children. The danger passed. The promise did not.","sounds":"Sounds like: “I’ll never let anyone see that again.” “I’ll never need anyone.”","is_":"We want certainty, and life brings change and loss. A vow tries to buy certainty: if I never need anyone, no one can leave. Trauma freezes time, and the mind keeps the rules it made at the worst moment and applies them to a life that has changed. The work is seeing a vow for what it was, protection for then, and retiring it. A vow we trust instead of God becomes an idol.","scripture":"“Remember not the former things… Behold, I am doing a new thing” (Isaiah 43:18–19). Paul presses on, “forgetting what lies behind” (Philippians 3:13). Not erasing it but no longer ruled by it.","applied":"Read as an application: neither verse speaks of vows in its own setting.","ask":"What did you promise yourself you would never do or never feel again? What has that promise cost you?","helps":"Release the Vow · A Letter to the Child · Ending Well","carry":"What rule did you make as a kid to stay safe? Is it still running?","try":"Release the Vow: name the vow, and see what it protected you from."},
    {"n":8,"name":"Me and We","one":"Close without disappearing.","stuck":"We keep everyone out, or we merge with people and fear losing them. We are alone in a crowd or panicked when someone pulls away.","sounds":"Sounds like: “I’ll handle it myself.” “If I say no, they’ll leave.”","is_":"We settle when someone’s attention meets ours and feels what we feel. Health is both: a self of our own, and a “we” we can be close in without losing the self.","scripture":"“It is not good that the man should be alone” (Genesis 2:18). “Confess your sins to one another and pray for one another, that you may be healed” (James 5:16). Jesus tells a worshiper at the altar to leave the gift and first go be reconciled with a brother or sister (Matthew 5:23–24).","applied":"","ask":"When you pull back from people, what are you protecting?","helps":"Confession to One Another · The Four S’s · Break and Mend","carry":"Who knows the real story? Who would you want to know it?","try":"Confession to One Another: say it out loud to a person who stays."},
    {"n":9,"name":"Part of Something Larger","one":"Given to be given away.","stuck":"We are cut off from God, from purpose, and from the people he gives us. Life shrinks to me: my guilt, my fix, my survival. A flat deadness settles in.","sounds":"Sounds like: “Nothing really matters.” “God feels far away.”","is_":"Transpirational means “breathing across”: the other eight kinds of integration flow together into a sense of belonging to something larger. Wholeness reaches past the self: me, we, and something larger. For us, the something larger is God and his Kingdom.","scripture":"Isaiah sees God, is undone, is cleansed, then hears “Whom shall I send?” and answers, “Here I am! Send me” (Isaiah 6:5–8).","applied":"","ask":"Where do you feel far from God, and where do you feel him close?","helps":"Return · Down Before Up · Given Away","carry":"Where do you feel far from God, and where do you feel him close?","try":"Return: turn back to God, confess, and receive his forgiveness (1 John 1:9)."}];
  function wmOf(n) { n = Number(n); return WAYMARKS.filter(function (w) { return w.n === n; })[0] || null; }
  function tryOf(w) { var s = String(w && w.try || ""), i = s.indexOf(": "); return i > 0 ? { name: s.slice(0, i), text: uc1(s.slice(i + 2)) } : { name: "", text: uc1(s) }; }
  function oneOf(w) { return String(w && w.one || "").replace(/\.$/, ""); }

  /* ───────────── the model: what the three views read ───────────── */
  var BARE_V = { bare: true, first: true, ended: false, after: false, inGroup: false, course: "", total: 0, unit: { n: 0, label: "", title: "" }, meet: null, done: {}, practices: [], practice: "", when: "",
    guidepost: { n: 0, weekLine: "" }, lastWeek: null, needs: null, house: { did: [], saw: [], know: [] }, better: [], made: null, notes: [], carried: "", settings: { remind: "", shares: { path: true, piece: true, practice: true, words: false, guidepost: false }, paused: false } };
  var UI = { tab: "week", open: {}, ck: null, house: "mine", ours: null, oursBusy: false, flare: null, fresh: {}, handSent: false, handBusy: false, drafts: {}, letterNow: false, wf: { open: false, role: "mentor", sent: null }, welcomed: null, pending: null, slot: "", say: {}, news: window.apNews || [] };
  function V() { return data && data.v11 ? data.v11 : BARE_V; }
  function group() { return !!V().inGroup; }
  function leaderKnown() { return !!(data && data.group && data.group.leader); }
  function walkYes() { var y = data && data.witness && data.witness.yes; return !group() && y && y.name ? y : null; }
  function witnessName() { var y = walkYes(); return y ? y.name : group() && leaderKnown() ? "your group’s leader" : "our team"; }
  function meetDay() { var m = V().meet; return m && m.day ? m.day : ""; }
  function piece() { return data && data.piece ? data.piece : null; }
  function cardD() { return data && data.card ? data.card : null; }
  function unreadNote() { var n = V().notes || []; return n.filter(function (x) { return !x.read; })[0] || null; }
  function newestNote() { return (V().notes || [])[0] || null; }
  function welcomedYet() { return UI.welcomed !== null ? UI.welcomed : !!(data && data.ui && data.ui.welcomed11); }
  function needText(w) { var n = V().needs || {}; return n[w] || NEED_FB[w] || ""; }
  function pathLabel(k) { var p = PATHS.filter(function (x) { return x[0] === k; })[0]; return p ? p[1] : ""; }
  function ctxLabel() { var v = V(); return v.unit && v.unit.label ? v.unit.label : ""; }
  /* the story row of the week's list: the story work the course asks this week; done when every piece of it is finished */
  function storyRow() {
    if (!group()) return null;
    var L = writeList(data); if (!L.length) return null;
    var open = L.filter(function (x) { return !x.finished; })[0];
    return open ? { done: false, it: open } : { done: true, it: L[0] };
  }
  function doneNow() {
    var v = V(), d = {}, s = storyRow(), k;
    for (k in (v.done || {})) d[k] = !!v.done[k];
    d.story = s ? s.done : true;
    return d;
  }
  function lastTapRow() { return UI.say; }

  /* the band's one next step, as the prototype's nextStep() computes it */
  function nextStep() {
    var v = V(), d = doneNow(), p = piece(), s = storyRow(), day = meetDay(), lab = ctxLabel();
    if (v.ended) return { t: "see what comes after " + (v.course || "your course"), act: "go-path" };
    if (unreadNote()) return { t: "A letter from your witness", act: "letter" };
    if (v.after) {
      if (!d.wed) return { t: "What did you take from " + (day || "your group’s night") + "?", act: "focus-wed" };
      if (!d.choose) return { t: "Choose your practice for this week", act: "choose" };
      return { t: "You’re carrying it well. A new piece comes at your own pace", act: null };
    }
    if ((v.unit && v.unit.n || v.course) && !d.course) return { t: lab ? "Read " + lab : "Open " + (v.course || "your course"), act: "course" };
    if (p && !d.road) return { t: "This week’s piece, for your road", act: "piece" };
    if (!d.check) return { t: "Check in with your witness, about a minute", act: "checkin" };
    if (s && !s.done) return { t: writeName(s.it.title) + (day ? " before " + day : ""), act: "story" };
    return { t: group() ? "You’re ready for " + (day || "your group’s night") + "." : "You’re ready for this week.", act: null };
  }
  function whereText() {
    var v = V(), c = v.course, lab = ctxLabel(), t = v.unit && v.unit.title;
    if (v.bare || !c) return "";
    if (v.ended) return c + " is complete.";
    if (!group()) return c + (lab ? " · " + lab : "") + (t ? ", “" + t + ".”" : ".");
    var day = meetDay(), time = v.meet && v.meet.time;
    if (v.after) return (lab || "This week") + " of " + c + " starts now." + (day ? " Your group meets again " + day + "." : "");
    return (lab ? lab + " of " + c + "." : c + ".") + (day ? " Your group meets " + day + (time ? " at " + time : "") + "." : "");
  }
  function helloText() {
    var first = (me && me.first) || (data && data.v11 && data.v11.name) || "";
    var back = !V().first;
    return (back ? "Welcome back" : "Welcome") + (first ? ", " + first : "") + ".";
  }
  /* ───────────── This Week ───────────── */
  function lead(k) {
    if (k === "house") return '<p class="av-vlead">“Remember the whole way that the LORD your God has led you.” <span class="av-ref">Deuteronomy 8:2</span></p>';
    return LEADS[k] ? '<p class="av-vlead">' + esc(LEADS[k]) + '</p>' : ""; /* Your Path says its line in the header */
  }
  function actOf(p) { var a = String(p && p.act || "").trim(); return /^(Read|Listen|Watch)$/.test(a) ? a : "Read"; }
  function rhythmOfWhen(k) { var w = WHENS.filter(function (x) { return x[0] === k; })[0]; return w ? w[1] : ""; }

  /* ───────────── Your Story ───────────── */
  function lineHtml(l) { return '<p class="av-line' + (l.mine ? " av-mine" : "") + (l.fresh ? " av-new" : "") + '">' + esc(l.t) + (l.w ? '<small>' + esc(l.w) + '</small>' : "") + '</p>'; }
  /* Your Story · Told, Offered, Known, from the story engine's own states: finished and kept = Told; the offered stop = Offered; the published stop = Known; begun = Begun */
  function storyStop(key) {
    var c = cardNode(key), foot = c && c.querySelector(".apo-foot"), cls = foot ? foot.className : "", st = stateOf(key);
    if (/is-published/.test(cls)) return ["Known", "on Our Stories, where other men can read it"];
    if (/is-offered/.test(cls)) return ["Offered", "our team is reading it"];
    if (st && st.status === "finished") return ["Told", "kept for you"];
    if (st) return ["Begun", "pick it up where you left off"];
    return ["", ""];
  }
  function shelfRows() {
    var rows = [], keys = Object.keys(surfaces());
    keys.forEach(function (k) {
      var c = cardNode(k); if (!c || !cardShown(c) || !stateOf(k)) return;
      var s = storyStop(k); if (!s[0]) return;
      rows.push({ key: k, title: titleOf(c), stop: s[0], line: s[1] });
    });
    if ((window.apStones || []).length) rows.push({ key: "stones", title: "Your Stones", stop: "Told", line: "kept for you" });
    return rows;
  }
  function shelfHtml() {
    var rows = shelfRows(), h = '<div class="av-card"><p class="av-lk">Your Story · Told, Offered, Known</p>';
    if (!rows.length) h += '<p class="av-help">Nothing here yet. Whatever you write on this road is kept here, and stays yours until you choose to offer it.</p>';
    else h += '<div class="av-shelf">' + rows.map(function (r) {
      var open = UI.slot === r.key;
      return '<div class="av-it"><button type="button" class="av-itb" data-act="slot" data-k="' + esc(r.key) + '" aria-expanded="' + open + '"><span>' + esc(r.title) + '</span><em>' + esc(r.stop + " · " + r.line) + '</em></button><div class="av-slot" data-slot="' + esc(r.key) + '"' + (open ? "" : " hidden") + '></div></div>';
    }).join("") + '</div>';
    return h + '<a class="av-walk" href="' + PAGES.story + '"><span class="av-u">' + (rows.length ? "Write another" : "Write your first") + '</span> <span class="av-ar">→</span></a></div>';
  }
  function stashSlots() {
    var s = shelf(); if (!s) return;
    $$('.av-slot > .ap-card, .av-slot > #apPileBox').forEach(function (n) { if (n.id === "apPileBox") (document.getElementById("apStories") || s).insertAdjacentElement("afterend", n); else (document.getElementById("apStories") || s).appendChild(n); });
  }
  function fillSlots() {
    $$('.av-slot').forEach(function (box) {
      var k = box.getAttribute("data-slot"); if (box.hidden) return;
      if (k === "stones") { var pn = document.getElementById("apPileBox"); if (pn) box.appendChild(pn); return; }
      var c = cardNode(k); if (c) { c.style.display = ""; box.appendChild(c); }
    });
  }
  function madeCard() {
    var v = V(), m = v.made, bet = v.better || [], open = !!UI.open.better, tx = UI.drafts.avMade || "";
    var h = '<div class="av-card av-answer"><p class="av-lk">Make Something of It</p><p class="av-t">What has this road taught you that you want to keep, or give?</p>';
    if (m && m.text) return h + '<p class="av-kept"><b>Kept.</b> “' + esc(m.text) + '” is yours. When you’re ready, you can offer it so other men can read it.</p><button type="button" class="av-walk" data-act="offer"><span class="av-u">Offer it</span> <span class="av-ar">→</span></button></div>';
    var showBet = !v.first && bet.length > 0;
    return h + '<textarea id="avMade" maxlength="2000" aria-label="What this road has taught you">' + esc(tx) + '</textarea>' +
      (showBet ? '<button type="button" class="av-walk" data-act="toggle" data-k="better" aria-expanded="' + open + '"><span class="av-u">Stuck at the first line? Better questions</span> <span class="av-ar">' + (open ? "▴" : "▾") + '</span></button><div class="av-more' + (open ? " av-open" : "") + '">' + bet.map(function (q) { return '<p class="av-s">' + esc(q) + '</p>'; }).join("") + '</div>' : "") +
      '<button type="button" class="av-btn" data-act="keepmade">Keep it</button><p class="av-kept" id="avMadeS" aria-live="polite"></p></div>';
  }
  function viewHouse() {
    var v = V(), H = v.house || { did: [], saw: [], know: [] };
    var h = '<main class="av-view">' + lead("house");
    h += '<div class="av-seg2" role="group" aria-label="Whose story"><button type="button" data-act="house" data-h="mine" aria-pressed="' + (UI.house === "mine") + '">Mine</button><button type="button" data-act="house" data-h="ours" aria-pressed="' + (UI.house === "ours") + '">Our Group</button></div>';
    if (UI.house === "ours") {
      var O = UI.ours;
      h += '<p class="av-help">What the men walking this road have gathered together. It starts with your group and grows as groups join. Never one man’s words unless he offered them.</p>';
      if (!group()) h += '<div class="av-card"><p class="av-s">Our Group is your group’s. When you walk with a group, what the men gathered together shows here.</p></div>';
      else if (!O) h += '<div class="av-card"><p class="av-s">' + (UI.oursBusy ? "Opening Our Group." : "Our Group did not open. Try again in a moment.") + '</p></div>';
      else {
        ROOMS.forEach(function (r) {
          var L = O[r[0]] || [];
          h += '<div class="av-card av-room"><p class="av-t">' + esc(r[2].replace("You", "We")) + '</p>' + (L.length ? L.map(function (l) { return '<p class="av-line">' + esc(l.t) + '</p>'; }).join("") : '<p class="av-help">Nothing to show yet. A line shows here only when enough of your group stand behind it that no one man can be picked out.</p>') + '</div>';
        });
        if ((O.carried || []).length) h += '<div class="av-card"><p class="av-lk">What Our Group Carried</p>' + O.carried.map(function (c) { return '<p class="av-s"><b>' + esc(smart(c.title)) + '.</b> ' + esc(smart(c.body || "")) + '</p>'; }).join("") + '<p class="av-help">' + esc(WHO_CARRIED_HELP) + '</p></div>';
      }
      return h + '</main>';
    }
    ROOMS.forEach(function (r) {
      var L = H[r[0]] || [];
      h += '<div class="av-card av-room"><p class="av-t">' + esc(r[2]) + '</p>' + (L.length ? L.map(function (l) { return lineHtml({ t: l.t, mine: l.mine, w: l.w, fresh: !!UI.fresh[r[0] + "|" + l.t] }); }).join("") : '<p class="av-help">Empty for now. Your first check-in begins it.</p>') + '</div>';
    });
    h += '<p class="av-help">Each week holds what you did, what you saw and what you know now: wisdom, understanding and knowledge (Proverbs 24:3–4).</p>';
    h += shelfHtml();
    h += '<div class="av-card"><p class="av-lk">What I’ve Gathered</p><div class="av-vol"><div class="av-cover" aria-hidden="true"><span class="av-ck">What I’ve Gathered</span><span class="av-ct">' + esc(v.course || "Your road") + '</span><span class="av-cv">Remember the whole way…</span></div><div><p class="av-s" style="margin-top:0">' + (v.first ? "Nothing is gathered yet. What you keep on this road is bound here, in a volume of your own." : "Your first volume comes at the end of November.") + '</p></div></div></div>';
    h += madeCard();
    return h + '</main>';
  }

  /* ───────────── Your Path ───────────── */
  function pathCourses() {
    var mine = window.apMine || {}, out = [], seen = {}, offered = (data && data.setup && data.setup.offered) || [];
    function state(name, tid) {
      var o = offered.filter(function (x) { return norm(x.name) === norm(name); })[0];
      if (o) return /^Finished$/i.test(o.state) ? "Complete" : o.state;
      return mine[tid] ? "Yours" : "Free to start";
    }
    OPEN_COURSES.forEach(function (c) {
      var o = offered.filter(function (x) { return norm(x.name) === norm(c[0]); })[0];
      if (c[0] === "Breaking Free" && !o && !mine[c[1]]) return;
      seen[norm(c[0])] = 1; out.push({ name: c[0], state: state(c[0], c[1]), href: courseHref(c[0]) });
    });
    offered.forEach(function (o) { if (!seen[norm(o.name)]) { seen[norm(o.name)] = 1; out.push({ name: o.name, state: /^Finished$/i.test(o.state) ? "Complete" : o.state, href: courseHref(o.name) }); } });
    return out;
  }
  /* ───────────── overlays: the check-in and the sheets; a full screen on a phone, a sheet beside the page on a desk ───────────── */
  var lastFocus = null, locked = null;
  function root() { return $("#avRoot"); }
  function ovCk() { return $("#avCk"); }
  function ovSheet() { return $("#avSheet"); }
  function scroller() {
    var e = host.parentElement;
    while (e && e !== document.body && e !== document.documentElement) { var o = getComputedStyle(e).overflowY; if ((o === "auto" || o === "scroll") && e.scrollHeight > e.clientHeight + 2) return e; e = e.parentElement; }
    return null;
  }
  function lockOn() {
    if (locked) return;
    var sc = scroller();
    locked = { html: document.documentElement.style.overflow, body: document.body.style.overflow, sc: sc, scv: sc ? sc.style.overflow : "" };
    document.documentElement.style.overflow = "hidden"; document.body.style.overflow = "hidden"; if (sc) sc.style.overflow = "hidden";
    var m = $("#avMain"), b = document.getElementById("apBand");
    if (m) m.setAttribute("inert", ""); if (b) b.setAttribute("inert", ""); ["#apgTop", "#apgNav", "#apgView", "#apgFoot"].forEach(function (q) { var e = $(q); if (e) e.setAttribute("inert", ""); });
  }
  function lockOff() {
    if (!locked) return;
    document.documentElement.style.overflow = locked.html; document.body.style.overflow = locked.body; if (locked.sc) locked.sc.style.overflow = locked.scv;
    locked = null;
    var m = $("#avMain"), b = document.getElementById("apBand");
    if (m) m.removeAttribute("inert"); if (b) b.removeAttribute("inert"); ["#apgTop", "#apgNav", "#apgView", "#apgFoot"].forEach(function (q) { var e = $(q); if (e) e.removeAttribute("inert"); });
  }
  function anyOpen() { var a = ovCk(), b = ovSheet(); return !!((a && a.classList.contains("av-open")) || (b && b.classList.contains("av-open"))); }
  function openOverlay(el, html) {
    if (!el) return;
    if (!anyOpen()) lastFocus = document.activeElement;
    el.innerHTML = html; el.classList.add("av-open"); var sc = $("#avScrim"); if (sc) sc.classList.add("av-on");
    lockOn();
    setTimeout(function () { var f = el.querySelector("textarea,.av-obody button,.av-obody input,button"); if (f && f.focus) { try { f.focus({ preventScroll: true }); } catch (e) { f.focus(); } } }, reduce ? 0 : 380);
  }
  function closeOverlay(el) {
    if (!el) return;
    el.classList.remove("av-open");
    if (!anyOpen()) { var sc = $("#avScrim"); if (sc) sc.classList.remove("av-on"); lockOff(); if (lastFocus && document.body.contains(lastFocus) && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) { lastFocus.focus(); } } }
  }
  function trap(ev) {
    var ov = ovSheet().classList.contains("av-open") ? ovSheet() : ovCk().classList.contains("av-open") ? ovCk() : null; if (!ov) return;
    if (ev.key === "Escape") { ev.preventDefault(); if (ov === ovCk()) closeCk(); else closeSheet(); return; }
    if (ev.key === "Enter" && ov === ovCk() && !ev.shiftKey && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
      /* Enter presses the step's one filled button, unless he is typing, on a link, or on a choice he has not made yet (then Enter makes that choice, as a button does) */
      var et = ev.target, tag = et && et.tagName, prim = $('[data-act="ck-next"],[data-act="ck-finish"]', ov);
      if (prim && tag !== "TEXTAREA" && tag !== "INPUT" && tag !== "A") {
        var pick = et && et.closest ? et.closest("[aria-pressed]") : null, own = et && et.closest ? et.closest("[data-act]") : null;
        if ((!pick || pick.getAttribute("aria-pressed") === "true") && !(own && !pick)) { ev.preventDefault(); prim.click(); return; }
      }
    }
    if (ev.key !== "Tab") return;
    var f = $$("button:not([disabled]),a[href],textarea,input", ov).filter(function (n) { return n.offsetParent !== null || n === document.activeElement; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (ev.shiftKey && (document.activeElement === first || !ov.contains(document.activeElement))) { ev.preventDefault(); last.focus(); }
    else if (!ev.shiftKey && (document.activeElement === last || !ov.contains(document.activeElement))) { ev.preventDefault(); first.focus(); }
  }
  function sheetHtml(title, body) { return '<div class="av-ohead"><span class="av-lk">' + esc(title) + '</span><button type="button" class="av-close" data-act="close-sheet">Close</button></div><div class="av-obody">' + body + '</div>'; }
  function openSheet(html) { openOverlay(ovSheet(), html); }
  function closeSheet() { closeOverlay(ovSheet()); renderMain(true); }
  function closeCk() { closeOverlay(ovCk()); renderMain(true); }
  function toast(m) { var t = $("#avToast"); if (!t) return; t.textContent = m; t.classList.add("av-in"); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("av-in"); }, 2600); }

  /* ───────────── the check-in: four steps, Back and Skip on each; every tap is written as it is made ───────────── */
  function ckInit(mode) {
    var v = V(), c = cardD() || {}, p = piece(), pr = v.practice || "", wh = v.when || ""; /* only what he chose this week: last week's time of day is not carried in */
    if (mode === "choose" && !ckPractices().some(function (t) { return t === pr || (pr.length >= 200 && t.indexOf(pr) === 0); })) { pr = ""; wh = ""; } /* after his group meets: last unit's practice and time are not carried onto the new list */
    UI.ck = { step: mode === "choose" ? 4 : 1, mode: mode || "week", path: c.mark || null, word: c.word || null, helped: p && p.word === "met" ? "yes" : p && p.word === "not" ? "no" : null,
      why: p && p.why === "too_long" ? "long" : p && p.why === "not_needed" ? "need" : null, how: c.did || null, practice: pr || null, when: wh || null, moreWords: false, taps: 0, say: {} };
  }
  function ckBar(st) { return '<div class="av-bar" aria-hidden="true">' + [1, 2, 3, 4].map(function (i) { return '<i class="' + (i <= Math.min(st, 4) ? "av-on" : "") + '"></i>'; }).join("") + '</div>'; }
  function kLine(k) { var s = UI.ck.say[k]; return s ? (s.bad ? esc(s.t) : "<b>Kept.</b> " + esc(s.t)) : ""; }
  function ckPractices() {
    var l = (V().practices || []).slice(), g = V().gp || {}, p = V().practice || "";
    if (g.use && p && l.indexOf(p) < 0 && !l.some(function (t) { return p.length >= 200 && t.indexOf(p) === 0; })) l.unshift(p); /* "Use it" on a guidepost: the practice the check-in carries */
    return l;
  }
  function isPicked(t) { var p = UI.ck.practice || ""; return !!p && (t === p || (p.length >= 200 && t.indexOf(p) === 0)); }
  function ckHtml() {
    var c = UI.ck, st = c.step, p = piece(), card = cardD() || {}, v = V();
    var head = '<div class="av-ohead"><span class="av-lk">' + (c.mode === "choose" ? "Choose Your Practice" : "Check In With Your Witness") + '</span><button type="button" class="av-close" data-act="close-ck">Close</button></div>';
    if (st === 5) return head + '<div class="av-obody">' + ckBar(st) + doneHtml() + '</div><div class="av-ofoot"><button type="button" class="av-btn" style="margin-top:0" data-act="ck-finish">Back to This Week</button><div class="av-links"><button type="button" class="av-walk" data-act="ck-house"><span class="av-u">See it in Your Story</span> <span class="av-ar">→</span></button></div></div>';
    var b = "";
    if (st === 1) {
      var ws = c.moreWords ? WORDS.concat(MORE_WORDS) : WORDS, need = c.word ? needText(c.word) : "";
      b = '<p class="av-sub">The Path</p><p class="av-q">How’s the path this week?</p><div class="av-choices av-two">' + PATHS.map(function (x) { return '<button type="button" class="av-choice av-left" data-act="ck-path" data-v="' + x[0] + '" aria-pressed="' + (c.path === x[0]) + '"><svg viewBox="0 0 20 20" aria-hidden="true">' + x[2] + '</svg>' + esc(x[1]) + '</button>'; }).join("") + '</div>' +
        '<p class="av-sub">The Word for It, If You Want</p><div class="av-words">' + ws.map(function (w) { return '<button type="button" class="av-word" data-act="ck-word" data-v="' + w + '" aria-pressed="' + (c.word === w) + '">' + w + '</button>'; }).join("") + (c.moreWords ? "" : '<button type="button" class="av-word" data-act="ck-more">More words</button>') + '</div>' +
        '<p class="av-kept" aria-live="polite">' + (c.say.path ? kLine("path") : (c.word && !c.path ? "Choose how the path is first, and the word is kept with it." : "")) + '</p>' +
        '<div class="av-give' + (need ? " av-in" : "") + '" id="avNeed"><p class="av-lk">The Word for It</p><p>' + esc(need) + '</p></div>';
    } else if (st === 2) {
      if (!p) b = '<p class="av-sub">This Week’s Reading</p><p class="av-q">Your reading has not come yet.</p><p class="av-s">It lands with your next morning’s reading. You can skip this one.</p>';
      else {
        var mk = p.word === "met" ? "helped" : p.word === "not" ? "not" : "";
        b = '<p class="av-sub">This Week’s Reading</p><p class="av-q">Did this reading help your week?</p><p class="av-s">“' + esc(p.claim) + '”</p>' + (mk ? '<p class="av-kept"><b>' + (mk === "helped" ? "You said it helped." : "You said skip.") + '</b> Kept from Readings, where you answered it.</p>' : '<p class="av-s">Whether it helped is one tap on Readings, once you’ve read it. Skip this one if you haven’t yet.</p><div class="av-links" style="margin-top:6px"><button type="button" class="av-walk" data-act="ck-readings"><span class="av-u">Open Readings</span> <span class="av-ar">→</span></button></div>');
      }
    } else if (st === 3) {
      var last = card.lastChose || (v.lastWeek && v.lastWeek.practice) || "";
      if (!last) b = '<p class="av-sub">Last Week’s Practice</p><p class="av-q">You didn’t name a practice last week.</p><p class="av-s">There is nothing to look back on here. This week you’ll choose one.</p>';
      else b = '<p class="av-sub">Last Week’s Practice</p><p class="av-q">“' + esc(last) + '” How did it go?</p><div class="av-choices av-three"><button type="button" class="av-choice" data-act="ck-how" data-v="most" aria-pressed="' + (c.how === "most") + '">Most days</button><button type="button" class="av-choice" data-act="ck-how" data-v="some" aria-pressed="' + (c.how === "some") + '">Some days</button><button type="button" class="av-choice" data-act="ck-how" data-v="notyet" aria-pressed="' + (c.how === "notyet") + '">Not this week</button></div><p class="av-kept" aria-live="polite">' + (c.how ? "<b>Kept.</b> " + esc(HOW[c.how].replace(/^Kept\. /, "")) : "") + '</p><p class="av-help">We want to support your growth here, establishing the right habits that lead to the personal development you desire.</p>';
    } else if (st === 4) {
      var list = ckPractices(), lab = ctxLabel();
      b = '<p class="av-sub">This Week’s Practice</p><p class="av-q">' + (list.length ? "Choose one from " + esc(lab || "this week") : "Your Practice for This Week") + '</p>' +
        (list.length ? '<div class="av-choices">' + list.map(function (t, i) { return '<button type="button" class="av-choice av-left" data-act="ck-prac" data-v="' + i + '" aria-pressed="' + isPicked(t) + '">' + esc(t) + '</button>'; }).join("") + '</div><p class="av-kept" aria-live="polite">' + (c.say.practice ? kLine("practice") : "") + '</p>' : '<p class="av-s">Your course hasn’t named practices for this week yet. They’ll be here when it does.</p>') +
        '<p class="av-sub">When Will You Do It?</p><div class="av-choices av-three">' + WHENS.map(function (w) { return '<button type="button" class="av-choice" data-act="ck-when" data-v="' + w[0] + '" aria-pressed="' + (c.when === w[0]) + '">' + esc(w[1]) + '</button>'; }).join("") + '</div><p class="av-kept" aria-live="polite">' + (c.say.when ? kLine("when") : "") + '</p>' +
        '';
    }
    var label = c.mode === "choose" ? "Done" : st < 4 ? ["Next: this week’s reading", "Next: last week’s practice", "Next: this week’s practice"][st - 1] : "Done";
    var links = c.mode === "choose" ? "" : (st > 1 ? '<button type="button" class="av-walk" data-act="ck-back"><span class="av-u">Back</span></button>' : "") + '<button type="button" class="av-walk" data-act="ck-skip"><span class="av-u">Skip this one</span></button>';
    return head + '<div class="av-obody">' + (c.mode === "choose" ? "" : ckBar(st)) + b + '</div><div class="av-ofoot"><button type="button" class="av-btn" style="margin-top:0" data-act="ck-next">' + label + '</button><div class="av-links">' + links + '</div></div>';
  }
  /* "…this week too" is said only when his own mark this week is the group's; otherwise there is no line (and none on a first visit) */
  function groupSaidLine() {
    var g = (data && data.group) || {}, mine = (UI.ck && UI.ck.path) || "";
    return group() && !V().first && mine && g.line && mine === g.line && GROUPWORD[g.line] ? "Most of your group marked " + GROUPWORD[g.line] + " this week too." : "";
  }
  function helpingSaid() {
    var h = data && data.helping, out = [], m = (h && h.more) || [];
    if (!h) return "";
    if (m.length) out.push("The readings that have helped you most come from " + (m.length > 1 ? m[0] + " and " + m[1] : m[0]) + ", so you’ll see more from " + (m.length > 1 ? "both" : "it") + ".");
    if (h.fewer) out.push("Readings on " + h.fewer + " haven’t landed yet, so you’ll see fewer of those.");
    return out.join(" ");
  }
  function doneHtml() {
    if (!UI.ck.taps) return '<p class="av-q" style="margin-top:14px">Nothing kept this time.</p><p class="av-help">You can check in any time this week. Nothing was saved.</p>';
    var c = UI.ck, day = meetDay(), who = group() ? (leaderKnown() ? "Your group’s leader reads it before you meet." : "Our team reads it before you meet.") : "Our team reads it this week.";
    var h = '<p class="av-q" style="margin-top:14px">Kept. ' + (group() ? "You’re ready for " + esc(day || "your group’s night") + "." : "Your week is set.") + '</p><p class="av-help">' + esc(who) + ' <br><button type="button" class="av-walk" data-act="settings"><span class="av-u">Change what you share</span> <span class="av-ar">→</span></button></p>';
    var pr = c.practice || V().practice;
    if (pr) h += '<p class="av-s" style="margin-top:10px">Your practice this week: <b>' + esc(String(pr).replace(/\.$/, "")) + '</b>' + (c.when ? ", " + esc(lc1(rhythmOfWhen(c.when))) : "") + '.</p>';
    var hs = helpingSaid(), gs = groupSaidLine();
    if (hs) h += '<div class="av-give" data-seq="1"><p class="av-lk">What’s Been Helping You</p><p>' + esc(smart(hs)) + '</p></div>';
    if (gs) h += '<div class="av-give" data-seq="2"><p class="av-lk">You’re Not the Only One</p><p>' + esc(gs) + '</p></div>';
    var p0 = piece(), lit = { did: !!pr, saw: !!c.path, know: !!(p0 && p0.word === "met") };
    if (lit.did || lit.saw || lit.know) h += '<div class="av-give" data-seq="3"><p class="av-lk">Your Story</p><p>It’s kept in Your Story.</p></div>';
    return h;
  }
  function revealGives() { $$(".av-give[data-seq]", ovCk()).forEach(function (g, i) { setTimeout(function () { g.classList.add("av-in"); }, reduce ? 0 : 220 + i * 380); }); }

  /* ───────────── sheets: the piece, the letter, a hand, settings, what this page is for ───────────── */
  /* ───────────── writing: every tap is written as it is made, then says Kept. (a miss says so once and leaves his choice standing) ───────────── */
  function post(o) {
    if (!ROAD_URL || !me) return Promise.resolve(null);
    o.email = me.email; o.lwid = me.id; o.name = me.name;
    return fetch(ROAD_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(o) }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  }
  function ok(r) { return !!(r && r.ok); }
  function cache() { try { localStorage.setItem(CACHE, JSON.stringify({ email: me.email, data: data, at: Date.now() })); } catch (e) {} }
  function setV(k, val) { if (data && data.v11) data.v11[k] = val; }
  function setDone(k) { if (data && data.v11) { data.v11.done = data.v11.done || {}; data.v11.done[k] = true; } }
  function refocus(sel) { var n = sel && $(sel); if (n && n.focus) { try { n.focus({ preventScroll: true }); } catch (e) { n.focus(); } } }
  function popRow(key) { var r = $('.av-row[data-key="' + key + '"]'); if (r && !reduce) { r.classList.add("av-pop"); setTimeout(function () { r.classList.remove("av-pop"); }, 700); } }
  function houseKeys(h) { var o = {}; ROOMS.forEach(function (r) { (h && h[r[0]] || []).forEach(function (l) { o[r[0] + "|" + l.t] = 1; }); }); return o; }
  /* a newer answer from the road: new lines in Your Story are marked fresh */
  function applyData(r, prevHouse) {
    var before = houseKeys(prevHouse), rooms = [];
    data = r; UI.fresh = {};
    ROOMS.forEach(function (x) { (V().house && V().house[x[0]] || []).forEach(function (l) { if (!before[x[0] + "|" + l.t]) { UI.fresh[x[0] + "|" + l.t] = 1; if (rooms.indexOf(x[0]) < 0) rooms.push(x[0]); } }); });
    cache();
    return rooms;
  }
  function refresh(then) {
    var prev = V().house;
    return post({ action: "road" }).then(function (r) {
      if (ok(r) && !r.bare) { var rooms = applyData(r, prev); if (then) then(rooms); renderMain(true); }
      return r;
    });
  }
  function say(key, t, bad) { UI.ck.say[key] = { t: t, bad: !!bad }; }
  function ckRedraw() { var o = ovCk(); if (!o) return; var sc = $(".av-obody", o), y = sc ? sc.scrollTop : 0, f = document.activeElement && document.activeElement.getAttribute ? document.activeElement.getAttribute("data-act") + "|" + (document.activeElement.getAttribute("data-v") || "") : ""; o.innerHTML = ckHtml(); sc = $(".av-obody", o); if (sc) sc.scrollTop = y; var n = f && o.querySelector('[data-act="' + f.split("|")[0] + '"][data-v="' + f.split("|")[1] + '"]'); if (n) n.focus(); }
  var MISS = "That did not save. Tap it again.";
  function ckMark() {
    var c = UI.ck; if (!c.path) return;
    post({ action: "road_mark", mark: c.path, word: c.word || "" }).then(function (r) {
      if (ok(r)) { c.taps++; say("path", "It shows in What You Saw, in Your Story."); var cd = cardD(); if (cd) { cd.mark = c.path; cd.word = c.word || ""; } } else say("path", MISS, true);
      ckRedraw();
    });
  }
  function ckHow(val) {
    var c = UI.ck; c.how = val;
    post({ action: "road_did", did: val }).then(function (r) { if (ok(r)) { c.taps++; var cd = cardD(); if (cd) cd.did = val; } else { c.how = null; } ckRedraw(); });
    ckRedraw();
  }
  function ckPrac(i) {
    var c = UI.ck, t = ckPractices()[i], was = c.practice; if (!t) return;
    c.practice = t;
    post({ action: "road_practice", text: t }).then(function (r) {
      if (ok(r)) { c.taps++; say("practice", "This is your practice for the week."); setV("practice", t); var cd = cardD(); if (cd) cd.practice = t; } else { c.practice = was; say("practice", MISS, true); }
      ckRedraw();
    });
    ckRedraw();
  }
  function ckWhen(k) {
    var c = UI.ck, was = c.when; c.when = k;
    post({ action: "road_when", when: k }).then(function (r) {
      if (ok(r)) { c.taps++; say("when", "You’ll do it " + lc1(rhythmOfWhen(k)) + "."); setV("when", k); } else { c.when = was; say("when", MISS, true); }
      ckRedraw();
    });
    ckRedraw();
  }
  function ckNext() {
    var c = UI.ck;
    if (c.mode === "choose") {
      closeOverlay(ovCk());
      if (c.practice && (c.taps || ckPractices().some(isPicked))) { toast("Kept. Your practice for this week is set."); popRow("choose"); post({ action: "road" }).then(function (r) { if (ok(r) && !r.bare) { var rooms = applyData(r, V().house); renderMain(true); } }); setDone("choose"); }
      else toast("Nothing chosen yet. You can choose any time this week.");
      renderMain(true); return;
    }
    c.step++;
    if (c.step === 5) {
      if (c.taps) { post({ action: "road_checkin", state: "done" }); setDone("check"); UI.pending = post({ action: "road" }); } /* nothing kept, nothing saved: Skip leaves no mark */
      else UI.pending = null;
    }
    ckRedraw(); var b = $(".av-obody", ovCk()); if (b) b.scrollTop = 0;
    if (c.step === 5) revealGives(); else { var f = $(".av-obody button", ovCk()); if (f) f.focus(); }
  }
  function finishCk(goHouse) {
    var prev = V().house, pend = UI.pending, kept = !!(UI.ck && UI.ck.taps); UI.pending = null;
    closeOverlay(ovCk());
    var who = group() ? (leaderKnown() ? "Your group’s leader reads it before you meet." : "Our team reads it before you meet.") : "Our team reads it this week.";
    if (goHouse) { UI.tab = "house"; UI.house = "mine"; renderMain(); toTop(); } else { renderMain(true); if (kept) { popRow("check"); toast("Kept. " + who); } }
    if (pend) pend.then(function (r) {
      if (ok(r) && !r.bare) { var rooms = applyData(r, prev); renderMain(true); }
    });
  }

  /* ───────────── the rest of his taps ───────────── */
  function loadOurs() {
    if (!group() || UI.ours || UI.oursBusy) return;
    UI.oursBusy = true;
    post({ action: "road_ours" }).then(function (r) { UI.oursBusy = false; if (ok(r) && r.ours) UI.ours = r.ours; if (UI.tab === "house") renderMain(true); });
  }
  function openPiece() {
    setTab("readings"); /* the reading lives on Readings (11.3); the piece is marked opened when he opens it where it lives */
  }
  function keepWed() {
    var ta = $("#avWed"), st = $("#avWedS"), t = ta ? ta.value.trim() : "";
    if (!t) { if (st) st.textContent = "Write a line first; one is enough."; if (ta) ta.focus(); return; }
    var btn = $('[data-act="keepwed"]'); if (btn) btn.setAttribute("disabled", "disabled"); if (st) st.textContent = "Keeping it.";
    post({ action: "road_saw", text: t }).then(function (r) {
      if (ok(r)) { setDone("wed"); setV("wedText", t); UI.drafts.avWed = ""; UI.drafts.avWedKept = t; toast("Kept in Your Story, in What You Saw."); renderMain(true); popRow("wed"); refresh(); }
      else { if (btn) btn.removeAttribute("disabled"); if (st) st.textContent = "It did not save. Your words are still here; try again."; }
    });
  }
  function keepMade() {
    var ta = $("#avMade"), st = $("#avMadeS"), t = ta ? ta.value.trim() : "";
    if (!t) { if (st) st.textContent = "Write a line first; one is enough."; if (ta) ta.focus(); return; }
    var btn = $('[data-act="keepmade"]'); if (btn) btn.setAttribute("disabled", "disabled"); if (st) st.textContent = "Keeping it.";
    post({ action: "road_make", text: t }).then(function (r) {
      if (ok(r)) { setV("made", { text: t, when: (data && data.today) || "today" }); UI.drafts.avMade = ""; renderMain(true); refresh(); }
      else { if (btn) btn.removeAttribute("disabled"); if (st) st.textContent = "It did not save. Your words are still here; try again."; }
    });
  }
  function handSend() {
    if (UI.handBusy) return; UI.handBusy = true; UI.say.hand = "Sending."; sheetBody8(handHtml8());
    post({ action: "road_hand" }).then(function (r) {
      UI.handBusy = false;
      if (ok(r)) { UI.handSent = true; UI.say.hand = ""; } else UI.say.hand = "It did not go through. Tap Send it again, or use the line below if it is urgent.";
      sheetBody8(handHtml8()); refocus("#hsent");
    });
  }
  function setting(kind, fn) { return fn; }
  function share(k) {
    var S = V().settings = V().settings || {}; S.shares = S.shares || { path: true, piece: true, practice: true, words: false, guidepost: false };
    S.shares[k] = !S.shares[k]; UI.say.shares = "Saving."; redrawSettings();
    post({ action: "road_shares", shares: S.shares }).then(function (r) {
      if (ok(r)) { UI.say.shares = "Kept. Your witness sees " + (S.shares[k] ? "" : "no longer ") + lc1(SHARES.filter(function (x) { return x[0] === k; })[0][1]) + (S.shares[k] ? "." : "."); cache(); } else { S.shares[k] = !S.shares[k]; UI.say.shares = MISS; }
      redrawSettings(); refocus('[data-act="share8"][data-v="' + k + '"]');
    });
  }
  function pause() {
    var S = V().settings = V().settings || {}; S.paused = !S.paused; UI.say.pause = "Saving."; redrawSettings();
    post({ action: "road_pause", paused: S.paused }).then(function (r) {
      if (ok(r)) { UI.say.pause = S.paused ? "Kept. Your witness’s notes are paused." : "Kept. Your witness’s notes are back on."; cache(); } else { S.paused = !S.paused; UI.say.pause = MISS; }
      redrawSettings(); refocus('[data-act="pause8"]');
    });
  }
  var inviteBusy = false;
  function invite() {
    if (inviteBusy) return;
    var nm = $("#avWn"), em = $("#avWe"), st = $("#avWs"), name = nm ? nm.value.trim() : "", email = em ? em.value.trim() : "";
    function s(t) { if (st) st.textContent = t; }
    if (!name || !email) { s("Add their name and email first."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { s("That email does not look right. Check it and send again."); if (em) em.focus(); return; }
    inviteBusy = true; s("Sending.");
    post({ action: "road_witness", role: UI.wf.role, theirName: name, theirEmail: email }).then(function (r) {
      inviteBusy = false;
      if (ok(r) && r.limited) { UI.wf.sent = false; UI.wf.open = false; if (data) data.witness = { waiting: false }; cache(); renderMain(true); toast("Kept. Our team walks with you."); return; }
      if (ok(r)) { UI.wf.sent = true; UI.wf.open = false; if (data) data.witness = { waiting: true }; cache(); renderMain(true); toast("Kept. Until they say yes, our team walks with you."); return; }
      s(r && r.error === "bad_email" ? "That email does not look right. Check it and send again." : "It did not go through. Your words are still here; tap Send the invitation again.");
    });
  }
  function courseTap() {
    if (!doneNow().course) { post({ action: "road_course" }); setDone("course"); }
    var v = V(); toast("Opens " + (ctxLabel() ? ctxLabel() + " in " : "") + (v.course || "your course"));
    renderMain(true); popRow("course");
  }

  /* ═════════════ 11.2 · the shell (AP-SHELL 1) and the views drawn to design 8.10 ═════════════
     The band, the menu, This Week with Coming Weeks, Path with The Path Ahead and the guidepost pages are drawn here. Story, the reading and the check-in stay on the live layer above (install 1 of 3). */
  var ROOMPAGE = { page: "/start", growth: "/your-growth", desk: "/front-desk" };
  var CAL = "https://calendly.com/john-ancientpathcoaching/introductions";
  var LETSTALK = "/begin";
  var COUNSEL = "Some practices come from clinical work, so use them slowly and only with someone safe. This is care and coaching, not a replacement for counseling.";
  var VIEWS8 = [["week", "This Week", "Stand and look"], ["readings", "Readings", "Read for your week"], ["house", "Story", "Remember the way"], ["path", "Path", "Ask for the good way"]];
  var S8 = { sheet: "", html: "", sheetFrom: "", stop: "", gpn: 0, wsent: false, wbusy: false, toastM: "", unread: false, gpSay: "" };
  var lastFocus8 = null, toastT8 = null, moved = [];

  function smart8(s) { return String(s == null ? "" : s).replace(/(^|[\s(\[—–-])"/g, "$1“").replace(/"/g, "”").replace(/(^|\s)'/g, "$1‘").replace(/'/g, "’"); }
  /* the last two words of a line are tied, so no paragraph ends on a word alone */
  function tie(s) { return esc(smart8(s)).replace(/\s+$/, "").replace(/ ([^ ]+)$/, " $1"); }
  function wide() { return !!(window.matchMedia && window.matchMedia("(min-width:900px)").matches); }
  function longDay(iso) { var p = dparts(iso); return p ? DAYS[new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay()] + ", " + MONTHS[p.m - 1] + " " + p.d : ""; }
  function shortDay(iso) { var p = dparts(iso); return p ? MONTHS[p.m - 1] + " " + p.d : ""; }
  function dayAfter(iso) { var p = dparts(iso); if (!p) return ""; var d = new Date(Date.UTC(p.y, p.m - 1, p.d + 1)); return d.getUTCFullYear() + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + d.getUTCDate()).slice(-2); }
  function central(t) { t = String(t || "").trim(); return t && !/central/i.test(t) ? t + " Central" : t; }
  function nw(s) { return '<span class="nw">' + s + "</span>"; }
  function deskKey() { try { var v = JSON.parse(localStorage.getItem("apDesk") || "null"); return !!(v && v.key); } catch (e) { return false; } }
  function multi() { return deskKey(); }
  function ahead() { return V().ahead || { weeks: [], total: 0 }; }
  function aheadWeeks() { return ahead().weeks || []; }
  function wkN() { var v = V(); return v.unit && v.unit.n || 0; }
  function halfN() { var t = ahead().total; return t > 0 ? Math.floor(t / 2) + 1 : 0; }
  function secondHalf() { var h = halfN(); return group() && !V().ended && h > 0 && wkN() >= h; }
  function lastNightIso() { var w = aheadWeeks(); if (w.length) return w[w.length - 1].date; var m = V().meet; return wkN() === ahead().total && m && m.date ? m.date : ""; }
  function gpState() { var g = V().gp || {}; return { here: g.here || [], not: g.not || [], use: g.use || 0, readings: g.readings || {} }; }
  function gpMeNames() { var h = gpState().here; return WAYMARKS.filter(function (w) { return h.indexOf(w.n) >= 0; }).map(function (w) { return w.name; }); }
  function inviteYes() { var y = data && data.witness && data.witness.yes; return y && y.name ? y : null; }
  function inviteWaiting() { return !!(data && data.witness && data.witness.waiting) && UI.wf.sent !== false; }
  function teamOnly8() { return !walkYes() && !(group() && leaderKnown()); }
  function wCap() { var n = witnessName(); return n.charAt(0).toUpperCase() + n.slice(1); }
  function him() { return teamOnly8() ? "our team" : "him"; }
  function witFirst() { return teamOnly8() ? "our team" : (walkYes() ? walkYes().name.split(" ")[0] : "Your group’s leader"); }
  function roleWord8(r) { var x = WROLES.filter(function (z) { return z[0] === r; })[0]; return x ? lc1(x[1].replace(/^An? /, "")) : r || "witness"; }
  function courseCtx() { var v = V(); return v.course ? esc(v.course) + (ctxLabel() ? " · " + esc(ctxLabel()) : "") : ""; }
  function pieceHref(name) { var c = cardFor(name); return (c && cardHref(c)) || PAGES.story; }
  function pracShort(t) { t = String(t || ""); return t.length > 140 ? t.slice(0, 137).replace(/\s+\S*$/, "") + "…" : t; }

  /* ───────────── AP-PANEL 1: one function draws every section ───────────── */
  function note(n) { return '<span class="np">' + String(n).split(" · ").map(function (x) { return '<span class="nn">' + x + "</span>"; }).join("") + "</span>"; }
  function panelOpen(key, shutDefault) {
    var v = (data && data.ui && data.ui["p-" + key]) || ""; if (!v) { try { v = localStorage.getItem("ap_panel_p-" + key) || ""; } catch (e) {} }
    if (v === "shut") return false; if (v === "open") return true;
    return !shutDefault;
  }
  function secHtml(key, title, nt, body, opts) {
    opts = opts || {};
    var open = panelOpen(key, opts.shut);
    return '<section class="ap-panel' + (open ? "" : " shut") + '" data-panel="' + key + '" id="p-' + key + '">' +
      '<h2 class="ap-panel-h"><button type="button" class="ap-panel-head" data-act="panel" data-k="' + key + '" aria-expanded="' + (open ? "true" : "false") + '"><span class="ap-panel-text"><span class="ap-panel-title">' + title + '</span><span class="ap-panel-note">' + note(nt) + '</span></span><span class="ap-panel-ctl">' + (open ? "Close ▴" : "Open ▾") + "</span></button></h2>" +
      '<div class="ap-panel-body">' + body + "</div></section>";
  }
  function panelSet(key, open) {
    var box = host.querySelector('.ap-panel[data-panel="' + key + '"]'); if (!box) return;
    box.classList.toggle("shut", !open);
    var b = box.querySelector(".ap-panel-head"); if (b) b.setAttribute("aria-expanded", open ? "true" : "false");
    var c = box.querySelector(".ap-panel-ctl"); if (c) c.textContent = open ? "Close ▴" : "Open ▾";
    if (data) { data.ui = data.ui || {}; data.ui["p-" + key] = open ? "open" : "shut"; }
    try { localStorage.setItem("ap_panel_p-" + key, open ? "open" : "shut"); } catch (e) {}
    post({ action: "road_ui", key: "p-" + key, state: open ? "open" : "shut" });
  }
  function choice8(act, v, label, on, cls, extra) { return '<button type="button" class="choice' + (cls ? " " + cls : "") + '" data-act="' + act + '" data-v="' + esc(v) + '"' + (extra || "") + ' aria-pressed="' + (!!on) + '">' + label + "</button>"; }
  function rev8(k, label, body) { var o = !!UI.open[k]; return '<button type="button" class="rev" data-act="toggle8" data-k="' + k + '" aria-expanded="' + o + '"><span>' + label + "</span> " + (o ? "▴" : "▾") + '</button><div class="more' + (o ? " open" : "") + '">' + body + "</div>"; }
  function walk8(act, label, extra) { return '<button type="button" class="walk" data-act="' + act + '"' + (extra || "") + '><span class="u">' + label + '</span>&nbsp;<span class="ar">→</span></button>'; }
  function linkWalk(href, label, act) { return '<a class="walk" href="' + esc(href) + '"' + (act ? ' data-act="' + act + '"' : "") + ' target="_blank" rel="noopener"><span class="u">' + label + '</span>&nbsp;<span class="ar">→</span></a>'; }
  function sameWalk(href, label) { return '<a class="walk" href="' + esc(href) + '"><span class="u">' + label + '</span>&nbsp;<span class="ar">→</span></a>'; }

  /* ───────────── the band, the menu and the tabs (AP-SHELL 1) ───────────── */
  function ctxLine() {
    var v = V(), c = v.course, lab = ctxLabel();
    if (v.bare || !c) return 'No course yet · ' + nw("free to start,") + " " + nw("and yours to keep");
    if (v.ended) return esc(c) + " · " + nw("finished");
    var head = esc(c) + (lab ? " · " + nw(esc(lab) + " ·") : "");
    if (group()) { var m = v.meet || {}, d = m.date ? longDay(m.date) : ""; return head + " " + nw("Your room meets") + (d ? " " + nw(esc(d) + ",") : "") + (m.time ? " " + nw("at " + esc(central(m.time))) : (m.day && !d ? " " + nw(esc(m.day)) : "")); }
    return head + " " + nw("at your own pace");
  }
  function viewName8(k) { var x = VIEWS8.filter(function (y) { return y[0] === (k || UI.tab); })[0]; return x ? x[1] : "This Week"; }
  function bandWit() {
    var v = V(); if (v.bare) return "";
    var tw = teamOnly8(), n = unreadNote();
    var who = tw ? "our team, " + nw("until you invite your own witness") : "<b>" + esc(witnessName()) + "</b>, " + nw(v.ended ? "your witness now" : "your witness through " + esc(v.course || "your course"));
    return '<div class="bwit"><p>Walking with you: ' + who + '</p><div class="walks">' + (n ? walk8("letter", "Read his letter") : "") + walk8("wwrite", "Write to " + him()) + "</div></div>";
  }
  function helpItem8() {
    var tw = teamOnly8(), sent = UI.handSent;
    return ["hand", sent ? "Hand sent today" : "I need a hand", sent ? (tw ? "Our team" : wCap()) + " has your note" : "One tap reaches " + (tw ? "our team" : walkYes() ? walkYes().name : "your group’s leader")];
  }
  function bandHtml() {
    var t = UI.tab, hi = helpItem8(), v = V(), showHelp = !v.bare;
    var h1 = t === "week" ? helloText() : viewName8(t);
    var top = '<header class="band topbar"><div class="kr"><span class="k">Your Page</span><span class="kr-r">' + (showHelp ? '<button type="button" class="tb" data-act="' + hi[0] + '">' + hi[1] + "</button>" : "") + (multi() ? '<button type="button" class="tb" data-act="rooms">Rooms</button>' : "") + '<button type="button" class="tb" data-act="settings">Settings</button></span></div></header>';
    var tabs = '<div class="tabs" role="tablist" aria-label="Views">' + VIEWS8.map(function (x) { return '<button type="button" class="tab" role="tab" data-act="tab" data-tab="' + x[0] + '" aria-selected="' + (t === x[0]) + '">' + x[1] + "</button>"; }).join("") + "</div>";
    return top + '<section class="band hero"><span class="k hk">Your Page</span><h1 id="apgH1" tabindex="-1">' + esc(h1) + '</h1><p class="where">' + ctxLine() + "</p>" + bandWit() + "</section>" + tabs + (t === "week" ? sinceHtml() : "");
  }
  function sinceHtml() {
    var L = UI.news || []; if (!L.length) return "";
    var parts = L.map(function (n) { return n.text; }), links = L.map(function (n) { return n.label ? (n.pile ? '<button type="button" class="walk" data-act="stones"><span class="u">' + esc(n.label) + '</span>&nbsp;<span class="ar">→</span></button>' : sameWalk(n.href || "#", esc(n.label))) : ""; }).join("");
    return '<div class="since"><p>' + esc("Since you were last here, " + parts.join(" and ") + ".") + '</p><div class="walks" style="margin-top:0">' + links + "</div></div>";
  }
  function menuHtml() {
    var t = UI.tab, views = function (cls) { return VIEWS8.map(function (x) { return '<button type="button" class="' + cls + '" data-act="tab" data-tab="' + x[0] + '" aria-current="' + (t === x[0] ? "page" : "false") + '"><b>' + x[1] + "</b><span>" + x[2] + "</span></button>"; }).join(""); };
    var h = "";
    if (multi()) {
      h += '<p class="mlab">Your Rooms</p><div class="mgroup"><div class="mi room here"><b>Your Page</b><span>Walk your own road</span></div>' + views("mi mv") + "</div>";
      h += '<a class="mi room" href="' + ROOMPAGE.growth + '"><b>Your Growth</b><span>Get filled for the work</span></a><a class="mi room" href="' + ROOMPAGE.desk + '"><b>Your Desk</b><span>Care for your men</span></a>';
    } else h += '<p class="mlab">Your Page</p><div class="mgroup">' + views("mi") + "</div>";
    var hi = helpItem8();
    h += '<div class="mfoot">' + (V().bare ? "" : '<button type="button" class="mi" data-act="' + hi[0] + '"><b>' + hi[1] + "</b><span>" + hi[2] + "</span></button>") + '<button type="button" class="mi" data-act="settings"><b>Settings</b><span>Notices and what you share</span></button></div>';
    return h;
  }
  function roomsHtml() {
    return '<div class="mi room" aria-current="page"><b>Your Page</b><span>Walk your own road</span></div><a class="mi room" href="' + ROOMPAGE.growth + '"><b>Your Growth</b><span>Get filled for the work</span></a><a class="mi room" href="' + ROOMPAGE.desk + '"><b>Your Desk</b><span>Care for your men</span></a>';
  }
  /* the band runs the full width of the window, measured from the page itself (never 100vw, which counts the scrollbar); whatever we scroll to lands below the site's top bar */
  function barH() {
    function h(e) { try { var cs = getComputedStyle(e), r = e.getBoundingClientRect(); if ((cs.position === "fixed" || cs.position === "sticky") && r.top <= 2 && r.height > 10 && r.height < 220 && r.width > 300) return Math.round(r.bottom); } catch (x) {} return 0; }
    var best = h(document.querySelector(".lw-topbar") || document.body);
    if (!best) { var c = document.querySelectorAll("header, [class*='topbar'], [class*='header']"); for (var i = 0; i < c.length; i++) { if (host.contains(c[i])) continue; var v = h(c[i]); if (v > best) best = v; } }
    return best || 0;
  }
  function setBar() {
    var root = $("#apgRoot"); if (!root) return;
    var cw = document.documentElement.clientWidth, r = host.getBoundingClientRect();
    root.style.setProperty("--bar", barH() + "px"); root.style.setProperty("--bleed-w", cw + "px"); root.style.setProperty("--bleed-l", (-Math.round(r.left)) + "px");
    var pc = root.querySelector(".pcwrap"); /* the band's words start where the menu's do: the column's left edge, plus its own 28px */
    if (pc) root.style.setProperty("--hero-pad", Math.max(28, Math.round(pc.getBoundingClientRect().left - (r.left - Math.round(r.left)) + 28)) + "px");
  }
  /* AP-SHELL 1, rule 8: on a computer the right column is never longer than the left; what would make it longer moves into the left column, in its order */
  function balance() {
    var m = $(".mainc"), s = $(".side"); if (!m || !s) return;
    var fa = document.activeElement;
    moved.filter(function (p) { return host.contains(p); }).reverse().forEach(function (p) { s.insertBefore(p, s.firstChild); }); moved = [];
    s.hidden = false; m.parentNode.classList.remove("one");
    if (wide()) {
      var first = null;
      while (s.children.length && s.offsetHeight > m.offsetHeight) { var p = s.lastElementChild; m.insertBefore(p, first); first = p; moved.unshift(p); }
      if (!s.children.length) { s.hidden = true; m.parentNode.classList.add("one"); }
    }
    if (fa && fa !== document.activeElement && document.body.contains(fa)) fa.focus({ preventScroll: true });
  }
  function focusSig() {
    var a = document.activeElement; if (!a || !host.contains(a) || a === document.body) return null;
    var p = a.closest(".ap-panel");
    if (a.id) return { sel: "#" + a.id, p: p && p.id };
    var sel = a.tagName.toLowerCase() + ["act", "v", "k", "id", "tab", "n"].filter(function (x) { return a.dataset[x] != null; }).map(function (x) { return "[data-" + x + '="' + String(a.dataset[x]).replace(/"/g, '\\"') + '"]'; }).join("");
    return { sel: sel, p: p && p.id };
  }
  function restoreFocus(fs, keepIt) {
    if (!keepIt) return;
    if (!fs) return; var n = null; try { n = host.querySelector(fs.sel); } catch (e) {}
    if (!n && fs.p) { var pp = document.getElementById(fs.p); if (pp) n = pp.querySelector(".kept a,.kept button,.walk,button,textarea,input,a"); }
    if (n) n.focus({ preventScroll: true });
  }

  /* ───────────── This Week ───────────── */
  var WKASK = {
    half: { line: "The second half begins. You choose one person from your own life to walk with you after the course.", src: "ap-witness rule 3a" },
    wif: { line: "Where I’m From, about ten minutes, after the reading.", t: "Twenty-six small questions, and a poem builds itself out of what you already know. About ten minutes." }
  };
  function isWif(n) { return /^where i.?m from$/i.test(String(n || "").replace(/’/g, "'").trim()); }
  function ctxNote() { var c = courseCtx(); return c || "No course yet · free to start"; }
  function welcomeBody() {
    return '<p class="t">Your home base for the week.</p><p class="verse" style="margin-top:10px">“Stand by the roads, and look, and ask for the ancient paths, where the good way is; and walk in it, and find rest for your souls.”<span>Jeremiah 6:16 (ESV)</span></p><p class="s">Each week this page shows you what your course asks of you, keeps what you write, and connects you with the people walking with you, so what you learn becomes how you live.</p>' +
      '<div class="srows"><p><span class="rm">This Week</span>Stand and look: what your week asks, and a check-in with your witness.</p><p><span class="rm">Story</span>Remember the way: what you did, what you saw, what you know now, and your own writing.</p><p><span class="rm">Path</span>Ask for the good way: your courses, what’s next, and in time, walking with another man.</p></div>' +
      '<div class="part"><p class="t" style="font-size:19px">Tell your story. Offer your testimony. Be known in community.</p><p class="s">There is no order to keep. All of it is open to you.</p></div>';
  }
  function inviteForm(next) {
    var w = UI.wf, h = '<p class="t" style="font-size:19px;margin-top:14px">Who would you ask?</p><div class="choices roles" role="radiogroup" aria-label="Who would you ask?">' + WROLES.map(function (r) { return choice8("wrole", r[0], esc(r[1].replace(/^An? /, "")), w.role === r[0] && !!w.picked); }).join("") + "</div>";
    if (w.picked) h += '<label class="sr" for="avWn">Their name</label><input id="avWn" type="text" placeholder="Their name" maxlength="80" value="' + esc(UI.drafts.avWn || "") + '" autocomplete="off"><label class="sr" for="avWe">Their email</label><input id="avWe" type="email" placeholder="Their email" maxlength="120" value="' + esc(UI.drafts.avWe || "") + '" autocomplete="off"><button type="button" class="btn' + (next ? "" : " line") + '" data-act="invite">Send the invitation</button><p class="kept" id="avWs" aria-live="polite"></p><p class="help">They read what a witness does and say yes before they see anything of yours.</p>';
    return h;
  }
  function inviteSent() { return !!(inviteYes() || inviteWaiting()); }
  function waitsLine() { return teamOnly8() ? "Until then, our team walks with you" : (walkYes() ? walkYes().name : "Your group’s leader") + " walks with you" + (V().ended ? "" : " until the course ends"); }
  function inviteStatus() {
    var y = inviteYes(), v = V();
    if (y) { var last = lastNightIso(), from = v.ended ? "now" : (last ? "from " + shortDay(dayAfter(last)) : "after " + esc(v.course || "your course")); return '<p class="kept" id="wik" tabindex="-1"><b>Accepted.</b> ' + esc(y.name) + ", your " + esc(y.role) + ", walks with you " + from + "." + (v.ended ? "" : " " + (walkYes() ? "" : "Your group’s leader walks with you until the course ends.")) + "</p>"; }
    return '<p class="kept" id="wik" tabindex="-1"><b>Invited.</b> ' + esc(WITNESS_SENT.replace(/^Kept\. /, "").replace(/ Until then, our team walks with you\.$/, "")) + " " + esc(waitsLine()) + '.</p><div class="walks" style="margin-top:0">' + walk8("wchange", "Change who you asked") + "</div>";
  }
  function unreadView() {
    return '<main class="view cols2"><div class="mainc">' + secHtml("calm", "Next Step", "Your week did not open", '<p class="t">Your week did not open just now.</p><p class="s">Try again in a moment. What you have kept is safe.</p><div class="walks">' + walk8("retry", "Try again") + "</div>") + "</div></main>";
  }
  function lastWeekLine() {
    var L = V().lastWeek; if (!L) return "";
    var c = [];
    if (L.mark && PATHWORD[L.mark]) c.push("you marked " + PATHWORD[L.mark] + (L.word ? " and named it " + L.word : ""));
    if (L.helped === "met") c.push("your For Your Road piece helped");
    if (L.practice) c.push("you named your practice, “" + L.practice + "”");
    if (!c.length) return "";
    var when = L.recent === false ? "The last week you were here" : "Last week", s = when + " " + c[0] + ".";
    if (c.length > 1) s += " " + uc1(c.slice(1).join(", and ")) + ".";
    s = s.replace(/\.”\.$/, ".”");
    return '<p class="help"><b>' + esc(when) + "</b> " + esc(s.slice(when.length + 1)) + "</p>";
  }
  function nextKind() {
    var v = V(), d = doneNow();
    if (v.bare) return "";
    if (v.ended) return "ended";
    if (unreadNote()) return "letter";
    if (v.after) return "after";
    if (!v.course) return "choose";
    if (secondHalf() && !inviteYes() && !inviteWaiting() && !(data.witness && data.witness.waiting)) return "invite";
    if (!d.check) return "checkin";
    var s = storyRow(); if (s && !s.done) return "piece";
    return "ready";
  }
  function nextPanel() {
    var v = V(), nk = nextKind(), wk = wkN(), W = wCap(), body = "", nt = ctxNote(), day = meetDay(), p = piece(), d = doneNow();
    var bef = group() ? "before " + (day || "your group’s night") : "this week";
    if (nk === "letter") {
      nt = "From " + W; body = '<p class="t">' + (group() && leaderKnown() ? "Your group’s leader wrote to you." : "Your witness wrote to you.") + '</p><p class="s">A letter from your witness, kept here to read whenever you want.</p><button type="button" class="btn" data-act="letter">Read it</button>';
    } else if (nk === "ended") {
      var y = walkYes(), n = newestNote();
      nt = esc(v.course || "Your course") + " · finished";
      body = (y ? '<p class="t">' + esc(v.course) + " is finished, and " + esc(y.name) + ' walks with you now.</p><p class="s">Every week in your own words. Set a stone for what God did in them, so it is remembered and spoken back to you.</p><a class="btn" href="' + PAGES.stones + '">Set a stone</a>' :
        '<p class="t">' + esc(v.course || "Your course") + ' is finished.</p><p class="s">Every week in your own words. ' + (group() ? (leaderKnown() ? "Your group’s leader walked them with you; now" : "Our team walked them with you; now") : "Now") + " choose one person to walk the road from here: a mentor, a coach, a close friend, a pastor or a relative.</p>" + (inviteSent() ? inviteStatus() : inviteForm(true)));
      if (v.carried) body += '<p class="kept" style="margin-top:14px"><b>Carry it forward.</b> The practice you’re keeping: ' + esc(v.carried.replace(/\.$/, "")) + (v.when ? ", " + esc(lc1(rhythmOfWhen(v.when))) : "") + ". Your road goes on; new pieces keep coming at your rhythm.</p>";
    } else if (nk === "after") {
      nt = esc(v.course || "") + " · " + esc(ctxLabel() || "this week") + " starts now";
      var wd = d.wed, wt = UI.drafts.avWed || "", q = "What did you take from " + esc(day || "your group’s night") + "?";
      body = wd ? '<p class="kept" style="margin-top:0"><b>Kept.</b> In Your Story: “' + esc(v.wedText || UI.drafts.avWedKept || "") + "”</p>" : '<label class="t" for="avWed" style="display:block">' + q + '</label><textarea id="avWed" maxlength="2000" placeholder="One line is enough.">' + esc(wt) + '</textarea><button type="button" class="btn" data-act="keepwed">Keep it</button><p class="kept" id="avWedS" aria-live="polite"></p>';
      if (wd) body += (!d.choose ? '<p class="t" style="margin-top:14px">Choose your practice for this week.</p><button type="button" class="btn" data-act="choose">Choose a practice</button>' : '<p class="t" style="margin-top:14px">You’re carrying it well.</p><p class="s">A new piece comes at your own pace.</p>');
    } else if (nk === "choose") {
      nt = "No course yet · free to start";
      body = '<p class="t">Choose a course to walk.</p><p class="s">The topics you follow set the direction for your week. Every course here is free to start, and yours to keep.</p><button type="button" class="btn" data-act="tab" data-tab="path">See the courses</button>';
    } else if (nk === "invite") {
      nt = esc(v.course) + " · " + esc(ctxLabel()) + " · the second half";
      var ln = lastNightIso();
      body = '<p class="t">Who will walk with you after ' + esc(v.course) + '?</p><p class="s">Now, in the second half, choose one person from your own life to walk your road with you when the course ends: a mentor, a coach, a close friend, a pastor or a relative. ' + esc(teamOnly8() ? "Our team" : walkYes() ? walkYes().name : "Your group’s leader") + " walks with you" + (ln ? " until " + shortDay(ln) : " until the course ends") + ".</p>" + inviteForm(true);
    } else if (nk === "checkin") {
      nt = courseCtx() + " · " + bef;
      body = '<p class="t">Check in for ' + (group() ? esc(ctxLabel() || "this week") : "this week") + '.</p><p class="s">About a minute: the path you marked, a word for it, how your practice went, and your practice for this week. ' + (group() ? esc(W) + " reads your check-in, and what you choose to share, before your group meets." : "Our team reads it this week.") + '</p><button type="button" class="btn" data-act="checkin">Check in</button>';
    } else if (nk === "piece") {
      var s = storyRow();
      nt = courseCtx() + " · " + bef;
      body = '<p class="kept" style="margin-top:0" id="cik" tabindex="-1"><b>Checked in.</b> It’s in your story. ' + esc(W) + ' reads your check-in, and what you choose to share, before your group meets.</p><p class="t" style="margin-top:14px">' + esc(writeName(s.it.title)) + " " + bef + '.</p><p class="s">Your course asks it this week.</p><a class="btn" href="' + esc(s.it.href || PAGES.story) + '">' + (s.it.begun ? "Continue" : "Begin") + "</a>";
    } else {
      nt = courseCtx() + " · " + (group() ? "ready for " + esc(day || "your group’s night") : "this week");
      body = '<p class="kept" style="margin-top:0" id="cik" tabindex="-1"><b>' + (d.check ? "Checked in." : "Ready.") + "</b> " + (d.check ? "It’s in your story. " + (group() ? esc(W) + " reads your check-in, and what you choose to share, before your group meets." : "Our team reads it this week.") : "Nothing waits on you.") + "</p>" + lastWeekLine() + '<p class="t" style="margin-top:14px">' + (group() ? "You’re ready for " + esc(day || "your group’s night") + "." : "You’re ready for this week.") + '</p><div class="walks">' + walk8("tab", "Read your story", ' data-tab="house"') + "</div>";
    }
    if (nk === "checkin" || nk === "piece") { var lw = lastWeekLine(); if (lw && nk === "checkin") body += lw; }
    return secHtml("mnext", "Next Step", nt, body);
  }
  function aheadRow(done, lab, name, small, way) {
    return '<div class="wrow"><span class="ring' + (done ? " done" : "") + '" aria-hidden="true"></span><div><span class="lab">' + lab + '</span><span class="nm">' + name + "</span><small>" + (done ? "Done · " : "") + small + "</small>" + (way ? '<div class="walks">' + way + "</div>" : "") + '</div><span class="sr">' + (done ? "done" : "not done yet") + "</span></div>";
  }
  function weekAhead() {
    var v = V(), d = doneNow(), p = piece(), rows = [], day = meetDay(), lab = ctxLabel(), nk = nextKind(), s = storyRow(), cl = v.course ? esc(v.course) + " · " : "";
    if (v.bare || v.ended) return "";
    var m = v.meet || {};
    if (!v.course) {
      rows.push(aheadRow(false, "Course", "Choose a course", "The topics you follow set the direction for your week", walk8("tab", "See the courses", ' data-tab="path"')));
    } else {
      rows.push('<div class="wrow"><span class="ring' + (d.course ? " done" : "") + '" aria-hidden="true"></span><div><span class="lab">' + cl + (lab ? esc(lab) : "Your course") + '</span><span class="nm">' + esc(lab ? "Read " + lab + (group() ? ", then your room" : "") : "Open " + v.course) + "</span><small>" + (d.course ? "Done · " : "") + (v.unit && v.unit.title ? "“" + esc(v.unit.title) + "”" : esc(v.course)) + (group() ? " · " + nw("before " + esc(day || "your group’s night")) + (m.time && day ? " · " + nw("your room meets " + esc(day) + ", " + esc(central(m.time))) : "") : "") + '</small><div class="walks"><a class="walk" href="' + esc(courseHref(v.course)) + '" target="_blank" rel="noopener" data-act="course"><span class="u">' + esc(lab ? "Open " + lab : "Open " + v.course) + '</span>&nbsp;<span class="ar">→</span></a></div></div><span class="sr">' + (d.course ? "done" : "not done yet") + "</span></div>");
    }
    rows.push(aheadRow(d.check, cl + "Check in", "Check in for " + (group() && lab ? esc(lab) : "this week"), nw("1 minute") + " · " + nw(d.check ? "kept in your story" : "today"), d.check ? walk8("tab", "Read your story", ' data-tab="house"') : (nk === "checkin" ? "" : walk8("checkin", "Check in"))));
    if (p) rows.push(aheadRow(!!p.opened, cl + "Readings", esc(smart(p.claim)), nw(p.minutes ? esc(uc1(p.minutes)) : esc(actOf(p) + " it when you’re ready")) + (p.opened ? " · " + nw("opened " + esc(p.openedDay || p.opened)) : ""), walk8("piece", p.opened ? "Read it again" : "Read it")));
    else rows.push(aheadRow(false, "Readings", "Your first reading", "It lands here with your next morning’s reading", ""));
    var pr = v.practice;
    rows.push(aheadRow(false, "Practice", pr ? esc(pracShort(pr)) : "Choose your practice", pr ? nw("all week") + (v.when ? " · " + nw(esc(rhythmOfWhen(v.when))) : "") : nw("from this week’s list"), walk8("choose", pr ? "Change it" : "Choose")));
    if (s) rows.push(aheadRow(s.done, cl + "Story", esc(writeName(s.it.title)), nw(s.done ? "kept in Story" : s.it.begun ? "begun" : "your course asks it this week"), sameWalk(s.it.href || PAGES.story, s.done ? "Your words" : s.it.begun ? "Continue" : "Begin")));
    return secHtml("before", "The Week Ahead", ctxNote(), '<p class="s" style="margin-top:0">One new thing a day, at most.</p><div class="ahead">' + rows.join("") + "</div>");
  }
  function witPanel() {
    var v = V(), tw = teamOnly8(), n = unreadNote() || newestNote(), W = witnessName(), y = walkYes(), ended = !!v.ended;
    var role = tw ? "Walks with you until you invite your own" : ended ? "Your " + esc(y ? y.role : "witness") + ", and your witness now" : "Your witness through " + esc(v.course || "your course");
    var h = '<div class="person"><span class="pav" aria-hidden="true">' + (tw ? "A" : "W") + '</span><div><p class="t" style="font-size:18px">' + (tw ? "Our team" : esc(uc1(W))) + '</p><p class="help" style="margin-top:0">' + role + "</p></div></div>";
    h += '<p class="s">' + (tw ? "Our team sees what God is doing in your story, so it is remembered and spoken back to you, until you invite your own witness." : (ended ? "Your witness walks with you now. He sees" : "He sees") + " what God is doing in your story, so it is remembered and spoken back to you.") + "</p>";
    h += '<p class="help">' + (tw ? "Our team reads your check-in, and what you choose to share, and writes at least once a month." : ended ? esc(witFirst()) + " reads your check-in, and what you choose to share, and writes as often as he wants." : "He reads your check-in, and what you choose to share, before your group meets.") + "</p>";
    if (n && !tw) {
      var first = String(n.text || "").split(/\n\s*\n/).map(function (x) { return x.trim(); }).filter(Boolean), body = (first[1] || first[0] || "").split(". ")[0].replace(/\.$/, ""), dt = dparts(n.written) ? shortDay(String(n.written).slice(0, 10)) : "";
      h += '<div class="ruled lt"><p class="lk">' + (unreadNote() ? "A new letter" : "His latest letter") + (dt ? " · " + esc(dt) : "") + '</p><p class="serif">“' + esc(smart(body)) + '…”</p></div><div class="walks" style="margin-top:2px">' + walk8("letter", "Read it") + "</div>";
    }
    h += '<div class="walks">' + walk8("wwrite", "Write to " + him()) + walk8("wisees", "What your witness sees") + "</div>";
    if (tw && !v.ended) h += '<div class="part"><p class="lk">Someone From Your Own Life</p>' + (inviteSent() ? inviteStatus() : '<p class="s" style="margin-top:4px">Invite one person from your own life to walk your road with you, week by week. They read what you choose to share and write to you.</p>' + inviteForm(false)) + "</div>";
    else if (ended && !inviteSent() && !y) h += '<p class="help">Choose who walks with you now in Next Step.</p>';
    else if (!ended && inviteSent() && nextKind() !== "invite") h += '<div class="part"><p class="lk">After ' + esc(v.course || "Your Course") + "</p>" + inviteStatus() + "</div>";
    else if (!ended && group() && !secondHalf() && halfN()) h += '<div class="part"><p class="lk">After ' + esc(v.course || "Your Course") + '</p><p class="s" style="margin-top:4px">' + esc(uc1(W)) + " walks with you until the course ends. Week " + halfN() + " asks who walks with you after.</p></div>";
    var car = (data && data.group && data.group.carried) || [];
    if (group() && !ended && !v.first && car.length) h += '<div class="revs">' + rev8("carried", "What your room carried last week", car.map(function (c) { return '<p class="s" style="margin-top:0"><b>' + esc(smart(c.title)) + ".</b> " + esc(smart(c.body || "")) + "</p>"; }).join("") + '<p class="help">Drawn from what the room said together, never from one man’s words.</p>') + "</div>";
    return secHtml("wit", "Walking With You", tw ? "Our team · until you invite your own" : esc(uc1(W)) + " · " + (ended ? "your witness now" : "your witness through " + esc(v.course || "your course")), h);
  }
  function comeRow(lab, nm, when, line, way) { return '<div class="crow cmr"><span class="lab">' + lab + '</span><p class="nxn">' + nm + '</p><p class="help" style="margin-top:2px">' + when + '</p><p class="s" style="margin-top:4px">' + line + "</p>" + (way ? '<div class="walks" style="margin-top:0">' + way + "</div>" : "") + "</div>"; }
  function weekAsk(w) {
    if (w.half) return { line: WKASK.half.line, way: walk8("witwhat", "What a witness does") };
    if (w.last && w.piece) return { line: esc(w.piece) + " opens " + esc(w.opens) + ". " + esc(w.day) + ", is your room’s last night.", way: sameWalk(pieceHref(w.piece), "See the piece") };
    if (isWif(w.piece)) return { line: WKASK.wif.line, way: sameWalk(pieceHref(w.piece), "See the piece") };
    if (w.piece) return { line: "The reading and your room.", way: sameWalk(pieceHref(w.piece), "See the piece") };
    return { line: "The reading and your room.", way: "" };
  }
  function comingRows() {
    var v = V(), W = aheadWeeks().slice(0, 3), R = [];
    W.forEach(function (w) { var a = weekAsk(w); R.push({ d: w.date, h: comeRow("Week " + w.n, esc(w.name || ""), nw(esc(w.day)), a.line, a.way) }); });
    var ev = v.event; if (ev && ev.date) R.push({ d: ev.date, h: comeRow("Open Night", "The January Rooms", nw(esc(ev.day)), "Rooms for the next stretch, for you and for men who are new.", "") });
    R.sort(function (x, y) { return x.d < y.d ? -1 : x.d > y.d ? 1 : 0; });
    if (wkN() < 6) R = R.slice(0, 4);
    return R;
  }
  function comingPanel() {
    var v = V(); if (v.ended || v.bare || !v.course) return "";
    var R = comingRows(), W = aheadWeeks().slice(0, 3); if (!R.length) return "";
    var a = W.length ? W[0].n : 0, b = W.length ? W[W.length - 1].n : 0;
    var nt = esc(v.course) + " · " + (W.length > 1 ? "Weeks " + a + " to " + b : W.length ? "Week " + b : "Open night") + " · to prepare";
    return secHtml("comingwk", "Coming Weeks", nt, '<div class="crows cms">' + R.map(function (x) { return x.h; }).join("") + '</div><div class="walks">' + (W.length && group() ? walk8("calnights", "Add your Wednesday nights") : "") + walk8("tab", "The whole path", ' data-tab="path"') + "</div>");
  }
  function gpBrief(explained) {
    var v = V(), now = !v.ended && !v.bare && v.course && wmOf(v.guidepost && v.guidepost.n), g = now ? wmOf(v.guidepost.n) : null;
    var h = explained ? '<p class="s" style="margin-top:0">Our framework of care: nine places a man gets stuck, and what helps him move again. They aren’t steps; you can stand at more than one.</p><p class="s">Each week’s reading and practice are chosen for the guidepost you’re at.</p>' : '<p class="s" style="margin-top:0">Each week’s reading and practice are chosen for the guidepost you’re at.</p>';
    if (now) h += '<div class="gpnow"><p class="lk">This week</p><p class="t">' + esc(g.name) + '</p><p class="s" style="margin-top:2px">' + esc(g.one) + " " + esc(String(g.stuck).split(". ")[0]) + '.</p><div class="walks" style="margin-top:0">' + walk8("gp", "Open it", ' data-n="' + g.n + '"') + "</div></div>";
    if (explained) {
      h += '<p class="s">Want to work on this with someone?</p><div class="walks" style="margin-top:0">' + linkWalk(LETSTALK, "Talk with a coach") + "</div>";
      h += '<div class="revs">' + rev8("allnine", "See all nine", '<div class="gpl">' + WAYMARKS.filter(function (x) { return !now || x.n !== g.n; }).map(function (x) { return '<button type="button" class="gprow" data-act="gp" data-n="' + x.n + '"><span class="gpn">' + esc(x.name) + '</span><span class="gps">' + esc(x.one) + '</span><span class="ar" aria-hidden="true">→</span></button>'; }).join("") + "</div>") + '</div><p class="help">' + COUNSEL + "</p>";
    }
    var me = gpMeNames(); if (me.length) h += '<p class="help">You said you’re at ' + me.map(esc).join(" and ") + ".</p>";
    return secHtml("gpb", "Guidepost", now ? "This week · " + esc(g.name) : "Nine places a man gets stuck", h);
  }
  function viewWeek8() {
    var v = V();
    if (S8.unread) return unreadView();
    var welcome = (v.first && !v.bare && !welcomedYet()) ? secHtml("welcome", "What This Page Is For", "Your home base for the week · Jeremiah 6:16", welcomeBody() + '<div class="walks">' + walk8("welcomed", "Start with this week") + "</div>") : "";
    var main = welcome + nextPanel() + witPanel() + weekAhead();
    var side = comingPanel() + (v.ended ? "" : gpBrief(false));
    return '<main class="view cols2"><div class="mainc">' + main + '</div><aside class="side">' + side + "</aside></main>";
  }

  /* ───────────── Path ───────────── */
  function pathLead() {
    return '<div class="vlead"><p>Path is where you see the road ahead and choose your next step with us. <span class="vref">“Ask for the ancient paths, where the good way is; and walk in it.” Jeremiah 6:16 (ESV)</span></p></div>';
  }
  var NUMW = { 4: "Four", 5: "Five", 6: "Six", 8: "Eight", 10: "Ten", 12: "Twelve", 13: "Thirteen" };
  function stopsFor() {
    var v = V(), L = [], ev = v.event, wk = wkN(), W = aheadWeeks(), y = inviteYes(), m = v.meet || {}, course = v.course || "";
    var jan = ev && ev.day ? { k: "jan", lab: "January", nm: "January Rooms", when: "Applications open at the open night, " + ev.day, t: "Rooms for the next stretch, for you and for men who are new. Applications open at the open night, " + ev.day + ".", way: "" } :
      { k: "jan", lab: "January", nm: "January Rooms", when: "January", t: "Rooms for the next stretch begin in January. Talk with our team about a seat.", way: linkWalk(PAGES.team, "Talk with our team") };
    if (v.bare) return [jan];
    if (!course) { L.push({ k: "now", lab: "Now", nm: "Choose a Course", when: "Any time", t: "Every course here is free to start, and yours to keep. Known by Jesus is a good first one.", way: walk8("tab", "See this week", ' data-tab="week"'), now: 1 }); L.push(jan); return L; }
    if (v.ended) {
      var tot = v.total && NUMW[v.total] ? NUMW[v.total] + " weeks, every chapter in your own words, kept in Story." : "Every week in your own words, kept in Story.";
      L.push({ k: "bf", lab: "Finished", nm: course, when: "Finished", t: tot, way: walk8("tab", "Read your story", ' data-tab="house"'), done: 1 });
      L.push(y ? { k: "now", lab: "Now", nm: "Your Witness", when: "Now", t: esc(y.name) + ", your " + esc(y.role) + ", walks your road with you now.", way: walk8("tab", "See this week", ' data-tab="week"'), now: 1 } : { k: "now", lab: "Now", nm: "Your Witness", when: "Now", t: "Choose one person from your own life to walk your road from here.", way: walk8("tab", "See this week", ' data-tab="week"'), now: 1 });
      L.push(jan); return L;
    }
    if (!group()) {
      L.push({ k: "now", lab: "Now", nm: ctxLabel() || course, dt: course, when: "At your pace", t: esc(course) + (ctxLabel() ? ", " + esc(ctxLabel()) : "") + (v.unit && v.unit.title ? ": “" + esc(v.unit.title) + ".”" : "."), way: walk8("tab", "See this week", ' data-tab="week"'), now: 1 });
      L.push(jan); return L;
    }
    var whenNow = "Week " + wk + (m.date ? " · " + esc(longDay(m.date)) : "");
    var nowW = W.filter(function (w) { return w.n === wk; })[0];
    L.push({ k: "now", lab: "Now", nm: "Week " + wk, dt: v.unit && v.unit.title ? v.unit.title : "Week " + wk, when: whenNow, t: "Your room meets at " + esc(central(m.time || "")) + "." + (v.unit && v.unit.title ? "" : ""), way: walk8("tab", "See this week", ' data-tab="week"'), now: 1 });
    W.forEach(function (w) {
      var a = weekAsk(w);
      if (w.half) L.push({ k: "w" + w.n, lab: "Week " + w.n, nm: "Your Witness", when: "Week " + w.n + " · " + esc(w.day), t: WKASK.half.line + " A mentor, a coach, a close friend, a pastor or a relative.", way: a.way });
      else if (w.last) L.push({ k: "w" + w.n, lab: "Week " + w.n, nm: w.piece || "The Last Night", when: "Week " + w.n + " · " + esc(w.day), t: (w.piece ? esc(w.piece) + " opens " + esc(w.opens) + ". " : "") + "Your room’s last night." + (y ? " " + esc(y.name) + " walks with you from " + shortDay(dayAfter(w.date)) + "." : ""), way: a.way });
      else if (w.piece) L.push({ k: "w" + w.n, lab: "Week " + w.n, nm: esc(w.piece), when: "Week " + w.n + " · " + esc(w.day), t: isWif(w.piece) ? WKASK.wif.t : esc(w.piece) + ", in the week your course asks for it.", way: a.way });
    });
    L.push(jan);
    return L;
  }
  function pathAheadPanel() {
    var v = V(), L = stopsFor(), ni = Math.max(0, L.map(function (s) { return !!s.now; }).indexOf(true)), def = (L[ni + 1] || L[ni]).k;
    var cur = S8.stop && L.some(function (s) { return s.k === S8.stop; }) ? S8.stop : def, sel = L.filter(function (s) { return s.k === cur; })[0];
    var line = '<ol class="pa" style="--n:' + L.length + '">' + L.map(function (s) { var on = s.k === cur; return '<li><button type="button" class="pas' + (s.now ? " now" : "") + (s.done ? " done" : "") + '" data-act="stop" data-v="' + s.k + '" aria-pressed="' + on + '"><span class="pad" aria-hidden="true"></span><span class="pal">' + s.lab + '</span><span class="pan">' + s.nm + "</span></button></li>"; }).join("") + "</ol>";
    var det = '<div class="pdet" id="pdet" tabindex="-1"><p class="lk">' + sel.when + '</p><p class="t" style="margin-top:2px">' + (sel.dt || sel.nm) + '</p><p class="s" style="margin-top:4px">' + sel.t + "</p>" + (sel.way ? '<div class="walks" style="margin-top:2px">' + sel.way + "</div>" : "") + "</div>";
    var nt = v.ended ? esc(v.course || "") + " · finished" : !v.course ? "No course yet · free to start" : group() ? esc(v.course) + " · " + esc(ctxLabel()) + (ahead().total ? " of " + ahead().total : "") + (lastNightIso() ? " · to " + shortDay(lastNightIso()) : "") : esc(v.course) + " · at your pace";
    return secHtml("ahead", "The Path Ahead", nt, line + det);
  }
  function nx(what, when, cost, way) { return '<div class="nx"><p class="nxn">' + what + '</p><p class="help" style="margin-top:2px">' + when + "</p>" + (cost ? '<p class="s" style="margin-top:2px">' + cost + "</p>" : "") + '<div class="walks" style="margin-top:0">' + way + "</div></div>"; }
  function nextSteps() {
    var v = V(), ev = v.event, one, rest = [], ended = !!v.ended, y = inviteYes();
    var rooms = nx("The January Rooms", ev && ev.day ? "Applications open at the open night, " + esc(ev.day) : "Rooms for the next stretch begin in January", "", linkWalk(PAGES.team, "Talk with our team"));
    var coach = nx("One-on-One Coaching", "An hour with a coach who has walked this path, when you choose", "Talk with us first; the first thirty minutes are free", linkWalk(LETSTALK, "Let’s talk"));
    var talk = nx("A Free Conversation", "Thirty minutes, any week; there is nothing to prepare", "Free", linkWalk(CAL, "Book a free 30-minute conversation"));
    var kbj = function (when, label) { return nx("Known by Jesus", when, "Free", sameWalk(courseHref("Known by Jesus"), label)); };
    if (!v.course) { one = kbj("Self-paced, start tonight", "Start the study"); rest = [rooms, coach, talk]; }
    else if (ended) {
      var stone = nx("Set a Stone for " + esc(v.course), "Any time; three months on, it comes back to you", "Free", sameWalk(PAGES.stones, "Set a stone"));
      var offer = nx("Offer Your Story", "Any time; our team reads it with care, and nothing goes up without your yes", "Free", sameWalk(PAGES.story, "Story to Testimony"));
      if (!inviteYes() && !inviteWaiting()) { one = nx("Invite Your Witness", "One person from your own life, to walk your road from here", "Free", walk8("tab", "Invite your witness", ' data-tab="week"')); rest = [offer, stone]; }
      else { one = offer; rest = [stone]; }
      rest = rest.concat([kbj("It leads now, at your pace", "Continue Part Two"), rooms, coach, talk]);
    } else if (!group()) { one = kbj("Self-paced, Part Two is next", "Continue Part Two"); rest = [rooms, coach, talk]; }
    else {
      var ln = lastNightIso();
      one = nx("Finish " + esc(v.course) + (ln ? ", " + esc(shortDay(ln)) : ""), ln ? "Your room’s last night is " + esc(longDay(ln)) + ", at " + esc(central((v.meet || {}).time || "")) : "Your room meets " + esc(meetDay()), "Free for this first trek", sameWalk(courseHref(v.course), "Continue " + (ctxLabel() || "your course")));
      rest = [kbj("Self-paced, whenever you are ready", "Continue Part Two"), rooms, coach, talk];
    }
    return '<div class="nx1">' + one + '</div><div class="revs">' + rev8("otherways", "Other ways to walk with us", rest.join("")) + "</div>";
  }
  function courseImg(name) {
    var n = norm(name), cards = document.querySelectorAll(".ap-card.ap-course, a.ap-ccard"), i, t, im;
    for (i = 0; i < cards.length; i++) { t = cards[i].querySelector(".ap-card-title, .ap-ccard-name"); im = cards[i].querySelector("img"); if (t && im && norm(t.textContent) === n) return im.getAttribute("src") || ""; }
    return "";
  }
  function courseCardP(c, line, sub, way) {
    var img = courseImg(c.name);
    return '<div class="ap-home"><div class="ap-courses"><a class="ap-ccard" href="' + esc(c.href) + '" target="_blank" rel="noopener">' + (img ? '<img class="ap-ccard-img" src="' + esc(img) + '" alt="">' : '<span class="ap-ccard-img"></span>') + '<div class="ap-ccard-body"><p class="ap-ccard-name">' + esc(c.name) + '</p><p class="ap-ccard-line">' + line + "</p>" + (sub ? '<p class="ap-ccard-sub">' + sub + "</p>" : "") + '<p class="ap-ccard-way"><span>' + way + "</span></p></div></a></div></div>";
  }
  function coursesBody() {
    var v = V(), list = pathCourses(), cur = null;
    if (!v.ended && v.course) cur = list.filter(function (c) { return norm(c.name) === norm(v.course); })[0] || { name: v.course, state: "Yours", href: courseHref(v.course) };
    var hasPieces = !!(aheadWeeks().some(function (w) { return w.piece; }) || writeList(data).length);
    var h = "";
    if (cur) {
      var line = group() ? "Week " + (wkN() || "") + " reading: " + '<span class="ap-nw">' + esc((v.unit && v.unit.title) || "") + "</span>" : (v.unit && v.unit.title ? esc(ctxLabel() || "This week") + ": " + '<span class="ap-nw">' + esc(v.unit.title) + "</span>" : "Yours");
      var m = v.meet || {}, sub = group() && meetDay() ? "Your room meets " + esc(longDay(m.date) || meetDay()) + ", " + '<span class="ap-nw">at ' + esc(central(m.time || "")) + "</span>" : "";
      h += courseCardP(cur, line, sub, "Continue") + (hasPieces ? '<div class="walks">' + walk8("tab", "Its story pieces are in Story", ' data-tab="house"') + "</div>" : "");
    }
    var rest = list.filter(function (c) { return !cur || norm(c.name) !== norm(cur.name); });
    h += '<div class="crows">' + rest.map(function (c) {
      var st = /^Complete$/i.test(c.state) ? "Finished" : c.state, way = /^Complete$/i.test(c.state) ? "Look back" : /^Free/i.test(c.state) ? "Start" : "Continue";
      return '<div class="crow"><p class="nxn">' + esc(c.name) + '</p><p class="help" style="margin-top:2px">' + esc(st) + '</p><div class="walks" style="margin-top:0">' + sameWalk(c.href, way) + "</div></div>";
    }).join("") + "</div>";
    if (!cur && !rest.length) h = '<p class="s" style="margin-top:0">Your courses show here.</p>';
    return h;
  }
  function anotherPanel() {
    return secHtml("another", "Walk With Another Man", "After a course · becoming a witness", '<p class="s" style="margin-top:0">After a course, a man can become another man’s witness, and later train to lead a group.</p><div class="revs">' + rev8("anotherrev", "How a man becomes a witness", '<p class="s" style="margin-top:0">A witness is a mentor, a coach or a trusted friend who walks with a man. He listens deeply, speaks truth with compassion, and challenges him to grow. After a course, you can be that for someone: you read what he chooses to share and write to him, and our team walks with you. Later, if you’re asked, you can train to lead a group.</p><div class="walks">' + linkWalk(PAGES.team, "Tell our team you’d like to") + "</div>") + "</div>");
  }
  function witBrief() {
    var tw = teamOnly8(), n = unreadNote(), W = witnessName();
    var h = '<div class="person"><span class="pav" aria-hidden="true">' + (tw ? "A" : "W") + '</span><div><p class="t" style="font-size:18px">' + (tw ? "Our team" : esc(uc1(W))) + '</p><p class="help" style="margin-top:0">' + (tw ? "Walks with you until you invite your own" : V().ended ? "Your witness now" : "Your witness through " + esc(V().course || "your course")) + '</p></div></div><div class="walks">' + (n ? walk8("letter", "Read his letter") : "") + walk8("wwrite", "Write to " + him()) + "</div>";
    return secHtml("witb", "Walking With You", tw ? "Our team" : "Your witness", h);
  }
  function pathDoors() {
    return secHtml("doors", "Doors", "Talk with us · the writing", '<div class="walks" style="flex-direction:column;margin-top:0">' + sameWalk(PAGES.team, "Talk With Our Team") + linkWalk(CAL, "Book a free 30-minute conversation") + sameWalk("/your-story?from=start&view=path", "Every piece you can write") + sameWalk(PAGES.profile, "Your Profile") + walk8("welcome", "What This Page Is For") + "</div>");
  }
  function viewPath8() {
    var v = V();
    if (S8.unread) return unreadView();
    var main = pathAheadPanel() + secHtml("whatnext", "What’s Next", "One step · other ways behind it", nextSteps()) + secHtml("courses", "Courses", group() ? esc(v.course) + " leads · the rest at your pace" : "Free to start, and yours to keep", coursesBody()) + anotherPanel();
    return pathLead() + '<main class="view cols2"><div class="mainc">' + main + '</div><aside class="side">' + gpBrief(true) + witBrief() + pathDoors() + "</aside></main>";
  }

  /* ───────────── the guidepost as an act: signs you're here, That's me, one practice, a reading on it, a coach ───────────── */
  function firstSent(t) { var s = String(t || "").replace(/\s+/g, " ").trim(), m = /^[^.?!]*[.?!]/.exec(s); return m ? m[0] : s; }
  function gpHtml(n) {
    var g = wmOf(n); if (!g) return '<p class="s">This guidepost did not open.</p>';
    var t = tryOf(g), G = gpState(), me = G.here.indexOf(n) >= 0 ? "me" : G.not.indexOf(n) >= 0 ? "not" : "", rd = G.readings[n], used = G.use === n, W = witnessName(), tw = teamOnly8();
    var h = '<p class="lk">The Nine Guideposts</p><p class="ckq">' + esc(g.name) + '</p><p class="t" style="font-size:18px;margin-top:4px">' + esc(g.one) + "</p>";
    h += '<div class="part"><p class="lk">Signs You’re Here</p><p class="s" style="margin-top:4px">' + esc(g.stuck) + '</p><p class="help">' + esc(g.sounds) + "</p>" +
      '<p class="t sm" style="margin-top:16px">Is this where you are?</p><div class="choices two">' + choice8("gpme", "me", "That’s me", me === "me", "", ' data-n="' + n + '"') + choice8("gpme", "not", "Not now", me === "not", "", ' data-n="' + n + '"') + "</div>" +
      (S8.gpSay ? '<p class="kept" id="gpk" tabindex="-1">' + S8.gpSay + "</p>" : me === "me" ? '<p class="kept" id="gpk" tabindex="-1"><b>That’s an honest place to stand.</b> Your readings lean here. It stays with you unless you share the guidepost in Settings.</p><div class="walks" style="margin-top:0">' + walk8("wwrite", tw ? "Tell our team" : "Tell " + esc(W)) + walk8("hand", "If it’s heavy tonight: I need a hand") + "</div>" : me === "not" ? '<p class="kept" id="gpk" tabindex="-1"><b>Noted.</b> Your readings won’t lean here for now. It stays under See all nine.</p>' : "") + "</div>";
    h += '<div class="part"><p class="lk">One Practice' + (t.name ? " · " + esc(t.name) : "") + '</p><p class="habit">' + esc(t.text) + "</p>" + (used ? '<p class="kept" id="gpu" tabindex="-1"><b>Kept.</b> It’s your practice this week; your check-in carries it, and next week you’ll say how it went.</p>' : '<p class="t sm" style="margin-top:12px">Make it this week’s practice?</p><button type="button" class="btn line" data-act="gpuse" data-n="' + n + '">Use it</button>' + (S8.gpUseSay ? '<p class="kept" id="gpu" tabindex="-1">' + S8.gpUseSay + "</p>" : "")) + "</div>";
    if (rd && rd.road) h += '<div class="part"><p class="lk">A Reading on It</p><p class="s" style="margin-top:4px">' + tie(firstSent(rd.road)) + '</p><p class="help">' + esc(String(rd.voice || "").split(" · ")[0]) + (rd.cost ? " · " + esc(rd.cost) : "") + '</p><div class="walks" style="margin-top:0">' + (rd.link ? linkWalk(rd.link, esc(/^(Read|Listen|Watch)$/.test(rd.act) ? rd.act : "Read"), "gpread") : "") + "</div></div>";
    h += '<div class="part"><p class="lk">Talk With a Coach</p><p class="s" style="margin-top:4px">Want to work on this with someone who has walked it? The first thirty minutes are free.</p><div class="walks" style="margin-top:0">' + linkWalk(LETSTALK, "Talk with a coach") + "</div></div>";
    h += '<div class="revs" style="margin-top:8px">' + rev8("gpwhy" + n, "Why this helps", '<p class="lk" style="margin-top:4px">What Is Happening</p><p class="s" style="margin-top:4px">' + esc(g.is_ || "") + "</p>" + (g.applied ? '<p class="s">' + esc(g.applied) + "</p>" : "") + '<p class="lk" style="margin-top:14px">In Scripture</p><p class="s" style="margin-top:4px">' + esc(g.scripture || "") + '</p><div class="ruled"><p class="lk">Carry This Question</p><p class="serif">' + esc(g.carry) + '</p></div><p class="help">What helps here: ' + esc(g.helps || "") + "</p>") + '</div><p class="help">' + COUNSEL + "</p>";
    return h;
  }

  /* ───────────── sheets (← Back to the view, never Close), the toast, and what each one holds ───────────── */
  function openSheet8(title, html, from) {
    lastFocus8 = document.activeElement; S8.fs = focusSig(); S8.sheet = title; S8.sheetFrom = from || "";
    S8.html = '<div class="ohead"><button type="button" class="walk" data-act="close8"><span class="ar">←</span> <span class="u">Back to ' + esc(viewName8()) + '</span></button><span class="lk" id="apgSheetT">' + esc(title) + '</span></div><div class="obody">' + html + "</div>";
    var sh = $("#apgSheet"); sh.innerHTML = S8.html; sh.classList.add("open"); $("#apgDim").classList.add("on");
    setTimeout(function () { var c = sh.querySelector('[data-act="close8"]'); if (c) c.focus(); }, 320);
  }
  function sheetBody8(html) { var ob = $("#apgSheet .obody"); if (ob) { ob.innerHTML = html; S8.html = $("#apgSheet").innerHTML; } }
  function closeSheet8() {
    var sh = $("#apgSheet"); if (!sh) return; sh.classList.remove("open"); var dm = $("#apgDim"); if (dm) dm.classList.remove("on"); S8.sheet = ""; S8.html = "";
    if (lastFocus8 && document.body.contains(lastFocus8)) lastFocus8.focus(); else if (S8.fs) restoreFocus(S8.fs, true); else { var h = $("#apgH1"); if (h) h.focus({ preventScroll: true }); }
  }
  function sheetOpen8() { var sh = $("#apgSheet"); return !!(sh && sh.classList.contains("open")); }
  function toast8(m) { var t = $("#apgToast"); S8.toastM = m; if (t) { t.textContent = m; t.classList.add("in"); } clearTimeout(toastT8); toastT8 = setTimeout(function () { S8.toastM = ""; var t2 = $("#apgToast"); if (t2) t2.classList.remove("in"); }, 2800); }
  function redrawSettings() { if (sheetOpen8() && S8.sheet === "Settings") sheetBody8(settingsHtml8()); }

  function weeklyHtml8() {
    var w = V().weekly, row = function (a, b) { return '<p class="s"><b>' + esc(a) + "</b> " + esc(b) + "</p>"; }, h = "";
    if (!w) return "";
    if (w.path) h += row("The Path:", w.path);
    if (w.piece) h += row("This Week’s Piece:", w.piece);
    if (w.last) h += row("Last Week’s Practice:", w.last);
    if (w.now) h += row("This Week’s:", w.now);
    if (w.guidepost) h += row("The Guidepost:", String(w.guidepost).replace(/^he said he’s at /, "you said you’re at "));
    if (w.words && w.words.length) h += w.words.map(function (x, i) { return '<p class="s">' + (i ? "" : "<b>In Your Words:</b> ") + "“" + esc(x) + "”</p>"; }).join("");
    if (!h) h = '<p class="s">Nothing yet. Your witness sees only what you choose, and your own words stay yours.</p>';
    else if (!(w.words && w.words.length)) h += '<p class="help">Your own words stay yours.</p>';
    return '<div class="ruled"><p class="lk">What Your Witness Sees Each Week</p>' + h + '<p class="help">This is the page, exactly as it reaches ' + esc(witnessName()) + ". Nothing else goes with it.</p></div>";
  }
  function settingsHtml8() {
    var S = V().settings || {}, sh = S.shares || {}, w = witnessName();
    var h = '';
    h += '<p class="t">Your witness’s notes</p><div class="choices two">' + choice8("pause8", "0", "Keep", !S.paused) + choice8("pause8", "1", "Pause", !!S.paused) + '</div><p class="help">No reason is shown. Tell our team any time if something feels off.</p><p class="kept" id="skp" aria-live="polite">' + esc(UI.say.pause || "") + "</p>";
    h += '<p class="t" style="margin-top:22px">What ' + esc(w) + ' sees each week</p><p class="s">The path, the reading and the practice are shared to start; your own words and the guidepost you mark are not. Choose any to keep to yourself.</p><div class="choices">' + SHARES.map(function (x) { return choice8("share8", x[0], esc(x[1]), !!sh[x[0]], "left"); }).join("") + '</div><p class="kept" id="sks" aria-live="polite">' + esc(UI.say.shares || "") + "</p>" + weeklyHtml8();
    return h;
  }
  function handHtml8() {
    var danger = '<div class="ruled"><p class="lk">If You Are in Danger Right Now</p><p>' + DANGER + "</p></div>", lead8 = group() && leaderKnown();
    if (UI.handSent) return '<p class="t" id="hsent" tabindex="-1">Sent.</p><p class="s">' + (lead8 ? "Your group’s leader has your note. He sees it at the top of Your Desk." : "Our team has your note and sees it first thing on Your Desk.") + " Nothing else about your week went with it.</p>" + danger;
    return '<p class="t">Reach out now?</p><p class="s">One tap sends a note to ' + esc(witnessName()) + ' that you need a hand. Nothing else about your week goes with it.</p><button type="button" class="btn" data-act="hand-send"' + (UI.handBusy ? " disabled" : "") + '>Send it</button><p class="kept" id="avHandS" aria-live="polite">' + esc(UI.say.hand || "") + "</p>" + danger;
  }
  function letterHtml8() {
    var n = unreadNote() || newestNote(); if (!n) return '<p class="s">There is no letter yet.</p>';
    var paras = String(n.text).split(/\n\s*\n/).map(function (x) { return x.trim(); }).filter(Boolean);
    return '<div class="paper">' + paras.map(function (x) { return "<p>" + esc(x).replace(/\n/g, "<br>") + "</p>"; }).join("") + (n.witness ? '<p class="sig">' + esc(n.witness) + "</p>" : "") + "</div>";
  }
  function writeHtml8() {
    var to = teamOnly8() ? "our team" : witnessName();
    if (S8.wsent) return '<p class="t" id="wsk" tabindex="-1">Sent.</p><p class="s">' + esc(uc1(to)) + " has your note.</p>";
    var review = (data && data.review) || "two days";
    return '<label class="t" for="wtx" style="display:block">What would you like to tell ' + esc(to) + '?</label><textarea id="wtx" maxlength="2000" placeholder="One line is enough.">' + esc(UI.drafts.wtx || "") + '</textarea><button type="button" class="btn" data-act="wsend"' + (S8.wbusy ? " disabled" : "") + ">Send to " + esc(to) + '</button><p class="kept" id="wsm" aria-live="polite">' + esc(UI.say.write || "") + '</p><p class="help">' + esc(SAFE.replace("__REVIEW__", review)) + "</p>";
  }
  function witWhatHtml() {
    var v = V(), g = group();
    return '<p class="lk">The Witness</p><p class="ckq">What a Witness Does</p><p class="s">A witness is someone who sees what God is doing in your story, so it is remembered and spoken back to you. Your witness walks your road with you: one person, who reads what you choose to share and writes to you.</p><p class="s">' + (g ? "Through " + esc(v.course || "your course") + ", " + (leaderKnown() ? "your group’s leader" : "our team") + " is your witness. " : "Until you invite your own, our team walks with you. ") + (halfN() ? "From Week " + halfN() : "From the second half") + " you choose one person from your own life to walk with you after the course: a mentor, a coach, a close friend, a pastor or a relative from outside your room. They say yes before they see anything of yours, and you choose what they see.</p>" + (g && aheadWeeks().length ? '<div class="walks">' + walk8("calnights", "Add your Wednesday nights") + "</div>" : "") + '<p class="verse" style="margin-top:14px">“Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow.”<span>Ecclesiastes 4:9–10 (ESV)</span></p>';
  }
  function wiseesHtml() {
    var sh = (V().settings && V().settings.shares) || {};
    var on = [sh.path ? "the path you marked and the word you named" : "", sh.piece ? "whether a reading helped" : "", sh.practice ? "how the practice went" : "", sh.guidepost ? "the guidepost you mark" : "", sh.words ? "your own words" : ""].filter(Boolean);
    return '<p class="t">' + (on.length ? "Each week your witness sees " + on.join(", ").replace(/, ([^,]*)$/, " and $1") + "." : "Each week your witness sees only what you share.") + '</p><p class="s">' + (sh.words ? "Your own words go with your week while Own words is on." : "Your own words stay yours unless you turn on Own words in Settings.") + ' Change any of it in Settings.</p><p class="s">No counts, no streaks, and nothing that says when you opened anything.</p><p class="s">You can pause your witness’s notes any time in Settings, and no reason is shown.</p>' + weeklyHtml8();
  }

  /* the calendar file the page builds itself: every night of his room from this week to the last (floating nothing; Central time, as the room is held) */
  function icsEsc(s) { return String(s || "").replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n"); }
  function calNights() {
    var v = V(), m = v.meet || {}, tm = /(\d{1,2}):(\d{2})\s*([AP]M)/i.exec(String(m.time || "")), items = [];
    if (!tm || !group()) return null;
    var hh = (+tm[1] % 12) + (/p/i.test(tm[3]) ? 12 : 0), mm = +tm[2];
    if (m.date && wkN()) items.push({ n: wkN(), date: m.date, title: v.unit && v.unit.title || "" });
    aheadWeeks().forEach(function (w) { items.push({ n: w.n, date: w.date, title: w.name || "" }); });
    if (!items.length) return null;
    function ymd(iso) { return iso.slice(0, 4) + iso.slice(5, 7) + iso.slice(8, 10); }
    function t2(h, mi) { return ("0" + h).slice(-2) + ("0" + mi).slice(-2) + "00"; }
    var eh = hh + 2, stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
    var L = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Ancient Path Coaching//Your Page 11.2//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
      "BEGIN:VTIMEZONE", "TZID:America/Chicago", "BEGIN:DAYLIGHT", "TZOFFSETFROM:-0600", "TZOFFSETTO:-0500", "TZNAME:CDT", "DTSTART:19700308T020000", "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU", "END:DAYLIGHT",
      "BEGIN:STANDARD", "TZOFFSETFROM:-0500", "TZOFFSETTO:-0600", "TZNAME:CST", "DTSTART:19701101T020000", "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU", "END:STANDARD", "END:VTIMEZONE"];
    items.forEach(function (it) {
      L.push("BEGIN:VEVENT", "UID:" + ymd(it.date) + "-w" + it.n + "@ancientpathcoaching.com", "DTSTAMP:" + stamp, "DTSTART;TZID=America/Chicago:" + ymd(it.date) + "T" + t2(hh, mm), "DTEND;TZID=America/Chicago:" + ymd(it.date) + "T" + t2(eh, mm),
        "SUMMARY:" + icsEsc(v.course + " · Week " + it.n + " · your room meets"), "DESCRIPTION:" + icsEsc(it.title ? "Week " + it.n + ": " + it.title : "Week " + it.n), "END:VEVENT");
    });
    L.push("END:VCALENDAR");
    var last = items[items.length - 1].date;
    return { text: L.join("\r\n") + "\r\n", day: (m.day || DAYS[new Date(Date.UTC(dparts(last).y, dparts(last).m - 1, dparts(last).d)).getUTCDay()]), last: shortDay(last), time: central(m.time) };
  }
  function saveCalendar() {
    var c = calNights(); if (!c) { toast8("There are no nights to add yet."); return; }
    try {
      var blob = new Blob([c.text], { type: "text/calendar;charset=utf-8" }), a = document.createElement("a"), u = URL.createObjectURL(blob);
      a.href = u; a.download = "your-room-nights.ics"; a.style.display = "none"; document.body.appendChild(a); a.click();
      setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(u); }, 1500);
      toast8("Saved a calendar file: every " + c.day + " night through " + c.last + ", at " + c.time + ".");
    } catch (e) { toast8("That did not save. Try again."); }
  }

  /* ───────────── the taps that write (every one says Kept., or says once that it did not save and leaves his choice standing) ───────────── */
  function gpMe(n, val) {
    var G = V().gp = V().gp || { here: [], not: [], use: 0, readings: {} }; G.here = G.here || []; G.not = G.not || [];
    var was = G.here.indexOf(n) >= 0 ? "me" : G.not.indexOf(n) >= 0 ? "not" : "", next = was === val ? "" : val;
    G.here = G.here.filter(function (x) { return x !== n; }); G.not = G.not.filter(function (x) { return x !== n; });
    if (next === "me") G.here.push(n); else if (next === "not") G.not.push(n);
    S8.gpSay = ""; sheetBody8(gpHtml(n)); renderMain(true);
    post({ action: "road_gp", n: n, v: next }).then(function (r) {
      if (!ok(r)) {
        G.here = G.here.filter(function (x) { return x !== n; }); G.not = G.not.filter(function (x) { return x !== n; });
        if (was === "me") G.here.push(n); else if (was === "not") G.not.push(n);
        S8.gpSay = esc(MISS);
      } else cache();
      if (S8.sheet === "Guidepost") sheetBody8(gpHtml(n)); renderMain(true);
      var k = $("#gpk"); if (k && S8.sheet === "Guidepost") k.focus({ preventScroll: true });
    });
  }
  function gpUse(n) {
    S8.gpUseSay = "";
    post({ action: "road_gpuse", n: n }).then(function (r) {
      if (ok(r)) { var v = V(); v.practice = r.practice || v.practice; v.gp = v.gp || {}; v.gp.use = n; cache(); }
      else S8.gpUseSay = esc(MISS);
      if (S8.sheet === "Guidepost") sheetBody8(gpHtml(n)); renderMain(true);
      var k = $("#gpu"); if (k && S8.sheet === "Guidepost") k.focus({ preventScroll: true });
    });
  }
  function writeSend() {
    var tx = $("#wtx"), t = tx ? tx.value.trim() : "";
    if (!t) { toast8("Write a line first. A line is enough."); if (tx) tx.focus(); return; }
    if (S8.wbusy) return; S8.wbusy = true; UI.drafts.wtx = t; UI.say.write = "Sending.";
    post({ action: "road_write", text: t }).then(function (r) {
      S8.wbusy = false;
      if (ok(r)) { S8.wsent = true; UI.drafts.wtx = ""; UI.say.write = ""; sheetBody8(writeHtml8()); var k = $("#wsk"); if (k) k.focus(); }
      else { UI.say.write = "It did not send. Your words are still here; nothing has been lost. Try again."; sheetBody8(writeHtml8()); }
    });
  }
  function retry() {
    S8.unread = false;
    post({ action: "road" }).then(function (r) { if (ok(r) && !r.bare) { applyData(r, V().house); renderMain(true); } else { S8.unread = true; renderMain(true); toast8("Your week still did not open. Try again in a moment."); } });
  }
  function openLetter8() {
    var n = unreadNote() || newestNote(); if (!n) return;
    openSheet8("A Letter From Your Witness", letterHtml8());
    if (!n.read) { post({ action: "road_note_read", written: n.written }); n.read = "today"; n.readDay = DAYS[new Date().getDay()]; UI.letterNow = true; cache(); renderMain(true); }
  }

  /* ───────────── the shell, drawn once; the band, the menu and the view are redrawn into it ───────────── */
  /* ═════════════ 11.3 · Readings (design 8.10): each reading with its practice, its question and one tap; what has helped; the rhythm ═════════════
     The reading moves here from the piece sheet. Every tap is written as it is made (road_word, road_why, road_keepline, road_touch, road_where, road_answer, road_keepit, road_pace, road_more), then says Kept.
     What the mockup draws and the engine cannot yet keep is left out and listed in the handoff: Watch for, the pattern sentence, Bring it Wednesday, Reading From Here. */
  var R8 = { fu: {}, miss: {}, markP: {}, reline: {}, voices: null, voicesBusy: false, askBusy: false, askSay: "", paceDraft: "", rhKept: "", carryBusy: {}, carrySay: {}, leanSay: "" };
  var LAYERQ = { Wisdom: "what you do with it", Understanding: "what you see", Knowledge: "what you know now" };
  var TOUCH8 = [["body", "Body"], ["shame", "Shame"], ["belong", "Belonging"], ["prayer", "Prayer"], ["anger", "Anger"], ["family", "Family"]];
  var WHERE8 = [["tempted", "When tempted"], ["home", "At home"], ["work", "At work"], ["family", "With family"], ["room", "In my room"]];
  var SKIP8 = [["long", "Too long"], ["need", "Not for me"], ["later", "Not now"]];
  var SKIPK8 = { long: "<b>Kept.</b> The same idea comes back once, shorter, another week.", need: "<b>Kept.</b> Your next readings lean away from this one.", later: "<b>Kept.</b> It waits. It may come back another week." };
  var SKIPR8 = { long: "too_long", need: "not_needed", later: "later" };
  var TOUCHW8 = { body: "the body", shame: "shame", belong: "belonging", prayer: "prayer", anger: "anger", family: "family" };
  function rd() { return data && data.read ? data.read : null; }
  function rdItems() { var r = rd(); return r && r.items ? r.items : []; }
  function rdById(id) { return rdItems().filter(function (x) { return x.id === id; })[0] || null; }
  function sentences8(t) {
    var s = String(t || "").trim(), out = [], last = 0, m, re = /([.!?]["”’)]?)\s+(?=[A-Z“"‘'])/g;
    while ((m = re.exec(s))) { out.push(s.slice(last, m.index + m[1].length)); last = m.index + m[0].length; }
    out.push(s.slice(last));
    return out.filter(function (x) { return x.trim(); });
  }
  function skipKey8(why) { return why === "too_long" ? "long" : why === "not_needed" ? "need" : why === "later" ? "later" : ""; }
  function markOf8(it) { return it.word === "met" ? "helped" : it.word === "not" ? "not" : ""; }
  function paceSet8() { var r = rd(); return !!(r && r.pace && r.pace.set); }
  function paceKey8() { var r = rd(); return (r && r.pace && r.pace.key) || "min20"; }
  function paceWord8() { var r = rd(), k = paceKey8(), p = r && r.paces ? r.paces.filter(function (x) { return x.key === k; })[0] : null; return p ? p.label : "About 20 minutes"; }
  function paceShort8(label) { return String(label).replace(/^About /, ""); }
  function inT(arr, k) { return arr && arr.indexOf(k) >= 0; }
  function labelsOf8(list, picked) { return list.filter(function (z) { return inT(picked, z[0]); }).map(function (z) { return z[1].toLowerCase(); }).join(", "); }
  function mWeekTo8() { var n = wkN(); return group() && n > 1 ? "between Chapters " + (n - 1) + " and " + n : "as the line between chapters"; }
  function readNote8(it) {
    var c = it.course || "", ctx = c ? c + (group() && it.unit > 0 ? " · Week " + it.unit : "") : "", mins = it.mins ? it.mins + " minutes" : (it.minutes ? uc1(it.minutes) : "");
    return [ctx, mins].filter(Boolean).join(" · ") || "A reading for your week";
  }
  function rdTitle8(i) { return i ? "Another Reading" : "This Week’s Reading"; }
  function rdListen8(it) {
    var a = it.act || "Read", href = it.minuteLink || it.link, opened = !!it.opened, label;
    if (a === "Read") label = "Read it where it lives";
    else if (it.start) label = (opened ? "Listen again from minute " : "Listen from minute ") + esc(it.start);
    else label = a + " at the minute that matters";
    var what = a === "Read" ? "the page" : a === "Watch" ? "the video" : "the episode";
    return '<div class="walks"><a class="walk" href="' + esc(href) + '" target="_blank" rel="noopener" data-act="rlisten" data-id="' + esc(it.id) + '"><span class="u">' + label + '</span>&nbsp;<span class="ar">→</span></a></div><p class="help">' + (it.title ? esc(it.title) + ". " : "") + (it.mins ? it.mins + " minutes. " : "") + "Opens " + what + " in a new tab.</p>";
  }
  function rdHow8(it) {
    var beside = it.verse ? " beside " + esc(it.verse) : "", fit = it.unit > 0 && it.course ? ", for the week you’re walking." : (it.course ? ". It fits any week of " + esc(it.course) + "." : ".");
    return '<p class="s" style="margin-top:0">Our team read it' + beside + fit + "</p>";
  }
  function rdCarry8(it) {
    var id = it.id, a = it.answer, to = mWeekTo8(), key = "avQ" + id.replace(/[^A-Za-z0-9]/g, ""), review = (data && data.review) || "two days";
    var h = '<div class="part"><p class="lk">Carry This Question</p><p class="cqq">' + tie(it.question) + "</p>";
    if (a && a.text) {
      h += '<p class="kept" id="ck' + esc(key) + '" tabindex="-1"><b>Kept in Story.</b> “' + esc(a.text) + "”" + (a.between ? " It sits " + to + "." : "") + "</p>";
      var w = a.word;
      if (w && (w.verse || w.question || w.step)) h += '<div class="ruled"><p class="lk">' + esc(tc((data && data.wordLabel) || "A Word for the Road")) + "</p>" + (w.verse ? '<p class="verse" style="margin:4px 0 6px">' + esc(nb(w.verse)) + "</p>" : "") + (w.question ? '<p class="s">' + esc(w.question) + "</p>" : "") + (w.step ? '<p class="s">' + esc(w.step) + "</p>" : "") + "</div>";
      h += '<p class="help">' + (w ? "A person on our team has read it." : "A person on our team reads it within " + esc(review) + ", before anything else happens with it.") + "</p>";
    } else {
      h += '<label class="t sm" for="' + key + '" style="display:block;margin-top:14px">Answer it if you want.</label><p class="help" style="margin-top:2px">It goes into Story, ' + esc(to) + '.</p><textarea id="' + key + '" maxlength="2000" placeholder="One line is enough.">' + esc(UI.drafts[key] || "") + '</textarea><button type="button" class="btn line" data-act="rd-carry" data-id="' + esc(id) + '"' + (R8.carryBusy[id] ? " disabled" : "") + '>Keep it</button><p class="kept" id="' + key + 'S" aria-live="polite">' + esc(R8.carrySay[id] || "") + '</p><p class="help">' + esc(nb(SAFE.replace("__REVIEW__", review))) + "</p>";
    }
    return h + "</div>";
  }
  function rdPast8(r) {
    var past = (r && r.past) || []; if (!past.length) return "";
    var body = past.map(function (p) {
      var w = p.word;
      return '<div class="mark"><span class="lab">' + (p.unit > 0 ? "Week " + p.unit : "Earlier") + "<i>sent " + esc(p.sent) + '</i></span><p class="cq">“' + esc(smart(p.q)) + "”</p><p>“" + esc(p.text) + "”</p>" +
        (w && (w.verse || w.question || w.step) ? '<div class="ruled"><p class="lk">' + esc(tc((data && data.wordLabel) || "A Word for the Road")) + "</p>" + (w.verse ? '<p class="verse" style="margin:4px 0 6px">' + esc(nb(w.verse)) + "</p>" : "") + (w.question ? '<p class="s">' + esc(w.question) + "</p>" : "") + (w.step ? '<p class="s">' + esc(w.step) + "</p>" : "") + "</div>" : "<small>A person on our team has read it.</small>") + "</div>";
    }).join("");
    return '<div class="revs">' + rev8("pastq", "What you answered before", body) + "</div>";
  }
  function rdResp8(it) {
    var id = it.id, x = ' data-id="' + esc(id) + '"', m = markOf8(it), why = skipKey8(it.why), h = '<div class="part"><p class="t" style="font-size:19px">Did it help your week?</p><div class="choices two">' + choice8("rd-mark", "helped", "Helped", m === "helped", "", x) + choice8("rd-mark", "not", "Skip", m === "not", "", x) + "</div>";
    if (R8.miss[id]) h += '<p class="kept">' + esc(R8.miss[id]) + "</p>";
    if (m === "helped") {
      var lines = !it.short && it.road ? sentences8(it.road) : [], kl = it.kept || "", tcs = it.touch || [], whs = it.where || [];
      var fu = R8.fu[id] || 1; if (kl) fu = Math.max(fu, 2); if (tcs.length) fu = Math.max(fu, 3); if (!lines.length) fu = Math.max(fu, 2);
      var nextQ = function (v) { return '<div class="revs"><button type="button" class="rev" data-act="rd-fu" data-id="' + esc(id) + '" data-v="' + v + '"><span>Next question</span> →</button></div>'; };
      h += '<p class="kept"><b>Kept.</b> Your next readings lean toward what helped.</p>';
      if (lines.length) {
        h += '<p class="t sm" style="margin-top:18px">Keep a line</p>';
        if (kl && !R8.reline[id]) h += '<p class="kept" id="kl' + esc(id) + '" tabindex="-1"><b>Kept in Story.</b> “' + esc(kl) + '” It is What You Know Now, in this week’s chapter.</p><div class="walks" style="margin-top:0">' + walk8("rd-reline", "Choose another", x) + "</div>";
        else h += '<div class="klines">' + lines.map(function (s, j) { return '<button type="button" class="kline" data-act="rd-keepline" data-id="' + esc(id) + '" data-v="' + j + '">' + tie(uc1(s)) + "</button>"; }).join("") + "</div>";
        if (fu < 2) return h + nextQ(2) + "</div>";
      }
      h += '<p class="t sm" style="margin-top:18px" id="fq2' + esc(id).replace(/[^A-Za-z0-9]/g, "") + '" tabindex="-1">What did it touch?</p><div class="choices three">' + TOUCH8.map(function (z) { return choice8("rd-touch", z[0], z[1], inT(tcs, z[0]), "", x); }).join("") + "</div>" + (tcs.length ? '<p class="kept"><b>Kept.</b> It shapes Where It Points, in What Has Helped.</p>' : "");
      if (fu < 3) return h + nextQ(3) + "</div>";
      h += '<p class="t sm" style="margin-top:18px" id="fq3' + esc(id).replace(/[^A-Za-z0-9]/g, "") + '" tabindex="-1">Where did it show up?</p><div class="choices three">' + WHERE8.map(function (z) { return choice8("rd-where", z[0], z[1], inT(whs, z[0]), "", x); }).join("") + "</div>" + (whs.length ? '<p class="kept"><b>Kept.</b> It shows ' + (kl ? "beside your line" : "with this reading") + " in What Has Helped.</p>" : "");
    }
    if (m === "not") h += '<p class="t sm" style="margin-top:14px">What made it a skip?</p><div class="choices three">' + SKIP8.map(function (z) { return choice8("rd-why", z[0], z[1], why === z[0], "", x); }).join("") + '</div><p class="kept">' + (SKIPK8[why] || "<b>Kept.</b> A skip helps us choose as much as a yes.") + "</p>";
    return h + "</div>";
  }
  function pieceR8(it, i, r) {
    var layer = LAYERQ[it.layer] ? it.layer : "Wisdom", id = it.id;
    var h = '<p class="lk">' + esc(layer) + ' · <span class="lkq">' + LAYERQ[layer] + '</span></p><p class="t claim" style="margin-top:4px">' + tie(smart(it.claim)) + "</p>";
    if (!it.short && it.road) h += '<p class="story">' + tie(uc1(it.road)) + "</p>";
    h += rdListen8(it) + '<div class="revs">' + rev8("how" + id.replace(/[^A-Za-z0-9]/g, ""), "How we read it", rdHow8(it)) + "</div>";
    if (!it.short && it.todo) h += '<div class="part"><p class="lk">One Thing to Do</p><p class="s" style="margin-top:4px">Hearing gives you words. Doing gives you a new way to walk.</p><p class="habit">' + tie(it.todo) + '</p><p class="help">At your check-in you’ll say how it went, and it’s kept in your story.</p></div>';
    if (it.question) { var past8 = !i ? rdPast8(r) : ""; h += rdCarry8(it).replace(/<\/div>$/, function () { return past8 + "</div>"; }); }
    h += rdResp8(it);
    return h;
  }
  /* What Has Helped: where it points, each line he kept, the practices that held (all from his real taps) */
  function gpPointRow8() {
    var h = gpState().here, M = WAYMARKS.filter(function (w) { return h.indexOf(w.n) >= 0; }); if (!M.length) return "";
    return '<div class="pt"><span class="lab">You’re at</span><p class="ptv">' + M.map(function (g) { return esc(g.name); }).join(" · ") + '</p><div class="walks" style="margin-top:0">' + walk8("gp", "Open it", ' data-n="' + M[0].n + '"') + "</div></div>";
  }
  function andList8(a) { return a.length < 2 ? (a[0] || "") : a.slice(0, -1).join(", ") + " and " + a[a.length - 1]; }
  function holdLine8(hd) { return "since " + (hd.unit > 0 ? "Week " + hd.unit : hd.sinceLabel); }
  function leanText8(r) { return andList8((r.lean || []).map(function (k) { return TOUCHW8[k] || k; })); }
  function keptNow8(hd) { var p = String(V().practice || ""); return !!(p && hd && (p === hd.text || (p.length >= 200 && hd.text.indexOf(p) === 0))); }
  function pointsHtml8(r) {
    var rows = gpPointRow8(), hd = r.hold;
    if ((r.lean || []).length) rows += '<div class="pt"><span class="lab">Lean into</span><p class="ptv">' + esc(leanText8(r)) + '</p><div class="walks" style="margin-top:0">' + walk8("rd-lean", "How it’s used") + "</div></div>";
    if (hd) rows += '<div class="pt"><span class="lab">Keep doing</span><p class="ptv">' + esc(pracShort(hd.text)) + ", " + esc(holdLine8(hd)) + "</p>" + (keptNow8(hd) ? '<p class="kept" style="margin-top:2px" id="ptk" tabindex="-1"><b>Kept.</b> It carries into next week.</p>' : '<div class="walks" style="margin-top:0">' + walk8("rd-keepit", "Keep it") + "</div>") + "</div>";
    return rows ? '<p class="lk">Where It Points</p><div class="pts3">' + rows + "</div>" : "";
  }
  function keptRows8(r) {
    return (r.helped || []).map(function (h) {
      var wk = h.unit > 0 ? "Week " + h.unit : "A reading", came = h.came ? "“" + esc(h.came) + "”" : (h.current ? "It shows here after your check-in." : "not said");
      return '<div class="mark"><span class="lab">' + wk + (h.from ? "<i>from " + esc(h.from) + "</i>" : "") + "</span><p>" + (h.line ? "“" + esc(h.line) + "”" : "A reading that helped, with no line kept") + '</p><p class="klm"><span><b>Touched</b> ' + (labelsOf8(TOUCH8, h.touch) || "not said") + "</span><span><b>Showed up</b> " + (labelsOf8(WHERE8, h.where) || "not said") + "</span><span><b>Came of it</b> " + came + "</span></p></div>";
    }).join("");
  }
  function helpedPanel8(r) {
    var body, nt, hasAny = !!((r.helped || []).length || r.hold || (r.lean || []).length);
    if (!hasAny) {
      nt = "Gathered as readings help you";
      body = '<p class="s" style="margin-top:0">When a reading helps your week, it is gathered here: the line you keep, what it touched and where it showed up. Then it points the way: what to lean into and what to keep doing.</p>';
    } else {
      nt = "Where it points · what keeps helping";
      body = pointsHtml8(r);
      if ((r.helped || []).length) body += '<p class="lk" style="margin-top:22px">Lines You’ve Kept</p>' + keptRows8(r);
      if (r.hold) body += '<div class="part"><p class="lk">Practices That Held</p><p class="s" style="margin-top:4px">“' + esc(pracShort(r.hold.text)) + "” has stayed with you " + esc(holdLine8(r.hold)) + '.</p><p class="verse" style="margin-top:14px">“…those who have their powers of discernment trained by constant practice”<span>Hebrews 5:14 (ESV)</span></p><p class="s" style="margin-top:0">A practice done week after week trains you to see and choose well. It’s how what you read becomes who you are.</p></div>';
      body += '<p class="help">Nothing here is counted.</p><div class="walks">' + walk8("tab", "See it all in Story", ' data-tab="house"') + "</div>";
    }
    return secHtml("sofar", "What Has Helped", nt, body);
  }
  /* the rhythm: how much time a week, and which course leads */
  function paceChoices8(cur, act) { var r = rd(); return ((r && r.paces) || []).map(function (p) { return choice8(act, p.key, esc(paceShort8(p.label)), cur === p.key); }).join(""); }
  function coursesLine8(r) { return r.lead ? (r.second ? r.lead + ", then " + r.second : r.lead) : "what fits any week"; }
  function chosenRev8() {
    return rev8("chosen", "How it’s chosen", '<p class="s" style="margin-top:0">Our team follows voices we trust, men’s and women’s: pastors, counselors, scholars and coaches. Each morning we read what they said, keep only a few, and read each against Scripture before it reaches you. Then we choose for the week you’re walking, and for the guidepost you’re at.</p><div class="walks">' + walk8("rd-voices", "See everyone we read") + "</div>");
  }
  function rhythmBody8(r, setup) {
    if (setup) return '<p class="t">About how much time a week?</p><div class="choices three">' + paceChoices8(R8.paceDraft || paceKey8(), "rd-pace") + '</div><button type="button" class="btn" data-act="rd-pacekeep">Keep</button><div class="revs" style="margin-top:8px">' + chosenRev8() + "</div>";
    var lead = r.lead && r.second ? '<p class="t sm" style="margin-top:16px">Which course leads?</p><div class="choices two">' + [r.lead, r.second].map(function (n) { return choice8("rd-lead", n, esc(n), n === r.lead); }).join("") + "</div>" : "";
    return '<p class="s" style="margin-top:0">' + esc(paceWord8()) + " a week, for " + esc(coursesLine8(r)) + '.</p><div class="revs">' + rev8("rh", "Change", '<p class="t sm">About how much time a week?</p><div class="choices three">' + paceChoices8(paceKey8(), "rd-pace") + "</div>" + lead + (R8.rhKept ? '<p class="kept"><b>' + (R8.rhKept === MISS ? "" : "Kept.") + "</b> " + esc(R8.rhKept === MISS ? MISS : R8.rhKept) + "</p>" : "")) + chosenRev8() + "</div>";
  }
  function moreBlock8() {
    var r = rd(); if (!(r && r.more) && !R8.askSay) return "";
    return '<div class="part">' + (r && r.more ? '<p class="s" style="margin-top:0">We have additional articles we think you would appreciate if time allows.</p><div class="walks" style="margin-top:0">' + walk8("rd-more", "Ask for more", R8.askBusy ? " disabled" : "") + "</div>" : "") + (R8.askSay ? '<p class="kept" id="rdmk" tabindex="-1" aria-live="polite">' + esc(R8.askSay) + "</p>" : "") + "</div>";
  }
  function firstR8(r) {
    var h = '<p class="t">Your first reading comes with your next morning’s reading.</p><p class="s">Our team reads what the voices we trust have said, keeps only a few, and reads each against Scripture.' + (r && r.lead ? "" : " When you choose a course, what you read follows the week you’re walking.") + "</p>";
    return h + (r && r.lead ? "" : '<div class="walks">' + walk8("tab", "See the courses", ' data-tab="path"') + "</div>");
  }
  function viewReadings8() {
    var v = V(), r = rd(), main = "", items = rdItems(), side = witBrief() + (v.ended ? "" : gpBrief(false));
    if (S8.unread) return unreadView();
    if (v.bare || !r) {
      main = secHtml("readfirst", "First Reading", "Comes with your next morning’s reading", firstR8(null));
      return '<main class="view cols2"><div class="mainc">' + main + "</div></main>";
    }
    var set = paceSet8();
    if (!set) main += secHtml("setup", "Set Your Rhythm", (r.lead ? esc(r.lead) + " leads" + (r.second ? " · " + esc(r.second) + " second" : "") : "Readings that fit any week") + " · change it any time", rhythmBody8(r, true));
    if (v.ended) main += secHtml("end", "Walked to the End", esc(v.course || "") + " · finished", '<p class="verse">“The LORD bless you and keep you; the LORD make his face to shine upon you and be gracious to you; the LORD lift up his countenance upon you and give you peace.”<span>Numbers 6:24–26 (ESV)</span></p><p class="s">Every reading that helped you in ' + esc(v.course || "your course") + ' is kept in Story, with the lines you kept. The reading goes on from here, at your rhythm.</p><div class="walks">' + walk8("tab", "See it all in Story", ' data-tab="house"') + "</div>");
    if (set && !items.length) main += secHtml("readfirst", (r.helped || []).length ? "Readings" : "First Reading", (r.helped || []).length ? "Nothing new today · next at your rhythm" : "Comes with your next morning’s reading", firstR8(r));
    if (set) items.forEach(function (it, i) { main += secHtml(i ? "reading" + i : "reading", rdTitle8(i), esc(readNote8(it)), pieceR8(it, i, r) + (i === items.length - 1 ? moreBlock8() : "")); });
    main += helpedPanel8(r);
    if (set) main += secHtml("rhythm", "Reading Rhythm", esc(paceWord8()) + " a week · " + esc(coursesLine8(r)), rhythmBody8(r, false));
    return '<main class="view cols2"><div class="mainc">' + main + '</div><aside class="side">' + side + "</aside></main>";
  }
  /* ─── the taps ─── */
  function rdSync(it) { var p = piece(); if (p && p.id === it.id) { p.word = it.word; p.why = it.why; if (it.answer) p.answer = it.answer; } (data && data.more || []).forEach(function (m) { if (m.id === it.id) { m.word = it.word; m.why = it.why; } }); }
  function rdAfter(sel) { renderMain(true); if (sel) refocus(sel); }
  function rdMark(id, val) {
    var it = rdById(id); if (!it) return; var was = it.word, wasWhy = it.why;
    it.word = val === "helped" ? "met" : "not"; if (val === "helped") it.why = ""; delete R8.miss[id]; rdSync(it); rdAfter('[data-act="rd-mark"][data-id="' + id + '"][data-v="' + val + '"]');
    var pr = post({ action: "road_word", id: id, word: it.word }); R8.markP[id] = pr;
    pr.then(function (r) {
      if (ok(r)) { cache(); refresh(); }
      else { it.word = was; it.why = wasWhy; R8.miss[id] = MISS; rdSync(it); rdAfter(); }
    });
  }
  function rdWhy(id, val) {
    var it = rdById(id); if (!it || markOf8(it) !== "not") return; var was = it.why;
    it.why = SKIPR8[val]; rdSync(it); rdAfter('[data-act="rd-why"][data-id="' + id + '"][data-v="' + val + '"]');
    (R8.markP[id] || Promise.resolve(null)).then(function () { return post({ action: "road_why", id: id, reason: SKIPR8[val] }); }).then(function (r) {
      if (ok(r)) { cache(); refresh(); } else { it.why = was; R8.miss[id] = MISS; rdSync(it); rdAfter(); }
    });
  }
  function rdToggle(id, kind, word) {
    var it = rdById(id); if (!it) return; var arr = it[kind] = it[kind] || [], on = arr.indexOf(word) < 0;
    if (on) arr.push(word); else arr.splice(arr.indexOf(word), 1);
    rdAfter('[data-act="rd-' + kind + '"][data-id="' + id + '"][data-v="' + word + '"]');
    post({ action: "road_" + kind, id: id, word: word, on: on }).then(function (r) {
      if (ok(r)) { cache(); refresh(); } else { if (on) arr.splice(arr.indexOf(word), 1); else arr.push(word); R8.miss[id] = MISS; rdAfter(); }
    });
  }
  function rdKeepLine(id, j) {
    var it = rdById(id); if (!it) return; var lines = sentences8(it.road), line = lines[j]; if (!line) return; var was = it.kept;
    it.kept = line; delete R8.reline[id]; delete R8.miss[id]; rdAfter("#kl" + id);
    post({ action: "road_keepline", id: id, line: line }).then(function (r) {
      if (ok(r)) { cache(); refresh(); setTimeout(function () { refocus("#kl" + id); }, 0); } else { it.kept = was; R8.miss[id] = MISS; rdAfter(); }
    });
  }
  function rdCarry(id) {
    var it = rdById(id); if (!it || R8.carryBusy[id]) return; var key = "avQ" + id.replace(/[^A-Za-z0-9]/g, ""), ta = $("#" + key), t = ta ? ta.value.trim() : "";
    if (!t) { R8.carrySay[id] = "Write a line first, or leave it. Nothing here is required."; rdAfter("#" + key); return; }
    R8.carryBusy[id] = true; R8.carrySay[id] = "Keeping it."; UI.drafts[key] = t; rdAfter();
    post({ action: "road_answer", id: id, text: t, between: true }).then(function (r) {
      R8.carryBusy[id] = false;
      if (ok(r)) { it.answer = { text: t, sent: r.sent || (data && data.today) || "today", word: null, between: true }; delete R8.carrySay[id]; UI.drafts[key] = ""; rdSync(it); cache(); rdAfter("#ck" + key); refresh(); }
      else { R8.carrySay[id] = "It did not send. Your words are still here; nothing has been lost. Try again."; rdAfter("#" + key); }
    });
  }
  function rdPace(k, setup) {
    var r = rd(); if (!r) return;
    if (setup) { R8.paceDraft = k; rdAfter('[data-act="rd-pace"][data-v="' + k + '"]'); return; }
    var was = r.pace; r.pace = { key: k, label: (r.paces.filter(function (x) { return x.key === k; })[0] || {}).label || was.label, set: true }; R8.rhKept = "…"; UI.open.rh = true; rdAfter('[data-act="rd-pace"][data-v="' + k + '"]');
    post({ action: "road_pace", pace: k }).then(function (x) {
      if (ok(x)) { R8.rhKept = r.pace.label + " a week, starting with next week’s reading."; cache(); refresh(); } else { r.pace = was; R8.rhKept = MISS; }
      rdAfter('[data-act="rd-pace"][data-v="' + k + '"]');
    });
  }
  function rdPaceKeep() {
    var r = rd(), k = R8.paceDraft || paceKey8(); if (!r) return; var btn = $('[data-act="rd-pacekeep"]'); if (btn) btn.setAttribute("disabled", "disabled");
    post({ action: "road_pace", pace: k }).then(function (x) {
      if (ok(x)) { r.pace = x.pace; R8.paceDraft = ""; toast8("Kept. " + paceWord8() + " a week, starting with this one."); cache(); refresh(function () { setTimeout(function () { refocus("#apgH1"); }, 0); }); rdAfter(); }
      else { if (btn) btn.removeAttribute("disabled"); toast8(MISS); }
    });
  }
  function rdLead(name) {
    var r = rd(); if (!r || !r.second || name === r.lead) return; var other = name === r.lead ? r.second : r.lead, was = [r.lead, r.second];
    r.lead = name; r.second = was[0]; R8.rhKept = "…"; UI.open.rh = true; rdAfter('[data-act="rd-lead"][data-v="' + name.replace(/"/g, '\\"') + '"]');
    post({ action: "road_setup", courses: [name, was[0]], pace: paceKey8() }).then(function (x) {
      if (ok(x)) { R8.rhKept = name + " leads, starting with next week’s reading."; cache(); refresh(); } else { r.lead = was[0]; r.second = was[1]; R8.rhKept = MISS; }
      rdAfter();
    });
  }
  function rdMore() {
    if (R8.askBusy) return; R8.askBusy = true; R8.askSay = "";
    post({ action: "road_more" }).then(function (x) {
      R8.askBusy = false;
      if (ok(x) && !x.none) { R8.askSay = "Kept. Another reading is added to your week."; refresh(function () { setTimeout(function () { refocus("#rdmk"); }, 0); }); }
      else if (ok(x)) { R8.askSay = "Nothing more is ready this week."; rdAfter("#rdmk"); }
      else { R8.askSay = MISS; rdAfter("#rdmk"); }
    });
    rdAfter();
  }
  function rdKeepIt() {
    var r = rd(); if (!r || !r.hold) return; var t = r.hold.text;
    post({ action: "road_keepit", text: t }).then(function (x) {
      if (ok(x)) { setV("practice", t); cache(); rdAfter("#ptk"); refresh(); } else toast8(MISS);
    });
  }
  function leanHtml8() {
    var r = rd() || {}, g = aheadWeeks()[0];
    return '<p class="lk">Lean Into: ' + esc(uc1(leanText8(r))) + '</p><p class="t" style="margin-top:2px">The words you touched most</p><p class="s">These are the words you touched most on the readings that helped. Your next readings already lean toward the kinds of reading that helped you.</p><p class="help">Nothing to do now. It will be waiting on Readings.</p>';
  }
  function whoHtml8() {
    var v = R8.voices;
    if (!v) return '<p class="s" style="margin-top:0">' + (R8.voicesBusy ? "Loading." : "It did not load. Close this and open it again.") + "</p>";
    return '<p class="s" style="margin-top:0">Pastors, counselors, scholars and coaches, men’s and women’s voices. Each morning we read what they said, keep only a few, and read each against Scripture before it reaches you.</p><div class="revs vlanes">' +
      (v.lanes || []).map(function (l, i) { return rev8("lane" + i, esc(l[0]), '<ul class="vl">' + l[1].map(function (x) { return "<li>" + esc(x[0]) + "<span>" + esc(x[1]) + "</span></li>"; }).join("") + "</ul>"); }).join("") +
      ((v.music || []).length ? rev8("lanemusic", "Music for the men’s road", '<ul class="vl">' + v.music.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul>") : "") + "</div>";
  }
  function openVoices8() {
    openSheet8("Who We Read", whoHtml8());
    if (R8.voices || R8.voicesBusy) return;
    R8.voicesBusy = true;
    post({ action: "road_voices" }).then(function (x) {
      R8.voicesBusy = false; if (ok(x) && x.voices) R8.voices = x.voices;
      if (sheetOpen8() && S8.sheet === "Who We Read") sheetBody8(whoHtml8());
    });
  }

  function foot8() {
    var em = me && me.email ? " Signed in as " + esc(me.email) + ", the same person the site shows." : "";
    return "Your Page · build " + BUILD + " · Stand by the roads, and look, Jeremiah 6:16, and Remember the whole way, Deuteronomy 8:2." + em;
  }
  function ensureShell() {
    if ($("#apgRoot")) return;
    if (window.apBand && window.apBand.owned) window.apBand.owned(); /* the page's own band steps aside: the shell below is the band now (page v37.13; an older page simply keeps its band) */
    host.innerHTML = '<style data-ap-sheet="apg">' + APG_CSS + '</style><div class="apg ap-home" id="apgRoot"><div id="apgTop"></div><div class="pcwrap"><nav class="pcnav" id="apgNav" aria-label="Rooms and views"></nav><div class="pcmain"><div id="apgView"></div>' +
      '<div class="av" id="avRoot"><div class="av-main" id="avMain"></div><div class="av-scrim" id="avScrim"></div><section class="av-ov" id="avCk" role="dialog" aria-modal="true" aria-label="Check in with your witness"></section><section class="av-ov" id="avSheet" role="dialog" aria-modal="true" aria-label="Details"></section><div class="av-toast" id="avToast" role="status" aria-live="polite"></div></div>' +
      '<p class="pfoot" id="apgFoot"></p></div></div><div class="dimmer" id="apgDim"></div><section class="sheet" id="apgSheet" role="dialog" aria-modal="true" aria-labelledby="apgSheetT" tabindex="-1"></section><div class="toast" id="apgToast" role="status" aria-live="polite"></div></div>';
    /* the band bleeds to the screen's edges by measuring where the page set this room; the page and the fonts settle a moment after it is drawn, so it measures again then (11.2.2) */
    [250, 900, 2200, 4500].forEach(function (ms) { setTimeout(setBar, ms); });
    window.addEventListener("load", setBar);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setBar);
    if (window.ResizeObserver) { try { new ResizeObserver(function () { setBar(); }).observe(host); } catch (e) {} }
    var sc = $("#avScrim"); if (sc) sc.addEventListener("click", function () { if (ovSheet().classList.contains("av-open")) closeSheet(); else closeCk(); });
    var dm = $("#apgDim"); if (dm) dm.addEventListener("click", closeSheet8);
  }
  function renderMain(keep) {
    if (!data) return;
    ensureShell(); wire();
    var y = window.pageYOffset, sc = scroller(), sy = sc ? sc.scrollTop : 0, fs = focusSig();
    stashSlots(); moved = [];
    setBar();
    var t = UI.tab, vw = $("#apgView"), am = $("#avMain");
    $("#apgTop").innerHTML = bandHtml();
    $("#apgNav").innerHTML = menuHtml();
    if (t === "house") { vw.innerHTML = ""; am.innerHTML = viewHouse(); fillSlots(); }
    else { am.innerHTML = ""; vw.innerHTML = t === "week" ? viewWeek8() : t === "readings" ? viewReadings8() : viewPath8(); }
    $("#apgFoot").innerHTML = foot8();
    balance();
    host.style.minHeight = "";
    if (keep) { if (sc) sc.scrollTop = sy; else if (Math.abs(window.pageYOffset - y) > 1) window.scrollTo(0, y); }
    restoreFocus(fs, keep);
  }
  function toTop() {
    var b = $("#apgRoot"); if (!b) return;
    var top = b.getBoundingClientRect().top + window.pageYOffset - barH();
    try { window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" }); } catch (e) { window.scrollTo(0, Math.max(0, top)); }
  }
  var HASH = { week: "week", readings: "readings", house: "story", path: "path" };
  function tabOfHash() { var h = String(location.hash || "").replace("#", ""); return h === "story" ? "house" : h === "path" ? "path" : h === "week" ? "week" : h === "readings" ? "readings" : ""; }
  function setTab(t, nopush) {
    if (!VIEWS8.some(function (x) { return x[0] === t; })) t = "week";
    UI.tab = t; UI.slot = t === "house" ? UI.slot : "";
    if (t === "house" && UI.house === "ours") loadOurs();
    closeSheet8(); renderMain(); toTop();
    if (!nopush) { try { if (tabOfHash() !== t) history.pushState({ apv: t }, "", "#" + HASH[t]); } catch (e) {} }
    var h = $("#apgH1"); if (h) h.focus({ preventScroll: true });
  }
  window.addEventListener("popstate", function () { var k = tabOfHash(); if (k && data && k !== UI.tab) setTab(k, true); });

  /* ───────────── clicks: one listener for the views, the sheets and the overlays ───────────── */
  function wire() {
    if (wire.done) return; wire.done = true;
    host.addEventListener("click", function (ev) {
      var t = ev.target.closest ? ev.target.closest("[data-act]") : null; if (!t || !data) return;
      var act = t.getAttribute("data-act"), c = UI.ck;
      if (act === "listen" || act === "rlisten") { var lid = t.getAttribute("data-id"), p = lid ? rdById(lid) : piece(); if (p && !p.opened) { post({ action: "road_open", id: p.id }); p.opened = (data && data.today) || "today"; p.openedDay = DAYS[new Date().getDay()]; setDone("road"); var pp = piece(); if (pp && pp.id === p.id) { pp.opened = p.opened; pp.openedDay = p.openedDay; } cache(); } return; }
      if (act === "course") { courseTap(); return; }
      if (act === "story" || act === "begin" || act === "gpread") return;
      if (act === "stones") { ev.preventDefault(); window.APHisRoad.show("stones", true); return; }
      ev.preventDefault();
      switch (act) {
        case "tab": setTab(t.getAttribute("data-tab")); break;
        case "go-path": setTab("path"); break;
        case "toggle": var k = t.getAttribute("data-k"); UI.open[k] = !UI.open[k]; renderMain(true); refocus('[data-act="toggle"][data-k="' + k + '"]'); break;
        case "toggle8":
          var k8 = t.getAttribute("data-k"); UI.open[k8] = !UI.open[k8]; var box = t.nextElementSibling;
          if (box) box.classList.toggle("open", !!UI.open[k8]); t.setAttribute("aria-expanded", !!UI.open[k8]); t.lastChild.textContent = " " + (UI.open[k8] ? "▴" : "▾"); balance(); break;
        case "panel": panelSet(t.getAttribute("data-k"), t.getAttribute("aria-expanded") !== "true"); balance(); break;
        case "stop": S8.stop = t.getAttribute("data-v"); renderMain(true); break;
        case "welcomed": UI.welcomed = true; if (data) { data.ui = data.ui || {}; data.ui.welcomed11 = "open"; } post({ action: "road_ui", key: "welcomed11", state: "open" }); cache(); renderMain(); toast8("This Week is yours. Start at the top."); break;
        case "piece": openPiece(); break;
        case "checkin": ckInit("week"); openOverlay(ovCk(), ckHtml()); break;
        case "choose": ckInit("choose"); openOverlay(ovCk(), ckHtml()); break;
        case "close-ck": closeCk(); break;
        case "close-sheet": closeSheet(); break;
        case "ck-path": c.path = t.getAttribute("data-v"); ckMark(); ckRedraw(); break;
        case "ck-word": c.word = c.word === t.getAttribute("data-v") ? null : t.getAttribute("data-v"); if (c.path) ckMark(); ckRedraw(); break;
        case "ck-more": c.moreWords = true; ckRedraw(); break;
        case "ck-readings": closeOverlay(ovCk()); setTab("readings"); break;
        case "ck-how": ckHow(t.getAttribute("data-v")); break;
        case "ck-prac": ckPrac(Number(t.getAttribute("data-v"))); break;
        case "ck-when": ckWhen(t.getAttribute("data-v")); break;
        case "ck-next": case "ck-skip": ckNext(); break;
        case "ck-back": c.step = Math.max(1, c.step - 1); ckRedraw(); break;
        case "ck-finish": finishCk(false); break;
        case "ck-house": finishCk(true); break;
        case "house": UI.house = t.getAttribute("data-h"); if (UI.house === "ours") loadOurs(); renderMain(true); refocus('[data-act="house"][data-h="' + UI.house + '"]'); break;
        case "keepwed": keepWed(); break;
        case "keepmade": keepMade(); break;
        case "offer": toast("Offering this isn’t open yet. It stays yours, and our team will tell you when it is."); break;
        case "letter": openLetter8(); break;
        case "hand": UI.handSent = false; UI.say.hand = ""; openSheet8("I Need a Hand", handHtml8()); break;
        case "hand-send": handSend(); break;
        case "settings": UI.say = { shares: "", pause: "", hand: UI.say.hand, write: "" }; openSheet8("Settings", settingsHtml8()); break;
        case "rooms": openSheet8("Your Rooms", roomsHtml()); break;
        case "rd-mark": rdMark(t.getAttribute("data-id"), t.getAttribute("data-v")); break;
        case "rd-why": rdWhy(t.getAttribute("data-id"), t.getAttribute("data-v")); break;
        case "rd-fu": var fid = t.getAttribute("data-id"), fv = +t.getAttribute("data-v"); R8.fu[fid] = fv; renderMain(true); refocus("#fq" + fv + fid.replace(/[^A-Za-z0-9]/g, "")); break;
        case "rd-touch": rdToggle(t.getAttribute("data-id"), "touch", t.getAttribute("data-v")); break;
        case "rd-where": rdToggle(t.getAttribute("data-id"), "where", t.getAttribute("data-v")); break;
        case "rd-keepline": rdKeepLine(t.getAttribute("data-id"), +t.getAttribute("data-v")); break;
        case "rd-reline": var rid = t.getAttribute("data-id"); R8.reline[rid] = true; renderMain(true); refocus('[data-act="rd-keepline"][data-id="' + rid + '"]'); break;
        case "rd-carry": rdCarry(t.getAttribute("data-id")); break;
        case "rd-pace": rdPace(t.getAttribute("data-v"), !paceSet8()); break;
        case "rd-pacekeep": rdPaceKeep(); break;
        case "rd-lead": rdLead(t.getAttribute("data-v")); break;
        case "rd-more": rdMore(); break;
        case "rd-keepit": rdKeepIt(); break;
        case "rd-lean": openSheet8("Where It Points", leanHtml8()); break;
        case "rd-voices": openVoices8(); break;
        case "share8": share(t.getAttribute("data-v")); break;
        case "pause8": if ((t.getAttribute("data-v") === "1") !== !!(V().settings && V().settings.paused)) pause(); break;
        case "welcome": openSheet8("What This Page Is For", welcomeBody()); break;
        case "wrole": UI.wf.role = t.getAttribute("data-v"); UI.wf.picked = true; renderMain(true); break;
        case "invite": invite(); break;
        case "wchange": UI.wf.sent = false; UI.wf.picked = false; renderMain(true); break;
        case "slot": var sk = t.getAttribute("data-k"); UI.slot = UI.slot === sk ? "" : sk; renderMain(true); refocus('[data-act="slot"][data-k="' + sk + '"]'); break;
        case "gp": S8.gpn = +t.getAttribute("data-n"); S8.gpSay = ""; S8.gpUseSay = ""; openSheet8("Guidepost", gpHtml(S8.gpn)); break;
        case "gpme": gpMe(+t.getAttribute("data-n"), t.getAttribute("data-v")); break;
        case "gpuse": gpUse(+t.getAttribute("data-n")); break;
        case "wwrite": S8.wsent = false; UI.say.write = ""; openSheet8("Write to " + (teamOnly8() ? "Our Team" : uc1(witnessName())), writeHtml8()); setTimeout(function () { var x = $("#wtx"); if (x) x.focus(); }, 340); break;
        case "wsend": writeSend(); break;
        case "wisees": openSheet8("What Your Witness Sees", wiseesHtml()); break;
        case "witwhat": openSheet8("What a Witness Does", witWhatHtml()); break;
        case "calnights": saveCalendar(); break;
        case "close8": closeSheet8(); break;
        case "retry": retry(); break;
      }
    });
    host.addEventListener("input", function (ev) { var t = ev.target; if (t && t.id && /^(av|wtx)/.test(t.id)) UI.drafts[t.id] = t.value; });
    document.addEventListener("keydown", trap);
    document.addEventListener("keydown", function (e) {
      var sh = $("#apgSheet"); if (!sh || !sh.classList.contains("open")) return;
      if (e.key === "Escape") { closeSheet8(); return; }
      if (e.key === "Tab") {
        var f = [].slice.call(sh.querySelectorAll("button,a,textarea,input")).filter(function (x) { return x.offsetParent !== null; }); if (!f.length) return;
        var a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } else if (!sh.contains(document.activeElement)) { e.preventDefault(); a.focus(); }
      }
    });
    document.addEventListener("focusin", function (ev) {
      var ov = ovSheet() && ovSheet().classList.contains("av-open") ? ovSheet() : ovCk() && ovCk().classList.contains("av-open") ? ovCk() : null;
      if (!ov || ov.contains(ev.target)) return;
      var f = $("textarea,.av-obody button,.av-obody input,button", ov); if (f && f.focus) f.focus({ preventScroll: true });
    });
    window.addEventListener("resize", function () { setBar(); if (data) balance(); });
    ["ap:states", "ap:stones", "ap:courses", "ap:news"].forEach(function (name) {
      document.addEventListener(name, function (ev) {
        if (name === "ap:news") UI.news = (ev && ev.detail) || [];
        clearTimeout(wire.t); wire.t = setTimeout(function () { if (data && !anyOpen() && !sheetOpen8()) renderMain(true); }, 250);
      });
    });
  }

  window.APHisRoad = { build: BUILD, render: render, tab: function (t) { setTab(t); }, reveal: function () { if (UI.tab !== "week") setTab("week"); var m = $("#apgRoot"); if (m) toTop(); }, show: function (place, scroll) { UI.tab = "house"; UI.house = "mine"; if (place === "stones") UI.slot = "stones"; renderMain(); if (scroll) toTop(); } };

  /* ───────────── drawing ───────────── */
  function render(d) {
    if (!render.first) { render.first = true; var hk = tabOfHash(); if (hk) UI.tab = hk; }
    data = d;
    if (data && data.v11 && data.v11.notes) UI.letterNow = false;
    window.apRoadBand = { bare: !!d.bare, band: d.band || null, step: null, since: [], where: whereText() };
    renderMain(true);
  }
  var LOCAL = { ok: true, bare: true, ui: {}, band: null, v11: null };

  /* AP-SHIP 1, line 12: the page counts the rules the browser accepted against the stamped count; short, it tells the Front Desk once per build (kept in this browser so it never repeats) and the desk shows one line with the link. */
  function selfCheck() {
    if (location.pathname.indexOf("/author") >= 0 || window.top !== window) return;
    var short = [], got = 0, want = 0;
    Object.keys(RULES).forEach(function (k) {
      var st = document.querySelector('style[data-ap-sheet="' + k + '"]'), n = -1;
      try { n = st && st.sheet ? st.sheet.cssRules.length : -1; } catch (e) { n = -1; }
      got += Math.max(0, n); want += RULES[k];
      if (n < RULES[k]) short.push(k + " " + n + " of " + RULES[k]);
    });
    if (!short.length) return;
    var key = "ap_check_road_" + BUILD;
    try { if (localStorage.getItem(key)) return; localStorage.setItem(key, String(Date.now())); } catch (e) {}
    fetch(DESK_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "page_check", page: location.pathname, name: "Your Page (road.js)", build: BUILD, accepted: got, expected: want, detail: short.join(", "), ua: String(navigator.userAgent || "").slice(0, 120) }) }).catch(function () {});
  }
  function getJSON(path) { return fetch(path, { credentials: "include", headers: { Accept: "application/json" } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }
  function whoAmI() {
    return getJSON("/api/user_stats").then(function (j) {
      var m = (j && j.me) || {};
      var a = { id: m.id || m._id || m.user_id || "", email: (m.email || m.user_email || "").toLowerCase(), name: ((m.first_name || "") + " " + (m.last_name || "")).trim() || m.username || "", first: m.first_name || "" };
      if (a.id && a.email && a.first) return a;
      return getJSON("/api/user/me").then(function (x) {
        var u = (x && x.user) || x || {};
        if (!a.id) a.id = u.id || u._id || "";
        if (!a.email) a.email = String(u.email || u.user_email || "").toLowerCase();
        if (!a.name) a.name = ((u.first_name || "") + " " + (u.last_name || "")).trim() || u.username || "";
        if (!a.first) a.first = u.first_name || "";
        return a;
      });
    });
  }

  window.APHisRoad.render = render;
  whoAmI().then(function (a) {
    if (!a || !a.email) { render(LOCAL); return; }
    me = a;
    var cached = null; try { var c = JSON.parse(localStorage.getItem(CACHE) || "null"); if (c && c.email === a.email && c.data && Date.now() - c.at < 7 * 864e5) cached = c.data; } catch (e) {}
    if (cached && cached.build !== BUILD) cached = null; /* a draw kept by an earlier build has none of this build's parts */
    if (cached && cached.week && cached.week.start && Date.now() - Date.parse(cached.week.start + "T12:00:00") >= 14 * 864e5) cached = null;
    if (cached && !cached.v11) cached = null;
    if (cached) render(cached);
    post({ action: "road" }).then(function (r) {
      if (r && r.ok) { S8.unread = false; render(r); cache(); setTimeout(selfCheck, 0); }
      else if (!cached) { S8.unread = true; render(LOCAL); }
    });
  });
})();
