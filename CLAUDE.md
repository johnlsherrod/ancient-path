# Ancient Path — shared code

This repository holds the code for ancientpathcoaching.com and the Ancient Path platform.
It is public: never commit keys, participant writing, paid course content or anyone's personal details.

## How pages load this code
- Page scripts (story.js, road.js, stone.js and the rest) are served from jsDelivr, pinned by the full 40-character commit hash:
  `https://cdn.jsdelivr.net/gh/johnlsherrod/ancient-path@<full commit sha>/<file>`
- A page that loads a script with an integrity hash needs the new hash with every new version:
  `openssl dgst -sha384 -binary <file> | openssl base64 -A`
- Never rely on a short hash or a release tag alone; both have served stale files before.

## Folders
- `pages/` — copies of live page blocks
- `scripts/` — Apps Script sources (FrontDesk.gs and others)
- `pictures/` — blog pictures; a picture file is never replaced, a re-cut gets a new name

## Working rules
- Every build carries a build number in the file's header and in the commit message.
- Change only what the request names; never rename or move a file a live page loads.
- Copy a person reads is plain, encouraging and American English; never "brother", never "the next man".
