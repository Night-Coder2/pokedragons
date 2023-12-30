

module.exports = {
    name: 'help',
    description: "this is a help command",
    async execute(message, args, cmd, client, Discord = require('discord.js')) {
        const embed = new Discord.EmbedBuilder()
        .setTitle('Help')
        .setColor('#00FF00')
        .setDescription('This is a help command!')
        .addFields(
            {name: '!!ping', value: 'This tells the ping of the bot'},
            {name: '!!roll', value: 'This rolls a number from 1 - 100'},
            {name: 'vote', value: 'This creates a vote'},
            {name: 'ticket', value: 'This creates a ticket'}
        )
        message.channel.send({embeds: [embed]})
    }
}