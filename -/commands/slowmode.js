const config = require("../config.json");
module.exports = {
    name: "slowmode",
    description: "Lets you set slowmode on the channel.",
    execute: async(message,args, cmd, client, discord) => {
      const amount = parseInt(args[0]);
      if(!message.guild) return;
      if (message.deletable) message.delete();
      if (!message.member.hasPermission('MANAGE_CHANNEL', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
        if (isNaN(amount))
          return message.channel.send(`${args[0]} is not a valid number`);
      if (args[0] === amount + "s") {
        message.channel.setRateLimitPerUser(amount);
        if (amount > 1) {
          message.channel.send("slowmode is now " + amount + " seconds");
          return;
        } else {
          message.channel.send("slowmode is now " + amount + " second");
          return;
        }
      }
      if (args[0] === amount + "min") {
        message.channel.setRateLimitPerUser(amount * 60);
        if (amount > 1) {
          message.channel.send("slowmode is now " + amount + " minutes");
          return;
        } else {
          message.channel.send("slowmode is now " + amount + " minute");
  
          return;
        }
      }
      if (args[0] === amount + "h") {
        message.channel.setRateLimitPerUser(amount * 60 * 60);
       // if (amount < 24) return message.channel.send('sorry but you cannot set more than 24h')
        if (amount > 1) {
          message.channel.send("slowmode is now " + amount + " hours");
          return;
        } else {
          message.channel.send("slowmode is now " + amount + " hour");
          return;
        }
      } else {
        message.channel.send(
          "You can only set seconds(s), minutes(min) and hours(h)"
        );
      }
    }
  };