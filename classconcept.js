class Car {
    constructor(name, model, year, color) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    refuel() {
        console.log(this.name + "Car is refueled");
    }

}

//new keyword is used to create an instance of a class / object
const c1 = new Car("BMW", "X5", 2022, "Red");
const c2 = new Car("Audi", "A6", 2023, "Black");
console.log(c1.name + " " + c2.model);
console.log(c2);
//calling method
c1.refuel();
c2.refuel();

// A class can have only one constructor and constructor overloading is not possible in JS