"use strict";
console.log("task-04");
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение
// счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения
// счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
  decrement: document.querySelector(`[data-action="decrement"]`),
  increment: document.querySelector(`[data-action="increment"]`),
  result: document.querySelector("#value")
};

let clickCount = 0;

refs.decrement.addEventListener("click", () => {
  clickCount--;
  refs.result.textContent = clickCount;
});

refs.increment.addEventListener("click", () => {
  clickCount++;
  refs.result.textContent = clickCount;
});
