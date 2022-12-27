document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#layer button").addEventListener("click", function () {
    document.querySelector("#layer").style.display = "none";
  });
});
/* 문서의 요소(태그)가 다 준비되면 실행해 */
/* $(값) <- 제이쿼리 객체 <- 제이쿼리 함수를 실행할 수 있음 */
$(function () {
  $(".full_menu, .nav li").mouseover(function () {
    $(".full_menu").stop().slideDown(600);
  });

  $(".full_menu, .nav li").mouseleave(function () {
    $(".full_menu").stop().slideUp(600);
  });

  $(".full_cover>ul>li").mouseover(function () {
    var i = $(this).index(); //원뎁스 li 마우스가 올라간 요소의 번호를 i에 할당
    // $("nav li").eq(0) -> eq(n) n번째 요소 취득
    // 투뎁스 i번째에 마우스 오버시 원뎁스 i번째 find()하위탐색
    $(".nav li").eq(i).find(".line").css("width", "100%");
  });
  $(".full_cover>ul>li").mouseleave(function () {
    var i = $(this).index();
    $(".nav li").eq(i).find(".line").css("width", "0%");
  });
  $(".nav li").mouseover(function () {
    $(this).find(".line").css("width", "100%");
  });
  $(".nav li").mouseleave(function () {
    $(this).find(".line").css("width", "0%");
  });
  $("#header .mo").click(function () {
    $(".mo_menu").stop().slideToggle("fast");
    $("#header .mo").css("color", "red");
  });

  /**
   * mainCarousel-회전목마
   * 시간마다 일시키는 timer
   * 애니메이션효과를 갖고있는 slide
   ***/
  var i = 0,
    k = null,
    repeat;
  function timer() {}
  function slide() {
    //$(".white_box").css("left", "-100%").stop().animate({ left: 0 }, 1000);
    $(".slide_cover ul li").eq(0).addClass("on");
  }
  slide();
}); //jQuery
