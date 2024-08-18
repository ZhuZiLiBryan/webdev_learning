const express = require('express');
const app = express();

app.use((req, res) => {
    console.log("Got a request!");
    res.send("Here's your response!");
});

app.listen(3000, () => {
    console.log('Listening on Port 3000!');
});

