const Discord = require('discord.js');  
const prefix = "lol"

const admin = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('ADMIN')
.addFields(
  {name: '**Responsibility:**  Moderate Discord/Mindusrty'
  }
) 

const mod = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('MODERATOR')
.addFields(
  {name: '**RESPONSIBILITY: Moderate Discord/Mindsutry**'
  }
) 

const javadev = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('Java dev')
.addFields(
  {name: '**Responsibility:**', value:'help improve/make plugins '
  }
) 

const pyadev = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('py dev')
.addFields(
  {name: '**Responsibility:**' , value:'help improve watermelonbot '
  }
) 

const jsdev = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('js dev')
.addFields(
  {name: '**Responsibility:**' , value: 'help improve me '
  }
) 

const des = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('DESIGNER')
.addFields(
  {name: '**Responsibility:**', value: 'make banner, design stuff'
  }
) 

const vid = new Discord.MessageEmbed()
.setColor('#0099ff')
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
        message.channel.send(javadev)
        message.channel.send(pyadev)
        message.channel.send(jsdev)
      }else
    
      if(message.content.startsWith(prefix + ' des')){
        message.channel.send(des)
      }else
      
      if(message.content.startsWith(prefix + ' vid')){
          message.channel.send(vid)
      }else return;
};