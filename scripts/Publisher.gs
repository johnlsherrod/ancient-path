/* AP-PUBLISHER data · the templates (blog/templates) and the school row (school/ancient-path.json), carried as they are. Rebuilt by publisher/build.js. */
const AP_TEMPLATES = {"article.html":"<section class=\"band art\" style=\"background-image:url('{{picture_url}}')\">\n  <div class=\"band-in\">\n    <p class=\"dt\">{{date_long}} · {{minutes}}{{read_suffix}}</p>\n    <h1>{{title}}</h1>\n  </div>\n</section>\n<article class=\"rd\">\n{{body_html}}\n</article>\n<div class=\"share\"><div class=\"share-in\">\n  <button id=\"sharebtn\" type=\"button\" data-title=\"{{title}}\" data-copied=\"{{share_copied}}\" data-manual=\"{{share_manual}}\">{{share_label}}</button>\n  <span class=\"said\" id=\"said\" role=\"status\" aria-live=\"polite\"></span>\n</div></div>\n<section class=\"kr\">\n  <div class=\"kr-h\"><h2>{{keep_heading}}</h2><a href=\"{{index_href}}\">{{all_label}}</a></div>\n  <div class=\"kr-g\">\n{{keep_html}}\n  </div>\n</section>\n","articles.html":"<section class=\"sec\" id=\"articles\">\n  <div class=\"sec-in\">\n    <p class=\"sec-e\">{{eyebrow}}</p>\n    <h2 class=\"sec-t\">{{title}}</h2>\n    <p class=\"sec-l\">{{line}}</p>\n    <div class=\"ix-list\" id=\"aprArticles\">\n{{cards_html}}\n{{more_html}}\n    </div>\n  </div>\n</section>\n","asking-row.html":"<div class=\"aq\"><p class=\"aq-q\">{{line}}</p><p class=\"aq-w\"><b>{{where_label}}</b> {{where_html}}</p></div>\n","asking.html":"<section class=\"sec\" id=\"asking\" data-ap-ask=\"asking\"{{hidden_html}}>\n  <div class=\"sec-in\">\n    <p class=\"sec-e\">{{eyebrow}}</p>\n    <h2 class=\"sec-t\">{{title}}</h2>\n    <p class=\"sec-l\">{{line}}</p>\n    <div class=\"aq-list\" data-ap-ask-rows>\n{{rows_html}}\n    </div>\n  </div>\n</section>\n","blog.css":"/* AP-BLOG-TPL 2.0 · rules: 160 */\n/* The one stylesheet for Read and every article. Brand arrives only through the variables in :root, filled from the school row; nothing below names a school. */\n:root{--navy:{{navy}};--cream:{{cream}};--paper:{{paper}};--bronze:{{bronze}};--brown:{{brown}};--brown-hover:{{brown_hover}};--ink:{{ink}};--quiet:{{quiet}};--rule:{{rule}};--gold:{{gold}};--tint:{{tint_article}};--tint-ix:{{tint_index}};--serif:{{serif}};--sans:{{sans}};--apr-serif:var(--serif);--apr-sans:var(--sans)}\n*{box-sizing:border-box}\nhtml{-webkit-text-size-adjust:100%}\nbody{margin:0;background:var(--cream);color:var(--ink);font-family:var(--sans)}\na{color:var(--navy)}\n.skip{position:absolute;left:-9999px;top:0;z-index:60;background:var(--navy);color:#fff;font:600 15px/1 var(--sans);padding:14px 18px}\n.skip:focus{left:0}\n.tb{background:#fff;border-bottom:1px solid var(--rule)}\n.tb-in{max-width:1180px;margin:0 auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;min-height:72px;gap:16px}\n.wm{display:inline-flex;align-items:center;min-height:44px;font:600 22px/1 var(--serif);color:var(--navy);text-decoration:none;letter-spacing:.01em}\n.nav{display:flex;gap:4px;align-items:center}\n.nav a{font:600 15px/1 var(--sans);color:var(--navy);text-decoration:none;padding:0 12px;min-height:44px;display:inline-flex;align-items:center;border-bottom:2px solid transparent}\n.nav a.on{border-bottom-color:var(--bronze)}\n.tb-r{display:flex;gap:8px;align-items:center}\n.talk{display:none;align-items:center;font:600 15px/1 var(--sans);min-height:44px;padding:0 14px;border:1px solid var(--bronze);border-radius:4px;color:var(--navy);text-decoration:none}\n.menu{display:none;font:600 15px/1 var(--sans);min-height:44px;padding:0 14px;background:none;border:1px solid var(--rule);border-radius:4px;color:var(--navy);cursor:pointer}\n.drawer{display:none;border-top:1px solid var(--rule);padding:6px 18px 12px;background:#fff}\n.drawer a{display:flex;align-items:center;min-height:48px;font:600 17px/1 var(--sans);text-decoration:none;color:var(--navy);border-bottom:1px solid var(--rule)}\n.drawer.open{display:block}\n.band{position:relative;background:var(--navy) center/cover no-repeat;color:#FBF9F5}\n.band::before{content:\"\";position:absolute;inset:0;background:var(--navy);opacity:var(--tint)}\n.band.ix::before{opacity:var(--tint-ix)}\n.band-in{position:relative;max-width:1180px;margin:0 auto;padding:92px 28px 96px;text-align:center}\n.band .eb{font:600 13px/1.4 var(--sans);letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin:0 0 14px}\n.band .dt{font:600 15px/1.4 var(--sans);letter-spacing:.04em;color:var(--gold);margin:0 0 16px}\n.band h1{font:600 52px/1.1 var(--serif);margin:0 auto;max-width:920px;text-wrap:balance;color:#fff}\n.band .bn{font:400 20px/1.5 var(--serif);color:var(--cream);margin:16px auto 0;max-width:640px;text-wrap:balance}\n.band.art .band-in{max-width:720px}\n.band.art h1{max-width:none}\n.sec{padding:64px 0 0}\n.sec-in{max-width:1080px;margin:0 auto;padding:0 28px}\n.sec-e{font:600 13px/1.4 var(--sans);letter-spacing:.18em;text-transform:uppercase;color:var(--brown-hover);text-align:center;margin:0 0 10px}\n.sec-t{font:600 36px/1.15 var(--serif);color:var(--navy);text-align:center;margin:0}\n.sec-l{font:400 17px/1.55 var(--serif);color:var(--quiet);text-align:center;margin:14px auto 0;max-width:64ch}\n.ask{position:relative}\n.apa-doors{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;max-width:820px;margin:22px auto 0}\n.apa-doors[hidden]{display:none}\n.apa-doors a{display:inline-flex;align-items:center;min-height:44px;font:600 14px/1.2 var(--sans);letter-spacing:.01em;padding:0 16px;border:1px solid rgba(217,210,195,.55);border-radius:999px;color:#FBF9F5;text-decoration:none;white-space:nowrap}\n.apa-doors a:hover{border-color:var(--bronze)}\n.sc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:30px}\n.sc-grid:empty{display:none}\na.sc{display:flex;flex-direction:column;gap:10px;background:#fff;border:1px solid var(--rule);border-radius:6px;padding:22px 24px 20px;text-decoration:none;color:var(--ink);transition:border-color .2s,transform .2s}\na.sc:hover{border-color:var(--bronze);transform:translateY(-2px)}\na.sc:focus-visible{outline:2px solid var(--bronze);outline-offset:2px}\n.sc-m{display:flex;justify-content:space-between;gap:12px;font:400 13px/1.4 var(--sans)}\n.sc-k{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--brown)}\n.sc-w{color:var(--quiet);text-align:right}\n.sc-t{font:600 23px/1.2 var(--serif);color:var(--navy)}\n.sc-l{font:400 16px/1.45 var(--serif);color:var(--ink)}\n.sc-q .sc-l::before{content:\"\\201C\";color:var(--bronze)}\n.sc-q .sc-l::after{content:\"\\201D\";color:var(--bronze)}\na.sc .way{margin-top:auto;padding-top:8px}\na.yc{background:var(--navy);border-color:var(--navy)}\na.yc .sc-k{color:var(--gold)}\na.yc .sc-t{color:#fff}\na.yc .sc-l{color:#FBF9F5}\na.yc .way span{color:var(--gold);border-bottom-color:var(--gold)}\n.all{text-align:center;margin:26px 0 0}\n.all a{display:inline-flex;align-items:center;min-height:44px;font:600 16px/1.4 var(--sans);color:var(--brown-hover);text-decoration:underline;text-decoration-color:var(--bronze);text-underline-offset:4px}\n.more{margin-top:8px}\n.aq-list{display:grid;gap:16px;margin:30px auto 0;max-width:820px}\n.aq-list:empty{display:none}\n.aq{background:#fff;border:1px solid var(--rule);border-radius:6px;padding:22px 28px 18px}\n.aq-q{font:400 20px/1.45 var(--serif);color:var(--navy);margin:0}\n.aq-q::before{content:\"\\201C\";color:var(--bronze)}\n.aq-q::after{content:\"\\201D\";color:var(--bronze)}\n.aq-w{font:400 15px/1.5 var(--sans);color:var(--ink);margin:10px 0 0}\n.aq-w b{color:var(--brown);font-weight:600}\n.aq-w a{color:var(--brown)}\n.ix-list{display:flex;flex-direction:column;gap:24px;margin-top:30px}\na.pc{display:grid;grid-template-columns:42% 1fr;background:#fff;border:1px solid var(--rule);border-radius:6px;overflow:hidden;text-decoration:none;color:inherit;transition:border-color .2s,box-shadow .2s}\na.pc:hover{border-color:var(--bronze);box-shadow:0 6px 18px rgba(31,42,68,.08)}\na.pc:focus-visible,a.kc:focus-visible,a.mr:focus-visible{outline:2px solid var(--bronze);outline-offset:2px}\n.pc img{width:100%;height:100%;aspect-ratio:16/9;object-fit:cover;display:block;background:var(--rule)}\n.pc-b{padding:26px 30px;display:flex;flex-direction:column}\n.pc-t{font:600 27px/1.2 var(--serif);color:var(--navy);margin:0;text-wrap:balance}\n.pc-l{font:400 17px/1.55 var(--serif);color:var(--ink);margin:12px 0 0}\n.way{margin-top:auto;padding-top:18px}\n.way span{font:600 15px/1.4 var(--sans);color:var(--navy);border-bottom:1px solid var(--bronze);padding-bottom:1px}\n.way span::after{content:\"\\2192\";padding-left:6px}\na:hover .way span{color:var(--brown)}\n.sec-h{font:600 30px/1.2 var(--serif);color:var(--navy);text-align:center;margin:64px 0 8px}\n.sec-n{font:400 15px/1.5 var(--sans);color:var(--quiet);text-align:center;margin:0 0 26px}\n.mr-list{border-top:1px solid var(--rule)}\na.mr{display:grid;grid-template-columns:1fr auto;gap:6px 24px;align-items:center;padding:22px 4px 24px;border-bottom:1px solid var(--rule);text-decoration:none;color:inherit}\n.mr-t{font:600 21px/1.3 var(--serif);color:var(--navy);margin:0;text-wrap:balance}\n.mr-l{font:400 15px/1.5 var(--sans);color:var(--quiet);margin:6px 0 0;max-width:62ch}\n.mr-a{font:600 15px/1 var(--sans);color:var(--navy);white-space:nowrap}\n.foot-ask{max-width:760px;margin:0 auto;padding:64px 28px 72px;text-align:center}\n.foot-ask p{font:400 19px/1.6 var(--serif);margin:0 0 22px}\n.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 28px;border-radius:4px;background:var(--brown);color:#fff;font:600 16px/1 var(--sans);text-decoration:none;letter-spacing:.01em}\n.btn:hover{background:var(--brown-hover)}\n.btn:focus-visible{outline:2px solid var(--navy);outline-offset:3px}\n.rd{max-width:720px;margin:0 auto;padding:56px 28px 8px}\n.rd p{font:400 19px/1.72 var(--serif);margin:0 0 1.15em}\n.rd h2{font:600 29px/1.25 var(--serif);color:var(--navy);margin:2.1em 0 .65em;text-wrap:balance}\n.rd .lead{font-size:21px}\n.rd a{color:var(--navy);text-decoration-color:var(--bronze);text-underline-offset:3px}\n.rd .go{margin:6px 0 30px}\n.rd .walk{font:600 16px/1.4 var(--sans);display:inline-block;padding:12px 0 10px;text-decoration:none;border-bottom:1px solid var(--bronze)}\n.rd .walk::after{content:\"\\2192\";padding-left:6px}\n.rd .btn{color:#fff;text-decoration:none}\n.share{max-width:720px;margin:0 auto;padding:10px 28px 0}\n.share-in{border-top:1px solid var(--rule);padding-top:18px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}\n.share button{font:600 15px/1 var(--sans);color:var(--navy);background:none;border:0;border-bottom:1px solid var(--bronze);min-height:44px;padding:0 2px;cursor:pointer}\n.share .said{font:400 15px/1.4 var(--sans);color:var(--quiet)}\n.kr{max-width:720px;margin:0 auto;padding:30px 28px 64px}\n.kr-h{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin:30px 0 18px}\n.kr-h h2{font:600 28px/1.2 var(--serif);color:var(--navy);margin:0}\n.kr-h a{display:inline-flex;align-items:center;min-height:44px;font:600 15px/1.4 var(--sans);text-decoration:underline;text-decoration-color:var(--bronze);text-underline-offset:4px;white-space:nowrap}\n.kr-g{display:grid;grid-template-columns:1fr 1fr;gap:20px}\na.kc{display:flex;flex-direction:column;background:#fff;border:1px solid var(--rule);border-radius:6px;overflow:hidden;text-decoration:none;color:inherit}\na.kc:hover{border-color:var(--bronze);box-shadow:0 6px 18px rgba(31,42,68,.08)}\n.kc img{width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;display:block;background:var(--rule)}\n.kc-b{padding:18px 20px 20px;display:flex;flex-direction:column;flex:1}\n.kc-t{font:600 23px/1.25 var(--serif);color:var(--navy);margin:0;text-wrap:balance}\n.kc-l{font:400 15px/1.55 var(--sans);color:var(--ink);margin:8px 0 0}\n.ft{background:var(--navy);color:var(--cream)}\n.ft-in{max-width:1180px;margin:0 auto;padding:40px 28px 44px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}\n.ft .wm{color:var(--cream)}\n.ft nav{display:flex;flex-wrap:wrap;gap:4px}\n.ft-note{max-width:1180px;margin:0 auto;padding:0 28px 36px;font:400 14px/1.5 var(--sans);color:var(--cream)}\n.ft nav a{color:var(--cream);text-decoration:none;font:600 15px/1 var(--sans);min-height:44px;min-width:44px;display:inline-flex;align-items:center;padding:0 12px}\n@media (max-width:1023px){\n  .sc-grid{grid-template-columns:1fr 1fr}\n  a.pc{grid-template-columns:1fr}\n  .pc img{height:auto}\n}\n@media (max-width:700px){\n  .sec{padding-top:44px}\n  .sec-in{padding:0 18px}\n  .sec-t{font-size:30px}\n  .sc-grid{grid-template-columns:1fr;gap:14px}\n  .aq{padding:20px 20px 16px}\n  .ft-note{padding:0 18px 32px}\n  .tb-in{padding:0 18px;min-height:60px}\n  .wm{font-size:19px}\n  .nav{display:none}\n  .menu{display:inline-flex;align-items:center}\n  .talk{display:inline-flex}\n  .band-in{padding:60px 18px 64px}\n  .band h1{font-size:33px;line-height:1.14}\n  .band .dt{font-size:14px}\n  .ix-list{gap:18px}\n  .pc-b{padding:18px 18px 20px}\n  .pc-t{font-size:23px}\n  .pc-l{font-size:16px}\n  .sec-h{font-size:26px;margin-top:48px}\n  a.mr{grid-template-columns:1fr;padding:20px 2px 22px}\n  .mr-a{margin-top:4px}\n  .rd{padding:34px 18px 4px}\n  .rd p{font-size:18px;line-height:1.68}\n  .rd .lead{font-size:19px}\n  .rd h2{font-size:25px}\n  .share{padding:6px 18px 0}\n  .kr{padding:20px 18px 48px}\n  .kr-h{flex-direction:column;align-items:flex-start;gap:8px}\n  .kr-g{grid-template-columns:1fr;gap:16px}\n  .kc-t{font-size:22px}\n  .foot-ask{padding:48px 18px 56px}\n  .ft-in{padding:32px 18px 36px;flex-direction:column;align-items:flex-start}\n  .ft nav a{padding:0 10px 0 0}\n}\n@media (prefers-reduced-motion:reduce){\n  a.pc,a.sc{transition:none}\n}\n","blog.js":"(function(){\n  var m=document.getElementById('menu'),d=document.getElementById('drawer');\n  if(m&&d){m.addEventListener('click',function(){var o=d.classList.toggle('open');m.setAttribute('aria-expanded',o?'true':'false');});}\n  var b=document.getElementById('sharebtn'),s=document.getElementById('said');\n  if(b&&s){b.addEventListener('click',function(){\n    var u=location.href,t=b.getAttribute('data-title');\n    if(navigator.share&&window.matchMedia&&matchMedia('(pointer:coarse)').matches){navigator.share({title:t,url:u}).catch(function(){});return;}\n    var ok=function(){s.textContent=b.getAttribute('data-copied');};\n    var no=function(){s.textContent=b.getAttribute('data-manual');};\n    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(ok,no);}else{no();}\n  });}\n  /* the page checks itself (AP-SHIP 12): the rules the browser kept against the stamp in the foot; short once, one keyless signal to the Front Desk */\n  function check(){\n    var f=document.querySelector('.ft'),st=document.querySelector('head style'),want=f?+f.getAttribute('data-rules'):0,build=f?f.getAttribute('data-build'):'';\n    if(!want||!st||!st.sheet)return;\n    function flat(rs){var n=0,i;for(i=0;i<rs.length;i++){if(rs[i].cssRules&&rs[i].type===4)n+=flat(rs[i].cssRules);else n++;}return n;}\n    var got=-1;try{got=flat(st.sheet.cssRules);}catch(e){}\n    if(got>=want)return;\n    var key='ap_check_'+build+'_'+location.pathname;\n    try{if(localStorage.getItem(key))return;localStorage.setItem(key,String(Date.now()));}catch(e){}\n    fetch('__DESK__',{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'page_check',page:location.pathname,name:document.title,build:build,accepted:got,expected:want,detail:'the stylesheet kept '+got+' of '+want+' rules',ua:String(navigator.userAgent||'').slice(0,120)})}).catch(function(){});\n  }\n  if(document.readyState==='complete')setTimeout(check,0);else window.addEventListener('load',check);\n})();\n","card.html":"<a class=\"pc\" href=\"{{href}}\"><img src=\"{{picture_url}}\" alt=\"\" width=\"1456\" height=\"819\" loading=\"{{loading}}\" decoding=\"async\"><div class=\"pc-b\"><h3 class=\"pc-t\">{{title}}</h3><p class=\"pc-l\">{{line}}</p><div class=\"way\"><span>{{cta}}</span></div></div></a>\n","door.html":"<a href=\"{{href}}\" data-door=\"{{name}}\">{{name}}</a>\n","doors.html":"<nav class=\"apa-doors\" id=\"apDoors\" aria-label=\"Doors\"{{hidden_html}}>{{door_links_html}}</nav>\n","keep.html":"<a class=\"kc\" href=\"{{href}}\"><img src=\"{{picture_url}}\" alt=\"\" width=\"1456\" height=\"819\" loading=\"lazy\" decoding=\"async\"><div class=\"kc-b\"><h3 class=\"kc-t\">{{title}}</h3><p class=\"kc-l\">{{line}}</p><div class=\"way\"><span>{{cta}}</span></div></div></a>\n","link.html":"<a href=\"{{href}}\"{{on_html}}>{{label}}</a>\n","more.html":"      <div class=\"more\">\n        <h3 class=\"sec-h\">{{more_heading}}</h3>\n        <p class=\"sec-n\">{{more_line}}</p>\n        <div class=\"mr-list\">\n{{rows_html}}\n        </div>\n      </div>\n","page.html":"<!DOCTYPE html>\n<!-- {{build}} · the frame every page shares: head, menu, footer. Read and the article are drawn into the main part. Brand, pages, menu, footer, safety line and Google tag come from the school's row. -->\n<html lang=\"{{lang}}\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n{{google_tag_html}}\n<title>{{search_title}}</title>\n<meta name=\"description\" content=\"{{search_description}}\">\n<meta name=\"ap-build\" content=\"{{build}}\">\n<link rel=\"canonical\" href=\"{{page_url}}\">\n<meta property=\"og:site_name\" content=\"{{school_name}}\">\n<meta property=\"og:type\" content=\"{{og_type}}\">\n<meta property=\"og:title\" content=\"{{search_title}}\">\n<meta property=\"og:description\" content=\"{{search_description}}\">\n<meta property=\"og:url\" content=\"{{page_url}}\">\n<meta property=\"og:image\" content=\"{{preview_image_url}}\">\n<meta property=\"og:image:width\" content=\"1456\">\n<meta property=\"og:image:height\" content=\"819\">\n<meta property=\"og:image:alt\" content=\"{{preview_image_alt}}\">\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:title\" content=\"{{search_title}}\">\n<meta name=\"twitter:description\" content=\"{{search_description}}\">\n<meta name=\"twitter:image\" content=\"{{preview_image_url}}\">\n{{published_html}}<meta name=\"theme-color\" content=\"{{navy}}\">\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"{{fonts_href}}\" rel=\"stylesheet\">\n<style>\n{{css}}\n</style>\n</head>\n<body>\n<a class=\"skip\" href=\"#main\">{{skip_label}}</a>\n<header class=\"tb\">\n  <div class=\"tb-in\">\n    <a class=\"wm\" href=\"{{site}}\">{{school_name}}</a>\n    <nav class=\"nav\" aria-label=\"Site\">{{nav_html}}</nav>\n    <div class=\"tb-r\"><a class=\"talk\" href=\"{{talk_href}}\">{{talk_label}}</a><button class=\"menu\" id=\"menu\" type=\"button\" aria-expanded=\"false\" aria-controls=\"drawer\">Menu</button></div>\n  </div>\n  <div class=\"drawer\" id=\"drawer\">{{nav_html}}</div>\n</header>\n<main id=\"main\">\n{{main_html}}\n</main>\n<footer class=\"ft\" data-build=\"{{build}}\" data-rules=\"{{rules}}\">\n  <div class=\"ft-in\">\n    <a class=\"wm\" href=\"{{site}}\">{{school_name}}</a>\n    <nav aria-label=\"Footer\">{{footer_html}}</nav>\n  </div>\n  <p class=\"ft-note\">{{safety_line}}</p>\n</footer>\n<script>\n{{js}}\n</script>\n{{scripts_html}}\n</body>\n</html>\n","read.html":"<section class=\"band ix\" style=\"background-image:url('{{band_picture_url}}')\">\n  <div class=\"band-in\">\n    <p class=\"eb\">{{eyebrow}}</p>\n    <h1>{{title}}</h1>\n    <p class=\"bn\">{{line}}</p>\n    <div class=\"ask\" data-ap-ask=\"band\" data-placeholder=\"{{ask_placeholder}}\">{{doors_html}}</div>\n  </div>\n</section>\n<section data-ap-ask=\"out\"></section>\n{{stories_html}}\n{{articles_html}}\n{{asking_html}}\n<div class=\"foot-ask\">\n  <p>{{invite_line}}</p>\n  <a class=\"btn\" href=\"{{invite_href}}\">{{invite_label}}</a>\n</div>\n","row.html":"<a class=\"mr\" href=\"{{href}}\"><div><h3 class=\"mr-t\">{{title}}</h3><p class=\"mr-l\">{{line}}</p></div><span class=\"mr-a\">{{cta}}</span></a>\n","stories.html":"<section class=\"sec\" id=\"our-stories\">\n  <div class=\"sec-in\">\n    <p class=\"sec-e\">{{eyebrow}}</p>\n    <h2 class=\"sec-t\">{{title}}</h2>\n    <p class=\"sec-l\">{{line}}</p>\n    <div class=\"sc-grid\" id=\"aprStories\" data-handful=\"{{handful}}\">\n{{cards_html}}\n    </div>\n    <p class=\"all\"><a href=\"{{all_href}}\">{{all_label}}</a></p>\n  </div>\n</section>\n","story.html":"<a class=\"sc{{quote_html}}\" href=\"{{href}}\"{{concern_html}}{{hide_html}}><span class=\"sc-m\"><span class=\"sc-k\">{{kind}}</span><span class=\"sc-w\">{{who}}</span></span><span class=\"sc-t\">{{title}}</span><span class=\"sc-l\">{{line}}</span><div class=\"way\"><span>{{cta}}</span></div></a>\n","you.html":"<a class=\"sc yc\" href=\"{{href}}\"><span class=\"sc-m\"><span class=\"sc-k\">{{kicker}}</span></span><span class=\"sc-t\">{{title}}</span><span class=\"sc-l\">{{line}}</span><div class=\"way\"><span>{{cta}}</span></div></a>\n"};
const AP_SCHOOL = {"id":"ancient-path","name":"The Ancient Path","lang":"en","address":"read.ancientpathcoaching.com","reading_address":"https://read.ancientpathcoaching.com","hosting":{"project":"ancient-path-scripts","site_ids":["ancient-path-read","ancientpath-read","read-ap"]},"site":"https://www.ancientpathcoaching.com","google_tag":"G-VKPN74MHRZ","guide":"https://script.google.com/macros/s/AKfycbzgsFs-tGu5Xv-cBUDmJO4T39V0P8GNX4OM9WNErwKzlwaq2e4pCOgWxMFmZWXAaPFg/exec","guide_sheet":"1q5vIDFVLYMPai_J2cPnSYgeFwdui141xYLsaCMeNh1g","front_desk":"https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec","front_desk_sheet":"1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw","picture_folder":"https://raw.githubusercontent.com/johnlsherrod/ancient-path/main/pictures/","picture_base":"https://read.ancientpathcoaching.com/pictures/","brand":{"navy":"#1F2A44","cream":"#F6F2EA","paper":"#FBF9F5","bronze":"#B8945F","brown":"#8C6A3F","brown_hover":"#74572F","ink":"#1F1D1A","quiet":"#635B50","rule":"#E4DCCB","gold":"#EDD59C","serif":"\"Source Serif 4\",\"Source Serif Pro\",Georgia,\"Times New Roman\",serif","sans":"\"Source Sans 3\",\"Source Sans Pro\",\"Segoe UI\",Helvetica,Arial,sans-serif","fonts_href":"https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap","tint_article":0.7,"tint_index":0.78},"pages":[{"name":"work","label":"The Work","path":"/how-the-work-is-carried"},{"name":"courses","label":"Courses","path":"/courses"},{"name":"read","label":"Read","address":"https://read.ancientpathcoaching.com/"},{"name":"your-story","label":"Your Story","path":"/your-story"},{"name":"write-your-story","label":"Write Your Story","path":"/your-story#write-your-story"},{"name":"all-stories","label":"All Our Stories","path":"/your-story?stories=all"},{"name":"about","label":"About","path":"/about"},{"name":"begin","label":"Let's Talk","path":"/begin"},{"name":"sign-in","label":"Sign In","path":"/start"},{"name":"crossing","label":"The Crossing","path":"/the-crossing"},{"name":"keep-me-posted","label":"Keep Me Posted","path":"/keep-me-posted"},{"name":"contact","label":"Contact","path":"/contact"},{"name":"terms","label":"Terms","path":"/terms"},{"name":"privacy","label":"Privacy","path":"/privacy-policy"}],"menu":["work","courses","read","your-story","about","begin","sign-in"],"footer":["about","courses","read","contact","terms","privacy"],"read":{"search_title":"Read — Our Stories and Articles — Ancient Path","search_description":"Stories from men who walked this path, in their own words, and short articles in plain words on shame, anger, what people think and why it stays.","eyebrow":"Ancient Path","title":"Read","line":"Stories from men who walked this path, and plain words for hard things.","picture":"table-under-the-tree","ask_placeholder":"What do you need help with? Ask in your own words.","stories":{"eyebrow":"In Their Own Words","title":"Our Stories","line":"When a man writes his story all the way through and offers it, it becomes testimony. Some of these came from friends of Ancient Path, people we know and trust. Read them. We are on this path together.","handful":12,"cta":"Read His Story","cta_post":"Read the Story","all_page":"all-stories","all_label":"All our stories →","you_kicker":"Your Story","you_title":"It belongs here.","you_line":"One hour. Your own words. Start with Where I’m From.","you_cta":"Begin","you_page":"write-your-story"},"articles":{"eyebrow":"Plain Words for Hard Things","title":"Articles","line":"Short pieces on the things men carry: shame, anger, what people think, why it stays. Read to learn, and come ready to talk about it.","card_cta":"Read the Article","row_cta":"Read →","more_heading":"More to Read","more_line":"Every earlier article, newest first."},"asking":{"eyebrow":"Asked Here","title":"What Men Are Asking","line":"What men brought to this page, in their own words, and where we are with each one.","where_label":"Where we are:"}},"invite":{"line":"Thirty minutes with our team is free: you say where you are, and we say plainly whether we can walk with you.","page":"begin"},"safety":{"line":"If any of this brings up more than you can carry tonight: call or text 988, any hour. Or text HOME to 741741. If someone is in immediate danger, call 911."},"article":{"keep_heading":"Keep Reading","all_label":"All articles →","all_page":"read","all_anchor":"articles","share_label":"Share this article","share_copied":"Link copied.","share_manual":"Copy the address from the bar above.","read_suffix":"-minute read","skip_label":"Skip to the Article"}};

/* AP-BLOG-TPL 2.0 · the renderer, host-neutral. The same file runs in Node (blog/draw.js, the tests) and in Apps Script (the Publisher).
 * Nothing here reads a file or calls a host: the templates arrive as one object, {'page.html': '...', ...}, and every page comes back as a string.
 *
 * The one rule of a template: {{key}} is replaced in a single pass. A key ending in _html, and css and js, is inserted as it is;
 * every other value is escaped. Inserted text is never scanned again.
 *
 *   var r = APRender.create(templates);
 *   r.readPage(school, {doors, stories, articles, asking})   -> the Read page
 *   r.articlePage(school, entries, article)                  -> one article page
 *   r.sitemap(school, entries) / r.robots(school)            -> the two files a search engine reads
 *   r.tagCount(html)                                         -> {ids, gtagScripts, gtm, configCalls}  (ap-google-tag-check)
 *   r.entryFromRow(row, school)                              -> a Pieces-tab row (keyed by header name) as the page needs it
 *
 * Pages are named in the school's row (school.pages). The menu, the footer, every link field and every page: link in a body name a page;
 * the renderer turns the name into the address while it draws, and stops with an error on a name the row does not hold.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.APRender = factory();
})(this, function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Title Case: capitalize every word that is all lowercase, except a short list of small words that are
   * not first, last or just after a colon or question mark. A word with any capital in it is never touched. */
  var SMALL = { a: 1, an: 1, the: 1, and: 1, but: 1, or: 1, nor: 1, for: 1, of: 1, in: 1, on: 1, at: 1, to: 1, by: 1, as: 1 };
  function titleCase(text) {
    var parts = String(text == null ? '' : text).split(/(\s+)/);
    var idx = [];
    parts.forEach(function (p, i) { if (p && !/^\s+$/.test(p)) idx.push(i); });
    idx.forEach(function (i, n) {
      var w = parts[i];
      if (/[A-Z]/.test(w) || /^&\w+;$/.test(w) || /^\d/.test(w)) return;
      var m = w.match(/^([^A-Za-z]*)([a-z])(.*)$/);
      if (!m) return;
      var core = (m[2] + m[3]).replace(/[^a-z].*$/, '');
      var prev = n > 0 ? parts[idx[n - 1]] : '';
      var edge = n === 0 || n === idx.length - 1 || /[:?!]$/.test(prev);
      if (SMALL[core] && !edge) return;
      parts[i] = m[1] + m[2].toUpperCase() + m[3];
    });
    return parts.join('');
  }
  function titleCaseHtml(html) {
    return html.replace(/<(h[1-6])([^>]*)>([\s\S]*?)<\/\1>/g, function (m, tag, attrs, inner) {
      return '<' + tag + attrs + '>' + inner.split(/(<[^>]+>)/).map(function (s) { return s.charAt(0) === '<' ? s : titleCase(s); }).join('') + '</' + tag + '>';
    });
  }

  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function dateLong(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
    if (!m) throw new Error('published must be YYYY-MM-DD: ' + iso);
    return MONTHS[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1];
  }
  function words(html) { return (html.replace(/<[^>]+>/g, ' ').match(/\S+/g) || []).length; }
  function minutes(html) { return Math.max(1, Math.round(words(html) / 250)); }

  /* a door's address name: lower case, apostrophes gone, everything else a hyphen */
  function slugOf(name) {
    return String(name || '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function create(T) {
    function tpl(name) {
      if (typeof T[name] !== 'string') throw new Error('template missing: ' + name);
      return T[name].replace(/\n$/, '');
    }
    function fill(template, values) {
      return template.replace(/\{\{([a-z_0-9]+)\}\}/g, function (m, k) {
        if (!Object.prototype.hasOwnProperty.call(values, k)) throw new Error('template key without a value: ' + k);
        var v = values[k];
        return (/_html$/.test(k) || k === 'css' || k === 'js') ? String(v == null ? '' : v) : esc(v);
      });
    }

    /* ---- the stamp: the build and the stylesheet's rule count, both on line 1 of blog.css ---- */
    function stamp() {
      var m = /^\/\*\s*(AP-BLOG-TPL [0-9.]+)\s*·\s*rules:\s*(\d+)/.exec(T['blog.css'].split('\n')[0]);
      return m ? { build: m[1], rules: +m[2] } : { build: 'AP-BLOG-TPL', rules: 0 };
    }

    /* ---- pages are named in the row ---- */
    function pageOf(school, name) {
      var list = school.pages || [];
      for (var i = 0; i < list.length; i++) if (list[i].name === name) return list[i];
      throw new Error('no page named "' + name + '" in the school row');
    }
    function pageHref(school, name, fragment) {
      var p = pageOf(school, name), href;
      if (p.address) {
        var own = 'https://' + school.address;
        href = p.address.indexOf(own) === 0 ? (p.address.slice(own.length) || '/') : p.address;
      } else if (p.path) href = school.site + p.path;
      else throw new Error('page "' + name + '" has neither a path nor an address');
      return href + (fragment ? '#' + fragment : '');
    }
    function pageLabel(school, name) { return pageOf(school, name).label; }
    /* a body names its pages: href="page:crossing" or href="page:begin#frag" */
    function resolveBody(school, html) {
      return html.replace(/href="page:([a-z0-9-]+)(#[^"]*)?"/g, function (m, name, frag) {
        return 'href="' + esc(pageHref(school, name, frag ? frag.slice(1) : '')) + '"';
      });
    }
    function links(school, names, current) {
      var t = tpl('link.html');
      return names.map(function (n) {
        return fill(t, { href: pageHref(school, n), label: pageLabel(school, n), on_html: n === current ? ' class="on" aria-current="page"' : '' });
      }).join('');
    }

    /* ---- the stylesheet takes brand values raw (a font stack carries quotes), so each one must be plain ---- */
    function css(school) {
      var b = school.brand, keys = ['navy', 'cream', 'paper', 'bronze', 'brown', 'brown_hover', 'ink', 'quiet', 'rule', 'gold', 'serif', 'sans', 'tint_article', 'tint_index'];
      return tpl('blog.css').replace(/\{\{([a-z_]+)\}\}/g, function (m, k) {
        if (keys.indexOf(k) < 0 || b[k] == null) throw new Error('stylesheet key without a brand value: ' + k);
        var v = String(b[k]);
        if (/[;{}<>\\]/.test(v)) throw new Error('brand value is not plain: ' + k);
        return v;
      });
    }
    function script(school) {
      var d = school.front_desk || '';
      if (/[^A-Za-z0-9:\/._~%?&=-]/.test(d)) throw new Error('front_desk address is not plain');
      return tpl('blog.js').replace('__DESK__', d);
    }

    /* ---- the Google tag: written once, from the row ---- */
    function tagHtml(id) {
      if (!id) return '';
      return '<script async src="https://www.googletagmanager.com/gtag/js?id=' + esc(id) + '"></script>\n' +
        '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag(\'js\',new Date());gtag(\'config\',\'' + esc(id) + '\');</script>\n';
    }
    function tagCount(html) {
      var ids = [];
      (html.match(/G-[A-Z0-9]{6,12}/g) || []).forEach(function (v) { if (ids.indexOf(v) < 0) ids.push(v); });
      return {
        ids: ids,
        gtagScripts: (html.match(/googletagmanager\.com\/gtag\/js/g) || []).length,
        gtm: (html.match(/GTM-[A-Z0-9]+/g) || []).length,
        configCalls: (html.match(/gtag\('config'/g) || []).length
      };
    }

    function frame(school, current, v) {
      var b = school.brand, st = stamp();
      return fill(tpl('page.html'), Object.assign({
        lang: school.lang, school_name: school.name, site: school.site, build: st.build,
        google_tag_html: tagHtml(school.google_tag), navy: b.navy, fonts_href: b.fonts_href,
        css: css(school), js: script(school), rules: st.rules,
        talk_href: pageHref(school, school.invite.page), talk_label: pageLabel(school, school.invite.page),
        nav_html: links(school, school.menu, current), footer_html: links(school, school.footer, current),
        safety_line: school.safety.line, skip_label: school.article.skip_label, published_html: '', scripts_html: ''
      }, v));
    }

    /* ---- a Pieces-tab row as the page needs it ---- */
    function entryFromRow(r, school) {
      var pic = String(r['picture'] || '');
      var addr = String(r['address'] || '');
      var lw = String(r['lives'] || '') === 'LearnWorlds';
      var slug = addr.replace(/^https?:\/\/[^\/]+\//, '').replace(/[?#].*$/, '').replace(/\/$/, '');
      var pub = String(r['published'] || '');
      var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(pub);
      if (!m && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(pub)) { var q = pub.split('/'); m = [0, q[2], ('0' + q[0]).slice(-2), ('0' + q[1]).slice(-2)]; }
      return {
        id: String(r['id'] || ''), source: String(r['source'] || ''), kind: String(r['kind'] || ''), title: String(r['title'] || ''), who: String(r['who'] || ''),
        line: String(r['description'] || ''), concern: String(r['concern'] || ''), lives: lw ? 'LearnWorlds' : 'ours',
        published: m ? m[1] + '-' + m[2] + '-' + m[3] : '',
        href: lw ? addr : '/' + slug, address: slug.replace(/^blog\//, ''),
        picture: /^https?:/.test(pic) ? '' : pic, picture_url: /^https?:/.test(pic) ? pic : '',
        keep: String(r['keep'] || '').split(/[;,]/).map(function (s) { return s.trim(); }).filter(Boolean),
        next: String(r['next'] || '').trim()
      };
    }

    /* ---- Read's data from the Guide sheet: Pieces rows and Concerns rows, each keyed by its header name ---- */
    function truthy(v) { return v === true || /^(true|yes|1)$/i.test(String(v == null ? '' : v).trim()); }
    function readData(school, pieceRows, concernRows, show) {
      show = show || ['published'];
      var entries = pieceRows.filter(function (r) {
        return String(r['school'] || '') === school.id && show.indexOf(String(r['status'] || '')) >= 0 && String(r['source'] || '') !== 'page';
      }).map(function (r) { return entryFromRow(r, school); });
      /* a piece that lives in two places shows once, as ours: the slug is the same */
      var mine = {}; entries.forEach(function (e) { if (e.lives === 'ours') mine[e.address] = 1; });
      entries = entries.filter(function (e) { return e.lives === 'ours' || !mine[e.address]; });
      var open = concernRows.filter(function (c) { return truthy(c['open']); }).sort(function (a, b) { return (+a['order'] || 0) - (+b['order'] || 0); });
      return {
        entries: entries,
        stories: entries.filter(isStory),
        articles: entries.filter(function (e) { return !isStory(e); }),
        doors: open.filter(function (c) { return String(c['state'] || '') === 'door'; }).map(function (c) { return { name: String(c['concern']) }; }),
        asking: open.filter(function (c) { return truthy(c['asking']) && String(c['line'] || ''); }).slice(0, 5).map(function (c) {
          return { line: String(c['line']), where: String(c['where we are'] || ''), address: '', concern: String(c['concern']) };
        })
      };
    }
    function isStory(e) { return e.source === 'story' || e.kind === 'Story'; }
    function pictureUrl(school, e) { return e.picture_url || (school.picture_base + e.picture + '.jpg'); }
    function hrefOf(e) { return e.href || ('/' + e.address); }

    /* newest first; a piece with no date keeps its place after the dated ones */
    function sortNewest(list) {
      return list.map(function (e, i) { return { e: e, i: i }; }).sort(function (a, b) {
        var pa = a.e.published || '', pb = b.e.published || '';
        if (pa && !pb) return -1;
        if (pb && !pa) return 1;
        if (pa !== pb) return pa < pb ? 1 : -1;
        return a.i - b.i;
      }).map(function (x) { return x.e; });
    }

    /* ---- Read ---- */
    function doorsHtml(doors) {
      var t = tpl('door.html');
      var list = (doors || []).map(function (d) { return fill(t, { href: '/?door=' + slugOf(d.name), name: d.name }); }).join('');
      return fill(tpl('doors.html'), { hidden_html: list ? '' : ' hidden', door_links_html: list });
    }
    function storiesHtml(school, stories) {
      var rd = school.read.stories, t = tpl('story.html'), handful = rd.handful || 6;
      var own = stories.filter(function (e) { return e.source === 'story'; }), posts = stories.filter(function (e) { return e.source !== 'story'; });
      var cards = sortNewest(own).concat(sortNewest(posts)).map(function (e, i) {
        var post = e.kind === 'Story' && e.source !== 'story';
        return fill(t, {
          quote_html: post ? '' : ' sc-q', hide_html: i >= handful ? ' style="display:none"' : '', href: hrefOf(e), concern_html: e.concern ? ' data-concern="' + esc(e.concern) + '"' : '',
          kind: e.kind, who: e.who, title: titleCase(e.title), line: e.line, cta: post ? rd.cta_post : rd.cta
        });
      });
      cards.push(fill(tpl('you.html'), { href: pageHref(school, rd.you_page), kicker: rd.you_kicker, title: rd.you_title, line: rd.you_line, cta: rd.you_cta }));
      return fill(tpl('stories.html'), { eyebrow: rd.eyebrow, title: titleCase(rd.title), line: rd.line, cards_html: cards.join('\n'), handful: handful, all_href: pageHref(school, rd.all_page), all_label: rd.all_label });
    }
    function articlesHtml(school, articles) {
      var rd = school.read.articles, list = sortNewest(articles);
      var cards = list.slice(0, 4).map(function (e, i) {
        return fill(tpl('card.html'), { href: hrefOf(e), picture_url: pictureUrl(school, e), loading: i < 2 ? 'eager' : 'lazy', title: titleCase(e.title), line: e.line, cta: rd.card_cta })
          .replace('<a class="pc"', '<a class="pc"' + (e.concern ? ' data-concern="' + esc(e.concern) + '"' : ''));
      }).join('\n');
      var rest = list.slice(4), more = '';
      if (rest.length) {
        more = fill(tpl('more.html'), {
          more_heading: titleCase(rd.more_heading), more_line: rd.more_line,
          rows_html: rest.map(function (e) {
            return fill(tpl('row.html'), { href: hrefOf(e), title: titleCase(e.title), line: e.line, cta: rd.row_cta })
              .replace('<a class="mr"', '<a class="mr"' + (e.concern ? ' data-concern="' + esc(e.concern) + '"' : ''));
          }).join('\n')
        });
      }
      return fill(tpl('articles.html'), { eyebrow: rd.eyebrow, title: titleCase(rd.title), line: rd.line, cards_html: cards, more_html: more });
    }
    function askingHtml(school, asking) {
      var rd = school.read.asking, t = tpl('asking-row.html');
      var rows = (asking || []).map(function (a) {
        var where = a.address ? '<a href="' + esc(a.address) + '">' + esc(a.where) + '</a>' : esc(a.where);
        return fill(t, { line: a.line, where_label: rd.where_label, where_html: where });
      }).join('\n');
      /* nothing asked yet: the section stays in the page but hidden, and the Guide script shows it when the first real ask arrives (John, 7 Nov 2026: "lonely and lost at the end of the page") */
      return fill(tpl('asking.html'), { hidden_html: rows ? '' : ' hidden', eyebrow: rd.eyebrow, title: titleCase(rd.title), line: rd.line, rows_html: rows });
    }

    function readPage(school, data) {
      var rd = school.read, inv = school.invite;
      var picture = school.picture_base + rd.picture + '.jpg';
      var main = fill(tpl('read.html'), {
        band_picture_url: picture, ask_placeholder: rd.ask_placeholder, eyebrow: rd.eyebrow, title: titleCase(rd.title), line: rd.line,
        doors_html: doorsHtml(data.doors), stories_html: storiesHtml(school, data.stories || []), articles_html: articlesHtml(school, data.articles || []),
        asking_html: askingHtml(school, data.asking), invite_line: inv.line, invite_href: pageHref(school, inv.page), invite_label: pageLabel(school, inv.page)
      });
      return frame(school, 'read', {
        search_title: rd.search_title, search_description: rd.search_description, page_url: school.reading_address + '/',
        og_type: 'website', preview_image_url: picture, preview_image_alt: '', main_html: main,
        scripts_html: '<script src="' + esc(school.guide) + '?file=guide.js" async></script>\n'
      });
    }

    /* ---- an article ---- */
    function articlePage(school, entries, a) {
      var ar = school.article;
      var body = titleCaseHtml(resolveBody(school, a.body_html));
      if (/href="page:/.test(body)) throw new Error('a page: link in the body was not resolved');
      var articles = entries.filter(function (e) { return !isStory(e); });
      var byAddr = {}; articles.forEach(function (e) { byAddr[e.address] = e; });
      var want = [];
      [a.next].concat(a.keep || []).forEach(function (ad) { if (ad && want.indexOf(ad) < 0) want.push(ad); });
      want.forEach(function (ad) { if (!byAddr[ad]) throw new Error('Keep Reading names an article that is not on the list: ' + ad); });
      sortNewest(articles).forEach(function (e) { if (want.length < 2 && e.address !== a.address && want.indexOf(e.address) < 0) want.push(e.address); });
      var keep = want.slice(0, 2).map(function (ad) {
        var e = byAddr[ad];
        return fill(tpl('keep.html'), { href: hrefOf(e), picture_url: pictureUrl(school, e), title: titleCase(e.title), line: e.line, cta: school.read.articles.card_cta });
      }).join('\n');
      var pic = pictureUrl(school, a);
      var main = fill(tpl('article.html'), {
        picture_url: pic, date_long: dateLong(a.published), minutes: minutes(a.body_html),
        read_suffix: ar.read_suffix, title: titleCase(a.title), body_html: body, share_label: ar.share_label, share_copied: ar.share_copied,
        share_manual: ar.share_manual, keep_heading: ar.keep_heading, index_href: pageHref(school, ar.all_page, ar.all_anchor), all_label: ar.all_label, keep_html: keep
      });
      return frame(school, 'read', {
        search_title: a.search_title, search_description: a.search_description, page_url: school.reading_address + '/' + a.address,
        og_type: 'article', preview_image_url: pic, preview_image_alt: '',
        published_html: '<meta property="article:published_time" content="' + esc(a.published) + '">\n', main_html: main
      });
    }

    /* ---- the two files a search engine reads ---- */
    function sitemap(school, entries) {
      var urls = [{ loc: school.reading_address + '/', lastmod: '' }];
      entries.forEach(function (e) { if (e.lives === 'ours') urls.push({ loc: school.reading_address + '/' + e.address, lastmod: e.published }); });
      return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls.map(function (u) { return '  <url><loc>' + esc(u.loc) + '</loc>' + (u.lastmod ? '<lastmod>' + esc(u.lastmod) + '</lastmod>' : '') + '</url>'; }).join('\n') + '\n</urlset>\n';
    }
    function robots(school) { return 'User-agent: *\nAllow: /\nSitemap: ' + school.reading_address + '/sitemap.xml\n'; }

    return {
      readPage: readPage, articlePage: articlePage, sitemap: sitemap, robots: robots, tagCount: tagCount, entryFromRow: entryFromRow, readData: readData,
      pageHref: pageHref, resolveBody: resolveBody, stamp: stamp, isStory: isStory, sortNewest: sortNewest, titleCase: titleCase,
      titleCaseHtml: titleCaseHtml, minutes: minutes, esc: esc, slugOf: slugOf
    };
  }

  return { create: create, esc: esc, titleCase: titleCase, titleCaseHtml: titleCaseHtml, minutes: minutes, slugOf: slugOf };
});

/* AP-PUBLISHER 1.6 · the Publisher (7 Nov 2026; 1.6: the Read page keeps What Men Are Asking hidden until a man has asked; 1.5: connectAddress() finds the records in record sets too and logs the raw answer when it finds none; 1.4: the request names the site by its bare id, and a refusal lists every form tried; 1.3: connectAddress() names the site in the request; 1.1: setup() makes the Hosting site itself; 1.2: connectAddress() connects the school's own address and writes the DNS records to the Log) — "Ancient Path - Publisher", an Apps Script project in the ancientpathcoaching.com account.
 *
 * Every weekday at 7:10 AM Central it:
 *   1. reads the piece table (the Guide sheet's Pieces tab) and the Front Desk's Actions tab;
 *   2. takes an approved draft (a Publisher row, lives = ours) whose Front Desk "draft:" row is ticked, or whose status is already approved;
 *   3. reads the draft's Google Doc once and writes the body into the row (a row that already holds its body is never re-read);
 *   4. copies each picture from the picture folder onto the site;
 *   5. draws Read and every article with the renderer in Render.gs (the same file blog/render.js, host-neutral) and the templates in Data.gs;
 *   6. sends the whole site to Firebase Hosting (versions → populateFiles → upload → finalize → release);
 *   7. fetches each changed live page and checks its title, description, picture and the Google tag once;
 *   8. on a pass, marks the rows published and keeps the version as the last good one; on a miss, puts the last good version back, leaves the row
 *      approved and puts ONE row on the Front Desk.
 *
 * Republish: set a row's status back to approved (clear its body to take new words from the doc) and the next run draws and sends it the same way.
 * Nothing in this file names a school: the school's row (Data.gs, from school/<id>.json) names the sheets, the picture folder, the tag and the address.
 *
 * Properties (Project settings → Script properties), set once in the one-time sitting:
 *   FIREBASE_SITE  the Hosting site id (setup() makes the site and sets this)    LIVE_BASE  where to check pages before the address is live (setup() sets it; the Publisher clears it once the address answers)
 */

const PUB = {
  BUILD: 'AP-PUBLISHER 1.6',
  TAB: 'Pieces', ACTIONS: 'Actions', LOG: 'Log',
  RULE: 'PUB1', OWNER: 'John',
  TZ: 'America/Chicago',
  FB: 'https://firebasehosting.googleapis.com/v1beta1/',
  VERIFY_TRIES: 3, VERIFY_WAIT_MS: 4000,
  NEEDS: [['title', 'a title'], ['search title', 'a search title'], ['search description', 'a search description'], ['picture', 'a picture'], ['body', 'its words']]
};

// ───────────────────────────── entry points ─────────────────────────────

/** The weekday trigger. */
function publish() { return triGuard_('Publisher run', 'publish', publish_); }

function publish_() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) { log_('publish', 'another run holds the lock'); return { skipped: 'locked' }; }
  try { return run_(); } finally { lock.releaseLock(); }
}

/** Run once from the editor: five weekday triggers at 7:10 AM Central. */
function setup() {
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'publish').forEach(t => ScriptApp.deleteTrigger(t));
  [ScriptApp.WeekDay.MONDAY, ScriptApp.WeekDay.TUESDAY, ScriptApp.WeekDay.WEDNESDAY, ScriptApp.WeekDay.THURSDAY, ScriptApp.WeekDay.FRIDAY]
    .forEach(d => ScriptApp.newTrigger('publish').timeBased().onWeekDay(d).atHour(7).nearMinute(10).inTimezone(PUB.TZ).create());
  log_('setup', 'five weekday triggers, 7:10 AM Central');
  const site = ensureSite_(AP_SCHOOL);
  return 'five weekday triggers set · Hosting site ' + site + ' (' + siteAddress_(site) + ')';
}

/** Run once from the editor, after setup(): connects the school's own address (read.<school>) to the Hosting site and writes the DNS records
 *  it needs, in plain words, to the Log tab. Safe to run again: it reads the records the site is waiting for and says whether the address is connected. */
function connectAddress() {
  const school = AP_SCHOOL, site = prop_('FIREBASE_SITE'), host = String(school.address || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
  if (!site) throw new Error('run setup() first');
  const base = PUB.FB + 'sites/' + encodeURIComponent(site) + '/domains';
  const get = UrlFetchApp.fetch(base + '/' + encodeURIComponent(host), { method: 'get', headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
  let d;
  if (get.getResponseCode() === 200) d = JSON.parse(get.getContentText());
  else {
    // the request must name the site it belongs to; the API has taken the short and the long form, so try each form
    // the API compares the site in the body with the site in the address (a bare id), so the bare id goes first
    const forms = [site, 'sites/' + site, 'projects/-/sites/' + site, 'projects/' + ((school.hosting || {}).project || '-') + '/sites/' + site];
    const seen = [];
    for (let i = 0; i < forms.length && !d; i++) {
      const res = UrlFetchApp.fetch(base, { method: 'post', contentType: 'application/json', payload: JSON.stringify({ site: forms[i], domainName: host }), headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
      if (res.getResponseCode() >= 200 && res.getResponseCode() < 300) d = JSON.parse(res.getContentText() || '{}');
      else seen.push('"' + forms[i] + '" → ' + res.getResponseCode() + ' ' + oneLine_(res.getContentText(), 160));
    }
    if (!d) throw new Error('Hosting refused every form of the site name: ' + seen.join(' || '));
  }
  const lines = dnsLines_(host, d);
  if (lines.length < 2) log_('address raw', oneLine_(JSON.stringify(d), 1800));
  log_('address', host + ' · ' + oneLine_(lines.join(' | '), 400));
  return lines.join('\n');
}

/** The records the site is waiting for, one plain line each. */
function dnsLines_(host, d) {
  const p = (d && d.provisioning) || {}, out = [], label = host.split('.')[0];
  const status = String(d.status || '') + (p.dnsStatus ? ' / dns ' + p.dnsStatus : '') + (p.certStatus ? ' / certificate ' + p.certStatus : '');
  out.push('status: ' + (status || 'no status yet'));
  (p.expectedIps || []).forEach(ip => out.push('A record · host ' + label + ' · value ' + ip));
  if (p.certChallengeDns && p.certChallengeDns.token) out.push('TXT record · host ' + (p.certChallengeDns.domainName ? String(p.certChallengeDns.domainName).replace('.' + host.split('.').slice(1).join('.'), '') : '_acme-challenge.' + label) + ' · value ' + p.certChallengeDns.token);
  if (p.certChallengeHttp && p.certChallengeHttp.path) out.push('(certificate is also checked at ' + p.certChallengeHttp.path + ')');
  if (p.discoveredIps && p.discoveredIps.length) out.push('found now: ' + p.discoveredIps.join(', '));
  // the API also lists the records it wants as record sets (type + rrdata) under dnsUpdates or similar; find them wherever they sit
  const apex = host.split('.').slice(1).join('.'), seen = {}, walk = function (o, d) {
    if (!o || typeof o !== 'object' || d > 6) return;
    if (Array.isArray(o)) { o.forEach(x => walk(x, d + 1)); return; }
    if (o.type && (o.rrdata || o.rrdatas) && o.domainName !== undefined || (o.type && (o.rrdata || o.rrdatas))) {
      (o.rrdata ? [o.rrdata] : o.rrdatas).forEach(v => {
        const name = String(o.domainName || host).replace(/\.$/, '').replace(new RegExp('\\.?' + apex.replace(/\./g, '\\.') + '$'), '') || '@';
        const line = String(o.type) + ' record · host ' + name + ' · value ' + v + (o.requiredAction ? ' (' + String(o.requiredAction).toLowerCase() + ')' : '');
        if (!seen[line] && !out.some(l => l.indexOf('value ' + v) > -1)) { seen[line] = 1; out.push(line); }
      });
    }
    Object.keys(o).forEach(k => walk(o[k], d + 1));
  };
  walk(d, 0);
  return out;
}

/** Makes sure the school's Hosting site exists and is named in FIREBASE_SITE. Safe to run again: it finds the site it made before.
 *  It tries the school's site ids in order and uses the first one that is ours or can be made. Until the school's own address answers,
 *  LIVE_BASE points at the site's free address so the live check has somewhere to look. */
function ensureSite_(school) {
  const h = school.hosting || {}, project = h.project, ids = h.site_ids || [];
  if (!project || !ids.length) throw new Error('the school row has no hosting project or site ids');
  const have = prop_('FIREBASE_SITE');
  let site = '';
  if (have && siteExists_(have)) site = have;
  for (let i = 0; !site && i < ids.length; i++) {
    if (siteExists_(ids[i])) { site = ids[i]; break; }
    const res = UrlFetchApp.fetch(PUB.FB + 'projects/' + project + '/sites?siteId=' + encodeURIComponent(ids[i]), { method: 'post', contentType: 'application/json', payload: '{}', headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
    const code = res.getResponseCode();
    if (code >= 200 && code < 300) { site = ids[i]; break; }
    if (code === 401 || code === 403) {
      if (/has not been used|is disabled|SERVICE_DISABLED/i.test(res.getContentText())) throw new Error('turn on the Firebase Hosting API for the project (' + oneLine_(res.getContentText(), 140) + ')');
      if (i === ids.length - 1 && !site) throw new Error('Hosting would not make a site: ' + code + ' ' + oneLine_(res.getContentText(), 160));
      continue;
    }
    if (code !== 409 && code !== 400) throw new Error('Hosting ' + code + ': ' + oneLine_(res.getContentText(), 160));
  }
  if (!site) throw new Error('none of the site ids could be made: ' + ids.join(', '));
  const props = PropertiesService.getScriptProperties();
  props.setProperty('FIREBASE_SITE', site);
  if (!prop_('LIVE_BASE')) props.setProperty('LIVE_BASE', siteAddress_(site));
  log_('setup', 'Hosting site ' + site);
  return site;
}

function siteExists_(site) {
  const res = UrlFetchApp.fetch(PUB.FB + 'sites/' + encodeURIComponent(site), { method: 'get', headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
  return res.getResponseCode() === 200;
}

function siteAddress_(site) { return 'https://' + site + '.web.app'; }

/** Where the live check looks: the school's own address once it serves this site, the free address before then. */
function liveBase_(school) {
  const own = String(school.reading_address).replace(/\/$/, ''), set = prop_('LIVE_BASE');
  if (!set) return own;
  try {
    const res = UrlFetchApp.fetch(own + '/', { muteHttpExceptions: true, followRedirects: true });
    if (res.getResponseCode() === 200 && /data-build="/.test(res.getContentText())) { PropertiesService.getScriptProperties().deleteProperty('LIVE_BASE'); log_('setup', 'the address answers; LIVE_BASE cleared'); return own; }
  } catch (e) { /* not yet */ }
  return String(set).replace(/\/$/, '');
}

// ───────────────────────────── the run ─────────────────────────────

function run_() {
  const school = AP_SCHOOL, site = prop_('FIREBASE_SITE');
  const ss = SpreadsheetApp.openById(school.guide_sheet);
  const sh = ss.getSheetByName(PUB.TAB);
  if (!sh) throw new Error('no ' + PUB.TAB + ' tab in the Guide sheet');
  const today = dayOf_(new Date());
  liveBase_(school);            // moves the live check to the school's own address as soon as it answers
  const approvals = approvedDrafts_(school);
  const problems = [];          // {key, title, what}  — one Front Desk row each
  const wrote = {};             // id -> {col: value} to write once the live pages check out

  // 1. the table, read once
  let rows = rows_(sh);
  const byId = id => rows.filter(r => r['id'] === id)[0];

  // 2. the Publisher's rows: approval, words, due
  const due = [];
  rows.filter(r => r['school'] === school.id && r['lives'] === 'ours').forEach(r => {
    const slug = slugOfRow_(r);
    if (!slug) return;
    if (r['status'] === 'drafted' && approvals[slug]) { r['status'] = 'approved'; wrote[r['id']] = Object.assign(wrote[r['id']] || {}, { status: 'approved' }); }
    if (r['status'] !== 'approved') return;
    const pub = isoDay_(r['published']) || today;
    if (pub > today) return;                                    // approved for a later day
    // the words: the row's own body wins; otherwise read the doc once and keep it in the row
    if (!String(r['body'] || '').trim() && String(r['handed in'] || '').trim()) {
      try {
        const html = docToHtml_(docId_(r['handed in']), r['title']);
        if (html) { r['body'] = html; wrote[r['id']] = Object.assign(wrote[r['id']] || {}, { body: html }); writeNow_(sh, r['id'], { body: html }); }
      } catch (e) { problems.push({ key: 'publish:' + slug, title: r['title'], what: 'could not read its Google Doc (' + oneLine_(e.message, 120) + ')' }); return; }
    }
    if (!String(r['address'] || '').trim()) r['address'] = school.reading_address + '/' + slug;
    const missing = PUB.NEEDS.filter(n => !String(r[n[0]] || '').trim()).map(n => n[1]);
    if (missing.length) { problems.push({ key: 'publish:' + slug, title: r['title'], what: 'is approved but has no ' + missing.join(', no ') }); return; }
    r['published'] = pub;
    due.push(r);
  });

  // 3. what the site will hold: every published row of ours, plus the ones now due
  const dueIds = {}; due.forEach(r => { dueIds[r['id']] = 1; });
  const asPublished = r => (dueIds[r['id']] ? Object.assign({}, r, { status: 'published' }) : r);
  const pictures = {};          // name -> bytes
  let tries = 0, files, drew;
  for (;;) {
    if (++tries > 12) throw new Error('could not settle on a set of pages');
    const live = rows.map(asPublished);
    try { drew = draw_(school, live, ss, pictures, problems, dueIds); } catch (e) { if (e.holdAll) { return finish_({ ok: false, problems: problems, holdAll: e.message }, school); } throw e; }
    if (drew.dropped.length) { drew.dropped.forEach(id => { delete dueIds[id]; }); due.splice(0, due.length, ...due.filter(r => dueIds[r['id']])); continue; }
    break;
  }
  files = drew.files;

  // 4. nothing changed and nothing due: leave the site alone
  const digestNow = digest_(files);
  const last = prop_('PUB_DIGEST');
  if (digestNow === last && !due.length) { log_('publish', 'nothing changed'); return finish_({ ok: true, same: true, problems: problems }, school); }
  if (!site) { log_('publish', 'not set up yet: FIREBASE_SITE is not set'); return finish_({ ok: true, notReady: true, problems: [] }, school); }

  // 5. send, then look at what is live
  const prevHashes = parse_(prop_('PUB_HASHES'));
  let version;
  try { version = deploy_(site, files); }
  catch (e) { problems.push({ key: 'publish:send', title: 'the site', what: 'could not be sent (' + oneLine_(e.message, 160) + '). The last good page stays up.' }); return finish_({ ok: false, problems: problems }, school); }

  const hashes = {}; Object.keys(files).forEach(p => { hashes[p] = shortHash_(files[p].bytes); });
  const changed = Object.keys(files).filter(p => /\.html$/.test(p) && hashes[p] !== prevHashes[p]);
  const misses = verify_(school, drew.expect, changed);
  if (misses.length) {
    const good = prop_('PUB_LASTGOOD');
    let back = 'there was no earlier version to put back';
    if (good) { try { release_(site, good); back = 'the last good version is back up'; } catch (e) { back = 'putting the last good version back also failed (' + oneLine_(e.message, 100) + ')'; } }
    misses.forEach(m => problems.push({ key: 'publish:' + m.slug + ':' + digestNow.slice(0, 8), title: m.title, what: 'did not check out on the live page — ' + m.what + '; ' + back }));
    return finish_({ ok: false, problems: problems }, school);
  }

  // 6. it checked out: keep the version, write the rows
  PropertiesService.getScriptProperties().setProperties({ PUB_LASTGOOD: version, PUB_DIGEST: digestNow, PUB_HASHES: JSON.stringify(hashes).length < 8500 ? JSON.stringify(hashes) : '{}' });
  due.forEach(r => { wrote[r['id']] = Object.assign(wrote[r['id']] || {}, { status: 'published', published: r['published'], address: r['address'] }); });
  Object.keys(wrote).forEach(id => writeNow_(sh, id, wrote[id]));
  log_('publish', due.length + ' piece(s) up, ' + Object.keys(files).length + ' files, version ' + version);
  return finish_({ ok: true, version: version, published: due.map(r => r['id']), problems: problems }, school);
}

/** The Front Desk hears of a problem once each (the key repeats the same row, never a second). */
function finish_(result, school) {
  (result.problems || []).forEach(p => {
    fdRow_(school, p.key, 'Look at the Publisher: ' + p.title, 'Read', p.title + ' ' + p.what + (/last good/.test(p.what) ? '' : ' The last good page stays up.'), school.reading_address + '/');
  });
  if (result.holdAll) log_('publish', 'held: ' + result.holdAll);
  return result;
}

// ───────────────────────────── drawing ─────────────────────────────

/** Draws Read, every article, the two search files and the pictures. Returns {files, expect, dropped}. */
function draw_(school, rows, ss, pictures, problems, dueIds) {
  const T = AP_TEMPLATES, r = APRender.create(T);
  const concerns = rows_(ss.getSheetByName('Concerns'));
  const data = r.readData(school, rows, concerns, ['published']);
  const files = {}, expect = {}, dropped = [];

  // pictures: every name a page of ours points at, copied from the picture folder
  const names = {}; names[school.read.picture] = 'Read';
  data.entries.forEach(e => { if (e.lives === 'ours' && e.picture) names[e.picture] = e.id; });
  Object.keys(names).forEach(n => {
    if (pictures[n] === undefined) pictures[n] = fetchPicture_(school, n);
    if (!pictures[n]) {
      if (n === school.read.picture) { const err = new Error('the picture at the top of Read ("' + n + '") is not in the picture folder'); err.holdAll = err.message; problems.push({ key: 'publish:picture:' + n, title: 'Read', what: 'has no picture "' + n + '" in the picture folder' }); throw err; }
      const id = names[n];
      if (dueIds[id]) { dropped.push(id); problems.push({ key: 'publish:picture:' + n, title: titleOfId_(rows, id), what: 'has no picture "' + n + '" in the picture folder' }); }
      else { const err = new Error('a published piece lost its picture: ' + n); err.holdAll = err.message; problems.push({ key: 'publish:picture:' + n, title: titleOfId_(rows, id), what: 'is published but its picture "' + n + '" is gone from the picture folder' }); throw err; }
    }
  });
  if (dropped.length) return { files: files, expect: expect, dropped: dropped };

  // the articles
  const ours = rows.filter(x => x['lives'] === 'ours' && x['status'] === 'published' && x['school'] === school.id);
  ours.forEach(x => {
    const slug = slugOfRow_(x), isDue = !!dueIds[x['id']];
    const a = {
      address: slug, title: String(x['title']), search_title: String(x['search title']), search_description: String(x['search description']),
      published: isoDay_(x['published']), picture: String(x['picture']), body_html: String(x['body']),
      next: String(x['next'] || '').trim(), keep: String(x['keep'] || '').split(/[;,]/).map(s => s.trim()).filter(Boolean)
    };
    try {
      files['/' + slug + '.html'] = text_(r.articlePage(school, data.entries, a));
      expect['/' + slug + '.html'] = { slug: slug, title: a.title, search_title: a.search_title, search_description: a.search_description, picture: school.picture_base + a.picture + '.jpg' };
    } catch (e) {
      if (isDue) { dropped.push(x['id']); problems.push({ key: 'publish:' + slug, title: a.title, what: 'could not be drawn (' + oneLine_(e.message, 140) + ')' }); }
      else { const err = new Error('a published piece no longer draws: ' + slug + ': ' + e.message); err.holdAll = err.message; problems.push({ key: 'publish:' + slug, title: a.title, what: 'is published and no longer draws (' + oneLine_(e.message, 140) + ')' }); throw err; }
    }
  });
  if (dropped.length) return { files: {}, expect: {}, dropped: dropped };

  files['/index.html'] = text_(r.readPage(school, data));
  expect['/index.html'] = { slug: 'read', title: 'Read', search_title: school.read.search_title, search_description: school.read.search_description, picture: school.picture_base + school.read.picture + '.jpg' };
  files['/sitemap.xml'] = text_(r.sitemap(school, data.entries));
  files['/robots.txt'] = text_(r.robots(school));
  Object.keys(pictures).forEach(n => { if (pictures[n]) files['/pictures/' + n + '.jpg'] = bin_(pictures[n]); });
  Object.keys(files).forEach(p => { files[p].path = p; });
  return { files: files, expect: expect, dropped: [] };
}

function text_(s) { return { bytes: Utilities.newBlob(s, 'text/plain', 'f').getBytes(), mime: 'text/plain' }; }
function bin_(bytes) { return { bytes: bytes, mime: 'application/octet-stream' }; }

function fetchPicture_(school, name) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(name)) return null;
  const res = UrlFetchApp.fetch(school.picture_folder + name + '.jpg', { muteHttpExceptions: true, followRedirects: true });
  if (res.getResponseCode() !== 200) return null;
  const bytes = res.getBlob().getBytes();
  return bytes.length > 1000 ? bytes : null;
}

// ───────────────────────────── Firebase Hosting ─────────────────────────────

function deploy_(site, files) {
  const base = PUB.FB + 'sites/' + site;
  const ver = fb_('post', base + '/versions', { config: { cleanUrls: true, trailingSlashBehavior: 'REMOVE' } });
  const manifest = {}, byHash = {};
  Object.keys(files).forEach(p => {
    const gz = Utilities.gzip(Utilities.newBlob(files[p].bytes, 'application/octet-stream', 'f')).getBytes();
    const h = sha256_(gz);
    manifest[p] = h; byHash[h] = gz;
  });
  const pop = fb_('post', PUB.FB + ver.name + ':populateFiles', { files: manifest });
  (pop.uploadRequiredHashes || []).forEach(h => {
    const res = UrlFetchApp.fetch(pop.uploadUrl + '/' + h, { method: 'post', contentType: 'application/octet-stream', payload: byHash[h], headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
    if (res.getResponseCode() >= 300) throw new Error('upload ' + res.getResponseCode());
  });
  fb_('patch', PUB.FB + ver.name + '?update_mask=status', { status: 'FINALIZED' });
  release_(site, ver.name);
  return ver.name;
}

function release_(site, versionName) {
  fb_('post', PUB.FB + 'sites/' + site + '/releases?versionName=' + encodeURIComponent(versionName), {});
}

function fb_(method, url, body) {
  const res = UrlFetchApp.fetch(url, { method: method, contentType: 'application/json', payload: JSON.stringify(body || {}), headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
  const code = res.getResponseCode(), text = res.getContentText();
  if (code < 200 || code >= 300) throw new Error('Hosting ' + code + ': ' + oneLine_(text, 160));
  return text ? JSON.parse(text) : {};
}

// ───────────────────────────── looking at the live page ─────────────────────────────

/** Fetches each changed page and compares title, description, picture and the Google tag. Returns the misses. */
function verify_(school, expect, changed) {
  const base = liveBase_(school);
  const r = APRender.create(AP_TEMPLATES);
  const paths = changed.length ? changed : ['/index.html'];
  const misses = [];
  paths.forEach(p => {
    const e = expect[p]; if (!e) return;
    const url = base + (p === '/index.html' ? '/' : p.replace(/\.html$/, ''));
    let what = '';
    for (let i = 0; i < PUB.VERIFY_TRIES; i++) {
      what = checkPage_(school, r, url, e);
      if (!what) break;
      if (i < PUB.VERIFY_TRIES - 1) Utilities.sleep(PUB.VERIFY_WAIT_MS);
    }
    if (what) misses.push({ slug: e.slug, title: e.title, what: what });
  });
  return misses;
}

function checkPage_(school, r, url, e) {
  let html;
  try {
    const res = UrlFetchApp.fetch(url + (url.indexOf('?') < 0 ? '?' : '&') + 'nocache=' + Date.now(), { muteHttpExceptions: true, followRedirects: true, headers: { 'Cache-Control': 'no-cache' } });
    if (res.getResponseCode() !== 200) return 'the page answered ' + res.getResponseCode();
    html = res.getContentText();
  } catch (err) { return 'the page could not be fetched (' + oneLine_(err.message, 80) + ')'; }
  const title = unesc_((html.match(/<title>([^<]*)<\/title>/) || [])[1]);
  const desc = unesc_((html.match(/<meta name="description" content="([^"]*)"/) || [])[1]);
  const pic = unesc_((html.match(/<meta property="og:image" content="([^"]*)"/) || [])[1]);
  if (title !== e.search_title) return 'title reads "' + oneLine_(title, 60) + '"';
  if (desc !== e.search_description) return 'description is not the one in the row';
  if (pic !== e.picture) return 'picture is "' + oneLine_(pic, 80) + '"';
  const t = r.tagCount(html);
  if (!(t.ids.length === 1 && t.ids[0] === school.google_tag && t.gtagScripts === 1 && t.gtm === 0 && t.configCalls === 1)) return 'the Google tag is not there exactly once (' + t.ids.join(',') + ' · ' + t.gtagScripts + ' script · ' + t.configCalls + ' config)';
  return '';
}

// ───────────────────────────── a Google Doc → the article's words ─────────────────────────────

/** Paragraphs → <p>, headings → <h2>/<h3>, lists → <ul>/<ol>, bold/italic/links kept. The first paragraph is the lead. A first line equal to the title is dropped. */
function docToHtml_(id, title) {
  if (!id) return '';
  const body = DocumentApp.openById(id).getBody(), n = body.getNumChildren(), out = [];
  let list = null, leadDone = false, first = true;
  const close = () => { if (list) { out.push('</' + list + '>'); list = null; } };
  for (let i = 0; i < n; i++) {
    const el = body.getChild(i), type = el.getType();
    if (type === DocumentApp.ElementType.PARAGRAPH || type === DocumentApp.ElementType.LIST_ITEM) {
      const text = el.asText().getText();
      if (!text.trim()) continue;
      const inner = inline_(el.asText());
      if (first) { first = false; if (clean_(text) === clean_(title)) continue; }
      if (type === DocumentApp.ElementType.LIST_ITEM) {
        const tag = /NUMBER|ROMAN|LATIN/.test(String(el.asListItem().getGlyphType())) ? 'ol' : 'ul';
        if (list !== tag) { close(); out.push('<' + tag + '>'); list = tag; }
        out.push('<li>' + inner + '</li>');
        continue;
      }
      close();
      const h = String(el.asParagraph().getHeading());
      if (/TITLE|HEADING1|HEADING2/.test(h) && !/SUBTITLE/.test(h)) out.push('<h2>' + inner + '</h2>');
      else if (/HEADING[3-6]|SUBTITLE/.test(h)) out.push('<h3>' + inner + '</h3>');
      else { out.push(leadDone ? '<p>' + inner + '</p>' : '<p class="lead">' + inner + '</p>'); leadDone = true; }
    }
  }
  close();
  return out.join('\n');
}

function inline_(t) {
  const s = t.getText(), idx = t.getTextAttributeIndices();
  let html = '';
  for (let i = 0; i < idx.length; i++) {
    const from = idx[i], to = i + 1 < idx.length ? idx[i + 1] : s.length;
    let seg = esc_(s.slice(from, to)).replace(/\u000b/g, '<br>');
    if (!seg) continue;
    const url = t.getLinkUrl(from);
    if (t.isBold(from) && s.slice(from, to).trim()) seg = '<strong>' + seg + '</strong>';
    if (t.isItalic(from) && s.slice(from, to).trim()) seg = '<em>' + seg + '</em>';
    if (url) seg = '<a href="' + esc_(url) + '">' + seg + '</a>';
    html += seg;
  }
  return html.replace(/<\/strong><strong>/g, '').replace(/<\/em><em>/g, '');
}

// ───────────────────────────── the sheets ─────────────────────────────

function rows_(sh) {
  const v = sh.getDataRange().getValues(); if (v.length < 2) return [];
  const head = v[0].map(String);
  return v.slice(1).filter(r => String(r[0]) !== '').map(r => { const o = {}; head.forEach((h, i) => { o[h] = r[i] === undefined ? '' : r[i]; }); return o; });
}

/** Write the named cells of one row, found by id — re-read right now so a Guide refresh in between is never overwritten. */
function writeNow_(sh, id, cells) {
  const v = sh.getDataRange().getValues(), head = v[0].map(String), col = head.indexOf('id');
  for (let i = 1; i < v.length; i++) {
    if (String(v[i][col]) !== id) continue;
    Object.keys(cells).forEach(k => { const c = head.indexOf(k); if (c >= 0) sh.getRange(i + 1, c + 1).setValue(cells[k]); });
    return true;
  }
  return false;
}

/** Slugs whose Front Desk "draft:<slug>" row has been ticked. */
function approvedDrafts_(school) {
  const out = {};
  try {
    const sh = SpreadsheetApp.openById(school.front_desk_sheet).getSheetByName(PUB.ACTIONS); if (!sh) return out;
    rows_(sh).forEach(r => {
      const m = /^draft:(.+)$/.exec(String(r['key'] || ''));
      if (m && (r['mark done by hand'] === true || /^(true|yes)$/i.test(String(r['mark done by hand'])) || String(r['status']) === 'done')) out[m[1]] = true;
    });
  } catch (e) { log_('publish', 'could not read the Front Desk: ' + e); }
  return out;
}

function fdRow_(school, key, doThis, forWhat, because, link) {
  try {
    const sh = SpreadsheetApp.openById(school.front_desk_sheet).getSheetByName(PUB.ACTIONS); if (!sh) return;
    const data = sh.getDataRange().getValues(), head = data[0].map(String), H = {}; head.forEach((h, i) => { H[h] = i; });
    for (let i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) return;             // heard once
    const row = new Array(head.length).fill('');
    row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = PUB.OWNER; row[H['do this']] = doThis; row[H['for']] = forWhat;
    row[H['because']] = because; row[H['link']] = link; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['rule']] = PUB.RULE;
    sh.appendRow(row);
  } catch (e) { log_('publish', 'front desk row failed: ' + e); }
}

function log_(what, detail) {
  try {
    const ss = SpreadsheetApp.openById(AP_SCHOOL.guide_sheet), sh = ss.getSheetByName(PUB.LOG);
    if (sh) sh.appendRow([new Date(), 'publisher ' + what, String(detail).slice(0, 500)]);
  } catch (e) { /* the log is never load-bearing */ }
}

// ───────────────────────────── small things ─────────────────────────────

function prop_(k) { return PropertiesService.getScriptProperties().getProperty(k) || ''; }
function parse_(s) { try { return JSON.parse(s || '{}') || {}; } catch (e) { return {}; } }
function clean_(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); }
function oneLine_(s, max) { s = clean_(s); if (max && s.length > max) s = s.slice(0, max).replace(/\s+\S*$/, '') + '…'; return s; }
function esc_(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function unesc_(s) { return String(s == null ? '' : s).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&'); }
function docId_(v) { const m = /[-\w]{25,}/.exec(String(v || '')); return m ? m[0] : ''; }
function slugOfRow_(r) { return String(r['address'] || '').replace(/^https?:\/\/[^\/]+\//, '').replace(/[?#].*$/, '').replace(/\/$/, '') || String(r['id'] || '').replace(/^read:/, ''); }
function titleOfId_(rows, id) { const r = rows.filter(x => x['id'] === id)[0]; return r ? String(r['title']) : id; }
function dayOf_(d) { return Utilities.formatDate(d, PUB.TZ, 'yyyy-MM-dd'); }
function isoDay_(v) {
  if (v instanceof Date) return dayOf_(v);
  const s = String(v || ''), m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s);
  if (m) return m[1] + '-' + m[2] + '-' + m[3];
  const q = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
  return q ? q[3] + '-' + ('0' + q[1]).slice(-2) + '-' + ('0' + q[2]).slice(-2) : '';
}
function hex_(bytes) { return bytes.map(b => ('0' + ((b + 256) % 256).toString(16)).slice(-2)).join(''); }
function sha256_(bytes) { return hex_(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, bytes)); }
function shortHash_(bytes) { return sha256_(bytes).slice(0, 16); }
function digest_(files) { return sha256_(Utilities.newBlob(Object.keys(files).sort().map(p => p + ':' + shortHash_(files[p].bytes)).join('\n')).getBytes()); }

// ───────────────────────────── AP-TRIAGE 1 · Publisher · Triage 1 ─────────────────────────────
// John Sherrod, Nov 17, 2026: a failure is sorted, handled and, only when it needs us, put in front of him in plain words with the repair under
// way. He never gets a raw error. Wait (a passing hiccup: retried at once and on the next run, silent, a card only after 30 minutes), Repair (a
// known cause the script fixes), Needs us (one card on the Front Desk Actions tab, key fix:<script>:<signature>, closed by this script as Proven
// after the job has run clean for 30 minutes; only S1 sends one plain email). Every event goes to the one event log with its school (Script
// Properties tri:school and tri:secret live in the Front Desk only: this script queues each event on the Triage queue tab of the Front Desk sheet and the Front Desk sends it). The block is the Front Desk's own (build 44), built from one source: only TRI_ and the three
// rule tables differ, so a new school is a row and a new script is the same block.
const TRI_ = {
  SCRIPT: 'publisher', LABEL: 'Publisher', FILE: 'scripts/Publisher.gs', BUILD: 'Triage 1',
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
const TRI_SERVICES_ = [[/firebase|hosting|sites\/|domainName/i, 'Firebase', 'firebase'], [/docs\.google|documents\/|google doc/i, 'Google Docs', 'google-docs'], [/spreadsheet|sheet/i, 'Google Sheets', 'google-sheets'], [/drive/i, 'Google Drive', 'google-drive'], [/gmail|mail/i, 'Gmail', 'gmail'], [/calendar/i, 'Google Calendar', 'google-calendar'],
  [/lock/i, 'the script lock', 'script-lock'], [/maximum execution time/i, 'the time limit', 'time-limit'], [/urlfetch|fetch|http|address unavailable|dns|socket|econn/i, 'an outside service', 'outside-service']];
/** Who a failure touches, and how serious it is (S1: a person's words are at risk or people cannot get in; S2: a feature is broken; S3: a rough edge). */
const TRI_WHO_ = [[/./, 'the men']];
const TRI_SEV_ = [[/./, 'S2']];
const TRI_SEV_WORDS_ = { S1: 'S1: a person’s words are at risk, or people can’t get in.', S2: 'S2: a feature is broken.', S3: 'S3: a rough edge.' };
const TRI_SRC_ = [[/publish/i, 'publish']];
let TRI_ONCE_ = {}; // jobs that run rarely (triGuard_ 4th argument): a failure that outlasts the retries is a card at once, and the first clean run closes it
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
    if (!needs) needs = r ? (r.way === 'needs_us') : minutes >= (TRI_ONCE_[c.src] ? 0 : TRI_.WAIT_MIN); // the log is the count when it answers; the Script Properties are the count when it cannot
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
      if (quiet >= (TRI_ONCE_[src] ? 0 : TRI_.CLEAN_MIN) * 60000 && (r !== false || quiet >= 4 * 36e5)) { if (x.cd) triClose_(sig); delete st[sig]; } // this script closes its own card as Proven
    });
    if (dirty) triSave_(st);
  } catch (e) {}
}
/** A timer's own job, handled where it happens: a failure goes to triage_, a clean pass to cleanRun_, and nothing is rethrown. */
function triGuard_(job, src, fn, once) {
  if (once) TRI_ONCE_[src] = 1;
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
