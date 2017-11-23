let slideIndex = 1;
const showSlides = (n, slideNumber, next, prev) => {
  const slideItems = document.querySelectorAll(".slide-item");
  if (n > slideItems.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slideItems.length}
  for (let i = 0; i < slideItems.length; i++) {
      slideItems[i].classList.remove('active');
  }
  slideItems[slideIndex-1].classList.add('active');
  slideNumber.textContent = `${slideIndex}/${slideItems.length}`;
}

const render = () => {
  const slider = document.querySelector('.slider');
  const slideOne = document.createElement('div');
    slideOne.classList.add('slide-item');
    slideOne.classList.add('slide-one');
    slideOne.classList.add('active');
    slider.appendChild(slideOne);
  const slideTwo = document.createElement('div');
    slideTwo.classList.add('slide-item');
    slideTwo.classList.add('slide-two');
    slider.appendChild(slideTwo);
  const slideThree = document.createElement('div');
    slideThree.classList.add('slide-item');
    slideThree.classList.add('slide-three');
    slider.appendChild(slideThree);
  const sliderText = document.createElement('h1');
    sliderText.classList.add('slide-text');
    sliderText.textContent = 'Dark Vision';
    slider.appendChild(sliderText);
  const controls = document.createElement('div');
    controls.classList.add('slider-controls');
    slider.appendChild(controls); //!!!!!
  const next = document.createElement('a');
    next.classList.add('slide-next');
    controls.appendChild(next);
  const nextIcon = document.createElement('i');
    nextIcon.classList.add('fa');
    nextIcon.classList.add('fa-long-arrow-up');
    next.appendChild(nextIcon);
  const slideNumber = document.createElement('p');
    slideNumber.classList.add('slide-number');
    controls.appendChild(slideNumber);
  const prev = document.createElement('a');
    prev.classList.add('slide-prev');
    controls.appendChild(prev);
  const prevIcon = document.createElement('i');
    prevIcon.classList.add('fa');
    prevIcon.classList.add('fa-long-arrow-down');
    prev.appendChild(prevIcon);


  showSlides(slideIndex, slideNumber, next, prev);
  prev.onclick = () => showSlides(slideIndex -= 1, slideNumber, next, prev);
  next.onclick = () => showSlides(slideIndex += 1, slideNumber, next, prev);
}
render();
