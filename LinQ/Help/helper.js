import Discord from 'discord.js'
import error from '../Embeds/error.js'
import help from '../Embeds/help.js'
import util from '../Server/utility.js'

import all from './help-all.js'
import general from './help-general.js'
import url from './help-url.js'

import {meta as add} from '../Functions/URL/add.js'
import {meta as list} from '../Functions/URL/list.js'


const helper = (msg, args) => {

	let helpCase

	if (!args[1]) {
		helpCase = 'general'
	} else {
		helpCase = args[1].toString().toLowerCase()
	}

	// hashCats
	
	if (helpCase === 'all') {
		return all(msg, args, msg.author)
	}

	if (helpCase === 'general') {
		return general(msg, args, msg.author)
	}

	if (helpCase === 'url' || helpCase === 'urlms') {
		return url(msg, args, msg.author)
	}

	// hashMods

	if (helpCase === 'add') {
		return msg.channel.send({embeds: [help(add, msg.author)]})
	}

	else if (helpCase === 'list') {
		return msg.channel.send({embeds: [help(list, msg.author)]})
	}


	else {
		return msg.channel.send({embeds: [
			error ({
				num: 404,
				code: 'NOT_FOUND',
				name: 'Could not find requested help',
				value: `We could not find help for the requested function: \` ${helpCase} \``,
				help: 'LinQ Help'
			}, msg.author)
		]})
	}
}

export default helper