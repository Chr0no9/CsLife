import { createPlayer } from "./player.js";

function init() {
    const startButton = document.getElementById("startGameBtn");

    startButton.addEventListener("click", startGame);
}

function startGame() {
    const name = document.getElementById("playerName").value;
    const traitName = document.getElementById("traitSelect").value;

    createPlayer(name, traitName);
    gameState.currentScreen = "QuarterStart";
    console.log("Game started!");
    console.log(gameState);
}
const gameState = {
    year: 1,
    quarter: "Fall",

    currentScreen: "MainMenu",
    currentEvent: null,
    currentMiniGame: null,
    endgame: false
};



init();





