# Ancient Path — shared code and story engine workfolder

Live files: story.js, road.js, ap-promise-band-v2.html, pages/, scripts/. The tests (test-*.js), patch scripts (patch-*.py, v17-voice.js, qr.core.js — the source of record for each cut) and screenshot scripts (shoot*.js) sit beside them at the top level.

## Set up a new task (about a minute)
    git clone https://github.com/johnlsherrod/ancient-path.git && cd ancient-path
    npm init -y >/dev/null && npm install jsdom playwright >/dev/null
    for f in test-*.js; do node $f | tail -1; done    # every suite must say "all passed"

## The rules every cut keeps
Tests first; one zip; John pushes and gives the commit hash; Claude fetches the file at that hash from raw.githubusercontent.com and compares it byte for byte before writing the repoint; the ten pages are repointed by full commit and sha384 (openssl dgst -sha384 -binary story.js | openssl base64 -A); road pages carry both files; never re-use a spent tag; keep the site builder closed while repointing.

## What is where
- test-story-v8 … v18 and test-road-v33 … v37 (story.js v18.1 + road.js v37); test-band-v2 (the home band's one question). All passing 29 Sept 2026.
- patch-v16 … patch-v181.py, patch-road-v37.py, v17-voice.js, qr.core.js: how each version was made from the one before.
- shoot.js, shoot18.js (phone and desk finish screens), shoot-band.js (the home band). Need playwright and a Chromium.
