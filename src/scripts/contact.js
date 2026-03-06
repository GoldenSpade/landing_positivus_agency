// ============================================
// CONTACT FORM — clear buttons
// ============================================

const form = document.querySelector('.contact__form');
if (form) {
  form.querySelectorAll('.contact__input-wrap').forEach(wrap => {
    const field = wrap.querySelector('.contact__input, textarea');
    const btn   = wrap.querySelector('.contact__clear');

    function sync() {
      wrap.classList.toggle('has-value', field.value.trim() !== '');
    }

    field.addEventListener('input', sync);

    btn.addEventListener('click', () => {
      field.value = '';
      sync();
      field.focus();
    });

    sync(); // init state
  });
}
