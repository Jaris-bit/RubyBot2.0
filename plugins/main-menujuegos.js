import fs from 'fs';

let handler = async (m, { conn }) => {
  // --- REACCIÓN ÚNICA ALEATORIA (Modo Gamer) ---
  const reaccionesJuegos = ['🎮', '🕹️', '🎲', '🧩', '🎯', '👾'];
  const reacc = reaccionesJuegos[Math.floor(Math.random() * reaccionesJuegos.length)];
  await m.react(reacc);

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
🎮✨⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐣𝐮𝐞𝐠𝐨𝐬 𝐩𝐚𝐫𝐚 𝐣𝐮𝐠𝐚𝐫 𝐜𝐨𝐧 𝐭𝐮𝐬 𝐚𝐦𝐢𝐠𝐨𝐬 🕹️🎲⊹

ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#amistad • #amigorandom* > ✦ Hacer amigos con un juego.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#chaqueta • #jalamela* > ✦ Hacerte una chaqueta.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#chiste* > ✦ La bot te cuenta un chiste.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#consejo* > ✦ La bot te da un consejo.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#doxeo • #doxear* + <mención>  
> ✦ Simular un doxeo falso.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#facto* > ✦ La bot te lanza un facto.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#formarpareja* > ✦ Forma una pareja.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#formarpareja5* > ✦ Forma 5 parejas diferentes.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#frase* > ✦ La bot te da una frase.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#huevo* > ✦ Agárrale el huevo a alguien.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#chupalo* + <mención>  
> ✦ Hacer que un usuario te la chupe.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#aplauso* + <mención>  
> ✦ Aplaudirle a alguien.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#marron* + <mención>  
> ✦ Burlarte del color de piel de un usuario.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#suicidar* > ✦ Suicídate.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#iq • #iqtest* + <mención>  
> ✦ Calcular el IQ de alguna persona.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#meme* > ✦ La bot te envía un meme aleatorio.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#morse* > ✦ Convierte un texto a código morse.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#nombreninja* > ✦ Busca un nombre ninja aleatorio.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#paja • #pajeame* > ✦ La bot te hace una paja.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#personalidad* + <mención>  
> ✦ La bot busca tu personalidad.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#piropo* > ✦ Lanza un piropo.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#pregunta* > ✦ Hazle una pregunta a la bot.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#ship • #pareja* > ✦ Probabilidad de enamorarte de alguien.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#sorteo* > ✦ Empieza un sorteo.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#top* > ✦ Empieza un top de personas.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#formartrio* + <mención>  
> ✦ Forma un trío.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#ahorcado* > ✦ Juega al ahorcado con la bot.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#genio* > ✦ Ronda de preguntas con el genio.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#mates • #matematicas* > ✦ Gana recompensas resolviendo cuentas.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#ppt* > ✦ Piedra, papel o tijeras.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#sopa • #buscarpalabra* > ✦ Juega a la sopa de letras.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#pvp • #suit* + <mención>  
> ✦ Juega un PVP contra otro usuario.  
ᰵ𐇽𑂘⃘ׂ◌࠭᷼🪷⃝⃦̸̷᪶᪶ᩘ★ *#ttt* > ✦ Crea una sala de juego.  
╰────︶.︶ ⸙ ͛ ͎ ͛  ︶.︶ ੈ₊˚༅
  `.trim();

  await conn.sendMessage(m.chat, {
    image: { url: pp },
    caption: texto,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '🎮 Centro de Juegos',
        body: 'Diversión ilimitada | RubyBot 2.0',
        thumbnailUrl: pp,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

handler.command = ['menujuegos', 'juegosmenu'];
handler.register = true;

export default handler;