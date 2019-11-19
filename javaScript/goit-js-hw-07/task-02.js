"use strict";
console.log("task-02");
const ingredientsList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список
// ul.ingredients. Для создания DOM-узлов используй document.createElement().

ingredients.forEach(element => {
  const ingredientsElementsOfList = document.createElement("li");
  ingredientsElementsOfList.textContent = element;
  fragment.append(ingredientsElementsOfList);
  console.log(ingredientsElementsOfList);
});
ingredientsList.append(fragment);
