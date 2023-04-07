import {AriaError} from "../Server/builder.js";
import util from '../Server/utility.js';

// importing help meta objects


// importing help modules
import generalHelp from './help-general.js';
import utilityHelp from './help-utility.js';
import allHelp from './help-all.js';


const helper = (msg, args) => {

	let helpCase

	if (!args[1]) {
		helpCase = 'general'
	} else {
		helpCase = args[1].toString().toLowerCase()
	}

	// category help

	if (helpCase === 'general') {
		return generalHelp(msg, args, msg.author)
	}

	if (helpCase === 'all' || helpCase === 'list') {
		return allHelp(msg, args, msg.author)
	}

	if (helpCase === 'utility' || helpCase === 'util') {
		return utilityHelp(msg, args, msg.author)
	}

	// individual command help

	else {

		const error = new AriaError(
			404,
			'NOT_FOUND',
			'Could not find requested help',
			`We could not find help for the requested function ${util.inlineCode(helpCase, ' ')}`,
			'Case Help'
		)
		return error.send(msg)

	}
}

export default helper