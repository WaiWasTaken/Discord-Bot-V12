const Discord = require('discord.js');
const  { MessageEmbed } = require('discord.js');
const ee = require("../embed.json");
 
module.exports = {
    name: "queue",
    aliases: ["q"],
    execute: async (message,args, cmd, client, discord) => {
      if (message.deletable) message.delete();
        if(!message.guild) return;
        if(!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setAuthor('Please join a voice channel')
        .setTimestamp()
        .setFooter(ee.footertext)
      )
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new MessageEmbed()
          .setColor(ee.color)
          .setAuthor('There is nothing playing')
          .setTimestamp()
          .setFooter(ee.footertext)
        )
        const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        message.channel.send(new MessageEmbed()
          .setColor(ee.color)
          .setAuthor('Server Queue')
          .setTitle(`${q}`)
          .setTimestamp()
          .setFooter(ee.footertext)
        )
    }
}