var num1 = 3;
var num2 = 5;
var str1 = "string";
var str2 = "test";
var numArr = [3, 5, 6];
var numArr2 = [3, 4, 5];
// console.log(num1);
// console.log(num2);
// console.log(str1);
// console.log(str2);
// console.log(numArr);
// console.log(numArr2);
var anyTest = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
var anyArr = ["duarbdhks", 1, true];
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
var AjaxUtil = function (ti) {
    this.print = function () {
        console.log(ti.str, 'str 입니다');
        console.log(ti.num, 'num 입니다');
    };
};
var testTi = { str: 'zzzzzz', num: 27 };
var au = new AjaxUtil(testTi);
// au.print();
var Car = /** @class */ (function () {
    function Car(pCarName) {
        this.pCarName = pCarName;
        this.carName = pCarName;
    }
    return Car;
}());
var sonata = new Car("소나타");
var pStr = "내 차는 ";
pStr += sonata.carName;
console.log(pStr);
//# sourceMappingURL=test.js.map