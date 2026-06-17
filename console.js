console.log("Hello World")
console.error("This is a Error")
console.warn("This is a warning..!!")
console.info("This is JavaScript")


const user = {
    name: "John",
    age: 34,
    city: "Hyderabad",
    country: "India"
}
console.log(user);
console.table(user)

const user1 = {
    name: "Lisa",
    age: 30,
    city: "LA",
    country: "USA"
}
console.table({ user, user1 })

console.group("Login feature")
console.log("reset pwd");
console.log("error login msg");
console.log("enter username/password");
console.groupEnd();


console.time("print 1 to N values");
for (let i = 1; i < 500; ++i) {
    console.log(i);
}
console.timeEnd("print 1 to N values")

console.assert(20 === 10, "This is failed")

function testMyJob() {
    console.trace();
}
testMyJob()

console.log("%c I love JavaScript!!!", "color:red; background-color:lightblue; border: solid 2px orange")


// Run -> Run without Debugging