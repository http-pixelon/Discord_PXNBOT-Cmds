const password = require('password-gen-v1')
const Discord = require ('discord.js')

module.exports = {
  name: "senha",
  aliases: ["geradorsenha", "senhas"],
  description: "Nn consegue criar uma senha boa? use o bot.",
  usage: '.senha',
  category: 'util-k33',

  run: async (client, message, args) => {
    

    const senha = password.newPassword(8)
    const senha2 = password.newPassword(19, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*()')
    
const senhaembd = new Discord.MessageEmbed()
        .setTitle('🎟 | SENHA GERADA!')
        .setColor('#0000')
        .addField(`Senha básica: \`${senha}\`\n`,`**Senha complexa: \`${senha2}\`**`)

        message.channel.send("A **Senha** foi gerada, olhe o pv/dm");
        message.author.send({ embeds: [senhaembd] });
}
}