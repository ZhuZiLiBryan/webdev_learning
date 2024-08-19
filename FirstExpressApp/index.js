const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("Got a request!");
      //res.send("Here's your response!");
// });

app.get('/', (req, res) => {
    res.send('Welcome home!');
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const subreddit = req.params.subreddit;

    res.send(`<h1>Browsing the ${subreddit} subreddit! Looking at post ${req.params.postId}</h1> `);

});

app.get('/cats', (req, res) => {
    console.log("REQUEST TO CATS");
    res.send('Meow!');
});

app.post('/cats', (req, res) => {
    res.send('I heard your post request to cats!');
});

app.get('/dogs', (req, res) => {
    res.send('WOOF!');
})

app.get('*', (req, res) => {
    res.send('Path not recognized!');
});

app.listen(3000, () => {
    console.log('Listening on Port 3000!');
});