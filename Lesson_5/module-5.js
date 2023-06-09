const names = ["Hannah", "John", "Ted", "Dean", "Bob", "Adrianna", "Otto"];
const codingLanguages = ["JS", "C++", "C#", "Python", "Java", "Swift"];
const appleTypes = [
  "Golden",
  "Gala",
  "Black Prince",
  "Caramelka",
  "Spartan",
  "Fuji",
  "Honey Crisp",
];
const logins = ["Ha1nnah2", "44JohnGG", "klTed", "99Dean", "JabBob"];

const arrays = [names, codingLanguages, appleTypes];

/**
 * нам треба зробити цегляний шифратор.
 * Цегляна мова - це коли до слова в кінці додають якийсь вираз.
 *
 * Нам потрібно після кожного слова додати ті склади/слова, які нам прийдуть у ф-ю(0-n).
 *
 * Якщо склади не передано, то за дефолтом ми до кожного слова маємо доадти `ez`
 * Якщо рядок phrase - пустий, то нічого додавати не потрібно.
 *
 * makePhraseBrick('Hello world', 'ja', 'ju') => 'Hellojaju worldjaju'
 * @param {*} phrase - рандомний рядок
 */
function makePhraseBrick(phrase) {
  if (phrase === "" || phrase === undefined) {
    return "";
  }

  //! 1 варіант ======
  let argsCombined = "";
  for (let i = 1; i < arguments.length; i += 1) {
    argsCombined += arguments[i];
  }
  console.log(argsCombined);
  //!  ============
  //? 2 варіант =====

  const argsCombinedDeluxe =
    arguments.length > 1
      ? // Array.from(arguments)
        [...arguments].slice(1).join("")
      : "ez";
  //? =================
  console.log(`Phrase is: "${phrase}", type is ${typeof phrase}`);
  // console.log(argumen1);

  console.log(argsCombinedDeluxe);

  const splittedPhrase = phrase.split(" ");

  //! 1 option =====
  // const words = [];
  // for (let i = 0; i < splittedPhrase.length; i += 1) {
  //   words.push(splittedPhrase[i] + argsCombinedDeluxe);
  // }
  // return words.join(" ");
  //! =================

  //? 2 option =======
  // let words = "";
  // for (let i = 0; i < splittedPhrase.length; i += 1) {
  //   words += splittedPhrase[i] + argDeluxe + " ";
  // }
  // return words.slice(0, 1);
  //? ===============

  //TODO 3 option
  //"Hello World"
  // let finalWord = "";
  // for (let i = 0; i < phrase.length; i += 1) {
  //   const letter = phrase[i];

  //   if (letter === " ") {
  //     finalWord += argsCombinedDeluxe;
  //     // finalWord = finalWord + argsCombinedDeluxe
  //   }

  //   finalWord += letter;

  //   if (i === phrase.length - 1) {
  //     finalWord += argsCombinedDeluxe;
  //   }
  // }

  // return finalWord;

  //TODO ==================
}

const args = [0, 1, 2, 3, 4, 5];
const phrase = args[0];
const phrase2 = args[1];
const phrase3 = args[2];

//  [1,        2,   3, 4, 5, 6]
//   |         |     \
function test(phrase, phrase2, phrase3) {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];

    sum += element;
  }

  return sum;
}

// console.log(test(1, 2, 3, 4,5, 6));

// console.warn(makePhraseBrick("", "hey", "you"));

// console.warn(makePhraseBrick("Welcome to the Internet", "1234", "hh"));
// console.warn(makePhraseBrick("Hello guys"));

// console.warn(makePhraseBrick());

//   "ted" "machineLearning"

function toCamelCase(str) {
  //   console.log(str);
  //   result = str[0];
  // for (let i = 1; i < str.length; i++) {
  //   if (str[i] === "-" || str[i] === "_") {
  //     result += str[i + 1].toUpperCase();
  //     i += 1;
  //   }
  //   else {
  //     result += str[i];
  //   }
  //   }
  //   console.log(result);
  const splittedStr = str.split(/-|_/);
  console.log(splittedStr);

  const result = [];
  for (let i = 0; i < splittedStr.length; i++) {
    const word = splittedStr[i];
    const firstLetter = word[0];

    result.push(
      (i === 0 ? firstLetter : firstLetter.toUpperCase()) +
        word.slice(1).toLowerCase()
    );
  }

  return result.join("");
}

console.log(toCamelCase("the-stealth-warrior"));
//"theStealthWarrior"

console.log(toCamelCase("The_Stealth_Warrior"));
//"TheStealthWarrior"

console.log(toCamelCase("The_Stealth-Warrior"));
// "TheStealthWarrior"
