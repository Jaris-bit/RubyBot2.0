import fs from "fs";
import path from "path";

const handler = async (m, { text, usedPrefix, command }) => {
  const dbPath = path.resolve("./src/database/characters.json");
  const args = text.split(",").map((arg) => arg.trim());

  if (args.length < 5) {
    return m.reply(
      `*¡Faltan datos!* ✧\n\nUso: ${usedPrefix}${command} Nombre, Género, Valor, Origen, URL\n\n> *Ejemplo: ${usedPrefix}${command} Aika, Mujer, 7500, Anime, https://image2url.com/foto.jpg*`,
    );
  }

  const [name, gender, value, source, img] = args;

  try {
    let data = [];
    if (fs.existsSync(dbPath)) {
      data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    }

    const newCharacter = {
      id: (data.length + 1).toString(),
      name,
      gender,
      value,
      source,
      img: [img],
      user: null,
      status: "Libre",
      votes: 0,
    };

    data.push(newCharacter);
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");

    m.reply(
      `✅ *¡Personaje añadido con éxito!*\n\n*Nombre:* ${name}\n*ID:* ${newCharacter.id}\n*Estado:* Guardado directamente en la base de datos.`,
    );
  } catch (error) {
    console.error(error);
    m.reply(`❌ *Error crítico:* No se pudo escribir en la base de datos.`);
  }
};

handler.command = ["addcharacter", "addrw"];
handler.owner = true;

export default handler;
