/**
 * Ancient Path — ActiveCampaign bridge add-on: message_edit   (MessageEdit.gs, v1, Oct 3, 2026)
 *
 * Adds one queue action to the bridge: message_edit. It changes the wording of an
 * existing ActiveCampaign email by its message id, including the emails inside
 * automations (M2 = 10, M3 = 12, C2a = 15, C2b = 17). No browser, no computer.
 *
 * params (the JSON in column D of the queue tab):
 *   messageId     required. The email's message id.
 *   replacements  [["exact old text", "new text"], ...]. Old text exactly as it sits in the email's HTML.
 *   subject       optional. A new subject line.
 *   preheader     optional. A new preview line.
 *   dryRun        optional. true = run every check and show the result, save nothing.
 *
 * QUALITY CHECKS. Any one of these stops the edit and nothing is saved:
 *   1. Every old text appears EXACTLY ONCE in the email.
 *   2. The email's links are identical before and after (wording edits only).
 *   3. No placeholder or blank in the new text, or anywhere in the finished email ([N], {{ }}, TODO ...).
 *   4. John's standing wording rules in the new text: no "brother", no "stranger",
 *      no "the men who come after you". ("season" is flagged as a warning, not refused.)
 * After saving, it reads the email back and confirms: old text gone, new text present, links unchanged.
 * If the plain-text version of the email exists, it is rebuilt from the new HTML so both match.
 *
 * INSTALL (once):
 *   1. In this Apps Script project, click the + next to "Files" > Script. Name it MessageEdit.
 *   2. Delete the empty function in it, paste this whole file, Save.
 *   3. Open Code.gs, press Ctrl+F, search for:   case 'campaign_go'
 *      On the next line, add exactly:            case 'message_edit': return messageEdit(api, p);
 *      Save.
 * Nothing else changes. The 5-minute queue trigger already picks it up.
 */

var HOUSE_RULES = [
  { re: /\bbrothers?\b/i, why: 'John\'s voice never uses "brother"' },
  { re: /\bstrangers?\b/i, why: 'say "a reader" or "a person", never "a stranger"' },
  { re: /\bmen who come after (you|them)\b/i, why: 'say plainly that other men can read it' }
];
var HOUSE_WARN = [
  { re: /\bseasons?\b/i, why: '"season" means about three months; check it is not used for a week' }
];

function meCountOf_(hay, needle) {
  if (!needle) return 0;
  var n = 0, i = 0;
  while ((i = hay.indexOf(needle, i)) !== -1) { n++; i += needle.length; }
  return n;
}
function meHrefs_(html) { return String(html || '').match(/href\s*=\s*"[^"]*"/gi) || []; }
function meText_(s) { return htmlToText(String(s || '')).replace(/^[>\s]+/, '').trim(); }

function messageEdit(api, p) {
  need(p, ['messageId']);
  var reps = p.replacements || [];
  if (!reps.length && p.subject === undefined && p.preheader === undefined) {
    throw new Error('Nothing to change: give replacements, subject or preheader.');
  }
  var m = api.get('messages/' + p.messageId).message;
  if (!m) throw new Error('No email with message id ' + p.messageId);

  var before = String(m.html || '');
  var html = before;
  var problems = [], warnings = [];

  // 1. every old text exactly once, checked against the email as it stands now
  reps.forEach(function (r, i) {
    if (!r || r.length !== 2 || typeof r[0] !== 'string' || typeof r[1] !== 'string' || !r[0]) {
      problems.push('Replacement ' + (i + 1) + ' must be ["old text", "new text"]');
      return;
    }
    var n = meCountOf_(before, r[0]);
    if (n !== 1) problems.push('Old text ' + (i + 1) + ' found ' + n + ' times, must be exactly once: "' + r[0].slice(0, 90) + '"');
  });
  if (problems.length) throw new Error('Nothing saved. ' + problems.join(' | '));

  reps.forEach(function (r, i) {
    var at = html.indexOf(r[0]);
    if (at < 0) throw new Error('Nothing saved. Old text ' + (i + 1) + ' was changed by an earlier replacement; split the edit.');
    html = html.slice(0, at) + r[1] + html.slice(at + r[0].length);
  });

  // 3 + 4. placeholders and house wording in everything new
  var newBits = reps.map(function (r) { return r[1]; });
  if (p.subject !== undefined) newBits.push(p.subject);
  if (p.preheader !== undefined) newBits.push(p.preheader);
  newBits.forEach(function (s) {
    var t = meText_(s);
    if (PLACEHOLDER.test(t)) problems.push('Placeholder in the new text: ' + t.match(PLACEHOLDER)[0]);
    HOUSE_RULES.forEach(function (h) { if (h.re.test(t)) problems.push('"' + t.match(h.re)[0] + '" in the new text: ' + h.why); });
    HOUSE_WARN.forEach(function (h) { if (h.re.test(t)) warnings.push('"' + t.match(h.re)[0] + '": ' + h.why); });
  });
  var finished = htmlToText(html);
  if (PLACEHOLDER.test(finished)) problems.push('The finished email would still have a blank: ' + finished.match(PLACEHOLDER)[0]);

  // 2. links unchanged
  if (JSON.stringify(meHrefs_(before)) !== JSON.stringify(meHrefs_(html))) {
    problems.push('The links would change. Refused: this action edits wording only.');
  }
  if (problems.length) throw new Error('Nothing saved. ' + problems.join(' | '));

  var report = {
    messageId: String(p.messageId),
    subject: p.subject !== undefined ? p.subject : m.subject,
    changes: reps.map(function (r) { return { from: meText_(r[0]), to: meText_(r[1]) }; }),
    links: meHrefs_(before).length + (meHrefs_(before).length === 1 ? ' link' : ' links') + ', unchanged',
    warnings: warnings
  };
  if (p.dryRun) { report.saved = false; report.note = 'Dry run: every check passed. Nothing saved.'; return report; }

  api.put('messages/' + p.messageId, { message: {
    fromname: m.fromname,
    fromemail: m.fromemail,
    email: m.email || m.fromemail,
    reply2: m.reply2,
    subject: p.subject !== undefined ? p.subject : m.subject,
    preheader_text: p.preheader !== undefined ? p.preheader : (m.preheader_text || ''),
    html: html,
    text: m.text ? htmlToText(html) : (m.text || '')
  } });

  // read back
  var after = api.get('messages/' + p.messageId).message || {};
  var ah = String(after.html || ''), at = htmlToText(ah), bad = [];
  reps.forEach(function (r, i) {
    if (r[1].indexOf(r[0]) === -1 && meCountOf_(ah, r[0]) !== 0) bad.push('old text ' + (i + 1) + ' still there');
    if (meCountOf_(ah, r[1]) < 1 && meCountOf_(at, meText_(r[1])) < 1) bad.push('new text ' + (i + 1) + ' missing');
  });
  if (JSON.stringify(meHrefs_(before)) !== JSON.stringify(meHrefs_(ah))) bad.push('links changed');
  if (p.subject !== undefined && after.subject !== p.subject) bad.push('subject did not save');
  if (bad.length) throw new Error('Saved, but the read-back failed: ' + bad.join(' | ') + '. Check message ' + p.messageId + ' by hand.');

  report.saved = true;
  report.verified = 'old text gone, new text present, links unchanged';
  return report;
}