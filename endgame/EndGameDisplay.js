import {endCareers} from "./EndGame.js";

// Loads the completed player data saved by the game.
const player = JSON.parse(localStorage.getItem("player"));

// Selects and displays the player's career result and final statistics.
if (player) {
    const career = endCareers(player);

    document.getElementById("careerTitle").textContent = career.title;

    document.getElementById("careerDescription").textContent = career.description;

    document.getElementById("finalGpa").textContent = `Final GPA: ${player.gpa}`;

    document.getElementById("finalIntellect").textContent = `Intellect: ${player.intellect}`;

    document.getElementById("finalCoding").textContent = `Coding: ${player.coding}`;
}
