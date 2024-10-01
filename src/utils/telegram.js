// src/utils/telegram.js

export async function sendTelegramMessage({ email, phone, subject, message }) {
    const chatId = "1131993851"; // Reemplaza con tu ID de chat
    const botToken = "7563280393:AAEPMTWcIG1g0D_c-J0OWnl7bOlTwnmQvac"; // Reemplaza con tu token de bot de Telegram
  
    const text = `
      Nuevo mensaje:
      Correo: ${email}
      Teléfono: ${phone}
      Asunto: ${subject}
      Mensaje: ${message}
    `;
  
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar el mensaje a Telegram");
      }
    } catch (error) {
      console.error(error);
    }
  }
  