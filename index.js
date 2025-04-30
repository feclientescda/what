import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  console.log('🔐 Escanea este código QR con tu WhatsApp:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ El bot está listo para recibir mensajes');
});

client.on('message', async msg => {
  if (msg.body.toLowerCase() === 'hola') {
    await msg.reply('¡Hola! Soy tu bot de WhatsApp 🤖');
  }
});

client.initialize();
