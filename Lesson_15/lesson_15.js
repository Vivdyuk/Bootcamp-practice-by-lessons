console.log("events");

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

/**
 *
 * <li><p>element</p></li>
 */
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

const button = document.querySelector("button");
const dontButton = document.querySelectorAll("button")[1];

const handleClick = ({ target }) => {
  console.dir(target);
  console.log(target.textContent);

  target.textContent =
    target.textContent === "Click me" ? "Don't Click me" : "Click me";
};

button.addEventListener("click", handleClick);
dontButton.addEventListener("click", handleClick);

// button.removeEventListener('click', handleClick);

function colorClubs() {
  const listClub = document.querySelectorAll(".list--insert li");
  // const listClub = document.querySelector('.list--insert').querySelectorAll('li');
  console.dir(listClub);

  const changeColor = ({ target }) => {
    if (target.style.backgroundColor === "red") {
      console.log("colored to white");

      target.style.backgroundColor = "white";
      return;
    }

    target.style.backgroundColor = "red";
  };

  listClub.forEach((club) => {
    club.addEventListener("click", changeColor);
  });
}
colorClubs();

function fillTheParagraph() {
  const mainParagraph = document.querySelector(".mainParagraph");
  console.dir(mainParagraph);
  const mainInput = document.querySelector(".mainInput");
  mainInput.addEventListener("input", handleInput);

  function handleInput(event) {
    if (event.target.value.length <= 7) {
      mainParagraph.textContent = event.target.value;
    } else {
      mainInput.removeEventListener("input", handleInput);
    }
  }
}

fillTheParagraph();

// document.addEventListener('keydown', (event) => {
//   console.log('keydown');
//   console.dir(event);
// })
const handleSpace = (event) => {
  console.log("keyup");
  console.dir(event);
};

document.addEventListener("keyup", handleSpace);

document.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault();
});
