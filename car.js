class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    beep() {
        return "Beep";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 2;
    }
    revEngine() {
        return ("VROOM!!!")
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicle) {
        if (!(vehicle instanceof Vehicle))
            throw new Error("Not A Vehicle! Only Vehicles in Garage!");
        if (this.vehicles.length === this.capacity)
            throw new Error("Sorry, we're full");
        this.vehicles.push(vehicle);
    }
}