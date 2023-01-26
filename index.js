require ('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

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
