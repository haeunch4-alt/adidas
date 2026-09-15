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

var bestPickSwiper = new Swiper('.product_swiper',{
    slidesPerView: 4,
    spaceBetween:10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// 2행 best_pick 분류 
// nav hover 시 sub nav 활성화
// 스크롤 시 nav 색 변경 및 고정
// best pick 분류 누를 시 상품변경 및 active 활성화
// view all 버튼 hover 시 오른쪽으로 색변경 애니메이션
// lookbook showall 클릭 시 상품 올라오기 (애니메이션 포함 (아래에서 위로 올라오기))