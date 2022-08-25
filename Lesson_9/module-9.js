'use strict';

// const test = () => {
//   console.log(this);
// }

// // test()


// const obj = {
//   name: 'obj',
//   getStrictThis: function() {
//     console.log(this.name);
//   },
//   getThis: () => {
//     console.log(this);
//   },
//   innerObj: {
//     age: 26,
//     getThis() {
//       return this.getThis();
//     }
//   }
// }


// console.log(obj.innerObj.getThis());

function FD(array, call) {
  console.log(this);
}

const FE = function(){
  console.log(this);
}

const fruits = ['ban', 'ora'];
const newFruits = ['ban', 'ora', 'newArr'];
// const newMap = fruits.map((fruit, index, newFruit, obj) => {

//   console.log(this);
//   console.log(this.name);
//    return fruits
// })




// console.log(newMap);

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  // console.log(customer.getDiscount()); // 0.15
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

// const salesman = {
//   balance: 12500,
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   // console.log(customer.getDiscount()); // 0.15
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// }

// function createNewCar(name) {
//   return {
//     name,
//     getName() {
//       return this.name;
//     }
//   }
// }

// const testla = createNewCar('Tesla')
// const audi = createNewCar('Audi')
// const bmw = createNewCar('BMW')

// console.log(testla.getName());
// console.log(audi.getName());
// console.log();

// console.log(salesman.getBalance())
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

function makeSort(key, order) {
  const stringlySort = (firstbook, secondBook) => firstbook[key] - secondBook[key] 
  const numericSort = () => {}
  return order === 'asc' ?  stringlySort : (firstbook, secondBook) => secondBook[key] - firstbook[key];
}

const number = 5;


function test(value) {
  console.log(value);
}

// test(number)
test(5)


const sortedbyAuthor = [...books].sort(makeSort('title', 'desc'));
const sortedbyRating = [...books].sort(makeSort('rating', 'desc'));


console.log(sortedbyAuthor);


