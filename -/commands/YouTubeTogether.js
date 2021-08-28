const ee = require("../embed.json");
const  { MessageEmbed } = require('discord.js');

module.exports = {
    name:'yt',
    description: "YoutubeTogether",
    aliases: [],
  async execute (message,args, cmd, client, discord) {
    if (message.deletable) message.delete();
    if(!message.guild) return;
    if(!message.member.voice.channel) return message.channel.send(new MessageEmbed()
    .setColor(ee.color)
    .setAuthor('Please join a voice channel')
    .setTimestamp()
    .setFooter(ee.footertext)
  )
   {
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
            return message.channel.send(new MessageEmbed()
                .setColor(ee.color)
                .setTitle(`${invite.code}`)
                .setTimestamp()
                .setFooter(ee.footertext)
            ).then(msg => {
                msg.delete({ timeout: 5000});
            })   
        });
    }
  }
}

// return message.channel.send(`${invite.code}`);
// ${invite.code}