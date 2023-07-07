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
  spaceBetween: 10,
  // centeredSlides: true,
  slidesPerView: "1.5",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// svg
let line = document.querySelectorAll("svg path");
$(window).on("scroll", () => {
  line.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > 3200) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

let line2 = document.querySelectorAll(".circle path");
$(window).on("scroll", () => {
  line2.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > 4800) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});
