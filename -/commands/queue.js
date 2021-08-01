 module.exports = {
    name: "queue",
    aliases: ["q"],
    execute: async (message,args, cmd, client, discord) => {
        if(!message.guild) return;
        if(!message.member.voice.channel) return message.reply('Please join a voice channel');
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(` | There is nothing playing!`)
        const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        message.channel.send(` | **Server Queue**\n${q}`)
    }
}