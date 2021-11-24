// Rest / Spread Operator Exercises
// In this exercise, you’ll refactor some ES5 code into ES2015.

// Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}
// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */
const filterOutOdds2 = (...args) => {
  return args.filter((num) => num % 2 === 0);
};

// console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7));
// console.log(filterOutOdds2(1, 2, 3, 4, 5, 6, 7));

// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.
const findMin = (...numbers) => Math.min(...numbers);

// console.log(findMin(1, 4, 12, -3)); // -3
// console.log(findMin(1, -1)); // -1
// console.log(findMin(3, 1)); // 1
// findMin(1,-1) // -1
// findMin(3,1) // 1

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (ob1, ob2) => ({ ...ob1, ...ob2 });
// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // {a:1, b:2, c:3, d:4}

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => {
  return [
    ...arr,
    ...args.map((val) => {
      return val * 2;
    }),
  ];
};

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]
// console.log(doubleAndReturnArgs([2], 10, 4)); // [2, 20, 8]

// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

// /** remove a random element in the items array
// and return a new array without that item. */

function removeRandom(items) {
  const random = Math.floor(Math.random() * arr.length);
  return items.filter((el, index) => {
    return index != random;
  });
  //   I like my solution above better
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

// /** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

// console.log(extend([1, 2, 3], [4, 5, 6]));

// /** Return a new object with all the keys and values
// from obj and a new key/value pair */

const whiskeyTheDog = {
  name: "Whiskey",
  species: "canine",
  cool: true,
};
// function addKeyVal(obj, key, val) {
//   return { ...obj, [key]: val };
// }

// console.log(addKeyVal(whiskeyTheDog, "color", "brown"));

// /** Return a new object with a key removed. */

function removeKey(obj, key) {
  //   return Object.fromEntries(
  //     Object.entries(obj).filter((keyVal) => {
  //       return keyVal[0] != key;
  //     })
  //   );
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

// console.log(removeKey(whiskeyTheDog, "name"));

// /** Combine two objects and return a new object. */

const tankTheDog = {
  name: "Tank",
  breed: "Bulldog",
  teeth: "sharp",
};
function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// console.log(combine(whiskeyTheDog, tankTheDog));

// /** Return a new object with a modified key and value. */

function update(obj, key, val) {
  //   console.log(`Before the update, the ${key} is ${obj[key]}`);
  //   for (keys in obj) {
  //     if (keys === key) {
  //       obj[key] = val;
  //     }
  //   }
  //   return obj;
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}

// console.log(update(tankTheDog, "breed", "pit"));