const isTablet = window.matchMedia('(max-width: 992px)').matches;
const isMobile = window.matchMedia('(max-width: 540px)').matches;

const StyleСlass = {
  'mobile': {
    'open': 'mobile-menu--open',
  },

  'body': {
    'overflow': 'scroll-disabled',
  },
}

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const scrollParams = {
  speed: 500,
  speedAsDuration: true,
  offset: 0,
}

if (isTablet) scrollParams.offset = 30;

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
  onShow: modal => document.body.classList.add('overflow-hidden'),
  onClose: modal => document.body.classList.remove('overflow-hidden'),
  debugMode: true,
}

let currentModal = null;