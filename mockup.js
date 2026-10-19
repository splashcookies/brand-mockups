// Theme switcher for the Splash landing page mockups.
(function () {
  const THEMES = {
    butter: { name: 'Butter', desc: 'Warm, simple, friendly. Butter and ink, peach accents, flat logo.' },
    party: { name: 'Party', desc: 'Playful and hand-drawn. Party pink, splash blue, mint, textured logo, illustration stickers.' },
    chocolate: { name: 'Chocolate Chip', desc: 'Rich and gourmet. Chocolate chip with butter type, peach call-to-action, photography-led.' }
  };
  const order = Object.keys(THEMES);
  const root = document.documentElement;
  const radios = Array.from(document.querySelectorAll('input[name="theme"]'));
  const thumb = document.querySelector('.seg-thumb');
  const nameEl = document.querySelector('[data-theme-name]');
  const descEl = document.querySelector('[data-theme-desc]');
  const linkEl = document.querySelector('[data-theme-link]');
  const statusEl = document.querySelector('[data-theme-status]');

  function apply(theme, announce) {
    if (!THEMES[theme]) theme = 'butter';
    root.setAttribute('data-theme', theme);
    radios.forEach(r => { r.checked = r.value === theme; });
    const i = order.indexOf(theme);
    thumb.style.transform = 'translateX(' + (i * 100) + '%)';
    nameEl.textContent = THEMES[theme].name;
    descEl.textContent = THEMES[theme].desc;
    linkEl.textContent = '#' + theme;
    linkEl.setAttribute('href', '#' + theme);
    document.title = 'Splash mockup ' + (i + 1) + ' of 3: ' + THEMES[theme].name;
    if (history.replaceState) history.replaceState(null, '', '#' + theme);
    try { localStorage.setItem('splash-mockup-theme', theme); } catch (e) {}
    if (announce) statusEl.textContent = 'Option ' + (i + 1) + ' of 3, ' + THEMES[theme].name + ', shown.';
  }

  radios.forEach(r => r.addEventListener('change', () => apply(r.value, true)));

  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === 'INPUT' && t.type !== 'radio' || t.tagName === 'TEXTAREA')) return;
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= order.length) { apply(order[n - 1], true); e.preventDefault(); }
  });

  window.addEventListener('hashchange', () => {
    const h = location.hash.replace('#', '');
    if (THEMES[h]) apply(h, true);
  });

  let initial = location.hash.replace('#', '');
  if (!THEMES[initial]) { try { initial = localStorage.getItem('splash-mockup-theme') || ''; } catch (e) {} }
  apply(THEMES[initial] ? initial : 'butter', false);

  // Keep whatever has focus clear of the fixed switcher bar.
  const bar = document.querySelector('.switcher');
  document.addEventListener('focusin', e => {
    if (bar.contains(e.target)) return;
    const r = e.target.getBoundingClientRect(), b = bar.getBoundingClientRect();
    if (r.bottom > b.top && r.top < b.bottom) window.scrollBy({ top: r.bottom - b.top + 16, behavior: 'instant' });
  });

  // The waitlist form is a mock: just confirm instead of submitting.
  const form = document.querySelector('[data-mock-form]');
  const status = document.querySelector('.newsletter .status');
  form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = "You're in! (Mockup only: nothing was submitted.)";
  });
})();
