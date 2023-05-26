const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'robbers list',
  aliases: ['tl', 'rl', 'robberlist', 'Thiefs list', 'Thieflist', 'listThie', 'robberslist', 'listroubo', 'roubolist', 'roubo lista', 'lista roubo'],
  author: "PXN-K33",
  description: "SlowPixels | Cmds_Economia: Veja a lista das pessoas roubaveis do servidor!",
  usage: '.robbers list',
  category: 'economia-k33',
  valor: '006', valor: '006', valor: '006', valor: '006', valor: '006', valor: '006', valor: '006', valor: '006', valor: '006',

  run: async (client, message, interaction,  args) => {

    let voce = message.author || message.user;

    let roubolistk33 = db.get(`roubolist_shop2_${voce.id}`);
    if (roubolistk33 === null || roubolistk33 == 0) return message.reply(`<:clipboard_1f4cb:1049017714104094741> | Você precisa conseguir a lista no mercado negro.
<:lojaspxn:954979449584103454> | Compre a lista em **;loja**`)

    async function msgk33Ranked(pagina, per_paginak33) {

      const convrs = await db.all().filter(data => data.ID.startsWith('moneypixels_')).sort((a, b) => b.data - a.data);

      //console.log(convrs); vai reproduzir no console os dados
      var pagina = pagina || 1,
        per_paginak33 = per_paginak33 || 1,
        offset = (pagina - 1) * per_paginak33,

        paginatedItems = convrs.slice(offset).slice(0, per_paginak33),
        total_pagina = Math.ceil(convrs.length / per_paginak33);

      let id_valor = convrs.slice('moneypixels_')

      var msgRankedk33 = ""
      for (var i in paginatedItems) {

        if (paginatedItems[i].data == undefined || paginatedItems[i].data == "") {

        } else {
          let valork33 = paginatedItems[i].data


          //tempo = "**" + hours + '** hora(s), **' + minutes + '** minuto(s) e **' + seconds + '** segundos';

          let user_nick = paginatedItems[i].ID.replace("moneypixels_", "")
          if (message.guild.members.cache.get(user_nick)) {
            user_nick = message.guild.members.cache.get(user_nick)
            msgRankedk33 += `> **${user_nick.user.tag} ⠀--** ⠀§${valork33} Libras.\n`;
          } else {
          }
        }
      }

      let emb_finalek33 = {
        pagina: pagina,
        per_pagina: per_paginak33,
        pre_pagina: pagina - 1 ? pagina - 1 : null,
        next_page: (total_pagina > pagina) ? pagina + 1 : null,
        total: convrs.length,
        total_pagina: total_pagina,
        data: paginatedItems,
        message: msgRankedk33
      };

      if (msgRankedk33 == undefined || msgRankedk33 == "") msgRankedk33 = '**<:P5:1034685016233484298> Eita, parece que essa lista está vazia...**';

      const ranked_embk33 = new Discord.MessageEmbed()
        .setColor("#db8e5e")
        //.setAuthor(`${message.author.username} | O mais rico.`, message.author.displayAvatarURL({ format: "png" }))
        .setTitle(`<:clipboard_1f4cb:1049017714104094741> Lista do Ladrão! `)
        .setDescription(`O melhor amigo de um ladrão!
Lista de todos os usuários roubáveis em um servidor!\n
${msgRankedk33}`)
        .setFooter(`${message.author.tag} e seus contatos...`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

      message.reply(`<:5E_Vamosver:1058492065207554048> ${message.author.username} está visualizando um documento suspeito...`)
      return message.reply({ embeds: [ranked_embk33], ephemeral: true }).then(msg => {
        setTimeout(() => {
          msg.delete()
        }, 10000)
      }),
        
      db.subtract(`roubolist_shop2_${voce.id}`, 1)
    }
    msgk33Ranked(1, 15)
  },
 
}
