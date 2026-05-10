//1. function declaration

function add(a, b) {
    return a + b;
}

function print() {
    console.log("HI This is function");

}
const sum = add(5, 3);
console.log(sum); // 
print();

//2. Function expression : Anonymous function

const multiply = function (a, b) {
    return a * b;
}

const mul = multiply(4, 2);
console.log(mul);

//3. Arrow function : Anonymous function
const divide = (a, b) => a / b;
const div = divide(8, 2);
console.log(div);

//4. Function Constructor
const substract = new Function("a", "b", "return a - b");
const sub = substract(10, 5);
console.log(sub);

//5. self Invoking Function / IIFE
(function () {
    console.log("This is IIFE");
})();

//parameterised iife
(function (a, b) {
    console.log(a + b);
})(10, 20);

//6. Generator Function - function that returns iterator , function* and yield keyword
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generateSequence();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//7. Anonymous Function - no specific name
const greetings = function (name) {
    return "Hello " + name;
}("John");
console.log(greetings);

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => {
    return number * 2;
});
console.log(doubled);

//8. Recursive function: function that calls itself
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

//9. Higher order function : function that returns a function or takes a function as a parameter
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    }
}
const outer = outerFunction(10);
console.log(outer(20));


