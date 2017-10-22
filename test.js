let num1 = 3;
let num2 = 5;
let str1 = "string";
let str2 = "test";
let numArr = [3, 5, 6];
let numArr2 = [3, 4, 5];
// console.log(num1);
// console.log(num2);
// console.log(str1);
// console.log(str2);
// console.log(numArr);
// console.log(numArr2);
let anyTest = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
let anyArr = ["duarbdhks", 1, true];
// console.log(anyArr)
function setUser() {
    return "test";
}
function test1() {
    return "abc";
}
var test = test1();
function testFunc(str, num) {
    console.log(str, 'str');
    console.log(num, 'num');
}
// testFunc("duarbdhks",15);
function throwError() {
    throw new Error('nonono');
}
let AjaxUtil = function (ti) {
    this.print = function () {
        console.log(ti.str, 'str 입니다');
        console.log(ti.num, 'num 입니다');
    };
};
var testTi = { str: 'zzzzzz', num: 27 };
var au = new AjaxUtil(testTi);
// au.print();
class Car {
    constructor(pCarName) {
        this.pCarName = pCarName;
        this.carName = pCarName;
    }
}
let sonata = new Car("소나타");
let pStr = "내 차는 ";
pStr += sonata.carName;
console.log(pStr);
//# sourceMappingURL=test.js.map