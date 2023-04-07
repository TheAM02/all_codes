import {MessageEmbed} from 'discord.js'
import client from '../Main/client.js'
import util from '../Server/utility.js'


const helpEmbed = (help, person) => {

	if (!help.timeout) help.timeout = 'none' 

	return new MessageEmbed()
	.setTitle(`${help.name} command help`)
	.setAuthor({
		name: `${client.user.username} help`,
		iconURL: client.user.displayAvatarURL()
	})
	.setColor('#39ad58')
	.setDescription(`**About the command:**\n${help.description}`)
	.addFields(
		{
			name: 'Category', value: help.category
		}, {
			name: 'Standard syntax', value: `\`\`\`${help.syntax}\`\`\``
		}, {
			name: 'Timeout', value: util.inlineCode(` ${help.timeout} `), inline: true
		}, {
			name: 'Required permissions', value: `\` ${help.perms} \``, inline: true
		}
	)
	.setFooter({
		text: `HELP?id=${person.id}&index=${help.name.toLowerCase().replace(/ /g, '_')}`,
		iconURL: person.displayAvatarURL()
	})

}

export default helpEmbed