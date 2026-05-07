// An array is a data structure that can hold multiple values of the same type. It is used to store a collection of data, such as numbers, strings, or objects. 
// Arrays are ordered, meaning that the elements are stored in a specific sequence and can be accessed using an index.
// Declaration and initialization of an array
let myArray = []; // empty array
let fruits = ["apple", "banana", "cherry", "grape", "orange"]; // array of strings
let numbers = [1, 2, 3, 4, 5]; // array of numbers

let lang = ["JavaScript", "Python", "Java", "C++", "Ruby"];
// 1. push
lang.push("Go");
console.log(lang); // ["JavaScript", "Python", "Java", "C++", "Ruby", "Go"] adds "Go" to the end of the array

// 2. pop
lang.pop();
console.log(lang); // ["JavaScript", "Python", "Java", "C++", "Ruby"] removes the last element "Go"

// 3. shift
lang.shift();
console.log(lang); // ["Python", "Java", "C++", "Ruby"] removes the first element "JavaScript"

// 4. unshift
lang.unshift("JavaScript");
console.log(lang); // ["JavaScript", "Python", "Java", "C++", "Ruby"] adds "JavaScript" to the beginning of the array

// 5. indexOf
let index = lang.indexOf("Java");
console.log(index); // 2


// 6. length
console.log(lang.length); // 5

// 7. slice
let slicedLang = lang.slice(1, 4);
console.log(slicedLang); // ["Python", "Java", "C++"] creates a new array containing elements from index 1 to 3 (4 is not included)

// 8. splice
lang.splice(2, 1, "C#");
console.log(lang); // ["JavaScript", "Python", "C#", "C++", "Ruby"] removes 1 element at index 2 ("Java") and adds "C#" at that position

// 9. forEach
lang.forEach((language) => {
    console.log(language);
});

// 10. map
let upperCaseLang = lang.map(function (language) {
    return language.toUpperCase();
});
console.log(upperCaseLang); // ["JAVASCRIPT", "PYTHON", "C#", "C++", "RUBY"]

// 11. filter
let filteredLang = lang.filter(function (language) {
    return language.length > 3;
});
console.log(filteredLang); // ["JavaScript", "Python", "Ruby"] creates a new array containing only the languages with more than 3 characters

// 12. reduce
let totalLength = lang.reduce(function (accumulator, language) {
    return accumulator + language.length;
}, 0);
console.log(totalLength); // 25 calculates the total length of all language names in the array

// 13. find
let foundLang = lang.find(function (language) {
    return language.startsWith("C");
});
console.log(foundLang); // "C#"

// 14. includes
let hasJava = lang.includes("Java");
console.log(hasJava); // false

// 15. sort
lang.sort();
console.log(lang); // ["C#", "C++", "JavaScript", "Python", "Ruby"]

// 16. reverse
lang.reverse();
console.log(lang); // ["Ruby", "Python", "JavaScript", "C++", "C#"]

// 17. concat
let moreLang = ["Go", "Swift"];
let allLang = lang.concat(moreLang);
console.log(allLang); // ["Ruby", "Python", "JavaScript", "C++", "C#", "Go", "Swift"] creates a new array by combining lang and moreLang

// 18. join
let langString = lang.join(", ");
console.log(langString); // "Ruby, Python, JavaScript, C++, C#" creates a string by joining all elements of the array with ", "