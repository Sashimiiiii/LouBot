const Discord = require('discord.js');
const fs = require('fs');


module.exports = {
	name: 'help',
	description: "Show commands",
}

module.exports.run = async (bot, message, args) => {

	message.channel.send("Commands:");
    let str = '';
		var commandFiles = fs.readdirSync('./cmdss/ecrit/').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str +="[ l!"+ command.name + " ] " + command.description + "\n";
		}

		message.channel.send("```ini\n" + str + "```\n");
		
	 setTimeout(() => {
	 	message.channel.send("Image manipulation");
	 	let str = '';
		var commandFiles = fs.readdirSync('./cmdss/image/').filter(file => file.endsWith('.js'));
	
		for (const file of commandFiles) {
	 		const command = require(`../image/${file}`);
	 		str +="[ l!"+ command.name + " ] " + command.description + "\n";
		}
	
	 	message.channel.send("```ini\n" + str + "```\n");
	 }, 500); 

	// setTimeout(() => {
	// 	message.channel.send("Vocal Command:");
	// 	let str = '';
	// 	var commandFiles = fs.readdirSync('./cmdss/vocal/').filter(file => file.endsWith('.js'));
	// 
	// 	for (const file of commandFiles) {
	// 		const command = require(`../vocal/${file}`);
	// 		str +="[ l!"+ command.name + " ] " + command.description + "\n";
	// 	}
	// 
	// 	message.channel.send("```ini\n" + str + "```\n");
	// }, 1000); 
	

        
        
		const channel = message.guild.channels.cache.get("795755947879825408")
		var user = message.author.tag
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var date = today.getDate()+'/'+(today.getMonth()+1);
		
		if (message.guild.id == 730433603808264192) {
            channel.send("[HELP] " + user + " used Help | " + time + " on " + date);
		}

		bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[HELP] " + user + " used Help | " + time + " on " + date);
}



module.exports.help = {
    name: "help"
}
