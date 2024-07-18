function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const myMath = {
    PI: 3.14159,
    square(num) {
        return num**num;
    },
    add(a, b) {
        return a + b;
    }
}

const names = ["Josh", "Bob", "Amy"];

const formattedNames = names.map( x => (
    x.toUpperCase()
))

const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter( x => (   
    x % 2 === 0 )
)

numbers.reduce((sum, num) => sum + num, 100)

function d20(numSides = 20) {
    return Math.floor(Math.random() * numSides) + 1
}

console.log(Math.max(...numbers))


function printNames(...names) {
    for (let name of names) {
        console.log(`${name} `);
    }
}


const book = {
    title: "Great Gatsby",
    isbn: 1723123123,
    author: "Fitzgerald"
}

function bookInfo({title, isbn}) {
    return `${title} ${isbn}`;
}


