const userEmail = ""

if(userEmail){
    console.log("Email got");
}
else{
    console.log("Don't have user email");
}


// falsy Value  -> false, 0, -0, BigInt,0n, "", null, undefined, NaN

// Truthy value -> true, 1, "dhhd", [], "0", 'false', " ", {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emtpObj = {}
if(Object.keys(emtpObj).length === 0 ){
    console.log("Object is Empty")
}


// Nullish Coalescing operator (??) : null undefined

let val1
// val1 = 5 ?? 10

// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20


console.log(val1);