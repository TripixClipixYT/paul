const Discord = require('discord.js');
const token = 'NTM1ODU3NTE4MzY3MzQyNTkz.XW1-gg.yB-93E8dvBAeb2Ih-goxtauAsnM'

// var BLUE_ROLE = '580767519489654784';
// var RED_ROLE = '580767602415239170';
// var GREEN_ROLE = '580767635298582530';
// var BLACK_ROLE = '580780121280217109';
// var CYAN_ROLE = '580767454901436417';
// var ELECTRIC_BLUE = '615231547565408259';
// var Version = '0.1.9';
// var owner = ['<@473276250815856650>'];
// var ideaowner = ['<@540219416726601739>'];
// var blackRole = member.roles.find("name", "Black");

const bot = new Discord.Client();

bot.on('message', (message) => {
    const parts = message.content.split(' ');
if (parts[0] == '#status') {
    let statusembed = new Discord.RichEmbed()
    .setColor(3426654)
    .setDescription("**Status:**\nI'm currently on developing status and i dont have commands")
    message.channel.send(statusembed);
}
if(parts[0] == '#bavatar' || parts[0]=='#botav'){
    // if(parts[1] == ''){
    //     message.reply("Your avatar or the bot's avatar? \n Type **!avatar bot ** For the bot's avatar or **!avatar mine**");
        let botavembed = new Discord.RichEmbed()
        .setTitle(`${bot.user.username}'s Avatar`, `${bot.user.displayAvatarURL}`)
          .setImage(`${bot.user.displayAvatarURL}`)
          // .setFooter("Vexus Studios © 2019-2020", `${bot.user.displayAvatarURL}`)
         .setColor(15158332)
       .setTimestamp();
        message.channel.send(botavembed);
}
      if(parts[0] == "#uavatar" || parts[0]=='#uav'){
        let userravembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username}'s Avatar`, `${message.author.displayAvatarURL}`)
        .setImage(`${message.author.displayAvatarURL}`)
        // .setFooter("Vexus Studios © 2019-2020", `${bot.user.displayAvatarURL}`)
        .setColor(15158332)
        .setTimestamp();
        message.channel.send(userravembed);
        }
        if(parts[0]=='#uptime'){ 
        function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds`         
    } 
    let uptimembed = new Discord.RichEmbed()
    .setColor(1752220)
    .setDescription(`**Uptime:** \n ${duration(bot.uptime)}`)        
     message.channel.send(uptimembed);
} 
// Status
    let statuses = [`Developing`]

    setInterval(function(){
      let status = statuses[Math.floor(Math.random()* statuses.length)];
      bot.user.setActivity(status, {type: 'Playing'});
    }, 5000)

});
console.log(`Paul Walker is online`)
bot.login(token);