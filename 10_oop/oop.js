const user  = {
    username : "Yash",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log('Got user data from db');
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}


const userOne = new User("Sam",9,true)
const userTwo = new User("Yash",10,false)
console.log(userOne.constructor);
console.log(userTwo);
