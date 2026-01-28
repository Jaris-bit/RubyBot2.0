import { promises as fs } from 'fs'

const charactersFilePath = './src/database/characters.json'

async function loadCharacters() {
    const data = await fs.readFile(charactersFilePath, 'utf-8')
    return JSON.parse(data)
}

async function saveCharacters(characters) {
    await fs.writeFile(charactersFilePath, JSON.stringify(characters, null, 2), 'utf-8')
}

let handler = async (m, { conn, command }) => {
    const characters = await loadCharacters()
    const now = Date.now()
    const abandonTime = 24 * 60 * 60 * 1000

    // --- RECUPERAR (Tus propios personajes) ---
    if (command === 'recuperar') {
        const toRecover = characters.filter(c => c.user === m.sender && (now - (c.lastInteraction || 0)) > abandonTime)
        
        if (toRecover.length === 0) {
            await m.react('❌')
            return m.reply('*No tienes a nadie intentando escapar. ¡Buen trabajo manteniéndolos felices!*')
        }

        toRecover.forEach(c => {
            c.lastInteraction = now
            c.status = 'Reclamado'
        })

        await saveCharacters(characters)
        await m.react('❤️‍🩹')
        return m.reply(`*¡Rescate exitoso!* ❤️‍🩹\nHas recuperado a *${toRecover.length}* personajes. No vuelvas a ignorarlos... *el desamor duele.*`)
    }

    // --- ROBAR (Respondiendo al mensaje de la víctima) ---
    if (command === 'robarwaifu' || command === 'steal') {
        if (!m.quoted) {
            await m.react('❓')
            return m.reply('*⚠️ Debes responder al mensaje de alguien para robarle sus personajes fugitivos.*')
        }
        
        const targetId = m.quoted.sender
        if (targetId === m.sender) {
            await m.react('🤡')
            return m.reply('*¿Auto-robo? Eso ya es patético...*')
        }

        const toSteal = characters.filter(c => c.user === targetId && (now - (c.lastInteraction || 0)) > abandonTime)

        if (toSteal.length === 0) {
            await m.react('🛡️')
            return m.reply('*¡Fallo total!* 🚫\nNo hay personajes fugitivos en este harem. El dueño todavía los tiene bajo su hechizo.')
        }

        toSteal.forEach(c => {
            c.user = m.sender
            c.status = 'Reclamado'
            c.lastInteraction = now
        })

        await saveCharacters(characters)
        await m.react('😈')
        return conn.reply(m.chat, `*¡EL ATRACO DEL SIGLO!* 😈\n\nHas aprovechado el abandono de @${targetId.split('@')[0]} y te has llevado *${toSteal.length}* personajes.\n\n*Gracias por el regalo, descuido.*`, m, { mentions: [targetId, m.sender] })
    }
}

handler.help = ['robarwaifu', 'recuperar']
handler.tags = ['gacha']
handler.command = ['robarwaifu', 'steal', 'recuperar']
handler.group = true

export default handler