const Discord = require("discord.js")

module.exports = {
  name: "morse",
  aliases: ["codigomorse"],
  description: "Fale com a sua casada, escreva pra ela via codigo morse... 😥💔~ Algum dia ela voltara...",
  usage: '.morse',
  category: 'util-k33',

  run: async (client, message, args) => {
    
    if(!args.join(' ')) return message.reply('<a:hiihi:775525312745701400> | Coloque alguma mensagem para codificar')

    let morse = '/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----'.split(',')
    let alpha = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'.split('')

    let text = args.join(' ').toUpperCase()
    while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü") || text.includes('É') || text.includes('È') || text.includes('Ù') || text.includes('Ú') || text.includes('Á') || text.includes('À') || text.includes('Í') || text.includes('Ì') || text.includes('Ó') || text.includes('Ò')) {
      text = text
        .replace("Ä", "AE")
        .replace("Ö", "OE")
        .replace("Ü", "UE")
        .replace("É", "E")
        .replace("È", "E")
        .replace("Ù", "U")
        .replace("Ú", "U")
        .replace("Á", "A")
        .replace("À", "A")
        .replace("Í", "I")
        .replace("Ì", "I")
        .replace("Ó", "O")
        .replace("Ò", "O");
    }

    if(text.startsWith('.') || text.startsWith('-')) {
      text = text.split(' ')
      let length = text.length

      for(let i = 0; i < length; i++) {
        text[i] = alpha[morse.indexOf(text[i])]
      }
      text = text.join('');
    } else {
      text = text.split('')
      let length = text.length

      for(let i = 0; i < length; i++) {
        text[i] = morse[alpha.indexOf(text[i])]
      }
      text = text.join(' ');
    }

    let morseEmbed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} - Morse`, client.user.avatarURL({ dynamic: true, size: 512 }))
    .setColor('#4D9EFF')
    .setDescription(`\`\`\`${text || 'ERROR'}\`\`\``)
    .setFooter(`Used by: ${message.author.tag}`)

    message.channel.send({ embeds: [morseEmbed]} )
}
}
