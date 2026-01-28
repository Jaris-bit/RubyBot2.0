import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m

handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
  try {
    options ? options : {}
    var res = await axios({
      method: "get",
      url,
      headers: {
        'DNT': 1,
        'User-Agent': 'GoogleBot',
        'Upgrade-Insecure-Request': 1
      },
      ...options,
      responseType: 'arraybuffer'
    })
    return res.data
  } catch (e) {
    console.log(`Error : ${e}`)
  }
}

// Lista de iconos vacía para que agregues tus propias URLs de Catbox o similares
const iconUrls = [
  "https://image2url.com/r2/default/images/1769562855950-edc3938a-fad9-4010-8303-8b033c1a658f.jpeg", "https://image2url.com/r2/default/images/1769562855950-edc3938a-fad9-4010-8303-8b033c1a658f.jpeg", "https://image2url.com/r2/default/images/1769562855950-edc3938a-fad9-4010-8303-8b033c1a658f.jpeg"
]

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const iconUrl = pickRandom(iconUrls) || "https://image2url.com/r2/default/images/1769562855950-edc3938a-fad9-4010-8303-8b033c1a658f.jpeg" // Imagen por defecto si la lista está vacía
global.icono = await getBuffer(iconUrl)

global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

// --- CONFIGURACIÓN DE DUEÑO Y CANALES ---
global.creador = 'Wa.me/' // Agrega tu número después de la barra
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/' // Agrega tu número de asistencia
global.namechannel = '' 
global.namechannel2 = ''
global.namegrupo = ''
global.namecomu = ''
global.listo = '❀ *Aquí tienes ฅ^•ﻌ•^ฅ*'
global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg')

// IDs de Newsletter (Canales de WhatsApp) - Déjalos vacíos o pon los tuyos
global.canalIdM = ["", ""]
global.canalNombreM = ["", ""]
global.channelRD = await getRandomChannel()

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'
global.msm = '⚠︎'

global.emoji = '🍨'
global.emoji2 = '🍭'
global.emoji3 = '🌺'
global.emoji4 = '💗'
global.emoji5 = '🍡'
global.emojis = [emoji, emoji2, emoji3, emoji4].getRandom()

global.wait = '⚘𖠵⃕❖𖥔 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐...ꪶꪾ❍̵̤̂ꫂ\n❝ 𝐴𝑔𝑢𝑎𝑟𝑑𝑒 𝑢𝑛 𝑚𝑜𝑚𝑒𝑛𝑡ο ❞';

// --- REDES SOCIALES VACÍAS ---
var canal = ''
let canal2 = ''
var git = ''
var github = '' 
let correo = ''
global.redes = [canal, canal2, git, github, correo].getRandom()

let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

var ase = new Date(); var hour = ase.getHours();
switch(hour){
  case 0: case 1: case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;
  case 3: case 4: case 5: case 6: case 8: case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break;
  case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break;
  case 10: case 11: case 12: case 13: hour = 'LɪɴᴅO DɪA 🌤'; break;
  case 14: case 15: case 16: case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break;
  default: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'
}
global.saludo = hour

global.nombre = m.pushName || 'Anónimo'
global.taguser = '@' + m.sender.split("@")[0]
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.packsticker = `${nombre}`
global.packsticker2 = `𝚁𝚄𝙱𝚈 𝙱𝙾𝚃 𝙼𝙳 ˃ 𖥦 ˂`

// --- INFO DE REENVÍO LIMPIA ---
global.rcanal = {
  contextInfo: {
    mentionedJid: [], 
    isForwarded: false, // Cambiado a false para evitar el "Reenviado"
    forwardingScore: 0,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '', // Agrega tu ID de canal aquí
      newsletterName: '', // Agrega el nombre de tu canal aquí
      serverMessageId: -1
    },
    externalAdReply: {
      title: packsticker2,
      body: 'RubyBot 2.0',
      thumbnail: icons,
      sourceUrl: redes,
      mediaType: 1,
      renderLargerThumbnail: false
    }
  }
}

}

export default handler

async function getRandomChannel() {
  let randomIndex = Math.floor(Math.random() * (global.canalIdM ? global.canalIdM.length : 1))
  let id = global.canalIdM ? global.canalIdM[randomIndex] : ''
  let name = global.canalNombreM ? global.canalNombreM[randomIndex] : ''
  return { id, name }
}