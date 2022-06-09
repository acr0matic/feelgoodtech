const service = document.getElementById('service');

if (service && isMobile) {
  new Swiper('.service__slider', {
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.service__control .swiper-button-next',
      prevEl: '.service__control .swiper-button-prev',
    },
  });
}