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

  const golosni = ['a', 'e', 'o','u', 'y', 'i'];

/*'C' */
  return  arr
  .filter((el) => el.length % 2 === 0)
  .map((el) => el.toUpperCase())
  .find((el) => el[0] === "C")
  .split("")
  .filter((el) => golosni.includes(el.toLowerCase()))
  .join(" and ");

/** повернути рядок, в якому будуть всі наші голосні зʼєднані черех " and " */
};

console.log((() => {
  return 2 === 3
})());
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
function transferWindow(clubs, players, ...args) {

  // players.forEach(function(player,i) {
  //   result.push([player, clubs[i]]);
  // });
  // clubs.forEach(function (club, i) {
  //   result.push([]);
  // });


  return clubs
    .filter((club) => !args.includes(club))
    .map((club, i) => [players[i], club]);
  }


const winterRoasterPlayers = ["Maradona" , "Benzema" ,"Tsygankov", "Mudryk", "Zidan", "Messi", "Rebrov"];
const clubs = ["Real Madrid", "Manchester City", 'Ajax', "Dynamo Kyiv", "Bayer Leverkusen", "Shakhtar Donetzk", "Chelsea FC"];

console.log(transferWindow(clubs, winterRoasterPlayers, "Real Madrid", "Bayer Leverkusen"));
console.log(transferWindow(clubs, winterRoasterPlayers, "Chelsea", "Shakhtar Donetzk"));

