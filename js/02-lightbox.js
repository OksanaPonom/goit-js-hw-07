import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClickImage);

function createGalleryMarkup(gallery) {   //функція створення розмітки
  return gallery
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
       <a class="gallery__link" href="${original}" >
      <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems)); //додавання розмітки в елемент ul

function onClickImage(evt) {  //функція, яка викликається при кліку на зображення
    if (evt.target.nodeName !== "IMG") {    // якщо цільовий елемент не тег img, функція не спрацює
        return;
    }
    let gallery = new SimpleLightbox(".gallery a");
    gallery.on("show.simplelightbox");
    //     , function () {
       
    // });
   
    // gallery.on("error.simplelightbox", function (e) {
    //   console.log(e); // Some usefull information
    // });

evt.preventDefault();

}
console.log(gallery);