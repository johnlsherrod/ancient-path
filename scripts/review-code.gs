/**
 * Ancient Path — Testimony Offered: notify + review-and-decide.  review-code v6.1 (29 Sept 2026)
 * Bound to the "Testimony Offered (Responses)" sheet.
 *
 * Flow: a man offers -> a row lands here -> notifyOffer_ emails John + Jason the
 *   whole piece to READ, plus a link -> the link opens a private page (this web app)
 *   with the piece + safeguarding checks + Approve / Hold / Decline -> the decision
 *   is written back here and both emailed.
 *
 * v6 — the offer comes from his page STRAIGHT TO THIS SCRIPT (doPost, op "offer"),
 *   so the page is told the row landed before it says "Offered." (the Google Form
 *   path is kept for pieces John submits by hand). Two more calls, both on the
 *   PUBLIC deployment: doGet ?status=<who> returns where each of that man's pieces
 *   stands (offered · published · taken down · kept), never the text or an email;
 *   doPost op "withdraw" is Pull it back (before a decision) or Take it down (after
 *   it was published), one press from his page. Columns N "Who" and O "Unit" carry
 *   the man and the piece; "who" is a hash the page makes from his LearnWorlds id.
 *
 * Deploy: TWO web apps of this one script. (A) "Execute as me, anyone in
 *   ancientpathcoaching.com" = the review page. (B) "Execute as me, Anyone" = the
 *   public feed, the status read and the offer/withdraw calls. After any code
 *   change: Deploy -> Manage deployments -> pencil -> Version: New version, on BOTH.
 */

var REVIEWERS = "john@ancientpathcoaching.com,jason@ancientpathcoaching.com";
var NL = String.fromCharCode(10);

// Sheet columns (1-based). A-I come from the form; J-M we manage.
var COL = { ts:1, name:2, attr:3, title:4, from:5, email:6, piece:7, consent:8, notes:9,
            rid:10, decision:11, decidedBy:12, decidedAt:13, who:14, unit:15 };
var OFFERS_PER_DAY = 20;   /* one man's cap on offer + withdraw calls in a day (v6) */

function ss_(){ return SpreadsheetApp.getActiveSpreadsheet(); }
function sheet_(){ return ss_().getSheets()[0]; }

function ensureHeaders_(){
  var sh = sheet_();
  var want = { 10:"Review ID", 11:"Decision", 12:"Decided by", 13:"Decided at", 14:"Who", 15:"Unit" };
  for (var c in want){
    var cell = sh.getRange(1, Number(c));
    if (!cell.getValue()) cell.setValue(want[c]);
  }
}

function reviewUrl_(){
  // Pinned to the PRIVATE workspace deployment so review links always open the
  // reviewer-only page (a second, public feed deployment must not capture this).
  return "https://script.google.com/a/macros/ancientpathcoaching.com/s/AKfycbzJH5u4JuJA3d57UH7GsQFbjk3dU9AhC0NOhBxrIKxu5S2y7yseczHGAcAqYjVnpvyx/exec";
}

// Only John + Jason (signed in to the workspace) may see the review page or decide.
function isReviewer_(){
  var who = "";
  try { who = Session.getActiveUser().getEmail() || ""; } catch(e){}
  return !!(who && REVIEWERS.indexOf(who) >= 0);
}

// ---- the public read: ONLY the approved, public-safe list, as JSONP ----
function publicFeed_(e){
  var cb = (e && e.parameter && e.parameter.callback) ? ("" + e.parameter.callback) : "";
  cb = cb.replace(/[^A-Za-z0-9_.]/g, "").slice(0, 64);
  var out = [];
  var sh = ss_().getSheetByName("Published");
  if (sh){
    var data = sh.getDataRange().getValues();
    for (var i = 1; i < data.length; i++){
      var row = data[i];
      if (!row[0]) continue;
      out.push({
        id: "" + row[0],
        name: "" + (row[1] || ""),
        title: "" + (row[2] || ""),
        from: "" + (row[3] || ""),
        piece: "" + (row[4] || ""),
        at: row[5] ? new Date(row[5]).toISOString() : ""
      });
    }
  }
  var json = JSON.stringify({ pieces: out });
  if (cb){
    return ContentService.createTextOutput(cb + "(" + json + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function needSignIn_(){
  return pageShell_("For the review team",
    '<p>This page is for the Ancient Path review team. Please open it while signed in to your ancientpathcoaching.com account, using the link from the notification email.</p>');
}

// ---- the public-safe "Published" list (only approved pieces; only what may be shown) ----
function publishedSheet_(){
  var ss = ss_();
  var sh = ss.getSheetByName("Published");
  if (!sh){
    sh = ss.insertSheet("Published");
    sh.getRange(1, 1, 1, 6).setValues([["Review ID", "Name to show", "Title", "From", "Piece", "Published at"]]);
  }
  return sh;
}
function displayName_(attr, fullName){
  var a = ("" + (attr || "")).toLowerCase();
  var n = ("" + (fullName || "")).trim();
  if (/full/.test(a)) return n;
  if (/first/.test(a)) return (n.split(/\s+/)[0] || "");
  return ""; // do-not-show / anonymous
}
function publishApproved_(r, rid){
  var sh = publishedSheet_();
  var data = sh.getDataRange().getValues();
  for (var i = 1; i < data.length; i++){ if (("" + data[i][0]) === rid && rid) return; } // already listed
  var name = displayName_(r[COL.attr - 1], r[COL.name - 1]);
  sh.appendRow([rid, name, r[COL.title - 1], r[COL.from - 1], r[COL.piece - 1], new Date()]);
}
function unpublish_(rid){
  var sh = publishedSheet_();
  var data = sh.getDataRange().getValues();
  for (var i = data.length - 1; i >= 1; i--){ if (("" + data[i][0]) === rid && rid) sh.deleteRow(i + 1); }
}

function newId_(){
  return (Utilities.getUuid().replace(/-/g, "").slice(0, 10));
}

function esc_(s){
  return ("" + (s == null ? "" : s))
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// The piece is stored as text with blank-line breaks between parts.
function pieceParagraphs_(piece){
  var t = ("" + (piece || "")).trim();
  if (!t) return [];
  var splitter = new RegExp(NL + "{2,}");
  var oneNL = new RegExp(NL, "g");
  return t.split(splitter)
          .map(function(p){ return p.replace(oneNL, " ").trim(); })
          .filter(function(p){ return p.length; });
}

// ---- triggered on every new offer THROUGH THE GOOGLE FORM (John's by-hand route) ----
function apOfferNotify(e){
  ensureHeaders_();
  var sh = sheet_();
  var v = (e && e.namedValues) || {};
  function g(k){ return (v[k] && v[k][0]) ? v[k][0] : ""; }
  var rid = newId_();
  var row = (e && e.range) ? e.range.getRow() : sh.getLastRow();
  try { sh.getRange(row, COL.rid).setValue(rid); } catch(err){}
  notifyOffer_({ name: g("Author's name"), attribution: g("How the name should appear"), title: g("Piece title"), from: g("Where it's from"),
                 email: g("Author's email"), piece: g("The testimony"), consent: g("Consent to publish on the site"), notes: g("Notes for the team") }, rid);
}

// ---- the reviewers' email, for an offer from either path (v6) ----
function notifyOffer_(o, rid){
  var name = o.name || "", attribution = o.attribution || "", title = o.title || "", from = o.from || "",
      email = o.email || "", piece = o.piece || "", consent = o.consent || "", notes = o.notes || "";

  var link = reviewUrl_();
  var reviewLink = link ? (link + "?id=" + rid) : "";
  var sheetUrl = ss_().getUrl();
  var paras = pieceParagraphs_(piece);

  var subject = "Testimony offered — " + (title || "a piece") + " (" + (name || "someone") + ")";

  var pieceHtml = paras.length
    ? paras.map(function(p){ return '<p style="margin:0 0 14px;">' + esc_(p) + '</p>'; }).join("")
    : '<p style="margin:0;color:#9a3b2f;">(The piece did not come through &mdash; open his page to read it.)</p>';

  var btn = reviewLink
    ? '<a href="' + esc_(reviewLink) + '" style="display:inline-block;background:#1F2A44;color:#ffffff;text-decoration:none;font:600 15px/1 Arial,sans-serif;padding:14px 26px;border-radius:3px;">Open to read and decide &rarr;</a>'
    : '<span style="color:#6B7280;">(The review page is not deployed yet.)</span>';

  var html =
    '<div style="max-width:640px;margin:0 auto;font:400 15px/1.6 Arial,Helvetica,sans-serif;color:#2B3040;">' +
      '<p style="font:600 16px/1.4 Arial,sans-serif;color:#1F2A44;margin:0 0 4px;">A man offered a piece as testimony.</p>' +
      '<table style="border-collapse:collapse;margin:14px 0 18px;font-size:14px;color:#2B3040;">' +
        '<tr><td style="padding:2px 14px 2px 0;color:#6B7280;">Author</td><td style="padding:2px 0;">' + esc_(name) + '</td></tr>' +
        '<tr><td style="padding:2px 14px 2px 0;color:#6B7280;">Show the name as</td><td style="padding:2px 0;">' + esc_(attribution) + '</td></tr>' +
        '<tr><td style="padding:2px 14px 2px 0;color:#6B7280;">Piece</td><td style="padding:2px 0;">' + esc_(title) + ' — ' + esc_(from) + '</td></tr>' +
        '<tr><td style="padding:2px 14px 2px 0;color:#6B7280;">Email</td><td style="padding:2px 0;">' + esc_(email) + '</td></tr>' +
        '<tr><td style="padding:2px 14px 2px 0;color:#6B7280;">Consent</td><td style="padding:2px 0;">' + esc_(consent) + '</td></tr>' +
        (notes ? '<tr><td style="padding:2px 14px 2px 0;color:#6B7280;">Notes</td><td style="padding:2px 0;">' + esc_(notes) + '</td></tr>' : '') +
      '</table>' +
      '<div style="border-top:2px solid #B8945F;padding-top:16px;">' +
        '<p style="font:600 12px/1 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#B8945F;margin:0 0 12px;">In his own words</p>' +
        '<div style="font:400 16px/1.7 Georgia,serif;color:#2B3040;">' + pieceHtml + '</div>' +
      '</div>' +
      '<div style="margin:26px 0 8px;">' + btn + '</div>' +
      '<p style="font-size:13px;color:#6B7280;margin:14px 0 0;">Read the whole thing above. When you are ready, open the link to Approve, Hold, or Decline. Nothing is published until you approve it.</p>' +
      '<p style="font-size:12px;color:#9aa0ab;margin:18px 0 0;">The record sheet: <a href="' + esc_(sheetUrl) + '" style="color:#9aa0ab;">open</a></p>' +
    '</div>';

  var text =
    "A man offered a piece as testimony." + NL + NL +
    "Author: " + name + NL + "Show the name as: " + attribution + NL +
    "Piece: " + title + " — " + from + NL + "Email: " + email + NL + "Consent: " + consent + NL +
    (notes ? ("Notes: " + notes + NL) : "") +
    NL + "----- In his own words -----" + NL + NL + (paras.join(NL + NL) || "(did not come through)") + NL + NL +
    (reviewLink ? ("Read it above, then open to decide (Approve / Hold / Decline):" + NL + reviewLink + NL) : "") +
    NL + "The record sheet: " + sheetUrl;

  MailApp.sendEmail({ to: REVIEWERS, subject: subject, body: text, htmlBody: html });
}

// ---- serve the review-and-decide page ----
function doGet(e){
  if (e && e.parameter && e.parameter.feed === "published") return publicFeed_(e);
  if (e && e.parameter && e.parameter.status) return statusFeed_(e);
  if (!isReviewer_()){
    return HtmlService.createHtmlOutput(needSignIn_())
      .setTitle("Review a testimony")
      .addMetaTag("viewport", "width=device-width, initial-scale=1");
  }
  ensureHeaders_();
  var id = (e && e.parameter && e.parameter.id) || "";
  var sh = sheet_();
  var data = sh.getDataRange().getValues();
  var row = -1;
  for (var i = 1; i < data.length; i++){
    if (("" + data[i][COL.rid - 1]) === id && id){ row = i; break; }
  }
  var html = (row < 0)
    ? pageShell_("Not found", '<p>This offer was not found. It may have been removed, or the link is incomplete.</p>')
    : reviewPage_(data[row], id);
  return HtmlService.createHtmlOutput(html)
    .setTitle("Review a testimony")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function pageShell_(title, inner){
  var css = [
    'body{margin:0;background:#FBF9F5;color:#2B3040;font:400 16px/1.6 -apple-system,Segoe UI,Arial,sans-serif;}',
    '.wrap{max-width:680px;margin:0 auto;padding:34px 22px 60px;}',
    'h1{font:600 26px/1.25 Georgia,serif;color:#1F2A44;margin:0 0 6px;}',
    '.eyebrow{font:600 12px/1 Arial,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:#B8945F;margin:0 0 10px;}',
    '.meta{font-size:14px;color:#6B7280;margin:0 0 22px;}',
    '.meta b{color:#2B3040;font-weight:600;}',
    '.piece{background:#fff;border:1px solid #E2DCD1;border-left:3px solid #B8945F;border-radius:3px;padding:20px 22px;margin:0 0 26px;}',
    '.piece p{font:400 17px/1.75 Georgia,serif;color:#2B3040;margin:0 0 15px;}',
    '.piece p:last-child{margin-bottom:0;}',
    '.checks{background:#fff;border:1px solid #E2DCD1;border-radius:3px;padding:16px 20px;margin:0 0 24px;}',
    '.checks h2{font:600 14px/1.3 Arial,sans-serif;color:#1F2A44;margin:0 0 12px;}',
    '.checks label{display:flex;align-items:flex-start;gap:10px;padding:7px 0;font-size:15px;color:#2B3040;cursor:pointer;}',
    '.checks input{margin:3px 0 0;flex:0 0 auto;width:18px;height:18px;accent-color:#B8945F;}',
    '.btns{display:flex;flex-wrap:wrap;gap:12px;margin:6px 0 0;}',
    'button{font:600 15px/1 Arial,sans-serif;padding:14px 24px;border-radius:3px;cursor:pointer;border:1px solid transparent;}',
    '.approve{background:#1F2A44;color:#fff;border-color:#1F2A44;}',
    '.approve:disabled{opacity:.4;cursor:not-allowed;}',
    '.hold{background:transparent;color:#8a5a2b;border-color:#d8c3a0;}',
    '.decline{background:transparent;color:#6B7280;border-color:#E2DCD1;}',
    '.note{font-size:13px;color:#6B7280;margin:16px 0 0;}',
    '.done{background:#fff;border:1px solid #E2DCD1;border-radius:3px;padding:22px;font-size:16px;}',
    '.done .big{font:600 20px/1.3 Georgia,serif;color:#1F2A44;margin:0 0 6px;}',
    '.prior{background:#FBF3E7;border:1px solid #E7D3B4;border-radius:3px;padding:12px 16px;font-size:14px;color:#6b5836;margin:0 0 20px;}'
  ].join("");
  return '<!doctype html><html><head><meta charset="utf-8"><style>' + css + '</style></head>' +
    '<body><div class="wrap">' +
    '<div class="eyebrow">Ancient Path &middot; Review</div>' +
    '<h1>' + esc_(title) + '</h1>' + inner +
    '</div></body></html>';
}

function reviewPage_(r, id){
  var name = r[COL.name - 1], attr = r[COL.attr - 1], title = r[COL.title - 1],
      from = r[COL.from - 1], email = r[COL.email - 1], piece = r[COL.piece - 1],
      consent = r[COL.consent - 1], notes = r[COL.notes - 1],
      decision = r[COL.decision - 1], decidedBy = r[COL.decidedBy - 1];

  var paras = pieceParagraphs_(piece);
  var pieceHtml = paras.length
    ? paras.map(function(p){ return '<p>' + esc_(p) + '</p>'; }).join("")
    : '<p style="color:#9a3b2f;">The piece did not come through.</p>';

  var prior = decision
    ? '<div class="prior">Already <b>' + esc_(("" + decision).toLowerCase()) + '</b>' +
      (decidedBy ? ' by ' + esc_(decidedBy) : '') + '. You can change it below.</div>'
    : '';

  var inner =
    '<p class="meta">Shown as <b>' + esc_(attr) + '</b> &middot; ' + esc_(from) +
      ' &middot; <b>' + esc_(name) + '</b> &middot; ' + esc_(email) +
      ' &middot; consent: <b>' + esc_(consent) + '</b>' +
      (notes ? ' &middot; notes: ' + esc_(notes) : '') + '</p>' +
    prior +
    '<div class="piece">' + pieceHtml + '</div>' +
    '<div class="checks">' +
      '<h2>Before you approve, confirm each:</h2>' +
      '<label><input type="checkbox" class="chk"> I read the whole piece.</label>' +
      '<label><input type="checkbox" class="chk"> No child or dependent adult is in danger right now.</label>' +
      '<label><input type="checkbox" class="chk"> No one else is named or exposed in a way that could hurt them.</label>' +
      '<label><input type="checkbox" class="chk"> He chose how his name appears and said yes to publishing.</label>' +
      '<label><input type="checkbox" class="chk"> He is an adult.</label>' +
    '</div>' +
    '<div class="btns">' +
      '<button class="approve" id="apoAp" disabled>Approve</button>' +
      '<button class="hold" id="apoHold">Hold</button>' +
      '<button class="decline" id="apoDecl">Decline</button>' +
    '</div>' +
    '<p class="note"><b>Approve</b> publishes it to Our Stories. <b>Hold</b> parks it and flags you and Jason. <b>Decline</b> keeps it his and does not publish.</p>' +
    '<script>' +
    'var ID=' + JSON.stringify(id) + ';' +
    'var chks=document.querySelectorAll(".chk"),ap=document.getElementById("apoAp");' +
    'function sync(){var all=true;chks.forEach(function(c){if(!c.checked)all=false;});ap.disabled=!all;}' +
    'chks.forEach(function(c){c.addEventListener("change",sync);});' +
    'function busy(){var bs=document.querySelectorAll("button");for(var i=0;i<bs.length;i++)bs[i].disabled=true;}' +
    'function unbusy(){var bs=document.querySelectorAll("button");for(var i=0;i<bs.length;i++)bs[i].disabled=false;sync();}' +
    'function decide(d){busy();google.script.run.withSuccessHandler(onDone).withFailureHandler(onFail).apoDecide(ID,d);}' +
    'function onDone(html){document.querySelector(".wrap").innerHTML=html;}' +
    'function onFail(err){alert("Something went wrong: "+((err&&err.message)||err));unbusy();}' +
    'document.getElementById("apoAp").addEventListener("click",function(){var all=true;chks.forEach(function(c){if(!c.checked)all=false;});if(all)decide("Approved");});' +
    'document.getElementById("apoHold").addEventListener("click",function(){decide("Held");});' +
    'document.getElementById("apoDecl").addEventListener("click",function(){if(confirm("Decline this piece? It will not be published."))decide("Declined");});' +
    '</script>';

  return pageShell_(title, inner);
}

// ======================================================================
// v6 — HIS PAGE TALKS TO THIS SCRIPT DIRECTLY
// ======================================================================
function jsonOut_(obj, cb){
  var json = JSON.stringify(obj);
  if (cb){
    cb = ("" + cb).replace(/[^A-Za-z0-9_.]/g, "").slice(0, 64);
    return ContentService.createTextOutput(cb + "(" + json + ");").setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
function cleanWho_(w){ w = ("" + (w || "")).replace(/[^A-Za-z0-9_-]/g, "").slice(0, 80); return w.length >= 8 ? w : ""; }
function cleanText_(v, max){ return ("" + (v == null ? "" : v)).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").slice(0, max || 200); }

/* where a row stands, in the man's words: offered (no decision yet, or held) · published · taken down (was up, pulled) · kept (withdrawn before a decision, or declined) */
function stateOf_(decision){
  var d = ("" + (decision || "")).toLowerCase();
  if (!d || d === "held") return "offered";
  if (d === "approved") return "published";
  if (d === "taken down") return "taken down";
  return "kept";   /* Withdrawn, Declined */
}

/* the newest row per unit for one man: {pieces:[{rid, unit, title, from, state, read, at}]} — never the text, never an email */
function statusFeed_(e){
  var who = cleanWho_(e.parameter.status), cb = e.parameter.callback || "";
  if (!who) return jsonOut_({ pieces: [] }, cb);
  var data = sheet_().getDataRange().getValues(), byUnit = {}, order = [];
  for (var i = 1; i < data.length; i++){
    var r = data[i];
    if (("" + r[COL.who - 1]) !== who) continue;
    var unit = "" + (r[COL.unit - 1] || "");
    if (!unit) continue;
    var dec = "" + (r[COL.decision - 1] || "");
    var entry = { rid: "" + (r[COL.rid - 1] || ""), unit: unit, title: "" + (r[COL.title - 1] || ""), from: "" + (r[COL.from - 1] || ""),
                  state: stateOf_(dec), read: dec.toLowerCase() === "declined", at: r[COL.ts - 1] ? new Date(r[COL.ts - 1]).toISOString() : "" };
    if (!byUnit[unit]) order.push(unit);
    byUnit[unit] = entry;   /* later rows override: the newest offer for a unit wins */
  }
  return jsonOut_({ pieces: order.map(function (u) { return byUnit[u]; }) }, cb);
}

/* one man's cap on offer + withdraw calls in a day */
function underCap_(who){
  try {
    var c = CacheService.getScriptCache(), k = "apo:" + who + ":" + new Date().toISOString().slice(0, 10);
    var n = Number(c.get(k) || 0);
    if (n >= OFFERS_PER_DAY) return false;
    c.put(k, String(n + 1), 60 * 60 * 25);
    return true;
  } catch (e) { return true; }
}

/* an offer from his page: append the row with rid, who and unit; email the reviewers; answer {ok, rid} */
function offerFromPage_(b){
  var who = cleanWho_(b.who); if (!who) return { ok: false, error: "no_who" };
  var unit = cleanText_(b.unit, 40).replace(/[^A-Za-z0-9]/g, ""); if (!unit) return { ok: false, error: "no_unit" };
  var consent = cleanText_(b.consent, 10); if (!/^yes$/i.test(consent)) return { ok: false, error: "no_consent" };
  var piece = ("" + (b.testimony == null ? "" : b.testimony)).replace(/\r\n?/g, NL).slice(0, 60000);
  if (!piece.trim()) return { ok: false, error: "empty" };
  if (!underCap_(who)) return { ok: false, error: "rate_limited" };
  ensureHeaders_();
  var o = { name: cleanText_(b.name, 120), attribution: cleanText_(b.attribution, 40), title: cleanText_(b.title, 120), from: cleanText_(b.from, 120),
            email: cleanText_(b.email, 160), piece: piece, consent: "Yes",
            notes: "Offered from the man’s page · " + cleanText_(b.key, 20) + " · unit " + unit };
  var rid = newId_();
  sheet_().appendRow([new Date(), o.name, o.attribution, o.title, o.from, o.email, o.piece, o.consent, o.notes, rid, "", "", "", who, unit]);
  try { notifyOffer_(o, rid); } catch (e) {}
  return { ok: true, rid: rid, state: "offered" };
}

/* Pull it back (no decision yet → Withdrawn, reads as kept) or Take it down (it was published → Taken down); only the man who offered it */
function withdrawFromPage_(b){
  var who = cleanWho_(b.who), rid = cleanText_(b.rid, 20).replace(/[^A-Za-z0-9]/g, "");
  if (!who || !rid) return { ok: false, error: "bad_request" };
  if (!underCap_(who)) return { ok: false, error: "rate_limited" };
  var sh = sheet_(), data = sh.getDataRange().getValues(), row = -1;
  for (var i = 1; i < data.length; i++){ if (("" + data[i][COL.rid - 1]) === rid){ row = i + 1; break; } }
  if (row < 0) return { ok: false, error: "not_found" };
  var r = data[row - 1];
  if (("" + r[COL.who - 1]) !== who) return { ok: false, error: "not_yours" };
  var wasUp = ("" + (r[COL.decision - 1] || "")).toLowerCase() === "approved";
  var word = wasUp ? "Taken down" : "Withdrawn";
  sh.getRange(row, COL.decision).setValue(word);
  sh.getRange(row, COL.decidedBy).setValue("the author, from his page");
  sh.getRange(row, COL.decidedAt).setValue(new Date());
  try { unpublish_(rid); } catch (e) {}
  var title = "" + (r[COL.title - 1] || ""), name = "" + (r[COL.name - 1] || "");
  try {
    MailApp.sendEmail({ to: REVIEWERS,
      subject: (wasUp ? "Taken down by the author: " : "Pulled back by the author: ") + title + " (" + name + ")",
      body: (wasUp ? "The author took this piece down from his page. It has been removed from the Published list and no longer shows on the site."
                   : "The author pulled this piece back from his page before a decision. Please do not publish it.") + NL + NL + "Piece: " + title + NL + "Author: " + name + NL + "Review ID: " + rid });
  } catch (e) {}
  return { ok: true, rid: rid, state: wasUp ? "taken down" : "kept" };
}

/* the page POSTs text/plain JSON {op:"offer"|"withdraw", who, ...}; answered as JSON (a simple request, so the browser lets the page read it) */
function doPost(e){
  var b = null;
  try { b = JSON.parse((e && e.postData && e.postData.contents) || ""); } catch (err) { b = null; }
  if (!b || typeof b !== "object") return jsonOut_({ ok: false, error: "bad_request" });
  var out;
  try {
    if (b.op === "offer") out = offerFromPage_(b);
    else if (b.op === "withdraw") out = withdrawFromPage_(b);
    else out = { ok: false, error: "bad_request" };
  } catch (err2) { out = { ok: false, error: "failed" }; }
  return jsonOut_(out);
}

// ---- record the decision + notify ----
function apoDecide(id, decision){
  if (!isReviewer_()) return '<div class="done"><p class="big">Not authorized.</p><p>Please open this page signed in to your ancientpathcoaching.com account.</p></div>';
  var sh = sheet_();
  var data = sh.getDataRange().getValues();
  var row = -1;
  for (var i = 1; i < data.length; i++){
    if (("" + data[i][COL.rid - 1]) === id && id){ row = i + 1; break; }
  }
  if (row < 0) return '<div class="done"><p class="big">Not found.</p></div>';

  var reviewer = "";
  try { reviewer = Session.getActiveUser().getEmail() || ""; } catch(e){}
  var when = new Date();

  sh.getRange(row, COL.decision).setValue(decision);
  sh.getRange(row, COL.decidedBy).setValue(reviewer);
  sh.getRange(row, COL.decidedAt).setValue(when);

  var r = data[row - 1];
  var name = r[COL.name - 1], title = r[COL.title - 1], from = r[COL.from - 1],
      attr = r[COL.attr - 1], piece = r[COL.piece - 1];
  var paras = pieceParagraphs_(piece);
  var body = "Piece: " + title + " — " + from + NL + "Author: " + name +
             NL + "Show as: " + attr + NL + "Decided by: " + (reviewer || "(reviewer)") +
             NL + NL + "----- In his own words -----" + NL + NL + (paras.join(NL + NL) || "");

  var subj, lead, msg;
  if (decision === "Approved"){
    try { publishApproved_(r, id); } catch(pe){}
    subj = "Approved — now on the site: " + title + " (" + name + ")";
    body = "Cleared and added to the Testimony section on the site." + NL + NL + body;
    lead = "Approved."; msg = "It is cleared and now shows in Our Stories. His page now reads \u201cPublished.\u201d";
  } else if (decision === "Held"){
    try { unpublish_(id); } catch(ue){}
    subj = "HELD — needs you and Jason: " + title + " (" + name + ")";
    body = "This piece is HELD — not published. It needs you and Jason to look at it together and follow the escalation protocol. Do not publish until you have." + NL + NL + body;
    lead = "Held."; msg = "It is parked and will not be published. His page still reads \u201cOffered.\u201d You and Jason have been sent the note to handle it together.";
  } else {
    try { unpublish_(id); } catch(ue2){}
    subj = "Declined: " + title + " (" + name + ")";
    body = "Declined — will not be published. His page reads Kept; he can offer it again." + NL + NL + body;
    lead = "Declined."; msg = "It will not be published. His page now reads \u201cKept. We read it and did not publish it.\u201d He can offer it again.";
  }
  try { MailApp.sendEmail({ to: REVIEWERS, subject: subj, body: body }); } catch(e){}

  return '<div class="eyebrow">Ancient Path &middot; Review</div>' +
         '<div class="done"><p class="big">' + lead + '</p><p>' + msg + '</p></div>';
}
