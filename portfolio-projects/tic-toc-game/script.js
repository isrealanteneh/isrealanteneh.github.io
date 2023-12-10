const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#infoBoard");
const state = document.createElement("div");
const settingsDiv = document.querySelector(".setting");
const about = document.querySelector(".about");
const background = document.querySelector(".background");
const colors = document.querySelector(".colors");
let checkingWinner = "";

const startCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";
let message = "circle goes first";
state.textContent = message;

function appending() {
  const setting = document.createElement("button");
  setting.textContent = "Setting";
  setting.addEventListener("click", () => {
    settingsDiv.classList.toggle("active");
    colors.classList.remove("active");
    aboutOpen.style.visibility = "hidden";
  });
  infoDisplay.append(state);
  infoDisplay.append(setting);
}

background.classList.contains("circle")
  ? console.log("circle")
  : console.log("not");

appending();

about.addEventListener("click", aboutTab);
background.addEventListener("click", backgroundTab);
const aboutOpen = document.querySelector(".aboutOpen");

function aboutTab() {
  // aboutOpen.style.visibility = "visible";
  colors.classList.remove("active");

  aboutOpen.style.visibility == "visible"
    ? (aboutOpen.style.visibility = "hidden")
    : (aboutOpen.style.visibility = "visible");
}

function backgroundTab() {
  colors.classList.toggle("active");
  aboutOpen.style.visibility = "hidden";
}

function createBoard() {
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");

    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameBoard.append(cellElement);
  });
}

createBoard();

function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  go = go === "circle" ? "cross" : "circle";
  message = "it is now " + go + "'s go.";
  state.textContent = message;
  e.target.removeEventListener("click", addGo);
  checkScore();
}

function changingBackground() {
  const sqr = document.querySelectorAll(".square");
  const allColor = document.querySelectorAll(".color");
  let selectedColor = "white";
  allColor.forEach((color) => {
    color.addEventListener("click", findID);
  });
  function findID(e) {
    selectedColor = e.target.id;
    sqr.forEach((each) => {
      each.className = `square ${selectedColor}`;
    });
  }
}

changingBackground();

function checkScore() {
  const allSquare = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombos.forEach((arr) => {
    const circleWin = arr.every((cell) =>
      allSquare[cell].firstChild?.classList.contains("circle")
    );
    if (circleWin) {
      state.textContent = "Circle Wins!";
      checkingWinner = "circle";
      console.log(checkingWinner);

      allSquare.forEach((square) => square.replaceWith(square.cloneNode(true)));
      infoDisplay.append(state);

      return;
    }
  });

  winningCombos.forEach((arr) => {
    const crossWin = arr.every((cell) =>
      allSquare[cell].firstChild?.classList.contains("cross")
    );
    if (crossWin) {
      state.textContent = "Cross Wins!";
      allSquare.forEach((square) => square.replaceWith(square.cloneNode(true)));
      infoDisplay.append(state);
      checkingWinner = "cross";
      console.log(checkingWinner);

      return;
    }
  });
}
checkSpace();

function checkSpace() {
  const allSqr = document.querySelectorAll(".square");
  let count = 0;
  allSqr.forEach((eachSqr) => {
    eachSqr.addEventListener("click", function () {
      if (eachSqr.firstChild != null) {
        count += 1;
        if (count == 9) {
          if (checkingWinner === "") {
            alert("its a draw! try agin");
            location.reload();
          }
        }
      }
    });
  });
}
