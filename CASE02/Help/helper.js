import Discord from 'discord.js'
import error from '../Embeds/error.js'
import help from '../Embeds/help.js'
import util from '../Server/utility.js'

// importing help meta objects
import {meta as maths} from '../Functions/Utility/maths.js'
import {meta as notes} from '../Functions/Utility/notes.js'
import {meta as chem} from '../Functions/Utility/chemistry.js'
import {meta as phys} from '../Functions/Utility/physics.js'

// importing help modules
import generalHelp from './help-general.js';
import utilityHelp from './help-utility.js';
import allHelp from './help-all.js';


const helper = (msg, args) => {

	return

	let helpCase

	if (!args[1]) {
		helpCase = 'general'
	} else {
		helpCase = args[1].toString().toLowerCase()
	}

	// hashCats

	if (helpCase === 'general') {
		return generalHelp(msg, args, msg.author)
	}

	if (helpCase === 'all' || helpCase === 'list') {
		return allHelp(msg, args, msg.author)
	}

	if (helpCase === 'utility' || helpCase === 'util') {
		return allHelp(msg, args, msg.author)
	}

	// hashMods

	if (helpCase === 'notes' || helpCase === 'note') {
		return msg.channel.send({ embeds: [help(notes, msg.author)]})
	}

	if (helpCase === 'maths' || helpCase === 'math') {
		return msg.channel.send({ embeds: [help(maths, msg.author)]})
	}

	if (helpCase === 'chem' || helpCase === 'chemistry') {
		return msg.channel.send({ embeds: [help(chem, msg.author)]})
	}

	if (helpCase === 'phys' || helpCase === 'physics') {
		return msg.channel.send({embeds: [help(phys, msg.author)]})
	}

	else {
		return msg.channel.send({embeds: [
			error ({
				num: 404,
				code: 'NOT_FOUND',
				name: 'Could not find requested help',
				value: `We could not find help for the requested function: \` ${helpCase} \``,
				help: '?Help'
			}, msg.author)
		]})
	}
}

export default helper