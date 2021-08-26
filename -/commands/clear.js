const config = require("../config.json");
const ee = require("../embed.json");
const  { MessageEmbed } = require('discord.js');
module.exports = {
    name:'clear',
    description: "this is a clear command",
    aliases: ["purge", "nuke"],
  async execute (message,args, cmd, client, discord) {
    if (!message.member.hasPermission('MANAGE_MESSAGES', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
    if(!message.guild) return;

  // Check if args[0] is a number
  if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message.reply("Yeah.... That's not a numer? I also can't delete 0 messages by the way.").then(m => m.delete(5000));
  }
  let deleteAmount;

  if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
  } else {
      deleteAmount = parseInt(args[0]);
  }

  message.channel.bulkDelete(deleteAmount, true)
      .then(deleted => message.channel.send(`Successfully Deleted ${deleteAmount} Messages.`).then(m => m.delete({timeout: 5000})))
      .catch(err => message.reply(`Something went wrong... ${err}`));
	}
}
  
 



// You can only delete the messages which are not older than 14 days.

