module.exports = {
    name:'myping',
    description: "Text",
    aliases: [],
  async execute (message,args, cmd, client, discord) {
   const ping = client.ws.ping
    message.channel.send(`${ping} ms`)
  }
}