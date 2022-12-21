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
}); //jQuery
