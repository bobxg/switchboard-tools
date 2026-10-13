const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const path = require('path');
const fs = require('fs');
const ROOT = require('path').resolve(__dirname, '..');
(async () => {
  const browser = await chromium.launch();
  const pages = fs.readdirSync(ROOT).filter(f => f.endsWith('.html') && !f.startsWith('AS3000'));
  let bad = 0;
  for (const f of pages) {
    const page = await browser.newPage();
    const errs = [];
    page.on('pageerror', e => errs.push('pageerror: ' + e.message));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|net::/.test(m.text())) errs.push('console: ' + m.text()); });
    await page.route('**/*', r => { const u = r.request().url(); if (u.startsWith('file://')) r.continue(); else r.abort(); });
    try { await page.goto('file://' + path.join(ROOT, f), { waitUntil: 'load', timeout: 15000 }); } catch (e) { errs.push('goto: ' + e.message); }
    await page.waitForTimeout(150);
    if (errs.length) { bad++; console.log('FAIL', f, errs.slice(0, 5)); } else console.log('ok  ', f);
    await page.close();
  }
  await browser.close();
  console.log(bad ? bad + ' page(s) with errors' : 'all pages load cleanly');
})();
