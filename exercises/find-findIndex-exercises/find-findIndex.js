/*

findUserByUsername
[✓] Write a function called findUserByUsername which 
[✓] accepts an array of objects, each with a key of username, and a string. 
[✓] The function should return the first object with the key of username that matches the string passed to the function. 
[✓] If the object is not found, return undefined.

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined

*/

const users = [
  { username: "mlewis" },
  { username: "akagen" },
  { username: "msmith" },
];

// console.log("connected");

function findUserByUsername(arr, value) {
  return arr.find(function (users) {
    return users.username === value;
  });
}

console.log(findUserByUsername(users, "mlewis")); // {username: 'mlewis'}
console.log(findUserByUsername(users, "taco")); // undefined

/*
removeUser
[✓] Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. 
[✓] The function should remove the object from the array and return this object. 
[✓] If the object is not found, return undefined.

*/

function removeUser(arr, value) {
  return arr.find(function (userArray) {
    // If you want to remove element at position x, use:
    // return arr.splice(arr.findIndex(userArray.username === value), 1);
    let foundIndex = userArray.findIndex(function (user) {
      return user.username === username;
    });
    if (foundIndex === -1) return;

    return userArray.splice(foundIndex, 1)[0];
  });
}

removeUser(users, "akagen"); // {username: 'akagen'}
removeUser(users, "akagen"); // undefined
