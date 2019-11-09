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
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}


// carousel();

// function carousel() {
//   var i;
//   var x=document.getElementsByClassName("mySlides");
//   console.log(x.length)
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 5000); 
// }