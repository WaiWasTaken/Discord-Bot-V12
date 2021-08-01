module.exports = {
    name:'play',
    aliases: ['p'],
  execute: async(message,args, cmd, client, discord) => {
    if(!message.guild) return;
    if(!message.member.voice.channel) return message.reply('Please join a voice channel');
    const music = args.join(" ")
    if (!music) return message.channel.send(`⚠| Please enter a song url or query to search.`)
    await client.distube.play(message, music)
  }
}