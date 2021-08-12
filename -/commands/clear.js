const config = require("../config.json");
const ee = require("../embed.json");
const  { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async execute(message,args, cmd, client, discord) {
    if(!message.guild) return;
    if (message.deletable) message.delete();
    if (!message.member.hasPermission('KICK_MEMBERS','ADMINISTRATOR', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
        if (!args[0]) return message.reply("Please enter the amount of messages to clear!");
 
        if(isNaN(args[0])) return message.reply("Please type a real number!");
 
        if(args[0] > 100) return message.reply("You can't remove more than 100 messages!");
        
        if(args[0] < 1) return message.reply("You have to delete at least one message!");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        .then().catch(e => {
            message.channel.send(new MessageEmbed()
                .setColor(ee.color)
                .setAuthor('You can only delete the messages which are not older than 14 days')
                .setTimestamp()
                .setFooter(ee.footertext)
            )
        })    
    }); 
 }
}  

// You can only delete the messages which are not older than 14 days.


