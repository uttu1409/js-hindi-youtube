// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol (to make a value unique), BigInt

// JS is dynamically type 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemo = null // object
let userEmail = undefined // let userEmail; // undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 246722767642746275427426n - BigInt


// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // arrays

let myobj = {   //object
    name: "utsav",
    age: 21,
}

const myFunction = function (params) {  // function - // this returns object function
    console.log("Hello world");
}

// *********************************** Memory

// Stack (Primitive), Heap (Non - Primitive)

let myName = "Utsav" // inside stack

let anotherName = "Ranu"
anotherName = "Sparsh"

console.log(myName);
console.log(anotherName);

let userOne = {    // inside heap
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "Utsav@google.com"
console.log(userTwo);

// stack mai value ka copy diya jata hai and heap mai value 