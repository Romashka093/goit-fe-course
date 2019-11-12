"use strict";
// console.log("TASK-01");
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user.hobby = "javascript";
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:`, user[key]);
// }

// console.log("TASK-02");

// const countProps = function(obj) {
//   const key = Object.keys(obj);
//   return key.length;
// };

// // const countProps = obj => Object.keys(obj).length;

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// console.log("TASK-03");

// function findBestEmployee(employees) {
//   let max = 0;
//   let name;

//   const keys = Object.keys(employees);

//   for (const key of keys) {
//     if (max < employees[key]) {
//       max = employees[key];
//       name = key;
//     }
//   }
//   return name;
// }

// console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }));
// console.log(findBestEmployee({ poly: 12, mango: 17, ajax: 4 }));
// console.log(findBestEmployee({ lux: 147, david: 21, kiwi: 19, chelsy: 38 }));

// console.log("TASK-04");

// const countTotalSalary = function(employees) {
//   let total = 0;
//   for (let key in employees) {
//     total += employees[key];
//   }
//   return total;
// };

// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, lux: 50, chelsy: 150 })); // 400

// console.log("TASK-05");

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = function(products, prop) {
//   const values = [];
//   for (const product of products) {
//     if (prop in product) {
//       values.push(product[prop]);
//     }
//   }
//   return values;
// };

// console.log(getAllPropValues(products, "name"));
// console.log(getAllPropValues(products, "quantity"));
// console.log(getAllPropValues(products, "category"));

// console.log("TASK-06");

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const calculateTotalPrice = function(products, productName) {
//   let total = 0;

//   for (let product of products) {
//     if (productName === product.name) {
//       total = product.price * product.quantity;
//       return total;
//     }
//   }
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200
// console.log(calculateTotalPrice(products, "Дроид")); // 2800
