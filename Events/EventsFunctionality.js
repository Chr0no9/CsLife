import {
    getEventForQuarter,
    applyEventEffects
} from "../Events.js";

import { NextQuarter } from "../Quarter.js";

import { saveGame } from "../DataStorage.js";

const player = JSON.parse(localStorage.getItem("player"));
const gameState = JSON.parse(localStorage.getItem("gameState"));

const event = getEventForQuarter(gameState);

const choices = document.getElementById("choiceContainer");
const continueBtn = document.getElementById("continueBtn");
const continueEffects = document.getElementById("continueEffects");

// Converts an effect's property name and value into readable text.
function formatEffect(stat, value) {
    const statLabels = {
        money: "Money",
        happiness: "Happiness",
        social: "Social",
        intellect: "Intellect",
        coding: "Coding",
        health: "Health",
        career: "Career",
        gpa: "GPA",
        relationshipStatus: "Relationship"
    };

    const label = statLabels[stat] || stat;

    if (typeof value === "number") {
        const sign = value > 0 ? "+" : "";
        return `${label}: ${sign}${value}`;
    }

    return `${label}: ${value}`;
}

// Creates and displays a label for each stat effect in a container.
function displayEffects(container, effects) {
    container.innerHTML = "";

    // Loops through every stat effect and adds it to the page.
    Object.entries(effects).forEach(([stat, value]) => {
        const effectItem = document.createElement("span");

        effectItem.className = "effectItem";
        effectItem.textContent = formatEffect(stat, value);

        container.appendChild(effectItem);
    });
}

// Adds the current event to the list of events the player has already seen.
function recordEventAsSeen() {
    if (!Array.isArray(gameState.seenEvents)) {
        gameState.seenEvents = [];
    }

    if (!gameState.seenEvents.includes(event.id)) {
        gameState.seenEvents.push(event.id);
    }
}

// Saves the updated player and game state in both storage formats.
function saveCurrentState() {
    localStorage.setItem(
        "player",
        JSON.stringify(player)
    );

    localStorage.setItem(
        "gameState",
        JSON.stringify(gameState)
    );

    saveGame({
        player,
        gameState
    });
}

// Completes the event, advances the quarter, and opens the next screen.
function finishEventAndAdvanceQuarter() {
    gameState.eventDone = true;

    NextQuarter(gameState);

    saveCurrentState();

    window.location.href = gameState.endgame
        ? "../endgame/EndGame.html"
        : "../mainGame/mainGame.html";
}

// Skips directly to the next quarter when no unused event is available.
if (event === null) {
    finishEventAndAdvanceQuarter();
} else {
    // Stores and displays the event selected for the current quarter.
    gameState.currentEvent = event.id;

    document.getElementById("eventTitle").textContent =
        event.title;

    document.getElementById("eventDescription").textContent =
        event.description;

    // Uses the Continue button as the only option when the event has one choice.
    if (event.choices.length === 1) {
        const onlyChoice = event.choices[0];

        continueBtn.textContent = onlyChoice.text;
        continueBtn.style.display = "block";

        displayEffects(
            continueEffects,
            onlyChoice.effects
        );

        // Applies the only choice and advances when its button is clicked.
        continueBtn.onclick = () => {
            applyEventEffects(
                player,
                onlyChoice.effects
            );

            recordEventAsSeen();
            finishEventAndAdvanceQuarter();
        };
    } else {
        // Creates a button and effect preview for every available choice.
        event.choices.forEach((choice) => {
            const choiceWrapper =
                document.createElement("div");

            choiceWrapper.className = "eventChoice";

            const button =
                document.createElement("button");

            button.type = "button";
            button.textContent = choice.text;
            button.className = "choiceButton";

            const effectsDisplay =
                document.createElement("div");

            effectsDisplay.className = "eventEffects";

            displayEffects(
                effectsDisplay,
                choice.effects
            );

            // Applies and saves the selected choice when its button is clicked.
            button.onclick = () => {
                applyEventEffects(
                    player,
                    choice.effects
                );

                recordEventAsSeen();
                saveCurrentState();

                // Disables every choice button to prevent choosing more than once.
                document
                    .querySelectorAll(".choiceButton")
                    .forEach((choiceButton) => {
                        choiceButton.disabled = true;
                    });

                button.classList.add(
                    "selectedChoice"
                );

                continueBtn.textContent =
                    "Continue to Next Quarter";

                continueBtn.style.display =
                    "block";
            };

            choiceWrapper.appendChild(button);
            choiceWrapper.appendChild(
                effectsDisplay
            );

            choices.appendChild(choiceWrapper);
        });

        // Advances the quarter when Continue is clicked after making a choice.
        continueBtn.onclick =
            finishEventAndAdvanceQuarter;
    }
}
