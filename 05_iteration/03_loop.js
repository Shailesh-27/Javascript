// for of loop

// [{},{},{}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(`Number is ${num}`);
}

const name = "Shailesh"

for (const char of name) {
    //console.log(char);
}

// Maps

const newMap = new Map()
newMap.set('IN','India')
newMap.set('US','USA')
newMap.set('FR','France')

// console.log(newMap);

for (const [key,value] of newMap) {
    // console.log(key,': ' ,value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'GTA',
}

// for (const [key, value] of myObj) {
//     console.log(key,': ' ,value);
    
// }

