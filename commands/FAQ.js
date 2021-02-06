const Discord = require('discord.js');  
const prefix = "lol"

const exp = new Discord.MessageEmbed()
    .setTitle('What is the purpose of my exp?')
    .addFields(
        {name: 'exp' , value: 'you may convert you exp to <:Ax:789661633214676992>'},
        {name: '<:Ax:789661633214676992>' , value: 'you may use your to buy effects'},
        {name: 'how to buy effects' , value: 'type w?buyeffects in <#785543837116399637>'},
    )

const effects = new Discord.MessageEmbed()
    .setTitle('how to buy effects?')
    .addFields(
        {name: 'how to buy effects' , value: 'type w?buyeffects in <#785543837116399637>'},
    )
    
const register = new Discord.MessageEmbed()
	.setTitle('HOW TO REGISTER')
	.addFields(
    {name: 'STEP 1', value: 'type /register in game and the your pin'},
    {name: 'STEP 2', value: 'type a?register XXXX(your pin) in <#791886317491191818>'}, 
    )

module.exports = async (message) => {
    if (message.author.bot) return;

    if(message.content.startsWith('lol exp')){
    message.channel.send(exp)
    }else
              
    if(message.content.startsWith(prefix + ' register')){
        message.channel.send(register)
    }else
    
    if(message.content.startsWith(prefix + ' effects')){
        message.channel.send(effects)
    }else return 
};