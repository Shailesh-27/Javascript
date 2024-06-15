const user = {
    name : "Shailesh",
    price: 100,

    welcomeMsg : function(){
        console.log(`${this.name}, welcome to website`);
        // console.log(this);
    }


}

// user.welcomeMsg()
// user.name = "Sam"
// user.welcomeMsg()

// console.log(this);

// function one(){
//     let username = "Sam"
//     console.log(this.username);
// }
// one()

// const one = function(){
//     let username = "Sam"
//     console.log(this.username);
// }

const one = () => {
    let username = "Sam"
    console.log(this);
}

// one()

// Explicit return
// const addTwo  = (a,b) => {
//      return a + b
// }

// Implicit return
// const addTwo  = (a,b) =>  a + b

// const addTwo  = (a,b) =>  (a + b)

const addTwo  = (a,b) =>  ({username: "Sam"})


console.log(addTwo(4,5))


const myArr = [2,3,4,5]