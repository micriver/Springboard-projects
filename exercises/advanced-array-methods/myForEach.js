// console.log("connected!");

let arr = ["hello", "hi", "you", "welcome"];

function yell(str) {
  console.log(str.toUpperCase());
}

function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i);
  }
}

// console.log(myForEach(arr, yell));
