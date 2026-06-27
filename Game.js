import { createPlayer } from "./player.js";

function init() {
    const startButton = document.getElementById("startGameBtn");

    startButton.addEventListener("click", startGame);
}

function startGame() {
    const name = document.getElementById("playerName").value;
    const traitName = document.getElementById("traitSelect").value;

    createPlayer(name, traitName);
    gameState.currentScreen = "QuarterStart";
    console.log("Game started!");
    console.log(gameState);
}

const gameState = {
    year: 1,
    quarter: "Fall",

    currentScreen: "MainMenu",
    currentEvent: null,
    currentMiniGame: null,
    endgame: false
};

const Quarters = ["Fall", "Winter", "Spring", "Summer"];
const last_year = 4;


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
function NextQuarter(quarter) {

    if (gameState.endgame === true) {
        return;
    }

    //Need to add the condition where the events are done 

    if (gameState.year === 4 && gameState.quarter === "Spring") {
        gameState.endgame = true;
        // then I need to call the endgame.js here 
        return; 
    }

    if (LastQuarter(gameState.quarter)) {
        NextYear(gameState);
        gameState.quarter = "Fall"
        return;
    }

    if (quarter === "Fall") {
        return "Winter";
    }

    else if (quarter == "Winter") {
        return "Spring";
    }

    // check if its year 4 
    else if (quarter == "Spring") { 
        return "Summer";
    }
}

init();





