import { MessageEmbed } from 'discord.js'
import client from '../Main/client.js'
import info from '../Main/info.js'


function helper (msg, args, person) {

	const log = new MessageEmbed()
	.setTitle(`General Help`)
	.setAuthor({
		name: `${client.user.username} help`,
		iconURL: client.user.displayAvatarURL()
	})
	.setDescription(`This is the list of command categories available in ${client.user.username}.\nRun the corresponding help command for each category to get its list of commands.`)
	.addFields(
		{
			name: 'Utility commands', value: c('?Help Utility')
		}
	)
	.setColor('#39ad58')
	.setFooter({
		text: `HELP?id=${person.id}&index=general`, 
		iconURL: person.displayAvatarURL()
	})

	return msg.channel.send({embeds: [log]})

}


function c (elon) {
	return `\`\`\`${elon}\`\`\``
}


const meta = {
	name: 'General Help',
	description: 'Lists all commands.',
	syntax: '?Help / ?Help General',
	category: 'Help',
	perms: 'none',
	version: '2.0',
	comm: 'Added in Alpha 1.3'
}


export {meta}
export default helper