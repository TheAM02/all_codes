import Discord from 'discord.js';

export const cmd = (msg) => {
    if (msg.content === 'ping') {
        msg.reply({content: 'pong'})
    }
}