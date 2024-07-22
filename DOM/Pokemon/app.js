// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container');
let uri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

for (let i = 1; i <= 151; i++) {
    let entry = document.createElement('div');
    let pokeIcon = document.createElement('img');
    let label = document.createElement('span');
    label.innerText = `#${i}`;
    pokeIcon.src = `${uri}${i}.png`;

    entry.classList.add("pokemon");

    entry.append(pokeIcon);
    entry.append(label);
    container.append(entry);
}