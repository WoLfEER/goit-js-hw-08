import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryMarkup = imageMarkup(galleryItems);
const imageContainer = document.querySelector('.gallery');


imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function imageMarkup(galleryItems) {
        return galleryItems.map(({preview, original, description}) => {
        return `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a></li>`
    }).join('');
}


    const lightbox = new SimpleLightbox('.gallery a',
    {captionsData : 'alt',
     captionDelay : 250,
    });