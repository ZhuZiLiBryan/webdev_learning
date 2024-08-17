const langs = require('langs');
const franc = require('franc');
const colors = require('colors');

const userInput = process.argv[2];

const francOut = franc(userInput);
if (francOut === 'und') {
    console.log(colors.red('Language not determined'));
} else {
    const result = langs.where('3', francOut);
    console.log(colors.green(result.name));
}