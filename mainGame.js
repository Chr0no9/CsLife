const player = JSON.parse(localStorage.getItem("player"));
const gameState = JSON.parse(localStorage.getItem("gameState"));

const statsDialog = document.getElementById("statsDialog");

document.getElementById("nameDisplay").textContent =
    `Name: ${player.name}`;

document.getElementById("quarterDisplay").textContent =
    `Year: ${gameState.year} - ${gameState.quarter}`;

document.getElementById("viewStatsBtn").addEventListener("click", () => {
    statsDialog.style.display = "flex";
});

document.getElementById("closeStatsBtn").addEventListener("click", () => {
    statsDialog.style.display = "none";
});