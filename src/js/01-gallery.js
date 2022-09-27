// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
          <a class="gallery__item" href="${original}">
	<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
