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