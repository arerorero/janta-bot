const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("returns my ping!"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    const newMessage = `API Latency ${client.ws.ping}ms\nBot Latency ${
      message.createdTimestamp - interaction.createdTimestamp
    }ms`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
