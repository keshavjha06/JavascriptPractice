// for loop 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("-----------------------");


//for....of loop is used to iterate over the values of an iterable object, such as an array or a string. It allows you to access each element directly without needing to use an index.
const fruits = ["apple", "banana", "cherry", "grape", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

console.log("-----------------------");


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("-----------------------");


// while loop 1 to 10
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

console.log("-----------------------");

let k = 2;
while (k <= 50) {
    console.log(k);
    k = k + 2;
}

console.log("-----------------------");


// do-while loop 1 to 4
let count = 1;
do {
    console.log("Count: " + count);
    count++;
}
while (count < 5);

console.log("-----------------------");

// break statement
// 1 to 100: print hi when you see mulitiple of 5 and break;
let num = 5;
while (num <= 100) {
    console.log(num);
    if (num % 5 == 0) {
        console.log("hi -- bye");
        break;
    }
    num++;
}

console.log("-----------------------");

const browsers = ["Chrome", "Firefox", "Safari", "Edge"];
for (const browser of browsers) {
    console.log(browser);
    if (browser === "Safari") {
        console.log("Found Safari! Stopping the search.");
        break;
    }
}

console.log("-----------------------");

//for...in loop is used to iterate over the properties of an object. It allows you to access both the keys and values of the object.
const user = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const key in user) {
    console.log(key + ": " + user[key]); //user[key] is used to access the value of the property using the key
}

console.log("-----------------------");

const br = ["Chrome", "Firefox", "Safari", "Edge"];
for (const index in br) {
    console.log("Index: " + index + ", Browser: " + br[index]);
}