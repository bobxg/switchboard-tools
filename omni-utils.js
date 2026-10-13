/* ========================================
   OMNI — Shared Utilities Module
   Common functions for all tools
   ======================================== */

// ─── Icon Set (inline SVG, stroke = currentColor) ───────────
const OmniIcons = {
  defs: {
    bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
    cable: '<path d="M2 17c3 0 3-10 7-10s3 10 7 10 3-5 6-5"/><circle cx="2" cy="17" r="1"/><circle cx="22" cy="12" r="1"/>',
    chart: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    loop: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    transformer: '<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>',
    power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>',
    battery: '<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="10" y1="10" x2="10" y2="14"/>',
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    capacitor: '<line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/>',
    wave: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    busbar: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/><line x1="8" y1="7" x2="8" y2="12"/><line x1="16" y1="12" x2="16" y2="17"/>',
    ct: '<circle cx="12" cy="12" r="7"/><line x1="12" y1="2" x2="12" y2="22"/>',
    earth: '<line x1="12" y1="3" x2="12" y2="10"/><line x1="5" y1="10" x2="19" y2="10"/><line x1="7.5" y1="14.5" x2="16.5" y2="14.5"/><line x1="10" y1="19" x2="14" y2="19"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
    conduit: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
    bulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4.1 12.74c.66.52 1.1 1.3 1.1 2.26h6c0-.96.44-1.74 1.1-2.26A7 7 0 0 0 12 2z"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    alertCircle: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    flame: '<path d="M12 22c4.4 0 7-2.8 7-7 0-3-2-5.6-3.5-7C14.3 10.2 13 11 12 11c.3-3-1-6.5-3-9-1 3.5-5 7-5 13 0 4.2 2.6 7 8 7z"/>',
    wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/>',
    clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
    table: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="3" x2="9" y2="21"/>',
    fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    checkSquare: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    sld: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    bookOpen: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    gauge: '<path d="M12 15l3.5-5.5"/><path d="M20.49 15a9 9 0 1 0-16.98 0"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="11" x2="8" y2="11.01"/><line x1="12" y1="11" x2="12" y2="11.01"/><line x1="16" y1="11" x2="16" y2="11.01"/><line x1="8" y1="15" x2="8" y2="15.01"/><line x1="12" y1="15" x2="12" y2="15.01"/><line x1="16" y1="15" x2="16" y2="15.01"/><line x1="8" y1="19" x2="16" y2="19"/>',
    printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    arrowUp: '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
  },
  get(name, size) {
    const inner = this.defs[name] || this.defs.bolt;
    const s = size || 16;
    return '<svg class="oi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' + s + '" height="' + s +
           '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
           inner + '</svg>';
  }
};

// ─── Centralised Navigation ─────────────────────────────────
const OmniNav = {
  // Define all navigation items in ONE place.
  // To add a new page: just add an entry here — every page updates automatically.
  structure: [
    { label: 'Home', href: 'index.html', icon: 'home' },
    { label: 'Switchboard Sizer', href: 'switchboard.html', icon: 'grid' },
    { label: 'Switchroom Sizer', href: 'switchroom.html', icon: 'box' },
    { label: 'Cable Tray Sizer', href: 'cabletraysizing.html', icon: 'layers' },
    { label: 'Lighting Search', href: 'lightingsearch.html', icon: 'search' },
    { label: 'Power', children: [
      { label: 'Meter Panel Sizer', href: 'meterpanel.html', icon: 'gauge' },
      { label: 'Cable Sizing', href: 'cablesizing.html', icon: 'cable' },
      { label: 'Cable Weight', href: 'cableweight.html', icon: 'layers' },
      { label: 'Maximum Demand', href: 'maxdemand.html', icon: 'chart' },
      { label: 'Diversity Factors', href: 'diversity.html', icon: 'sliders' },
      { label: 'Fault Level', href: 'faultlevel.html', icon: 'alert' },
      { label: 'Loop Impedance', href: 'loopimpedance.html', icon: 'loop' },
      { label: 'Discrimination Check', href: 'discrimination.html', icon: 'filter' },
      { label: 'Transformer Sizing', href: 'txsizing.html', icon: 'transformer' },
      { label: 'Generator Sizing', href: 'gensizing.html', icon: 'power' },
      { label: 'UPS Sizing', href: 'upssizing.html', icon: 'battery' },
      { label: 'PV Sizing', href: 'pvsizing.html', icon: 'sun' },
      { label: 'PFC Sizing', href: 'pfcsizing.html', icon: 'capacitor' },
      { label: 'Harmonics Analysis', href: 'harmonics.html', icon: 'wave' },
      { label: 'Busbar Sizing', href: 'busbarsizing.html', icon: 'busbar' },
      { label: 'CT Sizing', href: 'ctsizing.html', icon: 'ct' },
      { label: 'Earthing Calculator', href: 'earthing.html', icon: 'earth' },
      { label: 'RCD Selector', href: 'rcdselect.html', icon: 'shield' },
      { label: 'SPD Sizing', href: 'spdsizing.html', icon: 'bolt' },
      { label: 'IP/IK Rating Guide', href: 'iprating.html', icon: 'droplet' },
      { label: 'Conduit Sizer', href: 'conduit.html', icon: 'conduit' }
    ]},
    { label: 'Lighting', children: [
      { label: 'Lux Calculator', href: 'luxcalc.html', icon: 'bulb' },
      { label: 'Lux Levels Reference', href: 'luxlevels.html', icon: 'book' },
      { label: 'Emergency Lighting', href: 'emergencylighting.html', icon: 'alertCircle' },
      { label: 'Fire Interface Matrix', href: 'fireinterface.html', icon: 'flame' },
      { label: 'Smoke Control', href: 'smokecontrol.html', icon: 'wind' },
      { label: 'Essential Services', href: 'essentialservices.html', icon: 'clipboard' }
    ]},
    { label: 'Documentation', children: [
      { label: 'Load Schedule', href: 'loadschedule.html', icon: 'table' },
      { label: 'Cable Schedule', href: 'cableschedule.html', icon: 'fileText' },
      { label: 'Design Certificate', href: 'designcert.html', icon: 'award' },
      { label: 'T&C Checklists', href: 'tcommissioning.html', icon: 'checkSquare' },
      { label: 'Site Inspection', href: 'inspection.html', icon: 'eye' },
      { label: 'Single Line Diagram', href: 'sld.html', icon: 'sld' },
      { label: 'AS3000 Tips', href: 'as3000tips.html', icon: 'info' },
      { label: 'Verification', href: 'qa.html', icon: 'checkCircle' }
    ]},
    { label: 'AS/NZS 3000', href: 'as3000viewer.html', icon: 'bookOpen' },
    { label: 'NSW IR', href: 'nswirviewer.html', icon: 'book' }
  ],

  // Flat lookup: href -> { label, icon, group }
  flatMap() {
    const map = {};
    this.structure.forEach(item => {
      if (item.children) {
        item.children.forEach(c => { map[c.href] = { label: c.label, icon: c.icon, group: item.label }; });
      } else if (item.href) {
        map[item.href] = { label: item.label, icon: item.icon, group: null };
      }
    });
    return map;
  },

  currentPage() {
    return location.pathname.split('/').pop() || 'index.html';
  },

  init() {
    const nav = document.querySelector('.top-tabs');
    if (!nav) return;
    // Only inject if the nav is empty (placeholder) or has no tab links yet
    if (nav.querySelector('.tab')) return;
    nav.innerHTML = this._buildHTML(this.currentPage());
  },

  _buildHTML(currentPage) {
    const brand = '<a class="nav-brand" href="index.html" aria-label="OMNI home">' +
                  OmniIcons.get('bolt', 18) + '<span>OMNI</span></a>';
    return brand + this.structure.map(item => {
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

// ─── Head Meta (favicon, theme colour, description) ─────────
const OmniMeta = {
  init() {
    const head = document.head;
    if (!head.querySelector('link[rel="icon"], link[rel="shortcut icon"]')) {
      const ico = document.createElement('link');
      ico.rel = 'icon';
      ico.href = 'icon.ico';
      head.appendChild(ico);
      const png = document.createElement('link');
      png.rel = 'apple-touch-icon';
      png.href = 'icon.png';
      head.appendChild(png);
    }
    if (!head.querySelector('meta[name="theme-color"]')) {
      const tc = document.createElement('meta');
      tc.name = 'theme-color';
      tc.content = '#0b1121';
      head.appendChild(tc);
    }
    if (!head.querySelector('meta[name="description"]')) {
      const d = document.createElement('meta');
      d.name = 'description';
      d.content = 'OMNI — electrical engineering calculators and references aligned with AS/NZS standards.';
      head.appendChild(d);
    }
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

// ─── Favorites & Recently Used ───────────────────────────────
const OmniFav = {
  KEY: 'omni-favs',
  RKEY: 'omni-recents',
  list() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; } catch (e) { return []; }
  },
  isFav(href) { return this.list().indexOf(href) !== -1; },
  toggle(href) {
    let favs = this.list();
    if (favs.indexOf(href) !== -1) {
      favs = favs.filter(h => h !== href);
      OmniToast.show('Removed from favourites');
    } else {
      favs.push(href);
      OmniToast.show('Added to favourites', 'success');
    }
    try { localStorage.setItem(this.KEY, JSON.stringify(favs)); } catch (e) {}
    return favs.indexOf(href) !== -1;
  },
  recents() {
    try { return JSON.parse(localStorage.getItem(this.RKEY)) || []; } catch (e) { return []; }
  },
  trackVisit(href) {
    if (!href || href === 'index.html') return;
    let r = this.recents().filter(h => h !== href);
    r.unshift(href);
    r = r.slice(0, 8);
    try { localStorage.setItem(this.RKEY, JSON.stringify(r)); } catch (e) {}
  }
};

// ─── Page Type Helpers ──────────────────────────────────────
const OmniPage = {
  VIEWERS: ['as3000viewer.html', 'nswirviewer.html'],
  isViewer() { return this.VIEWERS.indexOf(OmniNav.currentPage()) !== -1; },
  container() {
    return document.querySelector(
      '.main-content, .calculator-container, .calc-container, .tips-container, ' +
      '.qa-container, .inspection-container, .search-container, .container'
    );
  }
};

// ─── Page Header Band (breadcrumb + actions) ────────────────
const OmniHeader = {
  init() {
    const page = OmniNav.currentPage();
    if (page === 'index.html' || OmniPage.isViewer()) return; // home has its own hero; viewers are full-screen
    const container = OmniPage.container();
    const nav = document.querySelector('.top-tabs');
    if (!container && !nav) return;

    const info = OmniNav.flatMap()[page];
    OmniFav.trackVisit(page);

    const band = document.createElement('div');
    band.className = 'page-band';

    let crumbs = '<nav class="crumbs" aria-label="Breadcrumb">' +
                 '<a href="index.html">' + OmniIcons.get('home', 13) + ' OMNI</a>';
    if (info) {
      if (info.group) crumbs += '<span class="crumb-sep">/</span><span>' + info.group + '</span>';
      crumbs += '<span class="crumb-sep">/</span><strong>' +
                (info.icon ? OmniIcons.get(info.icon, 13) + ' ' : '') + info.label + '</strong>';
    } else {
      crumbs += '<span class="crumb-sep">/</span><strong>' + (document.title.split(' - ')[0] || page) + '</strong>';
    }
    crumbs += '</nav>';

    const fav = OmniFav.isFav(page);
    band.innerHTML = crumbs +
      '<div class="band-actions">' +
      '<button type="button" class="band-btn band-fav' + (fav ? ' is-fav' : '') + '" title="' + (fav ? 'Remove from favourites' : 'Add to favourites') + '" aria-label="Toggle favourite">' + OmniIcons.get('star', 15) + '</button>' +
      '<button type="button" class="band-btn" data-act="calc" title="Quick Calc (Ctrl+K)" aria-label="Open quick calculator">' + OmniIcons.get('calc', 15) + '</button>' +
      '<button type="button" class="band-btn" data-act="print" title="Print (Ctrl+P)" aria-label="Print page">' + OmniIcons.get('printer', 15) + '</button>' +
      '</div>';

    band.querySelector('.band-fav').addEventListener('click', function () {
      const on = OmniFav.toggle(page);
      this.classList.toggle('is-fav', on);
      this.title = on ? 'Remove from favourites' : 'Add to favourites';
    });
    band.querySelector('[data-act="calc"]').addEventListener('click', () => OmniQuickCalc.toggle());
    band.querySelector('[data-act="print"]').addEventListener('click', () => window.print());

    if (container) container.parentNode.insertBefore(band, container);
    else nav.insertAdjacentElement('afterend', band);
  }
};

// ─── Footer ──────────────────────────────────────────────────
const OmniFooter = {
  init() {
    if (document.querySelector('.omni-footer')) return;
    if (OmniPage.isViewer()) return; // skip full-screen viewers
    const f = document.createElement('footer');
    f.className = 'omni-footer';
    f.innerHTML =
      '<div class="footer-inner">' +
        '<div class="footer-col">' +
          '<div class="footer-brand">' + OmniIcons.get('bolt', 15) + ' OMNI</div>' +
          '<div>Electrical engineering tools aligned with AS/NZS 3000:2018, 3008.1.1, 61439, 2293 &amp; 1680.</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<a href="as3000viewer.html">AS/NZS 3000 Viewer</a>' +
          '<a href="nswirviewer.html">NSW Service &amp; Installation Rules</a>' +
          '<a href="qa.html">Calculation Verification</a>' +
          '<a href="as3000tips.html">AS3000 Quick Tips</a>' +
        '</div>' +
        '<div class="footer-col footer-note">' +
          '<div>Guidance only &mdash; always verify designs against the current editions of the relevant standards.</div>' +
          '<div>&copy; ' + new Date().getFullYear() + ' &middot; Internal use &middot; <span class="omni-shortcut">Ctrl+K</span> Quick Calc</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(f);
  }
};

// ─── Back To Top ─────────────────────────────────────────────
const OmniBackTop = {
  init() {
    if (OmniPage.isViewer()) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'omni-backtop';
    btn.title = 'Back to top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = OmniIcons.get('arrowUp', 18);
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(btn);
    const onScroll = () => btn.classList.toggle('show', window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
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
  },
  // True when every visible number input (optionally within a container) holds a number;
  // otherwise highlights the empty fields, focuses the first and shows one toast.
  requireAll(scope) {
    const root = (typeof scope === 'string' ? document.querySelector(scope) : scope) || document;
    const bad = [...root.querySelectorAll('input[type=number]')]
      .filter(el => el.offsetParent !== null && !el.disabled && !el.readOnly && !el.hasAttribute('data-optional'))
      .filter(el => !Number.isFinite(parseFloat(el.value)));
    root.querySelectorAll('input[type=number]').forEach(el => el.classList.remove('input-error'));
    if (!bad.length) return true;
    bad.forEach(el => el.classList.add('input-error'));
    bad[0].focus();
    const lbl = bad[0].id && document.querySelector('label[for="' + bad[0].id + '"]');
    OmniToast.show((lbl ? lbl.textContent.trim() : 'A required field') + (bad.length > 1 ? ' and ' + (bad.length - 1) + ' other field(s) need' : ' needs') + ' a value', 'warn');
    return false;
  }
};

// ─── CSV Export ──────────────────────────────────────────────
const OmniExport = {
  toCSV(headers, rows, filename) {
    const escape = v => '"' + String(v).replace(/"/g, '""') + '"';
    let csv = headers.map(escape).join(',') + '\n';
    rows.forEach(row => { csv += row.map(escape).join(',') + '\n'; });
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
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
      // Ctrl+K: Quick Calc
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        OmniQuickCalc.toggle();
        return;
      }
      // Esc: close Quick Calc if open
      if (e.key === 'Escape' && OmniQuickCalc.isOpen()) {
        OmniQuickCalc.close();
        return;
      }
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

// ─── Quick Calc (power triangle / volt drop / converter) ────
const OmniQuickCalc = {
  _built: false,

  // Typical 3-phase mV/A·m for Cu conductors (PVC, ~75°C, trefoil) — estimate only.
  MV_PER_AM: {
    '1.5': 24.6, '2.5': 15.1, '4': 9.41, '6': 6.28, '10': 3.74, '16': 2.35,
    '25': 1.499, '35': 1.083, '50': 0.806, '70': 0.557, '95': 0.4145,
    '120': 0.332, '150': 0.272, '185': 0.2196, '240': 0.1714
  },
  // AWG sizes and their metric areas (mm²)
  AWG: [
    ['20', 0.518], ['18', 0.823], ['16', 1.31], ['14', 2.08], ['12', 3.31],
    ['10', 5.26], ['8', 8.37], ['6', 13.3], ['4', 21.2], ['2', 33.6],
    ['1', 42.4], ['1/0', 53.5], ['2/0', 67.4], ['3/0', 85.0], ['4/0', 107.2]
  ],

  injectFAB() {
    if (document.querySelector('.omni-fab')) return;
    const fab = document.createElement('button');
    fab.type = 'button';
    fab.className = 'omni-fab';
    fab.title = 'Quick Calc (Ctrl+K)';
    fab.setAttribute('aria-label', 'Open quick calculator');
    fab.innerHTML = OmniIcons.get('calc', 20);
    fab.addEventListener('click', () => this.toggle());
    document.body.appendChild(fab);
  },

  isOpen() {
    const ov = document.getElementById('qc-overlay');
    return !!(ov && ov.classList.contains('open'));
  },
  toggle() { this.isOpen() ? this.close() : this.open(); },
  open() {
    this._build();
    const ov = document.getElementById('qc-overlay');
    ov.classList.add('open');
    const first = ov.querySelector('#qc-kw');
    if (first) setTimeout(() => first.focus(), 60);
  },
  close() {
    const ov = document.getElementById('qc-overlay');
    if (ov) ov.classList.remove('open');
  },

  _build() {
    if (this._built) return;
    this._built = true;

    const sizeOpts = Object.keys(this.MV_PER_AM)
      .map(s => '<option value="' + s + '"' + (s === '16' ? ' selected' : '') + '>' + s + ' mm&sup2;</option>').join('');
    const awgOpts = this.AWG
      .map(p => '<option value="' + p[1] + '"' + (p[0] === '12' ? ' selected' : '') + '>' + p[0] + ' AWG</option>').join('');

    const ov = document.createElement('div');
    ov.id = 'qc-overlay';
    ov.innerHTML =
      '<div class="qc-modal" role="dialog" aria-modal="true" aria-label="Quick calculator">' +
        '<div class="qc-head">' +
          '<div class="qc-title">' + OmniIcons.get('calc', 17) + ' Quick Calc</div>' +
          '<div class="qc-tabs" role="tablist">' +
            '<button type="button" class="qc-tab active" data-tab="power">Power</button>' +
            '<button type="button" class="qc-tab" data-tab="vdrop">Volt Drop</button>' +
            '<button type="button" class="qc-tab" data-tab="convert">Convert</button>' +
          '</div>' +
          '<button type="button" class="qc-close" aria-label="Close">' + OmniIcons.get('x', 16) + '</button>' +
        '</div>' +

        // ── Power triangle ──
        '<div class="qc-panel active" data-panel="power">' +
          '<div class="qc-row qc-system">' +
            '<label class="qc-radio"><input type="radio" name="qc-ph" value="3" checked> 3-phase</label>' +
            '<label class="qc-radio"><input type="radio" name="qc-ph" value="1"> 1-phase</label>' +
            '<div class="qc-field"><label for="qc-v">Voltage (V)</label><input type="number" id="qc-v" value="400" step="1"></div>' +
            '<div class="qc-field"><label for="qc-pf">Power factor</label><input type="number" id="qc-pf" value="0.8" step="0.01" min="0.05" max="1"></div>' +
          '</div>' +
          '<p class="qc-hint">Enter any one of the four values below &mdash; the others solve automatically.</p>' +
          '<div class="qc-grid4">' +
            '<div class="qc-field"><label for="qc-kw">kW</label><input type="number" id="qc-kw" step="0.1" placeholder="&mdash;"></div>' +
            '<div class="qc-field"><label for="qc-kva">kVA</label><input type="number" id="qc-kva" step="0.1" placeholder="&mdash;"></div>' +
            '<div class="qc-field"><label for="qc-kvar">kVAr</label><input type="number" id="qc-kvar" step="0.1" placeholder="&mdash;"></div>' +
            '<div class="qc-field"><label for="qc-a">Amps</label><input type="number" id="qc-a" step="0.1" placeholder="&mdash;"></div>' +
          '</div>' +
          '<div class="qc-readout" id="qc-power-out">Driving value: <strong>&mdash;</strong></div>' +
        '</div>' +

        // ── Volt drop ──
        '<div class="qc-panel" data-panel="vdrop">' +
          '<div class="qc-grid4">' +
            '<div class="qc-field"><label for="qc-vd-i">Current (A)</label><input type="number" id="qc-vd-i" value="32" step="1"></div>' +
            '<div class="qc-field"><label for="qc-vd-l">Route length (m)</label><input type="number" id="qc-vd-l" value="40" step="1"></div>' +
            '<div class="qc-field"><label for="qc-vd-size">Cu size</label><select id="qc-vd-size">' + sizeOpts + '</select></div>' +
            '<div class="qc-field"><label for="qc-vd-ph">System</label><select id="qc-vd-ph"><option value="3" selected>3-ph 400 V</option><option value="1">1-ph 230 V</option></select></div>' +
          '</div>' +
          '<div class="qc-readout" id="qc-vd-out">&mdash;</div>' +
          '<p class="qc-hint">Estimate only (typical Cu mV/A&middot;m, 75&deg;C). For compliance use the <a href="cablesizing.html">Cable Sizing</a> tool &mdash; AS/NZS 3000 cl. 3.6 limits total drop to 5%.</p>' +
        '</div>' +

        // ── Converter ──
        '<div class="qc-panel" data-panel="convert">' +
          '<div class="qc-conv-row"><div class="qc-field"><label for="qc-c-kw">kW</label><input type="number" id="qc-c-kw" value="11" step="0.1"></div><span class="qc-eq">=</span><div class="qc-field"><label for="qc-c-hp">HP</label><input type="number" id="qc-c-hp" step="0.1"></div></div>' +
          '<div class="qc-conv-row"><div class="qc-field"><label for="qc-c-c">&deg;C</label><input type="number" id="qc-c-c" value="40" step="1"></div><span class="qc-eq">=</span><div class="qc-field"><label for="qc-c-f">&deg;F</label><input type="number" id="qc-c-f" step="0.1"></div></div>' +
          '<div class="qc-conv-row"><div class="qc-field"><label for="qc-c-mm">mm&sup2;</label><input type="number" id="qc-c-mm" value="4" step="0.1"></div><span class="qc-eq">&asymp;</span><div class="qc-field"><label for="qc-c-awg">AWG</label><select id="qc-c-awg">' + awgOpts + '</select></div><span class="qc-awg-note" id="qc-awg-note"></span></div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(ov);

    // close interactions
    ov.addEventListener('click', (e) => { if (e.target === ov) this.close(); });
    ov.querySelector('.qc-close').addEventListener('click', () => this.close());

    // tab switching
    ov.querySelectorAll('.qc-tab').forEach(t => {
      t.addEventListener('click', () => {
        ov.querySelectorAll('.qc-tab').forEach(x => x.classList.remove('active'));
        ov.querySelectorAll('.qc-panel').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        ov.querySelector('[data-panel="' + t.dataset.tab + '"]').classList.add('active');
      });
    });

    this._wirePower(ov);
    this._wireVdrop(ov);
    this._wireConvert(ov);
  },

  _wirePower(ov) {
    const $ = id => ov.querySelector('#' + id);
    const fields = { kw: $('qc-kw'), kva: $('qc-kva'), kvar: $('qc-kvar'), a: $('qc-a') };
    const out = $('qc-power-out');
    let driver = null;
    const names = { kw: 'kW', kva: 'kVA', kvar: 'kVAr', a: 'Amps' };

    const recalc = () => {
      if (!driver) return;
      const v = parseFloat($('qc-v').value);
      let pf = parseFloat($('qc-pf').value);
      const ph = ov.querySelector('input[name="qc-ph"]:checked').value;
      const val = parseFloat(fields[driver].value);
      if (isNaN(v) || v <= 0 || isNaN(pf) || pf <= 0 || isNaN(val)) { out.innerHTML = 'Driving value: <strong>&mdash;</strong>'; return; }
      if (pf > 1) pf = 1;
      const k = (ph === '3') ? Math.sqrt(3) * v : v; // VA per amp

      let kva;
      if (driver === 'kw') kva = val / pf;
      else if (driver === 'kva') kva = val;
      else if (driver === 'a') kva = k * val / 1000;
      else { // kvar
        const sinphi = Math.sqrt(1 - pf * pf);
        if (sinphi < 1e-6) { out.innerHTML = 'kVAr is zero at unity pf &mdash; lower the power factor first.'; return; }
        kva = val / sinphi;
      }
      const kw = kva * pf;
      const kvar = Math.sqrt(Math.max(0, kva * kva - kw * kw));
      const amps = kva * 1000 / k;

      const set = (key, value, dp) => {
        if (key !== driver) fields[key].value = OmniUtils.round(value, dp === undefined ? 2 : dp);
      };
      set('kw', kw); set('kva', kva); set('kvar', kvar); set('a', amps, 1);
      const ang = Math.acos(pf) * 180 / Math.PI;
      out.innerHTML = 'Driving value: <strong>' + names[driver] + '</strong> &middot; ' +
        OmniUtils.formatNumber(amps, 1) + ' A at ' + v + ' V &middot; &phi; = ' + OmniUtils.round(ang, 1) + '&deg;';
    };

    Object.keys(fields).forEach(key => {
      fields[key].addEventListener('input', () => { driver = key; recalc(); });
    });
    $('qc-v').addEventListener('input', recalc);
    $('qc-pf').addEventListener('input', recalc);
    ov.querySelectorAll('input[name="qc-ph"]').forEach(r => {
      r.addEventListener('change', () => {
        // sensible default voltage swap if user hasn't customised
        const vEl = $('qc-v');
        if (r.value === '1' && vEl.value === '400') vEl.value = 230;
        if (r.value === '3' && vEl.value === '230') vEl.value = 400;
        recalc();
      });
    });
  },

  _wireVdrop(ov) {
    const $ = id => ov.querySelector('#' + id);
    const out = $('qc-vd-out');
    const recalc = () => {
      const i = parseFloat($('qc-vd-i').value);
      const l = parseFloat($('qc-vd-l').value);
      const mv3 = this.MV_PER_AM[$('qc-vd-size').value];
      const ph = $('qc-vd-ph').value;
      if (isNaN(i) || isNaN(l) || i <= 0 || l <= 0) { out.textContent = '—'; return; }
      const mv = (ph === '3') ? mv3 : mv3 * 2 / Math.sqrt(3);
      const sysV = (ph === '3') ? 400 : 230;
      const vd = mv * i * l / 1000;
      const pct = vd / sysV * 100;
      const ok = pct <= 5;
      out.innerHTML = 'Vd = <strong>' + OmniUtils.round(vd, 2) + ' V</strong> (' + OmniUtils.round(pct, 2) + '%) ' +
        '<span class="' + (ok ? 'qc-ok' : 'qc-bad') + '">' + (ok ? 'within 5% limit' : 'exceeds 5% limit') + '</span>';
    };
    ['qc-vd-i', 'qc-vd-l', 'qc-vd-size', 'qc-vd-ph'].forEach(id => {
      $(id).addEventListener('input', recalc);
      $(id).addEventListener('change', recalc);
    });
    recalc();
  },

  _wireConvert(ov) {
    const $ = id => ov.querySelector('#' + id);
    const HP = 0.7457; // kW per HP
    const link = (aId, bId, aToB, bToA) => {
      $(aId).addEventListener('input', () => {
        const v = parseFloat($(aId).value);
        $(bId).value = isNaN(v) ? '' : OmniUtils.round(aToB(v), 2);
      });
      $(bId).addEventListener('input', () => {
        const v = parseFloat($(bId).value);
        $(aId).value = isNaN(v) ? '' : OmniUtils.round(bToA(v), 2);
      });
    };
    link('qc-c-kw', 'qc-c-hp', v => v / HP, v => v * HP);
    link('qc-c-c', 'qc-c-f', v => v * 9 / 5 + 32, v => (v - 32) * 5 / 9);

    // mm² → nearest AWG; AWG select → exact mm²
    const note = $('qc-awg-note');
    const mmEl = $('qc-c-mm'), awgEl = $('qc-c-awg');
    const nearestAwg = mm => {
      let best = this.AWG[0];
      this.AWG.forEach(p => { if (Math.abs(p[1] - mm) < Math.abs(best[1] - mm)) best = p; });
      return best;
    };
    const fromMm = () => {
      const v = parseFloat(mmEl.value);
      if (isNaN(v) || v <= 0) { note.textContent = ''; return; }
      const best = nearestAwg(v);
      awgEl.value = best[1];
      note.textContent = best[0] + ' AWG = ' + best[1] + ' mm²';
    };
    mmEl.addEventListener('input', fromMm);
    awgEl.addEventListener('change', () => {
      mmEl.value = awgEl.value;
      const sel = awgEl.options[awgEl.selectedIndex].textContent;
      note.textContent = sel + ' = ' + awgEl.value + ' mm²';
    });
    fromMm();
    // seed kW/HP + temp rows
    $('qc-c-hp').value = OmniUtils.round(11 / HP, 2);
    $('qc-c-f').value = 104;
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
  OmniMeta.init();
  OmniNav.init();
  OmniTheme.init();
  OmniKeys.init();
  OmniA11y.init();
  OmniTips.init();
  OmniHeader.init();
  OmniFooter.init();
  OmniBackTop.init();
  OmniQuickCalc.injectFAB();
  // Auto-save forms on calculator pages
  const isCalcPage = document.querySelector('.calc-section, .calculator-container');
  if (isCalcPage) {
    OmniStore.autoSaveForm();
    OmniStore.injectSaveLoadButtons();
    OmniPrint.addPrintButton();
  }
});
