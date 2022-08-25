// const genres =[['blues'], ['jazz']];

// function outterFunction(newApple, secondApple) {

//   function innerFunction() {
//     const newGrapes = arguments;
//     let grapes = ['green', 'purple', 'kysh-mysh'];
//       grapes = grapes.concat(newGrapes);

//       function deepFunction() {
//           console.log('too deep');
//       }

//     if (grapes.length > 4) {

//       for (let i = 0; i < grapes.length; i++) {
//         const grape = grapes[i];
//         console.log(`Grape is ${grape}`);
//       }
//     }

//   }

//   const apples = ['antonovka', 'bilyy nalyv', 'golden']
//   apples.push(newApple || 'filler');
//   for (const apple of apples) {

//     if (apple.length >= 4) {
//       const specialApple = 'aydared';

//     }


//     console.log(`Apple is ${apple}`);
//   }

//   innerFunction('muscat', 'zinfandel')
//   // deepFunction()
// }

// outterFunction('secondApple')
// let test = 2;


// if (true) {
//   console.log(test);


//   if (true) {
//    test += 1;

//    console.log(test);
//     if (true) {
//       test = 5;
//       let test = 4;

//     }
//   }

// }

// console.log(test);



/* Doesn't Work */





// function changeMagicNumber() {

//   let magicNumber = 1;

//   console.log(magicNumber);
//   if (true) {
//     let magicNumber = 3
//     magicNumber = 2;
//   }

//   console.log(magicNumber)
// }
// debugger;

// function factorial(n) {
//   return n === 1 ? n : n * factorial(n - 1);
// }


// console.log(factorial(3));
// const startPos = 1;
// const numbers = [1, 2, 3 , 4, 56]

// for (let i = 0;i < numbers.length; i =+ 1) {
//   const number = numbers[i];
//   console.log(number);
// }

// for (const number of numbers) {
//   console.log(number);
// }

// const apartments = {
//   street: '',
//   city: ''
// }

// apartments.country = 'Ukraine';
// apartments.owner = {
//   name: 'Bob',
//   surName: 'Smith',
//   parents : {
//     granny: '',

//   }
// }

// apartments.owner.parents.daddy = 'Jack';


// console.log(apartments);

function filterArray(number, values) {
  const bigResult = [2, 3, 4, 5, 6, 7];

  // return 2 + 3;
}

const newResult = filterArray([2, 3])

const doubleResult = filterArray([2, 5]) * filterArray(2, 3) 

console.log(newResult)
console.log(doubleResult)