import {MessageEmbed} from 'discord.js'
import client from '../Main/client.js'

/**
 *
 * @param success {Object}: success type object with parameters
 * @param person {GuildMember}: guild member object
 * @returns {MessageEmbed}
 */


const succ = (success, person) => {

	/**
	 * @description defining parameter "success"
	 * @param title {String}: embed title
	 * @param description {String}: embed description
	 * @param command {String}: parent function/command
	 * @param num {Number}: 2** Success status code (Use standard http status code)
	 * @param id {String}: ID of the author or the person executing the function
	 *
	 */
	
	const succEmbed = new MessageEmbed()
	.setTitle(`${success.title}`)
	.setDescription(success.description)
	.setColor('#00ff66')
	.setFooter({
		text: `CM: ${success.command}, N: ${success.num}, ID: ${person.id}`,
		iconURL: person.displayAvatarURL()
	});

	return succEmbed

}

export default succ