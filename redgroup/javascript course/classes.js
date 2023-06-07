class Car {
    constructor(name, price) {
        this.name = name;
        this.#price = price;
    }

    getName() {
        return this.name;
    }

    name = 'Car wasn\'t set' // public
    #price = 0 // private
}

const car1 = new Car()
const car2 = new Car('BMW', 400)

class Ship extends Car { // inherits Car properties and methods
    constructor(name) {
        super(name) // passes parameter to the Car's constructor
        // nessecary only if costructor is different from ancestor's constructor

        console.log("constructor from name")
    }
    constructor() {
        super() // needed even without parameters
        console.log("overloaded")
    }
}

class Animal {
    constructor(name) {
        this.#name = name
    }

    move() {
        console.log(`${this.#name} is moving`)
    }
    eat() {
        console.log(`${this.#name} is eating`)
    }
}

class Dog extends Animal {
    bark() {
        console.log('gaf, gaf')
    }
}