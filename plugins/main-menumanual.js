import fs from 'fs';
import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    // --- REACCIÓN ALEATORIA (Drama/Amor) ---
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
      console.log("Error al leer menu.json en el menú manual");
    }

    // Descarga la imagen para enviarla como buffer
    const img = await axios.get(pp, { responseType: "arraybuffer" });
    let name = m.pushName || 'Aventurero';

    const texto = `⋱⏜ֹ๋۪۪۪۪۪۪᷼︵̈⋱ֻ࡛࡛፟＼𑂳⚚／ֻ࡛𑂳࡛⋰̈︵ֹ๋۪۪۪۪۪۪᷼⏜⋰
ᰍִ۪۪۪֟፝ᰍִ͚  ִּ֮   🌟 𝙈𝙀𝙉𝙐 𝙈𝘼𝙉𝙐𝘼𝙇 🌟   ִּ֮ 
    
(｡•ᴗ•)ﾉﾞ¡𝐇𝐨𝐥𝐚, ${name}! 💫
*¿Buscabas algo en especial o solo vienes a verme?* 🎭

> ├┈・──・──・﹕₊˚ ✦・୨୧・
> │  ◦  ⚙️ _${usedPrefix}menuall_
> 🍧 ꒰ 𝗺𝘂𝗲𝘀𝘁𝗿𝗮 𝘁𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲𝘀 ꒱
> │  ◦  ⚙️ _${usedPrefix}menudescargas_
> 🎧 ꒰ 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮 𝗮𝘂𝗱𝗶𝗼𝘀, 𝘃𝗶𝗱𝗲𝗼𝘀, 𝗜𝗴, 𝗙𝗕, 𝗧𝗶𝗸𝗧𝗼𝗸 ꒱
> │  ◦  ⚙️ _${usedPrefix}menueconomia_
> 🎮 ꒰ ¡𝗖𝗿𝗲𝗮 𝘁𝘂 𝗮𝘃𝗲𝗻𝘁𝘂𝗿𝗮! 𝗠𝗶𝗻𝗮, 𝗰𝗮𝘇𝗮 𝘆 𝗴𝗮𝗻𝗮 𝗼𝗿𝗼. ꒱
> │  ◦  ⚙️ _${usedPrefix}menugacha_
> 🎭 ꒰ ¡𝗚𝗶𝗿𝗮 𝗲𝗹 𝗱𝗲𝘀𝘁𝗶𝗻𝗼 𝘆 𝗰𝗼𝗹𝗲𝗰𝗰𝗶𝗼𝗻𝗮 𝗵𝗲́𝗿𝗼𝗲𝘀! ꒱
> │  ◦  ⚙️ _${usedPrefix}menusticker_
> ✨ ꒰ 𝗖𝗿𝗲𝗮 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀 𝗮𝗻𝗶𝗺𝗮𝗱𝗼𝘀 𝘆 𝘂́𝗻𝗶𝗰𝗼𝘀 ꒱
> │  ◦  ⚙️ _${usedPrefix}menuherramientas_
> ⛓️‍💥 ꒰ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝘂́𝘁𝗶𝗹𝗲𝘀 𝘆 𝗱𝗶𝘃𝗲𝗿𝘀𝗼𝘀 ꒱
> │  ◦  ⚙️ _${usedPrefix}menuperfil_
> 🧩 ꒰ 𝗔𝗱𝗮𝗽𝘁𝗮 𝘁𝘂 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝘆 𝗿𝗲𝘃𝗶𝘀𝗮 𝘁𝘂 𝗲𝘀𝘁𝗮𝗱𝗼 ꒱
> │  ◦  ⚙️ _${usedPrefix}menugrupo_
> 🌐 ꒰ 𝗛𝗲𝗿𝗿𝗮𝗺𝗶𝗲𝗻𝘁𝗮𝘀 𝗽𝗮𝗿𝗮 𝘁𝘂 𝗴𝗿𝘂𝗽𝗼 ꒱
> │  ◦  ⚙️ _${usedPrefix}menuanime_
> 💢 ꒰ 𝗘𝘅𝗽𝗿𝗲́𝘀𝗮𝘁𝗲 𝗰𝗼𝗻 𝗿𝗲𝗮𝗰𝗰𝗶𝗼𝗻𝗲𝘀 𝗱𝗲 𝗮𝗻𝗶𝗺𝗲 ꒱
> │  ◦  ⚙️ _${usedPrefix}menujuegos_
> 🎲 ꒰ 𝗣𝗿𝘂𝗲𝗯𝗮 𝘁𝘂 𝘀𝘂𝗲𝗿𝘁𝗲 𝗲𝗻 𝗺𝗶𝗻𝗶-𝗷𝘂𝗲𝗴𝗼𝘀 ꒱
> │  ◦  ⚙️ _${usedPrefix}menunsfw_
> 🔞 ꒰ 𝗔𝗰𝗰𝗲𝘀𝗼 𝗮 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝗡𝗦𝗙𝗪 (+18) ꒱
> │  ◦  ⚙️ _${usedPrefix}menubusquedas_
> 🌍 ꒰ 𝗕𝘂𝘀𝗰𝗮 𝗶𝗻𝗳𝗼, 𝗹𝗲𝘁𝗿𝗮𝘀 𝘆 𝘃𝗶𝗱𝗲𝗼𝘀 𝗲𝗻 𝗹𝗶́𝗻𝗲𝗮 ꒱
> ╰┉ͦ━ᷫ━ⷭ┈ ⃘⵿݂۪۪۪࣭࣭፝۬۬۬͞💙ꫂ❀ᰰ᷒|²⁰|²|²³ ♡┈⊷ꫂ፝۬۬۬͞ᜓ⃘݂۪۪۪࣭࣭.─❤️⃟ᬽ፝֟━❥ᰰຼ᭢╯*

 ִ ⋱  ִֺ＼ ֺ ִ ̲｜ ֺ ִ ̲／ ֺ ִ⋰ִ  ֺ
 ֻׄ ⚚ ֕ ̷̸᮫᮫ּּּׁ᳟࣭݂۪֟፝ׄ݊͜͞  𝐓𝐞 𝐞𝐬𝐩𝐞𝐫𝐚𝐦𝐨𝐬̶̤࣭᪲۫‿ּ۪۪۪۪۪ٜ࣪⢎ּ۪࣪🪽`.trim();

    await conn.sendMessage(m.chat, {
      image: img.data,
      caption: texto,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: 'RubyBot - Menú Manual',
          body: "💗 𓈒꒰ 𝘚𝘪𝘴𝘵𝘦𝘮𝘢 𝘥𝘦 𝘢𝘺𝘶𝘥𝘢 𝘢𝘶𝘹𝘪𝘭𝘪𝘢𝘳 ꒱",
          mediaType: 1,
          thumbnailUrl: pp,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });

  } catch (e) {
    await conn.reply(m.chat, "❌ Error al cargar el menú manual:\n" + e.toString(), m);
  }
};

handler.help = ["menumanual"];
handler.tags = ["main"];
handler.command = ["menumanual"];

export default handler;