
new Swiper('.swiper', {

    loop: true, 
    autoHeight: true,
    centeredSlides: true,
    watchOverflow: true,
    preloadImages: true,
    allowTouchMove: true,

    slidesPerView: 'auto',
    spaceBetween: 35,

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
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction:false,
    // },
});

