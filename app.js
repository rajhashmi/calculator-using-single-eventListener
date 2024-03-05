const buttonsContainer = document.querySelector(".buttons-container");
const input = document.getElementById("input");

const btnArr = [
  "C",
  "%",
  "/",
  "CL",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "+/-",
  "0",
  ".",
  "=",
];

const operators = ["%", "/", "*", "-", "+"];

function createBtn(arr) {
  const fragment = document.createDocumentFragment();
  arr.forEach((el) => {
    const btn = document.createElement("button");
    btn.textContent = el;
    btn.classList.add("btn");
    fragment.appendChild(btn);
  });
  buttonsContainer.appendChild(fragment);
}
createBtn(btnArr);

function calculation(value) {
  const inputValue = input.value.split("");  
  if (operators.includes(inputValue.at(-1)) && operators.includes(value)) {
    return;
  } else {
    input.value += value;
  }

  switch (value) {
    case "=":
      const calculatedValue = input.value.slice(0, -1);
      showResult(calculatedValue);
      break;
    case "CL":
      input.value = "";
      break;
    case "C":
      const clear = input.value.slice(0, -2);
      input.value = clear;
      break;
    default:
      break;
  }
}

function showResult(value) {
  try {
    input.value = eval(value);
  } catch (err) {
    input.value = "";
    throw new Error("calculation failed");
  }
}

function calFunc(event) {
  console.dir(event);                        
  if ((event.target.computedRole = "button")) {
    calculation(event.target.computedName);
  }
}

buttonsContainer.addEventListener("click", calFunc);