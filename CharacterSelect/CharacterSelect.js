import {createPlayer} from "../Character.js";
import {NextQuarter} from "../Quarter.js";
let selectedAvatar = "";
import {saveGame} from "../DataStorage.js";

function init() {
    const startButton = document.getElementById("startGameBtn");

    startButton.addEventListener("click", startGame);

    const avatars = document.querySelectorAll(".avatar-option");

    avatars.forEach((avatar) => {
        avatar.addEventListener("click", () => {
            avatars.forEach((a) => a.classList.remove("selected"));

            avatar.classList.add("selected");
            selectedAvatar = avatar.dataset.avatar;
        });
    });
}

function startGame() {
    const name = document.getElementById("playerName").value;
    const traitName = document.getElementById("traitSelect").value;

    const player = createPlayer(name, traitName);

    player.avatar = selectedAvatar;

    gameState.currentScreen = "QuarterStart";

    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("gameState", JSON.stringify(gameState));

    saveGame({
        player : player,
        gameState : gameState
    });

    window.location.href = "../mainGame/mainGame.html";
}

const gameState = {
    year : 1,
    quarter : "Fall",
    currentScreen : "QuarterStart",
    currentEvent : null,
    seenEvents : [],
    currentMiniGame : null,
    miniGameDone : false,
    eventDone : false,
    endgame : false
};

init();
