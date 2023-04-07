import path from 'path';
const dir = path.dirname('../')

function main(app) {
    
    app.get('/', (req, res) => {
        res.send('Hello world');
    });

    app.get('/try', (req, res) => {
        res.sendFile(`${process.cwd()}/Public/index.html`)
    })
};

export default main