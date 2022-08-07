function getFinalPrice(price, discount) {
    return price - (price / discount);
}
console.log(getFinalPrice(100, 10));
//타입 없이 쓰면, 자동으로 any type으로 됨. 
var noType = function (num) {
    console.log(num);
};
console.log(noType(10));
//console.log(noType("10")); : 오류
//리터럴이 뭔지 잘 모르겠다!
//문자열 리터럴을 타입으로 사요하기
var name2;
function calcTax(state, income, dependents) {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    }
    else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}
calcTax('NJ', 100000, 'TWO'); // string 형식은 할당할 수 없다고 오류남.


