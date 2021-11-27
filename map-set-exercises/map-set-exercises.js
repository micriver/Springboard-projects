// Quick Question #1
// What does the following code return?

// const set = new Set([1, 1, 2, 2, 3, 4]);
// set.forEach((val) => {
//   console.log(val);
// });
// it returns set with unique values = [1, 2, 3, 4]

// Quick Question #2
// What does the following code return?
// console.log([...new Set("referee")].join("")); // "ref", getting rid of the duplicates letters, placing them into an array and then joining the elements in the array into a string.

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1, 2, 3], true);
// m.set([1, 2, 3], false);

// m.forEach((v, key) => console.log(key, v));

// [ 1, 2, 3 ] true
// [ 1, 2, 3 ] false

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// returns boolean
function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const mapRes = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, mapRes.get(lowerCaseChar) + 1);
      } else {
        mapRes.set(lowerCaseChar, 1);
      }
    }
  }
}

vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount("Colt"); // Map { 'o' => 1 }
