import fs from 'fs'
import path from 'path'

const handler = async (m, { text, usedPrefix, command }) => {
  const dbPath = path.resolve('./src/database/menu.json')
  
  if (!text || !text.includes('http')) {
    return m.reply(`*¡Falta la URL!* ✧\n\nUso: ${usedPrefix}${command} https://imagen.com/foto.jpg`)
  }

  try {
    const data = { menuImg: text.trim() }
    
    // Guardamos la nueva URL en el JSON
    if (!fs.existsSync(path.dirname(dbPath))) fs.mkdirSync(path.dirname(dbPath), { recursive: true })
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

    m.reply(`✅ *¡Imagen del menú actualizada!*\n\nAhora todos verán tu nuevo estilo al usar el menú.`)
  } catch (e) {
    console.error(e)
    m.reply(`❌ *Error al guardar la imagen.*`)
  }
}

handler.help = ['setimgmenu']
handler.tags = ['owner']
handler.command = ['setimgmenu', 'setmenuimg']
handler.owner = true // Solo tú tienes el mando

export default handler