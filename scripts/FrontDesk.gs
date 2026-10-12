/**
 * Ancient Path — Front Desk · build 20.2
 *   build 20.2 (Oct 12): John's walk of build 20 — seven things, one class: a number without its meaning, a button that shows
 *     instead of takes you there, an input that does not act on Enter. (1) "This week" is four rows — the room, the list, the money,
 *     the search — each the fact in plain words, what it means, one button to the place, and an Ask that fills the question box.
 *     (2) The search story's sentences are rewritten in plain words (Google showed our pages N times; M people clicked through).
 *     (3) The search card's button opens the page's own editor in LearnWorlds (site pages: /author/pageseditor?page=<slug>), and
 *     the card carries Now / New with Copy, Approve and "I installed them" (action words_set). (4) When the desk flags a page with
 *     no words on the Words tab, the script writes a suggestion itself (suggestWords_: the page's own title, description and first
 *     words plus the phrases men type for it, through the Claude key), once per page; the owner approves on the card.
 *     (5) desk.js 17: Ask the desk at the top; Enter on the email box sends the code.
 *   build 20.1 (Oct 12): two corrections from the first live feed — "This week" counts the agreement and the answers over the
 *     seated men only (it said 8 of 8 while one seated man had not signed); the room's themes come first in the pathway's
 *     proposals and the list holds fifteen, so they are never cut off behind the search signals. No deploy needed for the script
 *     half; desk.js 16 unchanged.
 *   build 20 (Oct 11): the desk fixes what it finds, and names the next move.
 *     1. Pathway for success. A new Moves tab (key · signal · from · move · owner · due · check · status · written · written by ·
 *        note · link). Every signal the desk reads gets ONE proposed move from a fixed list — page fix · search article · poem or
 *        lament · story board / Your Story piece · new course section · group · branded one-on-one — with an owner, a due date and a
 *        check date. Signals in this build: Search profile rows with no page yet and pages shown but never clicked; the room's
 *        themes, read from each "Week N — for the facilitator" page in the Drive folder (Config "facilitator notes folder id").
 *        The page's "Add this move" button writes the row (action move_add); a search-article move also writes "Draft the article —
 *        from the desk" into that phrase's Next cell on the Search profile, so the Monday/Thursday task picks it up. A taken move
 *        reaches the lane when it is due (key move:) and again at its check date (key check:); Done on those cards closes the move.
 *        "How men found us" shows the old words beside the new ones from a new Words tab, with Copy buttons (first card: /courses).
 *     2. "Add his name" on any row that reads "(no name yet)": action name writes a Names tab that a reread never clears; the Roster
 *        and Room take the name on the next run, and the stored feed takes it at once.
 *     3. Two emails the desk can send itself, so every address stays bare: the agreement ask (Config "agreement address") and the
 *        answers ask (the build 12 text). Action ask_text shows the email; action ask_send sends it from john@, signed John, Jason in cc,
 *        logs it on Sends and stamps the man, so the card reads "Asked by email <when>". The card stays until he signs or answers.
 *     4. A card the script closed itself comes back when its gap is still there (a card closed by hand stays closed). Until now a
 *        closed script row never reopened, so two men with no agreement had no card on the lane.
 *     5. "Show me the first one" under the suggestion lands on the first card and lights it for a moment.
 *     6. A summary line on each Before We Meet list and on the room ("7 of 9 have signed the agreement. Outstanding: …"), each name
 *        carrying its fix.
 *     7. Coaching sessions carries coaching only: a calendar event counts when a roster man is a guest or named in its title, or the
 *        title says coaching or session, and it is not the cohort's night.
 *     9. The Thursday facilitator notes are emailed by this script (GmailApp keeps a bare address bare): every five minutes it looks at
 *        the "For the facilitator" folder; a page it has not announced goes to each facilitator on People whose room matches, once,
 *        logged on Sends. Pages already there when build 20 first runs are marked sent without an email.
 *    10. "This week", at the top of the desk: three sentences (the room and the list; money against the 2027 target with Q1's "what it
 *        takes", from the January Forecast sheet's "2027 Target" tab — Config "forecast sheet id"; the month's search) and one next step.
 *     New permissions: Drive and Docs (the facilitator pages). After pasting: Save, run  reread  (say Allow), then Deploy → Manage
 *     deployments → edit → New version → Deploy. The next run makes the Moves, Names and Words tabs and the new Config rows.
 *     desk.js build 16.
 */
/**
 * Ancient Path — Front Desk · build 19.1
 *   build 19.1 (Oct 11): the Tuesday reminder asks for the answers, only of the men who have not given them.
 *     The reminder now goes out as two emails. Men on the Room tab whose answers are not on the Answers tab get one more
 *     paragraph under the piece line: the ask, and the Breaking Free answers address alone on its own line. Men who have
 *     answered get the reminder as before. Both carry the same subject; each man sees only his own (bcc).
 *     Config "answers ask in reminder" (default yes) turns the paragraph off. sendTuesdayReminderTest sends the version
 *     with the ask, and the Sends row says how many men got each version.
 *     No setup step and no new deployment: the page (desk.js 15) is unchanged.
 */
/**
 * Ancient Path — Front Desk · build 19
 *   build 19 (Oct 11): the cohort's weeks, written down once, so the desk and the reminder can anticipate the week.
 *     1. A Weeks tab: one row per cohort Wednesday — week · Wednesday · what opens · piece introduced · piece address ·
 *        article (filled by the script) · facilitator's one ask. Seeded once with Breaking Free's twelve Wednesdays
 *        (section titles as the course player shows them); the lament in week 2, Where I'm From in week 9, Ending Well
 *        then Set a Stone in week 12. A second cohort is twelve new rows. The one-ask column stays blank until ruled.
 *     2. The article column fills itself from the blog's own public list (published date, Central): every article
 *        published Thursday through Wednesday of that row's week, title and bare address, one per line. The three
 *        Your Story signposts on the blog are skipped (Config "articles skip"). Only this column is ever rewritten.
 *     3. The Tuesday reminder reads tomorrow's row. When the row names a piece, one line naming it and its bare address
 *        on its own line go in under the reading paragraph. Nothing else in the reminder changes.
 *        sendTuesdayReminderTest now sends the email the men will get for the NEXT cohort night (subject marked [TEST],
 *        founders only), so the piece line can be read before Tuesday.
 *     4. A seeded Pieces tab: name · address · pace · what this asks of you, from the pace table ruled Oct 9 and Oct 11.
 *        The record only; nothing reads it yet.
 *     No setup step and no new deployment: the next 5-minute run makes and seeds both tabs. The page (desk.js 15) is unchanged.
 */
/**
 * Ancient Path — Front Desk · build 18
 *   build 18 (Oct 9): a button must show that it worked. Pressing Done / "I closed it" used to mark the row in the Actions tab and then
 *     show the old feed, so the card stayed until the next 5-minute run and a man could think the press had failed. Now the script takes the
 *     card out of the stored feed (feed!A1) the moment it is closed, and the page takes it off the lane at once with a line saying "Closed: ...".
 *     Page only otherwise: desk.js 15. After pasting: Save, then Deploy → Manage deployments → edit → New version → Deploy.
 * Ancient Path — Front Desk · build 17
 *   build 17 (Oct 9): five things John ruled on.
 *     1. In-page links work. The site scrolls inside its own box under a sticky top bar, so "Go there" (and every link that points down
 *        the page) now scrolls that box itself and stops below the bar. "Clear the oldest one first" lands on the card itself.
 *     2. Every card on the lane has a Done button. The room-is-full card links to the LearnWorlds offers page and its button reads
 *        "I closed it": the script cannot see the FIRSTCOHORT offer, so it cannot tell by itself that the seat link is closed.
 *        (The card does close on its own when a seat opens.) The "oldest first" sentence now says what is true for that kind of card.
 *     3. The band: the space under the bronze box now equals the space above it.
 *     4. A new section, "How men found us": three sentences written from the Search profile sheet (showings and clicks against last month,
 *        the phrase that moved most, the page that slipped most), then one recommendation with its button, and one row on the lane
 *        (key search:YYYY-MM, rule R17). Every number comes from the sheet; none is typed here. Config: "search profile sheet id",
 *        "search owner". The monthly refresh task's own refresh: row is no longer needed (set its Config "front desk actions" to no).
 *     5. A Pieces tab: one row per piece or course (name, address, pace, what this asks of you). The record only; nothing reads it yet.
 *     No setup step: the Pieces tab and the two Config rows are made by the next 5-minute run. After pasting: Save, then
 *     Deploy → Manage deployments → edit → New version → Deploy.
 *   build 16 (Oct 9): see below.
 *   build 16 (Oct 9): every man in the Before We Meet section carries his door — Group, One-on-one, or Group and one-on-one (a seated man is in the group; "one-on-one" or "coaching" in what he is here for adds one-on-one). The waiting list splits in two: group men waiting on answers, and one-on-one men whose coaching has started with no answers yet. The Ask box is told the door. Everything else is build 15.
 *   build 15 (Oct 9): "Before We Meet" had two meanings and the desk knew only one. The signed form is now "agreement signed" everywhere (stage, tile, roster, lane, Ask); the twelve questions at /your-answers are "answers in". A new Before We Meet section on the page lists who has answered (with Read his answers), who signed and is waiting, and who is seated with no agreement. The Ask box is taught both words. Everything else is build 14. The Roster sheet column is still headed "Before We Meet" (it holds the agreement date); the code reads it by that name.
 *   build 14 (Oct 9): the answers reminder says "Our team reads it before we meet", never two names — the team will grow. Everything else is build 13.
 *   build 13 (Oct 9): the Before We Meet piece lives at /your-answers (the old address is the live wait-list page).
 *     The only change: ANSWERS_URL, the link the answers reminder carries. Everything else is build 12.
 *   build 12 (Oct 9): the Before We Meet piece (the twelve questions, now on the site at /your-answers) reaches the desk.
 *     The Jotform half is unchanged (agreement, contact, church, referrer). The other half is the man's own answers,
 *     sent by the piece when he finishes and saves, and again whenever he adds to them ("Since we met").
 *     1. A public web call, action bwm_answers, writes the new Answers tab: one row for his first answers, one row for each
 *        thing he adds. Checked before it is stored (email shape, door, size, per-man and per-day limits), stored as plain
 *        text so nothing can run as a formula, and safe to send twice (a hash on each row).
 *     2. The Roster gets an "answers in" column, joined from Answers by email every run, so reread never loses it.
 *        The two halves match by email only.
 *     3. New cards on the lane, each with Email him / Text him / Done, and a Read his answers button that opens the
 *        answers right there (admins only; the answers never ride in the feed):
 *          "Read his answers" (ans:), "He added to his answers" (add:), "Ask him for his answers" (askans:, he signed the
 *          agreement `answers wait days` ago and nothing came), "Ask him for the agreement" (agr:, answers in, no agreement;
 *          and the old "Ask him for Before We Meet" for a seated man now reads "Ask him for the agreement").
 *        Owner: a Breaking Free man goes to the seat email owner (Jason); one-on-one and community go to the coaching owner (John).
 *     4. One reminder email, from john@, to a man who signed the agreement and has no answers after "answers reminder days"
 *        (3). Once, never twice (a stamp per man and a line on the Sends tab). Config "answers reminder" turns it off.
 *        Run  sendAnswersReminderTest  to see it in john@'s inbox without sending to a man.
 *     5. Config: "answers asked from" is stamped with the install day by setup/reread when blank. Men whose agreement is
 *        older than that date are never asked, so the earlier submissions get no flood of cards. Clear it to turn all of
 *        this off; set it earlier to ask earlier men.
 *     6. desk.js build 11: the cards above, the reader, an Agreement and an Answers column on the roster.
 *     After pasting: Save, run  setup  (adds the Answers tab, the new Config rows and the Roster column), run  reread,
 *     then Deploy → Manage deployments → edit → New version → Deploy.
 *   build 11 (Oct 8): a row on the Actions tab that the script did not write itself stays open until someone ticks it done.
 *     The search-article task (and later the monthly search refresh and any other automation) appends its own rows, keys
 *     like "draft:<slug>", rule R12. Until now the five-minute pass marked every row it had not produced itself done.
 *     Script-owned keys (seat: first: bwm: wl: bug: testimony: look: contact: pay: cal: room:) behave exactly as before.
 *   build 9 (Oct 7): three things John ruled on day one of the cohort.
 *     1. The Tuesday reminder sends itself: every Tuesday at 7:00 PM Central, when tomorrow is one of the cohort's
 *        twelve Wednesdays, the men on the Room tab get "Tomorrow night, 7:00" from john@ (signed John, Jason in Cc,
 *        men in Bcc, plain text so the one link stays a bare address). Logged on the new Sends tab; never sent twice
 *        for the same night. Run  sendTuesdayReminderTest  to see it in the founders' inboxes without the men.
 *        Config: "tuesday reminder" (yes/no), "cohort weeks" (12), "first night" (Oct 7, 2026), "tuesday reminder cc".
 *     2. The desk reads John's Google calendars for sessions, not only Calendly, so "Book his first session" never
 *        shows for a man he already meets (Christian's standing Thursday lives on the personal calendar). Config:
 *        "session calendars" — a list; "primary" is john@'s own, default adds johnlsherrod@gmail.com. A calendar the
 *        script cannot read becomes an item on the lane: share it with john@. Coaching sessions on the page now
 *        carries both sources. First run after this paste asks for calendar permission — Allow.
 *     3. desk.js build 9: the box in the band shows the reader HIS oldest item first ("2 things for you, 2 for Jason");
 *        when nothing is his it shows the other man's with "For Jason:" on the button; the site's link style no longer
 *        recolors or underlines the desk's buttons; the host div gets its class from the script, so the page's loader
 *        is two lines again: <div id="apDesk"></div> and the script tag.
 *     After pasting: Save, run  setup  (installs the Tuesday timer and the Sends tab; say Allow to the calendar
 *     permission), then Deploy → Manage deployments → edit → New version → Deploy.
 *   build 8 (Oct 7): the Breaking Free roster. A new Room tab on the sheet — one row per man in the cohort
 *     (seat, name, email, how he got in: seat link or by hand, when, open seats after him), filled from LearnWorlds'
 *     "Course Payment" (the seat link) and "Enrolled User" (enrolled from the admin by hand) notices, the name
 *     from the "User Registration" notice or the Roster. Test accounts and our own names stay off (the Config
 *     ignore lists). The feed carries it as  room  and the desk page lists it under "The room" (desk.js build 8).
 *     After pasting: Save, run  reread , then Deploy → Manage deployments → edit → New version → Deploy.
 *   build 7 (Oct 6): the script also serves the Front Desk page's code (?file=desk.js, desk.js build 7), so the
 *   /front-desk page holds only a short loader and a new page build is a paste here plus Deploy → Manage
 *   deployments → edit → New version — never a big paste into the site builder again.
 *   build 5 (Oct 6): the desk answers the site. A web address (Deploy → Web app) that the
 *   /front-desk page on ancientpathcoaching.com calls: it emails a six-digit code to an address
 *   on the People tab, turns a right code into a desk key the browser keeps (90 days), hands the
 *   desk back by role (admin: everything; facilitator: his room, after week 3), folds the
 *   ActiveCampaign count in so the page makes one call, and answers a typed question about what
 *   the desk holds through Claude ("Ask the desk"). New tabs: People, Keys, Asks. The 5-minute
 *   read is unchanged. After pasting: Save, run  reread  (it adds the tabs and the two founders
 *   to People), then Deploy → New deployment → Web app → Execute as me · Anyone → copy the address.
 *   For "Ask the desk": Project Settings → Script Properties → add CLAUDE_KEY = the Claude key.
 *   build 4 (Oct 6): the feed carries its real build number (it said 1 since the first build);
 *   Coaching sessions on the page now lists only sessions still ahead, soonest first (September
 *   sessions were showing as upcoming); each session also carries its exact time for the page.
 *   build 3 (Oct 6): the site wait-list notice's address read cleanly (it ran into the next word);
 *   a Calendly booking matched to the man by name when the email carries no address; the sheet's
 *   time zone kept equal to the script's so times stop drifting on rewrite.
 *   build 2 (Oct 6): Calendly bookings read from the subject line; LearnWorlds "Enrolled User",
 *   "New e-mail registered" (the wait list) and "New Contact Form" recognized; test accounts and
 *   our own names kept off the roster and out of the counts (Config: "ignore these emails/names");
 *   the seat email asked only for Breaking Free men, "book his first session" for one-on-one men;
 *   Jotform marketing archived; stray HTML codes (&#039;) cleaned.
 *
 * Reads john@ancientpathcoaching.com every 5 minutes, turns each notice from
 * Jotform, Jotform Sign, LearnWorlds, Calendly and Stripe into a row on the
 * "Ancient Path — Front Desk" sheet, labels the email FD-captured and moves it
 * out of the inbox, works out the Action lane from the gaps on each man's row,
 * and writes one JSON cell (feed!A1) the Front Desk page reads.
 *
 * Install (once):
 *   1. script.google.com, signed in as john@ancientpathcoaching.com → New project
 *      → name it "Ancient Path — Front Desk" → paste this whole file over Code.gs.
 *   2. Run  setup  once. Approve the permissions (Gmail, Sheets, Drive).
 *      It makes the label, sets the 5-minute timer and does the first read
 *      (the last 60 days), so the sheet and the page fill right away.
 *   3. Nothing else. To stop it: run  teardown .
 *
 * Build 10: the band is centred on the screen the page scrolls in; no underline on any desk link; Ask the desk says what went wrong
 *   (Claude refused the key / unknown model) in a box he can see, logs every unanswered question on the Asks tab, cleans a pasted key
 *   and checks the key itself (feed.claude carries its health, never the key).
 *
 * New build over an old one: paste this whole file over the code, save, run  reread .
 *
 * Settings live on the sheet's Config tab, not in this file.
 */

const FD = {
  BUILD: '20.2',
  SHEET_ID: '1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw',
  SEARCH_SHEET_ID: '1V84E1Wg33DaI89wAP0GvDR5iHQX3ZFsM3kRzu1LatCE',
  FORECAST_SHEET_ID: '1cbd4pxTh8oaFIX1iwEWSap1sZ3dkoOAWaLb-I6kZqno',
  FAC_FOLDER_ID: '1ef_9oa_TYaPQ2qqvcxpBK15Z_eIH0BgK',
  LABEL: 'FD-captured',
  TZ: 'America/Chicago',
  SENDERS: [
    'noreply@jotform.com',
    'noreply@jotformsign.com',
    'noreply@ancientpathcoaching.com',
    'notifications@calendly.com',
    'notifications@stripe.com'
  ],
  TABS: {
    Roster:   ['email','name','phone','reach him by','wait list','Before We Meet','account made','seated','After We Talk','here for','referred by','reason (his words)','stage','last activity','notes','key','answers in'],
    Inbound:  ['captured','received','source','kind','email','name','summary','open in Gmail','message id','handling'],
    Payments: ['received','amount','from','what for','matched man','open in Stripe','message id','source'],
    Coaching: ['booked','session','name','email','when (Central)','status','open in Calendly','message id'],
    Room:     ['seat','name','email','how he got in','when (Central)','open seats after him','room','open in Gmail','message id'],
    Actions:  ['key','first seen','owner','do this','for','because','link','status','mark done by hand','done at','rule'],
    feed:     [],
    Config:   ['setting','value','what it does'],
    People:   ['email','name','role','room','added','last seen','note'],
    Keys:     ['hash','email','role','issued','expires','last used','browser'],
    Asks:     ['asked','email','question','answer','build'],
    Sends:    ['sent','what','subject','to','bcc','note'],
    Answers:  ['received','email','name','door','kind','added','hash','answers (JSON)'],
    Pieces:   ['name','address','pace','what this asks of you','added','note'],
    Weeks:    ['week','Wednesday','what opens','piece introduced','piece address','article (filled by the script)','facilitator\'s one ask'],
    Moves:    ['key','signal','from','move','owner','due','check','status','written','written by','note','link'],
    Names:    ['email','name','added','by'],
    Words:    ['address','old title','old description','new title','new description','approved','installed','note']
  },
  // The two founders, written to People the first time the tab is empty. Everyone else is added by hand on the sheet.
  FOUNDERS: [
    ['john@ancientpathcoaching.com', 'John', 'admin', ''],
    ['jason@ancientpathcoaching.com', 'Jason', 'admin', '']
  ]
};

// ───────────────────────────── entry points ─────────────────────────────

function setup() {
  ensureLabel_();
  ensureTabs_();
  ensureConfig_();
  formatDateColumns_();
  installTrigger_();
  PropertiesService.getScriptProperties().deleteProperty('lastRun');
  run();
  Logger.log('Front Desk is up. Sheet: https://docs.google.com/spreadsheets/d/' + FD.SHEET_ID);
}

function teardown() {
  ScriptApp.getProjectTriggers().forEach(t => { if (t.getHandlerFunction() === 'run') ScriptApp.deleteTrigger(t); });
  Logger.log('Timer removed. Nothing else changed.');
}

/** The 5-minute job. Safe to run by hand any time. */
function run() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) return;
  try {
    const cfg = readConfig_();
    const ss = SpreadsheetApp.openById(FD.SHEET_ID);
    // The sheet and the script must agree on a time zone, or every rewrite shifts the times by the difference.
    if (ss.getSpreadsheetTimeZone() !== Session.getScriptTimeZone()) ss.setSpreadsheetTimeZone(Session.getScriptTimeZone());
    const captured = captureMail_(ss, cfg);
    const cal = calendarSessions_(cfg);
    try { ensureBuild17_(ss); } catch (e) { alert_('Build 17 setup failed: ' + e + '\n' + (e.stack || '')); }
    try { ensureBuild19_(ss); fillWeekArticles_(ss, cfg); } catch (e) { alert_('Build 19 (the Weeks tab) failed: ' + e + '\n' + (e.stack || '')); }
    try { ensureBuild20_(ss); } catch (e) { alert_('Build 20 setup failed: ' + e + '\n' + (e.stack || '')); }
    const search = searchStory_(cfg);
    let themes = [];
    try { themes = facilitatorNotes_(ss, cfg); } catch (e) { alert_('The facilitator pages could not be read: ' + e + '\n' + (e.stack || '')); }
    rebuildStages_(ss, cfg);
    rebuildRoom_(ss, cfg);
    rebuildActions_(ss, cfg, cal, search);
    try { sendAnswersReminders_(ss, cfg, false); } catch (e) { alert_('The Before We Meet reminder failed: ' + e + '\n' + (e.stack || '')); }
    try { suggestWords_(ss, cfg, search); } catch (e) { alert_('The words suggestion failed: ' + e + '\n' + (e.stack || '')); }
    writeFeed_(ss, cfg, captured, cal, search, themes);
    claudeWatch_();
    PropertiesService.getScriptProperties().setProperty('lastRun', new Date().toISOString());
  } catch (e) {
    alert_('Front Desk run failed: ' + e + '\n' + (e.stack || ''));
    throw e;
  } finally {
    lock.releaseLock();
  }
}

/**
 * Reads the whole look-back window again with the current rules. Use after installing a new build:
 * clears Roster, Inbound, Payments, Coaching and Room (the Actions tab keeps its done marks) and runs once.
 */
function reread() {
  ensureTabs_();
  ensureConfig_();
  seedPeople_();
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  ['Roster', 'Inbound', 'Payments', 'Coaching', 'Room'].forEach(name => {
    const sh = ss.getSheetByName(name);
    if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, sh.getMaxColumns()).clearContent();
  });
  PropertiesService.getScriptProperties().deleteProperty('lastRun');
  try { claudeCheck_(); } catch (e) {}
  run();
  Logger.log('Ask the desk: ' + JSON.stringify(claudeHealth_()));
  Logger.log('Re-read done (build ' + FD.BUILD + ').');
}

/** Shows what the next run would do without writing anything. */
function dryRun() {
  const cfg = readConfig_();
  const msgs = findMail_(cfg, true);
  msgs.forEach(m => {
    const n = classify_(m);
    Logger.log('%s | %s | %s | %s | %s', fmt_(m.getDate()), n.source, n.kind, n.email || '-', (n.summary || '').slice(0, 90));
  });
  Logger.log(msgs.length + ' messages would be read.');
}

// ───────────────────────────── config ─────────────────────────────

function readConfig_() {
  const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Config');
  const rows = sh.getDataRange().getValues().slice(1);
  const c = {};
  rows.forEach(r => { if (r[0]) c[String(r[0]).trim()] = r[1]; });
  return {
    cohortName: c['cohort name'] || 'Breaking Free',
    courseId: String(c['cohort course id'] || 'student-course').trim(),
    roomSize: Number(c['room size'] || 8),
    firstNight: c['first night'] ? toDate_(c['first night']) : null,
    archive: String(c['archive captured mail'] || 'yes').toLowerCase().startsWith('y'),
    lookBackDays: Number(c['look back days'] || 60),
    seatOwner: String(c['seat email owner'] || 'Jason'),
    seatWaitHours: Number(c['seat email wait hours'] || 2),
    waitListWaitDays: Number(c['wait list wait days'] || 3),
    alertEmail: String(c['alert email'] || Session.getEffectiveUser().getEmail()),
    acSheetId: String(c['ac count sheet id'] || ''),
    coachingOwner: String(c['coaching owner'] || 'John'),
    ignoreEmails: splitList_(c['ignore these emails']).map(s => s.toLowerCase()),
    ignoreNames: splitList_(c['ignore these names']).map(s => s.toLowerCase()),
    // build 5 — the desk on the site
    keyDays: Number(c['desk key lasts days'] || 90),
    codeMinutes: Number(c['desk code lasts minutes'] || 10),
    asksPerDay: Number(c['desk asks per day'] || 60),
    claudeModel: String(c['desk claude model'] || 'claude-sonnet-4-5'),
    // build 9 — calendars and the Tuesday reminder
    sessionCalendars: splitList_(c['session calendars'] || 'primary, johnlsherrod@gmail.com'),
    reminderOn: String(c['tuesday reminder'] || 'yes').toLowerCase().startsWith('y'),
    cohortWeeks: Number(c['cohort weeks'] || 12),
    reminderCc: String(c['tuesday reminder cc'] || 'jason@ancientpathcoaching.com').trim(),
    // build 12 — the Before We Meet answers
    answersFrom: c['answers asked from'] ? toDate_(c['answers asked from']) : null,
    answersWaitDays: Number(c['answers wait days'] || 4),
    answersReminderOn: String(c['answers reminder'] || 'yes').toLowerCase().startsWith('y'),
    answersReminderDays: Number(c['answers reminder days'] || 3),
    // build 17 — the search story
    searchSheetId: String(c['search profile sheet id'] || FD.SEARCH_SHEET_ID).trim(),
    searchOwner: String(c['search owner'] || 'John').trim(),
    // build 19 — the Weeks tab
    answersAskOn: String(c['answers ask in reminder'] || 'yes').toLowerCase().startsWith('y'),
    articlesSkip: splitList_(c['articles skip'] || 'where-i-am-from, write-a-lament, poetry').map(s => s.toLowerCase()),
    // build 20 — the pathway, the asks, the facilitator notes, this week
    agreementUrl: String(c['agreement address'] || 'https://www.ancientpathcoaching.com/before-we-meet').trim(),
    forecastSheetId: String(c['forecast sheet id'] || FD.FORECAST_SHEET_ID).trim(),
    facFolderId: String(c['facilitator notes folder id'] || FD.FAC_FOLDER_ID).trim(),
    facNotesOn: String(c['facilitator notes email'] || 'yes').toLowerCase().startsWith('y'),
    moveDueDays: Number(c['move due days'] || 14),
    moveCheckDays: Number(c['move check days'] || 30),
    groupOwner: String(c['group owner'] || c['seat email owner'] || 'Jason')
  };
}
function splitList_(v) { return String(v || '').split(/[,\n;]+/).map(s => s.trim()).filter(Boolean); }
/** True for our own test accounts and names, which stay on Inbound but never reach the roster, the counts or the Action lane. */
function isOurs_(cfg, email, name) {
  const e = String(email || '').toLowerCase().trim(), n = String(name || '').toLowerCase().trim();
  if (e && (cfg.ignoreEmails.includes(e) || /^johnlsherrod\+|^johnsherrod.*test|@ancientpathcoaching\.com$/.test(e))) return true;
  if (n && cfg.ignoreNames.includes(n)) return true;
  return false;
}

// ───────────────────────────── mail → rows ─────────────────────────────

function findMail_(cfg, firstRunWindow) {
  const last = PropertiesService.getScriptProperties().getProperty('lastRun');
  const days = (!last || firstRunWindow) ? cfg.lookBackDays : 7;
  const q = '(' + FD.SENDERS.map(s => 'from:' + s).join(' OR ') + ') newer_than:' + days + 'd';
  const out = [];
  let start = 0;
  while (true) {
    const threads = GmailApp.search(q, start, 100);
    if (!threads.length) break;
    threads.forEach(t => t.getMessages().forEach(m => out.push(m)));
    if (threads.length < 100) break;
    start += 100;
  }
  out.sort((a, b) => a.getDate() - b.getDate());
  return out;
}

function captureMail_(ss, cfg) {
  const inbound = ss.getSheetByName('Inbound');
  const seen = new Set(colValues_(inbound, 'message id'));
  const msgs = findMail_(cfg, false).filter(m => !seen.has(m.getId()));
  if (!msgs.length) return { read: 0, archived: 0 };

  const label = ensureLabel_();
  const inboundRows = [], payRows = [], coachRows = [], roomRows = [];
  const rosterTouches = [];
  const threadsToArchive = new Map();
  let archived = 0;

  msgs.forEach(m => {
    const n = classify_(m);
    const link = 'https://mail.google.com/mail/u/0/#all/' + m.getId();
    const ours = isOurs_(cfg, n.email, n.name);
    inboundRows.push([new Date(), m.getDate(), n.source, n.kind, n.email || '', n.name || '', (n.summary || '').slice(0, 900), link, m.getId(), n.handling + (ours ? ' · ours' : '')]);

    if (!ours) {
      if (n.roster) rosterTouches.push(Object.assign({ when: m.getDate(), link: link }, n.roster));
      if (n.payment) payRows.push([m.getDate(), n.payment.amount, n.payment.from || '', n.payment.what || '', '', n.payment.link || '', m.getId(), 'Stripe email']);
      if (n.coaching) coachRows.push([m.getDate(), n.coaching.session, n.coaching.name, n.coaching.email, n.coaching.when, n.coaching.status, n.coaching.link || '', m.getId()]);
      // build 8 — the cohort's room: only an enrollment in the cohort course. Seat, name and open seats are worked out in rebuildRoom_.
      if (n.kind === 'Enrolled' && n.email && n.courseId === cfg.courseId) roomRows.push(['', '', n.email, n.how || 'seat link', m.getDate(), '', cfg.cohortName, link, m.getId()]);
    }

    const t = m.getThread();
    t.addLabel(label);
    if (cfg.archive && n.handling === 'captured') threadsToArchive.set(t.getId(), t);
  });

  append_(inbound, inboundRows);
  if (payRows.length) append_(ss.getSheetByName('Payments'), payRows);
  if (coachRows.length) append_(ss.getSheetByName('Coaching'), coachRows);
  if (roomRows.length) append_(ss.getSheetByName('Room'), roomRows);
  if (rosterTouches.length) upsertRoster_(ss, cfg, rosterTouches);

  threadsToArchive.forEach(t => { try { t.moveToArchive(); archived++; } catch (e) {} });
  return { read: msgs.length, archived: archived };
}

/**
 * Works out what a message is. Returns:
 *   source, kind, email, name, summary, handling ('captured' | 'kept in inbox'),
 *   roster (field updates for the man's row), payment, coaching.
 */
function classify_(m) {
  const from = (m.getFrom() || '').toLowerCase();
  const subject = m.getSubject() || '';
  const plain = compact_(m.getPlainBody() || '');
  const n = { source: '', kind: 'unrecognized', email: '', name: '', summary: subject, handling: 'kept in inbox' };

  // ── Jotform (the forms) ──
  if (from.includes('noreply@jotform.com')) {
    n.source = 'Jotform';
    const html = m.getBody() || '';
    const isNotice = /^Re:\s/i.test(subject) || /emailFieldsTable/i.test(html);
    if (!isNotice) { n.kind = 'Jotform marketing'; n.summary = subject; n.handling = 'captured'; return n; }
    const sm = subject.match(/^(?:Re:\s*)?(.+?)\s+-\s+(.+)$/);
    const form = sm ? sm[1].trim() : subject.replace(/^Re:\s*/i, '').trim();
    n.name = sm ? sm[2].trim() : '';
    const fields = jotformFields_(html, plain);
    n.email = pickEmail_(fields, plain);
    if (!n.name) n.name = fields['Full name'] || fields['Printed name'] || fields['Name'] || fields['Your name'] || '';
    const phone = fields['Contact number'] || fields['Phone number'] || fields['Phone'] || '';
    const hereFor = fields['What are you here for?'] || '';
    const reason = fields['What is the reason that has brought you to us?'] || '';
    const referred = fields['Who referred you to us?'] || '';
    const reach = fields['How may we reach you?'] || '';

    n.handling = 'captured';
    if (/before we meet/i.test(form)) {
      n.kind = 'Agreement signed';
      n.summary = ['Here for: ' + hereFor, 'Referred by: ' + referred, 'Reason: ' + reason].filter(s => !/:\s*$/.test(s)).join(' · ');
      n.roster = { email: n.email, name: n.name, phone: phone, reach: reach, bwm: true, hereFor: hereFor, referredBy: referred, reason: reason };
    } else if (/wait ?list/i.test(form)) {
      n.kind = 'Wait list';
      n.summary = 'Joined the wait list' + (hereFor ? ' · ' + hereFor : '');
      n.roster = { email: n.email, name: n.name, phone: phone, waitList: true };
    } else if (/after we talk/i.test(form)) {
      n.kind = 'After We Talk';
      n.summary = summarizeFields_(fields, 400) || 'After We Talk received';
      n.roster = { email: n.email, name: n.name, awt: true };
    } else if (/bug/i.test(form)) {
      n.kind = 'Bug report';
      n.summary = summarizeFields_(fields, 500) || plain.slice(0, 500);
    } else if (/testimony/i.test(form)) {
      n.kind = 'Testimony offered';
      n.summary = summarizeFields_(fields, 500) || plain.slice(0, 500);
    } else {
      n.kind = 'Form: ' + form;
      n.summary = summarizeFields_(fields, 400) || plain.slice(0, 400);
    }
    return n;
  }

  // ── Jotform Sign (the signed PDF copy) ──
  if (from.includes('jotformsign.com')) {
    n.source = 'Jotform Sign';
    if (/signed successfully|completed/i.test(subject)) {
      n.kind = 'Signed copy';
      n.summary = 'Signed agreement PDF (attached to the email)';
      n.handling = 'captured';
    }
    return n;
  }

  // ── LearnWorlds (noreply@ancientpathcoaching.com) ──
  if (from.includes('noreply@ancientpathcoaching.com')) {
    n.source = 'LearnWorlds';
    if (/User Registration/i.test(subject)) {
      const mm = plain.match(/User:\s*(.*?)\s*Email:\s*([^\s]+@[^\s]+)/i);
      n.kind = 'Account made';
      n.name = mm ? mm[1].trim() : '';
      n.email = mm ? mm[2].trim().toLowerCase() : '';
      n.summary = 'Made a site account';
      n.handling = 'captured';
      n.roster = { email: n.email, name: n.name, account: true };
      return n;
    }
    if (/Course Payment|Enrolled User/i.test(subject)) {
      // Two layouts: "User: x Course: y Course ID: z Product price: … Specific enrollment price: …"
      // and "Course ID: z Course: y Product price: 0 Specific enrollment price: 0 User: x". Words may run together.
      const em = plain.match(/User:\s*([^\s]+@[^\s]+?)(?=Course|Product|Specific|\s|$)/i);
      const cm = plain.match(/Course:\s*([\s\S]*?)(?=Course ID:|Product price|Specific enrollment|User:|$)/i);
      const im = plain.match(/Course ID:\s*([^\s]*?)(?=Course:|Product price|Specific enrollment|User:|\s|$)/i);
      const pm = plain.match(/Specific enrollment price:\s*(?:USD\s*)?([\d.]+)/i);
      n.email = em ? em[1].trim().toLowerCase() : '';
      const course = cm ? cm[1].trim() : '';
      const courseId = im ? im[1].trim() : '';
      const paid = pm ? Number(pm[1]) : null;
      n.kind = 'Enrolled';
      // "Course Payment" = he came through the checkout (the seat link). "Enrolled User" = enrolled from the admin by hand
      // (for a free course it is also how a man's own click arrives, but the cohort course is priced, so it always means by hand there).
      n.how = /Enrolled User/i.test(subject) ? 'by hand' : 'seat link';
      n.summary = course + ' · ' + n.how + (paid !== null ? ' · paid $' + paid.toFixed(2) : '');
      n.handling = 'captured';
      n.courseId = courseId;
      n.roster = { email: n.email, seated: true, courseId: courseId, course: course };
      return n;
    }
    if (/New e-mail registered/i.test(subject)) {
      // "Email: hsrmark67@gmail.comtag: Waitlist, Join the Waitlist" — the words run together.
      const em = plain.match(/Email:\s*([^\s]+?@[^\s]+?)(?=tag:|\s|$)/i);
      const tg = plain.match(/tag:\s*([^\n]+)/i);
      n.email = em ? em[1].trim().toLowerCase() : '';
      const tags = tg ? tg[1].trim() : '';
      n.handling = 'captured';
      if (/wait ?list/i.test(tags)) {
        n.kind = 'Wait list';
        n.summary = 'Joined the wait list on the site';
        n.roster = { email: n.email, waitList: true };
      } else {
        n.kind = 'Email registered';
        n.summary = tags ? 'Tag: ' + tags : 'Email registered on the site';
      }
      return n;
    }
    if (/New Contact Form/i.test(subject)) {
      const g = (k) => { const mm = plain.match(new RegExp(k + ':\\s*([\\s\\S]*?)(?=\\s(?:firstname|lastname|email|message|phone):|$)', 'i')); return mm ? mm[1].trim() : ''; };
      const first = g('firstname'), last = g('lastname'), msg = g('message');
      n.email = (g('email').match(/[^\s]+@[^\s]+/) || [''])[0].toLowerCase();
      n.name = (first + ' ' + last).trim();
      const spam = looksLikeSpam_(first, last, msg);
      n.kind = spam ? 'Contact form (looks like spam)' : 'Contact form';
      n.summary = msg.slice(0, 600);
      n.handling = 'captured';
      return n;
    }
    if (/New Course Form Submission/i.test(subject)) {
      const t = plain.replace(/&quot;/g, '"').replace(/[“”]/g, '"');
      const fm = t.match(/User\s+(.*?)\s+submitted the form\s+"(.*?)"\s+in course:\s*"(.*?)"/i);
      n.kind = 'Story piece saved';
      n.name = fm ? fm[1].trim() : '';
      n.summary = fm ? (fm[2] + ' (' + fm[3].replace(/^ZZ\s*/, '').replace(/\s*—\s*storage.*$/i, '') + ')') : subject;
      n.handling = 'captured';
      return n;
    }
    if (/Course Content Upload/i.test(subject)) {
      n.kind = 'Site notice';
      n.summary = subject.replace(/^Notification:\s*/i, '');
      n.handling = 'captured';
      return n;
    }
    n.kind = 'Site notice';
    n.summary = subject;
    return n;
  }

  // ── Calendly ──
  if (from.includes('calendly.com')) {
    n.source = 'Calendly';
    // The subject carries everything: "New Event: Josiah Choiniere - 12:00pm Tue, Oct 6, 2026 - Weekly Coaching"
    const sj = subject.match(/(New Event|Cancell?ed Event|Rescheduled(?: Event)?|Updated Event):\s*(.+?)\s+-\s+(\d{1,2}:\d{2}\s*[ap]m\s+\w{3},\s+\w+\s+\d{1,2},\s+\d{4})\s+-\s+(.+)$/i);
    // The invitee's address: after "Invitee Email", or any address in the mail that is not ours or Calendly's.
    let ie = plain.match(/Invitee Email:?\s*[\[(]?\s*(?:mailto:)?([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/i);
    if (!ie) {
      const any = ((plain + ' ' + (m.getBody() || '')).match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) || []).map(s => s.toLowerCase())
        .find(e => !/calendly\.com$|ancientpathcoaching\.com$|zoom\.us$|zoomcrc\.com$/.test(e));
      if (any) ie = [null, any];
    }
    const lk = plain.match(/https:\/\/calendly\.com\/app\/scheduled_events[^\s\]\)]*/i);
    let status = 'booked';
    if (/cancel+ed/i.test(subject)) status = 'canceled';
    else if (/reschedul|updated/i.test(subject)) status = 'moved';
    if (sj) {
      n.kind = 'Coaching ' + status;
      n.name = sj[2].trim();
      n.email = ie ? ie[1].trim().toLowerCase() : '';
      const when = sj[3].replace(/\s+/g, ' ').trim(), session = sj[4].trim();
      n.summary = session + ' · ' + when + ' · ' + status;
      n.handling = /action required/i.test(subject) ? 'kept in inbox' : 'captured';
      n.coaching = { session: session, name: n.name, email: n.email, when: when, status: status, link: lk ? lk[0] : '' };
      if (/action required/i.test(subject)) n.needsLook = 'Calendly flagged this booking: ' + subject.replace(/\[Action Required\]\s*/i, '');
      return n;
    }
    // Body layout, in case the subject ever changes shape.
    const et = plain.match(/Event Type:\s*([\s\S]*?)\s*Invitee:/i);
    const inv = plain.match(/Invitee:\s*([\s\S]*?)\s*Invitee Email:/i);
    const dt = plain.match(/Event Date\/Time:\s*([\s\S]*?)\s*(?:\(|Description:|Location:|Invitee Time Zone:)/i);
    if (et || inv) {
      n.kind = 'Coaching ' + status;
      n.name = inv ? compact_(inv[1]) : '';
      n.email = ie ? ie[1].trim().toLowerCase() : '';
      const when = dt ? compact_(dt[1]) : '', session = et ? compact_(et[1]) : 'Session';
      n.summary = session + ' · ' + when + ' · ' + status;
      n.handling = 'captured';
      n.coaching = { session: session, name: n.name, email: n.email, when: when, status: status, link: lk ? lk[0] : '' };
      return n;
    }
    n.kind = 'Calendly notice';
    n.summary = subject;
    n.handling = /reminder|invitation|guest/i.test(subject) ? 'captured' : 'kept in inbox';
    return n;
  }

  // ── Stripe ──
  if (from.includes('stripe.com')) {
    n.source = 'Stripe';
    const am = subject.match(/Payment of \$([\d,]+(?:\.\d{2})?)/i);
    if (am) {
      const amount = Number(am[1].replace(/,/g, ''));
      const lk = plain.match(/https:\/\/dashboard\.stripe\.com\/[^\s)\]]+/i);
      const pe = (plain.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) || [])
        .map(s => s.toLowerCase())
        .find(e => !/stripe\.com$|ancientpathcoaching\.com$/.test(e)) || '';
      n.kind = 'Payment received';
      n.email = pe;
      n.summary = '$' + amount.toFixed(2) + (pe ? ' from ' + pe : '');
      n.handling = 'captured';
      n.payment = { amount: amount, from: pe, what: subject.replace(/^Payment of \$[\d,.]+\s+for\s+/i, ''), link: lk ? lk[0] : '' };
      return n;
    }
    if (/receipt|invoice/i.test(subject)) { n.kind = 'Receipt (our expense)'; n.summary = subject; return n; }
    n.kind = 'Stripe notice';
    n.summary = subject;
    return n;
  }

  n.source = from;
  return n;
}

/** Jotform's email is a two-column table; read label → value pairs, with a plain-text fallback. */
function jotformFields_(html, plain) {
  const fields = {};
  // Jotform's notification table: <tr id="row_N"><td id="question_N">label</td><td id="value_N">answer (may hold nested tables)</td></tr>
  const segs = html.split(/<tr[^>]*\bid="row_\d+"/i).slice(1);
  segs.forEach(seg => {
    const q = seg.match(/<td[^>]*\bid="question_\d+"[^>]*>([\s\S]*?)<\/td>/i);
    const vStart = seg.search(/<td[^>]*\bid="value_\d+"[^>]*>/i);
    if (!q || vStart < 0) return;
    const label = compact_(stripTags_(q[1]));
    const value = compact_(stripTags_(seg.slice(vStart).replace(/<\/tr>[\s\S]*$/i, '')));
    if (label && label.length < 200) fields[label.replace(/\s*\*$/, '')] = value;
  });
  if (!Object.keys(fields).length) {
    // Other Jotform templates: any plain two-cell row.
    const rows = html.match(/<tr[\s\S]*?<\/tr>/gi) || [];
    rows.forEach(r => {
      const cells = (r.match(/<t[dh][^>]*>[\s\S]*?<\/t[dh]>/gi) || []).map(c => compact_(stripTags_(c)));
      if (cells.length === 2 && cells[0] && cells[0].length < 160) fields[cells[0].replace(/\s*\*$/, '')] = cells[1];
    });
  }
  if (!fields['Email address'] && !fields['Full name']) {
    // Fallback: label on one line, value on the next.
    const lines = plain.split('\n').map(s => s.trim()).filter(Boolean);
    for (let i = 0; i < lines.length - 1; i++) {
      if (/[?:]$|^(Full name|Printed name|Email address|Contact number|Date|Home address|Who referred you to us)$/i.test(lines[i]) && !/[?:]$/.test(lines[i + 1])) {
        fields[lines[i]] = lines[i + 1];
      }
    }
  }
  // Last resort for the few labels the roster needs, even when a label and its answer share a line.
  ['Email address', 'Full name', 'Contact number', 'What are you here for?', 'Who referred you to us?', 'What is the reason that has brought you to us?', 'How may we reach you?'].forEach(label => {
    if (fields[label]) return;
    const v = grab_(plain, label);
    if (v) fields[label] = v;
  });
  return fields;
}

/** The text right after a label, up to the next blank line. */
function grab_(plain, label) {
  const esc = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Same line as the label (Jotform runs some answers together), else the paragraph after it.
  const same = plain.match(new RegExp(esc + '[ \\t]*([^\\n]+)', 'i'));
  if (same && same[1].trim()) return same[1].trim();
  const m = plain.match(new RegExp(esc + '\\s*\\n\\s*([^\\n]+(?:\\n(?!\\s*\\n)[^\\n]+)*)', 'i'));
  if (!m) return '';
  const v = m[1].trim();
  return /[?:]$/.test(v) ? '' : v;
}

function pickEmail_(fields, plain) {
  const direct = fields['Email address'] || fields['Email'] || fields['Your email'] || '';
  const dm = direct.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
  if (dm) return dm[0].toLowerCase();
  const all = (plain.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) || []).map(s => s.toLowerCase());
  return all.find(e => !/jotform|ancientpathcoaching\.com$/.test(e)) || '';
}

function summarizeFields_(fields, max) {
  const skip = /^(Agreement|Printed name|Signature|Date|Email address|Contact number|Full name|Home address|Text message consent|May we leave a voicemail\?|Best time to reach you|How may we reach you\?)$/i;
  const parts = [];
  Object.keys(fields).forEach(k => {
    if (skip.test(k) || !fields[k] || /^I (have read|agree)/i.test(fields[k])) return;
    parts.push(k.replace(/\?$/, '') + ': ' + fields[k]);
  });
  return parts.join(' · ').slice(0, max);
}

// ───────────────────────────── roster ─────────────────────────────

function upsertRoster_(ss, cfg, touches) {
  const sh = ss.getSheetByName('Roster');
  const H = headerIndex_(sh);
  const data = sh.getDataRange().getValues();
  const width = data[0].length;
  const byEmail = new Map();
  for (let r = 1; r < data.length; r++) {
    const e = String(data[r][H['email']] || '').toLowerCase().trim();
    if (e) byEmail.set(e, r);
  }
  touches.forEach(t => {
    const email = String(t.email || '').toLowerCase().trim();
    if (!email) return;
    if (t.seated && t.courseId && t.courseId !== cfg.courseId) return; // bought another course; stays on Inbound only
    let row;
    if (byEmail.has(email)) row = data[byEmail.get(email)];
    else {
      row = new Array(width).fill('');
      row[H['email']] = email;
      row[H['key']] = Utilities.getUuid().slice(0, 8);
      data.push(row); byEmail.set(email, data.length - 1);
    }
    const setIfEmpty = (col, v) => { if (v && !row[H[col]]) row[H[col]] = v; };
    const setDate = (col) => { if (!row[H[col]] || t.when < row[H[col]]) row[H[col]] = t.when; };
    if (t.bwm && t.name) row[H['name']] = t.name; // the name he typed on Before We Meet wins over the account name
    setIfEmpty('name', t.name);
    setIfEmpty('phone', t.phone);
    setIfEmpty('reach him by', t.reach);
    setIfEmpty('here for', t.hereFor);
    setIfEmpty('referred by', t.referredBy);
    setIfEmpty('reason (his words)', t.reason);
    if (t.waitList) setDate('wait list');
    if (t.bwm) setDate('Before We Meet');
    if (t.account) setDate('account made');
    if (t.seated) setDate('seated');
    if (t.awt) setDate('After We Talk');
    if (!row[H['last activity']] || t.when > row[H['last activity']]) row[H['last activity']] = t.when;
  });
  if (data.length > 1) sh.getRange(2, 1, data.length - 1, width).setValues(data.slice(1));
}

function rebuildStages_(ss, cfg) {
  const sh = ss.getSheetByName('Roster');
  const H = headerIndex_(sh);
  const data = sh.getDataRange().getValues();
  if (data.length < 2) return;
  const width = data[0].length;
  const keep = [];
  const firstIn = answersFirstIn_(ss);
  const names = names_(ss);
  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    if (!row[H['email']] || isOurs_(cfg, row[H['email']], row[H['name']])) continue; // our own test rows drop off the roster
    const hand = names[String(row[H['email']]).toLowerCase().trim()];
    if (hand) row[H['name']] = hand; // build 20: a name typed on the desk (Names tab) wins and survives a reread
    ['name', 'here for', 'referred by', 'reason (his words)', 'notes'].forEach(c => { if (H[c] !== undefined && typeof row[H[c]] === 'string') row[H[c]] = decodeEntities_(row[H[c]]); });
    row[H['stage']] = stageOf_(row, H);
    if (H['answers in'] !== undefined) row[H['answers in']] = firstIn.get(String(row[H['email']]).toLowerCase().trim()) || '';
    keep.push(row);
  }
  sh.getRange(2, 1, data.length - 1, width).clearContent();
  if (keep.length) sh.getRange(2, 1, keep.length, width).setValues(keep);
}

/** build 16: a man's door. A seated man is in the group; "one-on-one" or "coaching" in what he is here for means one-on-one; both can be true. */
function doorOfRow_(r) {
  const hf = String(r['here for'] || '');
  const grp = !!r['seated'] || /breaking free/i.test(hf);
  const one = /one-on-one|coaching/i.test(hf);
  return (grp && one) ? 'Group and one-on-one' : one ? 'One-on-one' : 'Group';
}

function stageOf_(row, H) {
  if (row[H['seated']]) return 'Seated';
  if (row[H['Before We Meet']]) return 'Agreement signed';
  if (row[H['wait list']]) return 'On the wait list';
  if (row[H['account made']]) return 'Account only';
  if (row[H['After We Talk']]) return 'After We Talk in';
  return '';
}

// ───────────────────────────── build 8 · the room ─────────────────────────────

/**
 * The cohort's roster, rebuilt every run from the Room tab's own rows (one per enrollment notice):
 * our own accounts drop off, a man who enrolled twice keeps his first seat, seats are numbered in the
 * order the men came in, each row carries the open seats after him, and a missing name is filled from
 * the Roster (Before We Meet or the site account) or the Inbound "Account made" notice for that email.
 */
function rebuildRoom_(ss, cfg) {
  const sh = ss.getSheetByName('Room');
  if (!sh) return;
  const H = headerIndex_(sh);
  const data = sh.getDataRange().getValues();
  if (data.length < 2) return;
  const width = data[0].length;
  const nameByEmail = {};
  rows_(ss.getSheetByName('Inbound')).forEach(r => { if (r['kind'] === 'Account made' && r['email'] && r['name'] && !nameByEmail[String(r['email']).toLowerCase()]) nameByEmail[String(r['email']).toLowerCase()] = r['name']; });
  rows_(ss.getSheetByName('Roster')).forEach(r => { if (r['email'] && r['name']) nameByEmail[String(r['email']).toLowerCase()] = r['name']; });
  const hand = names_(ss); Object.keys(hand).forEach(e => { nameByEmail[e] = hand[e]; }); // build 20: the Names tab wins
  const byEmail = new Map();
  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    const email = String(row[H['email']] || '').toLowerCase().trim();
    if (!email) continue;
    const name = row[H['name']] || nameByEmail[email] || '';
    if (isOurs_(cfg, email, name)) continue;
    row[H['email']] = email;
    row[H['name']] = decodeEntities_(String(name));
    const when = toDate_(row[H['when (Central)']]);
    const have = byEmail.get(email);
    if (!have || (when && toDate_(have[H['when (Central)']]) > when)) byEmail.set(email, row);
  }
  const men = Array.from(byEmail.values()).sort((a, b) => toDate_(a[H['when (Central)']]) - toDate_(b[H['when (Central)']]));
  men.forEach((row, i) => {
    row[H['seat']] = i + 1;
    row[H['open seats after him']] = Math.max(0, cfg.roomSize - (i + 1));
    if (!row[H['room']]) row[H['room']] = cfg.cohortName;
  });
  sh.getRange(2, 1, data.length - 1, width).clearContent();
  if (men.length) sh.getRange(2, 1, men.length, width).setValues(men);
}

/** The room as the feed and the desk carry it. */
function roomFeed_(ss, cfg) {
  const sh = ss.getSheetByName('Room');
  const men = sh ? rows_(sh).filter(r => r['email']) : [];
  const iso = (d) => d ? toDate_(d).toISOString() : null;
  return {
    name: cfg.cohortName,
    size: cfg.roomSize,
    seated: men.length,
    open: Math.max(0, cfg.roomSize - men.length),
    men: men.map(r => ({ seat: Number(r['seat'] || 0), name: r['name'] || '', email: r['email'], how: r['how he got in'] || '', when: iso(r['when (Central)']), openAfter: Number(r['open seats after him'] || 0), link: r['open in Gmail'] || '' }))
  };
}

// ───────────────────────────── the Action lane ─────────────────────────────

/** Keys the script itself writes to the Actions tab (build 11). Any other key belongs to an outside automation and is never auto-closed. */
const SCRIPT_ACTION_KEY = /^(seat|first|bwm|wl|bug|testimony|look|contact|pay|cal|room|ans|add|askans|agr|search|move|check):/;

function rebuildActions_(ss, cfg, cal, search) {
  const now = new Date();
  const roster = rows_(ss.getSheetByName('Roster'));
  const inbound = rows_(ss.getSheetByName('Inbound'));
  const payments = rows_(ss.getSheetByName('Payments'));
  const want = []; // what should be open right now

  const coaching = rows_(ss.getSheetByName('Coaching'));
  const seated = roster.filter(r => r['seated']);
  const hrs = (d) => (now - toDate_(d)) / 36e5;
  const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z]/g, '');
  const hasBooking = (email, name) => coaching.some(c => c['status'] !== 'canceled' &&
    ((c['email'] && String(c['email']).toLowerCase() === String(email).toLowerCase()) || (name && norm(c['name']) === norm(name))));
  // build 9: a session on John's Google calendar counts too — the man is a guest, or his name is in the title.
  const calEvents = (cal && cal.events) || [];
  const onCalendar = (email, name) => calEvents.some(ev =>
    (email && ev.guests.includes(String(email).toLowerCase())) || (name && norm(name).length > 3 && norm(ev.title).includes(norm(name))));

  roster.forEach(r => {
    const who = (r['name'] || r['email']) + '';
    const link = 'https://docs.google.com/spreadsheets/d/' + FD.SHEET_ID + '/edit#gid=0';
    const hereFor = String(r['here for'] || '');
    const oneOnOne = /one-on-one|coaching/i.test(hereFor) && !/breaking free/i.test(hereFor);
    if (r['Before We Meet'] && !r['seated'] && !oneOnOne && hrs(r['Before We Meet']) >= cfg.seatWaitHours) {
      want.push({ key: 'seat:' + r['email'], owner: cfg.seatOwner, do: 'Send the seat email', for: who,
        because: 'Signed the agreement ' + ago_(r['Before We Meet']) + ', not yet enrolled', link: link, rule: 'R1' });
    }
    if (r['Before We Meet'] && oneOnOne && !r['seated'] && !hasBooking(r['email'], r['name']) && !onCalendar(r['email'], r['name'])) {
      want.push({ key: 'first:' + r['email'], owner: cfg.coachingOwner, do: 'Book his first session', for: who,
        because: 'Signed the agreement for one-on-one coaching ' + ago_(r['Before We Meet']) + '; no session on the calendar yet', link: link, rule: 'R9' });
    }
    if (r['seated'] && !r['Before We Meet']) {
      want.push({ key: 'bwm:' + r['email'], owner: cfg.seatOwner, do: 'Ask him for the agreement', for: who,
        because: 'Enrolled ' + ago_(r['seated']) + ' with no signed agreement on file', link: link, rule: 'R2' });
    }
    if (r['wait list'] && !r['Before We Meet'] && !r['seated'] && hrs(r['wait list']) >= cfg.waitListWaitDays * 24) {
      want.push({ key: 'wl:' + r['email'], owner: cfg.seatOwner, do: 'Reply with the agreement link', for: who,
        because: 'On the wait list ' + ago_(r['wait list']) + ', no signed agreement yet', link: link, rule: 'R3' });
    }
  });

  // build 12 — the other half of Before We Meet: his own answers, from the piece on the site. Halves match by email only.
  const answers = rows_(ss.getSheetByName('Answers')).filter(a => !isOurs_(cfg, a['email'], a['name']));
  const ownerFor = (door, hereForText) => {
    const d = String(door || '') || (/breaking free/i.test(hereForText || '') ? 'bf' : 'one');
    return d === 'bf' ? cfg.seatOwner : cfg.coachingOwner;
  };
  const answersOf = new Map();
  answers.forEach(a => { if (a['kind'] === 'first' && !answersOf.has(String(a['email']).toLowerCase())) answersOf.set(String(a['email']).toLowerCase(), a); });
  roster.forEach(r => {
    const em = String(r['email']).toLowerCase(), who = (r['name'] || r['email']) + '';
    const link = 'https://docs.google.com/spreadsheets/d/' + FD.SHEET_ID + '/edit#gid=0';
    const hereFor = String(r['here for'] || '');
    const got = answersOf.get(em);
    // answers missing: he signed the agreement (on or after the day this went live) and nothing has come
    if (cfg.answersFrom && !got && r['Before We Meet'] && toDate_(r['Before We Meet']) >= cfg.answersFrom && hrs(r['Before We Meet']) >= cfg.answersWaitDays * 24) {
      want.push({ key: 'askans:' + em, owner: ownerFor('', hereFor), do: 'Ask him for his answers', for: who,
        because: 'Signed the agreement ' + ago_(r['Before We Meet']) + '; the questions on the site are not answered yet', link: '', rule: 'R14' });
    }
    // agreement missing: his answers are in and no agreement has come (a seated man with none is R2)
    if (got && !r['Before We Meet'] && !r['seated'] && hrs(got['received']) >= 48) {
      want.push({ key: 'agr:' + em, owner: ownerFor(got['door'], hereFor), do: 'Ask him for the agreement', for: who,
        because: 'His answers came in ' + ago_(got['received']) + ' and no signed agreement matches his email', link: '', rule: 'R13' });
    }
  });
  answers.forEach(a => {
    const em = String(a['email']).toLowerCase(), who = (a['name'] || a['email']) + '';
    const man = roster.find(r => String(r['email']).toLowerCase() === em);
    const owner = ownerFor(a['door'], man ? man['here for'] : '');
    if (a['kind'] === 'first') {
      want.push({ key: 'ans:' + em, owner: owner, do: 'Read his answers', for: who,
        because: 'He answered the Before We Meet questions ' + ago_(a['received']) + '. Read them before you reach out.', link: '', rule: 'R15' });
    } else if (a['kind'] === 'added' && hrs(a['received']) <= 14 * 24) {
      want.push({ key: 'add:' + em + ':' + String(a['hash']).slice(0, 8), owner: owner, do: 'He added to his answers', for: who,
        because: 'He wrote more ' + ago_(a['received']) + ', under Since we met. Read it, then reach out.', link: '', rule: 'R16' });
    }
  });

  inbound.forEach(r => {
    if (r['kind'] === 'Bug report') {
      want.push({ key: 'bug:' + r['message id'], owner: 'John', do: 'Fix this', for: r['name'] || 'Bug report',
        because: String(r['summary'] || '').slice(0, 160), link: r['open in Gmail'], rule: 'R4' });
    }
    if (r['kind'] === 'Testimony offered') {
      want.push({ key: 'testimony:' + r['message id'], owner: 'John', do: 'Read it, then approve or decline', for: r['name'] || 'Testimony offered',
        because: 'A man offered his story for other men to read', link: r['open in Gmail'], rule: 'R5' });
    }
    if (String(r['handling']).startsWith('kept in inbox') && !String(r['handling']).includes('ours')) {
      want.push({ key: 'look:' + r['message id'], owner: 'John', do: 'Look at this one', for: r['source'] + (r['name'] ? ' · ' + r['name'] : ''),
        because: 'Left in the inbox: ' + String(r['summary'] || '').slice(0, 120), link: r['open in Gmail'], rule: 'R6' });
    }
    if (r['kind'] === 'Contact form' && !String(r['handling']).includes('ours')) {
      want.push({ key: 'contact:' + r['message id'], owner: cfg.seatOwner, do: 'Reply to his message', for: (r['name'] || r['email'] || 'Contact form') + '',
        because: String(r['summary'] || '').slice(0, 200), link: r['open in Gmail'], rule: 'R10' });
    }
  });

  const rosterEmails = new Set(roster.map(r => String(r['email']).toLowerCase()));
  payments.forEach(r => {
    if (!r['matched man'] && !(r['from'] && rosterEmails.has(String(r['from']).toLowerCase()))) {
      want.push({ key: 'pay:' + r['message id'], owner: 'John', do: 'Match this payment to a man', for: '$' + Number(r['amount'] || 0).toFixed(2),
        because: 'Stripe payment with no matching man on the roster', link: r['open in Stripe'] || '', rule: 'R7' });
    }
  });

  ((cal && cal.missing) || []).forEach(id => {
    want.push({ key: 'cal:' + id, owner: 'John', do: 'Share this calendar with john@', for: id,
      because: 'The desk cannot read it, so it cannot see the sessions on it and may ask you to book a man you already meet. Open the calendar\'s settings, Share with specific people, add john@ancientpathcoaching.com with See all event details.',
      link: 'https://calendar.google.com/calendar/r/settings', rule: 'R11' });
  });

  if (seated.length >= cfg.roomSize) {
    want.push({ key: 'room:full', owner: 'John', do: 'Room is full: close the seat link', for: cfg.cohortName,
      because: seated.length + ' of ' + cfg.roomSize + ' seats taken. Open the offers page, find the First Cohort offer and take it off Public, then press I closed it. The desk cannot see the offer, so it cannot tell for itself that it is closed; the card goes away on its own if a seat opens.',
      link: 'https://www.ancientpathcoaching.com/author/offers', rule: 'R8' });
  }

  // build 17 — the monthly search recommendation (the story and its numbers come from the Search profile sheet)
  if (search && search.rec) {
    want.push({ key: search.rec.key, owner: cfg.searchOwner, do: search.rec.do, for: search.rec.for, because: search.rec.because, link: search.rec.edit || search.rec.link, rule: 'R17' });
  }

  // build 20 — a taken move reaches the lane when it is due, and again at its check date
  const movesUrl = 'https://docs.google.com/spreadsheets/d/' + FD.SHEET_ID + '/edit#gid=' + movesGid_(ss);
  const todayDay = dayOf_(now);
  const mvSh = ss.getSheetByName('Moves');
  (mvSh ? rows_(mvSh) : []).forEach(m => {
    if (!m['key'] || !m['move']) return;
    const st = String(m['status'] || '').toLowerCase();
    const due = m['due'] instanceof Date ? dayOf_(m['due']) : '', chk = m['check'] instanceof Date ? dayOf_(m['check']) : '';
    const soon = (d) => d && addDays_(d, -3) <= todayDay;
    if (st === 'taken' && soon(due)) {
      want.push({ key: 'move:' + m['key'], owner: m['owner'] || 'John', do: 'Make the move: ' + m['move'], for: String(m['signal'] || ''),
        because: 'Taken ' + (m['written'] ? fmt_(m['written']) : '') + ' from ' + (m['from'] || 'the desk') + '; due ' + (due ? Utilities.formatDate(dayDate_(due), FD.TZ, 'MMM d') : '') + '. Press Done when it is made; the check comes ' + (chk ? Utilities.formatDate(dayDate_(chk), FD.TZ, 'MMM d') : 'later') + '.',
        link: m['link'] || movesUrl, rule: 'R18' });
    }
    if (st === 'done' && soon(chk)) {
      want.push({ key: 'check:' + m['key'], owner: m['owner'] || 'John', do: 'Check the move: ' + m['move'], for: String(m['signal'] || ''),
        because: 'Did it change the signal? Look at the numbers behind it, then press Done.', link: m['link'] || movesUrl, rule: 'R19' });
    }
  });

  // Merge with what is already on the Actions tab.
  const sh = ss.getSheetByName('Actions');
  const H = headerIndex_(sh);
  const data = sh.getDataRange().getValues();
  const existing = new Map();
  for (let r = 1; r < data.length; r++) { const k = String(data[r][H['key']] || '').trim(); if (k) existing.set(k, data[r]); }
  const wantKeys = new Set(want.map(w => w.key));
  const out = [];

  want.forEach(w => {
    const ex = existing.get(w.key);
    if (ex) {
      const handDone = ex[H['mark done by hand']] === true;
      ex[H['owner']] = w.owner; ex[H['do this']] = w.do; ex[H['for']] = w.for; ex[H['because']] = w.because; ex[H['link']] = w.link; ex[H['rule']] = w.rule;
      if (handDone && ex[H['status']] !== 'done') { ex[H['status']] = 'done'; ex[H['done at']] = now; }
      // build 20: a row the script closed itself comes back when its gap is still there; a row closed by hand stays closed
      if (!handDone && ex[H['status']] === 'done' && SCRIPT_ACTION_KEY.test(w.key)) { ex[H['status']] = 'open'; ex[H['first seen']] = now; ex[H['done at']] = ''; }
      out.push(ex);
    } else {
      const row = new Array(FD.TABS.Actions.length).fill('');
      row[H['key']] = w.key; row[H['first seen']] = now; row[H['owner']] = w.owner; row[H['do this']] = w.do;
      row[H['for']] = w.for; row[H['because']] = w.because; row[H['link']] = w.link; row[H['status']] = 'open';
      row[H['mark done by hand']] = false; row[H['rule']] = w.rule;
      out.push(row);
    }
  });
  existing.forEach((ex, key) => {
    if (wantKeys.has(key)) return;
    if (!SCRIPT_ACTION_KEY.test(key)) {
      // build 11: written by another automation (draft:, refresh:, ...) — the script does not own it, so it never closes it.
      // It stays open until someone ticks "mark done by hand" (or types done in status).
      if (ex[H['mark done by hand']] === true && ex[H['status']] !== 'done') { ex[H['status']] = 'done'; ex[H['done at']] = now; }
      out.push(ex);
      return;
    }
    if (ex[H['status']] !== 'done') { ex[H['status']] = 'done'; ex[H['done at']] = now; }
    out.push(ex);
  });

  out.sort((a, b) => (a[H['status']] === b[H['status']] ? 0 : a[H['status']] === 'open' ? -1 : 1) || (toDate_(b[H['first seen']]) - toDate_(a[H['first seen']])));
  if (data.length > 1) sh.getRange(2, 1, data.length - 1, FD.TABS.Actions.length).clearContent();
  if (out.length) sh.getRange(2, 1, out.length, FD.TABS.Actions.length).setValues(out);
}

// ───────────────────────────── the feed the page reads ─────────────────────────────

function writeFeed_(ss, cfg, captured, cal, search, themes) {
  const now = new Date();
  const roster = rows_(ss.getSheetByName('Roster'));
  const inbound = rows_(ss.getSheetByName('Inbound'));
  const payments = rows_(ss.getSheetByName('Payments'));
  const coaching = rows_(ss.getSheetByName('Coaching'));
  const actions = rows_(ss.getSheetByName('Actions'));
  const d7 = new Date(now - 7 * 864e5), d30 = new Date(now - 30 * 864e5);
  const iso = (d) => d ? toDate_(d).toISOString() : null;

  const seated = roster.filter(r => r['seated']).length;
  const theirs = inbound.filter(r => !String(r['handling']).includes('ours'));
  const byKind7 = {};
  theirs.filter(r => toDate_(r['received']) >= d7).forEach(r => { byKind7[r['kind']] = (byKind7[r['kind']] || 0) + 1; });

  // Coaching sessions still ahead: the session's own time (Central, from the Calendly subject) decides, not the day the email came.
  // A session that started up to 90 minutes ago still counts as "now". Soonest first.
  const ahead = coaching
    .filter(r => r['status'] !== 'canceled')
    .map(r => Object.assign({ at: whenToDate_(r['when (Central)']) }, r))
    .filter(r => !r.at || (now - r.at) < 90 * 60e3)
    .sort((a, b) => (a.at ? a.at : new Date(8.64e15)) - (b.at ? b.at : new Date(8.64e15)))
    .slice(0, 30);
  // build 9: sessions on John's Google calendars, folded in with the Calendly ones (a Calendly booking that is also on
  // the calendar shows once — the calendar copy is dropped when a Calendly session starts within ten minutes of it).
  // build 20: coaching only — a roster man is a guest or named in the title, or the title says coaching or session; never the cohort's night.
  const normN = (s) => String(s || '').toLowerCase().replace(/[^a-z]/g, '');
  const rosterNames = roster.map(r => normN(r['name'])).filter(n => n.length > 3), rosterMails = new Set(roster.map(r => String(r['email']).toLowerCase()));
  const cohortWord = String(cfg.cohortName || 'Breaking Free').split('—')[0].trim().toLowerCase();
  const isCoaching = (ev) => {
    const t = String(ev.title || '').toLowerCase();
    if (cohortWord && t.indexOf(cohortWord) >= 0) return false;
    if ((ev.guests || []).some(g => rosterMails.has(g))) return true;
    if (rosterNames.some(n => normN(t).indexOf(n) >= 0)) return true;
    return /coaching|session/.test(t);
  };
  const calAhead = ((cal && cal.events) || [])
    .filter(isCoaching)
    .filter(ev => (now - ev.start) < 90 * 60e3)
    .filter(ev => !ahead.some(r => r.at && Math.abs(r.at - ev.start) < 10 * 60e3))
    .map(ev => ({ session: 'On the calendar', name: ev.title, when: whenText_(ev.start), at: ev.start.toISOString(), status: 'booked', link: '', source: 'calendar' }));
  const sessions = ahead.map(r => ({ session: r['session'], name: r['name'], when: r['when (Central)'], at: r.at ? r.at.toISOString() : null, status: r['status'], link: r['open in Calendly'], source: 'calendly' }))
    .concat(calAhead)
    .sort((a, b) => (a.at ? new Date(a.at) : new Date(8.64e15)) - (b.at ? new Date(b.at) : new Date(8.64e15)))
    .slice(0, 30);

  const feed = {
    generated: now.toISOString(),
    build: FD.BUILD,
    cohort: {
      name: cfg.cohortName,
      firstNight: cfg.firstNight ? cfg.firstNight.toISOString().slice(0, 10) : null,
      roomSize: cfg.roomSize,
      seated: seated,
      openSpots: Math.max(0, cfg.roomSize - seated),
      agreementSigned: roster.filter(r => r['Before We Meet']).length,
      answersIn: roster.filter(r => r['answers in']).length,
      answersWaiting: roster.filter(r => r['Before We Meet'] && !r['answers in']).length,
      seatedNoAgreement: roster.filter(r => r['seated'] && !r['Before We Meet'] && !r['answers in']).length,
      waitList: roster.filter(r => r['wait list'] && !r['seated']).length,
      accountOnly: roster.filter(r => r['stage'] === 'Account only').length
    },
    beforeWeMeet: {
      meaning: 'Two different things. agreement = the signed form with his details. answers = the twelve questions he writes at /your-answers. Never treat them as one. Each man has a door: Group, One-on-one, or Group and one-on-one. A one-on-one man has already started coaching, so no answers from him is overdue, not upcoming.',
      answersIn: roster.filter(r => r['answers in']).map(r => (r['name'] || r['email']) + ' (' + doorOfRow_(r) + ')'),
      signedAgreementNoAnswers: roster.filter(r => r['Before We Meet'] && !r['answers in']).map(r => (r['name'] || r['email']) + ' (' + doorOfRow_(r) + ')'),
      answersInNoAgreement: roster.filter(r => r['answers in'] && !r['Before We Meet']).map(r => (r['name'] || r['email']) + ' (' + doorOfRow_(r) + ')'),
      seatedNoAgreementNoAnswers: roster.filter(r => r['seated'] && !r['Before We Meet'] && !r['answers in']).map(r => (r['name'] || r['email']) + ' (' + doorOfRow_(r) + ')')
    },
    roster: roster.map(r => ({
      name: r['name'] || '', email: r['email'], stage: r['stage'], hereFor: r['here for'] || '', door: doorOfRow_(r), referredBy: r['referred by'] || '',
      waitList: iso(r['wait list']), agreementSigned: iso(r['Before We Meet']), account: iso(r['account made']), seated: iso(r['seated']), awt: iso(r['After We Talk']),
      answersIn: iso(r['answers in']), phone: r['phone'] || '', reach: r['reach him by'] || '',
      lastActivity: iso(r['last activity']), notes: r['notes'] || '',
      askedAgreement: askedStamp_('agreement', r['email']), askedAnswers: askedStamp_('answers', r['email'])
    })).sort((a, b) => (b.lastActivity || '').localeCompare(a.lastActivity || '')),
    actions: actions.filter(a => a['status'] === 'open').map(a => ({
      key: a['key'], owner: a['owner'], do: a['do this'], for: a['for'], because: a['because'], link: a['link'], firstSeen: iso(a['first seen']), rule: a['rule'],
      asked: askedAt_(a['key'])
    })),
    doneThisWeek: actions.filter(a => a['status'] === 'done' && a['done at'] && toDate_(a['done at']) >= d7).length,
    inbound: {
      last7: theirs.filter(r => toDate_(r['received']) >= d7).length,
      ours7: inbound.length - theirs.length,
      byKind7: byKind7,
      storyPieces7: byKind7['Story piece saved'] || 0,
      keptInInbox: theirs.filter(r => !String(r['handling']).startsWith('captured')).length,
      recent: theirs.slice(-40).reverse().map(r => ({ received: iso(r['received']), source: r['source'], kind: r['kind'], name: r['name'] || '', email: r['email'] || '', summary: String(r['summary'] || '').slice(0, 220), link: r['open in Gmail'] }))
    },
    payments: {
      count30: payments.filter(r => toDate_(r['received']) >= d30).length,
      total30: payments.filter(r => toDate_(r['received']) >= d30).reduce((s, r) => s + Number(r['amount'] || 0), 0),
      recent: payments.slice(-15).reverse().map(r => ({ received: iso(r['received']), amount: Number(r['amount'] || 0), from: r['from'], what: r['what for'], matched: r['matched man'], link: r['open in Stripe'] }))
    },
    room: roomFeed_(ss, cfg),
    search: search || null,
    coaching: {
      upcoming: sessions,
      calendars: { read: cfg.sessionCalendars.filter(id => !((cal && cal.missing) || []).includes(id)), missing: (cal && cal.missing) || [] }
    },
    lastRun: { read: captured.read, archived: captured.archived },
    claude: claudeHealth_()
  };
  // build 20 — the pathway, the words, this week
  try { feed.moves = movesFeed_(ss, cfg, search, themes || []); } catch (e) { feed.moves = null; alert_('The moves could not be built: ' + e + '\n' + (e.stack || '')); }
  try { feed.words = wordsFeed_(ss); } catch (e) { feed.words = []; }
  try { feed.week = weekStory_(ss, cfg, feed, search, acLatest_()); } catch (e) { feed.week = null; alert_('This week could not be written: ' + e + '\n' + (e.stack || '')); }
  const sh = ss.getSheetByName('feed');
  sh.getRange('A1').setValue(JSON.stringify(feed));
  sh.getRange('A2').setValue('Written by the Front Desk script every 5 minutes (build ' + FD.BUILD + '). The Front Desk page reads A1. Do not edit.');
}

// ───────────────────────────── build 17 · the Pieces tab and the search story ─────────────────────────────

/**
 * Makes the Pieces tab (the record of every piece and course: name, address, pace, what it asks of him) and the two Config rows
 * the first time a run happens after this build is pasted. Cheap on every later run: one sheet lookup.
 */
function ensureBuild17_(ss) {
  let sh = ss.getSheetByName('Pieces');
  if (!sh) {
    sh = ss.insertSheet('Pieces');
    const want = FD.TABS.Pieces;
    sh.getRange(1, 1, 1, want.length).setValues([want]);
    sh.setFrozenRows(1);
    sh.getRange(2, 3, 500, 1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['Direction', 'Work', 'Walk', 'Return'], true).setAllowInvalid(false).build());
    sh.setColumnWidth(1, 220); sh.setColumnWidth(2, 300); sh.setColumnWidth(3, 90); sh.setColumnWidth(4, 520);
  }
  const props = PropertiesService.getScriptProperties();
  if (props.getProperty('fd:b17') !== '1') { ensureConfig_(); props.setProperty('fd:b17', '1'); }
}

// ───────────────────────────── build 19 · the Weeks tab and the seeded Pieces tab ─────────────────────────────

const SITE_ = 'https://www.ancientpathcoaching.com';
/** Breaking Free — Jeremiah's Journey, as ruled Oct 11, 2026. Section titles read from the course player (student-course) that day. */
const WEEKS_SEED_ = [
  [1, '2026-10-07', 'Start Here, Orientation and Week 1 — The Enemy Knows You', '', ''],
  [2, '2026-10-14', 'Week 2 — There Are No Rules In This Fight', 'Write a Lament', SITE_ + '/write-a-lament'],
  [3, '2026-10-21', 'Week 3 — Dad Knew What He Was Doing', '', ''],
  [4, '2026-10-28', 'Week 4 — Battle Is in the Brain', '', ''],
  [5, '2026-11-04', 'Week 5 — The Ancient Path Is Not Linear', '', ''],
  [6, '2026-11-11', 'Week 6 — Stand Firm Then', '', ''],
  [7, '2026-11-18', "Week 7 — How You're Being Attacked", '', ''],
  [8, '2026-11-25', 'Week 8 — Memories Are Roots', '', ''],
  [9, '2026-12-02', 'Week 9 — Roots Run Deep', "Where I'm From", SITE_ + '/where-i-am-from'],
  [10, '2026-12-09', 'Week 10 — Knowing Is Half the Battle', '', ''],
  [11, '2026-12-16', 'Week 11 — Prepare for Enemy Reinforcements', '', ''],
  [12, '2026-12-23', 'Week 12 — Orientation Is Over', 'Ending Well, then Set a Stone',
    SITE_ + '/path-player?courseid=student-course&unit=6ac01a803708b7aebd0eef32Unit\n' + SITE_ + '/set-a-stone']
];
const DIRECTION_ = 'One sitting.';
const WORK_ = 'Take your time. Come back to it over a few days.';
const WALK_ = 'Built to be taken slowly. Do the work in each section before you move on.';
/** The pace table, ruled Oct 9 and Oct 11, 2026: name · address · pace · what this asks of you · note. */
const PIECES_SEED_ = [
  ['What Kind of Light Am I', SITE_ + '/what-kind-of-light', 'Direction', DIRECTION_, ''],
  ['Asked of Me', SITE_ + '/asked-of-me', 'Direction', DIRECTION_, ''],
  ['Where Are You?', SITE_ + '/where-are-you', 'Direction', DIRECTION_, ''],
  ['Bitter', SITE_ + '/blog/bitter', 'Direction', DIRECTION_, 'hub reading'],
  ['What Your Anger Is For', SITE_ + '/blog/what-your-anger-is-for', 'Direction', DIRECTION_, 'hub reading'],
  ['Why It Stays With You', SITE_ + '/blog/why-it-stays-with-you', 'Direction', DIRECTION_, 'hub reading'],
  ["When You're Angry With Him", SITE_ + '/blog/angry-with-him', 'Direction', DIRECTION_, 'hub reading'],
  ["Where I'm From", SITE_ + '/where-i-am-from', 'Work', WORK_, ''],
  ['Write a Lament', SITE_ + '/write-a-lament', 'Work', WORK_, ''],
  ['Your Next Step', '', 'Work', WORK_, 'the story piece at the end of a course; no page of its own'],
  ['Ending Well', SITE_ + '/path-player?courseid=student-course&unit=6ac01a803708b7aebd0eef32Unit', 'Work', WORK_, 'Breaking Free, Week 12'],
  ['Set a Stone', SITE_ + '/set-a-stone', 'Return', 'Set it once, then choose when you come back: three months or a year.', ''],
  ['Known by Jesus', SITE_ + '/course/i-want-you-to-know-me', 'Walk', WALK_, 'course'],
  ['Do Hard Things', SITE_ + '/course/do-hard-things', 'Walk', WALK_, 'course'],
  ['Walk With Me', SITE_ + '/course/walk-with-me', 'Walk', WALK_, 'course'],
  ['Story Path', SITE_ + '/course/the-story-path', 'Walk', 'A set of pieces. There is no order to keep.', 'course'],
  ['Breaking Free', SITE_ + '/course/student-course', 'Walk', 'Twelve Wednesdays. Come with the reading done. The group time builds on what each man brings.', 'on the calendar'],
  ['Weekly Coaching', 'https://calendly.com/john-ancientpathcoaching/weekly-coaching', 'Walk', 'One session a week.', 'coaching'],
  ['Introduction', 'https://calendly.com/john-ancientpathcoaching/introductions', 'Direction', 'One conversation.', 'coaching']
];

/** yyyy-MM-dd (Central) for a Date or a date-like cell. */
function dayOf_(v) { return Utilities.formatDate(toDate_(v), FD.TZ, 'yyyy-MM-dd'); }
/** yyyy-MM-dd plus n days, by the calendar (no clock-change drift). */
function addDays_(day, n) { const p = day.split('-').map(Number); return new Date(Date.UTC(p[0], p[1] - 1, p[2] + n)).toISOString().slice(0, 10); }
/** A yyyy-MM-dd as a Date at noon Central-ish, safe to show as a day. */
function dayDate_(day) { const p = day.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2], 12); }

/** Makes the Weeks tab and seeds both tabs the first time a run finds them empty. Never writes over a row somebody filled. */
function ensureBuild19_(ss) {
  let wk = ss.getSheetByName('Weeks');
  if (!wk) {
    wk = ss.insertSheet('Weeks');
    wk.getRange(1, 1, 1, FD.TABS.Weeks.length).setValues([FD.TABS.Weeks]);
    wk.setFrozenRows(1);
    [60, 130, 380, 220, 380, 420, 320].forEach((w, i) => wk.setColumnWidth(i + 1, w));
  }
  if (wk.getLastRow() < 2) {
    wk.getRange(2, 1, WEEKS_SEED_.length, 7).setValues(WEEKS_SEED_.map(r => [r[0], dayDate_(r[1]), r[2], r[3], r[4], '', '']));
    wk.getRange(2, 2, 200, 1).setNumberFormat('ddd mmm d, yyyy');
    wk.getRange(2, 1, 200, 7).setVerticalAlignment('top').setWrap(true);
  }
  const pc = ss.getSheetByName('Pieces');
  if (pc && pc.getLastRow() < 2) {
    const now = new Date();
    pc.getRange(2, 1, PIECES_SEED_.length, 6).setValues(PIECES_SEED_.map(r => [r[0], r[1], r[2], r[3], now, r[4]]));
    pc.getRange(2, 5, PIECES_SEED_.length, 1).setNumberFormat('mmm d, yyyy');
  }
}

/** The blog's own public list: [{ title, address, day (yyyy-MM-dd Central) }], newest first. Cached an hour. */
function blogPosts_(cfg) {
  const cache = CacheService.getScriptCache();
  const hit = cache.get('fd:blog');
  if (hit) return JSON.parse(hit);
  const out = [];
  for (let page = 1; page <= 5; page++) {
    const res = UrlFetchApp.fetch(SITE_ + '/api/blogPostsAllPublicPaginated?limit=40&page=' + page + '&site_template=true', { muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) throw new Error('the blog list answered ' + res.getResponseCode());
    const j = JSON.parse(res.getContentText());
    (j.blogPosts || []).forEach(p => {
      const when = Number(p.published || p.created || 0);
      if (!p.slug || !when) return;
      out.push({ title: String(p.title || p.slug), slug: String(p.slug), address: SITE_ + '/blog/' + p.slug, day: dayOf_(new Date(when * 1000)), at: when * 1000 });
    });
    const pg = j.pagination || {};
    if (!pg.totalPages || page >= pg.totalPages) break;
  }
  out.sort((a, b) => b.at - a.at);
  cache.put('fd:blog', JSON.stringify(out), 3600);
  return out;
}

/** Fills the article column: every post published Thursday through Wednesday of the row's week, once that week has begun. */
function fillWeekArticles_(ss, cfg) {
  const sh = ss.getSheetByName('Weeks');
  if (!sh || sh.getLastRow() < 2) return;
  const H = headerIndex_(sh);
  const cWed = H['Wednesday'], cArt = H['article (filled by the script)'];
  if (cWed === undefined || cArt === undefined) return;
  const n = sh.getLastRow() - 1;
  const wed = sh.getRange(2, cWed + 1, n, 1).getValues();
  const have = sh.getRange(2, cArt + 1, n, 1).getValues();
  const today = dayOf_(new Date()), now = Date.now();
  const posts = blogPosts_(cfg).filter(p => p.at <= now && cfg.articlesSkip.indexOf(p.slug.toLowerCase()) < 0);
  let changed = false;
  const want = wed.map((r, i) => {
    if (!(r[0] instanceof Date)) return [have[i][0]];
    const end = dayOf_(r[0]), start = addDays_(end, -6);
    if (start > today) return [have[i][0]];
    const text = posts.filter(p => p.day >= start && p.day <= end).reverse().map(p => p.title + '\n' + p.address).join('\n\n');
    if (text !== String(have[i][0] || '')) changed = true;
    return [text];
  });
  if (changed) sh.getRange(2, cArt + 1, n, 1).setValues(want);
}

/** The Weeks row for a cohort night (yyyy-MM-dd), or null. */
function weekRow_(ss, night) {
  const sh = ss.getSheetByName('Weeks');
  if (!sh) return null;
  return rows_(sh).find(r => r['Wednesday'] instanceof Date && dayOf_(r['Wednesday']) === night) || null;
}

/** The piece lines for the reminder: one line naming the piece(s), then each bare address alone on its line. [] when the row names none. */
function pieceLines_(week) {
  if (!week) return [];
  const names = String(week['piece introduced'] || '').trim();
  const addrs = String(week['piece address'] || '').split(/\s*\n\s*/).map(s => s.trim()).filter(s => /^https?:\/\//.test(s));
  if (!names || !addrs.length) return [];
  const each = names.split(/\s*,\s*then\s+|\s*,\s*|\s+then\s+|\s+and\s+/).filter(Boolean);
  if (addrs.length === 1 || each.length !== addrs.length) return ['This week introduces ' + names + ':', '', addrs[0], ''];
  const out = ['This week introduces ' + names + '.', ''];
  each.forEach((nm, i) => { out.push(nm + ':', '', addrs[i], ''); });
  return out;
}

const MONTH3_ = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** "Oct 2026", "October 2026" or "2026-10-01" → "2026-10". Anything else → "". */
function monthKey_(v) {
  const s = String(v == null ? '' : v).trim();
  let m = /^(\d{4})-(\d{2})/.exec(s);
  if (m) return m[1] + '-' + m[2];
  m = /^([A-Za-z]{3})[A-Za-z]*\.?,?\s+(\d{4})$/.exec(s);
  if (m) { const i = MONTH3_.map(x => x.toLowerCase()).indexOf(m[1].toLowerCase()); if (i >= 0) return m[2] + '-' + ('0' + (i + 1)).slice(-2); }
  return '';
}
function monthName_(key) { const p = key.split('-'); return MONTH3_[Number(p[1]) - 1] + ' ' + p[0]; }
function prevMonthKey_(key) {
  let y = Number(key.slice(0, 4)), m = Number(key.slice(5, 7)) - 1;
  if (m < 1) { m = 12; y -= 1; }
  return y + '-' + ('0' + m).slice(-2);
}
function nextMonthKey_(key) {
  let y = Number(key.slice(0, 4)), m = Number(key.slice(5, 7)) + 1;
  if (m > 12) { m = 1; y += 1; }
  return y + '-' + ('0' + m).slice(-2);
}
/** Where the words of a page are changed in LearnWorlds: a site page's own editor (Edit Settings → SEO). A blog post or a course page has no address we know, so the page itself. */
function editorFor_(url) {
  const p = pathOf_(url);
  if (p === '/' || /^\/(blog|course|path-player|author)\b/.test(p) || /[?#]/.test(p)) return '';
  return SITE_ + '/author/pageseditor?page=' + p.replace(/^\//, '');
}
function numOr_(v) { const n = parseFloat(String(v == null ? '' : v).replace(/,/g, '')); return isFinite(n) ? n : null; }
function pathOf_(url) { return String(url || '').replace(/^https?:\/\/[^\/]+/i, '').replace(/[?#].*$/, '') || '/'; }
function place_(n) { return (Math.round(n * 10) / 10).toFixed(1).replace(/\.0$/, ''); }
function times_(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
function change_(now, then, unit) {
  const d = now - then;
  return d > 0 ? 'up ' + d + (unit ? ' ' + unit : '') : d < 0 ? 'down ' + (-d) + (unit ? ' ' + unit : '') : 'no change';
}

/**
 * How men found us. Reads the Search profile sheet (Pages, Monthly log, Profile, Config) and returns the month's story:
 * three sentences and at most one recommendation. Every number is taken from the sheet; null when the sheet is not readable
 * or has no month yet (the page then says so). Never throws.
 */
function searchStory_(cfg) {
  try {
    const ss = SpreadsheetApp.openById(cfg.searchSheetId || FD.SEARCH_SHEET_ID);
    const table = (name) => {
      const sh = ss.getSheetByName(name);
      if (!sh || sh.getLastRow() < 2) return [];
      const d = sh.getDataRange().getDisplayValues(), H = d[0];
      return d.slice(1).filter(r => r.some(v => v !== '')).map(r => { const o = {}; H.forEach((h, i) => { o[h] = r[i]; }); return o; });
    };
    const pages = table('Pages'), log = table('Monthly log'), profile = table('Profile'), conf = table('Config');
    let slipAt = 3;
    conf.forEach(r => { if (String(r['setting']).trim() === 'slip places' && numOr_(r['value']) !== null) slipAt = numOr_(r['value']); });

    const keys = Array.from(new Set(pages.map(r => monthKey_(r['month'])).filter(Boolean))).sort();
    if (!keys.length) return null;
    const cur = keys[keys.length - 1], prev = keys.indexOf(prevMonthKey_(cur)) >= 0 ? prevMonthKey_(cur) : '';
    const monthPages = (k) => pages.filter(r => monthKey_(r['month']) === k).map(r => ({ url: String(r['page']), path: pathOf_(r['page']), imp: numOr_(r['impressions']) || 0, clk: numOr_(r['clicks']) || 0, pos: numOr_(r['position']) }));
    const monthLog = (k) => {
      const o = {};
      log.filter(r => monthKey_(r['Month']) === k).forEach(r => { o[String(r['Phrase'])] = { imp: numOr_(r['Impressions']), clk: numOr_(r['Clicks']), pos: numOr_(r['Position']) }; });
      return o;
    };
    const sum = (rows, f) => rows.reduce((s, r) => s + r[f], 0);
    const curP = monthPages(cur), prevP = prev ? monthPages(prev) : [];
    const imp = sum(curP, 'imp'), clk = sum(curP, 'clk');
    const titleOf = (url) => { const p = profile.find(r => String(r['Address']).trim() === url && String(r['Holds it']).trim() && !/^none yet$/i.test(String(r['Holds it']).trim())); return p ? String(p['Holds it']).trim() : ''; };
    const label = (pg) => pg.path === '/' ? 'the home page' : pg.path + (titleOf(pg.url) ? ' (“' + titleOf(pg.url) + '”)' : '');
    const sentences = [];

    // 1 · showings and clicks against last month (plain words: Google showed our pages, people clicked through)
    const people = (n) => n === 1 ? '1 person' : n + ' people';
    const rate = imp ? ' — about ' + Math.max(1, Math.round(100 * clk / imp)) + ' in 100' : '';
    if (prev) {
      const pimp = sum(prevP, 'imp'), pclk = sum(prevP, 'clk');
      sentences.push('Google showed our pages ' + times_(imp, 'time', 'times') + ' in ' + monthName_(cur) + ' (' + change_(imp, pimp) + ' on ' + monthName_(prev) + ') and ' + people(clk) + ' clicked through (' + change_(clk, pclk) + ').');
    } else {
      sentences.push('Google showed our pages ' + times_(imp, 'time', 'times') + ' in ' + monthName_(cur) + ' and ' + people(clk) + ' clicked through' + (clk ? rate : '') + '. ' + monthName_(cur) + ' is the first month on the record, so there is nothing to compare it with yet; the comparison starts in ' + monthName_(nextMonthKey_(cur)) + '.');
    }

    // 2 · the phrase that moved most
    const L1 = monthLog(cur), L0 = prev ? monthLog(prev) : {};
    let phraseMove = null;
    Object.keys(L1).forEach(p => {
      if (L1[p].pos === null || !L0[p] || L0[p].pos === null) return;
      const gained = L0[p].pos - L1[p].pos; // positive = moved up the page
      if (!phraseMove || Math.abs(gained) > Math.abs(phraseMove.gained)) phraseMove = { phrase: p, from: L0[p].pos, to: L1[p].pos, gained: gained };
    });
    const phrases = Object.keys(L1), shown = phrases.filter(p => (L1[p].imp || 0) > 0);
    if (phraseMove && phraseMove.gained !== 0) {
      sentences.push('The search that moved most was “' + phraseMove.phrase + '”: from place ' + place_(phraseMove.from) + ' to place ' + place_(phraseMove.to) + ', ' + (phraseMove.gained > 0 ? 'up ' : 'down ') + times_(Math.abs(Math.round(phraseMove.gained * 10) / 10), 'place', 'places') + ' (page 1 of Google is places 1 to 10).');
    } else if (shown.length) {
      shown.sort((a, b) => L1[b].imp - L1[a].imp);
      const top = shown[0];
      sentences.push('Of the ' + phrases.length + ' searches we aim at, ' + shown.length + ' ' + (shown.length === 1 ? 'has' : 'have') + ' shown up in Google so far. The one shown most is “' + top + '”: ' + times_(L1[top].imp, 'time', 'times') + ', at place ' + place_(L1[top].pos) + ' on average (page 1 is places 1 to 10).');
    } else {
      sentences.push('None of the ' + phrases.length + ' searches we aim at has shown up in Google yet; the articles are too new to be found.');
    }

    // 3 · the page that slipped most
    let pageSlip = null;
    prevP.forEach(o => {
      const n = curP.find(x => x.url === o.url);
      if (!n || n.pos === null || o.pos === null || n.imp < 1) return;
      const lost = n.pos - o.pos; // positive = fell down the page
      if (!pageSlip || lost > pageSlip.lost) pageSlip = { pg: n, from: o.pos, to: n.pos, lost: lost };
    });
    if (pageSlip && pageSlip.lost > 0) {
      sentences.push('The page that slipped most is ' + label(pageSlip.pg) + ': from place ' + place_(pageSlip.from) + ' to place ' + place_(pageSlip.to) + ', down ' + times_(Math.round(pageSlip.lost * 10) / 10, 'place', 'places') + '.');
    } else if (pageSlip) {
      sentences.push('No page lost ground since ' + monthName_(prev) + '.');
    } else {
      const top = curP.slice().sort((a, b) => b.imp - a.imp)[0];
      sentences.push((top ? 'The page Google shows most is ' + label(top) + ': ' + times_(top.imp, 'time', 'times') + (top.pos !== null ? ', at place ' + place_(top.pos) + ' on average' : '') + '. ' : '') + 'No page can be said to have slipped until there are two months to compare.');
    }

    // the recommendation: a slipped page, then a slipped phrase, then the page men see most and do not click
    const key = 'search:' + cur, sheetUrl = 'https://docs.google.com/spreadsheets/d/' + (cfg.searchSheetId || FD.SEARCH_SHEET_ID) + '/edit';
    let rec = null;
    if (pageSlip && pageSlip.lost >= slipAt) {
      rec = { key: key, do: 'Look at the page that slipped', for: label(pageSlip.pg),
        because: 'It lost ' + times_(Math.round(pageSlip.lost * 10) / 10, 'place', 'places') + ' since ' + monthName_(prev) + ', from place ' + place_(pageSlip.from) + ' to place ' + place_(pageSlip.to) + '. Open it and read its title and first line the way a man searching would.',
        link: pageSlip.pg.url, linkLabel: 'Open the page' };
    } else if (phraseMove && -phraseMove.gained >= slipAt) {
      const row = profile.find(r => String(r['Phrase']).trim() === phraseMove.phrase && /^https?:/.test(String(r['Address'])));
      rec = { key: key, do: 'Look at the page behind a phrase that slipped', for: '“' + phraseMove.phrase + '”',
        because: 'It lost ' + times_(Math.round(-phraseMove.gained * 10) / 10, 'place', 'places') + ' since ' + monthName_(prev) + ', from place ' + place_(phraseMove.from) + ' to place ' + place_(phraseMove.to) + '.',
        link: row ? String(row['Address']) : sheetUrl, linkLabel: row ? 'Open the page' : 'Open the search sheet' };
    } else {
      const skip = /\/(cookies|privacy|terms|contact|apply|ministry-agreement|standalone-form|investment|locations)/;
      const cands = curP.filter(p => p.path !== '/' && !skip.test(p.path) && p.clk === 0 && p.imp >= 5 && p.pos !== null && p.pos <= 12).sort((a, b) => b.imp - a.imp);
      if (cands.length) {
        const p = cands[0];
        rec = { key: key, do: 'Rewrite the words men see for ' + p.path, for: label(p),
          because: 'Google showed it ' + times_(p.imp, 'time', 'times') + ' in ' + monthName_(cur) + ' at place ' + place_(p.pos) + ' on average and no one clicked. Men see it and pass it by, so the title and the line under it are the thing to change. The new words are on the card; open the page\u2019s settings, paste both, save.',
          link: p.url, linkLabel: 'See the page', page: p.url, edit: editorFor_(p.url) };
      }
    }
    return { key: cur, month: monthName_(cur), prevMonth: prev ? monthName_(prev) : '', asOf: (curP.length && pages.find(r => monthKey_(r['month']) === cur) || {})['numbers as of'] || '',
      sentences: sentences, rec: rec, sheet: sheetUrl };
  } catch (e) {
    try { alert_('The search story could not be read: ' + e + '\n' + (e.stack || '')); } catch (x) {}
    return null;
  }
}


// ───────────────────────────── build 20 · the pathway, the names, the asks, the facilitator notes, this week ─────────────────────────────

/** The fixed list of moves. A signal gets exactly one of these. */
const MOVES_ = ['page fix', 'search article', 'poem or lament', 'story board / Your Story piece', 'new course section', 'group', 'branded one-on-one'];
const MOVE_STATUS_ = ['taken', 'done', 'checked', 'dropped'];
/** The words men see for a page: address · old title · old description · new title · new description. Seeded once; John presses Save in LearnWorlds. */
const WORDS_SEED_ = [
  ['https://www.ancientpathcoaching.com/courses', 'Courses — Ancient Path Biblical Coaching',
    'Free self-paced Bible studies and guided cohorts for men walking the Ancient Path — and for the facilitators who walk beside them.',
    'Free online Bible study for men — Ancient Path',
    'A growing library of courses, cohorts, and communities for men walking this path: free online Bible studies to start today, and a twelve-week guided cohort.',
    'approved Oct 11, 2026']
];

/** Makes the Moves, Names and Words tabs and the build 20 Config rows the first time a run finds them missing. Cheap after that. */
function ensureBuild20_(ss) {
  let mv = ss.getSheetByName('Moves');
  if (!mv) {
    mv = ss.insertSheet('Moves');
    mv.getRange(1, 1, 1, FD.TABS.Moves.length).setValues([FD.TABS.Moves]);
    mv.setFrozenRows(1);
    mv.getRange(2, 4, 500, 1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(MOVES_, true).setAllowInvalid(false).build());
    mv.getRange(2, 8, 500, 1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(MOVE_STATUS_, true).setAllowInvalid(false).build());
    mv.getRange(2, 6, 500, 2).setNumberFormat('ddd mmm d, yyyy');
    mv.getRange(2, 9, 500, 1).setNumberFormat('mmm d, yyyy h:mm am/pm');
    [160, 360, 220, 200, 80, 120, 120, 90, 150, 110, 260, 260].forEach((w, i) => mv.setColumnWidth(i + 1, w));
    mv.getRange(2, 1, 500, 12).setVerticalAlignment('top').setWrap(true);
  }
  let nm = ss.getSheetByName('Names');
  if (!nm) {
    nm = ss.insertSheet('Names');
    nm.getRange(1, 1, 1, FD.TABS.Names.length).setValues([FD.TABS.Names]);
    nm.setFrozenRows(1);
    nm.getRange(2, 3, 500, 1).setNumberFormat('mmm d, yyyy h:mm am/pm');
    [260, 220, 170, 220].forEach((w, i) => nm.setColumnWidth(i + 1, w));
  }
  let wd = ss.getSheetByName('Words');
  if (!wd) {
    wd = ss.insertSheet('Words');
    wd.getRange(1, 1, 1, FD.TABS.Words.length).setValues([FD.TABS.Words]);
    wd.setFrozenRows(1);
    [300, 260, 360, 260, 360, 150, 150, 200].forEach((w, i) => wd.setColumnWidth(i + 1, w));
    wd.getRange(2, 1, 500, 8).setVerticalAlignment('top').setWrap(true);
  }
  if (wd.getLastRow() < 2) wd.getRange(2, 1, WORDS_SEED_.length, 8).setValues(WORDS_SEED_.map(r => [r[0], r[1], r[2], r[3], r[4], r[5], '', '']));
  const props = PropertiesService.getScriptProperties();
  if (props.getProperty('fd:b20') !== '1') { ensureConfig_(); props.setProperty('fd:b20', '1'); }
}
function movesGid_(ss) { const sh = ss.getSheetByName('Moves'); return sh ? sh.getSheetId() : 0; }

// ---- names typed on the desk ----
/** email → name from the Names tab (a name typed on the desk). */
function names_(ss) {
  const out = {};
  const sh = ss.getSheetByName('Names');
  if (!sh) return out;
  rows_(sh).forEach(r => { const e = String(r['email'] || '').toLowerCase().trim(); if (e && r['name']) out[e] = String(r['name']).trim(); });
  return out;
}
/** The desk's "Add his name": writes the Names tab, patches the Roster, the Room and the stored feed at once. Admins only. */
function nameSet_(who, b) {
  if (who.role !== 'admin') throw { code: 'not_yet' };
  const email = String(b.email || '').toLowerCase().trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw { code: 'bad_email' };
  const name = String(b.name || '').replace(/\s+/g, ' ').trim();
  if (name.length < 2 || name.length > 80 || /[<>{}=]/.test(name) || /^[=+\-@]/.test(name)) throw { code: 'bad_name' };
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  ensureBuild20_(ss);
  const sh = ss.getSheetByName('Names'), H = headerIndex_(sh), data = sh.getDataRange().getValues();
  let found = false;
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][H['email']] || '').toLowerCase().trim() === email) { sh.getRange(i + 1, H['name'] + 1, 1, 3).setValues([[name, new Date(), who.email]]); found = true; break; }
  }
  if (!found) append_(sh, [[email, name, new Date(), who.email]]);
  ['Roster', 'Room'].forEach(tab => {
    const t = ss.getSheetByName(tab); if (!t) return;
    const TH = headerIndex_(t), d = t.getDataRange().getValues();
    for (let i = 1; i < d.length; i++) if (String(d[i][TH['email']] || '').toLowerCase().trim() === email) t.getRange(i + 1, TH['name'] + 1).setValue(name);
  });
  try {
    const cell = ss.getSheetByName('feed').getRange('A1');
    const feed = JSON.parse(cell.getValue() || 'null');
    if (feed) {
      (feed.roster || []).forEach(r => { if (String(r.email).toLowerCase() === email) r.name = name; });
      ((feed.room && feed.room.men) || []).forEach(m => { if (String(m.email).toLowerCase() === email) m.name = name; });
      (feed.actions || []).forEach(a => { if (keyEmail_(a.key) === email && (!a.for || a.for === email)) a.for = name; });
      cell.setValue(JSON.stringify(feed));
    }
  } catch (e) {}
  return { ok: true, email: email, name: name };
}
function keyEmail_(key) { const m = /^(?:ans|add|askans|agr|bwm|seat|first|wl):([^:\s]+)/.exec(String(key || '')); return m ? m[1].toLowerCase() : ''; }

// ---- the two asks the desk sends itself ----
const AGREEMENT_ASK_SUBJECT = 'One thing before we meet: the agreement';
function agreementAskText_(cfg, name) {
  const first = String(name || '').trim().split(/\s+/)[0];
  return (first && !/@/.test(first) ? first + ',' : 'Hello,') + '\n\n' +
    'Welcome. One thing is still open before we sit down together: the agreement. It is short — your details and the ground rules we keep for you — and it takes a few minutes.\n\n' +
    cfg.agreementUrl + '\n\n' +
    'Our team keeps it on file and no one else sees it.\n\n' +
    'If anything in it raises a question, reply to this email and ask.\n\n' +
    'John\n';
}
/** Which ask a card carries: agreement (agr: bwm:) or answers (askans:). '' for any other card. */
function askKindOf_(key) {
  const k = String(key || '');
  if (/^(agr|bwm):/.test(k)) return 'agreement';
  if (/^askans:/.test(k)) return 'answers';
  return '';
}
function askedStamp_(kind, email) {
  if (!kind || !email) return null;
  try { return PropertiesService.getScriptProperties().getProperty('asked:' + kind + ':' + String(email).toLowerCase().trim()) || null; } catch (e) { return null; }
}
function askedAt_(key) { return askedStamp_(askKindOf_(key), keyEmail_(key)); }
/** The email a card would send, for the owner to read first. Admins only. */
function askText_(who, b) {
  if (who.role !== 'admin') throw { code: 'not_yet' };
  const cfg = readConfig_();
  const kind = String(b.kind || askKindOf_(b.actionKey));
  const email = String(b.email || keyEmail_(b.actionKey) || '').toLowerCase().trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw { code: 'bad_email' };
  if (kind !== 'agreement' && kind !== 'answers') throw { code: 'bad_action' };
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  const man = rows_(ss.getSheetByName('Roster')).find(r => String(r['email']).toLowerCase() === email) || {};
  const name = man['name'] || names_(ss)[email] || '';
  const subject = kind === 'agreement' ? AGREEMENT_ASK_SUBJECT : ANSWERS_REMINDER_SUBJECT;
  const body = kind === 'agreement' ? agreementAskText_(cfg, name) : answersReminderText_(name, answersDoorOf_(man['here for']) || 'bf');
  return { ok: true, kind: kind, email: email, name: name, subject: subject, body: body, cc: cfg.reminderCc, asked: askedStamp_(kind, email) };
}
/** Sends that email from john@ (signed John, Jason in cc), logs it on Sends, stamps the man, and patches the stored feed. Admins only. */
function askSend_(who, b) {
  const t = askText_(who, b);
  const cfg = readConfig_();
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  if (isOurs_(cfg, t.email, t.name)) throw { code: 'ours' };
  const props = PropertiesService.getScriptProperties();
  const dayKey = 'fd:asksent:' + dayStamp_();
  const n = Number(props.getProperty(dayKey) || 0);
  if (n >= 40) throw { code: 'too_many' };
  const opts = { name: 'John Sherrod' };
  if (cfg.reminderCc) opts.cc = cfg.reminderCc;
  GmailApp.sendEmail(t.email, t.subject, t.body, opts);
  const now = new Date();
  props.setProperty(dayKey, String(n + 1));
  props.setProperty('asked:' + t.kind + ':' + t.email, now.toISOString());
  const sends = ss.getSheetByName('Sends');
  if (sends) append_(sends, [[now, (t.kind === 'agreement' ? 'Agreement ask' : 'Answers ask') + ' (from the desk)', t.subject, t.email + (cfg.reminderCc ? ' · cc ' + cfg.reminderCc : ''), 0, 'sent by ' + who.email + (t.name ? ' for ' + t.name : '')]]);
  try {
    const cell = ss.getSheetByName('feed').getRange('A1');
    const feed = JSON.parse(cell.getValue() || 'null');
    if (feed) {
      (feed.actions || []).forEach(a => { if (askKindOf_(a.key) === t.kind && keyEmail_(a.key) === t.email) a.asked = now.toISOString(); });
      (feed.roster || []).forEach(r => { if (String(r.email).toLowerCase() === t.email) r[t.kind === 'agreement' ? 'askedAgreement' : 'askedAnswers'] = now.toISOString(); });
      cell.setValue(JSON.stringify(feed));
    }
  } catch (e) {}
  return { ok: true, kind: t.kind, email: t.email, name: t.name, asked: now.toISOString() };
}

// ---- the facilitator pages: emailed by the script, and read for the room's themes ----
/**
 * Looks at the "For the facilitator" folder. A page named "<room> — Week N — for the facilitator" that has not been announced goes to each
 * facilitator on People whose room matches, once (a stamp per file), logged on Sends. Pages already there when build 20 first runs are
 * stamped without an email. Returns the themes of every page: [{ week, title, theme, words, speaks, file, url }].
 */
function facilitatorNotes_(ss, cfg) {
  if (!cfg.facFolderId) return [];
  const props = PropertiesService.getScriptProperties();
  const firstRun = props.getProperty('fd:b20fac') !== '1';
  const files = [];
  const it = DriveApp.getFolderById(cfg.facFolderId).getFiles();
  while (it.hasNext()) {
    const f = it.next();
    const m = /^(.+?)\s+—\s+Week\s+(\d+)\s+—\s+for the facilitator/i.exec(f.getName());
    if (!m) continue;
    files.push({ id: f.getId(), name: f.getName(), room: m[1].trim(), week: Number(m[2]), url: 'https://docs.google.com/document/d/' + f.getId() + '/edit', updated: f.getLastUpdated() });
  }
  files.sort((a, b) => a.week - b.week);
  const sends = ss.getSheetByName('Sends');
  const me = Session.getEffectiveUser().getEmail();
  files.forEach(f => {
    const stamp = 'facNote:' + f.id;
    if (props.getProperty(stamp)) return;
    if (firstRun || !cfg.facNotesOn) { props.setProperty(stamp, (firstRun ? 'already there at build 20' : 'email off') + ' · ' + new Date().toISOString()); return; }
    const to = people_().filter(p => p.room && p.room.toLowerCase().indexOf(f.room.toLowerCase()) >= 0 && p.email !== me);
    props.setProperty(stamp, new Date().toISOString()); // stamp first: never twice
    to.forEach(p => {
      const first = (p.name || '').split(/\s+/)[0];
      const body = (first ? first + ',' : 'Hello,') + '\n\n' +
        "The notes from Wednesday's session are ready: " + f.name + '.\n\n' +
        f.url + '\n\n' +
        'They cover last week, what the room carried, who to follow up with, what was promised, and what opens this Wednesday.\n\n' +
        'John\n';
      try { GmailApp.sendEmail(p.email, f.room + ' — Week ' + f.week + ' notes are ready', body, { name: 'John Sherrod' }); } catch (e) { alert_('The facilitator note for ' + p.email + ' did not send: ' + e); return; }
      if (sends) append_(sends, [[new Date(), 'Facilitator notes', f.room + ' — Week ' + f.week + ' notes are ready', p.email, 0, f.name]]);
    });
    if (!to.length && sends) append_(sends, [[new Date(), 'Facilitator notes', f.name, '(no facilitator on People for ' + f.room + ')', 0, 'nothing sent']]);
  });
  if (firstRun) props.setProperty('fd:b20fac', '1');
  // the themes, cached per page until the page changes
  const cache = CacheService.getScriptCache();
  const out = [];
  files.forEach(f => {
    const ck = 'fd:themes:' + f.id + ':' + f.updated.getTime();
    let themes = null;
    try { const hit = cache.get(ck); if (hit) themes = JSON.parse(hit); } catch (e) {}
    if (!themes) {
      themes = [];
      try { themes = roomThemes_(DocumentApp.openById(f.id).getBody().getText()); } catch (e) { alert_('Could not read the themes in ' + f.name + ': ' + e); }
      try { cache.put(ck, JSON.stringify(themes), 6 * 3600); } catch (e) {}
    }
    themes.forEach(t => out.push(Object.assign({ week: f.week, room: f.room, file: f.id, url: f.url, page: f.name }, t)));
  });
  return out;
}
/** The three bullets under "What the room carried": [{ theme, words, speaks }]. Never a name: the page itself carries none. */
function roomThemes_(text) {
  const lines = String(text || '').split('\n').map(s => s.trim());
  const start = lines.findIndex(l => /^what the room carried/i.test(l));
  if (start < 0) return [];
  const out = [];
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (!l) continue;
    if (/^(who to follow up with|what was promised|this wednesday|last week)/i.test(l)) break;
    const body = l.replace(/^[\-•*•]\s*/, '');
    const m = /^(.+?[.?!])\s*(.*)$/.exec(body);
    const theme = (m ? m[1] : body).replace(/[.?!]$/, '').trim();
    let rest = m ? m[2] : '', speaks = '';
    const sp = /speaks to it:\s*(.*)$/i.exec(rest);
    if (sp) { speaks = sp[1].trim(); rest = rest.slice(0, sp.index).trim(); }
    if (theme) out.push({ theme: theme, words: rest, speaks: /nothing on our shelf/i.test(speaks) ? '' : speaks });
    if (out.length >= 5) break;
  }
  return out;
}

// ---- the pathway: every signal gets one move ----
/** One move for a room theme, by a plain rule the owner can overrule on the page. */
function moveForTheme_(t) {
  const s = (t.theme + ' ' + t.words).toLowerCase();
  if (/grief|griev|loss|\blost\b|sorrow|mourn|lament|death|died|dying/.test(s)) return 'poem or lament';
  if (/\balone\b|isolat|lonel|accountab|community|friend|together|no one to/.test(s)) return 'group';
  if (/marriage|wife|spouse|crisis|private|addiction|relapse|one-on-one|therap/.test(s)) return 'branded one-on-one';
  if (t.speaks) return 'story board / Your Story piece';
  return 'new course section';
}
function slug_(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60); }
function ringOrder_(r) { const m = /^(\d)/.exec(String(r || '').trim()); return m ? Number(m[1]) : (/off/i.test(String(r || '')) ? 9 : 5); }
/**
 * The feed's moves block: { list: the fixed moves, owners, proposed: [signals not yet taken], taken: [rows on the Moves tab], sheet }.
 * Proposed signals: Search profile Main rows with no page yet (ring order), pages shown and never clicked, the room's themes.
 */
function movesFeed_(ss, cfg, search, themes) {
  const sh = ss.getSheetByName('Moves');
  const taken = sh ? rows_(sh).filter(r => r['key']).map(r => ({
    key: String(r['key']), signal: String(r['signal'] || ''), from: String(r['from'] || ''), move: String(r['move'] || ''), owner: String(r['owner'] || ''),
    due: r['due'] instanceof Date ? dayOf_(r['due']) : '', check: r['check'] instanceof Date ? dayOf_(r['check']) : '', status: String(r['status'] || ''),
    written: r['written'] ? toDate_(r['written']).toISOString() : null, by: String(r['written by'] || ''), note: String(r['note'] || ''), link: String(r['link'] || '')
  })) : [];
  const have = new Set(taken.map(t => t.key));
  const proposed = [];
  const push = (p) => { if (!have.has(p.key) && !proposed.some(x => x.key === p.key)) proposed.push(p); };
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/' + (cfg.searchSheetId || FD.SEARCH_SHEET_ID) + '/edit';
  // the room's themes first: the warmest signal the desk has
  (themes || []).forEach(t => push({ key: 'theme:' + t.week + ':' + slug_(t.theme), kind: 'theme', signal: t.theme + (t.words ? ' — ' + t.words : ''),
    from: 'The room · Week ' + t.week + (t.speaks ? ' · already speaks to it: ' + t.speaks : ''), move: moveForTheme_(t), owner: moveForTheme_(t) === 'group' ? cfg.groupOwner : cfg.coachingOwner, link: t.url, phrase: '' }));
  try {
    const sp = SpreadsheetApp.openById(cfg.searchSheetId || FD.SEARCH_SHEET_ID);
    const table = (name) => { const t = sp.getSheetByName(name); if (!t || t.getLastRow() < 2) return []; const d = t.getDataRange().getDisplayValues(), H = d[0]; return d.slice(1).filter(r => r.some(v => v !== '')).map(r => { const o = {}; H.forEach((h, i) => { o[h] = r[i]; }); return o; }); };
    // pages shown and never clicked (the month on the Pages tab)
    const pages = table('Pages'), profile = table('Profile');
    const keys = Array.from(new Set(pages.map(r => monthKey_(r['month'])).filter(Boolean))).sort();
    if (keys.length) {
      const cur = keys[keys.length - 1];
      const skip = /\/(cookies|privacy|terms|contact|apply|ministry-agreement|standalone-form|investment|locations)/;
      pages.filter(r => monthKey_(r['month']) === cur).map(r => ({ url: String(r['page']), path: pathOf_(r['page']), imp: numOr_(r['impressions']) || 0, clk: numOr_(r['clicks']) || 0, pos: numOr_(r['position']) }))
        .filter(p => p.path !== '/' && !skip.test(p.path) && p.clk === 0 && p.imp >= 8 && p.pos !== null && p.pos <= 12)
        .sort((a, b) => b.imp - a.imp).slice(0, 6)
        .forEach(p => push({ key: 'page:' + slug_(p.path), kind: 'page', signal: p.path + ' — shown ' + times_(p.imp, 'time', 'times') + ' in ' + monthName_(cur) + ' at place ' + place_(p.pos) + ', never clicked',
          from: 'Search profile · Pages · ' + monthName_(cur), move: 'page fix', owner: cfg.searchOwner, link: p.url, phrase: '' }));
    }
    // phrases with no page yet and no draft on the way, ring order
    profile.filter(r => /^main$/i.test(String(r['Main or neighbour'] || '').trim()) && /^none yet/i.test(String(r['Holds it'] || '').trim()) && /^none yet$/i.test(String(r['Status'] || '').trim()) && !/draft/i.test(String(r['Next'] || '')) && ringOrder_(r['Ring']) < 9 && String(r['Phrase'] || '').trim() && !/^to find$/i.test(String(r['Phrase']).trim()))
      .sort((a, b) => ringOrder_(a['Ring']) - ringOrder_(b['Ring'])).slice(0, 6)
      .forEach(r => push({ key: 'phrase:' + slug_(r['Phrase']), kind: 'phrase', signal: '“' + String(r['Phrase']).trim() + '”' + (r['The man'] ? ' — ' + String(r['The man']).trim() : ''),
        from: 'Search profile · ' + String(r['Theme'] || '').trim() + (r['Ring'] ? ' · ring ' + String(r['Ring']).split('—')[0].trim() : ''), move: 'search article', owner: cfg.searchOwner, link: sheetUrl, phrase: String(r['Phrase']).trim() }));
  } catch (e) { alert_('The search signals could not be read: ' + e); }
  const today = dayOf_(new Date());
  return { list: MOVES_.slice(), owners: people_().filter(p => p.role === 'admin').map(p => p.name), dueDay: addDays_(today, cfg.moveDueDays), checkDay: addDays_(today, cfg.moveDueDays + cfg.moveCheckDays),
    proposed: proposed.slice(0, 15), taken: taken.filter(t => t.status !== 'dropped').sort((a, b) => (a.due || '9').localeCompare(b.due || '9')), sheet: 'https://docs.google.com/spreadsheets/d/' + FD.SHEET_ID + '/edit#gid=' + movesGid_(ss) };
}
/** The desk's "Add this move": writes one Moves row, and for a search article the phrase's Next cell on the Search profile. Admins only. */
function moveAdd_(who, b) {
  if (who.role !== 'admin') throw { code: 'not_yet' };
  const cfg = readConfig_();
  const key = String(b.moveKey || '').trim();
  if (!/^(page|phrase|theme|own):[A-Za-z0-9:\-]{1,80}$/.test(key)) throw { code: 'bad_action' };
  const move = String(b.move || '').trim();
  if (MOVES_.indexOf(move) < 0) throw { code: 'bad_move' };
  const signal = bwmSan_(b.signal, 300), from = bwmSan_(b.from, 160), note = bwmSan_(b.note, 300), link = /^https?:\/\//.test(String(b.link || '')) ? String(b.link).slice(0, 300) : '';
  if (!signal) throw { code: 'empty' };
  const owner = String(b.owner || '').trim() || who.name;
  const today = dayOf_(new Date());
  const due = /^\d{4}-\d{2}-\d{2}$/.test(String(b.due || '')) ? String(b.due) : addDays_(today, cfg.moveDueDays);
  const check = /^\d{4}-\d{2}-\d{2}$/.test(String(b.check || '')) ? String(b.check) : addDays_(due, cfg.moveCheckDays);
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  ensureBuild20_(ss);
  const sh = ss.getSheetByName('Moves');
  if (rows_(sh).some(r => String(r['key']) === key)) throw { code: 'have' };
  const now = new Date();
  append_(sh, [[key, signal, from, move, owner, dayDate_(due), dayDate_(check), 'taken', now, who.email, note, link]]);
  let profileNote = '';
  if (move === 'search article' && b.phrase) {
    try {
      const sp = SpreadsheetApp.openById(cfg.searchSheetId || FD.SEARCH_SHEET_ID).getSheetByName('Profile');
      const PH = headerIndex_(sp), d = sp.getDataRange().getValues();
      for (let i = 1; i < d.length; i++) {
        if (String(d[i][PH['Phrase']] || '').trim().toLowerCase() !== String(b.phrase).trim().toLowerCase()) continue;
        const had = String(d[i][PH['Next']] || '');
        if (!/draft/i.test(had)) { sp.getRange(i + 1, PH['Next'] + 1).setValue('Draft the article — from the desk ' + Utilities.formatDate(now, FD.TZ, 'MMM d, yyyy') + (had ? '. ' + had : '')); profileNote = 'The Search profile row now says Draft the article; the Monday/Thursday task picks it up.'; }
        else profileNote = 'The Search profile row already names a draft.';
        break;
      }
    } catch (e) { profileNote = 'The Search profile row could not be written: ' + e; }
  }
  try {
    const cell = ss.getSheetByName('feed').getRange('A1');
    const feed = JSON.parse(cell.getValue() || 'null');
    if (feed && feed.moves) {
      feed.moves.proposed = (feed.moves.proposed || []).filter(p => p.key !== key);
      feed.moves.taken = (feed.moves.taken || []).concat([{ key: key, signal: signal, from: from, move: move, owner: owner, due: due, check: check, status: 'taken', written: now.toISOString(), by: who.email, note: note, link: link }]);
      cell.setValue(JSON.stringify(feed));
    }
  } catch (e) {}
  return { ok: true, key: key, move: move, owner: owner, due: due, check: check, note: profileNote };
}
/** Done or checked on a move, from the Moves list on the page or from a move:/check: card. */
function moveStatus_(ss, key, status) {
  const sh = ss.getSheetByName('Moves'); if (!sh) return false;
  const H = headerIndex_(sh), d = sh.getDataRange().getValues();
  for (let i = 1; i < d.length; i++) {
    if (String(d[i][H['key']] || '') !== key) continue;
    sh.getRange(i + 1, H['status'] + 1).setValue(status);
    try {
      const cell = ss.getSheetByName('feed').getRange('A1');
      const feed = JSON.parse(cell.getValue() || 'null');
      if (feed && feed.moves) { (feed.moves.taken || []).forEach(t => { if (t.key === key) t.status = status; }); if (status === 'dropped') feed.moves.taken = feed.moves.taken.filter(t => t.key !== key); cell.setValue(JSON.stringify(feed)); }
    } catch (e) {}
    return true;
  }
  return false;
}
function moveSet_(who, b) {
  if (who.role !== 'admin') throw { code: 'not_yet' };
  const key = String(b.moveKey || ''), status = String(b.status || '');
  if (MOVE_STATUS_.indexOf(status) < 0) throw { code: 'bad_action' };
  if (!moveStatus_(SpreadsheetApp.openById(FD.SHEET_ID), key, status)) throw { code: 'none' };
  return { ok: true, key: key, status: status };
}

// ---- the words men see ----
function wordsFeed_(ss) {
  const sh = ss.getSheetByName('Words');
  if (!sh) return [];
  return rows_(sh).filter(r => r['address']).map(r => ({ address: String(r['address']).trim(), path: pathOf_(r['address']), oldTitle: String(r['old title'] || ''), oldDesc: String(r['old description'] || ''),
    newTitle: String(r['new title'] || ''), newDesc: String(r['new description'] || ''), approved: String(r['approved'] || ''), installed: String(r['installed'] || ''), note: String(r['note'] || '') }));
}

// ---- this week ----
/** This week, for the owner: four rows — the room, the list, the money, the search — each the fact in plain words, what it means,
 *  one button to the place, and an Ask that fills the question box; then one next step. Every number comes from the desk's own records. */
function weekStory_(ss, cfg, feed, search, ac) {
  const c = feed.cohort || {}, pay = feed.payments || {};
  const money = (n) => '$' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const rows = [];
  // the room
  const seatedMen = (feed.roster || []).filter(r => r.seated), seatedSigned = seatedMen.filter(r => r.agreementSigned).length, seatedAnswered = seatedMen.filter(r => r.answersIn).length;
  const answersLive = cfg.answersFrom ? Utilities.formatDate(cfg.answersFrom, FD.TZ, 'MMM d') : '';
  rows.push({ kind: 'The room',
    fact: (c.seated || 0) + ' of ' + (c.roomSize || 0) + ' seats are taken' + ((c.openSpots || 0) === 0 ? '; the room is full.' : '; ' + times_(c.openSpots, 'open spot', 'open spots') + '.') + ' ' + seatedSigned + ' of the ' + seatedMen.length + ' have signed the agreement (the Jotform); ' + (seatedAnswered ? seatedAnswered + ' ' + (seatedAnswered === 1 ? 'has' : 'have') : 'none has yet') + ' written the twelve questions at /your-answers.',
    means: seatedAnswered === 0 ? 'The twelve questions are the newer step' + (answersLive ? ', live since ' + answersLive : '') + ' — the men signed before it existed, so no one is behind. The Tuesday reminder asks for them; the Before We Meet list below shows who is outstanding, with the ask ready to send.' : 'The Before We Meet list below shows who is outstanding, with the ask ready to send.',
    go: '#bwm-sec', label: 'See who is outstanding', ask: 'Who in the room has not signed the agreement?' });
  // the list
  const men = ac && ac.stages && ac.stages.men;
  if (men && men.on_the_list != null) {
    let since = '';
    try {
      const id = readConfig_().acSheetId;
      const hist = id ? rows_(SpreadsheetApp.openById(id).getSheetByName('history')) : [];
      const same = hist.filter(h => Number(h['men_on_the_list']) === Number(men.on_the_list) && Number(h['hand_raised']) === Number(men.hand_raised) && Number(h['wait_list']) === Number(men.wait_list));
      if (hist.length > 1 && same.length === hist.length) since = ' None of the three has moved since the first count on ' + Utilities.formatDate(toDate_(hist[0]['generated']), FD.TZ, 'MMM d') + '.';
      else if (same.length >= 2) since = ' Unchanged since ' + Utilities.formatDate(toDate_(same[0]['generated']), FD.TZ, 'MMM d') + '.';
    } catch (e) {}
    rows.push({ kind: 'The list',
      fact: 'The email list holds ' + times_(Number(men.on_the_list || 0), 'man', 'men') + '. ' + Number(men.hand_raised || 0) + ' ' + (Number(men.hand_raised) === 1 ? 'has' : 'have') + ' raised a hand to talk; ' + Number(men.wait_list || 0) + ' ' + (Number(men.wait_list) === 1 ? 'is' : 'are') + ' waiting for the next cohort.',
      means: 'The list is the men in ActiveCampaign who hear from us. A hand raised is a man who replied asking to talk; the wait list is men who asked for a seat after the room filled. Counted every Friday' + (ac.generated ? ', last on ' + Utilities.formatDate(toDate_(ac.generated), FD.TZ, 'EEE MMM d') : '') + '.' + since,
      go: '#ac-sec', label: 'See the count', ask: 'Who has a hand raised, and what did he ask for?' });
  }
  // the money
  let plan = '';
  try {
    const sp = SpreadsheetApp.openById(cfg.forecastSheetId || FD.FORECAST_SHEET_ID).getSheetByName('2027 Target');
    if (sp) {
      const d = sp.getDataRange().getDisplayValues();
      const cellAfter = (label) => { const r = d.find(x => String(x[0] || '').trim().toLowerCase() === label); return r ? String(r[1] || '').trim() : ''; };
      const target = cellAfter('target for 2027');
      const hdr = d.findIndex(x => String(x[0] || '').trim().toLowerCase() === 'quarter');
      let q = null, yearPace = '';
      if (hdr >= 0) {
        const Hq = {}; d[hdr].forEach((h, i) => { Hq[String(h).trim().toLowerCase()] = i; });
        const row = d.slice(hdr + 1).find(x => /^q1\b/i.test(String(x[0] || '')));
        if (row) q = { name: String(row[0]).replace(/\s*\(.*$/, ''), goal: row[Hq['goal']] || '', takes: row[Hq['what it takes']] || '' };
        const yr = d.slice(hdr + 1).find(x => /^year$/i.test(String(x[0] || '').trim()));
        if (yr && Hq['monthly pace'] !== undefined) yearPace = yr[Hq['monthly pace']] || '';
      }
      if (target) plan = 'The plan expects nothing to book before January, the first paid cohort. The 2027 target is ' + target + (yearPace ? ', about ' + yearPace + ' a month once it starts' : '') + (q ? '; ' + q.name + '’s goal is ' + q.goal + (q.takes ? ', and it takes ' + String(q.takes).replace(/\.$/, '').replace(/^([a-z])/, (m) => m.toLowerCase()) : '') : '') + '. The pathway below is how those groups and clients get filled.';
    }
  } catch (e) { plan = 'The 2027 target sheet could not be read this run.'; }
  const payNote = (pay.recent || []).slice(0, 1).map(p => (p.what || '').replace(/^Payment of \$[\d.,]+ from /, '').replace(/ for Ancient Path Biblical Coaching$/, '')).filter(Boolean)[0];
  rows.push({ kind: 'The money',
    fact: money(pay.total30) + ' came in over the last thirty days — ' + times_(pay.count30 || 0, 'payment', 'payments') + (payNote && (pay.count30 || 0) === 1 ? ' (' + payNote + ')' : '') + '.',
    means: plan, go: 'https://docs.google.com/spreadsheets/d/' + (cfg.forecastSheetId || FD.FORECAST_SHEET_ID) + '/edit', label: 'Open the plan', ask: 'What has to be true by January to hit the first-quarter goal?' });
  // the search
  rows.push({ kind: 'The search',
    fact: search && search.sentences && search.sentences[0] ? search.sentences[0] : 'The search story is not on the desk yet; it appears once the monthly refresh has put a month on the Search profile.',
    means: search && search.rec ? 'The pages Google shows and men pass by are the pathway’s first signals. The first one to fix: ' + search.rec.for + ' — the new words are on its card.' : 'The pages Google shows and men pass by are the pathway’s first signals.',
    go: '#search-sec', label: 'See the search story', ask: 'Which page do men see most and never click?' });
  // the next step: the soonest taken move, else the first proposed move, else the search card, else the oldest card on the lane
  let next = null;
  const mv = feed.moves || {};
  const taken = (mv.taken || []).filter(t => t.status === 'taken').sort((a, b) => (a.due || '9').localeCompare(b.due || '9'));
  const open = (feed.actions || []).slice().sort((a, b) => String(a.firstSeen || '').localeCompare(String(b.firstSeen || '')));
  if (taken.length) next = { title: 'Make the move: ' + taken[0].move, body: taken[0].signal + (taken[0].due ? ' · due ' + Utilities.formatDate(dayDate_(taken[0].due), FD.TZ, 'MMM d') : '') + ' · ' + (taken[0].owner || ''), go: '#moves-sec', label: 'Open the moves' };
  else if ((mv.proposed || []).length) next = { title: 'Take the first move: ' + mv.proposed[0].move, body: mv.proposed[0].signal, go: '#moves-sec', label: 'See the pathway' };
  else if (search && search.rec) next = { title: search.rec.do, body: search.rec.for, go: '#search-sec', label: 'Open the search story' };
  else if (open.length) next = { title: open[0].do, body: (open[0].for || '') + ' · for ' + open[0].owner, go: '#apc0', label: 'Show me the first one' };
  else next = { title: 'Nothing is waiting', body: 'The lane is clear and no move is open. Read what came in.', go: '#week-sec', label: 'Read what came in' };
  return { rows: rows, sentences: rows.map(r => r.fact), next: next, asOf: new Date().toISOString() };
}

// ---- the words a page should carry: suggested by the desk, approved and installed by the owner ----
/** For the page the search story flags (and any taken page-fix move) with no row on the Words tab: read the page's own title,
 *  description and first words, add the searches men type for it, and ask Claude for the new words once (property words:tried:<path>).
 *  The row lands with approved blank; the owner approves on the card. */
function suggestWords_(ss, cfg, search) {
  const key = claudeKey_();
  if (!key) return;
  const wd = ss.getSheetByName('Words'); if (!wd) return;
  const have = new Set(rows_(wd).map(r => pathOf_(r['address'])));
  const want = [];
  if (search && search.rec && search.rec.page) want.push(search.rec.page);
  const mv = ss.getSheetByName('Moves');
  if (mv) rows_(mv).forEach(m => { if (String(m['move']) === 'page fix' && String(m['status']) === 'taken' && /^https?:\/\//.test(String(m['link'] || ''))) want.push(String(m['link'])); });
  const props = PropertiesService.getScriptProperties();
  for (const url of want) {
    const path = pathOf_(url);
    if (have.has(path) || props.getProperty('words:tried:' + path)) continue;
    props.setProperty('words:tried:' + path, new Date().toISOString()); // once, even if Claude or the page fails
    const page = pageWords_(url);
    if (!page) { alert_('The words suggestion could not read ' + url); continue; }
    const typed = typedFor_(cfg, url);
    const w = askWords_(key, cfg, url, page, typed);
    if (!w) { alert_('Claude gave no usable words for ' + url); continue; }
    append_(wd, [[url, page.title, page.description, w.title, w.description, '', '', 'suggested by the desk ' + Utilities.formatDate(new Date(), FD.TZ, 'MMM d, yyyy') + (w.phrase ? ' · built on “' + w.phrase + '”' : '') + ' · from the page’s own words']]);
    have.add(path);
    break; // one page per run
  }
}
/** The page as a man sees it in a search result: its title, its description, its first words. */
function pageWords_(url) {
  try {
    const res = UrlFetchApp.fetch(url, { muteHttpExceptions: true, followRedirects: true, headers: { 'User-Agent': 'Mozilla/5.0 (Front Desk)' } });
    if (res.getResponseCode() !== 200) return null;
    const html = res.getContentText();
    const m = (re) => { const x = re.exec(html); return x ? decodeEntities_(x[1]).trim() : ''; };
    const title = m(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const desc = m(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) || m(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i) || m(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']*)["']/i);
    let body = (/<body[\s\S]*$/i.exec(html) || [''])[0].replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<(nav|header|footer)[\s\S]*?<\/\1>/gi, ' ');
    body = compact_(stripTags_(body)).replace(/\s+/g, ' ').slice(0, 1500);
    return { title: title, description: desc, text: body };
  } catch (e) { return null; }
}
/** What men type that already shows this page: the Profile rows with its address and the Queries seen rows that showed it. */
function typedFor_(cfg, url) {
  const out = [];
  try {
    const sp = SpreadsheetApp.openById(cfg.searchSheetId || FD.SEARCH_SHEET_ID);
    const path = pathOf_(url);
    const table = (name) => { const t = sp.getSheetByName(name); if (!t || t.getLastRow() < 2) return []; const d = t.getDataRange().getDisplayValues(), H = d[0]; return d.slice(1).filter(r => r.some(v => v !== '')).map(r => { const o = {}; H.forEach((h, i) => { o[h] = r[i]; }); return o; }); };
    table('Profile').forEach(r => { if (pathOf_(r['Address']) === path && r['Phrase'] && !/^to find$/i.test(r['Phrase'])) out.push(String(r['Phrase']).trim() + (r['Ring'] ? ' (ring ' + String(r['Ring']).split('—')[0].trim() + ')' : '')); });
    table('Queries seen').forEach(r => { if (pathOf_(r['page it showed']) === path && r['search']) out.push(String(r['search']).trim() + ' (' + times_(numOr_(r['impressions']) || 0, 'showing', 'showings') + ', place ' + r['position'] + ')'); });
    // the Center-ring phrases are the practice's own words for what it offers; useful for a catalog page
    if (!out.length) table('Profile').forEach(r => { if (/^1/.test(String(r['Ring'] || '')) && r['Phrase'] && !/^to find$/i.test(r['Phrase'])) out.push(String(r['Phrase']).trim() + ' (ring 1 Center, no page yet)'); });
  } catch (e) {}
  return Array.from(new Set(out)).slice(0, 12);
}
/** One call to Claude for the search title and description. Returns { title, description, phrase } or null. Lengths are checked here, never trusted. */
function askWords_(key, cfg, url, page, typed) {
  const system = [
    'You write the search title and search description for one page of Ancient Path Biblical Coaching (ancientpathcoaching.com), a men’s coaching practice in Dallas–Fort Worth. A man in need types his problem, not our category; the words must match what the page really offers.',
    'Rules: the search title is 60 characters or fewer, the man’s phrase first, then " — Ancient Path". The search description is 120 to 160 characters: lift the page’s own sentences word for word where you can and work the phrase in; never paraphrase meaning away. Plain, clear words, not formal, not folksy. Never the words "brother", "stranger", "season", "the men who come after you", "the next man", "John and Jason"; say "our team" if the team is named. No exclamation marks, no promises the page does not make.',
    'Answer with JSON only: {"title": "...", "description": "...", "phrase": "the phrase you built on"}.'
  ].join('\n');
  const user = 'PAGE: ' + url + '\nCURRENT TITLE: ' + page.title + '\nCURRENT DESCRIPTION: ' + page.description + '\nWHAT MEN TYPE THAT SHOWS THIS PAGE OR SHOULD:\n' + (typed.length ? typed.map(t => '- ' + t).join('\n') : '(nothing recorded yet)') + '\nTHE PAGE’S OWN WORDS (first part):\n' + page.text;
  try {
    const res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
      method: 'post', contentType: 'application/json', muteHttpExceptions: true,
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify({ model: cfg.claudeModel, max_tokens: 400, system: system, messages: [{ role: 'user', content: user }] })
    });
    if (res.getResponseCode() !== 200) { alert_('Words suggestion: Claude answered ' + res.getResponseCode() + ' ' + res.getContentText().slice(0, 300)); return null; }
    const data = JSON.parse(res.getContentText());
    const text = ((data.content || []).map(c => c.text || '').join('')).trim();
    const m = /\{[\s\S]*\}/.exec(text);
    if (!m) return null;
    const j = JSON.parse(m[0]);
    const title = String(j.title || '').replace(/\s+/g, ' ').trim(), desc = String(j.description || '').replace(/\s+/g, ' ').trim();
    if (!title || !desc || title.length > 60 || desc.length < 110 || desc.length > 165) return null;
    if (/brother|stranger|\bseason\b|men who come after|next man|John and Jason/i.test(title + ' ' + desc)) return null;
    return { title: title, description: desc, phrase: String(j.phrase || '').trim() };
  } catch (e) { return null; }
}
/** The desk's Approve and "I installed them" on a words card. Installed also closes the search card for that page. Admins only. */
function wordsSet_(who, b) {
  if (who.role !== 'admin') throw { code: 'not_yet' };
  const address = String(b.address || '').trim(), what = String(b.what || '');
  if (!/^https?:\/\//.test(address) || (what !== 'approve' && what !== 'installed')) throw { code: 'bad_action' };
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  const sh = ss.getSheetByName('Words'); if (!sh) throw { code: 'no_words' };
  const H = headerIndex_(sh), d = sh.getDataRange().getValues();
  const stamp = (what === 'approve' ? 'approved ' : 'installed ') + Utilities.formatDate(new Date(), FD.TZ, 'MMM d, yyyy') + ' by ' + (who.name || who.email);
  let found = false;
  for (let i = 1; i < d.length; i++) {
    if (pathOf_(d[i][H['address']]) !== pathOf_(address)) continue;
    sh.getRange(i + 1, H[what === 'approve' ? 'approved' : 'installed'] + 1).setValue(stamp);
    if (what === 'installed' && !d[i][H['approved']]) sh.getRange(i + 1, H['approved'] + 1).setValue('approved ' + Utilities.formatDate(new Date(), FD.TZ, 'MMM d, yyyy') + ' by ' + (who.name || who.email));
    found = true; break;
  }
  if (!found) throw { code: 'no_words' };
  let closed = '';
  try {
    const cell = ss.getSheetByName('feed').getRange('A1');
    const feed = JSON.parse(cell.getValue() || 'null');
    if (feed) {
      (feed.words || []).forEach(w => { if (pathOf_(w.address) === pathOf_(address)) { if (what === 'approve') w.approved = stamp; else { w.installed = stamp; if (!w.approved) w.approved = stamp.replace(/^installed/, 'approved'); } } });
      if (what === 'installed' && feed.search && feed.search.rec && pathOf_(feed.search.rec.page || feed.search.rec.link) === pathOf_(address)) {
        closed = feed.search.rec.key;
        feed.actions = (feed.actions || []).filter(a => a.key !== closed);
      }
      cell.setValue(JSON.stringify(feed));
    }
  } catch (e) {}
  if (closed) { try { actionDone_(who, { actionKey: closed }); } catch (e) {} }
  return { ok: true, address: address, what: what, value: stamp, closed: closed };
}

// ───────────────────────────── setup helpers ─────────────────────────────

function ensureLabel_() {
  return GmailApp.getUserLabelByName(FD.LABEL) || GmailApp.createLabel(FD.LABEL);
}

function ensureTabs_() {
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  Object.keys(FD.TABS).forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    const want = FD.TABS[name];
    if (!want.length) return;
    const have = sh.getRange(1, 1, 1, want.length).getValues()[0];
    want.forEach((h, i) => { if (have[i] !== h) sh.getRange(1, i + 1).setValue(h); });
    if (sh.getFrozenRows() < 1) sh.setFrozenRows(1);
    if (name === 'Keys' && !sh.isSheetHidden()) sh.hideSheet();
  });
}
/**
 * build 12: adds the Config rows this build reads, if they are not there, and stamps "answers asked from" with today
 * (Central) when it is blank. Never changes a value somebody has set.
 */
function ensureConfig_() {
  const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Config');
  const data = sh.getDataRange().getValues();
  const at = {};
  for (let i = 1; i < data.length; i++) if (data[i][0]) at[String(data[i][0]).trim()] = i;
  const want = [
    ['answers asked from', dayStamp_(), 'The day the Before We Meet piece went live. Only men whose agreement is dated on or after it are asked for answers (the card and the reminder). Clear it to turn both off; set it earlier to ask earlier men.'],
    ['answers wait days', 4, 'Days after the signed agreement before "Ask him for his answers" shows on the lane.'],
    ['answers reminder', 'yes', 'yes/no. One reminder email from john@ to a man who signed the agreement and has no answers. Once, never twice.'],
    ['answers reminder days', 3, 'Days after the signed agreement before that reminder goes.'],
    ['search profile sheet id', FD.SEARCH_SHEET_ID, 'The Ancient Path — Search profile sheet the "How men found us" section reads (Pages, Monthly log, Profile, Config). Read only.'],
    ['search owner', 'John', 'Whose lane the monthly search recommendation lands in.'],
    ['agreement address', 'https://www.ancientpathcoaching.com/before-we-meet', 'The address the agreement ask email carries, alone on its own line.'],
    ['forecast sheet id', FD.FORECAST_SHEET_ID, 'The January Forecast sheet; "This week" reads its "2027 Target" tab. Read only.'],
    ['facilitator notes folder id', FD.FAC_FOLDER_ID, 'The "For the facilitator" Drive folder. A new "Week N — for the facilitator" page there is emailed to the room\'s facilitators and its themes become signals for the pathway.'],
    ['facilitator notes email', 'yes', 'yes/no. Email each facilitator when a new week\'s page lands in that folder. Once per page.'],
    ['move due days', 14, 'Days from today to the due date a new move gets.'],
    ['move check days', 30, 'Days after the due date to the check date (did the move change the signal?).'],
    ['group owner', 'Jason', 'Who owns a "group" move.']
  ];
  want.forEach(w => {
    if (at[w[0]] === undefined) { append_(sh, [w]); return; }
    if (w[0] === 'answers asked from' && (data[at[w[0]]][1] === '' || data[at[w[0]]][1] == null)) sh.getRange(at[w[0]] + 1, 2).setValue(w[1]);
  });
}
/** Writes the two founders to People when the tab is empty. Anyone else is a row added by hand: email · name · role (admin or facilitator) · room. */
function seedPeople_() {
  const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('People');
  if (sh.getLastRow() > 1) return;
  const now = new Date();
  append_(sh, FD.FOUNDERS.map(f => [f[0], f[1], f[2], f[3], now, '', 'added by build 5']));
}

function formatDateColumns_() {
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  const fmt = 'mmm d, yyyy h:mm am/pm';
  const cols = {
    Roster: ['wait list', 'Before We Meet', 'account made', 'seated', 'After We Talk', 'last activity', 'answers in'],
    Inbound: ['captured', 'received'], Payments: ['received'], Coaching: ['booked'], Actions: ['first seen', 'done at'], Room: ['when (Central)'], Sends: ['sent'], Answers: ['received'], Names: ['added'], Moves: ['written']
  };
  Object.keys(cols).forEach(tab => {
    const sh = ss.getSheetByName(tab); const H = headerIndex_(sh);
    cols[tab].forEach(c => { if (H[c] !== undefined) sh.getRange(2, H[c] + 1, sh.getMaxRows() - 1, 1).setNumberFormat(fmt); });
  });
  const pay = ss.getSheetByName('Payments'); const HP = headerIndex_(pay);
  pay.getRange(2, HP['amount'] + 1, pay.getMaxRows() - 1, 1).setNumberFormat('$#,##0.00');
  const act = ss.getSheetByName('Actions'); const HA = headerIndex_(act);
  act.getRange(2, HA['mark done by hand'] + 1, act.getMaxRows() - 1, 1).insertCheckboxes();
}

function installTrigger_() {
  ScriptApp.getProjectTriggers().forEach(t => { if (t.getHandlerFunction() === 'run' || t.getHandlerFunction() === 'sendTuesdayReminder') ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('run').timeBased().everyMinutes(5).create();
  // build 9: the Tuesday reminder, 7:00 PM Central (Apps Script fires it within a few minutes of the hour).
  ScriptApp.newTrigger('sendTuesdayReminder').timeBased().onWeekDay(ScriptApp.WeekDay.TUESDAY).atHour(19).nearMinute(0).inTimezone(FD.TZ).create();
}


// ───────────────────────────── build 9: John's calendars ─────────────────────────────

/** Sessions on the calendars named in Config "session calendars", from 90 minutes ago to five weeks out. A calendar the script cannot open is reported, not guessed. */
function calendarSessions_(cfg) {
  const out = { events: [], missing: [] };
  const from = new Date(Date.now() - 90 * 60e3), to = new Date(Date.now() + 35 * 864e5);
  cfg.sessionCalendars.forEach(id => {
    let cal = null;
    try { cal = id.toLowerCase() === 'primary' ? CalendarApp.getDefaultCalendar() : CalendarApp.getCalendarById(id); } catch (e) { cal = null; }
    if (!cal) { out.missing.push(id); return; }
    let evs = [];
    try { evs = cal.getEvents(from, to); } catch (e) { out.missing.push(id); return; }
    evs.forEach(ev => {
      try {
        if (ev.isAllDayEvent()) return;
        const guests = ev.getGuestList(true).map(g => String(g.getEmail() || '').toLowerCase()).filter(Boolean);
        out.events.push({ title: String(ev.getTitle() || ''), start: ev.getStartTime(), end: ev.getEndTime(), guests: guests, calendar: id });
      } catch (e) { /* one odd event never stops the read */ }
    });
  });
  out.events.sort((a, b) => a.start - b.start);
  return out;
}
/** A Date → Calendly's own shape, "7:00pm Wed, Oct 7, 2026", so the page shows both sources the same way. */
function whenText_(d) {
  return Utilities.formatDate(toDate_(d), FD.TZ, 'h:mma EEE, MMM d, yyyy').replace(/AM|PM/, m => m.toLowerCase());
}

// ───────────────────────────── build 9: the Tuesday reminder ─────────────────────────────

const REMINDER_SUBJECT = 'Tomorrow night, 7:00';
/** build 19.1: the answers ask, for a man whose answers are not in yet. The address sits alone on its own line.
 *  A function, not a constant: ANSWERS_URL is declared further down the file. */
function answersAsk_() { return [
  'One more thing before Wednesday: answer the questions about why you came and what you want to learn about yourself. A few sentences each is enough. Our team reads them. No one else does, and nothing there is ever published.',
  '',
  ANSWERS_URL + '?door=bf',
  ''
]; }
function reminderText_(cfg, week, askAnswers) {
  return [
    'Hello,',
    '',
    'Tomorrow, Wednesday, 7:00 PM Central.',
    '',
    "Come with this week's reading done and your notes in hand. The group time builds on what each man brings to it.",
    '',
  ].concat(pieceLines_(week), askAnswers ? answersAsk_() : [], [
    "Sign in, open Breaking Free, and press Join on this week's session card. Give yourself five minutes before seven in case the site asks you to sign in again.",
    '',
    'https://www.ancientpathcoaching.com/path-player?courseid=' + cfg.courseId,
    '',
    "If you can't be there, reply to this email and tell me before Wednesday. The room is built on the men in it showing up for each other, so every night matters.",
    '',
    'John'
  ]).join('\n');
}
/** The cohort's Wednesdays as yyyy-MM-dd (Central): "first night" on Config, then every seven days for "cohort weeks". */
function cohortNights_(cfg) {
  const start = cfg.firstNight ? Utilities.formatDate(cfg.firstNight, FD.TZ, 'yyyy-MM-dd') : '2026-10-07';
  const [y, m, d] = start.split('-').map(Number);
  const nights = [];
  for (let k = 0; k < cfg.cohortWeeks; k++) nights.push(new Date(Date.UTC(y, m - 1, d + 7 * k)).toISOString().slice(0, 10));
  return nights;
}
/** The timer's job. Sends only when tomorrow is one of the cohort's nights, and only once per night. */
function sendTuesdayReminder() { sendReminder_(false); }
/** The email the men will get for the next cohort night, to the founders only (to john@, cc Jason), subject marked [TEST]; nothing goes to the men and nothing is marked sent. */
function sendTuesdayReminderTest() { sendReminder_(true); }
function sendReminder_(test) {
  const cfg = readConfig_();
  if (!cfg.reminderOn && !test) { Logger.log('Tuesday reminder is off on Config.'); return; }
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  let tomorrow = Utilities.formatDate(new Date(Date.now() + 864e5), FD.TZ, 'yyyy-MM-dd');
  // build 19: a test shows the email for the next cohort night, so its piece line can be read before Tuesday.
  if (test && !cohortNights_(cfg).includes(tomorrow)) tomorrow = cohortNights_(cfg).find(d => d >= tomorrow) || tomorrow;
  if (!test && !cohortNights_(cfg).includes(tomorrow)) { Logger.log('No session tomorrow (' + tomorrow + '); nothing sent.'); return; }
  let week = null;
  try { ensureBuild19_(ss); week = weekRow_(ss, tomorrow); } catch (e) { alert_('The Tuesday reminder could not read the Weeks tab (sent without a piece line): ' + e); }
  const props = PropertiesService.getScriptProperties();
  const stamp = 'reminderSent:' + tomorrow;
  if (!test && props.getProperty(stamp)) { Logger.log('Already sent for ' + tomorrow + '.'); return; }
  const men = Array.from(new Set(rows_(ss.getSheetByName('Room')).map(r => String(r['email'] || '').toLowerCase().trim()).filter(e => e && !isOurs_(cfg, e, ''))));
  if (!test && !men.length) { alert_('Tuesday reminder NOT sent for ' + tomorrow + ': the Room tab has no men on it.'); return; }
  const me = Session.getEffectiveUser().getEmail();
  const subject = (test ? '[TEST] ' : '') + REMINDER_SUBJECT;
  const opts = { name: 'John Sherrod' };
  if (cfg.reminderCc) opts.cc = cfg.reminderCc;
  // build 19.1: men whose answers are not in get the version with the ask; the rest get the reminder as before.
  const answered = answersFirstIn_(ss);
  const ask = cfg.answersAskOn ? men.filter(e => !answered.has(e)) : [];
  const plain = men.filter(e => ask.indexOf(e) < 0);
  if (test) {
    GmailApp.sendEmail(me, subject, reminderText_(cfg, week, cfg.answersAskOn), opts);
  } else {
    if (ask.length) GmailApp.sendEmail(me, subject, reminderText_(cfg, week, true), Object.assign({}, opts, { bcc: ask.join(',') }));
    const opts2 = Object.assign({}, opts, { bcc: plain.join(',') });
    if (ask.length) delete opts2.cc; // the cc gets one copy, not two
    if (plain.length) GmailApp.sendEmail(me, subject, reminderText_(cfg, week, false), opts2);
    props.setProperty(stamp, new Date().toISOString());
  }
  const sends = ss.getSheetByName('Sends');
  if (sends) append_(sends, [[new Date(), test ? 'Tuesday reminder (test)' : 'Tuesday reminder', subject, me + (cfg.reminderCc ? ' · cc ' + cfg.reminderCc : ''), test ? 0 : men.length, (test ? 'founders only · as for ' : 'for the session on ') + tomorrow + (pieceLines_(week).length ? ' · piece: ' + week['piece introduced'] : '') + (test ? (cfg.answersAskOn ? ' · with the answers ask (' + ask.length + ' of ' + men.length + ' men would get it)' : '') : ' · ' + ask.length + ' with the answers ask, ' + plain.length + ' without')]]);
  Logger.log((test ? 'Test sent to ' + me : 'Reminder sent to ' + men.length + ' men') + '.');
}

// ───────────────────────────── build 12 · Before We Meet answers ─────────────────────────────

/** The twelve questions, word for word as the piece asks them (the test compares these to the page). */
const BWM_Q = {
  q1: 'What is the reason that has brought you to us?',
  topic: 'Is there something from your life you already know you want to talk about?',
  topicnote: 'Say a little about it, if you want.',
  q2: 'If you could develop yourself in any area whatsoever, what area would you choose?',
  q3: 'How do you know this is an area you need to improve?',
  q4: 'When was the last time something happened that told you this is something you need to work on?',
  q5: 'What happened? How did you feel?',
  q6: 'What happens if you don\u2019t improve on situations like these?',
  q7: 'Project yourself \u201cdown the road\u201d a few years. What are the long-range implications if you don\u2019t improve on these kinds of situations?',
  q8: 'Suppose you could turn this situation around and you get more of what you\u2019re looking for \u2014 what would that do for you?',
  q9: 'And what would that mean?',
  q10: 'What would be important about that to you?',
  q11: 'And, ultimately, what would all this mean to you?',
  q12: 'At that point, what would you know about yourself?',
  god: 'Where are you with God right now?'
};
const BWM_ORDER = ['q1', 'topic', 'topicnote', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'god'];
const BWM_DOORS = { one: 'One-on-one coaching', bf: 'Breaking Free (the twelve-week course)', community: 'A confessional community' };
const BWM_DAY_CAP = 300, BWM_MAN_DAY_CAP = 8;

/** Text only: control characters out, white space squashed, cut to a length. */
function bwmSan_(s, max) {
  return String(s == null ? '' : s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').replace(/\s+/g, ' ').trim().slice(0, max);
}

/** The first time each man's answers came in, by email, from the Answers tab. */
function answersFirstIn_(ss) {
  const m = new Map();
  const sh = ss.getSheetByName('Answers');
  if (!sh) return m;
  rows_(sh).forEach(r => {
    if (r['kind'] !== 'first') return;
    const e = String(r['email'] || '').toLowerCase().trim();
    if (e && !m.has(e)) m.set(e, r['received']);
  });
  return m;
}

/**
 * The public call from the piece on the site: { action:'bwm_answers', email, name, door, answers{...}, since[{d,t}], added }.
 * It carries the whole record every time, so a second send is harmless: his first answers are written once; each thing he
 * adds is written once (hash on email and the words). The original stays as written.
 */
function bwmAnswers_(b) {
  const email = String(b.email || '').toLowerCase().trim();
  if (email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw { code: 'bad_email' };
  const door = String(b.door || '');
  if (!BWM_DOORS[door]) throw { code: 'bad_door' };
  const src = (b.answers && typeof b.answers === 'object') ? b.answers : {};
  const answers = {};
  BWM_ORDER.forEach(k => { answers[k] = bwmSan_(src[k], 6000); });
  if (!answers.q1) throw { code: 'empty' };
  const name = bwmSan_(b.name, 120);
  const adds = [];
  (Array.isArray(b.since) ? b.since.slice(0, 60) : []).forEach(x => { const t = bwmSan_(x && x.t, 6000); if (t) adds.push({ d: bwmSan_(x && x.d, 12), t: t }); });
  const added = bwmSan_(b.added, 6000);
  if (added && !adds.some(x => x.t === added)) adds.push({ d: '', t: added });

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) throw { code: 'busy' };
  try {
    const ss = SpreadsheetApp.openById(FD.SHEET_ID);
    const sh = ss.getSheetByName('Answers');
    const have = rows_(sh);
    const today = dayStamp_();
    const todayRows = have.filter(r => Utilities.formatDate(toDate_(r['received']), FD.TZ, 'yyyy-MM-dd') === today);
    const mineToday = todayRows.filter(r => String(r['email']).toLowerCase() === email).length;
    const hasFirst = have.some(r => String(r['email']).toLowerCase() === email && r['kind'] === 'first');
    const seen = new Set(have.map(r => String(r['hash'])));
    const now = new Date();
    const out = [];
    if (!hasFirst) {
      const h = sha256_(email + '|first');
      if (!seen.has(h)) out.push([now, email, name, door, 'first', '', h, JSON.stringify({ answers: answers })]);
    }
    adds.forEach(x => {
      const h = sha256_(email + '|add|' + x.t);
      if (seen.has(h)) return;
      seen.add(h);
      out.push([now, email, name, door, 'added', x.t, h, JSON.stringify({ d: x.d })]);
    });
    if (!out.length) return { ok: true, stored: 'again' };
    if (mineToday + out.length > BWM_MAN_DAY_CAP) throw { code: 'too_many' };
    if (todayRows.length + out.length > BWM_DAY_CAP) throw { code: 'busy' };
    const at = sh.getLastRow() + 1;
    sh.getRange(at, 2, out.length, 7).setNumberFormat('@'); // text, so nothing a man types can run as a formula
    sh.getRange(at, 1, out.length, 8).setValues(out);
    return { ok: true, stored: out.some(r => r[4] === 'first') ? 'first' : 'added' };
  } finally {
    lock.releaseLock();
  }
}

/** For the reader on the desk: his answers with the questions beside them, and what he added. Admins only. */
function bwmRecord_(who, b) {
  if (who.role !== 'admin') throw { code: 'not_yet' };
  const email = String(b.email || '').toLowerCase().trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw { code: 'bad_email' };
  const rows = rows_(SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Answers')).filter(r => String(r['email']).toLowerCase() === email);
  const first = rows.find(r => r['kind'] === 'first');
  if (!first) throw { code: 'none' };
  let a = {};
  try { a = (JSON.parse(first['answers (JSON)'] || '{}').answers) || {}; } catch (e) { a = {}; }
  const items = [];
  BWM_ORDER.forEach(k => { if (a[k]) items.push({ q: BWM_Q[k], a: a[k] }); });
  const since = rows.filter(r => r['kind'] === 'added').sort((x, y) => toDate_(x['received']) - toDate_(y['received'])).map(r => {
    let d = ''; try { d = JSON.parse(r['answers (JSON)'] || '{}').d || ''; } catch (e) {}
    return { d: d || Utilities.formatDate(toDate_(r['received']), FD.TZ, 'yyyy-MM-dd'), t: String(r['added']) };
  });
  return { ok: true, name: first['name'] || '', email: email, door: first['door'], doorWords: BWM_DOORS[first['door']] || '', at: toDate_(first['received']).toISOString(), items: items, since: since };
}

/** The desk's Done button: ticks "mark done by hand" on one of the Before We Meet cards. Admins only; only those keys. */
function actionDone_(who, b) {
  if (who.role !== 'admin') throw { code: 'not_yet' };
  const key = String(b.actionKey || '');
  if (!/^[a-z]+:\S+$/.test(key) || key.length > 200) throw { code: 'bad_action' };
  const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Actions');
  const H = headerIndex_(sh), data = sh.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][H['key']] || '').trim() !== key) continue;
    sh.getRange(i + 1, H['mark done by hand'] + 1).setValue(true);
    sh.getRange(i + 1, H['status'] + 1).setValue('done');
    sh.getRange(i + 1, H['done at'] + 1).setValue(new Date());
    try { dropFromFeed_(key); } catch (e) { /* the next 5-minute run writes the feed anyway */ }
    // build 20: Done on a move card also moves the row on the Moves tab along
    try { if (/^move:/.test(key)) moveStatus_(SpreadsheetApp.openById(FD.SHEET_ID), key.slice(5), 'done'); else if (/^check:/.test(key)) moveStatus_(SpreadsheetApp.openById(FD.SHEET_ID), key.slice(6), 'checked'); } catch (e) {}
    return { ok: true };
  }
  throw { code: 'none' };
}

/** build 18: take a closed card out of the stored feed at once, so every desk shows it gone without waiting for the next run. */
function dropFromFeed_(key) {
  const cell = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('feed').getRange('A1');
  const feed = JSON.parse(cell.getValue() || 'null');
  if (!feed || !Array.isArray(feed.actions)) return;
  const before = feed.actions.length;
  feed.actions = feed.actions.filter(a => a.key !== key);
  if (feed.actions.length === before) return;
  feed.doneThisWeek = (feed.doneThisWeek || 0) + 1;
  cell.setValue(JSON.stringify(feed));
}

// ───────────────────────────── build 12 · the answers reminder ─────────────────────────────

const ANSWERS_URL = 'https://www.ancientpathcoaching.com/your-answers';

function answersDoorOf_(hereFor) {
  const t = String(hereFor || '');
  if (/breaking free/i.test(t)) return 'bf';
  if (/one-on-one|coaching/i.test(t)) return 'one';
  if (/confessional|community/i.test(t)) return 'community';
  return '';
}
function answersReminderText_(name, door) {
  const first = String(name || '').trim().split(/\s+/)[0];
  const link = ANSWERS_URL + (door ? '?door=' + door : '');
  return (first ? first + ',' : 'Hello,') + '\n\n' +
    'Thank you for signing the agreement. There is one thing left before we sit down together.\n\n' +
    'It is a few questions about why you came and what you would like to know about yourself. Answer in your own words. A few sentences is enough, and you can talk instead of type.\n\n' +
    link + '\n\n' +
    'Our team reads it before we meet. No one else does, and nothing there is ever published.\n\n' +
    'If you would rather tell me, reply to this email.\n\n' +
    'John\n';
}
const ANSWERS_REMINDER_SUBJECT = 'Your questions, before we meet';

/** The timer's job, inside run(): sends at most five a pass, once per man, never twice. */
function sendAnswersReminders_(ss, cfg, test) {
  if (!test && (!cfg.answersFrom || !cfg.answersReminderOn)) return;
  const props = PropertiesService.getScriptProperties();
  const me = Session.getEffectiveUser().getEmail();
  const roster = rows_(ss.getSheetByName('Roster'));
  const firstIn = answersFirstIn_(ss);
  const sends = ss.getSheetByName('Sends');
  const now = new Date();
  if (test) {
    GmailApp.sendEmail(me, '[TEST] ' + ANSWERS_REMINDER_SUBJECT, answersReminderText_('Test Man', 'bf'), { name: 'John Sherrod' });
    if (sends) append_(sends, [[now, 'Answers reminder (test)', '[TEST] ' + ANSWERS_REMINDER_SUBJECT, me, 0, 'founders only']]);
    return;
  }
  let sent = 0;
  roster.forEach(r => {
    if (sent >= 5) return;
    const em = String(r['email'] || '').toLowerCase().trim();
    const signed = r['Before We Meet'];
    if (!em || !signed || firstIn.has(em) || isOurs_(cfg, em, r['name'])) return;
    const d = toDate_(signed), h = (now - d) / 36e5;
    if (d < cfg.answersFrom || h < cfg.answersReminderDays * 24 || h > 30 * 24) return;
    const stamp = 'answersReminder:' + em;
    if (props.getProperty(stamp)) return;
    props.setProperty(stamp, now.toISOString()); // stamp first: if anything fails after this, he is never sent a second one
    try {
      GmailApp.sendEmail(em, ANSWERS_REMINDER_SUBJECT, answersReminderText_(r['name'], answersDoorOf_(r['here for'])), { name: 'John Sherrod' });
    } catch (e) {
      props.deleteProperty(stamp); // nothing was sent, so the next pass may try again
      throw e;
    }
    sent++;
    if (sends) append_(sends, [[now, 'Answers reminder', ANSWERS_REMINDER_SUBJECT, em, 0, 'agreement signed ' + fmt_(signed) + '; once']]);
  });
}
/** The same email to john@ only, marked [TEST]; nothing goes to a man and nothing is stamped. */
function sendAnswersReminderTest() { sendAnswersReminders_(SpreadsheetApp.openById(FD.SHEET_ID), readConfig_(), true); }

// ───────────────────────────── small utilities ─────────────────────────────

function headerIndex_(sh) {
  const H = {};
  sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0].forEach((h, i) => { if (h) H[String(h)] = i; });
  return H;
}
function rows_(sh) {
  const data = sh.getDataRange().getValues();
  if (data.length < 2) return [];
  const H = data[0];
  return data.slice(1).filter(r => r.some(v => v !== '')).map(r => { const o = {}; H.forEach((h, i) => { o[h] = r[i]; }); return o; });
}
function colValues_(sh, header) {
  const H = headerIndex_(sh);
  if (H[header] === undefined || sh.getLastRow() < 2) return [];
  return sh.getRange(2, H[header] + 1, sh.getLastRow() - 1, 1).getValues().map(r => String(r[0])).filter(Boolean);
}
function append_(sh, rows) {
  if (!rows.length) return;
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}
function stripTags_(s) {
  return decodeEntities_(String(s).replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ' '));
}
function decodeEntities_(s) {
  return String(s).replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&(?:rsquo|lsquo|#8217|#8216|apos);/g, "'")
    .replace(/&(?:rdquo|ldquo|#8220|#8221);/g, '"').replace(/&(?:ndash|#8211);/g, '–').replace(/&(?:mdash|#8212);/g, '—').replace(/&hellip;/g, '…')
    .replace(/&#x([0-9a-f]+);/gi, (m, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(Number(d)))
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}
/** A contact-form entry with no real words, random capitals and no spaces in the message is a bot. */
function looksLikeSpam_(first, last, msg) {
  const name = (first + ' ' + last).trim();
  const noVowels = (s) => s && s.length > 4 && !/[aeiouy]/i.test(s);
  const randomCaps = (s) => s && s.length > 12 && !/\s/.test(s) && /[a-z][A-Z]|[A-Z][a-z][A-Z]/.test(s);
  return randomCaps(msg) || (noVowels(first) && noVowels(last)) || (/^[A-Za-z]{6,}$/.test(msg) && noVowels(msg)) || (!/\s/.test(msg) && msg.length > 15 && !/[.@]/.test(msg) && /[A-Z].*[a-z].*[A-Z]/.test(msg) && name.split(' ').every(w => !/[aeiou]{1}/i.test(w) || w.length > 7));
}
function compact_(s) {
  return String(s).replace(/\r/g, '').replace(/[ \t ]+/g, ' ').replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}
function toDate_(v) {
  if (v instanceof Date) return v;
  const d = new Date(v);
  return isNaN(d) ? new Date(0) : d;
}
/**
 * Calendly's "12:00pm Tue, Oct 6, 2026" (Central) → a real Date. Returns null if the text is not in that shape.
 * Built from the parts, then shifted by Central's offset for that day, so it is right on either side of the clock change.
 */
function whenToDate_(text) {
  const m = String(text || '').match(/(\d{1,2}):(\d{2})\s*([ap])m\s+\w{3},\s+(\w+)\s+(\d{1,2}),\s+(\d{4})/i);
  if (!m) return null;
  const months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  const mo = months[m[4].slice(0, 3).toLowerCase()];
  if (mo === undefined) return null;
  let h = Number(m[1]) % 12; if (m[3].toLowerCase() === 'p') h += 12;
  const guess = Date.UTC(Number(m[6]), mo, Number(m[5]), h, Number(m[2]));
  const off = Utilities.formatDate(new Date(guess), FD.TZ, 'Z'); // "-0500" or "-0600"
  const sign = off[0] === '-' ? -1 : 1;
  const offMs = sign * (Number(off.slice(1, 3)) * 60 + Number(off.slice(3, 5))) * 60e3;
  return new Date(guess - offMs);
}
function fmt_(d) {
  return Utilities.formatDate(toDate_(d), FD.TZ, 'MMM d, h:mm a');
}
function ago_(d) {
  const h = Math.floor((new Date() - toDate_(d)) / 36e5);
  if (h < 1) return 'just now';
  if (h < 48) return h + ' hour' + (h === 1 ? '' : 's') + ' ago';
  const days = Math.floor(h / 24);
  return days + ' days ago';
}
function alert_(text) {
  const p = PropertiesService.getScriptProperties();
  const last = p.getProperty('lastAlert');
  if (last && (new Date() - new Date(last)) < 864e5) return;
  try {
    const to = readConfig_().alertEmail;
    MailApp.sendEmail(to, 'Front Desk needs a look', text);
    p.setProperty('lastAlert', new Date().toISOString());
  } catch (e) {}
}

// ───────────────────────────── build 5 · the desk on the site ─────────────────────────────
// The /front-desk page on ancientpathcoaching.com calls this script at its web address.
// Every call is a POST with a JSON body { action, ... } and gets JSON back { ok, ... }.
// Who may open the desk is the People tab (email · role · room). Proof is a six-digit code
// emailed to that address; a right code becomes a desk key the browser keeps. The key's hash
// sits on the hidden Keys tab; the raw key is never stored here. Taking a row off People
// closes that person's desk on his next read.

function doGet(e) {
  if (e && e.parameter && e.parameter.file === 'desk.js') return ContentService.createTextOutput(DESK_JS).setMimeType(ContentService.MimeType.JAVASCRIPT);
  return json_({ ok: true, service: 'Ancient Path — Front Desk', build: FD.BUILD, desk: DESK_BUILD });
}

function doPost(e) {
  let body = {};
  try { body = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (x) { body = {}; }
  return json_(desk_(body));
}

function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function desk_(b) {
  try {
    const action = String(b.action || '');
    if (action === 'ping') return { ok: true, build: FD.BUILD };
    if (action === 'code_send') return codeSend_(b);
    if (action === 'code_check') return codeCheck_(b);
    if (action === 'bwm_answers') return bwmAnswers_(b); // build 12: public, from the Before We Meet piece; no key
    const who = whoIs_(b.key);
    if (action === 'desk') return deskFor_(who);
    if (action === 'ask') return askDesk_(who, b);
    if (action === 'answers') return bwmRecord_(who, b);
    if (action === 'done') return actionDone_(who, b);
    // build 20
    if (action === 'name') return nameSet_(who, b);
    if (action === 'ask_text') return askText_(who, b);
    if (action === 'ask_send') return askSend_(who, b);
    if (action === 'move_add') return moveAdd_(who, b);
    if (action === 'move_set') return moveSet_(who, b);
    if (action === 'words_set') return wordsSet_(who, b);
    if (action === 'forget') return forgetKey_(b.key);
    return { ok: false, error: 'unknown_action' };
  } catch (err) {
    if (err && err.code) return { ok: false, error: err.code };
    alert_('Front Desk web call failed: ' + err + '\n' + (err && err.stack || ''));
    return { ok: false, error: 'failed' };
  }
}

// ---- who is on the list ----
function people_() {
  const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('People');
  return sh ? rows_(sh).map(r => ({
    email: String(r['email'] || '').toLowerCase().trim(),
    name: String(r['name'] || '').trim(),
    role: String(r['role'] || '').toLowerCase().trim(),
    room: String(r['room'] || '').trim()
  })).filter(p => p.email && (p.role === 'admin' || p.role === 'facilitator')) : [];
}
function personByEmail_(email) {
  const e = String(email || '').toLowerCase().trim();
  return people_().find(p => p.email === e) || null;
}
function touchPerson_(email) {
  try {
    const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('People');
    const H = headerIndex_(sh), data = sh.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (String(data[i][H['email']] || '').toLowerCase().trim() === email) { sh.getRange(i + 1, H['last seen'] + 1).setValue(new Date()); return; }
    }
  } catch (e) {}
}

// ---- the code by email ----
function codeSend_(b) {
  const cfg = readConfig_();
  const email = String(b.email || '').toLowerCase().trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw { code: 'bad_email' };
  const person = personByEmail_(email);
  if (!person) throw { code: 'not_on_list' };
  const cache = CacheService.getScriptCache();
  if (cache.get('fd:wait:' + email)) throw { code: 'wait' };
  const props = PropertiesService.getScriptProperties();
  const dayKey = 'fd:codes:' + dayStamp_() + ':' + email;
  const sentToday = Number(props.getProperty(dayKey) || 0);
  if (sentToday >= 5) throw { code: 'too_many' };
  const code = String(100000 + Math.floor(Math.random() * 900000));
  cache.put('fd:code:' + email, JSON.stringify({ hash: sha256_(code + '|' + email), tries: 0 }), cfg.codeMinutes * 60);
  cache.put('fd:wait:' + email, '1', 120);
  props.setProperty(dayKey, String(sentToday + 1));
  const pretty = code.slice(0, 3) + ' ' + code.slice(3);
  MailApp.sendEmail({
    to: email,
    subject: 'Your Front Desk code: ' + pretty,
    body: 'Your Front Desk code is ' + pretty + '.\n\nIt works for ' + cfg.codeMinutes + ' minutes, on the browser you asked from. If you did not ask for it, nothing happens — the desk stays closed.\n\nAncient Path Biblical Coaching',
    name: 'Ancient Path — Front Desk'
  });
  return { ok: true, sent: true, minutes: cfg.codeMinutes };
}

function codeCheck_(b) {
  const cfg = readConfig_();
  const email = String(b.email || '').toLowerCase().trim();
  const code = String(b.code || '').replace(/\D/g, '');
  const cache = CacheService.getScriptCache();
  const raw = cache.get('fd:code:' + email);
  if (!raw) throw { code: 'code_expired' };
  const rec = JSON.parse(raw);
  if (rec.tries >= 5) { cache.remove('fd:code:' + email); throw { code: 'code_expired' }; }
  if (code.length !== 6 || rec.hash !== sha256_(code + '|' + email)) {
    rec.tries += 1;
    cache.put('fd:code:' + email, JSON.stringify(rec), cfg.codeMinutes * 60);
    throw { code: 'code_wrong' };
  }
  cache.remove('fd:code:' + email);
  const person = personByEmail_(email);
  if (!person) throw { code: 'not_on_list' };
  const key = newKey_();
  const now = new Date(), expires = new Date(now.getTime() + cfg.keyDays * 864e5);
  append_(SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Keys'), [[sha256_(key), email, person.role, now, expires, now, String(b.browser || '').slice(0, 120)]]);
  touchPerson_(email);
  return { ok: true, key: key, name: person.name, role: person.role, room: person.room, email: email, expires: expires.toISOString() };
}

// ---- the key the browser keeps ----
function whoIs_(key) {
  const k = String(key || '');
  if (k.length < 32) throw { code: 'no_key' };
  const h = sha256_(k);
  const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Keys');
  const H = headerIndex_(sh), data = sh.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][H['hash']] !== h) continue;
    if (toDate_(data[i][H['expires']]) < new Date()) throw { code: 'key_expired' };
    const email = String(data[i][H['email']] || '').toLowerCase().trim();
    const person = personByEmail_(email);
    if (!person) throw { code: 'removed' };
    const last = toDate_(data[i][H['last used']]);
    if ((new Date() - last) > 36e5) sh.getRange(i + 1, H['last used'] + 1).setValue(new Date());
    return person;
  }
  throw { code: 'bad_key' };
}
function forgetKey_(key) {
  const h = sha256_(String(key || ''));
  const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Keys');
  const H = headerIndex_(sh), data = sh.getDataRange().getValues();
  for (let i = data.length - 1; i >= 1; i--) if (data[i][H['hash']] === h) sh.deleteRow(i + 1);
  return { ok: true };
}
function newKey_() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  let out = '';
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, Utilities.getUuid() + Utilities.getUuid() + Date.now());
  for (let i = 0; i < 40; i++) out += chars[((bytes[i % bytes.length] + 256) * 7 + i * 13 + Math.floor(Math.random() * 1e6)) % chars.length];
  return out;
}
function sha256_(s) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8).map(b => ('0' + ((b + 256) % 256).toString(16)).slice(-2)).join('');
}
function dayStamp_() { return Utilities.formatDate(new Date(), FD.TZ, 'yyyy-MM-dd'); }

// ---- the desk, by role ----
function deskFor_(who) {
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  const base = { ok: true, build: FD.BUILD, role: who.role, name: who.name, email: who.email, room: who.room, now: new Date().toISOString() };
  if (who.role !== 'admin') {
    // The facilitator desk is built after week 3 of the first cohort; until then a facilitator sees that the door is there.
    return Object.assign(base, { feed: null, message: 'The facilitator desk' + (who.room ? ' for ' + who.room : '') + ' opens after week 3.' });
  }
  let feed = null;
  try { feed = JSON.parse(ss.getSheetByName('feed').getRange('A1').getValue() || 'null'); } catch (e) { feed = null; }
  return Object.assign(base, {
    feed: feed,
    ac: acLatest_(),
    people: people_().map(p => ({ name: p.name, email: p.email, role: p.role, room: p.room })),
    canAsk: !!claudeKey_(),
    claude: claudeState_()
  });
}
function acLatest_() {
  try {
    const id = readConfig_().acSheetId;
    if (!id) return null;
    const rows = SpreadsheetApp.openById(id).getSheetByName('latest').getRange('A1:B12').getValues();
    const out = {};
    rows.slice(1).forEach(r => { if (!r[0]) return; let v = r[1]; try { v = JSON.parse(v); } catch (e) {} out[String(r[0])] = v; });
    return out;
  } catch (e) { return null; }
}

// ---- Ask the desk: a typed question about what the desk holds, answered by Claude from the desk's own data ----
function claudeKeyRaw_() {
  const all = PropertiesService.getScriptProperties().getProperties();
  const names = Object.keys(all);
  const pick = names.find(n => /^CLAUDE_KEY$/i.test(n)) || names.find(n => /claude|anthropic/i.test(n) && /sk-ant/.test(all[n])) || names.find(n => /sk-ant/.test(all[n]));
  return pick ? { name: pick, value: String(all[pick] || '') } : { name: '', value: '' };
}
// build 10: a pasted key often carries a space, a line break, a quote mark or the word Bearer; Claude refuses it with 401. Strip all of that.
function cleanKey_(v) {
  return String(v || '').replace(/^\s*(?:bearer\s+)?/i, '').replace(/[\s"'`\u201c\u201d\u2018\u2019]+/g, '');
}
function claudeKey_() { return cleanKey_(claudeKeyRaw_().value); }
/** What the stored key looks like, never the key itself. */
function keyShape_() {
  const k = claudeKeyRaw_(), c = cleanKey_(k.value);
  return { property: k.name || null, length: c.length, startsSkAnt: /^sk-ant-/.test(c), looksLikeSubscriptionToken: /^sk-ant-oat/.test(c), strippedCharacters: k.value.length - c.length };
}
function setClaudeState_(state, status) {
  PropertiesService.getScriptProperties().setProperty('fd:claude', JSON.stringify({ state: state, status: status || null, at: new Date().toISOString() }));
}
function claudeState_() {
  try { return JSON.parse(PropertiesService.getScriptProperties().getProperty('fd:claude') || 'null'); } catch (e) { return null; }
}
function stateFromStatus_(s) { return s === 200 ? 'ok' : (s === 401 || s === 403) ? 'refused' : s === 404 ? 'model' : (s === 429 || s === 529) ? 'busy' : 'error'; }
/** One tiny call to Claude to learn whether the stored key and model work. Costs a few tokens. */
function claudeCheck_() {
  const key = claudeKey_();
  if (!key) { setClaudeState_('not_set'); return claudeState_(); }
  let status = 0;
  try {
    const res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
      method: 'post', contentType: 'application/json', muteHttpExceptions: true,
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify({ model: readConfig_().claudeModel, max_tokens: 8, messages: [{ role: 'user', content: 'Reply with one word: ready.' }] })
    });
    status = res.getResponseCode();
  } catch (e) { status = 0; }
  setClaudeState_(stateFromStatus_(status), status);
  return claudeState_();
}
/** Every 5-minute run: re-check at once when the key is not working (so a fixed key shows as fixed within minutes), once a day when it is. */
function claudeWatch_() {
  try {
    const st = claudeState_();
    if (!st || st.state !== 'ok' || (new Date() - new Date(st.at)) > 864e5) claudeCheck_();
  } catch (e) {}
}
function claudeHealth_() {
  const st = claudeState_() || {};
  return { state: st.state || 'unchecked', status: st.status || null, checked: st.at || null, key: keyShape_() };
}

function askDesk_(who, b) {
  if (who.role !== 'admin') throw { code: 'not_yet' };
  const cfg = readConfig_();
  const q = String(b.question || '').trim().slice(0, 500);
  if (!q) throw { code: 'empty' };
  const key = claudeKey_();
  if (!key) throw { code: 'no_claude_key' };
  const props = PropertiesService.getScriptProperties();
  const dayKey = 'fd:asks:' + dayStamp_();
  const n = Number(props.getProperty(dayKey) || 0);
  if (n >= cfg.asksPerDay) throw { code: 'too_many' };
  const desk = deskFor_(who);
  const feed = desk.feed || {};
  // What Claude reads: the whole desk, minus message links (it cannot open them) and long summaries.
  const slim = JSON.parse(JSON.stringify(feed, (k, v) => (k === 'link' ? undefined : v)));
  if (slim.inbound && slim.inbound.recent) slim.inbound.recent = slim.inbound.recent.map(r => Object.assign({}, r, { summary: String(r.summary || '').slice(0, 160) }));
  const today = Utilities.formatDate(new Date(), FD.TZ, 'EEEE, MMMM d, yyyy h:mm a');
  const system = [
    'You are the Front Desk of Ancient Path Biblical Coaching, a men\'s coaching practice. ' + who.name + ' is asking.',
    'Answer only from the desk data below. It is the whole record the desk holds. If the answer is not in it, say so plainly in one sentence; never guess and never invent a name, a date or a number.',
    'Plain English, short, no headings, no bullet lists unless the answer is a list of men. Name men as the roster names them. Times in Central, 12-hour (7:00 PM). Today is ' + today + ' Central.',
    'Never write the words "brother", "stranger" or "the men who come after you". Do not give advice about a man\'s story; the desk holds logistics, not stories.',
    'Stages mean: Seated = enrolled in the cohort; Agreement signed = signed the agreement; On the wait list = asked for a seat; Account only = made a site account and nothing else yet; After We Talk in = the follow-up form came in.',
    'Before We Meet is two things, and you must never merge them. The AGREEMENT is the signed form with his name and contact details (roster agreementSigned, cohort.agreementSigned). The ANSWERS are the twelve questions he writes at /your-answers (roster answersIn, cohort.answersIn, cohort.answersWaiting). The beforeWeMeet block lists the men in each case by name. When asked about "Before We Meet" with no more words, answer both parts and say which is which: how many have signed the agreement, how many have answers in, and who has signed but not answered. Name each man with his door (roster door). The coaching of a one-on-one man has already started, so his missing answers are overdue. If answersIn is empty for every man, say plainly that no one has saved his answers yet; do not call the agreement forms "answers".',
    'The search block (search) is the monthly story of how men found us, written from the Search profile sheet: three sentences and one recommendation. Quote its numbers exactly; never add one.',
    'The lane (actions) is what needs a human hand, each with an owner (John or Jason), a verb and why.',
    'The room (room) is the cohort itself: each man in it with his seat number, how he got in (seat link = he used the enrollment link; by hand = we enrolled him from the admin), when, and the open seats after him. room.open is how many seats are still open.',
    'The pathway (moves) is build 20: every signal the desk reads (a search phrase with no page, a page shown and never clicked, a theme the room carried) gets ONE proposed move from a fixed list (moves.list); moves.proposed are not yet taken, moves.taken are on the Moves tab with owner, due and check dates and a status (taken, done, checked). A card asked by email carries asked (when the desk sent the ask). words holds the old and new title and description for a page. week is the owner\'s "This week": three sentences and one next step.'
  ].join('\n');
  const user = 'DESK DATA (JSON):\n' + JSON.stringify(slim) + '\n\nACTIVECAMPAIGN COUNT (JSON, may be null):\n' + JSON.stringify(desk.ac) + '\n\nQUESTION: ' + q;
  const res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    payload: JSON.stringify({ model: cfg.claudeModel, max_tokens: 700, system: system, messages: [{ role: 'user', content: user }] })
  });
  const status = res.getResponseCode();
  let data = {};
  try { data = JSON.parse(res.getContentText()); } catch (e) {}
  const notAnswered = (why) => { try { append_(SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Asks'), [[new Date(), who.email, q, 'NOT ANSWERED — ' + why, FD.BUILD]]); } catch (e) {} };
  if (status === 429 || status === 529) { notAnswered('Claude was busy (' + status + ')'); throw { code: 'busy' }; }
  if (status !== 200) {
    const said = String((data && data.error && data.error.message) || res.getContentText()).slice(0, 200);
    setClaudeState_(stateFromStatus_(status), status);
    alert_('Ask the desk: Claude answered ' + status + '\n' + res.getContentText().slice(0, 500));
    notAnswered('Claude answered ' + status + ': ' + said);
    throw { code: (status === 401 || status === 403) ? 'key_refused' : status === 404 ? 'model_unknown' : 'claude_error' };
  }
  const answer = ((data.content || []).map(c => c.text || '').join('')).trim();
  if (!answer) { notAnswered('Claude answered 200 with no text'); throw { code: 'empty_answer' }; }
  setClaudeState_('ok', 200);
  props.setProperty(dayKey, String(n + 1));
  try { append_(SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Asks'), [[new Date(), who.email, q, answer.slice(0, 2000), FD.BUILD]]); } catch (e) {}
  return { ok: true, answer: answer, asked: n + 1, of: cfg.asksPerDay };
}

/** Run by hand once to prove the web side without the page: emails a code to the first admin on People, nothing else. */
function testCodeToFirstAdmin() {
  const admin = people_().find(p => p.role === 'admin');
  if (!admin) throw new Error('No admin on the People tab yet — run reread first.');
  Logger.log(JSON.stringify(codeSend_({ email: admin.email })));
}

// ───────────────────────────── the Front Desk page's code, served at ?file=desk.js ─────────────────────────────
const DESK_BUILD = 17;
const DESK_JS = "/* AP-DESK desk.js build 17 — the Front Desk page, served by the Front Desk script (FrontDesk.gs build 20.2, ?file=desk.js). The page block on /front-desk is only a loader: <div id=\"apDesk\"></div> and this script's tag. */\n(function () {\nvar host = document.getElementById(\"apDesk\"); if (!host || host.getAttribute(\"data-desk\")) return; host.setAttribute(\"data-desk\", \"17\"); host.classList.add(\"ap-desk\");\nhost.innerHTML = \"<style>\\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap'); .ap-desk { --ap-navy: #1F2A44; --ap-band: #1B2A3A; --ap-bronze: #B8945F; --ap-paper: #FBF9F5; --ap-rule: #E2DCD1; --ap-ink: #2B3040; --ap-quiet: #6B7280; --ap-band-ink: #F3EDE3; --ap-band-quiet: #B7AFA4; --ap-good: #3D7A52; --ap-warn: #9A6B2A; --ap-crit: #9A3B2F; --ap-serif: 'Source Serif 4', Georgia, 'Times New Roman', serif; --ap-sans: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: var(--ap-ink); font: 400 16px/1.5 var(--ap-sans); -webkit-font-smoothing: antialiased; text-align: left; }\\n.ap-desk *, .ap-desk *::before, .ap-desk *::after { box-sizing: border-box; }\\n.ap-desk h1, .ap-desk h2, .ap-desk h3, .ap-desk p { margin: 0; font-weight: 400; text-wrap: balance; }\\n.ap-desk a { color: var(--ap-navy); text-decoration: none; }\\n.ap-desk a:hover, .ap-desk a:focus-visible { text-decoration: underline; }\\n.ap-desk :focus-visible { outline: 2px solid var(--ap-bronze); outline-offset: 2px; }\\n.ap-desk button, .ap-desk input { font: inherit; }\\n.ap-desk [hidden] { display: none !important; }\\n.ap-desk .ap-band { position: relative; width: 100vw; margin: 0 0 34px calc(50% - 50vw); background: var(--ap-band) url(\\\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='600' viewBox='0 0 1600 600'><g fill='none' stroke='%23B8945F' stroke-width='1.4' opacity='0.15'><path d='M-50 460 C 250 380, 450 500, 760 420 S 1300 320, 1680 400'/><path d='M-50 500 C 250 430, 480 540, 800 470 S 1320 380, 1680 450'/><path d='M-50 420 C 280 330, 520 460, 820 370 S 1280 270, 1680 350'/><path d='M-50 540 C 300 500, 520 580, 840 520 S 1340 440, 1680 510'/><path d='M-50 380 C 300 300, 560 420, 880 330 S 1300 240, 1680 310'/></g><g fill='%23B8945F' opacity='0.20'><circle cx='760' cy='420' r='4'/></g></svg>\\\") 50% 100%/cover no-repeat; }\\n.ap-desk .ap-band, .ap-desk .ap-band * { text-align: center; }\\n.ap-desk .ap-band-in { max-width: 720px; margin: 0 auto; padding: 60px 24px 56px; display: grid; gap: 12px; justify-items: center; }\\n.ap-desk .ap-eyebrow { font: 600 13px/1.65 var(--ap-sans); letter-spacing: 3px; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .ap-hello { font: 600 44px/1.15 var(--ap-serif); color: var(--ap-band-ink); letter-spacing: -0.01em; }\\n.ap-desk .ap-line { font: 400 19px/1.6 var(--ap-sans); color: var(--ap-band-quiet); max-width: 600px; }\\n.ap-desk .ap-line .ap-s { display: inline-block; }\\n.ap-desk .ap-primary { display: inline-block; margin-top: 10px; font: 600 15px/1.2 var(--ap-sans); letter-spacing: .02em; background: var(--ap-bronze); color: var(--ap-band); padding: 15px 26px; border-radius: 2px; border: 1px solid var(--ap-bronze); max-width: 100%; cursor: pointer; }\\n.ap-desk .ap-primary:hover { background: #C9A86F; text-decoration: none; }\\n.ap-desk .ap-primary[disabled] { opacity: .6; cursor: default; }\\n.ap-desk .ap-primary-note { font: 400 15px/1.5 var(--ap-sans); color: var(--ap-band-quiet); max-width: 520px; }\\n.ap-desk .ap-gate-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 10px; }\\n.ap-desk .ap-gate-row input { font: 400 22px/1.2 var(--ap-sans); letter-spacing: .3em; width: 170px; max-width: 100%; padding: 11px 12px; border: 1px solid var(--ap-bronze); border-radius: 2px; background: #fff; color: var(--ap-ink); text-align: center; }\\n.ap-desk .ap-gate-row input.ap-email { letter-spacing: 0; font-size: 17px; width: 320px; text-align: left; }\\n.ap-desk .ap-gate-row .ap-primary { margin-top: 0; }\\n.ap-desk .ap-gate-err { color: #F0C9B9; font: 400 15px/1.5 var(--ap-sans); max-width: 520px; }\\n.ap-desk .ap-gate-again { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-band-quiet); background: none; border: 0; text-decoration: underline; cursor: pointer; padding: 0; }\\n@media (max-width: 640px) { .ap-desk .ap-band-in { padding: 44px 20px 40px; }\\n.ap-desk .ap-hello { font-size: 34px; }\\n.ap-desk .ap-line { font-size: 17px; }\\n }\\n.ap-desk .wrap { max-width: 1040px; margin: 0 auto; padding: 0 0 48px; }\\n.ap-desk .status { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .dot { width: 9px; height: 9px; border-radius: 50%; background: var(--ap-rule); display: inline-block; flex: 0 0 auto; }\\n.ap-desk .dot.live { background: var(--ap-good); }\\n.ap-desk .dot.stale { background: var(--ap-warn); }\\n.ap-desk .dot.off { background: var(--ap-crit); }\\n.ap-desk button.plain { font: 600 13px/1 var(--ap-sans); letter-spacing: .02em; color: var(--ap-navy); background: transparent; border: 1px solid var(--ap-rule); border-radius: 2px; padding: 9px 14px; cursor: pointer; }\\n.ap-desk button.plain:hover { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\\n.ap-desk .note { margin-top: 16px; padding: 14px 18px; background: var(--ap-paper); border-left: 3px solid var(--ap-warn); font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); }\\n.ap-desk .note.crit { border-left-color: var(--ap-crit); }\\n.ap-desk .note strong { color: var(--ap-navy); font-weight: 600; }\\n.ap-desk .ap-sec { margin-top: 40px; padding-top: 22px; border-top: 1px solid var(--ap-rule); display: grid; gap: 16px; }\\n.ap-desk .ap-sec.first { margin-top: 28px; border-top: 0; padding-top: 0; }\\n.ap-desk .ap-sec > * { min-width: 0; }\\n.ap-desk .wrap { min-width: 0; max-width: min(1040px, 100%); }\\n.ap-desk .ap-sec-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 6px 16px; }\\n.ap-desk .ap-kind { font: 600 11px/1 var(--ap-sans); letter-spacing: .14em; text-transform: uppercase; color: var(--ap-bronze); margin-bottom: 8px; }\\n.ap-desk .ap-h2 { font: 400 26px/1.25 var(--ap-serif); color: var(--ap-navy); }\\n.ap-desk .ap-sec-note { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .muted { color: var(--ap-quiet); }\\n.ap-desk .small { font-size: 13px; }\\n.ap-desk .ap-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }\\n.ap-desk .ap-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }\\n.ap-desk .ap-grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }\\n@media (max-width: 860px) { .ap-desk .ap-grid, .ap-desk .ap-grid-2 { grid-template-columns: 1fr; }\\n.ap-desk .ap-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }\\n }\\n@media (max-width: 420px) { .ap-desk .ap-grid-4 { grid-template-columns: 1fr; }\\n }\\n.ap-desk .ap-card { display: flex; flex-direction: column; gap: 10px; padding: 22px 22px 20px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; min-width: 0; }\\n.ap-desk .ap-card.is-next { border-color: var(--ap-bronze); box-shadow: inset 3px 0 0 var(--ap-bronze); }\\n.ap-desk .ap-card-kind { font: 600 11px/1 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .ap-card-title { font: 400 22px/1.25 var(--ap-serif); color: var(--ap-navy); overflow-wrap: anywhere; }\\n.ap-desk .ap-card-state { font: 400 14px/1.45 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .ap-card-body { font: 400 15px/1.6 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; white-space: pre-line; }\\n.ap-desk .ap-card-actions { margin-top: auto; padding-top: 12px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }\\n.ap-desk .ap-btn { display: inline-block; font: 600 14px/1 var(--ap-sans); letter-spacing: .02em; padding: 12px 18px; border-radius: 2px; border: 1px solid transparent; cursor: pointer; }\\n.ap-desk .ap-btn:hover { text-decoration: none; }\\n.ap-desk .ap-btn-primary { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\\n.ap-desk .ap-btn-primary:hover { background: #2B3856; }\\n.ap-desk .ap-btn-primary[disabled] { opacity: .6; cursor: default; }\\n.ap-desk .ap-btn-ghost { background: transparent; color: var(--ap-navy); border-color: var(--ap-rule); }\\n.ap-desk .ap-btn-ghost:hover { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\\n.ap-desk .tabs { display: flex; gap: 8px; flex-wrap: wrap; }\\n.ap-desk .tabs button { font: 600 13px/1 var(--ap-sans); letter-spacing: .02em; padding: 10px 16px; border-radius: 2px; border: 1px solid var(--ap-rule); background: transparent; color: var(--ap-navy); cursor: pointer; }\\n.ap-desk .tabs button[aria-pressed=\\\"true\\\"] { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\\n.ap-desk .lane { display: grid; gap: 12px; }\\n.ap-desk .act .ap-card-state .wait { color: var(--ap-warn); font-weight: 600; }\\n.ap-desk .act .ap-card-state .wait::before { content: \\\"· \\\"; color: var(--ap-quiet); font-weight: 400; }\\n.ap-desk .empty { padding: 22px; background: var(--ap-paper); border: 1px dashed var(--ap-rule); border-radius: 6px; display: grid; gap: 4px; }\\n.ap-desk .empty strong { font: 400 20px/1.3 var(--ap-serif); color: var(--ap-navy); }\\n.ap-desk .empty span { font: 400 15px/1.55 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .ask { display: grid; gap: 12px; padding: 22px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; }\\n.ap-desk .ask-row { display: flex; gap: 10px; flex-wrap: wrap; }\\n.ap-desk .ask-row input { flex: 1 1 320px; min-width: 0; font: 400 17px/1.4 var(--ap-sans); padding: 12px 14px; border: 1px solid var(--ap-rule); border-radius: 2px; background: #fff; color: var(--ap-ink); }\\n.ap-desk .ask-row input:focus { border-color: var(--ap-bronze); outline: none; }\\n.ap-desk .ask-q { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .ask-a { font: 400 17px/1.6 var(--ap-serif); color: var(--ap-ink); white-space: pre-line; border-left: 3px solid var(--ap-bronze); padding-left: 16px; }\\n.ap-desk .ask-note { font: 400 13px/1.5 var(--ap-sans); color: var(--ap-quiet); } .ap-desk .ask-note.bad { font: 600 15px/1.5 var(--ap-sans); color: var(--ap-navy); background: #fff; border: 1px solid var(--ap-rule); border-left: 4px solid var(--ap-bronze); border-radius: 2px; padding: 14px 16px; display: grid; gap: 12px; justify-items: start; } .ap-desk .ask-note.bad span { font-weight: 400; }\\n.ap-desk .ask-tries { display: flex; gap: 8px; flex-wrap: wrap; }\\n.ap-desk .ask-tries button { font: 400 13px/1.3 var(--ap-sans); color: var(--ap-navy); background: #fff; border: 1px solid var(--ap-rule); border-radius: 2px; padding: 7px 11px; cursor: pointer; text-align: left; }\\n.ap-desk .ask-tries button:hover { border-color: var(--ap-bronze); }\\n.ap-desk .tile { background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; padding: 18px 20px 16px; display: grid; gap: 4px; min-width: 0; }\\n.ap-desk .tile .label { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .tile .num { font: 400 36px/1.1 var(--ap-serif); color: var(--ap-navy); font-variant-numeric: tabular-nums; }\\n.ap-desk .tile .num small { font: 400 15px/1 var(--ap-sans); color: var(--ap-quiet); margin-left: 6px; }\\n.ap-desk .tile .sub { font: 400 14px/1.45 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .tile.hero { border-color: var(--ap-bronze); box-shadow: inset 3px 0 0 var(--ap-bronze); }\\n.ap-desk .seats { display: flex; gap: 4px; margin-top: 8px; }\\n.ap-desk .seat { flex: 1; height: 8px; border-radius: 2px; background: var(--ap-rule); }\\n.ap-desk .seat.on { background: var(--ap-bronze); }\\n.ap-desk .tablewrap { overflow-x: auto; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; }\\n.ap-desk table { border-collapse: collapse; width: 100%; font: 400 15px/1.45 var(--ap-sans); min-width: 640px; margin: 0; }\\n.ap-desk th, .ap-desk td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--ap-rule); vertical-align: top; background: transparent; }\\n.ap-desk th { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); white-space: nowrap; }\\n.ap-desk tr:last-child td { border-bottom: 0; }\\n.ap-desk td.num { font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }\\n.ap-desk .step { white-space: nowrap; font-size: 14px; }\\n.ap-desk .step .ok { color: var(--ap-good); font-weight: 600; }\\n.ap-desk .step .no { color: var(--ap-quiet); }\\n.ap-desk .name { font: 400 18px/1.3 var(--ap-serif); color: var(--ap-navy); }\\n.ap-desk .stage { display: inline-block; font: 600 12px/1.2 var(--ap-sans); letter-spacing: .08em; text-transform: uppercase; color: var(--ap-quiet); white-space: nowrap; }\\n.ap-desk .stage.seated { color: var(--ap-good); }\\n.ap-desk .ro-cards { display: none; }\\n.ap-desk .ro-cards .ap-card { gap: 8px; }\\n.ap-desk .ro-cards .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 14px; margin-top: 4px; }\\n.ap-desk .ro-cards .fact { display: grid; gap: 2px; min-width: 0; }\\n.ap-desk .ro-cards .fact .k { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .1em; text-transform: uppercase; color: var(--ap-quiet); }\\n.ap-desk .ro-cards .fact .v { font: 400 15px/1.4 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; }\\n.ap-desk .ro-cards .fact.wide { grid-column: 1 / -1; }\\n.ap-desk .room-list { margin-top: 16px; }\\n.ap-desk .room-list .seatno { font: 600 12px/1.2 var(--ap-sans); letter-spacing: .08em; text-transform: uppercase; color: var(--ap-bronze); white-space: nowrap; }\\n.ap-desk .room-list .how { display: inline-block; font: 600 12px/1.2 var(--ap-sans); letter-spacing: .06em; text-transform: uppercase; color: var(--ap-quiet); white-space: nowrap; }\\n.ap-desk .room-list .how.hand { color: var(--ap-warn); }\\n@media (max-width: 860px) { .ap-desk .ro-table { display: none; }\\n.ap-desk .ro-cards { display: grid; gap: 12px; }\\n }\\n.ap-desk .door { padding: 20px 22px; border: 1px solid var(--ap-rule); border-radius: 6px; background: #fff; display: grid; gap: 12px; align-content: start; min-width: 0; }\\n.ap-desk .door h3 { font: 400 20px/1.3 var(--ap-serif); color: var(--ap-navy); }\\n.ap-desk ul.list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }\\n.ap-desk ul.list li { display: grid; grid-template-columns: 1fr auto; gap: 2px 12px; font: 400 15px/1.45 var(--ap-sans); border-bottom: 1px solid var(--ap-rule); padding-bottom: 10px; min-width: 0; margin: 0; }\\n.ap-desk ul.list li:last-child { border-bottom: 0; padding-bottom: 0; }\\n.ap-desk ul.list li > span:first-child { min-width: 0; overflow-wrap: anywhere; }\\n.ap-desk ul.list .r { color: var(--ap-quiet); font-size: 13px; white-space: nowrap; font-variant-numeric: tabular-nums; }\\n.ap-desk ul.list .s { grid-column: 1 / -1; color: var(--ap-quiet); font-size: 14px; overflow-wrap: anywhere; }\\n.ap-desk .kind { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .1em; text-transform: uppercase; color: var(--ap-bronze); margin-right: 6px; }\\n.ap-desk .bars { display: grid; gap: 8px; }\\n.ap-desk .bar-row { display: grid; grid-template-columns: minmax(90px, 150px) 1fr 36px; gap: 10px; align-items: center; font: 400 14px/1.4 var(--ap-sans); }\\n.ap-desk .bar-row > span:first-child { min-width: 0; overflow-wrap: anywhere; }\\n.ap-desk .bar-row .track { height: 10px; background: var(--ap-rule); border-radius: 2px; overflow: hidden; }\\n.ap-desk .bar-row .fill { height: 100%; background: var(--ap-bronze); border-radius: 2px; }\\n.ap-desk .bar-row .n { text-align: right; font-variant-numeric: tabular-nums; color: var(--ap-quiet); }\\n.ap-desk .money { font: 400 30px/1.1 var(--ap-serif); color: var(--ap-navy); font-variant-numeric: tabular-nums; }\\n.ap-desk .money small { font: 400 14px/1.4 var(--ap-sans); color: var(--ap-quiet); margin-left: 6px; }\\n.ap-desk .ap-foot { margin-top: 40px; padding-top: 16px; border-top: 1px solid var(--ap-rule); font: 400 13px/1.6 var(--ap-sans); color: var(--ap-quiet); display: grid; gap: 6px; }\\n.ap-desk .ap-foot a, .ap-desk .ap-foot button { color: var(--ap-navy); text-decoration: underline; font: inherit; font-weight: 600; background: none; border: 0; padding: 0; cursor: pointer; }\\n@media (prefers-reduced-motion: no-preference) { .ap-desk .ap-btn, .ap-desk .ap-primary, .ap-desk button.plain { transition: background-color .15s ease, color .15s ease, border-color .15s ease; }\\n }\\n\\n/* build 9: the site styles every link at id strength; these win over it */\\n#apDesk.ap-desk a { color: var(--ap-navy); text-decoration: none; }\\n#apDesk.ap-desk a:hover, #apDesk.ap-desk a:focus-visible { text-decoration: underline; }\\n#apDesk.ap-desk a.ap-primary, #apDesk.ap-desk a.ap-primary:hover { color: var(--ap-band); text-decoration: none; } #pageContainer #apDesk.ap-desk a, #pageContainer #apDesk.ap-desk a:hover, #pageContainer #apDesk.ap-desk a:focus, #pageContainer #apDesk.ap-desk a:active, #pageContainer #apDesk.ap-desk a:visited, #apDesk.ap-desk a, #apDesk.ap-desk a:hover, #apDesk.ap-desk a:focus, #apDesk.ap-desk a:active, #apDesk.ap-desk a:visited { text-decoration: none !important; text-decoration-line: none !important; } #pageContainer #apDesk.ap-desk a:not(.ap-primary):not(.ap-btn):hover, #apDesk.ap-desk a:not(.ap-primary):not(.ap-btn):hover { text-decoration: underline !important; text-decoration-line: underline !important; }\\n#apDesk.ap-desk a.ap-btn-primary, #apDesk.ap-desk a.ap-btn-primary:hover { color: #fff; text-decoration: none; }\\n#apDesk.ap-desk a.ap-btn-ghost { color: var(--ap-navy); text-decoration: none; }\\n#apDesk.ap-desk a.ap-btn-ghost:hover { color: #fff; text-decoration: none; }\\n#apDesk.ap-desk .ap-foot a { text-decoration: underline; }\\n.ap-desk .ap-read { display: grid; gap: 10px; margin-top: 4px; padding-top: 14px; border-top: 1px solid var(--ap-rule); }\\n.ap-desk .ap-read h4 { margin: 6px 0 0; font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .ap-read .ask-a { font-size: 16px; }\\n\\n/* build 14 */\\n.ap-desk [id] { scroll-margin-top: 110px; }\\n.ap-desk #gDesk .ap-primary { display: block; width: fit-content; max-width: 100%; margin: 10px auto 0; }\\n.ap-desk #gDesk .ap-primary-note { margin: 22px auto 0; }\\n.ap-desk .srch p.srch-s { font: 400 18px/1.6 var(--ap-sans); margin: 0 0 12px; max-width: 760px; }\\n.ap-desk .srch .ap-card { margin-top: 18px; }\\n.ap-desk .srch .srch-foot { margin-top: 14px; }\\n/* build 16: this week, the pathway, summary lines, the asks, Add his name, the words */\\n.ap-desk .tw { display: grid; gap: 14px; padding: 24px 26px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-left: 4px solid var(--ap-bronze); border-radius: 6px; }\\n.ap-desk .tw p.tw-s { font: 400 18px/1.6 var(--ap-sans); margin: 0; max-width: 820px; }\\n.ap-desk .tw .tw-next { display: grid; gap: 6px; padding-top: 14px; border-top: 1px solid var(--ap-rule); }\\n.ap-desk .tw .tw-next .ap-card-actions { padding-top: 6px; }\\n.ap-desk .sum { font: 400 16px/1.6 var(--ap-sans); color: var(--ap-ink); padding: 12px 14px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; display: grid; gap: 8px; }\\n.ap-desk .sum strong { font-weight: 600; color: var(--ap-navy); }\\n.ap-desk .sum .fix { display: flex; flex-wrap: wrap; gap: 6px 10px; align-items: center; }\\n.ap-desk .ap-btn-sm { padding: 7px 11px; font-size: 13px; }\\n.ap-desk .ap-glow { animation: apGlow 2.2s ease-out 1; }\\n@keyframes apGlow { 0% { box-shadow: 0 0 0 5px var(--ap-bronze); } 100% { box-shadow: 0 0 0 0 transparent; } }\\n.ap-desk .nm-form { display: inline-flex; gap: 6px; flex-wrap: wrap; align-items: center; }\\n.ap-desk .nm-form input { font: 400 15px/1.3 var(--ap-sans); padding: 7px 10px; border: 1px solid var(--ap-rule); border-radius: 2px; width: 220px; max-width: 100%; background: #fff; color: var(--ap-ink); }\\n.ap-desk .ap-mail { display: grid; gap: 10px; margin-top: 4px; padding: 14px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; grid-column: 1 / -1; }\\n.ap-desk .ap-mail pre { margin: 0; white-space: pre-wrap; font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; }\\n.ap-desk .ap-mail .ap-mail-h { font: 600 13px/1.4 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .mv { display: grid; gap: 12px; }\\n.ap-desk .mv .ap-card { gap: 8px; }\\n.ap-desk .mv select, .ap-desk .mv input[type=date] { font: 400 15px/1.3 var(--ap-sans); padding: 8px 10px; border: 1px solid var(--ap-rule); border-radius: 2px; background: #fff; color: var(--ap-ink); max-width: 100%; }\\n.ap-desk .mv .mv-row { display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center; font: 400 14px/1.4 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .mv .mv-row label { display: inline-flex; gap: 6px; align-items: center; }\\n.ap-desk .mv .mv-from { font: 400 14px/1.45 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .words { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px; }\\n@media (max-width: 860px) { .ap-desk .words { grid-template-columns: 1fr; } }\\n.ap-desk .words .w { display: grid; gap: 8px; padding: 14px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; min-width: 0; align-content: start; }\\n.ap-desk .words .w.new { border-color: var(--ap-bronze); box-shadow: inset 3px 0 0 var(--ap-bronze); }\\n.ap-desk .words .w h4 { margin: 0; font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .words .w p { font: 400 15px/1.5 var(--ap-sans); overflow-wrap: anywhere; }\\n.ap-desk .words .w .wl { font: 600 12px/1.3 var(--ap-sans); color: var(--ap-quiet); display: flex; justify-content: space-between; gap: 8px; align-items: center; }\\n/* build 17: this week as four rows, the words panel's states */\\n.ap-desk .tw-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\\n@media (max-width: 860px) { .ap-desk .tw-rows { grid-template-columns: 1fr; } }\\n.ap-desk .tw-row { display: grid; gap: 8px; padding: 18px 20px 16px; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; align-content: start; min-width: 0; }\\n.ap-desk .tw-row .k { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .tw-row .f { font: 400 18px/1.5 var(--ap-serif); color: var(--ap-navy); overflow-wrap: anywhere; }\\n.ap-desk .tw-row .m { font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; }\\n.ap-desk .tw-row .ap-card-actions { padding-top: 6px; }\\n.ap-desk .ap-steps { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\\n</style>\\n<div class=\\\"ap-band\\\">\\n<div class=\\\"ap-band-in\\\">\\n<p class=\\\"ap-eyebrow\\\">Front Desk</p>\\n<h1 class=\\\"ap-hello\\\" id=\\\"apHello\\\">Front Desk</h1>\\n<p class=\\\"ap-line\\\" id=\\\"apLine\\\">Opening the desk.</p>\\n<div id=\\\"gSignin\\\" hidden>\\n<button class=\\\"ap-primary\\\" type=\\\"button\\\" id=\\\"gSigninBtn\\\">Sign in</button>\\n<p class=\\\"ap-primary-note\\\">The Front Desk is for the Ancient Path team. Sign in with your site account to open it.</p>\\n</div>\\n<div id=\\\"gSend\\\" hidden>\\n<div class=\\\"ap-gate-row\\\" id=\\\"gEmailRow\\\" hidden><input class=\\\"ap-email\\\" type=\\\"email\\\" id=\\\"gEmail\\\" placeholder=\\\"your email\\\" autocomplete=\\\"email\\\"></div>\\n<button class=\\\"ap-primary\\\" type=\\\"button\\\" id=\\\"gSendBtn\\\">Send me my desk code</button>\\n<p class=\\\"ap-primary-note\\\" id=\\\"gSendNote\\\">The first time you open the desk on a browser, a six-digit code goes to your email. After that it just opens.</p>\\n<p class=\\\"ap-gate-err\\\" id=\\\"gSendErr\\\" hidden></p>\\n</div>\\n<div id=\\\"gCode\\\" hidden>\\n<div class=\\\"ap-gate-row\\\"><input type=\\\"text\\\" inputmode=\\\"numeric\\\" autocomplete=\\\"one-time-code\\\" maxlength=\\\"7\\\" id=\\\"gCodeIn\\\" placeholder=\\\"000 000\\\" aria-label=\\\"The six-digit code from your email\\\"><button class=\\\"ap-primary\\\" type=\\\"button\\\" id=\\\"gCodeBtn\\\">Open the desk</button></div>\\n<p class=\\\"ap-primary-note\\\" id=\\\"gCodeNote\\\">Check your email for a six-digit code. It works for ten minutes.</p>\\n<p class=\\\"ap-gate-err\\\" id=\\\"gCodeErr\\\" hidden></p>\\n<button class=\\\"ap-gate-again\\\" type=\\\"button\\\" id=\\\"gAgain\\\">Send it again</button>\\n</div>\\n<div id=\\\"gDesk\\\" hidden>\\n<a class=\\\"ap-primary\\\" id=\\\"apPrimary\\\" href=\\\"#lane\\\">See what is waiting</a>\\n<p class=\\\"ap-primary-note\\\" id=\\\"apPrimaryNote\\\">Every form, payment and booking that came in, gathered in one place.</p>\\n</div>\\n</div>\\n</div>\\n<div class=\\\"wrap\\\" id=\\\"deskBody\\\" hidden>\\n<div class=\\\"status\\\" id=\\\"status\\\"><span class=\\\"dot\\\" id=\\\"dot\\\"></span><span id=\\\"statusText\\\">Reading the desk…</span><button class=\\\"plain\\\" id=\\\"refresh\\\" type=\\\"button\\\">Refresh</button></div>\\n<div id=\\\"notices\\\"></div>\\n<section class=\\\"ap-sec first\\\" id=\\\"ask-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">Ask and answer</p><h2 class=\\\"ap-h2\\\">Ask the desk</h2></div><p class=\\\"ap-sec-note\\\">It answers from what the desk holds — the roster, the lane, the week, the list — and nothing else.</p></div>\\n<form class=\\\"ask\\\" id=\\\"askForm\\\">\\n<div class=\\\"ask-row\\\"><input type=\\\"text\\\" id=\\\"askIn\\\" maxlength=\\\"500\\\" placeholder=\\\"Who has signed the agreement but not answered?\\\" aria-label=\\\"Your question\\\"><button class=\\\"ap-btn ap-btn-primary\\\" type=\\\"submit\\\" id=\\\"askBtn\\\">Ask</button></div>\\n<div class=\\\"ask-tries\\\" id=\\\"askTries\\\"></div>\\n<p class=\\\"ask-q\\\" id=\\\"askQ\\\" hidden></p>\\n<p class=\\\"ask-a\\\" id=\\\"askA\\\" hidden></p>\\n<p class=\\\"ask-note\\\" id=\\\"askNote\\\" hidden></p>\\n</form>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"tw-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">The practice</p><h2 class=\\\"ap-h2\\\">This week</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"tw-sub\\\"></p></div>\\n<div class=\\\"tw\\\" id=\\\"tw-body\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"actions-sec\\\">\\n<div class=\\\"ap-sec-head\\\">\\n<div><p class=\\\"ap-kind\\\">Do this</p><h2 class=\\\"ap-h2\\\" id=\\\"actions-h\\\">The lane</h2></div>\\n<div class=\\\"tabs\\\" role=\\\"group\\\" aria-label=\\\"Whose actions\\\" id=\\\"tabs\\\"></div>\\n</div>\\n<div class=\\\"lane\\\" id=\\\"lane\\\"></div>\\n<div class=\\\"ap-card is-next\\\" id=\\\"apNext\\\">\\n<p class=\\\"ap-card-kind\\\">If you want a suggestion</p>\\n<p class=\\\"ap-card-title\\\" id=\\\"apNextTitle\\\">Start with the lane</p>\\n<p class=\\\"ap-card-body\\\" id=\\\"apNextBody\\\">This box names one thing to do next, chosen from what came in.</p>\\n<div class=\\\"ap-card-actions\\\"><a class=\\\"ap-btn ap-btn-ghost\\\" id=\\\"apNextLink\\\" href=\\\"#apc0\\\">Show me the first one</a></div>\\n</div>\\n</section>\\n<section class=\\\"ap-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">The room</p><h2 class=\\\"ap-h2\\\" id=\\\"cohort-h\\\">Breaking Free</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"cohort-sub\\\"></p></div>\\n<div class=\\\"ap-grid ap-grid-4\\\" id=\\\"cohort-tiles\\\"></div>\\n<div class=\\\"room-list\\\" id=\\\"room-list\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"bwm-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">Before we meet</p><h2 class=\\\"ap-h2\\\" id=\\\"bwm-h\\\">Agreement and answers</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"bwm-sub\\\"></p></div>\\n<div class=\\\"ap-grid ap-grid-4\\\" id=\\\"bwm-tiles\\\"></div>\\n<div id=\\\"bwm-list\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">The list</p><h2 class=\\\"ap-h2\\\">ActiveCampaign</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"ac-sub\\\"></p></div>\\n<div class=\\\"ap-grid ap-grid-4\\\" id=\\\"ac-tiles\\\"></div>\\n<div id=\\\"ac-campaigns\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"search-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">The search</p><h2 class=\\\"ap-h2\\\" id=\\\"search-h\\\">How men found us</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"search-sub\\\"></p></div>\\n<div class=\\\"srch\\\" id=\\\"search-body\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"moves-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">Pathway for success</p><h2 class=\\\"ap-h2\\\" id=\\\"moves-h\\\">Moves</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"moves-sub\\\">Every signal gets one move: page fix · search article · poem or lament · story board / Your Story piece · new course section · group · branded one-on-one.</p></div>\\n<div class=\\\"mv\\\" id=\\\"moves-body\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"roster-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">One row per man</p><h2 class=\\\"ap-h2\\\">Roster</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"roster-sub\\\"></p></div>\\n<div id=\\\"roster\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"week-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">Last seven days</p><h2 class=\\\"ap-h2\\\">What came in</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"week-sub\\\"></p></div>\\n<div class=\\\"ap-grid ap-grid-2\\\" id=\\\"week\\\"></div>\\n</section>\\n<footer class=\\\"ap-foot\\\">\\n<div id=\\\"foot-1\\\">Reads the Front Desk sheet and the ActiveCampaign count through the Front Desk script. Nothing on this page is typed by hand.</div>\\n<div><span id=\\\"footWho\\\"></span> <button type=\\\"button\\\" id=\\\"forget\\\">Not you? Forget this browser</button></div>\\n<div><a href=\\\"https://docs.google.com/spreadsheets/d/1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw/edit\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Open the Front Desk sheet</a> · <a href=\\\"https://docs.google.com/spreadsheets/d/1VE7ouQQwiG9A-M49nFATwVCpcG6qJSITaWWmE1AwLeM/edit\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Open the AC count sheet</a></div>\\n</footer>\\n</div>\\n<div class=\\\"wrap\\\" id=\\\"facBody\\\" hidden>\\n<div class=\\\"ap-sec first\\\">\\n<div class=\\\"empty\\\"><strong id=\\\"facTitle\\\">The facilitator desk opens after week 3.</strong><span>Your room's roster and notes will be here, and nothing of any other room.</span></div>\\n</div>\\n<footer class=\\\"ap-foot\\\"><div><span id=\\\"facWho\\\"></span> <button type=\\\"button\\\" id=\\\"facForget\\\">Not you? Forget this browser</button></div></footer>\\n</div>\";\n(function () {\nvar DESK_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split(\"?\")[0] : \"\"; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : \"https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec\"; })();\nvar BUILD = 17, TZ = 'America/Chicago', STORE = 'apDesk';\nvar SCRIPT_SETTINGS = 'https://script.google.com/home/projects/1piMd8lIIuSvToz54hRbZGEJsDm6u0YaoeF-6dMufJvlDhEThQizYhZ42/settings?authuser=john@ancientpathcoaching.com';\nvar $ = function (id) { return document.getElementById(id); };\nvar esc = function (s) { return String(s == null ? '' : s).replace(/[&<>\"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' }[c]; }); };\nvar feed = null, ac = null, owner = 'all', readAt = null, me = null, who = null, timer = null;\n/* build 15: a card closed here leaves the lane at once and a line says so; the script's feed catches up within 5 minutes, so what was closed is held back until a newer feed arrives. */\nvar closedAt = {}, flashMsg = '', flashTimer = null;\nfunction flash(m) { flashMsg = m; notice(esc(m)); if (flashTimer) clearTimeout(flashTimer); flashTimer = setTimeout(function () { flashMsg = ''; notice(''); }, 9000); }\n\ntry { owner = localStorage.getItem('fd-owner') || 'all'; } catch (e) {}\nfunction stored() { try { var v = JSON.parse(localStorage.getItem(STORE) || 'null'); return v && v.key ? v : null; } catch (e) { return null; } }\nfunction keep(v) { try { if (v) localStorage.setItem(STORE, JSON.stringify(v)); else localStorage.removeItem(STORE); } catch (e) {} }\nfunction call(body) {\nif (!DESK_URL) return Promise.reject({ error: 'no_url' });\nreturn fetch(DESK_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), credentials: 'omit' })\n.then(function (r) { return r.json(); }, function () { throw { error: 'network' }; })\n.then(function (r) { if (!r || r.ok !== true) throw (r || { error: 'network' }); return r; });\n}\nfunction words(e) {\nswitch (e && e.error) {\ncase 'not_on_list': return 'That email is not on the desk list. John adds people on the People tab of the Front Desk sheet.';\ncase 'bad_email': return 'That does not look like an email address.';\ncase 'wait': return 'A code went out less than two minutes ago. Check your email, including spam, before asking again.';\ncase 'too_many': return 'Five codes have gone to that address today. Try again tomorrow, or ask John.';\ncase 'code_wrong': return 'That is not the code. Check the six digits and try again.';\ncase 'code_expired': return 'That code has run out. Send a new one.';\ncase 'no_key': case 'bad_key': return 'This browser has no desk key. Ask for a code.';\ncase 'key_expired': return 'Your desk key has run out after ninety days. Ask for a new code.';\ncase 'removed': return 'Your name is no longer on the desk list.';\ncase 'no_claude_key': return 'The desk cannot answer questions yet: the Claude key is not in the script.';\ncase 'not_yet': return 'Questions open with the facilitator desk.';\ncase 'busy': return 'Claude is busy right now. Ask again in a minute.';\ncase 'key_refused': return 'Claude refused the key stored in the script, so the desk cannot answer questions yet. Nothing is wrong with your question. The Claude key in the script needs to be pasted again.';\ncase 'model_unknown': return 'Claude does not know the model named on the Config tab (the row called desk claude model). Clear that row and the desk will use its default.';\ncase 'empty_answer': case 'claude_error': return 'Claude did not answer this time. Your question is saved on the Asks tab. Try again in a few minutes.';\ncase 'empty': return 'Type a question first.';\ncase 'bad_action': return 'That item cannot be closed from here.';\ncase 'bad_name': return 'Type his name as it is said: two to eighty letters, no symbols.';\ncase 'bad_move': return 'Pick one of the seven moves.';\ncase 'have': return 'That move is already on the Moves tab. Refresh the desk.';\ncase 'ours': return 'That address is one of ours, so no email goes.';\ncase 'no_words': return 'No words are on the Words tab for that page yet.';\ncase 'none': return 'That one is already off the lane. Refresh the desk.';\ncase 'no_url': return 'This page does not know where the desk is yet.';\ndefault: return 'The desk could not be reached. Try again in a moment.';\n}\n}\nfunction lwMe() { var m = window.me; return (m && typeof m === 'object' && m.email) ? m : null; }\nfunction signedIn() { return !!lwMe() || (typeof window.getUserToken === 'function' && !!document.querySelector('meta[name=\"csrf-token\"]')); }\nfunction getJSON(path) { return fetch(path, { credentials: 'include', headers: { 'Accept': 'application/json' } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }\nfunction readMe() {\nvar m = lwMe();\nif (m) return Promise.resolve({ email: String(m.email || '').toLowerCase().trim(), name: ((m.firstName || m.first_name || '') + ' ' + (m.lastName || m.last_name || '')).trim() || m.username || '' });\nreturn getJSON('/api/user/me').then(function (r) {\nvar u = (r && r.user) || r || {};\nreturn { email: String(u.email || u.user_email || '').toLowerCase().trim(), name: ((u.first_name || '') + ' ' + (u.last_name || '')).trim() || u.username || '' };\n});\n}\nfunction openSignIn() {\ntry { if (window.l_settings) window.l_settings.redirectUrl = location.pathname + location.search; } catch (e) {}\nvar a = document.querySelector('a[data-interactive-link-type=\"openformslink\"][data-interactive-link-var1=\"signin\"]');\nif (a) { a.click(); return; }\n$('gSigninBtn').textContent = 'Use Sign in at the top of the page';\n}\nfunction dt(iso, withTime) {\nif (!iso) return '';\nvar dateOnly = /^\\d{4}-\\d{2}-\\d{2}$/.test(String(iso));\nvar d = new Date(dateOnly ? iso + 'T12:00:00' : iso); if (isNaN(d)) return String(iso);\nvar o = dateOnly ? { month: 'short', day: 'numeric' } : { timeZone: TZ, month: 'short', day: 'numeric' };\nif (withTime) { o.hour = 'numeric'; o.minute = '2-digit'; }\nreturn d.toLocaleString('en-US', o);\n}\nfunction ago(iso) { if (!iso) return ''; var h = Math.floor((Date.now() - new Date(iso)) / 36e5); if (h < 1) return 'just now'; if (h < 48) return h + ' hour' + (h === 1 ? '' : 's') + ' ago'; return Math.floor(h / 24) + ' days ago'; }\nvar money = function (n) { return '$' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };\nvar plural = function (n, one, many) { return n + ' ' + (n === 1 ? one : many); };\nfunction hourCentral() { return parseInt(new Date().toLocaleString('en-US', { timeZone: TZ, hour: 'numeric', hour12: false }), 10) || 0; }\nfunction greet() { var h = hourCentral(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }\nfunction first(name) { return String(name || '').split(' ')[0]; }\nfunction show(id) { ['gSignin', 'gSend', 'gCode', 'gDesk'].forEach(function (x) { $(x).hidden = x !== id; }); }\nfunction gateSignin() {\n$('apHello').textContent = 'Front Desk';\n$('apLine').textContent = 'Sign in to open the desk.';\nshow('gSignin'); $('deskBody').hidden = true; $('facBody').hidden = true;\n}\nfunction gateSend(line) {\n$('apHello').textContent = greet() + (me && me.name ? ', ' + first(me.name) + '.' : '.');\n$('apLine').textContent = line || (me && me.email ? 'Signed in as ' + me.email + '.' : 'Signed in.');\n$('gEmailRow').hidden = !!(me && me.email);\n$('gSendErr').hidden = true;\nshow('gSend'); $('deskBody').hidden = true; $('facBody').hidden = true;\n}\nfunction gateCode(minutes) {\n$('gCodeNote').textContent = 'Check your email for a six-digit code. It works for ' + (minutes || 10) + ' minutes.';\n$('gCodeErr').hidden = true; $('gCodeIn').value = '';\nshow('gCode');\nsetTimeout(function () { try { $('gCodeIn').focus(); } catch (e) {} }, 50);\n}\nfunction emailForCode() { return (me && me.email) || String($('gEmail').value || '').toLowerCase().trim(); }\n$('gSigninBtn').addEventListener('click', openSignIn);\n$('gSendBtn').addEventListener('click', function () {\nvar email = emailForCode();\nif (!email) { $('gSendErr').textContent = 'Type your email first.'; $('gSendErr').hidden = false; return; }\nvar b = $('gSendBtn'); b.disabled = true; b.textContent = 'Sending…'; $('gSendErr').hidden = true;\ncall({ action: 'code_send', email: email }).then(function (r) {\nb.disabled = false; b.textContent = 'Send me my desk code';\ngateCode(r.minutes);\n}, function (e) {\nb.disabled = false; b.textContent = 'Send me my desk code';\nif (e && e.error === 'wait') { gateCode(10); $('gCodeErr').textContent = words(e); $('gCodeErr').hidden = false; return; }\n$('gSendErr').textContent = words(e); $('gSendErr').hidden = false;\n});\n});\n$('gAgain').addEventListener('click', function () { gateSend(); });\n$('gEmail').addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); $('gSendBtn').click(); } });\nfunction checkCode() {\nvar code = String($('gCodeIn').value || '').replace(/\\D/g, '');\nif (code.length !== 6) { $('gCodeErr').textContent = 'The code is six digits.'; $('gCodeErr').hidden = false; return; }\nvar b = $('gCodeBtn'); b.disabled = true; b.textContent = 'Opening…'; $('gCodeErr').hidden = true;\ncall({ action: 'code_check', email: emailForCode(), code: code, browser: navigator.userAgent.slice(0, 120) }).then(function (r) {\nb.disabled = false; b.textContent = 'Open the desk';\nkeep({ key: r.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: r.expires });\nopenDesk();\n}, function (e) {\nb.disabled = false; b.textContent = 'Open the desk';\n$('gCodeErr').textContent = words(e); $('gCodeErr').hidden = false;\nif (e && e.error === 'code_expired') setTimeout(function () { gateSend('That code ran out. Send a new one.'); }, 1800);\n});\n}\n$('gCodeBtn').addEventListener('click', checkCode);\n$('gCodeIn').addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); checkCode(); } });\nfunction forgetBrowser() {\nvar s = stored();\nif (s) call({ action: 'forget', key: s.key }).catch(function () {});\nkeep(null); who = null; feed = null;\nif (timer) { clearInterval(timer); timer = null; }\ngateSend('This browser forgot its desk key.');\n}\n$('forget').addEventListener('click', forgetBrowser);\n$('facForget').addEventListener('click', forgetBrowser);\nfunction openDesk() {\nvar s = stored();\nif (!s) { gateSend(); return; }\nwho = s;\n$('apHello').textContent = greet() + (s.name ? ', ' + first(s.name) + '.' : '.');\n$('apLine').textContent = 'Opening the desk.';\nshow('gDesk');\nif (s.role === 'facilitator') {\n$('deskBody').hidden = true; $('facBody').hidden = false;\n$('facWho').textContent = 'Signed in as ' + s.email + '.';\n$('gDesk').hidden = true;\n$('apLine').textContent = 'The facilitator desk' + (s.room ? ' for ' + s.room : '') + ' opens after week 3.';\nreturn;\n}\n$('facBody').hidden = true; $('deskBody').hidden = false;\n$('footWho').textContent = 'Signed in as ' + s.email + '.';\nrenderAll();\nload();\nif (!timer) timer = setInterval(function () { if (document.visibilityState === 'visible') load(true); }, 300000);\n}\nfunction load(quiet) {\nvar s = stored(); if (!s) { gateSend(); return; }\nif (!quiet) setStatus(feed ? 'stale' : '', feed ? 'Refreshing…' : 'Reading the desk…');\ncall({ action: 'desk', key: s.key }).then(function (r) {\nif (r.role !== 'admin') { keep({ key: s.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: s.expires }); openDesk(); return; }\nfeed = r.feed; if (feed && feed.actions) { feed.actions = feed.actions.filter(function (a) { var t = closedAt[a.key]; return !(t && String(feed.generated || '') < t); }); } ac = r.ac; readAt = Date.now(); who.canAsk = r.canAsk; who.claude = r.claude || null; who.people = r.people || [];\nnotice(flashMsg ? esc(flashMsg) : '');\nif (!feed) { renderAll(); setStatus('stale', 'The desk has not been written yet'); notice('The Front Desk sheet has no feed yet. In Apps Script, run <strong>reread</strong> once; the desk fills within a minute.'); return; }\nrenderAll();\nsetStatus('live', 'Script wrote ' + dt(feed.generated, true) + ' · read ' + dt(new Date(readAt).toISOString(), true));\n}, function (e) {\nvar code = e && e.error;\nif (code === 'no_key' || code === 'bad_key' || code === 'key_expired' || code === 'removed') { keep(null); who = null; feed = null; if (timer) { clearInterval(timer); timer = null; } gateSend(words(e)); return; }\nsetStatus(feed ? 'stale' : 'off', feed ? 'Showing the last good read' : 'Could not read the desk'); notice(words(e));\n});\n}\n$('refresh').addEventListener('click', function () { load(); });\nfunction owners() {\nvar set = {}; ((feed && feed.actions) || []).forEach(function (a) { if (a.owner) set[a.owner] = 1; });\n((who && who.people) || []).forEach(function (p) { if (p.role === 'admin' && p.name) set[p.name] = 1; });\nreturn Object.keys(set).sort();\n}\nfunction renderTabs() {\nvar names = owners(); var host = $('tabs');\nif (names.indexOf(owner) < 0 && owner !== 'all') owner = 'all';\nhost.innerHTML = ['all'].concat(names).map(function (n) { return '<button type=\"button\" data-owner=\"' + esc(n) + '\" aria-pressed=\"' + (n === owner) + '\">' + esc(n === 'all' ? 'Everyone' : n) + '</button>'; }).join('');\nArray.prototype.forEach.call(host.querySelectorAll('button'), function (b) {\nb.addEventListener('click', function () { owner = b.getAttribute('data-owner'); try { localStorage.setItem('fd-owner', owner); } catch (e) {} renderTabs(); renderActions(); });\n});\n}\nfunction mine() {\nvar all = (feed && feed.actions) || [];\nvar list = owner === 'all' ? all : all.filter(function (a) { return (a.owner || '').toLowerCase() === owner.toLowerCase(); });\nreturn list.slice().sort(function (a, b) { return new Date(a.firstSeen || 0) - new Date(b.firstSeen || 0); });\n}\nfunction other(name) { var n = owners().filter(function (x) { return x !== name; }); return n.length === 1 ? n[0] : 'the others'; }\nfunction renderGreeting() {\nvar line = $('apLine'), btn = $('apPrimary'), note = $('apPrimaryNote');\nif (!feed) { line.textContent = 'Reading the desk.'; btn.textContent = 'See what is waiting'; btn.href = '#lane'; note.textContent = 'Every form, payment and booking that came in, gathered in one place.'; return; }\nvar all = (feed.actions || []).slice().sort(function (a, b) { return new Date(a.firstSeen || 0) - new Date(b.firstSeen || 0); }), c = feed.cohort || {};\nvar reader = first((who && who.name) || '');\nvar sameOwner = function (a, n) { return n && (a.owner || '').toLowerCase() === n.toLowerCase(); };\nvar ownList = all.filter(function (a) { return sameOwner(a, reader); });\nvar others = owners().filter(function (n) { return n.toLowerCase() !== reader.toLowerCase(); });\nvar waiting = all.length ? plural(all.length, 'thing needs', 'things need') + ' a hand' : 'Nothing is waiting on anyone';\nvar counts = all.length ? (reader ? plural(ownList.length, 'thing', 'things') + ' for you' : '') + others.map(function (n) { var k = all.filter(function (a) { return sameOwner(a, n); }).length; return (reader ? ', ' : '') + k + ' for ' + n; }).join('') : '';\nvar room = c.openSpots != null ? (c.openSpots === 0 ? 'The room is full.' : plural(c.openSpots, 'open spot', 'open spots') + ' in the room.') : '';\nline.innerHTML = '<span class=\"ap-s\">' + esc(waiting) + (counts ? ':' : '.') + '</span> ' + (counts ? '<span class=\"ap-s\">' + esc(counts) + '.</span> ' : '') + (room ? '<span class=\"ap-s\">' + esc(room) + '</span>' : '');\nvar f = ownList[0] || all[0];\nif (f) {\nvar his = sameOwner(f, reader);\nbtn.textContent = (his ? '' : 'For ' + (f.owner || 'the desk') + ': ') + (f.do || 'Open the lane'); btn.href = f.link || '#lane';\nif (f.link) { btn.target = '_blank'; btn.rel = 'noopener'; } else { btn.removeAttribute('target'); btn.removeAttribute('rel'); }\nnote.textContent = (f.for ? f.for : '') + (f.firstSeen ? (f.for ? ' · ' : '') + 'waiting since ' + dt(f.firstSeen, true) : '') + (his || !reader ? '' : ' · nothing is waiting on you');\n} else {\nbtn.textContent = 'Read what came in'; btn.href = '#week-sec';\nbtn.removeAttribute('target'); btn.removeAttribute('rel');\nnote.textContent = feed.doneThisWeek ? feed.doneThisWeek + ' closed this week on its own.' : 'The last seven days, by kind and by name.';\n}\n}\nfunction kindOf(a) { var m = /^([a-z]+):/.exec(String((a && a.key) || '')); return m ? m[1] : ''; }\nfunction oldWhy(a) {\nswitch (kindOf(a)) {\ncase 'seat': case 'bwm': case 'wl': case 'agr': case 'askans': case 'contact':\nreturn 'A man is waiting to hear from our team, and the sooner he does, the more his first step means.';\ncase 'ans': case 'add': return 'A man trusted us with his answers; the sooner they are read, the sooner he feels heard.';\ncase 'first': return 'A man chose to meet one-on-one and is waiting to hear when.';\ncase 'room': return 'The seat link is still open to men the room cannot hold.';\ncase 'search': return 'The month\\'s search story is waiting for a look.';\ndefault: return '';\n}\n}\nfunction renderNext() {\nvar t = $('apNextTitle'), b = $('apNextBody'), l = $('apNextLink');\nif (!feed) return;\nvar all = feed.actions || [], list = mine(), c = feed.cohort || {};\nvar old = list.filter(function (a) { return a.firstSeen && (Date.now() - new Date(a.firstSeen)) > 48 * 36e5; });\nvar title, body, href = '#lane', label = 'Show me the first one';\nif (old.length) {\ntitle = 'Clear the oldest one first';\nbody = plural(old.length, 'thing has', 'things have') + ' waited more than two days. ' + (oldWhy(old[0]) ? oldWhy(old[0]) + ' ' : '') + 'Start with ' + (old[0].for || old[0].do) + '.';\nhref = '#apc' + list.indexOf(old[0]);\n} else if (list.length) {\ntitle = 'Work the lane top to bottom'; body = 'It is in the order things came in. Nothing here is older than two days, so one pass clears it.'; href = '#apc0';\n} else if ((c.openSpots || 0) > 0 && (c.waitList || 0) > 0) {\ntitle = 'Seat someone from the wait list';\nbody = plural(c.waitList, 'man is', 'men are') + ' on the wait list and the room has ' + plural(c.openSpots, 'open spot', 'open spots') + '. Our team sends the email a man gets; the roster shows who has signed the agreement and who has answered the questions.';\nhref = '#roster-sec'; label = 'Open the roster';\n} else if (all.length && owner !== 'all') {\ntitle = 'Nothing for ' + owner + ' today'; body = 'The rest of the lane belongs to ' + other(owner) + '. Yours is clear.'; href = '#week-sec'; label = 'See what came in';\n} else {\ntitle = 'Read what came in'; body = 'Nothing needs a hand. The last seven days are below, by kind and by name, with payments and bookings beside them.'; href = '#week-sec'; label = 'Read what came in';\n}\nt.textContent = title; b.textContent = body; l.textContent = label; l.href = href;\nl.removeAttribute('target'); l.removeAttribute('rel');\n}\n/* build 11: the Before We Meet cards (keys ans: add: askans: agr: bwm:) carry him — email him, text him — and the answers reader */\nvar ANS_KEY = /^(ans|add|askans|agr|bwm):([^:]+)/;\nvar answersCache = {}, readOpen = {};\nfunction keyEmail(a) { var m = ANS_KEY.exec((a && a.key) || ''); return m ? m[2].toLowerCase() : ''; }\nfunction rosterMan(email) { var r = (feed && feed.roster) || []; for (var i = 0; i < r.length; i++) { if (String(r[i].email).toLowerCase() === email) return r[i]; } return null; }\nfunction smsHref(p) { var d = String(p || '').replace(/[^\\d+]/g, ''); return d.length >= 7 ? 'sms:' + d : ''; }\nfunction linkLabel(a) {\nvar k = kindOf(a);\nif (a.key === 'room:full') return 'Open the offers page';\nif (k === 'search') return /\\/author\\//.test(a.link || '') ? 'Open the page\\u2019s settings' : 'Open the page';\nif (k === 'refresh') return 'Open the search sheet';\nreturn 'Open';\n}\nfunction doneLabel(a) { return a.key === 'room:full' ? 'I closed it' : 'Done'; }\nfunction cardActions(a) {\n  var em = keyEmail(a), p = em ? rosterMan(em) : null, out = [], hasRead = /^(ans|add):/.test(a.key || '');\n  if (hasRead) out.push('<button type=\"button\" class=\"ap-btn ap-btn-primary\" data-read=\"' + esc(a.key) + '\" data-email=\"' + esc(em) + '\">' + (readOpen[a.key] ? 'Hide his answers' : 'Read his answers') + '</button>');\n  var w = kindOf(a) === 'search' ? wordsFor(a.page || a.for) : null;\n  if (a.link && !w) out.push('<a class=\"ap-btn ' + (hasRead ? 'ap-btn-ghost' : 'ap-btn-primary') + '\" href=\"' + esc(a.link) + '\" target=\"_blank\" rel=\"noopener\">' + esc(linkLabel(a)) + '</a>');\n  if (em) {\n    out.push('<a class=\"ap-btn ap-btn-ghost\" data-mail href=\"mailto:' + esc(em) + '\">Email him</a>');\n    var sms = p ? smsHref(p.phone) : '';\n    if (sms) out.push('<a class=\"ap-btn ap-btn-ghost\" data-text href=\"' + esc(sms) + '\">Text him</a>');\n  }\n  var kind = askKind(a.key);\n  if (kind && em) out.unshift('<button type=\"button\" class=\"ap-btn ap-btn-primary\" data-mail-see=\"' + esc(a.key) + '\" data-kind=\"' + kind + '\" data-email=\"' + esc(em) + '\">' + (a.asked ? 'See the email again' : 'See the email') + '</button>');\n  if (a.key) out.push('<button type=\"button\" class=\"ap-btn ' + (a.link || hasRead || kind ? 'ap-btn-ghost' : 'ap-btn-primary') + '\" data-done=\"' + esc(a.key) + '\">' + doneLabel(a) + '</button>');\n  if (!out.length) return '';\n  return (a.asked ? '<p class=\"ap-card-state\">Asked by email ' + esc(dt(a.asked, true)) + '. The card stays until he ' + (kind === 'answers' ? 'answers' : 'signs') + '.</p>' : '') +\n    (w ? wordsHtml(w, editOf(a)) : '') +\n    '<div class=\"ap-card-actions\">' + out.join('') + '</div>' + (hasRead ? '<div class=\"ap-read\" data-pane=\"' + esc(a.key) + '\"' + (readOpen[a.key] ? '' : ' hidden') + '>' + (readOpen[a.key] && answersCache[em] ? answersHtml(answersCache[em]) : '') + '</div>' : '') +\n    (kind ? '<div class=\"ap-mail\" data-mail-pane=\"' + esc(a.key) + '\" hidden></div>' : '');\n}\nfunction answersHtml(r) {\n  var h = '<p class=\"ap-card-state\">' + esc(r.doorWords || '') + (r.at ? ' · in ' + esc(dt(r.at, true)) : '') + '</p>';\n  (r.items || []).forEach(function (x) { h += '<div><p class=\"ask-q\">' + esc(x.q) + '</p><p class=\"ask-a\">' + esc(x.a) + '</p></div>'; });\n  if ((r.since || []).length) {\n    h += '<h4>Since we met</h4>';\n    r.since.forEach(function (x) { h += '<div><p class=\"ask-q\">' + esc(x.d || '') + '</p><p class=\"ask-a\">' + esc(x.t) + '</p></div>'; });\n  }\n  return h;\n}\nfunction bindLane() {\n  var lane = $('lane'), s = stored(); if (!lane || !s) return;\n  Array.prototype.forEach.call(lane.querySelectorAll('[data-read]'), function (b) {\n    b.addEventListener('click', function () {\n      var key = b.getAttribute('data-read'), em = b.getAttribute('data-email'), pane = lane.querySelector('[data-pane=\"' + key.replace(/\"/g, '') + '\"]');\n      if (!pane) return;\n      if (readOpen[key]) { readOpen[key] = false; pane.hidden = true; b.textContent = 'Read his answers'; return; }\n      readOpen[key] = true; pane.hidden = false; b.textContent = 'Hide his answers';\n      if (answersCache[em]) { pane.innerHTML = answersHtml(answersCache[em]); return; }\n      pane.innerHTML = '<p class=\"ap-card-state\">Opening his answers…</p>';\n      call({ action: 'answers', key: s.key, email: em }).then(function (r) { answersCache[em] = r; if (readOpen[key]) pane.innerHTML = answersHtml(r); },\n        function (e) { pane.innerHTML = '<p class=\"ap-card-state\">' + esc(e && e.error === 'none' ? 'No answers on file for him yet.' : words(e)) + '</p>'; readOpen[key] = false; b.textContent = 'Read his answers'; });\n    });\n  });\n  bindDone(lane); bindMail(lane); bindNames(lane); bindCopy(lane);\n}\nfunction bindDone(root) {\n  var s = stored(); if (!root || !s) return;\n  Array.prototype.forEach.call(root.querySelectorAll('[data-done]'), function (b) {\n    b.addEventListener('click', function () {\n      var was = b.textContent, key = b.getAttribute('data-done'); b.disabled = true; b.textContent = 'Closing…';\n      call({ action: 'done', key: s.key, actionKey: key }).then(function () {\n        var gone = null; closedAt[key] = new Date().toISOString();\n        if (feed && feed.actions) { feed.actions = feed.actions.filter(function (a) { if (a.key === key) { gone = a; return false; } return true; }); if (gone && typeof feed.doneThisWeek === 'number') feed.doneThisWeek++; }\n        renderAll(); flash('Closed' + (gone && gone.do ? ': ' + gone.do : '') + '. It is off the lane.'); load(true);\n      }, function (e) { b.disabled = false; b.textContent = was; notice(esc(words(e))); });\n    });\n  });\n}\nfunction renderActions() {\nrenderGreeting(); renderNext();\nvar lane = $('lane');\nif (!feed) { lane.innerHTML = '<div class=\"empty\"><strong>Reading the desk.</strong><span>Anything that needs a hand shows up here with one owner and one verb.</span></div>'; return; }\nvar all = feed.actions || [], list = mine();\n$('actions-h').textContent = all.length ? plural(all.length, 'thing to do', 'things to do') : 'Nothing waiting';\nif (!list.length) {\nlane.innerHTML = '<div class=\"empty\"><strong>' + (all.length ? 'Nothing for ' + esc(owner) + ' right now.' : 'Clear.') + '</strong><span>' + (feed.doneThisWeek ? feed.doneThisWeek + ' closed this week on its own.' : 'When a man signs the agreement, answers the questions, enrolls, reports a bug or offers a story, the next step appears here.') + '</span></div>';\nreturn;\n}\nlane.innerHTML = list.map(function (a, i) {\nvar old = a.firstSeen && (Date.now() - new Date(a.firstSeen)) > 48 * 36e5;\nreturn '<article class=\"ap-card act\" id=\"apc' + i + '\">' +\n'<p class=\"ap-card-kind\">For ' + esc(a.owner) + '</p>' +\n'<p class=\"ap-card-title\">' + esc(a.do) + '</p>' +\n(a.for ? '<p class=\"ap-card-body\">' + esc(a.for) + '</p>' : '') +\n(a.because ? '<p class=\"ap-card-state\">' + esc(a.because) + '</p>' : '') +\n'<p class=\"ap-card-state\">First seen ' + esc(dt(a.firstSeen, true)) + (old ? ' <span class=\"wait\">waiting ' + esc(ago(a.firstSeen)) + '</span>' : '') + '</p>' +\ncardActions(a) +\n'</article>';\n}).join('');\nbindLane();\n}\nvar TRIES = ['What is the one thing to do this week?', 'Who has signed the agreement but not answered the questions?', 'What move is due next, and whose is it?', 'What came in since Monday?'];\nfunction renderAsk() {\n$('askTries').innerHTML = TRIES.map(function (q) { return '<button type=\"button\">' + esc(q) + '</button>'; }).join('');\nArray.prototype.forEach.call($('askTries').querySelectorAll('button'), function (b) { b.addEventListener('click', function () { $('askIn').value = b.textContent; ask(); }); });\nvar st = who && who.claude && who.claude.state;\nif (who && who.canAsk === false) { askMsg({ error: 'no_claude_key' }); } else if (st === 'refused') { askMsg({ error: 'key_refused' }); } else if (st === 'model') { askMsg({ error: 'model_unknown' }); } else { $('askNote').hidden = true; }\n}\nfunction askMsg(e) {\nvar n = $('askNote'); n.className = 'ask-note bad';\nn.innerHTML = '<span>' + esc(words(e)) + '</span>' + (e && e.error === 'key_refused' ? '<a class=\"ap-btn ap-btn-ghost\" href=\"' + SCRIPT_SETTINGS + '\" target=\"_blank\" rel=\"noopener\">Open the script settings</a>' : '');\nn.hidden = false;\n}\nfunction ask() {\nvar q = String($('askIn').value || '').trim();\nif (!q) { $('askNote').className = 'ask-note'; $('askNote').textContent = words({ error: 'empty' }); $('askNote').hidden = false; return; }\nvar s = stored(); if (!s) { gateSend(); return; }\nvar b = $('askBtn'); b.disabled = true; b.textContent = 'Reading the desk…';\n$('askQ').textContent = q; $('askQ').hidden = false; $('askA').hidden = true; $('askNote').hidden = true; $('askNote').className = 'ask-note';\ncall({ action: 'ask', key: s.key, question: q }).then(function (r) {\nb.disabled = false; b.textContent = 'Ask';\n$('askA').textContent = r.answer; $('askA').hidden = false;\n$('askNote').className = 'ask-note'; $('askNote').textContent = 'Answered from the desk as it stood at ' + dt(new Date().toISOString(), true) + '. ' + r.asked + ' of ' + r.of + ' questions today.'; $('askNote').hidden = false;\n}, function (e) {\nb.disabled = false; b.textContent = 'Ask';\naskMsg(e);\n});\n}\n$('askForm').addEventListener('submit', function (ev) { ev.preventDefault(); ask(); });\nfunction tile(label, num, sub, hero, extra) { return '<div class=\"tile' + (hero ? ' hero' : '') + '\"><div class=\"label\">' + esc(label) + '</div><div class=\"num\">' + num + '</div>' + (sub ? '<div class=\"sub\">' + sub + '</div>' : '') + (extra || '') + '</div>'; }\nfunction renderCohort() {\nvar c = feed && feed.cohort, el = $('cohort-tiles');\nif (!c) { el.innerHTML = tile('Seated', '—', 'Reading the desk'); return; }\n$('cohort-h').textContent = c.name || 'Breaking Free';\n$('cohort-sub').textContent = c.firstNight ? 'Week 1 ' + dt(c.firstNight) : '';\nvar seats = '<div class=\"seats\" aria-hidden=\"true\">' + Array.apply(null, Array(c.roomSize || 8)).map(function (_, i) { return '<span class=\"seat' + (i < c.seated ? ' on' : '') + '\"></span>'; }).join('') + '</div>';\nel.innerHTML =\ntile('Seated', c.seated + '<small>of ' + c.roomSize + '</small>', c.openSpots === 0 ? 'The room is full' : plural(c.openSpots, 'open spot', 'open spots'), true, seats) +\ntile('Agreement signed', c.agreementSigned, 'signed the agreement and gave his details') +\ntile('On the wait list', c.waitList, 'not yet seated') +\ntile('Account only', c.accountOnly, 'made a site account, nothing else yet');\n}\nfunction num(v) { return v == null ? '—' : v; }\nfunction howLabel(h) { return h === 'by hand' ? '<span class=\"how hand\">By hand</span>' : '<span class=\"how\">Seat link</span>'; }\n/* build 12: Before We Meet has two halves. The agreement is the signed form (name and contact details). The answers are the twelve questions a man writes at /your-answers. */\nvar bwmOpen = {};\nfunction doorOf(m) { return m.door || 'Group'; }\nfunction inGroup(m) { return doorOf(m) !== 'One-on-one'; }\nfunction bwmGroups() {\n  var r = (feed && feed.roster) || [];\n  var newest = function (k) { return function (a, b) { return String(b[k] || '').localeCompare(String(a[k] || '')); }; };\n  return {\n    answered: r.filter(function (m) { return m.answersIn; }).sort(newest('answersIn')),\n    waitGroup: r.filter(function (m) { return m.agreementSigned && !m.answersIn && inGroup(m); }).sort(newest('agreementSigned')),\n    waitOne: r.filter(function (m) { return m.agreementSigned && !m.answersIn && !inGroup(m); }).sort(newest('agreementSigned')),\n    noAgreement: r.filter(function (m) { return m.seated && !m.agreementSigned && !m.answersIn; }).sort(newest('seated'))\n  };\n}\nfunction bwmRow(m, kind, when, note) {\n  var em = String(m.email || '').toLowerCase(), open = !!bwmOpen[em];\n  var read = kind === 'Answers in' ? '<button type=\"button\" class=\"ap-btn ap-btn-primary\" data-bwm-read=\"' + esc(em) + '\">' + (open ? 'Hide his answers' : 'Read his answers') + '</button> ' : '';\n  return '<li><span><span class=\"kind\">' + esc(kind) + '</span>' + nameOf(m) + '</span><span class=\"r\">' + esc(dt(when, true)) + '</span>' +\n    '<span class=\"s\">' + esc(m.email) + ' · ' + esc(note) + '</span>' +\n    '<span class=\"r\">' + read + '<a class=\"ap-btn ap-btn-ghost\" href=\"mailto:' + esc(em) + '\">Email him</a></span>' +\n    '<div class=\"ap-read\" data-bwm-pane=\"' + esc(em) + '\" style=\"grid-column: 1 / -1\"' + (open ? '' : ' hidden') + '>' + (open && answersCache[em] ? answersHtml(answersCache[em]) : '') + '</div></li>';\n}\nfunction renderBwm() {\n  var c = feed && feed.cohort, tiles = $('bwm-tiles'), list = $('bwm-list');\n  if (!tiles || !list) return;\n  if (!c) { tiles.innerHTML = tile('Answers in', '—', 'Reading the desk'); list.innerHTML = ''; $('bwm-sub').textContent = ''; return; }\n  var g = bwmGroups();\n  $('bwm-sub').textContent = 'The signed agreement, and the twelve questions he answers at /your-answers';\n  tiles.innerHTML =\n    tile('Agreement signed', c.agreementSigned, 'signed the agreement and gave his details') +\n    tile('Answers in', c.answersIn, 'saved the twelve questions', true) +\n    tile('Waiting on answers', g.waitGroup.length + g.waitOne.length, g.waitGroup.length + ' group · ' + g.waitOne.length + ' one-on-one') +\n    tile('Seated, no agreement', g.noAgreement.length, 'enrolled, nothing signed on file');\n  var box = function (title, items, empty) { return '<div class=\"door\"><h3>' + esc(title) + '</h3>' + (items.length ? '<ul class=\"list\">' + items.join('') + '</ul>' : '<div class=\"muted small\">' + esc(empty) + '</div>') + '</div>'; };\n  var r = (feed && feed.roster) || [];\n  var seatedMen = r.filter(function (m) { return m.seated; }), signedSeated = seatedMen.filter(function (m) { return m.agreementSigned; });\n  var noAgr = seatedMen.filter(function (m) { return !m.agreementSigned; });\n  var signedAll = r.filter(function (m) { return m.agreementSigned; }), answered = signedAll.filter(function (m) { return m.answersIn; }), noAns = signedAll.filter(function (m) { return !m.answersIn; });\n  var outs = function (men, kind, verb) { return men.length ? '<div class=\"fix\"><span>Outstanding:</span>' + men.map(function (m) { return '<span class=\"fix\">' + nameOf(m) + ' <button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm\" data-mail-see=\"' + esc(kind + ':' + m.email) + '\" data-kind=\"' + kind + '\" data-email=\"' + esc(m.email) + '\">' + (m[kind === 'agreement' ? 'askedAgreement' : 'askedAnswers'] ? 'Asked ' + esc(dt(m[kind === 'agreement' ? 'askedAgreement' : 'askedAnswers'])) + ' · see it' : verb) + '</button></span>'; }).join('') + '</div><div class=\"ap-mail\" data-mail-pane=\"' + kind + '\" hidden></div>' : ''; };\n  var summary = '<div class=\"sum\"><div><strong>' + signedSeated.length + ' of ' + seatedMen.length + '</strong> in the room have signed the agreement.' + (noAgr.length ? '' : ' Every seated man has signed.') + '</div>' + outs(noAgr, 'agreement', 'Send the agreement ask') + '</div>' +\n    '<div class=\"sum\"><div><strong>' + answered.length + ' of ' + signedAll.length + '</strong> who signed have answered the questions.' + (noAns.length ? '' : (signedAll.length ? ' Everyone who signed has answered.' : '')) + '</div>' + outs(noAns, 'answers', 'Send the answers ask') + '</div>';\n  list.innerHTML = '<div style=\"display: grid; gap: 14px; margin-top: 14px\">' + summary +\n    box('Answers in', g.answered.map(function (m) { return bwmRow(m, 'Answers in', m.answersIn, doorOf(m) + ' · ' + (m.agreementSigned ? 'agreement signed ' + dt(m.agreementSigned) : 'no signed agreement on file yet')); }), 'No one has saved his answers yet. They show here the moment a man saves the twelve questions.') +\n    box('Group men: signed the agreement, waiting on answers', g.waitGroup.map(function (m) { return bwmRow(m, doorOf(m), m.agreementSigned, 'signed the agreement, no answers yet'); }), 'No one is waiting.') +\n    box('One-on-one men: coaching has started, no answers yet', g.waitOne.map(function (m) { return bwmRow(m, 'One-on-one', m.agreementSigned, 'coaching has started, no answers yet'); }), 'No one is behind.') +\n    box('Seated with no agreement', g.noAgreement.map(function (m) { return bwmRow(m, 'Group', m.seated, 'enrolled, no signed agreement on file'); }), 'Every seated man has signed.') +\n    '</div>';\n  var s = stored(); if (!s) return;\n  bindMail(list); bindNames(list);\n  Array.prototype.forEach.call(list.querySelectorAll('[data-bwm-read]'), function (b) {\n    b.addEventListener('click', function () {\n      var em = b.getAttribute('data-bwm-read'), li = b.closest('li'), pane = li && li.querySelector('[data-bwm-pane]');\n      if (!pane) return;\n      if (bwmOpen[em]) { bwmOpen[em] = false; pane.hidden = true; b.textContent = 'Read his answers'; return; }\n      bwmOpen[em] = true; pane.hidden = false; b.textContent = 'Hide his answers';\n      if (answersCache[em]) { pane.innerHTML = answersHtml(answersCache[em]); return; }\n      pane.innerHTML = '<p class=\"ap-card-state\">Opening his answers…</p>';\n      call({ action: 'answers', key: s.key, email: em }).then(function (r) { answersCache[em] = r; if (bwmOpen[em]) pane.innerHTML = answersHtml(r); },\n        function (e) { pane.innerHTML = '<p class=\"ap-card-state\">' + esc(e && e.error === 'none' ? 'No answers on file for him yet.' : words(e)) + '</p>'; bwmOpen[em] = false; b.textContent = 'Read his answers'; });\n    });\n  });\n}\nfunction renderRoom() {\nvar el = $('room-list'); if (!el) return;\nvar room = feed && feed.room;\nif (!room) { el.innerHTML = ''; return; }\nvar men = room.men || [];\nif (!men.length) { el.innerHTML = '<div class=\"empty\"><strong>No one in the room yet.</strong><span>A man appears here the moment his enrollment notice lands in john@ — through the seat link or enrolled by hand.</span></div>'; return; }\nvar table = '<div class=\"ro-table tablewrap\"><table><thead><tr><th>Seat</th><th>Name</th><th>How he got in</th><th>When</th><th class=\"num\">Open after him</th></tr></thead><tbody>' +\nmen.map(function (m) { return '<tr><td><span class=\"seatno\">' + esc(m.seat) + ' of ' + esc(room.size) + '</span></td><td><div class=\"name\">' + nameOf(m) + '</div><div class=\"small muted\">' + esc(m.email) + '</div></td><td>' + howLabel(m.how) + '</td><td>' + esc(dt(m.when, true)) + '</td><td class=\"num\">' + esc(m.openAfter) + '</td></tr>'; }).join('') + '</tbody></table></div>';\nvar cards = '<div class=\"ro-cards\">' + men.map(function (m) {\nreturn '<article class=\"ap-card\"><span class=\"seatno\">Seat ' + esc(m.seat) + ' of ' + esc(room.size) + '</span><p class=\"ap-card-title\">' + nameOf(m) + '</p><p class=\"ap-card-state\">' + esc(m.email) + '</p><div class=\"facts\">' +\nfact('How he got in', howLabel(m.how)) + fact('When', esc(dt(m.when, true))) + fact('Open after him', esc(m.openAfter)) + '</div></article>';\n}).join('') + '</div>';\nvar noName = men.filter(function (m) { return !m.name; });\nvar summary = '<div class=\"sum\" style=\"margin-bottom: 12px\"><div><strong>' + men.length + ' of ' + esc(room.size) + '</strong> seats are taken' + (room.open ? ' — ' + plural(room.open, 'open spot', 'open spots') + '.' : '. The room is full.') + (noName.length ? ' ' + plural(noName.length, 'man has', 'men have') + ' no name yet.' : '') + '</div>' + (noName.length ? '<div class=\"fix\"><span>Outstanding:</span>' + noName.map(function (m) { return '<span class=\"fix\">' + esc(m.email) + ' ' + nameBtn(m.email) + '</span>'; }).join('') + '</div>' : '') + '</div>';\nel.innerHTML = summary + table + cards;\nbindNames(el);\n}\nfunction renderAC() {\nvar el = $('ac-tiles'), camp = $('ac-campaigns');\nif (!ac) { el.innerHTML = tile('Men on the list', '—', 'Waiting on the count sheet'); camp.innerHTML = ''; return; }\nvar st = ac.stages || {}, men = st.men || {}, ch = st.churches || {}, un = ac.unsubscribed || {};\n$('ac-sub').textContent = ac.generated ? 'Counted ' + dt(ac.generated, true) + (ac.since ? ' · window since ' + dt(ac.since) : '') : '';\nel.innerHTML =\ntile('Men on the list', num(men.on_the_list), 'contacts tagged as men') +\ntile('Hand raised', num(men.hand_raised), (men.wait_list || 0) + ' on the AC wait list · ' + (men.in_conversation || 0) + ' in conversation') +\ntile('Churches', (ch.no_reply || 0) + (ch.has_program || 0) + (ch.no_program || 0) + (ch.referred || 0) + (ch.not_us || 0), (ch.has_program || 0) + ' have a program · ' + (ch.no_program || 0) + ' want one · ' + (ch.referred || 0) + ' referred') +\ntile('Unsubscribed', num(un.count), 'this window · ' + num(un.all_time) + ' all time');\nvar cs = (ac.campaigns || []).slice(0, 4);\nif (!cs.length) { camp.innerHTML = ''; return; }\ncamp.innerHTML = '<div class=\"tablewrap\"><table><thead><tr><th>Campaign</th><th>Sent</th><th class=\"num\">To</th><th class=\"num\">Opened</th><th class=\"num\">Clicked</th><th class=\"num\">Unsubscribed</th></tr></thead><tbody>' +\ncs.map(function (k) {\nvar clicks = Object.keys(k).filter(function (x) { return x.indexOf('unique_clicks') === 0; }).reduce(function (s, x) { return s + Number(k[x] || 0); }, 0);\nvar pct = k.sent ? Math.round(100 * Number(k.unique_opens || 0) / Number(k.sent)) : 0;\nreturn '<tr><td>' + esc(k.name) + '</td><td class=\"step\">' + esc(dt(k.sent_or_scheduled)) + '</td><td class=\"num\">' + esc(k.sent) + '</td><td class=\"num\">' + esc(k.unique_opens) + ' <span class=\"muted small\">(' + pct + '%)</span></td><td class=\"num\">' + clicks + '</td><td class=\"num\">' + esc(k.unsubscribes) + '</td></tr>';\n}).join('') + '</tbody></table></div>';\n}\nfunction step(iso) { return iso ? '<span class=\"ok\">✓</span> ' + esc(dt(iso)) : '<span class=\"no\">—</span>'; }\nfunction fact(k, v, wide) { return '<div class=\"fact' + (wide ? ' wide' : '') + '\"><span class=\"k\">' + esc(k) + '</span><span class=\"v\">' + v + '</span></div>'; }\nfunction renderRoster() {\nvar el = $('roster');\nif (!feed) { el.innerHTML = '<div class=\"empty\"><strong>Reading the desk.</strong><span>One row per man, keyed by his email.</span></div>'; return; }\nvar r = feed.roster || [];\n$('roster-sub').textContent = r.length ? plural(r.length, 'man', 'men') + ' on the sheet' : '';\nif (!r.length) { el.innerHTML = '<div class=\"empty\"><strong>No one on the roster yet.</strong><span>The roster fills from the signed agreement, the site account and the enrollment notice.</span></div>'; return; }\nvar stage = function (m) { return '<span class=\"stage ' + (m.stage === 'Seated' ? 'seated' : '') + '\">' + esc(m.stage || '—') + '</span>'; };\nvar table = '<div class=\"ro-table tablewrap\"><table><thead><tr><th>Name</th><th>Stage</th><th>Wait list</th><th>Agreement</th><th>Answers</th><th>Account</th><th>Seated</th><th>Here for</th><th>Referred by</th></tr></thead><tbody>' +\nr.map(function (m) { return '<tr><td><div class=\"name\">' + nameOf(m) + '</div><div class=\"small muted\">' + esc(m.email) + '</div></td><td>' + stage(m) + '</td><td class=\"step\">' + step(m.waitList) + '</td><td class=\"step\">' + step(m.agreementSigned) + '</td><td class=\"step\">' + step(m.answersIn) + '</td><td class=\"step\">' + step(m.account) + '</td><td class=\"step\">' + step(m.seated) + '</td><td>' + esc(m.hereFor) + '</td><td>' + esc(m.referredBy) + '</td></tr>'; }).join('') + '</tbody></table></div>';\nvar cards = '<div class=\"ro-cards\">' + r.map(function (m) {\nreturn '<article class=\"ap-card\">' + stage(m) + '<p class=\"ap-card-title\">' + nameOf(m) + '</p><p class=\"ap-card-state\">' + esc(m.email) + '</p><div class=\"facts\">' +\nfact('Wait list', '<span class=\"step\">' + step(m.waitList) + '</span>') + fact('Agreement', '<span class=\"step\">' + step(m.agreementSigned) + '</span>') + fact('Answers', '<span class=\"step\">' + step(m.answersIn) + '</span>') + fact('Account', '<span class=\"step\">' + step(m.account) + '</span>') + fact('Seated', '<span class=\"step\">' + step(m.seated) + '</span>') +\n(m.hereFor ? fact('Here for', esc(m.hereFor), true) : '') + (m.referredBy ? fact('Referred by', esc(m.referredBy), true) : '') + '</div></article>';\n}).join('') + '</div>';\nel.innerHTML = table + cards;\nbindNames(el);\n}\nfunction renderWeek() {\nvar el = $('week');\nif (!feed) { el.innerHTML = ''; return; }\nvar inb = feed.inbound || {}, by = inb.byKind7 || {}, pay = feed.payments || {}, co = feed.coaching || {};\n$('week-sub').textContent = inb.last7 != null ? inb.last7 + ' notices read' + (feed.lastRun && feed.lastRun.archived ? ' · ' + feed.lastRun.archived + ' moved out of the inbox on the last run' : '') : '';\nvar kinds = Object.keys(by).sort(function (a, b) { return by[b] - by[a]; });\nvar max = kinds.length ? by[kinds[0]] : 1;\nvar bars = kinds.length ? '<div class=\"bars\">' + kinds.map(function (k) { return '<div class=\"bar-row\"><span>' + esc(k) + '</span><div class=\"track\"><div class=\"fill\" style=\"width:' + Math.round(100 * by[k] / max) + '%\"></div></div><span class=\"n\">' + by[k] + '</span></div>'; }).join('') + '</div>' : '<div class=\"muted small\">Nothing in the last seven days.</div>';\nvar recent = (inb.recent || []).slice(0, 12);\nel.innerHTML =\n'<div class=\"door\"><h3>By kind</h3>' + bars + '<div class=\"small muted\">' + (inb.storyPieces7 || 0) + ' Your Story pieces saved this week.' + (inb.keptInInbox ? ' ' + inb.keptInInbox + ' left in the inbox for a look.' : '') + '</div></div>' +\n'<div class=\"door\"><h3>Most recent</h3>' + (recent.length ? '<ul class=\"list\">' + recent.map(function (x) { return '<li><span><span class=\"kind\">' + esc(x.kind) + '</span>' + esc(x.name || x.email || x.source) + '</span><span class=\"r\">' + esc(dt(x.received, true)) + '</span>' + (x.summary ? '<span class=\"s\">' + esc(x.summary) + (x.link ? ' · <a href=\"' + esc(x.link) + '\" target=\"_blank\" rel=\"noopener\">Open</a>' : '') + '</span>' : '') + '</li>'; }).join('') + '</ul>' : '<div class=\"muted small\">Nothing yet.</div>') + '</div>' +\n'<div class=\"door\"><h3>Payments</h3><div class=\"money\">' + money(pay.total30) + '<small>in 30 days · ' + plural(pay.count30 || 0, 'payment', 'payments') + '</small></div>' +\n((pay.recent || []).length ? '<ul class=\"list\">' + pay.recent.slice(0, 6).map(function (p) { return '<li><span>' + money(p.amount) + ' <span class=\"muted small\">' + esc(p.from || p.what || '') + '</span>' + (p.link ? ' · <a href=\"' + esc(p.link) + '\" target=\"_blank\" rel=\"noopener\">Stripe</a>' : '') + '</span><span class=\"r\">' + esc(dt(p.received)) + '</span></li>'; }).join('') + '</ul>' : '<div class=\"muted small\">No Stripe payment emails on file yet.</div>') + '</div>' +\n'<div class=\"door\"><h3>Coaching sessions</h3>' + ((co.upcoming || []).length ? '<ul class=\"list\">' + co.upcoming.slice(0, 8).map(function (s) { return '<li><span>' + esc(s.name) + ' <span class=\"muted small\">' + esc(s.session) + (s.status !== 'booked' ? ' · ' + esc(s.status) : '') + (s.source === 'calendar' ? ' · calendar' : '') + '</span></span><span class=\"r\">' + esc(s.when) + '</span></li>'; }).join('') + '</ul>' : '<div class=\"muted small\">No sessions ahead on the calendar or in Calendly.</div>') + '</div>';\n}\n/* build 14: How men found us — three sentences the script wrote from the Search profile sheet, then one recommendation. Nothing here is typed by hand. */\nfunction renderSearch() {\nvar el = $('search-body'); if (!el) return;\nvar s = feed && feed.search;\nif (!feed) { el.innerHTML = '<div class=\"empty\"><strong>Reading the desk.</strong></div>'; return; }\nif (!s) { $('search-sub').textContent = ''; el.innerHTML = '<div class=\"empty\"><strong>The search story is not on the desk yet.</strong><span>It appears once the Front Desk script can read the Search profile sheet and the monthly refresh has put a month on it.</span></div>'; return; }\n$('search-sub').textContent = s.month + (s.asOf ? ' · numbers as of ' + dt(s.asOf) : '');\nvar h = (s.sentences || []).map(function (x) { return '<p class=\"srch-s\">' + esc(x) + '</p>'; }).join('');\nvar r = s.rec;\nif (r) {\nvar open = (feed.actions || []).some(function (a) { return a.key === r.key; });\nvar w = wordsFor(r.page || r.link);\nh += '<article class=\"ap-card\"><p class=\"ap-card-kind\">What to do next</p><p class=\"ap-card-title\">' + esc(r.do) + '</p>' +\n(r.for ? '<p class=\"ap-card-body\">' + esc(r.for) + '</p>' : '') + (r.because ? '<p class=\"ap-card-state\">' + esc(r.because) + '</p>' : '') + (w ? wordsHtml(w, r.edit || '') : '') +\n'<div class=\"ap-card-actions\">' + (r.edit && !w ? '<a class=\"ap-btn ap-btn-primary\" href=\"' + esc(r.edit) + '\" target=\"_blank\" rel=\"noopener\">Open the page\\u2019s settings</a>' : '') + (r.link && !w ? '<a class=\"ap-btn ' + (r.edit ? 'ap-btn-ghost' : 'ap-btn-primary') + '\" href=\"' + esc(r.link) + '\" target=\"_blank\" rel=\"noopener\">' + esc(r.linkLabel || 'Open') + '</a>' : '') +\n(open ? '<button type=\"button\" class=\"ap-btn ap-btn-ghost\" data-done=\"' + esc(r.key) + '\">Done</button>' : '<span class=\"ap-card-state\">Closed</span>') + '</div></article>';\n} else {\nh += '<article class=\"ap-card\"><p class=\"ap-card-kind\">What to do next</p><p class=\"ap-card-title\">Nothing asks for a hand on search this month</p><p class=\"ap-card-state\">No page slipped and no page is shown often without being clicked.</p></article>';\n}\nh += '<p class=\"small muted srch-foot\">The record behind this is the <a href=\"' + esc(s.sheet || '#') + '\" target=\"_blank\" rel=\"noopener\">Search profile sheet</a>. The monthly refresh writes it; the desk only reads it.</p>';\nel.innerHTML = h;\nbindDone(el); bindCopy(el);\n}\n\n/* build 16 */\nfunction glow(id) { var el = document.getElementById(id); if (!el) return; el.classList.remove('ap-glow'); void el.offsetWidth; el.classList.add('ap-glow'); setTimeout(function () { el.classList.remove('ap-glow'); }, 2400); }\nfunction askKind(key) { var k = String(key || ''); return /^(agr|bwm):/.test(k) ? 'agreement' : /^askans:/.test(k) ? 'answers' : ''; }\nfunction nameBtn(email) { return '<button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm\" data-name-add=\"' + esc(email) + '\">Add his name</button>'; }\nfunction nameOf(m) { return m && m.name ? esc(m.name) : '<span class=\"muted\">(no name yet)</span> ' + nameBtn(m && m.email); }\nfunction setName(email, name) {\n  var e = String(email || '').toLowerCase();\n  ((feed && feed.roster) || []).forEach(function (r) { if (String(r.email).toLowerCase() === e) r.name = name; });\n  ((feed && feed.room && feed.room.men) || []).forEach(function (r) { if (String(r.email).toLowerCase() === e) r.name = name; });\n  ((feed && feed.actions) || []).forEach(function (a) { if (keyEmail(a) === e && (!a.for || a.for === e)) a.for = name; });\n}\nfunction bindNames(root) {\n  var s = stored(); if (!root || !s) return;\n  Array.prototype.forEach.call(root.querySelectorAll('[data-name-add]'), function (b) {\n    b.addEventListener('click', function () {\n      var em = b.getAttribute('data-name-add');\n      var f = document.createElement('span'); f.className = 'nm-form';\n      f.innerHTML = '<input type=\"text\" maxlength=\"80\" placeholder=\"His name\" aria-label=\"His name\"><button type=\"button\" class=\"ap-btn ap-btn-primary ap-btn-sm\">Save</button><button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm\">Cancel</button>';\n      b.replaceWith(f);\n      var inp = f.querySelector('input'), save = f.querySelectorAll('button')[0], cancel = f.querySelectorAll('button')[1];\n      inp.focus();\n      var go = function () {\n        var name = String(inp.value || '').replace(/\\s+/g, ' ').trim();\n        if (name.length < 2) { inp.focus(); return; }\n        save.disabled = true; save.textContent = 'Saving…';\n        call({ action: 'name', key: s.key, email: em, name: name }).then(function (r) { setName(r.email, r.name); renderAll(); flash('Name saved: ' + r.name + '. The sheet has it too.'); },\n          function (e) { save.disabled = false; save.textContent = 'Save'; notice(esc(words(e))); });\n      };\n      save.addEventListener('click', go);\n      inp.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); go(); } if (ev.key === 'Escape') renderAll(); });\n      cancel.addEventListener('click', function () { renderAll(); });\n    });\n  });\n}\nvar mailOpen = {};\nfunction bindMail(root) {\n  var s = stored(); if (!root || !s) return;\n  Array.prototype.forEach.call(root.querySelectorAll('[data-mail-see]'), function (b) {\n    b.addEventListener('click', function () {\n      var key = b.getAttribute('data-mail-see'), kind = b.getAttribute('data-kind'), em = b.getAttribute('data-email');\n      var paneKey = /^(agreement|answers):/.test(key) ? kind : key;\n      var pane = root.querySelector('[data-mail-pane=\"' + paneKey.replace(/\"/g, '') + '\"]');\n      if (!pane) return;\n      if (mailOpen[key]) { mailOpen[key] = false; pane.hidden = true; return; }\n      mailOpen[key] = true; pane.hidden = false;\n      pane.innerHTML = '<p class=\"ap-card-state\">Writing the email…</p>';\n      call({ action: 'ask_text', key: s.key, kind: kind, email: em }).then(function (r) {\n        pane.innerHTML = '<div class=\"ap-mail-h\">To ' + esc(r.email) + (r.cc ? ' · cc ' + esc(r.cc) : '') + ' · from john@, signed John</div><div class=\"ap-mail-h\">Subject: ' + esc(r.subject) + '</div><pre>' + esc(r.body) + '</pre>' +\n          (r.asked ? '<p class=\"ap-card-state\">Already asked by email ' + esc(dt(r.asked, true)) + '.</p>' : '') +\n          '<div class=\"ap-card-actions\"><button type=\"button\" class=\"ap-btn ap-btn-primary\" data-mail-send>' + (r.asked ? 'Send it again' : 'Send it') + '</button><button type=\"button\" class=\"ap-btn ap-btn-ghost\" data-mail-close>Not now</button></div>';\n        pane.querySelector('[data-mail-close]').addEventListener('click', function () { mailOpen[key] = false; pane.hidden = true; });\n        var sb = pane.querySelector('[data-mail-send]');\n        sb.addEventListener('click', function () {\n          sb.disabled = true; sb.textContent = 'Sending…';\n          call({ action: 'ask_send', key: s.key, kind: kind, email: em }).then(function (q) {\n            var e2 = String(q.email).toLowerCase();\n            ((feed && feed.actions) || []).forEach(function (a) { if (askKind(a.key) === q.kind && keyEmail(a) === e2) a.asked = q.asked; });\n            ((feed && feed.roster) || []).forEach(function (r) { if (String(r.email).toLowerCase() === e2) r[q.kind === 'agreement' ? 'askedAgreement' : 'askedAnswers'] = q.asked; });\n            mailOpen[key] = false; renderAll(); flash('Sent to ' + (q.name || q.email) + ' at ' + dt(q.asked, true) + ', Jason in cc. It is on the Sends tab.');\n          }, function (e) { sb.disabled = false; sb.textContent = 'Send it'; pane.insertAdjacentHTML('beforeend', '<p class=\"ap-card-state\">' + esc(words(e)) + '</p>'); });\n        });\n      }, function (e) { pane.innerHTML = '<p class=\"ap-card-state\">' + esc(words(e)) + '</p>'; mailOpen[key] = false; });\n    });\n  });\n}\nfunction copyText(btn, text) {\n  var done = function () { var was = btn.textContent; btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = was; }, 1600); };\n  if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); }); } else { fallbackCopy(text); done(); }\n}\nfunction fallbackCopy(text) { try { var t = document.createElement('textarea'); t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.left = '-9999px'; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); } catch (e) {} }\nfunction wordsFor(link) {\n  var p = String(link || '').replace(/^https?:\\/\\/[^\\/]+/i, '').replace(/[?#].*$/, '') || '/';\n  var w = ((feed && feed.words) || []).filter(function (x) { return x.path === p && (x.newTitle || x.newDesc); });\n  return w.length ? w[0] : null;\n}\nfunction wordsHtml(w, edit) {\n  var cell = function (cls, head, title, desc, copy) {\n    return '<div class=\"w ' + cls + '\"><h4>' + esc(head) + '</h4>' +\n      '<div><div class=\"wl\"><span>Title · ' + title.length + '</span>' + (copy ? '<button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm\" data-copy=\"' + esc(title) + '\">Copy</button>' : '') + '</div><p>' + esc(title) + '</p></div>' +\n      '<div><div class=\"wl\"><span>Description · ' + desc.length + '</span>' + (copy ? '<button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm\" data-copy=\"' + esc(desc) + '\">Copy</button>' : '') + '</div><p>' + esc(desc) + '</p></div></div>';\n  };\n  var head = w.installed ? 'New words · ' + w.installed : w.approved ? 'New words · ' + w.approved : 'Suggested words · not yet approved';\n  var h = '<div class=\"words\">' + cell('old', 'Now on the page', w.oldTitle, w.oldDesc, false) + cell('new', head, w.newTitle, w.newDesc, true) + '</div>';\n  if (w.note && !w.approved) h += '<p class=\"ap-card-state\">' + esc(w.note) + '</p>';\n  if (!w.installed) {\n    h += '<p class=\"ap-steps\">' + (edit ? 'In the editor: the page name at the top → Edit Settings → SEO → paste both → Save &amp; Close → OK.' : 'Open the page\\u2019s settings in LearnWorlds, then SEO: paste both and save.') + '</p>' +\n      '<div class=\"ap-card-actions\">' + (edit ? '<a class=\"ap-btn ap-btn-primary\" href=\"' + esc(edit) + '\" target=\"_blank\" rel=\"noopener\">Open the page\\u2019s settings</a>' : '') +\n      (w.approved ? '' : '<button type=\"button\" class=\"ap-btn ap-btn-ghost\" data-words-approve=\"' + esc(w.address) + '\">Approve these words</button>') +\n      '<button type=\"button\" class=\"ap-btn ap-btn-ghost\" data-words-installed=\"' + esc(w.address) + '\">I installed them</button>' +\n      '<a class=\"ap-btn ap-btn-ghost\" href=\"' + esc(w.address) + '\" target=\"_blank\" rel=\"noopener\">See the page</a></div>';\n  }\n  return h;\n}\nfunction bindCopy(root) {\n  Array.prototype.forEach.call(root.querySelectorAll('[data-copy]'), function (b) { b.addEventListener('click', function () { copyText(b, b.getAttribute('data-copy')); }); });\n  var s = stored(); if (!s) return;\n  Array.prototype.forEach.call(root.querySelectorAll('[data-words-approve],[data-words-installed]'), function (b) {\n    b.addEventListener('click', function () {\n      var addr = b.getAttribute('data-words-approve') || b.getAttribute('data-words-installed'), what = b.hasAttribute('data-words-approve') ? 'approve' : 'installed';\n      b.disabled = true; b.textContent = what === 'approve' ? 'Approving…' : 'Closing…';\n      call({ action: 'words_set', key: s.key, address: addr, what: what }).then(function (r) {\n        ((feed && feed.words) || []).forEach(function (x) { if (x.address === r.address) { if (what === 'approve') x.approved = r.value; else x.installed = r.value; } });\n        if (what === 'installed' && r.closed) { closedAt[r.closed] = new Date().toISOString(); feed.actions = (feed.actions || []).filter(function (a) { return a.key !== r.closed; }); }\n        renderAll(); flash(what === 'approve' ? 'Approved. Paste them into the page\\u2019s settings when you are ready.' : 'Installed — the card is off the lane. The next search refresh will show whether men click.'); load(true);\n      }, function (e) { b.disabled = false; b.textContent = what === 'approve' ? 'Approve these words' : 'I installed them'; notice(esc(words(e))); });\n    });\n  });\n}\nfunction editOf(a) { return (a && a.edit) || (a && a.link && /\\/author\\//.test(a.link) ? a.link : ''); }\nfunction renderThisWeek() {\n  var el = $('tw-body'); if (!el) return;\n  var w = feed && feed.week;\n  if (!feed) { el.innerHTML = '<p class=\"tw-s muted\">Reading the desk.</p>'; return; }\n  if (!w) { $('tw-sub').textContent = ''; el.innerHTML = '<p class=\"tw-s muted\">This week is not on the desk yet. It appears on the next five-minute run.</p>'; return; }\n  $('tw-sub').textContent = w.asOf ? 'As of ' + dt(w.asOf, true) : '';\n  var n = w.next || {};\n  var rows = (w.rows || []).map(function (r) {\n    return '<div class=\"tw-row\"><p class=\"k\">' + esc(r.kind) + '</p><p class=\"f\">' + esc(r.fact) + '</p>' + (r.means ? '<p class=\"m\">' + esc(r.means) + '</p>' : '') +\n      '<div class=\"ap-card-actions\">' + (r.go ? '<a class=\"ap-btn ap-btn-ghost ap-btn-sm\" href=\"' + esc(r.go) + '\"' + (/^https?:/.test(r.go) ? ' target=\"_blank\" rel=\"noopener\"' : '') + '>' + esc(r.label || 'Open') + '</a>' : '') +\n      (r.ask ? '<button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm\" data-ask=\"' + esc(r.ask) + '\">Ask: ' + esc(r.ask) + '</button>' : '') + '</div></div>';\n  }).join('');\n  el.innerHTML = (rows ? '<div class=\"tw-rows\">' + rows + '</div>' : (w.sentences || []).map(function (x) { return '<p class=\"tw-s\">' + esc(x) + '</p>'; }).join('')) +\n    '<div class=\"tw-next\"><p class=\"ap-card-kind\">One next step</p><p class=\"ap-card-title\">' + esc(n.title || '') + '</p>' + (n.body ? '<p class=\"ap-card-state\">' + esc(n.body) + '</p>' : '') +\n    (n.go ? '<div class=\"ap-card-actions\"><a class=\"ap-btn ap-btn-primary\" href=\"' + esc(n.go) + '\"' + (/^https?:/.test(n.go) ? ' target=\"_blank\" rel=\"noopener\"' : '') + '>' + esc(n.label || 'Go') + '</a></div>' : '') + '</div>';\n  Array.prototype.forEach.call(el.querySelectorAll('[data-ask]'), function (b) { b.addEventListener('click', function () { $('askIn').value = b.getAttribute('data-ask'); goTo('ask-sec'); glow('ask-sec'); ask(); }); });\n}\nvar movesAll = false;\nfunction renderMoves() {\n  var el = $('moves-body'); if (!el) return;\n  var mv = feed && feed.moves;\n  if (!feed) { el.innerHTML = '<div class=\"empty\"><strong>Reading the desk.</strong></div>'; return; }\n  if (!mv) { el.innerHTML = '<div class=\"empty\"><strong>The pathway is not on the desk yet.</strong><span>It appears on the next five-minute run, once the script can read the Search profile and the facilitator pages.</span></div>'; return; }\n  var props = mv.proposed || [], taken = mv.taken || [];\n  $('moves-h').textContent = (props.length ? plural(props.length, 'signal waits', 'signals wait') + ' for a move' : 'No signal waits') + (taken.length ? ' · ' + plural(taken.length, 'move', 'moves') + ' on the tab' : '');\n  var owners = mv.owners && mv.owners.length ? mv.owners : ['John', 'Jason'];\n  var opts = function (list, pick) { return list.map(function (x) { return '<option' + (x === pick ? ' selected' : '') + '>' + esc(x) + '</option>'; }).join(''); };\n  var shown = movesAll ? props : props.slice(0, 5);\n  var h = '';\n  if (taken.length) {\n    h += '<div class=\"door\"><h3>Moves taken</h3><ul class=\"list\">' + taken.map(function (t) {\n      var st = t.status || 'taken';\n      return '<li><span><span class=\"kind\">' + esc(t.move) + '</span>' + esc(t.signal) + '</span><span class=\"r\">' + esc(t.owner) + (t.due ? ' · due ' + esc(dt(t.due)) : '') + (t.check ? ' · check ' + esc(dt(t.check)) : '') + '</span>' +\n        '<span class=\"s\">' + esc(t.from) + (t.note ? ' · ' + esc(t.note) : '') + ' · ' + esc(st) + (t.link ? ' · <a href=\"' + esc(t.link) + '\" target=\"_blank\" rel=\"noopener\">Open</a>' : '') + '</span>' +\n        '<span class=\"r\">' + (st === 'taken' ? '<button type=\"button\" class=\"ap-btn ap-btn-primary ap-btn-sm\" data-move-set=\"' + esc(t.key) + '\" data-status=\"done\">Done</button> ' : '') + (st === 'done' ? '<button type=\"button\" class=\"ap-btn ap-btn-primary ap-btn-sm\" data-move-set=\"' + esc(t.key) + '\" data-status=\"checked\">Checked</button> ' : '') + (st !== 'checked' ? '<button type=\"button\" class=\"ap-btn ap-btn-ghost ap-btn-sm\" data-move-set=\"' + esc(t.key) + '\" data-status=\"dropped\">Drop</button>' : '') + '</span></li>';\n    }).join('') + '</ul></div>';\n  }\n  if (!props.length) h += '<div class=\"empty\"><strong>Every signal has its move.</strong><span>New signals come from the Search profile and from each week\\u2019s facilitator page.</span></div>';\n  h += shown.map(function (p) {\n    return '<article class=\"ap-card\" data-move-card=\"' + esc(p.key) + '\"><p class=\"ap-card-kind\">' + esc(p.kind === 'theme' ? 'The room carried' : p.kind === 'page' ? 'Shown, not clicked' : 'Men type this') + '</p><p class=\"ap-card-title\">' + esc(p.signal) + '</p><p class=\"mv-from\">' + esc(p.from) + (p.link ? ' · <a href=\"' + esc(p.link) + '\" target=\"_blank\" rel=\"noopener\">Open</a>' : '') + '</p>' +\n      '<div class=\"mv-row\"><label>Move <select data-f=\"move\">' + opts(mv.list || [], p.move) + '</select></label><label>Owner <select data-f=\"owner\">' + opts(owners, p.owner) + '</select></label><label>Due <input type=\"date\" data-f=\"due\" value=\"' + esc(mv.dueDay || '') + '\"></label></div>' +\n      '<div class=\"ap-card-actions\"><button type=\"button\" class=\"ap-btn ap-btn-primary\" data-move-add=\"' + esc(p.key) + '\">Add this move</button><span class=\"ap-card-state\">The check comes ' + esc(mv.checkDay ? dt(mv.checkDay) : 'a month after the due date') + '.</span></div></article>';\n  }).join('');\n  if (props.length > 5) h += '<p class=\"small muted\"><button type=\"button\" class=\"plain\" data-move-all>' + (movesAll ? 'Show fewer' : 'Show all ' + props.length) + '</button></p>';\n  h += '<p class=\"small muted\">The record behind this is the <a href=\"' + esc(mv.sheet || '#') + '\" target=\"_blank\" rel=\"noopener\">Moves tab</a> on the Front Desk sheet. A search-article move also writes the phrase\\u2019s row on the Search profile, so the Monday and Thursday task picks it up.</p>';\n  el.innerHTML = h;\n  var s = stored(); if (!s) return;\n  var all = el.querySelector('[data-move-all]'); if (all) all.addEventListener('click', function () { movesAll = !movesAll; renderMoves(); });\n  Array.prototype.forEach.call(el.querySelectorAll('[data-move-add]'), function (b) {\n    b.addEventListener('click', function () {\n      var key = b.getAttribute('data-move-add'), card = b.closest('[data-move-card]'), p = null;\n      props.forEach(function (x) { if (x.key === key) p = x; });\n      if (!p || !card) return;\n      var f = function (n) { var x = card.querySelector('[data-f=\"' + n + '\"]'); return x ? x.value : ''; };\n      b.disabled = true; b.textContent = 'Adding…';\n      call({ action: 'move_add', key: s.key, moveKey: key, signal: p.signal, from: p.from, move: f('move'), owner: f('owner'), due: f('due'), link: p.link || '', phrase: p.phrase || '' }).then(function (r) {\n        mv.proposed = (mv.proposed || []).filter(function (x) { return x.key !== key; });\n        mv.taken = (mv.taken || []).concat([{ key: key, signal: p.signal, from: p.from, move: r.move, owner: r.owner, due: r.due, check: r.check, status: 'taken', link: p.link || '' }]);\n        renderAll(); flash('Move added: ' + r.move + ' for ' + p.signal.slice(0, 60) + (p.signal.length > 60 ? '…' : '') + ' — due ' + dt(r.due) + ', ' + r.owner + '.' + (r.note ? ' ' + r.note : ''));\n      }, function (e) { b.disabled = false; b.textContent = 'Add this move'; notice(esc(words(e))); });\n    });\n  });\n  Array.prototype.forEach.call(el.querySelectorAll('[data-move-set]'), function (b) {\n    b.addEventListener('click', function () {\n      var key = b.getAttribute('data-move-set'), st = b.getAttribute('data-status'); b.disabled = true;\n      call({ action: 'move_set', key: s.key, moveKey: key, status: st }).then(function () {\n        mv.taken = (mv.taken || []).map(function (t) { if (t.key === key) t.status = st; return t; }).filter(function (t) { return t.status !== 'dropped'; });\n        renderAll(); flash(st === 'dropped' ? 'Dropped. It is off the list.' : 'Marked ' + st + '.');\n      }, function (e) { b.disabled = false; notice(esc(words(e))); });\n    });\n  });\n}\nfunction renderAll() { renderThisWeek(); renderTabs(); renderActions(); renderAsk(); renderCohort(); renderBwm(); renderRoom(); renderAC(); renderSearch(); renderMoves(); renderRoster(); renderWeek(); }\nfunction setStatus(kind, text) { $('dot').className = 'dot ' + kind; $('statusText').textContent = text; }\nfunction notice(html, crit) { $('notices').innerHTML = html ? '<div class=\"note' + (crit ? ' crit' : '') + '\">' + html + '</div>' : ''; }\nfunction start(tries) {\ntries = tries || 0;\nif (!signedIn()) { if (tries < 10) { setTimeout(function () { start(tries + 1); }, 300); return; } gateSignin(); return; }\nreadMe().then(function (m) {\nme = m;\nif (stored()) openDesk(); else gateSend();\n});\n}\n/* build 14: the site scrolls inside its own box under a sticky top bar, so a link that points down the page (#lane, #week-sec, a card) must scroll that box itself and stop below the bar. */\nfunction topBarBottom() {\nvar bar = document.querySelector('section.lw-topbar, header.lw-topbar, .lw-topbar');\nif (!bar) return 0;\nvar pos = getComputedStyle(bar).position;\nif (pos !== 'sticky' && pos !== 'fixed') return 0;\nreturn Math.max(0, bar.getBoundingClientRect().bottom);\n}\nfunction goTo(id) {\nvar el = document.getElementById(id); if (!el) return false;\nvar sc = scroller(), page = sc === document.documentElement;\nvar scTop = page ? 0 : sc.getBoundingClientRect().top;\nvar visibleTop = Math.max(scTop, topBarBottom());\nvar y = el.getBoundingClientRect().top - visibleTop + (page ? (window.pageYOffset || document.documentElement.scrollTop) : sc.scrollTop) - 12;\nvar to = Math.max(0, Math.round(y));\ntry { (page ? window : sc).scrollTo({ top: to, behavior: 'smooth' }); } catch (e) { if (page) window.scrollTo(0, to); else sc.scrollTop = to; }\nreturn true;\n}\nhost.addEventListener('click', function (ev) {\nvar a = ev.target && ev.target.closest ? ev.target.closest('a[href^=\"#\"]') : null;\nif (!a || !host.contains(a)) return;\nvar id = String(a.getAttribute('href') || '').slice(1);\nif (id && goTo(id)) { ev.preventDefault(); glow(id); }\n});\nfunction scroller() {\nvar e = host.parentElement;\nwhile (e && e !== document.body && e !== document.documentElement) {\nvar o = getComputedStyle(e).overflowY;\nif (o === 'auto' || o === 'scroll') return e;\ne = e.parentElement;\n}\nreturn document.documentElement;\n}\nfunction fit() {\nvar h = document.getElementById('apDesk'); if (!h) return;\nvar sc = scroller(), page = sc === document.documentElement;\nvar cw = sc.clientWidth, L = page ? 0 : sc.getBoundingClientRect().left + sc.clientLeft;\nh.style.marginLeft = '0px'; h.style.marginRight = '0px';\nvar hr = h.getBoundingClientRect();\nvar gl = hr.left - L, gr = (L + cw) - hr.right;\nif (gr > gl + 1) h.style.marginRight = (-(gr - gl)) + 'px'; else if (gl > gr + 1) h.style.marginLeft = (-(gl - gr)) + 'px';\nvar b = h.querySelector('.ap-band'); if (!b) return;\nb.style.marginLeft = '0px'; b.style.width = cw + 'px';\nb.style.marginLeft = (L - b.getBoundingClientRect().left) + 'px';\n}\nfit(); window.addEventListener('resize', fit); window.addEventListener('orientationchange', fit); window.addEventListener('load', fit);\nif (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);\nif (window.ResizeObserver) { try { var fitQueued = false, queueFit = function () { if (fitQueued) return; fitQueued = true; requestAnimationFrame(function () { fitQueued = false; fit(); }); }; var ro = new ResizeObserver(queueFit); ro.observe(scroller()); ro.observe(host); } catch (e) {} }\nwindow.APDesk = { build: BUILD, reload: function () { load(); }, forget: forgetBrowser, fit: fit };\nstart();\n})();\n\n})();\n";
