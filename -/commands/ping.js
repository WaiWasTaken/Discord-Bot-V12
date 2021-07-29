module.exports = {
  name: 'ping',
  aliases: [],

  execute(message,args, cmd, client, discord) {
      message.channel.send(` **${client.ws.ping}ms** `);
  },
};