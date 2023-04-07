import fs from 'fs'

async function routes (app, dir) {

    dir = dir + '/public/'
    console.log(dir)


    app.get('/', (req, res) => {
        res.sendFile(dir + 'home.html')
    })

    app.get('/static/:file', (req, res) => {

        const path = `${dir}static/${req.params.file}`
        if (fs.existsSync(path)) {
            return res.sendFile(path)
        }
        res.sendStatus(404);

    }) 

}

export default routes