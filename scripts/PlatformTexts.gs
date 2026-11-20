/**
 * Ancient Path — Front Desk · PlatformTexts.gs · build PT1.1 · Witness 6 (Nov 20, 2026; PT1 plus the lock rule below, found on the live run at 10:24 AM: the 5-minute run holds the script lock for minutes, Notices.gs waited its 25 seconds and the platform was told 'failed' for a choice that was only waiting). One file beside Code.gs, Notices.gs and CareNow.gs; Code.gs is not changed.
 * The platform cannot hold Twilio's keys, so a text it needs waits in its own outbox (public.text_ask) and this script carries it out through Notices.gs, which holds them.
 *   Every minute CareNow.gs calls platformTexts(). It reads the open asks (text_asks_open, behind the secret this project already holds as tri:secret) and, for each:
 *     start   a man's own yes to texts: his number, Twilio's number check, then the registered confirmation (noticeStart_)
 *     wstart  a witness's own yes: the same, with the registered witness confirmation (noticeStart_ as wconfirm)
 *     off     he chose Email or None: his text yes ends (noticeOptWrite_)
 *     wsend   the witness's one weekly text, with the address of his Your Desk page (sendNotice as wweekly; held in quiet hours; one a day)
 *   and tells the platform how it went (text_ask_done): ok, or one word (landline, bad_phone, stopped, not_on, failed). A number or an address is never sent back.
 *   Every tenth minute it also asks who replied STOP (text_stopped_list), checks each against the TextOptIn tab and tells the platform (text_stopped), so his Settings
 *   says why and his notices come by email.
 *   A not_on answer (no text yes on file) or a stopped one moves that witness to email on the platform, so the same page goes by email next morning.
 *   The script lock: while the 5-minute run holds it, nothing is claimed (a request waits in the outbox and the next minute tries again); a request whose write still meets a held lock is left open, not answered, and the platform offers it again after five minutes. A lock is never reported to a person as a failure.
 *   It never holds the lock itself (Notices.gs takes it where it writes) and never throws: one ask that fails is answered as failed and the next is still carried out.
 *   Install: add this file, save. No setup run and no new timer: CareNow's one-minute timer calls it. Needs Notices.gs N13 and CareNow.gs 50.1 saved first.
 *   Simplicity: +0 timers, +0 tabs, +0 Config rows. Retires: nothing yet. The Research reader's witness page text path retires when the old witness page does.
 *   Moves to the platform as it is: the five answers. Rebuilt there: the Twilio calls only.
 *   Counts taken: the file parses; platformTexts was run against stand-ins for the platform's four doors and for Notices.gs (platform-texts.test.js).
 */

/** The timer's call (CareNow.gs, every minute). Never throws: a failure reaches John through the Front Desk's own alert. */
function platformTexts() {
  try { platformTextsRun_(); } catch (e) { try { alert_('Platform texts could not be carried out: ' + e + '\n' + (e.stack || '')); } catch (x) {} }
}

function platformTextsRun_() {
  const c = triCfg_(); if (!c) return;
  const call = (name, body) => {
    const r = UrlFetchApp.fetch(TRI_RPC_ + name, { method: 'post', contentType: 'application/json', headers: { apikey: TRI_.KEY }, muteHttpExceptions: true, payload: JSON.stringify(Object.assign({ p_secret: c.secret }, body || {})) });
    if (r.getResponseCode() !== 200) return null;
    const j = JSON.parse(r.getContentText()); return j && j.ok === true ? j : null;
  };
  // the 5-minute run holds the script lock for minutes: claim nothing while it does, so a request is never claimed only to wait
  let free = false;
  try { const probe = LockService.getScriptLock(); free = probe.tryLock(3000); if (free) probe.releaseLock(); } catch (e) { free = false; }
  const open = free ? call('text_asks_open') : null;
  (open && open.rows || []).forEach(a => {
    let result;
    try { result = platformTextOne_(a); } catch (e) {
      if (/lock/i.test(String(e && e.message || e))) return;   // the lock was taken in between: leave it open, the platform offers it again after five minutes
      result = { ok: false, error: 'failed' };
    }
    call('text_ask_done', { p_id: a.id, p_result: result });
  });
  // every tenth minute: who replied STOP since, told once each, only those
  if (new Date().getMinutes() % 10 === 0) {
    const list = call('text_stopped_list');
    if (list && (list.rows || []).length) {
      const ss = SpreadsheetApp.openById(FD.SHEET_ID);
      list.rows.forEach(r => {
        const email = String(r.email || '').trim().toLowerCase();
        try { if (email && noticeState_(ss, email).stopped) call('text_stopped', { p_email: email }); } catch (e) {}
      });
    }
  }
}

/** One ask carried out. Returns only words: ok, error, stopped, fallback, status. Never a number, an address or a name. */
function platformTextOne_(a) {
  const email = String(a.email || '').trim().toLowerCase();
  const op = String(a.op || '');
  if (['start', 'wstart', 'off', 'wsend'].indexOf(op) < 0) return { ok: false, error: 'bad_op' };
  if (!email || email.indexOf('@') < 0) return { ok: false, error: 'no_email' };
  if (op === 'off') { noticeOptWrite_(email, null, 'no', 'Settings', false); return { ok: true }; }
  if (op === 'start' || op === 'wstart') {
    const r = op === 'wstart' ? noticeStart_(email, a.phone, 'wconfirm') : noticeStart_(email, a.phone);
    if (r && r.ok) return { ok: true };
    const err = String((r && r.error) || 'failed');
    return { ok: false, error: err === 'stopped' || err === 'landline' || err === 'bad_phone' ? err : 'failed', stopped: err === 'stopped' };
  }
  // wsend: the weekly text
  const r = sendNotice(email, { kind: 'wweekly', link: a.link });
  if (r && r.ok) return { ok: true, status: String(r.status || 'queued') };
  if (r && r.stopped) return { ok: false, error: 'stopped', stopped: true, fallback: true };
  if (r && /text me is off/.test(String(r.note || ''))) return { ok: false, error: 'not_on', fallback: true };
  return { ok: false, error: 'failed', fallback: !!(r && r.fallback) };
}
