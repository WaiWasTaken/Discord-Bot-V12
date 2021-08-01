const config = require("../config.json");
const Discord = require('discord.js');
const ee = require("../embed.json");
module.exports = {
    name: "ban",
    description: "ban command",

    async execute (message,args, cmd, client, discord) {
      if(!message.guild) return;  
      if (!message.member.hasPermission('BAN_MEMBERS','ADMINISTRATOR', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
      if (message.deletable) message.delete();

        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" "); //.ban <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "No reason given";

        const embed = new Discord.MessageEmbed()
        .setTitle(`You were banned from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor(ee.color)
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("You need to specify a user to ban");

        if(!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

        if(!mentionMember.bannable) return message.channel.send("I was unable to ban this user!");

        await mentionMember.send(embed);
        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send("Successfully banned: " + mentionMember.user.tag));
    }
} 