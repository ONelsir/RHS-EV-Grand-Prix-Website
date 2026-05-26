let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function changeSlide(step) {
  // Remove the active class from the current slide
  slides[slideIndex].classList.remove("active");

  // Calculate new index (loops back to 0 if at the end)
  slideIndex = (slideIndex + step + slides.length) % slides.length;

  // Add the active class to the new slide
  slides[slideIndex].classList.add("active");
}
