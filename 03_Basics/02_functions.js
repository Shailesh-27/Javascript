function sumCartPrice(...num1){
    return num1
}

// console.log(sumCartPrice(200,400,600,700))


const user = {
    username : "Shailesh",
    prices : 69
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 300
})

const myNewArr = [200,400,500,10000]

function returnSecondValue(getArray){
    console.log(getArray[2]);
}

// returnSecondValue(myNewArr)
returnSecondValue([1,2,3,4,5])
