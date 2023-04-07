import db from '../../Main/database.js'
import axios from 'axios'
import cheerio from 'cheerio'


async function main(msg, args) {

	await msg.channel.send('Commencing...')

	let chaps = await db.get('chapters');

	let list = await db.list()

	console.log(list)

	// for (let i = 0; i < (chaps.length); i++) {
	// 	await db.set(`ex_${chaps[i].name.toString().toLowerCase().replace(' ', '')}`, chaps[i].images)
	// }

	await msg.channel.send('Success, check console.')

}


async function write(obj) {

	let ax = await axios(obj.url);
	let data = ax.data
	const w = cheerio.load(data);
	let images = [];
	
	for (let i = 1; i < (obj.normals); i++) {
		images.push(w(`#normal${i}`, data).find('img').attr('src'))
	}

	obj.images = images
	
	console.log(obj)

}