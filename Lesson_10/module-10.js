class Vehicle {
  #price;
  static examples = [];

  constructor({
    brand,
    price,
    maxSpeed
  }) {
    this.#price = price;
    this.brand = brand;
    this.maxSpeed = maxSpeed;

    Vehicle.examples.push(brand);
  }

  get price() {
    return this.#price;
  }

  getPrice() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;

    return this;
  }

  setPrice(newPrice) {
    this.#price = newPrice;

    return this;
  }

}



class Car extends Vehicle {

  constructor(defaultInfo, engine, isTwoDoors) {
    super(defaultInfo);

    this.engine = engine;
    this.isTwoDoors = isTwoDoors;
  }

  fullTank() {
    this.tank = 'full';
  }

}

class Tires {

}

class Bike extends Vehicle {
  constructor(defaultInfo, engine, hasSecondSeat) {
    super(defaultInfo);
    this.engine = engine;
    this.hasSecondSeat = hasSecondSeat;
  }


  changeTires() {
    this.tires = new Tires();
    console.log('Tires was changed');
  }
}






const bmw = new Car({
  brand: 'BMW',
  price: 10000,
  maxSpeed: 180
}, 1.8, false)

const kawasaki = new Bike({
  brand: 'Kawasaki',
  price: 10000,
  maxSpeed: 250
}, 2.4, false);

console.dir(Tires);

const audi = new Car();
audi.brand = 'Audi';
audi.maxSpeed = 150;


// kawasaki.changeTires()

console.dir(bmw);
const parent = {
  name: 'daughter',
  getName() {
    return this.name;
  }
}
const daughterObj = {
  name: 'name',
  __proto__: parent
}


// console.log(daughterObj);
// console.log(parent.isPrototypeOf(daughterObj));

// function whatIsThat(vehicle) {

//   return (vehicle instanceof Vehicle) ?'Car' :'Bike';
//   // return (Object.getPrototypeOf(vehicle) === Car) ?'Car' :'Bike';
//   // return (Car.isPrototypeOf(vehicle)) ?'Car' :'Bike';
// }

// console.log(whatIsThat(bmw));
// console.log(whatIsThat(kawasaki));
console.log(bmw.price);

bmw.setPrice(2000);
console.log(bmw.price);