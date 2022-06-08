/* eslint-disable lodash/prefer-lodash-method */

/* Логика для мобильного меню */
const mobileMenuButton = document.querySelector('.header__mobile');
const mobileBurger = mobileMenuButton.querySelector('.hamburger')
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = mobileMenu.querySelector('.mobile-menu__overlay');
const mobileCallback = mobileMenu.querySelector('button');
const mobileLinks = mobileMenu.querySelectorAll('.nav__link');

const mobileClasses = {
  "open": "mobile-menu--open",
  "burger": "is-active",
  "overflow": "body-disable-scroll",
}

mobileMenuButton.addEventListener('click', () => {
  mobileBurger.classList.toggle(mobileClasses.burger);
  mobileMenu.classList.toggle(mobileClasses.open);
  document.body.classList.toggle(mobileClasses.overflow)
});

mobileOverlay.addEventListener('click', () => CloseMenu());
mobileCallback.addEventListener('click', () => CloseMenu());

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    CloseMenu();
  });
});

function CloseMenu() {
  document.body.style.overflow = 'visible';
  mobileBurger.classList.remove(mobileClasses.burger);
  mobileMenu.classList.remove(mobileClasses.open);
  document.body.classList.remove(mobileClasses.overflow)
}