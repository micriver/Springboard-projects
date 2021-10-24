/*

Iterates through an array
[✓] Runs a callback on each value in the array
[✓] If the callback returns false for any single value, return false
[✓] Otherwise, return true
[✓] the result of the callback will always be a boolean

*/

let mySecondArray = [1, 2, 2, 2, 1, 1, 0, 1];

function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

console.log(myEvery(mySecondArray, isLessThan4));
