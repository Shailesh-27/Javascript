// if

// const isUserLoggedIN = true

// if(isUserLoggedIN){
//     console.log("welcome");
// }

// <,>,<=,>=, ==,!=,===,!==

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}

