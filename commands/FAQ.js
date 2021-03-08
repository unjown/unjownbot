const Discord = require('discord.js');  
const prefix = "lol"

const exp = new Discord.MessageEmbed()
    .setTitle('What is the purpose of my exp?')
    .setColor('#ffB35c')
    .addFields(
        {name: 'exp' , value: 'exp is used to convert to <:Ax:789661633214676992>(Ax)'},
        {name: 'Ax' , value: 'you may use your to buy effects'},
        {name: 'how to buy effects' , value: 'type w?buyeffects in <#785543837116399637>'},
    )

const effects = new Discord.MessageEmbed()
    .setTitle('how to buy effects?')
    .setColor('#ffB35c')
    .addFields(
        {name: 'how to buy effects' , value: 'type w?buyeffects in <#785543837116399637>'},
    )
    
const register = new Discord.MessageEmbed()
    .setTitle('HOW TO REGISTER')
    .setColor('#ffB35c')
	.addFields(
    {name: 'STEP 1', value: 'type /register in game and remember your pin'},
    {name: 'STEP 2', value: 'type a?register XXXX(your pin) in <#791886317491191818>'}, 
    )

const earn = new Discord.MessageEmbed()
    .setTitle('How do i earn more Ax?')
    .setColor('#ffB35c')
    .addFields(
        {name: 'Giveaways', value: 'join giveaways in '},
        {name: 'bounty/contribute', value: 'see list of bounties in '},
        {name: 'play', value: 'play more to earn exp which can be converted to Ax'},
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
    }else
    
    if(message.content.startsWith(prefix + ' map')){
        message.channel.send('type a?postamp with map file in <#785543837116399637>')
    }else 

    if(message.content.startsWith(prefix + ' earn')){
        message.channel.send(earn)
    }
        return 
};