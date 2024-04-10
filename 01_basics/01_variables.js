const accountId = 144553 
let accountEmail = "utsav@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate

// accountId = 2 //const cannot be changed
// to declare variable use 'let' or 'var'
// we use 'let' to declare variable to avoid problem of scope - {/..}

accountEmail = "ut@ut.com"
accountPassword = "123"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]) //gives table as below