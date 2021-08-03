const { MessageEmbed } = require("discord.js");
const ee = require("../embed.json");
module.exports = {
  name: 'ping',
  aliases: [],

  execute(message,args, cmd, client, discord) {
    if(!message.guild) return;
    if (message.deletable) message.delete();
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setAuthor(`${client.ws.ping}ms`)
        .setTimestamp()
        .setFooter(ee.footertext)
      );
  },
};