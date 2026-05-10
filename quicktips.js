//1. find unique values of an array using spread operator
let numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 2, 7, 7, 7, 7];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6, 7]

//2. int to string:
const num = 32;
const numToStr = num + "";
console.log(numToStr + 10); // 3210
// or
const num1ToStr = String(num);
console.log(num1ToStr + 10); // 3210

//3. float to int:
const pi = 3.14;
const pi1ToInt = parseInt(pi);
console.log(pi1ToInt); // 3

//4. check if variable is a number
const value = 't'; //10
if (typeof value === "number" && !isNaN(value)) {
    console.log(value, " is a number");
}
else {
    console.log(value, " is not a number");
}

//5. swap two numbers
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log(a, b); // 20 10
// or using destructuring
[a, b] = [b, a];
console.log(a, b); // 10 20

//6. check if an object has a property:
const person = {
    name: "John",
    age: 30,
    job: "Developer"
}

if (person.hasOwnProperty("name")) {
    console.log("Person has property ", person.name); // John
}

//7. remove falsy value from the array: (false , 0 , "", null, undefined, NaN)
const data = [0, false, "", null, undefined, NaN, "Hello", 123];
const truthyValues = data.filter(Boolean);
console.log(truthyValues); // ["Hello", 123]

//8. String --> Uppercase , lowercase
const message = "Hello World";
const uppercaseMessage = message.toUpperCase();
console.log(uppercaseMessage); // HELLO WORLD
const lowercaseMessage = message.toLowerCase();
console.log(lowercaseMessage); // hello world

//9. Check if an array has a specific value
const fruits = ["apple", "banana", "cherry", "grape", "orange"];
if (fruits.includes("banana")) {
    console.log("Array has 'banana'"); // Array has 'banana'
}

//10. Check if an array is Empty:
const emptyArr = [];
if (emptyArr.length === 0) {
    console.log("Array is empty"); // Array is empty
}

//11. generate random number:
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random Number is ${randomNumber}`);

//12. copy an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // using spread operator
console.log(copiedArray); // [1, 2, 3]

//13. String to number:
const numStr = "32.0";
const x1 = Number(numStr); // or parseInt(numStr) or parseFloat(numStr)
console.log(x1); // 32

//14. Join array elements into a string:
const words = ["Hello", "World"];
const sentence = words.join(" ");
console.log(sentence); // "Hello World"

//15. get object property:
const user = {
    name: "John",
    age: 30,
    dob: "01-01-1997"
}
console.log(user.dob); // 01-01-1997
console.log(user["name"]); // John
const copiedObject = { ...user }; // using spread operator
console.log(copiedObject); // { name: "John", age: 30, dob: "01-01-1997" }

//16. convert object to array
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "dob"]
const userArray = Object.values(user);
console.log(userArray); // ["John", 30, "01-01-1997"]
const userArrayEntries = Object.entries(user);
console.log(userArrayEntries); // [["name", "John"], ["age", 30], ["dob", "01-01-1997"]]

//17. get current data and time:
const currentDate = new Date();
console.log(currentDate); // current date and time
console.log(currentDate.toLocaleDateString()); // current date in string format
console.log(currentDate.toLocaleTimeString()); // current time in string format
console.log(currentDate.toLocaleString()); // current date and time in string format
console.log(currentDate.toISOString()); // current date and time in ISO format
console.log(currentDate.getTime()); // current time in milliseconds since epoch

//18. check variable is defined:
let i;
if (typeof i === 'undefined') {
    console.log("Variable is undefined"); // Variable is undefined
}

//19. Truncate an array:
const arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr); // [1, 2, 3]

//20. Merge two arrays:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

//21. Last item in array:
const pop = [0, 1, 2, 3, 4, 5, 6, 7]
const n = pop.slice(-1);
console.log(n); // [7]





