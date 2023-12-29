module.exports = {
    name: 'ping',
    description: "this tells the ping of the bot",
    async execute(message, args, cmd, client, Discord) {
        message.reply('pong!').then(msg => {
            msg.edit(`pong! 
ping: **${msg.createdTimestamp - message.createdTimestamp} ms**
            `)
          })
    }
}