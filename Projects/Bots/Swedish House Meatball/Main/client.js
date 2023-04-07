import { Client, Intents } from 'discord.js';
export const client = new Client(
    {
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
        ]
    }
);

/* 
let tgtChannel
if (!id) {tgtChannel = bot.channels.cache.get('877686826129834074')} else {tgtChannel = bot.channels.cache.get(id)}
tgtChannel.send(message);
return "Command successful";
*/