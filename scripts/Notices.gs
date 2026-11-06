/**
 * Ancient Path — Front Desk · Notices.gs · build N3 (Nov 3, 2026)
 * N3: one off switch. Config "text notices" (yes/no) — made by noticeSetup as "no"; nothing is sent while it reads anything but yes,
 *     and the Texts tab says so. It moves to "yes" by one word once Twilio shows the campaign Approved. Moves to the platform as it is.
 * Text notices through Twilio. One generic function, sendNotice(email): it says only that something is waiting on the
 * man's page, never what. No course, room or piece is named here.
 *
 * Twilio: Messages API, sent through our Messaging Service (Ancient Path Notices, the 469 number), Basic auth with a
 * Standard API key. Script Properties (never the sheet, never chat):
 *   TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID, TWILIO_KEY_SID, TWILIO_KEY_SECRET   (added by hand)
 *   NOTICE_HOOK_SECRET                                                         (made by noticeSetup, never typed)
 *
 * Ruled Nov 2–3, 2026: at most two texts a day to one man (Central day); none between 9:00 PM and 8:00 AM Central
 * (it waits and goes at 8:00 AM); only to a man whose "text me" is yes on the TextOptIn tab; STOP ends them at once.
 *
 * Sheet tabs this file makes for itself (the Front Desk sheet):
 *   Texts      when (Central) · email · phone (last four) · message id · status · error · note · day
 *   TextOptIn  email · phone · text me · changed · by · stopped by reply     (Settings writes it; STOP/START change it)
 *
 * Install: Code.gs gets ONE line at the top of doPost (see NOTICE_POST_LINE below). Then run noticeSetup once.
 * No deploy-time setting changes: Twilio posts to the web address with ?notice=status&k=<secret> or ?notice=inbound&k=<secret>.
 */

const NOTICE = {
  BUILD: 'N3',
  BODY: 'Ancient Path: something is waiting for you on Your Page.\nancientpathcoaching.com/start\nReply STOP to end these texts, HELP for help.',
  PER_DAY: 2,
  QUIET_FROM: 21,   // 9:00 PM Central
  QUIET_TO: 8,      // 8:00 AM Central
  TABS: {
    Texts: ['when (Central)', 'email', 'phone (last four)', 'message id', 'status', 'error', 'note', 'day'],
    TextOptIn: ['email', 'phone', 'text me', 'changed', 'by', 'stopped by reply']
  },
  COUNTS: ['queued', 'accepted', 'sending', 'sent', 'delivered', 'undelivered'],  // a text that left us counts toward the day
  RANK: { held: 0, queued: 1, accepted: 1, sending: 2, sent: 3, delivered: 4, undelivered: 4, failed: 4 },
  STOP_WORDS: ['STOP', 'STOPALL', 'UNSUBSCRIBE', 'CANCEL', 'END', 'QUIT'],
  START_WORDS: ['START', 'YES', 'UNSTOP'],
  HELP_WORDS: ['HELP', 'INFO']
};
const NOTICE_POST_LINE = "if (e && e.parameter && e.parameter.notice) return noticeHook_(e); // build N1: Twilio status and inbound posts";

// ───────────────────────────── the one function ─────────────────────────────

/**
 * Text one man that something is waiting on his page.
 * @param {string} email  the man's email (his row on TextOptIn)
 * @param {{test?: boolean}} opts  test: true skips only the quiet hours; never the cap, never his "text me".
 * @return {{ok: boolean, status: string, sid?: string, note?: string}}
 */
function sendNotice(email, opts) { return noticeRun_(String(email || '').trim().toLowerCase(), opts || {}, 0); }

function noticeRun_(email, opts, heldRow) {
  const lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    const ss = SpreadsheetApp.openById(FD.SHEET_ID);
    noticeEnsureTabs_(ss);
    const tx = ss.getSheetByName('Texts'), op = ss.getSheetByName('TextOptIn');
    const now = new Date(), today = Utilities.formatDate(now, FD.TZ, 'yyyy-MM-dd'), hour = Number(Utilities.formatDate(now, FD.TZ, 'H'));
    const log = (status, note, sid, err, last4) => noticeLog_(tx, heldRow, [Utilities.formatDate(now, FD.TZ, 'yyyy-MM-dd h:mm a'), email, last4 || '', sid || '', status, err || '', note || '', today]);
    if (!email || email.indexOf('@') < 0) { log('not sent', 'no email'); return { ok: false, status: 'not sent', note: 'no email' }; }

    if (!noticeOn_(ss)) { log('not sent', 'text notices are off (Config: text notices)'); return { ok: false, status: 'not sent', note: 'text notices are off' }; }

    const opt = noticeFindOpt_(op, email);
    if (!opt) { log('not sent', 'no text setting on file'); return { ok: false, status: 'not sent', note: 'no text setting' }; }
    const last4 = String(opt.phone || '').replace(/\D/g, '').slice(-4);
    if (String(opt.textMe).trim().toLowerCase() !== 'yes') { log('not sent', 'text me is off', '', '', last4); return { ok: false, status: 'not sent', note: 'text me is off' }; }
    const to = noticePhone_(opt.phone);
    if (!to) { log('not sent', 'no usable phone number', '', '', last4); return { ok: false, status: 'not sent', note: 'no phone' }; }

    // the day's cap: texts that left us today, Central
    const had = noticeRows_(tx).filter(r => String(r[1]).toLowerCase() === email && noticeDay_(r[7]) === today && NOTICE.COUNTS.indexOf(String(r[4])) >= 0).length;
    if (had >= NOTICE.PER_DAY) { log('not sent', 'two texts already today', '', '', last4); return { ok: false, status: 'not sent', note: 'two today' }; }

    // quiet hours: it waits (one held notice per man; a second request while one waits adds nothing)
    if (!opts.test && (hour >= NOTICE.QUIET_FROM || hour < NOTICE.QUIET_TO)) {
      if (heldRow) return { ok: true, status: 'held', note: 'still quiet hours' };
      const already = noticeRows_(tx).some(r => String(r[1]).toLowerCase() === email && String(r[4]) === 'held');
      if (already) { return { ok: true, status: 'held', note: 'one already waiting' }; }
      log('held', 'waits until 8:00 AM Central', '', '', last4);
      return { ok: true, status: 'held' };
    }

    const p = PropertiesService.getScriptProperties().getProperties();
    const need = ['TWILIO_ACCOUNT_SID', 'TWILIO_SERVICE_SID', 'TWILIO_KEY_SID', 'TWILIO_KEY_SECRET', 'NOTICE_HOOK_SECRET'].filter(k => !p[k]);
    if (need.length) { log('not sent', 'Twilio not set up: missing ' + need.join(', '), '', '', last4); return { ok: false, status: 'not sent', note: 'missing ' + need.join(', ') }; }

    const base = ScriptApp.getService().getUrl();
    const res = UrlFetchApp.fetch('https://api.twilio.com/2010-04-01/Accounts/' + p.TWILIO_ACCOUNT_SID + '/Messages.json', {
      method: 'post',
      headers: { Authorization: 'Basic ' + Utilities.base64Encode(p.TWILIO_KEY_SID + ':' + p.TWILIO_KEY_SECRET) },
      payload: { To: to, MessagingServiceSid: p.TWILIO_SERVICE_SID, Body: NOTICE.BODY, StatusCallback: base + '?notice=status&k=' + encodeURIComponent(p.NOTICE_HOOK_SECRET) },
      muteHttpExceptions: true
    });
    let j = {};
    try { j = JSON.parse(res.getContentText()); } catch (x) { j = {}; }
    const code = res.getResponseCode();
    if (code >= 200 && code < 300 && j.sid) {
      log(j.status || 'queued', '', j.sid, '', last4);
      return { ok: true, status: j.status || 'queued', sid: j.sid };
    }
    const errCode = j.code ? String(j.code) : 'HTTP ' + code;
    if (errCode === '21610') noticeSetOpt_(op, email, 'no', 'Twilio', true);   // he has already stopped them with Twilio
    log('failed', String(j.message || '').slice(0, 160), '', errCode, last4);
    return { ok: false, status: 'failed', note: errCode };
  } finally { lock.releaseLock(); }
}

// ───────────────────────────── Twilio posts back here (doPost line) ─────────────────────────────

function noticeHook_(e) {
  const xml = (s) => ContentService.createTextOutput(s || '<Response></Response>').setMimeType(ContentService.MimeType.XML);
  const p = (e && e.parameter) || {};
  const secret = PropertiesService.getScriptProperties().getProperty('NOTICE_HOOK_SECRET');
  if (!secret || String(p.k || '') !== secret) return xml();   // refused: nothing is read, nothing is written
  const lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    const ss = SpreadsheetApp.openById(FD.SHEET_ID);
    noticeEnsureTabs_(ss);
    const tx = ss.getSheetByName('Texts'), op = ss.getSheetByName('TextOptIn');
    const now = new Date(), stamp = Utilities.formatDate(now, FD.TZ, 'yyyy-MM-dd h:mm a'), today = Utilities.formatDate(now, FD.TZ, 'yyyy-MM-dd');
    if (p.notice === 'status') { noticeStatus_(tx, op, p, stamp, today); return xml(); }
    if (p.notice === 'inbound') { noticeInbound_(tx, op, p, stamp, today); return xml(); }
    return xml();
  } finally { lock.releaseLock(); }
}

function noticeStatus_(tx, op, p, stamp, today) {
  const sid = String(p.MessageSid || p.SmsSid || ''), st = String(p.MessageStatus || p.SmsStatus || '').toLowerCase(), err = String(p.ErrorCode || '');
  if (!sid || !st) return;
  const all = tx.getDataRange().getValues();
  let at = -1;
  for (let i = all.length - 1; i >= 1; i--) if (String(all[i][3]) === sid) { at = i + 1; break; }
  if (at < 0) { tx.appendRow([stamp, '', String(p.To || '').replace(/\D/g, '').slice(-4), sid, st, err, 'status for a text this sheet did not log', today]); return; }
  const cur = String(all[at - 1][4]);
  if ((NOTICE.RANK[st] === undefined ? 0 : NOTICE.RANK[st]) >= (NOTICE.RANK[cur] === undefined ? 0 : NOTICE.RANK[cur])) {
    tx.getRange(at, 5, 1, 2).setValues([[st, err]]);   // status, error
    tx.getRange(at, 1).setValue(stamp);
  }
  if (err === '21610') noticeSetOpt_(op, String(all[at - 1][1]).toLowerCase(), 'no', 'Twilio', true);
}

function noticeInbound_(tx, op, p, stamp, today) {
  const from = String(p.From || ''), body = String(p.Body || '').trim().toUpperCase();
  let kind = String(p.OptOutType || '').toUpperCase();
  if (!kind) kind = NOTICE.STOP_WORDS.indexOf(body) >= 0 ? 'STOP' : NOTICE.START_WORDS.indexOf(body) >= 0 ? 'START' : NOTICE.HELP_WORDS.indexOf(body) >= 0 ? 'HELP' : '';
  const last10 = from.replace(/\D/g, '').slice(-10);
  const data = op.getDataRange().getValues();
  let email = '';
  for (let i = 1; i < data.length; i++) if (last10 && String(data[i][1]).replace(/\D/g, '').slice(-10) === last10) { email = String(data[i][0]).toLowerCase(); break; }
  if (kind === 'STOP' && email) noticeSetOpt_(op, email, 'no', 'reply STOP', true);
  if (kind === 'START' && email) noticeSetOpt_(op, email, 'yes', 'reply START', false);
  tx.appendRow([stamp, email, last10.slice(-4), String(p.MessageSid || p.SmsSid || ''), kind || 'reply', '', kind ? 'he texted ' + kind : 'he replied (not a keyword; not stored)', today]);
}

// ───────────────────────────── the sweep: held texts go at 8:00 AM ─────────────────────────────

/** Every 30 minutes. Sends each held notice once quiet hours are over, and only if he still wants texts and is under the day's cap. */
function noticeSweep() {
  const hour = Number(Utilities.formatDate(new Date(), FD.TZ, 'H'));
  if (hour >= NOTICE.QUIET_FROM || hour < NOTICE.QUIET_TO) return;
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  noticeEnsureTabs_(ss);
  const tx = ss.getSheetByName('Texts');
  const all = tx.getDataRange().getValues();
  for (let i = 1; i < all.length; i++) if (String(all[i][4]) === 'held') noticeRun_(String(all[i][1]).toLowerCase(), {}, i + 1);
}

// ───────────────────────────── keeping the property list short (Google makes it read-only past 50) ─────────────────────────────

/** The keys noticePrune would delete — names only, never a value. Run this first and read the log. */
function noticePruneList() { const k = noticePruneKeys_(); Logger.log(k.length + ' properties would go:\n' + k.join('\n')); return k; }

/** Deletes only dated counters that can never be read again: fd:codes:, fd:asks:, fd:asksent: dated before today; reminderSent: older than 14 days. */
function noticePrune() {
  const k = noticePruneKeys_(), props = PropertiesService.getScriptProperties();
  k.forEach(x => props.deleteProperty(x));
  Logger.log('Deleted ' + k.length + ' properties. ' + Object.keys(props.getProperties()).length + ' remain.');
  return k.length;
}

function noticePruneKeys_() {
  const keys = Object.keys(PropertiesService.getScriptProperties().getProperties());
  const today = Utilities.formatDate(new Date(), FD.TZ, 'yyyy-MM-dd');
  const old = Utilities.formatDate(new Date(Date.now() - 14 * 86400000), FD.TZ, 'yyyy-MM-dd');
  return keys.filter(k => {
    let m = /^fd:(codes|asks|asksent):(\d{4}-\d{2}-\d{2})/.exec(k);
    if (m) return m[2] < today;
    m = /^reminderSent:(\d{4}-\d{2}-\d{2})$/.exec(k);
    return !!m && m[1] < old;
  }).sort();
}

// ───────────────────────────── setup, hooks, test ─────────────────────────────

/** Run once after pasting this file and the doPost line. Makes the tabs, the callback secret and the two timers. Safe to run again. */
function noticeSetup() {
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  noticeEnsureTabs_(ss);
  noticeEnsureSwitch_(ss);
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('NOTICE_HOOK_SECRET')) props.setProperty('NOTICE_HOOK_SECRET', (Utilities.getUuid() + Utilities.getUuid()).replace(/-/g, ''));
  const have = ScriptApp.getProjectTriggers().map(t => t.getHandlerFunction());
  if (have.indexOf('noticeSweep') < 0) ScriptApp.newTrigger('noticeSweep').timeBased().everyMinutes(30).create();
  if (have.indexOf('noticeDaily') < 0) ScriptApp.newTrigger('noticeDaily').timeBased().atHour(3).everyDays(1).inTimezone(FD.TZ).create();
  Logger.log('Notices ' + NOTICE.BUILD + ' is set up. Tabs: Texts, TextOptIn. Config "text notices" is no until you change it to yes. Run noticeShowHooks to read the two Twilio addresses.');
}

function noticeDaily() { noticePrune(); }

/** Logs the two addresses to paste into Twilio. They carry the secret, so they appear only here, in this log. */
function noticeShowHooks() {
  const s = PropertiesService.getScriptProperties().getProperty('NOTICE_HOOK_SECRET');
  if (!s) { Logger.log('Run noticeSetup first.'); return; }
  const base = ScriptApp.getService().getUrl();
  Logger.log('INCOMING MESSAGES (Twilio Messaging Service → Integration → Send a webhook):\n' + base + '?notice=inbound&k=' + s);
  Logger.log('Delivery status is attached to each text by the script itself; nothing to set in Twilio for it.');
}

/** One test send to John's own TextOptIn row (his phone and "text me" = yes must be on that row). Skips quiet hours only. */
function noticeTestSend() {
  const r = sendNotice('john@ancientpathcoaching.com', { test: true });
  Logger.log('Test send: ' + JSON.stringify(r) + '. Read the Texts tab for delivery.');
  return r;
}

// ───────────────────────────── small helpers ─────────────────────────────

/** The off switch: Config "text notices". Anything but yes (or a missing row) is off. */
function noticeOn_(ss) {
  const cf = ss.getSheetByName('Config');
  if (!cf || cf.getLastRow() < 2) return false;
  const rows = cf.getRange(2, 1, cf.getLastRow() - 1, 2).getValues();
  for (let i = 0; i < rows.length; i++) if (String(rows[i][0]).trim().toLowerCase() === 'text notices') return String(rows[i][1]).trim().toLowerCase() === 'yes';
  return false;
}

/** Makes the Config row, set to no, if it is not there. Never changes a value already set. */
function noticeEnsureSwitch_(ss) {
  const cf = ss.getSheetByName('Config');
  if (!cf) return;
  const n = Math.max(cf.getLastRow() - 1, 0), rows = n ? cf.getRange(2, 1, n, 1).getValues() : [];
  if (rows.some(r => String(r[0]).trim().toLowerCase() === 'text notices')) return;
  cf.appendRow(['text notices', 'no', 'yes/no. Texts to men are off until Twilio shows the campaign Approved; then change no to yes. Nothing else needs to change.']);
}

function noticeEnsureTabs_(ss) {
  Object.keys(NOTICE.TABS).forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    const want = NOTICE.TABS[name], have = sh.getRange(1, 1, 1, want.length).getValues()[0];
    want.forEach((h, i) => { if (have[i] !== h) sh.getRange(1, i + 1).setValue(h); });
    if (sh.getFrozenRows() < 1) sh.setFrozenRows(1);
    // keep day, phone and ids as plain text so Sheets never turns them into dates or drops a leading zero.
    // Done once per column (a cheap one-cell check first), over a bounded range, so a slow sheet is not asked twice.
    const text = name === 'Texts' ? [3, 4, 8] : [2];
    text.forEach(c => { if (sh.getRange(2, c).getNumberFormat() !== '@') sh.getRange(2, c, 2000, 1).setNumberFormat('@'); });
  });
}

/** A day cell as yyyy-MM-dd Central, whether Sheets kept it as text or made it a date. */
function noticeDay_(v) { return Object.prototype.toString.call(v) === '[object Date]' ? Utilities.formatDate(v, FD.TZ, 'yyyy-MM-dd') : String(v); }

function noticeRows_(sh) { const d = sh.getDataRange().getValues(); return d.slice(1); }

function noticeLog_(tx, heldRow, row) {
  if (heldRow) tx.getRange(heldRow, 1, 1, row.length).setValues([row]);
  else tx.appendRow(row);
}

function noticeFindOpt_(op, email) {
  const d = op.getDataRange().getValues();
  for (let i = 1; i < d.length; i++) if (String(d[i][0]).trim().toLowerCase() === email) return { row: i + 1, phone: d[i][1], textMe: d[i][2] };
  return null;
}

function noticeSetOpt_(op, email, value, by, byReply) {
  const o = noticeFindOpt_(op, email);
  if (!o) return;
  const stamp = Utilities.formatDate(new Date(), FD.TZ, 'yyyy-MM-dd h:mm a');
  op.getRange(o.row, 3, 1, 3).setValues([[value, stamp, by]]);
  op.getRange(o.row, 6).setValue(byReply ? stamp : '');
}

/** A phone as Twilio wants it (E.164, US numbers), or ''. */
function noticePhone_(v) {
  const d = String(v || '').replace(/\D/g, '');
  if (d.length === 10) return '+1' + d;
  if (d.length === 11 && d.charAt(0) === '1') return '+' + d;
  return '';
}
