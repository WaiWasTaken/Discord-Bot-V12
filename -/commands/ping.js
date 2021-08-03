module.exports = {
  name: 'ping',
  aliases: [],

  execute(message,args, cmd, client, discord) {
    if (message.deletable) message.delete();
      message.channel.send(` **${client.ws.ping}ms** `);
  },
};