import { Message } from 'whatsapp-web.js';
import { client } from '../server';

const TWO_SECONDS = 2000;

export async function dispatchMessage(message: Message, text: string) {
  return setTimeout(() => {
    client.sendMessage(message.from, text);
  }, TWO_SECONDS);
}
