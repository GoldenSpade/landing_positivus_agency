// ============================================
// BURGER MENU
// ============================================

const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  burger.classList.toggle('burger--open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

// Close on nav link click (mobile)
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close on resize back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) closeMenu();
});

function closeMenu() {
  nav.classList.remove('nav--open');
  burger.classList.remove('burger--open');
  burger.setAttribute('aria-expanded', 'false');
}
