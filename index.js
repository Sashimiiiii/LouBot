const Discord = require("discord.js"); // So6
const fs = require('fs');
const welcome = require ('./timed/welcome');
const adieu = require ('./timed/adieu');

var twitchAPI = require("twitch-api-v5");
twitchAPI.clientID = "vuhqc6a285261lp1yzpanb12tmljsk"

var bot = new Discord.Client();

bot.on('ready', () => {        
    console.log("BOT IS READY");
    bot.user.setActivity("l!help", {type: "STREAMING", url:"https://www.twitch.tv/lounette1557"});
})
    

bot.on('ready', () => {        
 //   checkStreams()
 //   setInterval(checkStreams, 1000 * 60)
 //welcome(bot);
 //adieu(bot);
})
    
function checkStreams() {
    var date = new Date()

    console.log(date.toTimeString() + ": Checking streams...")
    
}   










bot.commands = new Discord.Collection();

function loadCmds() {
    fs.readdir("./cmdss/ecrit/", (err, files) => {
        if(err) console.erroe(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if(jsFiles.length <= 0) {
            console.log("Aucune commande à chargé.")
            return;
        }
        console.log(`${jsFiles.length} commandes chargées.`);
        jsFiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./cmdss/ecrit/${f}`)];
            var props = require(`./cmdss/ecrit/${f}`);
            console.log(`${i + 1}: ${f} chargé`);
            bot.commands.set(props.help.name, props); 
        })
    })
};



function loadCmds2() {
    fs.readdir("./cmdss/vocal/", (err, files) => {
        if(err) console.erroe(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if(jsFiles.length <= 0) {
            console.log("Aucune commande à chargé.")
            return;
        }
        console.log(`${jsFiles.length} commandes chargées.`);
        jsFiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./cmdss/vocal/${f}`)];
            var props = require(`./cmdss/vocal/${f}`);
            console.log(`${i + 1}: ${f} chargé`);
            bot.commands.set(props.help.name, props); 
        })
    })
};

function loadCmds3() {
    fs.readdir("./cmdss/image/", (err, files) => {
        if(err) console.erroe(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if(jsFiles.length <= 0) {
            console.log("Aucune commande à chargé.")
            return;
        }
        console.log(`${jsFiles.length} commandes chargées.`);
        jsFiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./cmdss/image/${f}`)];
            var props = require(`./cmdss/image/${f}`);
            console.log(`${i + 1}: ${f} chargé`);
            bot.commands.set(props.help.name, props); 
        })
    })
};
loadCmds();
loadCmds2();
loadCmds3();

bot.on('message', async message => {

    if (message.author.bot) return
    
    
    
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
        prefixes: "l!"
    };
}

let prefix = prefixes[message.guild.id].prefixes;
    
    
var msg = message.content.toUpperCase();


if (msg.includes("NIGGA") || msg.includes("NIGGER")|| msg.includes("NEGROS")||msg.includes("NEGRES")) {
    if (message.guild.id == 730433603808264192) {
    message.delete();
    message.channel.send("https://media.discordapp.net/attachments/696410685227270386/830191408437526568/171062215_6013053202053533_4265888126316665470_n.jpg");

    }
}       
    
var messageArray = message.content.split(/\s+/g);
var args = messageArray.slice(1);
var command = messageArray[0];
var cmd = bot.commands.get(command.slice(prefix.length));
if(!command.startsWith(prefix)) return;
if(cmd) cmd.run(bot, message, args);    


}) 

            
            
            




bot.login(process.env.TOKEN)
