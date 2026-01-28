import fs from 'fs';

let handler = async (m, { conn }) => {
  // --- REACCIÓN ÚNICA ALEATORIA (Estilo Técnico) ---
  const reaccionesTools = ['🛠️', '⚙️', '🧱', '🔍', '🧪', '📐'];
  const reacc = reaccionesTools[Math.floor(Math.random() * reaccionesTools.length)];
  await m.react(reacc);

  // --- LÓGICA DE IMAGEN DINÁMICA ---
  let pp = 'https://image2url.com/r2/default/images/1769566915633-060e3bca-0206-4780-9c4e-32a33fd6d751.jpeg'; 
  try {
    if (fs.existsSync('./src/database/menu.json')) {
      const json = JSON.parse(fs.readFileSync('./src/database/menu.json', 'utf-8'));
      if (json.menuImg) pp = json.menuImg;
    }
  } catch (e) { 
    console.log("Error al leer menu.json, usando imagen por defecto");
  }

  const texto = `
🛠️✨⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐡𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬 𝐜𝐨𝐧 𝐦𝐮𝐜𝐡𝐚𝐬 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐞𝐬 ⚙️

⢷ ꉹᩙ   ִ ▒🎠ᩬ᷒ᰰ⃞   ˄᪲ *#calcular • #cal* > ✦ Calcular todo tipo de ecuaciones.
⢷ ꉹᩙ   ִ ▒🎠ᩬ᷒ᰰ⃞   ˄᪲ *#horario* > ✦ Ver el horario global de los países.
⢷ ꉹᩙ   ִ ▒🎡ᩬ᷒ᰰ⃞   ˄᪲ *#fake • #fakereply* > ✦ Crea un mensaje falso de un usuario.
⢷ ꉹᩙ   ִ ▒🎠ᩬ᷒ᰰ⃞   ˄᪲ *#enhance • #remini • #hd* > ✦ Mejora la calidad de una imagen.
⢷ ꉹᩙ   ִ ▒🎡ᩬ᷒ᰰ⃞   ˄᪲ *#letra* > ✦ Cambia la fuente de las letras.
⢷ ꉹᩙ   ִ ▒🎠ᩬ᷒ᰰ⃞   ˄᪲ *#read • #readviewonce • #ver* > ✦ Ver imágenes de una sola vista.
⢷ ꉹᩙ   ִ ▒🎡ᩬ᷒ᰰ⃞   ˄᪲ *#whatmusic • #shazam* > ✦ Descubre el nombre de canciones o vídeos.
⢷ ꉹᩙ   ִ ▒🎠ᩬ᷒ᰰ⃞   ˄᪲ *#spamwa • #spam* > ✦ Envía spam a un usuario.
⢷ ꉹᩙ   ִ ▒🎡ᩬ᷒ᰰ⃞   ˄᪲ *#ss • #ssweb* > ✦ Ver el estado de una página web.
⢷ ꉹᩙ   ִ ▒🎠ᩬ᷒ᰰ⃞   ˄᪲ *#length • #tamaño* > ✦ Cambia el tamaño de imágenes y vídeos.
⢷ ꉹᩙ   ִ ▒🎡ᩬ᷒ᰰ⃞   ˄᪲ *#say • #decir* + [texto] 
⢷ ꉹᩙ   ִ ▒🎡ᩬ᷒ᰰ⃞   ˄᪲ *#setimgmenu* > Cambia la imagen de los menus
> ✦ Repetir un mensaje.
⢷ ꉹᩙ   ִ ▒🎠ᩬ᷒ᰰ⃞   ˄᪲ *#todoc • #toducument* > ✦ Crea documentos de (audio, imágenes y vídeos).
⢷ ꉹᩙ   ִ ▒🎡ᩬ᷒ᰰ⃞   ˄᪲ *#translate • #traducir • #trad* > ✦ Traduce palabras en otros idiomas.
╰────︶.︶ ⸙ ͛ ͎ ͛  ︶.︶ ੈ₊˚༅
  `.trim();

  await conn.sendMessage(m.chat, {
    image: { url: pp },
    caption: texto,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '🛠️ Multi-Herramientas',
        body: 'RubyBot 2.0 | Utilidades',
        thumbnailUrl: pp,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

handler.command = ['menuherramientas', 'herramientasmenu'];
handler.register = true;

export default handler;