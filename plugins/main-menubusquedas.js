import fs from 'fs';

let handler = async (m, { conn }) => {
  // --- REACCIÓN INICIAL ---
  await m.react('🔎');

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
🔍⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐚𝐫𝐚 𝐫𝐞𝐚𝐥𝐢𝐳𝐚𝐫 𝐛𝐮́𝐬𝐪𝐮𝐞𝐝𝐚𝐬 𝐞𝐧 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐚𝐬 𝐩𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚𝐬 🔎⊹

⌈ ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#tiktoksearch • #tiktoks* > ✦ Buscador de videos de TikTok.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ.*#tweetposts* > ✦ Buscador de posts de Twitter/X.    
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#ytsearch • #yts* > ✦ Realiza búsquedas en YouTube.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#githubsearch* > ✦ Buscador de usuarios de GitHub.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#cuevana • #cuevanasearch* > ✦ Buscador de películas/series por Cuevana.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#google* > ✦ Realiza búsquedas en Google.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#pin • #pinterest* > ✦ Buscador de imágenes de Pinterest.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#imagen • #image* > ✦ Buscador de imágenes en Google.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#animesearch • #animess* > ✦ Buscador de animes en TioAnime.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#animei • #animeinfo* > ✦ Buscador de capítulos de #animesearch.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#infoanime* > ✦ Buscador de información de anime/manga.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#hentaisearch • #searchhentai* > ✦ Buscador de capítulos hentai.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#xnxxsearch • #xnxxs* > ✦ Buscador de videos de XNXX.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#xvsearch • #xvideossearch* > ✦ Buscador de videos de Xvideos.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#pornhubsearch • #phsearch* > ✦ Buscador de videos de Pornhub.  
| ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🪴 ◯⃝◦・ׄ. *#npmjs* > ✦ Buscador de paquetes en npmjs.  
᷼︶۪۪۪۪፝֟᷼︶᷼╰──────✧──────╯᷼︶᷼
  `.trim();

  // Enviar mensaje al chat con la configuración limpia
  await conn.sendMessage(m.chat, {
    image: { url: pp },
    caption: texto,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '🔍 Buscador Global | RubyBot',
        body: 'Encuentra contenido en segundos',
        thumbnailUrl: pp,
        mediaType: 1,
        renderLargerThumbnail: false,
        sourceUrl: global.redes || '' 
      }
    }
  }, { quoted: m });
};

handler.command = ['menubusquedas', 'busquedamenu'];
handler.register = true; // Solo para usuarios registrados

export default handler;