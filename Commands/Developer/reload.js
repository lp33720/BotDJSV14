const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  PermissionFlagsBits,
} = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler");
const { loadEvents } = require("../../Handlers/eventHandler");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Recharge les évents et les commandes")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) =>
      options.setName("events").setDescription("Recharge les events")
    )
    .addSubcommand((options) =>
      options.setName("commands").setDescription("Recharge les commandes")
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    const sub = interaction.options.getSubcommand();

    switch (sub) {
      case "events":
        {
          loadEvents(client);
          interaction.reply({ content: "Events rechargés avec succès !" });
        }
        break;
      case "commands":
        {
          loadCommands(client);
          interaction.reply({ content: "Commandes rechargés avec succès !" });
        }
        break;
    }
  },
};
