import { createPlayer } from "../Character.js";

function init() {
    const startButton = document.getElementById("startGameBtn");

    startButton.addEventListener("click", startGame);
}

function startGame() {
    const name = document.getElementById("playerName").value;
    const traitName = document.getElementById("traitSelect").value;

    const player = createPlayer(name, traitName);

    gameState.currentScreen = "QuarterStart";

    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("gameState", JSON.stringify(gameState));

    window.location.href = "../mainGame/mainGame.html";
}

const gameState = {
    year: 1,
    quarter: "Fall",
    currentScreen: "QuarterStart",
    currentEvent: null,
    currentMiniGame: null,
    event_done: true,
    endgame: false
};

localStorage.setItem("gameState", JSON.stringify(gameState));


