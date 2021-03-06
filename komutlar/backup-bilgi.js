const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Dark Angel Bot  **")

.setDescription(`
**» Bağlantılar** 
** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=790354206040653844&permissions=8&scope=bot)** **•** ****
Bir komut hakkında detaylı __yardım için__: **d!yardım**

• Bot ile ilgili tavsiyelerinizi veya istediniğiniz bi kodu **d!istek-kod** yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız **d!bug-bildir** yazarak bize bildirebilirsiniz.

**• Backup Bilgilendirme**
1- Sunucudaki Tüm Mesajları Kopyalar Ve Hangi Sunucunuza İsterseniz Yükleyin O Mesajlar Hep Orda Kalır d!sil komutuyla Silebilirsinz
2- Hangi Sunucuyu Yedeklediyseniz o Sunucunun İsmini Ve Resmini Yüklediğiniz Sunucuya Ekler
3- Yedek İdsini Kaybedersiniz d!yedek-liste Yazarak Görebilirsiniz Eğer Gözükmezse <@447383435586174976> Bana DMDen Ulaşın
4- Yedekleme Sisteminde Bir Hata Olmaması İçin Topluluk Kapalı Olmalıdır
5- Yedekleme Sisteminde Bir Hata Olursa <@447383435586174976> Bana DMDen Ulaşın
**• Bilgilendirme**
> :robot: **Yapımcım : <@447383435586174976>**
© 2020 Tüm Hakları Saklıdır.`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["backupbilgi"], 
    permLevel: 0 
};

  exports.help = {
    name: 'backup-bilgi', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'backup-bilgi'
};