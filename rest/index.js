const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // Tell express to parse request body as URL encoded form data
app.use(express.json());

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
    const { meat, spicy, shell } = req.body;
    res.send(`${meat} taco is spicy? ${spicy} indeed, with a ${shell} shell!`);
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})