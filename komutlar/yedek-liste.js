const db = require("croxydb")
const dc = require("discord.js")

exports.run = async (client, message, args) => {
  let yedekler = await db.get(`y_${message.author.id}`)
  let sj;
  if(!yedekler) {
    sj = "Yedeğin Bulunmamakta"
    } else {
      sj = yedekler.map(x => `**${x.id}**\n${x.adı} (\`${x.tarih}\`)\n`)
      }
  let embed = new dc.MessageEmbed()
  .setTitle("📄 Yedek Listesi")
  .setColor("GREEN")
  .setTimestamp()
  .setThumbnail(message.author.avatarURL())
  .setDescription(sj)
  .setImage("http://m.yollayap.com/busd/1612274253503.gif")
  message.channel.send(embed)
  }
  
  exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yedek-liste',
  description: 'Botun Pingini Gösterir !',
  usage: 'yedek-liste'
};