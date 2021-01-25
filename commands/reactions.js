const Discord = require('discord.js');

module.exports = async (message) => {
    if (message.author.bot) return;
    if(message.content.includes('lol')){
        message.react('786876427311251466')
    }else
        
    if(message.content.includes('soon')){
        message.react('<:soon:787885480896495636>')
    }else
        
    if(message.content.startsWith('yikes')){
        message.react('<:yikes:788628712244903937>')
    }else
        
    if(message.content.startsWith('oh yes')){
        message.react('<:ohyes:788779214140080138>')
    }else
        
        if(message.content.startsWith('oh no')){
        message.react('<:ohno:786866841539575808>')
    }else
        
        if(message.content.startsWith('Ax')){
        message.react('<:Ax:789661633214676992>')
    }else
        
        if(message.content.startsWith('thoncc')){
        message.react('<:thoncc:786876428230197249>')
    }else
        
        if(message.content.startsWith('pog')){
        message.react('<:pog2:787158994594431008>')
    }else
        
        if(message.content.startsWith('feels bad man')){
        message.react('<:feelsbadman:789511704777064469>')
    }else    
    
    return;
};