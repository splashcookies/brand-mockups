// Injects the option switcher and wires the 1/2/3 shortcuts. Each mockup is its own page.
(function () {
  const OPTIONS = [
    { key: 'a', file: 'a.html', name: 'Cream & line', desc: 'Graza + Fishwife. Bake video hero, line illustrations with typewriter captions, one peach product panel, giant mark at the foot.' },
    { key: 'b', file: 'b.html', name: 'Bakery counter', desc: 'Levain + Deux. Shoppable and photo-led: icon ticker, tilted photos on pink and blue panels, kit vs box mix table, big quote.' },
    { key: 'c', file: 'c.html', name: 'The drop', desc: 'Last Crumb + Fly By Jing. Chocolate ground, countdown to the drop, poster-size manifesto, one loud peach family section.' }
  ];
  const current = document.body.dataset.option || 'a';
  const me = OPTIONS.find(o => o.key === current) || OPTIONS[0];
  const idx = OPTIONS.indexOf(me);
  const bar = document.createElement('div');
  bar.className = 'switcher';
  bar.innerHTML = '<div class="switcher-inner">' +
    '<p class="switcher-about"><strong>Option ' + (idx + 1) + ' of 3: ' + me.name + '</strong>' + me.desc + '</p>' +
    '<nav class="seg" aria-label="Design options">' + OPTIONS.map((o, i) => '<a href="' + o.file + '"' + (o === me ? ' aria-current="page"' : '') + '><b>' + (i + 1) + '</b>' + o.name + '</a>').join('') + '</nav>' +
    '<p class="switcher-hint">Press <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> to switch · <a href="v1/">first round</a> · <a href="https://github.com/splashcookies/brand-mockups">repo</a></p>' +
    '</div>';
  document.body.appendChild(bar);
  document.title = 'Splash mockup ' + (idx + 1) + ' of 3: ' + me.name;
  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target; if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 3 && OPTIONS[n - 1] !== me) location.href = OPTIONS[n - 1].file;
  });
  // mock forms only confirm
  document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); const s = f.parentElement.querySelector('[data-status]'); if (s) s.textContent = "You're in! (Mockup: nothing was sent.)"; }));
})();
