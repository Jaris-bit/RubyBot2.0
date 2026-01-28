import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

// Número del bot (puedes dejarlo vacío si usa el de la sesión)
global.botNumber = '' 

// --- CONFIGURACIÓN DE DUEÑOS (OWNERS) ---
// Coloca tus números aquí. Ejemplo: ['54911...', 'Tu Nombre', true]
global.owner = [
 // ['50496926150', 'Owner Principal', true], 
  ['18294304503', 'Colaborador', true]
];

// --- MODERADORES Y PREMIUM ---
global.mods = []
global.suittag = [''] // Número de soporte
global.prems = []

// --- INFORMACIÓN DEL BOT ---
global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.languaje = 'Español'
global.vs = '2.2.0'
global.nameqr = 'RubyBot 2.0'
global.namebot = '꒰ 🥥 ꒱ؘ 𝙍𝙪𝙗𝙮-𝙃𝙤𝙨𝙝𝙞𝙣𝙤-𝘽𝙤𝙩 ♪'
global.Rubysessions = 'RubySessions'
global.jadi = 'RubyJadiBots' 
global.RubyJadibts = true

// --- TEXTOS DE MARCA (PACKNAME & WM) ---
global.packname = '𝚁𝚄𝙱𝚈 𝙱𝙾𝚃 𝙼𝙳 ˃ 𖥦 ˂'
global.botname = ' ࣪☀ ࣭𝗥𝘂𝗯𝘆 𝗛𝗼𝘀𝗵𝗶𝗻𝗼 𝗕𝗼𝘁࣪'
global.wm = 'RubyBot-MD'
global.author = 'RubyBot' // Nombre del creador del sticker
global.dev = 'RubyBot Team'
global.textbot = 'Ruby-Hoshino Powered By User'
global.etiqueta = 'RubyBot-MD'

// --- RECURSOS VISUALES ---
global.moneda = 'Zenis'
global.banner = 'https://files.catbox.moe/b93cts.jpg'
global.avatar = 'https://qu.ax/RYjEw.jpeg'

// --- REDES SOCIALES (LIMPIAS) ---
global.gp1 = '' // Enlace de tu grupo
global.comunidad1 = '' // Enlace de tu comunidad
global.channel = '' // Tu canal de WhatsApp
global.channel2 = ''
global.md = 'https://github.com/Jaris-bit/RubyBot2.0' // Tu nuevo repo
global.correo = ''
global.cn = '';

// --- CONFIGURACIÓN DE CATÁLOGO ---
global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { 
  key: { 
    fromMe: false, 
    participant: `0@s.whatsapp.net`, 
    ...(false ? { remoteJid: "status@broadcast" } : {}) 
  }, 
  message: { 
    orderMessage: { 
      itemCount : -999999, 
      status: 1, 
      surface : 1, 
      message: packname, 
      orderTitle: 'RubyBot', 
      thumbnail: catalogo, 
      sellerJid: '0@s.whatsapp.net'
    }
  }
}

// ID de tu propio canal (newsletter) para los mensajes del bot
global.ch = {
  ch1: '', // Agrega tu newsletterJid aquí
}

// --- ACTUALIZACIÓN AUTOMÁTICA ---
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})