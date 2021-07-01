const config = require("../config.json");
module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message,args, cmd, client, discord){
      if (!message.member.hasPermission('KICK_MEMBERS','ADMINISTRATOR', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
      const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .ban({ days: 7, reason: 'bye' })
              .then(() => {
                message.reply(`Successfully banned ${user.tag}`);
              })
              .catch(err => {
                message.reply('I was unable to ban the member');
                console.error(err);
              });
          } else {
            message.reply("That user isn't in this guild!");
          }
        } else {
          message.reply("You didn't mention the user to ban!");
        }
    }
  }