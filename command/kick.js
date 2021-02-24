const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => { 
        if (!message.member.hasPermission("KICK_MEMBERS")) 
        return errors.noPerms(message, "KICK_MEMBERS") +
         message.channel.send('No tienes permisos para ejecutar ese comando.') 
        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
    
        if (message.mentions.users.size < 1) 
        return message.reply('Menciona a un usuario valido.').catch(console.error);
        if(!razon) return message.channel.send('Escriba un razón, `/kick @username [razón]`');
        if (!message.guild.member(user).bannable) return message.reply('No puedo kickear al usuario mencionado.');
        
    
        message.guild.member(user).kick(razon);
        message.channel.send(`**${user.username}**, fue kickeado del servidor, razón: ${razon}.`);
} 
  module.exports.help = {
    name: "kick"
  }