/**
 * Ancient Path — Weekly Coaching billing · Triage 1 (Nov 17, 2026)
 *   Triage 1: every failure is sorted (AP-TRIAGE 1). A passing Stripe, Calendly or Google hiccup is retried, stays silent, and the session is tried
 *   again on the next hourly run; a failure that lasts becomes one plain card on the Front Desk. One failing session never stops the others.
 *   A declined card or a man with no card is one card that names him; the raw Stripe error is never emailed. A charge that fails for a reason
 *   other than the card is no longer written to the ledger as FAILED: it is tried again (the same idempotency key, so it can never charge twice).
 * ------------------------------------------------------------
 * What this does
 *   1. After a man books "Weekly Coaching" on Calendly, Calendly sends him to this
 *      web app, which sends him to Stripe once to save a card. Coming back, he can
 *      book another week.
 *   2. Every hour, the charger looks at Weekly Coaching sessions that have just
 *      passed and bills the card on file:
 *        - session held ..................... charged
 *        - cancelled 24h+ ahead ............. not charged
 *        - cancelled inside 24h ............. charged (the 24-hour rule)
 *        - moved (rescheduled), any notice .. not charged; the new time is charged
 *                                             after it happens
 *        - cancelled by Ancient Path ........ not charged
 *   3. The rate is $135, or the rate the man paid for his first hour (60 Minute
 *      Coaching) if he used a discount code there. Once found, the rate is written
 *      on his Stripe customer record (metadata "weekly_rate_cents") and stays until
 *      you change it there.
 *   4. Every decision is written to a Google Sheet ("Weekly Coaching — Charges").
 *      A man with no card, or a declined card, is one card on the Front Desk (AP-TRIAGE 1). Nothing here emails.
 *
 * Setup: see RUNBOOK.md. Keys live in Script Properties, never in this file.
 */

// ----------------------------------------------------------------------------
// Settings
// ----------------------------------------------------------------------------
var CALENDLY_USER_URI        = 'https://api.calendly.com/users/8de32b2c-2591-4d29-b7de-1db0fc9d71c6';
var WEEKLY_EVENT_TYPE_URI    = 'https://api.calendly.com/event_types/4807fe5a-ebe7-4424-a3c3-1fea1e024b97'; // Weekly Coaching
var FIRST_HOUR_EVENT_TYPE_URI= 'https://api.calendly.com/event_types/63260325-6e23-4d74-8c41-8ba51157d236'; // 60 Minute Coaching
var BOOKING_URL              = 'https://calendly.com/john-ancientpathcoaching/weekly-coaching';
var CARD_PAGE_URL            = 'https://www.ancientpathcoaching.com/save-a-card';   // the site page that faces the man

var FULL_RATE_CENTS          = 13500;        // $135.00
var CURRENCY                 = 'usd';
var CANCEL_NOTICE_HOURS      = 24;
var LOOKBACK_DAYS            = 7;            // how far back the charger looks for sessions it has not handled
var TIMEZONE                 = 'America/Chicago';
var LEDGER_NAME              = 'Weekly Coaching — Charges';

var LEDGER_HEADERS = ['Logged at', 'Session', 'Name', 'Email', 'Outcome', 'Amount', 'Stripe payment', 'Note', 'Calendly event'];

// ----------------------------------------------------------------------------
// One-time setup — run this from the editor after pasting the two keys
// ----------------------------------------------------------------------------
function setup() {
  var props = PropertiesService.getScriptProperties();
  var missing = ['STRIPE_SECRET_KEY', 'CALENDLY_TOKEN'].filter(function (k) { return !props.getProperty(k); });
  if (missing.length) throw new Error('Add these Script Properties first: ' + missing.join(', '));

  getLedger_(); // creates the sheet if needed

  // one hourly trigger, never two
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'runWeeklyCharges') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('runWeeklyCharges').timeBased().everyHours(1).create();

  // prove both keys work
  var me = calendly_('get', '/users/me');
  var acct = stripe_('get', '/v1/balance');
  Logger.log('Calendly OK as ' + me.resource.email + ' · Stripe OK (' + (acct.livemode ? 'LIVE' : 'TEST') + ' mode) · ledger: ' + getLedger_().getUrl());
}

// ----------------------------------------------------------------------------
// Web app — the card-save step after booking
// ----------------------------------------------------------------------------
function doGet(e) {
  try { return doGet_(e); }
  catch (err) {
    triage_('Card-save page', err);
    return page_('Something went wrong on our side.', 'Your session is booked. We will be in touch about the card.', 'Back to Ancient Path', 'https://ancientpathcoaching.com');
  }
}

function doGet_(e) {
  var p = (e && e.parameter) || {};
  if (p.callback) return jsonp_(p.callback, cardStep_(p));   // the site page asking what to do

  var self = ScriptApp.getService().getUrl();
  if (p.done)  return page_('Card saved.', 'Your sessions are booked. Each one is charged after it happens.', 'Book another week', BOOKING_URL);
  if (p.skip)  return page_('No card was saved.', 'Your session is on the calendar, but it is not held until a card is on file.',
                            'Save a card now', self + '?invitee_email=' + encodeURIComponent(p.e || '') + '&invitee_full_name=' + encodeURIComponent(p.n || ''));
  var r = cardStep_(p);
  if (r.status === 'noemail')  return askEmail_(self);
  if (r.status === 'onfile')   return page_('Your card is already on file.', 'Nothing more to do. Each session is charged after it happens.', 'Book another week', BOOKING_URL);
  if (r.status === 'checkout') return redirect_(r.url);
  return page_('Something went wrong on our side.', 'Your session is booked. We will be in touch about the card.', 'Back to Ancient Path', 'https://ancientpathcoaching.com');
}

/** Finds or creates the Stripe customer and decides the card step. {status: noemail | onfile | checkout | error, url?} */
function cardStep_(p) {
  var email = (p.invitee_email || '').trim().toLowerCase();
  var name  = (p.invitee_full_name || '').trim();
  if (!email) return { status: 'noemail' };
  try {
    var customer = findOrCreateCustomer_(email, name);
    if (defaultCard_(customer.id)) return { status: 'onfile' };
    var session = stripe_('post', '/v1/checkout/sessions', {
      mode: 'setup',
      customer: customer.id,
      currency: CURRENCY,
      'payment_method_types[]': 'card',
      success_url: CARD_PAGE_URL + '?done=1',
      cancel_url:  CARD_PAGE_URL + '?skip=1&e=' + encodeURIComponent(email) + '&n=' + encodeURIComponent(name),
      'metadata[source]': 'weekly-coaching',
      'custom_text[submit][message]': 'No charge today. Ancient Path saves this card once and charges the agreed upon rate after each session you keep.'
    });
    return { status: 'checkout', url: session.url };
  } catch (err) {
    triage_('Card-save page', err);
    return { status: 'error' };
  }
}

/** Answers the site page: a script the browser can load across domains. */
function jsonp_(cb, obj) {
  var name = String(cb).replace(/[^\w.]/g, '');
  return ContentService.createTextOutput(name + '(' + JSON.stringify(obj) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
}

// ----------------------------------------------------------------------------
// The hourly charger
// ----------------------------------------------------------------------------
function runWeeklyCharges() { return triGuard_('Weekly charges', 'charges', function () { return withRetry_(runWeeklyCharges_, 'Weekly charges'); }); }

function runWeeklyCharges_() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) return; // a previous run is still going
  try {
    var now = new Date();
    var seen = ledgerEventUris_();
    var events = listWeeklyEvents_(new Date(now.getTime() - LOOKBACK_DAYS * 864e5), now);

    events.forEach(function (ev) {
      try {
        if (seen[ev.uri]) return;                           // already handled
        if (new Date(ev.end_time) > now) return;            // session not over yet
        var inv = firstInvitee_(ev);
        if (!inv) { log_(ev, {}, 'skipped', 0, '', 'No invitee record'); return; }

        var d = decide_(ev, inv, CANCEL_NOTICE_HOURS);
        if (!d.charge) { log_(ev, inv, d.outcome, 0, '', d.note); return; }

        chargeSession_(ev, inv, d);
      } catch (err) {
        triage_('Weekly charge', err);                      // sorted, never raw; this session stays unhandled and is tried again next hour, and the others go on
      }
    });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Pure decision. Exported for tests.
 * Returns {charge:boolean, outcome:string, note:string}
 */
function decide_(ev, inv, noticeHours) {
  if (ev.status === 'active') return { charge: true, outcome: 'Charged — session held', note: '' };

  if (inv.rescheduled) return { charge: false, outcome: 'Moved — charge carries to the new time', note: '' };

  var c = inv.cancellation || ev.cancellation;
  if (!c) return { charge: false, outcome: 'Cancelled — no details from Calendly', note: 'Check by hand' };
  if (c.canceler_type === 'host') return { charge: false, outcome: 'Cancelled by Ancient Path', note: c.reason || '' };

  var noticeHrs = (Date.parse(ev.start_time) - Date.parse(c.created_at)) / 36e5;
  if (noticeHrs >= noticeHours) return { charge: false, outcome: 'Cancelled with notice', note: Math.round(noticeHrs) + ' hours ahead' };
  return { charge: true, outcome: 'Charged — cancelled inside ' + noticeHours + ' hours', note: Math.round(noticeHrs * 10) / 10 + ' hours ahead' };
}

/** A session that was not charged because no card is saved: one card on the Front Desk, plain words, naming the man. */
function needsCard_(ev, inv, email, why) {
  triNotice_('Weekly Coaching charge', 'no-card:' + ev.uri.split('/').pop(), 'one man',
    (inv.name || email) + ' <' + email + '> had a Weekly Coaching session on ' + when_(ev.start_time) + ' but ' + why + '. Nothing was charged. Ask him to save a card here:\n' + CARD_PAGE_URL);
}

function chargeSession_(ev, inv, d) {
  var email = (inv.email || '').toLowerCase();
  var customer = findCustomer_(email);
  if (!customer) {
    log_(ev, inv, 'NOT charged — no Stripe customer', 0, '', d.outcome);
    needsCard_(ev, inv, email, 'never saved a card');
    return;
  }
  var pm = defaultCard_(customer.id);
  if (!pm) {
    log_(ev, inv, 'NOT charged — no card on file', 0, '', d.outcome);
    needsCard_(ev, inv, email, 'has no card saved');
    return;
  }
  var rate = weeklyRateCents_(customer, email);
  var desc = (d.outcome.indexOf('cancelled') >= 0 ? 'Weekly Coaching — cancelled inside 24 hours, session of ' : 'Weekly Coaching — session of ') + when_(ev.start_time);

  var pi = stripe_('post', '/v1/payment_intents', {
    amount: rate.cents,
    currency: CURRENCY,
    customer: customer.id,
    payment_method: pm,
    off_session: 'true',
    confirm: 'true',
    description: desc,
    receipt_email: email,
    'metadata[calendly_event]': ev.uri,
    'metadata[session_start]': ev.start_time,
    'metadata[reason]': d.outcome,
    'metadata[rate_source]': rate.source
  }, 'ap-weekly-' + ev.uri.split('/').pop(), /*allowError*/ true);

  if (pi.error) {
    var msg = pi.error.message || JSON.stringify(pi.error);
    // Not the card (Stripe had a problem, or the request was wrong): nothing is written, so triage sorts it and the session is tried again next hour.
    if (pi.error.type !== 'card_error') throw new Error('Stripe ' + (pi.error.code || pi.error.type || 'error') + ' on the payment: ' + msg);
    log_(ev, inv, 'FAILED — ' + (pi.error.code || 'card error'), rate.cents, pi.error.payment_intent ? pi.error.payment_intent.id : '', msg);
    triNotice_('Weekly Coaching charge', 'declined:' + ev.uri.split('/').pop(), 'one man',
      (inv.name || email) + ' <' + email + '>: his card was declined for the session on ' + when_(ev.start_time) + ' (' + dollars_(rate.cents) + '). Stripe says: ' + msg +
      ' Nothing else was charged. Ask him for another card here:\n' + CARD_PAGE_URL);
    return;
  }
  log_(ev, inv, d.outcome, rate.cents, pi.id, rate.source + (d.note ? ' · ' + d.note : ''));
}

// ----------------------------------------------------------------------------
// Rate — the discount from the first hour follows the man
// ----------------------------------------------------------------------------
function weeklyRateCents_(customer, email) {
  var meta = customer.metadata || {};
  if (meta.weekly_rate_cents) return { cents: parseInt(meta.weekly_rate_cents, 10), source: 'rate on file' };

  var paid = firstHourPaidCents_(email); // null if no paid first hour found
  var r = rateFromFirstHour_(paid, FULL_RATE_CENTS);
  stripe_('post', '/v1/customers/' + customer.id, {
    'metadata[weekly_rate_cents]': String(r.cents),
    'metadata[weekly_rate_source]': r.source
  });
  return r;
}

/** Pure. Exported for tests. A $0 first hour is a free-first-hour code, not a free rate. */
function rateFromFirstHour_(paidCents, fullCents) {
  if (paidCents === null || paidCents === undefined) return { cents: fullCents, source: 'full rate (no first-hour payment found)' };
  if (paidCents <= 0) return { cents: fullCents, source: 'full rate (first hour was free)' };
  if (paidCents >= fullCents) return { cents: fullCents, source: 'full rate' };
  return { cents: paidCents, source: 'first-hour rate carried (' + dollars_(paidCents) + ')' };
}

function firstHourPaidCents_(email) {
  var res = calendly_('get', '/scheduled_events', {
    user: CALENDLY_USER_URI, invitee_email: email, sort: 'start_time:asc', count: 50
  });
  var events = (res.collection || []).filter(function (ev) { return ev.event_type === FIRST_HOUR_EVENT_TYPE_URI; });
  for (var i = 0; i < events.length; i++) {
    var inv = firstInvitee_(events[i]);
    if (inv && inv.payment && inv.payment.successful) return Math.round(Number(inv.payment.amount) * 100);
  }
  return null;
}

// ----------------------------------------------------------------------------
// Calendly
// ----------------------------------------------------------------------------
function listWeeklyEvents_(from, to) {
  var out = [], token = null;
  do {
    var params = { user: CALENDLY_USER_URI, min_start_time: from.toISOString(), max_start_time: to.toISOString(), count: 100 };
    if (token) params.page_token = token;
    var res = calendly_('get', '/scheduled_events', params);
    (res.collection || []).forEach(function (ev) { if (ev.event_type === WEEKLY_EVENT_TYPE_URI) out.push(ev); });
    token = res.pagination && res.pagination.next_page_token;
  } while (token);
  return out;
}

function firstInvitee_(ev) {
  var res = calendly_('get', ev.uri.replace('https://api.calendly.com', '') + '/invitees', { count: 1 });
  return (res.collection || [])[0] || null;
}

function calendly_(method, path, params) {
  var url = 'https://api.calendly.com' + path;
  var opts = { method: method, muteHttpExceptions: true, headers: { Authorization: 'Bearer ' + prop_('CALENDLY_TOKEN') } };
  if (method === 'get' && params) url += '?' + form_(params);
  else if (params) { opts.contentType = 'application/json'; opts.payload = JSON.stringify(params); }
  var r = UrlFetchApp.fetch(url, opts);
  var body = JSON.parse(r.getContentText() || '{}');
  if (r.getResponseCode() >= 300) throw new Error('Calendly ' + r.getResponseCode() + ' ' + path + ': ' + (body.message || r.getContentText()));
  return body;
}

// ----------------------------------------------------------------------------
// Stripe
// ----------------------------------------------------------------------------
function findCustomer_(email) {
  var res = stripe_('get', '/v1/customers', { email: email, limit: 1 });
  return (res.data || [])[0] || null;
}
function findOrCreateCustomer_(email, name) {
  return findCustomer_(email) || stripe_('post', '/v1/customers', { email: email, name: name, 'metadata[source]': 'weekly-coaching' });
}
/** Most recently saved card, or null. */
function defaultCard_(customerId) {
  var res = stripe_('get', '/v1/payment_methods', { customer: customerId, type: 'card', limit: 1 });
  var pm = (res.data || [])[0];
  return pm ? pm.id : null;
}

function stripe_(method, path, params, idempotencyKey, allowError) {
  var url = 'https://api.stripe.com' + path;
  var opts = { method: method, muteHttpExceptions: true, headers: { Authorization: 'Bearer ' + prop_('STRIPE_SECRET_KEY') } };
  if (idempotencyKey) opts.headers['Idempotency-Key'] = idempotencyKey;
  if (method === 'get' && params) url += '?' + form_(params);
  else if (params) { opts.contentType = 'application/x-www-form-urlencoded'; opts.payload = form_(params); }
  var r = UrlFetchApp.fetch(url, opts);
  var body = JSON.parse(r.getContentText() || '{}');
  if (r.getResponseCode() >= 300 && !allowError) throw new Error('Stripe ' + r.getResponseCode() + ' ' + path + ': ' + (body.error ? body.error.message : r.getContentText()));
  return body;
}

// ----------------------------------------------------------------------------
// Ledger (Google Sheet)
// ----------------------------------------------------------------------------
function getLedger_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('LEDGER_ID');
  var ss = null;
  if (id) { try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; } }
  if (!ss) {
    ss = SpreadsheetApp.create(LEDGER_NAME);
    var sh = ss.getSheets()[0];
    sh.setName('Charges');
    sh.appendRow(LEDGER_HEADERS);
    sh.setFrozenRows(1);
    props.setProperty('LEDGER_ID', ss.getId());
  }
  return ss;
}
function ledgerEventUris_() {
  var sh = getLedger_().getSheetByName('Charges');
  var last = sh.getLastRow();
  var seen = {};
  if (last < 2) return seen;
  sh.getRange(2, LEDGER_HEADERS.length, last - 1, 1).getValues().forEach(function (r) { if (r[0]) seen[r[0]] = true; });
  return seen;
}
function log_(ev, inv, outcome, cents, paymentId, note) {
  getLedger_().getSheetByName('Charges').appendRow([
    Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd HH:mm'),
    when_(ev.start_time), inv.name || '', inv.email || '', outcome,
    cents ? dollars_(cents) : '', paymentId || '', note || '', ev.uri
  ]);
}

// ----------------------------------------------------------------------------
// Small helpers
// ----------------------------------------------------------------------------
function prop_(k) { var v = PropertiesService.getScriptProperties().getProperty(k); if (!v) throw new Error('Missing Script Property ' + k); return v; }
function form_(o) { return Object.keys(o).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(o[k]); }).join('&'); }
function when_(iso) { return Utilities.formatDate(new Date(iso), TIMEZONE, "EEE MMM d, yyyy 'at' h:mm a"); }
function dollars_(cents) { return '$' + (cents / 100).toFixed(2); }
function redirect_(url) {
  // Apps Script serves this page inside a sandboxed frame: the browser only lets it leave on a real tap, in a new tab.
  return page_('Booked. One more step.', 'Save a card for your weekly sessions. Each session is charged after it happens.', 'Save a card', url);
}
function page_(title, body, linkText, linkUrl) {
  var html = '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + esc_(title) + '</title>' +
    '<body style="font-family:Georgia,serif;background:#F6F2EA;color:#1F1D1A;margin:0;padding:48px 24px;text-align:center">' +
    '<h1 style="font-weight:normal;font-size:26px;margin:0 0 12px">' + esc_(title) + '</h1>' +
    '<p style="font-size:17px;max-width:520px;margin:0 auto 28px;line-height:1.5">' + esc_(body) + '</p>' +
    '<a href="' + linkUrl + '" target="_blank" rel="noopener" style="display:inline-block;background:#8C6A3F;color:#F6F2EA;text-decoration:none;padding:12px 22px;border-radius:4px;font-size:16px">' + esc_(linkText) + '</a></body>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
/** Reached without a booking (e.g. John sent the link by hand): ask for the email the booking was made with. */
function askEmail_(self) {
  var html = '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>Save a card</title>' +
    '<body style="font-family:Georgia,serif;background:#F6F2EA;color:#1F1D1A;margin:0;padding:48px 24px;text-align:center">' +
    '<h1 style="font-weight:normal;font-size:26px;margin:0 0 12px">Save a card for your weekly sessions</h1>' +
    '<p style="font-size:17px;max-width:520px;margin:0 auto 24px;line-height:1.5">Use the name and email you booked with. Each session is charged after it happens.</p>' +
    '<form method="get" action="' + self + '" target="_blank" style="max-width:360px;margin:0 auto;text-align:left">' +
    '<label style="display:block;margin-bottom:12px">Name<br><input name="invitee_full_name" required style="width:100%;padding:10px;font-size:16px;border:1px solid #C9BBA4;border-radius:4px"></label>' +
    '<label style="display:block;margin-bottom:20px">Email<br><input name="invitee_email" type="email" required style="width:100%;padding:10px;font-size:16px;border:1px solid #C9BBA4;border-radius:4px"></label>' +
    '<button style="display:block;width:100%;background:#8C6A3F;color:#F6F2EA;border:0;padding:12px 22px;border-radius:4px;font-size:16px;font-family:Georgia,serif">Continue to Stripe</button></form></body>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function esc_(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

// Node test hook (ignored by Apps Script)
if (typeof module !== 'undefined') module.exports = { decide_: decide_, rateFromFirstHour_: rateFromFirstHour_, dollars_: dollars_ };

// ───────────────────────────── AP-TRIAGE 1 · Weekly Coaching · Triage 1 ─────────────────────────────
// John Sherrod, Nov 17, 2026: a failure is sorted, handled and, only when it needs us, put in front of him in plain words with the repair under
// way. He never gets a raw error. Wait (a passing hiccup: retried at once and on the next run, silent, a card only after 30 minutes), Repair (a
// known cause the script fixes), Needs us (one card on the Front Desk Actions tab, key fix:<script>:<signature>, closed by this script as Proven
// after the job has run clean for 30 minutes; only S1 sends one plain email). Every event goes to the one event log with its school (Script
// Properties tri:school and tri:secret live in the Front Desk only: this script queues each event on the Triage queue tab of the Front Desk sheet and the Front Desk sends it). The block is the Front Desk's own (build 44), built from one source: only TRI_ and the three
// rule tables differ, so a new school is a row and a new script is the same block.
const TRI_ = {
  SCRIPT: 'weekly-coaching', LABEL: 'Weekly Coaching', FILE: 'scripts/WeeklyCoaching.gs', BUILD: 'Triage 1',
  URL: 'https://eyiqlyaridagclnbxhzy.supabase.co/rest/v1/rpc/event_ingest',
  KEY: 'sb_publishable_qB3WnlYvdl6cO4f0CsrjTQ_zcaLaeYq', // the platform's publishable key: it opens one door, and the door wants the secret
  DESK: 'https://www.ancientpathcoaching.com/front-desk', DESK_SHEET: '1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw',
  WAIT_MIN: 30, CLEAN_MIN: 30, MAX: 20, PAUSES: [1000, 4000, 10000]
};
const TRI_LIMIT_ = /too many times (for one day|per day|in a day)|daily limit|quota|Limit Exceeded: (Email|Urlfetch|Properties|Document|Trigger)|credit balance|billing/i;
const TRI_ACCESS_ = /permission|authorization is required|access denied|invalid_grant|unauthori[sz]ed|forbidden|\b(401|403)\b|api key|x-api-key|authentication_error|oauth/i;
const TRI_CODE_ = /\b(TypeError|ReferenceError|SyntaxError|RangeError)\b|is not a function|is not defined|Cannot (read|set) propert|is not iterable|Cannot destructure|before initialization|is not a constructor/i;
const TRI_WAIT_ = /timed out|timeout|Service [A-Za-z ]+ failed|Server error|Internal error|Bad Gateway|Gateway Time|Service Unavailable|unavailable|temporar|try again|backend error|Could not obtain lock|Lock timeout|maximum execution time|too many times in a short time|ECONNRESET|socket|DNS error|Address unavailable|rate limit|\b(429|500|502|503|504)\b|Unexpected error while getting the method or property/i;
/** Which outside service a passing failure names; every job that hits the same outage shares one signature, so one outage is one card. */
const TRI_SERVICES_ = [[/stripe/i, 'Stripe', 'stripe'], [/calendly/i, 'Calendly', 'calendly'], [/spreadsheet|sheet/i, 'Google Sheets', 'google-sheets'], [/drive/i, 'Google Drive', 'google-drive'], [/gmail|mail/i, 'Gmail', 'gmail'], [/calendar/i, 'Google Calendar', 'google-calendar'],
  [/lock/i, 'the script lock', 'script-lock'], [/maximum execution time/i, 'the time limit', 'time-limit'], [/urlfetch|fetch|http|address unavailable|dns|socket|econn/i, 'an outside service', 'outside-service']];
/** Who a failure touches, and how serious it is (S1: a person's words are at risk or people cannot get in; S2: a feature is broken; S3: a rough edge). */
const TRI_WHO_ = [[/./, 'the men']];
const TRI_SEV_ = [[/./, 'S2']];
const TRI_SEV_WORDS_ = { S1: 'S1: a person’s words are at risk, or people can’t get in.', S2: 'S2: a feature is broken.', S3: 'S3: a rough edge.' };
const TRI_SRC_ = [[/charge/i, 'charges'], [/card/i, 'cardsave']];
let TRI_ONCE_ = {}; // jobs that run rarely (triGuard_ 4th argument): a failure that outlasts the retries is a card at once, and the first clean run closes it
let TRI_RUN_ = {}; // signatures that failed in this execution: a clean run clears only the others

function triMsg_(e) { return e == null ? '' : (e.message !== undefined ? String(e.message) : (typeof e === 'object' ? JSON.stringify(e) : String(e))); }
/** The job's own name in plain words, no ids, no names: "Room reminder NOT sent for Dan" is "Room reminder not sent". */
function triJob_(s) {
  let j = String(s || '').split('\n')[0].replace(/:\s*$/, '').replace(/ for .*$/, '').replace(/\bNOT\b/g, 'not').replace(/[A-Za-z0-9_-]{25,}/g, '…').trim();
  if (!j) j = TRI_.LABEL + ' stopped';
  return j.charAt(0).toUpperCase() + j.slice(1, 90);
}
function triSlug_(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48); }
/** Sorts one failure: { kind: wait|limit|access|code|unknown, way: wait|needs_us, job, sig, sev, who, src, fn, line, msg }. */
function triClass_(where, e) {
  let job, msg, stack = '';
  if (e === null || e === undefined) {
    const text = String(where || ''), at = text.indexOf(': ');
    job = at > 0 && at < 120 ? text.slice(0, at) : text.split('\n')[0];
    msg = (at > 0 && at < 120 ? text.slice(at + 2) : text).split('\n')[0];
    stack = text;
  } else { job = String(where || ''); msg = triMsg_(e); stack = String(e.stack || ''); }
  job = triJob_(job);
  const kind = TRI_LIMIT_.test(msg) ? 'limit' : TRI_ACCESS_.test(msg) ? 'access' : TRI_CODE_.test(msg) ? 'code' : TRI_WAIT_.test(msg) ? 'wait' : 'unknown';
  const sevHit = TRI_SEV_.find(r => r[0].test(job)), who = (TRI_WHO_.find(r => r[0].test(job)) || [0, 'our team'])[1];
  const c = { kind: kind, way: (kind === 'wait' || kind === 'unknown') ? 'wait' : 'needs_us', job: job, sev: sevHit ? sevHit[1] : 'S2', who: who, src: (TRI_SRC_.find(r => r[0].test(job)) || [0, 'run'])[1] };
  if (c.way === 'wait') {
    const sv = TRI_SERVICES_.find(r => r[0].test(msg)) || [0, 'Google', 'google'];
    c.job = kind === 'unknown' ? job : sv[1] + ' is not answering'; c.sig = kind === 'unknown' ? triSlug_(job) + '-unknown' : sv[2] + '-wait';
    if (kind === 'wait') c.who = 'the men and our team';
  } else c.sig = triSlug_(job) + '-' + kind;
  const m = /at ([A-Za-z0-9_$.]+) \(([A-Za-z0-9_.]+):(\d+)/.exec(stack);
  c.fn = m ? m[1] : ''; c.line = m ? m[3] : '';
  c.msg = msg.replace(/[A-Za-z0-9_-]{25,}/g, '…').replace(/\s+/g, ' ').trim().slice(0, 140);
  return c;
}
/** Retries what only a passing outside hiccup could fail: now, then after about 1, 4 and 10 seconds. Anything else is thrown at once. */
function withRetry_(fn, label) {
  for (let i = 0; ; i++) {
    try { return fn(); } catch (e) {
      const c = triClass_(label || '', e);
      if (i >= TRI_.PAUSES.length || c.way !== 'wait' || c.kind === 'unknown') throw e;
      Utilities.sleep(TRI_.PAUSES[i]);
    }
  }
}
function triState_() { try { return JSON.parse(PropertiesService.getScriptProperties().getProperty('tri:idx') || '{}') || {}; } catch (e) { return {}; } }
function triSave_(st) {
  const keys = Object.keys(st);
  if (keys.length > TRI_.MAX) keys.sort((a, b) => ((st[b].e || 0) - (st[a].e || 0)) || (String(st[b].l) < String(st[a].l) ? -1 : 1)).slice(TRI_.MAX).forEach(k => { delete st[k]; });
  try { PropertiesService.getScriptProperties().setProperty('tri:idx', JSON.stringify(st)); } catch (e) {}
}
function triKey_(sig) { return 'fix:' + TRI_.SCRIPT + ':' + sig; }
/** The Triage queue tab of the Front Desk sheet: this script holds no log secret. Each event is one row (at, source, job, way, severity, signature, proof, note, school); the Front Desk reads the rows on its 5-minute run, sends them to the event log and clears them. */
function triQueue_() {
  const ss = SpreadsheetApp.openById(TRI_.DESK_SHEET); let sh = ss.getSheetByName('Triage queue');
  if (!sh) { sh = ss.insertSheet('Triage queue'); sh.appendRow(['at', 'source', 'job', 'way', 'severity', 'signature', 'proof', 'note', 'school']); try { sh.setFrozenRows(1); sh.hideSheet(); } catch (e) {} }
  return sh;
}
/** One event to the log, through the queue. Never throws. null: queued (or skipped as a repeat inside 5 minutes), so the counts in Script Properties carry the work; false: the queue could not be written. */
function triLog_(way, x, proof, note) {
  try {
    const cache = CacheService.getScriptCache(), ck = 'tri:q:' + TRI_.SCRIPT + ':' + way + ':' + String(x.sig).slice(0, 60);
    if (way !== 'repair' && cache.get(ck)) return null;
    triQueue_().appendRow([new Date(), TRI_.SCRIPT, x.j, way, way === 'clean' ? '' : (x.s || ''), x.sig, proof || '', note || '', x.school || '']);
    if (way !== 'repair') cache.put(ck, '1', 300);
    return null;
  } catch (e) { return false; }
}
/** The card's words in one place: the row's "do this" and "because" (lines split by a new line). */
function triWords_(x) {
  if (x.k === 'person') return { do: x.j, because: ['What needs you: ' + x.note, 'It touches ' + x.who + '.', TRI_SEV_WORDS_[x.s] || TRI_SEV_WORDS_.S2, 'Nothing is broken: the script cannot do this step for you.'].join('\n') };
  const lines = ['What stopped: ' + x.j + '. It touches ' + x.who + '.', TRI_SEV_WORDS_[x.s] || TRI_SEV_WORDS_.S2];
  const mins = Math.max(0, Math.round((new Date(x.l) - new Date(x.f)) / 60000));
  if (x.k === 'wait') lines.push('Tried: it tried again at once and on every run for ' + mins + ' minutes (' + x.n + ' times). The cause is outside our code.', 'Repair: it keeps trying on its own. The card closes when the job has run clean for ' + TRI_.CLEAN_MIN + ' minutes.');
  else if (x.k === 'unknown') lines.push('Tried: it tried again on every run for ' + mins + ' minutes (' + x.n + ' times). We do not recognize this failure yet.', 'Repair: it goes to Claude first, to name the cause and add it to the rule table. The card closes when the job has run clean for ' + TRI_.CLEAN_MIN + ' minutes.');
  else if (x.k === 'limit') lines.push('Tried: it stopped at once, because a daily limit is used up. The count resets on its own.', 'Repair: it goes to Claude first, to see why the limit was reached and to keep it from coming back.');
  else if (x.k === 'access') lines.push('Tried: it stopped at once, because a permission or key was refused.', 'Repair: it goes to Claude first, to find which permission or key was refused and renew it. If only a sign-in will do, the one step comes here.');
  else lines.push('Tried: it stopped at once, because a retry would fail the same way. It has happened ' + x.n + ' time' + (x.n === 1 ? '' : 's') + ' since ' + Utilities.formatDate(new Date(x.f), 'America/Chicago', 'MMM d, h:mm a') + '.',
    'Repair plan: ' + TRI_.LABEL + ' (' + TRI_.FILE + '), ' + (x.fn ? 'the function ' + x.fn + (x.ln ? ' near line ' + x.ln : '') : 'the job named above') + ' says “' + (x.m || 'no message') + '”. Build running when it stopped: ' + x.b + '. It becomes the day’s first build, on Sonnet.',
    'First message for that build: “Repair ' + TRI_.LABEL + ' build ' + x.b + ': ' + (x.fn || x.j) + ' fails with ‘' + (x.m || 'no message') + '’. Read the live script through the Drive connector, fix the cause, prove it with a forced test, install and commit it per ap-ship-standard, then check that ' + triKey_(x.sig) + ' closes as Proven.”');
  return { do: x.j, because: lines.join('\n') };
}
/** Writes (or updates) the one Actions row for a signature on the Front Desk sheet. Never throws. This script closes its own card (the Front Desk never closes a foreign fix: key). */
function triCard_(x) {
  try {
    const sh = SpreadsheetApp.openById(TRI_.DESK_SHEET).getSheetByName('Actions');
    const hdr = sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0], H = {};
    hdr.forEach((h, i) => { if (h) H[String(h)] = i; });
    const key = triKey_(x.sig), data = sh.getDataRange().getValues(), w = triWords_(x);
    let at = 0;
    for (let i = 1; i < data.length; i++) if (String(data[i][H['key']] || '').trim() === key) { at = i; break; }
    if (at) {
      const row = data[at], handDone = row[H['mark done by hand']] === true;
      sh.getRange(at + 1, H['because'] + 1).setValue(w.because);
      if (!handDone && String(row[H['status']]) === 'done') {
        sh.getRange(at + 1, H['status'] + 1).setValue('open'); sh.getRange(at + 1, H['first seen'] + 1).setValue(new Date()); sh.getRange(at + 1, H['done at'] + 1).setValue('');
        if (H['closed how'] !== undefined) sh.getRange(at + 1, H['closed how'] + 1).setValue('');
      }
      return true;
    }
    const row = new Array(Math.max(sh.getLastColumn(), 11)).fill('');
    row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = 'John'; row[H['do this']] = w.do; row[H['for']] = TRI_.LABEL;
    row[H['because']] = w.because; row[H['link']] = TRI_.DESK; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['rule']] = 'R26';
    sh.appendRow(row);
    return true;
  } catch (e) { return false; }
}
/** The job has run clean for 30 minutes: this script closes its card as Proven. Never throws. */
function triClose_(sig) {
  try {
    const sh = SpreadsheetApp.openById(TRI_.DESK_SHEET).getSheetByName('Actions');
    const H = {}; sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0].forEach((h, i) => { if (h) H[String(h)] = i; });
    const key = triKey_(sig), data = sh.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (String(data[i][H['key']] || '').trim() !== key || String(data[i][H['status']]) !== 'open') continue;
      sh.getRange(i + 1, H['status'] + 1).setValue('done'); sh.getRange(i + 1, H['done at'] + 1).setValue(new Date());
      if (H['done by'] !== undefined) sh.getRange(i + 1, H['done by'] + 1).setValue(TRI_.LABEL);
      if (H['closed how'] !== undefined) sh.getRange(i + 1, H['closed how'] + 1).setValue('Proven');
    }
    return true;
  } catch (e) { return false; }
}
/** A business notice that needs a person (for example a card that was declined): one card, plain words, no retry and no email. Never throws. */
function triNotice_(job, sig, who, note) {
  try {
    const iso = new Date().toISOString();
    triLog_('needs_us', { j: job, s: 'S2', sig: sig }, '', 'needs a person');
    return triCard_({ sig: sig, k: 'person', j: job, who: who, s: 'S2', note: note, f: iso, l: iso, n: 1, b: TRI_.BUILD });
  } catch (e) { return false; }
}
/** This script has no S1 job, so it sends no email and asks for no mail permission: an S1 here would be a card only. */
function triMail_(x) { return false; }
/**
 * The one door every failure goes through (alert_ is a one-line call to it). Handled where it happens and never rethrown.
 * where: the job's words (or a whole alert text, with e left out). Returns { way: wait|repair|needs_us, sev, card } and never throws.
 */
function triage_(where, e) {
  const out = { way: 'wait', sev: '', card: 'none' };
  try {
    const c = triClass_(where, e), now = new Date(), iso = now.toISOString(), st = triState_();
    TRI_RUN_[c.sig] = 1;
    const x = st[c.sig] || { f: iso, n: 0, e: 0, ml: 0 };
    x.l = iso; x.n = (x.n || 0) + 1; x.k = c.kind; x.j = c.job; if (!x.s || c.sev < x.s) x.s = c.sev; x.who = c.who; x.src = c.src; x.fn = c.fn; x.ln = c.line; x.m = c.msg; x.b = TRI_.BUILD; x.cl = '';
    const r = triLog_(c.way, { j: c.job, s: c.sev, sig: c.sig }, '', c.kind + (c.fn ? ' in ' + c.fn : ''));
    const minutes = (now - new Date(x.f)) / 60000;
    let needs = c.way === 'needs_us';
    if (!needs) needs = r ? (r.way === 'needs_us') : minutes >= (TRI_ONCE_[c.src] ? 0 : TRI_.WAIT_MIN); // the log is the count when it answers; the Script Properties are the count when it cannot
    if (needs) { x.w = 'needs_us'; x.e = 1; if (r && r.severity) x.s = r.severity; } else x.w = 'wait';
    x.sig = c.sig; st[c.sig] = x; triSave_(st);
    out.way = needs ? 'needs_us' : 'wait'; out.sev = x.s;
    if (needs) {
      out.card = x.cd ? 'update' : 'new';
      if (triCard_(x)) { if (!x.cd) { x.cd = 1; st[c.sig] = x; triSave_(st); } }
      if (x.s === 'S1' && !x.ml) { if (triMail_(x)) { x.ml = 1; st[c.sig] = x; triSave_(st); } }
    }
  } catch (err) { /* triage never throws */ }
  return out;
}
/** A job ran clean. A passing failure that recovered closes at once; a card stays until the job has run clean for 30 minutes, then closes itself as Proven. */
function cleanRun_(src) {
  try {
    const st = triState_(), now = new Date(); let dirty = false;
    Object.keys(st).forEach(sig => {
      const x = st[sig];
      if (x.src !== src || TRI_RUN_[sig]) return;
      dirty = true; x.sig = sig;
      if (!x.e) { if (triLog_('clean', x, 'recovered on its own', '') !== false) delete st[sig]; return; }
      if (!x.cl) x.cl = now.toISOString();
      const r = triLog_('clean', x, '', '');
      const quiet = now - new Date(x.cl);
      if (quiet >= (TRI_ONCE_[src] ? 0 : TRI_.CLEAN_MIN) * 60000 && (r !== false || quiet >= 4 * 36e5)) { if (x.cd) triClose_(sig); delete st[sig]; } // this script closes its own card as Proven
    });
    if (dirty) triSave_(st);
  } catch (e) {}
}
/** A timer's own job, handled where it happens: a failure goes to triage_, a clean pass to cleanRun_, and nothing is rethrown. */
function triGuard_(job, src, fn, once) {
  if (once) TRI_ONCE_[src] = 1;
  try { const r = fn(); cleanRun_(src); return r; } catch (e) { triage_(job, e); }
}
/** Run by hand once after an install (Run → triProof), never on a timer: forces one passing hiccup and one defect through the real block, then closes its own test card as Proven. */
function triProof() {
  const a = triage_('Triage proof: forced hiccup', new Error('Service Spreadsheets timed out (forced test)'));
  const b = triage_('Triage proof: forced defect', new TypeError('x is not a function (forced test)'));
  const sig = 'triage-proof-forced-defect-code', st = triState_(), had = !!st[sig];
  const closed = triClose_(sig); delete st[sig]; delete st['google-sheets-wait']; triSave_(st);
  Logger.log('hiccup: ' + a.way + ' (card ' + a.card + ') · defect: ' + b.way + ' (card ' + b.card + ', S ' + b.sev + ') · test card closed as Proven: ' + closed + ' · queue rows: ' + (triQueue_().getLastRow() - 1) + ' · index entry made: ' + had);
}
