const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
// Run each calculator with its defaults, then with every numeric input blanked, and report exceptions
const CASES = {
  'cablesizing.html': 'calculateCable', 'cableweight.html': 'calculateWeight', 'loopimpedance.html': 'calculate',
  'earthing.html': 'calculate', 'busbarsizing.html': 'calculate', 'harmonics.html': 'calculate', 'upssizing.html': 'calculate',
  'gensizing.html': 'calculate', 'pfcsizing.html': 'calculate', 'discrimination.html': 'checkDiscrimination',
  'faultlevel.html': 'calculate', 'pvsizing.html': 'calculateStrings', 'diversity.html': 'calcC4',
  'cabletraysizing.html': 'calculateTray', 'txsizing.html': 'calculate', 'ctsizing.html': 'calculate',
  'luxcalc.html': 'calculate', 'smokecontrol.html': 'calculate', 'rcdselect.html': 'selectRCD', 'spdsizing.html': 'assessRisk',
  'emergencylighting.html': 'calculateSpacing', 'loadschedule.html': 'recalcAll', 'cableschedule.html': 'recalcVD'
};
(async () => {
  const b = await chromium.launch();
  for (const [f, fn] of Object.entries(CASES)) {
    const p = await b.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await p.route('**/*', r => r.request().url().startsWith('file://') ? r.continue() : r.abort());
    await p.goto('file://' + require('path').resolve(__dirname, '..', f));
    const out = await p.evaluate(fn => {
      const res = {};
      try { window[fn](); res.defaults = 'ok'; } catch (e) { res.defaults = e.message; }
      document.querySelectorAll('input[type=number]').forEach(i => i.value = '');
      try { window[fn](); res.blank = 'ok'; } catch (e) { res.blank = e.message; }
      res.nan = /NaN|undefined/.test(document.body.innerText.replace(/\bundefined\b(?= behaviour)/g, '')) ? 'NaN shown' : 'clean';
      return res;
    }, fn);
    console.log(f.padEnd(24), JSON.stringify(out), errs.length ? errs : '');
    await p.close();
  }
  await b.close();
})();
