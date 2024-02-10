import whatsapp from 'whatsapp-web.js';

import { eventHandler } from './eventHandler';

const { LocalAuth, Client } = whatsapp;

const localAuth = new LocalAuth();

export const client = new Client({
  authStrategy: localAuth,
  puppeteer: {
    headless: true,
    args: ['--no-sandbox'],
  },
});

client.on('qr', eventHandler.generateQRcode);

client.on('ready', eventHandler.successfullyConnect);

client.on('message', eventHandler.messageReceived);

client.initialize();
