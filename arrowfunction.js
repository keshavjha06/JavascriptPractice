const num = (a, b) => {
    return a + b;
}
console.log(num(10, 20));

// if function has only one statement then we can return it directly without return keyword
const num1 = (a, b) => a + b;
console.log(num1(10, 20));

// if function has only one parameter then we can return it directly without parentheses
const num2 = a => a;
console.log(num2(10));

// if function has no parameters then we can return it directly without parentheses
const message = () => "Hello JS";
console.log(message());

const person = {
    firstName: "John",
    lastName: "Doe"
}

const fullName = person => `${person.firstName} ${person.lastName}`
console.log(fullName(person));

const greet = (username = "guest", age = 0) => `Hello, ${username}! you are ${age} years old`;
const g1 = greet();
console.log(g1);

const g2 = greet("John", 30);
console.log(g2);

//rest parameters ... varargs
const sumAll = (...num) => num.reduce((acc, num) => acc + num, 0);
console.log(sumAll(1, 2, 3, 4, 5));

const browserInfo = (browser = 'Chrome', ...details) => {
    console.log(`Browser: ${browser}`);
    console.log(`other details:`, details);
}
browserInfo();
browserInfo('Firefox', 'macOS', 'headless', '115.11');

// max number using Math
const max = (a, b, c) => Math.max(a, b, c);
console.log(max(1, 2, 3));