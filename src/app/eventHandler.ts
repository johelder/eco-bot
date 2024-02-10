import qrcode from 'qrcode-terminal';
import { Message } from 'whatsapp-web.js';

import { dispatchMessage } from './utils/dispatchMessage';
import { speechToText } from './services/speechToText';

function generateQRcode(qr: string) {
  return qrcode.generate(qr, { small: true });
}

async function successfullyConnect() {
  return console.log('Client is ready! 🚀');
}

async function messageReceived(message: Message) {
  const isAudioMessage =
    message.type === 'ptt' || (message.hasMedia && message.type === 'audio');

  if (isAudioMessage) {
    const audio = await message.downloadMedia();

    const binaryData = Buffer.from(audio.data, 'base64');

    const text = await speechToText(binaryData);

    await dispatchMessage(message, `Mensagem transcrita: ${text}`);
  }
}

export const eventHandler = {
  generateQRcode,
  successfullyConnect,
  messageReceived,
};
