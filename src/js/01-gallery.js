//Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galerryEl = document.querySelector(".gallery");
const createGallery = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);
galerryEl.insertAdjacentHTML('beforeend', createGallery.join(''));
galerryEl.addEventListener('click', onClick);
function onClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
 }
    const instance = basicLightbox.create
      (`<img src="${e.target.dataset.source} "width=800", "height=600">`, {
        onShow: (instance) => document.addEventListener('keydown', onKeydown),
        onClose: (instance)=>document.removeEventListener('keydown', onKeydown)
        });
    
    instance.show();
    
    function onKeydown(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }

}
