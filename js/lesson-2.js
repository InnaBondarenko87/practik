// *******  1   *******
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'bl nues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];

// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");
// if (index !== -1) {
//   styles.splice(index, 1, "classic");
// }

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);

// ************** 2 *************

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const nameLogins = prompt("ВВЕДІТЬ ІМЯ КОРИСТУВАЧА:");
//   if (!nameLogins) {
//     return alert("jknm");
//   }
//   const normalizeName = nameLogins.toLowerCase().trim();
//   for (const login of array) {
//     if (login.toLowerCase() === normalizeName) {
//       return alert(`"Welcome, ${login}!"`);
//     }
//   }
//
// return alert("User not found");
// }

// checkLogin(logins);

// II

// function checkLogin(array) {
//     let (array.includes(userName)){
// alert('Welkom, ${'userName)
//     }
// }

// *************************

// ******   3   ***********
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   const args = Array.from(arguments);

//   let sum = 0;

//   for (let i = 0; i < args.length; i++) {
//     // console.log(args[i] !== typeof Number);
//     if (args[i] !== typeof "number" && !isNaN(args[i]))
//       // console.log(typeof args[i]);
//       sum += args[i];
//   }
//   return sum / args.length;
// }

// console.log(caclculateAverage(1, 2, "sfsd", "dsfdsfg"));
// console.log(caclculateAverage(1, 20, 30, 54));

// PRACTIK     ************

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       sum += arg;
//       count += 1;
//     }
//   }

//   return sum / count;
// }

// console.log(caclculateAverage(1, 3, 17, true));
// ***********************************************

// ********    4   ******
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function totalSum(a) {
//   const arrSum = [];
//   for (i = 0; i < a.length - 1; i++) {
//     const b = a[i] + a[i + 1];
//     arrSum.push(b);
//   }
//   return arrSum;
// }

// console.log(totalSum(someArr));
// *********************************

// **************   5    *************

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// *************  Practik  **************

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "Sory, it is not an array!";
//   }
//   let SmallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < SmallestNumber) {
//       SmallestNumber = number;
//     }
//   }

//   return SmallestNumber;
// }

// console.log(findSmallestNumber(numbers));

//************ II *************

// function findSmallestNumber(numbers) {
//   let min;
//   for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i] < numbers[i + 1]);
//     if (numbers[i] < numbers[i + 1]) {
//       min = numbers[i];
//     } else {
//       min = numbers[i + 1];
//       console.log(numbers[i]);
//     }
//   }
//   return min;
// }
// findSmallestNumber(numbers);

//
// ************  Lesson III ***********
// const values = [-24, 17, 94, 1, -23, 37];

// function findSmallestNumber(numbers) {
//   //   console.log(typeof numbers);
//   let min;
//   if (!Array.isArray(numbers)) alert("Sory, it is not an array!");

//   for (let i = 0; i < numbers.length; i++) {
//     if (i === 0) {
//       min = numbers[i];
//     } else if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }
//   return min;
// }

// console.log(findSmallestNumber(values));
// *********************************************

// ********   6    ******??????????/
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// I
// function findLongestWord(string) {
//   let str;
//   //   console.log(str);
// }

// console.log(findLongestWord("tooo kjk laaa"));

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// II
// function findLongestWord(string) {
//   //   const args = Array.from(arguments).join(" ");
//   //   console.log(args);
//   let arr = [];
//   let b = Math.max(...arr).indexOf();
//   const str = string.split(" ");

// //   console.log(arr);

//   for (const item of str) {
//     const a = item.split("").length;
//     //   console.log(a);
//     arr.push(a);
//   }
//   //   return
// }

// findLongestWord(1, 2, 3);
// findLongestWord(10, 20, 30, 40);
// console.log(findLongestWord("London is the capital of Great Britain"));
// console.log(findLongestWord("London is the capital of Great Britain"));
// **************************************************************************

// **** 7 ****
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ***II***
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// function foo(obj) {
//   obj.mood = "happy";
//   obj.hobby = "skydiving";
//   obj.premium = false;

//   const keys = Object.keys(obj);

//   for (const key of keys) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }
// foo(user);
// ***************

// ***   8   ***
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let total = 0;

// const values = Object.values(salaries);

// for (const value of values) {
//   total += value;
// }
// console.log(total);

// **** II ****

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function foo(summa) {
//   let total = 0;

//   const values = Object.values(summa);

//   for (const value of values) {
//     total += value;
//   }
//     console.log(total);
// //   return total;
// }

// foo(salaries);
// **************************

// *******  9  *******
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність
// властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   exist() {
//     return this.a !== undefined && this.b !== undefined;
//   },
//   sum() {
//     return this.exist() ? this.a + this.b : "No such propeties";
//   },
//   mult() {
//     return this.exist() ? this.a * this.b : "No such propeties";
//   },
// };

// calculator.read(1, 5);
// console.log(calculator.exist());
// console.log(calculator.mult());

// II***********

// calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   exist() {
//     if (this.a !== undefined && this.b !== undefined) {
//       return this.sum;
//     } else {
//       return "No such propeties";
//     }
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(2, 5);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());

// ******************

// *******  10  ******
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let sum = 0;
//   for (const item of fruits) {
//     if (item.name === fruitName) {
//       sum += item.price * item.quantity;
//     }
//   }
//   console.log(`${fruitName}: ${sum}`);
// }

// calcTotalPrice(fruits, "Яблуко");
// calcTotalPrice(fruits, "Банан");

// console.log(calcTotalPrice(fruits, "Яблуко"));
// console.log(calcTotalPrice(fruits, "Банан"));
