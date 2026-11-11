/**
 * Ancient Path — Front Desk · Notices.gs · build N6 · Witness Build 3 (Nov 11, 2026; built on the live N5 (Text Him: Notice and Card) read through the Google Drive connector, so everything in N5 is kept).
 * Ruled in the Witness Build 3 Mockup (https://claude.ai/artifact/T78zh37T9XAsUgWAAPHVws) and ap-text-standard: an invited witness chooses Email or Text right after his yes, and Text asks its own yes.
 *   1. Two new kinds, word for word the registered samples: wconfirm (the witness confirmation, at once, any hour, never counts toward a day) and wweekly (the witness weekly: this week's page is ready, with the page's address; held in quiet hours; at most one a day to one witness). Nothing a man or a witness wrote ever goes in a text (ap-witness rule 9).
 *   2. Two keyed ops on ?notice=api, the same key as Your Page's Settings (Config "text send key"): wstart (his number, his yes, Twilio's number check, then the confirmation) and wsend (the weekly text; the address must be https://www.ancientpathcoaching.com/witness?k=<his token>, nothing else passes). A witness's number lives on TextOptIn like every other; it is never sent to ActiveCampaign or any list (ap-witness growth guard 1).
 *   3. A weekly text that cannot go (he stopped, no number, failing, Twilio unset) answers fallback: true, and the Research reader sends that one page by email. A held weekly text is sent by the same 10-minute sweep at 8:00 AM Central.
 *   Simplicity check. Count: scheduled tasks, connectors, pages, docs, sheet tabs and Config rows unchanged; no new tab (the Texts and TextOptIn tabs carry both kinds). Retires: nothing outside this file; the witness weekly email stays as the fallback. When it breaks: the page falls back to email and the Texts tab says why. Next school: nothing more, the key is the school's own Config row.
 *   Moves to the platform as it is: the two kinds as rows of the record's text table. Rebuilt there: the Twilio calls only.
 *   Counts taken: the file parses (new Function over the whole file); the diff from N5 is the lines named in patch_n6b.py only; the registered texts match ap-text-standard word for word.
 */
/**
 * Ancient Path — Front Desk · Notices.gs · build N5 · Text Him: Notice and Card (Nov 11, 2026; with Front Desk 36.3 and Research reader 13.9). John's ruling, Nov 11, 2026: Text him on the Front Desk no longer sends our team's words as the text. It sends the approved notice ("Ancient Path: something new is waiting on Your Page. https://www.ancientpathcoaching.com/start Reply STOP to end these texts, HELP for help.") through the existing notice path (op send: his yes, quiet hours, one a day), and the words our team wrote land as a card on his Your Page. If he has no text yes, the same card lands and the notice goes by email.
 *   1. textHim_ (desk action text_him, admins only) asks the Research reader's keyed team_card action (key = the Research Engine Config row "week lines key", the one personalLines_ reads; no new key) to land the card and tell him. The reader writes the card first, then runs the notice: by text through sendNotice (this file), by email when he has no text yes or the text cannot go, nothing when he chose "Only on this page", nothing when a notice already went today. It answers how it went and the desk says it in one calm line. Still behind Config "text him" (yes/no; John rules it on).
 *   2. Retired: the "note" kind (our team's words as the text), noticeFrame_, noticeWords_, textCheck_ and the desk action text_check, the two-texts-a-day ceiling (there is one kind of text we start now, the notice, so one a day is the whole rule). A held "team note" row, if one were ever on the Texts tab, is marked not sent by the sweep. The registered samples stay word for word the only texts this file sends: notice, confirmation, HELP, any other reply.
 *   Simplicity check. Count: scheduled tasks, connectors, pages, docs, sheet tabs and Config rows unchanged. Retires: a free-written team text outside what the opt-in screen promises; text_check. When it breaks: the card is written first, so a failed notice never loses the words; the desk says which part went. Next school: nothing more.
 *   Moves to the platform as it is: textHim_ (one call to the record's piece table and the notice). Rebuilt there: the UrlFetch to the Research reader (a call inside one system).
 *   Counts taken: the file parses; the diff from N4 is the lines named in patch_notices.py only.
 */
/**
 * Ancient Path — Front Desk · Notices.gs · build N4 · Text Notices Build 1 (Nov 11, 2026)
 * Text Notices Build 1 = Notices.gs N4 + Front Desk 35 (Code.gs, desk.js 35) + Research reader 13.7 (road.js 11.9). One label, stamped in every file's header, in the Log line each script writes when it is deployed, and in the repo commit.
 *
 * N4 (Nov 11, 2026): Twilio approved the Low Volume Mixed campaign on Nov 10. This file carries the whole of ap-text-standard that a script can carry:
 *   - Every text is word for word one of the registered samples (notice, confirmation, HELP, any other reply); a team note is the frame plus the words our team wrote.
 *   - One notice a day to a man (cards that land the same day are gathered into one); two texts a day is the ceiling on any text we start to him. A confirmation or a reply to his own text never counts.
 *   - Nothing we start goes between 9:00 PM and 8:00 AM Central; it waits and the sweep (every 10 minutes) sends it from 8:00 AM. A reply to his own text goes at once.
 *   - STOP turns his texts off at once (Twilio's opt-out is mirrored on TextOptIn); START turns them on; HELP gets the registered HELP text; any other reply lands on the Actions tab as a card and gets one automatic answer a day.
 *   - Every send, delivery status, failure, STOP, START, HELP and reply is a row on the Texts tab.
 *   - Settings (Your Page) reaches this file through one keyed call: ?notice=api, key = Research Engine Config "text send key" (made by noticeSetup, never typed).
 *   - noticeSetup checks, before anything is switched on, that (469) 557-5502 is in the notices Messaging Service's sender pool, adds it through the API if it is not, and points the service's incoming-message address at this script. The answer is one line in Config "text sender". Nobody goes into the Twilio Console.
 *   - Save our number: ?file=ancient-path.vcf serves a contact card named Ancient Path (469) 557-5502 and the site (ContentService, MimeType VCARD).
 *   - Text him (desk): textCheck_ and textHim_ send the words our team wrote as the text, framed by the standard; off until Config "text him" says yes (ruled to ship off: a free-written team text is outside what the opt-in screen promises).
 * Moves to the platform as it is: a read and write of the record's tables (person, text, setting). Rebuilt there: the Twilio calls only.
 *
 * Twilio: Messages API through the notices Messaging Service, Basic auth with a Standard API key. Script Properties (never the sheet, never chat):
 *   TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID, TWILIO_KEY_SID, TWILIO_KEY_SECRET   (already set)
 *   NOTICE_HOOK_SECRET                                                         (made by noticeSetup)
 * Sheet tabs this file makes for itself (the Front Desk sheet):
 *   Texts      when (Central) · email · phone (last four) · message id · status · error · note · day
 *   TextOptIn  email · phone · text me · changed · by · stopped by reply
 * Install: Code.gs carries the two hook lines (NOTICE_POST_LINE in doPost, NOTICE_GET_LINE in doGet). Then run noticeSetup once.
 */

const NOTICE = {
  BUILD: 'N6',
  LABEL: 'Witness Build 3',
  SENDER: '+14695575502',
  SENDER_SHOWN: '(469) 557-5502',
  SERVICE: 'MGa52ac58544f99799e55cf4788c7906e9',
  CAMPAIGN: 'CM16447a1d485fa084dbaf06eca12a242e',
  BRAND: 'BN70aff39096ff0d5fa260718f2bae236b',
  SITE: 'https://www.ancientpathcoaching.com',
  STOPLINE: 'Reply STOP to end these texts, HELP for help.',
  NOTICES_PER_DAY: 1,   // ap-text-standard and the opt-in screen the carriers saw: "at most one a day"
  QUIET_FROM: 21,       // 9:00 PM Central
  QUIET_TO: 8,          // 8:00 AM Central
  TEXTS: {
    notice: 'Ancient Path: something new is waiting on Your Page. https://www.ancientpathcoaching.com/start Reply STOP to end these texts, HELP for help.',
    confirm: 'Ancient Path: texts are on. A text when something new lands on Your Page or before your room meets, at most one a day. Message and data rates may apply. Reply STOP to end these texts, HELP for help.',
    help: 'Ancient Path: notices from Ancient Path Biblical Coaching. For help, write to us at https://www.ancientpathcoaching.com/contact Reply STOP to end these texts.',
    wconfirm: 'Ancient Path: texts are on. A text when a page is ready to read, at most one a day. Message and data rates may apply. Reply STOP to end these texts, HELP for help.',
    wweekly: "Ancient Path: this week's page is ready to read. {link} Reply STOP to end these texts, HELP for help.",
    other: "Ancient Path: we read replies during the day. If it can't wait, call 214-736-1024. If you are in danger, call 911, or call or text 988."
  },
  TABS: {
    Texts: ['when (Central)', 'email', 'phone (last four)', 'message id', 'status', 'error', 'note', 'day'],
    TextOptIn: ['email', 'phone', 'text me', 'changed', 'by', 'stopped by reply']
  },
  KINDS: ['confirm', 'wconfirm', 'wweekly'],  // anything else is a notice
  WITNESS_LINK: /^https:\/\/www\.ancientpathcoaching\.com\/witness\?k=[A-Za-z0-9]{32,128}$/,
  COUNTS: ['queued', 'accepted', 'sending', 'sent', 'delivered', 'undelivered'],  // a text that left us counts toward the day
  FAILED: ['failed', 'undelivered'],
  RANK: { held: 0, queued: 1, accepted: 1, sending: 2, sent: 3, delivered: 4, undelivered: 4, failed: 4 },
  STOP_WORDS: ['STOP', 'STOPALL', 'UNSUBSCRIBE', 'CANCEL', 'END', 'QUIT'],
  START_WORDS: ['START', 'YES', 'UNSTOP'],
  HELP_WORDS: ['HELP', 'INFO']
};
const NOTICE_CARD_MAX = 600; // the words on the card (the Research reader refuses more)
const NOTICE_POST_LINE = "if (e && e.parameter && e.parameter.notice) return noticeHook_(e); // Text Notices Build 1: Twilio status and inbound posts, and Your Page's keyed call";
const NOTICE_GET_LINE = "if (e && e.parameter && e.parameter.file === 'ancient-path.vcf') return noticeCard_(); // Text Notices Build 1: Save our number";

/** The clock, so a test can set it. Production: now. */
function noticeNow_() { return new Date(); }

// ───────────────────────────── the one function ─────────────────────────────

/**
 * Text one man.
 * @param {string} email  the man's email (his row on TextOptIn)
 * @param {{kind?: 'notice'|'confirm'|'wconfirm'|'wweekly', link?: string, test?: boolean}} opts
 *   notice (default): something new is waiting on his page; held in quiet hours; one a day.
 *   confirm: the text after his yes; goes at once, any hour, and never counts toward a day.
 *   wconfirm: the witness's confirmation after his own yes to texts; goes at once, any hour, and never counts toward a day.
 *   wweekly: the witness's weekly text, with the address of his page (opts.link); held in quiet hours; one a day to one witness.
 *   test: skips only the quiet hours; never the caps, never his "text me".
 * @return {{ok: boolean, status: string, sid?: string, note?: string, fallback?: boolean}}
 *   fallback true = he cannot be texted right now (off, stopped, no number, the send failed), so the caller sends this one notice by email.
 */
function sendNotice(email, opts) { return noticeRun_(String(email || '').trim().toLowerCase(), opts || {}, 0); }

function noticeRun_(email, opts, heldRow) {
  const lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    const ss = SpreadsheetApp.openById(FD.SHEET_ID);
    noticeEnsureTabs_(ss);
    const tx = ss.getSheetByName('Texts'), op = ss.getSheetByName('TextOptIn');
    const now = noticeNow_(), today = Utilities.formatDate(now, FD.TZ, 'yyyy-MM-dd'), hour = Number(Utilities.formatDate(now, FD.TZ, 'H'));
    const kind = NOTICE.KINDS.indexOf(opts.kind) >= 0 ? opts.kind : 'notice';
    const isConfirm = kind === 'confirm' || kind === 'wconfirm';   // goes at once, any hour, never counts toward a day
    const link = kind === 'wweekly' ? noticeWitnessLink_(opts.link) : '';
    const stampNow = Utilities.formatDate(now, FD.TZ, 'yyyy-MM-dd h:mm a');
    const log = (status, detail, sid, err, last4) => {
      const note = kind === 'wweekly' ? 'witness weekly|' + link + (detail ? ' · ' + detail : '') : (kind === 'confirm' ? 'confirmation' : kind === 'wconfirm' ? 'witness confirmation' : 'notice') + (detail ? ' · ' + detail : '');
      noticeLog_(tx, heldRow, [stampNow, email, last4 || '', sid || '', status, err || '', note, today]);
    };
    const no = (detail, last4, fallback) => { log('not sent', detail, '', '', last4); return { ok: false, status: 'not sent', note: detail, fallback: !!fallback }; };
    if (!email || email.indexOf('@') < 0) return no('no email', '', false);
    if (kind === 'wweekly' && !link) return no('no usable page address', '', false);
    if (!noticeOn_(ss)) return no('text notices are off (Config: text notices)', '', true);

    const opt = noticeFindOpt_(op, email);
    if (!opt) return no('no text setting on file', '', true);
    const last4 = String(opt.phone || '').replace(/\D/g, '').slice(-4);
    if (String(opt.textMe).trim().toLowerCase() !== 'yes') return no('text me is off', last4, true);
    const to = noticePhone_(opt.phone);
    if (!to) return no('no usable phone number', last4, true);

    // the day's caps: texts that left us today, Central
    if (!isConfirm) {
      const mine = noticeRows_(tx).filter(r => String(r[1]).toLowerCase() === email && noticeDay_(r[7]) === today && NOTICE.COUNTS.indexOf(String(r[4])) >= 0);
      if (kind === 'wweekly') { if (mine.some(r => noticeKindOf_(r[6]) === 'wweekly')) return no('one page text already today', last4, false); }   // a witness: one page text a day
      else if (mine.some(r => noticeKindOf_(r[6]) === 'notice')) return no('one notice already today', last4, false);
    }

    // quiet hours: it waits (one held text of a kind per man; a second request while one waits adds nothing)
    if (!isConfirm && !opts.test && (hour >= NOTICE.QUIET_FROM || hour < NOTICE.QUIET_TO)) {
      if (heldRow) return { ok: true, status: 'held', note: 'still quiet hours' };
      const already = noticeRows_(tx).some(r => String(r[1]).toLowerCase() === email && String(r[4]) === 'held' && noticeKindOf_(r[6]) === kind);
      if (already) return { ok: true, status: 'held', note: 'one already waiting' };
      log('held', 'waits until 8:00 AM Central', '', '', last4);
      return { ok: true, status: 'held' };
    }

    const p = PropertiesService.getScriptProperties().getProperties();
    const need = ['TWILIO_ACCOUNT_SID', 'TWILIO_SERVICE_SID', 'TWILIO_KEY_SID', 'TWILIO_KEY_SECRET', 'NOTICE_HOOK_SECRET'].filter(k => !p[k]);
    if (need.length) return no('Twilio not set up: missing ' + need.join(', '), last4, true);

    const body = kind === 'confirm' ? NOTICE.TEXTS.confirm : kind === 'wconfirm' ? NOTICE.TEXTS.wconfirm : kind === 'wweekly' ? NOTICE.TEXTS.wweekly.replace('{link}', link) : NOTICE.TEXTS.notice;
    const res = UrlFetchApp.fetch('https://api.twilio.com/2010-04-01/Accounts/' + p.TWILIO_ACCOUNT_SID + '/Messages.json', {
      method: 'post',
      headers: { Authorization: 'Basic ' + Utilities.base64Encode(p.TWILIO_KEY_SID + ':' + p.TWILIO_KEY_SECRET) },
      payload: { To: to, MessagingServiceSid: p.TWILIO_SERVICE_SID, Body: body, StatusCallback: ScriptApp.getService().getUrl() + '?notice=status&k=' + encodeURIComponent(p.NOTICE_HOOK_SECRET) },
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
    const stopped = errCode === '21610';
    if (stopped) noticeSetOpt_(op, email, 'no', 'Twilio', true);   // he has already stopped them with Twilio
    log('failed', String(j.message || '').slice(0, 160), '', errCode, last4);
    return { ok: false, status: 'failed', note: errCode, stopped: stopped, fallback: kind === 'notice' || kind === 'wweekly' };
  } finally { lock.releaseLock(); }
}

/** The address a witness's weekly text may carry: the site's /witness page with his own token, nothing else (ap-text-standard: a full ancientpathcoaching.com address, never a shortener or a script address). */
function noticeWitnessLink_(l) { const s = String(l == null ? '' : l).trim(); return NOTICE.WITNESS_LINK.test(s) ? s : ''; }

function noticeKindOf_(note) {
  const n = String(note || '').toLowerCase();
  if (n.indexOf('team note') === 0) return 'note';
  if (n.indexOf('witness weekly') === 0) return 'wweekly';
  if (n.indexOf('witness confirmation') === 0) return 'wconfirm';
  if (n.indexOf('confirmation') === 0) return 'confirm';
  if (n.indexOf('notice') === 0) return 'notice';
  if (n.indexOf('auto') === 0) return 'auto';
  return '';
}

// ───────────────────────────── Twilio posts back here, and Your Page's keyed call ─────────────────────────────

function noticeHook_(e) {
  const xml = (s) => ContentService.createTextOutput(s || '<Response></Response>').setMimeType(ContentService.MimeType.XML);
  const p = (e && e.parameter) || {};
  if (p.notice === 'api') return noticeApi_(e);   // before the lock: noticeRun_ takes it itself
  const secret = PropertiesService.getScriptProperties().getProperty('NOTICE_HOOK_SECRET');
  if (!secret || String(p.k || '') !== secret) return xml();   // refused: nothing is read, nothing is written
  const lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    const ss = SpreadsheetApp.openById(FD.SHEET_ID);
    noticeEnsureTabs_(ss);
    const tx = ss.getSheetByName('Texts'), op = ss.getSheetByName('TextOptIn');
    const now = noticeNow_(), stamp = Utilities.formatDate(now, FD.TZ, 'yyyy-MM-dd h:mm a'), today = Utilities.formatDate(now, FD.TZ, 'yyyy-MM-dd');
    if (p.notice === 'status') { noticeStatus_(tx, op, p, stamp, today); return xml(); }
    if (p.notice === 'inbound') return xml(noticeInbound_(ss, tx, op, p, stamp, today));
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

/** An incoming text. Returns the TwiML for the one reply that goes at once (HELP, or the once-a-day answer to anything else), or ''. */
function noticeInbound_(ss, tx, op, p, stamp, today) {
  const from = String(p.From || ''), raw = String(p.Body || '').trim(), body = raw.toUpperCase();
  let kind = String(p.OptOutType || '').toUpperCase();
  if (!kind) kind = NOTICE.STOP_WORDS.indexOf(body) >= 0 ? 'STOP' : NOTICE.START_WORDS.indexOf(body) >= 0 ? 'START' : NOTICE.HELP_WORDS.indexOf(body) >= 0 ? 'HELP' : '';
  const last10 = from.replace(/\D/g, '').slice(-10);
  const data = op.getDataRange().getValues();
  let email = '';
  for (let i = 1; i < data.length; i++) if (last10 && String(data[i][1]).replace(/\D/g, '').slice(-10) === last10) { email = String(data[i][0]).toLowerCase(); break; }
  const sid = String(p.MessageSid || p.SmsSid || '');
  if (kind === 'STOP') { if (email) noticeSetOpt_(op, email, 'no', 'reply STOP', true); tx.appendRow([stamp, email, last10.slice(-4), sid, 'STOP', '', 'he texted STOP; texts are off at once', today]); return ''; }
  if (kind === 'START') { if (email) noticeSetOpt_(op, email, 'yes', 'reply START', false); tx.appendRow([stamp, email, last10.slice(-4), sid, 'START', '', 'he texted START', today]); return ''; }
  if (kind === 'HELP') { tx.appendRow([stamp, email, last10.slice(-4), sid, 'HELP', '', 'he texted HELP; the registered HELP text went back', today]); return noticeTwiml_(NOTICE.TEXTS.help); }
  // any other reply: a card for our team, and one automatic answer a day
  tx.appendRow([stamp, email, last10.slice(-4), sid, 'reply', '', 'he replied; the card is on the Actions tab', today]);
  noticeReplyCard_(ss, email, last10, raw, stamp, today);
  const had = noticeRows_(tx).some(r => noticeDay_(r[7]) === today && noticeKindOf_(r[6]) === 'auto' && String(r[2]) === last10.slice(-4));
  if (had) return '';
  tx.appendRow([stamp, email, last10.slice(-4), '', 'sent', '', 'auto answer (once a day)', today]);
  return noticeTwiml_(NOTICE.TEXTS.other);
}

function noticeTwiml_(s) { return '<Response><Message>' + String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</Message></Response>'; }

/** A card for our team: what he said, and who. Key textreply:<who>:<day> (not script-owned, so it stays until someone closes it; safeguarding protocol governs what our team does next). */
function noticeReplyCard_(ss, email, last10, raw, stamp, today) {
  try {
    const ac = ss.getSheetByName('Actions'); if (!ac) return;
    const who = email || ('a number ending ' + last10.slice(-4));
    const key = 'textreply:' + (email || last10) + ':' + today;
    const keys = ac.getLastRow() > 1 ? ac.getRange(2, 1, ac.getLastRow() - 1, 1).getValues() : [];
    if (keys.some(r => String(r[0]) === key)) return;
    ac.appendRow([key, stamp, 'John', 'Read his text and answer him', who, 'He replied to our text: ' + raw.slice(0, 300) + ' — read it today; if it is a hand raised, follow the safeguarding protocol.', '', 'open', false, '', 'R26']);
  } catch (x) {}
}

// ───────────────────────────── Your Page's keyed call (Settings) ─────────────────────────────

/** POST ?notice=api, body { key, op, email, phone?, link?, by? }. key = Research Engine Config "text send key". ops: start · off · state · send · wstart · wsend (the last two are a witness's: his own yes, and his weekly text). */
function noticeApi_(e) {
  const out = (o) => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
  let b = {};
  try { b = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (x) { b = {}; }
  const key = noticeSendKey_();
  if (key.length < 24 || String(b.key || '') !== key) return out({ ok: false, error: 'no_key' });
  const email = String(b.email || '').trim().toLowerCase();
  if (!email || email.indexOf('@') < 0) return out({ ok: false, error: 'no_email' });
  try {
    if (b.op === 'state') return out(Object.assign({ ok: true }, noticeState_(SpreadsheetApp.openById(FD.SHEET_ID), email)));
    if (b.op === 'off') { noticeOptWrite_(email, null, 'no', b.by === 'witness' ? 'Witness page' : 'Settings', false); return out({ ok: true }); }
    if (b.op === 'send') { const r = sendNotice(email, { kind: 'notice' }); return out(r); }
    if (b.op === 'start') return out(noticeStart_(email, b.phone));
    if (b.op === 'wstart') return out(noticeStart_(email, b.phone, 'wconfirm'));
    if (b.op === 'wsend') return out(sendNotice(email, { kind: 'wweekly', link: b.link }));
    return out({ ok: false, error: 'bad_op' });
  } catch (x) { return out({ ok: false, error: 'failed' }); }
}

/** Start Texts: his own number, his own yes. A landline is caught by Twilio's number check; then the yes is written and one confirmation goes at once. */
function noticeStart_(email, phone, kind) {
  const to = noticePhone_(phone);
  if (!to) return { ok: false, error: 'bad_phone' };
  const look = noticeLookup_(to);
  if (!look.ok) return { ok: false, error: look.error };
  const wit = kind === 'wconfirm';   // a witness's own yes, on his own page
  noticeOptWrite_(email, noticeShow_(to), 'yes', wit ? 'Witness page' : 'Settings', false);
  const r = noticeRun_(email, { kind: wit ? 'wconfirm' : 'confirm' }, 0);
  const st = noticeState_(SpreadsheetApp.openById(FD.SHEET_ID), email);
  if (!r.ok && r.stopped) return Object.assign({ ok: false, error: 'stopped' }, st);
  if (!r.ok) return Object.assign({ ok: false, error: 'failed', why: r.note }, st);
  return Object.assign({ ok: true }, st);
}

function noticeOptWrite_(email, phone, value, by, byReply) {
  const lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    const ss = SpreadsheetApp.openById(FD.SHEET_ID);
    noticeEnsureTabs_(ss);
    const op = ss.getSheetByName('TextOptIn');
    let o = noticeFindOpt_(op, email);
    if (!o) { if (value !== 'yes') return; op.appendRow([email, phone || '', '', '', '', '']); o = noticeFindOpt_(op, email); }
    if (phone) op.getRange(o.row, 2).setValue(phone);
    noticeSetOpt_(op, email, value, by, byReply);
  } finally { lock.releaseLock(); }
}

/** What Settings and the desk need to know about one man's texts. */
function noticeState_(ss, email) {
  const op = ss.getSheetByName('TextOptIn'), tx = ss.getSheetByName('Texts');
  const o = op ? noticeFindOpt_(op, email) : null;
  const out = { textMe: '', phone: '', last4: '', stopped: false, failing: false, on: false };
  if (!o) return out;
  const row = op.getRange(o.row, 1, 1, 6).getValues()[0];
  out.textMe = String(row[2]).trim().toLowerCase();
  out.phone = String(row[1] || '');
  out.last4 = out.phone.replace(/\D/g, '').slice(-4);
  out.stopped = out.textMe !== 'yes' && !!String(row[5] || '').trim();
  const mine = tx ? noticeRows_(tx).filter(r => String(r[1]).toLowerCase() === email && (NOTICE.COUNTS.concat(NOTICE.FAILED)).indexOf(String(r[4])) >= 0) : [];
  const last3 = mine.slice(-3);
  out.failing = last3.length === 3 && last3.every(r => NOTICE.FAILED.indexOf(String(r[4])) >= 0);
  out.on = out.textMe === 'yes' && !out.failing;
  return out;
}

/** Twilio's number check (Lookup, line type). A landline cannot get texts. If the check itself cannot run, the delivery status catches it later. */
function noticeLookup_(to) {
  try {
    const p = PropertiesService.getScriptProperties().getProperties();
    if (!p.TWILIO_KEY_SID || !p.TWILIO_KEY_SECRET) return { ok: true, skipped: true };
    const res = UrlFetchApp.fetch('https://lookups.twilio.com/v2/PhoneNumbers/' + encodeURIComponent(to) + '?Fields=line_type_intelligence', { headers: { Authorization: 'Basic ' + Utilities.base64Encode(p.TWILIO_KEY_SID + ':' + p.TWILIO_KEY_SECRET) }, muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) return { ok: true, skipped: true };
    const j = JSON.parse(res.getContentText());
    if (j.valid === false) return { ok: false, error: 'bad_phone' };
    const t = j.line_type_intelligence && j.line_type_intelligence.type;
    if (t === 'landline') return { ok: false, error: 'landline' };
    return { ok: true };
  } catch (x) { return { ok: true, skipped: true }; }
}

function noticeSendKey_() {
  try {
    const d = SpreadsheetApp.openById(RESEARCH_SHEET_ID_).getSheetByName('Config').getDataRange().getValues();
    for (let i = 1; i < d.length; i++) if (String(d[i][0]).trim() === 'text send key') return String(d[i][1] || '').trim();
  } catch (x) {}
  return '';
}

// ───────────────────────────── the card, and Text him ─────────────────────────────

/** Save our number: a contact card named Ancient Path with the number and the site. He names it himself. */
function noticeCard_() {
  const v = ['BEGIN:VCARD', 'VERSION:3.0', 'FN:Ancient Path', 'N:Path;Ancient;;;', 'ORG:Ancient Path', 'TEL;TYPE=CELL:' + NOTICE.SENDER, 'URL:' + NOTICE.SITE, 'END:VCARD', ''].join('\r\n');
  return ContentService.createTextOutput(v).setMimeType(ContentService.MimeType.VCARD);
}

/** desk action text_him (admins only). John's ruling, Nov 11, 2026: Text him lands the words our team wrote as a card on his Your Page and sends the approved notice (by text through sendNotice, or by email when he has no text yes). The Research reader does both in one keyed call, team_card; the card is written first.
 *  Answers { ok: true, sent: true, notice } where notice is text · held · email · page · cap · off · failed, or { ok: true, sent: false, why } where why is off (Config "text him") · no_email · bad_words · no_page (he has no Your Page yet) · fail (the reader could not be reached). */
function textHim_(who, b) {
  psAdmin_(who);
  const email = String(b.email || '').trim().toLowerCase();
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  if (!noticeFlag_(ss, 'text him')) return { ok: true, sent: false, why: 'off' };
  if (!email || email.indexOf('@') < 0) return { ok: true, sent: false, why: 'no_email' };
  const words = String(b.words == null ? '' : b.words).replace(/\r/g, '').trim();
  if (!words || words.length > NOTICE_CARD_MAX) return { ok: true, sent: false, why: 'bad_words' };
  const key = noticeReaderKey_();
  if (key.length < 24) return { ok: true, sent: false, why: 'fail' };
  let j = null;
  try {
    const res = UrlFetchApp.fetch(RR_EXEC_, { method: 'post', contentType: 'application/json', payload: JSON.stringify({ action: 'team_card', key: key, email: email, words: words, by: String((who && (who.name || who.email)) || 'our team') }), muteHttpExceptions: true, followRedirects: true });
    j = JSON.parse(res.getContentText());
  } catch (x) { j = null; }
  if (!j || !j.ok) {
    const err = j && j.error ? String(j.error) : '';
    return { ok: true, sent: false, why: (err === 'no_page' || err === 'bad_words' || err === 'no_email') ? err : 'fail' };
  }
  return { ok: true, sent: true, notice: String(j.notice || '') };
}

/** The key the Research reader checks on team_card: the Research Engine Config row "week lines key" (the row personalLines_ reads too). */
function noticeReaderKey_() {
  try {
    const d = SpreadsheetApp.openById(RESEARCH_SHEET_ID_).getSheetByName('Config').getDataRange().getValues();
    for (let i = 1; i < d.length; i++) if (String(d[i][0]).trim() === 'week lines key') return String(d[i][1] || '').trim();
  } catch (x) {}
  return '';
}

// ───────────────────────────── the sweep: held texts go at 8:00 AM ─────────────────────────────

/** Every 10 minutes. Sends each held text once quiet hours are over, and only if he still wants texts and is under the day's caps. */
function noticeSweep() {
  const hour = Number(Utilities.formatDate(noticeNow_(), FD.TZ, 'H'));
  if (hour >= NOTICE.QUIET_FROM || hour < NOTICE.QUIET_TO) return;
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  noticeEnsureTabs_(ss);
  const tx = ss.getSheetByName('Texts');
  const all = tx.getDataRange().getValues();
  for (let i = 1; i < all.length; i++) {
    if (String(all[i][4]) !== 'held') continue;
    const note = String(all[i][6]), k = noticeKindOf_(note);
    if (k === 'note') { tx.getRange(i + 1, 5, 1, 2).setValues([['not sent', 'retired: our team\'s words go as a card on his page (N5)']]); continue; }   // the old free-written text is never sent
    if (k === 'wweekly') { const m = /^witness weekly\|(\S+)/.exec(note); noticeRun_(String(all[i][1]).toLowerCase(), { kind: 'wweekly', link: m ? m[1] : '' }, i + 1); }
    else noticeRun_(String(all[i][1]).toLowerCase(), { kind: 'notice' }, i + 1);
  }
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

// ───────────────────────────── setup, the sender check, hooks, test ─────────────────────────────

/**
 * Run once after pasting this file (safe to run again). In this order, and it stops where something is wrong:
 *  1. the tabs and the Config rows; the callback secret; the key Your Page uses ("text send key" on the Research Engine Config);
 *  2. the sender check: (469) 557-5502 is in the notices Messaging Service's pool (added through the API if not), and the service's incoming-message address points at this script;
 *  3. only if that passed: Config "text notices" moves from no to yes (the campaign was approved Nov 10, 2026);
 *  4. the two timers (the sweep every 10 minutes, the daily prune).
 * The answer is one line in Config "text sender" and in the log.
 */
function noticeSetup() {
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  noticeEnsureTabs_(ss);
  noticeEnsureSwitch_(ss);
  noticeConfigSet_(ss, 'text him', 'no', 'yes/no. Text him on the Front Desk lands the words our team writes as a card on his Your Page and sends the approved notice (text if he has texts on, else email). Ruled by John Nov 11, 2026; John rules it on.', true);
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('NOTICE_HOOK_SECRET')) props.setProperty('NOTICE_HOOK_SECRET', (Utilities.getUuid() + Utilities.getUuid()).replace(/-/g, ''));
  if (noticeSendKey_().length < 24) noticeConfigSet_(SpreadsheetApp.openById(RESEARCH_SHEET_ID_), 'text send key', (Utilities.getUuid() + Utilities.getUuid()).replace(/-/g, ''), 'Text Notices Build 1: the key Your Page (the Research reader) uses to ask the Front Desk script to start, stop or send a text. Made by noticeSetup; never typed, never shared.', true);
  const check = noticeSenderCheck();
  if (check.ok && !noticeOn_(ss)) { noticeConfigSet_(ss, 'text notices', 'yes', 'yes/no. Turned on by noticeSetup, Nov 11, 2026, after the sender check passed (campaign approved Nov 10).', false); check.line += ' Text notices: yes.'; noticeConfigSet_(ss, 'text sender', check.line, 'noticeSenderCheck, written by the script', false); }
  const have = ScriptApp.getProjectTriggers();
  have.filter(t => t.getHandlerFunction() === 'noticeSweep').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('noticeSweep').timeBased().everyMinutes(10).create();
  if (!have.some(t => t.getHandlerFunction() === 'noticeDaily')) ScriptApp.newTrigger('noticeDaily').timeBased().atHour(3).everyDays(1).inTimezone(FD.TZ).create();
  Logger.log('Notices ' + NOTICE.BUILD + ' (' + NOTICE.LABEL + '): ' + check.line);
  try { relLog_(SpreadsheetApp.openById(RESEARCH_SHEET_ID_), 'text sender', NOTICE.LABEL + ' · Notices ' + NOTICE.BUILD + ' · ' + check.line); } catch (x) {}
  return check;
}

function noticeDaily() { noticePrune(); try { noticeSenderCheck(); } catch (x) {} }

/**
 * Is (469) 557-5502 in the notices Messaging Service's sender pool? If not, add it through the API and read it back. Also points the service's incoming-message address at this script,
 * and reads the campaign's status. Writes one line to Config "text sender". Never reads or writes a secret to the sheet.
 * @return {{ok: boolean, line: string}}
 */
function noticeSenderCheck() {
  const ss = SpreadsheetApp.openById(FD.SHEET_ID);
  const done = (ok, line) => { const stamp = Utilities.formatDate(noticeNow_(), FD.TZ, 'MMM d, h:mm a'); line = line + ' (' + stamp + ' Central)'; try { noticeConfigSet_(ss, 'text sender', line, 'noticeSenderCheck, written by the script', false); } catch (x) {} return { ok: ok, line: line }; };
  const p = PropertiesService.getScriptProperties().getProperties();
  const need = ['TWILIO_ACCOUNT_SID', 'TWILIO_SERVICE_SID', 'TWILIO_KEY_SID', 'TWILIO_KEY_SECRET'].filter(k => !p[k]);
  if (need.length) return done(false, 'Not checked: Script Properties is missing ' + need.join(', ') + '.');
  if (p.TWILIO_SERVICE_SID !== NOTICE.SERVICE) return done(false, 'Not checked: TWILIO_SERVICE_SID is not the notices Messaging Service (' + NOTICE.SERVICE + ').');
  const auth = { Authorization: 'Basic ' + Utilities.base64Encode(p.TWILIO_KEY_SID + ':' + p.TWILIO_KEY_SECRET) };
  const get = (u) => { const r = UrlFetchApp.fetch(u, { headers: auth, muteHttpExceptions: true }); let j = {}; try { j = JSON.parse(r.getContentText()); } catch (x) {} return { code: r.getResponseCode(), j: j }; };
  const post = (u, payload) => { const r = UrlFetchApp.fetch(u, { method: 'post', headers: auth, payload: payload, muteHttpExceptions: true }); let j = {}; try { j = JSON.parse(r.getContentText()); } catch (x) {} return { code: r.getResponseCode(), j: j }; };
  const svc = 'https://messaging.twilio.com/v1/Services/' + NOTICE.SERVICE;
  const sv = get(svc);
  if (sv.code !== 200) return done(false, 'Twilio would not show the Messaging Service (HTTP ' + sv.code + (sv.j && sv.j.code ? ', ' + sv.j.code : '') + '). The API key may not be the Standard key for this account.');
  const inPool = () => { const g = get(svc + '/PhoneNumbers?PageSize=50'); return g.code === 200 && (g.j.phone_numbers || []).some(n => n.phone_number === NOTICE.SENDER); };
  let said = '';
  if (inPool()) said = NOTICE.SENDER_SHOWN + ' is in the notices sender pool.';
  else {
    const f = get('https://api.twilio.com/2010-04-01/Accounts/' + p.TWILIO_ACCOUNT_SID + '/IncomingPhoneNumbers.json?PhoneNumber=' + encodeURIComponent(NOTICE.SENDER));
    const pn = f.code === 200 && f.j.incoming_phone_numbers && f.j.incoming_phone_numbers[0];
    if (!pn) return done(false, NOTICE.SENDER_SHOWN + ' is not in the pool and is not a number on this Twilio account (HTTP ' + f.code + ').');
    const a = post(svc + '/PhoneNumbers', { PhoneNumberSid: pn.sid });
    if (a.code >= 300 && !inPool()) return done(false, NOTICE.SENDER_SHOWN + ' was not in the pool and Twilio refused to add it (' + (a.j.code || 'HTTP ' + a.code) + ': ' + String(a.j.message || '').slice(0, 120) + ').');
    if (!inPool()) return done(false, NOTICE.SENDER_SHOWN + ' was added but is not showing in the pool yet.');
    said = NOTICE.SENDER_SHOWN + ' was not in the notices sender pool; it was added through the API and read back.';
  }
  // incoming messages come here (STOP, START, HELP and every other reply)
  const secret = p.NOTICE_HOOK_SECRET || PropertiesService.getScriptProperties().getProperty('NOTICE_HOOK_SECRET');
  if (secret) {
    const want = ScriptApp.getService().getUrl() + '?notice=inbound&k=' + secret;
    if (sv.j.inbound_request_url !== want) { const u = post(svc, { InboundRequestUrl: want, InboundMethod: 'POST' }); said += u.code < 300 ? ' Incoming replies now come to this script.' : ' Twilio would not set the incoming-message address (' + (u.j.code || 'HTTP ' + u.code) + ').'; }
    else said += ' Incoming replies already come to this script.';
  }
  // the campaign, read only
  try { const c = get(svc + '/Compliance/Usa2p'); const rec = c.code === 200 && (c.j.compliance || []).filter(x => x.campaign_id === NOTICE.CAMPAIGN)[0]; if (rec && rec.campaign_status) said += ' Campaign: ' + rec.campaign_status + '.'; } catch (x) {}
  return done(true, said);
}

/** Logs the two Twilio addresses (they carry the secret, so they appear only in this log). Kept for the record; noticeSetup points Twilio at this script by itself. */
function noticeShowHooks() {
  const s = PropertiesService.getScriptProperties().getProperty('NOTICE_HOOK_SECRET');
  if (!s) { Logger.log('Run noticeSetup first.'); return; }
  Logger.log('INCOMING MESSAGES: ' + ScriptApp.getService().getUrl() + '?notice=inbound&k=' + s);
  Logger.log('Delivery status is attached to each text by the script itself.');
}

/** One test send to John's own TextOptIn row (his phone and "text me" = yes must be on that row). Skips quiet hours only. */
function noticeTestSend() {
  const r = sendNotice('john@ancientpathcoaching.com', { kind: 'notice', test: true });
  Logger.log('Test send: ' + JSON.stringify(r) + '. Read the Texts tab for delivery.');
  return r;
}

// ───────────────────────────── small helpers ─────────────────────────────

/** The off switch: Config "text notices". Anything but yes (or a missing row) is off. */
function noticeOn_(ss) { return noticeFlag_(ss, 'text notices'); }

function noticeFlag_(ss, key) {
  const cf = ss.getSheetByName('Config');
  if (!cf || cf.getLastRow() < 2) return false;
  const rows = cf.getRange(2, 1, cf.getLastRow() - 1, 2).getValues();
  for (let i = rows.length - 1; i >= 0; i--) if (String(rows[i][0]).trim().toLowerCase() === key) return String(rows[i][1]).trim().toLowerCase() === 'yes';
  return false;
}

/** Makes the Config row, set to no, if it is not there. Never changes a value already set. */
function noticeEnsureSwitch_(ss) {
  noticeConfigSet_(ss, 'text notices', 'no', 'yes/no. Texts to men are off until Twilio shows the campaign Approved; noticeSetup moves no to yes after the sender check passes.', true);
}

/** Sets Config key → value (the last matching row), or appends it. onlyIfMissing leaves a value already there alone. */
function noticeConfigSet_(ss, key, value, note, onlyIfMissing) {
  const cf = ss.getSheetByName('Config');
  if (!cf) return;
  const n = Math.max(cf.getLastRow() - 1, 0), rows = n ? cf.getRange(2, 1, n, 1).getValues() : [];
  let at = 0;
  for (let i = 0; i < rows.length; i++) if (String(rows[i][0]).trim().toLowerCase() === key) at = i + 2;
  if (at) { if (!onlyIfMissing) cf.getRange(at, 2).setNumberFormat('@').setValue(value); return; }
  cf.appendRow([key, value, note || '']);
}

function noticeEnsureTabs_(ss) {
  Object.keys(NOTICE.TABS).forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    const want = NOTICE.TABS[name], have = sh.getRange(1, 1, 1, want.length).getValues()[0];
    want.forEach((h, i) => { if (have[i] !== h) sh.getRange(1, i + 1).setValue(h); });
    if (sh.getFrozenRows() < 1) sh.setFrozenRows(1);
    // keep day, phone and ids as plain text so Sheets never turns them into dates or drops a leading zero.
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
  const stamp = Utilities.formatDate(noticeNow_(), FD.TZ, 'yyyy-MM-dd h:mm a');
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

/** +12145550142 → (214) 555-0142 */
function noticeShow_(e164) { const d = String(e164 || '').replace(/\D/g, '').slice(-10); return d.length === 10 ? '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6) : String(e164 || ''); }