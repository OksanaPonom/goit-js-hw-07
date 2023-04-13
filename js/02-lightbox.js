import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryOfImages = document.querySelector(".gallery");
galleryOfImages.addEventListener("click", onClickImage);

// const images = document.querySelectorAll(".gallery__item", onClickImage);
// images.forEach(image => {
//     image.addEventListener('click',)
// });

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

function onClickImage(evt) {
  if (evt.target.nodeName !== "IMG") {
      return;
  }
    evt.preventDefault();
  const gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
  });
  gallery.open();
}
 
    
