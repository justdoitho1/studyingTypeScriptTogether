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

