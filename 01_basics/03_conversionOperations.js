let score = true

// const {score} = req.body // in this we don't know about the type of score

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false
// "utsav" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof someNumber);
console.log(typeof stringNumber);