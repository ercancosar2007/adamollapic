const dc = require("discord.js")

exports.run = async (client, message, args) => {
  let embed = new dc.MessageEmbed()
  .setTitle("Yedek Sistemi")
  .setDescription(`
  
  Sunucularınızın yedeklerini oluşturun ve yükleyin
  
  **Komutlar**
  **[d!yedek-al](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Alırsınız.
  **[d!yedek-yükle](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedeği Yüklersiniz.
  **[d!yedek-sil](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Silersiniz.
  **[d!yedek-liste](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Listenize Bakarsınız.
  **[d!yedek-bilgi](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Belirttiğiniz Yedeğin Özelliklerine Bakarsınız.
  ** Dipnot: 1- Tüm Mesajlarınız Kopyalanır Ve d!yedek-yükle <yedek-id> kullandığınızda tüm mesajlar hangi kanalda atıldıysa o kanala gönderilir . **
  ** 2- Sunucu İsmi Ve Sunucu Resmi Kopyalanır d!yedek-yükle <yedek-id> Kullanıldığıında Sunucu İsmi Ve Sunucu Resmi Hangi Sunucuda Kullanırsanız o Sunucuya Eklenir.**
  ** 3- Eğer Yedek İdnizi Kaydetmediyseniz d!yedek-liste yazarak idyi alıp d!yedek-bilgi id şeklinde hangi sunucuyu Kopyaladığınızı Görebilirsiniz.**
  `)
  .setImage("http://m.yollayap.com/busd/1612274253503.gif")
  .setColor("GREEN")
  message.channel.send(embed)
  }
  
  
  
  exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'backup',
  description: 'Botun Pingini Gösterir !',
  usage: 'backup'
};