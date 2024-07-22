// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
    let pokeIcon = document.createElement('img');
    pokeIcon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    container.appendChild(pokeIcon);
}