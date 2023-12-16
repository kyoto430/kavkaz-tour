console.log('slider running...');

new Swiper('.preview__slider', {
  loop: false,
  pagination: {
    el: '.preview-slider__pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.preview-slider__btn-prev',
    nextEl: '.preview-slider__btn-next',
  },
  uniqueNavElements: false,
});

new Swiper('.tour-page__slider', {
  spaceBetween: 20,
  pagination: {
    el: '.preview-slider__pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.preview-slider__btn-prev',
    nextEl: '.preview-slider__btn-next',
  },
  uniqueNavElements: false,
  breakpoints: {
    1280: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});
