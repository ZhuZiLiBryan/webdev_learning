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

const pokemon = document.querySelectorAll('img')
const button = document.querySelector('button')

button.onclick = () => {
    for (let p of pokemon) {
        p.src = `https://i.pinimg.com/736x/c0/4b/2d/c04b2d263db517944f70b5055b70885e.jpg`
    }
}

const bulba = document.querySelector('img');
bulba.addEventListener('dblclick', () => {
    bulba.src = `https://i.pinimg.com/736x/c0/4b/2d/c04b2d263db517944f70b5055b70885e.jpg`
})

bulba.nextElementSibling.addEventListener('mouseup', () => {
    alert('FSJLD:F');
})

bulba.addEventListener('click', () => {
    alert("pressed!");
}, { once : true });

