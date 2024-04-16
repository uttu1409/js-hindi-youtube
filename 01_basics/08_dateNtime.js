// in JS dates are calculated from 1 Jan 1970

let myDate = new Date() // gives today's date
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

const newDate = new Date(20, 0 , 23)
console.log(newDate.toDateString());
console.log(newDate.toLocaleString());

const createdDate = new Date("2023-01-04")
console.log(createdDate.toLocaleString());
