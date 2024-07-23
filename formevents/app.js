const gameForm = document.querySelector('#gameForm');
const input = document.querySelector('#gameinput');
const list = document.querySelector('#games');

gameForm.addEventListener('submit', function(e) {
    e.preventDefault(); //commonly used for submit form!
    const gameName = input.value; // input.value allows us to access the values that were in input
    const newListItem = document.createElement('li');
    newListItem.innerText = gameName;
    list.append(newListItem);
    input.value = '';
});