const Discord = require('discord.js');  
const prefix = "lol"

const register = new Discord.MessageEmbed()
    .setTitle('HOW TO REGISTER')
    .setColor('#ffB35c')
	.addFields(
    {name: 'STEP 1', value: 'type /register in game and remember your pin'},
    {name: 'STEP 2', value: 'type a?register XXXX(your pin) in <#791886317491191818>'}, 
    )


module.exports = async (message) => { 
    if (message.author.bot) return;

    if(message.content.toLowerCase().includes('how' && 'register')){
        message.channel.send(register)
    }

};