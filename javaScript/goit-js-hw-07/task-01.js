"use strict";
console.log("task-01");
// Получится 'В списке 3 категории.'.
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoriesList = document.querySelectorAll(".item");
console.log(`В списке ${categoriesList.length} категории.`);

categoriesList.forEach(item => {
  const heading = item.querySelector("h2").textContent;
  const quantity = item.querySelectorAll("ul li").length;

  console.log(`Категория: ${heading}
Количество элементов: ${quantity}`);
});
