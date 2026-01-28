import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

// --- VALORES LIMPIOS ---
const newsletterJid = '' 
const newsletterName = ''
const packname = '𝚁𝚄𝙱𝚈 𝙱𝙾𝚃 𝙼𝙳 ˃ 𖥦 ˂'

const iconos = ['https://qu.ax/wwbar.jpg','https://qu.ax/iFzQw.jpeg','https://qu.ax/dsZyo.jpeg','https://qu.ax/eNdBB.jpeg','https://qu.ax/MSzGw.jpeg','https://qu.ax/JqMBW.jpeg','https://qu.ax/HKcSr.jpeg','https://qu.ax/HOuUU.jpeg','https://qu.ax/ojUNn.jpeg','https://qu.ax/HtqBi.jpeg','https://qu.ax/bmQOA.jpeg','https://qu.ax/nTFtU.jpeg','https://qu.ax/PYKgC.jpeg','https://qu.ax/exeBy.jpeg','https://qu.ax/SCxhf.jpeg','https://qu.ax/sqxSO.jpeg','https://qu.ax/cdSYJ.jpeg','https://qu.ax/dRmZY.jpeg','https://qu.ax/ubwLP.jpg','https://qu.ax/JSgSc.jpg','https://qu.ax/FUXJo.jpg','https://qu.ax/qhKUf.jpg','https://qu.ax/mZKgt.jpg']

const getRandomIcono = () => iconos[Math.floor(Math.random() * iconos.length)]

const toFancy = (str) => {
    const map = {'a':'ᥲ','b':'ᑲ','c':'ᥴ','d':'ᑯ','e':'ᥱ','f':'𝖿','g':'g','h':'һ','i':'і','j':'j','k':'k','l':'ᥣ','m':'m','n':'ᥒ','o':'᥆','p':'⍴','q':'q','r':'r','s':'s','t':'𝗍','u':'ᥙ','v':'᥎','w':'ɯ','x':'x','y':'ᥡ','z':'z','A':'A','B':'B','C':'C','D':'D','E':'E','F':'F','G':'G','H':'H','I':'I','J':'J','K':'K','L':'L','M':'M','N':'N','O':'O','P':'P','Q':'Q','R':'R','S':'S','T':'T','U':'U','V':'V','W':'W','X':'X','Y':'Y','Z':'Z'}
    return str.split('').map(c => map[c] || c).join('')
}

export async function before(m, {conn, participants, groupMetadata}) {
    if (!m.messageStubType || !m.isGroup) return true
    const chat = global.db.data.chats[m.chat]
    if (!chat || !chat.welcome) return true
    
    const primaryBot = chat.botPrimario
    if (primaryBot && conn.user.jid !== primaryBot) return true
    
    const userId = m.messageStubParameters[0]
    const pp = await conn.profilePictureUrl(userId, 'image').catch(() => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg')
    const username = `@${userId.split('@')[0]}`
    const groupName = groupMetadata.subject
    const desc = groupMetadata.desc?.toString() || 'Sin descripción'
    const groupSize = groupMetadata.participants.length
    const fecha = new Date().toLocaleDateString("es-ES", {timeZone: "America/Santo_Domingo", day: 'numeric', month: 'long', year: 'numeric'})

    // --- BIENVENIDA ---
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
        let text
        if (chat.welcomeText) {
            text = chat.welcomeText.replace(/@user/g, username).replace(/@subject/g, groupName).replace(/@desc/g, desc)
        } else {
            text = `︶᮫໋۪۪᷼͡⏝᜔໋〫᷑ׄ♡᜔ׅ𝆬۟┅᮫໋ׅׄ᪲︶᮫᜔ׅᷭ͡⏝᮫᜔〪ׅ〫𝆬⢥ֶ𝆬✿۪۪𝆬֟🍒̷̸᩠〪۪۪〫〫〫ᷭ✿ֶ〫𝆬\n\n\`\`\`B I E N V E N I D O\`\`\`\n\n*${toFancy("Usuario")}* ${username}\n*${toFancy("Grupo")}* ${groupName}\n\n_*/𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐦𝐮𝐜𝐡𝐨 𝐩𝐨𝐫 𝐥𝐨 𝐜𝐮𝐚𝐥 𝐜𝐫𝐞𝐜𝐞𝐫/*_`.trim()
        }
        
        await conn.sendMessage(m.chat, {
            image: {url: pp},
            caption: text,
            contextInfo: {
                mentionedJid: [userId],
                isForwarded: false, // Desactivado
                forwardingScore: 0,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '',
                    newsletterName: '',
                    serverMessageId: -1
                },
                externalAdReply: {
                    title: '  ͟͞ Ｗ Ｅ Ｌ Ｃ Ｏ Ｍ Ｅ ͟͞  ',
                    body: `RubyBot 2.0 | ${groupName}`,
                    thumbnailUrl: getRandomIcono(),
                    sourceUrl: '', // URL limpia
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        }, {quoted: null})
    }

    // --- DESPEDIDA ---
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
        let text
        if (chat.byeText) {
            text = chat.byeText.replace(/@user/g, username).replace(/@subject/g, groupName)
        } else {
            text = `︶᮫໋۪۪᷼͡⏝᜔໋〫᷑ׄ♡᜔ׅ𝆬۟┅᮫໋ׅׄ᪲︶᮫᜔ׅᷭ͡⏝᮫᜔〪ׅ〫𝆬⢥ֶ𝆬✿۪۪𝆬֟🍒̷̸᩠〪۪۪〫〫〫ᷭ✿ֶ〫𝆬\n\n\`\`\`S A Y O N A R A\`\`\`\n\n*${toFancy("Se ha ido un usuario...")}*`.trim()
        }
        
        await conn.sendMessage(m.chat, {
            image: {url: pp},
            caption: text,
            contextInfo: {
                mentionedJid: [userId],
                isForwarded: false, // Desactivado
                forwardingScore: 0,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '',
                    newsletterName: '',
                    serverMessageId: -1
                },
                externalAdReply: {
                    title: '  ͟͞ Ａ Ｄ Ｉ Ｏ́ Ｓ ͟͞  ',
                    body: `RubyBot 2.0 | Hasta la próxima`,
                    thumbnailUrl: getRandomIcono(),
                    sourceUrl: '', // URL limpia
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        }, {quoted: null})
    }
}

export default {before}