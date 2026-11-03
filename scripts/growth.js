/* AP-GROWTH growth.js build 4.1.1 \u2014 Your Growth, the facilitator's room, served by the Research reader script (ResearchReader.gs build 12.3, ?file=growth.js).
   4.1.1 (Nov 3, 2026, Research reader build 12.3; built to the ruled mockup v8.11, https://claude.ai/artifact/DRFs8n4ZCVisfvEhhiLSYP, Craft view and This Week; the mockup's words are the copy; built on the live script 12.2 / growth.js 4.1 read through the Google Drive connector).
   What changed from 4.1: (1) After the Room has four answers, Opened up, Landed quietly, Didn't land and No time, kept as opened, quiet, miss and none, with one optional line and Keep it; any older word that is not one of the four counts as none (No time), never as a no. (2) Craft, What You've Brought: the verse once at the head of the panel beside the house drawn in code, wisdom, understanding and knowledge picked out inside it; Our reading folded under it; then three groups, Wisdom, Understanding, Knowledge, each with the house part, its line, the piece he is bringing, and his brought pieces, a card with an answer leading with his word and his line and a card with none asking nothing; a word with nothing brought says it is waiting and links to The Shelf. (3) Voices and Lanes: one lane for each word in the side column with no word labels, Every lane opens a sheet (Back to Craft) with the lanes grouped under the word alone, More or Less on each lane (the same tap again clears it), and a Kept line that names what he chose; each lane's word is the Lanes tab's word column. (4) The measure line at both Bring it <night>? places, drawn on the server from the after-the-room answers of every room that brought the piece, shown only at four rooms or more and kept with the rest of the page's data.
   Not in this build: the Friday scorecard paragraph; a facilitator's own lane feed; From a lane you asked more of (4.1.2).
   One function draws each of these, fed by data: houseG, wordLine, broughtRow, broughtPanel, laneRow, lanesSheet, measureLine. No course, room or lane is named in the code; the verse and the house are drawn in What You've Brought and nowhere else.
   Moves to our own platform as it is: the whole page (served from the repo, loaded from one line), and the Answers rows (kind after now also holds miss; kind lane is new: the lane's name, and more, less or off). Rebuilt there: nothing is planned; the sign-in gate (the site's person) and the Front Desk page check are the two parts that name the host site.
   Counts taken before this card: the script parses; the stylesheet is assembled as the page assembles it and parses with no dropped rule; the browser accepted __RULES__ rules (4.1: 218); the shared blocks (AP-PANEL, AP-SHAPES 1.1, AP-CARD 1) are carried byte for byte.
   4.1 (Nov 3, 2026, Research reader build 12.2; built to the ruled mockup v8.10, https://claude.ai/artifact/DRFs8n4ZCVisfvEhhiLSYP; the mockup's words are the copy; built on the live script 12.1 / growth.js 4.0.1 read through the Google Drive connector).
   What changed from 4.0.1: (1) on a computer the page runs about 1320px wide and the extra goes to the main column; (2) the decision sits at the foot of This Week's Piece, "Bring it Wednesday?" Bring it \u00b7 Skip, and Next Step only points to it until he decides, then shows the kept line; (3) every quote names its speaker ("From the episode" until Entries has a speaker column) and carries "Bring this line"; (4) the Scripture section is "Held Against Scripture"; (5) one listen link, at the top of the piece; (6) "Where each man is" walks to Your Desk; (7) the Release List shows only to the releasers named on the Config tab, checked on the server; (8) the frame is drawn first (from the copy this browser kept for ten minutes, else an empty frame) and then filled, and the server keeps each person's record ten minutes; (9) the third view is Craft; (10) no spreadsheet link; (11) a facilitator who leads a room reads "Your room", our team reads "The room".
   Everything else is 4.0.1 unchanged: the gate and its lines, After the Room, Ask About Your Room (the server call), Everything We've Kept, Who We Read, Coming Up, What You've Brought, What You Set Aside, Name a Voice, Voices and Lanes, Settings, Ask Our Team, panel open/shut kept per person, the page self-check.
   Moves to our own platform as it is: the whole page (served from the repo, loaded from one line), and the Answers rows (now also kind line). Rebuilt there: nothing is planned; the sign-in gate (the site's person) and the Front Desk page check are the two parts that name the host site.
   Counts taken before this card: the script parses; the stylesheet is assembled as the page assembles it; the browser accepted 218 rules (4.0.1: 212); the shared blocks (AP-PANEL, AP-SHAPES 1.1, AP-CARD 1) are carried byte for byte. */

(function () {
var host = document.getElementById('apGrowth'); if (!host || host.getAttribute('data-growth')) return; host.setAttribute('data-growth', '4.1.1'); host.classList.add('ap-home');
var BUILD = '4.1.1';
var T0 = (window.performance && performance.now) ? performance.now() : 0, TIMES = window.growthTimes = {};
function timeMark(k) { try { TIMES[k] = Math.round(performance.now() - T0); } catch (e) {} }
/* the stamped rule count of this script's stylesheet, taken before the file card (AP-SHIP 1); the page counts what the browser accepted against it */
var RULES = { growth: 239 };
var GROWTH_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split('?')[0] : ''; return /script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(u) ? u : ''; })();
var DESK_URL = 'https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec';
var DESK_PAGE = 'https://www.ancientpathcoaching.com/front-desk';
var STORE = 'apDesk';
var PANEL_CSS = ".ap-home .ap-panel{--ap-g:28px;display:block;margin:0 0 18px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-top:3px solid var(--ap-bronze,#B8945F);border-radius:6px;box-sizing:border-box}.ap-home .ap-panel.ap-first{margin-top:44px}.ap-home h2.ap-panel-h{margin:0 !important;padding:0 !important;border:0 !important;font:inherit !important;background:none !important}.ap-home .ap-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;width:100%;box-sizing:border-box;margin:0;padding:20px var(--ap-g) 18px;background:none;border:0;border-radius:0;text-align:left;cursor:pointer;color:inherit}.ap-home .ap-panel-head:focus-visible{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:-4px}.ap-home .ap-panel-text{display:block;min-width:0;flex:1 1 auto}.ap-home .ap-panel-title{display:block;font:400 26px/1.2 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}.ap-home .ap-panel-note{display:block;font:400 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:6px 0 0}.ap-home .ap-panel-ctl{flex:none;font:600 14px/1 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:4px 0 3px;margin-top:6px;white-space:nowrap}.ap-home .ap-panel-body{padding:0 var(--ap-g) 26px}.ap-home .ap-panel.shut .ap-panel-body{display:none}.ap-home .ap-panel.shut .ap-panel-head{padding-bottom:20px}.ap-home button.ap-rev.ap-rev{display:inline-block;font:400 15px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;background:none;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:0 0 1px;margin:0;cursor:pointer;white-space:nowrap}.ap-home button.ap-rev.ap-rev:hover{color:var(--ap-navy,#1F2A44) !important;border-bottom-color:var(--ap-bronze,#B8945F)}@media (max-width:600px){.ap-home .ap-panel{--ap-g:18px;margin-left:-4px;margin-right:-4px}.ap-home .ap-panel.ap-first{margin-top:36px}.ap-home .ap-panel-title{font-size:24px !important}}";
var CARD_CSS = ".ap-home .ap-courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin:0;padding:0}\n.ap-home a.ap-ccard{display:flex;flex-direction:column;background:#fff;border:1px solid var(--ap-rule);border-radius:6px;overflow:hidden;text-decoration:none !important;color:inherit !important;transition:border-color .2s ease,box-shadow .2s ease}\n.ap-home a.ap-ccard:hover{border-color:var(--ap-bronze);box-shadow:0 6px 18px rgba(31,42,68,.08)}\n.ap-home a.ap-ccard:focus-visible{outline:2px solid var(--ap-bronze);outline-offset:2px}\n.ap-home .ap-ccard-img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:var(--ap-rule)}\n.ap-home .ap-ccard-body{display:flex;flex-direction:column;flex:1 1 auto;padding:18px 20px 20px}\n.ap-home .ap-ccard-name{font:400 24px/1.2 var(--ap-serif) !important;color:var(--ap-navy) !important;margin:0}\n.ap-home .ap-ccard-line{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-ink) !important;margin:8px 0 0}\n.ap-home .ap-ccard-sub{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet) !important;margin:4px 0 0}\n.ap-home .ap-ccard-way{align-self:flex-start;margin-top:auto;padding-top:18px}\n.ap-home .ap-ccard-way span{font:600 15px/1.4 var(--ap-sans) !important;color:var(--ap-navy) !important;border-bottom:1px solid var(--ap-bronze);padding-bottom:1px}\n.ap-home .ap-ccard-way span::after{content:\"\\2192\";padding-left:6px}\n.ap-home a.ap-ccard:hover .ap-ccard-way span{color:var(--ap-bronze) !important}\n.ap-home .ap-nw{display:inline-block}\n@media (max-width:600px){.ap-home .ap-courses{grid-template-columns:1fr;gap:16px}.ap-home .ap-ccard-body{padding:16px 18px 18px}.ap-home .ap-ccard-name{font-size:22px !important}}";
var PATHS = { desk: '/front-desk', growth: '/your-growth', page: '/start' };

host.innerHTML = '<style data-ap-sheet="growth">' +
"@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');" +
/* AP-SHAPES 1.1: the three shapes of an ask (Find, Answer, Walk) and the weight rule; one source, shapes.css, carried by every room script */
".apg .ap-find{position:relative;max-width:34em;margin:0 0 18px}.apg .ap-find input{width:100%;box-sizing:border-box;font:400 16px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--ink,#2B3040) !important;background:#fff;border:0;border-bottom:1px solid var(--rule,#E2DCD1);border-radius:0;padding:8px 0 8px 28px;outline:none}.apg .ap-find input:focus{border-bottom-color:var(--navy,#1F2A44)}.apg .ap-find::before{content:\"\";position:absolute;left:2px;top:11px;width:12px;height:12px;border:1.5px solid var(--quiet,#6B7280);border-radius:50%}.apg .ap-find::after{content:\"\";position:absolute;left:13px;top:23px;width:7px;height:1.5px;background:var(--quiet,#6B7280);transform:rotate(45deg);transform-origin:left center}.apg .ap-find input::placeholder{color:var(--quiet,#6B7280)}.apg .ap-answer{margin:0 0 18px;max-width:40em}.apg .ap-answer .ap-answer-q{font:400 20px/1.4 var(--serif,'Source Serif 4',serif) !important;color:var(--navy,#1F2A44) !important;margin:0 0 10px;text-wrap:balance}.apg .ap-answer .ap-answer-lead{font:400 15px/1.5 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--quiet,#6B7280) !important;margin:-4px 0 10px}.apg .ap-answer input,.apg .ap-answer textarea{display:block;width:100%;box-sizing:border-box;font:400 17px/1.5 var(--serif,'Source Serif 4',serif) !important;color:var(--ink,#2B3040) !important;background:var(--paper,#FBF9F5);border:1px solid var(--rule,#E2DCD1);border-left:3px solid var(--bronze,#B8945F);border-radius:4px;padding:12px 14px;outline:none;resize:vertical}.apg .ap-answer input{min-height:0}.apg .ap-answer textarea{min-height:96px}.apg .ap-answer input:focus,.apg .ap-answer textarea:focus{border-color:var(--navy,#1F2A44);border-left-color:var(--bronze,#B8945F)}.apg .ap-answer input::placeholder,.apg .ap-answer textarea::placeholder{color:var(--quiet,#6B7280);font-style:italic}.apg .ap-answer .ap-answer-act{display:flex;align-items:center;gap:14px;margin:10px 0 0}.apg .ap-answer .ap-answer-state{font:400 14px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--quiet,#6B7280) !important;margin:8px 0 0;min-height:1.4em}.apg .ap-answer .ap-answer-state.kept{color:var(--bronze,#B8945F) !important}.apg .ap-answer .ap-answer-state.kept::before{content:\"\\2713\\00a0\"}.apg .ap-walk{display:inline-block;font:600 15px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--navy,#1F2A44) !important;background:none;border:0;border-bottom:1px solid var(--bronze,#B8945F);padding:0 0 1px;margin:0;cursor:pointer;text-decoration:none !important;text-align:left}.apg .ap-walk:hover{border-bottom-color:var(--navy,#1F2A44)}.apg .ap-walk .ap-walk-arrow{display:inline-block;margin-left:6px;color:var(--bronze,#B8945F)}.apg .ap-walk+.ap-walk{margin-left:18px}.apg .ap-walk.quiet{font-weight:400 !important;color:var(--quiet,#6B7280) !important;border-bottom-color:var(--rule,#E2DCD1)}.apg a.btn.p,.apg a.btn.g{background:none !important;color:var(--navy,#1F2A44) !important;border:0 !important;border-bottom:1px solid var(--bronze,#B8945F) !important;border-radius:0 !important;padding:0 0 1px !important;font:600 15px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;box-shadow:none !important;display:inline-block}.apg a.btn.p::after,.apg a.btn.g::after{content:\"\\00a0\\2192\";color:var(--bronze,#B8945F)}.apg a.btn.p+.ap-btn,.apg .ap-walk+a.btn.p,.apg a.btn.p+.ap-walk{margin-left:18px}@media (prefers-reduced-motion: reduce){.ap-walk,.ap-answer input,.ap-answer textarea{transition:none}}.apg .ap-find input[type=search]{min-height:0 !important;padding:8px 0 8px 28px !important;border:0 !important;border-bottom:1px solid var(--rule) !important;border-radius:0 !important;background:#fff !important}.apg .ap-find input[type=search]:focus{border-bottom-color:var(--navy) !important}.apg .ap-answer textarea,.apg .ap-answer input[type=text]{border:1px solid var(--rule) !important;border-left:3px solid var(--bronze) !important;border-radius:4px !important;background:var(--paper) !important;padding:12px 14px !important}.apg .ap-answer textarea:focus,.apg .ap-answer input[type=text]:focus{border-color:var(--navy) !important;border-left-color:var(--bronze) !important}.apg .ap-walk .ap-walk-arrow{margin-left:6px}.apg a.btn.p::after,.apg a.btn.g::after{content:\" \\2192\"}" +
PANEL_CSS + CARD_CSS +
'.apg.ap-home{--paper:#FBF9F5;--sand:#F3EDE3;--card:#FFFFFF;--navy:#1F2A44;--ink:#2B3040;--quiet:#5E6573;--rule:#E2DCD1;--edge:#8C8170;--hover:rgba(184,148,95,.06);--bronze:#B8945F;--bronze-ink:#77592E;--band:#1F2A44;--band-fg:#F3EDE3;--band-quiet:#D8D0C4;--band-k:#D9B97F;--band-line:rgba(255,255,255,.14);--btn:#1F2A44;--btn-fg:#FBF9F5;--tap:44px;--ease:cubic-bezier(.2,.7,.2,1);--g:18px;--bar:84px;--serif:\'Source Serif 4\',Georgia,\'Times New Roman\',serif;--sans:\'Source Sans 3\',\'Segoe UI\',Arial,sans-serif;--ap-serif:var(--serif);--ap-sans:var(--sans);--ap-navy:var(--navy);--ap-ink:var(--ink);--ap-quiet:var(--quiet);--ap-rule:var(--rule);--ap-bronze:var(--bronze);--ap-paper:var(--paper);display:block;position:relative;background:var(--paper);color:var(--ink);font:400 16px/1.5 var(--sans);-webkit-font-smoothing:antialiased;text-align:left}' +
'.apg.ap-home .ap-panel{background:var(--card)}' +
'#apGrowth .apg *{box-sizing:border-box}' +
'#apGrowth .apg p{margin:0;text-wrap:pretty}' +
'#apGrowth .apg h1,#apGrowth .apg h2,#apGrowth .apg h3{text-wrap:balance}' +
'#apGrowth .apg button{font:inherit;color:inherit}' +
'#apGrowth .apg a{color:inherit}' +
'#apGrowth .apg :focus-visible{outline:3px solid var(--navy);outline-offset:2px;border-radius:6px}' +
'#apGrowth .apg .band :focus-visible{outline-color:#F3EDE3}' +
'#apGrowth .apg .nw{display:inline-block}' +
'#apGrowth .apg .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}' +
'#apGrowth .apg .band{background:var(--band);color:var(--band-fg);width:var(--bleed-w,100%);margin-left:var(--bleed-l,0)}' +
'#apGrowth .apg .topbar{padding:8px 16px 0}' +
'#apGrowth .apg .kr{display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:44px}' +
'#apGrowth .apg .k{font:600 12px var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--band-k)}' +
'#apGrowth .apg .kr-r{display:flex;align-items:center;gap:14px}' +
'#apGrowth .apg .tb{min-height:var(--tap);min-width:var(--tap);padding:0;background:none;border:0;color:var(--band-k);font:600 13px var(--sans);cursor:pointer;white-space:nowrap}' +
'#apGrowth .apg .tabs{position:sticky;top:var(--bar);z-index:6;display:flex;background:var(--paper);border-bottom:1px solid var(--rule);overflow-x:auto;scrollbar-width:none}' +
'#apGrowth .apg .tabs::-webkit-scrollbar{display:none}' +
'#apGrowth .apg .tab{flex:1 0 auto;min-height:48px;background:none;border:0;border-bottom:3px solid transparent;color:var(--quiet);font:600 14px var(--sans);cursor:pointer;padding:0 10px;white-space:nowrap}' +
'#apGrowth .apg .tab[aria-selected="true"]{color:var(--navy);border-bottom-color:var(--bronze-ink)}' +
'#apGrowth .apg .hero{padding:4px 18px 20px;border-bottom:1px solid var(--band-line);min-height:118px}' +
'#apGrowth .apg .hero .hk{display:none}' +
'#apGrowth .apg .hero h1{margin:0;font:400 28px/1.15 var(--serif);color:var(--band-fg);padding:0;border:0}' +
'#apGrowth .apg .hero .where{margin-top:6px;font:400 16px/1.45 var(--serif);color:var(--band-quiet)}' +
'#apGrowth .apg .hero h1:focus{outline:none}' +
'#apGrowth .apg .pcnav{display:none}' +
'#apGrowth .apg .mlab{margin:0 0 6px 15px;font:600 12px var(--sans);letter-spacing:.1em;text-transform:uppercase;color:var(--quiet)}' +
'#apGrowth .apg .mi{display:block;width:100%;min-height:var(--tap);text-align:left;padding:9px 12px;margin:0 0 2px;border:0;border-left:3px solid transparent;border-radius:0 6px 6px 0;background:none;cursor:pointer;font:inherit;color:var(--ink);text-decoration:none}' +
'#apGrowth .apg .mi b{display:block;font:600 16px/1.3 var(--sans);color:var(--navy)}' +
'#apGrowth .apg .mi span{display:block;font-size:14px;line-height:1.35;color:var(--quiet)}' +
'#apGrowth .apg .mi.here{cursor:default}' +
'#apGrowth .apg .mgroup .mv{padding-left:24px}' +
'#apGrowth .apg .mgroup{margin:0 0 10px;padding-bottom:2px}' +
'#apGrowth .apg .mgroup .here{padding-bottom:4px}' +
'#apGrowth .apg .mi[aria-current="page"]{border-left-color:var(--bronze-ink);background:var(--sand)}' +
'#apGrowth .apg .mfoot{margin-top:14px;padding-top:12px;border-top:1px solid var(--rule)}' +
'#apGrowth .apg .view{padding:16px 16px 48px}' +
'#apGrowth .apg .cols2{display:block}' +
'#apGrowth .apg .side{margin-top:18px}' +
'#apGrowth .apg .mainc .ap-panel:last-child,#apGrowth .apg .side .ap-panel:last-child{margin-bottom:0}' +
'#apGrowth .apg .ap-panel-note .np{display:block;margin-left:-14px}' +
'#apGrowth .apg .ap-panel-note .nn{display:inline-block;position:relative;padding-left:14px}' +
'#apGrowth .apg .ap-panel-note .nn+.nn:before{content:"\\00b7";position:absolute;left:4px}' +
'#apGrowth .apg .t{font:400 20px/1.35 var(--serif);color:var(--navy)}' +
'#apGrowth .apg .t.claim{font-size:20px}' +
'#apGrowth .apg .s{margin-top:8px;font-size:16px}' +
'#apGrowth .apg .help{margin-top:8px;font-size:14px;color:var(--quiet)}' +
'#apGrowth .apg .who{margin-top:6px;font-size:14px;color:var(--quiet)}' +
'#apGrowth .apg .lk{margin:0;font:600 12px var(--sans);letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink)}' +
'#apGrowth .apg .walk{display:inline-block;min-height:var(--tap);padding:11px 0;line-height:22px;background:none;border:0;font:600 16px var(--sans);color:var(--navy);cursor:pointer;text-decoration:none;text-align:left}' +
'#apGrowth .apg .walk .u{border-bottom:1px solid var(--bronze);padding-bottom:1px}' +
'#apGrowth .apg .walk .ar{color:var(--bronze-ink)}' +
'#apGrowth .apg .walks{display:flex;flex-wrap:wrap;gap:0 22px;margin-top:6px}' +
'#apGrowth .apg .rev{display:inline-flex;align-items:center;gap:4px;min-height:var(--tap);padding:0;background:none;border:0;font:400 14px var(--sans);color:var(--quiet);cursor:pointer}' +
'#apGrowth .apg .rev span{border-bottom:1px solid var(--edge)}' +
'#apGrowth .apg .revs{display:flex;flex-direction:column;align-items:flex-start;margin-top:4px}' +
'#apGrowth .apg .revs .more{align-self:stretch}' +
'#apGrowth .apg .more{display:none;padding-bottom:6px}' +
'#apGrowth .apg .more.open{display:block}' +
'#apGrowth .apg .btn{display:block;width:100%;min-height:48px;margin-top:14px;border:0;border-radius:6px;background:var(--btn);color:var(--btn-fg);font:600 16px var(--sans);cursor:pointer}' +
'#apGrowth .apg .btn.line{background:none;border:1px solid var(--navy);color:var(--navy);width:auto;padding:0 22px;display:inline-block;min-height:var(--tap)}' +
'#apGrowth .apg .btn[disabled]{opacity:.6;cursor:default}' +
'#apGrowth .apg .kept{margin-top:10px;font-size:16px;color:var(--quiet)}' +
'#apGrowth .apg .kept b{color:var(--navy);font-weight:600}' +
'#apGrowth .apg .verse{font:italic 400 18px/1.5 var(--serif);color:var(--navy);margin-bottom:12px}' +
'#apGrowth .apg .verse span{display:block;margin-top:2px;font:600 12px var(--sans);font-style:normal;color:var(--bronze-ink)}' +
'#apGrowth .apg .ruled{margin-top:12px;padding:2px 0 2px 14px;border-left:3px solid var(--bronze)}' +
'#apGrowth .apg .ruled p.lk{margin-bottom:2px}' +
'#apGrowth .apg .ruled p{font-size:16px}' +
'#apGrowth .apg .ruled p.serif{font:400 18px/1.45 var(--serif);color:var(--navy)}' +
'#apGrowth .apg .q{margin:10px 0 0;padding:0 0 0 14px;border-left:3px solid var(--bronze);font:italic 400 18px/1.5 var(--serif);color:var(--navy)}' +
'#apGrowth .apg .qm{display:inline-flex;align-items:center;min-height:var(--tap);margin:0 0 0 17px;font:600 14px var(--sans);color:var(--bronze-ink);text-decoration:none}' +
'#apGrowth .apg .qm span{border-bottom:1px solid var(--bronze)}' +
'#apGrowth .apg .part{margin-top:18px;padding-top:14px;border-top:1px solid var(--rule)}' +
'#apGrowth .apg .qby{margin:4px 0 0 17px;font-size:14px;color:var(--quiet)}' +
'#apGrowth .apg .qrow{display:flex;flex-wrap:wrap;gap:0 18px;align-items:center;margin-left:17px}' +
'#apGrowth .apg .qrow .qm{margin-left:0}' +
'#apGrowth .apg .qrow .rev[aria-pressed="true"] span{border-bottom-color:var(--bronze-ink);color:var(--navy)}' +
'#apGrowth .apg .part:focus{outline:none}' +
'#apGrowth .apg .skel{min-height:88px;border-top:1px solid var(--rule);margin-top:8px}' +
'#apGrowth .apg .pts{margin:6px 0 0;padding-left:20px;font-size:16px}' +
'#apGrowth .apg .pts li{margin-top:6px}' +
'#apGrowth .apg .choices{display:grid;gap:8px;margin-top:12px}' +
'#apGrowth .apg .choices.two{grid-template-columns:1fr 1fr}' +
'#apGrowth .apg .choice{min-height:var(--tap);padding:10px 12px;border:1px solid var(--edge);border-radius:6px;background:var(--card);font-size:16px;color:var(--ink);cursor:pointer;text-align:center;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap}' +
'#apGrowth .apg .choice.left{justify-content:flex-start;text-align:left}' +
'#apGrowth .apg .choice[aria-pressed="true"]{border:2px solid var(--bronze-ink);background:var(--sand);color:var(--navy);font-weight:600}' +
'#apGrowth .apg .choice[aria-pressed="true"]:before{content:"\\2713";color:var(--bronze-ink)}' +
'#apGrowth .apg textarea,#apGrowth .apg input[type=text],#apGrowth .apg input[type=search],#apGrowth .apg input[type=tel],#apGrowth .apg input[type=email]{display:block;width:100%;margin-top:10px;padding:12px;border:1px solid var(--edge);border-radius:6px;background:var(--paper);font:16px/1.5 var(--sans);color:var(--ink)}' +
'#apGrowth .apg textarea{min-height:84px;resize:vertical}' +
'#apGrowth .apg textarea::placeholder,#apGrowth .apg input::placeholder{color:var(--quiet);opacity:1}' +
'#apGrowth .apg .findrow{display:flex;gap:10px;align-items:stretch}' +
'#apGrowth .apg .findrow .find{flex:1}' +
'#apGrowth .apg .find{position:relative;display:flex;align-items:center;border:1px solid var(--edge);border-radius:6px;background:var(--paper)}' +
'#apGrowth .apg .find input{border:0;background:none;flex:1 1 auto;min-width:0;padding-left:38px;margin-top:0}' +
'#apGrowth .apg .find input:focus{outline:none}' +
'#apGrowth .apg .find:focus-within{outline:2px solid var(--bronze);outline-offset:1px}' +
'#apGrowth .apg .find svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:16px;height:16px;fill:none;stroke:var(--quiet);stroke-width:2}' +
'#apGrowth .apg .find .fchip{flex:none;min-height:var(--tap);margin:0 4px 0 0;padding:0 12px;border:1px solid var(--edge);border-radius:6px;background:var(--card);font:600 14px var(--sans);color:var(--navy);cursor:pointer;white-space:nowrap}' +
'#apGrowth .apg .find .fchip[aria-pressed="true"]{border:2px solid var(--bronze-ink);background:var(--sand)}' +
'#apGrowth .apg .find .fchip[aria-pressed="true"]:before{content:"\\2713\\00a0";color:var(--bronze-ink)}' +
'#apGrowth .apg a.btn.line{display:inline-flex}' +
'#apGrowth .apg a.btn{display:flex;align-items:center;justify-content:center;text-decoration:none}' +
'#apGrowth .apg .rows{margin-top:4px}' +
'#apGrowth .apg .prow{display:grid;grid-template-columns:1fr;gap:4px 18px;align-items:center;width:100%;margin:0;padding:24px 0 26px;border:0;border-top:1px solid var(--rule);background:none;text-align:left;cursor:pointer;color:inherit;font:inherit}' +
'#apGrowth .apg .rows .prow:first-child{border-top:0;padding-top:0}' +
'#apGrowth .apg .ap-panel-body>.rows:first-child{margin-top:8px}' +
'#apGrowth .apg .ap-panel-body>.rows:last-child .prow:last-child{padding-bottom:10px}' +
'#apGrowth .apg .prow .lab{grid-column:1;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +
'#apGrowth .apg .prow .nm{grid-column:1;font:400 20px/1.35 var(--serif);color:var(--navy);max-width:62ch}' +
'#apGrowth .apg .prow .st{grid-column:1;font-size:14px;color:var(--quiet)}' +
'#apGrowth .apg .prow .go{grid-column:1;margin-top:6px;font:600 16px var(--sans);color:var(--navy);white-space:nowrap}' +
'#apGrowth .apg .prow .go span{border-bottom:1px solid var(--bronze)}' +
'#apGrowth .apg .st .nw{white-space:nowrap}' +
'#apGrowth .apg .st .nv{white-space:normal}' +
'#apGrowth .apg .mark{display:grid;gap:2px;padding:16px 0;border-top:1px solid var(--rule)}' +
'#apGrowth .apg .mark:first-of-type{border-top:0;padding-top:4px}' +
'#apGrowth .apg .mark .lab{font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +
'#apGrowth .apg .mark p{font:400 18px/1.45 var(--serif);color:var(--ink);max-width:62ch}' +
'#apGrowth .apg .lane{display:flex;flex-direction:column;align-items:stretch;gap:8px;padding:14px 0;border-top:1px solid var(--rule)}' +
'#apGrowth .apg .lane:first-child{border-top:0}' +
'#apGrowth .apg .lanes .lane:first-child{border-top:0;padding-top:4px}' +
'#apGrowth .apg .lane b{display:block;font:600 14px var(--sans);color:var(--navy)}' +
'#apGrowth .apg .lane span{display:block;font-size:14px;color:var(--quiet)}' +
'#apGrowth .apg .lanec{display:flex;gap:8px}' +
'#apGrowth .apg .lanec .choice{flex:0 0 auto;min-width:84px;font-size:15px}' +
'#apGrowth .apg .prow.brow{cursor:default}' +
'#apGrowth .apg .prow.brow .go .walk{padding:0}' +
'#apGrowth .apg .prow .fl{grid-column:1;margin-top:6px;font:italic 400 17px/1.45 var(--serif);color:var(--ink);max-width:62ch}' +
'#apGrowth .apg .lk.grp{margin:34px 0 18px;padding-bottom:8px;border-bottom:1px solid var(--bronze);color:var(--navy);letter-spacing:.1em}' +
'#apGrowth .apg .lk.grp.first{margin-top:8px}' +
'#apGrowth .apg .lk.grp.wgrp{display:flex;align-items:flex-end;gap:10px}' +
'#apGrowth .apg .lk.grp.wgrp svg{margin-bottom:1px}' +
'#apGrowth .apg #p-brought .lk.grp.first{margin-top:24px}' +
'#apGrowth .apg #gSheet .lk.grp.first{margin-top:14px}' +
'#apGrowth .apg .wline{margin-top:0;color:var(--quiet);max-width:62ch}' +
'#apGrowth .apg .mline{margin-top:6px;max-width:62ch}' +
'#apGrowth .apg #p-brought .verse{margin-bottom:6px}' +
'#apGrowth .apg .vhouse{display:grid;grid-template-columns:40px minmax(0,1fr);gap:14px;align-items:start}' +
'#apGrowth .apg .vhouse .verse{margin:0;font-size:17px}' +
'#apGrowth .apg .vhouse .verse em{font-style:normal;color:var(--bronze-ink)}' +
'#apGrowth .apg svg.house{width:26px;height:26px;flex:none}' +
'#apGrowth .apg svg.house.big{width:40px;height:40px;margin-top:2px}' +
'#apGrowth .apg .revs.ours{margin:2px 0 0}' +
'#apGrowth .apg .oread p{margin-top:8px;font-size:15px;max-width:62ch}' +
'#apGrowth .apg .oread p b{color:var(--navy);font-weight:600}' +
'#apGrowth .apg .vl{list-style:none;margin:2px 0 10px;padding:0}' +
'#apGrowth .apg .vl li{padding:9px 0;border-top:1px solid var(--rule);font-size:16px;line-height:1.4;color:var(--ink)}' +
'#apGrowth .apg .vl li:first-child{border-top:0}' +
'#apGrowth .apg .vl li span{display:block;font-size:14px;color:var(--quiet)}' +
'#apGrowth .apg .vlanes .rev{min-height:var(--tap)}' +
'#apGrowth .apg .sheet{position:fixed;left:0;right:0;top:0;bottom:0;z-index:100000;display:flex;flex-direction:column;background:var(--paper);color:var(--ink);transform:translateY(100%);transition:transform .38s var(--ease);visibility:hidden;font:400 16px/1.5 var(--sans)}' +
'#apGrowth .apg .sheet.open{transform:none;visibility:visible}' +
'#apGrowth .apg .sheet:focus{outline:none}' +
'#apGrowth .apg .dimmer{display:none}' +
'#apGrowth .apg .ohead{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;border-bottom:1px solid var(--rule)}' +
'#apGrowth .apg .ohead .lk{font-size:12px}' +
'#apGrowth .apg .obody{flex:1;overflow-y:auto;padding:16px 20px 28px}' +
'#apGrowth .apg .toast{position:fixed;left:16px;right:16px;bottom:18px;z-index:100001;background:var(--navy);color:var(--paper);border-radius:6px;padding:12px 14px;font-size:14px;opacity:0;transform:translateY(10px);transition:opacity .3s var(--ease),transform .3s var(--ease);pointer-events:none}' +
'#apGrowth .apg .toast.in{opacity:1;transform:none}' +
'#apGrowth .apg .gate{max-width:560px;margin:0 auto;padding:40px 18px 64px}' +
'#apGrowth .apg .gate h2{font:400 28px/1.2 var(--serif);color:var(--navy);margin:0 0 12px}' +
'#apGrowth .apg .gate .err{color:#9A3B2F;font-size:15px;margin-top:8px}' +
'#apGrowth .apg .gate label{display:block;font-weight:600;margin:14px 0 4px}' +
'#apGrowth .apg .gate .btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:6px}' +
'#apGrowth .apg .gate .btn{width:auto;padding:0 22px}' +
'#apGrowth .apg .gate .btn.q2{background:none;color:var(--quiet);font-weight:400}' +
'#apGrowth .apg .flash{padding:24px 18px;font-size:16px}' +
'#apGrowth .apg .pfoot{margin:10px 0 36px;padding:0 4px;font-size:13px;line-height:1.5;color:var(--quiet)}' +
'@media (hover:hover){' +
'#apGrowth .apg .prow:hover{background:var(--hover);box-shadow:0 0 0 0 transparent,-12px 0 0 var(--hover),12px 0 0 var(--hover)}' +
'#apGrowth .apg .prow.brow:hover{background:none;box-shadow:none}' +
'#apGrowth .apg .mi:not(.here):not([aria-current="page"]):hover{background:var(--hover)}' +
'#apGrowth .apg .walk:hover .u{border-bottom-color:var(--navy)}' +
'#apGrowth .apg .choice:hover{border-color:var(--bronze)}' +
'#apGrowth .apg .tab:hover{color:var(--navy)}' +
'}' +
'@media (min-width:900px){' +
'#apGrowth .apg .topbar,#apGrowth .apg .tabs{display:none}' +
'#apGrowth .apg .hero{padding:26px max(28px,calc((100% - 1320px)/2 + 28px)) 24px;min-height:136px}' +
'#apGrowth .apg .hero .hk{display:block;margin-bottom:10px}' +
'#apGrowth .apg .hero h1{font-size:34px}' +
'#apGrowth .apg .hero .where{font-size:18px;max-width:780px}' +
'#apGrowth .apg .pcwrap{display:grid;grid-template-columns:220px minmax(0,1fr);gap:32px;max-width:1320px;margin:0 auto;padding:28px 28px 56px;align-items:start;--g:28px}' +
'#apGrowth .apg .pcnav{display:block;position:sticky;top:calc(var(--bar) + 20px)}' +
'#apGrowth .apg .view{padding:0}' +
'#apGrowth .apg .cols2{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:24px;align-items:start}' +
'#apGrowth .apg .side{margin-top:0}' +
'#apGrowth .apg .prow{grid-template-columns:minmax(0,1fr) auto;padding:30px 0 32px}' +
'#apGrowth .apg .prow .go{grid-column:2;grid-row:1/4;margin-top:0}' +
'#apGrowth .apg .prow.pc4 .go{grid-row:1/5}' +
'#apGrowth .apg .revs.ours{margin-left:54px}' +
'#apGrowth .apg .sheet{top:70px;bottom:auto;left:50%;right:auto;width:680px;margin-left:-340px;max-height:calc(100% - 100px);max-height:calc(100vh - 100px);border-radius:8px;box-shadow:0 24px 60px rgba(16,21,31,.35);transform:translateY(16px);opacity:0}' +
'#apGrowth .apg .sheet.open{transform:none;opacity:1}' +
'#apGrowth .apg .toast{left:50%;right:auto;width:460px;margin-left:-230px;bottom:28px}' +
'#apGrowth .apg .dimmer.on{display:block;position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999;background:rgba(16,21,31,.42)}' +
'}' +
'@media (max-width:599px){' +
'#apGrowth .apg .choices.three{grid-template-columns:1fr}' +
'}' +
'@media (min-width:900px){.apg.ap-home .ap-panel-title{font-size:26px !important}}' +
'@media (prefers-reduced-motion:reduce){.apg.ap-home *,.apg.ap-home *:before,.apg.ap-home *:after{transition:none !important;animation:none !important;scroll-behavior:auto !important}}' +
'</style><div class="apg ap-home" id="gRoot"></div>';
var ROOT = host.querySelector('#gRoot');

function $(id) { return document.getElementById(id); }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function smart(s) { return String(s == null ? '' : s).replace(/(^|[\s(\[\u2014\u2013-])"/g, '$1\u201c').replace(/"/g, '\u201d').replace(/(^|\s)'/g, '$1\u2018').replace(/'/g, '\u2019'); }
/* The last two words of a line of text are tied, so no paragraph or headline ends on a word alone, whatever the browser does with text-wrap. */
function tie(s) { return esc(smart(s)).replace(/\s+$/, '').replace(/ ([^ ]+)$/, '\u00a0$1'); }
function cap(s) { return String(s).charAt(0).toUpperCase() + String(s).slice(1); }
/* AP-SHIP 1 / the 3-second target: the last record this browser saw is kept ten minutes, so the frame can be filled at once while the answer comes */
var SNAP = 'apGrowthSnap', SNAP_MS = 600000;
function snapGet(email) { try { var v = JSON.parse(localStorage.getItem(SNAP) || 'null'); if (v && v.email === email && v.d && v.t && Date.now() - v.t < SNAP_MS) return v.d; } catch (e) {} return null; }
function snapPut(d) { try { var f = d && d.who && d.who.first; if (f) d.who.first = false; var j = JSON.stringify({ email: siteEmail(), t: Date.now(), d: d }); if (f) d.who.first = true; localStorage.setItem(SNAP, j); } catch (e) {} }
function snapClear() { try { localStorage.removeItem(SNAP); } catch (e) {} }
function stored() { try { var v = JSON.parse(localStorage.getItem(STORE) || 'null'); return v && v.key ? v : null; } catch (e) { return null; } }
function keep(v) { try { if (v) localStorage.setItem(STORE, JSON.stringify(v)); else { localStorage.removeItem(STORE); snapClear(); } } catch (e) {} }
function post(url, body) {
  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), credentials: 'omit' })
    .then(function (r) { return r.json(); }, function () { throw { error: 'network' }; })
    .then(function (r) { if (!r || r.ok !== true) throw (r || { error: 'network' }); return r; });
}
function lwMe() { var m = window.me; return (m && typeof m === 'object' && m.email) ? m : null; }
function siteEmail() { var m = lwMe(); return m ? String(m.email || '').toLowerCase().trim() : ''; }
function call(body) { if (!GROWTH_URL) return Promise.reject({ error: 'no_url' }); var s = stored(); body.key = s ? s.key : ''; body.site = siteEmail(); return post(GROWTH_URL, body); }
function greet() { var h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }
function firstName(n) { return String(n || '').trim().split(/\s+/)[0] || ''; }
function words(e) {
  switch (e && e.error) {
    case 'not_on_list': return 'That email is not on the desk list. Our team adds people on the People tab of the Front Desk sheet.';
    case 'not_you': return 'The site is signed in as someone else. Sign in as yourself to open Your Growth.';
    case 'no_site': return 'The site does not show anyone signed in. Sign in, then open Your Growth.';
    case 'bad_email': return 'That does not look like an email address.';
    case 'wait': return 'A code went out less than two minutes ago. Check your mail, or wait a moment and ask again.';
    case 'too_many': return 'Five codes have gone out today. Try again tomorrow, or ask our team.';
    case 'code_expired': return 'That code has expired. Ask for a new one.';
    case 'code_wrong': return 'That is not the code. Check the mail and try again.';
    case 'network': return 'The page could not reach the practice. Try again in a moment.';
    case 'no_url': return 'The page is not wired to its script yet.';
    default: return 'Something did not work. Try again in a moment.';
  }
}
/* The site's top bar sticks to the top of the window; whatever we scroll to must land below it. Measured on the page, never assumed. */
function barH() {
  function h(e) { try { var cs = getComputedStyle(e), r = e.getBoundingClientRect(); if ((cs.position === 'fixed' || cs.position === 'sticky') && r.top <= 2 && r.height > 10 && r.height < 220 && r.width > 300) return Math.round(r.bottom); } catch (x) {} return 0; }
  var best = h(document.querySelector('.lw-topbar') || document.body);
  if (!best) { var c = document.querySelectorAll('header, [class*="topbar"], [class*="header"]'); for (var i = 0; i < c.length; i++) { if (ROOT.contains(c[i])) continue; var v = h(c[i]); if (v > best) best = v; } }
  return best || 0;
}
/* The band runs the full width of the window, measured from the page itself (never 100vw, which counts the scrollbar). */
function setBar() {
  var cw = document.documentElement.clientWidth, r = host.getBoundingClientRect();
  ROOT.style.setProperty('--bar', barH() + 'px');
  ROOT.style.setProperty('--bleed-w', cw + 'px');
  ROOT.style.setProperty('--bleed-l', (-Math.round(r.left)) + 'px');
}
function wide() { return window.matchMedia('(min-width:900px)').matches; }
function phone() { return !wide(); }

/* ---------- the gate: the site's sign-in is the door; the desk's code and key open the page for the person the site shows ---------- */
function openSignIn() {
  try { if (window.l_settings) window.l_settings.redirectUrl = location.pathname + location.search; } catch (e) {}
  var a = document.querySelector('a[data-interactive-link-type="openformslink"][data-interactive-link-var1="signin"]');
  if (a) { a.click(); return; }
  var b = $('gSignin'); if (b) b.textContent = 'Use Sign in at the top of the page';
}
function gateBand(title, line) {
  return '<section class="band hero"><span class="k hk">Your Growth</span><h1 id="gHello" tabindex="-1">' + esc(title) + '</h1><p class="where" id="gLede">' + esc(line) + '</p></section>';
}
function gate(msg) {
  var site = siteEmail();
  var title = greet() + (site && lwMe().firstName ? ', ' + firstName(lwMe().firstName) : '') + '.';
  setBar();
  if (!site) {
    ROOT.innerHTML = gateBand(title, 'Sign in to open Your Growth.') + '<div class="gate"><h2>Your Growth is for facilitators on our team.</h2><p class="s">Sign in with your site account; the page opens for the person the site shows.</p>' + (msg ? '<p class="err">' + esc(msg) + '</p>' : '') + '<div class="btns"><button class="btn" id="gSignin">Sign in</button></div></div>';
    $('gSignin').addEventListener('click', openSignIn);
    return;
  }
  ROOT.innerHTML = gateBand(title, 'Signed in as ' + site + '.') + '<div class="gate"><h2>Your Growth is for facilitators on our team.</h2>' +
    '<p class="s">The first time each day, a six-digit code goes to ' + esc(site) + ' and this page opens on it, for one day. The same code opens your desk.</p>' +
    (msg ? '<p class="err">' + esc(msg) + '</p>' : '') +
    '<div id="gStep1"><div class="btns"><button class="btn" id="gSend">Send me a code</button></div><p class="err" id="gErr1" hidden></p></div>' +
    '<div id="gStep2" hidden><label for="gCode">The six digits from the mail</label><input id="gCode" type="tel" inputmode="numeric" autocomplete="one-time-code" placeholder="000 000"><div class="btns"><button class="btn" id="gCheck">Open Your Growth</button><button class="btn q2" id="gAgain">Send another code</button></div><p class="err" id="gErr2" hidden></p></div></div>';
  var email = site;
  $('gSend').addEventListener('click', function () {
    var b = $('gSend'); b.disabled = true; b.textContent = 'Sending\u2026'; $('gErr1').hidden = true;
    post(DESK_URL, { action: 'code_send', email: email, site: siteEmail() }).then(function () {
      b.disabled = false; b.textContent = 'Send me a code'; $('gStep1').hidden = true; $('gStep2').hidden = false; $('gCode').focus();
    }, function (e) { b.disabled = false; b.textContent = 'Send me a code'; $('gErr1').textContent = words(e); $('gErr1').hidden = false; });
  });
  $('gAgain').addEventListener('click', function () { $('gStep2').hidden = true; $('gStep1').hidden = false; });
  $('gCheck').addEventListener('click', function () {
    var code = String($('gCode').value || '').replace(/\D/g, '');
    if (code.length !== 6) { $('gErr2').textContent = 'The code is six digits.'; $('gErr2').hidden = false; return; }
    var b = $('gCheck'); b.disabled = true; b.textContent = 'Opening\u2026'; $('gErr2').hidden = true;
    post(DESK_URL, { action: 'code_check', email: email, code: code, site: siteEmail(), browser: navigator.userAgent.slice(0, 120) }).then(function (r) {
      keep({ key: r.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: r.expires });
      load();
    }, function (e) { b.disabled = false; b.textContent = 'Open Your Growth'; $('gErr2').textContent = words(e); $('gErr2').hidden = false; });
  });
  $('gCode').addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); $('gCheck').click(); } });
}

/* ---------- the page ---------- */
var D = null;
var S = { view: 'week', find: '', filt: false, shelfMore: false, ask: '', asked: false, askIdx: 0, askIds: [], askQ: '', rec: '', recSent: false, teamSent: false, open: {}, change: false, afterWord: '', afterLine: '', toastM: '', sheet: '', sheetId: '', sheetFrom: '', sbk: '', sk: '', busy: false };
function load() {
  var s = stored(), site = siteEmail();
  if (!site) { keep(null); return gate(''); }
  if (!s) return gate('');
  if (String(s.email || '').toLowerCase() !== site) { keep(null); return gate(''); }
  if (s.expires && new Date(s.expires) < new Date()) { keep(null); return gate('Your key from yesterday has run out. Send a new code.'); }
  setBar();
  /* the frame first: the copy kept for ten minutes if there is one, else the empty frame; the answer then fills it */
  var snap = snapGet(site);
  if (snap) { D = snap; render(); } else { D = null; ROOT.innerHTML = frame(s); }
  timeMark('frame');
  call({ action: 'growth' }).then(function (r) {
    var first = r && r.who && r.who.first; D = r; render(!!snap); timeMark('filled'); snapPut(D);
    if (first) call({ action: 'growth_ui', panel: 'g-welcomed', state: 'shut' }).catch(function () {});
    if (S.touched) refresh();
  }, function (e) {
    var code = e && e.error;
    if (code === 'no_key' || code === 'bad_key' || code === 'key_expired' || code === 'removed' || code === 'not_you' || code === 'no_site') { keep(null); return gate(code === 'removed' ? 'Your name is no longer on the desk list.' : code === 'key_expired' ? 'Your key from yesterday has run out. Send a new code.' : ''); }
    if (snap) { D = snap; return; }
    ROOT.innerHTML = gateBand('Your Growth', '') + '<div class="flash">' + esc(words(e)) + ' <button class="btn line" id="gRetry">Try again</button></div>';
    $('gRetry').addEventListener('click', load);
  });
}
/* a quiet refresh after an answer, so every view reads from the record; the page keeps its place */
function refresh() {
  call({ action: 'growth' }).then(function (r) { var first = D && D.who && D.who.first; D = r; if (first && D.who) D.who.first = true; render(true); snapPut(D); }, function () {});
}

/* ---------- words and pieces ---------- */
var GLOSS = { Wisdom: 'how you show up in the room', Understanding: 'reading a man and the moment', Knowledge: 'the trade, the men, and the God who gives it' };
function lineOf(q) { var s = String(q || '').toLowerCase(); return /^know/.test(s) ? 'Knowledge' : /^(read|understand)/.test(s) ? 'Understanding' : 'Wisdom'; }
function actOf(p) { var a = String(p && p.act || '').trim(); return /^(Read|Listen|Watch)$/.test(a) ? a : 'Read'; }
function startAt(e) { var m = String(e.cut).match(/[Ll]isten (?:from )?(\d+:\d{2})/); return m ? m[1] : ''; }
function spanOf(e) { var m = String(e.cut).match(/About ([a-z\- ]+) minutes\.?\s*$/i); return m ? 'about ' + m[1] + ' minutes' : ''; }
function total(e) { var m = String(e.cost).match(/(\d+)\s*min/); return m ? m[1] : ''; }
function shortVoice(e) { return String(e.source || e.voice || '').split(' \u00b7 ')[0].split(', a ')[0]; }
function fmtShort(iso) { var d = new Date(iso + 'T12:00:00'); return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }
function bringPoints(move) {
  var s = String(move || '').replace(/^\s*Room:\s*/i, '').trim();
  var bullets = s.split(/\n+/).map(function (x) { return x.replace(/^[\-\u2022*]\s*/, '').trim(); }).filter(Boolean);
  if (bullets.length >= 2) return bullets.slice(0, 3);
  var parts = [], buf = '', q = 0;
  for (var i = 0; i < s.length; i++) {
    var ch = s[i], prev = i ? s[i - 1] : '', next = i + 1 < s.length ? s[i + 1] : ''; buf += ch;
    if (ch === '\u201c') q++; else if (ch === '\u201d') q = Math.max(0, q - 1); else if (ch === '"') q = q ? 0 : 1;
    var closes = (ch === '\u201d' || (ch === '"' && !q)) && /[.?!]/.test(prev);
    if ((!q && /[.?!]/.test(ch) && (!next || /\s/.test(next))) || (closes && (!next || /\s/.test(next)))) { parts.push(buf.trim()); buf = ''; }
  }
  if (buf.trim()) parts.push(buf.trim());
  return parts.filter(function (p) { return p && !/^for the course:/i.test(p); }).slice(0, 3);
}
function pieceById(id) {
  if (!D || !id) return null;
  var all = (D.shelf || []).concat(D.piece ? [D.piece] : [], D.after && D.after.piece ? [D.after.piece] : []);
  for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
  return null;
}
function teamPiece() { return D.team ? pieceById(D.team.id) : null; }
function shownPiece() { return S.change ? teamPiece() : D.piece; }

/* ---------- 4.1.1: what the room did, the house, the three words and the lanes. One function draws each, fed by data; no course, room or lane is named here. ---------- */
/* what the room did, one phrase everywhere; a word that is not one of the four is none (No time), never a no */
var SAID = { opened: ['Opened up', 'It opened something'], quiet: ['Landed quietly', 'It landed quietly'], miss: ['Didn\u2019t land', 'It didn\u2019t land'], none: ['No time', 'We didn\u2019t get to it'] };
function saidKey(v) { return SAID[v] ? v : 'none'; }
function saidPhrase(v) { return SAID[saidKey(v)][1]; }
function share(n, t) { if (!n) return 'none so far'; if (n === t) return 'all'; if (n === 1) return 'one'; var r = n / t; return r > .5 ? 'most' : r === .5 ? 'half' : r >= .25 ? 'some' : 'a few'; }
/* the value measure, in words, at the decision only: drawn on the server from every room's after-the-room answer, sent only at four rooms or more */
function measureLine(e) {
  var r = e && D && D.measure ? D.measure[e.id] : null; if (!r) return '';
  var t = r.opened + r.quiet + r.miss + r.none; if (t < 4) return '';
  return '<p class="help mline">From the rooms that brought it: it opened something in ' + share(r.opened, t) + ', landed quietly in ' + share(r.quiet, t) + ', and didn\u2019t land or went unused in ' + share(r.miss + r.none, t) + '.</p>';
}
/* the house, drawn in code: walls and roof (built, wisdom), the footing (established, understanding), the rooms (filled, knowledge); every house is whole and only the part named is lit */
function houseG(part, big) {
  var on = function (p) { return part === 'all' || part === p; }, sw = function (p) { return on(p) ? 'var(--bronze)' : 'var(--rule)'; };
  return '<svg class="house' + (big ? ' big' : '') + '" viewBox="0 0 28 28" aria-hidden="true"><path d="M6 22V12.5L14 6l8 6.5V22" fill="none" stroke="' + sw('Wisdom') + '" stroke-width="' + (on('Wisdom') ? 2.2 : 1.4) + '" stroke-linejoin="round"/><path d="M3.5 23.5h21" fill="none" stroke="' + sw('Understanding') + '" stroke-width="' + (on('Understanding') ? 2.6 : 1.4) + '" stroke-linecap="round"/><rect x="9" y="14" width="4" height="4" rx=".6" fill="' + (on('Knowledge') ? 'var(--bronze)' : 'none') + '" stroke="' + sw('Knowledge') + '" stroke-width="1.2"/><rect x="15" y="14" width="4" height="4" rx=".6" fill="' + (on('Knowledge') ? 'var(--bronze)' : 'none') + '" stroke="' + sw('Knowledge') + '" stroke-width="1.2"/></svg>';
}
var PROV2434V = '\u201cBy <em>wisdom</em> a house is built, and by <em>understanding</em> it is established; by <em>knowledge</em> the rooms are filled with all precious and pleasant riches.\u201d';
var WORDS = ['Wisdom', 'Understanding', 'Knowledge'];
var WVERB = { Wisdom: 'Being built', Understanding: 'Being established', Knowledge: 'Being filled' };
/* one line in words on how a word has gone (no numbers), drawn from his rooms' answers */
function wordLine(w, rows, bringing) {
  var A = rows.filter(function (x) { return x.said; }), t = A.length, vb = WVERB[w], R = D.room || {};
  if (!rows.length) return '<p class="s wline">' + (bringing ? 'Its first piece goes to the room ' + esc(R.weekday || 'the night') + '.' : 'Waiting for its first piece.') + '</p>';
  if (!t) return '<p class="s wline">' + vb + '. No word from the room is kept yet.</p>';
  if (t === 1) return '<p class="s wline">' + vb + '. Too soon to say; the room\u2019s answer is on its card.</p>';
  if (t < 4) { var ws = A.map(function (x) { return '\u201c' + SAID[saidKey(x.said)][0] + '\u201d'; }); return '<p class="s wline">' + vb + '. Your rooms said ' + ws.slice(0, -1).join(', ') + (ws.length > 2 ? ',' : '') + ' and ' + ws[ws.length - 1].replace(/\u201d$/, '.\u201d') + '</p>'; }
  var c = { opened: 0, quiet: 0, other: 0 }; A.forEach(function (x) { var v = saidKey(x.said); if (v === 'opened') c.opened++; else if (v === 'quiet') c.quiet++; else c.other++; });
  return '<p class="s wline">' + vb + '. It has opened something in ' + share(c.opened, t) + ' of your rooms, landed quietly in ' + share(c.quiet, t) + ', and didn\u2019t land or went unused in ' + share(c.other, t) + '.</p>';
}
/* a brought piece leads with what the room did (his word and his line); the piece is a quiet walk; no answer, no ask */
function broughtRow(x) {
  var rd = walk('openpiece', 'Read it again', ' data-from="craft" data-id="' + esc(x.id) + '"'), lab = '<span class="lab">' + esc(cap(String(x.label || '').replace(/^Brought to the /, '').replace(/^Chosen for the /, ''))) + '</span>';
  if (x.said) return '<div class="prow brow pc4">' + lab + '<span class="nm">' + esc(SAID[saidKey(x.said)][0]) + '.</span>' + (x.line ? '<span class="fl">' + tie(x.line) + '</span>' : '') + '<span class="st">The piece: \u201c' + tie(x.claim) + '\u201d</span><span class="go">' + rd + '</span></div>';
  return '<div class="prow brow">' + lab + '<span class="nm">' + tie(x.claim) + '</span><span class="go">' + rd + '</span></div>';
}
/* What You've Brought is kept under its three words (Proverbs 24:3-4): the verse once, the house beside it, Our reading folded, then each word with its line, the piece he is bringing and his brought pieces */
function broughtPanel(rows, bringing) {
  var R = D.room || {}, d = R.weekday || 'the night', waiting = [];
  var body = '<div class="vhouse">' + houseG('all', true) + '<p class="verse">' + PROV2434V + '<span>Proverbs 24:3\u20134 (ESV)</span></p></div><div class="revs ours">' + rev('ours', 'Our reading', '<div class="oread"><p><b>Wisdom</b> \u00b7 show up creatively. Your room is built by how you show up.</p><p><b>Understanding</b> \u00b7 read the moment. It is established by how you read the moment.</p><p><b>Knowledge</b> \u00b7 know the trade. It is filled by what you know of the work, the men and the God who gives it.</p><p class="help">Our reading of the verse, not its words. One house seen three ways, not steps.</p></div>') + '</div>' +
    (rows.length || bringing ? '' : '<p class="s">When you bring a piece to your room, it\u2019s kept here under its word, with what the room did with it.</p>') +
    WORDS.map(function (w, gi) {
      var rs = rows.filter(function (x) { return x.word === w; }), b = bringing && bringing.w === w;
      if (!rs.length && !b) waiting.push(w.toLowerCase());
      return '<p class="lk grp wgrp' + (gi ? '' : ' first') + '" role="heading" aria-level="3">' + houseG(w) + '<span>' + w + '</span></p>' + wordLine(w, rs, b) +
        '<div class="rows">' + (b ? '<div class="prow brow"><span class="lab">Bringing it ' + esc(d) + '</span><span class="nm">' + tie(bringing.claim) + '</span><span class="go">' + walk('tab', 'See This Week', ' data-tab="week"') + '</span></div>' : '') + rs.map(broughtRow).join('') + '</div>' +
        (!rs.length && !b ? '<div class="walks" style="margin-top:0">' + walk('tab', 'Find one on The Shelf', ' data-tab="shelf"') + '</div>' : '');
    }).join('');
  var nt = [R.course ? esc(R.course) : '', bringing ? 'Bringing ' + bringing.w.toLowerCase() + ' ' + esc(d) : 'Wisdom, understanding, knowledge'].filter(Boolean).join(' \u00b7 ') + (waiting.length && waiting.length < 3 ? ' \u00b7 ' + cap(waiting.join(' and ')) + ' waiting' : '');
  return secHtml('brought', 'What You\u2019ve Brought', nt, body);
}
/* Voices and Lanes: one lane for each word in the side column; Every lane opens a sheet; More or Less on each, the same tap again clears it */
function laneRow(l, i) {
  var d = (D.laneSay || {})[l.lane] || '';
  return '<div class="lane"><div><b>' + esc(l.lane) + '</b><span>' + esc(l.line) + '. ' + esc(l.voices) + '.</span></div><div class="lanec">' + choice('lane', 'more:' + i, 'More', d === 'more') + choice('lane', 'less:' + i, 'Less', d === 'less') + '</div></div>';
}
function laneKept() {
  var m = 0, l = 0, S2 = D.laneSay || {}; Object.keys(S2).forEach(function (k) { if (S2[k] === 'more') m++; if (S2[k] === 'less') l++; });
  if (!m && !l) return '';
  return '<p class="kept lkept"><b>Kept.</b> Our team sees what you want ' + (m && l ? 'more and less' : m ? 'more' : 'less') + ' of when choosing your pieces.</p>';
}
function firstLane(w) { var L = D.lanes || []; for (var i = 0; i < L.length; i++) if (L[i].word === w) return i; return -1; }
function lanesSheet() {
  var L = D.lanes || [];
  return '<div><p class="t" style="margin-top:0">Every lane we read for you</p><p class="s">Want more or less of a lane? Tell us here.</p>' + WORDS.map(function (w, gi) {
    return '<p class="lk grp' + (gi ? '' : ' first') + '" role="heading" aria-level="3">' + w + '</p><div class="lanes">' + L.map(function (l, i) { return l.word === w ? laneRow(l, i) : ''; }).join('') + '</div>';
  }).join('') + laneKept() + '</div>';
}

/* ---------- AP-PANEL 1: one function draws every section ---------- */
function note(n) { return '<span class="np">' + String(n).split(' \u00b7 ').map(function (x) { return '<span class="nn">' + x + '</span>'; }).join('') + '</span>'; }
function panelOpen(key, shutDefault) {
  var v = (D && D.ui && D.ui['g-' + key]) || ''; if (!v) { try { v = localStorage.getItem('ap_panel_g-' + key) || ''; } catch (e) {} }
  if (v === 'shut') return false; if (v === 'open') return true;
  return !shutDefault;
}
function secHtml(key, title, nt, body, opts) {
  opts = opts || {};
  var open = panelOpen(key, opts.shut);
  return '<section class="ap-panel' + (open ? '' : ' shut') + '" data-panel="' + key + '" id="p-' + key + '">' +
    '<h2 class="ap-panel-h"><button type="button" class="ap-panel-head" data-act="panel" data-k="' + key + '" aria-expanded="' + (open ? 'true' : 'false') + '"><span class="ap-panel-text"><span class="ap-panel-title">' + title + '</span><span class="ap-panel-note">' + note(nt) + '</span></span><span class="ap-panel-ctl">' + (open ? 'Close \u25b4' : 'Open \u25be') + '</span></button></h2>' +
    '<div class="ap-panel-body">' + body + '</div></section>';
}
function panelSet(key, open) {
  var box = ROOT.querySelector('.ap-panel[data-panel="' + key + '"]'); if (!box) return;
  box.classList.toggle('shut', !open);
  var b = box.querySelector('.ap-panel-head'); if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');
  var c = box.querySelector('.ap-panel-ctl'); if (c) c.textContent = open ? 'Close \u25b4' : 'Open \u25be';
  if (D) { D.ui = D.ui || {}; D.ui['g-' + key] = open ? 'open' : 'shut'; }
  try { localStorage.setItem('ap_panel_g-' + key, open ? 'open' : 'shut'); } catch (e) {}
  call({ action: 'growth_ui', panel: 'g-' + key, state: open ? 'open' : 'shut' }).catch(function () {});
}
function choice(act, v, label, on, cls) { return '<button class="choice' + (cls ? ' ' + cls : '') + '" data-act="' + act + '" data-v="' + esc(v) + '" aria-pressed="' + (!!on) + '">' + label + '</button>'; }
function rev(k, label, body) { var o = !!S.open[k]; return '<button class="rev" data-act="toggle" data-k="' + k + '" aria-expanded="' + o + '"><span>' + label + '</span> ' + (o ? '\u25b4' : '\u25be') + '</button><div class="more' + (o ? ' open' : '') + '">' + body + '</div>'; }
function walk(act, label, extra) { return '<button class="walk" data-act="' + act + '"' + (extra || '') + '><span class="u">' + label + '</span>&nbsp;<span class="ar">\u2192</span></button>'; }
function linkWalk(href, label) { return '<a class="walk" href="' + esc(href) + '" target="_blank" rel="noopener"><span class="u">' + label + '</span>&nbsp;<span class="ar">\u2192</span></a>'; }
function qline(q, kind, room) {
  var on = !!(D && D.mine && D.mine.lines && D.mine.lines[q.words]);
  var word = String(kind || '').toLowerCase() === 'article' ? 'post' : 'episode';
  return '<blockquote class="q">\u201c' + tie(q.words) + '\u201d</blockquote><p class="qby">From the ' + word + ', at ' + esc(q.minute) + '</p><div class="qrow">' +
    (q.link ? '<a class="qm" href="' + esc(q.link) + '" target="_blank" rel="noopener"><span>Hear it at minute ' + esc(q.minute) + '</span>&nbsp;\u2192</a>' : '') +
    (room ? '<button class="rev bringl" data-act="bline" data-v="' + esc(q.words) + '" aria-pressed="' + on + '"><span>' + (on ? 'On the room\u2019s card \u2713' : 'Bring this line') + '</span></button>' : '') + '</div>';
}

/* ---------- a piece, as a facilitator reads it: the note carries the voice and length; the body says each thing once ---------- */
function pieceF(e, ctx) {
  var M = D.mine || {}, opened = M.opened, room = ctx === 'room' && !D.after;
  var full = ctx !== 'room' || opened || !!(D.after);
  var w = lineOf(e.question), act = actOf(e), st = startAt(e);
  var h = '<p class="lk">' + w + ' \u00b7 <span style="text-transform:none;letter-spacing:0;font:italic 400 14px var(--serif);color:var(--quiet)">' + GLOSS[w] + '</span></p>';
  h += '<p class="t claim" style="margin-top:6px">' + tie(e.claim) + '</p>';
  if (ctx !== 'room') h += '<p class="who">' + esc(e.source || e.voice) + ' \u00b7 ' + act + (total(e) ? ' \u00b7 ' + total(e) + ' minutes' : '') + '</p>';
  /* change 5: one listen link, at the top of the piece */
  var lv = act === 'Read' ? 'Read the post' : (act === 'Watch' ? 'Watch' : (room && opened ? 'Listen again' : 'Listen')) + (st ? ' from minute ' + st : '');
  h += '<div class="walks">' + (room ? walk('listen', lv) : linkWalk(e.link, lv)) + '</div>';
  if (room) {
    var R = D.room || {}, title = R.title || '';
    var swap = M.swap;
    var why = swap ? 'You chose it from The Shelf for \u201c' + esc(title) + ',\u201d in place of the piece our team chose.' : (title ? 'Chosen for \u201c' + esc(title) + '\u201d' + (e.why ? ': ' + esc(smart(e.why)) + '.' : '.') : '');
    if (why) h += '<div class="ruled"><p class="lk">Why It\u2019s Here This Week</p><p>' + why + '</p></div>';
  }
  var qs = (e.quotes || []).slice(0, full ? 2 : 1);
  if (qs.length) h += '<div class="part"><p class="lk">In Their Words</p>' + qs.map(function (q) { return qline(q, e.kind, room); }).join('') + '</div>';
  var bring = '<ul class="pts">' + bringPoints(e.move).map(function (x) { return '<li>' + tie(x) + '</li>'; }).join('') + '</ul>';
  var detail = '<p class="s" style="margin-top:0">' + tie(e.cut) + '</p>';
  var against = '<p class="s" style="margin-top:0">' + tie(e.beside) + '</p>' + (e.ours ? '<p class="s"><b>Already ours:</b> ' + tie(e.ours) + '</p>' : '');
  if (full) {
    h += '<div class="part"><p class="lk">Bring It \u00b7 About Five Minutes</p>' + bring + '</div>';
    h += '<div class="part"><div class="revs">' + (e.cut ? rev('cut' + e.id + ctx, 'What to listen for', detail) : '') + rev('txt' + e.id + ctx, 'Held Against Scripture', against) + '</div></div>';
  } else {
    h += '<div class="part"><div class="revs">' + rev('bring' + e.id, 'What you\u2019d bring, about five minutes', bring) + rev('txt' + e.id + ctx, 'Held Against Scripture', against) + '</div></div>';
  }
  /* change 2: the decision sits at the foot of this week's piece */
  if (room) h += decisionHtml(e);
  return h;
}
function decisionHtml(e) {
  var M = D.mine || {}, R = D.room || {}, d = R.weekday || 'the night', c = M.choice;
  var h = '<div class="part" id="pdec" tabindex="-1"><p class="t" style="font-size:19px">Bring it ' + esc(d) + '?</p>' + measureLine(e) + '<div class="choices two">' + choice('bring', 'bring', 'Bring it', c === 'bring') + choice('bring', 'no', 'Skip', c === 'no') + '</div>';
  if (c === 'bring') h += '<p class="kept"><b>Kept.</b> You\u2019re bringing it ' + esc(d) + '. Its points are on Your Desk for the night.</p>';
  else if (c === 'no') h += '<p class="kept"><b>Kept.</b> A skip helps us choose as much as a bring.</p><div class="walks">' + walk('shelfweek', 'Find another for ' + (R.week ? 'Week ' + R.week : 'your room')) + '</div>';
  return h + '</div>';
}

/* ---------- the frame, drawn first (AP-SHIP 1: the page is never blank while the answer comes) ---------- */
function frame(s) {
  var nm = firstName(s && s.name) || firstName(s && s.email), v = S.view;
  var h1 = v === 'week' ? greet() + (nm ? ', ' + nm : '') + '.' : v === 'shelf' ? 'The Shelf' : 'Craft';
  var titles = v === 'week' ? [['next', 'Next Step'], ['piece', 'This Week\u2019s Piece']] : v === 'shelf' ? [['stuck', 'Ask About Your Room'], ['shelf', 'Everything We\u2019ve Kept']] : [['brought', 'What You\u2019ve Brought']];
  var side = v === 'week' ? [['course', 'The Course']] : v === 'shelf' ? [['who', 'Who We Read']] : [['voices', 'Voices and Lanes']];
  function sk(p) { return secHtml(p[0], p[1], 'Opening\u2026', '<div class="skel" aria-hidden="true"></div>'); }
  var top = '<header class="band topbar"><div class="kr"><span class="k">Your Growth</span><span class="kr-r"><button class="tb" data-act="askteam">Ask our team</button><button class="tb" data-act="rooms">Rooms</button><button class="tb" data-act="settings">Settings</button></span></div></header>';
  var tabs = '<div class="tabs" role="tablist" aria-label="Views">' + VIEWS.map(function (x) { return '<button class="tab" role="tab" data-act="tab" data-tab="' + x[0] + '" aria-selected="' + (v === x[0]) + '">' + x[1] + '</button>'; }).join('') + '</div>';
  return top + '<section class="band hero"><span class="k hk">Your Growth</span><h1 id="gH1" tabindex="-1">' + esc(h1) + '</h1><p class="where">&nbsp;</p></section>' + tabs +
    '<div class="pcwrap">' + menu() + '<div class="pcmain"><main class="view cols2"><div class="mainc">' + titles.map(sk).join('') + '</div><aside class="side">' + side.map(sk).join('') + '</aside></main></div></div>';
}

/* ---------- the shell (AP-SHELL 1): the band, the menu, the views ---------- */
var VIEWS = [['week', 'This Week', 'Get ready for the room'], ['shelf', 'The Shelf', 'Find what fits'], ['craft', 'Craft', 'See what you\u2019ve brought']];
function ownRoom() { return D && D.who && D.who.own != null ? !!D.who.own : !(D && D.who && D.who.role === 'admin'); }
function person() { return firstName(D.who.name) || firstName(D.who.email); }
function ctxLine() {
  var R = D.room; if (!R) return '';
  var who = ownRoom() ? 'Your room' : 'The room';
  return esc(R.course) + ' \u00b7 <span class="nw">Week ' + R.week + ' \u00b7</span> <span class="nw">' + who + ' meets</span> <span class="nw">' + esc(R.night) + (R.hour ? ',</span> <span class="nw">at ' + esc(R.hour) : '') + '</span>';
}
function viewName() { return VIEWS.filter(function (x) { return x[0] === S.view; })[0][1]; }
function menu() {
  var h = '<nav class="pcnav" aria-label="Rooms and views"><p class="mlab">Your Rooms</p>';
  h += '<a class="mi room" href="' + PATHS.page + '"><b>Your Page</b><span>Walk your own road</span></a>';
  h += '<div class="mgroup"><div class="mi room here"><b>Your Growth</b><span>Get filled for the work</span></div>' +
    VIEWS.map(function (x) { return '<button class="mi mv" data-act="tab" data-tab="' + x[0] + '" aria-current="' + (S.view === x[0] ? 'page' : 'false') + '"><b>' + x[1] + '</b><span>' + x[2] + '</span></button>'; }).join('') + '</div>';
  h += '<a class="mi room" href="' + PATHS.desk + '"><b>Your Desk</b><span>Care for your men</span></a>';
  h += '<div class="mfoot"><button class="mi" data-act="askteam"><b>Ask our team</b><span>A question about your room</span></button><button class="mi" data-act="settings"><b>Settings</b><span>Notices</span></button></div></nav>';
  return h;
}
function band() {
  var h1 = S.view === 'week' ? (D.who.first ? 'Welcome, ' : greet() + ', ') + person() + '.' : S.view === 'shelf' ? 'The Shelf' : 'Craft';
  var top = '<header class="band topbar"><div class="kr"><span class="k">Your Growth</span><span class="kr-r"><button class="tb" data-act="askteam">Ask our team</button><button class="tb" data-act="rooms">Rooms</button><button class="tb" data-act="settings">Settings</button></span></div></header>';
  var tabs = '<div class="tabs" role="tablist" aria-label="Views">' + VIEWS.map(function (x) { return '<button class="tab" role="tab" data-act="tab" data-tab="' + x[0] + '" aria-selected="' + (S.view === x[0]) + '">' + x[1] + '</button>'; }).join('') + '</div>';
  return top + '<section class="band hero"><span class="k hk">Your Growth</span><h1 id="gH1" tabindex="-1">' + esc(h1) + '</h1><p class="where">' + ctxLine() + '</p></section>' + tabs;
}

/* ---------- Your Growth \u00b7 This Week ---------- */
function nextPanel() {
  var R = D.room || {}, wk = R.week, d = R.weekday || 'the night', P = shownPiece(), A = D.after, M = D.mine || {}, nt, body;
  if (A && A.kept) {
    nt = 'Kept \u00b7 Week ' + wk + ' is next';
    var wd = saidPhrase(A.word);
    body = '<p class="kept" style="margin-top:0"><b>Kept.</b> \u201c' + wd + '.\u201d' + (A.line ? ' ' + esc(A.line) : '') + ' It leads this piece\u2019s card in Craft, and it feeds Room Signals, never as one man\u2019s words.</p>' +
      '<p class="t" style="margin-top:14px">Next: Week ' + wk + ', \u201c' + esc(R.title) + '.\u201d</p><p class="s">Its piece comes here as soon as one is chosen for it.</p><div class="walks">' + linkWalk(courseHref(R.course), 'Read Week ' + wk + ' ahead') + '</div>';
  } else if (A) {
    nt = A.yesterday ? 'Last night' : esc(A.weekday) + ' night';
    var m0 = bringPoints(A.piece.move)[0] || A.piece.claim;
    m0 = String(m0).replace(/^Say it first:\s*/, '').replace(/^[\u201c"\u2018'\s]+|[\u201d"\u2019'\s]+$/g, '').replace(/[.,]$/, '');
    body = '<p class="t">You brought \u201c' + esc(smart(m0)) + '.\u201d What did the room do with it?</p><div class="choices">' +
      ['opened', 'quiet', 'miss', 'none'].map(function (v) { return choice('after', v, SAID[v][0], S.afterWord === v, 'left'); }).join('') +
      '</div><label class="sr" for="aline">One line, if you want</label><textarea id="aline" placeholder="One line, if you want. No names.">' + esc(S.afterLine) + '</textarea><button class="btn" data-act="afterkeep">Keep it</button>';
  } else if (!P) {
    nt = 'Nothing chosen yet';
    body = '<p class="t">Nothing is chosen for ' + (wk ? 'Week ' + wk : 'your room') + ' yet.</p><p class="s">When a piece fits your room\u2019s week, it lands here and on Your Desk. Until then, The Shelf has pieces that fit any week.</p><div class="walks">' + walk('shelfweek', 'Find one on The Shelf') + '</div>';
  } else if (!M.choice) {
    nt = 'Before ' + d;
    var wl = R.weekLine ? '<div class="ruled" style="margin:0 0 14px"><p class="lk">Where Your Men Are This Week</p><p class="serif">\u201c' + esc(smart(R.weekLine)) + '\u201d</p></div>' : '';
    var act = actOf(P), sp = spanOf(P), st0 = startAt(P), len = [];
    if (sp) len.push(cap(sp)); if (st0) len.push((sp ? 'from minute ' : 'From minute ') + st0);
    body = wl + '<p class="t">' + (act === 'Read' ? 'Read' : act === 'Watch' ? 'Watch' : 'Listen to') + ' this week\u2019s piece, then decide at its foot.</p>' + (len.length ? '<p class="s">' + len.join(', ') + '.</p>' : '') + '<div class="walks">' + walk('gopiece', 'Go to the piece') + '</div>';
  } else if (M.choice === 'no') {
    nt = 'Before ' + d;
    body = '<p class="kept" style="margin-top:0"><b>Kept.</b> You\u2019re skipping this week\u2019s piece. A skip helps us choose as much as a bring.</p><div class="walks">' + walk('shelfweek', 'Find one for Week ' + wk) + '</div>';
  } else {
    nt = 'Ready for ' + d;
    body = '<p class="kept" style="margin-top:0"><b>Kept.</b> ' + (M.swap ? 'You\u2019re bringing \u201c' + tie(String(P.claim).replace(/\.$/, '')) + ',\u201d from The Shelf, in place of the piece our team chose.' : 'You\u2019re bringing this week\u2019s piece.') + ' Its points are on Your Desk for the night.</p><p class="t" style="margin-top:14px">You\u2019re ready for ' + d + '.</p><div class="walks">' + walk('gopiece', 'See the piece') + '</div>';
  }
  return secHtml('next', 'Next Step', nt, body);
}
function piecePanel() {
  var A = D.after, P = A ? A.piece : shownPiece(); if (!P) return '';
  var R = D.room || {};
  var title = A ? 'Last Week\u2019s Piece' : (D.mine && D.mine.swap ? 'The Piece for ' + R.weekday : 'This Week\u2019s Piece');
  var nt = (A ? 'Brought ' + A.night + ' \u00b7 ' : '') + esc(shortVoice(P)) + (total(P) ? ' \u00b7 ' + total(P) + ' minutes' : '');
  return secHtml('piece', title, nt, pieceF(P, 'room'), { shut: !!A });
}
function carriedPanel() {
  var C = D.carried; if (!C || !C.items.length) return '';
  return secHtml('carried', 'Room Signals', 'What the room carried in Week ' + C.week, C.items.map(function (c) { return '<div class="mark"><span class="lab">' + esc(c.title) + '</span><p>' + esc(c.text) + '</p></div>'; }).join('') + '<p class="help">What the room said together, never one man\u2019s words.' + (D.after ? ' Week ' + (D.room ? D.room.week - 1 : '') + ' is added once our team reads it.' : '') + '</p>', { shut: phone() });
}
function releasePanel() {
  if (!D.release) return '';
  return secHtml('release', 'Release List', 'Only the releaser sees this', '<p class="s" style="margin-top:0">A reading our team keeps goes to the men at ' + esc(D.release.hour || '6:00 PM') + ' that day. Release it now, or keep it back, on Your Desk.</p><div class="walks"><a class="walk" href="' + DESK_PAGE + '" target="_blank" rel="noopener"><span class="u">Release or keep back</span>&nbsp;<span class="ar">\u2192</span></a></div>');
}
function welcomePanel() {
  if (!D.who.first) return '';
  return secHtml('welcome', 'What This Page Is For', 'Why Your Growth exists \u00b7 Exodus 31:3', '<p class="verse">\u201cand I have filled him with the Spirit of God, with ability and intelligence, with knowledge and all craftsmanship\u201d<span>Exodus 31:3 (ESV)</span></p><p class="s">In Hebrew the three are chokmah, tevunah and da\u2019at: wisdom, understanding and knowledge. Bezalel was filled for the work before he built anything. This page serves that filling, one piece at a time.</p>');
}
function courseHref(name) {
  var n = String(name || '').toLowerCase().replace(/\s+/g, ' ').trim(), cards = document.querySelectorAll('.ap-card.ap-course, a.ap-ccard'), i, t, a;
  for (i = 0; i < cards.length; i++) {
    if (ROOT.contains(cards[i])) continue;
    t = cards[i].querySelector('.ap-card-title, .ap-ccard-name'); a = cards[i].tagName === 'A' ? cards[i] : cards[i].querySelector('a[href]');
    if (t && a && String(t.textContent).toLowerCase().replace(/\s+/g, ' ').trim() === n) return a.getAttribute('href') || '';
  }
  return '/courses';
}
function courseCard(R) {
  var after = !!(D.after && D.after.kept) || !!D.after;
  return '<div class="ap-home"><div class="ap-courses"><a class="ap-ccard" href="' + esc(courseHref(R.course)) + '">' + (R.pic ? '<img class="ap-ccard-img" src="' + esc(R.pic) + '" alt="">' : '<span class="ap-ccard-img"></span>') + '<div class="ap-ccard-body"><p class="ap-ccard-name">' + esc(R.course) + '</p><p class="ap-ccard-line">Week ' + R.week + ' reading: <span class="ap-nw">' + esc(R.title) + '</span></p><p class="ap-ccard-sub">' + (ownRoom() ? 'Your room' : 'The room') + ' meets ' + esc(R.night) + (R.hour ? ', <span class="ap-nw">at ' + esc(R.hour) + '</span>' : '') + '</p><p class="ap-ccard-way"><span>Continue</span></p></div></a></div></div>';
}
function coursePanel() {
  var R = D.room; if (!R) return '';
  var after = !!D.after;
  return secHtml('course', 'The Course', after ? 'Week ' + R.week + ' is next' : (ownRoom() ? 'What your room is walking' : 'What the room is walking'),
    courseCard(R) + '<div class="walks">' + linkWalk(DESK_PAGE, 'Where each man is') + '</div>');
}
function viewWeek() {
  return '<main class="view cols2"><div class="mainc">' + nextPanel() + piecePanel() + carriedPanel() + releasePanel() + welcomePanel() + '</div><aside class="side">' + coursePanel() + '</aside></main>';
}

/* ---------- Your Growth \u00b7 The Shelf ---------- */
function askAnswer() {
  var ids = S.askIds || [];
  if (!ids.length) return '<div class="part"><p class="lk">From The Shelf</p><p class="s" style="margin-top:4px">Nothing on The Shelf fits \u201c' + esc(S.ask) + '\u201d yet. Try other words for what the room is facing.</p></div>';
  var e = pieceById(ids[S.askIdx % ids.length]); if (!e) return '';
  var q = S.askIdx % ids.length === 0 && S.askQ ? S.askQ : (e.q2 || '');
  return '<div class="part" id="askout" tabindex="-1"><p class="lk">From The Shelf \u00b7 for a room stuck on \u201c' + esc(S.ask) + '\u201d</p><p class="t" style="font-size:18px;margin-top:4px">' + tie(e.claim) + '</p><p class="who">' + esc(shortVoice(e)) + ' \u00b7 ' + actOf(e) + (total(e) ? ' \u00b7 ' + total(e) + ' minutes' : '') + '</p>' +
    (q ? '<div class="ruled"><p class="lk">A Question for the Room</p><p class="serif">' + tie(q) + '</p></div>' : '') +
    '<div class="walks">' + walk('openpiece', 'Open the whole piece', ' data-id="' + esc(e.id) + '"') + (ids.length > 1 ? walk('asknext', 'Another piece') : '') + '</div></div>';
}
function askPanel() {
  return secHtml('stuck', 'Ask About Your Room', 'What is it stuck on? \u00b7 one piece and one question come back',
    '<label class="t" for="askt" style="display:block;font-size:17px">What is your room stuck on?</label><textarea id="askt" placeholder="for example, silence after a heavy story">' + esc(S.ask) + '</textarea><button class="btn line" data-act="ask">Ask</button>' + (S.asked ? askAnswer() : ''), { shut: !S.asked && phone() });
}
function shelfList() {
  var L = (D.shelf || []).slice(), R = D.room;
  if (S.filt && R) { var re = new RegExp('(^|[^A-Za-z])' + R.abbr + ':' + R.week + '(?!\\d)'); L = L.filter(function (e) { return re.test(String(e.weeks || '')); }); }
  var q = S.find.trim().toLowerCase();
  if (q) L = L.filter(function (e) { return ((e.claim || '') + ' ' + (e.source || e.voice || '') + ' ' + (e.move || '') + ' ' + lineOf(e.question)).toLowerCase().indexOf(q) >= 0; });
  return L;
}
function shelfRows() {
  var L = shelfList(), show = S.shelfMore ? L : L.slice(0, 8), R = D.room || {};
  if (!L.length) return '<p class="s">' + (S.filt ? 'Nothing for Week ' + R.week + ' matches that.' : 'Nothing on The Shelf matches that yet. Try fewer words.') + ' You can also ask above, in Ask About Your Room.</p>' + (S.filt ? '<div class="walks">' + walk('filt', 'Show every week', ' data-v=""') + '</div>' : '');
  var h = '<div class="rows">' + show.map(function (e) {
    var parts = [shortVoice(e), actOf(e) + (total(e) ? ' \u00b7 ' + total(e) + ' minutes' : ''), 'Kept ' + fmtShort(e.written)].concat(e.state ? [e.state] : []);
    return '<button class="prow" data-act="openpiece" data-id="' + esc(e.id) + '"><span class="lab">' + lineOf(e.question) + '</span><span class="nm">' + tie(e.claim) + '</span><span class="st">' + parts.map(function (p, i) { return '<span class="' + (i ? 'nw' : 'nv') + '">' + esc(p) + '</span>'; }).join(' \u00b7 ') + '</span><span class="go"><span>Open</span> \u2192</span></button>';
  }).join('') + '</div>';
  if (L.length > 8) h += '<button class="rev" data-act="toggle" data-k="shelfmore" aria-expanded="' + S.shelfMore + '"><span>' + (S.shelfMore ? 'Show the newest only' : 'More on The Shelf') + '</span> ' + (S.shelfMore ? '\u25b4' : '\u25be') + '</button>';
  return h;
}
function whoBody() {
  var Z = D.sources || { lanes: [], music: [] };
  return '<p class="s" style="margin-top:0">Pastors, counselors, scholars and coaches, men\u2019s and women\u2019s voices. Each morning we read what they said, keep only a few, and read each against Scripture before it reaches you.</p><div class="revs vlanes">' +
    Z.lanes.map(function (l, i) { return rev('lane' + i, esc(l[0]), '<ul class="vl">' + l[1].map(function (v) { return '<li>' + esc(v[0]) + '<span>' + esc(v[1]) + '</span></li>'; }).join('') + '</ul>'); }).join('') +
    (Z.music.length ? rev('lanemusic', 'Music for the men\u2019s road', '<ul class="vl">' + Z.music.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul>') : '') + '</div>';
}
function comingBody() {
  var C = D.coming || [];
  if (!C.length) return '<p class="s" style="margin-top:0">Nothing is on the calendar yet.</p>';
  return '<div class="rows">' + C.map(function (c) { return '<a class="prow" href="' + esc(c.link) + '" target="_blank" rel="noopener"><span class="nm">' + tie(c.claim) + '</span><span class="st">' + esc(c.voice) + (c.cost ? ' \u00b7 ' + esc(c.cost) : '') + '</span><span class="go"><span>Open</span> \u2192</span></a>'; }).join('') + '</div>';
}
function viewShelf() {
  var R = D.room || {};
  var main = askPanel() + secHtml('shelf', 'Everything We\u2019ve Kept', 'Newest first \u00b7 released to every facilitator',
    '<p class="s" style="margin:0 0 12px">Every piece names the voice it came from. ' + walk('gowho', 'See everyone we read') + '</p><div class="findrow"><div class="find"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5"/><path d="M13 13l4 4"/></svg><label class="sr" for="findt">Search The Shelf</label><input id="findt" type="search" placeholder="Search" value="' + esc(S.find) + '" autocomplete="off">' + (R.week ? '<button class="fchip" data-act="filt" data-v="' + (S.filt ? '' : '1') + '" aria-pressed="' + (!!S.filt) + '">Week ' + R.week + ' only</button>' : '') + '</div></div><div id="shelfRows" style="margin-top:8px">' + shelfRows() + '</div>');
  var side = secHtml('who', 'Who We Read', 'Every voice, by lane', whoBody()) + secHtml('coming', 'Coming Up', 'Trainings and events', comingBody());
  return '<main class="view cols2"><div class="mainc">' + main + '</div><aside class="side">' + side + '</aside></main>';
}

/* ---------- Your Growth \u00b7 Craft ---------- */
function recPanel() {
  return secHtml('rec', 'Name a Voice', 'Our team answers you', S.recSent ? '<p class="kept" style="margin-top:0"><b>Sent.</b> Our team reads it and tells you which lane it joins, or why it waits.</p>' : '<label class="t" for="rect" style="display:block">Whose voice should we read?</label><textarea id="rect" placeholder="A name, a show or a link, and why it helps your room.">' + esc(S.rec) + '</textarea><button class="btn line" data-act="rec">Send to our team</button>');
}
function viewCraft() {
  var C = D.craft || { brought: [], aside: [] }, main;
  var bringing = (!D.after && D.piece && D.mine && D.mine.choice === 'bring') ? { id: D.piece.id, claim: D.piece.claim, w: lineOf(D.piece.question) } : null;
  var rows = (C.brought || []).filter(function (x) { return !(bringing && x.id === bringing.id); });
  main = broughtPanel(rows, bringing);
  if (C.aside.length) main += secHtml('aside', 'What You Set Aside', 'A no is kept too', '<div class="rows">' + C.aside.map(function (x) {
    return '<button class="prow" data-act="openpiece" data-from="craft" data-id="' + esc(x.id) + '"><span class="lab">' + x.word + '</span><span class="nm">' + tie(x.claim) + '</span><span class="st">' + esc(x.label) + ' \u00b7 it tells us what earns its place in a room</span><span class="go"><span>Open</span> \u2192</span></button>';
  }).join('') + '</div>');
  main += recPanel();
  var side = secHtml('voices', 'Voices and Lanes', 'Where your pieces come from', '<p class="s" style="margin-top:0">Pastors, counselors, scholars and coaches, men\u2019s and women\u2019s voices. Want more or less of a lane? Tell us here.</p><div class="lanes" style="margin-top:6px">' + WORDS.map(function (w) { var i = firstLane(w); return i < 0 ? '' : laneRow(D.lanes[i], i); }).join('') + '</div>' + laneKept() + '<div class="walks">' + walk('lanes', 'Every lane') + '</div>');
  return '<main class="view cols2"><div class="mainc">' + main + '</div><aside class="side">' + side + '</aside></main>';
}

/* ---------- render, focus and balance ---------- */
function focusSig() {
  var a = document.activeElement; if (!a || !ROOT.contains(a) || a === document.body) return null;
  var p = a.closest('.ap-panel');
  if (a.id) return { sel: '#' + a.id, p: p && p.id };
  var sel = a.tagName.toLowerCase() + ['act', 'v', 'k', 'id', 'tab'].filter(function (x) { return a.dataset[x] != null; }).map(function (x) { return '[data-' + x + '="' + String(a.dataset[x]).replace(/"/g, '\\"') + '"]'; }).join('');
  return { sel: sel, p: p && p.id };
}
function restoreFocus(fs, keepIt) {
  if (!keepIt) { var h = $('gH1'); if (h && fs) h.focus({ preventScroll: true }); return; }
  if (!fs) return; var n = null; try { n = ROOT.querySelector(fs.sel); } catch (e) {}
  if (!n && fs.p) { var pp = document.getElementById(fs.p); if (pp) n = pp.querySelector('.kept a,.kept button,.walk,button,textarea,input,a'); }
  if (n) n.focus({ preventScroll: true });
}
/* AP-SHELL 1, rule 8: on a computer the right column is never longer than the left; what would make it longer moves into the left column, in its order, below what is there */
var moved = [];
function balance() {
  var m = ROOT.querySelector('.mainc'), s = ROOT.querySelector('.side'); if (!m || !s) return;
  var fa = document.activeElement;
  moved.filter(function (p) { return ROOT.contains(p); }).reverse().forEach(function (p) { s.insertBefore(p, s.firstChild); }); moved = [];
  s.hidden = false; m.parentNode.classList.remove('one');
  if (wide()) {
    var first = null;
    while (s.children.length && s.offsetHeight > m.offsetHeight) { var p = s.lastElementChild; m.insertBefore(p, first); first = p; moved.unshift(p); }
    if (!s.children.length) { s.hidden = true; m.parentNode.classList.add('one'); }
  }
  if (fa && fa !== document.activeElement && document.body.contains(fa)) fa.focus({ preventScroll: true });
}
/* AP-SHIP 1, line 3: the build stands in the page foot */
function foot() { return '<p class="pfoot">Your Growth \u00b7 build ' + BUILD + ' \u00b7 Filled for the Work, Exodus 31:3 and Proverbs 24:3\u20134. Signed in as ' + esc(siteEmail()) + ', the same person the site shows.</p>'; }
function render(keepIt) {
  if (!D) return;
  moved = []; /* the panels moved by balance() belong to the DOM about to be replaced; a new view starts with none */
  var y = window.pageYOffset, fs = focusSig();
  var body = S.view === 'week' ? viewWeek() : S.view === 'shelf' ? viewShelf() : viewCraft();
  setBar();
  ROOT.innerHTML = band() + '<div class="pcwrap">' + menu() + '<div class="pcmain">' + body + foot() + '</div></div><div class="dimmer" id="gDim"></div><section class="sheet" id="gSheet" role="dialog" aria-modal="true" aria-labelledby="gSheetT" tabindex="-1"></section><div class="toast" id="gToast" role="status" aria-live="polite"></div>';
  if (S.toastM) { var tt = $('gToast'); tt.textContent = S.toastM; tt.classList.add('in'); }
  if (S.sheet) { var sh = $('gSheet'); sh.innerHTML = S.sheetHtml; sh.classList.add('open'); $('gDim').classList.add('on'); }
  balance();
  if (keepIt) window.scrollTo(0, y);
  restoreFocus(fs, keepIt);
  var f = $('findt'); if (f) f.addEventListener('input', function () { S.find = f.value; $('shelfRows').innerHTML = shelfRows(); balance(); });
}

/* ---------- sheets (Back, never Close) and the toast ---------- */
var lastFocus = null, toastT = null;
function openSheet(title, html) {
  lastFocus = document.activeElement;
  S.sheetHtml = '<div class="ohead"><button class="walk" data-act="close"><span class="ar">\u2190</span> <span class="u">Back to ' + viewName() + '</span></button><span class="lk" id="gSheetT">' + title + '</span></div><div class="obody">' + html + '</div>';
  S.sheet = title;
  var sh = $('gSheet'); sh.innerHTML = S.sheetHtml; sh.classList.add('open'); $('gDim').classList.add('on');
  setTimeout(function () { var c = sh.querySelector('[data-act=close]'); if (c) c.focus(); }, 320);
}
function sheetBody(html) { var ob = ROOT.querySelector('#gSheet .obody'); if (ob) { ob.innerHTML = html; S.sheetHtml = $('gSheet').innerHTML; } }
function closeSheet() {
  var sh = $('gSheet'); if (sh) sh.classList.remove('open'); var dm = $('gDim'); if (dm) dm.classList.remove('on'); S.sheet = ''; S.sheetHtml = '';
  if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus(); else { var h = $('gH1'); if (h) h.focus({ preventScroll: true }); }
}
function toast(m) { var t = $('gToast'); S.toastM = m; if (t) { t.textContent = m; t.classList.add('in'); } clearTimeout(toastT); toastT = setTimeout(function () { S.toastM = ''; var t2 = $('gToast'); if (t2) t2.classList.remove('in'); }, 2800); }
function shelfSheet() {
  var e = pieceById(S.sheetId); if (!e) return '<p class="s">This piece is not on The Shelf any more.</p>';
  var R = D.room || {}, d = R.weekday || 'the night', M = D.mine || {};
  var isRoom = D.piece && D.piece.id === e.id && M.choice === 'bring';
  var h = pieceF(e, 'shelf');
  if (S.sheetFrom === 'craft' || D.after) return h;
  h += '<div class="part"><p class="t" style="font-size:19px">Bring it ' + esc(d) + '?</p>' + (isRoom ? '' : measureLine(e));
  var isTeam = D.team && D.team.id === e.id;
  if (isRoom) h += '<p class="kept" id="sbk" tabindex="-1"><b>Kept.</b> ' + (M.swap ? 'It\u2019s your piece for ' + esc(d) + ' now, in place of the one our team chose. This Week shows it, ready.' : 'It\u2019s the piece you\u2019re bringing ' + esc(d) + '.') + '</p><div class="walks">' + walk('seeweek', 'See This Week') + '</div>' + (M.swap && D.team ? '<div class="walks">' + walk('sbring', 'Go back to the piece our team chose', ' data-v="back"') + '</div>' : '');
  else h += '<div class="choices two">' + choice('sbring', '1', 'Bring it', false) + choice('sbring', '0', 'Skip', S.sbk === '0') + '</div>' + (S.sbk === '0' ? '<p class="kept" id="sbk" tabindex="-1"><b>Kept.</b> It stays on The Shelf. ' + (M.choice === 'bring' && D.piece ? 'You\u2019re still bringing \u201c' + tie(String(D.piece.claim).replace(/\.$/, '')) + '.\u201d' : '') + '</p>' : '');
  return h + '</div>';
}
function settingsHtml() {
  var v = D.who.notice === 'none' ? 'none' : 'email';
  return '<p class="t">When a piece lands for your room</p><div class="choices">' + choice('notice', 'email', 'Email me', v === 'email', 'left') + choice('notice', 'none', 'No notice', v === 'none', 'left') + '</div><p class="kept" id="sk" tabindex="-1">' + (S.sk || '') + '</p>';
}
function roomsHtml() {
  return '<a class="mi room" href="' + PATHS.page + '"><b>Your Page</b><span>Walk your own road</span></a><div class="mi room" aria-current="page"><b>Your Growth</b><span>Get filled for the work</span></div><a class="mi room" href="' + PATHS.desk + '"><b>Your Desk</b><span>Care for your men</span></a>';
}
function askHtml() {
  return S.teamSent ? '<p class="t">Sent.</p><p class="s">Our team has your question and answers you on Your Desk.</p><div class="walks">' + walk('askagain', 'Ask another') + '</div>' : '<label class="t" for="askteam" style="display:block">What would you like to ask our team?</label><textarea id="askteam" placeholder="About your room, a man, or a piece."></textarea><button class="btn" data-act="asksend">Send to our team</button>';
}

/* ---------- the taps ---------- */
function fail(e) { toast(words(e)); }
function listIndex(arr, id) { for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return i; return -1; }
function bringPiece(id) {
  var p = pieceById(id); if (!p) return;
  call({ action: 'mark', what: 'bring', id: id }).then(function () { refresh(); }, fail);
  D.piece = p; D.mine = D.mine || {}; D.mine.choice = 'bring'; D.mine.opened = true; D.mine.swap = !(D.team && D.team.id === id); S.change = false;
}
document.addEventListener('keydown', function (e) {
  var sh = $('gSheet'); if (!sh || !sh.classList.contains('open')) return;
  if (e.key === 'Escape') { closeSheet(); return; }
  if (e.key === 'Tab') {
    var f = [].slice.call(sh.querySelectorAll('button,a,textarea,input')).filter(function (x) { return x.offsetParent !== null; }); if (!f.length) return;
    var a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } else if (!sh.contains(document.activeElement)) { e.preventDefault(); a.focus(); }
  }
});
host.addEventListener('click', function (ev) {
  var b = ev.target.closest('[data-act]'); if (!b || !D) return;
  var a = b.dataset.act, k = b.dataset.k, v = b.dataset.v;
  switch (a) {
    case 'tab': S.view = b.dataset.tab; closeSheet(); render(); window.scrollTo(0, 0); break;
    case 'rooms': openSheet('Your Rooms', roomsHtml()); break;
    case 'panel': panelSet(k, b.getAttribute('aria-expanded') !== 'true'); balance(); break;
    case 'toggle':
      if (k === 'shelfmore') { S.shelfMore = !S.shelfMore; $('shelfRows').innerHTML = shelfRows(); balance(); break; }
      S.open[k] = !S.open[k]; var box = b.nextElementSibling; box.classList.toggle('open', S.open[k]); b.setAttribute('aria-expanded', S.open[k]); b.lastChild.textContent = ' ' + (S.open[k] ? '\u25b4' : '\u25be'); balance(); break;
    case 'listen':
      var P = shownPiece(); if (!P) break;
      try { window.open(P.link, '_blank', 'noopener'); } catch (x) {}
      S.touched = true; D.mine = D.mine || {}; D.mine.opened = true; call({ action: 'mark', what: 'open', id: P.id }).catch(function () {}); render(true); break;
    case 'bring':
      var BP = shownPiece(); if (!BP) break;
      S.touched = true;
      if (v === 'bring') { bringPiece(BP.id); }
      else { call({ action: 'growth_answer', kind: 'setaside', id: BP.id, text: 'Week ' + (D.room ? D.room.week : ''), answer: 'not needed' }).then(function () { refresh(); }, fail); D.mine = D.mine || {}; D.mine.choice = 'no'; S.change = false; D.piece = BP; }
      render(true); if (v === 'bring') toast('Kept. It\u2019s on Your Desk for the night.'); break;
    case 'gopiece':
      var gp = $('p-piece'); if (!gp) break;
      if (gp.classList.contains('shut')) { panelSet('piece', true); balance(); gp = $('p-piece'); }
      window.scrollTo(0, gp.getBoundingClientRect().top + window.pageYOffset - barH() - 12);
      var gd = $('pdec') || gp.querySelector('.ap-panel-head'); if (gd) gd.focus({ preventScroll: true }); break;
    case 'bline':
      var BL = shownPiece(); if (!BL || !v) break;
      D.mine = D.mine || {}; D.mine.lines = D.mine.lines || {};
      var onl = !D.mine.lines[v]; if (onl) D.mine.lines[v] = true; else delete D.mine.lines[v];
      S.touched = true;
      call({ action: 'growth_answer', kind: 'line', id: BL.id, text: v, answer: onl ? 'on' : 'off' }).catch(function (e2) { if (onl) delete D.mine.lines[v]; else D.mine.lines[v] = true; render(true); fail(e2); });
      render(true); if (onl) toast('On the room\u2019s card for ' + ((D.room && D.room.weekday) || 'the night') + '.'); break;
    case 'shelfweek': S.view = 'shelf'; S.filt = !!(D.room && D.room.week); closeSheet(); render(); window.scrollTo(0, 0); break;
    case 'after':
      var al = $('aline'); if (al) S.afterLine = al.value; S.afterWord = v; render(true); break;
    case 'afterkeep':
      var t = $('aline'); S.afterLine = t ? t.value.trim() : '';
      if (!S.afterWord) { toast('Choose what the room did with it first.'); break; }
      if (b.disabled) break; b.disabled = true;
      call({ action: 'growth_answer', kind: 'after', id: D.after.id, text: S.afterLine, answer: S.afterWord }).then(function () {
        D.after.kept = true; D.after.word = S.afterWord; D.after.line = S.afterLine; S.afterWord = ''; S.afterLine = ''; render(true); refresh();
      }, function (e) { b.disabled = false; fail(e); }); break;
    case 'ask':
      var q = $('askt'); if (!q.value.trim()) { toast('Write a line first.'); q.focus(); break; }
      S.ask = q.value.trim(); b.disabled = true; b.textContent = 'Asking\u2026';
      call({ action: 'ask', text: S.ask }).then(function (r) { S.asked = true; S.askIdx = 0; S.askIds = r.ids || []; S.askQ = r.question || ''; render(true); var ao = $('askout'); if (ao) ao.focus({ preventScroll: true }); }, function (e) { b.disabled = false; b.textContent = 'Ask'; fail(e); }); break;
    case 'asknext': S.askIdx++; render(true); var ao2 = $('askout'); if (ao2) ao2.focus({ preventScroll: true }); break;
    case 'openpiece': S.sheetId = b.dataset.id; S.sheetFrom = b.dataset.from || ''; S.sbk = ''; openSheet('A piece from The Shelf', shelfSheet()); break;
    case 'sbring':
      var sid = S.sheetId, TP = D.team ? D.team.id : '';
      if (v === '1') { bringPiece(sid); S.sbk = '1'; }
      else if (v === 'back') { bringPiece(TP); S.sbk = '1'; }
      else { call({ action: 'growth_answer', kind: 'setaside', id: sid, text: D.room ? 'Week ' + D.room.week : '', answer: 'not now' }).then(function () { refresh(); }, fail); S.sbk = '0'; }
      sheetBody(shelfSheet()); render(true); var sk = ROOT.querySelector('#gSheet #sbk'); if (sk) sk.focus(); break;
    case 'seeweek': S.view = 'week'; closeSheet(); render(); window.scrollTo(0, 0); break;
    case 'close': closeSheet(); break;
    case 'gowho':
      var pw = $('p-who'); if (pw) { if (pw.classList.contains('shut')) panelSet('who', true); balance(); pw = $('p-who'); var hb = pw.querySelector('.ap-panel-head'); window.scrollTo(0, pw.getBoundingClientRect().top + window.pageYOffset - barH() - 12); if (hb) hb.focus({ preventScroll: true }); } break;
    case 'filt': S.filt = !!v; S.shelfMore = false; render(true); var fc = ROOT.querySelector('.fchip'); if (fc) fc.focus(); break;
    case 'lanes': openSheet('Every Lane', lanesSheet()); break;
    case 'lane':
      var lp = String(v).split(':'), ln = (D.lanes || [])[Number(lp[1])]; if (!ln) break;
      D.laneSay = D.laneSay || {};
      var was = D.laneSay[ln.lane] || '', now = was === lp[0] ? '' : lp[0];
      if (now) D.laneSay[ln.lane] = now; else delete D.laneSay[ln.lane];
      S.touched = true;
      call({ action: 'growth_answer', kind: 'lane', text: ln.lane, answer: now || 'off' }).catch(function (e2) { if (was) D.laneSay[ln.lane] = was; else delete D.laneSay[ln.lane]; if (S.sheet === 'Every Lane') sheetBody(lanesSheet()); render(true); fail(e2); });
      var inSheet = S.sheet === 'Every Lane', ob = inSheet ? ROOT.querySelector('#gSheet .obody') : null, sc = ob ? ob.scrollTop : 0;
      if (inSheet) sheetBody(lanesSheet());
      render(true);
      if (inSheet) { var ob2 = ROOT.querySelector('#gSheet .obody'); if (ob2) ob2.scrollTop = sc; }
      var nb = ROOT.querySelector((inSheet ? '#gSheet ' : '.side ') + '[data-act="lane"][data-v="' + v + '"]'); if (nb) nb.focus({ preventScroll: true });
      break;
    case 'rec':
      var r = $('rect'); S.rec = r.value.trim(); if (!S.rec) { toast('Add a name, a show or a link first.'); break; }
      b.disabled = true; call({ action: 'growth_answer', kind: 'voice', text: S.rec }).then(function () { S.recSent = true; render(true); }, function (e) { b.disabled = false; fail(e); }); break;
    case 'settings': S.sk = ''; openSheet('Settings', settingsHtml()); break;
    case 'notice':
      D.who.notice = v; S.sk = '<b>Kept.</b> ' + (v === 'email' ? 'An email comes when your room\u2019s piece lands.' : 'No notice. It waits here.');
      call({ action: 'growth_answer', kind: 'notice', answer: v }).catch(fail); sheetBody(settingsHtml()); var sk2 = ROOT.querySelector('#gSheet #sk'); if (sk2) sk2.focus(); break;
    case 'askteam': S.teamSent = false; openSheet('Ask Our Team', askHtml()); break;
    case 'asksend':
      var aq = $('askteam'); if (!aq.value.trim()) { toast('Write your question first.'); break; }
      b.disabled = true; call({ action: 'growth_answer', kind: 'team', text: aq.value.trim() }).then(function () { S.teamSent = true; sheetBody(askHtml()); }, function (e) { b.disabled = false; fail(e); }); break;
    case 'askagain': S.teamSent = false; sheetBody(askHtml()); break;
  }
});
window.addEventListener('resize', function () { setBar(); if (D) balance(); });

/* AP-SHIP 1, line 7: the page counts the rules the browser accepted against the stamped count; short, it tells the Front Desk once per build (kept in this browser so it never repeats) and the desk shows one line with the link. */
function selfCheck() {
  if (location.pathname.indexOf('/author') >= 0 || window.top !== window) return;
  var short = [], got = 0, want = 0;
  Object.keys(RULES).forEach(function (k) {
    var st = document.querySelector('style[data-ap-sheet="' + k + '"]'), n = -1;
    try { n = st && st.sheet ? st.sheet.cssRules.length : -1; } catch (e) { n = -1; }
    got += Math.max(0, n); want += RULES[k];
    if (n < RULES[k]) short.push(k + ' ' + n + ' of ' + RULES[k]);
  });
  if (!short.length) return;
  var key = 'ap_check_growth_' + BUILD;
  try { if (localStorage.getItem(key)) return; localStorage.setItem(key, String(Date.now())); } catch (e) {}
  fetch(DESK_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'page_check', page: location.pathname, name: 'Your Growth', build: BUILD, accepted: got, expected: want, detail: short.join(', '), ua: String(navigator.userAgent || '').slice(0, 120) }) }).catch(function () {});
}
if (document.readyState === 'complete') setTimeout(selfCheck, 0); else window.addEventListener('load', selfCheck);
window.growthBuild = BUILD;
(function start(tries) { if (!lwMe() && tries < 12) return setTimeout(function () { start(tries + 1); }, 300); load(); })(0);
})();
