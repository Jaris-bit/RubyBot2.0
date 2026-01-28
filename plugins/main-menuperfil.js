import fs from 'fs';

let handler = async (m, { conn, usedPrefix }) => {
  // --- REACCIÓN DINÁMICA ---
  const reaccionesPerfil = ['🆔', '💍', '💌', '👤', '🎭'];
  await m.react(reaccionesPerfil[Math.floor(Math.random() * reaccionesPerfil.length)]);

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

  const texto = `
🆔✨⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐩𝐞𝐫𝐟𝐢𝐥 ⊹ 📇🔍

*¿Vienes a cambiar tu destino o a buscar a tu alma gemela?* 💍🎭

░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}reg • #verificar*
> ✦ Registra tu nombre y edad en el bot.
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}unreg*
> ✦ Elimina tu registro del bot.
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}profile*
> ✦ Muestra tu perfil de usuario.
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}marry* + <@mencion>
> ✦ Propón matrimonio... si te atreves al compromiso. 💍
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}divorce*
> ✦ Rompe el corazón de alguien y divórciate. 💔
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}setgenre • #setgenero*
> ✦ Define quién eres ante el mundo.
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}setbirth • #setnacimiento*
> ✦ No olvides el día que llegaste a este mundo.
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}setdescription • #setdesc*
> ✦ Cuéntale tu historia a los demás.
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}lb • #lboard*
> ✦ El podio de los más grandes y poderosos.
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}level • #lvl*
> ✦ Comprueba qué tan lejos has llegado.
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}premium*
> ✦ Consigue el pase VIP para un trato especial. ✨
░ ⃝🌀ᩧ᳕ᬵ *${usedPrefix}confesar*
> ✦ Di lo que sientes en secreto... el drama anónimo. 💌
╰────︶.︶ ⸙ ͛ ͎ ͛  ︶.︶ ੈ₊˚༅
  `.trim();

  // ENVÍO SIMPLIFICADO: Sin externalAdReply para evitar bloqueos de red
  await conn.sendMessage(m.chat, {
    image: { url: pp },
    caption: texto,
    mentions: [m.sender]
  }, { quoted: m });
};

handler.command = ['menuperfil', 'perfilmenu'];
export default handler;