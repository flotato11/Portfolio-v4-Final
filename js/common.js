function menuToggle() {
  document.getElementsByClassName("menu-button-bar-container")[0].classList.toggle("menu-button-bar-container--opened");
  document.getElementsByClassName("fs-menu")[0].classList.toggle("fs-menu--opened");
}

$(document).ready(function() {

  var c = 1;

  $('#colorswap-icon').click(function() {
    c++;
    console.log(c);
    if (c % 2 === 0) {
      $(':root').css('--mainbackground', 'rgba(209,243,255,1)');
      $(':root').css('--floodlight', 'rgba(255,209,220,.8)');
      $(':root').css('--color1', 'black');
    }
    else {
      $(':root').css('--mainbackground', '#1a1a1a')
      $(':root').css('--floodlight', '#e0d692');
      $(':root').css('--color1', 'white');
    }
  });
});

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
