//for 

let array = [1,2,3,4,5,6]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element == 5){
        // console.log("5 is best number");
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop ${j}`);
        // console.log(i + ' * ' + j + ' = ' + i * j);
        
    }
    
}

const myArray = ['flash','batman', 'superman']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        break
    }
    //console.log(`Value of i is ${i}`);
    
}

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
}

