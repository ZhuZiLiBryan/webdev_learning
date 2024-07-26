const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score')
}


const playToSelect = document.querySelector('#playto');

const reset = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

// Passing in the object!
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('win');
            opponent.display.classList.add('lose');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function (e) {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function (e) {
    updateScores(p2, p1);
});

function resetVals() {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('win', 'lose');
        p.button.disabled = false;
    }
    
    isGameOver = false;
    
}

reset.addEventListener('click', resetVals);

playToSelect.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    resetVals();
});