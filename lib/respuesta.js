// --- VALORES PERSONALIZABLES ---
const newsletterJid = ''; // Déjalo vacío para quitar el enlace al canal
const newsletterName = ''; 
const packname = '𝚁𝚄𝙱𝚈 𝙱𝙾𝚃 𝙼𝙳 ˃ 𖥦 ˂';

// Array de miniaturas (He dejado las de Catbox, puedes cambiarlas luego)
const iconos = [
'https://files.catbox.moe/sbf5to.jpeg',
'https://files.catbox.moe/kpp1sc.jpeg',
'https://files.catbox.moe/99g8lx.jpeg',
'https://files.catbox.moe/wmviz6.jpeg',
'https://files.catbox.moe/rthyyb.jpeg',
'https://files.catbox.moe/rg8yub.jpeg',
'https://files.catbox.moe/ye0kqt.jpeg',
'https://files.catbox.moe/fqrphu.jpeg',
'https://files.catbox.moe/n1pbfn.jpeg',
'https://files.catbox.moe/lwx3n3.jpeg',
'https://files.catbox.moe/zjttew.jpeg',
'https://files.catbox.moe/6kycg4.jpeg',
'https://files.catbox.moe/po3abt.jpeg'
];

const getRandomIcono = () => iconos[Math.floor(Math.random() * iconos.length)];

const handler = (type, conn, m, comando) => {
  const msg = {
  rowner: '「🌺」 *Gomenasai~! Esta función solo la puede usar mi creador celestial...* 🌌',
  owner: '「🌸」 *¡Nyaa~! Solo mi creador y programadores pueden usar este comando~!* 💾💕',
  mods: '「🌟」 *Uguu~ Esto eso solo lo pueden usar mis desarrolladores mágicos~!* 🔮',
  premium: '「🍡」 *Ehh~? Esta función es exclusiva para usuarios Premium-desu~!* ✨\n\n💫 *¿No eres premium aún? Consíguelo ahora usando:*\n> ✨ *.comprarpremium*',
  group: '「🐾」 *¡Onii-chan~! Este comando solo puede usarse en grupos~!* 👥',
  private: '「🎀」 *Shh~ Este comando es solo para ti y para mí, en privado~* 💌',
  admin: '「🧸」 *¡Kyah~! Solo los admin-senpai pueden usar esta habilidad~!* 🛡️',
  botAdmin: '「🔧」 *¡Espera! Necesito ser admin para que este comando funcione correctamente.*',
  unreg: `🍥 𝑶𝒉 𝒏𝒐~! *¡Aún no estás registrado~!* 😿\nNecesito conocerte para que uses mis comandos~ ✨\n\n📝 Por favor regístrate con:\n */reg nombre.edad*\n\n💖 ¡Así podré reconocerte~! (⁎˃ᴗ˂⁎)`,
  restrict: '「📵」 *¡Ouh~! Esta función está desactivada por ahora~* 💤'
  }[type];

  if (msg) {
    const contextInfo = {
      mentionedJid: [m.sender],
      isForwarded: false, // Desactivado para quitar el "Reenviado muchas veces"
      forwardingScore: 0,
      forwardedNewsletterMessageInfo: {
        newsletterJid,
        newsletterName,
        serverMessageId: -1
      },
      externalAdReply: {
        title: packname,
        body: 'RubyBot 2.0 | Sistema Central',
        thumbnailUrl: getRandomIcono(),
        sourceUrl: '', // URL vacía para no redirigir a otros canales
        mediaType: 1,
        renderLargerThumbnail: false
      }
    };

    return conn.reply(m.chat, msg, m, { contextInfo }).then(_ => m.react('✖️'));
  }

  return true;
};

export default handler;