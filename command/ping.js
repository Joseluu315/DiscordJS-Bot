const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if(message.author.bot) return;
      message.channel.send("Pinging...").then(m =>{
          var ping = Date.now() - message.createdTimestamp + " ms";

            var embed = new Discord.MessageEmbed()
            .setAuthor(`Your ping is ${ping}`)
            .setColor("GREEN")
            
            m.edit(embed)
        });
      }
module.exports.help = {
  name: "ping"
}