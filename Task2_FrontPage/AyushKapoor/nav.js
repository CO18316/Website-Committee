window.onscroll = function() {scroll()};

function scroll() 
{
    var offsetHeight = document.getElementsByClassName('parallax')[0].offsetHeight;
    var parallax=document.getElementsByClassName("parallax");
    var navclass=document.getElementsByClassName("mainNavbar");
    var nav=document.getElementsByTagName("nav")[0];
    if (document.body.scrollTop >= offsetHeight-20 || document.documentElement.scrollTop >=offsetHeight-20) {
        nav.classList.add("scrolled");
        nav.classList.remove("navclass");
    } else {
        nav.classList.add("navclass");
        nav.classList.remove("scrolled");
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      // dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += "active";
}


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }