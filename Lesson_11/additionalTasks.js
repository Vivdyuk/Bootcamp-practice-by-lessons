import {
  posts,
  users,
  comments,
  fruits
} from '../variables.js';


// console.log(fruits);
// TODO longest even fruit

function findLongestEvenFruit(fruits) {
  /** worst result aka old school */
  // let maxEven = fruits[0];
  //   for (const fruit of fruits) {
  //     if (fruit.length % 2 === 0 && fruit.length > maxEven.length) {
  //       maxEven = fruit;
  //     }
  //   }

  //   return maxEven;
  // numbers = [1,2, 3]
  //const firstEl = numbers[0]

  return fruits.filter(fruit => fruit.length % 2 === 0).sort((a, b) => b.length - a.length)[0];
}


// console.log(findLongestEvenFruit(fruits));

// TODO 

/**
 *  @returns new array with users that have additional property posts with all posts made by that user
 */

// 1. create a  copy of user
// 2. Create a property 'posts' with array of posts that was nade by this user id === userId
// 3. Sort posts by title asc
// 4. return new array of new users

function getUsersWithPosts(users, posts) {
  /** old school */
  /*   const result = [];

    for (const user of users) {
      const userPosts = [];
      for (const post of posts) {
        if (user.id === post.userId) {
         userPosts.push({...post});
        }
      }
      result.push({
        ...user,
        posts: userPosts.sort((firstPost, secondPost) => firstPost.title.localeCompare(secondPost.title))
      });
    }

    return result; */



  return users.map(user => (
    {
    ...user,
    posts: posts
    .filter(post => post.userId === user.id)
    .map(post => ({
      ...post
    }))
    .sort((firstPost, secondPost) => firstPost.title.localeCompare(secondPost.title))
  }))
}

console.log(users[0]);
console.log(users);
console.log(users.length);
console.log(posts[0]);
console.log(posts);
console.log(posts.length);
console.log('================================');
console.log(getUsersWithPosts(users, posts));