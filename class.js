class student{
      constructor(sId,sName){
          this.id=sId;
          this.name=sName;
          this.schoolName='Kolimunnesa school';
      }
}

const student1=new student(12,'Rubel');
const student2=new student(13,'Kuddus');
console.log(student1.name,student2.name);