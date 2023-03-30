const Discord = require("discord.js"); // PixelBot™ by Pixelon/K33
const moment = require("moment");

module.exports = {
  name: "emojiinfo",
  aliases: ["infoemoji", "emojinfo"],
  description: "Resgate informações de um emoji com esse cmd",
  usage: '.emojiinfo',
  category: 'info-k33',

  run: async (client, message, args) => {

    if (!message.member.permissions.has(`MANAGE_EMOJIS`)) {
      return message.reply({
        embeds: [
          new Discord.MessageEmbed().setDescription(`
> Falta permissão "MANAGE EMOJI"`)
            .setColor("#ff00bc")

        ]
      })
    }
    const emoji = args[0];
    if (!emoji) return message.reply({
      embeds: [
        new Discord.MessageEmbed()

          .setTitle("<a:X3_Numsei:854280493033979906> - EMOJI-INFO | PixelBot™️")
          .setDescription(`<:A_RoxokGrand3:858758977903263775> **Como funciona?**
**${message.author}**, Com esse comando você será capaz de ver todas as informações de um emoji. 
    
    <:A_RoxokGrand3:858758977903263775> **Exemplos:**
> \`;emojiinfo\` **\`emoji\`**
> \`;emojiinfo\` **\`id123456789000\`**
> \`;infoemoji\` **\`nome\`**
    
    <:A_RoxokGrand3:858758977903263775> **Aliases/Sinônimos:** 
     ┗⠀\`emojiinfo\` - \`infoemoji\` - \`emojinfo\`.`)
          .setImage(`https://discord.com/channels/812873788596682812/939424927965126697/947252402061471825`)
          .setFooter(`❓ HELP EMOJIINFO  •  Informações`, message.author.displayAvatarURL({ format: "png" }))
          .setTimestamp()
          .setColor("#ff00bc")

      ]
    })

    const parsedEmoji = Discord.Util.parseEmoji(emoji);
    const emojiInfo = message.guild.emojis.cache.get(parsedEmoji.id) || client.emojis.cache.find(emoji => `<:${emoji.name}:${emoji.id}>` === args[0]) || client.emojis.cache.find(emoji => `<a:${emoji.name}:${emoji.id}>` === args[0]) || client.emojis.cache.find(emoji => emoji.name === args[0]) || client.emojis.cache.get(args[0]);

    if (!emoji) {
      message.reply({
        embeds: [
          new Discord.MessageEmbed()
            .setTitle("<a:X3_Numsei:854280493033979906> - EMOJI-INFO | PixelBot™️")
            .setDescription(`**${message.author}**, Com esse comando você será capaz de ver todas as informações de um emoji. 
    
    <:A_RoxokGrand3:858758977903263775> **Exemplos:**
> \`;emojiinfo\` **\`emoji\`**
> \`;emojiinfo\` **\`id123456789000\`**
> \`;infoemoji\` **\`nome\`**
    
    <:A_RoxokGrand3:858758977903263775> **Aliases/Sinônimos:** 
     ┗⠀\`emojiinfo\` - \`infoemoji\` - \`emojinfo\`.`)
            .setImage()
            .setFooter(`❓ HELP EMOJIINFO  •  Informações`, message.author.displayAvatarURL({ format: "png" }))
            .setTimestamp()
            .setColor("#ff00bc")
        ]
      });
    } else if (emoji) {

      try {

        if (!emoji.animated) {
          //let k33imagem = `https://cdn.discordapp.com/emojis/${emoji.id}.png?size=2048`;
          let botao1 = new Discord.MessageActionRow()
            .addComponents(
              new Discord.MessageButton()
                .setStyle("LINK")
                .setLabel("Faça o download")
                .setEmoji("📎")
                .setURL(emojiInfo.url)
            );

          let embed1 = new Discord.MessageEmbed()
            .setTitle(`<:PXNb21_03:921870942274215966> | NOME1: ${emojiInfo.name} EMOJI`)
            .setThumbnail(emojiInfo.url)
            .setColor("#af00ff")
            .addField("<:PXNc21_34:921870327796105216> Nome:", emojiInfo.name, true)
            .addField("<:PXNb21_31:921870941049466900> ID:", emojiInfo.id, true)
            .addField(
              "<:PXNc21_31:921870327980654612> Emoji Criado:",
              `${moment(emojiInfo.createdAt).format("MMMM Do YYYY, h:mm A")} | ${moment(
                emojiInfo.createdAt
              )
                .startOf()
                .fromNow()}`, false)
            .addField("🔗 URL:", emojiInfo.url, true)
            .addField("<:PXN21_17:921868288802304010> GIF?", emojiInfo.animated ? "<:PXN21_24:921868288525500519>" : "<:PXNb21_07:921870942039318548>", true)
            .addField("<:PXNb21_31:921870941049466900> | ID_Code Indentificação:", `\`<:${emojiInfo.name}:${emojiInfo.id}>\``)
            .setFooter("Emoji Info | PixelBot™", emojiInfo.url)
            .setTimestamp()


          message.reply({ content: `Copy ID: \`<a:${emojiInfo.name}:${emojiInfo.id}>\``, embeds: [embed1], components: [botao1] })
        }

        else if (emoji.animated) {

          //let k33imagem = `https://cdn.discordapp.com/emojis/${emoji.id}.gif?size=2048`;
          let botao2 = new Discord.MessageActionRow()
            .addComponents(
              new Discord.MessageButton()
                .setStyle("LINK")
                .setLabel("Faça o download")
                .setEmoji("📎")
                .setURL(emojiInfo.url)
            );

          let embed2 = new Discord.MessageEmbed()
            .setTitle(`<:PXNb21_03:921870942274215966> | NOME2: ${emojiInfo.name} EMOJI`)
            .setThumbnail(emojiInfo.url)
            .setColor("#af00ff")
            .addField("<:PXNc21_34:921870327796105216> Nome:", emojiInfo.name, true)
            .addField("<:PXNb21_31:921870941049466900> ID:", emojiInfo.id, true)
            .addField(
              "<:PXNc21_31:921870327980654612> Emoji Criado:",
              `${moment(emojiInfo.createdAt).format("MMMM Do YYYY, h:mm A")} | ${moment(
                emojiInfo.createdAt
              )
                .startOf()
                .fromNow()}`, false)
            .addField("🔗 URL:", emojiInfo.url, true)
            .addField("<:PXN21_17:921868288802304010> GIF?", emojiInfo.animated ? "<:PXN21_24:921868288525500519>" : "<:PXNb21_07:921870942039318548>", true)
            .addField("<:PXNb21_31:921870941049466900> | ID_Code Indentificação:", `\`<:${emojiInfo.name}:${emojiInfo.id}>\``)
            .setFooter("Emoji Info | PixelBot™", emojiInfo.url)
            .setTimestamp()


          message.reply({ content: `Copy ID: \`<a:${emojiInfo.name}:${emojiInfo.id}>\``, embeds: [embed2], components: [botao2] })

        }

      } catch (e) {
        message.reply(`<a:N8_chorar:854277981567582219> | ${message.author}, Eu não estou *nesse servidor...* 😭😭`)
      }

    }

  }
}