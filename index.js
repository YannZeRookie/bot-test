const BotkitDiscord = require('botkit-discord');

// Load Discord connection token
var discordConfig = require('./auth.json');
var discordBot = BotkitDiscord(discordConfig);

discordBot.hears('§hi','ambient',(bot, message) => {
    bot.reply(message, 'how goes there :)!');
});

