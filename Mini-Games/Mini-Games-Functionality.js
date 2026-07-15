import { studyMiniGame } from "./Mini-Games.js";

console.log("Mini-Games-Functionality.js loaded");

const player =
    JSON.parse(localStorage.getItem("player")) || {};

const gameState =
    JSON.parse(localStorage.getItem("gameState")) || {};

const savedQueue =
    JSON.parse(localStorage.getItem("miniGameQueue")) || [];

const miniGameQueue = savedQueue.filter((gameType) => {
    return (
        gameType === "coding" ||
        gameType === "study" ||
        gameType === "social"
    );
});

console.log("Saved queue:", savedQueue);
console.log("Filtered mini-game queue:", miniGameQueue);

const totalGames = miniGameQueue.length;

let currentGameIndex = 0;
let currentStudyGame = null;

const categoryDisplay =
    document.getElementById("miniGameCategory");

const progressDisplay =
    document.getElementById("gameProgress");

const studyGame =
    document.getElementById("studyGame");

const codingGame =
    document.getElementById("codingGame");

const socialGame =
    document.getElementById("socialGame");

const finishedScreen =
    document.getElementById("finishedScreen");

const queueError =
    document.getElementById("queueError");

function hideAllScreens() {
    studyGame.style.display = "none";
    codingGame.style.display = "none";
    socialGame.style.display = "none";
    finishedScreen.style.display = "none";
    queueError.style.display = "none";
}

function updateProgress() {
    progressDisplay.textContent =
        `Game ${currentGameIndex + 1} of ${totalGames}`;
}

function startCurrentMiniGame() {
    hideAllScreens();

    if (totalGames === 0) {
        showQueueError();
        return;
    }

    if (currentGameIndex >= totalGames) {
        finishAllMiniGames();
        return;
    }

    updateProgress();

    const currentGameType =
        miniGameQueue[currentGameIndex];

    console.log(
        "Starting game:",
        currentGameType,
        currentGameIndex + 1,
        "of",
        totalGames
    );

    if (currentGameType === "coding") {
        startCodingGame();
    } else if (currentGameType === "study") {
        startStudyGame();
    } else if (currentGameType === "social") {
        startSocialGame();
    }
}

function startCodingGame() {
    categoryDisplay.textContent =
        "Coding Mini-Game";

    codingGame.style.display = "block";
}

function startSocialGame() {
    categoryDisplay.textContent =
        "Social Mini-Game";

    socialGame.style.display = "block";
}

function startStudyGame() {
    categoryDisplay.textContent =
        "Study Mini-Game";

    if (studyMiniGame.length === 0) {
        document.getElementById(
            "studyTitle"
        ).textContent = "Study Mini-Game";

        document.getElementById(
            "studyQuestion"
        ).textContent =
            "No study questions have been added yet.";

        document.getElementById(
            "studyChoices"
        ).innerHTML = "";

        document.getElementById(
            "nextStudyBtn"
        ).style.display = "inline-block";

        studyGame.style.display = "block";
        return;
    }

    currentStudyGame =
        studyMiniGame[
            Math.floor(
                Math.random() * studyMiniGame.length
            )
        ];

    document.getElementById(
        "studyTitle"
    ).textContent = currentStudyGame.title;

    document.getElementById(
        "studyQuestion"
    ).textContent = currentStudyGame.prompt;

    document.getElementById(
        "studyMessage"
    ).textContent = "";

    document.getElementById(
        "nextStudyBtn"
    ).style.display = "none";

    const choicesContainer =
        document.getElementById("studyChoices");

    choicesContainer.innerHTML = "";

    currentStudyGame.choices.forEach((choice) => {
        const answerButton =
            document.createElement("button");

        answerButton.textContent = choice;

        answerButton.classList.add(
            "answer-button"
        );

        answerButton.addEventListener(
            "click",
            () => {
                checkStudyAnswer(
                    answerButton,
                    choice
                );
            }
        );

        choicesContainer.appendChild(
            answerButton
        );
    });

    studyGame.style.display = "block";
}

function checkStudyAnswer(
    selectedButton,
    selectedAnswer
) {
    const answerButtons =
        document.querySelectorAll(
            ".answer-button"
        );

    answerButtons.forEach((button) => {
        button.disabled = true;

        if (
            button.textContent ===
            currentStudyGame.correctAnswer
        ) {
            button.classList.add(
                "correct-answer"
            );
        }
    });

    const studyMessage =
        document.getElementById(
            "studyMessage"
        );

    if (
        selectedAnswer ===
        currentStudyGame.correctAnswer
    ) {
        player.intellect =
            (player.intellect || 0) + 1;

        studyMessage.textContent =
            "Correct! +1 intellect";
    } else {
        selectedButton.classList.add(
            "wrong-answer"
        );

        studyMessage.textContent =
            "Incorrect!";
    }

    localStorage.setItem(
        "player",
        JSON.stringify(player)
    );

    document.getElementById(
        "nextStudyBtn"
    ).style.display = "inline-block";
}

function completeCurrentMiniGame() {
    currentGameIndex++;

    startCurrentMiniGame();
}

function finishAllMiniGames() {
    hideAllScreens();

    categoryDisplay.textContent =
        "Quarter Complete";

    progressDisplay.textContent =
        `${totalGames} of ${totalGames} completed`;

    finishedScreen.style.display =
        "block";
}

function showQueueError() {
    hideAllScreens();

    categoryDisplay.textContent =
        "No Mini-Games";

    progressDisplay.textContent =
        "0 games";

    queueError.style.display = "block";
}

function progressToNextQuarter() {
    const quarterOrder = [
        "Fall",
        "Winter",
        "Spring"
    ];

    let quarterIndex =
        quarterOrder.indexOf(
            gameState.quarter
        );

    if (quarterIndex === -1) {
        gameState.quarter = "Fall";
        gameState.year = gameState.year || 1;
    } else if (
        quarterIndex <
        quarterOrder.length - 1
    ) {
        gameState.quarter =
            quarterOrder[quarterIndex + 1];
    } else {
        gameState.quarter = "Fall";
        gameState.year =
            (gameState.year || 1) + 1;
    }

    gameState.currentScreen =
        "QuarterStart";

    gameState.event_done = true;

    localStorage.setItem(
        "player",
        JSON.stringify(player)
    );

    localStorage.setItem(
        "gameState",
        JSON.stringify(gameState)
    );

    localStorage.removeItem(
        "miniGameQueue"
    );

    localStorage.removeItem(
        "quarterPlan"
    );

    window.location.href =
        "../mainGame/mainGame.html";
}

document
    .getElementById("nextStudyBtn")
    .addEventListener(
        "click",
        completeCurrentMiniGame
    );

document
    .getElementById("finishCodingBtn")
    .addEventListener(
        "click",
        completeCurrentMiniGame
    );

document
    .getElementById("finishSocialBtn")
    .addEventListener(
        "click",
        completeCurrentMiniGame
    );

document
    .getElementById("nextQuarterBtn")
    .addEventListener(
        "click",
        progressToNextQuarter
    );

document
    .getElementById("returnToMainBtn")
    .addEventListener("click", () => {
        window.location.href =
            "../mainGame/mainGame.html";
    });

startCurrentMiniGame();
