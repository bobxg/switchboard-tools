# Calculator tests

Headless-browser checks for the calculators (no build step needed).

```sh
npm install playwright        # once, or point PLAYWRIGHT_PATH at an existing install
node tests/smoke.js           # every page loads without JavaScript errors
node tests/calcs.js           # known-answer checks against hand calculations / AS/NZS 3000 tables
node tests/robust.js          # each calculator survives default and blank inputs
```

`calcs.js` exits non-zero if any check fails. External CDN requests are blocked during the tests so results do not depend on network access.
