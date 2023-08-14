const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'ranklibras',
  aliases: ['librasrank', 'toplibras', 'top libras', 'rank libras', 'topservlibras', 'rankserv', 'servrank', 'topserv'],
  author: "PXN-K33",
  description: "SlowPixels | Cmds_Economia: Veja o top melhores de money no teu servidor!",
  usage: '.ranklibras',
  category: 'economia-k33',
  valor: '007', valor: '007', valor: '007', valor: '007', valor: '007', valor: '007', valor: '007', valor: '007', 
     

  run: async (client, message, args) => {

    //let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
    
    //let librask33 = await db.get(`moneypixels_${user.id}`)

    //let saldobank33_user = await db.get(`bankcenterk33_${user.id}`)
    //if (saldobank33_user === null) saldobank33_user = 0;

    /*
    let userdb = await client.userdb.find({})
      userdb.sort((a,b) => (b.librask33 + b.saldobank33_user) - (a.librask33 + a.saldobank33_user))
      */
    
      //userdb = userdb.slice(0,3)
//let users = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
    /*
    let users = [];

    message.guild.members.cache.forEach(async (member) => {
      let money = await db.get(`moneypixels_${member.id}`);
      let bank = await db.get(`bankcenterk33_${member.id}`);
      let total = money + bank;

      users.push({
        id: member.id,
        total: total,
      });
    });

    users.sort((a, b) => {
      return b.total - a.total;
    });

    const embed = new Discord.MessageEmbed()
      .setTitle("Topranked libras")
      .setColor("#0099ff")
      .setDescription("Lista classificada em ordem decrescente dos jogadores mais ricos:");

    let member = await message.guild.members.fetch(users.id);
      embed.addField(`${member.displayName}`, `${users.total}`);
    

      message.channel.send({ embeds: [embed]});
    
    */
    
    async function msgk33Ranked(pagina, per_paginak33) {

      const convrs = await db.all().filter(data => data.ID.startsWith('bankcenterk33_')).sort((a, b) => b.data - a.data);

      var pagina = pagina || 1,
        per_paginak33 = per_paginak33 || 1,
        offset = (pagina - 1) * per_paginak33,

        paginatedItems = convrs.slice(offset).slice(0, per_paginak33),
        total_pagina = Math.ceil(convrs.length / per_paginak33);

      let id_valor = convrs.slice('bankcenterk33_')

      var msgRankedk33 = ""
      for (var i in paginatedItems) {

        if (paginatedItems[i].data == undefined || paginatedItems[i].data == "") {

        } else {
          let valork33 = paginatedItems[i].data


          //tempo = "**" + hours + '** hora(s), **' + minutes + '** minuto(s) e **' + seconds + '** segundos';

          let user_nick = paginatedItems[i].ID.replace("bankcenterk33_", "")
          if (message.guild.members.cache.get(user_nick)) {
            user_nick = message.guild.members.cache.get(user_nick)
            msgRankedk33 += `> <:mmK33:949008188420784128>**${user_nick.user.tag} -** §${valork33} Libras.\n`;
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

      if (msgRankedk33 == undefined || msgRankedk33 == "") msgRankedk33 = '**<:P5:1034685016233484298> Klr, Nenhum usuário está no top 10!**';

      const ranked_embk33 = new Discord.MessageEmbed()
        .setColor("#ffc930")
        //.setAuthor(`${message.author.username} | O mais rico.`, message.author.displayAvatarURL({ format: "png" }))
        .setTitle(`<:MoneysLibra:1035672131251478610> Ranked Server - Libras `)
        .setDescription(`\`Os membros mais ricos do PixelHouse\`
Tente se classificar ao top 1, e ganhe recompensas!
(Aviso: Ignore o Pixelbot, ainda vou tirar ele)\n
${msgRankedk33}`)
        .setFooter(`${message.author.tag} Requisitou o rank!`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
      return message.reply({ embeds: [ranked_embk33] })
    }
    msgk33Ranked(1, 15)
    
  },
};
