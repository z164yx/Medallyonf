require("dotenv").config();

require("./globals.js");

const Client = require("./lib/classes/Client.js");
let client = new Client();

client.login(process.env.BOT_TOKEN)
	.catch(console.error);

module.exports = client;
