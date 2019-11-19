"use strict";
console.log("task-07");
// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size. В результате при перетаскивании
// ползунка будет меняться размер текста.

const controller = document.querySelector("#font-size-control[type=range]");
const text = document.querySelector("#text");

controller.addEventListener("input", input => {
  const value = input.target.value;
  text.style.fontSize = value + "px";
});
