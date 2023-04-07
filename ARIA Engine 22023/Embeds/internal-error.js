import Discord from 'discord.js'
import client from '../Main/client.js'
import util from '../Server/utility.js'


/**
 * @description Error function to return to the message author when an internal error occurs.
 * @deprecated Should not be used manually. This function is used in builders.js to construct AriaInternalError.
 * @param oops {Object}: error object
 * @param msg {MessageEvent}: Message callback parameter
 * @returns {MessageEmbed}: error embed
 */


const error = (oops, msg) => {
	
	const errorEmbed = new Discord.MessageEmbed()
	.setTitle(`Encountered internal error. See below for details.`)
	.setAuthor({
		name: `${client.user.username} error`,
		iconURL: client.user.displayAvatarURL()
	})
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