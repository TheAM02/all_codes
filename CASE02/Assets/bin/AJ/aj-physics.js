import error from '../../../Embeds/error.js'
import util from '../../../Server/utility.js'
import db from '../../../Main/database.js'
import summary from '../../../Embeds/Templates/results-summary.js'
import listEmbed from '../../../Embeds/Templates/notes-list.js'

/**
 * @description: "Physics notes fetch"
*/


async function main (msg, args) {

	let chapter;

	if (!args[1]) {
		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Missing parameter: [chapter]',
				value: 'Please enter a valid chapter for this command to work.',
				help: '?Help Physics'
			}, msg.author)]
		})
	}

	chapter = args[1].toString().toLowerCase();

	let physChapter = await db.get(`aj_phys_chapter_${chapter}`);

	if (chapter === 'list' || chapter === '-ls') {
		
		let physChaps = await db.get('aj_physics_chapters');
		let list = [];

		for (let i = 0; i < physChaps.length; i++) {

			list.push(`${i + 1}: \` ${physChaps[i].name.replace('_', ' ')} \``);

		}

		let embed = listEmbed(msg, args, {title: 'AJ Physics notes list', description: list.join('. \n')});
		return msg.channel.send({embeds: [embed]});
		
	}

	if (!physChapter) {
		return msg.channel.send({
			embeds: [ error({
				num: 404,
				code: 'NOT_FOUND',
				name: 'No results found for search',
				value: `We couldn't find any chapter for the query: ${util.inlineCode(chapter, ' ')}. Please try a different query.`,
				help: '?Help Physics'
			}, msg.author)]
		})
	}

	let objFields = []

	let obj = {
		title: `AJ Physics chapter ${chapter} fetch summary`,
		fields: [
			{
				name: 'Total page count', value: `${physChapter.images.length}`
			}, {
				name: 'Chapter URL', value: `${physChapter.url}`
			}
		],
		description: ''
	}

	let embed = summary(msg, args, obj)

	msg.channel.send({embeds: [embed]})

	physChapter.images.forEach((img, index) => {
		msg.channel.send(img);
	});
	
}


const meta = {
	name: 'Physics notes',
	description: 'Fetches physics notes.',
	syntax: '?Physics [chapter/excercise]',
	timeout: 'none',
	category: 'Utility',
	perms: 'none',
	version: '1.1',
	comm: 'clone of ./chemistry.js'
}

export {meta}
export default main