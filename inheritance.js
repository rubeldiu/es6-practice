class Parent{
    constructor(){
        this.fatherName='Schwerznegger';
    }
}
class Child extends Parent{
    constructor(sname){
        super();
        this.name=sname;
    }
    getFullName(){
        return this.name+' '+this.fatherName;
    }
}

const baby=new Child('Arnold');
const baby2=new Child('Tom');
console.log(baby.getFullName());
console.log(baby2);