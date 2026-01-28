import fs from 'fs';

let handler = async (m, { conn, usedPrefix, command }) => {
  // --- REACCIÓN DINÁMICA ---
  const reaccionesNsfw = ['🔥', '🥵', '🔞', '🍑', '🫦', '💦'];
  const reacc = reaccionesNsfw[Math.floor(Math.random() * reaccionesNsfw.length)];
  await m.react(reacc);

  // --- LÓGICA DE IMAGEN DINÁMICA ---
  let pp = 'https://image2url.com/r2/default/images/1769566915633-060e3bca-0206-4780-9c4e-32a33fd6d751.jpeg'; 
  try {
    if (fs.existsSync('./src/database/menu.json')) {
      const json = JSON.parse(fs.readFileSync('./src/database/menu.json', 'utf-8'));
      if (json.menuImg) pp = json.menuImg;
    }
  } catch (e) { 
    console.log("Error al leer menu.json en el menú NSFW");
  }

  const texto = `
🔞✨⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐍𝐒𝐅𝐖 (𝐂𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐩𝐚𝐫𝐚 𝐚𝐝𝐮𝐥𝐭𝐨𝐬) 🍑🔥⊹

*¿Estás buscando emociones fuertes o solo quieres jugar conmigo?* 🫦✨

★꙲⃝͟🔞 *${usedPrefix}anal* + <mencion> > ✦ Hacer un anal.
★꙲⃝͟🔞 *${usedPrefix}waifu* > ✦ Busca una waifu aleatoria.
★꙲⃝͟🔞 *${usedPrefix}bath* + <mencion> > ✦ Bañarse.
★꙲⃝͟🔞 *${usedPrefix}blowjob • #bj* + <mencion> > ✦ Dar una mamada.
★꙲⃝͟🔞 *${usedPrefix}boobjob* + <mencion> > ✦ Hacer una rusa.
★꙲⃝͟🔞 *${usedPrefix}cum* + <mencion> > ✦ Venirse en alguien.
★꙲⃝͟🔞 *${usedPrefix}fap* + <mencion> > ✦ Hacerse una paja.
★꙲⃝͟🔞 *${usedPrefix}ppcouple • #ppcp* > ✦ Imágenes para parejas.
★꙲⃝͟🔞 *${usedPrefix}footjob* + <mencion> > ✦ Paja con los pies.
★꙲⃝͟🔞 *${usedPrefix}fuck • #coger* + <mencion> > ✦ Follarte a alguien.
★꙲⃝͟🔞 *${usedPrefix}cafe • #coffe* > ✦ Tomate un cafecito.
★꙲⃝͟🔞 *${usedPrefix}violar • #perra* + <mencion> > ✦ Viola a alguien.
★꙲⃝͟🔞 *${usedPrefix}grabboobs* + <mencion> > ✦ Agarrar tetas.
★꙲⃝͟🔞 *${usedPrefix}grop* + <mencion> > ✦ Manosear a alguien.
★꙲⃝͟🔞 *${usedPrefix}lickpussy* + <mencion> > ✦ Lamer un coño.
★꙲⃝͟🔞 *${usedPrefix}rule34 • #r34* + [Tags] > ✦ Buscar en Rule34.
★꙲⃝͟🔞 *${usedPrefix}sixnine • #69* + <mencion> > ✦ Haz un 69.
★꙲⃝͟🔞 *${usedPrefix}spank • #nalgada* + <mencion> > ✦ Dar una nalgada.
★꙲⃝͟🔞 *${usedPrefix}suckboobs* + <mencion> > ✦ Chupar tetas.
★꙲⃝͟🔞 *${usedPrefix}undress • #encuerar* + <mencion> > ✦ Desnudar.
★꙲⃝͟🔞 *${usedPrefix}yuri • #tijeras* + <mencion> > ✦ Hacer tijeras.
╰────︶.︶ ⸙ ͛ ͎ ͛  ︶.︶ ੈ₊˚༅
  `.trim();

  await conn.sendMessage(m.chat, {
    image: { url: pp },
    caption: texto,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '🔞 Zona Prohibida - RubyBot',
        body: 'Contenido solo para adultos',
        thumbnailUrl: pp,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

// Se agregó una expresión regular para que acepte los comandos con mayor flexibilidad
handler.command = /^(menunsfw|nsfwmenu)$/i;
handler.register = true;

export default handler;