// CREATED BY LEXXY
const fs = require('fs')
const chalk = require('chalk')

// OTHERS
global.owner = ['628979440862', '628979440862']
global.premium = ['628979440862', '628979440862']
global.number = '6282133532380'
global.ownername = '𝙕𝙮𝙠𝙪𝙖𝙣'
global.botname = '𝕵𝖎𝖎𝖐𝖚𝖆𝖓'
global.packname = '𝕵𝖎𝖎𝖐𝖚𝖆𝖓'
global.author = '𝙕𝙮𝙠𝙪𝙖𝙣|WANGSAFF BOT+6282133532380'
global.lolkey = 'Atakbotz'
global.email = 'jiikuanamakawa@gmail.com'
global.youtubeowner = '-'
global.websiteowner = 'https://github.com/Jiikuan'
global.githubname = 'Jiikuan/AmakawaZKN'
global.region = 'Indonesia/Japan'
global.sessionName = "session"
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.simbol = "➭"
global.rkyt = []

// BIARIN:v
global.creator = '© 𝙕𝙮𝙠𝙪𝙖𝙣|_*BE SMART USER*_'

// LIMIT
global.limitawal = {
premium: "infinity",
free: 50
}

global.mess = {
error: 'Error :(',
success: 'Success|𝙕𝙮𝙠𝙪𝙖𝙣',
admin: 'Luwh etmin bukan ? Tch',
botAdmin: 'Gweh belum admin jir, mana bisa fiturnya',
owner: 'Luwh Owner kah? AwokAwok',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
wait: '```Loading...|Zykuan```',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
noRegis: 'Kamu Belum Terdaftar Di Database Bot Silahkan Ketik\nExample:\n#daftar nama|umur\nContoh:\n#daftar Zykuan|15',
}

// RANDOM
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//BATAS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
