import { NextQuarter } from "../Quarter.js";
import { saveGame } from "../DataStorage.js";
import { getRandomEvent, applyEventEffects } from "../Events.js";

const gameState = JSON.parse(localStorage.getItem("gameState"));
//document.getElementById("playerAvatar").src = player.avatar;



const player = JSON.parse(localStorage.getItem("player"));
const statsDialog = document.getElementById("statsDialog");

const playerAvatar = document.getElementById("playerAvatar");

if (player.avatar) {
    playerAvatar.src = player.avatar;
}

document.getElementById("nameDisplay").textContent =
    `Name: ${player.name}`;

document.getElementById("quarterDisplay").textContent =
    `Year: ${gameState.year} - ${gameState.quarter}`;

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
    document.getElementById("statRelationship").textContent =
        `Relationship Status: ${player.relationshipStatus}`;

    statsDialog.style.display = "flex";
});

document.getElementById("closeStatsBtn").addEventListener("click", () => {
    statsDialog.style.display = "none";
});


function updateStats() {
    document.getElementById("nameDisplay").textContent =
        `Name: ${player.name}`;

    document.getElementById("quarterDisplay").textContent =
        `Year: ${gameState.year} - ${gameState.quarter}`;
}




//Main game loop functions

function startQuarter() {
    const continueButton = document.getElementById("continueBtn");
    continueButton.disabled = true;



    updateStats();

    gameState.currentEvent = null;
    gameState.currentMiniGame = null;
    gameState.miniGameDone = false;
    gameState.eventDone = false;

    timeAllocation();
}

const quarterPlan = {
    study: 0,
    coding: 0,
    social: 0,
    work: 0,
    rest: 0
};
let pointsLeft = 5;
let miniGameQueue = [];



function timeAllocation() {
    //start with 5 points to chose what to do with your time
    document.getElementById("allocationModal").style.display = "flex";

    pointsLeft = 5;

    quarterPlan.study = 0;
    quarterPlan.coding = 0;
    quarterPlan.social = 0;
    quarterPlan.work = 0;
    quarterPlan.rest = 0;

    updateAllocationDisplay();
}

function submitAllocation() {
    // quarterPlan.study = Number(document.getElementById("studyInput").value);
    // quarterPlan.coding = Number(document.getElementById("codingInput").value);
    // quarterPlan.social = Number(document.getElementById("socialInput").value);
    // quarterPlan.work = Number(document.getElementById("workInput").value);
    // quarterPlan.rest = Number(document.getElementById("restInput").value);

    // const total =
    //     quarterPlan.study +
    //     quarterPlan.coding +
    //     quarterPlan.social +
    //     quarterPlan.work +
    //     quarterPlan.rest;

    // if (total !== 10) {
    //     document.getElementById("allocationMessage").textContent =
    //         "You must use exactly 10 time blocks.";
    //     return;
    // }

    if (pointsLeft !== 0) {
        document.getElementById("allocationMessage").textContent =
            "You must allocate all 5 points first.";
        return;
    }

    document.getElementById("allocationModal").style.display = "none";


 

    constructMiniGameQueue();
    startNextMiniGame();
}

function updateAllocationDisplay() {
    document.getElementById("pointsLeftDisplay").textContent =
        `Points to allocate: ${pointsLeft}`;

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

        if (pointsLeft > 0) {
            quarterPlan[category]++;
            pointsLeft--;
            updateAllocationDisplay();
        }
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

    for (let i = 0; i < quarterPlan.study; i++) {
        miniGameQueue.push("study");
    }

    for (let i = 0; i < quarterPlan.coding; i++) {
        miniGameQueue.push("coding");
    }

    for (let i = 0; i < quarterPlan.social; i++) {
        miniGameQueue.push("social");
    }

    for (let i = 0; i < quarterPlan.work; i++) {
        miniGameQueue.push("work");
    }

    for (let i = 0; i < quarterPlan.rest; i++) {
        miniGameQueue.push("rest");
    }
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
        player: player,
        gameState: gameState
    });


    if (gameState.endgame === true) {
        window.location.href = "../endgame/EndGame.html";
        return;
    }

    document.getElementById("continueBtn").disabled = false;


}

document
    .getElementById("continueBtn")
    .addEventListener("click", startQuarter);