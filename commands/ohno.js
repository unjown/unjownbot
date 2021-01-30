const Discord = require('discord.js');
module.exports = async (msg) => {
 if (msg.author.bot) return;
    const ohno = msg.guild.emojis.cache.find(x => x.name === "ohno")
    if (msg.content.toLowerCase().includes("oh no")) {
            msg.react(ohno);
};
