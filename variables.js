// 1. var: function-scoped & global scoped variable
// ES6
// 2. let: block-scoped variable
// 3. const: block-scoped constant variable

var x = 10;
function test() {
    var y = 20;
}
console.log(x); // 10  

var pop = "Hello";
function greet() {
    var top = "Hi";
    console.log(top);
}
greet();
// console.log(top); ReferenceError: top is not defined
console.log(pop);

var browser = "chrome";
var browser = "firefox"; // re-declaration allowed
browser = "safari"; // re-assignment allowed
console.log(browser); // safari

var a;
console.log(a); // undefined
a = "Hello World";
console.log(a); // Hello World

// issue with var: hoisting
var flag = "Hey Keshav";
var b = 4;
if (b > 3) {
    var flag = "Hey Tom";
}
console.log(flag); // Hey Tom (flag variable is re-declared and re-assigned within the block)

// 2. let: block-scoped variable
let name = "Alice";
let c = 5;
if (c > 3) {
    let message = "Hello Bob";
    console.log(message); // Hello Bob
}
//  console.log(message);  ReferenceError: message is not defined
 console.log(name); // Alice

 let length = 4;
//  let length = 5;  SyntaxError: Identifier 'length' has already been declared
length = 5; // re-assignment allowed
console.log(length); // 5

// 3. const: block-scoped constant variable
const pi = 3.14;
//  pi = 3.14159; TypeError: Assignment to constant variable.
console.log(pi); // 3.14

