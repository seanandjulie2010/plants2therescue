(function() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;
 // i

  const root = document.body;
  root.classList.add('has-mouse');

  const move = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (typeof x !== 'number' || typeof y !== 'number') return;
    root.style.setProperty('--mx', x + 'px');
    root.style.setProperty('--my', y + 'px');
  };

  window.addEventListener('pointermove', move, { passive: true });

  root.style.setProperty('--mx', '50vw');
  root.style.setProperty('--my', '20vh');
})();
