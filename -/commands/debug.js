const Discord = require('discord.js');
const  { MessageEmbed } = require('discord.js');
const ee = require("../embed.json");
const config = require("../config.json");
module.exports = {
    name: 'debug',
    aliases: [],

   async execute(message,args, cmd, client, discord) {
    if (message.author.id !== config.ownerID) return message.channel.send(new MessageEmbed()
      .setColor(ee.wrongcolor)
      .setAuthor('That command can only be run by the owner of this bot')
      .setTimestamp()
     );
        message.channel.send(new MessageEmbed()
           .setColor(ee.color)
           .setAuthor(`${client.user.username} connected in ${client.voice.connections.size} channels`)
           .setTimestamp()
       );
    }
}


// ${client.user.username} connected in **${client.voice.connections.size}** channels