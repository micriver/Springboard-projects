/*

[ ] Creates a new array
[ ] Loops through an array
[ ] Runs a callback function on each value in the array
[ ] If the callback function returns true, that value is pushed to the new array
[ ] If the callback function returns false, that value will not be included in the new array
[ ] the result of the callback will always be evaluated into a boolean

*/

const containsVowel = (word) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (char of word) {
    if (vowels.includes(char)) {
      return true;
    }
  }
  return false;
};

console.log(containsVowel("Y!"));

// filter method takes an array and its properties, the values, the indexes, and the length
// as well as a callback function
function myFilter(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const words = ["michael", "rvr", "time", "nnnnn"];

console.log(myFilter(words, containsVowel));
