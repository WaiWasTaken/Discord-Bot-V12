const config = require("../config.json");
module.exports = {
  name: 'say',
  description: 'When someone types ",say[message]" the bot says the message',
  async execute(message,args, cmd, client, discord) {
    if(!message.guild) return;
    if (!message.member.hasPermission('ADMINISTRATOR', { checkAdmin: true, checkOwner: true }) && message.author.id !== config.ownerID) return message.reply('You cannot use this command!')
      var sayMessage = message.content.substring(4)
      message.delete().catch(O_o=>{});
      if(sayMessage.length === 0) {
          message.channel.send("Sorry i can'y send an empty message");
      } else {
          message.channel.send(sayMessage);
      }
  }
}