import error from '../../../Embeds/error.js'
import util from '../../../Server/utility.js'
import db from '../../../Main/database.js'
import summary from '../../../Embeds/Templates/results-summary.js'
import listEmbed from '../../../Embeds/Templates/notes-list.js'
import noteEmbed from '../../../Embeds/Templates/notes-image.js'

/**
 * @description: "Mathematics notes fetch"
*/


async function main (msg, args) {

	let excercise;

	if (!args[1]) {
		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Missing parameter: [excercise]',
				value: 'Please enter a valid excercise for this command to work.',
				help: '?Help Math'
			}, msg.author)]
		})
	}

	excercise = args[1].toString().toLowerCase();

	let chapter = await db.get(`aj_maths_${excercise}`);

	if (excercise === 'list' || excercise === '-ls') {
		
		let mathChaps = await db.get('aj_maths_chapters');
		let list = [];

		for (let i = 0; i < mathChaps.length; i++) {

			list.push(`${i + 1}: \` ${mathChaps[i].name.replace(' ', '')} \``);

		}

		let embed = listEmbed(msg, args, {title: 'Maths notes list', description: list.join('. \n')});
		return msg.channel.send({embeds: [embed]});
		
	}

	if (!chapter) {
		return msg.channel.send({
			embeds: [ error({
				num: 404,
				code: 'NOT_FOUND',
				name: 'No results found for search',
				value: `We couldn't find any exercise for the query: ${util.inlineCode(excercise, ' ')}. Please try a different query.`,
				help: '?Help Math'
			}, msg.author)]
		})
	}


	let objFields = []

	let obj = {
		title: `Math excercise ${excercise} fetch summary`,
		fields: [
			{
				name: 'Total page count', value: `${chapter.images.length}`
			}, {
				name: 'Chapter URL', value: `${chapter.url}`
			}
		],
		description: ''
	}

	let embed = summary(msg, args, obj)

	// msg.channel.send({embeds: [embed]});

	msg.channel.send(
		{
			embeds: [embed],
			files: chapter.images			
		}
	)

	chapter.images.forEach((img, index) => {
		// msg.channel.send({files: [img], content: `Image: ${index}`});
	});
	
}


const meta = {
	name: 'Math notes',
	description: 'Fetches mathematics notes.',
	syntax: '?Maths [chapter/excercise]',
	timeout: 'none',
	category: 'Utility',
	perms: 'none',
	version: '1.1',
	comm: 'additional comments [unread]'
}

export {meta}
export default main