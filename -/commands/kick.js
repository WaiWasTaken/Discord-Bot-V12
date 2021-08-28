const config = require("../config.json");
const ee = require("../embed.json");
const Discord = require('discord.js');
const { Client } = require("discord.js-commando");
module.exports = {
    name: "kick",
    description: "kick command",

    async execute (message,args, cmd, client, discord) {
    if(!message.guild) return;
      if (!message.member.hasPermission('KICK_MEMBERS','ADMINISTRATOR', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
      if (message.deletable) message.delete();

        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "No reason given";

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`You were kicked from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor(ee.color)
        .setTimestamp()
        .setFooter(ee.footertext)

        if (!args[0]) return message.channel.send("You need to specify a user to kick");

        if(!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

        if(!mentionMember.kickable) return message.channel.send("I was unable to kick this user!");


        try {
            await mentionMember.send(kickembed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send("I was unabe to kick this user! Sorry...")
        }
    }
}

