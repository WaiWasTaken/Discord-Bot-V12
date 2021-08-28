const config = require("../config.json");
const ee = require("../embed.json");
const  { MessageEmbed } = require('discord.js');
module.exports = {
    name:'clear',
    description: "this is a clear command",
    aliases: ["purge", "nuke"],
  async execute (message,args, cmd, client, discord) {
    if (message.deletable) message.delete();
    if (!message.member.hasPermission('MANAGE_MESSAGES', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
    if(!message.guild) return;

  // Check if args[0] is a number
  if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
		return message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setAuthor(`${message.author.username}, Yeah... That's not a numer`)
            .setTitle(" I also can't delete 0 messages by the way")
            .setTimestamp()
            .setFooter(ee.footertext)
         ).then(msg => {
           msg.delete({ timeout: 3000});
         })
  }
  let deleteAmount;

  if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
  } else {
      deleteAmount = parseInt(args[0]);
  }

  message.channel.bulkDelete(deleteAmount, true)
      .catch(err => message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setAuthor('Sorry i cannot delete messages older than 14 days')
        .setTimestamp()
        .setFooter(ee.footertext)
      ).then(m => m.delete({timeout: 5000})))
	}
}
  