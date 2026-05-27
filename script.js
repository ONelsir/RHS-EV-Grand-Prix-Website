
const slides = document.querySelectorAll(".slides img");

let slideIndex = [...slides].findIndex(slide =>
  slide.classList.contains("active")
);

if (slideIndex === -1) {
  slideIndex = 0;
  slides[0].classList.add("active");
}

function changeSlide(step) {
  // Remove the active class from the current slide
  slides[slideIndex].classList.remove("active");

  // Calculate new index (loops back to 0 if at the end)
  slideIndex = (slideIndex + step + slides.length) % slides.length;

  // Add the active class to the new slide
  slides[slideIndex].classList.add("active");

  
}
