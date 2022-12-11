function TikTac (){
// Create variables to hold the state of the game
let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Create a function to switch turns between players
function switchTurns() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

// Create a function to place a player's mark on the board
function placeMark(row, col) {
  board[row][col] = currentPlayer;
  switchTurns();
}

// Create a function to check for a winner
function checkForWinner() {
  let winner = null;

  // Check for horizontal wins
  for (let i = 0; i < board.length; i++) {
    if (
      board[i][0] === currentPlayer &&
      board[i][1] === currentPlayer &&
      board[i][2] === currentPlayer
    ) {
      winner = currentPlayer;
    }
  }

  // Check for vertical wins
  for (let i = 0; i < board.length; i++) {
    if (
      board[0][i] === currentPlayer &&
      board[1][i] === currentPlayer &&
      board[2][i] === currentPlayer
    ) {
      winner = currentPlayer;
    }
  }

  // Check for diagonal wins
  if (
    board[0][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][2] === currentPlayer
  ) {
    winner = currentPlayer;
  }

  if (
    board[0][2] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][0] === currentPlayer
  ) {
    winner = currentPlayer;
  }

  return winner;
}
}