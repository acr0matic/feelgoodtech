const language = document.getElementById('language');

if (language) {
  new Swiper('.language__slider', {
    slidesPerView: 'auto',
    grabCursor: true,

    mousewheel: {
      invert: false,
    },

    navigation: {
      nextEl: '.language__control .swiper-button-next',
      prevEl: '.language__control .swiper-button-prev',
    },
  });
}