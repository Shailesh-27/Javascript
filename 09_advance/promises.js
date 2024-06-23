const promiseOne = new Promise(function (reslove,reject){
    // Do async task
    // DB calls
    // cryptography
    setTimeout(function(){
        console.log("Async task is completed");
        reslove()
    },2000)

})


promiseOne.then(() =>{
    console.log("Promise consumed");
})


new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log("Async task 2");
        reslove()
    },2000)
}).then(() => {
    console.log("Async 2 resloved");
})

const promiseThree = new Promise(function(reslove,reject){
    setTimeout(function(){
        reslove({username:"Smit",email:"smit@gmail.com",})
    },2000)
})

promiseThree.then((user)=>{
    console.log(user);
})

const promisefour = new Promise(function(reslove,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            reslove({username:"Smit",email:"smit@gmail.com",})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    },2000)
})

promisefour.then((user)=>{
    console.log(user.username);
    return user.username
}).catch((error) => {
    console.log(error);
})