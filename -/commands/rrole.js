const ee = require("../embed.json");
const Discord = require('discord.js');
const  { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'rrole',
    description: "Sets up a reaction role message!",
    async execute(message,args, cmd, client, discord) {
        if(!message.guild) return;
        if (message.deletable) message.delete();
        const channel = '871742114906652682';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "«Csgo»");
 
        const yellowTeamEmoji = '🔵';
 
        let embed = new Discord.MessageEmbed()
            .setColor(ee.color)
            .setTitle('Kliknite na emoji če igrate `CSGO`')
            .setTimestamp()
            .setFooter(ee.footertext)
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
} 