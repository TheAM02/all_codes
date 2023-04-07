import { MessageEmbed } from 'discord.js'
import client from '../Main/client.js'
import info from '../Main/info.js'


/**
 * @description Sends the latest updates
 * @param msg {MessageEvent}: Message callback parameter
 * @param args {Array}: Message arguments
 * @param person {GuildMember}: Author of the message
 * @returns {*}: sends the embed into the channel
 */


function logger (msg, args, person) {

	const log = new MessageEmbed()
	.setTitle(`Change Log`)
	.setAuthor({
		name: `The Developers & Team Vision`,
		iconURL: client.user.displayAvatarURL()
	})
	.setDescription(`Whats new in ${client.user.username} v${info.version}?`)
	.addFields(
		{
			name: 'Fixed bugs', value: 'Fixed minor bugs in some commands.'
		}, {
			name: 'Major code & engine optimization', value: 'Optimized the bot\'s engine & the code making it way better then the previous 1.10 ARIA engine.'
		}
	)
	.setColor('#39ad58')
	.setFooter({
		text: `With <3 from Team Vision!`, 
		iconURL: 'https://i.imgur.com/KrTm9aJ.png'
	})

	return msg.channel.send({embeds: [log]})

}


const meta = {
	name: 'Change Log',
	description: 'Lists all the new features added in the latest bot/engine update.',
	syntax: '!Log',
	category: 'System',
	perms: 'none',
	version: '1.0',
	comm: 'Added in Alpha 1.3'
}


export {meta}
export default logger