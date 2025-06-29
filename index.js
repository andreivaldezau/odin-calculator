let number = 0;
let firstNumber = true;
let firstOperator = true;
let firstDecimal = true;
let operator = "";

const displayText = document.querySelector(".display-text");
const numbers = document.querySelectorAll("button.number");
const operators = document.querySelectorAll("button.operator");
const decimal = document.querySelector("button.decimal");
const apply = document.querySelector("button.apply");
const reset = document.querySelector("button.reset");

numbers.forEach((button) =>
  button.addEventListener("click", () => onClickNumber(button.textContent))
);
operators.forEach((button) =>
  button.addEventListener("click", () => onClickOperator(button.textContent))
);
decimal.addEventListener("click", () => onClickDecimal());
apply.addEventListener("click", () => onClickApply());
reset.addEventListener("click", () => onClickReset());

function onClickNumber(text) {
  if (firstNumber === true) {
    displayText.textContent = text;
    firstNumber = false;
  } else {
    displayText.textContent += text;
  }
}

function onClickOperator(newOperator) {
  if (firstOperator === true) {
    number = +displayText.textContent;
    firstOperator = false;
  } else {
    number = operate(number, +displayText.textContent, operator);
  }
  displayText.textContent = number;
  operator = newOperator;
  firstNumber = true;
  firstDecimal = true;
  decimal.removeAttribute("disabled");
}

function onClickDecimal() {
  if (firstDecimal === true) {
    if (firstNumber === true) {
      displayText.textContent = "0.";
      firstNumber = false;
    } else {
      displayText.textContent += ".";
    }
    firstDecimal = false;
    decimal.setAttribute("disabled", "");
  }
}

function onClickApply() {
  displayText.textContent = operate(number, +displayText.textContent, operator);
  number = 0;
  firstNumber = true;
  firstOperator = true;
  firstDecimal = true;
  decimal.removeAttribute("disabled");
}

function onClickReset() {
  displayText.textContent = 0;
  number = 0;
  firstNumber = true;
  firstOperator = true;
  firstDecimal = true;
  decimal.removeAttribute("disabled");
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
