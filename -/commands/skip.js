module.exports = {
    name:'skip',
    aliases: [],
  execute: async(message,args, cmd, client, discord) => {
    if(!message.guild) return;
    if(!message.member.voice.channel) return message.reply('⚠| Please join a voice channel');
    await client.distube.skip(message)
    await message.channel.send('⚠| Skipped current song')
  }
}