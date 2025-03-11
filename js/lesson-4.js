// const body = document.querySelector("body");
// console.log(body);

// const title = document.querySelector("#title");
// console.log(title);

// const listElem = document.querySelector(".list");
// console.log(listElem);

// const liElems = document.querySelectorAll("[data-topic]");
// console.log(liElems);//?? 4

// const firstLiElem = document.querySelectorAll("[data-topic]:first-child");
// console.log(firstLiElem);//?? 5

// const lastLiElem = document.querySelectorAll("[data-topic]:last-child");
// console.log(lastLiElem);//?? 6

// const siblingH1 = document.querySelector("h1");
// console.log(siblingH1.previousElementSibling); //?? 7

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
// console.log(nav.textContent);//12

// nav.querySelector("p");
// nav.textContent = "Я змінив тут текст!";
// console.log(nav.textContent);//12ghhbkj

// const currentTopic = "manipulation";
// const li = document.querySelectorAll("[data-topic]");
// // console.log("ggdgd", document.querySelectorAll("[data-topic]"));
// for (const item of li) {
//   if (item === currentTopic[value]) {
//     return li;
//   }
//   {
//     console.log("hello");
//   }
// }//13????????/

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

// const div = document.querySelector(".number");

// console.log(div);

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
