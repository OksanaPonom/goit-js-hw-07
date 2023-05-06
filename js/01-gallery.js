import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery"); //посилання на елемент ul
gallery.addEventListener("click", onClickImage); //додаємо слухача на ul

let instance;

function createGalleryMarkup(gallery) {
  //функція створення розмітки
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems)); //додавання розмітки в елемент ul

function onClickImage(evt) {
  //функція, яка викликається при кліку на зображення
  if (evt.target.nodeName !== "IMG") {
    // якщо цільовий елемент не тег img, функція не спрацює
    return;
  }
  evt.preventDefault();

  let src = evt.target.getAttribute("src"); //присвоєння змінній src значення, яке дорівнює значенню атрибута src цільового елемента
  src = evt.target.getAttribute("data-source"); //заміна значення атрибута src на значення атрибута data-source у цыльового елемента

  instance = basicLightbox.create(
    `<img width="1400" height="900" src="${src}">`,

    {
      onShow: (instance) => {
        window.addEventListener("keydown", onClosePressEsc);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", onClosePressEsc);
      },
    }
  );

  instance.show();
}

function onClosePressEsc(event) {
  if (event.code !== "Escape") {
    return;
  }
  instance.close();
}
