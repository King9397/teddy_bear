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
  spaceBetween: -220,
  slidesPerView: "1.8",
  slidesOffsetBefore: 180,
  slidesOffsetAfter: -100,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    type: "bullets",
  },
});

//  메뉴 스크롤 (지우면x)
$(document).ready(function () {
  $(".menu_wrapper_nav a").on("click", (e) => {
    e.preventDefault();
    $(".menu_wrapper_list").slideToggle();
    $(".menu_wrapper_list").toggleClass("hide");
    $(".menu_wrapper_box").toggleClass("color");
  });
});

// svg
let line = document.querySelectorAll(".where>svg path");
$(window).on("scroll", () => {
  line.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > 3000) {
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

$(window).on("scroll", () => {
  const teddyTop = document.querySelector(".bigfont").offsetTop;
  const teddyHeight =
    document.querySelector(".bigfont").clientHeight -
    document.documentElement.clientHeight;
  if (scrollY > teddyTop) {
    $(".bigfont .teddy_wrapper .teddy_dark").css({
      width: `${((scrollY - teddyTop) / teddyHeight) * 100}%`,
      maxWidth: `100%`,
    });
  }
});
