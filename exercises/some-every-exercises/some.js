/*
some
[✓] Iterates through an array
[✓] Runs a callback on each value in the array
[✓] If the callback returns true for at least one single value, return true
[✓] Otherwise, return false
[✓] the result of the callback will always be a boolean

*/

// let myArray = [1, 2, 3];

const isLessThan4 = (num) => {
  return num < 4;
};

function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(isLessThan4(arr[i]));
    if (callback(arr[i], i, arr)) return true;
    // console.log(arr[i]);
  }
  return false;
}

// console.log(mySome(myArray));
// console.log(
//   mySome([1, 1, 2, 3], function (n) {
//     return n < 5; //
//   })
// );
// mySome(myArray);
