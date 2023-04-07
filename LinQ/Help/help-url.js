import { MessageEmbed } from 'discord.js'
import client from '../Main/client.js'
import info from '../Main/info.js'
import list from '../Server/all.js'
import util from '../Server/utility.js'


function helper (msg, args, person) {

	const log = new MessageEmbed()
	.setTitle(`URL MS Help`)
	.setAuthor({
		name: `${client.user.username} help`,
		iconURL: client.user.displayAvatarURL()
	})
	.setDescription(`This is the list of URL management system commands available in ${client.user.username}.\nRun the corresponding help command for each command to get its details and syntax.`)
	.addFields(util.helpFieldsArray(list.URL))
	.setColor(client.colors.help)
	.setFooter({
		text: `CM: HELP, I: URLMS, TID: ${person.id}`, 
		iconURL: person.displayAvatarURL()
	})

	return msg.channel.send({embeds: [log]})

}


const meta = {
	name: 'URL MS Help',
	description: 'Lists all URL management commands.',
	syntax: 'LinQ Help Utility',
	category: 'Help',
	perms: 'none',
	version: '1.0',
	comm: 'Added in Alpha 1.9'
}


export {meta}
export default helper