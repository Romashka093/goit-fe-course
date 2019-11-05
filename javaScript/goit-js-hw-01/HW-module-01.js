"use strict";

// ------------TASK-01 - тернарный?
const name = "Генератор защитного поля";
let price = 1000;
let message = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(message);

price = 2000;
message = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(message);

// ------------TASK-02
// const total = 100;
// let ordered = 50;
// if (ordered > 100){
//     console.log('На складе недостаточно твоаров!');
// }
// else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// };

// ordered = 20;
// if (ordered > 100){
//     console.log('На складе недостаточно твоаров!')
// }
// else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// };

// ordered = 80;
// if (ordered > 100){
//     console.log('На складе недостаточно твоаров!')
// }
// else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// };

// ordered = 130;
// if (ordered > 100){
//     console.log('На складе недостаточно твоаров!')
// }
// else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// };

// ------------TASK-03
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = null;

// let input = prompt('Please, enter your password:');

// if(input === null) {
//     message = 'Отменено пользователем!';
// }else if(input === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// }else{
//     message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

// ------------TASK-04
// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;

// let userInput = Number(prompt("Какое количество дроидов, Вы хочет купить:"));
// console.log(userInput);

// if (userInput === null) {
//   alert("Отменено пользователем!");
// } else {
//   totalPrice = userInput * pricePerDroid;
//   console.log(totalPrice);

//   if (totalPrice > credits) {
//     alert("Недостаточно средств на счету!");
//   } else {
//     credits = credits - totalPrice;
//     console.log(credits);
//     alert(
//       `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`
//     );
//   }
// }

// ------------TASK-05
// const countryChina = "Китай";
// const countryChile = "Чили";
// const countryAustralia = "Австралия";
// const countryIndia = "Индия";
// const countryJamaica = "Ямайка";
// const creditsChina = 100;
// const creditsChile = 250;
// const creditsAustralia = 170;
// const creditsIndia = 80;
// const creditsJamaica = 150;

// let userInput = String(prompt("Выбери страну, для доставки товара:"));

// switch (userInput.toLowerCase()) {
//   case 'null': 
//    alert('Вы ничего не выбрали, пожалуйста, попробуйте еще раз');
//    break;

//   case countryChina.toLowerCase():
//     alert(`Доставка в ${countryChina} будет стоить ${creditsChina} кредитов`);
//     break;

//   case countryChile.toLowerCase():
//     alert(`Доставка в ${countryChile} будет стоить ${creditsChile} кредитов`);
//     break;

//   case countryAustralia.toLowerCase():
//     alert(
//       `Доставка в ${countryAustralia} будет стоить ${creditsAustralia} кредитов`
//     );
//     break;

//   case countryIndia.toLowerCase():
//     alert(`Доставка в ${countryIndia} будет стоить ${creditsIndia} кредитов`);
//     break;

//   case countryJamaica.toLowerCase():
//     alert(
//       `Доставка в ${countryJamaica} будет стоить ${creditsJamaica} кредитов`
//     );
//     break;

//   default:
//     alert(`В вашей стране доставка не доступна!`);
// }

// ------------TASK-06

// let input;
// let total = 0;

// while (true) {
//     input = prompt('Введите число');

//   if (input === null) {
//     break;
//   }

//   input = Number(input);

//   if (input <= 0) {
//     alert(`Общая сумма чисел равна ${total}`)
//     break;
//   }

//   total += input;
  
// }

// console.log(total);
