const Discord = require('discord.js');  
const prefix = "lol"
const ruleEmbed = new Discord.MessageEmbed()
      .setTitle('RULES')  
      .setColor('#ffB35c')
      .addFields(
        {name: '1.', value: ' You are not allowed to grief, will result in a ban/kick. If you are modifying/rebuilding something let your teammates know. \n'},
        {name: '2.', value: ' NSFW is banned. Posting any nsfw content will result in an instant mute or in more extreme cases ban. \n'},
        {name: '3.', value: ' Being racist/sexist, begging people for money/:Ax:/roles, etc. Will result in a mute/warn. \n'},
        {name: '4.', value: ' Harassing others both on the chat and DM is banned and will result in a ban. \n'},
        {name: '5.', value: ' Do not spam on any chat, or try crashing the mindustry server, will result in mute/ban.\n'},
        {name: '6.', value: ' Pinging staff for no reason will result in a warn/mute.\n'},
        {name: '7.', value: ' Advertising without staff permission can result in a kick/ban.\n'},
        {name: '8.', value: 'Using incorrect channels for incorrect stuff (ex. using bot commands in #general) will result in a warn/mute.\n'},
        {name: '9.', value: 'This is an English server. Keep other languages in #『💬』off-topic. If you speak other languages, dont expect to be understood (unless the other person understands the same language.) (also, follow the rules)\n'},
        
      )
const commands = new Discord.MessageEmbed()
.setTitle('COMMANDS')
.setColor('#ffB35c')
.addFields(
  {name:'**GENERAL**', value: '`help`' + ' ' + '`rules`' + ' ' + '`gh(github)`' + ' ' + '`donate`' + ' ' + '`staff`' + ' ' + '`roles`'},
  {name:'**FAQ**', value: '`register`' + ' ' + '`earn`' + ' ' + '`exp`' + ' ' + '`effects`' + ' ' + '`map`'},
) 
const Vstaff = new Discord.MessageEmbed()
  .setTitle('Roles')
  .setColor('#ffB35c')
  .addFields(
    {name: 'Admin' ,value: 'type "lol admin" to view more info'},
    {name: 'Mod/moderator', value: 'type "lol mod" to view more info'},
    {name: 'Developer', value: 'type "lol dev" to view more info'},
  )

const donate = new Discord.MessageEmbed()
  .setTitle('DONATE')
  .setColor('#ffB35c')
	.setDescription('donate on [Paypal](https://www.paypal.me/alexservers) or [Patreon](https://www.patreon.com/alexservers) or [buymeacoffee](https://www.buymeacoffee.com/alexservers)')
	.addFields(
    {name: 'Q:', value: 'Where will the donations go?'},
	  {name: 'A:', value: 'donations will go to the monthly expenses running the servers'},

    {name: 'Q:', value: 'What do i get for donating to Alex server?'},
    {name: 'A:', value: '200 <:Ax:789661633214676992> for every $5'},
)
 
const gh = new Discord.MessageEmbed()
    .setTitle('Github links')
    .setColor('#ffB35c')
    .addFields(
      {name: 'discord.js', value: 'https://github.com/unjown/unjownbot'},
      {name: 'discord.py', value: 'https://github.com/alexpvpmindustry/watermelonbot'}
    )
module.exports = async (message) => {
    if (message.author.bot) return;
if (message.content.startsWith(prefix + " help")) {
        message.channel.send(commands);
      } else
    
      if (message.content.startsWith(prefix + ' rules')){
        message.channel.send(ruleEmbed);
      }else
      if (message.content.startsWith(prefix +  ' staff')){
        message.channel.send('https://forms.gle/5oapFULkcb1g7Muw5')
      }else

      if (message.content.startsWith(prefix + ' commands')){
        message.channel.send('never gonna give you up')
        }else
      
      if (message.content.startsWith(prefix + ' roles')){
        message.channel.send(Vstaff)
      }else
          
      if (message.content.startsWith(prefix + ' donate')){
          message.channel.send(donate)
      }else
      
      if (message.content.startsWith(prefix + ' gh')){
          message.channel.send(gh)
      }else return;
    };
