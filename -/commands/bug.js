const Discord = require('discord.js');
const  { MessageEmbed } = require('discord.js');
const { prefix } = require('../config.json')
const ee = require("../embed.json");

module.exports = {
    name: "bug",
    cooldown: 6,
    description: "feedback a bug (private message)",

    async execute (message,args, cmd, client, discord) {
        if (message.deletable) message.delete();
        if(!args[0]) return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setAuthor('Please specify a bug 🐞')
        );

        message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setTimestamp()
            .setFooter("Bug was reported to the developer🐞")
            .setAuthor("Issue was reported to the developer")
            .setDescription("note fake bug reports will result in punishment")
        );
        client.users.fetch('507110206975639552', false).then((user) => {
            user.send(ps)
        });
    
        const ps = new Discord.MessageEmbed()
        .setColor(ee.color)
        .setAuthor(` Bug ||  ${message.content.slice(prefix.length).split(/ +/)} `)
        .setTimestamp() 
        .addFields(
            { name: `${message.author.username} of ${message.guild.name}`, value: `Guild ID: ${message.guild.id}, User ID: ${message.author.id}` },
        )    
    
    }
}




//  (`${message.author.username} of ${message.guild.name} (Guild ID: ${message.guild.id}, User ID: ${message.author.id}) reported the bug: ${message.content.slice(prefix.length).split(/ +/)}`)

//client.users.fetch('487904509670337509', false).then((user) => {
// user.send('hello world');
//});
