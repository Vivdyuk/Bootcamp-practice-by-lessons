/*! Деструктуризація

1 варіант. function inputHandler({target :{value, dataset, classList}}) {
2 варіант.  const {value, dataset, classList}  = event.target;
3 варіант.  const {target :{value, dataset, classList}}  = event;
  const {target} = event;
  const {classList} = target;

    if (value.length === Number(dataset.length)) {
      classList.add("valid");
      classList.remove("invalid");
        return;
    }
    classList.add("invalid");
    
}

function inputHandler(event) {
  
  if (event.target.value.length === Number(event.target.dataset.length)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
      return;
  }
  event.target.classList.add("invalid");
  
}
 */


function colorClubs() {
  const listClub = document.querySelectorAll(".list--insert li");
  // const listClub = document.querySelector('.list--insert').querySelectorAll('li');
  console.dir(listClub);

  const changeColor = ({ target, currentTarget }) => {
     if (!target.closest("li")) {
       return;
     }

    //  if (target.parentElement.tagName !== "LI") {
    //   return;
    //  }

    if (target === currentTarget) {
      return;
    } 
    if (target.style.backgroundColor === "red") {

      target.style.backgroundColor = "white";
      return;
    }
    console.dir(currentTarget);
    console.dir(target);
    target.style.backgroundColor = "red";
    
   
  };

  // listClub.forEach((club) => {
  //   club.addEventListener("click", changeColor);
  // });

  const listMain = document.querySelector(".list--insert");
  console.dir(listMain);
  listMain.addEventListener("click", changeColor);
}

function insertGGList(list, parentSelector) {
  const listInsert = document.querySelector(`.${parentSelector}`);

  const result = list
    .map(
      (club) => `
     <li>
       <p>
         ${club.trim()}
       </p>
   </li>
     `
    )
    .join("");

  listInsert.insertAdjacentHTML("beforeend", result);
}
// function test({ age, parameters: {weight, height, gender: {male}}}) {
//   male
// }

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

insertGGList(clubs, "list--insert");
colorClubs();


/**
 * Нам потрібно повернути обʼєкт зі всіма значеннями з форми.
 * Всередині цієї ф-ю також потрібно прописати і лістенер
 */
function gatherData() {

  const onForm = document.querySelector(".form");
  onForm.addEventListener("submit", formHandler);

  function formHandler(event) {
    const { elements } = event.target;
    event.preventDefault();
console.dir(event.target);
    console.dir(event.target.elements);
    const userData = { };

    const namedKeys = Object.keys(elements).filter(
      (key) => isNaN(key)
    ).reduce((ac, keyName, i, arr) => {
      ac[keyName] = elements[keyName].value;
      return ac;

      return {
        ...ac,
        [keyName]: elements[keyName].value
      }
    },{} );

    // "0" => 0   
    //  "name" => NaN
    // NaN === NaN  isNaN()
    console.log(namedKeys);
   }
  
}

const obj = {
  1: 'wdasf',
  2: 'dskjfhsdkjfhs',
  3: 'skdjhfsdkfhjjsd',
  age: 23,
  name: 'Bob',
  father: '',
  mother: '',
  grandfather: '',
  grandgrandfather: '',
  grandgrandgrandfather: '',
  grandgrandgrandgrandfather: '',
  grandgrandgrandgrandgrandfather: ''
}
console.log(gatherData())











