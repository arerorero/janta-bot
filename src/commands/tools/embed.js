const { SlashCommandBuilder, EmbedBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns an embed"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("This is a EMBED")
      .setDescription("This is a description")
      .setColor(0x18e1ee)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setURL("https://discord.com")
      .setAuthor({
        url: "https://discord.com",
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .addFields([
        {
          name: `Name 1`,
          value: `Value 1`,
          inline: true,
        },
        {
          name: `Name 2`,
          value: `Value 2`,
          inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
