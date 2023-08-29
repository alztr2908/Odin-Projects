// sanity check
console.log("Hello world!");

let firstOperand = "";
let secondOperand = "";
let operator = null;

const keys = document.querySelectorAll(".keys");
const lastOperationScreen = document.querySelector("#lastOperationScreen");
const currentOperationScreen = document.querySelector(
  "#currentOperationScreen"
);

function deleteResults() {
  currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0, -1);
}

function resetResults() {
  currentOperationScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  operator = null;
}

function updateCurrentOperationScreen(val) {
  if (val == "DELETE") {
    deleteResults();
  } else if (val == "CLEAR") {
    resetResults();
  } else {
    currentOperationScreen.textContent += val;
  }
}

function updateValue(e) {
  updateCurrentOperationScreen(e.target.innerText);
}

keys.forEach((key) => {
  key.addEventListener("click", updateValue);
});
