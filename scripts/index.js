// index.js
var mainBnrSwiper = new Swiper('.main_bnr',{
    slidesPerView: 1,
    navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
    },
    //스크롤바 표시
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
})