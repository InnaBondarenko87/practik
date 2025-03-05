// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((number) => number ** 2);

// console.log(newNumbers);

// ****************************************
// / ****************************************

// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const arr = data.flatMap((item) => item.values);

// console.log(arr);

// *********************************************
// Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const ari = people.some((value) => value.age < 20);

// console.log(ari);
// *************************************************************

// Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// I;

// const numbers = [2, 4, 6, 8, 10];

// const num = numbers.every((number) => !(number % 2));

// console.log(num);

// II
// const num = numbers.map((number) => {
//   if (!(number % 2)) {
//     return true;
//   }
// });

// console.log(num);
// ************************************

// Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const foo = numbers.find((item) => item % 2);

// console.log(foo);
// ************************************************

// Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [45, 2, 5, 1, 33];

// const newNumbersArray = numbersArray.toSorted((a, b) => a - b);

// console.log(newNumbersArray);
// ****************************************÷

// Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const newStringArray = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(newStringArray);
// *****************************************

// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const foo = users.toSorted((a, b) => a.age - b.age);

// console.log(foo);

// Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newUser = users.filter((user) => user.age > 20);

// console.log(newUser);

// Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// **  **  I  **  **

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, number) => acc + number, 0);

// console.log(sum);

// **  **  II  **  **

// let total = 0;

// numbers.forEach((item) => (total += item));

// console.log(total);

// const arr = numbers.map((item) => {
//   return (number += item);
// });
// console.log(arr);

// Завдання 11:
// Створи клас для калькулятора, який має такі методи:
// - метод number, який набуває початкового значення для наступних операцій
// - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
// - методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calc {
//   constructor() {
//     this.number = 0;
//   }

//   getResult() {
//     return this.number;
//   }

//   add(value) {
//     this.number += value;
//     console.log(this);
//     return this;
//   }
// }

// const result = new Calc();

// console.log("this", result.add(5));

// console.log(result.substruct(6));
// console.log();

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#email = email;
//     this.#login = login;
//   }

//   getLogin() {
//     return this.#login;
//   }
//   setLogin(newLogin) {
//     this.#login = newLogin;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   setEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const inna = new Client("Inna", "inna@gmail.com");

// console.log(inna);

// console.log(inna.getEmail());
// console.log(inna.getLogin());

// inna.setLogin("Inna SUPER!!!");
// console.log(inna.getLogin());

// inna.setEmail("super_inna@gmail.com");
// console.log(inna.getEmail());

// **********************************

// Завдання 13:?????????????????
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// ##### Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

// class Person {
//   constructor(obj) {
//     this.name = obj.name;
//     this.age = obj.age;
//     this.gender = obj.gender;
//     this.email = obj.email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(obj) {
//     super({
//       name: obj.name,
//       age: obj.age,
//       gender: obj.gender,
//       email: obj.email,
//     });
//     this.salary = obj.salary;
//     this.department = obj.department;
//   }

//   getEmployeeDetails() {
//     return { salary: this.salary, department: this.department };
//   }
// }

// const person1 = new Person({
//   name: "Arina",
//   age: 20,
//   gender: "female",
//   email: "ari@gmail.com",
// });
// console.log(person1);

// const pracownik = new Employee({
//   name: "Inna",
//   age: 32,
//   gender: "female",
//   email: "inna@gmail.com",
//   salary: 10000,
//   department: "logistyka",
// });

// console.log(pracownik);

// ================

// ========================

// ========================

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const userGenderAge = (users, gender, age) =>
//   users.reduce((acc, user) => {
//     if (user.gender === gender && user.age <= age) {
//       acc.push(user.name);
//     }

//     return acc;
//   }, []);

// console.log(userGenderAge(users, "female", 30));
// console.log(userGenderAge(users, "male", 40));

// ===================================================

// arr = [4, 23, 5, 4, 17, 5, 45];

// unique = arr.filter((item, index, arr) => arr.indexOf(item) === index);

// console.log(unique);

// =======================================================
