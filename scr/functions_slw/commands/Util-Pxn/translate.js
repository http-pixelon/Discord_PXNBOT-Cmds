const Discord = require('discord.js');
const translate = require("@iamtraction/google-translate");

module.exports = {
  name: "translate",
  aliases: ["traduzir", "traduz", "tradutor", "googletradutor"],
  description: "SlowPixels | Cmds_Util: Traduza o seu texto! Obs: Usando a API do Google Tradutor!",
  usage: '.translate',
  category: 'util-k33',

  run: async (client, message, args) => {

    const text = args.slice(1).join(" ");

    if (!text)
      return message.reply(
        `<:PXNb21_02:921870942416818186> | ${message.author}, insira o que você deseja traduzir.`
      )

    try {
      const trad = await translate(text, {
        to: args[0],
      })

      message.reply(
        `<:PXNb21_02:921870942416818186> **| Tradução:**\n > *${trad.text ? trad.text : ""}*`
      )
    } catch {

      return message.reply(
        `<:PXNb21_02:921870942416818186> | ${message.author}, linguagem não é suportada.`
      )
    }
  }
}
