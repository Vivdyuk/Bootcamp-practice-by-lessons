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

console.log(names.push("Nastya"));

console.log(names);

/** reverse() */
/**
 *
 * @param {*} words  - масив
 *
 * @returns
 * - якщо у нас немає паліндромів - ми повертаємо пустий масив
 * - якщо у нас є лише один паліндром - ми повертаємо саме його (рядок)
 * - якщо їх більше, ніж 1 - повертаємо масив зі всіма паліндромами
 */

function isPalindrome(words) {
  const palindromes = [];
  if (!words.length) {
    return palindromes;
  }

  for (let word of words) {
    const revWord = word.split("").reverse().join("");

    if (word.toLowerCase() === revWord.toLowerCase()) {
      palindromes.push(word);
    }
  }

  return palindromes.length === 1 ? palindromes[0] : palindromes;
}

console.log(isPalindrome(names));
console.log(isPalindrome(names.slice(0, 3)));
console.log(isPalindrome(names.slice(-2)));
console.log(isPalindrome(["Hello world"]));
console.log(isPalindrome([]));

const numbers = [
  "35",
  27,
  0,
  48,
  4,
  "22,5",
  "55",
  -23,
  543,
  36,
  "6",
  undefined,
];
/**
 * Задача: потрібно знайти найменше число в масиві чисел і * спробувати знайти слово з такою довжиною в масиві слів.
 * Якщо метчу не відбулось, повертаємо null.
 * @param {*} numbers - масив чисед
 * @param {*} words - масив рядків (слів)
 *
 * @returns String | null;
 *
 */

[undefined, "6", 36, 543];

function findMeAPair(numbers, words) {
  // console.log(numbers);
  let min = null;

  for (let i = 0; i < numbers.length; i++) {
    const parsedNumber = Number(numbers[i]); // NaN || Number продавец 404

    parsedNumber === NaN;
    if (isNaN(parsedNumber)) {
      continue;
    }

    if (min === null) {
      min = parsedNumber;
    }

    if (parsedNumber < min) {
      min = parsedNumber;
    }
  }
  //! DONE

  console.log(min);

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    if (word.length === min) {
      return word;
    }
  }

  return null;
}

console.log(findMeAPair(numbers, logins));
console.log(findMeAPair(numbers.slice(-4).reverse(), codingLanguages));
console.log(findMeAPair(numbers.splice(4, 3), appleTypes));

/**
 *
 * @param {*} users
 */
function ohMyGodWhyDoYouNeedDuplicates(users) {
  
}
