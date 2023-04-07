import {SlashCommandBuilder} from "discord.js";
import client from "../Main/client.js";

export default {

    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),

    async execute(interaction) {
        console.log(interaction)
        return interaction.reply('`🏓Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`');
    },

}