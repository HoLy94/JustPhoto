import { images } from '../images/index';

const render = () => {
  const body = document.querySelector('body');
  const gallery = document.querySelector('.gallery');
  const title = document.createElement('div')
        title.classList.add('title');
  const h2 = document.createElement('h2');
    h2.textContent = 'Lorem ipsum.';
    title.appendChild(h2);
    gallery.appendChild(title);

  const galleryModal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-img');
  const modalImgCaption = document.querySelector('.modal-caption');
  const modalCloseButton = document.querySelector('.modal-close');

  for (let image of images) {
    const galleryItem = document.createElement('div');
          galleryItem.classList.add('gallery-item');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
          img.src = image.src;
          img.alt = image.alt;
      figure.appendChild(img);
    const button = document.createElement('button');
          button.classList.add('gallery-item-button');
    const i = document.createElement('i');
          i.classList.add('fa');
          i.classList.add('fa-camera');
      button.appendChild(i);
      figure.appendChild(button);
    const figcaption = document.createElement('figcaption');
          figcaption.textContent = image.caption;
      galleryItem.appendChild(figure);
      galleryItem.appendChild(figcaption);
      gallery.appendChild(galleryItem);

      button.onclick = () => {
        body.classList.add('block-scroll');
        galleryModal.style.display = "flex";
        modalImg.src = image.src;
        modalImgCaption.innerHTML = image.caption;
      }
  }

  modalCloseButton.onclick = () => {
    galleryModal.style.display = 'none';
    body.classList.remove('block-scroll');
  }
}
render();
