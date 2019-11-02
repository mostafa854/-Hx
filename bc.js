const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "! Hx";
client.on("message", message => {

            if (message.content.startsWith(prefix + "")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Number of people received :100::tada:`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`FunCord`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NjQwMTMyNDM4MzM2NzMzMTk0.Xb1X-Q.UqOlSKjec3xZ8QGcO06zYpD8s5c");