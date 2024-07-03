let cInput = "";
let pInput = "";
let operator = "";

function updateDisplay() {
  document.getElementById("display").value = cInput || pInput;
}

function number(num) {
  cInput += num;
  updateDisplay();
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

function power() {
  pInput = cInput;
  operator = "^";
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
    case "^":
      result = Math.pow(prev, current);
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

function cbrt() {
  cInput = Math.cbrt(parseFloat(cInput));
  document.getElementById("display").value = cInput;
}

function square() {
  cInput = Math.pow(parseFloat(cInput), 2);
  document.getElementById("display").value = cInput;
}

function cube() {
  cInput = Math.pow(parseFloat(cInput), 3);
  document.getElementById("display").value = cInput;
}

// Clear Function (difference b/w clear() and clearDisplay())

function clearDisplay() {
  cInput = "";
  pInput = "";
  operator = "";
  document.getElementById("display").value = "";

  console.log("clear");
}

function decimal() {
  if (cInput.indexOf(".") == -1) {
    cInput += ".";
    document.getElementById("display").value = cInput;
    console.log("Added Decimal Point");
  } else {
    console.log("Can't add another Decimal Point");
  }
}

function backspace() {
  cInput = cInput.substring(0, cInput.length - 1);
  document.getElementById("display").value = cInput;
}

function symbol() {
  if (cInput !== "") {
    cInput = parseFloat(cInput) * -1;
    document.getElementById("display").value = cInput;
  }
}
