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

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(process.env.TELEGRAM_CHAT_ID, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(process.env.TELEGRAM_CHAT_ID, 'Received your message');
});

main();
