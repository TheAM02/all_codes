import Discord from 'discord.js'
import client from '../Main/client.js'
import util from '../Server/utility.js'


const error = (oops, msg) => {
	
	const errorEmbed = new Discord.MessageEmbed()
	.setTitle(`Encountered internal error. See below for details.`)
	.setAuthor(`${client.user.username} error`, client.user.displayAvatarURL())
	.setDescription(util.multilineCode(oops.error))
	.addFields(
		{
			name: 'At command', value: util.multilineCode(oops.command)
		}, {
			name: 'By user', value: util.multilineCode(`${msg.author.tag}@${msg.author.id}`)
		}, {
			name: 'In channel', value: util.multilineCode(`${msg.channel.name}@${msg.channel.id}`)
		}, {
			name: 'In guild', value: util.multilineCode(`${msg.guild.name}@${msg.guild.id}`)
		}
	)

	return errorEmbed

}

export default error