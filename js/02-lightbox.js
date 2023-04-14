import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryOfImages = document.querySelector(".gallery");

function createGalleryMarkup(gallery) {   
  return gallery
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
       <a class="gallery__link" href="${original}" >
      <img class="gallery__image" src="${preview}"  alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

galleryOfImages.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

  const gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
  });
    
