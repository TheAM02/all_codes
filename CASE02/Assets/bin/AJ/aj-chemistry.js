import error from '../../../Embeds/error.js'
import util from '../../../Server/utility.js'
import db from '../../../Main/database.js'
import summary from '../../../Embeds/Templates/results-summary.js'
import listEmbed from '../../../Embeds/Templates/notes-list.js'


async function main (msg, args) {

	let chapter;

	if (!args[1]) {
		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Missing parameter: [chapter]',
				value: 'Please enter a valid chapter for this command to work.',
				help: '?Help AJ'
			}, msg.author)]
		})
	}

	chapter = args[1].toString().toLowerCase();

	let chemChapter = await db.get(`chem_chapter_${chapter}`);

	if (chapter === 'list' || chapter === '-ls') {
		
		let chemChaps = await db.get('chemistry_chapters');
		let list = [];

		for (let i = 0; i < chemChaps.length; i++) {

			list.push(`${i + 1}: \` ${chemChaps[i].name.replace('_', ' ')} \``);

		}

		let embed = listEmbed(msg, args, {title: 'AJ Chemistry notes list', description: list.join('. \n')});
		return msg.channel.send({embeds: [embed]});
		
	}

	if (!chemChapter) {
		return msg.channel.send({
			embeds: [ error({
				num: 404,
				code: 'NOT_FOUND',
				name: 'No results found for search',
				value: `We couldn't find any chapter for the query: ${util.inlineCode(chapter, ' ')}. Please try a different query.`,
				help: '?Help AJ'
			}, msg.author)]
		})
	}

	let objFields = []

	let obj = {
		title: `AJ Chemistry chapter ${chapter} fetch summary`,
		fields: [
			{
				name: 'Total page count', value: `${chemChapter.images.length}`
			}, {
				name: 'Chapter URL', value: `${chemChapter.url}`
			}
		],
		description: ''
	}

	chemChapter.images.forEach((img, index) => {
		msg.channel.send(img);
	});

	let embed = summary(msg, args, obj)

	msg.channel.send({embeds: [embed]})
	
}


const meta = {
	name: 'AJ Chemistry notes',
	description: 'Fetches chemistry notes from adamjee website.',
	syntax: '?Adamjee chemistry [chapter/excercise]',
	timeout: 'none',
	category: 'Utility',
	perms: 'none',
	version: '1.1',
	comm: 'clone of ./maths.js'
}

export {meta}
export default main