

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = '«𝒍𝒐𝒓𝒅.𝒐𝒇𝒄»🇮'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/J2WSHjiX65nICRczuTU2Lw'
global.linkig = 'https://www.instagram.com/reel/Ccx79E0A8Rt/?igshid=YmMyMTA2M2Y='
global.linkyt = 'https://youtu.be/RnpyRe_7jZA'
global.linkfb = 'https://fb.watch/aYv0jAffAO'
global.web = 'https://raselcomel.github.io'
global.web1 = 'https://anu.rasell.repl.co'
global.linkgh = 'https://github.com/elhouarii'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'JOOY-BOT'
// Other
global.watermark = '«𝒔𝒂𝒏𝒋𝒊»ᵐᵃ'
global.owner = ['212646240638']
global.premium = ['212646240638']
global.packname = 'SANJI JOOY'
global.author = '𝐒𝐀𝐍𝐉𝐈'
global.sessionName = 'lord'
global.prefa = ['','!','.','🐦',',','*']
global.sp = '❄︎'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
