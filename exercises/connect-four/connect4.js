/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 *
 * Instructions need to be re-written so that first mention of the piece being dropped doesn't say that it goes to the bottom but that it goes to the top because that how it behaves
 * The add check for the entire board in step 6 should be addressed later in the assignment
 *
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])
let piecesInPlay = 40; // check to for tie/game over

function makeBoard() {
  for (let i = 0; i < HEIGHT; i++) {
    board[i] = [];
    for (let x = 0; x < WIDTH; x++) {
      board[i][x] = [];
    }
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */
function makeHtmlBoard() {
  const htmlBoard = document.getElementById("board");

  // create top row and make it clickable
  const top = document.createElement("tr"); // create top row of cells of game board
  top.setAttribute("id", "column-top"); // set top row ID attribute to column-top
  top.addEventListener("click", handleClick); // listen for click

  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td"); // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
    headCell.setAttribute("id", x); // set ids for each cell using WIDTH variable
    top.append(headCell); //append each cell in the loop to the top row
  }
  htmlBoard.append(top); //append the row to the board element

  // nested for loops to create and display the rest of the cells in HTML board
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr"); // create row
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td"); // create game cell
      cell.setAttribute("id", `${y}-${x}`); // add cell coordinates as id, will always be unique
      row.append(cell); // append the cell to the row
    }
    htmlBoard.append(row); // append the newly created row to the board
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  // check to see if a player has a piece at the BOTTOM (index of 5) of the board
  // track the number of pieces with a counter
  console.log(`column index = ${x}`);
  // let i = 6;
  // while (i > 0) {
  //   if (board[i][x] === 1 || board[i][x] === 2) {
  //     console.log("piece here!");
  //   }
  // }
  // 5 = bottom of column
  return 5;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  const piece = document.createElement("div"); // create piece div
  const cell = document.getElementById(`${y}-${x}`);

  piece.classList.add("piece");
  currPlayer === 1 ? piece.classList.add("p1") : piece.classList.add("p2");
  cell.appendChild(piece); // append the newly created row to the board
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  alert("Game Over!");
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  const x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  board[y][x] = currPlayer;
  placeInTable(y, x);

  piecesInPlay += 1;
  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  function checkForFullBoard() {
    if (piecesInPlay === 42) {
      endGame();
    }
  }

  checkForFullBoard();

  // switch players
  currPlayer === 1 ? (currPlayer = 2) : (currPlayer = 1);
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }
  // TODO: read and understand this code. Add comments to help you.
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let horiz = [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y, x + 3],
      ];
      let vert = [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y + 3, x],
      ];
      let diagDR = [
        [y, x],
        [y + 1, x + 1],
        [y + 2, x + 2],
        [y + 3, x + 3],
      ];
      let diagDL = [
        [y, x],
        [y + 1, x - 1],
        [y + 2, x - 2],
        [y + 3, x - 3],
      ];
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
