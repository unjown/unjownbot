const Discord = require('discord.js');  
const fs = require('fs')
module.exports = async (message) => {
  if (!message.guild) return;

if (message.content.startsWith('lol play AG')) {

var VC = message.member.voice.channel;

if (!VC)

return message.reply("You must be in a Voice Channel!")

VC.join()

.then(connection => {

const dispatcher = connection.play('/home/container/commands/music/AG.mp3');// music file not posted intentionally 

/* dispatcher.on("end", end => {VC.leave()}); */

})

.catch(console.error);

}else if(message.content.startsWith('lol play unj')){ // lol play unj not working
  var VC = message.member.voice.channel;

  if (!VC)
  
  
  VC.join()
  
  .then(connection => {
  
  const dispatcher = connection.play('/home/container/commands/music/unj.mp3');// music file not posted intentionally  
}

  )}else if(message.content.startsWith('lol dc')){
	var VC = message.member.voice.channel;
	VC.leave();
}
};//module.export
