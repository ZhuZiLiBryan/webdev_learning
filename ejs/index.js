const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

console.log(__dirname);

app.set('views', path.join(__dirname, '/views'));

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
});

app.get('/rand', (req, res) => {
    const num = Math.random() * 10 + 1;
    res.render('random', { num : num }); // can pass in second argument to render, object w/ key value pairs to use in .ejs file
});

app.get('/', (req, res) => {
    res.render('home'); // Don't need .ejs extension bc already set view engine to be ejs
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})