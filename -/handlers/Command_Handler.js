const { Client } = require('discord.js');
const fs = require('fs');
module.exports = (Client, discord) =>{
    const command_flies = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for (const file of command_flies){
        const command = require(`../commands/${file}`);
        if(command.name){
            Client.commands.set(command.name, command)
        }  else {
            continue;
        }
    }
}