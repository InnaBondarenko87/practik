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

// ******************  2  ***************************
