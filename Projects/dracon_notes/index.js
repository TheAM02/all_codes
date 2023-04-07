import express from "express";
import path from "path"
const app = express();
const dir = path.resolve()
import utility from "./Backend/utility.js";

app.use(express.static('./Server'));

app.get('/home', (req, res) => {
    res.sendFile(dir+'/Server/home.html')
});

app.get('/notes', (req, res) => {
    res.sendFile(util.rootDirectory('/Server/notes.html'))
})


app.listen(3000, () => {
    console.log("Server is up.")
});