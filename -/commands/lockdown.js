const Discord = require('discord.js')
const config = require("../config.json");
const ee = require("../embed.json");

module.exports = {
        name: "lockdown",
        description: "lock server",
        aliases: [],

    execute: async (message,args, cmd, client, Discord) => {
        if(!message.guild) return;
        if (message.deletable) message.delete();
        let lockPermErr = new Discord.MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("You cannot use this command!")
        .setColor(ee.color)
        .setFooter(ee.footertext)
        
        if(!message.channel.permissionsFor(message.member).has("BAN_MEMBERS") ) return message.channel.send(lockPermErr);

        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                })
            })
            
            let lockEmbed = new Discord.MessageEmbed()
                .setColor(ee.color)
                .setAuthor(`Done! Server Fully Locked! 🔒`)
                .setFooter(ee.footertext)
            return message.channel.send(lockEmbed);

        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                })
            })
            
            let lockEmbed2 = new Discord.MessageEmbed()
                .setColor(ee.color)    
                .setAuthor(`Done! Server Fully Unlocked! 🔓`)
                .setFooter(ee.footertext)
            return message.channel.send(lockEmbed2)
        }
    }
}