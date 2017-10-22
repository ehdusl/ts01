enum Computer{Desktop,Laptop,Notebook};

let cp:Computer = Computer.Laptop;

console.log(cp);

let cp2:any;
cp2="sdf"
cp2=123;
cp2=3;


function examReturn():any{
    return "examReturn함수호출";
}


function examVoid():void{
    console.log( "examVoid함수호출");
}



let a:string;
a= examReturn();
console.log(a);
examVoid();


let testArr:Array<number> = [1,2,3];
console.log(testArr);

class EE {
    name:string = "nam";
    pc:Computer;
    constructor(pc:Computer){
        this.pc = pc;
    }
    printInfo() : void{
        console.log(this.name + "님이 가지고 계신 pc는 " + this.pc + "입니다.");
    }
}
let ee:EE = new EE(Computer.Laptop);
ee.printInfo();
console.log(ee); 



String.prototype.equals = function(str){
    if(typeof str=="object"){
        return str.toString()
        ==this.toString();
    }
}


let str1 : string = "str";
let str2 : string = "str";
let str3 : String = new String( "str");
let str4 : String = new String( "str");
console.log("str1==str2 : "+ (str1==str2));
console.log("str1==str3 : "+ (str1==str3));
console.log("str3==str41 : "+ (str3===str4));
console.log("str1==str3 : "+ (str1===str3));
console.log("str3==str41 : "+ (str3===str4));

console.log("str3 equals str4 : " + 
(str3.equals(str4));
console.log(str4.toString());
console.log(str3.toString());




