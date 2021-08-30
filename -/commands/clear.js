const config = require("../config.json");
const Discord = require('discord.js');
const ee = require("../embed.json");
const  { MessageEmbed } = require('discord.js');

module.exports = {
	name: "clear",
	description: "Clear an amount of messages",
	async execute(message,args, cmd, client, discord) {
		if (message.deletable) message.delete();
		if(!message.guild) return;  
		if (!message.member.hasPermission('MANAGE_MESSAGES', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
		const amount = args[0];

		if (!amount || isNaN(amount))
			return message.reply(`${amount == undefined ? "Nothing" : amount} is not a valid number!`);

		const amountParsed = parseInt(amount);

		if (amountParsed > 100)
			return message.reply("You cannot clear more than 100 messages!");

		message.channel.bulkDelete(amountParsed, true)
		.catch(err => message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setAuthor('Sorry i cannot delete messages older than 14 days')
        .setTimestamp()
        .setFooter(ee.footertext)
      ).then(m => m.delete({timeout: 5000})))

		const msg = await message.channel.send(new  MessageEmbed()
			.setColor(ee.color)
			.setAuthor(`Cleared ${amountParsed} messages`)
			.setTimestamp()
			.setFooter(ee.footertext)
		)
		setTimeout(() => msg.delete(), 1000);
	}
};
// Cleared ${amountParsed} messages