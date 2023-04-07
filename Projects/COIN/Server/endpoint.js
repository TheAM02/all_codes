import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.status(200).send(
        {
            endpoint: {
                online: true,
                status: 200
            }
        }
    )
});

app.listen(3000);

function endpoint(client) {
    app.get('/status', (req, res) => {
        res.send(
            {
                botStatus: 'online',
                discordGatewayStatus: 200,
                client: client.user
            }
        )
    })
}

export default endpoint;