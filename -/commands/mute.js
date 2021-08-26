const  { MessageEmbed } = require('discord.js');
const ee = require("../embed.json"); 
const config = require('../config.json');

module.exports = {
  name: "mute",
  description: "mute",
  execute: async (message,args, cmd, client, discord) => {
    if (message.deletable) message.delete();
    if(!message.guild) return;
    if (!message.member.hasPermission('MANAGE_ROLES', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("\```please mention the members for mute\```");
    }
    if (user.id === message.author.id) {
      return message.channel.send("I can't mute you because you are message author");
    }
    let reason = args.slice(1).join("");

    if (!reason) {
      return message.channel.send(" \``` please give some  reason for mute\``` ");
    }

    const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name === "mute");
    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');

    if (!muterole) {
      return message.channel.send("\```please create role name with mute \``` ");
    }
    await user.roles.remove(vrole);
    channels.forEach(async(c) => {
      await c.updateOverwrite(muterole, { SEND_MESSAGES: false, SPEAK: false })
    })
    await user.roles.add(muterole);

    await message.channel.send(
      `you muted ${message.mentions.users.first().username} for ${reason}`
    );

    user.send(`You got muted in ${message.guild} for ${reason}`
    );
  }
};