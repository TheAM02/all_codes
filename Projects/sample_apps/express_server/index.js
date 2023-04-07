import express from "express";
const app = express();

// sample apps

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, port => {
    console.log('Listening on specified port!');
});