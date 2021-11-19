const gameBoard = (() => {
  //render the board
  const gameBoard = document.querySelector(".gameboard");
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("id", `${i}`);
    gameBoard.appendChild(cell);
  }
  //store values on the board
  //store win condish
  //
  return {};
})();

const displayController = (() => {
  //place markers
  const cells = document.querySelectorAll(".gameboard div");
  const gameBoardArr = [];
  let turn = true;

  const placeMarker = (e) => {
    const cell = e.target;
    cell.innerText = turn ? "X" : "O";
    //store value
    gameBoardArr[cell.id] = turn ? "X" : "O";
    //change player
    turn = !turn;
  };

  cells.forEach((cell) => {
    cell.addEventListener("click", placeMarker, { once: true });
    gameBoardArr.push("");
  });

  //check for win condish

  return { gameBoardArr };
})();

const player = () => {
  //ask for and store name
  const name = prompt("Your name?");
  //assign mark
  const mark = "X";

  return {};
};
