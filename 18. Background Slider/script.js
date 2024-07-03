const slides = document.querySelectorAll(".slide");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
let activeSlide = 0;

function setActiveSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === activeSlide) {
      slide.classList.add("active");
      document.body.style.backgroundImage = slide.style.backgroundImage;
    }
  });
}

function nextSlide() {
  activeSlide = (activeSlide + 1) % slides.length;
  setActiveSlide();
}

function prevSlide() {
  activeSlide = (activeSlide - 1 + slides.length) % slides.length;
  setActiveSlide();
}

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);

setActiveSlide();
