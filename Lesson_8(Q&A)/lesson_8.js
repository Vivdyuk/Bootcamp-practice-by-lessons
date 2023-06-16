console.log("Q&A");

function indexOfv2_0(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    let item = "";
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

// console.log(indexOfv2_0([1, 2, 3], 2)); // => 1
// console.log(indexOfv2_0(["js", "CSS", "HTML"], "Java")); // => -1

const userBob = {
  name: "bob",
  status: "User",
  age: 24,
  subscriptions: ["YouTube", "Netflix", "PSN"],
};

userBob.name;

// const userAsArr = Object.entries(user);
// console.log(userAsArr);

// for (const [key, value] of userAsArr) {
//   // console.log(arr);
//   // const key = arr[0];
//   // const value = arr[1];
//   console.log(`key is ${key}`);
//   console.log(`value is  ${value}`);
// }

/** Dima, John and 3333 others likes your post */

/**
 * 1. Якщо ніхто не лайкнув пост => `No one likes this post yet`
 * 2. Якщо лайкнув(ла) пост дише одна людина => `${людина} likes this`
 * 3. Якщо дві людини => `${людина 1} and ${людина 2 } like this`
 * 4. Якщо людей більше => `${людина1}, ${людина 2} and ${кількість без перших двох} like this`
 *
 * @param {String} users - Масив з юзерами, які лайкнули наш пост
 */
/* 
! 1 редакція
function getLikesMessage(users) {
    if (users.length === 0) {
        return `No one likes this post yet`;
    }
    
    if (users.length === 1) {
        return `${users[0]} likes this`;
    }
    
    if (users.length === 2) {
        return `${users[0]} and ${users[1]} like this` 
    }

    return `${users[0]}, ${users[1]} and ${users.length - 2} like this`

} */

/* 
! 2 редакція
function getLikesMessage(users) {
  switch (users.length) {
    case  0:
      return `No one likes this post yet`;
    case 1:
      return `${users[0]} likes this`;
    case 2:
      return `${users[0]} and ${users[1]} like this`;

    default:
      return `${users[0]}, ${users[1]} and ${users.length - 2} like this`;
  }
} */

// const users = ["Dima", "Druce", "Kate", "Monica", "Ross", "Sheldon"];
// console.log(getLikesMessage([]));
// console.log(getLikesMessage(["Mike"]));
// console.log(getLikesMessage(["Lexs", "John"]));
// console.log(getLikesMessage(users));
// console.log(users.length);

/**
 * We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

 1 яблуко = false 
  1 apple
  0 apples
  26 apples
  Infonity apples
  10 apples

 4 яблука = false
 */
//

//               //4  apple => apples
// function plural(n) {
// return n !== 1
// if(n !== 1){
//   return true
// }
// return false
// }

// console.log(plural(0) === true, "Plural for 0");
// console.log(plural(0.5) === true, "Plural for 0.5");
// console.log(plural(1) === false, "Plural for 1");
// console.log(plural(100) === true, "Plural for 100");
// console.log(plural(Infinity) === true, "Plural for Infinity");

function multipleOfIndex(array) {
  // good luck

  const newArray = [];
  for (let i = 1; i < array.length; i += 1) {
    // 5 % 2 = 1
    if (array[i] % i) {
      //!0
      continue;
    }

    newArray.push(array[i]);
  }

  return newArray;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]
console.log(multipleOfIndex([11, -11])); // [-11]
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])); // [-1, 10]
console.log(multipleOfIndex([])); // [10]

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];


for (const /* {
  name,
  address: {
    city,
    geo: { lat, lng },
  },
  company: { name: companyName, bs },
} */ user of users) {

  for (const key in user) {
    console.log(key);
    console.log(user[key]);
  }

  // console.log(name);
  // console.log(city);
  // console.log(lat);
  // console.log(lng);
  // console.log(companyName);
  // console.log(bs);
}
