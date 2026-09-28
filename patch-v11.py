p='story.js'; s=open(p).read()
def rep(old, new, n=1):
    global s
    assert s.count(old)==n, ('count', s.count(old), old[:90])
    s = s.replace(old, new)

# ---- 1. the rows get a cushion left and right; the results box takes the whole width ----
rep('''      st.textContent = ".aps-row{display:flex!important;flex-wrap:wrap;gap:12px 14px;align-items:center;background:#fff;padding:16px 0;border-top:1px solid #E5DCC8}" +''',
'''      st.textContent = ".aps-row{display:flex!important;flex-wrap:wrap;gap:12px 14px;align-items:center;background:#fff;padding:16px 18px;border-top:1px solid #E5DCC8}" +''')
rep('''        ".aps-row.aps-finish{padding:20px 0 12px;gap:14px 16px}" +''',
'''        ".aps-row.aps-finish{padding:22px 20px 16px;gap:14px 16px}" +''')
rep('''        ".aps-row.aps-finish .aps-read{flex:1 1 100%;margin:0}" +''',
'''        ".aps-row.aps-finish .aps-read{flex:1 1 100%;width:100%;max-width:none;margin:0}.aps-row.aps-finish .aps-read > *{max-width:62ch}" +''')
# the way out reads as a button: nothing the page says about links reaches it
rep('''        ".aps-row.aps-finish > .aps-page-btn{text-decoration:none;display:inline-block}.aps-row.aps-finish > button[disabled].aps-quiet{opacity:1}" +''',
'''        ".aps-row.aps-finish > .aps-page-btn{text-decoration:none!important;display:inline-block}.aps-row.aps-finish > button[disabled].aps-quiet{opacity:1}" +
        /* v11: the eighteen-and-older line at the top comes down (John, 17 Sept); the tick box shows only if Save is pressed before it is ticked */
        ".ap-age-line{display:none!important}.ap-age:not(.is-blocked){display:none!important}" +''')

# ---- 2. Go to your page: a real button, in the page's own button colors ----
rep('''    a.href = this.cfg.pagePath;
    if (inFrame()) { a.target = "_top"; }   /* v7: from inside a course frame his page opens in the full window */''',
'''    a.href = this.cfg.pagePath;
    if (inFrame()) { a.target = "_top"; }   /* v7: from inside a course frame his page opens in the full window */
    if (this.saved) { this.dressLink(a); }   /* v11: the page's own link rules must not paint the button's words over */''')
rep('''  /* A quiet link to his page, if the page has told us where: drawn for any''',
'''  /* v11: a page may style ".aps-page-link" as a quiet underlined link with !important; once it is the dark button
     the words must read. Copy the look of the page's own dark button onto it, inline and important. */
  Story.prototype.dressLink = function (a) {
    var cfg = this.cfg, from = cfg.primaryClass ? document.querySelector("button." + cfg.primaryClass) : null, cs = null;
    try { cs = from ? window.getComputedStyle(from) : null; } catch (e) { cs = null; }
    var put = function (k, v) { try { a.style.setProperty(k, v, "important"); } catch (e) {} };
    put("color", cs && cs.color ? cs.color : "#fff");
    put("text-decoration", "none");
    if (cs) {
      if (cs.fontFamily) { put("font-family", cs.fontFamily); }
      if (cs.fontSize) { put("font-size", cs.fontSize); }
      if (cs.fontWeight) { put("font-weight", cs.fontWeight); }
      if (cs.lineHeight) { put("line-height", cs.lineHeight); }
      if (cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)") { put("background-color", cs.backgroundColor); }
      if (cs.padding) { put("padding", cs.padding); }
      if (cs.borderRadius) { put("border-radius", cs.borderRadius); }
    }
    put("display", "inline-block");
    put("box-sizing", "border-box");
  };

  /* A quiet link to his page, if the page has told us where: drawn for any''')

# ---- 3. the relay: an unreadable or empty answer is asked for once more before he is told ----
rep('''    function relay(url) {
      return { json: function (input, opts) {
        var sig = opts && opts.signal, who = ""; try { who = window.localStorage.getItem("apStoryOwner") || ""; } catch (e) {}
        return window.fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ input: String(input || "").slice(0, 60000), id: who }), signal: sig, credentials: "omit" })
          .then(function (r) { return r.json(); }, function () { throw { code: "network" }; })
          .then(function (r) { if (!r || r.ok !== true) { throw { code: (r && r.error) || "network" }; } return r.data; });
      } };
    }''',
'''    function relay(url) {
      var once = function (input, sig) {
        var who = ""; try { who = window.localStorage.getItem("apStoryOwner") || ""; } catch (e) {}
        return window.fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ input: String(input || "").slice(0, 60000), id: who }), signal: sig, credentials: "omit" })
          .then(function (r) { return r.json(); }, function (e) { throw (e && e.name === "AbortError") ? e : { code: "network" }; })
          .then(function (r) { if (!r || r.ok !== true) { throw { code: (r && r.error) || "network" }; } return r.data; });
      };
      return { json: function (input, opts) {
        var sig = opts && opts.signal;
        /* v11: an answer that came back empty or unreadable is asked for once more before he is told */
        return once(input, sig).then(null, function (e) {
          if (e && (e.code === "invalid_json" || e.code === "empty_completion") && !(sig && sig.aborted)) { return once(input, sig); }
          throw e;
        });
      } };
    }''')

# ---- header + version ----
rep('''/* ==========================================================================
   AP-STORY-MODULE-v10
   Ancient Path — the Chronicle: the shared save and the story assistant.
''',
'''/* ==========================================================================
   AP-STORY-MODULE-v11
   Ancient Path — the Chronicle: the shared save and the story assistant.

   v11 (28 Sept 2026) — what John saw on Where I'm From after the first save:
     the rows get a cushion left and right (18px; the finish 20px); the
     results box takes the whole width so nothing sits beside it; Go to your
     page is dressed in the page's own dark-button colors inline, so a page
     rule for quiet links cannot paint its words over; the eighteen-and-older
     line at the top comes down and the tick box shows only if Save is
     pressed before it is ticked (John, 17 Sept: said once is enough); an
     answer from Claude that comes back empty or unreadable is asked for
     once more before he is told.
''')
rep('  window.APStory = {\n    version: "10",', '  window.APStory = {\n    version: "11",')
open(p,'w').write(s)
print("patched", len(s))
