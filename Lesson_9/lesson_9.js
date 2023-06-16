//Hell
console.log("lesson 9");

const codingLanguages = ["JS", "C++", "C#", "Python", "Java", "Swift"];

const numbers = [0, 1, 2, 3, 4, 5];


function test2(el, idx, arr) {
  console.log(el, idx, arr);
}

// test2(test)

// console.log(test2('Hello'));
// console.log(test2('World'));

const milk = (el, idx, arr) => {
  console.log(el, idx, arr);
};

// milk("milk is good with sugar")

// codingLanguages.forEach(milk);

/**
 * потрібно просписати підкапотну роботу метода forEach().
 *! У тілі ф-ї не використовуємо сам метод forEach()
 * @param {*} arr - масив, по якому ми будемо ітеруватись
 * @param {*} callback - колбек ф-я
 */
function forEachv2_0(arr, callback) {
  // for (let i = 0; i < arr.length; i += 1) {
  //     const el = arr[i];
  //     callback(el, i, arr);
  // }
  // for (let elArr of arr) {
  //   callback(elArr);
  // }
}

// const fruit = fruits[0];
// forEachv2_0(codingLanguages, milk);
// console.log("============================");
// forEachv2_0(numbers, test2);
// console.log("============================");
// forEachv2_0(fruits, test);
// fruits.forEach((fruit, i) => {
//   if (i % 2 === 0) {
//     console.log(fruit);
//   }
// });

// fruits.slice(1)/* smth else*/.forEach((_, i) => {
//   // console.log(args);
//   console.log(i)
// });

/**
 * Нам потрібно повернути новий масив з фруктами, у яких парна кількість букв.
 * Apple(5) - він нам не потрібен
 * Kiwi(4) - він має бути в нашому результаті
 * @param {Array} arr масив з фруктами
 */

// function evenFruits(arr) {
//   const arrElArr = [
//     /* наші парні фрукти */
//   ];

//   //   for (let arrEl of arr) { //"Cherry"
//   //     if (arrEl.length % 2 === 0) { //6 % 2 === 0 ==> true
//   //        arrElArr.push(arrEl) ; // arr.push
//   //     }
//   //   }

//   const iterate = (arrEl) => {
//     if (arrEl.length % 2 === 0) {
//       //6 % 2 === 0 ==> true
//       arrElArr.push(arrEl); // arr.push
//     }
//   };

//   arr.forEach(iterate);

//   return arrElArr;
// }

const fruits = [
  "Apple",
  "Sea Buckthorn",
  "Mango",
  "Cherry",
  "Strawberry",
  "Papaya",
  "Pear",
  "Lemon",
  "oRange",
  "Bananas",
  "Without",
  "p",
  "is",
  "Pineapple",
];
// console.log(evenFruits(fruits));

const canIDrink = function(age)  {
  if (isNaN(age)) {
    return "Please enter valid age";
  }

  if (age < 3) {
    // res = "You can drink only milk";
    return "You can drink only milk";
  }

  if (age < 18) {
    // res = "Drink some tea";
    return "Drink some tea";
  }
  if (age < 60) {
    // res = "You can drink";
    return "You can drink";
  }
  // res = "Take care about your health";
  return "Take care about your health";
}

const isEven = function(number) {
  return !(number % 2) ? "EVEN" : "ODD";
}

function generateResponse(number, callback) {
  const parsedNumber = Number(number);

  const drink = callback(parsedNumber)

return drink;
  // let res = "";

}
const zero = [];


// console.log(generateResponse(4, isEven));
// console.log(generateResponse(0, canIDrink));

const trueOrFalls = function (callback) {
    const alpha = 5;

    return callback(alpha);
}

const onlyTrue = function(callback) {
  callback(isEven)
}

onlyTrue(trueOrFalls)

const test = (number) => {
  console.log(`number is ${number}`)
}


