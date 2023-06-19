console.log("lesson_10");

const codingLanguages = ["JS", "C++", "C#", "Python", "Java", "Swift"];

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

function findEven(arr) {
  // const arrElArr = [     /* наші парні елементи */   ];

  //   const iterate = (arrEl) => {
  //     if (arrEl.length % 2 === 0) {
  //       //6 % 2 === 0 ==> true
  //       arrElArr.push(arrEl); // arr.push
  //     }
  //   };

  const golosni = ["a", "e", "o", "u", "y", "i"];

  /*'C' */
  return arr
    .filter((el) => el.length % 2 === 0)
    .map((el) => el.toUpperCase())
    .find((el) => el[0] === "C")
    .split("")
    .filter((el) => golosni.includes(el.toLowerCase()))
    .join(" and ");

  /** повернути рядок, в якому будуть всі наші голосні зʼєднані черех " and " */
}

console.log(
  (() => {
    return 2 === 3;
  })()
);
// console.log(findEven(fruits));
// console.log(findEven(codingLanguages));
// +

/**
 * Відбулось трансферне вікно, в якому якісь клуби купили якихось гравців.
 * Ми знаєио, що позиція клубу і гравця в масиві співпадають
 * 
 * Нам потрібно повернути масив з масивами, кожен з яких матиме на пешому місці  гравця, а на другому - клуб, який його купив
 *
 * @param {String} players масив гравців 
 * @param {String} clubs масив клубів
 * 
 * @returns 
// [["Maradona", "Real Madrid"], ["Benzema", "Manchester City"], ...]
 */
function transferWindow(clubs, players, ...exclusions) {
  // players.forEach(function(player,i) {
  //   result.push([player, clubs[i]]);
  // });
  // clubs.forEach(function (club, i) {
  //   result.push([]);
  // });

  /*   return clubs
    .filter((club) => !exclusions.includes(club))
    .map((club, i) => [players[i], club]); */

  return clubs.reduce((acc, club, i) => {
    if (exclusions.some((exclusion) => exclusion.name === club)) {
      return acc;
    }

    const player = players[i];


    if (!acc[club]) {  // acc["Real Madrid"]
      return {
        ...acc,
        [club]: {
          players: [player],
        },
      };
    }
    
    acc[club].players.push(player) // acc["Real Madrid"].players

    return  acc;
    
  }, {});

}

const winterRoasterPlayers = [
  "Maradona",
  "Benzema",
  "Tsygankov",
  "Mudryk",
  "Zidan",
  "Messi",
  "Rebrov",
];
const clubs = [
  "Real Madrid",
  "Manchester City",
  "Ajax",
  "Dynamo Kyiv",
  "Bayer Leverkusen",
  "Shakhtar Donetzk",
  "Real Madrid",
];

console.log(
  transferWindow(clubs, winterRoasterPlayers,{name:  "Real Madrid"}, {name: "Bayer Leverkusen"})
);

console.log(
  transferWindow(clubs, winterRoasterPlayers, {name: "Chelsea"}, {name: "Shakhtar Donetzk"})
);

console.log(clubs);

// const clubs = {
//   0:"Real Madrid",
//   1:"Manchester City",
//   2:"Ajax",
//   3:"Dynamo Kyiv",
//   4:"Bayer Leverkusen",
//   5:"Shakhtar Donetzk",
//   6:"Real Madrid",
//   length: 7
// }

for (let i = 0; i < clubs.length; i++) {
  const club = clubs[i];

  if (club.length < 10) {
    continue;
  }


  console.log(club);
}

clubs.forEach((club) => {
  if (club.length < 10) {
    return;
  }

  console.log(club);
})

function changeEven(numbers, value) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  
}
const numbers = [1, 2, 3];
changeEven(numbers, 666);

console.log(numbers);
