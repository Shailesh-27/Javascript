// var c = 300
let a = 100

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Innner: ",a);

}

// console.log(a);
// console.log(b);
// console.log(c);


// Nested scopes

function one(){
    const username = "sam"

    function two(){
        const website = "google"
        console.log(username);
    }
    // console.log(website);
    two()
}


// one()

if(true){
    const username = "sam"
    if(username === 'sam'){
        const website = " youtube"
        // console.log(username + website);
    }
    //  console.log(website);
}

// console.log(username);

// ******************* intresting *********************

function addOne(value){
    return value + 1
}

console.log(addOne(6))

const addTwo = function(num){
    return num + 2
}

addTwo(6)