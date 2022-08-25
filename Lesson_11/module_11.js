import {
  fruits,
  users
} from '../variables.js';

console.log(users);

/**
 * li
 * h1 name
 *  div
 *    a phone
 *    a email
 *  /div
 * /li
 */

function setUsersToList(users) {
  const usersList = document.querySelector('.users');

  const userData = users.reduce((acc, { name, phone, email }) => 
    acc + `
            <li>
                <h1>${name}</h1>
                <div>
                  <a href="tel:${phone}">${phone}</a>
                  <a href="mailto:${email}">${email}</a>
                </div>
            </li>
        `

, '')

  console.log(userData);

  usersList.insertAdjacentHTML('afterbegin', userData)
}


setUsersToList(users);
/* function setListItemstoList(fruits) {
  const fruitsList = document.querySelector('.fruits');
  const result = fruits.map(fruit => {
    const fruitItem = document.createElement('li');
    fruitItem.textContent = fruit;
    return fruitItem;
  });

  fruitsList.append(...result);
} */
const setListItemstoList = fruits => 
  document.querySelector('.fruits').append(...fruits.map(fruit => {
    const fruitItem = document.createElement('li');
    fruitItem.textContent = fruit;
    return fruitItem;
  }))
  
  


console.log(setListItemstoList(fruits));