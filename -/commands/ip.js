const Discord = require('discord.js');
const  { MessageEmbed } = require('discord.js');
const { config } = require('dotenv');
const { prefix } = require('../config.json')
const ee = require("../embed.json");
const { ip } = require('../config.json')

module.exports = {
    name: "ip",
    cooldown: 6,

    async execute (message,args, cmd, client, discord) {
        if (message.deletable) message.delete();
        if(!args[0]) return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setAuthor('Please specify a server ip')
        );

        client.users.fetch(ip.Mitja).then((user) => {
            user.send(ps)
        });
        client.users.fetch(ip.Jan).then((user) => {
            user.send(ps)
        });
        client.users.fetch(ip.Anže).then((user) => {
            user.send(ps)
        });
        client.users.fetch(ip.Alekso).then((user) => {
            user.send(ps)
        });
    
        const ps = new Discord.MessageEmbed()
        .setColor(ee.color)
        .setAuthor(` SERVER IP ||  ${message.content.slice(prefix.length).split(/ + / )}`)
        .setTimestamp()     
    
    }
}



