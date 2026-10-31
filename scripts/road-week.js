/* AP-HISROAD road.js build 10.2.4 — "This Week", "For Your Road" and "Your Land" on Your Page, served by the Research reader script (ResearchReader.gs build 10.2.4, ?file=road.js).
   10.2.4 (Oct 31, 2026, Your Page build 38; ruled by John the same day; built on the live 10.2.3): 1. His yes and no shape the next choices (server): a lane his answers have helped is lifted and a lane that did not is lowered, never by a whole fit step and never to nothing; a no with no reading behind it, or with Too long right now behind it, brings the same piece of thinking back once, shorter (the short form: the claim, the minutes link and the question, no quotes, no more to come); a construct is offered at most three times, at least seven days apart, and rests after a third no. 2. What made it a no? (if you want): under Not this one, in This Week and in the For Your Road panel, two answers, Too long right now and Not what I need; the reply to either is Kept. 3. What’s been helping you, in Your Road So Far, once he has answered three readings: a sentence naming the voices that helped most, and The readings that helped you ▾, a list of what helped (the claim, the course and week, a Listen link). It does not link to Your House. 4. The page band holds only what is certain (with page AP-HOME-v37.11): no guess at a since line, so a signed-in man’s band no longer moves when the road answers. 5. In what a man reads, the group is the group, not the room. Stylesheet: 11 rules added (371 to 382), none removed or changed; RULES = { hisroad: 382 }.
   10.2.3 (Oct 31, 2026, Your Page build 38; built to the mockup John ruled the same day, "Your Page Top"; built on the live 10.2.2): the page top. 1. A welcome panel with two faces: the first visit (a title, the lead, the four things this page does) and the return visit (what he marked, did and whether the reading helped last time, in his own words, from the server's visit block; nothing counted). 2. This Week in four labeled layers (the course, the story, the road, who walks with him), one panel, one Close control. 3. "Guidepost" everywhere a man reads (code identifiers keep the old name); The Nine Guideposts is a closed panel with no spiral. 4. Every tap says Kept. 5. Did this reading help your week? (It helped \u00b7 Not this one). 6. How did it go? (most \u00b7 some \u00b7 not yet, each with its own reply; the 10.2 "did" reads as most days). 7. When will you do it? (road_when). 8. How often should we remind you? (road_remind; saved only, nothing is sent). 9. Who walks with you: in a group, the group line (only when at least four men have marked and one mark has more than half), the leader line, and what the group carried, read from Signals; not in a group, Invite Your Own Witness (road_witness, saved to the Witness tab, nothing sent), Find a group (the courses page) and I need a hand. 10. The header jump fixed: the page top reserves its height before the server answers (reserve, sinceHeight) so the band and panels do not move when the road arrives; a cache from another build is dropped. On a first visit, or in a browser that kept nothing, the band is held at the height it settles at (bandHold) until the road is drawn: the since line holds the room of the where and since lines above the promise, and the band keeps a floor of 602 at desk width and 744 on a phone (381 and 379 for a return with no memo); the page block v37.10 holds the same room before the first paint. A first visit still draws the road\u2019s own panels for the first time when the road answers. 11. "Room" becomes "group" in every man-facing string. 12. For Your Road says the same ruled words as This Week: Did this reading help your week? (It helped \u00b7 Not this one), You said: it helped. Thank you. It shapes next week\u2019s piece., Change to: not this one, Change to: it helped; the kept values (met, not) are unchanged. The visible stylesheet lost the spiral and .ap-wk-wm rules and gained the page-top rules; the stamped rule count is in RULES.
   10.2.2 (Oct 30, 2026, Your Page build 38; the weekly card brought to the ruled mockup, built on the live 10.2.1): Name it, if you want now offers The Word for It, read from window.APStory.wordForIt (the same copy every Your Story piece reads; this script carries the identical twenty-one only as a fallback when the engine has not loaded). It appears once a marker is set: Steep or Lost the trail show the first eight, heavy end first; The view is good or Good footing show the last eight, lightest first (glad, free, steady, grateful, hopeful, seen, relieved, tender); More words shows the whole list in order. One word, optional, saved as <marker>|<word> in lower case; choosing a different marker clears the word. The four words of 10.2 (Mad, Hurt, Afraid, Ashamed) are gone. Each open waymark row now reads Close \u25b4 (it read Open \u25b4); a shut row reads Open \u25be. The waymark rows were checked word for word against AP_Nine_Waymarks.docx (nine rows, no differences). Compact card (Oct 30, John\u2019s walk of 10.2.1: the card took too much space): the four markers are one row of four equal segments from 640px of screen width and a 2x2 grid below (glyph and label, 44px high, 15px, 8px apart; the chosen one stays navy with white text); the words are rounded pills (40px high, 14px, 8px apart; the chosen word sand with a bronze border and navy text; More words a dashed bronze pill); a question sits 10px above its options and a group 20px above the next; Did this meet you? and Did you do it? are two equal segments side by side; the practice rows are 10px 12px. Behavior is unchanged. Stylesheet: removed the .idle rule for the greyed word row (the words now wait until a marker is set) and the phone rule that doubled the two-button width; added the More words rule, the phone-first marker grid and its 640px media rule, a separate rule for the two-button segments and one for their width; a second pass tightened the card: its rows sit 12px either side of their rule (about 24px between groups, the empty Kept. line no longer holds a gap), the practices show every row until he picks one and then only the chosen row with a small Change that reopens the list (a long practice saved to 200 characters is still matched), and the stylesheet gained five rules for that. Also fixed: the note under This Week read "Week 6 of 12, Week 6 \u2014 Stand Firm Then \u00b7 The room meets ," and now reads Breaking Free \u00b7 Week 6 of 12 \u00b7 \u201cStand Firm Then\u201d (the week\u2019s own name once, the room line only when its day and date can be read, never a dangling comma); the weekly writing question (Answer \u00b7 one question for the week, its box, Send and the privacy paragraph) is no longer drawn on the card (road_answer stays on the server, so saved answers still read). The stamped count is 305 (297 in 10.2.1), taken with postcss and in Chromium.
   10.2.1 (Oct 30, 2026, Your Page build 38; the waymarks, added to the weekly card on John\u2019s word, for the Breaking Free room on Wednesday, Nov 4): under the card\u2019s first line, This week\u2019s waymark: <name> \u00b7 <one line> \u2192, read from the Course map column \u201cwaymark (follows from what the week asks of him; the nine by name)\u201d for his course week (none, no line); it opens The Nine Waymarks with that row open and in view. The Nine Waymarks is a panel below This Week (AP-PANEL 1, shut until he opens it, his choice kept): the lead, the spiral drawn in code (nine numbered stones around In relationship, a stone opens its row), nine rows (closed: number, name, one line; one open at a time; open: Where we get stuck with Sounds like, What is happening, In Scripture, Ask yourself, What helps by the practice names only), and the foot about clinical practices. Every word is lifted from the ruled mockup (For Your Road, The Road Goes On, and You Choose Where), the lead from the chat ruling. No clinical names, no B references, no \u201cWalk this one next\u201d (that comes after a course). Nothing is counted. The card of 10.2 is untouched. The visible stylesheet gained the .ap-wm rules; the stamped rule count is in RULES.
   10.2 (Oct 30, 2026, Your Page build 38; ruled on the mockup "For Your Road", section "One Week on Your Road", screens 1 to 3): the weekly card in This Week, under the Write rows and above the question. How\u2019s the path? is four rows, each with its mark (The view is good \u00b7 Good footing \u00b7 Steep \u00b7 Lost the trail), one tap saves, the chosen row is dark with white text, and he may change it until his week ends; under it, Name it, if you want (Mad \u00b7 Hurt \u00b7 Afraid \u00b7 Ashamed), optional, saved on tap. The voice is the piece the road already chose for his week, headed For the <marker words> stretch once a marker is set, otherwise For your week, with Listen \u2192 and Did this meet you? (This met me \u00b7 Not for me). Do it: last week\u2019s practice in his own words with Did you do it? (Did it \u00b7 Not yet), then This week\u2019s practice, the course\u2019s own practices for his course week lifted word for word, one picked (road_practice, as before); hidden when he has no course week. The foot is I need a hand \u2192 (road_hand): the Research reader mails the leader the road already holds for him the same day, one hand a man a day. After the course: the marker and the voice only. A bare road (no Learners row, or a closed one) draws no card; the land still draws. Nothing is counted: no streaks, no totals, no minutes. Every tap says Kept.; a failed one says so in one calm line. The Read row (a pointer to For Your Road) gives way to the voice; Write rows stay above, the Answer row (the week\u2019s one question) stays below. The visible stylesheet gained the .ap-wk rules; the stamped rule count is in RULES.
   10.1 (Oct 28, 2026, Your Page build 37, "one week spine"; ruled on the mockup "Your Page — One Week Spine" with AP-PANEL 1 (nine rules), AP-SHAPES 1 and AP-SHIP 1): the week is one spine, in this order on the page: the band, This Week, For Your Road, Your Land, Courses, Doors.
   This Week is a new panel with three rows: Write (the story work the Course map has introduced by his week that he has not finished; the card is found by the title the page's chronicle carries, nothing is named here), Read, Listen or Watch (named for the act; its link walks down to the piece in For Your Road) and Answer with Send. The question and A word for the road live only here.
   For Your Road is quieter: the setup folded to one line (Reads from … · Three a week · One line by email), the piece, its act line, Did this meet you?, and the foot. No question back, no practice ask, no Your road so far (the data stays in the payload).
   Your Land is drawn for every signed-in man who has kept anything, with or without a Learners row, open by default, and no longer gated by Config "land". Every piece of the chronicle stands at its place by one place column in the page's registry (gate · stream · stones · house · horizon); the board of five has a picture each, the open place shows its pieces (the cards themselves, moved in and out around every redraw), his own words at the place, and What this place means folded. The stones pile stands at the stones. The first open still walks the land once.
   The band's one step (the week's first open act) and its Since you were last here line are handed to the page (window.apRoadBand and the ap:roadband event; APBand.set when the page has it). The page's own week (ap:week) fills the notes until the server's band answers.
   Rule 2: no text width cap and no −4px side margin on a phone panel anywhere in this sheet. Rule 8: labels in sentence case, no uppercase, no letter-spacing. Rule 9: the page draws the three frames at load from the browser's kept answer (ap_frame_v37; "Setting out your week." on a first visit); this script writes that memo after every draw, then swaps the real section in without moving the page, and draws nothing again when nothing changed.
   Fixed with it: the page read ap_hisroad_v3 while this script wrote v4 (the page now reads v4); the page's own road stylesheet and this one were both stamped "road", so the self-check compared 11 with 232 and could never mean anything (this one is stamped hisroad and the page drops its own).
   Server (ResearchReader.gs 10.1): a man with no Learners row, or a closed one, gets a bare road (ok, bare, a land with the pictures and the places) instead of an error; road_ui writes nothing for him; the band (course, week of total, the week's name, the room's next night and hour, the story work introduced so far) comes with the road; the land carries the readings he opened.
   10 (Oct 28, 2026, the man's row; ruled "go" on the mockup The Man's Row): the setup inside For Your Road asks three things once — which course his road reads from (a pick list of every course the Course map carries, up to two, the first he picks leads, under each where he stands with it), the pace, and how to tell him when something lands (One line by email · Only on this page) — one button, Keep it; nothing shows under the setup until it is kept; kept, it folds to one line with Change ▾ and What this is ▾. The act under a piece is a Walk line named for the act (Read → · Listen → · Watch →), never a filled button; Send is the one navy button in the week. Every piece is headed with its course and week (Breaking Free · Week 4 · Given Oct 28 · the voice · the cost); the panel note names both courses first. A man with no course sees the same setup with Begin <course> → as the next step under the folded line. The page counts the rules the browser accepted against the stamped count and tells the Front Desk once per build if short (AP-SHIP 1, line 12). Nothing here names a course.
   9.1.3 (Oct 27, John\u2019s walk of 9.1.2): the line under For Your Road names the course first \u2014 \u201cBreaking Free \u00b7 Week 3 of 12 \u00b7 Piece given Oct 21\u201d \u2014 so a man knows at a glance what it is about (9.1 had dropped the course name).
   9.1.2 (Oct 27, John\u2019s walk of 9.1): the what-this-is paragraph, the rule under it and the pace question now run the full width of the panel, edge to edge with the content below (they were held to a narrower column).
   9.1.1 (Oct 27): the line under Open it no longer says how many minutes of a piece are his; every piece reads \u201cOpens in a new tab, at the minute that matters.\u201d
   9.1 (Oct 27, John\u2019s walk of 9.0): the section standard, AP-PANEL 1. For Your Road and Your Land are two sibling panels drawn by one function (secHtml): one gutter, one heading (Title Case, serif, with its one-line note), one control at the right, Close \u25b4 when open and Open \u25be when shut, the whole heading row pressing it. A man\u2019s open or shut choice is kept on his account (Road tab row \u2018ui\u2019, action road_ui) and drawn that way next time; the first walk of the land opens it. Inside a panel the one small reveal is sentence case with a triangle that turns (Change \u25be, What this is \u25be, What this place means \u25be, Your road so far \u25be) \u2014 never the word Close. Pieces sit flat on the panel (a rule between, no box in a box). The pace is three choices \u2014 Three a week, Daily, Up to twice a day \u2014 under the question How often would you like a new piece?; the first visit shows what this is and the question, and Keep it folds both into one line (Your pace: Daily. Change \u25be What this is \u25be). The lead line over the piece is gone.
   5 (Oct 26, 2026, "For his road — the place", ruled with John Oct 24–26): the land. The head of the section is a man's own land, told in three ages:
   the text's own world at the gate (Genesis 12:1), his own today at his house (Proverbs 24:3–4; John 14:23), and what is still ahead on the
   horizon (Genesis 1:5). One large picture, the age his week stands in (the Course map's age column), with its verse beneath; under it the road
   drawn in code, five stops — the gate · the stream · the stones · your house · the horizon — each with its verse, and under each only his own
   words where they landed: Where I'm From at the gate, his lament by the stream, his stones along the road, What Kind of Light and his answers
   at the house (built · established · filled, the verse's own words), Ending Well at the horizon. The pictures are read by piece name from the
   Drive folder (gate-ruled, house-ruled, horizon-ruled; stream, stones, garden, table the day they land). Nothing on the land is counted,
   nothing fills by itself, nothing is colored for success. The first open is one screen, What the Land Means, with three plain lines and one
   button; read once. Below the land: the week's piece, then two asks and only two — what he is practicing this week (the course's own practices
   pressed, or his own words; it names the garden) and the question back, each answer landing in a strand in turn (did · saw · know). The morning
   after he answers, a word for the road appears under his answer (a verse, one question, one step), which quotes and asks and never prescribes.
   The land shows only for the people Config "land" names (John first); everyone else sees the 4.0.2 head until the switch opens.
   9.0 (Oct 26, "i thought we agreed to allow them to choose an upper bound? some people want daily guidance"): the pace. At the door a man chooses the most he
   is handed \u2014 One a week \u00b7 Up to three a week \u00b7 Up to two a day \u2014 one question, a pick list, one button, Keep it (an Answer shape); once kept it is one line, Your pace, with Change.
   The script hands him up to that many pieces, spread across the week. The week\u2019s first piece carries the question back, once a week at any pace; the pieces after it come
   without one. No minutes anywhere in it.
   8.9 (Oct 26, "organizing and connecting the progress according to the biblical principles we started with"): his house is three rooms in the verse\u2019s own order (Proverbs 24:3\u20134), each with its lintel \u2014 built by wisdom (what he did), established by understanding (what he saw), the rooms filled by knowledge (what he knows now). Before he writes, a room holds the verse alone; his lines build up under it, oldest first. Across on a desk, down on a phone. Nothing counted.
   8.8 (Oct 26, "for your road needs a formatting feature to separate it from the other text"): the whole section stands on its own ground \u2014 a paper panel with a bronze rule at its head, the land and the piece white within it; the definition reads as ruled (the course he is in, the voices we follow, one thing to do, one question back, his land, a person who reads).
   8.7 (Oct 26, John\u2019s walk of 8.6 live: "what is someone supposed to do after they enter information in the box?" and "a little better definition of what this is and why"): every Answer carries its act \u2014 a Keep it button under the line at each place and under his own practice line, Enter keeps too, the button reads Kept once it is kept and Keep it again when the line changes; leaving the box still keeps as a safety net. Under the heading For your road, one plain paragraph says what this is and why (WHAT; Config "road lead" overrides it); the piece keeps its own one-line lead.
   8.6 (Oct 26, John\u2019s walk of 8.5 live, "shouldn\u2019t this be an action button?", the gap, and "there is no question for the stones"): the stones ask too ("What has the LORD done on your road that you do not want to forget?"), so every place on the walk asks one thing; Set a stone stays the thing to do there on a visit. Walk the land is a navy button under the picture, the one act of the moment there (the quiet line in the head is gone); the places on the walk are as tall as their words, with a rule between them, so no empty room opens between a place and the next.
   8.5 (Oct 26, John\u2019s walk of 8.3 live: "i have to choose to walk the land. hard to find" and "the images don\u2019t change as i scroll but the text is greyed out"): the walk follows the scroll wherever the page scrolls (the site\u2019s own page box as well as the window; an IntersectionObserver backs it), and the picture is pinned by measure instead of position:sticky, which the site\u2019s page boxes defeat. The way in: Walk the land is the first line under the picture on every visit, in the Walk shape at full weight, with "Five places, a few minutes, nothing required." beside it; the land walks itself on the first open and again on the first visit of each week.
   8.3 (Oct 26, the five pictures ruled): the stream\u2019s focus point is the man on the near bank (stream-ruled), the stones\u2019 is the heap beside the track (stones-ruled), so the draw-in lands on the subject of each.
   8.1 (Oct 26, "the polish that really draws them in"): each picture has a focus point (the man in the gate, the lit window of the house, the sun on the horizon) and, as he reads a place, its picture draws slowly in toward that point, tied to his scrolling, never to a clock; each place has its own light laid over the picture (cool mist at the gate and the stream, warm evening at the house, gold on the horizon) that changes with the place; a place without a picture yet is dusk, not a flat screen; the man\u2019s mark pulses once when a line is kept. Reduced-motion settings get the pictures still.
   8 (Oct 26, "simplicity. common sense. great flow"): the walk is a scroll, not a camera. The picture stays pinned while the five places arrive one after another as he scrolls, each with its name, its line of the story, its verse and its one thing; the picture above crossfades to each place as it arrives, the name on the picture changes with it, the man\u2019s mark moves along the road. No button on the walk: a line he writes is kept when he leaves the box ("Kept at the gate"), and each place ends with one line naming where the road goes ("On to the stream"). The walk ends on the horizon with Proverbs 16:9 and Go to your land. After the walk the land is the picture of his week\u2019s place, the storyboard under it (across on a desk, down on a phone) and the place\u2019s words. The three shapes of an ask (AP-SHAPES 1: Find, Answer, Walk) and the weight rule (one navy button a screen) come in here: every page a man can open is a Walk line, Send under the piece is the one navy button.
   7 (Oct 26, John\u2019s walk of 6, "we need both"): the camera and the storyboard together. One frame a place, five in a row, so every press moves the camera a whole place (a place without a picture yet is a dark card with its name until the Studio gives it one; land-ruled, one wide picture, replaces the row). Under the scene the storyboard: the five places in order, one plain line each, so the story is told before a man knows it. The walk goes the whole road, gate to horizon, each stop its line, its verse and one thing (a line to keep at the gate, the stream, his house and the horizon; Set a stone at the stones), Keep it or Next, and ends on the horizon with Proverbs 16:9 and Go to your land.
   6 (Oct 26, John\u2019s "go" on the better alternative): one landscape, not three pictures \u2014 the scene is wider than its window and the camera slides to the place that is open (land-ruled from the Drive folder when it exists; the three frames joined until then). Each visit opens on the place his week stands in with the week\u2019s own sentence from the Course map under it and the one thing he is asked there. The first open asks before it tells: three short questions, one at the gate, one at the stream, one at the house, one line each, none required; what he writes stands at the place the moment he writes it (Road kind place) and the camera moves on. What this place means opens in place on any later visit. Walk the land asks the three again.
   5.3 (Oct 26, "something to make the page come alive"): the first open walks the land \u2014 the scene stays pinned while the five passages scroll past it, the picture crossfading from the gate to his house to the horizon as he reads, the man\u2019s mark moving along the road, each passage fading up as it arrives; it ends at Proverbs 16:9 and one button, Go to your land, which settles into the board. Walk the land on the board\u2019s head walks it again. Reduced-motion settings get the same words without the motion.
   5.2 (Oct 26, John\u2019s second walk, "the UI feels like a PowerPoint"): the land is one scene, not pages \u2014 the three pictures stand side by side as a band with the road drawn across them and the five places marked on it; a place opens when he presses it and only that place\u2019s words show beneath (its paragraph, his words there, and the thing he can do there: Where I\u2019m From at the gate, the lament at the stream, Set a stone, what he is practicing at the house, Ending Well at the horizon); the week\u2019s place opens on arrival, a place that holds his words carries a filled mark; the whole land closes to one line and stays closed until he opens it. The pictures merchandise the story; the words lead.
   5.1 (Oct 26, John\u2019s walk of the live land): the land is told as a story, not a strip \u2014 each place is a chapter: its picture in line with the words of What the Land Means that belong to it, then his own words there; the three plain lines open it and Proverbs 16:9 closes it; no separate first screen (the first read is recorded the same way); on later visits a chapter keeps its first paragraph and opens the rest in place, and a place with no picture and nothing of his is not drawn. The text spans the section\u2019s width.
   The page block on /start holds <div id="apRoad4"></div> right under its band and this script's tag; the page draws the frames in it at load. */
(function () {
  "use strict";
  var host = document.getElementById("apRoad4");
  if (!host || host.getAttribute("data-hisroad")) return;
  host.setAttribute("data-hisroad", "10.2.4");
  var BUILD = "10.2.4";
  /* the stamped rule count of this script's stylesheet, taken before the file card (AP-SHIP 1); the page counts what the browser accepted against it */
  var RULES = { hisroad: 382 };
  var DESK_URL = "https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec";
  var ROAD_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split("?")[0] : ""; return /script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(u) ? u : ""; })();
  var CACHE = "ap_hisroad_v4";
  var FRAME = "ap_frame_v37";
  var data = null, me = null, sending = false;

  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function nb(s) { return String(s || "").replace(/ (\S+)$/, " $1"); }
  function el(sel) { return host.querySelector(sel); }

  /* the stylesheet goes in once, just before the section, so the rules sit after the page's own and the frames the page drew at load are styled the moment this arrives */
  (function () {
    if (document.getElementById("apHisRoadStyle")) return;
    var st = document.createElement("style"); st.id = "apHisRoadStyle"; st.setAttribute("data-ap-sheet", "hisroad");
    st.textContent = [".ap-home .ap-panel{--ap-g:28px;display:block;margin:0 0 18px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-top:3px solid var(--ap-bronze,#B8945F);border-radius:6px;box-sizing:border-box}",".ap-home .ap-panel.ap-first{margin-top:44px}",".ap-home h2.ap-panel-h{margin:0 !important;padding:0 !important;border:0 !important;font:inherit !important;background:none !important}",".ap-home .ap-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;width:100%;box-sizing:border-box;margin:0;padding:20px var(--ap-g) 18px;background:none;border:0;border-radius:0;text-align:left;cursor:pointer;color:inherit}",".ap-home .ap-panel-head:focus-visible{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:-4px}",".ap-home .ap-panel-text{display:block;min-width:0;flex:1 1 auto}",".ap-home .ap-panel-title{display:block;font:400 26px/1.2 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}",".ap-home .ap-panel-note{display:block;font:400 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:6px 0 0}",".ap-home .ap-panel-ctl{flex:none;font:600 14px/1 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:4px 0 3px;margin-top:6px;white-space:nowrap}",".ap-home .ap-panel-body{padding:0 var(--ap-g) 26px}",".ap-home .ap-panel.shut .ap-panel-body{display:none}",".ap-home .ap-panel.shut .ap-panel-head{padding-bottom:20px}",".ap-home button.ap-rev.ap-rev{display:inline-block;font:400 15px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;background:none;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:0 0 1px;margin:0;cursor:pointer;white-space:nowrap}",".ap-home button.ap-rev.ap-rev:hover{color:var(--ap-navy,#1F2A44) !important;border-bottom-color:var(--ap-bronze,#B8945F)}","@media (max-width:600px){.ap-home .ap-panel{--ap-g:18px}.ap-home .ap-panel.ap-first{margin-top:36px}.ap-home .ap-panel-title{font-size:24px !important}}",".ap-home .ap-panel .ap-road-line{font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:-4px 0 18px;max-width:none}",".ap-home .ap-panel .ap-road-line.ap-road-what{font:400 17px/1.55 var(--ap-serif) !important;max-width:none;margin:0 0 16px}",".ap-find{position:relative;max-width:34em;margin:0 0 18px}",".ap-find input{width:100%;box-sizing:border-box;font:400 16px/1.4 var(--ap-sans,\"Source Sans 3\",sans-serif) !important;color:var(--ap-ink,#2B3040) !important;background:#fff;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:8px 0 8px 28px;outline:none}",".ap-find input:focus{border-bottom-color:var(--ap-navy,#1F2A44)}",".ap-find::before{content:\"\";position:absolute;left:2px;top:11px;width:12px;height:12px;border:1.5px solid var(--ap-quiet,#6B7280);border-radius:50%}",".ap-find::after{content:\"\";position:absolute;left:13px;top:23px;width:7px;height:1.5px;background:var(--ap-quiet,#6B7280);transform:rotate(45deg);transform-origin:left center}",".ap-find input::placeholder{color:var(--ap-quiet,#6B7280)}",".ap-answer{margin:0 0 18px}",".ap-answer .ap-answer-q{font:400 20px/1.4 var(--ap-serif,\"Source Serif 4\",serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 10px;text-wrap:balance}",".ap-answer .ap-answer-lead{font:400 15px/1.5 var(--ap-sans,\"Source Sans 3\",sans-serif) !important;color:var(--ap-quiet,#6B7280) !important;margin:-4px 0 10px}",".ap-answer input,.ap-answer textarea{display:block;width:100%;box-sizing:border-box;font:400 17px/1.5 var(--ap-serif,\"Source Serif 4\",serif) !important;color:var(--ap-ink,#2B3040) !important;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-left:3px solid var(--ap-bronze,#B8945F);border-radius:4px;padding:12px 14px;outline:none;resize:vertical}",".ap-answer input{min-height:0}",".ap-answer textarea{min-height:96px}",".ap-answer input:focus,.ap-answer textarea:focus{border-color:var(--ap-navy,#1F2A44);border-left-color:var(--ap-bronze,#B8945F)}",".ap-answer input::placeholder,.ap-answer textarea::placeholder{color:var(--ap-quiet,#6B7280);font-style:italic}",".ap-answer .ap-answer-act{display:flex;align-items:center;gap:14px;margin:10px 0 0}",".ap-answer .ap-answer-state{font:400 14px/1.4 var(--ap-sans,\"Source Sans 3\",sans-serif) !important;color:var(--ap-quiet,#6B7280) !important;margin:8px 0 0;min-height:1.4em}",".ap-answer .ap-answer-state.kept{color:var(--ap-bronze,#B8945F) !important}",".ap-answer .ap-answer-state.kept::before{content:\"✓ \"}",".ap-walk{display:inline-block;font:600 15px/1.4 var(--ap-sans,\"Source Sans 3\",sans-serif) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:0 0 1px;margin:0;cursor:pointer;text-decoration:none !important;text-align:left}",".ap-walk:hover{border-bottom-color:var(--ap-navy,#1F2A44)}",".ap-walk .ap-walk-arrow{display:inline-block;margin-left:6px;color:var(--ap-bronze,#B8945F)}",".ap-walk+.ap-walk{margin-left:18px}",".ap-walk.quiet{font-weight:400 !important;color:var(--ap-quiet,#6B7280) !important;border-bottom-color:var(--ap-rule,#E2DCD1)}","a.ap-btn.ap-btn-primary{background:none !important;color:var(--ap-navy,#1F2A44) !important;border:0 !important;border-bottom:1px solid var(--ap-bronze,#B8945F) !important;border-radius:0 !important;padding:0 0 1px !important;font:600 15px/1.4 var(--ap-sans,\"Source Sans 3\",sans-serif) !important;box-shadow:none !important;display:inline-block}","a.ap-btn.ap-btn-primary::after{content:\" →\";color:var(--ap-bronze,#B8945F)}","a.ap-btn.ap-btn-primary+.ap-btn{margin-left:18px}","@media (prefers-reduced-motion: reduce){.ap-walk,.ap-answer input,.ap-answer textarea{transition:none}}",".ap-home .ap-pace{margin:0 0 6px}",".ap-home .ap-pace .ap-pace-line{display:none;font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 4px;max-width:none}",".ap-home .ap-pace .ap-pace-line .ap-rev{margin-left:8px}",".ap-home .ap-pace.kept .ap-pace-line{display:block}",".ap-home .ap-pace .ap-what{margin:0 0 6px}",".ap-home .ap-pace.kept .ap-what{display:none}",".ap-home .ap-pace.kept.open-what .ap-what{display:block;margin:12px 0 4px !important}",".ap-home .ap-pace .ap-what,.ap-home .ap-pace .ap-what p.ap-road-what{margin:0 !important;padding:0 !important;max-width:none !important;width:auto !important;text-indent:0 !important}",".ap-home .ap-pace .ap-pace-ask{max-width:none !important;width:auto !important;margin:22px 0 4px;padding:20px 0 0;border-top:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-pace.kept .ap-pace-ask{display:none}",".ap-home .ap-pace.kept.open .ap-pace-ask{display:block;margin-top:14px}",".ap-home .ap-pace .ap-pace-ask p.ap-answer-q{font:400 20px/1.4 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 6px}",".ap-home .ap-pace .ap-pace-ask p.ap-answer-lead{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0 0 12px;max-width:none}",".ap-home .ap-pace .ap-pace-opts{display:flex;flex-direction:column;gap:8px;margin:0 0 8px;max-width:none}",".ap-home .ap-pace .ap-pace-opt{display:flex;align-items:center;gap:12px;margin:0;padding:11px 14px;background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-left:3px solid var(--ap-bronze,#B8945F);border-radius:4px;cursor:pointer;box-sizing:border-box}",".ap-home .ap-pace .ap-pace-opt:hover,.ap-home .ap-pace .ap-pace-opt.on{border-color:var(--ap-navy,#1F2A44);border-left-color:var(--ap-bronze,#B8945F)}",".ap-home .ap-pace .ap-answer .ap-pace-opt input{display:inline-block;width:18px;height:18px;min-height:0;padding:0;margin:0;flex:0 0 auto;border:0;background:none;accent-color:var(--ap-bronze,#B8945F);cursor:pointer}",".ap-home .ap-pace .ap-pace-opt span{font:400 17px/1.4 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important}",".ap-home .ap-hr-label.ap-hr-alsolabel{margin:30px 0 10px}",".ap-home .ap-land{margin:0;border:0;border-radius:0;overflow:visible;background:none}",".ap-home .ap-land.walking{overflow:visible}",".ap-home .ap-land-stage{position:relative;height:clamp(200px,30vw,330px);overflow:hidden;background:#1B2A3A;border-radius:6px}",".ap-home .ap-land-stagehold{position:relative}",".ap-home .ap-land.walking .ap-land-stage{z-index:2;height:40vh;min-height:220px;max-height:440px;box-sizing:border-box}",".ap-home .ap-land-stage .ap-land-layer{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.1s ease,transform .25s linear;will-change:opacity,transform}",".ap-home .ap-land-stage .ap-land-layer.blank{background:radial-gradient(ellipse 70% 60% at 50% 58%,#2E3F55 0%,#1B2A3A 70%)}",".ap-home .ap-land-stage .ap-land-layer.blank::after{content:\"\";position:absolute;left:0;right:0;bottom:30px;height:1px;background:rgba(243,237,227,.25)}",".ap-home .ap-land-stage::after{content:\"\";position:absolute;inset:0;pointer-events:none;z-index:1;transition:background 1.2s ease,opacity 1.2s ease;opacity:1}",".ap-home .ap-land-stage[data-light=\"mist\"]::after{background:linear-gradient(180deg,rgba(205,215,232,.16),rgba(205,215,232,0) 55%)}",".ap-home .ap-land-stage[data-light=\"day\"]::after{background:none}",".ap-home .ap-land-stage[data-light=\"evening\"]::after{background:linear-gradient(180deg,rgba(226,160,86,.12),rgba(226,160,86,.04) 60%)}",".ap-home .ap-land-stage[data-light=\"gold\"]::after{background:radial-gradient(ellipse 60% 55% at 52% 40%,rgba(255,206,130,.28),rgba(255,206,130,0) 70%)}",".ap-home .ap-land-stage .ap-land-man.pulse{animation:apManPulse 1.2s ease-out 1}","@keyframes apManPulse{0%{box-shadow:0 0 0 4px rgba(184,148,95,.35)}40%{box-shadow:0 0 0 14px rgba(184,148,95,.18)}100%{box-shadow:0 0 0 4px rgba(184,148,95,.35)}}",".ap-home .ap-land-stage .ap-land-layer.on{opacity:1}",".ap-home .ap-land-stage::before{content:\"\";position:absolute;left:0;right:0;bottom:0;height:62%;background:linear-gradient(180deg,rgba(20,28,40,0),rgba(20,28,40,.72));pointer-events:none;z-index:1}",".ap-home .ap-land-stage .ap-land-place{position:absolute;left:20px;bottom:58px;margin:0;z-index:2;pointer-events:none;opacity:0;transition:opacity .25s ease}",".ap-home .ap-land-stage .ap-land-place.on{opacity:1;transition:opacity .7s ease .35s}",".ap-home .ap-land-stage .ap-land-place b{display:block;font:400 clamp(24px,3.4vw,34px)/1.15 var(--ap-serif) !important;color:#F3EDE3 !important;text-shadow:0 1px 12px rgba(0,0,0,.5)}",".ap-home .ap-land-stage .ap-land-place small{display:block;font:400 13px/1.4 var(--ap-sans) !important;color:rgba(243,237,227,.85) !important;text-shadow:0 1px 8px rgba(0,0,0,.5);margin:4px 0 0}",".ap-home .ap-land-stage .ap-land-roadline{position:absolute;left:0;right:0;bottom:30px;height:1px;background:rgba(243,237,227,.8);z-index:2}",".ap-home .ap-land-stage .ap-land-mark{position:absolute;bottom:24px;transform:translateX(-50%);z-index:2;width:12px;height:12px;border-radius:50%;border:1px solid #F3EDE3;background:rgba(27,42,58,.55);box-sizing:border-box}",".ap-home .ap-land-stage .ap-land-mark.has{background:var(--ap-bronze,#B8945F)}",".ap-home .ap-land-stage .ap-land-man{position:absolute;bottom:22px;z-index:3;width:16px;height:16px;margin-left:-8px;border-radius:50%;background:var(--ap-bronze,#B8945F);box-shadow:0 0 0 4px rgba(184,148,95,.35);transition:left 1.1s cubic-bezier(.4,0,.2,1)}",".ap-home .ap-land-steps{background:none;border:0;border-radius:0}",".ap-home .ap-land-step{padding:26px 0 30px;box-sizing:border-box;opacity:.22;transform:translateY(12px);transition:opacity .7s ease,transform .7s ease}",".ap-home .ap-land-step+.ap-land-step{border-top:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-land-step.in{opacity:1;transform:none}",".ap-home .ap-land-step.ap-land-end{padding-bottom:34px}",".ap-home .ap-land-step p.ap-land-eyebrow{font:600 14px/1.4 var(--ap-sans) !important;color:var(--ap-bronze,#B8945F) !important;margin:0 0 8px}",".ap-home .ap-land p.ap-land-story{font:400 21px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 10px;text-wrap:balance}",".ap-home .ap-land p.ap-land-verse{font:400 17px/1.5 var(--ap-serif) !important;font-style:italic;color:var(--ap-ink,#2B3040) !important;margin:0 0 18px}",".ap-home .ap-land p.ap-land-verse span{font:400 13px/1 var(--ap-sans) !important;font-style:normal;color:var(--ap-quiet,#6B7280) !important;white-space:nowrap;margin-left:8px}",".ap-home .ap-land p.ap-land-quiet{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0 0 14px}",".ap-home .ap-land .ap-land-on{margin:14px 0 0}","@media (prefers-reduced-motion: reduce){.ap-home .ap-land-stage .ap-land-layer,.ap-home .ap-land-stage .ap-land-place,.ap-home .ap-land-stage .ap-land-man,.ap-home .ap-land-step,.ap-home .ap-land-stage::after{transition:none}.ap-home .ap-land-step{opacity:1;transform:none}.ap-home .ap-land-stage .ap-land-layer{transform:none !important}.ap-home .ap-land-stage .ap-land-man.pulse{animation:none}}",".ap-home .ap-land-panel p.ap-land-eyebrow{font:600 14px/1.4 var(--ap-sans) !important;color:var(--ap-bronze,#B8945F) !important;margin:0 0 6px}",".ap-home .ap-land-panel p.ap-land-weekline{font:400 20px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 12px}",".ap-home .ap-land-panel p.ap-land-p{font:400 17px/1.6 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 12px;display:none}",".ap-home .ap-land-panel.open p.ap-land-p{display:block}",".ap-home .ap-land-panel .ap-land-more{display:block;font:600 13px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;padding:0;margin:0 0 12px;cursor:pointer}",".ap-home .ap-hr-ask .ap-rev,.ap-home .ap-land-his .ap-rev{margin-top:8px}",".ap-home .ap-land-panel .ap-land-do{margin:14px 0 0}",".ap-home .ap-land-panel .ap-land-do .ap-hr-ask{border-top:0;padding-top:4px}",".ap-home .ap-hr-ask.kept .ap-hr-picking{display:none}",".ap-home .ap-hr-ask.kept.open .ap-hr-picking{display:block;margin-top:10px}",".ap-home .ap-hr-ask .ap-land-more{margin:6px 0 0}",".ap-home .ap-land-house{margin:18px 0 4px}",".ap-home .ap-land-house p.ap-land-eyebrow{margin:0 0 10px}",".ap-home .ap-land-house p.ap-land-eyebrow span{font-weight:400;color:var(--ap-quiet,#6B7280) !important}",".ap-home .ap-land-rooms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}",".ap-home .ap-land-room{border:1px solid var(--ap-rule,#E2DCD1);border-top:3px solid var(--ap-rule,#E2DCD1);border-radius:4px;padding:12px 14px 10px;background:#fff;min-width:0}",".ap-home .ap-land-room.built{border-top-color:var(--ap-bronze,#B8945F)}",".ap-home .ap-land-room p.ap-land-lintel{font:400 15px/1.4 var(--ap-serif) !important;font-style:italic;color:var(--ap-navy,#1F2A44) !important;margin:0 0 2px}",".ap-home .ap-land-room p.ap-land-roomword{font:600 14px/1.4 var(--ap-sans) !important;color:var(--ap-bronze,#B8945F) !important;margin:0 0 10px}",".ap-home .ap-land-room p.ap-land-line{font:400 15px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 8px;padding-left:10px;border-left:2px solid var(--ap-bronze,#B8945F);white-space:pre-line;overflow-wrap:anywhere}",".ap-home .ap-land-room p.ap-land-line .ap-land-when{display:block;font:400 12px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:2px 0 0}","@media (max-width:720px){.ap-home .ap-land-rooms{grid-template-columns:1fr}}",".ap-home .ap-land-his .ap-land-word{display:block;font:600 14px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:10px 0 4px}",".ap-home .ap-land-his .ap-land-word.verse{font:400 13px/1.4 var(--ap-serif) !important;font-style:italic}",".ap-home .ap-land-his p.ap-land-line{font:400 16px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 8px;padding-left:12px;border-left:2px solid var(--ap-bronze,#B8945F);white-space:pre-line;overflow-wrap:anywhere}",".ap-home .ap-land-his .ap-land-rest{display:none}",".ap-home .ap-land-his.open .ap-land-rest{display:block}",".ap-home .ap-land-his .ap-land-more{display:block;font:600 13px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;padding:0;margin:4px 0 0;cursor:pointer}",".ap-home .ap-land-his p.ap-land-line .ap-land-when{display:block;font:400 12px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:2px 0 0;white-space:normal}",".ap-home .ap-land-his p.ap-land-line a{font-weight:600;color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F)}",".ap-home .ap-hr-piece{background:none;border:0;border-top:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:22px 0 8px;margin:0}",".ap-home .ap-hr-piece.ap-hr-first{border-top:0;padding-top:6px}",".ap-home .ap-pace:not(.kept) ~ .ap-hr-piece.ap-hr-first{border-top:1px solid var(--ap-rule,#E2DCD1);padding-top:22px;margin-top:26px}",".ap-home .ap-pace.kept ~ .ap-hr-piece.ap-hr-first{margin-top:14px}",".ap-home .ap-hr-claim{font:400 24px/1.3 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 18px;max-width:none}",".ap-home .ap-hr-label{font:600 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0 0 8px}",".ap-home .ap-hr-part{margin:0 0 18px}",".ap-home .ap-hr-part p.ap-hr-body{font:400 16px/1.6 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0;max-width:none}",".ap-home .ap-hr-quote{font:italic 400 17px/1.55 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0;padding-left:14px;border-left:2px solid var(--ap-bronze,#B8945F);max-width:none}",".ap-home .ap-hr-quote a{font:600 13px/1 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F);white-space:nowrap;margin-left:4px}",".ap-home .ap-hr-coming{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}",".ap-home .ap-hr-open{display:flex;align-items:center;flex-wrap:wrap;gap:18px;margin:4px 0 0}",".ap-home .ap-hr-state{font:400 14px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}",".ap-home .ap-pace .ap-pace-ask.ap-ask-first{margin-top:14px}",".ap-home .ap-pace .ap-pace-opt{align-items:flex-start}",".ap-home .ap-pace .ap-answer .ap-pace-opt input{margin-top:5px}",".ap-home .ap-pace .ap-pace-opt .ap-opt-sub{display:block;font:400 14px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:2px 0 0}",".ap-home .ap-pace .ap-answer-act{margin:18px 0 0}",".ap-home .ap-pace .ap-answer-act .ap-answer-state{margin:0}",".ap-home .ap-pace.kept .ap-answer-act{display:none}",".ap-home .ap-pace.kept.open .ap-answer-act{display:flex}",".ap-home .ap-hr-begin{margin:0 0 18px}",".ap-home .ap-pace.kept ~ .ap-hr-begin{margin-top:-6px}",".ap-home .ap-hr-open .ap-walk{font-size:16px !important}",".ap-home .ap-hr-ask{margin:0;padding:20px 0 0;border-top:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-hr-ask p.ap-hr-q{font:400 19px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 12px}",".ap-home .ap-hr-ask p.ap-hr-lead{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:-6px 0 12px}",".ap-home .ap-hr-picks{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 12px}",".ap-home .ap-hr-pick{font:400 15px/1.35 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px;padding:9px 12px;text-align:left;cursor:pointer;max-width:100%}",".ap-home .ap-hr-pick.on{background:var(--ap-navy,#1F2A44) !important;color:#fff !important;border-color:var(--ap-navy,#1F2A44)}",".ap-home .ap-hr-own{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap}",".ap-home .ap-hr-own input{flex:1 1 240px;min-width:0;padding:10px 12px;font:400 16px/1.4 var(--ap-sans);color:var(--ap-ink,#2B3040);background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px}",".ap-home .ap-hr-own input:focus,.ap-home .ap-hr-ask textarea:focus{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:1px}",".ap-home .ap-hr-kept{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:10px 0 0}",".ap-home .ap-hr-kept q{font:400 16px/1.5 var(--ap-serif) !important;quotes:\"“\" \"”\"}",".ap-home .ap-hr-ask textarea{display:block;width:100%;min-height:108px;padding:12px 14px;font:400 16px/1.55 var(--ap-sans);color:var(--ap-ink,#2B3040);background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px;resize:vertical;box-sizing:border-box}",".ap-home .ap-hr-send{display:flex;align-items:center;flex-wrap:wrap;gap:14px;margin:12px 0 0}",".ap-home .ap-hr-foot{font:400 13px/1.55 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:12px 0 0;max-width:none}",".ap-home .ap-hr-foot b{font-weight:600;color:var(--ap-ink,#2B3040)}",".ap-home .ap-hr-answer{margin:0;padding:14px 16px;background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px}",".ap-home .ap-hr-answer .ap-hr-label{margin-bottom:6px}",".ap-home .ap-hr-answer p.ap-hr-text{font:400 16px/1.6 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0;white-space:pre-wrap}",".ap-home .ap-hr-word{margin:14px 0 0;padding:14px 16px 12px;background:var(--ap-paper,#FBF9F5);border-left:2px solid var(--ap-bronze,#B8945F);border-radius:0 4px 4px 0}",".ap-home .ap-hr-word p{font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 8px}",".ap-home .ap-hr-word p.ap-hr-wverse{font:400 17px/1.5 var(--ap-serif) !important}",".ap-home .ap-hr-word p:last-child{margin-bottom:0}",".ap-home .ap-hr-words{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:18px 0 0;padding-top:0;border-top:0}",".ap-home .ap-hr-words p{font:400 15px/1.4 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0 6px 0 0}",".ap-home .ap-hisroad .ap-btn{cursor:pointer;line-height:1.3 !important;text-decoration:none !important}",".ap-home .ap-hisroad .ap-btn-quiet{background:transparent !important;color:var(--ap-navy,#1F2A44) !important;border:1px solid var(--ap-navy,#1F2A44) !important;border-radius:4px !important;min-height:44px;padding:11px 16px !important;font-size:15px !important}",".ap-home .ap-hisroad .ap-btn-quiet.on{background:var(--ap-navy,#1F2A44) !important;color:#fff !important}",".ap-home .ap-hisroad .ap-btn[disabled]{opacity:.55;cursor:default}",".ap-home .ap-hr-fine{font:400 14px/1.55 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:22px 0 0;padding-top:16px;border-top:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-tw-row{border-top:1px solid var(--ap-rule,#E2DCD1);padding:20px 0}",".ap-home .ap-tw-row.ap-tw-first{border-top:0;padding-top:4px}",".ap-home .ap-tw-lab{font:600 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0 0 8px}",".ap-home .ap-tw-walk{display:inline-block;font:400 21px/1.35 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:0 0 2px}",".ap-home .ap-tw-walk-s{display:inline-block;font:600 16px/1.35 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:0 0 2px}",".ap-home .ap-tw-walk:hover,.ap-home .ap-tw-walk-s:hover{border-bottom-color:var(--ap-navy,#1F2A44)}",".ap-home .ap-tw-line{font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:10px 0 0}",".ap-home .ap-tw-claim{font:400 21px/1.4 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 12px}",".ap-home .ap-tw-q{display:block;font:400 21px/1.4 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 14px}",".ap-home .ap-tw-lead{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:-6px 0 12px}",".ap-home textarea.ap-tw-ta{display:block;width:100%;box-sizing:border-box;min-height:110px;font:400 17px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;background:var(--ap-card,#fff);border:1px solid #D8D0C4;border-radius:4px;padding:12px 14px;resize:vertical}",".ap-home textarea.ap-tw-ta:focus{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:1px}",".ap-home .ap-tw-act{display:flex;align-items:center;gap:18px;margin:14px 0 0;flex-wrap:wrap}",".ap-home button.ap-tw-send{font:600 16px/1 var(--ap-sans) !important;color:#fff !important;background:var(--ap-navy,#1F2A44) !important;border:0 !important;border-radius:4px;padding:14px 26px;min-height:46px;cursor:pointer;text-decoration:none !important}",".ap-home button.ap-tw-send:hover{background:#2B3856 !important}",".ap-home button.ap-tw-send[disabled]{opacity:.55;cursor:default}",".ap-home .ap-tw-quiet{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}",".ap-home .ap-tw-state{font:400 14px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:8px 0 0;min-height:1.4em}",".ap-home .ap-tw-fine{font:400 14px/1.55 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:14px 0 0}",".ap-home .ap-tw-note{font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0}",".ap-home .ap-pace.kept .ap-pace-line{display:flex;align-items:baseline;justify-content:space-between;gap:8px 16px;flex-wrap:wrap;margin:0;padding:2px 0 18px;border-bottom:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-pace .ap-pace-line [data-role=\"paceword\"]{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important}",".ap-home .ap-pace.kept .ap-pace-line [data-act=\"pacechange\"]{margin-left:auto}",".ap-home .ap-hr-head{font:600 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:20px 0 10px}",".ap-home .ap-hr-piece.ap-hr-first .ap-hr-head{margin-top:20px}",".ap-home .ap-hr-part p.ap-hr-p{font:400 17px/1.6 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 14px}",".ap-home .ap-hr-who{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:6px 0 0 16px}",".ap-home .ap-hr-who a{color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F)}",".ap-home .ap-hr-state-line{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}",".ap-home .ap-land-board{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin:18px 0 0}",".ap-home .ap-land-stop{display:block;text-align:left;background:none;border:0;padding:0;cursor:pointer;min-width:0;font-family:inherit}",".ap-home .ap-land-thumb{display:block;width:100%;height:84px;object-fit:cover;border-radius:4px;opacity:.86;background:radial-gradient(ellipse 70% 60% at 50% 58%,#2E3F55 0%,#1B2A3A 70%)}",".ap-home .ap-land-stop.on .ap-land-thumb{opacity:1;outline:2px solid var(--ap-bronze,#B8945F);outline-offset:2px}",".ap-home .ap-land-stop .ap-land-stopname{display:block;font:600 15px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;margin:10px 0 2px}",".ap-home .ap-land-stop .ap-land-stopline{display:block;font:400 14px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;overflow-wrap:anywhere}",".ap-home .ap-land-walkline{margin:16px 0 0;padding:0;border:0}",".ap-home .ap-land-panel{border-top:1px solid var(--ap-rule,#E2DCD1);margin:22px 0 0;padding:20px 0 0}",".ap-home .ap-land-panel p.ap-land-pname{font:400 24px/1.25 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 4px}",".ap-home .ap-land-panel p.ap-land-ref{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}",".ap-home .ap-land-panel p.ap-land-pverse{font:italic 400 18px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:10px 0 12px}",".ap-home .ap-land-panel p.ap-land-pline{font:400 17px/1.6 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 8px}",".ap-home .ap-land-pieces{margin:0}",".ap-home .ap-land-pieces:empty{display:none}",".ap-home .ap-land-pieces .ap-card:first-child{padding-top:22px}",".ap-home .ap-land-pieces .ap-pile{margin:0;border-top:1px solid var(--ap-rule,#E2DCD1);padding-top:20px}",".ap-home .ap-land-his{border-top:1px solid var(--ap-rule,#E2DCD1);padding:6px 0 0}",".ap-home .ap-land-his:empty{display:none}",".ap-home .ap-land-panel .ap-rev[data-act=\"chmore\"]{margin:16px 0 10px}","@media (max-width:720px){\n.ap-home .ap-land-board{display:flex;flex-direction:column;gap:0;margin:16px 0 0}\n.ap-home .ap-land-stop{display:flex;align-items:center;gap:12px;width:100%;border-top:1px solid var(--ap-rule,#E2DCD1);padding:10px 0}\n.ap-home .ap-land-stop .ap-land-thumb{flex:none;width:72px;height:48px}\n.ap-home .ap-land-stop .ap-land-stopname{margin:0 0 2px}\n.ap-home .ap-land-panel{margin-top:6px;padding-top:18px}\n.ap-home .ap-land-panel p.ap-land-pname{font-size:22px !important}\n}",".ap-home .ap-panel .ap-answer,.ap-home .ap-panel .ap-find{max-width:none}",".ap-home .ap-land:not(.walking) .ap-land-stage .ap-land-place,\n.ap-home .ap-land:not(.walking) .ap-land-stage .ap-land-roadline,\n.ap-home .ap-land:not(.walking) .ap-land-stage .ap-land-mark,\n.ap-home .ap-land:not(.walking) .ap-land-stage .ap-land-man,\n.ap-home .ap-land:not(.walking) .ap-land-stage::before { display: none; }",".ap-home .ap-land-walknote { display: block; margin: 10px 0 0; font: 400 15px/1.4 var(--ap-sans) !important; color: var(--ap-quiet, #6B7280) !important; }",".ap-home .ap-card-actions a.ap-btn.ap-btn-primary + .ap-btn { margin-left: 0; }","@media (max-width:640px){.ap-home .ap-hr-piece{padding:18px 0 6px}.ap-home .ap-hr-claim{font-size:20px !important;line-height:1.3 !important;margin-bottom:14px}.ap-home .ap-hr-quote{font-size:16px !important;line-height:1.45 !important}.ap-home .ap-hr-words p{width:100%;margin:0 0 2px}.ap-home .ap-hr-words .ap-btn{padding:10px 14px}.ap-home .ap-hr-open{gap:8px 14px}.ap-home .ap-tw-walk{font-size:20px !important}.ap-home .ap-tw-q,.ap-home .ap-tw-claim{font-size:19px !important}.ap-home .ap-tw-act{flex-direction:column;align-items:flex-start;gap:10px}}",".ap-home .ap-wk-q{font:400 19px/1.4 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:20px 0 10px}",".ap-home .ap-wk-q.ap-wk-q-first{margin-top:0}",".ap-home .ap-wk-marks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:0}","@media (min-width:640px){.ap-home .ap-wk-marks{grid-template-columns:repeat(4,minmax(0,1fr))}}",".ap-home button.ap-wk-mark{display:flex;align-items:center;gap:8px;width:100%;min-height:44px;margin:0;padding:10px 12px;text-align:left;font:400 15px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:var(--ap-card,#fff) !important;border:1px solid var(--ap-rule,#E2DCD1) !important;border-radius:4px;cursor:pointer;text-decoration:none !important}",".ap-home button.ap-wk-mark:hover{border-color:var(--ap-bronze,#B8945F) !important}",".ap-home button.ap-wk-mark.on{background:#1F2A44 !important;color:#fff !important;border-color:#1F2A44 !important}",".ap-home .ap-wk-mark svg{flex:none;width:18px;height:18px}",".ap-home .ap-wk-mark svg .mk{fill:currentColor}",".ap-home .ap-wk-mark svg .mko{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round}",".ap-home .ap-wk-words{display:flex;flex-wrap:wrap;gap:8px;margin:0}",".ap-home button.ap-wk-word{min-height:40px;margin:0;padding:0 14px;font:400 14px/1.2 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:var(--ap-card,#fff) !important;border:1px solid var(--ap-rule,#E2DCD1) !important;border-radius:999px;cursor:pointer;text-decoration:none !important}",".ap-home button.ap-wk-twob{min-height:44px;margin:0;padding:10px 12px;font:400 15px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:var(--ap-card,#fff) !important;border:1px solid var(--ap-rule,#E2DCD1) !important;border-radius:4px;cursor:pointer;text-decoration:none !important}",".ap-home button.ap-wk-word:hover,.ap-home button.ap-wk-twob:hover{border-color:var(--ap-bronze,#B8945F) !important}",".ap-home button.ap-wk-word.on{background:var(--ap-sand,#F3EDE3) !important;border-color:var(--ap-bronze,#B8945F) !important;font-weight:600 !important}",".ap-home button.ap-wk-twob.on{background:#1F2A44 !important;color:#fff !important;border-color:#1F2A44 !important}",".ap-home button.ap-wk-word.ap-wk-more{border-style:dashed !important;border-color:var(--ap-bronze,#B8945F) !important;color:var(--ap-bronze-deep,#8A6A35) !important}",".ap-home .ap-wk-two{display:flex;gap:8px;margin:0}",".ap-home .ap-wk-two button.ap-wk-twob{flex:1 1 0;min-width:0}",".ap-home .ap-wk-by{font:400 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:-4px 0 12px}",".ap-home .ap-wk-listen{margin:0}",".ap-home .ap-wk-last{font:italic 400 19px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}",".ap-home .ap-wk-picks{display:flex;flex-direction:column;gap:8px;margin:0}",".ap-home button.ap-wk-pick{display:flex;align-items:flex-start;gap:12px;width:100%;margin:0;padding:10px 12px;text-align:left;font:400 15px/1.45 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;background:var(--ap-card,#fff) !important;border:1px solid var(--ap-rule,#E2DCD1) !important;border-radius:4px;cursor:pointer;text-decoration:none !important}",".ap-home button.ap-wk-pick:hover{border-color:var(--ap-bronze,#B8945F) !important}",".ap-home button.ap-wk-pick.on{border-color:var(--ap-navy,#1F2A44) !important}",".ap-home .ap-wk-dot{flex:none;width:14px;height:14px;margin-top:4px;border:1.5px solid var(--ap-quiet,#6B7280);border-radius:50%;box-sizing:border-box}",".ap-home button.ap-wk-pick.on .ap-wk-dot{border:4px solid var(--ap-navy,#1F2A44)}",".ap-home button.ap-wk-mark:focus-visible,.ap-home button.ap-wk-word:focus-visible,.ap-home button.ap-wk-twob:focus-visible,.ap-home button.ap-wk-pick:focus-visible{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:2px}",".ap-home .ap-wk-hand{margin:0}",".ap-home .ap-wk-hand button.ap-walk{display:inline-block;position:relative;margin:11px 0}.ap-home .ap-wk-hand button.ap-walk::after{content:'';position:absolute;left:-4px;right:-4px;top:-11px;bottom:-11px}","@media (max-width:600px){.ap-home .ap-wk-words button.ap-wk-word{flex:0 1 auto}.ap-home .ap-wk-q,.ap-home .ap-wk-last{font-size:18px !important}}",".ap-home .ap-wk .ap-tw-row{padding:12px 0}",".ap-home .ap-wk .ap-tw-row.ap-tw-first{padding-top:4px}",".ap-home .ap-wk .ap-tw-state{margin:6px 0 0;min-height:0}",".ap-home .ap-wk .ap-tw-state:empty{display:none}",".ap-home .ap-wk-change{margin:8px 0 0}",".ap-home .ap-wm-lead{font:400 16px/1.5 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 18px;max-width:62ch}",".ap-home .ap-wm-list{margin:0;border-top:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-wm{border-bottom:1px solid var(--ap-rule,#E2DCD1)}",".ap-home button.ap-wm-h{display:grid;grid-template-columns:34px minmax(0,auto) minmax(0,1fr) auto;gap:14px;align-items:baseline;width:100%;min-height:44px;margin:0;padding:16px 4px;text-align:left;background:none !important;border:0 !important;border-radius:0;cursor:pointer;color:inherit !important}",".ap-home button.ap-wm-h:focus-visible{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:2px}",".ap-home .ap-wm-n{font:600 13px var(--ap-sans) !important;color:var(--ap-bronze-ink,#8A6A3B) !important}",".ap-home .ap-wm-nm{font:400 22px/1.2 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important}",".ap-home .ap-wm-one{font:italic 400 17px/1.35 var(--ap-serif) !important;color:var(--ap-quiet,#6B7280) !important}",".ap-home .ap-wm.open .ap-wm-one{color:var(--ap-navy,#1F2A44) !important}",".ap-home .ap-wm-oc{font:600 13px var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;white-space:nowrap}",".ap-home .ap-wm-b{padding:4px 4px 22px 52px}",".ap-home .ap-wm-b[hidden]{display:none}",".ap-home .ap-wm-b dl{margin:0;display:grid;grid-template-columns:170px minmax(0,1fr);gap:12px 22px}",".ap-home .ap-wm-b dt{font:600 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}",".ap-home .ap-wm-b dd{margin:0;font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;max-width:62ch}",".ap-home .ap-wm-b dd.q{font:400 19px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important}",".ap-home .ap-wm-b .sounds{display:block;margin-top:6px;font:italic 400 16px/1.5 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important}",".ap-home .ap-wm-b .applied{display:block;margin-top:6px;font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important}",".ap-home .ap-wm-foot{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:16px 0 0;max-width:62ch}","@media (max-width:600px){.ap-home button.ap-wm-h{grid-template-columns:28px minmax(0,1fr) auto;row-gap:2px}.ap-home .ap-wm-one{grid-column:2/3;grid-row:2}.ap-home .ap-wm-oc{grid-row:1;grid-column:3}.ap-home .ap-wm-b{padding-left:4px}.ap-home .ap-wm-b dl{grid-template-columns:1fr;gap:4px}.ap-home .ap-wm-b dd{margin-bottom:10px}}",".ap-home .ap-ly{margin:16px 0 0;padding:14px 0 0;border-top:2px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-ly.ap-ly-first{margin-top:0;padding-top:0;border-top:0}",".ap-home .ap-ly-k{font:600 15px/1.4 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}",".ap-home .ap-ly-k span{font-weight:400;color:var(--ap-quiet,#6B7280)}",".ap-home .ap-ly-cs{font:400 19px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:8px 0 0}",".ap-home .ap-ly-grp{font:400 18px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:8px 0 0}",".ap-home .ap-ly-way{margin:14px 0 0}",".ap-home .ap-ly-way.ap-w-act{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px 22px}",".ap-home .ap-ly-gap{margin-top:10px}",".ap-home .ap-ly-sm{margin:14px 0 0}",".ap-home .ap-ly-hand{margin-top:14px}",".ap-home .ap-tw-help{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:2px 0 0}",".ap-home .ap-tw-state b{font-weight:600;color:var(--ap-navy,#1F2A44)}",".ap-home .ap-ly-piece{margin:10px 0 0;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:12px 14px;border:1px solid var(--ap-rule,#E2DCD1);border-radius:6px}",".ap-home .ap-ly-piece>div{min-width:0}",".ap-home .ap-ly-pn{font:400 18px/1.3 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}",".ap-home .ap-ly-piece .ap-walk{flex:none;white-space:nowrap}",".ap-home .ap-gp-line{font:400 15.5px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}",".ap-home .ap-gp-line b{font-weight:600;color:var(--ap-navy,#1F2A44)}",".ap-home .ap-gp-week{font:italic 400 16.5px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:8px 0 0}",".ap-home .ap-gp-carry{margin:10px 0 0;padding:10px 14px;background:var(--ap-sand,#F3EDE3);border-left:3px solid var(--ap-bronze,#B8945F);border-radius:0 6px 6px 0;font:400 17px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important}",".ap-home .ap-gp-carry span{display:block;font:600 13px var(--ap-sans) !important;color:var(--ap-bronze-ink,#8A6A3B) !important;margin-bottom:2px}",".ap-home button.ap-gp-more{display:inline-block;margin:10px 0 0;padding:0 0 1px;font:600 14px/1.4 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:none !important;border:0 !important;border-bottom:1px solid var(--ap-bronze,#B8945F) !important;border-radius:0;cursor:pointer}",".ap-home .ap-gp-body{margin-top:10px}",".ap-home .ap-gp-body[hidden]{display:none}",".ap-home .ap-gp-body dl{margin:0;display:grid;grid-template-columns:150px minmax(0,1fr);gap:10px 18px}",".ap-home .ap-gp-body dt{font:600 13px/1.6 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}",".ap-home .ap-gp-body dd{margin:0;font:400 15.5px/1.5 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important}",".ap-home .ap-gp-body .sounds{display:block;margin-top:4px;font:italic 400 15.5px/1.5 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important}",".ap-home .ap-gp-body .applied{display:block;margin-top:4px;font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important}","@media (max-width:640px){.ap-home .ap-gp-body dl{grid-template-columns:1fr;gap:3px}.ap-home .ap-gp-body dd{margin-bottom:8px}}",".ap-home .ap-wm-tag{display:inline-block;margin-left:8px;padding:1px 8px;font:600 12px/1.5 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:var(--ap-sand,#F3EDE3);border:1px solid var(--ap-bronze,#B8945F);border-radius:999px;font-style:normal;vertical-align:middle}",".ap-home .ap-wk-three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:0}",".ap-home .ap-wk-four{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:0}",".ap-home .ap-wk-three button.ap-wk-twob,.ap-home .ap-wk-four button.ap-wk-twob{min-width:0}","@media (max-width:640px){.ap-home .ap-wk-three{grid-template-columns:1fr}}","@media (max-width:560px){.ap-home .ap-wk-four{grid-template-columns:repeat(2,minmax(0,1fr))}}",".ap-home .ap-mail{margin:14px 0 0;padding:14px 16px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-left:3px solid var(--ap-bronze,#B8945F);border-radius:6px}",".ap-home .ap-mail-from{font:600 12.5px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}",".ap-home .ap-mail-sub{font:400 18px/1.3 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:4px 0 0}",".ap-home .ap-mail-line{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:6px 0 0}",".ap-home .ap-mail-line b{font-weight:600;color:var(--ap-navy,#1F2A44)}",".ap-home .ap-mail-act{margin:10px 0 0}",".ap-home .ap-mail .ap-walk{cursor:default;pointer-events:none}",".ap-home .ap-mail-foot{font:400 13px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:10px 0 0}",".ap-home .ap-wcard{display:grid;grid-template-columns:76px minmax(0,1fr);gap:16px;align-items:start;margin:14px 0 0;padding:16px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-radius:8px}",".ap-home .ap-wcard svg{width:80px;height:72px}",".ap-home .ap-wcard .hz{stroke:var(--ap-rule,#E2DCD1);stroke-width:1.5}",".ap-home .ap-wcard .p1{fill:none;stroke:var(--ap-bronze,#B8945F);stroke-width:3;stroke-linecap:round}",".ap-home .ap-wcard .p3{fill:none;stroke:var(--ap-navy,#1F2A44);stroke-width:3;stroke-linecap:round}",".ap-home .ap-wcard h3.ap-wcard-h{font:400 20px/1.25 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0;padding:0}",".ap-home .ap-wcard-open{margin:10px 0 0}",".ap-home .ap-wcard-send{margin:12px 0 0}",".ap-home .ap-wcard [hidden]{display:none}",".ap-home .ap-roles{display:flex;flex-wrap:wrap;gap:8px;margin:0}",".ap-home .ap-roles button.ap-wk-twob{min-height:40px;padding:8px 14px}",".ap-home .ap-wfields{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0 0}",".ap-home .ap-wfields label{display:flex;flex-direction:column;gap:4px;font:600 13px/1.4 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important}",".ap-home .ap-wfields input{box-sizing:border-box;width:100%;min-height:44px;padding:8px 10px;font:400 15px/1.4 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;background:var(--ap-card,#fff);border:1px solid var(--ap-rule,#E2DCD1);border-radius:6px}",".ap-home .ap-wfields input:focus{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:1px}","@media (max-width:560px){.ap-home .ap-wcard{grid-template-columns:1fr}.ap-home .ap-wcard svg{width:64px;height:58px}.ap-home .ap-wfields{grid-template-columns:1fr}}",".ap-home .ap-carried{margin:6px 0 0;border-top:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-carried details{border-bottom:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-carried summary{cursor:pointer;padding:10px 0;font:400 17px/1.35 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;list-style:none}",".ap-home .ap-carried summary::-webkit-details-marker{display:none}",".ap-home .ap-carried summary::after{content:\" \\25BE\";font:600 13px var(--ap-sans);color:var(--ap-bronze-ink,#8A6A3B)}",".ap-home .ap-carried details[open] summary::after{content:\" \\25B4\"}",".ap-home .ap-carried details p{margin:0;padding:0 0 12px;font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important}",".ap-home .ap-w-lead{font:400 19px/1.5 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}",".ap-home .ap-w-gives{font:600 13px/1.4 var(--ap-sans) !important;color:var(--ap-bronze-ink,#8A6A3B) !important;margin:14px 0 0}",".ap-home ul.ap-w-four{list-style:none;margin:10px 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 24px}",".ap-home .ap-w-four li{margin:0;padding:0;font:400 15.5px/1.45 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important}",".ap-home .ap-w-four b{display:block;font:600 15px/1.4 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important}",".ap-home .ap-w-how{margin-top:14px}",".ap-home .ap-w-how[hidden]{display:none}","@media (max-width:640px){.ap-home ul.ap-w-four{grid-template-columns:1fr}}",".ap-home .ap-opt{font:400 14px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important}",".ap-home .ap-whybox{margin:12px 0 0}",".ap-home .ap-whybox[hidden]{display:none}",".ap-home .ap-help{margin:14px 0 0;padding:12px 0 0;border-top:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-help-line{font:400 15.5px/1.5 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:4px 0 0}",".ap-home .ap-help-more{margin:10px 0 0}",".ap-home .ap-help-list{margin:8px 0 0;border-top:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-help-list[hidden]{display:none}",".ap-home .ap-help-item{padding:10px 0 12px;border-bottom:1px solid var(--ap-rule,#E2DCD1)}",".ap-home .ap-help-claim{font:400 16px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}",".ap-home .ap-help-src{font:400 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:4px 0 0}"].join("");
    host.parentNode.insertBefore(st, host);
  })();

  /* ───────────── the land ───────────── */
  /* the five stops of the road in order, each with its verse; the story work lands by one rule, the same for every course: the page's registry names the place of every piece (the place column), and nothing here names a piece */
  var PLACES = [
    { key: "gate", name: "The gate", ref: "Genesis 12:1", focus: "48% 62%", light: "mist", verse: "Go from your country and your kindred and your father’s house to the land that I will show you.", line: "The one you came through. You were called to this land; you did not find it.", short: "Where you came in", age: "then" },
    { key: "stream", name: "The stream", ref: "Psalm 1:3", focus: "38% 52%", light: "mist", verse: "He is like a tree planted by streams of water that yields its fruit in its season.", line: "What you take in. What you read, hear and keep runs past the garden.", short: "What you take in" },
    { key: "stones", name: "The stones", ref: "Joshua 4:6–7", focus: "52% 66%", light: "day", verse: "When your children ask in time to come, ‘What do those stones mean to you?’", line: "The ones you set yourself, each where the LORD did something.", short: "Where the LORD did something" },
    { key: "house", name: "Your house", ref: "Proverbs 24:3–4", focus: "34% 52%", light: "evening", verse: "By wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled.", line: "Built by what you do, see and know. The light in the window was on before you came.", short: "The light is on", age: "now" },
    { key: "horizon", name: "The horizon", ref: "Genesis 1:5", focus: "52% 42%", light: "gold", verse: "And there was evening and there was morning, the first day.", line: "What is still ahead. Evening, then morning, and the road goes on.", short: "What is still ahead", age: "ahead" }
  ];
  /* the Begin page: What the Land Means, then three plain lines, then the verse and the floor */
  var MEANS = [
    "Abram was told to leave his father’s house for a land he had not seen (Genesis 12:1). Every man who starts this road does the same. The gate at the edge of your land is the one you came through. You did not find this place; you were called to it. Nothing behind the gate is drawn. It is enough that you walked through it.",
    "The house is yours to build, and it is built the way Proverbs says a house is built: “by wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled” (Proverbs 24:3–4). Every answer you write becomes a stone, a beam, or something in a room. Nobody writes a sentence for you.",
    "Look at your house again. There is a light in the window, and it was there before you laid the first stone. Jesus said, “we will come to him and make our home with him” (John 14:23). Not a house next to yours. Yours. He moved in the day you came through the gate, and the light stays on whether the walls go up fast or slow. It was prepared for you before you came. So you are not building alone, and you never were: “Unless the LORD builds the house, those who build it labor in vain” (Psalm 127:1). Build. He is already home.",
    "The garden is where the practice lives. “To work it and keep it” was the first work a man was given (Genesis 2:15). What you say you are practicing is the garden’s name. Each thing you do is a row.",
    "The stream is what you take in. The pieces you open and keep run past the garden, because that is where the text plants the tree, “by streams of water,” bearing fruit in its season (Psalm 1:3).",
    "The sun crosses the land whether you move or not. “There was evening and there was morning” (Genesis 1:5). When it sets, you will read your land back in your own words. The evening is where the next day begins."
  ];
  var THREE = [
    "Every week starts in the text’s own world and ends in yours.",
    "The land changes under you so you can see the distance you have walked.",
    "What is still ahead stays on the horizon."
  ];
  var POSTURE = "“The heart of man plans his way, but the LORD establishes his steps.” — Proverbs 16:9";
  var FLOOR = "Nothing here is a score. Everything here is yours or the text’s.";

  /* his pieces as the page already read them (ap:states, ap:stones): the chronicle the land is drawn from */
  function states() { var r = window.apStates; return r && r.length ? r : []; }
  function stateOf(key) { var s = states().filter(function (x) { return x && x.key === key; })[0]; return s && s.status && s.status !== "none" ? s : null; }

  /* ───────────── what the page hands over: the week, the band, the shelf ───────────── */
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  function dparts(iso) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || "")); return m ? { y: +m[1], m: +m[2], d: +m[3] } : null; }
  function wdName(iso) { var p = dparts(iso); return p ? DAYS[new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay()] : ""; }
  function monShort(iso) { var p = dparts(iso); return p ? MONTHS[p.m - 1].slice(0, 3) + " " + p.d : ""; }
  function weekInfo() { return window.apWeek || null; }
  /* one reading of the man's week for every note on the panels: the server's band (the Rooms tab) when it has answered, the page's own road feed until then */
  function ctx(d) {
    var b = d && d.band, W = weekInfo() || {};
    return {
      course: (b && b.course) || W.title || "",
      week: (b && b.week) || W.cur || 0,
      total: (b && b.total) || W.total || 0,
      unit: (b && b.unit) || "",
      date: b && b.room === false ? "" : ((b && b.date) || W.day || ""),
      done: !!((b && b.done) || (W && W.ended))
    };
  }
  function surfaces() { return window.apSurfaces || {}; }
  function shelf() { return document.getElementById("apShelf"); }
  function cardNode(key) { return document.querySelector('.ap-card[data-story="' + key + '"]'); }
  function cardShown(n) { return !!n && n.style.display !== "none"; }
  /* every piece at its place by the one place column of the page's registry; the order is the registry's */
  function cardsAt(place) {
    var S = surfaces(), out = [];
    Object.keys(S).forEach(function (k) { if (S[k] && S[k].place === place) { var n = cardNode(k); if (cardShown(n)) out.push(n); } });
    return out;
  }
  function pileAt() { return window.apPileAt || ""; }
  function pileNode() { return document.getElementById("apPileBox"); }
  function stash() {
    var s = shelf(); if (!s) return;
    [].forEach.call(host.querySelectorAll('[data-role="pieces"] > .ap-card, [data-role="pieces"] > #apPileBox'), function (n) { s.appendChild(n); });
  }
  function fillPlaces() {
    [].forEach.call(host.querySelectorAll('[data-role="pieces"]'), function (box) {
      var key = box.getAttribute("data-place");
      cardsAt(key).forEach(function (n) { box.appendChild(n); });
      var pn = pileNode(); if (pn && pileAt() === key) box.appendChild(pn);
    });
  }
  function isKept(n) { return !!stateOf(n.getAttribute("data-story")); }
  function titleOf(n) { var t = n.querySelector(".ap-card-title"); return t ? String(t.textContent || "").trim() : ""; }
  function clip(s, n) { s = String(s || "").replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…" : s; }
  function placeHas(key, d) {
    var L = d.land || {};
    if (cardsAt(key).some(isKept)) return true;
    if ((L.places && L.places[key] || []).length) return true;
    if (pileAt() === key && (window.apStones || []).length) return true;
    if (key === "stream" && (L.readings || []).length) return true;
    if (key === "house" && ((L.answers || []).length || (L.practice || []).length)) return true;
    return false;
  }
  /* the short line under a stop of the board: what he has kept there, else what the place is */
  function stopLine(key, d) {
    var p = PLACES.filter(function (x) { return x.key === key; })[0];
    if (pileAt() === key) { var s = (window.apStones || [])[0]; if (s && (s.name || s.text)) return clip(s.name || String(s.text).split("\n")[0], 60); }
    var k = cardsAt(key).filter(isKept)[0]; if (k && titleOf(k)) return titleOf(k);
    return p ? p.short : "";
  }
  function thumbOf(src) { return String(src || "").replace(/sz=w\d+/, "sz=w480"); }
  function landKept(d) {
    var L = d.land || {};
    return states().some(function (s) { return s && s.status && s.status !== "none"; }) || (window.apStones || []).length > 0 ||
      (L.answers || []).length > 0 || (L.practice || []).length > 0 || Object.keys(L.places || {}).length > 0 || (L.readings || []).length > 0;
  }
  function shouldLand(d) { return !!(d && d.land && landKept(d)); }

  /* what he has kept at a place, in his own words (the pieces themselves are the cards, moved in by fillPlaces) */
  function hisAt(key, d) {
    var L = d.land || {}, h = placeLines(key, d);
    if (key === "stream" && (L.readings || []).length) {
      h += '<span class="ap-land-word">Readings you opened</span>' + L.readings.slice(0, 6).map(function (r) {
        var link = r.link ? ' <a href="' + esc(r.link) + '" target="_blank" rel="noopener">' + esc(actOf(r)) + ' ↗</a>' : "";
        return '<p class="ap-land-line">' + esc(r.claim) + '<span class="ap-land-when">' + esc("Opened " + r.opened + (r.voice ? " · " + String(r.voice).replace(/\s*\(.*$/, "") : "")) + link + "</span></p>";
      }).join("");
    }
    if (key === "house" && !d.bare) {
      var rest = 0;
      function lines(list, cap) { return list.map(function (a, i) { if (i >= cap) rest++; return '<p class="ap-land-line' + (i >= cap ? " ap-land-rest" : "") + '">' + esc(a.text) + (a.when ? '<span class="ap-land-when">' + esc(a.when) + "</span>" : "") + "</p>"; }).join(""); }
      var pr = L.practice || [];
      if (pr.length) h += '<span class="ap-land-word verse">to work it and keep it · Genesis 2:15</span>' + lines(pr.slice(0, 6), 1);
      if (rest) h += '<button type="button" class="ap-rev" data-act="landmore">More of your words <span data-role="landmorearrow">▾</span></button>';
      h += houseHtml(d);
    }
    return h;
  }
  /* his house: three rooms in the verse\u2019s own order (Proverbs 24:3\u20134), each with its lintel \u2014 built by wisdom, established by understanding, the rooms filled by knowledge.
     Before he writes, a room holds the verse alone; what he writes builds up under it, oldest first, so the week he is in reads at the bottom. Nothing is counted. */
  var ROOMS = [
    { key: "did", lintel: "By wisdom a house is built", word: "what you did" },
    { key: "saw", lintel: "by understanding it is established", word: "what you saw" },
    { key: "know", lintel: "by knowledge the rooms are filled", word: "what you know now" }
  ];
  function houseHtml(d) {
    var L = d.land || {}, h = '<div class="ap-land-house" data-role="house"><p class="ap-land-eyebrow">Your house so far <span>\u00b7 Proverbs 24:3\u20134</span></p><div class="ap-land-rooms">';
    ROOMS.forEach(function (r) {
      var mine = (L.answers || []).filter(function (a) { return (a.strand || "did") === r.key && a.text; }).slice().reverse();
      h += '<div class="ap-land-room' + (mine.length ? " built" : "") + '" data-room="' + r.key + '"><p class="ap-land-lintel">' + esc(nb(r.lintel)) + '</p><p class="ap-land-roomword">' + esc(r.word) + "</p>";
      mine.forEach(function (a) { h += '<p class="ap-land-line">' + esc(a.text) + (a.when ? '<span class="ap-land-when">' + esc(a.when) + "</span>" : "") + "</p>"; });
      h += "</div>";
    });
    return h + "</div></div>";
  }
  /* the land as a story: each place carries the words of What the Land Means that belong to it, then his own words there */
  var CHAPTER = { gate: [0], stream: [4], stones: ["stones"], house: [1, 2, 3], horizon: [5] };
  var STONES_P = "The stones along the road are the ones you set yourself. Israel carried twelve stones up out of the Jordan so that when their children asked, \u201cWhat do those stones mean to you?\u201d there would be an answer (Joshua 4:6\u20137). Each stone you set here is one of those: a place the LORD did something, kept in your own words.";
  function chapterText(key) { return CHAPTER[key].map(function (i) { return i === "stones" ? STONES_P : MEANS[i]; }); }
  /* the three asks of the first open: one line each, none required; what he writes stands at the place the moment he writes it (John's to rule) */
  var ASKS = {
    gate: { q: "You came through a gate to get here. What did you leave behind it?", help: "A habit, a house, a way of living. Yours to name." },
    stream: { q: "What are you taking in right now?", help: "What you read, hear and watch these days." },
    stones: { q: "What has the LORD done on your road that you do not want to forget?", help: "One thing. A stone is set where He did something." },
    house: { q: "What are you building?", help: "A habit, a marriage, a way of being a father." },
    horizon: { q: "What is still ahead for you?", help: "What you are walking toward. One line is enough." }
  };
  var ASK_ORDER = ["gate", "stream", "stones", "house", "horizon"];
  function placeLines(key, d) {
    var L = d.land || {}, list = (L.places && L.places[key]) || [];
    return list.map(function (a) { return '<p class="ap-land-line">' + esc(a.text) + (a.when ? '<span class="ap-land-when">' + esc(a.when) + "</span>" : "") + "</p>"; }).join("");
  }
  /* what a man can do at each place: a page to write, a stone to set; every one a Walk line, never a navy button */
  var PAGES = { wif: "/where-i-am-from", lament: "/write-a-lament", stones: "/set-a-stone", wkl: "/what-kind-of-light" };
  function walkLink(href, label, open) { return '<a class="ap-walk" href="' + esc(href) + '"' + (open ? ' target="_blank" rel="noopener" data-act="open"' : '') + '>' + esc(label) + '<span class="ap-walk-arrow">→</span></a>'; }
  /* build 10: the act a piece asks, and the course and week it was handed for */
  function actOf(p) { var a = String(p && p.act || "").trim(); return /^(Read|Listen|Watch)$/.test(a) ? a : "Read"; }
  function headOf(p) { if (!p || !p.course) return p && p.isNew ? "New this week" : "This week"; return p.course + (p.unit ? " · Week " + p.unit : ""); }
  /* the ask at a place: a question over one line; the line is kept when he leaves the box, and "Kept at the gate" says so. No button. */
  function askHtml(key, d) {
    var a = ASKS[key]; if (!a) return "";
    var L = d.land || {}, have = (L.places && L.places[key] || []).length;
    if (have && !L.walk) return "";
    return '<div class="ap-answer ap-land-ask" data-role="placeask" data-place="' + key + '"><p class="ap-answer-q">' + esc(nb(a.q)) + '</p>' +
      '<input type="text" maxlength="200" data-role="placeown" data-place="' + key + '" placeholder="' + esc(a.help) + '" aria-label="' + esc(a.q) + '">' +
      '<div class="ap-answer-act"><button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-act="placekeep" data-place="' + key + '">Keep it</button><span class="ap-answer-state" data-role="placestate" data-place="' + key + '"></span></div></div>';
  }
  function openPlace(d) {
    var L = d.land || {};
    if (L.open && ASK_ORDER.indexOf(L.open) >= 0) return L.open;
    var age = L.age || "then", p = PLACES.filter(function (x) { return x.age === age; })[0];
    return p ? p.key : "gate";
  }
  /* the stage: every place's picture layered in one frame; the open one shows; the name on the picture; the road with its marks and the man's mark */
  function stageHtml(d, open) {
    var L = d.land || {}, pics = L.pictures || {};
    var lit = PLACES.filter(function (x) { return x.key === open; })[0];
    var h = '<div class="ap-land-stage" data-role="stage" data-light="' + (lit ? lit.light : "mist") + '">';
    PLACES.forEach(function (q) {
      var src = pics.land ? "" : pics[q.key];
      h += src ? '<img class="ap-land-layer' + (q.key === open ? " on" : "") + '" data-layer="' + q.key + '" src="' + esc(src) + '" alt="" decoding="async" style="object-position:' + q.focus + ';transform-origin:' + q.focus + '">' : '<div class="ap-land-layer blank' + (q.key === open ? " on" : "") + '" data-layer="' + q.key + '"></div>';
    });
    if (pics.land) h += '<img class="ap-land-layer on" data-layer="land" src="' + esc(pics.land) + '" alt="" decoding="async">';
    PLACES.forEach(function (q) { h += '<p class="ap-land-place' + (q.key === open ? " on" : "") + '" data-placename="' + q.key + '"><b>' + esc(q.name) + "</b><small>" + esc(q.ref) + "</small></p>"; });
    h += '<div class="ap-land-roadline"></div>';
    PLACES.forEach(function (q, i) { h += '<i class="ap-land-mark' + (placeHas(q.key, d) ? " has" : "") + '" data-mark="' + q.key + '" style="left:' + (10 + 20 * i) + '%"></i>'; });
    h += '<i class="ap-land-man" data-role="man" style="left:' + (10 + 20 * Math.max(0, ASK_ORDER.indexOf(open))) + '%"></i>';
    return h + "</div>";
  }
  /* the walk: the five places one after another, each its line, its verse and its one thing; the picture above changes as each arrives; it ends on the horizon */
  function stepsHtml(d) {
    var h = '<div class="ap-land-steps" data-role="steps">';
    PLACES.forEach(function (q, i) {
      var next = PLACES[i + 1], ask = askHtml(q.key, d), act = ask ? "" : doAt(q.key, d);
      h += '<div class="ap-land-step' + (i === 0 ? " in" : "") + '" data-step="' + q.key + '">';
      h += '<p class="ap-land-eyebrow">' + esc(q.name) + "</p>";
      h += '<p class="ap-land-story">' + esc(nb(q.line)) + "</p>";
      h += '<p class="ap-land-verse">' + esc(nb("“" + q.verse + "”")) + "<span>" + esc(q.ref) + "</span></p>";
      if (i === 0) h += '<p class="ap-land-quiet">' + esc(nb("Nothing here is required. What you write stands where you wrote it.")) + "</p>";
      if (ask) h += ask; else if (act) h += '<div class="ap-land-do">' + act + "</div>";
      h += '<p class="ap-land-on"><button type="button" class="ap-walk" data-act="walkto" data-place="' + (next ? next.key : "end") + '">' + esc(next ? "On to " + next.name.replace(/^The /, "the ").replace(/^Your /, "your ") : "To the end of the walk") + '<span class="ap-walk-arrow">↓</span></button></p>';
      h += "</div>";
    });
    h += '<div class="ap-land-step ap-land-end" data-step="end"><p class="ap-land-story">' + esc(nb(THREE[2])) + '</p><p class="ap-land-verse">' + esc(nb(POSTURE.replace(/\s*—\s*Proverbs 16:9$/, ""))) + "<span>Proverbs 16:9</span></p>" +
      '<p class="ap-land-quiet">' + esc(nb("This is your land. It changes under you as you walk, and what you write stands where you wrote it.")) + '</p>' +
      '<p class="ap-land-on"><button type="button" class="ap-walk" data-act="landgo">Go to your land<span class="ap-walk-arrow">→</span></button></p></div>';
    return h + "</div>";
  }
  /* the picture changes in place: the layer, the name, the man's mark; nothing is redrawn, so the page does not jump */
  function showPlace(key) {
    var land = el('[data-role="land"]'); if (!land) return;
    land.setAttribute("data-open", key);
    var stage = el('[data-role="stage"]'); if (!stage) return;
    var pl = PLACES.filter(function (x) { return x.key === key; })[0]; stage.setAttribute("data-light", pl ? pl.light : "mist");
    [].forEach.call(stage.querySelectorAll("[data-layer]"), function (x) { if (x.getAttribute("data-layer") !== "land") x.classList.toggle("on", x.getAttribute("data-layer") === key); });
    [].forEach.call(stage.querySelectorAll("[data-placename]"), function (x) { x.classList.toggle("on", x.getAttribute("data-placename") === key); });
    var man = stage.querySelector('[data-role="man"]'), i = ASK_ORDER.indexOf(key); if (man && i >= 0) man.style.left = (10 + 20 * i) + "%";
    [].forEach.call(host.querySelectorAll(".ap-land-stop"), function (x) { x.classList.toggle("on", x.getAttribute("data-place") === key); });
  }
  /* the walk follows his scrolling: the place whose words are in front of him is the place the picture shows */
  function watchWalk() {
    var steps = host.querySelectorAll(".ap-land-step"); if (!steps.length) return;
    function tick() {
      var stage = el('[data-role="stage"]'), top = stage ? stage.getBoundingClientRect().bottom : 0, line = top + (window.innerHeight - top) * 0.45, cur = null;
      [].forEach.call(steps, function (st) { var r = st.getBoundingClientRect(); if (r.top <= line) cur = st; if (r.top < window.innerHeight * 0.85 && r.bottom > 0) st.classList.add("in"); });
      if (!cur) cur = steps[0];
      var stepKey = cur.getAttribute("data-step"), key = stepKey === "end" ? "horizon" : stepKey;
      if (watchWalk.step !== stepKey) { if (watchWalk.step) keepIfWritten(watchWalk.step); watchWalk.step = stepKey; }
      if (watchWalk.at !== key) { watchWalk.at = key; showPlace(key); }
      if (!watchWalk.still) { var cr = cur.getBoundingClientRect(), prog = Math.max(0, Math.min(1, (line - cr.top) / Math.max(1, cr.height))); var ly = stage && stage.querySelector('img[data-layer="' + key + '"]'); if (ly) ly.style.transform = "scale(" + (1 + 0.09 * prog).toFixed(4) + ")"; }
    }
    function onScroll() { if (watchWalk.pending) return; watchWalk.pending = true; requestAnimationFrame(function () { watchWalk.pending = false; pin(); tick(); }); }
    /* the picture stays at the top of the screen while the places pass under it: pinned by measure, so it holds inside any page box that scrolls */
    function pin() {
      var land = el('[data-role="land"]'), stage = el('[data-role="stage"]'), hold = el('[data-role="stagehold"]'); if (!land || !stage || !hold) return;
      var bar = 0; try { bar = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--ap-bar"), 10) || 0; } catch (e) {}
      var lr = land.getBoundingClientRect(), hr = hold.getBoundingClientRect(), h = hold.offsetHeight || stage.offsetHeight;
      var on = hr.top <= bar && lr.bottom > bar + h + 120;
      if (on) { stage.style.position = "fixed"; stage.style.top = bar + "px"; stage.style.left = Math.round(lr.left) + "px"; stage.style.width = Math.round(lr.width) + "px"; stage.style.height = h + "px"; hold.style.height = h + "px"; }
      else { stage.style.position = ""; stage.style.top = ""; stage.style.left = ""; stage.style.width = ""; stage.style.height = ""; }
    }
    unwatchWalk();
    watchWalk.still = false; try { watchWalk.still = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    watchWalk.on = onScroll; watchWalk.at = null; watchWalk.step = null;
    window.addEventListener("scroll", onScroll, { passive: true }); document.addEventListener("scroll", onScroll, true); window.addEventListener("resize", onScroll);
    if (window.IntersectionObserver) { watchWalk.io = new IntersectionObserver(onScroll, { threshold: [0, 0.25, 0.5, 0.75, 1] }); [].forEach.call(steps, function (st) { watchWalk.io.observe(st); }); }
    pin(); tick(); setTimeout(onScroll, 300);
  }
  function unwatchWalk() { if (watchWalk.on) { window.removeEventListener("scroll", watchWalk.on); document.removeEventListener("scroll", watchWalk.on, true); window.removeEventListener("resize", watchWalk.on); watchWalk.on = null; } if (watchWalk.io) { watchWalk.io.disconnect(); watchWalk.io = null; } }
  function keepIfWritten(key) {
    var inp = host.querySelector('[data-role="placeown"][data-place="' + key + '"]'); if (!inp) return;
    var text = inp.value.trim(); if (!text || inp.getAttribute("data-kept") === text) return;
    placeKeep(key, text);
  }
  /* the first ask: what he is practicing this week — the course's own practices for the week, pressed, or his own words; it names the garden */
  function practiceHtml(d) {
    var L = d.land; if (!L || d.bare) return "";
    var list = L.practices || [], kept = L.kept || null;
    var have = !!(kept && kept.text);
    var h = '<div class="ap-hr-ask' + (have ? " kept" : "") + '" data-role="practiceask"><p class="ap-hr-q">What are you practicing this week?</p>';
    if (have) h += '<p class="ap-hr-kept">You said: <q>' + esc(kept.text) + '</q></p><button type="button" class="ap-rev" data-act="practicechange">Change it <span data-role="practicearrow">\u25be</span></button>';
    h += '<div class="ap-hr-picking" data-role="picking">';
    if (list.length) h += '<div class="ap-hr-picks">' + list.map(function (p, i) { return '<button type="button" class="ap-hr-pick' + (kept && kept.text === p ? " on" : "") + '" data-act="practice" data-i="' + i + '">' + esc(p) + "</button>"; }).join("") + "</div>";
    h += '<div class="ap-answer"><input type="text" maxlength="200" data-role="own" placeholder="Or say it in your own words." aria-label="What are you practicing this week?"><div class="ap-answer-act"><button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-act="practiceown">Keep it</button><span class="ap-answer-state" data-role="practicestate"></span></div></div></div></div>';
    return h;
  }
  /* build 10, the setup: three Answers asked once — which course his road reads from (up to two; the first he picks leads), the pace, how he is told — and one button, Keep it.
     Kept, it folds to one line (Your road reads from … · Three a week · One line by email. Change ▾ What this is ▾). Nothing shows under it until it is kept. */
  var PACE_Q = "How often would you like a new piece?";
  var PACE_LEAD = "We hand you up to this many, as the shelf has them. The question back stays once a week.";
  var COURSE_Q = "Which course is your road reading from?";
  var COURSE_LEAD = "Pick the one you are in. Add one more if you like; the first you pick leads, and the road reads at most two at a time.";
  var COURSE_LEAD_GATE = "You are not in a course yet. Pick one and the road starts reading from it; the course itself is your next step. Add a second if you like; the first you pick leads.";
  var NOTICE_Q = "When something new lands here, how should we tell you?";
  var NOTICE_LEAD = "One line, no words of yours or ours in it, only when something lands. Never on a schedule.";
  var INTRO = "Each week our team chooses reading, listening or watching from the voices we follow, matched to the week you are on, with one thing to do. Once a week we ask you one question back, and what you write stands on your land where you wrote it. By the end you hold a record, in your own words, of what changed, and a person on our team reads your road once a month and writes to you.";
  var INTRO_PLAIN = "Each week our team chooses reading, listening or watching from the voices we follow, matched to the week you are on, with one thing to do. Once a week we ask you one question back, and a person on our team reads your road once a month and writes to you.";
  function introHtml(d) { return '<div class="ap-what" data-role="what"><p class="ap-road-line ap-road-what">' + esc(nb(d.lead || (d.land ? INTRO : INTRO_PLAIN))) + "</p></div>"; }
  var picked = [];
  function pickedFrom(S) { return [S && S.lead, S && S.second].filter(Boolean); }
  function subOf(o, i) { return o.state + (i === 0 ? " · Leads your road" : i === 1 ? " · Your second course" : ""); }
  function foldLine(d) {
    var S = d.setup || {}, P = d.pace || {}, n = (d.notices || []).filter(function (x) { return x.key === (S.notice || "email"); })[0];
    var courses = pickedFrom(S);
    return (courses.length ? "Reads from " + courses.join(", then ") : "No course yet") + " · " + (P.label || "Three a week") + (n ? " · " + n.label : "");
  }
  function courseAsk(d) {
    var S = d.setup || {}, list = S.offered || [];
    var h = '<div class="ap-answer ap-pace-ask ap-ask-first" data-role="courseask"><p class="ap-answer-q">' + esc(nb(COURSE_Q)) + '</p><p class="ap-answer-lead">' + esc(nb(S.noCourse ? COURSE_LEAD_GATE : COURSE_LEAD)) + '</p>' +
      '<div class="ap-pace-opts" role="group" aria-label="' + esc(COURSE_Q) + '">';
    list.forEach(function (o) {
      var i = picked.indexOf(o.name), on = i >= 0;
      h += '<label class="ap-pace-opt' + (on ? " on" : "") + '"><input type="checkbox" name="apCourse" value="' + esc(o.name) + '"' + (on ? " checked" : "") + '><span>' + esc(o.name) + '<span class="ap-opt-sub" data-role="sub" data-course="' + esc(o.name) + '">' + esc(nb(subOf(o, i))) + "</span></span></label>";
    });
    return h + '</div><p class="ap-answer-state" data-role="coursestate"></p></div>';
  }
  function paceAsk(d) {
    var P = d.pace || {}, list = d.paces || [];
    return '<div class="ap-answer ap-pace-ask"><p class="ap-answer-q">' + esc(nb(PACE_Q)) + '</p><p class="ap-answer-lead">' + esc(nb(PACE_LEAD)) + '</p>' +
      '<div class="ap-pace-opts" role="radiogroup" aria-label="' + esc(PACE_Q) + '">' + list.map(function (o) {
        var on = (P.key || "three") === o.key;
        return '<label class="ap-pace-opt' + (on ? " on" : "") + '"><input type="radio" name="apPace" value="' + esc(o.key) + '"' + (on ? " checked" : "") + '><span>' + esc(o.label) + '</span></label>';
      }).join("") + "</div></div>";
  }
  function noticeAsk(d) {
    var S = d.setup || {}, list = d.notices || [];
    return '<div class="ap-answer ap-pace-ask"><p class="ap-answer-q">' + esc(nb(NOTICE_Q)) + '</p><p class="ap-answer-lead">' + esc(nb(NOTICE_LEAD)) + '</p>' +
      '<div class="ap-pace-opts" role="radiogroup" aria-label="' + esc(NOTICE_Q) + '">' + list.map(function (o) {
        var on = (S.notice || "email") === o.key;
        return '<label class="ap-pace-opt' + (on ? " on" : "") + '"><input type="radio" name="apNotice" value="' + esc(o.key) + '"' + (on ? " checked" : "") + '><span>' + esc(o.label) + '</span></label>';
      }).join("") + "</div></div>";
  }
  function setupHtml(d) {
    var S = d.setup;
    if (!S) return "";
    if (!setupHtml.seeded) { picked = pickedFrom(S); setupHtml.seeded = true; }
    var set = !!S.kept;
    var h = '<div class="ap-pace' + (set ? " kept" : "") + '" data-role="pace">';
    h += '<p class="ap-pace-line"><span data-role="paceword">' + esc(nb(foldLine(d))) + '</span><button type="button" class="ap-rev" data-act="pacechange">Change <span data-arrow>▾</span></button><button type="button" class="ap-rev" data-act="whatis">What this is <span data-arrow>▾</span></button></p>';
    h += introHtml(d);
    h += courseAsk(d) + paceAsk(d) + noticeAsk(d);
    h += '<div class="ap-answer-act"><button type="button" class="ap-btn ap-btn-primary ap-btn-sm" data-act="pacekeep" data-role="pacebtn">Keep it</button><span class="ap-answer-state" data-role="pacestate"></span></div></div>';
    return h;
  }
  /* a man whose course is not a room he sits in: the course is the next step, one Walk line under the folded setup */
  function beginHtml(d) {
    var S = d.setup; if (!S || !S.kept) return "";
    var lines = (S.offered || []).filter(function (o) { return o.role && !o.room; }).map(function (o) {
      var started = /^Week ([2-9]|\d\d)/.test(o.state) || o.state === "Finished";
      return '<a class="ap-walk" href="/courses" data-act="begin">' + esc((started ? "Open " : "Begin ") + o.name) + '<span class="ap-walk-arrow">→</span></a>';
    });
    return lines.length ? '<p class="ap-hr-begin">' + lines.join("") + "</p>" : "";
  }
  /* the Courses panel on Your Page, when the page has one: Begin <course> lands there rather than on a course address kept in code */
  function coursesPanel() {
    var ts = document.querySelectorAll(".ap-panel .ap-panel-title");
    for (var i = 0; i < ts.length; i++) { if (/^courses$/i.test(String(ts[i].textContent || "").trim())) return ts[i].closest(".ap-panel"); }
    return null;
  }
  /* the pieces after the week's first: no question back on them (it comes once a week) */
  function moreHtml(d) {
    var m = d.more || []; if (!m.length) return "";
    return '<p class="ap-hr-label ap-hr-alsolabel">Also handed to you this week</p>' + m.map(function (p) { return pieceHtml(p, d); }).join("");
  }
  function pieceModel(id) { return [data && data.piece].concat((data && data.more) || []).filter(function (p) { return p && p.id === id; })[0] || null; }
  function wordHtml(w, d) {
    if (!w || !(w.verse || w.question || w.step)) return "";
    return '<div class="ap-hr-word"><p class="ap-hr-label">' + esc(d.wordLabel || "A word for the road") + "</p>" +
      (w.verse ? '<p class="ap-hr-wverse">' + esc(nb(w.verse)) + "</p>" : "") + (w.question ? "<p>" + esc(nb(w.question)) + "</p>" : "") + (w.step ? "<p>" + esc(nb(w.step)) + "</p>" : "") + "</div>";
  }
  function wordsHtml(word, p) {
    if (word === "met") return '<p>You said: it helped. Thank you. It shapes next week’s piece.</p><button type="button" class="ap-btn ap-btn-quiet" data-act="word" data-word="not">Change to: not this one</button>';
    if (word === "not") return '<p>You said: not this one. Thank you. A no helps us choose as much as a yes.</p><button type="button" class="ap-btn ap-btn-quiet" data-act="word" data-word="met">Change to: it helped</button>' + (p ? whyHtml(p) : "");
    return '<p>Did this reading help your week?</p><button type="button" class="ap-btn ap-btn-quiet" data-act="word" data-word="met">It helped</button><button type="button" class="ap-btn ap-btn-quiet" data-act="word" data-word="not">Not this one</button>';
  }

  /* ───────────── this week: Write · Read, Listen or Watch · Answer (ruled Oct 28 on the mockup "Your Page — One Week Spine") ───────────── */
  var TW_TITLE = "This Week", ROAD_TITLE = "For Your Road", LAND_TITLE = "Your Land";
  var SAFE = "What you write here goes to our team, and a person reads it within __REVIEW__, before anything else happens with it. It stays with our team, with one exception: if we believe you or someone else is in danger, we will act on that, and we will tell you we are doing it. For men eighteen and older.";
  function norm(s) { return String(s || "").toLowerCase().replace(/^\s*write\s+(?:an?\s+|your\s+)?/, "").replace(/^\s*your\s+/, "").replace(/[^a-z0-9]+/g, " ").trim(); }
  /* the card a Course map piece name points at: matched on the title the card carries, nothing named here */
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
  /* the pieces of story work the course has introduced by this week that he has not finished (the Course map's piece column, up to his week) */
  function writeItems(d) {
    var out = [], b = d.band || {}, c = ctx(d), seen = {};
    if (!window.apStates || !window.apStates.length) return out;
    /* the server's band names the story work the Course map has introduced; until it answers (or when it has none) the page's own week from the Front Desk feed does */
    var list = b.writes && b.writes.length ? b.writes : ((!b.course && weekInfo() && weekInfo().pieces) || []).map(function (p) { return { piece: p.name, address: p.href, unit: p.week }; });
    list.forEach(function (w) {
      var card = cardFor(w.piece), key = card ? card.getAttribute("data-story") : "", st = key ? stateOf(key) : null;
      if (st && st.status === "finished") return;
      if (!card && /set-a-stone/.test(String(w.address || "")) && (window.apStones || []).length) return;
      var title = card ? titleOf(card) : String(w.piece || ""); if (!title || seen[norm(title)]) return; seen[norm(title)] = 1;
      var body = card ? card.querySelector(".ap-card-body") : null, line = body && !/ap-card-quote/.test(body.className) ? firstSentence(body.textContent) : "";
      out.push({ title: title, href: w.address || cardHref(card), unit: numOf(w.unit), state: st ? "in progress" : "not started", line: line, key: key });
    });
    if (c.done && !seen[norm("Set a stone")]) out.push({ title: "Set a stone", href: PAGES.stones, unit: 0, state: "open now", line: "A stone keeps what the LORD did, and three months on it asks you to come back.", after: true });
    return out;
  }
  function numOf(v) { var n = parseInt(v, 10); return isNaN(n) ? 0 : n; }
  function writeRow(it, first, d) {
    var c = ctx(d), lab = "Write" + (it.after ? " · after the course" : it.unit ? " · given in week " + it.unit : "") + " · " + it.state;
    var line = it.line; if (c.date && !it.after) line = (line ? line + " " : "") + "Write it before " + wdName(c.date) + " and bring it with you.";
    return '<div class="ap-tw-row' + (first ? " ap-tw-first" : "") + '"' + (first ? ' id="apTwWrite"' : "") + ' data-row="write"><p class="ap-tw-lab">' + esc(lab) + '</p>' +
      '<a class="ap-tw-walk" href="' + esc(it.href || "#") + '" data-act="writego">' + esc(it.after ? it.title : writeName(it.title)) + ' →</a>' + (line ? '<p class="ap-tw-line">' + esc(nb(line)) + "</p>" : "") + "</div>";
  }
  function answerRow(d, first) {
    var p = d.piece; if (!p || !p.question) return "";
    var h = '<div class="ap-tw-row' + (first ? " ap-tw-first" : "") + '" id="apTwAnswer" data-row="answer" data-id="' + esc(p.id) + '"><p class="ap-tw-lab">Answer · one question for the week</p>';
    var safe = SAFE.replace("__REVIEW__", esc(d.review || "two days"));
    if (p.answer && p.answer.text) {
      h += '<p class="ap-tw-q">' + esc(nb(p.question)) + '</p>' +
        '<div class="ap-hr-answer"><p class="ap-hr-label">Your answer · sent ' + esc(p.answer.sent) + '</p><p class="ap-hr-text">' + esc(p.answer.text) + "</p></div>" +
        wordHtml(p.answer.word, d) +
        '<p class="ap-tw-fine">' + (p.answer.word ? "A person on our team has read it." : "A person on our team reads it within " + esc(d.review || "two days") + ", before anything else happens with it.") + (d.land ? " It stands at your house." : "") + "</p>";
    } else {
      h += '<label class="ap-tw-q" for="apTwTa">' + esc(nb(p.question)) + '</label>' +
        '<textarea class="ap-tw-ta" id="apTwTa" data-role="answer" maxlength="2000" placeholder="Write it here."></textarea>' +
        '<div class="ap-tw-act"><button type="button" class="ap-tw-send" data-act="send">Send</button><p class="ap-tw-quiet">Nothing comes back to your page that our team has not read first.</p></div>' +
        '<p class="ap-tw-state" data-role="sendstate"></p><p class="ap-tw-fine">' + esc(nb(safe)) + "</p>";
    }
    return h + "</div>";
  }
  /* ───────────── the weekly card (10.2): How's the path? · the voice · Do it · a hand. Rows under a rule; a chosen row is a state, not a button; every tap writes and says Kept. ───────────── */
  var MARKS = [
    { key: "view", label: "The view is good", svg: '<path d="M2 16 L8 7 L11 11 L14 6 L18 16 Z" class="mk"/>' },
    { key: "footing", label: "Good footing", svg: '<rect x="3" y="11" width="14" height="5" rx="1.5" class="mk"/>' },
    { key: "steep", label: "Steep", svg: '<path d="M3 16 L17 4 V16 Z" class="mk"/>' },
    { key: "lost", label: "Lost the trail", svg: '<circle cx="10" cy="10" r="6" class="mko"/><path d="M8 8 a2.4 2.4 0 1 1 3 2.3 V12" class="mko"/>' }
  ];
  /* The Word for It: the engine's list (window.APStory.wordForIt, heavy to light) is the one copy; this identical list is read only when the engine has not loaded */
  var WORD_FALLBACK = ["ashamed", "exposed", "afraid", "angry", "sad", "hurt", "alone", "numb", "tired", "stuck", "restless", "convicted", "sorry", "tender", "relieved", "seen", "hopeful", "grateful", "steady", "free", "glad"];
  function feelWords() { var e = window.APStory && window.APStory.wordForIt; return e && e.length ? [].slice.call(e) : WORD_FALLBACK.slice(); }
  /* Steep and Lost the trail start at the heavy end (first eight); The view is good and Good footing start at the light end (last eight, lightest first) */
  function wordFirst(mark) { var a = feelWords(); return mark === "steep" || mark === "lost" ? a.slice(0, 8) : a.slice(-8).reverse(); }
  var wordsMore = false;
  /* the marker words for the voice's heading: For the <words> stretch (the label's own words, lower case, with the small words that would break the line left out) */
  var STRETCH = { view: "good view", footing: "good footing", steep: "steep", lost: "lost trail" };
  var MISS = "It did not go through. Your choice is still here; press it again.";
  function stretchHead(C) { return C && C.mark && STRETCH[C.mark] ? "For the " + STRETCH[C.mark] + " stretch" : "For your week"; }
  function markRowsHtml(C) {
    return '<div class="ap-wk-marks" role="group" aria-label="How’s the path?">' + MARKS.map(function (m) {
      var on = C.mark === m.key;
      return '<button type="button" class="ap-wk-mark' + (on ? " on" : "") + '" data-act="mark" data-key="' + m.key + '" aria-pressed="' + (on ? "true" : "false") + '"><svg viewBox="0 0 20 20" aria-hidden="true">' + m.svg + "</svg><span>" + esc(m.label) + "</span></button>";
    }).join("") + "</div>";
  }
  function wordBtn(w, on) { return '<button type="button" class="ap-wk-word' + (on ? " on" : "") + '" data-act="mword" data-key="' + esc(w) + '" aria-pressed="' + (on ? "true" : "false") + '">' + esc(w.charAt(0).toUpperCase() + w.slice(1)) + "</button>"; }
  /* the words under a marker: the eight nearest the marker, then More words; a word he chose from further down opens the whole list so his choice shows */
  function markWordsInner(C) {
    var all = feelWords(), first = wordFirst(C.mark), far = !!C.word && first.indexOf(C.word) < 0 && all.indexOf(C.word) >= 0, whole = wordsMore || far;
    return (whole ? all : first).map(function (w) { return wordBtn(w, C.word === w); }).join("") + (whole ? "" : '<button type="button" class="ap-wk-word ap-wk-more" data-act="moreword">More words</button>');
  }
  /* 10.2.3: every tap answers in the words the ruled mockup gives, and a reply is drawn with the card when the choice is already kept, so a returning man sees it as he left it. */
  function smart(s) { return String(s || "").replace(/(\w)'(\w)/g, "$1’$2").replace(/'/g, "’"); }
  function inGroup(d) { return !!(d && d.group && d.group.in); }
  function keptHtml(text) { return /^Kept\./.test(text) ? "<b>Kept.</b>" + esc(nb(text.slice(5))) : esc(nb(text)); }
  function stateP(role, text) { return '<p class="ap-tw-state' + (text ? " kept" : "") + '" data-role="' + role + '">' + (text ? keptHtml(text) : "") + "</p>"; }
  var HELP_MARK_GROUP = "One tap. Your group’s leader reads your month’s marks before writing to you.";
  var HELP_MARK_TEAM = "One tap. Our team reads your month’s marks before writing to you.";
  var DID_HELP = "We want to support your growth here, establishing the right habits that lead to the personal development you desire.";
  var REMIND_HELP = "Change it any week. The right rhythm is the one that keeps you walking.";
  var REPLY = {
    mark: "Kept.",
    helped: { met: "Kept. Next week’s reading builds on what helped.", not: "Kept. Thank you. A no helps us choose as much as a yes." },
    why: { too_long: "Kept. We’ll offer the same idea again another week, in a shorter form.", not_needed: "Kept. We’ll steer toward what has helped you. If we think this idea still fits, we may offer it once more another way." },
    did: { most: "Kept. That’s a pathway forming.", some: "Kept. Some days counts. Pathways take time to form; keep going.", notyet: "Kept. We understand shifting priorities. We’re here to encourage the next right choice toward the healthy pathway you’ve identified. Choose it below." },
    when: { morning: "Kept. Your reminders come in the morning.", pull: "Kept. Your reminders come in the morning, so the practice is ready when the pull comes.", bed: "Kept. Your reminders come in the evening." },
    remind: { twice: "Kept. Morning and evening, your practice and the question to carry. One tap marks it done, and a missed one is never counted against you.", daily: "Kept. Each day, your practice and the question to carry. One tap marks it done, and a missed day is never counted against you.", few: "Kept. Three days a week, your practice and the question to carry. One tap marks it done, and a missed day is never counted against you.", weekly: "Kept. Once a week, midweek, your practice and the question to carry. One tap marks it done." }
  };
  var DID_OPTS = [["most", "Most days"], ["some", "Some days"], ["notyet", "Not this week"]];
  var WHEN_OPTS = [["morning", "Each morning"], ["pull", "When the pull comes"], ["bed", "Before bed"]];
  var REMIND_OPTS = [["twice", "Twice a day"], ["daily", "Each day"], ["few", "A few days a week"], ["weekly", "Once a week"]];
  var WHEN_WORDS = { morning: "each morning", pull: "when the pull comes", bed: "before bed" };
  /* one row of equal segments: the chosen one is a state (navy, white text), the rest are taps */
  function segsHtml(cls, label, act, list, cur, role) {
    return '<div class="' + cls + '"' + (role ? ' data-role="' + role + '"' : "") + ' role="group" aria-label="' + esc(label) + '">' + list.map(function (x) {
      var on = cur === x[0];
      return '<button type="button" class="ap-wk-twob' + (on ? " on" : "") + '" data-act="' + act + '" data-key="' + x[0] + '" aria-pressed="' + (on ? "true" : "false") + '">' + esc(x[1]) + "</button>";
    }).join("") + "</div>";
  }
  function markRow(d, C, first) {
    return '<div class="ap-tw-row' + (first ? " ap-tw-first" : "") + '" data-row="mark"><p class="ap-wk-q ap-wk-q-first">How’s the path?</p><p class="ap-tw-help">' + esc(nb(inGroup(d) ? HELP_MARK_GROUP : HELP_MARK_TEAM)) + "</p>" + markRowsHtml(C) +
      '<div class="ap-wk-name" data-role="name"' + (C.mark ? "" : " hidden") + '><p class="ap-wk-q">Name it, if you want</p><div class="ap-wk-words" data-role="namewords" role="group" aria-label="Name it, if you want">' + (C.mark ? markWordsInner(C) : "") + "</div></div>" + stateP("markstate", C.mark ? REPLY.mark : "") + "</div>";
  }
  function cardWordsHtml(w) {
    return '<div class="ap-wk-two" role="group" aria-label="Did this reading help your week?">' + [["met", "It helped"], ["not", "Not this one"]].map(function (x) {
      var on = w === x[0];
      return '<button type="button" class="ap-wk-twob' + (on ? " on" : "") + '" data-act="word" data-word="' + x[0] + '" aria-pressed="' + (on ? "true" : "false") + '">' + x[1] + "</button>";
    }).join("") + "</div>";
  }
  /* 10.2.4: What made it a no? (if you want): only after Not this one, in both places the reading question stands (This Week, For Your Road); two choices, each kept with its own line. A no helps us choose; nothing is scored. */
  function whyHtml(p) {
    var no = p && p.word === "not", cur = p && p.why || "";
    return '<div class="ap-whybox" data-role="whybox" data-id="' + esc(p.id) + '"' + (no ? "" : " hidden") + '><p class="ap-wk-q">What made it a no? <span class="ap-opt">(if you want)</span></p>' +
      '<div class="ap-wk-two" role="group" aria-label="What made it a no?">' + [["too_long", "Too long right now"], ["not_needed", "Not what I need"]].map(function (x) {
        var on = cur === x[0];
        return '<button type="button" class="ap-wk-twob' + (on ? " on" : "") + '" data-act="why" data-key="' + x[0] + '" aria-pressed="' + (on ? "true" : "false") + '">' + x[1] + "</button>";
      }).join("") + "</div>" + stateP("whystate", REPLY.why[cur] || "") + "</div>";
  }
  function voiceBy(p) { return String(p && p.voice || "").replace(/\s*\(.*$/, "").trim(); }
  function voiceRow(d) {
    var p = d.piece; if (!p) return "";
    return '<div class="ap-tw-row" id="apTwRead" data-row="read" data-id="' + esc(p.id) + '"><p class="ap-tw-lab" data-role="voicehead">' + esc(stretchHead(d.card)) + '</p>' +
      '<p class="ap-tw-claim">' + esc(nb(p.claim)) + '</p><p class="ap-wk-by ap-wk-listen">' + (voiceBy(p) ? esc(voiceBy(p)) + " · " : "") + walkLink(p.minuteLink || p.link, actOf(p), true) + (p.short && p.minutes ? " · " + esc(p.minutes) : "") + "</p>" +
      '<p class="ap-wk-q">Did this reading help your week?</p><div data-role="cardwords" data-id="' + esc(p.id) + '">' + cardWordsHtml(p.word) + "</div>" + stateP("wordstate", REPLY.helped[p.word] || "") + whyHtml(p) + "</div>";
  }
  function didHtml(did) { return segsHtml("ap-wk-three", "How did it go?", "did", DID_OPTS, did); }
  /* a practice he picked is saved to 200 characters, so a long one is matched by its start */
  function isPicked(C, t) { var p = C.practice || ""; return !!p && (t === p || (p.length >= 200 && t.indexOf(p) === 0)); }
  function pickedAt(C) { var L = C.practices || []; for (var i = 0; i < L.length; i++) if (isPicked(C, L[i])) return i; return -1; }
  var picksOpen = false;
  function pickBtn(C, t, i, act) {
    var on = isPicked(C, t);
    return '<button type="button" class="ap-wk-pick' + (on ? " on" : "") + '" role="radio" aria-checked="' + (on ? "true" : "false") + '" data-act="' + act + '" data-i="' + i + '"><i class="ap-wk-dot"></i><span>' + esc(nb(t)) + "</span></button>";
  }
  /* before he picks: every row. Once he has picked: the chosen row alone, and Change reopens the list. */
  function picksBox(C) {
    var L = C.practices || [], at = pickedAt(C);
    if (at >= 0 && !picksOpen) return '<div class="ap-wk-picks" role="radiogroup" aria-label="This week’s practice">' + pickBtn(C, L[at], at, "pickchange") + '</div><p class="ap-wk-change"><button type="button" class="ap-rev" data-act="pickchange" aria-expanded="false">Change <span data-arrow>▾</span></button></p>';
    return '<div class="ap-wk-picks" role="radiogroup" aria-label="This week’s practice">' + L.map(function (t, i) { return pickBtn(C, t, i, "cpick"); }).join("") + "</div>" +
      (at >= 0 ? '<p class="ap-wk-change"><button type="button" class="ap-rev" data-act="pickchange" aria-expanded="true">Change <span data-arrow>▴</span></button></p>' : "");
  }
  /* what a reminder will look like: his practice and the question to carry (the guidepost's own), one tap to mark it done; nothing is sent in this build */
  function mailHtml(C) {
    var w = wmOf(C.waymark), pr = C.practice || "";
    return '<div class="ap-mail" data-role="mail" aria-label="What a reminder looks like"><p class="ap-mail-from">What arrives · from Ancient Path</p><p class="ap-mail-sub">Your practice today</p>' +
      '<p class="ap-mail-line">' + esc(nb(pr || "The practice you pick above.")) + "</p>" + (w ? '<p class="ap-mail-line"><b>Carry this:</b> ' + esc(nb(w.ask)) + "</p>" : "") +
      '<p class="ap-mail-act"><span class="ap-walk">I did it today<span class="ap-walk-arrow">→</span></span></p><p class="ap-mail-foot">Change how often on Your Page.</p></div>';
  }
  function paintMail(C) { var m = el('[data-role="mail"]'); if (!m || !C) return; var t = document.createElement("div"); t.innerHTML = mailHtml(C); m.parentNode.replaceChild(t.firstChild, m); }
  function doRow(d) {
    var C = d.card; if (!C || !C.doit) return "";
    var has = (C.practices || []).length; if (!C.lastChose && !has) return "";
    var h = '<div class="ap-tw-row" data-row="doit">';
    if (C.lastChose) h += '<p class="ap-tw-lab">Last week you chose</p><p class="ap-wk-last">“' + esc(nb(C.lastChose)) + "”" + (WHEN_WORDS[C.lastWhen] ? " · " + WHEN_WORDS[C.lastWhen] : "") + '</p><p class="ap-wk-q">How did it go?</p><div data-role="didbox">' + didHtml(C.did) + "</div>" + stateP("didstate", REPLY.did[C.did] || "") + '<p class="ap-tw-help">' + esc(nb(DID_HELP)) + "</p>";
    if (has) {
      h += '<p class="ap-wk-q' + (C.lastChose ? "" : " ap-wk-q-first") + '">This week’s practice</p><div data-role="picksbox">' + picksBox(C) + '</div><p class="ap-tw-state" data-role="pickstate"></p>';
      h += '<p class="ap-wk-q">When will you do it?</p>' + segsHtml("ap-wk-three", "When will you do it?", "when", WHEN_OPTS, C.when, "whenbox") + stateP("whenstate", REPLY.when[C.when] || "");
      h += '<p class="ap-wk-q">How often should we remind you?</p>' + segsHtml("ap-wk-four", "How often should we remind you?", "remind", REMIND_OPTS, C.remind, "remindbox") + stateP("remindstate", REPLY.remind[C.remind] || "") + '<p class="ap-tw-help">' + esc(nb(REMIND_HELP)) + "</p>" + mailHtml(C);
    }
    return h + "</div>";
  }

  /* ───────────── the nine guideposts (10.2.3; "waymarks" in 10.2.1 and 10.2.2): this week's guidepost opens in place inside This Week (its question to carry, and more on tap); the nine sit shut at the foot as a reference, with no spiral. Every word is lifted from the ruled mockup "Your Page Top". Code identifiers keep the old name. ───────────── */
  var WM_TITLE = "The Nine Guideposts";
  var WM_LEAD = "Nine places a man gets stuck, and what helps him move again. This week’s is open in This Week above; all nine are here when you want to look further.";
  var WM_FOOT = "They are not steps. A person can stand at more than one at once. Some practices come from clinical work, so use them slowly and only with someone safe. This is care and coaching, not a replacement for counseling.";
  var WM_FIELDS = [["Where we get stuck", "stuck"], ["What is happening", "is_"], ["In Scripture", "scripture"], ["Ask yourself", "ask"], ["What helps", "helps"]];
  var WAYMARKS = [{"n": 1, "name": "The Watchpost", "one": "Notice before you react.", "stuck": "We react before we notice. A craving or a trigger shows up and we are already acting on it.", "sounds": "Sounds like: “I don’t know what happened. It just happened.”", "is_": "The mind has a center (the hub) and a ring of passing urges, feelings and thoughts (the rim). When we live on the rim, whatever comes up runs us. We can learn to stand at the hub and watch it pass.", "scripture": "Habakkuk takes his stand at a watchpost and looks out (Habakkuk 2:1). David talks to his own soul instead of obeying it (Psalm 42:5). God tells Cain that sin is crouching at the door, “but you must rule over it” (Genesis 4:7).", "applied": "", "ask": "Slow it down. What did you feel in your body right before?", "helps": "The Five Questions · The Wheel"},
    {"n": 2, "name": "From the Ground Up", "one": "Body first.", "stuck": "We go numb, check out, or get flooded. Either we feel nothing, or the feeling is so big we cannot think.", "sounds": "Sounds like: “I went somewhere else.” “My body took over.”", "is_": "Signals rise from the body and brainstem, and the thinking part at the front of the brain can steady them only when that line is open. Trauma cuts the line. The body has to settle before the mind can help.", "scripture": "Elijah, worn out and afraid, is fed and sleeps before God speaks to him (1 Kings 19:5–8). “I have calmed and quieted my soul” (Psalm 131:2).", "applied": "", "ask": "Are you here with me, or somewhere else? What would help you land?", "helps": "Feet on the Floor · The Long Exhale · The Body Check"},
    {"n": 3, "name": "The Word for It", "one": "Say what you feel.", "stuck": "We feel it and cannot say it, or we can explain it for an hour and never feel it. Either speechless or only explaining.", "sounds": "Sounds like: “I don’t have words.” “I know exactly why I did it.” (and nothing changes)", "is_": "Raw feeling and images live mostly on the right side of the brain. Language and logic live mostly on the left. Healing needs both sides talking. Putting an exact word on a feeling turns its volume down.", "scripture": "Adam names each animal, putting the right word on what he sees (Genesis 2:19–20). The psalmist Asaph, too troubled to speak (Psalm 77:4), still writes a psalm. David found that silence wasted his bones (Psalm 32:3–5).", "applied": "", "ask": "If this feeling had one word, what would it be? Is there a more exact one?", "helps": "Name It to Tame It · Borrowed Vessels"},
    {"n": 4, "name": "Past Tense", "one": "It happened. It is over.", "stuck": "An old hurt still lives in the body as if it were happening now. We react to today with yesterday’s fear and cannot say why.", "sounds": "Sounds like: “I know it’s not a big deal, but my body says I’m in danger.”", "is_": "Some memories are stored in the body with no “then” stamped on them, so they feel like the present. Healing moves them into plain history: that happened, it is over, and I am here. A memory can be rewritten when we recall it and meet something it did not expect.", "scripture": "After crossing the Jordan, Israel sets up stones, so a memory has a place and a date (Joshua 4:6–7). Peter denies Jesus at a charcoal fire and is restored by Jesus at another one (John 18:18; John 21:9). Same smell, new ending.", "applied": "", "ask": "How old do you feel right now?", "helps": "The Feeling Bridge · The Surprise · Set a Stone"},
    {"n": 5, "name": "The Whole Story", "one": "Pain included, and it makes sense.", "stuck": "Our life reads as a list of failures or a blur of fragments. “I am broken” becomes the title of the whole book.", "sounds": "Sounds like: “That’s just who I am.”", "is_": "Research on attachment finds that a coherent account of our own life, pain included, is one of the strongest predictors that a person’s own children will be securely attached (able to trust and stay close to others). The goal is not a happy story. It is a true one that holds together.", "scripture": "Joseph, speaking to the brothers who sold him, holds the harm and the good in one sentence: “You meant evil against me, but God meant it for good” (Genesis 50:20). “Let the redeemed of the LORD say so” (Psalm 107:2).", "applied": "", "ask": "Which part of your story do you tell fastest? Which part do you skip?", "helps": "Four Ways to Read a Life · The Seven-Stage Journey"},
    {"n": 6, "name": "One Heart", "one": "Every part gets a seat.", "stuck": "We feel like several different people: the one who performs, the one who sins in private, the child who is still afraid. They do not talk to each other, and we are ashamed of each.", "sounds": "Sounds like: “I don’t know who I really am.”", "is_": "The mind holds many states, such as roles, moods and ages. That is normal. The trouble comes when they are walled off. Healing does not erase any of them. It brings them to one table so a steady self (the calm center that can listen to every part) can lead.", "scripture": "Paul describes it: “I do not understand my own actions” (Romans 7:15). David prays, “unite my heart to fear your name” (Psalm 86:11).", "applied": "", "ask": "Who takes over when you are under pressure? What is that part protecting?", "helps": "Name the Survivors · A Seat for Every Part"},
    {"n": 7, "name": "The Old Vows", "one": "Then is not now.", "stuck": "We still live by promises we made to stay safe, often as children. The danger passed. The promise did not.", "sounds": "Sounds like: “I’ll never let anyone see that again.” “I’ll never need anyone.”", "is_": "We want certainty, and life brings change and loss. A vow tries to buy certainty: if I never need anyone, no one can leave. Trauma freezes time, and the mind keeps the rules it made at the worst moment and applies them to a life that has changed. The work is seeing a vow for what it was, protection for then, and retiring it. A vow we trust instead of God becomes an idol.", "scripture": "“Remember not the former things… Behold, I am doing a new thing” (Isaiah 43:18–19). Paul presses on, “forgetting what lies behind” (Philippians 3:13). Not erasing it but no longer ruled by it.", "applied": "Read as an application: neither verse speaks of vows in its own setting.", "ask": "What did you promise yourself you would never do or never feel again? What has that promise cost you?", "helps": "Release the Vow · A Letter to the Child · Ending Well"},
    {"n": 8, "name": "Me and We", "one": "Close without disappearing.", "stuck": "We keep everyone out, or we merge with people and fear losing them. We are alone in a crowd or panicked when someone pulls away.", "sounds": "Sounds like: “I’ll handle it myself.” “If I say no, they’ll leave.”", "is_": "We settle when someone’s attention meets ours and feels what we feel. Health is both: a self of our own, and a “we” we can be close in without losing the self.", "scripture": "“It is not good that the man should be alone” (Genesis 2:18). “Confess your sins to one another and pray for one another, that you may be healed” (James 5:16). Jesus tells a worshiper at the altar to leave the gift and first go be reconciled with a brother or sister (Matthew 5:23–24).", "applied": "", "ask": "When you pull back from people, what are you protecting?", "helps": "Confession to One Another · The Four S’s · Break and Mend"},
    {"n": 9, "name": "Part of Something Larger", "one": "Given to be given away.", "stuck": "We are cut off from God, from purpose, and from the people he gives us. Life shrinks to me: my guilt, my fix, my survival. A flat deadness settles in.", "sounds": "Sounds like: “Nothing really matters.” “God feels far away.”", "is_": "Transpirational means “breathing across”: the other eight kinds of integration flow together into a sense of belonging to something larger. Wholeness reaches past the self: me, we, and something larger. For us, the something larger is God and his Kingdom.", "scripture": "Isaiah sees God, is undone, is cleansed, then hears “Whom shall I send?” and answers, “Here I am! Send me” (Isaiah 6:5–8).", "applied": "", "ask": "Where do you feel far from God, and where do you feel him close?", "helps": "Return · Down Before Up · Given Away"}];
  var wmOpen = 0, gpMore = false;
  function wmOf(n) { n = Number(n); return WAYMARKS.filter(function (w) { return w.n === n; })[0] || null; }
  function wmNote(d) {
    var c = ctx(d), a = [], w = d.card && wmOf(d.card.waymark);
    if (c.course) { a.push(c.course); if (c.done) a.push("The course is finished"); else if (c.week) a.push("Week " + c.week + (c.total ? " of " + c.total : "")); }
    if (w) a.push("This week: " + w.name);
    return a.length ? a.join(" · ") : "The places a person gets stuck on the way to being whole";
  }
  /* the parts of a guidepost as a list; skipAsk leaves out Ask yourself (This Week already says it under Carry this question) */
  function wmDl(w, skipAsk) {
    return "<dl>" + WM_FIELDS.filter(function (f) { return !(skipAsk && f[1] === "ask"); }).map(function (f) {
      var v = w[f[1]], extra = "", cls = f[1] === "ask" ? ' class="q"' : "";
      if (f[1] === "stuck") extra = '<span class="sounds">' + esc(nb(w.sounds)) + "</span>";
      if (f[1] === "scripture" && w.applied) extra = '<span class="applied">' + esc(nb(w.applied)) + "</span>";
      return "<dt>" + esc(f[0]) + "</dt><dd" + cls + ">" + esc(f[1] === "helps" ? v : nb(v)) + extra + "</dd>";
    }).join("") + "</dl>";
  }
  function wmRowHtml(w, mine) {
    var on = wmOpen === w.n;
    return '<div class="ap-wm' + (on ? " open" : "") + '" data-n="' + w.n + '"><button type="button" class="ap-wm-h" data-act="wmrow" data-n="' + w.n + '" aria-expanded="' + (on ? "true" : "false") + '" aria-controls="apWmb' + w.n + '"><span class="ap-wm-n">' + w.n + '</span><span class="ap-wm-nm">' + esc(w.name) + (mine === w.n ? '<span class="ap-wm-tag">This week</span>' : "") + '</span><span class="ap-wm-one">' + esc(w.one) + '</span><span class="ap-wm-oc">' + (on ? "Close ▴" : "Open ▾") + '</span></button>' +
      '<div class="ap-wm-b" id="apWmb' + w.n + '"' + (on ? "" : " hidden") + ">" + wmDl(w, false) + "</div></div>";
  }
  function wmBody(d) {
    var mine = d && d.card ? Number(d.card.waymark) || 0 : 0;
    return '<p class="ap-wm-lead">' + esc(nb(WM_LEAD)) + '</p><div class="ap-wm-list">' + WAYMARKS.map(function (w) { return wmRowHtml(w, mine); }).join("") + '</div><p class="ap-wm-foot">' + esc(nb(WM_FOOT)) + "</p>";
  }
  /* one row open at a time; "toggle" is the row's own press */
  function wmShow(n, mode) {
    n = Number(n); wmOpen = mode === "toggle" && wmOpen === n ? 0 : n;
    [].forEach.call(host.querySelectorAll(".ap-wm"), function (r) {
      var on = Number(r.getAttribute("data-n")) === wmOpen, b = r.querySelector(".ap-wm-b"), h = r.querySelector(".ap-wm-h"), oc = r.querySelector(".ap-wm-oc");
      r.classList.toggle("open", on); if (b) b.hidden = !on; if (h) h.setAttribute("aria-expanded", on ? "true" : "false"); if (oc) oc.textContent = on ? "Close ▴" : "Open ▾";
    });
  }
  /* This Week's guidepost: the line, the week's own line (Course map "week line"; none, no line), the question to carry, and More about this guidepost opening in place */
  function gpBlock(C, first) {
    var w = C && wmOf(C.waymark); if (!w) return "";
    var wl = String(C.weekLine || "").trim();
    return '<div class="ap-tw-row' + (first ? " ap-tw-first" : "") + '" data-row="guidepost"><p class="ap-gp-line" data-role="gpline">This week’s guidepost: <b>' + esc(w.name) + "</b> · " + esc(w.one.replace(/\.$/, "")) + "</p>" +
      (wl ? '<p class="ap-gp-week">' + esc(nb(smart(wl))) + "</p>" : "") +
      '<p class="ap-gp-carry"><span>Carry this question:</span> ' + esc(nb(w.ask)) + "</p>" +
      '<button type="button" class="ap-gp-more" data-act="gpmore" aria-expanded="' + (gpMore ? "true" : "false") + '" aria-controls="apGpBody">' + (gpMore ? "Close ▴" : "More about this guidepost ▾") + "</button>" +
      '<div class="ap-gp-body" id="apGpBody" data-role="gpbody"' + (gpMore ? "" : " hidden") + ">" + wmDl(w, true) + "</div></div>";
  }

  /* ───────────── This Week in four layers (10.2.3), each saying why it is there: Your course · Your story · The road · Who walks with you ───────────── */
  function layerHead(name, why) { return '<p class="ap-ly-k">' + esc(name) + " <span>· " + esc(why) + "</span></p>"; }
  /* the unit's own label for a link: "Week 6", or "Part Two" when the course names its sections that way */
  function unitLabel(c) {
    var pre = String(c.unit || "").split(/\s*[—–]\s*/)[0].trim();
    return /^(week|part|section|unit)\b/i.test(pre) && pre.length <= 24 ? pre : "Week " + c.week;
  }
  /* the course's own card on the page (its link), else the courses door; no course is named here */
  function courseHref(name) {
    var n = norm(name), cards = document.querySelectorAll(".ap-card.ap-course, a.ap-ccard"), i, t, a;
    for (i = 0; i < cards.length; i++) {
      t = cards[i].querySelector(".ap-card-title, .ap-ccard-name"); a = cards[i].tagName === "A" ? cards[i] : cards[i].querySelector("a[href]");
      if (t && a && norm(t.textContent) === n) return a.getAttribute("href") || "";
    }
    return "/courses";
  }
  /* "memorize Ephesians 6:13": the first practice that starts with Memorize, its first sentence, as part of one line */
  function memorizeOf(C) {
    var L = (C && C.practices) || [], i, s;
    for (i = 0; i < L.length; i++) { if (/^memorize\b/i.test(L[i])) { s = firstSentence(L[i]).replace(/\.$/, ""); return s.charAt(0).toLowerCase() + s.slice(1); } }
    return "";
  }
  function layerCourse(d) {
    var c = ctx(d), C = d.card || {}, h = '<div class="ap-ly ap-ly-first" data-layer="course">' + layerHead("Your course", "the foundation for this week");
    if (c.course && !c.done) {
      var s = firstSentence(C.sentence || ""), mem = memorizeOf(C), lab = unitLabel(c);
      if (s) h += '<p class="ap-ly-cs">“' + esc(nb(smart(s))) + "”</p>";
      h += '<p class="ap-tw-help">' + esc(nb((inGroup(d) ? "Before your group meets: read " : "This week: read ") + lab + (mem ? " and " + mem : "") + ".")) + "</p>";
      h += '<p class="ap-ly-way"><a class="ap-walk" href="' + esc(courseHref(c.course)) + '" data-act="coursego">' + esc("Open " + lab + " in " + c.course) + '<span class="ap-walk-arrow">→</span></a></p>';
    } else if (c.course && c.done) {
      h += '<p class="ap-tw-help">' + esc(nb("You finished " + c.course + ". It stays yours to open.")) + "</p>" +
        '<p class="ap-ly-way"><a class="ap-walk" href="' + esc(courseHref(c.course)) + '" data-act="coursego">' + esc("Open " + c.course) + '<span class="ap-walk-arrow">→</span></a></p>';
    } else {
      h += '<p class="ap-tw-help">' + esc(nb("You are not in a course right now. The topics you follow set the direction for your week.")) + "</p>" +
        '<p class="ap-ly-way"><a class="ap-walk" href="/courses" data-act="begin">Choose a course<span class="ap-walk-arrow">→</span></a></p>';
    }
    return h + "</div>";
  }
  function layerStory(d) {
    var W = writeItems(d), h = '<div class="ap-ly" data-layer="story">' + layerHead("Your story", "what your course asks you to write");
    if (!W.length) return h + '<p class="ap-tw-help">' + esc(nb("Nothing is waiting for you to write this week.")) + "</p></div>";
    W.forEach(function (it, i) {
      var st = it.after ? "open now" : it.state === "in progress" ? "in progress" : "not begun";
      var given = it.after ? "After the course" : it.unit ? "Given in Week " + it.unit : "Given this week";
      var line = it.line ? " · “" + it.line + "”" : "";
      h += '<div class="ap-ly-piece" data-row="write"' + (i === 0 ? ' id="apTwWrite"' : "") + '><div><p class="ap-ly-pn">' + esc(it.title) + '</p><p class="ap-tw-help">' + esc(nb(given + " · " + st + line)) + "</p></div>" +
        '<a class="ap-walk" href="' + esc(it.href || "#") + '" data-act="writego">' + (it.state === "in progress" ? "Continue" : "Begin") + '<span class="ap-walk-arrow">→</span></a></div>';
    });
    return h + "</div>";
  }
  function layerRoad(d) {
    var C = d.card; if (!C) return "";
    var w = wmOf(C.waymark), why = inGroup(d) ? "mark the week, keep your practice, until your group meets again" : "mark the week and keep your practice";
    return '<div class="ap-ly" data-layer="road">' + layerHead("The road", why) + '<div class="ap-wk" data-role="weekcard">' + gpBlock(C, true) + markRow(d, C, !w) + voiceRow(d) + doRow(d) + "</div></div>";
  }
  /* a group's one line: shown only when the server says at least four men marked and one mark stands with more than half; never who, never how many */
  var GROUP_MARK = { steep: "the path steep", lost: "lost the trail", footing: "good footing", view: "the view good" };
  var WHO_HELP_LEAD = "From your group’s marks this week. It shows when at least four men have marked, and it never says who.";
  var WHO_LEADER = "Your group’s leader is your witness: reads your month and writes to you once a month.";
  var WHO_CARRIED_HELP = "Drawn from what the group said together, never from one man’s words.";
  var WITNESS_SENT = "Kept. We’ll send your invitation with what a witness does, and tell you when they say yes. Until then, our team walks with you.";
  var WROLES = [["mentor", "A mentor"], ["coach", "A coach"], ["friend", "A close friend"], ["pastor", "A pastor"], ["relative", "A relative"]];
  var wf = { open: false, role: "mentor", sent: null };
  function witnessSent(d) { return wf.sent === null ? !!(d.witness && d.witness.waiting) : wf.sent; }
  function witnessCard(d) {
    var sent = witnessSent(d);
    return '<div class="ap-wcard" data-role="wcard"><svg viewBox="0 0 80 72" aria-hidden="true"><line class="hz" x1="6" y1="10" x2="74" y2="10"/><path class="p1" d="M24 70 C 26 50, 40 36, 37 12"/><path class="p3" d="M40 70 C 42 50, 50 36, 43 12"/></svg><div>' +
      '<h3 class="ap-wcard-h">Invite Your Own Witness</h3><p class="ap-tw-help">Someone who sees what God is doing in your story, so it is remembered and spoken back to you. One person, who reads what you choose to share and writes to you once a month.</p>' +
      '<p class="ap-wcard-open" data-role="wopenrow"' + (sent || wf.open ? " hidden" : "") + '><button type="button" class="ap-walk" data-act="wopen">Invite someone<span class="ap-walk-arrow">→</span></button></p>' +
      '<div class="ap-wform" data-role="wform"' + (wf.open && !sent ? "" : " hidden") + '><p class="ap-wk-q">Who would it be?</p><div class="ap-roles" role="radiogroup" aria-label="Who would it be?">' +
      WROLES.map(function (r) { var on = wf.role === r[0]; return '<button type="button" class="ap-wk-twob' + (on ? " on" : "") + '" role="radio" aria-checked="' + (on ? "true" : "false") + '" data-act="wrole" data-key="' + r[0] + '">' + esc(r[1]) + "</button>"; }).join("") + "</div>" +
      '<div class="ap-wfields"><label>Their name<input type="text" data-role="wname" autocomplete="off" maxlength="80" placeholder="First and last name"></label><label>Their email<input type="email" data-role="wemail" autocomplete="off" maxlength="120" placeholder="name@example.com"></label></div>' +
      '<p class="ap-wcard-send"><button type="button" class="ap-walk" data-act="wsend">Send the invitation<span class="ap-walk-arrow">→</span></button></p><p class="ap-tw-state" data-role="wstate"></p>' +
      '<p class="ap-tw-help">They read what a witness does before they say yes, and nothing of yours is shown to them until they do.</p></div>' +
      '<div class="ap-wsent" data-role="wsent"' + (sent ? "" : " hidden") + '><p class="ap-tw-state kept">' + keptHtml(WITNESS_SENT) + '</p><p class="ap-wcard-open"><button type="button" class="ap-rev" data-act="wchange">Change who you asked <span data-arrow>▾</span></button></p></div></div></div>';
  }
  function handBlock(d) {
    var C = d.card; if (C && C.finished) return "";
    var lead = !!(d.group && d.group.leader);
    return '<p class="ap-wk-hand" data-row="hand"><button type="button" class="ap-walk" data-act="hand">I need a hand<span class="ap-walk-arrow">→</span></button></p><p class="ap-tw-help">' + esc(lead ? "One tap reaches your group’s leader today." : "One tap reaches our team today.") + "</p>" + stateP("handstate", "");
  }
  function carriedHtml(g) {
    var L = (g && g.carried) || []; if (!L.length) return "";
    return '<p class="ap-tw-lab ap-ly-sm">What your group carried last week</p><div class="ap-carried">' + L.map(function (x) {
      return x.body ? "<details><summary>" + esc(smart(x.title)) + "</summary><p>" + esc(nb(smart(x.body))) + "</p></details>" : '<details><summary>' + esc(smart(x.title)) + "</summary></details>";
    }).join("") + '</div><p class="ap-tw-help">' + esc(nb(WHO_CARRIED_HELP)) + "</p>";
  }
  function layerWho(d) {
    if (!d.group) return "";
    var g = d.group, h = '<div class="ap-ly" data-layer="who">';
    if (g.in) {
      h += layerHead("Who walks with you", "your group");
      if (g.line && GROUP_MARK[g.line]) h += '<p class="ap-ly-grp" data-role="grpline">' + esc(nb("This week, most of your group marked " + GROUP_MARK[g.line] + ". You’re not walking this alone.")) + '</p><p class="ap-tw-help">' + esc(nb(WHO_HELP_LEAD)) + "</p>";
      h += '<p class="ap-tw-help ap-ly-gap">' + esc(nb(WHO_LEADER)) + "</p>" + carriedHtml(g);
    } else {
      h += layerHead("Who walks with you", "you are not in a group right now") + '<p class="ap-ly-grp">' + esc(nb("Our team walks this with you. We read your road and write to you each month.")) + "</p>" + witnessCard(d) +
        '<p class="ap-ly-way"><a class="ap-walk" href="/courses" data-act="begin">Want to walk with other men? Find a group<span class="ap-walk-arrow">→</span></a></p>';
    }
    return h + '<div class="ap-ly-hand">' + handBlock(d) + "</div></div>";
  }
  /* the welcome: a first visit says what the page is for; a return visit gives his road back to him from his own taps, with how the page works folded */
  var WELCOME_TITLE = "What This Page Is For", RETURN_TITLE = "Your Road So Far";
  var WELCOME_LEAD = "Your Page holds your growth with us in one place. Most help comes in pieces: a book, a group, a counselor. Here your course, your story and the people walking with you are held together around you, so what you learn becomes how you live.";
  var WELCOME_FOUR = [
    ["Your course", "The foundation. Each week’s teaching sets the direction for everything else on this page. Not in a course? The topics you follow set it."],
    ["Your story", "The pieces your course asks you to write, kept here in your own words."],
    ["The road", "Between meetings, you mark how the week is going, say whether the reading helped, and choose a practice to keep. Every answer is kept and shapes what comes next."],
    ["Your group", "Men walking it with you, and a leader who reads your road and writes to you each month. Not in a group? Someone from our team."]
  ];
  var RETURN_HELP = "Drawn only from your own taps. Nothing here is a score.";
  var MARK_SAID = { steep: "marked the path steep", lost: "said you had lost the trail", footing: "marked the path good footing", view: "marked the path with a good view" };
  var DID_SAID = { did: "did the practice you chose", most: "did the practice you chose most days", some: "did the practice you chose some days", notyet: "told us the practice had to wait, and that is understood" };
  function welcomeParts() {
    return '<p class="ap-w-lead">' + esc(nb(WELCOME_LEAD)) + '</p><p class="ap-w-gives">How it fits together</p><ul class="ap-w-four">' + WELCOME_FOUR.map(function (x) { return "<li><b>" + esc(x[0]) + "</b>" + esc(nb(x[1])) + "</li>"; }).join("") + "</ul>";
  }
  function returning(d) { return !!(d && d.visit && d.visit.returning); }
  /* composed only from what he tapped: the path, the word, whether the reading helped, how the practice went; then this week's course */
  function returnLead(d) {
    var L = d.visit.last || {}, c = ctx(d), parts = [], out = [], nm = weekName(L.name || "") || String(L.name || "");
    if (L.mark && MARK_SAID[L.mark]) parts.push(MARK_SAID[L.mark] + (L.word ? " and named it " + L.word : ""));
    if (L.helped === "met") parts.push("said the reading helped"); else if (L.helped === "not") parts.push("said that reading was not the one for your week");
    if (L.did && DID_SAID[L.did]) parts.push(DID_SAID[L.did]);
    var when = L.recent === false ? "The last week you were here" : "Last week";
    if (parts.length) {
      out.push(when + (nm ? ", “" + nm + ",”" : "") + " you " + parts[0] + ".");
      if (parts.length > 1) out.push("You " + parts[1] + (parts[2] ? ", and you " + parts[2] : "") + ".");
    } else out.push(when + " you were on the road.");
    var tw = weekName(c.unit);
    out.push(c.course && !c.done ? (tw ? "This week your course turns to “" + tw + ".”" : "This week you are in " + c.course + ".") : c.course ? "You finished " + c.course + "." : "This week the topics you follow set the direction.");
    return out.join(" ");
  }
  /* 10.2.4, What's been helping you: only once he has answered three readings (the server sends nothing before); lanes are named as the cards show them; no numbers anywhere */
  function helpingLine(h) {
    var out = [], m = (h && h.more) || [];
    if (m.length) out.push("The readings that have helped you most come from " + (m.length > 1 ? m[0] + " and " + m[1] : m[0]) + ", so you’ll see more from " + (m.length > 1 ? "both" : "it") + ".");
    if (h && h.fewer) out.push("Readings on " + h.fewer + " haven’t landed yet, so you’ll see fewer of those.");
    return out.join(" ");
  }
  function helpingHtml(d) {
    var h = d.helping; if (!h) return "";
    var line = helpingLine(h), list = h.list || []; if (!line && !list.length) return "";
    var out = '<div class="ap-help" data-role="help"><p class="ap-tw-lab">What’s been helping you</p>' + (line ? '<p class="ap-help-line">' + esc(nb(smart(line))) + "</p>" : "");
    if (list.length) {
      out += '<p class="ap-help-more"><button type="button" class="ap-rev" data-act="helpmore" aria-expanded="false">The readings that helped you <span data-arrow>▾</span></button></p><div class="ap-help-list" data-role="helplist" hidden>' +
        list.map(function (x) {
          var where = x.course ? x.course + (x.unit ? " · Week " + x.unit : "") : "";
          return '<div class="ap-help-item"><p class="ap-help-claim">' + esc(nb(x.claim)) + '</p><p class="ap-help-src">' + (where ? esc(where) + " · " : "") + '<a class="ap-walk" href="' + esc(x.minuteLink || x.link) + '" target="_blank" rel="noopener">' + esc(actOf(x)) + '<span class="ap-walk-arrow">→</span></a></p></div>';
        }).join("") + "</div>";
    }
    return out + "</div>";
  }
  function welcomeBody(d) {
    if (!returning(d)) return welcomeParts() + '<p class="ap-ly-way"><a class="ap-walk" href="#apThisWeek" data-act="toweek">Start with This Week<span class="ap-walk-arrow">→</span></a></p>';
    return '<p class="ap-w-lead">' + esc(nb(returnLead(d))) + '</p>' + helpingHtml(d) + '<p class="ap-tw-help">' + esc(nb(RETURN_HELP)) + '</p><p class="ap-ly-way ap-w-act"><a class="ap-walk" href="#apThisWeek" data-act="toweek">Go to This Week<span class="ap-walk-arrow">→</span></a><button type="button" class="ap-rev" data-act="vhow" aria-expanded="false">How this page works <span data-arrow>▾</span></button></p><div class="ap-w-how" data-role="vhow" hidden>' + welcomeParts() + "</div>";
  }
  function weekBody(d) {
    var h = layerCourse(d) + layerStory(d) + layerRoad(d) + layerWho(d);
    if (d.card && d.setup && !d.setup.kept && !d.piece) h += '<div class="ap-tw-row"><p class="ap-tw-note">' + esc(nb("Set up your road below, and your first piece lands here the next morning.")) + "</p></div>";
    return h;
  }

  /* the note under a heading: which course, which week, when his group meets */
  /* the week's own name once, without its "Week 6 \u2014" lead (the note already says Week 6 of 12) */
  /* a part between the dots stays whole on a phone (AP-PANEL 1, rule 4): its spaces do not break, unless it is long */
  function keep(t) { return t.length <= 34 ? t.replace(/ /g, "\u00a0") : t; }
  function weekName(u) { return String(u || "").replace(/^.*?\bWeek\s*\d+\s*[\u2014\u2013:-]\s*/i, "").trim(); }
  function weekNote(d) {
    var c = ctx(d), a = [];
    if (c.course) {
      a.push(c.course);
      if (c.done) a.push("The course is finished");
      else if (c.week) { a.push(keep("Week " + c.week + (c.total ? " of " + c.total : ""))); var nm = weekName(c.unit); if (nm) a.push(keep("\u201c" + nm + "\u201d")); }
    }
    if (c.date && !c.done && wdName(c.date) && monShort(c.date)) a.push(keep("Your group meets " + wdName(c.date) + ", " + monShort(c.date)));
    return a.length ? a.join(" · ") : "One thing to write, one to take in, one question to answer.";
  }
  function roadNote(d) {
    var S = d.setup || {}, P = d.pace || {}, a = [], lead = S.lead || ctx(d).course;
    if (lead) a.push(lead);
    if (S.kept) a.push(P.label || "Three a week");
    if (d.piece && d.piece.given) a.push("Given " + d.piece.given);
    return a.length ? a.join(" · ") : "Choose how your road runs.";
  }

  /* ───────────── For Your Road: the setup as one line, the piece, its act line, Did this reading help your week?, the foot ───────────── */
  function quoteHtml(q, p) {
    var who = String(p && p.voice || "").split(",")[0].replace(/\s*\(.*$/, "").trim(), min = q.minute || q.m || "";
    var at = min ? (q.link ? '<a href="' + esc(q.link) + '" target="_blank" rel="noopener" data-act="listen" title="Open it at this minute">' + esc(min) + " ↗</a>" : esc(min)) : "";
    return '<p class="ap-hr-quote">“' + esc(q.words) + '”</p>' + (who || at ? '<p class="ap-hr-who">' + esc(who) + (who && at ? ", at " : "") + at + "</p>" : "");
  }
  function pieceHtml(p, d, first) {
    var kind = [headOf(p), p.given ? "Given " + p.given : "", String(p.voice || "").replace(/\s*\(.*$/, ""), p.cost].filter(Boolean).join(" · ");
    var h = '<div class="ap-hr-piece' + (first ? " ap-hr-first" : "") + '" data-id="' + esc(p.id) + '">';
    h += '<p class="ap-hr-head">' + esc(kind) + "</p>";
    h += '<p class="ap-hr-claim">' + esc(nb(p.claim)) + "</p>";
    if (p.short) { /* 10.2.4, the short form: the claim, the minute link and the question; no quotes block, no more lines */ }
    else if (p.road) h += '<div class="ap-hr-part"><p class="ap-hr-p">' + esc(nb(p.road)) + "</p></div>";
    if (p.short) { }
    else if (p.quotes && p.quotes.length) h += '<div class="ap-hr-part"><p class="ap-hr-label">In their words</p>' + p.quotes.map(function (q) { return quoteHtml(q, p); }).join("") + "</div>";
    else if (p.wordsComing) h += '<div class="ap-hr-part"><p class="ap-hr-label">In their words</p><p class="ap-hr-coming">Their own words and the minute are on their way; they land here this morning.</p></div>';
    if (p.todo && !p.short) h += '<div class="ap-hr-part"><p class="ap-hr-label">One thing to do</p><p class="ap-hr-p">' + esc(nb(p.todo)) + "</p></div>";
    h += '<div class="ap-hr-open">' + walkLink(p.minuteLink || p.link, actOf(p), true) +
      '<span class="ap-hr-state-line" data-role="opened">' + esc(p.opened ? "Opened " + p.opened : (actOf(p) === "Read" ? "Opens where it lives, in a new tab." : "Opens in a new tab, at the minute that matters.")) + "</span></div>";
    h += '<div class="ap-hr-words" data-role="words">' + wordsHtml(p.word, p) + "</div>";
    return h + "</div>";
  }
  function roadBody(d) {
    var kept = !d.setup || !!d.setup.kept, h = setupHtml(d) + beginHtml(d);
    if (kept) {
      h += d.piece ? pieceHtml(d.piece, d, true) : '<p class="ap-hr-coming">' + esc(nb(d.setup && d.setup.noCourse ? "Pick a course above and your first piece lands here the next morning." : "Your first piece lands here the next morning.")) + "</p>";
      h += moreHtml(d);
    }
    return h + (d.fine ? '<p class="ap-hr-fine">' + esc(nb(d.fine)) + "</p>" : "");
  }

  /* ───────────── your land: the board of five, the open place with every piece at it ───────────── */
  function placeOf(key) { return PLACES.filter(function (x) { return x.key === key; })[0] || PLACES[0]; }
  function doAt(key, d) {
    if (key === "stones") return walkLink(PAGES.stones, "Set a stone");
    if (key === "house") return practiceHtml(d);
    var c = cardsAt(key).filter(function (n) { return !isKept(n); })[0]; if (!c) return "";
    var href = cardHref(c), t = titleOf(c); if (!href || !t) return "";
    return walkLink(href, /^write\b/i.test(t) ? t : "Write " + t);
  }
  function boardHtml(d, open) {
    var pics = (d.land && d.land.pictures) || {}, h = '<div class="ap-land-board" data-role="board" role="list">';
    PLACES.forEach(function (q) {
      var src = pics[q.key] ? thumbOf(pics[q.key]) : "", on = q.key === open;
      h += '<button type="button" class="ap-land-stop' + (on ? " on" : "") + (placeHas(q.key, d) ? " has" : "") + '" role="listitem" aria-pressed="' + (on ? "true" : "false") + '" data-act="place" data-place="' + q.key + '">' +
        (src ? '<img class="ap-land-thumb" src="' + esc(src) + '" alt="" loading="lazy" decoding="async">' : '<span class="ap-land-thumb"></span>') +
        '<span class="ap-land-stopname">' + esc(q.name) + '</span><span class="ap-land-stopline">' + esc(nb(stopLine(q.key, d))) + "</span></button>";
    });
    return h + "</div>";
  }
  function panelHtml(d) {
    var key = openPlace(d), p = placeOf(key), his = hisAt(key, d), act = key === "house" ? practiceHtml(d) : "";
    var h = '<div class="ap-land-panel" data-role="panel" data-place="' + key + '">';
    h += '<p class="ap-land-pname">' + esc(p.name) + '</p><p class="ap-land-ref">' + esc(p.ref) + '</p>';
    h += '<p class="ap-land-pverse">' + esc(nb("“" + p.verse + "”")) + '</p><p class="ap-land-pline">' + esc(nb(p.line)) + "</p>";
    h += '<div class="ap-land-pieces" data-role="pieces" data-place="' + key + '"></div>';
    if (act) h += '<div class="ap-land-do">' + act + "</div>";
    if (his) h += '<div class="ap-land-his">' + his + "</div>";
    h += '<button type="button" class="ap-rev" data-act="chmore">What this place means <span data-role="chmorearrow">▾</span></button>';
    h += chapterText(key).concat([POSTURE, FLOOR]).map(function (t) { return '<p class="ap-land-p">' + esc(nb(t)) + "</p>"; }).join("");
    return h + "</div>";
  }
  function landNote(d) { var c = ctx(d); return (c.course && !c.done ? c.course + (c.week ? " · Week " + c.week : "") + " · " : "") + THREE[0]; }

  /* AP-PANEL 1: every section of Your Page is drawn by this one function, so the heading, the gutter and the control cannot drift */
  var PANEL_ID = { welcome: "apWelcome", week: "apThisWeek", road: "apHisRoad", land: "apLandPanel", waymarks: "apWaymarks" };
  var PANEL_CLS = { welcome: "welcome", week: "thisweek", road: "hisroad", land: "landpanel", waymarks: "waymarks" };
  function panelOpen(key, d) {
    var v = (d && d.ui && d.ui[key]) || ""; if (!v) { try { v = localStorage.getItem("ap_panel_" + key) || ""; } catch (e) {} }
    return key === "waymarks" ? v === "open" : v !== "shut";
  }
  function secHtml(key, d, title, note, body, first) {
    var open = panelOpen(key, d);
    return '<section class="ap-panel ap-' + (PANEL_CLS[key] || "thisweek") + (open ? "" : " shut") + (first ? " ap-first" : "") + '" data-panel="' + key + '" id="' + PANEL_ID[key] + '"' + (key === "road" ? ' data-build="' + BUILD + '"' : "") + '>' +
      '<h2 class="ap-panel-h"><button type="button" class="ap-panel-head" data-act="panel" data-panel="' + key + '" aria-expanded="' + (open ? "true" : "false") + '"><span class="ap-panel-text"><span class="ap-panel-title">' + esc(title) + '</span>' + (note ? '<span class="ap-panel-note" data-role="note-' + key + '">' + esc(nb(note)) + '</span>' : "") + '</span><span class="ap-panel-ctl" data-role="ctl-' + key + '">' + (open ? "Close ▴" : "Open ▾") + "</span></button></h2>" +
      '<div class="ap-panel-body" data-role="body-' + key + '">' + body + "</div></section>";
  }
  function panelSet(key, open, save) {
    var box = host.querySelector('.ap-panel[data-panel="' + key + '"]'); if (!box) return;
    box.classList.toggle("shut", !open);
    var b = box.querySelector(".ap-panel-head"); if (b) b.setAttribute("aria-expanded", open ? "true" : "false");
    var c = box.querySelector(".ap-panel-ctl"); if (c) c.textContent = open ? "Close ▴" : "Open ▾";
    if (data) { data.ui = data.ui || {}; data.ui[key] = open ? "open" : "shut"; }
    try { localStorage.setItem("ap_panel_" + key, open ? "open" : "shut"); } catch (e) {}
    if (key === "land" && data && data.land) { if (open && data.land.walk) watchWalk(); else unwatchWalk(); }
    if (save && !(data && data.bare)) { post({ action: "road_ui", key: key, state: open ? "open" : "shut" }); cache(); }
    frameSave();
  }
  function landHtml(d) {
    var L = d.land || {}, age = L.age || "then", open = L.walk ? (L.open || "gate") : openPlace(d);
    var h = '<div class="ap-land' + (L.walk ? " walking" : "") + '" data-role="land" data-age="' + esc(age) + '" data-open="' + esc(open) + '">';
    h += '<div class="ap-land-body" data-role="landbody">';
    h += '<div class="ap-land-stagehold" data-role="stagehold">' + stageHtml(d, open) + "</div>";
    if (L.walk) h += stepsHtml(d);
    else {
      if (!d.bare) h += '<p class="ap-land-walkline"><button type="button" class="ap-btn ap-btn-primary" data-act="walk">Walk the land</button><span class="ap-land-walknote">' + esc(nb("Five places, a few minutes, nothing required.")) + "</span></p>";
      h += boardHtml(d, open) + panelHtml(d);
    }
    return h + "</div></div>";
  }
  /* a line kept at a place: it stands there the moment it is written, and the camera moves on */
  function placeKeep(key, text) {
    text = String(text || "").trim().slice(0, 200); if (!text || !key) return;
    var p = PLACES.filter(function (x) { return x.key === key; })[0], at = p ? p.name.replace(/^The /, "the ").replace(/^Your /, "your ") : key;
    data.land.places = data.land.places || {};
    var list = data.land.places[key] || [];
    if (list.length && list[0].when === (data.today || "today")) list[0].text = text; else list = [{ text: text, when: data.today || "today" }].concat(list);
    data.land.places[key] = list;
    var st = host.querySelector('[data-role="placestate"][data-place="' + key + '"]'); if (st) { st.textContent = "Kept at " + at; st.classList.add("kept"); }
    var kb = host.querySelector('[data-act="placekeep"][data-place="' + key + '"]'); if (kb) kb.textContent = "Kept";
    [].forEach.call(host.querySelectorAll('[data-mark="' + key + '"], .ap-land-stop[data-place="' + key + '"]'), function (x) { x.classList.add("has"); });
    var man = el('[data-role="man"]'); if (man) { man.classList.remove("pulse"); void man.offsetWidth; man.classList.add("pulse"); }
    post({ action: "road_place", place: key, text: text }).then(function (r) { if (!r || !r.ok) { var s2 = host.querySelector('[data-role="placestate"][data-place="' + key + '"]'); if (s2) { s2.classList.remove("kept"); s2.textContent = "It did not go through. Your words are still here; leave the line again."; } } });
    cache();
    if (!data.land.walk) redrawLand();
  }
  function walkDone() { ASK_ORDER.forEach(keepIfWritten); unwatchWalk(); data.land.walk = false; data.land.open = null; redrawLand(); cache(); var lb = el('[data-role="land"]'); if (lb) { try { lb.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {} } }
  function practice(text) {
    text = String(text || "").trim().slice(0, 200);
    if (!text) return;
    data.land.kept = { text: text, when: data.today || "today" };
    data.land.practice = [{ text: text, when: data.today || "today" }].concat((data.land.practice || []).filter(function (p) { return p.when !== (data.today || "today"); }));
    if (data.card) { data.card.practice = text; paintPicks(data.card); }
    redrawLand(); cache();
    post({ action: "road_practice", text: text }).then(function (r) { var s2 = el('[data-role="practicestate"]'); if (!r || !r.ok) { if (s2) s2.textContent = "It did not go through. Your words are still here; press it again."; } });
  }
  /* the word for a piece (It helped / Not this one) is one record with two faces, the card's and For Your Road's; both are drawn from it */
  function paintWords(pid, w, failed) {
    [].forEach.call(host.querySelectorAll('[data-role="words"]'), function (box) {
      var pc = box.closest("[data-id]"); if (!pc || pc.getAttribute("data-id") !== pid) return;
      box.innerHTML = (failed ? '<p>It did not go through. Your word is not lost; press it again.</p>' : "") + wordsHtml(w, pieceModel(pid));
    });
    paintWhy(pid);
    [].forEach.call(host.querySelectorAll('[data-role="cardwords"] button[data-word]'), function (b) {
      if (b.closest("[data-id]").getAttribute("data-id") !== pid) return;
      var on = b.getAttribute("data-word") === w; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
  /* What made it a no?: shown only while the word is Not this one; a yes clears the reason (the server keeps it only after a no) */
  function paintWhy(pid) {
    var pm = pieceModel(pid); if (!pm) return;
    [].forEach.call(host.querySelectorAll('[data-role="whybox"]'), function (box) {
      if (box.getAttribute("data-id") !== pid) return;
      box.hidden = pm.word !== "not";
      [].forEach.call(box.querySelectorAll("button[data-key]"), function (b) { var on = b.getAttribute("data-key") === (pm.why || ""); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on ? "true" : "false"); });
      var st = box.querySelector('[data-role="whystate"]'); if (st) { var t = REPLY.why[pm.why || ""] || ""; if (t) st.innerHTML = keptHtml(t); else st.textContent = ""; st.classList.toggle("kept", !!t); }
    });
  }
  function why(key, pid) {
    var pm = pieceModel(pid); if (!pm || pm.word !== "not" || !REPLY.why[key]) return;
    var before = pm.why || ""; pm.why = key; paintWhy(pid);
    post({ action: "road_why", id: pid, reason: key }).then(function (r) {
      if (r && r.ok) { cache(); return; }
      pm.why = before; paintWhy(pid);
      [].forEach.call(host.querySelectorAll('[data-role="whybox"][data-id="' + pid + '"] [data-role="whystate"]'), function (st) { st.classList.remove("kept"); st.textContent = MISS; });
    });
  }
  function word(w, pid) {
    var pm = pieceModel(pid); if (!pm) return;
    if (w === "met") pm.why = "";
    pm.word = w; paintWords(pid, w); setLine("wordstate", "");
    post({ action: "road_word", id: pid, word: w }).then(function (r) {
      if (r && r.ok) { setLine("wordstate", REPLY.helped[w] || "Kept."); cache(); return; }
      pm.word = ""; paintWords(pid, "", true); setLine("wordstate", "It did not go through. Your word is not lost; press it again.", true);
    });
  }
  /* ───────────── the weekly card's taps (10.2): each paints in place, writes, then says Kept. (a miss says so once and leaves his choice standing) ───────────── */
  function setLine(role, text, bad) { var s = el('[data-role="' + role + '"]'); if (!s) return; if (text && !bad) s.innerHTML = keptHtml(text); else s.textContent = text || ""; s.classList.toggle("kept", !!text && !bad); }
  function paintMark(C) {
    [].forEach.call(host.querySelectorAll('[data-act="mark"]'), function (b) { var on = b.getAttribute("data-key") === C.mark; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on ? "true" : "false"); });
    var nm = el('[data-role="name"]'), ws = el('[data-role="namewords"]');
    if (nm) nm.hidden = !C.mark;
    if (ws) ws.innerHTML = C.mark ? markWordsInner(C) : "";
    var hd = el('[data-role="voicehead"]'); if (hd) hd.textContent = stretchHead(C);
  }
  function paintDid(C) { [].forEach.call(host.querySelectorAll('[data-act="did"]'), function (b) { var on = b.getAttribute("data-key") === C.did; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on ? "true" : "false"); }); }
  function paintPicks(C) { var bx = el('[data-role="picksbox"]'); if (bx) bx.innerHTML = picksBox(C); paintMail(C); }
  function paintSegs(role, act, cur) { var bx = el('[data-role="' + role + '"]'); if (!bx) return; [].forEach.call(bx.querySelectorAll('[data-act="' + act + '"]'), function (b) { var on = b.getAttribute("data-key") === cur; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on ? "true" : "false"); }); }
  function cardMark(key, wordKey) {
    var C = data && data.card; if (!C || !key) return;
    var w = wordKey === null ? (key === C.mark ? (C.word || "") : "") : wordKey;
    if (key !== C.mark) wordsMore = false;
    C.mark = key; C.word = w; paintMark(C); setLine("markstate", ""); cache();
    post({ action: "road_mark", mark: key, word: w }).then(function (r) { if (r && r.ok) setLine("markstate", REPLY.mark); else setLine("markstate", MISS, true); });
  }
  function cardDid(key) {
    var C = data && data.card; if (!C || !key) return;
    C.did = key; paintDid(C); setLine("didstate", ""); cache();
    post({ action: "road_did", did: key }).then(function (r) { if (r && r.ok) setLine("didstate", REPLY.did[key] || "Kept."); else setLine("didstate", MISS, true); });
  }
  /* 10.2.3: When will you do it? (road_when) and How often should we remind you? (road_remind): each paints in place, writes, then says what it kept. Nothing is sent in this build; the choice is saved. */
  function cardWhen(key) {
    var C = data && data.card; if (!C || !REPLY.when[key]) return;
    C.when = key; paintSegs("whenbox", "when", key); setLine("whenstate", ""); cache();
    post({ action: "road_when", when: key }).then(function (r) { if (r && r.ok) setLine("whenstate", REPLY.when[key]); else setLine("whenstate", MISS, true); });
  }
  function cardRemind(key) {
    var C = data && data.card; if (!C || !REPLY.remind[key]) return;
    C.remind = key; paintSegs("remindbox", "remind", key); setLine("remindstate", ""); cache();
    post({ action: "road_remind", remind: key }).then(function (r) { if (r && r.ok) setLine("remindstate", REPLY.remind[key]); else setLine("remindstate", MISS, true); });
  }
  function cardPick(i) {
    var C = data && data.card, text = C && (C.practices || [])[i]; if (!text) return;
    C.practice = text; picksOpen = false; paintPicks(C); setLine("pickstate", "");
    if (data.land) { data.land.kept = { text: text, when: data.today || "today" }; data.land.practice = [{ text: text, when: data.today || "today" }].concat((data.land.practice || []).filter(function (p) { return p.when !== (data.today || "today"); })); }
    cache();
    post({ action: "road_practice", text: text }).then(function (r) { if (r && r.ok) { setLine("pickstate", REPLY.mark); if (data.land && el('[data-role="land"]')) redrawLand(); } else setLine("pickstate", MISS, true); });
  }
  /* Invite Your Own Witness (10.2.3): a role, a name and an email go to our team's sheet; nothing is mailed in this build. One waiting invitation a man; a new one replaces it. */
  function paintWitness() {
    var sent = witnessSent(data || {}), o = el('[data-role="wopenrow"]'), f = el('[data-role="wform"]'), t = el('[data-role="wsent"]');
    if (o) o.hidden = sent || wf.open; if (f) f.hidden = sent || !wf.open; if (t) t.hidden = !sent;
  }
  var witnessBusy = false;
  function witnessSend() {
    if (witnessBusy) return;
    var nm = el('[data-role="wname"]'), em = el('[data-role="wemail"]'), st = el('[data-role="wstate"]');
    var name = nm ? nm.value.trim() : "", email = em ? em.value.trim() : "";
    function say(t) { if (st) { st.classList.remove("kept"); st.textContent = t; } }
    if (!name || !email) { say("Add their name and email first."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { say("That email does not look right. Check it and send again."); if (em) em.focus(); return; }
    witnessBusy = true; say("");
    post({ action: "road_witness", role: wf.role, theirName: name, theirEmail: email }).then(function (r) {
      witnessBusy = false;
      if (r && r.ok) { wf.sent = true; wf.open = false; if (data) data.witness = { waiting: true }; cache(); paintWitness(); return; }
      say(r && r.error === "bad_email" ? "That email does not look right. Check it and send again." : "It did not go through. Your words are still here; press Send again.");
    });
  }
  var handBusy = false;
  function cardHand() {
    if (handBusy) return; handBusy = true; setLine("handstate", "");
    post({ action: "road_hand" }).then(function (r) {
      handBusy = false;
      if (r && r.ok) setLine("handstate", r.to === "leader" ? "Kept. Your group’s leader has your note." : "Kept. Our team has your note.");
      else setLine("handstate", "It did not go through. Press it again.", true);
    });
  }
  /* a course pressed in the setup: kept in the order he picks, two at most; the sub lines say which leads */
  function courseChange(t) {
    var name = t.value, i = picked.indexOf(name), st = el('[data-role="coursestate"]');
    if (t.checked && i < 0) {
      if (picked.length >= 2) { t.checked = false; if (st) st.textContent = "Two at most; the first you pick leads. Take one off to add this one."; return; }
      picked.push(name);
    } else if (!t.checked && i >= 0) picked.splice(i, 1);
    if (st) st.textContent = "";
    var S = data.setup || {}, list = S.offered || [];
    list.forEach(function (o) { var sub = host.querySelector('[data-role="sub"][data-course="' + o.name.replace(/"/g, '\\"') + '"]'); if (sub) sub.textContent = nb(subOf(o, picked.indexOf(o.name))); });
  }
  /* the setup is kept the moment he presses Keep it; it folds to one line that says what was kept, and the week draws under it */
  function setupKeep() {
    var st = el('[data-role="pacestate"]'), box = el('[data-role="pace"]'), cst = el('[data-role="coursestate"]');
    var pc = host.querySelector('input[name="apPace"]:checked'), nt = host.querySelector('input[name="apNotice"]:checked');
    if (!picked.length) { if (cst) cst.textContent = "Pick a course first."; if (st) { st.classList.remove("kept"); st.textContent = "Pick a course first."; } return; }
    var paceKey = pc ? pc.value : ((data.pace && data.pace.key) || "three"), noticeKey = nt ? nt.value : ((data.setup && data.setup.notice) || "email");
    var o = (data.paces || []).filter(function (x) { return x.key === paceKey; })[0] || { key: "three", label: "Three a week" };
    var was = { setup: JSON.parse(JSON.stringify(data.setup || {})), pace: data.pace || { key: "", label: "", set: false } };
    data.setup = data.setup || {}; data.setup.kept = true; data.setup.lead = picked[0] || ""; data.setup.second = picked[1] || ""; data.setup.notice = noticeKey; data.setup.noCourse = !picked.length;
    (data.setup.offered || []).forEach(function (x) { var i = picked.indexOf(x.name); x.role = i === 0 ? "lead" : i === 1 ? "second" : ""; });
    data.pace = { key: o.key, label: o.label, set: true };
    var pw = el('[data-role="paceword"]'); if (pw) pw.textContent = nb(foldLine(data));
    if (st) { st.classList.add("kept"); st.textContent = "Kept."; }
    if (box) { box.classList.add("kept"); box.classList.remove("open"); box.classList.remove("open-what"); [].forEach.call(box.querySelectorAll("[data-arrow]"), function (a) { a.textContent = "▾"; }); }
    cache();
    post({ action: "road_setup", courses: picked.slice(0, 2), pace: o.key, notice: noticeKey }).then(function (r) {
      if (r && r.ok) {
        if (r.setup) data.setup = r.setup; if (r.pace) data.pace = r.pace; if (r.week && r.week.label && data.week) data.week.label = r.week.label;
        picked = pickedFrom(data.setup); cache();
        // the week draws under the kept line: ask again so the first piece is handed now that the setup is kept
        post({ action: "road" }).then(function (r2) { if (r2 && r2.ok) { setupHtml.seeded = false; render(r2); cache(); } else render(data); });
        return;
      }
      data.setup = was.setup; data.pace = was.pace; picked = pickedFrom(data.setup);
      var b2 = el('[data-role="pace"]'), s2 = el('[data-role="pacestate"]'), w2 = el('[data-role="paceword"]');
      if (b2 && !was.setup.kept) { b2.classList.remove("kept"); } else if (b2) { b2.classList.add("open"); }
      if (w2) w2.textContent = nb(foldLine(data));
      if (s2) { s2.classList.remove("kept"); s2.textContent = r && r.error === "two_courses" ? "Two courses at most." : "It did not go through. Your choices are still here; press Keep it again."; }
      cache();
    });
  }

  /* ───────────── what the page's band is handed: the week's one step (its first open act) and what is new ───────────── */
  function stepFor(d) {
    var c = ctx(d), W = writeItems(d), p = d.piece;
    if (W.length) { var it = W[0]; return { text: (it.after ? "Set a stone" : writeName(it.title)) + (c.date && !it.after ? " before " + wdName(c.date) : ""), target: "apTwWrite" }; }
    if (d.setup && !d.setup.kept) return { text: "Set up your road", target: "apHisRoad" };
    if (p && !p.opened) return { text: actOf(p) + " this week’s piece", target: "apTwRead" };
    if (p && p.question && !(p.answer && p.answer.text)) return { text: "Answer this week’s question", target: "apTwAnswer" };
    return null;
  }
  function sinceFor(d) {
    var out = [], p = d.piece, fresh = [p].concat(d.more || []).filter(function (x) { return x && x.isNew && !x.opened; }).length;
    if (fresh > 1) out.push("new pieces were set out for your road"); else if (fresh) out.push("a new piece was set out for your road");
    if (p && p.answer && p.answer.word && p.answer.wordNew) out.push("a word for the road is on your page");
    return out;
  }
  /* "You are in week 4 of Breaking Free. The room meets Wednesday, November 4, at 7:00 PM Central." */
  function whereFor(d) {
    var c = ctx(d), t = d && d.band && d.band.time ? d.band.time : "", p = dparts(c.date), out = "";
    if (!c.course) return "";
    out = c.done ? "You finished " + c.course + "." : c.week ? "You are in week " + c.week + " of " + c.course + "." : "You are in " + c.course + ".";
    if (p && !c.done) out += " Your group meets " + wdName(c.date) + ", " + MONTHS[p.m - 1] + " " + p.d + (t ? ", at " + t : "") + ".";
    return out;
  }
  function bandHandOver(d) {
    bandSet(); /* the real content is drawn: the hold is done (10.2.3) */
    var o = d.bare ? { bare: true, step: null, since: [], where: "", band: null } : { bare: false, step: stepFor(d), since: sinceFor(d), where: whereFor(d), band: d.band || null };
    window.apRoadBand = o;
    try { if (window.apBand && window.apBand.set) window.apBand.set(o); } catch (e) {}
    bandTidy(); /* a held where line the page left empty goes back to hidden (10.2.4) */
    try { document.dispatchEvent(new CustomEvent("ap:roadband", { detail: o })); } catch (e) {}
  }

  /* ───────────── drawing: one swap for the whole section; what he has typed and the pieces on the shelf survive it ───────────── */
  var shown = null;
  function keepTyped() {
    var m = {};
    [].forEach.call(host.querySelectorAll('textarea[data-role="answer"], input[data-role="placeown"], input[data-role="own"], input[data-role="wname"], input[data-role="wemail"]'), function (n) {
      if (!n.value) return;
      m[n.getAttribute("data-role") + "|" + (n.getAttribute("data-place") || "")] = { v: n.value, f: document.activeElement === n, s: n.selectionStart || 0, k: n.getAttribute("data-kept") || "" };
    });
    return m;
  }
  function typedBack(m) {
    [].forEach.call(host.querySelectorAll('textarea[data-role="answer"], input[data-role="placeown"], input[data-role="own"], input[data-role="wname"], input[data-role="wemail"]'), function (n) {
      var t = m[n.getAttribute("data-role") + "|" + (n.getAttribute("data-place") || "")]; if (!t) return;
      n.value = t.v; if (t.k) n.setAttribute("data-kept", t.k);
      if (t.f) { try { n.focus(); n.setSelectionRange(t.s, t.s); } catch (e) {} }
    });
  }
  function swap(h) {
    if (h === shown && host.firstChild) { fillPlaces(); return false; }
    var typed = keepTyped(); stash();
    host.innerHTML = h; shown = h; host.style.display = "";
    fillPlaces(); typedBack(typed);
    return true;
  }
  function empty() { stash(); host.innerHTML = ""; host.style.display = "none"; shown = null; unwatchWalk(); frameDrop(); }
  /* the road could not be asked: his pieces still stand at their places, drawn from what the page already holds */
  var LOCAL = { ok: true, bare: true, ui: {}, band: null, land: { on: true, bare: true, seen: true, age: "then", pictures: {}, practices: [], practice: [], kept: null, answers: [], places: {}, readings: [], week: null } };
  function statesPending() { return !(window.apStates && window.apStates.length); }

  function render(d) {
    data = d;
    if (!d || !d.ok) { empty(); return; }
    /* the first time he opens the land it walks him through the five places, once */
    if (d.land && !d.bare && !d.land.seen && !render.walked) { render.walked = true; d.land.seen = true; d.land.walk = true; d.land.open = "gate"; post({ action: "road_land" }); }
    var h = "";
    if (!d.bare) {
      h += secHtml("welcome", d, returning(d) ? RETURN_TITLE : WELCOME_TITLE, "", welcomeBody(d), true);
      h += secHtml("week", d, TW_TITLE, weekNote(d), weekBody(d), false);
      if (d.card) h += secHtml("waymarks", d, WM_TITLE, wmNote(d), wmBody(d), false);
      h += secHtml("road", d, ROAD_TITLE, roadNote(d), roadBody(d), false);
    }
    var land = !!d.land && (shouldLand(d) || (statesPending() && frameHad("land")));
    if (land) h += secHtml("land", d, LAND_TITLE, landNote(d), landHtml(d), !!d.bare);
    if (!h) { empty(); return; }
    swap(h);
    wire();
    bandHandOver(d);
    if (land && d.land.walk && panelOpen("land", d)) watchWalk(); else unwatchWalk();
    frameSave();
  }
  /* the land redrawn in place (a place pressed, a line kept, the walk begun or ended): the rest of the page does not move */
  function redrawLand() {
    if (!data || !data.land) return;
    var box = el('[data-role="land"]'); if (!box) { render(data); return; }
    var typed = keepTyped(); stash();
    var t = document.createElement("div"); t.innerHTML = landHtml(data);
    box.parentNode.replaceChild(t.firstChild, box);
    fillPlaces(); typedBack(typed); shown = null;
    var nt = el('[data-role="note-land"]'); if (nt) nt.textContent = nb(landNote(data));
    if (data.land.walk && panelOpen("land", data)) watchWalk(); else unwatchWalk();
    frameSave();
  }
  function refresh() { if (data && data.ok) render(data); }
  document.addEventListener("ap:states", refresh);
  document.addEventListener("ap:stones", refresh);
  document.addEventListener("ap:week", refresh);
  document.addEventListener("ap:courses", refresh);

  /* ───────────── frames: the page draws the panels at load from this memo; this script writes it after every draw ───────────── */
  function frameKind() { return window.innerWidth <= 720 ? "p" : "d"; }
  function frameRead() { try { var f = JSON.parse(localStorage.getItem(FRAME) || "null"); return f && f.panels ? f : null; } catch (e) { return null; } }
  function frameHad(k) { var f = frameRead(); return !!(f && f.panels[k] && (!me || f.email === me.email)); }
  /* the band's "Since you were last here" line as tall as it was drawn, so the next load holds that space before the road answers (the page's own placeholder is one line, which a phone wraps to two) */
  function sinceHeight() { var sn = document.getElementById("apSince"); return sn && !sn.hidden && sn.textContent.replace(/\u00a0/g, "").trim() ? Math.round(sn.getBoundingClientRect().height) : 0; }
  /* 10.2.3, the header's jump: this script runs the moment the page's block is parsed, before the road has answered. The page's own frames know only three panels; this script now draws two more (the welcome above This Week and The Nine Guideposts under it), so the frames it drew from the memo already match what the answer brings, and the since line holds the height it had. Nothing is read from the network here. */
  function reserve() {
    var f = frameRead(); if (!f || !f.order || !f.order.length) return;
    var kind = frameKind(), full = f.order.every(function (k) { return f.panels[k] && PANEL_ID[k]; });
    if (full && host.querySelectorAll(".ap-panel").length !== f.order.length) {
      var h = "";
      f.order.forEach(function (k, i) {
        var p = f.panels[k], v = "", shut;
        try { v = localStorage.getItem("ap_panel_" + k) || ""; } catch (e) {}
        shut = v ? v === "shut" : !p.open;
        h += '<section class="ap-panel ap-' + (PANEL_CLS[k] || "thisweek") + (shut ? " shut" : "") + (i === 0 ? " ap-first" : "") + '" data-panel="' + k + '" id="' + PANEL_ID[k] + '"><h2 class="ap-panel-h"><button type="button" class="ap-panel-head" data-act="panel" data-panel="' + k + '" aria-expanded="' + (shut ? "false" : "true") + '"><span class="ap-panel-text"><span class="ap-panel-title">' + esc(p.title) + "</span>" + (p.note ? '<span class="ap-panel-note">' + esc(p.note) + "</span>" : "") + '</span><span class="ap-panel-ctl">' + (shut ? "Open ▾" : "Close ▴") + '</span></button></h2><div class="ap-panel-body"' + (!shut && f.f === kind && p.h > 0 ? ' style="min-height:' + Math.round(p.h) + 'px"' : "") + "></div></section>";
      });
      host.innerHTML = h;
    }
    var sn = document.getElementById("apSince");
    if (sn && f.f === kind && f.band && f.band.sinceH > 0) sn.style.minHeight = f.band.sinceH + "px";
  }
  /* 10.2.4, the band holds only what is certain. With no memo of this width the band has nothing to hold its lines with, and the where line ("You are in week N of ...") is the one line a man in a course always gets, so its room is held (32px at desk width, 54px on a phone) until the road is drawn; the since line is held only when a memo or the page's own mark says it will be there, never guessed (a guessed hold shrinks the band when the line does not come, which is the jump John measured on 10.2.3). A page block that holds the same room before the first paint (AP-HOME-v37.11, class ap-band-hold) is left to; clear is one step with the draw (bandSet, in bandHandOver). */
  var WHERE_HOLD = { d: 32, p: 54 }, heldWhere = false;
  function bandHold() {
    var b = document.getElementById("apBand"); if (!b || b.getAttribute("data-set")) return;
    var f = frameRead(); if (f && f.f === frameKind() && f.band) return; /* a memo of this width holds the lines (reserve, and the page) */
    setTimeout(bandSet, 12000); /* the road never answered: let the band be what it is */
    if (b.classList.contains("ap-band-hold")) return; /* the page block holds it before the first paint */
    var w = document.getElementById("apWhere");
    if (w && (w.hidden || !w.textContent.replace(/\u00a0/g, "").trim())) { heldWhere = true; w.hidden = false; w.innerHTML = "&nbsp;"; w.style.minHeight = WHERE_HOLD[window.innerWidth <= 640 ? "p" : "d"] + "px"; }
  }
  function bandSet() {
    var b = document.getElementById("apBand"); if (!b) return;
    b.setAttribute("data-set", "1");
    var w = document.getElementById("apWhere"); if (w) w.style.minHeight = "";
    var sn = document.getElementById("apSince"); if (sn) sn.style.minHeight = "";
  }
  /* after the page has painted the real lines: a held where line the page left empty goes back to hidden */
  function bandTidy() { var w = document.getElementById("apWhere"); if (heldWhere && w && !w.textContent.replace(/\u00a0/g, "").trim()) w.hidden = true; heldWhere = false; }
  function frameDrop() { try { localStorage.removeItem(FRAME); } catch (e) {} }
  function frameSave() {
    if (!me || !data || !data.ok) return;
    try {
      var rb = window.apRoadBand || {}, o = { email: me.email, at: Date.now(), f: frameKind(), order: [], panels: {}, band: { where: rb.where || "", step: rb.step ? rb.step.text : "", target: rb.step ? rb.step.target : "", sinceH: sinceHeight() } };
      [].forEach.call(host.querySelectorAll(".ap-panel"), function (p) {
        var k = p.getAttribute("data-panel"), b = p.querySelector(".ap-panel-body"), ti = p.querySelector(".ap-panel-title"), no = p.querySelector(".ap-panel-note"), open = !p.classList.contains("shut");
        o.order.push(k); o.panels[k] = { title: ti ? ti.textContent : "", note: no ? no.textContent : "", open: open, h: open && b ? b.offsetHeight : 0 };
      });
      localStorage.setItem(FRAME, JSON.stringify(o));
    } catch (e) {}
  }

  /* ───────────── clicks ───────────── */
  function scrollTo(n) { if (!n) return; try { n.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) { n.scrollIntoView(); } }
  /* the land opened at a place from outside (a stone come back for its return): the panel opens and the place shows */
  function show(place, scroll) {
    if (!data || !data.land) return;
    if (host.querySelector('.ap-panel[data-panel="land"].shut')) panelSet("land", true, true);
    data.land.walk = false; data.land.open = place; redrawLand();
    if (scroll !== false) scrollTo(el('[data-role="land"]'));
  }
  function reveal(id) {
    var key = /^apTw/.test(id) || id === "apThisWeek" ? "week" : id === "apWelcome" ? "welcome" : id === "apHisRoad" ? "road" : id === "apLandPanel" ? "land" : "";
    if (key && host.querySelector('.ap-panel[data-panel="' + key + '"].shut')) panelSet(key, true, true);
    scrollTo(document.getElementById(id));
  }
  function wire() {
    if (wire.done) return; wire.done = true;
    host.addEventListener("click", function (ev) {
      var t = ev.target.closest ? ev.target.closest("[data-act]") : null; if (!t) return;
      var act = t.getAttribute("data-act");
      if (act === "panel") { ev.preventDefault(); var pk0 = t.getAttribute("data-panel"), pb0 = host.querySelector('.ap-panel[data-panel="' + pk0 + '"]'); if (pb0) panelSet(pk0, pb0.classList.contains("shut"), true); return; }
      if (!data) return;
      if (act === "open" || act === "listen") { var opc = t.closest(".ap-hr-piece"), opid = opc ? opc.getAttribute("data-id") : (data.piece && data.piece.id), opm = pieceModel(opid); if (!opid) return; post({ action: "road_open", id: opid }); var ost = opc ? opc.querySelector('[data-role="opened"]') : null; if (opm && !opm.opened) { if (ost) ost.textContent = "Opened " + (data.today || "today"); opm.opened = data.today || "today"; } return; }
      if (act === "toroad") { ev.preventDefault(); reveal("apHisRoad"); return; }
      if (act === "word") { ev.preventDefault(); var wp = t.closest("[data-id]"); word(t.getAttribute("data-word"), wp ? wp.getAttribute("data-id") : (data.piece && data.piece.id)); return; }
      if (act === "mark") { ev.preventDefault(); cardMark(t.getAttribute("data-key"), null); return; }
      if (act === "mword") { ev.preventDefault(); var wk = t.getAttribute("data-key"); if (!data.card || !data.card.mark) return; cardMark(data.card.mark, data.card.word === wk ? "" : wk); return; }
      if (act === "moreword") { ev.preventDefault(); if (!data.card || !data.card.mark) return; wordsMore = true; paintMark(data.card); return; }
      if (act === "did") { ev.preventDefault(); cardDid(t.getAttribute("data-key")); return; }
      if (act === "why") { ev.preventDefault(); var wb = t.closest("[data-id]"); why(t.getAttribute("data-key"), wb ? wb.getAttribute("data-id") : (data.piece && data.piece.id)); return; }
      if (act === "helpmore") { ev.preventDefault(); var hl = el('[data-role="helplist"]'), ho = !!hl && hl.hidden; if (hl) hl.hidden = !ho; t.setAttribute("aria-expanded", ho ? "true" : "false"); var ha = t.querySelector("[data-arrow]"); if (ha) ha.textContent = ho ? "▴" : "▾"; return; }
      if (act === "cpick") { ev.preventDefault(); cardPick(Number(t.getAttribute("data-i"))); return; }
      if (act === "pickchange") { ev.preventDefault(); if (!data.card) return; picksOpen = !picksOpen; paintPicks(data.card); return; }
      if (act === "hand") { ev.preventDefault(); cardHand(); return; }
      if (act === "wmrow") { ev.preventDefault(); wmShow(t.getAttribute("data-n"), "toggle"); return; }
      if (act === "when") { ev.preventDefault(); cardWhen(t.getAttribute("data-key")); return; }
      if (act === "remind") { ev.preventDefault(); cardRemind(t.getAttribute("data-key")); return; }
      if (act === "gpmore") { ev.preventDefault(); gpMore = !gpMore; var gb = el('[data-role="gpbody"]'); if (gb) gb.hidden = !gpMore; t.setAttribute("aria-expanded", gpMore ? "true" : "false"); t.textContent = gpMore ? "Close ▴" : "More about this guidepost ▾"; return; }
      if (act === "toweek") { ev.preventDefault(); reveal("apThisWeek"); return; }
      if (act === "vhow") { ev.preventDefault(); var vh = el('[data-role="vhow"]'), vo = !!vh && vh.hidden; if (vh) vh.hidden = !vo; t.setAttribute("aria-expanded", vo ? "true" : "false"); var va = t.querySelector("[data-arrow]"); if (va) va.textContent = vo ? "▴" : "▾"; return; }
      if (act === "wopen") { ev.preventDefault(); wf.open = true; paintWitness(); var wn = el('[data-role="wname"]'); if (wn) wn.focus(); return; }
      if (act === "wchange") { ev.preventDefault(); wf.sent = false; wf.open = true; paintWitness(); return; }
      if (act === "wrole") { ev.preventDefault(); wf.role = t.getAttribute("data-key"); [].forEach.call(host.querySelectorAll('[data-act="wrole"]'), function (b) { var on = b === t; b.classList.toggle("on", on); b.setAttribute("aria-checked", on ? "true" : "false"); }); return; }
      if (act === "wsend") { ev.preventDefault(); witnessSend(); return; }
      if (act === "pacekeep") { ev.preventDefault(); setupKeep(); return; }
      if (act === "begin") { var cp = coursesPanel(); if (cp) { ev.preventDefault(); scrollTo(cp); } return; }
      if (act === "pacechange" || act === "whatis") { ev.preventDefault(); var pbox = t.closest(".ap-pace"), pcls = act === "whatis" ? "open-what" : "open", parr = t.querySelector("[data-arrow]"); if (pbox) { pbox.classList.toggle(pcls); if (parr) parr.textContent = pbox.classList.contains(pcls) ? "▴" : "▾"; } return; }
      if (act === "send") { ev.preventDefault(); send(); return; }
      if (act === "practice") { ev.preventDefault(); practice((data.land.practices || [])[Number(t.getAttribute("data-i"))] || ""); return; }
      if (act === "practicechange") { ev.preventDefault(); var pk = t.closest(".ap-hr-ask"), pv = t.querySelector('[data-role="practicearrow"]'); if (pk) { pk.classList.toggle("open"); if (pv) pv.textContent = pk.classList.contains("open") ? "▴" : "▾"; } return; }
      if (act === "walk") { ev.preventDefault(); data.land.walk = true; data.land.open = "gate"; redrawLand(); scrollTo(el('[data-role="land"]')); return; }
      if (act === "walkto") { ev.preventDefault(); var k2 = t.getAttribute("data-place"), st2 = host.querySelector('.ap-land-step[data-step="' + k2 + '"]'), sg = el('[data-role="stage"]'); if (st2) { var y = st2.getBoundingClientRect().top + window.pageYOffset - (sg ? sg.getBoundingClientRect().height : 0) - 64; try { window.scrollTo({ top: y, behavior: "smooth" }); } catch (e) { window.scrollTo(0, y); } } return; }
      if (act === "landgo") { ev.preventDefault(); walkDone(); return; }
      if (act === "placekeep") { ev.preventDefault(); var pk3 = t.getAttribute("data-place"), pin2 = host.querySelector('[data-role="placeown"][data-place="' + pk3 + '"]'); if (pin2) { var pv3 = pin2.value.trim(); if (!pv3) { var ps = host.querySelector('[data-role="placestate"][data-place="' + pk3 + '"]'); if (ps) { ps.classList.remove("kept"); ps.textContent = "Write one line first."; } pin2.focus(); return; } pin2.setAttribute("data-kept", pv3); placeKeep(pk3, pv3); } return; }
      if (act === "practiceown") { ev.preventDefault(); var po = el('[data-role="own"]'); if (po) { var pv2 = po.value.trim(); if (!pv2) { var ps2 = el('[data-role="practicestate"]'); if (ps2) ps2.textContent = "Press one, or write your own first."; po.focus(); return; } po.setAttribute("data-kept", pv2); practice(pv2); } return; }
      if (act === "place") { ev.preventDefault(); data.land.open = t.getAttribute("data-place"); redrawLand(); return; }
      if (act === "chmore") { ev.preventDefault(); var pn = t.closest(".ap-land-panel"); if (pn) { pn.classList.toggle("open"); var pa2 = t.querySelector('[data-role="chmorearrow"]'); if (pa2) pa2.textContent = pn.classList.contains("open") ? "▴" : "▾"; } return; }
      if (act === "landmore") { ev.preventDefault(); var hb = t.closest(".ap-land-his"), hv = t.querySelector('[data-role="landmorearrow"]'); if (hb) { hb.classList.toggle("open"); if (hv) hv.textContent = hb.classList.contains("open") ? "▴" : "▾"; } }
    });
    function leave(t) {
      if (!t || !t.getAttribute || !data) return;
      if (t.getAttribute("data-role") === "own") { var v = t.value.trim(); if (v && t.getAttribute("data-kept") !== v) { t.setAttribute("data-kept", v); practice(v); } }
      if (t.getAttribute("data-role") === "placeown") { var v2 = t.value.trim(); if (v2 && t.getAttribute("data-kept") !== v2) { t.setAttribute("data-kept", v2); placeKeep(t.getAttribute("data-place"), v2); } }
    }
    host.addEventListener("focusout", function (ev) { leave(ev.target); });
    host.addEventListener("change", function (ev) {
      var t = ev.target; if (!t || !t.name) return;
      if (t.name === "apCourse") courseChange(t);
      if (t.name !== "apPace" && t.name !== "apNotice" && t.name !== "apCourse") return;
      [].forEach.call(host.querySelectorAll(".ap-pace-opt"), function (x) { var r = x.querySelector("input"); x.classList.toggle("on", !!(r && r.checked)); });
      var st = el('[data-role="pacestate"]'); if (st) { st.classList.remove("kept"); st.textContent = ""; }
    });
    host.addEventListener("input", function (ev) { var t = ev.target; if (!t || !t.getAttribute || t.getAttribute("data-role") !== "placeown") return; var kb = host.querySelector('[data-act="placekeep"][data-place="' + t.getAttribute("data-place") + '"]'); if (kb && t.value.trim() !== (t.getAttribute("data-kept") || "")) kb.textContent = "Keep it"; });
    host.addEventListener("keydown", function (ev) { var t = ev.target; if (!t || !t.getAttribute || ev.key !== "Enter") return; if (t.getAttribute("data-role") === "own" || t.getAttribute("data-role") === "placeown") { ev.preventDefault(); leave(t); t.blur(); } });
  }

  /* a line sent for the week's question: it goes to our team, and the row turns into his answer */
  function send() {
    if (sending || !data || !data.piece) return;
    var ta = el('[data-role="answer"]'), st = el('[data-role="sendstate"]'), btn = el('[data-act="send"]');
    var text = ta ? ta.value.trim() : "";
    if (!text) { if (st) st.textContent = "Write your answer first."; return; }
    sending = true; if (btn) btn.setAttribute("disabled", "disabled"); if (st) st.textContent = "Sending";
    var slow = setTimeout(function () { if (st) st.textContent = "Still sending"; }, 5000);
    post({ action: "road_answer", id: data.piece.id, text: text }).then(function (r) {
      clearTimeout(slow); sending = false;
      if (r && r.ok) {
        data.piece.answer = { text: text, sent: r.sent || data.today || "today", word: null };
        if (data.land) data.land.answers = (data.land.answers || []).concat([{ text: text, when: data.today || "today", strand: r.strand || data.piece.strand || "did", id: data.piece.id }]);
        cache(); render(data);
      } else {
        if (btn) btn.removeAttribute("disabled");
        if (st) st.textContent = "It did not send. Your words are still here; nothing has been lost. Try again.";
      }
    });
  }
  /* who is asking: the site's own account, read the way the rest of the page reads it */
  function getJSON(path) { return fetch(path, { credentials: "include", headers: { Accept: "application/json" } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }
  function whoAmI() {
    return getJSON("/api/user_stats").then(function (j) {
      var m = (j && j.me) || {};
      var a = { id: m.id || m._id || m.user_id || "", email: (m.email || m.user_email || "").toLowerCase(), name: ((m.first_name || "") + " " + (m.last_name || "")).trim() || m.username || "", first: m.first_name || "" };
      if (a.id && a.email) return a;
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
  function post(o) {
    if (!ROAD_URL || !me) return Promise.resolve(null);
    o.email = me.email; o.lwid = me.id; o.name = me.name;
    return fetch(ROAD_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(o) }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  }
  function cache() { try { localStorage.setItem(CACHE, JSON.stringify({ email: me.email, data: data, at: Date.now() })); } catch (e) {} }

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
    fetch(DESK_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "page_check", page: location.pathname, name: "For Your Road (road.js)", build: BUILD, accepted: got, expected: want, detail: short.join(", "), ua: String(navigator.userAgent || "").slice(0, 120) }) }).catch(function () {});
  }

  reserve();
  bandHold();
  window.APHisRoad = { build: BUILD, render: render, places: PLACES, reveal: reveal, show: show };
  /* the page drew the three frames at load from its memo (or "Setting out your week."); this draws the real section over them as soon as the man and his week are known */
  whoAmI().then(function (a) {
    if (!a || !a.email) { render(LOCAL); return; }
    me = a;
    var f = frameRead(); if (f && f.email !== a.email) frameDrop();
    var cached = null; try { var c = JSON.parse(localStorage.getItem(CACHE) || "null"); if (c && c.email === a.email && c.data && Date.now() - c.at < 7 * 864e5) cached = c.data; } catch (e) {}
    if (cached && cached.build !== BUILD) cached = null; /* a draw kept by an earlier build has none of this build's parts */
    if (cached && cached.card && cached.week && cached.week.start && Date.now() - Date.parse(cached.week.start + "T12:00:00") >= 7 * 864e5) cached.card = null;
    if (cached) render(cached);
    post({ action: "road" }).then(function (r) {
      if (r && r.ok) { render(r); cache(); setTimeout(selfCheck, 0); }
      else if (!cached) render(LOCAL);
    });
  });
})();
