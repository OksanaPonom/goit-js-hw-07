import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery"); //посилання на елемент ul
gallery.addEventListener("click", onClickImage); //додаємо слухача на ul

function createGalleryMarkup(gallery) {   //функція створення розмітки
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

function onClickImage(evt) {  //функція, яка викликається при кліку на зображення
  if (evt.target.nodeName !== "IMG") {    // якщо цільовий елемент не тег img, функція не спрацює
    return;
  }
  let src = evt.target.getAttribute("src"); //присвоєння змінній src значення, яке дорівнює значенню атрибута src цільового елемента
  src = evt.target.getAttribute("data-source"); //заміна значення атрибута src на значення атрибута data-source у цыльового елемента
  basicLightbox //використання бібліотеки
    .create(
      `<img width="1400" height="900" src="${src}">`
    )
    .show();
    evt.preventDefault();  //відміна дії за замовчуванням, а саме, перехід на нову сторінку при кліку на посиланні
 }

if (document.getElementsByClassName("basicLightbox--visible") !== null) {   //перевірка на існування елемента з таким класом, тобто,якшо модальне вікно відкрите-такий елемент існує
  window.addEventListener("keydown", onEscPress); // вішаємо слухача на window
}

function onEscPress(evt) {
  const elem = document.querySelector(".basicLightbox--visible"); // знаходимо елемент з таким класом
  if (evt.code === "Escape") {     // якщо натиснута кнопка Esc- цей елемент видалиться
    elem.remove();
  }
}
