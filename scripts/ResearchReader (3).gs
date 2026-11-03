/**
 * Ancient Path — Research reader · build 12.1 (Your Growth 4.0.1, the facilitator's room; the 6:00 PM release; the Witness and Your Page 11.1.2 below it unchanged) · road.js 11.1.2 · growth.js 4.0.1
 * Build 12.1 (Nov 2, 2026, the same night, after the live look): growth.js 4.0.1 stops a view's moved panels from carrying into the next view (Who We Read and Coming Up appeared on Your Craft), and the server reads the room for our team: an admin with no room on People is shown the first room on the Rooms tab, and a room whose course cell holds the school's slug (student-course) is matched to the course its name begins with. Nothing else changes from 12.',
' * Build 12 (Nov 2, 2026; built to the mockup v8.5 John ruled; built on the live 11.1.2 read through the Google Drive connector): growth.js 4.0 and these server changes. 1. growthFor_ is new (the room, the week's piece, his own marks read from his Answers rows, what the room carried, The Shelf, Who We Read, his Craft, his lanes); askShelf_ is new (Claude picks one piece and one question, else the shelf's best match by its own words, never a fixed reply). 2. growth_answer saves every new answer as an Answers row (kinds after, less, voice, setaside, team, notice). 3. A Lanes tab, and Config lines (auto release, growth page link, course pictures), are made once by ensureBuild12_. 4. releaseTick, a daily trigger near 6:00 PM Central, releases every candidate not held when Config "auto release" is on (off until the Hold it button on the Front Desk build 28.4 is proven); hold cards are research:hold:<id> on the Actions tab. 5. roomRow_ carries the room's course; pieceOut_ carries source, weeks and the second question; closeDoor_ leaves hold, team and voice cards alone. Moves to our platform as it is: the Answers rows, the Lanes tab and the release rule; rebuilt there: the trigger.
 *
 * Build 11.1.2 (Nov 2, 2026): road.js 11.1.2 only on the server side: the build string. Your Page: one header on all three tabs, the site row at the top, Your Path without its drawing, Your House became Your Story.
 * Build 11.1.1 (Nov 2, 2026): road.js 11.1.1 (Title Case on every label, the group line only when his mark matches, no counts, nothing preselected in the check-in, a centered panel on a computer) and, on the server, the labels on the page his witness reads and on his preview of it in Title Case (The Path:, This Week’s Piece:, Last Week’s Practice:, In His Words:). No data change.
 * Build 11.1 (Nov 2, 2026; the Witness; built on the live 11.0): road.js 11.1 and these server changes. 1. The leader's witness page: doGet ?w=<token> serves it (HtmlService), one token per leader kept in a new Witness pages tab; it shows each man in his group through witnessView_ only (his shares, Learners W) and never a count. 2. Write to him: witnessWrite (google.script.run) keeps the letter in a new Notes tab (man email, witness, written, text, read, held); a man who paused notes (Learners X) has it held, no email, and the witness is told nothing different; notesFor_ leaves held letters out and road_pause resumed releases them. 3. 'Your witness wrote to you' goes to the man (Config email: note subject / body), never the letter. 4. witnessTick (hourly; setupWitness installs it once) sends each leader 'the men's weeks are ready' the day before his group meets (Config email: weekly ...), once a day (a Log row per send). 5. weeklyPageFor_ returns the page his own page shows him, What your witness sees each week. 6. witnessHelp_ is the hook for a later layer and returns null. 7. Invite Your Own Witness now sends: road_witness saves a Witness row (token, reminder, last weekly, last reminder, team copies join the tab) and emails the witness a link to Before You Say Yes (doGet ?y=<token>); witnessAnswer takes his Yes or Not now, witnessRemind his reminder (Each week, Every two weeks, Each month, No reminder). A witness who already walks with two men is never sent an invitation and the man's page reads as before; one waiting invitation a man, a new one replaces it. A yes emails the man '<Name> said yes' and his page names who walks with him. 8. An invited witness's page is the leader's page for his one or two men (?w=<token>, open while his row says yes); witnessTickInvited_ sends his weekly page on the weekday of his yes and his reminder to write at his cadence; our team gets a copy of his first two letters. 9. Practice reminders (Config 'practice reminders', off unless on): practiceTick_ emails a man at his rhythm (Learners N) and his 'when', with a one-tap link (?d=<token>) that writes a Road did row for the week and answers 'Thank you. It's on your page.' Config gets 'witness weekly', 'witness send hour', 'your page link', 'witness page link', 'practice reminders' and the 'email: <key>' lines. No Claude call in 11.1.
 * Build 11.0 (Nov 1, 2026; Your Page 11.0; built to the prototype John ruled Oct 31, "this is the right direction. let's build from here."; built on the live 10.2.4): road.js 11.0 and these server changes. 1. roadFor_ returns v11, built by roadV11_ (see the block headed "build 11.0" above roadCard_): the week as the list draws it (first visit, before his group meets, after it, a letter, not in a group, course ended), the unit he reads, what is done, the need line under each word (Config "need: afraid", falling back to NEEDS), the house, Make Something of It, his settings. 2. New actions: road_course (he opened his course this week), road_checkin (done or skipped, once at the end of the check-in), road_saw (What did you take from Wednesday?, written as a saw line), road_make (Make Something of It), road_shares (the four switches), road_pause (Pause your witness's notes), road_note_read (a letter he opened), road_ours (Our House, read only; a line shows only with at least four men behind it). 3. Learners gets two columns: W "shares" and X "notes paused" (added once, by learnersSheet_). Both are saved in 11.0 and read by 11.1 through witnessView_. 4. road_remind now also sets the readings pace (Learners N): twice = Up to twice a day, daily = Daily, few = Three a week, weekly = Three a week. The readings pace never goes below three a week (John's ruling, Oct 31). 5. A man whose Learners status is complete can open the page (the course-ended state); any other status but open is still closed. 6. The piece carries its layer (Understanding, Wisdom or Knowledge), the verse our team read it beside, and the weekday he opened it. 7. The hand email carries his first name and email and nothing about his week (the sheet says "Nothing else about your week goes with it"). 8. Config gets "meeting hours" (2) and "carry days" (3), written once. 9. ensureBuild110_ writes one Log line, once. First run: no sheet setup is needed.
 * Build 10.2.4 (Oct 31, 2026; Your Page build 38; ruled by John the same day; built on the live 10.2.3): road.js 10.2.4 and these server changes. 1. His yes and no shape what he is handed next. roadLearn_ reads his Road rows: a lane's lift is +0.35 for It helped and -0.35 for a no, the newest answer weighing most (x0.7 for each older one), bounded to +0.9 and -0.6, so a lift never reaches a whole fit step (a this-week fit beats an earlier-week fit beats any; the lane floor means a lowered lane is still chosen when it is all there is). A no is Not this one with the reading opened, or with Not what I need behind it; Not this one with the reading never opened, or with Too long right now behind it, is not a no: the same construct is offered once more, from a different entry, shorter (the given row text gains ' · short'; creditOf_ reads it). Hard limits (filters): a construct is offered at most three times; offers of a construct are at least seven days apart; after a third no it rests; after Not what I need the same voice is not offered that construct again and a different voice once. 2. New action road_why (too_long | not_needed; only after a Not this one; the Road row what='why', text = the reason). 3. Entries gains three tally columns after the last used one, helped / not this one / too long, one count per man by his latest answer; recounted per entry under a lock after each answer (tallyEntry_). 4. roadFor_ returns helping (null under three answers) and, on the piece, short and why. 5. The word room is group in what a man reads: the writer prompt ("your group", "a man from your group"), the column notes, the Courses state (Your group) and the lane label (The group); the writer check refuses "your room", "his room" and "our room" in the three lines. A Log line is written once (property b1024).
 * Build 10.2.3 (Oct 31, 2026; Your Page build 38; built to the mockup John ruled the same day, "Your Page Top"; built on the live 10.2.2): road.js 10.2.3 and these server changes. 1. road_did takes most, some or notyet (the old did still reads as most). 2. road_when (morning, pull, bed; the latest wins) and road_remind (twice, daily, few, weekly) are new; road_remind saves to a new Learners column V "reminders" (added once, with a dropdown); nothing is sent. The pace (column N) and the notice (column T) are about the reading he is handed, not a reminder, so they could not carry this. 3. road_witness saves an invitation to his own witness to a new Witness tab (his email, role, their name, their email, asked, status, yes date); one waiting row a man, a new one replaces it; a man in a group is refused; nothing is sent. 4. roadFor_ returns visit (first visit or return, from his own taps of an earlier week), group (in, the group line, the leader, what the group carried) and witness. 5. The group line needs at least four men who marked this week and one mark with more than half of them. 6. What the group carried is read from the Signals sheet: rows with no section opened for his cohort, latest week, split into a title and its words; a cohort is matched by the part after the dash in his room name (the live Signals rows carry the course name, so a row is also taken when its date matches a row that names his cohort). 7. The Course map is read for a "week line" column by its header (none, no line). 8. The hand email names his group's leader. 9. ensureBuild1023_ writes one Log line, once. First run: no sheet setup is needed (column V, the dropdown and the Witness tab are made on first use).
 * Build 10.2.2 (Oct 30, 2026; Your Page build 38; built on the live 10.2.1, read through the Google Drive connector the same night): road.js 10.2.2 and three small server changes. 1. road_mark now takes the word from The Word for It: text '<view|footing|steep|lost>' or '<marker>|<word>' with the word in lower case letters only (a to z, two to twenty-four); the four words of 10.2 (mad, hurt, afraid, ashamed) are no longer the only ones accepted, and a row already written with one of them still reads. The page offers the eight words nearest the marker and then the whole list, read from the story engine (window.APStory.wordForIt). 2. landPractices_ (the week's practices from the Course map, split on the numbered items) no longer cuts a practice at a Bible reference: "Memorize Hebrews 12:11. Say it out loud" had been read as items "2. Memorize Hebrews 12:" and "11. Say it out loud…" because the splitter took "11. " for a numbered item; an item number now counts only when it stands at the start or after a space and is the next number in order (1, 2, 3…). Nine of the twelve Breaking Free weeks carry a reference followed by a period; the same split feeds the land, so it is fixed there too. 3. The Log line "build 10.2.2", once; the ping reads script 10.2.2. The hand email (road_hand) names the word as the man saw it (Ashamed, Glad). No sheet change; no setup run. 4. road.js 10.2.2 also carries the compact card layout (John's walk of 10.2.1: the card took too much space): the four markers in one row of four (a 2x2 grid on a phone), the words as small rounded pills, Did it · Not yet as two equal segments side by side; stamp 305 rules. Also: the note under This Week reads Breaking Free · Week 6 of 12 · “Stand Firm Then” (no dangling comma), the weekly writing question is no longer drawn on the card (road_answer is untouched here, so saved answers still read), and the practices collapse to the chosen row with a Change link. Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → the pencil → Version: New version → Deploy.
 * Build 10.2.1 (Oct 30, 2026; Your Page build 38; the waymarks, on John’s word for the Breaking Free room on Wednesday, Nov 4): road.js 10.2.1 draws This week’s waymark line on the card and The Nine Waymarks panel below This Week. Server: courseMap_ now reads the Course map column “waymark (follows from what the week asks of him; the nine by name)” (found by its header, so a moved column still reads) and roadCard_ hands the page the number 1–9 for his course week (0 when the week names none, the course is finished, or he has no course week). One Log line, “build 10.2.1”, once. No sheet change. Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → the pencil → Version: New version → Deploy; no setup run.
 * Build 10.2 (Oct 30, 2026; Your Page build 38; ruled on the mockup "For Your Road", One Week on Your Road, screens 1 to 3, and on the hand path in chat, Opus): road.js 10.2 and three road actions. road_mark writes a Road row what='mark', text='<view|footing|steep|lost>[|<mad|hurt|afraid|ashamed>]', week = the week's start (the latest row in a week wins). road_did writes what='did', text='did|notyet', week = last week's start (only when a practice row exists for that week). road_hand writes what='hand' and mails the leader the road already holds for the man (the Learners "reader" column, else the People tab's facilitator or admin for his room, the rule readerFor_ already uses; if there is none, john@ancientpathcoaching.com): subject "A hand raised on the road", body his first name, his course and week, and this week's marker and word if set, never anything he wrote; one hand a man a day (a second tap the same day sends nothing and answers the same). The road payload gains card (mark, word, last week's practice, did, the course week's practices, what shows). GmailApp was already authorized (the now-level mail), so no new permission. No sheet change; nothing to run. Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → pencil → Version: New version → Deploy (the web app address does not change).
 * Build 10.1 (Oct 28, 2026; Your Page build 37): road.js 10.1 and a bare road for a man with no Learners row; the band (bandOut_); the land for every man; the readings he opened. Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → pencil → Version: New version → Deploy (the web app address does not change). No sheet change; nothing to run.
 * Build 10 (Oct 28, 2026; ruled "go" on the mockup The Man's Row, Build Guide row "Build 10: one road, many courses (the man's row)"):
 *   The rule: one man, one pace, one road. A man is in at most two courses on the road; the first he picks leads (the course with his room leads
 *   unless he changes it). The lead gets the first piece of every week and at least two of every three; the second at most one in three; a piece
 *   that fits both is given once and credited to both; the pace caps the man, never each course; the question back stays one a week, on the lead
 *   course; one notice a day at most. Each course is matched only by its own Course map rows; a course with no rows is not served, never guessed at.
 *   1. Learners (the man's row): F reads as lead course; new O lead started · P second course · Q second started · R lead unit · S second unit ·
 *      T notice (email · page) · U reader. The columns add themselves on first use; the morning brings the row up to date (lead started from the
 *      room's first night, the reader from the People tab, the two units by the room's night or the start-date rule). Nothing he chose is touched.
 *   2. Entries: AC "act" (Read · Listen · Watch) set from the source's medium each morning; AB "week served" holds pairs (BF:4 · KBJ:1) — the
 *      writer sets one unit per course the entry serves; the sixteen bare numbers from before this build read as, and are rewritten to, the first
 *      course on the Course map, which is the only course that was served before.
 *   3. roadDaily / roadFor_: each slot of the week is handed by the lead/second rule (roadSlot_, roadChoose_ per course); the 'given' row records the
 *      course and unit it was handed for ("the morning run · Known by Jesus · 1"), so every piece is headed with its course and week on the page.
 *   4. The setup (road_setup): the man picks his courses (up to two), his pace and how he is told; it writes his row and one Road row (kind setup).
 *      A man who never presses Keep it is handed the room's course at three a week by email. The page shows nothing under the setup until it is kept.
 *   5. The notice: Config "road notice" turns on (email) with this build; a man who chose "Only on this page" gets none; one a day at most.
 *   6. road.js 10: the setup as three Answers and one button (Keep it), folded to one line with Change ▾ once kept; the act under a piece is a
 *      Walk line named for the act (Read → · Listen → · Watch →), never a filled button — Send is the one navy button in the week; every piece
 *      headed "Breaking Free · Week 4 · Given Oct 28 · the voice · the cost"; the panel note names both courses first; a man with no course sees the
 *      same setup with Begin <course> → as the next step; the page counts the rules the browser accepted against the stamped count (AP-SHIP 1, line 12).
 *   7. growth.js 3.9: the Open it line reads the act (Read → · Listen → · Watch →), the same rule as road.js; nothing else changes (177 rules, as 3.8).
 *   Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → pencil → New version → Deploy. No setup run: the sheet changes apply
 *   themselves on the first call (the Log reads "build 10 · made: …"). Counts taken before the file card: the script parses; road.js 10
 *   stylesheet 232 rules (9.1.3 had 221; nothing removed); growth.js 3.9 177 rules (3.8 had 177).
 *
 * Ancient Path — Research reader · build 9.2 (growth.js 3.8: the section standard AP-PANEL 1 on Your Growth) · 9.1.5 (the ten-minute tick reads a date)
 * Build 9.2 (Oct 27, 2026, growth.js 3.8 and the script): every section of Your Growth is a panel drawn by one function from the same AP-PANEL block road.js
 *   and Your Page carry (How This Works, Your Last Room, For Your Growth, This Week, For Your Room, The Shelf, Coming Up), with Close ▴ / Open ▾ on the
 *   heading row and his choice kept: the page posts growth_ui {panel, state} and the script writes one Road row (email, id = the panel key, kind ui); the growth
 *   answer carries ui {key: open|shut} read from those rows. growth.js stamps its rule count (177; 3.7.1 had 144, nothing removed) and counts what the browser
 *   accepted on load, telling the Front Desk once per build if short (AP-SHIP 1, line 7). Paste, Save, Deploy → Manage deployments → edit → New version → Deploy. No setup run.
 * Build 9.1.5 (Oct 27, 2026, the script only; no page changed): six mornings without a transcript, and no error anywhere. The 6:40 task writes
 *   Config "transcribe asked" as 2026-10-27 6:47; Sheets turns that into a date; readConfig_ turned the date into "Tue Oct 27 2026 06:47:00 GMT-0500…",
 *   and the tick's text match on today's date failed every ten minutes, silently. Three changes, all in this file:
 *   1. readConfig_ reads a date cell as yyyy-MM-dd HH:mm (Central), so "transcribe asked" matches whether Sheets kept it as text or made it a date.
 *      (The 6:40 task now also writes the cell as text, with a leading apostrophe; either one alone would have been enough.)
 *   2. transcribeTick writes one Log line a day — in the last hour of its window, only when it has transcribed nothing — saying why: a silent
 *      morning now shows on the Log instead of nowhere. A morning that worked logs nothing new (transcribeToday already logs).
 *   3. transcribeNow (by hand) catches up: every entry of the last ten days without a Transcripts row, newest first, with no daily Deepgram cap
 *      for that run (the cap still guards the automatic tick); when the five-minute budget runs out it says "run transcribeNow again".
 *   Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → pencil → New version → Deploy. No setup run. Then run transcribeNow
 *   once (twice if the Log row says to) and the waiting entries get their words; the 7:45 pass deepens them the next morning.
 *
 * Build 9.1.4 (Oct 27, 2026, growth.js 3.7.1 only): Your Growth had lost its styling. The shapes CSS (AP-SHAPES 1.1) inside growth.js carried a .apg prefix
 *   on its @media (prefers-reduced-motion) line and the block was never closed, so the browser dropped every rule after it (26 of 144 survived);
 *   the prefix is gone, the block is closed, and the font @import stands first in the stylesheet, where a browser reads it. Nothing else changes;
 *   road.js and the Front Desk carry the correct copy. Install the same way; no setup run.
 *
 * Build 9.1 (Oct 27, 2026, John's walk of 9.0: "the language and options need to flow… minimum lets set at three a week, daily, up to twice a day,
 *   content permitting… the margins in this box need to be the same as that below… this box needs to be collapsible… the ui / ux standard for
 *   section headings need to be defined… the close button also needs to be a standard"; ruled "go" on the recommendation):
 *   1. The pace: Three a week · Daily · Up to twice a day. One a week is gone; a man who has not chosen is handed three a week, the new minimum.
 *      Daily is one a morning; Up to twice a day is two. All of it as the shelf has pieces. The question back stays once a week. An old
 *      "One a week" or "Up to two a day" typed on the sheet reads as Three a week or Up to twice a day. The pick list on Learners column N is refreshed.
 *   2. One section standard on Your Page (road.js 9.1, the AP-PANEL block, one source carried by every room script): a section is one panel — paper,
 *      a bronze rule, one left edge for every line; its name is a serif heading with a capital on every word and a quiet line under it; one control at the
 *      right of the heading, always Close ▴ or Open ▾; a line inside a section opens in place with its own words and a turning arrow. For Your Road and
 *      Your Land are now two panels side by side (Your Land was a box inside For Your Road). The intro and the pace fold once a pace is kept
 *      ("Your pace: Daily. Change ▾ · What this is ▾"). The lead line over the piece is gone. A section remembers open or closed on his account
 *      (Road tab, kind ui; the road_ui call) and the page asks nothing else of him.
 *   3. Your Growth already conforms on its controls (Open ▾ / Close ▴, arrows after the words); its headings keep their own layout until they are drawn.
 *   Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → pencil → New version → Deploy. No setup run.
 *
 * Build 9.0 (Oct 26, 2026, ruled with John Oct 24 and Oct 26: "i thought we agreed to allow them to choose an upper bound? some people want daily
 *   guidance"): the pace. At the door a man chooses the most he is handed, from a pick list of three — One a week · Up to three a week · Up to
 *   two a day — kept with one button, Keep it (road.js 9.0, an Answer shape). The Learners tab gets a "pace" column (column N; it adds itself
 *   on first use and carries a pick list for a hand edit; blank reads as One a week, so no man changes until he chooses). roadDaily hands a man
 *   up to his pace: pieces arrive spread across the week, never more than the pace allows and never more than one a day (two for Up to two a
 *   day); the question back stays one a week, on the week's first piece, and the pieces after it come without one. No minutes anywhere in
 *   the pace. Script: Learners column N, the road_pace call, roadFor_ returns pace, paces and more, roadDaily hands the rest. Also fixed:
 *   pieces and lines were ordered by their date text, so a November row sorted older than an October one; they now follow the sheet's own
 *   order (rows are only ever added at the foot). Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → pencil → New version →
 *   Deploy. No setup run.
 *
 * Build 8.9 (the land walked by scroll, five pictures; the three shapes of an ask; one layout rule on Your Growth)
 *
 * Build 7 (Oct 26, 2026, John's walk of 6: 'i see the gate but the story board is gone. we need both'): one frame a place, five in a row, so a
 *   press moves the camera a whole place; under the scene the storyboard, the five places in order with one plain line each; the walk goes the
 *   whole road and ends on the horizon (a line kept there too) with Proverbs 16:9 and Go to your land. Script: the horizon joins the places a
 *   line can be kept at. Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → pencil → New version → Deploy. No setup run.
 * Build 8 (Oct 26, 2026, 'simplicity. common sense. great flow'): road.js 8 — the walk is a scroll (the picture pinned, the places arriving
 *   as he scrolls, a line kept when he leaves the box, the storyboard under the picture, the horizon ending) and growth.js 3.5 — both on
 *   AP-SHAPES 1, the three shapes of an ask (Find, Answer, Walk) and the weight rule (one filled button a screen). Install the same way.
 * Build 8.1 (Oct 26): road.js 8.1 — focus points, the picture drawing in as he reads, the light of each place, the pulse when a line is kept.
 * Build 8.2 (Oct 26, the merge): growth.js 3.6 = the Your Growth task's 3.5 (one layout rule for every opened piece: full width on top, two
 *   equal boxes below, the buttons ending the right box, one column under 900px; the 760px width and the tied last words of 3.4) with the
 *   three shapes on top; and that task's two script lines (Already ours, focused; Rule RE1) carried over, so nothing from builds 6.0.1 and
 *   6.0.2 is lost. This one file replaces both 8.1 and the 6.0.2 transfer page. Install the same way; no setup run.
 * Build 8.3 (Oct 26, road.js 8.3 only): the stream and the stones have their pictures (stream-ruled, stones-ruled, drawn by John in the Studio
 *   with the gate as reference); their focus points are set to the man on the bank and the heap beside the track. Install the same way; no setup run.
 * Build 8.4 (Oct 26, growth.js 3.7 only, after the live read): the arrow a space off every Walk line, the magnifier off the first letter, the Answer
 *   shape kept over the room's own box style. Install the same way; no setup run.
 * Build 8.5 (Oct 26, road.js 8.5 only, after John's walk of 8.3 live): the walk follows the scroll inside the site's page box as well as the
 *   window and the picture is pinned by measure, not sticky; Walk the land is the first line under the picture; the land walks itself on
 *   the first open and the first visit of each week. Install the same way; no setup run.
 * Build 8.6 (Oct 26, road.js 8.6 only): Walk the land is a navy button under the picture; no empty room between the places on the walk.
 * Build 8.7 (Oct 26, road.js 8.7 only): every Answer carries its act (Keep it under each line; Enter keeps; the button reads Kept); one plain
 *   paragraph under the heading says what For your road is and why. Install the same way; no setup run.
 * Build 8.8 (Oct 26, road.js 8.8 only): the section stands on its own paper panel with a bronze rule at its head; the definition as ruled.
 * Build 8.9 (Oct 26, road.js 8.9 only): his house as three rooms in the verse's order (Proverbs 24:3–4), the verse alone until he writes.
 *
 * Build 6 (Oct 26, 2026, John's 'go' on the better alternative, then 'tells me a story without saying very many words'): one landscape, not
 *   three pictures — the scene is wider than its window and the camera slides to the place that is open (land-ruled from the Drive folder when
 *   it exists; the three frames joined until then); the place's name stands on the picture. Each visit opens on the place his week stands in with
 *   the week's own sentence from the Course map under it (the verse elsewhere), his words there, the one thing to do, and What this place means
 *   folded. The first open asks before it tells: three short questions, one line each, none required (the gate, the stream, his house); what he
 *   writes stands at the place the moment he writes it (Road kind place, id = the place) and the camera moves on. Script: road_place, places and
 *   the week's sentence in the land's answer, land-ruled in the picture list. Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments →
 *   pencil → New version → Deploy. No setup run.
 *
 * Build 5.1 (Oct 26, 2026, John's walk of the live land, ruled 'go'): the land is told as a story, not a strip. Each place is a chapter — its picture in line
 *   with the words of What the Land Means that belong to it, then his own words there; the three plain lines open it and Proverbs 16:9 closes it; no
 *   separate first screen; on later visits a chapter keeps its first paragraph and opens the rest in place, and a place with no picture and nothing of
 *   his is not drawn; the text spans the section's width. The stones chapter carries its own paragraph (Joshua 4:6–7). Only road.js changed; the
 *   script is build 5. Install: paste over Code.gs, Ctrl+S, Deploy → Manage deployments → pencil → New version → Deploy. No setup run.
 *
 * Build 5 (Oct 26, 2026, ruled with John Oct 24–26; road.js 5): the head of For your road is the man's own land, told in three ages — the text's
 *   own world at the gate (Genesis 12:1), his own today at his house (Proverbs 24:3–4; John 14:23), what is still ahead on the horizon (Genesis 1:5).
 *   One large picture, the age his week stands in (Course map column J), its verse beneath; the road drawn in code under it with five stops
 *   (the gate · the stream · the stones · your house · the horizon), each with its verse and only his own words where they landed. The pictures
 *   are read by piece name from the Drive folder "Ancient Path — pictures" (gate-ruled, house-ruled, horizon-ruled; stream, stones, garden, table
 *   the day they land), shared by link the first time, cached ten minutes; Config "land pictures base" moves them to the web later. The first
 *   open is one screen (What the Land Means, three plain lines, Proverbs 16:9, See your land), read once (Road kind land). Two asks under the
 *   piece: what he is practicing this week (the Course map's practices for the week, pressed, or his own words; Road kind practice) and the
 *   question back, each answer landing in a strand in turn (Road kind strand: did · saw · know). The morning after he answers, roadDaily writes
 *   a word for the road (Road kind word: a verse, one question, one step; read back — it quotes and asks and never prescribes). Every answer
 *   is sorted the same minute (now / soon / ordinary); "now" marks the desk card and mails our team the same hour. A notice with no words goes
 *   out only when Config "road notice" says email. The land shows only for the people Config "land" names (John first; "all" opens it).
 *   Install: paste over Code.gs, Ctrl+S, run setup once (Config rows, Course map column J, the Standard rows), then Deploy → Manage
 *   deployments → edit → New version → Deploy (the same address). No new permission (Drive and Mail are already granted).
 *
 * Build 4.0.5 (Oct 23, growth.js 3.4 only): John's ruling that the shelf is never an echo chamber. The fifth stop of How this works now reads
 *   "The shelf grows as we listen to one another": each week's piece is chosen from the voices we follow for the work the room is doing now,
 *   set in what the wider community is saying; the facilitator's answers tell our team what served and never narrow who we listen to.
 *   The fourth stop's last line says the same, and the first stop no longer says "lane" ("on every subject we follow").
 *   Three marks under the piece, never four: Open it · Bring it to the room (then "On the agenda for Week N") · Not needed. This offended me is
 *   gone from the page (the script's markEntry_ still accepts 'offended'; nothing sends it). Nothing else changes; the script half is 4.0.4.
 *
 * Build 4.0.4 (Oct 23, growth.js 3.3 only): the second stop of How this works reads "What stays is read against Scripture and supports the
 *   work we are doing now and in the future." Paste, Save, Deploy → Manage deployments → edit → New version → Deploy. No setup run.
 *
 * Build 4.0.3 (Oct 23, 2026, ruled with John after Jason's walk):
 *   1. The gate: Your Growth opens only when the site shows signed in the person the desk key is for (the page sends the site's
 *      address with every call; whoIs_ refuses a key alone or another person). No email box: the code goes to the address the site
 *      shows. The key is the Front Desk's and lasts one day (Front Desk build 27).
 *   2. How this works: the five stops drawn in code under the bench, in the facilitator's words (many voices · one in ten kept ·
 *      chosen for your room · you answer back · the shelf is built as you lead), full the first time, one line after; and a plain-talk
 *      line: some of what we keep is graphic or uses colorful language; say so if it offends you.
 *   3. "This offended me", a fourth mark beside Open it · Bring it to the room · Not for me: it opens "What offended you, and why?";
 *      the answer goes to the Answers tab (read by a person; it never reaches another man) and the entry's desk column reads
 *      "offended <date>" so What earns its place (4.3) can count it. markEntry_ what = 'offended', text ≤ 1500.
 *   4. The Bring-it standard: every "Bring it to the room" line is three to five minutes of room time, written as the two or three
 *      points a facilitator would say. The page draws the move as those points (an older one-paragraph move is split by sentence);
 *      the Standard tab carries the rule for the writer. The daily task's prompt carries the same line (John's hand, see the handoff).
 *   5. Bronze buttons carry white text (ruled Oct 23).
 *   growth.js 3.2. Install: paste over Code.gs, Ctrl+S, run setup once (the Standard row), then Deploy → Manage deployments → edit →
 *   New version → Deploy (the same address). No new permission.
 *
 * Build 4.0.2 (For his road: the first walk's findings, and the road remembers)
 *
 * Build 4.0.2 (Oct 22, 2026, ruled with John): the man's lines never carry a course week (Entries AB "week served" is a value the morning
 *   writer sets; the choice prefers his week or earlier, never later); the writer never sees the facilitator's move and a read-back fails any
 *   line that puts him in the facilitator's chair; a one thing that names a Your Story piece says the step first; release writes lines for
 *   every released entry; the Course map tab gives the writer the week's own words; the corner reads "Week 3 of 12 · Given Oct 21"; the
 *   Since line reads right; phone sizes; the threshing floor and the five stops at the head of the section (full the first time, then one
 *   line); and the road remembers (4.1b): the line from his last answer, Your road so far, the questions that return. Being known is quieter.
 *
 * Build 4.1 — one band, three rooms (row.js build 3): Your Growth's band becomes the house band on Your Page and Your Desk, redrawn by
 *   row.js on load (picture when Config "band picture page" / "band picture desk" is filled, eyebrow, greeting, one line, the three
 *   stops, the row for desk holders), aligned to the page's own edge. Also: the man's lines never carry their own label (4.0.1).
 * Build 4 — For his road, the second door of the same shelf: on a man's Your Page (the loader <div id="apRoad4"></div> and this
 *   script's ?file=road.js), one released piece a week chosen for where he is on the road — the claim, In their words, What it means
 *   for your road, One thing to do this week, a question back (its answer goes to the Front Desk as a card and is read by a person
 *   before anything else happens with it), and the two words This met me / Not for me. New: Entries X–AA (key words · for his road ·
 *   one thing to do · question back), written each morning by roadDaily from the entry and the Weeks tab's own titles so John reads the
 *   man's version before he releases; the Learners tab (the Room tab's men on their own, anyone else by hand; a row binds to the first
 *   LearnWorlds id it sees); the Road tab (given · opened · met · not · answer); Config rows road door opens / road free until /
 *   road price / road review window / road model / road lines per day / road lead / road foot / road daily; Rule RE14; a daily
 *   trigger roadDaily (6 AM Central). The week turns on the man's room's day from the Rooms tab (never a weekday in this file) or,
 *   with no room, on the weekday his door opened. Nothing of the room is shown, nothing is mailed, his saved writing is never read.
 *   Install: paste over Code.gs, Ctrl+S, run setup once (tabs, columns, Config rows, RE14, Standard rows, the roadDaily trigger),
 *   then Deploy → Manage deployments → edit → New version → Deploy (the same address). Then roadLinesNow once by hand so the five
 *   entries on the shelf get their lines today instead of tomorrow morning.
 *
 * Build 3.1 — growth.js 3.1 only: the craftsman's bench (Exodus 31:3), drawn in the house style, opens the Your Growth page
 *   full width under the site's top bar with the band beneath it; served from the repo at pictures/craftsmans-bench.jpg.
 *   Nothing in the reader, the transcripts or the sheet changed.
 *
 * Build 3 — transcripts, and the three-part block on Your Growth.
 *   The reader now keeps, for every feed item, the transcript the show publishes (<podcast:transcript>), the audio
 *   address (the enclosure) and the length (Inbox columns M, N, O). After the 6:40 task has written the day's entries
 *   and set Config "transcribe asked", transcribeTick (every ten minutes, 6–9 AM Central) runs transcribeToday: for
 *   each entry written today it takes the first route that answers — the show's own transcript (free), YouTube
 *   captions read from the video page (free), Deepgram on the audio address (paid, survivors only, at most
 *   "deepgram max per day", key DEEPGRAM_KEY in Script Properties, switch Config "deepgram") — and writes the words
 *   as a Google Doc in the Transcripts folder of the Research Engine folder, one row on the Transcripts tab, and
 *   Entries column V. The 7:45 Claude task (the deepening pass) reads the doc and writes column U "in their words"
 *   (two verbatim lines of twenty-five words or fewer, each with its minute and a link that opens the thing there),
 *   rewrites the cut with real minutes, and marks column W. Rule RE1 is amended for it; RE13 keeps transcripts as
 *   working files for our team, never published or shown.
 *   Resolving: Podcast Index (keys PODCASTINDEX_KEY and PODCASTINDEX_SECRET in Script Properties, switch Config
 *   "podcast index api") finds feeds the Apple search misses and an episode's audio and transcript by feed; the
 *   YouTube Data API (key YOUTUBE_KEY, switch Config "youtube data api") resolves a channel from a bare name and
 *   gives a video's length. Both switches may stay off; nothing else needs them.
 *   The page: every piece carries the three-part block — In their words · What it means for our work (the construct,
 *   read against the text, already ours) · What to do with it (the move) — then What to listen for (the cut).
 *   A quote without meaning and application attached is never written (the pass's rule; the page shows the block
 *   only whole). "The cut" leaves the page: it reads "What to listen for".
 *   Install: paste over Code.gs, Ctrl+S, run setup once (it adds the tabs, columns, Config rows, Rules RE1/RE13, the
 *   Standard rows, the Transcripts folder and the ten-minute trigger), then Deploy → Manage deployments → edit →
 *   New version → Deploy (the same address). Keys go in Project Settings → Script Properties.
 *
 * The first tier of the research engine. Runs in the practice's Google account
 * (john@ancientpathcoaching.com) once each morning, reads the feeds named on the
 * Sources tab of the sheet "Ancient Path — Research Engine", and writes only what
 * is new into the Inbox tab. It never writes an entry and never touches the desk:
 * the daily Claude task reads the Inbox, discards against the Rules tab, writes
 * entries to the Standard, and puts the day's item on the Front Desk.
 *
 * Install (once): new Apps Script project in john@ → paste this file over Code.gs →
 * Ctrl+S → pick `setup` in the function box → Run → allow Sheets, Gmail and
 * "connect to an external service" → done. setup makes the morning trigger and
 * runs the reader once so the Inbox has its first rows the same day.
 *
 * Build 2 adds the web app that serves the Your Growth page (see the second half of this file).
 * Build 2.6.1: the prep window line on the page passes through prepLine_, so a weekday typed into the Config cell never reaches the page (the cell itself can stay as it is). Nothing else changed from 2.6.
 * Build 2.6 (set A): the three lines a facilitator sees are the text's own words, Wisdom · Understanding · Knowledge (Exodus 31:3); the sheet's keys in Entries column G stay and the page maps key to word; the Standard tab's lines and the words of any entry that names a room's day are brought to it by applyBuild26 (setup runs it once).
 * Build 2.6: the room's day comes only from the Front Desk sheet's Rooms tab (meets, first night) through the facilitator's room on People;
 * What these mean and the shelf lines open in place; every scroll lands below the site's top bar; typed text survives every open and close.
 * Everyday functions: readFeeds (the trigger's job), readNow (same, by hand),
 * resolveFeedsOnly (fill the feed column without reading), status (one line in the log).
 */

var RE_BUILD = 5;
var GROWTH_BUILD = '4.0.1';
var RE_FOLDER_ID = '1aXZES2LBmBpNVBfcq89kMnRY019BeBAQ'; // the Research Engine folder in the Ancient Path shared drive; Transcripts lives inside it
var RE_SHEET_ID = '1FGFqxrOHzwQbDMoywrnGgLGrNlTtlhfcWZjPG9ppmPo';
var RE_TZ = 'America/Chicago';
var RE_UA = 'Mozilla/5.0 (compatible; AncientPathResearchReader/' + RE_BUILD + '; +https://www.ancientpathcoaching.com)';
var RE_TIME_BUDGET_MS = 270000; // stop opening new feeds after 4.5 minutes; the rest wait for tomorrow

// Sources tab columns (1-based)
var SC = { id: 1, discipline: 2, voice: 3, kind: 4, where: 5, feed: 6, serves: 7, woman: 8, status: 9, note: 10, lastRead: 11, added: 12 };
// Inbox tab columns (M, N, O since build 3: the show's own transcript address, the audio address, the length in minutes)
var IC = { found: 1, sourceId: 2, voice: 3, discipline: 4, kind: 5, title: 6, link: 7, published: 8, blurb: 9, state: 10, reason: 11, entryId: 12, transcript: 13, audio: 14, minutes: 15 };
// Transcripts tab columns (build 3)
var TC = { entryId: 1, source: 2, link: 3, route: 4, state: 5, minutes: 6, words: 7, doc: 8, docId: 9, audio: 10, fetched: 11, note: 12, build: 13 };
var TC_HEAD = ['entry id', 'source', 'the thing (link)', 'route', 'state', 'minutes', 'words', 'transcript (doc)', 'doc id', 'audio address', 'fetched', 'note', 'build'];

/* ----------------------------------------------------------------- setup */

function setup() {
  try { ensureBuild5_(SpreadsheetApp.openById(RE_SHEET_ID)); } catch (x5) { Logger.log('build 5: ' + x5); }
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var cfg = readConfig_(ss);
  var hour = parseInt(cfg['script run hour'], 10);
  if (isNaN(hour) || hour < 0 || hour > 23) hour = 5;

  // one morning trigger, never two
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'readFeeds') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('readFeeds').timeBased().atHour(hour).everyDays(1).inTimezone(RE_TZ).create();

  // the ten-minute tick that runs the day's transcription once the 6:40 task has asked for it (build 3); one, never two
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'transcribeTick') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('transcribeTick').timeBased().everyMinutes(10).create();

  ensureLabel_(cfg['newsletter label'] || 'Research engine');
  answers_(ss);
  if (!cfg['claude model']) setConfig_(ss, 'claude model', 'claude-sonnet-4-5');
  if (!cfg['room signals sheet id']) { var sig = deskConfig_('room signals sheet id'); if (sig) setConfig_(ss, 'room signals sheet id', sig); }
  ensureBuild26_(ss);
  ensureBuild3_(ss);
  ensureBuild4_(ss);
  ensureBuild41_(ss);
  ensureBuild402_(ss);
  ensureBuild403_(ss);
  ensureBuild10_(ss);
  var roadHour = roadTrigger_(readConfig_(ss));
  log_(ss, 'setup', 'trigger set for ' + hour + ':00 Central daily; transcribeTick every ten minutes; roadDaily at ' + roadHour + ':00 Central; label "' + (cfg['newsletter label'] || 'Research engine') + '" ready');
  readFeeds();
}

function readNow() { readFeeds(); }

function status() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var cfg = readConfig_(ss);
  var inbox = ss.getSheetByName('Inbox');
  var n = Math.max(0, inbox.getLastRow() - 1);
  var fresh = 0;
  if (n) {
    inbox.getRange(2, IC.state, n, 1).getValues().forEach(function (r) { if (r[0] === 'new') fresh++; });
  }
  var line = 'build ' + RE_BUILD + ' · last reader run ' + (cfg['last reader run'] || 'never') + ' · ' + n + ' inbox rows, ' + fresh + ' new';
  log_(ss, 'status', line);
  return line;
}

/* ------------------------------------------------------------ the morning */

function readFeeds() {
  var started = Date.now();
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  try { ensureBuild26_(ss); } catch (x) { log_(ss, 'build 26', 'the Standard tab and the entries could not be brought to the new words', String(x).slice(0, 200)); }
  try { ensureBuild3_(ss); } catch (x3) { log_(ss, 'build 3', 'the build 3 tabs and rows could not be made', String(x3).slice(0, 200)); }
  var cfg = readConfig_(ss);
  var sources = ss.getSheetByName('Sources');
  var inbox = ss.getSheetByName('Inbox');

  var perRun = toInt_(cfg['fetches per run'], 40);
  var perSource = toInt_(cfg['items per source per run'], 5);
  var keepDays = toInt_(cfg['inbox keeps days'], 14);
  var lookDays = toInt_(cfg['first look days'], 14);
  var sinceMs = Date.now() - lookDays * 86400000;

  var known = knownLinks_(inbox);
  var added = [];
  var notes = [];

  // 1. the feeds
  var rows = sources.getLastRow() > 1 ? sources.getRange(2, 1, sources.getLastRow() - 1, SC.added).getValues() : [];
  var queue = [];
  rows.forEach(function (r, i) {
    var kind = String(r[SC.kind - 1]).trim().toLowerCase();
    var st = String(r[SC.status - 1]).trim().toLowerCase();
    if (st !== 'read' && st !== 'no feed yet') return;
    if (kind !== 'podcast' && kind !== 'youtube' && kind !== 'blog') return;
    queue.push({ row: i + 2, id: r[SC.id - 1], voice: r[SC.voice - 1], discipline: r[SC.discipline - 1], kind: kind,
      where: String(r[SC.where - 1]).trim(), feed: String(r[SC.feed - 1]).trim(), status: st, lastRead: r[SC.lastRead - 1] });
  });
  // oldest-read first so no feed starves when the budget runs out
  queue.sort(function (a, b) { return lastReadMs_(a.lastRead) - lastReadMs_(b.lastRead); });

  var opened = 0;
  for (var q = 0; q < queue.length; q++) {
    if (opened >= perRun || Date.now() - started > RE_TIME_BUDGET_MS) { notes.push('budget reached; ' + (queue.length - q) + ' feeds wait for tomorrow'); break; }
    var s = queue[q];
    try {
      if (!s.feed) {
        var found = resolveFeed_(s.kind, s.where);
        if (!found) {
          if (s.status !== 'no feed yet') {
            sources.getRange(s.row, SC.status).setValue('no feed yet');
            notes.push(s.id + ' ' + s.voice + ': no feed found from "' + s.where + '"');
          }
          continue;
        }
        s.feed = found;
        sources.getRange(s.row, SC.feed).setValue(found);
        if (s.status === 'no feed yet') sources.getRange(s.row, SC.status).setValue('read');
      }
      opened++;
      var items = fetchFeed_(s.feed);
      var took = 0;
      for (var k = 0; k < items.length && took < perSource; k++) {
        var it = items[k];
        if (!it.link || known[it.link]) continue;
        if (it.publishedMs && it.publishedMs < sinceMs) continue;
        known[it.link] = true;
        took++;
        added.push([stamp_(new Date()), s.id, s.voice, s.discipline, s.kind, it.title, it.link,
          it.publishedMs ? stamp_(new Date(it.publishedMs)) : '', it.blurb, 'new', '', '', it.transcript || '', it.audio || '', it.minutes || '']);
      }
      sources.getRange(s.row, SC.lastRead).setValue(stamp_(new Date()));
    } catch (e) {
      notes.push(s.id + ' ' + s.voice + ': ' + String(e && e.message || e).slice(0, 160));
    }
  }

  // 2. the newsletter label
  try {
    var mail = readLabel_(cfg['newsletter label'] || 'Research engine', known, sinceMs);
    mail.forEach(function (m) { added.push(m); });
  } catch (e2) {
    notes.push('mail: ' + String(e2 && e2.message || e2).slice(0, 160));
  }

  // 3. write what is new, newest first within the batch
  if (added.length) {
    inbox.getRange(inbox.getLastRow() + 1, 1, added.length, added[0].length).setValues(added);
  }

  // 4. expire what the task never took
  var expired = expireOld_(inbox, keepDays);

  // 5. the record
  setConfig_(ss, 'last reader run', stamp_(new Date()));
  var line = opened + ' feeds opened, ' + added.length + ' new rows, ' + expired + ' expired' + (notes.length ? ' · ' + notes.length + ' notes' : '');
  log_(ss, 'readFeeds', line, notes.join(' | '));
}

/* --------------------------------------------------------------- resolving */

/** Turns a name or an address into a feed address, or returns '' when it cannot. */
function resolveFeed_(kind, where) {
  if (!where) return '';
  if (kind === 'podcast') return resolvePodcast_(where);
  if (kind === 'youtube') return resolveYouTube_(where);
  if (kind === 'blog') return resolveBlog_(where);
  return '';
}

function resolvePodcast_(where) {
  if (/^https?:\/\//i.test(where) && !/apple\.com|podcasts\.google|spotify\.com/i.test(where)) return where; // already a feed
  var idMatch = where.match(/\/id(\d{6,})/);
  var url = idMatch
    ? 'https://itunes.apple.com/lookup?id=' + idMatch[1] + '&entity=podcast'
    : 'https://itunes.apple.com/search?media=podcast&entity=podcast&limit=8&term=' + encodeURIComponent(where);
  var res = fetch_(url);
  var data = null;
  try { data = res ? JSON.parse(res) : null; } catch (e) { data = null; }
  var list = (data && data.results) || [];
  if (!list.length) return idMatch ? indexFeedByItunesId_(idMatch[1]) : indexFeedByTerm_(where); // build 3: Podcast Index where Apple is silent
  var want = norm_(where);
  var best = null, bestScore = -1;
  list.forEach(function (r) {
    if (!r.feedUrl) return;
    var name = norm_(r.collectionName || '');
    var score = 0;
    if (name === want) score = 100;
    else if (name.indexOf(want) === 0) score = 80;
    else if (name.indexOf(want) >= 0 || want.indexOf(name) >= 0) score = 60;
    else score = overlap_(name, want);
    if (score > bestScore) { bestScore = score; best = r; }
  });
  if (best && bestScore >= 40) return best.feedUrl;
  return idMatch ? indexFeedByItunesId_(idMatch[1]) : indexFeedByTerm_(where);
}

function resolveYouTube_(where) {
  var url = where;
  if (/^UC[\w-]{20,}$/.test(where)) return 'https://www.youtube.com/feeds/videos.xml?channel_id=' + where;
  if (/^@/.test(where)) url = 'https://www.youtube.com/' + where;
  if (!/^https?:\/\//i.test(url)) { // a bare name: the YouTube Data API finds the channel when its key is set; else the daily task finds the address
    var cid = youtubeChannelByName_(where);
    return cid ? 'https://www.youtube.com/feeds/videos.xml?channel_id=' + cid : '';
  }
  var m = url.match(/\/channel\/(UC[\w-]{20,})/);
  if (m) return 'https://www.youtube.com/feeds/videos.xml?channel_id=' + m[1];
  var html = fetch_(url);
  if (!html) return '';
  m = html.match(/"channelId":"(UC[\w-]{20,})"/) || html.match(/itemprop="identifier"\s+content="(UC[\w-]{20,})"/) ||
      html.match(/<link rel="canonical" href="https:\/\/www\.youtube\.com\/channel\/(UC[\w-]{20,})"/) ||
      html.match(/"browseId":"(UC[\w-]{20,})"/);
  return m ? 'https://www.youtube.com/feeds/videos.xml?channel_id=' + m[1] : '';
}

function resolveBlog_(where) {
  if (!/^https?:\/\//i.test(where)) return '';
  var html = fetch_(where);
  if (html) {
    if (looksLikeFeed_(html)) return where;
    var links = html.match(/<link\b[^>]*>/gi) || [];
    for (var i = 0; i < links.length; i++) {
      var l = links[i];
      if (!/type=["'](application\/(rss|atom)\+xml)["']/i.test(l)) continue;
      if (/comments/i.test(l)) continue;
      var h = l.match(/href=["']([^"']+)["']/i);
      if (h) return absolute_(where, h[1]);
    }
  }
  var base = where.replace(/\/+$/, '');
  var guesses = ['/feed/', '/feed', '/rss', '/rss.xml', '/feed.xml', '/atom.xml', '/blog/feed/', '/blog/rss.xml', '/index.xml'];
  for (var g = 0; g < guesses.length; g++) {
    var body = fetch_(base + guesses[g]);
    if (body && looksLikeFeed_(body)) return base + guesses[g];
  }
  return '';
}

/* ----------------------------------------------------------------- reading */

/** Returns [{title, link, publishedMs, blurb}] newest first. Regex-based so a namespace quirk never stops the morning. */
function fetchFeed_(feedUrl) {
  var xml = fetch_(feedUrl);
  if (!xml) throw new Error('feed did not answer: ' + feedUrl);
  return parseFeed_(xml);
}

function parseFeed_(xml) {
  var items = [];
  var isAtom = /<feed[\s>]/i.test(xml) && !/<rss[\s>]/i.test(xml);
  var blocks = xml.match(isAtom ? /<entry\b[\s\S]*?<\/entry>/gi : /<item\b[\s\S]*?<\/item>/gi) || [];
  blocks.forEach(function (b) {
    var title = clean_(tag_(b, 'title'));
    var link = '';
    if (isAtom) {
      var alt = b.match(/<link\b[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i) || b.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']alternate["']/i) ||
                b.match(/<link\b[^>]*href=["']([^"']+)["']/i);
      link = alt ? alt[1] : '';
      var vid = tag_(b, 'yt:videoId');
      if (vid) link = 'https://www.youtube.com/watch?v=' + clean_(vid);
    } else {
      link = clean_(tag_(b, 'link'));
      if (!link) { var guid = clean_(tag_(b, 'guid')); if (/^https?:\/\//i.test(guid)) link = guid; }
      if (!link) { var enc = b.match(/<enclosure\b[^>]*url=["']([^"']+)["']/i); if (enc) link = enc[1]; }
    }
    var when = tag_(b, 'pubDate') || tag_(b, 'published') || tag_(b, 'dc:date') || tag_(b, 'updated');
    var ms = when ? Date.parse(clean_(when)) : NaN;
    var blurb = tag_(b, 'media:description') || tag_(b, 'itunes:summary') || tag_(b, 'description') || tag_(b, 'summary') || tag_(b, 'content') || tag_(b, 'content:encoded') || '';
    // build 3: the show's own transcript (<podcast:transcript>), the audio address (<enclosure>), the length
    var encl = b.match(/<enclosure\b[^>]*url=["']([^"']+)["']/i);
    var audio = encl ? unescapeXml_(encl[1]).trim() : '';
    var minutes = minutesFromDuration_(clean_(tag_(b, 'itunes:duration')));
    items.push({ title: title, link: unescapeXml_(link).trim(), publishedMs: isNaN(ms) ? 0 : ms, blurb: short_(clean_(blurb), 300),
      transcript: transcriptTags_(b), audio: audio, minutes: minutes });
  });
  items.sort(function (a, b) { return (b.publishedMs || 0) - (a.publishedMs || 0); });
  return items;
}

/** Newsletters that land under the label become Inbox rows; the link opens the mail. */
function readLabel_(labelName, known, sinceMs) {
  var label = GmailApp.getUserLabelByName(labelName);
  if (!label) return [];
  var out = [];
  var threads = label.getThreads(0, 30);
  threads.forEach(function (t) {
    t.getMessages().forEach(function (m) {
      if (m.getDate().getTime() < sinceMs) return;
      var link = 'https://mail.google.com/mail/u/0/#all/' + m.getId();
      if (known[link]) return;
      known[link] = true;
      var from = m.getFrom().replace(/<.*>/, '').replace(/"/g, '').trim();
      out.push([stamp_(new Date()), 'mail', from, 'Newsletter', 'newsletter', m.getSubject(), link,
        stamp_(m.getDate()), short_(m.getPlainBody().replace(/\s+/g, ' ').trim(), 300), 'new', '', '', '', '', '']);
    });
  });
  return out;
}

function expireOld_(inbox, keepDays) {
  var n = inbox.getLastRow() - 1;
  if (n < 1) return 0;
  var found = inbox.getRange(2, IC.found, n, 1).getValues();
  var state = inbox.getRange(2, IC.state, n, 1).getValues();
  var cutoff = Date.now() - keepDays * 86400000;
  var changed = 0;
  for (var i = 0; i < n; i++) {
    if (state[i][0] !== 'new') continue;
    var ms = Date.parse(String(found[i][0]));
    if (!isNaN(ms) && ms < cutoff) { state[i][0] = 'expired'; changed++; }
  }
  if (changed) inbox.getRange(2, IC.state, n, 1).setValues(state);
  return changed;
}

/* ----------------------------------------------------------------- helpers */

function fetch_(url) {
  try {
    var res = UrlFetchApp.fetch(url, { muteHttpExceptions: true, followRedirects: true, headers: { 'User-Agent': RE_UA, 'Accept': 'application/rss+xml, application/atom+xml, application/xml, text/xml, text/html, application/json;q=0.9, */*;q=0.8' } });
    if (res.getResponseCode() >= 400) return '';
    return res.getContentText();
  } catch (e) { return ''; }
}

function looksLikeFeed_(text) { return /^\s*(<\?xml[^>]*>\s*)?(<!--[\s\S]*?-->\s*)?<(rss|feed|rdf:RDF)\b/i.test(text); }

function tag_(block, name) {
  var re = new RegExp('<' + name.replace(':', '\\:') + '(?:\\s[^>]*)?>([\\s\\S]*?)<\\/' + name.replace(':', '\\:') + '>', 'i');
  var m = block.match(re);
  return m ? m[1] : '';
}

function clean_(s) {
  if (!s) return '';
  s = String(s).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  if (/&lt;\s*\/?\s*[a-z]/i.test(s)) s = unescapeXml_(s); // html that arrived escaped (Atom type="html")
  s = s.replace(/<br\s*\/?>/gi, ' ').replace(/<\/p>/gi, ' ').replace(/<[^>]+>/g, '');
  s = unescapeXml_(s);
  return s.replace(/\s+/g, ' ').trim();
}

function unescapeXml_(s) {
  return String(s || '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, function (_, d) { return String.fromCharCode(parseInt(d, 10)); });
}

function short_(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s; }

function absolute_(base, href) {
  if (/^https?:\/\//i.test(href)) return href;
  var m = base.match(/^(https?:\/\/[^\/]+)/i);
  if (!m) return href;
  if (href.charAt(0) === '/') return m[1] + href;
  return base.replace(/\/[^\/]*$/, '/') + href;
}

function norm_(s) { return String(s || '').toLowerCase().replace(/^the\s+/, '').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim(); }

function overlap_(a, b) {
  var wa = a.split(' ').filter(Boolean), wb = b.split(' ').filter(Boolean);
  if (!wa.length || !wb.length) return 0;
  var hit = 0;
  wb.forEach(function (w) { if (w.length > 2 && wa.indexOf(w) >= 0) hit++; });
  return Math.round(100 * hit / wb.length) * 0.5; // a partial word match tops out at 50
}

function knownLinks_(inbox) {
  var known = {};
  var n = inbox.getLastRow() - 1;
  if (n > 0) inbox.getRange(2, IC.link, n, 1).getValues().forEach(function (r) { if (r[0]) known[String(r[0]).trim()] = true; });
  return known;
}

function lastReadMs_(v) { if (!v) return 0; var ms = Date.parse(String(v)); return isNaN(ms) ? 0 : ms; }

function toInt_(v, d) { var n = parseInt(v, 10); return isNaN(n) ? d : n; }

function stamp_(d) { return Utilities.formatDate(d, RE_TZ, 'MMM d, yyyy h:mm a'); }

function readConfig_(ss) {
  var sh = ss.getSheetByName('Config');
  var cfg = {};
  // 9.1.5: a value Sheets has turned into a date reads as yyyy-MM-dd HH:mm (Central), never as a JavaScript date string
  if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues().forEach(function (r) { if (r[0]) cfg[String(r[0]).trim()] = r[1] instanceof Date ? Utilities.formatDate(r[1], RE_TZ, 'yyyy-MM-dd HH:mm') : String(r[1]).trim(); });
  return cfg;
}

function setConfig_(ss, key, value) {
  var sh = ss.getSheetByName('Config');
  var n = sh.getLastRow();
  var keys = n > 1 ? sh.getRange(2, 1, n - 1, 1).getValues() : [];
  for (var i = 0; i < keys.length; i++) if (String(keys[i][0]).trim() === key) { sh.getRange(i + 2, 2).setValue(value); return; }
  sh.appendRow([key, value, '']);
}

function ensureLabel_(name) {
  if (!GmailApp.getUserLabelByName(name)) GmailApp.createLabel(name);
}

function log_(ss, what, detail, more) {
  var sh = ss.getSheetByName('Log');
  sh.appendRow([stamp_(new Date()), 'reader', what, String(detail || '') + (more ? ' — ' + more : ''), RE_BUILD]);
}


/* ═════════════════════════ build 2.6 · the text's words, and no weekday in the record ═════════════════════════
 * Brings the Standard tab to Wisdom · Understanding · Knowledge and takes any weekday word out of the two entry
 * cells a page shows (the move and the place on the road), so no surface carries the room's day. Runs once behind a
 * flag (setup and the morning read call it); applyBuild26 runs it again by hand. Entries column G keeps its keys. */
function dayNames_() { var o = []; for (var i = 0; i < 7; i++) o.push(fmtDay_(addDays_('2026-01-04', i), 'EEEE')); return o; }
function scrubDay_(s) {
  var names = dayNames_().join('|');
  return String(s)
    .replace(new RegExp('^(?:' + names + '),\\s+(\\S)'), function (m, c) { return c.toUpperCase(); })
    .replace(new RegExp('\\b(any|every|each|this|next) (?:' + names + ')s?\\b', 'g'), function (m, w) { return w + ' week'; });
}
/** The prep window line. The Config cell is typed by hand, so a weekday word in it never reaches the page: a leading "Wednesday morning" reads "the morning of the room", any other weekday reads "your room's day". */
function prepLine_(v) {
  var t = String(v || '').trim(); if (!t) return '';
  var names = dayNames_().join('|');
  t = t.replace(new RegExp('^(?:' + names + ')s?\\s+(\\w+)', 'i'), function (m, p) { return 'the ' + p.toLowerCase() + ' of the room'; })
       .replace(new RegExp('\\b(?:' + names + ')s?\\b', 'gi'), 'your room\u2019s day');
  return 'Your prep window: ' + t;
}
var STANDARD_26 = {
  'already ours': ['Already ours', 'At most two pieces from our shelf that already carry the point, each named once with one clause on what it already carries, in our own words from the piece (lift its sentence); never a list, never an internal episode code; "Nothing close yet." when nothing close exists. Stated before any outside link. (Rule RE1, build 6.0.1)'],
  'question served': ['Question served', 'Wisdom, Understanding or Knowledge: the text’s own words (Exodus 31:3; the guide: Filled for the Work). The cell keeps its key: Show up creatively = Wisdom, Read = Understanding, Know = Knowledge; the page shows the word.'],
  'the move': ['The move', 'ONE move for the room only, as something the facilitator can do in the room: the question card in quotation marks, or one action; one or two sentences, 200 characters or fewer. Never two moves in the cell. A line a course should carry, or a piece worth writing, goes in Audience and form, never here. Never blank. Never a weekday: the room’s day lives on the Rooms tab of the Front Desk sheet. (build 2.6)'],
  'the three lines': ['The three lines, what they mean (build 2.6)', '“with wisdom and understanding and knowledge” (Exodus 31:3). Wisdom · chokmah: skill in the work, how you show up in the room (Exodus 31:3; 35:31; 1 Kings 7:14).  ·  Understanding · tevunah: telling things apart, reading a man and the moment (1 Kings 3:9; 1 Chronicles 12:32).  ·  Knowledge · da’at: the trade, the men, and the God who gives it (Proverbs 1:7).  ·  God does the filling; this page serves it. and with all craftsmanship: the room is melakhah, the work, where the three are proved. The three are one filling, not stages. The same words reach men later with the questions turned toward his own road.'],
  'the desk': ['The desk’s weekly question', 'How should I show up in the work, how do I read this man and this moment, and what do I know of the trade, the men and the God who gives it. At least one item a week serves Wisdom, which usually means a poem before the room.']
};
function applyBuild26() { PropertiesService.getScriptProperties().deleteProperty('b26'); ensureBuild26_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild26_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b26') === '1') return;
  var did = [];
  var st = ss.getSheetByName('Standard');
  if (st && st.getLastRow() > 0) {
    var a = st.getRange(1, 1, st.getLastRow(), 1).getValues();
    for (var i = 0; i < a.length; i++) {
      var k = String(a[i][0] || '').toLowerCase();
      Object.keys(STANDARD_26).forEach(function (key) { if (k.indexOf(key) === 0) { st.getRange(i + 1, 1, 1, 2).setValues([STANDARD_26[key]]); did.push(STANDARD_26[key][0]); } });
    }
  }
  var en = ss.getSheetByName('Entries'), fixed = 0;
  if (en && en.getLastRow() > 1) {
    [EC.move, EC.place].forEach(function (col) {
      var rng = en.getRange(2, col, en.getLastRow() - 1, 1), v = rng.getValues(), changed = false;
      v.forEach(function (r) { var t = scrubDay_(r[0]); if (t !== String(r[0])) { r[0] = t; changed = true; fixed++; } });
      if (changed) rng.setValues(v);
    });
  }
  props.setProperty('b26', '1');
  log_(ss, 'build 26', 'Standard tab rows brought to the new words: ' + did.length + '; entry cells with a weekday word fixed: ' + fixed);
}

/* ═════════════════════════════════ build 3 · transcripts ═════════════════════════════════
 * Three routes, in order, the first that answers wins: the show's own transcript named in its feed (free); YouTube
 * captions read from the video page (free, no key); Deepgram on the audio address (paid; survivors only; capped by
 * Config "deepgram max per day"; key DEEPGRAM_KEY). The words land as a Google Doc in the Transcripts folder, one row
 * on the Transcripts tab, and Entries column V. Transcripts are working files for our team (RE13): never published,
 * never shown on a page. Timing: the 6:40 task sets Config "transcribe asked" when its entries are written; the
 * ten-minute tick sees it and runs the day's transcription once; the 7:45 task reads the docs and writes the quotes. */

var CONFIG_3 = [
  ['transcripts from feeds', 'on', 'build 3: a transcript the show publishes in its own feed (<podcast:transcript>) is read first; free'],
  ['youtube captions', 'on', 'build 3: captions read from the video page for a YouTube item; free, no key'],
  ['deepgram', 'on', 'build 3: speech to text on the audio address when neither of the free routes answers; needs DEEPGRAM_KEY in Script Properties; survivors only; set off to stop spending'],
  ['deepgram max per day', '3', 'build 3: the most episodes Deepgram transcribes in one day'],
  ['deepgram model', 'nova-3', 'build 3: the Deepgram model'],
  ['transcribe asked', '', 'the 6:40 task writes now (YYYY-MM-DD HH:MM) when its entries are written; the ten-minute tick then transcribes the day'],
  ['transcribe done', '', 'the script writes this when the day\'s transcription has run'],
  ['transcribe window', '6-9', 'build 3: the hours (Central, 24-hour) the ten-minute tick may transcribe'],
  ['transcripts folder id', '', 'build 3: the Transcripts folder inside the Research Engine folder; the script makes it'],
  ['deepen task', '7:45 AM Central', 'build 3: the Claude task that reads the transcripts and writes In their words, the minute and the cut'],
  ['last deepen run', '', 'the 7:45 task writes this']
];
var RULES_3 = {
  'RE1': ['Link and distill. Never host anyone\'s content as ours. A claim, a cut and a move are written in our words. Since build 3 a piece may carry In their words: up to two verbatim lines of twenty-five words or fewer, each in quotation marks with its minute and a link that opens the thing there, and only with What it means for our work (the construct, read against the text, and what is already ours) and What to do with it (the move) attached. A quote without meaning and application attached is not written. Already ours: at most two pieces from our shelf, each named once with one clause on what it already carries, in our own words from the piece; never a list, never an internal episode code (like E-20261021-2); if nothing close exists, say "Nothing close yet."', 'every entry, every surface'],
  'RE13': ['Transcripts are working files for our team: Google Docs in the Transcripts folder, pointed at by the Transcripts tab and Entries column V. They are never published, never quoted beyond RE1, never shown on a page a facilitator or a man reads, and never kept past their use; a transcript of a paid thing is never fetched.', 'the Transcripts tab and folder']
};
var STANDARD_3 = {
  'the thing': ['The thing', 'The direct link: the episode, the talk, the book and chapter. Once the transcript is in, the link opens at the minute that matters (YouTube: &t=; audio: #t=). (build 3)', 'E'],
  'in their words': ['In their words', 'Up to two verbatim lines of twenty-five words or fewer, one per line, each as [mm:ss] “the words” — <link that opens the thing there>. Written by the 7:45 pass from the transcript only, never from show notes; checked against the transcript before it is written; never written without K, L and O filled (RE1).', 'U'],
  'transcript': ['Transcript', 'The route the words came by (feed transcript, youtube captions, deepgram, none), the word count and the Google Doc in the Transcripts folder; the script writes it; a team working file, never a surface (RE13).', 'V'],
  'deepened': ['Deepened', 'When the 7:45 pass finished the entry and which build; blank until then. The cut (N) then carries real minutes.', 'W']
};

/** Makes the build 3 tabs, columns, rows, folder and rules once, behind a flag; applyBuild3 runs it again by hand. */
function applyBuild3() { PropertiesService.getScriptProperties().deleteProperty('b3'); ensureBuild3_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild3_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b3') === '1') return;
  var did = [];
  // Inbox: three more columns
  var inbox = ss.getSheetByName('Inbox');
  if (inbox) { widen_(inbox, IC.minutes); var ih = inbox.getRange(1, IC.transcript, 1, 3).getValues()[0]; if (!ih[0]) { inbox.getRange(1, IC.transcript, 1, 3).setValues([['transcript (the show\'s own)', 'audio address', 'minutes']]); did.push('Inbox M–O'); } }
  // Entries: U in their words, V transcript, W deepened
  var en = ss.getSheetByName('Entries');
  if (en) { widen_(en, EC.deepened); var eh = en.getRange(1, EC.quotes, 1, 3).getValues()[0]; if (!eh[0]) { en.getRange(1, EC.quotes, 1, 3).setValues([['in their words', 'transcript', 'deepened']]); did.push('Entries U–W'); } }
  // Transcripts tab
  if (!ss.getSheetByName('Transcripts')) { var tr = ss.insertSheet('Transcripts'); tr.getRange(1, 1, 1, TC_HEAD.length).setValues([TC_HEAD]); tr.setFrozenRows(1); did.push('Transcripts tab'); }
  // Config rows (only the ones missing)
  var cfg = readConfig_(ss);
  CONFIG_3.forEach(function (r) { if (!(r[0] in cfg)) { ss.getSheetByName('Config').appendRow(r); did.push('Config ' + r[0]); } });
  // the Transcripts folder
  try {
    cfg = readConfig_(ss);
    if (!cfg['transcripts folder id']) { var f = transcriptsFolder_(ss); if (f) did.push('folder ' + f.getName()); }
  } catch (fx) { did.push('folder not made: ' + String(fx).slice(0, 80)); }
  // Rules RE1 amended, RE13 added
  var ru = ss.getSheetByName('Rules');
  if (ru) {
    var rv = ru.getRange(1, 1, Math.max(1, ru.getLastRow()), 1).getValues(), seen = {};
    for (var i = 0; i < rv.length; i++) { var k = String(rv[i][0] || '').trim(); if (RULES_3[k]) { ru.getRange(i + 1, 2, 1, 2).setValues([RULES_3[k]]); seen[k] = 1; did.push(k); } }
    Object.keys(RULES_3).forEach(function (k) { if (!seen[k]) { ru.appendRow([k, RULES_3[k][0], RULES_3[k][1]]); did.push(k + ' added'); } });
  }
  // Standard rows
  var st = ss.getSheetByName('Standard');
  if (st) {
    var sv = st.getRange(1, 1, Math.max(1, st.getLastRow()), 1).getValues(), have = {};
    for (var j = 0; j < sv.length; j++) { var kk = String(sv[j][0] || '').toLowerCase().trim(); Object.keys(STANDARD_3).forEach(function (key) { if (kk === key) { st.getRange(j + 1, 1, 1, 3).setValues([STANDARD_3[key]]); have[key] = 1; } }); }
    // the new rows go under "The move" so the field list reads in column order
    var at = -1; for (var m = 0; m < sv.length; m++) if (String(sv[m][0] || '').toLowerCase().indexOf('status') === 0) at = m + 1;
    ['in their words', 'transcript', 'deepened'].forEach(function (key) { if (!have[key]) { if (at > 0) { st.insertRowAfter(at); st.getRange(at + 1, 1, 1, 3).setValues([STANDARD_3[key]]); at++; } else st.appendRow(STANDARD_3[key]); did.push('Standard ' + key); } });
  }
  props.setProperty('b3', '1');
  log_(ss, 'build 3', 'made: ' + (did.join(', ') || 'nothing new'));
}
function widen_(sh, cols) { if (sh.getMaxColumns() < cols) sh.insertColumnsAfter(sh.getMaxColumns(), cols - sh.getMaxColumns()); }
function transcriptsFolder_(ss) {
  var cfg = readConfig_(ss);
  if (cfg['transcripts folder id']) { try { return DriveApp.getFolderById(cfg['transcripts folder id']); } catch (e) {} }
  var parent = DriveApp.getFolderById(RE_FOLDER_ID);
  var it = parent.getFoldersByName('Transcripts');
  var f = it.hasNext() ? it.next() : parent.createFolder('Transcripts');
  setConfig_(ss, 'transcripts folder id', f.getId());
  return f;
}

/* ---- what a feed item carries ---- */
function transcriptTags_(block) {
  var out = [];
  var tags = block.match(/<podcast:transcript\b[^>]*\/?>/gi) || [];
  tags.forEach(function (t) {
    var u = t.match(/\burl=["']([^"']+)["']/i), ty = t.match(/\btype=["']([^"']+)["']/i), lang = t.match(/\blanguage=["']([^"']+)["']/i);
    if (!u) return;
    if (lang && !/^en/i.test(lang[1])) return;
    out.push(unescapeXml_(u[1]).trim() + (ty ? ' ' + ty[1].trim() : ''));
  });
  return out.join('\n');
}
function minutesFromDuration_(d) {
  d = String(d || '').trim(); if (!d) return '';
  if (/^\d+$/.test(d)) return Math.round(Number(d) / 60) || '';
  var p = d.split(':').map(Number); if (p.some(isNaN)) return '';
  var s = p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p.length === 2 ? p[0] * 60 + p[1] : p[0];
  return Math.round(s / 60) || '';
}
function on_(cfg, key) { return /^(on|yes|true|1)$/i.test(String(cfg[key] || '').trim()); }
function prop_(name) { try { return String(PropertiesService.getScriptProperties().getProperty(name) || '').replace(/[\s"']/g, ''); } catch (e) { return ''; } }

/* ---- Podcast Index (keys PODCASTINDEX_KEY, PODCASTINDEX_SECRET; switch Config "podcast index api") ---- */
function piOn_() { var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID)); return on_(cfg, 'podcast index api') && prop_('PODCASTINDEX_KEY') && prop_('PODCASTINDEX_SECRET'); }
function piGet_(path) {
  if (!piOn_()) return null;
  var key = prop_('PODCASTINDEX_KEY'), secret = prop_('PODCASTINDEX_SECRET'), when = String(Math.floor(Date.now() / 1000));
  var auth = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_1, key + secret + when, Utilities.Charset.UTF_8).map(function (b) { return ('0' + ((b + 256) % 256).toString(16)).slice(-2); }).join('');
  try {
    var res = UrlFetchApp.fetch('https://api.podcastindex.org/api/1.0' + path, { muteHttpExceptions: true, headers: { 'User-Agent': RE_UA, 'X-Auth-Key': key, 'X-Auth-Date': when, 'Authorization': auth } });
    if (res.getResponseCode() !== 200) return null;
    return JSON.parse(res.getContentText());
  } catch (e) { return null; }
}
function indexFeedByTerm_(term) {
  var j = piGet_('/search/byterm?q=' + encodeURIComponent(term) + '&max=8'); var feeds = (j && j.feeds) || [];
  var want = norm_(term), best = '', bestScore = -1;
  feeds.forEach(function (f) { var n = norm_(f.title || ''); var s = n === want ? 100 : n.indexOf(want) === 0 ? 80 : (n.indexOf(want) >= 0 || want.indexOf(n) >= 0) ? 60 : overlap_(n, want); if (s > bestScore) { bestScore = s; best = f.url || ''; } });
  return bestScore >= 40 ? best : '';
}
function indexFeedByItunesId_(id) { var j = piGet_('/podcasts/byitunesid?id=' + encodeURIComponent(id)); return j && j.feed && j.feed.url ? j.feed.url : ''; }
/** An episode's audio and transcript by feed, matched on link or title. Null without the keys. */
function indexEpisode_(feedUrl, link, title) {
  if (!feedUrl) return null;
  var j = piGet_('/episodes/byfeedurl?url=' + encodeURIComponent(feedUrl) + '&max=40'); var items = (j && j.items) || [];
  var want = norm_(title), hit = null;
  items.forEach(function (it) { if (hit) return; if ((it.link && link && String(it.link).replace(/\/$/, '') === String(link).replace(/\/$/, '')) || (want && norm_(it.title || '') === want)) hit = it; });
  if (!hit) return null;
  var tr = [];
  if (hit.transcriptUrl) tr.push(hit.transcriptUrl);
  (hit.transcripts || []).forEach(function (t) { if (t && t.url) tr.push(t.url + (t.type ? ' ' + t.type : '')); });
  return { audio: hit.enclosureUrl || '', transcript: tr.join('\n'), minutes: hit.duration ? Math.round(hit.duration / 60) : '' };
}

/* ---- the YouTube Data API (key YOUTUBE_KEY; switch Config "youtube data api") ---- */
function ytKey_() { var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID)); return on_(cfg, 'youtube data api') ? prop_('YOUTUBE_KEY') : ''; }
function youtubeChannelByName_(name) {
  var key = ytKey_(); if (!key) return '';
  var res = fetch_('https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=3&q=' + encodeURIComponent(name) + '&key=' + key);
  try { var j = JSON.parse(res); var it = (j.items || [])[0]; return it && it.id && it.id.channelId ? it.id.channelId : ''; } catch (e) { return ''; }
}
function youtubeMinutes_(videoId) {
  var key = ytKey_(); if (!key || !videoId) return '';
  var res = fetch_('https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=' + encodeURIComponent(videoId) + '&key=' + key);
  try { var j = JSON.parse(res); var d = j.items && j.items[0] && j.items[0].contentDetails && j.items[0].contentDetails.duration; var m = d && d.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/); return m ? Math.round(((Number(m[1]) || 0) * 3600 + (Number(m[2]) || 0) * 60 + (Number(m[3]) || 0)) / 60) : ''; } catch (e) { return ''; }
}
function videoId_(link) { var m = String(link || '').match(/[?&]v=([\w-]{11})/) || String(link || '').match(/youtu\.be\/([\w-]{11})/) || String(link || '').match(/\/shorts\/([\w-]{11})/); return m ? m[1] : ''; }

/* ---- the day's transcription ---- */
/** Every ten minutes: inside the window, once the 6:40 task has asked and the day is not yet done, transcribe. */
function transcribeTick() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var cfg = readConfig_(ss);
  var hour = Number(Utilities.formatDate(new Date(), RE_TZ, 'H'));
  var win = String(cfg['transcribe window'] || '6-9').split('-').map(Number);
  if (hour < (win[0] || 6) || hour >= (win[1] || 9)) return;
  var t = today_();
  var asked = String(cfg['transcribe asked'] || ''), done = String(cfg['transcribe done'] || '');
  if (asked.indexOf(t) !== 0) { tickNote_(ss, t, hour, win, 'nothing asked for today (Config "transcribe asked" reads "' + asked + '"); the 6:40 task wrote no entries, or wrote the cell in a form the script could not read'); return; }
  if (done.indexOf(t) === 0) return;
  var lock = LockService.getScriptLock(); if (!lock.tryLock(5000)) return;
  try { transcribeToday(); } finally { lock.releaseLock(); }
}
/** 9.1.5: once a day, in the last hour of the window, the tick says on the Log why it transcribed nothing, so a silent morning shows. */
function tickNote_(ss, t, hour, win, why) {
  if (hour !== (win[1] || 9) - 1) return;
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('tick noted') === t) return;
  props.setProperty('tick noted', t);
  log_(ss, 'transcribe', 'the tick ran through its window and transcribed nothing', why);
}
/** By hand: transcribe now, whatever the Config cells say — every entry of the last ten days without a transcript, newest first, no daily cap (9.1.5). */
function transcribeNow() { transcribeToday(true); }
function transcribeToday(byHand) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  try { ensureBuild3_(ss); } catch (e0) {}
  var cfg = readConfig_(ss);
  var t = today_();
  var done = transcriptsDone_(ss);
  var back = byHand ? 10 : 2; // the tick looks back two days; a by-hand run catches up ten
  var todays = entries_(ss).filter(function (e) { return e.status !== 'retired' && !done[e.id] && (e.written === t || daysAgo_(e.written) <= back); });
  todays.sort(function (a, b) { return a.written < b.written ? 1 : a.written > b.written ? -1 : 0; }); // newest first, so today's entry is never behind a catch-up
  var notes = [], n = 0, paid = deepgramCountToday_(ss);
  var max = byHand ? Number.MAX_SAFE_INTEGER : toInt_(cfg['deepgram max per day'], 3); // the cap guards the tick; a by-hand run is a choice made
  for (var i = 0; i < todays.length; i++) {
    if (Date.now() - RE_START > 300000) { notes.push('time budget reached; ' + (todays.length - i) + ' wait: ' + (byHand ? 'run transcribeNow again' : 'the next tick')); break; }
    var e = todays[i];
    try {
      var r = transcribeEntry_(ss, cfg, e, paid < max);
      if (r.route === 'deepgram' && r.state === 'done') paid++;
      n++;
      notes.push(e.id + ': ' + r.route + ' · ' + r.state + (r.note ? ' · ' + r.note : ''));
    } catch (ex) { notes.push(e.id + ': failed · ' + String(ex && ex.message || ex).slice(0, 160)); }
  }
  setConfig_(ss, 'transcribe done', Utilities.formatDate(new Date(), RE_TZ, 'yyyy-MM-dd HH:mm') + (byHand ? ' (by hand)' : ''));
  log_(ss, 'transcribe', n + ' entries looked at, ' + todays.length + ' waiting at start', notes.join(' | '));
}
var RE_START = Date.now();
function transcriptsDone_(ss) {
  var sh = ss.getSheetByName('Transcripts'); var out = {};
  if (!sh || sh.getLastRow() < 2) return out;
  sh.getRange(2, 1, sh.getLastRow() - 1, TC.build).getValues().forEach(function (r) { var st = String(r[TC.state - 1]); if (r[TC.entryId - 1] && (st === 'done' || st === 'none')) out[String(r[TC.entryId - 1])] = st; });
  return out;
}
function deepgramCountToday_(ss) {
  var sh = ss.getSheetByName('Transcripts'); if (!sh || sh.getLastRow() < 2) return 0;
  var t = today_(), n = 0;
  sh.getRange(2, 1, sh.getLastRow() - 1, TC.build).getValues().forEach(function (r) { if (String(r[TC.route - 1]) === 'deepgram' && dayOf_(r[TC.fetched - 1]) === t) n++; });
  return n;
}
/** The Inbox row behind an entry (by link), for the transcript and audio addresses the reader kept. */
function inboxRowFor_(ss, link) {
  var sh = ss.getSheetByName('Inbox'); if (!sh || sh.getLastRow() < 2) return null;
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, IC.minutes).getValues();
  var want = String(link || '').trim().replace(/\/$/, '');
  for (var i = 0; i < data.length; i++) { if (String(data[i][IC.link - 1] || '').trim().replace(/\/$/, '') === want) return { sourceId: String(data[i][IC.sourceId - 1]), title: String(data[i][IC.title - 1]), transcript: String(data[i][IC.transcript - 1] || ''), audio: String(data[i][IC.audio - 1] || ''), minutes: data[i][IC.minutes - 1] }; }
  return null;
}
function feedOfSource_(ss, sourceId) {
  var sh = ss.getSheetByName('Sources'); if (!sh || sh.getLastRow() < 2 || !sourceId) return '';
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, SC.feed).getValues();
  for (var i = 0; i < data.length; i++) if (String(data[i][SC.id - 1]) === sourceId) return String(data[i][SC.feed - 1] || '').trim();
  return '';
}
/** The feed item behind a link, read again from the feed itself (for entries older than build 3's Inbox columns). */
function itemFromFeed_(feedUrl, link, title) {
  if (!feedUrl) return null;
  try {
    var items = fetchFeed_(feedUrl), want = String(link || '').replace(/\/$/, ''), wt = norm_(title);
    for (var i = 0; i < items.length; i++) { var it = items[i]; if ((it.link && it.link.replace(/\/$/, '') === want) || (wt && norm_(it.title) === wt)) return it; }
  } catch (e) {}
  return null;
}
function transcribeEntry_(ss, cfg, e, mayPay) {
  var tr = ss.getSheetByName('Transcripts');
  var ib = inboxRowFor_(ss, e.link) || {};
  var feedUrl = feedOfSource_(ss, ib.sourceId || '');
  var transcript = ib.transcript || '', audio = ib.audio || '', minutes = ib.minutes || '';
  if (!transcript && !audio && !videoId_(e.link)) {
    var it = itemFromFeed_(feedUrl, e.link, ib.title || e.claim);
    if (it) { transcript = it.transcript || ''; audio = it.audio || ''; minutes = it.minutes || minutes; }
    if (!transcript && !audio) { var pi = indexEpisode_(feedUrl, e.link, ib.title || ''); if (pi) { transcript = pi.transcript || ''; audio = pi.audio || ''; minutes = pi.minutes || minutes; } }
  }
  var out = { route: 'none', state: 'none', note: '', words: 0, minutes: minutes, audio: audio };
  var text = '';
  if (!text && transcript && on_(cfg, 'transcripts from feeds')) {
    var ft = fromFeedTranscript_(transcript); if (ft) { text = ft; out.route = 'feed transcript'; } else out.note += 'the show\'s transcript could not be read; ';
  }
  if (!text && videoId_(e.link) && on_(cfg, 'youtube captions')) {
    var yt = fromYouTube_(videoId_(e.link)); if (yt) { text = yt; out.route = 'youtube captions'; if (!out.minutes) out.minutes = youtubeMinutes_(videoId_(e.link)); } else out.note += 'no captions on the video page; ';
  }
  if (!text && audio && on_(cfg, 'deepgram')) {
    if (!prop_('DEEPGRAM_KEY')) out.note += 'deepgram: no DEEPGRAM_KEY; ';
    else if (!mayPay) out.note += 'deepgram: the day\'s cap is spent; ';
    else if (/\$|paid|member/i.test(String(e.cost))) out.note += 'deepgram: a paid thing is never fetched (RE13); ';
    else { var dg = fromDeepgram_(audio, cfg); if (dg) { text = dg; out.route = 'deepgram'; } else out.note += 'deepgram did not answer; '; }
  }
  if (!text && !transcript && !audio && !videoId_(e.link)) out.note += 'no transcript, audio or video address for this thing; ';
  if (text) {
    out.words = text.split(/\s+/).filter(function (w) { return /\w/.test(w); }).length;
    if (!out.minutes) { var last = text.match(/\[(\d+):(\d\d)(?::(\d\d))?\][^\[]*$/); if (last) out.minutes = last[3] !== undefined ? Number(last[1]) * 60 + Number(last[2]) : Number(last[1]); }
    var doc = writeTranscriptDoc_(ss, e, out, text);
    out.doc = doc.getUrl(); out.docId = doc.getId(); out.state = 'done';
  }
  var row = [e.id, e.source, e.link, out.route, out.state, out.minutes || '', out.words || '', out.doc || '', out.docId || '', audio || '', stamp_(new Date()), out.note.replace(/;\s*$/, ''), RE_BUILD];
  tr.appendRow(row);
  ss.getSheetByName('Entries').getRange(e.row, EC.transcript).setValue(out.state === 'done' ? out.route + ' · ' + out.words + ' words · ' + out.doc : 'none · ' + out.note.replace(/;\s*$/, ''));
  return out;
}
/** The Google Doc: a header, then one paragraph per stretch of about forty seconds, each opening with its minute. */
function writeTranscriptDoc_(ss, e, out, text) {
  var folder = transcriptsFolder_(ss);
  var title = 'Transcript · ' + e.id + ' · ' + short_(voiceOf_(e.source), 40) + ' · ' + short_(String(e.claim), 60);
  var doc = DocumentApp.create(title);
  var body = doc.getBody();
  body.appendParagraph(title).setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph('Entry ' + e.id + ' · ' + e.source);
  body.appendParagraph('The thing: ' + e.link);
  body.appendParagraph('Route: ' + out.route + ' · fetched ' + stamp_(new Date()) + (out.minutes ? ' · about ' + out.minutes + ' minutes' : '') + ' · ' + out.words + ' words');
  body.appendParagraph('A working file for our team (rule RE13): never published, never shown on a page. Each paragraph opens with its minute.');
  var parts = text.split(/\n(?=\[)/);
  for (var i = 0; i < parts.length; i++) { var p = parts[i].trim(); if (p) body.appendParagraph(p); }
  doc.saveAndClose();
  try { DriveApp.getFileById(doc.getId()).moveTo(folder); } catch (mv) { try { folder.addFile(DriveApp.getFileById(doc.getId())); } catch (mv2) {} }
  return doc;
}

/* ---- route 1: the show's own transcript ---- */
function fromFeedTranscript_(list) {
  var lines = String(list || '').split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
  // prefer the kinds that carry minutes
  lines.sort(function (a, b) { return rankT_(a) - rankT_(b); });
  for (var i = 0; i < lines.length; i++) {
    var parts = lines[i].split(/\s+/), url = parts[0], type = (parts[1] || '').toLowerCase();
    var body = fetch_(url); if (!body) continue;
    var text = parseTranscript_(body, type, url);
    if (text && text.split(/\s+/).length > 80) return text;
  }
  return '';
}
function rankT_(line) { var t = line.toLowerCase(); return /vtt/.test(t) ? 0 : /srt/.test(t) ? 1 : /json/.test(t) ? 2 : /html/.test(t) ? 4 : 3; }
function parseTranscript_(body, type, url) {
  var low = (type || '') + ' ' + String(url || '').toLowerCase();
  if (/vtt|srt/.test(low) || /-->\s*\d/.test(body.slice(0, 2000))) return chunkSegs_(parseCues_(body));
  if (/json/.test(low) || /^\s*[\[{]/.test(body)) { try { return chunkSegs_(parseJsonTranscript_(JSON.parse(body))); } catch (e) {} }
  if (/html/.test(low) || /<\/?(p|div|span|body)\b/i.test(body.slice(0, 2000))) return plainBlocks_(clean_(body));
  return plainBlocks_(body);
}
function parseCues_(s) {
  var segs = [], lines = String(s).replace(/\r/g, '').split('\n');
  for (var i = 0; i < lines.length; i++) {
    var m = lines[i].match(/(\d{1,2}:)?(\d{1,2}):(\d{2})[.,](\d{1,3})\s*-->/);
    if (!m) continue;
    var start = (m[1] ? Number(m[1].replace(':', '')) * 3600 : 0) + Number(m[2]) * 60 + Number(m[3]);
    var text = [];
    for (var j = i + 1; j < lines.length && lines[j].trim() !== ''; j++) text.push(lines[j].replace(/<[^>]+>/g, '').replace(/^[^:]{1,30}:\s(?=\S)/, '').trim());
    i = j;
    var tx = text.join(' ').replace(/\s+/g, ' ').trim();
    if (tx) segs.push({ start: start, text: tx });
  }
  return segs;
}
function parseJsonTranscript_(j) {
  var list = Array.isArray(j) ? j : (j.segments || j.results || j.items || []);
  var segs = [];
  list.forEach(function (x) { if (!x) return; var st = x.startTime !== undefined ? x.startTime : x.start !== undefined ? x.start : x.offset; var tx = x.body || x.text || x.content || ''; if (tx) segs.push({ start: Number(st) || 0, text: String(tx).replace(/\s+/g, ' ').trim() }); });
  return segs;
}
/** Groups segments into stretches of about forty seconds; each opens with [mm:ss]. Repeated rolling-caption lines are dropped. */
function chunkSegs_(segs) {
  if (!segs || !segs.length) return '';
  var out = [], cur = null, lastText = '';
  segs.forEach(function (s) {
    if (!s.text || s.text === lastText) return;
    if (lastText && s.text.indexOf(lastText) === 0) { if (cur) cur.text = cur.text.slice(0, cur.text.length - lastText.length).trim(); }
    lastText = s.text;
    if (!cur || s.start - cur.start >= 40 || cur.text.length > 700) { if (cur) out.push(cur); cur = { start: s.start, text: '' }; }
    cur.text = (cur.text + ' ' + s.text).trim();
  });
  if (cur) out.push(cur);
  return out.map(function (c) { return '[' + mmss_(c.start) + '] ' + c.text; }).join('\n');
}
function mmss_(sec) { sec = Math.max(0, Math.round(Number(sec) || 0)); var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60; return (h ? h + ':' + ('0' + m).slice(-2) : String(m)) + ':' + ('0' + s).slice(-2); }
function plainBlocks_(text) {
  var t = String(text || '').replace(/\r/g, '').replace(/[ \t]+/g, ' ').trim(); if (!t) return '';
  // a plain transcript with [mm:ss] or (mm:ss) stamps keeps them; without stamps the minute is unknown and every block says so
  if (/[\[(]\d{1,2}:\d{2}(?::\d{2})?[\])]/.test(t)) return t.replace(/\s*[\[(](\d{1,2}:\d{2}(?::\d{2})?)[\])]\s*/g, '\n[$1] ').replace(/^\n/, '');
  var paras = t.split(/\n\s*\n|\n/).map(function (p) { return p.trim(); }).filter(Boolean);
  return paras.map(function (p) { return '[no minute] ' + p; }).join('\n');
}

/* ---- route 2: YouTube captions, from the video page ---- */
function fromYouTube_(id) {
  var html = fetch_('https://www.youtube.com/watch?v=' + id + '&hl=en&bpctr=9999999999&has_verified=1');
  if (!html) return '';
  var m = html.match(/"captionTracks":(\[[^\]]*\])/);
  if (!m) return '';
  var tracks; try { tracks = JSON.parse(m[1]); } catch (e) { return ''; }
  var pick = null;
  tracks.forEach(function (t) { var en = /^en/i.test(t.languageCode || ''); if (!en) return; if (!pick || (pick.kind === 'asr' && t.kind !== 'asr')) pick = t; });
  if (!pick) pick = tracks[0];
  if (!pick || !pick.baseUrl) return '';
  var base = String(pick.baseUrl).replace(/\\u0026/g, '&');
  var j3 = fetch_(base + (base.indexOf('fmt=') >= 0 ? '' : '&fmt=json3'));
  var segs = [];
  try {
    var j = JSON.parse(j3);
    (j.events || []).forEach(function (ev) { if (!ev.segs) return; var tx = ev.segs.map(function (s) { return s.utf8 || ''; }).join('').replace(/\s+/g, ' ').trim(); if (tx && tx !== '\n') segs.push({ start: (ev.tStartMs || 0) / 1000, text: tx }); });
  } catch (e) {
    var xml = /fmt=json3/.test(base) ? '' : j3; // the older xml shape
    var re = /<text start="([\d.]+)"[^>]*>([\s\S]*?)<\/text>/g, mm;
    while ((mm = re.exec(xml))) segs.push({ start: Number(mm[1]), text: clean_(mm[2]) });
  }
  return chunkSegs_(segs);
}

/* ---- route 3: Deepgram on the audio address (survivors only) ---- */
function fromDeepgram_(audio, cfg) {
  var key = prop_('DEEPGRAM_KEY'); if (!key) return '';
  var model = String(cfg['deepgram model'] || 'nova-3');
  try {
    var res = UrlFetchApp.fetch('https://api.deepgram.com/v1/listen?model=' + encodeURIComponent(model) + '&smart_format=true&paragraphs=true&punctuate=true', {
      method: 'post', contentType: 'application/json', muteHttpExceptions: true, headers: { 'Authorization': 'Token ' + key }, payload: JSON.stringify({ url: audio }) });
    if (res.getResponseCode() !== 200) { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'deepgram', 'answered ' + res.getResponseCode(), String(res.getContentText() || '').slice(0, 200)); return ''; }
    var j = JSON.parse(res.getContentText());
    var alt = j.results && j.results.channels && j.results.channels[0] && j.results.channels[0].alternatives && j.results.channels[0].alternatives[0];
    if (!alt) return '';
    var segs = [];
    if (alt.paragraphs && alt.paragraphs.paragraphs) alt.paragraphs.paragraphs.forEach(function (p) { (p.sentences || []).forEach(function (s) { segs.push({ start: s.start, text: s.text }); }); });
    else if (alt.words) { var cur = null; alt.words.forEach(function (w) { if (!cur || w.start - cur.start > 12) { if (cur) segs.push(cur); cur = { start: w.start, text: '' }; } cur.text = (cur.text + ' ' + (w.punctuated_word || w.word)).trim(); }); if (cur) segs.push(cur); }
    return chunkSegs_(segs);
  } catch (e) { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'deepgram', 'fetch failed', String(e && e.message || e).slice(0, 200)); return ''; }
}

/* ═══════════════════════════════ build 2 · Your Growth, the page ═══════════════════════════════
 * The /your-growth page on ancientpathcoaching.com is a two-line loader: <div id="apGrowth"></div>
 * and this script's tag (?file=growth.js). Every call from the page is a POST with a JSON body
 * { action, key, ... } and gets JSON back { ok, ... }. Who may open it is the Front Desk sheet's
 * People tab; proof is the desk key the browser already keeps (the same code by email the desk
 * sends). This script never issues keys; it reads the desk's hidden Keys tab to recognize one.
 *
 * Install for build 2: paste over Code.gs, Ctrl+S, run setup once more (it adds the Answers tab and
 * two Config rows), then Deploy → New deployment → Web app, Execute as Me, Who has access: Anyone →
 * copy the web app address into the loader on /your-growth. Optional: Script Properties → CLAUDE_KEY
 * for the ask box; without it the box answers from the shelf alone.
 */

var DESK_WEB_DEFAULT = 'https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec';
// Entries tab columns (1-based)
var EC = { id: 1, written: 2, source: 3, kind: 4, link: 5, claim: 6, question: 7, construct: 8, place: 9, audience: 10, text: 11, ours: 12, cost: 13, cut: 14, move: 15, status: 16, relBy: 17, relOn: 18, desk: 19, build: 20, quotes: 21, transcript: 22, deepened: 23, keywords: 24, road: 25, todo: 26, question2: 27, week: 28, act: 29 };

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.file === 'growth.js') return ContentService.createTextOutput(GROWTH_JS).setMimeType(ContentService.MimeType.JAVASCRIPT);
  if (p.file === 'row.js') return ContentService.createTextOutput(rowJs_()).setMimeType(ContentService.MimeType.JAVASCRIPT);
  if (p.file === 'road.js') return ContentService.createTextOutput(ROAD_JS).setMimeType(ContentService.MimeType.JAVASCRIPT);
  if (p.w) return witnessPage_(p.w); // build 11.1: a witness's page, by his own token
  if (p.y) return witnessYesPage_(p.y); // build 11.1: Before You Say Yes
  if (p.d) return witnessDonePage_(p.d); // build 11.1: the one-tap "I did it today"
  try { ensureBuild12_(SpreadsheetApp.openById(RE_SHEET_ID)); } catch (xb) {}
  return jsonOut_({ ok: true, service: 'Ancient Path — Research reader', build: RE_BUILD, script: SCRIPT_BUILD, growth: GROWTH_BUILD, road: ROAD_BUILD });
}

function doPost(e) {
  var body = {};
  try { body = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (x) { body = {}; }
  return jsonOut_(growthCall_(body));
}

function jsonOut_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function growthCall_(b) {
  try {
    var action = String(b.action || '');
    if (action === 'ping') { try { ensureBuild12_(SpreadsheetApp.openById(RE_SHEET_ID)); } catch (xb) {} var pk = claudeKey_(); return { ok: true, build: RE_BUILD, script: SCRIPT_BUILD, growth: GROWTH_BUILD, road: ROAD_BUILD, keySet: !!pk, keyKind: pk ? pk.split('-').slice(0, 3).join('-') : '' }; }
    if (action.indexOf('road') === 0) return roadCall_(b);
    var who = teamRoom_(whoIs_(b.key, b.site)); // 4.0.3: the key opens only for the person the site shows
    if (action === 'growth') return growthFor_(who);
    if (action === 'new') return { ok: true, fresh: freshFor_(who) };
    if (action === 'mark') return markEntry_(who, b);
    if (action === 'thursday') return thursday_(who, b);
    if (action === 'ask') return askShelf_(who, b);
    if (action === 'growth_answer') return growthAnswer_(who, b);
    if (action === 'release') return release_(who);
    if (action === 'growth_ui') { var uiKey = String(b.panel || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40); if (uiKey.indexOf('g-') !== 0) throw { code: 'ui' }; roadRow_(SpreadsheetApp.openById(RE_SHEET_ID), String(who.email || '').toLowerCase().trim(), uiKey, 'ui', b.state === 'shut' ? 'shut' : 'open', ''); return { ok: true }; }
    return { ok: false, error: 'unknown_action' };
  } catch (err) {
    if (err && err.code) return { ok: false, error: err.code };
    try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'web', 'failed', String(err && err.stack || err).slice(0, 500)); } catch (e2) {}
    return { ok: false, error: 'failed' };
  }
}

/* ---- who is asking: the desk's key, the desk's list ---- */
function deskSheet_() {
  var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID));
  var id = cfg['desk sheet id'];
  if (!id) throw { code: 'no_desk' };
  return SpreadsheetApp.openById(id);
}
function sha256_(s) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8).map(function (b) { return ('0' + ((b + 256) % 256).toString(16)).slice(-2); }).join('');
}
function headerIndex_(sh) {
  var H = {}; var row = sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0];
  row.forEach(function (v, i) { if (v !== '') H[String(v).trim().toLowerCase()] = i; });
  return H;
}
function people_() {
  var sh = deskSheet_().getSheetByName('People');
  if (!sh || sh.getLastRow() < 2) return [];
  var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
  return data.map(function (r) {
    return { email: String(r[H['email']] || '').toLowerCase().trim(), name: String(r[H['name']] || '').trim(), role: String(r[H['role']] || '').toLowerCase().trim(), room: String(r[H['room']] || '').trim() };
  }).filter(function (p) { return p.email && (p.role === 'admin' || p.role === 'facilitator'); });
}
/** 4.0.3: the person the site shows signed in must be the person the key is for; a page that sends no one is refused. */
function sitePerson_(site, email) {
  var s = String(site || '').toLowerCase().trim();
  if (!s) throw { code: 'no_site' };
  if (s !== String(email || '').toLowerCase().trim()) throw { code: 'not_you' };
}
function whoIs_(key, site) {
  var k = String(key || '');
  if (k.length < 32) throw { code: 'no_key' };
  var h = sha256_(k);
  var sh = deskSheet_().getSheetByName('Keys');
  if (!sh) throw { code: 'no_desk' };
  var H = headerIndex_(sh), data = sh.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][H['hash']] !== h) continue;
    var exp = data[i][H['expires']]; exp = exp instanceof Date ? exp : new Date(exp);
    if (exp < new Date()) throw { code: 'key_expired' };
    var email = String(data[i][H['email']] || '').toLowerCase().trim();
    var person = people_().filter(function (p) { return p.email === email; })[0];
    if (!person) throw { code: 'removed' };
    sitePerson_(site, email); // 4.0.3
    return person;
  }
  throw { code: 'bad_key' };
}

/* ---- the entries, read once ---- */
function entries_(ss) {
  var sh = ss.getSheetByName('Entries');
  if (!sh || sh.getLastRow() < 2) return [];
  var width = Math.min(EC.act, sh.getMaxColumns());
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, width).getValues();
  var out = [];
  data.forEach(function (r, i) {
    if (!r[EC.id - 1]) return;
    out.push({ row: i + 2, id: String(r[EC.id - 1]), written: dayOf_(r[EC.written - 1]), source: String(r[EC.source - 1]), kind: String(r[EC.kind - 1]), link: String(r[EC.link - 1]), claim: String(r[EC.claim - 1]),
      question: String(r[EC.question - 1]), construct: String(r[EC.construct - 1]), place: String(r[EC.place - 1]), audience: String(r[EC.audience - 1]), beside: String(r[EC.text - 1]), ours: String(r[EC.ours - 1]),
      cost: String(r[EC.cost - 1]), cut: String(r[EC.cut - 1]), move: String(r[EC.move - 1]), status: String(r[EC.status - 1]).toLowerCase(), desk: String(r[EC.desk - 1]),
      quotes: String(r[EC.quotes - 1] || ''), transcript: String(r[EC.transcript - 1] || ''), deepened: String(r[EC.deepened - 1] || ''),
      keywords: String(r[EC.keywords - 1] || ''), road: String(r[EC.road - 1] || ''), todo: String(r[EC.todo - 1] || ''), question2: String(r[EC.question2 - 1] || ''), week: String(r[EC.week - 1] || '').trim(), act: String(r[EC.act - 1] || '').trim() });
  });
  return out;
}
/** Column U, one quote per line: [mm:ss] “the words” — link. Only whole lines count; a line without words is dropped. */
function quotesOf_(cell) {
  var out = [];
  String(cell || '').split('\n').forEach(function (line) {
    var l = line.trim(); if (!l) return;
    var m = l.match(/^\[([^\]]+)\]\s*(.+?)\s*(?:[—–-]+\s*(https?:\/\/\S+))?$/);
    if (!m) return;
    var words = m[2].replace(/^[“"‘']+|[”"’']+$/g, '').trim();
    if (!words || words.split(/\s+/).length > 25) return;
    out.push({ minute: m[1].trim(), words: words, link: m[3] || '' });
  });
  return out.slice(0, 2);
}
function dayOf_(v) { if (v instanceof Date) return Utilities.formatDate(v, RE_TZ, 'yyyy-MM-dd'); var s = String(v || ''); var m = s.match(/\d{4}-\d{2}-\d{2}/); if (m) return m[0]; var ms = Date.parse(s); return isNaN(ms) ? '' : Utilities.formatDate(new Date(ms), RE_TZ, 'yyyy-MM-dd'); }
function today_() { return Utilities.formatDate(new Date(), RE_TZ, 'yyyy-MM-dd'); }
function daysAgo_(day) { if (!day) return 9999; return Math.round((Date.parse(today_()) - Date.parse(day)) / 864e5); }
function voiceOf_(source) { return String(source || '').split(/\s[·—-]\s|,\s*(?:episode|article|talk|event|newsletter|book)/i)[0].trim(); }
function minutesOf_(cost) { var m = String(cost || '').match(/(\d+)\s*min/i); return m ? Number(m[1]) : 0; }
function laneOf_(voice, lanes) {
  var v = voice.toLowerCase();
  for (var i = 0; i < lanes.length; i++) { if (v && lanes[i].voice && (lanes[i].voice.indexOf(v) >= 0 || v.indexOf(lanes[i].voice) >= 0)) return lanes[i].lane; }
  return 'Other';
}
function lanes_(ss) {
  var sh = ss.getSheetByName('Sources'); if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, SC.added).getValues().map(function (r) {
    var voice = String(r[SC.voice - 1]).toLowerCase().replace(/\(.*?\)/g, '').split(/[;,·]/)[0].trim();
    return { lane: shortLane_(String(r[SC.discipline - 1])), voice: voice };
  }).filter(function (x) { return x.voice; });
}
function shortLane_(d) {
  d = String(d || '');
  if (/narrative trauma/i.test(d)) return 'Trauma care';
  if (/shame/i.test(d)) return 'Shame and being known';
  if (/story work/i.test(d)) return 'Story work';
  if (/sexual/i.test(d)) return 'Recovery';
  if (/communication/i.test(d)) return 'Communication';
  if (/strengths/i.test(d)) return 'Assessments';
  if (/body language/i.test(d)) return 'Communication';
  if (/group/i.test(d)) return 'The group';
  if (/mindset/i.test(d)) return 'Mindset';
  if (/leadership/i.test(d)) return 'Leadership';
  if (/trains the art/i.test(d)) return 'What trains the art';
  if (/body/i.test(d)) return 'The body';
  if (/ipnb/i.test(d)) return 'IPNB';
  if (/transition/i.test(d)) return 'Transitions';
  if (/hebraic/i.test(d)) return 'Hebraic teaching';
  if (/service/i.test(d)) return 'The standard of service';
  return d || 'Other';
}
/** The three lines by their key in Entries column G (the keys stay; a cell that already holds the text's word counts the same). */
function lineKey_(q) { var t = String(q || '').toLowerCase(); return /^know/.test(t) ? 'Know' : /^(read|understand)/.test(t) ? 'Read' : 'Show up creatively'; }
function pieceOut_(e, lanes) {
  var voice = voiceOf_(e.source);
  // the three-part block: quotes ride only when meaning (beside, ours) and application (move) are there (RE1)
  var whole = !!(e.beside && e.move);
  var construct = /none in the registry/i.test(e.construct) ? '' : e.construct;
  return { id: e.id, voice: voice, kind: e.kind, act: actOf_(e), cost: e.cost, minutes: minutesOf_(e.cost), move: e.move, claim: e.claim, beside: e.beside, ours: e.ours, cut: e.cut, link: e.link, question: e.question, status: e.status,
    lane: laneOf_(voice.toLowerCase(), lanes), state: e.desk, isToday: e.desk.indexOf('yes · ' + today_()) === 0, openedDay: openedDay_(e.desk), written: e.written,
    construct: construct, source: e.source, weeks: e.week, q2: e.question2, quotes: whole ? quotesOf_(e.quotes) : [], wordsComing: !e.deepened && daysAgo_(e.written) <= 1 && !/^none/.test(e.transcript) };
}
function openedDay_(s) { var m = String(s || '').match(/opened (\d{4}-\d{2}-\d{2})/); if (!m) return ''; var d = new Date(m[1] + 'T12:00:00'); return Utilities.formatDate(d, RE_TZ, 'MMM d'); }

/* ---- the room's day lives on the Front Desk sheet's Rooms tab (meets, first night) and nowhere else ----
   The reader never writes a weekday as a word. A facilitator's room is the room named on his People row;
   its day is the weekday of its first night; its hour is read out of its "meets" cell; a cohort stops after its weeks. */
function roomWord_(s) { return String(s || '').toLowerCase().split(/\s+[—–-]\s+/)[0].replace(/\s+/g, ' ').trim(); }
function sameRoom_(a, b) {
  var la = String(a || '').toLowerCase().replace(/\s+/g, ' ').trim(), lb = String(b || '').toLowerCase().replace(/\s+/g, ' ').trim();
  if (!la || !lb) return false;
  return la === lb || la.indexOf(lb) >= 0 || lb.indexOf(la) >= 0 || roomWord_(la) === roomWord_(lb);
}
function isoDay_(v) {
  if (v instanceof Date) return isNaN(v) ? '' : Utilities.formatDate(v, RE_TZ, 'yyyy-MM-dd');
  var s = String(v || '').trim(); if (!s) return '';
  var m = s.match(/\d{4}-\d{2}-\d{2}/); if (m) return m[0];
  var ms = Date.parse(s.replace(/^[A-Za-z]+,?\s+(?=[A-Za-z]{3,}\s+\d)/, ''));
  return isNaN(ms) ? '' : Utilities.formatDate(new Date(ms), RE_TZ, 'yyyy-MM-dd');
}
function utcNoon_(iso) { return new Date(iso + 'T12:00:00Z'); }
function addDays_(iso, n) { var d = utcNoon_(iso); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
function fmtDay_(iso, pattern) { return Utilities.formatDate(utcNoon_(iso), 'GMT', pattern); }
/** The hour of a room, as the Rooms tab words it: "7:00 PM Central". Empty when the cell names no hour. */
function hourOf_(meets) {
  var m = String(meets || '').match(/(\d{1,2})(?::(\d{2}))?\s*([ap])\.?\s*m\b/i);
  if (!m) return '';
  var z = String(meets || '').match(/\b(Central|Eastern|Mountain|Pacific)\b/i);
  return m[1] + ':' + (m[2] || '00') + ' ' + m[3].toUpperCase() + 'M' + (z ? ' ' + z[1].charAt(0).toUpperCase() + z[1].slice(1).toLowerCase() : '');
}
/** The weekday number (0-6) a room keeps: its first night's; or, with no first night, the day its "meets" cell names. */
function roomWeekday_(r) {
  if (r.first) return utcNoon_(r.first).getUTCDay();
  var low = String(r.meets || '').toLowerCase();
  for (var i = 0; i < 7; i++) { if (low.indexOf(Utilities.formatDate(new Date(Date.UTC(2026, 0, 4 + i, 12)), 'GMT', 'EEEE').toLowerCase()) >= 0) return i; }
  return -1;
}
/** The row of the Rooms tab for this facilitator's room, or null when he has none. */
function roomRow_(who) {
  if (!who || !who.room) return null;
  var sh = deskSheet_().getSheetByName('Rooms');
  if (!sh || sh.getLastRow() < 2) return null;
  var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
  for (var i = 0; i < data.length; i++) {
    var name = String(data[i][H['room']] || '').trim();
    if (name && sameRoom_(name, who.room)) {
      var r = { room: name, kind: String(data[i][H['kind']] || 'cohort').toLowerCase(), course: String(data[i][H['course']] || '').trim(), meets: String(data[i][H['meets']] || ''), first: isoDay_(data[i][H['first night']]), weeks: Number(data[i][H['weeks']] || 0) || 0 };
      return roomWeekday_(r) < 0 ? null : r;
    }
  }
  return null;
}
function lastNightOf_(r) { return r.first && r.kind === 'cohort' && r.weeks > 0 ? addDays_(r.first, 7 * (r.weeks - 1)) : ''; }
function weekOf_(r, iso) { return r.first && r.weeks > 0 ? String(Math.round((utcNoon_(iso) - utcNoon_(r.first)) / (7 * 864e5)) + 1) : ''; }
/** The first night of this room on or after a day (yyyy-MM-dd); null once a cohort has met its last night. */
function nightOnOrAfter_(r, day) {
  var d = r.first && day < r.first ? r.first : day;
  d = addDays_(d, (roomWeekday_(r) - utcNoon_(d).getUTCDay() + 7) % 7);
  var last = lastNightOf_(r); if (last && d > last) return null;
  return { date: d, week: weekOf_(r, d) };
}
/** The latest night of this room on or before a day; null before its first night. */
function nightOnOrBefore_(r, day) {
  var d = addDays_(day, -((utcNoon_(day).getUTCDay() - roomWeekday_(r) + 7) % 7));
  if (r.first && d < r.first) return null;
  var last = lastNightOf_(r); if (last && d > last) d = last;
  return { date: d, week: weekOf_(r, d) };
}
/** This facilitator's next room, from the Rooms tab: { room, date, week, day, label }. Null when he has no room. */
function nextRoom_(who) {
  try {
    var r = roomRow_(who); if (!r) return null;
    var n = nightOnOrAfter_(r, today_()); if (!n) return null;
    var hr = hourOf_(r.meets), day = fmtDay_(n.date, 'EEEE, MMM d');
    return { room: r.room, date: n.date, week: n.week, day: day, label: day + (hr ? ', ' + hr : '') };
  } catch (e) { return null; }
}
/** His most recent room night (today counts), for the signals row. */
function lastRoom_(who) {
  try {
    var r = roomRow_(who); if (!r) return null;
    var n = nightOnOrBefore_(r, today_()); if (!n) return null;
    return { date: n.date, week: n.week, day: fmtDay_(n.date, 'MMM d, yyyy') };
  } catch (e) { return null; }
}

/* ---- what the room carried: Room Signals, last three weeks ---- */
function carried_(who) {
  try {
    var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID));
    var id = cfg['room signals sheet id'] || deskConfig_('room signals sheet id');
    if (!id) return null;
    var sh = SpreadsheetApp.openById(id).getSheetByName('Signals');
    if (!sh || sh.getLastRow() < 2) return null;
    var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
    var byConstruct = {}, weeksSeen = {};
    data.forEach(function (r) {
      var c = String(r[H['construct']] || '').trim(); var w = String(r[H['week']] || '').trim();
      if (!c) return;
      byConstruct[c] = byConstruct[c] || { weeks: {}, text: String(r[H['signal (the room\'s words, no names)']] || r[H['signal']] || '') };
      byConstruct[c].weeks[w] = 1; weeksSeen[w] = 1;
    });
    var best = null, bestN = 0;
    Object.keys(byConstruct).forEach(function (c) { var n = Object.keys(byConstruct[c].weeks).length; if (n > bestN) { bestN = n; best = c; } });
    if (!best) return null;
    return { construct: best, weeks: bestN, text: best + '.', answer: 'The engine is reading for it; the day\'s piece is chosen with this in view.' };
  } catch (e) { return null; }
}
function deskConfig_(key) {
  try {
    var sh = deskSheet_().getSheetByName('Config'); var rows = sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues();
    for (var i = 0; i < rows.length; i++) if (String(rows[i][0]).trim() === key) return String(rows[i][1]).trim();
  } catch (e) {}
  return '';
}

/* ---- the page's data ---- */

/* ---- the row's question: is today's piece still unread? ---- */
function freshFor_(who) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var t = today_();
  var hit = entries_(ss).filter(function (e) { return e.status !== 'retired' && e.desk.indexOf('yes · ' + t) === 0; })[0];
  return !!hit && !/opened|bring|notforme|used/.test(hit.desk);
}

/* ---- the buttons ---- */
function findEntry_(ss, id) { var e = entries_(ss).filter(function (x) { return x.id === String(id || ''); })[0]; if (!e) throw { code: 'no_entry' }; return e; }
function setDesk_(ss, e, add) {
  var cur = e.desk || ''; if (cur.indexOf(add) >= 0) return cur;
  var next = cur ? cur + ' · ' + add : add;
  ss.getSheetByName('Entries').getRange(e.row, EC.desk).setValue(next);
  return next;
}
function answers_(ss) {
  var sh = ss.getSheetByName('Answers');
  if (!sh) { sh = ss.insertSheet('Answers'); sh.getRange(1, 1, 1, 8).setValues([['when', 'who', 'entry id', 'action', 'text', 'more', 'room', 'build']]); sh.setFrozenRows(1); }
  return sh;
}
function markEntry_(who, b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var e = findEntry_(ss, b.id);
  var what = String(b.what || '');
  var out = { ok: true };
  if (what === 'open') setDesk_(ss, e, 'opened ' + today_());
  else if (what === 'bring') { setDesk_(ss, e, 'bring ' + today_()); var nr = nextRoom_(who); out.nextRoom = nr ? nr.label : ''; bringCard_(who, e, nr); }
  else if (what === 'notforme') setDesk_(ss, e, 'notforme ' + today_());
  else if (what === 'offended') { // 4.0.3: the fourth mark; his why is read by a person and never reaches another man
    var why = String(b.text || '').replace(/\s+/g, ' ').trim().slice(0, 1500);
    if (!why) throw { code: 'empty' };
    setDesk_(ss, e, 'offended ' + today_());
    answers_(ss).appendRow([stamp_(new Date()), who.email, e.id, what, why, 'read by a person; never shown to another man', who.room, RE_BUILD]);
    try { log_(ss, 'offended', e.id + ' · ' + who.email, why.slice(0, 200)); } catch (x) {}
    return out;
  }
  else throw { code: 'bad_mark' };
  answers_(ss).appendRow([stamp_(new Date()), who.email, e.id, what, '', '', who.room, RE_BUILD]);
  closeDoor_(e);
  return out;
}
/** The desk card was the door; walking through it closes it. */
function closeDoor_(e) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      var key = String(data[i][H['key']] || '');
      if (key.indexOf('research:') !== 0 || /^research:(bring|hold|team|voice)/.test(key)) continue;
      if (String(data[i][H['status']]).toLowerCase() !== 'open') continue;
      if (String(data[i][H['link']] || '') !== e.link) continue;
      sh.getRange(i + 1, H['status'] + 1).setValue('done'); sh.getRange(i + 1, H['done at'] + 1).setValue(new Date());
    }
  } catch (x) {}
}
/** Bring it to the room: one card on his lane for his next room, with the move on it; Done after the session. */
function bringCard_(who, e, nr) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getDataRange().getValues();
    var key = 'research:bring:' + (nr ? nr.date : today_()) + ':' + e.id;
    for (var i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) return;
    var row = []; row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = who.name || who.email; row[H['do this']] = 'Room: ' + e.move;
    row[H['for']] = 'For your room · from Your Growth'; row[H['because']] = e.claim + (e.beside ? ' Beside it: ' + e.beside : ''); row[H['link']] = e.link; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['done at']] = ''; row[H['rule']] = 'RE8';
    for (var c = 0; c < sh.getLastColumn(); c++) if (row[c] === undefined) row[c] = '';
    sh.appendRow(row);
  } catch (x) {}
}
function thursday_(who, b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var e = findEntry_(ss, b.id);
  var used = String(b.used || '') === 'yes';
  var carried = String(b.carried || '').trim().slice(0, 600), changed = String(b.changed || '').trim().slice(0, 600);
  setDesk_(ss, e, used ? 'used' : 'not used');
  answers_(ss).appendRow([stamp_(new Date()), who.email, e.id, 'thursday', (used ? 'used · ' : 'not used · ') + carried, changed, who.room, RE_BUILD]);
  try {
    var id = readConfig_(ss)['room signals sheet id'] || deskConfig_('room signals sheet id');
    if (id && who.room && carried) {
      var sh = SpreadsheetApp.openById(id).getSheetByName('Signals'); var H = headerIndex_(sh);
      var lr = lastRoom_(who) || { week: '', day: Utilities.formatDate(new Date(), RE_TZ, 'MMM d, yyyy') }; var row = [];
      row[H['cohort']] = who.room; row[H['week']] = lr.week; row[H['session']] = lr.day; row[H['section opened']] = '';
      row[H['signal (the room\'s words, no names)']] = carried; row[H['construct']] = e.construct && !/none in the registry/i.test(e.construct) ? e.construct : ''; row[H['kind']] = 'facilitator, Thursday answer';
      row[H['speaks to it (our shelf)']] = e.move; row[H['what the facilitator did with it']] = (used ? 'Brought it. ' : 'Did not use it. ') + changed; row[H['course move it suggests']] = ''; row[H['source page']] = 'Your Growth'; row[H['coded']] = '';
      for (var c = 0; c < sh.getLastColumn(); c++) if (row[c] === undefined) row[c] = '';
      sh.appendRow(row);
    }
  } catch (x) { log_(ss, 'web', 'thursday: signals row not written', String(x).slice(0, 200)); }
  return { ok: true };
}

/* ---- the ask box: our shelf first, then Claude's wider reading, marked ---- */
function claudeKey_() { try { return String(PropertiesService.getScriptProperties().getProperty('CLAUDE_KEY') || '').replace(/[\s"']/g, ''); } catch (e) { return ''; } }

/* ---- John's release, one button ---- */
function release_(who) {
  if (who.role !== 'admin') throw { code: 'not_admin' };
  var ss = SpreadsheetApp.openById(RE_SHEET_ID); var sh = ss.getSheetByName('Entries');
  var n = 0;
  entries_(ss).forEach(function (e) { if (e.status === 'candidate') { sh.getRange(e.row, EC.status, 1, 3).setValues([['released', who.name || who.email, stamp_(new Date())]]); n++; } });
  log_(ss, 'web', 'release', n + ' released by ' + who.email);
  // 4.0.2: every released entry still without the man's lines gets them now (no cap; the four-minute budget guards); the Log names any left
  try {
    roadWriteLines_(ss, readConfig_(ss), 50);
    var left = entries_(ss).filter(function (e) { return e.status === 'released' && !(e.road && e.todo && e.question2); }).map(function (e) { return e.id; });
    if (left.length) log_(ss, 'road', 'released without the man\'s lines (the morning run retries)', left.join(', '));
  } catch (x) { log_(ss, 'road', 'lines at release failed', String(x).slice(0, 160)); }
  return { ok: true, released: n };
}


/* ═══════════════════════════════ growth.js build 3.1 (served at ?file=growth.js) ═══════════════════════════════ */
var GROWTH_JS = "/* AP-GROWTH growth.js build 4.0.1 \\u2014 Your Growth, the facilitator's room, served by the Research reader script (ResearchReader.gs build 12, ?file=growth.js).\n   4.0 (Nov 2, 2026, Research reader build 12; built to the ruled mockup v8.5, https://claude.ai/artifact/DRFs8n4ZCVisfvEhhiLSYP; the mockup's words are the copy; built on the live script 11.1.2 read through the Google Drive connector).\n   The room: the dark band (eyebrow, view title, one line of context), the left menu on a computer (Your Rooms, Your Growth and its three views, Ask Our Team, Settings), the top bar and tabs on a phone, two columns on a computer with the side never longer than the main (AP-SHELL 1). Sheets go back with \"\\u2190 Back to <view>\".\n   This Week: Next Step (nothing chosen, this week's piece, or the morning after with \"What did the room do with it?\"), This Week's Piece, Room Signals, The Release List (our team only), What This Page Is For (first visit only); The Course in AP-CARD 1 at the side.\n   The Shelf: Ask About Your Room (Claude picks one piece and one question; otherwise the best-matching piece by its own words), Everything We've Kept (search and \"Week N only\"), Who We Read (every voice on the Sources tab, by lane), Coming Up.\n   Your Craft: What You've Brought, What You Set Aside, Name a Voice, Voices and Lanes with \"Less of this\" on each lane.\n   Every new answer is saved as an Answers row in the record's shape (when, who, entry id, kind, text, answer, room, build): kinds after, less, voice, setaside, team, notice.\n   Moves to our own platform as it is: the whole page (it is served from the repo and loads from one line), and the Answers rows. Rebuilt there: nothing is planned; the sign-in gate (the site's person) and the Front Desk page check are the two parts that name the host site.\n   Counts taken before this card: the script parses; the stylesheet is assembled as the page assembles it; the browser accepted 212 rules (3.9: 177); the shared blocks (AP-PANEL, AP-SHAPES 1.1, AP-CARD 1) are carried byte for byte. */\n\n(function () {\nvar host = document.getElementById('apGrowth'); if (!host || host.getAttribute('data-growth')) return; host.setAttribute('data-growth', '4.0.1'); host.classList.add('ap-home');\nvar BUILD = '4.0.1';\n/* the stamped rule count of this script's stylesheet, taken before the file card (AP-SHIP 1); the page counts what the browser accepted against it */\nvar RULES = { growth: 212 };\nvar GROWTH_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split('?')[0] : ''; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : ''; })();\nvar DESK_URL = 'https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec';\nvar DESK_PAGE = 'https://www.ancientpathcoaching.com/front-desk';\nvar STORE = 'apDesk';\nvar PANEL_CSS = \".ap-home .ap-panel{--ap-g:28px;display:block;margin:0 0 18px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-top:3px solid var(--ap-bronze,#B8945F);border-radius:6px;box-sizing:border-box}.ap-home .ap-panel.ap-first{margin-top:44px}.ap-home h2.ap-panel-h{margin:0 !important;padding:0 !important;border:0 !important;font:inherit !important;background:none !important}.ap-home .ap-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;width:100%;box-sizing:border-box;margin:0;padding:20px var(--ap-g) 18px;background:none;border:0;border-radius:0;text-align:left;cursor:pointer;color:inherit}.ap-home .ap-panel-head:focus-visible{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:-4px}.ap-home .ap-panel-text{display:block;min-width:0;flex:1 1 auto}.ap-home .ap-panel-title{display:block;font:400 26px/1.2 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}.ap-home .ap-panel-note{display:block;font:400 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:6px 0 0}.ap-home .ap-panel-ctl{flex:none;font:600 14px/1 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:4px 0 3px;margin-top:6px;white-space:nowrap}.ap-home .ap-panel-body{padding:0 var(--ap-g) 26px}.ap-home .ap-panel.shut .ap-panel-body{display:none}.ap-home .ap-panel.shut .ap-panel-head{padding-bottom:20px}.ap-home button.ap-rev.ap-rev{display:inline-block;font:400 15px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;background:none;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:0 0 1px;margin:0;cursor:pointer;white-space:nowrap}.ap-home button.ap-rev.ap-rev:hover{color:var(--ap-navy,#1F2A44) !important;border-bottom-color:var(--ap-bronze,#B8945F)}@media (max-width:600px){.ap-home .ap-panel{--ap-g:18px;margin-left:-4px;margin-right:-4px}.ap-home .ap-panel.ap-first{margin-top:36px}.ap-home .ap-panel-title{font-size:24px !important}}\";\nvar CARD_CSS = \".ap-home .ap-courses{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin:0;padding:0}\\n.ap-home a.ap-ccard{display:flex;flex-direction:column;background:#fff;border:1px solid var(--ap-rule);border-radius:6px;overflow:hidden;text-decoration:none !important;color:inherit !important;transition:border-color .2s ease,box-shadow .2s ease}\\n.ap-home a.ap-ccard:hover{border-color:var(--ap-bronze);box-shadow:0 6px 18px rgba(31,42,68,.08)}\\n.ap-home a.ap-ccard:focus-visible{outline:2px solid var(--ap-bronze);outline-offset:2px}\\n.ap-home .ap-ccard-img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:var(--ap-rule)}\\n.ap-home .ap-ccard-body{display:flex;flex-direction:column;flex:1 1 auto;padding:18px 20px 20px}\\n.ap-home .ap-ccard-name{font:400 24px/1.2 var(--ap-serif) !important;color:var(--ap-navy) !important;margin:0}\\n.ap-home .ap-ccard-line{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-ink) !important;margin:8px 0 0}\\n.ap-home .ap-ccard-sub{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet) !important;margin:4px 0 0}\\n.ap-home .ap-ccard-way{align-self:flex-start;margin-top:auto;padding-top:18px}\\n.ap-home .ap-ccard-way span{font:600 15px/1.4 var(--ap-sans) !important;color:var(--ap-navy) !important;border-bottom:1px solid var(--ap-bronze);padding-bottom:1px}\\n.ap-home .ap-ccard-way span::after{content:\\\"\\\\2192\\\";padding-left:6px}\\n.ap-home a.ap-ccard:hover .ap-ccard-way span{color:var(--ap-bronze) !important}\\n.ap-home .ap-nw{display:inline-block}\\n@media (max-width:600px){.ap-home .ap-courses{grid-template-columns:1fr;gap:16px}.ap-home .ap-ccard-body{padding:16px 18px 18px}.ap-home .ap-ccard-name{font-size:22px !important}}\";\nvar PATHS = { desk: '/front-desk', growth: '/your-growth', page: '/start' };\n\nhost.innerHTML = '<style data-ap-sheet=\"growth\">' +\n\"@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');\" +\n/* AP-SHAPES 1.1: the three shapes of an ask (Find, Answer, Walk) and the weight rule; one source, shapes.css, carried by every room script */\n\".apg .ap-find{position:relative;max-width:34em;margin:0 0 18px}.apg .ap-find input{width:100%;box-sizing:border-box;font:400 16px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--ink,#2B3040) !important;background:#fff;border:0;border-bottom:1px solid var(--rule,#E2DCD1);border-radius:0;padding:8px 0 8px 28px;outline:none}.apg .ap-find input:focus{border-bottom-color:var(--navy,#1F2A44)}.apg .ap-find::before{content:\\\"\\\";position:absolute;left:2px;top:11px;width:12px;height:12px;border:1.5px solid var(--quiet,#6B7280);border-radius:50%}.apg .ap-find::after{content:\\\"\\\";position:absolute;left:13px;top:23px;width:7px;height:1.5px;background:var(--quiet,#6B7280);transform:rotate(45deg);transform-origin:left center}.apg .ap-find input::placeholder{color:var(--quiet,#6B7280)}.apg .ap-answer{margin:0 0 18px;max-width:40em}.apg .ap-answer .ap-answer-q{font:400 20px/1.4 var(--serif,'Source Serif 4',serif) !important;color:var(--navy,#1F2A44) !important;margin:0 0 10px;text-wrap:balance}.apg .ap-answer .ap-answer-lead{font:400 15px/1.5 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--quiet,#6B7280) !important;margin:-4px 0 10px}.apg .ap-answer input,.apg .ap-answer textarea{display:block;width:100%;box-sizing:border-box;font:400 17px/1.5 var(--serif,'Source Serif 4',serif) !important;color:var(--ink,#2B3040) !important;background:var(--paper,#FBF9F5);border:1px solid var(--rule,#E2DCD1);border-left:3px solid var(--bronze,#B8945F);border-radius:4px;padding:12px 14px;outline:none;resize:vertical}.apg .ap-answer input{min-height:0}.apg .ap-answer textarea{min-height:96px}.apg .ap-answer input:focus,.apg .ap-answer textarea:focus{border-color:var(--navy,#1F2A44);border-left-color:var(--bronze,#B8945F)}.apg .ap-answer input::placeholder,.apg .ap-answer textarea::placeholder{color:var(--quiet,#6B7280);font-style:italic}.apg .ap-answer .ap-answer-act{display:flex;align-items:center;gap:14px;margin:10px 0 0}.apg .ap-answer .ap-answer-state{font:400 14px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--quiet,#6B7280) !important;margin:8px 0 0;min-height:1.4em}.apg .ap-answer .ap-answer-state.kept{color:var(--bronze,#B8945F) !important}.apg .ap-answer .ap-answer-state.kept::before{content:\\\"\\\\2713\\\\00a0\\\"}.apg .ap-walk{display:inline-block;font:600 15px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--navy,#1F2A44) !important;background:none;border:0;border-bottom:1px solid var(--bronze,#B8945F);padding:0 0 1px;margin:0;cursor:pointer;text-decoration:none !important;text-align:left}.apg .ap-walk:hover{border-bottom-color:var(--navy,#1F2A44)}.apg .ap-walk .ap-walk-arrow{display:inline-block;margin-left:6px;color:var(--bronze,#B8945F)}.apg .ap-walk+.ap-walk{margin-left:18px}.apg .ap-walk.quiet{font-weight:400 !important;color:var(--quiet,#6B7280) !important;border-bottom-color:var(--rule,#E2DCD1)}.apg a.btn.p,.apg a.btn.g{background:none !important;color:var(--navy,#1F2A44) !important;border:0 !important;border-bottom:1px solid var(--bronze,#B8945F) !important;border-radius:0 !important;padding:0 0 1px !important;font:600 15px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;box-shadow:none !important;display:inline-block}.apg a.btn.p::after,.apg a.btn.g::after{content:\\\"\\\\00a0\\\\2192\\\";color:var(--bronze,#B8945F)}.apg a.btn.p+.ap-btn,.apg .ap-walk+a.btn.p,.apg a.btn.p+.ap-walk{margin-left:18px}@media (prefers-reduced-motion: reduce){.ap-walk,.ap-answer input,.ap-answer textarea{transition:none}}.apg .ap-find input[type=search]{min-height:0 !important;padding:8px 0 8px 28px !important;border:0 !important;border-bottom:1px solid var(--rule) !important;border-radius:0 !important;background:#fff !important}.apg .ap-find input[type=search]:focus{border-bottom-color:var(--navy) !important}.apg .ap-answer textarea,.apg .ap-answer input[type=text]{border:1px solid var(--rule) !important;border-left:3px solid var(--bronze) !important;border-radius:4px !important;background:var(--paper) !important;padding:12px 14px !important}.apg .ap-answer textarea:focus,.apg .ap-answer input[type=text]:focus{border-color:var(--navy) !important;border-left-color:var(--bronze) !important}.apg .ap-walk .ap-walk-arrow{margin-left:6px}.apg a.btn.p::after,.apg a.btn.g::after{content:\\\" \\\\2192\\\"}\" +\nPANEL_CSS + CARD_CSS +\n'.apg.ap-home{--paper:#FBF9F5;--sand:#F3EDE3;--card:#FFFFFF;--navy:#1F2A44;--ink:#2B3040;--quiet:#5E6573;--rule:#E2DCD1;--edge:#8C8170;--hover:rgba(184,148,95,.06);--bronze:#B8945F;--bronze-ink:#77592E;--band:#1F2A44;--band-fg:#F3EDE3;--band-quiet:#D8D0C4;--band-k:#D9B97F;--band-line:rgba(255,255,255,.14);--btn:#1F2A44;--btn-fg:#FBF9F5;--tap:44px;--ease:cubic-bezier(.2,.7,.2,1);--g:18px;--bar:84px;--serif:\\'Source Serif 4\\',Georgia,\\'Times New Roman\\',serif;--sans:\\'Source Sans 3\\',\\'Segoe UI\\',Arial,sans-serif;--ap-serif:var(--serif);--ap-sans:var(--sans);--ap-navy:var(--navy);--ap-ink:var(--ink);--ap-quiet:var(--quiet);--ap-rule:var(--rule);--ap-bronze:var(--bronze);--ap-paper:var(--paper);display:block;position:relative;background:var(--paper);color:var(--ink);font:400 16px/1.5 var(--sans);-webkit-font-smoothing:antialiased;text-align:left}' +\n'.apg.ap-home .ap-panel{background:var(--card)}' +\n'#apGrowth .apg *{box-sizing:border-box}' +\n'#apGrowth .apg p{margin:0;text-wrap:pretty}' +\n'#apGrowth .apg h1,#apGrowth .apg h2,#apGrowth .apg h3{text-wrap:balance}' +\n'#apGrowth .apg button{font:inherit;color:inherit}' +\n'#apGrowth .apg a{color:inherit}' +\n'#apGrowth .apg :focus-visible{outline:3px solid var(--navy);outline-offset:2px;border-radius:6px}' +\n'#apGrowth .apg .band :focus-visible{outline-color:#F3EDE3}' +\n'#apGrowth .apg .nw{display:inline-block}' +\n'#apGrowth .apg .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}' +\n'#apGrowth .apg .band{background:var(--band);color:var(--band-fg);width:var(--bleed-w,100%);margin-left:var(--bleed-l,0)}' +\n'#apGrowth .apg .topbar{padding:8px 16px 0}' +\n'#apGrowth .apg .kr{display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:44px}' +\n'#apGrowth .apg .k{font:600 12px var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--band-k)}' +\n'#apGrowth .apg .kr-r{display:flex;align-items:center;gap:14px}' +\n'#apGrowth .apg .tb{min-height:var(--tap);min-width:var(--tap);padding:0;background:none;border:0;color:var(--band-k);font:600 13px var(--sans);cursor:pointer;white-space:nowrap}' +\n'#apGrowth .apg .tabs{position:sticky;top:var(--bar);z-index:6;display:flex;background:var(--paper);border-bottom:1px solid var(--rule);overflow-x:auto;scrollbar-width:none}' +\n'#apGrowth .apg .tabs::-webkit-scrollbar{display:none}' +\n'#apGrowth .apg .tab{flex:1 0 auto;min-height:48px;background:none;border:0;border-bottom:3px solid transparent;color:var(--quiet);font:600 14px var(--sans);cursor:pointer;padding:0 10px;white-space:nowrap}' +\n'#apGrowth .apg .tab[aria-selected=\"true\"]{color:var(--navy);border-bottom-color:var(--bronze-ink)}' +\n'#apGrowth .apg .hero{padding:4px 18px 20px;border-bottom:1px solid var(--band-line);min-height:118px}' +\n'#apGrowth .apg .hero .hk{display:none}' +\n'#apGrowth .apg .hero h1{margin:0;font:400 28px/1.15 var(--serif);color:var(--band-fg);padding:0;border:0}' +\n'#apGrowth .apg .hero .where{margin-top:6px;font:400 16px/1.45 var(--serif);color:var(--band-quiet)}' +\n'#apGrowth .apg .hero h1:focus{outline:none}' +\n'#apGrowth .apg .pcnav{display:none}' +\n'#apGrowth .apg .mlab{margin:0 0 6px 15px;font:600 12px var(--sans);letter-spacing:.1em;text-transform:uppercase;color:var(--quiet)}' +\n'#apGrowth .apg .mi{display:block;width:100%;min-height:var(--tap);text-align:left;padding:9px 12px;margin:0 0 2px;border:0;border-left:3px solid transparent;border-radius:0 6px 6px 0;background:none;cursor:pointer;font:inherit;color:var(--ink);text-decoration:none}' +\n'#apGrowth .apg .mi b{display:block;font:600 16px/1.3 var(--sans);color:var(--navy)}' +\n'#apGrowth .apg .mi span{display:block;font-size:14px;line-height:1.35;color:var(--quiet)}' +\n'#apGrowth .apg .mi.here{cursor:default}' +\n'#apGrowth .apg .mgroup .mv{padding-left:24px}' +\n'#apGrowth .apg .mgroup{margin:0 0 10px;padding-bottom:2px}' +\n'#apGrowth .apg .mgroup .here{padding-bottom:4px}' +\n'#apGrowth .apg .mi[aria-current=\"page\"]{border-left-color:var(--bronze-ink);background:var(--sand)}' +\n'#apGrowth .apg .mfoot{margin-top:14px;padding-top:12px;border-top:1px solid var(--rule)}' +\n'#apGrowth .apg .view{padding:16px 16px 48px}' +\n'#apGrowth .apg .cols2{display:block}' +\n'#apGrowth .apg .side{margin-top:18px}' +\n'#apGrowth .apg .mainc .ap-panel:last-child,#apGrowth .apg .side .ap-panel:last-child{margin-bottom:0}' +\n'#apGrowth .apg .ap-panel-note .np{display:block;margin-left:-14px}' +\n'#apGrowth .apg .ap-panel-note .nn{display:inline-block;position:relative;padding-left:14px}' +\n'#apGrowth .apg .ap-panel-note .nn+.nn:before{content:\"\\\\00b7\";position:absolute;left:4px}' +\n'#apGrowth .apg .t{font:400 20px/1.35 var(--serif);color:var(--navy)}' +\n'#apGrowth .apg .t.claim{font-size:20px}' +\n'#apGrowth .apg .s{margin-top:8px;font-size:16px}' +\n'#apGrowth .apg .help{margin-top:8px;font-size:14px;color:var(--quiet)}' +\n'#apGrowth .apg .who{margin-top:6px;font-size:14px;color:var(--quiet)}' +\n'#apGrowth .apg .lk{margin:0;font:600 12px var(--sans);letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink)}' +\n'#apGrowth .apg .walk{display:inline-block;min-height:var(--tap);padding:11px 0;line-height:22px;background:none;border:0;font:600 16px var(--sans);color:var(--navy);cursor:pointer;text-decoration:none;text-align:left}' +\n'#apGrowth .apg .walk .u{border-bottom:1px solid var(--bronze);padding-bottom:1px}' +\n'#apGrowth .apg .walk .ar{color:var(--bronze-ink)}' +\n'#apGrowth .apg .walks{display:flex;flex-wrap:wrap;gap:0 22px;margin-top:6px}' +\n'#apGrowth .apg .rev{display:inline-flex;align-items:center;gap:4px;min-height:var(--tap);padding:0;background:none;border:0;font:400 14px var(--sans);color:var(--quiet);cursor:pointer}' +\n'#apGrowth .apg .rev span{border-bottom:1px solid var(--edge)}' +\n'#apGrowth .apg .revs{display:flex;flex-direction:column;align-items:flex-start;margin-top:4px}' +\n'#apGrowth .apg .revs .more{align-self:stretch}' +\n'#apGrowth .apg .more{display:none;padding-bottom:6px}' +\n'#apGrowth .apg .more.open{display:block}' +\n'#apGrowth .apg .btn{display:block;width:100%;min-height:48px;margin-top:14px;border:0;border-radius:6px;background:var(--btn);color:var(--btn-fg);font:600 16px var(--sans);cursor:pointer}' +\n'#apGrowth .apg .btn.line{background:none;border:1px solid var(--navy);color:var(--navy);width:auto;padding:0 22px;display:inline-block;min-height:var(--tap)}' +\n'#apGrowth .apg .btn[disabled]{opacity:.6;cursor:default}' +\n'#apGrowth .apg .kept{margin-top:10px;font-size:16px;color:var(--quiet)}' +\n'#apGrowth .apg .kept b{color:var(--navy);font-weight:600}' +\n'#apGrowth .apg .verse{font:italic 400 18px/1.5 var(--serif);color:var(--navy);margin-bottom:12px}' +\n'#apGrowth .apg .verse span{display:block;margin-top:2px;font:600 12px var(--sans);font-style:normal;color:var(--bronze-ink)}' +\n'#apGrowth .apg .ruled{margin-top:12px;padding:2px 0 2px 14px;border-left:3px solid var(--bronze)}' +\n'#apGrowth .apg .ruled p.lk{margin-bottom:2px}' +\n'#apGrowth .apg .ruled p{font-size:16px}' +\n'#apGrowth .apg .ruled p.serif{font:400 18px/1.45 var(--serif);color:var(--navy)}' +\n'#apGrowth .apg .q{margin:10px 0 0;padding:0 0 0 14px;border-left:3px solid var(--bronze);font:italic 400 18px/1.5 var(--serif);color:var(--navy)}' +\n'#apGrowth .apg .qm{display:inline-flex;align-items:center;min-height:var(--tap);margin:0 0 0 17px;font:600 14px var(--sans);color:var(--bronze-ink);text-decoration:none}' +\n'#apGrowth .apg .qm span{border-bottom:1px solid var(--bronze)}' +\n'#apGrowth .apg .part{margin-top:18px;padding-top:14px;border-top:1px solid var(--rule)}' +\n'#apGrowth .apg .pts{margin:6px 0 0;padding-left:20px;font-size:16px}' +\n'#apGrowth .apg .pts li{margin-top:6px}' +\n'#apGrowth .apg .choices{display:grid;gap:8px;margin-top:12px}' +\n'#apGrowth .apg .choices.two{grid-template-columns:1fr 1fr}' +\n'#apGrowth .apg .choice{min-height:var(--tap);padding:10px 12px;border:1px solid var(--edge);border-radius:6px;background:var(--card);font-size:16px;color:var(--ink);cursor:pointer;text-align:center;display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap}' +\n'#apGrowth .apg .choice.left{justify-content:flex-start;text-align:left}' +\n'#apGrowth .apg .choice[aria-pressed=\"true\"]{border:2px solid var(--bronze-ink);background:var(--sand);color:var(--navy);font-weight:600}' +\n'#apGrowth .apg .choice[aria-pressed=\"true\"]:before{content:\"\\\\2713\";color:var(--bronze-ink)}' +\n'#apGrowth .apg textarea,#apGrowth .apg input[type=text],#apGrowth .apg input[type=search],#apGrowth .apg input[type=tel],#apGrowth .apg input[type=email]{display:block;width:100%;margin-top:10px;padding:12px;border:1px solid var(--edge);border-radius:6px;background:var(--paper);font:16px/1.5 var(--sans);color:var(--ink)}' +\n'#apGrowth .apg textarea{min-height:84px;resize:vertical}' +\n'#apGrowth .apg textarea::placeholder,#apGrowth .apg input::placeholder{color:var(--quiet);opacity:1}' +\n'#apGrowth .apg .findrow{display:flex;gap:10px;align-items:stretch}' +\n'#apGrowth .apg .findrow .find{flex:1}' +\n'#apGrowth .apg .find{position:relative;display:flex;align-items:center;border:1px solid var(--edge);border-radius:6px;background:var(--paper)}' +\n'#apGrowth .apg .find input{border:0;background:none;flex:1 1 auto;min-width:0;padding-left:38px;margin-top:0}' +\n'#apGrowth .apg .find input:focus{outline:none}' +\n'#apGrowth .apg .find:focus-within{outline:2px solid var(--bronze);outline-offset:1px}' +\n'#apGrowth .apg .find svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:16px;height:16px;fill:none;stroke:var(--quiet);stroke-width:2}' +\n'#apGrowth .apg .find .fchip{flex:none;min-height:var(--tap);margin:0 4px 0 0;padding:0 12px;border:1px solid var(--edge);border-radius:6px;background:var(--card);font:600 14px var(--sans);color:var(--navy);cursor:pointer;white-space:nowrap}' +\n'#apGrowth .apg .find .fchip[aria-pressed=\"true\"]{border:2px solid var(--bronze-ink);background:var(--sand)}' +\n'#apGrowth .apg .find .fchip[aria-pressed=\"true\"]:before{content:\"\\\\2713\\\\00a0\";color:var(--bronze-ink)}' +\n'#apGrowth .apg a.btn.line{display:inline-flex}' +\n'#apGrowth .apg a.btn{display:flex;align-items:center;justify-content:center;text-decoration:none}' +\n'#apGrowth .apg .rows{margin-top:4px}' +\n'#apGrowth .apg .prow{display:grid;grid-template-columns:1fr;gap:4px 18px;align-items:center;width:100%;margin:0;padding:24px 0 26px;border:0;border-top:1px solid var(--rule);background:none;text-align:left;cursor:pointer;color:inherit;font:inherit}' +\n'#apGrowth .apg .rows .prow:first-child{border-top:0;padding-top:0}' +\n'#apGrowth .apg .ap-panel-body>.rows:first-child{margin-top:8px}' +\n'#apGrowth .apg .ap-panel-body>.rows:last-child .prow:last-child{padding-bottom:10px}' +\n'#apGrowth .apg .prow .lab{grid-column:1;font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +\n'#apGrowth .apg .prow .nm{grid-column:1;font:400 20px/1.35 var(--serif);color:var(--navy);max-width:62ch}' +\n'#apGrowth .apg .prow .st{grid-column:1;font-size:14px;color:var(--quiet)}' +\n'#apGrowth .apg .prow .go{grid-column:1;margin-top:6px;font:600 16px var(--sans);color:var(--navy);white-space:nowrap}' +\n'#apGrowth .apg .prow .go span{border-bottom:1px solid var(--bronze)}' +\n'#apGrowth .apg .st .nw{white-space:nowrap}' +\n'#apGrowth .apg .st .nv{white-space:normal}' +\n'#apGrowth .apg .mark{display:grid;gap:2px;padding:16px 0;border-top:1px solid var(--rule)}' +\n'#apGrowth .apg .mark:first-of-type{border-top:0;padding-top:4px}' +\n'#apGrowth .apg .mark .lab{font:600 12px var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--bronze-ink)}' +\n'#apGrowth .apg .mark p{font:400 18px/1.45 var(--serif);color:var(--ink);max-width:62ch}' +\n'#apGrowth .apg .lane{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:10px 0;border-top:1px solid var(--rule)}' +\n'#apGrowth .apg .lane:first-child{border-top:0}' +\n'#apGrowth .apg .lane b{display:block;font:600 14px var(--sans);color:var(--navy)}' +\n'#apGrowth .apg .lane span{display:block;font-size:14px;color:var(--quiet)}' +\n'#apGrowth .apg .lane .rev{min-height:var(--tap);font-size:14px;flex:none}' +\n'#apGrowth .apg .lane .rev[aria-pressed=\"true\"] span{border-bottom-color:var(--bronze-ink);color:var(--navy)}' +\n'#apGrowth .apg .vl{list-style:none;margin:2px 0 10px;padding:0}' +\n'#apGrowth .apg .vl li{padding:9px 0;border-top:1px solid var(--rule);font-size:16px;line-height:1.4;color:var(--ink)}' +\n'#apGrowth .apg .vl li:first-child{border-top:0}' +\n'#apGrowth .apg .vl li span{display:block;font-size:14px;color:var(--quiet)}' +\n'#apGrowth .apg .vlanes .rev{min-height:var(--tap)}' +\n'#apGrowth .apg .sheet{position:fixed;left:0;right:0;top:0;bottom:0;z-index:100000;display:flex;flex-direction:column;background:var(--paper);color:var(--ink);transform:translateY(100%);transition:transform .38s var(--ease);visibility:hidden;font:400 16px/1.5 var(--sans)}' +\n'#apGrowth .apg .sheet.open{transform:none;visibility:visible}' +\n'#apGrowth .apg .sheet:focus{outline:none}' +\n'#apGrowth .apg .dimmer{display:none}' +\n'#apGrowth .apg .ohead{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;border-bottom:1px solid var(--rule)}' +\n'#apGrowth .apg .ohead .lk{font-size:12px}' +\n'#apGrowth .apg .obody{flex:1;overflow-y:auto;padding:16px 20px 28px}' +\n'#apGrowth .apg .toast{position:fixed;left:16px;right:16px;bottom:18px;z-index:100001;background:var(--navy);color:var(--paper);border-radius:6px;padding:12px 14px;font-size:14px;opacity:0;transform:translateY(10px);transition:opacity .3s var(--ease),transform .3s var(--ease);pointer-events:none}' +\n'#apGrowth .apg .toast.in{opacity:1;transform:none}' +\n'#apGrowth .apg .gate{max-width:560px;margin:0 auto;padding:40px 18px 64px}' +\n'#apGrowth .apg .gate h2{font:400 28px/1.2 var(--serif);color:var(--navy);margin:0 0 12px}' +\n'#apGrowth .apg .gate .err{color:#9A3B2F;font-size:15px;margin-top:8px}' +\n'#apGrowth .apg .gate label{display:block;font-weight:600;margin:14px 0 4px}' +\n'#apGrowth .apg .gate .btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:6px}' +\n'#apGrowth .apg .gate .btn{width:auto;padding:0 22px}' +\n'#apGrowth .apg .gate .btn.q2{background:none;color:var(--quiet);font-weight:400}' +\n'#apGrowth .apg .flash{padding:24px 18px;font-size:16px}' +\n'#apGrowth .apg .pfoot{margin:10px 0 36px;padding:0 4px;font-size:13px;line-height:1.5;color:var(--quiet)}' +\n'@media (hover:hover){' +\n'#apGrowth .apg .prow:hover{background:var(--hover);box-shadow:0 0 0 0 transparent,-12px 0 0 var(--hover),12px 0 0 var(--hover)}' +\n'#apGrowth .apg .mi:not(.here):not([aria-current=\"page\"]):hover{background:var(--hover)}' +\n'#apGrowth .apg .walk:hover .u{border-bottom-color:var(--navy)}' +\n'#apGrowth .apg .choice:hover{border-color:var(--bronze)}' +\n'#apGrowth .apg .tab:hover{color:var(--navy)}' +\n'}' +\n'@media (min-width:900px){' +\n'#apGrowth .apg .topbar,#apGrowth .apg .tabs{display:none}' +\n'#apGrowth .apg .hero{padding:26px max(28px,calc((100% - 1180px)/2 + 28px)) 24px;min-height:136px}' +\n'#apGrowth .apg .hero .hk{display:block;margin-bottom:10px}' +\n'#apGrowth .apg .hero h1{font-size:34px}' +\n'#apGrowth .apg .hero .where{font-size:18px;max-width:780px}' +\n'#apGrowth .apg .pcwrap{display:grid;grid-template-columns:220px minmax(0,1fr);gap:32px;max-width:1180px;margin:0 auto;padding:28px 28px 56px;align-items:start;--g:28px}' +\n'#apGrowth .apg .pcnav{display:block;position:sticky;top:calc(var(--bar) + 20px)}' +\n'#apGrowth .apg .view{padding:0}' +\n'#apGrowth .apg .cols2{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:24px;align-items:start}' +\n'#apGrowth .apg .side{margin-top:0}' +\n'#apGrowth .apg .prow{grid-template-columns:minmax(0,1fr) auto;padding:30px 0 32px}' +\n'#apGrowth .apg .prow .go{grid-column:2;grid-row:1/4;margin-top:0}' +\n'#apGrowth .apg .sheet{top:70px;bottom:auto;left:50%;right:auto;width:680px;margin-left:-340px;max-height:calc(100% - 100px);max-height:calc(100vh - 100px);border-radius:8px;box-shadow:0 24px 60px rgba(16,21,31,.35);transform:translateY(16px);opacity:0}' +\n'#apGrowth .apg .sheet.open{transform:none;opacity:1}' +\n'#apGrowth .apg .toast{left:50%;right:auto;width:460px;margin-left:-230px;bottom:28px}' +\n'#apGrowth .apg .dimmer.on{display:block;position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999;background:rgba(16,21,31,.42)}' +\n'}' +\n'@media (max-width:599px){' +\n'#apGrowth .apg .choices.three{grid-template-columns:1fr}' +\n'}' +\n'@media (min-width:900px){.apg.ap-home .ap-panel-title{font-size:26px !important}}' +\n'@media (prefers-reduced-motion:reduce){.apg.ap-home *,.apg.ap-home *:before,.apg.ap-home *:after{transition:none !important;animation:none !important;scroll-behavior:auto !important}}' +\n'</style><div class=\"apg ap-home\" id=\"gRoot\"></div>';\nvar ROOT = host.querySelector('#gRoot');\n\nfunction $(id) { return document.getElementById(id); }\nfunction esc(s) { return String(s == null ? '' : s).replace(/[&<>\"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;' }[c]; }); }\nfunction smart(s) { return String(s == null ? '' : s).replace(/(^|[\\s(\\[\\u2014\\u2013-])\"/g, '$1\\u201c').replace(/\"/g, '\\u201d').replace(/(^|\\s)'/g, '$1\\u2018').replace(/'/g, '\\u2019'); }\n/* The last two words of a line of text are tied, so no paragraph or headline ends on a word alone, whatever the browser does with text-wrap. */\nfunction tie(s) { return esc(smart(s)).replace(/\\s+$/, '').replace(/ ([^ ]+)$/, '\\u00a0$1'); }\nfunction cap(s) { return String(s).charAt(0).toUpperCase() + String(s).slice(1); }\nfunction stored() { try { var v = JSON.parse(localStorage.getItem(STORE) || 'null'); return v && v.key ? v : null; } catch (e) { return null; } }\nfunction keep(v) { try { if (v) localStorage.setItem(STORE, JSON.stringify(v)); else localStorage.removeItem(STORE); } catch (e) {} }\nfunction post(url, body) {\n  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), credentials: 'omit' })\n    .then(function (r) { return r.json(); }, function () { throw { error: 'network' }; })\n    .then(function (r) { if (!r || r.ok !== true) throw (r || { error: 'network' }); return r; });\n}\nfunction lwMe() { var m = window.me; return (m && typeof m === 'object' && m.email) ? m : null; }\nfunction siteEmail() { var m = lwMe(); return m ? String(m.email || '').toLowerCase().trim() : ''; }\nfunction call(body) { if (!GROWTH_URL) return Promise.reject({ error: 'no_url' }); var s = stored(); body.key = s ? s.key : ''; body.site = siteEmail(); return post(GROWTH_URL, body); }\nfunction greet() { var h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }\nfunction firstName(n) { return String(n || '').trim().split(/\\s+/)[0] || ''; }\nfunction words(e) {\n  switch (e && e.error) {\n    case 'not_on_list': return 'That email is not on the desk list. Our team adds people on the People tab of the Front Desk sheet.';\n    case 'not_you': return 'The site is signed in as someone else. Sign in as yourself to open Your Growth.';\n    case 'no_site': return 'The site does not show anyone signed in. Sign in, then open Your Growth.';\n    case 'bad_email': return 'That does not look like an email address.';\n    case 'wait': return 'A code went out less than two minutes ago. Check your mail, or wait a moment and ask again.';\n    case 'too_many': return 'Five codes have gone out today. Try again tomorrow, or ask our team.';\n    case 'code_expired': return 'That code has expired. Ask for a new one.';\n    case 'code_wrong': return 'That is not the code. Check the mail and try again.';\n    case 'network': return 'The page could not reach the practice. Try again in a moment.';\n    case 'no_url': return 'The page is not wired to its script yet.';\n    default: return 'Something did not work. Try again in a moment.';\n  }\n}\n/* The site's top bar sticks to the top of the window; whatever we scroll to must land below it. Measured on the page, never assumed. */\nfunction barH() {\n  function h(e) { try { var cs = getComputedStyle(e), r = e.getBoundingClientRect(); if ((cs.position === 'fixed' || cs.position === 'sticky') && r.top <= 2 && r.height > 10 && r.height < 220 && r.width > 300) return Math.round(r.bottom); } catch (x) {} return 0; }\n  var best = h(document.querySelector('.lw-topbar') || document.body);\n  if (!best) { var c = document.querySelectorAll('header, [class*=\"topbar\"], [class*=\"header\"]'); for (var i = 0; i < c.length; i++) { if (ROOT.contains(c[i])) continue; var v = h(c[i]); if (v > best) best = v; } }\n  return best || 0;\n}\n/* The band runs the full width of the window, measured from the page itself (never 100vw, which counts the scrollbar). */\nfunction setBar() {\n  var cw = document.documentElement.clientWidth, r = host.getBoundingClientRect();\n  ROOT.style.setProperty('--bar', barH() + 'px');\n  ROOT.style.setProperty('--bleed-w', cw + 'px');\n  ROOT.style.setProperty('--bleed-l', (-Math.round(r.left)) + 'px');\n}\nfunction wide() { return window.matchMedia('(min-width:900px)').matches; }\nfunction phone() { return !wide(); }\n\n/* ---------- the gate: the site's sign-in is the door; the desk's code and key open the page for the person the site shows ---------- */\nfunction openSignIn() {\n  try { if (window.l_settings) window.l_settings.redirectUrl = location.pathname + location.search; } catch (e) {}\n  var a = document.querySelector('a[data-interactive-link-type=\"openformslink\"][data-interactive-link-var1=\"signin\"]');\n  if (a) { a.click(); return; }\n  var b = $('gSignin'); if (b) b.textContent = 'Use Sign in at the top of the page';\n}\nfunction gateBand(title, line) {\n  return '<section class=\"band hero\"><span class=\"k hk\">Your Growth</span><h1 id=\"gHello\" tabindex=\"-1\">' + esc(title) + '</h1><p class=\"where\" id=\"gLede\">' + esc(line) + '</p></section>';\n}\nfunction gate(msg) {\n  var site = siteEmail();\n  var title = greet() + (site && lwMe().firstName ? ', ' + firstName(lwMe().firstName) : '') + '.';\n  setBar();\n  if (!site) {\n    ROOT.innerHTML = gateBand(title, 'Sign in to open Your Growth.') + '<div class=\"gate\"><h2>Your Growth is for facilitators on our team.</h2><p class=\"s\">Sign in with your site account; the page opens for the person the site shows.</p>' + (msg ? '<p class=\"err\">' + esc(msg) + '</p>' : '') + '<div class=\"btns\"><button class=\"btn\" id=\"gSignin\">Sign in</button></div></div>';\n    $('gSignin').addEventListener('click', openSignIn);\n    return;\n  }\n  ROOT.innerHTML = gateBand(title, 'Signed in as ' + site + '.') + '<div class=\"gate\"><h2>Your Growth is for facilitators on our team.</h2>' +\n    '<p class=\"s\">The first time each day, a six-digit code goes to ' + esc(site) + ' and this page opens on it, for one day. The same code opens your desk.</p>' +\n    (msg ? '<p class=\"err\">' + esc(msg) + '</p>' : '') +\n    '<div id=\"gStep1\"><div class=\"btns\"><button class=\"btn\" id=\"gSend\">Send me a code</button></div><p class=\"err\" id=\"gErr1\" hidden></p></div>' +\n    '<div id=\"gStep2\" hidden><label for=\"gCode\">The six digits from the mail</label><input id=\"gCode\" type=\"tel\" inputmode=\"numeric\" autocomplete=\"one-time-code\" placeholder=\"000 000\"><div class=\"btns\"><button class=\"btn\" id=\"gCheck\">Open Your Growth</button><button class=\"btn q2\" id=\"gAgain\">Send another code</button></div><p class=\"err\" id=\"gErr2\" hidden></p></div></div>';\n  var email = site;\n  $('gSend').addEventListener('click', function () {\n    var b = $('gSend'); b.disabled = true; b.textContent = 'Sending\\u2026'; $('gErr1').hidden = true;\n    post(DESK_URL, { action: 'code_send', email: email, site: siteEmail() }).then(function () {\n      b.disabled = false; b.textContent = 'Send me a code'; $('gStep1').hidden = true; $('gStep2').hidden = false; $('gCode').focus();\n    }, function (e) { b.disabled = false; b.textContent = 'Send me a code'; $('gErr1').textContent = words(e); $('gErr1').hidden = false; });\n  });\n  $('gAgain').addEventListener('click', function () { $('gStep2').hidden = true; $('gStep1').hidden = false; });\n  $('gCheck').addEventListener('click', function () {\n    var code = String($('gCode').value || '').replace(/\\D/g, '');\n    if (code.length !== 6) { $('gErr2').textContent = 'The code is six digits.'; $('gErr2').hidden = false; return; }\n    var b = $('gCheck'); b.disabled = true; b.textContent = 'Opening\\u2026'; $('gErr2').hidden = true;\n    post(DESK_URL, { action: 'code_check', email: email, code: code, site: siteEmail(), browser: navigator.userAgent.slice(0, 120) }).then(function (r) {\n      keep({ key: r.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: r.expires });\n      load();\n    }, function (e) { b.disabled = false; b.textContent = 'Open Your Growth'; $('gErr2').textContent = words(e); $('gErr2').hidden = false; });\n  });\n  $('gCode').addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); $('gCheck').click(); } });\n}\n\n/* ---------- the page ---------- */\nvar D = null;\nvar S = { view: 'week', find: '', filt: false, shelfMore: false, ask: '', asked: false, askIdx: 0, askIds: [], askQ: '', rec: '', recSent: false, teamSent: false, open: {}, change: false, afterWord: '', afterLine: '', toastM: '', sheet: '', sheetId: '', sheetFrom: '', sbk: '', sk: '', busy: false };\nfunction load() {\n  var s = stored(), site = siteEmail();\n  if (!site) { keep(null); return gate(''); }\n  if (!s) return gate('');\n  if (String(s.email || '').toLowerCase() !== site) { keep(null); return gate(''); }\n  if (s.expires && new Date(s.expires) < new Date()) { keep(null); return gate('Your key from yesterday has run out. Send a new code.'); }\n  setBar();\n  ROOT.innerHTML = gateBand('Your Growth', '') + '<div class=\"flash\">Opening Your Growth\\u2026</div>';\n  call({ action: 'growth' }).then(function (r) { D = r; render(); if (D.who && D.who.first) call({ action: 'growth_ui', panel: 'g-welcomed', state: 'shut' }).catch(function () {}); }, function (e) {\n    var code = e && e.error;\n    if (code === 'no_key' || code === 'bad_key' || code === 'key_expired' || code === 'removed' || code === 'not_you' || code === 'no_site') { keep(null); return gate(code === 'removed' ? 'Your name is no longer on the desk list.' : code === 'key_expired' ? 'Your key from yesterday has run out. Send a new code.' : code === 'not_you' ? words(e) : ''); }\n    ROOT.innerHTML = gateBand('Your Growth', '') + '<div class=\"flash\">' + esc(words(e)) + ' <button class=\"btn line\" id=\"gRetry\">Try again</button></div>';\n    $('gRetry').addEventListener('click', load);\n  });\n}\n/* a quiet refresh after an answer, so every view reads from the record; the page keeps its place */\nfunction refresh() {\n  call({ action: 'growth' }).then(function (r) { var first = D && D.who && D.who.first; D = r; if (first && D.who) D.who.first = true; render(true); }, function () {});\n}\n\n/* ---------- words and pieces ---------- */\nvar GLOSS = { Wisdom: 'how you show up in the room', Understanding: 'reading a man and the moment', Knowledge: 'the trade, the men, and the God who gives it' };\nfunction lineOf(q) { var s = String(q || '').toLowerCase(); return /^know/.test(s) ? 'Knowledge' : /^(read|understand)/.test(s) ? 'Understanding' : 'Wisdom'; }\nfunction actOf(p) { var a = String(p && p.act || '').trim(); return /^(Read|Listen|Watch)$/.test(a) ? a : 'Read'; }\nfunction startAt(e) { var m = String(e.cut).match(/[Ll]isten (?:from )?(\\d+:\\d{2})/); return m ? m[1] : ''; }\nfunction spanOf(e) { var m = String(e.cut).match(/About ([a-z\\- ]+) minutes\\.?\\s*$/i); return m ? 'about ' + m[1] + ' minutes' : ''; }\nfunction total(e) { var m = String(e.cost).match(/(\\d+)\\s*min/); return m ? m[1] : ''; }\nfunction shortVoice(e) { return String(e.source || e.voice || '').split(' \\u00b7 ')[0].split(', a ')[0]; }\nfunction fmtShort(iso) { var d = new Date(iso + 'T12:00:00'); return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }\nfunction bringPoints(move) {\n  var s = String(move || '').replace(/^\\s*Room:\\s*/i, '').trim();\n  var bullets = s.split(/\\n+/).map(function (x) { return x.replace(/^[\\-\\u2022*]\\s*/, '').trim(); }).filter(Boolean);\n  if (bullets.length >= 2) return bullets.slice(0, 3);\n  var parts = [], buf = '', q = 0;\n  for (var i = 0; i < s.length; i++) {\n    var ch = s[i], prev = i ? s[i - 1] : '', next = i + 1 < s.length ? s[i + 1] : ''; buf += ch;\n    if (ch === '\\u201c') q++; else if (ch === '\\u201d') q = Math.max(0, q - 1); else if (ch === '\"') q = q ? 0 : 1;\n    var closes = (ch === '\\u201d' || (ch === '\"' && !q)) && /[.?!]/.test(prev);\n    if ((!q && /[.?!]/.test(ch) && (!next || /\\s/.test(next))) || (closes && (!next || /\\s/.test(next)))) { parts.push(buf.trim()); buf = ''; }\n  }\n  if (buf.trim()) parts.push(buf.trim());\n  return parts.filter(function (p) { return p && !/^for the course:/i.test(p); }).slice(0, 3);\n}\nfunction pieceById(id) {\n  if (!D || !id) return null;\n  var all = (D.shelf || []).concat(D.piece ? [D.piece] : [], D.after && D.after.piece ? [D.after.piece] : []);\n  for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];\n  return null;\n}\nfunction teamPiece() { return D.team ? pieceById(D.team.id) : null; }\nfunction shownPiece() { return S.change ? teamPiece() : D.piece; }\n\n/* ---------- AP-PANEL 1: one function draws every section ---------- */\nfunction note(n) { return '<span class=\"np\">' + String(n).split(' \\u00b7 ').map(function (x) { return '<span class=\"nn\">' + x + '</span>'; }).join('') + '</span>'; }\nfunction panelOpen(key, shutDefault) {\n  var v = (D && D.ui && D.ui['g-' + key]) || ''; if (!v) { try { v = localStorage.getItem('ap_panel_g-' + key) || ''; } catch (e) {} }\n  if (v === 'shut') return false; if (v === 'open') return true;\n  return !shutDefault;\n}\nfunction secHtml(key, title, nt, body, opts) {\n  opts = opts || {};\n  var open = panelOpen(key, opts.shut);\n  return '<section class=\"ap-panel' + (open ? '' : ' shut') + '\" data-panel=\"' + key + '\" id=\"p-' + key + '\">' +\n    '<h2 class=\"ap-panel-h\"><button type=\"button\" class=\"ap-panel-head\" data-act=\"panel\" data-k=\"' + key + '\" aria-expanded=\"' + (open ? 'true' : 'false') + '\"><span class=\"ap-panel-text\"><span class=\"ap-panel-title\">' + title + '</span><span class=\"ap-panel-note\">' + note(nt) + '</span></span><span class=\"ap-panel-ctl\">' + (open ? 'Close \\u25b4' : 'Open \\u25be') + '</span></button></h2>' +\n    '<div class=\"ap-panel-body\">' + body + '</div></section>';\n}\nfunction panelSet(key, open) {\n  var box = ROOT.querySelector('.ap-panel[data-panel=\"' + key + '\"]'); if (!box) return;\n  box.classList.toggle('shut', !open);\n  var b = box.querySelector('.ap-panel-head'); if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');\n  var c = box.querySelector('.ap-panel-ctl'); if (c) c.textContent = open ? 'Close \\u25b4' : 'Open \\u25be';\n  if (D) { D.ui = D.ui || {}; D.ui['g-' + key] = open ? 'open' : 'shut'; }\n  try { localStorage.setItem('ap_panel_g-' + key, open ? 'open' : 'shut'); } catch (e) {}\n  call({ action: 'growth_ui', panel: 'g-' + key, state: open ? 'open' : 'shut' }).catch(function () {});\n}\nfunction choice(act, v, label, on, cls) { return '<button class=\"choice' + (cls ? ' ' + cls : '') + '\" data-act=\"' + act + '\" data-v=\"' + esc(v) + '\" aria-pressed=\"' + (!!on) + '\">' + label + '</button>'; }\nfunction rev(k, label, body) { var o = !!S.open[k]; return '<button class=\"rev\" data-act=\"toggle\" data-k=\"' + k + '\" aria-expanded=\"' + o + '\"><span>' + label + '</span> ' + (o ? '\\u25b4' : '\\u25be') + '</button><div class=\"more' + (o ? ' open' : '') + '\">' + body + '</div>'; }\nfunction walk(act, label, extra) { return '<button class=\"walk\" data-act=\"' + act + '\"' + (extra || '') + '><span class=\"u\">' + label + '</span>&nbsp;<span class=\"ar\">\\u2192</span></button>'; }\nfunction linkWalk(href, label) { return '<a class=\"walk\" href=\"' + esc(href) + '\" target=\"_blank\" rel=\"noopener\"><span class=\"u\">' + label + '</span>&nbsp;<span class=\"ar\">\\u2192</span></a>'; }\nfunction qline(q) { return '<blockquote class=\"q\">\\u201c' + tie(q.words) + '\\u201d</blockquote>' + (q.link ? '<a class=\"qm\" href=\"' + esc(q.link) + '\" target=\"_blank\" rel=\"noopener\"><span>Hear it at minute ' + esc(q.minute) + '</span>&nbsp;\\u2192</a>' : ''); }\n\n/* ---------- a piece, as a facilitator reads it: the note carries the voice and length; the body says each thing once ---------- */\nfunction pieceF(e, ctx) {\n  var opened = D.mine && D.mine.opened;\n  var full = ctx !== 'room' || opened || !!(D.after);\n  var w = lineOf(e.question);\n  var h = '<p class=\"lk\">' + w + ' \\u00b7 <span style=\"text-transform:none;letter-spacing:0;font:italic 400 14px var(--serif);color:var(--quiet)\">' + GLOSS[w] + '</span></p>';\n  h += '<p class=\"t claim\" style=\"margin-top:6px\">' + tie(e.claim) + '</p>';\n  if (ctx !== 'room') h += '<p class=\"who\">' + esc(e.source || e.voice) + ' \\u00b7 ' + actOf(e) + (total(e) ? ' \\u00b7 ' + total(e) + ' minutes' : '') + '</p>';\n  if (ctx === 'room' && !D.after) {\n    var R = D.room || {}, title = R.title || '';\n    var swap = D.mine && D.mine.swap;\n    var why = swap ? 'You chose it from The Shelf for \\u201c' + esc(title) + ',\\u201d in place of the piece our team chose.' : (title ? 'Chosen for \\u201c' + esc(title) + '\\u201d' + (e.why ? ': ' + esc(smart(e.why)) + '.' : '.') : '');\n    if (why) h += '<div class=\"ruled\"><p class=\"lk\">Why It\\u2019s Here This Week</p><p>' + why + '</p></div>';\n  }\n  var qs = (e.quotes || []).slice(0, full ? 2 : 1);\n  if (qs.length) h += '<div class=\"part\"><p class=\"lk\">In Their Words</p>' + qs.map(qline).join('') + '</div>';\n  var bring = '<ul class=\"pts\">' + bringPoints(e.move).map(function (x) { return '<li>' + tie(x) + '</li>'; }).join('') + '</ul>';\n  var st = startAt(e), act = actOf(e);\n  var detail = '<p class=\"s\" style=\"margin-top:0\">' + tie(e.cut) + '</p>';\n  var against = '<p class=\"s\" style=\"margin-top:0\">' + tie(e.beside) + '</p>' + (e.ours ? '<p class=\"s\"><b>Already ours:</b> ' + tie(e.ours) + '</p>' : '');\n  if (full) {\n    h += '<div class=\"part\"><p class=\"lk\">Bring It \\u00b7 About Five Minutes</p>' + bring + '</div>';\n    h += '<div class=\"part\"><div class=\"revs\">' + (e.cut ? rev('cut' + e.id + ctx, 'What to listen for', detail) : '') + rev('txt' + e.id + ctx, 'How we read it against the text', against) + '</div>';\n    var verb = act === 'Read' ? 'Read the post' : (ctx === 'room' && opened && !D.after ? (act === 'Listen' ? 'Listen again' : act) : act) + (st ? ' from minute ' + st : '');\n    h += '<div class=\"walks\">' + linkWalk(e.link, verb) + '</div></div>';\n  } else {\n    h += '<div class=\"part\"><div class=\"revs\">' + rev('bring' + e.id, 'What you\\u2019d bring, about five minutes', bring) + rev('txt' + e.id + ctx, 'How we read it against the text', against) + '</div></div>';\n  }\n  return h;\n}\n\n/* ---------- the shell (AP-SHELL 1): the band, the menu, the views ---------- */\nvar VIEWS = [['week', 'This Week', 'Get ready for the room'], ['shelf', 'The Shelf', 'Find what fits'], ['craft', 'Your Craft', 'See what you\\u2019ve brought']];\nfunction person() { return firstName(D.who.name) || firstName(D.who.email); }\nfunction ctxLine() {\n  var R = D.room; if (!R) return '';\n  var who = D.who.role === 'admin' ? 'The room' : 'Your room';\n  return esc(R.course) + ' \\u00b7 <span class=\"nw\">Week ' + R.week + ' \\u00b7</span> <span class=\"nw\">' + who + ' meets</span> <span class=\"nw\">' + esc(R.night) + (R.hour ? ',</span> <span class=\"nw\">at ' + esc(R.hour) : '') + '</span>';\n}\nfunction viewName() { return VIEWS.filter(function (x) { return x[0] === S.view; })[0][1]; }\nfunction menu() {\n  var h = '<nav class=\"pcnav\" aria-label=\"Rooms and views\"><p class=\"mlab\">Your Rooms</p>';\n  h += '<a class=\"mi room\" href=\"' + PATHS.page + '\"><b>Your Page</b><span>Walk your own road</span></a>';\n  h += '<div class=\"mgroup\"><div class=\"mi room here\"><b>Your Growth</b><span>Get filled for the work</span></div>' +\n    VIEWS.map(function (x) { return '<button class=\"mi mv\" data-act=\"tab\" data-tab=\"' + x[0] + '\" aria-current=\"' + (S.view === x[0] ? 'page' : 'false') + '\"><b>' + x[1] + '</b><span>' + x[2] + '</span></button>'; }).join('') + '</div>';\n  h += '<a class=\"mi room\" href=\"' + PATHS.desk + '\"><b>Your Desk</b><span>Care for your men</span></a>';\n  h += '<div class=\"mfoot\"><button class=\"mi\" data-act=\"askteam\"><b>Ask our team</b><span>A question about your room</span></button><button class=\"mi\" data-act=\"settings\"><b>Settings</b><span>Notices</span></button></div></nav>';\n  return h;\n}\nfunction band() {\n  var h1 = S.view === 'week' ? (D.who.first ? 'Welcome, ' : greet() + ', ') + person() + '.' : S.view === 'shelf' ? 'The Shelf' : 'Your Craft';\n  var top = '<header class=\"band topbar\"><div class=\"kr\"><span class=\"k\">Your Growth</span><span class=\"kr-r\"><button class=\"tb\" data-act=\"askteam\">Ask our team</button><button class=\"tb\" data-act=\"rooms\">Rooms</button><button class=\"tb\" data-act=\"settings\">Settings</button></span></div></header>';\n  var tabs = '<div class=\"tabs\" role=\"tablist\" aria-label=\"Views\">' + VIEWS.map(function (x) { return '<button class=\"tab\" role=\"tab\" data-act=\"tab\" data-tab=\"' + x[0] + '\" aria-selected=\"' + (S.view === x[0]) + '\">' + x[1] + '</button>'; }).join('') + '</div>';\n  return top + '<section class=\"band hero\"><span class=\"k hk\">Your Growth</span><h1 id=\"gH1\" tabindex=\"-1\">' + esc(h1) + '</h1><p class=\"where\">' + ctxLine() + '</p></section>' + tabs;\n}\n\n/* ---------- Your Growth \\u00b7 This Week ---------- */\nfunction nextPanel() {\n  var R = D.room || {}, wk = R.week, d = R.weekday || 'the night', P = shownPiece(), A = D.after, M = D.mine || {}, nt, body;\n  if (A && A.kept) {\n    nt = 'Kept \\u00b7 Week ' + wk + ' is next';\n    var wd = A.word === 'opened' ? 'It opened something' : A.word === 'quiet' ? 'It landed quietly' : 'We didn\\u2019t get to it';\n    body = '<p class=\"kept\" style=\"margin-top:0\"><b>Kept.</b> \\u201c' + wd + '.\\u201d' + (A.line ? ' ' + esc(A.line) : '') + ' It\\u2019s in Your Craft beside the piece, and it feeds Room Signals, never as one man\\u2019s words.</p>' +\n      '<p class=\"t\" style=\"margin-top:14px\">Next: Week ' + wk + ', \\u201c' + esc(R.title) + '.\\u201d</p><p class=\"s\">Its piece comes here as soon as one is chosen for it.</p><div class=\"walks\">' + linkWalk(courseHref(R.course), 'Read Week ' + wk + ' ahead') + '</div>';\n  } else if (A) {\n    nt = A.yesterday ? 'Last night' : esc(A.weekday) + ' night';\n    var m0 = bringPoints(A.piece.move)[0] || A.piece.claim;\n    m0 = String(m0).replace(/^Say it first:\\s*/, '').replace(/^[\\u201c\"\\u2018'\\s]+|[\\u201d\"\\u2019'\\s]+$/g, '').replace(/[.,]$/, '');\n    body = '<p class=\"t\">You brought \\u201c' + esc(smart(m0)) + '.\\u201d What did the room do with it?</p><div class=\"choices\">' +\n      choice('after', 'opened', 'It opened something', S.afterWord === 'opened', 'left') + choice('after', 'quiet', 'It landed quietly', S.afterWord === 'quiet', 'left') + choice('after', 'none', 'We didn\\u2019t get to it', S.afterWord === 'none', 'left') +\n      '</div><label class=\"sr\" for=\"aline\">One line, if you want</label><textarea id=\"aline\" placeholder=\"One line, if you want. No names.\">' + esc(S.afterLine) + '</textarea><button class=\"btn\" data-act=\"afterkeep\">Keep it</button>';\n  } else if (!P) {\n    nt = 'Nothing chosen yet';\n    body = '<p class=\"t\">Nothing is chosen for ' + (wk ? 'Week ' + wk : 'your room') + ' yet.</p><p class=\"s\">When a piece fits your room\\u2019s week, it lands here and on Your Desk. Until then, The Shelf has pieces that fit any week.</p><div class=\"walks\">' + walk('shelfweek', 'Find one on The Shelf') + '</div>';\n  } else if (!M.opened && !S.change) {\n    nt = 'Before ' + d;\n    var wl = R.weekLine ? '<div class=\"ruled\" style=\"margin:0 0 14px\"><p class=\"lk\">Where Your Men Are This Week</p><p class=\"serif\">\\u201c' + esc(smart(R.weekLine)) + '\\u201d</p></div>' : '';\n    body = wl + '<p class=\"t\">Listen to this week\\u2019s piece' + (spanOf(P) ? ', ' + spanOf(P) : '') + '.</p><button class=\"btn\" data-act=\"listen\">' + (actOf(P) === 'Read' ? 'Read it' : (actOf(P) === 'Watch' ? 'Watch' : 'Listen') + (startAt(P) ? ' from minute ' + startAt(P) : '')) + '</button>';\n  } else if (!M.choice || S.change) {\n    nt = 'Before ' + d;\n    body = '<p class=\"t\">Will you bring it to the room ' + d + '?</p><div class=\"choices two\">' + choice('bring', 'bring', 'Bring it to the room', false) + choice('bring', 'no', 'Not needed this week', false) + '</div><p class=\"help\">Either answer tells our team what serves your room.</p>';\n  } else if (M.choice === 'no') {\n    nt = 'Before ' + d;\n    body = '<p class=\"kept\" style=\"margin-top:0\"><b>Kept.</b> Thank you; a no helps us choose as much as a yes.</p><p class=\"s\">If you want something else for Week ' + wk + ', The Shelf has pieces that fit it.</p><div class=\"walks\">' + walk('shelfweek', 'Find one for Week ' + wk) + walk('bringchange', 'Change your answer') + '</div>';\n  } else {\n    nt = 'Ready for ' + d;\n    body = '<p class=\"t\">You\\u2019re ready for ' + d + '.</p><p class=\"s\">' + (M.swap ? 'You\\u2019re bringing \\u201c' + tie(String(P.claim).replace(/\\.$/, '')) + ',\\u201d from The Shelf, in place of the piece our team chose. Its points are below, and on Your Desk for the night.' : 'You\\u2019re bringing this week\\u2019s piece. Its three points are below, and on Your Desk for the night.') + '</p><div class=\"walks\">' + walk('bringchange', 'Change your answer') + '</div>';\n  }\n  return secHtml('next', 'Next Step', nt, body);\n}\nfunction piecePanel() {\n  var A = D.after, P = A ? A.piece : shownPiece(); if (!P) return '';\n  var R = D.room || {};\n  var title = A ? 'Last Week\\u2019s Piece' : (D.mine && D.mine.swap ? 'The Piece for ' + R.weekday : 'This Week\\u2019s Piece');\n  var nt = (A ? 'Brought ' + A.night + ' \\u00b7 ' : '') + esc(shortVoice(P)) + (total(P) ? ' \\u00b7 ' + total(P) + ' minutes' : '');\n  return secHtml('piece', title, nt, pieceF(P, 'room'), { shut: !!A });\n}\nfunction carriedPanel() {\n  var C = D.carried; if (!C || !C.items.length) return '';\n  return secHtml('carried', 'Room Signals', 'What the room carried in Week ' + C.week, C.items.map(function (c) { return '<div class=\"mark\"><span class=\"lab\">' + esc(c.title) + '</span><p>' + esc(c.text) + '</p></div>'; }).join('') + '<p class=\"help\">What the room said together, never one man\\u2019s words.' + (D.after ? ' Week ' + (D.room ? D.room.week - 1 : '') + ' is added once our team reads it.' : '') + '</p>', { shut: phone() });\n}\nfunction releasePanel() {\n  if (!D.release) return '';\n  return secHtml('release', 'Release List', 'Our team only', '<p class=\"s\" style=\"margin-top:0\">A piece our team keeps reaches the men at 6:00 PM that day, unless you hold it.</p><div class=\"walks\"><a class=\"walk\" href=\"' + DESK_PAGE + '\" target=\"_blank\" rel=\"noopener\"><span class=\"u\">Read or hold on Your Desk</span>&nbsp;<span class=\"ar\">\\u2192</span></a></div>');\n}\nfunction welcomePanel() {\n  if (!D.who.first) return '';\n  return secHtml('welcome', 'What This Page Is For', 'Why Your Growth exists \\u00b7 Exodus 31:3', '<p class=\"verse\">\\u201cand I have filled him with the Spirit of God, with ability and intelligence, with knowledge and all craftsmanship\\u201d<span>Exodus 31:3 (ESV)</span></p><p class=\"s\">In Hebrew the three are chokmah, tevunah and da\\u2019at: wisdom, understanding and knowledge. Bezalel was filled for the work before he built anything. This page serves that filling, one piece at a time.</p>');\n}\nfunction courseHref(name) {\n  var n = String(name || '').toLowerCase().replace(/\\s+/g, ' ').trim(), cards = document.querySelectorAll('.ap-card.ap-course, a.ap-ccard'), i, t, a;\n  for (i = 0; i < cards.length; i++) {\n    if (ROOT.contains(cards[i])) continue;\n    t = cards[i].querySelector('.ap-card-title, .ap-ccard-name'); a = cards[i].tagName === 'A' ? cards[i] : cards[i].querySelector('a[href]');\n    if (t && a && String(t.textContent).toLowerCase().replace(/\\s+/g, ' ').trim() === n) return a.getAttribute('href') || '';\n  }\n  return '/courses';\n}\nfunction courseCard(R) {\n  var after = !!(D.after && D.after.kept) || !!D.after;\n  return '<div class=\"ap-home\"><div class=\"ap-courses\"><a class=\"ap-ccard\" href=\"' + esc(courseHref(R.course)) + '\">' + (R.pic ? '<img class=\"ap-ccard-img\" src=\"' + esc(R.pic) + '\" alt=\"\">' : '<span class=\"ap-ccard-img\"></span>') + '<div class=\"ap-ccard-body\"><p class=\"ap-ccard-name\">' + esc(R.course) + '</p><p class=\"ap-ccard-line\">Week ' + R.week + ' reading: <span class=\"ap-nw\">' + esc(R.title) + '</span></p><p class=\"ap-ccard-sub\">' + (D.who.role === 'admin' ? 'The room' : 'Your room') + ' meets ' + esc(R.night) + (R.hour ? ', <span class=\"ap-nw\">at ' + esc(R.hour) + '</span>' : '') + '</p><p class=\"ap-ccard-way\"><span>Continue</span></p></div></a></div></div>';\n}\nfunction coursePanel() {\n  var R = D.room; if (!R) return '';\n  var after = !!D.after;\n  return secHtml('course', 'The Course', after ? 'Week ' + R.week + ' is next' : (D.who.role === 'admin' ? 'What the room is walking' : 'What your room is walking'),\n    courseCard(R) + (D.menUrl ? '<div class=\"walks\">' + linkWalk(D.menUrl, 'See your men\\u2019s weeks') + '</div>' : ''));\n}\nfunction viewWeek() {\n  return '<main class=\"view cols2\"><div class=\"mainc\">' + nextPanel() + piecePanel() + carriedPanel() + releasePanel() + welcomePanel() + '</div><aside class=\"side\">' + coursePanel() + '</aside></main>';\n}\n\n/* ---------- Your Growth \\u00b7 The Shelf ---------- */\nfunction askAnswer() {\n  var ids = S.askIds || [];\n  if (!ids.length) return '<div class=\"part\"><p class=\"lk\">From The Shelf</p><p class=\"s\" style=\"margin-top:4px\">Nothing on The Shelf fits \\u201c' + esc(S.ask) + '\\u201d yet. Try other words for what the room is facing.</p></div>';\n  var e = pieceById(ids[S.askIdx % ids.length]); if (!e) return '';\n  var q = S.askIdx % ids.length === 0 && S.askQ ? S.askQ : (e.q2 || '');\n  return '<div class=\"part\" id=\"askout\" tabindex=\"-1\"><p class=\"lk\">From The Shelf \\u00b7 for a room stuck on \\u201c' + esc(S.ask) + '\\u201d</p><p class=\"t\" style=\"font-size:18px;margin-top:4px\">' + tie(e.claim) + '</p><p class=\"who\">' + esc(shortVoice(e)) + ' \\u00b7 ' + actOf(e) + (total(e) ? ' \\u00b7 ' + total(e) + ' minutes' : '') + '</p>' +\n    (q ? '<div class=\"ruled\"><p class=\"lk\">A Question for the Room</p><p class=\"serif\">' + tie(q) + '</p></div>' : '') +\n    '<div class=\"walks\">' + walk('openpiece', 'Open the whole piece', ' data-id=\"' + esc(e.id) + '\"') + (ids.length > 1 ? walk('asknext', 'Another piece') : '') + '</div></div>';\n}\nfunction askPanel() {\n  return secHtml('stuck', 'Ask About Your Room', 'What is it stuck on? \\u00b7 one piece and one question come back',\n    '<label class=\"t\" for=\"askt\" style=\"display:block;font-size:17px\">What is your room stuck on?</label><textarea id=\"askt\" placeholder=\"for example, silence after a heavy story\">' + esc(S.ask) + '</textarea><button class=\"btn line\" data-act=\"ask\">Ask</button>' + (S.asked ? askAnswer() : ''), { shut: !S.asked && phone() });\n}\nfunction shelfList() {\n  var L = (D.shelf || []).slice(), R = D.room;\n  if (S.filt && R) { var re = new RegExp('(^|[^A-Za-z])' + R.abbr + ':' + R.week + '(?!\\\\d)'); L = L.filter(function (e) { return re.test(String(e.weeks || '')); }); }\n  var q = S.find.trim().toLowerCase();\n  if (q) L = L.filter(function (e) { return ((e.claim || '') + ' ' + (e.source || e.voice || '') + ' ' + (e.move || '') + ' ' + lineOf(e.question)).toLowerCase().indexOf(q) >= 0; });\n  return L;\n}\nfunction shelfRows() {\n  var L = shelfList(), show = S.shelfMore ? L : L.slice(0, 8), R = D.room || {};\n  if (!L.length) return '<p class=\"s\">' + (S.filt ? 'Nothing for Week ' + R.week + ' matches that.' : 'Nothing on The Shelf matches that yet. Try fewer words.') + ' You can also ask above, in Ask About Your Room.</p>' + (S.filt ? '<div class=\"walks\">' + walk('filt', 'Show every week', ' data-v=\"\"') + '</div>' : '');\n  var h = '<div class=\"rows\">' + show.map(function (e) {\n    var parts = [shortVoice(e), actOf(e) + (total(e) ? ' \\u00b7 ' + total(e) + ' minutes' : ''), 'Kept ' + fmtShort(e.written)].concat(e.state ? [e.state] : []);\n    return '<button class=\"prow\" data-act=\"openpiece\" data-id=\"' + esc(e.id) + '\"><span class=\"lab\">' + lineOf(e.question) + '</span><span class=\"nm\">' + tie(e.claim) + '</span><span class=\"st\">' + parts.map(function (p, i) { return '<span class=\"' + (i ? 'nw' : 'nv') + '\">' + esc(p) + '</span>'; }).join(' \\u00b7 ') + '</span><span class=\"go\"><span>Open</span> \\u2192</span></button>';\n  }).join('') + '</div>';\n  if (L.length > 8) h += '<button class=\"rev\" data-act=\"toggle\" data-k=\"shelfmore\" aria-expanded=\"' + S.shelfMore + '\"><span>' + (S.shelfMore ? 'Show the newest only' : 'More on The Shelf') + '</span> ' + (S.shelfMore ? '\\u25b4' : '\\u25be') + '</button>';\n  return h;\n}\nfunction whoBody() {\n  var Z = D.sources || { lanes: [], music: [] };\n  return '<p class=\"s\" style=\"margin-top:0\">Pastors, counselors, scholars and coaches, men\\u2019s and women\\u2019s voices. Each morning we read what they said, keep only a few, and read each against Scripture before it reaches you.</p><div class=\"revs vlanes\">' +\n    Z.lanes.map(function (l, i) { return rev('lane' + i, esc(l[0]), '<ul class=\"vl\">' + l[1].map(function (v) { return '<li>' + esc(v[0]) + '<span>' + esc(v[1]) + '</span></li>'; }).join('') + '</ul>'); }).join('') +\n    (Z.music.length ? rev('lanemusic', 'Music for the men\\u2019s road', '<ul class=\"vl\">' + Z.music.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul>') : '') + '</div>';\n}\nfunction comingBody() {\n  var C = D.coming || [];\n  if (!C.length) return '<p class=\"s\" style=\"margin-top:0\">Nothing is on the calendar yet.</p>';\n  return '<div class=\"rows\">' + C.map(function (c) { return '<a class=\"prow\" href=\"' + esc(c.link) + '\" target=\"_blank\" rel=\"noopener\"><span class=\"nm\">' + tie(c.claim) + '</span><span class=\"st\">' + esc(c.voice) + (c.cost ? ' \\u00b7 ' + esc(c.cost) : '') + '</span><span class=\"go\"><span>Open</span> \\u2192</span></a>'; }).join('') + '</div>';\n}\nfunction viewShelf() {\n  var R = D.room || {};\n  var main = askPanel() + secHtml('shelf', 'Everything We\\u2019ve Kept', 'Newest first \\u00b7 released to every facilitator',\n    '<p class=\"s\" style=\"margin:0 0 12px\">Every piece names the voice it came from. ' + walk('gowho', 'See everyone we read') + '</p><div class=\"findrow\"><div class=\"find\"><svg viewBox=\"0 0 20 20\" aria-hidden=\"true\"><circle cx=\"8.5\" cy=\"8.5\" r=\"5.5\"/><path d=\"M13 13l4 4\"/></svg><label class=\"sr\" for=\"findt\">Search The Shelf</label><input id=\"findt\" type=\"search\" placeholder=\"Search\" value=\"' + esc(S.find) + '\" autocomplete=\"off\">' + (R.week ? '<button class=\"fchip\" data-act=\"filt\" data-v=\"' + (S.filt ? '' : '1') + '\" aria-pressed=\"' + (!!S.filt) + '\">Week ' + R.week + ' only</button>' : '') + '</div></div><div id=\"shelfRows\" style=\"margin-top:8px\">' + shelfRows() + '</div>');\n  var side = secHtml('who', 'Who We Read', 'Every voice, by lane', whoBody()) + secHtml('coming', 'Coming Up', 'Trainings and events', comingBody());\n  return '<main class=\"view cols2\"><div class=\"mainc\">' + main + '</div><aside class=\"side\">' + side + '</aside></main>';\n}\n\n/* ---------- Your Growth \\u00b7 Your Craft ---------- */\nfunction recPanel() {\n  return secHtml('rec', 'Name a Voice', 'Our team answers you', S.recSent ? '<p class=\"kept\" style=\"margin-top:0\"><b>Sent.</b> Our team reads it and tells you which lane it joins, or why it waits.</p>' : '<label class=\"t\" for=\"rect\" style=\"display:block\">Whose voice should we read?</label><textarea id=\"rect\" placeholder=\"A name, a show or a link, and why it helps your room.\">' + esc(S.rec) + '</textarea><button class=\"btn line\" data-act=\"rec\">Send to our team</button>');\n}\nfunction viewCraft() {\n  var C = D.craft || { brought: [], aside: [] }, main;\n  if (!C.brought.length) main = secHtml('brought', 'What You\\u2019ve Brought', 'Kept under the word each one serves', '<p class=\"t\">Nothing brought yet.</p><p class=\"s\">When you bring a piece to your room, it\\u2019s kept here under wisdom, understanding or knowledge, with what the room did with it. Over a course it becomes a record of how you led.</p><div class=\"walks\">' + walk('tab', 'Start with this week', ' data-tab=\"week\"') + '</div>');\n  else main = secHtml('brought', 'What You\\u2019ve Brought', 'Under its word \\u00b7 with what the room did', '<div class=\"rows\">' + C.brought.map(function (x) {\n    var said = x.said ? (x.said === 'opened' ? 'It opened something.' : x.said === 'quiet' ? 'It landed quietly.' : 'We didn\\u2019t get to it.') + (x.line ? ' ' + x.line : '') : '';\n    return '<button class=\"prow\" data-act=\"openpiece\" data-from=\"craft\" data-id=\"' + esc(x.id) + '\"><span class=\"lab\">' + x.word + '</span><span class=\"nm\">' + tie(x.claim) + '</span><span class=\"st\">' + esc(x.label) + (said ? ' \\u00b7 The room: ' + esc(said) : '') + '</span><span class=\"go\"><span>Open</span> \\u2192</span></button>';\n  }).join('') + '</div>');\n  if (C.aside.length) main += secHtml('aside', 'What You Set Aside', 'A no is kept too', '<div class=\"rows\">' + C.aside.map(function (x) {\n    return '<button class=\"prow\" data-act=\"openpiece\" data-from=\"craft\" data-id=\"' + esc(x.id) + '\"><span class=\"lab\">' + x.word + '</span><span class=\"nm\">' + tie(x.claim) + '</span><span class=\"st\">' + esc(x.label) + ' \\u00b7 it tells us what earns its place in a room</span><span class=\"go\"><span>Open</span> \\u2192</span></button>';\n  }).join('') + '</div>');\n  main += recPanel();\n  var less = {}; (D.less || []).forEach(function (k) { less[k] = true; });\n  var anyLess = Object.keys(less).length > 0;\n  var side = secHtml('voices', 'Voices and Lanes', 'Where your pieces come from', '<p class=\"s\" style=\"margin-top:0\">Pastors, counselors, scholars and coaches, men\\u2019s and women\\u2019s voices, in lanes like narrative trauma care, shame and being known, and group facilitation.</p><div class=\"revs\">' +\n    rev('lanes', 'Every lane', '<div>' + (D.lanes || []).map(function (l, i) { var on = !!less[l.lane]; return '<div class=\"lane\"><div><b>' + esc(l.lane) + '</b><span>' + esc(l.line) + '. ' + esc(l.voices) + '.</span></div><button class=\"rev\" data-act=\"less\" data-v=\"' + i + '\" aria-pressed=\"' + on + '\"><span>' + (on ? 'Less of this \\u2713' : 'Less of this') + '</span></button></div>'; }).join('') + '</div>' + (anyLess ? '<p class=\"kept\"><b>Kept.</b> Our team sees it when choosing your pieces.</p>' : '')) + '</div>');\n  return '<main class=\"view cols2\"><div class=\"mainc\">' + main + '</div><aside class=\"side\">' + side + '</aside></main>';\n}\n\n/* ---------- render, focus and balance ---------- */\nfunction focusSig() {\n  var a = document.activeElement; if (!a || !ROOT.contains(a) || a === document.body) return null;\n  var p = a.closest('.ap-panel');\n  if (a.id) return { sel: '#' + a.id, p: p && p.id };\n  var sel = a.tagName.toLowerCase() + ['act', 'v', 'k', 'id', 'tab'].filter(function (x) { return a.dataset[x] != null; }).map(function (x) { return '[data-' + x + '=\"' + String(a.dataset[x]).replace(/\"/g, '\\\\\"') + '\"]'; }).join('');\n  return { sel: sel, p: p && p.id };\n}\nfunction restoreFocus(fs, keepIt) {\n  if (!keepIt) { var h = $('gH1'); if (h && fs) h.focus({ preventScroll: true }); return; }\n  if (!fs) return; var n = null; try { n = ROOT.querySelector(fs.sel); } catch (e) {}\n  if (!n && fs.p) { var pp = document.getElementById(fs.p); if (pp) n = pp.querySelector('.kept a,.kept button,.walk,button,textarea,input,a'); }\n  if (n) n.focus({ preventScroll: true });\n}\n/* AP-SHELL 1, rule 8: on a computer the right column is never longer than the left; what would make it longer moves into the left column, in its order, below what is there */\nvar moved = [];\nfunction balance() {\n  var m = ROOT.querySelector('.mainc'), s = ROOT.querySelector('.side'); if (!m || !s) return;\n  var fa = document.activeElement;\n  moved.filter(function (p) { return ROOT.contains(p); }).reverse().forEach(function (p) { s.insertBefore(p, s.firstChild); }); moved = [];\n  s.hidden = false; m.parentNode.classList.remove('one');\n  if (wide()) {\n    var first = null;\n    while (s.children.length && s.offsetHeight > m.offsetHeight) { var p = s.lastElementChild; m.insertBefore(p, first); first = p; moved.unshift(p); }\n    if (!s.children.length) { s.hidden = true; m.parentNode.classList.add('one'); }\n  }\n  if (fa && fa !== document.activeElement && document.body.contains(fa)) fa.focus({ preventScroll: true });\n}\n/* AP-SHIP 1, line 3: the build stands in the page foot */\nfunction foot() { return '<p class=\"pfoot\">Your Growth \\u00b7 build ' + BUILD + ' \\u00b7 Filled for the Work, Exodus 31:3 and Proverbs 24:3\\u20134. Signed in as ' + esc(siteEmail()) + ', the same person the site shows.</p>'; }\nfunction render(keepIt) {\n  if (!D) return;\n  moved = []; /* the panels moved by balance() belong to the DOM about to be replaced; a new view starts with none */\n  var y = window.pageYOffset, fs = focusSig();\n  var body = S.view === 'week' ? viewWeek() : S.view === 'shelf' ? viewShelf() : viewCraft();\n  setBar();\n  ROOT.innerHTML = band() + '<div class=\"pcwrap\">' + menu() + '<div class=\"pcmain\">' + body + foot() + '</div></div><div class=\"dimmer\" id=\"gDim\"></div><section class=\"sheet\" id=\"gSheet\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"gSheetT\" tabindex=\"-1\"></section><div class=\"toast\" id=\"gToast\" role=\"status\" aria-live=\"polite\"></div>';\n  if (S.toastM) { var tt = $('gToast'); tt.textContent = S.toastM; tt.classList.add('in'); }\n  if (S.sheet) { var sh = $('gSheet'); sh.innerHTML = S.sheetHtml; sh.classList.add('open'); $('gDim').classList.add('on'); }\n  balance();\n  if (keepIt) window.scrollTo(0, y);\n  restoreFocus(fs, keepIt);\n  var f = $('findt'); if (f) f.addEventListener('input', function () { S.find = f.value; $('shelfRows').innerHTML = shelfRows(); balance(); });\n}\n\n/* ---------- sheets (Back, never Close) and the toast ---------- */\nvar lastFocus = null, toastT = null;\nfunction openSheet(title, html) {\n  lastFocus = document.activeElement;\n  S.sheetHtml = '<div class=\"ohead\"><button class=\"walk\" data-act=\"close\"><span class=\"ar\">\\u2190</span> <span class=\"u\">Back to ' + viewName() + '</span></button><span class=\"lk\" id=\"gSheetT\">' + title + '</span></div><div class=\"obody\">' + html + '</div>';\n  S.sheet = title;\n  var sh = $('gSheet'); sh.innerHTML = S.sheetHtml; sh.classList.add('open'); $('gDim').classList.add('on');\n  setTimeout(function () { var c = sh.querySelector('[data-act=close]'); if (c) c.focus(); }, 320);\n}\nfunction sheetBody(html) { var ob = ROOT.querySelector('#gSheet .obody'); if (ob) { ob.innerHTML = html; S.sheetHtml = $('gSheet').innerHTML; } }\nfunction closeSheet() {\n  var sh = $('gSheet'); if (sh) sh.classList.remove('open'); var dm = $('gDim'); if (dm) dm.classList.remove('on'); S.sheet = ''; S.sheetHtml = '';\n  if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus(); else { var h = $('gH1'); if (h) h.focus({ preventScroll: true }); }\n}\nfunction toast(m) { var t = $('gToast'); S.toastM = m; if (t) { t.textContent = m; t.classList.add('in'); } clearTimeout(toastT); toastT = setTimeout(function () { S.toastM = ''; var t2 = $('gToast'); if (t2) t2.classList.remove('in'); }, 2800); }\nfunction shelfSheet() {\n  var e = pieceById(S.sheetId); if (!e) return '<p class=\"s\">This piece is not on The Shelf any more.</p>';\n  var R = D.room || {}, d = R.weekday || 'the night', M = D.mine || {};\n  var isRoom = D.piece && D.piece.id === e.id && M.choice === 'bring';\n  var h = pieceF(e, 'shelf');\n  if (S.sheetFrom === 'craft' || D.after) return h;\n  h += '<div class=\"part\"><p class=\"lk\">For Your Room ' + esc(d) + '?</p>';\n  var isTeam = D.team && D.team.id === e.id;\n  if (isRoom) h += '<p class=\"kept\" id=\"sbk\" tabindex=\"-1\"><b>Kept.</b> ' + (M.swap ? 'It\\u2019s your piece for ' + esc(d) + ' now, in place of the one our team chose. This Week shows it, ready.' : 'It\\u2019s the piece you\\u2019re bringing ' + esc(d) + '.') + '</p><div class=\"walks\">' + walk('seeweek', 'See This Week') + '</div>' + (M.swap && D.team ? '<div class=\"walks\">' + walk('sbring', 'Go back to the piece our team chose', ' data-v=\"back\"') + '</div>' : '');\n  else h += '<div class=\"choices two\">' + choice('sbring', '1', isTeam ? 'Bring it' : 'Bring this one instead', false) + choice('sbring', '0', 'Not now', S.sbk === '0') + '</div>' + (S.sbk === '0' ? '<p class=\"kept\" id=\"sbk\" tabindex=\"-1\"><b>Kept.</b> It stays on The Shelf. ' + (M.choice === 'bring' && D.piece ? 'You\\u2019re still bringing \\u201c' + tie(String(D.piece.claim).replace(/\\.$/, '')) + '.\\u201d' : '') + '</p>' : '');\n  return h + '</div>';\n}\nfunction settingsHtml() {\n  var v = D.who.notice === 'none' ? 'none' : 'email';\n  return '<p class=\"t\">When a piece lands for your room</p><div class=\"choices\">' + choice('notice', 'email', 'Email me', v === 'email', 'left') + choice('notice', 'none', 'No notice', v === 'none', 'left') + '</div><p class=\"kept\" id=\"sk\" tabindex=\"-1\">' + (S.sk || '') + '</p>';\n}\nfunction roomsHtml() {\n  return '<a class=\"mi room\" href=\"' + PATHS.page + '\"><b>Your Page</b><span>Walk your own road</span></a><div class=\"mi room\" aria-current=\"page\"><b>Your Growth</b><span>Get filled for the work</span></div><a class=\"mi room\" href=\"' + PATHS.desk + '\"><b>Your Desk</b><span>Care for your men</span></a>';\n}\nfunction askHtml() {\n  return S.teamSent ? '<p class=\"t\">Sent.</p><p class=\"s\">Our team has your question and answers you on Your Desk.</p><div class=\"walks\">' + walk('askagain', 'Ask another') + '</div>' : '<label class=\"t\" for=\"askteam\" style=\"display:block\">What would you like to ask our team?</label><textarea id=\"askteam\" placeholder=\"About your room, a man, or a piece.\"></textarea><button class=\"btn\" data-act=\"asksend\">Send to our team</button>';\n}\n\n/* ---------- the taps ---------- */\nfunction fail(e) { toast(words(e)); }\nfunction listIndex(arr, id) { for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return i; return -1; }\nfunction bringPiece(id) {\n  var p = pieceById(id); if (!p) return;\n  call({ action: 'mark', what: 'bring', id: id }).then(function () { refresh(); }, fail);\n  D.piece = p; D.mine = D.mine || {}; D.mine.choice = 'bring'; D.mine.opened = true; D.mine.swap = !(D.team && D.team.id === id); S.change = false;\n}\ndocument.addEventListener('keydown', function (e) {\n  var sh = $('gSheet'); if (!sh || !sh.classList.contains('open')) return;\n  if (e.key === 'Escape') { closeSheet(); return; }\n  if (e.key === 'Tab') {\n    var f = [].slice.call(sh.querySelectorAll('button,a,textarea,input')).filter(function (x) { return x.offsetParent !== null; }); if (!f.length) return;\n    var a = f[0], z = f[f.length - 1];\n    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } else if (!sh.contains(document.activeElement)) { e.preventDefault(); a.focus(); }\n  }\n});\nhost.addEventListener('click', function (ev) {\n  var b = ev.target.closest('[data-act]'); if (!b || !D) return;\n  var a = b.dataset.act, k = b.dataset.k, v = b.dataset.v;\n  switch (a) {\n    case 'tab': S.view = b.dataset.tab; closeSheet(); render(); window.scrollTo(0, 0); break;\n    case 'rooms': openSheet('Your Rooms', roomsHtml()); break;\n    case 'panel': panelSet(k, b.getAttribute('aria-expanded') !== 'true'); balance(); break;\n    case 'toggle':\n      if (k === 'shelfmore') { S.shelfMore = !S.shelfMore; $('shelfRows').innerHTML = shelfRows(); balance(); break; }\n      S.open[k] = !S.open[k]; var box = b.nextElementSibling; box.classList.toggle('open', S.open[k]); b.setAttribute('aria-expanded', S.open[k]); b.lastChild.textContent = ' ' + (S.open[k] ? '\\u25b4' : '\\u25be'); balance(); break;\n    case 'listen':\n      var P = shownPiece(); if (!P) break;\n      try { window.open(P.link, '_blank', 'noopener'); } catch (x) {}\n      D.mine.opened = true; call({ action: 'mark', what: 'open', id: P.id }).catch(function () {}); render(true); break;\n    case 'bring':\n      var BP = teamPiece() || D.piece; if (!BP) break;\n      if (v === 'bring') { bringPiece(BP.id); }\n      else { call({ action: 'growth_answer', kind: 'setaside', id: BP.id, text: 'Week ' + (D.room ? D.room.week : ''), answer: 'not needed' }).then(function () { refresh(); }, fail); D.mine.choice = 'no'; S.change = false; D.piece = BP; }\n      render(true); if (v === 'bring') toast('Kept. It\\u2019s on Your Desk for the night.'); break;\n    case 'bringchange': S.change = true; render(true); break;\n    case 'shelfweek': S.view = 'shelf'; S.filt = !!(D.room && D.room.week); closeSheet(); render(); window.scrollTo(0, 0); break;\n    case 'after':\n      var al = $('aline'); if (al) S.afterLine = al.value; S.afterWord = v; render(true); break;\n    case 'afterkeep':\n      var t = $('aline'); S.afterLine = t ? t.value.trim() : '';\n      if (!S.afterWord) { toast('Choose what the room did with it first.'); break; }\n      if (b.disabled) break; b.disabled = true;\n      call({ action: 'growth_answer', kind: 'after', id: D.after.id, text: S.afterLine, answer: S.afterWord }).then(function () {\n        D.after.kept = true; D.after.word = S.afterWord; D.after.line = S.afterLine; S.afterWord = ''; S.afterLine = ''; render(true); refresh();\n      }, function (e) { b.disabled = false; fail(e); }); break;\n    case 'ask':\n      var q = $('askt'); if (!q.value.trim()) { toast('Write a line first.'); q.focus(); break; }\n      S.ask = q.value.trim(); b.disabled = true; b.textContent = 'Asking\\u2026';\n      call({ action: 'ask', text: S.ask }).then(function (r) { S.asked = true; S.askIdx = 0; S.askIds = r.ids || []; S.askQ = r.question || ''; render(true); var ao = $('askout'); if (ao) ao.focus({ preventScroll: true }); }, function (e) { b.disabled = false; b.textContent = 'Ask'; fail(e); }); break;\n    case 'asknext': S.askIdx++; render(true); var ao2 = $('askout'); if (ao2) ao2.focus({ preventScroll: true }); break;\n    case 'openpiece': S.sheetId = b.dataset.id; S.sheetFrom = b.dataset.from || ''; S.sbk = ''; openSheet('A piece from The Shelf', shelfSheet()); break;\n    case 'sbring':\n      var sid = S.sheetId, TP = D.team ? D.team.id : '';\n      if (v === '1') { bringPiece(sid); S.sbk = '1'; }\n      else if (v === 'back') { bringPiece(TP); S.sbk = '1'; }\n      else { call({ action: 'growth_answer', kind: 'setaside', id: sid, text: D.room ? 'Week ' + D.room.week : '', answer: 'not now' }).then(function () { refresh(); }, fail); S.sbk = '0'; }\n      sheetBody(shelfSheet()); render(true); var sk = ROOT.querySelector('#gSheet #sbk'); if (sk) sk.focus(); break;\n    case 'seeweek': S.view = 'week'; closeSheet(); render(); window.scrollTo(0, 0); break;\n    case 'close': closeSheet(); break;\n    case 'gowho':\n      var pw = $('p-who'); if (pw) { if (pw.classList.contains('shut')) panelSet('who', true); balance(); pw = $('p-who'); var hb = pw.querySelector('.ap-panel-head'); window.scrollTo(0, pw.getBoundingClientRect().top + window.pageYOffset - barH() - 12); if (hb) hb.focus({ preventScroll: true }); } break;\n    case 'filt': S.filt = !!v; S.shelfMore = false; render(true); var fc = ROOT.querySelector('.fchip'); if (fc) fc.focus(); break;\n    case 'less':\n      var lane = (D.lanes || [])[Number(v)]; if (!lane) break;\n      var on = (D.less || []).indexOf(lane.lane) < 0;\n      D.less = (D.less || []).filter(function (x) { return x !== lane.lane; }); if (on) D.less.push(lane.lane); S.open.lanes = true;\n      call({ action: 'growth_answer', kind: 'less', text: lane.lane, answer: on ? 'on' : 'off' }).catch(fail); render(true); break;\n    case 'rec':\n      var r = $('rect'); S.rec = r.value.trim(); if (!S.rec) { toast('Add a name, a show or a link first.'); break; }\n      b.disabled = true; call({ action: 'growth_answer', kind: 'voice', text: S.rec }).then(function () { S.recSent = true; render(true); }, function (e) { b.disabled = false; fail(e); }); break;\n    case 'settings': S.sk = ''; openSheet('Settings', settingsHtml()); break;\n    case 'notice':\n      D.who.notice = v; S.sk = '<b>Kept.</b> ' + (v === 'email' ? 'An email comes when your room\\u2019s piece lands.' : 'No notice. It waits here.');\n      call({ action: 'growth_answer', kind: 'notice', answer: v }).catch(fail); sheetBody(settingsHtml()); var sk2 = ROOT.querySelector('#gSheet #sk'); if (sk2) sk2.focus(); break;\n    case 'askteam': S.teamSent = false; openSheet('Ask Our Team', askHtml()); break;\n    case 'asksend':\n      var aq = $('askteam'); if (!aq.value.trim()) { toast('Write your question first.'); break; }\n      b.disabled = true; call({ action: 'growth_answer', kind: 'team', text: aq.value.trim() }).then(function () { S.teamSent = true; sheetBody(askHtml()); }, function (e) { b.disabled = false; fail(e); }); break;\n    case 'askagain': S.teamSent = false; sheetBody(askHtml()); break;\n  }\n});\nwindow.addEventListener('resize', function () { setBar(); if (D) balance(); });\n\n/* AP-SHIP 1, line 7: the page counts the rules the browser accepted against the stamped count; short, it tells the Front Desk once per build (kept in this browser so it never repeats) and the desk shows one line with the link. */\nfunction selfCheck() {\n  if (location.pathname.indexOf('/author') >= 0 || window.top !== window) return;\n  var short = [], got = 0, want = 0;\n  Object.keys(RULES).forEach(function (k) {\n    var st = document.querySelector('style[data-ap-sheet=\"' + k + '\"]'), n = -1;\n    try { n = st && st.sheet ? st.sheet.cssRules.length : -1; } catch (e) { n = -1; }\n    got += Math.max(0, n); want += RULES[k];\n    if (n < RULES[k]) short.push(k + ' ' + n + ' of ' + RULES[k]);\n  });\n  if (!short.length) return;\n  var key = 'ap_check_growth_' + BUILD;\n  try { if (localStorage.getItem(key)) return; localStorage.setItem(key, String(Date.now())); } catch (e) {}\n  fetch(DESK_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'page_check', page: location.pathname, name: 'Your Growth', build: BUILD, accepted: got, expected: want, detail: short.join(', '), ua: String(navigator.userAgent || '').slice(0, 120) }) }).catch(function () {});\n}\nif (document.readyState === 'complete') setTimeout(selfCheck, 0); else window.addEventListener('load', selfCheck);\nwindow.growthBuild = BUILD;\n(function start(tries) { if (!lwMe() && tries < 12) return setTimeout(function () { start(tries + 1); }, 300); load(); })(0);\n})();\n";

/* ═══════════════════════════════ row.js build 3 (served at ?file=row.js, the picture addresses filled in by rowJs_) ═══════════════════════════════ */
var ROW_JS = "/* AP-ROW row.js build 3.1 — one band, three rooms. Served by the Research reader script (?file=row.js), loaded on /front-desk and /start; /your-growth draws its own band and is the standard.\n   Build 3 (Oct 21, 2026, John: \"we need a consistent ui\"): Your Growth's band becomes the house band on Your Page and Your Desk — a picture full width above the band when one is set\n   (Config \"band picture page\" / \"band picture desk\"), then the dark band left-aligned: the eyebrow, the greeting with his name, one line, Your Page's three stops as its own line, and the row.\n   The row Your Desk · Your Growth · Your Page shows only in a browser that holds a desk key (a facilitator or admin); a man never sees it. Nothing under the band changes. */\n(function () {\n  if (window.__apRow) return; window.__apRow = true;\n  var PICS = __PICS__;\n  var STORE = 'apDesk', s = null;\n  try { s = JSON.parse(localStorage.getItem(STORE) || 'null'); } catch (e) {}\n  var ROW_URL = (function () { var sc = document.currentScript; var u = sc && sc.src ? String(sc.src).split('?')[0] : ''; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : ''; })();\n  var path = location.pathname.replace(/\\/+$/, '') || '/';\n  var here = path === '/front-desk' ? 'desk' : path === '/your-growth' ? 'growth' : (path === '/start' || path === '/') ? 'page' : '';\n  if (here === 'growth' || !here) return;\n  var root = here === 'desk' ? '#apDesk' : '#apHome';\n\n  var css = document.createElement('style');\n  css.textContent =\n    /* the band, left-aligned, the same measures as Your Growth */\n    root + ' .ap-band, ' + root + ' .ap-band *{text-align:left !important}' +\n    root + ' .ap-band{padding-top:0 !important}' +\n    root + ' .ap-band-in{display:block !important;max-width:980px !important;margin:0 auto !important;padding:36px 24px 0 !important;justify-items:start !important}' +\n    root + ' .ap-band-in .ap-eyebrow{font:600 13px/1.65 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;letter-spacing:3px !important;text-transform:uppercase !important;color:#B8945F !important;margin:0 !important}' +\n    root + ' .ap-band-in .ap-hello{font:600 44px/1.1 \"Source Serif 4\",Georgia,serif !important;color:#F3EDE3 !important;letter-spacing:-0.01em !important;margin:12px 0 0 !important}' +\n    root + ' .ap-band-in .ap-line{font:400 19px/1.5 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;max-width:640px !important;margin:12px 0 0 !important}' +\n    root + ' .ap-band-in .ap-line .ap-s{display:inline !important}' +\n    root + ' .ap-band-in .ap-line-small{display:none !important}' +\n    root + ' .ap-band-in .ap-primary{margin-top:18px !important}' +\n    /* the picture above the band */\n    root + ' .ap-band .apb-hero{display:block;width:100%;height:clamp(180px,26vw,380px);object-fit:cover;object-position:50% 62%;background:#1B2A3A;margin:0}' +\n    /* Your Page's three stops: its own line, left-aligned, one line through the three */\n    root + ' .ap-band-in .ap-stones{display:flex !important;justify-content:flex-start !important;gap:28px !important;margin:22px 0 0 !important;max-width:none !important;width:100% !important;position:relative}' +\n    root + ' .ap-band-in .ap-stones::before{left:0 !important;right:0 !important;top:5px !important}' +\n    root + ' .ap-band-in .ap-stone{flex:1 1 0 !important;padding:0 !important;margin:0 !important;border:0 !important}' +\n    root + ' .ap-band-in .ap-stone-dot{margin:0 0 10px !important}' +\n    root + ' .ap-band-in .ap-stone-word{font:600 14px/1.3 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;letter-spacing:1.5px !important}' +\n    root + ' .ap-band-in .ap-stone-what{display:block !important;font:400 14px/1.5 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;margin-top:4px !important;text-wrap:auto !important}' +\n    /* the row */\n    root + ' .apg-row{display:flex;width:100%;gap:36px;margin-top:18px;border-top:1px solid rgba(243,237,227,.14);padding-top:4px;flex-wrap:wrap;font-family:\"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif}' +\n    root + ' .apg-row a{display:inline-block !important;padding:16px 0 !important;font:400 17px/1.3 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;border-bottom:3px solid transparent !important;text-decoration:none !important}' +\n    root + ' .apg-row a:hover{color:#F3EDE3 !important;text-decoration:none !important}' +\n    root + ' .apg-row a.on{color:#F3EDE3 !important;font-weight:600 !important;border-bottom-color:#B8945F !important}' +\n    root + ' .apg-row a .new{font-weight:400;color:#B8945F}' +\n    /* the band keeps its bottom room when the row is not there */\n    root + ' .ap-band-in .apb-foot{height:36px}' +\n    '@media (max-width:720px){' + root + ' .ap-band-in{padding:28px 16px 0 !important}' + root + ' .ap-band-in .ap-hello{font-size:32px !important}' + root + ' .ap-band-in .ap-line{font-size:17px !important}' +\n    root + ' .ap-band-in .ap-stones{flex-direction:column !important;gap:14px !important}' + root + ' .ap-band-in .ap-stones::before{display:none}' + root + ' .ap-band-in .ap-stone-dot{display:none !important}' +\n    root + ' .apg-row{gap:18px;margin-top:10px;flex-wrap:nowrap}' + root + ' .apg-row a{padding:12px 0 !important;font-size:14px !important;white-space:nowrap}}';\n  document.head.appendChild(css);\n\n  var tries = 0;\n  function place() {\n    var band = document.querySelector(root + ' .ap-band'), inner = band && (band.querySelector('.ap-band-in') || band);\n    if (!inner) { if (tries++ < 60) return setTimeout(place, 250); return; }\n    if (inner.getAttribute('data-apb')) return;\n    inner.setAttribute('data-apb', '3.1');\n    /* the picture, when one is set for this room */\n    var pic = PICS && PICS[here];\n    if (pic && !band.querySelector('.apb-hero')) { var img = document.createElement('img'); img.className = 'apb-hero'; img.src = pic; img.alt = ''; img.decoding = 'async'; band.insertBefore(img, band.firstChild); }\n    /* Your Page: the small line folds into the one line under the greeting; the stops stay as their own line */\n    if (here === 'page') {\n      var promise = inner.querySelector('.ap-promise'), small = inner.querySelector('.ap-line-small');\n      if (promise && small && !promise.getAttribute('data-apb')) { promise.setAttribute('data-apb', '1'); var t = (small.textContent || '').replace(/\\s+/g, ' ').trim(); if (t) promise.appendChild(document.createTextNode(' ' + t)); }\n    }\n    /* the row: desk holders only */\n    if (s && s.key) {\n      if (!inner.querySelector('.apg-row')) {\n        var nav = document.createElement('nav');\n        nav.className = 'apg-row'; nav.setAttribute('aria-label', 'Your rooms');\n        nav.innerHTML = '<a href=\"/front-desk\"' + (here === 'desk' ? ' class=\"on\"' : '') + '>Your Desk</a>' +\n          '<a href=\"/your-growth\" id=\"apgRowGrowth\">Your Growth</a>' +\n          '<a href=\"/start\"' + (here === 'page' ? ' class=\"on\"' : '') + '>Your Page</a>';\n        inner.appendChild(nav);\n        if (ROW_URL) {\n          fetch(ROW_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'new', key: s.key }), credentials: 'omit' })\n            .then(function (r) { return r.json(); }).then(function (r) { if (r && r.ok && r.fresh) { var a = document.getElementById('apgRowGrowth'); if (a) a.innerHTML = 'Your Growth <span class=\"new\">· 1 new</span>'; } }).catch(function () {});\n        }\n      }\n    } else if (!inner.querySelector('.apb-foot')) { var f = document.createElement('div'); f.className = 'apb-foot'; inner.appendChild(f); }\n    align(band, inner); window.addEventListener('resize', function () { align(band, inner); });\n    setTimeout(function () { align(band, inner); }, 1200);\n  }\n  /* the band's words start where the page's own content starts, measured, so the two edges never drift apart */\n  function align(band, inner) {\n    var list = Array.prototype.slice.call(document.querySelectorAll(here === 'page' ? '#apHome .ap-why, #apHome #apPrimaryRow, #apHome .ap-sec' : '#apDesk .wrap'));\n    var ref = null; for (var i = 0; i < list.length; i++) { var r = list[i].getBoundingClientRect(); if (list[i].offsetParent !== null && r.width > 0) { ref = list[i]; break; } }\n    if (!ref) return;\n    var want = ref.getBoundingClientRect().left, have = band.getBoundingClientRect().left;\n    var pad = Math.round(want - have);\n    if (!(pad > 0) || pad > window.innerWidth / 2) return;\n    inner.style.setProperty('max-width', 'none', 'important'); inner.style.setProperty('padding-left', pad + 'px', 'important'); inner.style.setProperty('padding-right', pad + 'px', 'important');\n  }\n  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', place); else place();\n})();\n";

/* ═══════════════════════════════ build 4 · For his road (served at ?file=road.js, actions road / road_open / road_word / road_answer) ═══════════════════════════════
 * The same shelf, a second door: on a man's Your Page, one released piece a week chosen for where he is on the road, with the man's
 * version of the entry (Entries X key words · Y what it means for your road · Z one thing to do · AA the question back), the two words
 * This met me / Not for me, and a question back whose answer goes to the Front Desk as a card and is read by a person before anything
 * else happens with it (RE14). Who gets it: the Learners tab (the Room tab's men on their own, anyone else by hand). The week turns on
 * the man's room's day (from the Rooms tab, never a weekday in this file) or, with no room, on the weekday his door opened.
 * Nothing of the room is shown, nothing is mailed, and the engine reads what he opens, presses and types here — never his saved writing. */
var ROAD_BUILD = '11.1.2';
/* build 10.1 (Oct 28, 2026, Your Page build 37, "one week spine"): the road answers every signed-in man. A man with no Learners row, or a closed one, gets a bare road
 * (ok, bare, and a land that carries only the pictures and the five places; nothing of his own is read or written for him). road_ui writes nothing for him.
 * The band comes with the road: bandOut_ says where he is (the room's course, the week of how many, the week's own name from the Course map, the room's next
 * night and hour from the Rooms tab, the story work the Course map has introduced up to his week) and the page's band is built from it. The land is no longer
 * gated by Config "land" (landOn_ is true for every man with a row) and carries the readings he opened. */
/* build 10, the man's row: F reads as lead course; O lead started · P second course · Q second started · R lead unit · S second unit · T notice · U reader */
var LC = { email: 1, name: 2, lwid: 3, how: 4, room: 5, course: 6, door: 7, freeUntil: 8, status: 9, firstSeen: 10, lastSeen: 11, pieces: 12, note: 13, pace: 14, leadStarted: 15, second: 16, secondStarted: 17, leadUnit: 18, secondUnit: 19, notice: 20, reader: 21, reminders: 22, shares: 23, notesPaused: 24 };
var LC_HEAD = ['email', 'name', 'lw id', 'how', 'room', 'lead course', 'door (yyyy-mm-dd)', 'free until', 'status', 'first seen', 'last seen', 'pieces', 'note', 'pace', 'lead started (yyyy-mm-dd)', 'second course', 'second started (yyyy-mm-dd)', 'lead unit', 'second unit', 'notice (email · page)', 'reader', 'reminders', 'shares', 'notes paused'];
var NOTICES = { email: 'One line by email', page: 'Only on this page' };
var NOTICE_ORDER = ['email', 'page'];
function noticeKey_(v) { var t = String(v == null ? '' : v).toLowerCase().trim(); if (!t) return ''; for (var i = 0; i < NOTICE_ORDER.length; i++) { var k = NOTICE_ORDER[i]; if (t === k || t === NOTICES[k].toLowerCase()) return k; } return /page/.test(t) ? 'page' : /mail/.test(t) ? 'email' : ''; }
function noticeList_() { return NOTICE_ORDER.map(function (k) { return { key: k, label: NOTICES[k] }; }); }
/* build 10.2.3: how often he asks to be reminded of his practice (Learners column V "reminders"). Column N "pace" is how many pieces of reading he is handed a week and column T "notice" is how he is told when one lands; neither is reused. This build saves the choice only; the reminder email ships with the next build. */
var REMINDERS = { twice: 'Twice a day', daily: 'Each day', few: 'A few days a week', weekly: 'Once a week' };
var REMIND_ORDER = ['twice', 'daily', 'few', 'weekly'];
function remindKey_(v) { var t = String(v == null ? '' : v).toLowerCase().trim(); if (!t) return ''; for (var i = 0; i < REMIND_ORDER.length; i++) { var k = REMIND_ORDER[i]; if (t === k || t === REMINDERS[k].toLowerCase()) return k; } return ''; }
var WHENS = { morning: 'Each morning', pull: 'When the pull comes', bed: 'Before bed' };
var RC = { when: 1, email: 2, entryId: 3, what: 4, text: 5, week: 6, build: 7 };
var RC_HEAD = ['when', 'email', 'entry id', 'what', 'text', 'week (its first day)', 'build'];
/* build 9: the pace. cap = the most pieces in a week, perDay = the most in a day. The words are the man's own; the sheet holds them. */
var PACES = {
  three: { cap: 3,  perDay: 1, label: 'Three a week' },
  daily: { cap: 7,  perDay: 1, label: 'Daily' },
  twice: { cap: 14, perDay: 2, label: 'Up to twice a day' }
};
var PACE_ORDER = ['three', 'daily', 'twice'];
var PACE_LEGACY = { 'week': 'three', 'one a week': 'three', 'day': 'twice', 'up to two a day': 'twice', 'up to three a week': 'three' };
/** A pace key from a key or its label, any case; '' when it is neither (blank means One a week). */
function paceKey_(v) {
  var t = String(v == null ? '' : v).toLowerCase().trim(); if (!t) return '';
  for (var i = 0; i < PACE_ORDER.length; i++) { var k = PACE_ORDER[i]; if (t === k || t === PACES[k].label.toLowerCase()) return k; }
  return PACE_LEGACY[t] || '';
}
function paceList_() { return PACE_ORDER.map(function (k) { return { key: k, label: PACES[k].label }; }); }
/** How many pieces may be handed now. The week's allowance grows with the days: ceil(days in × cap ÷ 7), never above the cap; never more than perDay in one day. */
function paceGive_(key, dayIndex, weekN, todayN) {
  var P = PACES[key] || PACES.three;
  var di = Math.max(0, Math.min(6, dayIndex || 0));
  var allowed = Math.min(P.cap, Math.ceil((di + 1) * P.cap / 7));
  return Math.max(0, Math.min(allowed - (weekN || 0), P.perDay - (todayN || 0)));
}
/** Road rows newest first: the Road tab only grows at the foot, so the order of the rows is the order of time. (Date text sorts wrongly: "Nov" < "Oct".) */
function newestFirst_(list) { return list.slice().reverse(); }
var LPACE_OK_ = false;
/** The Learners tab with its pace column in place (adds the column and its pick list the first time; every call after is one cheap check). */
/** The Learners tab with every column of the row in place (build 10: the seven columns O–U add themselves the first time; every call after is one cheap check). */
function learnersSheet_(ss) {
  var sh = ss.getSheetByName('Learners'); if (!sh) return null;
  if (LPACE_OK_) return sh;
  if (sh.getMaxColumns() < LC.notesPaused) sh.insertColumnsAfter(sh.getMaxColumns(), LC.notesPaused - sh.getMaxColumns());
  var head = sh.getRange(1, 1, 1, LC.notesPaused).getValues()[0], added = [];
  for (var c = LC.pace; c <= LC.notesPaused; c++) { if (!String(head[c - 1] || '').trim()) { sh.getRange(1, c).setValue(LC_HEAD[c - 1]); added.push(LC_HEAD[c - 1].split(' (')[0]); } }
  if (/^course$/i.test(String(head[LC.course - 1] || '').trim())) { sh.getRange(1, LC.course).setValue(LC_HEAD[LC.course - 1]); added.push('course → lead course'); }
  if (added.length) log_(ss, 'road', 'build 10', 'Learners columns: ' + added.join(', '));
  try {
    var pr2 = PropertiesService.getScriptProperties();
    if (pr2.getProperty('rem1023') !== '1') { sh.getRange(2, LC.reminders, Math.max(1, sh.getMaxRows() - 1), 1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(REMIND_ORDER.map(function (k) { return REMINDERS[k]; }), true).setAllowInvalid(true).build()); pr2.setProperty('rem1023', '1'); }
  } catch (xr) {}
  var props = PropertiesService.getScriptProperties();
  if (added.length || props.getProperty('pace10') !== '1') {
    try {
      var n = Math.max(1, sh.getMaxRows() - 1);
      sh.getRange(2, LC.pace, n, 1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(PACE_ORDER.map(function (k) { return PACES[k].label; }), true).setAllowInvalid(true).build());
      sh.getRange(2, LC.notice, n, 1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(NOTICE_ORDER.map(function (k) { return NOTICES[k]; }), true).setAllowInvalid(true).build());
      props.setProperty('pace10', '1');
    } catch (xv) {}
  }
  LPACE_OK_ = true; return sh;
}
var CONFIG_4 = [
  ['road door opens', '2026-11-04', 'build 4: the day the section shows for a man who came from a room (a Learners row can carry its own door)'],
  ['road free until', '2026-12-31', 'build 4: the last free day for the beta men; the foot of the section says so'],
  ['road price', '$19 a month from January 1, 2027', 'build 4: the words after the free stretch; the offer itself is built in the site builder in December'],
  ['road review window', 'two days', 'build 4: the promise the page makes about an answer being read by a person; the desk card is the reading'],
  ['road model', 'claude-sonnet-4-5', 'build 4: the model that writes the man\'s version of an entry (Entries X–AA) each morning; John reads it before he releases'],
  ['road lines per day', '10', 'build 4: the most entries whose man\'s lines are written in one morning'],
  ['road lead', '', 'build 4: the line under the section\'s heading; blank uses the page\'s own'],
  ['road foot', '', 'build 4: the line at the foot of the section; blank builds it from "road free until" and "road price"'],
  ['road daily', '6', 'build 4: the hour (Central, 24-hour for the script only) roadDaily runs: lines written, the week\'s pieces given, the Room tab read']
];
var RULES_4 = {
  'RE14': ['For his road: nothing reaches a man\'s page that our team has not released. Every answer he sends is read by a person before anything else happens with it (a card on the Front Desk, Done when read). The engine reads what he opens, presses and types into its box, never his saved writing. Nothing of the room is shown on his page and nothing is mailed to him. The question back carries the limit of confidentiality and the adults line at its foot (When Someone Tells You, sections 4 and 8).', 'build 4']
};
var STANDARD_4 = {
  'key words': ['key words', 'the course key words, terms and teaching concepts this entry touches, comma-separated, as the courses name them; the man\'s piece is chosen against his course week and these', 'build 4 (X)'],
  'for his road': ['for his road', 'what it means for your road, written to the man: two to four plain sentences that carry the course\'s own words for the week it serves and the verse, no names, never "brother"', 'build 4 (Y)'],
  'one thing to do': ['one thing to do', 'one thing he can do this week before his group meets, one or two sentences, imperative, plain', 'build 4 (Z)'],
  'question back': ['question back', 'one question the piece asks him back, answerable in a few lines, about his own week, never about another person by name', 'build 4 (AA)']
};

function applyBuild4() { PropertiesService.getScriptProperties().deleteProperty('b4'); ensureBuild4_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild4_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b4') === '1') return;
  var did = [];
  var en = ss.getSheetByName('Entries');
  if (en) { widen_(en, EC.question2); var eh = en.getRange(1, EC.keywords, 1, 4).getValues()[0]; if (!eh[0]) { en.getRange(1, EC.keywords, 1, 4).setValues([['key words', 'for his road', 'one thing to do', 'question back']]); did.push('Entries X–AA'); } }
  if (!ss.getSheetByName('Learners')) { var le = ss.insertSheet('Learners'); le.getRange(1, 1, 1, LC_HEAD.length).setValues([LC_HEAD]); le.setFrozenRows(1); did.push('Learners tab'); }
  if (!ss.getSheetByName('Road')) { var ro = ss.insertSheet('Road'); ro.getRange(1, 1, 1, RC_HEAD.length).setValues([RC_HEAD]); ro.setFrozenRows(1); did.push('Road tab'); }
  var cfg = readConfig_(ss);
  CONFIG_4.forEach(function (r) { if (!(r[0] in cfg)) { ss.getSheetByName('Config').appendRow(r); did.push('Config ' + r[0]); } });
  var ru = ss.getSheetByName('Rules');
  if (ru) {
    var rv = ru.getRange(1, 1, Math.max(1, ru.getLastRow()), 1).getValues(), seen = {};
    for (var i = 0; i < rv.length; i++) { var k = String(rv[i][0] || '').trim(); if (RULES_4[k]) { ru.getRange(i + 1, 2, 1, 2).setValues([RULES_4[k]]); seen[k] = 1; } }
    Object.keys(RULES_4).forEach(function (k) { if (!seen[k]) { ru.appendRow([k, RULES_4[k][0], RULES_4[k][1]]); did.push(k + ' added'); } });
  }
  var st = ss.getSheetByName('Standard');
  if (st) {
    var sv = st.getRange(1, 1, Math.max(1, st.getLastRow()), 1).getValues(), have = {};
    for (var j = 0; j < sv.length; j++) { var kk = String(sv[j][0] || '').toLowerCase().trim(); if (STANDARD_4[kk]) have[kk] = 1; }
    Object.keys(STANDARD_4).forEach(function (key) { if (!have[key]) { st.appendRow(STANDARD_4[key]); did.push('Standard ' + key); } });
  }
  props.setProperty('b4', '1');
  log_(ss, 'build 4', 'made: ' + (did.join(', ') || 'nothing new'));
}
function roadTrigger_(cfg) {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'roadDaily') ScriptApp.deleteTrigger(t); });
  var hour = parseInt(cfg['road daily'], 10); if (isNaN(hour) || hour < 0 || hour > 23) hour = 6;
  ScriptApp.newTrigger('roadDaily').timeBased().atHour(hour).everyDays(1).inTimezone(RE_TZ).create();
  return hour;
}

/* ---- the morning: lines written, the Room tab's men on Learners, the week's piece given ---- */
/* ---- the morning: lines written, the Room tab's men on Learners, each man's row brought up to date, the week's pieces given by the lead/second rule ---- */
function roadDaily() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
  ensureBuild4_(ss); ensureBuild10_(ss);
  var acts = 0; try { acts = roadActs_(ss); } catch (ea) { log_(ss, 'road', 'acts', String(ea).slice(0, 160)); }
  var wrote = roadWriteLines_(ss, cfg, toInt_(cfg['road lines per day'], 10));
  var added = roadSyncRoom_(ss, cfg);
  var given = 0, notify = {}, map = courseMap_(ss);
  learners_(ss).forEach(function (L) {
    if (L.status !== 'open') return;
    try { roadRowUpkeep_(ss, cfg, L, map); } catch (eu) { log_(ss, 'road', 'row upkeep: ' + L.email, String(eu && eu.stack || eu).slice(0, 160)); }
    try { var r = roadFor_(ss, cfg, L, true); if (r && r.givenNow) { given++; notify[L.email] = L; } } catch (e) { log_(ss, 'road', 'daily: ' + L.email, String(e && e.code || e).slice(0, 120)); }
  });
  var words = 0; try { ensureBuild5_(ss); words = roadWords_(ss, cfg, 10, notify); } catch (ew) { log_(ss, 'road', 'words', String(ew && ew.stack || ew).slice(0, 200)); }
  var sent = 0; Object.keys(notify).forEach(function (em) { if (roadNotice_(ss, cfg, notify[em])) sent++; });
  log_(ss, 'road', 'daily', wrote + ' entries given their lines · ' + acts + ' acts set · ' + added + ' learners added from the Room tab · ' + given + ' pieces given today · ' + words + ' words written · ' + sent + ' notices sent');
}
/** The Room tab's men become Learners rows on their own (how = room); a row already there is left as it is. Build 10: the row carries the room's first night as lead started and the room's reader. */
function roadSyncRoom_(ss, cfg) {
  var added = 0;
  try {
    var sh = deskSheet_().getSheetByName('Room'); if (!sh || sh.getLastRow() < 2) return 0;
    var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
    var have = {}; learners_(ss).forEach(function (L) { have[L.email] = 1; });
    var le = learnersSheet_(ss);
    data.forEach(function (r) {
      var email = String(r[H['email']] || '').toLowerCase().trim(); if (!email || have[email]) return;
      var room = String(r[H['room']] || '').trim(), rr = room ? roomRow_({ room: room }) : null;
      var row = [email, String(r[H['name']] || '').trim(), '', 'room', room, roomCourse_(room), cfg['road door opens'] || '', cfg['road free until'] || '', 'open', stamp_(new Date()), '', 0, 'from the Room tab', '', rr && rr.first ? rr.first : '', '', '', '', '', '', readerFor_(room)];
      le.appendRow(row);
      have[email] = 1; added++;
    });
  } catch (e) { log_(ss, 'road', 'room sync failed', String(e).slice(0, 160)); }
  return added;
}
function roomCourse_(room) { try { var r = roomRow_({ room: room }); return r ? r.room.split(/\s+[—–-]\s+/)[0].trim() : ''; } catch (e) { return ''; } }
/** The reader of a man in a room, by rule: the facilitator on the People tab with that room, else the admin with it; '' when the room has no one. Shown nowhere a man reads. */
function readerPerson_(room) {
  if (!room) return null;
  try {
    var ps = people_().filter(function (p) { return p.room && sameRoom_(p.room, room); });
    return ps.filter(function (p) { return p.role === 'facilitator'; })[0] || ps.filter(function (p) { return p.role === 'admin'; })[0] || null;
  } catch (e) { return null; }
}
function readerFor_(room) {
  var f = readerPerson_(room);
  return f ? (f.name || f.email) : '';
}
function learners_(ss) {
  var sh = learnersSheet_(ss); if (!sh || sh.getLastRow() < 2) return [];
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, LC.notesPaused).getValues(), out = [];
  data.forEach(function (r, i) {
    var email = String(r[LC.email - 1] || '').toLowerCase().trim(); if (!email) return;
    out.push({ row: i + 2, email: email, name: String(r[LC.name - 1] || '').trim(), lwid: String(r[LC.lwid - 1] || '').trim(), how: String(r[LC.how - 1] || ''), room: String(r[LC.room - 1] || '').trim(), course: String(r[LC.course - 1] || '').trim(),
      door: isoDay_(r[LC.door - 1]), freeUntil: isoDay_(r[LC.freeUntil - 1]), status: String(r[LC.status - 1] || 'open').toLowerCase().trim() || 'open', pieces: Number(r[LC.pieces - 1] || 0) || 0, lastSeen: r[LC.lastSeen - 1], pace: paceKey_(r[LC.pace - 1]),
      leadStarted: isoDay_(r[LC.leadStarted - 1]), second: String(r[LC.second - 1] || '').trim(), secondStarted: isoDay_(r[LC.secondStarted - 1]), leadUnit: Number(r[LC.leadUnit - 1] || 0) || 0, secondUnit: Number(r[LC.secondUnit - 1] || 0) || 0,
      notice: noticeKey_(r[LC.notice - 1]), reader: String(r[LC.reader - 1] || '').trim(), reminders: remindKey_(r[LC.reminders - 1]), shares: sharesOf_(r[LC.shares - 1]), sharesCell: String(r[LC.shares - 1] || '').trim(), notesPaused: /^(y|yes|true|paused)/i.test(String(r[LC.notesPaused - 1] || '').trim()) });
  });
  return out;
}
/** Each morning the row is brought up to date from the record it reads: lead started from the room's first night, the reader from the People tab, the two units by the start-date rule. Nothing he chose is touched. */
function roadRowUpkeep_(ss, cfg, L, map) {
  var sh = learnersSheet_(ss), set = {};
  var rr = L.room ? roomRow_({ room: L.room }) : null;
  if (!L.course && rr) { L.course = roomCourse_(L.room); set[LC.course] = L.course; }
  if (!L.leadStarted && rr && rr.first && sameCourse_(L.course, roomCourse_(L.room))) { L.leadStarted = rr.first; set[LC.leadStarted] = rr.first; }
  if (!L.reader && L.room) { var rd = readerFor_(L.room); if (rd) { L.reader = rd; set[LC.reader] = rd; } }
  var C = roadCourses_(cfg, L, map);
  var lu = C.lead ? C.lead.unit : 0, su = C.second ? C.second.unit : 0;
  if (lu !== L.leadUnit) { L.leadUnit = lu; set[LC.leadUnit] = lu || ''; }
  if (su !== L.secondUnit) { L.secondUnit = su; set[LC.secondUnit] = su || ''; }
  Object.keys(set).forEach(function (c) { sh.getRange(L.row, Number(c)).setValue(set[c]); });
}
/** The Room tab's men become Learners rows on their own (how = room); a row already there is left as it is. */
/** Who is asking: the site's account as the page read it (email and LearnWorlds id). A Learners row binds to the first id it sees; another id with that email is turned away. */
function learnerFor_(ss, cfg, b) {
  var email = String(b.email || '').toLowerCase().trim(), lwid = String(b.lwid || '').trim();
  if (!email || email.indexOf('@') < 0) throw { code: 'no_learner' };
  var L = learners_(ss).filter(function (x) { return x.email === email; })[0];
  if (!L) {
    roadSyncRoom_(ss, cfg);
    L = learners_(ss).filter(function (x) { return x.email === email; })[0];
    if (!L) throw { code: 'no_learner' };
  }
  if (L.status !== 'open' && L.status !== 'complete') throw { code: 'closed' }; // build 11.0: a man who has finished his course still has his page (the course-ended state)
  var sh = ss.getSheetByName('Learners');
  if (L.lwid && lwid && L.lwid !== lwid) { log_(ss, 'road', 'id did not match for ' + email, lwid.slice(0, 12)); throw { code: 'no_learner' }; }
  if (!L.lwid && lwid) { sh.getRange(L.row, LC.lwid).setValue(lwid); L.lwid = lwid; }
  if (!L.name && b.name) { sh.getRange(L.row, LC.name).setValue(String(b.name).trim().slice(0, 80)); L.name = String(b.name).trim(); }
  L.seenBefore = L.lastSeen; sh.getRange(L.row, LC.lastSeen).setValue(stamp_(new Date()));
  return L;
}
function roadDoor_(cfg, L) { return L.door || isoDay_(cfg['road door opens']) || ''; }
/** The man's week: it turns on his room's day (Rooms tab) or, with no room, on the weekday his door opened; the first week starts at the door.
 *  4.0.2: "his week" is the night he just sat in (John, Oct 22); before the first night it is the week he is preparing. */
/* ---- build 10: one road, many courses. The Course map is the only ground; nothing here names a course ---- */
function sameCourse_(a, b) { return String(a || '').toLowerCase().replace(/\s+/g, ' ').trim() === String(b || '').toLowerCase().replace(/\s+/g, ' ').trim() && !!String(a || '').trim(); }
/** A course's initials, the key a week-served pair is written with (Breaking Free → BF, Known by Jesus → KBJ, Do Hard Things → DHT). */
function courseAbbr_(name) { return String(name || '').replace(/[^\w\s]/g, ' ').split(/\s+/).filter(Boolean).map(function (w) { return w.charAt(0).toUpperCase(); }).join(''); }
/** The courses the Course map carries, in the order they first appear, each with its unit count and its initials. */
function courseList_(map) {
  var out = [], seen = {};
  (map && map.rows || []).forEach(function (r) {
    var k = r.course.toLowerCase().replace(/\s+/g, ' ').trim(); if (!k) return;
    if (!seen[k]) { seen[k] = { name: r.course, total: 0, abbr: courseAbbr_(r.course), units: {} }; out.push(seen[k]); }
    if (!seen[k].units[r.unit]) { seen[k].units[r.unit] = 1; seen[k].total++; }
  });
  return out;
}
function courseOf_(name, map) { var k = String(name || '').toLowerCase().replace(/\s+/g, ' ').trim(); return courseList_(map).filter(function (c) { return c.name.toLowerCase().replace(/\s+/g, ' ') === k || c.abbr.toLowerCase() === k; })[0] || null; }
/** Week served (Entries AB) read as pairs: "BF:4 · KBJ:1" → { bf: 4, kbj: 1 }; "any" → { any: true }; a bare number → the first course on the map (what the sheet meant before build 10). */
function weekPairs_(text, map) {
  var t = String(text || '').toLowerCase().trim(), out = {};
  if (!t) return out;
  if (t === 'any') { out.any = true; return out; }
  if (/^\d+$/.test(t)) { var first = courseList_(map)[0]; if (first) out[first.abbr.toLowerCase()] = Number(t); return out; }
  t.split(/\s*[·,;|]\s*/).forEach(function (p) {
    var m = p.match(/^([a-z][\w\s]*?)\s*[:=]\s*(\d+|any)$/i); if (!m) return;
    var c = courseOf_(m[1], map); if (!c) return;
    out[c.abbr.toLowerCase()] = m[2] === 'any' ? 'any' : Number(m[2]);
  });
  return out;
}
/** Pairs written back as the sheet holds them: "BF:4 · KBJ:1", or "any". */
function pairText_(pairs, map) {
  if (!pairs || pairs.any) return 'any';
  var parts = [];
  courseList_(map).forEach(function (c) { var v = pairs[c.abbr.toLowerCase()]; if (v) parts.push(c.abbr + ':' + v); });
  return parts.length ? parts.join(' · ') : 'any';
}
/** The unit a course expects a man at on a day, from his start date: week 1 for the first seven days, and so on; 0 with no date. */
function unitByDate_(started, day) { if (!started) return 0; var d = Math.round((utcNoon_(day) - utcNoon_(started)) / 864e5); return d < 0 ? 0 : Math.floor(d / 7) + 1; }
/** Where a man stands with his courses, from his row: the lead (his room's night when the lead is the room's course; the start-date rule otherwise) and the second.
 *  Each: { name, abbr, total, unit (for choosing, at least 1 once he has a course), shown (the unit for the page, 0 before he starts), state (the words under the course), room }. */
function roadCourses_(cfg, L, map) {
  var today = today_(), list = courseList_(map), out = { lead: null, second: null, offered: [] };
  var rr = L.room ? roomRow_({ room: L.room }) : null, roomC = rr ? roomCourse_(L.room) : '';
  function stand(name, started) {
    var c = courseOf_(name, map); if (!c) return null;
    var o = { name: c.name, abbr: c.abbr, total: c.total, unit: 0, shown: 0, state: 'Not started', room: false, started: started || '' };
    if (rr && sameCourse_(c.name, roomC)) {
      var n = nightOnOrBefore_(rr, today) || nightOnOrAfter_(rr, today);
      var w = n && n.week ? Number(n.week) || 0 : 0;
      o.room = true; o.unit = Math.max(1, w); o.shown = w; o.state = 'Your group' + (w ? ' · Week ' + w + ' of ' + (rr.weeks || c.total) : '');
      if (!o.started && rr.first) o.started = rr.first;
      return o;
    }
    var u = unitByDate_(o.started, today);
    if (u > c.total) { o.unit = c.total; o.shown = c.total; o.state = 'Finished'; }
    else if (u > 0) { o.unit = u; o.shown = u; o.state = 'Week ' + u + ' of ' + c.total; }
    else { o.unit = 1; o.shown = 0; o.state = 'Not started'; }
    return o;
  }
  out.lead = L.course ? stand(L.course, L.leadStarted) : null;
  out.second = L.second && out.lead && !sameCourse_(L.second, out.lead.name) ? stand(L.second, L.secondStarted) : null;
  list.forEach(function (c) {
    var role = out.lead && sameCourse_(c.name, out.lead.name) ? 'lead' : out.second && sameCourse_(c.name, out.second.name) ? 'second' : '';
    var s = role === 'lead' ? out.lead : role === 'second' ? out.second : stand(c.name, '');
    out.offered.push({ name: c.name, total: c.total, state: s ? s.state : 'Not started', role: role, room: !!(s && s.room) });
  });
  return out;
}
/** The man's week: it turns on his room's day (Rooms tab) or, with no room, on the weekday his door opened; the first week starts at the door.
 *  4.0.2: "his week" is the night he just sat in (John, Oct 22); before the first night it is the week he is preparing.
 *  Build 10: course and weekNum are the lead course's; the label names both courses first (Breaking Free · Week 4 of 12 · Known by Jesus · Week 1 of 12). */
function roadWeek_(cfg, L, map) {
  var today = today_(), door = roadDoor_(cfg, L);
  var r = L.room ? roomRow_({ room: L.room }) : null;
  var wd = r ? roomWeekday_(r) : (door ? utcNoon_(door).getUTCDay() : utcNoon_(today).getUTCDay());
  var start = addDays_(today, -((utcNoon_(today).getUTCDay() - wd + 7) % 7));
  if (door && start < door) start = door;
  var C = roadCourses_(cfg, L, map || courseMap_(SpreadsheetApp.openById(RE_SHEET_ID)));
  var out = { start: start, label: '', weekNum: 0, nextNum: 0, course: C.lead ? C.lead.name : (L.course || ''), courses: C };
  if (C.lead) {
    out.weekNum = C.lead.unit; out.nextNum = C.lead.unit && C.lead.unit < C.lead.total ? C.lead.unit + 1 : 0;
    var parts = [C.lead, C.second].filter(Boolean).map(function (c) { return c.name + (c.shown ? ' · Week ' + c.shown + ' of ' + c.total : c.state === 'Finished' ? ' · Finished' : ''); });
    out.label = parts.join(' · ');
  }
  return out;
}
/* ═══════════ build 10.2.4: his yes and no shape what he is handed next ═══════════
 *  One small additive score, applied inside roadChoose_ on top of the fit (this week 3, earlier nearest first just under 2, "any" 1) and the recent-lane step of 0.5:
 *    lane lift  = sum over his answers, newest first, of (+0.35 for It helped, -0.35 for a no, 0 for a "come again shorter") x 0.7^rank, kept between -0.6 and +0.9
 *    again      = +0.98 for a construct he said was too long (or never opened and said no), once, in short form
 *  No score can reach one whole fit step, so a lane is never dropped, only moved; the hard limits below are filters, not scores.
 *  A reading is the same construct when Entries H (construct) is the same; the lane is laneOf_ from the voice, as before.
 *  How an answer counts: It helped (met) = a yes. Not this one (not) = a "no" when he opened it or says Not what I need (reason not_needed); "come again shorter" when he says
 *  Too long right now (reason too_long), or when he never opened it and gave no reason (not a no: he may not have met it at all). The reason is the latest 'why' row after the latest 'not'.
 *  Hard limits (per construct): at most 3 offers in all; offers at least 7 days apart; the same entry never twice (had); after a third no it rests; after a no, at most one more offer,
 *  from a different voice than every no; a "come again shorter" is offered once more, from a different entry, in a later week, in short form. */
var LEARN = { step: 0.35, decay: 0.7, liftMax: 0.9, lowerMax: 0.6, again: 0.98, apart: 7, offers: 3, rest: 3 };
function constructKey_(e) { return String(e && e.construct || '').toLowerCase().replace(/\s+/g, ' ').trim(); }
function voiceName_(source) { return String(voiceOf_(source) || '').replace(/\s*\(.*$/, '').trim(); }
/** What his Road rows say about what to hand him next. rows = his Road rows in sheet order; byId = entries by id; returns { answers, lift(lane), check(entry) } (pure; today is a yyyy-mm-dd). */
function roadLearn_(rows, byId, lanes, today) {
  var ans = {}, opened = {}, whyAt = {};
  rows.forEach(function (r, i) {
    if (r.what === 'opened') opened[r.id] = 1;
    else if (r.what === 'met' || r.what === 'not') ans[r.id] = { what: r.what, at: i };
    else if (r.what === 'why' && (r.text === 'too_long' || r.text === 'not_needed')) whyAt[r.id] = { text: r.text, at: i };
  });
  var answers = [];
  Object.keys(ans).forEach(function (id) {
    var e = byId[id]; if (!e) return;
    var a = ans[id], cls = 'met';
    if (a.what === 'not') {
      var w = whyAt[id] && whyAt[id].at > a.at ? whyAt[id].text : '';
      cls = w === 'too_long' ? 'short' : w === 'not_needed' ? 'no' : opened[id] ? 'no' : 'short';
    }
    answers.push({ id: id, e: e, lane: laneOf_(voiceOf_(e.source).toLowerCase(), lanes), construct: constructKey_(e), voice: voiceName_(e.source), cls: cls, at: a.at, what: a.what });
  });
  answers.sort(function (x, y) { return y.at - x.at; }); // newest first
  var lane = {}, wt = 1;
  answers.forEach(function (x) { lane[x.lane] = (lane[x.lane] || 0) + (x.cls === 'met' ? LEARN.step : x.cls === 'no' ? -LEARN.step : 0) * wt; wt *= LEARN.decay; });
  Object.keys(lane).forEach(function (k) { lane[k] = Math.max(-LEARN.lowerMax, Math.min(LEARN.liftMax, lane[k])); });
  var offers = {};
  rows.forEach(function (r, i) {
    if (r.what !== 'given') return; var e = byId[r.id]; if (!e) return; var k = constructKey_(e); if (!k) return;
    (offers[k] = offers[k] || []).push({ id: r.id, at: i, day: dayOf_(r.when) });
  });
  var S = {};
  Object.keys(offers).forEach(function (k) {
    var o = offers[k], at = {}, last = ''; o.forEach(function (x) { at[x.id] = x.at; if (x.day > last) last = x.day; });
    var s = { offers: o.length, last: last, nos: 0, shorts: 0, afterNo: 0, afterShort: 0, noVoices: {} }, firstNo = -1, firstShort = -1;
    answers.forEach(function (x) {
      if (x.construct !== k) return;
      if (x.cls === 'no') { s.nos++; s.noVoices[x.voice.toLowerCase()] = 1; if (at[x.id] !== undefined && (firstNo < 0 || at[x.id] < firstNo)) firstNo = at[x.id]; }
      if (x.cls === 'short') { s.shorts++; if (at[x.id] !== undefined && (firstShort < 0 || at[x.id] < firstShort)) firstShort = at[x.id]; }
    });
    o.forEach(function (x) { if (firstNo >= 0 && x.at > firstNo) s.afterNo++; if (firstShort >= 0 && x.at > firstShort) s.afterShort++; });
    S[k] = s;
  });
  return {
    answers: answers, constructs: S,
    lift: function (l) { return lane[l] || 0; },
    /** { ok, again }: may this entry be handed now, and is it a "come again shorter" offer (boosted, short form) */
    check: function (e) {
      var k = constructKey_(e), s = k ? S[k] : null; if (!s) return { ok: true, again: false };
      if (s.offers >= LEARN.offers || s.nos >= LEARN.rest) return { ok: false, again: false };
      if (s.last && Math.round((utcNoon_(today) - utcNoon_(s.last)) / 864e5) < LEARN.apart) return { ok: false, again: false };
      if (s.nos > 0) { if (s.afterNo >= 1 || s.noVoices[voiceName_(e.source).toLowerCase()]) return { ok: false, again: false }; return { ok: true, again: false }; }
      return { ok: true, again: s.shorts > 0 && s.afterShort === 0 };
    }
  };
}
/** The pieces that may be handed to a man for one course: released entries with the man's lines, never one he has had, fitted to that course's unit first
 *  (this week, then earlier nearest first, never later), then "any"; a lane he has not had lately wins a tie, then the newest. The fit is Entries AB, pairs the writer sets.
 *  Returns the entry with its credit: { e, unit, both } (both: it fits the other course too, so it is given once and credited to both). */
function roadChoose_(ss, course, other, had, recentLanes, map, learn) {
  if (!course) return null;
  // the claim reaches the man as written, so a claim in the facilitator's chair keeps its entry off the man's road (4.0.2; a "claim for him" column is the next step)
  var chair = /\bfacilitat|\b(a man|someone|anyone|the men) in (your|his) room\b|\bhis room\b|\btell the men\b|\bthe men whether\b/i;
  var pool = entries_(ss).filter(function (e) { return e.status === 'released' && e.road && e.todo && e.question2 && !had[e.id] && !chair.test(e.claim) && (!learn || learn.check(e).ok); });
  if (!pool.length) return null;
  var w = course.unit || 1, key = course.abbr.toLowerCase(), okey = other ? other.abbr.toLowerCase() : '', lanes = lanes_(ss), recent = recentLanes || [];
  function fitFor(e, k, unit) {
    var P = weekPairs_(e.week, map);
    if (P.any || !Object.keys(P).length) return 1;          // untied: after the fitted ones
    var v = P[k]; if (v === undefined) return -1;            // tied to other courses only: not this course's piece
    if (v === 'any') return 1;
    if (v === unit) return 3;
    if (v < unit) return 2 - (unit - v) * 0.01;               // earlier, nearest first
    return -1;                                               // later: never
  }
  var scored = pool.map(function (e) { return { e: e, f: fitFor(e, key, w) }; }).filter(function (x) { return x.f >= 0; });
  if (!scored.length) return null;
  scored.forEach(function (x) {
    var lane = laneOf_(voiceOf_(x.e.source).toLowerCase(), lanes); if (recent.indexOf(lane) >= 0) x.f -= 0.5;
    if (learn) { x.f += learn.lift(lane); var c = learn.check(x.e); if (c.again) { x.f += LEARN.again; x.short = true; } } // build 10.2.4
  });
  scored.sort(function (a, b) { return b.f - a.f || b.e.written.localeCompare(a.e.written); });
  var best = scored[0].e, P2 = weekPairs_(best.week, map);
  var both = !!(other && !P2.any && P2[key] !== undefined && P2[okey] !== undefined && (P2[okey] === 'any' || P2[okey] <= (other.unit || 1)));
  return { e: best, unit: w, both: both, short: !!scored[0].short };
}
/** The lanes of the last three pieces handed (newest first), so the next choice can favor a lane he has not had lately. */
function recentLanesOf_(givenRows, byId, lanes) {
  return newestFirst_(givenRows).slice(0, 3).map(function (r) { return byId[r.id] ? laneOf_(voiceOf_(byId[r.id].source).toLowerCase(), lanes) : ''; });
}
/** What a 'given' row says about the course it was handed for: "the morning run · Known by Jesus · 1" → { course, unit, both, short }. An older row says nothing.
 *  Build 10.2.4: a trailing " · short" marks a piece handed in its short form (the claim, the minute link and the question; no quotes block). */
function creditOf_(row) {
  var m = String(row && row.text || '').match(/·\s*([^·]+?)\s*·\s*(\d+)(\s*·\s*both)?(\s*·\s*short)?\s*$/);
  return m ? { course: m[1].trim(), unit: Number(m[2]), both: !!m[3], short: !!m[4] } : null;
}
/** Has he kept the setup (build 10)? A 'setup' row on the Road tab, or a pace chosen on 9.x. */
function roadKept_(rows, L) { return rows.some(function (r) { return r.what === 'setup'; }) || !!L.pace; }
function roadRows_(ss, email) {
  var sh = ss.getSheetByName('Road'); if (!sh || sh.getLastRow() < 2) return [];
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, RC.build).getValues(), out = [];
  data.forEach(function (r) { if (String(r[RC.email - 1] || '').toLowerCase().trim() !== email) return; out.push({ when: r[RC.when - 1], id: String(r[RC.entryId - 1] || ''), what: String(r[RC.what - 1] || ''), text: String(r[RC.text - 1] || ''), week: isoDay_(r[RC.week - 1]) }); });
  return out;
}
function roadRow_(ss, email, id, what, text, week) { ss.getSheetByName('Road').appendRow([stamp_(new Date()), email, id, what, String(text || '').slice(0, 4000), week || '', ROAD_BUILD]); }
function dayLabel_(v) { var d = v instanceof Date ? v : new Date(Date.parse(String(v))); return isNaN(d) ? '' : Utilities.formatDate(d, RE_TZ, 'MMM d'); }
/** Choose this week's piece (4.0.2): released entries with the man's lines, never one he has had; fitted to his week first, then earlier weeks
 *  nearest first, then "any"; an entry fitted to a later week is never chosen. When two fit alike, a lane he has not had lately wins (the whole
 *  man across weeks: spirit, soul and body in turn, never named on the page); then the newest. The fit is Entries AB, a value the writer sets. */
/** The lanes of the last three pieces handed (newest first), so the next choice can favor a lane he has not had lately. */
/** The section's data for one learner; gives this week's piece if none is given yet (byMorning: the daily run, so the Log says so). */
/** One slot of the week handed by the rule (build 10): the lead course gets the first piece of every week and at least two of every three; the second at most one in three;
 *  a piece fitting both is given once and credited to both; "any" pieces fill behind a course's own. Returns the choice with its credit, or null. */
function roadSlot_(ss, C, rows, had, map, lanes) {
  var byId = {}; entries_(ss).forEach(function (x) { byId[x.id] = x; });
  var given = rows.filter(function (r) { return r.what === 'given'; });
  var weekRows = given.filter(function (r) { return r.week === roadSlot_.weekStart; });
  var k = weekRows.length, secondGiven = C.second ? weekRows.filter(function (r) { var c = creditOf_(r); return c && !c.both && sameCourse_(c.course, C.second.name); }).length : 0;
  var secondOk = !!C.second && k > 0 && secondGiven < Math.floor((k + 1) / 3);
  var order = !C.lead ? [] : secondOk && k % 3 === 2 ? [C.second, C.lead] : secondOk ? [C.lead, C.second] : [C.lead];
  var recent = recentLanesOf_(given, byId, lanes), learn = roadLearn_(rows, byId, lanes, today_());
  for (var i = 0; i < order.length; i++) {
    var other = order[i] === C.lead ? C.second : C.lead;
    var pick = roadChoose_(ss, order[i], other, had, recent, map, learn);
    if (pick) return { e: pick.e, course: order[i] === C.second && pick.both ? C.lead.name : order[i].name, unit: order[i] === C.second && pick.both ? C.lead.unit : pick.unit, both: pick.both, short: pick.short };
  }
  return null;
}
/** The section's data for one learner; gives this week's piece if none is given yet (byMorning: the daily run, so the Log says so). */
function roadFor_(ss, cfg, L, byMorning) {
  var today = today_(), door = roadDoor_(cfg, L);
  if (door && today < door) return { ok: false, error: 'not_open' };
  var map = courseMap_(ss);
  var week = roadWeek_(cfg, L, map), C = week.courses;
  var rows = roadRows_(ss, L.email), had = {}, givenNow = false;
  var given = rows.filter(function (r) { return r.what === 'given'; });
  given.forEach(function (r) { had[r.id] = 1; });
  var all = entries_(ss), byId = {}; all.forEach(function (x) { byId[x.id] = x; });
  var lanes = lanes_(ss);
  var landOn = landOn_(cfg, L);
  var kept = roadKept_(rows, L);
  roadSlot_.weekStart = week.start;
  function hand(pick, why) {
    roadRow_(ss, L.email, pick.e.id, 'given', why + ' · ' + pick.course + ' · ' + pick.unit + (pick.both ? ' · both' : '') + (pick.short ? ' · short' : ''), week.start);
    had[pick.e.id] = 1; givenNow = true;
    try { var le = ss.getSheetByName('Learners'); le.getRange(L.row, LC.pieces).setValue((L.pieces || 0) + 1); L.pieces = (L.pieces || 0) + 1; } catch (x) {}
    rows = roadRows_(ss, L.email); given = rows.filter(function (r) { return r.what === 'given'; });
  }
  // the rows are in the order they were added, so the week's first piece is the first of them (build 9; the question back rides on it)
  var cur = given.filter(function (r) { return r.week === week.start; })[0] || null;
  var e = null;
  if (cur) e = byId[cur.id] || null;
  if (!e && C.lead && (byMorning || kept)) {
    var first = roadSlot_(ss, C, rows, had, map, lanes);
    if (first) { hand(first, byMorning ? 'the morning run' : 'on his page'); e = first.e; cur = given.filter(function (r) { return r.week === week.start; })[0]; }
  }
  // build 10: the section shows from the door on (the setup first); a man with no piece yet sees the setup and nothing under it
  if (e) had[e.id] = 1;
  // build 9, the pace: the morning run hands a man up to the most he chose, spread across the week; build 10: each slot by the lead/second rule
  if (e && byMorning) {
    var dayIx = Math.round((utcNoon_(today) - utcNoon_(week.start)) / 864e5);
    var weekN = given.filter(function (r) { return r.week === week.start; }).length;
    var todayN = given.filter(function (r) { return dayOf_(r.when) === today; }).length;
    var give = paceGive_(L.pace, dayIx, weekN, todayN);
    for (var gi = 0; gi < give; gi++) {
      var next = roadSlot_(ss, C, rows, had, map, lanes);
      if (!next) break;
      hand(next, 'the morning run');
    }
  }
  var weekRows = given.filter(function (r) { return r.week === week.start && byId[r.id]; }), weekIds = {};
  weekRows.forEach(function (r) { weekIds[r.id] = 1; });
  // one piece as the page draws it; the week's first (withAsk) carries the question back and his answer, the rest come without a question
  function pieceOut(x, row, withAsk) {
    var mine = rows.filter(function (r) { return r.id === x.id; });
    var opened = mine.filter(function (r) { return r.what === 'opened'; })[0];
    var word = mine.filter(function (r) { return r.what === 'met' || r.what === 'not'; }).pop();
    var whyRow = word && word.what === 'not' ? mine.slice(mine.lastIndexOf(word) + 1).filter(function (r) { return r.what === 'why' && (r.text === 'too_long' || r.text === 'not_needed'); }).pop() : null;
    var ans = withAsk ? mine.filter(function (r) { return r.what === 'answer'; }).pop() : null;
    var whole = !!(x.beside && x.move);
    var credit = creditOf_(row) || (function () { var P = weekPairs_(x.week, map), lead = C.lead; if (!lead) return null; var v = P[lead.abbr.toLowerCase()]; return { course: lead.name, unit: typeof v === 'number' ? v : lead.unit }; })();
    var short = !!(credit && credit.short); // build 10.2.4: handed in its short form: the claim, the minute link and the question; no quotes block
    var p = { id: x.id, voice: voiceOf_(x.source), kind: x.kind, act: actOf_(x), cost: String(x.cost || '').split(/[,·]/)[0].trim(), minutes: minutesLine_(x.cut), link: x.link, minuteLink: x.link,
      course: credit ? credit.course : '', unit: credit ? credit.unit : 0, short: short, why: whyRow ? whyRow.text : '',
      claim: x.claim, quotes: whole && !short ? quotesOf_(x.quotes) : [], wordsComing: !short && !x.deepened && daysAgo_(x.written) <= 1 && !/^none/.test(x.transcript),
      road: x.road, todo: x.todo, given: dayLabel_(row.when), isNew: !opened && row.week === week.start, opened: opened ? dayLabel_(opened.when) : '', word: word ? word.what : '',
      layer: LAYER_WORD[(mine.filter(function (r) { return r.what === 'strand'; }).pop() || {}).text] || LAYER_WORD[landNextStrand_(rows)], verse: verseIn_(x.beside), openedDay: opened ? wdOf_(isoDay_(opened.when)) : '' }; // build 11.0: the layer (Wisdom, Understanding, Knowledge), the verse our team read it beside, the weekday he opened it
    if (!withAsk) { p.extra = true; return p; }
    p.question = x.question2; p.answer = ans ? { text: ans.text, sent: dayLabel_(ans.when) } : null; p.strand = landNextStrand_(rows);
    // build 5: the word for the road under his answer, and whether it landed since he was last here
    if (p.answer) {
      var w5 = landWordOf_(rows, x.id);
      if (w5) { p.answer.word = { verse: w5.verse, question: w5.question, step: w5.step }; var seenMs = Date.parse(String(L.seenBefore || '')), wMs = Date.parse(String(w5.when || '')); p.answer.wordNew = !isNaN(wMs) && (isNaN(seenMs) || wMs > seenMs); }
    }
    return p;
  }
  var piece = e ? pieceOut(e, cur, true) : null;
  var more = weekRows.filter(function (r) { return !e || r.id !== e.id; }).map(function (r) { return pieceOut(byId[r.id], r, false); });
  var ui = roadUi_(rows);
  // his road so far: every earlier piece with the word he gave it and the line he wrote (4.1b)
  var earlierGiven = newestFirst_(given.filter(function (r) { return (!e || r.id !== e.id) && byId[r.id] && !weekIds[r.id]; }));
  var road = earlierGiven.slice(0, 24).map(function (r) {
    var x = byId[r.id], w = rows.filter(function (q) { return q.id === r.id && (q.what === 'met' || q.what === 'not'); }).pop();
    var a = rows.filter(function (q) { return q.id === r.id && q.what === 'answer'; }).pop(), cr = creditOf_(r);
    return { id: x.id, given: dayLabel_(r.when), claim: x.claim, voice: voiceOf_(x.source), word: w ? w.what : '', line: a ? a.text : '', link: x.link, act: actOf_(x), course: cr ? cr.course : '', unit: cr ? cr.unit : 0 };
  });
  // the line from his road: his latest answer on an earlier piece, in his own words
  var last = null;
  for (var i = 0; i < earlierGiven.length && !last; i++) {
    var la = rows.filter(function (q) { return q.id === earlierGiven[i].id && q.what === 'answer'; }).pop();
    if (la && la.text) last = { text: String(la.text).slice(0, 280), when: daysAgo_(dayOf_(la.when)) <= 10 ? 'Last week' : 'On ' + dayLabel_(la.when) };
  }
  // the questions that return: the same question answered more than once, his answers side by side in order
  var byQ = {};
  rows.filter(function (q) { return q.what === 'answer' && byId[q.id] && byId[q.id].question2; }).forEach(function (q) {
    var key = byId[q.id].question2.trim(); (byQ[key] = byQ[key] || []).push({ when: dayLabel_(q.when), text: String(q.text).slice(0, 400), at: String(q.when) });
  });
  var returns = Object.keys(byQ).filter(function (k) { return byQ[k].length > 1; }).map(function (k) { return { question: k, answers: byQ[k].sort(function (a, b) { return a.at.localeCompare(b.at); }).map(function (a) { return { when: a.when, text: a.text }; }) }; });
  // how this works: in full the first time he opens the section, afterward one line he can open (the Road tab remembers; never written by the morning run)
  var how = rows.some(function (q) { return q.what === 'how'; }) ? 'line' : 'full';
  if (how === 'full' && !byMorning && e && !landOn) { try { roadRow_(ss, L.email, e.id, 'how', 'shown', week.start); } catch (xh) {} }
  var free = isoDay_(L.freeUntil || cfg['road free until']), price = cfg['road price'] || '';
  var fine = cfg['road foot'] || ('You are among the first men to use this, and what you answer and press is shaping it.' + (free ? ' Free through ' + fmtDay_(free, 'MMMM d') + (price ? ', then ' + price.replace(/\s+from\s+.*$/, '') : '') + '.' : '') + ' Nothing reaches your page that our team has not read first' + (landOn ? '. A person reads your road once a month and writes to you.' : ', and nothing is mailed to you.'));
  var land = null;
  if (landOn) { try { land = landFor_(ss, cfg, L, rows, week, map, byId); } catch (xl) { log_(ss, 'road', 'the land could not be drawn for ' + L.email, String(xl && xl.stack || xl).slice(0, 300)); } }
  var band = null;
  try { band = bandOut_(ss, cfg, L, week, map); } catch (xb) { log_(ss, 'road', 'the band could not be drawn for ' + L.email, String(xb && xb.stack || xb).slice(0, 300)); }
  var card = null;
  try { card = roadCard_(rows, week, band, map, L); } catch (xc) { log_(ss, 'road', 'the weekly card could not be drawn for ' + L.email, String(xc && xc.stack || xc).slice(0, 300)); }
  var visit = { returning: false }, group = { in: !!L.room }, witness = null, helping = null;
  try { helping = roadHelping_(rows, byId, lanes, week); } catch (xh2) { log_(ss, 'road', 'what has been helping could not be drawn for ' + L.email, String(xh2 && xh2.stack || xh2).slice(0, 300)); }
  try { visit = roadVisit_(rows, week, map); } catch (xv2) { log_(ss, 'road', 'the welcome could not be drawn for ' + L.email, String(xv2 && xv2.stack || xv2).slice(0, 300)); }
  try { group = roadGroup_(ss, cfg, L, week); } catch (xg) { log_(ss, 'road', 'the group could not be drawn for ' + L.email, String(xg && xg.stack || xg).slice(0, 300)); }
  if (!L.room) witness = { waiting: witnessWaiting_(ss, L.email), yes: witnessYesOf_(ss, L.email) };
  // build 11.0 and the hooks for 11.1: v11.notes comes from notesFor_ (the Notes tab: man email, witness, written date, text, read date); v11.weekly comes from weeklyPageFor_(ss, L, rows, week) (the weekly page his witness reads, built on witnessView_); both are read-only here and 11.1 fills them in
  var v11 = null;
  try { v11 = roadV11_(ss, cfg, L, week, map, rows, byId, piece, band, card, visit, group, helping); } catch (xv11) { log_(ss, 'road', 'the three views could not be drawn for ' + L.email, String(xv11 && xv11.stack || xv11).slice(0, 300)); }
  return { ok: true, build: ROAD_BUILD, today: dayLabel_(new Date()), review: cfg['road review window'] || 'two days', week: { start: week.start, label: week.label }, lead: cfg['road lead'] || '', fine: fine,
    pic: String(cfg['road picture'] || '').trim(), how: how, last: last, piece: piece, more: more, pace: paceOut_(L), paces: paceList_(), notices: noticeList_(), setup: roadSetupOut_(C, L, kept), ui: ui, road: road, returns: returns, givenNow: givenNow, land: land, band: band, card: card, visit: visit, group: group, witness: witness, helping: helping, v11: v11, wordLabel: cfg['road word label'] || 'A word for the road' };
}
function roadUi_(rows) { var ui = {}; rows.forEach(function (r) { if (r.what === 'ui' && r.id) ui[r.id] = r.text; }); return ui; }
function paceOut_(L) { return { key: L.pace || '', label: L.pace ? PACES[L.pace].label : PACES.three.label, set: !!L.pace }; }
/** The setup as the page draws it (build 10): the courses the Course map offers with where he stands in each, his lead and second, his pace and notice, and whether he has kept it. */
function roadSetupOut_(C, L, kept) {
  return { kept: !!kept, offered: C.offered, lead: C.lead ? C.lead.name : '', second: C.second ? C.second.name : '', pace: L.pace || '', notice: L.notice || 'email', noCourse: !C.lead };
}
/** The act a piece asks of him, from Entries AC; blank falls to the rule (so a page never waits on the morning): YouTube → Watch, a podcast episode or a song → Listen, else Read. */
function actOf_(e) {
  var a = String(e.act || '').trim(); if (/^(read|listen|watch)$/i.test(a)) return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
  var link = String(e.link || '').toLowerCase(), src = String(e.source || '').toLowerCase(), kind = String(e.kind || '').toLowerCase();
  if (/youtube\.com|youtu\.be/.test(link) || /\(video\)/.test(src) || /video/.test(kind)) return 'Watch';
  if (/song|music|episode|podcast|audio/.test(kind) || /\bepisode\b|podcast/.test(src)) return 'Listen';
  return 'Read';
}
/** Each morning, every entry without an act gets one from the rule above, written to Entries AC so the sheet is the record. */
function roadActs_(ss) {
  var sh = ss.getSheetByName('Entries'); if (!sh) return 0;
  widen_(sh, EC.act); if (!String(sh.getRange(1, EC.act).getValue() || '').trim()) sh.getRange(1, EC.act).setValue('act (Read · Listen · Watch)');
  var n = 0;
  entries_(ss).forEach(function (e) { if (!String(e.act || '').trim() && (e.status === 'released' || e.status === 'candidate')) { sh.getRange(e.row, EC.act).setValue(actOf_(e)); n++; } });
  if (n) log_(ss, 'road', 'acts set', n + ' entries (AC)');
  return n;
}
function minutesLine_(cut) { var m = String(cut || '').match(/about\s+([a-z\-]+|\d+)\s+minutes?\.?\s*$/i); return m ? 'about ' + m[1] + ' minutes' : ''; }
function roadCall_(b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
  var action = String(b.action || '');
  ensureBuild10_(ss); // build 10: the sheet changes apply themselves on the first call, before the morning if a page asks first
  try { ensureBuild102_(ss); } catch (xe) {} // build 10.2: one Log line, once
  try { ensureBuild1021_(ss); } catch (xe2) {} // build 10.2.1: one Log line, once
  try { ensureBuild1022_(ss); } catch (xe3) {} // build 10.2.2: one Log line, once
  try { ensureBuild1023_(ss); } catch (xe4) {} // build 10.2.3: one Log line, once
  try { ensureBuild1024_(ss); } catch (xe5) {} // build 10.2.4: one Log line, once
  try { ensureBuild110_(ss); } catch (xe6) {} // build 11.0: the Learners columns, the Config lines, one Log line, once
  try { ensureBuild111_(ss); } catch (xe7) {} // build 11.1: the Witness pages and Notes tabs, the Config email: lines, the hourly trigger, one Log line, once
  var L;
  try { L = learnerFor_(ss, cfg, b); }
  catch (xl) {
    // build 10.1: a man with no row (or a closed one) still has a land; he gets the bare road, and nothing is written for him
    if (xl && (xl.code === 'no_learner' || xl.code === 'closed') && action === 'road') return roadBare_(cfg);
    if (xl && (xl.code === 'no_learner' || xl.code === 'closed') && action === 'road_ui') return { ok: true, bare: true };
    throw xl;
  }
  if (action === 'road') { var rd = roadFor_(ss, cfg, L, false); return rd && rd.ok === false && rd.error === 'not_open' ? roadBare_(cfg) : rd; }
  if (action === 'road_land') { var rl = roadRows_(ss, L.email); if (!rl.some(function (r) { return r.what === 'land'; })) roadRow_(ss, L.email, '', 'land', 'seen', roadWeek_(cfg, L).start); return { ok: true }; }
  if (action === 'road_mark') { // build 10.2: how's the path, and the word if he names one; the latest row in a week wins
    var mkKey = String(b.mark || '').toLowerCase().trim(); if (!ROAD_MARKS[mkKey]) throw { code: 'bad_mark' };
    var mkWord = String(b.word || '').toLowerCase().trim(); if (mkWord && !markWord_(mkWord)) throw { code: 'bad_word' };
    roadRow_(ss, L.email, '', 'mark', mkKey + (mkWord ? '|' + mkWord : ''), roadWeek_(cfg, L).start);
    return { ok: true };
  }
  if (action === 'road_did') { // build 10.2: did he do last week's practice; written against last week
    var didKey = String(b.did || '').toLowerCase().trim(); if (didKey !== 'most' && didKey !== 'some' && didKey !== 'notyet' && didKey !== 'did') throw { code: 'bad_did' }; // 10.2.3: most · some · notyet; 'did' is the 10.2 value and still reads
    var prevWeek = addDays_(roadWeek_(cfg, L).start, -7);
    if (!roadRows_(ss, L.email).some(function (r) { return r.what === 'practice' && r.text && r.week === prevWeek; })) throw { code: 'no_practice' };
    roadRow_(ss, L.email, '', 'did', didKey, prevWeek);
    return { ok: true };
  }
  if (action === 'road_when') { // build 10.2.3: when he will do this week's practice; the latest row wins
    var whKey = String(b.when || '').toLowerCase().trim(); if (!WHENS[whKey]) throw { code: 'bad_when' };
    roadRow_(ss, L.email, '', 'when', whKey, roadWeek_(cfg, L).start);
    return { ok: true, when: whKey };
  }
  if (action === 'road_remind') { // build 10.2.3: how often he asks to be reminded; saved to Learners V "reminders" (and a Road row for the record). Nothing is sent in this build.
    var rmKey = remindKey_(b.remind); if (!rmKey) throw { code: 'bad_remind' };
    var rmSh = learnersSheet_(ss); rmSh.getRange(L.row, LC.reminders).setValue(REMINDERS[rmKey]);
    var rmPace = REMIND_PACE[rmKey]; rmSh.getRange(L.row, LC.pace).setValue(PACES[rmPace].label); // build 11.0: the rhythm sets the readings pace; it never goes below three a week (John's ruling, Oct 31)
    roadRow_(ss, L.email, '', 'remind', rmKey, roadWeek_(cfg, L).start);
    roadRow_(ss, L.email, '', 'pace', PACES[rmPace].label, roadWeek_(cfg, L).start);
    return { ok: true, remind: rmKey, pace: { key: rmPace, label: PACES[rmPace].label, set: true } };
  }
  if (action === 'road_witness') return roadWitness_(ss, cfg, L, b); // build 10.2.3: an invitation to his own witness, saved to the Witness tab; build 11.1: and sent, with a token link to Before You Say Yes
  if (action === 'road_hand') return roadHand_(ss, cfg, L); // build 10.2: a hand raised reaches his leader the same day
  if (action === 'road_practice') { var pt = String(b.text || '').trim().slice(0, 200); if (!pt) throw { code: 'empty' }; roadRow_(ss, L.email, '', 'practice', pt, roadWeek_(cfg, L).start); return { ok: true }; }
  if (action === 'road_place') { var pk = String(b.place || '').trim().toLowerCase(), pl = String(b.text || '').trim().slice(0, 200); if (LAND_ASKED.indexOf(pk) < 0) throw { code: 'place' }; if (!pl) throw { code: 'empty' }; roadRow_(ss, L.email, pk, 'place', pl, roadWeek_(cfg, L).start); return { ok: true }; }
  if (action === 'road_setup') return roadSetup_(ss, cfg, L, b);
  if (action === 'road_pace') {
    var pcKey = paceKey_(b.pace); if (!pcKey) throw { code: 'pace' };
    var lsh = learnersSheet_(ss); lsh.getRange(L.row, LC.pace).setValue(PACES[pcKey].label);
    roadRow_(ss, L.email, '', 'pace', PACES[pcKey].label, roadWeek_(cfg, L).start);
    return { ok: true, pace: { key: pcKey, label: PACES[pcKey].label, set: true } };
  }
  if (action === 'road_course') { // build 11.0: he opened his course this week (one row a week)
    var wkC = roadWeek_(cfg, L).start;
    if (!roadRows_(ss, L.email).some(function (r) { return r.what === 'course' && r.week === wkC; })) roadRow_(ss, L.email, '', 'course', 'opened', wkC);
    return { ok: true };
  }
  if (action === 'road_checkin') { // build 11.0: the check-in ends, finished or skipped; once a week (a second tap changes nothing)
    var ckState = String(b.state || 'done').toLowerCase().trim(); if (ckState !== 'done' && ckState !== 'skipped') throw { code: 'bad_state' };
    var wkK = roadWeek_(cfg, L).start;
    if (!roadRows_(ss, L.email).some(function (r) { return r.what === 'checkin' && r.week === wkK; })) roadRow_(ss, L.email, '', 'checkin', ckState, wkK);
    return { ok: true, state: ckState };
  }
  if (action === 'road_saw') { // build 11.0: What did you take from Wednesday? saved as a saw line, and read by a person like every answer
    var sawText = String(b.text || '').trim().slice(0, 2000); if (!sawText) throw { code: 'empty' };
    var wkS = roadWeek_(cfg, L).start;
    roadRow_(ss, L.email, '', 'saw', sawText, wkS);
    roadLineCard_(ss, cfg, L, 'saw:' + wkS, 'What did you take from your group’s night?', sawText);
    return { ok: true, sent: dayLabel_(new Date()) };
  }
  if (action === 'road_make') { // build 11.0: Make Something of It; his own lines, saved as made
    var mkText = String(b.text || '').trim().slice(0, 2000); if (!mkText) throw { code: 'empty' };
    roadRow_(ss, L.email, '', 'made', mkText, roadWeek_(cfg, L).start);
    roadLineCard_(ss, cfg, L, 'made:' + stamp_(new Date()), 'Make Something of It', mkText);
    return { ok: true, sent: dayLabel_(new Date()) };
  }
  if (action === 'road_shares') { // build 11.0: the four switches (path, piece, practice, words); saved to Learners W; read by 11.1
    var shNew = {}, shIn = b.shares;
    if (typeof shIn === 'string') { try { shIn = JSON.parse(shIn); } catch (xj) { shIn = null; } }
    if (!shIn || typeof shIn !== 'object') throw { code: 'bad_shares' };
    SHARE_KEYS.forEach(function (k) { shNew[k] = shIn[k] === true || shIn[k] === 'true' || shIn[k] === 'on'; });
    learnersSheet_(ss).getRange(L.row, LC.shares).setValue(sharesCell_(shNew));
    roadRow_(ss, L.email, '', 'setup', 'shares: ' + sharesCell_(shNew), roadWeek_(cfg, L).start);
    return { ok: true, shares: shNew };
  }
  if (action === 'road_pause') { // build 11.0: Pause your witness's notes (yes, or blank); read by 11.1
    var pauseOn = b.paused === true || b.paused === 'true' || b.paused === 'yes';
    learnersSheet_(ss).getRange(L.row, LC.notesPaused).setValue(pauseOn ? 'yes' : '');
    roadRow_(ss, L.email, '', 'setup', 'notes ' + (pauseOn ? 'paused' : 'resumed'), roadWeek_(cfg, L).start);
    if (!pauseOn) { try { witnessRelease_(ss, cfg, L); } catch (xr) { log_(ss, 'witness note', 'release failed', String(xr && xr.stack || xr).slice(0, 200)); } } // build 11.1: letters held while paused are released, one email
    return { ok: true, paused: pauseOn };
  }
  if (action === 'road_note_read') { // build 11.0: he opened a letter; the row's text is the letter's written date (11.1 marks it read on the witness's side)
    var noteDay = String(b.written || '').replace(/[^0-9-]/g, '').slice(0, 10); if (!noteDay) throw { code: 'empty' };
    if (!roadRows_(ss, L.email).some(function (r) { return r.what === 'noteread' && r.text === noteDay; })) roadRow_(ss, L.email, '', 'noteread', noteDay, roadWeek_(cfg, L).start);
    return { ok: true };
  }
  if (action === 'road_ours') { // build 11.0: Our House, read only (loaded when he opens it)
    var oWeek = roadWeek_(cfg, L), oAll = entries_(ss), oBy = {}; oAll.forEach(function (x) { oBy[x.id] = x; });
    return { ok: true, ours: ourHouseOut_(ss, cfg, L, oWeek, oBy) };
  }
  if (action === 'road_ui') {
    var uiKey = String(b.key || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40); if (!uiKey) throw { code: 'ui' };
    roadRow_(ss, L.email, uiKey, 'ui', b.state === 'shut' ? 'shut' : 'open', '');
    return { ok: true };
  }
  var id = String(b.id || ''); if (!id) throw { code: 'no_entry' };
  var rows = roadRows_(ss, L.email), mine = rows.filter(function (r) { return r.id === id; });
  if (!mine.filter(function (r) { return r.what === 'given'; }).length) throw { code: 'not_his' };
  if (action === 'road_open') { if (!mine.filter(function (r) { return r.what === 'opened'; }).length) roadRow_(ss, L.email, id, 'opened', '', ''); return { ok: true }; }
  if (action === 'road_word') { var w = String(b.word || ''); if (w !== 'met' && w !== 'not') throw { code: 'bad_word' }; roadRow_(ss, L.email, id, w, '', ''); try { tallyEntry_(ss, id); } catch (xt) { log_(ss, 'road', 'the tally could not be kept for ' + id, String(xt && xt.stack || xt).slice(0, 200)); } return { ok: true }; }
  if (action === 'road_why') { // build 10.2.4: What made it a no? valid only after a 'not' on the same id; the latest wins
    var why = String(b.reason || '').toLowerCase().trim(); if (why !== 'too_long' && why !== 'not_needed') throw { code: 'bad_reason' };
    var lastWord = mine.filter(function (r) { return r.what === 'met' || r.what === 'not'; }).pop();
    if (!lastWord || lastWord.what !== 'not') throw { code: 'no_not' };
    roadRow_(ss, L.email, id, 'why', why, '');
    try { tallyEntry_(ss, id); } catch (xt2) { log_(ss, 'road', 'the tally could not be kept for ' + id, String(xt2 && xt2.stack || xt2).slice(0, 200)); }
    return { ok: true, reason: why };
  }
  if (action === 'road_answer') {
    var text = String(b.text || '').trim().slice(0, 2000); if (!text) throw { code: 'empty' };
    if (mine.filter(function (r) { return r.what === 'answer'; }).length) throw { code: 'answered' };
    roadRow_(ss, L.email, id, 'answer', text, '');
    var strand = landNextStrand_(rows); roadRow_(ss, L.email, id, 'strand', strand, '');
    var e = findEntry_(ss, id);
    roadAnswerCard_(ss, cfg, L, e, text);
    var level = landSort_(cfg, text); if (level) { try { roadRow_(ss, L.email, id, 'level', level, ''); } catch (xv) {} if (level === 'now') landNow_(ss, cfg, L, e, text); }
    return { ok: true, sent: dayLabel_(new Date()), strand: strand };
  }
  throw { code: 'unknown_action' };
}
/** Every answer is read by a person before anything else happens with it: one card on the desk owner's lane, Done when read (RE14). */
function roadAnswerCard_(ss, cfg, L, e, text) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getDataRange().getValues();
    var key = 'hisroad:answer:' + e.id + ':' + L.email;
    for (var i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) return;
    var first = (L.name || L.email).split(/\s+/)[0];
    var row = []; row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = cfg['desk owner'] || 'John';
    row[H['do this']] = 'Read his answer — ' + first; row[H['for']] = 'For his road · read first';
    row[H['because']] = 'The piece: ' + e.claim + ' (' + voiceOf_(e.source) + ').\nThe question: ' + e.question2 + '\nHis answer: “' + text + '”\n' + (L.name || L.email) + (L.room ? ' · ' + L.room : '');
    row[H['link']] = ''; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['done at']] = ''; row[H['rule']] = 'RE14';
    for (var c = 0; c < sh.getLastColumn(); c++) if (row[c] === undefined) row[c] = '';
    sh.appendRow(row);
  } catch (x) { log_(ss, 'road', 'answer card not written for ' + L.email, String(x).slice(0, 160)); }
}

/** Build 11.0: a line he wrote that is not an answer to a piece (Wednesday's line, Make Something of It) is read by a person too: one card on the desk owner's lane. */
function roadLineCard_(ss, cfg, L, key0, question, text) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getDataRange().getValues();
    var key = 'hisroad:line:' + key0 + ':' + L.email;
    for (var i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) return;
    var first = (L.name || L.email).split(/\s+/)[0];
    var row = []; row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = cfg['desk owner'] || 'John';
    row[H['do this']] = 'Read his line — ' + first; row[H['for']] = 'For his road · read first';
    row[H['because']] = 'The question: ' + question + '\nHis line: “' + text + '”\n' + (L.name || L.email) + (L.room ? ' · ' + L.room : '');
    row[H['link']] = ''; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['done at']] = ''; row[H['rule']] = 'RE14';
    for (var c = 0; c < sh.getLastColumn(); c++) if (row[c] === undefined) row[c] = '';
    sh.appendRow(row);
  } catch (x) { log_(ss, 'road', 'line card not written for ' + L.email, String(x).slice(0, 160)); }
}

/* ---- the man's version of an entry: Entries X–AB, written each morning so John reads it before he releases (4.0.2: read back before it is written) ---- */
function roadWriteLines_(ss, cfg, max) {
  var key = claudeKey_(); if (!key) { log_(ss, 'road', 'lines not written', 'no CLAUDE_KEY script property'); return 0; }
  var todo = entries_(ss).filter(function (e) { return (e.status === 'released' || e.status === 'candidate') && (!e.road || !e.todo || !e.question2 || !e.keywords || !e.week); });
  todo.sort(function (a, b) { return (b.status === 'released' ? 1 : 0) - (a.status === 'released' ? 1 : 0) || b.written.localeCompare(a.written); });
  var n = 0, map = courseMap_(ss);
  todo.slice(0, Math.max(1, max || 10)).forEach(function (e) {
    if (Date.now() - RE_START > 240000) return;
    var lines = roadLines_(cfg, key, e, map);
    if (!lines) return;
    ss.getSheetByName('Entries').getRange(e.row, EC.keywords, 1, 5).setValues([[lines.keywords, lines.road, lines.todo, lines.question, pairText_(lines.weeks, map)]]);
    n++;
  });
  if (n) log_(ss, 'road', 'lines written', n + ' entries (X–AB)');
  return n;
}
/** Every released entry's lines rewritten under the current rules (run by hand after an install that changes the writer). */
function roadRewriteAll() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), sh = ss.getSheetByName('Entries');
  entries_(ss).forEach(function (e) { if (e.status === 'released' || e.status === 'candidate') sh.getRange(e.row, EC.road, 1, 4).clearContent(); });
  return roadWriteLines_(ss, readConfig_(ss), 50);
}
/** The Course map tab (4.0.2): course, unit, name, question, practice, sentence, piece introduced, returns. Seeded from the Front Desk Weeks tab; the
 *  week's own words are filled by hand or by a later lift from the course. Returns { rows: [...], text: "<the list the writer reads>", names: [...], pieces: [...] }. */
var CM_HEAD = ['course', 'unit (week or section)', 'name (the course\'s own)', 'the question we ask that week', 'the practice we ask before the next night', 'the sentence the week turns on', 'piece introduced (the chronicle\'s name)', 'returns (yes when the question comes back later in the road)', 'piece address (where he writes it)', 'age (then, now, ahead)'];
var WAYMARK_NAMES = ['The Watchpost', 'From the Ground Up', 'The Word for It', 'Past Tense', 'The Whole Story', 'One Heart', 'The Old Vows', 'Me and We', 'Part of Something Larger'];
/** A Course map waymark cell ("1 The Watchpost") as a number 1–9: the name first (the column names the nine by name), else the leading digit; 0 for a blank or anything else. */
function waymarkNum_(cell) {
  var s = String(cell || '').trim(); if (!s) return 0;
  var low = s.toLowerCase();
  for (var i = 0; i < WAYMARK_NAMES.length; i++) if (low.indexOf(WAYMARK_NAMES[i].toLowerCase()) >= 0) return i + 1;
  var m = s.match(/^([1-9])(?!\d)/); return m ? Number(m[1]) : 0;
}
function courseMap_(ss) {
  var out = { rows: [], text: '', names: [], pieces: [] };
  try {
    var sh = ss.getSheetByName('Course map');
    if (sh && sh.getLastRow() >= 2) {
      var wmCol = -1, wlCol = -1; try { sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0].forEach(function (h, i) { var ht = String(h || '').trim(); if (wmCol < 0 && /^waymark/i.test(ht)) wmCol = i; if (wlCol < 0 && /^week line/i.test(ht)) wlCol = i; }); } catch (xh) {}
      sh.getRange(2, 1, sh.getLastRow() - 1, Math.max(Math.min(CM_HEAD.length, sh.getMaxColumns()), wmCol >= 0 ? wmCol + 1 : 0, wlCol >= 0 ? wlCol + 1 : 0)).getValues().forEach(function (r) {
        var row = { course: String(r[0] || '').trim(), unit: String(r[1] || '').trim(), name: String(r[2] || '').trim(), question: String(r[3] || '').trim(), practice: String(r[4] || '').trim(), sentence: String(r[5] || '').trim(), piece: String(r[6] || '').trim(), returns: /^y/i.test(String(r[7] || '')), address: String(r[8] || '').trim(), age: String(r[9] || '').trim(), waymark: wmCol >= 0 ? waymarkNum_(r[wmCol]) : 0, weekLine: wlCol >= 0 ? String(r[wlCol] || '').trim() : '' };
        if (row.course && row.unit) out.rows.push(row);
      });
    }
    if (!out.rows.length) {
      var wk = deskSheet_().getSheetByName('Weeks');
      if (wk && wk.getLastRow() >= 2) {
        var H = headerIndex_(wk);
        wk.getRange(2, 1, wk.getLastRow() - 1, wk.getLastColumn()).getValues().forEach(function (r) {
          var w = String(r[H['week']] || '').trim(), t = String(r[H['what opens']] || '').trim(), p = String(r[H['piece introduced']] || '').trim();
          if (w && t) out.rows.push({ course: 'Breaking Free', unit: w, name: t, question: '', practice: '', sentence: '', piece: p, returns: false });
        });
      }
    }
  } catch (e) {}
  out.rows.forEach(function (r) {
    if (r.name) out.names.push(r.name);
    if (r.piece) out.pieces.push(r.piece);
    out.text += (out.text ? '\n' : '') + r.course + ' · Week ' + r.unit + ': ' + r.name + (r.piece ? ' (story work that week: ' + r.piece + ')' : '') + (r.question ? '\n   the question we ask that week: ' + r.question : '') + (r.practice ? '\n   the practice before the next night: ' + r.practice : '') + (r.sentence ? '\n   the sentence the week turns on: ' + r.sentence : '');
  });
  return out;
}
var YOUR_STORY_PIECES = ['Where I Am From', 'Write a Lament', 'Asked of Me', 'What Kind of Light', 'Set a Stone', 'Where Are You', 'The Road I Walked', 'Ending Well'];
/** The read-back (4.0.2): the reasons a set of lines fails, as one string, or '' when it passes. */
function roadLinesFail_(L, map) {
  var all = [L.road, L.todo, L.question].join(' \n '), why = [];
  if (/\bbrother\b|\bnext man\b|\bstranger\b/i.test(all)) why.push('a banned word (brother, next man, stranger)');
  if (/\bweek\s*\d+\b|\bweeks?\s+\d+\s+and\s+\d+\b/i.test(all)) why.push('a week number in the lines');
  var names = (map && map.names || []).filter(function (t) { return t.length > 3; });
  for (var i = 0; i < names.length; i++) { var t = names[i].replace(/^(week\s*\d+\s*[—–:-]\s*)/i, '').replace(/[^\w\s']/g, ' ').trim(); if (t.length > 3 && new RegExp('\\b' + t.replace(/\s+/g, '\\s+') + '\\b', 'i').test(all)) { why.push('a week title in the lines (' + names[i] + ')'); break; } }
  if (/\b(your|his|our) room\b/i.test(all)) why.push('the word room for the group (say your group)');
  if (/\b(a man|someone|anyone|one man) in your (room|group)\b|\byour room needs\b|\bwhose story you have heard\b|\bfacilitat|\blead(s|ing)? the room\b|\bthe men you (serve|lead|guide)\b|\bas (a|the|their) (leader|facilitator)\b|\bwhen a man needs a hard word\b|\bin the room when a man\b/i.test(all)) why.push('the facilitator\'s chair (a line about leading, reading or correcting the men in his room)');
  var pieces = YOUR_STORY_PIECES.concat(map && map.pieces || []);
  for (var j = 0; j < pieces.length; j++) {
    var p = pieces[j]; if (!p || p.length < 4) continue;
    var re = new RegExp('\\b' + p.replace(/[^\w\s']/g, ' ').trim().replace(/\s+/g, '\\s+') + '\\b', 'i');
    if (re.test(L.todo) && !/^write\b/i.test(p) && !new RegExp('\\bwrite\\b[^.]{0,40}' + p.replace(/[^\w\s']/g, ' ').trim().replace(/\s+/g, '\\s+'), 'i').test(L.todo)) { why.push('the one thing assumes ' + p + ' is already written; say the step first ("' + (/^write\b/i.test(p) ? p : 'Write ' + p) + ', about ten minutes, then…")'); break; }
  }
  if (/\bWhere I'm From\b/i.test(all)) why.push('the piece is named "Where I Am From" on the chronicle');
  if (/\bwrite\s+write\b/i.test(all)) why.push('a doubled word ("Write Write")');
  return why.join('; ');
}
/** Every entry's lines read back against the standard as it stands now; the ones that fail are cleared and written again (run by hand after a rule changes). */
function roadRewriteFlagged() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), sh = ss.getSheetByName('Entries'), map = courseMap_(ss), bad = [];
  entries_(ss).forEach(function (e) {
    if (!(e.status === 'released' || e.status === 'candidate') || !(e.road && e.todo && e.question2)) return;
    var why = roadLinesFail_({ road: e.road, todo: e.todo, question: e.question2 }, map);
    if (why) { bad.push(e.id + ': ' + why); sh.getRange(e.row, EC.road, 1, 4).clearContent(); }
  });
  log_(ss, 'road', 'lines read back against the standard', bad.length ? bad.join(' | ') : 'every entry passes');
  return bad.length ? roadWriteLines_(ss, readConfig_(ss), 50) : 0;
}
function roadLines_(cfg, key, e, map) {
  var system = 'You write the version of a research entry that a man on the road reads on his own page at Ancient Path Biblical Coaching, a Christian men\'s coaching practice. He is in a group course (twelve weeks; his group meets once a week) or did one-on-one work. He is not a facilitator and never leads the group. ' +
    'Voice: plain and clear, not formal, not folksy; American spelling; never the word "brother"; never a person\'s name; say "our team", never two founders\' names; never "the next man" or "a stranger"; Scripture in ESV wording with its reference. Keep the enemy to the minimum. Never write an out for not doing the work. ' +
    'Rules that fail the read if broken: (1) Write to him about his own road only. Never about leading, reading, correcting or helping the men in his group as their leader; never "a man in your group needs", "a man from your group needs", "whose story you have heard". When you speak of his group, say "your group" or "a man from your group", never "your room" or "the room" for the group (a literal use, such as "get out of the room", is fine). His own practice of calling another man, or asking one man for help, is his road and may be named. (2) Never name a course week by number or by title in the three lines (not "Week 9", not "Roots Run Deep"): name the theme in the course\'s own words. The week an entry serves goes in the "weeks" field only, one unit per course it serves; a course it does not serve is left out. (3) When the course map gives the week\'s own question, practice or sentence, lift those words verbatim; do not paraphrase them. (4) The one thing to do needs nothing but the piece he just read and his own week. If it names a Your Story piece (Where I Am From, Write a Lament, Asked of Me, What Kind of Light, Set a Stone, Where Are You), it says the step first and in order: "Write Where I Am From, about ten minutes, then …", using the piece\'s name exactly as given. ' +
    'Reply as JSON only: {"keywords": "<the course key words, terms and teaching concepts this entry touches, comma-separated, as the courses name them>", "weeks": {"<a course name exactly as the map names it>": <the one unit of that course this entry serves best, a number>}, "road": "<What it means for your road: two to four sentences to him, the theme in the course\'s own words, what the claim means for his week, and the verse with its reference. No quotes from the source here. No week number or title.>", "todo": "<One thing to do this week: one or two sentences, imperative, something he can do before his group meets.>", "question": "<One question back: one sentence he can answer in a few lines about his own week; answerable without naming another person.>"}';
  var mens = String(e.audience || '').match(/men:\s*([^·]+)/i);
  var user = 'The entry:\nClaim: ' + e.claim + '\nSource: ' + e.source + '\nPlace on the road: ' + e.place + (mens ? '\nThe line written for men: ' + mens[1].trim() : '') + '\nRead against the text: ' + e.beside + '\nAlready ours: ' + e.ours + '\nIn their words: ' + (e.quotes || '(none yet)') + '\n\nThe course map, in each course\'s own words (a man may be in one or two of these; give the unit this entry serves in every course it serves):\n' + ((map && map.text) || '(not available)');
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var unlabel = function (t) { return String(t || '').trim().replace(/^(what it means for your road|one thing to do( this week)?|(one |a )?question back)\s*[:—\-]\s*/i, '').trim(); };
  var attempt = function (extra) {
    var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', { method: 'post', contentType: 'application/json', muteHttpExceptions: true, headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify({ model: cfg['road model'] || 'claude-sonnet-4-5', max_tokens: 1400, system: system, messages: [{ role: 'user', content: user + (extra ? '\n\nYour last answer failed the read: ' + extra + '. Write it again, keeping every rule.' : '') }] }) });
    if (res.getResponseCode() !== 200) { log_(ss, 'road', 'lines: Claude ' + res.getResponseCode() + ' for ' + e.id, String(res.getContentText() || '').slice(0, 200)); return null; }
    var j = JSON.parse(res.getContentText()); var txt = (j.content || []).map(function (c) { return c && typeof c.text === 'string' ? c.text : ''; }).join('\n');
    var m = txt.match(/\{[\s\S]*\}/); var ans = m ? JSON.parse(m[0]) : null;
    if (!ans || !ans.road || !ans.todo || !ans.question) return null;
    var weeks = {}; var W = ans.weeks && typeof ans.weeks === 'object' ? ans.weeks : (ans.week ? { first: ans.week } : {});
    Object.keys(W).forEach(function (k) { var c = k === 'first' ? courseList_(map)[0] : courseOf_(k, map), v = String(W[k] == null ? '' : W[k]).toLowerCase().trim(); if (c && /^\d+$/.test(v)) weeks[c.abbr.toLowerCase()] = Number(v); });
    if (!Object.keys(weeks).length) weeks.any = true;
    return { keywords: String(ans.keywords || '').slice(0, 300), road: unlabel(ans.road).slice(0, 900), todo: unlabel(ans.todo).slice(0, 400), question: unlabel(ans.question).slice(0, 300), weeks: weeks };
  };
  try {
    var titles = (map && map.names || []).map(function (t) { return t.replace(/^(week\s*\d+\s*[—–:-]\s*)/i, '').trim(); }).filter(Boolean);
    var avoid = titles.length ? ' These are the course\'s week titles; never write any of them, in whole or in part, anywhere in the three lines (say what the week teaches in other words): ' + titles.join(' · ') + '.' : '';
    var L = attempt(''); if (!L) return null;
    var why = roadLinesFail_(L, map), tries = 0;
    while (why && tries < 2) { tries++; log_(ss, 'road', 'lines read back and rewritten for ' + e.id + ' (' + tries + ')', why); L = attempt(why + avoid); if (!L) return null; why = roadLinesFail_(L, map); }
    if (why) { log_(ss, 'road', 'lines failed the read three times for ' + e.id + ' (left empty; not given)', why); return null; }
    return L;
  } catch (x) { log_(ss, 'road', 'lines failed for ' + e.id, String(x && (x.code || x.message) || x).slice(0, 160)); return null; }
}
function roadLinesNow() { var ss = SpreadsheetApp.openById(RE_SHEET_ID); ensureBuild4_(ss); ensureBuild402_(ss); return roadWriteLines_(ss, readConfig_(ss), 20); }

/* ═══════════ build 4.0.2 · the sheet: Entries AB, the Course map tab, the picture, the Standard rows ═══════════ */
var CONFIG_402 = [
  ['road picture', 'https://raw.githubusercontent.com/johnlsherrod/ancient-path/main/pictures/threshing-floor.jpg', 'build 4.0.2: the picture at the head of For your road (the threshing floor, house style, in the repo); blank = no picture']
];
var STANDARD_402 = {
  'for his road': ['for his road', 'what it means for your road, written to the man about his own road: two to four plain sentences that name the theme in the course\'s own words (never a week number or title) and carry the verse; never about leading, reading or correcting the men in his group; no names, never "brother" (4.0.2)', 'build 4.0.2 (Y)'],
  'one thing to do': ['one thing to do', 'one thing he can do this week before his group meets, one or two sentences, imperative, plain; it needs nothing but the piece and his week, and if it names a Your Story piece it says the step first ("Write Where I Am From, about ten minutes, then…") (4.0.2)', 'build 4.0.2 (Z)'],
  'week served': ['week served', 'the one course week this entry serves best, a number, or "any" when it is not tied to a week; set by the morning writer, read by the choosing step (his week or earlier, never later) (4.0.2)', 'build 4.0.2 (AB)']
};
function applyBuild402() { PropertiesService.getScriptProperties().deleteProperty('b402'); ensureBuild402_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild402_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b402') === '1') return;
  var did = [];
  var en = ss.getSheetByName('Entries');
  if (en) { widen_(en, EC.week); if (!en.getRange(1, EC.week).getValue()) { en.getRange(1, EC.week).setValue('week served'); did.push('Entries AB'); } }
  if (!ss.getSheetByName('Course map')) {
    var cm = ss.insertSheet('Course map'); cm.getRange(1, 1, 1, CM_HEAD.length).setValues([CM_HEAD]); cm.setFrozenRows(1);
    var seed = courseMap_(ss).rows.map(function (r) { return [r.course, r.unit, r.name, '', '', '', r.piece, '', '', '']; });
    if (seed.length) cm.getRange(2, 1, seed.length, CM_HEAD.length).setValues(seed);
    did.push('Course map tab (' + seed.length + ' rows from the Weeks tab)');
  }
  var cfg = readConfig_(ss);
  CONFIG_402.forEach(function (r) { if (!(r[0] in cfg)) { ss.getSheetByName('Config').appendRow(r); did.push('Config ' + r[0]); } });
  if (String(cfg['road daily'] || '') === '6') { setConfig_(ss, 'road daily', '8'); did.push('road daily 6 → 8 (after the 6:40 item and the 7:45 deepening, so the day\'s entries carry their lines when John reads them)'); }
  var st = ss.getSheetByName('Standard');
  if (st) {
    var sv = st.getRange(1, 1, Math.max(1, st.getLastRow()), 1).getValues(), seen = {};
    for (var j = 0; j < sv.length; j++) { var kk = String(sv[j][0] || '').toLowerCase().trim(); if (STANDARD_402[kk]) { st.getRange(j + 1, 1, 1, 3).setValues([STANDARD_402[kk]]); seen[kk] = 1; } }
    Object.keys(STANDARD_402).forEach(function (key) { if (!seen[key]) { st.appendRow(STANDARD_402[key]); did.push('Standard ' + key); } });
    did.push('Standard for his road / one thing to do brought to 4.0.2');
  }
  // John's own Learners row (by hand, no room) takes the first cohort's room on the Rooms tab, so the first learner reads what a man in that room reads (ruled Oct 22)
  try {
    var le = ss.getSheetByName('Learners'), rs = deskSheet_().getSheetByName('Rooms');
    if (le && rs && le.getLastRow() >= 2 && rs.getLastRow() >= 2) {
      var RH = headerIndex_(rs), rv = rs.getRange(2, 1, rs.getLastRow() - 1, rs.getLastColumn()).getValues();
      var first = rv.map(function (r) { return String(r[RH['room']] || '').trim(); }).filter(Boolean)[0] || '';
      var lv = le.getRange(2, 1, le.getLastRow() - 1, LC.note).getValues();
      lv.forEach(function (r, i) {
        if (first && String(r[LC.how - 1]).toLowerCase() === 'by hand' && !String(r[LC.room - 1]).trim()) { le.getRange(i + 2, LC.room, 1, 2).setValues([[first, first.split(/\s+[—–-]\s+/)[0].trim()]]); did.push('Learners: ' + r[LC.email - 1] + ' given the room ' + first); }
      });
    }
  } catch (xl) { log_(ss, 'build 4.0.2', 'the first learner\'s room could not be set', String(xl).slice(0, 160)); }
  props.setProperty('b402', '1');
  log_(ss, 'build 4.0.2', 'made: ' + (did.join(', ') || 'nothing new'));
}

/* ═══════════ build 4.0.3 · the Bring-it standard on the Standard tab ═══════════ */
var STANDARD_403 = {
  'bring it': ['bring it', 'every "Bring it to the room" line (the move) is three to five minutes of room time, written as the two or three points a facilitator would say, one per line; a question to ask the room is one point, in quotation marks; never a paragraph (ruled Oct 23, 2026)', 'build 4.0.3 (the move, column O)']
};
function applyBuild403() { PropertiesService.getScriptProperties().deleteProperty('b403'); ensureBuild403_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild403_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b403') === '1') return;
  var did = [];
  var st = ss.getSheetByName('Standard');
  if (st) {
    var sv = st.getRange(1, 1, Math.max(1, st.getLastRow()), 1).getValues(), seen = {};
    for (var j = 0; j < sv.length; j++) { var kk = String(sv[j][0] || '').toLowerCase().trim(); if (STANDARD_403[kk]) { st.getRange(j + 1, 1, 1, 3).setValues([STANDARD_403[kk]]); seen[kk] = 1; } }
    Object.keys(STANDARD_403).forEach(function (key) { if (!seen[key]) { st.appendRow(STANDARD_403[key]); did.push('Standard ' + key); } });
  }
  props.setProperty('b403', '1');
  log_(ss, 'build 4.0.3', 'made: ' + (did.join(', ') || 'nothing new'));
}

/* ═══════════ build 4.1 · one band, three rooms (row.js build 3) ═══════════
 * John, Oct 21, 2026: "we need a consistent ui." Your Growth's band is the house band: row.js (loaded on /start and /front-desk) now redraws
 * each page's own band into the house shape — a picture full width above it when Config "band picture page" / "band picture desk" holds an
 * address, the eyebrow, the greeting, one line, Your Page's three stops as their own line, and the row for desk holders — aligned to the
 * page's own left edge. No page changed; the pictures land by filling the two Config cells. */
var CONFIG_41 = [
  ['band picture page', '', 'build 4.1: the address of the picture above the band on Your Page (house style, 1456×819, from the repo\'s pictures/ folder); blank = no picture yet'],
  ['band picture desk', '', 'build 4.1: the address of the picture above the band on Your Desk; blank = no picture yet']
];
function ensureBuild41_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b41') === '1') return;
  var cfg = readConfig_(ss), did = [];
  CONFIG_41.forEach(function (r) { if (!(r[0] in cfg)) { ss.getSheetByName('Config').appendRow(r); did.push('Config ' + r[0]); } });
  props.setProperty('b41', '1');
  log_(ss, 'build 4.1', 'made: ' + (did.join(', ') || 'nothing new'));
}
/** row.js with the two picture addresses filled in; the Config read is cached five minutes so a page load costs nothing. */
function rowJs_() {
  var pics = null;
  try { var c = CacheService.getScriptCache().get('bandpics'); if (c) pics = JSON.parse(c); } catch (e) {}
  if (!pics) {
    pics = { page: '', desk: '' };
    try { var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID)); pics = { page: String(cfg['band picture page'] || '').trim(), desk: String(cfg['band picture desk'] || '').trim() }; } catch (e) {}
    try { CacheService.getScriptCache().put('bandpics', JSON.stringify(pics), 300); } catch (e) {}
  }
  return ROW_JS.replace('__PICS__', JSON.stringify(pics));
}

/* ═══════════ build 5 · the land (For his road — the place; ruled with John Oct 24–26, 2026) ═══════════
 * The head of For your road is the man's own land, told in three ages (the text's world at the gate, his own today at his house, what is
 * still ahead on the horizon). The pictures are read by piece name from the Drive folder "Ancient Path — pictures" (gate-ruled, house-ruled,
 * horizon-ruled; stream, stones, garden, table the day they land there); the land shows only for the people Config "land" names (John first,
 * then "all"). Two asks under the piece: what he is practicing this week (the course's own practices, from the Course map, or his own words)
 * and the question back, each answer landing in a strand in turn (did · saw · know). The morning after he answers, a word for the road is
 * written under his answer (a verse, one question, one step; quotes and asks, never prescribes). A notice with no words goes out only when
 * Config "road notice" says so. Every answer is sorted the same minute into now / soon / ordinary; "now" reaches our team the same hour.
 * Nothing in this build names a course: the age, the practices and the pieces come from the Course map and the chronicle. */
var LAND_FOLDER_DEFAULT = '1nGJCBU9TjKs84TL06ln_qsofzIUz9PSx';
var LAND_PLACES = ['gate', 'stream', 'stones', 'garden', 'house', 'table', 'horizon', 'land'];
/** The places a man can leave one line at on the walk (build 8.6): the gate, the stream, the stones, his house, the horizon. */
var LAND_ASKED = ['gate', 'stream', 'stones', 'house', 'horizon'];
var CONFIG_5 = [
  ['land', 'john@ancientpathcoaching.com', 'build 5: who sees the land at the head of For your road — addresses separated by commas, "all" for every open learner, "off" for no one; everyone else sees the 4.0.2 head'],
  ['land pictures folder', LAND_FOLDER_DEFAULT, 'build 5: the Drive folder the land reads its pictures from, by piece name (land-ruled for the one wide landscape; gate-ruled, house-ruled, horizon-ruled, stream-ruled, stones-ruled, garden-ruled, table-ruled; webp, jpg or png); a file is shared by link the first time it is read'],
  ['land pictures base', '', 'build 5: when set, the land reads <base>/<place>-ruled.jpg from the web instead of the Drive folder (the repo\'s pictures/land/ folder, later)'],
  ['road notice', 'off', 'build 5: "email" sends one line with no words ("There is something new on your page.") when a piece or a word lands for a man; "off" sends nothing. The channel is John\'s to rule'],
  ['road word label', 'A word for the road', 'build 5: the label over the engine\'s weekly line under his answer (proposed; John\'s to rule)']
];
var STANDARD_5 = {
  'a word for the road': ['a word for the road', 'the engine\'s line the morning after a man answers: a verse (ESV, with its reference), one question, one step, drawn from his own words, the course\'s sentences for that week and the text, in the house voice. It quotes and asks and never prescribes: a line that tells a man his next step fails the read ("your next step", "you should", "you must", "you need to"). Never a week number or title; never a name; never "brother". (build 5)', 'build 5 (Road, kind word)'],
  'the land': ['the land', 'every element on the land holds his sentence or a verse; no counts, nothing fills by itself, nothing colored for success, no streak, no "you missed"; no minutes, days or clock anywhere a man reads; the method (then, now, ahead) is carried by the pictures and never named on a learner-facing surface. (build 5)', 'build 5 (road.js)']
};
function applyBuild5() { PropertiesService.getScriptProperties().deleteProperty('b5'); ensureBuild5_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild5_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b5') === '1') return;
  var did = [];
  var cfg = readConfig_(ss);
  CONFIG_5.forEach(function (r) { if (!(r[0] in cfg)) { ss.getSheetByName('Config').appendRow(r); did.push('Config ' + r[0]); } });
  var cm = ss.getSheetByName('Course map');
  if (cm) {
    widen_(cm, CM_HEAD.length);
    var head = cm.getRange(1, 1, 1, CM_HEAD.length).getValues()[0];
    for (var c = 0; c < CM_HEAD.length; c++) if (!String(head[c] || '').trim()) { cm.getRange(1, c + 1).setValue(CM_HEAD[c]); did.push('Course map ' + CM_HEAD[c].split(' (')[0]); }
  }
  var st = ss.getSheetByName('Standard');
  if (st) {
    var sv = st.getRange(1, 1, Math.max(1, st.getLastRow()), 1).getValues(), seen = {};
    for (var j = 0; j < sv.length; j++) { var kk = String(sv[j][0] || '').toLowerCase().trim(); if (STANDARD_5[kk]) { st.getRange(j + 1, 1, 1, 3).setValues([STANDARD_5[kk]]); seen[kk] = 1; } }
    Object.keys(STANDARD_5).forEach(function (key) { if (!seen[key]) { st.appendRow(STANDARD_5[key]); did.push('Standard ' + key); } });
  }
  props.setProperty('b5', '1');
  log_(ss, 'build 5', 'made: ' + (did.join(', ') || 'nothing new'));
}
/** Is the land open to this man? Build 10.1: yes, for every man with a row (and a bare land for one without; see roadBare_). */
function landOn_(cfg, L) {
  // build 10.1: the land is every man's; Config "land" no longer gates it (the row is kept so a sheet that still has it reads the same)
  return true;
}
/** The land's pictures by place name: from the web base when Config names one, else from the Drive folder (shared by link the first time);
 *  cached ten minutes so a page load costs nothing. */
function landPictures_(cfg) {
  var cache = null; try { cache = CacheService.getScriptCache(); var c = cache.get('landpics5'); if (c) return JSON.parse(c); } catch (e) {}
  var out = {}, base = String(cfg['land pictures base'] || '').trim().replace(/\/+$/, '');
  if (base) {
    LAND_PLACES.forEach(function (p) { out[p] = base + '/' + p + '-ruled.jpg'; });
  } else {
    try {
      var folder = DriveApp.getFolderById(String(cfg['land pictures folder'] || LAND_FOLDER_DEFAULT).trim());
      var files = folder.getFiles(), newest = {};
      while (files.hasNext()) {
        var f = files.next(), m = String(f.getName()).match(/^([a-z]+)-ruled\.(webp|jpe?g|png)$/i);
        if (!m || LAND_PLACES.indexOf(m[1].toLowerCase()) < 0) continue;
        var key = m[1].toLowerCase(), t = f.getLastUpdated().getTime();
        if (!newest[key] || t > newest[key].t) newest[key] = { f: f, t: t };
      }
      Object.keys(newest).forEach(function (key) {
        var f = newest[key].f;
        try { if (f.getSharingAccess() !== DriveApp.Access.ANYONE_WITH_LINK && f.getSharingAccess() !== DriveApp.Access.ANYONE) f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch (es) { try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'land', 'picture could not be shared by link: ' + f.getName(), String(es).slice(0, 160)); } catch (e3) {} }
        out[key] = 'https://drive.google.com/thumbnail?id=' + f.getId() + '&sz=w1800';
      });
    } catch (e2) { try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'land', 'pictures folder not read', String(e2).slice(0, 160)); } catch (e4) {} }
  }
  try { cache.put('landpics5', JSON.stringify(out), 600); } catch (e5) {}
  return out;
}
/** The age a week's piece stands in, from the Course map (then · now · ahead); a blank row falls to the rule: the first half of the course then, the rest now. */
function landAge_(map, course, weekNum, weeks) {
  var rows = (map && map.rows || []).filter(function (r) { return !course || r.course.toLowerCase() === String(course).toLowerCase(); });
  var row = rows.filter(function (r) { return String(r.unit) === String(weekNum); })[0];
  var v = row && row.age ? row.age.toLowerCase() : '';
  if (/^then/.test(v)) return 'then';
  if (/^now/.test(v)) return 'now';
  if (/^ahead/.test(v)) return 'ahead';
  var n = Number(weekNum) || 0, total = Number(weeks) || rows.length || 0;
  if (!n || !total) return 'then';
  if (n > total) return 'now';
  return n <= Math.ceil(total / 2) ? 'then' : 'now';
}
/** The week's practices from the Course map, split into the numbered items the course lists ("1. … 2. …"); each is offered to the man verbatim. */
function landPractices_(map, course, weekNum) {
  var rows = (map && map.rows || []).filter(function (r) { return (!course || r.course.toLowerCase() === String(course).toLowerCase()) && String(r.unit) === String(weekNum); });
  var text = rows.length ? rows[0].practice : '';
  if (!text) return [];
  return practiceItems_(text);
}
/** Build 10.2.2: split a practice cell into its numbered items. An item number counts only when it stands at the start or after a space AND is the next number in order
 *  (1, then 2, then 3…), so "Memorize Hebrews 12:11. Say it out loud" and "Psalm 139:23-24. 3. Pray" are not cut at the verse. A cell with no "1." is one item, whole. */
function practiceItems_(text) {
  var t = String(text || '').trim(); if (!t) return [];
  var re = /(^|\s)(\d{1,2})\.\s/g, m, want = 1, marks = [];
  while ((m = re.exec(t))) { if (Number(m[2]) === want) { marks.push({ at: m.index + m[1].length, len: m[0].length - m[1].length }); want++; } }
  if (!marks.length) return [t];
  var out = [];
  marks.forEach(function (k, i) { var end = i + 1 < marks.length ? marks[i + 1].at : t.length; var item = t.slice(k.at + k.len, end).trim(); if (item) out.push(item); });
  return out.length ? out.slice(0, 8) : [t];
}
/** The strand his next answer lands in: did, saw, know, in turn, by the strand rows already on his road. */
function landNextStrand_(rows) {
  var n = rows.filter(function (r) { return r.what === 'strand'; }).length;
  return ['did', 'saw', 'know'][n % 3];
}
function landStrandOf_(rows, id) { var s = rows.filter(function (r) { return r.what === 'strand' && r.id === id; }).pop(); return s ? s.text : 'did'; }
function landWordOf_(rows, id) {
  var w = rows.filter(function (r) { return r.what === 'word' && r.id === id; }).pop(); if (!w) return null;
  try { var j = JSON.parse(w.text); j.when = w.when; return j; } catch (e) { return null; }
}
/** The land for a man the road has no row for (build 10.1): the pictures and the five places, nothing of his own. */
function landBare_(cfg) {
  return { on: true, bare: true, seen: true, age: 'then', pictures: landPictures_(cfg), practices: [], practice: [], kept: null, answers: [], places: {}, readings: [], week: null };
}
/** The bare road (build 10.1): ok, bare, and the land. No week, no setup, no piece, no band; the page draws only the land, from the chronicle it already holds. */
function roadBare_(cfg) {
  return { ok: true, bare: true, build: ROAD_BUILD, today: dayLabel_(new Date()), ui: {}, band: null, land: landBare_(cfg) };
}
/** The band (build 10.1), as the page's band says it: "You are in week N of <course>. The room meets <Weekday, Month Day>, at <time> Central."
 *  The course is his room's (Rooms tab), else the course his road leads with; the week is the week of the room's next night (today counts), so on the
 *  Monday before Wednesday's night he is in the week Wednesday opens; the week's own name comes from the Course map; the story work introduced so far is every
 *  Course map row of that course up to his week with a piece named, each with the address where he writes it. Nothing here names a course or a piece. */
function bandOut_(ss, cfg, L, week, map) {
  var out = { course: '', week: 0, total: 0, unit: '', date: '', time: '', room: false, done: false, writes: [] };
  var r = L.room ? roomRow_({ room: L.room }) : null, C = week.courses, today = today_();
  var course = r ? roomCourse_(L.room) : (C && C.lead ? C.lead.name : '');
  if (!course) return out;
  out.course = course;
  var weekNum = 0;
  if (r) {
    out.room = true; out.total = r.weeks || 0; out.time = hourOf_(r.meets);
    var n = nightOnOrAfter_(r, today);
    if (n) { out.date = n.date; weekNum = Number(n.week) || 1; }
    else { out.done = true; weekNum = out.total; }
  } else if (C && C.lead) {
    weekNum = Number(C.lead.shown || C.lead.unit) || 0; out.total = Number(C.lead.total) || 0; out.done = C.lead.state === 'Finished';
  }
  out.week = weekNum;
  var rows = (map && map.rows || []).filter(function (q) { return sameCourse_(q.course, course); });
  var wk = rows.filter(function (q) { return String(q.unit) === String(weekNum); })[0];
  out.unit = wk ? wk.name : '';
  rows.forEach(function (q) { var u = Number(q.unit); if (q.piece && u && u <= weekNum) out.writes.push({ piece: q.piece, address: q.address || '', unit: u }); });
  return out;
}
/** The land's data for one learner (the pieces themselves are read on the page from the chronicle it already holds). */
function landFor_(ss, cfg, L, rows, week, map, byId) {
  var r = L.room ? roomRow_({ room: L.room }) : null;
  var age = landAge_(map, week.course, week.weekNum, r ? r.weeks : 0);
  var practice = newestFirst_(rows.filter(function (q) { return q.what === 'practice' && q.text; }))
    .map(function (q) { return { text: q.text, when: dayLabel_(q.when), week: q.week }; });
  var kept = practice.filter(function (p) { return p.week === week.start; })[0] || null;
  var answers = newestFirst_(rows.filter(function (q) { return q.what === 'answer' && q.text; }))
    .map(function (q) { return { id: q.id, text: String(q.text).slice(0, 600), when: dayLabel_(q.when), strand: landStrandOf_(rows, q.id) }; });
  var places = {};
  newestFirst_(rows.filter(function (q) { return q.what === 'place' && q.text && LAND_ASKED.indexOf(String(q.id)) >= 0; }))
    .forEach(function (q) { (places[q.id] = places[q.id] || []).push({ text: String(q.text).slice(0, 200), when: dayLabel_(q.when) }); });
  var wk = (map && map.rows || []).filter(function (q) { return q.course.toLowerCase() === String(week.course || '').toLowerCase() && String(q.unit) === String(week.weekNum); })[0];
  // build 10.1: the readings he opened, newest first, for the stream
  var readings = [];
  newestFirst_(rows.filter(function (q) { return q.what === 'opened' && byId && byId[q.id]; })).slice(0, 12).forEach(function (q) {
    var x = byId[q.id]; readings.push({ claim: x.claim, opened: dayLabel_(q.when), voice: voiceOf_(x.source), link: x.link, act: actOf_(x) });
  });
  return { on: true, seen: rows.some(function (q) { return q.what === 'land'; }), age: age, pictures: landPictures_(cfg),
    practices: landPractices_(map, week.course, week.weekNum), practice: practice, kept: kept, answers: answers, places: places, readings: readings,
    week: wk ? { unit: wk.unit, sentence: wk.sentence || '', question: wk.question || '' } : null };
}
/** The levels of When Someone Tells You, read the same minute an answer lands: "now" (danger now, to him or another) reaches our team the same hour. */
function landSort_(cfg, text) {
  var key = claudeKey_(); if (!key) return '';
  try {
    var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', { method: 'post', contentType: 'application/json', muteHttpExceptions: true, headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify({ model: cfg['claude model'] || 'claude-haiku-4-5', max_tokens: 20, system: 'You sort one short answer a man wrote on a Christian men\'s coaching site into one of three words and reply with that word only. "now": he says or clearly implies that he or another person is in danger now (harm to himself, harm to another, abuse of a child, a threat). "soon": a serious disclosure that is not an immediate danger (past abuse, a relapse, despair without a plan). "ordinary": everything else. Reply with one word: now, soon or ordinary.', messages: [{ role: 'user', content: String(text).slice(0, 2000) }] }) });
    if (res.getResponseCode() !== 200) return '';
    var j = JSON.parse(res.getContentText()); var t = ((j.content || [])[0] || {}).text || '';
    var m = String(t).toLowerCase().match(/now|soon|ordinary/); return m ? m[0] : '';
  } catch (e) { return ''; }
}
/** A "now" answer: the card is marked and our team is mailed the same minute. */
function landNow_(ss, cfg, L, e, text) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getDataRange().getValues();
    var key = 'hisroad:answer:' + e.id + ':' + L.email;
    for (var i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) { sh.getRange(i + 1, H['do this'] + 1).setValue('NOW — ' + String(data[i][H['do this']])); sh.getRange(i + 1, H['for'] + 1).setValue('For his road · read now'); break; }
  } catch (x) {}
  try {
    var to = Session.getEffectiveUser().getEmail();
    GmailApp.sendEmail(to, 'Ancient Path — read this now', 'An answer on For his road reads at the "now" level. Open the Front Desk:\n\nhttps://www.ancientpathcoaching.com/front-desk\n\n' + (L.name || L.email) + (L.room ? ' · ' + L.room : '') + '\n\n“' + text + '”\n', { name: 'Ancient Path' });
  } catch (x2) { log_(ss, 'road', 'now-level mail not sent for ' + L.email, String(x2).slice(0, 160)); }
}
/** The word for the road: for every answer without one, a verse, one question, one step, from his words, the week's own sentences and the text. Run by the morning. */
function roadWords_(ss, cfg, max, notify) {
  var key = claudeKey_(); if (!key) { log_(ss, 'road', 'words not written', 'no CLAUDE_KEY script property'); return 0; }
  var map = courseMap_(ss), all = entries_(ss), byId = {}; all.forEach(function (x) { byId[x.id] = x; });
  var n = 0; notify = notify || {};
  learners_(ss).forEach(function (L) {
    if (L.status !== 'open' || n >= (max || 10)) return;
    var rows = roadRows_(ss, L.email);
    rows.filter(function (q) { return q.what === 'answer' && q.text && byId[q.id]; }).forEach(function (q) {
      if (n >= (max || 10) || Date.now() - RE_START > 240000) return;
      if (rows.some(function (w) { return w.what === 'word' && w.id === q.id; })) return;
      var week = roadWeek_(cfg, L), e = byId[q.id];
      var w = roadWord_(cfg, key, L, e, q.text, landStrandOf_(rows, q.id), map, week);
      if (!w) return;
      roadRow_(ss, L.email, q.id, 'word', JSON.stringify(w), week.start);
      n++; notify[L.email] = L;
    });
  });
  if (n) log_(ss, 'road', 'words written', n + ' (a word for the road under his answer)');
  return n;
}
function roadWordFail_(w) {
  var all = [w.verse, w.question, w.step].join(' \n ');
  if (/\byour next step\b|\byou should\b|\byou must\b|\byou need to\b|\byou have to\b|\bnext step\b/i.test(all)) return 'it prescribes (next step, should, must, need to)';
  if (/\bbrother\b|\bnext man\b|\bstranger\b/i.test(all)) return 'a banned word';
  if (/\bweek\s*\d+\b/i.test(all)) return 'a week number';
  if (!/\d/.test(String(w.verse || ''))) return 'the verse has no reference';
  if (!/\?\s*$/.test(String(w.question || '').trim())) return 'the question is not a question';
  return '';
}
function roadWord_(cfg, key, L, e, answer, strand, map, week) {
  var rows = (map && map.rows || []).filter(function (r) { return r.course.toLowerCase() === String(week.course || '').toLowerCase() && String(r.unit) === String(week.weekNum); });
  var wk = rows[0] || null;
  var system = 'You write one short word for the road, in the house voice of Ancient Path Biblical Coaching (a Christian men\'s coaching practice), under an answer a man wrote on his own page. Plain and clear, not formal, not folksy; American spelling; Scripture in ESV wording with its reference. Never the word "brother"; never a person\'s name; never "the next man" or "a stranger"; never a week number or title. ' +
    'The rule: it quotes and asks and never prescribes. Three things only: (1) one verse, ESV, with its reference, chosen for what he wrote; (2) one question, one sentence, that takes him at his word and asks about his own road (never about another person by name, never a test); (3) one step, one sentence, plain, that he could take this week, offered as a word for the road, never as an instruction (no "your next step", "you should", "you must", "you need to"). Where the course map gives the week\'s own sentence, question or practice, lift those words where they fit. His sentence this week landed in the strand "' + strand + '" (did = what he did, saw = what he saw, know = what he knows now); let the question lean toward the strand he has not used. ' +
    'Reply as JSON only: {"verse": "<the verse with its reference, e.g. “…” (Psalm 1:3)>", "question": "<one question>", "step": "<one step>"}';
  var user = 'The piece he read: ' + e.claim + '\nWhat it means for his road: ' + e.road + '\nThe question he was asked: ' + e.question2 + '\n\nWhat he wrote: “' + answer + '”' +
    (wk ? '\n\nThe week in the course\'s own words:\n   the question we ask that week: ' + wk.question + '\n   the practice before the next night: ' + wk.practice + '\n   the sentence the week turns on: ' + wk.sentence : '');
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var attempt = function (extra) {
    var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', { method: 'post', contentType: 'application/json', muteHttpExceptions: true, headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify({ model: cfg['road model'] || 'claude-sonnet-4-5', max_tokens: 600, system: system, messages: [{ role: 'user', content: user + (extra ? '\n\nYour last answer failed the read: ' + extra + '. Write it again, keeping every rule.' : '') }] }) });
    if (res.getResponseCode() !== 200) { log_(ss, 'road', 'word: Claude ' + res.getResponseCode() + ' for ' + e.id, String(res.getContentText() || '').slice(0, 200)); return null; }
    var j = JSON.parse(res.getContentText()); var txt = (j.content || []).map(function (c) { return c && typeof c.text === 'string' ? c.text : ''; }).join('\n');
    var m = txt.match(/\{[\s\S]*\}/); var ans = m ? JSON.parse(m[0]) : null;
    if (!ans || !ans.verse || !ans.question || !ans.step) return null;
    return { verse: String(ans.verse).trim().slice(0, 400), question: String(ans.question).trim().slice(0, 300), step: String(ans.step).trim().slice(0, 300) };
  };
  try {
    var w = attempt(''); if (!w) return null;
    var why = roadWordFail_(w), tries = 0;
    while (why && tries < 2) { tries++; log_(ss, 'road', 'word read back and rewritten for ' + L.email + ' / ' + e.id + ' (' + tries + ')', why); w = attempt(why); if (!w) return null; why = roadWordFail_(w); }
    if (why) { log_(ss, 'road', 'word failed the read three times for ' + L.email + ' / ' + e.id + ' (not written)', why); return null; }
    return w;
  } catch (x) { log_(ss, 'road', 'word failed for ' + L.email + ' / ' + e.id, String(x && (x.code || x.message) || x).slice(0, 160)); return null; }
}
/** One line with no words, by the channel Config names ("email"); only when something landed; never on a schedule. */
function roadNotice_(ss, cfg, L) {
  var ch = String(cfg['road notice'] || 'off').toLowerCase().trim();
  if (ch !== 'email' || !L || !L.email) return false;
  if (L.notice === 'page') return false; // build 10: his own choice in the setup, "Only on this page"
  if (roadRows_(ss, L.email).some(function (r) { return r.what === 'notice' && dayOf_(r.when) === today_(); })) return false; // one a day at most
  try {
    GmailApp.sendEmail(L.email, 'Ancient Path', 'There is something new on your page.\n\nhttps://www.ancientpathcoaching.com/start\n', { name: 'Ancient Path' });
    roadRow_(ss, L.email, '', 'notice', ch, '');
    return true;
  } catch (e) { log_(ss, 'road', 'notice not sent to ' + L.email, String(e).slice(0, 160)); return false; }
}

/** road_setup (build 10): what he pressed in the setup writes his row — up to two courses from the Course map (the first leads), his pace, how he is told. Nothing else on the row is touched. */
function roadSetup_(ss, cfg, L, b) {
  var map = courseMap_(ss), list = courseList_(map), today = today_();
  var names = (Array.isArray(b.courses) ? b.courses : String(b.courses || '').split(/\s*[|,;]\s*/)).map(function (n) { var c = courseOf_(n, map); return c ? c.name : ''; }).filter(Boolean);
  var uniq = []; names.forEach(function (n) { if (!uniq.some(function (u) { return sameCourse_(u, n); })) uniq.push(n); });
  if (!uniq.length) throw { code: 'no_course' };
  if (uniq.length > 2) throw { code: 'two_courses' };
  var pcKey = paceKey_(b.pace) || L.pace || 'three', ntKey = noticeKey_(b.notice) || L.notice || 'email';
  var sh = learnersSheet_(ss), rr = L.room ? roomRow_({ room: L.room }) : null, roomC = rr ? roomCourse_(L.room) : '';
  var lead = uniq[0], second = uniq[1] || '';
  var set = {};
  function startFor(name, had, hadStarted) { if (rr && rr.first && sameCourse_(name, roomC)) return rr.first; if (had && sameCourse_(had, name) && hadStarted) return hadStarted; return today; }
  if (!sameCourse_(lead, L.course)) { set[LC.course] = lead; set[LC.leadStarted] = startFor(lead, L.second, L.secondStarted); }
  else if (!L.leadStarted) set[LC.leadStarted] = startFor(lead, '', '');
  if (!sameCourse_(second, L.second)) { set[LC.second] = second; set[LC.secondStarted] = second ? startFor(second, L.course, L.leadStarted) : ''; }
  else if (second && !L.secondStarted) set[LC.secondStarted] = startFor(second, '', '');
  set[LC.pace] = PACES[pcKey].label; set[LC.notice] = NOTICES[ntKey];
  Object.keys(set).forEach(function (c) { sh.getRange(L.row, Number(c)).setValue(set[c]); });
  L.course = lead; L.second = second; L.pace = pcKey; L.notice = ntKey;
  if (set[LC.leadStarted] !== undefined) L.leadStarted = set[LC.leadStarted]; if (set[LC.secondStarted] !== undefined) L.secondStarted = set[LC.secondStarted];
  roadRow_(ss, L.email, '', 'setup', lead + (second ? ', then ' + second : '') + ' · ' + PACES[pcKey].label + ' · ' + NOTICES[ntKey], roadWeek_(cfg, L, map).start);
  try { roadRowUpkeep_(ss, cfg, L, map); } catch (eu) {}
  var C = roadCourses_(cfg, L, map);
  return { ok: true, setup: roadSetupOut_(C, L, true), pace: paceOut_(L), week: { label: roadWeek_(cfg, L, map).label } };
}

/* ═══════════ build 10 · the sheet: Learners O–U, Entries AC (act) and AB as pairs, the notice on, the Standard and Rules rows ═══════════ */
var STANDARD_10 = {
  'week served': ['week served', 'the course week(s) this entry serves best, one pair per course as the course\'s initials and the unit (BF:4 · KBJ:1), or "any" when it is not tied to a week of any course; set by the morning writer from the Course map, read by the choosing step (his week or earlier in that course, never later); a bare number from before build 10 reads as the first course on the Course map (build 10)', 'build 10 (AB)'],
  'act': ['act', 'the act a piece asks of a man — Read, Listen or Watch — set from the source\'s medium (an article or newsletter → Read; a podcast episode or a song → Listen; YouTube → Watch); road.js and growth.js name the line from it; never a filled button (build 10)', 'build 10 (AC)'],
  'the man\'s row': ['the man\'s row', 'one Learners row per man is the only record the road reads: lead course and when it started, a second course at most, the two units (the room\'s night, else the start-date rule), his pace, how he is told (email · page), his reader. The man sets courses, pace and notice in the setup on his page; the morning fills the rest; our team sets nothing by hand for a man in a room (build 10)', 'build 10 (Learners F, O–U)']
};
var RULES_10 = {
  'RE15': ['One road, many courses: one man, one pace, one road. The pace caps the man, never each course. The lead course gets the first piece of every week and at least two of every three; the second course at most one in three; a piece that fits both is given once and credited to both; two courses at most. Each course is matched only by its own Course map rows; a course with no rows is not served, never guessed at. The question back stays one a week, on the lead course. One notice a day at most. Every piece names its course and week at its head.', 'build 10']
};
function applyBuild10() { PropertiesService.getScriptProperties().deleteProperty('b10'); ensureBuild10_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild10_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b10') === '1') return;
  var did = [];
  LPACE_OK_ = false; learnersSheet_(ss); did.push('Learners O–U');
  var en = ss.getSheetByName('Entries');
  if (en) {
    widen_(en, EC.act);
    if (!String(en.getRange(1, EC.act).getValue() || '').trim()) { en.getRange(1, EC.act).setValue('act (Read · Listen · Watch)'); did.push('Entries AC (act)'); }
    // week served as pairs: a bare number from before this build meant the first course on the Course map (the only one served then)
    var map = courseMap_(ss), first = courseList_(map)[0], moved = 0;
    if (first) entries_(ss).forEach(function (e) { if (/^\d+$/.test(String(e.week || '').trim())) { en.getRange(e.row, EC.week).setValue(first.abbr + ':' + String(e.week).trim()); moved++; } });
    if (moved) did.push(moved + ' week-served cells written as pairs (' + first.abbr + ':n)');
  }
  var cfg = readConfig_(ss);
  if (!cfg['road notice'] || /^off$/i.test(String(cfg['road notice']).trim())) { setConfig_(ss, 'road notice', 'email'); did.push('road notice off → email (ruled Oct 22 and Oct 28, 2026: a notice when a piece lands; each man chooses email or page in the setup)'); }
  var ru = ss.getSheetByName('Rules');
  if (ru) {
    var rv = ru.getRange(1, 1, Math.max(1, ru.getLastRow()), 1).getValues(), seen = {};
    for (var i = 0; i < rv.length; i++) { var k = String(rv[i][0] || '').trim(); if (RULES_10[k]) { ru.getRange(i + 1, 2, 1, 2).setValues([RULES_10[k]]); seen[k] = 1; } }
    Object.keys(RULES_10).forEach(function (k) { if (!seen[k]) { ru.appendRow([k, RULES_10[k][0], RULES_10[k][1]]); did.push(k + ' added'); } });
  }
  var st = ss.getSheetByName('Standard');
  if (st) {
    var sv = st.getRange(1, 1, Math.max(1, st.getLastRow()), 1).getValues(), have = {};
    for (var j = 0; j < sv.length; j++) { var kk = String(sv[j][0] || '').toLowerCase().trim(); if (STANDARD_10[kk]) { st.getRange(j + 1, 1, 1, 3).setValues([STANDARD_10[kk]]); have[kk] = 1; } }
    Object.keys(STANDARD_10).forEach(function (key) { if (!have[key]) { st.appendRow(STANDARD_10[key]); did.push('Standard ' + key); } });
  }
  try { roadActs_(ss); } catch (xa) {}
  props.setProperty('b10', '1');
  log_(ss, 'build 10', 'made: ' + (did.join(', ') || 'nothing new'));
}

/* ═══════════════════════════════ build 10.2: the weekly card (How's the path?, the voice, Do it, a hand) ═══════════════════════════════
 * Ruled Oct 30, 2026 on the mockup "For Your Road" (One Week on Your Road, screens 1 to 3). Nothing here counts anything: no streaks, no totals, no minutes.
 * Road tab rows (no sheet change): what='mark' text '<view|footing|steep|lost>[|<a word from The Word for It, lower case>]' week = the week's start (the latest row in a week wins);
 * what='did' text 'did|notyet' week = LAST week's start; what='hand' text '' week = the week's start (one a man a day). The practice he picks is the existing what='practice'. */
var ROAD_MARKS = { view: 'The view is good', footing: 'Good footing', steep: 'Steep', lost: 'Lost the trail' };
/* build 10.2.2: the word under a marker is one of The Word for It (the story engine holds the list; the page offers it). The server keeps only what is safe to read back and to mail: lower-case letters. */
function markWord_(w) { w = String(w || '').toLowerCase().trim(); return /^[a-z]{2,24}$/.test(w) ? w : ''; }
function wordLabel_(w) { return w ? w.charAt(0).toUpperCase() + w.slice(1) : ''; }
var HAND_TEAM = 'john@ancientpathcoaching.com';
function ensureBuild1021_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b1021') === '1') return;
  log_(ss, 'build 10.2.1', 'road.js 10.2.1 · the nine waymarks: the card line and The Nine Waymarks panel · the week’s waymark is read from the Course map waymark column (found by header) · no sheet change');
  props.setProperty('b1021', '1');
}
function ensureBuild1023_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b1023') === '1') return;
  log_(ss, 'build 10.2.3', 'road.js 10.2.3 · the welcome (first visit and return visit) · This Week in four layers · How did it go? (road_did most|some|notyet) · When will you do it? (road_when) · How often should we remind you? (road_remind, saved to Learners V "reminders"; nothing is sent) · Who walks with you (the group line, what the group carried, Invite Your Own Witness → road_witness, the Witness tab) · Course map "week line" read by its header');
  props.setProperty('b1023', '1');
}
function ensureBuild1022_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b1022') === '1') return;
  log_(ss, 'build 10.2.2', 'road.js 10.2.2 · Name it reads The Word for It (road_mark takes any lower-case word) · the practices split no longer cuts at a Bible reference · no sheet change');
  props.setProperty('b1022', '1');
}
function ensureBuild102_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b102') === '1') return;
  log_(ss, 'build 10.2', 'road.js 10.2 · the weekly card: road_mark, road_did, road_hand · the leader is read from the Learners reader column, else the People tab by room; none → ' + HAND_TEAM + ' · no sheet change');
  props.setProperty('b102', '1');
}
function markOf_(text) {
  var p = String(text || '').split('|'), k = p[0], w = p[1] || '';
  return ROAD_MARKS[k] ? { mark: k, word: markWord_(w) } : null;
}
/** The weekly card as the page draws it: this week's mark and word, last week's practice and whether he did it, the practices the Course map gives his course week
 *  (lifted word for word, the same lift the land uses), and what shows. After the course only the mark and the voice show; with no course week there is no Do it. */
/* ═══════════ build 10.2.4: our team's tally, and what has been helping him ═══════════ */
/** Entries gets three columns at the end, header text exact: "helped", "not this one", "too long". Found by header; any missing one is appended after the last used column. Returns { helped, not, long } column numbers. */
function tallyCols_(sh) {
  var want = [['helped', 'helped'], ['not this one', 'not'], ['too long', 'long']], last = Math.max(sh.getLastColumn(), EC.act), head = sh.getRange(1, 1, 1, last).getValues()[0], out = {};
  want.forEach(function (w) { for (var i = 0; i < head.length; i++) { if (String(head[i] || '').trim().toLowerCase() === w[0]) { out[w[1]] = i + 1; break; } } });
  want.forEach(function (w) { if (!out[w[1]]) { last++; widen_(sh, last); sh.getRange(1, last).setValue(w[0]); out[w[1]] = last; } });
  return out;
}
/** The counts for one entry across every man, from the Road rows: a man counts once, by his latest answer. helped = latest It helped; not this one = latest Not this one;
 *  too long = latest Not this one whose latest reason (after it) is Too long right now. Pure: rows = [{ email, id, what, text }] in sheet order. */
function tallyOf_(rows, id) {
  var by = {};
  rows.forEach(function (r, i) {
    if (r.id !== id) return; var m = by[r.email] = by[r.email] || {};
    if (r.what === 'met' || r.what === 'not') { m.what = r.what; m.at = i; m.why = ''; }
    else if (r.what === 'why' && m.what === 'not' && (r.text === 'too_long' || r.text === 'not_needed')) m.why = r.text;
  });
  var t = { helped: 0, not: 0, long: 0 };
  Object.keys(by).forEach(function (em) { var m = by[em]; if (m.what === 'met') t.helped++; else if (m.what === 'not') { t.not++; if (m.why === 'too_long') t.long++; } });
  return t;
}
/** Kept current on every road_word and road_why for that entry (a recount of that entry only; the Road tab is read once). Nothing man-facing. */
function tallyEntry_(ss, id) {
  var sh = ss.getSheetByName('Entries'), rd = ss.getSheetByName('Road'); if (!sh || !rd || rd.getLastRow() < 2) return;
  var lock = LockService.getScriptLock(); if (!lock.tryLock(10000)) return;
  try {
    var row = 0, ids = sh.getRange(2, EC.id, Math.max(1, sh.getLastRow() - 1), 1).getValues();
    for (var i = 0; i < ids.length; i++) { if (String(ids[i][0]) === id) { row = i + 2; break; } }
    if (!row) return;
    var data = rd.getRange(2, 1, rd.getLastRow() - 1, RC.text).getValues().map(function (r) { return { email: String(r[RC.email - 1] || '').toLowerCase().trim(), id: String(r[RC.entryId - 1] || ''), what: String(r[RC.what - 1] || ''), text: String(r[RC.text - 1] || '') }; });
    var t = tallyOf_(data, id), c = tallyCols_(sh);
    sh.getRange(row, c.helped).setValue(t.helped); sh.getRange(row, c.not).setValue(t.not); sh.getRange(row, c.long).setValue(t.long);
  } finally { lock.releaseLock(); }
}
/** What's been helping him (Your Road So Far): absent until he has answered three readings. The lanes that helped most (up to two, by the lift of his answers), a lane where he has two
 *  "no" answers and no yes (a lane the choosing steers away from), and his helped readings, newest first. A lane is named as its card shows it: the voice of his newest answer in it.
 *  rows = his Road rows in sheet order. Pure but for byId. */
function roadHelping_(rows, byId, lanes, week) {
  var learn = roadLearn_(rows, byId, lanes, week && week.start || today_()), A = learn.answers;
  if (A.length < 3) return null;
  var lane = {}, order = [], wt = 1;
  A.forEach(function (x) { var l = lane[x.lane] = lane[x.lane] || { lane: x.lane, name: x.voice, score: 0, mets: 0, nos: 0 }; l.score += (x.cls === 'met' ? LEARN.step : x.cls === 'no' ? -LEARN.step : 0) * wt; wt *= LEARN.decay; if (x.cls === 'met') l.mets++; if (x.cls === 'no') l.nos++; });
  var all = Object.keys(lane).map(function (k) { return lane[k]; });
  var more = all.filter(function (l) { return l.mets > 0 && l.score > 0; }).sort(function (a, b) { return b.score - a.score; }).slice(0, 2).map(function (l) { return l.name; });
  var fewer = all.filter(function (l) { return l.nos >= 2 && l.mets === 0; }).sort(function (a, b) { return b.nos - a.nos; })[0];
  var givenAt = {}; rows.forEach(function (r) { if (r.what === 'given') givenAt[r.id] = r; });
  var list = A.filter(function (x) { return x.cls === 'met'; }).map(function (x) {
    var cr = creditOf_(givenAt[x.id]), e = x.e;
    return { id: e.id, claim: e.claim, voice: voiceOf_(e.source), act: actOf_(e), minutes: minutesLine_(e.cut), link: e.link, minuteLink: e.link, course: cr ? cr.course : '', unit: cr ? cr.unit : 0 };
  });
  if (!more.length && !fewer && !list.length) return null;
  return { n: A.length, more: more, fewer: fewer ? fewer.name : '', list: list };
}
function ensureBuild1024_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b1024') === '1') return;
  log_(ss, 'build 10.2.4', 'road.js 10.2.4 · his yes and no shape what he is handed next (road_why; short form; three offers a construct, seven days apart; a construct rests after a third no) · What made it a no? · What’s been helping you · Entries tally columns helped / not this one / too long · "room" is "group" in what a man reads · page block AP-HOME-v37.11');
  props.setProperty('b1024', '1');
}
/* ═══════════ build 11.0: Now. Gathered. Ahead. (the page below the band is three views: This Week · Your House · Your Path) ═══════════
 *  What the server adds, all read from his own Road rows and the sheets that already exist (nothing is scored, nothing is counted at him):
 *   roadV11_      the week as the list draws it: first visit or not, before his group meets or after it (Carry It This Week), course ended, the unit he reads, what is done, the practice list,
 *                 the guidepost, Last Week, the need line under each word (Config "need: <word>", falling back to NEEDS), the house, Make Something of It, settings, the letter hook
 *   houseOut_     Your House: three rooms, each a list of lines drawn from his own rows. Never how often he did a thing.
 *   ourHouseOut_  Our House (action road_ours, read only): the group's lines; a line shows only when at least four men stand behind it, and never one man's words
 *   witnessView_  the ONE place 11.1 reads what his witness may see: his "shares" switches applied to his rows
 *   notesFor_     the 11.1 hook: his witness's notes from the Notes tab, when it exists
 *  New Road rows ('what'): course (he opened his course this week) · checkin (done | skipped, once at the end of the check-in) · saw (What did you take from Wednesday?) · made (Make Something of It) · noteread (the letter he opened).
 *  New Learners columns: W "shares" (the keys that are ON, comma-separated; blank = path, piece, practice; "none" = all off) and X "notes paused" (yes | blank). Saved in 11.0, read by 11.1.
 *  Rhythm to pace (Learners V "reminders" to N "pace"): twice = Up to twice a day · daily = Daily · few = Three a week · weekly = Three a week. The readings pace never goes below three a week (John's ruling, Oct 31); a man who asks for a reminder once a week still gets three readings a week.
 *  After his group meets (Rooms tab: its day and hour, never named in code): from the meeting's hour plus its length (Config "meeting hours", 2) until Config "carry days" (3) days later, or until both What did you take from Wednesday? (a saw row) and his practice (a practice row) are written after the meeting, whichever is first,
 *  the list is Carry It This Week and the unit it speaks of is the one after the night he just sat in. */
var NEEDS = {
  afraid: 'Afraid often asks for safety. Think of one safe person, and let him know where you are this week.',
  ashamed: 'Ashamed often asks to be known and still welcomed. Tell one man one true thing this week.',
  exposed: 'Exposed often asks for covering. Choose who sees your story, and let it be someone who stays.',
  angry: 'Angry often asks for something to be made right. Name what was wrong before you decide what to do.',
  sad: 'Sad often asks for comfort. Let someone sit with you instead of fixing it.',
  hurt: 'Hurt often asks for care. Say where it hurts to someone who can hear it.',
  alone: 'Alone often asks for connection. One call this week is enough to start.',
  numb: 'Numb often asks for a gentle way back into your body. Feet on the floor, and breathe out slower than you breathe in.'
};
var REMIND_PACE = { twice: 'twice', daily: 'daily', few: 'three', weekly: 'three' };
var SHARE_KEYS = ['path', 'piece', 'practice', 'words'];
var SHARE_DEFAULT = { path: true, piece: true, practice: true, words: false };
var LAYER_WORD = { did: 'Wisdom', saw: 'Understanding', know: 'Knowledge' };
var PATH_WORD = { view: 'the view good', footing: 'good footing', steep: 'the path steep', lost: 'that you lost the trail' };
var CONFIG_11 = [
  ['meeting hours', '2', 'build 11: how long a group meets; Carry It This Week begins this many hours after the meeting\'s hour (the day and hour come from the Rooms tab)'],
  ['carry days', '3', 'build 11: how many days Carry It This Week stays after the group meets, if the two things in it are not done sooner']
];
/** The keys a man shares, from the cell: blank = the defaults, "none" = all off, else the comma-separated keys that are on. */
function sharesOf_(cell) {
  var t = String(cell == null ? '' : cell).toLowerCase().trim(), out = {};
  if (!t) { SHARE_KEYS.forEach(function (k) { out[k] = SHARE_DEFAULT[k]; }); return out; }
  var on = t.split(/[\s,;]+/);
  SHARE_KEYS.forEach(function (k) { out[k] = on.indexOf(k) >= 0; });
  return out;
}
function sharesCell_(sh) { var on = SHARE_KEYS.filter(function (k) { return sh[k]; }); return on.length ? on.join(',') : 'none'; }
/** "7:00 PM Central" as "7:00 PM". */
function clockOf_(meets) { var h = hourOf_(meets); return h ? h.replace(/\s+(Central|Eastern|Mountain|Pacific)$/i, '') : ''; }
/** Central time now as the same kind of number a Road row's "when" parses to (both read through Date.parse, so they compare). */
function nowMs_() { return Date.parse(stamp_(new Date())); }
function whenMs_(w) { if (w instanceof Date) return Date.parse(stamp_(w)); var ms = Date.parse(String(w || '')); return isNaN(ms) ? 0 : ms; }
function wdOf_(iso) { return iso ? fmtDay_(iso, 'EEEE') : ''; }
/** "Week 5 — The Ancient Path Is Not Linear" as { label: 'Week 5', title: 'The Ancient Path Is Not Linear' }; a name with no lead gets "Week N". */
function unitParts_(name, n) {
  var s = String(name || '').trim(), m = s.match(/^((?:Week|Part|Section|Unit|Chapter|Day)\s+[A-Za-z0-9]+)\s*[—–:-]\s*(.+)$/i);
  if (m) return { label: m[1], title: m[2].trim() };
  return { label: n ? 'Week ' + n : '', title: s };
}
var BIBLE_BOOKS_ = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Song of Songs', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];
/** The first scripture reference in a line ("Isaiah 42:3", "2 Corinthians 10:5", "Psalm 139:23-24"), by the book's own name; '' when there is none. */
function verseIn_(text) {
  var re = new RegExp('(?:^|[^A-Za-z0-9])(' + BIBLE_BOOKS_.slice().sort(function (a, b) { return b.length - a.length; }).join('|').replace(/ /g, '\\s') + ')\\s+(\\d{1,3}):(\\d{1,3})(?:\\s?[–-]\\s?(\\d{1,3}))?'), m = re.exec(String(text || ''));
  return m ? m[1].replace(/\s+/g, ' ') + ' ' + m[2] + ':' + m[3] + (m[4] ? '–' + m[4] : '') : '';
}
var MANWHAT = { mark: 1, did: 1, practice: 1, when: 1, remind: 1, met: 1, not: 1, why: 1, opened: 1, answer: 1, course: 1, checkin: 1, saw: 1, made: 1, place: 1, hand: 1, setup: 1, pace: 1, notice: 1, noteread: 1 };
/** The Notes tab (made by build 11.1): man email · witness · written (date) · text · read (date). Returns his notes newest first, or [] when there is no tab. 11.1 writes it; 11.0 only reads.
 *  A note is "read" when he has opened it here (a noteread row whose text is the written date) or the Notes tab says so. */
function notesFor_(ss, email, rows) {
  try {
    var sh = ss.getSheetByName('Notes'); if (!sh || sh.getLastRow() < 2) return [];
    var seen = {}; (rows || []).forEach(function (r) { if (r.what === 'noteread') seen[r.text] = r.when; });
    var out = [];
    sh.getRange(2, 1, sh.getLastRow() - 1, Math.min(6, sh.getLastColumn())).getValues().forEach(function (r) {
      if (String(r[0] || '').toLowerCase().trim() !== email || !String(r[3] || '').trim()) return;
      if (String(r[5] || '').toLowerCase().trim() === 'yes') return; // build 11.1: a letter held while he has paused notes is not shown until he resumes
      var w = r[2] instanceof Date ? Utilities.formatDate(r[2], RE_TZ, 'yyyy-MM-dd') : String(r[2] || ''), rd = seen[w] || r[4];
      out.push({ witness: String(r[1] || ''), written: w, text: String(r[3] || '').slice(0, 4000), read: rd ? dayLabel_(rd) : '', readDay: rd ? wdOf_(isoDay_(rd)) : '' });
    });
    return out.reverse();
  } catch (e) { return []; }
}
/** THE place 11.1 reads what his witness may see. His "shares" switches decide: path (the mark and the word), piece (whether the piece helped), practice (the practice he chose and when), words (what he wrote). A switched-off key is absent, not blank. His "notes paused" is returned for the weekly page to honor. */
function witnessView_(L, rows, week) {
  var sh = L.shares || sharesOf_(''), out = { paused: !!L.notesPaused, week: week && week.start || '' };
  var inWeek = function (r) { return !week || r.week === week.start; };
  if (sh.path) { var mk = rows.filter(function (r) { return r.what === 'mark' && inWeek(r); }).pop(), m = mk ? markOf_(mk.text) : null; out.path = m ? { mark: m.mark, word: m.word } : null; }
  if (sh.piece) { var w = rows.filter(function (r) { return r.what === 'met' || r.what === 'not'; }).pop(); var why = w && w.what === 'not' ? rows.filter(function (r) { return r.what === 'why' && r.id === w.id; }).pop() : null; out.piece = w ? { helped: w.what === 'met', why: why ? why.text : '' } : null; } // build 11.1: why (too_long, not_needed) rides with a no
  if (sh.practice) {
    var pr = rows.filter(function (r) { return r.what === 'practice' && r.text && inWeek(r); }).pop(), wh = rows.filter(function (r) { return r.what === 'when' && inWeek(r); }).pop();
    // build 11.1: last week's practice and how it went (most, some, notyet), as the card on his page reads them
    var prev = week && week.start ? addDays_(week.start, -7) : '', lp = prev ? rows.filter(function (r) { return r.what === 'practice' && r.text && r.week === prev; }).pop() : null, ld = lp ? rows.filter(function (r) { return r.what === 'did' && r.week === prev; }).pop() : null;
    var did = ld ? (ld.text === 'did' ? 'most' : ld.text) : '';
    out.practice = pr || lp ? { text: pr ? pr.text : '', when: pr && wh ? wh.text : '', last: lp ? { text: lp.text, did: did } : null } : null;
  }
  if (sh.words) out.words = rows.filter(function (r) { return (r.what === 'answer' || r.what === 'saw' || r.what === 'made') && r.text; }).slice(-5).map(function (r) { return String(r.text).slice(0, 600); });
  return out;
}
/** The need line under a word: Config "need: afraid" first (edited without a build), else NEEDS; '' for a word with neither. */
function needsOut_(cfg) {
  var out = {};
  Object.keys(NEEDS).forEach(function (k) { out[k] = NEEDS[k]; });
  Object.keys(cfg || {}).forEach(function (k) { var m = /^need:\s*([a-z]+)$/i.exec(k); if (m && String(cfg[k]).trim()) out[m[1].toLowerCase()] = String(cfg[k]).trim(); });
  return out;
}
/** The group's meeting, from the Rooms tab: its day, hour, the night he just sat in, the next one, and (when the hour is known) the moment Carry It This Week begins. */
function meetOut_(cfg, L, nowMs) {
  var r = L.room ? roomRow_({ room: L.room }) : null; if (!r) return null;
  var today = today_(), last = nightOnOrBefore_(r, today), next = nightOnOrAfter_(r, today), clock = clockOf_(r.meets);
  var hours = Number(cfg['meeting hours'] || 2); if (isNaN(hours) || hours < 0) hours = 2;
  var out = { day: wdOf_(last ? last.date : next ? next.date : ''), time: clock, lastDate: last ? last.date : '', lastWeek: last ? Number(last.week) || 0 : 0, nextDate: next ? next.date : '', nextWeek: next ? Number(next.week) || 0 : 0, lastAt: 0, turnAt: 0, total: r.weeks || 0 };
  if (!out.day && r.first) out.day = wdOf_(r.first);
  if (last) {
    var at = Date.parse(fmtDay_(last.date, 'MMM d, yyyy') + ' ' + (clock || '11:59 PM'));
    // on the night itself, before its hour, the group has not yet met: the night he last sat in is the one before
    if (!isNaN(at) && nowMs && nowMs < at) {
      var prev = nightOnOrBefore_(r, addDays_(last.date, -1));
      if (prev) { last = prev; out.lastDate = prev.date; out.lastWeek = Number(prev.week) || 0; out.day = wdOf_(prev.date); at = Date.parse(fmtDay_(prev.date, 'MMM d, yyyy') + ' ' + (clock || '11:59 PM')); }
      else { last = null; out.lastDate = ''; out.lastWeek = 0; }
    }
    if (last && !isNaN(at)) { out.lastAt = at; out.turnAt = clock ? at + hours * 36e5 : at; }
  }
  return out;
}
/** Carry It This Week: on from the turn until carry days later, off once both the Wednesday line and the practice are written after the meeting. */
function afterOut_(cfg, meet, rows, nowMs) {
  if (!meet || !meet.lastAt) return { on: false };
  var days = Number(cfg['carry days'] || 3); if (isNaN(days) || days < 1) days = 3;
  var wed = rows.filter(function (r) { return r.what === 'saw' && r.text && whenMs_(r.when) >= meet.lastAt; }).pop();
  var ch = rows.filter(function (r) { return r.what === 'practice' && r.text && whenMs_(r.when) >= meet.lastAt; }).pop();
  var within = nowMs >= meet.turnAt && nowMs < meet.lastAt + days * 864e5;
  return { on: !!(within && !(wed && ch)), within: within, wedDone: !!wed, wedText: wed ? wed.text : '', chooseDone: !!ch };
}
/** Last Week: the latest earlier cycle's own taps, as the sentence's parts. The client writes the sentence; never how often he did anything. Null with no history. */
function lastWeekOut_(rows, week, byId, visit) {
  if (!visit || !visit.returning || !visit.last) return null;
  var W = visit.last.week, mk = rows.filter(function (r) { return r.what === 'mark' && r.week === W; }).pop(), m = mk ? markOf_(mk.text) : null;
  var pr = rows.filter(function (r) { return r.what === 'practice' && r.text && r.week === W; }).pop();
  var hp = visit.last.helped;
  if (!m && !hp && !pr) return null;
  return { week: W, recent: !!visit.last.recent, mark: m ? m.mark : '', word: m ? m.word : '', helped: hp || '', practice: pr ? String(pr.text) : '' };
}
/** Your House: the lines each room holds, newest first. did = what he chose and did; saw = his marks, his words, his Wednesday lines; know = the pieces that helped and the verses he carried. */
function houseOut_(rows, byId, week) {
  var did = [], saw = [], know = [];
  var whenOf = {}; rows.forEach(function (r) { if (r.what === 'when' && WHENS[r.text]) whenOf[r.week] = r.text; });
  var seenPr = {}, seenMk = {};
  // each cycle's latest choice and latest mark
  rows.forEach(function (r) { if (r.what === 'practice' && r.text) seenPr[r.week] = r; if (r.what === 'mark') seenMk[r.week] = r; });
  Object.keys(seenPr).sort().forEach(function (wk) {
    var r = seenPr[wk], w = whenOf[wk] ? WHENS[whenOf[wk]].toLowerCase() : '', pt = String(r.text).replace(/\.\s*$/, '');
    did.push({ t: 'You chose “' + pt + (w ? ',” ' + w + '.' : '.”'), w: dayLabel_(r.when), at: whenMs_(r.when) });
    String(r.text).split(/(?<=\.)\s+/).forEach(function (part) { var v = verseIn_(part); if (v && /\bmemori[sz]e\b/i.test(part)) know.push({ t: 'A verse you carried: ' + v + '.', w: dayLabel_(r.when), at: whenMs_(r.when), v: v }); });
  });
  Object.keys(seenMk).sort().forEach(function (wk) {
    var r = seenMk[wk], m = markOf_(r.text); if (!m) return;
    saw.push({ t: 'You marked ' + PATH_WORD[m.mark] + (m.word ? ' and named it ' + m.word : '') + '.', w: dayLabel_(r.when), at: whenMs_(r.when) });
  });
  var hands = rows.filter(function (r) { return r.what === 'hand'; }).pop();
  if (hands) did.push({ t: 'You reached for a hand.', w: dayLabel_(hands.when), at: whenMs_(hands.when) });
  rows.forEach(function (r) {
    if (r.what === 'saw' && r.text) saw.push({ t: '“' + String(r.text).trim() + '”', mine: true, w: 'from your group’s night · ' + dayLabel_(r.when), at: whenMs_(r.when) });
    if (r.what === 'answer' && r.text) {
      var strand = landStrandOf_(rows, r.id), line = { t: '“' + String(r.text).trim().slice(0, 600) + '”', mine: true, w: 'your words · ' + dayLabel_(r.when), at: whenMs_(r.when) };
      (strand === 'saw' ? saw : strand === 'know' ? know : did).push(line);
    }
    if (r.what === 'place' && r.text) saw.push({ t: '“' + String(r.text).trim() + '”', mine: true, w: 'your words · ' + dayLabel_(r.when), at: whenMs_(r.when) });
    if (r.what === 'made' && r.text) know.push({ t: '“' + String(r.text).trim().slice(0, 1200) + '”', mine: true, w: 'what you made of it · ' + dayLabel_(r.when), at: whenMs_(r.when) });
  });
  var latest = {}; rows.forEach(function (r) { if (r.what === 'met' || r.what === 'not') latest[r.id] = r; });
  Object.keys(latest).forEach(function (id) { var r = latest[id], e = byId[id]; if (r.what === 'met' && e) know.push({ t: 'A piece that helped: “' + String(e.claim || '').replace(/\s+/g, ' ').trim() + '”', w: dayLabel_(r.when), at: whenMs_(r.when) }); });
  var byAt = function (a, b) { return b.at - a.at; };
  var one = function (L) { var seen = {}; return L.sort(byAt).filter(function (x) { if (seen[x.t]) return false; seen[x.t] = 1; return true; }).map(function (x) { var o = { t: x.t }; if (x.mine) o.mine = true; if (x.w) o.w = x.w; return o; }); };
  return { did: one(did), saw: one(saw), know: one(know) };
}
/** Three questions built from his own lines for Make Something of It; with none of his lines, the one fixed question. */
function betterOut_(rows, week, course) {
  var last = rows.filter(function (r) { return (r.what === 'saw' || r.what === 'answer' || r.what === 'place') && r.text; }).pop();
  var mk = rows.filter(function (r) { return r.what === 'mark' && markOf_(r.text) && markOf_(r.text).word; }).pop(), m = mk ? markOf_(mk.text) : null;
  var out = [];
  if (last) { var t = String(last.text).replace(/\s+/g, ' ').trim(), cut = t.length > 90 ? t.slice(0, 90).replace(/\s+\S*$/, '') + '…' : t.replace(/[.!?]+$/, ''); out.push('You wrote, “' + cut + '.” What is underneath that?'); }
  if (m) out.push('You named ' + m.word + ' when you marked ' + PATH_WORD[m.mark] + '. What do you think it was asking for?');
  if (out.length) out.push('What would you tell a man in Week 1' + (course ? ' of ' + course : '') + ' about where you are now?');
  return out.length >= 2 ? out : ['What is one thing you know now that you did not know when you began?'];
}
/** The week as the three views draw it. Every field is a fact from his rows or the sheets; the words he reads are the client's. */
/** (11.0's note, kept: the hook that 11.1 now fills; weeklyPageFor_ is defined in the build 11.1 block below.) HOOK for 11.1, the weekly page his witness reads. 11.0 builds no page and sends no email. 11.1 puts its reader here: it takes a man's email, finds his Learners row, and calls
 *  witnessView_(L, rows, week), which already has his "shares" switches and "notes paused" applied; nothing the switches hide may be read any other way. Returns null in 11.0. */
function roadV11_(ss, cfg, L, week, map, rows, byId, piece, band, card, visit, group, helping) {
  var nowMs = nowMs_(), C = week.courses, lead = C && C.lead, r = L.room ? roomRow_({ room: L.room }) : null;
  var man = rows.some(function (q) { return MANWHAT[q.what]; });
  var meet = meetOut_(cfg, L, nowMs), after = afterOut_(cfg, meet, rows, nowMs);
  var course = (band && band.course) || (lead ? lead.name : '') || L.course || '';
  var ended = !!((band && band.done) || (lead && lead.state === 'Finished') || L.status === 'complete');
  // the unit he reads: the next night's week in a group, the by-date unit otherwise; after the meeting, the one after the night he just sat in
  var unitN = 0, nextNight = null;
  if (r && meet) {
    unitN = band && band.week ? band.week : meet.nextWeek;
    if (after.on && meet.lastDate) { nextNight = nightOnOrAfter_(r, addDays_(meet.lastDate, 1)); if (nextNight) unitN = Number(nextNight.week) || unitN + 1; else { ended = true; after.on = false; } }
  } else if (lead) unitN = lead.unit || 0;
  var row = (map && map.rows || []).filter(function (q) { return sameCourse_(q.course, course) && String(q.unit) === String(unitN); })[0] || null;
  var parts = unitParts_(row ? row.name : '', unitN);
  var practices = row ? practiceItems_(row.practice) : [];
  var cur = rows.filter(function (q) { return q.what === 'practice' && q.text && q.week === week.start; }).pop();
  var okWhen = rows.filter(function (q) { return q.what === 'when' && WHENS[q.text] && q.week === week.start; }).pop();
  var out = {
    name: String(L.name || '').trim().split(/\s+/)[0] || '', first: !man, ended: ended, after: after.on, inGroup: !!L.room,
    course: course, total: (band && band.total) || (lead ? lead.total : 0) || 0, unit: { n: unitN, label: parts.label, title: parts.title },
    meet: meet ? { day: meet.day, time: meet.time, date: after.on && nextNight ? nextNight.date : meet.nextDate } : null,
    done: { course: rows.some(function (q) { return q.what === 'course' && q.week === week.start; }), road: !!(piece && piece.opened), check: rows.some(function (q) { return q.what === 'checkin' && q.week === week.start; }),
      wed: after.wedDone, choose: after.chooseDone },
    wedText: after.wedText, practices: practices, practice: cur ? String(cur.text) : '', when: okWhen ? okWhen.text : '',
    guidepost: { n: row && row.waymark ? row.waymark : 0, weekLine: row ? row.weekLine || '' : '' },
    lastWeek: null, needs: needsOut_(cfg), house: null, better: [], made: null, notes: [], carryOn: !!after.on,
    settings: { remind: L.reminders || '', shares: L.shares || sharesOf_(''), paused: !!L.notesPaused },
    pieceMeta: null, carried: '', today: today_()
  };
  try { out.lastWeek = lastWeekOut_(rows, week, byId, visit); } catch (x1) {}
  try { out.house = houseOut_(rows, byId, week); } catch (x2) { log_(ss, 'road', 'the house could not be drawn for ' + L.email, String(x2 && x2.stack || x2).slice(0, 300)); out.house = { did: [], saw: [], know: [] }; }
  try { out.better = betterOut_(rows, week, course); } catch (x3) { out.better = []; }
  var mm = rows.filter(function (q) { return q.what === 'made' && q.text; }).pop(); if (mm) out.made = { text: String(mm.text), when: dayLabel_(mm.when) };
  out.notes = notesFor_(ss, L.email, rows);
  out.weekly = weeklyPageFor_(ss, L, rows, week); // build 11.1: What your witness sees each week (the same fields his witness reads)
  var lastPr = rows.filter(function (q) { return q.what === 'practice' && q.text; }).pop(); out.carried = lastPr ? String(lastPr.text) : '';
  return out;
}
/** Our House (action road_ours; read only): what the men of his group did, saw and know, as lines. A line shows only when at least four men stand behind it; one man's words never appear. */
function ourHouseOut_(ss, cfg, L, week, byId) {
  var out = { did: [], saw: [], know: [], inGroup: !!L.room, carried: [], min: 4 };
  if (!L.room) return out;
  var mates = {}; learners_(ss).forEach(function (x) { if (x.status === 'open' && sameGroup_(x.room, L.room)) mates[x.email] = 1; });
  var sh = ss.getSheetByName('Road'); var data = sh && sh.getLastRow() >= 2 ? sh.getRange(2, 1, sh.getLastRow() - 1, RC.build).getValues() : [];
  var prac = {}, helped = {}, marks = {};
  data.forEach(function (q) {
    var em = String(q[RC.email - 1] || '').toLowerCase().trim(); if (!mates[em]) return;
    var what = String(q[RC.what - 1] || ''), wk = isoDay_(q[RC.week - 1]), txt = String(q[RC.text - 1] || ''), id = String(q[RC.entryId - 1] || '');
    if (what === 'practice' && txt) { prac[wk] = prac[wk] || {}; (prac[wk][txt] = prac[wk][txt] || {})[em] = 1; }
    if (what === 'mark') { var mo = markOf_(txt); if (mo) { marks[wk] = marks[wk] || {}; marks[wk][em] = mo.mark; } }
    if (what === 'met' && id) { (helped[id] = helped[id] || {})[em] = 1; }
    if (what === 'not' && id && helped[id]) delete helped[id][em];
  });
  var weeks = Object.keys(prac).sort().reverse();
  for (var i = 0; i < weeks.length && out.did.length < 2; i++) Object.keys(prac[weeks[i]]).forEach(function (t) { if (out.did.length < 2 && Object.keys(prac[weeks[i]][t]).length >= 4) out.did.push({ t: 'We chose “' + t.replace(/\.\s*$/, '') + '.”' }); });
  var mw = Object.keys(marks).sort().reverse();
  for (var j = 0; j < mw.length; j++) { var list = Object.keys(marks[mw[j]]).map(function (e) { return marks[mw[j]][e]; }), maj = groupMajority_(list); if (maj) { out.saw.push({ t: 'Most of us marked ' + PATH_WORD[maj] + '.' }); break; } }
  var best = '', bn = 0; Object.keys(helped).forEach(function (id) { var n = Object.keys(helped[id]).length; if (n > bn && byId[id]) { best = id; bn = n; } });
  if (bn >= 4) out.know.push({ t: 'The piece that helped the most of us: “' + String(byId[best].claim || '').replace(/\s+/g, ' ').trim() + '”' });
  try { out.carried = groupCarried_(L.room); } catch (e) { out.carried = []; }
  return out;
}
var B110_ = '11.0';
function ensureBuild110_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b110') === '1') return;
  LPACE_OK_ = false; learnersSheet_(ss);
  try { var sh = ss.getSheetByName('Config'); if (sh) { var have = {}; if (sh.getLastRow() >= 1) sh.getRange(1, 1, sh.getLastRow(), 1).getValues().forEach(function (r) { have[String(r[0] || '').trim().toLowerCase()] = 1; }); CONFIG_11.forEach(function (c) { if (!have[c[0]]) sh.appendRow([c[0], c[1], c[2]]); }); Object.keys(NEEDS).forEach(function (k) { if (!have['need: ' + k]) sh.appendRow(['need: ' + k, NEEDS[k], 'build 11: the line under the word "' + k + '" on the check-in; edit it here, no build needed']); }); } } catch (xc) {}
  log_(ss, 'build 11.0', 'road.js 11.0 · This Week, Your House, Your Path · road_course, road_checkin, road_saw, road_make, road_shares, road_pause, road_note_read, road_ours · Learners W shares, X notes paused · Config need: lines, meeting hours, carry days · page block AP-HOME-v37.12');
  props.setProperty('b110', '1');
}
/* ═══════════════════════════════ build 11.1 · The Witness ═══════════════════════════════
 * The leader's page (and, from priority 2, an invited witness's page) is served by doGet from a per-witness token link; it reads only through witnessView_ and writes
 * to the Notes tab. Tabs this build adds: "Witness pages" (token · kind · witness email · witness name · room · man email · status · made), "Notes" (man email · witness ·
 * written (date) · text · read (date) · held). The Witness tab (10.2.3) gains "token" and "reminder" columns. Every sent line is a Config row, "email: <key>". */
var B111_ = '11.1';
var WIT_PAGES_HEAD = ['token', 'kind', 'witness email', 'witness name', 'room', 'man email', 'status', 'made'];
var NOTES_HEAD = ['man email', 'witness', 'written (date)', 'text', 'read (date)', 'held'];
var WIT_MAIL = {
  'note subject': 'Your witness wrote to you',
  'note body': 'Your witness wrote to you. Your letter is kept on your page, where you can read it when you are ready.\n\n{link}\n\nOur team\nAncient Path',
  'weekly subject': '{group}: your men’s weeks are ready',
  'weekly body': 'Your men’s weeks are ready. About five minutes each.\n\n{link}\n\nOur team\nAncient Path',
  'invite subject': '{first} asked you to walk with him',
  'invite body': '{wfirst}, {first} is walking a course with Ancient Path, and he asked you to be his witness: the mentor, coach or trusted friend who listens deeply, speaks truth with compassion, and challenges him to grow.\n\nBefore you say yes, you can read what that means. Nothing of his is shown to you until you do.\n\n{link}\n\nOur team\nAncient Path',
  'yes subject': '{name} said yes',
  'yes body': '{name} said yes. They will read what you choose to share, and write to you.\n\nYour page shows who walks with you.\n\n{link}\n\nOur team\nAncient Path',
  'invited weekly subject': '{names}: this week is ready',
  'invited weekly body': 'This week is ready for you. About five minutes.\n\n{link}\n\nOur team\nAncient Path',
  'invited reminder subject': 'A line is enough',
  'practice subject': 'Your practice today',
  'practice body': 'Your practice for this week is on your page. If you did it today, one tap tells it.\n\n{link}\n\nOur team\nAncient Path',
  'invited reminder body': 'When you have a moment, a line to {names} is enough.\n\n{link}\n\nOur team\nAncient Path'
};
var WIT_CONFIG_ = [
  ['witness weekly', 'on', 'build 11.1: "off" stops the weekly email to each leader (sent the day before the group meets)'],
  ['witness send hour', '8', 'build 11.1: the hour (Central, 0-23) the weekly email may go out on its day'],
  ['your page link', 'https://www.ancientpathcoaching.com/start', 'build 11.1: where a man’s letter is kept; the link in "Your witness wrote to you"'],
  ['practice reminders', 'off', 'build 11.1: "on" sends a man his practice reminder, at the rhythm he chose (Learners N) and the time he chose (his "when"), with a one-tap "I did it today" link; default off'],
  ['witness page link', 'https://script.google.com/macros/s/AKfycbyz6_kXnoG3XdIcNySRPDrqfF7J3k9Cd4M1Qh_RyTeSIi_k3W-YR88swDwk-42lo32d/exec', 'build 11.1: the web app address witness and Before You Say Yes links are made from (the one Your Page already calls); blank uses the script’s own address']
];
var GUIDEPOSTS_ = [{"n":1,"name":"The Watchpost","one":"Notice before you react.","carry":"Slow it down. What did you feel in your body right before?","try":"The Five Questions: before you react, notice what your body feels, the picture in your mind, the feeling, the thought, and what you want to do."},{"n":2,"name":"From the Ground Up","one":"Body first.","carry":"Where do you feel stress in your body right now? Is it loud, quiet, or gone?","try":"Feet on the Floor: feet on the floor, seat in the chair. Name three things you can see and say where you are and what day it is."},{"n":3,"name":"The Word for It","one":"Say what you feel.","carry":"If this feeling had one word, what would it be? Is there a more exact one?","try":"Name It to Tame It: put one exact word on the feeling and say it out loud."},{"n":4,"name":"Past Tense","one":"It happened. It is over.","carry":"How old do you feel right now?","try":"The Feeling Bridge: notice where the feeling sits and when you first remember it. Go slowly, and with someone safe."},{"n":5,"name":"The Whole Story","one":"Pain included, and it makes sense.","carry":"If your story had a title right now, what would it be? What do you want it to be?","try":"Four Ways to Read a Life: start with what happened, the plain facts."},{"n":6,"name":"One Heart","one":"Every part gets a seat.","carry":"Who takes over when you are under pressure? What is that part protecting?","try":"Name the Survivors: which one showed up this week, the Performer, the Loner, the Achiever or the Pleaser?"},{"n":7,"name":"The Old Vows","one":"Then is not now.","carry":"What rule did you make as a kid to stay safe? Is it still running?","try":"Release the Vow: name the vow, and see what it protected you from."},{"n":8,"name":"Me and We","one":"Close without disappearing.","carry":"Who knows the real story? Who would you want to know it?","try":"Confession to One Another: say it out loud to a person who stays."},{"n":9,"name":"Part of Something Larger","one":"Given to be given away.","carry":"Where do you feel far from God, and where do you feel him close?","try":"Return: turn back to God, confess, and receive his forgiveness (1 John 1:9)."}];
var WIT_PANEL_CSS_ = ".ap-home .ap-panel{--ap-g:28px;display:block;margin:0 0 18px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-top:3px solid var(--ap-bronze,#B8945F);border-radius:6px;box-sizing:border-box}.ap-home .ap-panel.ap-first{margin-top:44px}.ap-home h2.ap-panel-h{margin:0 !important;padding:0 !important;border:0 !important;font:inherit !important;background:none !important}.ap-home .ap-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;width:100%;box-sizing:border-box;margin:0;padding:20px var(--ap-g) 18px;background:none;border:0;border-radius:0;text-align:left;cursor:pointer;color:inherit}.ap-home .ap-panel-head:focus-visible{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:-4px}.ap-home .ap-panel-text{display:block;min-width:0;flex:1 1 auto}.ap-home .ap-panel-title{display:block;font:400 26px/1.2 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}.ap-home .ap-panel-note{display:block;font:400 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:6px 0 0}.ap-home .ap-panel-ctl{flex:none;font:600 14px/1 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:4px 0 3px;margin-top:6px;white-space:nowrap}.ap-home .ap-panel-body{padding:0 var(--ap-g) 26px}.ap-home .ap-panel.shut .ap-panel-body{display:none}.ap-home .ap-panel.shut .ap-panel-head{padding-bottom:20px}.ap-home button.ap-rev.ap-rev{display:inline-block;font:400 15px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;background:none;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:0 0 1px;margin:0;cursor:pointer;white-space:nowrap}.ap-home button.ap-rev.ap-rev:hover{color:var(--ap-navy,#1F2A44) !important;border-bottom-color:var(--ap-bronze,#B8945F)}@media (max-width:600px){.ap-home .ap-panel{--ap-g:18px}.ap-home .ap-panel.ap-first{margin-top:36px}.ap-home .ap-panel-title{font-size:24px !important}}";
var WIT_CSS_ = ":root{--paper:#FBF9F5;--sand:#F3EDE3;--card:#FFFFFF;--navy:#1F2A44;--ink:#2B3040;--quiet:#5E6573;--rule:#E2DCD1;--bronze:#B8945F;--bronze-ink:#8A6A3B;--glow:#E9C98F;--band:#1F2A44;--band-fg:#F3EDE3;--band-quiet:#D8D0C4;--serif:'Source Serif 4',Georgia,serif;--sans:'Source Sans 3','Segoe UI',Arial,sans-serif;--r1:6px;--r2:10px;--r3:14px;--tap:44px;--ease:cubic-bezier(.2,.7,.2,1);--ap-paper:#FBF9F5;--ap-rule:#E2DCD1;--ap-bronze:#B8945F;--ap-navy:#1F2A44;--ap-quiet:#6B7280;--ap-serif:'Source Serif 4',Georgia,serif;--ap-sans:'Source Sans 3','Segoe UI',Arial,sans-serif}\n*{box-sizing:border-box}\nhtml,body{margin:0}\nbody{background:var(--paper);color:var(--ink);font:400 16px/1.5 var(--sans);-webkit-font-smoothing:antialiased}\np{margin:0;text-wrap:pretty}\nbutton{font:inherit;color:inherit;text-transform:none;letter-spacing:normal}\n:focus-visible{outline:3px solid var(--bronze);outline-offset:2px;border-radius:4px}\n[hidden]{display:none!important}\n.band{background:var(--band);color:var(--band-fg);padding:22px 20px 0}\n.band .bw{max-width:1080px;margin:0 auto}\n.band .top{display:flex;justify-content:space-between;align-items:center;min-height:20px}\n.k{font:600 11px var(--sans);letter-spacing:.12em;text-transform:uppercase;color:#D9B97F}\n.band h1{margin:2px 0 0;font:400 28px/1.15 var(--serif);color:var(--band-fg)}\n.band .where{margin-top:6px;font:400 15.5px/1.4 var(--serif);color:var(--band-quiet)}\n.tabs{display:flex;margin-top:10px;border-top:1px solid rgba(255,255,255,.14)}\n.tab{flex:1;min-height:48px;background:none;border:0;border-bottom:3px solid transparent;color:#C9C2B5;font:600 14.5px var(--sans);cursor:pointer}\n.tab[aria-selected=\"true\"]{color:#fff;border-bottom-color:var(--bronze)}\n.view{max-width:1080px;margin:0 auto;padding:16px 16px 40px}\n.vlead{font:italic 400 16.5px/1.4 var(--serif);color:var(--quiet);padding:0 2px 12px}\n.card{background:var(--card);border:1px solid var(--rule);border-radius:var(--r2);padding:16px;margin-top:12px}\n.wmain>.card:first-child{margin-top:0}\n.lk{font:600 11.5px var(--sans);letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink)}\n.t{margin-top:4px;font:400 19px/1.3 var(--serif);color:var(--navy)}\n.s{margin-top:6px;font-size:15px}\n.s b{color:var(--navy);font-weight:600}\n.help{margin-top:6px;font-size:13.5px;color:var(--quiet)}\n.foot{text-align:center;margin-top:16px}\n.walk{display:inline-flex;align-items:center;gap:4px;min-height:var(--tap);padding:0;background:none;border:0;font:600 15px var(--sans);color:var(--navy);cursor:pointer;text-align:left}\n.walk .u{border-bottom:1px solid var(--bronze);padding-bottom:1px}\n.walk .ar{color:var(--bronze-ink)}\n.answer textarea,.wdanger textarea{display:block;width:100%;min-height:96px;margin-top:10px;padding:12px;border:1px solid var(--rule);border-radius:var(--r1);background:var(--paper);font:16px/1.5 var(--sans);color:var(--ink);resize:vertical}\n.wdanger textarea{min-height:72px}\n.btn{display:block;width:100%;min-height:48px;margin-top:12px;border:0;border-radius:8px;background:var(--navy);color:var(--paper);font:600 15.5px var(--sans);cursor:pointer}\n.btn[disabled]{opacity:.6;cursor:default}\n.kept{margin-top:8px;font-size:14px;color:var(--quiet);min-height:20px}\n.kept b{color:var(--navy);font-weight:600}\n/* choices: outline and a tick, never a fill */\n.choices{display:grid;gap:8px;margin-top:12px}\n.choices.two{grid-template-columns:1fr 1fr}\n.choices.three{grid-template-columns:1fr 1fr 1fr}\n.choice{min-height:var(--tap);padding:10px 12px;border:1px solid var(--rule);border-radius:8px;background:var(--card);font-size:15px;color:var(--ink);cursor:pointer;text-align:center;display:flex;align-items:center;justify-content:center;gap:6px}\n.choice.left{justify-content:flex-start;text-align:left}\n.choice[aria-pressed=\"true\"]{border:2px solid var(--bronze);background:var(--sand);color:var(--navy);font-weight:600}\n.choice[aria-pressed=\"true\"]:before{content:\"\u2713\";color:var(--bronze-ink)}\na.walk{text-decoration:none;color:var(--navy)}\n.wgrid{display:block}\n.ap-panel .ap-panel-body{padding-top:0}\n@media (min-width:960px){\n  .band{padding-left:0;padding-right:0}\n  .band .bw{padding:0 28px}\n  .band h1{font-size:34px}\n  .tabs{max-width:420px}\n  .view{padding:28px 28px 56px}\n  .wgrid{display:grid;grid-template-columns:minmax(0,1fr) 380px;gap:24px;align-items:start}\n  .wside{position:sticky;top:16px}\n  .wside>.card:first-child{margin-top:0}\n  .vlead{margin-bottom:16px}\n  .ap-panel .wgrid{padding-top:4px}\n}\n@media (prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}\n";
var PATH_SHORT_ = { view: 'the view is good', footing: 'good footing', steep: 'steep', lost: 'lost the trail' };
var DID_SAID_ = { most: 'most days', some: 'some days', notyet: 'not yet' };

function centralHour_() { return Number(Utilities.formatDate(new Date(), RE_TZ, 'H')); }
function firstOf_(name) { return String(name || '').trim().split(/\s+/)[0] || ''; }
function witEsc_(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function witToken_() { return (Utilities.getUuid() + Utilities.getUuid()).replace(/-/g, ''); }
function witTab_(ss, name, head) {
  var sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.getRange(1, 1, 1, head.length).setValues([head]); sh.setFrozenRows(1); }
  return sh;
}
/** The Config line for a sent email, "email: <key>", falling back to the default seeded with this build. */
function witnessText_(cfg, key) { var v = cfg && cfg['email: ' + key]; return v && String(v).trim() ? String(v) : WIT_MAIL[key] || ''; }
/** Fills {words} in a sent line; returns null (and sends nothing) when any {placeholder} is left, so no sent text ever carries one. */
function witnessFill_(text, vars) {
  var out = String(text || '').replace(/\{([a-z]+)\}/g, function (m, k) { return vars && vars[k] != null && String(vars[k]) !== '' ? String(vars[k]) : m; });
  return /\{[a-z]+\}/.test(out) ? null : out;
}
function witnessSend_(ss, cfg, to, key, vars) {
  var subject = witnessFill_(witnessText_(cfg, key + ' subject'), vars), body = witnessFill_(witnessText_(cfg, key + ' body'), vars);
  if (!to || subject == null || body == null) { try { log_(ss, 'witness mail', 'not sent: ' + key, 'a placeholder had no value'); } catch (e) {} return false; }
  GmailApp.sendEmail(to, subject, body.replace(/\s+$/, '') + '\n', { name: 'Ancient Path' });
  return true;
}
function witnessPageLink_(cfg) { return String(cfg['your page link'] || 'https://www.ancientpathcoaching.com/start').trim(); }
function witnessUrl_(cfg, token) {
  var base = String(cfg['witness page link'] || '').trim(); if (!base) { try { base = ScriptApp.getService().getUrl(); } catch (e) { base = ''; } }
  return base + (base.indexOf('?') >= 0 ? '&' : '?') + 'w=' + token;
}
function logHas_(ss, what, detail) {
  var sh = ss.getSheetByName('Log'); if (!sh || sh.getLastRow() < 2) return false;
  var n = Math.min(sh.getLastRow() - 1, 800), v = sh.getRange(sh.getLastRow() - n + 1, 1, n, 4).getValues();
  return v.some(function (r) { return String(r[2]) === what && String(r[3]).indexOf(detail) === 0; });
}

/* ---- the tokens ---- */
function witnessPagesSheet_(ss) { return witTab_(ss, 'Witness pages', WIT_PAGES_HEAD); }
/** The leader's token: one per leader, made once, kept in the Witness pages tab. */
function witnessLeaderToken_(ss, p) {
  var sh = witnessPagesSheet_(ss), v = sh.getLastRow() >= 2 ? sh.getRange(2, 1, sh.getLastRow() - 1, 8).getValues() : [];
  for (var i = 0; i < v.length; i++) if (String(v[i][1]) === 'leader' && String(v[i][2]).toLowerCase() === p.email && String(v[i][6]) === 'active') return String(v[i][0]);
  var t = witToken_();
  sh.appendRow([t, 'leader', p.email, p.name || '', p.room || '', '', 'active', today_()]);
  return t;
}
/** A token read back to who it is for; null for anything that is not an active token (too short, unknown, removed, declined). */
function witnessLookup_(ss, token) {
  token = String(token || '').trim();
  if (token.length < 32 || !/^[A-Za-z0-9]+$/.test(token)) return null;
  var sh = ss.getSheetByName('Witness pages');
  if (sh && sh.getLastRow() >= 2) {
    var v = sh.getRange(2, 1, sh.getLastRow() - 1, 8).getValues();
    for (var i = 0; i < v.length; i++) if (String(v[i][0]) === token) {
      if (String(v[i][6]) !== 'active' || String(v[i][1]) !== 'leader') return null; // a man's own tap token (kind did) never opens a witness page
      return { kind: String(v[i][1]), email: String(v[i][2]).toLowerCase().trim(), name: String(v[i][3] || ''), room: String(v[i][4] || ''), man: String(v[i][5] || '').toLowerCase().trim(), token: token };
    }
  }
  return witnessInvitedLookup_(ss, token);
}

/* ---- whose men ---- */
function witnessMen_(ss, wit) {
  var out = [];
  if (wit.kind === 'leader') learners_(ss).forEach(function (L) { if (L.status === 'open' && L.room && handLeader_(L) === wit.email) out.push(L); });
  else out = witnessInvitedMen_(ss, wit);
  return out.sort(function (a, b) { var x = firstOf_(a.name).toLowerCase(), y = firstOf_(b.name).toLowerCase(); return x < y ? -1 : x > y ? 1 : a.email < b.email ? -1 : 1; });
}
function witnessManKey_(wit, L) { return sha256_(wit.token + '|' + L.email).slice(0, 16); }

/* ---- what one man's witness sees: the same fields on his page and on the witness's ---- */
function witnessFields_(L, rows, week) {
  var v = witnessView_(L, rows, week), out = { path: '', piece: '', last: '', now: '', words: null, shared: { path: 'path' in v, piece: 'piece' in v, practice: 'practice' in v, words: 'words' in v } };
  if (v.path) out.path = PATH_SHORT_[v.path.mark] + (v.path.word ? ' · ' + v.path.word : '');
  if (v.piece) out.piece = v.piece.helped ? 'it helped' : 'not this one' + (v.piece.why === 'too_long' ? ', too long right now' : v.piece.why === 'not_needed' ? ', not what I need' : '');
  var cut = function (t) { return String(t || '').replace(/\s+/g, ' ').trim().replace(/\.\s*$/, ''); };
  if (v.practice) {
    if (v.practice.last && v.practice.last.text) out.last = cut(v.practice.last.text) + (v.practice.last.did && DID_SAID_[v.practice.last.did] ? ' · in his words, ' + DID_SAID_[v.practice.last.did] : '');
    if (v.practice.text) out.now = cut(v.practice.text) + (v.practice.when && WHENS[v.practice.when] ? ' · ' + WHENS[v.practice.when].toLowerCase() : '');
  }
  if (v.words) out.words = v.words.slice(-3).reverse();
  return out;
}
/** The page his own page shows him, "What your witness sees each week": the same fields, from witnessView_. */
function weeklyPageFor_(ss, L, rows, week) {
  try { var f = witnessFields_(L, rows, week); return { path: f.path, piece: f.piece, last: f.last, now: f.now, words: f.words, paused: !!L.notesPaused }; } catch (e) { return null; }
}
/** HOOK for a later layer: "questions you could ask him". No Claude calls in 11.1; returns null. */
function witnessHelp_(man, week) { return null; }
function witnessManData_(ss, cfg, wit, L, map) {
  var rows = roadRows_(ss, L.email), week = roadWeek_(cfg, L, map), f = witnessFields_(L, rows, week), meet = null;
  try { meet = meetOut_(cfg, L, nowMs_()); } catch (e) { meet = null; }
  var lead = week.courses && week.courses.lead, course = week.course || L.course || '', unitN = (lead && lead.shown) || week.weekNum || (meet ? (meet.lastWeek || meet.nextWeek || 0) : 0);
  var row = (map && map.rows || []).filter(function (q) { return sameCourse_(q.course, course) && String(q.unit) === String(unitN); })[0] || null;
  var gp = row && row.waymark && GUIDEPOSTS_[row.waymark - 1] ? GUIDEPOSTS_[row.waymark - 1] : null, ti = gp ? String(gp['try'] || '').indexOf(': ') : -1;
  return { key: witnessManKey_(wit, L), first: firstOf_(L.name) || 'He', course: course, unitN: unitN, label: course ? course + (unitN ? ' · Week ' + unitN : '') : '',
    f: f, gp: gp ? { name: gp.name, one: gp.one, carry: gp.carry, tryName: ti > 0 ? gp['try'].slice(0, ti) : '' } : null, help: witnessHelp_(L.email, week) };
}
function witnessPageData_(ss, cfg, wit) {
  var map = courseMap_(ss);
  return { token: wit.token, kind: wit.kind, name: firstOf_(wit.name), men: witnessMen_(ss, wit).map(function (L) { return witnessManData_(ss, cfg, wit, L, map); }) };
}

/* ---- the page ---- */
function witnessManHtml_(m) {
  var f = m.f, h = '<div class="wgrid"><div class="wmain"><div class="card"><p class="lk">' + witEsc_(m.first) + '’s Week · What He Chose to Share</p>' + (m.label ? '<p class="help" style="margin-top:2px">' + witEsc_(m.label) + '</p>' : '');
  if (f.path) h += '<p class="s"><b>The Path:</b> ' + witEsc_(f.path) + '</p>';
  if (f.piece) h += '<p class="s"><b>This Week’s Piece:</b> ' + witEsc_(f.piece) + '</p>';
  if (f.last) h += '<p class="s"><b>Last Week’s Practice:</b> ' + witEsc_(f.last) + '</p>';
  if (f.now) h += '<p class="s"><b>This Week’s:</b> ' + witEsc_(f.now) + '</p>';
  if (!f.path && !f.piece && !f.last && !f.now && !(f.words && f.words.length)) h += '<p class="s">Nothing from his week has come in yet. A line from you can still reach him.</p>';
  if (f.words && f.words.length) h += f.words.map(function (w, i) { return '<p class="s">' + (i ? '' : '<b>In His Words:</b> ') + '“' + witEsc_(w) + '”</p>'; }).join('');
  else h += '<p class="help">He kept his own words to himself this week. That is his to choose.</p>';
  h += '</div>';
  if (m.gp) h += '<div class="card"><p class="lk">The Question He Is Carrying</p><p class="t">' + witEsc_(m.gp.carry) + '</p><p class="help">This week’s guidepost: ' + witEsc_(m.gp.name) + ' · ' + witEsc_(m.gp.one) + (m.gp.tryName ? ' What he is trying: ' + witEsc_(m.gp.tryName) + '.' : '') + '</p></div>';
  else h += '<div class="card"><p class="lk">The Question He Is Carrying</p><p class="help">This week’s guidepost is not set for his course yet.</p></div>';
  h += '</div><div class="wside"><div class="card answer" data-man="' + witEsc_(m.key) + '"><p class="lk">Write to ' + witEsc_(m.first) + '</p><p class="t">What do you see God doing in his story?</p>' +
    '<div class="wform"><textarea aria-label="Write to ' + witEsc_(m.first) + '" placeholder="A line is enough." maxlength="4000"></textarea><button type="button" class="btn" data-send>Send to ' + witEsc_(m.first) + '</button></div>' +
    '<p class="kept" aria-live="polite"></p><p class="help">A line any week, or your monthly letter. He may pause notes at any time; you won’t be told why.</p></div>' +
    '<div class="card" data-man="' + witEsc_(m.key) + '"><p class="lk">If He Is in Danger</p><p class="s">If something he writes suggests he or someone else is in danger, tell our team the same day. If it is happening now, call 911, or call or text 988.</p>' +
    '<button type="button" class="walk" data-danger aria-expanded="false"><span class="u">Tell our team</span> <span class="ar">→</span></button>' +
    '<div class="wdanger" hidden><textarea aria-label="A line for our team, if you want" placeholder="A line for our team, if you want." maxlength="1500"></textarea><button type="button" class="walk" data-danger-send><span class="u">Send to our team</span> <span class="ar">→</span></button></div><p class="kept" aria-live="polite"></p></div></div></div>';
  return h;
}
function witnessHtml_(d) {
  var men = d.men, n = men.length, names = men.map(function (m) { return m.first; });
  var joined = n <= 1 ? names.join('') : n <= 3 ? names.slice(0, -1).join(', ') + ' and ' + names[n - 1] : '';
  var title = n === 0 ? 'Your Witness Page' : n <= 3 ? 'Walking with ' + joined : 'Walking with Your Group';
  var where = n === 0 ? 'Nothing is waiting for you right now.' : 'Their weeks are ready. About five minutes each.';
  var h = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Your Witness Page</title>' +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Source+Sans+3:wght@400;600&display=swap"><style>' + WIT_CSS_ + WIT_PANEL_CSS_ + '</style></head><body><div class="ap-home" id="app">';
  h += '<header class="band"><div class="bw"><div class="top"><span class="k">Your Witness Page</span></div><h1>' + witEsc_(title) + '</h1><p class="where">' + witEsc_(where) + '</p>';
  if (n >= 2 && n <= 3) h += '<div class="tabs" role="tablist" aria-label="The men you walk with">' + men.map(function (m, i) { return '<button type="button" class="tab" role="tab" data-tab="' + i + '" aria-selected="' + (i === 0) + '">' + witEsc_(m.first) + '</button>'; }).join('') + '</div>';
  else h += '<div style="height:16px"></div>';
  h += '</div></header><main class="view"><p class="vlead">Listen deeply. Speak truth with compassion. Help him grow.</p>';
  if (n >= 4) men.forEach(function (m, i) {
    var note = m.f.path || m.label || '';
    h += '<section class="ap-panel ap-sec shut' + (i === 0 ? ' ap-first' : '') + '" data-panel="m' + i + '"><h2 class="ap-panel-h"><button type="button" class="ap-panel-head" data-act="panel" data-panel="m' + i + '" aria-expanded="false"><span class="ap-panel-text"><span class="ap-panel-title">' + witEsc_(m.first) + '</span><span class="ap-panel-note">' + witEsc_(note) + '</span></span><span class="ap-panel-ctl">Open ▾</span></button></h2><div class="ap-panel-body">' + witnessManHtml_(m) + '</div></section>';
  });
  else men.forEach(function (m, i) { h += '<div class="wm" data-i="' + i + '"' + (i ? ' hidden' : '') + '>' + witnessManHtml_(m) + '</div>'; });
  h += '<p class="help foot">Each man sees only his own page. Neither knows who else you walk with.</p></main></div><script>' + witnessJs_(d.token) + '</script></body></html>';
  return h;
}
function witnessJs_(token) {
  return '(function(){var T=' + JSON.stringify(token).replace(/</g, '\\u003c') + ';' +
    'function $(s,r){return (r||document).querySelector(s)}function $$(s,r){return [].slice.call((r||document).querySelectorAll(s))}' +
    'var run=function(){return window.google&&google.script&&google.script.run};' +
    'function call(fn,args,ok,bad){var r=run();if(!r){bad();return}r.withSuccessHandler(function(x){x&&x.ok?ok(x):bad()}).withFailureHandler(bad)[fn].apply(r,args)}' +
    'function name(c){var l=$(".lk",c);return l?l.textContent.replace(/^Write to /,""):""}' +
    'var tabs=$$("[data-tab]");tabs.forEach(function(b){b.addEventListener("click",function(){var i=b.getAttribute("data-tab");tabs.forEach(function(t){t.setAttribute("aria-selected",t===b?"true":"false")});$$(".wm").forEach(function(m){m.hidden=m.getAttribute("data-i")!==i})})});' +
    'var tl=$(".tabs");if(tl)tl.addEventListener("keydown",function(e){var k=e.key;if(k!=="ArrowRight"&&k!=="ArrowLeft")return;var i=tabs.indexOf(document.activeElement);if(i<0)return;e.preventDefault();var j=(i+(k==="ArrowRight"?1:-1)+tabs.length)%tabs.length;tabs[j].focus();tabs[j].click()});' +
    'document.addEventListener("click",function(e){var t=e.target.closest?e.target.closest("button"):null;if(!t)return;' +
    'if(t.hasAttribute("data-act")){var box=t.closest(".ap-panel"),open=box.classList.contains("shut");$$(".ap-panel").forEach(function(p){p.classList.add("shut");$(".ap-panel-head",p).setAttribute("aria-expanded","false");$(".ap-panel-ctl",p).textContent="Open \\u25be"});if(open){box.classList.remove("shut");t.setAttribute("aria-expanded","true");$(".ap-panel-ctl",box).textContent="Close \\u25b4"}return}' +
    'var card=t.closest(".card");if(!card)return;var key=card.getAttribute("data-man");' +
    'if(t.hasAttribute("data-send")){var ta=$("textarea",card),text=ta.value.replace(/^\\s+|\\s+$/g,""),k=$(".kept",card);if(!text){k.innerHTML="Write a line first. A line is enough.";ta.focus();return}t.disabled=true;k.innerHTML="Sending.";' +
    'call("witnessWrite",[T,key,text],function(){var f=$(".wform",card);f.hidden=true;k.innerHTML="<b>Sent.</b> It\\u2019s on "+name(card)+"\\u2019s page now. Write again whenever you want.";var a=document.createElement("button");a.type="button";a.className="walk";a.setAttribute("data-again","1");a.innerHTML="<span class=\\"u\\">Write another</span> <span class=\\"ar\\">\\u2192</span>";k.parentNode.insertBefore(a,k.nextSibling);t.disabled=false;ta.value=""},function(){t.disabled=false;k.innerHTML="That did not go through. Your words are still here; try again in a moment."});return}' +
    'if(t.hasAttribute("data-again")){$(".wform",card).hidden=false;$(".kept",card).innerHTML="";t.parentNode.removeChild(t);$("textarea",card).focus();return}' +
    'if(t.hasAttribute("data-danger")){var d=$(".wdanger",card),on=d.hidden;d.hidden=!on;t.setAttribute("aria-expanded",on?"true":"false");if(on)$("textarea",d).focus();return}' +
    'if(t.hasAttribute("data-danger-send")){var d2=$(".wdanger",card),k2=$(".kept",card);t.disabled=true;k2.innerHTML="Sending.";call("witnessDanger",[T,key,$("textarea",d2).value],function(){d2.hidden=true;k2.innerHTML="<b>Sent.</b> Our team has it and will look in on him today.";t.disabled=false},function(){t.disabled=false;k2.innerHTML="That did not go through. If it is happening now, call 911, or call or text 988."})}' +
    '})})();';
}
function witnessClosedHtml_() {
  return HtmlService.createHtmlOutput('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ancient Path</title><style>body{margin:0;background:#FBF9F5;color:#2B3040;font:16px/1.5 "Source Sans 3","Segoe UI",Arial,sans-serif}main{max-width:520px;margin:0 auto;padding:48px 20px}h1{font:400 26px/1.2 "Source Serif 4",Georgia,serif;color:#1F2A44;margin:0 0 12px}</style></head><body><main><h1>This link is not active.</h1><p>If you were sent it and think it should be, reply to the email it came in and our team will help.</p></main></body></html>').setTitle('Ancient Path').addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
/** doGet ?w=<token>: the witness's page, or the calm closed page. Nothing else about the token is said. */
function witnessPage_(token) {
  try {
    var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
    try { ensureBuild111_(ss); } catch (xe) {}
    var wit = witnessLookup_(ss, token); if (!wit) return witnessClosedHtml_();
    return HtmlService.createHtmlOutput(witnessHtml_(witnessPageData_(ss, cfg, wit))).setTitle('Your Witness Page').addMetaTag('viewport', 'width=device-width, initial-scale=1');
  } catch (err) {
    try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'witness page', 'failed', String(err && err.stack || err).slice(0, 400)); } catch (e2) {}
    return witnessClosedHtml_();
  }
}

/* ---- what the page calls (google.script.run reaches only names without a trailing underscore) ---- */
function witnessMan_(ss, cfg, token, key) {
  var wit = witnessLookup_(ss, token); if (!wit) throw { code: 'closed' };
  var men = witnessMen_(ss, wit).filter(function (L) { return witnessManKey_(wit, L) === String(key || ''); });
  if (men.length !== 1) throw { code: 'not_his' };
  return { wit: wit, L: men[0] };
}
/** A letter: kept in the Notes tab; he is told by email that it is on his page (never what it says). If he has paused his witness's notes the letter is kept but held, no email goes, and the answer to the witness is the same either way. */
function witnessWrite(token, key, text) {
  try {
    var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss), m = witnessMan_(ss, cfg, token, key), t = String(text || '').replace(/\s+$/, '').replace(/^\s+/, '').slice(0, 4000);
    if (!t) return { ok: false, error: 'empty' };
    var lock = LockService.getScriptLock(); if (!lock.tryLock(10000)) return { ok: false, error: 'busy' };
    try {
      try { ensureBuild111_(ss); } catch (xe) {}
      var held = !!m.L.notesPaused, wname = firstOf_(m.wit.name);
      witTab_(ss, 'Notes', NOTES_HEAD).appendRow([m.L.email, wname, today_(), t, '', held ? 'yes' : '']);
      if (!held) witnessSend_(ss, cfg, m.L.email, 'note', { link: witnessPageLink_(cfg), first: firstOf_(m.L.name) });
      try { witnessTeamCopy_(ss, cfg, m.wit, m.L, t); } catch (xc) { log_(ss, 'witness note', 'team copy failed', String(xc && xc.message || xc).slice(0, 200)); }
      log_(ss, 'witness note', m.wit.email + ' → ' + m.L.email, held ? 'held' : 'sent');
    } finally { lock.releaseLock(); }
    return { ok: true };
  } catch (err) {
    if (err && err.code) return { ok: false, error: err.code };
    try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'witness note', 'failed', String(err && err.stack || err).slice(0, 300)); } catch (e2) {}
    return { ok: false, error: 'failed' };
  }
}
/** Tell our team: one email to the team address; the man's first name is the only thing of his in the subject. */
function witnessDanger(token, key, line) {
  try {
    var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss), m = witnessMan_(ss, cfg, token, key), first = firstOf_(m.L.name) || 'a man';
    var body = ['A witness asked our team to look in on ' + first + ' the same day.', '', 'Witness: ' + (m.wit.name || m.wit.email) + ' · ' + m.wit.email, 'Man: ' + (m.L.name || first) + ' · ' + m.L.email];
    var extra = String(line || '').replace(/\s+/g, ' ').trim().slice(0, 1500); if (extra) body.push('', 'The witness added: ' + extra);
    GmailApp.sendEmail(HAND_TEAM, 'A witness asked us to look in on ' + first, body.join('\n') + '\n', { name: 'Ancient Path' });
    log_(ss, 'witness danger', m.wit.email + ' → ' + m.L.email, 'sent to our team');
    return { ok: true };
  } catch (err) {
    if (err && err.code) return { ok: false, error: err.code };
    return { ok: false, error: 'failed' };
  }
}
/** When he turns notes back on, whatever was held for him is released: one email, never what it says. */
function witnessRelease_(ss, cfg, L) {
  var sh = ss.getSheetByName('Notes'); if (!sh || sh.getLastRow() < 2) return 0;
  var v = sh.getRange(2, 1, sh.getLastRow() - 1, 6).getValues(), n = 0;
  v.forEach(function (r, i) { if (String(r[0] || '').toLowerCase().trim() === L.email && String(r[5] || '').toLowerCase().trim() === 'yes') { sh.getRange(i + 2, 6).setValue(''); n++; } });
  if (n) { try { witnessSend_(ss, cfg, L.email, 'note', { link: witnessPageLink_(cfg), first: firstOf_(L.name) }); } catch (e) {} }
  return n;
}

/* ---- the weekly email, the day before the group meets ---- */
function witnessTick() {
  var lock = LockService.getScriptLock(); if (!lock.tryLock(20000)) return;
  try {
    var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
    try { ensureBuild111_(ss); } catch (xe) {}
    try { holdSync_(ss, cfg); } catch (xh) { log_(ss, 'release list', 'hold cards failed', String(xh && xh.code || xh).slice(0, 160)); }
    var hour = Number(cfg['witness send hour'] || 8); if (isNaN(hour)) hour = 8;
    if (String(cfg['witness weekly'] || 'on').toLowerCase() !== 'off' && centralHour_() >= hour) {
      witnessWeekly_(ss, cfg);
      try { witnessTickInvited_(ss, cfg); } catch (xi) { log_(ss, 'witness mail', 'invited tick failed', String(xi && xi.stack || xi).slice(0, 300)); }
    }
    try { practiceTick_(ss, cfg); } catch (xp) { log_(ss, 'witness mail', 'practice tick failed', String(xp && xp.stack || xp).slice(0, 300)); }
  } catch (err) {
    try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'witness mail', 'tick failed', String(err && err.stack || err).slice(0, 300)); } catch (e2) {}
  } finally { lock.releaseLock(); }
}
function witnessWeekly_(ss, cfg) {
  var tomorrow = addDays_(today_(), 1), by = {}, sent = 0;
  people_().forEach(function (p) {
    if (!p.room) return;
    var r = roomRow_({ room: p.room }); if (!r) return;
    var n = nightOnOrAfter_(r, tomorrow); if (!n || n.date !== tomorrow) return;
    if (!by[p.email]) by[p.email] = { p: p, rooms: [] };
    by[p.email].rooms.push(r.room || p.room);
  });
  Object.keys(by).forEach(function (email) {
    var key = email + ' · ' + tomorrow; if (logHas_(ss, 'witness weekly', key)) return;
    var p = by[email].p, wit = { kind: 'leader', email: email, name: p.name }, men = witnessMen_(ss, wit); if (!men.length) return;
    var token = witnessLeaderToken_(ss, p);
    if (witnessSend_(ss, cfg, email, 'weekly', { group: by[email].rooms[0], link: witnessUrl_(cfg, token) })) { log_(ss, 'witness weekly', key, 'sent'); sent++; }
  });
  return sent;
}

/* ---- the setup, run once ---- */
function witnessInstallTrigger_() {
  var have = ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'witnessTick'; });
  if (!have) ScriptApp.newTrigger('witnessTick').timeBased().everyHours(1).create();
  return !have;
}
function ensureBuild111_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b111') === '2') return;
  witnessPagesSheet_(ss); witTab_(ss, 'Notes', NOTES_HEAD);
  var wsh = witnessSheet_(ss); if (wsh.getLastColumn() < WIT_HEAD.length) wsh.getRange(1, wsh.getLastColumn() + 1, 1, WIT_HEAD.length - wsh.getLastColumn()).setValues([WIT_HEAD.slice(wsh.getLastColumn())]);
  var sh = ss.getSheetByName('Config');
  if (sh) {
    var have = {}; if (sh.getLastRow() >= 1) sh.getRange(1, 1, sh.getLastRow(), 1).getValues().forEach(function (r) { have[String(r[0] || '').trim().toLowerCase()] = 1; });
    WIT_CONFIG_.forEach(function (c) { if (!have[c[0]]) sh.appendRow([c[0], c[1], c[2]]); });
    Object.keys(WIT_MAIL).forEach(function (k) { if (!have['email: ' + k]) sh.appendRow(['email: ' + k, WIT_MAIL[k], 'build 11.1: the words of a sent email; {link}, {group}, {first}, {name}, {wfirst}, {names} are filled in; a line with an unfilled word is not sent']); });
  }
  try { witnessInstallTrigger_(); } catch (xt) {}
  log_(ss, 'build 11.1', 'the Witness · the leader’s page (?w=<token>) · Notes tab, held notes · the weekly email the day before the group meets (witnessTick, hourly) · invitations: Before You Say Yes (?y=<token>), the said-yes email, an invited witness’s page, weekly email and reminder · What your witness sees each week · Config email: lines');
  props.setProperty('b111', '2');
}
/** Run once by John from the editor (Run > setupWitness): makes the tabs and Config lines, installs the hourly trigger, and logs each leader's page address. */
function setupWitness_() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  PropertiesService.getScriptProperties().deleteProperty('b111');
  ensureBuild111_(ss);
  var made = false; try { made = witnessInstallTrigger_(); } catch (xt) { log_(ss, 'witness setup', 'trigger not installed', String(xt && xt.message || xt)); }
  var cfg = readConfig_(ss), seen = {};
  people_().forEach(function (p) { if (!p.room || seen[p.email]) return; seen[p.email] = 1; var men = witnessMen_(ss, { kind: 'leader', email: p.email, name: p.name }); if (men.length) log_(ss, 'witness link', p.email, witnessUrl_(cfg, witnessLeaderToken_(ss, p))); });
  log_(ss, 'witness setup', 'done', made ? 'trigger installed' : 'trigger already there');
  return made ? 'trigger installed' : 'trigger already there';
}
function setupWitness() { return setupWitness_(); }


/* ═══════════════ build 11.1 priority 2: a man's own witness (outside a group) ═══════════════
 * Invite Your Own Witness sends the invitation: a per-invitation token link to Before You Say Yes. The Witness tab (man email · role · their name · their email · asked · status
 * waiting|yes|declined · yes date) gains: token · reminder · last weekly · last reminder · team copies. A witness is limited to two men at a time; an invitation that would pass
 * the limit is never sent, and the man's page reads the same as ever ("Our team walks this with you"). One waiting invitation per man; a new one replaces it (the old link stops).
 * The invited witness's page is the leader's page for his one or two men; his token works while his own row is "yes". */
var WIT_REMIND_ = { 'Each week': 7, 'Every two weeks': 14, 'Each month': 30, 'No reminder': 0 };
var WIT_REMIND_LIST_ = ['Each week', 'Every two weeks', 'Each month', 'No reminder'];
var WIT_INV_LIMIT_ = 2;
function witnessRows_(ss) {
  var sh = ss.getSheetByName('Witness'); if (!sh || sh.getLastRow() < 2) return [];
  var w = Math.max(7, Math.min(WIT_HEAD.length, sh.getLastColumn()));
  return sh.getRange(2, 1, sh.getLastRow() - 1, w).getValues().map(function (r, i) {
    return { row: i + 2, man: String(r[0] || '').toLowerCase().trim(), role: String(r[1] || ''), name: String(r[2] || ''), email: String(r[3] || '').toLowerCase().trim(), asked: dayOf_(r[4]),
      status: String(r[5] || '').toLowerCase().trim(), yes: dayOf_(r[6]), token: String(r[7] || '').trim(), reminder: String(r[8] || '').trim(), lastWeekly: dayOf_(r[9]), lastRemind: dayOf_(r[10]), copies: Number(r[11]) || 0 };
  });
}
function witnessYesCount_(rows, email, exceptMan) { return rows.filter(function (r) { return r.status === 'yes' && r.email === email && r.man !== exceptMan; }).length; }
function witnessInvitedLookup_(ss, token) {
  token = String(token || '').trim(); if (token.length < 32 || !/^[A-Za-z0-9]+$/.test(token)) return null;
  var hit = witnessRows_(ss).filter(function (r) { return r.token === token && r.status === 'yes'; })[0];
  return hit ? { kind: 'invited', email: hit.email, name: hit.name, room: '', man: hit.man, token: token } : null;
}
/** His one or two men: the Witness rows with this witness's address that say yes (first two, in the order they said it). */
function witnessInvitedMen_(ss, wit) {
  var want = witnessRows_(ss).filter(function (r) { return r.status === 'yes' && r.email === wit.email; }).slice(0, WIT_INV_LIMIT_).map(function (r) { return r.man; });
  return learners_(ss).filter(function (L) { return L.status === 'open' && want.indexOf(L.email) >= 0; });
}
/** Who walks with a man outside a group, for his own page: the one who said yes (name, and the role as a word), else null. */
function witnessYesOf_(ss, email) {
  try {
    var r = witnessRows_(ss).filter(function (x) { return x.man === email && x.status === 'yes'; })[0];
    return r ? { name: r.name, role: r.role.replace(/^an? /i, '').toLowerCase() } : null;
  } catch (e) { return null; }
}
function witnessYesUrl_(cfg, token) { return witnessUrl_(cfg, token).replace(/([?&])w=/, '$1y='); }
/** road_witness: the invitation. Returns { ok: true } and the email goes; { ok: true, limited: true } and nothing goes (no one is told why). */
function roadWitness_(ss, cfg, L, b) {
  if (L.room) throw { code: 'in_group' }; // a man in a group has his leader; the page never offers him this
  var role = String(b.role || '').toLowerCase().trim(); if (!WITNESS_ROLES[role]) throw { code: 'bad_role' };
  var name = String(b.theirName || '').replace(/\s+/g, ' ').trim().slice(0, 80); if (!name) throw { code: 'empty' };
  var email = String(b.theirEmail || '').toLowerCase().trim().slice(0, 120);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email === L.email) throw { code: 'bad_email' };
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw { code: 'busy' };
  var token = '', at = 0, sent = false;
  try {
    var sh = witnessSheet_(ss), rows = witnessRows_(ss);
    var mine = rows.filter(function (r) { return r.man === L.email; });
    var hasYes = mine.some(function (r) { return r.status === 'yes'; });
    var full = witnessYesCount_(rows, email, L.email) >= WIT_INV_LIMIT_;
    // a man who already has his witness, or an address that already walks with two men: nothing is sent, nothing is said (the one waiting invitation, if any, is closed)
    var waiting = mine.filter(function (r) { return r.status === 'waiting'; })[0];
    if (hasYes || full) {
      if (waiting) sh.getRange(waiting.row, 6).setValue('declined');
      log_(ss, 'witness invite', 'not sent for ' + L.email, hasYes ? 'he already has his witness' : 'that address is at its limit');
      return { ok: true, limited: true };
    }
    token = witToken_();
    var row = [L.email, WITNESS_ROLES[role], name, email, today_(), 'waiting', '', token, '', '', '', 0];
    if (waiting) { at = waiting.row; sh.getRange(at, 1, 1, WIT_HEAD.length).setValues([row]); } else sh.appendRow(row);
    roadRow_(ss, L.email, '', 'witness', 'asked', roadWeek_(cfg, L).start);
    try { sent = witnessSend_(ss, cfg, email, 'invite', { name: name, wfirst: firstOf_(name), first: firstOf_(L.name), link: witnessYesUrl_(cfg, token) }); } catch (xs) { log_(ss, 'witness invite', 'not sent for ' + L.email, String(xs && xs.message || xs).slice(0, 200)); }
    log_(ss, 'witness invite', L.email + ' → ' + email, sent ? 'sent' : 'saved, not sent');
    return { ok: true, replaced: !!at };
  } finally { lock.releaseLock(); }
}

/* ---- Before You Say Yes ---- */
function witnessHead_(title) {
  return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + witEsc_(title) + '</title>' +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Source+Sans+3:wght@400;600&display=swap"><style>' + WIT_CSS_ + '</style></head><body><div class="ap-home" id="app">';
}
function witnessYesBand_(h1, where) { return '<header class="band"><div class="bw"><div class="top"><span class="k">Ancient Path</span></div><h1>' + witEsc_(h1) + '</h1><p class="where">' + witEsc_(where) + '</p><div style="height:16px"></div></div></header>'; }
function witnessYesThanks_(first, link, reminder) {
  return '<div class="card" style="margin-top:0;border-top:3px solid var(--bronze)"><p class="t">Thank you. You’re walking with ' + witEsc_(first) + '.</p><p class="s">His first week comes to you by email, the same day each week. Choose when you’d like a reminder to write:</p><div class="choices two">' +
    WIT_REMIND_LIST_.map(function (r) { return '<button type="button" class="choice" data-v="' + witEsc_(r) + '" aria-pressed="' + (reminder === r) + '">' + witEsc_(r) + '</button>'; }).join('') +
    '</div><p class="kept" aria-live="polite"></p><a class="walk" href="' + witEsc_(link) + '" target="_top"><span class="u">See your witness page</span> <span class="ar">→</span></a></div>';
}
function witnessYesNo_(first) {
  return '<div class="card" style="margin-top:0"><p class="t">Thank you for reading it.</p><p class="s">We’ll let ' + witEsc_(first) + ' know our team will walk with him for now. He won’t see why, and nothing of his was shown to you.</p></div>';
}
function witnessYesAsk_(first) {
  var f = witEsc_(first);
  return '<p class="vlead" style="margin-top:16px">' + f + ' asked you to be his witness. Here is what that means, so your yes is a real one.</p>' +
    '<div class="card"><p class="lk">What a Witness Is</p><p class="s">A witness is a mentor, a coach or a trusted friend who walks with a man. He listens deeply, speaks truth with compassion, and challenges him to grow: helping him see what God is doing in his story, act with courage, and become more fully who he is capable of being.</p><p class="s">At the heart of it is trust. He knows you care enough to support him and to tell him what he needs to hear.</p></div>' +
    '<div class="card"><p class="lk">What You Would Do</p><p class="s">Read his week once a week: one page, about five minutes. The path and the word he names, whether the week’s piece helped, how his practice went, and his own words when he chooses to share them.</p><p class="s">Write to him as often as you want, at least once a month. A line is enough. You set your own reminder.</p></div>' +
    '<div class="card"><p class="lk">What You Won’t Be Asked to Do</p><p class="s">You are not his counselor. You don’t fix him, assess him or report on him. If something he writes suggests he or someone else is in danger, tell our team the same day; that is where your part ends.</p></div>' +
    '<div class="card"><p class="lk">What We Promise You</p><p class="s">Our team reads your first two letters too, so you’re not on your own as you start. What he shares is his. Hold it with care.</p></div>' +
    '<button type="button" class="btn" data-yes>Yes, I’ll walk with ' + f + '</button><div class="links" style="margin-top:4px"><button type="button" class="walk" data-no><span class="u">Not now</span></button></div>';
}
function witnessYesJs_(token) {
  return '(function(){var T=' + JSON.stringify(token).replace(/</g, '\\u003c') + ';function $(s,r){return (r||document).querySelector(s)}' +
    'var run=function(){return window.google&&google.script&&google.script.run};' +
    'function call(fn,args,ok,bad){var r=run();if(!r){bad();return}r.withSuccessHandler(function(x){x&&x.ok?ok(x):bad()}).withFailureHandler(bad)[fn].apply(r,args)}' +
    'var main=$("#state");main.addEventListener("click",function(e){var t=e.target.closest?e.target.closest("button"):null;if(!t)return;' +
    'if(t.hasAttribute("data-yes")||t.hasAttribute("data-no")){var yes=t.hasAttribute("data-yes");t.disabled=true;call("witnessAnswer",[T,yes?"yes":"no"],function(x){main.innerHTML=x.html;window.scrollTo(0,0)},function(){t.disabled=false;var n=document.createElement("p");n.className="kept";n.textContent="That did not go through. Try again in a moment.";t.parentNode.appendChild(n)});return}' +
    'if(t.hasAttribute("data-v")){var v=t.getAttribute("data-v"),k=$(".kept",main);call("witnessRemind",[T,v],function(){[].forEach.call(main.querySelectorAll("[data-v]"),function(b){b.setAttribute("aria-pressed",b===t?"true":"false")});k.innerHTML="<b>Kept.</b>"},function(){k.innerHTML="That did not go through. Try again in a moment."})}});})();';
}
function witnessYesPage_(token) {
  try {
    var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
    try { ensureBuild111_(ss); } catch (xe) {}
    token = String(token || '').trim(); if (token.length < 32 || !/^[A-Za-z0-9]+$/.test(token)) return witnessClosedHtml_();
    var r = witnessRows_(ss).filter(function (x) { return x.token === token; })[0];
    if (!r || (r.status !== 'waiting' && r.status !== 'yes')) return witnessClosedHtml_();
    var L = learners_(ss).filter(function (x) { return x.email === r.man; })[0]; if (!L) return witnessClosedHtml_();
    var first = firstOf_(L.name); if (!first) return witnessClosedHtml_();
    var h = witnessHead_('Before You Say Yes') + witnessYesBand_('Before You Say Yes', first + ' asked you to be his witness.') + '<main class="view" id="state">' +
      (r.status === 'yes' ? witnessYesThanks_(first, witnessUrl_(cfg, token), r.reminder) : witnessYesAsk_(first)) + '</main></div><script>' + witnessYesJs_(token) + '</script></body></html>';
    return HtmlService.createHtmlOutput(h).setTitle('Before You Say Yes').addMetaTag('viewport', 'width=device-width, initial-scale=1');
  } catch (err) {
    try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'witness page', 'yes page failed', String(err && err.stack || err).slice(0, 400)); } catch (e2) {}
    return witnessClosedHtml_();
  }
}
/** The yes, or Not now. A yes opens his page and tells the man by email; a no, or a yes that would pass the limit, closes the link and tells no one why. */
function witnessAnswer(token, answer) {
  try {
    var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss), lock = LockService.getScriptLock(); if (!lock.tryLock(10000)) return { ok: false, error: 'busy' };
    try {
      token = String(token || '').trim(); var rows = witnessRows_(ss), r = token.length >= 32 ? rows.filter(function (x) { return x.token === token; })[0] : null;
      if (!r) return { ok: false, error: 'closed' };
      var L = learners_(ss).filter(function (x) { return x.email === r.man; })[0]; if (!L) return { ok: false, error: 'closed' };
      var first = firstOf_(L.name), sh = ss.getSheetByName('Witness'), link = witnessUrl_(cfg, token);
      if (String(answer) === 'yes') {
        if (r.status === 'yes') return { ok: true, html: witnessYesThanks_(first, link, r.reminder) }; // the same answer twice changes nothing and sends nothing
        if (r.status !== 'waiting') return { ok: false, error: 'closed' };
        if (witnessYesCount_(rows, r.email, r.man) >= WIT_INV_LIMIT_ || rows.some(function (x) { return x.man === r.man && x.status === 'yes'; })) {
          sh.getRange(r.row, 6).setValue('declined'); log_(ss, 'witness yes', r.email + ' → ' + r.man, 'not taken: at the limit'); return { ok: true, html: witnessYesNo_(first) };
        }
        sh.getRange(r.row, 6, 1, 2).setValues([['yes', today_()]]);
        log_(ss, 'witness yes', r.email + ' → ' + r.man, 'yes');
        try { witnessSend_(ss, cfg, r.man, 'yes', { name: r.name, first: firstOf_(r.name), link: witnessPageLink_(cfg) }); } catch (xs) { log_(ss, 'witness mail', 'said-yes email failed', String(xs && xs.message || xs).slice(0, 200)); }
        return { ok: true, html: witnessYesThanks_(first, link, '') };
      }
      if (r.status === 'waiting') { sh.getRange(r.row, 6).setValue('declined'); log_(ss, 'witness yes', r.email + ' → ' + r.man, 'not now'); return { ok: true, html: witnessYesNo_(first) }; }
      return { ok: false, error: 'closed' };
    } finally { lock.releaseLock(); }
  } catch (err) { return { ok: false, error: 'failed' }; }
}
/** His chosen reminder to write (Each week, Every two weeks, Each month, No reminder). */
function witnessRemind(token, choice) {
  try {
    var ss = SpreadsheetApp.openById(RE_SHEET_ID); choice = String(choice || '');
    if (!(choice in WIT_REMIND_)) return { ok: false, error: 'bad' };
    token = String(token || '').trim(); var r = token.length >= 32 ? witnessRows_(ss).filter(function (x) { return x.token === token && x.status === 'yes'; })[0] : null;
    if (!r) return { ok: false, error: 'closed' };
    // the choice is his, and holds for every man he walks with
    witnessRows_(ss).filter(function (x) { return x.email === r.email && x.status === 'yes'; }).forEach(function (x) { ss.getSheetByName('Witness').getRange(x.row, 9).setValue(choice); });
    return { ok: true };
  } catch (err) { return { ok: false, error: 'failed' }; }
}

/* ---- our team reads an invited witness's first two letters ---- */
function witnessTeamCopy_(ss, cfg, wit, L, text) {
  if (wit.kind !== 'invited') return;
  var r = witnessRows_(ss).filter(function (x) { return x.token === wit.token; })[0]; if (!r || r.copies >= 2) return;
  ss.getSheetByName('Witness').getRange(r.row, 12).setValue(r.copies + 1);
  var first = firstOf_(L.name) || 'a man';
  GmailApp.sendEmail(HAND_TEAM, 'A new witness’s letter to ' + first + ' (' + (r.copies + 1) + ' of 2)', ['A witness walking with ' + first + ' wrote to him. Our team reads their first two letters.', '', 'Witness: ' + (wit.name || wit.email) + ' · ' + wit.email, 'Man: ' + (L.name || first) + ' · ' + L.email, '', 'The letter:', String(text || '').slice(0, 4000)].join('\n') + '\n', { name: 'Ancient Path' });
}

/* ---- the invited witness's weekly email (the day of his yes, each week) and his reminder to write ---- */
function witnessTickInvited_(ss, cfg) {
  var rows = witnessRows_(ss).filter(function (r) { return r.status === 'yes' && r.token; }), by = {}, today = today_();
  rows.forEach(function (r) { (by[r.email] = by[r.email] || []).push(r); });
  var notes = ss.getSheetByName('Notes'), nv = notes && notes.getLastRow() >= 2 ? notes.getRange(2, 1, notes.getLastRow() - 1, 4).getValues() : [];
  Object.keys(by).forEach(function (email) {
    var mine = by[email].slice(0, WIT_INV_LIMIT_), lead = mine[0], names = mine.map(function (r) { var L = learners_(ss).filter(function (x) { return x.email === r.man; })[0]; return L ? firstOf_(L.name) : ''; }).filter(Boolean).sort(function (a, b) { return a.toLowerCase() < b.toLowerCase() ? -1 : 1; });
    if (!names.length) return;
    var joined = names.length === 2 ? names[0] + ' and ' + names[1] : names[0], link = witnessUrl_(cfg, lead.token), sh = ss.getSheetByName('Witness');
    var yesDay = mine.map(function (r) { return r.yes; }).filter(Boolean).sort()[0] || '';
    // the weekly page: the weekday of his yes, each week, from that day on; one email a day
    if (yesDay && today >= yesDay && utcNoon_(today).getUTCDay() === utcNoon_(yesDay).getUTCDay()) {
      var k = email + ' · ' + today;
      if (!logHas_(ss, 'witness weekly invited', k)) { if (witnessSend_(ss, cfg, email, 'invited weekly', { names: joined, link: link })) { log_(ss, 'witness weekly invited', k, 'sent'); mine.forEach(function (r) { sh.getRange(r.row, 10).setValue(today); }); } }
    }
    // the reminder to write, at his cadence: the first three days after his yes, then each time the cadence has passed
    var cad = WIT_REMIND_[lead.reminder] || 0; if (!cad) return;
    var last = mine.map(function (r) { return r.lastRemind; }).filter(Boolean).sort().pop() || '', due = last ? addDays_(last, cad) : addDays_(yesDay, 3);
    if (!yesDay || today < due) return;
    var since = addDays_(today, -cad), wrote = mine.every(function (r) { var L = learners_(ss).filter(function (x) { return x.email === r.man; })[0]; var nm = firstOf_(r.name).toLowerCase(); return nv.some(function (n) { return String(n[0]).toLowerCase().trim() === r.man && String(n[1]).toLowerCase() === nm && dayOf_(n[2]) > since; }); });
    var key = email + ' · ' + today; if (logHas_(ss, 'witness reminder', key)) return;
    if (wrote) { mine.forEach(function (r) { sh.getRange(r.row, 11).setValue(today); }); return; } // he has written lately: nothing to remind, the clock restarts
    if (witnessSend_(ss, cfg, email, 'invited reminder', { names: joined, link: link })) { log_(ss, 'witness reminder', key, 'sent'); mine.forEach(function (r) { sh.getRange(r.row, 11).setValue(today); }); }
  });
}

/* ═══════════════ build 11.1 priority 3: the practice reminder and "I did it today" ═══════════════
 * Off unless Config "practice reminders" is on. A man who set a practice this week gets one email on the days his rhythm names (Learners N: Daily and Up to twice a day = each day, Three a week = Monday,
 * Wednesday and Friday), at the time he chose (his "when": each morning 7, when the pull comes 12, before bed 21, Central; none chosen 9), within three hours of that time, never twice in a day,
 * never after he tapped "I did it today". Not at all for a man who chose "Only on this page". The link is his own token (Witness pages tab, kind did); opening it writes one Road row what=did for this week
 * (id tap:<day>, "some" for one or two days, "most" from three), and shows "Thank you. It's on your page." No streak, no count, no word of what he did not do. */
var WIT_WHEN_HOUR_ = { morning: 7, pull: 12, bed: 21 };
function witnessDidToken_(ss, L) {
  var sh = witnessPagesSheet_(ss), v = sh.getLastRow() >= 2 ? sh.getRange(2, 1, sh.getLastRow() - 1, 8).getValues() : [];
  for (var i = 0; i < v.length; i++) if (String(v[i][1]) === 'did' && String(v[i][2]).toLowerCase() === L.email && String(v[i][6]) === 'active') return String(v[i][0]);
  var t = witToken_(); sh.appendRow([t, 'did', L.email, L.name || '', '', '', 'active', today_()]); return t;
}
function witnessDidLookup_(ss, token) {
  token = String(token || '').trim(); if (token.length < 32 || !/^[A-Za-z0-9]+$/.test(token)) return null;
  var sh = ss.getSheetByName('Witness pages'); if (!sh || sh.getLastRow() < 2) return null;
  var v = sh.getRange(2, 1, sh.getLastRow() - 1, 8).getValues();
  for (var i = 0; i < v.length; i++) if (String(v[i][0]) === token) return String(v[i][1]) === 'did' && String(v[i][6]) === 'active' ? String(v[i][2]).toLowerCase().trim() : null;
  return null;
}
function witnessAllRoad_(ss) {
  var sh = ss.getSheetByName('Road'), by = {}; if (!sh || sh.getLastRow() < 2) return by;
  sh.getRange(2, 1, sh.getLastRow() - 1, RC.build).getValues().forEach(function (r) {
    var e = String(r[RC.email - 1] || '').toLowerCase().trim(); if (!e) return;
    (by[e] = by[e] || []).push({ when: r[RC.when - 1], id: String(r[RC.entryId - 1] || ''), what: String(r[RC.what - 1] || ''), text: String(r[RC.text - 1] || ''), week: dayOf_(r[RC.week - 1]) });
  });
  return by;
}
function practiceTick_(ss, cfg) {
  if (String(cfg['practice reminders'] || 'off').toLowerCase().trim() !== 'on') return 0;
  var hr = centralHour_(), today = today_(), dow = utcNoon_(today).getUTCDay(), all = witnessAllRoad_(ss), map = courseMap_(ss), n = 0;
  learners_(ss).forEach(function (L) {
    if (L.status !== 'open' || L.notice === 'page') return;
    var pace = paceKey_(L.pace) || 'three'; if (pace === 'three' && [1, 3, 5].indexOf(dow) < 0) return;
    var rows = all[L.email] || [], week = roadWeek_(cfg, L, map);
    if (!rows.some(function (r) { return r.what === 'practice' && r.text && r.week === week.start; })) return;
    var wh = rows.filter(function (r) { return r.what === 'when' && r.week === week.start; }).pop(), hour = wh && WIT_WHEN_HOUR_[wh.text] !== undefined ? WIT_WHEN_HOUR_[wh.text] : 9;
    if (hr < hour || hr >= hour + 3) return;
    if (rows.some(function (r) { return (r.what === 'pnudge' && dayOf_(r.when) === today) || (r.what === 'did' && r.id === 'tap:' + today); })) return;
    var link = witnessDidUrl_(cfg, witnessDidToken_(ss, L));
    if (witnessSend_(ss, cfg, L.email, 'practice', { first: firstOf_(L.name), link: link })) { roadRow_(ss, L.email, '', 'pnudge', today, week.start); n++; }
  });
  return n;
}
function witnessDidUrl_(cfg, token) { return witnessUrl_(cfg, token).replace(/([?&])w=/, '$1d='); }
function witnessDoneHtml_(link) {
  return HtmlService.createHtmlOutput(witnessHead_('Thank you') + '<main class="view" style="padding-top:48px"><div class="card" style="margin-top:0;border-top:3px solid var(--bronze)"><p class="t">Thank you.</p><p class="s">It’s on your page.</p><a class="walk" href="' + witEsc_(link) + '" target="_top"><span class="u">Back to Your Page</span> <span class="ar">→</span></a></div></main></div></body></html>').setTitle('Thank you').addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
/** doGet ?d=<token>: he did it today. One Road row a day; the same tap twice changes nothing. */
function witnessDonePage_(token) {
  try {
    var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss), email = witnessDidLookup_(ss, token); if (!email) return witnessClosedHtml_();
    var L = learners_(ss).filter(function (x) { return x.email === email; })[0]; if (!L || L.status !== 'open') return witnessClosedHtml_();
    var week = roadWeek_(cfg, L), today = today_(), rows = roadRows_(ss, email);
    if (!rows.some(function (r) { return r.what === 'practice' && r.text && r.week === week.start; })) return witnessClosedHtml_();
    var lock = LockService.getScriptLock(); lock.tryLock(10000);
    try {
      if (!rows.some(function (r) { return r.what === 'did' && r.id === 'tap:' + today; })) {
        var days = {}; rows.forEach(function (r) { if (r.what === 'did' && /^tap:/.test(r.id) && r.week === week.start) days[r.id] = 1; }); days['tap:' + today] = 1;
        roadRow_(ss, email, 'tap:' + today, 'did', Object.keys(days).length >= 3 ? 'most' : 'some', week.start);
        log_(ss, 'practice tap', email, 'did it today');
      }
    } finally { try { lock.releaseLock(); } catch (xl) {} }
    return witnessDoneHtml_(witnessPageLink_(cfg));
  } catch (err) {
    try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'witness page', 'done page failed', String(err && err.stack || err).slice(0, 300)); } catch (e2) {}
    return witnessClosedHtml_();
  }
}



function roadCard_(rows, week, band, map, L) {
  var prev = addDays_(week.start, -7), C = week.courses;
  var mk = rows.filter(function (r) { return r.what === 'mark' && r.week === week.start; }).pop(), m = mk ? markOf_(mk.text) : null;
  var chose = rows.filter(function (r) { return r.what === 'practice' && r.text && r.week === prev; }).pop();
  var did = rows.filter(function (r) { return r.what === 'did' && r.week === prev; }).pop();
  var kept = rows.filter(function (r) { return r.what === 'practice' && r.text && r.week === week.start; }).pop();
  var finished = !!((C && C.lead && C.lead.state === 'Finished') || (band && band.done));
  var doit = !finished && Number(week.weekNum) > 0;
  var wmRow = doit ? (map && map.rows || []).filter(function (r) { return (!week.course || r.course.toLowerCase() === String(week.course).toLowerCase()) && String(r.unit) === String(week.weekNum); })[0] : null;
  // build 10.2.3: how did it go (most · some · notyet; the 10.2 value 'did' reads as most days), when he will do it (the latest he chose), how often he is reminded (Learners V)
  var didKey = doit && did ? did.text : ''; if (didKey === 'did') didKey = 'most'; if (didKey !== 'most' && didKey !== 'some' && didKey !== 'notyet') didKey = '';
  var wh = rows.filter(function (r) { return r.what === 'when' && WHENS[r.text]; }).pop();
  var lw = rows.filter(function (r) { return r.what === 'when' && WHENS[r.text] && r.week === prev; }).pop();
  return { week: week.start, waymark: wmRow && wmRow.waymark ? wmRow.waymark : 0, mark: m ? m.mark : '', word: m ? m.word : '', lastChose: doit && chose ? String(chose.text) : '',
    did: didKey, practices: doit ? landPractices_(map, week.course, week.weekNum) : [],
    practice: kept ? String(kept.text) : '', doit: doit, finished: finished,
    weekLine: wmRow ? String(wmRow.weekLine || '') : '', sentence: wmRow ? String(wmRow.sentence || '') : '',
    when: doit && wh ? wh.text : '', lastWhen: doit && chose && lw ? lw.text : '', remind: L && L.reminders ? L.reminders : '' };
}
/* ═══════════ build 10.2.3: the welcome's two faces, the group, the witness ═══════════ */
/** A Course map unit name without its lead: "Week 5 — The Ancient Path Is Not Linear" → "The Ancient Path Is Not Linear". */
function unitTitle_(u) { var t = String(u || '').replace(/^.*?\bWeek\s*\d+\s*[—–:-]\s*/i, '').trim(); return t || String(u || '').trim(); }
/** First visit or return visit. A man has returned when he has a tap of his own from a week before this one (the path, a word, a practice, whether the reading helped, how the practice went, when, how often);
 *  what the return face says is composed only from those taps of the latest such week. Nothing here is a score and nothing is counted. */
function roadVisit_(rows, week, map) {
  var cur = week.start, givenWeek = {};
  rows.forEach(function (r) { if (r.what === 'given') givenWeek[r.id] = r.week; });
  var TAPS = { mark: 1, practice: 1, did: 1, met: 1, not: 1, when: 1, remind: 1 }, CORE = { mark: 1, practice: 1, did: 1, met: 1, not: 1 };
  function wk(r) { return r.what === 'met' || r.what === 'not' ? (givenWeek[r.id] || '') : (r.week || ''); }
  var prior = rows.filter(function (r) { var w = wk(r); return TAPS[r.what] && w && w < cur; });
  if (!prior.length) return { returning: false };
  var core = prior.filter(function (r) { return CORE[r.what]; }), pool = core.length ? core : prior, W = '';
  pool.forEach(function (r) { var w = wk(r); if (w > W) W = w; });
  var mk = rows.filter(function (r) { return r.what === 'mark' && r.week === W; }).pop(), m = mk ? markOf_(mk.text) : null;
  var hp = rows.filter(function (r) { return (r.what === 'met' || r.what === 'not') && wk(r) === W; }).pop();
  var dd = rows.filter(function (r) { return r.what === 'did' && r.week === W; }).pop();
  var n = Number(week.weekNum) - Math.round((utcNoon_(cur) - utcNoon_(W)) / (7 * 864e5)), name = '';
  if (n > 0) { var row = (map && map.rows || []).filter(function (q) { return (!week.course || sameCourse_(q.course, week.course)) && String(q.unit) === String(n); })[0]; if (row) name = unitTitle_(row.name); }
  var did = dd && (dd.text === 'did' || dd.text === 'most' || dd.text === 'some' || dd.text === 'notyet') ? dd.text : '';
  return { returning: true, last: { week: W, recent: W === addDays_(cur, -7), name: name, mark: m ? m.mark : '', word: m ? m.word : '', helped: hp ? hp.what : '', did: did } };
}
/** The one mark most of a group chose this week, or '' : at least four men have marked and one mark stands with more than half of them. marks = one mark key per man who has marked. Never who, never how many. */
function groupMajority_(marks) {
  var n = marks.length; if (n < 4) return '';
  var t = {}, best = '', bn = 0;
  marks.forEach(function (k) { t[k] = (t[k] || 0) + 1; });
  Object.keys(t).forEach(function (k) { if (t[k] > bn) { best = k; bn = t[k]; } });
  return ROAD_MARKS[best] && bn * 2 > n ? best : '';
}
function sameGroup_(a, b) { var x = String(a || '').toLowerCase().replace(/\s+/g, ' ').trim(), y = String(b || '').toLowerCase().replace(/\s+/g, ' ').trim(); return !!x && x === y; }
/** The marks of the men in one group this week (the latest mark of each man; the Road tab is read once). */
function groupMarks_(ss, L, week) {
  var mates = {}; learners_(ss).forEach(function (x) { if (x.status === 'open' && sameGroup_(x.room, L.room)) mates[x.email] = 1; });
  var sh = ss.getSheetByName('Road'); if (!sh || sh.getLastRow() < 2) return [];
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, RC.build).getValues(), last = {};
  data.forEach(function (r) {
    if (String(r[RC.what - 1] || '') !== 'mark' || isoDay_(r[RC.week - 1]) !== week.start) return;
    var em = String(r[RC.email - 1] || '').toLowerCase().trim(); if (!mates[em]) return;
    var mo = markOf_(String(r[RC.text - 1] || '')); if (mo) last[em] = mo.mark;
  });
  return Object.keys(last).map(function (em) { return last[em]; });
}
/** A Signals date as "Oct 28, 2026" whether the cell says "Oct 28, 2026" or "Wednesday, October 28, 2026, 7:00 PM Central". */
function sigDate_(s) { var m = String(s || '').match(/([A-Za-z]{3})[a-z]*\.?\s+(\d{1,2}),?\s+(\d{4})/); return m ? m[1].charAt(0).toUpperCase() + m[1].slice(1, 3).toLowerCase() + ' ' + Number(m[2]) + ', ' + m[3] : ''; }
/** How a Signals row's cohort names a Learners room ("Breaking Free — Jeremiah's Journey"): 'tail' when the cohort holds the part after the dash ("Jeremiah's Journey (Oct 2026)"), 'head' when it is the course alone ("Breaking Free"), '' otherwise. */
function signalsMatch_(room, cohort) {
  var r = String(room || '').toLowerCase().replace(/\s+/g, ' ').trim(), c = String(cohort || '').toLowerCase().replace(/\s+/g, ' ').trim();
  if (!r || !c) return '';
  var parts = r.split(/\s+[—–-]\s+/), head = parts[0], tail = parts.length > 1 ? parts.slice(1).join(' ') : '';
  if (tail && c.indexOf(tail) >= 0) return 'tail';
  if (head && (c === head || c.indexOf(head) === 0)) return 'head';
  return '';
}
/** A room-facing signal "Saying it out loud. Every man put his story…" as { title: 'Saying it out loud', body: 'Every man put his story…' }. */
function signalSplit_(text) {
  var t = String(text || '').replace(/\s+/g, ' ').trim(), m = t.match(/^(.{3,80}?[.!?])\s+(\S[\s\S]*)$/);
  if (m) return { title: m[1].replace(/[.!?]$/, '').trim(), body: m[2].trim() };
  return { title: t.replace(/[.!?]$/, '').trim(), body: '' };
}
/** What the group carried: the latest week's room-facing rows for his cohort, as titles with their words. Pure: rows = [{ cohort, week, session, section, text }]. */
function carriedFrom_(room, rows) {
  var tailWeeks = {}, tailDates = {}, cand = [];
  rows.forEach(function (x) { var mt = signalsMatch_(room, x.cohort); if (mt === 'tail') { tailWeeks[x.week] = 1; tailDates[sigDate_(x.session)] = 1; } x.mt = mt; });
  rows.forEach(function (x) {
    if (!x.mt || String(x.section || '').trim() || !String(x.text || '').trim() || !(x.week > 0)) return; // the room-facing rows have no section opened
    if (x.mt === 'tail' || tailDates[sigDate_(x.session)] || !tailWeeks[x.week]) cand.push(x);
  });
  var top = 0; cand.forEach(function (x) { if (x.week > top) top = x.week; });
  return cand.filter(function (x) { return x.week === top; }).map(function (x) { return signalSplit_(x.text); }).filter(function (x) { return x.title; });
}
function groupCarried_(room) {
  var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID));
  var id = cfg['room signals sheet id'] || deskConfig_('room signals sheet id'); if (!id) return [];
  var sh = SpreadsheetApp.openById(id).getSheetByName('Signals'); if (!sh || sh.getLastRow() < 2) return [];
  var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
  var ci = H['cohort'] != null ? H['cohort'] : 0, wi = H['week'] != null ? H['week'] : 1, si = H['session'] != null ? H['session'] : 2, di = H['section opened'] != null ? H['section opened'] : 3;
  var ti = H['signal (the room\'s words, no names)'] != null ? H['signal (the room\'s words, no names)'] : (H['signal'] != null ? H['signal'] : 4);
  var rows = data.map(function (r) { return { cohort: String(r[ci] || ''), week: toInt_(r[wi], 0), session: String(r[si] instanceof Date ? Utilities.formatDate(r[si], RE_TZ, 'MMM d, yyyy') : (r[si] || '')), section: String(r[di] || ''), text: String(r[ti] || '') }; });
  return carriedFrom_(room, rows);
}
/** The group as the page draws it. A man with no room is not in a group. The line shows only when the rule above says so; the leader flag only tells the page whom "I need a hand" reaches. */
function roadGroup_(ss, cfg, L, week) {
  if (!L.room) return { in: false };
  var g = { in: true, line: '', leader: false, carried: [] };
  try { g.line = groupMajority_(groupMarks_(ss, L, week)); } catch (e1) { log_(ss, 'road', 'the group line could not be read for ' + L.email, String(e1 && e1.stack || e1).slice(0, 200)); }
  try { g.carried = groupCarried_(L.room); } catch (e2) { log_(ss, 'road', 'what the group carried could not be read', String(e2 && e2.stack || e2).slice(0, 200)); }
  try { g.leader = !!handLeader_(L); } catch (e3) {}
  return g;
}
/* ---- Invite Your Own Witness (build 10.2.3): saved to the Witness tab (made on the first invitation); nothing is sent in this build ---- */
var WITNESS_ROLES = { mentor: 'A mentor', coach: 'A coach', friend: 'A trusted friend', pastor: 'A pastor', relative: 'A relative' };
var WIT_HEAD = ['man email', 'role', 'their name', 'their email', 'asked (date)', 'status', 'yes date', 'token', 'reminder', 'last weekly', 'last reminder', 'team copies'];
function witnessSheet_(ss) {
  var sh = ss.getSheetByName('Witness');
  if (!sh) { sh = ss.insertSheet('Witness'); sh.getRange(1, 1, 1, WIT_HEAD.length).setValues([WIT_HEAD]); sh.setFrozenRows(1); log_(ss, 'road', 'build 10.2.3', 'Witness tab made'); }
  else if (!String(sh.getRange(1, 1).getValue() || '').trim()) { sh.getRange(1, 1, 1, WIT_HEAD.length).setValues([WIT_HEAD]); }
  return sh;
}
function witnessWaiting_(ss, email) {
  try {
    var sh = ss.getSheetByName('Witness'); if (!sh || sh.getLastRow() < 2) return false;
    return sh.getRange(2, 1, sh.getLastRow() - 1, 6).getValues().some(function (r) { return String(r[0] || '').toLowerCase().trim() === email && String(r[5] || '').toLowerCase().trim() === 'waiting'; });
  } catch (e) { return false; }
}
/** The leader the road already holds for a man: the Learners "reader" column (the name or address the morning wrote from the People tab), else the same rule readerFor_ uses
 *  (the facilitator on the People tab with his room, else the admin with it). Returns his address, or '' when there is none. Never the man himself. */
function handLeader_(L) {
  try {
    var ps = people_(), want = String(L.reader || '').toLowerCase().trim(), p = null;
    if (want) p = ps.filter(function (x) { return x.email === want || String(x.name || '').toLowerCase() === want; })[0] || null;
    if (!p && L.room) p = readerPerson_(L.room);
    return p && p.email && p.email !== L.email ? p.email : '';
  } catch (e) { return ''; }
}
/** road_hand: one Road row, one email, one calm answer. One hand a man a day: a second tap the same day sends nothing and answers the same.
 *  The email carries his first name, his course and week, and this week's marker and word if set; nothing he wrote. */
function roadHand_(ss, cfg, L) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw { code: 'busy' };
  try {
    var week = roadWeek_(cfg, L), rows = roadRows_(ss, L.email), today = today_();
    var leader = handLeader_(L), to = leader || HAND_TEAM, who = leader ? 'leader' : 'team';
    if (rows.some(function (r) { return r.what === 'hand' && dayOf_(r.when) === today; })) return { ok: true, to: who, again: true };
    var first = String(L.name || '').trim().split(/\s+/)[0];
    var mk = rows.filter(function (r) { return r.what === 'mark' && r.week === week.start; }).pop(), m = mk ? markOf_(mk.text) : null;
    var lines = [(first || 'A man') + ' raised a hand on the road.', '', (first || 'A man') + ' · ' + L.email]; // build 11.0: his first name and how to reach him, and nothing about his week (the sheet says so)
    lines.push('', 'He has been told ' + (leader ? 'his group’s leader' : 'our team') + ' has his note.');
    GmailApp.sendEmail(to, 'A hand raised on the road', lines.join('\n') + '\n', { name: 'Ancient Path' });
    roadRow_(ss, L.email, '', 'hand', '', week.start);
    log_(ss, 'road', 'hand raised: ' + L.email, 'sent to ' + who);
    return { ok: true, to: who, again: false };
  } finally { lock.releaseLock(); }
}

/* ═══════════════════════════════ road.js build 10.2.1 (served at ?file=road.js) ═══════════════════════════════ */


var ROAD_JS = "/* AP-HISROAD road.js build 11.1.2 — Your Page below the band as three views, This Week · Your House · Your Path, served by the Research reader script (ResearchReader.gs build 11.1, ?file=road.js).\n   11.1.2 (Nov 2, 2026, John's walk of the live 11.1.1 on a computer): one header on all three tabs (the full band; no slim band; the tab name is the greeting on the other two; tabs never wrap and each underline is the width of its label); the site row (Your Desk · Your Growth · Your Page) sits at the very top of the band, never under the tabs; Your Path has no drawing; Your House is now Your Story (Deuteronomy 8:2, What You Did · What You Saw · What You Know Now, Mine / Our Group) and no house, window or room is left anywhere a man reads.\n   11.1.1 (Nov 2, 2026, house-rule fixes before the install): every heading in Title Case; the group line only when his mark matches the group's; no counts anywhere he reads; check-in last step preselects nothing and Skip saves nothing; first visit shows only what he has written; text left-aligned; taps 44px or more; on a computer (900px and wider) the check-in and sheets are a centered 640px panel over a dimmed page with Next right under the content; hover and focus-visible on every control; tabs carry aria-controls and arrow keys; the not-done ring is 3:1 or better.\n   11.1 (Nov 2, 2026, the Witness): the invite roles read \"A trusted friend\"; the witness definition is the one the invited witness reads (a mentor, a coach or a trusted friend who walks with a man); Settings shows \"What Your Witness Sees Each Week\", the page exactly as his witness reads it, from v11.weekly. The invitation is now sent: a man outside a group whose witness said yes sees who walks with him (\\\"Name, your mentor, walks with you.\\\"), and an invitation that cannot go answers \\\"Our team walks with you.\\\" with no reason. No new screens; the witness page itself is served by the script (?w=).\n   11.0 (Nov 1, 2026, Your Page 11.0; built to the prototype John ruled Oct 31, \"this is the right direction. let's build from here.\"; built on the live 10.2.4): 1. The page below the band is three views with a tab each and Settings in the band's corner: This Week (the list, Last Week, This Week's Guidepost, Who Walks With You), Your House (a drawn house whose windows light, Your House / Our House, three rooms, Your Story · Told, Offered, Known, What I've Gathered, Make Something of It) and Your Path (the drawn road, What's Next for You, Your Courses, the Nine Guideposts, Walk With Another Man, three doors). 2. The check-in is one overlay of four steps with Back and Skip on each; every tap is written as it is made (road_mark, road_word, road_why, road_did, road_practice, road_when) and the end says road_checkin. 3. The piece, a letter from his witness, I need a hand, Settings and What This Page Is For open as sheets (a full screen on a phone, a sheet beside the page on a desk); each traps focus, closes on Esc and locks the page behind it. 4. After his group meets the list is Carry It This Week: What did you take from his group's night? (road_saw), his practice, the next piece; it returns to Before Your Group Meets when both are done or after three days. 5. The band is the page's own and is painted once, in one call (window.apBand.set), so it never moves on load. 6. Retired (their data stays, and the server still sends it): the old This Week layers, For Your Road, Your Land and its walk, Your Story panel, Courses and Doors panels, the frames and the welcome panel. The shelf cards stay the page's own and open in place under their rows. 7. Hooks for 11.1: v11.notes (the Notes tab) is read for the letter, v11.weekly (null) is where the weekly page his witness reads attaches, and the settings it needs (shares, notes paused) are saved here.\n   Earlier builds' notes are in build 10.2.4's road.js. The page block on /start holds <div id=\"apRoad4\"></div> under its band and this script's tag. */\n(function () {\n  \"use strict\";\n  var host = document.getElementById(\"apRoad4\");\n  if (!host || host.getAttribute(\"data-hisroad\")) return;\n  host.setAttribute(\"data-hisroad\", \"11.1.2\");\n  var BUILD = \"11.1.2\";\n  /* the stamped rule count of this script's stylesheet, taken before the file card (AP-SHIP 1); the page counts what the browser accepted against it */\n  var RULES = { hisroad: 170 };\n  var DESK_URL = \"https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec\";\n  var ROAD_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split(\"?\")[0] : \"\"; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : \"\"; })();\n  var CACHE = \"ap_hisroad_v4\";\n  var data = null, me = null;\n  var reduce = !!(window.matchMedia && window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches);\n\n  function esc(t) { return String(t == null ? \"\" : t).replace(/[&<>\"]/g, function (c) { return { \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\" }[c]; }); }\n  function nb(s) { return String(s || \"\").replace(/ (\\S+)$/, \" $1\"); }\n  function smart(s) { return String(s || \"\").replace(/(\\w)'(\\w)/g, \"$1’$2\").replace(/'/g, \"’\"); }\n  function lc1(s) { s = String(s || \"\"); return s.charAt(0).toLowerCase() + s.slice(1); }\n  /* Title Case for a label the server hands over (house rule: every heading a man reads) */\n  var SMALLW = { a: 1, an: 1, and: 1, as: 1, at: 1, but: 1, by: 1, for: 1, from: 1, in: 1, into: 1, nor: 1, of: 1, on: 1, or: 1, the: 1, to: 1, up: 1, with: 1 };\n  function tc(s) { return String(s || \"\").replace(/[A-Za-z’']+/g, function (w, i, all) { var l = w.toLowerCase(); return i > 0 && SMALLW[l] && !/[:·]\\s*$/.test(all.slice(0, i)) ? l : w.charAt(0).toUpperCase() + w.slice(1); }); }\n  function uc1(s) { s = String(s || \"\"); return s.charAt(0).toUpperCase() + s.slice(1); }\n  function $(sel, root) { return (root || host).querySelector(sel); }\n  function $$(sel, root) { return [].slice.call((root || host).querySelectorAll(sel)); }\n\n  /* the stylesheet goes in once, just before the section (AP-SHIP 1: the page counts what the browser accepted against RULES) */\n  (function () {\n    if (document.getElementById(\"apHisRoadStyle\")) return;\n    var st = document.createElement(\"style\"); st.id = \"apHisRoadStyle\"; st.setAttribute(\"data-ap-sheet\", \"hisroad\");\n    st.textContent = [\n      \".ap-home .av{--paper:#FBF9F5;--sand:#F3EDE3;--card:#FFFFFF;--navy:#1F2A44;--ink:#2B3040;--quiet:#5E6573;--rule:#E2DCD1;--bronze:#B8945F;--bronze-ink:#8A6A3B;--glow:#E9C98F;--mark:#7F8692;--serif:'Source Serif 4',Georgia,serif;--sans:'Source Sans 3','Segoe UI',Arial,sans-serif;--r1:6px;--r2:10px;--r3:14px;--tap:44px;--ease:cubic-bezier(.2,.7,.2,1);display:block;color:var(--ink) !important;font:400 16px/1.5 var(--sans) !important;text-align:left}\",\n      \".ap-home .av *,.ap-home .av *:before,.ap-home .av *:after{box-sizing:border-box}\",\n      \".ap-home .av p{margin:0;text-wrap:pretty}\",\n      \".ap-home .av button{appearance:none;-webkit-appearance:none;background:none;border:0;margin:0;padding:0;text-transform:none;letter-spacing:normal;box-shadow:none;cursor:pointer;text-align:left;border-radius:0;line-height:1.3}\",\n      \".ap-home .av a{color:inherit !important}\",\n      \".ap-home .av .av-main{position:relative}\",\n      \".ap-home .av .av-main[inert]{pointer-events:none}\",\n      \".ap-home .av .av-view{max-width:720px;padding:16px 0 40px}\",\n      \".ap-home .av .av-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\",\n      \".ap-home .av :focus-visible{outline:3px solid var(--bronze);outline-offset:2px;border-radius:4px}\",\n      \".ap-home .av .av-vlead{font:italic 400 16.5px/1.4 var(--serif) !important;color:var(--quiet) !important;padding:0 2px 12px}\",\n      \".ap-home .av .av-vlead .av-ref{font:600 12.5px/1.3 var(--sans) !important;font-style:normal;color:var(--bronze-ink) !important;white-space:nowrap;margin-left:2px}\",\n      \".ap-home .av .av-last{font-size:15px;color:var(--quiet) !important;padding:2px 2px 12px}\",\n      \".ap-home .av .av-last b{color:var(--navy) !important;font-weight:600}\",\n      \".ap-home .av .av-card{background:var(--card);border:1px solid var(--rule);border-radius:var(--r2);padding:16px;margin-top:12px}\",\n      \".ap-home .av .av-card.av-first{margin-top:0;border-top:3px solid var(--bronze)}\",\n      \".ap-home .av .av-lk{font:600 11.5px/1.3 var(--sans) !important;letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink) !important}\",\n      \".ap-home .av .av-t{margin-top:4px;font:400 19px/1.3 var(--serif) !important;color:var(--navy) !important}\",\n      \".ap-home .av .av-s{margin-top:6px;font-size:15px}\",\n      \".ap-home .av .av-help{margin-top:6px;font-size:13.5px;color:var(--quiet) !important}\",\n      \".ap-home .av .av-walk{display:inline-flex;align-items:center;gap:4px;min-height:var(--tap);padding:0;font:600 15px/1.3 var(--sans) !important;color:var(--navy) !important;text-decoration:none !important}\",\n      \".ap-home .av .av-walk .av-u{border-bottom:1px solid var(--bronze);padding-bottom:1px}\",\n      \".ap-home .av .av-walk .av-ar{color:var(--bronze-ink) !important}\",\n      \".ap-home .av .av-carry{margin-top:10px;border-left:3px solid var(--bronze);background:var(--sand);padding:10px 12px;border-radius:0 var(--r1) var(--r1) 0}\",\n      \".ap-home .av .av-carry .av-lk{font-size:11px}\",\n      \".ap-home .av .av-carry p+p{margin-top:2px;font:400 16.5px/1.4 var(--serif) !important;color:var(--navy) !important}\",\n      \".ap-home .av .av-try{margin-top:10px;font-size:15px}\",\n      \".ap-home .av .av-try b{color:var(--navy) !important;font-weight:600}\",\n      \".ap-home .av .av-more{overflow:hidden;max-height:0;visibility:hidden;transition:max-height .35s var(--ease)}\",\n      \".ap-home .av .av-more.av-open{max-height:900px;visibility:visible}\",\n      \".ap-home .av .av-list{background:var(--card);border:1px solid var(--rule);border-radius:var(--r3);overflow:hidden}\",\n      \".ap-home .av .av-hd{display:flex;justify-content:space-between;align-items:baseline;padding:14px 16px 6px}\",\n      \".ap-home .av .av-hd b{font:400 19px/1.3 var(--serif) !important;color:var(--navy) !important}\",\n      \".ap-home .av .av-hd span{font-size:13.5px;color:var(--quiet) !important}\",\n      \".ap-home .av .av-row{display:grid;grid-template-columns:28px 1fr auto;gap:12px;align-items:center;width:100%;min-height:64px;padding:12px 16px;border-top:1px solid var(--rule);text-align:left;color:var(--ink) !important}\",\n      \".ap-home .av .av-hd+.av-row{border-top:0}\",\n      \".ap-home .av .av-row.av-still{cursor:default}\",\n      \".ap-home .av .av-ring{width:24px;height:24px;border-radius:50%;border:2px solid var(--mark);position:relative;transition:background .3s var(--ease),border-color .3s var(--ease)}\",\n      \".ap-home .av .av-row.av-done .av-ring{background:var(--bronze);border-color:var(--bronze)}\",\n      \".ap-home .av .av-row.av-done .av-ring:after{content:\\\"\\\";position:absolute;left:7px;top:3px;width:6px;height:11px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}\",\n      \".ap-home .av .av-ly{display:block;font:600 11px/1.3 var(--sans) !important;letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink) !important}\",\n      \".ap-home .av .av-tt{display:block;font-size:15.5px;color:var(--ink) !important;margin-top:1px}\",\n      \".ap-home .av .av-row small{display:block;font-size:13px;color:var(--quiet) !important;margin-top:1px}\",\n      \".ap-home .av .av-row.av-done .av-tt{color:var(--quiet) !important}\",\n      \".ap-home .av .av-go{font:600 14px/1.3 var(--sans) !important;color:var(--navy) !important;border-bottom:1px solid var(--bronze);white-space:nowrap}\",\n      \".ap-home .av .av-row.av-done .av-go{border-bottom:0;color:var(--quiet) !important;font-weight:400}\",\n      \".ap-home .av .av-row.av-pop .av-ring{animation:av-pop .5s var(--ease)}\",\n      \"@keyframes av-pop{0%{transform:scale(1)}40%{transform:scale(1.25)}100%{transform:scale(1)}}\",\n      \".ap-home .av .av-letterc{background:#FFFDF8;border:1px solid var(--rule);border-left:4px solid var(--bronze);border-radius:var(--r2);padding:16px;margin-bottom:12px}\",\n      \".ap-home .av .av-ceremony{background:var(--navy);color:#F3EDE3 !important;border-radius:var(--r3);padding:20px;margin-bottom:12px}\",\n      \".ap-home .av .av-ceremony .av-lk{color:#D9B97F !important}\",\n      \".ap-home .av .av-ceremony .av-t{color:#F3EDE3 !important;font-size:22px}\",\n      \".ap-home .av .av-ceremony .av-s{color:#D8D0C4 !important}\",\n      \".ap-home .av .av-ceremony .av-walk{color:#F3EDE3 !important}\",\n      \".ap-home .av .av-answer textarea{display:block;width:100%;min-height:96px;margin-top:10px;padding:12px;border:1px solid var(--rule);border-radius:var(--r1);background:var(--paper);font:16px/1.5 var(--sans) !important;color:var(--ink) !important;resize:vertical}\",\n      \".ap-home .av .av-btn{display:block;width:100%;min-height:48px;margin-top:12px;border-radius:8px;background:var(--navy);color:var(--paper) !important;font:600 15.5px/1.3 var(--sans) !important;text-align:center}\",\n      \".ap-home .av .av-btn[disabled]{opacity:.55;cursor:default}\",\n      \".ap-home .av .av-kept{margin-top:8px;font-size:14px;color:var(--quiet) !important;min-height:20px}\",\n      \".ap-home .av .av-kept b{color:var(--navy) !important;font-weight:600}\",\n      \".ap-home .av .av-choices{display:grid;gap:8px;margin-top:12px}\",\n      \".ap-home .av .av-choices.av-two{grid-template-columns:1fr 1fr}\",\n      \".ap-home .av .av-choices.av-three{grid-template-columns:1fr 1fr 1fr}\",\n      \".ap-home .av .av-choice{min-height:var(--tap);padding:10px 12px;border:1px solid var(--rule);border-radius:8px;background:var(--card);font-size:15px;color:var(--ink) !important;text-align:left;display:flex;align-items:center;justify-content:flex-start;gap:6px}\",\n      \".ap-home .av .av-choice.av-left{justify-content:flex-start;text-align:left}\",\n      \".ap-home .av .av-choice[aria-pressed=\\\"true\\\"],.ap-home .av .av-choice[aria-checked=\\\"true\\\"]{border:2px solid var(--bronze);background:var(--sand);color:var(--navy) !important;font-weight:600}\",\n      \".ap-home .av .av-choice[aria-pressed=\\\"true\\\"]:before,.ap-home .av .av-choice[aria-checked=\\\"true\\\"]:before{content:\\\"\\\\2713\\\";color:var(--bronze-ink) !important}\",\n      \".ap-home .av .av-choice svg{width:16px;height:16px;flex:none;fill:currentColor}\",\n      \".ap-home .av .av-words{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}\",\n      \".ap-home .av .av-word{min-height:var(--tap);padding:6px 14px;border:1px solid var(--rule);border-radius:999px;background:var(--card);font-size:14.5px;color:var(--ink) !important}\",\n      \".ap-home .av .av-word[aria-pressed=\\\"true\\\"]{border:2px solid var(--bronze);background:var(--sand);color:var(--navy) !important;font-weight:600}\",\n      \".ap-home .av .av-ov{position:fixed;inset:0;background:var(--paper);z-index:2147483000;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .38s var(--ease);visibility:hidden;overscroll-behavior:contain}\",\n      \".ap-home .av .av-ov.av-open{transform:none;visibility:visible}\",\n      \".ap-home .av .av-scrim{position:fixed;inset:0;background:rgba(16,21,31,.45);z-index:2147482999;opacity:0;visibility:hidden;transition:opacity .3s var(--ease)}\",\n      \".ap-home .av .av-scrim.av-on{opacity:1;visibility:visible}\",\n      \".ap-home .av .av-ohead{display:flex;justify-content:space-between;align-items:center;padding:14px 16px 6px 20px}\",\n      \".ap-home .av .av-close{min-height:var(--tap);min-width:var(--tap);font:600 14px/1.3 var(--sans) !important;color:var(--navy) !important;text-align:center}\",\n      \".ap-home .av .av-obody{flex:1;overflow-y:auto;padding:4px 20px 24px;overscroll-behavior:contain}\",\n      \".ap-home .av .av-ofoot{padding:12px 20px 20px;border-top:1px solid var(--rule);background:var(--paper)}\",\n      \".ap-home .av .av-bar{display:flex;gap:6px}\",\n      \".ap-home .av .av-bar i{flex:1;height:4px;border-radius:2px;background:var(--rule);transition:background .3s var(--ease)}\",\n      \".ap-home .av .av-bar i.av-on{background:var(--bronze)}\",\n      \".ap-home .av .av-q{font:400 25px/1.25 var(--serif) !important;color:var(--navy) !important;margin-top:6px}\",\n      \".ap-home .av .av-sub{font:600 12px/1.3 var(--sans) !important;letter-spacing:.07em;text-transform:uppercase;color:var(--quiet) !important;margin-top:16px}\",\n      \".ap-home .av .av-give{background:var(--sand);border-radius:var(--r2);padding:14px;margin-top:12px;opacity:0;transform:translateY(8px);transition:opacity .45s var(--ease),transform .45s var(--ease)}\",\n      \".ap-home .av .av-give.av-in{opacity:1;transform:none}\",\n      \".ap-home .av .av-give p+p{margin-top:4px;font-size:15px}\",\n      \".ap-home .av .av-links{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:4px 24px}\",\n      \".ap-home .av .av-quote{margin-top:12px;font:400 20px/1.45 var(--serif) !important;color:var(--navy) !important}\",\n      \".ap-home .av .av-src{margin-top:8px;font-size:13.5px;color:var(--quiet) !important}\",\n      \".ap-home .av .av-said{margin-top:10px;padding-top:10px;border-top:1px solid var(--rule)}\",\n      \".ap-home .av .av-said p+p{margin-top:6px}\",\n      \".ap-home .av .av-paper{background:#FFFDF8;color:#2B3040 !important;border:1px solid var(--rule);border-radius:4px;padding:22px;margin-top:12px;font:400 17px/1.6 var(--serif) !important;box-shadow:0 1px 4px rgba(0,0,0,.06)}\",\n      \".ap-home .av .av-paper p+p{margin-top:12px}\",\n      \".ap-home .av .av-paper .av-sig{font-style:italic;color:#5E6573 !important}\",\n      \".ap-home .av .av-seg2{display:flex;gap:8px;margin-top:4px}\",\n      \".ap-home .av .av-seg2 button{min-height:var(--tap);padding:6px 16px;border-radius:999px;border:1px solid var(--rule);background:var(--card);font:600 14px/1.3 var(--sans) !important;color:var(--navy) !important}\",\n      \".ap-home .av .av-seg2 button[aria-pressed=\\\"true\\\"]{border:2px solid var(--bronze);background:var(--sand)}\",\n      \".ap-home .av .av-room{border-top:3px solid var(--bronze)}\",\n      \".ap-home .av .av-room .av-t{font-size:17.5px}\",\n      \".ap-home .av .av-rw{font:600 12px/1.3 var(--sans) !important;color:var(--quiet) !important;margin-top:2px}\",\n      \".ap-home .av .av-line{margin-top:10px;font-size:15px}\",\n      \".ap-home .av .av-line.av-mine{font-family:var(--serif) !important;font-style:italic;font-size:16px}\",\n      \".ap-home .av .av-line.av-new{animation:av-newline 1.6s var(--ease)}\",\n      \"@keyframes av-newline{0%{background:#FFE9BE}100%{background:transparent}}\",\n      \".ap-home .av .av-line small{display:block;font:400 12.5px/1.4 var(--sans) !important;font-style:normal;color:var(--quiet) !important}\",\n      \".ap-home .av .av-shelf .av-it{border-top:1px solid var(--rule)}\",\n      \".ap-home .av .av-shelf .av-it:first-child{border-top:0}\",\n      \".ap-home .av .av-shelf .av-itb{display:flex;justify-content:space-between;gap:12px;align-items:center;width:100%;min-height:52px;text-align:left;color:var(--ink) !important;font-size:15px}\",\n      \".ap-home .av .av-shelf em{font-style:normal;font-size:13px;color:var(--quiet) !important;text-align:right}\",\n      \".ap-home .av .av-slot{padding:0 0 12px}\",\n      \".ap-home .av .av-slot[hidden]{display:none}\",\n      \".ap-home .av .av-vol{display:grid;grid-template-columns:110px 1fr;gap:14px;align-items:center;margin-top:10px}\",\n      \".ap-home .av .av-cover{background:var(--navy);color:#F3EDE3 !important;border-radius:4px;padding:12px 10px;height:140px;display:flex;flex-direction:column;box-shadow:0 2px 6px rgba(0,0,0,.18)}\",\n      \".ap-home .av .av-cover .av-ck{font:600 8.5px/1.3 var(--sans) !important;letter-spacing:.1em;text-transform:uppercase;color:#D9B97F !important}\",\n      \".ap-home .av .av-cover .av-ct{margin-top:6px;font:400 15px/1.15 var(--serif) !important}\",\n      \".ap-home .av .av-cover .av-cv{margin-top:auto;font:italic 400 9px/1.35 var(--serif) !important;color:#E8E0D2 !important}\",\n      \".ap-home .av .av-course{display:flex;justify-content:space-between;align-items:center;gap:10px;min-height:52px;border-top:1px solid var(--rule)}\",\n      \".ap-home .av .av-course:first-of-type{border-top:0}\",\n      \".ap-home .av .av-course b{font:400 16.5px/1.3 var(--serif) !important;color:var(--navy) !important}\",\n      \".ap-home .av .av-course span{font-size:14px;color:var(--quiet) !important;text-align:right}\",\n      \".ap-home .av a.av-course{text-decoration:none !important;color:inherit !important}\",\n      \".ap-home .av .av-gp{border-top:1px solid var(--rule)}\",\n      \".ap-home .av .av-gp:first-of-type{border-top:0}\",\n      \".ap-home .av .av-gp>button{width:100%;min-height:52px;display:flex;justify-content:space-between;align-items:center;padding:6px 0;text-align:left;color:var(--ink) !important}\",\n      \".ap-home .av .av-gp b{font:400 16px/1.3 var(--serif) !important;color:var(--navy) !important}\",\n      \".ap-home .av .av-one{font-size:13.5px;color:var(--quiet) !important}\",\n      \".ap-home .av .av-gp .av-body{font-size:14.5px;padding:0 0 12px}\",\n      \".ap-home .av .av-doors{display:flex;flex-wrap:wrap;gap:0 18px;margin-top:12px;padding-top:4px;border-top:1px solid var(--rule)}\",\n      \".ap-home .av .av-toggle{display:flex;justify-content:space-between;align-items:center;min-height:52px;border-top:1px solid var(--rule);gap:12px}\",\n      \".ap-home .av .av-toggle:first-of-type{border-top:0}\",\n      \".ap-home .av .av-sw{width:56px;height:44px;min-height:44px;min-width:56px;position:relative;flex:none;background:none}\",\n      \".ap-home .av .av-sw:before{content:\\\"\\\";position:absolute;left:3px;top:7px;width:50px;height:30px;border-radius:999px;background:var(--rule)}\",\n      \".ap-home .av .av-sw:after{content:\\\"\\\";position:absolute;top:10px;left:6px;width:24px;height:24px;border-radius:50%;background:#fff;transition:transform .2s var(--ease);box-shadow:0 1px 2px rgba(0,0,0,.2)}\",\n      \".ap-home .av .av-sw[aria-checked=\\\"true\\\"]:before{background:var(--bronze)}\",\n      \".ap-home .av .av-sw[aria-checked=\\\"true\\\"]:after{transform:translateX(20px)}\",\n      \".ap-home .av .av-field{display:flex;flex-direction:column;gap:4px;margin-top:10px;font:600 13px/1.3 var(--sans) !important;color:var(--ink) !important}\",\n      \".ap-home .av .av-field input{min-height:var(--tap);padding:8px 10px;border:1px solid var(--rule);border-radius:var(--r1);font:16px/1.3 var(--sans) !important;background:var(--card);color:var(--ink) !important}\",\n      \".ap-home .av .av-toast{position:fixed;left:16px;right:16px;bottom:18px;z-index:2147483200;max-width:440px;margin:0 auto;background:var(--navy);color:var(--paper) !important;border-radius:10px;padding:12px 14px;font-size:14.5px;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .3s var(--ease),transform .3s var(--ease);pointer-events:none}\",\n      \".ap-home .av .av-toast.av-in{opacity:1;visibility:visible;transform:none}\",\n      \".ap-home .av .av-verse{margin-top:10px;font:italic 400 17px/1.5 var(--serif) !important;color:var(--navy) !important}\",\n      \".ap-home .av .av-verse span{display:block;margin-top:2px;font:600 12.5px/1.3 var(--sans) !important;font-style:normal;color:var(--bronze-ink) !important}\",\n      \".ap-home .av .av-news{margin-bottom:12px;padding:12px 14px;border-radius:var(--r2);background:var(--sand);font-size:15px}\",\n      \".ap-home .av .av-news a{font-weight:600;color:var(--navy) !important;margin-left:8px;border-bottom:1px solid var(--bronze);white-space:nowrap}\",\n      \".ap-home .av .av-ctxt{margin-top:8px;display:flex;flex-direction:column;gap:6px}\",\n      \".ap-home .av .av-ctxt a{font-weight:600;color:var(--navy) !important;border-bottom:1px solid var(--bronze);align-self:flex-start;min-height:var(--tap);display:inline-flex;align-items:center}\",\n      \".ap-home .av .av-quo{margin-top:10px;padding-left:12px;border-left:3px solid var(--rule);font:italic 400 16px/1.5 var(--serif) !important}\",\n      \".ap-home .av .av-quo small{display:block;font:400 12.5px/1.4 var(--sans) !important;font-style:normal;color:var(--quiet) !important}\",\n      \"@media (min-width:900px){.ap-home .av .av-ov{inset:auto;top:50%;left:50%;width:640px;max-width:calc(100vw - 48px);height:auto;max-height:calc(100vh - 64px);border-radius:14px;border:1px solid var(--rule);box-shadow:0 24px 64px rgba(16,21,31,.28);transform:translate(-50%,-46%);opacity:0;transition:transform .3s var(--ease),opacity .25s var(--ease),visibility 0s linear .3s}.ap-home .av .av-ov.av-open{transform:translate(-50%,-50%);opacity:1;transition:transform .3s var(--ease),opacity .25s var(--ease),visibility 0s}.ap-home .av .av-obody{flex:0 1 auto;min-height:0}.ap-home .av .av-ofoot{border-radius:0 0 14px 14px}}\",\n      \".ap-home .av .av-row:not(.av-still):hover{background:var(--sand)}\",\n      \".ap-home .av .av-btn:hover{filter:brightness(1.12)}\",\n      \".ap-home .av .av-walk:hover .av-u{border-bottom-color:var(--bronze-ink);border-bottom-width:2px}\",\n      \".ap-home .av .av-shelf .av-itb:hover,.ap-home .av .av-gp>button:hover,.ap-home .av .av-course:hover{background:var(--sand)}\",\n      \".ap-home .av .av-choice:hover{border-color:var(--bronze);background:var(--sand)}\",\n      \".ap-home .av .av-word:hover{border-color:var(--bronze);background:var(--sand)}\",\n      \".ap-home .av .av-seg2 button:hover{border-color:var(--bronze);background:var(--sand)}\",\n      \".ap-home .av .av-close:hover{color:var(--bronze-ink) !important;text-decoration:underline !important}\",\n      \".ap-home .av .av-news a:hover,.ap-home .av .av-ctxt a:hover{color:var(--bronze-ink) !important;border-bottom-color:var(--bronze-ink)}\",\n      \".ap-home .av .av-row:focus-visible,.ap-home .av .av-itb:focus-visible,.ap-home .av .av-gp>button:focus-visible{outline-offset:-3px}\",\n      \".ap-home .ap-band button.ap-tab:hover{color:#FFFFFF !important;background:rgba(255,255,255,.09)}\",\n      \".ap-home .ap-band button.ap-set:hover{color:#FFFFFF !important;text-decoration:underline !important}\",\n      \"@media (max-width:420px){.ap-home .av .av-choices.av-three{grid-template-columns:1fr}.ap-home .av .av-q{font-size:23px}}\",\n      \"@media (prefers-reduced-motion:reduce){.ap-home .av *,.ap-home .av *:before,.ap-home .av *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}\",\n      \".ap-home #apBand.ap-slim{position:static !important}\",\n      \".ap-home #apBand.ap-slim .ap-eyebrow,.ap-home #apBand.ap-slim .ap-hello,.ap-home #apBand.ap-slim .ap-where,.ap-home #apBand.ap-slim .ap-nextrow{display:block !important}\",\n      \".ap-home #apBand.ap-slim .ap-nm{display:none !important}\",\n      \".ap-home #apBand .ap-bandw{width:100%}\",\n      \".ap-home #apBand .ap-tabs{justify-content:flex-start;gap:28px}\",\n      \".ap-home #apBand button.ap-tab{flex:0 0 auto;position:relative;padding:0;white-space:nowrap;min-width:44px}\",\n      \".ap-home #apBand button.ap-tab:before{content:\\\"\\\";position:absolute;left:-12px;right:-12px;top:0;bottom:0}\",\n      \".ap-home #apBand .ap-band-in>.apg-row{margin:0 0 14px;padding-top:0;border-top:0;border-bottom:1px solid rgba(243,237,227,.14)}\"\n    ].join(\"\");\n    host.parentNode.insertBefore(st, host);\n  })();\n\n  /* ───────────── the page's own pieces, as the page already read them (ap:states, ap:stones, ap:courses) ───────────── */\n  var MONTHS = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n  var DAYS = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n  function dparts(iso) { var m = /^(\\d{4})-(\\d{2})-(\\d{2})/.exec(String(iso || \"\")); return m ? { y: +m[1], m: +m[2], d: +m[3] } : null; }\n  function wdName(iso) { var p = dparts(iso); return p ? DAYS[new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay()] : \"\"; }\n  function states() { var r = window.apStates; return r && r.length ? r : []; }\n  function stateOf(key) { var s = states().filter(function (x) { return x && x.key === key; })[0]; return s && s.status && s.status !== \"none\" ? s : null; }\n  function surfaces() { return window.apSurfaces || {}; }\n  function shelf() { return document.getElementById(\"apShelf\"); }\n  function cardNode(key) { return document.querySelector('.ap-card[data-story=\"' + key + '\"]'); }\n  function cardShown(n) { return !!n && n.style.display !== \"none\"; }\n  function titleOf(n) { var t = n.querySelector(\".ap-card-title\"); return t ? String(t.textContent || \"\").trim() : \"\"; }\n  function norm(s) { return String(s || \"\").toLowerCase().replace(/^\\s*write\\s+(?:an?\\s+|your\\s+)?/, \"\").replace(/^\\s*your\\s+/, \"\").replace(/[^a-z0-9]+/g, \" \").trim(); }\n  function cardFor(name) {\n    var n = norm(name); if (!n) return null;\n    var keys = Object.keys(surfaces()), i, c, t;\n    for (i = 0; i < keys.length; i++) { c = cardNode(keys[i]); if (c && norm(titleOf(c)) === n) return c; }\n    for (i = 0; i < keys.length; i++) { c = cardNode(keys[i]); t = c ? norm(titleOf(c)) : \"\"; if (t.length > 3 && (t.indexOf(n) >= 0 || n.indexOf(t) >= 0)) return c; }\n    return null;\n  }\n  function cardHref(c) { var a = c && c.querySelector(\".ap-card-actions a\"); return a ? String(a.getAttribute(\"href\") || \"\") : \"\"; }\n  function firstSentence(s) { s = String(s || \"\").replace(/\\s+/g, \" \").trim(); var m = /^[^.?!]*[.?!]/.exec(s); return m ? m[0] : s; }\n  function writeName(t) {\n    t = String(t || \"\"); var m = /^write\\s+(?:an?|your)\\s+(.+)$/i.exec(t);\n    if (m) return \"Write your \" + m[1].toLowerCase();\n    return /^write\\s/i.test(t) ? t : \"Write \" + t;\n  }\n  function numOf(v) { var n = parseInt(v, 10); return isNaN(n) ? 0 : n; }\n  /* the course's own card on the page (its link), else the courses door; no course is named here */\n  function courseHref(name) {\n    var n = norm(name), cards = document.querySelectorAll(\".ap-card.ap-course, a.ap-ccard\"), i, t, a;\n    for (i = 0; i < cards.length; i++) {\n      t = cards[i].querySelector(\".ap-card-title, .ap-ccard-name\"); a = cards[i].tagName === \"A\" ? cards[i] : cards[i].querySelector(\"a[href]\");\n      if (t && a && norm(t.textContent) === n) return a.getAttribute(\"href\") || \"\";\n    }\n    return \"/courses\";\n  }\n\n  /* the story work the course has introduced by this week that he has not finished (the Course map's piece column, up to his week); the server's band names it */\n  function writeList(d) {\n    var b = (d && d.band) || {}, out = [], seen = {};\n    if (!window.apStates || !window.apStates.length) return out;\n    var W = window.apWeek || {};\n    var list = b.writes && b.writes.length ? b.writes : ((!b.course && W.pieces) || []).map(function (p) { return { piece: p.name, address: p.href, unit: p.week }; });\n    list.forEach(function (w) {\n      var card = cardFor(w.piece), key = card ? card.getAttribute(\"data-story\") : \"\", st = key ? stateOf(key) : null;\n      var title = card ? titleOf(card) : String(w.piece || \"\"); if (!title || seen[norm(title)]) return; seen[norm(title)] = 1;\n      out.push({ title: title, href: w.address || cardHref(card), unit: numOf(w.unit), finished: !!(st && st.status === \"finished\"), begun: !!st, key: key });\n    });\n    return out;\n  }\n\n  /* ───────────── words lifted from the ruled prototype (Oct 31); nothing here is invented ───────────── */\n  var WORDS = [\"ashamed\", \"exposed\", \"afraid\", \"angry\", \"sad\", \"hurt\", \"alone\", \"numb\"];\n  var MORE_WORDS = [\"lonely\", \"overwhelmed\", \"guilty\", \"anxious\", \"tired\", \"tender\", \"relieved\", \"seen\", \"hopeful\", \"grateful\", \"steady\", \"free\", \"glad\"];\n  var NEED_FB = {\n    afraid: \"Afraid often asks for safety. Think of one safe person, and let him know where you are this week.\",\n    ashamed: \"Ashamed often asks to be known and still welcomed. Tell one man one true thing this week.\",\n    exposed: \"Exposed often asks for covering. Choose who sees your story, and let it be someone who stays.\",\n    angry: \"Angry often asks for something to be made right. Name what was wrong before you decide what to do.\",\n    sad: \"Sad often asks for comfort. Let someone sit with you instead of fixing it.\",\n    hurt: \"Hurt often asks for care. Say where it hurts to someone who can hear it.\",\n    alone: \"Alone often asks for connection. One call this week is enough to start.\",\n    numb: \"Numb often asks for a gentle way back into your body. Feet on the floor, and breathe out slower than you breathe in.\"\n  };\n  var PATHS = [[\"view\", \"The view is good\", '<path d=\"M2 16 L8 7 L11 11 L14 6 L18 16 Z\"/>'], [\"footing\", \"Good footing\", '<rect x=\"3\" y=\"11\" width=\"14\" height=\"5\" rx=\"1.5\"/>'],\n    [\"steep\", \"Steep\", '<path d=\"M3 16 L17 4 V16 Z\"/>'], [\"lost\", \"Lost the trail\", '<circle cx=\"10\" cy=\"10\" r=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M8 8 a2.4 2.4 0 1 1 3 2.3 V12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/>']];\n  var PATHWORD = { view: \"the view good\", footing: \"good footing\", steep: \"the path steep\", lost: \"that you lost the trail\" };\n  var GROUPWORD = { view: \"the view good\", footing: \"good footing\", steep: \"the path steep\", lost: \"the trail lost\" };\n  var HOW = { most: \"Kept. That’s a pathway forming.\", some: \"Kept. Some days counts. Pathways take time to form; keep going.\", notyet: \"Kept. We understand shifting priorities. We’re here to encourage the next right choice toward the healthy pathway you’ve identified. Choose it next.\" };\n  var WHENS = [[\"morning\", \"Each morning\"], [\"pull\", \"When the pull comes\"], [\"bed\", \"Before bed\"]];\n  var RHYTHMS = [[\"twice\", \"Twice a day\"], [\"daily\", \"Each day\"], [\"few\", \"A few days a week\"], [\"weekly\", \"Once a week\"]];\n  /* what each rhythm does, said back to him (it sets how many readings he is handed; reminders themselves are not sent yet) */\n  var RHYTHM_SAID = { twice: \"Kept. New pieces can come up to twice a day.\", daily: \"Kept. A new piece can come each day.\", few: \"Kept. A new piece can come three days a week.\", weekly: \"Kept. Pieces come three days a week at the fewest; that is the least we hand out.\" };\n  var SHARES = [[\"path\", \"The path and the word\"], [\"piece\", \"Whether the piece helped\"], [\"practice\", \"How your practice went\"], [\"words\", \"Your own words\"]];\n  var LEADS = { week: \"Stand where you are, look, and take the next step.\", house: \"\", path: \"\" };\n  var ROOMS = [[\"did\", \"\", \"What You Did\"], [\"saw\", \"\", \"What You Saw\"], [\"know\", \"\", \"What You Know Now\"]]; /* the three parts of Your Story; the keys are the server's */\n  var TABWORD = { week: \"This Week\", house: \"Your Story\", path: \"Your Path\" };\n  var TABWHERE = { house: \"The road you’ve walked, in your own words.\", path: \"Ask for the good way, and walk in it.\" };\n  var DANGER = \"Call 911, or call or text 988 to reach the Suicide and Crisis Lifeline.\";\n  var SAFE = \"What you write here goes to our team, and a person reads it within __REVIEW__, before anything else happens with it. It stays with our team, with one exception: if we believe you or someone else is in danger, we will act on that, and we will tell you we are doing it. For men eighteen and older.\";\n  var WHO_CARRIED_HELP = \"Drawn from what the group said together, never from one man’s words.\";\n  var WITNESS_SENT = \"Kept. We’ll send your invitation with what a witness does, and tell you when they say yes. Until then, our team walks with you.\";\n  var WROLES = [[\"mentor\", \"A mentor\"], [\"coach\", \"A coach\"], [\"friend\", \"A trusted friend\"], [\"pastor\", \"A pastor\"], [\"relative\", \"A relative\"]];\n  var PAGES = { stones: \"/set-a-stone\", story: \"/your-story\", team: \"/begin\", profile: \"/profile\" };\n  var OPEN_COURSES = [[\"Breaking Free\", \"student-course\"], [\"Known by Jesus\", \"i-want-you-to-know-me\"], [\"Do Hard Things\", \"do-hard-things\"], [\"Walk With Me\", \"walk-with-me\"]];\n\n  var WAYMARKS = [{\"n\":1,\"name\":\"The Watchpost\",\"one\":\"Notice before you react.\",\"stuck\":\"We react before we notice. A craving or a trigger shows up and we are already acting on it.\",\"sounds\":\"Sounds like: “I don’t know what happened. It just happened.”\",\"is_\":\"The mind has a center (the hub) and a ring of passing urges, feelings and thoughts (the rim). When we live on the rim, whatever comes up runs us. We can learn to stand at the hub and watch it pass.\",\"scripture\":\"Habakkuk takes his stand at a watchpost and looks out (Habakkuk 2:1). David talks to his own soul instead of obeying it (Psalm 42:5). God tells Cain that sin is crouching at the door, “but you must rule over it” (Genesis 4:7).\",\"applied\":\"\",\"ask\":\"Slow it down. What did you feel in your body right before?\",\"helps\":\"The Five Questions · The Wheel\",\"carry\":\"Slow it down. What did you feel in your body right before?\",\"try\":\"The Five Questions: before you react, notice what your body feels, the picture in your mind, the feeling, the thought, and what you want to do.\"},\n    {\"n\":2,\"name\":\"From the Ground Up\",\"one\":\"Body first.\",\"stuck\":\"We go numb, check out, or get flooded. Either we feel nothing, or the feeling is so big we cannot think.\",\"sounds\":\"Sounds like: “I went somewhere else.” “My body took over.”\",\"is_\":\"Signals rise from the body and brainstem, and the thinking part at the front of the brain can steady them only when that line is open. Trauma cuts the line. The body has to settle before the mind can help.\",\"scripture\":\"Elijah, worn out and afraid, is fed and sleeps before God speaks to him (1 Kings 19:5–8). “I have calmed and quieted my soul” (Psalm 131:2).\",\"applied\":\"\",\"ask\":\"Are you here with me, or somewhere else? What would help you land?\",\"helps\":\"Feet on the Floor · The Long Exhale · The Body Check\",\"carry\":\"Where do you feel stress in your body right now? Is it loud, quiet, or gone?\",\"try\":\"Feet on the Floor: feet on the floor, seat in the chair. Name three things you can see and say where you are and what day it is.\"},\n    {\"n\":3,\"name\":\"The Word for It\",\"one\":\"Say what you feel.\",\"stuck\":\"We feel it and cannot say it, or we can explain it for an hour and never feel it. Either speechless or only explaining.\",\"sounds\":\"Sounds like: “I don’t have words.” “I know exactly why I did it.” (and nothing changes)\",\"is_\":\"Raw feeling and images live mostly on the right side of the brain. Language and logic live mostly on the left. Healing needs both sides talking. Putting an exact word on a feeling turns its volume down.\",\"scripture\":\"Adam names each animal, putting the right word on what he sees (Genesis 2:19–20). The psalmist Asaph, too troubled to speak (Psalm 77:4), still writes a psalm. David found that silence wasted his bones (Psalm 32:3–5).\",\"applied\":\"\",\"ask\":\"If this feeling had one word, what would it be? Is there a more exact one?\",\"helps\":\"Name It to Tame It · Borrowed Vessels\",\"carry\":\"If this feeling had one word, what would it be? Is there a more exact one?\",\"try\":\"Name It to Tame It: put one exact word on the feeling and say it out loud.\"},\n    {\"n\":4,\"name\":\"Past Tense\",\"one\":\"It happened. It is over.\",\"stuck\":\"An old hurt still lives in the body as if it were happening now. We react to today with yesterday’s fear and cannot say why.\",\"sounds\":\"Sounds like: “I know it’s not a big deal, but my body says I’m in danger.”\",\"is_\":\"Some memories are stored in the body with no “then” stamped on them, so they feel like the present. Healing moves them into plain history: that happened, it is over, and I am here. A memory can be rewritten when we recall it and meet something it did not expect.\",\"scripture\":\"After crossing the Jordan, Israel sets up stones, so a memory has a place and a date (Joshua 4:6–7). Peter denies Jesus at a charcoal fire and is restored by Jesus at another one (John 18:18; John 21:9). Same smell, new ending.\",\"applied\":\"\",\"ask\":\"How old do you feel right now?\",\"helps\":\"The Feeling Bridge · The Surprise · Set a Stone\",\"carry\":\"How old do you feel right now?\",\"try\":\"The Feeling Bridge: notice where the feeling sits and when you first remember it. Go slowly, and with someone safe.\"},\n    {\"n\":5,\"name\":\"The Whole Story\",\"one\":\"Pain included, and it makes sense.\",\"stuck\":\"Our life reads as a list of failures or a blur of fragments. “I am broken” becomes the title of the whole book.\",\"sounds\":\"Sounds like: “That’s just who I am.”\",\"is_\":\"Research on attachment finds that a coherent account of our own life, pain included, is one of the strongest predictors that a person’s own children will be securely attached (able to trust and stay close to others). The goal is not a happy story. It is a true one that holds together.\",\"scripture\":\"Joseph, speaking to the brothers who sold him, holds the harm and the good in one sentence: “You meant evil against me, but God meant it for good” (Genesis 50:20). “Let the redeemed of the LORD say so” (Psalm 107:2).\",\"applied\":\"\",\"ask\":\"Which part of your story do you tell fastest? Which part do you skip?\",\"helps\":\"Four Ways to Read a Life · The Seven-Stage Journey\",\"carry\":\"If your story had a title right now, what would it be? What do you want it to be?\",\"try\":\"Four Ways to Read a Life: start with what happened, the plain facts.\"},\n    {\"n\":6,\"name\":\"One Heart\",\"one\":\"Every part gets a seat.\",\"stuck\":\"We feel like several different people: the one who performs, the one who sins in private, the child who is still afraid. They do not talk to each other, and we are ashamed of each.\",\"sounds\":\"Sounds like: “I don’t know who I really am.”\",\"is_\":\"The mind holds many states, such as roles, moods and ages. That is normal. The trouble comes when they are walled off. Healing does not erase any of them. It brings them to one table so a steady self (the calm center that can listen to every part) can lead.\",\"scripture\":\"Paul describes it: “I do not understand my own actions” (Romans 7:15). David prays, “unite my heart to fear your name” (Psalm 86:11).\",\"applied\":\"\",\"ask\":\"Who takes over when you are under pressure? What is that part protecting?\",\"helps\":\"Name the Survivors · A Seat for Every Part\",\"carry\":\"Who takes over when you are under pressure? What is that part protecting?\",\"try\":\"Name the Survivors: which one showed up this week, the Performer, the Loner, the Achiever or the Pleaser?\"},\n    {\"n\":7,\"name\":\"The Old Vows\",\"one\":\"Then is not now.\",\"stuck\":\"We still live by promises we made to stay safe, often as children. The danger passed. The promise did not.\",\"sounds\":\"Sounds like: “I’ll never let anyone see that again.” “I’ll never need anyone.”\",\"is_\":\"We want certainty, and life brings change and loss. A vow tries to buy certainty: if I never need anyone, no one can leave. Trauma freezes time, and the mind keeps the rules it made at the worst moment and applies them to a life that has changed. The work is seeing a vow for what it was, protection for then, and retiring it. A vow we trust instead of God becomes an idol.\",\"scripture\":\"“Remember not the former things… Behold, I am doing a new thing” (Isaiah 43:18–19). Paul presses on, “forgetting what lies behind” (Philippians 3:13). Not erasing it but no longer ruled by it.\",\"applied\":\"Read as an application: neither verse speaks of vows in its own setting.\",\"ask\":\"What did you promise yourself you would never do or never feel again? What has that promise cost you?\",\"helps\":\"Release the Vow · A Letter to the Child · Ending Well\",\"carry\":\"What rule did you make as a kid to stay safe? Is it still running?\",\"try\":\"Release the Vow: name the vow, and see what it protected you from.\"},\n    {\"n\":8,\"name\":\"Me and We\",\"one\":\"Close without disappearing.\",\"stuck\":\"We keep everyone out, or we merge with people and fear losing them. We are alone in a crowd or panicked when someone pulls away.\",\"sounds\":\"Sounds like: “I’ll handle it myself.” “If I say no, they’ll leave.”\",\"is_\":\"We settle when someone’s attention meets ours and feels what we feel. Health is both: a self of our own, and a “we” we can be close in without losing the self.\",\"scripture\":\"“It is not good that the man should be alone” (Genesis 2:18). “Confess your sins to one another and pray for one another, that you may be healed” (James 5:16). Jesus tells a worshiper at the altar to leave the gift and first go be reconciled with a brother or sister (Matthew 5:23–24).\",\"applied\":\"\",\"ask\":\"When you pull back from people, what are you protecting?\",\"helps\":\"Confession to One Another · The Four S’s · Break and Mend\",\"carry\":\"Who knows the real story? Who would you want to know it?\",\"try\":\"Confession to One Another: say it out loud to a person who stays.\"},\n    {\"n\":9,\"name\":\"Part of Something Larger\",\"one\":\"Given to be given away.\",\"stuck\":\"We are cut off from God, from purpose, and from the people he gives us. Life shrinks to me: my guilt, my fix, my survival. A flat deadness settles in.\",\"sounds\":\"Sounds like: “Nothing really matters.” “God feels far away.”\",\"is_\":\"Transpirational means “breathing across”: the other eight kinds of integration flow together into a sense of belonging to something larger. Wholeness reaches past the self: me, we, and something larger. For us, the something larger is God and his Kingdom.\",\"scripture\":\"Isaiah sees God, is undone, is cleansed, then hears “Whom shall I send?” and answers, “Here I am! Send me” (Isaiah 6:5–8).\",\"applied\":\"\",\"ask\":\"Where do you feel far from God, and where do you feel him close?\",\"helps\":\"Return · Down Before Up · Given Away\",\"carry\":\"Where do you feel far from God, and where do you feel him close?\",\"try\":\"Return: turn back to God, confess, and receive his forgiveness (1 John 1:9).\"}];\n  function wmOf(n) { n = Number(n); return WAYMARKS.filter(function (w) { return w.n === n; })[0] || null; }\n  function tryOf(w) { var s = String(w && w.try || \"\"), i = s.indexOf(\": \"); return i > 0 ? { name: s.slice(0, i), text: uc1(s.slice(i + 2)) } : { name: \"\", text: uc1(s) }; }\n  function oneOf(w) { return String(w && w.one || \"\").replace(/\\.$/, \"\"); }\n\n  /* ───────────── the model: what the three views read ───────────── */\n  var BARE_V = { bare: true, first: true, ended: false, after: false, inGroup: false, course: \"\", total: 0, unit: { n: 0, label: \"\", title: \"\" }, meet: null, done: {}, practices: [], practice: \"\", when: \"\",\n    guidepost: { n: 0, weekLine: \"\" }, lastWeek: null, needs: null, house: { did: [], saw: [], know: [] }, better: [], made: null, notes: [], carried: \"\", settings: { remind: \"\", shares: { path: true, piece: true, practice: true, words: false }, paused: false } };\n  var UI = { tab: \"week\", open: {}, ck: null, house: \"mine\", ours: null, oursBusy: false, flare: null, fresh: {}, handSent: false, handBusy: false, drafts: {}, letterNow: false, wf: { open: false, role: \"mentor\", sent: null }, welcomed: null, pending: null, slot: \"\", say: {}, news: window.apNews || [] };\n  function V() { return data && data.v11 ? data.v11 : BARE_V; }\n  function group() { return !!V().inGroup; }\n  function leaderKnown() { return !!(data && data.group && data.group.leader); }\n  function walkYes() { var y = data && data.witness && data.witness.yes; return !group() && y && y.name ? y : null; }\n  function witnessName() { var y = walkYes(); return y ? y.name : group() && leaderKnown() ? \"your group’s leader\" : \"our team\"; }\n  function meetDay() { var m = V().meet; return m && m.day ? m.day : \"\"; }\n  function piece() { return data && data.piece ? data.piece : null; }\n  function cardD() { return data && data.card ? data.card : null; }\n  function unreadNote() { var n = V().notes || []; return n.filter(function (x) { return !x.read; })[0] || null; }\n  function newestNote() { return (V().notes || [])[0] || null; }\n  function welcomedYet() { return UI.welcomed !== null ? UI.welcomed : !!(data && data.ui && data.ui.welcomed11); }\n  function rhythmWord(k) { var r = RHYTHMS.filter(function (x) { return x[0] === k; })[0]; return r ? r[1] : \"\"; }\n  function needText(w) { var n = V().needs || {}; return n[w] || NEED_FB[w] || \"\"; }\n  function pathLabel(k) { var p = PATHS.filter(function (x) { return x[0] === k; })[0]; return p ? p[1] : \"\"; }\n  function ctxLabel() { var v = V(); return v.unit && v.unit.label ? v.unit.label : \"\"; }\n  /* the story row of the week's list: the story work the course asks this week; done when every piece of it is finished */\n  function storyRow() {\n    if (!group()) return null;\n    var L = writeList(data); if (!L.length) return null;\n    var open = L.filter(function (x) { return !x.finished; })[0];\n    return open ? { done: false, it: open } : { done: true, it: L[0] };\n  }\n  function doneNow() {\n    var v = V(), d = {}, s = storyRow(), k;\n    for (k in (v.done || {})) d[k] = !!v.done[k];\n    d.story = s ? s.done : true;\n    return d;\n  }\n  function lastTapRow() { return UI.say; }\n\n  /* the band's one next step, as the prototype's nextStep() computes it */\n  function nextStep() {\n    var v = V(), d = doneNow(), p = piece(), s = storyRow(), day = meetDay(), lab = ctxLabel();\n    if (v.ended) return { t: \"see what comes after \" + (v.course || \"your course\"), act: \"go-path\" };\n    if (unreadNote()) return { t: \"A letter from your witness\", act: \"letter\" };\n    if (v.after) {\n      if (!d.wed) return { t: \"What did you take from \" + (day || \"your group’s night\") + \"?\", act: \"focus-wed\" };\n      if (!d.choose) return { t: \"Choose your practice for this week\", act: \"choose\" };\n      return { t: \"You’re carrying it well. A new piece comes at your own pace\", act: null };\n    }\n    if ((v.unit && v.unit.n || v.course) && !d.course) return { t: lab ? \"Read \" + lab : \"Open \" + (v.course || \"your course\"), act: \"course\" };\n    if (p && !d.road) return { t: \"This week’s piece, for your road\", act: \"piece\" };\n    if (!d.check) return { t: \"Check in with your witness, about a minute\", act: \"checkin\" };\n    if (s && !s.done) return { t: writeName(s.it.title) + (day ? \" before \" + day : \"\"), act: \"story\" };\n    return { t: group() ? \"You’re ready for \" + (day || \"your group’s night\") + \".\" : \"You’re ready for this week.\", act: null };\n  }\n  function whereText() {\n    var v = V(), c = v.course, lab = ctxLabel(), t = v.unit && v.unit.title;\n    if (v.bare || !c) return \"\";\n    if (v.ended) return c + \" is complete.\";\n    if (!group()) return c + (lab ? \" · \" + lab : \"\") + (t ? \", “\" + t + \".”\" : \".\");\n    var day = meetDay(), time = v.meet && v.meet.time;\n    if (v.after) return (lab || \"This week\") + \" of \" + c + \" starts now.\" + (day ? \" Your group meets again \" + day + \".\" : \"\");\n    return (lab ? lab + \" of \" + c + \".\" : c + \".\") + (day ? \" Your group meets \" + day + (time ? \" at \" + time : \"\") + \".\" : \"\");\n  }\n  function helloText() {\n    var first = (me && me.first) || (data && data.v11 && data.v11.name) || \"\";\n    var back = !V().first;\n    return (back ? \"Welcome back\" : \"Welcome\") + (first ? \", \" + first : \"\") + \".\";\n  }\n  /* hand the page's band everything in one call, so it is painted once and never moves */\n  function paintBand() {\n    var n = nextStep(), o = { hello: helloText(), where: whereText(), step: n.t ? { text: \"Next: \" + lc1(n.t).replace(/^next: /, \"\"), act: n.act } : null, tab: UI.tab };\n    if (UI.tab !== \"week\") { o.hello = TABWORD[UI.tab]; o.where = TABWHERE[UI.tab]; } /* one full header on every tab: the tab's name, and the line it stands on */\n    if (n.act === null && n.t) o.step = { text: n.t, act: null };\n    try { if (window.apBand && window.apBand.set) window.apBand.set(o); } catch (e) {}\n    try { document.dispatchEvent(new CustomEvent(\"ap:roadband\", { detail: o })); } catch (e2) {}\n    tabWiring(); bandGuard();\n  }\n  /* one header, always: the page block makes the band slim on the other tabs; this keeps it whole. The site row a facilitator sees (row.js) is moved to the very top of the band. */\n  var guarded = false;\n  function bandGuard() {\n    var b = document.getElementById(\"apBand\"); if (!b) return;\n    b.classList.remove(\"ap-slim\"); b.setAttribute(\"data-avtab\", UI.tab);\n    var row = b.querySelector(\".apg-row\"), inn = b.querySelector(\".ap-band-in\");\n    if (row && inn && inn.firstChild !== row) inn.insertBefore(row, inn.firstChild);\n    if (guarded || !window.MutationObserver) return; guarded = true;\n    new MutationObserver(function () {\n      if (b.classList.contains(\"ap-slim\")) b.classList.remove(\"ap-slim\");\n      var r2 = b.querySelector(\".apg-row\"), i2 = b.querySelector(\".ap-band-in\");\n      if (r2 && i2 && i2.firstChild !== r2) i2.insertBefore(r2, i2.firstChild);\n    }).observe(b, { attributes: true, attributeFilter: [\"class\"], childList: true, subtree: true });\n  }\n  /* the band's tabs belong to the page block; this adds what a tablist also needs: each tab names the panel it opens, the panel names its tab, and only the chosen tab is in the tab order (the arrow keys move between them) */\n  function tabWiring() {\n    var tabs = [].slice.call(document.querySelectorAll(\"#apBand [data-tab]\")), main = document.getElementById(\"avMain\");\n    if (main) { main.setAttribute(\"role\", \"tabpanel\"); main.setAttribute(\"tabindex\", \"-1\"); }\n    tabs.forEach(function (t) {\n      var k = t.getAttribute(\"data-tab\"), on = t.getAttribute(\"aria-selected\") === \"true\";\n      if (!t.id) t.id = \"avTab-\" + k;\n      if (TABWORD[k] && t.textContent !== TABWORD[k]) t.textContent = TABWORD[k]; /* the page block still carries the old label; this is the word he reads */\n      t.setAttribute(\"aria-controls\", \"avMain\"); t.setAttribute(\"tabindex\", on ? \"0\" : \"-1\");\n      if (on && main) main.setAttribute(\"aria-labelledby\", t.id);\n    });\n  }\n\n  /* ───────────── This Week ───────────── */\n  function rowHtml(key, layer, title, sub, go, act, done, href, blank) {\n    var inner = '<span class=\"av-ring\" aria-hidden=\"true\"></span><span><span class=\"av-ly\">' + esc(layer) + '</span><span class=\"av-tt\">' + esc(title) + '</span><small>' + esc(sub) + '</small></span><span class=\"av-go\">' + (done ? \"Done\" : esc(go)) + '</span><span class=\"av-sr\">' + (done ? \"done\" : \"not done yet\") + '</span>';\n    if (href) return '<a class=\"av-row' + (done ? \" av-done\" : \"\") + '\" href=\"' + esc(href) + '\"' + (blank ? ' target=\"_blank\" rel=\"noopener\"' : \"\") + ' data-act=\"' + act + '\" data-key=\"' + key + '\">' + inner + '</a>';\n    return '<button type=\"button\" class=\"av-row' + (done ? \" av-done\" : \"\") + '\" data-act=\"' + act + '\" data-key=\"' + key + '\">' + inner + '</button>';\n  }\n  /* Last Week, as one sentence: the path, the word, whether the piece helped, the practice he named. Never how often. Hidden when there is nothing to say. */\n  function lastWeekHtml() {\n    var L = V().lastWeek; if (!L) return \"\";\n    var c = [];\n    if (L.mark && PATHWORD[L.mark]) c.push(\"you marked \" + PATHWORD[L.mark] + (L.word ? \" and named it \" + L.word : \"\"));\n    if (L.helped === \"met\") c.push(\"your For Your Road piece helped\");\n    if (L.practice) c.push(\"you named your practice, “\" + L.practice + \"”\");\n    if (!c.length) return \"\";\n    var when = L.recent === false ? \"The last week you were here\" : \"Last week\", s = when + \" \" + c[0] + \".\";\n    if (c.length > 1) s += \" \" + uc1(c.slice(1).join(\", and \")) + \".\";\n    s = s.replace(/\\.”\\.$/, \".”\");\n    return '<p class=\"av-last\"><b>' + esc(when) + \"</b> \" + esc(s.slice(when.length + 1)) + \"</p>\";\n  }\n  function gpCard() {\n    var g = V().guidepost || {}, w = wmOf(g.n); if (!w) return \"\";\n    var k = \"gp\", t = tryOf(w), open = !!UI.open[k];\n    return '<div class=\"av-card\"><p class=\"av-lk\">This Week’s Guidepost</p><p class=\"av-t\">' + esc(w.name) + \" · \" + esc(oneOf(w)) + '</p>' +\n      (g.weekLine ? '<p class=\"av-s\">' + esc(smart(g.weekLine)) + '</p>' : \"\") +\n      '<div class=\"av-carry\"><p class=\"av-lk\">Carry This Question</p><p>' + esc(w.carry) + '</p></div>' +\n      '<p class=\"av-try\"><b>Try This · ' + esc(t.name) + '.</b> ' + esc(t.text) + '</p>' +\n      '<button type=\"button\" class=\"av-walk\" data-act=\"toggle\" data-k=\"' + k + '\" aria-expanded=\"' + open + '\"><span class=\"av-u\">More about this guidepost</span> <span class=\"av-ar\">' + (open ? \"▴\" : \"▾\") + '</span></button>' +\n      '<div class=\"av-more' + (open ? \" av-open\" : \"\") + '\"><p class=\"av-s\">Where a man gets stuck here: ' + esc(w.stuck) + '</p><p class=\"av-help\">All nine guideposts are on Your Path.</p></div></div>';\n  }\n  function handLine() { return '<div><button type=\"button\" class=\"av-walk\" data-act=\"hand\"><span class=\"av-u\">I need a hand</span> <span class=\"av-ar\">→</span></button><p class=\"av-help\" style=\"margin-top:0\">One tap reaches ' + esc(witnessName()) + ' today.</p></div>'; }\n  function carriedBlock() {\n    var L = (data && data.group && data.group.carried) || []; if (!L.length || V().first) return \"\";\n    var k = \"carried\", open = !!UI.open[k];\n    return '<button type=\"button\" class=\"av-walk\" data-act=\"toggle\" data-k=\"' + k + '\" aria-expanded=\"' + open + '\"><span class=\"av-u\">What your group carried last week</span> <span class=\"av-ar\">' + (open ? \"▴\" : \"▾\") + '</span></button><div class=\"av-more' + (open ? \" av-open\" : \"\") + '\">' +\n      L.map(function (c) { return '<p class=\"av-s\"><b>' + esc(smart(c.title)) + '.</b> ' + esc(smart(c.body || \"\")) + '</p>'; }).join(\"\") + '<p class=\"av-help\">' + esc(WHO_CARRIED_HELP) + '</p></div>';\n  }\n  function inviteBlock() {\n    var sent = UI.wf.sent === null ? !!(data && data.witness && data.witness.waiting) : UI.wf.sent, k = \"invite\", open = !!UI.open[k] || UI.wf.open;\n    if (sent) return '<p class=\"av-kept\"><b>Kept.</b> ' + esc(WITNESS_SENT.replace(/^Kept\\. /, \"\")) + '</p><button type=\"button\" class=\"av-walk\" data-act=\"wchange\"><span class=\"av-u\">Change who you asked</span> <span class=\"av-ar\">→</span></button>';\n    return '<button type=\"button\" class=\"av-walk\" data-act=\"toggle\" data-k=\"' + k + '\" aria-expanded=\"' + open + '\"><span class=\"av-u\">Invite Your Own Witness</span> <span class=\"av-ar\">' + (open ? \"▴\" : \"▾\") + '</span></button><div class=\"av-more' + (open ? \" av-open\" : \"\") + '\">' +\n      '<p class=\"av-help\">A mentor, a coach, a trusted friend, a pastor or a relative. They read what a witness does and say yes before seeing anything of yours.</p>' +\n      '<div class=\"av-choices av-two\" role=\"radiogroup\" aria-label=\"Who would it be?\">' + WROLES.map(function (r) { return '<button type=\"button\" class=\"av-choice\" role=\"radio\" aria-checked=\"' + (UI.wf.role === r[0]) + '\" data-act=\"wrole\" data-v=\"' + r[0] + '\">' + esc(r[1]) + '</button>'; }).join(\"\") + '</div>' +\n      '<label class=\"av-field\">Their name<input id=\"avWn\" autocomplete=\"off\" maxlength=\"80\" placeholder=\"First and last name\" value=\"' + esc(UI.drafts.avWn || \"\") + '\"></label>' +\n      '<label class=\"av-field\">Their email<input id=\"avWe\" type=\"email\" autocomplete=\"off\" maxlength=\"120\" placeholder=\"name@example.com\" value=\"' + esc(UI.drafts.avWe || \"\") + '\"></label>' +\n      '<button type=\"button\" class=\"av-btn\" data-act=\"invite\">Send the invitation</button><p class=\"av-kept\" id=\"avWs\" aria-live=\"polite\"></p></div>';\n  }\n  function walksWith() {\n    var v = V(), g = (data && data.group) || {};\n    if (v.ended) return '<div class=\"av-card\"><p class=\"av-lk\">Who Walks With You Next</p><p class=\"av-s\">Your group’s leader walked this course with you. For the next stretch, keep him as your witness, or invite someone you trust.</p>' +\n      '<button type=\"button\" class=\"av-walk\" data-act=\"toggle\" data-k=\"next\" aria-expanded=\"' + !!UI.open.next + '\"><span class=\"av-u\">Choose who walks with you next</span> <span class=\"av-ar\">' + (UI.open.next ? \"▴\" : \"▾\") + '</span></button><div class=\"av-more' + (UI.open.next ? \" av-open\" : \"\") + '\"><p class=\"av-s\">To keep your group’s leader as your witness, tell him. To invite someone else, tell our team and we’ll set it up with you.</p><a class=\"av-walk\" href=\"' + PAGES.team + '\"><span class=\"av-u\">Talk With Our Team</span> <span class=\"av-ar\">→</span></a></div>' + (v.bare ? \"\" : handLine()) + '</div>';\n    if (walkYes()) return '<div class=\"av-card\"><p class=\"av-lk\">Who Walks With You</p><p class=\"av-s\">' + esc(walkYes().name) + (walkYes().role ? ', your ' + esc(walkYes().role) + ',' : \"\") + ' walks with you. They read what you choose to share, and write to you. Our team is with you too.</p>' + (v.bare ? \"\" : handLine()) + '</div>';\n    if (!group()) return '<div class=\"av-card\"><p class=\"av-lk\">Who Walks With You</p><p class=\"av-s\">Our team walks this with you. We read your week and write back to you.</p>' + inviteBlock() + (v.bare ? \"\" : handLine()) + '</div>';\n    var line = !v.first && g.line && GROUPWORD[g.line] ? \" Most of your group marked \" + GROUPWORD[g.line] + \" this week.\" : \"\";\n    return '<div class=\"av-card\"><p class=\"av-lk\">Who Walks With You</p><p class=\"av-s\">' + esc(leaderKnown() ? \"Your group’s leader is your witness.\" : \"Our team walks with your group.\") + esc(line) + ' You’re not walking this alone.</p>' + carriedBlock() + handLine() + '</div>';\n  }\n  function lead(k) {\n    if (k === \"house\") return '<p class=\"av-vlead\">“Remember the whole way that the LORD your God has led you.” <span class=\"av-ref\">Deuteronomy 8:2</span></p>';\n    return LEADS[k] ? '<p class=\"av-vlead\">' + esc(LEADS[k]) + '</p>' : \"\"; /* Your Path says its line in the header */\n  }\n  function welcomeCard() {\n    return '<div class=\"av-card av-first\"><p class=\"av-lk\">What This Page Is For</p><p class=\"av-t\">Your home base for the week.</p><p class=\"av-verse\">“Stand by the roads, and look, and ask for the ancient paths, where the good way is; and walk in it, and find rest for your souls.” <span>Jeremiah 6:16</span></p><p class=\"av-s\">This page is built on that invitation. <b>This Week</b> is where you stand and look. <b>Your Path</b> is where you ask for the good way. <b>Your Story</b> is where the road you’ve walked is kept, in your own words.</p>' +\n      '<button type=\"button\" class=\"av-walk\" data-act=\"welcomed\"><span class=\"av-u\">Start with this week</span> <span class=\"av-ar\">→</span></button></div>';\n  }\n  function newsHtml() {\n    var L = UI.news || []; if (!L.length) return \"\";\n    return '<p class=\"av-news\">' + esc(\"Since you were last here, \" + L.map(function (n) { return n.text; }).join(\" and \") + \".\") + L.map(function (n) { return n.label ? '<a href=\"' + esc(n.href || \"#\") + '\"' + (n.pile ? ' data-act=\"stones\"' : \"\") + '>' + esc(n.label) + '</a>' : \"\"; }).join(\"\") + '</p>';\n  }\n  function letterCard() {\n    var n = newestNote(); if (!n) return \"\";\n    var read = !!n.read || UI.letterNow;\n    return '<div class=\"av-letterc\"><p class=\"av-lk\">A Letter From Your Witness</p><p class=\"av-t\">' + esc(read ? \"You read it\" + (n.readDay ? \" \" + n.readDay : \"\") + \".\" : (group() && leaderKnown() ? \"Your group’s leader wrote to you.\" : \"Your witness wrote to you.\")) + '</p><button type=\"button\" class=\"av-walk\" data-act=\"letter\"><span class=\"av-u\">' + (read ? \"Read it again\" : \"Read it\") + '</span> <span class=\"av-ar\">→</span></button></div>';\n  }\n  function courseRow(d) {\n    var v = V(), lab = ctxLabel(), title = v.unit && v.unit.title;\n    if (!v.course) return '<a class=\"av-row\" href=\"/courses\" data-act=\"begin\"><span class=\"av-ring\" aria-hidden=\"true\"></span><span><span class=\"av-ly\">Your Course</span><span class=\"av-tt\">Choose a course</span><small>The topics you follow set the direction for your week</small></span><span class=\"av-go\">Open</span></a>';\n    return rowHtml(\"course\", \"Your Course\", lab ? \"Read \" + lab : \"Open \" + v.course, title ? \"“\" + title + \"”\" : v.course, \"Open\", \"course\", d.course, courseHref(v.course), true);\n  }\n  function pieceRow(d) {\n    var p = piece(), v = V();\n    if (!p) return '<div class=\"av-row av-still\"><span class=\"av-ring\" aria-hidden=\"true\"></span><span><span class=\"av-ly\">For Your Road</span><span class=\"av-tt\">Your first piece</span><small>It lands here with your next morning’s reading</small></span><span class=\"av-go\"></span></div>';\n    var sub = p.opened ? \"Opened \" + (p.openedDay || p.opened) : (p.minutes ? uc1(p.minutes) : actOf(p) + \" it when you’re ready\");\n    return rowHtml(\"road\", \"For Your Road · \" + (p.layer || \"Wisdom\"), p.claim, sub, \"Open\", \"piece\", d.road);\n  }\n  function actOf(p) { var a = String(p && p.act || \"\").trim(); return /^(Read|Listen|Watch)$/.test(a) ? a : \"Read\"; }\n  function viewWeek() {\n    var v = V(), d = doneNow(), h = \"\", p = piece(), day = meetDay();\n    if (v.first && !welcomedYet()) return '<main class=\"av-view\">' + lead(\"week\") + welcomeCard() + walksWith() + '</main>';\n    h += newsHtml();\n    if (v.ended) {\n      h += '<div class=\"av-ceremony\"><p class=\"av-lk\">You Walked It to the End</p><p class=\"av-t\">' + esc(v.course) + ' is complete.</p><p class=\"av-s\">You stood, looked, asked and walked. What you did, what you saw and what you know now are kept in Your Story, and your witness has a word for you about what comes next.</p>' +\n        '<a class=\"av-walk\" href=\"' + PAGES.stones + '\"><span class=\"av-u\">Set a stone with your group</span> <span class=\"av-ar\">→</span></a><br><button type=\"button\" class=\"av-walk\" data-act=\"go-path\"><span class=\"av-u\">What’s next for you</span> <span class=\"av-ar\">→</span></button></div>';\n      if (v.carried) h += '<div class=\"av-card\"><p class=\"av-lk\">Carry It Forward</p><p class=\"av-s\">The practice you’re keeping: <b>' + esc(v.carried.replace(/\\.$/, \"\")) + '</b>' + (v.when ? \", \" + esc(lc1(rhythmOfWhen(v.when))) : \"\") + '. Your road goes on; new pieces keep coming at your rhythm.</p></div>';\n      return '<main class=\"av-view\">' + lead(\"week\") + h + walksWith() + '</main>';\n    }\n    if (unreadNote() || (newestNote() && UI.letterNow)) h += letterCard();\n    h += lastWeekHtml();\n    if (v.after) {\n      var wd = d.wed, wt = UI.drafts.avWed || \"\";\n      h += '<div class=\"av-list\"><div class=\"av-hd\"><b>Carry It This Week</b><span>' + (day ? \"until \" + esc(day) : \"\") + '</span></div>' +\n        '<div class=\"av-row av-still' + (wd ? \" av-done\" : \"\") + '\" style=\"grid-template-columns:28px 1fr\"><span class=\"av-ring\" aria-hidden=\"true\"></span><span><span class=\"av-ly\">Your Story</span><span class=\"av-tt\">What did you take from ' + esc(day || \"your group’s night\") + '?</span>' +\n        (wd ? '<small>Kept in Your Story: “' + esc(v.wedText || UI.drafts.avWedKept || \"\") + '”</small>' : '<span class=\"av-answer\"><textarea id=\"avWed\" maxlength=\"2000\" aria-label=\"What did you take from ' + esc(day || \"your group’s night\") + '?\" placeholder=\"One line is enough.\">' + esc(wt) + '</textarea><button type=\"button\" class=\"av-btn\" data-act=\"keepwed\">Keep it</button><span class=\"av-kept\" id=\"avWedS\" aria-live=\"polite\"></span></span>') + '</span></div>' +\n        rowHtml(\"choose\", \"Your Practice\", \"Choose one for this week\", v.unit && v.unit.title ? \"From \" + (ctxLabel() || \"this week\") + \", “\" + v.unit.title + \"”\" : \"From your course\", \"Choose\", \"choose\", d.choose) +\n        (p ? rowHtml(\"road\", \"For Your Road · \" + (p.layer || \"Wisdom\"), p.claim, p.opened ? \"Opened \" + (p.openedDay || p.opened) : (p.minutes ? uc1(p.minutes) : \"A short reading\"), \"Open\", \"piece\", d.road) :\n          '<div class=\"av-row av-still\"><span class=\"av-ring\" aria-hidden=\"true\"></span><span><span class=\"av-ly\">For Your Road</span><span class=\"av-tt\">A new piece</span><small>Comes at your own pace</small></span><span class=\"av-go\"></span></div>') + '</div>';\n      return '<main class=\"av-view\">' + lead(\"week\") + h + gpCard() + walksWith() + '</main>';\n    }\n    var head = group() ? '<div class=\"av-hd\"><b>Before Your Group Meets</b><span>' + esc(day) + '</span></div>' : '<div class=\"av-hd\"><b>This Week</b><span>at your own pace</span></div>';\n    var s = storyRow();\n    h += '<div class=\"av-list\">' + head + courseRow(d) + pieceRow(d) +\n      rowHtml(\"check\", \"Check In With Your Witness\", \"About a minute\", (d.check ? \"Kept. \" : \"\") + (group() ? (leaderKnown() ? \"Your group’s leader reads it before you meet\" : \"Our team reads it before you meet\") : \"Our team reads it\"), \"Start\", \"checkin\", d.check) +\n      (s ? rowHtml(\"story\", \"Your Story\", writeName(s.it.title), s.done ? \"Kept in Your Story\" : \"Your course asks it this week\", s.it.begun ? \"Continue\" : \"Begin\", \"story\", s.done, s.it.href || PAGES.story) : \"\") + '</div>';\n    return '<main class=\"av-view\">' + lead(\"week\") + h + gpCard() + walksWith() + '</main>';\n  }\n  function rhythmOfWhen(k) { var w = WHENS.filter(function (x) { return x[0] === k; })[0]; return w ? w[1] : \"\"; }\n\n  /* ───────────── Your Story ───────────── */\n  function lineHtml(l) { return '<p class=\"av-line' + (l.mine ? \" av-mine\" : \"\") + (l.fresh ? \" av-new\" : \"\") + '\">' + esc(l.t) + (l.w ? '<small>' + esc(l.w) + '</small>' : \"\") + '</p>'; }\n  /* Your Story · Told, Offered, Known, from the story engine's own states: finished and kept = Told; the offered stop = Offered; the published stop = Known; begun = Begun */\n  function storyStop(key) {\n    var c = cardNode(key), foot = c && c.querySelector(\".apo-foot\"), cls = foot ? foot.className : \"\", st = stateOf(key);\n    if (/is-published/.test(cls)) return [\"Known\", \"on Our Stories, where other men can read it\"];\n    if (/is-offered/.test(cls)) return [\"Offered\", \"our team is reading it\"];\n    if (st && st.status === \"finished\") return [\"Told\", \"kept for you\"];\n    if (st) return [\"Begun\", \"pick it up where you left off\"];\n    return [\"\", \"\"];\n  }\n  function shelfRows() {\n    var rows = [], keys = Object.keys(surfaces());\n    keys.forEach(function (k) {\n      var c = cardNode(k); if (!c || !cardShown(c) || !stateOf(k)) return;\n      var s = storyStop(k); if (!s[0]) return;\n      rows.push({ key: k, title: titleOf(c), stop: s[0], line: s[1] });\n    });\n    if ((window.apStones || []).length) rows.push({ key: \"stones\", title: \"Your Stones\", stop: \"Told\", line: \"kept for you\" });\n    return rows;\n  }\n  function shelfHtml() {\n    var rows = shelfRows(), h = '<div class=\"av-card\"><p class=\"av-lk\">Your Story · Told, Offered, Known</p>';\n    if (!rows.length) h += '<p class=\"av-help\">Nothing here yet. Whatever you write on this road is kept here, and stays yours until you choose to offer it.</p>';\n    else h += '<div class=\"av-shelf\">' + rows.map(function (r) {\n      var open = UI.slot === r.key;\n      return '<div class=\"av-it\"><button type=\"button\" class=\"av-itb\" data-act=\"slot\" data-k=\"' + esc(r.key) + '\" aria-expanded=\"' + open + '\"><span>' + esc(r.title) + '</span><em>' + esc(r.stop + \" · \" + r.line) + '</em></button><div class=\"av-slot\" data-slot=\"' + esc(r.key) + '\"' + (open ? \"\" : \" hidden\") + '></div></div>';\n    }).join(\"\") + '</div>';\n    return h + '<a class=\"av-walk\" href=\"' + PAGES.story + '\"><span class=\"av-u\">' + (rows.length ? \"Write another\" : \"Write your first\") + '</span> <span class=\"av-ar\">→</span></a></div>';\n  }\n  function stashSlots() {\n    var s = shelf(); if (!s) return;\n    $$('.av-slot > .ap-card, .av-slot > #apPileBox').forEach(function (n) { if (n.id === \"apPileBox\") (document.getElementById(\"apStories\") || s).insertAdjacentElement(\"afterend\", n); else (document.getElementById(\"apStories\") || s).appendChild(n); });\n  }\n  function fillSlots() {\n    $$('.av-slot').forEach(function (box) {\n      var k = box.getAttribute(\"data-slot\"); if (box.hidden) return;\n      if (k === \"stones\") { var pn = document.getElementById(\"apPileBox\"); if (pn) box.appendChild(pn); return; }\n      var c = cardNode(k); if (c) { c.style.display = \"\"; box.appendChild(c); }\n    });\n  }\n  function madeCard() {\n    var v = V(), m = v.made, bet = v.better || [], open = !!UI.open.better, tx = UI.drafts.avMade || \"\";\n    var h = '<div class=\"av-card av-answer\"><p class=\"av-lk\">Make Something of It</p><p class=\"av-t\">What has this road taught you that you want to keep, or give?</p>';\n    if (m && m.text) return h + '<p class=\"av-kept\"><b>Kept.</b> “' + esc(m.text) + '” is yours. When you’re ready, you can offer it so other men can read it.</p><button type=\"button\" class=\"av-walk\" data-act=\"offer\"><span class=\"av-u\">Offer it</span> <span class=\"av-ar\">→</span></button></div>';\n    var showBet = !v.first && bet.length > 0;\n    return h + '<textarea id=\"avMade\" maxlength=\"2000\" aria-label=\"What this road has taught you\">' + esc(tx) + '</textarea>' +\n      (showBet ? '<button type=\"button\" class=\"av-walk\" data-act=\"toggle\" data-k=\"better\" aria-expanded=\"' + open + '\"><span class=\"av-u\">Stuck at the first line? Better questions</span> <span class=\"av-ar\">' + (open ? \"▴\" : \"▾\") + '</span></button><div class=\"av-more' + (open ? \" av-open\" : \"\") + '\">' + bet.map(function (q) { return '<p class=\"av-s\">' + esc(q) + '</p>'; }).join(\"\") + '</div>' : \"\") +\n      '<button type=\"button\" class=\"av-btn\" data-act=\"keepmade\">Keep it</button><p class=\"av-kept\" id=\"avMadeS\" aria-live=\"polite\"></p></div>';\n  }\n  function viewHouse() {\n    var v = V(), H = v.house || { did: [], saw: [], know: [] };\n    var h = '<main class=\"av-view\">' + lead(\"house\");\n    h += '<div class=\"av-seg2\" role=\"group\" aria-label=\"Whose story\"><button type=\"button\" data-act=\"house\" data-h=\"mine\" aria-pressed=\"' + (UI.house === \"mine\") + '\">Mine</button><button type=\"button\" data-act=\"house\" data-h=\"ours\" aria-pressed=\"' + (UI.house === \"ours\") + '\">Our Group</button></div>';\n    if (UI.house === \"ours\") {\n      var O = UI.ours;\n      h += '<p class=\"av-help\">What the men walking this road have gathered together. It starts with your group and grows as groups join. Never one man’s words unless he offered them.</p>';\n      if (!group()) h += '<div class=\"av-card\"><p class=\"av-s\">Our Group is your group’s. When you walk with a group, what the men gathered together shows here.</p></div>';\n      else if (!O) h += '<div class=\"av-card\"><p class=\"av-s\">' + (UI.oursBusy ? \"Opening Our Group.\" : \"Our Group did not open. Try again in a moment.\") + '</p></div>';\n      else {\n        ROOMS.forEach(function (r) {\n          var L = O[r[0]] || [];\n          h += '<div class=\"av-card av-room\"><p class=\"av-t\">' + esc(r[2].replace(\"You\", \"We\")) + '</p>' + (L.length ? L.map(function (l) { return '<p class=\"av-line\">' + esc(l.t) + '</p>'; }).join(\"\") : '<p class=\"av-help\">Nothing to show yet. A line shows here only when enough of your group stand behind it that no one man can be picked out.</p>') + '</div>';\n        });\n        if ((O.carried || []).length) h += '<div class=\"av-card\"><p class=\"av-lk\">What Our Group Carried</p>' + O.carried.map(function (c) { return '<p class=\"av-s\"><b>' + esc(smart(c.title)) + '.</b> ' + esc(smart(c.body || \"\")) + '</p>'; }).join(\"\") + '<p class=\"av-help\">' + esc(WHO_CARRIED_HELP) + '</p></div>';\n      }\n      return h + '</main>';\n    }\n    ROOMS.forEach(function (r) {\n      var L = H[r[0]] || [];\n      h += '<div class=\"av-card av-room\"><p class=\"av-t\">' + esc(r[2]) + '</p>' + (L.length ? L.map(function (l) { return lineHtml({ t: l.t, mine: l.mine, w: l.w, fresh: !!UI.fresh[r[0] + \"|\" + l.t] }); }).join(\"\") : '<p class=\"av-help\">Empty for now. Your first check-in begins it.</p>') + '</div>';\n    });\n    h += '<p class=\"av-help\">Each week holds what you did, what you saw and what you know now: wisdom, understanding and knowledge (Proverbs 24:3–4).</p>';\n    h += shelfHtml();\n    h += '<div class=\"av-card\"><p class=\"av-lk\">What I’ve Gathered</p><div class=\"av-vol\"><div class=\"av-cover\" aria-hidden=\"true\"><span class=\"av-ck\">What I’ve Gathered</span><span class=\"av-ct\">' + esc(v.course || \"Your road\") + '</span><span class=\"av-cv\">Remember the whole way…</span></div><div><p class=\"av-s\" style=\"margin-top:0\">' + (v.first ? \"Nothing is gathered yet. What you keep on this road is bound here, in a volume of your own.\" : \"Your first volume comes at the end of November.\") + '</p></div></div></div>';\n    h += madeCard();\n    return h + '</main>';\n  }\n\n  /* ───────────── Your Path ───────────── */\n  function pathCourses() {\n    var mine = window.apMine || {}, out = [], seen = {}, offered = (data && data.setup && data.setup.offered) || [];\n    function state(name, tid) {\n      var o = offered.filter(function (x) { return norm(x.name) === norm(name); })[0];\n      if (o) return /^Finished$/i.test(o.state) ? \"Complete\" : o.state;\n      return mine[tid] ? \"Yours\" : \"Free to start\";\n    }\n    OPEN_COURSES.forEach(function (c) {\n      var o = offered.filter(function (x) { return norm(x.name) === norm(c[0]); })[0];\n      if (c[0] === \"Breaking Free\" && !o && !mine[c[1]]) return;\n      seen[norm(c[0])] = 1; out.push({ name: c[0], state: state(c[0], c[1]), href: courseHref(c[0]) });\n    });\n    offered.forEach(function (o) { if (!seen[norm(o.name)]) { seen[norm(o.name)] = 1; out.push({ name: o.name, state: /^Finished$/i.test(o.state) ? \"Complete\" : o.state, href: courseHref(o.name) }); } });\n    return out;\n  }\n  function whatsNext() {\n    var v = V(), n = newestNote();\n    if (v.ended) {\n      var word = n ? '<p class=\"av-s\">“' + esc(smart(String(n.text).replace(/\\s+/g, \" \").slice(0, 420))) + (String(n.text).length > 420 ? \"…\" : \"\") + '”</p><button type=\"button\" class=\"av-walk\" data-act=\"letter\"><span class=\"av-u\">Read the whole letter</span> <span class=\"av-ar\">→</span></button>' :\n        '<p class=\"av-s\">Your witness has not written yet. When they do, their word about what comes next will be here. Until then, our team will help you name what fits.</p>';\n      return '<div class=\"av-card\"><p class=\"av-lk\">What’s Next for You</p><p class=\"av-t\">A word from your witness</p>' + word + '<br><a class=\"av-walk\" href=\"' + esc(courseHref(\"Walk With Me\")) + '\"><span class=\"av-u\">Look at Walk With Me</span> <span class=\"av-ar\">→</span></a><br><button type=\"button\" class=\"av-walk\" data-act=\"toggle\" data-k=\"another\" aria-expanded=\"' + !!UI.open.another + '\"><span class=\"av-u\">Or walk with another man</span> <span class=\"av-ar\">' + (UI.open.another ? \"▴\" : \"▾\") + '</span></button>' + anotherMore() + '</div>';\n    }\n    return '<div class=\"av-card\"><p class=\"av-lk\">What’s Next for You</p><p class=\"av-s\">When ' + esc(v.course || \"your course\") + ' ends, your witness will name the course or path that fits next.</p><a class=\"av-walk\" href=\"' + PAGES.team + '\"><span class=\"av-u\">Ask our team about it</span> <span class=\"av-ar\">→</span></a></div>';\n  }\n  function anotherMore() {\n    return '<div class=\"av-more' + (UI.open.another ? \" av-open\" : \"\") + '\"><p class=\"av-s\">A witness is a mentor, a coach or a trusted friend who walks with a man. He listens deeply, speaks truth with compassion, and challenges him to grow. After a course, you can be that for someone: you read what he chooses to share and write to him, and our team walks with you. Later, if you’re asked, you can train to lead a group.</p><a class=\"av-walk\" href=\"' + PAGES.team + '\"><span class=\"av-u\">Tell our team you’d like to</span> <span class=\"av-ar\">→</span></a></div>';\n  }\n  function viewPath() {\n    var h = '<main class=\"av-view\">' + lead(\"path\") + whatsNext();\n    var cs = pathCourses();\n    h += '<div class=\"av-card\"><p class=\"av-lk\">Your Courses</p>' + (cs.length ? cs.map(function (c) { return '<a class=\"av-course\" href=\"' + esc(c.href) + '\"><b>' + esc(c.name) + '</b><span>' + esc(c.state) + '</span></a>'; }).join(\"\") : '<p class=\"av-help\">Your courses show here.</p>') + '</div>';\n    h += '<div class=\"av-card\"><p class=\"av-lk\">The Nine Guideposts</p><p class=\"av-help\">Nine places a man gets stuck, and what helps him move again. They are not steps; a man can stand at more than one.</p>' +\n      WAYMARKS.map(function (w, i) {\n        var k = \"n\" + i, open = !!UI.open[k], t = tryOf(w), here = V().guidepost && V().guidepost.n === w.n;\n        return '<div class=\"av-gp\"><button type=\"button\" data-act=\"toggle\" data-k=\"' + k + '\" aria-expanded=\"' + open + '\"><span><b>' + esc(w.name) + '</b><br><span class=\"av-one\">' + esc(w.one + (here ? \" · This week\" : \"\")) + '</span></span><span class=\"av-ar\" aria-hidden=\"true\">' + (open ? \"▴\" : \"▾\") + '</span></button><div class=\"av-more' + (open ? \" av-open\" : \"\") + '\"><div class=\"av-body\"><p><b>Carry This Question:</b> ' + esc(w.carry) + '</p><p style=\"margin-top:6px\"><b>Try This:</b> ' + esc((t.name ? t.name + \". \" : \"\") + t.text) + '</p><p style=\"margin-top:6px\"><b>Where a Man Gets Stuck Here:</b> ' + esc(w.stuck) + '</p></div></div></div>';\n      }).join(\"\") + '<p class=\"av-help\">Some practices come from clinical work, so use them slowly and only with someone safe. This is care and coaching, not a replacement for counseling.</p></div>';\n    h += '<div class=\"av-card\"><p class=\"av-lk\">Walk With Another Man</p><p class=\"av-s\">After a course, a man can become another man’s witness, and later train to lead a group.</p><button type=\"button\" class=\"av-walk\" data-act=\"toggle\" data-k=\"another\" aria-expanded=\"' + !!UI.open.another + '\"><span class=\"av-u\">How a man becomes a witness</span> <span class=\"av-ar\">' + (UI.open.another ? \"▴\" : \"▾\") + '</span></button>' + anotherMore() + '</div>';\n    h += '<div class=\"av-doors\"><button type=\"button\" class=\"av-walk\" data-act=\"welcome\"><span class=\"av-u\">What This Page Is For</span> <span class=\"av-ar\">→</span></button><a class=\"av-walk\" href=\"' + PAGES.team + '\"><span class=\"av-u\">Talk With Our Team</span> <span class=\"av-ar\">→</span></a><a class=\"av-walk\" href=\"' + PAGES.profile + '\"><span class=\"av-u\">Your Profile</span> <span class=\"av-ar\">→</span></a></div>';\n    return h + '</main>';\n  }\n\n  /* ───────────── overlays: the check-in and the sheets; a full screen on a phone, a sheet beside the page on a desk ───────────── */\n  var lastFocus = null, locked = null;\n  function root() { return $(\"#avRoot\"); }\n  function ovCk() { return $(\"#avCk\"); }\n  function ovSheet() { return $(\"#avSheet\"); }\n  function scroller() {\n    var e = host.parentElement;\n    while (e && e !== document.body && e !== document.documentElement) { var o = getComputedStyle(e).overflowY; if ((o === \"auto\" || o === \"scroll\") && e.scrollHeight > e.clientHeight + 2) return e; e = e.parentElement; }\n    return null;\n  }\n  function lockOn() {\n    if (locked) return;\n    var sc = scroller();\n    locked = { html: document.documentElement.style.overflow, body: document.body.style.overflow, sc: sc, scv: sc ? sc.style.overflow : \"\" };\n    document.documentElement.style.overflow = \"hidden\"; document.body.style.overflow = \"hidden\"; if (sc) sc.style.overflow = \"hidden\";\n    var m = $(\"#avMain\"), b = document.getElementById(\"apBand\");\n    if (m) m.setAttribute(\"inert\", \"\"); if (b) b.setAttribute(\"inert\", \"\");\n  }\n  function lockOff() {\n    if (!locked) return;\n    document.documentElement.style.overflow = locked.html; document.body.style.overflow = locked.body; if (locked.sc) locked.sc.style.overflow = locked.scv;\n    locked = null;\n    var m = $(\"#avMain\"), b = document.getElementById(\"apBand\");\n    if (m) m.removeAttribute(\"inert\"); if (b) b.removeAttribute(\"inert\");\n  }\n  function anyOpen() { var a = ovCk(), b = ovSheet(); return !!((a && a.classList.contains(\"av-open\")) || (b && b.classList.contains(\"av-open\"))); }\n  function openOverlay(el, html) {\n    if (!el) return;\n    if (!anyOpen()) lastFocus = document.activeElement;\n    el.innerHTML = html; el.classList.add(\"av-open\"); var sc = $(\"#avScrim\"); if (sc) sc.classList.add(\"av-on\");\n    lockOn();\n    setTimeout(function () { var f = el.querySelector(\"textarea,.av-obody button,.av-obody input,button\"); if (f && f.focus) { try { f.focus({ preventScroll: true }); } catch (e) { f.focus(); } } }, reduce ? 0 : 380);\n  }\n  function closeOverlay(el) {\n    if (!el) return;\n    el.classList.remove(\"av-open\");\n    if (!anyOpen()) { var sc = $(\"#avScrim\"); if (sc) sc.classList.remove(\"av-on\"); lockOff(); if (lastFocus && document.body.contains(lastFocus) && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) { lastFocus.focus(); } } }\n  }\n  function trap(ev) {\n    var ov = ovSheet().classList.contains(\"av-open\") ? ovSheet() : ovCk().classList.contains(\"av-open\") ? ovCk() : null; if (!ov) return;\n    if (ev.key === \"Escape\") { ev.preventDefault(); if (ov === ovCk()) closeCk(); else closeSheet(); return; }\n    if (ev.key === \"Enter\" && ov === ovCk() && !ev.shiftKey && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {\n      /* Enter presses the step's one filled button, unless he is typing, on a link, or on a choice he has not made yet (then Enter makes that choice, as a button does) */\n      var et = ev.target, tag = et && et.tagName, prim = $('[data-act=\"ck-next\"],[data-act=\"ck-finish\"]', ov);\n      if (prim && tag !== \"TEXTAREA\" && tag !== \"INPUT\" && tag !== \"A\") {\n        var pick = et && et.closest ? et.closest(\"[aria-pressed]\") : null, own = et && et.closest ? et.closest(\"[data-act]\") : null;\n        if ((!pick || pick.getAttribute(\"aria-pressed\") === \"true\") && !(own && !pick)) { ev.preventDefault(); prim.click(); return; }\n      }\n    }\n    if (ev.key !== \"Tab\") return;\n    var f = $$(\"button:not([disabled]),a[href],textarea,input\", ov).filter(function (n) { return n.offsetParent !== null || n === document.activeElement; });\n    if (!f.length) return;\n    var first = f[0], last = f[f.length - 1];\n    if (ev.shiftKey && (document.activeElement === first || !ov.contains(document.activeElement))) { ev.preventDefault(); last.focus(); }\n    else if (!ev.shiftKey && (document.activeElement === last || !ov.contains(document.activeElement))) { ev.preventDefault(); first.focus(); }\n  }\n  function sheetHtml(title, body) { return '<div class=\"av-ohead\"><span class=\"av-lk\">' + esc(title) + '</span><button type=\"button\" class=\"av-close\" data-act=\"close-sheet\">Close</button></div><div class=\"av-obody\">' + body + '</div>'; }\n  function openSheet(html) { openOverlay(ovSheet(), html); }\n  function closeSheet() { closeOverlay(ovSheet()); renderMain(true); }\n  function closeCk() { closeOverlay(ovCk()); renderMain(true); }\n  function toast(m) { var t = $(\"#avToast\"); if (!t) return; t.textContent = m; t.classList.add(\"av-in\"); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove(\"av-in\"); }, 2600); }\n\n  /* ───────────── the check-in: four steps, Back and Skip on each; every tap is written as it is made ───────────── */\n  function ckInit(mode) {\n    var v = V(), c = cardD() || {}, p = piece(), pr = v.practice || \"\", wh = v.when || \"\"; /* only what he chose this week: last week's time of day is not carried in */\n    if (mode === \"choose\" && !(v.practices || []).some(function (t) { return t === pr || (pr.length >= 200 && t.indexOf(pr) === 0); })) { pr = \"\"; wh = \"\"; } /* after his group meets: last unit's practice and time are not carried onto the new list */\n    UI.ck = { step: mode === \"choose\" ? 4 : 1, mode: mode || \"week\", path: c.mark || null, word: c.word || null, helped: p && p.word === \"met\" ? \"yes\" : p && p.word === \"not\" ? \"no\" : null,\n      why: p && p.why === \"too_long\" ? \"long\" : p && p.why === \"not_needed\" ? \"need\" : null, how: c.did || null, practice: pr || null, when: wh || null, moreWords: false, taps: 0, say: {} };\n  }\n  function ckBar(st) { return '<div class=\"av-bar\" aria-hidden=\"true\">' + [1, 2, 3, 4].map(function (i) { return '<i class=\"' + (i <= Math.min(st, 4) ? \"av-on\" : \"\") + '\"></i>'; }).join(\"\") + '</div>'; }\n  function kLine(k) { var s = UI.ck.say[k]; return s ? (s.bad ? esc(s.t) : \"<b>Kept.</b> \" + esc(s.t)) : \"\"; }\n  function ckPractices() { return V().practices || []; }\n  function isPicked(t) { var p = UI.ck.practice || \"\"; return !!p && (t === p || (p.length >= 200 && t.indexOf(p) === 0)); }\n  function ckHtml() {\n    var c = UI.ck, st = c.step, p = piece(), card = cardD() || {}, v = V();\n    var head = '<div class=\"av-ohead\"><span class=\"av-lk\">' + (c.mode === \"choose\" ? \"Choose Your Practice\" : \"Check In With Your Witness\") + '</span><button type=\"button\" class=\"av-close\" data-act=\"close-ck\">Close</button></div>';\n    if (st === 5) return head + '<div class=\"av-obody\">' + ckBar(st) + doneHtml() + '</div><div class=\"av-ofoot\"><button type=\"button\" class=\"av-btn\" style=\"margin-top:0\" data-act=\"ck-finish\">Back to This Week</button><div class=\"av-links\"><button type=\"button\" class=\"av-walk\" data-act=\"ck-house\"><span class=\"av-u\">See it in Your Story</span> <span class=\"av-ar\">→</span></button></div></div>';\n    var b = \"\";\n    if (st === 1) {\n      var ws = c.moreWords ? WORDS.concat(MORE_WORDS) : WORDS, need = c.word ? needText(c.word) : \"\";\n      b = '<p class=\"av-sub\">The Path</p><p class=\"av-q\">How’s the path this week?</p><div class=\"av-choices av-two\">' + PATHS.map(function (x) { return '<button type=\"button\" class=\"av-choice av-left\" data-act=\"ck-path\" data-v=\"' + x[0] + '\" aria-pressed=\"' + (c.path === x[0]) + '\"><svg viewBox=\"0 0 20 20\" aria-hidden=\"true\">' + x[2] + '</svg>' + esc(x[1]) + '</button>'; }).join(\"\") + '</div>' +\n        '<p class=\"av-sub\">The Word for It, If You Want</p><div class=\"av-words\">' + ws.map(function (w) { return '<button type=\"button\" class=\"av-word\" data-act=\"ck-word\" data-v=\"' + w + '\" aria-pressed=\"' + (c.word === w) + '\">' + w + '</button>'; }).join(\"\") + (c.moreWords ? \"\" : '<button type=\"button\" class=\"av-word\" data-act=\"ck-more\">More words</button>') + '</div>' +\n        '<p class=\"av-kept\" aria-live=\"polite\">' + (c.say.path ? kLine(\"path\") : (c.word && !c.path ? \"Choose how the path is first, and the word is kept with it.\" : \"\")) + '</p>' +\n        '<div class=\"av-give' + (need ? \" av-in\" : \"\") + '\" id=\"avNeed\"><p class=\"av-lk\">The Word for It</p><p>' + esc(need) + '</p></div>';\n    } else if (st === 2) {\n      if (!p) b = '<p class=\"av-sub\">This Week’s Piece</p><p class=\"av-q\">Your piece has not come yet.</p><p class=\"av-s\">It lands with your next morning’s reading. You can skip this one.</p>';\n      else b = '<p class=\"av-sub\">This Week’s Piece</p><p class=\"av-q\">Did this piece help your week?</p><p class=\"av-s\">“' + esc(p.claim) + '”</p><div class=\"av-choices av-two\"><button type=\"button\" class=\"av-choice\" data-act=\"ck-helped\" data-v=\"yes\" aria-pressed=\"' + (c.helped === \"yes\") + '\">It helped</button><button type=\"button\" class=\"av-choice\" data-act=\"ck-helped\" data-v=\"no\" aria-pressed=\"' + (c.helped === \"no\") + '\">Not this one</button></div>' +\n        '<p class=\"av-kept\" aria-live=\"polite\">' + (c.helped === \"yes\" ? kLine(\"helped\") || \"<b>Kept.</b> Next week’s piece builds on what helped.\" : c.helped === \"no\" ? kLine(\"helped\") || \"<b>Kept.</b> Thank you. A no helps us choose as much as a yes.\" : \"\") + '</p>' +\n        (c.helped === \"no\" ? '<p class=\"av-sub\">What Made It a No? If You Want</p><div class=\"av-choices av-two\"><button type=\"button\" class=\"av-choice\" data-act=\"ck-why\" data-v=\"long\" aria-pressed=\"' + (c.why === \"long\") + '\">Too long right now</button><button type=\"button\" class=\"av-choice\" data-act=\"ck-why\" data-v=\"need\" aria-pressed=\"' + (c.why === \"need\") + '\">Not what I need</button></div><p class=\"av-kept\" aria-live=\"polite\">' + (c.why === \"long\" ? \"<b>Kept.</b> We’ll offer the same idea again another week, in a shorter form.\" : c.why === \"need\" ? \"<b>Kept.</b> We’ll steer toward what has helped you. If this idea still fits, we may offer it once more another way.\" : \"\") + '</p>' : \"\");\n    } else if (st === 3) {\n      var last = card.lastChose || (v.lastWeek && v.lastWeek.practice) || \"\";\n      if (!last) b = '<p class=\"av-sub\">Last Week’s Practice</p><p class=\"av-q\">You didn’t name a practice last week.</p><p class=\"av-s\">There is nothing to look back on here. This week you’ll choose one.</p>';\n      else b = '<p class=\"av-sub\">Last Week’s Practice</p><p class=\"av-q\">“' + esc(last) + '” How did it go?</p><div class=\"av-choices av-three\"><button type=\"button\" class=\"av-choice\" data-act=\"ck-how\" data-v=\"most\" aria-pressed=\"' + (c.how === \"most\") + '\">Most days</button><button type=\"button\" class=\"av-choice\" data-act=\"ck-how\" data-v=\"some\" aria-pressed=\"' + (c.how === \"some\") + '\">Some days</button><button type=\"button\" class=\"av-choice\" data-act=\"ck-how\" data-v=\"notyet\" aria-pressed=\"' + (c.how === \"notyet\") + '\">Not this week</button></div><p class=\"av-kept\" aria-live=\"polite\">' + (c.how ? \"<b>Kept.</b> \" + esc(HOW[c.how].replace(/^Kept\\. /, \"\")) : \"\") + '</p><p class=\"av-help\">We want to support your growth here, establishing the right habits that lead to the personal development you desire.</p>';\n    } else if (st === 4) {\n      var list = ckPractices(), lab = ctxLabel(), rh = V().settings && V().settings.remind ? rhythmWord(V().settings.remind) : \"\";\n      b = '<p class=\"av-sub\">This Week’s Practice</p><p class=\"av-q\">' + (list.length ? \"Choose one from \" + esc(lab || \"this week\") : \"Your Practice for This Week\") + '</p>' +\n        (list.length ? '<div class=\"av-choices\">' + list.map(function (t, i) { return '<button type=\"button\" class=\"av-choice av-left\" data-act=\"ck-prac\" data-v=\"' + i + '\" aria-pressed=\"' + isPicked(t) + '\">' + esc(t) + '</button>'; }).join(\"\") + '</div><p class=\"av-kept\" aria-live=\"polite\">' + (c.say.practice ? kLine(\"practice\") : \"\") + '</p>' : '<p class=\"av-s\">Your course hasn’t named practices for this week yet. They’ll be here when it does.</p>') +\n        '<p class=\"av-sub\">When Will You Do It?</p><div class=\"av-choices av-three\">' + WHENS.map(function (w) { return '<button type=\"button\" class=\"av-choice\" data-act=\"ck-when\" data-v=\"' + w[0] + '\" aria-pressed=\"' + (c.when === w[0]) + '\">' + esc(w[1]) + '</button>'; }).join(\"\") + '</div><p class=\"av-kept\" aria-live=\"polite\">' + (c.say.when ? kLine(\"when\") : \"\") + '</p>' +\n        '<p class=\"av-help\">' + (rh ? \"We’ll bring it back to you at your rhythm: \" + esc(rh.toLowerCase()) + \". Change it in Settings.\" : \"Choose how often we bring it back to you in Settings.\") + '</p>';\n    }\n    var label = c.mode === \"choose\" ? \"Done\" : st < 4 ? [\"Next: this week’s piece\", \"Next: last week’s practice\", \"Next: this week’s practice\"][st - 1] : \"Done\";\n    var links = c.mode === \"choose\" ? \"\" : (st > 1 ? '<button type=\"button\" class=\"av-walk\" data-act=\"ck-back\"><span class=\"av-u\">Back</span></button>' : \"\") + '<button type=\"button\" class=\"av-walk\" data-act=\"ck-skip\"><span class=\"av-u\">Skip this one</span></button>';\n    return head + '<div class=\"av-obody\">' + (c.mode === \"choose\" ? \"\" : ckBar(st)) + b + '</div><div class=\"av-ofoot\"><button type=\"button\" class=\"av-btn\" style=\"margin-top:0\" data-act=\"ck-next\">' + label + '</button><div class=\"av-links\">' + links + '</div></div>';\n  }\n  /* \"…this week too\" is said only when his own mark this week is the group's; otherwise there is no line (and none on a first visit) */\n  function groupSaidLine() {\n    var g = (data && data.group) || {}, mine = (UI.ck && UI.ck.path) || \"\";\n    return group() && !V().first && mine && g.line && mine === g.line && GROUPWORD[g.line] ? \"Most of your group marked \" + GROUPWORD[g.line] + \" this week too.\" : \"\";\n  }\n  function helpingSaid() {\n    var h = data && data.helping, out = [], m = (h && h.more) || [];\n    if (!h) return \"\";\n    if (m.length) out.push(\"The readings that have helped you most come from \" + (m.length > 1 ? m[0] + \" and \" + m[1] : m[0]) + \", so you’ll see more from \" + (m.length > 1 ? \"both\" : \"it\") + \".\");\n    if (h.fewer) out.push(\"Readings on \" + h.fewer + \" haven’t landed yet, so you’ll see fewer of those.\");\n    return out.join(\" \");\n  }\n  function doneHtml() {\n    if (!UI.ck.taps) return '<p class=\"av-q\" style=\"margin-top:14px\">Nothing kept this time.</p><p class=\"av-help\">You can check in any time this week. Nothing was saved.</p>';\n    var c = UI.ck, day = meetDay(), who = group() ? (leaderKnown() ? \"Your group’s leader reads it before you meet.\" : \"Our team reads it before you meet.\") : \"Our team reads it this week.\";\n    var h = '<p class=\"av-q\" style=\"margin-top:14px\">Kept. ' + (group() ? \"You’re ready for \" + esc(day || \"your group’s night\") + \".\" : \"Your week is set.\") + '</p><p class=\"av-help\">' + esc(who) + ' <br><button type=\"button\" class=\"av-walk\" data-act=\"settings\"><span class=\"av-u\">Change what you share</span> <span class=\"av-ar\">→</span></button></p>';\n    var pr = c.practice || V().practice;\n    if (pr) h += '<p class=\"av-s\" style=\"margin-top:10px\">Your practice this week: <b>' + esc(String(pr).replace(/\\.$/, \"\")) + '</b>' + (c.when ? \", \" + esc(lc1(rhythmOfWhen(c.when))) : \"\") + '.</p>';\n    var hs = helpingSaid(), gs = groupSaidLine();\n    if (hs) h += '<div class=\"av-give\" data-seq=\"1\"><p class=\"av-lk\">What’s Been Helping You</p><p>' + esc(smart(hs)) + '</p></div>';\n    if (gs) h += '<div class=\"av-give\" data-seq=\"2\"><p class=\"av-lk\">You’re Not the Only One</p><p>' + esc(gs) + '</p></div>';\n    var lit = { did: !!pr, saw: !!c.path, know: c.helped === \"yes\" };\n    if (lit.did || lit.saw || lit.know) h += '<div class=\"av-give\" data-seq=\"3\"><p class=\"av-lk\">Your Story</p><p>It’s kept in Your Story.</p></div>';\n    return h;\n  }\n  function revealGives() { $$(\".av-give[data-seq]\", ovCk()).forEach(function (g, i) { setTimeout(function () { g.classList.add(\"av-in\"); }, reduce ? 0 : 220 + i * 380); }); }\n\n  /* ───────────── sheets: the piece, the letter, a hand, settings, what this page is for ───────────── */\n  function pieceSheet() {\n    var p = piece(); if (!p) return \"\";\n    var layer = p.layer || \"Wisdom\", act = actOf(p), mins = act === \"Read\" ? \"Read it where it lives\" : act + \" at the minute that matters\";\n    var h = '<p class=\"av-q\">' + esc(smart(p.claim)) + '</p>';\n    if (!p.short && p.road) h += '<p class=\"av-quote\" style=\"font-size:17px\">' + esc(smart(p.road)) + '</p>';\n    h += '<p class=\"av-src\">Read by our team' + (p.verse ? \" beside \" + esc(p.verse) : \"\") + ', for ' + esc(layer.toLowerCase()) + ' in the work you’re doing this week.</p>';\n    h += '<a class=\"av-walk\" href=\"' + esc(p.minuteLink || p.link) + '\" target=\"_blank\" rel=\"noopener\" data-act=\"listen\"><span class=\"av-u\">' + esc(mins) + '</span> <span class=\"av-ar\">↗</span></a>';\n    if (!p.short && p.quotes && p.quotes.length) h += p.quotes.map(function (q) {\n      var min = q.minute || q.m || \"\", who = String(p.voice || \"\").split(\",\")[0].replace(/\\s*\\(.*$/, \"\").trim();\n      return '<p class=\"av-quo\">“' + esc(q.words) + '”<small>' + esc(who) + (who && min ? \", at \" : \"\") + (min ? (q.link ? '<a href=\"' + esc(q.link) + '\" target=\"_blank\" rel=\"noopener\" data-act=\"listen\">' + esc(min) + \" ↗</a>\" : esc(min)) : \"\") + '</small></p>';\n    }).join(\"\");\n    if (!p.short && p.todo) h += '<div class=\"av-card\"><p class=\"av-lk\">One Thing to Do</p><p class=\"av-s\">' + esc(smart(p.todo)) + '</p></div>';\n    if (p.question) {\n      var review = (data && data.review) || \"two days\";\n      h += '<div class=\"av-card av-answer\"><p class=\"av-lk\">The Question Back</p><p class=\"av-s\">' + esc(smart(p.question)) + '</p>';\n      if (p.answer && p.answer.text) {\n        var w = p.answer.word;\n        h += '<div class=\"av-said\"><p class=\"av-lk\">Your Answer · Sent ' + esc(p.answer.sent) + '</p><p class=\"av-s\">' + esc(p.answer.text) + '</p>' + (w && (w.verse || w.question || w.step) ? '<p class=\"av-lk\" style=\"margin-top:10px\">' + esc(tc((data && data.wordLabel) || \"A Word for the Road\")) + '</p>' + (w.verse ? '<p class=\"av-verse\">' + esc(nb(w.verse)) + '</p>' : \"\") + (w.question ? '<p class=\"av-s\">' + esc(w.question) + '</p>' : \"\") + (w.step ? '<p class=\"av-s\">' + esc(w.step) + '</p>' : \"\") : \"\") +\n          '<p class=\"av-help\">' + (w ? \"A person on our team has read it.\" : \"A person on our team reads it within \" + esc(review) + \", before anything else happens with it.\") + '</p></div>';\n      } else {\n        h += '<textarea id=\"avAns\" maxlength=\"2000\" aria-label=\"Your answer\" placeholder=\"Write it here.\">' + esc(UI.drafts.avAns || \"\") + '</textarea><button type=\"button\" class=\"av-btn\" data-act=\"send-ans\">Send</button><p class=\"av-kept\" id=\"avAnsS\" aria-live=\"polite\"></p><p class=\"av-help\">' + esc(nb(SAFE.replace(\"__REVIEW__\", review))) + '</p>';\n      }\n      h += '</div>';\n    }\n    return sheetHtml(\"For Your Road · \" + layer, h);\n  }\n  function letterSheet() {\n    var n = unreadNote() || newestNote(); if (!n) return \"\";\n    var paras = String(n.text).split(/\\n\\s*\\n/).map(function (x) { return x.trim(); }).filter(Boolean);\n    return sheetHtml(\"A Letter From Your Witness\", '<div class=\"av-paper\">' + paras.map(function (x) { return '<p>' + esc(x).replace(/\\n/g, \"<br>\") + '</p>'; }).join(\"\") + (n.witness ? '<p class=\"av-sig\">' + esc(n.witness) + '</p>' : \"\") + '</div>');\n  }\n  function handSheet() {\n    var danger = '<div class=\"av-card\"><p class=\"av-lk\">If You Are in Danger Right Now</p><p class=\"av-s\">' + DANGER + '</p></div>';\n    if (UI.handSent) return sheetHtml(\"I Need a Hand\", '<p class=\"av-q\">Sent.</p><p class=\"av-s\">' + (group() && leaderKnown() ? \"Your group’s leader\" : \"Our team\") + ' has it and will reach out to you today.</p>' + danger);\n    return sheetHtml(\"I Need a Hand\", '<p class=\"av-q\">Reach out now?</p><p class=\"av-s\">One tap sends a note to ' + esc(witnessName()) + ' that you need a hand. Nothing else about your week goes with it.</p><button type=\"button\" class=\"av-btn\" data-act=\"hand-send\"' + (UI.handBusy ? \" disabled\" : \"\") + '>Send it</button><p class=\"av-kept\" id=\"avHandS\" aria-live=\"polite\">' + (UI.say.hand || \"\") + '</p>' + danger);\n  }\n  function settingsSheet() {\n    var S = V().settings || {}, sh = S.shares || {}, w = witnessName();\n    var sw = function (k, label) { return '<div class=\"av-toggle\"><span>' + esc(label) + '</span><button type=\"button\" class=\"av-sw\" role=\"switch\" aria-checked=\"' + !!sh[k] + '\" aria-label=\"' + esc(label) + '\" data-act=\"share\" data-k=\"' + k + '\"></button></div>'; };\n    return sheetHtml(\"Settings\", '<p class=\"av-q\">Your Rhythm</p><p class=\"av-s\">How often should we be in touch? New pieces and your practice come back to you at this pace.</p><div class=\"av-choices av-two\">' + RHYTHMS.map(function (r) { return '<button type=\"button\" class=\"av-choice\" data-act=\"rhythm\" data-v=\"' + r[0] + '\" aria-pressed=\"' + (S.remind === r[0]) + '\">' + esc(r[1]) + '</button>'; }).join(\"\") + '</div><p class=\"av-kept\" aria-live=\"polite\">' + (UI.say.rhythm || \"\") + '</p>' +\n      '<p class=\"av-q\" style=\"margin-top:24px\">What Your Witness Sees</p><p class=\"av-s\">Your witness, ' + esc(w) + ', sees only what you choose.</p><div class=\"av-card\">' + SHARES.map(function (x) { return sw(x[0], x[1]); }).join(\"\") + '</div><p class=\"av-kept\" aria-live=\"polite\">' + (UI.say.shares || \"\") + '</p>' +\n      weeklyPreview(S) + '<div class=\"av-card\"><div class=\"av-toggle\"><span>Pause your witness’s notes</span><button type=\"button\" class=\"av-sw\" role=\"switch\" aria-checked=\"' + !!S.paused + '\" aria-label=\"Pause your witness’s notes\" data-act=\"pause\"></button></div><p class=\"av-help\">No reason is shown. Tell our team any time if something feels off.</p></div><p class=\"av-kept\" aria-live=\"polite\">' + (UI.say.pause || \"\") + '</p>');\n  }\n  function weeklyPreview(S) {\n    var w = V().weekly, row = function (a, b) { return '<p class=\"av-s\"><b>' + esc(a) + '</b> ' + esc(b) + '</p>'; }, h = '';\n    if (!w) return \"\";\n    if (w.path) h += row(\"The Path:\", w.path);\n    if (w.piece) h += row(\"This Week’s Piece:\", w.piece);\n    if (w.last) h += row(\"Last Week’s Practice:\", w.last);\n    if (w.now) h += row(\"This Week’s:\", w.now);\n    if (w.words && w.words.length) h += w.words.map(function (x, i) { return '<p class=\"av-s\">' + (i ? \"\" : \"<b>In Your Words:</b> \") + \"“\" + esc(x) + \"”</p>\"; }).join(\"\");\n    if (!h) h = '<p class=\"av-s\">Nothing yet. Your witness sees only what you choose, and your own words stay yours.</p>';\n    else if (!(w.words && w.words.length)) h += '<p class=\"av-help\">Your own words stay yours.</p>';\n    return '<div class=\"av-card\"><p class=\"av-lk\">What Your Witness Sees Each Week</p>' + h + '<p class=\"av-help\">This is the page, exactly as it reaches ' + esc(witnessName()) + '. Nothing else goes with it.</p></div>';\n  }\n  function welcomeSheet() {\n    return sheetHtml(\"What This Page Is For\", '<p class=\"av-q\">Your home base for the week.</p><p class=\"av-verse\">“Stand by the roads, and look, and ask for the ancient paths, where the good way is; and walk in it, and find rest for your souls.” <span>Jeremiah 6:16</span></p><p class=\"av-s\">Each week this page shows you what your course asks of you, keeps what you write, and connects you with the people walking with you, so what you learn becomes how you live.</p><div class=\"av-card\"><p class=\"av-s\"><b>This Week</b>: stand and look. One short list, a check-in with your witness, the question you carry.</p><p class=\"av-s\"><b>Your Story</b>: remember the way. What you did, what you saw, what you know now, and your own writing.</p><p class=\"av-s\"><b>Your Path</b>: ask for the good way. Your courses, what’s next, and in time, walking with another man.</p></div>');\n  }\n\n  /* ───────────── writing: every tap is written as it is made, then says Kept. (a miss says so once and leaves his choice standing) ───────────── */\n  function post(o) {\n    if (!ROAD_URL || !me) return Promise.resolve(null);\n    o.email = me.email; o.lwid = me.id; o.name = me.name;\n    return fetch(ROAD_URL, { method: \"POST\", headers: { \"Content-Type\": \"text/plain;charset=utf-8\" }, body: JSON.stringify(o) }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });\n  }\n  function ok(r) { return !!(r && r.ok); }\n  function cache() { try { localStorage.setItem(CACHE, JSON.stringify({ email: me.email, data: data, at: Date.now() })); } catch (e) {} }\n  function setV(k, val) { if (data && data.v11) data.v11[k] = val; }\n  function setDone(k) { if (data && data.v11) { data.v11.done = data.v11.done || {}; data.v11.done[k] = true; } }\n  function refocus(sel) { var n = sel && $(sel); if (n && n.focus) { try { n.focus({ preventScroll: true }); } catch (e) { n.focus(); } } }\n  function popRow(key) { var r = $('.av-row[data-key=\"' + key + '\"]'); if (r && !reduce) { r.classList.add(\"av-pop\"); setTimeout(function () { r.classList.remove(\"av-pop\"); }, 700); } }\n  function houseKeys(h) { var o = {}; ROOMS.forEach(function (r) { (h && h[r[0]] || []).forEach(function (l) { o[r[0] + \"|\" + l.t] = 1; }); }); return o; }\n  /* a newer answer from the road: new lines in Your Story are marked fresh */\n  function applyData(r, prevHouse) {\n    var before = houseKeys(prevHouse), rooms = [];\n    data = r; UI.fresh = {};\n    ROOMS.forEach(function (x) { (V().house && V().house[x[0]] || []).forEach(function (l) { if (!before[x[0] + \"|\" + l.t]) { UI.fresh[x[0] + \"|\" + l.t] = 1; if (rooms.indexOf(x[0]) < 0) rooms.push(x[0]); } }); });\n    cache();\n    return rooms;\n  }\n  function refresh(then) {\n    var prev = V().house;\n    return post({ action: \"road\" }).then(function (r) {\n      if (ok(r) && !r.bare) { var rooms = applyData(r, prev); if (then) then(rooms); renderMain(true); }\n      return r;\n    });\n  }\n  function say(key, t, bad) { UI.ck.say[key] = { t: t, bad: !!bad }; }\n  function ckRedraw() { var o = ovCk(); if (!o) return; var sc = $(\".av-obody\", o), y = sc ? sc.scrollTop : 0, f = document.activeElement && document.activeElement.getAttribute ? document.activeElement.getAttribute(\"data-act\") + \"|\" + (document.activeElement.getAttribute(\"data-v\") || \"\") : \"\"; o.innerHTML = ckHtml(); sc = $(\".av-obody\", o); if (sc) sc.scrollTop = y; var n = f && o.querySelector('[data-act=\"' + f.split(\"|\")[0] + '\"][data-v=\"' + f.split(\"|\")[1] + '\"]'); if (n) n.focus(); }\n  var MISS = \"That did not save. Tap it again.\";\n  function ckMark() {\n    var c = UI.ck; if (!c.path) return;\n    post({ action: \"road_mark\", mark: c.path, word: c.word || \"\" }).then(function (r) {\n      if (ok(r)) { c.taps++; say(\"path\", \"It shows in What You Saw, in Your Story.\"); var cd = cardD(); if (cd) { cd.mark = c.path; cd.word = c.word || \"\"; } } else say(\"path\", MISS, true);\n      ckRedraw();\n    });\n  }\n  function ckHelped(val) {\n    var c = UI.ck, p = piece(); if (!p) return;\n    c.helped = val; if (val === \"yes\") c.why = null;\n    c.wordP = post({ action: \"road_word\", id: p.id, word: val === \"yes\" ? \"met\" : \"not\" }).then(function (r) {\n      if (ok(r)) { c.taps++; p.word = val === \"yes\" ? \"met\" : \"not\"; if (val === \"yes\") p.why = \"\"; delete c.say.helped; } else say(\"helped\", MISS, true);\n      ckRedraw(); return r;\n    });\n    ckRedraw();\n  }\n  function ckWhy(val) {\n    var c = UI.ck, p = piece(); if (!p) return; c.why = val;\n    (c.wordP || Promise.resolve(null)).then(function () {\n      return post({ action: \"road_why\", id: p.id, reason: val === \"long\" ? \"too_long\" : \"not_needed\" });\n    }).then(function (r) { if (ok(r)) { c.taps++; p.why = val === \"long\" ? \"too_long\" : \"not_needed\"; } else say(\"helped\", MISS, true); ckRedraw(); });\n    ckRedraw();\n  }\n  function ckHow(val) {\n    var c = UI.ck; c.how = val;\n    post({ action: \"road_did\", did: val }).then(function (r) { if (ok(r)) { c.taps++; var cd = cardD(); if (cd) cd.did = val; } else { c.how = null; } ckRedraw(); });\n    ckRedraw();\n  }\n  function ckPrac(i) {\n    var c = UI.ck, t = ckPractices()[i], was = c.practice; if (!t) return;\n    c.practice = t;\n    post({ action: \"road_practice\", text: t }).then(function (r) {\n      if (ok(r)) { c.taps++; say(\"practice\", \"This is your practice for the week.\"); setV(\"practice\", t); var cd = cardD(); if (cd) cd.practice = t; } else { c.practice = was; say(\"practice\", MISS, true); }\n      ckRedraw();\n    });\n    ckRedraw();\n  }\n  function ckWhen(k) {\n    var c = UI.ck, was = c.when; c.when = k;\n    post({ action: \"road_when\", when: k }).then(function (r) {\n      if (ok(r)) { c.taps++; say(\"when\", \"You’ll do it \" + lc1(rhythmOfWhen(k)) + \".\"); setV(\"when\", k); } else { c.when = was; say(\"when\", MISS, true); }\n      ckRedraw();\n    });\n    ckRedraw();\n  }\n  function ckNext() {\n    var c = UI.ck;\n    if (c.mode === \"choose\") {\n      closeOverlay(ovCk());\n      if (c.practice && (c.taps || ckPractices().some(isPicked))) { toast(\"Kept. Your practice for this week is set.\"); popRow(\"choose\"); post({ action: \"road\" }).then(function (r) { if (ok(r) && !r.bare) { var rooms = applyData(r, V().house); renderMain(true); } }); setDone(\"choose\"); }\n      else toast(\"Nothing chosen yet. You can choose any time this week.\");\n      renderMain(true); return;\n    }\n    c.step++;\n    if (c.step === 5) {\n      if (c.taps) { post({ action: \"road_checkin\", state: \"done\" }); setDone(\"check\"); UI.pending = post({ action: \"road\" }); } /* nothing kept, nothing saved: Skip leaves no mark */\n      else UI.pending = null;\n    }\n    ckRedraw(); var b = $(\".av-obody\", ovCk()); if (b) b.scrollTop = 0;\n    if (c.step === 5) revealGives(); else { var f = $(\".av-obody button\", ovCk()); if (f) f.focus(); }\n  }\n  function finishCk(goHouse) {\n    var prev = V().house, pend = UI.pending, kept = !!(UI.ck && UI.ck.taps); UI.pending = null;\n    closeOverlay(ovCk());\n    var who = group() ? (leaderKnown() ? \"Your group’s leader reads it before you meet.\" : \"Our team reads it before you meet.\") : \"Our team reads it this week.\";\n    if (goHouse) { UI.tab = \"house\"; UI.house = \"mine\"; renderMain(); toTop(); } else { renderMain(true); if (kept) { popRow(\"check\"); toast(\"Kept. \" + who); } }\n    if (pend) pend.then(function (r) {\n      if (ok(r) && !r.bare) { var rooms = applyData(r, prev); renderMain(true); }\n    });\n  }\n\n  /* ───────────── the rest of his taps ───────────── */\n  function setTab(t) {\n    UI.tab = t; UI.slot = UI.tab === \"house\" ? UI.slot : \"\";\n    if (t === \"house\" && UI.house === \"ours\") loadOurs();\n    renderMain(); toTop();\n  }\n  function toTop() { var b = document.getElementById(\"apBand\"); if (b && b.scrollIntoView) { try { b.scrollIntoView({ block: \"start\", behavior: reduce ? \"auto\" : \"smooth\" }); } catch (e) { b.scrollIntoView(); } } }\n  function loadOurs() {\n    if (!group() || UI.ours || UI.oursBusy) return;\n    UI.oursBusy = true;\n    post({ action: \"road_ours\" }).then(function (r) { UI.oursBusy = false; if (ok(r) && r.ours) UI.ours = r.ours; if (UI.tab === \"house\") renderMain(true); });\n  }\n  function openPiece() {\n    var p = piece(); if (!p) return;\n    openSheet(pieceSheet());\n    if (!p.opened) { post({ action: \"road_open\", id: p.id }); p.opened = (data && data.today) || \"today\"; p.openedDay = DAYS[new Date().getDay()]; setDone(\"road\"); }\n  }\n  function keepWed() {\n    var ta = $(\"#avWed\"), st = $(\"#avWedS\"), t = ta ? ta.value.trim() : \"\";\n    if (!t) { if (st) st.textContent = \"Write a line first; one is enough.\"; if (ta) ta.focus(); return; }\n    var btn = $('[data-act=\"keepwed\"]'); if (btn) btn.setAttribute(\"disabled\", \"disabled\"); if (st) st.textContent = \"Keeping it.\";\n    post({ action: \"road_saw\", text: t }).then(function (r) {\n      if (ok(r)) { setDone(\"wed\"); setV(\"wedText\", t); UI.drafts.avWed = \"\"; UI.drafts.avWedKept = t; toast(\"Kept in Your Story, in What You Saw.\"); renderMain(true); popRow(\"wed\"); refresh(); }\n      else { if (btn) btn.removeAttribute(\"disabled\"); if (st) st.textContent = \"It did not save. Your words are still here; try again.\"; }\n    });\n  }\n  function keepMade() {\n    var ta = $(\"#avMade\"), st = $(\"#avMadeS\"), t = ta ? ta.value.trim() : \"\";\n    if (!t) { if (st) st.textContent = \"Write a line first; one is enough.\"; if (ta) ta.focus(); return; }\n    var btn = $('[data-act=\"keepmade\"]'); if (btn) btn.setAttribute(\"disabled\", \"disabled\"); if (st) st.textContent = \"Keeping it.\";\n    post({ action: \"road_make\", text: t }).then(function (r) {\n      if (ok(r)) { setV(\"made\", { text: t, when: (data && data.today) || \"today\" }); UI.drafts.avMade = \"\"; renderMain(true); refresh(); }\n      else { if (btn) btn.removeAttribute(\"disabled\"); if (st) st.textContent = \"It did not save. Your words are still here; try again.\"; }\n    });\n  }\n  function sendAns() {\n    var p = piece(), ta = $(\"#avAns\", ovSheet()), st = $(\"#avAnsS\", ovSheet()), t = ta ? ta.value.trim() : \"\";\n    if (!p) return;\n    if (!t) { if (st) st.textContent = \"Write your answer first.\"; return; }\n    var btn = $('[data-act=\"send-ans\"]', ovSheet()); if (btn) btn.setAttribute(\"disabled\", \"disabled\"); if (st) st.textContent = \"Sending.\";\n    post({ action: \"road_answer\", id: p.id, text: t }).then(function (r) {\n      if (ok(r)) { p.answer = { text: t, sent: r.sent || (data && data.today) || \"today\", word: null }; UI.drafts.avAns = \"\"; cache(); ovSheet().innerHTML = pieceSheet(); refresh(); }\n      else { if (btn) btn.removeAttribute(\"disabled\"); if (st) st.textContent = \"It did not send. Your words are still here; nothing has been lost. Try again.\"; }\n    });\n  }\n  function handSend() {\n    if (UI.handBusy) return; UI.handBusy = true; UI.say.hand = \"Sending.\"; ovSheet().innerHTML = handSheet();\n    post({ action: \"road_hand\" }).then(function (r) {\n      UI.handBusy = false;\n      if (ok(r)) { UI.handSent = true; UI.say.hand = \"\"; } else UI.say.hand = \"It did not go through. Tap Send it again, or use the line below if it is urgent.\";\n      ovSheet().innerHTML = handSheet(); refocus(\".av-close\");\n    });\n  }\n  function setting(kind, fn) { return fn; }\n  function rhythm(k) {\n    var S = V().settings = V().settings || {}, was = S.remind; S.remind = k; UI.say.rhythm = \"Saving.\"; ovSheet().innerHTML = settingsSheet();\n    post({ action: \"road_remind\", remind: k }).then(function (r) {\n      if (ok(r)) { UI.say.rhythm = RHYTHM_SAID[k]; if (data) { data.pace = r.pace || data.pace; } cache(); } else { S.remind = was; UI.say.rhythm = MISS; }\n      ovSheet().innerHTML = settingsSheet(); refocus('[data-act=\"rhythm\"][data-v=\"' + k + '\"]');\n    });\n  }\n  function share(k) {\n    var S = V().settings = V().settings || {}; S.shares = S.shares || { path: true, piece: true, practice: true, words: false };\n    S.shares[k] = !S.shares[k]; UI.say.shares = \"Saving.\"; ovSheet().innerHTML = settingsSheet();\n    post({ action: \"road_shares\", shares: S.shares }).then(function (r) {\n      if (ok(r)) { UI.say.shares = \"Kept. Your witness sees \" + (S.shares[k] ? \"\" : \"no longer \") + lc1(SHARES.filter(function (x) { return x[0] === k; })[0][1]) + (S.shares[k] ? \".\" : \".\"); cache(); } else { S.shares[k] = !S.shares[k]; UI.say.shares = MISS; }\n      ovSheet().innerHTML = settingsSheet(); refocus('[data-act=\"share\"][data-k=\"' + k + '\"]');\n    });\n  }\n  function pause() {\n    var S = V().settings = V().settings || {}; S.paused = !S.paused; UI.say.pause = \"Saving.\"; ovSheet().innerHTML = settingsSheet();\n    post({ action: \"road_pause\", paused: S.paused }).then(function (r) {\n      if (ok(r)) { UI.say.pause = S.paused ? \"Kept. Your witness’s notes are paused.\" : \"Kept. Your witness’s notes are back on.\"; cache(); } else { S.paused = !S.paused; UI.say.pause = MISS; }\n      ovSheet().innerHTML = settingsSheet(); refocus('[data-act=\"pause\"]');\n    });\n  }\n  var inviteBusy = false;\n  function invite() {\n    if (inviteBusy) return;\n    var nm = $(\"#avWn\"), em = $(\"#avWe\"), st = $(\"#avWs\"), name = nm ? nm.value.trim() : \"\", email = em ? em.value.trim() : \"\";\n    function s(t) { if (st) st.textContent = t; }\n    if (!name || !email) { s(\"Add their name and email first.\"); return; }\n    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(email)) { s(\"That email does not look right. Check it and send again.\"); if (em) em.focus(); return; }\n    inviteBusy = true; s(\"Sending.\");\n    post({ action: \"road_witness\", role: UI.wf.role, theirName: name, theirEmail: email }).then(function (r) {\n      inviteBusy = false;\n      if (ok(r) && r.limited) { UI.wf.sent = false; UI.wf.open = false; if (data) data.witness = { waiting: false }; cache(); renderMain(true); toast(\"Kept. Our team walks with you.\"); return; }\n      if (ok(r)) { UI.wf.sent = true; UI.wf.open = false; if (data) data.witness = { waiting: true }; cache(); renderMain(true); toast(\"Kept. Until they say yes, our team walks with you.\"); return; }\n      s(r && r.error === \"bad_email\" ? \"That email does not look right. Check it and send again.\" : \"It did not go through. Your words are still here; tap Send the invitation again.\");\n    });\n  }\n  function doNext(act) {\n    if (act === \"go-path\") return setTab(\"path\");\n    if (act === \"letter\") return openLetter();\n    if (act === \"focus-wed\") { if (UI.tab !== \"week\") setTab(\"week\"); var t = $(\"#avWed\"); if (t) { try { t.scrollIntoView({ block: \"center\", behavior: reduce ? \"auto\" : \"smooth\" }); } catch (e) {} t.focus({ preventScroll: true }); } return; }\n    if (act === \"choose\") { ckInit(\"choose\"); openOverlay(ovCk(), ckHtml()); return; }\n    if (act === \"checkin\") { ckInit(\"week\"); openOverlay(ovCk(), ckHtml()); return; }\n    if (act === \"piece\") return openPiece();\n    if (act === \"course\") { var a = $('a[data-act=\"course\"]'); courseTap(); var href = a && a.getAttribute(\"href\"); if (href) window.open(href, \"_blank\", \"noopener\"); return; }\n    if (act === \"story\") { var s = storyRow(); if (s && s.it.href) location.href = s.it.href; return; }\n  }\n  function courseTap() {\n    if (!doneNow().course) { post({ action: \"road_course\" }); setDone(\"course\"); }\n    var v = V(); toast(\"Opens \" + (ctxLabel() ? ctxLabel() + \" in \" : \"\") + (v.course || \"your course\"));\n    renderMain(true); popRow(\"course\");\n  }\n  function openLetter() {\n    var n = unreadNote() || newestNote(); if (!n) return;\n    openSheet(letterSheet());\n    if (!n.read) { post({ action: \"road_note_read\", written: n.written }); n.read = \"today\"; n.readDay = DAYS[new Date().getDay()]; UI.letterNow = true; }\n  }\n  window.APHisRoad = { build: BUILD, render: render, tab: function (t) { setTab(t); }, reveal: function () { if (UI.tab !== \"week\") setTab(\"week\"); var m = $(\"#avMain\"); if (m) toTop(); }, show: function (place, scroll) { UI.tab = \"house\"; UI.house = \"mine\"; if (place === \"stones\") UI.slot = \"stones\"; renderMain(); if (scroll) toTop(); } };\n\n  /* ───────────── clicks: one listener for the three views and the overlays, one for the page's band ───────────── */\n  function wire() {\n    if (wire.done) return; wire.done = true;\n    host.addEventListener(\"click\", function (ev) {\n      var t = ev.target.closest ? ev.target.closest(\"[data-act]\") : null; if (!t || !data) return;\n      var act = t.getAttribute(\"data-act\"), c = UI.ck, isA = t.tagName === \"A\";\n      if (!isA || act === \"listen\") { /* links open where they lead */ }\n      if (act === \"listen\") { var p = piece(); if (p && !p.opened) { post({ action: \"road_open\", id: p.id }); p.opened = (data && data.today) || \"today\"; p.openedDay = DAYS[new Date().getDay()]; setDone(\"road\"); } return; }\n      if (act === \"course\") { courseTap(); return; }\n      if (act === \"story\" || act === \"begin\") return;\n      if (act === \"stones\") { ev.preventDefault(); window.APHisRoad.show(\"stones\", true); return; }\n      ev.preventDefault();\n      switch (act) {\n        case \"tab\": setTab(t.getAttribute(\"data-tab\")); break;\n        case \"go-path\": setTab(\"path\"); break;\n        case \"toggle\": var k = t.getAttribute(\"data-k\"); UI.open[k] = !UI.open[k]; if (k === \"invite\") UI.wf.open = !!UI.open[k]; renderMain(true); refocus('[data-act=\"toggle\"][data-k=\"' + k + '\"]'); break;\n        case \"welcomed\": UI.welcomed = true; if (data) { data.ui = data.ui || {}; data.ui.welcomed11 = \"open\"; } post({ action: \"road_ui\", key: \"welcomed11\", state: \"open\" }); cache(); renderMain(); toast(\"This Week is yours. Start at the top.\"); break;\n        case \"piece\": openPiece(); break;\n        case \"checkin\": ckInit(\"week\"); openOverlay(ovCk(), ckHtml()); break;\n        case \"choose\": ckInit(\"choose\"); openOverlay(ovCk(), ckHtml()); break;\n        case \"close-ck\": closeCk(); break;\n        case \"close-sheet\": closeSheet(); break;\n        case \"ck-path\": c.path = t.getAttribute(\"data-v\"); ckMark(); ckRedraw(); break;\n        case \"ck-word\": c.word = c.word === t.getAttribute(\"data-v\") ? null : t.getAttribute(\"data-v\"); if (c.path) ckMark(); ckRedraw(); break;\n        case \"ck-more\": c.moreWords = true; ckRedraw(); break;\n        case \"ck-helped\": ckHelped(t.getAttribute(\"data-v\")); break;\n        case \"ck-why\": ckWhy(t.getAttribute(\"data-v\")); break;\n        case \"ck-how\": ckHow(t.getAttribute(\"data-v\")); break;\n        case \"ck-prac\": ckPrac(Number(t.getAttribute(\"data-v\"))); break;\n        case \"ck-when\": ckWhen(t.getAttribute(\"data-v\")); break;\n        case \"ck-next\": case \"ck-skip\": ckNext(); break;\n        case \"ck-back\": c.step = Math.max(1, c.step - 1); ckRedraw(); break;\n        case \"ck-finish\": finishCk(false); break;\n        case \"ck-house\": finishCk(true); break;\n        case \"house\": UI.house = t.getAttribute(\"data-h\"); if (UI.house === \"ours\") loadOurs(); renderMain(true); refocus('[data-act=\"house\"][data-h=\"' + UI.house + '\"]'); break;\n        case \"keepwed\": keepWed(); break;\n        case \"keepmade\": keepMade(); break;\n        case \"offer\": toast(\"Offering this isn’t open yet. It stays yours, and our team will tell you when it is.\"); break;\n        case \"letter\": openLetter(); break;\n        case \"hand\": UI.handSent = false; UI.say.hand = \"\"; openSheet(handSheet()); break;\n        case \"hand-send\": handSend(); break;\n        case \"settings\": openSheet(settingsSheet()); break;\n        case \"rhythm\": rhythm(t.getAttribute(\"data-v\")); break;\n        case \"share\": share(t.getAttribute(\"data-k\")); break;\n        case \"pause\": pause(); break;\n        case \"welcome\": openSheet(welcomeSheet()); break;\n        case \"send-ans\": sendAns(); break;\n        case \"wrole\": UI.wf.role = t.getAttribute(\"data-v\"); $$('[data-act=\"wrole\"]').forEach(function (b) { b.setAttribute(\"aria-checked\", b === t ? \"true\" : \"false\"); }); break;\n        case \"invite\": invite(); break;\n        case \"wchange\": UI.wf.sent = false; UI.wf.open = true; UI.open.invite = true; renderMain(true); break;\n        case \"slot\": var sk = t.getAttribute(\"data-k\"); UI.slot = UI.slot === sk ? \"\" : sk; renderMain(true); refocus('[data-act=\"slot\"][data-k=\"' + sk + '\"]'); break;\n      }\n    });\n    host.addEventListener(\"input\", function (ev) { var t = ev.target; if (t && t.id && /^av/.test(t.id)) UI.drafts[t.id] = t.value; });\n    var band = document.getElementById(\"apBand\");\n    if (band) band.addEventListener(\"click\", function (ev) {\n      var t = ev.target.closest ? ev.target.closest(\"[data-tab],[data-set],[data-next]\") : null; if (!t || !data) return;\n      ev.preventDefault();\n      if (t.hasAttribute(\"data-tab\")) setTab(t.getAttribute(\"data-tab\"));\n      else if (t.hasAttribute(\"data-set\")) openSheet(settingsSheet());\n      else if (t.hasAttribute(\"data-next\")) doNext(t.getAttribute(\"data-next\"));\n    });\n    document.addEventListener(\"keydown\", trap);\n    document.addEventListener(\"focusin\", function (ev) {\n      var ov = ovSheet() && ovSheet().classList.contains(\"av-open\") ? ovSheet() : ovCk() && ovCk().classList.contains(\"av-open\") ? ovCk() : null;\n      if (!ov || ov.contains(ev.target)) return;\n      var f = $(\"textarea,.av-obody button,.av-obody input,button\", ov); if (f && f.focus) f.focus({ preventScroll: true });\n    });\n    [\"ap:states\", \"ap:stones\", \"ap:courses\", \"ap:news\"].forEach(function (name) {\n      document.addEventListener(name, function (ev) {\n        if (name === \"ap:news\") UI.news = (ev && ev.detail) || [];\n        clearTimeout(wire.t); wire.t = setTimeout(function () { if (data && !anyOpen()) renderMain(true); }, 250);\n      });\n    });\n  }\n\n  /* ───────────── drawing ───────────── */\n  function ensureShell() {\n    if ($(\"#avRoot\")) return;\n    host.innerHTML = '<div class=\"av\" id=\"avRoot\"><div class=\"av-main\" id=\"avMain\"></div><div class=\"av-scrim\" id=\"avScrim\"></div><section class=\"av-ov\" id=\"avCk\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Check in with your witness\"></section><section class=\"av-ov\" id=\"avSheet\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Details\"></section><div class=\"av-toast\" id=\"avToast\" role=\"status\" aria-live=\"polite\"></div></div>';\n    var sc = $(\"#avScrim\"); if (sc) sc.addEventListener(\"click\", function () { if (ovSheet().classList.contains(\"av-open\")) closeSheet(); else closeCk(); });\n  }\n  function renderMain(keep) {\n    if (!data) return;\n    ensureShell(); wire();\n    var y = window.pageYOffset, sc = scroller(), sy = sc ? sc.scrollTop : 0;\n    stashSlots();\n    var m = $(\"#avMain\"); m.innerHTML = UI.tab === \"week\" ? viewWeek() : UI.tab === \"house\" ? viewHouse() : viewPath();\n    fillSlots();\n    paintBand();\n    host.style.minHeight = \"\";\n    if (keep) { if (sc) sc.scrollTop = sy; else if (Math.abs(window.pageYOffset - y) > 1) window.scrollTo(0, y); }\n  }\n  function render(d) {\n    data = d;\n    if (data && data.v11 && data.v11.notes) UI.letterNow = false;\n    window.apRoadBand = { bare: !!d.bare, band: d.band || null, step: null, since: [], where: whereText() };\n    renderMain(true);\n  }\n  var LOCAL = { ok: true, bare: true, ui: {}, band: null, v11: null };\n\n  /* AP-SHIP 1, line 12: the page counts the rules the browser accepted against the stamped count; short, it tells the Front Desk once per build (kept in this browser so it never repeats) and the desk shows one line with the link. */\n  function selfCheck() {\n    if (location.pathname.indexOf(\"/author\") >= 0 || window.top !== window) return;\n    var short = [], got = 0, want = 0;\n    Object.keys(RULES).forEach(function (k) {\n      var st = document.querySelector('style[data-ap-sheet=\"' + k + '\"]'), n = -1;\n      try { n = st && st.sheet ? st.sheet.cssRules.length : -1; } catch (e) { n = -1; }\n      got += Math.max(0, n); want += RULES[k];\n      if (n < RULES[k]) short.push(k + \" \" + n + \" of \" + RULES[k]);\n    });\n    if (!short.length) return;\n    var key = \"ap_check_road_\" + BUILD;\n    try { if (localStorage.getItem(key)) return; localStorage.setItem(key, String(Date.now())); } catch (e) {}\n    fetch(DESK_URL, { method: \"POST\", headers: { \"Content-Type\": \"text/plain;charset=utf-8\" }, body: JSON.stringify({ action: \"page_check\", page: location.pathname, name: \"Your Page (road.js)\", build: BUILD, accepted: got, expected: want, detail: short.join(\", \"), ua: String(navigator.userAgent || \"\").slice(0, 120) }) }).catch(function () {});\n  }\n  function getJSON(path) { return fetch(path, { credentials: \"include\", headers: { Accept: \"application/json\" } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }\n  function whoAmI() {\n    return getJSON(\"/api/user_stats\").then(function (j) {\n      var m = (j && j.me) || {};\n      var a = { id: m.id || m._id || m.user_id || \"\", email: (m.email || m.user_email || \"\").toLowerCase(), name: ((m.first_name || \"\") + \" \" + (m.last_name || \"\")).trim() || m.username || \"\", first: m.first_name || \"\" };\n      if (a.id && a.email && a.first) return a;\n      return getJSON(\"/api/user/me\").then(function (x) {\n        var u = (x && x.user) || x || {};\n        if (!a.id) a.id = u.id || u._id || \"\";\n        if (!a.email) a.email = String(u.email || u.user_email || \"\").toLowerCase();\n        if (!a.name) a.name = ((u.first_name || \"\") + \" \" + (u.last_name || \"\")).trim() || u.username || \"\";\n        if (!a.first) a.first = u.first_name || \"\";\n        return a;\n      });\n    });\n  }\n\n  window.APHisRoad.render = render;\n  whoAmI().then(function (a) {\n    if (!a || !a.email) { render(LOCAL); return; }\n    me = a;\n    var cached = null; try { var c = JSON.parse(localStorage.getItem(CACHE) || \"null\"); if (c && c.email === a.email && c.data && Date.now() - c.at < 7 * 864e5) cached = c.data; } catch (e) {}\n    if (cached && cached.build !== BUILD) cached = null; /* a draw kept by an earlier build has none of this build's parts */\n    if (cached && cached.week && cached.week.start && Date.now() - Date.parse(cached.week.start + \"T12:00:00\") >= 14 * 864e5) cached = null;\n    if (cached && !cached.v11) cached = null;\n    if (cached) render(cached);\n    post({ action: \"road\" }).then(function (r) {\n      if (r && r.ok) { render(r); cache(); setTimeout(selfCheck, 0); }\n      else if (!cached) render(LOCAL);\n    });\n  });\n})();\n";

/* ═══════════════ build 12: Your Growth 4.0 (the facilitator's room) ═══════════════
 * Ruled Nov 2, 2026 as the mockup v8.5. growthFor_ now returns the room, the week's piece, his own marks (read from his Answers rows, not the sheet's global marks),
 * what the room carried, The Shelf, Who We Read, his Craft and his lanes. New Answers kinds: after, less, voice, setaside, team, notice (Answers columns: when, who, entry id, kind, text, answer, room, build).
 * A Lanes tab (the twelve lanes of the mockup) and the Config lines are made once by ensureBuild12_. The 6:00 PM release (releaseTick) is switched by Config "auto release" (off until the hold is proven on the Front Desk).
 * Hold cards: research:hold:<entry id> on the Front Desk's Actions tab (rule RE15); a card marked done by hand is a hold. */
var SCRIPT_BUILD = '12.1';
var LANES_HEAD_12 = ['lane', 'what it covers', 'voices', 'Sources disciplines folded in', 'added'];
var LANES_12 = [
  ['Narrative trauma care', 'How a man’s story holds his wounds', 'Dan Allender, Diane Langberg, Aundi Kolber', 'Narrative trauma care; Story work and attachment'],
  ['Shame and being known', 'Why men hide, and what it takes to be known', 'Curt Thompson, Chuck DeGroat', 'Shame and being known'],
  ['How the brain and body heal', 'In relationship, and over time', 'Dan Siegel, Hillary McBride, Lisa Feldman Barrett', 'IPNB'],
  ['Gospel identity', 'Who a man is in Christ before he does anything', 'Timothy Keller, Jen Wilkin, John Lynch', 'Gospel identity'],
  ['Group facilitation', 'How a room is held, opened and closed', 'Irvin Yalom, Priya Parker', 'Group facilitation'],
  ['Communication', 'Writing a story, reading a man, your voice in the room', 'Parker Palmer, Brené Brown, Chris Voss', 'Communication: writing; Communication: reading; Communication: voice in the room; Strengths and assessments; Body language'],
  ['Mindset', 'Training the mind to hold under load', 'Jocko Willink, Corie Weathers, Kelly McGonigal', 'Mindset'],
  ['Leadership', 'Leading people, and leading yourself first', 'Ruth Haley Barton, Andy Crouch, Pete Scazzero', 'Leadership; Transitions; The standard of service'],
  ['Sexual brokenness and recovery', 'The road out, for a man and those who love him', 'Jay Stringer, Juli Slattery, Pure Desire', 'Sexual brokenness and recovery'],
  ['What trains the art', 'Poems, music and craft that train the eye and ear', 'Malcolm Guite, Makoto Fujimura', 'What trains the art; the music rows'],
  ['The body', 'Sleep, food and strength', 'Andrew Huberman, Peter Attia, Gabrielle Lyon', 'The body: sleep, nutrition, fitness'],
  ['Hebraic teaching', 'Reading the text in its own world', 'Chad Foster, Lois Tverberg, BibleProject', 'Hebraic teaching']
];
var CONFIG_12 = [
  ['auto release', 'off', 'build 12: on = every candidate not held is released at 6:00 PM Central (releasedBy "automatic"); a hold is a research:hold card marked done on the Front Desk. Off until the Hold it button is proven live.'],
  ['growth page link', 'https://www.ancientpathcoaching.com/your-growth', 'build 12: the address in the one-line notice a facilitator gets when his room’s piece lands'],
  ['course picture bf', 'https://raw.githubusercontent.com/johnlsherrod/ancient-path/main/pictures/course-bf.jpg', 'build 12: the picture on the course card for Breaking Free (the repo’s pictures folder); blank = a plain block'],
  ['course picture kbj', 'https://raw.githubusercontent.com/johnlsherrod/ancient-path/main/pictures/course-kbj.jpg', 'build 12: the picture on the course card for Known by Jesus']
];
function ensureBuild12_(ss) {
  var props = PropertiesService.getScriptProperties(), did = [];
  if (props.getProperty('b12') !== '1') {
    var lt = ss.getSheetByName('Lanes');
    if (!lt) { lt = ss.insertSheet('Lanes'); lt.getRange(1, 1, 1, LANES_HEAD_12.length).setValues([LANES_HEAD_12]); lt.setFrozenRows(1); did.push('Lanes tab'); }
    if (lt.getLastRow() < 2) { lt.getRange(2, 1, LANES_12.length, 4).setValues(LANES_12); lt.getRange(2, 5, LANES_12.length, 1).setValues(LANES_12.map(function () { return ['Nov 2, 2026 · build 12']; })); did.push('12 lanes'); }
    var sh = ss.getSheetByName('Config');
    if (sh) {
      var have = {}; if (sh.getLastRow() >= 1) sh.getRange(1, 1, sh.getLastRow(), 1).getValues().forEach(function (r) { have[String(r[0] || '').trim().toLowerCase()] = 1; });
      CONFIG_12.forEach(function (c) { if (!have[c[0]]) { sh.appendRow([c[0], c[1], c[2]]); did.push('Config ' + c[0]); } });
    }
    answers_(ss);
    props.setProperty('b12', '1');
    log_(ss, 'build 12', 'made: ' + (did.join(', ') || 'nothing new'));
  }
  if (props.getProperty('b12t') !== '1') {
    try { var made = releaseInstallTrigger_(); props.setProperty('b12t', '1'); log_(ss, 'build 12', 'the 6:00 PM release trigger ' + (made ? 'installed' : 'was already there'), 'releaseTick; it does nothing while Config "auto release" is off'); }
    catch (xt) { log_(ss, 'build 12', 'the 6:00 PM release trigger could not be installed from here (run setupRelease once in the editor)', String(xt && xt.message || xt).slice(0, 200)); }
  }
}
function releaseInstallTrigger_() {
  var have = ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'releaseTick'; });
  if (!have) ScriptApp.newTrigger('releaseTick').timeBased().atHour(18).nearMinute(0).everyDays(1).inTimezone(RE_TZ).create();
  return !have;
}
/** Run once from the editor only if the page could not install the trigger itself (the Log says so). */
function setupRelease() { PropertiesService.getScriptProperties().deleteProperty('b12t'); ensureBuild12_(SpreadsheetApp.openById(RE_SHEET_ID)); return 'done'; }

/** Our team (an admin with no room of his own on People) reads the room as the room: the first room on the Rooms tab that has a night. A facilitator with no room stays without one. */
function teamRoom_(who) {
  if (!who || who.room || who.role !== 'admin') return who;
  try {
    var sh = deskSheet_().getSheetByName('Rooms'); if (!sh || sh.getLastRow() < 2) return who;
    var H = headerIndex_(sh), names = sh.getRange(2, H['room'] + 1, sh.getLastRow() - 1, 1).getValues();
    for (var i = 0; i < names.length; i++) { var nm = String(names[i][0] || '').trim(); if (nm && roomRow_({ room: nm })) { var w = {}; for (var k in who) w[k] = who[k]; w.room = nm; return w; } }
  } catch (e) {}
  return who;
}
/** The course a room walks: the Rooms tab's course cell when it names one on the Course map (by name or initials); otherwise the course whose name the room's own name begins with (the cell may hold the school's own slug); otherwise the first course on the map. */
function courseForRoom_(rr, map) {
  if (!rr) return null;
  var c = courseOf_(rr.course, map); if (c) return c;
  var rn = String(rr.room || '').toLowerCase().replace(/\s+/g, ' ');
  var hit = courseList_(map).filter(function (x) { return rn.indexOf(x.name.toLowerCase().replace(/\s+/g, ' ')) === 0; })[0];
  return hit || courseList_(map)[0] || null;
}

/* ---- his own marks, from his Answers rows ---- */
function answersFor_(ss, email) {
  var sh = ss.getSheetByName('Answers'); if (!sh || sh.getLastRow() < 2) return [];
  var em = String(email || '').toLowerCase().trim(), out = [];
  sh.getRange(2, 1, sh.getLastRow() - 1, 8).getValues().forEach(function (r) {
    if (String(r[1] || '').toLowerCase().trim() !== em) return;
    out.push({ day: dayOf_(r[0]), id: String(r[2] || ''), kind: String(r[3] || ''), text: String(r[4] || ''), more: String(r[5] || '') });
  });
  return out;
}
function lastOf_(arr, fn) { for (var i = arr.length - 1; i >= 0; i--) if (fn(arr[i])) return arr[i]; return null; }
function wordOf_(q) { var k = lineKey_(q); return k === 'Know' ? 'Knowledge' : k === 'Read' ? 'Understanding' : 'Wisdom'; }
function whyOf_(place) { var m = String(place || '').match(/\bany (?:week|night|time|day)[^;]*/i); return m ? m[0].replace(/[.\s]+$/, '') : ''; }
function stripWeek_(t) { return String(t || '').replace(/^\s*week\s*\d+\s*[—–:\-]\s*/i, '').trim(); }

function sourcesOut_(ss) {
  var sh = ss.getSheetByName('Sources'); if (!sh || sh.getLastRow() < 2) return { lanes: [], music: [] };
  var order = [], by = {}, music = [];
  sh.getRange(2, 1, sh.getLastRow() - 1, SC.where).getValues().forEach(function (r) {
    var disc = String(r[SC.discipline - 1] || '').trim(), voice = String(r[SC.voice - 1] || '').trim(), kind = String(r[SC.kind - 1] || '').trim().toLowerCase(), where = String(r[SC.where - 1] || '').trim();
    if (!voice) return;
    if (kind === 'music') { music.push(voice + (where ? ' · ' + where.replace(/\s*\([^)]*\)\s*$/, '') : '')); return; }
    if (!disc) return;
    var name = /^ipnb$/i.test(disc) ? 'How the brain and body heal' : disc;
    if (!by[name]) { by[name] = []; order.push(name); }
    by[name].push([voice, kind === 'shelf' ? 'book' : kind === 'youtube' ? 'video' : (kind || 'blog')]);
  });
  return { lanes: order.map(function (n) { return [n, by[n]]; }), music: music };
}
function lanesOut_(ss) {
  var sh = ss.getSheetByName('Lanes'); if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, 3).getValues().map(function (r) { return { lane: String(r[0] || '').trim(), line: String(r[1] || '').trim(), voices: String(r[2] || '').trim() }; }).filter(function (x) { return x.lane; });
}
/** Room Signals: the latest week the room's signals carry words for, up to three, each a construct and the words. Null when there are none. */
function carriedOut_(who, cfg) {
  try {
    var id = cfg['room signals sheet id'] || deskConfig_('room signals sheet id'); if (!id) return null;
    var sh = SpreadsheetApp.openById(id).getSheetByName('Signals'); if (!sh || sh.getLastRow() < 2) return null;
    var H = headerIndex_(sh), col = H['signal (the room\'s words, no names)'] !== undefined ? H['signal (the room\'s words, no names)'] : H['signal'];
    if (col === undefined || H['construct'] === undefined || H['week'] === undefined) return null;
    var rows = [];
    sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues().forEach(function (r) {
      var c = String(r[H['construct']] || '').trim(), t = String(r[col] || '').trim(), w = parseInt(String(r[H['week']] || '').replace(/\D/g, ''), 10);
      if (H['cohort'] !== undefined && who.room && String(r[H['cohort']] || '').trim() && !sameRoom_(r[H['cohort']], who.room)) return;
      if (c && t && !isNaN(w)) rows.push({ c: c, t: t, w: w });
    });
    if (!rows.length) return null;
    var top = Math.max.apply(null, rows.map(function (x) { return x.w; })), seen = {}, items = [];
    rows.filter(function (x) { return x.w === top; }).forEach(function (x) { if (!seen[x.c] && items.length < 3) { seen[x.c] = 1; items.push({ title: x.c, text: x.t }); } });
    return { week: top, items: items };
  } catch (e) { return null; }
}

/* ---- the page's data ---- */
function growthFor_(who) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
  try { ensureBuild12_(ss); } catch (xb) {}
  var lanes = lanes_(ss), map = courseMap_(ss), email = String(who.email || '').toLowerCase().trim(), admin = who.role === 'admin', today = today_();
  var every = entries_(ss).filter(function (e) { return e.status !== 'retired'; });
  var byId = {}; every.forEach(function (e) { byId[e.id] = e; });
  var released = every.filter(function (e) { return e.status === 'released'; }).sort(function (a, b) { return b.written.localeCompare(a.written) || b.id.localeCompare(a.id); });
  var mine = answersFor_(ss, email);
  var ui = {}; try { roadRows_(ss, email).forEach(function (r) { if (r.what === 'ui' && r.id && r.id.indexOf('g-') === 0) ui[r.id] = r.text; }); } catch (xu) {}
  var rr = roomRow_(who), nxt = rr ? nightOnOrAfter_(rr, today) : null;
  var course = courseForRoom_(rr, map), abbr = course ? course.abbr : '';
  var hour = rr ? hourOf_(rr.meets) : '';
  function titleOf(week) { var t = ''; (map.rows || []).forEach(function (r) { if (course && sameCourse_(r.course, course.name) && String(r.unit).replace(/\D/g, '') === String(week)) t = stripWeek_(r.name); }); return t; }
  function weekLineOf(week) { var t = ''; (map.rows || []).forEach(function (r) { if (course && sameCourse_(r.course, course.name) && String(r.unit).replace(/\D/g, '') === String(week)) t = String(r.weekLine || ''); }); return t; }
  function fits(e, week) { if (!abbr || !week) return false; return weekPairs_(e.week, map)[abbr.toLowerCase()] === Number(week); }
  var room = null;
  if (nxt && course) room = { name: rr.room, course: course.name, abbr: abbr, week: Number(nxt.week) || 0, title: titleOf(nxt.week), night: fmtDay_(nxt.date, 'EEEE, MMMM d'), weekday: fmtDay_(nxt.date, 'EEEE'), date: nxt.date, hour: hour, weekLine: weekLineOf(nxt.week), pic: String(cfg['course picture ' + abbr.toLowerCase()] || '').trim() };
  var team = room ? released.filter(function (e) { return fits(e, room.week); })[0] || null : null;
  // this week's marks: the seven days up to his room's night
  var winFrom = addDays_(nxt ? nxt.date : today, -6);
  var bringId = '', no = false, teamId = team ? team.id : '';
  mine.forEach(function (r) {
    if (r.day < winFrom) return;
    if (r.kind === 'bring') { bringId = r.id; no = false; }
    else if (r.kind === 'setaside' || r.kind === 'notforme') { if (teamId && r.id === teamId) { bringId = ''; no = true; } else if (r.id === bringId) bringId = ''; }
  });
  var shownId = bringId || teamId, choice = bringId ? 'bring' : (no ? 'no' : '');
  var opened = choice === 'bring' || mine.some(function (r) { return r.kind === 'open' && r.id === shownId && r.day >= winFrom; });
  // the night just gone: did he bring something, and what did the room do with it
  var after = null, prev = rr ? nightOnOrBefore_(rr, addDays_(today, -1)) : null;
  if (prev && daysAgo_(prev.date) <= 6) {
    var lo = addDays_(prev.date, -6), br = lastOf_(mine, function (r) { return r.kind === 'bring' && r.day >= lo && r.day <= prev.date; });
    if (br && !lastOf_(mine, function (r) { return (r.kind === 'setaside' || r.kind === 'notforme') && r.id === br.id && r.day >= br.day; }) && byId[br.id]) {
      var ar = lastOf_(mine, function (r) { return r.kind === 'after' && r.id === br.id && r.day >= prev.date; });
      if (!ar || !team) after = { id: br.id, kept: !!ar, word: ar ? ar.more : '', line: ar ? ar.text : '', night: fmtDay_(prev.date, 'MMM d'), weekday: fmtDay_(prev.date, 'EEEE'), yesterday: daysAgo_(prev.date) === 1, piece: pieceOut_(byId[br.id], lanes) };
    }
  }
  var shown = after ? null : (shownId && byId[shownId] ? pieceOut_(byId[shownId], lanes) : null);
  if (shown) shown.why = whyOf_(byId[shownId].place);
  // The Shelf, with his own state on each line
  var stateOf = {};
  mine.forEach(function (r) {
    if (r.kind === 'bring') { var n = rr ? nightOnOrAfter_(rr, r.day) : null; stateOf[r.id] = 'Brought to the room ' + fmtDay_(n ? n.date : r.day, 'MMM d'); }
    else if (r.kind === 'setaside' || r.kind === 'notforme') stateOf[r.id] = 'Not needed ' + fmtDay_(r.day, 'MMM d');
    else if (r.kind === 'open') stateOf[r.id] = 'Opened ' + fmtDay_(r.day, 'MMM d');
  });
  var shelf = released.slice(0, 150).map(function (e) { var p = pieceOut_(e, lanes); p.state = stateOf[e.id] || ''; p.why = whyOf_(e.place); return p; });
  // his Craft: the latest word on each piece decides where it sits
  var lastBy = {}; mine.forEach(function (r) { if (r.kind === 'bring' || r.kind === 'setaside' || r.kind === 'notforme') lastBy[r.id] = r; });
  var brought = [], aside = [];
  Object.keys(lastBy).forEach(function (id) {
    var r = lastBy[id], e = byId[id]; if (!e) return;
    if (r.kind === 'bring') {
      var n = rr ? nightOnOrAfter_(rr, r.day) : null, nd = n ? n.date : r.day;
      var ar2 = lastOf_(mine, function (x) { return x.kind === 'after' && x.id === id && x.day >= r.day; });
      brought.push({ id: id, word: wordOf_(e.question), claim: e.claim, day: r.day, label: 'Brought to the ' + fmtDay_(nd, 'MMM d') + ' room', said: ar2 ? ar2.more : '', line: ar2 ? ar2.text : '' });
    } else aside.push({ id: id, word: wordOf_(e.question), claim: e.claim, day: r.day, label: 'Not needed ' + fmtDay_(r.day, 'MMM d') });
  });
  brought.sort(function (a, b) { return b.day.localeCompare(a.day); }); aside.sort(function (a, b) { return b.day.localeCompare(a.day); });
  var lessOn = {}; mine.forEach(function (r) { if (r.kind === 'less') lessOn[r.text] = r.more === 'on'; });
  var notice = 'email'; mine.forEach(function (r) { if (r.kind === 'notice') notice = r.text === 'none' ? 'none' : 'email'; });
  var coming = every.filter(function (e) { return /event|training|conference|workshop/i.test(e.kind) && e.status === 'released'; }).map(function (e) { return { id: e.id, claim: e.claim, voice: voiceOf_(e.source), link: e.link, cost: e.cost }; });
  var menUrl = ''; try { if (who.room) menUrl = witnessUrl_(cfg, witnessLeaderToken_(ss, who)); } catch (xm) {}
  return {
    ok: true, build: RE_BUILD, script: SCRIPT_BUILD, growth: GROWTH_BUILD, ui: ui,
    who: { name: who.name, email: who.email, role: who.role, room: who.room, first: !ui['g-welcomed'], notice: notice },
    room: room, team: team ? { id: team.id } : null, piece: shown, mine: { choice: choice, opened: opened, swap: !!(bringId && bringId !== teamId) },
    after: after, carried: carriedOut_(who, cfg), menUrl: menUrl,
    release: admin && String(cfg['auto release'] || 'off').toLowerCase() === 'on' ? { on: true, hour: '6:00 PM' } : null,
    shelf: shelf, shelfCount: released.length, sources: sourcesOut_(ss), coming: coming,
    craft: { brought: brought, aside: aside }, lanes: lanesOut_(ss), less: Object.keys(lessOn).filter(function (k) { return lessOn[k]; }),
    notices: { email: true, text: false }
  };
}

/* ---- his answers ---- */
var AFTER_WORDS_ = { opened: 1, quiet: 1, none: 1 };
function deskCard_(key, owner, doThis, forWhom, because, link, rule) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getLastRow() > 1 ? sh.getDataRange().getValues() : [];
    for (var i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) return false;
    var row = []; row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = owner; row[H['do this']] = doThis; row[H['for']] = forWhom; row[H['because']] = because; row[H['link']] = link || ''; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['done at']] = ''; row[H['rule']] = rule;
    for (var c = 0; c < sh.getLastColumn(); c++) if (row[c] === undefined) row[c] = '';
    sh.appendRow(row); return true;
  } catch (x) { return false; }
}
function teamName_() { var a = people_().filter(function (p) { return p.role === 'admin'; })[0]; return a ? (a.name || a.email) : 'John Sherrod'; }
function growthAnswer_(who, b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), kind = String(b.kind || ''), id = String(b.id || '').slice(0, 40);
  var text = String(b.text || '').replace(/\s+$/, '').slice(0, 1500), ans = String(b.answer || '').slice(0, 200), email = String(who.email || '').toLowerCase().trim();
  var row = function (i, k, t, a) { answers_(ss).appendRow([stamp_(new Date()), email, i, k, t, a, who.room, RE_BUILD]); };
  if (kind === 'after') {
    var e = findEntry_(ss, id); if (!AFTER_WORDS_[ans]) throw { code: 'bad_answer' };
    row(id, 'after', text, ans);
    // the room's side of it: one Signals row, no names (Room Signals reads these)
    try {
      var sid = readConfig_(ss)['room signals sheet id'] || deskConfig_('room signals sheet id');
      if (sid && who.room) {
        var ssh = SpreadsheetApp.openById(sid).getSheetByName('Signals'), H = headerIndex_(ssh), lr = lastRoom_(who) || { week: '', day: stamp_(new Date()) }, sr = [];
        sr[H['cohort']] = who.room; sr[H['week']] = lr.week; sr[H['session']] = lr.day; sr[H['section opened']] = '';
        sr[H['signal (the room\'s words, no names)']] = text; sr[H['construct']] = e.construct && !/none in the registry/i.test(e.construct) ? e.construct : ''; sr[H['kind']] = 'facilitator, after the room';
        sr[H['speaks to it (our shelf)']] = e.move; sr[H['what the facilitator did with it']] = ({ opened: 'It opened something', quiet: 'It landed quietly', none: 'We did not get to it' })[ans]; sr[H['course move it suggests']] = ''; sr[H['source page']] = 'Your Growth'; sr[H['coded']] = '';
        for (var c = 0; c < ssh.getLastColumn(); c++) if (sr[c] === undefined) sr[c] = '';
        ssh.appendRow(sr);
      }
    } catch (xs) { log_(ss, 'web', 'after: signals row not written', String(xs).slice(0, 200)); }
  } else if (kind === 'setaside') {
    var e2 = findEntry_(ss, id); setDesk_(ss, e2, 'notforme ' + today_()); row(id, 'setaside', text, ans);
  } else if (kind === 'less') {
    var ln = text, ok = lanesOut_(ss).some(function (l) { return l.lane === ln; }); if (!ok) throw { code: 'bad_lane' };
    row('', 'less', ln, ans === 'on' ? 'on' : 'off');
  } else if (kind === 'voice') {
    if (!text) throw { code: 'empty' };
    row('', 'voice', text, '');
    deskCard_('research:voice:' + email + ':' + stamp_(new Date()), teamName_(), 'Read the voice ' + (who.name || email) + ' named, and tell him which lane it joins or why it waits.', 'Name a Voice · Your Growth', text.slice(0, 400), 'mailto:' + email, 'RE16');
  } else if (kind === 'team') {
    if (!text) throw { code: 'empty' };
    row('', 'team', text, '');
    deskCard_('research:team:' + email + ':' + stamp_(new Date()), teamName_(), 'Answer ' + (who.name || email) + '’s question about his room.', 'Ask Our Team · Your Growth', text.slice(0, 400), 'mailto:' + email, 'RE16');
  } else if (kind === 'notice') {
    row('', 'notice', ans === 'none' ? 'none' : 'email', '');
  } else throw { code: 'bad_kind' };
  return { ok: true };
}

/* ---- Ask About Your Room: the shelf's own words; no fixed reply ---- */
function askStem_(w) { return w.replace(/(ings?|ed|es|s)$/, ''); }
function askMatches_(text, shelf) {
  var stop = ['the', 'and', 'our', 'room', 'stuck', 'with', 'that', 'for', 'about', 'after', 'when', 'they', 'them', 'men'];
  var words = (String(text).toLowerCase().match(/[a-z’']{3,}/g) || []).filter(function (w) { return stop.indexOf(w) < 0; }).map(askStem_);
  if (!words.length) return [];
  return shelf.map(function (e) {
    var hi = (e.claim + ' ' + e.move + ' ' + (e.construct || '')).toLowerCase(), lo = [e.beside, e.ours, e.cut, e.road, e.todo, e.question2, e.place, e.source, e.quotes].join(' ').toLowerCase(), sc = 0;
    words.forEach(function (w) { if (hi.indexOf(w) >= 0) sc += 3; if (lo.indexOf(w) >= 0) sc += 1; });
    return [sc, e];
  }).filter(function (x) { return x[0] > 0; }).sort(function (a, b) { return b[0] - a[0]; }).map(function (x) { return x[1]; });
}
function askShelf_(who, b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var text = String(b.text || '').trim().slice(0, 400);
  if (!text) throw { code: 'empty' };
  var shelf = entries_(ss).filter(function (e) { return e.status === 'released'; }).sort(function (a, b2) { return b2.written.localeCompare(a.written); });
  var matches = askMatches_(text, shelf), key = claudeKey_(), out = { ok: true, ids: [], question: '' }, detail = '', pick = '';
  if (key && shelf.length) {
    var compact = shelf.slice(0, 60).map(function (e) { return e.id + ' | ' + voiceOf_(e.source) + ' | ' + e.question + ' | ' + e.claim + ' | move: ' + e.move; }).join('\n');
    var system = 'You help a facilitator of a Christian men\'s group prepare for his next room. Pick the ONE entry id on the shelf that best fits what the room is stuck on, and write ONE question the facilitator could ask the room, plain and clear, in American spelling, never the word "brother", never a man\'s name. If nothing on the shelf fits, reply with an empty id. Never a reading list. Reply as JSON only: {"id": "<an entry id from the shelf, or empty>", "question": "<one question for the room, or empty>"}';
    try {
      var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', { method: 'post', contentType: 'application/json', muteHttpExceptions: true, headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
        payload: JSON.stringify({ model: readConfig_(ss)['claude model'] || 'claude-sonnet-5', max_tokens: 500, system: system, messages: [{ role: 'user', content: 'The room is stuck on: ' + text + '\n\nThe shelf:\n' + compact }] }) });
      if (res.getResponseCode() === 200) {
        var j = JSON.parse(res.getContentText()), txt = (j.content || []).map(function (c) { return c && typeof c.text === 'string' ? c.text : ''; }).join('\n'), m = txt.match(/\{[\s\S]*\}/), ans = {};
        try { ans = m ? JSON.parse(m[0]) : {}; } catch (pe) { detail = 'unreadable: ' + txt.slice(0, 160); }
        if (shelf.some(function (e) { return e.id === ans.id; })) { pick = ans.id; out.question = String(ans.question || '').trim(); }
      } else detail = 'Claude ' + res.getResponseCode();
    } catch (x) { detail = 'fetch failed: ' + String(x && x.message || x).slice(0, 160); }
  } else detail = key ? 'empty shelf' : 'no CLAUDE_KEY script property';
  var ids = pick ? [pick] : []; matches.forEach(function (e) { if (e.id !== pick && ids.length < 6) ids.push(e.id); });
  out.ids = ids;
  if (detail && who.role === 'admin') out.detail = detail;
  answers_(ss).appendRow([stamp_(new Date()), who.email, ids[0] || '', 'ask', text, (out.question || '') + (detail ? ' | ' + detail : ''), who.room, RE_BUILD]);
  return out;
}

/* ---- the Release List: hold cards and the 6:00 PM release ---- */
function holdStatus_() {
  var sh = deskSheet_().getSheetByName('Actions'), out = {};
  if (!sh) throw { code: 'no_desk' };
  if (sh.getLastRow() < 2) return out;
  var H = headerIndex_(sh);
  sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues().forEach(function (r) {
    var k = String(r[H['key']] || ''); if (k.indexOf('research:hold:') !== 0) return;
    var byHand = r[H['mark done by hand']] === true || String(r[H['mark done by hand']]).toLowerCase() === 'true';
    out[k] = (String(r[H['status']]).toLowerCase() === 'open' && !byHand) ? 'open' : 'done';
  });
  return out;
}
function closeHoldCards_(ids) {
  var sh = deskSheet_().getSheetByName('Actions'); if (!sh || sh.getLastRow() < 2) return;
  var H = headerIndex_(sh), want = {}; ids.forEach(function (id) { want['research:hold:' + id] = 1; });
  sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues().forEach(function (r, i) {
    if (!want[String(r[H['key']] || '')] || String(r[H['status']]).toLowerCase() !== 'open') return;
    sh.getRange(i + 2, H['status'] + 1).setValue('done'); sh.getRange(i + 2, H['done at'] + 1).setValue(new Date());
  });
}
/** One open card on John's desk for every candidate, so he can hold it; none while the switch is off. */
function holdSync_(ss, cfg) {
  if (String(cfg['auto release'] || 'off').toLowerCase() !== 'on') return 0;
  var have = holdStatus_(), made = 0, owner = teamName_();
  entries_(ss).filter(function (e) { return e.status === 'candidate'; }).forEach(function (e) {
    var key = 'research:hold:' + e.id; if (have[key] !== undefined) return;
    if (deskCard_(key, owner, 'Read this piece, or hold it. If you do not hold it, it reaches the men at 6:00 PM today.', 'Release List · Your Growth', voiceOf_(e.source) + ' · ' + e.claim, e.link, 'RE15')) made++;
  });
  if (made) log_(ss, 'release list', made + ' hold card' + (made === 1 ? '' : 's') + ' written');
  return made;
}
function releaseTick() {
  var lock = LockService.getScriptLock(); if (!lock.tryLock(20000)) return;
  try {
    var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
    if (String(cfg['auto release'] || 'off').toLowerCase() !== 'on') return;
    if (logHas_(ss, 'auto release', today_())) return;
    releaseAuto_(ss, cfg);
  } catch (err) {
    try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'auto release', 'stopped, nothing released', String(err && err.code || err && err.stack || err).slice(0, 300)); } catch (e2) {}
  } finally { lock.releaseLock(); }
}
function releaseAuto_(ss, cfg) {
  var cards = holdStatus_(); // throws when the desk cannot be read: then nothing is released
  var en = ss.getSheetByName('Entries'), rel = [], held = [];
  entries_(ss).forEach(function (e) {
    if (e.status !== 'candidate') return;
    if (cards['research:hold:' + e.id] === 'done') { en.getRange(e.row, EC.status).setValue('held'); held.push(e.id); return; }
    en.getRange(e.row, EC.status, 1, 3).setValues([['released', 'automatic', stamp_(new Date())]]); rel.push(e);
  });
  try { closeHoldCards_(rel.map(function (e) { return e.id; })); } catch (xc) {}
  try {
    roadWriteLines_(ss, cfg, 50);
    var left = entries_(ss).filter(function (e) { return e.status === 'released' && !(e.road && e.todo && e.question2); }).map(function (e) { return e.id; });
    if (left.length) log_(ss, 'road', 'released without the man\'s lines (the morning run retries)', left.join(', '));
  } catch (x) { log_(ss, 'road', 'lines at release failed', String(x).slice(0, 160)); }
  var sent = 0; try { sent = sendNotices_(ss, cfg, rel); } catch (xn) { log_(ss, 'growth notice', 'failed', String(xn).slice(0, 160)); }
  log_(ss, 'auto release', today_(), rel.length + ' released, ' + held.length + ' held, ' + sent + ' notice' + (sent === 1 ? '' : 's') + ' sent');
  return { released: rel.length, held: held.length, sent: sent };
}
/** The one plain line: only to a facilitator whose room's week the released pieces fit, and not to one who chose No notice. */
function sendNotices_(ss, cfg, rel) {
  var map = courseMap_(ss), link = String(cfg['growth page link'] || 'https://www.ancientpathcoaching.com/your-growth').trim(), sent = 0;
  people_().forEach(function (p) {
    try {
      if (!p.room) return;
      var rr = roomRow_(p), nx = rr ? nightOnOrAfter_(rr, today_()) : null, c = courseForRoom_(rr, map); if (!nx || !c) return;
      var fit = rel.some(function (e) { return weekPairs_(e.week, map)[c.abbr.toLowerCase()] === Number(nx.week); }); if (!fit) return;
      var pref = 'email'; answersFor_(ss, p.email).forEach(function (r) { if (r.kind === 'notice') pref = r.text === 'none' ? 'none' : 'email'; });
      if (pref === 'none' || logHas_(ss, 'growth notice', p.email + ' · ' + today_())) return;
      GmailApp.sendEmail(p.email, 'Something new on Your Growth', 'There is something new on Your Growth.\n\n' + link + '\n', { name: 'Ancient Path' });
      log_(ss, 'growth notice', p.email + ' · ' + today_(), 'sent'); sent++;
    } catch (x) {}
  });
  return sent;
}
