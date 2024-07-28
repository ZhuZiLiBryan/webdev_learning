function colorChange() {
    return new Promise((resolve, reject) => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        setTimeout(() => {
            document.body.style.backgroundColor = `rgb(${r},${g},${b}`;
            resolve(`color change!`);
        }, 1000);
    });
}

document.body.style.transition = '0.5s';

colorChange()
    .then(() => colorChange()) // Implicit return of promise
    .then(() => colorChange())
    .then(() => colorChange())
    .then(() => colorChange())
    .then(() => colorChange())
    .then(() => colorChange())
