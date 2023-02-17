const swiper = new Swiper('.swiper', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    }
});
//даша лох

