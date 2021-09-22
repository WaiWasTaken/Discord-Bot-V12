const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config(); 
const fs = require('fs');
const distube = require('distube');
const  { MessageEmbed } = require('discord.js');
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);


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

// https://discordjs.guide/command-handling/adding-features.html#guild-only-commands

// https://github.com/Khanmanan/automod-bot

// https://top.gg/bot/762243627274993665

   

client.distube = new distube(client, { searchSongs:false, emitNewSongOnly:true})
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(new MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle(`Now playing`)
        .setDescription(`${song.name} [ <@${message.author.id}> ]`)
        .setFooter('Wai | powered by idiots')
        .setTimestamp()
    ))
    .on("addSong", (message, queue, song) => message.channel.send(new MessageEmbed()
        .setColor('#FFFFFF')
        .setAuthor(`Queued ${song.name}  [ <@${message.author.id}> ]`)
        .setFooter('Wai | powered by idiots')
        .setTimestamp()
    ))  
    .on("playList", (message, queue, playlist, song) => message.channel.send(new MessageEmbed()
        .setColor('#FFFFFF')
        .setAuthor(`Playing ${playlist.name}`)
        .setTimestamp()
        .setFooter('Wai | powered by idiots')
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(new MessageEmbed()
        .setColor('#FFFFFF')
        .setAuthor(`Added ${playlist.name} to playlist`)
        .setTimestamp()
        .setFooter('Wai | powered by idiots')
    ))
    .on("error", (message, err) => message.channel.send(new MessageEmbed()
        .setColor('#FFFFFF')
        .setAuthor('Sorry an error occurred please pick difrent song or playlist')
        .setTimestamp()
        .setFooter('Wai | powered by idiots')
    ))
    