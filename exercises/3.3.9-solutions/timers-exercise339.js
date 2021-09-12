/*

countDown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

countDown(4);
// 3
// 2
// 1
// "DONE!"

*/

const countDown = (num) => {
  let interval = setInterval(function () {
    if (num > 0) {
      num--;
      if (num !== 0) console.log(num);
    }
    if (num === 0) {
      clearInterval(interval); // https://stackoverflow.com/questions/16437173/stop-setinterval/16437215
      console.log("DONE!");
    }
  }, 1000);
};

countDown(10);
