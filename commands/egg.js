const Discord = require('discord.js');  
module.exports = async (message) => {
    if (message.author.bot) return;if(message.content.toLowerCase().includes("egg")){
		message.react('🥚');
    }
};