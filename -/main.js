const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config(); 
const fs = require('fs');
const disbut = require('discord-buttons')(client);
 
// https://www.npmjs.com/package/cool-ascii-faces

//-------------------------------------------------------------------
//                      Command & Event Handler      

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


//-------------------------------------------------------------------
//                            Auto Welcome Rule

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    const roleToAdd = member.guild.roles.cache.find(r => r.name === "«Member»");
    member.roles.add(roleToAdd);

    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    const wb = new Discord.MessageEmbed()
    .setColor('#FFFFFF')
    .setTitle('Welcome')
    .setDescription(`Welcome to the server ${member}`);
    channel.send(wb);
});




//-------------------------------------------------------------------


const config = require("./config.json");
client.login(process.env.TOKEN);

//-------------------------------------------------------------------
//                            Custom status

client.on("ready", () => {
    client.user.setActivity("my code", { type: "STREAMING", url: "https://www.twitch.tv/diamaster94" })
})

//-------------------------------------------------------------------


    
