// ============================================
// SMOOTH SCROLL — Lenis
// ============================================

import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Anchor links — smooth scroll with Lenis
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const id = anchor.getAttribute('href');
    if (id === '#') {
      lenis.scrollTo(0);
      return;
    }
    const target = document.querySelector(id);
    if (!target) return;
    lenis.scrollTo(target, { offset: 0 });
  });
});
