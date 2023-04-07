import express from 'express';
const app = express();

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.sendStatus(200);
});

export default function () {
    return app.listen(port)
}