/**
 * Ancient Path — Search refresh · build 2
 *   build 2 (Oct 9): the Monthly log's month cells are dates on a sheet whose clock is GMT, so "Oct 1" read as the
 *     evening of Sept 30 in Central and build 1 did not recognise them as October — a re-run doubled the month's rows.
 *     Dates are now read at noon, so the month is the month.
 *
 * What it does, once a month (the 2nd, 6:00 AM Central), and whenever you run  refreshSearch  by hand:
 *   1. Reads Search Console for the www property — every search Google showed us for, and every page it showed,
 *      over the last 28 days (ending three days ago, because Search Console runs about two days behind).
 *   2. On the "Ancient Path — Search profile" sheet:
 *        Profile      — for every row with a real phrase: Impressions · Clicks · Position (28 days) · Numbers as of.
 *                       "not listed" when Google showed nothing for that phrase. The Change column (your formula) is
 *                       never touched. A row whose Status is "indexing requested" becomes "indexed" the first time
 *                       its page shows an impression — Google showed it, so it is indexed.
 *        Monthly log  — one row per phrase for this month (month · phrase · impressions · clicks · position).
 *                       A re-run in the same month replaces that month's rows instead of doubling them.
 *        Pages        — one row per page Google showed this month (page · impressions · clicks · position · month).
 *        Queries seen — every search that showed one of our pages this month, with the page it showed. This is
 *                       where the phrases men actually type turn up — the "to find" rows get filled from here.
 *   3. Flags any phrase that lost 3 or more places since last month, and any page that lost half its impressions.
 *   4. Writes one Actions row on the Front Desk sheet (key refresh:YYYY-MM, rule R13) — it stays open until someone
 *      ticks it done — and sends John one plain email: one line of numbers, the slips if any, the sheet address alone
 *      on its own line.
 *
 * What it does not do: look at Google's results page for who else ranks. That stays a Claude in Chrome run
 * (the "Who else ranks" column carries the date it was last looked at).
 *
 * Settings live on the sheet's Config tab (made by setup), not in this file.
 *
 * INSTALL (once):  new Apps Script project in the john@ancientpathcoaching.com account, named
 *   "Ancient Path - Search refresh" · paste this file over Code.gs · Project Settings → tick "Show appsscript.json"
 *   → paste the manifest from the end of this file over it · run  setup  once and allow it · read the log.
 */

const SR = {
  BUILD: 2,
  SHEET_ID: '1V84E1Wg33DaI89wAP0GvDR5iHQX3ZFsM3kRzu1LatCE',            // Ancient Path — Search profile
  FRONT_DESK_SHEET_ID: '1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw', // Ancient Path — Front Desk (Actions tab)
  TZ: 'America/Chicago',
  TABS: {
    Config:        ['setting', 'value', 'what it does'],
    Pages:         ['month', 'page', 'impressions', 'clicks', 'position', 'numbers as of'],
    'Queries seen':['month', 'search', 'impressions', 'clicks', 'position', 'page it showed', 'numbers as of'],
  },
  CONFIG: [
    ['property', 'https://www.ancientpathcoaching.com/', 'The Search Console property to read. setup lists the ones this account can see; if the www one answers 403, try sc-domain:ancientpathcoaching.com'],
    ['days', '28', 'How many days of numbers to read (the Profile column says 28)'],
    ['lag days', '3', 'Search Console runs behind; the window ends this many days before the run'],
    ['slip places', '3', 'A phrase that lost this many places or more since last month is flagged'],
    ['email to', 'john@ancientpathcoaching.com', 'Who gets the one-line summary'],
    ['front desk actions', 'yes', 'yes / no — write a refresh: row on the Front Desk Actions tab'],
    ['run day', '2', 'Day of the month the refresh runs (6:00 AM Central). Change it, then run setup again'],
  ],
};

/* ============================ setup, once ============================ */

function setup() {
  const ss = SpreadsheetApp.openById(SR.SHEET_ID);
  Object.keys(SR.TABS).forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) { sh = ss.insertSheet(name); }
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, SR.TABS[name].length).setValues([SR.TABS[name]]).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
  });
  const cfgSheet = ss.getSheetByName('Config');
  const have = new Set(rows_(cfgSheet).map(r => String(r['setting'])));
  const add = SR.CONFIG.filter(c => !have.has(c[0]));
  if (add.length) append_(cfgSheet, add);

  // The timer: one, on the run day, 6:00 AM Central.
  ScriptApp.getProjectTriggers().forEach(t => { if (t.getHandlerFunction() === 'refreshSearch') ScriptApp.deleteTrigger(t); });
  const day = Number(config_().runDay) || 2;
  ScriptApp.newTrigger('refreshSearch').timeBased().onMonthDay(day).atHour(6).inTimezone(SR.TZ).create();

  // Which properties can this account see? (Written to the log so the "property" setting can be checked.)
  const sites = listSites_();
  Logger.log('Search refresh build ' + SR.BUILD + ' is up. Runs on day ' + day + ' at 6:00 AM Central.');
  Logger.log('Search Console properties this account can read: ' + (sites.length ? sites.join(' · ') : 'none — add john@ancientpathcoaching.com to the property in Search Console'));
  Logger.log('Sheet: https://docs.google.com/spreadsheets/d/' + SR.SHEET_ID);
}

/** Answers from the Search Console API without touching any sheet — run this first if something looks wrong. */
function ping() {
  const sites = listSites_();
  Logger.log('build ' + SR.BUILD + ' · properties: ' + (sites.length ? sites.join(' · ') : 'none'));
  const cfg = config_();
  const w = window_(cfg);
  const q = queryRows_(cfg.property, w, ['query'], 5);
  Logger.log('property ' + cfg.property + ' · ' + w.start + ' to ' + w.end + ' · top searches: ' +
    (q.length ? q.map(r => r.keys[0] + ' (' + r.impressions + ')').join(' · ') : 'none shown'));
}

/* ============================ the refresh ============================ */

function refreshSearch() {
  const cfg = config_();
  const ss = SpreadsheetApp.openById(SR.SHEET_ID);
  const now = new Date();
  const month = Utilities.formatDate(now, SR.TZ, 'MMM yyyy');       // "Nov 2026" — the month the numbers were read
  const monthKey = Utilities.formatDate(now, SR.TZ, 'yyyy-MM');
  const asOf = Utilities.formatDate(now, SR.TZ, 'yyyy-MM-dd');
  const w = window_(cfg);

  // 1. Search Console, two reads: every search, every page.
  const queries = queryRows_(cfg.property, w, ['query'], 5000);
  const pages = queryRows_(cfg.property, w, ['page'], 1000);
  const queryPage = queryRows_(cfg.property, w, ['query', 'page'], 5000);
  const byQuery = new Map(queries.map(r => [norm_(r.keys[0]), r]));
  const byPage = new Map(pages.map(r => [normUrl_(r.keys[0]), r]));

  // 2. Profile: numbers for every real phrase.
  const sh = ss.getSheetByName('Profile');
  const H = headerIndex_(sh);
  const data = sh.getDataRange().getValues();
  const lastMonth = lastMonthByPhrase_(ss, monthKey);
  const logRows = [];
  const slips = [];
  let phrases = 0, listed = 0, newlyIndexed = 0;
  let changed = 0;

  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    const phrase = String(row[H['phrase']] || '').trim();
    if (!phrase || /^(to find|to assign)$/i.test(phrase)) continue;
    phrases++;
    const hit = byQuery.get(norm_(phrase));
    const imp = hit ? hit.impressions : 'not listed';
    const clk = hit ? hit.clicks : 'not listed';
    const pos = hit ? round1_(hit.position) : 'not listed';
    if (hit) listed++;
    row[H['impressions']] = imp; row[H['clicks']] = clk; row[H['position (28 days)']] = pos; row[H['numbers as of']] = asOf;

    // Status: indexing requested → indexed, the first time the page shows an impression.
    const addr = String(row[H['address']] || '').trim();
    const pageHit = addr ? byPage.get(normUrl_(addr)) : null;
    if (pageHit && /^indexing requested$/i.test(String(row[H['status']] || ''))) { row[H['status']] = 'indexed'; newlyIndexed++; }

    // Slip: lost 3+ places since last month's log row.
    const prev = lastMonth.get(norm_(phrase));
    if (hit && prev && typeof prev.position === 'number' && hit.position - prev.position >= cfg.slipPlaces) {
      slips.push(phrase + ' — ' + round1_(prev.position) + ' to ' + round1_(hit.position));
    }
    logRows.push([month, phrase, imp, clk, pos]);
    changed++;
  }
  // Write the Profile numbers back: four columns only, never the Change formula.
  if (data.length > 1) {
    ['impressions', 'clicks', 'position (28 days)', 'numbers as of', 'status'].forEach(col => {
      const c = H[col];
      if (c === undefined) return;
      sh.getRange(2, c + 1, data.length - 1, 1).setValues(data.slice(1).map(row => [row[c]]));
    });
  }

  // 3. Monthly log: this month's rows, replacing any earlier run this month.
  const log = ss.getSheetByName('Monthly log');
  dropMonth_(log, month);
  if (logRows.length) append_(log, logRows);

  // 4. Pages and Queries seen: this month's rows, replacing any earlier run this month.
  const pg = ss.getSheetByName('Pages');
  dropMonth_(pg, month);
  const pageRows = pages.map(p => [month, p.keys[0], p.impressions, p.clicks, round1_(p.position), asOf]);
  if (pageRows.length) append_(pg, pageRows);
  const pageSlips = pageSlips_(ss, month, monthKey);

  const qs = ss.getSheetByName('Queries seen');
  dropMonth_(qs, month);
  const qRows = queryPage.map(q => [month, q.keys[0], q.impressions, q.clicks, round1_(q.position), q.keys[1], asOf]);
  if (qRows.length) append_(qs, qRows);

  // 5. The one line.
  const site = sumBy_(pages);
  const line = month + ': ' + site.impressions + ' impressions and ' + site.clicks + ' clicks across ' + pages.length + ' pages; ' +
    listed + ' of ' + phrases + ' phrases on the profile were shown' + (newlyIndexed ? '; ' + newlyIndexed + ' newly indexed' : '') +
    '; ' + queryPage.length + ' searches seen' + (slips.length || pageSlips.length ? '; ' + (slips.length + pageSlips.length) + ' slipped' : '; nothing slipped') + '.';
  Logger.log(line);
  if (slips.length) Logger.log('Slipped phrases: ' + slips.join(' · '));
  if (pageSlips.length) Logger.log('Pages down by half: ' + pageSlips.join(' · '));

  if (/^yes$/i.test(cfg.frontDeskActions)) writeAction_(monthKey, line, slips.concat(pageSlips), now);
  email_(cfg, month, line, slips, pageSlips);
}

/* ============================ Search Console ============================ */

function window_(cfg) {
  const end = new Date(); end.setDate(end.getDate() - cfg.lagDays);
  const start = new Date(end); start.setDate(start.getDate() - (cfg.days - 1));
  return { start: Utilities.formatDate(start, SR.TZ, 'yyyy-MM-dd'), end: Utilities.formatDate(end, SR.TZ, 'yyyy-MM-dd') };
}

function listSites_() {
  const res = UrlFetchApp.fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) { Logger.log('sites: ' + res.getResponseCode() + ' ' + res.getContentText().slice(0, 300)); return []; }
  const j = JSON.parse(res.getContentText());
  return (j.siteEntry || []).map(s => s.siteUrl + ' (' + s.permissionLevel + ')');
}

/** Rows from Search Console for the window: [{keys:[...], clicks, impressions, ctr, position}]. */
function queryRows_(property, w, dimensions, limit) {
  const url = 'https://www.googleapis.com/webmasters/v3/sites/' + encodeURIComponent(property) + '/searchAnalytics/query';
  const body = { startDate: w.start, endDate: w.end, dimensions: dimensions, rowLimit: limit, dataState: 'final' };
  const res = UrlFetchApp.fetch(url, { method: 'post', contentType: 'application/json', payload: JSON.stringify(body),
    headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) {
    throw new Error('Search Console answered ' + res.getResponseCode() + ' for ' + property + ': ' + res.getContentText().slice(0, 300) +
      ' — check the "property" setting on Config (run setup to list the properties this account can read).');
  }
  return JSON.parse(res.getContentText()).rows || [];
}

/* ============================ sheet helpers ============================ */

function config_() {
  const sh = SpreadsheetApp.openById(SR.SHEET_ID).getSheetByName('Config');
  const m = {};
  (sh ? rows_(sh) : []).forEach(r => { m[String(r['setting']).trim().toLowerCase()] = String(r['value']).trim(); });
  const d = (k) => (SR.CONFIG.find(c => c[0] === k) || [])[1];
  return {
    property: m['property'] || d('property'),
    days: Number(m['days'] || d('days')),
    lagDays: Number(m['lag days'] || d('lag days')),
    slipPlaces: Number(m['slip places'] || d('slip places')),
    emailTo: m['email to'] || d('email to'),
    frontDeskActions: m['front desk actions'] || d('front desk actions'),
    runDay: m['run day'] || d('run day'),
  };
}

/** Last month's position per phrase, from the Monthly log (the newest month that is not this one). */
function lastMonthByPhrase_(ss, thisMonthKey) {
  const log = ss.getSheetByName('Monthly log');
  const out = new Map();
  if (!log) return out;
  const rowsL = rows_(log);
  let best = '';
  rowsL.forEach(r => { const k = monthKey_(r['month']); if (k && k < thisMonthKey && k > best) best = k; });
  if (!best) return out;
  rowsL.forEach(r => {
    if (monthKey_(r['month']) !== best) return;
    const p = Number(r['position']);
    out.set(norm_(r['phrase']), { position: isNaN(p) ? r['position'] : p, impressions: r['impressions'] });
  });
  return out;
}

/** Pages whose impressions fell to half or less of last month's. */
function pageSlips_(ss, month, thisMonthKey) {
  const pg = ss.getSheetByName('Pages');
  const all = rows_(pg);
  let best = '';
  all.forEach(r => { const k = monthKey_(r['month']); if (k && k < thisMonthKey && k > best) best = k; });
  if (!best) return [];
  const prev = new Map(all.filter(r => monthKey_(r['month']) === best).map(r => [normUrl_(r['page']), Number(r['impressions']) || 0]));
  const out = [];
  all.filter(r => String(r['month']) === month).forEach(r => {
    const was = prev.get(normUrl_(r['page']));
    const is = Number(r['impressions']) || 0;
    if (was >= 10 && is <= was / 2) out.push(String(r['page']).replace(/^https?:\/\/www\.ancientpathcoaching\.com/, '') + ' — ' + was + ' to ' + is + ' impressions');
  });
  return out;
}

function monthKey_(v) {
  // A sheet date is midnight in the SHEET's clock (this one keeps GMT); read it at noon so no time zone can slide it a day.
  if (v instanceof Date) return Utilities.formatDate(new Date(v.getTime() + 12 * 3600 * 1000), SR.TZ, 'yyyy-MM');
  const s = String(v || '').trim();
  const m = s.match(/^([A-Za-z]{3})[a-z]*\s+(\d{4})$/);
  if (!m) return '';
  const i = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'].indexOf(m[1].toLowerCase().slice(0, 3));
  return i < 0 ? '' : m[2] + '-' + String(i + 1).padStart(2, '0');
}

function dropMonth_(sh, month) {
  if (!sh) return;
  const data = sh.getDataRange().getValues();
  for (let r = data.length - 1; r >= 1; r--) {
    if (monthKey_(data[r][0]) === monthKey_(month)) sh.deleteRow(r + 1);
  }
}

function headerIndex_(sh) {
  const H = {};
  sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].forEach((h, i) => { H[String(h).trim().toLowerCase()] = i; });
  return H;
}
function rows_(sh) {
  if (!sh || sh.getLastRow() < 2) return [];
  const v = sh.getDataRange().getValues();
  const head = v[0].map(h => String(h).trim().toLowerCase());
  return v.slice(1).map(r => { const o = {}; head.forEach((h, i) => { o[h] = r[i]; }); return o; });
}
function append_(sh, rows) {
  if (!rows.length) return;
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}
function norm_(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
function normUrl_(u) { return String(u || '').toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/[?#].*$/, '').replace(/\/+$/, ''); }
function round1_(n) { return Math.round(Number(n) * 10) / 10; }
function sumBy_(rows) { return rows.reduce((a, r) => ({ impressions: a.impressions + r.impressions, clicks: a.clicks + r.clicks }), { impressions: 0, clicks: 0 }); }

/* ============================ the Front Desk row and the email ============================ */

function writeAction_(monthKey, line, slips, now) {
  const ss = SpreadsheetApp.openById(SR.FRONT_DESK_SHEET_ID);
  const sh = ss.getSheetByName('Actions');
  if (!sh) { Logger.log('Front Desk sheet has no Actions tab; no row written.'); return; }
  const H = headerIndex_(sh);
  const key = 'refresh:' + monthKey;
  const data = sh.getDataRange().getValues();
  const width = sh.getLastColumn();
  const link = 'https://docs.google.com/spreadsheets/d/' + SR.SHEET_ID + '/edit';
  const doThis = 'Read the search refresh' + (slips.length ? ' — ' + slips.length + ' slipped' : '');
  for (let r = 1; r < data.length; r++) {
    if (String(data[r][H['key']]).trim() === key) {   // same month again: refresh the words, keep its status
      const row = data[r];
      row[H['do this']] = doThis; row[H['because']] = line.slice(0, 300); row[H['link']] = link;
      sh.getRange(r + 1, 1, 1, width).setValues([row]);
      return;
    }
  }
  const row = new Array(width).fill('');
  row[H['key']] = key; row[H['first seen']] = now; row[H['owner']] = 'John'; row[H['do this']] = doThis;
  row[H['for']] = 'Search profile'; row[H['because']] = line.slice(0, 300); row[H['link']] = link;
  row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['rule']] = 'R13';
  sh.getRange(sh.getLastRow() + 1, 1, 1, width).setValues([row]);
}

function email_(cfg, month, line, slips, pageSlips) {
  if (!cfg.emailTo) return;
  const parts = [line];
  if (slips.length) parts.push('', 'Phrases that slipped:', slips.join('\n'));
  if (pageSlips.length) parts.push('', 'Pages down by half:', pageSlips.join('\n'));
  parts.push('', 'The sheet:', 'https://docs.google.com/spreadsheets/d/' + SR.SHEET_ID + '/edit', '', 'Search refresh · build ' + SR.BUILD);
  MailApp.sendEmail({ to: cfg.emailTo, subject: 'Search refresh — ' + month, body: parts.join('\n') });
}

/* ============================ appsscript.json ============================
Paste this over the manifest (Project Settings → Show "appsscript.json" in editor):

{
  "timeZone": "America/Chicago",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/script.send_mail",
    "https://www.googleapis.com/auth/script.scriptapp"
  ]
}
============================================================================ */
