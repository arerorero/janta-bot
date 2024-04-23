const {
  ButtonStyle,
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("returns a button"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId("twitter")
      .setLabel("twitter")
      .setStyle(ButtonStyle.Primary)
      .setDisabled(false);

    await interaction.reply({
      content: "Here is a button!",
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
