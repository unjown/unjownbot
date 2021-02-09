const Discord = require('discord.js');  
const prefix = "lol"

const admin = new Discord.MessageEmbed()
.setColor('#0099ff')
.setColor('#ffB35c')
.setTitle('ADMIN')
.addFields(
  {name: '**Responsibility:**' , value: 'Moderate Discord/Mindusrty'
  }
) 

const mod = new Discord.MessageEmbed()
.setColor('#0099ff')
.setColor('#ffB35c')
.setTitle('MODERATOR')
.addFields(
  {name: '**RESPONSIBILITY:**', value: 'Moderate Discord/Mindsutry'
  }
) 

const dev = new Discord.MessageEmbed()
.setColor('#0099ff')
.setColor('#ffB35c')
.setTitle('Developer Roles')
.addFields(
  {name: 'Java', value:'**Responsibility:** help improve/create plugins'},
  {name: 'Python', value:'**Responsibility:** help improve watermelonbot by Alex'},
  {name: 'Javascript', value:'**Responsibility:** help improve unjownbot by Unjown'}
  ) 


const des = new Discord.MessageEmbed()
.setColor('#ffB35c')
.setTitle('DESIGNER')
.addFields(
  {name: '**Responsibility:**', value: 'make banner, design stuff'
  }
) 

const vid = new Discord.MessageEmbed()
.setColor('#ffB35c')
.setTitle('Video editor')
.addFields( 
  {name: '**Responsibility:**', value: 'help edit videos'
  }
) 

module.exports = async (message) => {
    if (message.author.bot) return;
          if (message.content.startsWith(prefix + ' admin')){
        message.channel.send(admin)
      }else
    
      if(message.content.startsWith(prefix + ' mod')){
        message.channel.send(mod)
      }else
    
      if(message.content.startsWith(prefix + ' dev')){
        message.channel.send(dev)
      }else
    
      if(message.content.startsWith(prefix + ' des')){
        message.channel.send(des)
      }else
      
      if(message.content.startsWith(prefix + ' vid')){
          message.channel.send(vid)
      }else return;
};
