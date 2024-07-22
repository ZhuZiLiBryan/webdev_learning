const clicker = document.querySelector('#button');
const rgbText = document.querySelector('h2');

let r = 0;
let g = 0;
let b = 0;


function getRandomColor() {
    return Math.floor(Math.random() * 256)
}
clicker.addEventListener('click', () => {
    r = getRandomColor();
    g = getRandomColor();
    b = getRandomColor();

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    rgbText.innerText = `rgb(${r}, ${g}, ${b})`
});

/* EPILEPSY WARNING HOLY CRAP
const intervalID = setInterval(() => {
    r = getRandomColor();
    g = getRandomColor();
    b = getRandomColor();

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    rgbText.innerText = `rgb(${r}, ${g}, ${b})`
}, 1000);

*/ 