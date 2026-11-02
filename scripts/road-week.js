/* AP-HISROAD road.js build 11.1.1 — Your Page below the band as three views, This Week · Your House · Your Path, served by the Research reader script (ResearchReader.gs build 11.1, ?file=road.js).
   11.1.1 (Nov 2, 2026, house-rule fixes before the install): every heading in Title Case; the group line only when his mark matches the group's; no counts anywhere he reads; check-in last step preselects nothing and Skip saves nothing; first visit shows only what he has written; text left-aligned; taps 44px or more; on a computer (900px and wider) the check-in and sheets are a centered 640px panel over a dimmed page with Next right under the content; hover and focus-visible on every control; tabs carry aria-controls and arrow keys; the not-done ring is 3:1 or better.
   11.1 (Nov 2, 2026, the Witness): the invite roles read "A trusted friend"; the witness definition is the one the invited witness reads (a mentor, a coach or a trusted friend who walks with a man); Settings shows "What Your Witness Sees Each Week", the page exactly as his witness reads it, from v11.weekly. The invitation is now sent: a man outside a group whose witness said yes sees who walks with him (\"Name, your mentor, walks with you.\"), and an invitation that cannot go answers \"Our team walks with you.\" with no reason. No new screens; the witness page itself is served by the script (?w=).
   11.0 (Nov 1, 2026, Your Page 11.0; built to the prototype John ruled Oct 31, "this is the right direction. let's build from here."; built on the live 10.2.4): 1. The page below the band is three views with a tab each and Settings in the band's corner: This Week (the list, Last Week, This Week's Guidepost, Who Walks With You), Your House (a drawn house whose windows light, Your House / Our House, three rooms, Your Story · Told, Offered, Known, What I've Gathered, Make Something of It) and Your Path (the drawn road, What's Next for You, Your Courses, the Nine Guideposts, Walk With Another Man, three doors). 2. The check-in is one overlay of four steps with Back and Skip on each; every tap is written as it is made (road_mark, road_word, road_why, road_did, road_practice, road_when) and the end says road_checkin. 3. The piece, a letter from his witness, I need a hand, Settings and What This Page Is For open as sheets (a full screen on a phone, a sheet beside the page on a desk); each traps focus, closes on Esc and locks the page behind it. 4. After his group meets the list is Carry It This Week: What did you take from his group's night? (road_saw), his practice, the next piece; it returns to Before Your Group Meets when both are done or after three days. 5. The band is the page's own and is painted once, in one call (window.apBand.set), so it never moves on load. 6. Retired (their data stays, and the server still sends it): the old This Week layers, For Your Road, Your Land and its walk, Your Story panel, Courses and Doors panels, the frames and the welcome panel. The shelf cards stay the page's own and open in place under their rows. 7. Hooks for 11.1: v11.notes (the Notes tab) is read for the letter, v11.weekly (null) is where the weekly page his witness reads attaches, and the settings it needs (shares, notes paused) are saved here.
   Earlier builds' notes are in build 10.2.4's road.js. The page block on /start holds <div id="apRoad4"></div> under its band and this script's tag. */
(function () {
  "use strict";
  var host = document.getElementById("apRoad4");
  if (!host || host.getAttribute("data-hisroad")) return;
  host.setAttribute("data-hisroad", "11.1.1");
  var BUILD = "11.1.1";
  /* the stamped rule count of this script's stylesheet, taken before the file card (AP-SHIP 1); the page counts what the browser accepted against it */
  var RULES = { hisroad: 168 };
  var DESK_URL = "https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec";
  var ROAD_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split("?")[0] : ""; return /script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(u) ? u : ""; })();
  var CACHE = "ap_hisroad_v4";
  var data = null, me = null;
  var reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function nb(s) { return String(s || "").replace(/ (\S+)$/, " $1"); }
  function smart(s) { return String(s || "").replace(/(\w)'(\w)/g, "$1’$2").replace(/'/g, "’"); }
  function lc1(s) { s = String(s || ""); return s.charAt(0).toLowerCase() + s.slice(1); }
  /* Title Case for a label the server hands over (house rule: every heading a man reads) */
  var SMALLW = { a: 1, an: 1, and: 1, as: 1, at: 1, but: 1, by: 1, for: 1, from: 1, in: 1, into: 1, nor: 1, of: 1, on: 1, or: 1, the: 1, to: 1, up: 1, with: 1 };
  function tc(s) { return String(s || "").replace(/[A-Za-z’']+/g, function (w, i, all) { var l = w.toLowerCase(); return i > 0 && SMALLW[l] && !/[:·]\s*$/.test(all.slice(0, i)) ? l : w.charAt(0).toUpperCase() + w.slice(1); }); }
  function uc1(s) { s = String(s || ""); return s.charAt(0).toUpperCase() + s.slice(1); }
  function $(sel, root) { return (root || host).querySelector(sel); }
  function $$(sel, root) { return [].slice.call((root || host).querySelectorAll(sel)); }

  /* the stylesheet goes in once, just before the section (AP-SHIP 1: the page counts what the browser accepted against RULES) */
  (function () {
    if (document.getElementById("apHisRoadStyle")) return;
    var st = document.createElement("style"); st.id = "apHisRoadStyle"; st.setAttribute("data-ap-sheet", "hisroad");
    st.textContent = [
      ".ap-home .av{--paper:#FBF9F5;--sand:#F3EDE3;--card:#FFFFFF;--navy:#1F2A44;--ink:#2B3040;--quiet:#5E6573;--rule:#E2DCD1;--bronze:#B8945F;--bronze-ink:#8A6A3B;--glow:#E9C98F;--mark:#7F8692;--serif:'Source Serif 4',Georgia,serif;--sans:'Source Sans 3','Segoe UI',Arial,sans-serif;--r1:6px;--r2:10px;--r3:14px;--tap:44px;--ease:cubic-bezier(.2,.7,.2,1);display:block;color:var(--ink) !important;font:400 16px/1.5 var(--sans) !important;text-align:left}",
      ".ap-home .av *,.ap-home .av *:before,.ap-home .av *:after{box-sizing:border-box}",
      ".ap-home .av p{margin:0;text-wrap:pretty}",
      ".ap-home .av button{appearance:none;-webkit-appearance:none;background:none;border:0;margin:0;padding:0;text-transform:none;letter-spacing:normal;box-shadow:none;cursor:pointer;text-align:left;border-radius:0;line-height:1.3}",
      ".ap-home .av a{color:inherit !important}",
      ".ap-home .av .av-main{position:relative}",
      ".ap-home .av .av-main[inert]{pointer-events:none}",
      ".ap-home .av .av-view{max-width:720px;padding:16px 0 40px}",
      ".ap-home .av .av-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",
      ".ap-home .av :focus-visible{outline:3px solid var(--bronze);outline-offset:2px;border-radius:4px}",
      ".ap-home .av .av-vlead{font:italic 400 16.5px/1.4 var(--serif) !important;color:var(--quiet) !important;padding:0 2px 12px}",
      ".ap-home .av .av-last{font-size:15px;color:var(--quiet) !important;padding:2px 2px 12px}",
      ".ap-home .av .av-last b{color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-card{background:var(--card);border:1px solid var(--rule);border-radius:var(--r2);padding:16px;margin-top:12px}",
      ".ap-home .av .av-card.av-first{margin-top:0;border-top:3px solid var(--bronze)}",
      ".ap-home .av .av-lk{font:600 11.5px/1.3 var(--sans) !important;letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink) !important}",
      ".ap-home .av .av-t{margin-top:4px;font:400 19px/1.3 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-s{margin-top:6px;font-size:15px}",
      ".ap-home .av .av-help{margin-top:6px;font-size:13.5px;color:var(--quiet) !important}",
      ".ap-home .av .av-walk{display:inline-flex;align-items:center;gap:4px;min-height:var(--tap);padding:0;font:600 15px/1.3 var(--sans) !important;color:var(--navy) !important;text-decoration:none !important}",
      ".ap-home .av .av-walk .av-u{border-bottom:1px solid var(--bronze);padding-bottom:1px}",
      ".ap-home .av .av-walk .av-ar{color:var(--bronze-ink) !important}",
      ".ap-home .av .av-carry{margin-top:10px;border-left:3px solid var(--bronze);background:var(--sand);padding:10px 12px;border-radius:0 var(--r1) var(--r1) 0}",
      ".ap-home .av .av-carry .av-lk{font-size:11px}",
      ".ap-home .av .av-carry p+p{margin-top:2px;font:400 16.5px/1.4 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-try{margin-top:10px;font-size:15px}",
      ".ap-home .av .av-try b{color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-more{overflow:hidden;max-height:0;visibility:hidden;transition:max-height .35s var(--ease)}",
      ".ap-home .av .av-more.av-open{max-height:900px;visibility:visible}",
      ".ap-home .av .av-list{background:var(--card);border:1px solid var(--rule);border-radius:var(--r3);overflow:hidden}",
      ".ap-home .av .av-hd{display:flex;justify-content:space-between;align-items:baseline;padding:14px 16px 6px}",
      ".ap-home .av .av-hd b{font:400 19px/1.3 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-hd span{font-size:13.5px;color:var(--quiet) !important}",
      ".ap-home .av .av-row{display:grid;grid-template-columns:28px 1fr auto;gap:12px;align-items:center;width:100%;min-height:64px;padding:12px 16px;border-top:1px solid var(--rule);text-align:left;color:var(--ink) !important}",
      ".ap-home .av .av-hd+.av-row{border-top:0}",
      ".ap-home .av .av-row.av-still{cursor:default}",
      ".ap-home .av .av-ring{width:24px;height:24px;border-radius:50%;border:2px solid var(--mark);position:relative;transition:background .3s var(--ease),border-color .3s var(--ease)}",
      ".ap-home .av .av-row.av-done .av-ring{background:var(--bronze);border-color:var(--bronze)}",
      ".ap-home .av .av-row.av-done .av-ring:after{content:\"\";position:absolute;left:7px;top:3px;width:6px;height:11px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}",
      ".ap-home .av .av-ly{display:block;font:600 11px/1.3 var(--sans) !important;letter-spacing:.07em;text-transform:uppercase;color:var(--bronze-ink) !important}",
      ".ap-home .av .av-tt{display:block;font-size:15.5px;color:var(--ink) !important;margin-top:1px}",
      ".ap-home .av .av-row small{display:block;font-size:13px;color:var(--quiet) !important;margin-top:1px}",
      ".ap-home .av .av-row.av-done .av-tt{color:var(--quiet) !important}",
      ".ap-home .av .av-go{font:600 14px/1.3 var(--sans) !important;color:var(--navy) !important;border-bottom:1px solid var(--bronze);white-space:nowrap}",
      ".ap-home .av .av-row.av-done .av-go{border-bottom:0;color:var(--quiet) !important;font-weight:400}",
      ".ap-home .av .av-row.av-pop .av-ring{animation:av-pop .5s var(--ease)}",
      "@keyframes av-pop{0%{transform:scale(1)}40%{transform:scale(1.25)}100%{transform:scale(1)}}",
      ".ap-home .av .av-letterc{background:#FFFDF8;border:1px solid var(--rule);border-left:4px solid var(--bronze);border-radius:var(--r2);padding:16px;margin-bottom:12px}",
      ".ap-home .av .av-ceremony{background:var(--navy);color:#F3EDE3 !important;border-radius:var(--r3);padding:20px;margin-bottom:12px}",
      ".ap-home .av .av-ceremony .av-lk{color:#D9B97F !important}",
      ".ap-home .av .av-ceremony .av-t{color:#F3EDE3 !important;font-size:22px}",
      ".ap-home .av .av-ceremony .av-s{color:#D8D0C4 !important}",
      ".ap-home .av .av-ceremony .av-walk{color:#F3EDE3 !important}",
      ".ap-home .av .av-answer textarea{display:block;width:100%;min-height:96px;margin-top:10px;padding:12px;border:1px solid var(--rule);border-radius:var(--r1);background:var(--paper);font:16px/1.5 var(--sans) !important;color:var(--ink) !important;resize:vertical}",
      ".ap-home .av .av-btn{display:block;width:100%;min-height:48px;margin-top:12px;border-radius:8px;background:var(--navy);color:var(--paper) !important;font:600 15.5px/1.3 var(--sans) !important;text-align:center}",
      ".ap-home .av .av-btn[disabled]{opacity:.55;cursor:default}",
      ".ap-home .av .av-kept{margin-top:8px;font-size:14px;color:var(--quiet) !important;min-height:20px}",
      ".ap-home .av .av-kept b{color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-choices{display:grid;gap:8px;margin-top:12px}",
      ".ap-home .av .av-choices.av-two{grid-template-columns:1fr 1fr}",
      ".ap-home .av .av-choices.av-three{grid-template-columns:1fr 1fr 1fr}",
      ".ap-home .av .av-choice{min-height:var(--tap);padding:10px 12px;border:1px solid var(--rule);border-radius:8px;background:var(--card);font-size:15px;color:var(--ink) !important;text-align:left;display:flex;align-items:center;justify-content:flex-start;gap:6px}",
      ".ap-home .av .av-choice.av-left{justify-content:flex-start;text-align:left}",
      ".ap-home .av .av-choice[aria-pressed=\"true\"],.ap-home .av .av-choice[aria-checked=\"true\"]{border:2px solid var(--bronze);background:var(--sand);color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-choice[aria-pressed=\"true\"]:before,.ap-home .av .av-choice[aria-checked=\"true\"]:before{content:\"\\2713\";color:var(--bronze-ink) !important}",
      ".ap-home .av .av-choice svg{width:16px;height:16px;flex:none;fill:currentColor}",
      ".ap-home .av .av-words{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}",
      ".ap-home .av .av-word{min-height:var(--tap);padding:6px 14px;border:1px solid var(--rule);border-radius:999px;background:var(--card);font-size:14.5px;color:var(--ink) !important}",
      ".ap-home .av .av-word[aria-pressed=\"true\"]{border:2px solid var(--bronze);background:var(--sand);color:var(--navy) !important;font-weight:600}",
      ".ap-home .av .av-ov{position:fixed;inset:0;background:var(--paper);z-index:2147483000;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .38s var(--ease);visibility:hidden;overscroll-behavior:contain}",
      ".ap-home .av .av-ov.av-open{transform:none;visibility:visible}",
      ".ap-home .av .av-scrim{position:fixed;inset:0;background:rgba(16,21,31,.45);z-index:2147482999;opacity:0;visibility:hidden;transition:opacity .3s var(--ease)}",
      ".ap-home .av .av-scrim.av-on{opacity:1;visibility:visible}",
      ".ap-home .av .av-ohead{display:flex;justify-content:space-between;align-items:center;padding:14px 16px 6px 20px}",
      ".ap-home .av .av-close{min-height:var(--tap);min-width:var(--tap);font:600 14px/1.3 var(--sans) !important;color:var(--navy) !important;text-align:center}",
      ".ap-home .av .av-obody{flex:1;overflow-y:auto;padding:4px 20px 24px;overscroll-behavior:contain}",
      ".ap-home .av .av-ofoot{padding:12px 20px 20px;border-top:1px solid var(--rule);background:var(--paper)}",
      ".ap-home .av .av-bar{display:flex;gap:6px}",
      ".ap-home .av .av-bar i{flex:1;height:4px;border-radius:2px;background:var(--rule);transition:background .3s var(--ease)}",
      ".ap-home .av .av-bar i.av-on{background:var(--bronze)}",
      ".ap-home .av .av-q{font:400 25px/1.25 var(--serif) !important;color:var(--navy) !important;margin-top:6px}",
      ".ap-home .av .av-sub{font:600 12px/1.3 var(--sans) !important;letter-spacing:.07em;text-transform:uppercase;color:var(--quiet) !important;margin-top:16px}",
      ".ap-home .av .av-give{background:var(--sand);border-radius:var(--r2);padding:14px;margin-top:12px;opacity:0;transform:translateY(8px);transition:opacity .45s var(--ease),transform .45s var(--ease)}",
      ".ap-home .av .av-give.av-in{opacity:1;transform:none}",
      ".ap-home .av .av-give p+p{margin-top:4px;font-size:15px}",
      ".ap-home .av .av-links{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:4px 24px}",
      ".ap-home .av .av-quote{margin-top:12px;font:400 20px/1.45 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-src{margin-top:8px;font-size:13.5px;color:var(--quiet) !important}",
      ".ap-home .av .av-said{margin-top:10px;padding-top:10px;border-top:1px solid var(--rule)}",
      ".ap-home .av .av-said p+p{margin-top:6px}",
      ".ap-home .av .av-paper{background:#FFFDF8;color:#2B3040 !important;border:1px solid var(--rule);border-radius:4px;padding:22px;margin-top:12px;font:400 17px/1.6 var(--serif) !important;box-shadow:0 1px 4px rgba(0,0,0,.06)}",
      ".ap-home .av .av-paper p+p{margin-top:12px}",
      ".ap-home .av .av-paper .av-sig{font-style:italic;color:#5E6573 !important}",
      ".ap-home .av .av-house{display:block;width:100%;height:auto;color:var(--navy) !important}",
      ".ap-home .av .av-house .av-win{fill:#F6EFE2;stroke:var(--bronze);transition:fill .9s var(--ease)}",
      ".ap-home .av .av-house .av-win.av-lit{fill:var(--glow)}",
      ".ap-home .av .av-house .av-win.av-flare{animation:av-flare 1.4s var(--ease)}",
      "@keyframes av-flare{0%{fill:#F6EFE2}35%{fill:#FFE2A6}100%{fill:var(--glow)}}",
      ".ap-home .av .av-house.av-mini{max-width:260px;margin:6px auto 0}",
      ".ap-home .av .av-seg2{display:flex;gap:8px;margin-top:4px}",
      ".ap-home .av .av-seg2 button{min-height:var(--tap);padding:6px 16px;border-radius:999px;border:1px solid var(--rule);background:var(--card);font:600 14px/1.3 var(--sans) !important;color:var(--navy) !important}",
      ".ap-home .av .av-seg2 button[aria-pressed=\"true\"]{border:2px solid var(--bronze);background:var(--sand)}",
      ".ap-home .av .av-room{border-top:3px solid var(--bronze)}",
      ".ap-home .av .av-room .av-t{font-size:17.5px}",
      ".ap-home .av .av-rw{font:600 12px/1.3 var(--sans) !important;color:var(--quiet) !important;margin-top:2px}",
      ".ap-home .av .av-line{margin-top:10px;font-size:15px}",
      ".ap-home .av .av-line.av-mine{font-family:var(--serif) !important;font-style:italic;font-size:16px}",
      ".ap-home .av .av-line.av-new{animation:av-newline 1.6s var(--ease)}",
      "@keyframes av-newline{0%{background:#FFE9BE}100%{background:transparent}}",
      ".ap-home .av .av-line small{display:block;font:400 12.5px/1.4 var(--sans) !important;font-style:normal;color:var(--quiet) !important}",
      ".ap-home .av .av-shelf .av-it{border-top:1px solid var(--rule)}",
      ".ap-home .av .av-shelf .av-it:first-child{border-top:0}",
      ".ap-home .av .av-shelf .av-itb{display:flex;justify-content:space-between;gap:12px;align-items:center;width:100%;min-height:52px;text-align:left;color:var(--ink) !important;font-size:15px}",
      ".ap-home .av .av-shelf em{font-style:normal;font-size:13px;color:var(--quiet) !important;text-align:right}",
      ".ap-home .av .av-slot{padding:0 0 12px}",
      ".ap-home .av .av-slot[hidden]{display:none}",
      ".ap-home .av .av-vol{display:grid;grid-template-columns:110px 1fr;gap:14px;align-items:center;margin-top:10px}",
      ".ap-home .av .av-cover{background:var(--navy);color:#F3EDE3 !important;border-radius:4px;padding:12px 10px;height:140px;display:flex;flex-direction:column;box-shadow:0 2px 6px rgba(0,0,0,.18)}",
      ".ap-home .av .av-cover .av-ck{font:600 8.5px/1.3 var(--sans) !important;letter-spacing:.1em;text-transform:uppercase;color:#D9B97F !important}",
      ".ap-home .av .av-cover .av-ct{margin-top:6px;font:400 15px/1.15 var(--serif) !important}",
      ".ap-home .av .av-cover .av-cv{margin-top:auto;font:italic 400 9px/1.35 var(--serif) !important;color:#E8E0D2 !important}",
      ".ap-home .av .av-road{display:block;width:100%;height:auto;margin-bottom:4px}",
      ".ap-home .av .av-course{display:flex;justify-content:space-between;align-items:center;gap:10px;min-height:52px;border-top:1px solid var(--rule)}",
      ".ap-home .av .av-course:first-of-type{border-top:0}",
      ".ap-home .av .av-course b{font:400 16.5px/1.3 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-course span{font-size:14px;color:var(--quiet) !important;text-align:right}",
      ".ap-home .av a.av-course{text-decoration:none !important;color:inherit !important}",
      ".ap-home .av .av-gp{border-top:1px solid var(--rule)}",
      ".ap-home .av .av-gp:first-of-type{border-top:0}",
      ".ap-home .av .av-gp>button{width:100%;min-height:52px;display:flex;justify-content:space-between;align-items:center;padding:6px 0;text-align:left;color:var(--ink) !important}",
      ".ap-home .av .av-gp b{font:400 16px/1.3 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-one{font-size:13.5px;color:var(--quiet) !important}",
      ".ap-home .av .av-gp .av-body{font-size:14.5px;padding:0 0 12px}",
      ".ap-home .av .av-doors{display:flex;flex-wrap:wrap;gap:0 18px;margin-top:12px;padding-top:4px;border-top:1px solid var(--rule)}",
      ".ap-home .av .av-toggle{display:flex;justify-content:space-between;align-items:center;min-height:52px;border-top:1px solid var(--rule);gap:12px}",
      ".ap-home .av .av-toggle:first-of-type{border-top:0}",
      ".ap-home .av .av-sw{width:56px;height:44px;min-height:44px;min-width:56px;position:relative;flex:none;background:none}",
      ".ap-home .av .av-sw:before{content:\"\";position:absolute;left:3px;top:7px;width:50px;height:30px;border-radius:999px;background:var(--rule)}",
      ".ap-home .av .av-sw:after{content:\"\";position:absolute;top:10px;left:6px;width:24px;height:24px;border-radius:50%;background:#fff;transition:transform .2s var(--ease);box-shadow:0 1px 2px rgba(0,0,0,.2)}",
      ".ap-home .av .av-sw[aria-checked=\"true\"]:before{background:var(--bronze)}",
      ".ap-home .av .av-sw[aria-checked=\"true\"]:after{transform:translateX(20px)}",
      ".ap-home .av .av-field{display:flex;flex-direction:column;gap:4px;margin-top:10px;font:600 13px/1.3 var(--sans) !important;color:var(--ink) !important}",
      ".ap-home .av .av-field input{min-height:var(--tap);padding:8px 10px;border:1px solid var(--rule);border-radius:var(--r1);font:16px/1.3 var(--sans) !important;background:var(--card);color:var(--ink) !important}",
      ".ap-home .av .av-toast{position:fixed;left:16px;right:16px;bottom:18px;z-index:2147483200;max-width:440px;margin:0 auto;background:var(--navy);color:var(--paper) !important;border-radius:10px;padding:12px 14px;font-size:14.5px;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .3s var(--ease),transform .3s var(--ease);pointer-events:none}",
      ".ap-home .av .av-toast.av-in{opacity:1;visibility:visible;transform:none}",
      ".ap-home .av .av-verse{margin-top:10px;font:italic 400 17px/1.5 var(--serif) !important;color:var(--navy) !important}",
      ".ap-home .av .av-verse span{display:block;margin-top:2px;font:600 12.5px/1.3 var(--sans) !important;font-style:normal;color:var(--bronze-ink) !important}",
      ".ap-home .av .av-news{margin-bottom:12px;padding:12px 14px;border-radius:var(--r2);background:var(--sand);font-size:15px}",
      ".ap-home .av .av-news a{font-weight:600;color:var(--navy) !important;margin-left:8px;border-bottom:1px solid var(--bronze);white-space:nowrap}",
      ".ap-home .av .av-ctxt{margin-top:8px;display:flex;flex-direction:column;gap:6px}",
      ".ap-home .av .av-ctxt a{font-weight:600;color:var(--navy) !important;border-bottom:1px solid var(--bronze);align-self:flex-start;min-height:var(--tap);display:inline-flex;align-items:center}",
      ".ap-home .av .av-quo{margin-top:10px;padding-left:12px;border-left:3px solid var(--rule);font:italic 400 16px/1.5 var(--serif) !important}",
      ".ap-home .av .av-quo small{display:block;font:400 12.5px/1.4 var(--sans) !important;font-style:normal;color:var(--quiet) !important}",
      "@media (min-width:900px){.ap-home .av .av-ov{inset:auto;top:50%;left:50%;width:640px;max-width:calc(100vw - 48px);height:auto;max-height:calc(100vh - 64px);border-radius:14px;border:1px solid var(--rule);box-shadow:0 24px 64px rgba(16,21,31,.28);transform:translate(-50%,-46%);opacity:0;transition:transform .3s var(--ease),opacity .25s var(--ease),visibility 0s linear .3s}.ap-home .av .av-ov.av-open{transform:translate(-50%,-50%);opacity:1;transition:transform .3s var(--ease),opacity .25s var(--ease),visibility 0s}.ap-home .av .av-obody{flex:0 1 auto;min-height:0}.ap-home .av .av-ofoot{border-radius:0 0 14px 14px}}",
      ".ap-home .av .av-row:not(.av-still):hover{background:var(--sand)}",
      ".ap-home .av .av-btn:hover{filter:brightness(1.12)}",
      ".ap-home .av .av-walk:hover .av-u{border-bottom-color:var(--bronze-ink);border-bottom-width:2px}",
      ".ap-home .av .av-shelf .av-itb:hover,.ap-home .av .av-gp>button:hover,.ap-home .av .av-course:hover{background:var(--sand)}",
      ".ap-home .av .av-choice:hover{border-color:var(--bronze);background:var(--sand)}",
      ".ap-home .av .av-word:hover{border-color:var(--bronze);background:var(--sand)}",
      ".ap-home .av .av-seg2 button:hover{border-color:var(--bronze);background:var(--sand)}",
      ".ap-home .av .av-close:hover{color:var(--bronze-ink) !important;text-decoration:underline !important}",
      ".ap-home .av .av-news a:hover,.ap-home .av .av-ctxt a:hover{color:var(--bronze-ink) !important;border-bottom-color:var(--bronze-ink)}",
      ".ap-home .av .av-row:focus-visible,.ap-home .av .av-itb:focus-visible,.ap-home .av .av-gp>button:focus-visible{outline-offset:-3px}",
      ".ap-home .ap-band button.ap-tab:hover{color:#FFFFFF !important;background:rgba(255,255,255,.09)}",
      ".ap-home .ap-band button.ap-set:hover{color:#FFFFFF !important;text-decoration:underline !important}",
      "@media (max-width:420px){.ap-home .av .av-choices.av-three{grid-template-columns:1fr}.ap-home .av .av-q{font-size:23px}}",
      "@media (prefers-reduced-motion:reduce){.ap-home .av *,.ap-home .av *:before,.ap-home .av *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}"
    ].join("");
    host.parentNode.insertBefore(st, host);
  })();

  /* ───────────── the page's own pieces, as the page already read them (ap:states, ap:stones, ap:courses) ───────────── */
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  function dparts(iso) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || "")); return m ? { y: +m[1], m: +m[2], d: +m[3] } : null; }
  function wdName(iso) { var p = dparts(iso); return p ? DAYS[new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay()] : ""; }
  function states() { var r = window.apStates; return r && r.length ? r : []; }
  function stateOf(key) { var s = states().filter(function (x) { return x && x.key === key; })[0]; return s && s.status && s.status !== "none" ? s : null; }
  function surfaces() { return window.apSurfaces || {}; }
  function shelf() { return document.getElementById("apShelf"); }
  function cardNode(key) { return document.querySelector('.ap-card[data-story="' + key + '"]'); }
  function cardShown(n) { return !!n && n.style.display !== "none"; }
  function titleOf(n) { var t = n.querySelector(".ap-card-title"); return t ? String(t.textContent || "").trim() : ""; }
  function norm(s) { return String(s || "").toLowerCase().replace(/^\s*write\s+(?:an?\s+|your\s+)?/, "").replace(/^\s*your\s+/, "").replace(/[^a-z0-9]+/g, " ").trim(); }
  function cardFor(name) {
    var n = norm(name); if (!n) return null;
    var keys = Object.keys(surfaces()), i, c, t;
    for (i = 0; i < keys.length; i++) { c = cardNode(keys[i]); if (c && norm(titleOf(c)) === n) return c; }
    for (i = 0; i < keys.length; i++) { c = cardNode(keys[i]); t = c ? norm(titleOf(c)) : ""; if (t.length > 3 && (t.indexOf(n) >= 0 || n.indexOf(t) >= 0)) return c; }
    return null;
  }
  function cardHref(c) { var a = c && c.querySelector(".ap-card-actions a"); return a ? String(a.getAttribute("href") || "") : ""; }
  function firstSentence(s) { s = String(s || "").replace(/\s+/g, " ").trim(); var m = /^[^.?!]*[.?!]/.exec(s); return m ? m[0] : s; }
  function writeName(t) {
    t = String(t || ""); var m = /^write\s+(?:an?|your)\s+(.+)$/i.exec(t);
    if (m) return "Write your " + m[1].toLowerCase();
    return /^write\s/i.test(t) ? t : "Write " + t;
  }
  function numOf(v) { var n = parseInt(v, 10); return isNaN(n) ? 0 : n; }
  /* the course's own card on the page (its link), else the courses door; no course is named here */
  function courseHref(name) {
    var n = norm(name), cards = document.querySelectorAll(".ap-card.ap-course, a.ap-ccard"), i, t, a;
    for (i = 0; i < cards.length; i++) {
      t = cards[i].querySelector(".ap-card-title, .ap-ccard-name"); a = cards[i].tagName === "A" ? cards[i] : cards[i].querySelector("a[href]");
      if (t && a && norm(t.textContent) === n) return a.getAttribute("href") || "";
    }
    return "/courses";
  }

  /* the story work the course has introduced by this week that he has not finished (the Course map's piece column, up to his week); the server's band names it */
  function writeList(d) {
    var b = (d && d.band) || {}, out = [], seen = {};
    if (!window.apStates || !window.apStates.length) return out;
    var W = window.apWeek || {};
    var list = b.writes && b.writes.length ? b.writes : ((!b.course && W.pieces) || []).map(function (p) { return { piece: p.name, address: p.href, unit: p.week }; });
    list.forEach(function (w) {
      var card = cardFor(w.piece), key = card ? card.getAttribute("data-story") : "", st = key ? stateOf(key) : null;
      var title = card ? titleOf(card) : String(w.piece || ""); if (!title || seen[norm(title)]) return; seen[norm(title)] = 1;
      out.push({ title: title, href: w.address || cardHref(card), unit: numOf(w.unit), finished: !!(st && st.status === "finished"), begun: !!st, key: key });
    });
    return out;
  }

  /* ───────────── words lifted from the ruled prototype (Oct 31); nothing here is invented ───────────── */
  var WORDS = ["ashamed", "exposed", "afraid", "angry", "sad", "hurt", "alone", "numb"];
  var MORE_WORDS = ["lonely", "overwhelmed", "guilty", "anxious", "tired", "tender", "relieved", "seen", "hopeful", "grateful", "steady", "free", "glad"];
  var NEED_FB = {
    afraid: "Afraid often asks for safety. Think of one safe person, and let him know where you are this week.",
    ashamed: "Ashamed often asks to be known and still welcomed. Tell one man one true thing this week.",
    exposed: "Exposed often asks for covering. Choose who sees your story, and let it be someone who stays.",
    angry: "Angry often asks for something to be made right. Name what was wrong before you decide what to do.",
    sad: "Sad often asks for comfort. Let someone sit with you instead of fixing it.",
    hurt: "Hurt often asks for care. Say where it hurts to someone who can hear it.",
    alone: "Alone often asks for connection. One call this week is enough to start.",
    numb: "Numb often asks for a gentle way back into your body. Feet on the floor, and breathe out slower than you breathe in."
  };
  var PATHS = [["view", "The view is good", '<path d="M2 16 L8 7 L11 11 L14 6 L18 16 Z"/>'], ["footing", "Good footing", '<rect x="3" y="11" width="14" height="5" rx="1.5"/>'],
    ["steep", "Steep", '<path d="M3 16 L17 4 V16 Z"/>'], ["lost", "Lost the trail", '<circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 8 a2.4 2.4 0 1 1 3 2.3 V12" fill="none" stroke="currentColor" stroke-width="1.8"/>']];
  var PATHWORD = { view: "the view good", footing: "good footing", steep: "the path steep", lost: "that you lost the trail" };
  var GROUPWORD = { view: "the view good", footing: "good footing", steep: "the path steep", lost: "the trail lost" };
  var HOW = { most: "Kept. That’s a pathway forming.", some: "Kept. Some days counts. Pathways take time to form; keep going.", notyet: "Kept. We understand shifting priorities. We’re here to encourage the next right choice toward the healthy pathway you’ve identified. Choose it next." };
  var WHENS = [["morning", "Each morning"], ["pull", "When the pull comes"], ["bed", "Before bed"]];
  var RHYTHMS = [["twice", "Twice a day"], ["daily", "Each day"], ["few", "A few days a week"], ["weekly", "Once a week"]];
  /* what each rhythm does, said back to him (it sets how many readings he is handed; reminders themselves are not sent yet) */
  var RHYTHM_SAID = { twice: "Kept. New pieces can come up to twice a day.", daily: "Kept. A new piece can come each day.", few: "Kept. A new piece can come three days a week.", weekly: "Kept. Pieces come three days a week at the fewest; that is the least we hand out." };
  var SHARES = [["path", "The path and the word"], ["piece", "Whether the piece helped"], ["practice", "How your practice went"], ["words", "Your own words"]];
  var LEADS = { week: "Stand where you are, look, and take the next step.", house: "What you’ve walked becomes a home. Rest in it.", path: "Ask for the good way, and walk in it." };
  var ROOMS = [["did", "By wisdom a house is built", "What You Did"], ["saw", "by understanding it is established", "What You Saw"], ["know", "by knowledge the rooms are filled", "What You Know Now"]];
  var DANGER = "Call 911, or call or text 988 to reach the Suicide and Crisis Lifeline.";
  var SAFE = "What you write here goes to our team, and a person reads it within __REVIEW__, before anything else happens with it. It stays with our team, with one exception: if we believe you or someone else is in danger, we will act on that, and we will tell you we are doing it. For men eighteen and older.";
  var WHO_CARRIED_HELP = "Drawn from what the group said together, never from one man’s words.";
  var WITNESS_SENT = "Kept. We’ll send your invitation with what a witness does, and tell you when they say yes. Until then, our team walks with you.";
  var WROLES = [["mentor", "A mentor"], ["coach", "A coach"], ["friend", "A trusted friend"], ["pastor", "A pastor"], ["relative", "A relative"]];
  var PAGES = { stones: "/set-a-stone", story: "/your-story", team: "/begin", profile: "/profile" };
  var OPEN_COURSES = [["Breaking Free", "student-course"], ["Known by Jesus", "i-want-you-to-know-me"], ["Do Hard Things", "do-hard-things"], ["Walk With Me", "walk-with-me"]];

  var WAYMARKS = [{"n":1,"name":"The Watchpost","one":"Notice before you react.","stuck":"We react before we notice. A craving or a trigger shows up and we are already acting on it.","sounds":"Sounds like: “I don’t know what happened. It just happened.”","is_":"The mind has a center (the hub) and a ring of passing urges, feelings and thoughts (the rim). When we live on the rim, whatever comes up runs us. We can learn to stand at the hub and watch it pass.","scripture":"Habakkuk takes his stand at a watchpost and looks out (Habakkuk 2:1). David talks to his own soul instead of obeying it (Psalm 42:5). God tells Cain that sin is crouching at the door, “but you must rule over it” (Genesis 4:7).","applied":"","ask":"Slow it down. What did you feel in your body right before?","helps":"The Five Questions · The Wheel","carry":"Slow it down. What did you feel in your body right before?","try":"The Five Questions: before you react, notice what your body feels, the picture in your mind, the feeling, the thought, and what you want to do."},
    {"n":2,"name":"From the Ground Up","one":"Body first.","stuck":"We go numb, check out, or get flooded. Either we feel nothing, or the feeling is so big we cannot think.","sounds":"Sounds like: “I went somewhere else.” “My body took over.”","is_":"Signals rise from the body and brainstem, and the thinking part at the front of the brain can steady them only when that line is open. Trauma cuts the line. The body has to settle before the mind can help.","scripture":"Elijah, worn out and afraid, is fed and sleeps before God speaks to him (1 Kings 19:5–8). “I have calmed and quieted my soul” (Psalm 131:2).","applied":"","ask":"Are you here with me, or somewhere else? What would help you land?","helps":"Feet on the Floor · The Long Exhale · The Body Check","carry":"Where do you feel stress in your body right now? Is it loud, quiet, or gone?","try":"Feet on the Floor: feet on the floor, seat in the chair. Name three things you can see and say where you are and what day it is."},
    {"n":3,"name":"The Word for It","one":"Say what you feel.","stuck":"We feel it and cannot say it, or we can explain it for an hour and never feel it. Either speechless or only explaining.","sounds":"Sounds like: “I don’t have words.” “I know exactly why I did it.” (and nothing changes)","is_":"Raw feeling and images live mostly on the right side of the brain. Language and logic live mostly on the left. Healing needs both sides talking. Putting an exact word on a feeling turns its volume down.","scripture":"Adam names each animal, putting the right word on what he sees (Genesis 2:19–20). The psalmist Asaph, too troubled to speak (Psalm 77:4), still writes a psalm. David found that silence wasted his bones (Psalm 32:3–5).","applied":"","ask":"If this feeling had one word, what would it be? Is there a more exact one?","helps":"Name It to Tame It · Borrowed Vessels","carry":"If this feeling had one word, what would it be? Is there a more exact one?","try":"Name It to Tame It: put one exact word on the feeling and say it out loud."},
    {"n":4,"name":"Past Tense","one":"It happened. It is over.","stuck":"An old hurt still lives in the body as if it were happening now. We react to today with yesterday’s fear and cannot say why.","sounds":"Sounds like: “I know it’s not a big deal, but my body says I’m in danger.”","is_":"Some memories are stored in the body with no “then” stamped on them, so they feel like the present. Healing moves them into plain history: that happened, it is over, and I am here. A memory can be rewritten when we recall it and meet something it did not expect.","scripture":"After crossing the Jordan, Israel sets up stones, so a memory has a place and a date (Joshua 4:6–7). Peter denies Jesus at a charcoal fire and is restored by Jesus at another one (John 18:18; John 21:9). Same smell, new ending.","applied":"","ask":"How old do you feel right now?","helps":"The Feeling Bridge · The Surprise · Set a Stone","carry":"How old do you feel right now?","try":"The Feeling Bridge: notice where the feeling sits and when you first remember it. Go slowly, and with someone safe."},
    {"n":5,"name":"The Whole Story","one":"Pain included, and it makes sense.","stuck":"Our life reads as a list of failures or a blur of fragments. “I am broken” becomes the title of the whole book.","sounds":"Sounds like: “That’s just who I am.”","is_":"Research on attachment finds that a coherent account of our own life, pain included, is one of the strongest predictors that a person’s own children will be securely attached (able to trust and stay close to others). The goal is not a happy story. It is a true one that holds together.","scripture":"Joseph, speaking to the brothers who sold him, holds the harm and the good in one sentence: “You meant evil against me, but God meant it for good” (Genesis 50:20). “Let the redeemed of the LORD say so” (Psalm 107:2).","applied":"","ask":"Which part of your story do you tell fastest? Which part do you skip?","helps":"Four Ways to Read a Life · The Seven-Stage Journey","carry":"If your story had a title right now, what would it be? What do you want it to be?","try":"Four Ways to Read a Life: start with what happened, the plain facts."},
    {"n":6,"name":"One Heart","one":"Every part gets a seat.","stuck":"We feel like several different people: the one who performs, the one who sins in private, the child who is still afraid. They do not talk to each other, and we are ashamed of each.","sounds":"Sounds like: “I don’t know who I really am.”","is_":"The mind holds many states, such as roles, moods and ages. That is normal. The trouble comes when they are walled off. Healing does not erase any of them. It brings them to one table so a steady self (the calm center that can listen to every part) can lead.","scripture":"Paul describes it: “I do not understand my own actions” (Romans 7:15). David prays, “unite my heart to fear your name” (Psalm 86:11).","applied":"","ask":"Who takes over when you are under pressure? What is that part protecting?","helps":"Name the Survivors · A Seat for Every Part","carry":"Who takes over when you are under pressure? What is that part protecting?","try":"Name the Survivors: which one showed up this week, the Performer, the Loner, the Achiever or the Pleaser?"},
    {"n":7,"name":"The Old Vows","one":"Then is not now.","stuck":"We still live by promises we made to stay safe, often as children. The danger passed. The promise did not.","sounds":"Sounds like: “I’ll never let anyone see that again.” “I’ll never need anyone.”","is_":"We want certainty, and life brings change and loss. A vow tries to buy certainty: if I never need anyone, no one can leave. Trauma freezes time, and the mind keeps the rules it made at the worst moment and applies them to a life that has changed. The work is seeing a vow for what it was, protection for then, and retiring it. A vow we trust instead of God becomes an idol.","scripture":"“Remember not the former things… Behold, I am doing a new thing” (Isaiah 43:18–19). Paul presses on, “forgetting what lies behind” (Philippians 3:13). Not erasing it but no longer ruled by it.","applied":"Read as an application: neither verse speaks of vows in its own setting.","ask":"What did you promise yourself you would never do or never feel again? What has that promise cost you?","helps":"Release the Vow · A Letter to the Child · Ending Well","carry":"What rule did you make as a kid to stay safe? Is it still running?","try":"Release the Vow: name the vow, and see what it protected you from."},
    {"n":8,"name":"Me and We","one":"Close without disappearing.","stuck":"We keep everyone out, or we merge with people and fear losing them. We are alone in a crowd or panicked when someone pulls away.","sounds":"Sounds like: “I’ll handle it myself.” “If I say no, they’ll leave.”","is_":"We settle when someone’s attention meets ours and feels what we feel. Health is both: a self of our own, and a “we” we can be close in without losing the self.","scripture":"“It is not good that the man should be alone” (Genesis 2:18). “Confess your sins to one another and pray for one another, that you may be healed” (James 5:16). Jesus tells a worshiper at the altar to leave the gift and first go be reconciled with a brother or sister (Matthew 5:23–24).","applied":"","ask":"When you pull back from people, what are you protecting?","helps":"Confession to One Another · The Four S’s · Break and Mend","carry":"Who knows the real story? Who would you want to know it?","try":"Confession to One Another: say it out loud to a person who stays."},
    {"n":9,"name":"Part of Something Larger","one":"Given to be given away.","stuck":"We are cut off from God, from purpose, and from the people he gives us. Life shrinks to me: my guilt, my fix, my survival. A flat deadness settles in.","sounds":"Sounds like: “Nothing really matters.” “God feels far away.”","is_":"Transpirational means “breathing across”: the other eight kinds of integration flow together into a sense of belonging to something larger. Wholeness reaches past the self: me, we, and something larger. For us, the something larger is God and his Kingdom.","scripture":"Isaiah sees God, is undone, is cleansed, then hears “Whom shall I send?” and answers, “Here I am! Send me” (Isaiah 6:5–8).","applied":"","ask":"Where do you feel far from God, and where do you feel him close?","helps":"Return · Down Before Up · Given Away","carry":"Where do you feel far from God, and where do you feel him close?","try":"Return: turn back to God, confess, and receive his forgiveness (1 John 1:9)."}];
  function wmOf(n) { n = Number(n); return WAYMARKS.filter(function (w) { return w.n === n; })[0] || null; }
  function tryOf(w) { var s = String(w && w.try || ""), i = s.indexOf(": "); return i > 0 ? { name: s.slice(0, i), text: uc1(s.slice(i + 2)) } : { name: "", text: uc1(s) }; }
  function oneOf(w) { return String(w && w.one || "").replace(/\.$/, ""); }

  /* ───────────── the model: what the three views read ───────────── */
  var BARE_V = { bare: true, first: true, ended: false, after: false, inGroup: false, course: "", total: 0, unit: { n: 0, label: "", title: "" }, meet: null, done: {}, practices: [], practice: "", when: "",
    guidepost: { n: 0, weekLine: "" }, lastWeek: null, needs: null, house: { did: [], saw: [], know: [] }, better: [], made: null, notes: [], carried: "", settings: { remind: "", shares: { path: true, piece: true, practice: true, words: false }, paused: false } };
  var UI = { tab: "week", open: {}, ck: null, house: "mine", ours: null, oursBusy: false, flare: null, fresh: {}, handSent: false, handBusy: false, drafts: {}, letterNow: false, wf: { open: false, role: "mentor", sent: null }, welcomed: null, pending: null, slot: "", say: {}, news: window.apNews || [] };
  function V() { return data && data.v11 ? data.v11 : BARE_V; }
  function group() { return !!V().inGroup; }
  function leaderKnown() { return !!(data && data.group && data.group.leader); }
  function walkYes() { var y = data && data.witness && data.witness.yes; return !group() && y && y.name ? y : null; }
  function witnessName() { var y = walkYes(); return y ? y.name : group() && leaderKnown() ? "your group’s leader" : "our team"; }
  function meetDay() { var m = V().meet; return m && m.day ? m.day : ""; }
  function piece() { return data && data.piece ? data.piece : null; }
  function cardD() { return data && data.card ? data.card : null; }
  function unreadNote() { var n = V().notes || []; return n.filter(function (x) { return !x.read; })[0] || null; }
  function newestNote() { return (V().notes || [])[0] || null; }
  function welcomedYet() { return UI.welcomed !== null ? UI.welcomed : !!(data && data.ui && data.ui.welcomed11); }
  function rhythmWord(k) { var r = RHYTHMS.filter(function (x) { return x[0] === k; })[0]; return r ? r[1] : ""; }
  function needText(w) { var n = V().needs || {}; return n[w] || NEED_FB[w] || ""; }
  function pathLabel(k) { var p = PATHS.filter(function (x) { return x[0] === k; })[0]; return p ? p[1] : ""; }
  function ctxLabel() { var v = V(); return v.unit && v.unit.label ? v.unit.label : ""; }
  /* the story row of the week's list: the story work the course asks this week; done when every piece of it is finished */
  function storyRow() {
    if (!group()) return null;
    var L = writeList(data); if (!L.length) return null;
    var open = L.filter(function (x) { return !x.finished; })[0];
    return open ? { done: false, it: open } : { done: true, it: L[0] };
  }
  function doneNow() {
    var v = V(), d = {}, s = storyRow(), k;
    for (k in (v.done || {})) d[k] = !!v.done[k];
    d.story = s ? s.done : true;
    return d;
  }
  function lastTapRow() { return UI.say; }

  /* the band's one next step, as the prototype's nextStep() computes it */
  function nextStep() {
    var v = V(), d = doneNow(), p = piece(), s = storyRow(), day = meetDay(), lab = ctxLabel();
    if (v.ended) return { t: "see what comes after " + (v.course || "your course"), act: "go-path" };
    if (unreadNote()) return { t: "A letter from your witness", act: "letter" };
    if (v.after) {
      if (!d.wed) return { t: "What did you take from " + (day || "your group’s night") + "?", act: "focus-wed" };
      if (!d.choose) return { t: "Choose your practice for this week", act: "choose" };
      return { t: "You’re carrying it well. A new piece comes at your own pace", act: null };
    }
    if ((v.unit && v.unit.n || v.course) && !d.course) return { t: lab ? "Read " + lab : "Open " + (v.course || "your course"), act: "course" };
    if (p && !d.road) return { t: "This week’s piece, for your road", act: "piece" };
    if (!d.check) return { t: "Check in with your witness, about a minute", act: "checkin" };
    if (s && !s.done) return { t: writeName(s.it.title) + (day ? " before " + day : ""), act: "story" };
    return { t: group() ? "You’re ready for " + (day || "your group’s night") + "." : "You’re ready for this week.", act: null };
  }
  function whereText() {
    var v = V(), c = v.course, lab = ctxLabel(), t = v.unit && v.unit.title;
    if (v.bare || !c) return "";
    if (v.ended) return c + " is complete.";
    if (!group()) return c + (lab ? " · " + lab : "") + (t ? ", “" + t + ".”" : ".");
    var day = meetDay(), time = v.meet && v.meet.time;
    if (v.after) return (lab || "This week") + " of " + c + " starts now." + (day ? " Your group meets again " + day + "." : "");
    return (lab ? lab + " of " + c + "." : c + ".") + (day ? " Your group meets " + day + (time ? " at " + time : "") + "." : "");
  }
  function helloText() {
    var first = (me && me.first) || (data && data.v11 && data.v11.name) || "";
    var back = !V().first;
    return (back ? "Welcome back" : "Welcome") + (first ? ", " + first : "") + ".";
  }
  /* hand the page's band everything in one call, so it is painted once and never moves */
  function paintBand() {
    var n = nextStep(), o = { hello: helloText(), where: whereText(), step: n.t ? { text: "Next: " + lc1(n.t).replace(/^next: /, ""), act: n.act } : null, tab: UI.tab };
    if (n.act === null && n.t) o.step = { text: n.t, act: null };
    try { if (window.apBand && window.apBand.set) window.apBand.set(o); } catch (e) {}
    try { document.dispatchEvent(new CustomEvent("ap:roadband", { detail: o })); } catch (e2) {}
    tabWiring();
  }
  /* the band's tabs belong to the page block; this adds what a tablist also needs: each tab names the panel it opens, the panel names its tab, and only the chosen tab is in the tab order (the arrow keys move between them) */
  function tabWiring() {
    var tabs = [].slice.call(document.querySelectorAll("#apBand [data-tab]")), main = document.getElementById("avMain");
    if (main) { main.setAttribute("role", "tabpanel"); main.setAttribute("tabindex", "-1"); }
    tabs.forEach(function (t) {
      var k = t.getAttribute("data-tab"), on = t.getAttribute("aria-selected") === "true";
      if (!t.id) t.id = "avTab-" + k;
      t.setAttribute("aria-controls", "avMain"); t.setAttribute("tabindex", on ? "0" : "-1");
      if (on && main) main.setAttribute("aria-labelledby", t.id);
    });
  }

  /* ───────────── This Week ───────────── */
  function rowHtml(key, layer, title, sub, go, act, done, href, blank) {
    var inner = '<span class="av-ring" aria-hidden="true"></span><span><span class="av-ly">' + esc(layer) + '</span><span class="av-tt">' + esc(title) + '</span><small>' + esc(sub) + '</small></span><span class="av-go">' + (done ? "Done" : esc(go)) + '</span><span class="av-sr">' + (done ? "done" : "not done yet") + '</span>';
    if (href) return '<a class="av-row' + (done ? " av-done" : "") + '" href="' + esc(href) + '"' + (blank ? ' target="_blank" rel="noopener"' : "") + ' data-act="' + act + '" data-key="' + key + '">' + inner + '</a>';
    return '<button type="button" class="av-row' + (done ? " av-done" : "") + '" data-act="' + act + '" data-key="' + key + '">' + inner + '</button>';
  }
  /* Last Week, as one sentence: the path, the word, whether the piece helped, the practice he named. Never how often. Hidden when there is nothing to say. */
  function lastWeekHtml() {
    var L = V().lastWeek; if (!L) return "";
    var c = [];
    if (L.mark && PATHWORD[L.mark]) c.push("you marked " + PATHWORD[L.mark] + (L.word ? " and named it " + L.word : ""));
    if (L.helped === "met") c.push("your For Your Road piece helped");
    if (L.practice) c.push("you named your practice, “" + L.practice + "”");
    if (!c.length) return "";
    var when = L.recent === false ? "The last week you were here" : "Last week", s = when + " " + c[0] + ".";
    if (c.length > 1) s += " " + uc1(c.slice(1).join(", and ")) + ".";
    s = s.replace(/\.”\.$/, ".”");
    return '<p class="av-last"><b>' + esc(when) + "</b> " + esc(s.slice(when.length + 1)) + "</p>";
  }
  function gpCard() {
    var g = V().guidepost || {}, w = wmOf(g.n); if (!w) return "";
    var k = "gp", t = tryOf(w), open = !!UI.open[k];
    return '<div class="av-card"><p class="av-lk">This Week’s Guidepost</p><p class="av-t">' + esc(w.name) + " · " + esc(oneOf(w)) + '</p>' +
      (g.weekLine ? '<p class="av-s">' + esc(smart(g.weekLine)) + '</p>' : "") +
      '<div class="av-carry"><p class="av-lk">Carry This Question</p><p>' + esc(w.carry) + '</p></div>' +
      '<p class="av-try"><b>Try This · ' + esc(t.name) + '.</b> ' + esc(t.text) + '</p>' +
      '<button type="button" class="av-walk" data-act="toggle" data-k="' + k + '" aria-expanded="' + open + '"><span class="av-u">More about this guidepost</span> <span class="av-ar">' + (open ? "▴" : "▾") + '</span></button>' +
      '<div class="av-more' + (open ? " av-open" : "") + '"><p class="av-s">Where a man gets stuck here: ' + esc(w.stuck) + '</p><p class="av-help">All nine guideposts are on Your Path.</p></div></div>';
  }
  function handLine() { return '<div><button type="button" class="av-walk" data-act="hand"><span class="av-u">I need a hand</span> <span class="av-ar">→</span></button><p class="av-help" style="margin-top:0">One tap reaches ' + esc(witnessName()) + ' today.</p></div>'; }
  function carriedBlock() {
    var L = (data && data.group && data.group.carried) || []; if (!L.length || V().first) return "";
    var k = "carried", open = !!UI.open[k];
    return '<button type="button" class="av-walk" data-act="toggle" data-k="' + k + '" aria-expanded="' + open + '"><span class="av-u">What your group carried last week</span> <span class="av-ar">' + (open ? "▴" : "▾") + '</span></button><div class="av-more' + (open ? " av-open" : "") + '">' +
      L.map(function (c) { return '<p class="av-s"><b>' + esc(smart(c.title)) + '.</b> ' + esc(smart(c.body || "")) + '</p>'; }).join("") + '<p class="av-help">' + esc(WHO_CARRIED_HELP) + '</p></div>';
  }
  function inviteBlock() {
    var sent = UI.wf.sent === null ? !!(data && data.witness && data.witness.waiting) : UI.wf.sent, k = "invite", open = !!UI.open[k] || UI.wf.open;
    if (sent) return '<p class="av-kept"><b>Kept.</b> ' + esc(WITNESS_SENT.replace(/^Kept\. /, "")) + '</p><button type="button" class="av-walk" data-act="wchange"><span class="av-u">Change who you asked</span> <span class="av-ar">→</span></button>';
    return '<button type="button" class="av-walk" data-act="toggle" data-k="' + k + '" aria-expanded="' + open + '"><span class="av-u">Invite Your Own Witness</span> <span class="av-ar">' + (open ? "▴" : "▾") + '</span></button><div class="av-more' + (open ? " av-open" : "") + '">' +
      '<p class="av-help">A mentor, a coach, a trusted friend, a pastor or a relative. They read what a witness does and say yes before seeing anything of yours.</p>' +
      '<div class="av-choices av-two" role="radiogroup" aria-label="Who would it be?">' + WROLES.map(function (r) { return '<button type="button" class="av-choice" role="radio" aria-checked="' + (UI.wf.role === r[0]) + '" data-act="wrole" data-v="' + r[0] + '">' + esc(r[1]) + '</button>'; }).join("") + '</div>' +
      '<label class="av-field">Their name<input id="avWn" autocomplete="off" maxlength="80" placeholder="First and last name" value="' + esc(UI.drafts.avWn || "") + '"></label>' +
      '<label class="av-field">Their email<input id="avWe" type="email" autocomplete="off" maxlength="120" placeholder="name@example.com" value="' + esc(UI.drafts.avWe || "") + '"></label>' +
      '<button type="button" class="av-btn" data-act="invite">Send the invitation</button><p class="av-kept" id="avWs" aria-live="polite"></p></div>';
  }
  function walksWith() {
    var v = V(), g = (data && data.group) || {};
    if (v.ended) return '<div class="av-card"><p class="av-lk">Who Walks With You Next</p><p class="av-s">Your group’s leader walked this course with you. For the next stretch, keep him as your witness, or invite someone you trust.</p>' +
      '<button type="button" class="av-walk" data-act="toggle" data-k="next" aria-expanded="' + !!UI.open.next + '"><span class="av-u">Choose who walks with you next</span> <span class="av-ar">' + (UI.open.next ? "▴" : "▾") + '</span></button><div class="av-more' + (UI.open.next ? " av-open" : "") + '"><p class="av-s">To keep your group’s leader as your witness, tell him. To invite someone else, tell our team and we’ll set it up with you.</p><a class="av-walk" href="' + PAGES.team + '"><span class="av-u">Talk With Our Team</span> <span class="av-ar">→</span></a></div>' + (v.bare ? "" : handLine()) + '</div>';
    if (walkYes()) return '<div class="av-card"><p class="av-lk">Who Walks With You</p><p class="av-s">' + esc(walkYes().name) + (walkYes().role ? ', your ' + esc(walkYes().role) + ',' : "") + ' walks with you. They read what you choose to share, and write to you. Our team is with you too.</p>' + (v.bare ? "" : handLine()) + '</div>';
    if (!group()) return '<div class="av-card"><p class="av-lk">Who Walks With You</p><p class="av-s">Our team walks this with you. We read your week and write back to you.</p>' + inviteBlock() + (v.bare ? "" : handLine()) + '</div>';
    var line = !v.first && g.line && GROUPWORD[g.line] ? " Most of your group marked " + GROUPWORD[g.line] + " this week." : "";
    return '<div class="av-card"><p class="av-lk">Who Walks With You</p><p class="av-s">' + esc(leaderKnown() ? "Your group’s leader is your witness." : "Our team walks with your group.") + esc(line) + ' You’re not walking this alone.</p>' + carriedBlock() + handLine() + '</div>';
  }
  function lead(k) { return '<p class="av-vlead">' + esc(LEADS[k]) + '</p>'; }
  function welcomeCard() {
    return '<div class="av-card av-first"><p class="av-lk">What This Page Is For</p><p class="av-t">Your home base for the week.</p><p class="av-verse">“Stand by the roads, and look, and ask for the ancient paths, where the good way is; and walk in it, and find rest for your souls.” <span>Jeremiah 6:16</span></p><p class="av-s">This page is built on that invitation. <b>This Week</b> is where you stand and look. <b>Your Path</b> is where you ask for the good way. <b>Your House</b> is where what you’ve walked becomes rest.</p>' +
      '<button type="button" class="av-walk" data-act="welcomed"><span class="av-u">Start with this week</span> <span class="av-ar">→</span></button></div>';
  }
  function newsHtml() {
    var L = UI.news || []; if (!L.length) return "";
    return '<p class="av-news">' + esc("Since you were last here, " + L.map(function (n) { return n.text; }).join(" and ") + ".") + L.map(function (n) { return n.label ? '<a href="' + esc(n.href || "#") + '"' + (n.pile ? ' data-act="stones"' : "") + '>' + esc(n.label) + '</a>' : ""; }).join("") + '</p>';
  }
  function letterCard() {
    var n = newestNote(); if (!n) return "";
    var read = !!n.read || UI.letterNow;
    return '<div class="av-letterc"><p class="av-lk">A Letter From Your Witness</p><p class="av-t">' + esc(read ? "You read it" + (n.readDay ? " " + n.readDay : "") + "." : (group() && leaderKnown() ? "Your group’s leader wrote to you." : "Your witness wrote to you.")) + '</p><button type="button" class="av-walk" data-act="letter"><span class="av-u">' + (read ? "Read it again" : "Read it") + '</span> <span class="av-ar">→</span></button></div>';
  }
  function courseRow(d) {
    var v = V(), lab = ctxLabel(), title = v.unit && v.unit.title;
    if (!v.course) return '<a class="av-row" href="/courses" data-act="begin"><span class="av-ring" aria-hidden="true"></span><span><span class="av-ly">Your Course</span><span class="av-tt">Choose a course</span><small>The topics you follow set the direction for your week</small></span><span class="av-go">Open</span></a>';
    return rowHtml("course", "Your Course", lab ? "Read " + lab : "Open " + v.course, title ? "“" + title + "”" : v.course, "Open", "course", d.course, courseHref(v.course), true);
  }
  function pieceRow(d) {
    var p = piece(), v = V();
    if (!p) return '<div class="av-row av-still"><span class="av-ring" aria-hidden="true"></span><span><span class="av-ly">For Your Road</span><span class="av-tt">Your first piece</span><small>It lands here with your next morning’s reading</small></span><span class="av-go"></span></div>';
    var sub = p.opened ? "Opened " + (p.openedDay || p.opened) : (p.minutes ? uc1(p.minutes) : actOf(p) + " it when you’re ready");
    return rowHtml("road", "For Your Road · " + (p.layer || "Wisdom"), p.claim, sub, "Open", "piece", d.road);
  }
  function actOf(p) { var a = String(p && p.act || "").trim(); return /^(Read|Listen|Watch)$/.test(a) ? a : "Read"; }
  function viewWeek() {
    var v = V(), d = doneNow(), h = "", p = piece(), day = meetDay();
    if (v.first && !welcomedYet()) return '<main class="av-view">' + lead("week") + welcomeCard() + walksWith() + '</main>';
    h += newsHtml();
    if (v.ended) {
      h += '<div class="av-ceremony"><p class="av-lk">You Walked It to the End</p><p class="av-t">' + esc(v.course) + ' is complete.</p><p class="av-s">You stood, looked, asked and walked. What you did, what you saw and what you know now are kept in Your House, and your witness has a word for you about what comes next.</p>' +
        '<a class="av-walk" href="' + PAGES.stones + '"><span class="av-u">Set a stone with your group</span> <span class="av-ar">→</span></a><br><button type="button" class="av-walk" data-act="go-path"><span class="av-u">What’s next for you</span> <span class="av-ar">→</span></button></div>';
      if (v.carried) h += '<div class="av-card"><p class="av-lk">Carry It Forward</p><p class="av-s">The practice you’re keeping: <b>' + esc(v.carried.replace(/\.$/, "")) + '</b>' + (v.when ? ", " + esc(lc1(rhythmOfWhen(v.when))) : "") + '. Your road goes on; new pieces keep coming at your rhythm.</p></div>';
      return '<main class="av-view">' + lead("week") + h + walksWith() + '</main>';
    }
    if (unreadNote() || (newestNote() && UI.letterNow)) h += letterCard();
    h += lastWeekHtml();
    if (v.after) {
      var wd = d.wed, wt = UI.drafts.avWed || "";
      h += '<div class="av-list"><div class="av-hd"><b>Carry It This Week</b><span>' + (day ? "until " + esc(day) : "") + '</span></div>' +
        '<div class="av-row av-still' + (wd ? " av-done" : "") + '" style="grid-template-columns:28px 1fr"><span class="av-ring" aria-hidden="true"></span><span><span class="av-ly">Your Story</span><span class="av-tt">What did you take from ' + esc(day || "your group’s night") + '?</span>' +
        (wd ? '<small>Kept in your house: “' + esc(v.wedText || UI.drafts.avWedKept || "") + '”</small>' : '<span class="av-answer"><textarea id="avWed" maxlength="2000" aria-label="What did you take from ' + esc(day || "your group’s night") + '?" placeholder="One line is enough.">' + esc(wt) + '</textarea><button type="button" class="av-btn" data-act="keepwed">Keep it</button><span class="av-kept" id="avWedS" aria-live="polite"></span></span>') + '</span></div>' +
        rowHtml("choose", "Your Practice", "Choose one for this week", v.unit && v.unit.title ? "From " + (ctxLabel() || "this week") + ", “" + v.unit.title + "”" : "From your course", "Choose", "choose", d.choose) +
        (p ? rowHtml("road", "For Your Road · " + (p.layer || "Wisdom"), p.claim, p.opened ? "Opened " + (p.openedDay || p.opened) : (p.minutes ? uc1(p.minutes) : "A short reading"), "Open", "piece", d.road) :
          '<div class="av-row av-still"><span class="av-ring" aria-hidden="true"></span><span><span class="av-ly">For Your Road</span><span class="av-tt">A new piece</span><small>Comes at your own pace</small></span><span class="av-go"></span></div>') + '</div>';
      return '<main class="av-view">' + lead("week") + h + gpCard() + walksWith() + '</main>';
    }
    var head = group() ? '<div class="av-hd"><b>Before Your Group Meets</b><span>' + esc(day) + '</span></div>' : '<div class="av-hd"><b>This Week</b><span>at your own pace</span></div>';
    var s = storyRow();
    h += '<div class="av-list">' + head + courseRow(d) + pieceRow(d) +
      rowHtml("check", "Check In With Your Witness", "About a minute", (d.check ? "Kept. " : "") + (group() ? (leaderKnown() ? "Your group’s leader reads it before you meet" : "Our team reads it before you meet") : "Our team reads it"), "Start", "checkin", d.check) +
      (s ? rowHtml("story", "Your Story", writeName(s.it.title), s.done ? "Kept in your house" : "Your course asks it this week", s.it.begun ? "Continue" : "Begin", "story", s.done, s.it.href || PAGES.story) : "") + '</div>';
    return '<main class="av-view">' + lead("week") + h + gpCard() + walksWith() + '</main>';
  }
  function rhythmOfWhen(k) { var w = WHENS.filter(function (x) { return x[0] === k; })[0]; return w ? w[1] : ""; }

  /* ───────────── Your House ───────────── */
  function houseSvg(mini, only) {
    var H = V().house || {}, lit = function (k) { return (only ? only[k] : (H[k] || []).length) ? " av-lit" : ""; }, fl = function (k) { return (only ? only[k] : (UI.flare === k || UI.flare === "all")) ? " av-flare" : ""; };
    return '<svg class="av-house' + (mini ? " av-mini" : "") + '" viewBox="0 0 320 136" role="img" aria-label="Your house: a window lights when something you did, saw or now know lands in it"><path d="M20 58 L160 10 L300 58" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><rect x="34" y="58" width="252" height="70" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="118" y1="58" x2="118" y2="128" stroke="currentColor" stroke-width="1.6"/><line x1="202" y1="58" x2="202" y2="128" stroke="currentColor" stroke-width="1.6"/>' +
      '<rect class="av-win' + lit("did") + fl("did") + '" x="60" y="70" width="32" height="28" rx="2"/><rect class="av-win' + lit("saw") + fl("saw") + '" x="144" y="70" width="32" height="28" rx="2"/><rect class="av-win' + lit("know") + fl("know") + '" x="228" y="70" width="32" height="28" rx="2"/></svg>';
  }
  function lineHtml(l) { return '<p class="av-line' + (l.mine ? " av-mine" : "") + (l.fresh ? " av-new" : "") + '">' + esc(l.t) + (l.w ? '<small>' + esc(l.w) + '</small>' : "") + '</p>'; }
  /* Your Story · Told, Offered, Known, from the story engine's own states: finished and kept = Told; the offered stop = Offered; the published stop = Known; begun = Begun */
  function storyStop(key) {
    var c = cardNode(key), foot = c && c.querySelector(".apo-foot"), cls = foot ? foot.className : "", st = stateOf(key);
    if (/is-published/.test(cls)) return ["Known", "on Our Stories, where other men can read it"];
    if (/is-offered/.test(cls)) return ["Offered", "our team is reading it"];
    if (st && st.status === "finished") return ["Told", "kept for you"];
    if (st) return ["Begun", "pick it up where you left off"];
    return ["", ""];
  }
  function shelfRows() {
    var rows = [], keys = Object.keys(surfaces());
    keys.forEach(function (k) {
      var c = cardNode(k); if (!c || !cardShown(c) || !stateOf(k)) return;
      var s = storyStop(k); if (!s[0]) return;
      rows.push({ key: k, title: titleOf(c), stop: s[0], line: s[1] });
    });
    if ((window.apStones || []).length) rows.push({ key: "stones", title: "Your Stones", stop: "Told", line: "kept for you" });
    return rows;
  }
  function shelfHtml() {
    var rows = shelfRows(), h = '<div class="av-card"><p class="av-lk">Your Story · Told, Offered, Known</p>';
    if (!rows.length) h += '<p class="av-help">Nothing here yet. Whatever you write on this road is kept here, and stays yours until you choose to offer it.</p>';
    else h += '<div class="av-shelf">' + rows.map(function (r) {
      var open = UI.slot === r.key;
      return '<div class="av-it"><button type="button" class="av-itb" data-act="slot" data-k="' + esc(r.key) + '" aria-expanded="' + open + '"><span>' + esc(r.title) + '</span><em>' + esc(r.stop + " · " + r.line) + '</em></button><div class="av-slot" data-slot="' + esc(r.key) + '"' + (open ? "" : " hidden") + '></div></div>';
    }).join("") + '</div>';
    return h + '<a class="av-walk" href="' + PAGES.story + '"><span class="av-u">' + (rows.length ? "Write another" : "Write your first") + '</span> <span class="av-ar">→</span></a></div>';
  }
  function stashSlots() {
    var s = shelf(); if (!s) return;
    $$('.av-slot > .ap-card, .av-slot > #apPileBox').forEach(function (n) { if (n.id === "apPileBox") (document.getElementById("apStories") || s).insertAdjacentElement("afterend", n); else (document.getElementById("apStories") || s).appendChild(n); });
  }
  function fillSlots() {
    $$('.av-slot').forEach(function (box) {
      var k = box.getAttribute("data-slot"); if (box.hidden) return;
      if (k === "stones") { var pn = document.getElementById("apPileBox"); if (pn) box.appendChild(pn); return; }
      var c = cardNode(k); if (c) { c.style.display = ""; box.appendChild(c); }
    });
  }
  function madeCard() {
    var v = V(), m = v.made, bet = v.better || [], open = !!UI.open.better, tx = UI.drafts.avMade || "";
    var h = '<div class="av-card av-answer"><p class="av-lk">Make Something of It</p><p class="av-t">What has this road taught you that you want to keep, or give?</p>';
    if (m && m.text) return h + '<p class="av-kept"><b>Kept.</b> “' + esc(m.text) + '” is yours. When you’re ready, you can offer it so other men can read it.</p><button type="button" class="av-walk" data-act="offer"><span class="av-u">Offer it</span> <span class="av-ar">→</span></button></div>';
    var showBet = !v.first && bet.length > 0;
    return h + '<textarea id="avMade" maxlength="2000" aria-label="What this road has taught you">' + esc(tx) + '</textarea>' +
      (showBet ? '<button type="button" class="av-walk" data-act="toggle" data-k="better" aria-expanded="' + open + '"><span class="av-u">Stuck at the first line? Better questions</span> <span class="av-ar">' + (open ? "▴" : "▾") + '</span></button><div class="av-more' + (open ? " av-open" : "") + '">' + bet.map(function (q) { return '<p class="av-s">' + esc(q) + '</p>'; }).join("") + '</div>' : "") +
      '<button type="button" class="av-btn" data-act="keepmade">Keep it</button><p class="av-kept" id="avMadeS" aria-live="polite"></p></div>';
  }
  function viewHouse() {
    var v = V(), H = v.house || { did: [], saw: [], know: [] };
    var h = '<main class="av-view">' + lead("house") + houseSvg(false) + '<p class="av-help" style="margin-top:2px">By wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled with all precious and pleasant riches. Proverbs 24:3–4</p>';
    h += '<div class="av-seg2" role="group" aria-label="Whose house"><button type="button" data-act="house" data-h="mine" aria-pressed="' + (UI.house === "mine") + '">Your House</button><button type="button" data-act="house" data-h="ours" aria-pressed="' + (UI.house === "ours") + '">Our House</button></div>';
    if (UI.house === "ours") {
      var O = UI.ours;
      h += '<p class="av-help">What the men walking this road have gathered together. One group’s house for now; it grows as groups join. Never one man’s words unless he offered them.</p>';
      if (!group()) h += '<div class="av-card"><p class="av-s">Our House is your group’s. When you walk with a group, what the men gathered together shows here.</p></div>';
      else if (!O) h += '<div class="av-card"><p class="av-s">' + (UI.oursBusy ? "Opening Our House." : "Our House did not open. Try again in a moment.") + '</p></div>';
      else {
        ROOMS.forEach(function (r) {
          var L = O[r[0]] || [];
          h += '<div class="av-card av-room"><p class="av-t">' + esc(r[1]) + '</p><p class="av-rw">' + esc(r[2].replace("You", "We")) + '</p>' + (L.length ? L.map(function (l) { return '<p class="av-line">' + esc(l.t) + '</p>'; }).join("") : '<p class="av-help">Nothing to show yet. A line shows here only when enough of your group stand behind it that no one man can be picked out.</p>') + '</div>';
        });
        if ((O.carried || []).length) h += '<div class="av-card"><p class="av-lk">What Our Group Carried</p>' + O.carried.map(function (c) { return '<p class="av-s"><b>' + esc(smart(c.title)) + '.</b> ' + esc(smart(c.body || "")) + '</p>'; }).join("") + '<p class="av-help">' + esc(WHO_CARRIED_HELP) + '</p></div>';
      }
      return h + '</main>';
    }
    ROOMS.forEach(function (r) {
      var L = H[r[0]] || [];
      h += '<div class="av-card av-room"><p class="av-t">' + esc(r[1]) + '</p><p class="av-rw">' + esc(r[2]) + '</p>' + (L.length ? L.map(function (l) { return lineHtml({ t: l.t, mine: l.mine, w: l.w, fresh: !!UI.fresh[r[0] + "|" + l.t] }); }).join("") : '<p class="av-help">Empty for now. Your first check-in lights it.</p>') + '</div>';
    });
    h += shelfHtml();
    h += '<div class="av-card"><p class="av-lk">What I’ve Gathered</p><div class="av-vol"><div class="av-cover" aria-hidden="true"><span class="av-ck">What I’ve Gathered</span><span class="av-ct">' + esc(v.course || "Your road") + '</span><span class="av-cv">By wisdom a house is built…</span></div><div><p class="av-s" style="margin-top:0">' + (v.first ? "Nothing is gathered yet. What you keep on this road is bound here, in a volume of your own." : "Your first volume comes at the end of November.") + '</p></div></div></div>';
    h += madeCard();
    return h + '</main>';
  }

  /* ───────────── Your Path ───────────── */
  function pathCourses() {
    var mine = window.apMine || {}, out = [], seen = {}, offered = (data && data.setup && data.setup.offered) || [];
    function state(name, tid) {
      var o = offered.filter(function (x) { return norm(x.name) === norm(name); })[0];
      if (o) return /^Finished$/i.test(o.state) ? "Complete" : o.state;
      return mine[tid] ? "Yours" : "Free to start";
    }
    OPEN_COURSES.forEach(function (c) {
      var o = offered.filter(function (x) { return norm(x.name) === norm(c[0]); })[0];
      if (c[0] === "Breaking Free" && !o && !mine[c[1]]) return;
      seen[norm(c[0])] = 1; out.push({ name: c[0], state: state(c[0], c[1]), href: courseHref(c[0]) });
    });
    offered.forEach(function (o) { if (!seen[norm(o.name)]) { seen[norm(o.name)] = 1; out.push({ name: o.name, state: /^Finished$/i.test(o.state) ? "Complete" : o.state, href: courseHref(o.name) }); } });
    return out;
  }
  function roadSvg() {
    var ended = !!V().ended, c = V().course || "Your course", nd = V().meet && V().meet.date;
    return '<svg class="av-road" viewBox="0 0 320 100" role="img" aria-label="Your path: where you are now and what comes next"><path d="M14 84 C 80 84, 90 48, 150 48 S 250 20, 306 20" fill="none" stroke="#B8945F" stroke-width="2.4" stroke-linecap="round"/><path d="M14 84 C 80 84, 90 48, 150 48' + (ended ? ' S 250 20, 306 20' : "") + '" fill="none" stroke="#1F2A44" stroke-width="3" stroke-linecap="round"/><circle cx="' + (ended ? 306 : 150) + '" cy="' + (ended ? 20 : 48) + '" r="7" fill="#1F2A44"/>' + (ended ? "" : '<circle cx="306" cy="20" r="6" fill="#FBF9F5" stroke="#B8945F" stroke-width="2"/>') + '<text x="150" y="72" text-anchor="middle" font-size="12" fill="#2B3040" font-family="Source Sans 3, sans-serif">' + esc(c + (ended ? " · complete" : " · now")) + '</text><text x="306" y="62" text-anchor="end" font-size="12" fill="#5E6573" font-family="Source Sans 3, sans-serif">what’s next</text></svg>';
  }
  function whatsNext() {
    var v = V(), n = newestNote();
    if (v.ended) {
      var word = n ? '<p class="av-s">“' + esc(smart(String(n.text).replace(/\s+/g, " ").slice(0, 420))) + (String(n.text).length > 420 ? "…" : "") + '”</p><button type="button" class="av-walk" data-act="letter"><span class="av-u">Read the whole letter</span> <span class="av-ar">→</span></button>' :
        '<p class="av-s">Your witness has not written yet. When they do, their word about what comes next will be here. Until then, our team will help you name what fits.</p>';
      return '<div class="av-card"><p class="av-lk">What’s Next for You</p><p class="av-t">A word from your witness</p>' + word + '<br><a class="av-walk" href="' + esc(courseHref("Walk With Me")) + '"><span class="av-u">Look at Walk With Me</span> <span class="av-ar">→</span></a><br><button type="button" class="av-walk" data-act="toggle" data-k="another" aria-expanded="' + !!UI.open.another + '"><span class="av-u">Or walk with another man</span> <span class="av-ar">' + (UI.open.another ? "▴" : "▾") + '</span></button>' + anotherMore() + '</div>';
    }
    return '<div class="av-card"><p class="av-lk">What’s Next for You</p><p class="av-s">When ' + esc(v.course || "your course") + ' ends, your witness will name the course or path that fits next.</p><a class="av-walk" href="' + PAGES.team + '"><span class="av-u">Ask our team about it</span> <span class="av-ar">→</span></a></div>';
  }
  function anotherMore() {
    return '<div class="av-more' + (UI.open.another ? " av-open" : "") + '"><p class="av-s">A witness is a mentor, a coach or a trusted friend who walks with a man. He listens deeply, speaks truth with compassion, and challenges him to grow. After a course, you can be that for someone: you read what he chooses to share and write to him, and our team walks with you. Later, if you’re asked, you can train to lead a group.</p><a class="av-walk" href="' + PAGES.team + '"><span class="av-u">Tell our team you’d like to</span> <span class="av-ar">→</span></a></div>';
  }
  function viewPath() {
    var h = '<main class="av-view">' + lead("path") + roadSvg() + whatsNext();
    var cs = pathCourses();
    h += '<div class="av-card"><p class="av-lk">Your Courses</p>' + (cs.length ? cs.map(function (c) { return '<a class="av-course" href="' + esc(c.href) + '"><b>' + esc(c.name) + '</b><span>' + esc(c.state) + '</span></a>'; }).join("") : '<p class="av-help">Your courses show here.</p>') + '</div>';
    h += '<div class="av-card"><p class="av-lk">The Nine Guideposts</p><p class="av-help">Nine places a man gets stuck, and what helps him move again. They are not steps; a man can stand at more than one.</p>' +
      WAYMARKS.map(function (w, i) {
        var k = "n" + i, open = !!UI.open[k], t = tryOf(w), here = V().guidepost && V().guidepost.n === w.n;
        return '<div class="av-gp"><button type="button" data-act="toggle" data-k="' + k + '" aria-expanded="' + open + '"><span><b>' + esc(w.name) + '</b><br><span class="av-one">' + esc(w.one + (here ? " · This week" : "")) + '</span></span><span class="av-ar" aria-hidden="true">' + (open ? "▴" : "▾") + '</span></button><div class="av-more' + (open ? " av-open" : "") + '"><div class="av-body"><p><b>Carry This Question:</b> ' + esc(w.carry) + '</p><p style="margin-top:6px"><b>Try This:</b> ' + esc((t.name ? t.name + ". " : "") + t.text) + '</p><p style="margin-top:6px"><b>Where a Man Gets Stuck Here:</b> ' + esc(w.stuck) + '</p></div></div></div>';
      }).join("") + '<p class="av-help">Some practices come from clinical work, so use them slowly and only with someone safe. This is care and coaching, not a replacement for counseling.</p></div>';
    h += '<div class="av-card"><p class="av-lk">Walk With Another Man</p><p class="av-s">After a course, a man can become another man’s witness, and later train to lead a group.</p><button type="button" class="av-walk" data-act="toggle" data-k="another" aria-expanded="' + !!UI.open.another + '"><span class="av-u">How a man becomes a witness</span> <span class="av-ar">' + (UI.open.another ? "▴" : "▾") + '</span></button>' + anotherMore() + '</div>';
    h += '<div class="av-doors"><button type="button" class="av-walk" data-act="welcome"><span class="av-u">What This Page Is For</span> <span class="av-ar">→</span></button><a class="av-walk" href="' + PAGES.team + '"><span class="av-u">Talk With Our Team</span> <span class="av-ar">→</span></a><a class="av-walk" href="' + PAGES.profile + '"><span class="av-u">Your Profile</span> <span class="av-ar">→</span></a></div>';
    return h + '</main>';
  }

  /* ───────────── overlays: the check-in and the sheets; a full screen on a phone, a sheet beside the page on a desk ───────────── */
  var lastFocus = null, locked = null;
  function root() { return $("#avRoot"); }
  function ovCk() { return $("#avCk"); }
  function ovSheet() { return $("#avSheet"); }
  function scroller() {
    var e = host.parentElement;
    while (e && e !== document.body && e !== document.documentElement) { var o = getComputedStyle(e).overflowY; if ((o === "auto" || o === "scroll") && e.scrollHeight > e.clientHeight + 2) return e; e = e.parentElement; }
    return null;
  }
  function lockOn() {
    if (locked) return;
    var sc = scroller();
    locked = { html: document.documentElement.style.overflow, body: document.body.style.overflow, sc: sc, scv: sc ? sc.style.overflow : "" };
    document.documentElement.style.overflow = "hidden"; document.body.style.overflow = "hidden"; if (sc) sc.style.overflow = "hidden";
    var m = $("#avMain"), b = document.getElementById("apBand");
    if (m) m.setAttribute("inert", ""); if (b) b.setAttribute("inert", "");
  }
  function lockOff() {
    if (!locked) return;
    document.documentElement.style.overflow = locked.html; document.body.style.overflow = locked.body; if (locked.sc) locked.sc.style.overflow = locked.scv;
    locked = null;
    var m = $("#avMain"), b = document.getElementById("apBand");
    if (m) m.removeAttribute("inert"); if (b) b.removeAttribute("inert");
  }
  function anyOpen() { var a = ovCk(), b = ovSheet(); return !!((a && a.classList.contains("av-open")) || (b && b.classList.contains("av-open"))); }
  function openOverlay(el, html) {
    if (!el) return;
    if (!anyOpen()) lastFocus = document.activeElement;
    el.innerHTML = html; el.classList.add("av-open"); var sc = $("#avScrim"); if (sc) sc.classList.add("av-on");
    lockOn();
    setTimeout(function () { var f = el.querySelector("textarea,.av-obody button,.av-obody input,button"); if (f && f.focus) { try { f.focus({ preventScroll: true }); } catch (e) { f.focus(); } } }, reduce ? 0 : 380);
  }
  function closeOverlay(el) {
    if (!el) return;
    el.classList.remove("av-open");
    if (!anyOpen()) { var sc = $("#avScrim"); if (sc) sc.classList.remove("av-on"); lockOff(); if (lastFocus && document.body.contains(lastFocus) && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) { lastFocus.focus(); } } }
  }
  function trap(ev) {
    var ov = ovSheet().classList.contains("av-open") ? ovSheet() : ovCk().classList.contains("av-open") ? ovCk() : null; if (!ov) return;
    if (ev.key === "Escape") { ev.preventDefault(); if (ov === ovCk()) closeCk(); else closeSheet(); return; }
    if (ev.key === "Enter" && ov === ovCk() && !ev.shiftKey && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
      /* Enter presses the step's one filled button, unless he is typing, on a link, or on a choice he has not made yet (then Enter makes that choice, as a button does) */
      var et = ev.target, tag = et && et.tagName, prim = $('[data-act="ck-next"],[data-act="ck-finish"]', ov);
      if (prim && tag !== "TEXTAREA" && tag !== "INPUT" && tag !== "A") {
        var pick = et && et.closest ? et.closest("[aria-pressed]") : null, own = et && et.closest ? et.closest("[data-act]") : null;
        if ((!pick || pick.getAttribute("aria-pressed") === "true") && !(own && !pick)) { ev.preventDefault(); prim.click(); return; }
      }
    }
    if (ev.key !== "Tab") return;
    var f = $$("button:not([disabled]),a[href],textarea,input", ov).filter(function (n) { return n.offsetParent !== null || n === document.activeElement; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (ev.shiftKey && (document.activeElement === first || !ov.contains(document.activeElement))) { ev.preventDefault(); last.focus(); }
    else if (!ev.shiftKey && (document.activeElement === last || !ov.contains(document.activeElement))) { ev.preventDefault(); first.focus(); }
  }
  function sheetHtml(title, body) { return '<div class="av-ohead"><span class="av-lk">' + esc(title) + '</span><button type="button" class="av-close" data-act="close-sheet">Close</button></div><div class="av-obody">' + body + '</div>'; }
  function openSheet(html) { openOverlay(ovSheet(), html); }
  function closeSheet() { closeOverlay(ovSheet()); renderMain(true); }
  function closeCk() { closeOverlay(ovCk()); renderMain(true); }
  function toast(m) { var t = $("#avToast"); if (!t) return; t.textContent = m; t.classList.add("av-in"); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("av-in"); }, 2600); }

  /* ───────────── the check-in: four steps, Back and Skip on each; every tap is written as it is made ───────────── */
  function ckInit(mode) {
    var v = V(), c = cardD() || {}, p = piece(), pr = v.practice || "", wh = v.when || ""; /* only what he chose this week: last week's time of day is not carried in */
    if (mode === "choose" && !(v.practices || []).some(function (t) { return t === pr || (pr.length >= 200 && t.indexOf(pr) === 0); })) { pr = ""; wh = ""; } /* after his group meets: last unit's practice and time are not carried onto the new list */
    UI.ck = { step: mode === "choose" ? 4 : 1, mode: mode || "week", path: c.mark || null, word: c.word || null, helped: p && p.word === "met" ? "yes" : p && p.word === "not" ? "no" : null,
      why: p && p.why === "too_long" ? "long" : p && p.why === "not_needed" ? "need" : null, how: c.did || null, practice: pr || null, when: wh || null, moreWords: false, taps: 0, say: {} };
  }
  function ckBar(st) { return '<div class="av-bar" aria-hidden="true">' + [1, 2, 3, 4].map(function (i) { return '<i class="' + (i <= Math.min(st, 4) ? "av-on" : "") + '"></i>'; }).join("") + '</div>'; }
  function kLine(k) { var s = UI.ck.say[k]; return s ? (s.bad ? esc(s.t) : "<b>Kept.</b> " + esc(s.t)) : ""; }
  function ckPractices() { return V().practices || []; }
  function isPicked(t) { var p = UI.ck.practice || ""; return !!p && (t === p || (p.length >= 200 && t.indexOf(p) === 0)); }
  function ckHtml() {
    var c = UI.ck, st = c.step, p = piece(), card = cardD() || {}, v = V();
    var head = '<div class="av-ohead"><span class="av-lk">' + (c.mode === "choose" ? "Choose Your Practice" : "Check In With Your Witness") + '</span><button type="button" class="av-close" data-act="close-ck">Close</button></div>';
    if (st === 5) return head + '<div class="av-obody">' + ckBar(st) + doneHtml() + '</div><div class="av-ofoot"><button type="button" class="av-btn" style="margin-top:0" data-act="ck-finish">Back to This Week</button><div class="av-links"><button type="button" class="av-walk" data-act="ck-house"><span class="av-u">See Your House</span> <span class="av-ar">→</span></button></div></div>';
    var b = "";
    if (st === 1) {
      var ws = c.moreWords ? WORDS.concat(MORE_WORDS) : WORDS, need = c.word ? needText(c.word) : "";
      b = '<p class="av-sub">The Path</p><p class="av-q">How’s the path this week?</p><div class="av-choices av-two">' + PATHS.map(function (x) { return '<button type="button" class="av-choice av-left" data-act="ck-path" data-v="' + x[0] + '" aria-pressed="' + (c.path === x[0]) + '"><svg viewBox="0 0 20 20" aria-hidden="true">' + x[2] + '</svg>' + esc(x[1]) + '</button>'; }).join("") + '</div>' +
        '<p class="av-sub">The Word for It, If You Want</p><div class="av-words">' + ws.map(function (w) { return '<button type="button" class="av-word" data-act="ck-word" data-v="' + w + '" aria-pressed="' + (c.word === w) + '">' + w + '</button>'; }).join("") + (c.moreWords ? "" : '<button type="button" class="av-word" data-act="ck-more">More words</button>') + '</div>' +
        '<p class="av-kept" aria-live="polite">' + (c.say.path ? kLine("path") : (c.word && !c.path ? "Choose how the path is first, and the word is kept with it." : "")) + '</p>' +
        '<div class="av-give' + (need ? " av-in" : "") + '" id="avNeed"><p class="av-lk">The Word for It</p><p>' + esc(need) + '</p></div>';
    } else if (st === 2) {
      if (!p) b = '<p class="av-sub">This Week’s Piece</p><p class="av-q">Your piece has not come yet.</p><p class="av-s">It lands with your next morning’s reading. You can skip this one.</p>';
      else b = '<p class="av-sub">This Week’s Piece</p><p class="av-q">Did this piece help your week?</p><p class="av-s">“' + esc(p.claim) + '”</p><div class="av-choices av-two"><button type="button" class="av-choice" data-act="ck-helped" data-v="yes" aria-pressed="' + (c.helped === "yes") + '">It helped</button><button type="button" class="av-choice" data-act="ck-helped" data-v="no" aria-pressed="' + (c.helped === "no") + '">Not this one</button></div>' +
        '<p class="av-kept" aria-live="polite">' + (c.helped === "yes" ? kLine("helped") || "<b>Kept.</b> Next week’s piece builds on what helped." : c.helped === "no" ? kLine("helped") || "<b>Kept.</b> Thank you. A no helps us choose as much as a yes." : "") + '</p>' +
        (c.helped === "no" ? '<p class="av-sub">What Made It a No? If You Want</p><div class="av-choices av-two"><button type="button" class="av-choice" data-act="ck-why" data-v="long" aria-pressed="' + (c.why === "long") + '">Too long right now</button><button type="button" class="av-choice" data-act="ck-why" data-v="need" aria-pressed="' + (c.why === "need") + '">Not what I need</button></div><p class="av-kept" aria-live="polite">' + (c.why === "long" ? "<b>Kept.</b> We’ll offer the same idea again another week, in a shorter form." : c.why === "need" ? "<b>Kept.</b> We’ll steer toward what has helped you. If this idea still fits, we may offer it once more another way." : "") + '</p>' : "");
    } else if (st === 3) {
      var last = card.lastChose || (v.lastWeek && v.lastWeek.practice) || "";
      if (!last) b = '<p class="av-sub">Last Week’s Practice</p><p class="av-q">You didn’t name a practice last week.</p><p class="av-s">There is nothing to look back on here. This week you’ll choose one.</p>';
      else b = '<p class="av-sub">Last Week’s Practice</p><p class="av-q">“' + esc(last) + '” How did it go?</p><div class="av-choices av-three"><button type="button" class="av-choice" data-act="ck-how" data-v="most" aria-pressed="' + (c.how === "most") + '">Most days</button><button type="button" class="av-choice" data-act="ck-how" data-v="some" aria-pressed="' + (c.how === "some") + '">Some days</button><button type="button" class="av-choice" data-act="ck-how" data-v="notyet" aria-pressed="' + (c.how === "notyet") + '">Not this week</button></div><p class="av-kept" aria-live="polite">' + (c.how ? "<b>Kept.</b> " + esc(HOW[c.how].replace(/^Kept\. /, "")) : "") + '</p><p class="av-help">We want to support your growth here, establishing the right habits that lead to the personal development you desire.</p>';
    } else if (st === 4) {
      var list = ckPractices(), lab = ctxLabel(), rh = V().settings && V().settings.remind ? rhythmWord(V().settings.remind) : "";
      b = '<p class="av-sub">This Week’s Practice</p><p class="av-q">' + (list.length ? "Choose one from " + esc(lab || "this week") : "Your Practice for This Week") + '</p>' +
        (list.length ? '<div class="av-choices">' + list.map(function (t, i) { return '<button type="button" class="av-choice av-left" data-act="ck-prac" data-v="' + i + '" aria-pressed="' + isPicked(t) + '">' + esc(t) + '</button>'; }).join("") + '</div><p class="av-kept" aria-live="polite">' + (c.say.practice ? kLine("practice") : "") + '</p>' : '<p class="av-s">Your course hasn’t named practices for this week yet. They’ll be here when it does.</p>') +
        '<p class="av-sub">When Will You Do It?</p><div class="av-choices av-three">' + WHENS.map(function (w) { return '<button type="button" class="av-choice" data-act="ck-when" data-v="' + w[0] + '" aria-pressed="' + (c.when === w[0]) + '">' + esc(w[1]) + '</button>'; }).join("") + '</div><p class="av-kept" aria-live="polite">' + (c.say.when ? kLine("when") : "") + '</p>' +
        '<p class="av-help">' + (rh ? "We’ll bring it back to you at your rhythm: " + esc(rh.toLowerCase()) + ". Change it in Settings." : "Choose how often we bring it back to you in Settings.") + '</p>';
    }
    var label = c.mode === "choose" ? "Done" : st < 4 ? ["Next: this week’s piece", "Next: last week’s practice", "Next: this week’s practice"][st - 1] : "Done";
    var links = c.mode === "choose" ? "" : (st > 1 ? '<button type="button" class="av-walk" data-act="ck-back"><span class="av-u">Back</span></button>' : "") + '<button type="button" class="av-walk" data-act="ck-skip"><span class="av-u">Skip this one</span></button>';
    return head + '<div class="av-obody">' + (c.mode === "choose" ? "" : ckBar(st)) + b + '</div><div class="av-ofoot"><button type="button" class="av-btn" style="margin-top:0" data-act="ck-next">' + label + '</button><div class="av-links">' + links + '</div></div>';
  }
  /* "…this week too" is said only when his own mark this week is the group's; otherwise there is no line (and none on a first visit) */
  function groupSaidLine() {
    var g = (data && data.group) || {}, mine = (UI.ck && UI.ck.path) || "";
    return group() && !V().first && mine && g.line && mine === g.line && GROUPWORD[g.line] ? "Most of your group marked " + GROUPWORD[g.line] + " this week too." : "";
  }
  function helpingSaid() {
    var h = data && data.helping, out = [], m = (h && h.more) || [];
    if (!h) return "";
    if (m.length) out.push("The readings that have helped you most come from " + (m.length > 1 ? m[0] + " and " + m[1] : m[0]) + ", so you’ll see more from " + (m.length > 1 ? "both" : "it") + ".");
    if (h.fewer) out.push("Readings on " + h.fewer + " haven’t landed yet, so you’ll see fewer of those.");
    return out.join(" ");
  }
  function doneHtml() {
    if (!UI.ck.taps) return '<p class="av-q" style="margin-top:14px">Nothing kept this time.</p><p class="av-help">You can check in any time this week. Nothing was saved.</p>';
    var c = UI.ck, day = meetDay(), who = group() ? (leaderKnown() ? "Your group’s leader reads it before you meet." : "Our team reads it before you meet.") : "Our team reads it this week.";
    var h = '<p class="av-q" style="margin-top:14px">Kept. ' + (group() ? "You’re ready for " + esc(day || "your group’s night") + "." : "Your week is set.") + '</p><p class="av-help">' + esc(who) + ' <br><button type="button" class="av-walk" data-act="settings"><span class="av-u">Change what you share</span> <span class="av-ar">→</span></button></p>';
    var pr = c.practice || V().practice;
    if (pr) h += '<p class="av-s" style="margin-top:10px">Your practice this week: <b>' + esc(String(pr).replace(/\.$/, "")) + '</b>' + (c.when ? ", " + esc(lc1(rhythmOfWhen(c.when))) : "") + '.</p>';
    var hs = helpingSaid(), gs = groupSaidLine();
    if (hs) h += '<div class="av-give" data-seq="1"><p class="av-lk">What’s Been Helping You</p><p>' + esc(smart(hs)) + '</p></div>';
    if (gs) h += '<div class="av-give" data-seq="2"><p class="av-lk">You’re Not the Only One</p><p>' + esc(gs) + '</p></div>';
    var lit = { did: !!pr, saw: !!c.path, know: c.helped === "yes" };
    if (lit.did || lit.saw || lit.know) h += '<div class="av-give" data-seq="3"><p class="av-lk">Your House</p><p>Your House just took in something from this week.</p>' + houseSvg(true, lit) + '</div>';
    return h;
  }
  function revealGives() { $$(".av-give[data-seq]", ovCk()).forEach(function (g, i) { setTimeout(function () { g.classList.add("av-in"); }, reduce ? 0 : 220 + i * 380); }); }

  /* ───────────── sheets: the piece, the letter, a hand, settings, what this page is for ───────────── */
  function pieceSheet() {
    var p = piece(); if (!p) return "";
    var layer = p.layer || "Wisdom", act = actOf(p), mins = act === "Read" ? "Read it where it lives" : act + " at the minute that matters";
    var h = '<p class="av-q">' + esc(smart(p.claim)) + '</p>';
    if (!p.short && p.road) h += '<p class="av-quote" style="font-size:17px">' + esc(smart(p.road)) + '</p>';
    h += '<p class="av-src">Read by our team' + (p.verse ? " beside " + esc(p.verse) : "") + ', for ' + esc(layer.toLowerCase()) + ' in the work you’re doing this week.</p>';
    h += '<a class="av-walk" href="' + esc(p.minuteLink || p.link) + '" target="_blank" rel="noopener" data-act="listen"><span class="av-u">' + esc(mins) + '</span> <span class="av-ar">↗</span></a>';
    if (!p.short && p.quotes && p.quotes.length) h += p.quotes.map(function (q) {
      var min = q.minute || q.m || "", who = String(p.voice || "").split(",")[0].replace(/\s*\(.*$/, "").trim();
      return '<p class="av-quo">“' + esc(q.words) + '”<small>' + esc(who) + (who && min ? ", at " : "") + (min ? (q.link ? '<a href="' + esc(q.link) + '" target="_blank" rel="noopener" data-act="listen">' + esc(min) + " ↗</a>" : esc(min)) : "") + '</small></p>';
    }).join("");
    if (!p.short && p.todo) h += '<div class="av-card"><p class="av-lk">One Thing to Do</p><p class="av-s">' + esc(smart(p.todo)) + '</p></div>';
    if (p.question) {
      var review = (data && data.review) || "two days";
      h += '<div class="av-card av-answer"><p class="av-lk">The Question Back</p><p class="av-s">' + esc(smart(p.question)) + '</p>';
      if (p.answer && p.answer.text) {
        var w = p.answer.word;
        h += '<div class="av-said"><p class="av-lk">Your Answer · Sent ' + esc(p.answer.sent) + '</p><p class="av-s">' + esc(p.answer.text) + '</p>' + (w && (w.verse || w.question || w.step) ? '<p class="av-lk" style="margin-top:10px">' + esc(tc((data && data.wordLabel) || "A Word for the Road")) + '</p>' + (w.verse ? '<p class="av-verse">' + esc(nb(w.verse)) + '</p>' : "") + (w.question ? '<p class="av-s">' + esc(w.question) + '</p>' : "") + (w.step ? '<p class="av-s">' + esc(w.step) + '</p>' : "") : "") +
          '<p class="av-help">' + (w ? "A person on our team has read it." : "A person on our team reads it within " + esc(review) + ", before anything else happens with it.") + '</p></div>';
      } else {
        h += '<textarea id="avAns" maxlength="2000" aria-label="Your answer" placeholder="Write it here.">' + esc(UI.drafts.avAns || "") + '</textarea><button type="button" class="av-btn" data-act="send-ans">Send</button><p class="av-kept" id="avAnsS" aria-live="polite"></p><p class="av-help">' + esc(nb(SAFE.replace("__REVIEW__", review))) + '</p>';
      }
      h += '</div>';
    }
    return sheetHtml("For Your Road · " + layer, h);
  }
  function letterSheet() {
    var n = unreadNote() || newestNote(); if (!n) return "";
    var paras = String(n.text).split(/\n\s*\n/).map(function (x) { return x.trim(); }).filter(Boolean);
    return sheetHtml("A Letter From Your Witness", '<div class="av-paper">' + paras.map(function (x) { return '<p>' + esc(x).replace(/\n/g, "<br>") + '</p>'; }).join("") + (n.witness ? '<p class="av-sig">' + esc(n.witness) + '</p>' : "") + '</div>');
  }
  function handSheet() {
    var danger = '<div class="av-card"><p class="av-lk">If You Are in Danger Right Now</p><p class="av-s">' + DANGER + '</p></div>';
    if (UI.handSent) return sheetHtml("I Need a Hand", '<p class="av-q">Sent.</p><p class="av-s">' + (group() && leaderKnown() ? "Your group’s leader" : "Our team") + ' has it and will reach out to you today.</p>' + danger);
    return sheetHtml("I Need a Hand", '<p class="av-q">Reach out now?</p><p class="av-s">One tap sends a note to ' + esc(witnessName()) + ' that you need a hand. Nothing else about your week goes with it.</p><button type="button" class="av-btn" data-act="hand-send"' + (UI.handBusy ? " disabled" : "") + '>Send it</button><p class="av-kept" id="avHandS" aria-live="polite">' + (UI.say.hand || "") + '</p>' + danger);
  }
  function settingsSheet() {
    var S = V().settings || {}, sh = S.shares || {}, w = witnessName();
    var sw = function (k, label) { return '<div class="av-toggle"><span>' + esc(label) + '</span><button type="button" class="av-sw" role="switch" aria-checked="' + !!sh[k] + '" aria-label="' + esc(label) + '" data-act="share" data-k="' + k + '"></button></div>'; };
    return sheetHtml("Settings", '<p class="av-q">Your Rhythm</p><p class="av-s">How often should we be in touch? New pieces and your practice come back to you at this pace.</p><div class="av-choices av-two">' + RHYTHMS.map(function (r) { return '<button type="button" class="av-choice" data-act="rhythm" data-v="' + r[0] + '" aria-pressed="' + (S.remind === r[0]) + '">' + esc(r[1]) + '</button>'; }).join("") + '</div><p class="av-kept" aria-live="polite">' + (UI.say.rhythm || "") + '</p>' +
      '<p class="av-q" style="margin-top:24px">What Your Witness Sees</p><p class="av-s">Your witness, ' + esc(w) + ', sees only what you choose.</p><div class="av-card">' + SHARES.map(function (x) { return sw(x[0], x[1]); }).join("") + '</div><p class="av-kept" aria-live="polite">' + (UI.say.shares || "") + '</p>' +
      weeklyPreview(S) + '<div class="av-card"><div class="av-toggle"><span>Pause your witness’s notes</span><button type="button" class="av-sw" role="switch" aria-checked="' + !!S.paused + '" aria-label="Pause your witness’s notes" data-act="pause"></button></div><p class="av-help">No reason is shown. Tell our team any time if something feels off.</p></div><p class="av-kept" aria-live="polite">' + (UI.say.pause || "") + '</p>');
  }
  function weeklyPreview(S) {
    var w = V().weekly, row = function (a, b) { return '<p class="av-s"><b>' + esc(a) + '</b> ' + esc(b) + '</p>'; }, h = '';
    if (!w) return "";
    if (w.path) h += row("The Path:", w.path);
    if (w.piece) h += row("This Week’s Piece:", w.piece);
    if (w.last) h += row("Last Week’s Practice:", w.last);
    if (w.now) h += row("This Week’s:", w.now);
    if (w.words && w.words.length) h += w.words.map(function (x, i) { return '<p class="av-s">' + (i ? "" : "<b>In Your Words:</b> ") + "“" + esc(x) + "”</p>"; }).join("");
    if (!h) h = '<p class="av-s">Nothing yet. Your witness sees only what you choose, and your own words stay yours.</p>';
    else if (!(w.words && w.words.length)) h += '<p class="av-help">Your own words stay yours.</p>';
    return '<div class="av-card"><p class="av-lk">What Your Witness Sees Each Week</p>' + h + '<p class="av-help">This is the page, exactly as it reaches ' + esc(witnessName()) + '. Nothing else goes with it.</p></div>';
  }
  function welcomeSheet() {
    return sheetHtml("What This Page Is For", '<p class="av-q">Your home base for the week.</p><p class="av-verse">“Stand by the roads, and look, and ask for the ancient paths, where the good way is; and walk in it, and find rest for your souls.” <span>Jeremiah 6:16</span></p><p class="av-s">Each week this page shows you what your course asks of you, keeps what you write, and connects you with the people walking with you, so what you learn becomes how you live.</p><div class="av-card"><p class="av-s"><b>This Week</b>: stand and look. One short list, a check-in with your witness, the question you carry.</p><p class="av-s"><b>Your House</b>: find rest. What you did, what you saw, what you know now, and your own writing.</p><p class="av-s"><b>Your Path</b>: ask for the good way. Your courses, what’s next, and in time, walking with another man.</p></div>');
  }

  /* ───────────── writing: every tap is written as it is made, then says Kept. (a miss says so once and leaves his choice standing) ───────────── */
  function post(o) {
    if (!ROAD_URL || !me) return Promise.resolve(null);
    o.email = me.email; o.lwid = me.id; o.name = me.name;
    return fetch(ROAD_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(o) }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  }
  function ok(r) { return !!(r && r.ok); }
  function cache() { try { localStorage.setItem(CACHE, JSON.stringify({ email: me.email, data: data, at: Date.now() })); } catch (e) {} }
  function setV(k, val) { if (data && data.v11) data.v11[k] = val; }
  function setDone(k) { if (data && data.v11) { data.v11.done = data.v11.done || {}; data.v11.done[k] = true; } }
  function refocus(sel) { var n = sel && $(sel); if (n && n.focus) { try { n.focus({ preventScroll: true }); } catch (e) { n.focus(); } } }
  function popRow(key) { var r = $('.av-row[data-key="' + key + '"]'); if (r && !reduce) { r.classList.add("av-pop"); setTimeout(function () { r.classList.remove("av-pop"); }, 700); } }
  function houseKeys(h) { var o = {}; ROOMS.forEach(function (r) { (h && h[r[0]] || []).forEach(function (l) { o[r[0] + "|" + l.t] = 1; }); }); return o; }
  /* a newer answer from the road: new lines in the house are marked fresh, and the windows of the rooms that took something in light up */
  function applyData(r, prevHouse) {
    var before = houseKeys(prevHouse), rooms = [];
    data = r; UI.fresh = {};
    ROOMS.forEach(function (x) { (V().house && V().house[x[0]] || []).forEach(function (l) { if (!before[x[0] + "|" + l.t]) { UI.fresh[x[0] + "|" + l.t] = 1; if (rooms.indexOf(x[0]) < 0) rooms.push(x[0]); } }); });
    cache();
    return rooms;
  }
  function flare(rooms) {
    ROOMS.forEach(function (x, i) {
      if (rooms.indexOf(x[0]) < 0) return;
      setTimeout(function () { var w = $$(".av-house .av-win")[i]; if (w) { w.classList.remove("av-flare"); void w.getBoundingClientRect(); w.classList.add("av-lit", "av-flare"); } }, reduce ? 0 : 300 + i * 350);
    });
  }
  function refresh(then) {
    var prev = V().house;
    return post({ action: "road" }).then(function (r) {
      if (ok(r) && !r.bare) { var rooms = applyData(r, prev); if (then) then(rooms); renderMain(true); }
      return r;
    });
  }
  function say(key, t, bad) { UI.ck.say[key] = { t: t, bad: !!bad }; }
  function ckRedraw() { var o = ovCk(); if (!o) return; var sc = $(".av-obody", o), y = sc ? sc.scrollTop : 0, f = document.activeElement && document.activeElement.getAttribute ? document.activeElement.getAttribute("data-act") + "|" + (document.activeElement.getAttribute("data-v") || "") : ""; o.innerHTML = ckHtml(); sc = $(".av-obody", o); if (sc) sc.scrollTop = y; var n = f && o.querySelector('[data-act="' + f.split("|")[0] + '"][data-v="' + f.split("|")[1] + '"]'); if (n) n.focus(); }
  var MISS = "That did not save. Tap it again.";
  function ckMark() {
    var c = UI.ck; if (!c.path) return;
    post({ action: "road_mark", mark: c.path, word: c.word || "" }).then(function (r) {
      if (ok(r)) { c.taps++; say("path", "It shows in What You Saw, in Your House."); var cd = cardD(); if (cd) { cd.mark = c.path; cd.word = c.word || ""; } } else say("path", MISS, true);
      ckRedraw();
    });
  }
  function ckHelped(val) {
    var c = UI.ck, p = piece(); if (!p) return;
    c.helped = val; if (val === "yes") c.why = null;
    c.wordP = post({ action: "road_word", id: p.id, word: val === "yes" ? "met" : "not" }).then(function (r) {
      if (ok(r)) { c.taps++; p.word = val === "yes" ? "met" : "not"; if (val === "yes") p.why = ""; delete c.say.helped; } else say("helped", MISS, true);
      ckRedraw(); return r;
    });
    ckRedraw();
  }
  function ckWhy(val) {
    var c = UI.ck, p = piece(); if (!p) return; c.why = val;
    (c.wordP || Promise.resolve(null)).then(function () {
      return post({ action: "road_why", id: p.id, reason: val === "long" ? "too_long" : "not_needed" });
    }).then(function (r) { if (ok(r)) { c.taps++; p.why = val === "long" ? "too_long" : "not_needed"; } else say("helped", MISS, true); ckRedraw(); });
    ckRedraw();
  }
  function ckHow(val) {
    var c = UI.ck; c.how = val;
    post({ action: "road_did", did: val }).then(function (r) { if (ok(r)) { c.taps++; var cd = cardD(); if (cd) cd.did = val; } else { c.how = null; } ckRedraw(); });
    ckRedraw();
  }
  function ckPrac(i) {
    var c = UI.ck, t = ckPractices()[i], was = c.practice; if (!t) return;
    c.practice = t;
    post({ action: "road_practice", text: t }).then(function (r) {
      if (ok(r)) { c.taps++; say("practice", "This is your practice for the week."); setV("practice", t); var cd = cardD(); if (cd) cd.practice = t; } else { c.practice = was; say("practice", MISS, true); }
      ckRedraw();
    });
    ckRedraw();
  }
  function ckWhen(k) {
    var c = UI.ck, was = c.when; c.when = k;
    post({ action: "road_when", when: k }).then(function (r) {
      if (ok(r)) { c.taps++; say("when", "You’ll do it " + lc1(rhythmOfWhen(k)) + "."); setV("when", k); } else { c.when = was; say("when", MISS, true); }
      ckRedraw();
    });
    ckRedraw();
  }
  function ckNext() {
    var c = UI.ck;
    if (c.mode === "choose") {
      closeOverlay(ovCk());
      if (c.practice && (c.taps || ckPractices().some(isPicked))) { toast("Kept. Your practice for this week is set."); popRow("choose"); post({ action: "road" }).then(function (r) { if (ok(r) && !r.bare) { var rooms = applyData(r, V().house); renderMain(true); } }); setDone("choose"); }
      else toast("Nothing chosen yet. You can choose any time this week.");
      renderMain(true); return;
    }
    c.step++;
    if (c.step === 5) {
      if (c.taps) { post({ action: "road_checkin", state: "done" }); setDone("check"); UI.pending = post({ action: "road" }); } /* nothing kept, nothing saved: Skip leaves no mark */
      else UI.pending = null;
    }
    ckRedraw(); var b = $(".av-obody", ovCk()); if (b) b.scrollTop = 0;
    if (c.step === 5) revealGives(); else { var f = $(".av-obody button", ovCk()); if (f) f.focus(); }
  }
  function finishCk(goHouse) {
    var prev = V().house, pend = UI.pending, kept = !!(UI.ck && UI.ck.taps); UI.pending = null;
    closeOverlay(ovCk());
    var who = group() ? (leaderKnown() ? "Your group’s leader reads it before you meet." : "Our team reads it before you meet.") : "Our team reads it this week.";
    if (goHouse) { UI.tab = "house"; UI.house = "mine"; renderMain(); toTop(); } else { renderMain(true); if (kept) { popRow("check"); toast("Kept. " + who); } }
    if (pend) pend.then(function (r) {
      if (ok(r) && !r.bare) { var rooms = applyData(r, prev); renderMain(true); if (UI.tab === "house") flare(rooms); }
    });
  }

  /* ───────────── the rest of his taps ───────────── */
  function setTab(t) {
    UI.tab = t; UI.slot = UI.tab === "house" ? UI.slot : "";
    if (t === "house" && UI.house === "ours") loadOurs();
    renderMain(); toTop();
  }
  function toTop() { var b = document.getElementById("apBand"); if (b && b.scrollIntoView) { try { b.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" }); } catch (e) { b.scrollIntoView(); } } }
  function loadOurs() {
    if (!group() || UI.ours || UI.oursBusy) return;
    UI.oursBusy = true;
    post({ action: "road_ours" }).then(function (r) { UI.oursBusy = false; if (ok(r) && r.ours) UI.ours = r.ours; if (UI.tab === "house") renderMain(true); });
  }
  function openPiece() {
    var p = piece(); if (!p) return;
    openSheet(pieceSheet());
    if (!p.opened) { post({ action: "road_open", id: p.id }); p.opened = (data && data.today) || "today"; p.openedDay = DAYS[new Date().getDay()]; setDone("road"); }
  }
  function keepWed() {
    var ta = $("#avWed"), st = $("#avWedS"), t = ta ? ta.value.trim() : "";
    if (!t) { if (st) st.textContent = "Write a line first; one is enough."; if (ta) ta.focus(); return; }
    var btn = $('[data-act="keepwed"]'); if (btn) btn.setAttribute("disabled", "disabled"); if (st) st.textContent = "Keeping it.";
    post({ action: "road_saw", text: t }).then(function (r) {
      if (ok(r)) { setDone("wed"); setV("wedText", t); UI.drafts.avWed = ""; UI.drafts.avWedKept = t; toast("Kept in your house, in What You Saw."); renderMain(true); popRow("wed"); refresh(); }
      else { if (btn) btn.removeAttribute("disabled"); if (st) st.textContent = "It did not save. Your words are still here; try again."; }
    });
  }
  function keepMade() {
    var ta = $("#avMade"), st = $("#avMadeS"), t = ta ? ta.value.trim() : "";
    if (!t) { if (st) st.textContent = "Write a line first; one is enough."; if (ta) ta.focus(); return; }
    var btn = $('[data-act="keepmade"]'); if (btn) btn.setAttribute("disabled", "disabled"); if (st) st.textContent = "Keeping it.";
    post({ action: "road_make", text: t }).then(function (r) {
      if (ok(r)) { setV("made", { text: t, when: (data && data.today) || "today" }); UI.drafts.avMade = ""; renderMain(true); refresh(); }
      else { if (btn) btn.removeAttribute("disabled"); if (st) st.textContent = "It did not save. Your words are still here; try again."; }
    });
  }
  function sendAns() {
    var p = piece(), ta = $("#avAns", ovSheet()), st = $("#avAnsS", ovSheet()), t = ta ? ta.value.trim() : "";
    if (!p) return;
    if (!t) { if (st) st.textContent = "Write your answer first."; return; }
    var btn = $('[data-act="send-ans"]', ovSheet()); if (btn) btn.setAttribute("disabled", "disabled"); if (st) st.textContent = "Sending.";
    post({ action: "road_answer", id: p.id, text: t }).then(function (r) {
      if (ok(r)) { p.answer = { text: t, sent: r.sent || (data && data.today) || "today", word: null }; UI.drafts.avAns = ""; cache(); ovSheet().innerHTML = pieceSheet(); refresh(); }
      else { if (btn) btn.removeAttribute("disabled"); if (st) st.textContent = "It did not send. Your words are still here; nothing has been lost. Try again."; }
    });
  }
  function handSend() {
    if (UI.handBusy) return; UI.handBusy = true; UI.say.hand = "Sending."; ovSheet().innerHTML = handSheet();
    post({ action: "road_hand" }).then(function (r) {
      UI.handBusy = false;
      if (ok(r)) { UI.handSent = true; UI.say.hand = ""; } else UI.say.hand = "It did not go through. Tap Send it again, or use the line below if it is urgent.";
      ovSheet().innerHTML = handSheet(); refocus(".av-close");
    });
  }
  function setting(kind, fn) { return fn; }
  function rhythm(k) {
    var S = V().settings = V().settings || {}, was = S.remind; S.remind = k; UI.say.rhythm = "Saving."; ovSheet().innerHTML = settingsSheet();
    post({ action: "road_remind", remind: k }).then(function (r) {
      if (ok(r)) { UI.say.rhythm = RHYTHM_SAID[k]; if (data) { data.pace = r.pace || data.pace; } cache(); } else { S.remind = was; UI.say.rhythm = MISS; }
      ovSheet().innerHTML = settingsSheet(); refocus('[data-act="rhythm"][data-v="' + k + '"]');
    });
  }
  function share(k) {
    var S = V().settings = V().settings || {}; S.shares = S.shares || { path: true, piece: true, practice: true, words: false };
    S.shares[k] = !S.shares[k]; UI.say.shares = "Saving."; ovSheet().innerHTML = settingsSheet();
    post({ action: "road_shares", shares: S.shares }).then(function (r) {
      if (ok(r)) { UI.say.shares = "Kept. Your witness sees " + (S.shares[k] ? "" : "no longer ") + lc1(SHARES.filter(function (x) { return x[0] === k; })[0][1]) + (S.shares[k] ? "." : "."); cache(); } else { S.shares[k] = !S.shares[k]; UI.say.shares = MISS; }
      ovSheet().innerHTML = settingsSheet(); refocus('[data-act="share"][data-k="' + k + '"]');
    });
  }
  function pause() {
    var S = V().settings = V().settings || {}; S.paused = !S.paused; UI.say.pause = "Saving."; ovSheet().innerHTML = settingsSheet();
    post({ action: "road_pause", paused: S.paused }).then(function (r) {
      if (ok(r)) { UI.say.pause = S.paused ? "Kept. Your witness’s notes are paused." : "Kept. Your witness’s notes are back on."; cache(); } else { S.paused = !S.paused; UI.say.pause = MISS; }
      ovSheet().innerHTML = settingsSheet(); refocus('[data-act="pause"]');
    });
  }
  var inviteBusy = false;
  function invite() {
    if (inviteBusy) return;
    var nm = $("#avWn"), em = $("#avWe"), st = $("#avWs"), name = nm ? nm.value.trim() : "", email = em ? em.value.trim() : "";
    function s(t) { if (st) st.textContent = t; }
    if (!name || !email) { s("Add their name and email first."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { s("That email does not look right. Check it and send again."); if (em) em.focus(); return; }
    inviteBusy = true; s("Sending.");
    post({ action: "road_witness", role: UI.wf.role, theirName: name, theirEmail: email }).then(function (r) {
      inviteBusy = false;
      if (ok(r) && r.limited) { UI.wf.sent = false; UI.wf.open = false; if (data) data.witness = { waiting: false }; cache(); renderMain(true); toast("Kept. Our team walks with you."); return; }
      if (ok(r)) { UI.wf.sent = true; UI.wf.open = false; if (data) data.witness = { waiting: true }; cache(); renderMain(true); toast("Kept. Until they say yes, our team walks with you."); return; }
      s(r && r.error === "bad_email" ? "That email does not look right. Check it and send again." : "It did not go through. Your words are still here; tap Send the invitation again.");
    });
  }
  function doNext(act) {
    if (act === "go-path") return setTab("path");
    if (act === "letter") return openLetter();
    if (act === "focus-wed") { if (UI.tab !== "week") setTab("week"); var t = $("#avWed"); if (t) { try { t.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" }); } catch (e) {} t.focus({ preventScroll: true }); } return; }
    if (act === "choose") { ckInit("choose"); openOverlay(ovCk(), ckHtml()); return; }
    if (act === "checkin") { ckInit("week"); openOverlay(ovCk(), ckHtml()); return; }
    if (act === "piece") return openPiece();
    if (act === "course") { var a = $('a[data-act="course"]'); courseTap(); var href = a && a.getAttribute("href"); if (href) window.open(href, "_blank", "noopener"); return; }
    if (act === "story") { var s = storyRow(); if (s && s.it.href) location.href = s.it.href; return; }
  }
  function courseTap() {
    if (!doneNow().course) { post({ action: "road_course" }); setDone("course"); }
    var v = V(); toast("Opens " + (ctxLabel() ? ctxLabel() + " in " : "") + (v.course || "your course"));
    renderMain(true); popRow("course");
  }
  function openLetter() {
    var n = unreadNote() || newestNote(); if (!n) return;
    openSheet(letterSheet());
    if (!n.read) { post({ action: "road_note_read", written: n.written }); n.read = "today"; n.readDay = DAYS[new Date().getDay()]; UI.letterNow = true; }
  }
  window.APHisRoad = { build: BUILD, render: render, tab: function (t) { setTab(t); }, reveal: function () { if (UI.tab !== "week") setTab("week"); var m = $("#avMain"); if (m) toTop(); }, show: function (place, scroll) { UI.tab = "house"; UI.house = "mine"; if (place === "stones") UI.slot = "stones"; renderMain(); if (scroll) toTop(); } };

  /* ───────────── clicks: one listener for the three views and the overlays, one for the page's band ───────────── */
  function wire() {
    if (wire.done) return; wire.done = true;
    host.addEventListener("click", function (ev) {
      var t = ev.target.closest ? ev.target.closest("[data-act]") : null; if (!t || !data) return;
      var act = t.getAttribute("data-act"), c = UI.ck, isA = t.tagName === "A";
      if (!isA || act === "listen") { /* links open where they lead */ }
      if (act === "listen") { var p = piece(); if (p && !p.opened) { post({ action: "road_open", id: p.id }); p.opened = (data && data.today) || "today"; p.openedDay = DAYS[new Date().getDay()]; setDone("road"); } return; }
      if (act === "course") { courseTap(); return; }
      if (act === "story" || act === "begin") return;
      if (act === "stones") { ev.preventDefault(); window.APHisRoad.show("stones", true); return; }
      ev.preventDefault();
      switch (act) {
        case "tab": setTab(t.getAttribute("data-tab")); break;
        case "go-path": setTab("path"); break;
        case "toggle": var k = t.getAttribute("data-k"); UI.open[k] = !UI.open[k]; if (k === "invite") UI.wf.open = !!UI.open[k]; renderMain(true); refocus('[data-act="toggle"][data-k="' + k + '"]'); break;
        case "welcomed": UI.welcomed = true; if (data) { data.ui = data.ui || {}; data.ui.welcomed11 = "open"; } post({ action: "road_ui", key: "welcomed11", state: "open" }); cache(); renderMain(); toast("This Week is yours. Start at the top."); break;
        case "piece": openPiece(); break;
        case "checkin": ckInit("week"); openOverlay(ovCk(), ckHtml()); break;
        case "choose": ckInit("choose"); openOverlay(ovCk(), ckHtml()); break;
        case "close-ck": closeCk(); break;
        case "close-sheet": closeSheet(); break;
        case "ck-path": c.path = t.getAttribute("data-v"); ckMark(); ckRedraw(); break;
        case "ck-word": c.word = c.word === t.getAttribute("data-v") ? null : t.getAttribute("data-v"); if (c.path) ckMark(); ckRedraw(); break;
        case "ck-more": c.moreWords = true; ckRedraw(); break;
        case "ck-helped": ckHelped(t.getAttribute("data-v")); break;
        case "ck-why": ckWhy(t.getAttribute("data-v")); break;
        case "ck-how": ckHow(t.getAttribute("data-v")); break;
        case "ck-prac": ckPrac(Number(t.getAttribute("data-v"))); break;
        case "ck-when": ckWhen(t.getAttribute("data-v")); break;
        case "ck-next": case "ck-skip": ckNext(); break;
        case "ck-back": c.step = Math.max(1, c.step - 1); ckRedraw(); break;
        case "ck-finish": finishCk(false); break;
        case "ck-house": finishCk(true); break;
        case "house": UI.house = t.getAttribute("data-h"); if (UI.house === "ours") loadOurs(); renderMain(true); refocus('[data-act="house"][data-h="' + UI.house + '"]'); break;
        case "keepwed": keepWed(); break;
        case "keepmade": keepMade(); break;
        case "offer": toast("Offering this isn’t open yet. It stays yours, and our team will tell you when it is."); break;
        case "letter": openLetter(); break;
        case "hand": UI.handSent = false; UI.say.hand = ""; openSheet(handSheet()); break;
        case "hand-send": handSend(); break;
        case "settings": openSheet(settingsSheet()); break;
        case "rhythm": rhythm(t.getAttribute("data-v")); break;
        case "share": share(t.getAttribute("data-k")); break;
        case "pause": pause(); break;
        case "welcome": openSheet(welcomeSheet()); break;
        case "send-ans": sendAns(); break;
        case "wrole": UI.wf.role = t.getAttribute("data-v"); $$('[data-act="wrole"]').forEach(function (b) { b.setAttribute("aria-checked", b === t ? "true" : "false"); }); break;
        case "invite": invite(); break;
        case "wchange": UI.wf.sent = false; UI.wf.open = true; UI.open.invite = true; renderMain(true); break;
        case "slot": var sk = t.getAttribute("data-k"); UI.slot = UI.slot === sk ? "" : sk; renderMain(true); refocus('[data-act="slot"][data-k="' + sk + '"]'); break;
      }
    });
    host.addEventListener("input", function (ev) { var t = ev.target; if (t && t.id && /^av/.test(t.id)) UI.drafts[t.id] = t.value; });
    var band = document.getElementById("apBand");
    if (band) band.addEventListener("click", function (ev) {
      var t = ev.target.closest ? ev.target.closest("[data-tab],[data-set],[data-next]") : null; if (!t || !data) return;
      ev.preventDefault();
      if (t.hasAttribute("data-tab")) setTab(t.getAttribute("data-tab"));
      else if (t.hasAttribute("data-set")) openSheet(settingsSheet());
      else if (t.hasAttribute("data-next")) doNext(t.getAttribute("data-next"));
    });
    document.addEventListener("keydown", trap);
    document.addEventListener("focusin", function (ev) {
      var ov = ovSheet() && ovSheet().classList.contains("av-open") ? ovSheet() : ovCk() && ovCk().classList.contains("av-open") ? ovCk() : null;
      if (!ov || ov.contains(ev.target)) return;
      var f = $("textarea,.av-obody button,.av-obody input,button", ov); if (f && f.focus) f.focus({ preventScroll: true });
    });
    ["ap:states", "ap:stones", "ap:courses", "ap:news"].forEach(function (name) {
      document.addEventListener(name, function (ev) {
        if (name === "ap:news") UI.news = (ev && ev.detail) || [];
        clearTimeout(wire.t); wire.t = setTimeout(function () { if (data && !anyOpen()) renderMain(true); }, 250);
      });
    });
  }

  /* ───────────── drawing ───────────── */
  function ensureShell() {
    if ($("#avRoot")) return;
    host.innerHTML = '<div class="av" id="avRoot"><div class="av-main" id="avMain"></div><div class="av-scrim" id="avScrim"></div><section class="av-ov" id="avCk" role="dialog" aria-modal="true" aria-label="Check in with your witness"></section><section class="av-ov" id="avSheet" role="dialog" aria-modal="true" aria-label="Details"></section><div class="av-toast" id="avToast" role="status" aria-live="polite"></div></div>';
    var sc = $("#avScrim"); if (sc) sc.addEventListener("click", function () { if (ovSheet().classList.contains("av-open")) closeSheet(); else closeCk(); });
  }
  function renderMain(keep) {
    if (!data) return;
    ensureShell(); wire();
    var y = window.pageYOffset, sc = scroller(), sy = sc ? sc.scrollTop : 0;
    stashSlots();
    var m = $("#avMain"); m.innerHTML = UI.tab === "week" ? viewWeek() : UI.tab === "house" ? viewHouse() : viewPath();
    fillSlots();
    paintBand();
    host.style.minHeight = "";
    if (keep) { if (sc) sc.scrollTop = sy; else if (Math.abs(window.pageYOffset - y) > 1) window.scrollTo(0, y); }
  }
  function render(d) {
    data = d;
    if (data && data.v11 && data.v11.notes) UI.letterNow = false;
    window.apRoadBand = { bare: !!d.bare, band: d.band || null, step: null, since: [], where: whereText() };
    renderMain(true);
  }
  var LOCAL = { ok: true, bare: true, ui: {}, band: null, v11: null };

  /* AP-SHIP 1, line 12: the page counts the rules the browser accepted against the stamped count; short, it tells the Front Desk once per build (kept in this browser so it never repeats) and the desk shows one line with the link. */
  function selfCheck() {
    if (location.pathname.indexOf("/author") >= 0 || window.top !== window) return;
    var short = [], got = 0, want = 0;
    Object.keys(RULES).forEach(function (k) {
      var st = document.querySelector('style[data-ap-sheet="' + k + '"]'), n = -1;
      try { n = st && st.sheet ? st.sheet.cssRules.length : -1; } catch (e) { n = -1; }
      got += Math.max(0, n); want += RULES[k];
      if (n < RULES[k]) short.push(k + " " + n + " of " + RULES[k]);
    });
    if (!short.length) return;
    var key = "ap_check_road_" + BUILD;
    try { if (localStorage.getItem(key)) return; localStorage.setItem(key, String(Date.now())); } catch (e) {}
    fetch(DESK_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "page_check", page: location.pathname, name: "Your Page (road.js)", build: BUILD, accepted: got, expected: want, detail: short.join(", "), ua: String(navigator.userAgent || "").slice(0, 120) }) }).catch(function () {});
  }
  function getJSON(path) { return fetch(path, { credentials: "include", headers: { Accept: "application/json" } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }
  function whoAmI() {
    return getJSON("/api/user_stats").then(function (j) {
      var m = (j && j.me) || {};
      var a = { id: m.id || m._id || m.user_id || "", email: (m.email || m.user_email || "").toLowerCase(), name: ((m.first_name || "") + " " + (m.last_name || "")).trim() || m.username || "", first: m.first_name || "" };
      if (a.id && a.email && a.first) return a;
      return getJSON("/api/user/me").then(function (x) {
        var u = (x && x.user) || x || {};
        if (!a.id) a.id = u.id || u._id || "";
        if (!a.email) a.email = String(u.email || u.user_email || "").toLowerCase();
        if (!a.name) a.name = ((u.first_name || "") + " " + (u.last_name || "")).trim() || u.username || "";
        if (!a.first) a.first = u.first_name || "";
        return a;
      });
    });
  }

  window.APHisRoad.render = render;
  whoAmI().then(function (a) {
    if (!a || !a.email) { render(LOCAL); return; }
    me = a;
    var cached = null; try { var c = JSON.parse(localStorage.getItem(CACHE) || "null"); if (c && c.email === a.email && c.data && Date.now() - c.at < 7 * 864e5) cached = c.data; } catch (e) {}
    if (cached && cached.build !== BUILD) cached = null; /* a draw kept by an earlier build has none of this build's parts */
    if (cached && cached.week && cached.week.start && Date.now() - Date.parse(cached.week.start + "T12:00:00") >= 14 * 864e5) cached = null;
    if (cached && !cached.v11) cached = null;
    if (cached) render(cached);
    post({ action: "road" }).then(function (r) {
      if (r && r.ok) { render(r); cache(); setTimeout(selfCheck, 0); }
      else if (!cached) render(LOCAL);
    });
  });
})();
