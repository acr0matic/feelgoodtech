/* eslint-disable lodash/prefer-lodash-method */

const scrollController = new SmoothScroll('a[href*="#"]', scrollParams);

MicroModal.init(modalParams);
const modalTrigger = document.querySelectorAll('[data-micromodal-trigger]');
modalTrigger.forEach((modal) => {
  modal.addEventListener('click', () => {
    currentModal = modal.dataset.micromodalTrigger;

    const triggered = document.getElementById(currentModal);
    const overflowContainer = triggered.querySelector(".overflow__container");
    if (overflowContainer) overflowContainer.scroll({ top: 0 });
  })
});

const forms = document.querySelectorAll('form');
forms.forEach((form) => new Form(form));

const tooltip = tippy('[data-tippy-content]', {
  allowHTML: true,
  maxWidth: 320,
  placement: 'right',
  theme: 'flat',
});

if (isTablet) _.forEach(tooltip, (item) => item.props.placement = 'bottom');
