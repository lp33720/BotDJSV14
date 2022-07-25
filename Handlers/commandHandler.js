function loadCommands(client) {
  const ascii = require("ascii-table");
  const fs = require("fs");
  const table = new ascii().setHeading("Commands", "Status");

  let commandsArray = [];
  let developperArray = [];

  const commandsFolders = fs.readdirSync("./Commands");
  for (const folder of commandsFolders) {
    const commandFiles = fs
      .readdirSync(`./Commands/${folder}`)
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const commandFile = require(`../Commands/${folder}/${file}`);

      client.commands.set(commandFile.data.name, commandFile);

      if (commandFile.developer)
        developperArray.push(commandFile.data.toJSON());
      else commandsArray.push(commandFile.data.toJSON());

      table.addRow(file, "✅");
      continue;
    }
  }

  client.application.commands.set(commandsArray);

  const developerGuild = client.guilds.cache.get(client.config.developerGuild);

  developerGuild.commands.set(developperArray);

  return console.log(table.toString(), "\n Commandes chargées");
}

module.exports = { loadCommands };
