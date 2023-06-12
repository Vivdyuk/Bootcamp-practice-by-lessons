// "Hello!"

// console.log('hello');
const numbericArr = [2, 3, 4];
const numericObj = {
  0: 2,
  1: 3,
  2: 4,
  length: "he-he-he",
  getSmth() {
    console.log(smth);
  },
  // length: Object.keys(this).length - 1
};

/**
 * якщо прийшов масив ([]) - повертаємо фразу "This is an array"
 * якщо прийшов Обʼєкт ({}) - то повертаємо "This is an object"
 * Якщо прийшло щось інше - Повертаємо "This is not array nor object"
 * @param {Array|Object} smth
 *
 */
function testMe(smth) {
  if (Array.isArray(smth)) {
    return "This is an array";
  }

  const x = 2;

  if (x !== 2) {
    //...
  }

  if (typeof smth === "object" /* {} | null */ && smth !== null) {
    return "This is an object";
  }

  return "This is not array nor object";
}

console.log(testMe(numbericArr));
console.log(testMe(numericObj));
console.log(testMe(3));
console.log(testMe(null));
const totalStorage = "Total storage";

const product = {
  name: "Phone",
  price: 300,
  cameraMp: 1.3,
  properties: [],
  "Total storage": "512Mb",
  model: undefined,
};
console.log(product[totalStorage]);
console.log(product.name);
console.log(product.model);
// console.log(product);

/**
 * Нам потрібно повернути масив зі значеннями обʼєкта під ключами, які передані у ф-ю.
 *
 * Якщо такого ключа немає, то  в масиві ми замість значення підставляємо "Not Found".
 *
 * якщо ключі не прийшли - повертаємо пустий масив
 * @param {*} obj
 * @returns {Array} масив зі значеннями за ключами з обʼєкту
 */
function getProps(obj) {
  const args = [...arguments].slice(1);

  const arr = [];
  for (const key of args) {
    arr.push(obj.hasOwnProperty(key) ? obj[key] : "Not Found");

    // else {
    //   arr.push("Not Found");
    // }
  }
  return arr;
}

console.log(getProps(product, "price", "name")); // [300, 'Phone']
console.log(getProps(product, "properties", "Total storage", "test")); // [[], '512Mb', 'Not Found']
console.log(getProps(product, "cameraMp", "model")); //[1.3, undefined]
console.log(getProps(product)); // []

// const andOrOr = null || 0 && [];
// const andOrOr = !["apple"] && 0 && undefined && {
//   age: 3
// }                  //0 
// const andOrOr = Object.keys({}).length || " ".toLowerCase() && 23 / 0

// const andOrOr = 
//   '    '.split().join() 
//   ||  (23 - 'three' && null)
//   || !!![]

// "  Ruslan Vyvdyuk   " => 'Ruslan Vyvdyuk'
// const andOrOr2 = 
// '    '.split("").join(" ").trim() //''
// ||  23 - 'three' // 23 - '3'
// && null
// && !!![]
// console.log(andOrOr);

// console.log('    '.split("").join(" ").trim())
console.log(andOrOr2);


