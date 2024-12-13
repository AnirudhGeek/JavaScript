const  accountId = 122553
let accountEmail = "raturianirudhgmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId = 2 // not allowed

accountEmail ="hc@gmail.com"
accountPassword="213444"
accountCity="benguluru"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])