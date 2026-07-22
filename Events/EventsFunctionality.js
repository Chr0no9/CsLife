import {
    getEventForQuarter,
    applyEventEffects
} from "../Events.js";import { NextQuarter } from "../Quarter.js";
import { saveGame } from "../DataStorage.js";

const player = JSON.parse(localStorage.getItem("player"));
const gameState = JSON.parse(localStorage.getItem("gameState"));
const event = getEventForQuarter(gameState);const choices = document.getElementById("choiceContainer");
const continueBtn = document.getElementById("continueBtn");
const continueEffects =
    document.getElementById("continueEffects");

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

function displayEffects(container, effects) {
    container.innerHTML = "";

    Object.entries(effects).forEach(([stat, value]) => {
        const effectItem = document.createElement("span");

        effectItem.className = "effectItem";
        effectItem.textContent = formatEffect(stat, value);

        container.appendChild(effectItem);
    });
}

function recordEventAsSeen() {
    if (!Array.isArray(gameState.seenEvents)) {
        gameState.seenEvents = [];
    }

    if (!gameState.seenEvents.includes(event.id)) {
        gameState.seenEvents.push(event.id);
    }
}

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

function finishEventAndAdvanceQuarter() {
    gameState.eventDone = true;

    NextQuarter(gameState);

    saveCurrentState();

    window.location.href = gameState.endgame
        ? "../endgame/EndGame.html"
        : "../mainGame/mainGame.html";
}

if (event === null) {
    finishEventAndAdvanceQuarter();
} else {
    gameState.currentEvent = event.id;

    document.getElementById("eventTitle").textContent =
        event.title;

    document.getElementById("eventDescription").textContent =
        event.description;

    /*
     * A one-option event is not a real decision.
     * Its single option becomes the page's Continue button.
     */
    if (event.choices.length === 1) {
        const onlyChoice = event.choices[0];

        continueBtn.textContent = onlyChoice.text;
        continueBtn.style.display = "block";

        displayEffects(
            continueEffects,
            onlyChoice.effects
        );

        continueBtn.onclick = () => {
            applyEventEffects(
                player,
                onlyChoice.effects
            );

            recordEventAsSeen();
            finishEventAndAdvanceQuarter();
        };
    } else {
        /*
         * Multi-choice events display every option and
         * its effects before the player chooses.
         */
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

            button.onclick = () => {
                applyEventEffects(
                    player,
                    choice.effects
                );

                recordEventAsSeen();
                saveCurrentState();

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

        continueBtn.onclick =
            finishEventAndAdvanceQuarter;
    }
}