import {Client, SlashCommandBuilder} from "discord.js";
// import client from "../Main/client.js";

export default {

    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),

    async execute(interaction, client) {
        // console.log(interaction)
        interaction.reply({ content: "🏓 Pong! 🏓", fetchReply: true }).then(async m => {
            await interaction.editReply({ content: `🏓 Pong! 🏓\nBot Latency: \`${m.createdTimestamp - interaction.createdTimestamp}ms\`, Websocket Latency: \`${client.ws.ping}ms\`` });
        })

    //    `🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`

    },

}