const Discord = require('discord.js')

module.exports = {
  name: "membros",
  aliases: ["member", "membro"],
  description: "Veja a quantidade de membro de um determinado servidor que tu preferir",
  usage: '.membros',
  category: 'info-k33',

  run: async (client, message, args) => {

message.delete()

  let embedmber = new Discord.MessageEmbed()
    .setColor("#bb4aff")
    .setDescription(`> <:K33Utility62:901521534647173220> Servidor com: \`${client.users.cache.size} Membros\` <a:Z_1_Chemonio:854230502764445697>`)

message.channel.send({ embeds: [embedmber] }) 
  }
} 