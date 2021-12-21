const Discord = require('discord.js');
const fs = require('fs');
const { isNullOrUndefined } = require('util');

module.exports = {
	name: 'talk [text]',
	description: "make the bot talk",
}

module.exports.run = async (bot, message,) => {

    

        message.delete();
        var prefix = "l!talk" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');
       
        if (args[0] === "") {
            return message.channel.send(`Écris au moins un mot, ${message.author}!`);
        }
                
    
        message.channel.send(args[0]);
        
        
        
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[Talk] " + user + " wrote: " + args[0] + " | " + time + " on " + date);

        bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[Talk] " + user + " wrote: " + args[0] + " | " + time + " on " + date);
        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")          
       
            channel.send("[Talk] " + user + " wrote: " + args[0] + " | " + time + " on " + date);
        }
    
        
    }

module.exports.help = {
    name: "talk"
}