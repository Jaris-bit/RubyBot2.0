import { promises } from 'fs';
import fs from 'fs';
import { join } from 'path';
import fetch from 'node-fetch';
import { xpRange } from '../lib/levelling.js';
import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';
import moment from 'moment-timezone';

const defaultMenu = {
  before: `𝙃𝙤𝙡𝙖 *%name* ${ucapan()}
𝙢𝙞 𝙣𝙤𝙢𝙗𝙧𝙚 𝙚𝙨 𝙍𝙪𝙗𝙮, 𝙮 𝙩𝙚 𝙙𝙚𝙨𝙚𝙤 𝙡𝙤 𝙢𝙚𝙟𝙤𝙧 𝙚𝙣 𝙩𝙪 𝙫𝙞𝙖𝙟𝙚! 🧴 𖹥

♡   ∩_∩
（„• ֊ •„)♡
┏━━∪∪━⏤͟͟͞͞★꙲⃝͟🌷❈┉━━━┓
┃   *𝖨𝖭𝖥𝖮 𝖣𝖤 𝖫𝖠 𝖡𝖮𝖳* ┃┈──❊:::::::¨¨*:::::::❊──┈
┃ ◦ 👑 *Creador:* Dioneibi
┃ ◦ 🌎 *Modo:* Pública
┃ ◦ 💻 *Baileys:* Multi Device
┃ ◦ ⏰ *Tiempo Activa:* %uptime
┃ ◦ 👥 *Usuarios:* %totalreg
┗━━━━⏤͟͟͞͞★꙲⃝͟🌷❈┉━━━━━━┛`.trim(),
};

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    // --- REACCIÓN ALEATORIA (Amor & Drama) ---
    const loveDrama = ['💞', '💖', '💘', '🎭', '🌹', '✨', '💎', '🍭'];
    await m.react(loveDrama[Math.floor(Math.random() * loveDrama.length)]);

    // --- LÓGICA DE IMAGEN DINÁMICA ---
    let pp = 'https://image2url.com/r2/default/images/1769566915633-060e3bca-0206-4780-9c4e-32a33fd6d751.jpeg'; 
    try {
      if (fs.existsSync('./src/database/menu.json')) {
        const json = JSON.parse(fs.readFileSync('./src/database/menu.json', 'utf-8'));
        if (json.menuImg) pp = json.menuImg;
      }
    } catch (e) { 
      console.log("Error al leer menu.json");
    }

    let { exp, level, role } = global.db.data.users[m.sender];
    let name = await conn.getName(m.sender);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;

    // --- FKONTAK PURIFICADO CON IMAGEN DINÁMICA ---
    let fkontak = {
      key: { participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, id: 'RubyMenu' },
      message: {
        productMessage: {
          product: {
            productImage: { jpegThumbnail: await (await fetch(pp)).buffer() },
            title: '𝖬𝖤𝖭𝖴 𝖫𝖨𝖲𝖳 • 𝖱𝖴𝖡𝖸',
            description: '╰┈➤ 𝖨𝖭𝖳𝖤𝖱𝖠𝖢𝖳𝖨𝖵𝖤 𝖬𝖤𝖭𝖴',
            retailerId: 'RubyBot-Global',
            productImageCount: 1
          },
          businessOwnerJid: '0@s.whatsapp.net'
        }
      },
      participant: '0@s.whatsapp.net'
    };

    let media = await prepareWAMessageMedia({ image: { url: pp } }, { upload: conn.waUploadToServer });

    // --- SECCIONES DEL MENÚ ---
    let sections = [{
      title: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐈",
      rows: [
        { title: "⏤͟͟͞͞🪷⃞⃝⃤ 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢", description: "🍧 Muestra todos los comandos de Ruby", id: `${_p}menuall` },
        { title: "⏤͟͟͞͞🍜⃞⃝⃤ 𝗠𝗘𝗡𝗨́ 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦", description: "🎧 Audio, videos, IG, FB, TikTok", id: `${_p}menudescargas` },
        { title: "⏤͟͟͞͞🫧⃞⃝⃤ 𝗠𝗘𝗡𝗨́ 𝗘𝗖𝗢ＮΟ𝗠𝗜́Α & 𝗥𝗣𝗚", description: "🎮 Mina, caza y domina el RPG", id: `${_p}menueconomia` },
        { title: "⏤͟͟͞͞🐝⃞⃝⃤ 𝗠𝗘𝗡𝗨́ 𝗚Α𝗖𝗛Α", description: "🎭 Colecciona héroes épicos", id: `${_p}menugacha` },
        { title: "⏤͟͟͞͞🫛⃞⃝⃤ 𝗠𝗘𝗡𝗨́ 𝗗𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦", description: "✨ Stickers animados y únicos", id: `${_p}menusticker` },
        { title: "⏤͟͟͞͞🧊⃞⃝⃤ 𝗠𝗘𝗡𝗨́ 𝗛𝗘𝗥𝗥Α𝗠𝗜𝗘𝗡𝗧Α𝗦", description: "⚙️ Comandos útiles para todo", id: `${_p}menuherramientas` },
        { title: "⏤͟͟͞͞🍬⃞⃝⃤ 𝗠𝗘𝗡𝗨́ 𝗗Ε 𝗣Ε𝗥𝗙𝗜𝗟", description: "🧩 Registro y estado de usuario", id: `${_p}menuperfil` },
        { title: "⏤͟͟͞͞🍟⃞⃝⃤ 𝗠Ε𝗡𝗨́ 𝗗Ε 𝗚𝗥𝗨𝗣𝗢𝗦", description: "🌐 Administración de grupos", id: `${_p}menugrupo` },
        { title: "⏤͟͟͞͞🍥⃞⃝⃤ 𝗠Ε𝗡𝗨́ 𝗗Ε 𝗔𝗡𝗜𝗠Ε", description: "💢 Reacciones de anime icónicas", id: `${_p}menuanime` },
        { title: "⏤͟͟͞͞🥡⃞⃝⃤ 𝗠Ε𝗡𝗨́ 𝗗Ε 𝗝𝗨Ε𝗚Ο𝗦", description: "🎲 Mini-juegos y retos", id: `${_p}menujuegos` },
        { title: "⏤͟͟͞͞🍹⃞⃝⃤ 𝗠Ε𝗡𝗨́ 𝗣𝗜𝗖𝗔𝗡𝗧𝗘 (NSFW)", description: "🔞 Contenido para adultos (+18)", id: `${_p}menunsfw` },
        { title: "⏤͟͟͞͞🎲⃞⃝⃤ 𝗠ΕΝ𝗨́ 𝗗Ε 𝗕𝗨́𝗦𝗤𝗨Ε𝗗Α𝗦", description: "🌍 Info, letras y videos online", id: `${_p}menubusquedas` }
      ]
    }];

    let bodyText = `
🪷ᩚ⃟꙰⟡˖ ࣪𝗜𝖭𝖥𝖮 𝖣𝖤𝖫 𝖴𝖲𝖴𝖠𝖱𝖨𝖮 🪷⃟✿˚
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌷❈┉━━━━─
ი ̯ 🎋̸̶ *𝖭𝖮𝖬𝖡𝖱𝖤*: %name
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🍁❈┉━━━━─
ი ̯ 🎋̸̶ *𝖤𝖷𝖯𝖤𝖱𝖨𝖤𝖭𝖢𝖨𝖠:* %exp
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🍁❈┉━━━━─
ი ̯ 🎋̸̶ *𝖭𝖨𝖵𝖤𝖫:* %level
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🍁❈┉━━━━─
ი ̯ 🎋̸̶ *𝖱𝖠𝖭𝖦𝖮:* %role
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🍁❈┉━━━━─`.trim();

    bodyText = bodyText.replace(/%name/g, name).replace(/%exp/g, exp).replace(/%level/g, level).replace(/%role/g, role);
    let beforeText = defaultMenu.before.replace(/%name/g, name).replace(/%uptime/g, uptime).replace(/%totalreg/g, totalreg);

    const interactiveMessage = {
      header: { title: "", hasMediaAttachment: true, imageMessage: media.imageMessage },
      body: { text: `${beforeText}\n\n${bodyText}` },
      footer: { text: "usa #menumanual si no puedes usar los botones" },
      nativeFlowMessage: {
        buttons: [
          { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "꒰꒰ 🍒 𝐌𝖾𝗇𝗎 𝐌𝖺𝗇𝗎𝖺𝗅 Ი꯭ᰍ", id: `${_p}menumanual` }) },
          { name: "single_select", buttonParamsJson: JSON.stringify({ title: " ❀⃘⃛͜ ۪۪۪݃𓉘᳟ี ⃞̸͢𑁃 ̚𓉝᳟ี𝐌𝐄𝐍𝐔 𝐁𝐎𝐓❀⃘⃛͜", sections: sections }) }
        ]
      }
    };

    let msgi = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { interactiveMessage } } }, { userJid: conn.user.jid, quoted: fkontak || m });
    await conn.relayMessage(m.chat, msgi.message, { messageId: msgi.key.id });

  } catch (e) {
    conn.reply(m.chat, `꒰ 💔 Oops... ꒱ no se pudo cargar el menú.\n\n*Razón:* ${e}`, m);
    throw e;
  }
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.register = true;
handler.command = ['menu', 'menú', 'help', 'listmenu'];

export default handler;

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  return [d, 'd ', h, 'h ', m, 'm'].map(v => v.toString().padStart(2, '0')).join('');
}

function ucapan() {
  const time = moment.tz('America/Lima').format('HH');
  if (time >= 5 && time < 12) return "𝘽𝙪𝙚𝙣𝙤𝙨 𝘿𝙞́𝙖𝙨 ☀️";
  if (time >= 12 && time < 18) return "𝘽𝙪𝙚𝙣𝙖𝙨 𝙏𝙖𝙧𝙙𝙚𝙨 🌤️";
  return "𝘽𝙪𝙚𝙣𝙖𝙨 𝙉𝙤𝙘𝙝𝙚𝙨 🌙";
}