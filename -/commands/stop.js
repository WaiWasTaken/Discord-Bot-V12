module.exports = {
    name:'stop',
    aliases: [],
  execute: async(message,args, cmd, client, discord) => {
    if(!message.guild) return;
    if(!message.member.voice.channel) return message.reply('⚠| Please join a voice channel');
    await client.distube.stop(message)
    await message.channel.send('⚠| Stopped playing')
  }
}