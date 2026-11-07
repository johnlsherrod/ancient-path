#!/usr/bin/env python3
"""AP-BLOG-TPL machine checks (ap-ship-standard line 2): render the test pages and measure them in real Chromium at 390 and 1440.

    python3 blog/test/check.py [outdir]

Needs: node, playwright (python), tinycss2, pillow, numpy. Fonts: set AP_FONTS to a folder holding
node_modules/@fontsource-variable/source-serif-4 and source-sans-3 so lines break as they do with the brand fonts;
without it the page falls back to Georgia/Helvetica and line breaks are approximate.
Pictures are served from the repo's pictures/ folder; nothing else leaves the machine.
"""
import json, os, re, subprocess, sys
from pathlib import Path
import numpy as np
from PIL import Image
import io
import tinycss2
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
BLOG = ROOT / 'blog'
OUT = Path(sys.argv[1] if len(sys.argv) > 1 else '/tmp/ap-blog-check').resolve()
FONTS = Path(os.environ.get('AP_FONTS', '')) if os.environ.get('AP_FONTS') else None
PICS = 'https://raw.githubusercontent.com/johnlsherrod/ancient-path/main/pictures/'
SCHOOL = json.load(open(BLOG / 'school' / 'ancient-path.json'))
TAG = SCHOOL['google_tag']
results = []

def ok(name, passed, detail=''):
    results.append((passed, name, detail))
    print(('PASS ' if passed else 'FAIL ') + name + (('  — ' + detail) if detail else ''))

# ---------- draw ----------
subprocess.run(['node', str(BLOG / 'render.js'), str(OUT)], check=True, capture_output=True)
ART = 'lonely-at-the-top-why-it-happens-and-what-to-do-about-it'
PAGES = {'index': OUT / 'index.html', 'article': OUT / (ART + '.html'), 'empty': OUT / 'empty.html'}

# ---------- the stylesheet, counted three ways ----------
def flat_rules(nodes):
    n = 0
    for node in nodes:
        if node.type == 'qualified-rule':
            n += 1
        elif node.type == 'at-rule':
            if node.content is not None and node.at_keyword in ('media', 'supports'):
                n += flat_rules(tinycss2.parse_rule_list(node.content, skip_whitespace=True, skip_comments=True))
            else:
                n += 1
    return n

src_css = (BLOG / 'templates' / 'blog.css').read_text()
stamp = int(re.search(r'rules:\s*(\d+)', src_css.split('\n')[0]).group(1))
html_by = {k: v.read_text() for k, v in PAGES.items()}
for k, h in html_by.items():
    css = re.search(r'<style>\n(.*?)\n</style>', h, re.S).group(1)
    nodes = tinycss2.parse_stylesheet(css, skip_whitespace=True, skip_comments=True)
    errs = [n for n in nodes if n.type == 'error']
    n = flat_rules(nodes)
    ok(f'{k}: stylesheet parses clean (tinycss2)', not errs, f'{len(errs)} errors')
    ok(f'{k}: braces balance', css.count('{') == css.count('}'), f"{css.count('{')} open, {css.count('}')} close")
    ok(f'{k}: parser rule count equals the stamp', n == stamp, f'parser {n}, stamp {stamp}')
    ok(f'{k}: no token left unfilled', '{{' not in h, '')

# ---------- Google tag, share lines, raw HTML ----------
def metas(h):
    d = {}
    for m in re.finditer(r'<meta\s+(?:name|property)="([^"]+)"\s+content="([^"]*)"', h):
        d[m.group(1)] = m.group(2)
    return d

for k, h in html_by.items():
    head = h.split('</head>')[0]
    ids = sorted(set(re.findall(r'G-[A-Z0-9]{6,12}', h)))
    ok(f'{k}: Google tag once, in the head, the school row\'s id',
       ids == [TAG] and h.count('googletagmanager.com/gtag/js') == 1 and head.count('googletagmanager.com/gtag/js') == 1
       and len(re.findall(r"gtag\('config'", h)) == 1 and 'GTM-' not in h, f'ids {ids}, scripts {h.count("googletagmanager.com/gtag/js")}')
    m = metas(h)
    title = re.search(r'<title>(.*?)</title>', h).group(1)
    need = ['description', 'og:title', 'og:description', 'og:url', 'og:image', 'og:type', 'og:site_name', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']
    ok(f'{k}: share-preview lines all present', all(m.get(x) for x in need) and bool(title), 'missing ' + str([x for x in need if not m.get(x)]))
    ok(f'{k}: og lines say what the title and description say', m.get('og:title') == title == m.get('twitter:title') and m.get('og:description') == m.get('description') == m.get('twitter:description'))
    ok(f'{k}: title and description fit a search result', len(title) <= 60 and 50 <= len(m['description']) <= 160, f'title {len(title)}, description {len(m["description"])}')
    img = m.get('og:image', '')
    pic_ok = img.startswith(PICS) and (ROOT / 'pictures' / img[len(PICS):]).exists()
    ok(f'{k}: share picture is an absolute shelf address that exists', pic_ok, img)
    ok(f'{k}: canonical and og:url are the page\'s own address on the school\'s address', re.search(r'<link rel="canonical" href="([^"]+)"', h).group(1) == m['og:url'] and m['og:url'].startswith('https://' + SCHOOL['address'] + '/'), m['og:url'])

art = json.load(open(BLOG / 'test/fixtures/lonely-at-the-top.json'))
am = metas(html_by['article'])
ok('article: the doc\'s search title and description go into the lines word for word',
   re.search(r'<title>(.*?)</title>', html_by['article']).group(1) == art['search_title'] and am['description'] == art['search_description'])
ok('article: picture is the doc\'s shelf picture', am['og:image'] == PICS + art['picture'] + '.jpg')

# ---------- Title Case, checked independently of the renderer ----------
SMALL = {'a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'of', 'in', 'on', 'at', 'to', 'by', 'as'}
def is_title_case(text):
    ws = [w for w in re.split(r'\s+', text.strip()) if w]
    bad = []
    for i, w in enumerate(ws):
        core = re.sub(r'^[^A-Za-z0-9]+', '', w)
        if not core or core[0].isdigit():
            continue
        edge = i == 0 or i == len(ws) - 1 or re.search(r'[:?!]$', ws[i - 1])
        lower = core[0].islower()
        base = re.sub(r'[^a-z].*$', '', core.lower())
        if lower and not (base in SMALL and not edge):
            bad.append(w)
        if (not lower) and base in SMALL and not edge and core[0].isupper() and core == core.capitalize():
            pass  # a small word the author capitalized: allowed, never changed
    return bad

# ---------- the browser ----------
def lum(rgb):
    def f(c):
        c = c / 255
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = rgb
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
def contrast(a, b):
    la, lb = lum(a), lum(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)

JS_MEASURE = r"""
() => {
  const out = {};
  const de = document.documentElement;
  out.scrollW = de.scrollWidth; out.innerW = window.innerWidth;
  out.wide = [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.right > window.innerWidth + 1) && !e.closest('.skip'); }).map(e => e.tagName + '.' + e.className).slice(0, 5);
  const box = (sel) => { const e = document.querySelector(sel); if (!e) return null; const r = e.getBoundingClientRect(), cs = getComputedStyle(e);
    const pl = parseFloat(cs.paddingLeft), pr = parseFloat(cs.paddingRight); return {left: +(r.left + pl).toFixed(1), width: +(r.width - pl - pr).toFixed(1)}; };
  out.col = {band: box('.band.art .band-in'), body: box('.rd'), share: box('.share'), keep: box('.kr')};
  out.headings = [...document.querySelectorAll('h1,h2,h3')].map(h => h.textContent.replace(/\s+/g, ' ').trim());
  const taps = [];
  document.querySelectorAll('a,button').forEach(e => {
    const r = e.getBoundingClientRect(); const cs = getComputedStyle(e);
    if (cs.display === 'none' || cs.visibility === 'hidden' || r.width === 0 || e.closest('.skip') || e.closest('.drawer:not(.open)')) return;
    if (e.closest('.rd') && e.parentElement && e.parentElement.tagName === 'P' && !e.parentElement.classList.contains('go')) return; // a link inside a sentence
    if (r.height < 43.5 || r.width < 43.5) taps.push((e.textContent || '').trim().slice(0, 30) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height));
  });
  out.smallTaps = taps;
  out.imgs = [...document.images].map(i => ({src: i.src.slice(-40), ok: i.complete && i.naturalWidth > 0}));
  out.ids = {h1: document.querySelectorAll('h1').length, main: document.querySelectorAll('main').length, lang: de.lang};
  out.sheetRules = (() => { const flat = (rs) => { let n = 0; for (const r of rs) { if (r.cssRules && r.type === CSSRule.MEDIA_RULE) n += flat(r.cssRules); else n++; } return n; };
    return [...document.styleSheets].filter(s => s.ownerNode && s.ownerNode.tagName === 'STYLE').map(s => flat(s.cssRules)); })();
  out.cards = document.querySelectorAll('a.pc').length; out.rows = document.querySelectorAll('a.mr').length; out.keeps = document.querySelectorAll('a.kc').length;
  out.empty = !!document.querySelector('.empty');
  out.fontOK = document.fonts.check('600 20px "Source Serif 4"') && document.fonts.check('600 15px "Source Sans 3"');
  out.text = document.body.innerText;
  return out;
}
"""

JS_LINES = r"""
() => {
  const bad = [];
  document.querySelectorAll('h1,h2,h3').forEach(h => {
    const txt = h.textContent.replace(/\s+/g, ' ').trim(); const w = txt.split(' ');
    if (w.length < 2) return;
    const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT); const tops = [];
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => { const s = n.textContent; const re = /\S+/g; let m; while ((m = re.exec(s))) { const r = document.createRange(); r.setStart(n, m.index); r.setEnd(n, m.index + m[0].length); const rc = r.getClientRects()[0]; if (rc) tops.push(Math.round(rc.top)); } });
    const lines = [...new Set(tops)].sort((a, b) => a - b);
    if (lines.length > 1) { const last = tops.filter(t => t === lines[lines.length - 1]).length; if (last < 2) bad.push(txt + ' (' + lines.length + ' lines)'); }
  });
  return bad;
}
"""

JS_TEXTBOXES = r"""
() => {
  const els = [...document.querySelectorAll('.band h1,.band .eb,.band .dt,.band .bn')];
  return els.map((e, i) => { e.setAttribute('data-tb', i); const r = e.getBoundingClientRect(), cs = getComputedStyle(e);
    // the text's own box: the range around its text, not the full-width block
    const rg = document.createRange(); rg.selectNodeContents(e); const rr = rg.getBoundingClientRect();
    return {i, color: cs.color, x: rr.left + window.scrollX, y: rr.top + window.scrollY, w: rr.width, h: rr.height, size: parseFloat(cs.fontSize), weight: parseInt(cs.fontWeight)}; });
}
"""

JS_FLAT = r"""
() => {
  const rows = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  while (walker.nextNode()) {
    const n = walker.currentNode; if (!n.textContent.trim()) continue; const e = n.parentElement;
    if (!e || seen.has(e) || e.closest('.band') || e.closest('script,style') || e.closest('.skip')) continue; seen.add(e);
    const cs = getComputedStyle(e); if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    if (e.closest('.drawer:not(.open)') || (e.closest('.nav') && getComputedStyle(e.closest('.nav')).display === 'none')) continue;
    let bg = null, p = e; while (p) { const b = getComputedStyle(p).backgroundColor; const m = b.match(/rgba?\(([^)]+)\)/); if (m) { const v = m[1].split(',').map(Number); if (v.length === 3 || v[3] > 0.99) { bg = v.slice(0, 3); break; } } p = p.parentElement; }
    rows.push({t: n.textContent.trim().slice(0, 28), color: cs.color, bg, size: parseFloat(cs.fontSize), weight: parseInt(cs.fontWeight)});
  }
  return rows;
}
"""

def parse_rgb(s):
    m = re.match(r'rgba?\(([^)]+)\)', s)
    return [float(x) for x in m.group(1).split(',')[:3]]

def route_all(page, unrouted):
    def handler(route):
        url = route.request.url
        if url.startswith('file://'):
            return route.continue_()
        if url.startswith(PICS):
            f = ROOT / 'pictures' / url[len(PICS):]
            if f.exists():
                return route.fulfill(status=200, body=f.read_bytes(), content_type='image/jpeg')
        if 'fonts.googleapis.com' in url and FONTS:
            css = ("@font-face{font-family:'Source Serif 4';font-style:normal;font-weight:200 900;src:url(https://fonts.gstatic.com/serif.woff2) format('woff2')}"
                   "@font-face{font-family:'Source Sans 3';font-style:normal;font-weight:200 900;src:url(https://fonts.gstatic.com/sans.woff2) format('woff2')}"
                   "@font-face{font-family:'Source Sans 3';font-style:italic;font-weight:200 900;src:url(https://fonts.gstatic.com/sansi.woff2) format('woff2')}")
            return route.fulfill(status=200, body=css, content_type='text/css')
        if 'fonts.gstatic.com' in url and FONTS:
            nm = url.rsplit('/', 1)[1]
            fp = {'serif.woff2': 'source-serif-4/files/source-serif-4-latin-opsz-normal.woff2', 'sans.woff2': 'source-sans-3/files/source-sans-3-latin-wght-normal.woff2', 'sansi.woff2': 'source-sans-3/files/source-sans-3-latin-wght-italic.woff2'}[nm]
            return route.fulfill(status=200, body=(FONTS / 'node_modules/@fontsource-variable' / fp).read_bytes(), content_type='font/woff2')
        if 'googletagmanager.com' in url:
            return route.fulfill(status=200, body='/* tag stub */', content_type='application/javascript')
        unrouted.append(url)
        return route.abort()
    page.route('**/*', handler)

def measure(pw, kind, width, height):
    ctx = pw.chromium.launch().new_context(
        viewport={'width': width, 'height': height}, device_scale_factor=1,
        has_touch=(width < 700), is_mobile=(width < 700))
    ctx.grant_permissions(['clipboard-read', 'clipboard-write'])
    page = ctx.new_page()
    errors, unrouted = [], []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' and 'Failed to load resource' not in m.text else None)
    route_all(page, unrouted)
    page.goto(PAGES[kind].as_uri())
    page.wait_for_load_state('networkidle')
    page.evaluate('document.fonts.ready')
    page.evaluate("async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); }")
    page.wait_for_timeout(300)
    tag = f'{kind} @ {width}'
    m = page.evaluate(JS_MEASURE)
    ok(f'{tag}: nothing scrolls sideways', m['scrollW'] <= m['innerW'] and not m['wide'], f"scroll {m['scrollW']} of {m['innerW']} {m['wide']}")
    ok(f'{tag}: every tap target is 44px or more', not m['smallTaps'], str(m['smallTaps']))
    ok(f'{tag}: every picture loads', all(i['ok'] for i in m['imgs']), str([i for i in m['imgs'] if not i['ok']]))
    ok(f'{tag}: one h1, one main, language set', m['ids'] == {'h1': 1, 'main': 1, 'lang': 'en'}, str(m['ids']))
    ok(f'{tag}: browser accepted the same rule count as the stamp', m['sheetRules'] == [stamp], f"browser {m['sheetRules']}, stamp {stamp}")
    ok(f'{tag}: no script errors, nothing fetched that was not allowed', not errors and not unrouted, str(errors + unrouted))
    ok(f'{tag}: no template key or "undefined" shows on the page', '{{' not in m['text'] and 'undefined' not in m['text'], '')
    ok(f'{tag}: the brand fonts are the ones in use' if FONTS else f'{tag}: brand fonts (fallback faces, line breaks approximate)', m['fontOK'] if FONTS else True, '' if m['fontOK'] else 'fonts did not load')
    bad_tc = [h for h in m['headings'] if is_title_case(h)]
    ok(f'{tag}: every heading is in Title Case', not bad_tc, str(bad_tc))
    if kind == 'index':
        ok(f'{tag}: newest eight are cards, the rest are rows', m['cards'] == 8 and m['rows'] == 2, f"{m['cards']} cards, {m['rows']} rows")
    if kind == 'empty':
        ok(f'{tag}: a school\'s first day shows the empty block and no cards', m['empty'] and m['cards'] == 0 and m['rows'] == 0)
    if kind == 'article':
        c = m['col']
        same = all(abs(c[k]['left'] - c['body']['left']) < 0.6 and abs(c[k]['width'] - c['body']['width']) < 0.6 for k in c)
        ok(f'{tag}: one column — band, body, Share and Keep Reading share one left edge and width', same and c['body']['width'] <= 720, str(c))
        ok(f'{tag}: two Keep Reading cards', m['keeps'] == 2, str(m['keeps']))
    lone = page.evaluate(JS_LINES)
    ok(f'{tag}: no heading leaves one word on its last line', not lone, str(lone))

    # behaviour
    if kind == 'article':
        page.click('#sharebtn')
        page.wait_for_timeout(200)
        said = page.inner_text('#said')
        ok(f'{tag}: Share copies the link and says so (no share sheet here)', said == SCHOOL['article']['share_copied'], said)
        if width < 700:
            page.evaluate("() => { window.__shared = null; navigator.share = (d) => { window.__shared = d; return Promise.resolve(); }; }")
            page.click('#sharebtn'); page.wait_for_timeout(300)
            sh = page.evaluate('window.__shared')
            ok(f'{tag}: on a phone Share hands the title and link to the phone', bool(sh) and sh.get('url', '').endswith('.html') and sh.get('title') == art['title'], str(sh))
    # contrast, non-band text: computed colors against the nearest solid background
    rows = page.evaluate(JS_FLAT)
    low = [(r['t'], round(contrast(parse_rgb(r['color']), r['bg']), 2)) for r in rows if r['bg'] and contrast(parse_rgb(r['color']), r['bg']) < (3 if (r['size'] >= 24 or (r['size'] >= 18.66 and r['weight'] >= 700)) else 4.5)]
    ok(f'{tag}: text contrast 4.5:1 (3:1 for large type) on its solid background', not low, str(low[:5]))

    # contrast, text on the band picture: measure the lightest pixels behind each line of title text
    tbs = page.evaluate(JS_TEXTBOXES)
    page.add_style_tag(content='.band h1,.band .eb,.band .dt,.band .bn{color:transparent!important}')
    bad_band = []
    for t in tbs:
        clip = {'x': max(0, t['x']), 'y': max(0, t['y']), 'width': max(1, min(t['w'], width - t['x'])), 'height': max(1, t['h'])}
        png = page.screenshot(clip=clip, full_page=True)
        a = np.asarray(Image.open(io.BytesIO(png)).convert('RGB')).reshape(-1, 3).astype(float)
        L = np.array([lum(p) for p in a[::7]])
        bg = a[::7][np.argsort(L)[int(len(L) * 0.97)]]  # the lightest 3 percent of pixels behind the text
        cr = contrast(parse_rgb(t['color']), bg)
        need = 3 if (t['size'] >= 24 or (t['size'] >= 18.66 and t['weight'] >= 700)) else 4.5
        if cr < need:
            bad_band.append((round(t['size']), round(cr, 2), need))
    ok(f'{tag}: band text reads against the lightest part of its picture', not bad_band, str(bad_band))
    page.add_style_tag(content='.band h1,.band .eb,.band .dt,.band .bn{color:revert!important}')
    page.screenshot(path=str(OUT / f'{kind}-{width}.png'), full_page=True)

    if width < 700:
        page.click('#menu'); page.wait_for_timeout(100)
        ex = page.get_attribute('#menu', 'aria-expanded')
        vis = page.evaluate("[...document.querySelectorAll('#drawer a')].every(a=>{const r=a.getBoundingClientRect();return r.height>=44&&r.width>0})")
        ok(f'{tag}: Menu opens the drawer, every item 44px or more', ex == 'true' and vis, f'expanded={ex}')
    ctx.browser.close()

with sync_playwright() as pw:
    for kind in ('index', 'article', 'empty'):
        for w, h in ((390, 844), (1440, 900)):
            measure(pw, kind, w, h)

# ---------- the renderer keeps the doc's words ----------
node = subprocess.run(['node', '-e', "const r=require('%s');const s=require('fs').readFileSync('%s','utf8');const o=r.titleCaseHtml(s);process.stdout.write(o===s?'same':'changed')" % (BLOG / 'render.js', BLOG / 'test/fixtures/lonely-at-the-top.body.html')], capture_output=True, text=True).stdout
ok('article: headings the doc already set in Title Case come through unchanged', node == 'same', node)
body_in = (BLOG / 'test/fixtures/lonely-at-the-top.body.html').read_text()
ok('article: the body reaches the page verbatim', re.sub(r'\s+', ' ', body_in.strip()) in re.sub(r'\s+', ' ', html_by['article']))

fails = [r for r in results if not r[0]]
print(f'\n{len(results) - len(fails)} of {len(results)} checks passed')
for f in fails:
    print('FAILED:', f[1], f[2])
sys.exit(1 if fails else 0)
