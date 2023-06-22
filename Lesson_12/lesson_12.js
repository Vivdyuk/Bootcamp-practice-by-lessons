console.log("PROTITYPE AND CLASSES");

// const bob = {
//   'name': 'Bob',
//   age: 34
// }

// const john = {
//   'name': 'John',
//   age: 56
// }

class User {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // getName() {
  //   return this.name;
  // }

  getAge() {
    return this.age;
  }

  setName(newName) {
    if (name !== "John") {
      this.#name = newName;
    }
  }

  setAge(newAge) {
    if (!isNaN(Number(newAge))) {
      this.#age = newAge;
    }
  }

  // get name() {
  //     return this.#name;
  // }

  // set name(newName) {
  //   this.#name = newName
  // }
}

const bob = new User("Bob", 34);
const john = new User("John", 56);
bob.setAge(78);
bob.setAge("Banana");
console.log(bob["#name"]);
console.log(bob);



const testClub = new Club("club", "banana");

console.log(testClub);

console.log(testClub.getTotalValue());

const clubs = [
  "    Real Madrid",
  "Manchester City ",
  " Ajax",
  "Dynamo Kyiv",
  "   Bayer Leverkusen  ",
  "Shakhtar Donetzk",
  "Real Madrid",
  "Liverpool ",
  "                                Chelsea",
];

console.log(clubs);
/**
 * Нам треба наробити екземплярів класу Club лише для тих клубів, які мають в назві ЛИШЕ одне слово.
 *
 * @param {Array<String>} clubs масив з назвами клубів
 *
 * @returns масив екземплярів класу {@link Club} клубів
 */
function createClubs(clubs) {
  return clubs
    .filter((club) => !club.trim().includes(" "))
    .map((example) => new Club(example.trim()));
}

console.log(createClubs(clubs));


const clubAndPrices = {
  "Liverpool ": 1500000000,
  "                                Chelsea": 6.5,
  " Ajax": 344000000,
  "   Bayer Leverkusen  ": 34671982,
}



/**
 * Потрібно додати в кожен клуб його ціну (totalValue)
 * @param {Array<Club>} clubs 
 * @param {Object} prices 
 */
function addPrices(clubs, prices) {

}
//! не забудьте викликати ф-ю

const winterRoasterPlayers = [
  "Maradona",
  "Benzema",
  "Tsygankov",
  "Mudryk",
  "Zidan",
  "Messi",
  "Rebrov",
  ];
  



clubs.reduce((acc, club, i) => {
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


