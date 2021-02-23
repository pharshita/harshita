class person{
    constructor(name,yob)
     {
         console.log("person constructor")
         this.name=name
         this.yob=yob
     }
     getAge = ()=>{
        return 2021 - this.yob
    }
}

class Student extends person{
    constructor(name,yob,coursename){
    super(name,yob)
    this.coursename=coursename
    console.log("student constructor")
}

getCourse = ()=>this.courseName

static abc = 10
}

 console.log(Student.abc)
 var p1 = new Student("suyash", 1994, "Mern  ")
 var p2 = new Student("harshita", 1998, "Mern")
 console.log(p1,p2)
console.log(p1.getCourse())