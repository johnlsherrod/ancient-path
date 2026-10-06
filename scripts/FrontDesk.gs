/**
 * Ancient Path — Front Desk · build 4
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
 * New build over an old one: paste this whole file over the code, save, run  reread .
 *
 * Settings live on the sheet's Config tab, not in this file.
 */

const FD = {
  BUILD: 4,
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
    Roster:   ['email','name','phone','reach him by','wait list','Before We Meet','account made','seated','After We Talk','here for','referred by','reason (his words)','stage','last activity','notes','key'],
    Inbound:  ['captured','received','source','kind','email','name','summary','open in Gmail','message id','handling'],
    Payments: ['received','amount','from','what for','matched man','open in Stripe','message id','source'],
    Coaching: ['booked','session','name','email','when (Central)','status','open in Calendly','message id'],
    Actions:  ['key','first seen','owner','do this','for','because','link','status','mark done by hand','done at','rule'],
    feed:     [],
    Config:   ['setting','value','what it does']
  }
};

// ───────────────────────────── entry points ─────────────────────────────

function setup() {
  ensureLabel_();
  ensureTabs_();
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
    rebuildStages_(ss, cfg);
    rebuildActions_(ss, cfg);
    writeFeed_(ss, cfg, captured);
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
 * clears Roster, Inbound, Payments and Coaching (the Actions tab keeps its done marks) and runs once.
 */
function reread() {
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  ['Roster', 'Inbound', 'Payments', 'Coaching'].forEach(name => {
    const sh = ss.getSheetByName(name);
    if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, sh.getMaxColumns()).clearContent();
  });
  PropertiesService.getScriptProperties().deleteProperty('lastRun');
  run();
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
    ignoreNames: splitList_(c['ignore these names']).map(s => s.toLowerCase())
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
  const inboundRows = [], payRows = [], coachRows = [];
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
    }

    const t = m.getThread();
    t.addLabel(label);
    if (cfg.archive && n.handling === 'captured') threadsToArchive.set(t.getId(), t);
  });

  append_(inbound, inboundRows);
  if (payRows.length) append_(ss.getSheetByName('Payments'), payRows);
  if (coachRows.length) append_(ss.getSheetByName('Coaching'), coachRows);
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
      n.kind = 'Before We Meet';
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
      n.summary = 'Signed Before We Meet PDF (attached to the email)';
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
      n.summary = course + (paid !== null ? ' · paid $' + paid.toFixed(2) : '');
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
  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    if (!row[H['email']] || isOurs_(cfg, row[H['email']], row[H['name']])) continue; // our own test rows drop off the roster
    ['name', 'here for', 'referred by', 'reason (his words)', 'notes'].forEach(c => { if (H[c] !== undefined && typeof row[H[c]] === 'string') row[H[c]] = decodeEntities_(row[H[c]]); });
    row[H['stage']] = stageOf_(row, H);
    keep.push(row);
  }
  sh.getRange(2, 1, data.length - 1, width).clearContent();
  if (keep.length) sh.getRange(2, 1, keep.length, width).setValues(keep);
}

function stageOf_(row, H) {
  if (row[H['seated']]) return 'Seated';
  if (row[H['Before We Meet']]) return 'Before We Meet in';
  if (row[H['wait list']]) return 'On the wait list';
  if (row[H['account made']]) return 'Account only';
  if (row[H['After We Talk']]) return 'After We Talk in';
  return '';
}

// ───────────────────────────── the Action lane ─────────────────────────────

function rebuildActions_(ss, cfg) {
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

  roster.forEach(r => {
    const who = (r['name'] || r['email']) + '';
    const link = 'https://docs.google.com/spreadsheets/d/' + FD.SHEET_ID + '/edit#gid=0';
    const hereFor = String(r['here for'] || '');
    const oneOnOne = /one-on-one|coaching/i.test(hereFor) && !/breaking free/i.test(hereFor);
    if (r['Before We Meet'] && !r['seated'] && !oneOnOne && hrs(r['Before We Meet']) >= cfg.seatWaitHours) {
      want.push({ key: 'seat:' + r['email'], owner: cfg.seatOwner, do: 'Send the seat email', for: who,
        because: 'Signed Before We Meet ' + ago_(r['Before We Meet']) + ', not yet enrolled', link: link, rule: 'R1' });
    }
    if (r['Before We Meet'] && oneOnOne && !r['seated'] && !hasBooking(r['email'], r['name'])) {
      want.push({ key: 'first:' + r['email'], owner: cfg.coachingOwner, do: 'Book his first session', for: who,
        because: 'Signed Before We Meet for one-on-one coaching ' + ago_(r['Before We Meet']) + '; no session on the calendar yet', link: link, rule: 'R9' });
    }
    if (r['seated'] && !r['Before We Meet']) {
      want.push({ key: 'bwm:' + r['email'], owner: cfg.seatOwner, do: 'Ask him for Before We Meet', for: who,
        because: 'Enrolled ' + ago_(r['seated']) + ' with no Before We Meet on file', link: link, rule: 'R2' });
    }
    if (r['wait list'] && !r['Before We Meet'] && !r['seated'] && hrs(r['wait list']) >= cfg.waitListWaitDays * 24) {
      want.push({ key: 'wl:' + r['email'], owner: cfg.seatOwner, do: 'Reply with the Before We Meet link', for: who,
        because: 'On the wait list ' + ago_(r['wait list']) + ', no Before We Meet yet', link: link, rule: 'R3' });
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
    if (ex[H['status']] !== 'done') { ex[H['status']] = 'done'; ex[H['done at']] = now; }
    out.push(ex);
  });

  out.sort((a, b) => (a[H['status']] === b[H['status']] ? 0 : a[H['status']] === 'open' ? -1 : 1) || (toDate_(b[H['first seen']]) - toDate_(a[H['first seen']])));
  if (data.length > 1) sh.getRange(2, 1, data.length - 1, FD.TABS.Actions.length).clearContent();
  if (out.length) sh.getRange(2, 1, out.length, FD.TABS.Actions.length).setValues(out);
}

// ───────────────────────────── the feed the page reads ─────────────────────────────

function writeFeed_(ss, cfg, captured) {
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

  const feed = {
    generated: now.toISOString(),
    build: FD.BUILD,
    cohort: {
      name: cfg.cohortName,
      firstNight: cfg.firstNight ? cfg.firstNight.toISOString().slice(0, 10) : null,
      roomSize: cfg.roomSize,
      seated: seated,
      openSpots: Math.max(0, cfg.roomSize - seated),
      beforeWeMeetIn: roster.filter(r => r['Before We Meet']).length,
      waitList: roster.filter(r => r['wait list'] && !r['seated']).length,
      accountOnly: roster.filter(r => r['stage'] === 'Account only').length
    },
    roster: roster.map(r => ({
      name: r['name'] || '', email: r['email'], stage: r['stage'], hereFor: r['here for'] || '', referredBy: r['referred by'] || '',
      waitList: iso(r['wait list']), bwm: iso(r['Before We Meet']), account: iso(r['account made']), seated: iso(r['seated']), awt: iso(r['After We Talk']),
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
    coaching: {
      upcoming: ahead.map(r => ({ session: r['session'], name: r['name'], when: r['when (Central)'], at: r.at ? r.at.toISOString() : null, status: r['status'], link: r['open in Calendly'] }))
    },
    lastRun: { read: captured.read, archived: captured.archived }
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
  });
}

function formatDateColumns_() {
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  const fmt = 'mmm d, yyyy h:mm am/pm';
  const cols = {
    Roster: ['wait list', 'Before We Meet', 'account made', 'seated', 'After We Talk', 'last activity'],
    Inbound: ['captured', 'received'], Payments: ['received'], Coaching: ['booked'], Actions: ['first seen', 'done at']
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
  ScriptApp.getProjectTriggers().forEach(t => { if (t.getHandlerFunction() === 'run') ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('run').timeBased().everyMinutes(5).create();
}

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
