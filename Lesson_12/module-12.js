import {
  fruits,
  users
} from '../variables.js';


const setListItemstoList = fruits => {
  const fruitsItems = fruits.map(fruit => {
    const fruitItem = document.createElement('li');
    fruitItem.textContent = fruit;
    fruitItem.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    return fruitItem;
  })
  document.querySelector('.fruits').append(...fruitsItems);

  return fruitsItems;
}
 

  function getRandonColor() {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    const color = [];
    // #eeeeee
    // #123efd

    for (let i = 0; i < 6; i++) {
     const index =  Math.floor(Math.random() * values.length);

     color.push(values[index])
    }

    return color.reduce((acc, value) => acc + value, '#');
  }

  function createListenersfForLi(fruitsItems) {
    // for (const fruitItem of fruitsItems) {

    //   fruitItem.addEventListener('click',(event) => {
    //     event.preventDefault();

    //      fruitItem.style.color = getRandonColor();
    //   })
    // }

    fruitsItems.forEach((fruitItem, i) => {
    if (i % 2 === 0) { 
      fruitItem.addEventListener('click',(event) => {
        event.preventDefault();

         fruitItem.style.color = getRandonColor();
      })
    }
    })
  }


  createListenersfForLi(setListItemstoList(fruits))





  
