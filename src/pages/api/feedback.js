import TelegramBot from 'node-telegram-bot-api';

// const botToken = '6108887029:AAGVpHZa8mfRZpGJIZpacYM5nEgS0mBPI60';
//
// // Створюємо об'єкт бота з використанням токена
// const bot = new TelegramBot(botToken, {polling: true});
export default async function handler(req, res){
    if (req.method === 'POST') {
        const message = req.body.message;
        // const bot = req.body.bot;
        // console.log('handlerPost :', message);
        // console.log('bot :', bot);
        // Встановлюємо ідентифікатор чату, куди буде відправлятися повідомлення
        const chatId = 273971102;
        // const botToken = '6108887029:AAGVpHZa8mfRZpGJIZpacYM5nEgS0mBPI60';
        // const bot = new TelegramBot(botToken, {polling: true});
    //
    //     try {
    //         await bot.sendMessage(chatId, message);
    //         res.status(200).json({ success: true });
    //     } catch (error) {
    //         console.error('Помилка відправки повідомлення:', error);
    //         res.status(500).json({ success: false, error: 'Помилка відправки повідомлення' });
    //     }
    }
}