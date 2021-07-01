const config = require("../config.json");
module.exports = {
  name: 'kick',
  description: "this is a kick command!",
  execute(message,args, cmd, client, discord){
    if (!message.member.hasPermission('KICK_MEMBERS','ADMINISTRATOR', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
    const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Bye')
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to kick the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to kick!");
      }
  }
}

