/* AP-BLOG-TPL 1.0 · the reference renderer. Plain on purpose: the Publisher carries the same few steps.
 *
 * The one rule of a template: {{key}} is replaced in a single pass. A key ending in _html, and css and js,
 * is inserted as it is; every other value is escaped. Inserted text is never scanned again.
 *
 * render(school, entries, article)  -> { index, article }   two full pages as strings
 *   school   the school's row (blog/school/<id>.json)
 *   entries  every article, newest first or not: { address, title, line, published, picture | picture_url, href? }
 *   article  the one being drawn: { address, title, search_title, search_description, published, picture, body_html, keep? }
 *
 * node blog/render.js <outdir>  draws the test pages from blog/test/fixtures into <outdir>.
 */
'use strict';
var fs = require('fs');
var path = require('path');
var T = path.join(__dirname, 'templates');

function tpl(name) { return fs.readFileSync(path.join(T, name), 'utf8').replace(/\n$/, ''); }

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function fill(template, values) {
  return template.replace(/\{\{([a-z_0-9]+)\}\}/g, function (m, k) {
    if (!Object.prototype.hasOwnProperty.call(values, k)) throw new Error('template key without a value: ' + k);
    var v = values[k];
    return (/_html$/.test(k) || k === 'css' || k === 'js') ? String(v == null ? '' : v) : esc(v);
  });
}

/* Title Case: capitalize every word that is all lowercase, except a short list of small words that are
 * not first, last or just after a colon or question mark. A word with any capital in it is never touched. */
var SMALL = { a: 1, an: 1, the: 1, and: 1, but: 1, or: 1, nor: 1, for: 1, of: 1, in: 1, on: 1, at: 1, to: 1, by: 1, as: 1 };
function titleCase(text) {
  var parts = text.split(/(\s+)/);
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

function rulesStamp() {
  var m = /rules:\s*(\d+)/.exec(fs.readFileSync(path.join(T, 'blog.css'), 'utf8').split('\n')[0]);
  return m ? +m[1] : 0;
}

function pictureUrl(school, e) { return e.picture_url || (school.picture_base + e.picture + '.jpg'); }
function hrefOf(e) { return e.href || ('/' + e.address); }

/* The stylesheet takes brand values raw (a font stack carries quotes), so each one must be plain: no ; { } < > or backslash. */
function css(school) {
  var b = school.brand, keys = ['navy', 'cream', 'paper', 'bronze', 'brown', 'brown_hover', 'ink', 'quiet', 'rule', 'gold', 'serif', 'sans', 'tint_article', 'tint_index'];
  return tpl('blog.css').replace(/\{\{([a-z_]+)\}\}/g, function (m, k) {
    if (keys.indexOf(k) < 0 || b[k] == null) throw new Error('stylesheet key without a brand value: ' + k);
    var v = String(b[k]);
    if (/[;{}<>\\]/.test(v)) throw new Error('brand value is not plain: ' + k);
    return v;
  });
}

function tagHtml(id) {
  if (!id) return '';
  return '<script async src="https://www.googletagmanager.com/gtag/js?id=' + esc(id) + '"></script>\n' +
    '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag(\'js\',new Date());gtag(\'config\',\'' + esc(id) + '\');</script>\n';
}

function links(list) {
  var t = tpl('link.html');
  return list.map(function (l) {
    return fill(t, { href: l.href, label: l.label, on_html: l.on ? ' class="on" aria-current="page"' : '' });
  }).join('');
}

function frame(school, v) {
  var b = school.brand;
  return fill(tpl('page.html'), Object.assign({
    lang: school.lang, school_name: school.name, site: school.site,
    google_tag_html: tagHtml(school.google_tag), navy: b.navy, fonts_href: b.fonts_href,
    css: css(school), js: tpl('blog.js'), rules: rulesStamp(),
    nav_html: links(school.menu), footer_html: links(school.footer),
    skip_label: school.article.skip_label, published_html: ''
  }, v));
}

function sortNewest(entries) { return entries.slice().sort(function (a, b) { return a.published < b.published ? 1 : a.published > b.published ? -1 : 0; }); }

function indexPage(school, entries) {
  var ix = school.index, list = sortNewest(entries), html;
  if (!list.length) {
    html = fill(tpl('empty.html'), ix);
  } else {
    var cards = list.slice(0, 8).map(function (e, i) {
      return fill(tpl('card.html'), { href: hrefOf(e), picture_url: pictureUrl(school, e), loading: i < 2 ? 'eager' : 'lazy', title: titleCase(e.title), line: e.line, cta: ix.card_cta });
    }).join('\n');
    var rest = list.slice(8), more = '';
    if (rest.length) {
      more = fill(tpl('more.html'), {
        more_heading: ix.more_heading, more_line: ix.more_line,
        rows_html: rest.map(function (e) { return fill(tpl('row.html'), { href: hrefOf(e), title: titleCase(e.title), line: e.line, cta: ix.row_cta }); }).join('\n')
      });
    }
    html = fill(tpl('ix-list.html'), { cards_html: cards, more_html: more, ask_href: ix.ask_href, ask_label: ix.ask_label, stories_href: ix.stories_href, stories_label: ix.stories_label });
  }
  var main = fill(tpl('index.html'), {
    band_picture_url: school.picture_base + ix.picture + '.jpg', eyebrow: ix.eyebrow, title: titleCase(ix.title), line: ix.line,
    list_html: html, invite_line: school.invite.line, invite_href: school.invite.href, invite_label: school.invite.label
  });
  return frame(school, {
    search_title: ix.search_title, search_description: ix.search_description, page_url: 'https://' + school.address + '/',
    og_type: 'website', preview_image_url: school.picture_base + ix.picture + '.jpg', preview_image_alt: '', main_html: main
  });
}

function articlePage(school, entries, a) {
  var ar = school.article;
  var body = titleCaseHtml(a.body_html);
  var byAddr = {}; entries.forEach(function (e) { byAddr[e.address] = e; });
  var keepAddrs = (a.keep && a.keep.length ? a.keep : sortNewest(entries).filter(function (e) { return e.address !== a.address; }).map(function (e) { return e.address; })).slice(0, 2);
  var keep = keepAddrs.map(function (ad) {
    var e = byAddr[ad]; if (!e) throw new Error('Keep Reading names an article that is not on the list: ' + ad);
    return fill(tpl('keep.html'), { href: hrefOf(e), picture_url: pictureUrl(school, e), title: titleCase(e.title), line: e.line, cta: school.index.card_cta });
  }).join('\n');
  var pic = pictureUrl(school, a);
  var main = fill(tpl('article.html'), {
    band_class: school.band_align === 'left' ? ' left' : '', picture_url: pic, date_long: dateLong(a.published), minutes: minutes(a.body_html),
    read_suffix: ar.read_suffix, title: titleCase(a.title), body_html: body, share_label: ar.share_label, share_copied: ar.share_copied,
    share_manual: ar.share_manual, keep_heading: ar.keep_heading, index_href: '/', all_label: ar.all_label, keep_html: keep
  });
  return frame(school, {
    search_title: a.search_title, search_description: a.search_description, page_url: 'https://' + school.address + '/' + a.address,
    og_type: 'article', preview_image_url: pic, preview_image_alt: '',
    published_html: '<meta property="article:published_time" content="' + esc(a.published) + '">\n', main_html: main
  });
}

function render(school, entries, article) {
  return { index: indexPage(school, entries), article: article ? articlePage(school, entries, article) : null };
}

module.exports = { render: render, indexPage: indexPage, articlePage: articlePage, titleCase: titleCase, titleCaseHtml: titleCaseHtml, minutes: minutes, rulesStamp: rulesStamp, esc: esc };

if (require.main === module) {
  var out = process.argv[2];
  if (!out) { console.error('usage: node blog/render.js <outdir> [school-id]'); process.exit(2); }
  var school = JSON.parse(fs.readFileSync(path.join(__dirname, 'school', (process.argv[3] || 'ancient-path') + '.json'), 'utf8'));
  var fx = path.join(__dirname, 'test', 'fixtures');
  var entries = JSON.parse(fs.readFileSync(path.join(fx, 'entries.json'), 'utf8'));
  var article = JSON.parse(fs.readFileSync(path.join(fx, 'lonely-at-the-top.json'), 'utf8'));
  article.body_html = fs.readFileSync(path.join(fx, 'lonely-at-the-top.body.html'), 'utf8');
  fs.mkdirSync(out, { recursive: true });
  var r = render(school, entries, article);
  fs.writeFileSync(path.join(out, 'index.html'), r.index);
  fs.writeFileSync(path.join(out, article.address + '.html'), r.article);
  fs.writeFileSync(path.join(out, 'empty.html'), indexPage(school, []));
  console.log('drew index.html, ' + article.address + '.html, empty.html into ' + out);
}
