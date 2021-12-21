const Discord = require('discord.js');
const fs = require('fs');


module.exports = {
	name: 'bitch',
	description: "I'm a bitch",
}

module.exports.run = async (bot, message, member) => {

       
    
    
    message.delete();

    

   

    message.channel.send("I'm a bitch");
    
    

    
    
    
    const channel = message.guild.channels.cache.get("795755947879825408")
    var user = message.author.tag
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getDate()+'/'+(today.getMonth()+1);
    console.log("[ADIEU] " + user + " a utiliser Adieu | " + time + " Le " + date)
    
    if (message.guild.id == 730433603808264192) {
        channel.send("[ADIEU] " + user + " a utiliser Adieu | " + time + " Le " + date);
    }

    bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[ADIEU] " + user + " a utiliser Adieu | " + time + " Le " + date)
    
}

module.exports.help = {
    name: "bitch"
}