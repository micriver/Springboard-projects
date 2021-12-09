const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1;
const board = [];
let piecesInPlay = 0;

function makeBoard() {
  for (let i = 0; i < HEIGHT; i++) {
    board[i] = [];
    for (let x = 0; x < WIDTH; x++) {
      board[i][x] = 0;
    }
  }
}

function makeHtmlBoard() {
  const htmlBoard = document.getElementById("board");

  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

function findSpotForCol(x) {
  let column = x;
  if (board[5][column] === 0) {
    return 5;
  }
  if (board[4][column] === 0) {
    return 4;
  }
  if (board[3][column] === 0) {
    return 3;
  }
  if (board[2][column] === 0) {
    return 2;
  }
  if (board[1][column] === 0) {
    return 1;
  }
  if (board[0][column] === 0) {
    return 0;
  } else {
    return null;
  }
}

function placeInTable(y, x) {
  const piece = document.createElement("div");
  const cell = document.getElementById(`${y}-${x}`);

  piece.classList.add("piece");
  currPlayer === 1 ? piece.classList.add("p1") : piece.classList.add("p2");
  cell.appendChild(piece);
}

function endGame(msg) {
  alert(msg);
}

function handleClick(evt) {
  const x = +evt.target.id;
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }
  board[y][x] = currPlayer;
  placeInTable(y, x);
  piecesInPlay += 1;
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }
  if (piecesInPlay === 42) {
    endGame("The game is tied!");
  }
  currPlayer === 1 ? (currPlayer = 2) : (currPlayer = 1);
}

function checkForWin() {
  function _win(cells) {
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }
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
