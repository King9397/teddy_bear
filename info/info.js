// const 내가정한식별자명 = new Swiper('대상', { 객체(옵션) });
const mySwiper1 = new Swiper('.swiper_wrapper', {
  // direction: 'vertical', 세로 방향 슬라이드
  loop: true, // 무한 반복

  pagination: {
    // 하단 페이지네이션
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    // 좌 우 화살표
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const mySwiper2 = new Swiper('.mySwiper2', {
  loop: true,
  pagination: {
    // 하단 페이지네이션
    el: '.mySwiper2 .swiper-pagination',
    clickable: true,
  },
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
