//  메뉴 스크롤 (지우면x)
$(document).ready(function () {
  $(".menu_wrapper_nav a").on("click", (e) => {
    e.preventDefault();
    $(".menu_wrapper_list").slideToggle();
    $(".menu_wrapper_list").toggleClass("hide");
  });
  $(window).on("scroll", () => {
    // console.log(scrollY);
    if (scrollY > 200) {
      $("header").css({ backgroundColor: "#fff" });
    } else {
      $("header").css({ backgroundColor: "transparent" });
    }
  });
});
