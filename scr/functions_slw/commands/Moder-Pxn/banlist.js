const { MessageEmbed, DiscordAPIError } = require("discord.js")//ignore isso aqui, tava querendo fazer embed mas fiquei com preguiça 

module.exports = {
  name: "banlist",
  aliases: ["listban", "list-ban", "banimentos", "bans"],
  author: "PXN-K33",
  description: "Comando de ban K33",
  usage: '.banlist',
  category: 'moder-k33',

  run: async (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`<:PXN21_04:921868288991039548> | Você precisa ser Administrador do server :p`)
    
   const pxnbans = message.guild.bans.fetch()
   const pxn_color = "#ff1414"
   const pxnlistban = (await pxnbans).map((pxnmembers) => pxnmembers.user.tag).join("\n") || "\`\`\`Ninguém foi banido!\`\`\`"
    
    const pxnemb = new MessageEmbed()
    .setTitle('<:K3321sla5:946300448011341835> | Lista de banidos:')
    .setColor(pxn_color)
    .setDescription(pxnlistban)
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL({dinamyc : true}))
    .setTimestamp(new Date())
    
    message.channel.send({embeds: [pxnemb]})
  }
  }
