
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
export function NextQuarter(gameState) {

    if (gameState.endgame === true) {
        return;
    }

    if (gameState.eventDone === false) {
        return;
    }
    
    /*
     * Note: this how I was checking if the quarter was at the end however I realized 
     * that it's not actually going to the graduation screen when its YEAR 4 AND Spring
     * The problem it was I was checking IF it was the last quarter of the year and not the spring condition
    */ 

    // if (LastQuarter(gameState.quarter)) {
    //     if (gameState.year === LastYear) {
    //         gameState.endgame = true;
    //         gameState.currentScreen = "EndGame";
    //         return;
    //     }

    //     NextYear(gameState);
    //     gameState.quarter = "Fall";
    //     return;
    // }



    if (gameState.year === LastYear && gameState.quarter === "Spring") {
        gameState.endgame = true;
        gameState.currentScreen = "EndGame";
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
        gameState.quarter = "Summer";
        return;
    }
}

// ######################################################################################
