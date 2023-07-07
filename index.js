// 첫번째 섹션 곰돌이
window.addEventListener('load', function () {
  var ear1 = document.querySelector('.welcome .container .ear1');
  var face = document.querySelector('.welcome .container .face');
  var ear2 = document.querySelector('.welcome .container .ear2');

  // 이미지 요소들을 모이는 값
  function moveImagesToCenter() {
    ear1.classList.add('move');
    face.classList.add('move');
    ear2.classList.add('move');
  }

  setTimeout(moveImagesToCenter, 100);
});

//세번째 섹션 자동 슬라이더
const mySwiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  // centeredSlides: true,
  slidesPerView: '1.5',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//  메뉴 스크롤 (지우면x)
$(document).ready(function () {
  $('.menu_wrapper_nav a').on('click', (e) => {
    e.preventDefault();
    $('.menu_wrapper_list').slideToggle();
    $('.menu_wrapper_list').toggleClass('hide');
    $('.menu_wrapper_box').toggleClass('color');
  });
});

$(window).on('scroll', () => {
  const teddyTop = document.querySelector('.bigfont').offsetTop;
  const teddyHeight = document.querySelector('.bigfont').clientHeight;
  console.log(scrollY);
  if (scrollY > teddyTop) {
    $('.bigfont .teddy_wrapper .teddy_dark').css({
      width: `${((scrollY - teddyTop) / teddyHeight) * 100}%`,
    });
  }
});
