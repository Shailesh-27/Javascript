const coding = ['JS','python','rb','dart','java']


coding.forEach(function (i){
    // console.log(i);
})

coding.forEach((val) => {
    // console.log(val);
})

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageFileName);
})