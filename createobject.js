//1. Object Literals: {}
const person = {
    name: "John",
    age: 30,
    job: "Developer"
};
console.log(person.name);
console.log(person["age"]);
console.log(person["job"]);

//dot notation : objectName.property
//bracket notation : objectName["property"]

//2. Constructor Function
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}
const car1 = new Car("Toyota", "Camry", 25000);
const car2 = new Car("Honda", "Civic", 22000);
console.log(car1.brand + " " + car1["model"] + " " + car1["price"]);
console.log(car2.brand + " " + car2["model"] + " " + car2["price"]);

//3. Class style:
class Customer {
    constructor(name, product) {
        this.name = name; // Instance variables
        this.product = product;
    }

    addToCart() {
        console.log(`${this.name} has added ${this.product} to the cart`);
    }
}

// instance of the class: using 'new' keyword
const customer = new Customer("Keshav", "Apple Macbook Pro");
console.log(customer.name + " : " + customer["product"]);
customer.addToCart();

//4. Object.create()
const employeeProto = {
    printInfo: function () {
        console.log(`Hello employee name is ${this.name} and id is ${this.id} and role is ${this.role}`);
    }
};

// create object using Object.create()
const employee = Object.create(employeeProto);
employee.name = "Keshav";
employee.id = 101;
employee.role = "Developer";
employee.printInfo();

//5. using Factory Functions: returns an object.
function createDepartment(deptName, hod, location) {
    return {
        deptName: deptName,
        hod: hod,
        location: location,
        getDepartmentInfo: function () {
            console.log(`Department Name is ${this.deptName} and HOD is ${this.hod} and location is ${this.location}`);
        }
    }
}
const department = createDepartment("IT", "Keshav", "New York");
department.getDepartmentInfo();
console.log(department.deptName + " " + department.hod + " " + department.location);

