const name = "Keshav";

const age = 30;

//vars: ${varname}
const message = `hello , my name is ${name} and age is ${age}`;
console.log(message);

const a = 10;
const b = 20;
const result = `the addition of ${a} and ${b} is ${a+b}`;
console.log(result);


function getXpath(name){
    return `//input[@id='${name}']`;
}
console.log(getXpath('Tom\'s'));
