//Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galerryEl = document.querySelector(".gallery");
const ulEl = document.querySelector("ul");
ulEl.style.listStyle = 'none';
const createGallery = galleryItems.map(({ preview,original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`);

galerryEl.insertAdjacentHTML('beforeend', createGallery.join(''));
let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData:'alt',
 });
