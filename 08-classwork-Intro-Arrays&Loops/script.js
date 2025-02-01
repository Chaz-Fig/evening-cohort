//exercise 1 todo list

function exerciseOne(todoList, newItem) {
  //adding a new task
  todoList.push(newItem);
  console.log(todoList);

  //removing the first task
  todoList.shift();
  console.log(todoList);
}

// exerciseOne(["Make dinner", "Wash dishes", "Study JavaScript"], "walk dogs")

//excersice 2 even numbers

function exerciseTwo(numbers) {
  const evenNumbers = []; //line is an empty array which is used to store the even numbers from number array..i think
  //this code below checks for even numbers and adds it to the evenNumbers array.. for(let # of #s) loop iterates over each number
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } //if statement checks if number is even using % operator. if number %2 ===0.
  }
  console.log(evenNumbers);
}

// exerciseTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//exercise 3 reverse Array

function excersiceThree(numbers) {
  const reversedNumbers = [];

  for (let i = numbers.length - 1; i >= 0 ; i--) {
   let currentNumber = numbers[i]
   console.log(currentNumber);

// [] add current number to it
   reversedNumbers.push(currentNumber)
  }
  console.log(reversedNumbers);
}
// excersiceThree([3,7,4,200,120])

//using a loop to reverse it
//line is array created named numbers

//couldn't figure out how to get console to show large number. it is undefined. I need to get better at understanding arrays....

function largestNumber(numbers) {
  let largestNumber = 0;

  for (let number of numbers) {
    console.log(number);
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  console.log("The largest number in array is", largestNumber);
}

// largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
