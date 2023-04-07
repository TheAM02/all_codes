export const reg = (client) => {
    let guildInfo = {
        id: '848909002128490517',
        name: 'The AM\'s bot testing guild.'
    }

    let guild = client.guilds.cache.get(guildInfo.id);
    let commands = guild.commands;

    commands.create(
        {
            name: 'ping',
            description: 'Replies with pong.'
        }
    )

}