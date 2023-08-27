let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐜𝐮𝐩𝐨_𝐡𝐮𝐞𝐬𝐢𝐭𝐨:: ${pesan}`
let teks = `🖤 𝐁𝐔𝐄𝐍𝐎𝐒 𝐃𝐈́𝐀𝐒 𝐂𝐇𝐈𝐂𝐎𝐒,𝐀𝐂𝐓𝐈𝐕𝐄𝐍 𝐂𝐎𝐍 𝐋𝐀 𝐋𝐈𝐒𝐓𝐀🖤 \n\n❏ ${oi}\n❏ 👨🏻‍💻🖤 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `🎮  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐁𝐎𝐓 𝐃𝐄 𝐇𝐔𝐄𝐒𝐈𝐓𝐎☠️`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
