let maximum = parseInt(prompt("Enter the maximum number: "));

while (!maximum) {
    maximum = parseInt(prompt("Enter the maximum number: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let attempts = 1;
let guess = prompt("Enter your first guess (Type 'q' to exit the game): ");

while (parseInt(guess) !== targetNum) {

    if (guess === 'q') break;

    guess = parseInt(guess);
    if (guess > targetNum) {
        console.log("num too high");
        guess = parseInt(prompt("Enter your first guess: "));
    } else if (guess < targetNum) {
        console.log("num too low");
        guess = parseInt(prompt("Enter your first guess: "));
    } else {
        console.log("Invalid guess!");
    }

    attempts++;
}

if (guess == 'q') {
    console.log("you quit!")
} else {
    console.log(`yippe! took you ${guess} guesses!`)
}


