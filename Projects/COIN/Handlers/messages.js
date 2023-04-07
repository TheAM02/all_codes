import 'discord.js';
import client from "../Main/client.js";

// modular functions' import;

import wallet from "../Functions/Economy/start.js";

async function message(msg) {

    if (msg.author.id === client.user.id) return;
    if (!msg.content) return
    let args = msg.content.split(' ').filter((x) => x !== '');
    let cmd = args[0].toString().toLowerCase();


    if (cmd === '&wallet') {
        return console.log(wallet(msg, args))
    }

}

export default message