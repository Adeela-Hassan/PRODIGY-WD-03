let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const messageElement = document.getElementById('message');

function handleClick(cellIndex) {
  if (gameState[cellIndex] === '' && gameActive) {
    gameState[cellIndex] = currentPlayer;
    document.getElementById('board').children[cellIndex].textContent = currentPlayer;
    if (checkWin()) {
      messageElement.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkDraw()) {
      messageElement.textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      messageElement.textContent = `Player ${currentPlayer}'s Turn`;
    }
  }
}

function checkWin() {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !gameState.includes('');
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  messageElement.textContent = `Player ${currentPlayer}'s Turn`;
  Array.from(document.getElementById('board').children).forEach(cell => cell.textContent = '');
}
