const  { MessageEmbed } = require('discord.js');
const ee = require("../embed.json"); 
const config = require('../config.json');

module.exports = {
  name: "unmute",
  description: "unmute",
  execute: async (message,args, cmd, client, discord) => {
    if (message.deletable) message.delete();
    if(!message.guild) return;
    if (!message.member.hasPermission('MANAGE_ROLES', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("\```please mention the member to unmute\```");
    }

    const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name === "mute");
    
    if (user.roles.cache.has(muterole)) {
        return message.channel.send("Given User do not have mute role so what i am suppose to take");
    }

    await user.roles.remove(muterole);

    await message.channel.send(
      `you unmuted ${message.mentions.users.first().username} for ${reason}`
    );

    user.send(`You are now unmuted from **${message.guild.name}**`);
  }
};