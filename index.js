const { Client } = require("discord.js");
const client = new Client({ intents: ["Guilds"] });

client.config = require("./config.json");

client
  .login(client.config.token)
  .then(() => {
    console.log(`Le client s'est connecté en tant que ${client.user.username}`);
    client.user.setActivity(`avec ${client.guilds.cache.size} serveurs`);
  })
  .catch((err) => console.log(err));
