// Primitive

// 7 types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol  -> To make value unique
// 7. BigInt


const score = 100
const scoreValue = 10.3
const isLoggedIn = false
const temp = null

let userEmail // let userEmail = undefined

const id = Symbol('1234')
const anotherId = Symbol('1234')

// console.log(id)
// console.log(anotherId)
// console.log(id == anotherId)


const bigNumber = 111111111111111111111n




// Non-Primitive (Reference Type)

// 1. Array
// 2. Object
// 3. Functions

const heros = ["Shailesh", "Smit", "Yash"]

let myObj = {
    name: "Shailesh",
    age: 23,
}

const myFunc =  function (){
    console.log("Hello Shailesh");
}

console.log(typeof bigNumber)
console.log(typeof bigNumber)
console.log(typeof myFunc)
console.log(typeof myObj)
console.log(typeof id)




// ************************ Memory *************************

// 1. Stack (Primitive)
// 2. Heap (Non-Primitive)

let myName = "Shailesh"

let anotherName = myName
anotherName = "Kumawat"

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@gpl"
}

let userTwo = userOne

userTwo.email = "user123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


