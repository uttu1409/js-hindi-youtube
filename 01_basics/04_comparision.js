// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // in this null is converted to 0 // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false

// === - strict check 
console.log("2" === 1); // this will not convert string to int and will return false as datatypes of 2 and 1 are different