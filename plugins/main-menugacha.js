import fs from 'fs';

let handler = async (m, { conn }) => {
  // --- REACCIÓN ÚNICA ALEATORIA ---
  const reaccionesGacha = ['🎭', '✨', '🌟', '🃏', '🌸', '🎎'];
  const reacc = reaccionesGacha[Math.floor(Math.random() * reaccionesGacha.length)];
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
✨⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐠𝐚𝐜𝐡𝐚 𝐩𝐚𝐫𝐚 𝐫𝐞𝐜𝐥𝐚𝐦𝐚𝐫 𝐲 𝐜𝐨𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚𝐫 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬 🎭🌟⊹

̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#rollwaifu • #rw • #roll*
> ✦ Waifu o husbando aleatorio.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#claim • #c • #reclamar*
> ✦ Reclamar un personaje.
🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#delclaimmsg*
> ✦ Restablecer el mensaje al reclamar un personaje. 
🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#setclaim • #setclaimmsg*
> ✦ Modificar el mensaje al reclamar un personaje
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#buycharacter • #buychar • #comprarwaifu*
> ✦ Comprar un personaje en venta.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#harem • #waifus • #claims*
> ✦ Ver tus personajes reclamados.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#removerwaifu • #removesale*
> ✦ Eliminar un personaje en venta.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#sell • #vender + [nombre] [precio]*
> ✦ Poner un personaje a la venta.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#charimage • #waifuimage • #wimage*
> ✦ Ver una imagen aleatoria de un personaje.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#charinfo • #winfo • #waifuinfo*
> ✦ Ver información de un personaje.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#favoritetop • #favtop*
> ✦ Ver el top de personajes favoritos del sistema.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#giveallharem • #regalarharem*
> ✦ Regalar todos tus personajes a otro usuario.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#infogacha • #ginfo • #gachainfo*
> ✦ Ver tu información personal del gacha.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#givechar • #givewaifu • #regalar*
> ✦ Regalar un personaje a otro usuario.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#setfav • #setfavorito*
> ✦ Poner de favorito a un personaje.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#vote • #votar*
> ✦ Votar por un personaje para subir su valor.
̟ׄ🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#waifusboard • #waifustop • #topwaifus*
> ✦ Ver el top de personajes con mayor valor.
🐟▒⃝᪶ᩙ᷼͠꜇ָ—— *#delwaifu • #deletewaifu • #delchar*
> ✦ Eliminar un personaje reclamado.
ੈ₊˚༅༴╰────︶.︶ ⸙ ͛ ͎ ͛  ︶.︶ ੈੈ₊˚
  `.trim();

  await conn.sendMessage(m.chat, {
    image: { url: pp },
    caption: texto,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'Colección Gacha | RubyBot',
        body: '¡Consigue a tu personaje favorito!',
        thumbnailUrl: pp,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

handler.command = ['menugacha'];
handler.register = true;

export default handler;