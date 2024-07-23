const gameForm = document.querySelector('#gameForm');
const usernameInput = gameForm.elements.username;
const gameInput = gameForm.elements.game;

gameForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = gameForm.elements.username;
    const gameInput = gameForm.elements.game;

    const newEntry = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(usernameInput.value);
    newEntry.append(bTag);
    newEntry.append(` -> ${gameInput.value}`);

    document.querySelector('ul').append(newEntry);

    usernameInput.value = "";
    gameInput.value = "";
});