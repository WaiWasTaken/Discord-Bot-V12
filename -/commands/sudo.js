module.exports = {
  name: "sudo",
  usage: "sudo <user> <message>",
  async execute(message,args, cmd, client, discord) {
    if(!message.guild) return;
    if (!message.member.hasPermission('MANAGE_WEBHOOKS')) {
            return message.channel.send('You cannot use this command!')}
    message.delete();
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Please provide a user!");
    const webhook = await message.channel.createWebhook(user.displayName, {
      avatar: user.user.displayAvatarURL(),
      channel: message.channel.id
    });
    await webhook.send(args.slice(1).join(" ")).then(() => {
      webhook.delete();
    });
  }
};
