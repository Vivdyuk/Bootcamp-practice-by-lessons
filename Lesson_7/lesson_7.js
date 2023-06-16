console.log("Lesson 7");
// rest && spread
// destructurisation


const numbers = [2, 46, -4, 56, 3, -0];
const appleTypes = [
  "Golden",
  "Gala",
  "Black Prince",
  "Caramelka",
  "Spartan",
  "Fuji",
  "Honey Crisp",
];



/**
 * Нам потріно знайти найбільше число з масива.
 * Дані в масиві завжди одного типу. 
 * Якщо нам прийшов масив з не числами, то повертаємо "Please provide valid data";
 *! не використовуємо перебір.

 * @param {*} numbers 
 */
function findTheBiggest(numbers) {

  if (typeof numbers[0] !== "number") {
    return "Please provide valid data";
  }
  return Math.max(...numbers)

}

// console.log(findTheBiggest(arr));
// console.log(findTheBiggest(numbers));
// console.log(findTheBiggest(appleTypes));

/**
 * Нам потрібно повернути суму значень, які нам прийдуть у ф-ю
 * @param {Number} startValue - початкове число
 * @returns {Number} сума всі чисел
 */
function sum(startValue, ...numbers) {
  let res = startValue;

  for (let i of numbers) {
    res += i;
  }
  
  return res;
}

const arr = [1, 2, 3];

// console.log(sum(20, ...arr));
// console.log(sum(0, ...numbers));
// console.log(sum(-4, 5, 6, 7, 56, 3, 2, 7, 2, 0));

const age = 45;

const obj = {
  name: 'Bob',
  age: 3, // дефолтне значення 0
  surName: 'Jack',
  examples: []
}

obj.quest = 'None';
obj[1] = 23;
obj[0] = 56;


const {quest , name, age: objAge = 0, surName, examples: objExamples } = obj;

obj.age = 4

objExamples.push(1);

// console.log(`Length of example is ${obj.examples.length}`);
/*
const age = obj.age
const objAge = obj.age
const quest = obj.quest
const name = obj.name
const surName = obj.surName
const objExamples = obj.examples
*/
// objAge
// console.log(`Age is ${objAge}`);
// const [arr1, arr2] = arr;
// console.log(name)
// console.log(arr1);
// console.log(obj);


// const a = {
//   age: 5
// }

// const b = a;
// b.age = 4;


// let x = 3;
// let y = x;

// y++;

// console.log(x);
// console.log(a.age);
                    // [1, undefind]  [2, undefined]  
function helpMePlease([arg1, arg2], [arg3, arg4]) /* (arr1, arr2) */ {
  /*
  const arg1 = arr1[0];
  const arg2 = arr1[1];
  const arg3 = arr2[0];
  const arg4 = arr2[1];
  */

  // 28000 рядків взаєиодії

  // console.log(arg1);
  return [
      arg1,   
      arg2,   
      arg3,
      arg4   
  ];
}


// const obj2 ={
//   test: {
//     scam: {
//       build: {
//         age: 3
//       }
//     }
//   }
// }
// const {age} = obj2.test.scam.build

// obj2.test.scam.build.age

// const first = [1, 2, 3];
// const second = ['f', 't', 's']
const first = [[1], [2]]; // => [1], [2]
const second = [['f'], ['s']]

// console.log(helpMePlease(first, second));
// console.log(helpMePlease(...first, second));
// console.log(helpMePlease(first, ...second));
// console.log(helpMePlease(...first, ...second)); ==> ([1], [2], [f], [s])
// console.log(helpMePlease([...first, ...second]))
// console.log(helpMePlease(first, second));
// console.log(helpMePlease(first, second));
// console.log(helpMePlease(first, second));
const sexName = 'sex';
"test".toLowerCase();
const t = "test";

const user = {
  ["name"]: 'Bob',
  ["sex"]: 'male',
  ["sex1"] : 'male'
}

console.log(user);

function createObj([key1, key2], [value1, value2]) {
  const obj = {}

  return {
    [key1]: value1,
    [key2]: value2,
  }
}


console.log(createObj(['name', 'sex'], ['Bob', 'male']));

console.log([ ...arr,1]);

console.log({
  ...user,
  sex: user.sex || 'female'
});