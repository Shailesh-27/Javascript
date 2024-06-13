// singleton

// Object literals
// Object.create

const mySys = Symbol("key1")

const JsUser = {
    name: "Shailesh",
    "full name": "Shailesh Kumawat",
    age: 22,
    location: "Gandhinagar",
    email: "Shailesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["MOnday", "Sunday"],
    [mySys]: "MyKey1"   // Symbol representation in object
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySys])

JsUser.email = "Shailesh123@gmail.com"

// Object.freeze(JsUser)  // It don't allow to modify object.

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())







