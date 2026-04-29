/* ========================================
   OMNI — Shared Utilities Module
   Common functions for all tools
   ======================================== */

// ─── Centralised Navigation ─────────────────────────────────
const OmniNav = {
  // Define all navigation items in ONE place.
  // To add a new page: just add an entry here — every page updates automatically.
  structure: [
    { label: 'Home', href: 'index.html' },
    { label: 'Switchboard Sizer', href: 'switchboard.html' },
    { label: 'Switchroom Sizer', href: 'switchroom.html' },
    { label: 'Cable Tray Sizer', href: 'cabletraysizing.html' },
    { label: 'Lighting Search', href: 'lightingsearch.html' },
    { label: 'Power Systems', children: [
      { label: 'Meter Panel Sizer', href: 'meterpanel.html' },
      { label: 'Cable Sizing', href: 'cablesizing.html' },
      { label: 'Cable Weight', href: 'cableweight.html' },
      { label: 'Maximum Demand', href: 'maxdemand.html' },
      { label: 'Diversity Factors', href: 'diversity.html' },
      { label: 'Fault Level', href: 'faultlevel.html' },
      { label: 'Loop Impedance', href: 'loopimpedance.html' },
      { label: 'Discrimination Check', href: 'discrimination.html' },
      { label: 'Transformer Sizing', href: 'txsizing.html' },
      { label: 'Generator Sizing', href: 'gensizing.html' },
      { label: 'UPS Sizing', href: 'upssizing.html' },
      { label: 'PV Sizing', href: 'pvsizing.html' },
      { label: 'PFC Sizing', href: 'pfcsizing.html' },
      { label: 'Harmonics Analysis', href: 'harmonics.html' },
      { label: 'Busbar Sizing', href: 'busbarsizing.html' },
      { label: 'CT Sizing', href: 'ctsizing.html' },
      { label: 'Earthing Calculator', href: 'earthing.html' }
    ]},
    { label: 'Protection & Containment', children: [
      { label: 'RCD Selector', href: 'rcdselect.html' },
      { label: 'SPD Sizing', href: 'spdsizing.html' },
      { label: 'IP/IK Rating Guide', href: 'iprating.html' },
      { label: 'Conduit Sizer', href: 'conduit.html' }
    ]},
    { label: 'Lighting & Fire', children: [
      { label: 'Lux Calculator', href: 'luxcalc.html' },
      { label: 'Lux Levels Reference', href: 'luxlevels.html' },
      { label: 'Emergency Lighting', href: 'emergencylighting.html' },
      { label: 'Fire Interface Matrix', href: 'fireinterface.html' },
      { label: 'Smoke Control', href: 'smokecontrol.html' },
      { label: 'Essential Services', href: 'essentialservices.html' }
    ]},
    { label: 'Documentation', children: [
      { label: 'Load Schedule', href: 'loadschedule.html' },
      { label: 'Cable Schedule', href: 'cableschedule.html' },
      { label: 'Design Certificate', href: 'designcert.html' },
      { label: 'T&C Checklists', href: 'tcommissioning.html' },
      { label: 'Site Inspection', href: 'inspection.html' },
      { label: 'Single Line Diagram', href: 'sld.html' },
      { label: 'AS3000 Tips', href: 'as3000tips.html' }
    ]},
    { label: 'AS/NZS 3000', href: 'as3000viewer.html' },
    { label: 'NSW IR', href: 'nswirviewer.html' },
    { label: 'Verification', href: 'qa.html' }
  ],

  init() {
    const nav = document.querySelector('.top-tabs');
    if (!nav) return;
    // Only inject if the nav is empty (placeholder) or has no tab links yet
    if (nav.querySelector('.tab')) return;
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    nav.innerHTML = this._buildHTML(currentPage);
  },

  _buildHTML(currentPage) {
    return this.structure.map(item => {
      if (item.children) {
        // Dropdown menu — mark active if current page is one of the children
        const isActive = item.children.some(c => c.href === currentPage);
        const links = item.children.map(c =>
          '<a href="' + c.href + '">' + c.label + '</a>'
        ).join('');
        return '<div class="tab has-dropdown' + (isActive ? ' active' : '') + '">' +
               '<span>' + item.label + '</span>' +
               '<div class="dropdown-content">' + links + '</div></div>';
      } else {
        // Single tab link
        const isActive = item.href === currentPage;
        return '<a class="tab' + (isActive ? ' active' : '') + '" href="' + item.href + '">' + item.label + '</a>';
      }
    }).join('');
  }
};

// ─── Dark Mode ───────────────────────────────────────────────
const OmniTheme = {
  init() {
    const saved = localStorage.getItem('omni-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    this.injectToggle();
  },
  injectToggle() {
    const nav = document.querySelector('.top-tabs');
    if (!nav) return;
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.setAttribute('title', 'Toggle dark/light mode');
    btn.innerHTML = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem('omni-theme', isDark ? 'light' : 'dark');
      btn.innerHTML = isDark ? '🌙' : '☀️';
    });
    nav.appendChild(btn);
  }
};

// ─── LocalStorage Persistence ────────────────────────────────
const OmniStore = {
  _key(page) { return 'omni-' + (page || OmniStore._pageKey()); },
  _pageKey() { return location.pathname.split('/').pop().replace('.html', ''); },

  save(data, page) {
    try {
      localStorage.setItem(this._key(page), JSON.stringify({ ts: Date.now(), data }));
      OmniToast.show('Progress saved');
    } catch (e) { console.warn('Save failed:', e); }
  },
  load(page) {
    try {
      const raw = localStorage.getItem(this._key(page));
      if (!raw) return null;
      return JSON.parse(raw).data;
    } catch (e) { return null; }
  },
  clear(page) {
    localStorage.removeItem(this._key(page));
    OmniToast.show('Saved data cleared');
  },
  autoSaveForm(formSelector, page) {
    const form = document.querySelector(formSelector || 'form') || document.querySelector('.main-content, .calculator-container');
    if (!form) return;
    const inputs = form.querySelectorAll('input, select, textarea');
    const saved = this.load(page);
    if (saved) {
      inputs.forEach(el => {
        if (el.id && saved[el.id] !== undefined) {
          if (el.type === 'checkbox') el.checked = saved[el.id];
          else el.value = saved[el.id];
        }
      });
    }
    const saveState = OmniUtils.debounce(() => {
      const state = {};
      inputs.forEach(el => {
        if (el.id) state[el.id] = el.type === 'checkbox' ? el.checked : el.value;
      });
      try { localStorage.setItem(this._key(page), JSON.stringify({ ts: Date.now(), data: state })); } catch(e) {}
    }, 1000);
    inputs.forEach(el => {
      el.addEventListener('input', saveState);
      el.addEventListener('change', saveState);
    });
  },
  injectSaveLoadButtons(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      const firstSection = document.querySelector('.calc-section, .main-content');
      if (!firstSection) return;
      const bar = document.createElement('div');
      bar.className = 'omni-action-bar';
      bar.innerHTML = `
        <button class="omni-btn omni-btn-save" onclick="OmniStore.saveCurrentForm()" title="Save to browser (Ctrl+S)">Save</button>
        <button class="omni-btn omni-btn-load" onclick="OmniStore.loadCurrentForm()" title="Load saved data">Load</button>
        <button class="omni-btn omni-btn-clear" onclick="if(confirm('Clear saved data?')) OmniStore.clear()" title="Clear saved data">Clear</button>
      `;
      firstSection.parentNode.insertBefore(bar, firstSection);
    }
  },
  saveCurrentForm() {
    const inputs = document.querySelectorAll('input, select, textarea');
    const state = {};
    inputs.forEach(el => {
      if (el.id) state[el.id] = el.type === 'checkbox' ? el.checked : el.value;
    });
    this.save(state);
  },
  loadCurrentForm() {
    const data = this.load();
    if (!data) { OmniToast.show('No saved data found', 'warn'); return; }
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(el => {
      if (el.id && data[el.id] !== undefined) {
        if (el.type === 'checkbox') el.checked = data[el.id];
        else el.value = data[el.id];
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
    OmniToast.show('Data loaded');
  }
};

// ─── Toast Notifications ─────────────────────────────────────
const OmniToast = {
  show(message, type = 'info', duration = 2500) {
    let container = document.getElementById('omni-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'omni-toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'omni-toast omni-toast-' + type;
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// ─── Input Validation ────────────────────────────────────────
const OmniValidate = {
  parseNum(id, defaultVal = 0) {
    const el = document.getElementById(id);
    if (!el) return defaultVal;
    const v = parseFloat(el.value);
    if (isNaN(v)) {
      el.classList.add('input-error');
      return defaultVal;
    }
    el.classList.remove('input-error');
    return v;
  },
  required(id, label) {
    const el = document.getElementById(id);
    if (!el) return false;
    const val = el.value.trim();
    if (!val || (el.type === 'number' && isNaN(parseFloat(val)))) {
      el.classList.add('input-error');
      OmniToast.show((label || id) + ' is required', 'warn');
      el.focus();
      return false;
    }
    el.classList.remove('input-error');
    return true;
  },
  range(id, min, max, label) {
    const v = this.parseNum(id);
    if (v < min || v > max) {
      const el = document.getElementById(id);
      if (el) el.classList.add('input-error');
      OmniToast.show((label || id) + ' must be between ' + min + ' and ' + max, 'warn');
      return false;
    }
    return true;
  },
  clearErrors() {
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
  }
};

// ─── CSV Export ──────────────────────────────────────────────
const OmniExport = {
  toCSV(headers, rows, filename) {
    const escape = v => '"' + String(v).replace(/"/g, '""') + '"';
    let csv = headers.map(escape).join(',') + '\n';
    rows.forEach(row => { csv += row.map(escape).join(',') + '\n'; });
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (filename || 'export') + '.csv';
    a.click();
    URL.revokeObjectURL(a.href);
    OmniToast.show('CSV exported');
  },
  tableToCSV(tableSelector, filename) {
    const table = document.querySelector(tableSelector);
    if (!table) return;
    const headers = [];
    const rows = [];
    table.querySelectorAll('thead th, thead td').forEach(th => headers.push(th.textContent.trim()));
    table.querySelectorAll('tbody tr').forEach(tr => {
      const row = [];
      tr.querySelectorAll('td').forEach(td => {
        const input = td.querySelector('input, select');
        row.push(input ? input.value : td.textContent.trim());
      });
      rows.push(row);
    });
    this.toCSV(headers, rows, filename);
  },
  resultToText(resultBoxId) {
    const box = document.getElementById(resultBoxId);
    if (!box) return '';
    return box.innerText;
  }
};

// ─── Tooltips ────────────────────────────────────────────────
const OmniTips = {
  init() {
    document.querySelectorAll('[data-tip]').forEach(el => {
      const tip = document.createElement('span');
      tip.className = 'omni-tooltip';
      tip.textContent = el.getAttribute('data-tip');
      el.style.position = 'relative';
      el.appendChild(tip);
    });
  },
  add(elementId, text) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const parent = el.closest('.input-group') || el.parentElement;
    if (parent) {
      parent.setAttribute('data-tip', text);
      parent.style.position = 'relative';
      const tip = document.createElement('span');
      tip.className = 'omni-tooltip';
      tip.textContent = text;
      parent.appendChild(tip);
    }
  }
};

// ─── Keyboard Shortcuts ──────────────────────────────────────
const OmniKeys = {
  init() {
    document.addEventListener('keydown', (e) => {
      // Ctrl+S: Save
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        OmniStore.saveCurrentForm();
      }
      // Ctrl+Enter: Calculate
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        const calcBtn = document.querySelector('.calc-button');
        if (calcBtn) calcBtn.click();
      }
      // Ctrl+P: Print
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
      }
    });
  }
};

// ─── General Utilities ───────────────────────────────────────
const OmniUtils = {
  debounce(fn, ms) {
    let timer;
    return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
  },
  selectNextStandard(value, sizes) {
    for (const s of sizes) if (s >= value) return s;
    return sizes[sizes.length - 1];
  },
  round(value, decimals = 2) {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  },
  formatNumber(value, decimals = 1) {
    if (isNaN(value)) return '—';
    return value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  },
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => OmniToast.show('Copied to clipboard'));
  }
};

// ─── Accessibility ───────────────────────────────────────────
const OmniA11y = {
  init() {
    // Add role="main" to content areas
    const main = document.querySelector('.main-content, .calculator-container');
    if (main && !main.getAttribute('role')) main.setAttribute('role', 'main');

    // Add aria-labels to nav
    const nav = document.querySelector('.top-tabs');
    if (nav) { nav.setAttribute('role', 'navigation'); nav.setAttribute('aria-label', 'Main navigation'); }

    // Label all inputs that don't have aria-label
    document.querySelectorAll('input, select, textarea').forEach(el => {
      if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) {
        const label = el.closest('.input-group')?.querySelector('label');
        if (label) {
          if (!el.id) el.id = 'input-' + Math.random().toString(36).slice(2, 8);
          label.setAttribute('for', el.id);
        }
      }
    });

    // Make dropdowns keyboard-accessible
    document.querySelectorAll('.tab.has-dropdown').forEach(tab => {
      tab.setAttribute('tabindex', '0');
      tab.setAttribute('aria-haspopup', 'true');
      tab.setAttribute('aria-expanded', 'false');
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const dd = tab.querySelector('.dropdown-content');
          const expanded = tab.getAttribute('aria-expanded') === 'true';
          tab.setAttribute('aria-expanded', !expanded);
          if (dd) dd.style.display = expanded ? 'none' : 'block';
        }
      });
    });
  }
};

// ─── Print Enhancement ───────────────────────────────────────
const OmniPrint = {
  addPrintButton(containerId) {
    const target = document.getElementById(containerId) || document.querySelector('.calc-section');
    if (!target) return;
    const existing = target.querySelector('.omni-print-btn');
    if (existing) return;
    const btn = document.createElement('button');
    btn.className = 'omni-btn omni-print-btn';
    btn.innerHTML = 'Print';
    btn.title = 'Print this page (Ctrl+P)';
    btn.addEventListener('click', () => window.print());
    const bar = target.closest('.main-content, .calculator-container')?.querySelector('.omni-action-bar');
    if (bar) bar.appendChild(btn);
  }
};

// ─── Auto-Initialize ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  OmniNav.init();
  OmniTheme.init();
  OmniKeys.init();
  OmniA11y.init();
  OmniTips.init();
  // Auto-save forms on calculator pages
  const isCalcPage = document.querySelector('.calc-section, .calculator-container');
  if (isCalcPage) {
    OmniStore.autoSaveForm();
    OmniStore.injectSaveLoadButtons();
    OmniPrint.addPrintButton();
  }
});
