import {NextQuarter} from "../Quarter.js";
import { saveGame } from "../DataStorage.js";
import {
    codingMiniGames,
    socialMiniGames,
    studyMiniGames
} from "./Mini-Games.js";

console.log("Mini-Games-Functionality.js loaded");

const player = JSON.parse(localStorage.getItem("player")) || { };

const gameState = JSON.parse(localStorage.getItem("gameState")) || { };

const savedQueue = JSON.parse(localStorage.getItem("miniGameQueue")) || [];

const miniGameQueue = savedQueue.filter((gameType) => {
    return (
        gameType === "coding" || gameType === "study" || gameType === "social");
});

console.log("Saved queue:", savedQueue);
console.log("Filtered mini-game queue:", miniGameQueue);

const totalGames = miniGameQueue.length;

let currentGameIndex = 0;
let currentStudyGame = null;
let currentCodingGame = null;
let currentSocialGame = null;

const categoryDisplay = document.getElementById("miniGameCategory");

const progressDisplay = document.getElementById("gameProgress");

const studyGame = document.getElementById("studyGame");

const codingGame = document.getElementById("codingGame");

const socialGame = document.getElementById("socialGame");

const finishedScreen = document.getElementById("finishedScreen");

/*
 * ################################ Mini-Game Effects to the stats ##############################
 */

function applyEffects(effects) {
    if (!effects) {
        return;
    }

    if (effects.intellect !== undefined) {
        player.intellect += effects.intellect;
    }

    if (effects.gpa !== undefined) {
        player.gpa += effects.gpa;
    }

    if (effects.coding !== undefined) {
        player.coding += effects.coding;
    }

    if (effects.social !== undefined) {
        player.social += effects.social;
    }

    if (effects.happiness !== undefined) {
        player.happiness += effects.happiness;
    }

    if (effects.health !== undefined) {
        player.health += effects.health;
    }

    if (effects.money !== undefined) {
        player.money += effects.money;
    }

    localStorage.setItem("player", JSON.stringify(player));
}

/*
 * ################################ End of Mini-Game Effects to the Stats ##############################
 */

function hideAllScreens() {
    studyGame.style.display = "none";
    codingGame.style.display = "none";
    socialGame.style.display = "none";
    finishedScreen.style.display = "none";
}

function updateProgress() {
    progressDisplay.textContent = `Game ${currentGameIndex + 1} of ${totalGames}`;
}

function renderMultipleChoiceGame(game, questionId, choicesId, onSelect) {
    const question = document.getElementById(questionId);
    const choicesContainer = document.getElementById(choicesId);
    const choiceButtons = game.choices.map((choice, choiceIndex) => {
        const choiceButton = document.createElement("button");

        choiceButton.type = "button";
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice-button");
        choiceButton.addEventListener("click", () => {
            onSelect(choiceButton, choice, choiceIndex);
        });

        return choiceButton;
    });

    // Replace the prompt and choices together so content from the previous
    // question cannot remain in the container.
    question.textContent = game.prompt;
    choicesContainer.replaceChildren(...choiceButtons);
}

function startCurrentMiniGame() {
    hideAllScreens();

    if (totalGames === 0) {
        progressToNextQuarter();
        return;
    }

    if (currentGameIndex >= totalGames) {
        finishAllMiniGames();
        return;
    }

    updateProgress();

    const currentGameType = miniGameQueue[currentGameIndex];

    console.log(
        "Starting game:",
        currentGameType,
        currentGameIndex + 1,
        "of",
        totalGames);

    if (currentGameType === "coding") {
        startCodingGame();
    } else if (currentGameType === "study") {
        startStudyGame();
    } else if (currentGameType === "social") {
        startSocialGame();
    }
}

/*
 * I orginized the Start minigames and check answers so that it's easy to find and debug
 * ################################### Start Study Game ###############################3
 */

function startStudyGame() {
    categoryDisplay.textContent = "Study Mini-Game";
    if (studyMiniGames.length === 0) {
        document.getElementById("studyTitle").textContent = "Study Mini-Game";

        document.getElementById("studyQuestion").textContent = "No study questions yet";
        document.getElementById("studyChoices").innerHTML = "";

        document.getElementById("studyMessage").textContent = "";
        document.getElementById("nextStudyBtn").style.display = "inline-block";

        studyGame.style.display = "block";

        return;
    }

    // Randomizing the study mini-games
    const randomStudyIndex = Math.floor(Math.random() * studyMiniGames.length);
    currentStudyGame = studyMiniGames[randomStudyIndex];

    document.getElementById("studyTitle").textContent = currentStudyGame.title;
    document.getElementById("studyMessage").textContent = "";
    document.getElementById("nextStudyBtn").style.display = "none";

    renderMultipleChoiceGame(
        currentStudyGame,
        "studyQuestion",
        "studyChoices",
        checkStudyAnswer);

    studyGame.style.display = "block";
}

/*
############################### Check Study Game  ####################################
*/
function checkStudyAnswer(selectedButton, selectedAnswer) {
    const result = currentStudyGame.AnswerResult(selectedAnswer);
    const choiceButtons = document.querySelectorAll("#studyChoices .choice-button");

    choiceButtons.forEach((button) => {
        button.disabled = true;

        if (button.textContent === currentStudyGame.CorrectAnswer) {
            button.classList.add("correct-answer");
        }
    });

    const studyMessage = document.getElementById("studyMessage");

    if (result.correct) {
        studyMessage.textContent = "Correct!";
    }

    else {
        selectedButton.classList.add("wrong-answer");
        studyMessage.textContent = "Incorrect!";
    }

    applyEffects(result.effects);
    document.getElementById("nextStudyBtn").style.display = "inline-block"
}

/*
 * ################################### Start Coding Game ###############################3
 */
function startCodingGame() {
    categoryDisplay.textContent = "Coding Mini-Game";

    if (codingMiniGames.length === 0) {
        document.getElementById("codingTitle").textContent = "Coding Mini-Game";

        document.getElementById("codingQuestion").textContent = "No coding questions yet";
        document.getElementById("codingChoices").innerHTML = "";

        document.getElementById("codingMessage").textContent = ""
        document.getElementById("nextCodingBtn").style.display = "inline-block";

        codingGame.style.display = "block";

        return;
    }

    // Randomizing the coding mini-games
    const randomCodingIndex = Math.floor(Math.random() * codingMiniGames.length);
    currentCodingGame = codingMiniGames[randomCodingIndex];

    document.getElementById("codingTitle").textContent = currentCodingGame.title;
    document.getElementById("codingMessage").textContent = "";
    document.getElementById("nextCodingBtn").style.display = "none";

    renderMultipleChoiceGame(
        currentCodingGame,
        "codingQuestion",
        "codingChoices",
        checkCodingAnswer);

    codingGame.style.display = "block";
}

/*
############################### Check Coding Game  ####################################
*/
function checkCodingAnswer(selectedButton, selectedAnswer) {
    const result = currentCodingGame.AnswerResult(selectedAnswer);
    const choiceButtons = document.querySelectorAll("#codingChoices .choice-button");

    choiceButtons.forEach((button) => {
        button.disabled = true;

        if (button.textContent === currentCodingGame.CorrectAnswer) {
            button.classList.add("correct-answer");
        }
    });

    const codingMessage = document.getElementById("codingMessage");

    if (result.correct) {
        codingMessage.textContent = "Correct!";
    }

    else {
        selectedButton.classList.add("wrong-answer");
        codingMessage.textContent = "Incorrect!";
    }

    applyEffects(result.effects);
    document.getElementById("nextCodingBtn").style.display = "inline-block"
}

/*
 * ################################### Start Social Game ###############################3
 */

function startSocialGame() {
    categoryDisplay.textContent = "Social Mini-Game";

    if (socialMiniGames.length === 0) {
        document.getElementById("socialTitle").textContent = "Social Mini-Game";

        document.getElementById("socialQuestion").textContent = "No social questions yet";
        document.getElementById("socialChoices").innerHTML = "";

        document.getElementById("socialMessage").textContent = ""
        document.getElementById("nextSocialBtn").style.display = "inline-block";

        socialGame.style.display = "block";

        return;
    }

    // Randomizing the social mini-games
    const randomSocialIndex = Math.floor(Math.random() * socialMiniGames.length);
    currentSocialGame = socialMiniGames[randomSocialIndex];

    document.getElementById("socialTitle").textContent = currentSocialGame.title;
    document.getElementById("socialQuestion").textContent = currentSocialGame.prompt;
    document.getElementById("socialMessage").textContent = "";
    document.getElementById("nextSocialBtn").style.display = "none";

    const choicesContainer = document.getElementById("socialChoices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < currentSocialGame.choices.length; i++) {
        const choice = currentSocialGame.choices[i];
        const choiceButton = document.createElement("button");
        choiceButton.type = "button";
        choiceButton.textContent = choice;

        choiceButton.classList.add("choice-button");

        function SocialChoices() {
            checkSocialChoice(choiceButton, i);
        }

        choiceButton.addEventListener("click", SocialChoices);

        choicesContainer.appendChild(choiceButton);
    }

    socialGame.style.display = "block";
}

/*
############################### Check Social Game  ####################################
*/
function checkSocialChoice(selectedButton, choiceIndex) {
    const effects = currentSocialGame.ChoiceEffects(choiceIndex);
    const choiceButtons = document.querySelectorAll("#socialChoices .choice-button");

    choiceButtons.forEach((button) => {
        button.disabled = true;
    });

    selectedButton.classList.add("selected-answer");

    const socialMessage = document.getElementById("socialMessage");
    socialMessage.textContent = "Choice selected!";
    applyEffects(effects);

    document.getElementById("nextSocialBtn").style.display = "inline-block";
}

/*
############################### End of Check Social Game  ####################################
*/

function completeCurrentMiniGame() {
    currentGameIndex++;

    startCurrentMiniGame();
}

function finishAllMiniGames() {
    hideAllScreens();

    categoryDisplay.textContent = "Quarter Complete";

    progressDisplay.textContent = `${totalGames} of ${totalGames} completed`;

    finishedScreen.style.display = "block";
}

function progressToNextQuarter() {
    gameState.miniGameDone = true;
    gameState.eventDone = false;
    gameState.currentScreen = "Event";

    localStorage.setItem(
        "player",
        JSON.stringify(player));

    localStorage.setItem(
        "gameState",
        JSON.stringify(gameState));

    saveGame({
        player: player,
        gameState: gameState
    });

    localStorage.removeItem(
        "miniGameQueue");

    localStorage.removeItem(
        "quarterPlan");

    window.location.href = gameState.endgame
        ? "../endgame/EndGame.html"
        : "../mainGame/mainGame.html";
}

document
    .getElementById("nextStudyBtn")
    .addEventListener(
        "click",
        completeCurrentMiniGame);

document
    .getElementById("nextCodingBtn")
    .addEventListener(
        "click",
        completeCurrentMiniGame);

document
    .getElementById("nextSocialBtn")
    .addEventListener(
        "click",
        completeCurrentMiniGame);

document
    .getElementById("nextQuarterBtn")
    .addEventListener(
        "click",
        progressToNextQuarter);

startCurrentMiniGame();
