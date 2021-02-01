const Discord = require('discord.js');  
const prefix = "lol"
module.exports = async (message) => {
    if (message.author.bot) return;
          if (message.content.startsWith(prefix + ' admin')){
        message.channel.send('**Responsibility:**  Moderate Discord/Mindusrty \n **Perks:** kicking and banning (and some exclusive channels)')
      }else
    
      if(message.content.startsWith(prefix + ' mod')){
        message.channel.send('**RESPONSIBILITY: Moderate Discord/Mindsutry** \n **Perks:** Kicking griefers easily \n **Requirement:** Responsible')
      }else
    
      if(message.content.startsWith(prefix + ' dev')){
        message.channel.send('**RESPONSIBILITY:** Make plugins \n **Perks:** Bounty and maybe some help on your projects \n **Requirement:** Knows how to make plugins')
      }else
    
      if(message.content.startsWith(prefix + ' des')){
        message.channel.send('**RESPONSIBILITY:** make designs for discord(banner logos etc.)\n **Perks:** Bounty \n **Requirement:** good at making logo/banners')
      }else
      
      if(message.content.startsWith(prefix + ' vid')){
          message.channel.send('**RESPONSIBILITY:** make trailers or short clips for server \n **PERKS:** Bounty and sneak peak of pre-release content"')
      }else return;
};