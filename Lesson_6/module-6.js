


//second
/* const [filler, second, third] = array;

const filler = array[0]
const second = array[1]
const third = array[2] */
/* 
console.dir(array);
console.log(third);
 */

// const  { id, name : fullname = 0, username, address } = users[0];
// const {street} = address


// console.log(street);

// const newUsers = [...users];

// newUsers[0].name = 'test';

// console.log(users[0].name)
// console.log(users === newUsers);

// const newUser = {...users[0]};

// newUser.address.street = 'new Street';

// console.log(users[0].address.street);
// const fullCopiedUser = JSON.parse(JSON.stringify(users[0]));

// console.log(fullCopiedUser);

// console.log(users[0].address === fullCopiedUser.address);


// const [f, s, ...rest] = users;
const array = ['firstElement', 'secondElement'];

function testFunction([firstArg, secondArg], thirdArd) {
  console.log(firstArg); // array | first
  console.log(secondArg); // undefined | second
  console.log(thirdArd); // 'firstEL' | firstEle
  console.log(arguments);
}

// testFunction(array)

