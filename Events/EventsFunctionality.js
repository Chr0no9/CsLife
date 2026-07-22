import { getRandomEvent, applyEventEffects } from "../Events.js";
import { NextQuarter } from "../Quarter.js";
import { saveGame } from "../DataStorage.js";

const player = JSON.parse(localStorage.getItem("player"));
const gameState = JSON.parse(localStorage.getItem("gameState"));
const event = getRandomEvent();
const choices = document.getElementById("choiceContainer");
const continueBtn = document.getElementById("continueBtn");

document.getElementById("eventTitle").textContent = event.title;
document.getElementById("eventDescription").textContent = event.description;

// Creates a button for each event choice and connects it to its stat effects.
event.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.className = "choiceButton";

    // Applies the selected choice and reveals the event Continue button.
    button.onclick = () => {
        applyEventEffects(player, choice.effects);
        localStorage.setItem("player", JSON.stringify(player));
        choices.style.display = "none";
        continueBtn.style.display = "block";
    };

    choices.appendChild(button);
});

// Finishes the event, advances the quarter, saves the game, and opens the next page.
continueBtn.onclick = () => {
    gameState.eventDone = true;
    NextQuarter(gameState);
    localStorage.setItem("gameState", JSON.stringify(gameState));
    saveGame({ player, gameState });
    window.location.href = gameState.endgame ? "../endgame/EndGame.html" : "../mainGame/mainGame.html";
};
