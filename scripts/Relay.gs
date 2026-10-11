/* AP-READER-RELAY v3 · Ancient Path Biblical Coaching
   The relay that lets a page on ancientpathcoaching.com send a man's story to Claude without the key ever
   leaving Google. road.js (The Road I Walked, and any piece that reads) POSTs here; this script adds the key,
   calls Claude, and hands back only the parsed answer.

   THE CONTRACT (what road.js sends and reads — do not change it without changing road.js):
     request  : POST, Content-Type text/plain (keeps it a simple request; Apps Script answers no preflight)
                body = JSON {"input": "<the whole instruction, HOUSE + story + task>", "id": "<the man's owner id or empty>"}
     response : {"ok": true, "data": <the JSON object Claude replied with>}
             or {"ok": false, "error": "<code>"} where code is one of
                rate_limited · refused · invalid_json · empty_completion · network · bad_request
                (road.js turns each code into plain words for the man; "network" is its catch-all)

   SETTINGS live in Project Settings → Script Properties, never in this file:
     ANTHROPIC_API_KEY   required. The key from console.anthropic.com. Rotate it there; paste the new one here.
     MODEL               optional. Default claude-sonnet-5.
     FAST_MODEL          optional. Default claude-haiku-4-5. Used only when a request says "fast": true (the Guide’s choosing
                         step, 10 Oct 2026); if it does not answer, the usual model answers instead. The four buttons never send it.
     MAX_TOKENS          optional. Default 2000 (the longest answer the page ever asks for is a smoothed chapter).
     CAP_PER_MAN_DAY     optional. Default 60 calls per man per day (a button press is two calls, so ~30 presses).
     CAP_ALL_DAY         optional. Default 600 calls per day across everyone (the spending brake).
     CAP_ANON_DAY        optional. Default 120 calls per day for requests with no id (a signed-out man).

   WHAT IS NEVER DONE HERE: no story text is logged, stored or emailed. Logs carry only codes and counts.
   The daily counters live in CacheService for 24 hours and hold no words.

   DEPLOY: Deploy → Manage deployments → pencil → Version: New version → Deploy. That keeps the same address.
   (A brand-new "New deployment" issues a NEW address; then the page's AP-ROAD-CONFIG block needs reader: "<new address>".)
   Execute as: Me · Who has access: Anyone.
*/

var API_URL = "https://api.anthropic.com/v1/messages";
var API_VERSION = "2023-06-01";
var HOUSE_MARK = "You are \"a first reader\" for Ancient Path Biblical Coaching."; // every real request from road.js opens with this line
var MAX_INPUT = 60000;  // characters; road.js already cuts at 60000

function doGet() {
  return out_({ ok: false, error: "bad_request" });
}

function doPost(e) {
  var req;
  try { req = JSON.parse((e && e.postData && e.postData.contents) || ""); } catch (err) { return out_({ ok: false, error: "bad_request" }); }
  if (!req || typeof req.input !== "string") return out_({ ok: false, error: "bad_request" });

  var input = req.input.slice(0, MAX_INPUT);
  // Only the page's own instructions pass. This is what stops the address being used as a free door to Claude.
  if (input.indexOf(HOUSE_MARK) !== 0) return out_({ ok: false, error: "bad_request" });
  if (input.length < HOUSE_MARK.length + 40) return out_({ ok: false, error: "bad_request" });

  var props = PropertiesService.getScriptProperties();
  var key = findKey_(props);
  if (!key) { console.error("relay: no ANTHROPIC_API_KEY in Script Properties"); return out_({ ok: false, error: "network" }); }

  var id = /^[a-f0-9]{32}$/.test(String(req.id || "")) ? String(req.id) : "";
  var gate = allow_(id, props);
  if (gate !== "ok") { console.warn("relay: " + gate + (id ? " id=" + id.slice(0, 6) : " anon")); return out_({ ok: false, error: "rate_limited" }); }

  var fast = req.fast === true;
  var res = ask_(key, props, input, fast);
  if (fast && res.code === "network") res = ask_(key, props, input, false);   // the faster model did not answer: the usual one does
  console.log("relay: " + res.code + (id ? " id=" + id.slice(0, 6) : " anon") + " in=" + input.length + (res.usage ? " tok=" + res.usage : ""));
  if (res.code !== "ok") return out_({ ok: false, error: res.code });
  return out_({ ok: true, data: res.data });
}

/* ---------- the call to Claude ---------- */
function ask_(key, props, input, fast) {
  var model = fast ? (props.getProperty("FAST_MODEL") || "claude-haiku-4-5") : (props.getProperty("MODEL") || "claude-sonnet-5");
  var maxTokens = num_(props.getProperty("MAX_TOKENS"), 2000);
  var body = {
    model: model,
    max_tokens: maxTokens,
    system: "Reply with only the JSON object the instructions ask for. No preface, no code fence, no words outside the JSON.",
    messages: [{ role: "user", content: input }]
  };
  var resp;
  try {
    resp = UrlFetchApp.fetch(API_URL, {
      method: "post",
      contentType: "application/json",
      headers: { "x-api-key": key, "anthropic-version": API_VERSION },
      payload: JSON.stringify(body),
      muteHttpExceptions: true
    });
  } catch (err) { console.error("relay: fetch failed " + String(err).slice(0, 120)); return { code: "network" }; }

  var status = resp.getResponseCode(), text = resp.getContentText() || "";
  if (status === 429 || status === 529) return { code: "rate_limited" };
  if (status === 401 || status === 403) { console.error("relay: key refused (" + status + ")"); return { code: "network" }; }
  if (status < 200 || status >= 300) { console.error("relay: api " + status + " " + text.slice(0, 200)); return { code: "network" }; }

  var msg; try { msg = JSON.parse(text); } catch (err) { return { code: "invalid_json" }; }
  if (msg && msg.stop_reason === "refusal") return { code: "refused" };
  var usage = msg && msg.usage ? (msg.usage.input_tokens + "+" + msg.usage.output_tokens) : "";
  var reply = "";
  ((msg && msg.content) || []).forEach(function (b) { if (b && b.type === "text" && b.text) reply += b.text; });
  reply = reply.trim();
  if (!reply) return { code: "empty_completion", usage: usage };

  var data = parseJSON_(reply);
  if (!data || typeof data !== "object") return { code: "invalid_json", usage: usage };
  return { code: "ok", data: data, usage: usage };
}

/* Claude is told to answer with only JSON; this still tolerates a code fence or a stray sentence around it. */
function parseJSON_(s) {
  try { return JSON.parse(s); } catch (e) {}
  var m = s.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (m) { try { return JSON.parse(m[1]); } catch (e) {} }
  var a = s.indexOf("{"), b = s.lastIndexOf("}");
  if (a >= 0 && b > a) { try { return JSON.parse(s.slice(a, b + 1)); } catch (e) {} }
  return null;
}

/* ---------- the brakes: per man, per anonymous pool, and everyone, each per day ---------- */
function allow_(id, props) {
  var cache = CacheService.getScriptCache();
  var day = Utilities.formatDate(new Date(), "America/Chicago", "yyyyMMdd");
  var capAll = num_(props.getProperty("CAP_ALL_DAY"), 600);
  var capMan = num_(props.getProperty("CAP_PER_MAN_DAY"), 60);
  var capAnon = num_(props.getProperty("CAP_ANON_DAY"), 120);
  var kAll = "all:" + day, kWho = (id ? "man:" + id : "anon") + ":" + day;
  var nAll = num_(cache.get(kAll), 0), nWho = num_(cache.get(kWho), 0);
  if (nAll >= capAll) return "cap_all";
  if (nWho >= (id ? capMan : capAnon)) return id ? "cap_man" : "cap_anon";
  cache.put(kAll, String(nAll + 1), 86400);
  cache.put(kWho, String(nWho + 1), 86400);
  return "ok";
}

function num_(v, d) { var n = parseInt(v, 10); return isNaN(n) ? d : n; }

/* The key is read from ANTHROPIC_API_KEY. If an earlier version of this relay stored it under another name,
   the first property whose value looks like a Claude key (sk-ant-…) is used, so a paste-over never loses the key. */
function findKey_(props) {
  var k = props.getProperty("ANTHROPIC_API_KEY");
  if (k) return k;
  var all = props.getProperties() || {};
  for (var name in all) { if (/^sk-ant-/.test(String(all[name] || ""))) return all[name]; }
  return "";
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/* ---------- run this once by hand in the editor after pasting the key: Run → checkKey ---------- */
function checkKey() {
  var key = findKey_(PropertiesService.getScriptProperties());
  if (!key) throw new Error("No ANTHROPIC_API_KEY in Script Properties yet.");
  var input = HOUSE_MARK + " This is a check of the relay. Reply with only this JSON object: {\"hello\": \"road\"}";
  var r = ask_(key, PropertiesService.getScriptProperties(), input);
  Logger.log(JSON.stringify(r));
  if (r.code !== "ok") throw new Error("The key or the call failed: " + r.code);
  Logger.log("The relay can reach Claude. Model answered: " + JSON.stringify(r.data));
}
