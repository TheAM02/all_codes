import client from '../Main/client.js'
import db from '../Main/database.js'

// Importing commands

// import help from '../Help/helper.js'
import notes from '../Functions/Notes/notes.js'
import dbAdmin from '../Functions/Admin/db-functions.js'



export default async function cmd (msg) {
	
	if (msg.author.id === client.user.id) return;
	if (!msg.content) return
	let args = msg.content.split(' ').filter((x) => x !== '');
	if (args[0] === 'case') args.shift()
	let cmd = args[0].toString().toLowerCase();

	// responding to commands

	if (cmd === 'notes' || cmd === 'note' || cmd === 'n') {
		return notes(msg, args);
	}

	if (cmd === 'help') {
		// return await help(msg, args);
	}

	if (cmd === 'database' || cmd === 'db') {
		console.log('e')
		return dbAdmin(msg, args)
	}

}