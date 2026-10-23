// Injects the option switcher and wires the number-key shortcuts. Each mockup is its own page.
(function () {
  const OPTIONS = [
    { key: 'h', file: 'h.html', round: 4, name: 'The bake', desc: 'Scroll position is oven time. A pinned stage takes the cookie from raw dough through the oven to done as you move down the page, the cavity glowing up around it, with the clock and the temperature counting alongside. Figtree only \u2014 the risk is all in the mechanic.' },
    { key: 'i', file: 'i.html', round: 4, name: "Michele's notebook", desc: 'The whole site as her test-kitchen book: ruled paper, taped photos, marker arrows, sticky notes. The signature is the batch log \u2014 forty-seven attempts, forty-six crossed out, the last one circled. Adds Caveat.' },
    { key: 'j', file: 'j.html', round: 4, name: 'Tear it open', desc: 'The hero is a sealed pouch you pull apart; the contents spill out and name themselves. Built on a range input, so it drags, takes arrow keys and announces itself rather than being a mouse-only stunt.' },
    { key: 'd', file: 'd.html', round: 3, name: 'Lab notebook', desc: 'Michele is a chemical engineer, so the kit gets a spec sheet: typed-report monospace, an exploded parts diagram of the five components, a procedure with tolerances, and one deadpan chart about how much a cup of flour actually weighs.' },
    { key: 'e', file: 'e.html', round: 3, name: 'Recipe card', desc: 'The page is the recipe. A real ruled recipe card carries the middle of it — and the from-scratch ingredient list is struck through line by line until only "1 Splash kit" is left standing. Adds Fraunces and Caveat.' },
    { key: 'f', file: 'f.html', round: 3, name: 'Kitchen party', desc: 'Baking as the activity, loud. The brand guide draws its colours as irregular blobs, so blobs become the whole shape language: blob photos, blob cards, rotated sticker badges, a mess-o-meter. Adds Fredoka.' },
    { key: 'g', file: 'g.html', round: 3, name: 'Shelf ready', desc: 'As if it were already on the shelf at Target. Hard colour blocks, an expanded grotesque shouting one claim at a time, shelf-talker tags over the pack shot, and a Cookie Facts panel. Adds Archivo.' },
    { key: 'a', file: 'a.html', round: 2, name: 'Cream & line', desc: 'Graza + Fishwife. Bake video hero, line illustrations with typewriter captions, one peach product panel, giant mark at the foot.' },
    { key: 'b', file: 'b.html', round: 2, name: 'Bakery counter', desc: 'Levain + Deux. Shoppable and photo-led: icon ticker, tilted photos on pink and blue panels, kit vs box mix table, big quote.' },
    { key: 'c', file: 'c.html', round: 2, name: 'The drop', desc: 'Last Crumb + Fly By Jing. Chocolate ground, countdown to the drop, poster-size manifesto, one loud peach family section.' }
  ];
  const current = document.body.dataset.option || OPTIONS[0].key;
  const me = OPTIONS.find(o => o.key === current) || OPTIONS[0];
  const group = OPTIONS.filter(o => o.round === me.round);
  const pos = group.indexOf(me) + 1;

  let segInner = '';
  let lastRound = null;
  OPTIONS.forEach((o, i) => {
    if (o.round !== lastRound) { segInner += '<span class="seg-label">Round ' + o.round + '</span>'; lastRound = o.round; }
    segInner += '<a href="' + o.file + '"' + (o === me ? ' aria-current="page"' : '') +
      '><b>' + ((i + 1) % 10) + '</b><span class="nm">' + o.name + '</span></a>';
  });

  const bar = document.createElement('div');
  bar.className = 'switcher';
  bar.innerHTML = '<div class="switcher-inner">' +
    '<p class="switcher-about" title="' + me.desc.replace(/"/g, '&quot;') + '"><strong>Round ' + me.round + ' \u00b7 ' + pos + '/' + group.length + ' \u00b7 ' + me.name + '</strong>' + me.desc + '</p>' +
    '<div class="switcher-bar">' +
      '<nav class="seg" aria-label="Design options">' + segInner + '</nav>' +
      '<p class="switcher-hint">Press <kbd>1</kbd>–<kbd>' + (OPTIONS.length >= 10 ? '0' : OPTIONS.length) + '</kbd> to switch · <a href="v1/">first round</a> · <a href="https://github.com/splashcookies/brand-mockups">repo</a></p>' +
    '</div>' +
    '</div>';
  document.body.appendChild(bar);

  // the bar wraps differently at every width, so reserve exactly what it occupies
  // rather than trusting a fixed value to stay right.
  const syncHeight = () => document.documentElement.style.setProperty(
    '--switcher-h', Math.ceil(bar.getBoundingClientRect().height) + 'px');
  syncHeight();
  addEventListener('resize', syncHeight);
  if (window.ResizeObserver) new ResizeObserver(syncHeight).observe(bar);

  document.title = 'Splash mockup · round ' + me.round + ', option ' + pos + ' of ' + group.length + ': ' + me.name;

  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target; if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    if (!/^[0-9]$/.test(e.key)) return;
    const n = e.key === '0' ? 10 : parseInt(e.key, 10);   // 0 reaches the tenth
    if (n >= 1 && n <= OPTIONS.length && OPTIONS[n - 1] !== me) location.href = OPTIONS[n - 1].file;
  });

  // mock forms only confirm
  document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const s = f.parentElement.querySelector('[data-status]');
    if (s) s.textContent = "You're in! (Mockup: nothing was sent.)";
  }));
})();
