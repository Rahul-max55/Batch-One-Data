// function toCelsius() {
//     return "hello";
// }


// console.log(toCelsius);


// anonymous function

// let myFun = function (a , b) {
//                console.log(a , b);
// }

//   myFun(5 , 6)

// class demo{
//     constructor(a) {
//         this.a = a;
//         console.log(this.a);
//     }
// }

// let value = new demo(5);


// let cal = new Function("a", "b", "return a * b")
// console.log(cal(4 , 5));


// (function name1(a, b) {
//     console.log(a + b + "hello");
// }
// )(5 , 6)

// function name1(a , b) {
//     return arguments.length;
// }
// name1(2 , 5)


// let x = name1
// console.log( typeof x);


// const name1 = (a, b) => (a * b) + (a - b);

// console.log(name1(2 , 5));

// const obj = {
//     name: "rahul",
//     age: 23,
//     details: () => {
//         console.log(this);
//     },

//     det: function () {
//         console.log(this);
//     }
// }

// obj.details();
// obj.det();


// const name = () => {
//     console.log("arrow");
// }

// name();

// function n(a) {return a};
// console.log(n(5));



// function sum() {
//     console.log(arguments);
//     let length = arguments.length;
//     let x=0 ;
//     for (let i = 0; i < length; i++){
//         x = x + arguments[i];
//     }
//     console.log(x);
// }
// sum(12, 45, 78, 56, 23 , 45 , 78 , 98  , 654651);

// const name1 = (a) =>{
//     a.val = 22;
//     console.log(a);
// }
// let a = {val:12};
// name1(a)
// console.log(a);

// Default parameter


// function sum(a, b) {
//     console.log(a + b);
// }

// sum(10 , 20 , 55);

// Default parameter end


// regular function and arrow function

// function sum(a, b) {
//     console.log(arguments);
// }

// sum(5, 2);


// arguments word Error in arrow function
// const sum = (a, b) => {
//     console.log(arguments);
// }

// sum(5, 2);


// function details(name) {
//     console.log(name);
// }

// let r = new details("rahul");


// const details = (name) => {
//     console.log(name);
// }

// let r = new details("rahul");


// const obj = {
//     name: "rahul",
//     demo: function () {
//         console.log(this.name);
//         function(name) {
//             console.log(name);
//         }
//     }
// }

// obj.demo();

// const obj = {
//     name:"ra"
// }


// const rahul = () => {
//     console.log("hii");
// }


// console.log(rahul.hasOwnProperty('prototype'));


// rest parameter in arrow function
// const sum = (a , b , ...ritik) => {
//     console.log(ritik);
// }

// sum(25 , 12 , 45  , 6 , 546 , 878)

// function sum(...rest) {
//     console.log(rest);
// }

// sum( 12 , 54 , 89);

// passed by value

// function change(a) {
//     console.log(a);


//     a = 25;
//     console.log(a);


// }
// let x = 5;
// change(x);
// console.log(x);

// passed by reference
// function change(a) {
//     console.log(a.val);
//     a.val = 88;
//     console.log(a.val);
// }
// let x = {
//     val : 5
// };
// change(x);
// console.log(x.val);




//** This ** //


// const obj = {
//     name: "rahul",
//     getname: function () {
//         console.log(this.name);
//     },
//     age: 25
// }




// function add(){
//     console.log(this);
// }
// add();

// class Name{
//     constructor(n) {
//         this.n = n
//         console.log(this);
//     }
// }

// let x = new Name("tiyik");


// Function Methods call() , apply() and bind()-

// Call
// const obj = {
//     fname: "rahul",
//     lname: " birla",
//     details: function (add , age) {
//         console.log(`${this.fname} and ${this.lname} extra details ${add} ${age}`);
//     }
// }


// const ritik = {
//     fname: "ritik",
//     lname: "Dubey"
// }

// obj.details.call(ritik , "indore" , "25");

// Apply

// const obj = {
//     Fname: "nandani",
//     details: function (...arr1) {
//         console.log(this.Fname);
//         console.log(arr1);
//         // console.log(arr2);
//         // console.log(arr3);
//     }
// }

// let mayank = {
//     Fname : "mayank"
// }

// let x = ["10", "11", "12"]

// obj.details.apply(mayank , x );


// Math.max.apply

// let x = Math.max(12, 45, 65);
// console.log(x);

// let num = [12, 45, 78, 65, 32];
// let maximum = Math.max.apply(null , num);
// console.log(maximum);


// Bind method

// const obj = {
//     name:"r",
//     printing: function () {
//         console.log(this.name);
//     }
// }
// // obj.printing();
// setTimeout(obj.printing, 1000);


// function sum() {
//     let a = 1;
//     function s() {
//         return a += 1;
//     }
//     return s;
// }

// let x = sum();
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());


// Call

// const obj = {
//     name: "rahul",
//     age: 23,
//     details: function (city , country) {
//         console.log(this.name , this.age , city , country  );
//     }
// }

// obj.details();

// const person = {
//     name: "ritik",
//     age:25
// }

// obj.details.call(person , "indore" , "india");

// Apply

// const obj = {
//     name: "rahul",
//     age: 23,
//     details: function (city , country) {
//         console.log(this.name , this.age , city , country  );
//     }
// }

// obj.details();

// const person = {
//     name: "ritik",
//     age:25
// }

// obj.details.apply(person , ["indore", "india"]);

// bind
// const obj = {
//     name: "rahul",
//     age: 23,
//     details: function (city) {
//         console.log(this.name , this.age , city);
//     }
// }

// obj.details();

// const person = {
//     name: "ritik",
//     age:25
// }


// obj.details.call(person);
// let x = obj.details.bind(person , "indore");
// x();


// closure

// function calculate(a) {
//     function sum(b) {
//         return a * b
//     }
//    return sum;
// }

// let x = calculate(5);
// console.log(x(20));
// console.log(x(10));
























