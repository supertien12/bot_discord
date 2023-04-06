const dotenv = require("dotenv")
const { Client, GatewayIntentBits,ActivityType } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

dotenv.config();

client.on('ready', () => {
    client.user.setPresence({
    status:"online",
    activities:[{
        name:"Visual Studio Code",
        type: ActivityType.Playing
    }]
})
})


client.login(process.env.TOKEN);