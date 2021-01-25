const Discord = require('discord.js');  
module.exports = async (message) => {
    if (message.author.bot) return;
	if (message.content.includes('<@739697580216418324>')) {
	message.channel.send('make sure this important or else.... lol')
    }else
        
	if (message.content.includes('<@612861256189083669>')){
        message.channel.send(' be careful of pinging this person, abusing ping will result in a warn.')
    }else return; 
} ;