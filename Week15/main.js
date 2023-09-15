//  OOP 

class Car {

    constructor (name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
    }

    run () {
        return "Car is now running";
    }

    stop () {
        return "Car is now stopped";
    }
}

let First = new Car("toyota", "Corolla", "950");

let Second = new Car("mercedes", "AMG", "3.5");

let Thirs = new Car("BMW", "CSS", "2.5");

console.log(First);
console.log(First.run());


// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"


class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

class Tablet extends Phone {
    constructor(name, serial, price, size = "Unknown") {
        super(name, serial, price);
        this.size = size;
    }

    fullDetails () {
        return `${this.name} Serial is ${this.serial} And size is ${this.size}.`;
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown