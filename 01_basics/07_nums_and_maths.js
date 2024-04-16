const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // to change in string
console.log(balance.toFixed(3)); // to calculate precise value upto 2 decimal or depending upon number input

const otherNumber = 1234.99
console.log(otherNumber.toPrecision(4)); // to give precise value to some value

const hundred = 10000
console.log(hundred.toLocaleString('en-IN')); // gives US values with commas in digits eg. 10,000

// ************* Maths ***************

// console.log(Math);
// console.log(Math.abs(-4)); // to give absolute value eg -4 = 4
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // round of to top value 
// console.log(Math.floor(4.8)); // round of to lower value

console.log(Math.random()); // iski value hamesha 0 to 1 ke beech mai aaegi 
console.log((Math.random()*10) + 1);

const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // to give value between 10 to 20 
