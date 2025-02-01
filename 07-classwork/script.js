//alert(Welcome to My Website)
//const changeTextButton = document.querySelector('#change-text-button');
//const placeholder = document.querySelector('#Placeholder');

//changeTextButton.addEventListener('click', clickHandler);
//function clickHandler () {
  // console.log("connected")
  // placeholder.textContent = 'You Clicked the button FINALLY'
//}

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const sum = document.querySelector("#sum");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const submitBtn = document.querySelector("#submit");

function submitHandler() {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  let total = 0;

  switch (selectedOperation) {
    case "sum":
      total = num1 + num2;
      break;
    case "subtract":
      total = num1 - num2;
      break;
    case "multiply":
      total = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        total = num1 / num2;
      } else {
        total = "Cannot divide by 0!";
      }
      break;
    default:
      total = "Please select an operation!";
  }

  console.log("Result:", total);
}

let selectedOperation = "";

submitBtn.addEventListener("click", submitHandler);

sum.addEventListener("click", () => {
  selectedOperation = "sum";
});

subtract.addEventListener("click", () => {
  selectedOperation = "subtract";
});

multiply.addEventListener("click", () => {
  selectedOperation = "multiply";
});

divide.addEventListener("click", () => {
  selectedOperation = "divide";
});