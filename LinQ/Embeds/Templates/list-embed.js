import { MessageEmbed } from 'discord.js'
import error from '../error.js'
import client from '../../Main/client.js'


function listEmbed (msg, args, obj) {

	const embed = new MessageEmbed()
	.setTitle('URL List')
	.setAuthor(
		{
			name: `${client.user.username} URL MS`, iconURL: client.user.displayAvatarURL()
		}
	)
	.setColor(client.colors.temp)
	.setDescription('This is a list of links in the program. Use ` LinQ Def [link-slug] ` to obtain info on that specific link.')
	.addFields(obj.fields)
	.setFooter({
		text: `CM: LIST, TID: ${msg.author.id}`,
		iconURL: msg.author.displayAvatarURL()
	});

	return embed

}


export default listEmbed