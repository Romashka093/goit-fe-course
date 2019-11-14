import users from "./users.js";
console.log(users);

("use strict");

// task-01
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => {
  const names = users.map(user => user.name);
  return names;
};
console.log(getUserNames(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// task-02
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  // твой код
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// task-03
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  // твой код
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// task-04
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  // твой код
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// task-05
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  // твой код
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// task-06
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  // твой код
};

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// // task-07
// // Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   // твой код
// };

// console.log(calculateTotalBalance(users)); // 20916

// // task-08
// // Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   // твой код
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// // task-09
// // Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   // твой код
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// // task-10
// // Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   // твой код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit',
// const scientist = [
//   {
//     first: "Albert",
//     last: "Einstein",
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: "Isaac",
//     last: "Newton",
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: "Galileo",
//     last: "Galilei",
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: "Marie",
//     last: "Curie",
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: "Johannes",
//     last: "Kepler",
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: "Nicolaus",
//     last: "Copernicus",
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: "Max",
//     last: "Planck",
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: "Katherine",
//     last: "Blodgett",
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: "Ada",
//     last: "Lovelace",
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: "Sarah E.",
//     last: "Goode",
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: "Lise",
//     last: "Meitner",
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: "Hanna",
//     last: "Hammarström",
//     year: 1829,
//     passed: 1909
//   }
// ];

// console.log(scientist);

// // 1) отримати масив вчених що народилися в 19 ст
// const born = scientist.filter(elem => elem.year > 1800 && elem.year < 1901);
// // const born = scientist.filter(function(elem) {
// //   return elem.year > 1800 && elem.year < 1901;
// // });

// console.log(born);

// // 2) знайти суму років скільки прожили всі вченні
// const summ = scientist.reduce(
//   (acc, elem) => (acc += elem.passed - elem.year),
//   0
// );

// console.log(summ);

// // 3) Відсортувати вчених по алфавіту

// const alphabet = scientist.map(elem => elem.first).sort();
// console.log(alphabet);

// const sortAlphabet = scientist.sort((a, b) => (a.first > b.first ? 1 : -1));
// console.log(sortAlphabet);

// // 4) Відсортувати вчених по даті народження
// const startBorn = scientist.sort((a, b) => (a.year > b.year ? 1 : -1));
// console.log(startBorn);

// // 5) Відсортувати вчених по кількості прожитих років
// const startLife = scientist.sort((x, y) =>
//   x.passed - x.year > y.passed - y.year ? 1 : -1
// );
// console.log(startLife);

// // 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті

// // const deliteScientist = scientist.filter(
// //   elem => !(elem.year >= 1400 && elem.year < 1700)
// // );
// const deliteScientist = scientist.filter(
//   elem => elem.year <= 1400 || elem.year > 1700
// );
// console.log(deliteScientist);

// // 7) Знайти вченого який народився найпізніше.

// const moreYanger = scientist.sort((a, b) => (a.year < b.year ? 1 : -1));
// console.log(moreYanger[0]);

// // 8) Знайти рік народження Albert Einstein
// // const bornAlbert = scientist
// //   .filter(elem => elem.first === "Albert" || elem.last === "Einstein")
// //   .map(elem => elem.year);
// // console.log(bornAlbert);

// const bornAlbert = scientist.find(
//   elem => elem.first === "Albert" || elem.last === "Einstein"
// );
// console.log(bornAlbert.year);
// // 9) Знайти вчених прізвище яких починається на літеру С
// const firstLetterC = scientist.filter(elem => elem.last[0] === "C");
// console.log(firstLetterC);

// // 10) Видалити з масива всіх вчених імя яких починається на A
// // Collapse;
