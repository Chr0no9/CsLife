
const gameState = JSON.parse(localStorage.getItem("gameState"));

const player = JSON.parse(localStorage.getItem("player"));
const statsDialog = document.getElementById("statsDialog");

const playerAvatar = document.getElementById("playerAvatar");

// Displays the avatar selected during character creation when one is available.
if (player.avatar) {
    playerAvatar.src = player.avatar;
}

document.getElementById("nameDisplay").textContent = `Name: ${player.name}`;

document.getElementById("quarterDisplay").textContent = `Year: ${gameState.year} - ${gameState.quarter}`;

// Fills the statistics dialog with current player data and opens it.
document.getElementById("viewStatsBtn").addEventListener("click", () => {
    document.getElementById("statName").textContent = `Name: ${player.name}`;
    document.getElementById("statTrait").textContent = `Trait: ${player.trait}`;
    document.getElementById("statHealth").textContent = `Health: ${player.health}`;
    document.getElementById("statHappiness").textContent = `Happiness: ${player.happiness}`;
    document.getElementById("statMoney").textContent = `Money: ${player.money}`;
    document.getElementById("statIntellect").textContent = `Intellect: ${player.intellect}`;
    document.getElementById("statCoding").textContent = `Coding: ${player.coding}`;
    document.getElementById("statSocial").textContent = `Social: ${player.social}`;
    document.getElementById("statGpa").textContent = `GPA: ${player.gpa.toFixed(2)}`;
    document.getElementById("statRelationship").textContent = `Relationship Status: ${player.relationshipStatus}`;

    statsDialog.style.display = "flex";
});

// Closes the player statistics dialog.
document.getElementById("closeStatsBtn").addEventListener("click", () => {
    statsDialog.style.display = "none";
});

const quarterPlan = {
    study: 0,
    coding: 0,
    social: 0,
    work: 0,
    rest: 0
};
let pointsLeft = 3;
let miniGameQueue = [];

// Opens the allocation modal and resets the quarter plan to three available points.
function timeAllocation() {
    // Start with 3 points to choose how to spend the quarter.
    document.getElementById("allocationModal").style.display = "flex";

    pointsLeft = 3;

    quarterPlan.study = 0;
    quarterPlan.coding = 0;
    quarterPlan.social = 0;
    quarterPlan.work = 0;
    quarterPlan.rest = 0;

    updateAllocationDisplay();
}

// Opens the allocation modal when the Allocate Points button is clicked.
document
    .getElementById("allocatePointsBtn")
    .addEventListener("click", timeAllocation);

const allocationModal = document.getElementById("allocationModal");

// Closes the allocation modal when the player clicks its outside background.
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

// Applies the Work and Rest point effects while keeping health and happiness in range.
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

// Validates, applies, and saves the completed quarter allocation.
function submitAllocation() {
    if (pointsLeft !== 0) {
        document.getElementById("allocationMessage").textContent =
            "You must allocate all 3 points first.";
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

// Refreshes the displayed allocation totals and clears the previous message.
function updateAllocationDisplay() {
    document.getElementById("pointsLeftDisplay").textContent = `Points to allocate: ${pointsLeft}`;

    document.getElementById("codingPoints").textContent = quarterPlan.coding;
    document.getElementById("studyPoints").textContent = quarterPlan.study;
    document.getElementById("socialPoints").textContent = quarterPlan.social;
    document.getElementById("workPoints").textContent = quarterPlan.work;
    document.getElementById("restPoints").textContent = quarterPlan.rest;

    document.getElementById("allocationMessage").textContent = "";
}

// Adds a point to the category associated with the clicked plus button.
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

// Removes a point from the category associated with the clicked minus button.
document.querySelectorAll(".minusBtn").forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        if (quarterPlan[category] === 1) {
            quarterPlan[category] = 0;
            pointsLeft++;

            updateAllocationDisplay();
        }
    });
});

// Submits the allocation when the Start Quarter button is clicked.
document
    .getElementById("confirmAllocationBtn")
    .addEventListener("click", submitAllocation);

// Builds the ordered mini-game queue from Coding, Study, and Social points.
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
}

document
    .getElementById("continueBtn")
    .addEventListener("click", () => {
        if (miniGameQueue.length === 0) {
            window.location.href = "../Events/Events.html";
            return;
        }

        window.location.href = "../Mini-Games/Mini-Games.html";
    });
