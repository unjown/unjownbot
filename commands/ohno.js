const Discord = require('discord.js');
module.exports = async (msg) => {
 if (msg.author.bot) return;
    const ohno = msg.guild.emojis.cache.find(x => x.name === "ohno")
    if (msg.content.toLowerCase().includes("oh no")) {
        if (!ohno) {
            if (msg.guild.emojis.cache.size > 100) {
                return
            }
            msg.guild.emojis.create("https://cdn.discordapp.com/emojis/597477759689687040.png?v=1", "ohno")
            msg.channel.send("ohno emote created")
        } else {
            msg.react(ohno);
};
