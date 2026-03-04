// ============================================
// TESTIMONIALS SLIDER
// ============================================

(function () {
  const track   = document.querySelector('.testimonials__track');
  const slides  = document.querySelectorAll('.testimonials__slide');
  const btnPrev = document.querySelector('.testimonials__btn--prev');
  const btnNext = document.querySelector('.testimonials__btn--next');
  const stars   = document.querySelectorAll('.testimonials__star');

  if (!track || !slides.length) return;

  let current = 0;
  const total = slides.length;

  function update(animated = true) {
    const containerW = track.parentElement.offsetWidth;
    const slideW     = slides[0].offsetWidth;
    const gap        = parseFloat(getComputedStyle(track).gap) || 30;
    const offset     = (containerW - slideW) / 2 - current * (slideW + gap);

    if (!animated) track.style.transition = 'none';
    track.style.transform = `translateX(${offset}px)`;
    if (!animated) {
      track.offsetHeight; // force reflow
      track.style.transition = '';
    }

    btnPrev.classList.toggle('testimonials__btn--disabled', current === 0);
    btnNext.classList.toggle('testimonials__btn--disabled', current === total - 1);

    stars.forEach((star, i) => {
      star.classList.toggle('testimonials__star--active', i === current);
    });
  }

  // Auto-advance every 5 seconds; reset timer on manual interaction
  const AUTOPLAY_DELAY = 5000;
  let autoTimer;

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      current = (current + 1) % total;
      update();
    }, AUTOPLAY_DELAY);
  }

  function resetAuto() {
    startAuto();
  }

  btnNext.addEventListener('click', () => {
    if (current < total - 1) { current++; update(); }
    resetAuto();
  });

  btnPrev.addEventListener('click', () => {
    if (current > 0) { current--; update(); }
    resetAuto();
  });

  stars.forEach(star => {
    star.addEventListener('click', () => {
      current = Number(star.dataset.index);
      update();
      resetAuto();
    });
  });

  window.addEventListener('resize', () => update(false));

  update(false); // init without animation
  startAuto();
})();
