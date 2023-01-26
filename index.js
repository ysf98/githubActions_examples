require ('dotenv').config()

//Importamos libreria telegram
const telegram = require('node-telegram-bot-api')

//Creamos el bot
const bot = new telegram(TELEGRAM_TOKEN)

const texto = async () => {
  return "Workflow ejecutado correctamente tras el último commit. Saludos ";
}

const main = async () => {
  const mensaje = await texto();
  bot.sendMessage(TELEGRAM_CHAT_ID, mensaje);
  console.log(mensaje);
}

main();
