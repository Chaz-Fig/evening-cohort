// //Persons profile
// const person = {
//    age: 16,
//    height: 130,
//    temperature: 64,
//    hasTicket: true,
//  };
 
//  //Can the ride on the rollercoaster
//  if (person.age >= 10 && person.height >= 120) {
//    console.log("You can ride the rollercoaster!");
//  } else {
//    console.log("You cannot ride the rollercoaster.");
//  }
 
//  //check if person can enter VIP lounge
//  if (person.age > 18 || hasTicket) {
//    console.log("You can enter the VIP lounge.");
//  } else {
//    console.log("You cannot enter the VIP lounge.");
//  }
 
//  // What should he/she wear based on the temp?
//  const clothingSuggestion = person.temperature < 70 ? "Wear a jacket!" : "Wear something light!";
//  console.log(clothingSuggestion);
 
//  // Can they get a free snack?
//  if (person.age >= 18 && hasTicket) {
//    console.log("You get a free snack!");
//  } else {
//    console.log("No snack for you.");
//  }
 
//  /*const el = document.querySelector('#my-div');
//  const input = document.querySelector('#input');
//  const btn = document.querySelector ('#btn');

// btn.addEventListener('click', btnHandler)

//  function btnHandler() {
//    const list = el;
//    const newItem = document.createElement('li');
//    list.appendChild(newItem);
//    newItem.textContent = input.value;
//    input.value = "";

//  }
//  console.log(input); */
 
//  /*const car = {
//     make: 'Toyota',
//     model: 'Rav4',
//     year: 2021,
//     mileage: 12000,
    
//     drive: function(miles) {
//       this.mileage >= miles;
//       console.log(`You drove ${miles} miles. New mileage: ${this.mileage}`);
//     }, //using this comma seperates the drive method from the car age function. This took me forever to figure out...
    
//     carAge: function() {
//       const currentYear = new Date().getFullYear();
//       return currentYear - this.year;
//     }
//   };
  
//   car.drive(100);
//   console.log(`Car age: ${car.carAge()} years`); */


//   //classroom part not to be confused with the HW part when any of the coaches sees this
//   const student = {
//     name: 'Chaz',
//     age: 35,
//     grades: [65, 75, 85, 88],
//     calculateAverageGrade: function(grades) {
//       const sum = grades.reduce(function (acc, curr) {
//         return acc + indexedDB;
//       }, 0);
//       console.log('sum average')
//       }
//     }


//Exercise 3 

const el = document.querySelector('#my-div');
 const input = document.querySelector('#input');
 const btn = document.querySelector ('#btn');
 btn.addEventListener('click', function(){
  console.log(el)
  el.style.backgroundColor = "red"
 })

console.log("connected")