const Discord = require('discord.js'); 
const client = new Discord.Client();
module.exports = async (message) => {
    if (message.author.bot) return;

    // hewp me its bugged line 6-7 
	if (message.mentions.has(client.users.cache.get("739697580216418324")) {
	message.channel.send('make sure this important or else.... lol')
    }else
        
	if (message.content.includes('<@612861256189083669>')){
        message.channel.send(' be careful of pinging this person, abusing ping will result in a warn.')
    }else return; 
} ;
