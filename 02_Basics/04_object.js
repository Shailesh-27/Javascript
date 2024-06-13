// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Smit"
tinderUser.isLoggedIN = false


// console.log(tinderUser);

const regularUser = {
    email: "shailesh@gail.com",
    fullname: {
        userfullname: {
            firstname: "Shailesh",
            lastname: "Kumawat"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const object1 = {
    1: "a",
    2: "b"
}

const object2 = {
    3: "a",
    4: "b"
}

const object4 = {5:"a",6:"b"}

// combine object

// const object3 = Object.assign({} , object1,object2,object4)
// console.log(object3);

const object3 = {...object1,...object2}
console.log(object3);

const users = [
    {
        id: 1,
        email: "h.hamil.com"
    },
    {
        id: 1,
        email: "h.hamil.com"
    },{
        id: 1,
        email: "h.hamil.com"
    },
    
]

// console.log(users[0].email);

console.log(tinderUser);

// To get all keys of your object
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIN'))



