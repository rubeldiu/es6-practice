function funDeclaration(num){
    return num*2;
}

const funExpression=function(num){
    return num*2;
}

//arrow function
const arrowFun=num=>num*2; //single parameter
const add=(num1,num2)=>num1+num2; //multiple parameter
const give5=()=> 5; //no parameter

const doMath=(x,y)=>{   //complex 
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result
}



console.log(funDeclaration(20));
console.log(funExpression(20));
console.log(arrowFun(15));
console.log(add(15,20));
const result= give5();
console.log(result);
const result3=doMath(7,5);
console.log(result3);