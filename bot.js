const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "+";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


 if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login(process.env.BOT_TOKEN);
