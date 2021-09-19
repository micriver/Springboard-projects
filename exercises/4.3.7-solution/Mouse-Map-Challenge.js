/*
Make the color on the body change according to where the cursor is on the webpage

resources:
difference between clientX and pageX: https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y
mousemove: https://www.w3schools.com/jsref/event_onmousemove.asp
working with ratios: https://youtu.be/dce7SzHQwNQ
float to int: https://riptutorial.com/javascript/example/5869/float-to-integer

the innerwidth is ALWAYS going to be set to 255 on pageload because it represents the first color
the innerheight is ALWAYS going to be set at 255 for the second color because when we move down it changes to other color

width = 200 then, color red = 255
height = 400 then, color blue = 255

      100 (x pos)      color (x)
------------------- = -----------
400 (window width)     255 (red)

current red channel color = ratioConversion function;
current blue channel color = ratioConversion function;

*/

const ratioCalc = (posX, posY, windowWidth, windowHeight) => {
  let redCh = "";
  let blueCh = "";
  redCh = Math.ceil((255 * posX) / windowWidth);
  blueCh = Math.ceil((255 * posY) / windowHeight);
  return `rgb(${redCh}, 0, ${blueCh})`;
};

document.addEventListener("mousemove", function (event) {
  event.target.style.backgroundColor = ratioCalc(
    event.clientX,
    event.clientY,
    window.innerWidth,
    window.innerHeight
  );
});
