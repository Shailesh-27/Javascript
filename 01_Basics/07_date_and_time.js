// Dates
let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 27)
// let myCreatedDate = new Date(2024, 0, 27,5,3)
// let myCreatedDate = new Date("2024-01-27")
let myCreatedDate = new Date("01-27-2024")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now() / 1000));


let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getDate())
console.log(newDate.getMonth() + 1)

newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate)





