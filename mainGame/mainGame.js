import { nextQuarter } from "../Quarter.js";
import { saveGame } from "../DataStorage.js";
const gameState = JSON.parse(localStorage.getItem("gameState"));



const player = JSON.parse(localStorage.getItem("player"));
const statsDialog = document.getElementById("statsDialog");

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

// document
//     .getElementById("submitAllocationBtn")
//     .addEventListener("click", submitAllocation);

// function updateStats() {
//     document.getElementById("nameDisplay").textContent =
//         `Name: ${player.name}`;

//     document.getElementById("quarterDisplay").textContent =
//         `Year: ${gameState.year} - ${gameState.quarter}`;
// }




//Main game loop functions

function startQuarter() {



    updateStats();

    gameState.currentEvent = null;
    gameState.currentMiniGame = null;
    gameState.event_done = false;

    timeAllocation();
}

const quarterPlan = {
    study: 0,
    coding: 0,
    social: 0,
    work: 0,
    rest: 0
};
let miniGameQueue = [];



function timeAllocation() {
    //start with 10 points to chose what to do with your time
    document.getElementById("allocationMessage").textContent = "";    
}
function submitAllocation() {
    quarterPlan.study = Number(document.getElementById("studyInput").value);
    quarterPlan.coding = Number(document.getElementById("codingInput").value);
    quarterPlan.social = Number(document.getElementById("socialInput").value);
    quarterPlan.work = Number(document.getElementById("workInput").value);
    quarterPlan.rest = Number(document.getElementById("restInput").value);

    const total =
        quarterPlan.study +
        quarterPlan.coding +
        quarterPlan.social +
        quarterPlan.work +
        quarterPlan.rest;

    if (total !== 10) {
        document.getElementById("allocationMessage").textContent =
            "You must use exactly 10 time blocks.";
        return;
    }

    constructMiniGameQueue();
    startNextMiniGame();
}
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
        finishMiniGame();
        return;
    }

    const nextType = miniGameQueue.shift();

    console.log("Starting mini-game:", nextType);

    // do mini game
}
function finishMiniGame() {

}

function finishEvents() {

}

function finishQuarter() {

    nextQuarter(gameState);

    saveGame(player, gameState);


    if (gameState.endgame === true) {
        window.location.href = "../endgame/EndGame.html";
        return;
    }

    startQuarter();

}

startQuarter();