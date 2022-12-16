// try {
//     aert("hello");
// } catch (err) {
//     console.log(err);
// }



// let num = 20;

// try {
//     if (num == 25) {
//         console.log("true");
//     } else {
//         console.log("dffsdf");
//     }
// } catch (err) {
//     console.log(err);
// }





//     let num = prompt("Enter some value");

// try {
//     if (num == " ") throw "Please Enter some value";
//     if (num < 10) throw  "number is less than 10"
//     if (num > 20) throw "number is greater than 20";
// } catch(err){
//     console.log(err);
// } finally {
//     console.log("finally");
// }



// let num = prompt("Enter some value");

// try {
//     decodeURI("%%%")
// } catch (err) {
//     console.log(err);
// }



// let name1 = "rahulgggsdfgsdf";
// let length = name1.length;
// let arr = name1.split("");
// let f = arr.shift();
// let last = arr.pop();
// let remainString = name1.substring(1, length - 1)

// let n  = last + remainString + f;
// console.log(n);


let num1 = 145;
let num2 = 646;

let newNum1 = num1.toString().split("");
let newNum2 = num2.toString().split("");

let newString = [];

for (let i = 0; i < newNum1.length; i++) {
    let x = Number(newNum1[i]);
    let y = Number(newNum2[i]);
    let z = x + y;

    newString.push(z);
//    let x2 = newString.concat(z.toString());
//    console.log(x2);
}

console.log(newString.join(""));






















