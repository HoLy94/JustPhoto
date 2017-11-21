let slideIndex = 1;

const prevSlide = document.querySelector('.slide-prev');
const nextSlide = document.querySelector('.slide-next');

const showSlides = (n) => {
  const slideNumber = document.querySelector('.slide-number');
  const slideItems = document.querySelectorAll(".slide-item");
  if (n > slideItems.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slideItems.length}
  for (let i = 0; i < slideItems.length; i++) {
      slideItems[i].classList.remove('active');
  }
  slideItems[slideIndex-1].classList.add('active');
  slideNumber.textContent = `${slideIndex}/${slideItems.length}`
}
showSlides(slideIndex);
prevSlide.onclick = () => showSlides(slideIndex -= 1);
nextSlide.onclick = () => showSlides(slideIndex += 1);
