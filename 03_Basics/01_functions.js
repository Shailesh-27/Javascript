function sayMyName(){
    console.log("Shailesh");
}

// sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNum(num1,num2){
    return num1 + num2
}

const result = addTwoNum(4,6)

// console.log("Result: ",result);

function loggingUser(username = "Sam"){
    if(!username){
        console.log("Please enter name");
        return
    }
    return `${username} just logged in`
}

// console.log(loggingUser("Shailesh"))
console.log(loggingUser())