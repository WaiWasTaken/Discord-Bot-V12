const  { MessageEmbed } = require('discord.js');
const ee = require("../embed.json");
module.exports = {
    name: "embed",
    aliases: ["say-embed"],
    cooldown: 2,
    description: "Resends a message from u as an Embed",
    async execute(message,args, cmd, client, discord) {
      if(!message.guild) return;
      try{
      if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext)
            .setTitle(`ERROR | You didn't provided a Title, nor a Description`)
            .setDescription(`Usage: \`-embed <TITLE> ++ <DESCRIPTION>\``)
        );
      let userargs = args.join(" ").split("++");
      let title = userargs[0];
      let desc = userargs.slice(1).join(" ")
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(ee.footertext)
        .setTitle(title ? title : "")
        .setDescription(desc ? desc : "")
      )
    } catch (e) {
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext)
            .setTitle(`ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
      );
    }
  }
}