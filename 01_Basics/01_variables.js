const accountId = 14556
let accountEmail = "shailesh@gmail.com"
var accountPassword = "123456"
accountCity = "Gandhinagar"
let accountState


// accountId = 2 // You can't reassign value to const variable

accountEmail = "sp@gmail.com"
accountPassword = "1234566789"
accountCity = "Surat"


console.log(accountId)

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

