// Injects the option switcher and wires the number-key shortcuts. Each mockup is its own page.
(function () {
  const OPTIONS = [
    // Round 5 is one page. The chosen treatment is the bare URL; the rest ask for
    // themselves by query string, which is also how the page reads its defaults.
    { key: 'k', file: 'k.html', bits: 'none', hero: 'static', ww: 'fly', fly: 'cameo', rot: 'hand', copy: 'quiet', round: 5, name: 'The counter', desc: 'Chosen. The photograph is the hero with nothing laid over it; the headline reads "Gourmet baking made easy for \u2014" with the occasion hand-lettered and turning; and below it a paragraph and a single underlined link. Wonder Woman crosses once while the kit section goes by.' },
    { key: 'k', file: 'k.html?copy=full', bits: 'none', hero: 'static', ww: 'fly', fly: 'cameo', rot: 'hand', copy: 'full', round: 5, name: 'hero \u00b7 full', desc: 'Everything the hero used to carry: the paragraph, the hand-lettered facts line and both buttons.' },
    { key: 'k', file: 'k.html?copy=lean', bits: 'none', hero: 'static', ww: 'fly', fly: 'cameo', rot: 'hand', copy: 'lean', round: 5, name: 'hero \u00b7 lean', desc: 'The paragraph goes and the hand-lettered facts carry the argument instead; one button rather than a link.' },
    { key: 'k', file: 'k.html?copy=bare', bits: 'none', hero: 'static', ww: 'fly', fly: 'cameo', rot: 'hand', copy: 'bare', round: 5, name: 'hero \u00b7 bare', desc: 'The headline and one button. Everything else is left to the sections below, which already say all of it.' },
    { key: 'k', file: 'k.html?rot=pill', bits: 'none', hero: 'static', ww: 'fly', fly: 'cameo', rot: 'pill', copy: 'quiet', round: 5, name: 'rotating \u00b7 pill', desc: 'The occasion turns over in a peach pill instead of the hand lettering. Loudest of the three, and it ties the headline to the occasions section below.' },
    { key: 'k', file: 'k.html?rot=roll', bits: 'none', hero: 'static', ww: 'fly', fly: 'cameo', rot: 'roll', copy: 'quiet', round: 5, name: 'rotating \u00b7 roll', desc: 'The words are stacked and the column slides, like a counter turning over. The motion reads as mechanical rather than decorative.' },
    { key: 'k', file: 'k.html?rot=none', bits: 'none', hero: 'static', ww: 'fly', fly: 'cameo', rot: 'none', copy: 'quiet', round: 5, name: 'rotating \u00b7 off', desc: 'The headline holds still at "Gourmet baking made easy." Worth seeing against the three that move.' },
    { key: 'k', file: 'k.html?fly=swoop', bits: 'none', hero: 'static', ww: 'fly', fly: 'swoop', rot: 'hand', copy: 'quiet', round: 5, name: 'alt \u00b7 she swoops', desc: 'The cameo at full length: from "The kit" down she crosses the entire page. Bolder, but she is on screen for every scroll.' },
    { key: 'k', file: 'k.html?fly=drift', bits: 'none', hero: 'static', ww: 'fly', fly: 'drift', rot: 'hand', copy: 'quiet', round: 5, name: 'alt \u00b7 she drifts', desc: 'She never crosses the text at all: hugs the left edge and sinks slowly past the kit and the story, small and out of the way.' },
    { key: 'k', file: 'k.html?ww=band', bits: 'none', hero: 'static', ww: 'band', fly: '', rot: 'hand', copy: 'quiet', round: 5, name: 'alt \u00b7 her own band', desc: 'Instead of flying she gets a band of her own below the kit card: "Show up with warm cookies."' },
    { key: 'k', file: 'k.html?bits=row&ww=band', bits: 'row', hero: 'static', ww: 'band', fly: '', rot: 'hand', copy: 'quiet', round: 5, name: 'alt \u00b7 components on the photo', desc: 'The five components stand in a line along the top of the photograph rather than being left to the sections below.' },
    { key: 'k', file: 'k.html?bits=ring&hero=pull&ww=hero', bits: 'ring', hero: 'pull', ww: 'hero', fly: '', rot: 'hand', copy: 'quiet', round: 5, name: 'alt \u00b7 pull, ring', desc: 'The original interactive hero: Wonder Woman carries the closed state and pulling the slider rings the components around the cookies.' },
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
  // Several options can share a page and differ only by query string, so the
  // current one is matched on the variant params too, not the file alone.
  const sp = new URLSearchParams(location.search);
  // mirror the page's own defaults, so the bare URL matches the chosen option
  const onK = (document.body.dataset.option || '') === 'k';
  const curBits = sp.get('bits') || (onK ? 'none' : ''),
        curHero = sp.get('hero') || (onK ? 'static' : ''),
        curWw = sp.get('ww') || (onK ? 'fly' : ''),
        curFly = sp.get('fly') || (curWw === 'fly' ? 'cameo' : ''),
        curRot = sp.get('rot') || (onK ? 'hand' : ''),
        curCopy = sp.get('copy') || (onK ? 'quiet' : '');
  const current = document.body.dataset.option || OPTIONS[0].key;
  const me = OPTIONS.find(o => o.key === current && (o.bits || '') === curBits
                            && (o.hero || '') === curHero && (o.ww || '') === curWw
                            && (o.fly || '') === curFly && (o.rot || '') === curRot
                            && (o.copy || '') === curCopy)
          || OPTIONS.find(o => o.key === current) || OPTIONS[0];
  const group = OPTIONS.filter(o => o.round === me.round);
  const pos = group.indexOf(me) + 1;

  // one key per option, in order; anything past the list is click-only
  const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-'];

  let segInner = '';
  let lastRound = null;
  OPTIONS.forEach((o, i) => {
    if (o.round !== lastRound) { segInner += '<span class="seg-label">Round ' + o.round + '</span>'; lastRound = o.round; }
    segInner += '<a href="' + o.file + '"' + (o === me ? ' aria-current="page"' : '') +
      '><b>' + (KEYS[i] || '·') + '</b><span class="nm">' + o.name + '</span></a>';
  });

  const bar = document.createElement('div');
  bar.className = 'switcher';
  bar.innerHTML = '<button class="switcher-toggle" id="sw-toggle" aria-expanded="true" aria-controls="sw-inner"></button>' +
    '<div class="switcher-inner" id="sw-inner">' +
    '<p class="switcher-about" title="' + me.desc.replace(/"/g, '&quot;') + '"><strong>Round ' + me.round + ' \u00b7 ' + pos + '/' + group.length + ' \u00b7 ' + me.name + '</strong>' + me.desc + '</p>' +
    '<div class="switcher-bar">' +
      '<nav class="seg" aria-label="Design options">' + segInner + '</nav>' +
      '<p class="switcher-hint">Press <kbd>' + KEYS[0] + '</kbd>–<kbd>' + KEYS[Math.min(KEYS.length, OPTIONS.length) - 1] + '</kbd> to switch · <a href="v1/">first round</a> · <a href="https://github.com/splashcookies/brand-mockups">repo</a></p>' +
    '</div>' +
    '</div>';
  document.body.appendChild(bar);

  // the bar wraps differently at every width, so reserve exactly what it occupies
  // rather than trusting a fixed value to stay right.
  let lastH = 0;
  const syncHeight = () => {
    const h = Math.ceil(bar.getBoundingClientRect().height);
    if (Math.abs(h - lastH) < 2) return;   // belt and braces against a measure/layout loop
    lastH = h;
    document.documentElement.style.setProperty('--switcher-h', h + 'px');
  };
  // fold the bar away so it stops covering the bottom of the page being reviewed
  const toggle = bar.querySelector('#sw-toggle');
  // default to collapsed: expanded, the bar is tall enough to cover the bottom of a
  // full-height hero and swallow clicks meant for the page.
  const read = () => { try { return localStorage.getItem('splash-switcher') !== 'open'; } catch (e) { return true; } };
  function applyCollapsed(closed) {
    bar.classList.toggle('is-collapsed', closed);
    toggle.setAttribute('aria-expanded', String(!closed));
    toggle.textContent = closed ? ('Round ' + me.round + ' \u00b7 ' + me.name + ' \u2014 show options') : 'Hide';
    syncHeight();
  }
  toggle.addEventListener('click', () => {
    const closed = !bar.classList.contains('is-collapsed');
    try { localStorage.setItem('splash-switcher', closed ? 'closed' : 'open'); } catch (e) {}
    applyCollapsed(closed);
  });
  applyCollapsed(read());

  syncHeight();
  addEventListener('resize', syncHeight);
  if (window.ResizeObserver) new ResizeObserver(syncHeight).observe(bar);
  // the webfont swapping in changes the bar's height after first paint, and a missed
  // resize would otherwise leave the reservation stale, so re-check a couple of times.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeight);
  setTimeout(syncHeight, 300);
  setTimeout(syncHeight, 1200);

  document.title = 'Splash mockup · round ' + me.round + ', option ' + pos + ' of ' + group.length + ': ' + me.name;

  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target; if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    const n = KEYS.indexOf(e.key);
    if (n >= 0 && n < OPTIONS.length && OPTIONS[n] !== me) location.href = OPTIONS[n].file;
  });

  // mock forms only confirm
  document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const s = f.parentElement.querySelector('[data-status]');
    if (s) s.textContent = "You're in! (Mockup: nothing was sent.)";
  }));
})();
