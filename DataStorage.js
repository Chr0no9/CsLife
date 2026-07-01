const SAVE_KEY = "csLifeSaveData";

export function saveGame(saveData) {
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
    console.log("Game saved.");
}

export function loadGame() {
    const savedData = localStorage.getItem(SAVE_KEY);

    if (savedData === null) {
        console.log("No saved game found.");
        return null;
    }

    console.log("Game loaded.");
    return JSON.parse(savedData);
}

export function deleteSave() {
    localStorage.removeItem(SAVE_KEY);
    console.log("Save deleted.");
}

export function hasSaveData() {
    const savedData = localStorage.getItem(SAVE_KEY);

    if (savedData === null) {
        return false;
    }

    return true;
}