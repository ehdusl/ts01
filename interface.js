class Robot {
    constructor() {
        this.speed = 30;
    }
    run() {
        return "로봇이" + this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
class Person {
    constructor() {
        this.speed = 30;
    }
    run() {
        return this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
let p = new Person();
p.setSpeed(50);
let str4 = p.run();
console.log(str4);
let r = new Robot();
p.setSpeed(1000);
str4 = r.run();
console.log(str4);
let num4 = p.run();
let r = new Robot();
function test(vari) {
    console.log(vari.nun());
}
//# sourceMappingURL=interface.js.map