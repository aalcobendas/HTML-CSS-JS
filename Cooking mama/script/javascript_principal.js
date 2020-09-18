var slideIndex = 1;


// Next/previous controls
function plusSlides(n, id) {
  slideIndex += n;
  showSlidesEspecifico(slideIndex, id);
}

// Thumbnail image controls
function currentSlide(n, id) {
  slideIndex = n;
  showSlidesEspecifico(slideIndex, id);
}

function showSlidesEspecifico(n, id) {
  var i;
  var slides = document.getElementById(id).children[1].getElementsByClassName("comida");
  var dots = document.getElementById(id).children[3].getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
