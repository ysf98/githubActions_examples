require ('dotenv').config()

//Importamos libreria telegram
const telegram = require('node-telegram-bot-api')

//Creamos el bot
const bot = new telegram(process.env.TELEGRAM_TOKEN)

const texto = async () => {
  return "Workflow ejecutado correctamente tras el último commit. Saludos ";
}

const main = async () => {
  const mensaje = await texto();
  bot.sendMessage(process.env.TELEGRAM_CHAT_ID, mensaje);
  console.log(mensaje);
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Mensaje enviado');
});

main();
