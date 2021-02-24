const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.channel.send("JavaScript Bot | Invite" + "\n" + "https://discord.com/oauth2/authorize?client_id=808006012552478761&permissions=8&scope=bot")
} 
  module.exports.help = {
    name: "bot"
  }