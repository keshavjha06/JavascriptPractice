class Automobile {
    constructor(chasisNumber) {
        this.chasisNumber = chasisNumber;

    }

    useAerodynamic() {
        console.log("Automobile -- aerodynamic " + this.chasisNumber);

    }
}


// parent (super class)
class Vehicle extends Automobile {
    constructor(name, model, year) {
        super(1000);
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.name} ${this.model} ${this.year}`;
    }

    startEngine() {
        console.log("Starting the engine....." + this.name);
    }

    stopEngine() {
        console.log("Stopping the engine....." + this.name);
    }
}

// child class (sub class)
class Car extends Vehicle {
    constructor(name, model, year, color) {
        super(name, model, year); // call the parent class constructor
        this.color = color;
    }

    driveCar() {
        console.log("driving the car " + this.model + " color " + this.color);
    }
}

// child class (sub class)
class Truck extends Vehicle {
    constructor(name, model, year, loadingCapacity) {
        super(name, model, year); // call the parent class constructor
        this.loadingCapacity = loadingCapacity;
    }

    driveTruck() {
        console.log("driving the truck" + this.model + " capacity " + this.loadingCapacity);
    }
}

// creating objects

const car = new Car("BMW", "X5", 2022, "Red");
car.startEngine();
console.log(car.getInfo());
car.driveCar();
car.useAerodynamic();
console.log(car.chasisNumber);


console.log("***************************");

const truck = new Truck("Volvo", "VNL", 2023, "20 tons");
truck.startEngine();
console.log(truck.getInfo());
truck.driveTruck();
// truck.driveCar();  error : siblings cannot inherit properties of each other


