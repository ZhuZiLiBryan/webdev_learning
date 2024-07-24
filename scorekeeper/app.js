const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');   

const playToSelect = document.querySelector('#playto');

const reset = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;

let winningScore = 5;
let isGameOver = false;

function updateScores() {
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
}

p1Button.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('win');
            p2Display.classList.add('lose');
        }
        updateScores();
    }
});

p2Button.addEventListener('click', function (e) {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('win');
            p1Display.classList.add('lose');
        }
        updateScores();
    }
});

function resetVals() {
    p1Score = 0;
    p2Score = 0;
    updateScores();
    isGameOver = false;
    p1Display.classList.remove('win', 'lose');
    p2Display.classList.remove('win', 'lose');
}

reset.addEventListener('click', resetVals);

playToSelect.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    resetVals();
});