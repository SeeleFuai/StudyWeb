new Swiper('.swiper', {
  loop: true, 
  
  autoHeight: true,
  centeredSlides: true,
  watchOverflow: true,
  preloadImages: true,
  allowTouchMove: true,

  slidesPerView: 'auto',
  // cảm ơn chúa nhờ cái này mà cái swipper ko bị tràn thành 3tr pixel
  // slidesPerView: 3,
  spaceBetween: 40,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay:
  // {
  //   deplay:3000,
  //   disableOnInteraction: false,

  // }
});