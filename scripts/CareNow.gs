/**
 * Ancient Path — Front Desk · CareNow.gs · build 50.1 (Witness 6, Nov 20, 2026; built on the live build 50 read through the Google Drive connector, so everything in 50 is kept). The one change: careNow also calls platformTexts() (PlatformTexts.gs PT1) each minute, after Care · Now, in its own try, so the platform's text outbox rides this one timer and neither can stop the other. Build 50 (desk-6, Nov 19, 2026). John, Nov 19: "text to jason and john for now. we want to be able to set a call tree like
 * function for care now." One file beside Code.gs and Notices.gs in the Front Desk project; Code.gs is not changed.
 *   Every minute, careNow reads the platform's Care · Now taps (public.care_now_open, behind the event log's secret this project already holds as tri:secret).
 *   For each: one card at the top of the Actions tab (key care:now:<tap>, rule R31, owner John; it stays open until marked done by hand), a text to each number
 *   in the Config row "care now numbers" (who tapped and when, never the person's name, the room or a word from the note; no quiet hours), then the platform is
 *   told the tap was carried (public.care_now_done), so it is never carded or texted twice. It takes the script lock, so it never writes the Actions tab while the
 *   5-minute run does; when the lock is busy it waits for the next minute and marks nothing.
 *   Install: add this file, save, run careNowSetup once (it makes the one-minute timer). No new deployment is needed: a timer runs the saved code.
 *   Preflight: the Twilio keys are this project's own Script Properties (Notices.gs sends with the same four); both platform doors were proven on the live database
 *   Nov 19 (checks/who-sees-care-now.sql, 13 of 13); careNowPull_ was run against stand-ins for the sheet, Twilio and the doors (care-now.test.js, 12 of 12).
 *   Simplicity: +1 timer (a minute, not five, because Care · Now cannot wait); retires nothing yet; the call tree (schooladmin-6) replaces the Config row later.
 *   Moves to the platform as it is: the card and the text.
 */

/** Run once: the one-minute timer for careNow (a second run replaces it, never doubles it). */
function careNowSetup() {
  ScriptApp.getProjectTriggers().forEach(t => { if (t.getHandlerFunction() === 'careNow') ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('careNow').timeBased().everyMinutes(1).create();
  careNow();
}
/** The timer's job. Never throws: a failure reaches John through the Front Desk's own alert. */
function careNow() {
  try { careNowPull_(); } catch (e) { try { alert_('Care · Now could not be read from the platform: ' + e + '\n' + (e.stack || '')); } catch (x) {} }
  try { if (typeof platformTexts === 'function') platformTexts(); } catch (e) {}   // 50.1: the platform's text outbox (PlatformTexts.gs); it alerts for itself
}

/** The numbers in the Config row "care now numbers", as +1XXXXXXXXXX (a US number of ten digits, or eleven starting with 1). */
function careNumbers_() {
  const raw = String(configRaw_()['care now numbers'] || '');
  const out = [];
  raw.split(/[,;\n]+/).forEach(x => {
    let d = String(x).replace(/\D/g, '');
    if (d.length === 11 && d[0] === '1') d = d.slice(1);
    if (d.length === 10 && out.indexOf('+1' + d) < 0) out.push('+1' + d);
  });
  return out;
}
/** A Central time like "4:12 PM". */
function careWhen_(iso) { try { return Utilities.formatDate(new Date(iso), 'America/Chicago', 'h:mm a'); } catch (e) { return ''; } }
/** First name and last initial, so a lock screen never shows a whole name. */
function careShort_(n) { const w = String(n || '').trim().split(/\s+/).filter(Boolean); return !w.length ? 'A leader' : w.length > 1 ? w[0] + ' ' + w[w.length - 1].charAt(0) + '.' : w[0]; }
/** One text through Twilio, with the same keys Notices.gs uses. true when Twilio took it. */
function careText_(to, body) {
  try {
    const p = PropertiesService.getScriptProperties().getProperties();
    if (!p.TWILIO_ACCOUNT_SID || !p.TWILIO_SERVICE_SID || !p.TWILIO_KEY_SID || !p.TWILIO_KEY_SECRET) return false;
    const res = UrlFetchApp.fetch('https://api.twilio.com/2010-04-01/Accounts/' + p.TWILIO_ACCOUNT_SID + '/Messages.json', {
      method: 'post', headers: { Authorization: 'Basic ' + Utilities.base64Encode(p.TWILIO_KEY_SID + ':' + p.TWILIO_KEY_SECRET) },
      payload: { To: to, MessagingServiceSid: p.TWILIO_SERVICE_SID, Body: body }, muteHttpExceptions: true });
    const code = res.getResponseCode();
    let j = {}; try { j = JSON.parse(res.getContentText()); } catch (x) { j = {}; }
    return code >= 200 && code < 300 && !!j.sid;
  } catch (e) { return false; }
}
/**
 * Every Care · Now tap the platform holds that has not reached our team: one card at the top of the Actions tab, a text to each number in
 * "care now numbers", then the platform is told it was carried. A tap whose card could not be written is left for the next run (it is never marked carried).
 */
function careNowPull_() {
  const c = triCfg_(); if (!c) return;
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return; // the 5-minute run is writing the Actions tab; the next minute tries again, and nothing is marked carried
  try { careNowPull1_(c); } finally { lock.releaseLock(); }
}
function careNowPull1_(c) {
  const call = (name, body) => {
    const r = UrlFetchApp.fetch(TRI_RPC_ + name, { method: 'post', contentType: 'application/json', headers: { apikey: TRI_.KEY }, muteHttpExceptions: true, payload: JSON.stringify(Object.assign({ p_secret: c.secret }, body || {})) });
    if (r.getResponseCode() !== 200) return null;
    const j = JSON.parse(r.getContentText()); return j && j.ok === true ? j : null;
  };
  const open = call('care_now_open'); if (!open || !(open.rows || []).length) return;
  const nums = careNumbers_();
  const sh = SpreadsheetApp.openById(FD.SHEET_ID).getSheetByName('Actions'), H = headerIndex_(sh);
  open.rows.forEach(t => {
    const key = 'care:now:' + t.id, when = careWhen_(t.at), leader = careShort_(t.leader);
    const data = sh.getDataRange().getValues();
    let has = false; for (let i = 1; i < data.length; i++) if (String(data[i][H['key']] || '').trim() === key) { has = true; break; }
    let sent = 0;
    if (!has) {
      nums.forEach(n => { if (careText_(n, 'Ancient Path: Care \u00b7 Now from ' + leader + ' at ' + when + ' Central. Call them now. The Front Desk has the card: ' + TRI_.DESK + ' Reply STOP to end these texts.')) sent++; });
      const row = actionsBlankRow_(sh);
      row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = 'John';
      row[H['do this']] = 'Care \u00b7 Now: call ' + String(t.leader || 'the leader') + ' now. They tapped it at ' + when + ' Central after session ' + t.session + ' with ' + String(t.person || 'a person') + (t.room ? ' (' + t.room + ')' : '') + '.';
      row[H['for']] = 'Care \u00b7 Now';
      row[H['because']] = 'A leader asked for help now. The note\u2019s words stay with the leader; the call is how we hear what is needed. ' + (nums.length ? 'Texted ' + sent + ' of ' + nums.length + ' numbers.' : 'No number is set in Config, care now numbers, so no text went.');
      row[H['link']] = TRI_.DESK; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['rule']] = 'R31';
      sh.insertRowBefore(2); sh.getRange(2, 1, 1, row.length).setValues([row]);
    }
    call('care_now_done', { p_id: t.id, p_texted: sent, p_note: has ? 'card already up' : ('card up; ' + sent + ' of ' + nums.length + ' texts') });
  });
}