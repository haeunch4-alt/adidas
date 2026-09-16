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
    })
});



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
const viewAllBtn = document.querySelector('.showAll')
const closeBtn = document.querySelector('.closeBtn')
const lBproduct = document.querySelector('.lBproduct ')

console.log(viewAllBtn,closeBtn, lBproduct);

const li = document.querySelectorAll('.lookBook li')
// 1. 각각의 li(카드) 요소들을 선택
const liList = document.querySelectorAll('.lookBook > li');

liList.forEach((target) => {
  // 2. target(현재 li) 안에서 각각의 요소 찾기
    const viewAllBtn = target.querySelector('.showAll');
    const closeBtn = target.querySelector('.closeBtn');
    const lBproduct = target.querySelector('.lBProduct');

    // SHOW ALL 클릭 시
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            viewAllBtn.classList.add('active');
            if (closeBtn) closeBtn.style.display = 'flex';
            viewAllBtn.style.display = 'none';
            if (lBproduct) {
                lBproduct.style.display = 'block';
                lBproduct.classList.add('active');
            }
        });
    }

    // CLOSE 클릭 시
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (viewAllBtn) {
                viewAllBtn.classList.remove('active');
                viewAllBtn.style.display = 'flex';
            }
            closeBtn.style.display = 'none';
            if (lBproduct) {
                lBproduct.style.display = 'none';
                lBproduct.classList.remove('active');
            }
        });
    }
});