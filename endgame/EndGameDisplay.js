import { endCareers } from "./EndGame.js";

const player = JSON.parse(localStorage.getItem("player"));

if (player) {
    const career = endCareers(player);

    document.getElementById("careerTitle").textContent =
        career.title;

    document.getElementById("careerDescription").textContent =
        career.description;

    document.getElementById("finalGpa").textContent =
        `Final GPA: ${player.gpa}`;

    document.getElementById("finalIntellect").textContent =
        `Intellect: ${player.intellect}`;

    document.getElementById("finalCoding").textContent =
        `Coding: ${player.coding}`;
}
