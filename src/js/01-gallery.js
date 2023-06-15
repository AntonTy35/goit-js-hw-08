// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEls = document.querySelector('.gallery');

const galleryItemsEl = galleryItems
  .map(
    galleryItems =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${galleryItems.original}">
        <img
          class="gallery__image"
          src="${galleryItems.preview}"
          alt="${galleryItems.description}"
          />
          </a>
          </li>`
  )
  .join('');
galleryEls.style.listStyle = 'none';
galleryEls.insertAdjacentHTML('beforeend', galleryItemsEl);

galleryEls.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
