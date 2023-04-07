import { MessageEmbed } from 'discord.js'
import error from '../error.js'
import client from '../../Main/client.js'


function listEmbed (msg, args, obj) {

	const embed = new MessageEmbed()
	.setTitle('URL Add')
	.setAuthor(
		{
			name: `${client.user.username} URL MS`, iconURL: client.user.displayAvatarURL()
		}
	)
	.setColor(client.colors.temp)
	.setDescription('Successfully added your link into the program')
	.addFields(obj.fields)
	.setFooter({
		text: `CM: ADD, TID: ${msg.author.id}`,
		iconURL: msg.author.displayAvatarURL()
	});

	return embed

}


export default listEmbed