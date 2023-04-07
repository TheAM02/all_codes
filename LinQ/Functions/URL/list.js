import error from '../../Embeds/error.js'
import vurl from 'valid-url'
import util from '../../Server/utility.js'
import listEmbed from '../../Embeds/Templates/list-embed.js'
import db from '../../Main/database.js'


async function main (msg, args) {

	let links = [];

	const index = await db.get('index');

	for (let i = 0; i < index.length; i++) {
		let item = index[i];
		let val = await db.get(item)
		links.push(
			{
				name: item, value: val.longURL.substring(0, 800)
			}
		)
	}

	

	const embed = listEmbed(msg, args, {fields: links});

	msg.channel.send({embeds: [embed]})

}


const meta = {
	name: 'Lists',
	description: 'Lists all links in present in the program.',
	syntax: 'LinQ List',
	timeout: 'none',
	category: 'URL Management System',
	perms: 'none',
	version: '0.1',
	comm: 'additional comments [unread]'
}


export { meta }
export default main