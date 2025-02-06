/* const applyDiscount = (prices, discount, callback) => {
   callback(prices, discount);
};


const discountFunction = (prices, discount) => {
   let discountPrices = prices.map((p) => p - (p * discount));
   console.log(discountPrices);
};

applyDiscount([10, 20, 30], .10) */

const squareAndPrint = (nums) => {
   const squaredNumbers = nums.map((num)=> num*num)
   console.log(squaredNumbers)
}
squareAndPrint([3,4,5,6])

const oddNumbers = (nums) => {
   let oddArray = nums.filter ((num=> num % 2 !== 0 ))
   
}
oddNumbers([1,2,3,4,5,6,7,8])

/* const startingTask = () => {
   setTimeout (()=> {
      console.log("Task Completed!")
   }, 5000); 
   setInterval(()=> {
      console.log("Still waiting...")   
   }, 2000);
}
startingTask() */


const repeartNum = (nums) => {
let duplicateArray = [];
   for(let index = 0; nums.length > index; index++) {
   let currentNumber = nums[index]
      for (let j = 0; j < nums.length; j++) {
         let currentIndex = nums[j];
      if (currentNumber === currentIndex && index !== j) {
         duplicateArray.push(currentNumber)
         console.log(duplicateArray);
      }
      }
};}

repeartNum([1,2,3,4,5,2,6]);