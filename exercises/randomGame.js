/*

randomGame

Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

*/

const randomGame = () => {
  let count = 0;
  let interval = setInterval(function () {
    const x = Math.random(); // https://www.freecodecamp.org/news/how-to-use-javascript-math-random-as-a-random-number-generator/
    if (x > 0.75) {
      clearInterval(interval); // https://stackoverflow.com/questions/16437173/stop-setinterval/16437215
      console.log(count);
    } else {
      count++;
    }
  }, 1000);
};

randomGame();
