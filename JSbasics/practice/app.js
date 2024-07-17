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