const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const ROOT = 'file://' + require('path').resolve(__dirname, '..') + '/';
let pass = 0, fail = 0;
function check(name, cond, info) { if (cond) { pass++; console.log('  ✓', name); } else { fail++; console.log('  ✗', name, info === undefined ? '' : JSON.stringify(info)); } }
const near = (a, b, tol) => Math.abs(a - b) <= (tol === undefined ? Math.abs(b) * 0.01 + 1e-9 : tol);
const num = t => parseFloat(String(t).replace(/[^0-9.\-eE]/g, ''));

async function open(browser, file) {
  const page = await browser.newPage();
  page.errs = [];
  page.on('pageerror', e => page.errs.push(e.message));
  await page.route('**/*', r => r.request().url().startsWith('file://') ? r.continue() : r.abort());
  await page.goto(ROOT + file, { waitUntil: 'load' });
  return page;
}
const setv = (page, vals) => page.evaluate(v => { for (const [k, x] of Object.entries(v)) { const el = document.getElementById(k); el.value = x; el.dispatchEvent(new Event('input')); el.dispatchEvent(new Event('change')); } }, vals);
const txt = (page, id) => page.evaluate(i => document.getElementById(i).textContent, id);

(async () => {
  const browser = await chromium.launch();
  let p;

  console.log('cablesizing');
  p = await open(browser, 'cablesizing.html');
  await setv(p, { loadCurrent: 32, cableLength: 50, powerFactor: 0.9, voltage: 400, cableType: 'cu', insulation: 'x90', installMethod: 'B2', ambientTemp: 40, grouping: 3, voltDropPercent: 5, upstreamVd: 0, parallelRuns: 'auto', faultKA: 0 });
  await p.evaluate(() => calculateCable());
  let r = await p.evaluate(() => lastCableResult);
  check('example → 10 mm²', r && r.label === '10 mm²', r && r.label);
  check('Vd 1.41%', r && near(+r.vdPercent, 1.41, 0.01), r && r.vdPercent);
  check('tempFactor 0.913', r && near(+r.tempFactor, 0.913, 0.001), r && r.tempFactor);
  await setv(p, { grouping: 2 });
  await p.evaluate(() => calculateCable());
  r = await p.evaluate(() => lastCableResult);
  check('2 circuits grouped → 0.80 (was 1.00 off-by-one)', r && r.groupFactor === '0.80', r && r.groupFactor);
  await setv(p, { grouping: 1, loadCurrent: 600, cableLength: 200, installMethod: 'E' });
  await p.evaluate(() => calculateCable());
  r = await p.evaluate(() => lastCableResult);
  check('600 A over 200 m → parallel runs chosen', r && /^\d x /.test(r.label), r && r.label);
  check('...and Vd within 5%', r && +r.vdPercent <= 5, r && r.vdPercent);
  await setv(p, { loadCurrent: 400, cableLength: 150 });
  await p.evaluate(() => calculateCable());
  r = await p.evaluate(() => lastCableResult);
  check('400 A / 150 m tray → single 185 mm² (Vd 3.63%)', r && r.label === '185 mm²' && near(+r.vdPercent, 3.63, 0.02), r && [r.label, r.vdPercent]);
  await setv(p, { parallelRuns: '1', loadCurrent: 600, cableLength: 400 });
  await p.evaluate(() => calculateCable());
  check('impossible case → "No solution" (no silent undersize)', (await txt(p, 'cableSize')) === 'No solution');
  await setv(p, { parallelRuns: 'auto', loadCurrent: 20, cableLength: 10, faultKA: 10, clearTime: 0.1, installMethod: 'C' });
  await p.evaluate(() => calculateCable());
  r = await p.evaluate(() => lastCableResult);
  // S ≥ 10000·√0.1/143 = 22.1 mm² → 25 mm²
  check('short-circuit check drives 25 mm²', r && r.label === '25 mm²' && r.sizedBy === 'Short-circuit withstand', r);
  await setv(p, { faultKA: 0, upstreamVd: 4, loadCurrent: 32, cableLength: 50, installMethod: 'B2', grouping: 3 });
  await p.evaluate(() => calculateCable());
  r = await p.evaluate(() => lastCableResult);
  check('upstream 4% leaves 1% budget → upsized (16 mm²)', r && r.label === '16 mm²' && +r.totalVd <= 5, r && [r.label, r.totalVd]);
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('cableweight');
  p = await open(browser, 'cableweight.html');
  await p.evaluate(() => calculateWeight());
  r = await p.evaluate(() => lastWeightResult);
  check('calculates (was SyntaxError)', r && near(+r.total, +r.wpm * +r.length, 0.02), r);
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('loopimpedance');
  p = await open(browser, 'loopimpedance.html');
  await setv(p, { circuitType: 'final', deviceType: 'mcb_c', deviceRating: '20', supplyZe: 0.35, activeSize: '2.5', earthSize: '2.5', cableLength: 30, cableMaterial: 'cu', cableTemp: '75' });
  await p.evaluate(() => calculate());
  check('Zs = 0.891 Ω', near(num(await txt(p, 'calcZs')), 0.891, 0.002), await txt(p, 'calcZs'));
  check('C20 max = 1.533 Ω (Table 8.1: 1.5)', near(num(await txt(p, 'maxZs')), 1.533, 0.001), await txt(p, 'maxZs'));
  const tbl = await p.evaluate(() => [getMaxZs('mcb_b', 6, 'final').z, getMaxZs('mcb_d', 32, 'final').z, getMaxZs('hrc', 20, 'final').z, getMaxZs('hrc', 63, 'dist').z]);
  check('B6 = 9.6, D32 = 0.6 (rounded), gG20 0.4 s = 2.1, gG63 5 s = 0.9', near(tbl[0], 9.58, 0.01) && near(tbl[1], 0.575, 0.01) && tbl[2] === 2.1 && tbl[3] === 0.9, tbl);
  check('earth-size suggestion shown', (await p.evaluate(() => document.getElementById('earthSuggest').dataset.size)) === '1.5');
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('earthing');
  p = await open(browser, 'earthing.html');
  await setv(p, { soilRes: 100, targetR: 10, electrodeType: 'rod', rodLength: '2.4', rodDia: '15.9', numElectrodes: 1, rodSpacing: 3 });
  await p.evaluate(() => { toggleElectrodeInputs(); calculate(); });
  check('single rod 40.4 Ω', near(num(await txt(p, 'singleR')), 40.4, 0.1), await txt(p, 'singleR'));
  const rods = await p.evaluate(() => [rodsInLine(40.4, 100, 2, 3), rodsNeeded(40.4, 100, 3, 10)]);
  check('2 rods at 3 m ≈ 22.8 Ω, solver finite', near(rods[0], 40.4 * (1 + 100 / (2 * Math.PI * 40.4 * 3)) / 2, 0.01) && rods[1] > 4, rods);
  await setv(p, { electrodeType: 'grid', gridL: 10, gridW: 10, gridSpacing: 3 });
  await p.evaluate(() => { toggleElectrodeInputs(); calculate(); });
  check('grid 10×10 = 5.68 Ω (was 3.75 — missing √π)', near(num(await txt(p, 'singleR')), 5.68, 0.01), await txt(p, 'singleR'));
  await setv(p, { electrodeType: 'strip', stripLength: 20, stripWidth: 25, stripDepth: 0.5 });
  await p.evaluate(() => { toggleElectrodeInputs(); calculate(); });
  check('strip 20 m = 8.32 Ω (was ~17.6)', near(num(await txt(p, 'singleR')), 8.32, 0.01), await txt(p, 'singleR'));
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('busbarsizing');
  p = await open(browser, 'busbarsizing.html');
  await setv(p, { designCurrent: 1600, faultCurrent: 36, faultDuration: '1', barMaterial: 'copper', ambientTemp: 40, maxTemp: '70', enclosure: '0.75', phaseSpacing: 100, supportSpan: 400, busLength: 3, busPF: 0.9 });
  await p.evaluate(() => calculate());
  check('1600 A → 160×10', /160×10/.test(await txt(p, 'resSize')), await txt(p, 'resSize'));
  const k = await p.evaluate(() => kFactor('copper', 70));
  check('k(Cu, 70→200°C) = 134.8 (was 13)', near(k, 134.8, 0.2), k);
  check('force/span reported', num(await txt(p, 'resForce')) > 0 && num(await txt(p, 'resSpan')) > 0);
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('harmonics');
  p = await open(browser, 'harmonics.html');
  await setv(p, { ledQty: 0, vsdQty: 0, itQty: 0, linearKW: 0 });
  await setv(p, { ledQty: 300, ledW: 230 });
  await p.evaluate(() => calculate());
  // pure LED load, I1 = 300·230/(3·230) = 100 A, THD = √(.8²+.55²+.3²+.15²+.08²+.05²) = 103.1%
  check('pure LED THD-I 103%', near(num(await txt(p, 'resTHDI')), 103.1, 0.15), await txt(p, 'resTHDI'));
  check('neutral = 3·√(.8²+.15²)/√(1+THD²) = 1.70×', near(num(await txt(p, 'resNeutral')), 3 * Math.hypot(0.8, 0.15) / Math.sqrt(1 + 1.031 ** 2), 0.01), await txt(p, 'resNeutral'));
  check('K-factor > 1', num((await txt(p, 'resK')).slice(2)) > 1);
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('upssizing');
  p = await open(browser, 'upssizing.html');
  await setv(p, { loadKW: 50, loadPF: 0.9, growthPct: 20, autonomy: '10', battType: 'vrla', redundancy: '2', ambTemp: 25, ageingFactor: 0.8, rechargeHrs: 8, upsPF: '0.9', moduleKVA: '0', dcV: 480 });
  await p.evaluate(() => calculate());
  check('UPS 80 kVA, 2 modules (N+1)', (await txt(p, 'resUPS')) === '80' && /^2/.test(await txt(p, 'resModules')));
  check('Ah = 61.6 (rate 0.45, ageing 0.8)', near(num(await txt(p, 'resAH')), 62, 1), await txt(p, 'resAH'));
  await setv(p, { ambTemp: 15 });
  await p.evaluate(() => calculate());
  check('colder battery needs MORE Ah (was less)', num(await txt(p, 'resAH')) > 62, await txt(p, 'resAH'));
  await setv(p, { ambTemp: 25, upsPF: '0.8', loadPF: 1.0 });
  await p.evaluate(() => calculate());
  check('kW-limited: 60 kW at 0.8 → ≥75 kVA → 80', (await txt(p, 'resUPS')) === '80');
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('gensizing');
  p = await open(browser, 'gensizing.html');
  await p.evaluate(() => calculate());
  check('3×50 kW static → 250 kVA, running governs', (await txt(p, 'resRecKVA')) === '250' && (await txt(p, 'resGovern')) === 'Running load', [await txt(p, 'resRecKVA'), await txt(p, 'resGovern')]);
  await setv(p, { application: 'continuous' });
  await p.evaluate(() => calculate());
  check('continuous duty upsizes (was ignored)', num(await txt(p, 'resRecKVA')) > 250, await txt(p, 'resRecKVA'));
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('maxdemand');
  p = await open(browser, 'maxdemand.html');
  await setv(p, { c1sSock15: 1, c1sSock20: 1 });
  await p.evaluate(() => c1SingleCalc());
  const boost = num(await txt(p, 'c1sSock15A')) + num(await txt(p, 'c1sSock20A'));
  check('15 A + 20 A outlets → +15 A (Note 10), was +25', boost === 15, boost);
  await p.evaluate(() => { document.getElementById('c1Mode').value = 'multi'; c1ToggleMode(); });
  await setv(p, { c1mUnits: 30, c1mPhases: 3, c1mWaterType: 'storage' });
  await p.evaluate(() => c1MultiCalc());
  check('30 units/3φ → n = 10 (Col 4), water 6×10 = 60 A (was 108)', num(await txt(p, 'c1mWaterA')) === 60, await txt(p, 'c1mWaterA'));
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('diversity');
  p = await open(browser, 'diversity.html');
  await p.evaluate(() => calcC4());
  const c4 = await p.evaluate(() => document.getElementById('c4Result').innerText);
  check('Table C4: 322 A × 0.6 = 193.2 A', /193\.2/.test(c4) && /0\.6/.test(c4));
  const pr = await p.evaluate(() => parseRatings('6x20, 32 16'));
  check('rating parser "6x20, 32 16"', pr.length === 8 && pr[0] === 20, pr);
  await setv(p, { numUnits: 20, phases: '3', cookUnits: 20, waterType: 'storage', hvacW: 0, commonA: 0 });
  await p.evaluate(() => calcMultiDwelling());
  const md = await p.evaluate(() => document.getElementById('multiResult').innerText);
  // n=7: light 6.75 + sock 41.25 + cook 2.8×7=19.6 + water 42 = 109.6
  check('C1 multi-unit: 20 units → 109.6 A/phase', /109\.6/.test(md), md.slice(0, 200));
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('discrimination');
  p = await open(browser, 'discrimination.html');
  await setv(p, { upType: 'mccb', upRating: 250, upSetting: 0.5, upInstant: 10, upKA: 36, dnType: 'mcb_c', dnRating: 100, dnInstant: 10, faultLevel: 10 });
  await p.evaluate(() => checkDiscrimination());
  let dr = await p.evaluate(() => document.getElementById('resultContent').innerText);
  check('Ir setting used: 125/100 → ratio 1.3 (was 2.5)', /1\.3:1/.test(dr), dr.slice(0, 300));
  await setv(p, { upSetting: 1, dnRating: 32, faultLevel: 1.5 });
  await p.evaluate(() => checkDiscrimination());
  dr = await p.evaluate(() => document.getElementById('resultContent').innerText);
  check('1.5 kA < 2.0 kA threshold → total selectivity', /Total selectivity/.test(dr));
  await setv(p, { faultLevel: 10 });
  await p.evaluate(() => checkDiscrimination());
  dr = await p.evaluate(() => document.getElementById('resultContent').innerText);
  check('10 kA > threshold → partial selectivity flagged', /Partial selectivity/.test(dr));
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('faultlevel');
  p = await open(browser, 'faultlevel.html');
  await setv(p, { cFactor: '1.00' });
  await p.evaluate(() => calculate());
  const i1 = num(await txt(p, 'resI3ph'));
  await setv(p, { cFactor: '1.10' });
  await p.evaluate(() => calculate());
  const i2 = num(await txt(p, 'resI3ph'));
  check('c_max 1.10 raises MSB Isc by ~4–10%', i2 > i1 * 1.03 && i2 < i1 * 1.10, [i1, i2]);
  const rowsFL = await p.evaluate(() => [...document.querySelectorAll('#summaryBody tr')].map(tr => [...tr.cells].map(c => c.textContent.trim())));
  check('min EF < max EF on every node', rowsFL.slice(1).every(c => parseFloat(c[7]) < parseFloat(c[6])), rowsFL);
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('pvsizing');
  p = await open(browser, 'pvsizing.html');
  await p.evaluate(() => calculateStrings());
  const sr = await p.evaluate(() => document.getElementById('stringResult').innerText);
  check('string window 4 – 11 modules', /4\s*–\s*11/.test(sr), sr.slice(0, 200));
  await p.evaluate(() => calculatePV());
  const sums = await p.evaluate(() => {
    const ann = parseFloat(document.getElementById('annualProduction').textContent);
    return ann;
  });
  check('annual production computed', sums > 0);
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('loadschedule');
  p = await open(browser, 'loadschedule.html');
  const d1 = await p.evaluate(() => document.querySelectorAll('#scheduleBody tr')[0].querySelectorAll('.calc-cell')[1].textContent);
  check('sample row 5000 VA at 90% → 4,500 VA demand', d1 === '4,500', d1);
  const before = num(await txt(p, 'sumImb'));
  await p.evaluate(() => balancePhases());
  const L = await p.evaluate(() => ['sumL1', 'sumL2', 'sumL3'].map(i => parseFloat(document.getElementById(i).textContent)));
  check('balance assigns 1P circuit to a phase', (await p.evaluate(() => [...document.querySelectorAll('#scheduleBody tr')][1].querySelector('select').value)) !== '1P');
  check('phase currents all positive', L.every(x => x > 0), L);
  await p.evaluate(() => { const r = document.querySelectorAll('#scheduleBody tr')[0]; const i = r.querySelectorAll('input'); i[4].value = 0; recalcAll(); });
  check('0% diversity → 0 demand (diversity was never applied)', (await p.evaluate(() => document.querySelectorAll('#scheduleBody tr')[0].querySelectorAll('.calc-cell')[1].textContent)) === '0');
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('cableschedule');
  p = await open(browser, 'cableschedule.html');
  await p.evaluate(() => { const tr = document.querySelector('#scheduleBody tr'); tr.querySelector('.cs-current').value = 50; tr.querySelector('.cs-length').value = 100; recalcVD(); });
  const vd = await p.evaluate(() => document.querySelector('#scheduleBody tr .cs-vd').value);
  check('4C+E 16 mm², 50 A, 100 m → 3.04% (Table C8 1643)', vd === '3.04', vd);
  await p.evaluate(() => { const tr = document.querySelector('#scheduleBody tr'); tr.querySelector('.cs-cores').value = '2×(4C+E 240mm²)'; tr.querySelector('.cs-current').value = 600; tr.querySelector('.cs-length').value = 80; recalcVD(); });
  const vd2 = await p.evaluate(() => document.querySelector('#scheduleBody tr .cs-vd').value);
  check('parallel 2×240 parsed and calculated', parseFloat(vd2) > 0 && parseFloat(vd2) < 3, vd2);
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('emergencylighting');
  p = await open(browser, 'emergencylighting.html');
  await setv(p, { areaType: 'escape', calcMode: 'class', classification: 'D40', mountHeight: 2.7 });
  await p.evaluate(() => calculateSpacing());
  check('D40 @ 2.7 m → 17.7 m from table (was ×1.25 = 22.1)', near(num(await txt(p, 'maxSpacing')), 17.7, 0.05), await txt(p, 'maxSpacing'));
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('rcdselect');
  p = await open(browser, 'rcdselect.html');
  await setv(p, { circuitType: 'lighting', location: 'commercial', circuitRating: '20' });
  await p.evaluate(() => selectRCD());
  const rc = await p.evaluate(() => document.querySelector('#resultSection .result-value').textContent);
  check('commercial lighting ≤32 A → RCD YES (was not mandatory)', rc === 'YES', rc);
  await setv(p, { circuitType: 'gpo', location: 'commercial', circuitRating: '32' });
  await p.evaluate(() => selectRCD());
  check('commercial 32 A sockets → YES (was not mandatory >20 A)', (await p.evaluate(() => document.querySelector('#resultSection .result-value').textContent)) === 'YES');
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('switchroom');
  p = await open(browser, 'switchroom.html');
  await setv(p, { eqType: 'MSB' });
  await p.evaluate(() => { applyDefaults(); document.getElementById('eqW').value = 2400; addEquip(); });
  await setv(p, { msbRating: 1000 });
  const w = await p.evaluate(() => document.getElementById('srWarnings').innerText);
  check('2.4 m MSB at 1000 A → two exits (was missed)', /Two exit paths required/.test(w), w.slice(0, 120));
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('pfcsizing');
  p = await open(browser, 'pfcsizing.html');
  await setv(p, { voltage: '415' });
  await p.evaluate(() => calculate());
  const det = await p.evaluate(() => document.getElementById('details').innerText);
  check('current reduction uses 415 V', /at 415 V/.test(det));
  const m = det.match(/(\d+) steps × ([\d.]+) kVAr = ([\d.]+) kVAr/);
  check('stepped bank ≥ required kVAr', m && +m[3] >= num(await txt(p, 'resKVAr')) - 0.5, m && m[0]);
  check('no page errors', p.errs.length === 0, p.errs); await p.close();

  console.log('conduit');
  p = await open(browser, 'conduit.html');
  const ff = await p.evaluate(() => [getFillPercentage(1), getFillPercentage(2), getFillPercentage(5)]);
  check('space factors 0.5 / 0.33 / 0.4 (AS/NZS 3000 C6.2)', ff.join() === '0.5,0.33,0.4', ff);
  await p.close();

  await browser.close();
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
