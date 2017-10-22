let userList = new Array();
let testList = new Array();
let testList2 = new Array();
for (let i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, i) {
    userList.push(i);
}
testList.push(1);
testList.push("1");
testList.push(true);
testList2.push(true);
const tt = 3;
let tt2 = 4;
tt2 = "duarbdhks";
let add = function (n1, n2) {
    if (typeof n1 != "number")
        return "n1은 숫자가 아닙니다.";
    if (typeof n2 != "number")
        return "n2는 숫자가 아닙니다.";
    return n1 + n2;
};
class Exam {
}
let examList = new Array();
let e = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam();
e.name = "e2";
examList.push(e);
class Lotto {
    constructor() {
        this.numbers = new Array();
        this.makeNumbers();
    }
    makeNumbers() {
        while (this.numbers.length < 6) {
            let num = Math.floor(Math.random() * 20) + 1;
            if (this.valiNumber(num)) {
                continue;
            }
            this.numbers.push(num);
        }
    }
    valiNumber(num) {
        return this.numbers.indexOf(num) != -1;
    }
    getNumbers() {
        return this.numbers;
    }
}
let lot = new Lotto();
// console.log(lot.getNumbers());
let arrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
for (let arr in arrs) {
    // console.log(arrs[arr])
}
let mn = new Lotto();
let lot1 = new Lotto();
mn = lot1;
//# sourceMappingURL=test2.js.map