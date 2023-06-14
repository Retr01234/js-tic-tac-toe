/* Referencing our Main Variables (The Game & Scoreboard) */
let mainGame = document.getElementById("play-area");
let cellBlocks = document.querySelectorAll(".board-cells");
let scoreboard = document.getElementById("scoreboard-info");

let playerOne = "X";

/* Converting Cell Blocks to an Array to make Looping through it easier */
cellBlocks = Array.from(cellBlocks);

/* Calling the same function for each Element in the Array i.e. each Cell Block CLick */
cellBlocks.forEach(function (cellBlock) {
    /* Event Listener that allows us to execute a function with a Mouse Click */
    cellBlock.addEventListener("click", function () {
        /* Porviding Feedback to the Player to let them know that they cant choose the current cell block */
        if (cellBlock.innerText.trim() != "") {
            alert("You cant choose that place. Try Again!");
            return;
        }

        /* Referencing the Variable that allows the X and O's to be shown on the Game Board */
        cellBlock.innerHTML = playerOne;

        /* Once there is a Winner, the Game is over and Reset */
        winner();

        /* Stating whose turn it is to play */
        playerOne = playerOne == "X" ? "O" : "X";
        alert("You played your turn. Next Player, GO!");
    });
});