





// class pen {
//     constructor(color , model) {
//         console.log("i am a constructor method");
//         this.color = color;
//         this.model = model;
//     }

//     name(){
//         console.log(`The model of the pen ${this.model} and color of pen ${this.color}`);
//     }

//     static demo(a) {
//         console.log(a);
//     }
// }

// let BallPen = new pen("red", "BallPen");
// let Cello = new pen("Blue", "Cello");


// console.log(BallPen);
// console.log(Cello);
// BallPen.name();
// Cello.name();

// pen.demo("ff");

// class Details{
//     constructor(name , add , Fsubject) {
//         this.name = name;
//         this.add = add;
//         this.Fs = Fsubject;
//     }
    
//     personDetails() {
//         console.log(`person name is ${this.name} details is ${this.add} ${this.Fs}`);
//     }
// }

// let rahul = new Details("Rahul" , "pith" , "maths");
// let ritik = new Details("ritik" , "indore" , "physics");
// rahul.personDetails();
// ritik.personDetails();



// Inheritance in classes


// class SlowCar {
//     constructor(model, Engine) {
//         console.log("I am a contructor method");
//         this.model = model;
//         this.Engine = Engine;
//     }

//     drive() {
//        return `my car engine is ${this.Engine} and i am driving`;
//     }

// }

// class FastCar extends SlowCar{
//     constructor(modal , Engine , Ac , Sunroof) {
//         console.log("i am a child constructor");
//         super(modal, Engine)
//         this.Ac = Ac;
//         this.Sunroof = Sunroof;
//     }
    
//     fastCar() {
//         console.log(`${this.drive()} and other features is : ${this.Ac} ${this.Sunroof}`);
        
//     }
//     }


// let nano = new SlowCar("bmw", "500cc");
// nano.drive();


// let BMW = new FastCar("BMW", "1200", "available(AC)", "avalable(Sunroof)");
// BMW.fastCar();

// class StudentDetails{
//     constructor(name, add) {
//         this.name = name;
//         this.add = add;
//         console.log("first");
//     }

//     detailPrint(){
//        return `my name is ${this.name} and add is ${this.add}`;
//     }

// }


// let ritik = new StudentDetails("Ritik", "Indore");
// ritik.detailPrint();


// class EmployeeData extends StudentDetails {
//     constructor(name, add, salary) {
//         super(name, add);
//         this.salary = salary;
//         console.log("second");
//     }

//     detailsAndSalary() {
//         console.log(` ${this.detailPrint()} The salary is ${this.salary}`);
//     }

//     set change(x) {
//         this.name = x;
//     }

//     get change() {
//         return this.name;
//     }
// }

// let nandani = new EmployeeData("Nandani", "Indore" , 50000);
// nandani.detailsAndSalary();
// nandani.change = "rahul";
// console.log(nandani.change);
// console.log("rrr");


