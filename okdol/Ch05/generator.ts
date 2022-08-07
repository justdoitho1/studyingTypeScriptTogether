function whAmI(target:Function){
    console.log(`You are: ${target}`);
}

@whAmI
class Friend{
    constructor(private name:string, private age: number){}
} // js로 변환될 때, tsc는 데코레이터가 적용됐는지 확인. 