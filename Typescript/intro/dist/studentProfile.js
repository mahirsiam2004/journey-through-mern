"use strict";
// const student ={
//     name : "mahir",
//     age : 22,
//     isEnrolled : true,
//     address : "Dhaka",
//     courses : ["javacript", "Typescript", "Docker"],
//     info : ["mahir",22,true]
// }
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "mahir",
    age: 22,
    isEnrolled: true,
    address: "Dhaka",
    courses: ["javacript", "Typescript", "Docker"],
    info: ["mahir", 22, true]
};
function displayStudent(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Courses: ${student.courses.join(", ")}`);
}
displayStudent(student1);
//# sourceMappingURL=studentProfile.js.map