module.exports = {
  data: {
    name: "twitter",
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: "https://twitter.com/arerorero",
    });
  },
};
