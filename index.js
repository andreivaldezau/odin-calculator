let a = 0;
let b = 0;
let operator = "";

const displayText = document.querySelector(".display-text");
const numbers = document.querySelectorAll("button.number");
const reset = document.querySelector("button.reset");

numbers.forEach((button) =>
  button.addEventListener("click", () => onClickNumber(button.textContent))
);

reset.addEventListener("click", () => onClickReset());

function onClickNumber(text) {
  if (displayText.textContent === "0") {
    displayText.textContent = text;
  } else {
    displayText.textContent += text;
  }
}

function onClickReset() {
  displayText.textContent = 0;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      console.log("Invalid operation.");
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
