const Discord = require('discord.js');
const  { MessageEmbed } = require('discord.js');
const ee = require("../embed.json");

module.exports = {
    name: "volume",
    aliases: ["v", "set", "set-volume"],
    inVoiceChannel: true,
    execute: async (message,args, cmd, client, discord) => {
        if(!message.guild) return;
        if (message.deletable) message.delete();
        if(!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setAuthor('Please join a voice channel')
        .setTimestamp()
        .setFooter(ee.footertext)
      )
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setAuthor('There is nothing in the queue right now')
            .setTimestamp()
            .setFooter(ee.footertext)
        );
        if(args[0] > 100) return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setAuthor("You can't set volume more than 100")
            .setTimestamp()
            .setFooter(ee.footertext)	
        )
        if(args[0] < 1) return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setAuthor('You have to set music at least to 1')
            .setTimestamp()
            .setFooter(ee.footertext)
        )
        const volume = parseInt(args[0])
        if (isNaN(volume)) return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setAuthor('Please enter a valid number')
            .setTimestamp()
            .setFooter(ee.footertext)
        )

        const embVolume = new discord.MessageEmbed()
        .setColor(ee.color)
        .setTitle(`Volume set to ${volume}`)
        .setTimestamp()
        .setFooter(ee.footertext)

        client.distube.setVolume(message, volume)
        message.channel.send(embVolume)
    }
}