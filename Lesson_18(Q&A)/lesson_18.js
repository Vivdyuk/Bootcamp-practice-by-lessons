console.log("q&a");

/**
 * Наша ф-я приймає в себе літеру. Якщо літера, не передана, за дефолтом це має бути перша літера алфавіту.
 *
 *
 * У ф-ї ми маємо оброблювати сабміт нашої форми.
 *
 * Нам важливо зібрати значення лише з тих полів, які починаються з нашої літери.
 *
 * Після чого, нам потрібно значення полів додати в розмітку в ul елемент з класом list, який був створений до цього.
 *
 * @param {*} letter
 *
 */
function createMarkupFromLetter(letter = "a") {
  const formEl = document.querySelector(".form");
  const list = document.querySelector(".list");

  const onFormCollectDataSubmit = (event) => {
    event.preventDefault();
    const dataArr = [];
    console.dir(event.target);

    const elements = Object.keys(event.target.elements)
      // .filter(
      //   (key) =>
      //     isNaN(key) &&
      //     key !== event.target.elements[key].id &&
      //     key.toLocaleLowerCase().startsWith(letter.toLocaleLowerCase())
      // )
      // .map((key) => event.target.elements[key].value)
      // .map((element) => {
      //   return `<li class="list-item"><span class="item-text">${element}</span></li>`;
      // })
      // .join("");
      .reduce((acc, key) => {

      }, '');

    list.insertAdjacentHTML("afterbegin", elements);
    
    console.log(elements);
    // list.append(...elements);
    // console.log(parseInt("50.25px"))
  };

  formEl.addEventListener("submit", onFormCollectDataSubmit);
}

// createMarkupFromLetter("N");
createMarkupFromLetter()

// ['qsdlkjs', 23, 0, null].filter(item => item);

// "javacript".startsWith('j') => true
// "javacript".startsWith('J') => false
// "javacript".startsWith('h') => false
