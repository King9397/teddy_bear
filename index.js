<<<<<<< HEAD
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

// 다섯 번째 섹션(TeddyBear 페이지) 스크롤 시 폰트 색상 변경
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $('.text-moving');
    } else {
      $('.text-moving').css('color', '#343a40');
    }
  });
});
=======

window.addEventListener('load', function() {
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
   var swiper = new Swiper(".mySwiper", {
      navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
     },
});

>>>>>>> 0508e69b0d423cae7180fd87c7d503c59c86bdb3
