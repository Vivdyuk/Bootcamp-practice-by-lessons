console.log("extensions and static");

class Base {

}

class Club  extends Base{
  #name; // "default CLub"
  #totalValue = 0; // 0
  #numberOfPlayers = 11;
  static #allClubNames = [];

  constructor(name = "default CLub", totalValue) {
    super();
    this.#name = name;
    Club.#allClubNames.push(name);

    if (!isNaN(totalValue)) {
      this.#totalValue = totalValue;
    }
  }


  

  getTotalValue() {
    return this.#totalValue - 0;
  }

  setTotalValue(newTotalValue) {
    if (!isNaN(newTotalValue)) {
      this.#totalValue = newTotalValue;
    }

    return this;
  }

 static get allClubNames() {
    return Club.#allClubNames;
  }

  static getAllClubNames() {
    return Club.#allClubNames;
  }
}


class PremiereLeagueClub extends Club {
  #rdyForLEagueOfChampions;
  
  constructor(name, totalValue, rdyForLEagueOfChampions) {
    super(name, totalValue);
    this.#rdyForLEagueOfChampions = rdyForLEagueOfChampions;
  }
  
  check() {
    if (this.#rdyForLEagueOfChampions) {
      console.log('We\'re ready');
    }
  }
}

const clubNames = [
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



const [ajax, liverpool, chelsea] = createClubs(clubNames);
console.log(ajax);

const bavaria = new PremiereLeagueClub('bavaria', 'banana', true);

// [{name: 'Bob'}, {name: 'John'}, ajax].forEach(obj => {
//   obj.name = 'smth';
// })
console.log(bavaria.getTotalValue());
console.log(ajax);
console.log(Club.allClubNames);
bavaria.setTotalValue(4500000).check()
console.dir(bavaria);

const club = {
  numberOfPlayers: 11,
  name: 'Bavaria',
  totalValue: 0

}

const prLClub = {
  rdyForLEagueOfChampions: true,
  __proto__: club
}

console.log(prLClub)

function createClubs(clubs) {
  return clubs
    .filter((club) => !club.trim().includes(" "))
    .map((example) => new Club(example.trim()));
}

