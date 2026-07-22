import {createPlayer} from "../Character.js";
import {saveGame} from "../DataStorage.js";

let selectedAvatar = "";

// Connects the Start Game button and avatar images to their click behavior.
function init() {
    const startButton = document.getElementById("startGameBtn");

    // Starts the game using the completed character form.
    startButton.addEventListener("click", startGame);

    const avatars = document.querySelectorAll(".avatar-option");

    // Updates the selected styling and saves the clicked avatar path.
    avatars.forEach((avatar) => {
        avatar.addEventListener("click", () => {
            avatars.forEach((a) => a.classList.remove("selected"));

            avatar.classList.add("selected");
            selectedAvatar = avatar.dataset.avatar;
        });
    });
}

// Creates and saves a new player before opening the main game page.
function startGame() {
    const name = document.getElementById("playerName").value;
    const traitName = document.getElementById("traitSelect").value;

    const player = createPlayer(name, traitName);

    player.avatar = selectedAvatar;

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
    currentMiniGame : null,
    miniGameDone : false,
    eventDone : false,
    endgame : false
};

// Initializes the character-selection controls after the page loads.
init();
