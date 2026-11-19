/* AP-ROW row.js build 3.2 (Nov 19, 2026; Your Page, instant load, with Research reader 13.17 and Your Page v37.17). row.js 3.1 moved into the repo (scripts/row.js), served from jsDelivr at a pinned commit and loaded with async, so the band's row no longer holds the page while an Apps Script web app wakes. The Research reader's address is a constant; the band pictures are baked as they stand (empty) and the live value is applied from Your Page's one start call. Nothing else changed: no stylesheet rule added or removed. Moves to the platform as it is. */
/* AP-ROW row.js build 3.1 — one band, three rooms. Served by the Research reader script (?file=row.js), loaded on /front-desk and /start; /your-growth draws its own band and is the standard.
   Build 3 (Oct 21, 2026, John: "we need a consistent ui"): Your Growth's band becomes the house band on Your Page and Your Desk — a picture full width above the band when one is set
   (Config "band picture page" / "band picture desk"), then the dark band left-aligned: the eyebrow, the greeting with his name, one line, Your Page's three stops as its own line, and the row.
   The row Your Desk · Your Growth · Your Page shows only in a browser that holds a desk key (a facilitator or admin); a man never sees it. Nothing under the band changes. */
(function () {
  if (window.__apRow) return; window.__apRow = true;
  var PICS = {"page":"","desk":""}; /* the band pictures as Config holds them today (both empty); the Research reader's start answer carries the live values and they are applied when it comes */
  var STORE = 'apDesk', s = null;
  try { s = JSON.parse(localStorage.getItem(STORE) || 'null'); } catch (e) {}
  var ROW_URL = "https://script.google.com/macros/s/AKfycbyz6_kXnoG3XdIcNySRPDrqfF7J3k9Cd4M1Qh_RyTeSIi_k3W-YR88swDwk-42lo32d/exec"; /* 3.2: a constant; the file is served from the repo, not from the Research reader */
  var path = location.pathname.replace(/\/+$/, '') || '/';
  var here = path === '/front-desk' ? 'desk' : path === '/your-growth' ? 'growth' : (path === '/start' || path === '/') ? 'page' : '';
  if (here === 'growth' || !here) return;
  var root = here === 'desk' ? '#apDesk' : '#apHome';

  var css = document.createElement('style');
  css.textContent =
    /* the band, left-aligned, the same measures as Your Growth */
    root + ' .ap-band, ' + root + ' .ap-band *{text-align:left !important}' +
    root + ' .ap-band{padding-top:0 !important}' +
    root + ' .ap-band-in{display:block !important;max-width:980px !important;margin:0 auto !important;padding:36px 24px 0 !important;justify-items:start !important}' +
    root + ' .ap-band-in .ap-eyebrow{font:600 13px/1.65 "Source Sans 3",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif !important;letter-spacing:3px !important;text-transform:uppercase !important;color:#B8945F !important;margin:0 !important}' +
    root + ' .ap-band-in .ap-hello{font:600 44px/1.1 "Source Serif 4",Georgia,serif !important;color:#F3EDE3 !important;letter-spacing:-0.01em !important;margin:12px 0 0 !important}' +
    root + ' .ap-band-in .ap-line{font:400 19px/1.5 "Source Sans 3",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;max-width:640px !important;margin:12px 0 0 !important}' +
    root + ' .ap-band-in .ap-line .ap-s{display:inline !important}' +
    root + ' .ap-band-in .ap-line-small{display:none !important}' +
    root + ' .ap-band-in .ap-primary{margin-top:18px !important}' +
    /* the picture above the band */
    root + ' .ap-band .apb-hero{display:block;width:100%;height:clamp(180px,26vw,380px);object-fit:cover;object-position:50% 62%;background:#1B2A3A;margin:0}' +
    /* Your Page's three stops: its own line, left-aligned, one line through the three */
    root + ' .ap-band-in .ap-stones{display:flex !important;justify-content:flex-start !important;gap:28px !important;margin:22px 0 0 !important;max-width:none !important;width:100% !important;position:relative}' +
    root + ' .ap-band-in .ap-stones::before{left:0 !important;right:0 !important;top:5px !important}' +
    root + ' .ap-band-in .ap-stone{flex:1 1 0 !important;padding:0 !important;margin:0 !important;border:0 !important}' +
    root + ' .ap-band-in .ap-stone-dot{margin:0 0 10px !important}' +
    root + ' .ap-band-in .ap-stone-word{font:600 14px/1.3 "Source Sans 3",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif !important;letter-spacing:1.5px !important}' +
    root + ' .ap-band-in .ap-stone-what{display:block !important;font:400 14px/1.5 "Source Sans 3",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;margin-top:4px !important;text-wrap:auto !important}' +
    /* the row */
    root + ' .apg-row{display:flex;width:100%;gap:36px;margin-top:18px;border-top:1px solid rgba(243,237,227,.14);padding-top:4px;flex-wrap:wrap;font-family:"Source Sans 3",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}' +
    root + ' .apg-row a{display:inline-block !important;padding:16px 0 !important;font:400 17px/1.3 "Source Sans 3",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;border-bottom:3px solid transparent !important;text-decoration:none !important}' +
    root + ' .apg-row a:hover{color:#F3EDE3 !important;text-decoration:none !important}' +
    root + ' .apg-row a.on{color:#F3EDE3 !important;font-weight:600 !important;border-bottom-color:#B8945F !important}' +
    root + ' .apg-row a .new{font-weight:400;color:#B8945F}' +
    /* the band keeps its bottom room when the row is not there */
    root + ' .ap-band-in .apb-foot{height:36px}' +
    '@media (max-width:720px){' + root + ' .ap-band-in{padding:28px 16px 0 !important}' + root + ' .ap-band-in .ap-hello{font-size:32px !important}' + root + ' .ap-band-in .ap-line{font-size:17px !important}' +
    root + ' .ap-band-in .ap-stones{flex-direction:column !important;gap:14px !important}' + root + ' .ap-band-in .ap-stones::before{display:none}' + root + ' .ap-band-in .ap-stone-dot{display:none !important}' +
    root + ' .apg-row{gap:18px;margin-top:10px;flex-wrap:nowrap}' + root + ' .apg-row a{padding:12px 0 !important;font-size:14px !important;white-space:nowrap}}';
  document.head.appendChild(css);

  var tries = 0;
  function place() {
    var band = document.querySelector(root + ' .ap-band'), inner = band && (band.querySelector('.ap-band-in') || band);
    if (!inner) { if (tries++ < 60) return setTimeout(place, 250); return; }
    if (inner.getAttribute('data-apb')) return;
    inner.setAttribute('data-apb', '3.1');
    /* the picture, when one is set for this room */
    var pic = PICS && PICS[here];
    function hero(u) { if (u && !band.querySelector('.apb-hero')) { var img = document.createElement('img'); img.className = 'apb-hero'; img.src = u; img.alt = ''; img.decoding = 'async'; band.insertBefore(img, band.firstChild); align(band, inner); } }
    hero(pic);
    /* 3.2: the live picture comes with Your Page's one start call, when there is one and none is baked in */
    if (!pic && here === 'page' && window.apStartP && typeof window.apStartP.then === 'function') window.apStartP.then(function (r) { hero(r && r.ok && r.pics && r.pics[here]); }).catch(function () {});
    /* Your Page: the small line folds into the one line under the greeting; the stops stay as their own line */
    if (here === 'page') {
      var promise = inner.querySelector('.ap-promise'), small = inner.querySelector('.ap-line-small');
      if (promise && small && !promise.getAttribute('data-apb')) { promise.setAttribute('data-apb', '1'); var t = (small.textContent || '').replace(/\s+/g, ' ').trim(); if (t) promise.appendChild(document.createTextNode(' ' + t)); }
    }
    /* the row: desk holders only */
    if (s && s.key) {
      if (!inner.querySelector('.apg-row')) {
        var nav = document.createElement('nav');
        nav.className = 'apg-row'; nav.setAttribute('aria-label', 'Your rooms');
        nav.innerHTML = '<a href="/front-desk"' + (here === 'desk' ? ' class="on"' : '') + '>Your Desk</a>' +
          '<a href="/your-growth" id="apgRowGrowth">Your Growth</a>' +
          '<a href="/start"' + (here === 'page' ? ' class="on"' : '') + '>Your Page</a>';
        inner.appendChild(nav);
        if (ROW_URL) {
          fetch(ROW_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'new', key: s.key }), credentials: 'omit' })
            .then(function (r) { return r.json(); }).then(function (r) { if (r && r.ok && r.fresh) { var a = document.getElementById('apgRowGrowth'); if (a) a.innerHTML = 'Your Growth <span class="new">· 1 new</span>'; } }).catch(function () {});
        }
      }
    } else if (!inner.querySelector('.apb-foot')) { var f = document.createElement('div'); f.className = 'apb-foot'; inner.appendChild(f); }
    align(band, inner); window.addEventListener('resize', function () { align(band, inner); });
    setTimeout(function () { align(band, inner); }, 1200);
  }
  /* the band's words start where the page's own content starts, measured, so the two edges never drift apart */
  function align(band, inner) {
    var list = Array.prototype.slice.call(document.querySelectorAll(here === 'page' ? '#apHome .ap-why, #apHome #apPrimaryRow, #apHome .ap-sec' : '#apDesk .wrap'));
    var ref = null; for (var i = 0; i < list.length; i++) { var r = list[i].getBoundingClientRect(); if (list[i].offsetParent !== null && r.width > 0) { ref = list[i]; break; } }
    if (!ref) return;
    var want = ref.getBoundingClientRect().left, have = band.getBoundingClientRect().left;
    var pad = Math.round(want - have);
    if (!(pad > 0) || pad > window.innerWidth / 2) return;
    inner.style.setProperty('max-width', 'none', 'important'); inner.style.setProperty('padding-left', pad + 'px', 'important'); inner.style.setProperty('padding-right', pad + 'px', 'important');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', place); else place();
})();
