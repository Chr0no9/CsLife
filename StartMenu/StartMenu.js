const newGameBtn = document.querySelector(".newGameBtn");
const continueBtn = document.querySelector(".continueBtn");

newGameBtn.addEventListener("click", () => {
    window.location.href = "../CharacterSelect/CharacterSelect.html";
});

continueBtn.addEventListener("click", () => {
    window.location.href = "../mainGame.html";
});