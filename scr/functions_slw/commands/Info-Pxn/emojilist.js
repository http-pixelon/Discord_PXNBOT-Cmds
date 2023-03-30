const Discord = require("discord.js"); // PixelBot™ by Pixelon/K33

module.exports = {
  name: "emojilist",
  aliases: ["listemoji", "emojilista", "listaemoji"],
  description: "Veja todos os emojis do server.",
  usage: '.emojilist',
  category: 'info-k33',

  run: async (client, message, args) => {

const emojis = message.guild.emojis.cache.map(e => `${e}`),
  count = 150;
let page = 0;

const embed = new Discord.MessageEmbed()
  .setTitle(`Lista de Emojis`)
  .setFooter(`página ${(page / count) + 1}/${~~(emojis.length / count) + 1}` )
  .setDescription(emojis.slice(page, page + count).join(`, `));

const row = new Discord.MessageActionRow().addComponents(
  new Discord.MessageButton()
  .setLabel('Anterior')
  .setDisabled()
  .setCustomId('anterior')
  .setStyle('PRIMARY'),

  new Discord.MessageButton()
  .setLabel('Próximo')
  .setCustomId('proximo')
  .setStyle('PRIMARY')
);

message.channel.send({ embeds: [embed], components: [row] }).then(msg => {

  const filter = async i => {
    await i.deferUpdate();
    return i.user.id === message.author.id;
  }
  const collector = msg.createMessageComponentCollector({ filter, time: 60_000 });

  collector.on('end', () => msg.delete().catch(() => null));

  collector.on('collect', async interaction => {

    row.components[0].disabled = false;
    row.components[1].disabled = false;

    if (interaction.customId === 'proximo') {
      page += count;
      if ((page / count) === ~~(emojis.length / count)) {
        row.components[1].disabled = true;
      }
    }

    if (interaction.customId === 'anterior') {
      page -= count;
      if (page === 0) {
        row.components[0].disabled = true;
      }
    }

    embed.setFooter(`página ${(page/count) + 1}/${~~(emojis.length/count) + 1}` );
    embed.setDescription(emojis.slice(page, page + count).join(`, `));
    await msg.edit({ embeds: [embed], components: [row] });

  });
});

  }
}