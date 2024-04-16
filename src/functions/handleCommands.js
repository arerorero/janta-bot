import { readdirSync } from "fs";

export default (client) => {
  client.handleCommands = async () => {
    const commandFolders = readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFiles = readdirSync(`./src/commands/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command, command.data.toJSON());
      }
    }
  };
};
