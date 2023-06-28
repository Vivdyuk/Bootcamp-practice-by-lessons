const box = document.querySelector(".box");
const btn = box.querySelector(".btn");

console.dir(box);
console.dir(btn);

box.style.width = "100px";
box.style.height = "100px";
box.style.display = "flex";
box.style.border = "1px solid black";

btn.style.height = "20px";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const { throttle, debounce } = _;

const input = document.querySelector(".input");

const throttledBackgroundColorChange = throttle(backgroundColorChange, 1000);

input.addEventListener("input", throttledBackgroundColorChange);

function backgroundColorChange({target}) {
  box.style.backgroundColor = getRandomHexColor();
  if (target.value.includes("stop")) {
  target.removeEventListener("input", throttledBackgroundColorChange);
  }
}

/**
 * Наш юзер хоче хнайти певні товари в нашому магазині. Він їх вводитиме через пробіл в інпут
 * Коли юзер введе всі свої дані, нам потрібно відобразити в консоль масив зі всіма товарами, які шукав наш юзер
 */

const searchHandlerDeb = debounce(searchHandler, 1000);

input.addEventListener("input", searchHandlerDeb);

function searchHandler({target}) {
    console.log(target.value.split(" "))
    target.removeEventListener("input", searchHandlerDeb)
}

