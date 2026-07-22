import {hasSaveData,
    loadGame} from "../DataStorage.js";

const newGameBtn = document.querySelector(".newGameBtn");
const continueBtn = document.querySelector(".continueBtn");
const saveMessage = document.getElementById("saveMessage");

// Opens character selection when the player starts a new game.
newGameBtn.addEventListener("click", () => {
    window.location.href = "../CharacterSelect/CharacterSelect.html";
});

// Loads an existing save or displays a message when no save is available.
continueBtn.addEventListener("click", () => {
    saveMessage.textContent = "";

    if (!hasSaveData()) {
        saveMessage.textContent = "No save found.";
        return;
    }

    const saveData = loadGame();

    localStorage.setItem("player", JSON.stringify(saveData.player));
    localStorage.setItem("gameState", JSON.stringify(saveData.gameState));

    window.location.href = "../mainGame/mainGame.html";
});
