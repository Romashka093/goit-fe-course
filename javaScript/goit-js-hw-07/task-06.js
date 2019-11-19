"use strict";
console.log("task-06");
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте
// data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector("#validation-input");
input.addEventListener("blur", checkInput);
function checkInput(event) {
  if (input.value === "") {
    input.setAttribute("class", event);
  } else if (input.value.length >= 6) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
}
