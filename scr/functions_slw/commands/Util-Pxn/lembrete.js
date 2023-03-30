const Discord = require('discord.js');
const ms = require("ms")

module.exports = {
  name: "lembrete",
  aliases: ["lembrete", "lembrar", "acordar", "alarme", "acorde", "lembre"],
  description: "Jogue o dado",
  usage: '.lembrete',
  category: 'util-k33',

  run: async (client, message, args) => {
    
        let time = args[0]
        if(!time) return message.reply({
      embeds: [
        new Discord.MessageEmbed()

          .setTitle("<a:X3_Numsei:854280493033979906> - HELP LEMBRETE | PixelBot™️")
          .setDescription(`<:A_RoxokGrand3:858758977903263775> **Como funciona?**
*Você será lembrado após usar esse comando.*
    
    <:A_RoxokGrand3:858758977903263775> **Exemplos:**
> \`;lembrar\` **\`time\`** **\`Mensagem\`**

> \`;lembrete\` **\`35m\`** **\`pegar o proximo roll da mudae\`**
> \`;lembrar\` **\`4h\`** **\`ir buscar pão\`**
    
    <:A_RoxokGrand3:858758977903263775> **Aliases/Sinônimos:** 
     ┗⠀\`lembrar\` - \`lembrete\` - \`alarme\` - \`lembre\`.`)
          .setImage(``)
          .setFooter(`❓ HELP Lembrete • Utilidades`, message.author.displayAvatarURL({ format: "png" }))
          .setTimestamp()
          .setColor("#ff00bc")

      ]})
    
        let lembrete = args.slice(1).join(" ")
        if(!lembrete) return message.reply({
      embeds: [
        new Discord.MessageEmbed().setDescription(`
> Escreva alguma coisa após o time`)
          .setColor("#ff00bc")

      ]})

        const embed = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setTitle (`Lembrete agendado`)
        .setColor('RANDOM') 
        .addField(`Irei lembrar você de:`, `\`${lembrete}\``, true)
        .addField("\nDaqui as", `\`${time}\``, true) 
        .setTimestamp(Date.now() + ms(time))
        .setFooter(`Lembrete será ocorrido `, client.user.displayAvatarURL())
        message.channel.send({embeds: [embed]})

        setTimeout(() => {
            let emb = new Discord.MessageEmbed()
            .setTitle("Seu lembrete "  + message.author.username)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`Você me pediu para criaste uma lembrete com as tais informações`)
            .setColor("RANDOM")
            .addField("Duração", `\`${time}\``, true)
            .addField(`\nLembrete:`, `\`${lembrete}\``, true)
            .setFooter(`Lembrete foi feito com sucesso`, client.user.displayAvatarURL())
            message.channel.send({content: `${message.author}`, embeds: [emb]})
        }, ms(time))
    }
}