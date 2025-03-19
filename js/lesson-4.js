// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// const body = document.querySelector("body");
// console.log(body); //1

// const title = document.querySelector("#title");
// console.log(title); //2

// const listElem = document.querySelector(".list");
// console.log(listElem); //3

// const liElems = document.querySelectorAll("[data-topic]");
// console.log(liElems); //4

// const firstLiElem = document.querySelectorAll("[data-topic]:first-child");
// console.log(firstLiElem); // 5

// const lastLiElem = document.querySelectorAll("[data-topic]:last-child");
// console.log(lastLiElem); // 6

// const siblingH1 = document.querySelector("#title");
// console.log(siblingH1.nextElementSibling); // 7

// const titleH3 = document.querySelectorAll("h3");
// // console.log(titleH3); //8

// const titleH3 = document.querySelectorAll("h3");
// titleH3.forEach((el, i) => el.classList.add("active"));
// console.log(titleH3); //9

// const nav = document.querySelector("[data-topic = 'navigation']");
// console.log(nav); //10

// const nav = document.querySelector("[data-topic = 'navigation']");
// nav.classList.add("odd");
// console.log(nav);//11

// const nav = document.querySelector("[data-topic = 'navigation']");
// nav.querySelector("p");
// nav.textContent = "Я змінив тут текст!";
// console.log(nav.textContent); //12

// nav.querySelector("p");
// nav.textContent = "Я змінив тут текст!";
// console.log(nav.textContent); //12

// const currentTopic = "manipulation";
// const li = document.querySelectorAll("[data-topic]");

// for (const item of li) {
//   if (item.dataset.topic === currentTopic) {
//     console.log(item);
//     item.style.backgroundColor = "blue"; //14
//     break;
//   }
// } //13

// const el = document.querySelector(".completed");
// console.log(el); //15

// const el = document.querySelector(".completed");
// const liEl = el.parentNode;
// liEl.remove(liEl); // 16

// const textP = document.createElement("p");
// textP.textContent = "Об'єктна модель документа (Document Object Model)";
// const h1El = document.querySelector("h1");
// h1El.append(textP);// 17

// const ulEl = document.querySelector(".list");
// console.log(ulEl);
// const liEl = document.createElement("li");
// console.log(liEl);
// const h3El = document.createElement("h3");
// h3El.textContent = "Властивість innerHTML";
// const pEl = document.createElement("p");
// pEl.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// liEl.append(h3El, pEl);
// ulEl.append(liEl); //18

// const ulEl = document.querySelector(".list");
// console.log(ulEl);
// const liEl = document.createElement("li");
// ulEl.insertAdjacentHTML(
//   "beforeend",
//   `<li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li>`
// ); //19

// const ulEl = document.querySelector(".list");
// ulEl.innerHTML = ""; //20

// ******************  2  ***************************
// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const numberContainer = document.querySelector(".numberContainer");

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const elements = [];

// for (let i = 0; i < 100; i++) {

//   const div = document.createElement("div");
//   div.classList.add("number");
//   const number = randomNumber();
//   div.textContent = number;

//   if (number % 2 !== 0) {
//     div.classList.add("odd");
//   } else {
//     div.classList.add("even");
//   }
//   elements.push(div);
// }

// numberContainer.append(...elements);
// __________________________________________________________

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const numberContainer = document.querySelector(".numberContainer");

// const markup = [];

// for (let i = 0; i < 100; i++) {
//   const number = randomNumber();

//   const className = number % 2 === 0 ? "even" : "odd";

//   const block = `
//     <div class='number ${className}'>
//     ${number}
//     </div>
//     `;

//   markup.push(block);
// }

// numberContainer.insertAdjacentHTML("beforeend", markup.join(""));

// ----------------------------------------------------
// *************  3  *******************

// ===================================
// ---------------------------------------------
// const inputEl = document.querySelector(".contact-form-input");
// inputEl.addEventListener("input", onInputElInput);

// function onInputElInput(e) {
//   const a = e.target.value;
//   if (a.length >= 6) {
//     inputEl.classList.add("success");
//     inputEl.classList.remove("error");
//   } else {
//     inputEl.classList.remove("success");
//     inputEl.classList.add("error");
//   }
// }
// //1
// =========================
// ----------------------
//     не працює focus!!! zd 2
//--------------------------

// const inputEl = document.querySelector(".contact-form-input");
// inputEl.addEventListener("focus", onInputElFocus);

// function onInputElFocus(e) {
//   const text = e.target.value;

//   if (text.length !== 0) {
//     inputEl.style.outline = "3px solid green";
//   } else {
//     inputEl.style.outline = "3px solid red";
//   }
// }

// ----------------------
//      zd 3
//--------------------------

// const inputEl = document.querySelector(".contact-form-input");
// inputEl.addEventListener("blur", onInputElBlur);

// function onInputElBlur(e) {
//   const text = e.target.value;

//   if (text.length !== 0) {
//     inputEl.style.outline = "3px solid lime";
//   } else {
//     inputEl.style.outline = "3px solid red";
//   }
// }
// ____________________________________________________
//  zd 4
// __________________________________________________

// const formEvents = document.querySelector(".contact-form");
// formEvents.addEventListener("submit", onFormSubmit);
// const inputEl1 = document.querySelector(".contact-form-input");
// inputEl1.addEventListener("input", onInput1Input);

// const spanEl = document.querySelector(".js-username-output");

// function onFormSubmit(event) {
//   event.preventDefault();

//   const elements = event.target.elements;
//   if (elements.userName.value.length !== 0 && elements.accept.checked) {
//     console.log(elements.userName.value);
//   } else {
//     console.log("не всі поля заповнили!");
//   }

//   formEvents.reset();
//   spanEl.textContent = "Anonymous";
// }

// function onInput1Input(event) {
//   spanEl.textContent = event.target.value;
// }

// =================================================
// через checkbox????
// -------------------------------------------
// const inputEl = document.querySelector(".contact-form-checkbox");
// inputEl.addEventListener("change", onInputChange);
// function onInputChange(event) {
//   spanEl.textContent = event.target.accept;
//   //   console.log("jk", event);
// }
// ________________________________________________________________
// ===================================================================

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// при кліку на елемент меню, розкривай блок з текстом. При повторному кліку
// по елементу, розкритий текст приховується. Нажимаючи на інші
// елементи меню, попередньо відкриті елементи не закриваються.

// document.addEventListener("DOMContentLoaded", () => {
//   const accordionButtons = document.querySelectorAll(".js-accordion-btn");

//   accordionButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const panel = button.nextElementSibling; // Знаходимо наступний елемент (панель з текстом)

//       // Перемикаємо клас "active" для відображення чи приховування панелі
//       panel.classList.toggle("active");
//     });
//   });
// });
