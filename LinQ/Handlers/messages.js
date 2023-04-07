import client from '../Main/client.js'
import db from '../Main/database.js'

// Importing commands
import add from '../Functions/URL/add.js'
import list from '../Functions/URL/list.js'
import help from '../Help/helper.js'


export default async function cmd (msg) {
	
	if (msg.author.id === client.user.id) return;
	if (!msg.content) return
	let args = msg.content.toLowerCase().split(' ').filter((x) => x !== '');
	if (args[0] !== 'voii') return
	args.shift()
	if (args.length === 0) return
	let command = args[0].toString().toLowerCase();

	// responding to commands

	if (command === 'add') {
		return await add(msg, args)
	}

	if (command === 'help') {
		return await help(msg, args)
	}

	if (command === 'list') {
		return await list(msg, args)
	}

}