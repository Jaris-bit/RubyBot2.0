import { promises as fs } from 'fs'

const charactersFilePath = './src/database/characters.json'

async function loadCharacters() {
    try {
        const data = await fs.readFile(charactersFilePath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        throw new Error('❀ No se pudo cargar el archivo characters.json.')
    }
}

let handler = async (m, { conn, args, participants }) => {
    try {
        const characters = await loadCharacters()
        let rawUserId
        const now = Date.now()
        const abandonTime = 24 * 60 * 60 * 1000 // 24 Horas

        if (m.quoted && m.quoted.sender) {
            rawUserId = m.quoted.sender
        } else if (m.mentionedJid && m.mentionedJid[0]) {
            rawUserId = m.mentionedJid[0]
        } else if (args[0] && args[0].startsWith('@')) {
            rawUserId = args[0].replace('@', '') + '@s.whatsapp.net'
        } else {
            rawUserId = m.sender
        }

        let userId = rawUserId
        if (rawUserId.endsWith('@lid') && m.isGroup) {
            const pInfo = participants.find(p => p.lid === rawUserId)
            if (pInfo && pInfo.id) userId = pInfo.id
        }

        const userCharacters = characters.filter(character => character.user === userId)

        if (userCharacters.length === 0) {
            await m.react('🌌')
            await conn.reply(m.chat, '❀ *Este harem está desierto... no hay amor que encontrar aquí.*', m)
            return
        }

        let pageArg = args.find(arg => /^\d+$/.test(arg))
        const page = parseInt(pageArg) || 1
        const charactersPerPage = 50
        const totalCharacters = userCharacters.length
        const totalPages = Math.ceil(totalCharacters / charactersPerPage)
        const startIndex = (page - 1) * charactersPerPage
        const endIndex = Math.min(startIndex + charactersPerPage, totalCharacters)

        if (page < 1 || page > totalPages) {
            await m.react('🌀')
            await conn.reply(m.chat, `❀ Página no válida. Hay *${totalPages}* páginas en el destino.`, m)
            return
        }

        let message = `✿ *𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬 𝐑𝐞𝐜𝐥𝐚𝐦𝐚𝐝𝐨𝐬* ✿\n`
        message += `⌦ Usuario: @${userId.split('@')[0]}\n`
        message += `♡ Personajes: *(${totalCharacters})*\n\n`

        let tieneFugitivos = false

        for (let i = startIndex; i < endIndex; i++) {
            const character = userCharacters[i]
            const isEscaping = (now - (character.lastInteraction || 0)) > abandonTime

            if (isEscaping) {
                message += `🥀 *${character.name}* (¡𝐄𝐒𝐂𝐀𝐏𝐀𝐍𝐃𝐎!)\n`
                tieneFugitivos = true
            } else {
                message += `» *${character.name}* (*${character.value}*)\n`
            }
        }

        message += `\n> ⌦ _Página *${page}* de *${totalPages}*_`

        if (tieneFugitivos) {
            await m.react('🥀')
            if (userId === m.sender) {
                message += `\n\n⚠️ *¡𝐃𝐄𝐒𝐂𝐔𝐈𝐃𝐀𝐃𝐎!* ⚠️\nTus personajes están huyendo de tu falta de amor. ¡Usa *.recuperar* antes de que alguien te los robe!`
            } else {
                message += `\n\n😈 *¡𝐎𝐏𝐎𝐑𝐓𝐔𝐍𝐈𝐃𝐀𝐃!* 😈\nEste harem tiene fugitivos. ¡Responde a este mensaje con *.robarwaifu* y quédate con todo!`
            }
        } else {
            await m.react('🔮')
        }

        await conn.reply(m.chat, message, m, { mentions: [userId] })
    } catch (error) {
        await conn.reply(m.chat, `✘ Error místico: ${error.message}`, m)
    }
}

handler.help = ['harem']
handler.tags = ['anime']
handler.command = ['harem', 'claims', 'waifus']
handler.group = true

export default handler