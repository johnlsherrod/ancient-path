# blog/ — AP-BLOG-TPL 1.0 (Nov 6, 2026)

The index and article templates for the blog on our own platform, built from Blog on Our Own Platform — Mockup 1.0 (https://claude.ai/artifact/MFrFo2UaQrFakPGfXrM3Si).

## What is here

- `school/<id>.json` — the school's row: address, brand tokens, menu, footer, invitation, Google tag, the words the index and article carry. `ancient-path.json` is school one. A second school is a second row; nothing else changes.
- `templates/page.html` — the frame every page shares (head, menu, footer). `index.html` and `article.html` are drawn into it. `card.html`, `row.html`, `keep.html`, `link.html`, `ix-list.html`, `more.html`, `empty.html` are the small pieces. `blog.css` is the one stylesheet; `blog.js` the one script (menu, Share).
- `render.js` — the reference renderer. One rule: `{{key}}` is replaced in a single pass; a key ending `_html`, and `css` and `js`, goes in as it is; everything else is escaped.
- `test/check.py` — the machine checks at 390 and 1440 (`AP_FONTS=<folder with @fontsource-variable/source-serif-4 and source-sans-3> python3 blog/test/check.py <outdir>`). `test/fixtures/` holds Lonely at the Top and ten real index entries.

## Rules the templates keep

- Brand reaches the page only as the variables in `:root`, from the school row. The Google tag is written once, in the head, from the row's `google_tag`; it never goes in an article.
- Share-preview lines (title, description, canonical, og:, twitter:) come from the article's search title, search description and shelf picture.
- Headings are set in Title Case by the renderer (a word with a capital in it is never changed).
- The article is one column: band, body, Share and Keep Reading share one left edge and one width (720px).
- The body the Publisher hands the template uses `p`, `p.lead`, `h2`, `a`, and `p.go` holding `a.btn` (the page's one filled button) or `a.walk`.

## Stamp

`blog.css` line 1 carries the build and the stylesheet's rule count (parser count, `@media` rules flattened). The page foot carries both as `data-build` and `data-rules`. `test/check.py` fails if the parser or the browser disagrees with the stamp.
