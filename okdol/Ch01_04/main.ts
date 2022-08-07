function getFinalPrice(price: number, discount: number){
    return price - (price / discount);
}

console.log(getFinalPrice(100, 10));

//타입 없이 쓰면, 자동으로 any type으로 됨. 
const noType =(num:number)=>{
    console.log(num);
}
console.log(noType(10));
//console.log(noType("10")); : 오류

//리터럴이 뭔지 잘 모르겠다!
//문자열 리터럴을 타입으로 사요하기
let name2:'john Smith';

function calcTax(state:string, income:number, dependents:number): number{ //return type 선언
    if(state==='NY'){
        return income*0.06-dependents*500;
    }else if(state === 'NJ'){
        return income*0.05-dependents*300;
    }
}

//calcTax('NJ', 100000, 'TWO'); // string 형식은 할당할 수 없다고 오류남.

const padLeft = (value:string, padding:string|number):string=>{
    if(typeof padding ==='number'){
        return "1";
    }else if(typeof padding === 'string'){
        return 'string';
    }else{
        return padding; //여기서 type은 never이 된다. 코드가 여기까지 실행될 일은 없기 때문에.
    }
}



class Customer {
    name:string;
}

class Customer2 {
    name:string;
    age: number;
}

class Person {
    name:string;
}

class Person2 {
    name:string;
    type:string;
}

const cust:Customer = new Person(); //Person과 Customer는 같은 타입이므로 오류X
const customer:Customer = {name:'Mary'} 
const cust2:Customer = new Person2(); //Person2에 name 프로퍼티 있으므로, 프로퍼티 개수가 달라도 오류가 발생하지 않는다. 하지만 반대로, Customer에 더 많은 프로퍼티가 있으면 오류 발생.
//const ucst2:Customer2 = new Person(); //오류 


//type가드 만들기
const isPerson = (obj:any):obj is Person =>{
    return "address" in obj;
} 

const isPerson2 = (obj:any):obj is Person =>{
    return !!obj && "address" in obj;
} 

//접근제어자 
class Parent {
    protected name:string = 'Tom';
    //private age:number = 30; // private으로 선언하면, Child에서 해당 프로퍼티를 갖다 쓸 수 없음.
}
   
class Child extends Parent{
    age = 10;
    parentName = this.name; //protected이므로, 서브클래스에서는 접근 가능
    private parentAge:number = 30;
    private getParentAge = ()=>{
        return this.parentAge;
    }
}
   
const child:Child = new Child();
//child.name; //오류. 생성자에서 protected접근불가 
//child.parentAge; //오류. 생성자에서 private접근불가

//부모 생성자 호출
class Human{
    //생성자
    constructor(public firstName:string, public lastName:string, private age:number){}
}

class Employee extends Human{
    //서브클래스의 생성자
    constructor(firstName:string, lastName:string, age:number, public department:string){
        super(firstName, lastName, age); //슈퍼클래스 생성자 
    }
}

const empl = new Employee('Tom', 'Smith', 30, 'IT'); //서브 클래스 인스턴스