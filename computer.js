var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Notebook"] = 2] = "Notebook";
})(Computer || (Computer = {}));
;
let cp = Computer.Laptop;
console.log(cp);
let cp2;
cp2 = "sdf";
cp2 = 123;
cp2 = 3;
function examReturn() {
    return "examReturn함수호출";
}
function examVoid() {
    console.log("examVoid함수호출");
}
let a;
a = examReturn();
console.log(a);
examVoid();
let testArr = [1, 2, 3];
console.log(testArr);
class EE {
    constructor(pc) {
        this.name = "nam";
        this.pc = pc;
    }
    printInfo() {
        console.log(this.name + "님이 가지고 계신 pc는 " + this.pc + "입니다.");
    }
}
let ee = new EE(Computer.Laptop);
ee.printInfo();
console.log(ee);
String.prototype.equals = function (str) {
    if (typeof str == "object") {
        return str.toString()
            == this.toString();
    }
};
let str1 = "str";
let str2 = "str";
let str3 = new String("str");
let str4 = new String("str");
console.log("str1==str2 : " + (str1 == str2));
console.log("str1==str3 : " + (str1 == str3));
console.log("str3==str41 : " + (str3 === str4));
console.log("str1==str3 : " + (str1 === str3));
console.log("str3==str41 : " + (str3 === str4));
console.log("str3 equals str4 : " +
    (str3.equals(str4)));
console.log(str4.toString());
console.log(str3.toString());
//# sourceMappingURL=computer.js.map