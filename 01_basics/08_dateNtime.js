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

let createdDate = new Date("2023-01-04")
console.log(createdDate.toLocaleString());

let timeStamp = Date.now() // gives seconds from 1 Jan 1970
console.log(timeStamp);
console.log(createdDate.getTime());
console.log(createdDate.getMonth()); // to get month 

createdDate.toLocaleString('default', {
    weekday: 'long'
})