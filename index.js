require('dotenv/config')
const TOKEN = process.env.TOKEN
const Discord = require('discord.js');
const express = require('express');
const { Collection } = require('discord.js');
const app = express();
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers
  ]
});

client.prefix_commands = new Collection();
client.slash_commands = new Collection();
client.no_prefix_command = new Collection();
client.aliases = new Collection();
for(let handler of  ["slash_command", "prefix_command", "event"]) require(`./handlers/${handler}`)(client, Discord, app);
client.login(TOKEN);

client.on('messageCreate', message =>{
  if(message.author.bot) return;
  if(message.content.includes('vote')){
    message.reply(`Server Vote: https://top.gg/servers/1130130855378030645?s=0feaaf94a064c Read the perks at, <#1131953575765999818> ⁠`)
  } else if (message.content.includes('ticket')) {
    message.reply(`You can make a ticket at <#1185614551849385994>
Make it only if you won something, dont make useless tickets.`)
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('server started');
});