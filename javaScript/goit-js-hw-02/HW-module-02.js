"use strict";

// TEST-01
// console.log(TASK-01);

// const name = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// const logItems = function(array) {
//   for (let index = 0; index < array.length; index += 1) {
//     console.log(index + 1, array[index]);
//   }
// };

// logItems(name);
// logItems(numbers);

// TASK-02
// console.log(TASK-02);

// // 1. задать параметры функции, где:
// //  2. a = в promt пользователь может ввести желаемую фразу гравировки - при вызове функции, нужно посчитать кол-во слов и передать его аргументом
// //  3. b = и цену за одно слово - при вызоде функции, передать его аргументом
// // 4. умножить параметры и выдать результат через return

// let userWords = String(prompt(`Введите желаемую фразу для гравировки`));
// let pricePerWord = Number(
//   prompt(
//     `Выберите тип гравировки: по дереву - 10$, по металу - 20$, по драг металу - 40$`
//   )
// );

// const calculateEngravingPrice = function(message, pricePerWord) {
//   const messageClien = userWords.split(" ");  // преобразовать строку в массив
//   message = messageClien.length; // количество слов
//   const resalt = message * pricePerWord;  // что делать с параметрами
//   return resalt; // выводим
// };

// console.log(calculateEngravingPrice(userWords, pricePerWord));

// Вызовы функции для проверки работоспособности твоей реализации.
// Proin sociis natoque et magnis parturient montes mus
// Donec orci lectus aliquam est

// TASK-03
// console.log("TASK-03");
// const findLongestWord = function(message) {
//   const words = message.split(" ");
//   let longestWord = words[0];
//   for (const oneWord of words) {
//     if (oneWord.length > longestWord.length) {
//       longestWord = oneWord;
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

//  TASK-04
// console.log("TASK-04");

// let userInput = prompt(`Введите фразу!`);

// const formatString = function(string) {
//   if (string.length > 40) {
//     return string.slice(0, 40) + "...";
//   } else {
//     return string;
//   }
// };

// alert(formatString(userInput));

// // Вызовы функции для проверки работоспособности твоей реализации.
// // Curabitur ligula sapien, tincidunt non.
// // Vestibulum facilisis, purus nec pulvinar iaculis.
// // console.log(formatString("Curabitur ligula sapien.
// // Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.

// // TASK-05
// console.log("TASK-05");

// let input = prompt("enter your text");

// const checkForSpam = function(string) {
//   let str = string.toLowerCase();
//   if (str.includes("spam")) {
//     return true;
//   } else if (str.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(checkForSpam(input));

// // Вызовы функции для проверки работоспособности твоей реализации.
// // Latest technology news
// // JavaScript weekly newsletter
// // Get best sale offers now!
// // [SPAM] How to earn fast money?

// // TASK-06

// let input;
// const numbers = [];
// let total = 0;

// for (let index = 0; index < 2; index++) {
//   input = prompt("Введите число");
//   if (input === null) {
//     break;
//   } else if (isNaN(input) || !input) {
//     alert("Было введено не число, попробуйте еще раз");
//     break;
//   } else {
//     numbers.push(Number(input));
//   }
//   index = 0;
// }
// for (let index = 0; index < numbers.length; index++) {
//   total += numbers[index];
// }
// alert(`Общая сумма чисел равна ${total}`);

