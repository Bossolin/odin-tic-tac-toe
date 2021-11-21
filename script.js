const gameBoard = (() => {
  const gameBoardDiv = document.querySelector(".gameboard");
  let gameBoardArr = ["", "", "", "", "", "", "", "", ""];
  let turn = true;

  const winCondish = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("id", `${i}`);
    gameBoardDiv.appendChild(cell);
  }

  return { gameBoardArr, turn, winCondish };
})();

const gameControl = (() => {
  const cells = document.querySelectorAll(".gameboard div");
  const resetBtn = document.querySelector(".controls");
  const announcer = document.querySelector(".announcer h2");

  const placeMarker = (e) => {
    const cell = e.target;
    cell.innerText = gameBoard.turn ? "X" : "O";
    gameBoard.gameBoardArr[cell.id] = gameBoard.turn ? "X" : "O";
    gameBoard.gameBoardArr.every((cell) => cell)
      ? (announcer.innerText = "It's a tie!")
      : "";
    gameBoard.turn = !gameBoard.turn;
    checkWinCondish();
  };

  const checkWinCondish = () => {
    gameBoard.winCondish.forEach((condish) => {
      let a = gameBoard.gameBoardArr[condish[0]];
      let b = gameBoard.gameBoardArr[condish[1]];
      let c = gameBoard.gameBoardArr[condish[2]];
      if (a === "" || b === "" || c === "") {
        return;
      }
      if (a === b && b === c) {
        announcer.innerText = `${!gameBoard.turn ? "X" : "O"} won the round!`;
      }
    });
  };

  cells.forEach((cell) => {
    cell.addEventListener("click", placeMarker, { once: true });
  });

  resetBtn.addEventListener("click", () => {
    gameBoard.gameBoardArr = ["", "", "", "", "", "", "", "", ""];
    announcer.innerText = "X starts the game!";
    cells.forEach((cell) => {
      cell.innerText = "";
      cell.addEventListener("click", placeMarker, { once: true });
    });
    gameBoard.turn = true;
  });

  return {};
})();

const player = (name, mark) => {
  name;
  mark;
  return { name, mark };
};

const player1 = player("Vlad", "X");
const player2 = player("Pauke", "O");
