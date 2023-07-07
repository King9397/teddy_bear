// 첫번째 섹션 곰돌이
window.addEventListener("load", function () {
  var ear1 = document.querySelector(".welcome .container .ear1");
  var face = document.querySelector(".welcome .container .face");
  var ear2 = document.querySelector(".welcome .container .ear2");

  // 이미지 요소들을 모이는 값
  function moveImagesToCenter() {
    ear1.classList.add("move");
    face.classList.add("move");
    ear2.classList.add("move");
  }

  setTimeout(moveImagesToCenter, 100);
});

//세번째 섹션 자동 슬라이더
const mySwiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  // centeredSlides: true,
  slidesPerView: "1.5",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
