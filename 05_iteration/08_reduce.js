
const myNums = [1,2,3,4,5,6,7,8,9,10]

const initValue = 0
// const result = myNums.reduce(function (acc,currVal){
//     console.log(`acc : ${acc} , currVal : ${currVal}`);
//     return acc + currVal
// },initValue)

const result = myNums.reduce((acc,curr) => acc + curr,initValue)

console.log(result);