let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].limit = 10
        
}
handler.help = ['modlimit']
handler.tags = ['premium']
handler.command = /^(modlimit)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
