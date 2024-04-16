require("dotenv").config();
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const { token } = process.env;
const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = [];

const functionsFolders = fs.readdirSync("./src/functions");
for (const folder of functionsFolders) {
  const functionsFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionsFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.login(token);
