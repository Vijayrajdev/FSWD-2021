// const button = document.querySelector("button");
// const input = document.querySelector("input");
// const list = document.querySelector("ul");
//
// button.addEventListener("click", (e) => {
//   const inputValue = input.value;
//   const element = document.createElement("li");
//   const textNode = document.createTextNode(inputValue);
//
//   element.appendChild(textNode);
//   list.appendChild(element);
// });

const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener(
  "click",
  (mode = (e) => {
    body.classList.toggle("dark");
  })
);
