const Discord = require('discord.js');  
module.exports = async (message, client) => {
    if (message.author.bot) return;

    // hewp me its bugged line 6-7 
	if (message.mentions.has(client.user)) {
	message.channel.send('make sure this important or else.... lol')
    }else
        
	if (message.content.includes('<@612861256189083669>')){
        message.channel.send(' be careful of pinging this person, abusing ping will result in a warn.')
    }else return; 
} ;
