"use strict";

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// // 1. добавляет поле mood со значением 'happy'
// user.mood = "happy";
// console.log(user.mood);

// // 2. заменяет значение hobby на 'javascript'
// user.hobby = "javascript";
// console.log(user.hobby);

// // 3. заменяет значение premium на false
// user.premium = false;
// console.log(user.premium);
// // console.log(
// //   "#4 - выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of"
// // );

// // console.log("option (need to comment out the previous code in title of task)");

// // const user = (name, age, hobby, premium, mood) => {
// //   return {
// //     name,
// //     age,
// //     hobby,
// //     premium,
// //     mood
// //   };
// // };
// // console.log(user("Anna", 30, "JS", "true", "OK"));

// console.log("first option");
// const contentOfObgect = Object.entries(user);
// for (const content of contentOfObgect) {
//   const key = content[0];
//   const value = content[1];
//   console.log(`${key}: ${value}`);
// }

// console.log("second option");
// const contentOfValue = Object.keys(user);
// for (const content of contentOfValue) {
//   console.log("value: ", user[content]);
// }

// console.log("TASK-02");

// const countProps = function(obj) {
//   const key = Object.keys(obj);
//   return key.length;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

console.log("TASK-03");
