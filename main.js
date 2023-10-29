// Lexical Scope; Starts with the innermost value
// let a = 10;
// function outer() {
//     let b = 20;
//     function inner() {
//         let c = 30;
//         console.log(a, b, c);
//     } inner();
// } outer();

// Closure
// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++
//         console.log(`Count: ${counter}`)
//     }
//     return inner;
// }
// const fn = outer();
// fn();
// fn();

// function sum(a, b, c) {
//     return a + b + c;
// }
//
// console.log(sum(1, 2, 3));
//
//
//
// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c);
//             };
//         };
//     };
// }
//
// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

// const person = {
//     name: "Puja",
//     sayMyName: function () {
//         console.log(`My name is ${this.name}`);
//     },
// }
// // person.sayMyName();
//
// function Person(name) {
//     // this = {}
//     this.name = name;
// }
//
// const p1 = new Person('anjay');
// const p2 = new Person('mabar');
// // console.log(p1.name, p2.name);

console.log(Date());