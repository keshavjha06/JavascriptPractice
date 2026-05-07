// 1. map
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10] creates a new array by multiplying each element by 2

let fahTemp = [32, 68, 100, 104];
function fahTocel(fah) {
    return (fah - 32) * 5 / 9;
}
let celTemp = fahTemp.map(fahTocel);
// let celTemp = fahTemp.map((temp) => (temp - 32) * 5 / 9); another way to convert Fahrenheit to Celsius using an arrow function
console.log(celTemp); // [0, 20, 37.77777777777778] converts Fahrenheit to Celsius

// 2. filter
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4] creates a new array containing only the even numbers

let employees = [
    { name: "Alice", age: 30, department: "HR" },
    { name: "Bob", age: 25, department: "Engineering" },
    { name: "Charlie", age: 35, department: "HR" },
    { name: "David", age: 28, department: "Engineering" },
    { name: "Lisa", age: 28, department: "HR" }

];
let hrEmployees = employees.filter((employee) => {
    return employee.department === "HR" && employee.age >= 28;
});
console.log(hrEmployees); // [{ name: "Alice", age: 30, department: "HR" }, { name: "Charlie", age: 35, department: "HR" }] creates a new array containing only the employees in the HR department

// 3. reduce
let sum = numbers.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log(sum); // 15 calculates the sum of all numbers in the array

// max number in the array 
let nums = [4, 1, 8, 6, 30, 15];
let max = nums.reduce((max, num) => {
    if (num > max) {
        return num;
    }
    else {
        return max;
    }
}, nums[0]);
console.log(max); // 30 finds the maximum number in the array

// min number in the array 
let nos = [4, 1, 8, 6, 30, 15];
let min = nos.reduce((min, num) => {
    if (num < min) {
        return num;
    }
    else {
        return min;
    }
}, nos[0]);
console.log(min); // 1 finds the minimum number in the array

// cart: name , price

let cart = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Headphones", price: 200 }
];
let totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice); // 2000 calculates the total price of all items in the cart