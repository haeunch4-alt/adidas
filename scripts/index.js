// index.js
var mainBnrSwiper = new Swiper('.main_bnr',{
    slidesPerView: 1,
    navigation: {
	nextEl: '.main_swiper_btn_next',
	prevEl: '.main_swiper_btn_prev',
    },
    //스크롤바 표시
    scrollbar: {
        el: '.main_swiper_btn_scroll',
    },
    autoplay:{
        delay:6000,
        disableOnInteraction:false,
    },
})

var bestPickSwiper = new Swiper('.product_swiper',{
    slidesPerView: 4,
    spaceBetween:10,
    navigation: {
        nextEl: '.best_swiper_btn_next',
        prevEl: '.best_swiper_btn_prev',
    },
})

// 2행 best_pick 분류
const bestBtns = document.querySelectorAll('.category > li');

bestBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // 1. 모든 li에서 active 클래스 제거
        bestBtns.forEach((item) => item.classList.remove('active'));
        
        // 2. 현재 클릭한 li에만 active 클래스 추가
        btn.classList.add('active');
    });
});

// nav hover 시 sub nav 활성화


// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

//스크롤 트리거 애니메이션 작성 위치
gsap.to('nav',{
    backgroundColor:'rgba(0,0,0,1)',
    // color:'black',
    scrollTrigger:{
        trigger:'.main_bnr',
        start:'bottom 50%',
        // markers: true,
    },
})

// lookbook showall 클릭 시 상품 올라오기 (애니메이션 포함 (아래에서 위로 올라오기))