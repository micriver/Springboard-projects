console.log("connected2");

/*

[✓] Creates a new array
[✓] Iterates through an array
[✓] Runs a callback function for each value in the array
[✓] Adds the result of that callback function to the new array
[✓] Returns the new array
[✓] map always returns a new array of the same length

*/

arr = [2, 4, 8];

function square(num) {
  return num ** 2;
}

function myMap(arr, cfunc) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const val = cfunc(arr[i], i, arr);
    newArray.push(val);
  }
  return newArray;
}

// console.log(myMap(arr, square));

const repeatedStrings = myMap(["a", "b", "c", "d", "e"], function (str, idx) {
  return str.repeat(idx);
});
