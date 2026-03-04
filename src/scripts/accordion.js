// ============================================
// WORKING PROCESS ACCORDION
// ============================================

const processItems = document.querySelectorAll('.process__item');

processItems.forEach(item => {
  item.querySelector('.process__header').addEventListener('click', () => {
    const isOpen = item.classList.contains('process__item--open');

    // Close all items
    processItems.forEach(i => {
      i.classList.remove('process__item--open');
      i.querySelector('.process__header').setAttribute('aria-expanded', 'false');
    });

    // Open clicked item if it was closed
    if (!isOpen) {
      item.classList.add('process__item--open');
      item.querySelector('.process__header').setAttribute('aria-expanded', 'true');
    }
  });
});
