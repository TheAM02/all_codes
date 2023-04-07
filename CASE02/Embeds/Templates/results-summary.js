import {MessageEmbed} from 'discord.js';
import client from '../../Main/client.js'


function main (msg, args, obj) {

	return new MessageEmbed()
	.setTitle(obj.title)
	.setDescription(obj.description)
	.addFields(obj.fields)
	.setColor('#3449eb')
	.setAuthor({
		name: `${client.user.username} utility`,
		iconURL: client.user.displayAvatarURL()
	})
	
}

export default main