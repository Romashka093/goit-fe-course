import users from "./users.js";

("use strict");

// // task-01
// const getUserNames = users => {
//   const names = users.map(user => user.name);
//   return names;
// };
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // task-02
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };
// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// // task-03
// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).map(user => user.name);
// };
// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// // task-04
// const getInactiveUsers = users => {
//   const activUsers = users.filter(user => !user.isActive);
//   return activUsers;
// };
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// // task-05
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };
// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// // task-06
// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age > min && user.age < max);
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// // task-07
// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };
// console.log(calculateTotalBalance(users)); // 20916

// // task-08
// const getUsersWithFriend = (users, friendName) => {
//   const userFriends = users.reduce((arr, { name, friends }) => {
//     friends.includes(friendName) ? (arr = [...arr, name]) : arr;
//     return arr;
//   }, []);
//   return userFriends;
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// task-09
// const getNamesSortedByFriendsCount = users => {
//   const sortByFriends = (userA, userB) =>
//     userA.friends.length - userB.friends.length;
//   const sortedUsers = users.sort(sortByFriends).map(user => user.name);
//   return sortedUsers;
// };
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// // task-10
// const getSortedUniqueSkills = users => {
//   const totalSkills = users.reduce((allSkills, user) => {
//     allSkills.push(...user.skills);
//     return allSkills.sort();
//   }, []);
//   return [...new Set(totalSkills)];
// };
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit',]
