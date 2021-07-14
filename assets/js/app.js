const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;
let slidePosition = 0;

function toggleSlide(prev, current) {
  slides[prev].classList.toggle("carousel-item--visible");
  slides[current].classList.toggle("carousel-item--visible");
}

function moveToNextSlide() {
  const prevPosition = slidePosition;
  slidePosition === totalSlides - 1 ? (slidePosition = 0) : slidePosition++;
  toggleSlide(prevPosition, slidePosition);
}

function moveToPrevSlide() {
  const prevPosition = slidePosition;
  slidePosition === 0 ? (slidePosition = totalSlides - 1) : slidePosition--;
  toggleSlide(prevPosition, slidePosition);
}

document.querySelector(".prev").addEventListener("click", moveToPrevSlide);
document.querySelector(".next").addEventListener("click", moveToNextSlide);
