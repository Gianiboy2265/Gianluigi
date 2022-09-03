import { config } from "dotenv"
import { Client } from "discord.js";

config();

const client = new Client({ intents: ["Guilds", "GuildMessages"] });
const token = process.env.token

client.login(token);
