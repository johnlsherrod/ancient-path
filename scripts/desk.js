/* AP-DESK desk.js build 25.2 — the Front Desk page, served by the Front Desk script (FrontDesk.gs build 28.4, ?file=desk.js).
   25.2 (Nov 2, 2026, with Research reader build 12): a card whose key begins research:hold: has its one button read Hold it, not Done. Pressing it closes the card as before; the Research reader reads a closed hold card at 6:00 PM Central as a piece held back. Nothing else changes.
   25.1 (Oct 26, 2026, after the live read): every small outlined button that only opens or fills something (See the email under People, Open the Weeks tab, the Ask: questions, the mail and text links) is a line with an arrow; the suggested questions under Ask the desk are quiet lines; a link dressed as an outlined button draws as a line.
   25 (Oct 26, 2026, the three shapes of an ask, AP-SHAPES 1): Ask the desk is a question over a writing area with one button, Ask (Enter asks); every See… and Open… button is a line with an arrow, and a link dressed as a button draws as a line; Done, Checked and I closed it are outlined, an answer by press. The filled buttons left on a screen are the acts: Ask, Open the desk, Add it, Save, Send it.
   Build 24.1 (Oct 23): Build 24.1 (Oct 23): the sign-in box sits evenly between its lines at the band's left edge; the second stop of How this desk works reads in John's words. Build 24 (Oct 23, 2026, the room desk after Jason's walk): the gate reads the site's signed-in person and opens only when it is the person the key is for (never a key alone); the sign-in box reads "Good morning. Sign in to open the desk." at the band's left edge, with no email box; How this desk works (five stops, each a link into the desk); the room's status line is the headline with every count a link; Do this without the call question, a Bring-it card carrying its points; This week with the wider voice, the community's voice and the article; The road ahead; The men as one roster under the room's name with status words, Text · Email (each with copy) · His row, and the story board in place; every add shows at once; bronze buttons carry white text. Build 23: The road to January is the week's one move, then each tool from what we put out to what came and what became of it. */
(function () {
var host = document.getElementById("apDesk"); if (!host || host.getAttribute("data-desk")) return; host.setAttribute("data-desk", "24.1"); host.classList.add("ap-desk");
host.innerHTML = "<style>\n/* AP-SHAPES 1.1: the three shapes of an ask (Find, Answer, Walk) and the weight rule; one source, shapes.css */\n.ap-find{position:relative;max-width:34em;margin:0 0 18px} .ap-find input{width:100%;box-sizing:border-box;font:400 16px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-ink,#2B3040) !important;background:#fff;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:8px 0 8px 28px;outline:none} .ap-find input:focus{border-bottom-color:var(--ap-navy,#1F2A44)} .ap-find::before{content:\"\";position:absolute;left:2px;top:11px;width:12px;height:12px;border:1.5px solid var(--ap-quiet,#6B7280);border-radius:50%} .ap-find::after{content:\"\";position:absolute;left:13px;top:23px;width:7px;height:1.5px;background:var(--ap-quiet,#6B7280);transform:rotate(45deg);transform-origin:left center} .ap-find input::placeholder{color:var(--ap-quiet,#6B7280)} .ap-answer{margin:0 0 18px;max-width:40em} .ap-answer .ap-answer-q{font:400 20px/1.4 var(--ap-serif,'Source Serif 4',serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 10px;text-wrap:balance} .ap-answer .ap-answer-lead{font:400 15px/1.5 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-quiet,#6B7280) !important;margin:-4px 0 10px} .ap-answer input,.ap-answer textarea{display:block;width:100%;box-sizing:border-box;font:400 17px/1.5 var(--ap-serif,'Source Serif 4',serif) !important;color:var(--ap-ink,#2B3040) !important;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-left:3px solid var(--ap-bronze,#B8945F);border-radius:4px;padding:12px 14px;outline:none;resize:vertical} .ap-answer input{min-height:0} .ap-answer textarea{min-height:96px} .ap-answer input:focus,.ap-answer textarea:focus{border-color:var(--ap-navy,#1F2A44);border-left-color:var(--ap-bronze,#B8945F)} .ap-answer input::placeholder,.ap-answer textarea::placeholder{color:var(--ap-quiet,#6B7280);font-style:italic} .ap-answer .ap-answer-act{display:flex;align-items:center;gap:14px;margin:10px 0 0} .ap-answer .ap-answer-state{font:400 14px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-quiet,#6B7280) !important;margin:8px 0 0;min-height:1.4em} .ap-answer .ap-answer-state.kept{color:var(--ap-bronze,#B8945F) !important} .ap-answer .ap-answer-state.kept::before{content:\"\\2713\\00a0\"} .ap-walk{display:inline-block;font:600 15px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:0 0 1px;margin:0;cursor:pointer;text-decoration:none !important;text-align:left} .ap-walk:hover{border-bottom-color:var(--ap-navy,#1F2A44)} .ap-walk .ap-walk-arrow{display:inline-block;margin-left:6px;color:var(--ap-bronze,#B8945F)} .ap-walk+.ap-walk{margin-left:18px} .ap-walk.quiet{font-weight:400 !important;color:var(--ap-quiet,#6B7280) !important;border-bottom-color:var(--ap-rule,#E2DCD1)} a.ap-btn.ap-btn-primary,a.ap-btn.ap-btn-ghost{background:none !important;color:var(--ap-navy,#1F2A44) !important;border:0 !important;border-bottom:1px solid var(--ap-bronze,#B8945F) !important;border-radius:0 !important;padding:0 0 1px !important;font:600 15px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;box-shadow:none !important;display:inline-block} a.ap-btn.ap-btn-primary::after,a.ap-btn.ap-btn-ghost::after{content:\"\\00a0\\2192\";color:var(--ap-bronze,#B8945F)} a.ap-btn.ap-btn-primary+.ap-btn,.ap-walk+a.ap-btn.ap-btn-primary,a.ap-btn.ap-btn-primary+.ap-walk{margin-left:18px} @media (prefers-reduced-motion: reduce){.ap-walk,.ap-answer input,.ap-answer textarea{transition:none}}\n.ask-tries{gap:6px 18px}.ask-tries button{background:none;border:0;border-bottom:1px solid var(--ap-rule);border-radius:0;padding:0 0 1px;font:400 14px/1.4 var(--ap-sans);color:var(--ap-navy)}.ask-tries button:hover{border-bottom-color:var(--ap-navy)}\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap'); .ap-desk { --ap-navy: #1F2A44; --ap-band: #1B2A3A; --ap-bronze: #B8945F; --ap-paper: #FBF9F5; --ap-rule: #E2DCD1; --ap-ink: #2B3040; --ap-quiet: #6B7280; --ap-band-ink: #F3EDE3; --ap-band-quiet: #B7AFA4; --ap-good: #3D7A52; --ap-warn: #9A6B2A; --ap-crit: #9A3B2F; --ap-serif: 'Source Serif 4', Georgia, 'Times New Roman', serif; --ap-sans: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: var(--ap-ink); font: 400 16px/1.5 var(--ap-sans); -webkit-font-smoothing: antialiased; text-align: left; }\n.ap-desk *, .ap-desk *::before, .ap-desk *::after { box-sizing: border-box; }\n.ap-desk h1, .ap-desk h2, .ap-desk h3, .ap-desk p { margin: 0; font-weight: 400; text-wrap: balance; }\n.ap-desk a { color: var(--ap-navy); text-decoration: none; }\n.ap-desk a:hover, .ap-desk a:focus-visible { text-decoration: underline; }\n.ap-desk :focus-visible { outline: 2px solid var(--ap-bronze); outline-offset: 2px; }\n.ap-desk button, .ap-desk input { font: inherit; }\n.ap-desk [hidden] { display: none !important; }\n.ap-desk .ap-band { position: relative; width: 100vw; margin: 0 0 34px calc(50% - 50vw); background: var(--ap-band) url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='600' viewBox='0 0 1600 600'><g fill='none' stroke='%23B8945F' stroke-width='1.4' opacity='0.15'><path d='M-50 460 C 250 380, 450 500, 760 420 S 1300 320, 1680 400'/><path d='M-50 500 C 250 430, 480 540, 800 470 S 1320 380, 1680 450'/><path d='M-50 420 C 280 330, 520 460, 820 370 S 1280 270, 1680 350'/><path d='M-50 540 C 300 500, 520 580, 840 520 S 1340 440, 1680 510'/><path d='M-50 380 C 300 300, 560 420, 880 330 S 1300 240, 1680 310'/></g><g fill='%23B8945F' opacity='0.20'><circle cx='760' cy='420' r='4'/></g></svg>\") 50% 100%/cover no-repeat; }\n.ap-desk .ap-band, .ap-desk .ap-band * { text-align: center; }\n.ap-desk .ap-band-in { max-width: 720px; margin: 0 auto; padding: 60px 24px 56px; display: grid; gap: 12px; justify-items: center; }\n.ap-desk .ap-eyebrow { font: 600 13px/1.65 var(--ap-sans); letter-spacing: 3px; text-transform: uppercase; color: var(--ap-bronze); }\n.ap-desk .ap-hello { font: 600 44px/1.15 var(--ap-serif); color: var(--ap-band-ink); letter-spacing: -0.01em; }\n.ap-desk .ap-line { font: 400 19px/1.6 var(--ap-sans); color: var(--ap-band-quiet); max-width: 600px; }\n.ap-desk .ap-line .ap-s { display: inline-block; }\n.ap-desk .ap-primary { display: inline-block; margin-top: 10px; font: 600 15px/1.2 var(--ap-sans); letter-spacing: .02em; background: var(--ap-bronze); color: var(--ap-band); padding: 15px 26px; border-radius: 2px; border: 1px solid var(--ap-bronze); max-width: 100%; cursor: pointer; }\n.ap-desk .ap-primary:hover { background: #C9A86F; text-decoration: none; }\n.ap-desk .ap-primary[disabled] { opacity: .6; cursor: default; }\n.ap-desk .ap-primary-note { font: 400 15px/1.5 var(--ap-sans); color: var(--ap-band-quiet); max-width: 520px; }\n.ap-desk .ap-gate-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 10px; }\n.ap-desk .ap-gate-row input { font: 400 22px/1.2 var(--ap-sans); letter-spacing: .3em; width: 170px; max-width: 100%; padding: 11px 12px; border: 1px solid var(--ap-bronze); border-radius: 2px; background: #fff; color: var(--ap-ink); text-align: center; }\n.ap-desk .ap-gate-row input.ap-email { letter-spacing: 0; font-size: 17px; width: 320px; text-align: left; }\n.ap-desk .ap-gate-row .ap-primary { margin-top: 0; }\n.ap-desk .ap-gate-err { color: #F0C9B9; font: 400 15px/1.5 var(--ap-sans); max-width: 520px; }\n.ap-desk .ap-gate-again { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-band-quiet); background: none; border: 0; text-decoration: underline; cursor: pointer; padding: 0; }\n@media (max-width: 640px) { .ap-desk .ap-band-in { padding: 44px 20px 40px; }\n.ap-desk .ap-hello { font-size: 34px; }\n.ap-desk .ap-line { font-size: 17px; }\n }\n.ap-desk .wrap { max-width: 1040px; margin: 0 auto; padding: 0 0 48px; }\n.ap-desk .status { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .dot { width: 9px; height: 9px; border-radius: 50%; background: var(--ap-rule); display: inline-block; flex: 0 0 auto; }\n.ap-desk .dot.live { background: var(--ap-good); }\n.ap-desk .dot.stale { background: var(--ap-warn); }\n.ap-desk .dot.off { background: var(--ap-crit); }\n.ap-desk button.plain { font: 600 13px/1 var(--ap-sans); letter-spacing: .02em; color: var(--ap-navy); background: transparent; border: 1px solid var(--ap-rule); border-radius: 2px; padding: 9px 14px; cursor: pointer; }\n.ap-desk button.plain:hover { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\n.ap-desk .note { margin-top: 16px; padding: 14px 18px; background: var(--ap-paper); border-left: 3px solid var(--ap-warn); font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); }\n.ap-desk .note.crit { border-left-color: var(--ap-crit); }\n.ap-desk .note strong { color: var(--ap-navy); font-weight: 600; }\n.ap-desk .ap-sec { margin-top: 40px; padding-top: 22px; border-top: 1px solid var(--ap-rule); display: grid; gap: 16px; }\n.ap-desk .ap-sec.first { margin-top: 28px; border-top: 0; padding-top: 0; }\n.ap-desk .ap-sec > * { min-width: 0; }\n.ap-desk .wrap { min-width: 0; max-width: min(1040px, 100%); }\n.ap-desk .ap-sec-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 6px 16px; }\n.ap-desk .ap-kind { font: 600 11px/1 var(--ap-sans); letter-spacing: .14em; text-transform: uppercase; color: var(--ap-bronze); margin-bottom: 8px; }\n.ap-desk .ap-h2 { font: 400 26px/1.25 var(--ap-serif); color: var(--ap-navy); }\n.ap-desk .ap-sec-note { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .muted { color: var(--ap-quiet); }\n.ap-desk .small { font-size: 13px; }\n.ap-desk .ap-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }\n.ap-desk .ap-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n.ap-desk .ap-grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }\n@media (max-width: 860px) { .ap-desk .ap-grid, .ap-desk .ap-grid-2 { grid-template-columns: 1fr; }\n.ap-desk .ap-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n }\n@media (max-width: 420px) { .ap-desk .ap-grid-4 { grid-template-columns: 1fr; }\n }\n.ap-desk .ap-card { display: flex; flex-direction: column; gap: 10px; padding: 22px 22px 20px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; min-width: 0; }\n.ap-desk .ap-card.is-next { border-color: var(--ap-bronze); box-shadow: inset 3px 0 0 var(--ap-bronze); }\n.ap-desk .ap-card-kind { font: 600 11px/1 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\n.ap-desk .ap-card-title { font: 400 22px/1.25 var(--ap-serif); color: var(--ap-navy); overflow-wrap: anywhere; }\n.ap-desk .ap-card-state { font: 400 14px/1.45 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .ap-card-body { font: 400 15px/1.6 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; white-space: pre-line; }\n.ap-desk .ap-card-actions { margin-top: auto; padding-top: 12px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }\n.ap-desk .ap-btn { display: inline-block; font: 600 14px/1 var(--ap-sans); letter-spacing: .02em; padding: 12px 18px; border-radius: 2px; border: 1px solid transparent; cursor: pointer; }\n.ap-desk .ap-btn:hover { text-decoration: none; }\n.ap-desk .ap-btn-primary { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\n.ap-desk .ap-btn-primary:hover { background: #2B3856; }\n.ap-desk .ap-btn-primary[disabled] { opacity: .6; cursor: default; }\n.ap-desk .ap-btn-ghost { background: transparent; color: var(--ap-navy); border-color: var(--ap-rule); }\n.ap-desk .ap-btn-ghost:hover { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\n.ap-desk .tabs { display: flex; gap: 8px; flex-wrap: wrap; }\n.ap-desk .tabs button { font: 600 13px/1 var(--ap-sans); letter-spacing: .02em; padding: 10px 16px; border-radius: 2px; border: 1px solid var(--ap-rule); background: transparent; color: var(--ap-navy); cursor: pointer; }\n.ap-desk .tabs button[aria-pressed=\"true\"] { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\n.ap-desk .lane { display: grid; gap: 12px; }\n.ap-desk .act .ap-card-state .wait { color: var(--ap-warn); font-weight: 600; }\n.ap-desk .act .ap-card-state .wait::before { content: \"· \"; color: var(--ap-quiet); font-weight: 400; }\n.ap-desk .empty { padding: 22px; background: var(--ap-paper); border: 1px dashed var(--ap-rule); border-radius: 6px; display: grid; gap: 4px; }\n.ap-desk .empty strong { font: 400 20px/1.3 var(--ap-serif); color: var(--ap-navy); }\n.ap-desk .empty span { font: 400 15px/1.55 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .ask { display: grid; gap: 12px; padding: 22px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; }\n.ap-desk .ask-row { display: flex; gap: 10px; flex-wrap: wrap; }\n.ap-desk .ask-row input { flex: 1 1 320px; min-width: 0; font: 400 17px/1.4 var(--ap-sans); padding: 12px 14px; border: 1px solid var(--ap-rule); border-radius: 2px; background: #fff; color: var(--ap-ink); }\n.ap-desk .ask-row input:focus { border-color: var(--ap-bronze); outline: none; }\n.ap-desk .ask-q { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .ask-a { font: 400 17px/1.6 var(--ap-serif); color: var(--ap-ink); white-space: pre-line; border-left: 3px solid var(--ap-bronze); padding-left: 16px; }\n.ap-desk .ask-note { font: 400 13px/1.5 var(--ap-sans); color: var(--ap-quiet); } .ap-desk .ask-note.bad { font: 600 15px/1.5 var(--ap-sans); color: var(--ap-navy); background: #fff; border: 1px solid var(--ap-rule); border-left: 4px solid var(--ap-bronze); border-radius: 2px; padding: 14px 16px; display: grid; gap: 12px; justify-items: start; } .ap-desk .ask-note.bad span { font-weight: 400; }\n.ap-desk .ask-tries { display: flex; gap: 8px; flex-wrap: wrap; }\n.ap-desk .ask-tries button { font: 400 13px/1.3 var(--ap-sans); color: var(--ap-navy); background: #fff; border: 1px solid var(--ap-rule); border-radius: 2px; padding: 7px 11px; cursor: pointer; text-align: left; }\n.ap-desk .ask-tries button:hover { border-color: var(--ap-bronze); }\n.ap-desk .tile { background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; padding: 18px 20px 16px; display: grid; gap: 4px; min-width: 0; }\n.ap-desk .tile .label { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\n.ap-desk .tile .num { font: 400 36px/1.1 var(--ap-serif); color: var(--ap-navy); font-variant-numeric: tabular-nums; }\n.ap-desk .tile .num small { font: 400 15px/1 var(--ap-sans); color: var(--ap-quiet); margin-left: 6px; }\n.ap-desk .tile .sub { font: 400 14px/1.45 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .tile.hero { border-color: var(--ap-bronze); box-shadow: inset 3px 0 0 var(--ap-bronze); }\n.ap-desk .seats { display: flex; gap: 4px; margin-top: 8px; }\n.ap-desk .seat { flex: 1; height: 8px; border-radius: 2px; background: var(--ap-rule); }\n.ap-desk .seat.on { background: var(--ap-bronze); }\n.ap-desk .tablewrap { overflow-x: auto; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; }\n.ap-desk table { border-collapse: collapse; width: 100%; font: 400 15px/1.45 var(--ap-sans); min-width: 640px; margin: 0; }\n.ap-desk th, .ap-desk td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--ap-rule); vertical-align: top; background: transparent; }\n.ap-desk th { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); white-space: nowrap; }\n.ap-desk tr:last-child td { border-bottom: 0; }\n.ap-desk td.num { font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }\n.ap-desk .step { white-space: nowrap; font-size: 14px; }\n.ap-desk .step .ok { color: var(--ap-good); font-weight: 600; }\n.ap-desk .step .no { color: var(--ap-quiet); }\n.ap-desk .name { font: 400 18px/1.3 var(--ap-serif); color: var(--ap-navy); }\n.ap-desk .stage { display: inline-block; font: 600 12px/1.2 var(--ap-sans); letter-spacing: .08em; text-transform: uppercase; color: var(--ap-quiet); white-space: nowrap; }\n.ap-desk .stage.seated { color: var(--ap-good); }\n.ap-desk .ro-cards { display: none; }\n.ap-desk .ro-cards .ap-card { gap: 8px; }\n.ap-desk .ro-cards .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 14px; margin-top: 4px; }\n.ap-desk .ro-cards .fact { display: grid; gap: 2px; min-width: 0; }\n.ap-desk .ro-cards .fact .k { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .1em; text-transform: uppercase; color: var(--ap-quiet); }\n.ap-desk .ro-cards .fact .v { font: 400 15px/1.4 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; }\n.ap-desk .ro-cards .fact.wide { grid-column: 1 / -1; }\n.ap-desk .room-list { margin-top: 16px; }\n.ap-desk .room-list .seatno { font: 600 12px/1.2 var(--ap-sans); letter-spacing: .08em; text-transform: uppercase; color: var(--ap-bronze); white-space: nowrap; }\n.ap-desk .room-list .how { display: inline-block; font: 600 12px/1.2 var(--ap-sans); letter-spacing: .06em; text-transform: uppercase; color: var(--ap-quiet); white-space: nowrap; }\n.ap-desk .room-list .how.hand { color: var(--ap-warn); }\n@media (max-width: 860px) { .ap-desk .ro-table { display: none; }\n.ap-desk .ro-cards { display: grid; gap: 12px; }\n }\n.ap-desk .door { padding: 20px 22px; border: 1px solid var(--ap-rule); border-radius: 6px; background: #fff; display: grid; gap: 12px; align-content: start; min-width: 0; }\n.ap-desk .door h3 { font: 400 20px/1.3 var(--ap-serif); color: var(--ap-navy); }\n.ap-desk ul.list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }\n.ap-desk ul.list li { display: grid; grid-template-columns: 1fr auto; gap: 2px 12px; font: 400 15px/1.45 var(--ap-sans); border-bottom: 1px solid var(--ap-rule); padding-bottom: 10px; min-width: 0; margin: 0; }\n.ap-desk ul.list li:last-child { border-bottom: 0; padding-bottom: 0; }\n.ap-desk ul.list li > span:first-child { min-width: 0; overflow-wrap: anywhere; }\n.ap-desk ul.list .r { color: var(--ap-quiet); font-size: 13px; white-space: nowrap; font-variant-numeric: tabular-nums; }\n.ap-desk ul.list .s { grid-column: 1 / -1; color: var(--ap-quiet); font-size: 14px; overflow-wrap: anywhere; }\n.ap-desk .kind { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .1em; text-transform: uppercase; color: var(--ap-bronze); margin-right: 6px; }\n.ap-desk .bars { display: grid; gap: 8px; }\n.ap-desk .bar-row { display: grid; grid-template-columns: minmax(90px, 150px) 1fr 36px; gap: 10px; align-items: center; font: 400 14px/1.4 var(--ap-sans); }\n.ap-desk .bar-row > span:first-child { min-width: 0; overflow-wrap: anywhere; }\n.ap-desk .bar-row .track { height: 10px; background: var(--ap-rule); border-radius: 2px; overflow: hidden; }\n.ap-desk .bar-row .fill { height: 100%; background: var(--ap-bronze); border-radius: 2px; }\n.ap-desk .bar-row .n { text-align: right; font-variant-numeric: tabular-nums; color: var(--ap-quiet); }\n.ap-desk .money { font: 400 30px/1.1 var(--ap-serif); color: var(--ap-navy); font-variant-numeric: tabular-nums; }\n.ap-desk .money small { font: 400 14px/1.4 var(--ap-sans); color: var(--ap-quiet); margin-left: 6px; }\n.ap-desk .ap-foot { margin-top: 40px; padding-top: 16px; border-top: 1px solid var(--ap-rule); font: 400 13px/1.6 var(--ap-sans); color: var(--ap-quiet); display: grid; gap: 6px; }\n.ap-desk .ap-foot a, .ap-desk .ap-foot button { color: var(--ap-navy); text-decoration: underline; font: inherit; font-weight: 600; background: none; border: 0; padding: 0; cursor: pointer; }\n@media (prefers-reduced-motion: no-preference) { .ap-desk .ap-btn, .ap-desk .ap-primary, .ap-desk button.plain { transition: background-color .15s ease, color .15s ease, border-color .15s ease; }\n }\n\n/* build 9: the site styles every link at id strength; these win over it */\n#apDesk.ap-desk a { color: var(--ap-navy); text-decoration: none; }\n#apDesk.ap-desk a:hover, #apDesk.ap-desk a:focus-visible { text-decoration: underline; }\n#apDesk.ap-desk a.ap-primary, #apDesk.ap-desk a.ap-primary:hover { color: var(--ap-band); text-decoration: none; } #pageContainer #apDesk.ap-desk a, #pageContainer #apDesk.ap-desk a:hover, #pageContainer #apDesk.ap-desk a:focus, #pageContainer #apDesk.ap-desk a:active, #pageContainer #apDesk.ap-desk a:visited, #apDesk.ap-desk a, #apDesk.ap-desk a:hover, #apDesk.ap-desk a:focus, #apDesk.ap-desk a:active, #apDesk.ap-desk a:visited { text-decoration: none !important; text-decoration-line: none !important; } #pageContainer #apDesk.ap-desk a:not(.ap-primary):not(.ap-btn):hover, #apDesk.ap-desk a:not(.ap-primary):not(.ap-btn):hover { text-decoration: underline !important; text-decoration-line: underline !important; }\n#apDesk.ap-desk a.ap-btn-primary, #apDesk.ap-desk a.ap-btn-primary:hover { color: #fff; text-decoration: none; }\n#apDesk.ap-desk a.ap-btn-ghost { color: var(--ap-navy); text-decoration: none; }\n#apDesk.ap-desk a.ap-btn-ghost:hover { color: #fff; text-decoration: none; }\n#apDesk.ap-desk .ap-foot a { text-decoration: underline; }\n.ap-desk .ap-read { display: grid; gap: 10px; margin-top: 4px; padding-top: 14px; border-top: 1px solid var(--ap-rule); }\n.ap-desk .ap-read h4 { margin: 6px 0 0; font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\n.ap-desk .ap-read .ask-a { font-size: 16px; }\n\n/* build 14 */\n.ap-desk [id] { scroll-margin-top: 110px; }\n.ap-desk #gDesk .ap-primary { display: block; width: fit-content; max-width: 100%; margin: 10px auto 0; }\n.ap-desk #gDesk .ap-primary-note { margin: 22px auto 0; }\n.ap-desk .srch p.srch-s { font: 400 18px/1.6 var(--ap-sans); margin: 0 0 12px; max-width: 760px; }\n.ap-desk .srch .ap-card { margin-top: 18px; }\n.ap-desk .srch .srch-foot { margin-top: 14px; }\n/* build 16: this week, the pathway, summary lines, the asks, Add his name, the words */\n.ap-desk .tw { display: grid; gap: 14px; padding: 24px 26px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-left: 4px solid var(--ap-bronze); border-radius: 6px; }\n.ap-desk .tw p.tw-s { font: 400 18px/1.6 var(--ap-sans); margin: 0; max-width: 820px; }\n.ap-desk .tw .tw-next { display: grid; gap: 6px; padding-top: 14px; border-top: 1px solid var(--ap-rule); }\n.ap-desk .tw .tw-next .ap-card-actions { padding-top: 6px; }\n.ap-desk .sum { font: 400 16px/1.6 var(--ap-sans); color: var(--ap-ink); padding: 12px 14px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; display: grid; gap: 8px; }\n.ap-desk .sum strong { font-weight: 600; color: var(--ap-navy); }\n.ap-desk .sum .fix { display: flex; flex-wrap: wrap; gap: 6px 10px; align-items: center; }\n.ap-desk .ap-btn-sm { padding: 7px 11px; font-size: 13px; }\n.ap-desk .ap-glow { animation: apGlow 2.2s ease-out 1; }\n@keyframes apGlow { 0% { box-shadow: 0 0 0 5px var(--ap-bronze); } 100% { box-shadow: 0 0 0 0 transparent; } }\n.ap-desk .nm-form { display: inline-flex; gap: 6px; flex-wrap: wrap; align-items: center; }\n.ap-desk .nm-form input { font: 400 15px/1.3 var(--ap-sans); padding: 7px 10px; border: 1px solid var(--ap-rule); border-radius: 2px; width: 220px; max-width: 100%; background: #fff; color: var(--ap-ink); }\n.ap-desk .ap-mail { display: grid; gap: 10px; margin-top: 4px; padding: 14px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; grid-column: 1 / -1; }\n.ap-desk .ap-mail pre { margin: 0; white-space: pre-wrap; font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; }\n.ap-desk .ap-mail .ap-mail-h { font: 600 13px/1.4 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .mv { display: grid; gap: 12px; }\n.ap-desk .mv .ap-card { gap: 8px; }\n.ap-desk .mv select, .ap-desk .mv input[type=date] { font: 400 15px/1.3 var(--ap-sans); padding: 8px 10px; border: 1px solid var(--ap-rule); border-radius: 2px; background: #fff; color: var(--ap-ink); max-width: 100%; }\n.ap-desk .mv .mv-row { display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center; font: 400 14px/1.4 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .mv .mv-row label { display: inline-flex; gap: 6px; align-items: center; }\n.ap-desk .mv .mv-from { font: 400 14px/1.45 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .words { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px; }\n@media (max-width: 860px) { .ap-desk .words { grid-template-columns: 1fr; } }\n.ap-desk .words .w { display: grid; gap: 8px; padding: 14px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; min-width: 0; align-content: start; }\n.ap-desk .words .w.new { border-color: var(--ap-bronze); box-shadow: inset 3px 0 0 var(--ap-bronze); }\n.ap-desk .words .w h4 { margin: 0; font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\n.ap-desk .words .w p { font: 400 15px/1.5 var(--ap-sans); overflow-wrap: anywhere; }\n.ap-desk .words .w .wl { font: 600 12px/1.3 var(--ap-sans); color: var(--ap-quiet); display: flex; justify-content: space-between; gap: 8px; align-items: center; }\n/* build 17: this week as four rows, the words panel's states */\n.ap-desk .tw-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n@media (max-width: 860px) { .ap-desk .tw-rows { grid-template-columns: 1fr; } }\n.ap-desk .tw-row { display: grid; gap: 8px; padding: 18px 20px 16px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; align-content: start; min-width: 0; }\n.ap-desk .tw-row .k { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\n.ap-desk .tw-row .f { font: 400 18px/1.5 var(--ap-serif); color: var(--ap-navy); overflow-wrap: anywhere; }\n.ap-desk .tw-row .m { font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; }\n.ap-desk .tw-row .ap-card-actions { padding-top: 6px; }\n.ap-desk .ap-steps { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\n/* build 18: the room's desk */\n.ap-desk .men { display: grid; gap: 10px; }\n.ap-desk .man { display: grid; gap: 6px; padding: 16px 18px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; min-width: 0; }\n.ap-desk .man.need { border-color: var(--ap-bronze); box-shadow: inset 3px 0 0 var(--ap-bronze); }\n.ap-desk .man .k { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\n.ap-desk .man .k.need { color: var(--ap-warn); }\n.ap-desk .man .f { font: 400 20px/1.3 var(--ap-serif); color: var(--ap-navy); overflow-wrap: anywhere; }\n.ap-desk .man .m { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); overflow-wrap: anywhere; }\n.ap-desk .man .need-line { font: 400 15px/1.5 var(--ap-sans); color: var(--ap-ink); }\n.ap-desk .man .ap-card-actions { padding-top: 6px; }\n.ap-desk .fask { display: grid; gap: 8px; padding-top: 14px; border-top: 1px solid var(--ap-rule); }\n.ap-desk .fask label { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\n.ap-desk .fask textarea { font: 400 16px/1.5 var(--ap-sans); padding: 12px 14px; border: 1px solid var(--ap-rule); border-radius: 2px; background: #fff; color: var(--ap-ink); min-height: 72px; width: 100%; resize: vertical; }\n.ap-desk .fask textarea:focus { border-color: var(--ap-bronze); outline: none; }\n.ap-desk .fq-men { display: flex; flex-wrap: wrap; gap: 8px 14px; }\n.ap-desk .fq-men label { display: inline-flex; gap: 6px; align-items: center; font: 400 15px/1.4 var(--ap-sans); color: var(--ap-ink); background: #fff; border: 1px solid var(--ap-rule); border-radius: 2px; padding: 7px 11px; cursor: pointer; }\n.ap-desk .theme { display: grid; gap: 4px; padding: 12px 0; border-top: 1px solid var(--ap-rule); }\n.ap-desk .theme .t { font: 600 16px/1.4 var(--ap-sans); color: var(--ap-navy); }\n.ap-desk .theme .w { font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); }\n.ap-desk .theme .sp { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .tw .tw-lines { display: grid; gap: 6px; font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); }\n.ap-desk .tw .tw-lines p { margin: 0; }\n.ap-desk ul.list .r:has(.ap-btn) { white-space: normal; display: flex; flex-wrap: wrap; gap: 6px; justify-content: flex-end; }\n@media (max-width: 640px) { .ap-desk ul.list li { grid-template-columns: 1fr; } .ap-desk ul.list .r { white-space: normal; } }\n/* build 19: the practice desk does, not shows */\n.ap-desk .ask.busy { border-color: var(--ap-bronze); box-shadow: inset 4px 0 0 var(--ap-bronze); }\n.ap-desk .ask.busy .ask-row input { border-color: var(--ap-bronze); background: #FFFDF8; }\n.ap-desk .ask-row button.busy { background: var(--ap-bronze); border-color: var(--ap-bronze); color: var(--ap-band); }\n.ap-desk .ask-a.busy { color: var(--ap-quiet); font-style: italic; }\n.ap-desk .tw-row.wide, .ap-desk .tw-row.road { grid-column: 1 / -1; }\n.ap-desk .rds { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }\n@media (max-width: 860px) { .ap-desk .rds { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\n.ap-desk .rd { display: grid; gap: 2px; padding: 12px 14px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; min-width: 0; }\n.ap-desk .rd-n { font: 400 26px/1.1 var(--ap-serif); color: var(--ap-navy); font-variant-numeric: tabular-nums; }\n.ap-desk .rd-l { font: 400 14px/1.4 var(--ap-sans); color: var(--ap-ink); }\n.ap-desk .rd-c { font: 400 13px/1.4 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .levers { display: grid; gap: 8px; }\n.ap-desk .lever { display: grid; grid-template-columns: minmax(140px, 180px) 1fr auto; gap: 6px 14px; align-items: center; padding: 10px 0; border-top: 1px solid var(--ap-rule); font: 400 15px/1.5 var(--ap-sans); }\n@media (max-width: 860px) { .ap-desk .lever { grid-template-columns: 1fr; } }\n.ap-desk .lever-l { font-weight: 600; color: var(--ap-navy); }\n.ap-desk .lever-t { color: var(--ap-ink); }\n.ap-desk .lever-b { display: flex; gap: 6px; flex-wrap: wrap; }\n.ap-desk .segs { display: grid; gap: 6px; margin-top: 6px; }\n.ap-desk .seg { display: grid; grid-template-columns: 70px 1fr auto; gap: 4px 12px; align-items: center; padding: 8px 0; border-top: 1px solid var(--ap-rule); font: 400 14px/1.45 var(--ap-sans); }\n.ap-desk .seg-n { font: 400 20px/1.1 var(--ap-serif); color: var(--ap-navy); font-variant-numeric: tabular-nums; }\n.ap-desk .seg-n small { display: block; font: 400 12px/1.3 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .seg-l { font-weight: 600; color: var(--ap-navy); }\n.ap-desk .seg-f { grid-column: 2 / 3; color: var(--ap-quiet); font-size: 13px; }\n.ap-desk .mline { display: flex; justify-content: space-between; gap: 10px; align-items: center; flex-wrap: wrap; padding: 8px 0; border-top: 1px solid var(--ap-rule); font: 400 15px/1.5 var(--ap-sans); }\n.ap-desk .mline .from { display: block; font-size: 13px; color: var(--ap-quiet); }\n.ap-desk .mline > span:first-child { flex: 1 1 320px; min-width: 0; }\n.ap-desk .mv-form { padding: 6px 0 10px; border-top: 1px dashed var(--ap-rule); }\n.ap-desk .men .man .ap-read, .ap-desk .men .man .ap-mail { margin-top: 10px; flex-basis: 100%; }\n.ap-desk .sum .fix a.fix { color: var(--ap-navy); text-decoration: none; border-bottom: 1px solid var(--ap-rule); }\n.ap-desk .ap-note { display: grid; gap: 8px; margin-top: 4px; padding-top: 12px; border-top: 1px solid var(--ap-rule); }\n.ap-desk .ap-note label { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\n.ap-desk .ap-note textarea { font: 400 15px/1.5 var(--ap-sans); padding: 10px 12px; border: 1px solid var(--ap-rule); border-radius: 2px; background: #fff; color: var(--ap-ink); min-height: 60px; width: 100%; resize: vertical; }\n.ap-desk .ap-sumrow { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px 16px; padding: 14px 16px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; }\n.ap-desk .ap-sum { font: 400 16px/1.55 var(--ap-sans); color: var(--ap-ink); margin: 0; flex: 1 1 320px; min-width: 0; overflow-wrap: anywhere; }\n.ap-desk .ap-sum strong { font-weight: 600; color: var(--ap-navy); }\n.ap-desk .ap-sum .ap-s { display: inline; }\n.ap-desk .ap-fold { flex: 0 0 auto; }\n.ap-desk .ap-fold-sec { margin-top: 26px; padding-top: 16px; gap: 10px; }\n.ap-desk .ap-fold-sec:not(.is-open) .ap-sec-note { display: none; }\n.ap-desk .ap-fold-sec .ap-h2 { font-size: 22px; }\n.ap-desk .ap-fold-sec.is-open .ap-sumrow { border-bottom-left-radius: 0; border-bottom-right-radius: 0; border-bottom-color: transparent; margin-bottom: -16px; }\n.ap-desk .ap-body { display: grid; gap: 16px; min-width: 0; }\n.ap-desk .ap-fold-sec.is-open .ap-body { padding: 16px; border: 1px solid var(--ap-rule); border-top: 0; border-radius: 0 0 6px 6px; background: var(--ap-paper); }\n.ap-desk .lane-more { display: grid; gap: 12px; }\n.ap-desk .pieces { display: grid; gap: 6px; padding: 12px 14px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; }\n.ap-desk .pieces p:not(.ap-card-kind) { font: 400 15px/1.5 var(--ap-sans); color: var(--ap-ink); margin: 0; }\n.ap-desk .pieces p strong { font-weight: 600; color: var(--ap-navy); }\n.ap-desk .sig { display: grid; gap: 6px; padding: 12px 14px; background: #fff; border: 1px solid var(--ap-rule); border-left: 3px solid var(--ap-bronze); border-radius: 6px; }\n.ap-desk .sig .t { font: 600 16px/1.4 var(--ap-sans); color: var(--ap-navy); }\n.ap-desk .sig .w { font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); }\n.ap-desk .sig .sp, .ap-desk .sig .mv-l { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\n.ap-desk .ap-card .ap-touch { font: 400 14px/1.45 var(--ap-sans); color: var(--ap-navy); padding: 8px 10px; background: var(--ap-paper); border-left: 3px solid var(--ap-bronze); border-radius: 4px; }\n@media (max-width: 640px) { .ap-desk .ap-sumrow { padding: 12px; } .ap-desk .ap-fold-sec.is-open .ap-body { padding: 12px; } }\n\n/* build 23: the road, tool by tool */\n.ap-desk .tw-row.move { border-color: var(--ap-bronze); background: var(--ap-paper); }\n.ap-desk .rd-tools { grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n@media (max-width: 860px) { .ap-desk .rd-tools { grid-template-columns: 1fr; } }\n.ap-desk .rd-lines { display: grid; gap: 6px; }\n.ap-desk .rd-line { display: grid; grid-template-columns: 104px minmax(0, 1fr); gap: 10px; margin: 0; font: 400 15px/1.5 var(--ap-sans); color: var(--ap-ink); }\n@media (max-width: 420px) { .ap-desk .rd-line { grid-template-columns: 1fr; gap: 0; } }\n.ap-desk .rd-t { font-weight: 600; color: var(--ap-navy); }\n.ap-desk .rd-v { overflow-wrap: anywhere; }\n.ap-desk .rd-state { margin-left: 8px; padding: 1px 8px; border: 1px solid var(--ap-rule); border-radius: 10px; font: 600 10px/1.6 var(--ap-sans); letter-spacing: .06em; color: var(--ap-quiet); }\n.ap-desk .rd-tool.quiet { background: var(--ap-paper); }\n.ap-desk .rd-links { display: grid; gap: 6px; }\n.ap-desk .rd-pick { display: grid; grid-template-columns: 104px minmax(0, 1fr); gap: 10px; align-items: center; font: 600 14px/1.4 var(--ap-sans); color: var(--ap-navy); }\n.ap-desk .rd-pick select { max-width: 100%; min-width: 0; font: 400 14px/1.4 var(--ap-sans); padding: 6px 8px; border: 1px solid var(--ap-rule); border-radius: 4px; background: #fff; color: var(--ap-ink); }\n.ap-desk .rd-links .ap-card-actions { align-items: center; }\n@media (max-width: 420px) { .ap-desk .rd-pick { grid-template-columns: 1fr; gap: 4px; } }\n.ap-desk .ap-band-in { max-width: 980px; justify-items: start; text-align: left; padding: 48px 24px 44px; } .ap-desk .ap-band, .ap-desk .ap-band * { text-align: left; } .ap-desk .ap-primary, #apDesk.ap-desk a.ap-primary, #apDesk.ap-desk a.ap-primary:hover { color: #fff; } .ap-desk .ap-line.ap-status { font: 400 24px/1.4 var(--ap-serif); color: var(--ap-band-ink); max-width: 860px; } #apDesk.ap-desk .ap-line.ap-status a { color: var(--ap-band-ink); border-bottom: 2px solid var(--ap-bronze); padding-bottom: 1px; text-decoration: none; } #apDesk.ap-desk .ap-line.ap-status a:hover { color: #fff; } .ap-desk .ap-line.ap-status a b { color: #fff; font-weight: 600; } .ap-desk .ap-line.ap-status .sep { color: var(--ap-band-quiet); padding: 0 6px; } #apDesk.ap-desk .ap-line.ap-status a { white-space: nowrap; } .ap-desk .how-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 8px 16px; } .ap-desk .how-head .ap-kind { margin-bottom: 0; } .ap-desk .how-btn { font: 600 14px/1.4 var(--ap-sans); color: var(--ap-bronze-ink); background: none; border: 0; padding: 0; cursor: pointer; min-height: 32px; } .ap-desk .hstops { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 18px; margin: 0; padding: 0; list-style: none; } .ap-desk .hstops li { padding: 0 0 0 12px; border-left: 2px solid var(--ap-bronze); min-width: 0; } .ap-desk .hstops .st { display: block; font: 400 17px/1.3 var(--ap-serif); color: var(--ap-navy); margin: 0 0 6px; } .ap-desk .hstops .sl { display: block; font: 400 14px/1.5 var(--ap-sans); color: var(--ap-ink); } #apDesk.ap-desk .hstops .sl a { font-weight: 600; color: var(--ap-bronze-ink); white-space: nowrap; } .ap-desk .how-line { font: 400 15px/1.6 var(--ap-sans); color: var(--ap-ink); } #apDesk.ap-desk .how-line a { font-weight: 600; color: var(--ap-bronze-ink); } .ap-desk .how-line .hsep { color: var(--ap-rule); } .ap-desk .points { display: grid; gap: 6px; margin: 0; padding-left: 18px; list-style: disc; } .ap-desk .points li { font: 400 16px/1.5 var(--ap-sans); color: var(--ap-ink); } .ap-desk .part { font: 600 11px/1 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze-ink); margin-top: 8px; } .ap-desk .fit { font: 400 15px/1.5 var(--ap-sans); color: var(--ap-ink); padding: 10px 14px; background: #fff; border-left: 3px solid var(--ap-bronze); border-radius: 0 6px 6px 0; } .ap-desk .fit b { color: var(--ap-navy); font-weight: 600; } .ap-desk .sig .mv-l b { color: var(--ap-good); font-weight: 600; } .ap-desk .weeks { display: grid; gap: 8px; } .ap-desk .wk { display: grid; grid-template-columns: 136px 1fr; gap: 4px 16px; padding: 10px 14px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; align-items: baseline; } .ap-desk .wk.piece { border-left: 3px solid var(--ap-bronze); } .ap-desk .wk .d { font: 600 13px/1.5 var(--ap-sans); color: var(--ap-quiet); letter-spacing: .04em; white-space: nowrap; } .ap-desk .wk .t { font: 400 17px/1.4 var(--ap-serif); color: var(--ap-navy); } .ap-desk .wk .p { grid-column: 2; font: 400 15px/1.5 var(--ap-sans); color: var(--ap-ink); margin: 0; } .ap-desk .wk .p b { font-weight: 600; color: var(--ap-navy); } .ap-desk .room-h { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 6px 16px; padding: 0 2px; margin-top: 14px; } .ap-desk .room-h h3 { font: 400 20px/1.3 var(--ap-serif); color: var(--ap-navy); } .ap-desk .room-h .n { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); } .ap-desk .man .m .ok { color: var(--ap-good); } .ap-desk .man .m .no { color: var(--ap-warn); } .ap-desk .man.need { border-left: 3px solid var(--ap-warn); } .ap-desk .links { display: flex; flex-wrap: wrap; gap: 4px 12px; font: 600 14px/1.6 var(--ap-sans); align-items: center; } #apDesk.ap-desk .links a { color: var(--ap-navy); border-bottom: 1px solid var(--ap-rule); text-decoration: none; } .ap-desk .links .cp { font: 400 12px/1 var(--ap-sans); color: var(--ap-quiet); border: 1px solid var(--ap-rule); border-radius: 2px; padding: 4px 7px; background: #fff; cursor: pointer; margin-left: -6px; } .ap-desk .links .sep { color: var(--ap-rule); } .ap-desk .board { display: grid; gap: 10px; padding: 14px 16px; background: #fff; border: 1px solid var(--ap-bronze); border-radius: 6px; } .ap-desk .board .bh { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 6px 16px; align-items: baseline; } .ap-desk .board .bh h4 { font: 400 20px/1.3 var(--ap-serif); color: var(--ap-navy); margin: 0; } .ap-desk .stops { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; } .ap-desk .stop { display: grid; gap: 6px; padding: 12px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; align-content: start; min-width: 0; } .ap-desk .stop.now { border-color: var(--ap-bronze); background: #fff; } .ap-desk .stop .w { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-quiet); } .ap-desk .stop .n { font: 400 18px/1.3 var(--ap-serif); color: var(--ap-navy); } .ap-desk .stop .s { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-ink); } .ap-desk .stop .s b { color: var(--ap-good); font-weight: 600; } .ap-desk .stop .names { font: 400 13px/1.5 var(--ap-sans); color: var(--ap-quiet); } #apDesk.ap-desk .stop a { font: 600 13px/1.5 var(--ap-sans); color: var(--ap-bronze-ink); } .ap-desk .board .from p { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-ink); } .ap-desk .board .from p b { font-weight: 600; color: var(--ap-navy); } .ap-desk .ap-card.voice { background: #fff; } .ap-desk #gDesk .ap-primary { margin-left: 0; margin-right: 0; } .ap-desk #gSignin, .ap-desk #gSend, .ap-desk #gCode { display: grid; gap: 16px; justify-items: start; } .ap-desk #gSignin .ap-primary, .ap-desk #gSend .ap-primary { margin-top: 4px; margin-left: 0; } .ap-desk #gSignin .ap-primary-note, .ap-desk #gSend .ap-primary-note, .ap-desk #gCode .ap-primary-note { margin: 0; } .ap-desk .sig .meta { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .1em; text-transform: uppercase; color: var(--ap-quiet); } .ap-desk .sig.topic { border-left-color: var(--ap-navy); } .ap-desk .sig .sp b { color: var(--ap-navy); font-weight: 600; } @media (max-width: 860px) { .ap-desk .hstops { grid-template-columns: 1fr; gap: 12px; } .ap-desk .hstops .st { display: inline; font-size: 16px; } .ap-desk .hstops .sl { display: inline; margin-left: 6px; } .ap-desk .stops { grid-template-columns: repeat(2, minmax(0, 1fr)); } } @media (max-width: 640px) { .ap-desk .ap-band-in { padding: 32px 16px 36px; } .ap-desk .ap-line.ap-status { font-size: 19px; } .ap-desk .wk { grid-template-columns: 1fr; } .ap-desk .wk .p { grid-column: 1; } .ap-desk .stops { grid-template-columns: 1fr; } }</style>\n<div class=\"ap-band\">\n<div class=\"ap-band-in\">\n<p class=\"ap-eyebrow\">Front Desk</p>\n<h1 class=\"ap-hello\" id=\"apHello\">Front Desk</h1>\n<p class=\"ap-line\" id=\"apLine\">Opening the desk.</p>\n<div id=\"gSignin\" hidden>\n<button class=\"ap-primary\" type=\"button\" id=\"gSigninBtn\">Sign in</button>\n<p class=\"ap-primary-note\">The Front Desk is for the Ancient Path team. Sign in with your site account; the desk opens for the person the site shows.</p>\n</div>\n<div id=\"gSend\" hidden>\n<button class=\"ap-primary\" type=\"button\" id=\"gSendBtn\">Send me my desk code</button>\n<p class=\"ap-primary-note\" id=\"gSendNote\">The first time each day, a six-digit code goes to the address the site shows signed in, and the desk opens on it.</p>\n<p class=\"ap-gate-err\" id=\"gSendErr\" hidden></p>\n</div>\n<div id=\"gCode\" hidden>\n<div class=\"ap-gate-row\"><input type=\"text\" inputmode=\"numeric\" autocomplete=\"one-time-code\" maxlength=\"7\" id=\"gCodeIn\" placeholder=\"000 000\" aria-label=\"The six-digit code from your email\"><button class=\"ap-primary\" type=\"button\" id=\"gCodeBtn\">Open the desk</button></div>\n<p class=\"ap-primary-note\" id=\"gCodeNote\">Check your email for a six-digit code. It works for ten minutes.</p>\n<p class=\"ap-gate-err\" id=\"gCodeErr\" hidden></p>\n<button class=\"ap-gate-again\" type=\"button\" id=\"gAgain\">Send it again</button>\n</div>\n<div id=\"gDesk\" hidden>\n<a class=\"ap-primary\" id=\"apPrimary\" href=\"#lane\">See what is waiting</a>\n<p class=\"ap-primary-note\" id=\"apPrimaryNote\">Every form, payment and booking that came in, gathered in one place.</p>\n</div>\n</div>\n</div>\n<div class=\"wrap\" id=\"facBody\" hidden>\n<div class=\"status\" id=\"fStatus\"><span class=\"dot\" id=\"fDot\"></span><span id=\"fStatusText\">Reading your room…</span><button class=\"plain\" id=\"fRefresh\" type=\"button\">Refresh</button></div>\n<div id=\"fNotices\"></div>\n<section class=\"ap-sec first\" id=\"f-how-sec\"><div id=\"fHow\"></div></section>\n<section class=\"ap-sec\" id=\"f-ask-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">Ask and answer</p><h2 class=\"ap-h2\">Ask the desk</h2></div><p class=\"ap-sec-note\">It answers from your room — the men, the weeks, the notes, your cards — and nothing else.</p></div>\n<form class=\"ask\" id=\"fAskForm\">\n<div class=\"ask-row ap-answer\"><textarea rows=\"2\" id=\"fAskIn\" maxlength=\"500\" placeholder=\"Who in the room still needs to sign the agreement?\" aria-label=\"Your question\"></textarea><button class=\"ap-btn ap-btn-primary\" type=\"submit\" id=\"fAskBtn\">Ask</button></div>\n<div class=\"ask-tries\" id=\"fAskTries\"></div>\n<p class=\"ask-q\" id=\"fAskQ\" hidden></p>\n<p class=\"ask-a\" id=\"fAskA\" hidden></p>\n<p class=\"ask-note\" id=\"fAskNote\" hidden></p>\n</form>\n</section>\n<section class=\"ap-sec\" id=\"f-lane-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">Do this</p><h2 class=\"ap-h2\" id=\"fLaneH\">Your lane</h2></div><p class=\"ap-sec-note\" id=\"fLaneSub\"></p></div>\n<div class=\"lane\" id=\"fLane\"></div>\n<div class=\"lane-more\" id=\"fLaneMore\" hidden></div>\n<div class=\"ap-card-actions\" id=\"fLaneMoreRow\" hidden><button type=\"button\" class=\"ap-btn ap-btn-ghost\" id=\"fLaneMoreBtn\">Show the rest</button></div>\n</section>\n<section class=\"ap-sec ap-fold-sec\" id=\"f-week-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">This week's room</p><h2 class=\"ap-h2\" id=\"fWeekH\">This week's room</h2></div><p class=\"ap-sec-note\" id=\"fWeekSub\"></p></div>\n<div class=\"ap-sumrow\"><p class=\"ap-sum\" id=\"f-week-sec-sum\">Reading your room.</p><button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm ap-fold\" data-fold=\"f-week-sec\" aria-expanded=\"false\" aria-controls=\"f-week-sec-body\">Open</button></div>\n<div class=\"ap-body\" id=\"f-week-sec-body\" hidden>\n<div class=\"tw\" id=\"fWeekBody\"></div>\n</div>\n</section>\n<section class=\"ap-sec ap-fold-sec\" id=\"f-road-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">The road ahead</p><h2 class=\"ap-h2\" id=\"fRoadH\">The road ahead</h2></div><p class=\"ap-sec-note\" id=\"fRoadSub\"></p></div>\n<div class=\"ap-sumrow\"><p class=\"ap-sum\" id=\"f-road-sec-sum\">Reading your room.</p><button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm ap-fold\" data-fold=\"f-road-sec\" aria-expanded=\"false\" aria-controls=\"f-road-sec-body\">Open</button></div>\n<div class=\"ap-body\" id=\"f-road-sec-body\" hidden>\n<div class=\"tw\" id=\"fRoadBody\"></div>\n</div>\n</section>\n<section class=\"ap-sec ap-fold-sec\" id=\"f-room-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">The men</p><h2 class=\"ap-h2\" id=\"fRoomH\">The room</h2></div><p class=\"ap-sec-note\" id=\"fRoomSub\"></p></div>\n<div class=\"ap-sumrow\"><p class=\"ap-sum\" id=\"f-room-sec-sum\">Reading your room.</p><button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm ap-fold\" data-fold=\"f-room-sec\" aria-expanded=\"false\" aria-controls=\"f-room-sec-body\">Open</button></div>\n<div class=\"ap-body\" id=\"f-room-sec-body\" hidden>\n<div id=\"fRoomBody\"></div>\n</div>\n</section>\n<section class=\"ap-sec ap-fold-sec\" id=\"f-notes-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">The record</p><h2 class=\"ap-h2\" id=\"fNotesH\">Last week's room</h2></div><p class=\"ap-sec-note\" id=\"fNotesSub\"></p></div>\n<div class=\"ap-sumrow\"><p class=\"ap-sum\" id=\"f-notes-sec-sum\">Reading your room.</p><button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm ap-fold\" data-fold=\"f-notes-sec\" aria-expanded=\"false\" aria-controls=\"f-notes-sec-body\">Open</button></div>\n<div class=\"ap-body\" id=\"f-notes-sec-body\" hidden>\n<div id=\"fNotesBody\"></div>\n</div>\n</section>\n<footer class=\"ap-foot\">\n<div>Reads the Front Desk sheet, the Weeks tab, the Research Engine and the week’s notes through the Front Desk script. Nothing on this page is typed by hand.</div>\n<div><span id=\"facWho\"></span> <button type=\"button\" id=\"facForget\">Not you? Forget this browser</button> <button type=\"button\" id=\"fOpenAdmin\" hidden>Open the practice desk</button></div>\n</footer>\n</div>\n<div class=\"wrap\" id=\"deskBody\" hidden>\n<div class=\"status\" id=\"status\"><span class=\"dot\" id=\"dot\"></span><span id=\"statusText\">Reading the desk…</span><button class=\"plain\" id=\"refresh\" type=\"button\">Refresh</button></div>\n<div id=\"notices\"></div>\n<section class=\"ap-sec first\" id=\"ask-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">Ask and answer</p><h2 class=\"ap-h2\">Ask the desk</h2></div><p class=\"ap-sec-note\">It answers from what the desk holds — the roster, the lane, the week, the list — and nothing else.</p></div>\n<form class=\"ask\" id=\"askForm\">\n<div class=\"ask-row ap-answer\"><textarea rows=\"2\" id=\"askIn\" maxlength=\"500\" placeholder=\"Who has signed the agreement but not answered?\" aria-label=\"Your question\"></textarea><button class=\"ap-btn ap-btn-primary\" type=\"submit\" id=\"askBtn\">Ask</button></div>\n<div class=\"ask-tries\" id=\"askTries\"></div>\n<p class=\"ask-q\" id=\"askQ\" hidden></p>\n<p class=\"ask-a\" id=\"askA\" hidden></p>\n<p class=\"ask-note\" id=\"askNote\" hidden></p>\n</form>\n</section>\n<section class=\"ap-sec\" id=\"actions-sec\">\n<div class=\"ap-sec-head\">\n<div><p class=\"ap-kind\">Do this</p><h2 class=\"ap-h2\" id=\"actions-h\">The lane</h2></div>\n<div class=\"tabs\" role=\"group\" aria-label=\"Whose actions\" id=\"tabs\"></div>\n</div>\n<div class=\"lane\" id=\"lane\"></div>\n<div class=\"lane-more\" id=\"laneMore\" hidden></div>\n<div class=\"ap-card-actions\" id=\"laneMoreRow\" hidden><button type=\"button\" class=\"ap-btn ap-btn-ghost\" id=\"laneMoreBtn\">Show the rest</button></div>\n<div class=\"ap-card is-next\" id=\"apNext\" hidden>\n<p class=\"ap-card-kind\">If you want a suggestion</p>\n<p class=\"ap-card-title\" id=\"apNextTitle\">Start with the lane</p>\n<p class=\"ap-card-body\" id=\"apNextBody\">This box names one thing to do next, chosen from what came in.</p>\n<div class=\"ap-card-actions\"><a class=\"ap-btn ap-btn-ghost\" id=\"apNextLink\" href=\"#apc0\">Show me the first one</a></div>\n</div>\n</section>\n<section class=\"ap-sec ap-fold-sec\" id=\"tw-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">This week</p><h2 class=\"ap-h2\" id=\"tw-h\">The week</h2></div><p class=\"ap-sec-note\" id=\"tw-sub\"></p></div>\n<div class=\"ap-sumrow\"><p class=\"ap-sum\" id=\"tw-sec-sum\">Reading the desk.</p><button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm ap-fold\" data-fold=\"tw-sec\" aria-expanded=\"false\" aria-controls=\"tw-sec-body\">Open</button></div>\n<div class=\"ap-body\" id=\"tw-sec-body\" hidden>\n<div class=\"tw\" id=\"tw-body\"></div>\n</div>\n</section>\n<section class=\"ap-sec ap-fold-sec\" id=\"men-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">The men</p><h2 class=\"ap-h2\" id=\"men-h\">Breaking Free</h2></div><p class=\"ap-sec-note\" id=\"men-sub\"></p></div>\n<div class=\"ap-sumrow\"><p class=\"ap-sum\" id=\"men-sec-sum\">Reading the desk.</p><button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm ap-fold\" data-fold=\"men-sec\" aria-expanded=\"false\" aria-controls=\"men-sec-body\">Open</button></div>\n<div class=\"ap-body\" id=\"men-sec-body\" hidden>\n<div id=\"men\"></div>\n</div>\n</section>\n<section class=\"ap-sec ap-fold-sec\" id=\"road-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">The practice</p><h2 class=\"ap-h2\" id=\"road-h\">The road to January</h2></div><p class=\"ap-sec-note\" id=\"road-sub\"></p></div>\n<div class=\"ap-sumrow\"><p class=\"ap-sum\" id=\"road-sec-sum\">Reading the desk.</p><button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm ap-fold\" data-fold=\"road-sec\" aria-expanded=\"false\" aria-controls=\"road-sec-body\">Open</button></div>\n<div class=\"ap-body\" id=\"road-sec-body\" hidden>\n<div class=\"tw\" id=\"road-body\"></div>\n<div class=\"srch\" id=\"search-body\"></div>\n<div class=\"mv\" id=\"moves-sec\"><div id=\"moves-body\"></div></div>\n</div>\n</section>\n<section class=\"ap-sec ap-fold-sec\" id=\"week-sec\">\n<div class=\"ap-sec-head\"><div><p class=\"ap-kind\">Since you were last here</p><h2 class=\"ap-h2\" id=\"week-h\">What came in</h2></div><p class=\"ap-sec-note\" id=\"week-sub\"></p></div>\n<div class=\"ap-sumrow\"><p class=\"ap-sum\" id=\"week-sec-sum\">Reading the desk.</p><button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm ap-fold\" data-fold=\"week-sec\" aria-expanded=\"false\" aria-controls=\"week-sec-body\">Open</button></div>\n<div class=\"ap-body\" id=\"week-sec-body\" hidden>\n<div class=\"ap-grid ap-grid-2\" id=\"week\"></div>\n</div>\n</section>\n<footer class=\"ap-foot\">\n<div id=\"foot-1\">Reads the Front Desk sheet, the ActiveCampaign count and the week’s notes through the Front Desk script. Nothing on this page is typed by hand; every section opens to its summary line and remembers how you left it on this browser.</div>\n<div><span id=\"footWho\"></span> <button type=\"button\" id=\"forget\">Not you? Forget this browser</button></div>\n<div><a href=\"https://docs.google.com/spreadsheets/d/1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw/edit\" target=\"_blank\" rel=\"noopener\">Open the Front Desk sheet</a> · <a href=\"https://docs.google.com/spreadsheets/d/1VE7ouQQwiG9A-M49nFATwVCpcG6qJSITaWWmE1AwLeM/edit\" target=\"_blank\" rel=\"noopener\">Open the AC count sheet</a></div>\n</footer>\n</div>\n";
(function () {
var DESK_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split("?")[0] : ""; return /script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(u) ? u : "https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec"; })();
var BUILD = 24.1, TZ = 'America/Chicago', STORE = 'apDesk';
var SCRIPT_SETTINGS = 'https://script.google.com/home/projects/1piMd8lIIuSvToz54hRbZGEJsDm6u0YaoeF-6dMufJvlDhEThQizYhZ42/settings?authuser=john@ancientpathcoaching.com';
var $ = function (id) { return document.getElementById(id); };
var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
var feed = null, ac = null, owner = 'all', readAt = null, me = null, who = null, timer = null;
var fac = null, roomMode = false, adminOpen = false;
/* build 18: what this browser changed on the room's desk, held until a feed newer than the change arrives */
var held = { adds: {}, question: null, ask: null, handled: {}, notes: {}, asked: null, sigMoves: {} };
/* build 15: a card closed here leaves the lane at once and a line says so; the script's feed catches up within 5 minutes, so what was closed is held back until a newer feed arrives. */
var closedAt = {}, flashMsg = '', flashTimer = null;
function flash(m) { flashMsg = m; notice(esc(m)); if (flashTimer) clearTimeout(flashTimer); flashTimer = setTimeout(function () { flashMsg = ''; notice(''); }, 9000); }

try { owner = localStorage.getItem('fd-owner') || 'all'; } catch (e) {}
function stored() { try { var v = JSON.parse(localStorage.getItem(STORE) || 'null'); return v && v.key ? v : null; } catch (e) { return null; } }
function keep(v) { try { if (v) localStorage.setItem(STORE, JSON.stringify(v)); else localStorage.removeItem(STORE); } catch (e) {} }
function call(body) {
if (!DESK_URL) return Promise.reject({ error: 'no_url' });
body.site = siteEmail(); /* build 24: every call carries the person the site shows */
return fetch(DESK_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), credentials: 'omit' })
.then(function (r) { return r.json(); }, function () { throw { error: 'network' }; })
.then(function (r) { if (!r || r.ok !== true) throw (r || { error: 'network' }); return r; });
}
function words(e) {
switch (e && e.error) {
case 'not_on_list': return 'That email is not on the desk list. Our team adds people on the People tab of the Front Desk sheet.';
case 'not_you': return 'The site is signed in as someone else. Sign in as yourself to open your desk.';
case 'no_site': return 'The site does not show anyone signed in. Sign in, then open the desk.';
case 'not_yours': return 'That one is not yours to add.';
case 'bad_email': return 'That does not look like an email address.';
case 'wait': return 'A code went out less than two minutes ago. Check your email, including spam, before asking again.';
case 'too_many': return 'Five codes have gone to that address today. Try again tomorrow, or ask John.';
case 'code_wrong': return 'That is not the code. Check the six digits and try again.';
case 'code_expired': return 'That code has run out. Send a new one.';
case 'no_key': case 'bad_key': return 'This browser has no desk key. Ask for a code.';
case 'key_expired': return 'Your desk key from yesterday has run out. Send a new code.';
case 'removed': return 'Your name is no longer on the desk list.';
case 'no_claude_key': return 'The desk cannot answer questions yet: the Claude key is not in the script.';
case 'not_yet': return 'That belongs to the practice desk.';
case 'not_yours': return 'That one is not on your desk.';
case 'no_room': return 'Your desk has no room on it yet. Our team adds it on the People tab.';
case 'bad_text': return 'Keep it under the length allowed, with no symbols.';
case 'too_soon': return 'It went out less than a week ago. Give the room a week.';
case 'busy': return 'Claude is busy right now. Ask again in a minute.';
case 'key_refused': return 'Claude refused the key stored in the script, so the desk cannot answer questions yet. Nothing is wrong with your question. The Claude key in the script needs to be pasted again.';
case 'model_unknown': return 'Claude does not know the model named on the Config tab (the row called desk claude model). Clear that row and the desk will use its default.';
case 'empty_answer': case 'claude_error': return 'Claude did not answer this time. Your question is saved on the Asks tab. Try again in a few minutes.';
case 'empty': return 'Type a question first.';
case 'bad_action': return 'That item cannot be closed from here.';
case 'bad_name': return 'Type his name as it is said: two to eighty letters, no symbols.';
case 'bad_move': return 'Pick one of the seven moves.';
case 'have': return 'That move is already on the Moves tab. Refresh the desk.';
case 'ours': return 'That address is one of ours, so no email goes.';
case 'no_words': return 'No words are on the Words tab for that page yet.';
case 'none': return 'That one is already off the lane. Refresh the desk.';
case 'no_url': return 'This page does not know where the desk is yet.';
default: return 'The desk could not be reached. Try again in a moment.';
}
}
function lwMe() { var m = window.me; return (m && typeof m === 'object' && m.email) ? m : null; }
/* build 24: the site's own window.me is the only read of who is signed in. The old check counted the site's script as a person, which opened the desk for a visitor who had a key. */
function signedIn() { return !!lwMe(); }
function siteEmail() { var m = lwMe(); return m ? String(m.email || '').toLowerCase().trim() : ''; }
function getJSON(path) { return fetch(path, { credentials: 'include', headers: { 'Accept': 'application/json' } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }
function readMe() {
var m = lwMe();
if (m) return Promise.resolve({ email: String(m.email || '').toLowerCase().trim(), name: ((m.firstName || m.first_name || '') + ' ' + (m.lastName || m.last_name || '')).trim() || m.username || '' });
return getJSON('/api/user/me').then(function (r) {
var u = (r && r.user) || r || {};
return { email: String(u.email || u.user_email || '').toLowerCase().trim(), name: ((u.first_name || '') + ' ' + (u.last_name || '')).trim() || u.username || '' };
});
}
function openSignIn() {
try { if (window.l_settings) window.l_settings.redirectUrl = location.pathname + location.search; } catch (e) {}
var a = document.querySelector('a[data-interactive-link-type="openformslink"][data-interactive-link-var1="signin"]');
if (a) { a.click(); return; }
$('gSigninBtn').textContent = 'Use Sign in at the top of the page';
}
function dt(iso, withTime) {
if (!iso) return '';
var dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(String(iso));
var d = new Date(dateOnly ? iso + 'T12:00:00' : iso); if (isNaN(d)) return String(iso);
var o = dateOnly ? { month: 'short', day: 'numeric' } : { timeZone: TZ, month: 'short', day: 'numeric' };
if (withTime) { o.hour = 'numeric'; o.minute = '2-digit'; }
return d.toLocaleString('en-US', o);
}
function ago(iso) { if (!iso) return ''; var h = Math.floor((Date.now() - new Date(iso)) / 36e5); if (h < 1) return 'just now'; if (h < 48) return h + ' hour' + (h === 1 ? '' : 's') + ' ago'; return Math.floor(h / 24) + ' days ago'; }
var money = function (n) { return '$' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
var plural = function (n, one, many) { return n + ' ' + (n === 1 ? one : many); };
function hourCentral() { return parseInt(new Date().toLocaleString('en-US', { timeZone: TZ, hour: 'numeric', hour12: false }), 10) || 0; }
function greet() { var h = hourCentral(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }
function first(name) { return String(name || '').split(' ')[0]; }
function show(id) { ['gSignin', 'gSend', 'gCode', 'gDesk'].forEach(function (x) { $(x).hidden = x !== id; }); }
function gateSignin() {
$('apHello').textContent = greet() + '.';
$('apLine').classList.remove('ap-status'); $('apLine').textContent = 'Sign in to open the desk.';
show('gSignin'); $('deskBody').hidden = true; $('facBody').hidden = true;
}
function gateSend(line) {
if (!siteEmail()) { gateSignin(); return; }
$('apHello').textContent = greet() + (me && me.name ? ', ' + first(me.name) + '.' : '.');
$('apLine').classList.remove('ap-status'); $('apLine').textContent = line || ('Signed in as ' + siteEmail() + '.');
$('gSendErr').hidden = true;
show('gSend'); $('deskBody').hidden = true; $('facBody').hidden = true;
}
function gateCode(minutes) {
$('gCodeNote').textContent = 'Check your email for a six-digit code. It works for ' + (minutes || 10) + ' minutes.';
$('gCodeErr').hidden = true; $('gCodeIn').value = '';
show('gCode');
setTimeout(function () { try { $('gCodeIn').focus(); } catch (e) {} }, 50);
}
function emailForCode() { return siteEmail(); }
$('gSigninBtn').addEventListener('click', openSignIn);
$('gSendBtn').addEventListener('click', function () {
var email = emailForCode();
if (!email) { gateSignin(); return; }
var b = $('gSendBtn'); b.disabled = true; b.textContent = 'Sending…'; $('gSendErr').hidden = true;
call({ action: 'code_send', email: email }).then(function (r) {
b.disabled = false; b.textContent = 'Send me my desk code';
gateCode(r.minutes);
}, function (e) {
b.disabled = false; b.textContent = 'Send me my desk code';
if (e && e.error === 'wait') { gateCode(10); $('gCodeErr').textContent = words(e); $('gCodeErr').hidden = false; return; }
$('gSendErr').textContent = words(e); $('gSendErr').hidden = false;
});
});
$('gAgain').addEventListener('click', function () { gateSend(); });
function checkCode() {
var code = String($('gCodeIn').value || '').replace(/\D/g, '');
if (code.length !== 6) { $('gCodeErr').textContent = 'The code is six digits.'; $('gCodeErr').hidden = false; return; }
var b = $('gCodeBtn'); b.disabled = true; b.textContent = 'Opening…'; $('gCodeErr').hidden = true;
call({ action: 'code_check', email: emailForCode(), code: code, browser: navigator.userAgent.slice(0, 120) }).then(function (r) {
b.disabled = false; b.textContent = 'Open the desk';
keep({ key: r.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: r.expires });
openDesk();
}, function (e) {
b.disabled = false; b.textContent = 'Open the desk';
$('gCodeErr').textContent = words(e); $('gCodeErr').hidden = false;
if (e && e.error === 'code_expired') setTimeout(function () { gateSend('That code ran out. Send a new one.'); }, 1800);
});
}
$('gCodeBtn').addEventListener('click', checkCode);
$('gCodeIn').addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); checkCode(); } });
function forgetBrowser() {
var s = stored();
if (s) call({ action: 'forget', key: s.key }).catch(function () {});
keep(null); who = null; feed = null;
if (timer) { clearInterval(timer); timer = null; }
gateSend('This browser forgot its desk key.');
}
$('forget').addEventListener('click', forgetBrowser);
$('facForget').addEventListener('click', forgetBrowser);
function openDesk() {
var s = stored();
if (!s) { gateSend(); return; }
/* build 24: the key opens only for the person the site shows; another person, or no one, and the key is dropped */
if (!siteEmail()) { gateSignin(); return; }
if (String(s.email || '').toLowerCase() !== siteEmail()) { keep(null); who = null; feed = null; gateSend(); return; }
if (s.expires && new Date(s.expires) < new Date()) { keep(null); gateSend('Your desk key from yesterday has run out. Send a new code.'); return; }
who = s; roomMode = !!s.room;
$('apHello').textContent = greet() + (s.name ? ', ' + first(s.name) + '.' : '.');
$('apLine').textContent = 'Opening the desk.';
show('gDesk');
$('facWho').textContent = 'Signed in as ' + s.email + '.'; $('footWho').textContent = 'Signed in as ' + s.email + '.';
if (roomMode) {
/* build 18: a room on the People row opens the room's desk; an admin gets the practice desk under it, on one press */
$('facBody').hidden = false; facSections(true);
$('fOpenAdmin').hidden = s.role !== 'admin'; $('fOpenAdmin').textContent = adminOpen ? 'Hide the practice desk' : 'Open the practice desk';
$('deskBody').hidden = !(s.role === 'admin' && adminOpen);
renderFac(); if (s.role === 'admin' && adminOpen) renderAll();
} else if (s.role !== 'admin') {
$('deskBody').hidden = true; $('facBody').hidden = false; facSections(false); $('fOpenAdmin').hidden = true;
$('gDesk').hidden = true;
$('apLine').textContent = 'Your desk has no room on it yet. Our team adds it on the People tab.';
return;
} else {
$('facBody').hidden = true; $('deskBody').hidden = false;
renderAll();
}
markSeen();
load();
if (!timer) timer = setInterval(function () { if (document.visibilityState === 'visible') load(true); }, 300000);
}
function load(quiet) {
var s = stored(); if (!s) { gateSend(); return; }
if (!quiet) setStatus(feed ? 'stale' : '', feed ? 'Refreshing…' : 'Reading the desk…');
call({ action: 'desk', key: s.key }).then(function (r) {
var hasRoom = !!r.room;
if (hasRoom !== roomMode || r.role !== s.role || String(r.room || '') !== String(s.room || '')) { keep({ key: s.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: s.expires }); openDesk(); return; }
readAt = Date.now(); who.canAsk = r.canAsk; who.claude = r.claude || null; who.people = r.people || [];
var wrote = (r.feed && r.feed.generated) || r.generated || '';
fac = r.fac || null; if (fac && fac.actions) { fac.actions = fac.actions.filter(function (a) { var t = closedAt[a.key]; return !(t && String(wrote) < t); }); }
if (fac && fac.sigMoves && held.sigMoves) { Object.keys(held.sigMoves).forEach(function (k) { if (String(wrote) < held.sigMoves[k]) { var tk = (fac.sigMoves.taken || []).some(function (x) { return x.key === k; }); if (!tk) { var pp = (fac.sigMoves.proposed || []).filter(function (x) { return x.key === k; })[0]; fac.sigMoves.proposed = (fac.sigMoves.proposed || []).filter(function (x) { return x.key !== k; }); if (pp) fac.sigMoves.taken = (fac.sigMoves.taken || []).concat([{ key: k, signal: pp.signal, from: pp.from, move: pp.move, owner: pp.owner, status: 'taken' }]); } } }); }
if (fac) { Object.keys(held.adds).forEach(function (k) { var h = held.adds[k]; if (String(wrote) < h.at && !(fac.actions || []).some(function (a) { return a.key === k; })) fac.actions = (fac.actions || []).concat([h.card]); }); if (held.question && String(wrote) < held.question) fac.question = null; if (held.ask && fac.this && fac.this.week === held.ask.week && String(wrote) < held.ask.at) fac.this.ask = held.ask.text; }
if (roomMode) { renderFac(); if (fac && !fac.missing) setFacStatus('live', 'Script wrote ' + dt(wrote, true) + ' \u00b7 read ' + dt(new Date(readAt).toISOString(), true)); else setFacStatus('stale', fac ? 'The Rooms tab has no row for your room yet' : 'The room is not on the desk yet'); }
if (r.role !== 'admin') return;
feed = r.feed; if (feed && feed.actions) { feed.actions = feed.actions.filter(function (a) { var t = closedAt[a.key]; return !(t && String(feed.generated || '') < t); }); } ac = r.ac;
if (feed) { Object.keys(held.handled).forEach(function (em) { Object.keys(held.handled[em]).forEach(function (kind) { var h = held.handled[em][kind]; if (String(feed.generated || '') < h.at) (feed.roster || []).forEach(function (m) { if (String(m.email).toLowerCase() === em) m[kind === 'agreement' ? 'handledAgreement' : 'handledAnswers'] = h.when; }); }); });
  Object.keys(held.notes).forEach(function (em) { var h = held.notes[em]; if (String(feed.generated || '') < h.at) { (feed.roster || []).forEach(function (m) { if (String(m.email).toLowerCase() === em) m.note = h.note; }); (feed.actions || []).forEach(function (a) { if (keyEmail(a) === em && kindOf(a) === 'hand') { a.note = h.note; a.because = 'Raised a hand' + (a.raised ? ' on ' + dt(a.raised) : '') + ' — he replied asking to talk.' + (h.note ? ' He asked for: ' + h.note : ''); } }); } }); }
if (feed && held.asked && String(feed.generated || '') < held.asked) applyAsked(held.asked);
notice(flashMsg ? esc(flashMsg) : '');
if (!feed) { if (!roomMode || adminOpen) renderAll(); setStatus('stale', 'The desk has not been written yet'); notice('The Front Desk sheet has no feed yet. In Apps Script, run <strong>reread</strong> once; the desk fills within a minute.'); return; }
if (!roomMode || adminOpen) renderAll();
setStatus('live', 'Script wrote ' + dt(feed.generated, true) + ' · read ' + dt(new Date(readAt).toISOString(), true));
}, function (e) {
var code = e && e.error;
if (code === 'no_key' || code === 'bad_key' || code === 'key_expired' || code === 'removed' || code === 'not_you' || code === 'no_site') { keep(null); who = null; feed = null; fac = null; if (timer) { clearInterval(timer); timer = null; } gateSend(code === 'no_site' ? '' : words(e)); return; }
if (roomMode) { setFacStatus(fac ? 'stale' : 'off', fac ? 'Showing the last good read' : 'Could not read the desk'); fnotice(esc(words(e))); }
setStatus(feed ? 'stale' : 'off', feed ? 'Showing the last good read' : 'Could not read the desk'); notice(words(e));
});
}
$('refresh').addEventListener('click', function () { load(); });
function owners() {
var set = {}; ((feed && feed.actions) || []).forEach(function (a) { if (a.owner) set[a.owner] = 1; });
((who && who.people) || []).forEach(function (p) { if (p.role === 'admin' && p.name) set[p.name] = 1; });
return Object.keys(set).sort();
}
function renderTabs() {
var names = owners(); var host = $('tabs');
if (names.indexOf(owner) < 0 && owner !== 'all') owner = 'all';
host.innerHTML = ['all'].concat(names).map(function (n) { return '<button type="button" data-owner="' + esc(n) + '" aria-pressed="' + (n === owner) + '">' + esc(n === 'all' ? 'Everyone' : n) + '</button>'; }).join('');
Array.prototype.forEach.call(host.querySelectorAll('button'), function (b) {
b.addEventListener('click', function () { owner = b.getAttribute('data-owner'); try { localStorage.setItem('fd-owner', owner); } catch (e) {} renderTabs(); renderActions(); });
});
}
function mine() {
var all = (feed && feed.actions) || [];
var list = owner === 'all' ? all : all.filter(function (a) { return (a.owner || '').toLowerCase() === owner.toLowerCase(); });
return list.slice().sort(function (a, b) { return new Date(a.firstSeen || 0) - new Date(b.firstSeen || 0); });
}
function other(name) { var n = owners().filter(function (x) { return x !== name; }); return n.length === 1 ? n[0] : 'the others'; }
function renderGreeting() {
if (roomMode) return; /* build 18: the band belongs to the room */
var line = $('apLine'), btn = $('apPrimary'), note = $('apPrimaryNote');
if (!feed) { line.textContent = 'Reading the desk.'; btn.textContent = 'See what is waiting'; btn.href = '#lane'; note.textContent = 'Every form, payment and booking that came in, gathered in one place.'; return; }
var all = (feed.actions || []).slice().sort(function (a, b) { return new Date(a.firstSeen || 0) - new Date(b.firstSeen || 0); }), c = feed.cohort || {};
var reader = first((who && who.name) || '');
var sameOwner = function (a, n) { return n && (a.owner || '').toLowerCase() === n.toLowerCase(); };
var ownList = all.filter(function (a) { return sameOwner(a, reader); });
var others = owners().filter(function (n) { return n.toLowerCase() !== reader.toLowerCase(); });
var waiting = all.length ? plural(all.length, 'thing needs', 'things need') + ' a hand' : 'Nothing is waiting on anyone';
var counts = all.length ? (reader ? plural(ownList.length, 'thing', 'things') + ' for you' : '') + others.map(function (n) { var k = all.filter(function (a) { return sameOwner(a, n); }).length; return (reader ? ', ' : '') + k + ' for ' + n; }).join('') : '';
var room = c.openSpots != null ? (c.openSpots === 0 ? 'The room is full.' : plural(c.openSpots, 'open spot', 'open spots') + ' in the room.') : '';
line.innerHTML = '<span class="ap-s">' + esc(waiting) + (counts ? ':' : '.') + '</span> ' + (counts ? '<span class="ap-s">' + esc(counts) + '.</span> ' : '') + (room ? '<span class="ap-s">' + esc(room) + '</span>' : '');
var f = ownList[0] || all[0];
if (f) {
var his = sameOwner(f, reader);
btn.textContent = (his ? '' : 'For ' + (f.owner || 'the desk') + ': ') + (f.do || 'Open the lane'); btn.href = f.link || '#lane';
if (f.link) { btn.target = '_blank'; btn.rel = 'noopener'; } else { btn.removeAttribute('target'); btn.removeAttribute('rel'); }
note.textContent = (f.for ? f.for : '') + (f.firstSeen ? (f.for ? ' · ' : '') + 'waiting since ' + dt(f.firstSeen, true) : '') + (his || !reader ? '' : ' · nothing is waiting on you');
} else {
btn.textContent = 'Read what came in'; btn.href = '#week-sec';
btn.removeAttribute('target'); btn.removeAttribute('rel');
note.textContent = feed.doneThisWeek ? feed.doneThisWeek + ' closed this week on its own.' : 'What came in since you were last here, by man.';
}
}
function kindOf(a) { var m = /^([a-z]+):/.exec(String((a && a.key) || '')); return m ? m[1] : ''; }
function oldWhy(a) {
switch (kindOf(a)) {
case 'hand': return 'A man replied asking to talk; the sooner he hears back, the more it means.';
case 'seat': case 'bwm': case 'wl': case 'agr': case 'askans': case 'contact':
return 'A man is waiting to hear from our team, and the sooner he does, the more his first step means.';
case 'ans': case 'add': return 'A man trusted us with his answers; the sooner they are read, the sooner he feels heard.';
case 'first': return 'A man chose to meet one-on-one and is waiting to hear when.';
case 'room': return 'The seat link is still open to men the room cannot hold.';
case 'search': return 'The month\'s search story is waiting for a look.';
default: return '';
}
}
function renderNext() {
var t = $('apNextTitle'), b = $('apNextBody'), l = $('apNextLink');
if (!feed) return;
var all = feed.actions || [], list = mine(), c = feed.cohort || {};
var old = list.filter(function (a) { return a.firstSeen && (Date.now() - new Date(a.firstSeen)) > 48 * 36e5; });
var title, body, href = '#lane', label = 'Show me the first one';
if (old.length) {
title = 'Clear the oldest one first';
body = plural(old.length, 'thing has', 'things have') + ' waited more than two days. ' + (oldWhy(old[0]) ? oldWhy(old[0]) + ' ' : '') + 'Start with ' + (old[0].for || old[0].do) + '.';
href = '#apc' + list.indexOf(old[0]);
} else if (list.length) {
title = 'Work the lane top to bottom'; body = 'It is in the order things came in. Nothing here is older than two days, so one pass clears it.'; href = '#apc0';
} else if ((c.openSpots || 0) > 0 && (c.waitList || 0) > 0) {
title = 'Seat someone from the wait list';
body = plural(c.waitList, 'man is', 'men are') + ' on the wait list and the room has ' + plural(c.openSpots, 'open spot', 'open spots') + '. Our team sends the email a man gets; the roster shows who has signed the agreement and who has answered the questions.';
href = '#men-sec'; label = 'See the men';
} else if (all.length && owner !== 'all') {
title = 'Nothing for ' + owner + ' today'; body = 'The rest of the lane belongs to ' + other(owner) + '. Yours is clear.'; href = '#week-sec'; label = 'See what came in';
} else {
title = 'Read what came in'; body = 'Nothing needs a hand. What came in since you were last here is at the foot of the desk; the sessions ahead are under The week.'; href = '#week-sec'; label = 'Read what came in';
}
t.textContent = title; b.textContent = body; l.textContent = label; l.href = href;
l.removeAttribute('target'); l.removeAttribute('rel');
}
/* build 11: the Before We Meet cards (keys ans: add: askans: agr: bwm:) carry him — email him, text him — and the answers reader */
var ANS_KEY = /^(ans|add|askans|agr|bwm|seat|first|wl|hand):([^:]+)/, FU_KEY = /^(fu):([^:\s]+@[^:\s]+)/, CALL_KEY = /^(call):\d+:([^:\s]+@[^:\s]+)/;
var answersCache = {}, readOpen = {};
function keyEmail(a) { var k = (a && a.key) || '', m = ANS_KEY.exec(k) || FU_KEY.exec(k) || CALL_KEY.exec(k); return m ? m[2].toLowerCase() : ''; }
function rosterMan(email) { var r = (feed && feed.roster) || []; for (var i = 0; i < r.length; i++) { if (String(r[i].email).toLowerCase() === email) return r[i]; } var m = facMan(email); return m ? { name: m.name, email: m.email, phone: m.phone } : null; }
function smsHref(p) { var d = String(p || '').replace(/[^\d+]/g, ''); return d.length >= 7 ? 'sms:' + d : ''; }
function linkLabel(a) {
var k = kindOf(a);
if (a.key === 'room:full') return 'Open the offers page';
if (k === 'search') return /\/author\//.test(a.link || '') ? 'Open the page\u2019s settings' : 'Open the page';
if (k === 'refresh' || k === 'road') return 'Open the search sheet';
if (k === 'fu' || k === 'prom') return 'Open the notes';
return 'Open';
}
function doneLabel(a) { return a.key === 'room:full' ? 'I closed it' : /^research:hold:/.test(a.key || '') ? 'Hold it' : 'Done'; }
function cardActions(a) {
  var em = keyEmail(a), p = em ? rosterMan(em) : null, out = [], hasRead = /^(ans|add):/.test(a.key || '');
  if (hasRead) out.push('<button type="button" class="ap-btn ap-btn-primary" data-read="' + esc(a.key) + '" data-email="' + esc(em) + '">' + (readOpen[a.key] ? 'Hide his answers' : 'Read his answers') + '</button>');
  var w = kindOf(a) === 'search' ? wordsFor(a.page || a.for) : null;
  if (a.link && !w) out.push('<a class="ap-btn ' + (hasRead ? 'ap-btn-ghost' : 'ap-btn-primary') + '" href="' + esc(a.link) + '" target="_blank" rel="noopener">' + esc(linkLabel(a)) + '</a>');
  if (em) {
    out.push('<a class="ap-btn ap-btn-ghost" data-mail href="mailto:' + esc(em) + '">Email him</a>');
    var sms = p ? smsHref(p.phone) : '';
    if (sms) out.push('<a class="ap-btn ap-btn-ghost" data-text href="' + esc(sms) + '">Text him</a>');
  }
  var kind = askKind(a.key);
  if (kindOf(a) === 'road') {
    var lever = String(a.key).split(':')[1], mv = roadMove(), q = mv && mv.lever === lever ? mv.ask : '';
    if (lever === 'referral') out.unshift('<button type="button" class="ap-walk" data-road-referral>See the email<span class="ap-walk-arrow">\u2192</span></button>');
    else if (q) out.unshift('<button type="button" class="ap-walk" data-lane-ask="' + esc(q) + '">Ask the desk<span class="ap-walk-arrow">\u2192</span></button>');
  }
  if (kind && em) out.unshift('<button type="button" class="ap-btn ap-btn-primary" data-mail-see="' + esc(a.key) + '" data-kind="' + kind + '" data-email="' + esc(em) + '">' + (a.asked ? 'See the email again' : 'See the email') + '</button>');
  if (a.key) out.push('<button type="button" class="ap-btn ' + (a.link || hasRead || kind || kindOf(a) === 'road' ? 'ap-btn-ghost' : 'ap-btn-ghost') + '" data-done="' + esc(a.key) + '">' + doneLabel(a) + '</button>');
  if (!out.length) return '';
  return (a.asked ? '<p class="ap-card-state">Asked by email ' + esc(dt(a.asked, true)) + '. The card stays until he ' + (kind === 'answers' ? 'answers' : 'signs') + '.</p>' : '') +
    (a.touched && a.touched.what ? '<p class="ap-touch">The record: ' + esc(a.touched.what) + ' ' + esc(dt(a.touched.when, true)) + '. If that handled it, press Done.</p>' : '') +
    (w ? wordsHtml(w, editOf(a)) : '') +
    '<div class="ap-card-actions">' + out.join('') + '</div>' + (kindOf(a) === 'hand' ? noteBox(a) : '') + (hasRead ? '<div class="ap-read" data-pane="' + esc(a.key) + '"' + (readOpen[a.key] ? '' : ' hidden') + '>' + (readOpen[a.key] && answersCache[em] ? answersHtml(answersCache[em]) : '') + '</div>' : '') +
    (kind ? '<div class="ap-mail" data-mail-pane="' + esc(a.key) + '" hidden></div>' : '');
}
function answersHtml(r) {
  var h = '<p class="ap-card-state">' + esc(r.doorWords || '') + (r.at ? ' · in ' + esc(dt(r.at, true)) : '') + '</p>';
  (r.items || []).forEach(function (x) { h += '<div><p class="ask-q">' + esc(x.q) + '</p><p class="ask-a">' + esc(x.a) + '</p></div>'; });
  if ((r.since || []).length) {
    h += '<h4>Since we met</h4>';
    r.since.forEach(function (x) { h += '<div><p class="ask-q">' + esc(x.d || '') + '</p><p class="ask-a">' + esc(x.t) + '</p></div>'; });
  }
  return h;
}
function bindLane(lane) {
  var s = stored(); if (!lane || !s) return;
  Array.prototype.forEach.call(lane.querySelectorAll('[data-read]'), function (b) {
    b.addEventListener('click', function () {
      var key = b.getAttribute('data-read'), em = b.getAttribute('data-email'), pane = lane.querySelector('[data-pane="' + key.replace(/"/g, '') + '"]');
      if (!pane) return;
      if (readOpen[key]) { readOpen[key] = false; pane.hidden = true; b.textContent = 'Read his answers'; return; }
      readOpen[key] = true; pane.hidden = false; b.textContent = 'Hide his answers';
      if (answersCache[em]) { pane.innerHTML = answersHtml(answersCache[em]); return; }
      pane.innerHTML = '<p class="ap-card-state">Opening his answers…</p>';
      call({ action: 'answers', key: s.key, email: em }).then(function (r) { answersCache[em] = r; if (readOpen[key]) pane.innerHTML = answersHtml(r); },
        function (e) { pane.innerHTML = '<p class="ap-card-state">' + esc(e && e.error === 'none' ? 'No answers on file for him yet.' : words(e)) + '</p>'; readOpen[key] = false; b.textContent = 'Read his answers'; });
    });
  });
  Array.prototype.forEach.call(lane.querySelectorAll('[data-road-referral]'), function (b) {
    b.addEventListener('click', function () { goTo('road-sec'); setTimeout(function () { var r = document.querySelector('#road-body [data-room-ask]'); if (r) r.click(); }, 400); });
  });
  Array.prototype.forEach.call(lane.querySelectorAll('[data-lane-ask]'), function (b) {
    b.addEventListener('click', function () { var q = b.getAttribute('data-lane-ask'); if (!q) return; $('askIn').value = q; goTo('ask-sec'); glow('ask-sec'); ask(); });
  });
  bindDone(lane); bindMail(lane); bindNames(lane); bindCopy(lane); bindNotes(lane);
}
function bindDone(root) {
  var s = stored(); if (!root || !s) return;
  Array.prototype.forEach.call(root.querySelectorAll('[data-done]'), function (b) {
    b.addEventListener('click', function () {
      var was = b.textContent, key = b.getAttribute('data-done'); b.disabled = true; b.textContent = 'Closing…';
      call({ action: 'done', key: s.key, actionKey: key }).then(function () {
        var gone = null; closedAt[key] = new Date().toISOString();
        if (feed && feed.actions) { feed.actions = feed.actions.filter(function (a) { if (a.key === key) { gone = a; return false; } return true; }); if (gone && typeof feed.doneThisWeek === 'number') feed.doneThisWeek++; }
        if (fac && fac.actions) { fac.actions = fac.actions.filter(function (a) { if (a.key === key) { gone = gone || a; return false; } return true; }); (fac.men || []).forEach(function (m) { m.needs = (m.needs || []).filter(function (n) { return n.key !== key; }); }); if (fac.counts) fac.counts.need = (fac.men || []).filter(function (m) { return (m.needs || []).length; }).length; }
        rerender(); say(root, 'Closed' + (gone && gone.do ? ': ' + gone.do : '') + '. It is off the lane.'); load(true);
      }, function (e) { b.disabled = false; b.textContent = was; notice(esc(words(e))); });
    });
  });
}
function renderActions() {
renderGreeting(); renderNext();
var lane = $('lane');
if (!feed) { lane.innerHTML = '<div class="empty"><strong>Reading the desk.</strong><span>Anything that needs a hand shows up here with one owner and one verb.</span></div>'; $('apNext').hidden = true; return; }
var all = feed.actions || [], list = mine();
$('actions-h').textContent = all.length ? plural(all.length, 'thing to do', 'things to do') : 'Nothing waiting';
$('apNext').hidden = !!list.length; $('laneMore').innerHTML = ''; $('laneMoreRow').hidden = true;
if (!list.length) {
lane.innerHTML = '<div class="empty"><strong>' + (all.length ? 'Nothing for ' + esc(owner) + ' right now.' : 'Clear.') + '</strong><span>' + (feed.doneThisWeek ? feed.doneThisWeek + ' closed this week on its own.' : 'When a man signs the agreement, answers the questions, enrolls, reports a bug or offers a story, the next step appears here.') + '</span></div>';
return;
}
var cards = list.map(function (a, i) {
var old = a.firstSeen && (Date.now() - new Date(a.firstSeen)) > 48 * 36e5;
return '<article class="ap-card act" id="apc' + i + '">' +
'<p class="ap-card-kind">For ' + esc(a.owner) + '</p>' +
'<p class="ap-card-title">' + esc(a.do) + '</p>' +
(a.for ? '<p class="ap-card-body">' + esc(a.for) + '</p>' : '') +
(a.because ? '<p class="ap-card-state">' + esc(a.because) + '</p>' : '') +
'<p class="ap-card-state">First seen ' + esc(dt(a.firstSeen, true)) + (old ? ' <span class="wait">waiting ' + esc(ago(a.firstSeen)) + '</span>' : '') + '</p>' +
cardActions(a) +
'</article>';
});
laneSplit(lane, $('laneMore'), $('laneMoreRow'), $('laneMoreBtn'), cards);
bindLane(lane); bindLane($('laneMore'));
}
/* build 21: the three oldest cards show; the rest wait behind "Show the other N". Opened once, they stay open until the next render. */
var LANE_SHOW = 3, laneAllOpen = { lane: false, fLane: false };
function laneSplit(lane, more, row, btn, cards) {
  var k = lane.id === 'fLane' ? 'fLane' : 'lane';
  lane.innerHTML = cards.slice(0, LANE_SHOW).join('');
  more.innerHTML = cards.slice(LANE_SHOW).join('');
  var rest = Math.max(0, cards.length - LANE_SHOW);
  more.hidden = !(rest && laneAllOpen[k]); row.hidden = !(rest && !laneAllOpen[k]);
  btn.textContent = 'Show the other ' + plural(rest, 'card', 'cards');
  btn.onclick = function () { laneAllOpen[k] = true; more.hidden = false; row.hidden = true; };
}
var TRIES = ['What is the one thing to do this week?', 'Who has signed the agreement but not answered the questions?', 'Which pieces has the room written, and who has not?', 'What move is due next, and whose is it?'];
function renderAsk() {
$('askTries').innerHTML = TRIES.map(function (q) { return '<button type="button">' + esc(q) + '</button>'; }).join('');
Array.prototype.forEach.call($('askTries').querySelectorAll('button'), function (b) { b.addEventListener('click', function () { $('askIn').value = b.textContent; ask(); }); });
var st = who && who.claude && who.claude.state;
if (who && who.canAsk === false) { askMsg({ error: 'no_claude_key' }); } else if (st === 'refused') { askMsg({ error: 'key_refused' }); } else if (st === 'model') { askMsg({ error: 'model_unknown' }); } else { $('askNote').hidden = true; }
}
['askIn','fAskIn'].forEach(function (id) { var ta = $(id); if (ta) ta.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); var f = ta.closest('form'); if (f) { if (f.requestSubmit) f.requestSubmit(); else f.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })); } } }); });
function askUI(p) { var f = p === 'f'; return { inp: $(f ? 'fAskIn' : 'askIn'), btn: $(f ? 'fAskBtn' : 'askBtn'), q: $(f ? 'fAskQ' : 'askQ'), a: $(f ? 'fAskA' : 'askA'), note: $(f ? 'fAskNote' : 'askNote') }; }
function say(root, m) { (root && root.closest && root.closest('#facBody') ? fflash : flash)(m); }
function askMsg(e, p) {
var n = askUI(p).note; n.className = 'ask-note bad';
n.innerHTML = '<span>' + esc(words(e)) + '</span>' + (e && e.error === 'key_refused' ? '<a class="ap-btn ap-btn-ghost" href="' + SCRIPT_SETTINGS + '" target="_blank" rel="noopener">Open the script settings</a>' : '');
n.hidden = false;
}
function ask(p) {
var ui = askUI(p), room = p === 'f';
var q = String(ui.inp.value || '').trim();
if (!q) { ui.note.className = 'ask-note'; ui.note.textContent = words({ error: 'empty' }); ui.note.hidden = false; return; }
var s = stored(); if (!s) { gateSend(); return; }
var b = ui.btn, form = $(room ? 'fAskForm' : 'askForm'); b.disabled = true; b.textContent = room ? 'Reading your room…' : 'Reading the desk…'; b.classList.add('busy'); if (form) form.classList.add('busy');
ui.q.textContent = q; ui.q.hidden = false; ui.a.className = 'ask-a busy'; ui.a.textContent = 'Reading ' + (room ? 'your room' : 'the desk') + ' for: ' + q; ui.a.hidden = false; ui.note.hidden = true; ui.note.className = 'ask-note';
call({ action: 'ask', key: s.key, question: q, scope: room ? 'room' : 'desk' }).then(function (r) {
b.disabled = false; b.textContent = 'Ask'; b.classList.remove('busy'); if (form) form.classList.remove('busy');
ui.a.className = 'ask-a'; ui.a.textContent = r.answer; ui.a.hidden = false;
ui.note.className = 'ask-note'; ui.note.textContent = 'Answered from ' + (room ? 'your room' : 'the desk') + ' as it stood at ' + dt(new Date().toISOString(), true) + '. ' + r.asked + ' of ' + r.of + ' questions today.'; ui.note.hidden = false;
}, function (e) {
b.disabled = false; b.textContent = 'Ask'; b.classList.remove('busy'); if (form) form.classList.remove('busy'); ui.a.className = 'ask-a'; ui.a.hidden = true;
askMsg(e, p);
});
}
$('askForm').addEventListener('submit', function (ev) { ev.preventDefault(); ask(); });
function tile(label, num, sub, hero, extra) { return '<div class="tile' + (hero ? ' hero' : '') + '"><div class="label">' + esc(label) + '</div><div class="num">' + num + '</div>' + (sub ? '<div class="sub">' + sub + '</div>' : '') + (extra || '') + '</div>'; }
function num(v) { return v == null ? '—' : v; }
function howLabel(h) { return h === 'by hand' ? '<span class="how hand">By hand</span>' : '<span class="how">Seat link</span>'; }
/* build 12: Before We Meet has two halves. The agreement is the signed form (name and contact details). The answers are the twelve questions a man writes at /your-answers. */
var bwmOpen = {};
function doorOf(m) { return m.door || 'Group'; }
function inGroup(m) { return doorOf(m) !== 'One-on-one'; }
function bwmGroups() {
  var r = (feed && feed.roster) || [];
  var newest = function (k) { return function (a, b) { return String(b[k] || '').localeCompare(String(a[k] || '')); }; };
  return {
    answered: r.filter(function (m) { return m.answersIn; }).sort(newest('answersIn')),
    waitGroup: r.filter(function (m) { return m.agreementSigned && !m.answersIn && !m.handledAnswers && inGroup(m); }).sort(newest('agreementSigned')),
    waitOne: r.filter(function (m) { return m.agreementSigned && !m.answersIn && !m.handledAnswers && !inGroup(m); }).sort(newest('agreementSigned')),
    noAgreement: r.filter(function (m) { return m.seated && !m.agreementSigned && !m.handledAgreement && !m.answersIn; }).sort(newest('seated'))
  };
}
function bwmRow(m, kind, when, note) {
  var em = String(m.email || '').toLowerCase(), open = !!bwmOpen[em];
  var read = kind === 'Answers in' ? '<button type="button" class="ap-btn ap-btn-primary" data-bwm-read="' + esc(em) + '">' + (open ? 'Hide his answers' : 'Read his answers') + '</button> ' : '';
  return '<li><span><span class="kind">' + esc(kind) + '</span>' + nameOf(m) + '</span><span class="r">' + esc(dt(when, true)) + '</span>' +
    '<span class="s">' + esc(m.email) + ' · ' + esc(note) + '</span>' +
    '<span class="r">' + read + '<a class="ap-btn ap-btn-ghost" href="mailto:' + esc(em) + '">Email him</a></span>' +
    '<div class="ap-read" data-bwm-pane="' + esc(em) + '" style="grid-column: 1 / -1"' + (open ? '' : ' hidden') + '>' + (open && answersCache[em] ? answersHtml(answersCache[em]) : '') + '</div></li>';
}
/* build 20: The men — one summary line (seats, the agreement, the answers, Outstanding with the asks and Handled another way), then one row per man: seated men first in seat order, then the wait list and account-only men. His answers open from his row. */
function renderMen() {
  var el = $('men'); if (!el) return;
  if (!feed) { el.innerHTML = '<div class="sum"><div>Reading the desk.</div></div>'; return; }
  var c = feed.cohort || {}, room = feed.room || {}, r = feed.roster || [], roomMen = room.men || [];
  $('men-h').textContent = c.name || room.name || 'Breaking Free';
  $('men-sub').textContent = (c.firstNight ? 'Week 1 ' + dt(c.firstNight) + ' · ' : '') + plural(r.length, 'man', 'men') + ' on the sheet · the signed agreement and the twelve questions at /your-answers';
  var seatOf = {}; roomMen.forEach(function (m) { seatOf[String(m.email || '').toLowerCase()] = m; });
  var seatedMen = r.filter(function (m) { return m.seated; }), signedSeated = seatedMen.filter(function (m) { return m.agreementSigned || m.handledAgreement; });
  var noAgr = seatedMen.filter(function (m) { return !m.agreementSigned && !m.handledAgreement; });
  var handledAgr = seatedMen.filter(function (m) { return !m.agreementSigned && m.handledAgreement; }).length;
  var signedAll = r.filter(function (m) { return m.agreementSigned || m.handledAgreement; }), answered = signedAll.filter(function (m) { return m.answersIn || m.handledAnswers; }), noAns = signedAll.filter(function (m) { return !m.answersIn && !m.handledAnswers; });
  var handledAns = signedAll.filter(function (m) { return !m.answersIn && m.handledAnswers; }).length;
  var noName = r.filter(function (m) { return !m.name; });
  var size = room.size || c.roomSize || 0, taken = roomMen.length || seatedMen.length;
  var rowId = function (m) { return 'man-' + String(m.email || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'); };
  var outs = function (men, label) { return men.length ? '<div class="fix"><span>' + label + ':</span>' + men.map(function (m) { return '<a class="fix" href="#' + rowId(m) + '">' + (m.name ? esc(m.name) : esc(m.email)) + '</a>'; }).join('') + '</div>' : ''; };
  var askBtn = function (m, kind, verb) { return '<button type="button" class="ap-walk" data-mail-see="' + esc(kind + ':' + m.email) + '" data-kind="' + kind + '" data-email="' + esc(m.email) + '">' + (m[kind === 'agreement' ? 'askedAgreement' : 'askedAnswers'] ? 'Asked ' + esc(dt(m[kind === 'agreement' ? 'askedAgreement' : 'askedAnswers'])) + ' · see it' : verb) + '<span class="ap-walk-arrow">\u2192</span></button><button type="button" class="ap-btn ap-btn-ghost ap-btn-sm" data-handled="' + kind + '" data-email="' + esc(m.email) + '">Handled another way</button><div class="ap-mail" data-mail-pane="' + kind + '" hidden></div>'; };
  var line = (size ? '<strong>' + taken + ' of ' + size + '</strong> seats are taken' + (room.open ? ' — ' + plural(room.open, 'open spot', 'open spots') + '.' : (taken >= size ? '. The room is full.' : '.')) : '<strong>' + plural(seatedMen.length, 'man', 'men') + '</strong> seated.') +
    ' <strong>' + signedSeated.length + ' of ' + seatedMen.length + '</strong> in the room have signed the agreement' + (handledAgr ? ' (' + handledAgr + ' by hand)' : '') + '; <strong>' + answered.length + ' of ' + signedAll.length + '</strong> who signed have answered the questions' + (handledAns ? ' (' + handledAns + ' by hand)' : '') + '.' +
    (c.waitList ? ' ' + plural(c.waitList, 'man is', 'men are') + ' on the wait list.' : '') + (c.accountOnly ? ' ' + plural(c.accountOnly, 'man has', 'men have') + ' a site account and nothing else yet.' : '') + (noName.length ? ' ' + plural(noName.length, 'man has', 'men have') + ' no name yet.' : '');
  var summary = '<div class="sum" id="bwm-sec" style="margin-bottom: 12px">' + outs(noAgr, 'No agreement yet') + outs(noAns, 'No answers yet') + outs(noName, 'No name yet') +
    '<div class="ap-card-actions"><a class="ap-btn ap-btn-ghost ap-btn-sm" href="https://docs.google.com/spreadsheets/d/1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw/edit" target="_blank" rel="noopener">Open the sheet</a><button type="button" class="ap-walk" data-ask="Who in the room has not signed the agreement, and who has signed but not answered the questions?">Ask: Who is outstanding?<span class="ap-walk-arrow">\u2192</span></button></div></div>';
  var open = (feed.actions || []);
  var sheet = 'https://docs.google.com/spreadsheets/d/1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw/edit#gid=0';
  var rank = function (m) { var s = seatOf[String(m.email || '').toLowerCase()]; if (s) return 0 + Number(s.seat || 0) / 100; if (m.seated) return 1; if (m.waitList) return 2; return 3; };
  var sorted = r.slice().sort(function (a, b) { return rank(a) - rank(b) || String(a.name || a.email).localeCompare(String(b.name || b.email)); });
  var rows = sorted.map(function (m) {
    var em = String(m.email || '').toLowerCase(), s = seatOf[em];
    var cards = open.filter(function (a) { return keyEmail(a) === em; });
    var wr = writtenOf(em);
    var state = [m.door || '', m.hereFor ? 'here for ' + m.hereFor : '', m.referredBy ? 'referred by ' + m.referredBy : '', s ? (s.how === 'by hand' ? 'enrolled by hand ' : 'seat link ') + dt(s.when) : (m.seated ? 'seated ' + dt(m.seated) : ''), m.waitList && !m.seated ? 'wait list ' + dt(m.waitList) : '', m.agreementSigned ? 'agreement signed ' + dt(m.agreementSigned) : (m.handledAgreement ? 'agreement handled by hand ' + dt(m.handledAgreement) : 'no signed agreement'), m.answersIn ? 'answers in ' + dt(m.answersIn) : (m.handledAnswers ? 'answers handled by hand' : 'no answers yet'), m.account && !s ? 'account ' + dt(m.account) : ''].concat(wr.map(function (x) { return x.piece + ' written ' + dt(x.at); })).filter(Boolean).join(' · ');
    var idx = -1; mine().forEach(function (a, i) { if (idx < 0 && keyEmail(a) === em) idx = i; });
    var kind = cards.length ? plural(cards.length, 'thing waits', 'things wait') : (s ? 'Seat ' + s.seat + ' of ' + size : (m.seated ? 'Seated' : (m.waitList ? 'Wait list' : (m.stage || 'On the sheet'))));
    var needAgr = m.seated && !m.agreementSigned && !m.handledAgreement, needAns = (m.agreementSigned || m.handledAgreement) && !m.answersIn && !m.handledAnswers;
    var acts = '<a class="ap-btn ap-btn-ghost ap-btn-sm" data-mail href="mailto:' + esc(em) + '">Email him</a>' + (smsHref(m.phone) ? '<a class="ap-btn ap-btn-ghost ap-btn-sm" data-text href="' + esc(smsHref(m.phone)) + '">Text him</a>' : '') +
      (cards.length ? '<a class="ap-btn ap-btn-primary ap-btn-sm" href="' + (idx >= 0 ? '#apc' + idx : '#lane') + '">See his card</a>' : '') +
      (m.answersIn ? '<button type="button" class="ap-walk" data-bwm-read="' + esc(em) + '">' + (bwmOpen[em] ? 'Hide his answers' : 'Read his answers') + '<span class="ap-walk-arrow">\u2192</span></button>' : '') +
      '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + sheet + '" target="_blank" rel="noopener">Open his row</a>';
    var asks = needAgr ? askBtn(m, 'agreement', 'Send the agreement ask') : (needAns ? askBtn(m, 'answers', 'Send the answers ask') : '');
    return '<div class="man' + (cards.length ? ' need' : '') + '" id="' + rowId(m) + '"><p class="k' + (cards.length ? ' need' : '') + '">' + esc(kind) + '</p><p class="f">' + nameOf(m) + '</p><p class="m">' + esc(m.email) + ' · ' + esc(state) + '</p>' +
      (m.note ? '<p class="need-line">' + esc(m.note) + '</p>' : '') + (cards.length ? '<p class="need-line">' + cards.map(function (a) { return esc(a.do); }).join('<br>') + '</p>' : '') +
      '<div class="ap-card-actions">' + acts + asks + '</div>' + (m.answersIn ? '<div class="ap-read" data-bwm-pane="' + esc(em) + '"' + (bwmOpen[em] ? '' : ' hidden') + '>' + (bwmOpen[em] && answersCache[em] ? answersHtml(answersCache[em]) : '') + '</div>' : '') + '</div>';
  }).join('');
  var rm = cohortRoom(), pcs = (rm && rm.pieces) || [], sigs = (rm && rm.signals) || [];
  var pieceLine = pcs.length ? pcs.map(function (p) { return '<strong>' + esc(p.name) + '</strong>: ' + p.count + ' of ' + p.of + ' have written it.'; }).join(' ') : '';
  sum('men-sec', line + (pieceLine ? ' ' + pieceLine : '') + (sigs.length ? ' <strong>' + plural(sigs.length, 'signal', 'signals') + '</strong> from Week ' + esc(sigs[0].week) + '.' : ''));
  el.innerHTML = summary + piecesBlock(pcs, rm) + signalsBlock(sigs, rm, 'ask') + (rows ? '<div class="men">' + rows + '</div>' : '<div class="empty"><strong>No one on the sheet yet.</strong><span>A man appears here from the signed agreement, the site account or the enrollment notice.</span></div>');
  var s = stored(); if (!s) return;
  Array.prototype.forEach.call(el.querySelectorAll('.man'), function (row) { bindMail(row); });
  bindNames(el); bindHandled(el); bindAnswers(el); bindSignals(el);
  Array.prototype.forEach.call(el.querySelectorAll('[data-ask]'), function (b) { b.addEventListener('click', function () { $('askIn').value = b.getAttribute('data-ask'); goTo('ask-sec'); glow('ask-sec'); ask(); }); });
}
/* build 21: the pieces written (activity only, never the words) and the room's signals, with the move each proposes */
function writtenOf(email) { var p = feed && feed.pieces, l = p && p.byMan && p.byMan[String(email || '').toLowerCase()]; return l || []; }
function piecesBlock(pcs, rm) {
  if (!pcs.length) return '';
  return '<div class="pieces"><p class="ap-card-kind">The pieces</p>' + pcs.map(function (p) {
    return '<p><strong>' + esc(p.name) + '</strong> (Week ' + esc(p.week) + '): ' + p.count + ' of ' + p.of + ' have written it' + (p.men && p.men.length ? ' \u2014 ' + esc(p.men.join(', ')) : '') + '.' + (p.url ? ' <a href="' + esc(p.url) + '" target="_blank" rel="noopener">Open the piece</a>' : '') + '</p>';
  }).join('') + '<p class="small muted">Counted from the site\u2019s own notices: that a man wrote, never what he wrote.</p></div>';
}
function signalsBlock(sigs, rm, askAttr) {
  if (!sigs.length) return '';
  var mv = (feed && feed.moves) || {}, taken = mv.taken || [], props = mv.proposed || [];
  var h = '<div><p class="ap-card-kind">What the room carried \u00b7 Week ' + esc(sigs[0].week) + '</p>' + sigs.map(function (t) {
    var tk = null, pp = null; taken.forEach(function (x) { if (x.key === t.key) tk = x; }); props.forEach(function (x) { if (x.key === t.key) pp = x; });
    var move = tk ? '<p class="mv-l">The move: ' + esc(tk.move) + ' \u00b7 ' + esc(tk.owner) + (tk.due ? ' \u00b7 due ' + esc(dt(tk.due)) : '') + ' \u00b7 ' + esc(tk.status) + '</p>' :
      (pp ? '<div class="ap-card-actions"><button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-move-line="' + esc(pp.key) + '">Add this move: ' + esc(pp.move) + '</button></div>' : '');
    return '<div class="sig"><p class="t">' + esc(t.theme) + '.</p>' + (t.words ? '<p class="w">' + esc(t.words) + '</p>' : '') + '<p class="sp">Speaks to it: ' + esc(t.speaks || 'nothing on our shelf yet') + '</p>' + move + '</div>';
  }).join('');
  var sheet = (rm && rm.links && rm.links.signals) || (feed && feed.links && feed.links.signals) || '';
  h += '<div class="ap-card-actions">' + (sheet ? '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(sheet) + '" target="_blank" rel="noopener">Open the Room Signals sheet</a>' : '') + (rm && rm.notes && rm.notes.url ? '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(rm.notes.url) + '" target="_blank" rel="noopener">Open the notes</a>' : '') +
    '<button type="button" class="ap-walk" data-' + askAttr + '="What did the room carry last week, and what speaks to it?">Ask: What did the room carry?<span class="ap-walk-arrow">\u2192</span></button></div></div>';
  return h;
}
function bindSignals(root) {
  var mv = (feed && feed.moves) || {}, props = mv.proposed || [];
  bindMoveLines(root, props);
}
function bindAnswers(root) {
  var s = stored(); if (!root || !s) return;
  Array.prototype.forEach.call(root.querySelectorAll('[data-bwm-read]'), function (b) {
    b.addEventListener('click', function () {
      var em = b.getAttribute('data-bwm-read'), row = b.closest('.man'), pane = row && row.querySelector('[data-bwm-pane]');
      if (!pane) return;
      if (bwmOpen[em]) { bwmOpen[em] = false; pane.hidden = true; b.textContent = 'Read his answers'; return; }
      bwmOpen[em] = true; pane.hidden = false; b.textContent = 'Hide his answers';
      if (answersCache[em]) { pane.innerHTML = answersHtml(answersCache[em]); return; }
      pane.innerHTML = '<p class="ap-card-state">Opening his answers…</p>';
      call({ action: 'answers', key: s.key, email: em }).then(function (r) { answersCache[em] = r; if (bwmOpen[em]) pane.innerHTML = answersHtml(r); },
        function (e) { pane.innerHTML = '<p class="ap-card-state">' + esc(e && e.error === 'none' ? 'No answers on file for him yet.' : words(e)) + '</p>'; bwmOpen[em] = false; b.textContent = 'Read his answers'; });
    });
  });
}
/* build 20: the count line and the last campaigns, under the segments in This week's list row */
function listLine() {
  if (!ac) return '<p class="m">The count sheet has not been read yet.</p>';
  var st = ac.stages || {}, men = st.men || {}, ch = st.churches || {}, un = ac.unsubscribed || {};
  var churches = (ch.no_reply || 0) + (ch.has_program || 0) + (ch.no_program || 0) + (ch.referred || 0) + (ch.not_us || 0);
  var h = '<p class="ap-card-kind">The count' + (ac.generated ? ' · ' + esc(dt(ac.generated, true)) : '') + '</p><p class="m">' + num(men.on_the_list) + ' men on the list: ' + num(men.hand_raised) + ' raised a hand, ' + (men.wait_list || 0) + ' on the wait list, ' + (men.in_conversation || 0) + ' in conversation. ' +
    churches + ' churches: ' + (ch.has_program || 0) + ' have a program, ' + (ch.no_program || 0) + ' want one, ' + (ch.referred || 0) + ' referred. ' + num(un.count) + ' unsubscribed this window, ' + num(un.all_time) + ' all time.</p>';
  var cs = (ac.campaigns || []).slice(0, 4);
  if (cs.length) h += '<ul class="list">' + cs.map(function (k) {
    var clicks = Object.keys(k).filter(function (x) { return x.indexOf('unique_clicks') === 0; }).reduce(function (s, x) { return s + Number(k[x] || 0); }, 0);
    var pct = k.sent ? Math.round(100 * Number(k.unique_opens || 0) / Number(k.sent)) : 0;
    return '<li><span><span class="kind">Campaign</span>' + esc(k.name) + ' <span class="muted small">to ' + esc(k.sent) + ' · ' + esc(k.unique_opens) + ' opened (' + pct + '%) · ' + clicks + ' clicked · ' + esc(k.unsubscribes) + ' left</span></span><span class="r">' + esc(dt(k.sent_or_scheduled)) + '</span></li>';
  }).join('') + '</ul>';
  return h;
}
function step(iso) { return iso ? '<span class="ok">✓</span> ' + esc(dt(iso)) : '<span class="no">—</span>'; }
function fact(k, v, wide) { return '<div class="fact' + (wide ? ' wide' : '') + '"><span class="k">' + esc(k) + '</span><span class="v">' + v + '</span></div>'; }
/* build 19: the practice desk does, not shows — the road to January, Add this move where the move is named, Handled another way, hand-raised cards with a note, the roster as rows, Since you were last here. */
var seenPrev = null;
try { seenPrev = localStorage.getItem('fd-seen-prev'); } catch (e) {}
function markSeen() { try { var cur = localStorage.getItem('fd-seen'); var now = new Date().toISOString(); if (cur && (Date.now() - new Date(cur)) > 30 * 60e3) { localStorage.setItem('fd-seen-prev', cur); seenPrev = cur; } if (!cur) { var wk = new Date(Date.now() - 7 * 864e5).toISOString(); localStorage.setItem('fd-seen-prev', wk); seenPrev = seenPrev || wk; } localStorage.setItem('fd-seen', now); } catch (e) {} }
function addMove(p, btn, extra, done) {
  var s = stored(); if (!s) return;
  var mv = (feed && feed.moves) || {};
  var f = function (n, d) { var x = extra && extra.querySelector ? extra.querySelector('[data-f="' + n + '"]') : null; return x && x.value ? x.value : d; };
  var was = btn.textContent; btn.disabled = true; btn.textContent = 'Adding…';
  call({ action: 'move_add', key: s.key, moveKey: p.key, signal: p.signal, from: p.from, move: f('move', p.move), owner: f('owner', p.owner), due: f('due', mv.dueDay || ''), link: p.link || '', phrase: p.phrase || '' }).then(function (r) {
    if (feed && feed.moves) { feed.moves.proposed = (feed.moves.proposed || []).filter(function (x) { return x.key !== p.key; }); feed.moves.taken = (feed.moves.taken || []).concat([{ key: p.key, signal: p.signal, from: p.from, move: r.move, owner: r.owner, due: r.due, check: r.check, status: 'taken', link: p.link || '' }]); }
    if (done) done(r);
    rerender(); flash('Move added: ' + r.move + ' for ' + p.signal.slice(0, 60) + (p.signal.length > 60 ? '…' : '') + ' — due ' + dt(r.due) + ', ' + r.owner + '.' + (r.note ? ' ' + r.note : ''));
  }, function (e) { btn.disabled = false; btn.textContent = was; notice(esc(words(e))); });
}
function moveLines(list, cls) {
  var taken = ((feed && feed.moves && feed.moves.taken) || []).map(function (t) { return t.key; });
  return list.filter(function (p) { return taken.indexOf(p.key) < 0; }).map(function (p) {
    return '<div class="mline"><span>' + esc(p.signal) + '</span><button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-move-line="' + esc(p.key) + '">Add this move: ' + esc(p.move) + '</button></div>';
  }).join('');
}
function bindMoveLines(root, list) {
  Array.prototype.forEach.call(root.querySelectorAll('[data-move-line]'), function (b) {
    b.addEventListener('click', function () { var key = b.getAttribute('data-move-line'), p = null; list.forEach(function (x) { if (x.key === key) p = x; }); if (p) addMove(p, b, null); });
  });
}
function noteBox(a) {
  return '<div class="ap-note"><label>What did he ask for?</label><textarea maxlength="400" data-note-text placeholder="In his words, or yours. The desk holds it from then on.">' + esc(a.note || '') + '</textarea>' +
    '<div class="ap-card-actions"><button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-note-save="' + esc(keyEmail(a)) + '">' + (a.note ? 'Save the change' : 'Save it on his card') + '</button></div></div>';
}
function bindNotes(root) {
  var s = stored(); if (!root || !s) return;
  Array.prototype.forEach.call(root.querySelectorAll('[data-note-save]'), function (b) {
    b.addEventListener('click', function () {
      var em = b.getAttribute('data-note-save'), box = b.closest('.ap-note'), ta = box && box.querySelector('[data-note-text]');
      var text = String((ta && ta.value) || '').trim(), was = b.textContent;
      b.disabled = true; b.textContent = 'Saving…';
      call({ action: 'note_set', key: s.key, email: em, note: text }).then(function (r) {
        var upd = function (a) { if (keyEmail(a) === r.email && kindOf(a) === 'hand') { a.note = r.note; a.because = 'Raised a hand' + (a.raised ? ' on ' + dt(a.raised) : '') + ' — he replied asking to talk.' + (r.note ? ' He asked for: ' + r.note : ''); } };
        ((feed && feed.actions) || []).forEach(upd); ((fac && fac.actions) || []).forEach(upd);
        ((feed && feed.roster) || []).forEach(function (m) { if (String(m.email).toLowerCase() === r.email) m.note = r.note; });
        held.notes[r.email] = { note: r.note, at: new Date().toISOString() };
        rerender(); say(root, 'Saved on his card. Ask the desk holds it now.');
      }, function (e) { b.disabled = false; b.textContent = was; say(root, words(e)); });
    });
  });
}
function bindHandled(root) {
  var s = stored(); if (!root || !s) return;
  Array.prototype.forEach.call(root.querySelectorAll('[data-handled]'), function (b) {
    b.addEventListener('click', function () {
      var kind = b.getAttribute('data-handled'), em = b.getAttribute('data-email'), was = b.textContent;
      b.disabled = true; b.textContent = 'Marking…';
      call({ action: 'handled', key: s.key, email: em, kind: kind }).then(function (r) {
        ((feed && feed.roster) || []).forEach(function (m) { if (String(m.email).toLowerCase() === r.email) m[r.kind === 'agreement' ? 'handledAgreement' : 'handledAnswers'] = r.at; });
        (held.handled[r.email] = held.handled[r.email] || {})[r.kind] = { at: new Date().toISOString(), when: r.at };
        (r.closed || []).forEach(function (k) { closedAt[k] = new Date().toISOString(); });
        if (feed && feed.actions) feed.actions = feed.actions.filter(function (a) { return (r.closed || []).indexOf(a.key) < 0; });
        if (fac && fac.actions) fac.actions = fac.actions.filter(function (a) { return (r.closed || []).indexOf(a.key) < 0; });
        rerender(); say(root, 'Marked handled another way. The desk stops asking him for ' + (r.kind === 'agreement' ? 'the agreement' : 'his answers') + '.'); load(true);
      }, function (e) { b.disabled = false; b.textContent = was; say(root, words(e)); });
    });
  });
}
function bindRoomAsk(root) {
  var s = stored(); if (!root || !s) return;
  Array.prototype.forEach.call(root.querySelectorAll('[data-room-ask]'), function (b) {
    b.addEventListener('click', function () {
      var wrap = b.closest ? b.closest('.tw-row') : null, pane = (wrap || root).querySelector('[data-room-pane]'); if (!pane) return;
      if (!pane.hidden) { pane.hidden = true; return; }
      pane.hidden = false; pane.innerHTML = '<p class="ap-card-state">Writing the email…</p>';
      call({ action: 'room_ask_text', key: s.key }).then(function (r) {
        pane.innerHTML = '<div class="ap-mail-h">To the ' + esc(r.to) + ' men in the room (each sees only himself)' + (r.cc ? ' · cc ' + esc(r.cc) : '') + ' · from john@, signed John</div><div class="ap-mail-h">Subject: ' + esc(r.subject) + '</div><pre>' + esc(r.body) + '</pre>' +
          (r.asked ? '<p class="ap-card-state">Last sent ' + esc(dt(r.asked, true)) + '. It goes at most once a week.</p>' : '') +
          '<div class="ap-card-actions"><button type="button" class="ap-btn ap-btn-primary" data-room-send>Send it to the room</button><button type="button" class="ap-btn ap-btn-ghost" data-room-close>Not now</button></div>';
        pane.querySelector('[data-room-close]').addEventListener('click', function () { pane.hidden = true; });
        var sb = pane.querySelector('[data-room-send]');
        sb.addEventListener('click', function () {
          sb.disabled = true; sb.textContent = 'Sending…';
          call({ action: 'room_ask_send', key: s.key }).then(function (q) { pane.hidden = true; held.asked = q.asked; applyAsked(q.asked); rerender(); flash('Sent to ' + q.to + ' men at ' + dt(q.asked, true) + '. It is on the Sends tab.'); load(true); },
            function (e) { sb.disabled = false; sb.textContent = 'Send it to the room'; pane.insertAdjacentHTML('beforeend', '<p class="ap-card-state">' + esc(e && e.error === 'too_soon' ? 'It went out less than a week ago. Give the room a week.' : words(e)) + '</p>'); });
        });
      }, function (e) { pane.innerHTML = '<p class="ap-card-state">' + esc(words(e)) + '</p>'; });
    });
  });
}
function segRows() {
  var segs = (feed && feed.segments) || [];
  if (!segs.length) return '';
  return '<div class="segs">' + segs.map(function (g) {
    var n = g.of != null ? esc(g.count + ' of ' + g.of) : esc(g.count) + (g.unit ? '<small>' + esc(g.unit) + '</small>' : '');
    return '<div class="seg"><span class="seg-n">' + n + '</span><span class="seg-l">' + esc(g.label) + '</span><span class="seg-f">' + esc(g.from) + (g.members && g.members.length && g.of != null ? ' · ' + esc(g.members.slice(0, 6).join(', ')) + (g.members.length > 6 ? '…' : '') : '') + '</span>' + (g.ask ? '<button type="button" class="ap-walk" data-ask="' + esc(g.ask) + '">Ask<span class="ap-walk-arrow">\u2192</span></button>' : '') + '</div>';
  }).join('') + '<p class="small muted">The words each segment hears are in the skill ap-segments; the counts come from the agreement, the room and the search record.</p></div>';
}
function cohortRoom() {
  var rooms = (feed && feed.fac && feed.fac.rooms) || [], c = (feed && feed.cohort) || {};
  for (var i = 0; i < rooms.length; i++) { if (!c.name || String(rooms[i].room).toLowerCase().indexOf(String(c.name).toLowerCase().split(/\s+[—–-]\s+/)[0]) >= 0) return rooms[i]; }
  return rooms[0] || null;
}
/* build 21: The week — this week's room, the reminder's state and the coaching sessions ahead, in one closed section. */
function renderWeekSec() {
  var el = $('tw-body'); if (!el) return;
  if (!feed) { sum('tw-sec', 'Reading the desk.'); el.innerHTML = ''; return; }
  var rm = cohortRoom(), t = rm && rm.this, co = feed.coaching || {}, up = (co.upcoming || []).slice(0, 8);
  var parts = [];
  if (t) parts.push('<strong>Week ' + esc(t.week) + '</strong> is ' + esc(t.dayText) + (t.time ? ', ' + esc(t.time).replace(' ', '\u00a0') : '') + (t.title ? ' — ' + esc(weekTitle(t.title)) : '') + '.');
  else if (rm && rm.last) parts.push('The last session was Week ' + esc(rm.last.week) + ', ' + esc(rm.last.dayText) + '; no room is ahead on the Weeks tab.');
  else parts.push('No room is on the Weeks tab yet.');
  var rem = (t && t.reminder) || {};
  if (t) parts.push(rem.sent ? 'The reminder went out ' + esc(dt(rem.sent, true)) + '.' : 'The reminder goes ' + esc(rem.when || 'the evening before') + '.');
  parts.push(up.length ? '<strong>' + plural(up.length, 'coaching session', 'coaching sessions') + '</strong> ahead; the next is ' + esc(up[0].name) + ', ' + esc(up[0].when) + '.' : 'No coaching sessions ahead on the calendar or in Calendly.');
  sum('tw-sec', parts.join(' '));
  $('tw-sub').textContent = rm && rm.meets ? rm.meets : '';
  var lines = [];
  if (t) {
    lines.push('<strong>' + esc(weekTitle(t.title)) + '</strong>');
    if (t.piece) lines.push('It introduces ' + esc(t.piece) + '.' + (t.pieceAsk || []).map(function (p) { return ' ' + esc(p.name) + ': ' + esc(p.asks); }).join(''));
    if ((t.articles || []).length) lines.push('Posted this week: ' + t.articles.map(function (a) { return esc(a.title); }).join('; ') + '.');
    if (t.ask) lines.push('The facilitator’s one ask of the room: ' + esc(t.ask));
  }
  var btns = '';
  if (rm && rm.courseLink) btns += '<a class="ap-btn ap-btn-primary ap-btn-sm" href="' + esc(rm.courseLink) + '" target="_blank" rel="noopener">Open the session</a>';
  ((t && t.pieceLinks) || []).forEach(function (p) { btns += '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(p.url) + '" target="_blank" rel="noopener">Open ' + esc(p.name) + '</a>'; });
  ((t && t.articles) || []).forEach(function (a) { if (a.url) btns += '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(a.url) + '" target="_blank" rel="noopener">Read the article</a>'; });
  btns += '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="https://docs.google.com/spreadsheets/d/1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw/edit" target="_blank" rel="noopener">Open the Weeks tab</a>';
  btns += '<button type="button" class="ap-walk" data-ask="What opens in the room this week, and what does the piece ask of a man?">Ask: What opens this week?<span class="ap-walk-arrow">\u2192</span></button>';
  var sessions = up.length ? '<ul class="list">' + up.map(function (s) { return '<li><span>' + esc(s.name) + ' <span class="muted small">' + esc(s.session) + (s.status !== 'booked' ? ' · ' + esc(s.status) : '') + (s.source === 'calendar' ? ' · calendar' : '') + '</span></span><span class="r">' + esc(s.when) + '</span></li>'; }).join('') + '</ul>' : '<p class="small muted">No sessions ahead on the calendar or in Calendly.</p>';
  el.innerHTML = (lines.length ? '<div class="tw-lines">' + lines.map(function (l) { return '<p>' + l + '</p>'; }).join('') + '</div>' : '') +
    '<div class="ap-card-actions">' + btns + '</div>' +
    '<div class="door"><h3>Coaching sessions ahead</h3>' + sessions + ((co.calendars && co.calendars.missing && co.calendars.missing.length) ? '<p class="small muted">A calendar the desk cannot read is on the lane.</p>' : '') + '</div>';
  Array.prototype.forEach.call(el.querySelectorAll('[data-ask]'), function (b) { b.addEventListener('click', function () { $('askIn').value = b.getAttribute('data-ask'); goTo('ask-sec'); glow('ask-sec'); ask(); }); });
}
/* build 23: The road to January — the week's one move, then each tool from what we put out to what became of it, where it landed, the plan and what it costs, and the list. Every sentence comes from the script's road model; nothing here is typed by hand. */
function rdLine(label, text) { return text ? '<p class="rd-line"><span class="rd-t">' + esc(label) + '</span><span class="rd-v">' + esc(text) + '</span></p>' : ''; }
function roadFind() { var rows = (feed && feed.week && feed.week.rows) || [], r = null; rows.forEach(function (x) { if (x.kind === 'The road to January') r = x; }); return r; }
function roadMove() { var r = roadFind(); return r && r.road ? r.road.move : null; }
function goButton(go, label) { if (!go) return ''; return '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(go) + '"' + (/^https?:/.test(go) ? ' target="_blank" rel="noopener"' : '') + '>' + esc(label || 'Open') + '</a>'; }
function askButton(q) { return q ? '<button type="button" class="ap-walk" data-ask="' + esc(q) + '">Ask: ' + esc(q) + '<span class="ap-walk-arrow">\u2192</span></button>' : ''; }
var ROOM_PANE = '<div class="ap-mail" data-room-pane hidden></div>';
function moveRow(mv) {
  var btn = '';
  if (mv.sent) btn = '';
  else if (mv.lever === 'referral') btn = '<button type="button" class="ap-walk" data-room-ask>See the email<span class="ap-walk-arrow">\u2192</span></button>';
  else if (mv.go) btn = '<a class="ap-btn ap-btn-primary ap-btn-sm" href="' + esc(mv.go) + '" target="_blank" rel="noopener">' + esc(mv.label || 'Open') + '</a>';
  else if (mv.ask) btn = '<button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-ask="' + esc(mv.ask) + '">' + esc(mv.label || 'Ask the desk') + '</button>';
  return '<div class="tw-row road move"><p class="k">The move this week</p><p class="f">' + esc(mv.title) + '</p><p class="m">' + esc(mv.reason) + '</p>' +
    (mv.sent ? '' : '<p class="small muted">It is on the lane as a card too. Done there closes it for the week.</p>') +
    (btn ? '<div class="ap-card-actions">' + btn + '</div>' : '') + ROOM_PANE + '</div>';
}
function linkPick(t) {
  var opts = t.links.map(function (a, i) { return '<option value="' + i + '" data-email="' + esc(a.email) + '" data-video="' + esc(a.video) + '" data-social="' + esc(a.social) + '">' + esc(a.title) + '</option>'; }).join('');
  var a0 = t.links[0];
  return '<div class="rd-links"><p class="small muted">Each link carries a note of where it was posted, so the next count can say where a man came from.</p>' +
    '<label class="rd-pick"><span>Article</span><select data-link-pick>' + opts + '</select></label>' +
    '<div class="ap-card-actions"><span class="small muted">Copy its link for</span>' +
    ['email|Email', 'video|Video', 'social|Social'].map(function (p) { var k = p.split('|'); return '<button type="button" class="ap-walk" data-link-for="' + k[0] + '" data-copy="' + esc(a0[k[0]]) + '">' + k[1] + '<span class="ap-walk-arrow">\u2192</span></button>'; }).join('') + '</div></div>';
}
function toolRow(t) {
  var quiet = t.state === 'not connected', tag = quiet ? 'Not connected' : (t.state === 'older' ? 'Older count' : '');
  var btns = goButton(t.go, t.goLabel) + (t.key === 'people' ? '<button type="button" class="ap-walk" data-room-ask>See the email<span class="ap-walk-arrow">\u2192</span></button>' : '') + askButton(t.ask);
  return '<div class="tw-row rd-tool' + (quiet ? ' quiet' : '') + '" data-tool="' + esc(t.key) + '"><p class="k">' + esc(t.tool) + (tag ? ' <span class="rd-state">' + esc(tag) + '</span>' : '') + '</p>' +
    '<div class="rd-lines">' + rdLine('Put out', t.put) + rdLine('Came', t.came) + rdLine('Became', t.became) + '</div>' +
    '<p class="m">' + esc(t.means) + '</p>' + (t.links && t.links.length ? linkPick(t) : '') +
    '<div class="ap-card-actions">' + btns + '</div>' + (t.key === 'people' ? ROOM_PANE : '') + '</div>';
}
function becameRow(b) {
  return '<div class="tw-row road"><p class="k">Where it landed</p><div class="rd-lines">' + rdLine('The list', b.list) + rdLine('A group', b.group) + rdLine('One-on-one', b.oneOnOne) + rdLine('A course', b.course) + '</div>' +
    '<p class="m">' + esc(b.means) + '</p><div class="ap-card-actions">' + goButton('#men-sec', 'See the men') + askButton('Where do men thin out between the list and a seat?') + '</div></div>';
}
function costRow(c, plan, r) {
  var pay = (r.pay || []).slice(0, 5).map(function (p) { return '<li><span>' + money(p.amount) + ' <span class="muted small">' + esc(p.from || p.what || '') + '</span>' + (p.link ? ' · <a href="' + esc(p.link) + '" target="_blank" rel="noopener">Stripe</a>' : '') + '</span><span class="r">' + esc(dt(p.received)) + '</span></li>'; }).join('');
  return '<div class="tw-row road"><p class="k">The plan, and what it costs</p>' + (plan ? '<p class="f">' + esc(plan) + '</p>' : '') +
    '<div class="rd-lines">' + rdLine('Spent', c.spend) + rdLine('Came in', c.came) + '</div><p class="m">' + esc(c.means) + '</p>' +
    (pay ? '<p class="ap-card-kind">Payments</p><ul class="list">' + pay + '</ul>' : '') +
    '<div class="ap-card-actions">' + goButton(r.go, r.label) + askButton(r.ask) + '</div></div>';
}
function renderRoad() {
  var el = $('road-body'); if (!el) return;
  if (!feed) { sum('road-sec', 'Reading the desk.'); el.innerHTML = ''; $('search-body').innerHTML = ''; $('moves-body').innerHTML = ''; return; }
  var w = feed.week, rows = (w && w.rows) || [];
  var road = null, list = null, srch = null;
  rows.forEach(function (r) { if (r.kind === 'The road to January') road = r; else if (r.kind === 'The list') list = r; else if (r.kind === 'The search') srch = r; });
  var m = road && road.road, parts = [];
  if (m) {
    m.summary.forEach(function (s) { parts.push(esc(s).replace(/^(Put out|Came|Became):/, '<strong>$1:</strong>')); });
    parts.push('<strong>The move this week:</strong> ' + esc(m.move.title) + '.');
  } else parts.push('The road is not on the desk yet. It appears on the next five-minute run.');
  sum('road-sec', parts.join(' '));
  $('road-sub').textContent = w && w.asOf ? 'As of ' + dt(w.asOf, true) : '';
  var h = '';
  if (m) h += moveRow(m.move) + '<div class="rd-tools">' + m.tools.map(toolRow).join('') + '</div>' + becameRow(m.became) + costRow(m.cost, m.plan, road);
  if (list) h += '<div class="tw-row wide"><p class="k">' + esc(list.kind) + '</p><p class="f">' + esc(list.fact) + '</p>' + (list.means ? '<p class="m">' + esc(list.means) + '</p>' : '') + segRows() + listLine() +
    '<div class="ap-card-actions">' + (list.ask ? '<button type="button" class="ap-walk" data-ask="' + esc(list.ask) + '">Ask: ' + esc(list.ask) + '<span class="ap-walk-arrow">\u2192</span></button>' : '') + '</div></div>';
  el.innerHTML = h ? '<div class="tw-rows">' + h + '</div>' : '<p class="tw-s muted">The road is not on the desk yet. It appears on the next five-minute run.</p>';
  Array.prototype.forEach.call(el.querySelectorAll('[data-ask]'), function (b) { b.addEventListener('click', function () { $('askIn').value = b.getAttribute('data-ask'); goTo('ask-sec'); glow('ask-sec'); ask(); }); });
  Array.prototype.forEach.call(el.querySelectorAll('[data-link-pick]'), function (sel) {
    sel.addEventListener('change', function () {
      var o = sel.options[sel.selectedIndex], row = sel.closest('.rd-links');
      Array.prototype.forEach.call(row.querySelectorAll('[data-link-for]'), function (b) { b.setAttribute('data-copy', o.getAttribute('data-' + b.getAttribute('data-link-for'))); });
    });
  });
  bindCopy(el);
  bindRoomAsk(el);
  renderPathway(srch);
}
/* build 23: once the ask has gone to the room, the move, the People row and the lane card say so at once, and keep saying so until the script's next count catches up. */
function applyAsked(iso) {
  var r = roadFind(); if (!r || !r.road) return;
  r.road.tools.forEach(function (t) { if (t.key === 'people') t.put = 'The room was asked for a name ' + dt(iso, true) + '.'; });
  r.road.move = { lever: 'referral', sent: true, key: r.road.move && r.road.move.key, title: 'The room has been asked for one name', reason: 'The ask went out ' + dt(iso, true) + '. It goes at most once a week, so the next move comes with the next count.' };
  feed.actions = (feed.actions || []).filter(function (a) { if (/^road:referral:/.test(a.key)) { closedAt[a.key] = iso; return false; } return true; });
}
function dayPlus(n) { var d = new Date(Date.now() + n * 864e5); return d.toISOString().slice(0, 10); }
function renderWeek() {
  var el = $('week');
  if (!feed) { sum('week-sec', 'Reading the desk.'); el.innerHTML = ''; return; }
  var inb = feed.inbound || {}, by = inb.byKind7 || {};
  var since = seenPrev || new Date(Date.now() - 7 * 864e5).toISOString();
  $('week-sub').textContent = inb.last7 != null ? inb.last7 + ' notices in the last seven days' : '';
  var kinds = Object.keys(by).sort(function (a, b) { return by[b] - by[a]; });
  var line = kinds.length ? 'The last seven days: ' + kinds.map(function (k) { return by[k] + ' ' + k.toLowerCase(); }).join(', ') + '.' + ((inb.storyPieces7 || 0) ? ' ' + inb.storyPieces7 + ' Your Story pieces saved.' : '') : 'Nothing came in during the last seven days.';
  var items = (inb.recent || []).filter(function (x) { return x.received && x.received > since; });
  ((feed.payments || {}).recent || []).forEach(function (p) { if (p.received && p.received > since) items.push({ received: p.received, kind: 'Payment', name: p.from || '', email: p.from || '', summary: money(p.amount) + (p.what ? ' · ' + p.what : ''), link: p.link, handling: 'captured' }); });
  items.sort(function (a, b) { return String(b.received).localeCompare(String(a.received)); });
  var look = items.filter(function (x) { return x.handling && !/^captured/.test(x.handling); }).length;
  sum('week-sec', 'Since ' + esc(dt(since, true)) + ': ' + (items.length ? '<strong>' + plural(items.length, 'thing', 'things') + '</strong> came in; ' + (look ? '<strong>' + plural(look, 'needs', 'need') + ' a look</strong> and the rest turned into cards or marks.' : 'all turned into cards or marks.') : 'nothing new. ' + esc(line)));
  var byMan = {}; var order = [];
  items.forEach(function (x) { var k = String(x.email || x.name || x.source || '').toLowerCase() || 'other'; if (!byMan[k]) { byMan[k] = { name: x.name || x.email || x.source || 'Other', items: [] }; order.push(k); } if (x.name && !/@/.test(byMan[k].name)) byMan[k].name = x.name; byMan[k].items.push(x); });
  var rows = order.map(function (k) {
    var g = byMan[k], em = /@/.test(k) ? k : '';
    return '<div class="man"><p class="k">' + esc(dt(g.items[0].received, true)) + '</p><p class="f">' + (em ? nameOf({ name: g.name === em ? '' : g.name, email: em }) : esc(g.name)) + '</p>' +
      '<p class="m">' + g.items.map(function (x) { return esc(x.kind) + (x.summary ? ' — ' + esc(x.summary) : '') + (x.handling && !/^captured/.test(x.handling) ? ' · <strong>left in the inbox for a look</strong>' : '') + (x.link ? ' · <a href="' + esc(x.link) + '" target="_blank" rel="noopener">Open</a>' : ''); }).join('<br>') + '</p>' +
      (em ? '<div class="ap-card-actions"><a class="ap-btn ap-btn-ghost ap-btn-sm" data-mail href="mailto:' + esc(em) + '">Email him</a></div>' : '') + '</div>';
  }).join('');
  el.innerHTML = '<div class="door" style="grid-column: 1 / -1"><h3>By man, newest first</h3><p class="small muted">' + esc(line) + '</p>' +
    (rows ? '<div class="men">' + rows + '</div>' : '<div class="muted small">Nothing new since then.</div>') +
    '<div class="ap-card-actions"><a class="ap-btn ap-btn-ghost ap-btn-sm" href="https://docs.google.com/spreadsheets/d/1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw/edit" target="_blank" rel="noopener">Open the full record</a><button type="button" class="ap-walk" data-ask="What came in since I was last here, and did any of it need a hand?">Ask: What came in?<span class="ap-walk-arrow">\u2192</span></button></div></div>';
  bindNames(el);
  Array.prototype.forEach.call(el.querySelectorAll('[data-ask]'), function (b) { b.addEventListener('click', function () { $('askIn').value = b.getAttribute('data-ask'); goTo('ask-sec'); glow('ask-sec'); ask(); }); });
}
/* build 20: The pathway — the search story's sentences as the summary line; the page men pass by, with its new words, as the first move; every other signal one line with Add this move (its owner and due open only when pressed); the moves taken as rows. */
var movesOpen = false;
function pathSlug(url) { return String(url || '').replace(/^https?:\/\/[^/]+/, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'home'; }
function renderPathway(srch) {
var el = $('search-body'), mvEl = $('moves-body'); if (!el || !mvEl) return;
var s = feed && feed.search, mv = feed && feed.moves;
if (!feed) { el.innerHTML = '<div class="empty"><strong>Reading the desk.</strong></div>'; mvEl.innerHTML = ''; return; }
var props = (mv && mv.proposed) || [], taken = (mv && mv.taken) || [];
var h = '';
var r = s && s.rec, hm = s && s.home, recMove = null, homeMove = null;
if (s) {
  h += '<div class="sum" style="margin-bottom: 12px"><p class="ap-card-kind">The search</p><div>' + (s.sentences || []).map(function (x) { return esc(x); }).join(' ') + (srch && srch.means ? ' ' + esc(srch.means) : '') + (hm && hm.sentence ? ' ' + esc(hm.sentence) : '') + (s.month ? ' <span class="muted small">' + esc(s.month) + (s.asOf ? ' \u00b7 numbers as of ' + esc(dt(s.asOf)) : '') + '</span>' : '') + '</div><div class="ap-card-actions"><a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(s.sheet || '#') + '" target="_blank" rel="noopener">Open the search sheet</a><button type="button" class="ap-walk" data-ask="Which page do men see most and never click, and what are the words on it?">Ask: Which page do men pass by?<span class="ap-walk-arrow">\u2192</span></button></div></div>';
  props.forEach(function (p) { if (r && p.kind === 'page' && p.key === 'page:' + pathSlug(r.page || r.link)) recMove = p; if (hm && p.kind === 'page' && p.key === 'page:' + pathSlug(hm.url)) homeMove = p; });
} else {
  h += '<div class="sum" style="margin-bottom: 12px"><div>The search story is not on the desk yet. It appears once the Front Desk script can read the Search profile sheet and the monthly refresh has put a month on it.</div></div>';
}
el.innerHTML = h;
bindDone(el); bindCopy(el);
Array.prototype.forEach.call(el.querySelectorAll('[data-ask]'), function (b) { b.addEventListener('click', function () { $('askIn').value = b.getAttribute('data-ask'); goTo('ask-sec'); glow('ask-sec'); ask(); }); });
// the moves
if (!mv) { mvEl.innerHTML = '<div class="empty"><strong>The pathway is not on the desk yet.</strong><span>It appears on the next five-minute run, once the script can read the Search profile and the facilitator pages.</span></div>'; return; }
var owners = mv.owners && mv.owners.length ? mv.owners : ['John', 'Jason'];
var opts = function (list, pick) { return list.map(function (x) { return '<option' + (x === pick ? ' selected' : '') + '>' + esc(x) + '</option>'; }).join(''); };
var onCards = {};
var rest = props.slice();
var m = '';
if (taken.length) {
  var done = taken.filter(function (t) { return t.status === 'done'; }).length, checked = taken.filter(function (t) { return t.status === 'checked'; }).length, dueWk = taken.filter(function (t) { return t.status === 'taken' && t.due && t.due <= dayPlus(7); }).length;
  m += '<div class="ap-sumrow"><p class="ap-sum"><strong>' + plural(taken.length, 'move', 'moves') + ' taken</strong>: ' + (taken.length - done - checked) + ' open' + (dueWk ? ' (' + dueWk + ' due this week)' : '') + ', ' + done + ' done, ' + checked + ' checked.</p><button type="button" class="ap-walk" data-moves-toggle>' + (movesOpen ? 'Close' : 'Open') + '<span class="ap-walk-arrow">\u2192</span></button></div>';
  m += '<div class="door" id="movesTaken"' + (movesOpen ? '' : ' hidden') + '><h3>Moves taken</h3><ul class="list">' + taken.map(function (t) {
    var st = t.status || 'taken';
    return '<li><span><span class="kind">' + esc(t.move) + '</span>' + esc(t.signal) + '</span><span class="r">' + esc(t.owner) + (t.due ? ' · due ' + esc(dt(t.due)) : '') + (t.check ? ' · check ' + esc(dt(t.check)) : '') + '</span>' +
      '<span class="s">' + esc(t.from) + (t.note ? ' · ' + esc(t.note) : '') + ' · ' + esc(st) + (t.link ? ' · <a href="' + esc(t.link) + '" target="_blank" rel="noopener">Open</a>' : '') + '</span>' +
      '<span class="r">' + (st === 'taken' ? '<button type="button" class="ap-btn ap-btn-ghost ap-btn-sm" data-move-set="' + esc(t.key) + '" data-status="done">Done</button> ' : '') + (st === 'done' ? '<button type="button" class="ap-btn ap-btn-ghost ap-btn-sm" data-move-set="' + esc(t.key) + '" data-status="checked">Checked</button> ' : '') + (st !== 'checked' ? '<button type="button" class="ap-btn ap-btn-ghost ap-btn-sm" data-move-set="' + esc(t.key) + '" data-status="dropped">Drop</button>' : '') + '</span></li>';
  }).join('') + '</ul></div>';
}
if (rest.length) {
  m += '<div class="door"><h3>' + plural(rest.length, 'signal waits', 'signals wait') + ' for a move</h3>' + rest.map(function (p) {
    return '<div class="mline" data-move-card="' + esc(p.key) + '"><span><span class="kind">' + esc(p.kind === 'theme' ? 'The room carried' : p.kind === 'page' ? 'Shown, not clicked' : 'Men type this') + '</span>' + esc(p.signal) + '<span class="from">' + esc(p.from) + (p.link ? ' · <a href="' + esc(p.link) + '" target="_blank" rel="noopener">Open</a>' : '') + '</span></span>' +
      '<button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-move-open="' + esc(p.key) + '">Add this move: ' + esc(p.move) + '</button></div>' +
      '<div class="mv-form" data-move-form="' + esc(p.key) + '" hidden><div class="mv-row"><label>Move <select data-f="move">' + opts(mv.list || [], p.move) + '</select></label><label>Owner <select data-f="owner">' + opts(owners, p.owner) + '</select></label><label>Due <input type="date" data-f="due" value="' + esc(mv.dueDay || '') + '"></label></div>' +
      '<div class="ap-card-actions"><button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-move-add="' + esc(p.key) + '">Add it</button><button type="button" class="ap-btn ap-btn-ghost ap-btn-sm" data-move-close="' + esc(p.key) + '">Not now</button><span class="ap-card-state">The check comes ' + esc(mv.checkDay ? dt(mv.checkDay) : 'a month after the due date') + '.</span></div></div>';
  }).join('') + '</div>';
} else if (!Object.keys(onCards).length) {
  m += '<div class="empty"><strong>Every signal has its move.</strong><span>New signals come from the Search profile and from each week\u2019s facilitator page.</span></div>';
}
m += '<p class="small muted">The record behind this is the <a href="' + esc(mv.sheet || '#') + '" target="_blank" rel="noopener">Moves tab</a> on the Front Desk sheet. A search-article move also writes the phrase\u2019s row on the Search profile, so the search task picks it up.</p>';
mvEl.innerHTML = m;
var mt = mvEl.querySelector('[data-moves-toggle]'); if (mt) mt.addEventListener('click', function () { movesOpen = !movesOpen; var d = $('movesTaken'); if (d) d.hidden = !movesOpen; mt.textContent = movesOpen ? 'Close' : 'Open'; });
var st0 = stored(); if (!st0) return;
Array.prototype.forEach.call(mvEl.querySelectorAll('[data-move-open]'), function (b) { b.addEventListener('click', function () { var f = mvEl.querySelector('[data-move-form="' + b.getAttribute('data-move-open') + '"]'); if (f) f.hidden = !f.hidden; }); });
Array.prototype.forEach.call(mvEl.querySelectorAll('[data-move-close]'), function (b) { b.addEventListener('click', function () { var f = mvEl.querySelector('[data-move-form="' + b.getAttribute('data-move-close') + '"]'); if (f) f.hidden = true; }); });
Array.prototype.forEach.call(mvEl.querySelectorAll('[data-move-add]'), function (b) {
  b.addEventListener('click', function () {
    var key = b.getAttribute('data-move-add'), form = mvEl.querySelector('[data-move-form="' + key + '"]'), p = null;
    rest.forEach(function (x) { if (x.key === key) p = x; });
    if (!p || !form) return;
    addMove(p, b, form);
  });
});
Array.prototype.forEach.call(mvEl.querySelectorAll('[data-move-set]'), function (b) {
  b.addEventListener('click', function () {
    var key = b.getAttribute('data-move-set'), st = b.getAttribute('data-status'); b.disabled = true;
    call({ action: 'move_set', key: st0.key, moveKey: key, status: st }).then(function () {
      mv.taken = (mv.taken || []).map(function (t) { if (t.key === key) t.status = st; return t; }).filter(function (t) { return t.status !== 'dropped'; });
      renderAll(); flash(st === 'dropped' ? 'Dropped. It is off the list.' : 'Marked ' + st + '.');
    }, function (e) { b.disabled = false; notice(esc(words(e))); });
  });
});
}

/* build 21: closed by default. A folding section is its summary line until pressed; the browser keeps which ones were left open (fd-open). */
var FOLD_IDS = ['tw-sec', 'men-sec', 'road-sec', 'week-sec', 'f-week-sec', 'f-road-sec', 'f-room-sec', 'f-notes-sec'];
var ALIAS = { 'search-sec': 'road-sec', 'ac-sec': 'road-sec', 'moves-sec': 'moves-sec', 'bwm-sec': 'men-sec' };
var foldState = {};
try { foldState = JSON.parse(localStorage.getItem('fd-open') || '{}') || {}; } catch (e) { foldState = {}; }
function isOpen(id) { return foldState[id] === true; }
function setFold(id, open, quiet) {
  foldState[id] = !!open;
  try { localStorage.setItem('fd-open', JSON.stringify(foldState)); } catch (e) {}
  paintFold(id);
  if (!quiet && open) glow(id);
}
function paintFold(id) {
  var sec = $(id); if (!sec) return;
  var body = sec.querySelector('.ap-body'), btn = sec.querySelector('[data-fold="' + id + '"]'), open = isOpen(id);
  if (body) body.hidden = !open;
  sec.classList.toggle('is-open', open);
  if (btn) { btn.textContent = open ? 'Close' : 'Open'; btn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
}
function renderFolds() { FOLD_IDS.forEach(paintFold); }
function sum(id, html) { var el = $(id + '-sum'); if (el) el.innerHTML = html; }
host.addEventListener('click', function (ev) {
  var b = ev.target && ev.target.closest ? ev.target.closest('[data-fold]') : null;
  if (!b || !host.contains(b)) return;
  var id = b.getAttribute('data-fold'); setFold(id, !isOpen(id), true);
});
/* a link into a closed section opens it first; a link to a card behind "Show the rest" shows the rest first */
function reveal(id) {
  var el = document.getElementById(id); if (!el) return;
  var sec = el.closest ? el.closest('.ap-fold-sec') : null;
  if (sec && sec.id && !isOpen(sec.id)) setFold(sec.id, true, true);
  var more = el.closest ? el.closest('#laneMore, #fLaneMore') : null;
  if (more && more.hidden) { more.hidden = false; var row = $(more.id === 'laneMore' ? 'laneMoreRow' : 'fLaneMoreRow'); if (row) row.hidden = true; }
}
/* build 16 */
function glow(id) { var el = document.getElementById(id); if (!el) return; el.classList.remove('ap-glow'); void el.offsetWidth; el.classList.add('ap-glow'); setTimeout(function () { el.classList.remove('ap-glow'); }, 2400); }
function askKind(key) { var k = String(key || ''); return /^(agr|bwm):/.test(k) ? 'agreement' : /^askans:/.test(k) ? 'answers' : ''; }
function nameBtn(email) { return '<button type="button" class="ap-btn ap-btn-ghost ap-btn-sm" data-name-add="' + esc(email) + '">Add his name</button>'; }
function nameOf(m) { return m && m.name ? esc(m.name) : '<span class="muted">(no name yet)</span> ' + nameBtn(m && m.email); }
function setName(email, name) {
  var e = String(email || '').toLowerCase();
  ((feed && feed.roster) || []).forEach(function (r) { if (String(r.email).toLowerCase() === e) r.name = name; });
  ((feed && feed.room && feed.room.men) || []).forEach(function (r) { if (String(r.email).toLowerCase() === e) r.name = name; });
  ((feed && feed.actions) || []).forEach(function (a) { if (keyEmail(a) === e && (!a.for || a.for === e)) a.for = name; });
  ((fac && fac.men) || []).forEach(function (r) { if (String(r.email).toLowerCase() === e) r.name = name; });
  ((fac && fac.actions) || []).forEach(function (a) { if (keyEmail(a) === e && (!a.for || a.for === e)) a.for = name; });
}
function bindNames(root) {
  var s = stored(); if (!root || !s) return;
  Array.prototype.forEach.call(root.querySelectorAll('[data-name-add]'), function (b) {
    b.addEventListener('click', function () {
      var em = b.getAttribute('data-name-add');
      var f = document.createElement('span'); f.className = 'nm-form';
      f.innerHTML = '<input type="text" maxlength="80" placeholder="His name" aria-label="His name"><button type="button" class="ap-btn ap-btn-primary ap-btn-sm">Save</button><button type="button" class="ap-btn ap-btn-ghost ap-btn-sm">Cancel</button>';
      b.replaceWith(f);
      var inp = f.querySelector('input'), save = f.querySelectorAll('button')[0], cancel = f.querySelectorAll('button')[1];
      inp.focus();
      var go = function () {
        var name = String(inp.value || '').replace(/\s+/g, ' ').trim();
        if (name.length < 2) { inp.focus(); return; }
        save.disabled = true; save.textContent = 'Saving…';
        call({ action: 'name', key: s.key, email: em, name: name }).then(function (r) { setName(r.email, r.name); rerender(); say(root, 'Name saved: ' + r.name + '. The sheet has it too.'); },
          function (e) { save.disabled = false; save.textContent = 'Save'; notice(esc(words(e))); });
      };
      save.addEventListener('click', go);
      inp.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); go(); } if (ev.key === 'Escape') rerender(); });
      cancel.addEventListener('click', function () { rerender(); });
    });
  });
}
var mailOpen = {};
function bindMail(root) {
  var s = stored(); if (!root || !s) return;
  Array.prototype.forEach.call(root.querySelectorAll('[data-mail-see]'), function (b) {
    b.addEventListener('click', function () {
      var key = b.getAttribute('data-mail-see'), kind = b.getAttribute('data-kind'), em = b.getAttribute('data-email');
      var paneKey = /^(agreement|answers):/.test(key) ? kind : key;
      var pane = root.querySelector('[data-mail-pane="' + paneKey.replace(/"/g, '') + '"]');
      if (!pane) return;
      if (mailOpen[key]) { mailOpen[key] = false; pane.hidden = true; return; }
      mailOpen[key] = true; pane.hidden = false;
      pane.innerHTML = '<p class="ap-card-state">Writing the email…</p>';
      call({ action: 'ask_text', key: s.key, kind: kind, email: em }).then(function (r) {
        pane.innerHTML = '<div class="ap-mail-h">To ' + esc(r.email) + (r.cc ? ' · cc ' + esc(r.cc) : '') + ' · from john@, signed John</div><div class="ap-mail-h">Subject: ' + esc(r.subject) + '</div><pre>' + esc(r.body) + '</pre>' +
          (r.asked ? '<p class="ap-card-state">Already asked by email ' + esc(dt(r.asked, true)) + '.</p>' : '') +
          '<div class="ap-card-actions"><button type="button" class="ap-btn ap-btn-primary" data-mail-send>' + (r.asked ? 'Send it again' : 'Send it') + '</button><button type="button" class="ap-btn ap-btn-ghost" data-mail-close>Not now</button></div>';
        pane.querySelector('[data-mail-close]').addEventListener('click', function () { mailOpen[key] = false; pane.hidden = true; });
        var sb = pane.querySelector('[data-mail-send]');
        sb.addEventListener('click', function () {
          sb.disabled = true; sb.textContent = 'Sending…';
          call({ action: 'ask_send', key: s.key, kind: kind, email: em }).then(function (q) {
            var e2 = String(q.email).toLowerCase();
            ((feed && feed.actions) || []).forEach(function (a) { if (askKind(a.key) === q.kind && keyEmail(a) === e2) a.asked = q.asked; });
            ((feed && feed.roster) || []).forEach(function (r) { if (String(r.email).toLowerCase() === e2) r[q.kind === 'agreement' ? 'askedAgreement' : 'askedAnswers'] = q.asked; });
            ((fac && fac.actions) || []).forEach(function (a) { if (askKind(a.key) === q.kind && keyEmail(a) === e2) a.asked = q.asked; });
            mailOpen[key] = false; rerender(); say(root, 'Sent to ' + (q.name || q.email) + ' at ' + dt(q.asked, true) + (r.cc ? ', ' + r.cc + ' in cc' : '') + '. It is on the Sends tab.');
          }, function (e) { sb.disabled = false; sb.textContent = 'Send it'; pane.insertAdjacentHTML('beforeend', '<p class="ap-card-state">' + esc(words(e)) + '</p>'); });
        });
      }, function (e) { pane.innerHTML = '<p class="ap-card-state">' + esc(words(e)) + '</p>'; mailOpen[key] = false; });
    });
  });
}
function copyText(btn, text) {
  var done = function () { var was = btn.textContent; btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = was; }, 1600); };
  if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); }); } else { fallbackCopy(text); done(); }
}
function fallbackCopy(text) { try { var t = document.createElement('textarea'); t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.left = '-9999px'; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); } catch (e) {} }
function wordsFor(link) {
  var p = String(link || '').replace(/^https?:\/\/[^\/]+/i, '').replace(/[?#].*$/, '') || '/';
  var w = ((feed && feed.words) || []).filter(function (x) { return x.path === p && (x.newTitle || x.newDesc); });
  return w.length ? w[0] : null;
}
function wordsHtml(w, edit) {
  var cell = function (cls, head, title, desc, copy) {
    return '<div class="w ' + cls + '"><h4>' + esc(head) + '</h4>' +
      '<div><div class="wl"><span>Title · ' + title.length + '</span>' + (copy ? '<button type="button" class="ap-btn ap-btn-ghost ap-btn-sm" data-copy="' + esc(title) + '">Copy</button>' : '') + '</div><p>' + esc(title) + '</p></div>' +
      '<div><div class="wl"><span>Description · ' + desc.length + '</span>' + (copy ? '<button type="button" class="ap-btn ap-btn-ghost ap-btn-sm" data-copy="' + esc(desc) + '">Copy</button>' : '') + '</div><p>' + esc(desc) + '</p></div></div>';
  };
  var head = w.installed ? 'New words · ' + w.installed : w.approved ? 'New words · ' + w.approved : 'Suggested words · not yet approved';
  var h = '<div class="words">' + cell('old', 'Now on the page', w.oldTitle, w.oldDesc, false) + cell('new', head, w.newTitle, w.newDesc, true) + '</div>';
  if (w.note && !w.approved) h += '<p class="ap-card-state">' + esc(w.note) + '</p>';
  if (!w.installed) {
    h += '<p class="ap-steps">' + (edit ? 'In the editor: the page name at the top → Edit Settings → SEO → paste both → Save &amp; Close → OK.' : 'Open the page\u2019s settings in LearnWorlds, then SEO: paste both and save.') + '</p>' +
      '<div class="ap-card-actions">' + (edit ? '<a class="ap-btn ap-btn-primary" href="' + esc(edit) + '" target="_blank" rel="noopener">Open the page\u2019s settings</a>' : '') +
      (w.approved ? '' : '<button type="button" class="ap-btn ap-btn-ghost" data-words-approve="' + esc(w.address) + '">Approve these words</button>') +
      '<button type="button" class="ap-btn ap-btn-ghost" data-words-installed="' + esc(w.address) + '">I installed them</button>' +
      '<a class="ap-btn ap-btn-ghost" href="' + esc(w.address) + '" target="_blank" rel="noopener">See the page</a></div>';
  }
  return h;
}
function bindCopy(root) {
  Array.prototype.forEach.call(root.querySelectorAll('[data-copy]'), function (b) { b.addEventListener('click', function () { copyText(b, b.getAttribute('data-copy')); }); });
  var s = stored(); if (!s) return;
  Array.prototype.forEach.call(root.querySelectorAll('[data-words-approve],[data-words-installed]'), function (b) {
    b.addEventListener('click', function () {
      var addr = b.getAttribute('data-words-approve') || b.getAttribute('data-words-installed'), what = b.hasAttribute('data-words-approve') ? 'approve' : 'installed';
      b.disabled = true; b.textContent = what === 'approve' ? 'Approving…' : 'Closing…';
      call({ action: 'words_set', key: s.key, address: addr, what: what }).then(function (r) {
        ((feed && feed.words) || []).forEach(function (x) { if (x.address === r.address) { if (what === 'approve') x.approved = r.value; else x.installed = r.value; } });
        if (what === 'installed' && r.closed) { closedAt[r.closed] = new Date().toISOString(); feed.actions = (feed.actions || []).filter(function (a) { return a.key !== r.closed; }); }
        renderAll(); flash(what === 'approve' ? 'Approved. Paste them into the page\u2019s settings when you are ready.' : 'Installed — the card is off the lane. The next search refresh will show whether men click.'); load(true);
      }, function (e) { b.disabled = false; b.textContent = what === 'approve' ? 'Approve these words' : 'I installed them'; notice(esc(words(e))); });
    });
  });
}
function editOf(a) { return (a && a.edit) || (a && a.link && /\/author\//.test(a.link) ? a.link : ''); }

/* build 18: the room's desk — the five pieces for a person whose People row names a room (Jason first). An admin with a room gets the practice desk under it.
   build 24: the room desk after Jason's walk (Oct 23, 2026): How this desk works, the status line as the headline, Do this without the call question, This week with the wider voice and the community's voice, The road ahead, The men as one roster with the story board in place. */
function setFacStatus(kind, text) { $('fDot').className = 'dot ' + kind; $('fStatusText').textContent = text; }
function fnotice(html) { $('fNotices').innerHTML = html ? '<div class="note">' + html + '</div>' : ''; }
function fflash(m) { fnotice(esc(m)); if (fflashTimer) clearTimeout(fflashTimer); fflashTimer = setTimeout(function () { fnotice(''); }, 9000); }
var fflashTimer = null;
function facSections(on) { ['f-how-sec', 'f-ask-sec', 'f-lane-sec', 'f-week-sec', 'f-road-sec', 'f-room-sec', 'f-notes-sec', 'fStatus'].forEach(function (id) { var el = $(id); if (el) el.hidden = !on; }); }
function rerender() { if (roomMode) renderFac(); if (who && who.role === 'admin' && (!roomMode || adminOpen)) renderAll(); }
function facMan(email) { var m = (fac && fac.men) || []; for (var i = 0; i < m.length; i++) { if (String(m[i].email).toLowerCase() === email) return m[i]; } return null; }
function facLane() { return ((fac && fac.actions) || []).slice().sort(function (a, b) { return new Date(a.firstSeen || 0) - new Date(b.firstSeen || 0); }); }
function renderFac() {
  if (!roomMode) return;
  renderFacHow(); renderFacGreeting(); renderFacAsk(); renderFacLane(); renderFacWeek(); renderFacRoad(); renderFacRoom(); renderFacNotes(); renderFolds();
}
/* The words a man reads on the desk never carry a weekday as a word; the date and the hour come from the Rooms tab (build 22/25). */
function roomWhen(t) { return t ? esc(t.dayText) + (t.time ? ', ' + esc(t.time).replace(' ', ' ') : '') : ''; }
function weekLine(t) { return t ? 'Week ' + esc(t.week) + ' is ' + roomWhen(t) + (t.title ? ' — ' + esc(weekTitle(t.title)) : '') + '.' : ''; }
/* How this desk works: five stops in the reader's-day order, each a link into the desk. Full the first time; one line after. */
var HOW = [
  ['The room speaks', 'The night’s notes become signals: what the room carried, who needs you, what was promised.', '#f-voices', 'From our community'],
  ['Read with the Word', 'The voices we follow, read against Scripture; one in ten kept, the ones that support the work we are doing now and in the future.', '/your-growth', 'Your Growth'],
  ['Chosen for the week', 'One piece for the week your room is in, with how it fits the reading.', '#f-week-sec', 'This week'],
  ['You bring it', 'Three to five minutes of room time, the two or three points you would say; the men write.', '#fBoard', 'The story board'],
  ['The road is built', 'What you bring and what the men write shape the next week; the record keeps all of it, so nothing is lost between rooms.', '#f-road-sec', 'The road ahead']
];
var howOpen = null;
try { howOpen = localStorage.getItem('fd-how') !== 'closed'; } catch (e) { howOpen = true; }
function renderFacHow() {
  var el = $('fHow'); if (!el) return;
  var open = howOpen !== false;
  var stops = HOW.map(function (s) { return '<li><span class="st">' + esc(s[0]) + '</span><span class="sl">' + esc(s[1]) + ' <a href="' + esc(s[2]) + '"' + (/^https?:|^\//.test(s[2]) ? '' : '') + '>' + esc(s[3]) + '</a></span></li>'; }).join('');
  var line = HOW.map(function (s) { return '<a href="' + esc(s[2]) + '">' + esc(s[0]) + '</a>'; }).join('<span class="hsep"> · </span>');
  el.innerHTML = '<div class="how-head"><p class="ap-kind">How this desk works</p><button type="button" class="how-btn" id="fHowBtn" aria-expanded="' + (open ? 'true' : 'false') + '">' + (open ? 'Close ▴' : 'Open ▾') + '</button></div>' +
    (open ? '<ol class="hstops">' + stops + '</ol>' : '<p class="how-line">' + line + '</p>');
  $('fHowBtn').addEventListener('click', function () { howOpen = !open; try { localStorage.setItem('fd-how', howOpen ? 'open' : 'closed'); } catch (e) {} renderFacHow(); });
}
/* The band: the greeting, then the room's status line as the headline — every count a link into the page — then the one bronze button. */
function renderFacGreeting() {
  var line = $('apLine'), btn = $('apPrimary'), note = $('apPrimaryNote');
  $('gDesk').hidden = false;
  line.classList.add('ap-status');
  if (!fac) { line.innerHTML = esc('Reading your room.'); btn.textContent = 'See this week’s room'; btn.href = '#f-week-sec'; note.textContent = 'The week, the men, and the notes from the last room.'; return; }
  if (fac.missing) { line.innerHTML = esc('Your People row names a room the sheet does not have yet: ' + fac.room + '. Our team adds it on the Rooms tab.'); btn.textContent = 'Ask the desk'; btn.href = '#f-ask-sec'; note.textContent = ''; return; }
  var t = fac.this, c = fac.counts || {}, lane = facLane(), men = (fac.men || []).length, sigs = fac.signals || [], board = fac.board || [];
  var lam = null; board.forEach(function (p) { if (!lam && p.state === 'open') lam = p; });
  var head = esc(fac.room) + '. ' + (t ? weekLine(t) : (fac.last ? 'The last room was Week ' + esc(fac.last.week) + ', ' + esc(fac.last.dayText) + '.' : ''));
  var parts = [];
  parts.push('<a href="#f-room-sec"><b>' + men + '</b> in the room</a>');
  parts.push('<a href="#f-room-sec"><b>' + (c.signed || 0) + ' of ' + men + '</b> signed the agreement</a>');
  if (lam) parts.push('<a href="#fBoard"><b>' + lam.count + ' of ' + lam.of + '</b> wrote ' + esc(shortPiece(lam.name)) + '</a>');
  if (sigs.length) parts.push('<a href="#f-voices"><b>' + sigs.length + '</b> ' + (sigs.length === 1 ? 'signal' : 'signals') + ' from Week ' + esc(sigs[0].week) + '</a>');
  parts.push('<a href="#f-lane-sec"><b>' + lane.length + '</b> ' + (lane.length === 1 ? 'thing needs' : 'things need') + ' you</a>');
  parts.push('<a href="#fBoard">See the story board</a>');
  line.innerHTML = '<span class="ap-s">' + head + '</span><br>' + parts.join(' <span class="sep">·</span> ');
  var f = lane[0];
  if (f) {
    var longDo = String(f.do || '').length > 56 || /^Room:/.test(f.do || '');
    btn.textContent = longDo ? 'See what needs you' : f.do; btn.href = '#fapc0';
    btn.removeAttribute('target'); btn.removeAttribute('rel');
    note.textContent = (lane.length === 1 ? 'One thing' : lane.length + ' things') + (f.for && !longDo ? ' · ' + f.for : '') + (f.firstSeen ? ', the oldest waiting since ' + dt(f.firstSeen, true) : '') + '.';
  } else {
    btn.textContent = t ? 'See this week’s room' : 'See the room'; btn.href = t ? '#f-week-sec' : '#f-room-sec';
    btn.removeAttribute('target'); btn.removeAttribute('rel');
    note.textContent = fac.since && fac.since.length ? fac.since[0] : (t && t.piece ? 'This week introduces ' + t.piece + '.' : 'The men, and the notes from the last room.');
  }
}
function shortPiece(n) { return /lament/i.test(n) ? 'the lament' : n; }
var FTRIES = ['Who in the room still needs to sign the agreement?', 'What did the room carry last week?', 'What opens in the room this week, and what fits it?', 'Who did I say I would follow up with?'];
function renderFacAsk() {
  $('fAskTries').innerHTML = FTRIES.map(function (q) { return '<button type="button">' + esc(q) + '</button>'; }).join('');
  Array.prototype.forEach.call($('fAskTries').querySelectorAll('button'), function (b) { b.addEventListener('click', function () { $('fAskIn').value = b.textContent; ask('f'); }); });
  var st = who && who.claude && who.claude.state;
  if (who && who.canAsk === false) { askMsg({ error: 'no_claude_key' }, 'f'); } else if (st === 'refused') { askMsg({ error: 'key_refused' }, 'f'); } else if (st === 'model') { askMsg({ error: 'model_unknown' }, 'f'); } else { $('fAskNote').hidden = true; }
}
/* "Bring it": two or three points a facilitator would say, three to five minutes of room time. The task writes them so from Oct 23; older prose is split by sentence here. */
function bringPoints(move) {
  var s = String(move || '').replace(/^\s*Room:\s*/i, '').trim();
  var bullets = s.split(/\n+/).map(function (x) { return x.replace(/^[\-•*]\s*/, '').trim(); }).filter(Boolean);
  if (bullets.length >= 2) return bullets.slice(0, 3);
  var parts = [], buf = '', q = 0;
  for (var i = 0; i < s.length; i++) {
    var ch = s[i], prev = i ? s[i - 1] : '', next = i + 1 < s.length ? s[i + 1] : ''; buf += ch;
    if (ch === '“') q++; else if (ch === '”') q = Math.max(0, q - 1); else if (ch === '"') q = q ? 0 : 1;
    var closes = (ch === '”' || (ch === '"' && !q)) && /[.?!]/.test(prev);
    if ((!q && /[.?!]/.test(ch) && (!next || /\s/.test(next))) || (closes && (!next || /\s/.test(next)))) { parts.push(buf.trim()); buf = ''; }
  }
  if (buf.trim()) parts.push(buf.trim());
  return parts.filter(function (p) { return p && !/^for the course:/i.test(p); }).slice(0, 3);
}
function pointsHtml(points) { return points.length ? '<p class="ap-card-body">Bring it — three to five minutes:</p><ul class="points">' + points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : ''; }
function claimOf(a) { var b = String(a.because || ''); var i = b.indexOf(' Beside it:'); if (i > 0) return b.slice(0, i).trim(); var m = /^[\s\S]*?[.?!](?=\s|$)/.exec(b); return (m ? m[0] : b).trim(); }
function renderFacLane() {
  var lane = $('fLane'); if (!lane) return;
  if (!fac) { lane.innerHTML = '<div class="empty"><strong>Reading your room.</strong><span>Anything that needs your hand shows up here with the reason.</span></div>'; $('fLaneMore').innerHTML = ''; $('fLaneMoreRow').hidden = true; return; }
  var list = facLane(), t = fac.this;
  $('fLaneH').textContent = list.length ? plural(list.length, 'thing to do', 'things to do') : 'Nothing waiting on you';
  $('fLaneSub').textContent = list.length ? 'Oldest first. Done takes a card off at once.' : '';
  if (!list.length) { lane.innerHTML = '<div class="empty"><strong>Clear.</strong><span>When a man in your room needs something, the notes name a follow-up or a promise, or you bring a piece from Your Growth, the card appears here.</span></div>'; $('fLaneMore').innerHTML = ''; $('fLaneMoreRow').hidden = true; return; }
  var cards = list.map(function (a, i) {
    var old = a.firstSeen && (Date.now() - new Date(a.firstSeen)) > 48 * 36e5;
    var bring = /^research:bring:/.test(a.key || '');
    if (bring) {
      return '<article class="ap-card act is-next" id="fapc' + i + '">' +
        '<p class="ap-card-kind">From Your Growth · for your room' + (t ? ', ' + esc(t.dayText) : '') + '</p>' +
        '<p class="ap-card-title">' + esc(claimOf(a)) + '</p>' + pointsHtml(bringPoints(a.do)) +
        '<p class="ap-card-state">First seen ' + esc(dt(a.firstSeen, true)) + (old ? ' <span class="wait">waiting ' + esc(ago(a.firstSeen)) + '</span>' : '') + '</p>' +
        '<div class="ap-card-actions"><button type="button" class="ap-btn ap-btn-ghost" data-done="' + esc(a.key) + '">Done</button>' + (a.link ? '<a class="ap-btn ap-btn-ghost" href="' + esc(a.link) + '" target="_blank" rel="noopener">Open it</a>' : '') + '<a class="ap-btn ap-btn-ghost" href="/your-growth">See it on Your Growth</a></div></article>';
    }
    return '<article class="ap-card act" id="fapc' + i + '">' +
      '<p class="ap-card-kind">' + esc(kindLabel(a)) + '</p>' +
      '<p class="ap-card-title">' + esc(a.do) + '</p>' +
      (a.for ? '<p class="ap-card-body">' + esc(a.for) + '</p>' : '') +
      (a.because ? '<p class="ap-card-state">' + esc(a.because) + '</p>' : '') +
      '<p class="ap-card-state">First seen ' + esc(dt(a.firstSeen, true)) + (old ? ' <span class="wait">waiting ' + esc(ago(a.firstSeen)) + '</span>' : '') + '</p>' +
      cardActions(a) +
      '</article>';
  });
  laneSplit(lane, $('fLaneMore'), $('fLaneMoreRow'), $('fLaneMoreBtn'), cards);
  bindLane(lane); bindLane($('fLaneMore'));
}
function weekTitle(s) { return String(s || '').replace(/^Week \d+\s*[—–-]\s*/, ''); }
function kindLabel(a) {
  switch (kindOf(a)) {
    case 'fu': return 'From the notes';
    case 'prom': return 'You promised';
    case 'research': return 'From Your Growth';
    case 'move': case 'check': return 'Your move';
    default: return 'A man in your room';
  }
}
/* The wider voice: the Your Growth piece served for the room's week, with how it fits and the points to bring. */
function voiceHtml(v) {
  if (!v) return '<p class="part">The wider voice · from Your Growth</p><p class="tw-s muted">No piece is served for this week yet. The one that fits lands here when it is released.</p>';
  return '<p class="part">The wider voice · from Your Growth</p><article class="ap-card voice"><p class="ap-card-kind">' + esc(v.voice) + (v.kind ? ' · ' + esc(v.kind) : '') + (v.cost ? ' · ' + esc(v.cost) : '') + '</p>' +
    '<p class="ap-card-title">' + esc(v.claim) + '</p>' +
    (v.fits ? '<p class="fit"><b>How it fits' + (fac.this ? ' Week ' + esc(fac.this.week) : '') + ':</b> ' + esc(v.fits) + (/[.?!]$/.test(v.fits) ? '' : '.') + (v.refs && v.refs.length ? ' Read beside ' + esc(v.refs.join(' and ')) + '.' : '') + '</p>' : '') +
    pointsHtml(v.points || []) +
    '<div class="ap-card-actions">' + (v.link ? '<a class="ap-btn ap-btn-primary ap-btn-sm" href="' + esc(v.link) + '" target="_blank" rel="noopener">Open it</a>' : '') + '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="/your-growth">See it on Your Growth</a></div></article>';
}
function byName(e) { var n = String(e || '').split('@')[0]; var p = (who && who.people || []).filter(function (x) { return String(x.email).toLowerCase() === String(e).toLowerCase(); })[0]; if (p && p.name) return first(p.name); return n ? n.charAt(0).toUpperCase() + n.slice(1) : ''; }
function roomShort(r) { var s = String(r || ''); var i = s.indexOf(' — '); return i > 0 ? s.slice(i + 3) : s; }
/* On this week's topic, across the practice: the constructs the week teaches, every signal from any room coded to them, and the week's other pieces. */
function topicHtml(tp) {
  var h = '<p class="part" id="f-topic">On this week’s topic, across the practice</p>';
  if (!tp || (!(tp.constructs || []).length && !(tp.more || []).length)) return h + '<p class="tw-s muted">Nothing coded to this week’s constructs yet. As rooms are read and their signals coded, what other rooms carried on this topic shows here.</p>';
  (tp.constructs || []).forEach(function (c) {
    h += '<div class="sig topic"><p class="t">' + esc(c.name) + '</p>' + (c.tension ? '<p class="w">' + esc(c.tension) + '</p>' : '');
    if ((c.signals || []).length) h += (c.signals || []).map(function (sg) { return '<p class="sp"><b>' + esc(roomShort(sg.cohort)) + ', Week ' + esc(sg.week) + ':</b> ' + esc(sg.text) + '</p>'; }).join('');
    else h += '<p class="sp">No room has carried this one yet.</p>';
    h += '</div>';
  });
  if ((tp.more || []).length) h += '<div class="tw-lines"><p><b>Also served for this week:</b> ' + tp.more.map(function (e) { return '<a href="' + esc(e.link) + '" target="_blank" rel="noopener">' + esc(e.claim.length > 90 ? e.claim.slice(0, 87).replace(/\s+\S*$/, '') + '…' : e.claim) + '</a> (' + esc(e.voice) + ')'; }).join(' · ') + '</p></div>';
  return h;
}
/* Our community's voice: the room's signals with the move each one has, from fac.sigMoves (build 24: an add shows at once). */
function facSignalsHtml(sigs) {
  if (!sigs.length) return '<p class="part" id="f-voices">In the room</p><p class="tw-s muted">No signals yet. They come from the morning-after notes of each room.</p>';
  var sm = (fac && fac.sigMoves) || { taken: [], proposed: [] };
  var h = '<p class="part" id="f-voices">In the room · what this room carried in Week ' + esc(sigs[0].week) + '</p>' + sigs.map(function (t) {
    var tk = null, pp = null; (sm.taken || []).forEach(function (x) { if (x.key === t.key) tk = x; }); (sm.proposed || []).forEach(function (x) { if (x.key === t.key) pp = x; });
    var move = tk ? '<p class="mv-l"><b>Move added</b> · ' + esc(tk.move) + ' · ' + esc(tk.owner) + (tk.due ? ' · due ' + esc(dt(tk.due)) : '') + (tk.by ? ' · added by ' + esc(byName(tk.by)) : '') + '</p>' :
      (pp ? '<div class="ap-card-actions"><button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-move-line="' + esc(pp.key) + '">Add this move: ' + esc(pp.move) + '</button></div>' : '');
    var meta = 'Week ' + esc(t.week) + ' · ' + esc(roomShort(t.room || fac.room)) + (t.construct ? ' · ' + esc(t.construct) + (t.kind ? ' · ' + esc(t.kind) : '') : ' · not yet coded to a construct');
    return '<div class="sig"><p class="meta">' + meta + '</p><p class="t">' + esc(t.theme) + '.</p>' + (t.words ? '<p class="w">' + esc(t.words) + '</p>' : '') + '<p class="sp">Speaks to it: ' + esc(t.speaks || 'nothing on our shelf yet') + '</p>' + move + '</div>';
  }).join('');
  var sheet = (fac && fac.links && fac.links.signals) || '';
  h += '<div class="ap-card-actions">' + (sheet ? '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(sheet) + '" target="_blank" rel="noopener">Open the Room Signals sheet</a>' : '') + (fac && fac.notes && fac.notes.url ? '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(fac.notes.url) + '" target="_blank" rel="noopener">Open the Week ' + esc(fac.notes.week) + ' notes</a>' : '') +
    '<button type="button" class="ap-walk" data-fask="What did the room carry last week, and what speaks to it?">Ask: What did the room carry?<span class="ap-walk-arrow">\u2192</span></button></div>';
  return h;
}
function bindFacSignals(root) {
  var sm = (fac && fac.sigMoves) || { proposed: [] };
  Array.prototype.forEach.call(root.querySelectorAll('[data-move-line]'), function (b) {
    b.addEventListener('click', function () {
      var key = b.getAttribute('data-move-line'), p = null; (sm.proposed || []).forEach(function (x) { if (x.key === key) p = x; }); if (!p) return;
      var s = stored(); if (!s) return;
      var was = b.textContent; b.disabled = true; b.textContent = 'Adding…';
      call({ action: 'move_add', key: s.key, moveKey: p.key, signal: p.signal, from: p.from, move: p.move, owner: p.owner, due: '', link: p.link || '', phrase: p.phrase || '' }).then(function (r) {
        fac.sigMoves = fac.sigMoves || { taken: [], proposed: [] };
        fac.sigMoves.proposed = (fac.sigMoves.proposed || []).filter(function (x) { return x.key !== p.key; });
        fac.sigMoves.taken = (fac.sigMoves.taken || []).concat([{ key: p.key, signal: p.signal, from: p.from, move: r.move, owner: r.owner, due: r.due, check: r.check, status: 'taken', by: s.email, link: p.link || '' }]);
        held.sigMoves = held.sigMoves || {}; held.sigMoves[p.key] = new Date().toISOString();
        if (feed && feed.moves) { feed.moves.proposed = (feed.moves.proposed || []).filter(function (x) { return x.key !== p.key; }); feed.moves.taken = (feed.moves.taken || []).concat([{ key: p.key, signal: p.signal, from: p.from, move: r.move, owner: r.owner, due: r.due, check: r.check, status: 'taken', link: p.link || '' }]); }
        rerender(); fflash('Move added: ' + r.move + ' — due ' + dt(r.due) + ', ' + r.owner + '. It is on the Moves tab.');
      }, function (e) { b.disabled = false; b.textContent = was; fnotice(esc(words(e))); });
    });
  });
}
function renderFacWeek() {
  var el = $('fWeekBody'); if (!el) return;
  if (!fac) { sum('f-week-sec', 'Reading your room.'); el.innerHTML = '<p class="tw-s muted">Reading your room.</p>'; return; }
  var t = fac.this;
  if (!t) { $('fWeekH').textContent = 'The weeks are done'; $('fWeekSub').textContent = ''; sum('f-week-sec', 'No room is ahead on the Weeks tab' + (fac.last ? '; the last was Week ' + esc(fac.last.week) + ', ' + esc(fac.last.dayText) : '') + '.'); el.innerHTML = '<p class="tw-s">No room is ahead on the Weeks tab' + (fac.last ? '; the last was Week ' + esc(fac.last.week) + ', ' + esc(fac.last.dayText) : '') + '.</p>'; return; }
  $('fWeekH').textContent = 'Week ' + t.week + ' · ' + t.dayText + (t.time ? ', ' + t.time : '');
  $('fWeekSub').textContent = fac.meets || '';
  var rem = t.reminder || {}, sigs = fac.signals || [], v = t.voice || null, arts = t.articles || [];
  var next = (fac.ahead || []).filter(function (w) { return w.piece; })[0];
  sum('f-week-sec', '<strong>Week ' + esc(t.week) + '</strong> is ' + roomWhen(t) + (t.title ? ' — ' + esc(weekTitle(t.title)) : '') + '.' +
    (t.piece ? ' It introduces <strong>' + esc(t.piece) + '</strong>.' : ' No piece opens this week.') +
    (v ? ' One piece from Your Growth fits it' : ' Nothing from Your Growth fits it yet') + (sigs.length ? ', and this room carried ' + sigs.length + ' ' + (sigs.length === 1 ? 'signal' : 'signals') + ' in Week ' + esc(sigs[0].week) + '.' : '.') +
    (rem.sent ? ' The reminder went out ' + esc(dt(rem.sent, true)) + '.' : ' The reminder goes ' + esc(rem.when || 'the evening before') + '.') + (t.ask ? ' Your ask is on it.' : ' Your one ask of the room is still blank.'));
  var lines = [];
  if (t.pieceLinks && t.pieceLinks.length) { lines.push('It introduces ' + esc(t.piece) + '.'); (t.pieceAsk || []).forEach(function (p) { lines.push(esc(p.name) + ': ' + esc(p.asks)); }); if (t.fits) lines.push('<b>How it fits:</b> ' + esc(t.fits)); }
  else lines.push('No Your Story piece opens this week.' + (next ? ' The next is ' + esc(next.piece) + ', in Week ' + esc(next.week) + '.' : ''));
  if (arts.length) lines.push('Posted this week: ' + arts.map(function (a) { return esc(a.title); }).join('; ') + (/[.?!]$/.test(arts[arts.length - 1].title) ? '' : '.'));
  else lines.push('Nothing posted on the blog this week yet; the article lands here when it is published.');
  lines.push(rem.sent ? 'The reminder went out ' + esc(dt(rem.sent, true)) + ' with the reading' + (t.piece ? ', the piece' : '') + (t.ask ? ' and your ask' : '') + '.' : 'The reminder goes ' + esc(rem.when || 'the evening before') + ' with the reading' + (t.piece ? ', the piece' : '') + (t.ask ? ' and your ask' : '') + '.');
  var since = fac.since || [];
  var btns = '';
  if (fac.courseLink) btns += '<a class="ap-btn ap-btn-primary ap-btn-sm" href="' + esc(fac.courseLink) + '" target="_blank" rel="noopener">Open the session</a>';
  (t.pieceLinks || []).forEach(function (p) { btns += '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(p.url) + '" target="_blank" rel="noopener">Open ' + esc(p.name) + '</a>'; });
  arts.forEach(function (a) { if (a.url) btns += '<a class="ap-btn ap-btn-ghost ap-btn-sm" href="' + esc(a.url) + '" target="_blank" rel="noopener">Read the article</a>'; });
  btns += '<button type="button" class="ap-walk" data-fask="What does the room need before it meets?">Ask: What does the room need before it meets?<span class="ap-walk-arrow">\u2192</span></button>';
  el.innerHTML = '<p class="tw-s">' + esc(weekTitle(t.title)) + '</p>' +
    '<div class="tw-lines">' + lines.map(function (l) { return '<p>' + l + '</p>'; }).join('') + '</div>' +
    '<div class="ap-card-actions">' + btns + '</div>' +
    voiceHtml(v) +
    topicHtml(fac.topic || null) +
    facSignalsHtml(sigs) +
    '<div class="fask"><label for="fAskText">Your one ask of the room before it meets</label><textarea id="fAskText" maxlength="300" placeholder="In your words. It rides in the reminder under the reading.">' + esc(t.ask || '') + '</textarea>' +
    '<div class="ap-card-actions"><button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-ask-save="' + esc(t.week) + '">' + (t.ask ? 'Save the change' : 'Save it for the reminder') + '</button><span class="ap-card-state" id="fAskState">' + (t.ask ? 'On the Weeks tab; the reminder carries it.' : 'Blank means the reminder reads as it does today.') + '</span></div></div>' +
    (since.length ? '<div class="tw-next"><p class="part">Since the last room</p><div class="tw-lines">' + since.map(function (x) { return '<p>' + esc(x) + '</p>'; }).join('') + '</div></div>' : '');
  var s = stored(); if (!s) return;
  Array.prototype.forEach.call(el.querySelectorAll('[data-fask]'), function (b) { b.addEventListener('click', function () { $('fAskIn').value = b.getAttribute('data-fask'); goTo('f-ask-sec'); glow('f-ask-sec'); ask('f'); }); });
  bindFacSignals(el);
  var sv = el.querySelector('[data-ask-save]');
  if (sv) sv.addEventListener('click', function () {
    var text = String($('fAskText').value || '').trim(), was = sv.textContent;
    sv.disabled = true; sv.textContent = 'Saving…';
    call({ action: 'ask_set', key: s.key, week: Number(sv.getAttribute('data-ask-save')), text: text }).then(function (r) {
      t.ask = r.text; held.ask = { week: t.week, text: r.text, at: new Date().toISOString() }; sv.disabled = false; sv.textContent = r.text ? 'Save the change' : 'Save it for the reminder';
      $('fAskState').textContent = r.text ? 'Saved ' + dt(new Date().toISOString(), true) + '. The reminder carries it.' : 'Cleared. The reminder reads as it does today.';
      renderFacGreeting();
    }, function (e) { sv.disabled = false; sv.textContent = was; fnotice(esc(words(e))); });
  });
}
/* The road ahead: the weeks still to come from the Weeks tab, the story work marked, each with its "how it fits" line. */
function renderFacRoad() {
  var el = $('fRoadBody'); if (!el) return;
  if (!fac) { sum('f-road-sec', 'Reading your room.'); el.innerHTML = '<p class="tw-s muted">Reading your room.</p>'; return; }
  var ahead = fac.ahead || [];
  $('fRoadH').textContent = ahead.length ? plural(ahead.length, 'week', 'weeks') + ' to go' : 'The road is walked';
  $('fRoadSub').textContent = ahead.length ? 'From the Weeks tab. The story work and how it fits the reading.' : '';
  var pw = ahead.filter(function (w) { return w.piece; });
  sum('f-road-sec', ahead.length ? '<strong>' + plural(ahead.length, 'week', 'weeks') + ' ahead.</strong>' + (pw.length ? ' The story work comes in ' + pw.map(function (w) { return '<strong>Week ' + esc(w.week) + '</strong> (' + esc(w.piece) + ', ' + esc(dt(w.day)) + ')'; }).join(' and ') + '.' : ' No story work is named on the weeks ahead.') : 'No weeks are ahead on the Weeks tab.');
  if (!ahead.length) { el.innerHTML = '<p class="tw-s">No weeks are ahead on the Weeks tab.</p>'; return; }
  el.innerHTML = '<div class="weeks">' + ahead.map(function (w) {
    var opens = w.pieceLinks && w.pieceLinks.length ? '<p class="p">' + w.pieceLinks.map(function (p) { return '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">Open ' + esc(p.name) + '</a>'; }).join(' · ') + '</p>' : '';
    return '<div class="wk' + (w.piece ? ' piece' : '') + '"><span class="d">Week ' + esc(w.week) + ' · ' + esc(dt(w.day)) + '</span><span class="t">' + esc(weekTitle(w.title)) + (w.piece ? ' · introduces ' + esc(w.piece) : '') + '</span>' + (w.piece && w.fits ? '<p class="p"><b>How it fits:</b> ' + esc(w.fits) + '</p>' : '') + opens + '</div>';
  }).join('') + '</div><div class="ap-card-actions"><button type="button" class="ap-walk" data-fask="What story work is ahead for my room, and how does each piece fit the reading?">Ask: What story work is ahead?<span class="ap-walk-arrow">\u2192</span></button></div><p class="small muted">The “how it fits” line lives on the Weeks tab; our team writes it, and the desk reads it.</p>';
  Array.prototype.forEach.call(el.querySelectorAll('[data-fask]'), function (b) { b.addEventListener('click', function () { $('fAskIn').value = b.getAttribute('data-fask'); goTo('f-ask-sec'); glow('f-ask-sec'); ask('f'); }); });
}
/* The story board: one card per piece the Weeks tab names, in order, with its state and the men who wrote it. Open or closed in place; the browser remembers. */
var boardOpen = null;
try { boardOpen = localStorage.getItem('fd-board') !== 'closed'; } catch (e) { boardOpen = true; }
function boardHtml(board) {
  var open = boardOpen !== false;
  var h = '<div class="board" id="fBoard"><div class="bh"><h4>The story board</h4><button type="button" class="how-btn" id="fBoardBtn" aria-expanded="' + (open ? 'true' : 'false') + '">' + (open ? 'Close the board ▴' : 'See the story board ▾') + '</button></div>';
  if (open) {
    if (!board.length) h += '<p class="tw-s muted">No piece is named on the Weeks tab yet.</p>';
    else {
      h += '<div class="stops">' + board.map(function (p) {
        var when = p.after ? 'After the course' : 'Week ' + esc(p.week) + ' · ' + (p.state === 'held' && p.opensText ? 'opens ' + esc(p.opensText) : esc(p.dayText));
        var state;
        if (p.state === 'held') state = 'Held by the course until ' + esc(p.opensText) + '.';
        else if (p.state === 'ahead') state = (p.count ? '<b>' + p.count + ' of ' + p.of + '</b> so far; it opens to the room in Week ' + esc(p.week) + '.' : 'Opens to the room in Week ' + esc(p.week) + '.');
        else if (p.after) state = (p.count ? '<b>' + p.count + ' of ' + p.of + '</b> have set one.' : 'None set by the room yet.');
        else state = (p.count ? '<b>' + p.count + ' of ' + p.of + '</b> have written it.' : 'No one has written it yet.');
        var names = p.men.length ? p.men.map(function (m) { return esc(first(m.name)) + (p.men.length <= 3 && m.at ? ', ' + esc(dt(m.at)) : ''); }).join(', ') + '.' : '';
        var notYet = p.state === 'open' && p.notYet && p.notYet.length && p.count ? ' Not yet: ' + p.notYet.map(function (n) { return esc(first(n)); }).join(', ') + '.' : '';
        return '<div class="stop' + (p.state === 'open' ? ' now' : '') + '"><p class="w">' + when + '</p><p class="n">' + esc(p.name) + '</p><p class="s">' + state + '</p>' + (names || notYet ? '<p class="names">' + names + notYet + '</p>' : '') + (p.url ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">Open the piece</a>' : '') + '</div>';
      }).join('') + '</div>';
      var sm = (fac && fac.sigMoves) || { taken: [] }, sb = (sm.taken || []).filter(function (t) { return /story board/i.test(t.move); });
      if (sb.length) h += '<div class="from"><p><b>From the room’s signals:</b> ' + sb.length + ' “story board / Your Story piece” ' + (sb.length === 1 ? 'move is' : 'moves are') + ' open with our team — ' + sb.map(function (t) { return esc(t.signal.split(' — ')[0]); }).join(', ') + (sb[0].due ? ', due ' + esc(dt(sb[0].due)) : '') + '.</p></div>';
      h += '<div class="ap-card-actions"><button type="button" class="ap-walk" data-fask="Who in my room has not written this week’s piece yet?">Ask: Who has not written it yet?<span class="ap-walk-arrow">\u2192</span></button></div><p class="small muted">Counted from the site’s own notices: that a man wrote, never what he wrote.</p>';
    }
  }
  return h + '</div>';
}
function statusWords(m) {
  var w = ['Seat ' + m.seat];
  w.push(m.agreementSigned ? '<span class="ok">Signed ' + esc(dt(m.agreementSigned)) + '</span>' : '<span class="no">No signed agreement</span>');
  w.push(m.answersIn ? 'Answered ' + esc(dt(m.answersIn)) : 'No answers yet');
  var wr = (m.written || []).filter(function (x) { return !/before we meet/i.test(x.piece); }).map(function (x) { return esc(x.piece) + ' written ' + esc(dt(x.at)); });
  if (wr.length) w = w.concat(wr); else w.push('Nothing written yet');
  return w.join(' · ');
}
function renderFacRoom() {
  var el = $('fRoomBody'); if (!el) return;
  if (!fac) { sum('f-room-sec', 'Reading your room.'); el.innerHTML = '<div class="empty"><strong>Reading your room.</strong></div>'; return; }
  var men = fac.men || [], c = fac.counts || {}, board = fac.board || [];
  $('fRoomH').textContent = fac.room || 'The room';
  $('fRoomSub').textContent = 'One roster, one place: status words and the links that work.';
  if (!men.length) { sum('f-room-sec', 'No one in the room yet.'); el.innerHTML = '<div class="empty"><strong>No one in the room yet.</strong><span>A man appears here the moment his enrollment lands.</span></div>'; return; }
  var need = men.filter(function (m) { return (m.needs || []).length; });
  var lam = null; board.forEach(function (p) { if (!lam && p.state === 'open') lam = p; });
  sum('f-room-sec', '<strong>' + men.length + '</strong> in the room; <strong>' + (c.signed || 0) + ' of ' + men.length + '</strong> have signed the agreement' + (lam ? '; <strong>' + lam.count + ' of ' + lam.of + '</strong> wrote ' + esc(shortPiece(lam.name)) : '') + '. ' + (need.length ? '<strong>' + plural(need.length, 'man needs', 'men need') + '</strong> you: ' + need.map(function (m) { return esc(m.name || m.email); }).join(', ') + '.' : 'No one is waiting on you.'));
  var rows = men.map(function (m) {
    var em = String(m.email || '').toLowerCase(), needs = m.needs || [], sms = smsHref(m.phone);
    var links = '';
    if (sms) links += '<a href="' + esc(sms) + '" data-text>Text</a><button type="button" class="cp" data-copy="' + esc(String(m.phone || '').trim()) + '">copy</button><span class="sep">·</span>';
    links += '<a href="mailto:' + esc(em) + '" data-mail>Email</a><button type="button" class="cp" data-copy="' + esc(em) + '">copy</button>';
    if (m.rowLink) links += '<span class="sep">·</span><a href="' + esc(m.rowLink) + '" target="_blank" rel="noopener">His row</a>';
    if (!sms) links += '<span class="small muted"> · no phone on file</span>';
    return '<div class="man' + (needs.length ? ' need' : '') + '"><p class="k' + (needs.length ? ' need' : '') + '">' + (needs.length ? 'Needs you' : 'In the room') + '</p><p class="f">' + nameOf(m) + '</p><p class="m">' + statusWords(m) + '</p>' +
      (needs.length ? '<p class="need-line">' + needs.map(function (n) { return esc(n.do) + (n.because ? ' — ' + esc(n.because.split('.')[0]) : ''); }).join('<br>') + ' · <a href="#f-lane-sec">See his card</a></p>' : '') +
      '<div class="links">' + links + '</div></div>';
  }).join('');
  el.innerHTML = boardHtml(board) + '<div class="room-h"><h3>The roster</h3><span class="n">Men who need you first, then by seat.</span></div><div class="men">' + rows + '</div>';
  bindNames(el); bindCopy(el);
  Array.prototype.forEach.call(el.querySelectorAll('[data-fask]'), function (b) { b.addEventListener('click', function () { $('fAskIn').value = b.getAttribute('data-fask'); goTo('f-ask-sec'); glow('f-ask-sec'); ask('f'); }); });
  var bb = $('fBoardBtn'); if (bb) bb.addEventListener('click', function () { boardOpen = !(boardOpen !== false); try { localStorage.setItem('fd-board', boardOpen ? 'open' : 'closed'); } catch (e) {} renderFacRoom(); });
}
function renderFacNotes() {
  var el = $('fNotesBody'); if (!el) return;
  if (!fac) { sum('f-notes-sec', 'Reading your room.'); el.innerHTML = '<div class="empty"><strong>Reading your room.</strong></div>'; return; }
  var n = fac.notes;
  if (!n) { $('fNotesH').textContent = 'Last week’s room'; $('fNotesSub').textContent = ''; sum('f-notes-sec', 'No notes yet. They land the morning after a room.'); el.innerHTML = '<div class="empty"><strong>No notes yet.</strong><span>They land the morning after a room, written from the room’s Zoom notes with first names only.</span></div>'; return; }
  $('fNotesH').textContent = 'Week ' + n.week + ' notes';
  $('fNotesSub').textContent = n.session ? n.session.split('.')[0] : '';
  sum('f-notes-sec', '<strong>Week ' + esc(n.week) + ' notes</strong>: ' + plural((n.followUps || []).length, 'follow-up', 'follow-ups') + ', ' + plural((n.promised || []).reduce(function (s, p) { return s + (p.items || []).length; }, 0), 'promise', 'promises') + (n.attendance && n.attendance.line ? ' · ' + esc(n.attendance.line.replace(/\.$/, '')) : '') + '. The signals sit with This week above.');
  var h = '<div class="tw">';
  if (n.lastWeek) h += '<p class="tw-s">' + esc(n.lastWeek) + '</p>';
  var prom = (n.promised || []);
  if (prom.length) h += '<div><p class="ap-card-kind">What was promised</p><div class="tw-lines">' + prom.map(function (p) { return '<p><strong>' + esc(p.owner) + ':</strong> ' + esc(p.items.join('; ')) + '.</p>'; }).join('') + '</div></div>';
  if (n.attendance && n.attendance.line) h += '<p class="tw-s muted">' + esc(n.attendance.line) + '</p>';
  h += '<div class="ap-card-actions"><a class="ap-btn ap-btn-primary ap-btn-sm" href="' + esc(n.url) + '" target="_blank" rel="noopener">Open the notes</a><button type="button" class="ap-walk" data-fask="What did the room carry last week, and what speaks to it?">Ask: What did the room carry?<span class="ap-walk-arrow">\u2192</span></button></div>';
  var older = (fac.pages || []).filter(function (p) { return p.week !== n.week; });
  if (older.length) h += '<p class="small muted">Earlier weeks: ' + older.map(function (p) { return '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">Week ' + esc(p.week) + '</a>'; }).join(' · ') + '</p>';
  h += '<p class="small muted">Written from the room’s Zoom notes for training and course development. First names only; what a man shared about himself stays in the room.</p></div>';
  el.innerHTML = h;
  Array.prototype.forEach.call(el.querySelectorAll('[data-fask]'), function (b) { b.addEventListener('click', function () { $('fAskIn').value = b.getAttribute('data-fask'); goTo('f-ask-sec'); glow('f-ask-sec'); ask('f'); }); });
}
$('fRefresh').addEventListener('click', function () { load(); });
$('fAskForm').addEventListener('submit', function (ev) { ev.preventDefault(); ask('f'); });
$('fOpenAdmin').addEventListener('click', function () {
  adminOpen = !adminOpen; $('deskBody').hidden = !adminOpen; $('fOpenAdmin').textContent = adminOpen ? 'Hide the practice desk' : 'Open the practice desk';
  if (adminOpen) { renderAll(); setTimeout(function () { goTo('deskBody'); }, 50); }
});
function renderAll() { renderTabs(); renderActions(); renderAsk(); renderWeekSec(); renderMen(); renderRoad(); renderWeek(); renderFolds(); }
function setStatus(kind, text) { $('dot').className = 'dot ' + kind; $('statusText').textContent = text; }
function notice(html, crit) { $('notices').innerHTML = html ? '<div class="note' + (crit ? ' crit' : '') + '">' + html + '</div>' : ''; }
function start(tries) {
tries = tries || 0;
if (!signedIn()) { if (tries < 12) { setTimeout(function () { start(tries + 1); }, 300); return; } gateSignin(); return; }
readMe().then(function (m) {
me = m;
if (stored()) openDesk(); else gateSend();
});
}
/* build 14: the site scrolls inside its own box under a sticky top bar, so a link that points down the page (#lane, #week-sec, a card) must scroll that box itself and stop below the bar. */
function topBarBottom() {
var bar = document.querySelector('section.lw-topbar, header.lw-topbar, .lw-topbar');
if (!bar) return 0;
var pos = getComputedStyle(bar).position;
if (pos !== 'sticky' && pos !== 'fixed') return 0;
return Math.max(0, bar.getBoundingClientRect().bottom);
}
function goTo(id) {
if (!document.getElementById(id) && ALIAS[id]) id = ALIAS[id];
reveal(id);
var el = document.getElementById(id); if (!el) return false;
var sc = scroller(), page = sc === document.documentElement;
var scTop = page ? 0 : sc.getBoundingClientRect().top;
var visibleTop = Math.max(scTop, topBarBottom());
var y = el.getBoundingClientRect().top - visibleTop + (page ? (window.pageYOffset || document.documentElement.scrollTop) : sc.scrollTop) - 12;
var to = Math.max(0, Math.round(y));
try { (page ? window : sc).scrollTo({ top: to, behavior: 'smooth' }); } catch (e) { if (page) window.scrollTo(0, to); else sc.scrollTop = to; }
return true;
}
host.addEventListener('click', function (ev) {
var a = ev.target && ev.target.closest ? ev.target.closest('a[href^="#"]') : null;
if (!a || !host.contains(a)) return;
var id = String(a.getAttribute('href') || '').slice(1);
if (id && goTo(id)) { ev.preventDefault(); glow(id); }
});
function scroller() {
var e = host.parentElement;
while (e && e !== document.body && e !== document.documentElement) {
var o = getComputedStyle(e).overflowY;
if (o === 'auto' || o === 'scroll') return e;
e = e.parentElement;
}
return document.documentElement;
}
function fit() {
var h = document.getElementById('apDesk'); if (!h) return;
var sc = scroller(), page = sc === document.documentElement;
var cw = sc.clientWidth, L = page ? 0 : sc.getBoundingClientRect().left + sc.clientLeft;
h.style.marginLeft = '0px'; h.style.marginRight = '0px';
var hr = h.getBoundingClientRect();
var gl = hr.left - L, gr = (L + cw) - hr.right;
if (gr > gl + 1) h.style.marginRight = (-(gr - gl)) + 'px'; else if (gl > gr + 1) h.style.marginLeft = (-(gl - gr)) + 'px';
var b = h.querySelector('.ap-band'); if (!b) return;
b.style.marginLeft = '0px'; b.style.width = cw + 'px';
b.style.marginLeft = (L - b.getBoundingClientRect().left) + 'px';
}
fit(); window.addEventListener('resize', fit); window.addEventListener('orientationchange', fit); window.addEventListener('load', fit);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
if (window.ResizeObserver) { try { var fitQueued = false, queueFit = function () { if (fitQueued) return; fitQueued = true; requestAnimationFrame(function () { fitQueued = false; fit(); }); }; var ro = new ResizeObserver(queueFit); ro.observe(scroller()); ro.observe(host); } catch (e) {} }
window.APDesk = { build: BUILD, reload: function () { load(); }, forget: forgetBrowser, fit: fit };
start();
})();

})();
