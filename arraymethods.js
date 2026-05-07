//1. every()
let numbers = [2, 4, 6, 8];
let allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true checks if all numbers in the array are even

// 2. some()
let mixedNumbers = [1, 2, 3, 4, 5];
let hasEven = mixedNumbers.some((num) => num % 2 === 0);
console.log(hasEven); // true checks if at least one number in the array is even

// 3. find()
let fruits = ["apple", "banana", "cherry", "date"];
let foundFruit = fruits.find((fruit) => fruit.startsWith("c"));
console.log(foundFruit); // "cherry" finds the first fruit that starts with "c"

// 4. indexOf()
let colors = ["red", "green", "blue", "yellow"];
let index = colors.indexOf("blue");
let notFoundIndex = colors.indexOf("purple");
console.log(index); // 2 finds the index of the element "blue" in the array
console.log(notFoundIndex); // -1 finds the index of the element "purple" in the array (not found)

// 5. lastIndexOf()
let letters = ["a", "b", "c", "d", "e", "c"];
let lastIndex = letters.lastIndexOf("c");
console.log(lastIndex); // 5 finds the last index of the element "c" in the array

// 6. sort()
let unsortedStrings = ["banana", "apple", "cherry", "date" , "123test" , "Tshirt"];
unsortedStrings.sort();
console.log(unsortedStrings); // ["123test", "Tshirt", "apple", "banana", "cherry", "date"] sorts the strings in alphabetical order  
