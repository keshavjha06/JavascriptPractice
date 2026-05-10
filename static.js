// Every car has 4 wheels, all employees belong to one same company, these are declared as static variables.
// these variables and function are not related to specific object but to the class itself
class Car {
    static wheels = 4;

    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
        // this.wheels = 50; // not static variable
    }

    static stop() {
        console.log("car - stop");

    }

    drive() {
        console.log(this.name + " is getting driven");
    }
}
const car1 = new Car("Audi", "A4", 10000000);
console.log(`${car1.name}, ${car1.model} , ${car1.price} , ${Car.wheels}`);
console.log(Car.wheels); // 4
Car.stop(); // static method can be called using class name
// car1.stop(); Error: car1.stop is not a function , it's a static method
car1.drive(); // driving method can be called using object
// Car.drive(); Error: Car.drive is not a function , it's a instance method

// static var/function : Call it by using class name
// non static var/function : Call it by using object reference name
