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

event.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.className = "choiceButton";

    button.onclick = () => {
        applyEventEffects(player, choice.effects);
        localStorage.setItem("player", JSON.stringify(player));
        choices.style.display = "none";
        continueBtn.style.display = "block";
    };

    choices.appendChild(button);
});

continueBtn.onclick = () => {
    gameState.eventDone = true;
    NextQuarter(gameState);
    localStorage.setItem("gameState", JSON.stringify(gameState));
    saveGame({ player, gameState });
    window.location.href = gameState.endgame ? "../endgame/EndGame.html" : "../mainGame/mainGame.html";
};
