import client from '../Main/client.js'
import db from '../Main/database.js'

// Importing commands

import help from '../Help/helper.js'




export default async function cmd (msg) {
	
	if (msg.author.id === client.user.id) return;
	if (!msg.content) return
	let args = msg.content.split(' ').filter((x) => x !== '');
	if (args[0] === 'case') args.shift()
	let cmd = args[0].toString().toLowerCase();

	// responding to commands

	if (cmd === 'help') {
		return help(msg, args);
	}

}