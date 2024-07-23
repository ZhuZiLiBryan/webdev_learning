const h1 = document.querySelector('h1');

function makeRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let colorString = `rgb(${r}, ${g}, ${b})`;
    return colorString;
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        h1.innerText = h1.innerText.slice(0, -1);
    } else {
        h1.append(e.key);
    }
});