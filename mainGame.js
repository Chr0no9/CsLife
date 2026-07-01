const player = JSON.parse(localStorage.getItem("player"));
const gameState = JSON.parse(localStorage.getItem("gameState"));

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