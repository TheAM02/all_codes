import {MessageEmbed} from 'discord.js'
import client from '../Main/client.js'


const succ = (success, person) => {
	
	const succEmbed = new MessageEmbed()
	.setTitle(`${success.title}`)
	.setDescription(success.description)
	.setColor('#00ff66')
	.setFooter({
		text: `${success.command}?num=${success.num}&id=${person.id}`, 
		iconURL: person.displayAvatarURL()
	});

	return succEmbed

}

export default succ