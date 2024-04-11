/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/accordion-item/show.js ***!
  \************************************/
document.addEventListener('DOMContentLoaded', () => {
  const accHead = document.querySelectorAll('.gutaccordion__head');
  const accBody = document.querySelectorAll('.gutaccordion__body');
  accBody.forEach(item => {
    item.hidden = true;
  });
  function slideUp(target, dur = 400) {
    const height = target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = dur + 'ms';
    target.style.height = height + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingBlock = 0;
    target.style.marginBlock = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty('padding-block');
      target.style.removeProperty('margin-block');
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, dur);
  }
  function slideDown(target, dur = 400) {
    target.hidden = false;
    const height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingBlock = 0;
    target.style.marginBlock = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = dur + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-block');
    target.style.removeProperty('margin-block');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, dur);
  }
  if (accHead.length > 0) {
    accHead.forEach((item, i, parent) => {
      item.addEventListener('click', e => {
        const parent = e.target.closest('.gutaccordion');
        if (!parent.classList.contains('active')) {
          const activeAcc = document.querySelectorAll('.gutaccordion.active');
          activeAcc.forEach(item => {
            slideUp(item.querySelector('.gutaccordion__body'));
            item.classList.remove('active');
          });
          parent.classList.add('active');
          slideDown(item.nextElementSibling);
        } else {
          parent.classList.remove('active');
          slideUp(item.nextElementSibling);
        }
      });
    });
  }
});
/******/ })()
;
//# sourceMappingURL=show.js.map