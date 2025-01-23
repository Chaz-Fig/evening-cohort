/*function calculateDiscount(price, discountRate = 0.1) { let discount = price * discountRate; 
   let finalPrice = price - discount; 
   console.log(`Discount: $${discount.toFixed(2)}`); console.log(`Final Price: $${finalPrice.toFixed(2)}`)
}
   console.log('hello')

   //calculateDiscount(100)
  // calculateDiscount(200, 0.2)


   function calculateFinalPrice(price, discountRate = 0.15, taxRate = 0.08){
      let discount = (price*100)/(discountRate*100);
      let finalPrice = (price*100) - discount;
      let tax = finalPrice / (taxRate*100);

      console.log(`Original Price: $${price.toFixed(2)}`)
      console.log(`Discount: $${discount.toFixed(2)}`)
      console.log(`Tax $${(tax/100).toFixed(2)}`);
      console.log(`Final Price: $${(finalPrice/100).toFixed(2)}`);
   }

   calculateFinalPrice(100)
   calculateFinalPrice(200, 0.2, 0.1) */

  /* let username = "admin";
   let password = "password123";

   if (username == "admin") {
      if (password == "password123") {
         console.log('Access Granted!');
      } else {
         console.log('Incorrect Password.')
      }
} else {
   console.log ('unknown user.')
}

if (username == "admin" && password == "password123")
{
   console.log('Access Granted!')
} else {
   console.log('Access Denied!!!');
} */

   /*function checkDrivingEligibility(age, hasALicense) {
      if (age>= 18 && hasALicense) {
         console.log ("you can drive");
      } else if (age>= 18 && !hasALicense) {
         console.log ("you need a license to drive");
      } else {
         console.log("you are not old enough to drive.")
      }
   }
   checkDrivingEligibility (18, true)
   checkDrivingEligibility (16, false)
   checkDrivingEligibility (18, false) */


   /* function square(number) {
      console.log(number * number)
   } 
   square (5)
   square (7)
   square (10) */


  /* let isWeekend = true;
   let isHoliday = true;

   function offWork(isWeekend, isHoliday){
      if(isWeekend || isHoliday){
         console.log("No Work!!")
      }
      else{console.log("Go to work loser!")}
   }

   offWork(true, true)
   offWork(true,false)
   offWork(false, true)
   offWork(false, false) */

   function greet(name){
      console.log(`Hello, ${name} ! Welcome to Javascript class.`);
   }