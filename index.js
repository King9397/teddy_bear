window.addEventListener('load', function () {
  var ear1 = document.querySelector('.welcome .container .ear1');
  var face = document.querySelector('.welcome .container .face');
  var ear2 = document.querySelector('.welcome .container .ear2');

  // 이미지 요소들을 모이는 값
  function moveImagesToCenter() {
    ear1.classList.add('move');
    face.classList.add('move');
    ear2.classList.add('move');

    setTimeout(moveImagesToCenter, 100);
  }
});

var swiper = new Swiper('.mySwiper', {
  // direction: 'vertical',
  // loop: true,
});
<<<<<<< HEAD
=======

//  메뉴 스크롤 (지우면x)
$(document).ready(function () {
  $('.menu_wrapper_nav a').on('click', (e) => {
    e.preventDefault();
    $('.menu_wrapper_list').slideToggle();
    $('.menu_wrapper_list').toggleClass('hide');
    $('.menu_wrapper_box').toggleClass('color');
  });
});
>>>>>>> c393f03a6d28e7f70c57c91a3fa6d21ff99faaea
