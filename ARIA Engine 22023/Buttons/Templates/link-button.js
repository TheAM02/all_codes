import {MessageButton, MessageActionRow} from 'discord.js'


function link (name, link) {
	return new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setStyle('LINK')
				.setLabel(name)
				.setURL(link)
		)
}


export default link