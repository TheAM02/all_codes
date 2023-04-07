import Discord from 'discord.js'
import client from '../Main/client.js'


const error = (oops, person) => {
	
	const errorEmbed = new Discord.MessageEmbed()
	.setTitle(`Error ${oops.num}`)
	.setColor(client.colors.error)
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
		text: `${oops.code}?num=${oops.num}&id=${person.id}`,
		iconURL: person.displayAvatarURL()
	});

	return errorEmbed

}

export default error