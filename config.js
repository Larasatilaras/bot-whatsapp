let fs = require('fs')
let chalk = require('chalk')
global.owner = ['6285759662798']
global.autoread = false
global.selfmode = false
global.autobio = false // or node . --autobio
global.thumb = './thumb/itsuki.jpg'
global.fakereplyt = 'ItzmeLaras-Botz WhatsApp'
global.mess = {
group : {
welcome : `Welcome @user\n\nSelamat datang di grup @subject`,
bye : `Selamat Meninggal @user Beban Keluarga`,
promote: 'Ciee asik @user Sekarang Jadi Raja!',
demote: 'Mampuzz @user Sekarang Jadi Babu Raja!'
},
error : 'Terjadi Kesalahan',
success: 'Sukses...'
}
global.prefix = '🐤'
global.author = '@Itsmelaras_'
global.packname = 'WhatsApp Bot'


// LIST APIKEY

global.APIs = { // API Prefix

  clph: 'https://recoders-area.caliph.repl.co',
  rikka: 'https://rikka-api.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  vh: 'http://api.vhtear.com',
  zeks: 'https://api.zeks.me',
  caliphAPI: 'https://api.caliph71.xyz'
}

global.APIKeys = { // APIKey Here
   'http://api.vhtear.com': 'NOT-PREMIUM',
   'https://api.lolhuman.xyz': '7fc314b6414b6ed2fc5c3058',
  'https://api.xteam.xyz': '4174b0fba23611d9'
,
  'https://api.zeks.me': 'rikkabotwa',
  'https://rikka-api.xyz': 'free5d', // chat wa.me/62882003806038 to buy apikey
   'https://api.caliph71.xyz': 'uVMDxJfM' // chat wa.me/62882003806038 to buy apikey
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
