const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!\n https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
});

client.on('message', msg => {
  if (msg.content === 'suicide') {
    msg.reply('Suicide is never the answer! Please talk to someone about it!');
  }
  if (msg.content === 'avatar') {
    msg.reply(msg.author.avatarURL);
  }
  if (msg.content === 'hi') {
    msg.channel.send('Hello! :smile:');
  }
  if (msg.content === 'hello') {
    msg.channel.send('Hello! :smile:');
  }
});

client.login('token');
