const gameBoard = document.querySelector("#gameboard");
const infoDysplay = document.querySelector("#info");

const startCells = ["", "", "",
    "", "", "",
    "", "", "" ]
function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index;
        cellElement.addEventListener("click", makeMotion);

        gameBoard.append(cellElement);
    });
};

let motionElement = "circle";
infoDysplay.textContent = "Circle goes first";
function makeMotion(e) {
    const displayMotion = document.createElement("div");
    displayMotion.classList.add(motionElement);
    e.target.append(displayMotion);
    e.target.removeEventListener("click", makeMotion);

    motionElement = motionElement === "circle" ? "cross" : "circle";
    infoDysplay.textContent = `Now it's time for ${motionElement} to go`;
    checkWin();
}

function checkWin() {
    const allSquares = document.querySelectorAll(".square");
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    winningCombinations.forEach(combo => {
        let circleWins = combo.every(cell =>
            allSquares[cell].firstChild?.classList.contains("circle"));

        let crossWins = combo.every(cell =>
            allSquares[cell].firstChild?.classList.contains("cross"));

        if (circleWins) {
            infoDysplay.textContent = "Circles winned!!!";
            allSquares.forEach(
                square => square.replaceWith(square.cloneNode(true))
            );
        } else if (crossWins) {
            infoDysplay.textContent = "Crosses winned!!!";
            allSquares.forEach(
                square => square.replaceWith(square.cloneNode(true))
            );
        }
    })
}

createBoard();
