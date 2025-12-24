class Student {

    public name:string;

    public age:number;
    public skill :boolean

    constructor(name :string , age:number , skill:boolean){
        this.name=name;
        this.age=age;
        this.skill=skill
    }
}


const student=new Student('mahir',21,true);

console.log(student)