/* AP-DESK desk.js build 38 (Nov 11, 2026; Text Him 2.1, with Code.gs 39, Notices.gs N8 and Research reader 13.15; built on the live desk.js 37 read through the Google Drive connector, so everything in 37 is kept). 1 · Our own address. An admin may press Text him on our own addresses: they come in a list of their own (the answer's ours, sent to an admin only) and are drawn at the foot of The Roster as "John Sherrod · yours", one row each, with Text him. They are not in the roster the desk reads, so no count on the desk includes them, and a facilitator or a partner is sent no list at all. The Text him sheet greets him by first name from that list, and Done does not offer His card for an address that has no roster record. 2 · Formatting. The existing rule for a record drawn on a card (.apd .from) now lets long unbroken text wrap; no rule is added (CSS_RULES stays 486). Counts taken: the file parses; the stylesheet, assembled as the page assembles it, is accepted rule for rule in a real browser (486 of 486); the roster panel was drawn in a real browser at desk and phone width with and without ours, and the counts on the panel were the same. */
/* AP-DESK desk.js build 37 (Nov 11, 2026; Text Him 2.0, ruled "yes" to all three on the Text Him Sheet 2.0 Mockup, with Code.gs 38, Notices.gs N7 and Research reader 13.13). The Text him sheet is rebuilt: the box is a copy of the From Our Team panel as Your Page draws it; one line before Send says how he will be told (read in the background when the sheet opens, so the box is ready at once); one button, Send (Not now is retired, Back leaves). The press answers when the card is written; the notice is asked for on its own call right after and the notice line updates when it goes, whether or not the sheet is still open (the call is kept alive if the tab closes; a notice it never reaches is sent by the next run). Working keeps the words read-only with a moving rule and says "Putting it on <name>’s page…", after 6 seconds "Still working. Your words are safe here.", after 20 seconds the failed line; a late answer still turns the sheet to Done and a second Send never sends a second card. Done shows the card as it landed, the notice line, and "Sent · <time> · <who>" with Undo (ten minutes) and His card; his roster row says "Our words on his page" at once. When today’s notice already went, or he has no Your Page, "Email him instead" carries the words into an email the desk sends (greeting him by first name, signed by whoever pressed, replies to the presser with the other founder copied, from John’s address; The email shows it exactly as he will get it; never a mailto link). Stylesheet: the mockup’s tw- rules and nothing else, CSS_RULES 456 -> 486 in the browser’s own count. Moves to our own platform as it is: the sheet and its words. Rebuilt: nothing. The rest of this file is 36.6 unchanged. */
/* AP-DESK desk.js build 36.6 (Nov 11, 2026; John: "still getting the same double underline issues"). Every link on the desk drew a second underline under its words, and a Walk link drew the site's gold instead of our navy, because the site's own style underlines whatever sits inside a link and out-ranks our rules. Three selectors change and none is added (CSS_RULES stays 456): a desk link and everything inside it takes no underline of its own, and a Walk link takes our navy and band colors against the site's gold. Read on the live page: 55 of 55 desk links across Today, How We're Growing, The Rooms and The Record had underlined words inside; with the change 0 of 55. Moves to our own platform as it is: all of it. Rebuilt there: nothing. Build 36.5 (Nov 11, 2026; John: "fix both"). The menu heading and the sheet that list the rooms read "Rooms" instead of "Your Rooms" (ap-shell-standard rule 11: a capital "Your" belongs to the rooms only); the sheet's address is #<view>/rooms. Nothing else changes; no stylesheet change (456). */
/* AP-DESK desk.js build 36.4 (Nov 11, 2026; Return to Place 1, ap-shell-standard 8c and 9, ruled Nov 3, 2026; with Code.gs 36.4). 1 · Every view of Your Desk and the Front Desk keeps its own address (#today, #growing, #rooms, #record for our team; #week, #men, #road for a facilitator), the first view included, so Back from the second lands on the first. The page notes the view each time it draws, so every path that changes a view (a tab, a card's See it, Add his name, the practice switch) is covered by the one rule. 2 · Every sheet (Rooms, Ask Our Team, Settings, a man's Card or Answers, The Moves, Text him) has one more (#view/settings) and one history entry: the browser's Back, Escape and the sheet's own "← Back to <view>" all leave it and land on the view he came from, and a sheet opened from a sheet goes back to that sheet. 3 · Settings ends: "Everything here is kept as you choose it.", then one filled button, "Back to <the view he came from>"; no Save button, every choice keeps itself on tap. One generic block, AP-PLACE 1 (apPlace), does the history; it is carried byte for byte by road.js 11.11, growth.js 4.4 and the witness pages. No stylesheet change (456 rules as 36.3). The rest of this file is 36.3 unchanged. */
/* AP-DESK desk.js build 36.3 — the Front Desk page, served by the Front Desk script (Code.gs build 36.3, ?file=desk.js).
   36.3 (Nov 11, 2026, with Code.gs 36.3, Notices.gs N5 and Research reader 13.9, Text Him: Notice and Card): Text him lands the words our team writes as a card on his Your Page and sends the approved notice (text if he has texts on, else email). The sheet opens straight to the box, shows the card as it will read and the one line he is told, and Send it says what went in one calm line. Text him shows for an admin on any man with an email, with or without a phone number. No style rule added; the stylesheet is still 456 rules. Moves to the platform as it is: the sheet and its words. Rebuilt: nothing.
   36.2 (Nov 11, 2026, with Code.gs 36.2, the button each card carries, install 3 of 3): the story a man offered is on its card, whole, with the five safety checks (Publish stays off until all five are ticked) and Publish · Not now (Not now asks Hold it or Decline it). Its stylesheet stays 456 rules, unchanged (no rule added); the card reuses the lines, notes and buttons already drawn.
   36.1 (Nov 11, 2026, with Code.gs 36.1, the button each card carries, install 2 of 3): the reply box on a contact card, Approve · Change it on a draft, the picture full size on an art card with Approve · Redraw, one line per suggestion on the concerns card (Accept · Set aside · Undo), Write words · Watch it on a search card with no new words, the search refresh as a row under Through Search, the answers and added words open on their card by default, and a mail that went reads Sent on Done this week. No style rule added; the stylesheet is still 456 rules. Moves to the platform as it is: every box and line is keyed by card and kind. Rebuilt: nothing.
   36 (Nov 10, 2026, with Code.gs 36, the button each card carries): a Send (a mail that cannot be taken back) offers no Undo at once, and when a Send cannot go, the card says why in one calm line (no seat email found, the seat email changed shape, the room has no dates, the room has no men) instead of “The desk could not be reached”. No rule added; the stylesheet is still 456 rules.
   35 (Nov 11, 2026, Text Notices Build 1, with Notices.gs N4): Text him is a press, not a link to the device's messaging app. It opens a sheet ("Text Mark") that first asks the script whether he has texts on (text_check), then takes the words our team writes and shows exactly what goes: "Ancient Path: " + the words + the STOP line. Send it sends them through Twilio as written (text_him; admins only; held until 8:00 AM Central in quiet hours; counted in the two-a-day ceiling). A man who has not turned texts on, stopped them by reply, or whose last three texts failed is told so, with Email him. Text him ships off until Config "text him" is yes. A facilitator who is not an admin keeps the old link. Moves to the platform as it is: the sheet and its words. Rebuilt: nothing.
  
   34 (Nov 10, 2026): No more Done (ruled Nov 10; ap-desk-standard). No card draws a Done button. A card draws the acts the script wrote on it (card.acts): Handled another way, Kept · Drop, Bring it · Not for the room, Filed, or its own press (Check the page now, Wait · Drop, Helped · No change, Made, Send). A card with no act yet draws no button and its fourth line says so (card.noAct). The voices are one card with Add · Set aside on each line; a notice left in the inbox is drawn on its card. The Moves' Done is Made. Stylesheet rules unchanged at 456 (no rule added); the stylesheet is byte for byte build 33’s.
   33.1 (Nov 7, 2026): the card’s fourth line opens with its lead word only, in bold (thenH), on the card and on the weekday Workshop update card; the line’s source note names no label. Stylesheet rules unchanged at 456 (no rule added); the stylesheet is byte for byte build 33’s.
   33 (Nov 7, 2026): every press tells the truth (John's four rulings of Nov 7). Simplicity check — Count: scheduled tasks, connectors, pages and docs unchanged; one Actions-tab column pair added (closed how, kept on). Retires: the Made button on a page-words card (the live page closes it), "What comes after" on Signals Waiting, the duplicate January Forecast links, and the words "Done" and "Handled" as a record of what happened. When it breaks: the morning read and Check the page now say what the page carries; a card the desk cannot prove shows "Still open, N days past its day" and at 30 days asks Drop or keep, so nothing waits unseen. Next school: nothing more. This file: (1) a page-words card has two acts, Open its search settings and Check the page now, and closes only as Proven; (2) every press says Said done, Proven, or Changed <the record it changed>; (3) a card untouched for 30 days asks Drop or keep; (4) until the record answers the lane reads "Reading the record…", never "Nothing needs us"; (5) Signals Waiting shows one signal at a time (Back, Next, Every signal) and names the move in plain words; (6) Toward January keeps one forecast link. Stylesheet rules unchanged at 456 (no rule added).
   32.2 (Nov 6, 2026): presses never bounce (the page carries on when the script kept a press; one calm line says so), the double underline on a walk and on a room link, long words wrap in every title and summary, and a form that looks like spam is one line a day in Since Last Monday ("1 contact form set aside as spam · Open in Gmail"). Stylesheet rules 456 (was 453), measured with a real parser and in Chromium. Moves to the platform as it is: all of it, a script and its stylesheet. Rebuilt: nothing.
   32 (Nov 4, 2026, counts taken): the card standard from build 30 and the Workshop on Your Desk from build 31, in one file. They were built in parallel from desk.js 29 and both carried a card standard; this build is all of 30 (the fuller one, ruled on the What Needs Us 3.0 mockup, and the one that is tested) and all of 31's Workshop, drawn in it. A partner's question is a card in Today's lane (a waiting partner first) with Card N of M, Back and Next, Every card, a press that says where it went, Undo for ten minutes and Done this week; the weekday update card (Leave it out · Put it back, then Send or Drop) is a card of the same standard, and Undo or Reopen brings every line back; a partner's need is a signal in Signals Waiting with Add · Set aside and the reply written from the part's state on the day; the Through a Partner row shows what partners see and say, behind a small reveal. Undo and Reopen call undo (the script keeps action_reopen for a page still on build 31). Build 31's own stepper and press line were not carried. Stylesheet: build 30's rules plus the Workshop's, kept to its own classes (CSS_RULES 453). Moves to our own platform as it is: the cards, the presses and the plain writes to the record's tables; REBUILT with the gate and fit() as in build 29. Round 2 (review): a Partner Signals tab that cannot be read says so once, with no count and no "none"; a card taken back returns after the waiting partners and men; one owner name from the People tab; a press on a partner's question or need stays in Done this week after a reload (a question can be reopened until the 7:15 AM run has carried it); Add puts its card in For Us to Do at once; the replies promise only what the script does; a facilitator's band reads Updated; a room with no man says so; toasts are not said twice. Round 3 (review): when the Partner Signals tab cannot be read Signals Waiting says so with a Walk to the Research Engine row; a need set aside can be reopened until the 7:15 AM run has carried it; the counts on the Through a Partner row follow every press; See its card after Add, and Back to Signals Waiting; the lines after Undo and Reopen name the card and the waiting partners and men; Where Parts Stand reads by state.
   31 (Nov 4, 2026, counts taken): the Workshop on Your Desk (John, Nov 4: no new view). 1. A partner's question is a card in Today's lane, a waiting partner first: the Answer shape, one button named Send, which writes the "our answer" cell of its Partner Signals row and tells where it went. 2. The weekday update card (key workshop:<date>, rule WS1) lists the lines a partner would read on What's New; Leave it out / Put it back each line; Send writes the lines kept, Drop closes it. 3. A partner's need is a signal in Signals Waiting: Serves · On our shelf · The answer, Add · Set aside with its reason, and the one line the partner reads back, written from the part's state on the day (a part with no state on the record has no Add and says so in one calm line). 4. Through a Partner keeps the partner list's line and adds, behind a small reveal, What partners see and say (On What's New, Where Parts Stand, What Partners Say). Moves to our own platform as it is: the cards, the presses and the plain writes to the record's tables.
   30 (Nov 4, 2026, counts taken): the card standard, ruled by John on the What Needs Us 3.0 mockup. Every card, for our team on Today and on How We’re Growing → For Us to Do and for a facilitator on Next Step, shows one at a time ("Card 2 of 5", Back, Next), in five lines (whose, what kind, when · what to do · why · what happens · the one act) with "Where this came from" drawn on the desk from the record, never linked: the section its line came from, and the whole facilitator page as a sheet with "← Back to <view>". A press shows at once and says what it did and where it went ("Kept · 2:01 PM Central · by Jason"), with Undo for ten minutes and Reopen for seven days (action undo); "Every card · N" lists the open cards and "Done this week · N" keeps every press from the last seven days. A card the desk recommends carries the recommendation: the new words ready to copy (Made), or Wait · Drop with the reason; a check reads Helped · No change. Every new field is optional: a feed written before build 30 draws as it did, with Done for its one act. The words of every line are written at the source; this file only draws them. Stylesheet: the 3.0 additions are appended after the build 26 rules, scoped so no earlier surface changes; AP-SHAPES 1.1 and the panel rules are untouched. Moves to our own platform as it is: the card model, the press and undo protocol, the stylesheet; REBUILT with the gate and fit() as in build 29.
   29 (Nov 4, 2026, counts taken): the status lines. John's second finding on the live page: the three lines under The Room ("eight of nine have signed the agreement…") drew as large plain sans text. The site's own button rule sets a button's font with !important, which beat the desk's inherit, so the lines lost their serif face and their underline; they now say their own serif face and underline with !important, and in the 340px side column they read at 17px, not 20px. The class was audited on the live page: every button and link on the desk keeps its own face except these lines. 28 is carried whole (never live on its own).
   28 (Nov 4, 2026, counts taken): the band, John's finding on the live page ("we have header problems"): the two lines under the greeting sat left of the page and were cut off at the band's left edge. Three causes, all in this file: (1) the page's own centered section leaked its alignment into the desk, so the greeting centered while the lines under it did not — the desk now sets its own left alignment (AP-SHELL 1 rule 1: rooms are left-aligned); (2) the band is widened to the box's edges, but the desk's own overflow-x:clip cut it back to the page column — the clip moves onto the panels' own frame; (3) the band's side padding was a percentage of the page column, not of the band, so the words began at 28px instead of at the menu's edge — fit() now measures the menu's left edge and the content's right edge and sets the band's padding to them. Moves to the platform as it is: a stylesheet and a measure. Rebuilt: nothing. One rule added (373, was 372); no other words changed.
   27 (Nov 4, 2026, counts taken): the voice cards. A card whose key begins voice: (voice:add:<id>, voice:paused:<id>, voice:restore:<id>) reads its two choices as buttons — Add · Pass, Keep paused · Restore, Restore · Wait — with the reason in a line and one link to the evidence. A press takes the card off the lane at once, says what it did in one line, and the script writes the Sources row on the Research Engine sheet (action voice_set) and closes the card; if the record says no the card comes back with one calm line. No stylesheet rule changed (CSS_RULES stays 372). Moves to our own platform as it is: a card, two buttons and one plain write to the record's table.
   26 (Nov 3, 2026, counts taken): the Front Desk design 2.8, ruled by John, built on the live record. The screen is the design's, word for word: the band, the menu, the panels (AP-PANEL 1), cards and rows, the three shapes of an ask (AP-SHAPES 1), the Release List, The Moves, Signals Waiting, the facilitator's This Week, The Men and Coming Weeks. Nothing on it is typed by hand: every room, week, man, card, reading and move is read from the desk response (feed, fac, ac, and the new x of Code.gs 29); a key that is missing draws the calm line "The desk can’t read the record right now", never "undefined".
   The sheet rule (ruled Nov 3): a facilitator never meets a link to a spreadsheet; our team meets one only inside The Record, and anywhere else a sheet link reads "<Sheet>, in The Record" and lands on that sheet's row there, with a way back. Counts are words up to ten, then figures. Every press shows at once and rolls back with one calm line if the record says no; a press that can be said twice waits for the record to return.
   Counts taken: the stylesheet is assembled as the page assembles it (@import first, AP-SHAPES 1.1 byte-for-byte from build 25.2, then the desk's own rules under .apd); CSS_RULES below is the stamped count, and the page counts the rules the browser accepted against it and tells the script once per build if it is short (action page_check).
   Moves to our own platform: AS THEY ARE: the whole model (rooms, weeks, men, cards, release, moves, signals, ways, records), every view, the counts and the Central-time words, the call and write protocol, the stylesheet. REBUILT: the gate (the site's own sign-in, window.me) becomes our platform's sign-in; fit() (the band's reach to the edges of the host box) goes when the desk owns the page; the host guard on #apDesk becomes the page itself. Nothing here names a page, block or setting of the site builder in any words a person reads.
   Earlier builds: 25.2 (Nov 2) a research:hold: card reads Hold it; 25.1 (Oct 26) lines with arrows for every See… and Open…; 25 (Oct 26) the three shapes of an ask; 24.1 (Oct 23) the room desk after Jason's walk.
*/

(function () {
"use strict";
var BUILD = "38", CSS_RULES = 486;
var host = document.getElementById("apDesk"); if (!host || host.getAttribute("data-desk")) return; host.setAttribute("data-desk", String(BUILD)); host.classList.add("ap-desk");
var CSS_TEXT = "@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');\n/* AP-SHAPES 1.1: the three shapes of an ask (Find, Answer, Walk) and the weight rule; one source, shapes.css */\n.ap-find{position:relative;max-width:34em;margin:0 0 18px} .ap-find input{width:100%;box-sizing:border-box;font:400 16px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-ink,#2B3040) !important;background:#fff;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:8px 0 8px 28px;outline:none} .ap-find input:focus{border-bottom-color:var(--ap-navy,#1F2A44)} .ap-find::before{content:\"\";position:absolute;left:2px;top:11px;width:12px;height:12px;border:1.5px solid var(--ap-quiet,#6B7280);border-radius:50%} .ap-find::after{content:\"\";position:absolute;left:13px;top:23px;width:7px;height:1.5px;background:var(--ap-quiet,#6B7280);transform:rotate(45deg);transform-origin:left center} .ap-find input::placeholder{color:var(--ap-quiet,#6B7280)} .ap-answer{margin:0 0 18px;max-width:40em} .ap-answer .ap-answer-q{font:400 20px/1.4 var(--ap-serif,'Source Serif 4',serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 10px;text-wrap:balance} .ap-answer .ap-answer-lead{font:400 15px/1.5 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-quiet,#6B7280) !important;margin:-4px 0 10px} .ap-answer input,.ap-answer textarea{display:block;width:100%;box-sizing:border-box;font:400 17px/1.5 var(--ap-serif,'Source Serif 4',serif) !important;color:var(--ap-ink,#2B3040) !important;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-left:3px solid var(--ap-bronze,#B8945F);border-radius:4px;padding:12px 14px;outline:none;resize:vertical} .ap-answer input{min-height:0} .ap-answer textarea{min-height:96px} .ap-answer input:focus,.ap-answer textarea:focus{border-color:var(--ap-navy,#1F2A44);border-left-color:var(--ap-bronze,#B8945F)} .ap-answer input::placeholder,.ap-answer textarea::placeholder{color:var(--ap-quiet,#6B7280);font-style:italic} .ap-answer .ap-answer-act{display:flex;align-items:center;gap:14px;margin:10px 0 0} .ap-answer .ap-answer-state{font:400 14px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-quiet,#6B7280) !important;margin:8px 0 0;min-height:1.4em} .ap-answer .ap-answer-state.kept{color:var(--ap-bronze,#B8945F) !important} .ap-answer .ap-answer-state.kept::before{content:\"\\2713\\00a0\"} .ap-walk{display:inline-block;font:600 15px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:0 0 1px;margin:0;cursor:pointer;text-decoration:none !important;text-align:left} .ap-walk:hover{border-bottom-color:var(--ap-navy,#1F2A44)} .ap-walk .ap-walk-arrow{display:inline-block;margin-left:6px;color:var(--ap-bronze,#B8945F)} .ap-walk+.ap-walk{margin-left:18px} .ap-walk.quiet{font-weight:400 !important;color:var(--ap-quiet,#6B7280) !important;border-bottom-color:var(--ap-rule,#E2DCD1)} a.ap-btn.ap-btn-primary,a.ap-btn.ap-btn-ghost{background:none !important;color:var(--ap-navy,#1F2A44) !important;border:0 !important;border-bottom:1px solid var(--ap-bronze,#B8945F) !important;border-radius:0 !important;padding:0 0 1px !important;font:600 15px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;box-shadow:none !important;display:inline-block} a.ap-btn.ap-btn-primary::after,a.ap-btn.ap-btn-ghost::after{content:\"\\00a0\\2192\";color:var(--ap-bronze,#B8945F)} a.ap-btn.ap-btn-primary+.ap-btn,.ap-walk+a.ap-btn.ap-btn-primary,a.ap-btn.ap-btn-primary+.ap-walk{margin-left:18px} @media (prefers-reduced-motion: reduce){.ap-walk,.ap-answer input,.ap-answer textarea{transition:none}}\n.ask-tries{gap:6px 18px}.ask-tries button{background:none;border:0;border-bottom:1px solid var(--ap-rule);border-radius:0;padding:0 0 1px;font:400 14px/1.4 var(--ap-sans);color:var(--ap-navy)}.ask-tries button:hover{border-bottom-color:var(--ap-navy)}\n\n.apd{--paper:#FBF9F5;--sand:#F3EDE3;--card:#FFFFFF;--navy:#1F2A44;--ink:#2B3040;--quiet:#5E6573;--rule:#E2DCD1;--edge:#8C8170;--hover:rgba(184,148,95,.06);--bronze:#B8945F;--bronze-ink:#77592E;--band:#1F2A44;--band-fg:#F3EDE3;--band-quiet:#D8D0C4;--band-k:#D9B97F;--band-line:rgba(255,255,255,.14);--btn:#1F2A44;--btn-fg:#FBF9F5;--stage:#EDE8DF;--frame:#10151F;--flag:#9E4722;--serif:'Source Serif 4',Georgia,'Times New Roman',serif;--sans:'Source Sans 3','Segoe UI',Arial,sans-serif;--tap:44px;--ease:cubic-bezier(.2,.7,.2,1);--g:18px}\n.apd *{box-sizing:border-box}\n.apd{margin:0;background:var(--stage);color:var(--ink);font:400 16px/1.5 var(--sans);-webkit-font-smoothing:antialiased}\n.apd p{margin:0;text-wrap:pretty}\n.apd h1,.apd h2,.apd h3{text-wrap:balance}\n.apd button{font:inherit;color:inherit}\n.apd a{color:inherit}\n.apd :focus-visible{outline:3px solid var(--navy);outline-offset:2px;border-radius:6px}\n.apd .band :focus-visible{outline-color:#F3EDE3}\n.apd .nw{display:inline-block}\n.apd .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.apd .band{background:var(--band);color:var(--band-fg)}\n.apd .topbar{padding:8px 16px 0}\n.apd .kr{display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:44px}\n.apd .k{font:600 12px var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--band-k)}\n.apd .kr-r{display:flex;align-items:center;gap:14px}\n.apd .tb{min-height:var(--tap);min-width:var(--tap);padding:0;background:none;border:0;color:var(--band-k);font:600 13px var(--sans);cursor:pointer;white-space:nowrap}\n.apd .tabs{position:sticky;top:0;z-index:6;display:flex;background:var(--paper);border-bottom:1px solid var(--rule);overflow-x:auto;scrollbar-width:none}\n.apd .tabs::-webkit-scrollbar{display:none}\n.apd .tab{flex:1 0 auto;min-height:48px;background:none;border:0;border-bottom:3px solid transparent;color:var(--quiet);font:600 14px var(--sans);cursor:pointer;padding:0 10px;white-space:nowrap}\n.apd .tabs.four .tab{font-size:13px;padding:0 5px;flex:1 1 auto}\n.apd .tab[aria-selected=\"true\"]{color:var(--navy);border-bottom-color:var(--bronze-ink)}\n.apd.pc .tabs{display:none}\n.apd .hero{padding:4px 18px 20px;border-bottom:1px solid var(--band-line);min-height:118px}\n.apd .hero .hk{display:none}\n.apd .hero h1{margin:0;font:400 28px/1.15 var(--serif);color:var(--band-fg)}\n.apd .hero .where{margin-top:6px;font:400 16px/1.45 var(--serif);color:var(--band-quiet)}\n.apd .pcnav{display:none}\n.apd .mlab{margin:0 0 6px 15px;font:600 12px var(--sans);letter-spacing:.1em;text-transform:uppercase;color:var(--quiet)}\n.apd .mi{display:block;width:100%;min-height:var(--tap);text-align:left;padding:9px 12px;margin:0 0 2px;border:0;border-left:3px solid transparent;border-radius:0 6px 6px 0;background:none;cursor:pointer;font:inherit;color:var(--ink)}\n.apd .mi b{display:block;font:600 16px/1.3 var(--sans);color:var(--navy)}\n.apd .mi span{display:block;font-size:14px;line-height:1.35;color:var(--quiet)}\n.apd .mi.room b{font-size:16px}\n.apd .mi.here{cursor:default}\n.apd .mi.here b{color:var(--navy)}\n.apd .mgroup .mv{padding-left:24px}\n.apd .mgroup{margin:0 0 10px;padding-bottom:2px}\n.apd .mgroup .here{padding-bottom:4px}\n.apd .mi[aria-current=\"page\"]{border-left-color:var(--bronze-ink);background:var(--sand)}\n.apd.pc .cols2{margin-top:20px}\n.apd .mgroup{margin-bottom:10px}\n.apd .mfoot{margin-top:14px;padding-top:12px;border-top:1px solid var(--rule)}\n.apd .view{padding:16px 16px 48px}\n.apd .ap-panel{background:var(--card);border:1px solid var(--rule);border-top:3px solid var(--bronze);border-radius:6px;margin-top:18px}\n.apd .ap-panel:first-child{margin-top:0}\n.apd .ap-panel-h{margin:0}\n.apd .ap-panel-head{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:'t c' 'n n';column-gap:12px;align-items:start;width:100%;padding:16px var(--g) 14px;border:0;background:none;text-align:left;cursor:pointer}\n.apd .ap-panel-title{grid-area:t;display:block;font:400 24px/1.2 var(--serif);color:var(--navy)}\n.apd .ap-panel-note{grid-area:n;display:block;margin-top:4px;font:400 14px/1.4 var(--sans);color:var(--quiet);overflow:hidden}\n.apd .ap-panel-note .np{display:block;margin-left:-14px}\n.apd .ap-panel-note .nn{display:inline-block;position:relative;padding-left:14px}\n.apd .ap-panel-note .nn+.nn:before{content:\"·\";position:absolute;left:4px}\n.apd .ap-panel-ctl{grid-area:c;font:600 13.5px var(--sans);color:var(--navy);border-bottom:1px solid var(--bronze);padding-bottom:1px;white-space:nowrap;margin-top:6px}\n.apd .ap-panel-body{padding:0 var(--g) 22px}\n.apd .ap-panel-body>.rows:last-child .prow:last-child{padding-bottom:10px}\n.apd .ap-panel.shut .ap-panel-body{display:none}\n.apd .t{font:400 20px/1.35 var(--serif);color:var(--navy)}\n.apd .t.claim{font-size:20px}\n.apd .s{margin-top:8px;font-size:16px}\n.apd .help{margin-top:8px;font-size:14px;color:var(--quiet)}\n.apd .who{margin-top:6px;font-size:14px;color:var(--quiet)}\n.apd .lk{margin:0;font:600 12px var(--sans);letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .walk{display:inline-block;min-height:var(--tap);padding:11px 0;line-height:22px;background:none;border:0;font:600 16px var(--sans);color:var(--navy);cursor:pointer;text-decoration:none;text-align:left}\n.apd .walk .u{border-bottom:1px solid var(--bronze);padding-bottom:1px}\n.apd .walk .ar{color:var(--bronze-ink)}\n.apd .walks{display:flex;flex-wrap:wrap;gap:0 22px;margin-top:6px}\n.apd .rev{display:inline-flex;align-items:center;gap:4px;min-height:var(--tap);padding:0;background:none;border:0;font:400 14px var(--sans);color:var(--quiet);cursor:pointer}\n.apd .rev span{border-bottom:1px solid var(--edge)}\n.apd .revs{display:flex;flex-direction:column;align-items:flex-start;margin-top:4px}\n.apd .more{display:none;padding-bottom:6px}\n.apd .more.open{display:block}\n.apd .btn{display:block;width:100%;min-height:48px;margin-top:14px;border:0;border-radius:6px;background:var(--btn);color:var(--btn-fg);font:600 16px var(--sans);cursor:pointer}\n.apd .btn.line{background:none;border:1px solid var(--navy);color:var(--navy);width:auto;padding:0 22px;display:inline-block;min-height:var(--tap)}\n.apd .kept{margin-top:10px;font-size:16px;color:var(--quiet)}\n.apd .kept b{color:var(--navy);font-weight:600}\n.apd .verse{font:italic 400 18px/1.5 var(--serif);color:var(--navy)}\n.apd .verse{margin-bottom:12px}\n.apd .verse span{display:block;margin-top:2px;font:600 12px var(--sans);font-style:normal;color:var(--bronze-ink)}\n.apd .ruled{margin-top:12px;padding:2px 0 2px 14px;border-left:3px solid var(--bronze)}\n.apd .ruled .lk,.apd .ruled p.lk{margin-bottom:2px;font:600 12px var(--sans);letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .ruled p{font-size:16px}\n.apd .ruled p.serif{font:400 18px/1.45 var(--serif);color:var(--navy)}\n.apd .q{margin:10px 0 0;padding:0 0 0 14px;border-left:3px solid var(--bronze);font:italic 400 18px/1.5 var(--serif);color:var(--navy)}\n.apd .qm{display:inline-flex;align-items:center;min-height:var(--tap);margin:0 0 0 17px;font:600 14px var(--sans);color:var(--bronze-ink);text-decoration:none}\n.apd .qm span{border-bottom:1px solid var(--bronze)}\n.apd .part{margin-top:18px;padding-top:14px;border-top:1px solid var(--rule)}\n.apd .pts{margin:6px 0 0;padding-left:20px;font-size:16px}\n.apd .pts li{margin-top:6px}\n.apd .story{font:400 18px/1.6 var(--serif);color:var(--ink);margin-top:10px}\n.apd .choices{display:grid;gap:8px;margin-top:12px}\n.apd .choices.two{grid-template-columns:1fr 1fr}\n.apd .choices.three{grid-template-columns:1fr 1fr 1fr}\n.apd .choice{min-height:var(--tap);padding:10px 12px;border:1px solid var(--edge);border-radius:6px;background:var(--card);font-size:16px;color:var(--ink);cursor:pointer;text-align:center;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap}\n.apd .choice.left{justify-content:flex-start;text-align:left}\n.apd .choice small{display:block;flex-basis:100%;font-weight:400;font-size:14px;color:var(--quiet)}\n.apd .choice[aria-pressed=\"true\"]{border:2px solid var(--bronze-ink);background:var(--sand);color:var(--navy);font-weight:600}\n.apd .choice[aria-pressed=\"true\"]:before{content:\"✓\";color:var(--bronze-ink)}\n.apd textarea,.apd input[type=text],.apd input[type=search]{display:block;width:100%;margin-top:10px;padding:12px;border:1px solid var(--edge);border-radius:6px;background:var(--paper);font:16px/1.5 var(--sans);color:var(--ink)}\n.apd textarea{min-height:84px;resize:vertical}\n.apd .find{position:relative;display:flex;align-items:center;border:1px solid var(--edge);border-radius:6px;background:var(--paper)}\n.apd .find input{border:0;background:none;flex:1 1 auto;min-width:0}\n.apd .find .fchip{flex:none;min-height:var(--tap);margin:0 4px 0 0;padding:0 12px;border:1px solid var(--edge);border-radius:6px;background:var(--card);font:600 14px var(--sans);color:var(--navy);cursor:pointer;white-space:nowrap}\n.apd .find .fchip[aria-pressed=\"true\"]{border:2px solid var(--bronze-ink);background:var(--sand)}\n.apd .find .fchip[aria-pressed=\"true\"]:before{content:\"✓ \";color:var(--bronze-ink)}\n.apd .find:focus-within{outline:2px solid var(--bronze);outline-offset:1px}\n.apd .find input:focus{outline:none}\n.apd .find input{padding-left:38px;margin-top:0}\n.apd a.btn.line{display:inline-flex}\n.apd a.btn{display:flex;align-items:center;justify-content:center;text-decoration:none}\n.apd .hero h1:focus{outline:none}\n.apd .find svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:16px;height:16px;fill:none;stroke:var(--quiet);stroke-width:2}\n.apd .rows{margin-top:4px}\n.apd .prow{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 18px;align-items:center;width:100%;margin:0;padding:30px 0 32px;border:0;border-top:1px solid var(--rule);background:none;text-align:left;cursor:pointer;color:inherit;font:inherit}\n.apd .rows .prow:first-child{border-top:0;padding-top:0}\n.apd .ap-panel-body>.rows:first-child{margin-top:8px}\n.apd .prow .lab{grid-column:1;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .prow .nm{grid-column:1;font:400 20px/1.35 var(--serif);color:var(--navy);max-width:62ch}\n.apd .prow .st{grid-column:1;font-size:14px;color:var(--quiet)}\n.apd .prow .go{grid-column:2;grid-row:1/4;font:600 16px var(--sans);color:var(--navy);white-space:nowrap}\n.apd .prow .go span{border-bottom:1px solid var(--bronze)}\n.apd .mark{display:grid;gap:2px;padding:16px 0;border-top:1px solid var(--rule)}\n.apd .mark:first-of-type{border-top:0;padding-top:4px}\n.apd .mark .lab{font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .mark .lab i{font:italic 400 14px var(--serif);text-transform:none;letter-spacing:0;color:var(--quiet);margin-left:6px}\n.apd .mark p{font:400 18px/1.45 var(--serif);color:var(--ink);max-width:62ch}\n.apd .mark small{font-size:14px;color:var(--quiet)}\n.apd .lane{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:10px 0;border-top:1px solid var(--rule)}\n.apd .lane:first-child{border-top:0}\n.apd .lane b{display:block;font:600 14px var(--sans);color:var(--navy)}\n.apd .lane span{display:block;font-size:14px;color:var(--quiet)}\n.apd .lane .choice{flex:none;min-width:88px;font-size:14px}\n.apd .peek{margin-top:8px;padding:14px 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)}\n.apd .overlay{position:absolute;inset:0;background:var(--paper);z-index:20;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .38s var(--ease);visibility:hidden}\n.apd .overlay.open{transform:none;visibility:visible}\n.apd .ohead{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;border-bottom:1px solid var(--rule)}\n.apd .ohead .lk{font-size:12px}\n.apd .obody{flex:1;overflow-y:auto;padding:16px 20px 28px}\n.apd .toast{position:absolute;left:16px;right:16px;bottom:18px;z-index:30;background:var(--navy);color:var(--paper);border-radius:8px;padding:12px 14px;font-size:14px;opacity:0;transform:translateY(10px);transition:opacity .3s var(--ease),transform .3s var(--ease);pointer-events:none}\n.apd .toast.in{opacity:1;transform:none}\n.apd.pc{grid-template-columns:1fr;max-width:1280px}\n.apd.pc .topbar{display:none}\n.apd.pc .hero{padding:26px max(28px,calc((100% - 1180px)/2 + 28px)) 24px;min-height:136px}\n.apd.pc .hero .hk{display:block;margin-bottom:10px}\n.apd.pc .hero h1{font-size:34px}\n.apd.pc .hero .where{font-size:18px;max-width:780px}\n.apd .pcwrap{display:block}\n.apd.pc{--g:28px}\n.apd.pc .pcwrap{display:grid;grid-template-columns:220px minmax(0,1fr);gap:32px;max-width:1180px;margin:0 auto;padding:28px 28px 56px;align-items:start}\n.apd.pc .pcnav{display:block;position:sticky;top:20px}\n.apd.pc .view{padding:0}\n.apd .cols2{display:block}\n.apd .side{margin-top:18px}\n.apd.pc .cols2{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:24px;align-items:start}\n.apd.pc .side{margin-top:0}\n.apd.pc .ap-panel-title{font-size:26px}\n.apd.pc .toast{left:50%;right:auto;width:460px;margin-left:-230px;bottom:28px}\n@media (hover:hover){\n  .apd .prow:hover{background:var(--hover);box-shadow:0 0 0 0 transparent,-12px 0 0 var(--hover),12px 0 0 var(--hover)}\n  .apd .mi:not(.here):not([aria-current=\"page\"]):hover{background:var(--hover)}\n  .apd .walk:hover .u{border-bottom-color:var(--navy)}\n  .apd .choice:hover{border-color:var(--bronze)}\n  .apd .tab:hover{color:var(--navy)}\n}\n.apd:not(.pc) .prow{grid-template-columns:1fr;padding:24px 0 26px}\n.apd .st .nw{white-space:nowrap}\n.apd .st .nv{white-space:normal}\n.apd a.mi{text-decoration:none;color:inherit}\n.apd:not(.pc) .prow .go{grid-column:1;grid-row:auto;margin-top:6px}\n.apd:not(.pc) .choices.three{grid-template-columns:1fr}\n.apd .nsep{display:inline-block}\n.apd .ccards{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:4px}\n.apd .ccard{display:flex;flex-direction:column;background:var(--card);border:1px solid var(--rule);border-radius:6px;overflow:hidden;text-align:left;cursor:pointer;padding:0;font:inherit;color:inherit}\n.apd .ccard img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;max-width:100%}\n.apd .ccard .cb{padding:14px 16px 16px;display:flex;flex-direction:column;flex:1}\n.apd .ccard .cn{font:400 20px/1.2 var(--serif);color:var(--navy)}\n.apd .ccard .cl{margin-top:6px;font-size:16px}\n.apd .ccard .cs{margin-top:4px;font-size:14px;color:var(--quiet)}\n.apd .ccard .cw{margin-top:auto;padding-top:14px;font:600 16px var(--sans);color:var(--navy)}\n.apd .ccard .cw span{border-bottom:1px solid var(--bronze)}\n@media (hover:hover){.apd .ccard:hover{border-color:var(--bronze)}}\n.apd .wrow{display:grid;grid-template-columns:28px minmax(0,1fr);gap:12px;padding:14px 0;border-top:1px solid var(--rule);align-items:start}\n.apd .wrow:first-child{border-top:0;padding-top:4px}\n.apd .ring{width:24px;height:24px;border-radius:50%;border:2px solid var(--edge);margin-top:2px}\n.apd .ring.done{background:var(--bronze);border-color:var(--bronze)}\n.apd .wrow .lab{display:block;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .wrow .nm{display:block;font:400 18px/1.35 var(--serif);color:var(--navy)}\n.apd .wrow small{display:block;font-size:14px;color:var(--quiet)}\n.apd .person{display:flex;align-items:center;gap:12px}\n.apd .av{width:44px;height:44px;border-radius:50%;background:var(--band);color:#F3EDE3;display:grid;place-items:center;font:400 20px var(--serif)}\n.apd .revs .more{align-self:stretch}\n.apd .vlanes .rev{min-height:var(--tap)}\n.apd .vl{list-style:none;margin:2px 0 10px;padding:0}\n.apd .vl li{padding:9px 0;border-top:1px solid var(--rule);font-size:16px;line-height:1.4;color:var(--ink)}\n.apd .vl li:first-child{border-top:0}\n.apd .vl li span{display:block;font-size:14px;color:var(--quiet)}\n.apd .sroad{margin-top:6px}\n.apd .sroad .wrow:first-child{padding-top:8px}\n.apd .chap .cq{font:italic 400 18px/1.45 var(--serif);color:var(--navy);margin-top:4px}\n.apd .srows p{margin:12px 0 0;font-size:16px;line-height:1.45;max-width:62ch}\n.apd .srows .rm{display:block;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd #p-yourroom .ap-home{margin-top:4px}\n.ap-home .ap-courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin:0;padding:0}\n.ap-home a.ap-ccard{display:flex;flex-direction:column;background:#fff;border:1px solid var(--ap-rule);border-radius:6px;overflow:hidden;text-decoration:none !important;color:inherit !important;transition:border-color .2s ease,box-shadow .2s ease}\n.ap-home a.ap-ccard:hover{border-color:var(--ap-bronze);box-shadow:0 6px 18px rgba(31,42,68,.08)}\n.ap-home a.ap-ccard:focus-visible{outline:2px solid var(--ap-bronze);outline-offset:2px}\n.ap-home .ap-ccard-img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:var(--ap-rule)}\n.ap-home .ap-ccard-body{display:flex;flex-direction:column;flex:1 1 auto;padding:18px 20px 20px}\n.ap-home .ap-ccard-name{font:400 24px/1.2 var(--ap-serif) !important;color:var(--ap-navy) !important;margin:0}\n.ap-home .ap-ccard-line{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-ink) !important;margin:8px 0 0}\n.ap-home .ap-ccard-sub{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet) !important;margin:4px 0 0}\n.ap-home .ap-ccard-way{align-self:flex-start;margin-top:auto;padding-top:18px}\n.ap-home .ap-ccard-way span{font:600 15px/1.4 var(--ap-sans) !important;color:var(--ap-navy) !important;border-bottom:1px solid var(--ap-bronze);padding-bottom:1px}\n.ap-home .ap-ccard-way span::after{content:\"\\2192\";padding-left:6px}\n.ap-home a.ap-ccard:hover .ap-ccard-way span{color:var(--ap-bronze) !important}\n.ap-home .ap-nw{display:inline-block}\n@media (max-width:600px){.ap-home .ap-courses{grid-template-columns:1fr;gap:16px}.ap-home .ap-ccard-body{padding:16px 18px 18px}.ap-home .ap-ccard-name{font-size:22px !important}}\n.ap-home{--ap-serif:var(--serif);--ap-sans:var(--sans);--ap-navy:var(--navy);--ap-ink:var(--ink);--ap-quiet:var(--quiet);--ap-rule:var(--rule);--ap-bronze:var(--bronze);--ap-paper:var(--paper)}\n.apd .wide{margin-bottom:18px}\n.apd.pc .pclev{margin-top:20px}\n.apd .ap-panel-note{text-wrap:wrap}\n.apd textarea::placeholder,.apd input::placeholder{color:var(--quiet);opacity:1}\n.apd .lane .rev{min-height:var(--tap);font-size:14px}\n.apd .lane .rev[aria-pressed=\"true\"] span{border-bottom-color:var(--bronze-ink);color:var(--navy)}\n.apd .findrow{display:flex;gap:10px;align-items:stretch}\n.apd .findrow .find{flex:1}\n.apd .findrow .choice{flex:none;margin:0}\n.apd .flash{animation:flash 2.4s ease}\n@keyframes flash{0%,60%{background:var(--sand);box-shadow:-12px 0 0 var(--sand),12px 0 0 var(--sand)}100%{background:transparent}}\n.apd .relall{margin-top:0}\n.apd .drow .acts .btn.relb{border-width:2px;font-weight:600}\n.apd .drow .acts .btn.line{order:-1}\n@media (prefers-reduced-motion:reduce){.apd *,.apd *:before,.apd *:after{transition:none!important;animation:none!important;scroll-behavior:auto!important}}\n.apd .dlist{margin-top:4px}\n.apd .drow{padding:30px 0 32px;border-top:1px solid var(--rule)}\n.apd .dlist>.drow:first-child{border-top:0;padding-top:4px}\n.apd .ap-panel-body>.dlist:last-child>.drow:last-child{padding-bottom:10px}\n.apd .drow .lab{display:block;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .drow .lab .mo{font:italic 400 14px var(--serif);letter-spacing:0;text-transform:none;color:var(--quiet);margin-left:6px}\n.apd .drow .nm{display:block;margin-top:4px;font:400 20px/1.35 var(--serif);color:var(--navy);max-width:62ch}\n.apd .drow .st{display:block;margin-top:2px;font-size:14px;color:var(--quiet)}\n.apd .drow .why{margin-top:8px;font-size:16px;max-width:62ch}\n.apd .drow .acts{display:flex;flex-wrap:wrap;align-items:center;gap:10px 18px;margin-top:14px}\n.apd .drow .acts .btn{display:inline-flex;align-items:center;justify-content:center;width:auto;margin:0;padding:0 20px;min-height:var(--tap)}\n.apd .drow .acts .btn.line{padding:0 18px}\n.apd .drow .acts .done{min-height:var(--tap);padding:0 16px;border:1px solid var(--edge);border-radius:6px;background:none;color:var(--navy);font:600 15px var(--sans);cursor:pointer}\n.apd .drow .sentl{margin-top:12px;font-size:16px;color:var(--quiet);max-width:62ch}\n.apd .drow .sentl b{color:var(--navy);font-weight:600}\n.apd .drow .walks{margin-top:8px}\n.apd .drow.fact .nm{font-size:20px}\n.apd .drow .pts{max-width:62ch}\n.apd .status{font:400 20px/1.45 var(--serif);color:var(--navy);max-width:62ch}\n.apd .status .nn2{display:inline-block}\n.apd .sum{font-size:16px;max-width:62ch;margin:0 0 4px}\n.apd .sum b{font-weight:600;color:var(--navy)}\n.apd .empty{font:400 18px/1.45 var(--serif);color:var(--ink);max-width:62ch}\n.apd .ansbox{margin-top:4px}\n.apd .ansbox .t{display:block}\n.apd .ansbox .btn.line{margin-top:12px}\n.apd .answer{margin-top:14px;padding:2px 0 2px 14px;border-left:3px solid var(--bronze);max-width:62ch}\n.apd .answer p{font-size:16px}\n.apd .answer p+p{margin-top:6px}\n.apd .answer .lk{margin-bottom:4px}\n.apd .findtop{margin:0 0 18px}\n.apd .findtop .find{background:var(--card)}\n.apd .fres{margin-top:10px}\n.apd .fres .drow{padding:18px 0 20px}\n.apd .side .ap-panel-title{font-size:22px}\n.apd.pc .side .ap-panel-title{font-size:22px}\n.apd .rec{display:block}\n.apd .mrow .heard{margin-top:8px;font:italic 400 18px/1.45 var(--serif);color:var(--navy);max-width:62ch}\n.apd .mrow .goes{margin-top:6px;font-size:14px;color:var(--quiet)}\n.apd .mrow .live{margin-top:8px;font-size:16px;max-width:62ch}\n.apd .mrow .live b{font-weight:600;color:var(--navy)}\n.apd .mrow .live.none b{color:var(--flag)}\n.apd .wk .nm{font-size:20px}\n.apd .dim2{color:var(--quiet)}\n.apd .sheetnote{font-size:14px;color:var(--quiet);margin:0 0 14px}\n.apd .obody .ap-panel{margin-top:18px}\n.apd .obody .ap-panel:first-child{margin-top:0}\n.apd .sum+.dlist{margin-top:22px}\n.apd .status .cnt{display:flex;align-items:center;width:100%;min-height:44px;text-align:left;padding:2px 0;border:0;background:none;font:inherit;font-family:var(--serif) !important;color:var(--navy);cursor:pointer;text-decoration:underline !important;text-decoration-color:var(--bronze);text-decoration-thickness:1px;text-underline-offset:4px}\n.apd .status .nn2{padding:6px 0}\n.apd .status{line-height:1.6}\n.apd.pc .side .status{font-size:17px}\n.apd .boxq{display:block;margin-top:12px;font:400 18px/1.4 var(--serif);color:var(--navy);max-width:62ch}\n.apd.showsrc #screen [data-src],.apd.showsrc #sheet [data-src]{outline:1px dashed var(--bronze);outline-offset:3px}\n.apd.showsrc #screen [data-src]::after,.apd.showsrc #sheet [data-src]::after{content:\"Source: \" attr(data-src);display:block;margin-top:6px;padding:4px 8px;border-radius:4px;background:var(--sand);color:var(--bronze-ink);font:600 12px/1.4 var(--sans);letter-spacing:0;text-transform:none;white-space:normal}\n.apd.showsrc .band [data-src]::after{background:rgba(255,255,255,.12);color:var(--band-k)}\n.apd.showsrc #screen [data-src=\"\"]{outline:2px solid var(--flag)}\n.apd.pc .hero{min-height:148px}\n.apd .then{margin-top:6px;font-size:14px;color:var(--quiet);max-width:62ch}\n.apd .vl li span{display:block}\n.apd .owners{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:0 0 4px}\n.apd .owners .choice{font-size:15px;padding:8px 6px}\n.apd .vl li.b{padding:0}\n.apd .vlb{display:block;width:100%;min-height:var(--tap);padding:9px 0;background:none;border:0;text-align:left;font:16px/1.4 var(--sans);color:var(--ink);cursor:pointer}\n.apd .vlb:hover{color:var(--navy)}\n.apd .vlb:after{content:\" →\";color:var(--bronze-ink)}\n.apd .then{margin-top:6px}\n.apd .mailpv,.apd .wc{margin-top:14px;padding:2px 0 2px 14px;border-left:3px solid var(--rule);max-width:62ch}\n.apd .mh{margin:0 0 4px;font-size:14px;color:var(--quiet);overflow-wrap:anywhere}\n.apd .mb{margin-top:10px;font:400 16px/1.55 var(--serif);color:var(--ink);overflow-wrap:anywhere}\n.apd .mb p{margin:0 0 10px}\n.apd .words{display:grid;grid-template-columns:1fr;gap:4px;margin-top:6px}\n.apd.pc .words{grid-template-columns:1fr 1fr;gap:20px}\n.apd .wc .wl{margin:10px 0 0;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--quiet)}\n.apd .wc .wt{margin:2px 0 0;font:400 17px/1.45 var(--serif);color:var(--navy);overflow-wrap:anywhere}\n.apd .mini{min-height:var(--tap);min-width:var(--tap);margin-top:4px;padding:0 14px;border:1px solid var(--edge);border-radius:6px;background:none;color:var(--navy);font:600 14px var(--sans);cursor:pointer}\n.apd .asof{display:flex;flex-wrap:wrap;align-items:center;gap:0 10px;margin:6px 0 0;font-size:14px;color:var(--band-quiet)}\n.apd .asof .dot{width:8px;height:8px;border-radius:50%;background:#7FB685;flex:none}\n.apd .asof .dot.stale{background:var(--band-k)}\n.apd .band .asof .walk{color:var(--band-fg);font-size:14px}\n.apd .band .asof .walk .u{border-color:var(--band-k)}\n.apd .qa .q{margin:16px 0 0;font:600 14px/1.4 var(--sans);color:var(--quiet)}\n.apd .qa .a{margin:4px 0 0;font:400 18px/1.5 var(--serif);color:var(--navy)}\n.apd .hstops{margin:0;padding-left:22px;max-width:62ch}\n.apd .hstops li{margin-top:12px;font-size:16px}\n.apd .hstops li:first-child{margin-top:0}\n.apd .hstops li b{color:var(--navy);font-weight:600}\n.apd .hstops .walks{margin-top:0}\n.apd .sigr{padding:14px 0 4px;border-top:1px solid var(--rule)}\n.apd .sigr .nmx{margin:0;font:400 19px/1.4 var(--serif);color:var(--navy)}\n.apd .sigr .why{margin-top:4px;font-size:16px;max-width:62ch}\n.apd .sigr .st{display:block;margin-top:4px;font-size:14px;color:var(--quiet)}\n.apd .drow.rrow{padding:20px 0 22px}\n.apd .muted{color:var(--quiet)}\n.apd textarea.one{min-height:52px}\n.apd .err{margin-top:8px;color:var(--flag);font-size:15px}\n.apd .keyn{font-size:15px;color:var(--flag);max-width:62ch;margin:0}\n.apd.pc .pcwrap.gate{grid-template-columns:minmax(0,640px);justify-content:center}\n.apd .pcwrap.gate .btn{margin-top:14px}\n.apd:not(.pc) .pcwrap.gate{padding-top:16px}\n.apd .pcwrap.gate .s{margin-top:10px}\n\n/* ── build 26: the desk on a page that scrolls (sheets and the line float over it) ── */\n.apd{position:relative;background:var(--paper);min-height:240px;text-align:left}\n.apd .pcwrap,.apd .tabs,.apd .view{overflow-x:clip}\n.apd #screen{background:var(--paper)}\n.apd .overlay{position:fixed;inset:0;z-index:2147483001}\n.apd.pc .overlay{position:fixed;max-height:calc(100vh - 100px)}\n.apd .toast{position:fixed;z-index:2147483002}\n.apd.pc .toast{position:fixed}\n.apd.dim:after{content:\"\";position:fixed;inset:0;background:rgba(16,21,31,.42);z-index:2147483000}\n.apd [id]{scroll-margin-top:96px}\n.apd .err{color:var(--flag);font-size:15px;margin:10px 0 0}\n.apd .flash{background:var(--hover);outline:2px solid var(--bronze)}\n#apDesk .apd a{color:inherit;text-decoration:none}\n#pageContainer #apDesk .apd a.walk{color:var(--navy)}\n#pageContainer #apDesk .apd .band a.walk{color:var(--band-fg)}\n#apDesk .apd a.btn{color:var(--btn-fg)}\n#apDesk .apd a.walk:hover .u{border-bottom-color:var(--navy)}\n\n/* ── build 30: the card standard (ruled Nov 4, 2026): one card at a time, what happens, where this came from, what a press says, Every card, Done this week ── */\n.apd .step{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:10px 0 0;padding:4px 0;border-top:1px solid var(--rule)}\n.apd .step .of{font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .step .nav{display:flex;gap:22px}\n.apd .step + .dlist .drow{border-top:0;padding-top:12px}\n.apd .card3 .then{margin-top:12px;font-size:16px;max-width:62ch;color:var(--ink)}\n.apd .card3 .then b,.apd .res .rw b{font-weight:600;color:var(--navy)}\n.apd .card3 .rline{margin-top:8px;font-size:15px;color:var(--quiet);max-width:62ch}\n.apd .card3 .acts{display:flex;flex-wrap:wrap;align-items:center;gap:10px 22px;margin-top:16px}\n.apd .card3 .acts .done{margin:0}\n.apd .card3 .revs{margin-top:10px}\n.apd .from{margin-top:4px;padding:14px 16px 6px;background:var(--sand);border-radius:6px;overflow-wrap:anywhere}\n.apd .from .fh{margin:8px 0 2px;font:400 18px/1.3 var(--serif);color:var(--navy)}\n.apd .fl{margin:6px 0 4px;padding:0;list-style:none}\n.apd .fl li{padding:8px 0 8px 12px;border-left:3px solid transparent;font-size:15px;line-height:1.5;color:var(--ink);max-width:62ch}\n.apd .fl li.hi{border-left-color:var(--bronze);background:var(--card)}\n.apd .nwords{margin-top:14px;padding:14px 16px 8px;border:1px solid var(--rule);border-radius:6px;background:var(--card)}\n.apd .nwords .wrow{display:grid;grid-template-columns:1fr auto;gap:2px 16px;padding:10px 0;border-top:1px solid var(--rule)}\n.apd .nwords .wrow:first-of-type{border-top:0}\n.apd .nwords .wl{grid-column:1/-1;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--quiet)}\n.apd .nwords .wn{font:400 17px/1.4 var(--serif);color:var(--navy)}\n.apd .nwords .wo{grid-column:1;font-size:14px;color:var(--quiet)}\n.apd .nwords .wrow .walk{grid-column:2;grid-row:2/4;align-self:center;padding:0;min-width:var(--tap);text-align:center}\n.apd .res{margin:14px 0 6px;padding:16px 18px 10px;border:1px solid var(--rule);border-left:3px solid var(--bronze);border-radius:6px;background:var(--card)}\n.apd .res .rn{margin:4px 0 0;font:400 18px/1.35 var(--serif);color:var(--quiet);max-width:62ch}\n.apd .res .rw{margin:8px 0 0;font-size:16px;max-width:62ch}\n.apd .res .acts{display:flex;flex-wrap:wrap;align-items:center;gap:6px 18px;margin-top:10px}\n.apd .res .done{margin:0;min-height:var(--tap);padding:0 16px;border:1px solid var(--edge);border-radius:6px;background:none;color:var(--navy);font:600 15px var(--sans);cursor:pointer}\n.apd .ut{font-size:14px;color:var(--quiet)}\n.apd .res-u{margin-top:14px}\n.apd .foot3{display:flex;flex-direction:column;margin-top:6px;border-top:1px solid var(--rule);padding-top:4px}\n.apd .vlb3{display:block;width:100%;min-height:var(--tap);padding:10px 0;background:none;border:0;text-align:left;font:16px/1.4 var(--sans);color:var(--ink);cursor:pointer}\n.apd .vlb3 .vt{display:block;color:var(--navy)}\n.apd .vlb3 .vs{display:block;font-size:14px;color:var(--quiet)}\n.apd .vlb3[aria-current=\"true\"] .vt{font-weight:600}\n.apd .vlb3:hover .vt{text-decoration:underline;text-decoration-color:var(--bronze)}\n.apd .dl{display:grid;grid-template-columns:1fr auto;gap:2px 14px;padding:12px 0;border-top:1px solid var(--rule)}\n.apd .dl:first-child{border-top:0}\n.apd .dlt{font:600 12px var(--sans);letter-spacing:.05em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .dln{grid-column:1;font:400 17px/1.35 var(--serif);color:var(--navy)}\n.apd .dlw{grid-column:1;font-size:14px;color:var(--quiet);max-width:62ch}\n.apd .dla{grid-column:2;grid-row:1/4;align-self:center}\n.apd .dla .rev{min-width:var(--tap);justify-content:center;border:1px solid var(--edge);border-radius:6px;background:none;color:var(--navy);font:600 15px var(--sans);text-decoration:none;padding:0 14px}\n.apd .mrow.hil{background:var(--hover);box-shadow:inset 3px 0 0 var(--bronze);padding-left:14px}\n.apd .sh{margin:20px 0 4px;font:400 20px/1.3 var(--serif);color:var(--navy)}\n@media (max-width:600px){.apd .nwords .wrow{grid-template-columns:1fr}.apd .nwords .wrow .walk{grid-column:1;grid-row:auto;justify-self:start}.apd .dl{grid-template-columns:1fr}.apd .dla{grid-column:1;grid-row:auto}}\n\n/* ── build 32: the Workshop on Your Desk (build 31's rules, kept to the Workshop's own classes; the card standard is build 30's) ── */\n.apd .rlines .wrow{display:grid;grid-template-columns:1fr auto;gap:2px 16px;padding:10px 0;border-top:1px solid var(--rule)}\n.apd .rlines .wrow:first-of-type{border-top:0}\n.apd .rlines .wl{grid-column:1/-1;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--quiet)}\n.apd .rlines .wn{font:400 17px/1.4 var(--serif);color:var(--navy)}\n.apd .rlines .wo{grid-column:1;font-size:14px;color:var(--quiet)}\n.apd .learn{display:grid;grid-template-columns:auto 1fr;gap:4px 14px;margin:10px 0 0;font-size:15px;max-width:62ch}\n.apd .learn dt{font:600 12px/1.9 var(--sans);letter-spacing:.05em;text-transform:uppercase;color:var(--quiet)}\n.apd .learn dd{margin:0;color:var(--ink)}\n.apd .choices3{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}\n.apd .choices3 .choice{min-width:110px}\n.apd .rlines{margin-top:14px;padding:4px 0 0;border-top:1px solid var(--rule)}\n.apd .rlines .wrow.out .wn{text-decoration:line-through;color:var(--quiet)}\n.apd .rlines .wrow .rev{grid-column:2;grid-row:2/4;align-self:center}\n.apd .ansbx{margin-top:14px;max-width:62ch}\n.apd .ansbx label{display:block;font:400 18px/1.4 var(--serif);color:var(--navy)}\n.apd .ansbx textarea{min-height:96px}\n.apd .reply{margin-top:10px;padding:2px 0 2px 14px;border-left:3px solid var(--rule);font:italic 400 17px/1.45 var(--serif);color:var(--navy);max-width:62ch}\n.apd .stl{display:grid;grid-template-columns:auto 1fr;gap:2px 14px;margin:6px 0 0;font-size:15px}\n.apd .stl dt{font:600 12px/1.9 var(--sans);letter-spacing:.05em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .stl dd{margin:0;color:var(--ink)}\n.apd .stl dd small{display:block;font-size:14px;color:var(--quiet)}\n.apd .relr{padding:12px 0;border-top:1px solid var(--rule)}\n.apd .relr:first-child{border-top:0;padding-top:4px}\n.apd .relr .lab{display:block;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}\n.apd .relr .nm{display:block;margin-top:2px;font:400 18px/1.35 var(--serif);color:var(--navy)}\n.apd .subk{margin:18px 0 6px;font:600 12px var(--sans);letter-spacing:.08em;text-transform:uppercase;color:var(--quiet)}\n.apd .subk:first-child{margin-top:0}\n.apd .ansbx .done{min-height:44px;min-width:44px;padding:0 16px;border:1px solid var(--edge);border-radius:6px;background:none;color:var(--navy);font:600 15px var(--sans);cursor:pointer;margin-left:0}\n@media (max-width:600px){.apd .learn{grid-template-columns:1fr}.apd .learn dt{margin-top:6px}.apd .rlines .wrow{grid-template-columns:1fr}.apd .dl{grid-template-columns:1fr}.apd .dla{grid-column:1;grid-row:auto}.apd .stl{grid-template-columns:1fr}.apd .stl dt{margin-top:6px}.apd .rlines .wrow .rev{grid-column:1;grid-row:auto;justify-self:start}}\n.apd .pseen .help{font-size:15px;color:var(--quiet);max-width:62ch}\n.apd .owners{grid-template-columns:minmax(0,1.45fr) repeat(2,minmax(0,1fr))}\n.apd .owners .choice{flex-wrap:nowrap;gap:3px;padding:8px 4px;font-size:14px;font-weight:600}\n.apd .owners .choice:before{content:\"✓\";color:transparent}\n.apd .owners .choice[aria-pressed=\"true\"]:before{color:var(--bronze-ink)}\n#pageContainer #apDesk a,#pageContainer #apDesk a *{text-decoration:none}\n#pageContainer #apDesk a.mi,#pageContainer #apDesk a.ap-ccard{text-decoration:none}\n.apd .t,.apd .nm,.apd .nmx,.apd .why,.apd .sum,.apd .st,.apd .wt,.apd .mb,.apd .mh,.apd .rn,.apd .rw,.apd .reply,.apd .then,.apd .kept,.apd .fh,.apd .q,.apd .ap-panel-title{overflow-wrap:anywhere}\n/* Text him 2.0 (desk.js 37): the only new rules, named tw- */\n.apd .tw-k{margin:0 0 8px}\n.apd .tw-card{margin-top:0}\n.apd .tw-card .ap-panel-head{cursor:default}\n.apd .tw-card textarea{display:block;width:100%;box-sizing:border-box;min-height:84px;margin:4px 0 0;padding:6px 0 4px;border:0;border-bottom:1px solid var(--rule);background:none;resize:none;font:400 18px/1.45 var(--serif);color:var(--navy);outline:none}\n.apd .tw-card textarea:focus{border-bottom-color:var(--navy)}\n.apd .tw-card textarea::placeholder{color:var(--quiet);font-style:italic}\n.apd .tw-card textarea[readonly]{color:var(--quiet);border-bottom-color:transparent}\n.apd .tw-card.going{position:relative;overflow:hidden}\n.apd .tw-card.going:before{content:\"\";position:absolute;top:-3px;left:-40%;width:40%;height:3px;background:var(--navy);animation:twgo 1.1s var(--ease) infinite}\n@keyframes twgo{from{left:-40%}to{left:100%}}\n@media (prefers-reduced-motion: reduce){.apd .tw-card.going:before{animation:none;left:0;width:100%;opacity:.5}}\n.apd .tw-told{display:flex;gap:10px;align-items:baseline;margin:14px 0 0;max-width:62ch;font:400 17px/1.45 var(--serif);color:var(--navy)}\n.apd .tw-told i{flex:none;font-style:normal;font:600 12px var(--sans);letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink);min-width:3.6em}\n.apd .tw-told.flag{color:var(--flag)}\n.apd .tw-rev{min-height:var(--tap);margin-left:calc(3.6em + 10px);padding:0;background:none;border:0;font:600 15px var(--sans);color:var(--navy);cursor:pointer}\n.apd .tw-rev span{border-bottom:1px solid var(--bronze)}\n.apd .tw-sms{margin:2px 0 0 calc(3.6em + 10px);max-width:34ch;padding:10px 12px;border-radius:14px 14px 14px 4px;background:var(--sand);font:400 15px/1.4 var(--sans);color:var(--ink)}\n.apd .tw-acts{display:flex;flex-wrap:wrap;align-items:center;gap:10px 22px;margin-top:18px}\n.apd .tw-acts .btn.line{margin:0}\n.apd .tw-acts .btn.line[disabled]{opacity:.6;cursor:default}\n.apd .tw-h{margin:0 0 14px;font:400 26px/1.2 var(--serif);color:var(--navy)}\n.apd .tw-h:focus{outline:none}\n.apd .tw-ok{color:var(--bronze-ink);font-weight:600}\n.apd .tw-res{margin:16px 0 0;font-size:15px;color:var(--quiet)}\n.apd .tw-res b{color:var(--navy);font-weight:600}\n.apd .tw-res button{min-height:var(--tap);margin-left:10px;padding:0;background:none;border:0;font:600 15px var(--sans);color:var(--navy);cursor:pointer}\n.apd .tw-res .ar{color:var(--bronze-ink)}\n.apd .tw-res button .u{border-bottom:1px solid var(--bronze)}\n.apd.pc .obody .tw-col{max-width:660px;padding-left:max(0px,calc((100% - 1180px)/2 + 8px))}\n.apd .tw-new{background:var(--hover);outline:2px solid var(--bronze);outline-offset:6px;border-radius:2px}\n";
var IMG={bf:"data:image/jpeg;base64,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"};
/* ══════════ the design's grammar, kept as drawn (scripted from design.js 2.8) ══════════ */
var $=function(s,el){return (el||document).querySelector(s)}, $$=function(s,el){return [].slice.call((el||document).querySelectorAll(s))};
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function tie(s){return esc(s).replace(/\s+$/,"").replace(/ ([^ ]+)$/," $1")}

function ROOMS(){return [["page","Your Page","Walk your own road",LINKS.page],["growth","Your Growth","Get filled for the work",LINKS.growth],["desk","Your Desk","Care for your men"]]}
var VIEWS={team:[["today","Today","See what needs us"],["growing","How We’re Growing","Help men find us"],["rooms","The Rooms","Care for every room"],["record","The Record","Find anyone and anything"]],
           fac:[["week","This Week","Get ready for the room"],["men","The Men","Know where each man is"],["road","Coming Weeks","See the weeks to come"]]};
function curView(){return S.view[S.role]}
function viewName(){var v=curView();return VIEWS[S.role].filter(function(x){return x[0]===v})[0][1]}
function roomRow(x){if(x[0]==="desk")return '<div class="mi room here"><b>'+x[1]+'</b><span>'+x[2]+'</span></div>';return '<a class="mi room" href="'+x[3]+'" target="_blank" rel="noopener"><b>'+x[1]+'</b><span>'+x[2]+'</span></a>'}
function menu(){
  var v=curView(),h='<nav class="pcnav" aria-label="Rooms and views"><p class="mlab"'+src("ap-shell-standard rule 3: the rooms, when there is more than one")+'>Rooms</p>';
  ROOMS().forEach(function(x){
    if(x[0]==="desk") h+='<div class="mgroup">'+roomRow(x)+VIEWS[S.role].map(function(y){return '<button class="mi mv" data-act="tab" data-tab="'+y[0]+'" aria-current="'+(v===y[0]?"page":"false")+'"><b>'+y[1]+'</b><span>'+y[2]+'</span></button>'}).join("")+'</div>';
    else h+=roomRow(x);
  });
  return h+'<div class="mfoot"><button class="mi" data-act="askteam"><b>Ask our team</b><span>'+(fac()?"A question about your room":"A note to the rest of our team")+'</span></button><button class="mi" data-act="settings"><b>Settings</b><span>Notices and this browser</span></button></div></nav>';
}
function band(){
  var v=curView(),T=VIEWS[S.role],rn="Your Desk";
  var tabs='<div class="tabs'+(T.length>3?" four":"")+'" role="tablist" aria-label="Views">'+T.map(function(x){return '<button class="tab" role="tab" data-act="tab" data-tab="'+x[0]+'" aria-selected="'+(v===x[0])+'">'+x[1]+'</button>'}).join("")+'</div>';
  var top='<header class="band topbar"><div class="kr"><span class="k"'+src("ap-shell-standard: the room’s name")+'>'+rn+'</span><span class="kr-r"><button class="tb" data-act="askteam">Ask our team</button><button class="tb" data-act="rooms">Rooms</button><button class="tb" data-act="settings">Settings</button></span></div></header>';
  var h1=(v==="today"||v==="week")?greet()+(first()?", "+first():"")+".":viewName();
  return top+'<section class="band hero"><span class="k hk"'+src("ap-shell-standard: the room’s name")+'>'+rn+'</span><h1 tabindex="-1"'+src("People tab: first name")+'>'+h1+'</h1><p class="where"'+src("Rooms tab: meets · Weeks tab: week and night")+'>'+ctxLine()+'</p>'+asofLine()+'</section>'+tabs;
}

function note(n){return '<span class="np">'+String(n).split(" · ").map(function(x){return '<span class="nn">'+x+'</span>'}).join("")+'</span>'}
function panel(key,title,nt,body,opts){
  opts=opts||{};var open=S.shut[key]===undefined?!opts.shut:!S.shut[key];
  return '<section class="ap-panel'+(open?"":" shut")+'" id="p-'+key+'"><h2 class="ap-panel-h"><button type="button" class="ap-panel-head" data-act="panel" data-k="'+key+'" aria-expanded="'+open+'"><span class="ap-panel-title">'+title+'</span><span class="ap-panel-ctl">'+(open?"Close ▴":"Open ▾")+'</span><span class="ap-panel-note"'+src(opts.src||"what the panel holds, below")+'>'+note(nt)+'</span></button></h2><div class="ap-panel-body">'+body+'</div></section>';
}
function walk(act,label,extra){return '<button class="walk" data-act="'+act+'"'+(extra||"")+'><span class="u">'+label+'</span>&nbsp;<span class="ar">→</span></button>'}
function linkWalk0(href,label){return '<a class="walk" href="'+esc(href)+'" target="_blank" rel="noopener"><span class="u">'+label+'</span>&nbsp;<span class="ar">→</span></a>'}
function isSheet(h){return /docs\.google\.com\/spreadsheets/.test(String(h))}
function linkWalk(href,label){if(!isSheet(href))return linkWalk0(href,label);if(fac())return "";if(curView()==="record"&&!S.inSheet)return linkWalk0(href,label);return walk("inrec",sheetName(href)+", in The Record",' data-u="'+esc(href)+'"')}
function rev(k,label,body){var o=!!S.open[k];return '<div class="revs"><button class="rev" data-act="toggle" data-k="'+k+'" aria-expanded="'+o+'"><span>'+label+'</span> '+(o?"▴":"▾")+'</button><div class="more'+(o?" open":"")+'">'+body+'</div></div>'}
function courseCard(line,sub,s){return '<div class="ap-home"'+src(s)+'><div class="ap-courses"><a class="ap-ccard" href="'+LINKS.course+'" target="_blank" rel="noopener"><img class="ap-ccard-img" src="'+IMG.bf+'" alt=""><div class="ap-ccard-body"><p class="ap-ccard-name">Breaking Free</p><p class="ap-ccard-line">'+line+'</p>'+(sub?'<p class="ap-ccard-sub">'+sub+'</p>':'')+'<p class="ap-ccard-way"><span>Continue</span></p></div></a></div></div>'}
var VOICE_BTNS={add:[["add","Add"],["pass","Pass"]],paused:[["keep","Keep paused"],["restore","Restore"]],restore:[["restore","Restore"],["wait","Wait"]]};
var VOICE_SAY={"add:add":"Added. {n} is a source we draw from now.","add:pass":"Passed. {n} is set aside, and our team will not propose it again.","paused:keep":"Kept paused. We do not draw from {n}.","paused:restore":"Restored. We draw from {n} again.","restore:restore":"Restored. We draw from {n} again.","restore:wait":"Waiting. {n} stays paused; our team looks again after {d}."};
var VOICE_NOW={read:"a source we draw from",shelf:"a source we draw from","not recommended":"passed",paused:"paused",proposed:"waiting to be ruled","no feed yet":"not yet read"};
function voiceName(c){var t=String(c.raw&&c.raw.do||c.title||"").replace(/^[^:]*:\s*/,"");if(c.voice&&c.voice.k==="add")t=t.replace(/\s·\s[^·]*$/,"");return rt(t)}
function voiceActs(c,firstFilled){
  var b=(VOICE_BTNS[c.voice.k]||[]).map(function(x,i){return '<button class="btn'+(i===0&&firstFilled?'':' line')+'" data-act="voiceset" data-id="'+esc(c.id)+'" data-v="'+x[0]+'">'+x[1]+'</button>'}).join("");
  return '<div class="acts">'+b+(c.link?linkWalk(c.link[1],c.link[0]):"")+'</div>';
}
/* build 34 (RE12): the voices are one card; each line has its own press and its own Undo for ten minutes */
function vlHtml(c){
  var L=arr(c.vlines);S.vl=S.vl||{};
  var rows=L.map(function(l){
    var d=S.vl[l.key],lk=esc(l.key);
    var head=d?'<span class="dlt">'+esc(String(d.say).replace(/\.$/,""))+' \u00b7 '+nb(esc(clock12(d.at)))+'</span>':'<span class="dlt">'+esc(l.id)+(l.lane?' \u00b7 '+esc(rt(l.lane)):'')+'</span>';
    var btns=d?(Date.parse(d.until)-nowMs()>0?'<button class="rev" data-act="vlundo" data-k="'+lk+'"><span>Undo</span></button>':''):arr(l.btns).map(function(x){return '<button class="done" data-act="vline" data-k="'+lk+'" data-v="'+esc(x[0])+'">'+esc(x[1])+'</button>'}).join("")+(l.link?linkWalk(l.link,"Read their work"):"");
    return '<li class="dl" id="vl-'+lk+'">'+head+'<span class="dln">'+esc(rt(l.name))+'</span><span class="dlw">'+esc(rt(l.why))+'</span><span class="dla">'+btns+'</span></li>';
  }).join("");
  var ruled=L.filter(function(l){return S.vl[l.key]}).length;
  return '<p class="boxq"'+srcF("the Sources list: one line per voice, each press writes the list at once")+'>'+ruled+' of '+L.length+' ruled</p><ul class="vl">'+rows+'</ul>';
}
function cardHtml(c,firstFilled){
  var s=S.sent[c.id],own=fac()?"":ownerOf(c);
  var h='<div class="drow card3" id="c-'+esc(c.id)+'"'+srcF(c.src)+'><span class="lab">'+cardLab(c,own)+'</span><span class="nm">'+tie(cTitle(c))+'</span>'+(c.state?'<span class="st">'+esc(c.state)+'</span>':'')+'<p class="why">'+esc(cWhy(c))+(c.hand&&S.noteKept[c.email]&&S.notes[c.email]?' He asked for: '+esc(S.notes[c.email]):'')+'</p>';
  h+=cardMid(c);var dn=doneBtns(c);
  var fb=function(act,label,extra){return '<button class="btn'+(firstFilled?'':' line')+'" data-act="'+act+'"'+(extra||'')+'>'+label+'</button>'};
  if(c.q){var k=c.q.room,v=S.after[k];h+='<p class="boxq">'+esc(c.q.text)+'</p><div class="choices">'+[["opened","Opened up"],["quiet","Quietly"],["none","Not reached"]].map(function(x){return '<button class="choice left" data-act="afterpick" data-room="'+k+'" data-v="'+x[0]+'" aria-pressed="'+(v===x[0])+'">'+x[1]+'</button>'}).join("")+'</div><label class="sr" for="aline-'+k+'">One line, if you want</label><textarea id="aline-'+k+'" data-room="'+k+'" data-v="afterLine" placeholder="One line, if you want. No names.">'+esc(S.afterLine[k]||"")+'</textarea><div class="acts"><button class="btn'+(firstFilled?'':' line')+'" data-act="afterkeep" data-room="'+k+'">Keep it</button>'+dn+'</div>';}
  else if(c.box){h+='<label class="boxq" for="'+c.box.id+'">'+c.box.q+'</label><textarea id="'+c.box.id+'" data-room="'+c.box.room+'" data-v="'+c.box.v+'" placeholder="'+c.box.ph+'">'+esc(S[c.box.v][c.box.room]||"")+'</textarea><div class="acts"><button class="btn'+(firstFilled?'':' line')+'" data-act="'+c.box.act+'" data-room="'+c.box.room+'">'+c.act+'</button>'+dn+'</div>';}
  else if(c.mail)h+=mailCard(c,firstFilled,dn);
  else if(c.words)h+=wordsBlock(c);
  else if(c.vlines)h+=vlHtml(c);
  else if(c.voice)h+=voiceActs(c,firstFilled);
  else if(c.read)h+='<div class="acts">'+fb("readans","Read answers",' data-man="'+c.read+'"')+dn+'</div><div class="walks">'+manWalks(c.email)+'</div>';
  else if(c.ws&&!c.wsDone){h+='<div class="acts"><button class="done" data-act="wssend" data-id="'+esc(c.id)+'">'+(wsKept(c)?"Send":"Drop")+'</button></div>'}
  else if(c.pask)h+=paskBody(c);
  else if(c.link)h+='<div class="acts">'+(/^#moves:/.test(c.link[1])?walk("moves",c.link[0],' data-k="'+esc(c.link[1].replace(/^#moves:/,""))+'"'):linkWalk(c.link[1],c.link[0]))+dn+'</div>'+(c.email?'<div class="walks">'+manWalks(c.email)+'</div>':'');
  else if(s){var i=c.sent.indexOf(". ");h+='<p class="sentl" tabindex="-1" id="s-'+c.id+'"><b>'+(i>0?c.sent.slice(0,i+1):c.sent)+'</b>'+(i>0?" "+c.sent.slice(i+2):"")+'</p><div class="acts">'+dn+'</div>';}
  else if(c.noact)h+='<ul class="pts">'+c.pts.map(function(m){return '<li>'+m+'</li>'}).join("")+'</ul><div class="acts">'+linkWalk(LINKS.growth,"Open it on Your Growth")+dn+'</div>';
  else if(c.email&&!c.act)h+='<div class="acts">'+dn+'</div><div class="walks">'+manWalks(c.email)+'</div>';
  else if(!c.act)h+='<div class="acts">'+dn+'</div>';else h+='<div class="acts">'+fb("cardgo",c.act,' data-id="'+esc(c.id)+'"')+dn+'</div>';
  if(c.hand)h+=noteBox(c.email);
  if(c.start&&!fac())h+='<div class="walks">'+walk("copytext","Copy the first message for Cowork",' data-t="'+esc(c.start)+'" data-msg="Copied. Paste it into a new Cowork task on Opus."')+'</div>';
  return h+cardFrom(c)+'</div>';
}
/* ══════════ build 30: the card standard (ruled Nov 4, 2026) ══════════
   One card at a time, five lines in order, Where this came from drawn on the desk, a press that says what it did and where it went, Undo, Reopen, Done this week.
   The panels are keyed lane (Today → What Needs Us), gcards (How We’re Growing → For Us to Do) and flane (a facilitator’s Next Step). */
var DROP_REASON = "too few showings to read";
function laneKeyOf(who){return who==="fac"||fac()?"flane":curView()==="growing"?"gcards":"lane"}
function laneOfCard(id){return fac()?"flane":growCards().some(function(c){return c.id===id})?"gcards":"lane"}
function cTitle(c){if(c.ws&&!c.wsDone)return wsTitle(wsKept(c));return fac()&&c.ftitle?c.ftitle:c.title}
function cWhy(c){return fac()&&c.fwhy?c.fwhy:c.why}
/* a facilitator's lines carry no sheet word and no one else's name: the record, and "your desk" */
function facSay(t){return String(t||"").replace(/The Actions tab marks it ([^.]+)\./g,"Marked $1.").replace(/It is off [A-Z][a-z]+(?:’s|'s) desk and ours\./g,"It is off your desk and ours.").replace(/\bThe Actions tab\b/g,"The record").replace(/\bthe Actions tab\b/g,"the record")}
function say30(t){return fac()?facSay(t):t}
function srcF(s){return src(fac()?String(s).replace(/the Actions tab/gi,"the record").replace(/Actions tab/g,"the record"):s)}
/* build 33.1: the card’s fourth line opens with its lead word only (Closes itself: · Records it: · Changes it:), never with a label in front of it */
function thenH(t){var s=String(t==null?"":t),m=/^(Closes itself:|Records it:|Changes it:)\s*/.exec(s);return m?"<b>"+esc(m[1])+" </b>"+esc(s.slice(m[0].length)):esc(s)}
function clockOf(iso){return isoDay(iso)===todayStr()?clock12(iso):dayTime(iso)}
/* a date or a time never breaks across two lines: no-break spaces between the month and the day, the hour and AM/PM, and PM and Central */
function nb(s){return String(s==null?"":s).replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.? (\d{1,2})\b/g,"$1\u00a0$2").replace(/(\d{1,2}:\d{2}) ?(AM|PM)\b/g,"$1\u00a0$2").replace(/\b(AM|PM) Central\b/g,"$1\u00a0Central").replace(/\b(since|Due|By|Check) (?=(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\b)/g,"$1\u00a0")}
function dayLine(iso){var d=parseDay(isoDay(iso));return d?d.toLocaleDateString("en-US",{weekday:"long"})+", "+shortDay(isoDay(iso)):""}
function walkB(act,label,extra){return '<button class="walk" data-act="'+act+'"'+(extra||"")+'><span class="ar">←</span>&nbsp;<span class="u">'+label+'</span></button>'}
function revS(k,label,body,s){return rev(k,label,body).replace('<div class="revs">','<div class="revs"'+srcF(s)+'>')}
function oneVoice(l){return String(l).replace(/, and one man was already using it at work/,"")}
function pageLabel(p){var m=/Week\s+\d+/i.exec(String(p.title||""));return "The whole "+(m?m[0].replace(/^week/i,"Week")+" page":rt(p.title||"page"))}
function pageShort(t){var m=/Week\s+\d+/i.exec(String(t||""));return m?m[0].replace(/^week/i,"Week")+" Notes":rt(t||"The Notes")}
function cardLab(c,own){var tag=c.serves?'<span class="mo">'+esc(c.serves)+'</span>':c.mo?'<span class="mo">The moment: '+esc(c.mo)+'</span>':'';return (own?'For '+esc(own)+' · ':'')+esc(c.kind)+(c.when?' · '+nb(esc(c.when)):'')+tag}
/* build 33: Check the page now keeps its own line per card (the read, or what the page says against what we want) */
function wcOf(id){S.wcheck=S.wcheck||{};return S.wcheck[id]||(S.wcheck[id]={})}
function wcLine(r){
  if(!r||!r.read)return "The desk could not read the page just now. Try again in a minute.";
  var w=arr(r.want),bits=[];
  if(w[0]&&String(r.title||"")!==w[0])bits.push("search title “"+esc(r.title||"nothing")+"”");
  if(w[1]&&String(r.desc||"")!==w[1])bits.push("search description “"+esc(r.desc||"nothing")+"”");
  return "Not yet. On the page now: "+(bits.length?bits.join(" · "):"the words differ from ours only in spacing")+" — copy the new words into the search settings, save the page, and check again."
}
/* build 33: a card untouched for 30 days asks Drop or keep; unanswered seven days more, the script drops it */
function staleHtml(c){
  var s=c.stale,id=esc(c.id);if(!s)return "";
  return '<div class="stale"'+srcF("the Actions tab: first seen and kept on (a card untouched for 30 days asks Drop or keep; unanswered for seven days more, it drops itself)")+'><p class="lk">Drop or keep?</p><p class="help">Nobody has touched this card in '+esc(s.days)+' days. If it is not answered by '+nb(esc(longDay(s.dropOn)))+', it drops itself.</p><div class="acts"><button class="done" data-act="stalekeep" data-id="'+id+'">Keep it</button><button class="done" data-act="staledrop" data-id="'+id+'">Drop it</button></div></div>'
}
function doneBtns(c){
  var id=esc(c.id);
  if(c.rec&&c.rec.kind==="words"&&c.rec.settings){var wc=wcOf(c.id);return linkWalk0(c.rec.settings,"Open its search settings")+'<button class="done" data-act="wcheck" data-id="'+id+'"'+(wc.busy?' aria-busy="true"':'')+'>Check the page now</button>'+(wc.line?'<p class="why" role="status" style="margin:0;flex-basis:100%">'+wc.line+'</p>':'')}
  if(c.rec&&c.rec.kind==="wait")return '<button class="done" data-act="recwait" data-id="'+id+'">Wait</button><button class="done" data-act="recdrop" data-id="'+id+'">Drop</button>';
  if(c.checkButtons)return '<button class="done" data-act="done" data-id="'+id+'" data-answer="helped">Helped</button><button class="done" data-act="done" data-id="'+id+'" data-answer="nochange">No change</button>';
  /* build 36.2: a story card draws Publish and Not now; Not now draws Hold it and Decline it (a stone has no Publish, so it draws those two at once) */
  if(c.story&&c.story.ok&&c.acts&&c.acts.length){
    var stk=storyTicks(c),spub=c.acts.filter(function(x){return x.a==="publish"})[0],sopen=S.sNo[c.id]||!spub,bz=S.cbusy[c.id]?' aria-busy="true"':'';
    if(!sopen)return '<button class="done" data-act="cardact" data-id="'+id+'" data-a="publish"'+(stk.all?'':' disabled aria-disabled="true"')+bz+'>'+esc(spub.t)+'</button><button class="done" data-act="snow" data-id="'+id+'">Not now</button>';
    return c.acts.filter(function(x){return x.grp==="notnow"}).map(function(a){return '<button class="done" data-act="cardact" data-id="'+id+'" data-a="'+esc(a.a)+'"'+bz+'>'+esc(a.t)+'</button>'}).join("")+(spub?'<button class="done" data-act="snow" data-id="'+id+'">Back</button>':'');
  }
  /* build 34: the acts the script wrote on the card, each named for what it does */
  if(c.acts&&c.acts.length)return c.acts.map(function(a){return '<button class="done" data-act="cardact" data-id="'+id+'" data-a="'+esc(a.a)+'"'+(S.cbusy[c.id]?' aria-busy="true"':'')+'>'+esc(a.t)+'</button>'}).join("");
  /* a press the page already had under another name (Made on a move, Send on an update); Done is retired, so a card with no act draws nothing and says so in its fourth line */
  if(!c.noAct&&c.doneLabel&&!/^Done$/i.test(c.doneLabel))return '<button class="done" data-act="done" data-id="'+id+'">'+esc(c.doneLabel)+'</button>';
  return '';
}
function nwRow(label,nu,now,msg){if(!nu)return "";return '<div class="wrow"><span class="wl">'+label+'</span><span class="wn">'+esc(nu)+'</span>'+(now?'<span class="wo">Now: '+esc(now)+'</span>':'')+'<button class="walk" data-act="copytext" data-t="'+esc(nu)+'" data-msg="'+esc(msg)+'"><span class="u">Copy</span></button></div>'}
function recWords(c){var w=c.rec.words||{},nu=arr(w.nu),now=arr(w.now);return '<div class="nwords"'+srcF("Words tab: the new words for this page and the words on it now (the card’s recommendation, written at the source)")+'><p class="lk">The New Words</p>'+nwRow("Search title",nu[0],now[0],"Copied the search title.")+nwRow("Search description",nu[1],now[1],"Copied the search description.")+(w.note?'<p class="help">'+esc(rt(w.note))+'</p>':'')+'</div>'}
/* the lines between why and the one act: the desk's new words, its reading of the page, and what happens when the card is pressed */
/* build 34 (R6): the notice left in the inbox, drawn on its card so Filed is a decision made on what it says */
function noticeHtml(c){
  var n=c.notice;if(!n)return "";
  if(n.missing)return '<div class="from"'+srcF("the inbox: the notice could not be read just now")+'><p class="lk">The notice</p><ul class="fl"><li>The desk could not read this notice just now. Open it in Gmail to read it.</li></ul></div>';
  var when=n.at?clockOf(n.at):"";
  return '<div class="from"'+srcF("the inbox: the notice as it arrived, read by the script (cached six hours)")+'><p class="lk">'+nb(esc(rt(n.from||"The notice"))+(when?" \u00b7 "+when:""))+'</p><ul class="fl">'+(n.subject?'<li class="hi">'+esc(rt(n.subject))+'</li>':"")+(n.text?'<li>'+esc(rt(n.text))+'</li>':"")+'</ul></div>';
}
function cardMid(c){
  var h="";
  if(c.ws&&!c.wsDone)return wsMid(c);
  if(c.rec&&c.rec.kind==="words"&&c.rec.words)h+=recWords(c);
  if(c.rec&&c.rec.line)h+='<p class="rline"'+srcF("Search profile: the page’s latest read, against the floor on Config: signal floor")+'>'+esc(rt(c.rec.line))+'</p>';
  if(c.notice)h+=noticeHtml(c);
  if(c.pic)h+=picHtml(c);
  if(c.reply)h+=replyHtml(c);
  if(c.clines)h+=linesHtml(c);
  if(c.story)h+=storyHtml(c);
  h+=boxHtml(c);
  if(c.then)h+='<p class="then"'+srcF("the card’s fourth line, written from what the press writes")+'>'+thenH(fac()&&c.fthen?c.fthen:say30(c.then))+'</p>';
  if(c.stale)h+=staleHtml(c);
  return h;
}
/* ══════════ build 36.1: the boxes, the picture and the lines a card carries (ruled Nov 10, 2026) ══════════ */
function picHtml(c){return '<div class="from"'+srcF("the picture, drawn full size from the picture shelf (never a link)")+'><img src="'+esc(c.pic)+'" alt="'+esc("The picture for "+rt(cTitle(c)))+'" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px"></div>'}
function replyHtml(c){
  var r=c.reply,id=esc(c.id),a=arr(c.acts).filter(function(x){return x.box==="always"})[0];
  return '<div class="from"'+srcF("the contact form: his message, as it arrived (the desk reads it from the inbox)")+'><p class="lk">'+nb(esc(rt(r.subject||"His message")))+'</p><ul class="fl">'+arr(r.message).map(function(l){return '<li>'+esc(rt(l))+'</li>'}).join("")+'</ul></div><label class="boxq" for="bx-'+id+'">'+esc((a&&a.label)||"Your reply")+'</label><textarea id="bx-'+id+'" data-room="'+id+'" data-v="ctext" placeholder="'+esc(r.ph||"")+'">'+esc(S.ctext[c.id]||"")+'</textarea>';
}
function boxHtml(c){
  var open=S.boxOpen[c.id],a=arr(c.acts).filter(function(x){return x.box==="open"&&x.a===open})[0];if(!a)return "";
  var id=esc(c.id);
  return '<label class="boxq" for="bx-'+id+'">'+esc(a.label)+'</label><textarea id="bx-'+id+'" data-room="'+id+'" data-v="ctext" placeholder="Write it as you would say it. Your words go to Claude as you write them.">'+esc(S.ctext[c.id]||"")+'</textarea><div class="acts"><button class="done" data-act="cardact" data-id="'+id+'" data-a="'+esc(a.a)+'" data-send="1">Send to Claude</button></div>';
}
/* ══════════ build 36.2: the story a man offered (ruled Nov 10, 2026): the whole piece, the five checks, Publish · Not now ══════════ */
function storyTicks(c){var t=arr(S.sChk[c.id]),n=arr(c.story&&c.story.checks);return {t:t,all:n.length>0&&n.every(function(_,i){return t[i]===true})}}
function storyHtml(c){
  var s=c.story,id=esc(c.id),h='<div class="from"'+srcF("the Testimony Offered sheet: the whole piece as he offered it (read by the script from the responses sheet; his words are drawn as he wrote them)")+'><p class="lk">'+nb(esc(rt(s.title||"His story")))+'</p>';
  if(!s.ok)return h+'<p class="help">'+esc(rt(s.msg||"The desk could not read his story just now. It tries again at the next run."))+'</p></div>';
  h+='<p class="help">'+esc(rt(s.byline||""))+'</p>';
  if(s.long)h+='<p class="help">This story is longer than the card can show, and a story is published only after the whole piece is read. Our team reads it in the review email.</p>';
  h+=arr(s.paras).map(function(p){return '<p class="why" style="margin:0 0 12px">'+String(p).split("\n").map(function(l){return esc(l)}).join("<br>")+'</p>'}).join("")+'</div>';
  if(s.canPublish){
    var tk=storyTicks(c);
    h+='<div class="from"'+srcF("the safeguarding checks (ruled Sept 8, 2026): Publish stays off until all five are ticked, and the script checks them again before it writes anything")+'><p class="lk">Before it is published</p><ul class="fl">'+arr(s.checks).map(function(t,i){return '<li><label><input type="checkbox" id="sc-'+id+'-'+i+'" data-act="schk" data-id="'+id+'" data-i="'+i+'"'+(tk.t[i]===true?' checked':'')+'> '+esc(rt(t))+'</label></li>'}).join("")+'</ul>'+(tk.all?'':'<p class="help">Publish stays off until all five are ticked.</p>')+'</div>';
  }
  if(S.sNo[c.id]||!s.canPublish)h+='<p class="boxq">What should happen to it?</p><p class="help"><b>Hold it:</b> our team reads it together before anything else is decided. It stays private.</p><p class="help"><b>Decline it:</b> it stays his and nothing is published. Nothing is sent to him.</p>';
  return h;
}
function lineSay(l){return l.verb==="Rename"?'Rename “'+l.concern+'” to “'+l.to+'”':l.verb+' “'+l.concern+'”'}
function linesHtml(c){
  var id=esc(c.id);
  return '<div class="from"'+srcF("the Concerns tab of the Guide sheet: one line per suggestion; Accept writes it at once")+'><p class="lk">'+nb("The suggestions")+'</p><ul class="fl">'+arr(c.clines).map(function(l,i){
    var st=l.state==="accept"?"Accepted.":l.state==="aside"?"Set aside.":"";
    var btns=st?'<b>'+st+'</b>'+(l.undo?' <button class="done" data-act="cline" data-id="'+id+'" data-i="'+i+'" data-a="undo">Undo</button>':''):'<button class="done" data-act="cline" data-id="'+id+'" data-i="'+i+'" data-a="accept">Accept</button><button class="done" data-act="cline" data-id="'+id+'" data-i="'+i+'" data-a="aside">Set aside</button>';
    return '<li><b>'+esc(lineSay(l))+'</b> '+esc(rt(l.why))+'<div class="acts">'+btns+'</div></li>';
  }).join("")+'</ul></div>';
}
function replaceCard(card){[FEED,FACR].forEach(function(R){if(!R||!Array.isArray(R.actions))return;R.actions=R.actions.map(function(a){return a&&a.key===card.key?card:a})})}
function pressKeep(c,ac){
  if(S.cbusy[c.id])return;S.cbusy[c.id]=1;toast("Writing words. This takes about half a minute.");render(true);
  act({action:"card_act",actionKey:c.id,act:ac.a},{ok:function(r){S.cbusy[c.id]=0;if(r&&r.card)replaceCard(r.card);render(true);toast("Words written. Read them on the card.")},fail:function(){S.cbusy[c.id]=0;render(true)}});
}
function pressLine(c,i,a){
  var l=arr(c.clines)[i];if(!l)return;var was=l.state,wasU=l.undo;
  l.state=a==="undo"?"":a;l.undo=a!=="undo";render(true);
  act({action:"card_act",actionKey:c.id,act:a==="undo"?"lineundo":a,line:i},{idem:true,
    ok:function(r){
      if(r&&r.closed){var rec=pressStart(c,{word:r.did||"Said done",went:r.went||""});render(true,"#res-"+rec.lane);pressToast(rec,(r.did||"Said done")+".");pressSaid(rec,r)}
      else render(true);
    },
    fail:function(){l.state=was;l.undo=wasU;render(true)}});
}
function cardFrom(c){
  var f=c.from;if(!f)return "";
  if(c.read&&S.open["from:"+c.id]===undefined)S.open["from:"+c.id]=true; /* build 36.1: his words open on the card */
  var pg=f.page&&f.page.key?f.page:null,s=f.src||"the record this card came from";
  return revS("from:"+c.id,"Where this came from",'<div class="from"'+srcF(s)+'>'+(f.head?'<p class="lk">'+nb(esc(rt(f.head)))+'</p>':'')+'<ul class="fl">'+arr(f.lines).map(function(l,i){return '<li'+(i===f.hi?' class="hi"':'')+'>'+tie(oneVoice(rt(l)))+'</li>'}).join("")+'</ul>'+(pg?'<div class="walks">'+walk("cpage",pageLabel(pg),' data-key="'+esc(pg.key)+'" data-t="'+esc(pg.title||"")+'"')+'</div>':'')+'</div>',s);
}
function notesSheet(r){
  /* one audience line, true to who is reading: our team reads "The whole Week 4 page"; a facilitator reads his own */
  var team=!fac(),m=/Week\s+\d+/i.exec(String(r.title||"")),wkT=m?m[0].replace(/^week/i,"Week"):"";
  var head=team?pageLabel({title:r.title}):(wkT?wkT+" Page":rt(r.title||"The Page"));
  var aud=team?"What the facilitator reads, in full":"The facilitator’s notes from the night, in full";
  var back='<div class="walks">'+walkB("back","Back to "+esc(viewName()))+'</div>';
  var h='<div'+srcF("the facilitator’s page for the room, drawn section by section (action notes_page); the Google Doc itself opens only from The Record")+'><p class="lk">'+esc(head)+'</p><p class="help">'+nb(esc(r.when||""))+" · "+aud+"</p>";
  arr(r.secs).forEach(function(s){h+='<h3 class="sh">'+esc(s[0])+'</h3><ul class="fl">'+arr(s[1]).map(function(l){return '<li>'+tie(oneVoice(rt(l)))+'</li>'}).join("")+'</ul>'});
  if(team)h+='<div class="walks">'+walk("tab","The Google Doc, in The Record",' data-tab="record"')+'</div>';
  return h+'<p class="help">Written from the room’s Zoom notes for training and course development. First names only; what a man shared about himself stays in the room.</p>'+back+'</div>';
}
function stepRow(lk,pos,total){
  if(total<2)return "";
  return '<div class="step"'+srcF("one card at a time, Back and Next (John, Nov 4: “we need to be able to move forward and back”)")+'><span class="of" id="of-'+lk+'">Card '+(pos+1)+' of '+total+'</span><span class="nav">'+(pos>0?walkB("cprev","Back",' data-l="'+lk+'"'):"")+(pos<total-1?walk("cnext","Next",' data-l="'+lk+'"'):"")+'</span></div>';
}
function resHtml(lk){
  var r=S.res[lk];if(!r)return "";
  if(r.undone)return '<p class="kept res-u" tabindex="-1" id="res-'+lk+'"'+srcF("Undo puts the card back where it was; Reopen sets its row back to open on every record it touched (action undo)")+'><b>'+(r.reopen?"Reopened.":"Undone.")+'</b> '+tie(r.title)+' is back on the desk, '+(r.after?'after the waiting '+r.after:'first in line')+'.'+(r.note?' '+esc(r.note):'')+(r.after?' '+walk("seeat","See its card",' data-id="'+esc(r.id)+'"'):'')+'</p>';
  var left=Date.parse(r.until)-nowMs()>0,go=r.moves&&r.mk&&lk==="gcards"&&!r.dropped;
  return '<div class="res" tabindex="-1" id="res-'+lk+'"'+srcF("the press: what it did and where it went (John, Nov 4: “understand the resolution, where it applied the action we desired”); Undo for ten minutes, held by the record (action undo)")+'><p class="lk">'+esc(r.word)+' · '+nb(esc(clockOf(r.at))+' Central')+(r.by?' · by '+esc(r.by):'')+'</p><p class="rn">'+tie(r.title||cTitle(r.card))+'</p>'+(r.text?'<p class="reply"'+srcF("the words you sent, kept with their question")+'>“'+esc(r.text)+'”</p>':'')+(r.went?'<p class="rw"><b>Where it went: </b>'+esc(say30(r.went))+'</p>':'')+(left||go?'<div class="acts">'+(left?'<button class="done" data-act="cundo" data-id="'+esc(r.id)+'" data-l="'+lk+'">Undo</button><span class="ut">Undo stays until '+nb(esc(clock12(r.until)))+'.</span>':'')+(go?walk("cmoves","See it in The Moves",' data-k="'+esc(r.mk)+'"'):'')+'</div>':'')+'</div>';
}
function rowOf(d){var c=cardOf(d);if(c.ws)c.wsDone=true;if(d.pask)c.pask=d.pask;if(d.psig)c.psig=d.psig;return {text:d.text||"",id:d.key,lane:GROWKIND[kindOf(d.key)]?"gcards":"lane",word:d.word||"Said done",went:(fac()&&d.fwent?d.fwent:d.went)||"",at:d.doneAt||"",by:d.by||"",until:d.undoUntil||"",canReopen:d.canReopen!==false,raw:d,card:c,moves:c.moves,mk:c.moveKey||""}}
/* every press this visit, then the record's own done rows from the last seven days (feed.doneWeek), newest first */
function doneRowsAll(){
  var out=[],seen={};
  Object.keys(S.pressed).forEach(function(k){if(!S.undone[k]){seen[k]=1;out.push(S.pressed[k])}});
  [FEED,FACR].forEach(function(R){arr(R&&R.doneWeek).forEach(function(d){if(!d||!d.key||seen[d.key]||S.undone[d.key])return;seen[d.key]=1;out.push(rowOf(d))})});
  return out.sort(function(a,b){return (Date.parse(b.at)||0)-(Date.parse(a.at)||0)});
}
function doneRows(lk){
  var rows=doneRowsAll();
  if(lk==="flane"){var me=firstName((WHO&&WHO.name)||"").toLowerCase();return rows.filter(function(r){var o=firstName(r.raw&&r.raw.owner).toLowerCase();return !me||!o||o===me})}
  return rows.filter(function(r){return (lk==="gcards")===!!GROWKIND[kindOf(r.id)]});
}
function doneList(lk){
  var R=doneRows(lk);if(!R.length)return "";
  var rows=R.map(function(r){
    var left=Date.parse(r.until)-nowMs()>0,btn=left?["cundo","Undo"]:r.canReopen?["creopen","Reopen"]:null;
    return '<li class="dl" id="d-'+esc(r.id)+'"'+srcF("the Actions tab: status done, done at, done by (this week's presses); Reopen sets the row back to open")+'><span class="dlt">'+(r.word==="Sent"?'<b>Sent</b>':esc(r.word))+' · '+nb(esc(clockOf(r.at)))+(r.by?' · by '+esc(r.by):'')+'</span><span class="dln">'+tie(cTitle(r.card))+'</span>'+(r.text?'<span class="dlw"'+srcF("the words kept with the partner’s question or need on the Partner Signals tab")+'>“'+esc(r.text)+'”</span>':'')+(r.went?'<span class="dlw">'+esc(say30(r.went))+'</span>':'')+'<span class="dla">'+(btn?'<button class="rev" data-act="'+btn[0]+'" data-id="'+esc(r.id)+'" data-l="'+lk+'"><span>'+btn[1]+'</span></button>':'')+'</span></li>';
  }).join("");
  return revS("done:"+lk,"Done this week · "+R.length,'<ul class="vl">'+rows+'</ul>',"the Actions tab’s done rows from the last seven days and this visit’s presses; Undo inside ten minutes, Reopen after");
}
function everyList(lk,L,pos){
  if(L.length<2)return "";
  return revS("every:"+lk,"Every card · "+L.length,'<ul class="vl">'+L.map(function(c,i){return '<li class="b"><button class="vlb3" data-act="cgoto" data-l="'+lk+'" data-i="'+i+'"'+(i===pos?' aria-current="true"':'')+'><span class="vt">'+tie(cTitle(c))+'</span><span class="vs">'+(i===pos?"Showing now · ":"")+(ownerOf(c)&&!fac()?"For "+esc(ownerOf(c))+" · ":"")+esc(c.kind)+(c.when?" · "+nb(esc(c.when)):"")+'</span></button></li>'}).join("")+'</ul>',"every open card, in the order they are shown; pressing one shows it and closes this list");
}
function footLists(lk,L,pos){var e=everyList(lk,L,pos),d=doneList(lk);return e||d?'<div class="foot3">'+e+d+'</div>':""}
function lane(cards,emptyLine,who){
  var lk=laneKeyOf(who);
  var all=cards.filter(function(c){return !S.done[c.id]});
  var team=who!=="fac"&&!fac();
  var L=team?ownF(all):all;
  var h=down()?downRow():'';
  if(team&&all.length)h+=ownersRow(all);
  h+=resHtml(lk);
  if(!L.length&&!S.loaded&&!S.down)return h+'<p class="empty" tabindex="-1" id="laneEmpty"'+src("the first read of the record has not answered yet")+'>Reading the record…</p>';
  if(!L.length) return h+'<p class="empty" tabindex="-1" id="laneEmpty"'+src(all.length?"the cards, one person’s (desk.js: Nothing for … right now)":"the cards, when every one is done")+'>'+(all.length?'Nothing for '+S.owner+' right now. The rest belongs to '+otherOwner()+'.':emptyLine)+'</p>'+footLists(lk,[],0);
  L=frontFirst(backFirst(L,S.back),S.front);
  if(S.goto&&S.goto.l===lk){var gi=-1;L.forEach(function(c,i){if(c.id===S.goto.id)gi=i});if(gi>=0)S.idx[lk]=gi;S.goto=null}
  var pos=Math.max(0,Math.min(S.idx[lk]||0,L.length-1));S.idx[lk]=pos;
  return h+(S.seeFrom&&lk==="gcards"&&L[pos].id===S.seeFrom?'<div class="walks">'+walkB("seeback","Back to Signals Waiting")+'</div>':'')+stepRow(lk,pos,L.length)+'<div class="dlist">'+cardHtml(L[pos],true)+'</div>'+footLists(lk,L,pos);
}

/* ══════════ build 32: the Workshop on Your Desk (build 31's cards, drawn in build 30's card standard) ══════════
   No new view. A partner's question and the weekday update card are cards in Today's lane (a waiting partner first), so they take the card standard whole: Card N of M, Back and Next,
   Every card, a press that says where it went, Undo for ten minutes, Done this week. A partner's need is a signal in Signals Waiting (Add · Set aside); the Through a Partner row shows what partners see.
   Their data: X.partners (admins only; the script's partnersX_). A stale answer without X.partners draws exactly as before. */
var PRESS_MS = 10 * 6e4, PS_WHYS = { covered: "Covered", notours: "Not ours", notnow: "Not now" };
function PX() { return (X && X.partners) || null; }
function isoOf(ms) { return new Date(ms).toISOString(); }
function nextWeekday(day) { var d = addDays(day, 1), w = parseDay(d); while (w && (w.getDay() === 0 || w.getDay() === 6)) { d = addDays(d, 1); w = parseDay(d); } return d; }

/* ── the weekday update card: the lines are the card row's "because" cell, one per line, "<part>: <text>" ── */
var WS_WHY = "These went live on our site since the last update. Each line is what a partner reads on What’s New, word for word. Leave out any line that isn’t right.";
function wsLines(because) {
  return String(because || "").split(/\n/).map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) { var m = /^([^:]{1,40}):\s*(.+)$/.exec(l); return m ? { part: m[1], text: rt(m[2]) } : { part: "", text: rt(l) }; });
}
function wsOut(id) { return S.wsOut[id] || (S.wsOut[id] = {}); }
function wsKept(c) { return c.ws.filter(function (l, i) { return !wsOut(c.id)[i]; }).length; }
function wsTitle(n) { return n ? "Send " + (n === 1 ? "one update" : count(n) + " updates") + " to the Workshop" : "Nothing to send: every line is left out"; }
function wsWent(n) {
  var nd = longDay(nextWeekday(todayStr()));
  return n ? "The card’s row keeps the " + (n === 1 ? "one line" : count(n) + " lines") + " you left in and is marked done. On " + nd + " at 7:15 AM, What’s New shows " + (n === 1 ? "it" : "them") + " to every partner." : "The card’s row is marked done with no lines. Nothing reaches What’s New.";
}
/* the lines between why and the one act, for the update card: each line a partner would read, with Leave it out · Put it back, then what happens */
function wsMid(c) {
  var k = wsKept(c), nd = longDay(nextWeekday(todayStr()));
  var h = '<div class="rlines"' + srcF("the card row’s because cell, one line each (rule WS1), as a partner reads it on What’s New") + '><p class="lk">What a Partner Reads</p>' + c.ws.map(function (l, i) {
    var o = !!wsOut(c.id)[i];
    return '<div class="wrow' + (o ? " out" : "") + '"><span class="wl">' + esc(l.part || "Update") + (o ? " · left out" : "") + '</span><span class="wn">' + esc(l.text) + '</span><button class="rev" data-act="lineout" data-id="' + esc(c.id) + '" data-i="' + i + '" aria-pressed="' + o + '"><span>' + (o ? "Put it back" : "Leave it out") + '</span></button></div>';
  }).join("") + '</div>';
  return h + '<p class="then"' + srcF("the card’s fourth line, written from what the press writes") + '>' + (k ? '<b>Changes it: </b>Send keeps the lines you leave in on the card’s row and marks it done. On ' + nd + ', the 7:15 AM update puts them on What’s New, dated that morning. A line you leave out never reaches a partner.' : '<b>Records it: </b>Drop closes the card. Nothing reaches What’s New. Tomorrow’s card lists only what goes live after today.') + '</p>';
}

/* ── a partner's question: a card of the standard, its body the Answer shape (a question over a writing area, one button named for the act) ── */
function paskOf(a) {
  var P = PX(), who = a.who ? rt(a.who) : "a partner", day = a.day || "", part = a.part || "";
  var words = rt(a.words || "");
  return { id: "pask:" + a.item, kind: "A Partner Asked", title: "Answer " + who + "’s question", state: "", when: day ? "Waiting since " + shortDay(day) : "", serves: ("Serves " + who).replace(/ /g, " "),
    why: "They asked on the Workshop" + (part ? " (" + part + ")" : "") + ": “" + words + "”",
    then: "Changes it: Send keeps your answer with their question on the Partner Signals tab. At 7:15 AM the next weekday it shows under their question on their own Listening view, which only they see, and the card leaves every desk.",
    doneLabel: "Send", word: "Changed Partner Signals", went: "Your answer is kept with their question on the Partner Signals tab. At 7:15 AM the next weekday it shows under their question on their own Listening view, which only they see.",
    from: { head: "From the Partner Signals tab", lines: [(a.date || "") + " · " + (part || "Ask our team") + " · Ask", "“" + words + "”", "Who: " + (a.who ? who : "Name not given")], hi: 1, src: "Research Engine, Partner Signals tab, drawn on the desk" },
    owner: (P && P.owner) || "", firstSeen: day, man: 1, email: "", pask: { item: a.item, who: who, words: words, part: part, date: a.date, day: day },
    src: "Research Engine, Partner Signals tab: date · part · answer · words · who · item (answer Ask, our answer empty)" };
}
function paskCards() { var P = PX(); return P ? arr(P.asks).filter(function (a) { return a && a.item && !S.done["pask:" + a.item]; }).map(paskOf) : []; }
function paskBody(c) {
  var p = c.pask, idq = slug(p.item);
  return '<div class="ansbx"' + srcF("an Answer: a question over a writing area, one button named for the act (AP-SHAPES 1)") + '><label for="ans-' + idq + '">Your answer</label><textarea id="ans-' + idq + '" data-room="' + esc(p.item) + '" data-v="pdraft" placeholder="Write it the way you’d say it to them.">' + esc(S.pdraft[p.item] || "") + '</textarea></div>' +
    '<div class="acts"><button class="done" data-act="pasend" data-item="' + esc(p.item) + '" data-id="' + esc(c.id) + '">Send</button></div>';
}

/* ── a partner's need is a signal: Serves · On our shelf · The answer, Add · Set aside ── */
function psStateWord(s) { var t = String(s || "").trim().toLowerCase(); return t === "live" || t === "early" ? "live" : t === "in build" || t === "starting" ? "build" : t === "planned" ? "plan" : ""; }
function psReplyJs(choice, part, state) {
  var P = String(part || "").trim(), s = psStateWord(state);
  if (choice === "notours") return "This sits outside what we’re building. We’d be glad to talk it through with you.";
  if (choice === "notnow") return "It’s on our list for later, and we’ll come back to it.";
  if (!P || !s) return "";
  if (choice === "add") return s === "live" ? "Thank you. We’re carrying this into the next " + P + " release." : s === "build" ? "Thank you. We’re carrying this into the " + P + " build." : "Thank you. We’re carrying this into the " + P + " plan.";
  if (choice === "covered") return s === "live" ? P + " already does this. You can walk it on The Work." : s === "build" ? P + " is being built to do this. You can follow it on The Work." : P + " is planned to do this. You can follow it on The Work.";
  return "";
}
function psMoveKey(item) { return "own:partner-" + String(item).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70); }
function psNeedsF() {
  var P = PX(); if (!P) return [];
  return arr(P.needs).filter(function (n) { return n && n.item && !S.sig["psig:" + n.item]; }).map(psNeedOf);
}
function psNeedOf(n) {
  var P = PX() || {}, who = n.who ? rt(n.who) : "A partner";
  {
    return { raw: n, whoRaw: n.who || "", day: n.day, id: "psig:" + n.item, partner: 1, item: n.item, who: who, part: n.part, state: n.state, when: n.when, line: n.line, words: n.words, date: n.date, lab: "From Partners · " + n.part + (n.day ? " · " + shortDay(n.day) : ""), nm: "“" + rt(n.words) + "”", why: "", st: "", kind: "partner", owner: P.owner || "",
      s: "Research Engine, Partner Signals tab (answer Need) · the part’s state from the Workshop parts tab" };
  }
}
function psigRow(c) {
  var mode = S.sigMode[c.id] || "", sw = psStateWord(c.state), idq = esc(c.id);
  var shelf = c.part + (c.state ? " · " + c.state + (c.when ? " · " + c.when : "") + "." + (c.line ? " " + c.line : "") : " · its state is not on the record yet.");
  var intent = sw === "live" ? c.part + " is already live, so the answer is to carry the need into its next release." : sw === "build" ? "The part is still in build, so the answer is to carry the need into its build." : sw === "plan" ? "The part is planned, so the answer is to carry the need into its plan." : c.part + "’s state is not on the record yet, so the reply to the partner can’t be written. Not ours and Not now still work.";
  var q = sw === "live" ? "Carry it into the next " + c.part + " release?" : "Carry it into the " + c.part + (sw === "plan" ? " plan" : " build") + "?";
  var reply = function (k) { var t = psReplyJs(k, c.part, c.state); return t ? '<p class="reply"' + src("the line the partner reads back on their own Listening view") + '>“' + esc(t) + '”</p>' : ""; };
  var h = '<div class="drow card3" id="sg-' + idq + '"' + src(c.s) + '><span class="lab">' + esc(c.lab) + '</span><span class="nm" tabindex="-1">' + tie(c.nm) + '</span><p class="why">' + esc(c.who) + ' wrote this on the Workshop.</p>';
  h += '<dl class="learn"><dt>Serves</dt><dd>' + esc(c.who) + ', and every partner who walks ' + esc(c.part) + '.</dd><dt>On our shelf</dt><dd>' + esc(shelf) + '</dd><dt>The answer</dt><dd>' + esc(intent) + '</dd></dl>';
  if (mode === "aside") {
    h += '<p class="boxq">Why set it aside?</p><div class="choices3">' + [["covered", "Covered"], ["notours", "Not ours"], ["notnow", "Not now"]].filter(function (x) { return x[0] !== "covered" || sw; }).map(function (x) { return '<button class="choice left" data-act="pswhy" data-id="' + idq + '" data-v="' + x[0] + '">' + x[1] + '</button>'; }).join("") + '</div>';
    h += '<p class="then"><b>Where it lands: </b>The Moves keeps it with your reason. Not now brings it back ' + longDay(notNowDay()) + '. At 7:15 AM the next weekday the partner reads one line on their own Listening view.' + (sw ? ' Covered:</p>' + reply("covered") + '<p class="then">Not ours:</p>' : ' Not ours:</p>') + reply("notours") + '<p class="then">Not now:</p>' + reply("notnow");
    h += '<div class="acts"><button class="done" data-act="pscancel" data-id="' + idq + '">Back</button></div>';
  } else {
    h += '<p class="boxq">' + esc(q) + '</p><div class="acts"><button class="done" data-act="psadd" data-id="' + idq + '"' + (sw ? "" : " disabled") + '>Add</button><button class="done" data-act="psaside" data-id="' + idq + '">Set aside</button></div>';
    h += '<p class="then"><b>Where it lands: </b>Add puts a card in For Us to Do, above, with a day it is due and a day it is checked' + (sw ? '. At 7:15 AM the next weekday the partner reads on their own Listening view:</p>' + reply("add") + '<p class="then">Set aside asks for a reason, and The Moves keeps it.' : '. Set aside asks for a reason, and The Moves keeps it.');
    h += '</p>';
  }
  h += rev("from:" + c.id, "Where this came from", '<div class="from"' + src("Research Engine, Partner Signals tab, drawn on the desk") + '><p class="lk">From the Partner Signals tab</p><ul class="fl"><li>' + esc(c.date) + ' · ' + esc(c.part) + ' · Need</li><li class="hi">“' + esc(c.words) + '”</li><li>Who: ' + esc(c.whoRaw ? c.who : "Name not given") + '</li></ul></div>');
  return h + '</div>';
}
function sresHtml() {
  var r = S.sres; if (!r) return "";
  if (r.undone) return '<p class="kept res-u" tabindex="-1" id="res-sig"' + src("Undo takes the press back: the reply line is cleared on the Partner Signals tab and the move is taken off the Moves tab (action partner_undo)") + '><b>' + (r.reopen ? "Reopened." : "Undone.") + '</b> ' + esc(r.title || "A partner’s need") + ' is back in Signals Waiting, first in line.</p>';
  var add = r.choice === "add", live = nowMs() - r.at < PRESS_MS;
  return '<div class="res" tabindex="-1" id="res-sig"' + src("Moves tab: a new row, or the row set aside with its reason; every count on this view changes at once") + '><p class="lk">Changed The Moves · ' + nb(esc(clock12(isoOf(r.at))) + ' Central') + ' · by ' + esc(r.by) + '</p><p class="rn">' + esc(r.title) + '</p><p class="rw"><b>Where it went: </b>' + esc(r.went) + '</p>' + (r.reply ? '<p class="reply"' + src("the line the partner reads back on their own Listening view") + '>“' + esc(r.reply) + '”</p>' : "") + '<div class="acts">' + (live ? '<button class="done" data-act="psundo" data-id="' + esc(r.id) + '">Undo</button><span class="ut">Undo stays until ' + nb(esc(clock12(isoOf(r.at + PRESS_MS)))) + '.</span>' : "") + (r.cardId ? walk("seecard", "See its card", ' data-id="' + esc(r.cardId) + '"') : "") + '</div></div>';
}
function pushMove(m) { var L = X && Array.isArray(X.moves) ? X.moves : (FEED && FEED.moves && Array.isArray(FEED.moves.taken) ? FEED.moves.taken : null); if (L) { L.push(m); dirty(); } }
function dropMove(key) { [X && X.moves, FEED && FEED.moves && FEED.moves.taken].forEach(function (L) { if (Array.isArray(L)) for (var i = L.length - 1; i >= 0; i--) if (L[i].key === key) L.splice(i, 1); }); dirty(); }
function psPress(id, choice) {
  var c = sigById(id); if (!c || !c.partner) return;
  var add = choice === "add", reply = psReplyJs(choice, c.part, c.state), moveKey = psMoveKey(c.item);
  S.sig[id] = { act: add ? "pmove" : "paside", why: choice, c: c }; S.sigMode[id] = ""; S.sigLast = "";
  S.sres = { id: id, choice: choice, at: nowMs(), by: first(), title: "A partner’s need on " + c.part, reply: reply, moveKey: moveKey, c: c };
  var tail = " At 7:15 AM the next weekday the partner reads on their own Listening view" + (reply ? ":" : ".");
  S.sres.went = (add ? "Added. The Moves has it, Open. Its card is in For Us to Do, above." : "Set aside · " + PS_WHYS[choice] + ". The Moves keeps it with your reason." + (choice === "notnow" ? " It comes back " + longDay(notNowDay()) + "." : "")) + tail;
  psDoneAdd(psDoneEntry(id, c, choice, S.sres));
  dirty(); render(true, "#res-sig");
  act({ action: "partner_need", item: c.item, choice: choice }, { fail: function () { delete S.sig[id]; S.sres = null; psDoneDrop(id); dirty(); render(true); },
    ok: function (r) {
      if (!r || !S.sres || S.sres.id !== id) return;
      if (r.already) { toast("Already answered. It is off the list."); return; }
      if (r.reply) S.sres.reply = r.reply;
      if (add) { S.sres.went = "The Moves has it, Open" + (r.owner ? ", for " + r.owner : "") + (r.due ? ", due " + longDay(r.due) : "") + (r.check ? ", checked " + longDay(r.check) : "") + ". Its card is in For Us to Do, above." + tail; if (r.card) { putBack(r.card); if (r.card.key) S.sres.cardId = r.card.key; } pushMove({ key: r.moveKey || moveKey, signal: "A partner’s need on " + c.part + ": “" + c.words + "”", from: "Partners · " + c.part, move: "partner need", owner: r.owner || c.owner, due: r.due || "", check: r.check || "", status: "taken" }); }
      if (r.done) psDoneAdd(r.done);
      render(true);
    } });
}
/* a press on a partner's need is in Done this week at once (the script keeps it, so it is there after a reload too) */
function psDoneEntry(id, c, choice, rec) {
  var iso = new Date(rec.at).toISOString(), add = choice === "add";
  return { key: id, owner: c.owner || "", do: rec.title, for: "", because: "", link: "", firstSeen: iso, rule: "", title: rec.title, kind: "A Partner’s Need", word: "Changed The Moves", went: (add ? "Added. " : "Set aside · " + PS_WHYS[choice] + ". ") + rec.went, text: rec.reply || "", doneAt: iso, by: rec.by, undoUntil: new Date(rec.at + PRESS_MS).toISOString(), canReopen: !add,
    psig: { item: c.item, part: c.part, state: c.state, when: c.when, line: c.line, words: c.words, who: c.whoRaw || "", date: c.date, day: c.day || "", choice: choice, moveKey: rec.moveKey } };
}
function psDoneAdd(e) { if (!FEED) return; FEED.doneWeek = [e].concat(arr(FEED.doneWeek).filter(function (d) { return d.key !== e.key; })); delete S.undone[e.key]; dirty(); }
function psDoneDrop(key) { if (FEED && Array.isArray(FEED.doneWeek)) FEED.doneWeek = FEED.doneWeek.filter(function (d) { return d.key !== key; }); dirty(); }
function sigPsUndo(id, mode) {
  var d0 = S.sig[id], c = d0 && d0.c, dn = arr(FEED && FEED.doneWeek).filter(function (d) { return d.key === id; })[0];
  if (!c && dn && dn.psig) c = psNeedOf({ item: dn.psig.item, part: dn.psig.part, state: dn.psig.state, when: dn.psig.when, line: dn.psig.line, words: dn.psig.words, who: dn.psig.who, date: dn.psig.date, day: dn.psig.day });
  if (!c) return;
  var P = PX(); if (P && !arr(P.needs).some(function (n) { return n.item === c.item; })) { P.needs = arr(P.needs).concat([c.raw]); (P.back = P.back || {})[c.item] = 1; }
  delete S.sig[id]; S.sigFront = id; S.sigPos = 0; S.sres = { undone: true, reopen: mode === "reopen", id: id, title: "A partner’s need on " + c.part }; S.undone[id] = new Date(nowMs()).toISOString(); dropMove(psMoveKey(c.item)); dropCard("move:" + psMoveKey(c.item)); dirty(); render(true, "#res-sig");
  act({ action: "partner_undo", item: c.item }, { fail: function () { S.sig[id] = d0; S.sres = null; delete S.undone[id]; dirty(); render(true); } });
}

/* ── Through a Partner: what partners see and say, behind a small reveal ── */
function partnerLine() {
  var P = PX(); if (!P) return "";
  var r = arr(P.rels).length, p = arr(P.parts).length, a = asksLeft(), n = needsLeft(), parts = p ? count(p) + (p === 1 ? " part" : " parts") + " and where each stands" : "";
  if (!P.read) return p ? "On the Workshop, partners see " + parts + "." : "The desk can’t read the Workshop right now.";
  var s;
  if (p) s = "On the Workshop, partners see " + parts + (r ? ", and " + (r === 1 ? "one update" : count(r) + " updates") + " on What’s New." : "; nothing is on What’s New yet.");
  else s = r ? "On the Workshop, partners see " + (r === 1 ? "one update" : count(r) + " updates") + " on What’s New." : "On the Workshop, partners see nothing yet.";
  if (a || n) s += " " + (a ? (a === 1 ? "One question waits" : Count(a) + " questions wait") + " for our answer" : "") + (a && n ? ", and " : "") + (n ? (n === 1 ? "one need waits" : count(n) + " needs wait") + " in Signals Waiting" : "") + ".";
  return s;
}
/* when the Partner Signals tab cannot be read the desk says so once, and prints no count and no "none" */
function partnerCantRead(P) {
  var parts = arr(P.parts), h = "";
  if (parts.length) h += '<p class="subk"' + src("Research Engine, Workshop parts tab (name · state · when · line)") + '>Where Parts Stand</p>' + partsStand(parts);
  h += '<p class="help"' + src("the Partner Signals tab could not be read; nothing is counted from it") + '>The desk can’t read partners’ answers right now.</p><div class="walks">' + walk("inrec", "Partner Signals, in The Record", ' data-u="' + esc(LINKS.research || "") + '"') + '</div>';
  return rev("pseen", "What partners see and say", '<div class="pseen">' + h + '</div>');
}
/* the counts on the Through a Partner row and in its reveal come from the same state the presses change: a question answered or taken back, a need added, set aside, undone or reopened */
function asksLeft() { return paskCards().length; }
function needsLeft() { return psNeedsF().length; }
function needsAnsweredNow() {
  var P = PX(), d = Number(P && P.stats && P.stats.needsAnswered) || 0, back = (P && P.back) || {};
  arr(P && P.needs).forEach(function (n) { var pressed = !!S.sig["psig:" + n.item]; if (back[n.item]) { if (!pressed) d--; } else if (pressed) d++; });
  return Math.max(0, d);
}
/* the Partner Signals tab could not be read: Signals Waiting says so once, with a way to the tab in The Record (the Research Engine row holds it) */
function sigCantRead() { var P = PX(); return !!P && !P.read; }
function sigCantHtml() { return '<p class="help" id="sigCant"' + src("the Partner Signals tab could not be read; no partner’s need is counted or shown from it") + '>Partners’ needs can’t be read right now.</p><div class="walks">' + walk("inrec", "Partner Signals, in The Record", ' data-u="' + esc(LINKS.research || "") + '"') + '</div>'; }
/* Where Parts Stand: one line to a state (Live: Question, Story, …), every part kept with its state and the time it gives */
function partsStand(parts) {
  var order = ["live", "early", "starting", "in build", "planned"], g = {}, keys = [];
  arr(parts).forEach(function (q) { var s = String(q.state || "").trim() || "State not on the record", k = s.toLowerCase(); if (!g[k]) { g[k] = { s: s, L: [] }; keys.push(k); } g[k].L.push(esc(q.name) + (q.when ? " (" + esc(q.when) + ")" : "")); });
  keys.sort(function (a, b) { var x = order.indexOf(a), y = order.indexOf(b); return (x < 0 ? 9 : x) - (y < 0 ? 9 : y); });
  return '<dl class="stl"' + src("Research Engine, Workshop parts tab") + '>' + keys.map(function (k) { return "<dt>" + esc(g[k].s) + "</dt><dd>" + g[k].L.join(", ") + "</dd>"; }).join("") + "</dl>";
}
function partnerReveal() {
  var P = PX(); if (!P) return "";
  if (!P.read) return partnerCantRead(P);
  var rel = arr(P.rels), parts = arr(P.parts), st = P.stats || {}, use = st.use || {}, h = "";
  h += '<p class="subk"' + src("Research Engine, Workshop releases tab (date · part · text)") + '>On What’s New</p>' + (rel.length ? '<div' + src("Research Engine, Workshop releases tab") + '>' + rel.slice(0, 6).map(function (r) { return '<div class="relr"><span class="lab">' + esc(r.date) + ' · ' + esc(r.part) + '</span><span class="nm">' + esc(r.text) + '</span></div>'; }).join("") + '</div>' : '<p class="help">Nothing is on What’s New yet.</p>');
  h += '<p class="subk"' + src("Research Engine, Workshop parts tab (name · state · when · line)") + '>Where Parts Stand</p>' + (parts.length ? partsStand(parts) : '<p class="help">The parts and their states are not on the record yet. The weekday update keeps them there.</p>');
  var us = Object.keys(use).map(function (k) {
    var who = arr(P.uses).filter(function (u) { return u.part === k; }).slice(0, 6).map(function (u) { return esc(u.who ? rt(u.who) : "Name not given") + ": " + esc(u.answer); }).join(" · ");
    return '<dt>' + esc(k) + '</dt><dd>Use ' + (use[k].Use || 0) + ' · Maybe ' + (use[k].Maybe || 0) + ' · Not yet ' + (use[k]["Not yet"] || 0) + (who ? '<small>' + who + '</small>' : "") + '</dd>';
  }).join("");
  var picks = arr(P.starts).slice(0, 5).map(function (q) { return esc(q.who ? rt(q.who) : "Name not given") + ": " + esc(q.offer) + (q.courses ? " · " + esc(q.courses) : ""); }).join(" · ");
  h += '<p class="subk"' + src("Research Engine, Partner Signals tab, counted") + '>What Partners Say</p><dl class="stl"' + src("Research Engine, Partner Signals tab, counted") + '>' + (us || '<dt>Use?</dt><dd>No answers yet<small>Every Live or Early part asks Use, Maybe or Not yet.</small></dd>') +
    '<dt>Questions</dt><dd>' + (asksLeft() ? Count(asksLeft()) + " waiting, in Today" : "None waiting") + '<small>' + (st.asks ? Count(st.asks) + " asked in all." : "None asked yet.") + '</small></dd>' +
    '<dt>Needs</dt><dd>' + (needsLeft() ? Count(needsLeft()) + " waiting, in Signals Waiting" : "None waiting") + '<small>' + (needsAnsweredNow() ? Count(needsAnsweredNow()) + " answered this week." : "None answered this week.") + '</small></dd>' +
    '<dt>Starting</dt><dd>' + (st.starts ? Count(st.starts) + (st.starts === 1 ? " pick" : " picks") : "No Getting Started picks yet") + '<small>' + (picks || "Which ways and whose courses, so we know which walk to make ready first.") + '</small></dd></dl><p class="help">Our team sees each partner’s name with every answer when they give it. Other partners never do.</p>';
  return rev("pseen", "What partners see and say", '<div class="pseen">' + h + '</div>');
}

function factRow(lab,nm,means,walks,s){return '<div class="drow fact"'+src(s||"")+'><span class="lab">'+lab+'</span><span class="nm">'+(/[<&]/.test(nm)?nm:tie(nm))+'</span>'+(means?'<p class="why">'+means+'</p>':'')+(walks?'<div class="walks">'+walks+'</div>':'')+'</div>'}
function askWalk(q){return walk("askfill","Ask about this",' data-q="'+esc(q)+'"')}
function cols(main,side){return '<div class="cols2"><div class="colm">'+main+'</div><div class="side">'+side+'</div></div>'}

function list(a){return a.length<=1?a.join(""):a.slice(0,-1).join(", ")+" and "+a[a.length-1]}
function ansWalk(w){if(!w)return "";if(w[0]==="link")return linkWalk(w[1],w[2]);if(w[0]==="view")return walk("view",w[2],' data-v="'+w[1]+'"');if(w[0]==="tab")return walk("tab",w[2],' data-tab="'+w[1]+'"');if(w[0]==="card")return walk("tocard",w[2],' data-id="'+w[1]+'"');if(w[0]==="make")return S.made[w[1]]?walk("tocard","See its card",' data-id="'+w[1]+'"'):walk("makecard",w[2],' data-id="'+w[1]+'"');return ""}
function askPanel(examples){
  var r=S.ask[S.role],q=S.askq[S.role];
  var h=(WHO&&WHO.canAsk===false?keyNotice():'')+'<div class="ansbox"><label class="t" for="askq">What do you want to know?</label><textarea id="askq" placeholder="'+(fac()?"About your men, your week or what is coming.":"About a man, a room, a page or the plan.")+'">'+esc(q)+'</textarea><button class="btn line" data-act="ask">Ask</button></div>';
  if(r) h+='<div class="answer" tabindex="-1" id="ansOut"'+src(r[0]?"drawn from "+(r[1]||"the desk"):"ap-desk-standard: the question box")+'><p class="lk">The Desk</p>'+(r[0]?'<p>'+esc(r[0])+'</p>'+(r[1]?'<p class="dim2">Read from '+esc(r[1])+'.</p>':'')+(r[2]?'<div class="walks">'+ansWalk(r[2])+'</div>':''):(fac()?'<p>That is outside your room, or not in what the desk reads.</p><div class="walks">'+walk("askteam","Ask our team")+'</div>':'<p>That is not in what the desk reads. Our team can add it to the record.</p>'))+'</div>';
  h+='<div class="walks" style="flex-direction:column;gap:0;margin-top:'+(r?'12px':'6px')+'">'+examples.map(function(e){return walk("askfill",e,' data-q="'+esc(e)+'"')}).join("")+'</div>';
  return panel("ask","Ask the Desk","Answers from the record",h,{src:"ap-desk-standard: the question box"});
}
function recordPanel(rows){var sh=rows.filter(function(r){return isSheet(r[2])});rows=rows.filter(function(r){return !isSheet(r[2])});if(fac())return rows.length?panel("rec","For the Facilitator","This week’s page for your room",'<div class="walks" style="margin-top:0">'+linkWalk0(rows[0][2],"Open this week’s page")+'</div>',{src:"the For the Facilitator folder"}):"";
  var foot=sh.length?'<div class="walks">'+walk("view","Every sheet, in The Record",' data-v="record"')+'</div>':'';
  return panel("rec","The Record","One click to the place",(rows.length?'<div class="dlist">'+rows.map(function(r){return '<div class="drow" style="padding:16px 0 18px"'+src("the record itself")+'><span class="nm" style="font-size:18px;margin:0">'+r[0]+'</span><span class="st">'+r[1]+'</span><div class="walks" style="margin-top:2px">'+linkWalk(r[2],"Open it")+'</div></div>'}).join("")+'</div>':'')+foot,{shut:true,src:"the records the desk reads"})}
function cnt(q,t){return '<button class="cnt" data-act="askgo" data-q="'+esc(q)+'">'+t+'</button>'}
var SIGKINDS=[["page","Page fix"],["search","Article"],["poem","Poem"],["story","Story piece"],["section","Section"],["group","Group"],["oneone","One-on-one"]];
var SIGWHY=[["covered","Covered","It leaves the list; the Moves tab keeps the reason."],["notours","Not ours","It leaves the list; the Moves tab keeps the reason."],["notnow","Not now","It comes back a month on."]];
function sigRow(c){
  var k=S.sigKind[c.id]||c.kind, mode=S.sigMode[c.id]||"";
  var h='<div class="drow" id="sg-'+c.id+'"'+src(c.s)+'><span class="lab">'+c.lab+'</span><span class="nm">'+tie(c.nm)+'</span><p class="why">'+tie(c.why)+'</p><span class="st">'+esc(c.st)+'</span>';
  if(mode==="kind"){
    h+='<p class="boxq">Which move? The desk suggests '+MOVEPLAIN[c.kind]+'.</p><div class="choices">'+SIGKINDS.map(function(x){return '<button class="choice left" data-act="sigkind" data-id="'+c.id+'" data-v="'+x[0]+'" aria-pressed="'+(k===x[0])+'">'+x[1]+'</button>'}).join("")+'</div>';
  }
  if(mode==="aside"){
    h+='<p class="boxq">Why set it aside?</p><div class="choices">'+SIGWHY.map(function(x){return '<button class="choice left" data-act="sigwhy" data-id="'+c.id+'" data-v="'+x[0]+'">'+x[1]+'</button>'}).join("")+'</div><div class="acts"><button class="done" data-act="sigcancel" data-id="'+c.id+'">Keep it</button></div>';
  } else {
    h+=(mode==="kind"?'':'<p class="boxq">Add the move: '+MOVEPLAIN[k]+'?</p>')+'<div class="acts"><button class="btn line" data-act="sigadd" data-id="'+c.id+'">Add</button><button class="done" data-act="sigaside" data-id="'+c.id+'">Set aside</button></div>'+(mode==="kind"?'':'<div class="walks">'+walk("sigother","Other move",' data-id="'+c.id+'"')+'</div>');
  }
  return h+'</div>';
}
function keyNotice(){return '<p class="keyn"'+src("desk.js askMsg: the Ask key notice, its live words · drawn in The record can’t be read")+'>'+(fac()?'The desk cannot answer questions yet.':'The desk cannot answer questions yet: the Claude key is not in the script.')+'</p><div class="walks" style="margin-bottom:10px">'+(fac()?walk("askteam","Ask our team"):linkWalk(SCRIPT_SETTINGS,"Open the script settings"))+'</div>'}

var DESK_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split("?")[0] : ""; return /script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(u) ? u : (window.AP_DESK_URL || "https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec"); })();
var STORE = "apDesk", SEEN = "apDeskSeen", QUEUE_KEY = "apDeskQueue", CHECKED = "apDeskPageCheck";
function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function lsSet(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
/* ── state: what this browser holds on top of the record ── */
var S = { ctext: {}, boxOpen: {}, sChk: {}, sNo: {}, cbusy: {}, front: "", relOv: {}, after: {}, afterLine: {}, afterKept: {}, swapped: false, made: {}, role: "team", view: { team: "today", fac: "week" }, done: {}, doneAt: {}, sent: {}, shut: {}, open: {}, ask: { team: null, fac: null }, askq: { team: "", fac: "" }, oneAsk: {}, oneKept: {}, find: "", notice: "email", askSent: false, askErr: "", sk: "", src: false, sig: {}, sigKind: {}, sigMode: {}, sigLast: "", owner: "all", mail: {}, sends: [], notes: {}, noteKept: {}, handEdit: {}, words: {}, moves: {}, movesAns: {}, handled: {}, names: {}, nameOpen: false, nameDraft: "", gate: "signin", gateLine: "", code: "", codeErr: "", refreshN: 0, sigFront: "", roomAsk: {}, linkArt: 0, sigBack: {}, inplace: "", recFrom: "", inSheet: false, firstVisit: false, down: false, clock0: 0, read0: 0, loaded: false, ansCache: {}, ansOpen: "", practice: false, line: "", auto: {}, res: {}, idx: {}, pressed: {}, undone: {}, hiMove: "", sres: null, pdraft: {}, wsOut: {} };
function src(s) { return ' data-src="' + esc(s) + '"'; }
function greet() { var h = centralParts(nowMs()).h; return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening"; }
/* ── one call, one voice ── */
function siteEmail() { var m = window.me; return m && typeof m === "object" && m.email ? String(m.email).toLowerCase().trim() : ""; }
function stored() { try { var v = JSON.parse(lsGet(STORE) || "null"); return v && v.key ? v : null; } catch (e) { return null; } }
function keep(v) { lsSet(STORE, v ? JSON.stringify(v) : null); }
function call(body, ka) {
  if (!DESK_URL) return Promise.reject({ error: "no_url" });
  body.site = siteEmail(); body.build = BUILD; /* every call carries the person the site shows, and the build that asked */
  return fetch(DESK_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(body), credentials: "omit", keepalive: !!ka })
    .then(function (r) { return r.json(); }, function () { throw { error: "network" }; })
    .then(function (r) { if (!r || r.ok !== true) throw (r || { error: "network" }); return r; });
}
function words(e) {
  switch (e && e.error) {
    case "not_on_list": return "That email is not on the desk list. Our team adds people on the People tab of the Front Desk sheet.";
    case "not_you": return "The site is signed in as someone else. Sign in as yourself to open your desk.";
    case "no_site": return "The site does not show anyone signed in. Sign in, then open the desk.";
    case "not_yours": return "That one is not on your desk.";
    case "not_releaser": return "The Release List belongs to the releasers named on the record.";
    case "bad_email": return "That does not look like an email address.";
    case "wait": return "A code went out less than two minutes ago. Check your email, including spam, before asking again.";
    case "too_many": return "Five codes have gone to that address today. Try again tomorrow, or ask our team.";
    case "code_wrong": return "That is not the code. Check the six digits and try again.";
    case "code_expired": return "That code has run out. Send a new one.";
    case "no_key": case "bad_key": return "This browser has no desk key. Ask for a code.";
    case "key_expired": return "Your desk key from yesterday has run out. Send a new code.";
    case "removed": return "Your name is no longer on the desk list.";
    case "no_claude_key": return fac() ? "The desk cannot answer questions yet." : "The desk cannot answer questions yet: the Claude key is not in the script.";
    case "not_yet": return "That belongs to the practice desk.";
    case "no_room": return "Your desk has no room on it yet. Our team adds it on the People tab.";
    case "bad_text": return "Keep it under the length allowed, with no symbols.";
    case "too_soon": return "It went out less than a week ago. Give the room a week.";
    case "busy": return "Claude is busy right now. Ask again in a minute.";
    case "key_refused": return "Claude refused the key stored in the script, so the desk cannot answer questions yet. Nothing is wrong with your question.";
    case "model_unknown": return "Claude does not know the model named on the Config tab. Clear that row and the desk will use its default.";
    case "empty_answer": case "claude_error": return "Claude did not answer this time. Your question is saved on the Asks tab. Try again in a few minutes.";
    case "empty": return "Type a question first.";
    case "undo_expired": return "Undo stays for ten minutes, and that time has passed. Reopen it from Done this week.";
    case "reopen_expired": return "Reopen stays for seven days, and that time has passed. Refresh the desk to see where it stands.";
    case "bad_action": return "That item cannot be closed from here. Refresh the desk to see where it stands.";
    case "no_check": return "The public fall check is not on the record yet, so this waits. The other choice is still open.";
    case "no_entry": return "The desk could not find this piece on the Research Engine, so nothing was changed. Refresh the desk to see where it stands.";
    case "no_entries": return "The Research Engine\u2019s Entries could not be read just now, so nothing was changed. Try again in a minute.";
    case "no_week": return "The desk could not find the next night the room meets, so nothing was changed. Try again in a minute.";
    case "no_mail": return "The desk could not find that mail in the inbox, so nothing was changed. It may already be filed.";
    case "no_voice": return "That voice is no longer on the Sources list. Refresh the desk.";
    case "no_sources": return "The desk cannot read the Sources list right now. Try again in a moment.";
    case "bad_name": return "Type his name as it is said: two to eighty letters, no symbols.";
    case "bad_move": return "Pick one of the seven moves.";
    case "have": return "That move is already on the Moves tab. Refresh the desk.";
    case "ours": return "That address is one of ours, so no email goes.";
    case "no_words": return "No words are on the Words tab for that page yet.";
    case "no_seat_email": return "Nothing was sent. The desk could not find the approved seat email in our sent mail just now. Email him on this card opens a message to send by hand.";
    case "seat_email_stale": return "Nothing was sent. The approved seat email no longer has the places the desk fills in, so the desk will not guess. Email him on this card opens a message to send by hand.";
    case "no_room_dates": return "Nothing was sent. The room’s dates are not on the record yet, so the desk cannot fill them in.";
    case "no_room_men": return "Nothing was sent. The room has no men on the record to send to.";
    case "no_words_given": return "Write a line first, then send it. Nothing was changed.";
    case "no_message": return "The desk could not find his message in the inbox, so nothing was sent. It may already be filed.";
    case "no_reply_address": return "Nothing was sent. His message carries no email address to reply to, so the desk will not guess.";
    case "no_concerns_sheet": return "The desk cannot read the Concerns tab of the Guide sheet right now, so nothing was changed. Try again in a minute.";
    case "no_such_concern": return "That suggestion is no longer on the Concerns tab. Refresh the desk to see where it stands.";
    case "story_checks": return "Nothing was published. All five checks must be ticked first.";
    case "story_decided": return "That story already has a decision on the testimony sheet, so nothing was changed. Refresh the desk to see where it stands.";
    case "story_unreadable": return "The desk could not read his story from the testimony sheet just now, so nothing was changed. Try again in a minute.";
    case "story_no_consent": return "Nothing was published. The testimony sheet does not show his consent to publish on the site.";
    case "story_long": return "Nothing was published. The story is longer than the card can show, and a story is published only after the whole piece is read.";
    case "story_stone": return "A stone is not published from the desk yet. You can hold it or decline it here.";
    case "no_page_words": return "The desk could not find that page to draft words for, so nothing was changed.";
    case "none": return "That one is already handled. Refresh the desk to see where it stands.";
    case "late": return "That was too long ago to take back from here.";
    case "no_state": return "That part’s state is not on the record yet, so the reply to the partner can’t be written. Not ours and Not now still work.";
    case "no_sheet": return "The desk cannot read the Partner Signals tab right now. Try again in a moment.";
    case "no_url": return "This page does not know where the desk is yet.";
    default: return "The desk could not be reached. Try again in a moment.";
  }
}


/* ══════════ the record, read live ══════════
   Every name below the design used for a sample (MEN, KEPT, OTHER, SIGNALS, MOVES, WAYS, MOMENTS, TEAMCARDS …) is built here from what the desk response holds:
   feed (our team), fac (a room), x (the build 29 additions), ac (the count sheet). Nothing here is typed by hand.
   Nothing in this block names a page, a block or a setting of the site builder: it moves to our own platform as it is. */
var X = null, FEED = null, FACR = null, AC = null, PEOPLE = [], WHO = null, OURS = [];
var MEMO = {};
function memo(k, f) { if (!(k in MEMO)) MEMO[k] = f(); return MEMO[k]; }
function dirty() { MEMO = {}; }
function arr(v) { return Array.isArray(v) ? v : []; }
function rt(s) { return String(s == null ? "" : s).replace(/(\w)'(\w)/g, "$1’$2"); }
function nz(v, d) { return v == null || v === "" ? (d == null ? "" : d) : v; }
var WORDN = ["none", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
/* counts in words up to ten, then figures; never "undefined", never an empty "of" */
function count(n) { n = Number(n); if (!isFinite(n) || n < 0) return ""; n = Math.floor(n); return n <= 10 ? WORDN[n] : String(n); }
function Count(n) { var c = count(n); return c.charAt(0).toUpperCase() + c.slice(1); }
function noun(n, one, more) { n = Number(n) || 0; return n === 0 ? "no " + more : count(n) + " " + (n === 1 ? one : more); }
function nounC(n, one, more) { var t = noun(n, one, more); return t.charAt(0).toUpperCase() + t.slice(1); }

/* ── Central time, 12-hour ── */
var TZ = "America/Chicago";
function centralParts(ms) {
  var f = new Intl.DateTimeFormat("en-US", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }), o = {};
  f.formatToParts(new Date(ms)).forEach(function (p) { o[p.type] = p.value; });
  return { y: +o.year, mo: +o.month, d: +o.day, h: +o.hour % 24, mi: +o.minute };
}
function nowMs() { return (S.clock0 || Date.now()) + (Date.now() - (S.read0 || Date.now())); }
function wallNow() { var p = centralParts(nowMs()); return Date.UTC(p.y, p.mo - 1, p.d, p.h, p.mi); }
function wallOf(day, h, mi) { var m = /^(\d{4})-(\d\d)-(\d\d)/.exec(String(day || "")); return m ? Date.UTC(+m[1], +m[2] - 1, +m[3], h || 0, mi || 0) : NaN; }
function todayStr() { var p = centralParts(nowMs()); return p.y + "-" + ("0" + p.mo).slice(-2) + "-" + ("0" + p.d).slice(-2); }
function addDays(day, n) { var m = /^(\d{4})-(\d\d)-(\d\d)/.exec(String(day || "")); if (!m) return ""; var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3] + n)); return d.getUTCFullYear() + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + d.getUTCDate()).slice(-2); }
function parseDay(s) { var m = /^(\d{4})-(\d\d)-(\d\d)/.exec(String(s || "")); return m ? new Date(+m[1], +m[2] - 1, +m[3], 12) : null; }
function longDay(s) { var d = typeof s === "string" ? parseDay(s) : s; return d ? d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : ""; }
function shortDay(s) { if (!s) return ""; var d = /^\d{4}-\d\d-\d\d$/.test(String(s)) ? parseDay(s) : new Date(s); if (!d || isNaN(d)) return ""; var o = { month: "short", day: "numeric" }; if (!/^\d{4}-\d\d-\d\d$/.test(String(s))) o.timeZone = TZ; return d.toLocaleDateString("en-US", o); }
function isoDay(iso) { if (!iso) return ""; if (/^\d{4}-\d\d-\d\d$/.test(String(iso))) return iso; var t = Date.parse(iso); if (isNaN(t)) return ""; var p = centralParts(t); return p.y + "-" + ("0" + p.mo).slice(-2) + "-" + ("0" + p.d).slice(-2); }
function clock12(iso) { var t = Date.parse(iso); if (isNaN(t)) return ""; return new Date(t).toLocaleTimeString("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" }); }
function dayTime(iso) { var t = Date.parse(iso); if (isNaN(t)) return ""; return shortDay(iso) + ", " + clock12(iso); }
function ordDay(s) { return longDay(s); }
function money(n) { return "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function moneyW(n) { return "$" + Number(n || 0).toLocaleString("en-US", { maximumFractionDigits: 0 }); }
function firstName(n) { return String(n || "").trim().split(/\s+/)[0] || ""; }
function keyEmail(k) { var m = /^[a-z]+:([^:\s]+@[^:\s]+)/i.exec(String(k || "")); return m ? m[1].toLowerCase() : ""; }
function kindOf(k) { var m = /^([a-z]+):/.exec(String(k || "")); return m ? m[1] : ""; }
function slug(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function norm(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, ""); }
function sheetId(h) { var m = /\/d\/([A-Za-z0-9_-]+)/.exec(String(h || "")); return m ? m[1] : ""; }

/* ── the links the desk uses (the eight records come from x.records; the rest from the feed) ── */
var BASE = "https://www.ancientpathcoaching.com";
var FALLBACK = {
  desk: "https://docs.google.com/spreadsheets/d/1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw/edit",
  ac: "https://docs.google.com/spreadsheets/d/1VE7ouQQwiG9A-M49nFATwVCpcG6qJSITaWWmE1AwLeM/edit",
  search: "https://docs.google.com/spreadsheets/d/1V84E1Wg33DaI89wAP0GvDR5iHQX3ZFsM3kRzu1LatCE/edit",
  forecast: "https://docs.google.com/spreadsheets/d/1cbd4pxTh8oaFIX1iwEWSap1sZ3dkoOAWaLb-I6kZqno/edit",
  mp: "https://docs.google.com/document/d/1xrj4bWZNQ0_RoOPr7owGRP-JeM1GZba_POCkIZjz23A/edit",
  research: "https://docs.google.com/spreadsheets/d/1FGFqxrOHzwQbDMoywrnGgLGrNlTtlhfcWZjPG9ppmPo/edit",
  signals: "https://docs.google.com/spreadsheets/d/1s79xljKjt-sYCZin0-oRFp5swxcETS0a4gzr126_Dns/edit",
  partners: "https://docs.google.com/spreadsheets/d/1LXQnWKo9A6UiD_320KobkMwifO0K-1-FeOx7xVYVXnQ/edit",
  folder: "https://drive.google.com/drive/folders/1ef_9oa_TYaPQ2qqvcxpBK15Z_eIH0BgK"
};
var RECKEY = [["front desk", "desk"], ["january forecast", "forecast"], ["message platform", "mp"], ["search profile", "search"], ["ac count", "ac"], ["research engine", "research"], ["room signals", "signals"], ["partner list", "partners"]];
var RECBLURB = { desk: "The Roster, rooms, weeks, cards, moves and sends", forecast: "The plan, the events, and the actuals", mp: "Every word we say, and where each moment goes", search: "Phrases, pages and what Google shows", ac: "The list, the wait list, hands raised", research: "The pieces we read for each week, the Witness, and Partner Signals", signals: "What each room carried, coded to the week", partners: "Partners and prospects, and the letters sent" };
var RECTITLE = { desk: "Front Desk sheet", forecast: "January Forecast", mp: "Message Platform", search: "Search profile", ac: "AC count", research: "Research Engine", signals: "Room Signals", partners: "Partner list" };
var LINKS = {};
function buildLinks() {
  var L = {}, recs = arr(X && X.records);
  recs.forEach(function (r) { var t = String(r.title || "").toLowerCase(); RECKEY.forEach(function (k) { if (t.indexOf(k[0]) === 0 && r.url && !L[k[1]]) L[k[1]] = r.url; }); });
  var fl = (FEED && FEED.links) || {}, tools = roadTools();
  if (!L.desk) L.desk = fl.sheet || FALLBACK.desk;
  if (!L.signals) L.signals = fl.signals || (firstRoomRaw() && firstRoomRaw().links && firstRoomRaw().links.signals) || FALLBACK.signals;
  if (!L.search) L.search = (FEED && FEED.search && FEED.search.sheet) || FALLBACK.search;
  if (!L.ac) L.ac = (tools.email && tools.email.go) || FALLBACK.ac;
  if (!L.forecast) L.forecast = (tools.ads && tools.ads.go) || FALLBACK.forecast;
  ["mp", "research", "partners"].forEach(function (k) { if (!L[k]) L[k] = FALLBACK[k]; });
  var raw = firstRoomRaw() || {}, pg = arr(raw.pages)[0] || (raw.notes && raw.notes.url ? { url: raw.notes.url } : null);
  L.folder = (pg && pg.url) || FALLBACK.folder;
  L.ads = "https://ads.google.com/";
  L.page = BASE + "/start"; L.growth = BASE + "/your-growth";
  L.course = (raw.courseLink) || (raw.course ? BASE + "/course/" + raw.course : BASE + "/course/student-course");
  L.moves = (FEED && FEED.moves && FEED.moves.sheet) || L.desk;
  LINKS = L; return L;
}
function roadFind() { var rows = (FEED && FEED.week && FEED.week.rows) || [], r = null; rows.forEach(function (x) { if (x.kind === "The road to January") r = x; }); return r; }
function roadTools() { var r = roadFind(), o = {}; ((r && r.road && r.road.tools) || []).forEach(function (t) { o[t.key] = t; }); return o; }
function weekRow(kind) { var rows = (FEED && FEED.week && FEED.week.rows) || [], r = null; rows.forEach(function (x) { if (x.kind === kind) r = x; }); return r; }
function firstRoomRaw() { var a = rawRooms(); return a[0] || null; }
function rawRooms() {
  if (FACR) { var one = FACR.rooms && FACR.rooms.length ? FACR.rooms : (FACR.missing ? [] : [FACR]); return one; }
  return arr(FEED && FEED.fac && FEED.fac.rooms);
}
function allRawRooms() { return arr(FEED && FEED.fac && FEED.fac.rooms).concat(FACR && !FACR.missing ? (FACR.rooms && FACR.rooms.length ? FACR.rooms : [FACR]) : []); }

/* ── a room, built from x.rooms (Rooms · Weeks tabs) and the room's own read ── */
var ROOMLIST = [];
function stripWeek(t) { return String(t || "").replace(/^Week\s+\d+\s*[—–-]\s*/i, ""); }
function timeParse(meets) {
  var m = /(\d{1,2}):(\d{2})\s*([AP]M)/i.exec(String(meets || "")), h = 19, mi = 0;
  if (m) { h = (+m[1]) % 12 + (/p/i.test(m[3]) ? 12 : 0); mi = +m[2]; }
  var t = m ? (+m[1]) + ":" + m[2] + " " + m[3].toUpperCase() + " Central" : "7:00 PM Central";
  return { h: h, mi: mi, text: t };
}
function rosterBy(email) { var e = String(email || "").toLowerCase(), r = arr(FEED && FEED.roster); for (var i = 0; i < r.length; i++) if (String(r[i].email).toLowerCase() === e) return r[i]; return null; }
function seenOf(email, raw) { var e = String(email || "").toLowerCase(), m = X && X.seen && X.seen[e]; if (m) return isoDay(m) ; var f = raw && arr(raw.men).filter(function (x) { return String(x.email).toLowerCase() === e; })[0]; return f && f.seen ? isoDay(f.seen) : ""; }
function mkMan(m, raw) {
  var e = String(m.email || "").toLowerCase(), ro = rosterBy(e) || {}, h = (FEED && FEED.handled && FEED.handled[e]) || {};
  var signedAt = m.agreementSigned || ro.agreementSigned || "", ansAt = m.answersIn || ro.answersIn || "";
  var hA = ro.handledAgreement || (h.agreement && h.agreement.at) || "", hN = ro.handledAnswers || (h.answers && h.answers.at) || "";
  var name = rt(m.name || ro.name || "");
  return { n: name, email: e, seat: m.seat || 0, how: m.how || "", signed: !!signedAt, signedAt: signedAt, hA: !!hA, hN: !!hN,
    ans: ansAt ? shortDay(ansAt) : "", ansAt: ansAt, seen: shortDay(seenOf(e, raw)), seenIso: seenOf(e, raw), wait: !!(m.waiting || (X && X.waiting && X.waiting[e])), wl: false,
    phone: m.phone || ro.phone || "", needs: arr(m.needs), written: arr(m.written), rowLink: m.rowLink || "", note: ro.note || "", askedA: ro.askedAgreement || "", askedN: ro.askedAnswers || "", door: ro.door || "", when: m.when || ro.seated || "" };
}
function buildRooms() {
  var xr = arr(X && X.rooms), raws = rawRooms(), out = [];
  var list = xr.length ? xr : raws.map(function (d) { var p = String(d.room || "").split(/\s*[—–]\s*/); return { key: slug(d.room), name: p[1] || p[0], course: p.length > 1 ? p[0] : "", courseSlug: d.course, meets: d.meets, leader: arr(d.facilitators)[0] || "", firstNight: "", size: d.men ? d.men.length : 0, seated: d.men ? d.men.length : 0, weeks: [] }; });
  list.forEach(function (q) {
    var raw = null, nn = norm(q.name);
    raws.forEach(function (d) { var rn = norm(d.room); if (!raw && nn && rn.indexOf(nn) >= 0) raw = d; });
    if (!raw && raws.length === 1 && list.length === 1) raw = raws[0];
    var T = timeParse(q.meets || (raw && raw.meets)), nights = {}, titles = {}, pieces = {}, lines = {}, weeks = arr(q.weeks);
    weeks.forEach(function (w) { if (w && w.week) { nights[w.week] = w.night || ""; titles[w.week] = rt(w.title || ""); pieces[w.week] = w; } });
    var first = q.firstNight || weeks[0] && weeks[0].night || "";
    for (var w = 1; w <= 12; w++) { if (!nights[w] && first) nights[w] = addDays(first, (w - 1) * 7); }
    if (raw) { if (raw.this) { titles[raw.this.week] = titles[raw.this.week] || rt(stripWeek(raw.this.title)); if (!nights[raw.this.week]) nights[raw.this.week] = raw.this.day; } arr(raw.ahead).forEach(function (a) { titles[a.week] = titles[a.week] || rt(stripWeek(a.title)); if (!nights[a.week]) nights[a.week] = a.day; if (!pieces[a.week]) pieces[a.week] = { week: a.week, piece: a.piece, pieceAddress: arr(a.pieceLinks)[0] && a.pieceLinks[0].url || "", fits: a.fits }; }); if (raw.last) { titles[raw.last.week] = titles[raw.last.week] || rt(stripWeek(raw.last.title)); if (!nights[raw.last.week]) nights[raw.last.week] = raw.last.day; } }
    var men = raw ? arr(raw.men).map(function (m) { return mkMan(m, raw); }) : [];
    if (!men.length && FEED && FEED.room && FEED.room.men && norm(FEED.room.name).indexOf(nn) >= 0) men = arr(FEED.room.men).map(function (m) { return mkMan(m, null); });
    var r = { key: q.key || slug(q.name), name: rt(q.name || ""), course: rt(q.course || (raw && raw.word) || ""), slug: q.courseSlug || (raw && raw.course) || "", meets: q.meets || (raw && raw.meets) || "", time: T.text, tH: T.h, tMi: T.mi,
      leader: q.leader || (raw && arr(raw.facilitators)[0]) || "", size: q.size || (raw && raw.men && raw.men.length) || men.length, seated: q.seated, nights: nights, titles: titles, pieces: pieces, raw: raw, men: men, sample: false,
      src: "Rooms tab · Weeks tab · Roster", witnessUrl: q.witnessUrl || "", first: first };
    r.met = metOf(r); r.week = Math.min(12, r.met + 1);
    out.push(r);
  });
  return out;
}
/* the room has met when its night's time and two hours have passed */
function metOf(r) { var t = wallNow(), n = 0; for (var w = 1; w <= 12; w++) { var d = r.nights[w]; if (d && t >= wallOf(d, r.tH, r.tMi) + 120 * 6e4) n = w; } return n; }
function rooms() { return memo("rooms", function () { var a = buildRooms(); ROOMLIST = a; return a; }); }
function JJf() { return rooms()[0] || { key: "", name: "", course: "", nights: {}, titles: {}, pieces: {}, men: [], week: 1, met: 0, time: "7:00 PM Central", tH: 19, tMi: 0, size: 0, raw: null, leader: "", meets: "", src: "Rooms tab" }; }
function multi() { return rooms().length > 1; }
function grow() { return multi(); }
function wk(r) { return r.week; }
function half(r) { return (r ? r.week : JJf().week) >= 7; }
function swap() { var r = JJf(), b = broughtOf(r); return !!b; }
function nightDate(r, w) { return r.nights[w] || ""; }
function nightOf(r, w) { return longDay(nightDate(r, w)); }
function dayOf(r, w, off) { var d = nightDate(r, w); return d ? longDay(addDays(d, off)) : ""; }
function night(r) { return nightOf(r, wk(r)); }
function titleOf(r, w) { return r.titles[w] || ""; }
function rd(r) { return titleOf(r, wk(r)); }
function men(r) { return r.men; }
function cntOf(r, f) { return r.men.filter(f).length; }
function pieceOf(r, w) { var p = r.pieces[w]; return p && p.piece ? [p.piece, p.fits || ""] : null; }
function pieceUrl(r, w) { var p = r.pieces[w]; if (!p || !p.piece) return null; var u = p.pieceAddress || ""; if (!u) { var a = arr(r.raw && r.raw.ahead).filter(function (x) { return x.week === w; })[0]; u = a && arr(a.pieceLinks)[0] && a.pieceLinks[0].url || ""; } return u ? [p.piece, u] : null; }
function lineOf(r, w) { var p = r.pieces[w]; return p && p.line ? [p.line, p.lineSrc || "Research Engine, Entries: the week’s own words"] : null; }
/* is this room's night today, and has it met (the moments) */
function nightIsToday(r) { return nightDate(r, wk(r)) === todayStr(); }
function afterOf(r) { if (!r.met) return false; var d = r.nights[r.met]; if (!d) return false; var t = wallNow(); return t >= wallOf(d, r.tH, r.tMi) + 120 * 6e4 && t < wallOf(addDays(d, 2), 0, 0); }
function nightOfR(r) { return !afterOf(r) && nightIsToday(r); }
function after() { return afterOf(JJf()); }
function night_() { return nightOfR(JJf()); }
/* the piece the room brings: our team's choice, or the one the facilitator brought from The Shelf */
function voiceOf(r) { var t = r.raw && r.raw.this; return t && t.voice ? t.voice : null; }
function broughtOf(r) { var w = r.pieces[wk(r)], b = (r.raw && r.raw.this && r.raw.this.brought) || (w && w.brought) || null; return b && b.claim ? b : null; }
function mkPiece(v) { if (!v) return null; return { id: v.id, voice: rt(v.voice), cost: v.cost || v.costText || "", claim: rt(v.claim), move: arr(v.points || v.move), link: v.link || "" }; }
function PIECEFORf(r) { var v = mkPiece(voiceOf(r)); return v; }
var PIECEFOR = {}, SHELFPIECE = null;
function refreshPieces() { var r = JJf(); PIECEFOR = {}; var p = PIECEFORf(r); if (p) PIECEFOR[wk(r)] = p; SHELFPIECE = mkPiece(broughtOf(r)); }

/* the reader */
function first() { var n = (WHO && WHO.name) || ""; return firstName(n) || ""; }
function fac() { return S.role === "fac"; }
function both() { return !!(WHO && WHO.role === "admin" && WHO.room && FEED); }
function firstVisit() { return !!S.firstVisit; }
function quiet() { return !!S.loaded && !S.down && cardCount() === 0; }
function afterDone(r) { return !!S.afterKept[r.key]; }
function down() { return !!S.down; }
function xhas(k) { return !!(X && X[k] != null); }


/* ── cards: an Actions row (feed.actions[]) in the card grammar: kind · title · state · reason in a clause · one button · Done ── */
var GMAIL = "https://mail.google.com/mail/u/0/#inbox", STRIPE = "https://dashboard.stripe.com/payments", CALENDLY = "https://calendly.com/app/scheduled_events/user/me", OFFERS = BASE + "/author/offers", EDITOR = BASE + "/author/";
var SCRIPT_SETTINGS = "https://script.google.com/home/projects/1piMd8lIIuSvToz54hRbZGEJsDm6u0YaoeF-6dMufJvlDhEThQizYhZ42/settings?authuser=john@ancientpathcoaching.com";
var CC = "jason@ancientpathcoaching.com";
var KINDLABEL = { seat: "A Seat", first: "Coaching", bwm: "Agreement", agr: "Agreement", wl: "Wait List", askans: "His Answers", ans: "His Answers", add: "His Answers", hand: "Follow-up", fu: "From the Notes", prom: "You Promised", move: "A Move", check: "A Check", pay: "A Payment", look: "Left in the Inbox", contact: "A Message", bug: "A Bug", testimony: "A Story Offered", cal: "A Calendar", search: "Page Words", road: "The Room’s Ask", post: "A Post", styling: "A Page Check", research: "The Room’s Piece", refresh: "The Search", room: "The Room", voice: "A Voice", workshop: "Updates for Partners" };
var MANKIND = { hand: 1, seat: 1, first: 1, bwm: 1, wl: 1, agr: 1, askans: 1, ans: 1, add: 1, contact: 1, fu: 1 };
var GROWKIND = { move: 1, check: 1, search: 1, road: 1, hand: 1, post: 1, refresh: 1, psig: 1 };
var MOMENT_OF = { hand: "He is looking for a group", road: "A friend invited him", post: "He is searching alone, at night", search: "He is searching alone, at night", move: "He is searching alone, at night", check: "He is searching alone, at night", refresh: "He is searching alone, at night" };
var OLDWHY = { hand: "A man replied asking to talk; the sooner he hears back, the more it means.", seat: "A man is waiting to hear from our team, and the sooner he does, the more his first step means.", bwm: "A man is waiting to hear from our team, and the sooner he does, the more his first step means.", wl: "A man is waiting to hear from our team, and the sooner he does, the more his first step means.", agr: "A man is waiting to hear from our team, and the sooner he does, the more his first step means.", askans: "A man is waiting to hear from our team, and the sooner he does, the more his first step means.", contact: "A man is waiting to hear from our team, and the sooner he does, the more his first step means.", ans: "A man trusted us with his answers; the sooner they are read, the sooner he feels heard.", add: "A man trusted us with his answers; the sooner they are read, the sooner he feels heard.", first: "A man chose to meet one-on-one and is waiting to hear when.", room: "The seat link is still open to men the room cannot hold.", search: "The month’s search story is waiting for a look.", voice: "Our team rules on this voice, and the evidence is one tap away." };
function askKind(key) { var k = String(key || ""); return /^(agr|bwm):/.test(k) ? "agreement" : /^askans:/.test(k) ? "answers" : ""; }
function linkLabelFor(a, k) {
  var u = String(a.link || "");
  if (a.key === "room:full") return "Open the offers page";
  if (k === "voice") return ({ add: "Read their work", paused: "Read the report", restore: "Read the evidence" })[String(a.key).split(":")[1]] || "Read the evidence";
  if (/mail\.google\.com/.test(u)) return "Open in Gmail";
  if (/stripe\.com/.test(u)) return "Open in Stripe";
  if (k === "search") return /\/author\//.test(u) ? "Open the page’s settings" : "Open the page";
  if (k === "fu" || k === "prom") return "Open the notes";
  if (k === "research") return "Listen";
  if (k === "cal") return "Open the calendar settings";
  if (/docs\.google\.com\/spreadsheets/.test(u)) return "Open the sheet";
  return "Open";
}
function wordsFor(link) {
  var p = String(link || "").replace(/^https?:\/\/[^\/]+/i, "").replace(/[?#].*$/, "") || "/";
  var w = arr(FEED && FEED.words).filter(function (x) { return x.path === p && (x.newTitle || x.newDesc); });
  return w.length ? w[0] : null;
}
function editOf(a) { return (a && a.edit) || (a && a.link && /\/author\//.test(a.link) ? a.link : ""); }
function nameFor(a, em) { var ro = em ? rosterBy(em) : null, f = String(a.for || ""); if (ro && ro.name) return rt(ro.name); if (f && !/@/.test(f) && !/^\$/.test(f)) return rt(f); return ""; }
function cardOf(a) {
  var k = kindOf(a.key), em = keyEmail(a.key), ro = em ? rosterBy(em) : null, full = nameFor(a, em), F = firstName(full), since = a.firstSeen ? shortDay(a.firstSeen) : "";
  var c = { id: a.key, kind: KINDLABEL[k] || "A Card", title: a.do || "", state: "", why: a.because || OLDWHY[k] || "", owner: a.owner || "", firstSeen: a.firstSeen || "", man: MANKIND[k] ? 1 : 0, email: em, raw: a,
    src: "Actions tab · " + a.key + (a.rule ? " · rule " + a.rule : "") };
  var t = String(a.do || "");
  if (F && em) {
    if (k === "seat") t = "Send " + F + " the seat email";
    else t = t.replace(/\bhis (first session|answers|message|agreement)\b/i, F + "’s $1").replace(/\bhim\b/i, F).replace(/^He /, F + " ");
    if (k === "bwm" || k === "agr") t = F + " has no signed agreement";
    if (k === "wl") t = "Reply to " + F + " with the agreement link";
  }
  c.title = t;
  c.state = k === "pay" ? (a.for ? a.for + " · " : "") + (a.firstSeen ? longDay(isoDay(a.firstSeen)) : "") : (full && !c.man ? full + " · " : "") + (since ? "Waiting since " + since : (a.for ? rt(a.for) : ""));
  if (k === "fu" || k === "prom") c.state = rt(a.for || "") + (since ? " · waiting since " + since : "");
  if (k === "move" || k === "check") { var mk = String(a.key).replace(/^(move|check):/, ""), mv = movesAll().filter(function (m) { return m.k === mk; })[0]; c.state = tieS(a.for || "") + (mv && mv.due ? (k === "move" ? " · due " : " · the check is ") + longDay(mv.dueIso || mv.checkIso || "") : ""); c.moveKey = mk; }
  if (k === "room") { var rr = rooms()[0]; c.state = (rr ? rr.name + " · " : "") + (a.for ? rt(a.for) : "") ; }
  if (k === "hand") c.hand = 1;
  if (k === "voice") { var vkm = /^voice:(add|paused|restore):(S\d+)/.exec(String(a.key)); if (vkm) c.voice = { k: vkm[1], id: vkm[2] }; }
  if (k === "ans" || k === "add") c.read = em;
  var ak = askKind(a.key);
  if (ak) c.mail = { key: a.key, kind: ak, email: em };
  if (k === "search") { var w = wordsFor(a.page || a.for || a.link); if (w) { c.words = w; c.state = "Search profile · " + (FEED && FEED.search && FEED.search.month || ""); } }
  if (k === "road") { c.state = "Once a week, at most"; c.act = "Read words"; c.road = String(a.key).split(":")[1]; }
  else if (k === "move" || k === "check") { c.link = ["See the move", "#moves:" + c.moveKey]; }
  else if (k !== "search" || !c.words) {
    if (a.link && !c.mail && !c.read && k !== "hand" && k !== "seat" && k !== "first") c.link = [linkLabelFor(a, k), a.link];
    if (a.key === "room:full") c.doneLabel = "Closed";
  }
  if (c.words) c.link = null;
  if (GROWKIND[k]) c.mo = MOMENT_OF[k] || (k === "move" || k === "check" ? MOMENT_OF[k] : "");
  /* build 30: the card standard's lines are written at the source, in the script. A card the script wrote before build 30 has none of them and draws as it did. */
  c.fresh = !!(a.title || a.why || a.then || a.button || a.word || a.went || a.when || a.from || a.rec);
  if (a.title) c.title = rt(a.title);
  if (a.ftitle) c.ftitle = rt(a.ftitle);
  if (a.why) c.why = rt(a.why);
  if (a.fwhy) c.fwhy = rt(a.fwhy);
  if (a.then) c.then = rt(a.then);
  if (a.when) { c.when = rt(a.when); c.state = ""; }
  if (a.serves) c.serves = rt(a.serves);
  if (a.moment) c.mo = rt(a.moment);
  else if (c.fresh && k === "road") c.mo = "";
  if (a.kind) c.kind = rt(a.kind);
  if (a.button) c.doneLabel = String(a.button);
  if (a.word) c.word = String(a.word);
  if (a.went) c.went = rt(a.went);
  if (a.fthen) c.fthen = rt(a.fthen);
  if (a.fwent) c.fwent = rt(a.fwent);
  if (a.stale && typeof a.stale === "object") c.stale = a.stale;
  if (Array.isArray(a.acts)) c.acts = a.acts;
  if (a.reply && typeof a.reply === "object") c.reply = a.reply;
  if (a.pic) { c.pic = String(a.pic); c.link = null; }
  if (Array.isArray(a.lines)) { c.clines = a.lines; c.link = null; }
  if (a.story && typeof a.story === "object") { c.story = a.story; if (a.story.ok) c.link = null; }
  c.noAct = !!a.noAct;
  if (a.notice && typeof a.notice === "object") c.notice = a.notice;
  if (Array.isArray(a.voices)) { c.vlines = a.voices; c.link = null; }
  if (a.start) c.start = String(a.start);
  c.checkButtons = !!a.checkButtons;
  c.moves = !!(a.moves || k === "move" || k === "check");
  if (a.from && typeof a.from === "object") { c.from = a.from; if (a.from.src) c.src += " · " + a.from.src; }
  if (a.rec && typeof a.rec === "object") { c.rec = a.rec; if (a.rec.kind === "words") c.words = null; }
  if (c.fresh && (k === "move" || k === "check")) c.link = a.link && !c.rec ? [a.linkLabel || linkLabelFor(a, "search"), a.link] : null;
  if (a.from && c.link && k !== "draft" && /docs\.google\.com\/document/.test(String(c.link[1]))) c.link = null;
  if (k === "workshop") { c.ws = wsLines(a.because); c.link = null; c.state = ""; if (!c.when) c.when = "Written " + (a.firstSeen ? dayTime(a.firstSeen) : "at 7:15 AM"); if (!a.why) c.why = WS_WHY; if (!a.title) c.title = "Send the Workshop update"; if (!a.serves) c.serves = "Serves our partners · What’s New"; }
  return c;
}
function tieS(s) { return rt(s); }
function actionsAll() {
  var src = FEED ? arr(FEED.actions) : (FACR ? arr(FACR.actions) : []);
  return src.filter(function (a) { return a && a.key && !/^research:hold:/.test(a.key) && !(S.done[a.key]); });
}
function newest(a, b) { return String(b.firstSeen || "").localeCompare(String(a.firstSeen || "")); }
function manFirst(L) { return L.filter(function (c) { return c.man; }).concat(L.filter(function (c) { return !c.man; })); }
function orderCards(L) { return manFirst(L.slice().sort(newest)); }
function teamCards() { return memo("teamCards", function () { return paskCards().concat(orderCards(actionsAll().filter(function (a) { return !GROWKIND[kindOf(a.key)]; }).map(cardOf))); }); }
function growCards() { return memo("growCards", function () { return orderCards(actionsAll().filter(function (a) { return GROWKIND[kindOf(a.key)]; }).map(cardOf)); }); }
/* a facilitator's own cards: the room's piece, then his own Actions rows (the notes' follow-ups and promises) */
function facCards() {
  return memo("facCards", function () {
    var L = [], r = JJf();
    if (after() && !S.afterKept[r.key] && !afterDone(r)) L.push(afterCard(r));
    if (!after() && !half(r) && !S.swapped && !swap()) { var pcard = pieceCard(r); if (pcard) L.push(pcard); }
    var own = arr(FACR && FACR.actions).filter(function (a) { return a && a.key && !S.done[a.key] && !/^research:hold:/.test(a.key); }).map(cardOf);
    return L.concat(orderCards(own).map(function (c) { c.owner = ""; return c; }));
  });
}
function cardCount() { return fac() ? facCards().length : teamCards().length + growCards().length; }
function owners() { var set = {}; arr(FEED && FEED.actions).forEach(function (a) { if (a.owner) set[a.owner] = 1; }); arr(PEOPLE).forEach(function (p) { if (p.role === "admin" && p.name) set[firstName(p.name)] = 1; }); return Object.keys(set).sort(); }

/* ── the men of a room, the roster, the story board ── */
function allMen() { var o = []; rooms().forEach(function (r) { r.men.forEach(function (m) { o.push(m); }); }); return o; }
function manByEmail(e) { e = String(e || "").toLowerCase(); var m = null; allMen().forEach(function (x) { if (x.email === e) m = x; }); return m; }
function wroteOf(r, name) { var p = arr(r.raw && r.raw.board).filter(function (b) { return /lament/i.test(b.name) && b.state === "open"; })[0] || arr(r.raw && r.raw.board).filter(function (b) { return /lament/i.test(b.name); })[0]; if (!p) return ""; var h = arr(p.men).filter(function (m) { return rt(m.name) === name; })[0]; return h ? shortDay(h.at) : ""; }
function wroteCount(r) { var p = arr(r.raw && r.raw.pieces)[0]; return p ? { n: p.count, of: p.of, name: p.name } : null; }
function rosterAll() { return arr(FEED && FEED.roster).map(function (ro) { var m = manByEmail(ro.email) || mkMan(ro, null); m = Object.assign({}, m); m.stage = ro.stage || ""; m.door = ro.door || ""; m.hereFor = ro.hereFor || ""; m.wl = !!(ro.waitList && !ro.seated); m.acct = !ro.agreementSigned && !ro.seated && !ro.waitList; m.acctAt = ro.account || ""; m.waitAt = ro.waitList || ""; m.seatedAt = ro.seated || ""; m.room = !!ro.seated; return m; }); }
function seatWords(r) { if (!r.size) return ""; var t = r.men.length; return " · " + (t >= r.size ? count(t) + " of " + count(r.size) + " seats · the room is full" : count(t) + " of " + count(r.size) + " seats · " + count(r.size - t) + " open"); }

/* ── the Release List: x.rel, with this browser's presses laid over it ── */
function relAll() { return arr(X && X.rel).map(function (e) { var o = S.relOv[e.id]; return o ? Object.assign({}, e, o) : e; }); }
function relPlaced() { var all = relAll(), p = all.filter(function (e) { return e.week || e.status === "released"; }); return p.length ? p : all; }
function relOthers() { var all = relAll(), p = all.filter(function (e) { return e.week; }); return p.length ? all.filter(function (e) { return !e.week && e.status === "candidate"; }) : []; }
function relUndoOk(e) { return e.status === "released" && e.undoUntil && Date.parse(e.undoUntil) > nowMs() && e.releasedBy !== "automatic"; }
function KEPTf() { return relPlaced().map(function (e) { return [e.id, rt(e.claim), rt(e.voice) + (e.costText ? " · " + e.costText : ""), e.link || "", "Research Engine, Entries " + e.id + (e.place ? ": its place names " + rt(e.place) : ""), e]; }); }
function OTHERf() { return relOthers().map(function (e) { return [e.id, rt(e.claim), rt(e.voice) + (e.minutes ? " · " + e.minutes + " min" : ""), e.link || "", e]; }); }
function relSt(id) { var e = relAll().filter(function (x) { return x.id === id; })[0]; return e ? e.status : ""; }

/* ── the Moves tab ── */
var MOVEPLAIN = { page: "a fix to the page", search: "an article", poem: "a poem or lament", story: "a Your Story piece", section: "a new course section", group: "a group", oneone: "a branded one-on-one", partner: "an answer to a partner’s need" };
function plainMove(t) { t = String(t || ""); for (var k in MOVENAME) if (MOVENAME[k] === t) return MOVEPLAIN[k]; return t; }
var MOVENAME = { page: "page fix", search: "search article", poem: "poem or lament", story: "story board / Your Story piece", section: "new course section", group: "group", oneone: "branded one-on-one", partner: "partner need" };
function moveKindOf(txt) { var t = String(txt || ""); for (var k in MOVENAME) if (MOVENAME[k] === t) return k; if (/story/.test(t)) return "story"; if (/page/.test(t)) return "page"; if (/article/.test(t)) return "search"; return "page"; }
function movesRaw() {
  var L = X && X.moves ? X.moves : (FEED && FEED.moves && FEED.moves.taken) ? FEED.moves.taken : arr(FACR && FACR.moves);
  return arr(L);
}
function dueWeek(iso) { var d = isoDay(iso); if (!d) return false; var t = todayStr(); return d >= t && d <= addDays(t, 6); }
function movesAll() {
  return memo("moves", function () {
    return movesRaw().map(function (m) {
      var o = S.moves[m.key], st = o ? o : (m.status || "taken");
      var before = m.before || "", now = m.now || "";
      return { k: m.key, move: m.move, signal: rt(m.signal), from: rt(m.from), owner: m.owner || "", due: m.due ? shortDay(m.due) : "", dueIso: isoDay(m.due), dueWk: dueWeek(m.due), check: m.check ? shortDay(m.check) : "", checkIso: isoDay(m.check), st: st, ans: S.movesAns[m.key] || m.answer || "", before: before, now: now, comes: m.comes || "", reason: m.reason || "", link: m.link || "", added: !!m.added };
    });
  });
}
function MOVESf() { return movesAll(); }

/* ── Signals Waiting: the signals the room, the search and the phrases have proposed that are not yet a move ── */
function sigParts(p) {
  var s = rt(p.signal || ""), i = s.indexOf(" — "), nm = i > 0 ? s.slice(0, i) : s, why = i > 0 ? s.slice(i + 3) : "", k = kindOf(p.key) || p.kind || "";
  var lab = k === "page" ? "Shown, not clicked" : k === "phrase" || p.kind === "phrase" ? "Men type this" : "The room carried";
  if (k === "page") { var m = /^(.*?)\s+—\s+/.exec(String(p.signal || "")); nm = m ? m[1] : nm; why = why.charAt(0).toUpperCase() + why.slice(1); if (why && !/[.!?]$/.test(why)) why += "."; }
  return { lab: lab, nm: nm, why: why };
}
function takenKeys() { var o = {}; arr(movesRaw()).forEach(function (m) { var st = S.moves[m.key] || m.status; if (!S.sigBack[m.key] && (st !== "dropped" || !m.reason || (m.comes && isoDay(m.comes) > todayStr()))) o[m.key] = 1; }); return o; }
function SIGNALSf() {
  return memo("signals", function () {
    var out = [], taken = takenKeys(), have = {};
    arr(FEED && FEED.moves && FEED.moves.proposed).forEach(function (p) {
      if (taken[p.key] || have[p.key]) return; have[p.key] = 1;
      var q = sigParts(p), srcName = (p.from || "").split(" · ")[0];
      out.push({ id: p.key, lab: q.lab, nm: q.nm, why: q.why, st: rt(p.from || ""), kind: moveKindOf(p.move), s: (kindOf(p.key) === "page" ? "Search profile · Pages" : kindOf(p.key) === "phrase" ? "Search profile · phrases" : "Room Signals") + " through the Moves tab", p: p, owner: p.owner || "" });
    });
    /* a set-aside signal that has come back (its date has passed) waits again */
    arr(movesRaw()).forEach(function (m) { var st = S.moves[m.key] || m.status; if ((st === "dropped" && m.reason && m.reason !== "" || S.sigBack[m.key] && st === "dropped") && !taken[m.key] && !have[m.key] && !(/^own:partner-/.test(String(m.key)) && !m.comes)) { have[m.key] = 1; var q = sigParts({ key: m.key, signal: m.signal, kind: kindOf(m.key) }); out.push({ id: m.key, lab: q.lab, nm: q.nm, why: q.why, st: rt(m.from || ""), kind: moveKindOf(m.move), s: "the Moves tab · set aside, back on its date", p: m, owner: m.owner || "" }); } });
    return psNeedsF().concat(out.filter(function (c) { return !S.sig[c.id]; }));
  });
}
function SIGASIDE() { return memo("sigAside", function () { var out = []; arr(movesRaw()).forEach(function (m) { var st = S.moves[m.key] || m.status; if (st === "dropped" && m.reason && (!m.comes || isoDay(m.comes) > todayStr()) && !S.sigBack[m.key]) out.push({ id: m.key, nm: sigParts({ key: m.key, signal: m.signal, kind: kindOf(m.key) }).nm, why: m.reason }); }); return out; }); }

/* ── how men reach us, from the road read (feed.week.rows) and the roster ── */
function toolOf(key) { return roadTools()[key] || null; }
function seatedRoster() { return arr(FEED && FEED.roster).filter(function (r) { return r.seated; }); }
function topReferrer() {
  var c = {}, best = "", n = 0;
  seatedRoster().forEach(function (r) { var k = String(r.referredBy || "").trim().toLowerCase(); if (!k || /^(google|search)/.test(k)) return; c[k] = (c[k] || 0) + 1; if (c[k] > n) { n = c[k]; best = k; } });
  var inRoom = seatedRoster().some(function (r) { return String(r.name || "").toLowerCase() === best; });
  return { n: n, inRoom: inRoom };
}
function WAYSf() {
  var ros = seatedRoster(), seated = ros.length, byP = ros.filter(function (r) { return r.referredBy; }).length, bySearch = ros.filter(function (r) { return /google|search|article|blog|online/i.test(String(r.referredBy || "")); }).length;
  var rm = rooms()[0] || { name: "" }, segs = arr(FEED && FEED.segments), segMax = Math.max.apply(null, segs.filter(function (s) { return s.of; }).map(function (s) { return s.count; }).concat([0])), friend = segs.filter(function (s) { return s.key === "friend"; })[0];
  var tr = topReferrer(), tl = FEED && FEED.search && FEED.search.live || [], nLive = arr(tl).length, tot = FEED && FEED.search && FEED.search.totals || null;
  var tools = roadTools(), out = [], L = LINKS;
  /* Through a Person */
  if (seated) out.push({ lab: "Through a Person", fact: Count(byP) + " of the " + count(seated) + " men in " + rm.name + " came through a person" + (tr.n >= 2 && tr.inRoom ? "; " + count(tr.n) + " came through one man in the room" : "") + ".",
    means: (friend && friend.count >= segMax ? "Our largest door." : ""), go: ["Open the Roster", L.desk], ask: "Who brought each man in the room?", src: "Roster: referred-by", people: 1 });
  /* Through Search */
  if (nLive || tot) out.push({ lab: "Through Search", fact: (nLive ? Count(nLive) + " articles are live. " : "") + (tot ? "In the latest read Google showed our pages " + tot.imp + " times, and they were clicked " + tot.clk + " times." : ""),
    means: "Search earns trust slowly; " + (bySearch ? count(bySearch) + " of the " + count(seated) + " men in the room came by it." : "no man in the room came by it yet."), go: ["Open the Search profile", L.search], ask: "Which page is shown most and clicked least?", src: "Search profile, read " + shortDay(FEED && FEED.search && FEED.search.asOf) + " · Roster: referred-by" });
  /* Through Search: the monthly refresh, folded from its card into a row (build 36.1) */
  var rfs = FEED && FEED.refresh; if (rfs && rfs.text) out.push({ lab: "Through Search \u00b7 The Monthly Refresh", fact: rt(rfs.text), means: "Start with the pages shown and never clicked: their title and first line are the words to change.", go: ["Open the Search profile", L.search], ask: "Which page in the latest search refresh should we change first?", src: "Actions tab: the refresh row, folded into this row (rule R13)" });
  /* Through Our Ads */
  var ad = tools.ads; if (ad) out.push({ lab: "Through Our Ads", fact: rt(ad.came || ad.put || ""), means: [ad.became, ad.means].filter(Boolean).map(rt).join(" "), go: ["Open Google Ads", L.ads], ask: ad.ask || "What has an ad brought in so far?", src: "Road read: Ads · January Forecast, Forecast tab" });
  /* Through Our Email */
  var em = tools.email, lst = weekRow("The list"), ac = AC && AC.stages && AC.stages.men || null;
  if (em || lst || ac) out.push({ lab: "Through Our Email", fact: lst ? rt(lst.fact) : (ac ? Count(ac.on_the_list) + " men are on our list." : rt(em.put || "")), means: "Never more than one every two weeks.", go: ["Open the AC count", L.ac], ask: (lst && lst.ask) || "Who has his hand raised, and what did he ask for?", src: "AC count, latest" });
  /* Through a Partner */
  var ch = tools.churches, seg = segs.filter(function (s) { return s.key === "church"; })[0];
  if (ch || seg || (PX() && partnerLine())) { var plf = partnerLine(); out.push({ lab: "Through a Partner", fact: rt((ch ? [ch.put, ch.came].filter(Boolean).join(" ") : seg ? Count(seg.count) + " " + (seg.unit || "partner prospects") + "." : "The partner list is not on the record yet.") + (plf ? " " + plf : "")), means: (ch && ch.means ? rt(ch.means) : "") + (plf ? (ch && ch.means ? " " : "") + "A part’s state moves only when a line you send carries it, so what a partner reads stays true on the day." : ""), go: ["Open the partner list", L.partners], go2: PX() ? ["See it as a partner does", PX().url] : null, x: partnerReveal(), ask: (ch && ch.ask) || "Which partners have we written to this month?", src: "Partner list · AC count: Partner: prospect · Research Engine: Partner Signals, Workshop parts and releases tabs" }); }
  /* Through Video */
  var vd = tools.video; if (vd) out.push({ lab: "Through Video", fact: rt(vd.came || vd.put || ""), means: "Build, then boost: a video earns trust on its own before an ad carries it." + (vd.state === "not connected" ? " The channel’s address is not on the record yet, so the desk cannot read it; one line on the Config tab brings it in." : ""), go: ["Open the Config tab", L.desk], ask: vd.ask || "How is our video doing?", src: "Config tab (video channel)" });
  return out;
}
var ARTSf = function () { var t = roadTools().articles; return arr(t && t.links); };

/* ── Where a man meets us: the Message Platform's own words; what is live for each moment is read from the record ── */
var MP = [
  ["A friend invited him", "A man you know is doing this; there is a seat beside him.", "The room, or Let’s Talk"],
  ["He is looking for a group", "A group of men who meet each week, with a reading and a facilitator. Here is what the first night is like.", "Breaking Free"],
  ["He wants a coach", "One conversation first, then a weekly hour. Here is what we hold and what we do not.", "Let’s Talk"],
  ["Someone who loves him sent him", "You were asked to look. Look at one page and decide for yourself.", "The shortest honest page we have, never a sales page"],
  ["He is searching alone, at night", "An answer to the exact question he typed, with one place to go next.", "Read, or Write a Lament"],
  ["Something has ended: a job, a marriage, a role", "The in-between is not wasted ground.", "The Crossing"],
  ["A leader alone with what he carries", "Your work has gone well, and the next stretch asks more than you have. You do not have to walk it alone.", "The Crossing, then Let’s Talk"],
  ["A church or ministry leader", "We walk men through this. We can walk yours, or train your leader.", "Facilitator Training, or a conversation with our team"]
];
function liveTitle(re) { var m = arr(FEED && FEED.search && FEED.search.live).filter(function (x) { return re.test(x.title); })[0]; return m ? rt(m.title) : ""; }
function MOMENTSf() {
  var rm = rooms()[0], nLive = arr(FEED && FEED.search && FEED.search.live).length, coach = liveTitle(/coach/i), lost = liveTitle(/lost my job/i), mv = roadFind() && roadFind().road && roadFind().road.move, seg = arr(FEED && FEED.segments).filter(function (s) { return s.key === "church"; })[0];
  var cards = growCards(), byMo = function (mo) { return cards.filter(function (c) { return c.mo === mo; }).map(function (c) { return c.id; }); };
  var live = [
    mv && mv.lever === "referral" ? "The room’s ask: " + rt(mv.title) + "." : "",
    rm && rm.size ? "Breaking Free: " + count(rm.men.length) + " of " + count(rm.size) + " seats taken." : "",
    coach ? "Live: " + coach + "." : "",
    "",
    nLive ? Count(nLive) + " articles are live." : "",
    lost ? "Live: " + lost + "." : "",
    "", seg ? Count(seg.count) + " partner prospects." : ""];
  var unknown = { 6: 1 };
  return MP.map(function (m, i) { return { mo: m[0], heard: m[1], goes: m[2], live: live[i] || "", unknown: i === 6 || (i === 5 && !lost), cards: byMo(m[0]), page: i === 3, none: i === 3 }; });
}

/* ── the eight records ── */
function RECSf() { return RECKEY.map(function (k) { return [RECTITLE[k[1]], RECBLURB[k[1]], LINKS[k[1]], k[1]]; }); }
function recBlurb(key) { var r = arr(X && X.records).filter(function (x) { return String(x.title || "").toLowerCase().indexOf(RECTITLE[key].toLowerCase().slice(0, 8)) === 0; })[0]; return (r && r.blurb) || RECBLURB[key]; }
function sheetName(h) { var id = sheetId(h), r = RECSf().filter(function (x) { return sheetId(x[2]) === id && id; })[0]; return r ? r[0] : "the sheet"; }

/* ── find: a man, a page, a room, a record ── */
function FINDABLEf() {
  var o = [];
  rosterAll().forEach(function (m) { o.push(["A man", m.n || "(no name yet)", (m.room ? "In " + (rooms()[0] ? rooms()[0].name : "the room") : m.wl ? "Wait list" : m.acct ? "Account only" : "On the sheet") + " · " + (m.signed ? "signed" : "no agreement yet"), m.email]); });
  arr(FEED && FEED.search && FEED.search.live).forEach(function (p) { o.push(["A page", rt(p.title), "Live", p.url]); });
  rooms().forEach(function (r) { o.push(["A room", r.name, r.course + " · Week " + wk(r) + " of 12 · " + count(r.men.length) + " men", r.key]); });
  RECSf().forEach(function (r) { o.push(["A record", r[0], r[1], r[3]]); });
  return o;
}
function sendsList() {
  var L = [];
  rosterAll().forEach(function (m) { if (m.askedA) L.push({ at: dayTime(m.askedA), ts: Date.parse(m.askedA) || 0, to: m.n || m.email, email: m.email, kind: "agreement" }); if (m.askedN) L.push({ at: dayTime(m.askedN), ts: Date.parse(m.askedN) || 0, to: m.n || m.email, email: m.email, kind: "answers" }); });
  var ra = FEED && FEED.cohort && FEED.cohort.lastRoomAsk; if (ra) L.push({ at: dayTime(ra), ts: Date.parse(ra) || 0, to: "The room", kind: "referral", n: (rooms()[0] || { men: [] }).men.length });
  return L.concat(S.sends).sort(function (a, b) { return a.ts - b.ts; });
}


/* ══════════ the shell, drawn on the record ══════════ */
function wroteIso() { return (FEED && FEED.generated) || (FACR && FACR.generated) || (X && X.nowIso) || ""; }
function weekdayOf(r, w) { var p = parseDay(nightDate(r, w)); return p ? p.toLocaleDateString("en-US", { weekday: "long" }) : ""; }
function ctxLine() {
  var R = rooms(), r = R[0]; if (!r || !r.name) return "";
  var t = r.time, nm = night(r), c = r.course || "Breaking Free";
  if (R.length > 1) return rt(c) + ' <span class="nw">· ' + count(R.length) + ' rooms</span> <span class="nw">· Next:</span> <span class="nw">' + nm + ',</span> <span class="nw">at ' + t + '</span>';
  return rt(c) + ' <span class="nw">· Week ' + wk(r) + '</span> <span class="nw">· ' + (fac() ? "Your room" : "The room") + ' meets</span> <span class="nw">' + nm + ',</span> <span class="nw">at ' + t + '</span>';
}
function asofLine() {
  var w = wroteIso(), wt = w ? (isoDay(w) === todayStr() ? clock12(w) : dayTime(w)) : "", rd0 = clock12(new Date(nowMs()).toISOString());
  if (fac()) return '<p class="asof"' + src("the status line: when the desk was last written") + '><span class="dot' + (down() ? " stale" : "") + '" aria-hidden="true"></span><span>' + (down() ? "Showing the last good read" + (wt ? " · updated " + wt : "") : "Updated " + (wt || "—")) + '</span><button class="walk" data-act="refresh"><span class="u">Refresh</span></button></p>';
  return '<p class="asof"' + src("the status line: when the script wrote the desk, when this browser read it (desk.js setStatus)") + '><span class="dot' + (down() ? " stale" : "") + '" aria-hidden="true"></span><span>' + (down() ? "Showing the last good read" + (wt ? " · script wrote " + wt : "") : "Script wrote " + (wt || "—") + " · read " + rd0) + '</span><button class="walk" data-act="refresh"><span class="u">Refresh</span></button></p>';
}
function downRow() {
  var w = wroteIso();
  return '<div class="dlist">' + factRow("Last Good Read", "The desk can’t read the record right now.", "What you see is from the last good read" + (w ? ", " + (isoDay(w) === todayStr() ? "today at " + clock12(w) : dayTime(w)) : "") + ". A press is kept here and goes through when the record is back.", (fac() ? walk("askteam", "Ask our team") : linkWalk(LINKS.desk, "Open the Front Desk sheet")), "ap-desk-standard line 10 · the feed’s last good read") + '</div>';
}
function cantRead(s) { return '<div class="dlist">' + factRow("Last Good Read", "The desk can’t read the record right now.", "", fac() ? walk("askteam", "Ask our team") : "", s || "the record the desk reads") + "</div>"; }
function ownerOf(c) { return c.owner || ""; }
function ownF(L) { return (fac() || S.owner === "all") ? L : L.filter(function (c) { return ownerOf(c) === S.owner; }); }
function otherOwner() { var o = owners().filter(function (x) { return x !== S.owner; }); return o.length === 1 ? o[0] : "the others"; }
function frontFirst(L, id) { if (!id) return L; var i = L.map(function (c) { return c.id; }).indexOf(id); return i > 0 ? [L[i]].concat(L.slice(0, i), L.slice(i + 1)) : L; }
/* a card taken back (Undo, Reopen) returns first among the cards that are not for a waiting partner or man: a waiting partner or man still comes first (John, Nov 4) */
function cgroup(c) { return c.pask ? 0 : c.man ? 1 : 2; }
function backFirst(L, id) {
  if (!id) return L;
  var i = -1; L.forEach(function (c, j) { if (c.id === id) i = j; });
  if (i < 0) return L;
  var me = L[i], rest = L.filter(function (c, j) { return j !== i; }), at = 0;
  rest.forEach(function (c) { if (cgroup(c) < cgroup(me)) at++; });
  return rest.slice(0, at).concat([me], rest.slice(at));
}
function aheadWords(lk, id) {
  var L = lk === "gcards" ? growCards() : lk === "flane" ? facCards() : teamCards();
  var me = L.filter(function (c) { return c.id === id; })[0]; if (!me) return "";
  var np = cgroup(me) > 0 ? L.filter(function (c) { return !S.done[c.id] && c.id !== id && cgroup(c) === 0; }).length : 0;
  var nm = cgroup(me) > 1 ? L.filter(function (c) { return !S.done[c.id] && c.id !== id && cgroup(c) === 1; }).length : 0;
  var p = np ? (np === 1 ? "partner" : "partners") : "", m = nm ? (nm === 1 ? "man" : "men") : "";
  return p && m ? p + " and " + m : p || m;
}
function undoNote(c, id) {
  if (!c || !c.ws) return "";
  var out = 0; c.ws.forEach(function (l, i) { if (wsOut(id)[i]) out++; });
  return out ? "Your choice is kept. Put it back to send all " + count((S.wsTot && S.wsTot[id]) || c.ws.length) + "." : "";
}
function askBack(q) {
  var P = PX(); if (!P || !q || !q.item) return;
  if (arr(P.asks).some(function (a) { return a.item === q.item; })) return;
  P.asks = arr(P.asks).concat([{ item: q.item, who: q.who || "", words: q.words || "", part: q.part || "", date: q.date || "", day: q.day || "" }]).sort(function (a, b) { return String(a.day || "").localeCompare(String(b.day || "")); });
  dirty();
}
function dropCard(key) { [FEED, FACR].forEach(function (R) { if (R && Array.isArray(R.actions)) R.actions = R.actions.filter(function (a) { return !(a && a.key === key); }); }); dirty(); }
function ownersRow(all) { var names = owners(); if (names.length < 1) return ""; if (S.owner !== "all" && names.indexOf(S.owner) < 0) S.owner = "all"; return '<div class="owners" role="group" aria-label="Whose cards">' + [["all", "Everyone"]].concat(names.map(function (n) { return [n, n]; })).map(function (x) { var n = x[0] === "all" ? all.length : all.filter(function (c) { return ownerOf(c) === x[0]; }).length; return '<button class="choice" data-act="owner" data-v="' + esc(x[0]) + '" aria-pressed="' + (S.owner === x[0]) + '">' + esc(x[1]).replace(/ /g, " ") + " · " + n + "</button>"; }).join("") + "</div>"; }
function laneNote(cards, word, lk) { if (!S.loaded && !S.down) return "Reading the record…"; var open = cards.filter(function (c) { return !S.done[c.id]; }), n = open.length, d = lk ? doneRows(lk).length : 0; if (word === "a waiting man first") word = open.some(function (c) { return c.pask; }) ? "a waiting partner first" : open.some(function (c) { return c.man; }) ? word : "newest first"; if (word === "newest first" && S.back && open.length > 1 && open.some(function (c) { return c.id === S.back; }) && open.slice().sort(newest)[0].id !== S.back) word = "the card you took back first, then newest"; var cant = lk === "lane" && PX() && !PX().read ? " · partners’ answers can’t be read right now" : ""; return (n ? (n === 1 ? "One card" : Count(n) + " cards") + " · " + word : "Nothing waiting · " + word) + cant + (d ? " · " + count(d) + " done in the last seven days" : ""); }
function signedF(m) { return m.signed || m.hA || !!S.handled[m.email + ":agreement"]; }
function ansF(m) { return !!m.ansAt || m.hN || !!S.handled[m.email + ":answers"]; }
function byHand(r, k) { var n = r.men.filter(function (m) { return !(k === "agreement" ? m.signed : m.ansAt) && (k === "agreement" ? (m.hA || S.handled[m.email + ":agreement"]) : (m.hN || S.handled[m.email + ":answers"])); }).length; return n ? " (" + count(n) + " by hand)" : ""; }
function statusLine(r) {
  var n = r.men.length, sfx = multi() ? " (" + r.name + ")" : "";
  if (!n) return '<div class="status"' + src("Roster · Learners tab") + '><p class="s">No man is in this room yet.</p></div>';
  return '<div class="status"' + src("Roster · Learners tab") + ">" + cnt("Who has not signed the agreement?" + sfx, count(cntOf(r, signedF)) + " of " + count(n) + " have signed the agreement" + byHand(r, "agreement")) + cnt("Who has not sent their answers?" + sfx, count(cntOf(r, ansF)) + " of " + count(n) + " have sent their twelve answers" + byHand(r, "answers")) + cnt("Who has not opened Your Page?" + sfx, count(cntOf(r, function (m) { return m.seenIso; })) + " of " + count(n) + " have opened Your Page") + '</div><p class="s" style="margin-top:6px"' + src("Config: answers reminder, once · John’s rulings Oct 23") + ">" + (fac() ? "Our team follows up on the agreement and the answers; nothing is asked of you. Press a line to see who." : "Each man gets one reminder for his answers. Press a line to see who.") + "</p>";
}
function roomCard(r) { return courseCard("Week " + wk(r) + ' reading: <span class="ap-nw">' + rd(r) + "</span>", (fac() ? "Your room" : r.name) + ' meets <span class="ap-nw">' + night(r) + ',</span> <span class="ap-nw">at ' + r.time + "</span>", "Weeks tab: what opens and the night · Rooms tab: meets"); }
function roomsCard() { var R = rooms(); return courseCard(Count(R.length) + " rooms walk it now: " + R.map(function (r) { return '<span class="ap-nw">' + r.name + " · Week " + wk(r) + "</span>"; }).join("; "), 'The next meets <span class="ap-nw">' + night(R[0]) + ',</span> <span class="ap-nw">at ' + R[0].time + "</span>", "Rooms tab"); }
function mailWalk(m, kind) { if (kind === "mail") return m.email ? '<a class="walk" href="mailto:' + esc(m.email) + '"><span class="u">Email him</span>&nbsp;<span class="ar">→</span></a>' : ""; var ph = String(m.phone || "").replace(/[^\d+]/g, ""); if (WHO && WHO.role === "admin" && m.email) return walk("texthim", "Text him", ' data-man="' + esc(m.email) + '"'); if (!ph) return ""; return '<a class="walk" href="sms:' + esc(ph) + '"><span class="u">Text him</span>&nbsp;<span class="ar">→</span></a>'; }
function manWalks(m) { if (typeof m === "string") m = manByEmail(m) || rosterAll().filter(function (x) { return x.email === String(m).toLowerCase(); })[0] || { email: m }; return mailWalk(m, "mail") + mailWalk(m, "sms"); }
function seatWords1(r) { return seatWords(r); }
function cardsFor(m) { var e = m.email, L = []; teamCards().concat(growCards()).forEach(function (c) { if (c.email === e && !S.done[c.id]) L.push(c.id); }); return L; }

/* ── Today (our team) ── */
function weekRows(r) {
  var h = "", w = wk(r), t = r.pieces[w];
  if (!r.name) return "";
  var leader = r.leader ? rt(r.leader) : "our team";
  if (after()) h += factRow("Tonight", "Week " + r.met + " met: " + titleOf(r, r.met) + ".", leader + "’s one answer after the room is in; Week " + wk(r) + ", " + titleOf(r, wk(r)) + ", is next " + weekdayOf(r, wk(r)) + ".", "", "Weeks tab");
  else h += factRow(weekdayOf(r, w) + ", " + (r.time || "").replace(/ Central$/, ""), "Week " + w + " meets: " + titleOf(r, w) + ".", leader + " is each man’s witness through the course.", walk("view", "See the room", ' data-v="rooms"'), "Rooms and Weeks tabs");
  var up = arr(FEED && FEED.coaching && FEED.coaching.upcoming).filter(function (s) { return s.source === "calendly" || s.source === "calendar" && !/buffer|CC Group/i.test(s.name); });
  if (up.length) h += coachRow(up);
  var gl = growCards().filter(function (c) { return !S.done[c.id]; });
  h += factRow("How We’re Growing", gl.length ? (gl.length === 1 ? "One waiting: " : "First of " + count(gl.length) + " waiting: ") + tie(gl[0].title) + "." : "Nothing waits for us there today.", "Most men come to us through a person; search and ads add slowly.", walk("view", "Open How We’re Growing", ' data-v="growing"'), "the cards on How We’re Growing · Message Platform: How we grow");
  return '<div class="dlist">' + h + "</div>";
}
function coachRow(up) {
  var f = up[0], t = Date.parse(f.at);
  return '<div class="drow fact"' + src("the week’s sessions ahead, from the Coaching tab and Calendly") + '><span class="lab">Coaching Sessions Ahead</span><span class="nm">' + Count(up.length) + " coaching " + (up.length === 1 ? "session" : "sessions") + " ahead; the next is " + esc(rt(f.name)) + ", " + longDay(isoDay(f.at)) + ", at " + clock12(f.at) + '.</span><ul class="vl">' + up.slice(0, 4).map(function (s) { return "<li>" + esc(rt(s.name)) + "<span>" + esc(s.session) + " · " + longDay(isoDay(s.at)) + ", " + clock12(s.at) + "</span></li>"; }).join("") + '</ul><div class="walks">' + linkWalk(CALENDLY, "Open Calendly") + askWalk("Who has a session this week?") + "</div></div>";
}
function releasePanel() {
  if (!(X && X.releaser)) return "";
  var P = relPlaced(), O = relOthers(), nowH = centralParts(nowMs()).h;
  if (!P.length) {
    if (nowH >= 18) return panel("release", "Release List", "Our team only · released at 6:00 PM", '<div class="dlist">' + factRow("Released at 6:00 PM", "This week’s readings reached each man at 6:00 PM.", "Next week’s are read or held here before 6:00 PM on the day they are kept.", linkWalk0(LINKS.growth, "See them on The Shelf"), "Research Engine, Entries") + "</div>", { src: "Research Engine, Entries" });
    return panel("release", "Release List", "Our team only · nothing kept today", '<p class="empty"' + src("Research Engine, Entries: nothing kept today") + ">This week’s readings have gone. Each man’s readings fill about 20 minutes a week, one longer piece or two or three short ones, and reach his Readings at 6:00 PM on the day our team keeps them; this is where you read or hold them.</p>", { src: "Research Engine, Entries" });
  }
  var waiting = P.filter(function (e) { return e.status === "candidate"; }), allOut = P.every(function (e) { return e.status === "released"; }), anyHeld = P.some(function (e) { return e.status === "held"; });
  var lab = function (e) { return e.status === "released" ? "Released · on each man’s Readings now" + (relUndoOk(e) ? " · Undo stays ten minutes" : "") : e.status === "held" ? "Kept back · men won’t get it · leaders still see it on The Shelf" : "Goes to the men at 6:00 PM today"; };
  var listen = function (e) { return e.link && !e.isSheet && !isSheet(e.link) ? linkWalk0(e.link, "Listen") : ""; };
  var acts = function (e) {
    if (e.status === "released") return listen(e) + (relUndoOk(e) ? '<button class="rev" data-act="relundo" data-id="' + esc(e.id) + '"><span>Undo</span></button>' : "");
    return (e.status === "held" ? "" : '<button class="btn line relb" data-act="relnow" data-id="' + esc(e.id) + '">Release now</button>') + listen(e) + '<button class="rev" data-act="hold" data-id="' + esc(e.id) + '"><span>' + (e.status === "held" ? "Undo" : "Keep back") + "</span></button>";
  };
  var h = '<p class="sum" id="relSum" tabindex="-1"' + src("ruled Nov 2: the 6:00 PM release · ruled Nov 3: readings paced by time, about 20 minutes a week a man; Release now, Keep back, Release all") + ">" + (allOut ? "<b>Released.</b> This week’s readings are on each man’s Readings now." : "This week’s " + (P.length === 1 ? "reading, about 20 minutes," : count(P.length) + " readings, about 20 minutes together,") + " go to each man’s Readings at 6:00 PM today. " + (P.length === 1 ? "Release it now, or keep it back." : "Release one now, or keep it back.")) + '</p><div class="dlist">' + P.map(function (e) { return '<div class="drow" id="r-' + esc(e.id) + '"' + src("Research Engine, Entries " + e.id + (e.place ? ": its place names " + rt(e.place) : "")) + '><span class="lab">' + lab(e) + '</span><span class="nm">' + tie(rt(e.claim)) + '</span><span class="st">' + esc(rt(e.voice)) + (e.costText ? " · " + esc(e.costText) : "") + '</span><div class="acts">' + acts(e) + "</div></div>"; }).join("") + "</div>" + (waiting.length > 1 ? '<div class="acts relall"><button class="btn line" data-act="relall">Release all</button></div>' : "");
  if (anyHeld && O.length) h += '<div class="part" id="inplace"' + src("Research Engine, Entries: today’s other candidates") + '><p class="lk">In Its Place</p><p class="help" style="margin-top:2px">Today’s ' + (O.length === 1 ? "other, if it fits" : count(O.length) + " others, if one fits") + ' his 20 minutes.</p><div class="dlist">' + O.map(function (o) { return '<div class="drow rrow" id="r-' + esc(o.id) + '"><span class="lab">Kept for The Shelf</span><span class="nm">' + tie(rt(o.claim)) + '</span><span class="st">' + esc(rt(o.voice)) + (o.minutes ? " · " + o.minutes + " min" : "") + '</span><div class="acts"><button class="btn line" data-act="inplace" data-id="' + esc(o.id) + '">Send instead</button>' + (o.link && !isSheet(o.link) ? linkWalk0(o.link, "Listen") : "") + "</div></div>"; }).join("") + "</div></div>";
  if (O.length) h += '<div class="dlist" style="margin-top:8px">' + factRow("The Other " + (O.length === 1 ? "One" : Count(O.length)), "Today’s " + (O.length === 1 ? "other candidate stays" : count(O.length) + " other candidates stay") + " with our team.", "They go on The Shelf for facilitators; a man’s readings fit his 20 minutes, never more.", linkWalk0(LINKS.growth, "See them on The Shelf"), "Research Engine, Entries · ruled Nov 3: readings fit each man’s 20 minutes") + "</div>";
  return panel("release", "Release List", "Our team only · about 20 minutes a man", h, { src: "Research Engine, Entries" });
}
function roomBrief(r) { var n = r.men.length; return '<div class="drow"' + src(r.src) + '><span class="lab">Week ' + wk(r) + " · " + night(r) + '</span><span class="nm">' + r.name + '</span><span class="st">Led by ' + rt(r.leader) + " · " + count(n) + " men · " + count(cntOf(r, signedF)) + " signed · " + count(cntOf(r, function (m) { return m.seenIso; })) + " on Your Page" + seatWords(r) + '</span><div class="walks">' + walk("roomdesk", "Open the room’s desk", ' data-room="' + esc(r.key) + '"') + "</div></div>"; }
function viewToday() {
  var C = teamCards(), r = rooms()[0];
  var main = (firstVisit() ? teamHow() : "") + panel("lane", "What Needs Us", laneNote(C, "a waiting man first", "lane"), lane(C, "Nothing needs us today." + (r && r.name ? " The room meets " + weekdayOf(r, wk(r)) + ", and the record is below." : " The record is below.")), { src: "the cards below" });
  main += releasePanel();
  if (r && r.name) main += panel("week", "This Week", after() ? "Week " + r.met + " met · Week " + wk(r) + " is next" : "Week " + wk(r) + " of 12 · " + longDay(todayStr()), weekRows(r), { src: "Weeks tab" });
  var side = bothSide();
  if (multi()) side += panel("room", "The Rooms", Count(rooms().length) + " rooms · " + rt(r.course), roomsCard() + '<div class="dlist" style="margin-top:8px">' + rooms().map(roomBrief).join("") + "</div>", { src: "Rooms tab" });
  else if (r && r.name) side += panel("room", "The Room", r.name + " · Week " + wk(r) + " of 12", roomCard(r) + '<div style="margin-top:14px">' + statusLine(r) + '</div><div class="walks">' + walk("view", "See the room", ' data-v="rooms"') + "</div>", { src: "Rooms tab · Weeks tab" });
  else side += panel("room", "The Room", "Not on the record yet", cantRead("Rooms tab"), { src: "Rooms tab" });
  side += askPanel(["Who has his hand raised, and what did he ask for?", "Which moment has nothing live?"]);
  return cols(main, side);
}


/* ══════════ Signals Waiting, How We’re Growing ══════════ */
function sigKindName(k) { for (var i = 0; i < SIGKINDS.length; i++) if (SIGKINDS[i][0] === k) return SIGKINDS[i][1]; return k; }
function sigWhyName(k) { for (var i = 0; i < SIGWHY.length; i++) if (SIGWHY[i][0] === k) return SIGWHY[i][1]; return k; }
function sigById(id) { var d = S.sig[id]; if (d && d.c) return d.c; return SIGNALSf().filter(function (c) { return c.id === id; })[0]; }
function sigLeft() { return SIGNALSf(); }
function notNowDay() { return addDays(todayStr(), 30); }
function sigAsides() {
  var L = SIGASIDE().map(function (a) { return { id: a.id, nm: a.nm, why: a.why }; });
  Object.keys(S.sig).forEach(function (id) { var d = S.sig[id]; if (d && d.act === "aside" && !L.some(function (a) { return a.id === id; }) && !S.sigBack[id]) L.push({ id: id, nm: d.c ? d.c.nm : id, why: sigWhyName(d.why) }); });
  return L.filter(function (a) { return !S.sigBack[a.id]; });
}
function sigPanel() {
  var L = frontFirst(sigLeft(), S.sigFront), asides = sigAsides(), body = "";
  if (down()) body += downRow();
  if (S.sres) body += sresHtml();
  else if (S.sigLast) { var c0 = sigById(S.sigLast), d0 = S.sig[S.sigLast]; if (c0 && d0) body += '<p class="kept" tabindex="-1" id="sigKept"' + src("this press, kept on the Moves tab") + ">" + (d0.act === "move" ? "<b>Changed The Moves.</b> Added “" + tie(c0.nm) + "” as " + MOVEPLAIN[d0.kind] + ", open." + (d0.kind === "search" ? " The Search profile row now says Draft the article; the search task picks it up." : "") : "<b>Changed The Moves.</b> Set aside “" + tie(c0.nm) + "”: " + sigWhyName(d0.why) + ". " + (d0.why === "notnow" ? "It comes back " + longDay(notNowDay()) + "." : "The Moves tab keeps the reason.")) + ' <button class="walk" data-act="sigundo" data-id="' + esc(S.sigLast) + '"><span class="u">Undo</span></button></p>'; }
  if (!L.length && !S.loaded && !S.down) body += '<p class="empty" tabindex="-1" id="sigEmpty"' + src("the first read of the record has not answered yet") + ">Reading the record…</p>";
  else if (!L.length) body += '<p class="empty" tabindex="-1" id="sigEmpty"' + src("the list, when every signal has a move or a reason") + ">" + (sigCantRead() ? "Every signal we can read has a move or a reason. New ones arrive the morning after each room, and from the search read each month." : "Every signal has a move or a reason. New ones arrive the morning after each room, and from the search read each month." + (PX() ? " A partner’s need arrives here too." : "")) + "</p>";
  else {
    var sp = Math.max(0, Math.min(S.sigPos || 0, L.length - 1)); S.sigPos = sp;
    if (L.length > 1) body += '<div class="step"' + src("one signal at a time, Back and Next (the card standard, ruled Nov 4)") + '><span class="of" id="of-sig">Signal ' + (sp + 1) + " of " + L.length + '</span><span class="nav">' + (sp > 0 ? walkB("sigprev", "Back") : "") + (sp < L.length - 1 ? walk("signext", "Next") : "") + "</span></div>";
    body += '<div class="dlist">' + (L[sp].partner ? psigRow(L[sp]) : sigRow(L[sp])) + "</div>";
    if (L.length > 1) body += rev("sig-every", "Every signal · " + L.length, '<ul class="vl"' + src("every signal that waits, in the order shown; pressing one shows it") + ">" + L.map(function (c, i) { return '<li class="b"><button class="vlb" data-act="sigfront" data-id="' + esc(c.id) + '"' + (i === sp ? ' aria-current="true"' : "") + ">" + tie(c.nm) + "<span>" + (i === sp ? "Showing now · " : "") + c.lab + " · " + esc(c.st.split(" · ")[0]) + (c.st.split(" · ")[1] ? " · " + esc(c.st.split(" · ")[1]) : "") + "</span></button></li>"; }).join("") + "</ul>");
  }
  if (sigCantRead()) body += sigCantHtml();
  body += movesPart(asides);
  var n = L.length, nt = L.length ? (n === 1 ? "One signal" : Count(n) + " signals") + " · " + (L.some(function (c) { return c.partner; }) ? "a partner’s need first" : "newest first") : sigCantRead() ? "Partners’ needs can’t be read right now" : "Nothing waiting · " + (PX() ? "partners’ needs arrive here too" : "newest first");
  return panel("signals", "Signals Waiting", nt + (L.length && sigCantRead() ? " · partners’ needs can’t be read right now" : ""), body, { src: "Room Signals and the Search profile, through the Moves tab; a partner’s needs from the Partner Signals tab" });
}
function wayRow(w) {
  var ex = "";
  if (w.lab === "Through Search") ex = rev("trk", "Copy a tracked link", trackHtml());
  if (w.lab === "Through Our Email") ex = rev("camp", "The count and the last campaigns", campHtml());
  if (w.lab === "Through a Partner" && w.x) ex = w.x;
  return '<div class="drow fact"' + src(w.src) + '><span class="lab">' + w.lab + '</span><span class="nm">' + w.fact + '</span><p class="why">' + w.means + '</p><div class="walks">' + (w.go ? linkWalk(w.go[1], w.go[0]) : "") + (w.go2 ? linkWalk0(w.go2[1], w.go2[0]) : "") + (w.lab === "Through a Person" ? walk("roomask", "See the email") : "") + askWalk(w.ask) + "</div>" + ex + "</div>";
}
function trackHtml() {
  var A = arr(FEED && FEED.search && FEED.search.live); if (!A.length) return '<p class="s"' + src("the live search tool row") + ">No article is live to link yet.</p>";
  if (S.linkArt >= A.length) S.linkArt = 0;
  return '<p class="s"' + src("the live search tool row: each link tagged for where it is posted (utm_source and utm_medium)") + ">Each link carries a note of where it was posted, so the next count can say where a man came from.</p><p class=\"boxq\">Which article?</p><div class=\"choices\">" + A.slice(0, 6).map(function (x, i) { return '<button class="choice left" data-act="trkpick" data-v="' + i + '" aria-pressed="' + (S.linkArt === i) + '">' + esc(rt(x.title)) + "</button>"; }).join("") + '</div><p class="s" style="margin-top:10px"' + src("the live words: Copy its link for") + ">Copy its link for</p><div class=\"walks\">" + ["Email", "Video", "Social"].map(function (x) { return walk("copylink", x, ' data-w="' + x.toLowerCase() + '"'); }).join("") + "</div>";
}
function campHtml() {
  var lst = weekRow("The list"), a = AC || {}, st = a.stages || {}, mn = st.men || {}, ch = st.churches || {}, un = a.unsubscribed || {}, cs = arr(a.campaigns).slice(0, 4);
  var line = AC ? count(mn.on_the_list) + " men on the list: " + count(mn.hand_raised) + " raised a hand, " + count(mn.wait_list || 0) + " on the wait list, " + count(mn.in_conversation || 0) + " in conversation. " + count((ch.no_reply || 0) + (ch.has_program || 0) + (ch.no_program || 0) + (ch.referred || 0) + (ch.not_us || 0)) + " churches: " + count(ch.has_program || 0) + " have a program, " + count(ch.no_program || 0) + " want one, " + count(ch.referred || 0) + " referred. " + count(un.count || 0) + " unsubscribed this window, " + count(un.all_time || 0) + " all time." : (lst ? rt(lst.fact) : "The count sheet has not been read yet.");
  return '<p class="s"' + src("AC count, latest: the list line") + ">" + line + "</p>" + (cs.length ? '<ul class="vl"' + src("AC count: the last campaigns") + ">" + cs.map(function (k) { var clicks = Object.keys(k).filter(function (x) { return x.indexOf("unique_clicks") === 0; }).reduce(function (s, x) { return s + Number(k[x] || 0); }, 0), pct = k.sent ? Math.round(100 * Number(k.unique_opens || 0) / Number(k.sent)) : 0; return "<li>" + esc(rt(k.name)) + "<span>" + esc(shortDay(isoDay(k.sent_or_scheduled))) + " · to " + esc(k.sent) + " · " + esc(k.unique_opens) + " opened (" + pct + "%) · " + clicks + " clicked · " + esc(k.unsubscribes) + " left</span></li>"; }).join("") + "</ul>" : "") + '<div class="walks">' + linkWalk(LINKS.ac, "Open the AC count") + "</div>";
}
function costRow() {
  var rd0 = roadFind(), c = rd0 && rd0.road && rd0.road.cost; if (!c) return "";
  var pays = arr(FEED && FEED.payments && FEED.payments.recent);
  return '<div class="drow fact"' + src("the road model’s cost row, its live words · Payments tab") + '><span class="lab">The Plan, and What It Costs</span><span class="nm">' + esc(rt(c.spend || "")) + '</span><p class="why">' + esc(rt([c.came, c.means].filter(Boolean).join(" "))) + "</p>" + (pays.length ? rev("pays", "Payments (" + pays.length + ")", '<ul class="vl"' + src("Payments tab") + ">" + pays.slice(0, 6).map(function (p) { return "<li>" + money(p.amount) + "<span>" + longDay(isoDay(p.received)) + " · " + esc(rt(p.matched || "no matching man yet")) + "</span></li>"; }).join("") + '</ul><div class="walks">' + linkWalk(STRIPE, "Open in Stripe") + "</div>") : "") + '<div class="walks">' + linkWalk(LINKS.forecast, "Open the Actuals") + askWalk("What has an ad brought in so far?") + "</div></div>";
}
function viewGrowing() {
  var G = growCards();
  var lead = (down() ? downRow() : "") + '<p class="sum"' + src("Message Platform: Where a man meets us") + ">Each card names the moment it serves. What a man hears comes from the Message Platform.</p>";
  var main = panel("gcards", "For Us to Do", laneNote(G, "a waiting man first", "gcards"), lead + lane(G, "Nothing waits for us here today. The ways men reach us are below."), { src: "the cards below" });
  main += sigPanel();
  main += panel("ways", "The Ways Men Reach Us", "One row each · read " + shortDay(isoDay(wroteIso()) || todayStr()), '<p class="sum"' + src("Message Platform: How we grow · Roster: referred-by") + ">Most men come to us through a person. Search and ads add slowly, and the plan counts on both.</p><div class=\"dlist\">" + WAYSf().map(wayRow).join("") + costRow() + "</div>", { src: "the rows below" });
  main += panel("moments", "Where a Man Meets Us", "Eight moments · from the Message Platform", '<p class="sum"' + src("Message Platform: Where a man meets us") + ">A man reaches out at a moment in his life, not because of his age or income. What he hears is the Message Platform’s own words.</p><div class=\"dlist\">" + MOMENTSf().map(function (m) {
    var open = m.cards.filter(function (id) { return !S.done[id]; });
    return '<div class="drow mrow"' + src("Message Platform: the moment, what he hears, where he goes · live: Search profile, Google Ads, Events tab") + '><span class="lab">The moment</span><span class="nm">' + m.mo + '</span><p class="heard">“' + tie(m.heard) + '”</p><p class="goes">Where he goes: ' + m.goes + "</p>" + (m.live ? '<p class="live"><b>Live now:</b> ' + esc(m.live) + "</p>" : m.unknown ? '<p class="live none"><b>Nothing live for this moment yet.</b></p>' : '<p class="live none"><b>Nothing live for this moment yet.</b></p>') + '<div class="walks">' + (open.length ? walk("tocard", open.length === 1 ? "See its card" : "See its cards", ' data-id="' + esc(open[0]) + '"') : "") + (m.live ? "" : askWalk("What would serve the man someone who loves him sent?")) + "</div></div>";
  }).join("") + '</div><div class="walks">' + linkWalk(LINKS.mp, "Open the Message Platform") + "</div>", { shut: true, src: "Message Platform" });
  var side = bothSide() + askPanel(["Which moment has nothing live?", "What has an ad brought in so far?"]);
  side += janPanel();
  side += recordPanel([["Message Platform", recBlurb("mp"), LINKS.mp], ["Search profile", recBlurb("search"), LINKS.search], ["AC count", recBlurb("ac"), LINKS.ac]]);
  return cols(main, side);
}
function janPanel() {
  var f = X && X.forecast, rows = "";
  if (f && f.quarterGoal != null) rows += factRow("The first quarter", moneyW(f.booked || 0) + " booked of a " + moneyW(f.quarterGoal) + " goal.", "The January rooms and ten one-on-one clients carry it." + (f.target ? " The year’s target is " + moneyW(f.target) + "." : ""), linkWalk(LINKS.forecast, "Open the 2027 Target"), "January Forecast: 2027 Target tab");
  rows += factRow("Next on the plan", "The forecast holds the events and the actuals.", "", askWalk("What is on the plan for the January rooms and the actuals?"), "January Forecast: Events tab and Actuals tab");
  return panel("jan", "Toward January", "2027 Target", '<div class="dlist">' + rows + "</div>", { src: "January Forecast" });
}

/* ══════════ The Moves, drawn on the desk ══════════ */
function moveSt(m) { return m.st; }
function moveRes(m) { return m.ans === "nochange" ? "No change" : m.ans === "helped" ? "Helped" : ""; }
function movesList() { return movesAll().filter(function (m) { return m.st !== "dropped"; }); }
function cap(t) { t = String(t || ""); return t.charAt(0).toUpperCase() + t.slice(1); }
function nowLine(m) { return m.before && m.now ? "Before: " + rt(m.before) + " Now: " + rt(m.now) : m.now ? rt(m.now) : "The numbers come in the next read."; }
function moveBtns(m, s) { return '<div class="acts">' + (s === "taken" ? '<button class="done" data-act="moveset" data-k="' + esc(m.k) + '" data-v="done">Made</button>' : "") + (s === "done" ? '<p class="why" style="margin:0 0 6px;flex-basis:100%"><b>Did it work?</b> ' + esc(nowLine(m)) + '</p><button class="done" data-act="moveset" data-k="' + esc(m.k) + '" data-v="checked" data-a="helped">Helped</button><button class="done" data-act="moveset" data-k="' + esc(m.k) + '" data-v="checked" data-a="nochange">No change</button>' : "") + (s !== "checked" ? '<button class="done" data-act="moveset" data-k="' + esc(m.k) + '" data-v="dropped">Drop</button>' : "") + "</div>"; }
function moveRow(m) {
  var s = m.st;
  return '<div class="drow fact rrow' + (S.hiMove === m.k ? " mrow hil" : "") + '" id="mv-' + esc(m.k) + '"' + src("Front Desk sheet · Moves tab") + '><span class="lab">' + (s === "taken" ? (m.due ? "Due " + m.due : "Added today") : s === "done" ? "The check comes " + (m.check || "in a month") : "Checked · " + (moveRes(m) || "Helped")) + '</span><span class="nm">' + tie(m.signal) + '</span><span class="st">' + cap(plainMove(m.move)) + " · " + m.from + '</span><span class="st">Owner: ' + esc(m.owner || "our team") + (s !== "taken" ? (m.due ? " · made by " + m.due : "") : "") + "</span>" + moveBtns(m, s) + (S.hiMove === m.k ? '<div class="walks">' + walkB("cback", "Back to For Us to Do") + "</div>" : "") + "</div>";
}
function movesHtml() {
  var L = movesList(), G = [["taken", "Open", "Make the move by its day, then press Made."], ["done", "Made, Waiting for the Check", "A month on, read the numbers on the row: did it work?"], ["checked", "Checked", "Kept with its answer, so we learn what each kind of move does."]];
  return '<p class="lk">How We’re Growing</p><p class="status" style="margin-top:2px">The Moves</p><p class="s"' + src("the live Moves foot, its words") + ">Each move answers a signal. A search-article move also writes the phrase’s row on the Search profile, so the search task picks it up.</p>" + G.map(function (g) {
    var R = L.filter(function (m) { return m.st === g[0]; });
    R.sort(function (a, b) { return g[0] === "done" ? String(a.checkIso).localeCompare(String(b.checkIso)) : String(a.dueIso || "9").localeCompare(String(b.dueIso || "9")); });
    return '<div class="part"><p class="lk">' + g[1] + '</p><p class="help" style="margin-top:2px">' + g[2] + "</p>" + (R.length ? '<div class="dlist">' + R.map(moveRow).join("") + "</div>" : '<p class="s">None just now.</p>') + "</div>";
  }).join("") + '<p class="help"' + src("Front Desk sheet · Moves tab: every row") + ">Every move on the record is listed here.</p>";
}
function movesPart(asides) {
  var L = movesList(), open = 0, done = 0, checked = 0, dueWk = 0;
  L.forEach(function (m) { if (m.st === "taken") { open++; if (m.dueWk) dueWk++; } else if (m.st === "done") done++; else if (m.st === "checked") checked++; });
  var rows = "";
  return '<div class="part"' + src("Front Desk sheet · Moves tab, plus this visit’s presses") + '><p class="sum" id="mvSum" tabindex="-1"><b>' + Count(open + done + checked) + " " + ((open + done + checked) === 1 ? "move" : "moves") + " taken:</b> " + count(open) + " open" + (dueWk ? " (" + count(dueWk) + " due this week)" : "") + ", " + count(done) + " done, " + count(checked) + ' checked.</p><div class="walks">' + walk("moves", "See the moves") + "</div>" + (asides.length ? rev("sig-aside", "Set aside (" + asides.length + ")", '<div class="dlist">' + asides.map(function (c) { return '<div class="drow fact"><span class="lab">' + esc(c.why) + '</span><span class="nm">' + tie(c.nm) + '</span><div class="walks">' + walk("sigback", "Bring it back", ' data-id="' + esc(c.id) + '"') + "</div></div>"; }).join("") + "</div>") : "") + "</div>";
}

/* ══════════ The Rooms (our team): the roster, one row per man ══════════ */
function piecesLine() { var r = JJf(), w = wroteCount(r); return w ? '<p class="s" style="margin-top:6px"' + src("the pieces written, counted from the site’s own notices (that a man wrote, never what)") + ">" + esc(w.name) + ": " + count(w.n) + " of " + count(w.of) + " have written it.</p>" : ""; }
function rosterRow(m) {
  var n = m.n || "", cards = cardsFor(m), hA = m.hA || S.handled[m.email + ":agreement"], hN = m.hN || S.handled[m.email + ":answers"], seat = m.room ? (m.seat || 0) : 0;
  var lab = cards.length ? (cards.length === 1 ? "One thing waits" : Count(cards.length) + " things wait") : seat ? "Seat " + seat : m.room ? "In the room" : m.wl ? "Wait list" : "On the sheet";
  var wrote = m.room ? wroteOf(JJf(), n) : "";
  var st = (m.room ? ["Group · " + (m.how === "by hand" ? "by hand" : "seat link"), m.signed || m.signedAt ? "agreement signed" : hA ? "agreement handled by hand" : "no signed agreement", m.ansAt ? "answers in " + shortDay(m.ansAt) : hN ? "answers handled by hand" : "no answers yet", wrote ? "Write a Lament written " + wrote : ""] : m.wl ? ["Group · here for a group · wait list " + shortDay(m.waitAt), m.hereFor ? m.hereFor : ""] : ["account " + shortDay(m.acctAt), "no step taken yet"]).filter(Boolean).join(" · ");
  var named = !!(n || S.names[m.email]), nm = named ? esc(S.names[m.email] || n) : '<span class="muted">(no name yet)</span>';
  var walks = (!named && !S.nameOpen ? walk("nameopen", "Add his name", ' data-man="' + esc(m.email) + '"') : "") + (named ? manWalks(m) : "") + (named ? walk("mancard", "His card", ' data-man="' + esc(m.email) + '"') : "") + (m.ansAt ? walk("readans", "Read his answers", ' data-man="' + esc(m.email) + '"') : "") + (cards.length ? walk("tocard", "See his card", ' data-id="' + esc(cards[0]) + '"') : "");
  var form = !named && S.nameOpen === m.email ? '<label class="boxq" for="nmin">What is his name?</label><textarea id="nmin" class="one" maxlength="80" placeholder="His name, as it is said">' + esc(S.nameDraft) + '</textarea><div class="acts"><button class="btn line" data-act="namesave" data-man="' + esc(m.email) + '">Save</button><button class="done" data-act="namecancel">Not now</button></div>' : "";
  var kind = m.room && !signedF(m) ? "agreement" : m.room && signedF(m) && !ansF(m) ? "answers" : "", ask = "";
  if (kind) { var k = kind.slice(0, 3) + "-" + m.email, a = askedAt(m.email, kind), M = S.mail[k] || {}; ask = '<div class="acts">' + walk("mailsee", a ? "Asked " + a.split(",")[0] + " · see it" : (kind === "agreement" ? "Send the agreement ask" : "Send the answers ask"), ' data-key="' + esc(k) + '" data-kind="' + kind + '" data-man="' + esc(m.email) + '"') + '<button class="done" data-act="handled" data-man="' + esc(m.email) + '" data-kind="' + kind + '">Handled</button></div>' + (M.open ? mailPreview(k, kind, [m.email]) : ""); }
  return '<div class="drow fact rrow" id="man-' + esc(slug(m.email)) + '"' + src(m.room ? "Roster · Room tab · Sends tab" : m.wl ? "AC count: wait list and hand raised · Roster" : "Roster: account only · Names tab") + '><span class="lab">' + lab + '</span><span class="nm">' + nm + '</span><span class="st">' + st + "</span>" + form + tnRosterLine(m) + '<div class="walks">' + walks + "</div>" + ask + "</div>";
}
function askedAt(email, kind) { var a = ""; sendsList().forEach(function (x) { if (x.email === email && x.kind === kind) a = x.at; }); if (!a) { var m = rosterBy(email); var iso = m && (kind === "agreement" ? m.askedAgreement : m.askedAnswers); if (iso) a = dayTime(iso); } return a; }
/* build 38: our own addresses (an admin only; not on the Roster, never in a count) */
function oursBy(em) { var e = String(em || "").toLowerCase(), o = null; arr(OURS).forEach(function (x) { if (String(x.email).toLowerCase() === e) o = x; }); return o; }
function oursRows() {
  if (!(WHO && WHO.role === "admin") || !arr(OURS).length) return "";
  return arr(OURS).map(function (o) {
    return '<div class="drow fact rrow" id="man-' + esc(slug(o.email)) + '"' + src("our own addresses, kept by the script; not on the Roster and in no count") + '><span class="lab">Our own address</span><span class="nm">' + esc(o.name) + " · yours</span><span class=\"st\">" + esc(o.email) + "</span>" + tnRosterLine(o) + '<div class="walks">' + walk("texthim", "Text him", ' data-man="' + esc(o.email) + '"') + "</div></div>";
  }).join("");
}
function rosterPanel() {
  var all = rosterAll(), seated = all.filter(function (m) { return m.room; }), signed = seated.filter(signedF), ans = signed.filter(ansF), wl = all.filter(function (m) { return m.wl; }).length, acct = all.filter(function (m) { return m.acct; }), noName = acct.filter(function (m) { return !m.n && !S.names[m.email]; }).length, w = wroteCount(JJf());
  var sum = '<p class="sum"' + src("the live summary line (desk.js renderMen), its words · Roster · Room tab · AC count · Names tab") + "><b>" + Count(seated.length) + " men</b> seated. <b>" + count(signed.length) + " of " + count(seated.length) + "</b> in the room have signed the agreement" + byHand(JJf(), "agreement") + "; <b>" + count(ans.length) + " of " + count(signed.length) + "</b> who signed have answered the questions" + byHand(JJf(), "answers") + ". " + (wl === 1 ? "One man is" : Count(wl) + " men are") + " on the wait list. " + (acct.length === 1 ? "One man has" : Count(acct.length) + " men have") + " a site account and nothing else yet." + (noName ? " " + (noName === 1 ? "One man has" : Count(noName) + " men have") + " no name yet." : "") + (w ? " <b>" + esc(w.name) + "</b>: " + count(w.n) + " of " + count(w.of) + " have written it." : "") + "</p>";
  var rows = all.slice().sort(function (a, b) { return (b.room ? 1 : 0) - (a.room ? 1 : 0) || (a.seat || 99) - (b.seat || 99); }).map(rosterRow).join("") + oursRows();
  return panel("roster", "The Roster", rt(JJf().name) + " · " + count(all.length) + " men on the sheet", (down() ? downRow() : "") + sum + '<div class="walks">' + linkWalk(LINKS.desk, "Open the sheet") + askWalk("Who is outstanding?") + '</div><div class="dlist">' + rows + "</div>" + sendsRev("sends-roster", null), { src: "Roster" });
}
function seatsRow() { var wl = rosterAll().filter(function (m) { return m.wl; }), first1 = wl[0]; return factRow("Seats and the Wait List", wl.length ? (wl.length === 1 ? "One man is" : Count(wl.length) + " men are") + " on the wait list" + (first1 && first1.waitAt ? ", waiting since " + longDay(isoDay(first1.waitAt)) : "") + "." : "No man is on the wait list.", "When a man takes a seat in a January room, his seat email is a card for our team; when a room fills, a card asks us to close its seat link, and it goes away on its own if a seat opens.", (growCards().concat(teamCards()).filter(function (c) { return c.hand; })[0] ? walk("tocard", "See his card", ' data-id="' + esc(growCards().concat(teamCards()).filter(function (c) { return c.hand; })[0].id) + '"') : "") + askWalk("Who is on the wait list?"), "AC count: wait list · Actions: seat: and room:full (rules R1 and R8)"); }
function viewRooms() {
  var R = rooms(), main, r = R[0];
  if (!r || !r.name) main = panel("rooms", "The Rooms", "Not on the record yet", cantRead("Rooms tab"), { src: "Rooms tab" });
  else if (R.length > 1) main = panel("rooms", "The Rooms", Count(R.length) + " rooms · " + rt(r.course), (down() ? downRow() : "") + roomsCard() + '<div class="dlist" style="margin-top:8px">' + R.map(function (q) { return '<div class="drow"' + src(q.src) + '><span class="lab">Week ' + wk(q) + " · " + night(q) + '</span><span class="nm">' + q.name + '</span><span class="st">Led by ' + rt(q.leader) + seatWords(q) + '</span><div style="margin-top:10px">' + statusLine(q) + '</div><div class="walks">' + walk("roomdesk", "Open the room’s desk", ' data-room="' + esc(q.key) + '"') + "</div></div>"; }).join("") + "</div>", { src: "Rooms tab" });
  else main = panel("rooms", "The Rooms", "One room now · " + rt(r.course) + " · Week " + wk(r) + " of 12", (down() ? downRow() : "") + '<p class="lk"' + src("Rooms tab · People tab") + ">" + r.name + " · led by " + rt(r.leader) + '</p><div style="margin-top:10px">' + roomCard(r) + '</div><div style="margin-top:18px">' + statusLine(r) + "</div>" + piecesLine() + '<div class="walks">' + walk("roomdesk", "Open the room’s desk", ' data-room="' + esc(r.key) + '"') + "</div>", { src: "Rooms tab" });
  main += rosterPanel();
  main += panel("jan2", "The January Rooms", "Two to three · paid", '<div class="dlist">' + factRow("The open night", "The forecast holds the dates.", "Applications open that night; talks with each man who applies follow, and rosters are paid before the new rooms begin.", linkWalk(LINKS.forecast, "Open the Events tab"), "January Forecast: Events tab") + seatsRow() + "</div>", { src: "January Forecast: Events tab · Roster · AC count" });
  var side = bothSide() + askPanel(["Who has not opened Your Page?", "Who brought each man in the room?"]);
  side += recordPanel([["Room Signals", recBlurb("signals"), LINKS.signals], ["For the Facilitator", "Each week’s page for the room", LINKS.folder]]);
  return cols(main, side);
}

/* ══════════ The Record ══════════ */
function recRows(withAside) {
  var since = addDays(todayStr(), -((parseDay(todayStr()).getDay() + 6) % 7)), L = [];
  arr(FEED && FEED.inbound && FEED.inbound.recent).forEach(function (i) { if (isoDay(i.received) >= since && !/Signed copy/i.test(i.kind)) L.push({ iso: i.received, day: isoDay(i.received), lab: longDay(isoDay(i.received)), nm: rt(i.kind) + (i.name ? " — " + rt(i.name) : "") + ".", means: rt(i.summary || ""), link: i.link, who: i.name || "A man, no name yet", needs: i.handling !== "captured", src: "Inbound tab: " + (i.source || "") }); });
  arr(FEED && FEED.payments && FEED.payments.recent).forEach(function (p) { if (isoDay(p.received) >= since) L.push({ iso: p.received, day: isoDay(p.received), lab: longDay(isoDay(p.received)), nm: "A payment came in: " + money(p.amount) + (p.matched ? "." : ", with no matching man on the roster."), means: p.matched ? rt(p.matched) : "It is a card on Today: Match this payment to a man.", link: p.link || STRIPE, who: p.matched || "A payment, no man yet", needs: !p.matched, src: "Payments tab" }); });
  rosterAll().forEach(function (m) { if (m.acctAt && isoDay(m.acctAt) >= since && !m.n) L.push({ iso: m.acctAt, day: isoDay(m.acctAt), lab: longDay(isoDay(m.acctAt)), nm: "A new account, with no step taken yet.", means: "No card: an account alone asks nothing of us. He has no name yet.", link: "", who: "A man, no name yet", needs: false, src: "Roster: Account only · Names tab", acct: m }); });
  L = L.sort(function (a, b) { return String(b.iso).localeCompare(String(a.iso)); }).slice(0, 12);
  if (withAside) { /* build 32.2: a form that looks like spam is not a row; each day shows one line, counted by submission, with the way to Gmail */
    arr(FEED && FEED.inbound && FEED.inbound.spam).forEach(function (d) { if (d.day >= since) L.push({ iso: d.received, day: d.day, lab: longDay(d.day), nm: d.n + (d.n === 1 ? " contact form" : " contact forms") + " set aside as spam", means: "", link: d.link, who: "", needs: false, aside: true, src: "Inbound tab: contact forms that look like spam, one line a day" }); });
    L.sort(function (a, b) { return String(b.iso).localeCompare(String(a.iso)); });
  }
  return L;
}
function sinceSum() { var L = recRows(), nd = L.filter(function (x) { return x.needs; }).length, since = addDays(todayStr(), -((parseDay(todayStr()).getDay() + 6) % 7)); if (!L.length) return '<p class="sum"' + src("the live summary line, its words · since last Monday") + ">Nothing came in since Monday.</p>"; return '<p class="sum"' + src("the live summary line, its words · since last Monday") + ">Since " + shortDay(since) + ": <b>" + (L.length === 1 ? "One thing" : Count(L.length) + " things") + "</b> came in; <b>" + (nd === 1 ? "one needs" : count(nd) + " need") + " a look</b> and the rest turned into cards or marks.</p>"; }
function byManRev() { var L = recRows(); return rev("byman", "By man, newest first", '<ul class="vl"' + src("Inbound, Payments and the Roster, grouped by man as the live desk does") + ">" + L.map(function (x) { return "<li>" + esc(x.who) + "<span>" + esc(x.nm) + " · " + x.lab + "</span></li>"; }).join("") + '</ul><div class="walks">' + linkWalk(LINKS.desk, "Open the full record") + askWalk("What came in since I was last here?") + "</div>"); }
function findRows() {
  var q = S.find.trim().toLowerCase(); if (!q) return "";
  var L = FINDABLEf().filter(function (f) { return (f[1] + " " + f[2]).toLowerCase().indexOf(q) >= 0; });
  if (!L.length) return '<p class="s"' + src("the record the desk reads") + ">Nothing on the record by that name. Try a first name, a page title or a room.</p>";
  return '<div class="dlist">' + L.slice(0, 6).map(function (f) { return '<div class="drow"' + src(f[0] === "A man" ? "Roster" : f[0] === "A page" ? "Search profile" : f[0] === "A room" ? "Rooms tab" : "Message Platform") + '><span class="lab">' + f[0] + '</span><span class="nm">' + esc(f[1]) + '</span><span class="st">' + esc(f[2]) + '</span><div class="walks">' + (f[0] === "A man" ? walk("mancard", "Open it", ' data-man="' + esc(f[3]) + '"') : f[0] === "A page" ? linkWalk0(f[3], "Open it") : f[0] === "A room" ? walk("roomdesk", "Open it", ' data-room="' + esc(f[3]) + '"') : walk("inrec", "Open it", ' data-k="' + esc(f[3]) + '"')) + "</div></div>"; }).join("") + "</div>";
}
function viewRecord() {
  var find = '<div class="findtop"><label class="sr" for="findt">Find a man, a page or a room</label><div class="find"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg><input id="findt" type="search" placeholder="Find a man, a page or a room" value="' + esc(S.find) + '" autocomplete="off"></div><div class="fres" id="fres" aria-live="polite">' + findRows() + "</div></div>";
  var since = addDays(todayStr(), -((parseDay(todayStr()).getDay() + 6) % 7)), rows = recRows(true);
  var main = panel("came", "Since Last Monday", "What came in · " + longDay(since).replace(/^\w+, /, "") + " to " + longDay(todayStr()).replace(/^\w+, /, ""), (down() ? downRow() : "") + sinceSum() + (rows.length ? '<div class="dlist">' + rows.map(function (x) { return factRow(x.lab, x.nm, x.means, (x.link ? linkWalk(x.link, /stripe/.test(x.link) ? "Open in Stripe" : "Open in Gmail") : "") + (x.acct ? walk("nameopen", "Add his name", ' data-man="' + esc(x.acct.email) + '"') : ""), x.src); }).join("") + "</div>" : "") + byManRev(), { src: "Roster · AC count · Search profile · Payments · Inbound" });
  var backW = S.recFrom && S.recFrom !== "record" ? '<div class="walks" style="margin-top:0"><button class="walk" data-act="view" data-v="' + esc(S.recFrom) + '"><span class="ar">←</span>&nbsp;<span class="u">Back to ' + VIEWS.team.filter(function (x) { return x[0] === S.recFrom; })[0][1] + "</span></button></div>" : "";
  main += panel("records", "Our Records", "Where the desk reads from", backW + '<div class="dlist">' + RECSf().map(function (r) { return '<div id="rec-' + r[3] + '">' + factRow(r[3] === "mp" ? "A Document" : "A Sheet", r[0], r[1], linkWalk(r[2], "Open it"), "the record itself") + "</div>"; }).join("") + "</div>", { src: "Config: the sheets the desk reads" });
  var side = bothSide() + askPanel(["Who has his hand raised, and what did he ask for?", "Which partners have we written to this month?"]);
  return cols(find + main, side);
}


/* ══════════ a facilitator ══════════ */
function pieceCard(r) {
  var w = wk(r), pc = PIECEFOR[w]; if (!pc) return null; var tonight = night_();
  if (tonight) return { id: "f0" + r.key, kind: "Tonight’s Piece", title: "Three minutes in the room tonight", state: pc.voice + " · " + pc.cost, why: "“" + pc.claim + "”", pts: pc.move, act: "", noact: 1, src: "Research Engine, Entries " + pc.id + ": its claim and its moves for the room" };
  return { id: "f0" + r.key, kind: "The Room’s Piece", title: "Listen to Week " + w + "’s piece before " + weekdayOf(r, w), state: pc.voice + " · " + pc.cost, why: "Three minutes in the room: “" + pc.claim + "”", act: "Bring it", doneLabel: "Skip", sent: "Bringing it " + weekdayOf(r, w) + ". Its points are in This Week.", src: "Research Engine, Entries " + pc.id + ": the piece for the room’s week" };
}
var SAFETY = "If a man tells you something that can’t wait: call 911, or 988 for a crisis, then call our team tonight at 214-736-1024. Your part ends at the handoff.";
var WTS = "https://claude.ai/code/artifact/03f6f973-fed2-4442-8d91-370bcdea4d94";
function safetyRow() { return '<div class="ruled" style="margin-top:22px"' + src("When Someone Tells You (in force since Sep 5): 911 or 988 first, then our team the same day; a facilitator’s job ends at the handoff") + '><p class="lk">If It Can’t Wait</p><p>' + SAFETY + '</p><div class="walks">' + linkWalk(WTS, "When Someone Tells You") + "</div></div>"; }
function oneCard(r) {
  var w = wk(r);
  return { id: "f2" + r.key, kind: "One Ask" + (multi() ? " · " + r.name : ""), title: "Name your one ask for Week " + w, state: "The reminder goes " + dayOf(r, w, -1) + ", at 7:00 PM", why: "The reminder carries one ask from you, in your words.", act: "Add", src: "Weeks tab: no facilitator’s ask for Week " + w + " · Asks tab: the reminder the evening before, 7:00 PM", box: { id: "onet-" + r.key, room: r.key, q: "What is the one thing you want each man to do before " + night(r).split(",")[0] + "?", ph: "For example: read the week before the room and bring one line of it.", v: "oneAsk", act: "onekeep" } };
}
function afterCard(r) {
  var pc = PIECEFOR[r.met] || PIECEFOR[r.week] || SHELFPIECE, m0 = pc && arr(pc.move)[0] ? String(pc.move[0]).replace(/^Ask the room: /, "").replace(/^[“"]|[”"]$/g, "") : "";
  return { id: "f3" + r.key, kind: "After the Room", title: "What did the room do with the piece?", state: "Week " + r.met + " · tonight, while it is fresh", why: "One answer and one line if you want. It goes in Craft beside the piece; by morning Room Signals reads it, and Last Week’s Room shows what your room carried.", act: "Keep it", src: "Answers tab · Room Signals · Craft (ruled Nov 2)", q: { room: r.key, text: (m0 ? "“" + m0 + "” " : "") + "What did the room do with it?" } };
}
function postedRow(r) {
  var t = r.raw && r.raw.this, A = arr(t && t.articles);
  if (A.length) return factRow("Posted This Week", A.length === 1 ? "One article was posted for this week." : Count(A.length) + " articles were posted for this week.", "", A.map(function (a) { return linkWalk(a.url || a.address || "", rt(a.title || a.name || "Open it")); }).join(""), "Weeks tab: the week’s articles");
  return factRow("Posted This Week", "Nothing posted on the blog this week yet; the article lands here when it is published.", "", askWalk("What opens in the room this week?"), "Weeks tab: the week’s articles");
}
function weekPanel(r, inSheet, shut) {
  var w = wk(r), line = lineOf(r, w), k = r.key, sw = S.swapped && !after(), pc = sw ? SHELFPIECE : PIECEFOR[w], T = titleOf(r, w);
  var stat = statusLine(r) + (inSheet ? "" : '<div class="walks">' + walk("tab", "See the men", ' data-tab="men"') + "</div>");
  var body = (night_() ? "" : stat) + '<div class="dlist" style="margin-top:8px">', serverAsk = r.pieces[w] && r.pieces[w].ask;
  if (after() && S.afterKept[k] && !inSheet) { var a = S.after[k]; body += '<div class="drow"' + src("your answer, kept on the Answers tab") + '><span class="lab">After the Room</span><p class="kept" tabindex="-1" id="afterKept-' + esc(k) + '"><b>Kept.</b> “' + (a === "opened" ? "Opened up" : a === "quiet" ? "Quietly" : "Not reached") + ".”" + (S.afterLine[k] ? " " + esc(S.afterLine[k]) : "") + " It’s in Craft beside the piece; by morning Room Signals reads it, and our team takes the moves.</p>" + rev("afch" + k, "Change", '<button class="btn line" data-act="afterchange" data-room="' + esc(k) + '">Change</button>') + "</div>"; }
  if ((S.oneKept[k] || serverAsk) && !inSheet) body += '<div class="drow"' + src("what you kept for the reminder") + '><span class="lab">One Ask · Week ' + w + '</span><p class="kept" tabindex="-1" id="oneKept-' + esc(k) + '"><b>Kept.</b> “' + esc(S.oneAsk[k] || serverAsk) + '” It goes in the reminder the evening before, at 7:00 PM, in your words.</p>' + rev("onech" + k, "Change", '<button class="btn line" data-act="onechange" data-room="' + esc(k) + '">Change</button>') + "</div>";
  if (!night_() && !after() && !inSheet && !S.oneKept[k] && !serverAsk) { var oc = oneCard(r); body += '<div class="drow fact"' + src(oc.src + " · ruled Nov 2: a tool he opens, never a card") + '><span class="lab">One Ask for the Reminder</span><span class="nm">If you want, add one ask to the reminder, in your words.</span><p class="why">' + oc.state + ". Without one, the reminder goes as it is.</p>" + rev("onew" + k, "Write one ask", '<label class="boxq" for="' + oc.box.id + '">' + oc.box.q + '</label><textarea id="' + oc.box.id + '" data-room="' + esc(k) + '" data-v="oneAsk" placeholder="' + oc.box.ph + '">' + esc(S.oneAsk[k] || "") + '</textarea><div class="acts"><button class="btn line" data-act="onekeep" data-room="' + esc(k) + '">Add</button></div>') + "</div>"; }
  if (line) body += factRow("The Line the Week Turns On", "“" + line[0] + "”", "From Week " + w + ", " + T + ".", linkWalk(LINKS.course, "Open Week " + w + " in the course") + askWalk("What comes in Week " + w + "?"), line[1]);
  else body += factRow("This Week’s Reading", "Week " + w + ": " + T + ".", "", linkWalk(LINKS.course, "Open Week " + w + " in the course") + askWalk("What comes in Week " + w + "?"), "Weeks tab: what opens");
  if (pc && !after() && !night_()) body += factRow("For the Room · Three Minutes", tie(pc.claim), '<p class="st" style="margin-top:2px">' + (sw ? "The piece you’re bringing " + weekdayOf(r, w) + ", from The Shelf, in place of the one our team chose." : "The piece our team chose for Week " + w + ".") + '</p><ul class="pts">' + arr(pc.move).map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + '</ul><p class="st" style="margin-top:8px">' + esc(pc.voice) + " · " + esc(pc.cost) + "</p>", linkWalk(LINKS.growth, "Open it on Your Growth") + (inSheet ? "" : (sw ? walk("unswap", "Go back to the one our team chose") : linkWalk(LINKS.growth, "Bring another from The Shelf"))), "Research Engine, Entries " + pc.id + (sw ? ": brought from The Shelf for the night (ruled Nov 2)" : ": the piece for the room’s week"));
  if (!inSheet && !night_() && !after()) body += postedRow(r);
  if (!after() && r.witnessUrl) body += factRow("The Room’s Witness Page", night_() ? "One page for the whole room, ready since Tuesday." : "One page for the whole room, ready Tuesday, the day before the room.", "You read it once a week; you write each man as often as you want, at least once a month. Letters come due three a week across the room.", linkWalk0(r.witnessUrl, "Open the witness page") + askWalk("When is my monthly letter due?"), "Witness pages tab: the leader page · ap-witness rule 8");
  var waiting = r.men.filter(function (m) { return m.wait; }).map(function (m) { return m.n; });
  if (half() && waiting.length) body += factRow("After the Course", list(waiting) + (waiting.length === 1 ? " has" : " have") + " someone waiting to walk with them after the course.", "Your last letter hands each man over. Through Week 12 you walk with each of them. For a man with no one waiting, your last letter invites him once; after the course, he walks with our team until he invites someone.", walk("tab", "See the men", ' data-tab="men"'), "Witness tab, invitations with a yes · ap-witness rule 3a");
  var wd = weekdayOf(r, w);
  body += factRow("What We’re Saying", after() ? "“A man you know is doing this; there is a seat beside him.”" : "“A witness is someone who sees what God is doing in your story, so it is remembered and spoken back to you.”", after() ? "Next week the room asks each man for one name for the open night. Say it your way; these are our team’s words." : half() ? "The second half is here: each man may invite one person from his own life, who walks with him from the course’s end. Men in the room do not ask one another." : night_() ? "The Witness opens to the room tonight. Through the course you are each man’s witness; from Week 7 each may invite one person from his own life, who walks with him when the course ends." : "The Witness opens to the room " + wd + ". Through the course you are each man’s witness; from Week 7 each may invite one person from his own life, who walks with him when the course ends.", linkWalk(LINKS.mp, "Read the Message Platform") + askWalk(after() ? "What do I say about the open night?" : "What do I say about the Witness on " + wd + "?"), after() ? "Message Platform: A friend invited him" : "Message Platform: The Witness · ap-witness, Nov 2");
  body += "</div>" + (night_() ? '<div style="margin-top:18px">' + stat + "</div>" : "") + (fac() && !inSheet ? safetyRow() : "");
  return panel((inSheet ? "s" : "f") + "week-" + k, multi() ? r.name : "This Week", (multi() ? "This week · " : "") + "Week " + w + " of 12 · " + T, body, { shut: shut, src: "Weeks tab" });
}
function facSide(extra) { var R = rooms(), s = R.length > 1 ? panel("course", "The Course", Count(R.length) + " rooms · " + rt(R[0].course), roomsCard(), { src: "Rooms tab" }) : R[0] && R[0].name ? panel("course", "The Course", R[0].name + " · Week " + wk(R[0]) + " of 12", roomCard(R[0]), { src: "Weeks tab · Rooms tab" }) : ""; s += askPanel(extra); return s; }
function viewWeekF() {
  var C = facCards(), R = rooms(), r = R[0];
  var main = (firstVisit() ? facHow(false) : "") + panel("flane", "Next Step", C.length ? "One thing at a time" : "Nothing waiting", lane(C, after() ? "Nothing more needs you tonight. Week " + (r ? wk(r) : "") + " is next " + (r ? weekdayOf(r, wk(r)) : "") + ", and this week is below." : "Nothing needs you before your room meets. This week is below.", "fac"), { src: "ap-desk-standard: one ask at a time (ruled Nov 2)" });
  if (!r || !r.name) main += panel("fweek-none", "This Week", "Not on the record yet", cantRead("Rooms tab · Weeks tab"), { src: "Rooms tab" });
  R.forEach(function (q, i) { if (q.name) main += weekPanel(q, false, i > 0); });
  if (r && r.name) main += notesPanel(r);
  if (!firstVisit()) main += facHow(true);
  var side = bothSide() + facSide(["Who has not opened Your Page?", after() ? "What do I say about the open night?" : "What do I say about the Witness on " + (r ? weekdayOf(r, wk(r)) : "Wednesday") + "?"]);
  side += recordPanel([["The Roster", "Each man, his status, how to reach him", LINKS.desk], ["For the Facilitator", "This week’s page for your room", LINKS.folder], ["Room Signals", "What your room carried, week by week", LINKS.signals]]);
  return cols(main, side);
}
function facStatus(r, m) { var wrote = wroteOf(r, m.n); return "Seat " + (m.seat || "—") + " · " + (signedF(m) ? "Signed" : "No signed agreement") + " · " + (m.ansAt ? "Answered " + shortDay(m.ansAt) : "No answers yet") + " · " + (wrote ? "Write a Lament written " + wrote : "Nothing written yet") + ((!signedF(m) || !ansF(m)) ? " · our team follows up" : ""); }
function viewMen() {
  var main = "";
  if (!rooms().some(function (r) { return r.name; })) main += panel("men-none", "The Men", "Not on the record yet", (down() ? downRow() : "") + cantRead("Roster · Rooms tab"), { src: "Roster" });
  rooms().forEach(function (r, i) {
    if (!r.name) return;
    var rows = r.men.map(function (m) {
      return '<div class="drow"' + src("Roster · Learners tab") + '><span class="lab">' + (m.seen ? "On Your Page " + m.seen : "Not on Your Page yet") + '</span><span class="nm">' + esc(m.n) + '</span><span class="st">' + facStatus(r, m) + "</span>" + (half() && m.wait ? '<span class="st" style="color:var(--navy)">Someone is waiting to walk with him after the course.</span>' : "") + '<div class="walks">' + mailWalk(m, "sms") + mailWalk(m, "mail") + walk("mancard", "His card", ' data-man="' + esc(m.email) + '"') + "</div></div>";
    }).join("");
    main += panel("men-" + r.key, multi() ? r.name : "The Men", (multi() ? "The men · " : r.name + " · ") + count(r.men.length) + " men · Week " + wk(r) + " of 12", (down() && i === 0 ? downRow() : "") + statusLine(r) + '<p class="s" style="margin-top:6px"' + src("Config: pieces line · John, Oct 23: the men connect with one another") + ">Where each man is on the road: when he last opened Your Page, his seat, and what he has written, never his words. The men connect with one another during the week." + (half() ? " From the second half, each man may invite someone from his own life; the men who have someone waiting say so below." : " From Week 7, each man may invite someone from his own life; this is where you will see who has someone waiting to walk with him after the course.") + '</p><div class="dlist" style="margin-top:8px">' + rows + "</div>", { shut: i > 0, src: "Roster" });
  });
  main += boardPanel();
  var r0 = rooms()[0];
  return cols(main, bothSide() + facSide(["Who has not opened Your Page?", "Who has not written it yet?"]));
}
function viewRoad() {
  var main = ""; if (!rooms().some(function (r) { return r.name; })) main += panel("road-none", "Coming Weeks", "Not on the record yet", (down() ? downRow() : "") + cantRead("Weeks tab"), { src: "Weeks tab" });
  rooms().forEach(function (r, i) {
    if (!r.name) return;
    var from = wk(r), rows = "";
    for (var w = from; w <= 12; w++) {
      var p = pieceOf(r, w), pu = pieceUrl(r, w), say = w === from + 1 && w < 7 && 0 ? "" : w === 7 ? "The second half begins: each man may invite one person from his own life to walk with him." : "";
      if (!titleOf(r, w)) continue;
      rows += '<div class="drow wk"' + src("Weeks tab" + (say ? " · ap-witness, Nov 2" : "")) + '><span class="lab">Week ' + w + " · " + nightOf(r, w) + '</span><span class="nm">' + titleOf(r, w) + "</span>" + (w === from ? '<span class="st">This week</span>' : "") + (say ? '<p class="why"><b style="font-weight:600;color:var(--navy)">What we’re saying:</b> ' + say + "</p>" : "") + (p ? '<p class="why"><b style="font-weight:600;color:var(--navy)">Story work:</b> ' + esc(p[0]) + "</p>" + (p[1] ? rev("fit" + r.key + w, "How it fits", '<p class="s">' + esc(p[1]) + "</p>") : "") : "") + '<div class="walks">' + linkWalk(LINKS.course, "Open Week " + w + " in the course") + (pu ? linkWalk(pu[1], "Open " + pu[0]) : "") + askWalk("What comes in Week " + w + "?") + "</div></div>";
    }
    main += panel("road-" + r.key, multi() ? r.name : "Coming Weeks", (multi() ? "Coming weeks · " : "") + "Weeks " + from + " to 12 · story work in its week", (down() && i === 0 ? downRow() : "") + '<div class="dlist">' + rows + "</div>", { shut: i > 0, src: "Weeks tab" });
  });
  return cols(main, bothSide() + facSide(["When does Where I’m From come?", after() ? "What do I say about the open night?" : "What do I say about the Witness on " + (rooms()[0] ? weekdayOf(rooms()[0], wk(rooms()[0])) : "Wednesday") + "?"]));
}
function storyStops(r) {
  var P = arr(X && X.storyPieces), stops = [];
  P.forEach(function (p) {
    var open = p.opensFrom ? isoDay(p.opensFrom) : "", isStone = /stone/i.test(p.name), isNow = open && open <= todayStr();
    var lab = isStone ? "After the course" : "Week " + p.week + " · " + (open && open > todayStr() ? "opens " + longDay(open) : nightOf(r, p.week)), w0 = wroteCount(r), brd = arr(r.raw && r.raw.board).filter(function (b) { return norm(b.name) === norm(p.name); })[0];
    var st = brd && brd.state === "open" || brd && brd.count != null && !open ? count(brd.count) + " of " + count(brd.of) + " have written it." : isStone ? "None set by the room yet." : open && open > todayStr() ? "Held by the course until " + longDay(open) + (p.week === 12 ? "; the room’s last night is " + nightOf(r, 12) + "." : ".") : "Open now.";
    var who = brd && brd.men ? arr(brd.men).map(function (m) { return rt(m.name); }) : [], notYet = brd && brd.men ? r.men.map(function (m) { return m.n; }).filter(function (n) { return who.indexOf(n) < 0; }) : [];
    stops.push({ lab: lab, nm: rt(p.name), st: st, why: who.length ? who.join(", ") + (notYet.length ? ". Not yet: " + notYet.join(", ") + "." : ".") : "", url: p.address || "" });
  });
  return stops;
}
function boardPanel() {
  var r = JJf(), stops = storyStops(r); if (!stops.length && !(r.raw && arr(r.raw.board).length)) return panel("board", "The Story Board", "Not on the record yet", cantRead("Weeks tab · the site’s notices"), { src: "Weeks tab · the site’s notices" });
  var mv = movesAll().filter(function (m) { return /story/.test(m.move) && m.st === "taken"; })[0];
  var open1 = stops.filter(function (s) { return /have written it/.test(s.st); })[0];
  var body = '<div class="dlist">' + stops.map(function (s) { return '<div class="drow fact rrow"' + src("the story board: the Weeks tab’s pieces, counted from the site’s own notices") + '><span class="lab">' + esc(s.lab) + '</span><span class="nm">' + esc(s.nm) + '</span><span class="st">' + esc(s.st) + "</span>" + (s.why ? '<p class="why">' + esc(s.why) + "</p>" : "") + ('<div class="walks">' + (s.url ? linkWalk0(s.url, "Open the piece") : walk("tab", "See Coming Weeks", ' data-tab="road"')) + "</div>") + "</div>"; }).join("") + "</div>" + (mv ? '<p class="s"' + src("Moves tab: a story board move from Room Signals") + ">From the room’s signals: " + count(movesAll().filter(function (m) { return /story/.test(m.move) && m.st === "taken"; }).length) + " “story board / Story piece” " + (movesAll().filter(function (m) { return /story/.test(m.move) && m.st === "taken"; }).length === 1 ? "move is" : "moves are") + " open with our team — " + rt(mv.signal.split(" — ")[0]) + (mv.due ? ", due " + mv.due : "") + ".</p>" : "") + '<div class="walks">' + askWalk("Who has not written it yet?") + '</div><p class="s"' + src("the live line, its words") + ">Counted from the site’s own notices: that a man wrote, never what he wrote.</p>";
  return panel("board", "The Story Board", r.name + " · " + count(stops.length) + " pieces" + (open1 ? " · " + open1.nm + " is open" : ""), body, { src: "Weeks tab · the site’s notices" });
}
function notesPanel(r) {
  var raw = r.raw || {}, last = raw.last, nw = last ? last.week : wk(r) - 1, nt = raw.notes, sigs = arr(raw.signals), pages = arr(raw.pages), since = arr(raw.since);
  var cards = arr(FACR && FACR.actions).filter(function (a) { return /^(fu|prom):/.test(a.key); });
  var body = '<p class="sum"' + src("the Week " + nw + " notes, written from the room’s Zoom notes") + ">Week " + nw + (titleOf(r, nw) ? ", " + titleOf(r, nw) : "") + ".</p><div class=\"dlist\">";
  if (since.length) body += factRow("Since the Last Room", rt(typeof since[0] === "string" ? since[0] : since[0].text || ""), "", "", "the live Since the last room lines (seats, agreements, answers, pieces written, back in the room)");
  var pr = cards.filter(function (a) { return /^prom:/.test(a.key); })[0];
  if (cards.length) body += factRow("What Was Promised", rt(pr ? pr.do : cards[0].do), "", (nt && nt.url ? linkWalk(nt.url, "Open the notes") : "") + askWalk("Who did I say I would follow up with?"), "the notes’ promised and attendance lines · fu: and prom: cards");
  if (pages.length) body += factRow("Earlier Weeks", "The notes for each room so far.", "Written from the room’s Zoom notes for training and course development. First names only; what a man shared about himself stays in the room.", pages.map(function (p) { return linkWalk(p.url, "Week " + p.week); }).join(""), "the For the Facilitator pages · the live privacy line, its words");
  body += '</div><div class="part"' + src("Room Signals: this room only, read only (the moves stay with our team)") + '><p class="lk">In the Room · What This Room Carried in Week ' + nw + "</p>" + sigs.map(function (c) { return '<div class="sigr"' + src("Room Signals · read only for the facilitator") + '><p class="nmx">' + tie(rt(c.theme)) + '.</p><p class="why">' + tie(rt(c.words)) + '</p><span class="st">Speaks to it: ' + esc(rt(c.speaks || "nothing on our shelf yet")) + '</span><span class="st">Our team takes the moves.</span></div>'; }).join("") + rev("topic", "On this week’s topic, across the practice", '<p class="s"' + src("the live empty line, its words") + ">Nothing coded to this week’s constructs yet. As rooms are read and their signals coded, what other rooms carried on this topic shows here.</p>") + '<div class="walks">' + askWalk("What did the room carry last week?") + "</div></div>";
  return panel("notes-" + r.key, "Last Week’s Room", "Week " + nw + " notes" + (cards.length ? " · " + count(cards.length) + (cards.length === 1 ? " follow-up" : " follow-ups") : "") + (sigs.length ? " · " + count(sigs.length) + (sigs.length === 1 ? " signal" : " signals") : ""), body, { src: "the Week " + nw + " notes and Room Signals" });
}
function bothSide() {
  if (!both()) return "";
  var r = JJf();
  if (fac()) return panel("prac", "The Practice Desk", "You are on our team too", '<div class="dlist">' + factRow("Our Team", "The practice desk opens under your room, on one press.", "Every card, the roster, how we’re growing and the record. Your room stays where it is.", walk("practice", "Open the practice desk"), "People tab: your row, role admin, with a room · desk.js: Open the practice desk") + "</div>", { src: "People tab" });
  return panel("prac", r.name, "The room you lead · Week " + wk(r) + " of 12", '<div class="dlist">' + factRow("The Room You Lead", "Your room’s desk is one press away.", "Next Step, This Week, the men and the weeks ahead.", walk("practice", "Hide the practice desk"), "People tab: a room on an admin’s row · desk.js: Hide the practice desk") + "</div>", { src: "People tab" });
}
var HOW = [["The room speaks", "The night’s notes become signals: what the room carried, who needs you, what was promised.", "goto", "notes-", "From our community"], ["Read with the Word", "The voices we follow, read against Scripture; one in ten kept, the ones that support the work we are doing now and in the future.", "link", "", "Your Growth"], ["Chosen for the week", "One piece for the week your room is in, with how it fits the reading.", "goto", "fweek-", "This Week"], ["You bring it", "Three to five minutes of room time, the two or three points you would say; the men write.", "tab", "men", "The Story Board"], ["The road is built", "What you bring and what the men write shape the next week; the record keeps all of it, so nothing is lost between rooms.", "tab", "road", "Coming Weeks"]];
function howWalk(x) { var k = JJf().key; return x[2] === "link" ? linkWalk(LINKS.growth, x[4]) : x[2] === "tab" ? walk("tab", x[4], ' data-tab="' + x[3] + '"') : x[2] === "view" ? walk("view", x[4], ' data-v="' + x[3] + '"') : walk("goto", x[4], ' data-p="' + (x[3] === "lane" || x[3] === "ask" ? x[3] : x[3] + k) + '"'); }
var TEAMHOW = [["What needs us", "One card at a time, a waiting partner or man first; Back and Next move between them, and Every card lists them all. A press says where it went, with Undo for ten minutes; Done this week keeps each one. The names at the top show one person’s cards.", "goto", "lane", "What Needs Us"], ["How we’re growing", "Every card names the moment a man meets us; the signals wait for a move; one row for each way a man reaches us.", "view", "growing", "How We’re Growing"], ["The rooms", "Each room’s week and its roster: Email him, Text him, Read his answers, Handled another way.", "view", "rooms", "The Rooms"], ["The record", "Find any man, page or room, and what came in since you were last here.", "view", "record", "The Record"], ["Ask the desk", "It answers from what the desk holds, and says so when the answer is not there.", "goto", "ask", "Ask the Desk"]];
function facHow(shut) { return panel("how", "How This Desk Works", shut ? "The room speaks · Read with the Word · Chosen for the week · You bring it · The road is built" : "Five stops · in the order of your week", '<ol class="hstops"' + src("desk.js 25.2: How this desk works, its five stops verbatim; full the first time, one line after") + ">" + HOW.map(function (x) { return "<li><b>" + x[0] + ".</b> " + x[1] + '<div class="walks">' + howWalk(x) + "</div></li>"; }).join("") + "</ol>", { shut: shut, src: "desk.js: How this desk works" }); }
function teamHow() { return panel("thow", "How This Desk Works", "Five stops · in the order of the day", '<ol class="hstops"' + src("a first visit: the desk’s five stops") + ">" + TEAMHOW.map(function (x) { return "<li><b>" + x[0] + ".</b> " + x[1] + '<div class="walks">' + howWalk(x) + "</div></li>"; }).join("") + "</ol>", { src: "a first visit" }); }

/* ══════════ the asks, his answers, his card, the words ══════════ */
var SUBJ = { agreement: "One thing before we meet: the agreement", answers: "Your questions, before we meet", referral: "One man you would bring" };
function mailPreview(key, kind, emails) {
  var M = S.mail[key] || {}, pv = M.pv; if (M.err) return '<div class="mailpv" id="mp-' + esc(key) + '"><p class="st">' + esc(M.err) + "</p></div>";
  if (!pv) return '<div class="mailpv" id="mp-' + esc(key) + '"><p class="st">Writing the email…</p></div>';
  return '<div class="mailpv" id="mp-' + esc(key) + '"' + src("the live preview (ask_text): the script’s subject and words · Config: reminder cc, agreement address") + '><p class="mh">To ' + esc(pv.email || emails.join(", ")) + (pv.cc ? " · cc " + esc(pv.cc) : "") + ' · from john@, signed John</p><p class="mh">Subject: ' + esc(pv.subject) + '</p><div class="mb">' + String(pv.body || "").split(/\n\s*\n/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" + (pv.asked ? '<p class="st">Already asked by email ' + dayTime(pv.asked) + ".</p>" : "") + '<div class="acts"><button class="btn line" data-act="mailsend" data-key="' + esc(key) + '">' + (pv.asked ? "Send again" : "Send it") + '</button><button class="done" data-act="mailclose" data-key="' + esc(key) + '">Not now</button></div></div>';
}
function sendsRev(rk, emails) { var L = sendsList().filter(function (x) { return !emails || emails.indexOf(x.email) >= 0; }); return rev(rk, "The Sends tab (" + L.length + ")", L.length ? '<ul class="vl"' + src("Front Desk sheet · Sends tab: every email the desk sent") + ">" + L.slice().reverse().map(function (x) { return "<li>" + esc(x.to === "The room" ? "The room, " + count(x.n) + " men" : x.to) + "<span>" + x.at + " · " + (SUBJ[x.kind] || "") + "</span></li>"; }).join("") + '</ul><div class="walks">' + linkWalk(LINKS.desk, "Open the Sends tab") + "</div>" : '<p class="s"' + src("Sends tab") + ">Nothing sent yet.</p>"); }
function mailCard(c, first, dn) {
  var k = c.mail.key, M = S.mail[k] || {}, em = c.mail.email, kind = c.mail.kind, asked = askedAt(em, kind), man = rosterBy(em), F = man ? firstName(man.name) : "";
  var h = M.sentAt ? '<p class="sentl" tabindex="-1" id="ms-' + esc(k) + '"><b>Asked by email ' + clock12(M.sentAt) + ".</b> The card stays until he signs.</p>" : "";
  h += '<div class="acts"><button class="btn' + (first ? "" : " line") + '" data-act="mailsee" data-key="' + esc(k) + '" data-kind="' + kind + '" data-man="' + esc(em) + '" aria-expanded="' + !!M.open + '">' + (asked ? "See again" : "See email") + "</button>" + dn + "</div>";
  if (M.open) h += mailPreview(k, kind, [em]);
  return h + sendsRev("sends-" + slug(k), [em]);
}
function answersHtml(email) {
  var r = S.ansCache[email], m = manByEmail(email) || rosterBy(email) || {}; if (!r) return '<p class="st">Opening his answers…</p>';
  if (r.err) return '<p class="s">' + esc(r.err) + "</p>";
  var qa = arr(r.answers || r.qa || r.items);
  return '<p class="st"' + src("Answers tab (action answers): the door and when") + ">" + esc(rt(r.door || "Breaking Free (the twelve-week course)")) + (r.at || r.when ? " · in " + shortDay(isoDay(r.at || r.when)) : "") + '</p><div class="qa"' + src("the twelve questions and the three around them, as the script holds them · only our team reads them") + ">" + qa.map(function (x) { return '<p class="q">' + esc(rt(x.q || x.question || x[0])) + '</p><p class="a">' + esc(x.a || x.answer || x[1] || "") + "</p>"; }).join("") + '</div><div class="walks">' + mailWalk(m, "mail") + walk("mancard", "His card", ' data-man="' + esc(email) + '"') + "</div>";
}
function noteBox(email) {
  var kept = S.noteKept[email] && !S.handEdit[email], val = S.notes[email] || "";
  if (kept) return '<p class="kept" tabindex="-1" id="handKept"' + src("his card, kept on the Notes tab (action note_set)") + "><b>Saved on his card.</b> Ask the Desk holds it now.</p>" + rev("handch", "Change", '<button class="btn line" data-act="handchange" data-man="' + esc(email) + '">Change</button>');
  return '<label class="boxq" for="handt">What did he ask for?</label><textarea id="handt" data-man="' + esc(email) + '" maxlength="400" placeholder="In his words, or yours. The desk holds it from then on.">' + esc(val) + '</textarea><div class="acts"><button class="btn line" data-act="handsave" data-man="' + esc(email) + '">Save</button></div>';
}
function wcell(head, t, d, copy) { return '<div class="wc"><p class="lk">' + head + '</p><p class="wl">Title · ' + t.length + '</p><p class="wt">' + esc(t) + "</p>" + (copy ? '<button class="mini" data-act="copytext" data-t="' + esc(t) + '" data-msg="Copied the new title.">Copy</button>' : "") + '<p class="wl">Description · ' + d.length + '</p><p class="wt">' + esc(d) + "</p>" + (copy ? '<button class="mini" data-act="copytext" data-t="' + esc(d) + '" data-msg="Copied the new description.">Copy</button>' : "") + "</div>"; }
function wordsBlock(c) {
  var W = c.words, ap = S.words[c.id] && S.words[c.id].ap, addr = W.address || c.raw && c.raw.link || "";
  return '<div class="words"' + src("Words tab: now on the page, and the suggested words") + ">" + wcell("Now on the page", rt(W.oldTitle || W.oldT || ""), rt(W.oldDesc || W.oldD || ""), false) + wcell(ap ? "New words · approved" : "Suggested words · not yet approved", rt(W.newTitle || W.newT || ""), rt(W.newDesc || W.newD || ""), true) + '</div><p class="st"' + src("the live card’s steps, when the page has an editor link") + ">In the editor: the page name at the top → Edit Settings → SEO → paste both → Save &amp; Close → OK.</p>" + (ap ? '<p class="kept" id="wAp" tabindex="-1"' + src("Words tab: approved, this press") + "><b>Approved.</b> Paste them into the page’s settings when you are ready.</p>" : "") + '<div class="acts">' + (ap ? "" : '<button class="done" data-act="wordsap" data-id="' + esc(c.id) + '">Approve</button>') + '<button class="done" data-act="wordsinst" data-id="' + esc(c.id) + '">Installed</button></div><div class="walks">' + linkWalk(editOf(c.raw) || EDITOR, "Open the page’s settings") + (addr ? linkWalk(addr, "See the page") : "") + "</div>";
}
function manCardHtml(email) {
  var m = manByEmail(email), ro = rosterBy(email), r = JJf(); if (!m && ro) m = mkMan(ro, null);
  if (!m) return '<p class="s">His row did not open just now. Try again in a moment.</p><div class="walks">' + manWalks(email) + "</div>";
  var row = function (a, b) { return '<p class="q">' + a + '</p><p class="a" style="font-size:17px">' + b + "</p>"; }, hA = m.hA || S.handled[m.email + ":agreement"];
  return '<p class="lk">The Roster · ' + esc(r.name) + '</p><p class="status" style="margin-top:2px">' + esc(m.n || "A man, no name yet") + '</p><div class="qa"' + src("Roster row and Learners tab · the same fields the sheet holds, read on the desk") + ">" + row("Seat", m.seat ? "Seat " + m.seat : m.wait && 0 ? "" : "On the sheet") + row("Agreement", signedF(m) ? "Signed" : "Not in yet · our team follows up" + (S.handled[m.email + ":agreement"] ? " · handled another way" : "")) + row("Answers", m.ansAt ? "In " + shortDay(m.ansAt) : "Not in yet · our team follows up") + row("Your Page", m.seen ? "Last opened " + m.seen : "Not opened yet") + (m.wait && half() ? row("After the course", "Someone is waiting to walk with him") : "") + '</div><div class="walks">' + manWalks(m) + (m.ansAt && !fac() ? walk("readans", "Read his answers", ' data-man="' + esc(m.email) + '"') : "") + "</div>" + (fac() ? "" : '<p class="help">The sheet itself opens from The Record.</p>');
}
function wordsHtmlRoom() {
  var R = S.roomAsk || {}, pv = R.pv;
  return '<div class="part"' + src("the live room ask (room_ask_text and room_ask_send): its subject and words, at most once a week · Config: invite address (default), reminder cc") + '><p class="lk">The Email to the Room · Once a Week</p>' + (pv ? '<p class="mh" style="margin-top:8px">To the ' + count(JJf().men.length) + ' men in the room (each sees only himself)' + (pv.cc ? " · cc " + esc(pv.cc) : "") + ' · from john@, signed John</p><p class="mh">Subject: ' + esc(pv.subject) + '</p><div class="mb">' + String(pv.body || "").split(/\n\s*\n/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" : '<p class="st">' + (R.err ? esc(R.err) : "Writing the email…") + "</p>") + (R.sentAt ? '<p class="kept" id="raSent" tabindex="-1"><b>Sent to ' + count(R.n || JJf().men.length) + " men at " + clock12(R.sentAt) + ".</b> It is on the Sends tab. It goes at most once a week.</p>" : '<p class="s">It goes at most once a week.' + (FEED && FEED.cohort && FEED.cohort.lastRoomAsk ? "" : " The room has not been asked for a name yet.") + "</p>") + (R.tooSoon ? '<p class="s">It went out less than a week ago. Give the room a week.</p>' : "") + '<div class="acts"><button class="btn line" data-act="roomsend">Send it</button></div></div>';
}
function wordsHtml() {
  var mo = MP[0];
  return "<div" + src("Message Platform: A friend invited him") + '><p class="lk">From the Message Platform · A friend invited him</p><p class="verse" style="margin-top:8px">“' + mo[1] + '”</p><p class="s">Where he goes: ' + mo[2].toLowerCase().replace("the room, or let’s talk", "the room, or Let’s Talk") + ".</p></div>" + wordsHtmlRoom() + '<div class="walks">' + linkWalk(LINKS.mp, "Open the Message Platform") + "</div>";
}

/* ══════════ the gate, settings, ask our team ══════════ */
function gateScreen() {
  var st = S.gate, line = st === "signin" ? "Sign in to open the desk." : (S.gateLine || "Signed in as " + siteEmail() + ".");
  var hero = '<header class="band topbar"><div class="kr"><span class="k"' + src("ap-shell-standard: the room’s name") + '>Your Desk</span></div></header><section class="band hero"><span class="k hk"' + src("ap-shell-standard: the room’s name") + '>Your Desk</span><h1 tabindex="-1"' + src("desk.js gateSignin and gateSend: the greeting by the hour, Central") + ">" + greet() + (st === "signin" || !(WHO && WHO.name || S.meName) ? "." : ", " + esc(firstName(WHO && WHO.name || S.meName)) + ".") + '</h1><p class="where"' + src("desk.js: the gate’s line, its live words") + ">" + esc(line) + "</p></section>";
  var G = src("desk.js 25.2: the gate, its live words");
  var body = st === "signin" ? '<p class="s"' + G + ">The Front Desk is for the Ancient Path team. Sign in with your site account; the desk opens for the person the site shows.</p><button class=\"btn\" data-act=\"gsignin\">Sign in</button>"
    : st === "send" ? '<p class="s"' + G + ">The first time each day, a six-digit code goes to the address the site shows signed in, and the desk opens on it.</p>" + (S.codeErr ? '<p class="err" id="codeErr" tabindex="-1"' + G + ">" + esc(S.codeErr) + "</p>" : "") + '<button class="btn" data-act="gsend">Send code</button>'
    : '<label class="boxq" for="codein">The six-digit code from your email</label><textarea id="codein" class="one" inputmode="numeric" maxlength="7" placeholder="000 000">' + esc(S.code) + "</textarea>" + (S.codeErr ? '<p class="err" id="codeErr" tabindex="-1"' + G + ">" + esc(S.codeErr) + "</p>" : "") + '<p class="s"' + G + ">Check your email for a six-digit code. It works for ten minutes.</p><button class=\"btn\" data-act=\"gcode\">Open desk</button><div class=\"walks\">" + walk("gagain", "Send it again") + "</div>";
  return hero + '<div class="pcwrap gate"><div class="pcmain">' + panel("gate", "Open the Desk", "Once a day · a six-digit code", body, { src: "desk.js: the gate (sign-in, then the code)" }) + "</div></div>";
}
function forgetHtml() { return '<div class="part"><p class="t">This browser</p><p class="s"' + src("desk.js: Signed in as … · Not you? Forget this browser (action forget)") + ">Signed in as " + esc((stored() && stored().email) || siteEmail()) + ". Not you? Forget this browser, and the desk asks for a new code.</p><button class=\"btn line\" data-act=\"forget\">Forget</button></div>"; }
function settingsHtml() { return '<p class="t">When a card waits, how should we tell you?</p><div class="choices">' + [["email", "Email"], ["text", "Text"], ["none", "None"]].map(function (x) { return '<button class="choice left" data-act="notice" data-v="' + x[0] + '" aria-pressed="' + (S.notice === x[0]) + '">' + x[1] + "</button>"; }).join("") + "</div>" + rev("textnote", "About texts", '<p class="s"' + src("ruled Nov 2: Twilio, sent from our own Apps Script; a draft until the carrier registration is approved") + ">A text says only that a card is waiting, never what it is. At most one a day. Message and data rates may apply. Reply STOP to end them, HELP for help. Until the carrier approves our number, the notice comes by email.</p>") + '<p class="kept" id="sk" tabindex="-1"' + src("your choice, kept on the People tab") + ">" + (S.sk || "") + "</p>" + '<div class="walks">' + walk("srcset", S.src ? "Hide sources" : "Show sources") + "</div>" + forgetHtml() + '<p class="help" style="margin-top:26px"' + src("ruled Nov 3, 2026, ap-shell-standard 8c and 9: every choice keeps itself on tap") + ">Everything here is kept as you choose it.</p>" + '<button type="button" class="btn" data-act="back">Back to ' + viewName() + "</button>"; }
function askTeamHtml() { return S.askSent ? '<p class="t">Sent.</p><p class="s"' + src("the Asks tab") + ">Our team has your note and answers today. If it can’t wait, call: 911, or 988 for a crisis, then our team at 214-736-1024.</p><div class=\"walks\">" + walk("askagain", "Write another") + "</div>" : (fac() ? '<div class="ruled" style="margin:0 0 18px"' + src("When Someone Tells You: 911 or 988 first, then our team the same day") + '><p class="lk">This Can’t Wait</p><p>' + SAFETY + "</p></div>" : "") + (S.askErr ? '<p class="err" tabindex="-1">' + esc(S.askErr) + "</p>" : "") + '<label class="t" for="askteam" style="display:block">What would you like to ask our team?</label><textarea id="askteam" placeholder="' + (fac() ? "About your room, a man, or the week." : "About a man, a room, or the plan.") + '"></textarea><button class="btn line" data-act="asksend">Send</button>'; }
function roomById(k) { return rooms().filter(function (r) { return r.key === k; })[0] || JJf(); }
function downToast() { toast("Kept here. It goes through when the record is back."); }


/* ══════════ the page, mounted ══════════ */
var root, screen, sheet, tEl, last = null, lastSig = null, tT = null, timer = null, ME = null;
function mount() {
  host.innerHTML = "<style>" + CSS_TEXT + '</style><div class="apd" id="apd"><div id="screen"></div><div class="overlay" id="sheet" role="dialog" aria-modal="true" aria-label="Details"></div><div class="toast" id="toast" role="status" aria-live="polite"></div></div>';
  root = host.querySelector("#apd"); screen = host.querySelector("#screen"); sheet = host.querySelector("#sheet"); tEl = host.querySelector("#toast");
}
function $h(s) { return host.querySelector(s); }
/* ── the page checks itself (AP-SHIP 1, rule 3): count the rules the browser accepted against the stamped count; if short, tell the server once per build ── */
function selfCheck() {
  var st = host.querySelector("style"), n = -1, detail = "";
  try { n = st && st.sheet ? st.sheet.cssRules.length : -1; } catch (e) { detail = "cssRules unreadable"; }
  if (n >= CSS_RULES) return n;
  var done = lsGet(CHECKED); if (done === String(BUILD)) return n;
  lsSet(CHECKED, String(BUILD));
  var nm = (stored() && stored().name) || "";
  call({ action: "page_check", page: "front-desk", name: nm, build: BUILD, accepted: n, expected: CSS_RULES, detail: (detail || "accepted fewer rules than stamped") + " · " + String(navigator.userAgent || "").slice(0, 100) }).catch(function () {});
  return n;
}
/* ── return to place (AP-PLACE 1): every view has an address, every sheet one more ── */
/* AP-PLACE 1 · return to place (ap-shell-standard 8c and 9, ruled Nov 3, 2026). One block, carried byte for byte by road.js, growth.js, desk.js and the witness pages; a room never rewrites it, it hands it five things: views (the view names), get() (the view now), set(v) (draw that view, no history), close() (close every layer, no history) and ready() (the data is drawn). Every view has its own address (#view). Every layer opened over a view (a sheet, an overlay, a piece) has one more (#view/layer) and one history entry, so the browser's Back and the page's own Back leave the layer and land on the view he came from, never off the site. The room makes three calls: open(title, redo) when a layer opens, closed() whenever a layer has closed, back() from the page's own Back (true when history took it). */
  function apPlace(o) {
    var L = [], quiet = false, live = true, fb = 0, P = {};
    function slug(t) { return String(t || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40); }
    function addr(v, s) { return "#" + v + (s ? "/" + s : ""); }
    function hv() { var h = String(location.hash || "").replace(/^#/, "").split("/")[0]; return o.views.indexOf(h) >= 0 ? h : ""; }
    function put(m, st, v, s) { try { history[m](st, "", addr(v, s)); } catch (e) { live = false; } }
    P.hash = hv;
    P.start = function () { var v = o.get(); put("replaceState", { apv: v, apl: 0 }, v); };
    P.view = function (v) { L = []; var s = history.state; put(s && s.apv === v && !s.apl ? "replaceState" : "pushState", { apv: v, apl: 0 }, v); };
    P.open = function (title, redo) { clearTimeout(fb); if (quiet || !live) return; L.push({ s: slug(title), r: redo }); put("pushState", { apv: o.get(), apl: L.length }, o.get(), L[L.length - 1].s); };
    P.back = function () {
      var s = history.state, n = L.length;
      if (!live || !n || !s || s.apl !== n) return false;
      history.back();
      clearTimeout(fb); fb = setTimeout(function () { if (L.length === n) { L = []; quiet = true; try { o.close(); } catch (e) {} quiet = false; } }, 700); /* if history never answers, the page closes itself */
      return true;
    };
    P.closed = function () {
      var n = L.length; L = [];
      if (quiet || !live || !n) return;
      setTimeout(function () { var s = history.state; if (s && s.apl === n && !L.length) { try { history.go(-n); } catch (e) {} } }, 0);
    };
    window.addEventListener("popstate", function () {
      clearTimeout(fb);
      if (!o.ready()) return;
      var s = history.state || {}, v = hv() || s.apv || o.views[0], d = s.apl || 0;
      quiet = true;
      try {
        if (d > L.length || !s.apv) { d = 0; put("replaceState", { apv: v, apl: 0 }, v); } /* a layer the page no longer holds, or an address typed by hand: back to the plain view */
        L.length = d;
        if (!d) o.close(); else if (L[d - 1].r) L[d - 1].r();
        if (v !== o.get()) o.set(v);
      } catch (e) {}
      quiet = false;
    });
    return P;
  }
var PL = apPlace({ views: ["today", "growing", "rooms", "record", "week", "men", "road"], get: curView, set: placeView, close: function () { closeSheet(); }, ready: function () { return S.gate === "open"; } });
function placeView(v) {
  if (!VIEWS[S.role].some(function (x) { return x[0] === v; })) { var c = curView(); try { history.replaceState({ apv: c, apl: 0 }, "", "#" + c); } catch (e) {} return; } /* the other role's view: the page stays where it is */
  closeSheet(); S.view[S.role] = v; render.last = v; S.res = {}; S.sres = null; if (v !== "record") S.recFrom = ""; render();
}
function backSheet() { if (!PL.back()) closeSheet(); }
/* ── sheets go back, never close ── */
var SHS = [];
function drawSheet(title, html, bk) {
  sheet.setAttribute("tabindex", "-1");
  sheet.innerHTML = '<div class="ohead"><button class="walk" data-act="back"><span class="ar">←</span> <span class="u">Back to ' + bk + '</span></button><span class="lk" id="sheetT">' + title + '</span></div><div class="obody">' + html + "</div>";
  sheet.classList.add("open"); root.classList.add("dim");
  setTimeout(function () { var c = sheet.querySelector("[data-act=back]"); if (c) c.focus(); }, 300);
}
function openSheet(title, html) {
  var was = sheet.classList.contains("open"), top = SHS[SHS.length - 1], same = !!(was && top && top.t === title);
  if (!was) { SHS = []; top = null; last = document.activeElement; lastSig = last && last.dataset ? [last.dataset.act, last.dataset.k || "", last.dataset.man || ""] : null; }
  if (was && top && !same) top.h = (sheet.querySelector(".obody") || { innerHTML: top.h }).innerHTML; /* the sheet he leaves keeps what it shows now */
  var bk = same ? top.b : (top ? top.t : viewName());
  if (same) top.h = html;
  else { var i = SHS.length; SHS.push({ t: title, h: html, b: bk }); PL.open(title, function () { SHS.length = i + 1; drawSheet(SHS[i].t, SHS[i].h, SHS[i].b); }); }
  drawSheet(title, html, bk);
}
function closeSheet() { if (!sheet.classList.contains("open")) return; SHS = []; PL.closed(); S.hiMove = ""; sheet.classList.remove("open"); root.classList.remove("dim"); if (last && document.body.contains(last)) last.focus(); else if (lastSig) { var q = screen.querySelector('[data-act="' + lastSig[0] + '"]' + (lastSig[1] ? '[data-k="' + lastSig[1] + '"]' : "") + (lastSig[2] ? '[data-man="' + lastSig[2] + '"]' : "")); if (q) q.focus(); } }
function sheetBody(html) { var b = sheet.querySelector(".obody"); if (b) b.innerHTML = html; }
function clearToast() { clearTimeout(tT); tEl.classList.remove("in"); }
function toast(m) { if (/^(Handled|Done|Kept|Made|Closed|Undone|Reopened|Dropped|Waiting|Checked|Marked|Sent|Said done|Proven|Changed [A-Za-z’ ]+)\.$/.test(String(m)) && document.querySelector("#apDesk .res, #apDesk .res-u")) return; tEl.textContent = m; tEl.classList.add("in"); clearTimeout(tT); tT = setTimeout(function () { tEl.classList.remove("in"); }, 4200); }
function say(m) { toast(m); }
/* ── scrolling: the page, or the box the site scrolls in ── */
function scroller() { var e = host.parentElement; while (e && e !== document.body && e !== document.documentElement) { var o = getComputedStyle(e).overflowY; if (o === "auto" || o === "scroll") return e; e = e.parentElement; } return document.documentElement; }
function getY() { var sc = scroller(); return sc === document.documentElement ? (window.pageYOffset || document.documentElement.scrollTop || 0) : sc.scrollTop; }
function setY(y) { var sc = scroller(); if (sc === document.documentElement) window.scrollTo(0, y); else sc.scrollTop = y; }
function toTop() { var r = host.getBoundingClientRect(); var sc = scroller(), base = sc === document.documentElement ? 0 : sc.getBoundingClientRect().top; if (r.top < base) setY(getY() + r.top - base); }
function scrollTo(el, block) { if (el && el.scrollIntoView) { try { el.scrollIntoView({ block: block || "start" }); } catch (e) { el.scrollIntoView(); } } }
/* ── focus kept after a change; a new view puts it on the heading ── */
function focusSig() { var a = document.activeElement; if (!a || !screen.contains(a)) return null; var p = a.closest(".ap-panel"); if (a.id) return { sel: "#" + a.id, p: p && p.id }; var sel = a.tagName.toLowerCase() + ["act", "id", "k", "tab", "v", "room", "man", "key"].filter(function (x) { return a.dataset[x] != null; }).map(function (x) { return "[data-" + x + '="' + String(a.dataset[x]).replace(/"/g, '\\"') + '"]'; }).join(""); return { sel: sel, p: p && p.id }; }
function restoreFocus(fs, keep, target) {
  if (target) { var t = null; try { t = screen.querySelector(target); } catch (e) {} if (t) { if (!t.hasAttribute("tabindex") && !/^(BUTTON|A|TEXTAREA|INPUT)$/.test(t.tagName)) t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: false }); return; } }
  if (!keep) { if (fs) { var h = $(".hero h1", screen); if (h) h.focus({ preventScroll: true }); } return; }
  if (!fs) return; var n = null; try { n = screen.querySelector(fs.sel); } catch (e) {}
  if (!n && fs.p) { var pp = document.getElementById(fs.p); if (pp) n = pp.querySelector(".sentl,.kept,.empty,button,textarea,input,a"); }
  if (n) n.focus({ preventScroll: true });
}
function curBody() { var v = curView(); return fac() ? (v === "week" ? viewWeekF() : v === "men" ? viewMen() : viewRoad()) : (v === "today" ? viewToday() : v === "growing" ? viewGrowing() : v === "rooms" ? viewRooms() : viewRecord()); }
function render(keep, target) {
  dirty(); Object.keys(S.auto).forEach(function (k) { delete S.shut[k]; }); S.auto = {}; var y = getY(), fs = focusSig();
  if (S.gate !== "open") { screen.innerHTML = gateScreen(); }
  else {
    if (!render.addr) { var h0 = PL.hash(); if (h0 && VIEWS[S.role].some(function (x) { return x[0] === h0; })) S.view[S.role] = h0; } /* a deep link opens on its view */
    if (!VIEWS[S.role].some(function (x) { return x[0] === S.view[S.role]; })) S.view[S.role] = VIEWS[S.role][0][0];
    if (!render.addr) { render.addr = true; render.last = curView(); PL.start(); } else if (curView() !== render.last) { render.last = curView(); PL.view(render.last); }
    var body; try { body = curBody(); } catch (e) { body = '<div class="dlist">' + factRow("Last Good Read", "The desk can’t read the record right now.", "", fac() ? walk("askteam", "Ask our team") : "", "the record the desk reads") + "</div>"; try { console.warn("desk render", e); } catch (e2) {} }
    screen.innerHTML = band() + '<div class="pcwrap">' + menu() + '<div class="pcmain">' + body + "</div></div>";
  }
  root.classList.toggle("showsrc", !!S.src);
  if (keep) setY(y); else toTop();
  restoreFocus(fs, keep, target);
  var f = $h("#findt"); if (f) f.addEventListener("input", function () { S.find = f.value; $h("#fres").innerHTML = findRows(); });
  var aq = $h("#askq"); if (aq) aq.addEventListener("input", function () { S.askq[S.role] = aq.value; });
  var hn = $h("#nmin"); if (hn) hn.addEventListener("input", function () { S.nameDraft = hn.value; });
  var ci = $h("#codein"); if (ci) ci.addEventListener("input", function () { S.code = ci.value; });
  var ht = $h("#handt"); if (ht) ht.addEventListener("input", function () { S.notes[ht.dataset.man] = ht.value; });
  $$("textarea[data-room]", screen).forEach(function (t) { t.addEventListener("input", function () { S[t.dataset.v][t.dataset.room] = t.value; }); });
  fit(true); balance();
}
/* the side column is never longer than the main (AP-SHELL 1): a side panel the reader has not chosen to open shuts, last first, until it is not */
function balance() {
  if (!root.classList.contains("pc")) return; var cm = screen.querySelector(".colm"), sd = screen.querySelector(".side"); if (!cm || !sd) return;
  var P = [].slice.call(sd.querySelectorAll(":scope > .ap-panel")).reverse();
  for (var i = 0; i < P.length && sd.getBoundingClientRect().height > cm.getBoundingClientRect().height; i++) { var p = P[i]; if (p.classList.contains("shut")) continue; var k = p.id.replace(/^p-/, ""); if (S.shut[k] !== undefined) continue; S.shut[k] = true; S.auto[k] = 1; p.classList.add("shut"); var h = p.querySelector(".ap-panel-head"); h.setAttribute("aria-expanded", "false"); h.querySelector(".ap-panel-ctl").textContent = "Open ▾"; }
}
/* ── the computer layout, and the band that bleeds to the box's edges ── */
var lastPc = null;
function fit(quiet) {
  var h = host; if (!h) return; var sc = scroller(), page = sc === document.documentElement, cw = sc.clientWidth, L = page ? 0 : sc.getBoundingClientRect().left + sc.clientLeft;
  h.style.marginLeft = "0px"; h.style.marginRight = "0px";
  var hr = h.getBoundingClientRect(), gl = hr.left - L, gr = (L + cw) - hr.right;
  if (gr > gl + 1) h.style.marginRight = (-(gr - gl)) + "px"; else if (gl > gr + 1) h.style.marginLeft = (-(gl - gr)) + "px";
  var isPc = h.getBoundingClientRect().width >= 900; if (root) root.classList.toggle("pc", isPc);
  $$(".band", screen).forEach(function (b) { b.style.marginLeft = "0px"; b.style.width = "auto"; b.style.width = (cw) + "px"; b.style.marginLeft = (L - b.getBoundingClientRect().left) + "px"; });
  /* the band's words start where the page's content starts and end where it ends (AP-SHELL 1 rule 1): measured against the menu's column on a computer and the page's own column on a phone, never a percentage of the page column */
  var pw = isPc ? screen.querySelector(".pcwrap") : null, ref = pw || h, rs = getComputedStyle(ref), base = isPc ? 28 : 18;
  var padL = pw ? (parseFloat(rs.paddingLeft) || 0) : 18, padR = pw ? (parseFloat(rs.paddingRight) || 0) : 18;
  $$(".band.hero", screen).forEach(function (b) {
    b.style.paddingLeft = ""; b.style.paddingRight = "";
    var br = b.getBoundingClientRect(), rr = ref.getBoundingClientRect();
    b.style.paddingLeft = Math.max(base, Math.round(rr.left + padL - br.left)) + "px";
    b.style.paddingRight = Math.max(base, Math.round(br.right - (rr.right - padR))) + "px";
  });
  if (lastPc !== isPc) { var was = lastPc; lastPc = isPc; if (was !== null && !quiet && S.gate === "open" && S.loaded) render(true); }
}

/* ══════════ the record comes in ══════════ */
function ingest(r) {
  X = r.x || null; FEED = r.feed || null; FACR = r.fac || null; AC = r.ac || null; PEOPLE = arr(r.people); OURS = r.role === "admin" ? arr(r.ours) : []; /* build 38: our own addresses, an admin only */
  WHO = { name: r.name || (stored() && stored().name) || "", email: r.email || "", role: r.role, room: r.room || "", canAsk: r.canAsk, claude: r.claude || null };
  var t = Date.parse(r.now || (X && X.nowIso) || (FEED && FEED.generated) || ""); S.clock0 = t || Date.now(); S.read0 = Date.now();
  var team = r.role === "admin" && !r.room;
  S.role = team ? "team" : (r.role === "admin" && S.practice ? "team" : "fac");
  S.down = !FEED && r.role === "admin" || (!X && !FEED && !FACR);
  /* what this browser changed is held until a newer read arrives */
  var wrote = String((FEED && FEED.generated) || (FACR && FACR.generated) || "");
  Object.keys(S.doneAt).forEach(function (k) { if (wrote && wrote > S.doneAt[k]) { delete S.done[k]; delete S.doneAt[k]; delete S.pressed[k]; } });
  Object.keys(S.undone).forEach(function (k) { if (wrote && wrote > S.undone[k]) delete S.undone[k]; });
  if (X) { S.relOv = {}; S.moves = {}; S.movesAns = {}; S.sigBack = {}; S.sig = {}; }
  if (wrote) { S.handled = {}; S.names = {}; }
  dirty(); buildLinks(); rooms(); refreshPieces(); S.swapped = !!broughtOf(JJf()); dirty();
  if (!S.loaded) { var k = SEEN + ":" + (r.email || siteEmail()); S.firstVisit = !lsGet(k); lsSet(k, "1"); }
  S.loaded = true; S.gate = "open";
}
function openDesk() {
  var s = stored();
  if (!s) { gateSend(); return; }
  if (!siteEmail()) { gateSignin(); return; }
  if (String(s.email || "").toLowerCase() !== siteEmail()) { keep(null); gateSend(); return; }
  if (s.expires && new Date(s.expires) < new Date()) { keep(null); gateSend("Your desk key from yesterday has run out. Send a new code."); return; }
  WHO = WHO || { name: s.name, email: s.email, role: s.role, room: s.room };
  S.role = s.role === "admin" && !s.room ? "team" : "fac"; S.gate = "open"; S.down = false;
  render(); load();
  if (!timer) timer = setInterval(function () { if (document.visibilityState === "visible") load(true); }, 300000);
}
function load(quietly) {
  var s = stored(); if (!s) { gateSend(); return Promise.resolve(); }
  return call({ action: "desk", key: s.key }).then(function (r) {
    if ((r.role !== s.role) || String(r.room || "") !== String(s.room || "")) keep({ key: s.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: s.expires });
    ingest(r); render(!!quietly); flushQueue();
  }, function (e) {
    var c = e && e.error;
    if (c === "no_key" || c === "bad_key" || c === "key_expired" || c === "removed" || c === "not_you" || c === "no_site") { keep(null); WHO = null; if (timer) { clearInterval(timer); timer = null; } gateSend(c === "no_site" ? "" : words(e)); return; }
    S.down = true; if (!S.loaded) { S.gate = "open"; S.role = s.role === "admin" && !s.room ? "team" : "fac"; WHO = WHO || { name: s.name, email: s.email, role: s.role, room: s.room }; }
    render(true); if (!quietly) say(words(e));
  });
}
/* ── a press goes at once; the record catches up. A write that can be said twice waits for the record to come back ── */
var QUEUE = []; try { QUEUE = JSON.parse(lsGet(QUEUE_KEY) || "[]") || []; } catch (e) { QUEUE = []; }
function queueSave() { lsSet(QUEUE_KEY, QUEUE.length ? JSON.stringify(QUEUE.slice(-40)) : null); }
function flushQueue() { var s = stored(); if (!s || !QUEUE.length) return; var b = QUEUE.shift(); b.key = s.key; queueSave(); call(b).then(flushQueue, function (e) { if (e && e.error === "network") { delete b.key; QUEUE.unshift(b); queueSave(); } else flushQueue(); }); }
/* build 32.2: a press the script could not write at once was kept and will be written within a few minutes; the page says so once and carries on as if it were written */
var QUEUED_AT = 0;
function queuedNote() { var t = Date.now(); if (t - QUEUED_AT < 30000) return; QUEUED_AT = t; toast("Kept. It reaches the record within a few minutes."); }
function act(body, o) {
  o = o || {}; var s = stored(); if (!s) { gateSend(); return Promise.resolve(); }
  body.key = s.key;
  return call(body, o.keep).then(function (r) { if (r && r.queued) queuedNote(); if (o.ok) o.ok(r); return r; }, function (e) {
    var c = e && e.error;
    if (c === "no_key" || c === "bad_key" || c === "key_expired" || c === "removed" || c === "not_you" || c === "no_site") { keep(null); gateSend(words(e)); return; }
    if (c === "network" && o.idem) { var q = JSON.parse(JSON.stringify(body)); delete q.key; QUEUE.push(q); queueSave(); S.down = true; render(true); downToast(); return; }
    if (o.fail) o.fail(e); say(words(e));
  });
}
/* ── the gate: the site's sign-in, then a six-digit code by email, once a day ── */
function gateSignin() { S.gate = "signin"; S.gateLine = ""; render(); }
function gateSend(line) { if (!siteEmail()) { gateSignin(); return; } S.gate = "send"; S.gateLine = line || ""; S.codeErr = ""; render(); }
function openSignIn() { try { if (window.l_settings) window.l_settings.redirectUrl = location.pathname + location.search; } catch (e) {} var a = document.querySelector('a[data-interactive-link-type="openformslink"][data-interactive-link-var1="signin"]'); if (a) { a.click(); return; } S.gateLine = "Use Sign in at the top of the page."; render(true); }
function forgetBrowser() { var s = stored(); if (s) call({ action: "forget", key: s.key }).catch(function () {}); keep(null); WHO = null; FEED = null; FACR = null; X = null; OURS = []; S.loaded = false; if (timer) { clearInterval(timer); timer = null; } closeSheet(); gateSend("This browser forgot its desk key."); toast("This browser forgot its desk key."); }

/* ══════════ Ask the Desk: what the desk can say alone, then the desk's own reader ══════════ */
function roomAnswer(r, kind) {
  var f = { sign: function (m) { return !signedF(m); }, ans: function (m) { return !ansF(m); }, seen: function (m) { return !m.seenIso; } }[kind];
  var L = r.men.filter(f).map(function (m) { return m.n || m.email; }), inR = multi() ? " in " + r.name : "";
  var what = { sign: "signed the agreement", ans: "sent their twelve answers", seen: "opened Your Page" }[kind];
  var t = L.length ? (L.length === 1 ? "One man" : Count(L.length) + " men") + inR + " " + (L.length === 1 ? "has" : "have") + " not " + what + " yet: " + list(L) + "." : "Every man" + inR + " has " + what + ".";
  if (kind !== "seen" && L.length) t += fac() ? " Our team follows up; nothing is asked of you." : " Each gets one reminder, once, never twice.";
  return [t, kind === "seen" ? "the Learners tab" : "the Roster", fac() ? ["tab", "men", "Where each man is"] : ["view", "rooms", "See the room" + (multi() ? "s" : "")]];
}
function localAnswer(q) {
  if (fac() && /hurt|harm|suicid|kill|\bdie\b|dying|end (his|my|their|her) (own )?life|take (his|my|their|her) (own )?life|overdos|danger|unsafe|threat|weapon|\bguns?\b|abus|assault|can.t wait|emergenc|crisis|\b911\b|\b988\b|police/i.test(q)) return [SAFETY, "When Someone Tells You, the protocol in force", ["link", WTS, "Open When Someone Tells You"]];
  var R = rooms(), rm = R[0]; if (!rm || !rm.name) return null; R.forEach(function (r) { if (q.indexOf(r.name) >= 0) rm = r; });
  var m = q.match(/week (\d+)/i);
  if (fac() && m) { var w = +m[1], t = titleOf(rm, w), p = pieceOf(rm, w); if (t) return ["Week " + w + ", " + nightOf(rm, w) + ", at " + rm.time + ": " + t + "." + (p ? " Story work: " + p[0] + "." : "") + (w === 7 ? " The second half begins: each man may invite one person from his own life to walk with him." : ""), "the Weeks tab", ["tab", "road", "See Coming Weeks"]]; }
  if (/opened|your page/i.test(q)) return roomAnswer(rm, "seen");
  if (/agreement|signed/i.test(q)) return roomAnswer(rm, "sign");
  if (/answers/i.test(q) && /(who|not|sent)/i.test(q)) return roomAnswer(rm, "ans");
  if (fac() && /how many/i.test(q)) return [R.map(function (r) { return count(r.men.length) + " men in " + r.name; }).join("; ") + ".", "the Roster", ["tab", "men", "Where each man is"]];
  return null;
}
function doAsk(q) {
  var role = S.role, loc = localAnswer(q); S.askq[role] = q; S.shut.ask = false;
  if (loc) { S.ask[role] = loc; render(true, "#ansOut"); return; }
  S.ask[role] = ["Reading " + (fac() ? "your room" : "the desk") + " for: " + q, null, null]; render(true, "#ansOut");
  act({ action: "ask", question: q, scope: fac() ? "room" : "desk" }, { ok: function (r) { S.ask[role] = [r.answer, (fac() ? "your room" : "the desk") + " as it stood at " + clock12(new Date(nowMs()).toISOString()) + (r.asked != null && r.of != null ? ". " + Count(r.asked) + " of " + count(r.of) + " questions today" : ""), null]; render(true, "#ansOut"); }, fail: function (e) { S.ask[role] = [words(e), null, null]; render(true, "#ansOut"); } });
}

/* ══════════ presses ══════════ */
function allCards() { return fac() ? facCards() : teamCards().concat(growCards()); }
function findCard(id) { return teamCards().concat(growCards(), facCards()).filter(function (c) { return c.id === id; })[0]; }
/* ══════════ build 30: a press shows at once, says what it did and where it went, and can be taken back ══════════ */
/* the result block already says what the press did and where it went: when it is on screen the toast is only the word; a press that draws no block keeps the whole line */
function pressToast(rec,full,word){
  var shown=$h("#res-"+rec.lane);
  if(!shown){toast(full);return}
  var w=word||(rec.word?rec.word+".":String(full).split(". ")[0]+".");toast(w);
}
function pressStart(c,o){
  var lk=o.lane||laneOfCard(c.id),at=new Date(nowMs()).toISOString(),mk=c.moveKey||"";
  var rec={id:c.id,lane:lk,word:o.word,went:o.went,at:at,by:first(),until:new Date(nowMs()+10*6e4).toISOString(),canReopen:o.canReopen!==false,raw:c.raw,card:c,moves:!!c.moves,mk:mk,dropped:!!o.dropped,mv:null,title:o.title||"",text:o.text||""};
  if(c.moves&&mk&&o.mv){rec.mv={k:mk,prev:S.moves[mk],prevA:S.movesAns[mk]};S.moves[mk]=o.mv;if(o.ans)S.movesAns[mk]=o.ans}
  S.done[c.id]=true;S.doneAt[c.id]=at;S.pressed[c.id]=rec;delete S.undone[c.id];S.res[lk]=rec;dirty();
  return rec;
}
function moveBack(mv){if(!mv)return;if(mv.prev==null)delete S.moves[mv.k];else S.moves[mv.k]=mv.prev;if(mv.prevA==null)delete S.movesAns[mv.k];else S.movesAns[mv.k]=mv.prevA}
function pressRollback(rec){
  delete S.done[rec.id];delete S.doneAt[rec.id];delete S.pressed[rec.id];if(S.res[rec.lane]===rec)S.res[rec.lane]=null;
  moveBack(rec.mv);dirty();render(true);
}
/* the script's own time, name and ten minutes replace the page's when they differ */
function pressSaid(rec,r){
  if(!r)return;var changed=false;
  if(r.at&&clock12(r.at)!==clock12(rec.at)){rec.at=r.at;changed=true}
  if(r.by&&r.by!==rec.by){rec.by=r.by;changed=true}
  if(r.undoUntil){if(clock12(r.undoUntil)!==clock12(rec.until))changed=true;rec.until=r.undoUntil}
  if(r.act==='bring'&&r.went&&!fac()&&r.went!==rec.went){rec.went=r.went;changed=true}
  if(changed)render(true);
}
/* build 34: a press on one of the card's acts. The card gives way to a line that says what it did and where it went; the script carries the act out (card_act). */
function pressAct(c,ac,text){
  var word=ac.word==="Changed the sent mail"?"Sent":(ac.word||"Said done"),went=(fac()&&ac.fwent?ac.fwent:ac.went)||"";
  var rec=pressStart(c,{word:word,went:went,dropped:ac.a==="drop",canReopen:!ac.noUndo,text:text||""});if(ac.noUndo)rec.until=rec.at; /* build 36: a sent mail has no Undo */
  var ticks=arr(S.sChk[c.id]).slice(0,5).map(function(v){return v===true}),sno=S.sNo[c.id]; /* build 36.2 */
  if(text){S.ctext[c.id]="";S.boxOpen[c.id]=""}
  if(c.story){delete S.sChk[c.id];delete S.sNo[c.id]}
  render(true,"#res-"+rec.lane);pressToast(rec,word+". "+say30(went));
  var body={action:"card_act",actionKey:c.id,act:ac.a};if(text)body.text=text;if(ac.a==="publish")body.checks=ticks;
  act(body,{idem:true,ok:function(r){pressSaid(rec,r)},fail:function(){if(c.story){S.sChk[c.id]=ticks;S.sNo[c.id]=sno}pressRollback(rec);if(text)S.ctext[c.id]=text}});
}
function pressDone(c,answer){
  var kind=kindOf(c.id),ans=answer||"",word=c.word||(ans?"Changed The Moves":"Said done");
  var went=(fac()&&c.fwent?c.fwent:c.went)||(ans?(ans==="nochange"?"Kept: no change. It counts toward what this kind of move does.":"Kept: it helped. It counts toward what this kind of move does."):"Marked done by hand. Nothing was checked, so the Actions tab records it as Said done. It is off the desk.");
  var rec=pressStart(c,{word:word,went:went,mv:kind==="move"?"done":kind==="check"?"checked":"",ans:ans});
  render(true,"#res-"+rec.lane);pressToast(rec,word+". "+say30(went));
  var body={action:"done",actionKey:c.id};if(ans)body.answer=ans;
  act(body,{idem:true,ok:function(r){pressSaid(rec,r)},fail:function(){pressRollback(rec)}});
}
/* a page-move recommendation: Wait keeps the move as taken until its check day; Drop closes it with the reason */
function pressRec(c,drop){
  var mv=movesAll().filter(function(m){return m.k===c.moveKey})[0],comes=(mv&&mv.checkIso)||addDays(todayStr(),30);
  var lead=drop?"Dropped":"Waiting",word="Changed The Moves",went=lead+". "+(drop?"The Moves keeps it as Dropped, with the reason “"+DROP_REASON+"”.":"The Moves keeps it as waiting. At its check, "+dayLine(comes)+", the desk reads the page again.");
  var rec=pressStart(c,{word:word,went:went,mv:drop?"dropped":"",dropped:drop});
  render(true,"#res-"+rec.lane);pressToast(rec,word+". "+went);
  var body={action:"move_set",moveKey:c.moveKey,status:drop?"dropped":"taken"};if(drop)body.reason=DROP_REASON;else body.comes=comes;
  act(body,{idem:true,ok:function(r){pressSaid(rec,r)},fail:function(){pressRollback(rec)}});
}
function putBack(raw){
  if(!raw||!raw.key)return false;
  var R=fac()?FACR:FEED;if(!R)return false;if(!Array.isArray(R.actions))R.actions=[];
  var i=-1;R.actions.forEach(function(x,j){if(x&&x.key===raw.key)i=j});
  if(i>=0){R.actions[i]=raw;return false}
  R.actions.push(raw);return true;
}
function pressUndo(id,mode,lk){
  if(id==="voices:open"){
    var vrow=doneRowsAll().filter(function(r){return r.id===id})[0],vl0=vrow&&vrow.card&&arr(vrow.card.vlines)||[];
    delete S.done[id];delete S.doneAt[id];delete S.pressed[id];S.undone[id]=new Date(nowMs()).toISOString();S.vl=S.vl||{};
    var ruled=vl0.filter(function(l){return S.vl[l.key]});vl0.forEach(function(l){delete S.vl[l.key]});
    if(vrow)putBack(vrow.raw);S.front="";S.idx[lk]=0;S.owner="all";S.res[lk]={undone:true,reopen:mode==="reopen",title:"The voices card",id:id,note:"",after:aheadWords(lk,id)};dirty();render(true,"#res-"+lk);
    pressToast({lane:lk},(mode==="undo"?"Undone. ":"Reopened. ")+"The voices are back on the card.",mode==="undo"?"Undone.":"Reopened.");
    vl0.forEach(function(l){act({action:"undo",actionKey:l.key,mode:mode},{})});
    return;
  }
  if(/^psig:/.test(id)){sigPsUndo(id,mode);toast((mode==="reopen"?"Reopened.":"Undone.")+" The need is back in Signals Waiting.");return}
  var row=doneRowsAll().filter(function(r){return r.id===id})[0];if(!row)return;
  var pressed=S.pressed[id],doneAt=S.doneAt[id]||row.at,wasDone=!!S.done[id],mk=row.mk,mv=mk&&row.moves?{k:mk,prev:S.moves[mk],prevA:S.movesAns[mk]}:null,kind=kindOf(id);
  var isP=!!(row.card&&row.card.pask),added=isP?false:putBack(row.raw),res={undone:true,reopen:mode==="reopen",title:(row.card&&row.card.ws?"The Workshop update":cTitle(row.card)),id:id,note:undoNote(row.card,id)};if(isP)askBack(row.card.pask);
  delete S.done[id];delete S.doneAt[id];delete S.pressed[id];S.undone[id]=new Date(nowMs()).toISOString();
  if(mv)S.moves[mk]=kind==="check"?"done":"taken";
  S.front="";S.back=id;S.idx[lk]=0;S.owner="all";S.res[lk]=res;dirty();res.after=aheadWords(lk,id);
  render(true,"#res-"+lk);pressToast({lane:lk},(mode==="undo"?"Undone. ":"Reopened. ")+"The card is back on the desk, "+(res.after?"after the waiting "+res.after:"first in line")+".",mode==="undo"?"Undone.":"Reopened.");
  act(/^pask:/.test(id)&&row.card&&row.card.pask?{action:"partner_undo",item:row.card.pask.item}:{action:"undo",actionKey:id,mode:mode},{
    ok:function(r){if(r&&r.card&&r.card.key){putBack(r.card);dirty();render(true)}},
    fail:function(){
      if(wasDone){S.done[id]=true;S.doneAt[id]=doneAt}
      if(pressed)S.pressed[id]=pressed;delete S.undone[id];moveBack(mv);
      if(added){var R=fac()?FACR:FEED;if(R)R.actions=arr(R.actions).filter(function(x){return !(x&&x.key===id)})}
      if(S.res[lk]===res)S.res[lk]=null;dirty();render(true);
    }
  });
}
function moveCardRender(inS) { render(true); if (inS) sheetBody(movesHtml()); }
function applyRel(rows) { if (!X) X = {}; var cur = arr(X.rel).slice(); arr(rows).forEach(function (n) { var i = -1; cur.forEach(function (e, j) { if (e.id === n.id) i = j; }); if (i >= 0) cur[i] = n; else cur.push(n); S.relOv[n.id] && delete S.relOv[n.id]; }); X.rel = cur; }
function relWrite(a, id, other, ov, msg) {
  var snap = JSON.stringify(S.relOv), iso = new Date(nowMs()).toISOString(), until = new Date(nowMs() + 10 * 6e4).toISOString(), who = (WHO && WHO.name) || "";
  Object.keys(ov).forEach(function (k) { S.relOv[k] = ov[k] === "released" ? { status: "released", releasedBy: who, releasedOn: iso, undoUntil: until } : ov[k] === "held" ? { status: "held", releasedBy: "", releasedOn: "", undoUntil: null } : { status: "candidate", releasedBy: "", releasedOn: "", undoUntil: null }; });
  render(true, "#relSum"); toast(msg);
  var body = { action: "release_set", act: a, id: id }; if (other) body.other = other;
  act(body, { idem: a === "hold" || a === "unhold" || a === "undo", ok: function (r) { if (r && r.queued) return; if (r.rel) applyRel(r.rel); S.relOv = {}; render(true); }, fail: function () { S.relOv = JSON.parse(snap); render(true); } });
}
function mvWrite(k, v, ans, msg, inS) {
  var prev = S.moves[k], prevA = S.movesAns[k], extra = {};
  S.moves[k] = v; if (ans) S.movesAns[k] = ans; if (v === "done" || v === "dropped") S.done["move:" + k] = true; if (v === "checked" || v === "dropped") S.done["check:" + k] = true; S.doneAt["move:" + k] = S.doneAt["check:" + k] = new Date(nowMs()).toISOString();
  moveCardRender(inS); toast(msg);
  var body = { action: "move_set", moveKey: k, status: v }; if (ans) body.answer = ans;
  act(body, { idem: true, fail: function () { if (prev == null) delete S.moves[k]; else S.moves[k] = prev; if (prevA == null) delete S.movesAns[k]; else S.movesAns[k] = prevA; delete S.done["move:" + k]; delete S.done["check:" + k]; moveCardRender(inS); } });
}
function cardWhere(cid) { if (teamCards().some(function (c) { return c.id === cid; })) return ["today", "lane"]; if (growCards().some(function (c) { return c.id === cid; })) return ["growing", "gcards"]; if (facCards().some(function (c) { return c.id === cid; })) return ["week", "flane"]; return null; }
function loadMail(key, kind, em) {
  S.mail[key] = S.mail[key] || {}; S.mail[key].kind = kind; S.mail[key].email = em; S.mail[key].open = !S.mail[key].open; S.mail[key].pv = null; S.mail[key].err = "";
  render(true, S.mail[key].open ? "#mp-" + key + " .mh,#mp-" + key : null);
  if (!S.mail[key].open) return;
  act({ action: "ask_text", kind: kind, email: em }, { ok: function (r) { S.mail[key].pv = r; render(true); var mp = $h("#mp-" + key); if (mp) scrollTo(mp, "nearest"); }, fail: function (e) { S.mail[key].err = words(e); render(true); } });
}

/* ── build 37 · Text Him 2.0: the Text him sheet (admins) ── */
var TN = null, TNX = {}, TNK = STORE + ":tn";
(function () { try { var v = JSON.parse(lsGet(TNK) || "{}"), cut = Date.now() - 864e5; Object.keys(v || {}).forEach(function (k) { if (v[k] && v[k].ms > cut) TNX[k] = v[k]; }); } catch (e) {} })();
var TN_SMS = "Ancient Path: something new is waiting on Your Page. https://www.ancientpathcoaching.com/start Reply STOP to end these texts, HELP for help.";
var TN_MAIL = "Subject: Ancient Path<br>There is something new on your page.<br><br>https://www.ancientpathcoaching.com/start";
function tnFirst(em) { var m0 = manByEmail(em) || rosterBy(em) || oursBy(em) || {}, n = String(m0.name || m0.n || "").trim(); return n ? n.split(/\s+/)[0] : "him"; }
function tnPoss(t) { return t.first === "him" ? "his" : t.first + "’s"; }
function tnHe(t) { return t.first === "him" ? "He" : t.first; }
function tnDay(t) { return shortDay(t.day || isoDay(new Date(nowMs()).toISOString())); }
function tnById(id) { return document.getElementById(id); }
function tnSmart(s) { return String(s == null ? "" : s).replace(/(^|[\s(\[—–-])"/g, "$1“").replace(/"/g, "”").replace(/(\w)'(\w)/g, "$1’$2").replace(/(^|\s)'/g, "$1‘").replace(/'/g, "’"); }
function tnWordsHtml(w) {
  return String(w || "").split(/\n\s*\n/).map(function (p) {
    var h = esc(tnSmart(p)).replace(/\n/g, "<br>").replace(/(https?:\/\/(?:www\.)?ancientpathcoaching\.com(?:[^\s<]*[^\s<.,;:!?)])?)/gi, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    return '<p class="serif" style="margin-top:6px">' + h + "</p>";
  }).join("");
}
/* the box: a copy of the From Our Team panel exactly as road.js draws it */
function tnCard(t, mode) {
  var day = esc(tnDay(t)), inner = mode === "landed" ? tnWordsHtml(t.landed)
    : '<textarea id="tnWords" aria-label="What should we tell ' + esc(t.first) + '?" maxlength="600" placeholder="Write to ' + esc(t.first) + '."' + (mode === "lock" ? " readonly" : "") + ">" + esc(t.words) + "</textarea>";
  return '<p class="lk tw-k">' + (mode === "landed" ? '<span class="tw-ok">✓</span> ' : "") + "On " + esc(tnPoss(t)) + " page · This Week</p>"
    + '<div class="ap-panel tw-card' + (mode === "lock" ? " going" : "") + '"><div class="ap-panel-head"><span class="ap-panel-title">From Our Team</span><span class="ap-panel-note">' + note("Words for you · " + day) + "</span></div>"
    + '<div class="ap-panel-body"><div class="ruled"><p class="lk">Our team · ' + day + "</p>" + inner + "</div></div></div>";
}
function tnTold(label, line, extra) { return '<p class="tw-told">' + (label ? "<i>" + label + "</i>" : "") + "<span>" + line + "</span></p>" + (extra || ""); }
function tnFlag(line) { return '<p class="tw-told flag" role="status"><span>' + esc(line) + "</span></p>"; }
function tnRev(t, k, label, body) { var o = !!(t.revs && t.revs[k]); return '<button class="tw-rev" data-act="textrev" data-k="' + k + '" aria-expanded="' + o + '"><span>' + label + "</span> ▾</button>" + (o ? '<p class="tw-sms">' + body + "</p>" : ""); }
function tnSmsRev(t) { return tnRev(t, "sms", "The text", esc(TN_SMS)); }
function tnMailRev(t) { return tnRev(t, "mail", "The email", TN_MAIL); }
function tnInstead() { return '<button class="tw-rev" data-act="textmail"><span>If it can’t wait, Email him instead</span> →</button>'; }
function tnTime(iso) { return iso ? clock12(iso) : ""; }
function tnCapLine(p) {
  var at = tnTime(p && p.capAt);
  return "He had today’s notice" + (at ? " at " + at : "") + ", so no second one goes. Your words wait on his page" + (p && p.opened ? "" : "; he hasn’t opened a reading there yet") + ".";
}
/* the line before Send: how he will be told */
function tnPlanHtml(t) {
  if (t.off) return tnFlag("Text him is not turned on yet.");
  var p = t.plan; if (!p || !p.plan) return "";
  switch (p.plan) {
    case "text": return tnTold("Then", "a text tells him something new is waiting. It never says what.", tnSmsRev(t));
    case "held": return tnTold("Then", "a text at 8:00 AM. No texts go at night.", tnSmsRev(t));
    case "email": return tnTold("Then", "an email tells him something new is waiting. He hasn’t turned on texts.", tnMailRev(t));
    case "cap": return tnTold("Then", esc(tnCapLine(p)), tnInstead());
    case "page": return tnTold("Then", "He chose to hear only on his page, so nothing else goes.");
    case "off": return tnTold("Then", "Notices are off right now, so nothing else goes.");
  }
  return "";
}
function tnFailLine(t) { return tnHe(t) === "He" ? "His page didn’t answer, so nothing went. Your words are still here." : t.first + "’s page didn’t answer, so nothing went. Your words are still here."; }
function tnWhy(t, r) {
  var w = r && r.why;
  if (w === "off") return "Text him is not turned on yet.";
  if (w === "bad_words") return "Use plain words, up to 600 characters, and only links on ancientpathcoaching.com.";
  if (w === "no_email") return "We have no email for him. Your words are still here.";
  return tnFailLine(t);
}
function tnLineHtml(t) { return t.err ? tnFlag(t.err) : tnPlanHtml(t); }
function tnBodyWrite(t) {
  var u = t.undoMsg ? '<p class="tw-told" role="status" tabindex="-1" id="tnUndo"><span>' + esc(t.undoMsg) + "</span></p>" : "";
  if (t.plan && t.plan.plan === "nopage") return '<div class="tw-col" id="tnRoot">' + u + tnTold("", esc(tnHe(t)) + " has no Your Page yet, so there’s nowhere for a card.") + '<div class="tw-acts"><button class="btn line" data-act="textmail">Email him instead</button></div></div>';
  return '<div class="tw-col" id="tnRoot">' + u + tnCard(t, "edit") + '<div id="tnLine">' + tnLineHtml(t) + '</div><div class="tw-acts"><button class="btn line" data-act="textsend">Send</button></div></div>';
}
function tnBodyWorking(t) {
  return '<div class="tw-col" id="tnRoot">' + tnCard(t, "lock") + '<p class="tw-told" role="status" id="tnNow"><i>Now</i><span>' + (t.slow ? "Still working. Your words are safe here." : "Putting it on " + esc(tnPoss(t)) + " page…") + '</span></p><div class="tw-acts"><button class="btn line" disabled>Sending…</button></div></div>';
}
/* the notice line in the done state: going, sent, or what became of it */
function tnNoticeParts(t) {
  var P = t.r.plan, n = t.notice, nn = n ? String(n.notice || "") : "", tm = n && n.at ? tnTime(n.at) : "";
  if (nn === "cap" || nn === "page" || nn === "off") P = nn;
  var night = (t.h >= 21) ? "tomorrow" : "today";
  if (P === "cap") return { label: "Notice", line: "None today. He had one at " + (tnTime(t.r.capAt || (n && n.at)) || "an earlier hour") + ". Your words wait on his page" + (t.r.opened ? "" : "; he hasn’t opened a reading there yet") + ".", extra: tnInstead(), out: "no notice today, he had one at " + (tnTime(t.r.capAt) || "an earlier hour") };
  if (P === "page") return { label: "Notice", line: "None. He chose to hear only on his page, so nothing else goes.", out: "he hears only on his page" };
  if (P === "off") return { label: "Notice", line: "None. Notices are off right now. Your words wait on his page.", out: "notices are off" };
  if (nn === "failed") return { label: "Notice", line: "Could not be sent. He will see your words when he next opens his page.", out: "the notice could not be sent" };
  if (nn === "owed") return { label: "Notice", line: "Not sent yet. Our next run sends it, and your words are on his page.", out: "the notice goes on our next run" };
  if (nn === "held" || (!nn && P === "held")) return { label: "Text", line: "Goes at 8:00 AM " + night + ". No texts go at night.", extra: tnSmsRev(t), out: "text goes at 8:00 AM" };
  if (nn === "email") return { label: "Email", line: "Email sent · " + tm + ". " + (P === "text" ? "His text could not go, so an email did." : "He hasn’t turned on texts."), extra: tnMailRev(t), out: "email sent" };
  if (nn === "text") return { label: "Text", line: "Text sent · " + tm + ". It says only that something new is waiting.", extra: tnSmsRev(t), out: "text sent" };
  if (P === "email") return { label: "Email", line: "Going now. He hasn’t turned on texts.", extra: tnMailRev(t), out: "email on its way" };
  return { label: "Text", line: "Going now. It says only that something new is waiting.", extra: tnSmsRev(t), out: "text on its way" };
}
function tnNoticeHtml(t) { var p = tnNoticeParts(t); return '<p class="tw-told" role="status"><i>' + p.label + "</i><span>" + esc(p.line) + "</span></p>" + (p.extra || ""); }
function tnResHtml(t) {
  var left = 6e5 - (nowMs() - t.ms), undo = left > 0 && t.cid ? '<button data-act="textundo"><span class="u">Undo</span></button>' : "";
  return (t.undoLate ? tnFlag(t.undoLate) : "") + '<p class="tw-res"><b>Sent</b> · ' + tnTime(t.at) + " · " + esc(t.by) + undo + (oursBy(t.email) ? "" : '<button data-act="mancard" data-man="' + esc(t.email) + '"><span class="u">His card</span>&nbsp;<span class="ar">→</span></button>') + "</p>";
}
function tnBodyDone(t) { return '<div class="tw-col" id="tnRoot"><p class="tw-h" tabindex="-1" id="tnDone">Your words are on ' + esc(tnPoss(t)) + " page.</p>" + tnCard(t, "landed") + '<div id="tnNotice">' + tnNoticeHtml(t) + '</div><div id="tnRes">' + tnResHtml(t) + "</div></div>"; }
/* Email him instead: the words carried into an email the desk sends */
function tnMailLines(t) {
  var pv = t.mailPv, h = "";
  h += tnTold("To", esc(t.email));
  if (pv) {
    h += tnTold("From", "sent from " + esc(pv.from));
    h += tnTold("Replies", "come to you" + (pv.copy && pv.copy.length ? ", with " + esc(pv.copy.join(" and ")) + " copied" : "") + ".");
    h += tnRev(t, "email", "The email", "From: " + esc(pv.from) + "<br>To: " + esc(pv.to) + (pv.cc && pv.cc.length ? "<br>Cc: " + esc(pv.cc.join(", ")) : "") + "<br>Reply-To: " + esc(pv.replyTo) + "<br>Subject: " + esc(pv.subject) + "<br><br>" + esc(pv.body).replace(/\n/g, "<br>"));
  }
  h += tnTold("", "An email can’t be taken back once it is sent.");
  if (t.mailErr) h += tnFlag(t.mailErr);
  return h;
}
function tnBodyMail(t) {
  var day = esc(tnDay(t));
  return '<div class="tw-col" id="tnRoot"><p class="lk tw-k">Email to ' + esc(t.first) + '</p><div class="ap-panel tw-card"><div class="ap-panel-head"><span class="ap-panel-title">Email</span><span class="ap-panel-note">' + note("Our email to him · " + day) + '</span></div><div class="ap-panel-body"><div class="ruled"><p class="lk">' + esc(t.by) + " · " + day + '</p><textarea id="tnWords" aria-label="What should we write to ' + esc(t.first) + '?" maxlength="600" placeholder="Write to ' + esc(t.first) + '.">' + esc(t.words) + "</textarea></div></div></div>"
    + '<div id="tnMailLine">' + tnMailLines(t) + '</div><div class="tw-acts"><button class="btn line" data-act="textmailsend"' + (t.busy ? " disabled" : "") + ">" + (t.busy ? "Sending…" : "Send") + '</button><button class="tw-rev" data-act="textmailback" style="margin-left:0"><span>← Back to the card</span></button></div></div>';
}
function tnBodyMailSent(t) {
  return '<div class="tw-col" id="tnRoot"><p class="tw-h" tabindex="-1" id="tnDone">Your email has gone to ' + esc(t.first === "him" ? "him" : t.first) + '.</p>' + tnTold("Email", "Email sent · " + tnTime(t.at) + ". Replies come to you.") + tnRev(t, "email", "The email", t.mailPv ? "Subject: " + esc(t.mailPv.subject) + "<br><br>" + esc(t.mailPv.body).replace(/\n/g, "<br>") : "") + '<p class="tw-res"><b>Sent</b> · ' + tnTime(t.at) + " · " + esc(t.by) + '<button data-act="mancard" data-man="' + esc(t.email) + '"><span class="u">His card</span>&nbsp;<span class="ar">→</span></button></p></div>';
}
function tnBody(t) { return t.stage === "working" ? tnBodyWorking(t) : t.stage === "done" ? tnBodyDone(t) : t.stage === "mail" ? tnBodyMail(t) : t.stage === "mailsent" ? tnBodyMailSent(t) : tnBodyWrite(t); }
function tnShown(t) { return !!(sheet.classList.contains("open") && SHS.length && SHS[SHS.length - 1].t === t.title); }
function tnDraw(t) {
  if (TN !== t) return; var html = tnBody(t);
  for (var i = SHS.length - 1; i >= 0; i--) if (SHS[i].t === t.title) { SHS[i].h = html; break; }
  if (tnShown(t)) sheetBody(html);
}
function tnPart(t, id, html) { if (TN === t && tnShown(t) && t.stage !== "working") { var e = tnById(id); if (e) e.innerHTML = html; } }
function tnFocus(id) { var e = tnById(id); if (e) e.focus(); }
function tnKeep(t) {
  var p = tnNoticeParts(t); TNX[t.email] = { ms: t.ms, out: t.stage === "mailsent" ? "" : p.out, mail: t.stage === "mailsent" };
  try { lsSet(TNK, JSON.stringify(TNX)); } catch (e) {}
}
function tnRosterLine(m) {
  var x = TNX[String(m.email || "").toLowerCase()]; if (!x) return "";
  return '<p class="sentl' + (nowMs() - x.ms < 6e5 ? " tw-new" : "") + '"><b>' + (x.mail ? "Our email to him" : "Our words on his page") + "</b> · " + tnTime(new Date(x.ms).toISOString()) + (x.out ? " · " + esc(x.out) : "") + "</p>";
}
function tnClear(t) { clearTimeout(t.t6); clearTimeout(t.t20); }
function tnTimers(t, soon) {
  tnClear(t);
  t.t6 = setTimeout(function () { if (!t.inflight || t.stage !== "working") return; t.slow = true; if (TN === t && tnShown(t)) { var e = tnById("tnNow"); if (e) e.querySelector("span").textContent = "Still working. Your words are safe here."; } }, soon ? 0 : 6000);
  t.t20 = setTimeout(function () {
    if (!t.inflight || t.stage !== "working") return;
    t.stage = "write"; t.err = tnFailLine(t); t.slow = false; tnDraw(t);
  }, soon ? 14000 : 20000);
}
function tnPlanFetch(t) {
  var s = stored(); if (!s) return;
  call({ action: "text_plan", email: t.email, key: s.key }).then(function (r) {
    t.plan = r || null; t.off = !!(r && r.on === false);
    if (TN !== t) return;
    if (t.stage === "write") { if (t.plan && t.plan.plan === "nopage") tnDraw(t); else tnPart(t, "tnLine", tnLineHtml(t)); }
  }, function () {});
}
function textOpen(em) {
  if (TN && TN.email === em && TN.inflight) { openSheet(TN.title, tnBody(TN)); return; }
  var t = TN = { email: em, first: tnFirst(em), stage: "write", words: "", err: "", plan: null, off: false, revs: {}, by: firstName(WHO && WHO.name) || "our team" };
  t.title = "Text " + esc(t.first);
  openSheet(t.title, tnBody(t));
  tnPlanFetch(t);
  setTimeout(function () { if (TN === t && t.stage === "write" && tnShown(t)) { var f = tnById("tnWords"); if (f && document.activeElement !== f) f.focus(); } }, 360);
}
function textSend() {
  var t = TN; if (!t || t.stage !== "write") return;
  var ta = tnById("tnWords"); if (ta) t.words = ta.value;
  var w = t.words.trim();
  if (!w) { t.err = "Write what we should tell " + t.first + " first."; tnPart(t, "tnLine", tnLineHtml(t)); tnFocus("tnWords"); return; }
  if (!stored()) { gateSend(); return; }
  if (t.inflight && nowMs() - t.pressMs < 9e4) { t.stage = "working"; t.slow = true; t.err = ""; tnDraw(t); tnTimers(t, true); return; } /* the first press is still out: do not send a second */
  t.err = ""; t.undoMsg = ""; t.stage = "working"; t.slow = false; t.inflight = true; t.pressMs = nowMs(); t.h = centralParts(t.pressMs).h;
  tnDraw(t); tnTimers(t);
  act({ action: "text_him", email: t.email, words: w }, {
    ok: function (r) {
      tnClear(t); t.inflight = false;
      if (r && r.sent) { tnLanded(t, r); return; }
      t.stage = "write"; t.slow = false;
      if (r && r.why === "no_page") { t.plan = { plan: "nopage" }; t.err = ""; } else t.err = tnWhy(t, r);
      tnDraw(t); if (TN === t && tnShown(t)) tnFocus("tnWords");
    },
    fail: function () { tnClear(t); t.inflight = false; t.stage = "write"; t.slow = false; t.err = tnFailLine(t); tnDraw(t); }
  });
}
/* the card is written: Done now, the notice asked for right after, without waiting */
function tnLanded(t, r) {
  t.stage = "done"; t.r = r; t.landed = r.words || t.words.trim(); t.day = r.day || ""; t.cid = r.cid || ""; t.at = r.at || new Date(nowMs()).toISOString(); t.ms = Date.parse(t.at) || t.pressMs; t.notice = r.legacy ? { notice: r.plan, at: r.at } : null; t.slow = false; t.err = "";
  tnKeep(t); tnDraw(t);
  if (TN === t && tnShown(t)) tnFocus("tnDone");
  render(true);
  if (TN === t && tnShown(t)) tnFocus("tnDone");
  if (r.owed && !r.legacy) tnNoticeFire(t);
  var left = 6e5 - (nowMs() - t.ms); if (left > 0) setTimeout(function () { if (t.stage === "done") tnPart(t, "tnRes", tnResHtml(t)); }, left + 500);
}
function tnNoticeFire(t) {
  act({ action: "text_notice", email: t.email, cid: t.cid }, {
    keep: true,
    ok: function (n) { if (t.stage !== "done" && !t.cid) return; t.notice = n && n.notice && n.notice !== "none" ? n : t.notice; tnKeep(t); tnPart(t, "tnNotice", tnNoticeHtml(t)); render(true); },
    fail: function () { t.notice = { notice: "owed" }; tnKeep(t); tnPart(t, "tnNotice", tnNoticeHtml(t)); }
  });
}
function textUndo() {
  var t = TN; if (!t || t.stage !== "done" || !t.cid) return;
  act({ action: "text_undo", email: t.email, cid: t.cid }, {
    ok: function (r) {
      if (r && r.undone) {
        var tail = r.went === "text" ? "The text had already gone; it says only that something new is waiting." : r.went === "email" ? "The email had already gone; it says only that something new is waiting." : r.went === "held" ? (r.held ? "The text waiting for 8:00 AM will not go." : "The text kept for 8:00 AM still goes; it says only that something new is waiting.") : "Nothing else was sent.";
        t.undoMsg = "Taken off " + tnPoss(t) + " page. " + tail; delete TNX[t.email]; try { lsSet(TNK, JSON.stringify(TNX)); } catch (e) {}
        t.stage = "write"; t.cid = ""; t.notice = null; t.plan = null; t.err = ""; t.revs = {}; t.words = t.landed || t.words;
        tnDraw(t); if (TN === t && tnShown(t)) tnFocus("tnUndo"); tnPlanFetch(t); render(true);
      } else {
        t.undoLate = r && r.why === "too_late" ? "It has been more than ten minutes, so it stays on his page." : "It did not come off. Try again in a moment.";
        tnPart(t, "tnRes", tnResHtml(t));
      }
    }
  });
}
function textRev(k) {
  var t = TN; if (!t) return; t.revs[k] = !t.revs[k];
  var ta = tnById("tnWords"); if (ta && (t.stage === "write" || t.stage === "mail")) t.words = ta.value;
  tnDraw(t); var b = document.querySelector('#tnRoot [data-act="textrev"][data-k="' + k + '"]'); if (b) b.focus();
}
function textMailOpen() {
  var t = TN; if (!t) return; var ta = tnById("tnWords"); if (ta) t.words = ta.value; else if (t.stage === "done") t.words = t.landed || t.words;
  t.stage = "mail"; t.mailPv = null; t.mailErr = ""; t.busy = false; t.revs = {};
  tnDraw(t); if (TN === t && tnShown(t)) tnFocus("tnWords"); tnMailPreview(t);
}
function tnMailPreview(t) {
  var s = stored(); if (!s || !t.words.trim()) { t.mailPv = null; tnPart(t, "tnMailLine", tnMailLines(t)); return; }
  call({ action: "text_mail", email: t.email, words: t.words, key: s.key }).then(function (r) { if (t.stage !== "mail") return; t.mailPv = r; t.mailErr = ""; tnPart(t, "tnMailLine", tnMailLines(t)); },
    function (e) { if (t.stage !== "mail") return; t.mailPv = null; t.mailErr = e && e.error === "bad_words" ? "Use plain words, up to 600 characters, and only links on ancientpathcoaching.com." : ""; tnPart(t, "tnMailLine", tnMailLines(t)); });
}
function textMailSend() {
  var t = TN; if (!t || t.stage !== "mail" || t.busy) return; var ta = tnById("tnWords"); if (ta) t.words = ta.value;
  if (!t.words.trim()) { t.mailErr = "Write what we should tell " + t.first + " first."; tnPart(t, "tnMailLine", tnMailLines(t)); tnFocus("tnWords"); return; }
  if (!stored()) { gateSend(); return; }
  t.busy = true; t.mailErr = ""; tnDraw(t);
  act({ action: "text_mail", email: t.email, words: t.words, send: true }, {
    ok: function (r) {
      t.busy = false;
      if (r && r.sent) { t.stage = "mailsent"; t.at = r.at || new Date(nowMs()).toISOString(); t.ms = Date.parse(t.at) || nowMs(); t.revs = {}; tnKeep(t); tnDraw(t); if (TN === t && tnShown(t)) tnFocus("tnDone"); render(true); }
      else { t.mailErr = "It did not go through. Your words are still here; try again."; tnDraw(t); }
    },
    fail: function (e) { t.busy = false; t.mailErr = e && e.error === "bad_words" ? "Use plain words, up to 600 characters, and only links on ancientpathcoaching.com." : e && e.error === "too_many" ? "Forty emails have gone today. Try again tomorrow." : "It did not go through. Your words are still here; try again."; tnDraw(t); }
  });
}
function textMailBack() { var t = TN; if (!t) return; var ta = tnById("tnWords"); if (ta) t.words = ta.value; t.stage = t.cid ? "done" : "write"; if (t.stage === "write") t.err = ""; tnDraw(t); if (t.stage === "write") tnFocus("tnWords"); }
document.addEventListener("input", function (ev) {
  var t = TN; if (!t || !ev.target || ev.target.id !== "tnWords") return; t.words = ev.target.value;
  if (t.stage === "mail") { clearTimeout(t.pvT); t.pvT = setTimeout(function () { tnMailPreview(t); }, 500); }
  else if (t.err && t.stage === "write") { t.err = ""; tnPart(t, "tnLine", tnLineHtml(t)); }
});
/* ── end Text him ── */

document.addEventListener("click", function (ev) {
  if (!host.contains(ev.target)) return;
  var b = ev.target.closest("[data-act]"); if (!b) return;
  var a = b.dataset.act, k = b.dataset.k, id = b.dataset.id, rk = b.dataset.room, em = b.dataset.man;
  switch (a) {
    case "tab": S.view[S.role] = b.dataset.tab; S.res = {}; S.sres = null; closeSheet(); render(); break;
    case "view": if (b.dataset.v !== "record") S.recFrom = ""; S.view[S.role] = b.dataset.v; S.res = {}; S.sres = null; closeSheet(); render(); break;
    case "rooms": openSheet("Rooms", roomsHtml()); break;
    case "panel": delete S.auto[k]; S.shut[k] = b.getAttribute("aria-expanded") === "true"; var p = b.closest(".ap-panel"); p.classList.toggle("shut", S.shut[k]); b.setAttribute("aria-expanded", !S.shut[k]); b.querySelector(".ap-panel-ctl").textContent = S.shut[k] ? "Open ▾" : "Close ▴"; break;
    case "toggle": S.open[k] = !S.open[k]; var box = b.nextElementSibling; box.classList.toggle("open", S.open[k]); b.setAttribute("aria-expanded", S.open[k]); b.lastChild.textContent = " " + (S.open[k] ? "▴" : "▾"); break;
    case "toast": toast(b.dataset.msg); break;
    case "srcset": S.src = !S.src; root.classList.toggle("showsrc", S.src); sheetBody(settingsHtml()); break;
    case "copylink": case "copytext": {
      var A = arr(FEED && FEED.search && FEED.search.live), art = A[S.linkArt] || A[0], txt = a === "copytext" ? b.dataset.t : art ? art.url + (art.url.indexOf("?") < 0 ? "?" : "&") + "utm_source=" + b.dataset.w + "&utm_medium=" + (b.dataset.w === "email" ? "email" : b.dataset.w === "video" ? "video" : "social") : "";
      var msg = a === "copytext" ? b.dataset.msg : "Copied the link to " + (art ? rt(art.title) : "the article") + " for " + b.dataset.w + ". It carries a note of where it was posted.";
      try { navigator.clipboard.writeText(txt).then(function () { toast(msg); }, function () { toast(msg); }); } catch (e) { toast(msg); } break;
    }
    case "done": {
      if (id.indexOf(":") > 0 && findCard(id)) { pressDone(findCard(id), b.dataset.answer || ""); break; }
      var all = allCards(); S.done[id] = true; S.doneAt[id] = new Date(nowMs()).toISOString(); dirty();
      var left = (fac() ? facCards() : (curView() === "growing" ? growCards() : teamCards())); left = (fac() ? left : ownF(left)).filter(function (c) { return !S.done[c.id]; });
      render(true, left.length ? "#c-" + CSS.escape(left[0].id) + " .nm" : "#laneEmpty");
      toast(/^f2/.test(id) ? "No ask this week; the reminder goes without one." : "Said done. The card has left the list.");
      if (id.indexOf(":") > 0) act({ action: "done", actionKey: id }, { idem: true, fail: function () { delete S.done[id]; delete S.doneAt[id]; render(true); } });
      break;
    }
    case "cardact": {
      var cac = findCard(id); if (!cac || !cac.acts) break;
      var aco = cac.acts.filter(function (x) { return x.a === b.dataset.a; })[0]; if (!aco) break;
      if (aco.a === "publish" && cac.story && !storyTicks(cac).all) { toast("Tick all five first, then press Publish."); break; }
      if (aco.box === "open" && !b.dataset.send) { S.boxOpen[cac.id] = S.boxOpen[cac.id] === aco.a ? "" : aco.a; render(true); var tbx = $h("#bx-" + cac.id); if (tbx) tbx.focus(); break; }
      if (aco.box) { var tx = String(S.ctext[cac.id] || "").trim(); if (!tx) { toast("Write a line first, then press " + aco.t + "."); break; } pressAct(cac, aco, tx); break; }
      if (aco.keeps) { pressKeep(cac, aco); break; }
      pressAct(cac, aco); break;
    }
    case "schk": { if (!findCard(id)) break; var sci = Number(b.dataset.i); S.sChk[id] = arr(S.sChk[id]).slice(); S.sChk[id][sci] = !(S.sChk[id][sci] === true); render(true, "#sc-" + CSS.escape(id) + "-" + sci); break; }
    case "snow": { S.sNo[id] = !S.sNo[id]; render(true); break; }
    case "cline": { var lcard = findCard(id); if (lcard) pressLine(lcard, Number(b.dataset.i), b.dataset.a); break; }
    case "vline": {
      var vcard = findCard("voices:open"); if (!vcard) break;
      var vkey = b.dataset.k, vl = arr(vcard.vlines).filter(function (l) { return l.key === vkey; })[0]; if (!vl) break;
      var vch = b.dataset.v; S.vl = S.vl || {};
      S.vl[vkey] = { ch: vch, say: (vl.say && vl.say[vl.k + ":" + vch]) || "Kept.", at: new Date(nowMs()).toISOString(), until: new Date(nowMs() + 10 * 6e4).toISOString() };
      var vleft = arr(vcard.vlines).filter(function (l) { return !S.vl[l.key]; }).length;
      if (!vleft) {
        var vrec = pressStart(vcard, { word: "Changed the Sources list", went: (fac() && vcard.fwent ? vcard.fwent : vcard.went) || "The Sources list keeps your ruling for each voice." });
        render(true, "#res-" + vrec.lane); pressToast(vrec, "Changed the Sources list. " + (vcard.went || ""));
      } else render(true, "#vl-" + CSS.escape(vkey) + " .dlt");
      act({ action: "voice_set", actionKey: vkey, choice: vch }, { idem: true, ok: function (r) { if (r && r.already) toast("Already ruled. That voice is off the list."); }, fail: function () { delete S.vl[vkey]; if (S.pressed["voices:open"]) pressRollback(S.pressed["voices:open"]); else render(true); } });
      break;
    }
    case "vlundo": {
      var uk = b.dataset.k; if (!S.vl || !S.vl[uk]) break;
      var ud = S.vl[uk]; delete S.vl[uk]; render(true, "#vl-" + CSS.escape(uk) + " .dlt");
      act({ action: "undo", actionKey: uk, mode: "undo" }, { fail: function () { S.vl[uk] = ud; render(true); } });
      break;
    }
    case "voiceset": {
      var vc = findCard(id); if (!vc || !vc.voice) break;
      var vv = b.dataset.v, vn = voiceName(vc), vsay = String(VOICE_SAY[vc.voice.k + ":" + vv] || "Kept.").replace("{n}", vn).replace("{d}", new Date(nowMs() + 30 * 864e5).toLocaleDateString("en-US", { timeZone: "America/Chicago", month: "long", day: "numeric" }));
      var vrec = pressStart(vc, { word: "Changed the Sources list", went: vsay });
      render(true, "#res-" + vrec.lane);
      pressToast(vrec, vsay);
      act({ action: "voice_set", actionKey: id, choice: vv }, { idem: true, ok: function (r) { if (r && r.already) { var vst = VOICE_NOW[String(r.status || "").toLowerCase()]; toast(vst ? "Already ruled: " + vn + " is " + vst + ". The card is off the desk." : "Already ruled. The card is off the desk."); } }, fail: function () { pressRollback(vrec); } });
      break;
    }
    case "cardgo": {
      var c = findCard(id);
      if (c && c.road) { openSheet("The Room’s Ask", wordsHtml()); roomAskText(); break; }
      if (c && c.sent) { S.sent[id] = true; render(true, "#s-" + CSS.escape(id)); }
      break;
    }
    case "askfill": var q = b.dataset.q; var aq = $h("#askq"); S.askq[S.role] = q; S.ask[S.role] = null; if (!aq || $h("#p-ask").classList.contains("shut")) { S.shut.ask = false; render(true); } aq = $h("#askq"); aq.value = q; aq.focus(); scrollTo(aq, "center"); break;
    case "askgo": S.askq[S.role] = b.dataset.q; closeSheet(); doAsk(b.dataset.q); { var ao = $h("#ansOut"); if (ao) scrollTo(ao, "center"); } break;
    case "ask": { var qa = $h("#askq"), qq = qa.value.trim(); if (!qq) { toast(words({ error: "empty" })); qa.focus(); break; } doAsk(qq); break; }
    case "seecard": S.seeFrom = b.dataset.id;
    case "seeat": { var sid = b.dataset.id, sw = cardWhere(sid); S.front = ""; S.owner = "all"; if (sw) { S.view[S.role] = sw[0]; S.shut[sw[1]] = false; S.res[sw[1]] = null; S.idx[sw[1]] = 0; S.goto = { l: sw[1], id: sid }; } closeSheet(); clearToast(); render(true, "#c-" + CSS.escape(sid) + " .nm"); var sel = $h("#c-" + CSS.escape(sid) + " .nm"); if (sel) scrollTo(sel, "start"); else toast("That card is done."); break; }
    case "tocard": { var cid = b.dataset.id, w = cardWhere(cid); S.front = cid; S.owner = "all"; if (w) { S.view[S.role] = w[0]; S.shut[w[1]] = false; S.idx[w[1]] = 0; S.res[w[1]] = null; } closeSheet(); render(true, "#c-" + CSS.escape(cid) + " .nm"); var cel = $h("#c-" + CSS.escape(cid) + " .nm"); if (cel) scrollTo(cel, "start"); else toast("That card is done."); break; }
    case "seeback": { S.seeFrom = ""; S.front = ""; S.view[S.role] = "growing"; S.shut.signals = false; closeSheet(); render(true); var sgp = $h("#p-signals .ap-panel-head"); if (sgp) { scrollTo(sgp, "start"); sgp.focus({ preventScroll: true }); } break; }
    case "onekeep": {
      var o = $h("#onet-" + rk); if (!o || !o.value.trim()) { toast("Write a line first."); if (o) o.focus(); break; }
      var r0 = roomById(rk), wk0 = wk(r0), prev = S.oneAsk[rk]; S.oneAsk[rk] = o.value.trim(); S.oneKept[rk] = true; S.shut["fweek-" + rk] = false; render(true, "#oneKept-" + rk); toast(down() ? "Kept here. It goes through when the record is back." : "Kept. It is in the reminder.");
      act({ action: "ask_set", week: wk0, text: S.oneAsk[rk] }, { idem: true, fail: function () { S.oneKept[rk] = false; if (prev == null) delete S.oneAsk[rk]; else S.oneAsk[rk] = prev; render(true); } }); break;
    }
    case "onechange": S.oneKept[rk] = false; S.open["onech" + rk] = false; S.open["onew" + rk] = true; if (r0 = roomById(rk)) { if (r0.pieces[wk(r0)]) r0.pieces[wk(r0)].ask = ""; } render(true, "#onet-" + rk); break;
    case "roomdesk": { var rr = roomById(rk); openSheet("This Week in " + rr.name, '<p class="sheetnote"' + src("Rooms tab") + ">The room’s week, as its desk holds it.</p>" + weekPanel(rr, true)); break; }
    case "askteam": S.askSent = false; S.askErr = ""; openSheet("Ask Our Team", askTeamHtml()); break;
    case "asksend": {
      var at = $h("#askteam"); if (!at.value.trim()) { toast("Write your note first."); at.focus(); break; }
      S.askSent = true; sheetBody(askTeamHtml());
      act({ action: "team_note", text: at.value.trim(), scope: fac() ? "room" : "desk" }, { fail: function (e) { S.askSent = false; S.askErr = words(e); sheetBody(askTeamHtml()); } }); break;
    }
    case "askagain": S.askSent = false; sheetBody(askTeamHtml()); break;
    case "settings": S.sk = ""; openSheet("Settings", settingsHtml()); break;
    case "notice": { var pv = S.notice; S.notice = b.dataset.v; S.sk = "<b>Kept.</b> " + (S.notice === "email" ? "One email at 7:00 AM when a card is waiting." : S.notice === "text" ? "Texts once the carrier approves our number; email until then." : "No notice. The cards wait here."); sheetBody(settingsHtml()); var sk = $h("#sk"); if (sk) sk.focus(); act({ action: "notice_set", notice: S.notice }, { idem: true, fail: function () { S.notice = pv; S.sk = ""; sheetBody(settingsHtml()); } }); break; }
    case "lineout": { var wo = wsOut(id), wi = +b.dataset.i; if (wo[wi]) delete wo[wi]; else wo[wi] = 1; render(true, '.rlines [data-act="lineout"][data-i="' + wi + '"]'); break; }
    case "wssend": {
      var wsc = findCard(id); if (!wsc || !wsc.ws) break;
      var wsk = []; wsc.ws.forEach(function (l, i) { if (!wsOut(id)[i]) wsk.push(i); }); (S.wsTot = S.wsTot || {})[id] = wsc.ws.length;
      var wrec = pressStart(wsc, { word: wsk.length ? "Changed What’s New" : "Dropped", went: wsWent(wsk.length), title: wsk.length ? wsTitle(wsk.length) : "The update card" });
      render(true, "#res-" + wrec.lane); pressToast(wrec, (wsk.length ? "Sent. " : "Dropped. ") + wsWent(wsk.length));
      act({ action: "workshop_send", actionKey: id, keep: wsk }, { idem: true, ok: function (r) { if (r && r.already) toast("Already sent. That card is done."); pressSaid(wrec, r); }, fail: function () { pressRollback(wrec); } });
      break;
    }
    case "pasend": {
      var pit = b.dataset.item, pta = $h("#ans-" + slug(pit)), ptx = String((pta ? pta.value : S.pdraft[pit]) || "").trim();
      if (!ptx) { toast("Write your answer first."); if (pta) pta.focus(); break; }
      var pcd = findCard("pask:" + pit); if (!pcd) break;
      S.pdraft[pit] = ptx;
      var prec = pressStart(pcd, { word: "Changed Partner Signals", went: pcd.went, text: ptx, canReopen: true });
      render(true, "#res-" + prec.lane); pressToast(prec, "Sent. " + pcd.went);
      act({ action: "partner_answer", item: pit, text: ptx }, { idem: true, ok: function (r) { if (r && r.already) toast("Already answered. That card is done."); pressSaid(prec, r); }, fail: function () { pressRollback(prec); render(true, "#ans-" + slug(pit)); } });
      break;
    }
    case "psadd": psPress(id, "add"); break;
    case "psaside": S.sigMode[id] = "aside"; render(true, '[data-act="pswhy"]'); break;
    case "pscancel": S.sigMode[id] = ""; render(true, '[data-act="psadd"]'); break;
    case "pswhy": psPress(id, b.dataset.v); break;
    case "psundo": sigPsUndo(id); break;
    case "sigadd": {
      var c1 = sigById(id), kind = S.sigKind[id] || c1.kind; S.sig[id] = { act: "move", kind: kind, c: c1 }; S.sigMode[id] = ""; S.sigLast = id; S.sres = null; render(true, "#sigKept"); toast("Added. It is on the Moves tab.");
      var pr = c1.p || {}; act({ action: "move_add", moveKey: id, signal: pr.signal || c1.nm, from: pr.from || c1.st, move: MOVENAME[kind], owner: pr.owner || c1.owner || first(), due: "", link: pr.link || "", phrase: pr.phrase || "" }, { idem: true, fail: function () { delete S.sig[id]; S.sigLast = ""; render(true); } }); break;
    }
    case "sigother": S.sigMode[id] = "kind"; render(true, '#sg-' + id + ' [data-act="sigkind"][aria-pressed="true"]'); break;
    case "sigkind": S.sigKind[id] = b.dataset.v; render(true, '#sg-' + id + ' [data-act="sigadd"]'); break;
    case "sigaside": S.sigMode[id] = "aside"; render(true, '#sg-' + id + ' [data-act="sigwhy"]'); break;
    case "sigcancel": S.sigMode[id] = ""; render(true, '#sg-' + id + ' [data-act="sigadd"]'); break;
    case "sigwhy": {
      var c2 = sigById(id), why = b.dataset.v, comes = why === "notnow" ? notNowDay() : ""; S.sig[id] = { act: "aside", why: why, c: c2 }; S.sigMode[id] = ""; S.sigLast = id; S.sres = null; render(true, "#sigKept"); toast(why === "notnow" ? "Set aside. It comes back " + longDay(comes).replace(/^\w+, /, "") + "." : "Set aside. The Moves tab keeps the reason.");
      var pr2 = c2.p || {}; act({ action: "move_set", moveKey: id, status: "dropped", reason: sigWhyName(why), comes: comes, signal: pr2.signal || c2.nm, from: pr2.from || c2.st, move: MOVENAME[c2.kind], owner: pr2.owner || c2.owner || first() }, { idem: true, fail: function () { delete S.sig[id]; S.sigLast = ""; render(true); } }); break;
    }
    case "sigundo": {
      var d0 = S.sig[id]; delete S.sig[id]; S.sigLast = ""; S.sigBack[id] = true; render(true, "#sg-" + id + " .nm"); toast("Undone. It waits again.");
      act({ action: "move_set", moveKey: id, status: "dropped", reason: "Undone", comes: todayStr() }, { idem: true, fail: function () { if (d0) S.sig[id] = d0; delete S.sigBack[id]; render(true); } }); break;
    }
    case "sigback": { S.sigBack[id] = true; delete S.sig[id]; if (S.sigLast === id) S.sigLast = ""; render(true); toast("Brought back. It waits again."); act({ action: "move_set", moveKey: id, status: "dropped", comes: todayStr() }, { idem: true, fail: function () { delete S.sigBack[id]; render(true); } }); break; }
    case "owner": clearToast(); S.owner = b.dataset.v; S.idx = {}; S.res = {}; render(true, '[data-act="owner"][data-v="' + S.owner + '"]'); break;
    case "sigprev": S.sigPos = Math.max(0, (S.sigPos || 0) - 1); render(true, "#of-sig"); break;
    case "signext": S.sigPos = (S.sigPos || 0) + 1; render(true, "#of-sig"); break;
    case "sigfront": S.sigFront = id; S.sigPos = 0; render(true, "#sg-" + id + " .nm"); scrollTo($h("#sg-" + id), "start"); break;
    case "readans": {
      var nm0 = (manByEmail(em) || rosterBy(em) || {}); openSheet(esc(rt(nm0.n || nm0.name || "His")) + "’s Answers", answersHtml(em));
      if (!S.ansCache[em]) act({ action: "answers", email: em }, { ok: function (r) { S.ansCache[em] = r; sheetBody(answersHtml(em)); }, fail: function (e) { S.ansCache[em] = { err: e && e.error === "none" ? "No answers on file for him yet." : words(e) }; sheetBody(answersHtml(em)); } }); break;
    }
    case "mailsee": loadMail(b.dataset.key, b.dataset.kind, em); break;
    case "texthim": textOpen(em); break;
    case "textsend": textSend(); break;
    case "textundo": textUndo(); break;
    case "textrev": textRev(b.dataset.k); break;
    case "textmail": textMailOpen(); break;
    case "textmailback": textMailBack(); break;
    case "textmailsend": textMailSend(); break;
    case "mailclose": if (S.mail[b.dataset.key]) S.mail[b.dataset.key].open = false; render(true, '[data-act="mailsee"][data-key="' + b.dataset.key + '"]'); break;
    case "mailsend": {
      var mk = b.dataset.key, M = S.mail[mk]; if (!M || !M.pv) break; var kind2 = M.kind, em2 = M.email;
      b.disabled = true; b.textContent = "Sending…";
      act({ action: "ask_send", kind: M.pv.kind || kind2, email: em2 }, { ok: function (q2) { S.mail[mk] = { open: false, sentAt: q2.asked, kind: kind2, email: em2 }; S.sends.push({ at: dayTime(q2.asked), ts: Date.parse(q2.asked) || Date.now(), to: q2.name || q2.email, email: String(q2.email || em2).toLowerCase(), kind: q2.kind || kind2 }); render(true, "#ms-" + mk + ', [data-act="mailsee"][data-key="' + mk + '"]'); toast("Sent to " + (q2.name || q2.email) + " at " + clock12(q2.asked) + (M.pv.cc ? ", " + M.pv.cc + " in cc" : "") + ". It is on the Sends tab."); }, fail: function () { b.disabled = false; b.textContent = M.pv.asked ? "Send again" : "Send it"; } }); break;
    }
    case "handled": { var hk = b.dataset.kind; S.handled[em + ":" + hk] = true; render(true, "#man-" + slug(em) + " .nm"); toast("Marked handled another way. The desk stops asking him for " + (hk === "agreement" ? "the agreement" : "his answers") + "."); act({ action: "handled", email: em, kind: hk }, { idem: true, fail: function () { delete S.handled[em + ":" + hk]; render(true); } }); break; }
    case "nameopen": S.nameOpen = em; S.view.team = "rooms"; S.shut.roster = false; closeSheet(); render(true, "#nmin"); { var ni = $h("#nmin"); if (ni) scrollTo(ni, "center"); } break;
    case "namecancel": S.nameOpen = false; render(true); break;
    case "namesave": {
      var nv = String(($h("#nmin") || {}).value || "").replace(/\s+/g, " ").trim(); if (nv.length < 2 || nv.length > 80 || /[^A-Za-z .’'\-]/.test(nv)) { toast(words({ error: "bad_name" })); $h("#nmin").focus(); break; }
      S.names[em] = nv; S.nameOpen = false; S.nameDraft = ""; render(true, "#man-" + slug(em) + " .nm"); toast("Name saved: " + nv + ". The sheet has it too.");
      act({ action: "name", email: em, name: nv }, { idem: true, fail: function () { delete S.names[em]; render(true); } }); break;
    }
    case "handsave": {
      var hv = String(($h("#handt") || {}).value || "").trim(); if (!hv) { toast("Write what he asked for first."); $h("#handt").focus(); break; }
      S.notes[em] = hv; S.noteKept[em] = true; S.handEdit[em] = false; render(true, "#handKept"); toast(down() ? "Kept here. It goes through when the record is back." : "Saved on his card. Ask the desk holds it now.");
      act({ action: "note_set", email: em, note: hv }, { idem: true, fail: function () { S.noteKept[em] = false; render(true); } }); break;
    }
    case "handchange": S.handEdit[em] = true; render(true, "#handt"); break;
    case "wordsap": { S.words[id] = S.words[id] || {}; S.words[id].ap = true; var cw = findCard(id); render(true, "#wAp"); toast("Approved. Paste them into the page’s settings when you are ready."); act({ action: "words_set", address: cw && cw.words ? cw.words.address : "", what: "approve" }, { idem: true, fail: function () { S.words[id].ap = false; render(true); } }); break; }
    case "wordsinst": { var cw2 = findCard(id); S.done[id] = true; S.doneAt[id] = new Date(nowMs()).toISOString(); var gl2 = growCards().filter(function (c) { return !S.done[c.id]; }); render(true, gl2.length ? "#c-" + CSS.escape(gl2[0].id) + " .nm" : "#laneEmpty"); toast("Installed — the card is off the desk. The next search refresh will show whether men click."); act({ action: "words_set", address: cw2 && cw2.words ? cw2.words.address : "", what: "installed" }, { idem: true, fail: function () { delete S.done[id]; render(true); } }); break; }
    case "moveset": { var inS = !!b.closest("#sheet"), v = b.dataset.v, mm = movesAll().filter(function (x) { return x.k === k; })[0] || {}; mvWrite(k, v, b.dataset.a || "", v === "dropped" ? "Dropped. It is off the list, and kept as dropped so we learn which signals we pass on." : v === "done" ? "Marked made. The check comes " + (mm.check || "in a month") + "." : b.dataset.a === "nochange" ? "Kept: no change. It counts toward what this kind of move does." : "Kept: it helped. It counts toward what this kind of move does.", inS); break; }
    case "trkpick": S.linkArt = +b.dataset.v; render(true, '[data-act="trkpick"][data-v="' + S.linkArt + '"]'); break;
    case "roomask": openSheet("The Room’s Ask", wordsHtml()); roomAskText(); break;
    case "roomsend": {
      if (!S.roomAsk.pv) break; b.disabled = true;
      act({ action: "room_ask_send" }, { ok: function (q3) { S.roomAsk.sentAt = q3.asked; S.roomAsk.n = q3.to; S.sends.push({ at: dayTime(q3.asked), ts: Date.parse(q3.asked) || Date.now(), to: "The room", email: "", kind: "referral", n: q3.to }); sheetBody(wordsHtml()); var rs = sheet.querySelector("#raSent"); if (rs) rs.focus(); toast("Sent to " + count(q3.to) + " men at " + clock12(q3.asked) + ". It is on the Sends tab."); }, fail: function (e) { b.disabled = false; if (e && e.error === "too_soon") { S.roomAsk.tooSoon = true; sheetBody(wordsHtml()); } } }); break;
    }
    case "refresh": S.refreshN++; load(true).then(function () { toast(down() ? "Still the last good read. A press is kept here and goes through when the record is back." : "Read again. Nothing new since the script wrote."); }); break;
    case "goto": { var gk = b.dataset.p; S.shut[gk] = false; render(true, "#p-" + gk + " .ap-panel-head"); scrollTo($h("#p-" + gk), "start"); break; }
    case "practice": S.practice = !S.practice; S.role = S.practice ? "team" : "fac"; if (S.role === "team") S.view.team = "today"; else S.view.fac = "week"; closeSheet(); dirty(); rooms(); render(); toast(S.role === "team" ? "The practice desk, under your room." : "Your room’s desk."); break;
    case "gsignin": openSignIn(); break;
    case "gsend": {
      var email = siteEmail(); if (!email) { gateSignin(); break; } b.disabled = true; b.textContent = "Sending…";
      call({ action: "code_send", email: email }).then(function () { S.gate = "code"; S.codeErr = ""; render(true, "#codein"); toast("A code went to the address the site shows."); }, function (e) { if (e && e.error === "wait") { S.gate = "code"; S.codeErr = words(e); render(true, "#codeErr"); return; } S.codeErr = words(e); render(true, "#codeErr"); }); break;
    }
    case "gagain": gateSend(); break;
    case "gcode": {
      var cv = String(($h("#codein") || {}).value || "").replace(/\D/g, ""); if (cv.length !== 6) { S.codeErr = "The code is six digits."; render(true, "#codeErr"); break; }
      b.disabled = true; b.textContent = "Opening…";
      call({ action: "code_check", email: siteEmail(), code: cv, browser: String(navigator.userAgent || "").slice(0, 120) }).then(function (r) { keep({ key: r.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: r.expires }); S.code = ""; S.codeErr = ""; openDesk(); toast("The desk is open on this browser for today."); }, function (e) { S.codeErr = words(e); render(true, "#codeErr"); if (e && e.error === "code_expired") setTimeout(function () { gateSend("That code ran out. Send a new one."); }, 1800); }); break;
    }
    case "forget": forgetBrowser(); break;
    case "back": backSheet(); break;
    case "afterpick": S.after[rk] = b.dataset.v; { var al = $h("#aline-" + rk); if (al) S.afterLine[rk] = al.value; } render(true); break;
    case "afterkeep": {
      var al2 = $h("#aline-" + rk); S.afterLine[rk] = al2 ? al2.value.trim() : ""; if (!S.after[rk]) { toast("Choose what the room did with it first."); break; }
      S.afterKept[rk] = true; render(true, "#afterKept-" + rk); toast("Kept. It is on the Answers tab.");
      var r1 = roomById(rk); act({ action: "after_set", room: r1.name, week: r1.met || wk(r1), answer: S.after[rk], line: S.afterLine[rk] }, { idem: true, fail: function () { S.afterKept[rk] = false; render(true); } }); break;
    }
    case "afterchange": S.afterKept[rk] = false; S.open["afch" + rk] = false; render(true, '[data-act="afterpick"][data-room="' + rk + '"]'); break;
    case "hold": { var e0 = relAll().filter(function (x) { return x.id === id; })[0]; if (e0 && e0.status === "held") relWrite("unhold", id, "", (function () { var o = {}; o[id] = "candidate"; return o; })(), "It goes to the men at 6:00 PM today."); else relWrite("hold", id, "", (function () { var o = {}; o[id] = "held"; return o; })(), "Kept back. Men won’t get it; leaders still see it on The Shelf."); break; }
    case "relnow": relWrite("now", id, "", (function () { var o = {}; o[id] = "released"; return o; })(), "Released. It is on each man’s Readings now."); break;
    case "relundo": relWrite("undo", id, "", (function () { var o = {}; o[id] = "candidate"; return o; })(), "Taken back. It goes to the men at 6:00 PM today."); break;
    case "inplace": { var held = relPlaced().filter(function (x) { return x.status === "held"; })[0]; if (!held) break; var o2 = {}; o2[held.id] = "held"; o2[id] = "released"; relWrite("instead", held.id, id, o2, "Released in its place. It is on each man’s Readings now."); break; }
    case "relall": { var o3 = {}; relAll().forEach(function (x) { if (x.status === "candidate" && x.week) o3[x.id] = "released"; }); relWrite("all", "", "", o3, "Released. This week’s readings are on each man’s Readings now."); break; }
    case "inrec": {
      var u = b.dataset.u, rk2 = b.dataset.k; S.recFrom = S.view.team; closeSheet(); S.view.team = "record"; S.shut.records = false; render();
      var ra = u ? screen.querySelector('#p-records a[href="' + u + '"]') : screen.querySelector("#rec-" + rk2 + " a");
      if (ra) { scrollTo(ra, "center"); ra.focus({ preventScroll: true }); var rw = ra.closest(".drow"); if (rw) { rw.classList.add("flash"); setTimeout(function () { rw.classList.remove("flash"); }, 1600); } } break;
    }
    case "mancard": { S.inSheet = true; var mc = manByEmail(em) || rosterBy(em) || {}; openSheet(esc(rt(mc.n || mc.name || "His")) + "’s Card", manCardHtml(em)); S.inSheet = false; break; }
    case "moves": openSheet("The Moves", movesHtml()); if (b.dataset.k) { var mr = sheet.querySelector("#mv-" + CSS.escape(b.dataset.k)); if (mr) setTimeout(function () { scrollTo(mr, "center"); }, 320); } break;
    case "cnext": clearToast(); S.idx[b.dataset.l] = (S.idx[b.dataset.l] || 0) + 1; S.res[b.dataset.l] = null; render(true, "#of-" + b.dataset.l); break;
    case "cprev": clearToast(); S.idx[b.dataset.l] = Math.max(0, (S.idx[b.dataset.l] || 0) - 1); S.res[b.dataset.l] = null; render(true, "#of-" + b.dataset.l); break;
    case "cgoto": clearToast(); S.idx[b.dataset.l] = +b.dataset.i; S.res[b.dataset.l] = null; S.open["every:" + b.dataset.l] = false; render(true, "#p-" + b.dataset.l + " .card3 .nm"); break;
    case "cundo": pressUndo(id, "undo", b.dataset.l); break;
    case "creopen": pressUndo(id, "reopen", b.dataset.l); break;
    case "wcheck": {
      var wcc = findCard(id); if (!wcc || !wcc.rec || !wcc.rec.address) break;
      var wst = wcOf(id); if (wst.busy) break; wst.busy = true; wst.line = "Reading the page…"; render(true, '[data-act="wcheck"][data-id="' + id + '"]');
      act({ action: "words_check", address: wcc.rec.address }, {
        ok: function (r) {
          wst.busy = false;
          if (r && r.proven) {
            wst.line = "";
            var wprec = pressStart(wcc, { word: "Proven", went: "The desk read the live page and found the new search title and description on it. The Moves, below, shows the move Made, Waiting for the Check; its check is a month on from today.", mv: wcc.moveKey ? "done" : "" });
            render(true, "#res-" + wprec.lane); pressToast(wprec, "Proven. The page carries the new words.");
          } else { wst.line = wcLine(r); render(true, '[data-act="wcheck"][data-id="' + id + '"]'); }
        },
        fail: function () { wst.busy = false; wst.line = ""; render(true); }
      });
      break;
    }
    case "stalekeep": case "staledrop": {
      var sc = findCard(id); if (!sc) break;
      if (a === "staledrop") {
        var srec = pressStart(sc, { word: "Dropped", went: "Nothing was done. You dropped it after it waited more than 30 days.", dropped: true });
        render(true, "#res-" + srec.lane); pressToast(srec, "Dropped. Nothing was done.");
        act({ action: "card_stale", actionKey: id, what: "drop" }, { idem: true, ok: function (r) { pressSaid(srec, r); }, fail: function () { pressRollback(srec); } });
      } else {
        var sprev = sc.raw && sc.raw.stale; if (sc.raw) sc.raw.stale = null; dirty(); render(true); toast("Kept. The 30 days start again today.");
        act({ action: "card_stale", actionKey: id, what: "keep" }, { idem: true, fail: function () { if (sc.raw) sc.raw.stale = sprev; dirty(); render(true); } });
      }
      break;
    }
    case "recwait": case "recdrop": { var rc = findCard(id); if (rc && rc.moveKey) pressRec(rc, a === "recdrop"); break; }
    case "cpage": {
      openSheet(esc(pageShort(b.dataset.t)), '<p class="st">Opening the notes…</p>');
      act({ action: "notes_page", pageKey: b.dataset.key }, { ok: function (r) { sheetBody(notesSheet(r)); }, fail: function (e) { sheetBody('<p class="s">' + esc(words(e)) + "</p>"); } }); break;
    }
    case "cmoves": { S.hiMove = k; openSheet("The Moves", movesHtml()); var hr = sheet.querySelector("#mv-" + CSS.escape(k)); if (hr) setTimeout(function () { scrollTo(hr, "center"); }, 320); break; }
    case "cback": { closeSheet(); var tr = $h("#res-gcards") || $h("#p-gcards"); if (tr) { if (!tr.hasAttribute("tabindex")) tr.setAttribute("tabindex", "-1"); tr.focus({ preventScroll: true }); scrollTo(tr, "center"); } break; }
    case "unswap": S.swapped = false; render(true); toast("Back to the piece our team chose."); break;
  }
});
function roomAskText() { S.roomAsk.pv = null; S.roomAsk.err = ""; act({ action: "room_ask_text" }, { ok: function (r) { S.roomAsk.pv = r; sheetBody(wordsHtml()); }, fail: function (e) { S.roomAsk.err = words(e); sheetBody(wordsHtml()); } }); }
function roomsHtml() { return ROOMS().map(function (x) { return x[0] === "desk" ? '<div class="mi room" aria-current="page"><b>' + x[1] + "</b><span>" + x[2] + "</span></div>" : roomRow(x); }).join(""); }
document.addEventListener("keydown", function (e) {
  if (!sheet || !sheet.classList.contains("open")) return;
  if (e.key === "Escape") { backSheet(); return; }
  if (e.key === "Tab") { var f = $$("button,a,textarea,input", sheet).filter(function (x) { return x.offsetParent !== null; }); if (!f.length) return; var a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } else if (!sheet.contains(document.activeElement)) { e.preventDefault(); a.focus(); } }
});
document.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey && e.target && e.target.id === "askq") { e.preventDefault(); var b = $h('[data-act="ask"]'); if (b) b.click(); } });

/* ══════════ start ══════════ */
function readMe() { var m = window.me; if (m && typeof m === "object" && m.email) return Promise.resolve({ email: String(m.email).toLowerCase().trim(), name: ((m.firstName || m.first_name || "") + " " + (m.lastName || m.last_name || "")).trim() || m.username || "" }); return fetch("/api/user/me", { credentials: "include", headers: { Accept: "application/json" } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }).then(function (r) { var u = (r && r.user) || r || {}; return { email: String(u.email || "").toLowerCase().trim(), name: ((u.first_name || "") + " " + (u.last_name || "")).trim() || u.username || "" }; }); }
function start(tries) {
  tries = tries || 0;
  if (!siteEmail()) { if (tries < 12) { setTimeout(function () { start(tries + 1); }, 300); return; } gateSignin(); return; }
  readMe().then(function (m) { ME = m; S.meName = m.name; if (stored()) openDesk(); else gateSend(); });
}


/* ══════════ go ══════════ */
mount();
var relayout = function () { fit(); };
window.addEventListener("resize", relayout); window.addEventListener("orientationchange", relayout); window.addEventListener("load", relayout);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
if (window.ResizeObserver) { try { var fitQueued = false, ro = new ResizeObserver(function () { if (fitQueued) return; fitQueued = true; requestAnimationFrame(function () { fitQueued = false; fit(); }); }); ro.observe(scroller()); ro.observe(host); } catch (e) {} }
selfCheck();
window.APDesk = { build: BUILD, reload: function () { load(); }, forget: forgetBrowser, fit: relayout };
render(); start();
})();
