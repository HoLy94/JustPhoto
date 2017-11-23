const body = document.querySelector('body');
const galleryModal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalImgCaption = document.querySelector('.modal-caption');

const modalCloseButton = document.querySelector('.modal-close');

modalCloseButton.onclick = () => {
  galleryModal.style.display = 'none';
  body.classList.remove('block-scroll');
}

const galleryItemImgs = document.querySelectorAll('.gallery-item figure img');
const galleryItemButtons = document.querySelectorAll('.gallery-item-button');
const galleryItemImgCaptions = document.querySelectorAll('figcaption');

for( let i = 0; i < galleryItemImgs.length; i++){

  galleryItemButtons[i].onclick = () => {

    body.classList.add('block-scroll');
    galleryModal.style.display = "flex";
    modalImg.src = galleryItemImgs[i].src;
    modalImgCaption.innerHTML = galleryItemImgCaptions[i].textContent;

  }
}
