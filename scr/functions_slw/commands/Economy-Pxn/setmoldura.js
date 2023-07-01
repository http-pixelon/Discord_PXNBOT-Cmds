const Discord = require("discord.js")
const db = require('quick.db');

module.exports = {
  name: "setmd",
  aliases: ["setmoldura", "set-moldura", "molduraset"],
  description: "SlowPixels | Cmds_economia: consiga mudar a sua moldura do avatar do perfil!",
  usage: '.setmd',
  category: 'economia-k33',
  valor: '008', valor: '008', valor: '008', valor: '008', valor: '008', valor: '008', valor: '008', valor: '008', valor: '008',

  run: async (client, message, args) => {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    //if (!user) return message.channel.send(`<:ConfusoK33:1035721789101322281> \`|\` **Coloque um usuario valido!**`)
    

    const moldura_verfq = db.fetch(`molduresk33_${user.id}`);
const moldura = message.content.split(' ');

if (moldura.includes('moldure1') && moldura_verfq === 'moldure1') {
  const eb_add = new Discord.MessageEmbed()
    .setDescription(`<:PXNb21_03:921870942274215966> Moldura 1 de ${user.tag} foi alterado.`)
    .setColor("#6ce9b6");

  message.reply({ embeds: [eb_add] });
} else {
  message.channel.send(`<:ConfusoK33:1035721789101322281> | Você não possui essa moldura! 1`);
}

  }

}
