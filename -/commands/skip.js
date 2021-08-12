const Discord = require('discord.js');
const  { MessageEmbed } = require('discord.js');
const ee = require("../embed.json");

module.exports = {
    name:'skip',
    aliases: [],
  execute: async(message,args, cmd, client, discord) => {
    if(!message.guild) return;
    if (message.deletable) message.delete();
    if(!message.member.voice.channel) return message.channel.send(new MessageEmbed()
      .setColor(ee.color)
      .setAuthor('Please join a voice channel')
      .setTimestamp()
      .setFooter(ee.footertext)
    )
    await client.distube.skip(message)
    await message.channel.send(new MessageEmbed()
      .setColor(ee.color)
      .setAuthor('Skipped current song')
      .setTimestamp()
      .setFooter(ee.footertext)
    )
  }
}