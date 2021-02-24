const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let miembro = message.mentions.users.first()
    if (!miembro) {
        const embed = new Discord.MessageEmbed()
            .setImage(`${message.author.displayAvatarURL()}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${message.author.tag}`);
        message.channel.send(embed);
    } else {
        const embed = new Discord.MessageEmbed()
            .setImage(`${miembro.displayAvatarURL()}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${miembro.tag}`);
    
        message.channel.send(embed);
}}
  module.exports.help = {
    name: "av"
  }