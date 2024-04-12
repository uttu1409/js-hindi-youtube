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

const myFunction = function (params) {  // function  // this returns object function
    console.log("Hello world");
}
