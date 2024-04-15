// "hello" + "world"

const name = "Utsav"
const repoCount = 50

// console.log(name +  " " + repoCount + "Value");

// console.log('Hello my name is ${name} and my repo is ${repoCount}'); // string interpulation - to do many things on the go

console.log("Hello");

const gameName = new String('Ut-sa-v ji')
console.log(gameName[1]);
console.log(gameName.__proto__); // to check objects 


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4)); // 4th position p konsa character hai
// console.log(gameName.indexOf('s')); // 's' konse index pr hai

const newString = gameName.substring(0,4) // last vala entry nhi lega 
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "     Utsav.    "
console.log(newStringOne);
console.log(newStringOne.trim()); // unnecessary space ko hata deta hai 

const url = "https://utsav.com/utsav%20gupta"
console.log(url.replace('%20', '-')); // keywords ko replace krne k liye

console.log(url.includes('utsav')); // check krne k liye whether ek keyword isme include hai ya nahi

console.log(gameName.split('-')); // kisi condition k basis p split krna

