// The nav's expanding menu. One button, three lines; everything the header used
// to show as icons lives inside it now.
(function () {
  const btn = document.querySelector('.menu-btn');
  const panel = document.getElementById('menu');
  if (!btn || !panel) return;

  function open(yes) {
    btn.setAttribute('aria-expanded', String(yes));
    panel.hidden = !yes;
    document.documentElement.classList.toggle('menu-open', yes);
  }

  btn.addEventListener('click', () => {
    const now = btn.getAttribute('aria-expanded') === 'true';
    open(!now);
    // moving focus into the panel means the keyboard lands where the eye does
    if (!now) { const first = panel.querySelector('a'); if (first) first.focus(); }
  });

  // Escape closes and hands focus back to the button that opened it
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      open(false); btn.focus();
    }
  });

  // a click anywhere else closes it, but not a click inside it
  document.addEventListener('click', e => {
    if (btn.getAttribute('aria-expanded') !== 'true') return;
    if (panel.contains(e.target) || btn.contains(e.target)) return;
    open(false);
  });
})();
