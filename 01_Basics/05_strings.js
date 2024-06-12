const name = "Shailesh"
const repoCount = 20

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Shailesh-SP-com')

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf('S'))


const newString = gameName.substring(0,4)
console.log(newString);

const newString1 =  gameName.slice(0,7)
console.log(newString1)

const newString2 = "     Shailesh.     "
console.log(newString2);
console.log(newString2.trim());

const url = "https://shailesh.com/shailesh%20kumawat"
console.log(url.replace('%20','-'))

console.log(url.includes('shailesh'))

console.log(gameName.split("-"))











