let userList:Array<number> = new Array();
let testList = new Array();
let testList2:Array<boolean> = new Array<boolean>;

for(let i:number = 0;i<5; i++){
    addUserList(userList, i);
}

function addUserList(userList:Array<number>, i:number){
    userList.push(i);
}

testList.push(1);
testList.push("1");
testList.push(true);

testList2.push(true);

const tt:number = 3;

let tt2 : number | string = 4;
tt2 = "duarbdhks"

let add = function(n1:number|string, n2:number|string):number|string{
    if(typeof n1 != "number") return "n1은 숫자가 아닙니다."
    if(typeof n2 != "number") return "n2는 숫자가 아닙니다."
    return n1+n2;
}

class Exam{
    public name:string;
}

let examList : Array<Exam> = new Array<Exam>();

let e:Exam = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam();
e.name = "e2";
examList.push(e);

class Lotto implements makeNumbers{
    private numbers:Array<number>;
    constructor(){
        this.numbers = new Array<number>();
        this.makeNumbers();
    }

    private makeNumbers():void{
        while(this.numbers.length<6){
            let num:number= Math.floor(Math.random()*20)+1;
            if(this.valiNumber(num)){continue}
            this.numbers.push(num);
        }
    }

    private valiNumber(num:number):boolean{
        return this.numbers.indexOf(num) !=-1;
    }

    public getNumbers():Array<number>{
        return this.numbers;
    }
}

let lot:Lotto = new Lotto();
// console.log(lot.getNumbers());

let arrs:Lotto[] = [new Lotto(),new Lotto(),new Lotto(),new Lotto(),new Lotto()];

for(let arr in arrs){
    // console.log(arrs[arr])
}

interface makeNumbers{

}

let mn:makeNumbers = new Lotto();
let lot1:Lotto = new Lotto();
mn = lot1;