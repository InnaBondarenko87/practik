// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// ****   I   *****

// const input = prompt("Введіть число:");
// const number = Number(input);
// if (number === 10) {
//   alert("Вірно");
// } else alert("Невірно");

// ****    II   *****
// const input = prompt("Введіть число:");
// const number = Number(input);
// number === 10 ? alert("Вірно") : alert("Невірно");

// ***********************

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// const min = 78;
// if (min > 0 && min <= 15) {
//   alert(`${min} - "I чверть"`);
// } else if (min > 15 && min <= 30) {
//   alert(`${min} - "II чверть"`);
// } else if (min > 30 && min <= 45) {
//   alert(`${min} - "III чверть"`);
// } else if (min > 46 && min <= 60) {
//   alert(`${min} - "IV чверть"`);
// } else {
//   alert("Ви ввели невірне число");
// }

// ****************
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// I cn

// const result = prompt("Введіть значення від 1 - 4:");

// switch (result) {
//   case "1":
//     console.log("зима");
//     break;
//   case "2":
//     console.log("весна");
//     break;
//   case "3":
//     console.log("літо");
//     break;
//   case "4":
//     console.log("осінь");
//     break;
//   default:
//     console.log("Вибачте, але ви маєте ввести значення від 1 до 4 включно");
// }

// II cn
// function getSeasons(result) {
//   result = prompt("Введіть значення від 1 - 4:");

//   switch (result) {
//     case "1":
//       return "зима";
//     case "2":
//       return "весна";
//     case "3":
//       return "літо";
//     case "4":
//       return "осінь";
//     default:
//       return "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//   }
// }
// console.log(getSeasons());

// ************************
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// const userAnswer = Number(prompt("ВВЕДІТЬ КІЛЬКІСТЬ ХВИЛИН:"));

// console.log(formatMessage(userAnswer));

// function formatMessage(totalMinuts) {
//   const hours = Math.floor(totalMinuts / 60);
//   const modifieHours = String(hours).padStart(2, "0");
//   const minutes = totalMinuts % 60;
//   const modifieMinutes = String(minutes).padStart(2, 0);
//   return `${modifieHours}:${modifieMinutes}`;
// }

// *********** Viktor

// const promt = prompt("write minute");

// const foo = (promt) => {
//   const hour = Math.floor(promt / 60);
//   const minute = promt % 60;
//   const rezalt = `${String(hour).padStart(2, "0")}:${String(minute).padStart(
//     2,
//     "0"
//   )}`;
//   return rezalt;
// };
// console.log(foo(promt));

// *********   zadacz 5  *******

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// function fuu() {
//   const login = prompt("ВВЕДИ ЛОГІН:");
//   if (login === "admin") {
//     password = prompt("ПАРОЛЬ:");
//     console.log(login);
//     password === "Я головний"
//       ? alert("Добрий день!")
//       : alert("Невірний пароль!");
//   }
//   if (login === null || login.trim() === "") {
//     alert("Скасовано");
//   } else {
//     alert("Я вас не знаю");
//   }
// }

// fuu();

//*************   zadacza 6  ***********

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// const whileNumber = (d) => {
//   let n = 1;
//   while (n <= d) {
//     console.log(n);
//     n++;
//   }
// };
// whileNumber(20);

// ***********    zadacz 7   **********

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   min = 0;
//   max = 100;
//   let total = 0;
//   for (let index = max; index > min; index--) {
//     if (!(index % 2)) {
//       console.log(index);
//       total += index;
//     }
//   }
//   console.log(total);
// }
// getNumbers();

// ************
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// ****  GPT  ****
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }

//   return a < b ? a : b;
// }

// ***************
// ??????

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     confirm("ВИ ДОСЯГЛИ 18 РОКІВ?");
//   }
// }
// isAdult();

// **********    zadacza 10   *************

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   num = 30;
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i}"fizzbuzz"`);
//     }
//     if (i % 3 === 0) {
//       console.log(`${i}"fizz"`);
//     }
//     if (i % 5 === 0) {
//       console.log(`${i}"buzz"`);
//     }
//   }
// }
// fizzBuzz();
