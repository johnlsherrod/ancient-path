/**
 * Ancient Path — Front Desk · build 16
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
  BUILD: 16,
  SHEET_ID: '1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw',
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
    Answers:  ['received','email','name','door','kind','added','hash','answers (JSON)']
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
    rebuildStages_(ss, cfg);
    rebuildRoom_(ss, cfg);
    rebuildActions_(ss, cfg, cal);
    try { sendAnswersReminders_(ss, cfg, false); } catch (e) { alert_('The Before We Meet reminder failed: ' + e + '\n' + (e.stack || '')); }
    writeFeed_(ss, cfg, captured, cal);
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
    answersReminderDays: Number(c['answers reminder days'] || 3)
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
  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    if (!row[H['email']] || isOurs_(cfg, row[H['email']], row[H['name']])) continue; // our own test rows drop off the roster
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
const SCRIPT_ACTION_KEY = /^(seat|first|bwm|wl|bug|testimony|look|contact|pay|cal|room|ans|add|askans|agr):/;

function rebuildActions_(ss, cfg, cal) {
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
      because: seated.length + ' of ' + cfg.roomSize + ' seats taken', link: '', rule: 'R8' });
  }

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

function writeFeed_(ss, cfg, captured, cal) {
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
  const calAhead = ((cal && cal.events) || [])
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
      lastActivity: iso(r['last activity']), notes: r['notes'] || ''
    })).sort((a, b) => (b.lastActivity || '').localeCompare(a.lastActivity || '')),
    actions: actions.filter(a => a['status'] === 'open').map(a => ({
      key: a['key'], owner: a['owner'], do: a['do this'], for: a['for'], because: a['because'], link: a['link'], firstSeen: iso(a['first seen']), rule: a['rule']
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
    coaching: {
      upcoming: sessions,
      calendars: { read: cfg.sessionCalendars.filter(id => !((cal && cal.missing) || []).includes(id)), missing: (cal && cal.missing) || [] }
    },
    lastRun: { read: captured.read, archived: captured.archived },
    claude: claudeHealth_()
  };
  const sh = ss.getSheetByName('feed');
  sh.getRange('A1').setValue(JSON.stringify(feed));
  sh.getRange('A2').setValue('Written by the Front Desk script every 5 minutes (build ' + FD.BUILD + '). The Front Desk page reads A1. Do not edit.');
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
    ['answers reminder days', 3, 'Days after the signed agreement before that reminder goes.']
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
    Inbound: ['captured', 'received'], Payments: ['received'], Coaching: ['booked'], Actions: ['first seen', 'done at'], Room: ['when (Central)'], Sends: ['sent'], Answers: ['received']
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
function reminderText_(cfg) {
  return [
    'Hello,',
    '',
    'Tomorrow, Wednesday, 7:00 PM Central.',
    '',
    "Come with this week's reading done and your notes in hand. The group time builds on what each man brings to it.",
    '',
    "Sign in, open Breaking Free, and press Join on this week's session card. Give yourself five minutes before seven in case the site asks you to sign in again.",
    '',
    'https://www.ancientpathcoaching.com/path-player?courseid=' + cfg.courseId,
    '',
    "If you can't be there, reply to this email and tell me before Wednesday. The room is built on the men in it showing up for each other, so every night matters.",
    '',
    'John'
  ].join('\n');
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
/** The same email to the founders only (to john@, cc Jason), subject marked [TEST]; nothing goes to the men and nothing is marked sent. */
function sendTuesdayReminderTest() { sendReminder_(true); }
function sendReminder_(test) {
  const cfg = readConfig_();
  if (!cfg.reminderOn && !test) { Logger.log('Tuesday reminder is off on Config.'); return; }
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  const tomorrow = Utilities.formatDate(new Date(Date.now() + 864e5), FD.TZ, 'yyyy-MM-dd');
  if (!test && !cohortNights_(cfg).includes(tomorrow)) { Logger.log('No session tomorrow (' + tomorrow + '); nothing sent.'); return; }
  const props = PropertiesService.getScriptProperties();
  const stamp = 'reminderSent:' + tomorrow;
  if (!test && props.getProperty(stamp)) { Logger.log('Already sent for ' + tomorrow + '.'); return; }
  const men = Array.from(new Set(rows_(ss.getSheetByName('Room')).map(r => String(r['email'] || '').toLowerCase().trim()).filter(e => e && !isOurs_(cfg, e, ''))));
  if (!test && !men.length) { alert_('Tuesday reminder NOT sent for ' + tomorrow + ': the Room tab has no men on it.'); return; }
  const me = Session.getEffectiveUser().getEmail();
  const subject = (test ? '[TEST] ' : '') + REMINDER_SUBJECT;
  const opts = { name: 'John Sherrod' };
  if (cfg.reminderCc) opts.cc = cfg.reminderCc;
  if (!test) opts.bcc = men.join(',');
  GmailApp.sendEmail(me, subject, reminderText_(cfg), opts);
  if (!test) props.setProperty(stamp, new Date().toISOString());
  const sends = ss.getSheetByName('Sends');
  if (sends) append_(sends, [[new Date(), test ? 'Tuesday reminder (test)' : 'Tuesday reminder', subject, me + (cfg.reminderCc ? ' · cc ' + cfg.reminderCc : ''), test ? 0 : men.length, test ? 'founders only' : 'for the session on ' + tomorrow]]);
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
  if (!/^(ans|add|askans|agr|bwm):[^:\s]+/.test(key)) throw { code: 'bad_key' };
  const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Actions');
  const H = headerIndex_(sh), data = sh.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][H['key']] || '').trim() !== key) continue;
    sh.getRange(i + 1, H['mark done by hand'] + 1).setValue(true);
    sh.getRange(i + 1, H['status'] + 1).setValue('done');
    sh.getRange(i + 1, H['done at'] + 1).setValue(new Date());
    return { ok: true };
  }
  throw { code: 'none' };
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
    'The lane (actions) is what needs a human hand, each with an owner (John or Jason), a verb and why.',
    'The room (room) is the cohort itself: each man in it with his seat number, how he got in (seat link = he used the enrollment link; by hand = we enrolled him from the admin), when, and the open seats after him. room.open is how many seats are still open.'
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
const DESK_BUILD = 13;
const DESK_JS = "/* AP-DESK desk.js build 13 — the Front Desk page, served by the Front Desk script (FrontDesk.gs build 16, ?file=desk.js). The page block on /front-desk is only a loader: <div id=\"apDesk\"></div> and this script's tag. */\n(function () {\nvar host = document.getElementById(\"apDesk\"); if (!host || host.getAttribute(\"data-desk\")) return; host.setAttribute(\"data-desk\", \"11\"); host.classList.add(\"ap-desk\");\nhost.innerHTML = \"<style>\\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap'); .ap-desk { --ap-navy: #1F2A44; --ap-band: #1B2A3A; --ap-bronze: #B8945F; --ap-paper: #FBF9F5; --ap-rule: #E2DCD1; --ap-ink: #2B3040; --ap-quiet: #6B7280; --ap-band-ink: #F3EDE3; --ap-band-quiet: #B7AFA4; --ap-good: #3D7A52; --ap-warn: #9A6B2A; --ap-crit: #9A3B2F; --ap-serif: 'Source Serif 4', Georgia, 'Times New Roman', serif; --ap-sans: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: var(--ap-ink); font: 400 16px/1.5 var(--ap-sans); -webkit-font-smoothing: antialiased; text-align: left; }\\n.ap-desk *, .ap-desk *::before, .ap-desk *::after { box-sizing: border-box; }\\n.ap-desk h1, .ap-desk h2, .ap-desk h3, .ap-desk p { margin: 0; font-weight: 400; text-wrap: balance; }\\n.ap-desk a { color: var(--ap-navy); text-decoration: none; }\\n.ap-desk a:hover, .ap-desk a:focus-visible { text-decoration: underline; }\\n.ap-desk :focus-visible { outline: 2px solid var(--ap-bronze); outline-offset: 2px; }\\n.ap-desk button, .ap-desk input { font: inherit; }\\n.ap-desk [hidden] { display: none !important; }\\n.ap-desk .ap-band { position: relative; width: 100vw; margin: 0 0 34px calc(50% - 50vw); background: var(--ap-band) url(\\\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='600' viewBox='0 0 1600 600'><g fill='none' stroke='%23B8945F' stroke-width='1.4' opacity='0.15'><path d='M-50 460 C 250 380, 450 500, 760 420 S 1300 320, 1680 400'/><path d='M-50 500 C 250 430, 480 540, 800 470 S 1320 380, 1680 450'/><path d='M-50 420 C 280 330, 520 460, 820 370 S 1280 270, 1680 350'/><path d='M-50 540 C 300 500, 520 580, 840 520 S 1340 440, 1680 510'/><path d='M-50 380 C 300 300, 560 420, 880 330 S 1300 240, 1680 310'/></g><g fill='%23B8945F' opacity='0.20'><circle cx='760' cy='420' r='4'/></g></svg>\\\") 50% 100%/cover no-repeat; }\\n.ap-desk .ap-band, .ap-desk .ap-band * { text-align: center; }\\n.ap-desk .ap-band-in { max-width: 720px; margin: 0 auto; padding: 60px 24px 56px; display: grid; gap: 12px; justify-items: center; }\\n.ap-desk .ap-eyebrow { font: 600 13px/1.65 var(--ap-sans); letter-spacing: 3px; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .ap-hello { font: 600 44px/1.15 var(--ap-serif); color: var(--ap-band-ink); letter-spacing: -0.01em; }\\n.ap-desk .ap-line { font: 400 19px/1.6 var(--ap-sans); color: var(--ap-band-quiet); max-width: 600px; }\\n.ap-desk .ap-line .ap-s { display: inline-block; }\\n.ap-desk .ap-primary { display: inline-block; margin-top: 10px; font: 600 15px/1.2 var(--ap-sans); letter-spacing: .02em; background: var(--ap-bronze); color: var(--ap-band); padding: 15px 26px; border-radius: 2px; border: 1px solid var(--ap-bronze); max-width: 100%; cursor: pointer; }\\n.ap-desk .ap-primary:hover { background: #C9A86F; text-decoration: none; }\\n.ap-desk .ap-primary[disabled] { opacity: .6; cursor: default; }\\n.ap-desk .ap-primary-note { font: 400 15px/1.5 var(--ap-sans); color: var(--ap-band-quiet); max-width: 520px; }\\n.ap-desk .ap-gate-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 10px; }\\n.ap-desk .ap-gate-row input { font: 400 22px/1.2 var(--ap-sans); letter-spacing: .3em; width: 170px; max-width: 100%; padding: 11px 12px; border: 1px solid var(--ap-bronze); border-radius: 2px; background: #fff; color: var(--ap-ink); text-align: center; }\\n.ap-desk .ap-gate-row input.ap-email { letter-spacing: 0; font-size: 17px; width: 320px; text-align: left; }\\n.ap-desk .ap-gate-row .ap-primary { margin-top: 0; }\\n.ap-desk .ap-gate-err { color: #F0C9B9; font: 400 15px/1.5 var(--ap-sans); max-width: 520px; }\\n.ap-desk .ap-gate-again { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-band-quiet); background: none; border: 0; text-decoration: underline; cursor: pointer; padding: 0; }\\n@media (max-width: 640px) { .ap-desk .ap-band-in { padding: 44px 20px 40px; }\\n.ap-desk .ap-hello { font-size: 34px; }\\n.ap-desk .ap-line { font-size: 17px; }\\n }\\n.ap-desk .wrap { max-width: 1040px; margin: 0 auto; padding: 0 0 48px; }\\n.ap-desk .status { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .dot { width: 9px; height: 9px; border-radius: 50%; background: var(--ap-rule); display: inline-block; flex: 0 0 auto; }\\n.ap-desk .dot.live { background: var(--ap-good); }\\n.ap-desk .dot.stale { background: var(--ap-warn); }\\n.ap-desk .dot.off { background: var(--ap-crit); }\\n.ap-desk button.plain { font: 600 13px/1 var(--ap-sans); letter-spacing: .02em; color: var(--ap-navy); background: transparent; border: 1px solid var(--ap-rule); border-radius: 2px; padding: 9px 14px; cursor: pointer; }\\n.ap-desk button.plain:hover { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\\n.ap-desk .note { margin-top: 16px; padding: 14px 18px; background: var(--ap-paper); border-left: 3px solid var(--ap-warn); font: 400 15px/1.55 var(--ap-sans); color: var(--ap-ink); }\\n.ap-desk .note.crit { border-left-color: var(--ap-crit); }\\n.ap-desk .note strong { color: var(--ap-navy); font-weight: 600; }\\n.ap-desk .ap-sec { margin-top: 40px; padding-top: 22px; border-top: 1px solid var(--ap-rule); display: grid; gap: 16px; }\\n.ap-desk .ap-sec.first { margin-top: 28px; border-top: 0; padding-top: 0; }\\n.ap-desk .ap-sec > * { min-width: 0; }\\n.ap-desk .wrap { min-width: 0; max-width: min(1040px, 100%); }\\n.ap-desk .ap-sec-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 6px 16px; }\\n.ap-desk .ap-kind { font: 600 11px/1 var(--ap-sans); letter-spacing: .14em; text-transform: uppercase; color: var(--ap-bronze); margin-bottom: 8px; }\\n.ap-desk .ap-h2 { font: 400 26px/1.25 var(--ap-serif); color: var(--ap-navy); }\\n.ap-desk .ap-sec-note { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .muted { color: var(--ap-quiet); }\\n.ap-desk .small { font-size: 13px; }\\n.ap-desk .ap-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }\\n.ap-desk .ap-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }\\n.ap-desk .ap-grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }\\n@media (max-width: 860px) { .ap-desk .ap-grid, .ap-desk .ap-grid-2 { grid-template-columns: 1fr; }\\n.ap-desk .ap-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }\\n }\\n@media (max-width: 420px) { .ap-desk .ap-grid-4 { grid-template-columns: 1fr; }\\n }\\n.ap-desk .ap-card { display: flex; flex-direction: column; gap: 10px; padding: 22px 22px 20px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; min-width: 0; }\\n.ap-desk .ap-card.is-next { border-color: var(--ap-bronze); box-shadow: inset 3px 0 0 var(--ap-bronze); }\\n.ap-desk .ap-card-kind { font: 600 11px/1 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .ap-card-title { font: 400 22px/1.25 var(--ap-serif); color: var(--ap-navy); overflow-wrap: anywhere; }\\n.ap-desk .ap-card-state { font: 400 14px/1.45 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .ap-card-body { font: 400 15px/1.6 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; white-space: pre-line; }\\n.ap-desk .ap-card-actions { margin-top: auto; padding-top: 12px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }\\n.ap-desk .ap-btn { display: inline-block; font: 600 14px/1 var(--ap-sans); letter-spacing: .02em; padding: 12px 18px; border-radius: 2px; border: 1px solid transparent; cursor: pointer; }\\n.ap-desk .ap-btn:hover { text-decoration: none; }\\n.ap-desk .ap-btn-primary { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\\n.ap-desk .ap-btn-primary:hover { background: #2B3856; }\\n.ap-desk .ap-btn-primary[disabled] { opacity: .6; cursor: default; }\\n.ap-desk .ap-btn-ghost { background: transparent; color: var(--ap-navy); border-color: var(--ap-rule); }\\n.ap-desk .ap-btn-ghost:hover { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\\n.ap-desk .tabs { display: flex; gap: 8px; flex-wrap: wrap; }\\n.ap-desk .tabs button { font: 600 13px/1 var(--ap-sans); letter-spacing: .02em; padding: 10px 16px; border-radius: 2px; border: 1px solid var(--ap-rule); background: transparent; color: var(--ap-navy); cursor: pointer; }\\n.ap-desk .tabs button[aria-pressed=\\\"true\\\"] { background: var(--ap-navy); color: #fff; border-color: var(--ap-navy); }\\n.ap-desk .lane { display: grid; gap: 12px; }\\n.ap-desk .act .ap-card-state .wait { color: var(--ap-warn); font-weight: 600; }\\n.ap-desk .act .ap-card-state .wait::before { content: \\\"· \\\"; color: var(--ap-quiet); font-weight: 400; }\\n.ap-desk .empty { padding: 22px; background: var(--ap-paper); border: 1px dashed var(--ap-rule); border-radius: 6px; display: grid; gap: 4px; }\\n.ap-desk .empty strong { font: 400 20px/1.3 var(--ap-serif); color: var(--ap-navy); }\\n.ap-desk .empty span { font: 400 15px/1.55 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .ask { display: grid; gap: 12px; padding: 22px; background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; }\\n.ap-desk .ask-row { display: flex; gap: 10px; flex-wrap: wrap; }\\n.ap-desk .ask-row input { flex: 1 1 320px; min-width: 0; font: 400 17px/1.4 var(--ap-sans); padding: 12px 14px; border: 1px solid var(--ap-rule); border-radius: 2px; background: #fff; color: var(--ap-ink); }\\n.ap-desk .ask-row input:focus { border-color: var(--ap-bronze); outline: none; }\\n.ap-desk .ask-q { font: 400 14px/1.5 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .ask-a { font: 400 17px/1.6 var(--ap-serif); color: var(--ap-ink); white-space: pre-line; border-left: 3px solid var(--ap-bronze); padding-left: 16px; }\\n.ap-desk .ask-note { font: 400 13px/1.5 var(--ap-sans); color: var(--ap-quiet); } .ap-desk .ask-note.bad { font: 600 15px/1.5 var(--ap-sans); color: var(--ap-navy); background: #fff; border: 1px solid var(--ap-rule); border-left: 4px solid var(--ap-bronze); border-radius: 2px; padding: 14px 16px; display: grid; gap: 12px; justify-items: start; } .ap-desk .ask-note.bad span { font-weight: 400; }\\n.ap-desk .ask-tries { display: flex; gap: 8px; flex-wrap: wrap; }\\n.ap-desk .ask-tries button { font: 400 13px/1.3 var(--ap-sans); color: var(--ap-navy); background: #fff; border: 1px solid var(--ap-rule); border-radius: 2px; padding: 7px 11px; cursor: pointer; text-align: left; }\\n.ap-desk .ask-tries button:hover { border-color: var(--ap-bronze); }\\n.ap-desk .tile { background: var(--ap-paper); border: 1px solid var(--ap-rule); border-radius: 6px; padding: 18px 20px 16px; display: grid; gap: 4px; min-width: 0; }\\n.ap-desk .tile .label { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .tile .num { font: 400 36px/1.1 var(--ap-serif); color: var(--ap-navy); font-variant-numeric: tabular-nums; }\\n.ap-desk .tile .num small { font: 400 15px/1 var(--ap-sans); color: var(--ap-quiet); margin-left: 6px; }\\n.ap-desk .tile .sub { font: 400 14px/1.45 var(--ap-sans); color: var(--ap-quiet); }\\n.ap-desk .tile.hero { border-color: var(--ap-bronze); box-shadow: inset 3px 0 0 var(--ap-bronze); }\\n.ap-desk .seats { display: flex; gap: 4px; margin-top: 8px; }\\n.ap-desk .seat { flex: 1; height: 8px; border-radius: 2px; background: var(--ap-rule); }\\n.ap-desk .seat.on { background: var(--ap-bronze); }\\n.ap-desk .tablewrap { overflow-x: auto; background: #fff; border: 1px solid var(--ap-rule); border-radius: 6px; }\\n.ap-desk table { border-collapse: collapse; width: 100%; font: 400 15px/1.45 var(--ap-sans); min-width: 640px; margin: 0; }\\n.ap-desk th, .ap-desk td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--ap-rule); vertical-align: top; background: transparent; }\\n.ap-desk th { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); white-space: nowrap; }\\n.ap-desk tr:last-child td { border-bottom: 0; }\\n.ap-desk td.num { font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }\\n.ap-desk .step { white-space: nowrap; font-size: 14px; }\\n.ap-desk .step .ok { color: var(--ap-good); font-weight: 600; }\\n.ap-desk .step .no { color: var(--ap-quiet); }\\n.ap-desk .name { font: 400 18px/1.3 var(--ap-serif); color: var(--ap-navy); }\\n.ap-desk .stage { display: inline-block; font: 600 12px/1.2 var(--ap-sans); letter-spacing: .08em; text-transform: uppercase; color: var(--ap-quiet); white-space: nowrap; }\\n.ap-desk .stage.seated { color: var(--ap-good); }\\n.ap-desk .ro-cards { display: none; }\\n.ap-desk .ro-cards .ap-card { gap: 8px; }\\n.ap-desk .ro-cards .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 14px; margin-top: 4px; }\\n.ap-desk .ro-cards .fact { display: grid; gap: 2px; min-width: 0; }\\n.ap-desk .ro-cards .fact .k { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .1em; text-transform: uppercase; color: var(--ap-quiet); }\\n.ap-desk .ro-cards .fact .v { font: 400 15px/1.4 var(--ap-sans); color: var(--ap-ink); overflow-wrap: anywhere; }\\n.ap-desk .ro-cards .fact.wide { grid-column: 1 / -1; }\\n.ap-desk .room-list { margin-top: 16px; }\\n.ap-desk .room-list .seatno { font: 600 12px/1.2 var(--ap-sans); letter-spacing: .08em; text-transform: uppercase; color: var(--ap-bronze); white-space: nowrap; }\\n.ap-desk .room-list .how { display: inline-block; font: 600 12px/1.2 var(--ap-sans); letter-spacing: .06em; text-transform: uppercase; color: var(--ap-quiet); white-space: nowrap; }\\n.ap-desk .room-list .how.hand { color: var(--ap-warn); }\\n@media (max-width: 860px) { .ap-desk .ro-table { display: none; }\\n.ap-desk .ro-cards { display: grid; gap: 12px; }\\n }\\n.ap-desk .door { padding: 20px 22px; border: 1px solid var(--ap-rule); border-radius: 6px; background: #fff; display: grid; gap: 12px; align-content: start; min-width: 0; }\\n.ap-desk .door h3 { font: 400 20px/1.3 var(--ap-serif); color: var(--ap-navy); }\\n.ap-desk ul.list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }\\n.ap-desk ul.list li { display: grid; grid-template-columns: 1fr auto; gap: 2px 12px; font: 400 15px/1.45 var(--ap-sans); border-bottom: 1px solid var(--ap-rule); padding-bottom: 10px; min-width: 0; margin: 0; }\\n.ap-desk ul.list li:last-child { border-bottom: 0; padding-bottom: 0; }\\n.ap-desk ul.list li > span:first-child { min-width: 0; overflow-wrap: anywhere; }\\n.ap-desk ul.list .r { color: var(--ap-quiet); font-size: 13px; white-space: nowrap; font-variant-numeric: tabular-nums; }\\n.ap-desk ul.list .s { grid-column: 1 / -1; color: var(--ap-quiet); font-size: 14px; overflow-wrap: anywhere; }\\n.ap-desk .kind { font: 600 11px/1.3 var(--ap-sans); letter-spacing: .1em; text-transform: uppercase; color: var(--ap-bronze); margin-right: 6px; }\\n.ap-desk .bars { display: grid; gap: 8px; }\\n.ap-desk .bar-row { display: grid; grid-template-columns: minmax(90px, 150px) 1fr 36px; gap: 10px; align-items: center; font: 400 14px/1.4 var(--ap-sans); }\\n.ap-desk .bar-row > span:first-child { min-width: 0; overflow-wrap: anywhere; }\\n.ap-desk .bar-row .track { height: 10px; background: var(--ap-rule); border-radius: 2px; overflow: hidden; }\\n.ap-desk .bar-row .fill { height: 100%; background: var(--ap-bronze); border-radius: 2px; }\\n.ap-desk .bar-row .n { text-align: right; font-variant-numeric: tabular-nums; color: var(--ap-quiet); }\\n.ap-desk .money { font: 400 30px/1.1 var(--ap-serif); color: var(--ap-navy); font-variant-numeric: tabular-nums; }\\n.ap-desk .money small { font: 400 14px/1.4 var(--ap-sans); color: var(--ap-quiet); margin-left: 6px; }\\n.ap-desk .ap-foot { margin-top: 40px; padding-top: 16px; border-top: 1px solid var(--ap-rule); font: 400 13px/1.6 var(--ap-sans); color: var(--ap-quiet); display: grid; gap: 6px; }\\n.ap-desk .ap-foot a, .ap-desk .ap-foot button { color: var(--ap-navy); text-decoration: underline; font: inherit; font-weight: 600; background: none; border: 0; padding: 0; cursor: pointer; }\\n@media (prefers-reduced-motion: no-preference) { .ap-desk .ap-btn, .ap-desk .ap-primary, .ap-desk button.plain { transition: background-color .15s ease, color .15s ease, border-color .15s ease; }\\n }\\n\\n/* build 9: the site styles every link at id strength; these win over it */\\n#apDesk.ap-desk a { color: var(--ap-navy); text-decoration: none; }\\n#apDesk.ap-desk a:hover, #apDesk.ap-desk a:focus-visible { text-decoration: underline; }\\n#apDesk.ap-desk a.ap-primary, #apDesk.ap-desk a.ap-primary:hover { color: var(--ap-band); text-decoration: none; } #pageContainer #apDesk.ap-desk a, #pageContainer #apDesk.ap-desk a:hover, #pageContainer #apDesk.ap-desk a:focus, #pageContainer #apDesk.ap-desk a:active, #pageContainer #apDesk.ap-desk a:visited, #apDesk.ap-desk a, #apDesk.ap-desk a:hover, #apDesk.ap-desk a:focus, #apDesk.ap-desk a:active, #apDesk.ap-desk a:visited { text-decoration: none !important; text-decoration-line: none !important; } #pageContainer #apDesk.ap-desk a:not(.ap-primary):not(.ap-btn):hover, #apDesk.ap-desk a:not(.ap-primary):not(.ap-btn):hover { text-decoration: underline !important; text-decoration-line: underline !important; }\\n#apDesk.ap-desk a.ap-btn-primary, #apDesk.ap-desk a.ap-btn-primary:hover { color: #fff; text-decoration: none; }\\n#apDesk.ap-desk a.ap-btn-ghost { color: var(--ap-navy); text-decoration: none; }\\n#apDesk.ap-desk a.ap-btn-ghost:hover { color: #fff; text-decoration: none; }\\n#apDesk.ap-desk .ap-foot a { text-decoration: underline; }\\n.ap-desk .ap-read { display: grid; gap: 10px; margin-top: 4px; padding-top: 14px; border-top: 1px solid var(--ap-rule); }\\n.ap-desk .ap-read h4 { margin: 6px 0 0; font: 600 11px/1.3 var(--ap-sans); letter-spacing: .12em; text-transform: uppercase; color: var(--ap-bronze); }\\n.ap-desk .ap-read .ask-a { font-size: 16px; }\\n</style>\\n<div class=\\\"ap-band\\\">\\n<div class=\\\"ap-band-in\\\">\\n<p class=\\\"ap-eyebrow\\\">Front Desk</p>\\n<h1 class=\\\"ap-hello\\\" id=\\\"apHello\\\">Front Desk</h1>\\n<p class=\\\"ap-line\\\" id=\\\"apLine\\\">Opening the desk.</p>\\n<div id=\\\"gSignin\\\" hidden>\\n<button class=\\\"ap-primary\\\" type=\\\"button\\\" id=\\\"gSigninBtn\\\">Sign in</button>\\n<p class=\\\"ap-primary-note\\\">The Front Desk is for the Ancient Path team. Sign in with your site account to open it.</p>\\n</div>\\n<div id=\\\"gSend\\\" hidden>\\n<div class=\\\"ap-gate-row\\\" id=\\\"gEmailRow\\\" hidden><input class=\\\"ap-email\\\" type=\\\"email\\\" id=\\\"gEmail\\\" placeholder=\\\"your email\\\" autocomplete=\\\"email\\\"></div>\\n<button class=\\\"ap-primary\\\" type=\\\"button\\\" id=\\\"gSendBtn\\\">Send me my desk code</button>\\n<p class=\\\"ap-primary-note\\\" id=\\\"gSendNote\\\">The first time you open the desk on a browser, a six-digit code goes to your email. After that it just opens.</p>\\n<p class=\\\"ap-gate-err\\\" id=\\\"gSendErr\\\" hidden></p>\\n</div>\\n<div id=\\\"gCode\\\" hidden>\\n<div class=\\\"ap-gate-row\\\"><input type=\\\"text\\\" inputmode=\\\"numeric\\\" autocomplete=\\\"one-time-code\\\" maxlength=\\\"7\\\" id=\\\"gCodeIn\\\" placeholder=\\\"000 000\\\" aria-label=\\\"The six-digit code from your email\\\"><button class=\\\"ap-primary\\\" type=\\\"button\\\" id=\\\"gCodeBtn\\\">Open the desk</button></div>\\n<p class=\\\"ap-primary-note\\\" id=\\\"gCodeNote\\\">Check your email for a six-digit code. It works for ten minutes.</p>\\n<p class=\\\"ap-gate-err\\\" id=\\\"gCodeErr\\\" hidden></p>\\n<button class=\\\"ap-gate-again\\\" type=\\\"button\\\" id=\\\"gAgain\\\">Send it again</button>\\n</div>\\n<div id=\\\"gDesk\\\" hidden>\\n<a class=\\\"ap-primary\\\" id=\\\"apPrimary\\\" href=\\\"#lane\\\">See what is waiting</a>\\n<p class=\\\"ap-primary-note\\\" id=\\\"apPrimaryNote\\\">Every form, payment and booking that came in, gathered in one place.</p>\\n</div>\\n</div>\\n</div>\\n<div class=\\\"wrap\\\" id=\\\"deskBody\\\" hidden>\\n<div class=\\\"status\\\" id=\\\"status\\\"><span class=\\\"dot\\\" id=\\\"dot\\\"></span><span id=\\\"statusText\\\">Reading the desk…</span><button class=\\\"plain\\\" id=\\\"refresh\\\" type=\\\"button\\\">Refresh</button></div>\\n<div id=\\\"notices\\\"></div>\\n<section class=\\\"ap-sec first\\\" id=\\\"actions-sec\\\">\\n<div class=\\\"ap-sec-head\\\">\\n<div><p class=\\\"ap-kind\\\">Do this</p><h2 class=\\\"ap-h2\\\" id=\\\"actions-h\\\">The lane</h2></div>\\n<div class=\\\"tabs\\\" role=\\\"group\\\" aria-label=\\\"Whose actions\\\" id=\\\"tabs\\\"></div>\\n</div>\\n<div class=\\\"lane\\\" id=\\\"lane\\\"></div>\\n<div class=\\\"ap-card is-next\\\" id=\\\"apNext\\\">\\n<p class=\\\"ap-card-kind\\\">If you want a suggestion</p>\\n<p class=\\\"ap-card-title\\\" id=\\\"apNextTitle\\\">Start with the lane</p>\\n<p class=\\\"ap-card-body\\\" id=\\\"apNextBody\\\">This box names one thing to do next, chosen from what came in.</p>\\n<div class=\\\"ap-card-actions\\\"><a class=\\\"ap-btn ap-btn-ghost\\\" id=\\\"apNextLink\\\" href=\\\"#lane\\\">Go there</a></div>\\n</div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"ask-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">Ask and answer</p><h2 class=\\\"ap-h2\\\">Ask the desk</h2></div><p class=\\\"ap-sec-note\\\">It answers from what the desk holds — the roster, the lane, the week, the list — and nothing else.</p></div>\\n<form class=\\\"ask\\\" id=\\\"askForm\\\">\\n<div class=\\\"ask-row\\\"><input type=\\\"text\\\" id=\\\"askIn\\\" maxlength=\\\"500\\\" placeholder=\\\"Who has signed the agreement but not answered?\\\" aria-label=\\\"Your question\\\"><button class=\\\"ap-btn ap-btn-primary\\\" type=\\\"submit\\\" id=\\\"askBtn\\\">Ask</button></div>\\n<div class=\\\"ask-tries\\\" id=\\\"askTries\\\"></div>\\n<p class=\\\"ask-q\\\" id=\\\"askQ\\\" hidden></p>\\n<p class=\\\"ask-a\\\" id=\\\"askA\\\" hidden></p>\\n<p class=\\\"ask-note\\\" id=\\\"askNote\\\" hidden></p>\\n</form>\\n</section>\\n<section class=\\\"ap-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">The room</p><h2 class=\\\"ap-h2\\\" id=\\\"cohort-h\\\">Breaking Free</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"cohort-sub\\\"></p></div>\\n<div class=\\\"ap-grid ap-grid-4\\\" id=\\\"cohort-tiles\\\"></div>\\n<div class=\\\"room-list\\\" id=\\\"room-list\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"bwm-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">Before we meet</p><h2 class=\\\"ap-h2\\\" id=\\\"bwm-h\\\">Agreement and answers</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"bwm-sub\\\"></p></div>\\n<div class=\\\"ap-grid ap-grid-4\\\" id=\\\"bwm-tiles\\\"></div>\\n<div id=\\\"bwm-list\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">The list</p><h2 class=\\\"ap-h2\\\">ActiveCampaign</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"ac-sub\\\"></p></div>\\n<div class=\\\"ap-grid ap-grid-4\\\" id=\\\"ac-tiles\\\"></div>\\n<div id=\\\"ac-campaigns\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"roster-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">One row per man</p><h2 class=\\\"ap-h2\\\">Roster</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"roster-sub\\\"></p></div>\\n<div id=\\\"roster\\\"></div>\\n</section>\\n<section class=\\\"ap-sec\\\" id=\\\"week-sec\\\">\\n<div class=\\\"ap-sec-head\\\"><div><p class=\\\"ap-kind\\\">Last seven days</p><h2 class=\\\"ap-h2\\\">What came in</h2></div><p class=\\\"ap-sec-note\\\" id=\\\"week-sub\\\"></p></div>\\n<div class=\\\"ap-grid ap-grid-2\\\" id=\\\"week\\\"></div>\\n</section>\\n<footer class=\\\"ap-foot\\\">\\n<div id=\\\"foot-1\\\">Reads the Front Desk sheet and the ActiveCampaign count through the Front Desk script. Nothing on this page is typed by hand.</div>\\n<div><span id=\\\"footWho\\\"></span> <button type=\\\"button\\\" id=\\\"forget\\\">Not you? Forget this browser</button></div>\\n<div><a href=\\\"https://docs.google.com/spreadsheets/d/1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw/edit\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Open the Front Desk sheet</a> · <a href=\\\"https://docs.google.com/spreadsheets/d/1VE7ouQQwiG9A-M49nFATwVCpcG6qJSITaWWmE1AwLeM/edit\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Open the AC count sheet</a></div>\\n</footer>\\n</div>\\n<div class=\\\"wrap\\\" id=\\\"facBody\\\" hidden>\\n<div class=\\\"ap-sec first\\\">\\n<div class=\\\"empty\\\"><strong id=\\\"facTitle\\\">The facilitator desk opens after week 3.</strong><span>Your room's roster and notes will be here, and nothing of any other room.</span></div>\\n</div>\\n<footer class=\\\"ap-foot\\\"><div><span id=\\\"facWho\\\"></span> <button type=\\\"button\\\" id=\\\"facForget\\\">Not you? Forget this browser</button></div></footer>\\n</div>\";\n(function () {\nvar DESK_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split(\"?\")[0] : \"\"; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : \"https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec\"; })();\nvar BUILD = 11, TZ = 'America/Chicago', STORE = 'apDesk';\nvar SCRIPT_SETTINGS = 'https://script.google.com/home/projects/1piMd8lIIuSvToz54hRbZGEJsDm6u0YaoeF-6dMufJvlDhEThQizYhZ42/settings?authuser=john@ancientpathcoaching.com';\nvar $ = function (id) { return document.getElementById(id); };\nvar esc = function (s) { return String(s == null ? '' : s).replace(/[&<>\"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' }[c]; }); };\nvar feed = null, ac = null, owner = 'all', readAt = null, me = null, who = null, timer = null;\ntry { owner = localStorage.getItem('fd-owner') || 'all'; } catch (e) {}\nfunction stored() { try { var v = JSON.parse(localStorage.getItem(STORE) || 'null'); return v && v.key ? v : null; } catch (e) { return null; } }\nfunction keep(v) { try { if (v) localStorage.setItem(STORE, JSON.stringify(v)); else localStorage.removeItem(STORE); } catch (e) {} }\nfunction call(body) {\nif (!DESK_URL) return Promise.reject({ error: 'no_url' });\nreturn fetch(DESK_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), credentials: 'omit' })\n.then(function (r) { return r.json(); }, function () { throw { error: 'network' }; })\n.then(function (r) { if (!r || r.ok !== true) throw (r || { error: 'network' }); return r; });\n}\nfunction words(e) {\nswitch (e && e.error) {\ncase 'not_on_list': return 'That email is not on the desk list. John adds people on the People tab of the Front Desk sheet.';\ncase 'bad_email': return 'That does not look like an email address.';\ncase 'wait': return 'A code went out less than two minutes ago. Check your email, including spam, before asking again.';\ncase 'too_many': return 'Five codes have gone to that address today. Try again tomorrow, or ask John.';\ncase 'code_wrong': return 'That is not the code. Check the six digits and try again.';\ncase 'code_expired': return 'That code has run out. Send a new one.';\ncase 'no_key': case 'bad_key': return 'This browser has no desk key. Ask for a code.';\ncase 'key_expired': return 'Your desk key has run out after ninety days. Ask for a new code.';\ncase 'removed': return 'Your name is no longer on the desk list.';\ncase 'no_claude_key': return 'The desk cannot answer questions yet: the Claude key is not in the script.';\ncase 'not_yet': return 'Questions open with the facilitator desk.';\ncase 'busy': return 'Claude is busy right now. Ask again in a minute.';\ncase 'key_refused': return 'Claude refused the key stored in the script, so the desk cannot answer questions yet. Nothing is wrong with your question. The Claude key in the script needs to be pasted again.';\ncase 'model_unknown': return 'Claude does not know the model named on the Config tab (the row called desk claude model). Clear that row and the desk will use its default.';\ncase 'empty_answer': case 'claude_error': return 'Claude did not answer this time. Your question is saved on the Asks tab. Try again in a few minutes.';\ncase 'empty': return 'Type a question first.';\ncase 'no_url': return 'This page does not know where the desk is yet.';\ndefault: return 'The desk could not be reached. Try again in a moment.';\n}\n}\nfunction lwMe() { var m = window.me; return (m && typeof m === 'object' && m.email) ? m : null; }\nfunction signedIn() { return !!lwMe() || (typeof window.getUserToken === 'function' && !!document.querySelector('meta[name=\"csrf-token\"]')); }\nfunction getJSON(path) { return fetch(path, { credentials: 'include', headers: { 'Accept': 'application/json' } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }\nfunction readMe() {\nvar m = lwMe();\nif (m) return Promise.resolve({ email: String(m.email || '').toLowerCase().trim(), name: ((m.firstName || m.first_name || '') + ' ' + (m.lastName || m.last_name || '')).trim() || m.username || '' });\nreturn getJSON('/api/user/me').then(function (r) {\nvar u = (r && r.user) || r || {};\nreturn { email: String(u.email || u.user_email || '').toLowerCase().trim(), name: ((u.first_name || '') + ' ' + (u.last_name || '')).trim() || u.username || '' };\n});\n}\nfunction openSignIn() {\ntry { if (window.l_settings) window.l_settings.redirectUrl = location.pathname + location.search; } catch (e) {}\nvar a = document.querySelector('a[data-interactive-link-type=\"openformslink\"][data-interactive-link-var1=\"signin\"]');\nif (a) { a.click(); return; }\n$('gSigninBtn').textContent = 'Use Sign in at the top of the page';\n}\nfunction dt(iso, withTime) {\nif (!iso) return '';\nvar dateOnly = /^\\d{4}-\\d{2}-\\d{2}$/.test(String(iso));\nvar d = new Date(dateOnly ? iso + 'T12:00:00' : iso); if (isNaN(d)) return String(iso);\nvar o = dateOnly ? { month: 'short', day: 'numeric' } : { timeZone: TZ, month: 'short', day: 'numeric' };\nif (withTime) { o.hour = 'numeric'; o.minute = '2-digit'; }\nreturn d.toLocaleString('en-US', o);\n}\nfunction ago(iso) { if (!iso) return ''; var h = Math.floor((Date.now() - new Date(iso)) / 36e5); if (h < 1) return 'just now'; if (h < 48) return h + ' hour' + (h === 1 ? '' : 's') + ' ago'; return Math.floor(h / 24) + ' days ago'; }\nvar money = function (n) { return '$' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };\nvar plural = function (n, one, many) { return n + ' ' + (n === 1 ? one : many); };\nfunction hourCentral() { return parseInt(new Date().toLocaleString('en-US', { timeZone: TZ, hour: 'numeric', hour12: false }), 10) || 0; }\nfunction greet() { var h = hourCentral(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }\nfunction first(name) { return String(name || '').split(' ')[0]; }\nfunction show(id) { ['gSignin', 'gSend', 'gCode', 'gDesk'].forEach(function (x) { $(x).hidden = x !== id; }); }\nfunction gateSignin() {\n$('apHello').textContent = 'Front Desk';\n$('apLine').textContent = 'Sign in to open the desk.';\nshow('gSignin'); $('deskBody').hidden = true; $('facBody').hidden = true;\n}\nfunction gateSend(line) {\n$('apHello').textContent = greet() + (me && me.name ? ', ' + first(me.name) + '.' : '.');\n$('apLine').textContent = line || (me && me.email ? 'Signed in as ' + me.email + '.' : 'Signed in.');\n$('gEmailRow').hidden = !!(me && me.email);\n$('gSendErr').hidden = true;\nshow('gSend'); $('deskBody').hidden = true; $('facBody').hidden = true;\n}\nfunction gateCode(minutes) {\n$('gCodeNote').textContent = 'Check your email for a six-digit code. It works for ' + (minutes || 10) + ' minutes.';\n$('gCodeErr').hidden = true; $('gCodeIn').value = '';\nshow('gCode');\nsetTimeout(function () { try { $('gCodeIn').focus(); } catch (e) {} }, 50);\n}\nfunction emailForCode() { return (me && me.email) || String($('gEmail').value || '').toLowerCase().trim(); }\n$('gSigninBtn').addEventListener('click', openSignIn);\n$('gSendBtn').addEventListener('click', function () {\nvar email = emailForCode();\nif (!email) { $('gSendErr').textContent = 'Type your email first.'; $('gSendErr').hidden = false; return; }\nvar b = $('gSendBtn'); b.disabled = true; b.textContent = 'Sending…'; $('gSendErr').hidden = true;\ncall({ action: 'code_send', email: email }).then(function (r) {\nb.disabled = false; b.textContent = 'Send me my desk code';\ngateCode(r.minutes);\n}, function (e) {\nb.disabled = false; b.textContent = 'Send me my desk code';\nif (e && e.error === 'wait') { gateCode(10); $('gCodeErr').textContent = words(e); $('gCodeErr').hidden = false; return; }\n$('gSendErr').textContent = words(e); $('gSendErr').hidden = false;\n});\n});\n$('gAgain').addEventListener('click', function () { gateSend(); });\nfunction checkCode() {\nvar code = String($('gCodeIn').value || '').replace(/\\D/g, '');\nif (code.length !== 6) { $('gCodeErr').textContent = 'The code is six digits.'; $('gCodeErr').hidden = false; return; }\nvar b = $('gCodeBtn'); b.disabled = true; b.textContent = 'Opening…'; $('gCodeErr').hidden = true;\ncall({ action: 'code_check', email: emailForCode(), code: code, browser: navigator.userAgent.slice(0, 120) }).then(function (r) {\nb.disabled = false; b.textContent = 'Open the desk';\nkeep({ key: r.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: r.expires });\nopenDesk();\n}, function (e) {\nb.disabled = false; b.textContent = 'Open the desk';\n$('gCodeErr').textContent = words(e); $('gCodeErr').hidden = false;\nif (e && e.error === 'code_expired') setTimeout(function () { gateSend('That code ran out. Send a new one.'); }, 1800);\n});\n}\n$('gCodeBtn').addEventListener('click', checkCode);\n$('gCodeIn').addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); checkCode(); } });\nfunction forgetBrowser() {\nvar s = stored();\nif (s) call({ action: 'forget', key: s.key }).catch(function () {});\nkeep(null); who = null; feed = null;\nif (timer) { clearInterval(timer); timer = null; }\ngateSend('This browser forgot its desk key.');\n}\n$('forget').addEventListener('click', forgetBrowser);\n$('facForget').addEventListener('click', forgetBrowser);\nfunction openDesk() {\nvar s = stored();\nif (!s) { gateSend(); return; }\nwho = s;\n$('apHello').textContent = greet() + (s.name ? ', ' + first(s.name) + '.' : '.');\n$('apLine').textContent = 'Opening the desk.';\nshow('gDesk');\nif (s.role === 'facilitator') {\n$('deskBody').hidden = true; $('facBody').hidden = false;\n$('facWho').textContent = 'Signed in as ' + s.email + '.';\n$('gDesk').hidden = true;\n$('apLine').textContent = 'The facilitator desk' + (s.room ? ' for ' + s.room : '') + ' opens after week 3.';\nreturn;\n}\n$('facBody').hidden = true; $('deskBody').hidden = false;\n$('footWho').textContent = 'Signed in as ' + s.email + '.';\nrenderAll();\nload();\nif (!timer) timer = setInterval(function () { if (document.visibilityState === 'visible') load(true); }, 300000);\n}\nfunction load(quiet) {\nvar s = stored(); if (!s) { gateSend(); return; }\nif (!quiet) setStatus(feed ? 'stale' : '', feed ? 'Refreshing…' : 'Reading the desk…');\ncall({ action: 'desk', key: s.key }).then(function (r) {\nif (r.role !== 'admin') { keep({ key: s.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: s.expires }); openDesk(); return; }\nfeed = r.feed; ac = r.ac; readAt = Date.now(); who.canAsk = r.canAsk; who.claude = r.claude || null; who.people = r.people || [];\nnotice('');\nif (!feed) { renderAll(); setStatus('stale', 'The desk has not been written yet'); notice('The Front Desk sheet has no feed yet. In Apps Script, run <strong>reread</strong> once; the desk fills within a minute.'); return; }\nrenderAll();\nsetStatus('live', 'Script wrote ' + dt(feed.generated, true) + ' · read ' + dt(new Date(readAt).toISOString(), true));\n}, function (e) {\nvar code = e && e.error;\nif (code === 'no_key' || code === 'bad_key' || code === 'key_expired' || code === 'removed') { keep(null); who = null; feed = null; if (timer) { clearInterval(timer); timer = null; } gateSend(words(e)); return; }\nsetStatus(feed ? 'stale' : 'off', feed ? 'Showing the last good read' : 'Could not read the desk'); notice(words(e));\n});\n}\n$('refresh').addEventListener('click', function () { load(); });\nfunction owners() {\nvar set = {}; ((feed && feed.actions) || []).forEach(function (a) { if (a.owner) set[a.owner] = 1; });\n((who && who.people) || []).forEach(function (p) { if (p.role === 'admin' && p.name) set[p.name] = 1; });\nreturn Object.keys(set).sort();\n}\nfunction renderTabs() {\nvar names = owners(); var host = $('tabs');\nif (names.indexOf(owner) < 0 && owner !== 'all') owner = 'all';\nhost.innerHTML = ['all'].concat(names).map(function (n) { return '<button type=\"button\" data-owner=\"' + esc(n) + '\" aria-pressed=\"' + (n === owner) + '\">' + esc(n === 'all' ? 'Everyone' : n) + '</button>'; }).join('');\nArray.prototype.forEach.call(host.querySelectorAll('button'), function (b) {\nb.addEventListener('click', function () { owner = b.getAttribute('data-owner'); try { localStorage.setItem('fd-owner', owner); } catch (e) {} renderTabs(); renderActions(); });\n});\n}\nfunction mine() {\nvar all = (feed && feed.actions) || [];\nvar list = owner === 'all' ? all : all.filter(function (a) { return (a.owner || '').toLowerCase() === owner.toLowerCase(); });\nreturn list.slice().sort(function (a, b) { return new Date(a.firstSeen || 0) - new Date(b.firstSeen || 0); });\n}\nfunction other(name) { var n = owners().filter(function (x) { return x !== name; }); return n.length === 1 ? n[0] : 'the others'; }\nfunction renderGreeting() {\nvar line = $('apLine'), btn = $('apPrimary'), note = $('apPrimaryNote');\nif (!feed) { line.textContent = 'Reading the desk.'; btn.textContent = 'See what is waiting'; btn.href = '#lane'; note.textContent = 'Every form, payment and booking that came in, gathered in one place.'; return; }\nvar all = (feed.actions || []).slice().sort(function (a, b) { return new Date(a.firstSeen || 0) - new Date(b.firstSeen || 0); }), c = feed.cohort || {};\nvar reader = first((who && who.name) || '');\nvar sameOwner = function (a, n) { return n && (a.owner || '').toLowerCase() === n.toLowerCase(); };\nvar ownList = all.filter(function (a) { return sameOwner(a, reader); });\nvar others = owners().filter(function (n) { return n.toLowerCase() !== reader.toLowerCase(); });\nvar waiting = all.length ? plural(all.length, 'thing needs', 'things need') + ' a hand' : 'Nothing is waiting on anyone';\nvar counts = all.length ? (reader ? plural(ownList.length, 'thing', 'things') + ' for you' : '') + others.map(function (n) { var k = all.filter(function (a) { return sameOwner(a, n); }).length; return (reader ? ', ' : '') + k + ' for ' + n; }).join('') : '';\nvar room = c.openSpots != null ? (c.openSpots === 0 ? 'The room is full.' : plural(c.openSpots, 'open spot', 'open spots') + ' in the room.') : '';\nline.innerHTML = '<span class=\"ap-s\">' + esc(waiting) + (counts ? ':' : '.') + '</span> ' + (counts ? '<span class=\"ap-s\">' + esc(counts) + '.</span> ' : '') + (room ? '<span class=\"ap-s\">' + esc(room) + '</span>' : '');\nvar f = ownList[0] || all[0];\nif (f) {\nvar his = sameOwner(f, reader);\nbtn.textContent = (his ? '' : 'For ' + (f.owner || 'the desk') + ': ') + (f.do || 'Open the lane'); btn.href = f.link || '#lane';\nif (f.link) { btn.target = '_blank'; btn.rel = 'noopener'; } else { btn.removeAttribute('target'); btn.removeAttribute('rel'); }\nnote.textContent = (f.for ? f.for : '') + (f.firstSeen ? (f.for ? ' · ' : '') + 'waiting since ' + dt(f.firstSeen, true) : '') + (his || !reader ? '' : ' · nothing is waiting on you');\n} else {\nbtn.textContent = 'Read what came in'; btn.href = '#week-sec';\nbtn.removeAttribute('target'); btn.removeAttribute('rel');\nnote.textContent = feed.doneThisWeek ? feed.doneThisWeek + ' closed this week on its own.' : 'The last seven days, by kind and by name.';\n}\n}\nfunction renderNext() {\nvar t = $('apNextTitle'), b = $('apNextBody'), l = $('apNextLink');\nif (!feed) return;\nvar all = feed.actions || [], list = mine(), c = feed.cohort || {};\nvar old = list.filter(function (a) { return a.firstSeen && (Date.now() - new Date(a.firstSeen)) > 48 * 36e5; });\nvar title, body, href = '#lane', label = 'Go there';\nif (old.length) {\ntitle = 'Clear the oldest one first';\nbody = plural(old.length, 'thing has', 'things have') + ' waited more than two days. A man who signed the agreement is watching his inbox; the sooner he hears back, the more the agreement means. Start with ' + (old[0].for || old[0].do) + '.';\nif (old[0].link) { href = old[0].link; label = 'Open it'; }\n} else if (list.length) {\ntitle = 'Work the lane top to bottom'; body = 'It is in the order things came in. Nothing here is older than two days, so one pass clears it.';\n} else if ((c.openSpots || 0) > 0 && (c.waitList || 0) > 0) {\ntitle = 'Seat someone from the wait list';\nbody = plural(c.waitList, 'man is', 'men are') + ' on the wait list and the room has ' + plural(c.openSpots, 'open spot', 'open spots') + '. Jason sends the email a man gets; the roster shows who has signed the agreement and who has answered the questions.';\nhref = '#roster-sec'; label = 'Open the roster';\n} else if (all.length && owner !== 'all') {\ntitle = 'Nothing for ' + owner + ' today'; body = 'The rest of the lane belongs to ' + other(owner) + '. Yours is clear.'; href = '#week-sec'; label = 'See what came in';\n} else {\ntitle = 'Read what came in'; body = 'Nothing needs a hand. The last seven days are below, by kind and by name, with payments and bookings beside them.'; href = '#week-sec'; label = 'Go there';\n}\nt.textContent = title; b.textContent = body; l.textContent = label; l.href = href;\nif (/^https?:/.test(href)) { l.target = '_blank'; l.rel = 'noopener'; } else { l.removeAttribute('target'); l.removeAttribute('rel'); }\n}\n/* build 11: the Before We Meet cards (keys ans: add: askans: agr: bwm:) carry him — email him, text him — and the answers reader */\nvar ANS_KEY = /^(ans|add|askans|agr|bwm):([^:]+)/;\nvar answersCache = {}, readOpen = {};\nfunction keyEmail(a) { var m = ANS_KEY.exec((a && a.key) || ''); return m ? m[2].toLowerCase() : ''; }\nfunction rosterMan(email) { var r = (feed && feed.roster) || []; for (var i = 0; i < r.length; i++) { if (String(r[i].email).toLowerCase() === email) return r[i]; } return null; }\nfunction smsHref(p) { var d = String(p || '').replace(/[^\\d+]/g, ''); return d.length >= 7 ? 'sms:' + d : ''; }\nfunction cardActions(a) {\n  var em = keyEmail(a), p = em ? rosterMan(em) : null, out = [], hasRead = /^(ans|add):/.test(a.key || '');\n  if (hasRead) out.push('<button type=\"button\" class=\"ap-btn ap-btn-primary\" data-read=\"' + esc(a.key) + '\" data-email=\"' + esc(em) + '\">' + (readOpen[a.key] ? 'Hide his answers' : 'Read his answers') + '</button>');\n  if (a.link) out.push('<a class=\"ap-btn ' + (hasRead ? 'ap-btn-ghost' : 'ap-btn-primary') + '\" href=\"' + esc(a.link) + '\" target=\"_blank\" rel=\"noopener\">Open</a>');\n  if (em) {\n    out.push('<a class=\"ap-btn ap-btn-ghost\" data-mail href=\"mailto:' + esc(em) + '\">Email him</a>');\n    var sms = p ? smsHref(p.phone) : '';\n    if (sms) out.push('<a class=\"ap-btn ap-btn-ghost\" data-text href=\"' + esc(sms) + '\">Text him</a>');\n    out.push('<button type=\"button\" class=\"ap-btn ap-btn-ghost\" data-done=\"' + esc(a.key) + '\">Done</button>');\n  }\n  if (!out.length) return '';\n  return '<div class=\"ap-card-actions\">' + out.join('') + '</div>' + (hasRead ? '<div class=\"ap-read\" data-pane=\"' + esc(a.key) + '\"' + (readOpen[a.key] ? '' : ' hidden') + '>' + (readOpen[a.key] && answersCache[em] ? answersHtml(answersCache[em]) : '') + '</div>' : '');\n}\nfunction answersHtml(r) {\n  var h = '<p class=\"ap-card-state\">' + esc(r.doorWords || '') + (r.at ? ' · in ' + esc(dt(r.at, true)) : '') + '</p>';\n  (r.items || []).forEach(function (x) { h += '<div><p class=\"ask-q\">' + esc(x.q) + '</p><p class=\"ask-a\">' + esc(x.a) + '</p></div>'; });\n  if ((r.since || []).length) {\n    h += '<h4>Since we met</h4>';\n    r.since.forEach(function (x) { h += '<div><p class=\"ask-q\">' + esc(x.d || '') + '</p><p class=\"ask-a\">' + esc(x.t) + '</p></div>'; });\n  }\n  return h;\n}\nfunction bindLane() {\n  var lane = $('lane'), s = stored(); if (!lane || !s) return;\n  Array.prototype.forEach.call(lane.querySelectorAll('[data-read]'), function (b) {\n    b.addEventListener('click', function () {\n      var key = b.getAttribute('data-read'), em = b.getAttribute('data-email'), pane = lane.querySelector('[data-pane=\"' + key.replace(/\"/g, '') + '\"]');\n      if (!pane) return;\n      if (readOpen[key]) { readOpen[key] = false; pane.hidden = true; b.textContent = 'Read his answers'; return; }\n      readOpen[key] = true; pane.hidden = false; b.textContent = 'Hide his answers';\n      if (answersCache[em]) { pane.innerHTML = answersHtml(answersCache[em]); return; }\n      pane.innerHTML = '<p class=\"ap-card-state\">Opening his answers…</p>';\n      call({ action: 'answers', key: s.key, email: em }).then(function (r) { answersCache[em] = r; if (readOpen[key]) pane.innerHTML = answersHtml(r); },\n        function (e) { pane.innerHTML = '<p class=\"ap-card-state\">' + esc(e && e.error === 'none' ? 'No answers on file for him yet.' : words(e)) + '</p>'; readOpen[key] = false; b.textContent = 'Read his answers'; });\n    });\n  });\n  Array.prototype.forEach.call(lane.querySelectorAll('[data-done]'), function (b) {\n    b.addEventListener('click', function () {\n      b.disabled = true; b.textContent = 'Closing…';\n      call({ action: 'done', key: s.key, actionKey: b.getAttribute('data-done') }).then(function () { load(true); }, function (e) { b.disabled = false; b.textContent = 'Done'; notice(esc(words(e))); });\n    });\n  });\n}\nfunction renderActions() {\nrenderGreeting(); renderNext();\nvar lane = $('lane');\nif (!feed) { lane.innerHTML = '<div class=\"empty\"><strong>Reading the desk.</strong><span>Anything that needs a hand shows up here with one owner and one verb.</span></div>'; return; }\nvar all = feed.actions || [], list = mine();\n$('actions-h').textContent = all.length ? plural(all.length, 'thing to do', 'things to do') : 'Nothing waiting';\nif (!list.length) {\nlane.innerHTML = '<div class=\"empty\"><strong>' + (all.length ? 'Nothing for ' + esc(owner) + ' right now.' : 'Clear.') + '</strong><span>' + (feed.doneThisWeek ? feed.doneThisWeek + ' closed this week on its own.' : 'When a man signs the agreement, answers the questions, enrolls, reports a bug or offers a story, the next step appears here.') + '</span></div>';\nreturn;\n}\nlane.innerHTML = list.map(function (a) {\nvar old = a.firstSeen && (Date.now() - new Date(a.firstSeen)) > 48 * 36e5;\nreturn '<article class=\"ap-card act\">' +\n'<p class=\"ap-card-kind\">For ' + esc(a.owner) + '</p>' +\n'<p class=\"ap-card-title\">' + esc(a.do) + '</p>' +\n(a.for ? '<p class=\"ap-card-body\">' + esc(a.for) + '</p>' : '') +\n(a.because ? '<p class=\"ap-card-state\">' + esc(a.because) + '</p>' : '') +\n'<p class=\"ap-card-state\">First seen ' + esc(dt(a.firstSeen, true)) + (old ? ' <span class=\"wait\">waiting ' + esc(ago(a.firstSeen)) + '</span>' : '') + '</p>' +\ncardActions(a) +\n'</article>';\n}).join('');\nbindLane();\n}\nvar TRIES = ['Who has signed the agreement but not answered the questions?', 'Who has his answers in?', 'What came in since Monday?', 'Who is on the wait list, and how long have they waited?'];\nfunction renderAsk() {\n$('askTries').innerHTML = TRIES.map(function (q) { return '<button type=\"button\">' + esc(q) + '</button>'; }).join('');\nArray.prototype.forEach.call($('askTries').querySelectorAll('button'), function (b) { b.addEventListener('click', function () { $('askIn').value = b.textContent; ask(); }); });\nvar st = who && who.claude && who.claude.state;\nif (who && who.canAsk === false) { askMsg({ error: 'no_claude_key' }); } else if (st === 'refused') { askMsg({ error: 'key_refused' }); } else if (st === 'model') { askMsg({ error: 'model_unknown' }); } else { $('askNote').hidden = true; }\n}\nfunction askMsg(e) {\nvar n = $('askNote'); n.className = 'ask-note bad';\nn.innerHTML = '<span>' + esc(words(e)) + '</span>' + (e && e.error === 'key_refused' ? '<a class=\"ap-btn ap-btn-ghost\" href=\"' + SCRIPT_SETTINGS + '\" target=\"_blank\" rel=\"noopener\">Open the script settings</a>' : '');\nn.hidden = false;\n}\nfunction ask() {\nvar q = String($('askIn').value || '').trim();\nif (!q) { $('askNote').className = 'ask-note'; $('askNote').textContent = words({ error: 'empty' }); $('askNote').hidden = false; return; }\nvar s = stored(); if (!s) { gateSend(); return; }\nvar b = $('askBtn'); b.disabled = true; b.textContent = 'Reading the desk…';\n$('askQ').textContent = q; $('askQ').hidden = false; $('askA').hidden = true; $('askNote').hidden = true; $('askNote').className = 'ask-note';\ncall({ action: 'ask', key: s.key, question: q }).then(function (r) {\nb.disabled = false; b.textContent = 'Ask';\n$('askA').textContent = r.answer; $('askA').hidden = false;\n$('askNote').className = 'ask-note'; $('askNote').textContent = 'Answered from the desk as it stood at ' + dt(new Date().toISOString(), true) + '. ' + r.asked + ' of ' + r.of + ' questions today.'; $('askNote').hidden = false;\n}, function (e) {\nb.disabled = false; b.textContent = 'Ask';\naskMsg(e);\n});\n}\n$('askForm').addEventListener('submit', function (ev) { ev.preventDefault(); ask(); });\nfunction tile(label, num, sub, hero, extra) { return '<div class=\"tile' + (hero ? ' hero' : '') + '\"><div class=\"label\">' + esc(label) + '</div><div class=\"num\">' + num + '</div>' + (sub ? '<div class=\"sub\">' + sub + '</div>' : '') + (extra || '') + '</div>'; }\nfunction renderCohort() {\nvar c = feed && feed.cohort, el = $('cohort-tiles');\nif (!c) { el.innerHTML = tile('Seated', '—', 'Reading the desk'); return; }\n$('cohort-h').textContent = c.name || 'Breaking Free';\n$('cohort-sub').textContent = c.firstNight ? 'Week 1 ' + dt(c.firstNight) : '';\nvar seats = '<div class=\"seats\" aria-hidden=\"true\">' + Array.apply(null, Array(c.roomSize || 8)).map(function (_, i) { return '<span class=\"seat' + (i < c.seated ? ' on' : '') + '\"></span>'; }).join('') + '</div>';\nel.innerHTML =\ntile('Seated', c.seated + '<small>of ' + c.roomSize + '</small>', c.openSpots === 0 ? 'The room is full' : plural(c.openSpots, 'open spot', 'open spots'), true, seats) +\ntile('Agreement signed', c.agreementSigned, 'signed the agreement and gave his details') +\ntile('On the wait list', c.waitList, 'not yet seated') +\ntile('Account only', c.accountOnly, 'made a site account, nothing else yet');\n}\nfunction num(v) { return v == null ? '—' : v; }\nfunction howLabel(h) { return h === 'by hand' ? '<span class=\"how hand\">By hand</span>' : '<span class=\"how\">Seat link</span>'; }\n/* build 12: Before We Meet has two halves. The agreement is the signed form (name and contact details). The answers are the twelve questions a man writes at /your-answers. */\nvar bwmOpen = {};\nfunction doorOf(m) { return m.door || 'Group'; }\nfunction inGroup(m) { return doorOf(m) !== 'One-on-one'; }\nfunction bwmGroups() {\n  var r = (feed && feed.roster) || [];\n  var newest = function (k) { return function (a, b) { return String(b[k] || '').localeCompare(String(a[k] || '')); }; };\n  return {\n    answered: r.filter(function (m) { return m.answersIn; }).sort(newest('answersIn')),\n    waitGroup: r.filter(function (m) { return m.agreementSigned && !m.answersIn && inGroup(m); }).sort(newest('agreementSigned')),\n    waitOne: r.filter(function (m) { return m.agreementSigned && !m.answersIn && !inGroup(m); }).sort(newest('agreementSigned')),\n    noAgreement: r.filter(function (m) { return m.seated && !m.agreementSigned && !m.answersIn; }).sort(newest('seated'))\n  };\n}\nfunction bwmRow(m, kind, when, note) {\n  var em = String(m.email || '').toLowerCase(), open = !!bwmOpen[em];\n  var read = kind === 'Answers in' ? '<button type=\"button\" class=\"ap-btn ap-btn-primary\" data-bwm-read=\"' + esc(em) + '\">' + (open ? 'Hide his answers' : 'Read his answers') + '</button> ' : '';\n  return '<li><span><span class=\"kind\">' + esc(kind) + '</span>' + esc(m.name || '(no name yet)') + '</span><span class=\"r\">' + esc(dt(when, true)) + '</span>' +\n    '<span class=\"s\">' + esc(m.email) + ' · ' + esc(note) + '</span>' +\n    '<span class=\"r\">' + read + '<a class=\"ap-btn ap-btn-ghost\" href=\"mailto:' + esc(em) + '\">Email him</a></span>' +\n    '<div class=\"ap-read\" data-bwm-pane=\"' + esc(em) + '\" style=\"grid-column: 1 / -1\"' + (open ? '' : ' hidden') + '>' + (open && answersCache[em] ? answersHtml(answersCache[em]) : '') + '</div></li>';\n}\nfunction renderBwm() {\n  var c = feed && feed.cohort, tiles = $('bwm-tiles'), list = $('bwm-list');\n  if (!tiles || !list) return;\n  if (!c) { tiles.innerHTML = tile('Answers in', '—', 'Reading the desk'); list.innerHTML = ''; $('bwm-sub').textContent = ''; return; }\n  var g = bwmGroups();\n  $('bwm-sub').textContent = 'The signed agreement, and the twelve questions he answers at /your-answers';\n  tiles.innerHTML =\n    tile('Agreement signed', c.agreementSigned, 'signed the agreement and gave his details') +\n    tile('Answers in', c.answersIn, 'saved the twelve questions', true) +\n    tile('Waiting on answers', g.waitGroup.length + g.waitOne.length, g.waitGroup.length + ' group · ' + g.waitOne.length + ' one-on-one') +\n    tile('Seated, no agreement', g.noAgreement.length, 'enrolled, nothing signed on file');\n  var box = function (title, items, empty) { return '<div class=\"door\"><h3>' + esc(title) + '</h3>' + (items.length ? '<ul class=\"list\">' + items.join('') + '</ul>' : '<div class=\"muted small\">' + esc(empty) + '</div>') + '</div>'; };\n  list.innerHTML = '<div style=\"display: grid; gap: 14px; margin-top: 14px\">' +\n    box('Answers in', g.answered.map(function (m) { return bwmRow(m, 'Answers in', m.answersIn, doorOf(m) + ' · ' + (m.agreementSigned ? 'agreement signed ' + dt(m.agreementSigned) : 'no signed agreement on file yet')); }), 'No one has saved his answers yet. They show here the moment a man saves the twelve questions.') +\n    box('Group men: signed the agreement, waiting on answers', g.waitGroup.map(function (m) { return bwmRow(m, doorOf(m), m.agreementSigned, 'signed the agreement, no answers yet'); }), 'No one is waiting.') +\n    box('One-on-one men: coaching has started, no answers yet', g.waitOne.map(function (m) { return bwmRow(m, 'One-on-one', m.agreementSigned, 'coaching has started, no answers yet'); }), 'No one is behind.') +\n    box('Seated with no agreement', g.noAgreement.map(function (m) { return bwmRow(m, 'Group', m.seated, 'enrolled, no signed agreement on file'); }), 'Every seated man has signed.') +\n    '</div>';\n  var s = stored(); if (!s) return;\n  Array.prototype.forEach.call(list.querySelectorAll('[data-bwm-read]'), function (b) {\n    b.addEventListener('click', function () {\n      var em = b.getAttribute('data-bwm-read'), li = b.closest('li'), pane = li && li.querySelector('[data-bwm-pane]');\n      if (!pane) return;\n      if (bwmOpen[em]) { bwmOpen[em] = false; pane.hidden = true; b.textContent = 'Read his answers'; return; }\n      bwmOpen[em] = true; pane.hidden = false; b.textContent = 'Hide his answers';\n      if (answersCache[em]) { pane.innerHTML = answersHtml(answersCache[em]); return; }\n      pane.innerHTML = '<p class=\"ap-card-state\">Opening his answers…</p>';\n      call({ action: 'answers', key: s.key, email: em }).then(function (r) { answersCache[em] = r; if (bwmOpen[em]) pane.innerHTML = answersHtml(r); },\n        function (e) { pane.innerHTML = '<p class=\"ap-card-state\">' + esc(e && e.error === 'none' ? 'No answers on file for him yet.' : words(e)) + '</p>'; bwmOpen[em] = false; b.textContent = 'Read his answers'; });\n    });\n  });\n}\nfunction renderRoom() {\nvar el = $('room-list'); if (!el) return;\nvar room = feed && feed.room;\nif (!room) { el.innerHTML = ''; return; }\nvar men = room.men || [];\nif (!men.length) { el.innerHTML = '<div class=\"empty\"><strong>No one in the room yet.</strong><span>A man appears here the moment his enrollment notice lands in john@ — through the seat link or enrolled by hand.</span></div>'; return; }\nvar table = '<div class=\"ro-table tablewrap\"><table><thead><tr><th>Seat</th><th>Name</th><th>How he got in</th><th>When</th><th class=\"num\">Open after him</th></tr></thead><tbody>' +\nmen.map(function (m) { return '<tr><td><span class=\"seatno\">' + esc(m.seat) + ' of ' + esc(room.size) + '</span></td><td><div class=\"name\">' + esc(m.name || '(no name yet)') + '</div><div class=\"small muted\">' + esc(m.email) + '</div></td><td>' + howLabel(m.how) + '</td><td>' + esc(dt(m.when, true)) + '</td><td class=\"num\">' + esc(m.openAfter) + '</td></tr>'; }).join('') + '</tbody></table></div>';\nvar cards = '<div class=\"ro-cards\">' + men.map(function (m) {\nreturn '<article class=\"ap-card\"><span class=\"seatno\">Seat ' + esc(m.seat) + ' of ' + esc(room.size) + '</span><p class=\"ap-card-title\">' + esc(m.name || '(no name yet)') + '</p><p class=\"ap-card-state\">' + esc(m.email) + '</p><div class=\"facts\">' +\nfact('How he got in', howLabel(m.how)) + fact('When', esc(dt(m.when, true))) + fact('Open after him', esc(m.openAfter)) + '</div></article>';\n}).join('') + '</div>';\nel.innerHTML = table + cards;\n}\nfunction renderAC() {\nvar el = $('ac-tiles'), camp = $('ac-campaigns');\nif (!ac) { el.innerHTML = tile('Men on the list', '—', 'Waiting on the count sheet'); camp.innerHTML = ''; return; }\nvar st = ac.stages || {}, men = st.men || {}, ch = st.churches || {}, un = ac.unsubscribed || {};\n$('ac-sub').textContent = ac.generated ? 'Counted ' + dt(ac.generated, true) + (ac.since ? ' · window since ' + dt(ac.since) : '') : '';\nel.innerHTML =\ntile('Men on the list', num(men.on_the_list), 'contacts tagged as men') +\ntile('Hand raised', num(men.hand_raised), (men.wait_list || 0) + ' on the AC wait list · ' + (men.in_conversation || 0) + ' in conversation') +\ntile('Churches', (ch.no_reply || 0) + (ch.has_program || 0) + (ch.no_program || 0) + (ch.referred || 0) + (ch.not_us || 0), (ch.has_program || 0) + ' have a program · ' + (ch.no_program || 0) + ' want one · ' + (ch.referred || 0) + ' referred') +\ntile('Unsubscribed', num(un.count), 'this window · ' + num(un.all_time) + ' all time');\nvar cs = (ac.campaigns || []).slice(0, 4);\nif (!cs.length) { camp.innerHTML = ''; return; }\ncamp.innerHTML = '<div class=\"tablewrap\"><table><thead><tr><th>Campaign</th><th>Sent</th><th class=\"num\">To</th><th class=\"num\">Opened</th><th class=\"num\">Clicked</th><th class=\"num\">Unsubscribed</th></tr></thead><tbody>' +\ncs.map(function (k) {\nvar clicks = Object.keys(k).filter(function (x) { return x.indexOf('unique_clicks') === 0; }).reduce(function (s, x) { return s + Number(k[x] || 0); }, 0);\nvar pct = k.sent ? Math.round(100 * Number(k.unique_opens || 0) / Number(k.sent)) : 0;\nreturn '<tr><td>' + esc(k.name) + '</td><td class=\"step\">' + esc(dt(k.sent_or_scheduled)) + '</td><td class=\"num\">' + esc(k.sent) + '</td><td class=\"num\">' + esc(k.unique_opens) + ' <span class=\"muted small\">(' + pct + '%)</span></td><td class=\"num\">' + clicks + '</td><td class=\"num\">' + esc(k.unsubscribes) + '</td></tr>';\n}).join('') + '</tbody></table></div>';\n}\nfunction step(iso) { return iso ? '<span class=\"ok\">✓</span> ' + esc(dt(iso)) : '<span class=\"no\">—</span>'; }\nfunction fact(k, v, wide) { return '<div class=\"fact' + (wide ? ' wide' : '') + '\"><span class=\"k\">' + esc(k) + '</span><span class=\"v\">' + v + '</span></div>'; }\nfunction renderRoster() {\nvar el = $('roster');\nif (!feed) { el.innerHTML = '<div class=\"empty\"><strong>Reading the desk.</strong><span>One row per man, keyed by his email.</span></div>'; return; }\nvar r = feed.roster || [];\n$('roster-sub').textContent = r.length ? plural(r.length, 'man', 'men') + ' on the sheet' : '';\nif (!r.length) { el.innerHTML = '<div class=\"empty\"><strong>No one on the roster yet.</strong><span>The roster fills from the signed agreement, the site account and the enrollment notice.</span></div>'; return; }\nvar stage = function (m) { return '<span class=\"stage ' + (m.stage === 'Seated' ? 'seated' : '') + '\">' + esc(m.stage || '—') + '</span>'; };\nvar table = '<div class=\"ro-table tablewrap\"><table><thead><tr><th>Name</th><th>Stage</th><th>Wait list</th><th>Agreement</th><th>Answers</th><th>Account</th><th>Seated</th><th>Here for</th><th>Referred by</th></tr></thead><tbody>' +\nr.map(function (m) { return '<tr><td><div class=\"name\">' + esc(m.name || '(no name yet)') + '</div><div class=\"small muted\">' + esc(m.email) + '</div></td><td>' + stage(m) + '</td><td class=\"step\">' + step(m.waitList) + '</td><td class=\"step\">' + step(m.agreementSigned) + '</td><td class=\"step\">' + step(m.answersIn) + '</td><td class=\"step\">' + step(m.account) + '</td><td class=\"step\">' + step(m.seated) + '</td><td>' + esc(m.hereFor) + '</td><td>' + esc(m.referredBy) + '</td></tr>'; }).join('') + '</tbody></table></div>';\nvar cards = '<div class=\"ro-cards\">' + r.map(function (m) {\nreturn '<article class=\"ap-card\">' + stage(m) + '<p class=\"ap-card-title\">' + esc(m.name || '(no name yet)') + '</p><p class=\"ap-card-state\">' + esc(m.email) + '</p><div class=\"facts\">' +\nfact('Wait list', '<span class=\"step\">' + step(m.waitList) + '</span>') + fact('Agreement', '<span class=\"step\">' + step(m.agreementSigned) + '</span>') + fact('Answers', '<span class=\"step\">' + step(m.answersIn) + '</span>') + fact('Account', '<span class=\"step\">' + step(m.account) + '</span>') + fact('Seated', '<span class=\"step\">' + step(m.seated) + '</span>') +\n(m.hereFor ? fact('Here for', esc(m.hereFor), true) : '') + (m.referredBy ? fact('Referred by', esc(m.referredBy), true) : '') + '</div></article>';\n}).join('') + '</div>';\nel.innerHTML = table + cards;\n}\nfunction renderWeek() {\nvar el = $('week');\nif (!feed) { el.innerHTML = ''; return; }\nvar inb = feed.inbound || {}, by = inb.byKind7 || {}, pay = feed.payments || {}, co = feed.coaching || {};\n$('week-sub').textContent = inb.last7 != null ? inb.last7 + ' notices read' + (feed.lastRun && feed.lastRun.archived ? ' · ' + feed.lastRun.archived + ' moved out of the inbox on the last run' : '') : '';\nvar kinds = Object.keys(by).sort(function (a, b) { return by[b] - by[a]; });\nvar max = kinds.length ? by[kinds[0]] : 1;\nvar bars = kinds.length ? '<div class=\"bars\">' + kinds.map(function (k) { return '<div class=\"bar-row\"><span>' + esc(k) + '</span><div class=\"track\"><div class=\"fill\" style=\"width:' + Math.round(100 * by[k] / max) + '%\"></div></div><span class=\"n\">' + by[k] + '</span></div>'; }).join('') + '</div>' : '<div class=\"muted small\">Nothing in the last seven days.</div>';\nvar recent = (inb.recent || []).slice(0, 12);\nel.innerHTML =\n'<div class=\"door\"><h3>By kind</h3>' + bars + '<div class=\"small muted\">' + (inb.storyPieces7 || 0) + ' Your Story pieces saved this week.' + (inb.keptInInbox ? ' ' + inb.keptInInbox + ' left in the inbox for a look.' : '') + '</div></div>' +\n'<div class=\"door\"><h3>Most recent</h3>' + (recent.length ? '<ul class=\"list\">' + recent.map(function (x) { return '<li><span><span class=\"kind\">' + esc(x.kind) + '</span>' + esc(x.name || x.email || x.source) + '</span><span class=\"r\">' + esc(dt(x.received, true)) + '</span>' + (x.summary ? '<span class=\"s\">' + esc(x.summary) + (x.link ? ' · <a href=\"' + esc(x.link) + '\" target=\"_blank\" rel=\"noopener\">Open</a>' : '') + '</span>' : '') + '</li>'; }).join('') + '</ul>' : '<div class=\"muted small\">Nothing yet.</div>') + '</div>' +\n'<div class=\"door\"><h3>Payments</h3><div class=\"money\">' + money(pay.total30) + '<small>in 30 days · ' + plural(pay.count30 || 0, 'payment', 'payments') + '</small></div>' +\n((pay.recent || []).length ? '<ul class=\"list\">' + pay.recent.slice(0, 6).map(function (p) { return '<li><span>' + money(p.amount) + ' <span class=\"muted small\">' + esc(p.from || p.what || '') + '</span>' + (p.link ? ' · <a href=\"' + esc(p.link) + '\" target=\"_blank\" rel=\"noopener\">Stripe</a>' : '') + '</span><span class=\"r\">' + esc(dt(p.received)) + '</span></li>'; }).join('') + '</ul>' : '<div class=\"muted small\">No Stripe payment emails on file yet.</div>') + '</div>' +\n'<div class=\"door\"><h3>Coaching sessions</h3>' + ((co.upcoming || []).length ? '<ul class=\"list\">' + co.upcoming.slice(0, 8).map(function (s) { return '<li><span>' + esc(s.name) + ' <span class=\"muted small\">' + esc(s.session) + (s.status !== 'booked' ? ' · ' + esc(s.status) : '') + (s.source === 'calendar' ? ' · calendar' : '') + '</span></span><span class=\"r\">' + esc(s.when) + '</span></li>'; }).join('') + '</ul>' : '<div class=\"muted small\">No sessions ahead on the calendar or in Calendly.</div>') + '</div>';\n}\nfunction renderAll() { renderTabs(); renderActions(); renderAsk(); renderCohort(); renderBwm(); renderRoom(); renderAC(); renderRoster(); renderWeek(); }\nfunction setStatus(kind, text) { $('dot').className = 'dot ' + kind; $('statusText').textContent = text; }\nfunction notice(html, crit) { $('notices').innerHTML = html ? '<div class=\"note' + (crit ? ' crit' : '') + '\">' + html + '</div>' : ''; }\nfunction start(tries) {\ntries = tries || 0;\nif (!signedIn()) { if (tries < 10) { setTimeout(function () { start(tries + 1); }, 300); return; } gateSignin(); return; }\nreadMe().then(function (m) {\nme = m;\nif (stored()) openDesk(); else gateSend();\n});\n}\nfunction scroller() {\nvar e = host.parentElement;\nwhile (e && e !== document.body && e !== document.documentElement) {\nvar o = getComputedStyle(e).overflowY;\nif (o === 'auto' || o === 'scroll') return e;\ne = e.parentElement;\n}\nreturn document.documentElement;\n}\nfunction fit() {\nvar h = document.getElementById('apDesk'); if (!h) return;\nvar sc = scroller(), page = sc === document.documentElement;\nvar cw = sc.clientWidth, L = page ? 0 : sc.getBoundingClientRect().left + sc.clientLeft;\nh.style.marginLeft = '0px'; h.style.marginRight = '0px';\nvar hr = h.getBoundingClientRect();\nvar gl = hr.left - L, gr = (L + cw) - hr.right;\nif (gr > gl + 1) h.style.marginRight = (-(gr - gl)) + 'px'; else if (gl > gr + 1) h.style.marginLeft = (-(gl - gr)) + 'px';\nvar b = h.querySelector('.ap-band'); if (!b) return;\nb.style.marginLeft = '0px'; b.style.width = cw + 'px';\nb.style.marginLeft = (L - b.getBoundingClientRect().left) + 'px';\n}\nfit(); window.addEventListener('resize', fit); window.addEventListener('orientationchange', fit); window.addEventListener('load', fit);\nif (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);\nif (window.ResizeObserver) { try { var fitQueued = false, queueFit = function () { if (fitQueued) return; fitQueued = true; requestAnimationFrame(function () { fitQueued = false; fit(); }); }; var ro = new ResizeObserver(queueFit); ro.observe(scroller()); ro.observe(host); } catch (e) {} }\nwindow.APDesk = { build: BUILD, reload: function () { load(); }, forget: forgetBrowser, fit: fit };\nstart();\n})();\n\n})();\n";
