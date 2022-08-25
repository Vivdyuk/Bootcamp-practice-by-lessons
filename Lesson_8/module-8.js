// export const fruits = ['Apple', ['Sea Buckthorn', 'Strawberry'], 'Mango', 'Cherry', 'Papaya', 'Pear', 'SLemon', 'oRange', 'Bananas', 'Without', '', 'is', 'Pineapple']


// // const variable = fruits
// //   .filter(fruit => String(fruit).startsWith('S'))
// //   .map(fruit => fruit.toLocaleUpperCase())
// //   .find(fruit => fruit.length > 5)
// // // console.log(fruits);
// // console.log(variable);


// // const varriable = fruits.reduce((acc, fruit) => {
// //     return acc + String(fruit).length
// // }, 0)
// // const numbers = [1, 2, 12, 3, 45]
// // // console.log(fruits);
// // // console.log(varriable);

// // const variable = [...fruits].sort()

// // // console.log(fruits);
// // console.log(variable);

// // console.log(fruits === variable);

// export const makeTwoDimArray = () => {
//   const outterArray = new Array(Math.ceil(Math.random() * 10));
//   let i = 0;
//   while (i < Math.ceil(Math.random(Math.random()) * 10) + 1) {
//     outterArray.push([])
//     i++;
//   }

//   outterArray.map(innerArray => {
//     let i = 0;
//     while (i < Math.ceil(Math.random() * 10)) {
//       innerArray.push(Math.ceil(Math.random() * 10))
//       i++;
//     }

//     return innerArray;
//   })

//   return outterArray;
// }


// const twoDimArray = makeTwoDimArray();
// console.log(twoDimArray);

// // 1. In outter array only arrays  done
// // 2. In inner array numbers > 5; done
// // 3. object {value : index}

// const result = twoDimArray
//   .filter(item => Array.isArray(item))
//   .map(item => item.filter(cell => cell > 5).map((item, i) => ({
//     [item]: i
//   })))

// console.log(result);

// const cars = [{
//     name: "Toyota",
//     type: "A",
//   },
//   {
//     name: "Honda",
//     type: "A",
//   },

//   {
//     name: "Honda",
//     type: "Z",
//   },
//   {
//     name: "Toyota",
//     type: "Z",
//   }
// ];



/**
 * created random-generated hex color
 * 
 * @returns string
 */
const generateColor = () => {
  const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let result = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.round(Math.random() * (values.length - 1));
    result += values[randomIndex]
  }


  return result;
}
/**
 * 
 * @param {string} string
 * 
 * Move the first letter of each word to the end of it, then add "ay" to the  end of the word. Leave punctuation marks untouched.
 * 
 * @returns   string 
 */
function pigIt(string) {
  return string.split(' ')
    .map(word => ![',', '.', '!', '?'].includes(word) ? (word.slice(1) + word[0] + 'ay') : word)
    .join(' ');
}

/**
 * 
 * @param {number} array 
 * @param value
 * 
 * @returns an array with two values which sum equals value (first indexes) | {undefined}
 */
function sumPairs(array, value) {
  let result;
  let diff = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === value && j - i < diff) {
        diff = j - i;
        result = [array[i], array[j]]
      }
    }
  }

  return result;
}





// console.log(sumPairs([1, 4, 8, 7, 3, 4, 15, 0], 8)); // [1, 7]
// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]  
// console.log(sumPairs([20, -13, 40], -7)); //undefined
// console.log(sumPairs([], 5)); // undefined


// console.log(generateColor());
// console.log(generateColor());
// console.log(generateColor());
// console.log(generateColor());
// console.log(generateColor());
// console.log(generateColor());
// console.log(generateColor());

export const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
];


// console.log(users.filter((user) => user.name.length > 20));

console.log('here');