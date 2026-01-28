import fs from 'fs';

let handler = async (m, { conn, usedPrefix }) => {
  // --- REACCIÓN DE AUTORIDAD ---
  const reaccionesOwner = ['👑', '💻', '🔐', '🛡️', '⚙️', '⚡'];
  await m.react(reaccionesOwner[Math.floor(Math.random() * reaccionesOwner.length)]);

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

  // Variables de respaldo por si fallan las globales
  let nBot = global.botname || 'RubyBot';
  let nPack = global.packname || 'RubyBot-MD';
  let nDev = global.dev || 'Dioneibi';

  const texto = `
һ᥆ᥣᥲ! s᥆ᥡ  *${nBot}* ٩(˘◡˘)۶
*¿Viniste a darme órdenes o solo a admirar mi código?* 🎭✨

»  ⊹˚• \`OWNERS\` •˚⊹

❀ ᥴ᥆mᥲᥒძ᥆s ძᥱ m᥆ძᥱrᥲᥴіóᥒ ᥡ ᥴ᥆ᥒ𝗍r᥆ᥣ ᥲ᥎ᥲᥒzᥲძ᥆ ⍴ᥲrᥲ ᥆ᥕ閲覧ers.
ᰔᩚ *${usedPrefix}addowner • #delowner*
> ✦ Agrega o elimina un número de la lista de owners.
ᰔᩚ *${usedPrefix}codigo*
> ✦ Crea un token o código de canjeó de códigos.
ᰔᩚ *${usedPrefix}backup • #copia*
> ✦ Crear un respaldo de seguridad de la *db* del Bot.
ᰔᩚ *${usedPrefix}bcgc*
> ✦ Envia un mensaje a todos los grupos donde este el Bot.
ᰔᩚ *${usedPrefix}cleanfiles*
> ✦ Elimina archivos temporales.
ᰔᩚ *${usedPrefix}addcoins • #añadircoin*
> ✦ Añade coins a un usuario.
ᰔᩚ *${usedPrefix}userpremium • #addprem*
> ✦ Otorgar premium a un usuario.
ᰔᩚ *${usedPrefix}delprem #remove*
> ✦ Quitar premium a un usuario.
ᰔᩚ *${usedPrefix}addexp • #añadirxp*
> ✦ Añade XP a un usuario.
ᰔᩚ *${usedPrefix}autoadmin*
> ✦ El Bot dara admin automáticamente solo si el Bot es admin.
ᰔᩚ *${usedPrefix}listban • #banlist*
> ✦ Lista de usuarios y chats baneados.
ᰔᩚ *${usedPrefix}banuser*
> ✦ Banear a un usuario.
ᰔᩚ *${usedPrefix}unbanuser*
> ✦ Desbanear a un usuario.
ᰔᩚ *${usedPrefix}dsowner • #delai*
> ✦ Elimina archivos innecesarios de sesión.
ᰔᩚ *${usedPrefix}cleartmp • #vaciartmp*
> ✦ Elimina archivo innecesarios de la carpeta tmp.
ᰔᩚ *${usedPrefix}block • #unblock*
> ✦ Bloquear o desbloquear a un usuario del número del Bot.
ᰔᩚ *${usedPrefix}listblock • #blocklist*
> ✦ Ver listado de usuarios bloqueados.
ᰔᩚ *${usedPrefix}removecoin • #quitarcoin*
> ✦ Quitar coins a un usuario.
ᰔᩚ *${usedPrefix}deletedatauser • #resetuser*
> ✦ Restablecer los datos de un usuario.
ᰔᩚ *${usedPrefix}removexp • #quitarxp*
> ✦ Quitar XP a un usuario.
ᰔᩚ *${usedPrefix}newgc #creargc*
> ✦ Crea un nuevo grupo desde el número del Bot.
ᰔᩚ *${usedPrefix}deletefile*
> ✦ Elimina archivos del Bot
ᰔᩚ *${usedPrefix}get • #fetch*
> ✦ Ver el estado de una página web.
ᰔᩚ *${usedPrefix}plugin • #getplugin*
> ✦ Extraer un plugin de los archivos del Bot.
ᰔᩚ *${usedPrefix}grouplist • #listgroup*
> ✦ Ver listado de grupos en los que está unido el Bot.
ᰔᩚ *${usedPrefix}join • #invite*
> ✦ Agregar el Bot a un grupo mediante el enlace de invitación.
ᰔᩚ *${usedPrefix}leave • #salir*
> ✦ Sacar el Bot de un grupo.
ᰔᩚ *${usedPrefix}let*
> ✦ Envia un mensaje con una duración de 1 hora.
ᰔᩚ *${usedPrefix}prefix*
> ✦ Ver o cambiar el prefijo del Bot.
ᰔᩚ *${usedPrefix}resetprefix*
> ✦ Restablecer el prefijo del Bot.
ᰔᩚ *${usedPrefix}reiniciar • #restart*
> ✦ Reiniciar el servidor del Bot.
ᰔᩚ *${usedPrefix}reunion • #meeting*
> ✦ Envia un aviso de reunión a los owners.
ᰔᩚ *${usedPrefix}savejs • #savefile*
> ✦ Guarda un archivo en una de las rutas del Bot.
ᰔᩚ *${usedPrefix}saveplugin*
> ✦ Guarda un plugin en la carpeta de comandos del Bot.
ᰔᩚ *${usedPrefix}setbanner*
> ✦ Cambia la imagen del menu principal del Bot.
ᰔᩚ *${usedPrefix}setavatar*
> ✦ Cambia la imagen del catálogo.
ᰔᩚ *${usedPrefix}addcmd • #setcmd*
> ✦ Guarda un sticker/imagen como texto o comando.
ᰔᩚ *${usedPrefix}delcmd*
> ✦ Elimina el texto/comando del Bot.
ᰔᩚ *${usedPrefix}cmdlist • #listcmd*
> ✦ Ver listado de textos/comandos.
ᰔᩚ *${usedPrefix}setimage • #setpfp*
> ✦ Cambia la foto del perfil del Bot.
ᰔᩚ *${usedPrefix}setmoneda*
> ✦ Cambia la moneda del Bot.
ᰔᩚ *${usedPrefix}setname*
> ✦ Cambia el nombre del Bot
ᰔᩚ *${usedPrefix}setbio • #setstatus*
> ✦ Cambia la biografía del Bot.
ᰔᩚ *${usedPrefix}update*
> ✦ Actualiza el Bot a la versión más reciente de GitHub.
`.trim();

  await conn.sendMessage(m.chat, {
    image: { url: pp },
    caption: texto,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: `👑 ${nPack}`,
        body: `Dev: ${nDev}`,
        thumbnailUrl: pp,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

handler.help = ['mods'];
handler.tags = ['main'];
handler.command = ['dev', 'owners'];
handler.rowner = true;

export default handler;