let cInput = "";
let pInput = "";
let operator = "";

function number(num) {
  cInput = "";
  cInput += num;
  document.getElementById("display").value = cInput;
  console.log(cInput);
}

// Basic Operations

function add() {
  pInput = cInput;
  operator = "+";
  cInput = "";
  console.log(cInput, operator);
}

function subtract() {
  pInput = cInput;
  operator = "-";
  cInput = "";
  console.log(cInput, operator);
}

function multiply() {
  pInput = cInput;
  operator = "*";
  cInput = "";
  console.log(cInput, operator);
}

function divide() {
  pInput = cInput;
  operator = "/";
  cInput = "";
  console.log(cInput, operator);
}

function submit() {
  let result = 0;
  let prev = parseFloat(pInput);
  let current = parseFloat(cInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  console.log(prev + " | " + current + " | " + result + " | " + operator);
  currentInput = result;
  operator = "";
  document.getElementById("display").value = result;
}

// Sqrt and Cube Root Independent Functions

function sqrt() {
  cInput = Math.sqrt(parseFloat(cInput));
  document.getElementById("display").value = cInput;
}

function cube() {
  cInput = Math.cbrt(parseFloat(cInput));
  document.getElementById("display").value = cInput;
}
