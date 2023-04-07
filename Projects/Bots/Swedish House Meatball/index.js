import Discord from 'discord.js'
import {client as client} from './Main/client.js'
import { cmd as cmd } from './Main/commands.js'
import { reg as commands } from './Main/commands_register.js'
import dotenv from 'dotenv';
dotenv.config();


client.on('ready', ready => {
    console.log(`Logged in as ${client.user.username}.`);
    commands(client);
});

client.on('interactionCreate', async (int) => {

    if (!int.isCommand()) return;

    let { commandName, options } = int;

    console.log(`Interaction created. ${commandName}`);
});


client.login(process.env.TOKEN);