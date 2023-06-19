/* Referencing our Main Variables */
let mainGame = document.getElementById("play-area");
let cellBlocks = document.querySelectorAll(".board-cells");
let resetButton = document.getElementById("reset");

/* 1st Player */
let playerOne = "X";

/* Providing Multiple Winning Scores */
let waysOfWinning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/* Converting Cell Blocks to an Array to make Looping through it easier */
cellBlocks = Array.from(cellBlocks);

/* Calling the same function for each Element in the Array i.e. each Cell Block CLick */
cellBlocks.forEach(function (cellBlock) {
    /* Event Listener that allows us to execute a function with a Mouse Click */
    cellBlock.addEventListener("click", function () {
        /* Porviding Feedback to the Player to let them know that they cant choose the current cell block */
        if (cellBlock.innerText.trim() != "") {
            swal("Sorry...", "You can't choose that spot", "error");
            return;
        }

        /* Referencing the Variable that allows the X and O's to be shown on the Game Board */
        cellBlock.innerHTML = playerOne;

        /* Once there is a Winner, the Game is over and Reset */
        winner();

        /* Stating whose turn it is to play */
        playerOne = playerOne == "X" ? "O" : "X";
        swal("Next Player, GO!");
    });
});

/* Checking for a Winner */
function winner() {
    /* Looping through all Wining COmbinations */
    waysOfWinning.forEach(function (ways) {
        let checking = ways.every(x => cellBlocks[x].innerText.trim() == playerOne);
        if (checking) {
            winnerAndReset(ways);
        }
    });
}

/* Showing the Winner */
function winnerAndReset(ways) {
    ways.forEach(function (x) {
        cellBlocks[x].classList.add("winning");
    });
}

/* Resetting the Game after the Click */
function resetGame() {
    resetButton.addEventListener("click", function () {
        Array.from(cellBlocks).forEach((cellBlock) => {
            cellBlock.textContent = "";
            cellBlock.classList.remove("winning");
        });
    });
}
