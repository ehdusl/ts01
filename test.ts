let num1:number = 3;
let num2:number = 5;
let str1:string = "string";
let str2:string = "test";
let numArr:Array<number> = [3,5,6];
let numArr2:number[] = [3,4,5];
// console.log(num1);
// console.log(num2);
// console.log(str1);
// console.log(str2);
// console.log(numArr);
// console.log(numArr2);

let anyTest:any = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);

let anyArr:any[] = ["duarbdhks",1,true]
// console.log(anyArr)

function setUser():string{
    return "test";
}

function test1(){
    return "abc"
}
var test = test1();

function testFunc(str:string, num:number):void{
    console.log(str,'str')
    console.log(num,'num')
}
// testFunc("duarbdhks",15);

function throwError():never{
    throw new Error('nonono');
}
interface testIter{
    str:string,
    num:number
}
let AjaxUtil = function(ti:testIter){
    this.print = function():void{
        console.log(ti.str,'str 입니다');
        console.log(ti.num,'num 입니다');
    }
}


var testTi = {str:'zzzzzz', num:27};
var au = new AjaxUtil(testTi);
// au.print();

class Car{
    carName : string;
    constructor(public pCarName:string){
        this.carName = pCarName;
    }
}

let sonata = new Car("소나타");
let pStr:string = "내 차는 ";
pStr += sonata.carName;
console.log(pStr)