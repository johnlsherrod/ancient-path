/**
 * Ancient Path — ActiveCampaign bridge (Google Apps Script)  v2.1, Oct 30, 2026 (campaign_create fixed)
 *
 * Two jobs, one script, one sheet ("Ancient Path — AC count"):
 *   1. THE COUNT  — runCount() reads ActiveCampaign every Friday 6:00 AM Central and writes the
 *                   "latest" and "history" tabs. The Friday scorecard reads them.
 *   2. THE QUEUE  — processQueue() runs every 5 minutes, picks up rows on the "queue" tab with
 *                   status "new", does the work against the ActiveCampaign API, and writes the
 *                   result back. This is how a cloud run builds campaigns, moves tags and creates
 *                   contacts without a computer, without the connector, and without the key.
 *
 * STANDING RULES built into the queue (John's rulings):
 *   - A send to a list never happens on its own. campaign_create builds and schedules a DRAFT and
 *     stops; only campaign_go (queued after John says "go" in chat) enables it.
 *   - A message with a placeholder ([N], [phone], {{ }}, TODO) is refused, never sent.
 *   - Every link to ancientpathcoaching.com gets the house UTM string if it lacks one.
 *   - Tags set by the queue are the ones a form or a hand would set; nothing here reads clicks.
 *
 * UPGRADE FROM v1: paste this whole file over Code.gs, Save, then run setupTrigger once more
 * (it replaces the old trigger and adds the 5-minute queue trigger). Script Properties
 * AC_URL and AC_KEY stay as they are.
 *
 * FIRST-TIME SETUP: see v1 notes — script.google.com → New project "Ancient Path — AC count" →
 * paste → Project Settings → Script Properties AC_URL + AC_KEY → run runCount (approve) → run setupTrigger.
 */

var SPREADSHEET_ID = '1VE7ouQQwiG9A-M49nFATwVCpcG6qJSITaWWmE1AwLeM';
var WINDOW_DAYS = 7;
var CAMPAIGN_DAYS = 14;
var CELL_LIMIT = 45000; // Sheets allows 50,000 characters per cell
var SITE_HOST = 'ancientpathcoaching.com';

var STAGE_TAGS = {
  men: { hand_raised: 'BF: Hand raised', wait_list: 'BF: Waitlist', in_conversation: 'BF: In conversation', seated: 'BF: Seated', not_this_cohort: 'BF: Not this cohort' },
  churches: { has_program: 'Church: has-program', no_program: 'Church: no-program', referred: 'Church: referred', not_us: 'Church: not us' }
};

/* ======================= triggers ======================= */

function setupTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    var f = t.getHandlerFunction();
    if (f === 'runCount' || f === 'processQueue') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('runCount').timeBased().onWeekDay(ScriptApp.WeekDay.FRIDAY).atHour(6).inTimezone('America/Chicago').create();
  ScriptApp.newTrigger('processQueue').timeBased().everyMinutes(5).create();
  ensureQueueTab();
  Logger.log('Triggers set: runCount every Friday 6 AM Central; processQueue every 5 minutes.');
}

/* ======================= ActiveCampaign API ======================= */

function ac() {
  var props = PropertiesService.getScriptProperties();
  var url = (props.getProperty('AC_URL') || '').replace(/\/+$/, '');
  var key = props.getProperty('AC_KEY') || '';
  if (!url || !key) throw new Error('Script Properties AC_URL and AC_KEY are not set.');
  function call(method, path, params, body) {
    var q = [];
    for (var k in (params || {})) q.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k]));
    var full = url + '/api/3/' + path + (q.length ? '?' + q.join('&') : '');
    var opts = { method: method, headers: { 'Api-Token': key, 'Accept': 'application/json' }, muteHttpExceptions: true };
    if (body !== undefined) { opts.contentType = 'application/json'; opts.payload = JSON.stringify(body); }
    var res = (method === 'get')   // a read is safe to try again; a write is never repeated, because the first try may have landed
      ? withRetry_(function () { var r0 = UrlFetchApp.fetch(full, opts); if (r0.getResponseCode() >= 500) throw new Error('ActiveCampaign API ' + r0.getResponseCode() + ' (server error)'); return r0; }, 'ActiveCampaign')
      : UrlFetchApp.fetch(full, opts);
    var code = res.getResponseCode(), txt = res.getContentText();
    if (code >= 400) throw new Error('ActiveCampaign API ' + code + ' on ' + method + ' ' + path + ': ' + txt.slice(0, 300));
    try { return txt ? JSON.parse(txt) : {}; } catch (e) { return { raw: txt }; }
  }
  return {
    get: function (path, params) { return call('get', path, params); },
    post: function (path, body) { return call('post', path, null, body); },
    put: function (path, body) { return call('put', path, null, body); },
    del: function (path) { return call('delete', path); },
    all: function (path, key_, params) {
      var items = [], offset = 0, total = null;
      while (true) {
        var p = {}; for (var k in (params || {})) p[k] = params[k];
        p.limit = 100; p.offset = offset;
        var data = call('get', path, p);
        var batch = data[key_] || [];
        items = items.concat(batch);
        if (total === null) total = parseInt((data.meta && data.meta.total) || batch.length, 10) || 0;
        offset += 100;
        if (!batch.length || offset >= total) break;
      }
      return { items: items, total: total === null ? items.length : total };
    }
  };
}

function nameOf(c) { var n = [c.firstName, c.lastName].filter(function (x) { return x; }).join(' ').trim(); return n || c.email || ''; }
function parseTs(s) { if (!s) return null; var d = new Date(s); return isNaN(d.getTime()) ? null : d; }

/* ======================= THE COUNT ======================= */

function runCount() { return triGuard_('Weekly count', 'count', runCount_); }

function runCount_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var report;
  try { report = withRetry_(buildReport, 'Weekly count'); }
  catch (e) { report = { generated: new Date().toISOString(), error: String(e && e.message ? e.message : e) }; triage_('Weekly count', e); }
  writeLatest(ss.getSheetByName('latest'), report);
  appendHistory(ss.getSheetByName('history'), report);
  Logger.log(report.error ? 'Count failed: ' + report.error : 'Count written.');
}

function buildReport() {
  var api = ac();
  var now = new Date();
  var since = new Date(now.getTime() - WINDOW_DAYS * 86400000);
  var sinceDate = since.toISOString().slice(0, 10);
  var report = { generated: now.toISOString(), window_days: WINDOW_DAYS, since: sinceDate };

  var tags = api.all('tags', 'tags').items;
  var wanted = tags.filter(function (t) { return t.tag === 'Church' || /^(BF:|Church:|Opt-in:|Partner:)/.test(t.tag); });
  var tagByName = {}, tagCounts = {}, contactsOn = {};
  wanted.forEach(function (t) {
    tagByName[t.tag] = t;
    var r = api.all('contacts', 'contacts', { tagid: t.id, status: -1 });
    tagCounts[t.tag] = r.total; contactsOn[t.tag] = r.items;
  });
  report.tags = tagCounts;

  var grand = api.all('contacts', 'contacts', { status: -1 });
  var churchTotal = tagCounts['Church'] || 0;
  var churchAny = {}, menLater = {};
  Object.keys(STAGE_TAGS.churches).forEach(function (k) { (contactsOn[STAGE_TAGS.churches[k]] || []).forEach(function (c) { churchAny[c.id] = 1; }); });
  Object.keys(STAGE_TAGS.men).forEach(function (k) { (contactsOn[STAGE_TAGS.men[k]] || []).forEach(function (c) { menLater[c.id] = 1; }); });
  var partnerOnly = (contactsOn['Partner: prospect'] || []).filter(function (c) { return !(contactsOn['Church'] || []).some(function (x) { return x.id === c.id; }); }).length;
     var men = { on_the_list: (grand.total - churchTotal - partnerOnly) - Object.keys(menLater).length };
  Object.keys(STAGE_TAGS.men).forEach(function (k) { men[k] = tagCounts[STAGE_TAGS.men[k]] || 0; });
  var churches = { no_reply: churchTotal - Object.keys(churchAny).length };
  Object.keys(STAGE_TAGS.churches).forEach(function (k) { churches[k] = tagCounts[STAGE_TAGS.churches[k]] || 0; });
  report.stages = { men: men, churches: churches, contacts_total: grand.total };

  var movement = [];
  Object.keys(STAGE_TAGS.men).forEach(function (k) { movement.push(STAGE_TAGS.men[k]); });
  Object.keys(STAGE_TAGS.churches).forEach(function (k) { movement.push(STAGE_TAGS.churches[k]); });
  var carrying = [], newly = [];
  movement.forEach(function (name) {
    var t = tagByName[name]; if (!t) return;
    (contactsOn[name] || []).forEach(function (c) {
      var ct = (api.get('contacts/' + c.id + '/contactTags').contactTags) || [];
      var added = null;
      ct.forEach(function (x) { if (String(x.tag) === String(t.id)) added = parseTs(x.cdate); });
      var entry = { name: nameOf(c), email: c.email, tag: name, tag_added: added ? added.toISOString() : null };
      carrying.push(entry);
      if (added && added >= since) {
        var acts = (api.get('activities', { contact: c.id, limit: 100 }).activities) || [];
        var e2 = JSON.parse(JSON.stringify(entry));
        e2.activity_in_window = acts.filter(function (a) { var d = parseTs(a.tstamp); return !d || d >= since; })
          .map(function (a) { return { when: a.tstamp, type: a.reference_type, action: a.reference_action }; });
        e2.has_form_submission = acts.some(function (a) { return /^(form|forms|subscription)$/i.test(a.reference_type || ''); });
        newly.push(e2);
      }
    });
  });
  report.carrying_tags = carrying; report.newly_tagged = newly;

  var created = api.all('contacts', 'contacts', { status: -1, 'filters[created_after]': sinceDate });
  report.created = { count: created.total, contacts: created.items.map(function (c) { return { name: nameOf(c), email: c.email, created: c.cdate }; }) };

  var unsubs = api.all('contacts', 'contacts', { status: 2, 'orders[udate]': 'DESC' }).items;
  var recent = unsubs.filter(function (c) { var d = parseTs(c.udate); return d && d >= since; });
  report.unsubscribed = { count: recent.length, all_time: unsubs.length, contacts: recent.map(function (c) { return { name: nameOf(c), email: c.email, updated: c.udate }; }) };

  var camps = api.all('campaigns', 'campaigns', { 'orders[sdate]': 'DESC' }).items;
  var cSince = new Date(now.getTime() - CAMPAIGN_DAYS * 86400000);
  report.campaigns = camps.filter(function (c) { var d = parseTs(c.sdate) || parseTs(c.ldate); return d && d >= cSince; })
    .map(function (c) {
      return { id: c.id, name: c.name, status: c.status, sent_or_scheduled: c.sdate,
        sent: parseInt(c.send_amt || 0, 10), unique_opens: parseInt(c.uniqueopens || 0, 10),
        unsubscribes: parseInt(c.unsubscribes || 0, 10),
        bounces: parseInt(c.hardbounces || 0, 10) + parseInt(c.softbounces || 0, 10),
        unique_clicks_WEATHER_NOT_DECISIONS: parseInt(c.uniquelinkclicks || 0, 10) };
    });

  report.forms = api.all('forms', 'forms').items.map(function (f) { return { id: f.id, name: f.name, entries_all_time: parseInt(f.entries || 0, 10) }; });
  return report;
}

function cellText(v) {
  var s = (v === undefined || v === null) ? '' : (typeof v === 'string' ? v : JSON.stringify(v));
  if (s.length > CELL_LIMIT) s = s.slice(0, CELL_LIMIT - 40) + ' …[cut: over the cell limit]';
  return s;
}

function writeLatest(sheet, r) {
  var rows = [
    ['generated', r.generated || ''], ['window_days', r.window_days || ''], ['since', r.since || ''],
    ['stages', cellText(r.stages)], ['tags', cellText(r.tags)], ['newly_tagged', cellText(r.newly_tagged)],
    ['carrying_tags', cellText(r.carrying_tags)], ['created', cellText(r.created)], ['unsubscribed', cellText(r.unsubscribed)],
    ['campaigns', cellText(r.campaigns)], ['forms', cellText(r.forms)], ['error', r.error || '']
  ];
  sheet.getRange(2, 1, rows.length, 2).setValues(rows);
}

function appendHistory(sheet, r) {
  var s = r.stages || { men: {}, churches: {} };
  sheet.appendRow([
    r.generated || '', r.since || '',
    s.men.on_the_list, s.men.hand_raised, s.men.wait_list, s.men.in_conversation, s.men.seated, s.men.not_this_cohort,
    s.churches.no_reply, s.churches.has_program, s.churches.no_program, s.churches.referred, s.churches.not_us,
    r.created ? r.created.count : '', r.unsubscribed ? r.unsubscribed.count : '', r.error || ''
  ]);
}

/* ======================= THE QUEUE ======================= */

var QUEUE_HEADER = ['id', 'created', 'action', 'params', 'status', 'result', 'ran_at'];

function ensureQueueTab() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var q = ss.getSheetByName('queue');
  if (!q) { q = ss.insertSheet('queue'); q.setFrozenRows(1); }
  if (q.getLastRow() === 0 || q.getRange(1, 1).getValue() !== 'id') q.getRange(1, 1, 1, QUEUE_HEADER.length).setValues([QUEUE_HEADER]);
  return q;
}

function processQueue() { return triGuard_('Queue run', 'queue', processQueue_); }

function processQueue_() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return; // another run is working the queue
  try {
    var q = ensureQueueTab();
    var last = q.getLastRow();
    if (last < 2) return;
    var rows = q.getRange(2, 1, last - 1, QUEUE_HEADER.length).getValues();
    rows.forEach(function (row, i) {
      if (String(row[4]).trim().toLowerCase() !== 'new') return;
      var r = i + 2, result;
      q.getRange(r, 5).setValue('running');
      SpreadsheetApp.flush();
      try {
        var params = row[3] ? JSON.parse(row[3]) : {};
        result = runAction(String(row[2]).trim(), params);
        q.getRange(r, 5, 1, 3).setValues([['done', cellText(result), new Date().toISOString()]]);
      } catch (e) {
        q.getRange(r, 5, 1, 3).setValues([['error', String(e && e.message ? e.message : e), new Date().toISOString()]]);
        triage_('Queue action ' + String(row[2]).trim(), e);   // sorted: a hiccup waits, a defect is one Front Desk card; the row keeps its error for the caller
      }
    });
  } finally { lock.releaseLock(); }
}

/** The actions a cloud run may queue. params is the JSON in column D. */
function runAction(action, p) {
  var api = ac();
  switch (action) {
    case 'ping': return { ok: true, account: api.get('users/me').user ? 'reachable' : 'reachable' };
    case 'lists': return api.all('lists', 'lists').items.map(function (l) { return { id: l.id, name: l.name }; });
    case 'segments': return api.all('segments', 'segments').items.map(function (s) { return { id: s.id, name: s.name }; });
    case 'tags': return api.all('tags', 'tags').items.map(function (t) { return { id: t.id, tag: t.tag }; });
    case 'fields': return api.all('fields', 'fields').items.map(function (f) { return { id: f.id, title: f.title, perstag: f.perstag }; });
    case 'automations': return api.all('automations', 'automations').items.map(function (a) { return { id: a.id, name: a.name, status: a.status }; });
    case 'addresses': return api.all('addresses', 'addresses').items.map(function (a) { return { id: a.id, company: a.companyName, address: a.address1 }; });
    case 'campaigns_list': return api.all('campaigns', 'campaigns', { 'orders[sdate]': 'DESC' }).items.slice(0, p.limit || 30)
      .map(function (c) { return { id: c.id, name: c.name, status: c.status, sdate: c.sdate, sent: c.send_amt }; });
    case 'contact_find': return findContacts(api, p);
    case 'contact_upsert': return contactUpsert(api, p);
    case 'tag_add': return tagAdd(api, p);
    case 'tag_remove': return tagRemove(api, p);
    case 'note_add': return noteAdd(api, p);
    case 'automation_add': return automationAdd(api, p);
    case 'campaign_create': return campaignCreate(api, p);
    case 'campaign_edit': return campaignEdit(api, p);
    case 'campaign_test': return campaignTest(api, p);
    case 'campaign_go': return campaignGo(api, p);
    case 'message_edit': return messageEdit(api, p);
    case 'count_now': runCount(); return { ok: true, note: 'latest tab rewritten' };
    default: throw new Error('Unknown action "' + action + '"');
  }
}

/* ---- contacts and tags ---- */

function need(p, keys) { keys.forEach(function (k) { if (p[k] === undefined || p[k] === null || p[k] === '') throw new Error('params.' + k + ' is required'); }); }

function findContacts(api, p) {
  need(p, ['email']);
  return (api.get('contacts', { email: p.email, status: -1 }).contacts || []).map(function (c) { return { id: c.id, name: nameOf(c), email: c.email, status: c.status, created: c.cdate }; });
}

function contactByEmail(api, email) {
  var list = api.get('contacts', { email: email, status: -1 }).contacts || [];
  if (!list.length) throw new Error('No contact with email ' + email);
  return list[0];
}

function tagByName(api, name, createIfMissing) {
  var hits = (api.get('tags', { search: name }).tags || []).filter(function (t) { return t.tag === name; });
  if (hits.length) return hits[0];
  if (!createIfMissing) throw new Error('No tag named "' + name + '"');
  return api.post('tags', { tag: { tag: name, tagType: 'contact', description: '' } }).tag;
}

function tagAdd(api, p) {
  need(p, ['email', 'tag']);
  var c = contactByEmail(api, p.email);
  var t = tagByName(api, p.tag, !!p.create_tag);
  var r = api.post('contactTags', { contactTag: { contact: c.id, tag: t.id } });
  return { contact: nameOf(c), tag: t.tag, contactTag: r.contactTag && r.contactTag.id };
}

function tagRemove(api, p) {
  need(p, ['email', 'tag']);
  var c = contactByEmail(api, p.email);
  var t = tagByName(api, p.tag, false);
  var ct = (api.get('contacts/' + c.id + '/contactTags').contactTags || []).filter(function (x) { return String(x.tag) === String(t.id); });
  if (!ct.length) return { contact: nameOf(c), tag: t.tag, note: 'was not on the contact' };
  ct.forEach(function (x) { api.del('contactTags/' + x.id); });
  return { contact: nameOf(c), tag: t.tag, removed: ct.length };
}

function contactUpsert(api, p) {
  need(p, ['email']);
  var body = { contact: { email: p.email } };
  ['firstName', 'lastName', 'phone'].forEach(function (k) { if (p[k] !== undefined) body.contact[k] = p[k]; });
  if (p.fields) body.contact.fieldValues = Object.keys(p.fields).map(function (id) { return { field: id, value: p.fields[id] }; });
  var c = api.post('contact/sync', body).contact;
  var out = { id: c.id, email: c.email, name: nameOf(c) };
  (p.lists || []).forEach(function (listId) { api.post('contactLists', { contactList: { list: listId, contact: c.id, status: 1 } }); });
  (p.tags || []).forEach(function (name) { var t = tagByName(api, name, !!p.create_tags); api.post('contactTags', { contactTag: { contact: c.id, tag: t.id } }); });
  out.lists = p.lists || []; out.tags = p.tags || [];
  return out;
}

function noteAdd(api, p) {
  need(p, ['email', 'note']);
  var c = contactByEmail(api, p.email);
  var r = api.post('notes', { note: { note: p.note, relid: c.id, reltype: 'Subscriber' } });
  return { contact: nameOf(c), note: r.note && r.note.id };
}

function automationAdd(api, p) {
  need(p, ['email', 'automationId']);
  var c = contactByEmail(api, p.email);
  var r = api.post('contactAutomations', { contactAutomation: { contact: c.id, automation: p.automationId } });
  return { contact: nameOf(c), automation: p.automationId, contactAutomation: r.contactAutomation && r.contactAutomation.id };
}

/* ---- campaigns ---- */

var PLACEHOLDER = /\[[A-Za-z][^\]\n]{0,40}\](?!\()|\{\{|\bTODO\b|\bTK\b|\bXXX\b/;

function guardCopy(label, s) {
  if (s && PLACEHOLDER.test(s)) throw new Error('Placeholder found in ' + label + ': ' + s.match(PLACEHOLDER)[0] + ' — refused. Write copy that is true on the day (no blanks to fill).');
}

/** Append the house UTM string to every ancientpathcoaching.com link that lacks one. */
function addUtms(html, slug) {
  var n = 0;
  return html.replace(/href="(https?:\/\/(?:www\.)?ancientpathcoaching\.com[^"]*)"/g, function (m, url) {
    if (/utm_/.test(url)) return m;
    n++;
    var hash = '', u = url, i = url.indexOf('#');
    if (i >= 0) { hash = url.slice(i); u = url.slice(0, i); }
    var path = u.replace(/^https?:\/\/(?:www\.)?ancientpathcoaching\.com/, '').split('?')[0].replace(/^\/+|\/+$/g, '') || 'home';
    var content = (path.split('/').pop() || 'link').replace(/[^a-z0-9-]/gi, '-').toLowerCase();
    var sep = u.indexOf('?') >= 0 ? '&' : '?';
    return 'href="' + u + sep + 'utm_source=activecampaign&utm_medium=email&utm_campaign=' + slug + '&utm_content=' + content + '-' + n + hash + '"';
  });
}

function htmlToText(html) {
  return html.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * campaign_create params:
 *   name, subject, preheader, html, slug (utm_campaign, e.g. m6_seat_email)
 *   fromname (default "Jason Posey"), fromemail (default jason@ancientpathcoaching.com), reply2 (default fromemail)
 *   listIds [ints] and/or segmentId, scheduledDate "2026-10-07T07:30:00-05:00" (Central), addressId (optional)
 *   replyTracking (default true), testTo (optional: send a test to this address after building)
 * Builds a DRAFT with its send date set. It does NOT enable it — campaign_go does that, after John's "go".
 */
function campaignCreate(api, p) {
  need(p, ['name', 'subject', 'html', 'slug']);
  guardCopy('subject', p.subject); guardCopy('preheader', p.preheader || ''); guardCopy('html', p.html);
  if (!(p.listIds && p.listIds.length) && !p.segmentId) throw new Error('listIds or segmentId is required');
  var html = addUtms(p.html, p.slug);
  var fromname = p.fromname || 'Jason Posey', fromemail = p.fromemail || 'jason@ancientpathcoaching.com';
  var msg = api.post('messages', { message: {
    fromname: fromname, fromemail: fromemail, email: fromemail, reply2: p.reply2 || fromemail,
    subject: p.subject, preheader_text: p.preheader || '', html: html, text: p.text || htmlToText(html)
  } }).message;
  // v2.1 (Oct 30): the documented create endpoint is POST /campaign with an unwrapped body; POST /campaigns wanted listIds + messages and refused.
  var camp = api.post('campaign', { name: p.name, type: 'single', canSplitContent: false });
  var campId = camp.campaign ? camp.campaign.id : camp.id;
  api.post('campaignMessages', { campaignMessage: { campaignid: parseInt(campId, 10), messageid: parseInt(msg.id, 10) } });
  var edit = { linkTrackingEnabled: true, readTrackingEnabled: true, replyTrackingEnabled: p.replyTracking !== false, publicCampaignArchive: false };
  if (p.listIds && p.listIds.length) edit.listIds = p.listIds.map(function (x) { return parseInt(x, 10); });
  if (p.segmentId) edit.segmentId = String(p.segmentId);
  if (p.scheduledDate) edit.scheduledDate = p.scheduledDate;
  if (p.addressId) edit.addressId = parseInt(p.addressId, 10);
  var edited = api.put('campaigns/' + campId + '/edit', edit);
  var out = { campaignId: campId, messageId: msg.id, status: 'DRAFT — send date set; waiting on John\'s go (queue campaign_go)', utm_links_added: (html.match(/utm_source=activecampaign/g) || []).length, edit: edited };
  if (p.testTo) { try { out.test = api.post('campaigns/test-send', { campaignId: parseInt(campId, 10), messageId: parseInt(msg.id, 10), subject: 'TEST · ' + p.subject, toEmail: p.testTo }); } catch (e) { out.test = 'test not sent: ' + e.message; } }
  return out;
}

function campaignEdit(api, p) {
  need(p, ['campaignId']);
  var edit = {};
  ['listIds', 'segmentId', 'scheduledDate', 'name', 'replyTrackingEnabled', 'linkTrackingEnabled', 'readTrackingEnabled', 'publicCampaignArchive', 'addressId'].forEach(function (k) { if (p[k] !== undefined) edit[k] = p[k]; });
  return api.put('campaigns/' + p.campaignId + '/edit', edit);
}

function campaignTest(api, p) {
  need(p, ['campaignId', 'messageId', 'toEmail']);
  var m = api.get('messages/' + p.messageId).message || {};
  return api.post('campaigns/test-send', { campaignId: parseInt(p.campaignId, 10), messageId: parseInt(p.messageId, 10), subject: 'TEST · ' + (p.subject || m.subject || ''), toEmail: p.toEmail });
}

/** Only queued after John says "go" in chat. Enables the draft so it sends at its scheduled date. */
function campaignGo(api, p) {
  need(p, ['campaignId']);
  if (String(p.go).toLowerCase() !== 'john said go') throw new Error('campaign_go needs params.go = "john said go" — a send to the list never happens on its own.');
  var c = api.get('campaigns/' + p.campaignId).campaign || {};
  if (!c.sdate) throw new Error('Campaign ' + p.campaignId + ' has no send date — queue campaign_edit with scheduledDate first.');
  var r = api.put('campaigns/' + p.campaignId + '/enable', {});
  if (r.succeeded !== undefined && !r.succeeded) throw new Error('ActiveCampaign refused: ' + (r.message || JSON.stringify(r)));
  return { campaignId: p.campaignId, name: c.name, scheduled_for: c.sdate, enabled: true, reply: r };
}

// ───────────────────────────── AP-TRIAGE 1 · ActiveCampaign bridge · Triage 1 ─────────────────────────────
// John Sherrod, Nov 17, 2026: a failure is sorted, handled and, only when it needs us, put in front of him in plain words with the repair under
// way. He never gets a raw error. Wait (a passing hiccup: retried at once and on the next run, silent, a card only after 30 minutes), Repair (a
// known cause the script fixes), Needs us (one card on the Front Desk Actions tab, key fix:<script>:<signature>, closed by this script as Proven
// after the job has run clean for 30 minutes; only S1 sends one plain email). Every event goes to the one event log with its school (Script
// Properties tri:school and tri:secret live in the Front Desk only: this script queues each event on the Triage queue tab of the Front Desk sheet and the Front Desk sends it). The block is the Front Desk's own (build 44), built from one source: only TRI_ and the three
// rule tables differ, so a new school is a row and a new script is the same block.
const TRI_ = {
  SCRIPT: 'ac-bridge', LABEL: 'ActiveCampaign bridge', FILE: 'scripts/ACBridge.gs', BUILD: 'Triage 1',
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
const TRI_SERVICES_ = [[/activecampaign/i, 'ActiveCampaign', 'activecampaign'], [/spreadsheet|sheet/i, 'Google Sheets', 'google-sheets'], [/drive/i, 'Google Drive', 'google-drive'], [/gmail|mail/i, 'Gmail', 'gmail'], [/calendar/i, 'Google Calendar', 'google-calendar'],
  [/lock/i, 'the script lock', 'script-lock'], [/maximum execution time/i, 'the time limit', 'time-limit'], [/urlfetch|fetch|http|address unavailable|dns|socket|econn/i, 'an outside service', 'outside-service']];
/** Who a failure touches, and how serious it is (S1: a person's words are at risk or people cannot get in; S2: a feature is broken; S3: a rough edge). */
const TRI_WHO_ = [[/count|queue/i, 'our team']];
const TRI_SEV_ = [[/count/i, 'S3']];
const TRI_SEV_WORDS_ = { S1: 'S1: a person’s words are at risk, or people can’t get in.', S2: 'S2: a feature is broken.', S3: 'S3: a rough edge.' };
const TRI_SRC_ = [[/count/i, 'count'], [/queue|action/i, 'queue']];
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
    if (!needs) needs = r ? (r.way === 'needs_us') : minutes >= TRI_.WAIT_MIN; // the log is the count when it answers; the Script Properties are the count when it cannot
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
      if (quiet >= TRI_.CLEAN_MIN * 60000 && (r !== false || quiet >= 4 * 36e5)) { if (x.cd) triClose_(sig); delete st[sig]; } // this script closes its own card as Proven
    });
    if (dirty) triSave_(st);
  } catch (e) {}
}
/** A timer's own job, handled where it happens: a failure goes to triage_, a clean pass to cleanRun_, and nothing is rethrown. */
function triGuard_(job, src, fn) {
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
