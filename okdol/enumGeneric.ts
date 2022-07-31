enum Weekdays {
    Monday=1, // 이렇게 해두면 자동으로 Tuesday는 2로 지정됨. Sunday까지 
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

enum Weekdays2 {
    Monday,  // 자동으로 Monday 값은 0으로 지정, Tuesday부터 1~
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

//문자열 열거형의 사용 
//Direction 안에 있는 값만 파라미터로 받고 싶을 때 
function move(where:Direction){
   if(where === Direction.Up){
    return Direction.Up;
   }
}
//move("North"); 오류
move(Direction.Up); // "UP" 파라미터로 들어감. 

//제네릭 
const someValues: number[] = [];
const somValues2: Array<number> = [];

class Person3{
    name:string;
}

class Employee3 extends Person3{
    department:string;
}

class Animal{
    breed:string
}

const workers:Array<Person3> = []; 
workers[0] = new Person3();
workers[1] = new Employee3();
//workers[2] = new Animal(); // 오류. 그러나 Animal의 프로퍼티가 Person3와 동일하면 오류가 발생하지 않는다. 