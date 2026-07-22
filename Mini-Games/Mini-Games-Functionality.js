import {codingMiniGames, socialMiniGames, studyMiniGames} from "./Mini-Games.js";

const player = JSON.parse(localStorage.getItem("player")) || { };

const savedQueue = JSON.parse(localStorage.getItem("miniGameQueue")) || [];

const miniGameQueue = savedQueue.filter((gameType) => {
    return (
        gameType === "coding" || gameType === "study" || gameType === "social");
});


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

const nextMiniGameBtn = document.getElementById("nextMiniGameBtn");

/*
 * ################################ Mini-Game Effects to the stats ##############################
 */

// Applies a mini-game's stat effects and saves the updated player.
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

// Hides every category section so only the current mini-game is visible.
function hideAllScreens() {
    studyGame.style.display = "none";
    codingGame.style.display = "none";
    socialGame.style.display = "none";
}

// Displays the current mini-game number and the total number queued.
function updateProgress() {
    progressDisplay.textContent = `Game ${currentGameIndex + 1} of ${totalGames}`;
}

// Renders a question and creates a clickable button for each answer choice.
function renderMultipleChoiceGame(game, questionId, choicesId, onSelect) {
    const question = document.getElementById(questionId);
    const choicesContainer = document.getElementById(choicesId);
    const choiceButtons = game.choices.map((choice, choiceIndex) => {
        const choiceButton = document.createElement("button");

        choiceButton.type = "button";
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice-button");

        // Passes the clicked button, answer text, and choice index to the category handler.
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

// Starts the queued category or opens Events after all mini-games are complete.
function startCurrentMiniGame() {
    hideAllScreens();
    nextMiniGameBtn.style.display = "none";

    if (totalGames === 0) {
        window.location.href = "../Events/Events.html";
        return;
    }

    if (currentGameIndex >= totalGames) {
        finishAllMiniGames();
        return;
    }

    updateProgress();

    const currentGameType = miniGameQueue[currentGameIndex];

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

// Selects and displays a random Study mini-game.
function startStudyGame() {
    categoryDisplay.textContent = "Study Mini-Game";

    // Randomizing the study mini-games
    const randomStudyIndex = Math.floor(Math.random() * studyMiniGames.length);
    currentStudyGame = studyMiniGames[randomStudyIndex];

    document.getElementById("studyTitle").textContent = currentStudyGame.title;
    document.getElementById("studyMessage").textContent = "";

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
// Checks a Study answer, shows feedback, and applies its stat effects.
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
    nextMiniGameBtn.style.display = "inline-block";
}

/*
 * ################################### Start Coding Game ###############################3
 */
// Selects and displays a random Coding mini-game.
function startCodingGame() {
    categoryDisplay.textContent = "Coding Mini-Game";

    // Randomizing the coding mini-games
    const randomCodingIndex = Math.floor(Math.random() * codingMiniGames.length);
    currentCodingGame = codingMiniGames[randomCodingIndex];

    document.getElementById("codingTitle").textContent = currentCodingGame.title;
    document.getElementById("codingMessage").textContent = "";

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
// Checks a Coding answer, shows feedback, and applies its stat effects.
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
    nextMiniGameBtn.style.display = "inline-block";
}

/*
 * ################################### Start Social Game ###############################3
 */

// Selects and displays a random Social mini-game.
function startSocialGame() {
    categoryDisplay.textContent = "Social Mini-Game";

    // Randomizing the social mini-games
    const randomSocialIndex = Math.floor(Math.random() * socialMiniGames.length);
    currentSocialGame = socialMiniGames[randomSocialIndex];

    document.getElementById("socialTitle").textContent = currentSocialGame.title;
    document.getElementById("socialMessage").textContent = "";

    renderMultipleChoiceGame(
        currentSocialGame,
        "socialQuestion",
        "socialChoices",
        (selectedButton, choice, choiceIndex) => {
            checkSocialChoice(selectedButton, choiceIndex);
        });

    socialGame.style.display = "block";
}

/*
############################### Check Social Game  ####################################
*/
// Applies the selected Social choice's effects and reveals its Continue button.
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

    nextMiniGameBtn.style.display = "inline-block";
}

/*
############################### End of Check Social Game  ####################################
*/

// Advances the queue index and starts the next mini-game.
function completeCurrentMiniGame() {
    currentGameIndex++;

    startCurrentMiniGame();
}

// Opens the Events page after the complete mini-game queue has been played.
function finishAllMiniGames() {
    window.location.href = "../Events/Events.html";
}

// Advances after the player finishes any mini-game category.
nextMiniGameBtn.addEventListener(
    "click",
    completeCurrentMiniGame);

// Starts the first queued mini-game when the page script loads.
startCurrentMiniGame();
