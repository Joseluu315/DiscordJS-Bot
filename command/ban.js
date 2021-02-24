const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => { 
        if (!message.member.hasPermission("BAN_MEMBERS")) 
        return errors.noPerms(message, "BAN_MEMBERS") +
         message.channel.send('No tienes permisos para ejecutar ese comando.') 
        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
    
        if (message.mentions.users.size < 1) 
        return message.reply('Menciona a un usuario valido.').catch(console.error);
        if(!razon) return message.channel.send('Escriba un razón, `/ban @username [razón]`');
        if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
        
    
        message.guild.member(user).kick(razon);
        message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);
} 
  module.exports.help = {
    name: "ban"
  }