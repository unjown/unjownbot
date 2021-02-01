const Discord = require('discord.js');
module.exports = async (msg) => {
 if (msg.author.bot) return;
    const pog = msg.guild.emojis.cache.find(x => x.name === "pog")
    if (msg.content.toLowerCase().includes("pog")) {
            msg.react(pog);
}return
    
};
