import { createPlayer } from "../Character.js";

function init() {
    const startButton = document.getElementById("startGameBtn");

    startButton.addEventListener("click", startGame);
}

function startGame() {
    const name = document.getElementById("playerName").value;
    const traitName = document.getElementById("traitSelect").value;

    const player = createPlayer(name, traitName);

    gameState.currentScreen = "QuarterStart";

    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("gameState", JSON.stringify(gameState));

    window.location.href = "../mainGame.html";
}

const gameState = {
    year: 1,
    quarter: "Fall",

    currentScreen: "MainMenu",
    currentEvent: null,
    currentMiniGame: null,
    endgame: false
};



/*
############################### QUARTER SYSTEM #####################################3
*/ 
const LastYear = 4;

/*
 * Note: This function checks if it is the last quarter of the year (summer).
 * My thought process is I want to make a function that would make a flag where 
 * it checks if its the last quarter of the year in which then it would trigger to 
 * the nextYear() function to reset the quarter from summer to fall
 */
function LastQuarter(quarter) {

    if (quarter === "Summer") {
        return true;
    }

    else {
        return false;
    }
}

/*
 * Note: This function advances the year if and only if it is LastQuarter()
 */
function NextYear(gameState) {
    gameState.year++;
}
/*
 * Note: This function is sort of like the main function for the quarters where the
 * quarters are actually advanced
 * // is the game over? yes --> stop 
 *  // are events done? no -> stop
    // is it year 4 spring? yes --> endgmae == true --> stop
    // is it summer? yes --> nextYear() & quarter == fall --> stop
 * 
*/
function NextQuarter(gameState) {

    if (gameState.endgame === true) {
        return;
    }

    if (gameState.event_done === false) {
        return;
    }

    if (LastQuarter(gameState.quarter)) {
        NextYear(gameState);
        gameState.quarter = "Fall";
        return;
    }

    if (gameState.quarter === "Fall") {
        gameState.quarter = "Winter";
        return;
    }

    else if (gameState.quarter === "Winter") {
        gameState.quarter = "Spring";
        return;
    }

    
    else if (gameState.quarter === "Spring") { 
        if (gameState.year === LastYear) {
            gameState.endgame = true;
            gameState.currentScreen = "EndGame";
            return; 
        }

        else {
            gameState.quarter = "Summer";
            return;
        }
    }
}

init();

//######################################################################################



