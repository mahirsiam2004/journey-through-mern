// const student ={
//     name : "mahir",
//     age : 22,
//     isEnrolled : true,
//     address : "Dhaka",
//     courses : ["javacript", "Typescript", "Docker"],
//     info : ["mahir",22,true]
// }

type Student ={
    name :string,
    age:number,
    isEnrolled:boolean,
    address:string,
    courses:String[],
    info:[string,number,boolean],

}


const student1:Student ={
    name : "mahir",
    age : 22,
    isEnrolled : true,
    address : "Dhaka",
    courses : ["javacript", "Typescript", "Docker"],
    info : ["mahir",22,true]
}


function displayStudent(student:Student){
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Courses: ${student.courses.join(", ")}`);
}