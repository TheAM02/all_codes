import {Client, Intents} from 'discord.js';
import info from './info.js'

const client = new Client({
	intents: [
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_PRESENCES,
		Intents.FLAGS.GUILDS
	]
});

client.colors = info.colorCode;
client.prefix = 'Case '
client.meta = info

export default client;