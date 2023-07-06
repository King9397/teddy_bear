// $('a').on('click', (e) => {
//   e.preventDefault();
// });
$(window).on('scroll', () => {
  console.log(scrollY);
  const bearMove = document.querySelector('.unique_wrapper').clientHeight - 300;
  if (0 < scrollY && scrollY < bearMove) {
    $('.bear_wrapper').css({
      top: `30%`,
      transform: `translate(-50%, ${scrollY}px)`,
    });
  } else {
    $('.bear_wrapper').css({
      top: `10%`,
    });
  }
  if (scrollY > bearMove) {
    $('.bear_wrapper .bear1').css({
      opacity: 0,
      transform: `scale(0)`,
    });
    $('main .fabric .fabric_img').addClass('active');
    $('main .cotton .cotton_img').addClass('active');
    $('main .needle .needle_img').addClass('active');
  } else {
    $('.bear_wrapper .bear1').css({
      opacity: 1,
      transform: `scale(1)`,
    });
    $('main .fabric .fabric_img').removeClass('active');
    $('main .cotton .cotton_img').removeClass('active');
    $('main .needle .needle_img').removeClass('active');
  }
});

const lis = document.querySelectorAll('.museum_list > li');
lis.forEach(function (a, idx) {
  $(a).on('click', () => {
    $(a).find('.list_content_wrapper').slideToggle();
    $(a).siblings().find('.list_content_wrapper').slideUp();
    $(a).addClass('rotate');
    $(a).siblings().Classtoggle('rotate');
  });
});
