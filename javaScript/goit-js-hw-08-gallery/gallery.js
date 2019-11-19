"use strict";
import galleryItems from "./gallery-items.js";
console.log(galleryItems);

const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImg = document.querySelector(".lightbox__image");

let string = "";

galleryItems.forEach(element => {
  string += `<li class="gallery__item">
    <a
      class="gallery__link"
    >
      <img
        class="gallery__image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"
      />
  
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;
});

gallery.insertAdjacentHTML("beforeend", string);

gallery.addEventListener("click", event => {
  if (event.target.nodeName === "IMG") {
    lightbox.classList.add("is-open");
    lightboxImg.setAttribute("src", event.target.dataset.source);
  }

  lightbox.addEventListener("click", event => {
    if (event.target.nodeName === "BUTTON" || event.target.nodeName === "I") {
      lightbox.classList.remove("is-open");
      lightboxImg.setAttribute("src", "");
    }
  });
});
