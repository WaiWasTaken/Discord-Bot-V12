const Discord = require('discord.js');
const  { MessageEmbed } = require('discord.js');
const ee = require("../embed.json");

module.exports = {
    name:'play',
    aliases: ['p'],
  execute: async(message,args, cmd, client, discord) => {
    if(!message.guild) return;
    if (message.deletable) message.delete();
    if(!message.member.voice.channel) return message.channel.send(new MessageEmbed()
      .setColor(ee.color)
      .setAuthor('Please join a voice channel')
      .setTimestamp()
      .setFooter(ee.footertext)
    )
    const music = args.join(" ")
    if (!music) return message.channel.send(new MessageEmbed
      .setColor(ee.color)
      .setAuthor('Please enter a song url or query to search')
      .setTimestamp()
      .setFooter(ee.footertext)
    )
    await client.distube.play(message, music)
  }
}
