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
}

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
  onShow: modal => document.body.classList.add('overflow-hidden'),
  onClose: modal => document.body.classList.remove('overflow-hidden'),
  debugMode: true,
}

let currentModal = null;