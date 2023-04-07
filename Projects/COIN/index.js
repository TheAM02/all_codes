import 'discord.js';
import client from './Main/client.js';
import start from './Functions/Economy/start.js';
import endpoint from './Server/endpoint.js'
import message from "./Handlers/messages.js";
import crypto from "./Server/crypto.js";


client.on('ready', (req, res) => {
    console.clear();
    console.log(`> Established successful connection with Discord Application Programming Interface (v8).\n> Logged in as child ARAI-ICP: ${client.user.tag}`);
    client.user.setActivity('!Help', { type: 'LISTENING' });
    start({author: client.user});
    endpoint(client)
    console.log(crypto.hash('THIS IS A DATABASE URL XD'))
});

client.on('messageCreate', message);

client.login(`${process.env.BOT_TOKEN}`)