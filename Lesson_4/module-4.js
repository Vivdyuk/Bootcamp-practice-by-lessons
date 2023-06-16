// "Helloo!! "

// "hi!"

//
/**
 * Нам приходять лише числаю.
 * Загальна сума чисел === кількість спроб.
 *
 *
 * @returns рядок "Help me! I've tried $() times";
 *
 * якщо в ф-ю нічого не передали, то повертаємо
 * "Help me! I've tried 0 times"
 * "Help me! I've tried ${} times"
 */
function helpMe() {
  let amount = 0;
  for (const argument of arguments) {
    amount += argument;
    // console.log(amount);
    // return amount
  }
  let str = `Help me! I've tried ${amount} times`;
  return str;
}

// console.log(helpMe());
// console.log(helpMe(1, 2, 3, 5));

/**
 * Як ми знаємо, то пити алкоголь можна лише з 18 років.
 * Також, дужєе небажанго вживати алкоголь після 60 років.
 *
 * @param age - число. Вік нашого піддослідного.
 * Якщо вік менше 3х років - "You can drink only milk"
 * Якщо вік від 3 до 18 - "Drink some tea"
 * Якщо вік від 18 до 60 - "You can drink"
 * якщо вік старше 60 - "Take care about your health"
 *
 *
 * Якщо age не age - виводимо "Please enter valid age"
 */
function generateResponse(age) {
  age = Number(age);

  // let res = "";

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

console.log(generateResponse());
console.log(generateResponse(0));
console.log(generateResponse(5));
console.log(generateResponse(18));
console.log(generateResponse(27));
console.log(generateResponse(57));
console.log(generateResponse(62));
console.log(generateResponse("Nine"));

// 10000 lines of code

/**
 * Позиція бекенду === в логінах не може бути точних  дублікатів.
 *
 * Нам приходить масив юзерів.
 * Ф-я має повертати нам масив юзерів, логіни яких не мають повторення символів(тобто всі символи в логіні мають бути унікальними)
 *
 * якщо всі логіни не унікальні(або логіни не прийшли), ми маємо повернути пустий масив.
 *
 * @param {Array|undefined|null} logins - масив юзерів
 */
const logins = ["Ha1nnah2", "44JohnGg", "klTed", "99Dean", "JabBod"];
const expectedResult = [];


function excludeDuplicates(logins) {
  const uniqueLogins = [];
  if (!logins) {
    return uniqueLogins;
  }
  //                                  A
  //  abcd E fgh ==> abcdfgh       // abc|decfgh = bcdefgh
  //                                   B = cdefgh
  for (const login of logins) {

    let isUnique = true;
    for (let i = 0; i < login.length - 1; i += 1) {
      const copyLog = login.slice(i + 1);
      if (copyLog.includes(login[i])) {
        isUnique = false;
        break;
      }
    }
    // if unique
    if (isUnique) {
      uniqueLogins.push(login);
    }
  }

  return uniqueLogins;
}

console.log(excludeDuplicates());
console.log(excludeDuplicates(null));
console.log(excludeDuplicates([]));
console.log(excludeDuplicates(logins));
