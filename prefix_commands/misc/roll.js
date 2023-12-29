module.exports = {
    name: 'roll',
    description: "this rolls a number from 1 - 100",
    async execute(message, args, cmd, client, Discord) {
        let random = Math.floor(Math.random() * 100) + 1;
        message.reply(`you rolled a ${random}!`)
    }
}