import { promises as fs } from 'fs';

const charactersFilePath = './src/database/characters.json';
const haremFilePath = './src/database/harem.json';

export const cooldowns = {};
global.activeRolls = global.activeRolls || {};

async function loadCharacters() {
    try {
        const data = await fs.readFile(charactersFilePath, 'utf-8');
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

let handler = async (m, { conn, usedPrefix }) => {
    const userId = m.sender;
    const now = Date.now();

    if (cooldowns[userId] && now < cooldowns[userId]) {
        const remainingTime = Math.ceil((cooldowns[userId] - now) / 1000);
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return await conn.reply(m.chat, `( ⸝⸝･̆⤚･̆⸝⸝) ¡𝗗𝗲𝗯𝗲𝘀 𝗲𝘀𝗽𝗲𝗿𝗮𝗿 *${minutes}m y ${seconds}s* 𝗽𝗮𝗿𝗮 𝘃𝗼𝗹𝘃𝗲𝗿 𝗮 𝘂𝘀𝗮𝗿 *#rw*!`, m);
    }

    try {
        const characters = await loadCharacters();

        if (characters.length === 0) {
            return await conn.reply(m.chat, `*¡Qué vacío está este mundo!* 🌌✨\nNo hay personajes registrados. \n\n> 💡 *Usa:* \`${usedPrefix}addcharacter\` para empezar la historia.`, m);
        }

        // --- SELECCIÓN DEL PERSONAJE ---
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        
        // --- SELECCIÓN DE IMAGEN (MEJORADA) ---
        // Si solo hay una imagen, el índice siempre será 0
        const charImages = randomCharacter.img || [];
        if (charImages.length === 0) {
            return await conn.reply(m.chat, `*¡Error!* 🎭 El personaje *${randomCharacter.name}* no tiene fotos registradas.`, m);
        }
        
        const randomImage = charImages.length === 1 
            ? charImages[0] 
            : charImages[Math.floor(Math.random() * charImages.length)];

        const statusMessage = randomCharacter.user 
            ? `🚫 Ocupado (@${randomCharacter.user.split('@')[0]})` 
            : '✅ Libre';

        if (!randomCharacter.user) {
            global.activeRolls[randomCharacter.id] = {
                user: userId,
                time: Date.now()
            };
        }

        const message = `︵ᮬ⌒⏜︵፝֟ᮬ⏜︵ᮬ⌒⏜ᮬ
 ꒰͜  ✦ 𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑 𝐑𝐎𝐋𝐋 ✦ ͜꒱
⎯⎯⎯⎯⎯⎯  ׁ︩︪᷼  ᮫ ︪︩ໍ ܻ݊᷼🍂ܻ݊᷼ᩨᤢ ︩︪᷼ ᮫ ࣫⎯⎯⎯⎯⎯⎯⎯

👤 𝐍𝐨𝐦𝐛𝐫𝐞 ╰┈➤ *${randomCharacter.name}*
⚧ 𝐆𝐞𝐧𝐞𝐫𝐨 ╰┈➤ *${randomCharacter.gender}*
🪙 𝐕𝐚𝐥𝐨𝐫   ╰┈➤ *${randomCharacter.value}*
📊 𝐄𝐬𝐭𝐚𝐝𝐨  ╰┈➤ ${statusMessage}
📖 𝐅𝐮𝐞𝐧𝐭𝐞  ╰┈➤ *${randomCharacter.source}*
🆔 𝐈𝐃      ╰┈➤ *${randomCharacter.id}*

⎯⎯⎯⎯⎯⎯  ׁ︩︪᷼  ᮫ ︪︩ໍ ܻ݊᷼🍪ܻ݊᷼ᩨᤢ ︩︪᷼ ᮫ ࣫⎯⎯⎯⎯⎯⎯⎯`.trim();

        const mentions = randomCharacter.user ? [randomCharacter.user] : [];
        
        // Enviamos la imagen con un pequeño delay para asegurar la carga
        await conn.sendMessage(m.chat, { 
            image: { url: randomImage }, 
            caption: message, 
            mentions 
        }, { quoted: m });

        cooldowns[userId] = now + 15 * 60 * 1000;

    } catch (error) {
        console.error(error);
        await conn.reply(m.chat, `*¡Drama en el sistema!* 🥀 No se pudo mostrar el personaje.`, m);
    }
};

handler.help = ['rw', 'rollwaifu'];
handler.tags = ['gacha'];
handler.command = ['rw', 'rollwaifu'];
handler.group = true;

export default handler;