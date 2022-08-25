const fruits = ['mango', 'banana', 'apple', 'pear', 'strawberry', 'peach']; //6
const groceries = ['mango2', 'banana23', 'apple343', 'sakdjhaskjd', 1977];
// const newGroceries = fruits;

// slice
/* 
const customer = {
  name : 'John',
  age: 22,
}

console.log(customer);
console.log(customer.living);
customer.living = {};
customer.living.city = 'Kyiv',
  // country: 'Ukraine'

console.log(customer);

customer.eyes = 'green';

customer.living.street = 'Some'

console.log(customer); */


// function getPrice(name) {
//   let message;

//   switch (name) {
//     case 'apple':
//       message = 'apple';
//       break;
//     case 'banana':
//       message = 'banana';
//     default:
//     message = 'Smth went wtong'
//   }

//   return message;
// }

// console.log(getPrice('apple'))
// console.log(getPrice('banana'))
// console.log(getPrice('lafkjadlfjhslfj'))

function calculateTotals(number) {
  let sum = 0;

  for(let i = 0; i <= number; i += 1) {
    sum += i
  }

  console.log(sum, 'log');
  return sum;
}

console.log(calculateTotals(2), 'result');
console.log(calculateTotals(5), 'result');
console.log(calculateTotals(1), 'result');
console.log(calculateTotals(3), 'result');