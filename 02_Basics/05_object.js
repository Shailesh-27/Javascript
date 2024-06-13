// Object de-structure

const course = {
    coursename : "Js in Hindi",
    cursefees : 1000,
    courseInstructor : "Shailesh"
}


//  course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor); 

const {courseInstructor : instructor} = course
console.log(instructor);

// API

// {
//     "coursename" : "Js in Hindi",
//     "cursefees" : 1000,
//     "price" : "free"
// }


