import { Message } from 'whatsapp-web.js';

const TWO_SECONDS = 2000;

export async function dispatchMessage(message: Message, text: string) {
  return setTimeout(() => {
    message.reply(text);
  }, TWO_SECONDS);
}
