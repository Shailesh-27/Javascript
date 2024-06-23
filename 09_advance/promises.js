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
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Finally executed");
})

const promiseFive = new Promise(function(reslove,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            reslove({username:"java",email:"smit@gmail.com",})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    },2000)
})

async function consumePromisedFive(){
    try
        {
            const res = await promiseFive
            console.log(res);
        }
    
    catch(error){
        console.log(error);
    }
}

consumePromisedFive()


// async function getAllUser(){
//    try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     console.log(data);
//    } catch (error) {
//         console.log("E: ",error);
//    }
// }

// getAllUser()

fetch('https://api.github.com/users/evanphx').then((res) =>{
    return res.json()
}).then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))