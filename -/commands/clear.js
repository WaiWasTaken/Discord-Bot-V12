const config = require("../config.json");
const ee = require("../embed.json");
const  { MessageEmbed } = require('discord.js');
module.exports = {
    name:'clear',
    description: "this is a clear command",
    aliases: [],
  async execute (message,args, cmd, client, discord) {
    if (!message.member.hasPermission('MANAGE_MESSAGES', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
    if(!message.guild) return;
    const amount = args[0];

		if (!amount || isNaN(amount))
			return message.channel.send(new MessageEmbed()
                .setColor(ee.color)
                .setAuthor('Please type a real number')
                .setTimestamp()
                .setFooter(ee.footertext)
            )
		const amountParsed = parseInt(amount);
		if (amountParsed > 100)
			return message.channel.send(new MessageEmbed()
                .setColor(ee.color)
                .setAuthor('You cannot clear more than 100 messages')
                .setTimestamp()
                .setFooter(ee.footertext)
            );
		message.channel.bulkDelete(amountParsed + 1);
		const msg = await message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setAuthor(`Cleared ${amountParsed} messages`)
            .setTimestamp()
            .setFooter(ee.footertext)
        )

		setTimeout(() => msg.delete(), 800);
	}
}
  
 



// You can only delete the messages which are not older than 14 days.

