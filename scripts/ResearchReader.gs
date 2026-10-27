/**
 * Ancient Path — Research reader · build 9.1.4 (growth.js 3.7.1: the Your Growth stylesheet repaired) · 9.1.3 (one section standard on Your Page; the pace: Three a week · Daily · Up to twice a day)
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
var GROWTH_BUILD = '3.7.1';
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
  if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues().forEach(function (r) { if (r[0]) cfg[String(r[0]).trim()] = String(r[1]).trim(); });
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
  if (String(cfg['transcribe asked'] || '').indexOf(t) !== 0) return;
  if (String(cfg['transcribe done'] || '').indexOf(t) === 0) return;
  var lock = LockService.getScriptLock(); if (!lock.tryLock(5000)) return;
  try { transcribeToday(); } finally { lock.releaseLock(); }
}
/** By hand: transcribe today's entries now, whatever the Config cells say. */
function transcribeNow() { transcribeToday(true); }
function transcribeToday(byHand) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  try { ensureBuild3_(ss); } catch (e0) {}
  var cfg = readConfig_(ss);
  var t = today_();
  var done = transcriptsDone_(ss);
  var todays = entries_(ss).filter(function (e) { return e.status !== 'retired' && (e.written === t || (daysAgo_(e.written) <= 2 && !done[e.id])) && !done[e.id]; });
  var notes = [], n = 0, paid = deepgramCountToday_(ss);
  var max = toInt_(cfg['deepgram max per day'], 3);
  for (var i = 0; i < todays.length; i++) {
    if (Date.now() - RE_START > 300000) { notes.push('time budget reached; ' + (todays.length - i) + ' wait for the next tick'); break; }
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
var EC = { id: 1, written: 2, source: 3, kind: 4, link: 5, claim: 6, question: 7, construct: 8, place: 9, audience: 10, text: 11, ours: 12, cost: 13, cut: 14, move: 15, status: 16, relBy: 17, relOn: 18, desk: 19, build: 20, quotes: 21, transcript: 22, deepened: 23, keywords: 24, road: 25, todo: 26, question2: 27, week: 28 };

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.file === 'growth.js') return ContentService.createTextOutput(GROWTH_JS).setMimeType(ContentService.MimeType.JAVASCRIPT);
  if (p.file === 'row.js') return ContentService.createTextOutput(rowJs_()).setMimeType(ContentService.MimeType.JAVASCRIPT);
  if (p.file === 'road.js') return ContentService.createTextOutput(ROAD_JS).setMimeType(ContentService.MimeType.JAVASCRIPT);
  return jsonOut_({ ok: true, service: 'Ancient Path — Research reader', build: RE_BUILD, growth: GROWTH_BUILD, road: ROAD_BUILD });
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
    if (action === 'ping') { var pk = claudeKey_(); return { ok: true, build: RE_BUILD, growth: GROWTH_BUILD, road: ROAD_BUILD, keySet: !!pk, keyKind: pk ? pk.split('-').slice(0, 3).join('-') : '' }; }
    if (action.indexOf('road') === 0) return roadCall_(b);
    var who = whoIs_(b.key, b.site); // 4.0.3: the key opens only for the person the site shows
    if (action === 'growth') return growthFor_(who);
    if (action === 'new') return { ok: true, fresh: freshFor_(who) };
    if (action === 'mark') return markEntry_(who, b);
    if (action === 'thursday') return thursday_(who, b);
    if (action === 'ask') return askShelf_(who, b);
    if (action === 'release') return release_(who);
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
  var width = Math.min(EC.week, sh.getMaxColumns());
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, width).getValues();
  var out = [];
  data.forEach(function (r, i) {
    if (!r[EC.id - 1]) return;
    out.push({ row: i + 2, id: String(r[EC.id - 1]), written: dayOf_(r[EC.written - 1]), source: String(r[EC.source - 1]), kind: String(r[EC.kind - 1]), link: String(r[EC.link - 1]), claim: String(r[EC.claim - 1]),
      question: String(r[EC.question - 1]), construct: String(r[EC.construct - 1]), place: String(r[EC.place - 1]), audience: String(r[EC.audience - 1]), beside: String(r[EC.text - 1]), ours: String(r[EC.ours - 1]),
      cost: String(r[EC.cost - 1]), cut: String(r[EC.cut - 1]), move: String(r[EC.move - 1]), status: String(r[EC.status - 1]).toLowerCase(), desk: String(r[EC.desk - 1]),
      quotes: String(r[EC.quotes - 1] || ''), transcript: String(r[EC.transcript - 1] || ''), deepened: String(r[EC.deepened - 1] || ''),
      keywords: String(r[EC.keywords - 1] || ''), road: String(r[EC.road - 1] || ''), todo: String(r[EC.todo - 1] || ''), question2: String(r[EC.question2 - 1] || ''), week: String(r[EC.week - 1] || '').trim() });
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
  if (/group/i.test(d)) return 'The room';
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
  return { id: e.id, voice: voice, kind: e.kind, cost: e.cost, minutes: minutesOf_(e.cost), move: e.move, claim: e.claim, beside: e.beside, ours: e.ours, cut: e.cut, link: e.link, question: e.question, status: e.status,
    lane: laneOf_(voice.toLowerCase(), lanes), state: e.desk, isToday: e.desk.indexOf('yes · ' + today_()) === 0, openedDay: openedDay_(e.desk), written: e.written,
    construct: construct, quotes: whole ? quotesOf_(e.quotes) : [], wordsComing: !e.deepened && daysAgo_(e.written) <= 1 && !/^none/.test(e.transcript) };
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
      var r = { room: name, kind: String(data[i][H['kind']] || 'cohort').toLowerCase(), meets: String(data[i][H['meets']] || ''), first: isoDay_(data[i][H['first night']]), weeks: Number(data[i][H['weeks']] || 0) || 0 };
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
function growthFor_(who) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var cfg = readConfig_(ss);
  var lanes = lanes_(ss);
  var all = entries_(ss).filter(function (e) { return e.status !== 'retired'; });
  var admin = who.role === 'admin';
  var onDesk = all.filter(function (e) { return /^yes · /.test(e.desk); }).sort(function (a, b) { return b.desk.localeCompare(a.desk); });
  var todayE = onDesk.filter(function (e) { return e.desk.indexOf('yes · ' + today_()) === 0; })[0] || onDesk[0] || null;
  if (todayE && daysAgo_(todayE.written) > 7) todayE = null;
  var week = all.filter(function (e) { return daysAgo_(e.written) <= 6 && (/^yes · /.test(e.desk) || e.status === 'released' || admin); })
    .sort(function (a, b) { return (b.desk ? 1 : 0) - (a.desk ? 1 : 0) || b.written.localeCompare(a.written); });
  var seen = {}; var weekOut = [];
  week.forEach(function (e) { var q = lineKey_(e.question); if (!seen[q]) { seen[q] = 1; weekOut.push(pieceOut_(e, lanes)); } });
  var nw = nextRoom_(who);
  var bringing = all.filter(function (e) { return /bring/.test(e.desk) && !/used|not used/.test(e.desk) && daysAgo_(e.written) <= 10; }).sort(function (a, b) { return b.written.localeCompare(a.written); })[0] || null;
  var thursday = null; // the morning-after questions (wire name kept); they need his room's night, so a facilitator with no room has none
  if (bringing) {
    var m = bringing.desk.match(/bring (\d{4}-\d{2}-\d{2})/); var bringDay = m ? m[1] : bringing.written;
    var rr = roomRow_(who), night = rr ? nightOnOrAfter_(rr, bringDay) : null;
    if (night && Date.parse(today_()) > Date.parse(night.date)) thursday = { id: bringing.id, move: bringing.move, when: fmtDay_(night.date, 'EEEE, MMM d') };
  }
  var shelf = all.filter(function (e) { return e.status === 'released' || (admin && e.status === 'candidate'); }).sort(function (a, b) { return b.written.localeCompare(a.written); }).map(function (e) { return pieceOut_(e, lanes); });
  var coming = all.filter(function (e) { return /event|training|conference|workshop/i.test(e.kind); }).map(function (e) { return pieceOut_(e, lanes); });
  var candidates = all.filter(function (e) { return e.status === 'candidate'; }).length;
  return {
    ok: true, build: RE_BUILD, growth: GROWTH_BUILD,
    who: { name: who.name, email: who.email, role: who.role, room: who.room },
    today: todayE ? pieceOut_(todayE, lanes) : null,
    week: weekOut,
    room: { next: nw ? nw.label : '', bringing: bringing ? pieceOut_(bringing, lanes) : null, prep: prepLine_(cfg['prep window']), carried: who.room ? carried_(who) : null },
    thursday: thursday,
    shelf: shelf,
    coming: coming,
    release: admin ? { count: candidates } : null
  };
}

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
      if (key.indexOf('research:') !== 0 || key.indexOf('research:bring') === 0) continue;
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
function askShelf_(who, b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var text = String(b.text || '').trim().slice(0, 400);
  if (!text) throw { code: 'empty' };
  var lanes = lanes_(ss);
  var shelf = entries_(ss).filter(function (e) { return e.status === 'released' || e.status === 'candidate'; });
  var key = claudeKey_();
  var out = { ok: true }; var detail = '';
  if (key) {
    var compact = shelf.length ? shelf.slice(0, 60).map(function (e) { return e.id + ' | ' + voiceOf_(e.source) + ' | ' + e.question + ' | ' + e.claim + ' | move: ' + e.move; }).join('\n') : '(empty: the engine has not written its first entries yet)';
    var system = 'You help a facilitator of a Christian men\'s group prepare for his next room. Answer from the shelf first: pick the ONE entry id that best fits what the room is stuck on. Then write ONE question the facilitator could ask the room, plain and clear, in American spelling, never the word "brother". If nothing on the shelf fits, say so and offer one idea from your own reading, labeled as not yet on our shelf, with the source named. Never a reading list. Never a man\'s name. Reply as JSON only: {"id": "<entry id or empty>", "question": "<one question>", "idea": "<one or two sentences, only when the shelf has nothing>", "source": "<who, when idea is given>"}.';
    var user = 'The room is stuck on: ' + text + '\n\nThe shelf:\n' + compact;
    try {
      var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', { method: 'post', contentType: 'application/json', muteHttpExceptions: true,
        headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
        payload: JSON.stringify({ model: readConfig_(ss)['claude model'] || 'claude-sonnet-5', max_tokens: 900, system: system, messages: [{ role: 'user', content: user }] }) });
      if (res.getResponseCode() === 200) {
        var j = JSON.parse(res.getContentText()); var txt = (j.content || []).map(function (c) { return c && typeof c.text === 'string' ? c.text : ''; }).join('\n');
        var m = txt.match(/\{[\s\S]*\}/); var ans = {}; try { ans = m ? JSON.parse(m[0]) : {}; } catch (pe) { detail = 'Claude answered in a shape the page could not read: ' + txt.slice(0, 160); }
        var hit = shelf.filter(function (e) { return e.id === ans.id; })[0];
        if (hit) { out.item = pieceOut_(hit, lanes); out.item.fromShelf = true; }
        else if (ans.idea) out.item = { id: '', voice: ans.source || 'Claude\'s reading', kind: 'not yet on our shelf', move: ans.idea, claim: '', beside: 'Not yet read against the text; our team reads it before it joins the shelf.', ours: '', cut: '', link: '', fromShelf: false, cost: '', construct: '', quotes: [], wordsComing: false };
        out.question = ans.question || '';
        if (!ans.id && !ans.question && !ans.idea) detail = 'Claude 200 but no id/question/idea in: ' + txt.slice(0, 300) + (j.stop_reason ? ' [stop: ' + j.stop_reason + ']' : '');
      } else { out.note = 'Claude did not answer; this is the shelf alone.'; detail = 'Claude ' + res.getResponseCode() + ': ' + String(res.getContentText() || '').slice(0, 200); }
    } catch (x) { out.note = 'Claude could not be reached; this is the shelf alone.'; detail = 'fetch failed: ' + String(x && x.message || x).slice(0, 160); }
  } else detail = 'no CLAUDE_KEY script property';
  if (!out.item && shelf.length) {
    var words = text.toLowerCase().split(/\W+/).filter(function (w) { return w.length > 3; });
    var best = null, bestN = 0;
    shelf.forEach(function (e) { var hay = (e.claim + ' ' + e.move + ' ' + e.beside + ' ' + e.place).toLowerCase(); var n = 0; words.forEach(function (w) { if (hay.indexOf(w) >= 0) n++; }); if (n > bestN) { bestN = n; best = e; } });
    if (best) { out.item = pieceOut_(best, lanes); out.item.fromShelf = true; out.question = out.question || 'What would it take for one man to say the thing out loud in the room?'; }
    if (!key) out.note = (out.note || '') + ' The wider reading is not connected yet; our team can switch it on.';
  }
  if (!out.item && !out.note) { out.note = 'The shelf has nothing on this yet. The engine logs the question and looks for it.'; }
  if (detail && who.role === 'admin') out.detail = detail;
  answers_(ss).appendRow([stamp_(new Date()), who.email, out.item && out.item.id || '', 'ask', text, (out.question || '') + (out.note ? ' | ' + out.note : '') + (detail ? ' | ' + detail : ''), who.room, RE_BUILD]);
  return out;
}
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
var GROWTH_JS = "/* AP-GROWTH growth.js build 3.7.1 \\u2014 the Your Growth page, served by the Research reader script (ResearchReader.gs build 9.1.4, ?file=growth.js).\n   3.7.1 (Oct 27, 2026, the page lost its styling): the shared shapes CSS carried a .apg prefix on its @media line and the block never closed, so the browser dropped every rule after it; the prefix is gone, the block is closed, and the font @import stands first in the stylesheet again, where a browser reads it. No layout change.\n   3.7 (Oct 26, 2026, after the live read): the arrow stands a space off every Walk line (Open it and Bring it to the room now match); the magnifier no longer sits on the first letter of Search the shelf; the writing boxes keep the Answer shape over the room's own box style.\n   3.6 (Oct 26, 2026, the three shapes of an ask, AP-SHAPES 1, merged onto 3.5): the ask (My room is stuck on) is a writing area with one button, Ask; the shelf search is the one-line box with a magnifier and no button; Bring it to the room, Release to the shelf and Later are lines with an arrow; Open it (a link) draws as a line; Keep this is outlined so Ask is the one filled button on the screen.\n   3.5 (Oct 26, 2026): one layout rule for every opened piece. Today's card, the panel a card opens, a shelf entry and the ask-box answer all come through pieceHtml. The line under the kicker, the headline and In their words run the full width (the headline in two lines, no narrowing; --w is none inside an opened piece, so the one-width rule of 3.4 still holds everywhere else); while the words are still coming the label drops and one quiet line stands in its place. Below, two equal boxes with a 48px gap: What it means for our work (It touches, Read against the text, Already ours) on the left; What to do with it (the Bring-it points, What to listen for, then the buttons) on the right, the buttons ending it. Under 900px wide: one column, same order. No piece is named in code. The page foot reads 3.5.\n   3.4 (Oct 26, 2026): one width. The headline, the show-and-guest line, the note line, the paragraphs, the bullets, the claim and the quoted lines all read the one variable --w (760px), so their right edges line up on the open card, the shelf entries and the ask-box answer (they share the classes); the headline breaks balanced and the paragraphs break pretty, and the last two words of every line of text are tied so none ends on a word alone, in any browser. The page foot reads 3.4 (the Oct 23 entry below was logged as 3.4 while the foot still read 3.3; the foot now catches up).\n   3.4 (Oct 23, 2026): three marks under the piece, never four \\u2014 Open it \\u00b7 Bring it to the room (then \\u201cOn the agenda for Week N\\u201d) \\u00b7 Not needed; This offended me is gone (the script still accepts the mark; nothing sends it). The first stop says \\u201con every subject we follow\\u201d, not \\u201clane\\u201d. The fifth stop of How this works reads \\u201cThe shelf grows as we listen to one another\\u201d \\u2014 the piece is chosen from the voices we follow for the room\\u2019s work and set in the wider community; answers tell our team what served and never narrow who we listen to. 3.3: the second stop in John\\u2019s words.\n   3.2 (Oct 23, 2026, after Jason's walk): the gate reads the site's signed-in person and opens only for the person the key is for (no email box; the code goes to the address the site shows); How this works, the five stops in the facilitator's words under the bench, full the first time and one line after, with a plain-talk line; This offended me, a fourth mark that opens \\u201cWhat offended you, and why?\\u201d (read by a person, never shown to another man); Bring it drawn as the two or three points a facilitator would say; bronze buttons carry white text.\n   3.1: the craftsman's bench (Exodus 31:3), the first house-style picture, opens the page \\u2014 full width under the site's top bar, the band beneath it; one file served from the repo (pictures/craftsmans-bench.jpg), phone and desktop, no words in the image.\n   3: every piece carries the three-part block \\u2014 In their words (up to two verbatim lines of twenty-five words or fewer, each with its minute and a link that opens the thing there) \\u00b7 What it means for our work (the construct it touches, read against the text, already ours) \\u00b7 What to do with it (the move) \\u2014 then What to listen for (the cut, with real minutes once the transcript is in). A quote rides only with meaning and application attached (RE1). The cut is never named on the page: it reads What to listen for. The words line says when the minute is still coming.\n   2.6: the three lines are the text's own words, Wisdom \\u00b7 Understanding \\u00b7 Knowledge (Exodus 31:3), under the verse, one gloss each, with no order claimed; the sheet's keys in Entries column G stay and the page maps key to word. What these mean and every shelf line open and close in place (the panel is always in the page, shown by a class; no repaint, no scroll; an arrow after the words shows the state); every scroll lands below the site's top bar (measured on the page); anything typed survives any open or close; the room's day comes from the Rooms tab on the Front Desk sheet, never a weekday written into the page.\n   2.5: the week cards lead with the claim, carry the source, the cost, the Bring-it question and two links (Open it, See the piece); any card opens in the top panel; the three lines carry their meaning (glosses and the What these mean panel); states read as words.\n   The page block on /your-growth is only a loader: <div id=\"apGrowth\"></div> and this script's tag.\n   One home, three rooms: the band carries the row Your Desk \\u00b7 Your Growth \\u00b7 Your Page on every page the facilitator owns. */\n(function () {\nvar host = document.getElementById('apGrowth'); if (!host || host.getAttribute('data-growth')) return; host.setAttribute('data-growth', '3');\nvar BUILD = '3.7.1';\nvar GROWTH_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split('?')[0] : ''; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : ''; })();\nvar DESK_URL = 'https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec';\nvar STORE = 'apDesk';\nvar PATHS = { desk: '/front-desk', growth: '/your-growth', page: '/start' };\n\nhost.innerHTML = '<style>' +\n\"@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');\" +\n/* AP-SHAPES 1.1: the three shapes of an ask (Find, Answer, Walk) and the weight rule; one source, shapes.css, carried by every room script */\n\".apg .ap-find{position:relative;max-width:34em;margin:0 0 18px}.apg .ap-find input{width:100%;box-sizing:border-box;font:400 16px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--ink,#2B3040) !important;background:#fff;border:0;border-bottom:1px solid var(--rule,#E2DCD1);border-radius:0;padding:8px 0 8px 28px;outline:none}.apg .ap-find input:focus{border-bottom-color:var(--navy,#1F2A44)}.apg .ap-find::before{content:\\\"\\\";position:absolute;left:2px;top:11px;width:12px;height:12px;border:1.5px solid var(--quiet,#6B7280);border-radius:50%}.apg .ap-find::after{content:\\\"\\\";position:absolute;left:13px;top:23px;width:7px;height:1.5px;background:var(--quiet,#6B7280);transform:rotate(45deg);transform-origin:left center}.apg .ap-find input::placeholder{color:var(--quiet,#6B7280)}.apg .ap-answer{margin:0 0 18px;max-width:40em}.apg .ap-answer .ap-answer-q{font:400 20px/1.4 var(--serif,'Source Serif 4',serif) !important;color:var(--navy,#1F2A44) !important;margin:0 0 10px;text-wrap:balance}.apg .ap-answer .ap-answer-lead{font:400 15px/1.5 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--quiet,#6B7280) !important;margin:-4px 0 10px}.apg .ap-answer input,.apg .ap-answer textarea{display:block;width:100%;box-sizing:border-box;font:400 17px/1.5 var(--serif,'Source Serif 4',serif) !important;color:var(--ink,#2B3040) !important;background:var(--paper,#FBF9F5);border:1px solid var(--rule,#E2DCD1);border-left:3px solid var(--bronze,#B8945F);border-radius:4px;padding:12px 14px;outline:none;resize:vertical}.apg .ap-answer input{min-height:0}.apg .ap-answer textarea{min-height:96px}.apg .ap-answer input:focus,.apg .ap-answer textarea:focus{border-color:var(--navy,#1F2A44);border-left-color:var(--bronze,#B8945F)}.apg .ap-answer input::placeholder,.apg .ap-answer textarea::placeholder{color:var(--quiet,#6B7280);font-style:italic}.apg .ap-answer .ap-answer-act{display:flex;align-items:center;gap:14px;margin:10px 0 0}.apg .ap-answer .ap-answer-state{font:400 14px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--quiet,#6B7280) !important;margin:8px 0 0;min-height:1.4em}.apg .ap-answer .ap-answer-state.kept{color:var(--bronze,#B8945F) !important}.apg .ap-answer .ap-answer-state.kept::before{content:\\\"\\\\2713\\\\00a0\\\"}.apg .ap-walk{display:inline-block;font:600 15px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;color:var(--navy,#1F2A44) !important;background:none;border:0;border-bottom:1px solid var(--bronze,#B8945F);padding:0 0 1px;margin:0;cursor:pointer;text-decoration:none !important;text-align:left}.apg .ap-walk:hover{border-bottom-color:var(--navy,#1F2A44)}.apg .ap-walk .ap-walk-arrow{display:inline-block;margin-left:6px;color:var(--bronze,#B8945F)}.apg .ap-walk+.ap-walk{margin-left:18px}.apg .ap-walk.quiet{font-weight:400 !important;color:var(--quiet,#6B7280) !important;border-bottom-color:var(--rule,#E2DCD1)}.apg a.btn.p,.apg a.btn.g{background:none !important;color:var(--navy,#1F2A44) !important;border:0 !important;border-bottom:1px solid var(--bronze,#B8945F) !important;border-radius:0 !important;padding:0 0 1px !important;font:600 15px/1.4 var(--sans,'Source Sans 3',sans-serif) !important;box-shadow:none !important;display:inline-block}.apg a.btn.p::after,.apg a.btn.g::after{content:\\\"\\\\00a0\\\\2192\\\";color:var(--bronze,#B8945F)}.apg a.btn.p+.ap-btn,.apg .ap-walk+a.btn.p,.apg a.btn.p+.ap-walk{margin-left:18px}@media (prefers-reduced-motion: reduce){.ap-walk,.ap-answer input,.ap-answer textarea{transition:none}}.apg .ap-find input[type=search]{min-height:0 !important;padding:8px 0 8px 28px !important;border:0 !important;border-bottom:1px solid var(--rule) !important;border-radius:0 !important;background:#fff !important}.apg .ap-find input[type=search]:focus{border-bottom-color:var(--navy) !important}.apg .ap-answer textarea,.apg .ap-answer input[type=text]{border:1px solid var(--rule) !important;border-left:3px solid var(--bronze) !important;border-radius:4px !important;background:var(--paper) !important;padding:12px 14px !important}.apg .ap-answer textarea:focus,.apg .ap-answer input[type=text]:focus{border-color:var(--navy) !important;border-left-color:var(--bronze) !important}.apg .ap-walk .ap-walk-arrow{margin-left:6px}.apg a.btn.p::after,.apg a.btn.g::after{content:\\\" \\\\2192\\\"}\" +\n'.apg{--w:760px;--navy:#1F2A44;--band:#1B2A3A;--bronze:#B8945F;--bronze-ink:#8C6A3B;--paper:#FBF9F5;--card:#FFFDF9;--rule:#E2DCD1;--ink:#2B3040;--quiet:#5B5346;--band-ink:#F3EDE3;--band-quiet:#B7AFA4;--good:#3D7A52;--serif:\"Source Serif 4\",Georgia,serif;--sans:\"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif;color:var(--ink);font:400 17px/1.5 var(--sans);-webkit-font-smoothing:antialiased;text-align:left;background:var(--paper)}' +\n'.apg *,.apg *::before,.apg *::after{box-sizing:border-box}' +\n'#pageContainer #apGrowth a,#apGrowth a{color:var(--navy);text-decoration:none}#pageContainer #apGrowth a:hover,#apGrowth a:hover{color:var(--bronze-ink);text-decoration:none}' +\n'.apg .hero{display:block;width:100vw;margin-left:calc(50% - 50vw);height:clamp(180px,26vw,380px);object-fit:cover;object-position:50% 62%;background:var(--band)}' +\n'.apg .band{background:var(--band);color:var(--band-ink);padding:40px 24px 0;width:100vw;margin-left:calc(50% - 50vw)}' +\n'.apg .in{max-width:980px;margin:0 auto}' +\n'.apg .eyebrow{font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--bronze);font-weight:600}' +\n'.apg h1{font:600 44px/1.1 var(--serif);color:var(--band-ink);margin:12px 0 0}' +\n'.apg .lede{font-size:19px;line-height:1.5;color:var(--band-quiet);margin:12px 0 0;max-width:640px}' +\n'.apg .row{display:flex;gap:36px;margin-top:18px;border-top:1px solid rgba(243,237,227,.14);padding-top:4px;flex-wrap:wrap}' +\n'#pageContainer #apGrowth .row a,.apg .row a{display:inline-block;padding:16px 0;font-size:17px;color:var(--band-quiet);border-bottom:3px solid transparent}' +\n'#pageContainer #apGrowth .row a.on,.apg .row a.on{color:var(--band-ink);font-weight:600;border-bottom-color:var(--bronze)}' +\n'.apg .row a .new{font-weight:400;color:var(--bronze)}' +\n'.apg .main{max-width:1028px;margin:0 auto;padding:48px 24px 80px;display:flex;flex-direction:column;gap:56px}' +\n'.apg .kicker{font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--bronze-ink);font-weight:600;margin:0 0 14px}' +\n'.apg .who{font-size:17px;color:var(--quiet);margin:0 0 14px;max-width:var(--w);text-wrap:pretty}' +\n'.apg h2{font:600 40px/1.15 var(--serif);color:var(--navy);margin:0 0 16px;max-width:var(--w);text-wrap:balance}' +\n'.apg .claim{font-size:21px;line-height:1.5;max-width:var(--w);margin:0 0 14px;text-wrap:pretty}' +\n'.apg .fine{font-size:17px;line-height:1.5;color:var(--quiet);max-width:var(--w);margin:0 0 10px;text-wrap:pretty}.apg .fine b{color:var(--navy);font-weight:600}' +\n'.apg .btns{display:flex;flex-wrap:wrap;gap:14px;margin-top:16px}' +\n'#pageContainer #apGrowth .btn,.apg .btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:6px;font:600 17px var(--sans);cursor:pointer;border:1.5px solid var(--navy);background:transparent;color:var(--navy);text-decoration:none}' +\n'#pageContainer #apGrowth .btn.p,#apGrowth .btn.p,.apg .btn.p{background:var(--bronze);border-color:var(--bronze);color:#fff}' +\n'.apg .how{display:grid;gap:14px}.apg .hstops{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:18px;margin:0;padding:0;list-style:none}.apg .hstops li{padding:0 0 0 12px;border-left:2px solid var(--bronze);min-width:0}.apg .hstops .st{display:block;font:400 17px/1.3 var(--serif);color:var(--navy);margin:0 0 6px}.apg .hstops .sl{display:block;font:400 14px/1.5 var(--sans);color:var(--ink)}.apg .how-head{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px 16px}.apg .how-head .kicker{margin:0}.apg .how-btn{font:600 15px/1.4 var(--sans);color:var(--bronze-ink);background:none;border:0;padding:0;cursor:pointer;min-height:32px}.apg .how-line{font:400 15px/1.6 var(--sans);color:var(--ink)}.apg .plain{font:400 15px/1.5 var(--sans);color:var(--quiet);padding:10px 14px;background:var(--card);border:1px solid var(--rule);border-radius:6px;max-width:980px}' +\n'.apg .points{display:grid;gap:6px;margin:0 0 10px;padding-left:18px;list-style:disc;max-width:var(--w)}.apg .points li{font-size:17px;line-height:1.5;text-wrap:pretty}' +\n'@media (max-width:720px){.apg .hstops{grid-template-columns:1fr;gap:12px}.apg .hstops .st{display:inline;font-size:16px}.apg .hstops .sl{display:inline;margin-left:6px}.apg .points li{font-size:16px}}' +\n'#pageContainer #apGrowth .btn.q,.apg .btn.q{border-color:transparent;color:var(--quiet);font-weight:400}' +\n'.apg .btn[disabled]{opacity:.6;cursor:default}' +\n'.apg .card{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:22px}.apg .card.hi{border:1.5px solid var(--bronze)}' +\n'.apg .three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}' +\n'.apg .three .card{display:flex;flex-direction:column;gap:10px;min-height:200px}.apg .three h3{font:600 24px/1.2 var(--serif);margin:0}.apg .three .v{font-size:15px;color:var(--quiet)}.apg .three .t{font-size:17px;line-height:1.45}.apg .three .st{margin-top:auto;font-size:15px;font-weight:600;color:var(--quiet)}.apg .three .st.good{color:var(--good)}.apg .three .st.new{color:var(--bronze-ink)}' +\n'.apg label{font-size:17px;font-weight:600;display:block;margin:0 0 8px}' +\n'.apg input[type=text],.apg input[type=search],.apg input[type=email],.apg input[type=tel],.apg textarea{width:100%;min-height:48px;padding:10px 16px;font:400 17px/1.45 var(--sans);border:1.5px solid #CBBFAE;border-radius:6px;background:#fff;color:var(--ink)}.apg textarea{resize:vertical}' +\n'.apg .askrow{display:flex;flex-wrap:wrap;gap:12px}.apg .askrow input{flex:1 1 320px;width:auto}' +\n'.apg .hr{border-top:1px solid var(--rule);padding-top:18px;margin-top:18px}' +\n'.apg .lanes{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0}' +\n'#pageContainer #apGrowth .lane,.apg .lane{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border-radius:22px;border:1px solid #CBBFAE;background:var(--card);font:400 16px var(--sans);color:var(--navy);cursor:pointer}' +\n'#pageContainer #apGrowth .lane.on,.apg .lane.on{background:var(--band);border-color:var(--band);color:var(--band-ink)}' +\n'.apg .list{border-top:1px solid var(--rule)}.apg .item{border-bottom:1px solid var(--rule)}' +\n'.apg .item .head{display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;align-items:baseline;padding:18px 0;cursor:pointer;width:100%;background:none;border:0;text-align:left;font:inherit;color:inherit}' +\n'.apg .item .head .m{font-size:18px;font-weight:600;flex:1 1 420px}.apg .item .head .w{font-size:15px;color:var(--quiet)}' +\n'.apg .item .body{display:none;padding:0 0 20px}.apg .item.open .body{display:block}' +\n'.apg .note{font-size:15px;color:var(--quiet);max-width:var(--w);text-wrap:pretty}' +\n'.apg .flash{background:var(--card);border:1.5px solid var(--bronze);border-radius:10px;padding:18px 22px;font-size:17px}' +\n'.apg .gate{max-width:560px;margin:0 auto;padding:56px 24px 80px}.apg .gate h2{font-size:32px}.apg .gate .err{color:#9A3B2F;font-size:15px;margin-top:8px}' +\n'.apg .foot{display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;border-top:1px solid var(--rule);padding-top:22px;font-size:17px}' +\n'.apg .thu{background:var(--card);border:1.5px solid var(--bronze);border-radius:10px;padding:26px;display:flex;flex-direction:column;gap:18px}' +\n'.apg .radios{display:flex;gap:10px}.apg .radios label{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;min-height:48px;border:1.5px solid #CBBFAE;border-radius:6px;font-size:16px;font-weight:600;background:var(--card);margin:0;cursor:pointer}.apg .radios input{width:18px;height:18px;margin:0;accent-color:var(--band)}' +\n'@media (max-width:720px){.apg .band{padding:26px 20px 0}.apg h1{font-size:27px;margin-top:8px}.apg .lede{font-size:15px;margin-top:8px}.apg .row{gap:18px;margin-top:10px;flex-wrap:nowrap}#pageContainer #apGrowth .row a,.apg .row a{padding:12px 0;font-size:14px;white-space:nowrap}.apg h2{font-size:25px;margin-bottom:10px}.apg .claim{font-size:17px;margin-bottom:8px}.apg .fine{font-size:14px;margin-bottom:6px}.apg .kicker{margin-bottom:8px}.apg .who{font-size:14px;margin-bottom:8px}.apg .three{grid-template-columns:1fr}.apg .three .card{min-height:0}.apg .btns{flex-direction:column;gap:10px;margin-top:12px}#pageContainer #apGrowth .btn,.apg .btn{width:100%;min-height:46px}.apg .main{gap:40px;padding:22px 20px 60px}}' +\n'.apg .three .card{cursor:pointer}.apg .three .gl{font-size:14px;color:var(--quiet);margin-top:-4px}.apg .three .h{font:600 18px/1.35 var(--serif);margin:0;color:var(--navy)}.apg .three .b{font-size:15px;line-height:1.45}.apg .three .lk{display:flex;gap:18px;font-size:15px;font-weight:600}#pageContainer #apGrowth .three .lk a,.apg .three .lk a{color:var(--bronze-ink);text-decoration:none}#pageContainer #apGrowth .three .lk a:hover,.apg .three .lk a:hover{text-decoration:underline}' +\n'.apg .wk{display:flex;flex-wrap:wrap;gap:8px 18px;align-items:baseline;margin:-6px 0 16px;font-size:16px;line-height:1.5;color:var(--quiet)}.apg .wk .verse{font:italic 400 19px/1.4 var(--serif);color:var(--ink)}.apg .wk .ref{font:600 13px/1.4 var(--sans);font-style:normal;letter-spacing:.08em;text-transform:uppercase;color:var(--quiet);margin-left:6px}.apg .wk button{font:600 15px/1.4 var(--sans);color:var(--bronze-ink);background:none;border:0;padding:0;cursor:pointer;min-height:44px;white-space:nowrap}.apg .mean{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:18px 22px;margin:0 0 18px;display:none;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.apg .mean.open{display:grid}.apg #sThu,.apg #sToday,.apg #sWeek,.apg #sRoom,.apg #sShelf,.apg #sComing,.apg .mean{scroll-margin-top:var(--bar,84px)}.apg .ar{white-space:nowrap}.apg .mean h4{font:600 20px/1.2 var(--serif);margin:0 0 6px}.apg .mean p{font-size:15px;line-height:1.5;margin:0}.apg .mean .w{color:var(--quiet)}.apg .mean .all{grid-column:1/-1;border-top:1px solid var(--rule);padding-top:12px;font-size:15px;color:var(--quiet)}.apg .back{font-size:15px;font-weight:600;color:var(--bronze-ink);margin:0 0 10px}' +\n'.apg .part{font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:var(--bronze-ink);font-weight:600;margin:18px 0 6px}.apg blockquote.q{margin:0 0 10px;padding:4px 0 4px 16px;border-left:3px solid var(--bronze);font:italic 400 19px/1.45 var(--serif);color:var(--ink);max-width:var(--w);text-wrap:pretty}.apg blockquote.q a,#pageContainer #apGrowth blockquote.q a{font:600 14px/1.4 var(--sans);font-style:normal;color:var(--bronze-ink);white-space:nowrap;margin-left:6px}.apg blockquote.q .qm{font:600 14px/1.4 var(--sans);font-style:normal;color:var(--quiet);margin-left:6px}@media (max-width:720px){.apg blockquote.q{font-size:16px}.apg .part{margin-top:14px}}' +\n'@media (max-width:720px){.apg .mean{grid-template-columns:1fr}.apg .three .lk{gap:14px}}' +\n'.apg .pc{--w:none}.apg .pc .pcq{margin:2px 0 0}' +\n'.apg .pc .pcols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:48px;align-items:start}.apg .pc .pcol{min-width:0}' +\n'.apg .pc .pcol .btns{margin-top:18px;gap:10px 12px}#pageContainer #apGrowth .pc .pcol .btn,.apg .pc .pcol .btn{padding:0 16px}#pageContainer #apGrowth .pc .pcol .btn.q,.apg .pc .pcol .btn.q{padding:0 8px}' +\n'@media (max-width:899px){.apg .pc .pcols{grid-template-columns:1fr}}' +\n'</style>' +\n'<div class=\"apg\"><img class=\"hero\" src=\"https://raw.githubusercontent.com/johnlsherrod/ancient-path/main/pictures/craftsmans-bench.jpg\" width=\"1316\" height=\"740\" alt=\"A craftsman\\'s bench at first light\" decoding=\"async\" fetchpriority=\"high\"><div class=\"band\"><div class=\"in\"><div class=\"eyebrow\">Ancient Path</div><h1 id=\"gHello\">Good morning.</h1><p class=\"lede\" id=\"gLede\">One thing for this week, twelve minutes. Filled for the Work \\u00b7 Exodus 31:3.</p>' +\n'<nav class=\"row\" aria-label=\"Your rooms\"><a href=\"' + PATHS.desk + '\" id=\"gNavDesk\">Your Desk</a><a href=\"' + PATHS.growth + '\" class=\"on\" id=\"gNavGrowth\">Your Growth</a><a href=\"' + PATHS.page + '\" id=\"gNavPage\">Your Page</a></nav></div></div>' +\n'<div id=\"gBody\"></div></div>';\n\nfunction $(id) { return document.getElementById(id); }\nfunction esc(s) { return String(s == null ? '' : s).replace(/[&<>\"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;' }[c]; }); }\n/* The last two words of a line of text are tied, so no paragraph or headline ends on a word alone, whatever the browser does with text-wrap. */\nfunction tie(s) { return esc(s).replace(/\\s+$/, '').replace(/ ([^ ]+)$/, '\\u00a0$1'); }\nfunction stored() { try { var v = JSON.parse(localStorage.getItem(STORE) || 'null'); return v && v.key ? v : null; } catch (e) { return null; } }\nfunction keep(v) { try { if (v) localStorage.setItem(STORE, JSON.stringify(v)); else localStorage.removeItem(STORE); } catch (e) {} }\nfunction post(url, body) {\n  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), credentials: 'omit' })\n    .then(function (r) { return r.json(); }, function () { throw { error: 'network' }; })\n    .then(function (r) { if (!r || r.ok !== true) throw (r || { error: 'network' }); return r; });\n}\nfunction lwMe() { var m = window.me; return (m && typeof m === 'object' && m.email) ? m : null; }\nfunction siteEmail() { var m = lwMe(); return m ? String(m.email || '').toLowerCase().trim() : ''; }\nfunction call(body) { if (!GROWTH_URL) return Promise.reject({ error: 'no_url' }); var s = stored(); body.key = s ? s.key : ''; body.site = siteEmail(); return post(GROWTH_URL, body); }\nfunction greet() { var h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }\nfunction firstName(n) { return String(n || '').trim().split(/\\s+/)[0] || ''; }\nfunction words(e) {\n  switch (e && e.error) {\n    case 'not_on_list': return 'That email is not on the desk list. Our team adds people on the People tab of the Front Desk sheet.';\n    case 'not_you': return 'The site is signed in as someone else. Sign in as yourself to open Your Growth.';\n    case 'no_site': return 'The site does not show anyone signed in. Sign in, then open Your Growth.';\n    case 'bad_email': return 'That does not look like an email address.';\n    case 'wait': return 'A code went out less than two minutes ago. Check your mail, or wait a moment and ask again.';\n    case 'too_many': return 'Five codes have gone out today. Try again tomorrow, or ask our team.';\n    case 'code_expired': return 'That code has expired. Ask for a new one.';\n    case 'code_wrong': return 'That is not the code. Check the mail and try again.';\n    case 'network': return 'The page could not reach the practice. Try again in a moment.';\n    case 'no_url': return 'The page is not wired to its script yet.';\n    default: return 'Something did not work. Try again in a moment.';\n  }\n}\n/* The site's top bar sticks to the top of the window; whatever we scroll to must land below it. Measured on the page, never assumed. */\nfunction barH() {\n  function h(e) { try { var cs = getComputedStyle(e), r = e.getBoundingClientRect(); if ((cs.position === 'fixed' || cs.position === 'sticky') && r.top <= 2 && r.height > 10 && r.height < 220 && r.width > 300) return Math.round(r.bottom); } catch (x) {} return 0; }\n  var best = h(document.querySelector('.lw-topbar') || document.body);\n  if (!best) { var c = document.querySelectorAll('header, [class*=\"topbar\"], [class*=\"header\"]'); for (var i = 0; i < c.length; i++) { var v = h(c[i]); if (v > best) best = v; } }\n  return best || 84;\n}\nfunction setBar() { var a = host.querySelector('.apg'); if (a) a.style.setProperty('--bar', barH() + 'px'); }\nfunction scrollTo(el) {\n  if (!el) return;\n  el.style.scrollMarginTop = barH() + 'px';\n  try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { el.scrollIntoView(); }\n}\n\n/* ---------- the gate: the site's sign-in is the door; the desk's code and key open the page for the person the site shows ---------- */\nfunction openSignIn() {\n  try { if (window.l_settings) window.l_settings.redirectUrl = location.pathname + location.search; } catch (e) {}\n  var a = document.querySelector('a[data-interactive-link-type=\"openformslink\"][data-interactive-link-var1=\"signin\"]');\n  if (a) { a.click(); return; }\n  var b = $('gSignin'); if (b) b.textContent = 'Use Sign in at the top of the page';\n}\nfunction gate(msg) {\n  var site = siteEmail();\n  $('gHello').textContent = greet() + (site && lwMe().firstName ? ', ' + firstName(lwMe().firstName) : '') + '.';\n  $('gLede').textContent = site ? 'Signed in as ' + site + '.' : 'Sign in to open Your Growth.';\n  if (!site) {\n    $('gBody').innerHTML = '<div class=\"gate\"><h2>Your Growth is for facilitators on our team.</h2><p class=\"fine\">Sign in with your site account; the page opens for the person the site shows.</p>' + (msg ? '<p class=\"err\">' + esc(msg) + '</p>' : '') + '<div class=\"btns\"><button class=\"btn p\" id=\"gSignin\">Sign in</button></div></div>';\n    $('gSignin').addEventListener('click', openSignIn);\n    return;\n  }\n  $('gBody').innerHTML = '<div class=\"gate\"><h2>Your Growth is for facilitators on our team.</h2>' +\n    '<p class=\"fine\">The first time each day, a six-digit code goes to ' + esc(site) + ' and this page opens on it, for one day. The same code opens your desk.</p>' +\n    (msg ? '<p class=\"err\">' + esc(msg) + '</p>' : '') +\n    '<div id=\"gStep1\"><div class=\"btns\"><button class=\"btn p\" id=\"gSend\">Send me a code</button></div><p class=\"err\" id=\"gErr1\" hidden></p></div>' +\n    '<div id=\"gStep2\" hidden><label for=\"gCode\">The six digits from the mail</label><input id=\"gCode\" type=\"tel\" inputmode=\"numeric\" autocomplete=\"one-time-code\" placeholder=\"000 000\"><div class=\"btns\"><button class=\"btn p\" id=\"gCheck\">Open Your Growth</button><button class=\"btn q\" id=\"gAgain\">Send another code</button></div><p class=\"err\" id=\"gErr2\" hidden></p></div></div>';\n  var email = site;\n  $('gSend').addEventListener('click', function () {\n    var b = $('gSend'); b.disabled = true; b.textContent = 'Sending\\u2026'; $('gErr1').hidden = true;\n    post(DESK_URL, { action: 'code_send', email: email, site: siteEmail() }).then(function () {\n      b.disabled = false; b.textContent = 'Send me a code'; $('gStep1').hidden = true; $('gStep2').hidden = false; $('gCode').focus();\n    }, function (e) { b.disabled = false; b.textContent = 'Send me a code'; $('gErr1').textContent = words(e); $('gErr1').hidden = false; });\n  });\n  $('gAgain').addEventListener('click', function () { $('gStep2').hidden = true; $('gStep1').hidden = false; });\n  $('gCheck').addEventListener('click', function () {\n    var code = String($('gCode').value || '').replace(/\\D/g, '');\n    if (code.length !== 6) { $('gErr2').textContent = 'The code is six digits.'; $('gErr2').hidden = false; return; }\n    var b = $('gCheck'); b.disabled = true; b.textContent = 'Opening\\u2026'; $('gErr2').hidden = true;\n    post(DESK_URL, { action: 'code_check', email: email, code: code, site: siteEmail(), browser: navigator.userAgent.slice(0, 120) }).then(function (r) {\n      keep({ key: r.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: r.expires });\n      load();\n    }, function (e) { b.disabled = false; b.textContent = 'Open Your Growth'; $('gErr2').textContent = words(e); $('gErr2').hidden = false; });\n  });\n  $('gCode').addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); $('gCheck').click(); } });\n}\n\n/* ---------- the page ---------- */\nvar D = null;\nfunction load() {\n  var s = stored(), site = siteEmail();\n  if (!site) { keep(null); return gate(''); }\n  if (!s) return gate('');\n  if (String(s.email || '').toLowerCase() !== site) { keep(null); return gate(''); }\n  if (s.expires && new Date(s.expires) < new Date()) { keep(null); return gate('Your key from yesterday has run out. Send a new code.'); }\n  $('gBody').innerHTML = '<div class=\"main\"><p class=\"note\">Opening Your Growth\\u2026</p></div>';\n  call({ action: 'growth' }).then(function (r) { D = r; render(); }, function (e) {\n    var code = e && e.error;\n    if (code === 'no_key' || code === 'bad_key' || code === 'key_expired' || code === 'removed' || code === 'not_you' || code === 'no_site') { keep(null); return gate(code === 'removed' ? 'Your name is no longer on the desk list.' : code === 'key_expired' ? 'Your key from yesterday has run out. Send a new code.' : code === 'not_you' ? words(e) : ''); }\n    $('gBody').innerHTML = '<div class=\"main\"><div class=\"flash\">' + esc(words(e)) + ' <button class=\"btn q\" id=\"gRetry\">Try again</button></div></div>';\n    $('gRetry').addEventListener('click', load);\n  });\n}\n\n/* The sheet keeps its keys in Entries column G (Know, Read, Show up creatively); the page maps key to the text's word. A cell already holding a word maps to itself. */\nfunction lineOf(q) { var s = String(q || '').toLowerCase(); return /^know/.test(s) ? 'Knowledge' : /^(read|understand)/.test(s) ? 'Understanding' : 'Wisdom'; }\nvar LINES = ['Wisdom', 'Understanding', 'Knowledge'];\nvar GLOSS = { 'Wisdom': 'skill in the work, how you show up in the room', 'Understanding': 'telling things apart, reading a man and the moment', 'Knowledge': 'the trade, the men, and the God who gives it' };\nvar MEAN = [\n  ['Wisdom', 'chokmah', 'Skill in the work: how you show up in the room. Bezalel was filled with it for the work (Exodus 31:3; 35:31), and Hiram, who worked the bronze, with the same three (1 Kings 7:14).'],\n  ['Understanding', 'tevunah', 'Telling things apart: reading a man and the moment. Solomon asked for a mind that can tell good from evil (1 Kings 3:9), and the men of Issachar understood the times and knew what to do (1 Chronicles 12:32).'],\n  ['Knowledge', 'da\\u2019at', 'The trade, the men, and the God who gives it. \\u201cThe fear of the LORD is the beginning of knowledge\\u201d (Proverbs 1:7).']\n];\nfunction bringLine(move) {\n  var m = String(move || ''); var q = m.match(/[\\u201c\"]([^\\u201d\"]{12,220}\\?)[\\u201d\"]/); if (q) return q[1];\n  var f = m.match(/^[\\s\\S]*?[.?!](?=\\s|$)/); var s = f ? f[0] : m; if (s.length > 160) s = s.slice(0, 157).replace(/\\s+\\S*$/, '') + '\\u2026'; return s;\n}\nfunction cur() { return D.focus || D.today; }\nfunction stateWords(e) {\n  if (!e) return '';\n  var s = String(e.state || '');\n  if (/used/.test(s)) return 'Brought to the room';\n  if (/bring/.test(s)) return 'Bringing to the room';\n  if (/notforme/.test(s)) return 'Set aside';\n  if (/opened/.test(s)) return 'Opened' + (e.openedDay ? ' ' + e.openedDay : '');\n  if (e.isToday) return 'New today';\n  return 'Not opened yet';\n}\n/* One layout rule for every opened piece (build 3.5): today's card, the panel a card opens, a shelf entry and the ask-box answer all come through here.\n   Full width: the line under the kicker, the headline, then In their words (one quiet line while the words are on their way). Below, two boxes side by side:\n   What it means for our work | What to do with it, the buttons (acts) ending the right box. One column under 900px. No piece is named here.\n   The three-part block every piece carries (build 3): In their words \\u00b7 What it means for our work \\u00b7 What to do with it; then What to listen for. */\nfunction pieceHtml(p, big, acts) {\n  if (!p) return '';\n  var h = '<div class=\"pc\"><div class=\"pch\">';\n  h += '<p class=\"who\">' + esc(p.voice) + (p.kind ? ' \\u00b7 ' + esc(p.kind) : '') + (p.cost ? ' \\u00b7 ' + esc(p.cost) : '') + '</p>';\n  h += (big ? '<h2>' : '<p class=\"claim\" style=\"font-weight:600\">') + tie(p.claim) + (big ? '</h2>' : '</p>');\n  h += '</div>';\n  var qs = p.quotes || [];\n  if (qs.length) {\n    h += '<div class=\"pcw\"><p class=\"part\">In their words</p>';\n    qs.forEach(function (q) { h += '<blockquote class=\"q\">\\u201c' + tie(q.words) + '\\u201d' + (q.link ? '\\u00a0<a href=\"' + esc(q.link) + '\" target=\"_blank\" rel=\"noopener\">' + esc(q.minute) + ' \\u2192</a>' : '\\u00a0<span class=\"qm\">' + esc(q.minute) + '</span>') + '</blockquote>'; });\n    h += '</div>';\n  } else if (p.wordsComing) h += '<p class=\"note pcq\">The words and the minute are on their way; they land here by about 7:45.</p>';\n  h += '<div class=\"pcols\"><div class=\"pcol\"><p class=\"part\">What it means for our work</p>';\n  if (p.construct) h += '<p class=\"fine\"><b>It touches:</b> ' + tie(p.construct) + '</p>';\n  h += '<p class=\"fine\"><b>Read against the text:</b> ' + tie(p.beside) + '</p>';\n  if (p.ours) h += '<p class=\"fine\"><b>Already ours:</b> ' + tie(p.ours) + '</p>';\n  h += '</div><div class=\"pcol\"><p class=\"part\">What to do with it</p>';\n  var pts = bringPoints(p.move);\n  h += '<p class=\"fine\"><b>Bring it \\u2014 three to five minutes:</b></p><ul class=\"points\">' + pts.map(function (x) { return '<li>' + tie(x) + '</li>'; }).join('') + '</ul>';\n  if (p.cut) h += '<p class=\"fine\"><b>What to listen for:</b> ' + tie(p.cut) + '</p>';\n  h += (acts || '') + '</div></div></div>';\n  return h;\n}\n\nvar ARW = { closed: '\\u25be', open: '\\u25b4' };\n/* Bring it: the two or three points a facilitator would say (the writer writes them so from Oct 23; an older paragraph is split by sentence). */\nfunction bringPoints(move) {\n  var s = String(move || '').replace(/^\\s*Room:\\s*/i, '').trim();\n  var bullets = s.split(/\\n+/).map(function (x) { return x.replace(/^[\\-\\u2022*]\\s*/, '').trim(); }).filter(Boolean);\n  if (bullets.length >= 2) return bullets.slice(0, 3);\n  var parts = [], buf = '', q = 0;\n  for (var i = 0; i < s.length; i++) {\n    var ch = s[i], prev = i ? s[i - 1] : '', next = i + 1 < s.length ? s[i + 1] : ''; buf += ch;\n    if (ch === '\\u201c') q++; else if (ch === '\\u201d') q = Math.max(0, q - 1); else if (ch === '\"') q = q ? 0 : 1;\n    var closes = (ch === '\\u201d' || (ch === '\"' && !q)) && /[.?!]/.test(prev);\n    if ((!q && /[.?!]/.test(ch) && (!next || /\\s/.test(next))) || (closes && (!next || /\\s/.test(next)))) { parts.push(buf.trim()); buf = ''; }\n  }\n  if (buf.trim()) parts.push(buf.trim());\n  return parts.filter(function (p) { return p && !/^for the course:/i.test(p); }).slice(0, 3);\n}\n/* How this works: the five stops in the facilitator's words. Full the first time; one line after; the browser remembers. */\nvar HOW = [\n  ['Many voices', 'We read what the voices we follow said this week: podcasts, sermons, talks and articles, men\\u2019s and women\\u2019s voices on every subject we follow.'],\n  ['One in ten kept', 'Most is passed over. What stays is read against Scripture and supports the work we are doing now and in the future.'],\n  ['Chosen for your room', 'Picked for the week your room is in, cut to the minutes worth your time, with the two or three points to bring in.'],\n  ['You answer back', 'Open it, bring it, or set it aside. The morning after your room, say what it changed. Each answer tells our team what served, so the next piece serves better.'],\n  ['The shelf grows as we listen to one another', 'Each week\\u2019s piece comes from the voices we follow for your room\\u2019s work, plus what the wider community is saying. Your answers tell our team what helped, so the next piece fits better.']\n];\nvar howOpen = null;\ntry { howOpen = localStorage.getItem('apg-how') !== 'closed'; } catch (e) { howOpen = true; }\nfunction howHtml() {\n  var open = howOpen !== false;\n  var h = '<section class=\"how\" id=\"sHow\"><div class=\"how-head\"><p class=\"kicker\">How this works</p><button type=\"button\" class=\"how-btn\" id=\"gHowBtn\" aria-expanded=\"' + (open ? 'true' : 'false') + '\">' + (open ? 'Close ' + ARW.open : 'Open ' + ARW.closed) + '</button></div>';\n  if (open) h += '<ol class=\"hstops\">' + HOW.map(function (s) { return '<li><span class=\"st\">' + esc(s[0]) + '</span><span class=\"sl\">' + esc(s[1]) + '</span></li>'; }).join('') + '</ol>' +\n    '<p class=\"plain\">Some of what we keep is plain talk. A voice may be graphic or use colorful language; we are not trying to offend you, only to offer what serves the work. If a piece does not serve your room, press Not needed; that tells us what earns its place.</p>';\n  else h += '<p class=\"how-line\">' + HOW.map(function (s) { return esc(s[0]); }).join(' \\u00b7 ') + '</p>';\n  return h + '</section>';\n}\nfunction wireHow() { var b = $('gHowBtn'); if (!b) return; b.addEventListener('click', function () { howOpen = !(howOpen !== false); try { localStorage.setItem('apg-how', howOpen ? 'open' : 'closed'); } catch (e) {} var s = $('sHow'); if (s) { s.outerHTML = howHtml(); wireHow(); } }); }\n\n/* The top of the page: greeting, line under it, the Your Growth entry in the row. */\nfunction paintHead() {\n  var who = D.who || {}; var fn = firstName(who.name);\n  $('gHello').textContent = greet() + (fn ? ', ' + fn : '') + '.';\n  $('gLede').textContent = D.today && !/opened|bring|used|notforme/.test(D.today.state || '') ? 'One thing for this week, ' + (D.today.minutes ? D.today.minutes + ' minutes' : 'a few minutes') + '. Filled for the Work \\u00b7 Exodus 31:3.' : 'Filled for the Work \\u00b7 Exodus 31:3. Wisdom \\u00b7 Understanding \\u00b7 Knowledge.';\n  $('gNavGrowth').innerHTML = 'Your Growth' + (D.today && D.today.isToday && !/opened|bring|used|notforme/.test(D.today.state || '') ? ' <span class=\"new\">\\u00b7 1 new</span>' : '');\n}\n\n/* The piece in the top panel: today's, or a card the facilitator opened with See the piece. */\nfunction todayHtml() {\n  var T = cur(); var focused = !!(D.focus && (!D.today || D.focus.id !== D.today.id));\n  var h = '<p class=\"kicker\">For your growth' + (T ? ' \\u00b7 ' + esc(lineOf(T.question)) + (focused && T.written ? ' \\u00b7 from ' + esc(T.written) : '') : '') + '</p>';\n  if (focused && D.today) h += '<p class=\"back\"><a href=\"#\" id=\"gBack\">\\u2190 Back to today\\u2019s piece</a></p>';\n  if (T) {\n    var st = String(T.state || '');\n    if (/notforme/.test(st)) h += '<div class=\"flash\">Noted. The next one will be different.</div>';\n    else {\n      h += pieceHtml(T, true, '<div class=\"btns\">' +\n        '<a class=\"btn p\" id=\"gOpen\" href=\"' + esc(T.link) + '\" target=\"_blank\" rel=\"noopener\">Open it</a>' +\n        (/bring|used/.test(st) ? '<span class=\"btn\" style=\"border-color:var(--rule);color:var(--good)\">' + esc(onWeek()) + '</span>' : '<button class=\"ap-walk\" id=\"gBring\">Bring it to the room<span class=\"ap-walk-arrow\">\\u2192</span></button>') +\n        (/bring|used/.test(st) ? '' : '<button class=\"btn q\" id=\"gNot\">Not needed</button>') +\n        '</div><p class=\"note\" id=\"gTodayNote\" style=\"margin-top:10px\"></p>');\n    }\n  } else {\n    h += '<h2 style=\"font-size:28px\">Nothing new this morning.</h2><p class=\"fine\">The reader opens the field at 5:00 AM and the engine writes by 6:40. When a piece fits your room, it is here, cut to the twenty minutes worth your time, with one thing to bring into the room.</p>';\n  }\n  return h;\n}\nfunction onWeek() { var n = D.room && D.room.next; return 'On the agenda' + (n ? ' for ' + n : ''); }\n\n/* The three lines, one card each. */\nfunction threeHtml() {\n  var h = '';\n  LINES.forEach(function (q) {\n    var e = (D.week || []).filter(function (x) { return lineOf(x.question) === q; })[0];\n    var sw = stateWords(e); var cls = /Brought|Bringing|Opened/.test(sw) ? 'good' : (sw === 'New today' ? 'new' : '');\n    h += '<div class=\"card' + (e && e.isToday ? ' hi' : '') + '\"' + (e ? ' data-see=\"' + esc(e.id) + '\" role=\"link\" tabindex=\"0\"' : '') + '><h3>' + q + '</h3><div class=\"gl\">' + GLOSS[q] + '</div>' +\n      (e ? '<p class=\"h\">' + esc(e.claim) + '</p><div class=\"v\">' + esc(e.voice) + (e.kind ? ' \\u00b7 ' + esc(e.kind) : '') + (e.cost ? ' \\u00b7 ' + esc(e.cost) : '') + '</div><div class=\"b\"><b>Bring it:</b> ' + esc(bringLine(e.move)) + '</div>' +\n        '<div class=\"lk\">' + (e.link ? '<a href=\"' + esc(e.link) + '\" target=\"_blank\" rel=\"noopener\" data-open=\"' + esc(e.id) + '\">Open it \\u2192</a>' : '') + '<a href=\"#\" data-see=\"' + esc(e.id) + '\">See the piece</a></div><div class=\"st ' + cls + '\">' + esc(sw) + '</div>'\n         : '<div class=\"t\" style=\"color:var(--quiet)\">Nothing yet this week.</div><div class=\"st\"></div>') + '</div>';\n  });\n  return h;\n}\n\n/* Built once per load. Opening and closing things never calls this again: the panels are always in the page,\n   shown or hidden by a class, so what a facilitator has typed stays where he typed it. */\nfunction render() {\n  paintHead();\n  var h = '<div class=\"main\">';\n  h += howHtml();\n  // The morning after his room: before anything else\n  if (D.thursday) {\n    var t = D.thursday;\n    h += '<section id=\"sThu\"><p class=\"kicker\">Your last room \\u00b7 ' + esc(t.when) + '</p><div class=\"thu\">' +\n      '<h2 style=\"font-size:28px;margin:0\">You brought: ' + esc(t.move) + '</h2>' +\n      '<fieldset style=\"border:0;padding:0;margin:0\"><legend style=\"font-size:17px;font-weight:600;padding:0;margin-bottom:10px\">Did you use it?</legend><div class=\"radios\"><label><input type=\"radio\" name=\"gUsed\" value=\"yes\"> Yes</label><label><input type=\"radio\" name=\"gUsed\" value=\"no\"> Not this time</label></div></fieldset>' +\n      '<div><label for=\"gCarried\">What did the room carry?</label><textarea id=\"gCarried\" rows=\"3\" placeholder=\"No names. The themes, in a line or two.\"></textarea></div>' +\n      '<div><label for=\"gChanged\">What did it change in how you led?</label><textarea id=\"gChanged\" rows=\"3\" placeholder=\"One sentence is enough.\"></textarea></div>' +\n      '<div class=\"btns\" style=\"margin-top:0\"><button class=\"btn\" id=\"gKeep\">Keep this</button><button class=\"ap-walk quiet\" id=\"gLater\">Later<span class=\"ap-walk-arrow\">\\u2193</span></button></div>' +\n      '<p class=\"note\">Your answers go to the room\\'s signals, team only, and tune what you get next. Nothing here reaches the men.</p>' +\n      '<p class=\"err\" id=\"gThuErr\" hidden style=\"color:#9A3B2F;font-size:15px\"></p></div></section>';\n  }\n  h += '<section id=\"sToday\">' + todayHtml() + '</section>';\n  // This week: three lines, and the panel that says what they mean (always here, shown by a class)\n  h += '<section id=\"sWeek\"><p class=\"kicker\">This week \\u00b7 Wisdom \\u00b7 Understanding \\u00b7 Knowledge</p>' +\n    '<div class=\"wk\"><span class=\"verse\">\\u201cwith wisdom and understanding and knowledge\\u201d <span class=\"ref\">Exodus 31:3</span></span><button type=\"button\" id=\"gMean\" aria-expanded=\"false\" aria-controls=\"gMeanBox\">What these mean ' + ARW.closed + '</button></div>' +\n    '<div class=\"mean\" id=\"gMeanBox\">';\n  MEAN.forEach(function (m) { h += '<div><h4>' + m[0] + '</h4><p class=\"w\">' + m[1] + '</p><p>' + m[2] + '</p></div>'; });\n  h += '<p class=\"all\">God does the filling; this page serves it, one piece at a time.</p><p class=\"all\">and with all craftsmanship: the room is melakhah, the work, where the three are proved.</p></div>' +\n    '<div class=\"three\" id=\"gThree\">' + threeHtml() + '</div></section>';\n  // For your room: the real date from the Rooms tab, or nothing when he has no room\n  var R = D.room || {};\n  h += '<section id=\"sRoom\"><p class=\"kicker\">For your room' + (R.next ? ' \\u00b7 ' + esc(R.next) : '') + '</p><div class=\"card\">';\n  h += '<div style=\"display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between\"><div class=\"claim\" style=\"margin:0;font-size:19px\"><b>You are bringing:</b> ' + (R.bringing ? esc(R.bringing.move) : '<span style=\"color:var(--quiet)\">nothing yet. Press Bring it to the room on a piece.</span>') + '</div>' + (R.prep ? '<div class=\"note\">' + esc(R.prep) + '</div>' : '') + '</div>';\n  h += '<div class=\"hr\"><div class=\"ap-answer\"><p class=\"ap-answer-q\">My room is stuck on\\u2026</p><textarea id=\"gAsk\" rows=\"2\" placeholder=\"silence after a heavy story\" aria-label=\"My room is stuck on\"></textarea><div class=\"ap-answer-act\"><button class=\"btn p\" id=\"gAskBtn\">Ask</button><span class=\"note\">One item and one question come back, from our shelf first.</span></div></div><div id=\"gAskOut\"></div></div>';\n  if (R.carried) h += '<div class=\"hr\"><p class=\"kicker\" style=\"font-size:12px;margin-bottom:8px\">Your room carried' + (R.carried.weeks > 1 ? ', ' + R.carried.weeks + ' weeks running' : '') + '</p><p class=\"claim\" style=\"font-size:17px;margin:0\">' + esc(R.carried.text) + (R.carried.answer ? ' ' + esc(R.carried.answer) : '') + '</p></div>';\n  h += '</div></section>';\n  // The shelf\n  h += '<section id=\"sShelf\"><p class=\"kicker\">Everything we have kept</p>' +\n    '<label for=\"gFind\" style=\"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)\">Search the shelf</label><div class=\"ap-find\"><input id=\"gFind\" type=\"search\" placeholder=\"Search the shelf\"></div>' +\n    '<div class=\"lanes\" id=\"gLanes\"></div><div class=\"list\" id=\"gList\"></div>' +\n    '<p class=\"note\" id=\"gShelfNote\"></p></section>';\n  // Coming up\n  h += '<section id=\"sComing\"><p class=\"kicker\">Coming up</p>';\n  if (D.coming && D.coming.length) { h += '<div class=\"list\">'; D.coming.forEach(function (c) { h += '<div class=\"item\"><div class=\"head\"><span class=\"m\">' + esc(c.move) + '</span><span class=\"w\">' + esc(c.cost) + '</span></div></div>'; }); h += '</div>'; }\n  else h += '<p class=\"fine\">Nothing on the calendar yet. Trainings and events arrive here with the price, the deadline, and one button that puts them on your calendar.</p>';\n  h += '</section>';\n  // John only\n  if (D.release) h += '<section class=\"foot\"><div><b>Candidates this week (' + D.release.count + ')</b> <span class=\"note\">\\u00b7 you see this line; facilitators do not</span></div><button class=\"ap-walk\" id=\"gRelease\"' + (D.release.count ? '' : ' disabled') + '>Release to the shelf</button></section>';\n  h += '<p class=\"note\">Your Growth \\u00b7 build ' + BUILD + ' \\u00b7 Filled for the Work, Exodus 31:3 and Proverbs 24:3\\u20134. Signed in as ' + esc(siteEmail()) + ', the same person the site shows.</p>';\n  h += '</div>';\n  $('gBody').innerHTML = h;\n  setBar();\n  wire();\n  if (D.thursday && !D.sawThu) { D.sawThu = true; scrollTo($('sThu')); }\n}\n\n/* Only the top panel, the three cards and the entry in the row change when a card is opened or a piece is set aside;\n   everything below them, and anything typed there, is left alone. */\nfunction repaintTop() {\n  paintHead();\n  var s = $('sToday'); if (s) s.innerHTML = todayHtml();\n  var t = $('gThree'); if (t) t.innerHTML = threeHtml();\n  wireTop();\n}\n\nvar laneOn = 'All', findText = '';\nfunction shelfLanes() { var set = {}; (D.shelf || []).forEach(function (e) { set[e.lane || 'Other'] = 1; }); return ['All'].concat(Object.keys(set).sort()); }\nfunction renderShelf() {\n  var lanes = shelfLanes();\n  $('gLanes').innerHTML = lanes.map(function (l) { return '<button class=\"lane' + (l === laneOn ? ' on' : '') + '\" data-lane=\"' + esc(l) + '\">' + esc(l) + '</button>'; }).join('');\n  Array.prototype.forEach.call($('gLanes').querySelectorAll('.lane'), function (b) { b.addEventListener('click', function () { laneOn = b.getAttribute('data-lane'); renderShelf(); }); });\n  var q = findText.toLowerCase();\n  var items = (D.shelf || []).filter(function (e) { return (laneOn === 'All' || (e.lane || 'Other') === laneOn) && (!q || (e.move + ' ' + e.claim + ' ' + e.voice + ' ' + e.beside).toLowerCase().indexOf(q) >= 0); });\n  if (!items.length) { $('gList').innerHTML = '<p class=\"fine\" style=\"padding:18px 0\">' + ((D.shelf || []).length ? 'Nothing on the shelf matches that yet.' : 'The shelf fills as entries are released, one week at a time.') + '</p>'; }\n  else $('gList').innerHTML = items.map(function (e, i) {\n    return '<div class=\"item\" id=\"it' + i + '\"><button class=\"head\" type=\"button\" data-i=\"' + i + '\" aria-expanded=\"false\"><span class=\"m\">' + esc(e.move) + '</span><span class=\"w\">' + esc(e.voice) + ' \\u00b7 ' + esc(lineOf(e.question)) + (e.cost ? ' \\u00b7 ' + esc(e.cost) : '') + (e.status === 'candidate' ? ' \\u00b7 candidate' : '') + '<span class=\"ar\">\\u00a0' + ARW.closed + '</span></span></button>' +\n      '<div class=\"body\">' + pieceHtml(e, false, '<div class=\"btns\"><a class=\"btn p\" href=\"' + esc(e.link) + '\" target=\"_blank\" rel=\"noopener\" data-open=\"' + esc(e.id) + '\">Open it</a><button class=\"ap-walk\" data-bring=\"' + esc(e.id) + '\">Bring it to the room<span class=\"ap-walk-arrow\">\\u2192</span></button></div>') + '</div></div>';\n  }).join('');\n  Array.prototype.forEach.call($('gList').querySelectorAll('.head'), function (b) { b.addEventListener('click', function () { var it = b.parentNode; var on = it.classList.toggle('open'); b.setAttribute('aria-expanded', on ? 'true' : 'false'); var ar = b.querySelector('.ar'); if (ar) ar.textContent = '\\u00a0' + (on ? ARW.open : ARW.closed); }); });\n  Array.prototype.forEach.call($('gList').querySelectorAll('[data-open]'), function (a) { a.addEventListener('click', function () { call({ action: 'mark', id: a.getAttribute('data-open'), what: 'open' }).catch(function () {}); }); });\n  Array.prototype.forEach.call($('gList').querySelectorAll('[data-bring]'), function (b) { b.addEventListener('click', function () { bring(b.getAttribute('data-bring'), b); }); });\n  $('gShelfNote').textContent = (D.shelf || []).length ? ((D.release ? 'Candidates show here for you only until they are released.' : 'New here? Open any piece; the cost is stated on each.')) : '';\n}\nfunction bring(id, btn) {\n  btn.disabled = true; btn.textContent = 'Putting it on the agenda\\u2026';\n  call({ action: 'mark', id: id, what: 'bring' }).then(function (r) {\n    D.room = D.room || {};\n    if (r.nextRoom) D.room.next = r.nextRoom;\n    btn.textContent = onWeek(); btn.style.borderColor = 'var(--rule)'; btn.style.color = 'var(--good)';\n    if (D.today && D.today.id === id) D.today.state = (D.today.state || '') + ' \\u00b7 bring';\n    D.room.bringing = (D.shelf || []).concat(D.today ? [D.today] : []).filter(function (e) { return e.id === id; })[0] || D.room.bringing;\n    var el = document.querySelector('#sRoom .claim'); if (el && D.room.bringing) el.innerHTML = '<b>You are bringing:</b> ' + esc(D.room.bringing.move);\n    var k = document.querySelector('#sRoom .kicker'); if (k) k.textContent = 'For your room' + (D.room.next ? ' \\u00b7 ' + D.room.next : '');\n  }, function (e) { btn.disabled = false; btn.innerHTML = 'Bring it to the room<span class=\"ap-walk-arrow\">\\u2192</span>'; alertLine(words(e)); });\n}\nfunction alertLine(msg) { var n = $('gTodayNote'); if (n) { n.textContent = msg; } }\n\n/* The top panel and the three cards. Called again whenever repaintTop() rebuilds them. */\nfunction wireTop() {\n  var T = cur();\n  if ($('gOpen')) $('gOpen').addEventListener('click', function () { call({ action: 'mark', id: T.id, what: 'open' }).catch(function () {}); if (!/opened|bring|used/.test(T.state || '')) T.state = (T.state || '') + ' \\u00b7 opened'; });\n  if ($('gBring')) $('gBring').addEventListener('click', function () { bring(T.id, $('gBring')); var n = $('gNot'); if (n) n.remove(); });\n  if ($('gNot')) $('gNot').addEventListener('click', function () {\n    var b = $('gNot'); b.disabled = true;\n    call({ action: 'mark', id: T.id, what: 'notforme' }).then(function () { T.state = (T.state || '') + ' \\u00b7 notforme'; repaintTop(); }, function (e) { b.disabled = false; alertLine(words(e)); });\n  });\n  if ($('gBack')) $('gBack').addEventListener('click', function (ev) { ev.preventDefault(); D.focus = null; repaintTop(); scrollTo($('sToday')); });\n  document.querySelectorAll('#gThree [data-see]').forEach(function (el) {\n    el.addEventListener('click', function (ev) {\n      if (ev.target.closest('a[data-open]')) return;\n      ev.preventDefault(); var id = el.getAttribute('data-see');\n      var e = (D.week || []).filter(function (x) { return x.id === id; })[0]; if (!e) return;\n      D.focus = (D.today && D.today.id === id) ? null : e; repaintTop(); scrollTo($('sToday'));\n    });\n    el.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); el.click(); } });\n  });\n  document.querySelectorAll('#gThree a[data-open]').forEach(function (a) {\n    a.addEventListener('click', function (ev) { ev.stopPropagation(); var id = a.getAttribute('data-open'); call({ action: 'mark', id: id, what: 'open' }).catch(function () {}); var e = (D.week || []).filter(function (x) { return x.id === id; })[0]; if (e && !/opened|bring|used/.test(e.state || '')) { e.state = (e.state || '') + ' \\u00b7 opened'; setTimeout(repaintTop, 400); } });\n  });\n}\n\n/* Everything below the top panel. Wired once per load. */\nfunction wire() {\n  wireTop();\n  wireHow();\n  // What these mean: open and close in place. No render, no scroll.\n  if ($('gMean')) $('gMean').addEventListener('click', function () {\n    D.showMean = !D.showMean;\n    var b = $('gMean'), box = $('gMeanBox');\n    box.classList.toggle('open', !!D.showMean);\n    b.setAttribute('aria-expanded', D.showMean ? 'true' : 'false');\n    b.textContent = 'What these mean ' + (D.showMean ? ARW.open : ARW.closed);\n  });\n  if ($('gKeep')) $('gKeep').addEventListener('click', function () {\n    var used = (document.querySelector('input[name=gUsed]:checked') || {}).value || '';\n    if (!used) { $('gThuErr').textContent = 'Say whether you used it, then keep.'; $('gThuErr').hidden = false; return; }\n    var b = $('gKeep'); b.disabled = true; b.textContent = 'Keeping\\u2026'; $('gThuErr').hidden = true;\n    call({ action: 'thursday', id: D.thursday.id, used: used, carried: $('gCarried').value, changed: $('gChanged').value }).then(function () {\n      $('sThu').innerHTML = '<div class=\"flash\">Kept. It is in the room\\'s signals, and it shapes what comes next.</div>'; D.thursday = null;\n    }, function (e) { b.disabled = false; b.textContent = 'Keep this'; $('gThuErr').textContent = words(e); $('gThuErr').hidden = false; });\n  });\n  if ($('gLater')) $('gLater').addEventListener('click', function () { $('sThu').remove(); scrollTo($('sToday')); });\n  if ($('gAskBtn')) $('gAskBtn').addEventListener('click', function () {\n    var q = String($('gAsk').value || '').trim(); if (!q) { $('gAsk').focus(); return; }\n    var b = $('gAskBtn'); b.disabled = true; b.textContent = 'Looking on the shelf\\u2026'; $('gAskOut').innerHTML = '';\n    call({ action: 'ask', text: q }).then(function (r) {\n      b.disabled = false; b.textContent = 'Ask';\n      var out = '<div class=\"card\" style=\"margin-top:16px\">';\n      if (r.item) out += '<p class=\"kicker\" style=\"font-size:12px;margin-bottom:8px\">' + (r.item.fromShelf ? 'From our shelf' : 'Not yet on our shelf') + '</p>' + pieceHtml(r.item, false, '<div class=\"btns\">' + (r.item.link ? '<a class=\"btn p\" href=\"' + esc(r.item.link) + '\" target=\"_blank\" rel=\"noopener\">Open it</a>' : '') + (r.item.id ? '<button class=\"ap-walk\" data-bring=\"' + esc(r.item.id) + '\" id=\"gAskBring\">Bring it to the room<span class=\"ap-walk-arrow\">\\u2192</span></button>' : '') + '</div>');\n      if (r.question) out += '<p class=\"claim\" style=\"margin-top:16px\"><b>The question for the room:</b> ' + tie(r.question) + '</p>';\n      if (r.note) out += '<p class=\"note\">' + tie(r.note) + '</p>';\n      out += '</div>';\n      $('gAskOut').innerHTML = out;\n      if ($('gAskBring')) $('gAskBring').addEventListener('click', function () { bring(r.item.id, $('gAskBring')); });\n    }, function (e) { b.disabled = false; b.textContent = 'Ask'; $('gAskOut').innerHTML = '<p class=\"note\" style=\"margin-top:8px\">' + esc(words(e)) + '</p>'; });\n  });\n  if ($('gFind')) $('gFind').addEventListener('input', function () { findText = $('gFind').value; renderShelf(); });\n  if ($('gRelease')) $('gRelease').addEventListener('click', function () {\n    var b = $('gRelease'); b.disabled = true; b.textContent = 'Releasing\\u2026';\n    call({ action: 'release' }).then(function (r) { b.textContent = 'Released ' + r.released + ' to the shelf'; (D.shelf || []).forEach(function (e) { if (e.status === 'candidate') e.status = 'released'; }); D.release.count = 0; renderShelf(); }, function (e) { b.disabled = false; b.textContent = 'Release to the shelf'; alertLine(words(e)); });\n  });\n  renderShelf();\n}\n\nwindow.addEventListener('resize', setBar);\n(function start(tries) { if (!lwMe() && tries < 12) return setTimeout(function () { start(tries + 1); }, 300); load(); })(0);\n})();\n";

/* ═══════════════════════════════ row.js build 3 (served at ?file=row.js, the picture addresses filled in by rowJs_) ═══════════════════════════════ */
var ROW_JS = "/* AP-ROW row.js build 3.1 — one band, three rooms. Served by the Research reader script (?file=row.js), loaded on /front-desk and /start; /your-growth draws its own band and is the standard.\n   Build 3 (Oct 21, 2026, John: \"we need a consistent ui\"): Your Growth's band becomes the house band on Your Page and Your Desk — a picture full width above the band when one is set\n   (Config \"band picture page\" / \"band picture desk\"), then the dark band left-aligned: the eyebrow, the greeting with his name, one line, Your Page's three stops as its own line, and the row.\n   The row Your Desk · Your Growth · Your Page shows only in a browser that holds a desk key (a facilitator or admin); a man never sees it. Nothing under the band changes. */\n(function () {\n  if (window.__apRow) return; window.__apRow = true;\n  var PICS = __PICS__;\n  var STORE = 'apDesk', s = null;\n  try { s = JSON.parse(localStorage.getItem(STORE) || 'null'); } catch (e) {}\n  var ROW_URL = (function () { var sc = document.currentScript; var u = sc && sc.src ? String(sc.src).split('?')[0] : ''; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : ''; })();\n  var path = location.pathname.replace(/\\/+$/, '') || '/';\n  var here = path === '/front-desk' ? 'desk' : path === '/your-growth' ? 'growth' : (path === '/start' || path === '/') ? 'page' : '';\n  if (here === 'growth' || !here) return;\n  var root = here === 'desk' ? '#apDesk' : '#apHome';\n\n  var css = document.createElement('style');\n  css.textContent =\n    /* the band, left-aligned, the same measures as Your Growth */\n    root + ' .ap-band, ' + root + ' .ap-band *{text-align:left !important}' +\n    root + ' .ap-band{padding-top:0 !important}' +\n    root + ' .ap-band-in{display:block !important;max-width:980px !important;margin:0 auto !important;padding:36px 24px 0 !important;justify-items:start !important}' +\n    root + ' .ap-band-in .ap-eyebrow{font:600 13px/1.65 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;letter-spacing:3px !important;text-transform:uppercase !important;color:#B8945F !important;margin:0 !important}' +\n    root + ' .ap-band-in .ap-hello{font:600 44px/1.1 \"Source Serif 4\",Georgia,serif !important;color:#F3EDE3 !important;letter-spacing:-0.01em !important;margin:12px 0 0 !important}' +\n    root + ' .ap-band-in .ap-line{font:400 19px/1.5 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;max-width:640px !important;margin:12px 0 0 !important}' +\n    root + ' .ap-band-in .ap-line .ap-s{display:inline !important}' +\n    root + ' .ap-band-in .ap-line-small{display:none !important}' +\n    root + ' .ap-band-in .ap-primary{margin-top:18px !important}' +\n    /* the picture above the band */\n    root + ' .ap-band .apb-hero{display:block;width:100%;height:clamp(180px,26vw,380px);object-fit:cover;object-position:50% 62%;background:#1B2A3A;margin:0}' +\n    /* Your Page's three stops: its own line, left-aligned, one line through the three */\n    root + ' .ap-band-in .ap-stones{display:flex !important;justify-content:flex-start !important;gap:28px !important;margin:22px 0 0 !important;max-width:none !important;width:100% !important;position:relative}' +\n    root + ' .ap-band-in .ap-stones::before{left:0 !important;right:0 !important;top:5px !important}' +\n    root + ' .ap-band-in .ap-stone{flex:1 1 0 !important;padding:0 !important;margin:0 !important;border:0 !important}' +\n    root + ' .ap-band-in .ap-stone-dot{margin:0 0 10px !important}' +\n    root + ' .ap-band-in .ap-stone-word{font:600 14px/1.3 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;letter-spacing:1.5px !important}' +\n    root + ' .ap-band-in .ap-stone-what{display:block !important;font:400 14px/1.5 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;margin-top:4px !important;text-wrap:auto !important}' +\n    /* the row */\n    root + ' .apg-row{display:flex;width:100%;gap:36px;margin-top:18px;border-top:1px solid rgba(243,237,227,.14);padding-top:4px;flex-wrap:wrap;font-family:\"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif}' +\n    root + ' .apg-row a{display:inline-block !important;padding:16px 0 !important;font:400 17px/1.3 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;border-bottom:3px solid transparent !important;text-decoration:none !important}' +\n    root + ' .apg-row a:hover{color:#F3EDE3 !important;text-decoration:none !important}' +\n    root + ' .apg-row a.on{color:#F3EDE3 !important;font-weight:600 !important;border-bottom-color:#B8945F !important}' +\n    root + ' .apg-row a .new{font-weight:400;color:#B8945F}' +\n    /* the band keeps its bottom room when the row is not there */\n    root + ' .ap-band-in .apb-foot{height:36px}' +\n    '@media (max-width:720px){' + root + ' .ap-band-in{padding:28px 16px 0 !important}' + root + ' .ap-band-in .ap-hello{font-size:32px !important}' + root + ' .ap-band-in .ap-line{font-size:17px !important}' +\n    root + ' .ap-band-in .ap-stones{flex-direction:column !important;gap:14px !important}' + root + ' .ap-band-in .ap-stones::before{display:none}' + root + ' .ap-band-in .ap-stone-dot{display:none !important}' +\n    root + ' .apg-row{gap:18px;margin-top:10px;flex-wrap:nowrap}' + root + ' .apg-row a{padding:12px 0 !important;font-size:14px !important;white-space:nowrap}}';\n  document.head.appendChild(css);\n\n  var tries = 0;\n  function place() {\n    var band = document.querySelector(root + ' .ap-band'), inner = band && (band.querySelector('.ap-band-in') || band);\n    if (!inner) { if (tries++ < 60) return setTimeout(place, 250); return; }\n    if (inner.getAttribute('data-apb')) return;\n    inner.setAttribute('data-apb', '3.1');\n    /* the picture, when one is set for this room */\n    var pic = PICS && PICS[here];\n    if (pic && !band.querySelector('.apb-hero')) { var img = document.createElement('img'); img.className = 'apb-hero'; img.src = pic; img.alt = ''; img.decoding = 'async'; band.insertBefore(img, band.firstChild); }\n    /* Your Page: the small line folds into the one line under the greeting; the stops stay as their own line */\n    if (here === 'page') {\n      var promise = inner.querySelector('.ap-promise'), small = inner.querySelector('.ap-line-small');\n      if (promise && small && !promise.getAttribute('data-apb')) { promise.setAttribute('data-apb', '1'); var t = (small.textContent || '').replace(/\\s+/g, ' ').trim(); if (t) promise.appendChild(document.createTextNode(' ' + t)); }\n    }\n    /* the row: desk holders only */\n    if (s && s.key) {\n      if (!inner.querySelector('.apg-row')) {\n        var nav = document.createElement('nav');\n        nav.className = 'apg-row'; nav.setAttribute('aria-label', 'Your rooms');\n        nav.innerHTML = '<a href=\"/front-desk\"' + (here === 'desk' ? ' class=\"on\"' : '') + '>Your Desk</a>' +\n          '<a href=\"/your-growth\" id=\"apgRowGrowth\">Your Growth</a>' +\n          '<a href=\"/start\"' + (here === 'page' ? ' class=\"on\"' : '') + '>Your Page</a>';\n        inner.appendChild(nav);\n        if (ROW_URL) {\n          fetch(ROW_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'new', key: s.key }), credentials: 'omit' })\n            .then(function (r) { return r.json(); }).then(function (r) { if (r && r.ok && r.fresh) { var a = document.getElementById('apgRowGrowth'); if (a) a.innerHTML = 'Your Growth <span class=\"new\">· 1 new</span>'; } }).catch(function () {});\n        }\n      }\n    } else if (!inner.querySelector('.apb-foot')) { var f = document.createElement('div'); f.className = 'apb-foot'; inner.appendChild(f); }\n    align(band, inner); window.addEventListener('resize', function () { align(band, inner); });\n    setTimeout(function () { align(band, inner); }, 1200);\n  }\n  /* the band's words start where the page's own content starts, measured, so the two edges never drift apart */\n  function align(band, inner) {\n    var list = Array.prototype.slice.call(document.querySelectorAll(here === 'page' ? '#apHome .ap-why, #apHome #apPrimaryRow, #apHome .ap-sec' : '#apDesk .wrap'));\n    var ref = null; for (var i = 0; i < list.length; i++) { var r = list[i].getBoundingClientRect(); if (list[i].offsetParent !== null && r.width > 0) { ref = list[i]; break; } }\n    if (!ref) return;\n    var want = ref.getBoundingClientRect().left, have = band.getBoundingClientRect().left;\n    var pad = Math.round(want - have);\n    if (!(pad > 0) || pad > window.innerWidth / 2) return;\n    inner.style.setProperty('max-width', 'none', 'important'); inner.style.setProperty('padding-left', pad + 'px', 'important'); inner.style.setProperty('padding-right', pad + 'px', 'important');\n  }\n  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', place); else place();\n})();\n";

/* ═══════════════════════════════ build 4 · For his road (served at ?file=road.js, actions road / road_open / road_word / road_answer) ═══════════════════════════════
 * The same shelf, a second door: on a man's Your Page, one released piece a week chosen for where he is on the road, with the man's
 * version of the entry (Entries X key words · Y what it means for your road · Z one thing to do · AA the question back), the two words
 * This met me / Not for me, and a question back whose answer goes to the Front Desk as a card and is read by a person before anything
 * else happens with it (RE14). Who gets it: the Learners tab (the Room tab's men on their own, anyone else by hand). The week turns on
 * the man's room's day (from the Rooms tab, never a weekday in this file) or, with no room, on the weekday his door opened.
 * Nothing of the room is shown, nothing is mailed, and the engine reads what he opens, presses and types here — never his saved writing. */
var ROAD_BUILD = '9.1.3';
var LC = { email: 1, name: 2, lwid: 3, how: 4, room: 5, course: 6, door: 7, freeUntil: 8, status: 9, firstSeen: 10, lastSeen: 11, pieces: 12, note: 13, pace: 14 };
var LC_HEAD = ['email', 'name', 'lw id', 'how', 'room', 'course', 'door (yyyy-mm-dd)', 'free until', 'status', 'first seen', 'last seen', 'pieces', 'note', 'pace'];
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
function learnersSheet_(ss) {
  var sh = ss.getSheetByName('Learners'); if (!sh) return null;
  if (LPACE_OK_) return sh;
  if (sh.getMaxColumns() < LC.pace) sh.insertColumnsAfter(sh.getMaxColumns(), LC.pace - sh.getMaxColumns());
  var first = !String(sh.getRange(1, LC.pace).getValue() || '').trim();
  if (first) { sh.getRange(1, LC.pace).setValue(LC_HEAD[LC.pace - 1]); log_(ss, 'road', 'build 9', 'Learners column N (pace) added'); }
  var props = PropertiesService.getScriptProperties();
  if (first || props.getProperty('pace91') !== '1') {
    try {
      var rule = SpreadsheetApp.newDataValidation().requireValueInList(PACE_ORDER.map(function (k) { return PACES[k].label; }), true).setAllowInvalid(true).build();
      sh.getRange(2, LC.pace, Math.max(1, sh.getMaxRows() - 1), 1).setDataValidation(rule);
      props.setProperty('pace91', '1');
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
  'one thing to do': ['one thing to do', 'one thing he can do this week before his room meets, one or two sentences, imperative, plain', 'build 4 (Z)'],
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
function roadDaily() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
  ensureBuild4_(ss);
  var wrote = roadWriteLines_(ss, cfg, toInt_(cfg['road lines per day'], 10));
  var added = roadSyncRoom_(ss, cfg);
  var given = 0, notify = {};
  learners_(ss).forEach(function (L) {
    if (L.status !== 'open') return;
    try { var r = roadFor_(ss, cfg, L, true); if (r && r.givenNow) { given++; notify[L.email] = L; } } catch (e) { log_(ss, 'road', 'daily: ' + L.email, String(e && e.code || e).slice(0, 120)); }
  });
  var words = 0; try { ensureBuild5_(ss); words = roadWords_(ss, cfg, 10, notify); } catch (ew) { log_(ss, 'road', 'words', String(ew && ew.stack || ew).slice(0, 200)); }
  var sent = 0; Object.keys(notify).forEach(function (em) { if (roadNotice_(ss, cfg, notify[em])) sent++; });
  log_(ss, 'road', 'daily', wrote + ' entries given their lines · ' + added + ' learners added from the Room tab · ' + given + ' pieces given today · ' + words + ' words written · ' + sent + ' notices sent');
}
/** The Room tab's men become Learners rows on their own (how = room); a row already there is left as it is. */
function roadSyncRoom_(ss, cfg) {
  var added = 0;
  try {
    var sh = deskSheet_().getSheetByName('Room'); if (!sh || sh.getLastRow() < 2) return 0;
    var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
    var have = {}; learners_(ss).forEach(function (L) { have[L.email] = 1; });
    var le = ss.getSheetByName('Learners');
    data.forEach(function (r) {
      var email = String(r[H['email']] || '').toLowerCase().trim(); if (!email || have[email]) return;
      var room = String(r[H['room']] || '').trim();
      le.appendRow([email, String(r[H['name']] || '').trim(), '', 'room', room, roomCourse_(room), cfg['road door opens'] || '', cfg['road free until'] || '', 'open', stamp_(new Date()), '', 0, 'from the Room tab']);
      have[email] = 1; added++;
    });
  } catch (e) { log_(ss, 'road', 'room sync failed', String(e).slice(0, 160)); }
  return added;
}
function roomCourse_(room) { try { var r = roomRow_({ room: room }); return r ? r.room.split(/\s+[—–-]\s+/)[0].trim() : ''; } catch (e) { return ''; } }
function learners_(ss) {
  var sh = learnersSheet_(ss); if (!sh || sh.getLastRow() < 2) return [];
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, LC.pace).getValues(), out = [];
  data.forEach(function (r, i) {
    var email = String(r[LC.email - 1] || '').toLowerCase().trim(); if (!email) return;
    out.push({ row: i + 2, email: email, name: String(r[LC.name - 1] || '').trim(), lwid: String(r[LC.lwid - 1] || '').trim(), how: String(r[LC.how - 1] || ''), room: String(r[LC.room - 1] || '').trim(), course: String(r[LC.course - 1] || '').trim(),
      door: isoDay_(r[LC.door - 1]), freeUntil: isoDay_(r[LC.freeUntil - 1]), status: String(r[LC.status - 1] || 'open').toLowerCase().trim() || 'open', pieces: Number(r[LC.pieces - 1] || 0) || 0, lastSeen: r[LC.lastSeen - 1], pace: paceKey_(r[LC.pace - 1]) });
  });
  return out;
}
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
  if (L.status !== 'open') throw { code: 'closed' };
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
function roadWeek_(cfg, L) {
  var today = today_(), door = roadDoor_(cfg, L);
  var r = L.room ? roomRow_({ room: L.room }) : null;
  var wd = r ? roomWeekday_(r) : (door ? utcNoon_(door).getUTCDay() : utcNoon_(today).getUTCDay());
  var start = addDays_(today, -((utcNoon_(today).getUTCDay() - wd + 7) % 7));
  if (door && start < door) start = door;
  var out = { start: start, label: '', weekNum: 0, nextNum: 0, course: L.course || (r ? r.room.split(/\s+[—–-]\s+/)[0].trim() : '') };
  if (r) {
    var n = nightOnOrBefore_(r, today) || nightOnOrAfter_(r, today);
    if (n && n.week) { out.weekNum = Number(n.week) || 0; out.nextNum = out.weekNum && r.weeks && out.weekNum < r.weeks ? out.weekNum + 1 : 0; out.label = out.course + ' · Week ' + n.week + (r.weeks ? ' of ' + r.weeks : ''); }
    else if (out.course) out.label = out.course;
  }
  return out;
}
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
function roadChoose_(ss, week, had, recentLanes) {
  // the claim reaches the man as written, so a claim in the facilitator's chair keeps its entry off the man's road (4.0.2; a "claim for him" column is the next step)
  var chair = /\bfacilitat|\b(a man|someone|anyone|the men) in (your|his) room\b|\bhis room\b|\btell the men\b|\bthe men whether\b/i;
  var pool = entries_(ss).filter(function (e) { return e.status === 'released' && e.road && e.todo && e.question2 && !had[e.id] && !chair.test(e.claim); });
  if (!pool.length) return null;
  var w = week.weekNum || 0, lanes = lanes_(ss), recent = recentLanes || [];
  function fit(e) {
    var v = String(e.week || '').toLowerCase().trim();
    var num = /^\d+$/.test(v) ? Number(v) : 0;
    if (!w) return num ? 1 : 1.5;                 // no room, no week: nothing is "later"; an untied piece first
    if (!num) return 1;                            // "any" (or not yet written): after the fitted ones
    if (num === w) return 3;
    if (num < w) return 2 - (w - num) * 0.01;      // earlier, nearest first
    return -1;                                     // later: never
  }
  pool = pool.filter(function (e) { return fit(e) >= 0; });
  if (!pool.length) return null;
  function score(e) { var f = fit(e); var lane = laneOf_(voiceOf_(e.source).toLowerCase(), lanes); if (recent.indexOf(lane) >= 0) f -= 0.5; return f; }
  pool.sort(function (a, b) { return score(b) - score(a) || b.written.localeCompare(a.written); });
  return pool[0];
}
/** The lanes of the last three pieces handed (newest first), so the next choice can favor a lane he has not had lately. */
function recentLanesOf_(givenRows, byId, lanes) {
  return newestFirst_(givenRows).slice(0, 3).map(function (r) { return byId[r.id] ? laneOf_(voiceOf_(byId[r.id].source).toLowerCase(), lanes) : ''; });
}
/** The section's data for one learner; gives this week's piece if none is given yet (byMorning: the daily run, so the Log says so). */
function roadFor_(ss, cfg, L, byMorning) {
  var today = today_(), door = roadDoor_(cfg, L);
  if (door && today < door) return { ok: false, error: 'not_open' };
  var week = roadWeek_(cfg, L);
  var rows = roadRows_(ss, L.email), had = {}, givenNow = false;
  var given = rows.filter(function (r) { return r.what === 'given'; });
  given.forEach(function (r) { had[r.id] = 1; });
  var all = entries_(ss), byId = {}; all.forEach(function (x) { byId[x.id] = x; });
  var lanes = lanes_(ss);
  var landOn = landOn_(cfg, L);
  // the rows are in the order they were added, so the week's first piece is the first of them (build 9; the question back rides on it)
  var cur = given.filter(function (r) { return r.week === week.start; })[0] || null;
  var e = null;
  if (cur) e = byId[cur.id] || null;
  if (!e) {
    e = roadChoose_(ss, week, had, recentLanesOf_(given, byId, lanes));
    if (!e && !landOn) return { ok: false, error: 'no_piece' };
    if (e) {
      roadRow_(ss, L.email, e.id, 'given', byMorning ? 'the morning run' : 'on his page', week.start);
      try { var le = ss.getSheetByName('Learners'); le.getRange(L.row, LC.pieces).setValue((L.pieces || 0) + 1); L.pieces = (L.pieces || 0) + 1; } catch (x) {}
      cur = { id: e.id, when: new Date(), week: week.start }; givenNow = true; rows = roadRows_(ss, L.email);
    }
  }
  if (e) had[e.id] = 1;
  // build 9, the pace: the morning run hands a man up to the most he chose, spread across the week; the question back stays on the first piece
  if (e && byMorning) {
    var dayIx = Math.round((utcNoon_(today) - utcNoon_(week.start)) / 864e5);
    var weekN = rows.filter(function (r) { return r.what === 'given' && r.week === week.start; }).length;
    var todayN = rows.filter(function (r) { return r.what === 'given' && dayOf_(r.when) === today; }).length;
    var give = paceGive_(L.pace, dayIx, weekN, todayN);
    for (var gi = 0; gi < give; gi++) {
      var e2 = roadChoose_(ss, week, had, recentLanesOf_(rows.filter(function (r) { return r.what === 'given'; }), byId, lanes));
      if (!e2) break;
      roadRow_(ss, L.email, e2.id, 'given', 'the morning run', week.start);
      had[e2.id] = 1; givenNow = true;
      try { var le2 = ss.getSheetByName('Learners'); le2.getRange(L.row, LC.pieces).setValue((L.pieces || 0) + 1); L.pieces = (L.pieces || 0) + 1; } catch (x2) {}
      rows = roadRows_(ss, L.email);
    }
  }
  var weekRows = rows.filter(function (r) { return r.what === 'given' && r.week === week.start && byId[r.id]; }), weekIds = {};
  weekRows.forEach(function (r) { weekIds[r.id] = 1; });
  // one piece as the page draws it; the week's first (withAsk) carries the question back and his answer, the rest come without a question
  function pieceOut(x, row, withAsk) {
    var mine = rows.filter(function (r) { return r.id === x.id; });
    var opened = mine.filter(function (r) { return r.what === 'opened'; })[0];
    var word = mine.filter(function (r) { return r.what === 'met' || r.what === 'not'; }).pop();
    var ans = withAsk ? mine.filter(function (r) { return r.what === 'answer'; }).pop() : null;
    var whole = !!(x.beside && x.move);
    var p = { id: x.id, voice: voiceOf_(x.source), kind: x.kind, cost: String(x.cost || '').split(/[,·]/)[0].trim(), minutes: minutesLine_(x.cut), link: x.link, minuteLink: x.link,
      claim: x.claim, quotes: whole ? quotesOf_(x.quotes) : [], wordsComing: !x.deepened && daysAgo_(x.written) <= 1 && !/^none/.test(x.transcript),
      road: x.road, todo: x.todo, given: dayLabel_(row.when), isNew: !opened && row.week === week.start, opened: opened ? dayLabel_(opened.when) : '', word: word ? word.what : '' };
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
  var paceNow = { key: L.pace || '', label: L.pace ? PACES[L.pace].label : PACES.three.label, set: !!L.pace };
  var ui = {}; rows.forEach(function (r) { if (r.what === 'ui' && r.id) ui[r.id] = r.text; });
  // his road so far: every earlier piece with the word he gave it and the line he wrote (4.1b)
  var earlierGiven = newestFirst_(given.filter(function (r) { return (!e || r.id !== e.id) && byId[r.id] && !weekIds[r.id]; }));
  var road = earlierGiven.slice(0, 24).map(function (r) {
    var x = byId[r.id], w = rows.filter(function (q) { return q.id === r.id && (q.what === 'met' || q.what === 'not'); }).pop();
    var a = rows.filter(function (q) { return q.id === r.id && q.what === 'answer'; }).pop();
    return { id: x.id, given: dayLabel_(r.when), claim: x.claim, voice: voiceOf_(x.source), word: w ? w.what : '', line: a ? a.text : '', link: x.link };
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
  if (landOn) { try { land = landFor_(ss, cfg, L, rows, week, courseMap_(ss)); } catch (xl) { log_(ss, 'road', 'the land could not be drawn for ' + L.email, String(xl && xl.stack || xl).slice(0, 300)); } }
  return { ok: true, build: ROAD_BUILD, today: dayLabel_(new Date()), review: cfg['road review window'] || 'two days', week: { start: week.start, label: week.label }, lead: cfg['road lead'] || '', fine: fine,
    pic: String(cfg['road picture'] || '').trim(), how: how, last: last, piece: piece, more: more, pace: paceNow, paces: paceList_(), ui: ui, road: road, returns: returns, givenNow: givenNow, land: land, wordLabel: cfg['road word label'] || 'A word for the road' };
}
function minutesLine_(cut) { var m = String(cut || '').match(/about\s+([a-z\-]+|\d+)\s+minutes?\.?\s*$/i); return m ? 'about ' + m[1] + ' minutes' : ''; }
function roadCall_(b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
  var action = String(b.action || '');
  var L = learnerFor_(ss, cfg, b);
  if (action === 'road') return roadFor_(ss, cfg, L, false);
  if (action === 'road_land') { var rl = roadRows_(ss, L.email); if (!rl.some(function (r) { return r.what === 'land'; })) roadRow_(ss, L.email, '', 'land', 'seen', roadWeek_(cfg, L).start); return { ok: true }; }
  if (action === 'road_practice') { var pt = String(b.text || '').trim().slice(0, 200); if (!pt) throw { code: 'empty' }; roadRow_(ss, L.email, '', 'practice', pt, roadWeek_(cfg, L).start); return { ok: true }; }
  if (action === 'road_place') { var pk = String(b.place || '').trim().toLowerCase(), pl = String(b.text || '').trim().slice(0, 200); if (LAND_ASKED.indexOf(pk) < 0) throw { code: 'place' }; if (!pl) throw { code: 'empty' }; roadRow_(ss, L.email, pk, 'place', pl, roadWeek_(cfg, L).start); return { ok: true }; }
  if (action === 'road_pace') {
    var pcKey = paceKey_(b.pace); if (!pcKey) throw { code: 'pace' };
    var lsh = learnersSheet_(ss); lsh.getRange(L.row, LC.pace).setValue(PACES[pcKey].label);
    roadRow_(ss, L.email, '', 'pace', PACES[pcKey].label, roadWeek_(cfg, L).start);
    return { ok: true, pace: { key: pcKey, label: PACES[pcKey].label, set: true } };
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
  if (action === 'road_word') { var w = String(b.word || ''); if (w !== 'met' && w !== 'not') throw { code: 'bad_word' }; roadRow_(ss, L.email, id, w, '', ''); return { ok: true }; }
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
    ss.getSheetByName('Entries').getRange(e.row, EC.keywords, 1, 5).setValues([[lines.keywords, lines.road, lines.todo, lines.question, lines.week]]);
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
function courseMap_(ss) {
  var out = { rows: [], text: '', names: [], pieces: [] };
  try {
    var sh = ss.getSheetByName('Course map');
    if (sh && sh.getLastRow() >= 2) {
      sh.getRange(2, 1, sh.getLastRow() - 1, Math.min(CM_HEAD.length, sh.getMaxColumns())).getValues().forEach(function (r) {
        var row = { course: String(r[0] || '').trim(), unit: String(r[1] || '').trim(), name: String(r[2] || '').trim(), question: String(r[3] || '').trim(), practice: String(r[4] || '').trim(), sentence: String(r[5] || '').trim(), piece: String(r[6] || '').trim(), returns: /^y/i.test(String(r[7] || '')), address: String(r[8] || '').trim(), age: String(r[9] || '').trim() };
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
  var system = 'You write the version of a research entry that a man on the road reads on his own page at Ancient Path Biblical Coaching, a Christian men\'s coaching practice. He is in a group course (twelve weeks; his room meets once a week) or did one-on-one work. He is not a facilitator and never leads the room. ' +
    'Voice: plain and clear, not formal, not folksy; American spelling; never the word "brother"; never a person\'s name; say "our team", never two founders\' names; never "the next man" or "a stranger"; Scripture in ESV wording with its reference. Keep the enemy to the minimum. Never write an out for not doing the work. ' +
    'Rules that fail the read if broken: (1) Write to him about his own road only. Never about leading, reading, correcting or helping the men in his room as their leader; never "a man in your room needs", "whose story you have heard". His own practice of calling another man, or asking one man for help, is his road and may be named. (2) Never name a course week by number or by title in the three lines (not "Week 9", not "Roots Run Deep"): name the theme in the course\'s own words. The week an entry serves goes in the "week" field only. (3) When the course map gives the week\'s own question, practice or sentence, lift those words verbatim; do not paraphrase them. (4) The one thing to do needs nothing but the piece he just read and his own week. If it names a Your Story piece (Where I Am From, Write a Lament, Asked of Me, What Kind of Light, Set a Stone, Where Are You), it says the step first and in order: "Write Where I Am From, about ten minutes, then …", using the piece\'s name exactly as given. ' +
    'Reply as JSON only: {"keywords": "<the course key words, terms and teaching concepts this entry touches, comma-separated, as the course names them>", "week": "<the one course week from the map this entry serves best, as a number, or \'any\' when it is not tied to one week>", "road": "<What it means for your road: two to four sentences to him, the theme in the course\'s own words, what the claim means for his week, and the verse with its reference. No quotes from the source here. No week number or title.>", "todo": "<One thing to do this week: one or two sentences, imperative, something he can do before his room meets.>", "question": "<One question back: one sentence he can answer in a few lines about his own week; answerable without naming another person.>"}';
  var mens = String(e.audience || '').match(/men:\s*([^·]+)/i);
  var user = 'The entry:\nClaim: ' + e.claim + '\nSource: ' + e.source + '\nPlace on the road: ' + e.place + (mens ? '\nThe line written for men: ' + mens[1].trim() : '') + '\nRead against the text: ' + e.beside + '\nAlready ours: ' + e.ours + '\nIn their words: ' + (e.quotes || '(none yet)') + '\n\nThe course map, in the course\'s own words:\n' + ((map && map.text) || '(not available)');
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var unlabel = function (t) { return String(t || '').trim().replace(/^(what it means for your road|one thing to do( this week)?|(one |a )?question back)\s*[:—\-]\s*/i, '').trim(); };
  var attempt = function (extra) {
    var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', { method: 'post', contentType: 'application/json', muteHttpExceptions: true, headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify({ model: cfg['road model'] || 'claude-sonnet-4-5', max_tokens: 1400, system: system, messages: [{ role: 'user', content: user + (extra ? '\n\nYour last answer failed the read: ' + extra + '. Write it again, keeping every rule.' : '') }] }) });
    if (res.getResponseCode() !== 200) { log_(ss, 'road', 'lines: Claude ' + res.getResponseCode() + ' for ' + e.id, String(res.getContentText() || '').slice(0, 200)); return null; }
    var j = JSON.parse(res.getContentText()); var txt = (j.content || []).map(function (c) { return c && typeof c.text === 'string' ? c.text : ''; }).join('\n');
    var m = txt.match(/\{[\s\S]*\}/); var ans = m ? JSON.parse(m[0]) : null;
    if (!ans || !ans.road || !ans.todo || !ans.question) return null;
    var wk = String(ans.week || '').toLowerCase().trim(); wk = /^\d+$/.test(wk) ? wk : 'any';
    return { keywords: String(ans.keywords || '').slice(0, 300), road: unlabel(ans.road).slice(0, 900), todo: unlabel(ans.todo).slice(0, 400), question: unlabel(ans.question).slice(0, 300), week: wk };
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
  'for his road': ['for his road', 'what it means for your road, written to the man about his own road: two to four plain sentences that name the theme in the course\'s own words (never a week number or title) and carry the verse; never about leading, reading or correcting the men in his room; no names, never "brother" (4.0.2)', 'build 4.0.2 (Y)'],
  'one thing to do': ['one thing to do', 'one thing he can do this week before his room meets, one or two sentences, imperative, plain; it needs nothing but the piece and his week, and if it names a Your Story piece it says the step first ("Write Where I Am From, about ten minutes, then…") (4.0.2)', 'build 4.0.2 (Z)'],
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
/** Is the land open to this man? Config "land": addresses, "all", or "off". */
function landOn_(cfg, L) {
  var v = String(cfg['land'] || '').toLowerCase().trim();
  if (!v || v === 'off') return false;
  if (v === 'all') return true;
  return v.split(/[,\s;]+/).indexOf(String(L.email || '').toLowerCase()) >= 0;
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
  var parts = String(text).split(/\s*(?=\b\d{1,2}\.\s)/).map(function (s) { return s.replace(/^\d{1,2}\.\s*/, '').trim(); }).filter(Boolean);
  return parts.length ? parts.slice(0, 8) : [String(text).trim()];
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
/** The land's data for one learner (the pieces themselves are read on the page from the chronicle it already holds). */
function landFor_(ss, cfg, L, rows, week, map, seenBefore) {
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
  return { on: true, seen: rows.some(function (q) { return q.what === 'land'; }), age: age, pictures: landPictures_(cfg),
    practices: landPractices_(map, week.course, week.weekNum), practice: practice, kept: kept, answers: answers, places: places,
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
  try {
    GmailApp.sendEmail(L.email, 'Ancient Path', 'There is something new on your page.\n\nhttps://www.ancientpathcoaching.com/start\n', { name: 'Ancient Path' });
    roadRow_(ss, L.email, '', 'notice', ch, '');
    return true;
  } catch (e) { log_(ss, 'road', 'notice not sent to ' + L.email, String(e).slice(0, 160)); return false; }
}

/* ═══════════════════════════════ road.js build 5 (served at ?file=road.js) ═══════════════════════════════ */

var ROAD_JS = "/* AP-HISROAD road.js build 9.1.3 — \"For your road\" on Your Page, served by the Research reader script (ResearchReader.gs build 5, ?file=road.js).\n   9.1.3 (Oct 27, John\\u2019s walk of 9.1.2): the line under For Your Road names the course first \\u2014 \\u201cBreaking Free \\u00b7 Week 3 of 12 \\u00b7 Piece given Oct 21\\u201d \\u2014 so a man knows at a glance what it is about (9.1 had dropped the course name).\n   9.1.2 (Oct 27, John\\u2019s walk of 9.1): the what-this-is paragraph, the rule under it and the pace question now run the full width of the panel, edge to edge with the content below (they were held to a narrower column).\n   9.1.1 (Oct 27): the line under Open it no longer says how many minutes of a piece are his; every piece reads \\u201cOpens in a new tab, at the minute that matters.\\u201d\n   9.1 (Oct 27, John\\u2019s walk of 9.0): the section standard, AP-PANEL 1. For Your Road and Your Land are two sibling panels drawn by one function (secHtml): one gutter, one heading (Title Case, serif, with its one-line note), one control at the right, Close \\u25b4 when open and Open \\u25be when shut, the whole heading row pressing it. A man\\u2019s open or shut choice is kept on his account (Road tab row \\u2018ui\\u2019, action road_ui) and drawn that way next time; the first walk of the land opens it. Inside a panel the one small reveal is sentence case with a triangle that turns (Change \\u25be, What this is \\u25be, What this place means \\u25be, Your road so far \\u25be) \\u2014 never the word Close. Pieces sit flat on the panel (a rule between, no box in a box). The pace is three choices \\u2014 Three a week, Daily, Up to twice a day \\u2014 under the question How often would you like a new piece?; the first visit shows what this is and the question, and Keep it folds both into one line (Your pace: Daily. Change \\u25be What this is \\u25be). The lead line over the piece is gone.\n   5 (Oct 26, 2026, \"For his road — the place\", ruled with John Oct 24–26): the land. The head of the section is a man's own land, told in three ages:\n   the text's own world at the gate (Genesis 12:1), his own today at his house (Proverbs 24:3–4; John 14:23), and what is still ahead on the\n   horizon (Genesis 1:5). One large picture, the age his week stands in (the Course map's age column), with its verse beneath; under it the road\n   drawn in code, five stops — the gate · the stream · the stones · your house · the horizon — each with its verse, and under each only his own\n   words where they landed: Where I'm From at the gate, his lament by the stream, his stones along the road, What Kind of Light and his answers\n   at the house (built · established · filled, the verse's own words), Ending Well at the horizon. The pictures are read by piece name from the\n   Drive folder (gate-ruled, house-ruled, horizon-ruled; stream, stones, garden, table the day they land). Nothing on the land is counted,\n   nothing fills by itself, nothing is colored for success. The first open is one screen, What the Land Means, with three plain lines and one\n   button; read once. Below the land: the week's piece, then two asks and only two — what he is practicing this week (the course's own practices\n   pressed, or his own words; it names the garden) and the question back, each answer landing in a strand in turn (did · saw · know). The morning\n   after he answers, a word for the road appears under his answer (a verse, one question, one step), which quotes and asks and never prescribes.\n   The land shows only for the people Config \"land\" names (John first); everyone else sees the 4.0.2 head until the switch opens.\n   9.0 (Oct 26, \"i thought we agreed to allow them to choose an upper bound? some people want daily guidance\"): the pace. At the door a man chooses the most he\n   is handed \\u2014 One a week \\u00b7 Up to three a week \\u00b7 Up to two a day \\u2014 one question, a pick list, one button, Keep it (an Answer shape); once kept it is one line, Your pace, with Change.\n   The script hands him up to that many pieces, spread across the week. The week\\u2019s first piece carries the question back, once a week at any pace; the pieces after it come\n   without one. No minutes anywhere in it.\n   8.9 (Oct 26, \"organizing and connecting the progress according to the biblical principles we started with\"): his house is three rooms in the verse\\u2019s own order (Proverbs 24:3\\u20134), each with its lintel \\u2014 built by wisdom (what he did), established by understanding (what he saw), the rooms filled by knowledge (what he knows now). Before he writes, a room holds the verse alone; his lines build up under it, oldest first. Across on a desk, down on a phone. Nothing counted.\n   8.8 (Oct 26, \"for your road needs a formatting feature to separate it from the other text\"): the whole section stands on its own ground \\u2014 a paper panel with a bronze rule at its head, the land and the piece white within it; the definition reads as ruled (the course he is in, the voices we follow, one thing to do, one question back, his land, a person who reads).\n   8.7 (Oct 26, John\\u2019s walk of 8.6 live: \"what is someone supposed to do after they enter information in the box?\" and \"a little better definition of what this is and why\"): every Answer carries its act \\u2014 a Keep it button under the line at each place and under his own practice line, Enter keeps too, the button reads Kept once it is kept and Keep it again when the line changes; leaving the box still keeps as a safety net. Under the heading For your road, one plain paragraph says what this is and why (WHAT; Config \"road lead\" overrides it); the piece keeps its own one-line lead.\n   8.6 (Oct 26, John\\u2019s walk of 8.5 live, \"shouldn\\u2019t this be an action button?\", the gap, and \"there is no question for the stones\"): the stones ask too (\"What has the LORD done on your road that you do not want to forget?\"), so every place on the walk asks one thing; Set a stone stays the thing to do there on a visit. Walk the land is a navy button under the picture, the one act of the moment there (the quiet line in the head is gone); the places on the walk are as tall as their words, with a rule between them, so no empty room opens between a place and the next.\n   8.5 (Oct 26, John\\u2019s walk of 8.3 live: \"i have to choose to walk the land. hard to find\" and \"the images don\\u2019t change as i scroll but the text is greyed out\"): the walk follows the scroll wherever the page scrolls (the site\\u2019s own page box as well as the window; an IntersectionObserver backs it), and the picture is pinned by measure instead of position:sticky, which the site\\u2019s page boxes defeat. The way in: Walk the land is the first line under the picture on every visit, in the Walk shape at full weight, with \"Five places, a few minutes, nothing required.\" beside it; the land walks itself on the first open and again on the first visit of each week.\n   8.3 (Oct 26, the five pictures ruled): the stream\\u2019s focus point is the man on the near bank (stream-ruled), the stones\\u2019 is the heap beside the track (stones-ruled), so the draw-in lands on the subject of each.\n   8.1 (Oct 26, \"the polish that really draws them in\"): each picture has a focus point (the man in the gate, the lit window of the house, the sun on the horizon) and, as he reads a place, its picture draws slowly in toward that point, tied to his scrolling, never to a clock; each place has its own light laid over the picture (cool mist at the gate and the stream, warm evening at the house, gold on the horizon) that changes with the place; a place without a picture yet is dusk, not a flat screen; the man\\u2019s mark pulses once when a line is kept. Reduced-motion settings get the pictures still.\n   8 (Oct 26, \"simplicity. common sense. great flow\"): the walk is a scroll, not a camera. The picture stays pinned while the five places arrive one after another as he scrolls, each with its name, its line of the story, its verse and its one thing; the picture above crossfades to each place as it arrives, the name on the picture changes with it, the man\\u2019s mark moves along the road. No button on the walk: a line he writes is kept when he leaves the box (\"Kept at the gate\"), and each place ends with one line naming where the road goes (\"On to the stream\"). The walk ends on the horizon with Proverbs 16:9 and Go to your land. After the walk the land is the picture of his week\\u2019s place, the storyboard under it (across on a desk, down on a phone) and the place\\u2019s words. The three shapes of an ask (AP-SHAPES 1: Find, Answer, Walk) and the weight rule (one navy button a screen) come in here: every page a man can open is a Walk line, Send under the piece is the one navy button.\n   7 (Oct 26, John\\u2019s walk of 6, \"we need both\"): the camera and the storyboard together. One frame a place, five in a row, so every press moves the camera a whole place (a place without a picture yet is a dark card with its name until the Studio gives it one; land-ruled, one wide picture, replaces the row). Under the scene the storyboard: the five places in order, one plain line each, so the story is told before a man knows it. The walk goes the whole road, gate to horizon, each stop its line, its verse and one thing (a line to keep at the gate, the stream, his house and the horizon; Set a stone at the stones), Keep it or Next, and ends on the horizon with Proverbs 16:9 and Go to your land.\n   6 (Oct 26, John\\u2019s \"go\" on the better alternative): one landscape, not three pictures \\u2014 the scene is wider than its window and the camera slides to the place that is open (land-ruled from the Drive folder when it exists; the three frames joined until then). Each visit opens on the place his week stands in with the week\\u2019s own sentence from the Course map under it and the one thing he is asked there. The first open asks before it tells: three short questions, one at the gate, one at the stream, one at the house, one line each, none required; what he writes stands at the place the moment he writes it (Road kind place) and the camera moves on. What this place means opens in place on any later visit. Walk the land asks the three again.\n   5.3 (Oct 26, \"something to make the page come alive\"): the first open walks the land \\u2014 the scene stays pinned while the five passages scroll past it, the picture crossfading from the gate to his house to the horizon as he reads, the man\\u2019s mark moving along the road, each passage fading up as it arrives; it ends at Proverbs 16:9 and one button, Go to your land, which settles into the board. Walk the land on the board\\u2019s head walks it again. Reduced-motion settings get the same words without the motion.\n   5.2 (Oct 26, John\\u2019s second walk, \"the UI feels like a PowerPoint\"): the land is one scene, not pages \\u2014 the three pictures stand side by side as a band with the road drawn across them and the five places marked on it; a place opens when he presses it and only that place\\u2019s words show beneath (its paragraph, his words there, and the thing he can do there: Where I\\u2019m From at the gate, the lament at the stream, Set a stone, what he is practicing at the house, Ending Well at the horizon); the week\\u2019s place opens on arrival, a place that holds his words carries a filled mark; the whole land closes to one line and stays closed until he opens it. The pictures merchandise the story; the words lead.\n   5.1 (Oct 26, John\\u2019s walk of the live land): the land is told as a story, not a strip \\u2014 each place is a chapter: its picture in line with the words of What the Land Means that belong to it, then his own words there; the three plain lines open it and Proverbs 16:9 closes it; no separate first screen (the first read is recorded the same way); on later visits a chapter keeps its first paragraph and opens the rest in place, and a place with no picture and nothing of his is not drawn. The text spans the section\\u2019s width.\n   The page block on /start is only a loader: <div id=\"apRoad4\"></div> and this script's tag. The section moves itself to sit above Your chronicle. */\n(function () {\n  \"use strict\";\n  var host = document.getElementById(\"apRoad4\");\n  if (!host || host.getAttribute(\"data-hisroad\")) return;\n  host.setAttribute(\"data-hisroad\", \"9.1.3\");\n  var BUILD = \"9.1.3\";\n  var ROAD_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split(\"?\")[0] : \"\"; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : \"\"; })();\n  var CACHE = \"ap_hisroad_v3\";\n  var data = null, me = null, sending = false;\n\n  function esc(t) { return String(t == null ? \"\" : t).replace(/[&<>\"]/g, function (c) { return { \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\" }[c]; }); }\n  function nb(s) { return String(s || \"\").replace(/ (\\S+)$/, \" $1\"); }\n  function el(sel) { return host.querySelector(sel); }\n\n  var CSS = '<style id=\"apHisRoadStyle\">' +\n    /* AP-PANEL 1: one section standard — the same panel, gutter, heading and Close/Open control on every section of Your Page */\n    '.ap-home .ap-panel{--ap-g:28px;display:block;margin:0 0 18px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-top:3px solid var(--ap-bronze,#B8945F);border-radius:6px;box-sizing:border-box}' +\n    '.ap-home .ap-panel.ap-first{margin-top:44px}' +\n    '.ap-home h2.ap-panel-h{margin:0 !important;padding:0 !important;border:0 !important;font:inherit !important;background:none !important}' +\n    '.ap-home .ap-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;width:100%;box-sizing:border-box;margin:0;padding:20px var(--ap-g) 18px;background:none;border:0;border-radius:0;text-align:left;cursor:pointer;color:inherit}' +\n    '.ap-home .ap-panel-head:focus-visible{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:-4px}' +\n    '.ap-home .ap-panel-text{display:block;min-width:0;flex:1 1 auto}' +\n    '.ap-home .ap-panel-title{display:block;font:400 26px/1.2 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0}' +\n    '.ap-home .ap-panel-note{display:block;font:400 14px/1.45 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:6px 0 0}' +\n    '.ap-home .ap-panel-ctl{flex:none;font:600 14px/1 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:4px 0 3px;margin-top:6px;white-space:nowrap}' +\n    '.ap-home .ap-panel-body{padding:0 var(--ap-g) 26px}' +\n    '.ap-home .ap-panel.shut .ap-panel-body{display:none}' +\n    '.ap-home .ap-panel.shut .ap-panel-head{padding-bottom:20px}' +\n    /* the one small reveal inside a panel: sentence case, a triangle that turns — never the word Close */\n    '.ap-home button.ap-rev.ap-rev{display:inline-block;font:400 15px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;background:none;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:0 0 1px;margin:0;cursor:pointer;white-space:nowrap}' +\n    '.ap-home button.ap-rev.ap-rev:hover{color:var(--ap-navy,#1F2A44) !important;border-bottom-color:var(--ap-bronze,#B8945F)}' +\n    '@media (max-width:600px){.ap-home .ap-panel{--ap-g:18px;margin-left:-4px;margin-right:-4px}.ap-home .ap-panel.ap-first{margin-top:36px}.ap-home .ap-panel-title{font-size:24px !important}}' +\n    '.ap-home .ap-panel .ap-road-line{font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:-4px 0 18px;max-width:none}' +\n    '.ap-home .ap-panel .ap-road-line.ap-road-what{font:400 17px/1.55 var(--ap-serif) !important;max-width:none;margin:0 0 16px}' +\n    /* how this works (the 4.0.2 head, for a man the land is not yet open to) */\n    '.ap-home button.ap-rev.ap-rev.ap-hr-howline{margin:22px 0 18px}' +\n    '.ap-home .ap-hr-how{display:none;margin:0 0 26px}' +\n    '.ap-home .ap-hr-how.open{display:block}' +\n    '.ap-home .ap-hr-how img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border-radius:6px;margin:0 0 18px}' +\n    '.ap-home .ap-hr-stops{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:18px;margin:0;padding:0;list-style:none}' +\n    '.ap-home .ap-hr-stops li{margin:0;padding:0 0 0 12px;border-left:2px solid var(--ap-bronze,#B8945F)}' +\n    '.ap-home .ap-hr-stops .ap-hr-stop{display:block;font:400 17px/1.3 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 6px;text-wrap:balance}' +\n    '.ap-home .ap-hr-stops .ap-hr-stopline{display:block;font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0}' +\n    '.ap-home .ap-hr-promise{font:400 15px/1.55 var(--ap-sans) !important;color:#F3EDE3 !important;background:var(--ap-navy,#1F2A44);border-radius:4px;padding:14px 18px;margin:20px 0 0}' +\n    /* AP-SHAPES 1: the three shapes of an ask (Find, Answer, Walk) and the weight rule; one source, shapes.css, carried by every room script */\n    \".ap-find{position:relative;max-width:34em;margin:0 0 18px} .ap-find input{width:100%;box-sizing:border-box;font:400 16px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-ink,#2B3040) !important;background:#fff;border:0;border-bottom:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:8px 0 8px 28px;outline:none} .ap-find input:focus{border-bottom-color:var(--ap-navy,#1F2A44)} .ap-find::before{content:\\\"\\\";position:absolute;left:2px;top:11px;width:12px;height:12px;border:1.5px solid var(--ap-quiet,#6B7280);border-radius:50%} .ap-find::after{content:\\\"\\\";position:absolute;left:13px;top:23px;width:7px;height:1.5px;background:var(--ap-quiet,#6B7280);transform:rotate(45deg);transform-origin:left center} .ap-find input::placeholder{color:var(--ap-quiet,#6B7280)} .ap-answer{margin:0 0 18px;max-width:40em} .ap-answer .ap-answer-q{font:400 20px/1.4 var(--ap-serif,'Source Serif 4',serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 10px;text-wrap:balance} .ap-answer .ap-answer-lead{font:400 15px/1.5 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-quiet,#6B7280) !important;margin:-4px 0 10px} .ap-answer input,.ap-answer textarea{display:block;width:100%;box-sizing:border-box;font:400 17px/1.5 var(--ap-serif,'Source Serif 4',serif) !important;color:var(--ap-ink,#2B3040) !important;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-left:3px solid var(--ap-bronze,#B8945F);border-radius:4px;padding:12px 14px;outline:none;resize:vertical} .ap-answer input{min-height:0} .ap-answer textarea{min-height:96px} .ap-answer input:focus,.ap-answer textarea:focus{border-color:var(--ap-navy,#1F2A44);border-left-color:var(--ap-bronze,#B8945F)} .ap-answer input::placeholder,.ap-answer textarea::placeholder{color:var(--ap-quiet,#6B7280);font-style:italic} .ap-answer .ap-answer-act{display:flex;align-items:center;gap:14px;margin:10px 0 0} .ap-answer .ap-answer-state{font:400 14px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-quiet,#6B7280) !important;margin:8px 0 0;min-height:1.4em} .ap-answer .ap-answer-state.kept{color:var(--ap-bronze,#B8945F) !important} .ap-answer .ap-answer-state.kept::before{content:\\\"\\\\2713\\\\00a0\\\"} .ap-walk{display:inline-block;font:600 15px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;border-bottom:1px solid var(--ap-bronze,#B8945F);padding:0 0 1px;margin:0;cursor:pointer;text-decoration:none !important;text-align:left} .ap-walk:hover{border-bottom-color:var(--ap-navy,#1F2A44)} .ap-walk .ap-walk-arrow{display:inline-block;margin-left:6px;color:var(--ap-bronze,#B8945F)} .ap-walk+.ap-walk{margin-left:18px} .ap-walk.quiet{font-weight:400 !important;color:var(--ap-quiet,#6B7280) !important;border-bottom-color:var(--ap-rule,#E2DCD1)} a.ap-btn.ap-btn-primary{background:none !important;color:var(--ap-navy,#1F2A44) !important;border:0 !important;border-bottom:1px solid var(--ap-bronze,#B8945F) !important;border-radius:0 !important;padding:0 0 1px !important;font:600 15px/1.4 var(--ap-sans,'Source Sans 3',sans-serif) !important;box-shadow:none !important;display:inline-block} a.ap-btn.ap-btn-primary::after{content:\\\"\\\\00a0\\\\2192\\\";color:var(--ap-bronze,#B8945F)} a.ap-btn.ap-btn-primary+.ap-btn{margin-left:18px} @media (prefers-reduced-motion: reduce){.ap-walk,.ap-answer input,.ap-answer textarea{transition:none}}\" +\n    /* the pace (9.1): one question, three paces, one button; after Keep it the whole setup folds to one line */\n    '.ap-home .ap-pace{margin:0 0 6px}' +\n    '.ap-home .ap-pace .ap-pace-line{display:none;font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 4px;max-width:none}' +\n    '.ap-home .ap-pace .ap-pace-line .ap-rev{margin-left:8px}' +\n    '.ap-home .ap-pace.kept .ap-pace-line{display:block}' +\n    '.ap-home .ap-pace .ap-what{margin:0 0 6px}' +\n    '.ap-home .ap-pace.kept .ap-what{display:none}' +\n    '.ap-home .ap-pace.kept.open-what .ap-what{display:block;margin:12px 0 4px !important}' +\n    '.ap-home .ap-pace .ap-what,.ap-home .ap-pace .ap-what p.ap-road-what{margin:0 !important;padding:0 !important;max-width:none !important;width:auto !important;text-indent:0 !important}' +\n    '.ap-home .ap-pace .ap-pace-ask{max-width:none !important;width:auto !important;margin:22px 0 4px;padding:20px 0 0;border-top:1px solid var(--ap-rule,#E2DCD1)}' +\n    '.ap-home .ap-pace.kept .ap-pace-ask{display:none}' +\n    '.ap-home .ap-pace.kept.open .ap-pace-ask{display:block;margin-top:14px}' +\n    '.ap-home .ap-pace .ap-pace-ask p.ap-answer-q{font:400 20px/1.4 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 6px}' +\n    '.ap-home .ap-pace .ap-pace-ask p.ap-answer-lead{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0 0 12px;max-width:none}' +\n    '.ap-home .ap-pace .ap-pace-opts{display:flex;flex-direction:column;gap:8px;margin:0 0 8px;max-width:none}' +\n    '.ap-home .ap-pace .ap-pace-opt{display:flex;align-items:center;gap:12px;margin:0;padding:11px 14px;background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-left:3px solid var(--ap-bronze,#B8945F);border-radius:4px;cursor:pointer;box-sizing:border-box}' +\n    '.ap-home .ap-pace .ap-pace-opt:hover,.ap-home .ap-pace .ap-pace-opt.on{border-color:var(--ap-navy,#1F2A44);border-left-color:var(--ap-bronze,#B8945F)}' +\n    '.ap-home .ap-pace .ap-answer .ap-pace-opt input{display:inline-block;width:18px;height:18px;min-height:0;padding:0;margin:0;flex:0 0 auto;border:0;background:none;accent-color:var(--ap-bronze,#B8945F);cursor:pointer}' +\n    '.ap-home .ap-pace .ap-pace-opt span{font:400 17px/1.4 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important}' +\n    '.ap-home .ap-hr-label.ap-hr-alsolabel{margin:30px 0 10px}' +\n    /* the land (build 8): the picture pinned, the places arriving as he scrolls; the storyboard under the picture; no sideways motion anywhere */\n    '.ap-home .ap-land{margin:0;border:0;border-radius:0;overflow:visible;background:none}' +\n    '.ap-home .ap-land.walking{overflow:visible}' +\n    /* the stage: the picture of the open place; on the walk it stays pinned while the places scroll under it */\n    '.ap-home .ap-land-stage{position:relative;height:clamp(200px,30vw,330px);overflow:hidden;background:#1B2A3A;border-radius:6px}' +\n    '.ap-home .ap-land-stagehold{position:relative}' +\n    '.ap-home .ap-land.walking .ap-land-stage{z-index:2;height:40vh;min-height:220px;max-height:440px;box-sizing:border-box}' +\n    '.ap-home .ap-land-stage .ap-land-layer{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.1s ease,transform .25s linear;will-change:opacity,transform}' +\n    '.ap-home .ap-land-stage .ap-land-layer.blank{background:radial-gradient(ellipse 70% 60% at 50% 58%,#2E3F55 0%,#1B2A3A 70%)}' +\n    '.ap-home .ap-land-stage .ap-land-layer.blank::after{content:\"\";position:absolute;left:0;right:0;bottom:30px;height:1px;background:rgba(243,237,227,.25)}' +\n    /* the light of each place: cool mist at the gate and the stream, plain day at the stones, warm evening at the house, gold on the horizon */\n    '.ap-home .ap-land-stage::after{content:\"\";position:absolute;inset:0;pointer-events:none;z-index:1;transition:background 1.2s ease,opacity 1.2s ease;opacity:1}' +\n    '.ap-home .ap-land-stage[data-light=\"mist\"]::after{background:linear-gradient(180deg,rgba(205,215,232,.16),rgba(205,215,232,0) 55%)}' +\n    '.ap-home .ap-land-stage[data-light=\"day\"]::after{background:none}' +\n    '.ap-home .ap-land-stage[data-light=\"evening\"]::after{background:linear-gradient(180deg,rgba(226,160,86,.12),rgba(226,160,86,.04) 60%)}' +\n    '.ap-home .ap-land-stage[data-light=\"gold\"]::after{background:radial-gradient(ellipse 60% 55% at 52% 40%,rgba(255,206,130,.28),rgba(255,206,130,0) 70%)}' +\n    '.ap-home .ap-land-stage .ap-land-man.pulse{animation:apManPulse 1.2s ease-out 1}' +\n    '@keyframes apManPulse{0%{box-shadow:0 0 0 4px rgba(184,148,95,.35)}40%{box-shadow:0 0 0 14px rgba(184,148,95,.18)}100%{box-shadow:0 0 0 4px rgba(184,148,95,.35)}}' +\n    '.ap-home .ap-land-stage .ap-land-layer.on{opacity:1}' +\n    '.ap-home .ap-land-stage::before{content:\"\";position:absolute;left:0;right:0;bottom:0;height:62%;background:linear-gradient(180deg,rgba(20,28,40,0),rgba(20,28,40,.72));pointer-events:none;z-index:1}' +\n    '.ap-home .ap-land-stage .ap-land-place{position:absolute;left:20px;bottom:58px;margin:0;z-index:2;pointer-events:none;opacity:0;transition:opacity .25s ease}' +\n    '.ap-home .ap-land-stage .ap-land-place.on{opacity:1;transition:opacity .7s ease .35s}' +\n    '.ap-home .ap-land-stage .ap-land-place b{display:block;font:400 clamp(24px,3.4vw,34px)/1.15 var(--ap-serif) !important;color:#F3EDE3 !important;text-shadow:0 1px 12px rgba(0,0,0,.5)}' +\n    '.ap-home .ap-land-stage .ap-land-place small{display:block;font:400 13px/1.4 var(--ap-sans) !important;letter-spacing:.06em;color:rgba(243,237,227,.85) !important;text-shadow:0 1px 8px rgba(0,0,0,.5);margin:4px 0 0}' +\n    '.ap-home .ap-land-stage .ap-land-roadline{position:absolute;left:0;right:0;bottom:30px;height:1px;background:rgba(243,237,227,.8);z-index:2}' +\n    '.ap-home .ap-land-stage .ap-land-mark{position:absolute;bottom:24px;transform:translateX(-50%);z-index:2;width:12px;height:12px;border-radius:50%;border:1px solid #F3EDE3;background:rgba(27,42,58,.55);box-sizing:border-box}' +\n    '.ap-home .ap-land-stage .ap-land-mark.has{background:var(--ap-bronze,#B8945F)}' +\n    '.ap-home .ap-land-stage .ap-land-man{position:absolute;bottom:22px;z-index:3;width:16px;height:16px;margin-left:-8px;border-radius:50%;background:var(--ap-bronze,#B8945F);box-shadow:0 0 0 4px rgba(184,148,95,.35);transition:left 1.1s cubic-bezier(.4,0,.2,1)}' +\n    /* the walk: the places one after another under the pinned picture, each arriving as he reaches it */\n    '.ap-home .ap-land-steps{background:none;border:0;border-radius:0}' +\n    '.ap-home .ap-land-step{padding:26px 0 30px;box-sizing:border-box;opacity:.22;transform:translateY(12px);transition:opacity .7s ease,transform .7s ease}' +\n    '.ap-home .ap-land-step+.ap-land-step{border-top:1px solid var(--ap-rule,#E2DCD1)}' +\n    '.ap-home .ap-land-step.in{opacity:1;transform:none}' +\n    '.ap-home .ap-land-step.ap-land-end{padding-bottom:34px}' +\n    '.ap-home .ap-land-step p.ap-land-eyebrow{font:600 12px/1.3 var(--ap-sans) !important;letter-spacing:.1em !important;text-transform:uppercase !important;color:var(--ap-bronze,#B8945F) !important;margin:0 0 8px}' +\n    '.ap-home .ap-land p.ap-land-story{font:400 21px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 10px;max-width:30em;text-wrap:balance}' +\n    '.ap-home .ap-land p.ap-land-verse{font:400 17px/1.5 var(--ap-serif) !important;font-style:italic;color:var(--ap-ink,#2B3040) !important;margin:0 0 18px;max-width:34em}' +\n    '.ap-home .ap-land p.ap-land-verse span{font:400 13px/1 var(--ap-sans) !important;font-style:normal;color:var(--ap-quiet,#6B7280) !important;white-space:nowrap;margin-left:8px}' +\n    '.ap-home .ap-land p.ap-land-quiet{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0 0 14px;max-width:34em}' +\n    '.ap-home .ap-land .ap-land-on{margin:14px 0 0}' +\n    '@media (prefers-reduced-motion: reduce){.ap-home .ap-land-stage .ap-land-layer,.ap-home .ap-land-stage .ap-land-place,.ap-home .ap-land-stage .ap-land-man,.ap-home .ap-land-step,.ap-home .ap-land-stage::after{transition:none}.ap-home .ap-land-step{opacity:1;transform:none}.ap-home .ap-land-stage .ap-land-layer{transform:none !important}.ap-home .ap-land-stage .ap-land-man.pulse{animation:none}}' +\n    '.ap-home .ap-land-walkline{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 16px;margin:0;padding:16px 0;border-bottom:1px solid var(--ap-rule,#E2DCD1);background:none}' +\n    '.ap-home .ap-land-walkline{align-items:center}' +\n    '.ap-home .ap-land-walkline .ap-land-walknote{font:400 14px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important}' +\n    /* the storyboard: the five places in order, one line each; across on a desk, down on a phone */\n    '.ap-home .ap-land-board{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border-bottom:1px solid var(--ap-rule,#E2DCD1);background:none}' +\n    '.ap-home .ap-land-stop{display:block;text-align:left;background:none;border:0;border-top:3px solid transparent;padding:12px 14px 14px;cursor:pointer;min-width:0}' +\n    '.ap-home .ap-land-stop:first-child{padding-left:0}' +\n    '.ap-home .ap-land-stop+.ap-land-stop{border-left:1px solid var(--ap-rule,#E2DCD1)}' +\n    '.ap-home .ap-land-stop.on{border-top-color:var(--ap-bronze,#B8945F);background:#fff}' +\n    '.ap-home .ap-land-stop .ap-land-stopname{display:flex;align-items:center;gap:8px;font:600 12px/1.3 var(--ap-sans) !important;letter-spacing:.08em !important;text-transform:uppercase !important;color:var(--ap-quiet,#6B7280) !important;margin:0 0 6px}' +\n    '.ap-home .ap-land-stop.on .ap-land-stopname{color:var(--ap-navy,#1F2A44) !important}' +\n    '.ap-home .ap-land-stop .ap-land-stopname i{display:block;width:9px;height:9px;border-radius:50%;border:1px solid var(--ap-bronze,#B8945F);background:#fff;flex:0 0 auto}' +\n    '.ap-home .ap-land-stop.has .ap-land-stopname i{background:var(--ap-bronze,#B8945F)}' +\n    '.ap-home .ap-land-stop.here .ap-land-stopname i{border-color:var(--ap-navy,#1F2A44);border-width:2px}' +\n    '.ap-home .ap-land-stop .ap-land-stopline{display:block;font:400 14px/1.45 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important}' +\n    '@media (max-width:720px){.ap-home .ap-land-board{display:block}.ap-home .ap-land-stop{width:100%;box-sizing:border-box;border-top:0;border-left:3px solid transparent;padding:10px 14px}.ap-home .ap-land-stop+.ap-land-stop{border-left:3px solid transparent;border-top:1px solid var(--ap-rule,#E2DCD1)}.ap-home .ap-land-stop.on{border-left-color:var(--ap-bronze,#B8945F) !important}.ap-home .ap-land-stop .ap-land-stopname{margin:0}.ap-home .ap-land-stop .ap-land-stopline{display:none}.ap-home .ap-land-stop.on .ap-land-stopline{display:block;margin-top:6px}}' +\n    /* under the picture: one line, his words, one thing to do */\n    '.ap-home .ap-land-panel{padding:18px 0 4px}' +\n    '.ap-home .ap-land-panel p.ap-land-eyebrow{font:600 12px/1.3 var(--ap-sans) !important;letter-spacing:.1em !important;text-transform:uppercase !important;color:var(--ap-bronze,#B8945F) !important;margin:0 0 6px}' +\n    '.ap-home .ap-land-panel p.ap-land-weekline{font:400 20px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 12px;max-width:34em}' +\n    '.ap-home .ap-land-panel p.ap-land-p{font:400 17px/1.6 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 12px;max-width:40em;display:none}' +\n    '.ap-home .ap-land-panel.open p.ap-land-p{display:block}' +\n    '.ap-home .ap-land-panel .ap-land-more{display:block;font:600 13px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;padding:0;margin:0 0 12px;cursor:pointer}' +\n    '.ap-home .ap-land-panel .ap-rev[data-act=\"chmore\"]{margin:18px 0 14px}' +\n    '.ap-home .ap-hr-ask .ap-rev,.ap-home .ap-land-his .ap-rev{margin-top:8px}' +\n    '.ap-home .ap-land-panel .ap-land-do{margin:14px 0 0}' +\n    '.ap-home .ap-land-panel .ap-land-do .ap-hr-ask{border-top:0;padding-top:4px}' +\n    '.ap-home .ap-hr-ask.kept .ap-hr-picking{display:none}' +\n    '.ap-home .ap-hr-ask.kept.open .ap-hr-picking{display:block;margin-top:10px}' +\n    '.ap-home .ap-hr-ask .ap-land-more{margin:6px 0 0}' +\n    /* his house: three rooms across on a desk, down on a phone; the lintel is the verse; a room he has not written in holds the verse alone */\n    '.ap-home .ap-land-house{margin:18px 0 4px}' +\n    '.ap-home .ap-land-house p.ap-land-eyebrow{margin:0 0 10px}' +\n    '.ap-home .ap-land-house p.ap-land-eyebrow span{font-weight:400;letter-spacing:.04em;color:var(--ap-quiet,#6B7280) !important;text-transform:none}' +\n    '.ap-home .ap-land-rooms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}' +\n    '.ap-home .ap-land-room{border:1px solid var(--ap-rule,#E2DCD1);border-top:3px solid var(--ap-rule,#E2DCD1);border-radius:4px;padding:12px 14px 10px;background:#fff;min-width:0}' +\n    '.ap-home .ap-land-room.built{border-top-color:var(--ap-bronze,#B8945F)}' +\n    '.ap-home .ap-land-room p.ap-land-lintel{font:400 15px/1.4 var(--ap-serif) !important;font-style:italic;color:var(--ap-navy,#1F2A44) !important;margin:0 0 2px}' +\n    '.ap-home .ap-land-room p.ap-land-roomword{font:600 11px/1.3 var(--ap-sans) !important;letter-spacing:.08em !important;text-transform:uppercase !important;color:var(--ap-bronze,#B8945F) !important;margin:0 0 10px}' +\n    '.ap-home .ap-land-room p.ap-land-line{font:400 15px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 8px;padding-left:10px;border-left:2px solid var(--ap-bronze,#B8945F);white-space:pre-line;overflow-wrap:anywhere}' +\n    '.ap-home .ap-land-room p.ap-land-line .ap-land-when{display:block;font:400 12px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:2px 0 0}' +\n    '@media (max-width:720px){.ap-home .ap-land-rooms{grid-template-columns:1fr}}' +\n    /* his words at the place */\n    '.ap-home .ap-land-his{margin:6px 0 0}' +\n    '.ap-home .ap-land-his .ap-land-word{display:block;font:600 11px/1.3 var(--ap-sans) !important;letter-spacing:.08em !important;text-transform:uppercase !important;color:var(--ap-bronze,#B8945F) !important;margin:10px 0 4px}' +\n    '.ap-home .ap-land-his .ap-land-word.verse{text-transform:none !important;letter-spacing:0 !important;font:400 13px/1.4 var(--ap-serif) !important;font-style:italic}' +\n    '.ap-home .ap-land-his p.ap-land-line{font:400 16px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 8px;padding-left:12px;border-left:2px solid var(--ap-bronze,#B8945F);white-space:pre-line;overflow-wrap:anywhere;max-width:40em}' +\n    '.ap-home .ap-land-his .ap-land-rest{display:none}' +\n    '.ap-home .ap-land-his.open .ap-land-rest{display:block}' +\n    '.ap-home .ap-land-his .ap-land-more{display:block;font:600 13px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;padding:0;margin:4px 0 0;cursor:pointer}' +\n    '.ap-home .ap-land-his p.ap-land-line .ap-land-when{display:block;font:400 12px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:2px 0 0;white-space:normal}' +\n    '.ap-home .ap-land-his p.ap-land-line a{font-weight:600;color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F)}' +\n\n    /* from his road: the line that proves it heard him */\n    '.ap-home .ap-hr-last{margin:0 0 18px;padding:0 0 0 14px;border-left:2px solid var(--ap-bronze,#B8945F)}' +\n    '.ap-home .ap-hr-last .ap-hr-label{margin-bottom:6px}' +\n    '.ap-home .ap-hr-last p.ap-hr-lastq{font:400 19px/1.45 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0;max-width:none}' +\n    '.ap-home .ap-hr-last p.ap-hr-lastf{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:6px 0 0}' +\n    /* the piece */\n    '.ap-home .ap-hr-piece{background:none;border:0;border-top:1px solid var(--ap-rule,#E2DCD1);border-radius:0;padding:22px 0 8px;margin:0}' +\n    '.ap-home .ap-hr-piece.ap-hr-first{border-top:0;padding-top:6px}' +\n    '.ap-home .ap-pace:not(.kept) ~ .ap-hr-piece.ap-hr-first{border-top:1px solid var(--ap-rule,#E2DCD1);padding-top:22px;margin-top:26px}' +\n    '.ap-home .ap-pace.kept ~ .ap-hr-piece.ap-hr-first{margin-top:14px}' +\n    '.ap-home .ap-hr-piece .ap-card-kind{margin:0 0 10px}' +\n    '.ap-home .ap-hr-claim{font:400 24px/1.3 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 18px;max-width:none}' +\n    '.ap-home .ap-hr-label{font:600 11px/1 var(--ap-sans) !important;letter-spacing:.12em !important;text-transform:uppercase !important;color:var(--ap-bronze,#B8945F) !important;margin:0 0 8px}' +\n    '.ap-home .ap-hr-part{margin:0 0 18px}' +\n    '.ap-home .ap-hr-part p.ap-hr-body{font:400 16px/1.6 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0;max-width:none}' +\n    '.ap-home .ap-hr-quote{font:400 18px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 10px;padding-left:14px;border-left:2px solid var(--ap-rule,#E2DCD1);max-width:none}' +\n    '.ap-home .ap-hr-quote a{font:600 13px/1 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F);white-space:nowrap;margin-left:4px}' +\n    '.ap-home .ap-hr-coming{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}' +\n    '.ap-home .ap-hr-open{display:flex;align-items:center;flex-wrap:wrap;gap:14px;margin:2px 0 22px}' +\n    '.ap-home .ap-hr-state{font:400 14px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}' +\n    /* the two asks */\n    '.ap-home .ap-hr-ask{margin:0;padding:20px 0 0;border-top:1px solid var(--ap-rule,#E2DCD1)}' +\n    '.ap-home .ap-hr-ask p.ap-hr-q{font:400 19px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 12px}' +\n    '.ap-home .ap-hr-ask p.ap-hr-lead{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:-6px 0 12px}' +\n    '.ap-home .ap-hr-picks{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 12px}' +\n    '.ap-home .ap-hr-pick{font:400 15px/1.35 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px;padding:9px 12px;text-align:left;cursor:pointer;max-width:100%}' +\n    '.ap-home .ap-hr-pick.on{background:var(--ap-navy,#1F2A44) !important;color:#fff !important;border-color:var(--ap-navy,#1F2A44)}' +\n    '.ap-home .ap-hr-own{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap}' +\n    '.ap-home .ap-hr-own input{flex:1 1 240px;min-width:0;padding:10px 12px;font:400 16px/1.4 var(--ap-sans);color:var(--ap-ink,#2B3040);background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px}' +\n    '.ap-home .ap-hr-own input:focus,.ap-home .ap-hr-ask textarea:focus{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:1px}' +\n    '.ap-home .ap-hr-kept{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:10px 0 0}' +\n    '.ap-home .ap-hr-kept q{font:400 16px/1.5 var(--ap-serif) !important;quotes:\"\\\\201C\" \"\\\\201D\"}' +\n    '.ap-home .ap-hr-ask textarea{display:block;width:100%;min-height:108px;padding:12px 14px;font:400 16px/1.55 var(--ap-sans);color:var(--ap-ink,#2B3040);background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px;resize:vertical;box-sizing:border-box}' +\n    '.ap-home .ap-hr-send{display:flex;align-items:center;flex-wrap:wrap;gap:14px;margin:12px 0 0}' +\n    '.ap-home .ap-hr-foot{font:400 13px/1.55 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:12px 0 0;max-width:none}' +\n    '.ap-home .ap-hr-foot b{font-weight:600;color:var(--ap-ink,#2B3040)}' +\n    '.ap-home .ap-hr-answer{margin:0;padding:14px 16px;background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px}' +\n    '.ap-home .ap-hr-answer .ap-hr-label{margin-bottom:6px}' +\n    '.ap-home .ap-hr-answer p.ap-hr-text{font:400 16px/1.6 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0;white-space:pre-wrap}' +\n    /* a word for the road, under his answer */\n    '.ap-home .ap-hr-word{margin:14px 0 0;padding:14px 16px 12px;background:var(--ap-paper,#FBF9F5);border-left:2px solid var(--ap-bronze,#B8945F);border-radius:0 4px 4px 0}' +\n    '.ap-home .ap-hr-word p{font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 8px;max-width:46em}' +\n    '.ap-home .ap-hr-word p.ap-hr-wverse{font:400 17px/1.5 var(--ap-serif) !important}' +\n    '.ap-home .ap-hr-word p:last-child{margin-bottom:0}' +\n    '.ap-home .ap-hr-words{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:22px 0 0;padding-top:18px;border-top:1px solid var(--ap-rule,#E2DCD1)}' +\n    '.ap-home .ap-hr-words p{font:400 16px/1.4 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0 6px 0 0}' +\n    '.ap-home .ap-hisroad .ap-btn{cursor:pointer;line-height:1.3 !important;text-decoration:none !important}' +\n    '.ap-home .ap-hisroad .ap-btn-quiet{background:transparent !important;color:var(--ap-navy,#1F2A44) !important;border:1px solid var(--ap-navy,#1F2A44) !important}' +\n    '.ap-home .ap-hisroad .ap-btn-quiet.on{background:var(--ap-navy,#1F2A44) !important;color:#fff !important}' +\n    '.ap-home .ap-hisroad .ap-btn[disabled]{opacity:.55;cursor:default}' +\n    /* your road so far */\n    '.ap-home .ap-hr-earlier{margin:18px 0 0}' +\n    '.ap-home .ap-hr-earlier .ap-hr-more{font:600 14px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;padding:0;cursor:pointer}' +\n    '.ap-home .ap-hr-road{display:none;margin:12px 0 0}' +\n    '.ap-home .ap-hr-road.open{display:block}' +\n    '.ap-home .ap-hr-returns{margin:0 0 6px;padding:16px 18px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-radius:6px}' +\n    '.ap-home .ap-hr-returns p.ap-hr-rq{font:400 18px/1.4 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 10px}' +\n    '.ap-home .ap-hr-returns ul{margin:0;padding:0;list-style:none}' +\n    '.ap-home .ap-hr-returns li{margin:0 0 8px;font:400 15px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important}' +\n    '.ap-home .ap-hr-returns li .ap-hr-when{color:var(--ap-quiet,#6B7280);margin-right:8px}' +\n    '.ap-home .ap-hr-returns li q{font:400 16px/1.5 var(--ap-serif) !important;quotes:\"\\\\201C\" \"\\\\201D\"}' +\n    '.ap-home .ap-hr-list{margin:0;padding:0;list-style:none}' +\n    '.ap-home .ap-hr-list li{padding:12px 0;border-top:1px solid var(--ap-rule,#E2DCD1);font:400 15px/1.5 var(--ap-sans);color:var(--ap-ink,#2B3040)}' +\n    '.ap-home .ap-hr-list li:first-child{border-top:0}' +\n    '.ap-home .ap-hr-list li .ap-hr-when{color:var(--ap-quiet,#6B7280);margin-right:8px}' +\n    '.ap-home .ap-hr-list li .ap-hr-line{display:block;font:400 16px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:6px 0 0;padding-left:12px;border-left:2px solid var(--ap-rule,#E2DCD1);max-width:46em}' +\n    '.ap-home .ap-hr-list li a{font-weight:600;color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F);margin-left:8px;white-space:nowrap}' +\n    '.ap-home .ap-hr-fine{font:400 14px/1.55 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:18px 0 0;max-width:none}' +\n    '@media (max-width:640px){' +\n      '.ap-home .ap-land-big img{aspect-ratio:4/3}' +\n      '.ap-home .ap-land-road{display:block;margin:24px 0 0 5px;padding:0 0 0 22px;border-left:1px solid var(--ap-rule,#E2DCD1)}' +\n      '.ap-home .ap-land-road::before{display:none}' +\n      '.ap-home .ap-land-road li{margin:0 0 22px}' +\n      '.ap-home .ap-land-road li:last-child{margin-bottom:0}' +\n      '.ap-home .ap-land-road .ap-land-mark{position:absolute;left:-28px;top:3px}' +\n      '.ap-home .ap-land-road .ap-land-name{margin-top:0}' +\n      '.ap-home .ap-land-road img.ap-land-thumb{max-width:220px}' +\n      '.ap-home .ap-land-frame{height:150px}' +\n      '.ap-home .ap-land-scene{height:170px}' +\n      '.ap-home .ap-land-panel{padding:14px 0 16px}' +\n      '.ap-home .ap-hr-piece{padding:18px 0 6px}' +\n      '.ap-home .ap-hr-claim{font-size:20px !important;line-height:1.3 !important;margin-bottom:14px}' +\n      '.ap-home .ap-hr-quote{font-size:16px !important;line-height:1.45 !important;margin-bottom:8px}' +\n      '.ap-home .ap-hr-last p.ap-hr-lastq{font-size:17px !important}' +\n      '.ap-home .ap-hr-how img{aspect-ratio:4/3}' +\n      '.ap-home .ap-hr-stops{grid-template-columns:1fr;gap:12px}' +\n      '.ap-home .ap-hr-stops .ap-hr-stop{display:inline;font-size:16px !important}' +\n      '.ap-home .ap-hr-stops .ap-hr-stopline{display:inline;margin-left:6px}' +\n      '.ap-home .ap-hr-words p{width:100%;margin:0 0 2px}' +\n      '.ap-home .ap-hr-words .ap-btn{padding:10px 14px}' +\n    '}' +\n    '</style>';\n\n  /* ───────────── the land ───────────── */\n  /* the five stops of the road in order, each with its verse; the story work lands by one rule, the same for every course */\n  var PLACES = [\n    { key: \"gate\", name: \"The gate\", ref: \"Genesis 12:1\", focus: \"48% 62%\", light: \"mist\", verse: \"Go from your country and your kindred and your father’s house to the land that I will show you.\", line: \"The one you came through. You were called to this land; you did not find it.\", age: \"then\" },\n    { key: \"stream\", name: \"The stream\", ref: \"Psalm 1:3\", focus: \"38% 52%\", light: \"mist\", verse: \"He is like a tree planted by streams of water that yields its fruit in its season.\", line: \"What you take in. What you read, hear and keep runs past the garden.\" },\n    { key: \"stones\", name: \"The stones\", ref: \"Joshua 4:6–7\", focus: \"52% 66%\", light: \"day\", verse: \"When your children ask in time to come, ‘What do those stones mean to you?’\", line: \"The ones you set yourself, each where the LORD did something.\" },\n    { key: \"house\", name: \"Your house\", ref: \"Proverbs 24:3–4\", focus: \"34% 52%\", light: \"evening\", verse: \"By wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled.\", line: \"Built by what you do, see and know. The light in the window was on before you came.\", age: \"now\" },\n    { key: \"horizon\", name: \"The horizon\", ref: \"Genesis 1:5\", focus: \"52% 42%\", light: \"gold\", verse: \"And there was evening and there was morning, the first day.\", line: \"What is still ahead. Evening, then morning, and the road goes on.\", age: \"ahead\" }\n  ];\n  /* the Begin page: What the Land Means, then three plain lines, then the verse and the floor */\n  var MEANS = [\n    \"Abram was told to leave his father’s house for a land he had not seen (Genesis 12:1). Every man who starts this road does the same. The gate at the edge of your land is the one you came through. You did not find this place; you were called to it. Nothing behind the gate is drawn. It is enough that you walked through it.\",\n    \"The house is yours to build, and it is built the way Proverbs says a house is built: “by wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled” (Proverbs 24:3–4). Every answer you write becomes a stone, a beam, or something in a room. Nobody writes a sentence for you.\",\n    \"Look at your house again. There is a light in the window, and it was there before you laid the first stone. Jesus said, “we will come to him and make our home with him” (John 14:23). Not a house next to yours. Yours. He moved in the day you came through the gate, and the light stays on whether the walls go up fast or slow. It was prepared for you before you came. So you are not building alone, and you never were: “Unless the LORD builds the house, those who build it labor in vain” (Psalm 127:1). Build. He is already home.\",\n    \"The garden is where the practice lives. “To work it and keep it” was the first work a man was given (Genesis 2:15). What you say you are practicing is the garden’s name. Each thing you do is a row.\",\n    \"The stream is what you take in. The pieces you open and keep run past the garden, because that is where the text plants the tree, “by streams of water,” bearing fruit in its season (Psalm 1:3).\",\n    \"The sun crosses the land whether you move or not. “There was evening and there was morning” (Genesis 1:5). When it sets, you will read your land back in your own words. The evening is where the next day begins.\"\n  ];\n  /* what this is and why, under the heading For your road (John\\u2019s to rule; Config \"road lead\" overrides it) */\n  var WHAT = \"For your road goes with the course you are in. From the voices we follow, our team chooses a piece for the week you are on, with one thing to do and one question back. What you write stands on your land where you wrote it. A person on our team reads your road once a month and writes to you.\";\n  var THREE = [\n    \"Every week starts in the text’s own world and ends in yours.\",\n    \"The land changes under you so you can see the distance you have walked.\",\n    \"What is still ahead stays on the horizon.\"\n  ];\n  var POSTURE = \"“The heart of man plans his way, but the LORD establishes his steps.” — Proverbs 16:9\";\n  var FLOOR = \"Nothing here is a score. Everything here is yours or the text’s.\";\n  var STRANDS = { did: \"by wisdom a house is built\", saw: \"by understanding it is established\", know: \"by knowledge the rooms are filled\" };\n  var LEADS = { did: \"Say what you did.\", saw: \"Say what you saw.\", know: \"Say what you know now.\" };\n\n  /* his pieces as the page already read them (ap:states, ap:stones): the chronicle the land is drawn from */\n  function states() { var r = window.apStates; return r && r.length ? r : []; }\n  function stateOf(key) { var s = states().filter(function (x) { return x && x.key === key; })[0]; return s && s.status && s.status !== \"none\" ? s : null; }\n  function pageOf(key) { var s = window.apSurfaces && window.apSurfaces[key]; return s && s.page ? s.page + (s.page.indexOf(\"?\") >= 0 ? \"&open=1\" : \"?open=1\") : \"\"; }\n  function pieceLine(key, name) {\n    var s = stateOf(key); if (!s) return \"\";\n    var first = String(s.first || \"\").trim();\n    var when = (name ? name : \"\") + (s.status === \"progress\" ? \" · in progress\" : \"\") + (s.when ? \" · \" + s.when : \"\");\n    var link = pageOf(key);\n    if (!first) first = s.status === \"progress\" ? \"Begun.\" : \"Written.\";\n    return '<p class=\"ap-land-line\">' + esc(first) + '<span class=\"ap-land-when\">' + esc(when.replace(/^ · /, \"\")) + (link ? ' <a href=\"' + esc(link) + '\">Your words</a>' : \"\") + \"</span></p>\";\n  }\n  function stonesLines() {\n    var list = window.apStones; if (!list || !list.length) return \"\";\n    return list.slice(0, 3).map(function (st) {\n      var t = String(st.text || \"\").trim(), n = String(st.name || \"\").trim();\n      return '<p class=\"ap-land-line\">' + esc((n ? n + \"\\n\" : \"\") + t) + (st.when ? '<span class=\"ap-land-when\">' + esc(st.when) + \"</span>\" : \"\") + \"</p>\";\n    }).join(\"\");\n  }\n  function hisAt(key, d) {\n    var L = d.land || {}, h = placeLines(key, d);\n    if (key === \"gate\") h += pieceLine(\"wif\", \"Where I’m From\");\n    if (key === \"stream\") h += pieceLine(\"lament\", \"Your lament\");\n    if (key === \"stones\") h += stonesLines();\n    if (key === \"house\") {\n      var light = pieceLine(\"wkl\", \"What Kind of Light\");\n      if (light) h += '<span class=\"ap-land-word verse\">the light in the window · John 14:23</span>' + light;\n      var rest = 0;\n      function lines(list, cap) { return list.map(function (a, i) { if (i >= cap) rest++; return '<p class=\"ap-land-line' + (i >= cap ? \" ap-land-rest\" : \"\") + '\">' + esc(a.text) + (a.when ? '<span class=\"ap-land-when\">' + esc(a.when) + \"</span>\" : \"\") + \"</p>\"; }).join(\"\"); }\n      var pr = L.practice || [];\n      if (pr.length) h += '<span class=\"ap-land-word verse\">to work it and keep it \\u00b7 Genesis 2:15</span>' + lines(pr.slice(0, 6), 1);\n      if (rest) h += '<button type=\"button\" class=\"ap-rev\" data-act=\"landmore\">More of your words <span data-role=\"landmorearrow\">\\u25be</span></button>';\n      h += houseHtml(d);\n    }\n    if (key === \"horizon\") h += pieceLine(\"ew\", \"Ending Well\");\n    return h;\n  }\n  /* his house: three rooms in the verse\\u2019s own order (Proverbs 24:3\\u20134), each with its lintel \\u2014 built by wisdom, established by understanding, the rooms filled by knowledge.\n     Before he writes, a room holds the verse alone; what he writes builds up under it, oldest first, so the week he is in reads at the bottom. Nothing is counted. */\n  var ROOMS = [\n    { key: \"did\", lintel: \"By wisdom a house is built\", word: \"what you did\" },\n    { key: \"saw\", lintel: \"by understanding it is established\", word: \"what you saw\" },\n    { key: \"know\", lintel: \"by knowledge the rooms are filled\", word: \"what you know now\" }\n  ];\n  function houseHtml(d) {\n    var L = d.land || {}, h = '<div class=\"ap-land-house\" data-role=\"house\"><p class=\"ap-land-eyebrow\">Your house so far <span>\\u00b7 Proverbs 24:3\\u20134</span></p><div class=\"ap-land-rooms\">';\n    ROOMS.forEach(function (r) {\n      var mine = (L.answers || []).filter(function (a) { return (a.strand || \"did\") === r.key && a.text; }).slice().reverse();\n      h += '<div class=\"ap-land-room' + (mine.length ? \" built\" : \"\") + '\" data-room=\"' + r.key + '\"><p class=\"ap-land-lintel\">' + esc(nb(r.lintel)) + '</p><p class=\"ap-land-roomword\">' + esc(r.word) + \"</p>\";\n      mine.forEach(function (a) { h += '<p class=\"ap-land-line\">' + esc(a.text) + (a.when ? '<span class=\"ap-land-when\">' + esc(a.when) + \"</span>\" : \"\") + \"</p>\"; });\n      h += \"</div>\";\n    });\n    return h + \"</div></div>\";\n  }\n  /* the land as a story: each place carries the words of What the Land Means that belong to it, then his own words there */\n  var CHAPTER = { gate: [0], stream: [4], stones: [\"stones\"], house: [1, 2, 3], horizon: [5] };\n  var STONES_P = \"The stones along the road are the ones you set yourself. Israel carried twelve stones up out of the Jordan so that when their children asked, \\u201cWhat do those stones mean to you?\\u201d there would be an answer (Joshua 4:6\\u20137). Each stone you set here is one of those: a place the LORD did something, kept in your own words.\";\n  function chapterText(key) { return CHAPTER[key].map(function (i) { return i === \"stones\" ? STONES_P : MEANS[i]; }); }\n  /* the three asks of the first open: one line each, none required; what he writes stands at the place the moment he writes it (John's to rule) */\n  var ASKS = {\n    gate: { q: \"You came through a gate to get here. What did you leave behind it?\", help: \"A habit, a house, a way of living. Yours to name.\" },\n    stream: { q: \"What are you taking in right now?\", help: \"What you read, hear and watch these days.\" },\n    stones: { q: \"What has the LORD done on your road that you do not want to forget?\", help: \"One thing. A stone is set where He did something.\" },\n    house: { q: \"What are you building?\", help: \"A habit, a marriage, a way of being a father.\" },\n    horizon: { q: \"What is still ahead for you?\", help: \"What you are walking toward. One line is enough.\" }\n  };\n  var ASK_ORDER = [\"gate\", \"stream\", \"stones\", \"house\", \"horizon\"];\n  function placeLines(key, d) {\n    var L = d.land || {}, list = (L.places && L.places[key]) || [];\n    return list.map(function (a) { return '<p class=\"ap-land-line\">' + esc(a.text) + (a.when ? '<span class=\"ap-land-when\">' + esc(a.when) + \"</span>\" : \"\") + \"</p>\"; }).join(\"\");\n  }\n  /* what a man can do at each place: a page to write, a stone to set; every one a Walk line, never a navy button */\n  var PAGES = { wif: \"/where-i-am-from\", lament: \"/write-a-lament\", stones: \"/set-a-stone\", wkl: \"/what-kind-of-light\" };\n  function pageFor(key) { return pageOf(key) || PAGES[key] || \"\"; }\n  function walkLink(href, label) { return '<a class=\"ap-walk\" href=\"' + esc(href) + '\">' + esc(label) + '<span class=\"ap-walk-arrow\">→</span></a>'; }\n  function doAt(key, d) {\n    var s;\n    if (key === \"gate\") { s = stateOf(\"wif\"); return s ? \"\" : walkLink(pageFor(\"wif\"), \"Write Where I’m From\"); }\n    if (key === \"stream\") { s = stateOf(\"lament\"); return s ? \"\" : walkLink(pageFor(\"lament\"), \"Write a lament\"); }\n    if (key === \"stones\") return walkLink(pageFor(\"stones\"), \"Set a stone\");\n    if (key === \"house\") return practiceHtml(d);\n    if (key === \"horizon\") { s = stateOf(\"ew\"); return s || !d.land || !d.land.endingWell ? \"\" : walkLink(d.land.endingWell, \"Ending Well\"); }\n    return \"\";\n  }\n  /* the ask at a place: a question over one line; the line is kept when he leaves the box, and \"Kept at the gate\" says so. No button. */\n  function askHtml(key, d) {\n    var a = ASKS[key]; if (!a) return \"\";\n    var L = d.land || {}, have = (L.places && L.places[key] || []).length;\n    if (have && !L.walk) return \"\";\n    return '<div class=\"ap-answer ap-land-ask\" data-role=\"placeask\" data-place=\"' + key + '\"><p class=\"ap-answer-q\">' + esc(nb(a.q)) + '</p>' +\n      '<input type=\"text\" maxlength=\"200\" data-role=\"placeown\" data-place=\"' + key + '\" placeholder=\"' + esc(a.help) + '\" aria-label=\"' + esc(a.q) + '\">' +\n      '<div class=\"ap-answer-act\"><button type=\"button\" class=\"ap-btn ap-btn-primary ap-btn-sm\" data-act=\"placekeep\" data-place=\"' + key + '\">Keep it</button><span class=\"ap-answer-state\" data-role=\"placestate\" data-place=\"' + key + '\"></span></div></div>';\n  }\n  function openPlace(d) {\n    var L = d.land || {};\n    if (L.open && ASK_ORDER.indexOf(L.open) >= 0) return L.open;\n    var age = L.age || \"then\", p = PLACES.filter(function (x) { return x.age === age; })[0];\n    return p ? p.key : \"gate\";\n  }\n  /* the stage: every place's picture layered in one frame; the open one shows; the name on the picture; the road with its marks and the man's mark */\n  function stageHtml(d, open) {\n    var L = d.land || {}, pics = L.pictures || {};\n    var lit = PLACES.filter(function (x) { return x.key === open; })[0];\n    var h = '<div class=\"ap-land-stage\" data-role=\"stage\" data-light=\"' + (lit ? lit.light : \"mist\") + '\">';\n    PLACES.forEach(function (q) {\n      var src = pics.land ? \"\" : pics[q.key];\n      h += src ? '<img class=\"ap-land-layer' + (q.key === open ? \" on\" : \"\") + '\" data-layer=\"' + q.key + '\" src=\"' + esc(src) + '\" alt=\"\" decoding=\"async\" style=\"object-position:' + q.focus + ';transform-origin:' + q.focus + '\">' : '<div class=\"ap-land-layer blank' + (q.key === open ? \" on\" : \"\") + '\" data-layer=\"' + q.key + '\"></div>';\n    });\n    if (pics.land) h += '<img class=\"ap-land-layer on\" data-layer=\"land\" src=\"' + esc(pics.land) + '\" alt=\"\" decoding=\"async\">';\n    PLACES.forEach(function (q) { h += '<p class=\"ap-land-place' + (q.key === open ? \" on\" : \"\") + '\" data-placename=\"' + q.key + '\"><b>' + esc(q.name) + \"</b><small>\" + esc(q.ref) + \"</small></p>\"; });\n    h += '<div class=\"ap-land-roadline\"></div>';\n    PLACES.forEach(function (q, i) { h += '<i class=\"ap-land-mark' + (hisAt(q.key, d) ? \" has\" : \"\") + '\" data-mark=\"' + q.key + '\" style=\"left:' + (10 + 20 * i) + '%\"></i>'; });\n    h += '<i class=\"ap-land-man\" data-role=\"man\" style=\"left:' + (10 + 20 * Math.max(0, ASK_ORDER.indexOf(open))) + '%\"></i>';\n    return h + \"</div>\";\n  }\n  function boardHtml(d, open) {\n    var L = d.land || {}, age = L.age || \"then\";\n    var h = '<div class=\"ap-land-board\" data-role=\"board\">';\n    PLACES.forEach(function (q) {\n      h += '<button type=\"button\" class=\"ap-land-stop' + (q.key === open ? \" on\" : \"\") + (q.age === age ? \" here\" : \"\") + (hisAt(q.key, d) ? \" has\" : \"\") + '\" data-act=\"place\" data-place=\"' + q.key + '\"><span class=\"ap-land-stopname\"><i></i>' + esc(q.name) + '</span><span class=\"ap-land-stopline\">' + esc(nb(q.line)) + \"</span></button>\";\n    });\n    return h + \"</div>\";\n  }\n  /* the walk: the five places one after another, each its line, its verse and its one thing; the picture above changes as each arrives; it ends on the horizon */\n  function stepsHtml(d) {\n    var h = '<div class=\"ap-land-steps\" data-role=\"steps\">';\n    PLACES.forEach(function (q, i) {\n      var next = PLACES[i + 1], ask = askHtml(q.key, d), act = ask ? \"\" : doAt(q.key, d);\n      h += '<div class=\"ap-land-step' + (i === 0 ? \" in\" : \"\") + '\" data-step=\"' + q.key + '\">';\n      h += '<p class=\"ap-land-eyebrow\">' + esc(q.name) + \"</p>\";\n      h += '<p class=\"ap-land-story\">' + esc(nb(q.line)) + \"</p>\";\n      h += '<p class=\"ap-land-verse\">' + esc(nb(\"“\" + q.verse + \"”\")) + \"<span>\" + esc(q.ref) + \"</span></p>\";\n      if (i === 0) h += '<p class=\"ap-land-quiet\">' + esc(nb(\"Nothing here is required. What you write stands where you wrote it.\")) + \"</p>\";\n      if (ask) h += ask; else if (act) h += '<div class=\"ap-land-do\">' + act + \"</div>\";\n      h += '<p class=\"ap-land-on\"><button type=\"button\" class=\"ap-walk\" data-act=\"walkto\" data-place=\"' + (next ? next.key : \"end\") + '\">' + esc(next ? \"On to \" + next.name.replace(/^The /, \"the \").replace(/^Your /, \"your \") : \"To the end of the walk\") + '<span class=\"ap-walk-arrow\">↓</span></button></p>';\n      h += \"</div>\";\n    });\n    h += '<div class=\"ap-land-step ap-land-end\" data-step=\"end\"><p class=\"ap-land-story\">' + esc(nb(THREE[2])) + '</p><p class=\"ap-land-verse\">' + esc(nb(POSTURE.replace(/\\s*—\\s*Proverbs 16:9$/, \"\"))) + \"<span>Proverbs 16:9</span></p>\" +\n      '<p class=\"ap-land-quiet\">' + esc(nb(\"This is your land. It changes under you as you walk, and what you write stands where you wrote it.\")) + '</p>' +\n      '<p class=\"ap-land-on\"><button type=\"button\" class=\"ap-walk\" data-act=\"landgo\">Go to your land<span class=\"ap-walk-arrow\">→</span></button></p></div>';\n    return h + \"</div>\";\n  }\n  /* under the picture on a visit: one line (the week's own sentence at the week's place, the verse elsewhere), his words there, the one thing to do, and What this place means folded */\n  function panelHtml(d) {\n    var L = d.land || {}, key = openPlace(d), p = PLACES.filter(function (x) { return x.key === key; })[0];\n    var paras = chapterText(key), his = hisAt(key, d), act = doAt(key, d), ask = askHtml(key, d), here = p.age === (L.age || \"then\");\n    var h = '<div class=\"ap-land-panel\" data-role=\"panel\" data-place=\"' + key + '\">';\n    if (here && L.week && L.week.sentence) h += '<p class=\"ap-land-eyebrow\">This week</p><p class=\"ap-land-weekline\">' + esc(nb(L.week.sentence)) + \"</p>\";\n    else h += '<p class=\"ap-land-verse\">' + esc(nb(\"“\" + p.verse + \"”\")) + \"<span>\" + esc(p.ref) + \"</span></p>\";\n    if (ask) h += ask;\n    if (his) h += '<div class=\"ap-land-his\">' + his + \"</div>\";\n    if (act) h += '<div class=\"ap-land-do\">' + act + \"</div>\";\n    h += '<button type=\"button\" class=\"ap-rev\" data-act=\"chmore\">What this place means <span data-role=\"chmorearrow\">▾</span></button>';\n    h += paras.concat([POSTURE, FLOOR]).map(function (t) { return '<p class=\"ap-land-p\">' + esc(nb(t)) + \"</p>\"; }).join(\"\");\n    return h + \"</div>\";\n  }\n  function landNote(d) { var L = d.land || {}, open = L.walk ? (L.open || \"gate\") : openPlace(d); return L.walk ? THREE[0] : open === \"horizon\" ? THREE[2] : THREE[1]; }\n  /* AP-PANEL 1: every section of Your Page is drawn by this one function, so the heading, the gutter and the control cannot drift */\n  function panelOpen(key, d) {\n    var v = (d && d.ui && d.ui[key]) || \"\"; if (!v) { try { v = localStorage.getItem(\"ap_panel_\" + key) || \"\"; } catch (e) {} }\n    if (v === \"shut\") return false; if (v === \"open\") return true;\n    return key === \"land\" ? !!(d && d.land && d.land.walk) : true;\n  }\n  function secHtml(key, d, title, note, body, first) {\n    var open = panelOpen(key, d), id = key === \"road\" ? ' id=\"apHisRoad\" data-build=\"' + BUILD + '\"' : ' id=\"apLandPanel\"';\n    return '<section class=\"ap-panel' + (key === \"road\" ? \" ap-hisroad\" : \" ap-landpanel\") + (open ? \"\" : \" shut\") + (first ? \" ap-first\" : \"\") + '\" data-panel=\"' + key + '\"' + id + '>' +\n      '<h2 class=\"ap-panel-h\"><button type=\"button\" class=\"ap-panel-head\" data-act=\"panel\" data-panel=\"' + key + '\" aria-expanded=\"' + (open ? \"true\" : \"false\") + '\"><span class=\"ap-panel-text\"><span class=\"ap-panel-title\">' + esc(title) + '</span><span class=\"ap-panel-note\" data-role=\"note-' + key + '\">' + esc(nb(note)) + '</span></span><span class=\"ap-panel-ctl\" data-role=\"ctl-' + key + '\">' + (open ? \"Close \\u25b4\" : \"Open \\u25be\") + \"</span></button></h2>\" +\n      '<div class=\"ap-panel-body\" data-role=\"body-' + key + '\">' + body + \"</div></section>\";\n  }\n  function panelSet(key, open, save) {\n    var box = host.querySelector('.ap-panel[data-panel=\"' + key + '\"]'); if (!box) return;\n    box.classList.toggle(\"shut\", !open);\n    var b = box.querySelector(\".ap-panel-head\"); if (b) b.setAttribute(\"aria-expanded\", open ? \"true\" : \"false\");\n    var c = box.querySelector(\".ap-panel-ctl\"); if (c) c.textContent = open ? \"Close \\u25b4\" : \"Open \\u25be\";\n    if (data) { data.ui = data.ui || {}; data.ui[key] = open ? \"open\" : \"shut\"; }\n    try { localStorage.setItem(\"ap_panel_\" + key, open ? \"open\" : \"shut\"); } catch (e) {}\n    if (key === \"land\" && data && data.land) { if (open && data.land.walk) watchWalk(); else unwatchWalk(); }\n    if (save) { post({ action: \"road_ui\", key: key, state: open ? \"open\" : \"shut\" }); cache(); }\n  }\n  function landHtml(d) {\n    var L = d.land || {}, age = L.age || \"then\", open = L.walk ? (L.open || \"gate\") : openPlace(d);\n    var h = '<div class=\"ap-land' + (L.walk ? \" walking\" : \"\") + '\" data-role=\"land\" data-age=\"' + esc(age) + '\" data-open=\"' + esc(open) + '\">';\n    h += '<div class=\"ap-land-body\" data-role=\"landbody\">';\n    h += '<div class=\"ap-land-stagehold\" data-role=\"stagehold\">' + stageHtml(d, open) + \"</div>\";\n    if (L.walk) h += stepsHtml(d);\n    else { h += '<p class=\"ap-land-walkline\"><button type=\"button\" class=\"ap-btn ap-btn-primary\" data-act=\"walk\">Walk the land</button><span class=\"ap-land-walknote\">' + esc(nb(\"Five places, a few minutes, nothing required.\")) + \"</span></p>\"; h += boardHtml(d, open); h += panelHtml(d); }\n    h += \"</div></div>\";\n    return h;\n  }\n  /* the picture changes in place: the layer, the name, the man's mark; nothing is redrawn, so the page does not jump */\n  function showPlace(key) {\n    var land = el('[data-role=\"land\"]'); if (!land) return;\n    land.setAttribute(\"data-open\", key);\n    var stage = el('[data-role=\"stage\"]'); if (!stage) return;\n    var pl = PLACES.filter(function (x) { return x.key === key; })[0]; stage.setAttribute(\"data-light\", pl ? pl.light : \"mist\");\n    [].forEach.call(stage.querySelectorAll(\"[data-layer]\"), function (x) { if (x.getAttribute(\"data-layer\") !== \"land\") x.classList.toggle(\"on\", x.getAttribute(\"data-layer\") === key); });\n    [].forEach.call(stage.querySelectorAll(\"[data-placename]\"), function (x) { x.classList.toggle(\"on\", x.getAttribute(\"data-placename\") === key); });\n    var man = stage.querySelector('[data-role=\"man\"]'), i = ASK_ORDER.indexOf(key); if (man && i >= 0) man.style.left = (10 + 20 * i) + \"%\";\n    [].forEach.call(host.querySelectorAll(\".ap-land-stop\"), function (x) { x.classList.toggle(\"on\", x.getAttribute(\"data-place\") === key); });\n  }\n  /* the walk follows his scrolling: the place whose words are in front of him is the place the picture shows */\n  function watchWalk() {\n    var steps = host.querySelectorAll(\".ap-land-step\"); if (!steps.length) return;\n    function tick() {\n      var stage = el('[data-role=\"stage\"]'), top = stage ? stage.getBoundingClientRect().bottom : 0, line = top + (window.innerHeight - top) * 0.45, cur = null;\n      [].forEach.call(steps, function (st) { var r = st.getBoundingClientRect(); if (r.top <= line) cur = st; if (r.top < window.innerHeight * 0.85 && r.bottom > 0) st.classList.add(\"in\"); });\n      if (!cur) cur = steps[0];\n      var stepKey = cur.getAttribute(\"data-step\"), key = stepKey === \"end\" ? \"horizon\" : stepKey;\n      if (watchWalk.step !== stepKey) { if (watchWalk.step) keepIfWritten(watchWalk.step); watchWalk.step = stepKey; }\n      if (watchWalk.at !== key) { watchWalk.at = key; showPlace(key); }\n      if (!watchWalk.still) { var cr = cur.getBoundingClientRect(), prog = Math.max(0, Math.min(1, (line - cr.top) / Math.max(1, cr.height))); var ly = stage && stage.querySelector('img[data-layer=\"' + key + '\"]'); if (ly) ly.style.transform = \"scale(\" + (1 + 0.09 * prog).toFixed(4) + \")\"; }\n    }\n    function onScroll() { if (watchWalk.pending) return; watchWalk.pending = true; requestAnimationFrame(function () { watchWalk.pending = false; pin(); tick(); }); }\n    /* the picture stays at the top of the screen while the places pass under it: pinned by measure, so it holds inside any page box that scrolls */\n    function pin() {\n      var land = el('[data-role=\"land\"]'), stage = el('[data-role=\"stage\"]'), hold = el('[data-role=\"stagehold\"]'); if (!land || !stage || !hold) return;\n      var bar = 0; try { bar = parseInt(getComputedStyle(document.documentElement).getPropertyValue(\"--ap-bar\"), 10) || 0; } catch (e) {}\n      var lr = land.getBoundingClientRect(), hr = hold.getBoundingClientRect(), h = hold.offsetHeight || stage.offsetHeight;\n      var on = hr.top <= bar && lr.bottom > bar + h + 120;\n      if (on) { stage.style.position = \"fixed\"; stage.style.top = bar + \"px\"; stage.style.left = Math.round(lr.left) + \"px\"; stage.style.width = Math.round(lr.width) + \"px\"; stage.style.height = h + \"px\"; hold.style.height = h + \"px\"; }\n      else { stage.style.position = \"\"; stage.style.top = \"\"; stage.style.left = \"\"; stage.style.width = \"\"; stage.style.height = \"\"; }\n    }\n    unwatchWalk();\n    watchWalk.still = false; try { watchWalk.still = window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches; } catch (e) {}\n    watchWalk.on = onScroll; watchWalk.at = null; watchWalk.step = null;\n    window.addEventListener(\"scroll\", onScroll, { passive: true }); document.addEventListener(\"scroll\", onScroll, true); window.addEventListener(\"resize\", onScroll);\n    if (window.IntersectionObserver) { watchWalk.io = new IntersectionObserver(onScroll, { threshold: [0, 0.25, 0.5, 0.75, 1] }); [].forEach.call(steps, function (st) { watchWalk.io.observe(st); }); }\n    pin(); tick(); setTimeout(onScroll, 300);\n  }\n  function unwatchWalk() { if (watchWalk.on) { window.removeEventListener(\"scroll\", watchWalk.on); document.removeEventListener(\"scroll\", watchWalk.on, true); window.removeEventListener(\"resize\", watchWalk.on); watchWalk.on = null; } if (watchWalk.io) { watchWalk.io.disconnect(); watchWalk.io = null; } }\n  function keepIfWritten(key) {\n    var inp = host.querySelector('[data-role=\"placeown\"][data-place=\"' + key + '\"]'); if (!inp) return;\n    var text = inp.value.trim(); if (!text || inp.getAttribute(\"data-kept\") === text) return;\n    placeKeep(key, text);\n  }\n\n\n  /* ───────────── how this works (the 4.0.2 head, kept for a man the land is not open to) ───────────── */\n  var STOPS = [\n    [\"Many voices\", \"We read what the voices we follow said this week.\"],\n    [\"One in ten kept\", \"Most is passed over; what stays is read against Scripture.\"],\n    [\"Chosen for you\", \"Picked for where you are on the road, in your course's own words.\"],\n    [\"You answer back\", \"Say whether it met you, and answer the question in your own words, as long as you like.\"],\n    [\"The road is built as you walk\", \"What you open and what you say set the next piece; your course and the voices we follow build it with you.\"]\n  ];\n  function howHtml(d) {\n    var open = d.how === \"full\";\n    var h = '';\n    if (!open) h += '<button type=\"button\" class=\"ap-rev ap-hr-howline\" data-act=\"how\">How this works <span data-role=\"howarrow\">▾</span></button>';\n    h += '<div class=\"ap-hr-how' + (open ? \" open\" : \"\") + '\" data-role=\"how\">';\n    if (d.pic) h += '<img src=\"' + esc(d.pic) + '\" alt=\"A threshing floor at evening: heaps of grain under the trees, and one basket set apart\" decoding=\"async\">';\n    h += '<ol class=\"ap-hr-stops\">' + STOPS.map(function (s) { return '<li><span class=\"ap-hr-stop\">' + esc(s[0]) + '</span><span class=\"ap-hr-stopline\">' + esc(nb(s[1])) + '</span></li>'; }).join(\"\") + \"</ol>\";\n    h += '<p class=\"ap-hr-promise\">' + esc(nb(\"A person on our team reads every word you send before anything else happens with it; your answers stay on your page, and nothing is mailed to you.\")) + \"</p>\";\n    return h + \"</div>\";\n  }\n  function lastHtml(d) {\n    var l = d.last; if (!l || !l.text) return \"\";\n    return '<div class=\"ap-hr-last\"><p class=\"ap-hr-label\">From your road</p><p class=\"ap-hr-lastq\">' + esc(nb((l.when ? l.when + \" you wrote: \" : \"You wrote: \") + \"“\" + l.text + \"”\")) + '</p><p class=\"ap-hr-lastf\">This piece follows it.</p></div>';\n  }\n\n  function quoteHtml(q) {\n    var link = q.link ? ' <a href=\"' + esc(q.link) + '\" target=\"_blank\" rel=\"noopener\" data-act=\"listen\" title=\"Listen from this minute\">' + esc(q.minute || q.m || \"Open it\") + ' ↗</a>' : \"\";\n    return '<p class=\"ap-hr-quote\">“' + esc(q.words) + '”' + link + \"</p>\";\n  }\n\n  /* the first ask: what he is practicing this week — the course's own practices for the week, pressed, or his own words; it names the garden */\n  function practiceHtml(d) {\n    var L = d.land; if (!L) return \"\";\n    var list = L.practices || [], kept = L.kept || null;\n    var have = !!(kept && kept.text);\n    var h = '<div class=\"ap-hr-ask' + (have ? \" kept\" : \"\") + '\" data-role=\"practiceask\"><p class=\"ap-hr-q\">What are you practicing this week?</p>';\n    if (have) h += '<p class=\"ap-hr-kept\">You said: <q>' + esc(kept.text) + '</q></p><button type=\"button\" class=\"ap-rev\" data-act=\"practicechange\">Change it <span data-role=\"practicearrow\">\\u25be</span></button>';\n    h += '<div class=\"ap-hr-picking\" data-role=\"picking\">';\n    if (list.length) h += '<div class=\"ap-hr-picks\">' + list.map(function (p, i) { return '<button type=\"button\" class=\"ap-hr-pick' + (kept && kept.text === p ? \" on\" : \"\") + '\" data-act=\"practice\" data-i=\"' + i + '\">' + esc(p) + \"</button>\"; }).join(\"\") + \"</div>\";\n    h += '<div class=\"ap-answer\"><input type=\"text\" maxlength=\"200\" data-role=\"own\" placeholder=\"Or say it in your own words.\" aria-label=\"What are you practicing this week?\"><div class=\"ap-answer-act\"><button type=\"button\" class=\"ap-btn ap-btn-primary ap-btn-sm\" data-act=\"practiceown\">Keep it</button><span class=\"ap-answer-state\" data-role=\"practicestate\"></span></div></div></div></div>';\n    return h;\n  }\n  /* build 9, the pace: the door line. An Answer shape \\u2014 one question, a pick list of the three paces, one button. Blank reads as One a week. */\n  var PACE_Q = \"How often would you like a new piece?\";\n  var PACE_LEAD = \"We hand you up to this many, as the shelf has them. The question back stays once a week.\";\n  var PACE_STATE = { three: \"Up to three pieces a week.\", daily: \"Up to one piece a day.\", twice: \"Up to two pieces a day.\" };\n  var INTRO = \"Each week our team chooses reading, listening or watching from the voices we follow, matched to the week you are on, with one thing to do. Once a week we ask you one question back, and what you write stands on your land where you wrote it. By the end you hold a record, in your own words, of what changed, and a person on our team reads your road once a month and writes to you.\";\n  var INTRO_PLAIN = \"Each week our team chooses reading, listening or watching from the voices we follow, matched to the week you are on, with one thing to do. Once a week we ask you one question back, and a person on our team reads your road once a month and writes to you.\";\n  function introHtml(d) { return '<div class=\"ap-what\" data-role=\"what\"><p class=\"ap-road-line ap-road-what\">' + esc(nb(d.lead || (d.land ? INTRO : INTRO_PLAIN))) + \"</p></div>\"; }\n  /* the setup: the intro and the pace question on a first visit, one line once the pace is kept (Change and What this is open it again) */\n  function paceHtml(d) {\n    var P = d.pace, list = d.paces || [];\n    if (!P || !list.length) return d.land ? introHtml(d) : \"\";\n    var set = !!P.set;\n    var h = '<div class=\"ap-pace' + (set ? \" kept\" : \"\") + '\" data-role=\"pace\">';\n    h += '<p class=\"ap-pace-line\"><span data-role=\"paceword\">Your pace: ' + esc(P.label) + '.</span><button type=\"button\" class=\"ap-rev\" data-act=\"pacechange\">Change <span data-arrow>▾</span></button><button type=\"button\" class=\"ap-rev\" data-act=\"whatis\">What this is <span data-arrow>▾</span></button></p>';\n    h += introHtml(d);\n    h += '<div class=\"ap-answer ap-pace-ask\"><p class=\"ap-answer-q\">' + esc(nb(PACE_Q)) + '</p><p class=\"ap-answer-lead\">' + esc(nb(PACE_LEAD)) + '</p>' +\n      '<div class=\"ap-pace-opts\" role=\"radiogroup\" aria-label=\"' + esc(PACE_Q) + '\">' + list.map(function (o) {\n        var on = P.key === o.key;\n        return '<label class=\"ap-pace-opt' + (on ? \" on\" : \"\") + '\"><input type=\"radio\" name=\"apPace\" value=\"' + esc(o.key) + '\"' + (on ? \" checked\" : \"\") + '><span>' + esc(o.label) + '</span></label>';\n      }).join(\"\") + '</div>' +\n      '<div class=\"ap-answer-act\"><button type=\"button\" class=\"ap-btn ap-btn-primary ap-btn-sm\" data-act=\"pacekeep\" data-role=\"pacebtn\">Keep it</button><span class=\"ap-answer-state\" data-role=\"pacestate\"></span></div></div></div>';\n    return h;\n  }\n  /* the pieces after the week's first: no question back on them (it comes once a week) */\n  function moreHtml(d) {\n    var m = d.more || []; if (!m.length) return \"\";\n    return '<p class=\"ap-hr-label ap-hr-alsolabel\">Also handed to you this week</p>' + m.map(function (p) { return pieceHtml(p, d); }).join(\"\");\n  }\n  function pieceModel(id) { return [data && data.piece].concat((data && data.more) || []).filter(function (p) { return p && p.id === id; })[0] || null; }\n  function wordHtml(w, d) {\n    if (!w || !(w.verse || w.question || w.step)) return \"\";\n    return '<div class=\"ap-hr-word\"><p class=\"ap-hr-label\">' + esc(d.wordLabel || \"A word for the road\") + \"</p>\" +\n      (w.verse ? '<p class=\"ap-hr-wverse\">' + esc(nb(w.verse)) + \"</p>\" : \"\") + (w.question ? \"<p>\" + esc(nb(w.question)) + \"</p>\" : \"\") + (w.step ? \"<p>\" + esc(nb(w.step)) + \"</p>\" : \"\") + \"</div>\";\n  }\n  function answerHtml(p, d) {\n    var h = '<div class=\"ap-hr-ask\" data-role=\"ask\"><p class=\"ap-hr-label\">A question back</p><p class=\"ap-hr-q\">' + esc(nb(p.question)) + \"</p>\";\n    if (p.answer && p.answer.text) {\n      h += '<div class=\"ap-hr-answer\"><p class=\"ap-hr-label\">Your answer · sent ' + esc(p.answer.sent) + '</p><p class=\"ap-hr-text\">' + esc(p.answer.text) + \"</p></div>\" +\n        wordHtml(p.answer.word, d) +\n        '<p class=\"ap-hr-foot\">' + (p.answer.word ? \"A person on our team has read it.\" : \"A person on our team reads it within \" + esc(d.review || \"two days\") + \", before anything else happens with it.\") + (d.land ? \" It stands at your house.\" : \"\") + \"</p>\";\n    } else {\n      if (d.land && p.strand && LEADS[p.strand]) h += '<p class=\"ap-hr-lead\">' + esc(LEADS[p.strand]) + \"</p>\";\n      h += '<textarea data-role=\"answer\" maxlength=\"2000\" placeholder=\"Write it as you would say it. A few lines is enough.\"></textarea>' +\n        '<div class=\"ap-hr-send\"><button type=\"button\" class=\"ap-btn ap-btn-primary\" data-act=\"send\">Send</button><span class=\"ap-hr-state\" data-role=\"sendstate\"></span></div>' +\n        '<p class=\"ap-hr-foot\"><b>What you write here goes to our team, and a person reads it within ' + esc(d.review || \"two days\") + ', before anything else happens with it.</b> It stays with our team, with one exception: if we believe you or someone else is in danger, we will act on that, and we will tell you we are doing it. For men eighteen and older.</p>';\n    }\n    return h + \"</div>\";\n  }\n  function pieceHtml(p, d, first) {\n    var kind = [p.isNew ? \"New this week\" : \"This week\", String(p.voice || \"\").replace(/\\s*\\(.*$/, \"\"), p.kind, p.cost].filter(Boolean).join(\" · \");\n    var h = '<div class=\"ap-hr-piece' + (first ? \" ap-hr-first\" : \"\") + '\" data-id=\"' + esc(p.id) + '\">';\n    h += '<p class=\"ap-card-kind\">' + esc(kind) + \"</p>\";\n    h += '<p class=\"ap-hr-claim\">' + esc(nb(p.claim)) + \"</p>\";\n    if (p.quotes && p.quotes.length) { h += '<div class=\"ap-hr-part\"><p class=\"ap-hr-label\">In their words</p>' + p.quotes.map(quoteHtml).join(\"\") + \"</div>\"; }\n    else if (p.wordsComing) { h += '<div class=\"ap-hr-part\"><p class=\"ap-hr-label\">In their words</p><p class=\"ap-hr-coming\">Their own words and the minute are on their way; they land here this morning.</p></div>'; }\n    if (p.road) h += '<div class=\"ap-hr-part\"><p class=\"ap-hr-label\">What it means for your road</p><p class=\"ap-hr-body\">' + esc(nb(p.road)) + \"</p></div>\";\n    if (p.todo) h += '<div class=\"ap-hr-part\"><p class=\"ap-hr-label\">One thing to do this week</p><p class=\"ap-hr-body\">' + esc(nb(p.todo)) + \"</p></div>\";\n    h += '<div class=\"ap-hr-open\"><a class=\"ap-btn ap-btn-primary\" href=\"' + esc(p.minuteLink || p.link) + '\" target=\"_blank\" rel=\"noopener\" data-act=\"open\">Open it</a>' +\n      '<span class=\"ap-hr-state\" data-role=\"opened\">' + esc(p.opened ? \"Opened \" + p.opened : \"Opens in a new tab, at the minute that matters.\") + \"</span></div>\";\n    if (!p.extra) h += answerHtml(p, d);\n    h += '<div class=\"ap-hr-words\" data-role=\"words\">' + wordsHtml(p.word) + \"</div>\";\n    return h + \"</div>\";\n  }\n  function wordsHtml(word) {\n    if (word === \"met\") return '<p>You said: this met me. Thank you. It shapes next week’s piece.</p><button type=\"button\" class=\"ap-btn ap-btn-quiet\" data-act=\"word\" data-word=\"not\">Change to: not for me</button>';\n    if (word === \"not\") return '<p>You said: not for me. Thank you. Next week’s piece will be different.</p><button type=\"button\" class=\"ap-btn ap-btn-quiet\" data-act=\"word\" data-word=\"met\">Change to: this met me</button>';\n    return '<p>Did this meet you?</p><button type=\"button\" class=\"ap-btn ap-btn-quiet\" data-act=\"word\" data-word=\"met\">This met me</button><button type=\"button\" class=\"ap-btn ap-btn-quiet\" data-act=\"word\" data-word=\"not\">Not for me</button>';\n  }\n  /* Your road so far: the questions that return, then the pieces in order with the word he gave and the line he wrote */\n  function roadHtml(d) {\n    var list = d.road || [], rets = d.returns || [];\n    if (!list.length && !rets.length) return \"\";\n    var n = list.length;\n    var h = '<div class=\"ap-hr-earlier\"><button type=\"button\" class=\"ap-rev\" data-act=\"more\">Your road so far' + (n ? \" (\" + n + (n === 1 ? \" piece)\" : \" pieces)\") : \"\") + ' <span data-role=\"arrow\">▾</span></button><div class=\"ap-hr-road\" data-role=\"list\">';\n    rets.forEach(function (r) {\n      h += '<div class=\"ap-hr-returns\"><p class=\"ap-hr-label\">A question that returns</p><p class=\"ap-hr-rq\">' + esc(nb(r.question)) + '</p><ul>' +\n        r.answers.map(function (a) { return '<li><span class=\"ap-hr-when\">' + esc(a.when) + \"</span><q>\" + esc(a.text) + \"</q></li>\"; }).join(\"\") + \"</ul></div>\";\n    });\n    if (list.length) {\n      h += '<ul class=\"ap-hr-list\">';\n      list.forEach(function (e) {\n        var w = e.word === \"met\" ? \" · this met you\" : e.word === \"not\" ? \" · not for you\" : \"\";\n        h += '<li><span class=\"ap-hr-when\">' + esc(e.given) + \"</span>\" + esc(e.claim) + '<span class=\"ap-hr-when\">' + esc(\" · \" + e.voice + w) + \"</span>\" + (e.link ? '<a href=\"' + esc(e.link) + '\" target=\"_blank\" rel=\"noopener\">Open it ↗</a>' : \"\") +\n          (e.line ? '<span class=\"ap-hr-line\">' + esc(\"“\" + e.line + \"”\") + \"</span>\" : \"\") + \"</li>\";\n      });\n      h += \"</ul>\";\n    }\n    return h + \"</div></div>\";\n  }\n\n  function render(d) {\n    data = d;\n    if (!d || !d.ok || (!d.piece && !d.land)) { host.style.display = \"none\"; host.innerHTML = \"\"; return; }\n    /* the note says which course, which week, and when the piece was given, so he knows at a glance what this is about */\n    var note = d.week && d.week.label ? String(d.week.label).replace(/^\\s*·\\s*/, \"\").trim() : \"\";\n    if (d.piece && d.piece.given) note = (note ? note + \" · \" : \"\") + \"Piece given \" + d.piece.given;\n    if (d.land && !render.walked) {\n      var wk = d.week && d.week.start ? String(d.week.start) : \"\", walked = \"\"; try { walked = localStorage.getItem(\"ap_land_walked\") || \"\"; } catch (e) {}\n      if (!d.land.seen || (wk && walked !== wk)) { render.walked = true; d.land.walk = true; d.land.open = \"gate\"; if (!d.land.seen) post({ action: \"road_land\" }); }\n    }\n    var body = paceHtml(d) + (d.land ? \"\" : howHtml(d)) +\n      lastHtml(d) +\n      (d.piece ? pieceHtml(d.piece, d, true) : '<p class=\"ap-hr-coming\">Your first piece lands here the morning the door opens.</p>') + moreHtml(d) + roadHtml(d) +\n      (d.fine ? '<p class=\"ap-hr-fine\">' + esc(nb(d.fine)) + \"</p>\" : \"\");\n    var h = CSS + secHtml(\"road\", d, \"For Your Road\", note, body, true);\n    if (d.land) h += secHtml(\"land\", d, \"Your Land\", landNote(d), landHtml(d), false);\n    host.innerHTML = h;\n    host.style.display = \"\";\n    wire();\n    place();\n    since(d);\n    if (d.land && d.land.walk && panelOpen(\"land\", d)) watchWalk(); else unwatchWalk();\n  }\n  /* the chronicle arrives after the section drew: redraw the land once his pieces are on the page */\n  function redrawLand() {\n    if (!data || !data.land) return;\n    var box = el('[data-role=\"land\"]'); if (!box) return;\n    var t = document.createElement(\"div\"); t.innerHTML = landHtml(data);\n    box.parentNode.replaceChild(t.firstChild, box);\n    var nt = el('[data-role=\"note-land\"]'); if (nt) nt.textContent = nb(landNote(data));\n    if (data.land.walk && panelOpen(\"land\", data)) watchWalk(); else unwatchWalk();\n  }\n  document.addEventListener(\"ap:states\", redrawLand);\n  document.addEventListener(\"ap:stones\", redrawLand);\n\n  /* the Since you were last here line carries the new piece until he opens it (ruled Oct 13: the week's new piece is one of the things that line is for) */\n  function since(d) {\n    var p = d.piece; if (!p || since.done) return;\n    var fresh = [p].concat(d.more || []).filter(function (x) { return x && x.isNew && !x.opened; }).length;\n    var what = fresh > 1 ? \"New pieces for your road are here. \" : fresh ? \"A new piece for your road is here. \" : (p.answer && p.answer.word && p.answer.wordNew ? \"A word for your road is on your page. \" : \"\");\n    if (!what) return;\n    var box = document.querySelector(\"#apHome .ap-since\"), text = box ? box.querySelector(\".ap-since-text\") : null;\n    if (!box && host.parentNode) {\n      box = document.createElement(\"div\"); box.className = \"ap-since\";\n      box.innerHTML = '<p class=\"ap-since-kind\">Since you were last here</p><p class=\"ap-since-text\"></p>';\n      host.parentNode.insertBefore(box, host); text = box.querySelector(\".ap-since-text\");\n    }\n    if (!text || text.querySelector(\"[data-hisroad-since]\")) return;\n    var s = document.createElement(\"span\"); s.setAttribute(\"data-hisroad-since\", \"1\");\n    s.textContent = (text.textContent.trim() ? \" \" : \"\") + what;\n    var a = document.createElement(\"a\"); a.href = \"#apHisRoad\"; a.textContent = \"Read it\";\n    a.addEventListener(\"click\", function (ev) { ev.preventDefault(); var sec = document.getElementById(\"apHisRoad\"); if (sec) { try { sec.scrollIntoView({ behavior: \"smooth\", block: \"start\" }); } catch (e) { sec.scrollIntoView(); } } });\n    text.appendChild(s); text.appendChild(a); since.done = true;\n  }\n\n  /* the section sits above Your chronicle, under the course and Since you were last here; the band draws later and inserts before the shelf too, so keep the seat */\n  function place() {\n    var head = document.getElementById(\"apStoriesHead\"), shelf = head && head.closest ? head.closest(\".ap-sec\") : null;\n    if (!shelf || !shelf.parentNode) return;\n    function seat() { if (host.nextElementSibling !== shelf || host.parentNode !== shelf.parentNode) shelf.parentNode.insertBefore(host, shelf); }\n    seat();\n    if (!place.mo && window.MutationObserver) {\n      place.mo = new MutationObserver(function () { seat(); });\n      place.mo.observe(shelf.parentNode, { childList: true });\n      setTimeout(function () { if (place.mo) { place.mo.disconnect(); place.mo = null; } }, 60000);\n    }\n  }\n\n  function wire() {\n    if (wire.done) return; wire.done = true;\n    host.addEventListener(\"click\", function (ev) {\n      var t = ev.target.closest ? ev.target.closest(\"[data-act]\") : null; if (!t) return;\n      var act = t.getAttribute(\"data-act\");\n      if (act === \"open\" || act === \"listen\") { var opc = t.closest(\".ap-hr-piece\"), opid = opc ? opc.getAttribute(\"data-id\") : (data.piece && data.piece.id), opm = pieceModel(opid); if (!opid) return; post({ action: \"road_open\", id: opid }); var ost = opc ? opc.querySelector('[data-role=\"opened\"]') : null; if (ost && opm && !opm.opened) { ost.textContent = \"Opened \" + (data.today || \"today\"); opm.opened = data.today || \"today\"; } return; }\n      if (act === \"word\") { ev.preventDefault(); word(t.getAttribute(\"data-word\"), t.closest(\".ap-hr-piece\")); return; }\n      if (act === \"pacekeep\") { ev.preventDefault(); pace(); return; }\n      if (act === \"panel\") { ev.preventDefault(); var pk0 = t.getAttribute(\"data-panel\"), pb0 = host.querySelector('.ap-panel[data-panel=\"' + pk0 + '\"]'); if (pb0) panelSet(pk0, pb0.classList.contains(\"shut\"), true); return; }\n      if (act === \"pacechange\" || act === \"whatis\") { ev.preventDefault(); var pbox = t.closest(\".ap-pace\"), pcls = act === \"whatis\" ? \"open-what\" : \"open\", parr = t.querySelector(\"[data-arrow]\"); if (pbox) { pbox.classList.toggle(pcls); if (parr) parr.textContent = pbox.classList.contains(pcls) ? \"\\u25b4\" : \"\\u25be\"; } return; }\n      if (act === \"send\") { ev.preventDefault(); send(); return; }\n      if (act === \"practice\") { ev.preventDefault(); practice((data.land.practices || [])[Number(t.getAttribute(\"data-i\"))] || \"\"); return; }\n      if (act === \"practicechange\") { ev.preventDefault(); var pk = t.closest(\".ap-hr-ask\"), pv = t.querySelector('[data-role=\"practicearrow\"]'); if (pk) { pk.classList.toggle(\"open\"); if (pv) pv.textContent = pk.classList.contains(\"open\") ? \"\\u25b4\" : \"\\u25be\"; } return; }\n      if (act === \"more\") { ev.preventDefault(); var l = el('[data-role=\"list\"]'), a = el('[data-role=\"arrow\"]'); if (l) { l.classList.toggle(\"open\"); if (a) a.textContent = l.classList.contains(\"open\") ? \"▴\" : \"▾\"; } return; }\n      if (act === \"walk\") { ev.preventDefault(); data.land.walk = true; data.land.open = \"gate\"; redrawLand(); var lb0 = el('[data-role=\"land\"]'); if (lb0) { try { lb0.scrollIntoView({ behavior: \"smooth\", block: \"start\" }); } catch (e) { lb0.scrollIntoView(); } } return; }\n      if (act === \"walkto\") { ev.preventDefault(); var k2 = t.getAttribute(\"data-place\"), st2 = host.querySelector('.ap-land-step[data-step=\"' + k2 + '\"]'), sg = el('[data-role=\"stage\"]'); if (st2) { var y = st2.getBoundingClientRect().top + window.pageYOffset - (sg ? sg.getBoundingClientRect().height : 0) - 64; try { window.scrollTo({ top: y, behavior: \"smooth\" }); } catch (e) { window.scrollTo(0, y); } } return; }\n      if (act === \"landgo\") { ev.preventDefault(); walkDone(); return; }\n      if (act === \"placekeep\") { ev.preventDefault(); var pk = t.getAttribute(\"data-place\"), pin2 = host.querySelector('[data-role=\"placeown\"][data-place=\"' + pk + '\"]'); if (pin2) { var pv = pin2.value.trim(); if (!pv) { var ps = host.querySelector('[data-role=\"placestate\"][data-place=\"' + pk + '\"]'); if (ps) { ps.classList.remove(\"kept\"); ps.textContent = \"Write one line first.\"; } pin2.focus(); return; } pin2.setAttribute(\"data-kept\", pv); placeKeep(pk, pv); } return; }\n      if (act === \"practiceown\") { ev.preventDefault(); var po = el('[data-role=\"own\"]'); if (po) { var pv2 = po.value.trim(); if (!pv2) { var ps2 = el('[data-role=\"practicestate\"]'); if (ps2) ps2.textContent = \"Press one, or write your own first.\"; po.focus(); return; } po.setAttribute(\"data-kept\", pv2); practice(pv2); } return; }\n      if (act === \"place\") { ev.preventDefault(); data.land.open = t.getAttribute(\"data-place\"); redrawLand(); return; }\n      if (act === \"chmore\") { ev.preventDefault(); var pn = t.closest(\".ap-land-panel\"); if (pn) { pn.classList.toggle(\"open\"); var pa2 = t.querySelector('[data-role=\"chmorearrow\"]'); if (pa2) pa2.textContent = pn.classList.contains(\"open\") ? \"\\u25b4\" : \"\\u25be\"; } return; }\n      if (act === \"landmore\") { ev.preventDefault(); var hb = t.closest(\".ap-land-his\"), hv = t.querySelector('[data-role=\"landmorearrow\"]'); if (hb) { hb.classList.toggle(\"open\"); if (hv) hv.textContent = hb.classList.contains(\"open\") ? \"\\u25b4\" : \"\\u25be\"; } return; }\n      if (act === \"means\") { ev.preventDefault(); var mb = el('[data-role=\"means\"]'), ma = el('[data-role=\"meansarrow\"]'); if (mb) { mb.classList.toggle(\"open\"); if (ma) ma.textContent = mb.classList.contains(\"open\") ? \"▴\" : \"▾\"; } return; }\n      if (act === \"how\") { ev.preventDefault(); var hw = el('[data-role=\"how\"]'), ha = el('[data-role=\"howarrow\"]'); if (hw) { hw.classList.toggle(\"open\"); if (ha) ha.textContent = hw.classList.contains(\"open\") ? \"▴\" : \"▾\"; } }\n    });\n    function leave(t) {\n      if (!t || !t.getAttribute) return;\n      if (t.getAttribute(\"data-role\") === \"own\") { var v = t.value.trim(); if (v && t.getAttribute(\"data-kept\") !== v) { t.setAttribute(\"data-kept\", v); practice(v); } }\n      if (t.getAttribute(\"data-role\") === \"placeown\") { var v2 = t.value.trim(); if (v2 && t.getAttribute(\"data-kept\") !== v2) { t.setAttribute(\"data-kept\", v2); placeKeep(t.getAttribute(\"data-place\"), v2); } }\n    }\n    host.addEventListener(\"focusout\", function (ev) { leave(ev.target); });\n    host.addEventListener(\"change\", function (ev) {\n      var t = ev.target; if (!t || t.name !== \"apPace\") return;\n      [].forEach.call(host.querySelectorAll(\".ap-pace-opt\"), function (x) { var r = x.querySelector(\"input\"); x.classList.toggle(\"on\", !!(r && r.checked)); });\n      var st = el('[data-role=\"pacestate\"]'); if (st) { st.classList.remove(\"kept\"); st.textContent = \"\"; }\n    });\n    host.addEventListener(\"input\", function (ev) { var t = ev.target; if (!t || !t.getAttribute || t.getAttribute(\"data-role\") !== \"placeown\") return; var kb = host.querySelector('[data-act=\"placekeep\"][data-place=\"' + t.getAttribute(\"data-place\") + '\"]'); if (kb && t.value.trim() !== (t.getAttribute(\"data-kept\") || \"\")) kb.textContent = \"Keep it\"; });\n    host.addEventListener(\"keydown\", function (ev) { var t = ev.target; if (!t || !t.getAttribute || ev.key !== \"Enter\") return; if (t.getAttribute(\"data-role\") === \"own\" || t.getAttribute(\"data-role\") === \"placeown\") { ev.preventDefault(); leave(t); t.blur(); } });\n  }\n  /* a line kept at a place: it stands there the moment it is written, and the camera moves on */\n  function placeKeep(key, text) {\n    text = String(text || \"\").trim().slice(0, 200); if (!text || !key) return;\n    var p = PLACES.filter(function (x) { return x.key === key; })[0], at = p ? p.name.replace(/^The /, \"the \").replace(/^Your /, \"your \") : key;\n    data.land.places = data.land.places || {};\n    var list = data.land.places[key] || [];\n    if (list.length && list[0].when === (data.today || \"today\")) list[0].text = text; else list = [{ text: text, when: data.today || \"today\" }].concat(list);\n    data.land.places[key] = list;\n    var st = host.querySelector('[data-role=\"placestate\"][data-place=\"' + key + '\"]'); if (st) { st.textContent = \"Kept at \" + at; st.classList.add(\"kept\"); }\n    var kb = host.querySelector('[data-act=\"placekeep\"][data-place=\"' + key + '\"]'); if (kb) kb.textContent = \"Kept\";\n    [].forEach.call(host.querySelectorAll('[data-mark=\"' + key + '\"], .ap-land-stop[data-place=\"' + key + '\"]'), function (x) { x.classList.add(\"has\"); });\n    var man = el('[data-role=\"man\"]'); if (man) { man.classList.remove(\"pulse\"); void man.offsetWidth; man.classList.add(\"pulse\"); }\n    post({ action: \"road_place\", place: key, text: text }).then(function (r) { if (!r || !r.ok) { var s2 = host.querySelector('[data-role=\"placestate\"][data-place=\"' + key + '\"]'); if (s2) { s2.classList.remove(\"kept\"); s2.textContent = \"It did not go through. Your words are still here; leave the line again.\"; } } });\n    cache();\n    if (!data.land.walk) redrawLand();\n  }\n  function walkDone() { ASK_ORDER.forEach(keepIfWritten); unwatchWalk(); try { localStorage.setItem(\"ap_land_walked\", data.week && data.week.start ? String(data.week.start) : \"1\"); } catch (e) {} data.land.walk = false; data.land.open = null; redrawLand(); cache(); var lb = el('[data-role=\"land\"]'); if (lb) { try { lb.scrollIntoView({ behavior: \"smooth\", block: \"start\" }); } catch (e) {} } }\n  function practice(text) {\n    text = String(text || \"\").trim().slice(0, 200);\n    if (!text) return;\n    data.land.kept = { text: text, when: data.today || \"today\" };\n    data.land.practice = [{ text: text, when: data.today || \"today\" }].concat((data.land.practice || []).filter(function (p) { return p.when !== (data.today || \"today\"); }));\n    redrawLand(); cache();\n    post({ action: \"road_practice\", text: text }).then(function (r) { var s2 = el('[data-role=\"practicestate\"]'); if (!r || !r.ok) { if (s2) s2.textContent = \"It did not go through. Your words are still here; press it again.\"; } });\n  }\n  function word(w, pc) {\n    var pid = pc ? pc.getAttribute(\"data-id\") : (data.piece && data.piece.id), pm = pieceModel(pid);\n    var box = pc ? pc.querySelector('[data-role=\"words\"]') : el('[data-role=\"words\"]'); if (!box || !pm) return;\n    pm.word = w; box.innerHTML = wordsHtml(w);\n    post({ action: \"road_word\", id: pid, word: w }).then(function (r) { if (!r || !r.ok) { box.innerHTML = '<p>It did not go through. Your word is not lost; press it again.</p>' + wordsHtml(\"\"); pm.word = \"\"; } });\n  }\n  /* the pace is kept the moment he presses Keep it; the setup then folds to one line that says what was kept */\n  function pace() {\n    var sel = host.querySelector('input[name=\"apPace\"]:checked'), st = el('[data-role=\"pacestate\"]'), box = el('[data-role=\"pace\"]');\n    if (!sel) { if (st) { st.classList.remove(\"kept\"); st.textContent = \"Pick one first.\"; } return; }\n    var key = sel.value, o = (data.paces || []).filter(function (x) { return x.key === key; })[0]; if (!o) return;\n    var was = data.pace || { key: \"\", label: \"\", set: false };\n    data.pace = { key: key, label: o.label, set: true };\n    var pw = el('[data-role=\"paceword\"]'); if (pw) pw.textContent = \"Your pace: \" + o.label + \".\";\n    if (st) { st.classList.add(\"kept\"); st.textContent = PACE_STATE[key] || o.label; }\n    if (box) { box.classList.add(\"kept\"); box.classList.remove(\"open\"); box.classList.remove(\"open-what\"); [].forEach.call(box.querySelectorAll(\"[data-arrow]\"), function (a) { a.textContent = \"▾\"; }); }\n    cache();\n    post({ action: \"road_pace\", pace: key }).then(function (r) {\n      if (r && r.ok) return;\n      data.pace = was; var b2 = el('[data-role=\"pace\"]'), s2 = el('[data-role=\"pacestate\"]'), w2 = el('[data-role=\"paceword\"]');\n      if (b2 && !was.set) { b2.classList.remove(\"kept\"); } else if (b2) { b2.classList.add(\"open\"); }\n      if (w2 && was.set) w2.textContent = \"Your pace: \" + was.label + \".\";\n      if (s2) { s2.classList.remove(\"kept\"); s2.textContent = \"It did not go through. Your choice is still here; press Keep it again.\"; }\n      cache();\n    });\n  }\n  function send() {\n    if (sending) return;\n    var ta = el('[data-role=\"answer\"]'), st = el('[data-role=\"sendstate\"]'), btn = el('[data-act=\"send\"]');\n    var text = ta ? ta.value.trim() : \"\";\n    if (!text) { if (st) st.textContent = \"Write your answer first.\"; return; }\n    sending = true; if (btn) btn.setAttribute(\"disabled\", \"disabled\"); if (st) st.textContent = \"Sending\";\n    var slow = setTimeout(function () { if (st) st.textContent = \"Still sending\"; }, 5000);\n    post({ action: \"road_answer\", id: data.piece.id, text: text }).then(function (r) {\n      clearTimeout(slow); sending = false;\n      if (r && r.ok) {\n        data.piece.answer = { text: text, sent: r.sent || data.today || \"today\", word: null };\n        if (data.land) { data.land.answers = (data.land.answers || []).concat([{ text: text, when: data.today || \"today\", strand: r.strand || data.piece.strand || \"did\", id: data.piece.id }]); redrawLand(); }\n        var ask = el('[data-role=\"ask\"]');\n        if (ask) { var t = document.createElement(\"div\"); t.innerHTML = answerHtml(data.piece, data); ask.parentNode.replaceChild(t.firstChild, ask); }\n        cache();\n      } else {\n        if (btn) btn.removeAttribute(\"disabled\");\n        if (st) st.textContent = \"It did not send. Your words are still here; nothing has been lost. Try again.\";\n      }\n    });\n  }\n\n  /* who is asking: the site's own account, read the way the rest of the page reads it */\n  function getJSON(path) { return fetch(path, { credentials: \"include\", headers: { Accept: \"application/json\" } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }\n  function whoAmI() {\n    return getJSON(\"/api/user_stats\").then(function (j) {\n      var m = (j && j.me) || {};\n      var a = { id: m.id || m._id || m.user_id || \"\", email: (m.email || m.user_email || \"\").toLowerCase(), name: ((m.first_name || \"\") + \" \" + (m.last_name || \"\")).trim() || m.username || \"\", first: m.first_name || \"\" };\n      if (a.id && a.email) return a;\n      return getJSON(\"/api/user/me\").then(function (x) {\n        var u = (x && x.user) || x || {};\n        if (!a.id) a.id = u.id || u._id || \"\";\n        if (!a.email) a.email = String(u.email || u.user_email || \"\").toLowerCase();\n        if (!a.name) a.name = ((u.first_name || \"\") + \" \" + (u.last_name || \"\")).trim() || u.username || \"\";\n        if (!a.first) a.first = u.first_name || \"\";\n        return a;\n      });\n    });\n  }\n  function post(o) {\n    if (!ROAD_URL || !me) return Promise.resolve(null);\n    o.email = me.email; o.lwid = me.id; o.name = me.name;\n    return fetch(ROAD_URL, { method: \"POST\", headers: { \"Content-Type\": \"text/plain;charset=utf-8\" }, body: JSON.stringify(o) }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });\n  }\n  function cache() { try { localStorage.setItem(CACHE, JSON.stringify({ email: me.email, data: data, at: Date.now() })); } catch (e) {} }\n\n  host.style.display = \"none\";\n  whoAmI().then(function (a) {\n    if (!a || !a.email) return;\n    me = a;\n    var cached = null; try { var c = JSON.parse(localStorage.getItem(CACHE) || \"null\"); if (c && c.email === a.email && c.data && Date.now() - c.at < 7 * 864e5) cached = c.data; } catch (e) {}\n    if (cached) { cached.how = \"line\"; render(cached); }\n    post({ action: \"road\" }).then(function (r) {\n      if (r && r.ok) { render(r); cache(); }\n      else if (r && r.ok === false && !cached) render(null);\n    });\n  });\n  window.APHisRoad = { build: BUILD, render: render, places: PLACES };\n})();\n";