import Discord from 'discord.js'
import client from '../Main/client.js'


/**
 * @description Error function to return to the message author when an internal or external error occurs. Should not be used manually. This function is used in builders.js to construct AriaError.
 * @param oops {Object}: error object
 * @param msg {MessageEvent}: Message callback parameter
 * @returns {MessageEmbed}: returns error embed
 */


function ariaError(oops, person) {
	
	const errorEmbed = new Discord.MessageEmbed()
	.setTitle(`Error ${oops.num}`)
	.setAuthor({
		name: `${client.user.username} error`,
		iconURL: client.user.displayAvatarURL()
	})
	.setDescription(`Command failed to execute due to following reasons`)
	.addFields(
		{
			name: oops.name, value: oops.value
		}, {
			name: 'What can you do?', value: `You can refer to: \n\`\`\`${oops.help}\`\`\``
		}
	)
	.setFooter({
		text: `E: ${oops.code}, N: ${oops.num}, ID: ${person.id}`,
		iconURL: person.displayAvatarURL()
	});

	return errorEmbed

}

export default ariaError