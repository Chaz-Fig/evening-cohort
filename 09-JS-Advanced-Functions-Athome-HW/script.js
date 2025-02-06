//starting function
//add value 5 to the start of the array
//return a new array where each remaining element is incremented by 1.
function transformArray(nums) {
   nums.unshift(5);// Adds 5 to the start of the array
   nums.pop();// Method removed the last element
   const incrementArray = []; // Create a new array 
   for (let i = 0; i < nums.length; i++) {
      incrementArray.push(nums[i] + 1); //for loop iterates through the array, increments each value by 1, and stores it in a new array.
   }
   return incrementArray; //return new array
 }

 console.log(transformArray([20, 40, 60])); //output 6, 21, 41

 //call back function example
 function greetUser() {
   console.log('Hello!');
 }
 
 function processUserData(callback) {
   console.log('Processing data...');
   callback();  // The callback is executed after data is "processed"
 }
 
 processUserData(greetUser);  // Output: "Processing data..." followed by "Hello!"

 //example of callback and setTimeout function from the dashboard
 function fetchData (callback) {
   console.log('Fetching data...');
   setTimeout(() => {
     console.log('Data fetched successfully!');
     callback();  // Callback is called once the "data fetching" is done
   }, 2000); // Simulate a 2-second delay
 }
 
 function displayData() {
   console.log('Displaying fetched data...');
 }
 
 //fetchData(displayData);

 //exercise 1 basic callback function
 function greetCustomer() {
   console.log("Your food is ready");
 }
 function prepareFood(callback) {
   console.log("Preparing food..");
   callback();
 }
 prepareFood(greetCustomer);

 //exercise 2 Delayed callback with setTimeout
 function displayData () {
   console.log('Displaying data...');
 }
 function requestData (callback) {
   console.log("Requesting data..");
   setTimeout(callback, 2000); //simulates 2-second delay
 }

 requestData(displayData); //invokes request data & uses displayData function as the callback..
 
 //regular function before arrow function
 const sum = function(a, b) {
   return a + b;
 };
 //arrow function
 const sumArrow = (a, b) => a + b;

 //console.log(sum(2, 3));
 console.log(sumArrow(2, 3)); //output 5 for both regular and arrow function

 //exercise 1 writing an Arrow Function
 const square = x => x * 5;

 console.log(square(5)); //output should be 25
 //exercise 2 converting reg function to an arrow function
// Regular function
function multiply(a, b) {
   return a * b;
 }
 resultRegular = multiply(3, 4);

 console.log(resultRegular);
 //arrow function
 const multiplyArrow = (a, b) => a * b;
 const resultArrow = multiplyArrow(3, 4);
 
 console.log(resultArrow);
 //map Function
 const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
//const doubled = numbers.map(num => num * 2);
//console.log(doubled); // Output: [2, 4, 6, 8, 10]
