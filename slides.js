var slideIndex = 1;
var slideName = "supSlide"
var dotName = "supDot"
showSlides(slideIndex, slideName, dotName);

// Next/previous controls
function plusSlides(n, slideName, dotName) {
  showSlides(slideIndex += n, slideName, dotName);
}

// Thumbnail image controls
function currentSlide(n, slideName, dotName) {
  showSlides(slideIndex = n);
}

function showSlides(n, slideName, dotName) {
  var i;
  var slides = document.getElementsByName(slideName);
  var dots = document.getElementsByName(dotName);
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

function plusSlides(n, slideName, dotName){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1, slideName, dotName);
  } else {
    showSlides(slideIndex += 1, slideName, dotName); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2, slideName, dotName)}, 7000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1, slideName, dotName)}, 7000);
  }
}

function plusSlidesSup(n, slideName, dotName){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1, slideName, dotName);
  } else {
   showSlides(slideIndex += 1, slideName, dotName); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2, slideName, dotName)}, 7000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1, slideName, dotName)}, 7000);
  }
}

window.addEventListener("load",function() {
    showSlides(slideIndex, slideName, dotName);
    myTimer = setInterval(function(){plusSlides(1, slideName, dotName)}, 7000);
})

function currentSlide(n, slideName, dotName){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1, slideName, dotName)}, 7000);
  showSlides(slideIndex = n, slideName, dotName);
}
