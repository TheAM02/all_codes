import client from "./Main/client.js";
import commandHandler from "./Main/handler.js";
import server from "./Main/server.js";
import fetch from "node-fetch";
import messageHandler from "./Main/messages.js";

client.on('ready', (c) => {
    console.clear();
    console.log(`Logged in as ${c.user.username}!`);
    server()
    // onload();
});

client.on('interactionCreate', async (i) => {
    return await commandHandler(i, client)
})
client.on('messageCreate', messageHandler)

client.login(process.env.TOKEN)
