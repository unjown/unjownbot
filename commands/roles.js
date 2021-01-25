const Discord = require('discord.js');  

module.exports = async (message) => {
    if (message.author.bot) return;
          if (message.content.startsWith('lol admin')){
        message.channel.send('**Responsibility:**  Moderate Discord/Mindusrty \n **Perks:** kicking and banning (and some exclusive channels)')
      }else
    
      if(message.content.startsWith('lol mod')){
        message.channel.send('**RESPONSIBILITY: Moderate Discord/Mindsutry** \n **Perks:** Kicking griefers easily \n **Requirement:** Responsible')
      }else
    
      if(message.content.startsWith('lol dev')){
        message.channel.send('**RESPONSIBILITY:** Make plugins \n **Perks:** Bounty and maybe some help on your projects \n **Requirement:** Knows how to make plugins')
      }else
    
      if(message.content.startsWith('lol des')){
        message.channel.send('**RESPONSIBILITY:** make designs for discord(banner logos etc.)\n **Perks:** Bounty \n **Requirement:** good at making logo/banners')
      }else
      
      if(message.content.startsWith('lol vid')){
          message.channel.send('**RESPONSIBILITY:** make trailers or short clips for server \n **PERKS:** Bounty and sneak peak of pre-release content"')
      }else return;
};