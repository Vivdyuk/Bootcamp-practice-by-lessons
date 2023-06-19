// 'use strict';

console.log("THIS");

const bob = {
  name: "Bob",

  getAge() {
    return this.name;
  },

  helpMe() {
    console.log(this);
  },
};

const john = Object.create(bob);
john.name = "John";

// const john =  {
//   name: 'John'
// }

// console.log(bob.getAge());
// console.log(john.getAge());
// console.log(john);

function helpMe(args, args2) {
  // console.log(this);
  // console.log(args);
  // console.log(args2);
  return this;
}

//call apply bind

///'test'
const callResult = helpMe.call("call", 1, 2, 3, 4);
const applyResult = helpMe.apply("apply", [2, 3, 4, 5]);
const bindResult = helpMe.bind("bind", 2, 3, 4, 5, 6);

// console.log(callResult);
// console.log(applyResult);
// console.log(bindResult);

function whatsThis() {
  const obj = {
    getThis() {
      return this;
    },
    getAnotherThis: () => this,
  };

  const giveMeThis = () => {
    return this;
  };

  console.log(this);
  console.log(obj.getThis());
  console.log(obj.getAnotherThis());
  console.log(giveMeThis());
}

// whatsThis();

function whatsThis() {
  const obj = {
    getThis() {
      return this;
    },
    getAnotherThis: () => this,
  };

  const giveMeThis = () => {
    return this;
  };

  console.log(this);
  console.log(obj.getThis());
  console.log(obj.getAnotherThis.apply(["23", 2]));
  console.log(giveMeThis());
}

// whatsThis.call('context');

function whatsThis() {
  
  const obj = {
    getThis() {
      return this;
    },
    getAnotherThis: () => this
  }
  
  const giveMeThis = () => {
    return this;
  }
  
  console.log(this);
    console.log(obj.getThis.call('text')/* .apply('pretext') */);
    console.log(obj.getAnotherThis());
    console.log(giveMeThis().bind('wtf'));
}


whatsThis.bind('bind');
