//video lesson follow along
const todoList = ['make dinner', 'wash dishes', 'watch Youtube'
];
renderTodoList();
function renderTodoList() {
let todoListHTML = '';

for(let i = 0; i< todoList.length; i++) {
const todo = todoList[i];
const html = `<p>${todo}</p>`; //created html code for the loop
todoListHTML += html;
}
console.log('todoListHTML');

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}
function addTodo() {
const inputElement = document.querySelector('.js-name-input')
const name = inputElement.value;

todoList.push(name);
console.log(todoList);

inputElement.value = ''; //will make text box value empty
renderTodoList();
}

//to do list reading material
/*const todoList = ["Make dinner", "Wash dishes", "Study JavaScript"];
todoList.push("Watch a tutorial");
console.log(todoList); // Output: ["Make dinner", "Wash dishes", "Study JavaScript", "Watch a tutorial"]

todoList.shift();
console.log(todoList); // Output: ["Wash dishes", "Study JavaScript", "Watch a tutorial"] 


/*let i = 1; //created variable i equal to 1

while (i <=5)  {
   console.log(i);
   i = i + 1;
} //while is our loop or while loop created if loop conditiion i<=5 is true then the console log and i=i+1 will keep it running over and over again.if the conditions are false it will stop running. i=i +1; shortcut to i=i +1; is i+= 1; or i++ is the increment step. without it the loop will go on an infinite loop

for (let i = 1; i<= 5; i++) {
   console.log(i); //for is a shorter version of the while loop. it groups everything together the variable, condition, and increase variable by 1 and console.log.
}
/*
let randomNumber = 0;

while (randomNumber < 0.5) {
   randomNumber = Math.random
}

console.log(randomNumber);
*/
//looping through an array. going through each value of an array one by one. Doing something with each value

//looping array and doing something with the value
/* for (let index = 0; index <= todoList.length - 1; index++) {
   const value = todoList[index];
   console.log(value);
} */

//accumulator pattern. Creating a variable to store results.
/* const nums = [1, 1, 3];
let total = 0 //changed from const to let. let total is the accumulator value

//Loop through the array & update the results
for(let i = 0; i <nums.length; i++){
const nums = [i];
total = total + nums; //shortcut is total += num;
}
console.log(total);

const numsDoubled = [];

for (let i = 0; i <nums.length; i++) {
   const num = nums[i];
   numsDoubled.push(num * 2); //doubling our values
   console.log(numsDoubled);
} */