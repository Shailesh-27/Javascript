// Array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["Shailesh", "Smit", "Yash"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr);
console.log(myArr[0]);

// 1. Shallow Copy -> A Shallow copy of an object is a copy whose properties share the same reference.

// 2. Deep Copy -> A Deep copy of an object is a copy whose properties do not share the same reference.


// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(7)
myArr.shift()

console.log(myArr.includes(8));
console.log(myArr.indexOf(5));
console.log(myArr.indexOf(8));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,4)

console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1,4)
console.log("C ", myArr);
console.log(myn2)






