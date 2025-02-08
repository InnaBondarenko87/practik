// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];

// const rock = styles.concat(["rock-n-roll"]);

// console.log(rock.indexOf("blues"));

// rock[1] = "classic";

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(rock);

// ************** 2*************

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(debil) {
//   const nameLogins = prompt("ВВЕДІТЬ ІМЯ КОРИСТУВАЧА:").trim();
//   //   console.log(debil);
//   for (const login of debil) {
//     if (login === nameLogins) {
//       return alert(`"Welcome, ${login}!"`);
//     } else {
//       return alert("User not found");
//     }
//   }
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.????????????????????????????

function caclculateAverage() {
  const args = Array.from(arguments);
  //
  //   console.log(args);
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    // console.log(args[i] !== typeof Number);
    if (args[i] !== typeof "number" && !isNaN(args[i]))
      // console.log(typeof args[i]);
      sum += args[i];
  }
  return sum / args.length;
}

console.log(caclculateAverage(1, 2, "sfsd", "dsfdsfg"));
console.log(caclculateAverage(1, 20, 30, 54));

// functifunction caclculateAverage() {
//   const args = Array.from(arguments);
//   //   console.log(args);
//   let sum = 0;

//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum / args.length;
// }

// console.log(caclculateAverage(1, 2, 3));
// console.log(caclculateAverage(1, 20, 30, 54));

// **************
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// *************
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];
