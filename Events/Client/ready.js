const { Client } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  execute(client) {
    console.log(`Le client s'est connecté en tant que ${client.user.username}`);
  },
};
