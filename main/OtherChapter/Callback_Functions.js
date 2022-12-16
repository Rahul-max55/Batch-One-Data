//1.
// const goodGreet = (x) => {
//     console.log(x);
// }

// const byeGreet = (y) => {
//     console.log(y);
// }

// byeGreet("bye");    // y = bye
// goodGreet("good");  // x = good

//2. This is not Callback concept

// const goodGreet = (x) => {
//     console.log(x);
//     byeGreet("bye");    // y = bye
// }

// const byeGreet = (y) => {
//     console.log(y);
// }

// goodGreet("good");  // x = good


// 3. Callback Functions -

// const calculte = (x, y, printValue) => {
//     let z = x + y;
//     printValue(z);
// }

// const printValue = (z) => {
//     console.log(`The sum of the two values is ${z}`);
// }

// calculte(10, 10, printValue);

// console.log(calculte(5, 5));


// 4.

// const calculte = (x, y,printValue) => {
//     let z = x + y;
//     printValue(z);
// }

// calculte(10, 10 ,   (z) =>{ console.log(z) }    );


// const name1 = {
//     name: "r",
//     age : 12
// }

// for (let x in name1) {
//     console.log(x);
// }

// const arr = [25, 2, 5, 78];

// for (let x of arr) {
//    let j = (x % 2 == 0 );
//     if (j == true) {
//        console.log(x);
//    }
// }


// async function check() {
//     console.log("message : 2");
//     const data = await fetch('api.json');
//     const stu =  data.json();
//     console.log("message : 4");

//     return stu
// }

// console.log("message : 1");
// console.log(check());
// console.log("message : 5");
// console.log("message : 6");



// async function check() {
//     return "hello";
// }


// async function f() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });

//     let result = await promise; // wait until the promise resolves (*)

//     console.log(result); // "done!"
// }

// f();







