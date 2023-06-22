// const { name, value } = event.target;
// name = value;
// list.innerHTML +=
// console.log(
//   lists.map((list) => {
//     return;
//   })
// );

// list.innerHTML = '';

function appendList(list, parentSelector) {
  const listAppend = document.querySelector(`.${parentSelector}`); //".list--append"

  console.dir(listAppend);

  // listAppend.append(itemAppend);

  const elArr = list.map((element) => {
    const itemAppend = document.createElement("li");

    itemAppend.textContent = element;

    return itemAppend;
  });
  listAppend.append(...elArr);

  // const elArr = list.forEach((element) => {
  //   const textAppend = document.createElement("p");
  //   textAppend.textContent = element;

  //   listAppend.append(textAppend);
  // });
}

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

appendList(clubs, "list--append");
insertGGList(clubs, "list--insert");

/**
 *
 * <li><p>element</p></li>
 */
function insertGGList(list, parentSelector) {
  const listInsert = document.querySelector(`.${parentSelector}`);

  const result = list.map((club) =>  `
    <li>
       <p>
         ${club.trim()}
       </p>
     </li>
     `
).join("")
     

  console.log(result);
  listInsert.insertAdjacentHTML("beforeend", result);

  // listInsert.insertAdjacentHTML("beforeend", {name: 'Bob'});

  // listInsert.insertAdjacentHTML(
  //   "beforeend",
  //   `<li>
  //     <p>
  //       ${list[0]}
  //     </p>
  //   </li>
  //   <li>
  //     <p>
  //       ${list[1]}
  //     </p>
  //     </li>`
  // );
}
