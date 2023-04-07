import {Client, Intents} from 'discord.js';
import info from './info.js'

const Bot = new Client({
	intents: [
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_PRESENCES,
		Intents.FLAGS.GUILDS
	]
});

Bot.colors = info.colorCode

export default Bot