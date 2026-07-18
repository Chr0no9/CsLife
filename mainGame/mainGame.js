import {saveGame} from "../DataStorage.js";
import {applyEventEffects,
    getRandomEvent} from "../Events.js";
import {NextQuarter} from "../Quarter.js";

const gameState = JSON.parse(localStorage.getItem("gameState"));

const player = JSON.parse(localStorage.getItem("player"));
const statsDialog = document.getElementById("statsDialog");

const playerAvatar = document.getElementById("playerAvatar");

if (player.avatar) {
    playerAvatar.src = player.avatar;
}

document.getElementById("nameDisplay").textContent = `Name: ${player.name}`;

document.getElementById("quarterDisplay").textContent = `Year: ${gameState.year} - ${gameState.quarter}`;

document.getElementById("viewStatsBtn").addEventListener("click", () => {
    document.getElementById("statName").textContent = `Name: ${player.name}`;
    document.getElementById("statTrait").textContent = `Trait: ${player.trait}`;
    document.getElementById("statHealth").textContent = `Health: ${player.health}`;
    document.getElementById("statHappiness").textContent = `Happiness: ${player.happiness}`;
    document.getElementById("statMoney").textContent = `Money: ${player.money}`;
    document.getElementById("statIntellect").textContent = `Intellect: ${player.intellect}`;
    document.getElementById("statCoding").textContent = `Coding: ${player.coding}`;
    document.getElementById("statSocial").textContent = `Social: ${player.social}`;
    document.getElementById("statGpa").textContent = `GPA: ${player.gpa}`;
    document.getElementById("statRelationship").textContent = `Relationship Status: ${player.relationshipStatus}`;

    statsDialog.style.display = "flex";
});

document.getElementById("closeStatsBtn").addEventListener("click", () => {
    statsDialog.style.display = "none";
});

function updateStats() {
    document.getElementById("nameDisplay").textContent = `Name: ${player.name}`;

    document.getElementById("quarterDisplay").textContent = `Year: ${gameState.year} - ${gameState.quarter}`;
}

// Main game loop functions

function startQuarter() {
    const continueButton = document.getElementById("continueBtn");
    continueButton.disabled = true;

    updateStats();

    gameState.currentEvent = null;
    gameState.currentMiniGame = null;
    gameState.miniGameDone = false;
    gameState.eventDone = false;
}

const quarterPlan = {
    study : 0,
    coding : 0,
    social : 0,
    work : 0,
    rest : 0
};
let pointsLeft = 3;
let miniGameQueue = [];

function timeAllocation() {
    // start with 5 points to chose what to do with your time
    document.getElementById("allocationModal").style.display = "flex";

    pointsLeft = 3;

    quarterPlan.study = 0;
    quarterPlan.coding = 0;
    quarterPlan.social = 0;
    quarterPlan.work = 0;
    quarterPlan.rest = 0;

    updateAllocationDisplay();
}

document
    .getElementById("allocatePointsBtn")
    .addEventListener("click", timeAllocation);

const allocationModal = document.getElementById("allocationModal");

allocationModal.addEventListener("click", (event) => {
    if (event.target === allocationModal) {
        allocationModal.style.display = "none";
    }
});

const MONEY_PER_WORK_POINT = 250;
const HEALTHLOSS_PER_WORK_POINT = 4;
const HAPPINESSLOSS_PER_WORK_POINT = 3;
const HEALTH_PER_REST_POINT = 5;
const HAPPINESS_PER_REST_POINT = 4;

function applyTimeAllocationEffects() {
    const moneyEarned = quarterPlan.work * MONEY_PER_WORK_POINT;

    const wHealthLoss = quarterPlan.work * HEALTHLOSS_PER_WORK_POINT;

    const wHappinessLoss = quarterPlan.work * HAPPINESSLOSS_PER_WORK_POINT;

    const rHealthGain = quarterPlan.rest * HEALTH_PER_REST_POINT;

    const rHappinessGain = quarterPlan.rest * HAPPINESS_PER_REST_POINT;

    player.money += moneyEarned;
    player.health += rHealthGain - wHealthLoss;
    player.happiness += rHappinessGain - wHappinessLoss;

    if (player.health > 100) {
        player.health = 100;
    }

    if (player.health < 0) {
        player.health = 0;
    }

    if (player.happiness > 100) {
        player.happiness = 100;
    }

    if (player.happiness < 0) {
        player.happiness = 0;
    }
}
function submitAllocation() {
    if (pointsLeft !== 0) {
        document.getElementById("allocationMessage").textContent = "You must allocate all 3 points first.";
        return;
    }

    document.getElementById("allocationModal").style.display = "none";
    document.getElementById("continueBtn").style.display = "block";

    applyTimeAllocationEffects();
    localStorage.setItem("player", JSON.stringify(player));
    constructMiniGameQueue();

    localStorage.setItem(
        "quarterPlan",
        JSON.stringify(quarterPlan));

    localStorage.setItem(
        "miniGameQueue",
        JSON.stringify(miniGameQueue));
}

function updateAllocationDisplay() {
    document.getElementById("pointsLeftDisplay").textContent = `Points to allocate: ${pointsLeft}`;

    document.getElementById("codingPoints").textContent = quarterPlan.coding;
    document.getElementById("studyPoints").textContent = quarterPlan.study;
    document.getElementById("socialPoints").textContent = quarterPlan.social;
    document.getElementById("workPoints").textContent = quarterPlan.work;
    document.getElementById("restPoints").textContent = quarterPlan.rest;

    document.getElementById("allocationMessage").textContent = "";
}

document.querySelectorAll(".plusBtn").forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        if (pointsLeft === 0) {
            return;
        }

        if (
            (category === "coding" || category === "study" || category === "social") && quarterPlan[category] >= 1) {
            document.getElementById("allocationMessage").textContent = "You can only allocate 1 point to Coding, Study, and Social.";
            return;
        }

        quarterPlan[category]++;
        pointsLeft--;

        updateAllocationDisplay();
    });
});

document.querySelectorAll(".minusBtn").forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        if (quarterPlan[category] > 0) {
            quarterPlan[category]--;
            pointsLeft++;
            updateAllocationDisplay();
        }
    });
});

document
    .getElementById("confirmAllocationBtn")
    .addEventListener("click", submitAllocation);

function constructMiniGameQueue() {
    miniGameQueue = [];

    for (let i = 0; i < quarterPlan.coding; i++) {
        miniGameQueue.push("coding");
    }

    for (let i = 0; i < quarterPlan.study; i++) {
        miniGameQueue.push("study");
    }

    for (let i = 0; i < quarterPlan.social; i++) {
        miniGameQueue.push("social");
    }

    console.log("Created mini-game queue:", miniGameQueue);
}

function startNextMiniGame() {
    if (miniGameQueue.length === 0) {
        gameState.miniGameDone = true;
        finishMiniGames();
        return;
    }

    const nextType = miniGameQueue.shift();

    console.log("Starting mini-game:", nextType);

    // Temporary: skip the actual mini-game
    startNextMiniGame();
}
function finishMiniGames() {
    if (!gameState.miniGameDone) {
        return;
    }

    startRandomEvent();
}

function startRandomEvent() {
    const randomEvent = getRandomEvent();

    gameState.currentEvent = randomEvent.id;

    document.getElementById("eventTitle").textContent = randomEvent.title;
    document.getElementById("eventDescription").textContent = randomEvent.description;

    const eventChoices = document.getElementById("eventChoices");
    eventChoices.innerHTML = "";

    randomEvent.choices.forEach((choice) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice.text;

        choiceButton.addEventListener("click", () => {
            applyEventEffects(player, choice.effects);

            document.getElementById("eventModal").style.display = "none";

            gameState.eventDone = true;
            gameState.event_done = true;

            finishEvents();
        });

        eventChoices.appendChild(choiceButton);
    });

    document.getElementById("eventModal").style.display = "flex";
}

function finishEvents() {
    if (!gameState.eventDone && !gameState.event_done) {
        return;
    }

    finishQuarter();
}

function finishQuarter() {

    NextQuarter(gameState);
    updateStats();
    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("gameState", JSON.stringify(gameState));

    saveGame({
        player : player,
        gameState : gameState
    });

    if (gameState.endgame === true) {
        window.location.href = "../endgame/EndGame.html";
        return;
    }

    document.getElementById("continueBtn").disabled = false;
}

// document
//     .getElementById("continueBtn")
//     .addEventListener("click", startQuarter);

document
    .getElementById("continueBtn")
    .addEventListener("click", () => {
        if (miniGameQueue.length === 0) {
            gameState.eventDone = true;
            gameState.event_done = true;
            NextQuarter(gameState);

            if (!gameState.endgame) {
                gameState.currentScreen = "QuarterStart";
            }

            localStorage.setItem("player", JSON.stringify(player));
            localStorage.setItem("gameState", JSON.stringify(gameState));
            localStorage.removeItem("miniGameQueue");
            localStorage.removeItem("quarterPlan");

            saveGame({
                player: player,
                gameState: gameState
            });

            window.location.href = gameState.endgame
                ? "../endgame/EndGame.html"
                : "../mainGame/mainGame.html";
            return;
        }

        localStorage.setItem(
            "miniGameQueue",
            JSON.stringify(miniGameQueue));

        localStorage.setItem(
            "quarterPlan",
            JSON.stringify(quarterPlan));

        window.location.href = "../Mini-Games/Mini-Games.html";
    });
