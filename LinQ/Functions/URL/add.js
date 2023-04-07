import error from '../../Embeds/error.js'
import vurl from 'valid-url'
import util from '../../Server/utility.js'
import db from '../../Main/database.js'
import addEmbed from '../../Embeds/Templates/add-embed.js'

import fetch from 'node-fetch'

// import {create} from '../../Server/Shortio-functions/src.js'


async function main (msg, args) {

	if (!args[1]) {

		return msg.channel.send({
			embeds: [ error({
				num: 401,
				code: 'BAD_REQUEST',
				name: 'Missing argument [long-url]',
				value: `Please mention the long URL that you wish to shorten`,
				help: 'LinQ Help Add'
			}, msg.author)]
		})
		
	}

	if (!vurl.isUri(args[1])) {
		return msg.channel.send({
			embeds: [ error({
				num: 401,
				code: 'BAD_REQUEST',
				name: 'Invalid argument [long-url]',
				value: `Please mention a valid long URL. \` ${args[1]} \` is not a valid URL.`,
				help: 'LinQ Help Add'
			}, msg.author)]
		})
	}

	if (!args[2]) {

		return msg.channel.send({
			embeds: [ error({
				num: 401,
				code: 'BAD_REQUEST',
				name: 'Missing argument [slug-url]',
				value: `Please mention the slug that you wish to assign to \` ${args[1]} \``,
				help: 'LinQ Help Add'
			}, msg.author)]
		})
		
	}


	const url = new util.LinqURL(args[1], args[2]);
	
	const index = await db.get('index');

	if (index.includes(url.slug)) {
		
		return msg.channel.send({
			embeds: [ error({
				num: 401,
				code: 'BAD_REQUEST',
				name: 'Slug already exists',
				value: `The slug \` ${url.slug} \` already exists, please assign a different slug to this URL.`,
				help: 'LinQ Help Add'
			}, msg.author)]
		})
		
	}
	

	index.push(url.slug)

	await db.set('index', index);

	await db.set(url.slug, url);
	const obj = {
		fields: [
			{name: url.slug, value: url.longURL}
		]
	}

	let newLink = await createLink(url.longURL, url.slug)

	console.log(newLink)

	console.log(newLink)

	const embed = addEmbed(msg, args, obj);
	
	return msg.channel.send({embeds: [embed]})
	.catch(err => {
		util.log({
			error: err,
			command: '[path]',
			msg: msg
		});
	});

}


async function createLink(long, slug) {

	const url = 'https://api.short.io/links';
	const options = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'sk_9oCChmFFbFcq6RNs'
		},
		body: JSON.stringify({
			allowDuplicates: false,
			domain: 'to.theam.ga',
			originalURL: long,
			path: slug,
			title: slug
		})
	};

	const response = await fetch(url, options);

	return await response.json()
}


const meta = {
	name: 'Add',
	description: 'Adds a forwarding link into the program.',
	syntax: 'LinQ Add [long-url] [slug]',
	timeout: 'none',
	category: 'URL Management System',
	perms: 'none',
	version: '0.1',
	comm: 'additional comments [unread]'
}


export { meta }
export default main