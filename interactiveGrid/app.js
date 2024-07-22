const board = document.querySelector('#board');

for (let i = 0; i < window.screen.availHeight/50; i++) {
    for (let j = 0; j < window.screen.availWidth/75; j++) {
        let newButton = document.createElement('div');
        newButton.classList.add('square');
        newButton.classList.add('bubble');
        newButton.classList.toggle('bubble');
        board.appendChild(newButton);
    }
}

function makeRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let colorString = `rgb(${r}, ${g}, ${b})`;
    return colorString;
}

const pixel = document.querySelectorAll('.square');

for (let p of pixel) {
    p.addEventListener('mouseenter', () => {
        p.style.transition = 0.1;
        p.style.backgroundColor = makeRandomColor();
        p.classList.toggle('bubble');
    })
    p.addEventListener('mouseleave', () => {
        p.style.transition = 10;
        p.style.backgroundColor = 'white';
    })
}