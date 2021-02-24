const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const amount  = args.join(" ")

    if(!amount) return message.reply('Please provide a valid number!')
    if(amount > 100) return message.reply('You cannot clear more than 100 message at once')
    if(amount < 1) return message.reply('You need more message to delete')

    await message.channel.messages.fetch({limit : amount}).then(message => {
        message.channel.bulkDelete(message
      )})
      message.channel.send('Clear: ' + amount)
}
  module.exports.help = {
    name: "clear"
  }